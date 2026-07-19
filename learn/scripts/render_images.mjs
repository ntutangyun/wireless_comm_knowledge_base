#!/usr/bin/env node
// Rasterize every visual of the Learn Wi-Fi course to PNG for the ebook edition:
//   - Mermaid diagram blocks  -> build/images/d-<sha1(source)>.png   (per language)
//   - inline figure SVG blocks -> build/images/f-<sha1(svg)>.png     (language-independent)
//   - a generated book cover   -> build/images/cover-<lang>.png
// PNG (not SVG) because several mobile reader engines (e.g. Huawei 阅读) drop
// SVG content silently. Rendered at 2x device scale for crisp text.
// Usage: node render_images.mjs [--lang zh|en]
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import puppeteer from 'puppeteer-core';

const scriptsDir = path.dirname(fileURLToPath(import.meta.url));
const learnDir = path.dirname(scriptsDir);
const lessonsDir = path.join(learnDir, 'lessons');
const outDir = path.join(learnDir, 'build', 'images');
const langIdx = process.argv.indexOf('--lang');
const lang = langIdx === -1 ? 'zh' : process.argv[langIdx + 1];

const sha1 = (s) => createHash('sha1').update(s, 'utf8').digest('hex');

const diagrams = new Map(); // sha1(source) -> mermaid source
const figures = new Map();  // sha1(svg) -> svg markup
for (const f of readdirSync(lessonsDir).filter((f) => f.endsWith('.json'))) {
  const lesson = JSON.parse(readFileSync(path.join(lessonsDir, f), 'utf8'));
  for (const b of lesson.blocks || []) {
    if (b.type === 'diagram') {
      const src = b[lang] || b.en;
      diagrams.set(sha1(src), src);
    } else if (b.type === 'figure' && b.svg) {
      figures.set(sha1(b.svg), b.svg);
    }
  }
}
mkdirSync(outDir, { recursive: true });
const pendingD = [...diagrams].filter(([h]) => !existsSync(path.join(outDir, `d-${h}.png`)));
const pendingF = [...figures].filter(([h]) => !existsSync(path.join(outDir, `f-${h}.png`)));
const coverName = `cover-${lang}.png`;
const needCover = !existsSync(path.join(outDir, coverName));
console.log(`diagrams (${lang}): ${diagrams.size} unique, ${pendingD.length} to render; ` +
            `figures: ${figures.size} unique, ${pendingF.length} to render; ` +
            `cover: ${needCover ? 'to render' : 'cached'}`);
if (!pendingD.length && !pendingF.length && !needCover) process.exit(0);

const browser = await puppeteer.launch({ channel: 'chrome', headless: true });

// Page 1 keeps the mermaid library loaded; page 2 is wiped per-item for rasterizing.
const mermaidPage = await browser.newPage();
const mermaidJs = readFileSync(path.join(scriptsDir, 'node_modules', 'mermaid', 'dist', 'mermaid.min.js'), 'utf8');
await mermaidPage.setContent('<!doctype html><html><body></body></html>');
await mermaidPage.addScriptTag({ content: mermaidJs });
await mermaidPage.evaluate(() =>
  mermaid.initialize({ startOnLoad: false, theme: 'neutral', htmlLabels: false, flowchart: { htmlLabels: false } })
);

const shotPage = await browser.newPage();
await shotPage.setViewport({ width: 1400, height: 1200, deviceScaleFactor: 2 });

async function rasterize(svgMarkup, cssWidthPx) {
  const widthRule = cssWidthPx ? `#wrap { width: ${cssWidthPx}px; }` : '';
  await shotPage.setContent(
    '<!doctype html><html><head><style>' +
    'body { margin: 0; background: #ffffff; color: #1a1a1a; font-family: sans-serif; }' +
    '#wrap { display: inline-block; padding: 8px; background: #ffffff; }' +
    '#wrap svg { display: block; }' +
    widthRule +
    `</style></head><body><div id="wrap">${svgMarkup}</div></body></html>`);
  const el = await shotPage.$('#wrap');
  return el.screenshot({ type: 'png' });
}

const failures = [];
let i = 0;
const total = pendingD.length + pendingF.length;

for (const [hash, src] of pendingD) {
  i += 1;
  try {
    const svg = await mermaidPage.evaluate(async (source, id) => {
      const { svg } = await mermaid.render('d' + id, source);
      return svg;
    }, src, i);
    // Mermaid emits width:100% + a max-width style; pin the wrapper to the natural width.
    const m = svg.match(/max-width:\s*([\d.]+)px/);
    const width = m ? Math.min(Math.ceil(parseFloat(m[1])), 1100) : 800;
    writeFileSync(path.join(outDir, `d-${hash}.png`), await rasterize(svg, width));
  } catch (e) {
    failures.push({ kind: 'diagram', hash, error: String(e).split('\n')[0], head: src.slice(0, 100) });
  }
  if (i % 100 === 0) console.log(`  rendered ${i}/${total}`);
}

for (const [hash, svg] of pendingF) {
  i += 1;
  try {
    // Figures carry a viewBox but no width; render at design width so text is legible.
    const m = svg.match(/viewBox=['"]\s*[\d.-]+\s+[\d.-]+\s+([\d.]+)\s+[\d.]+\s*['"]/);
    const width = m ? Math.min(Math.ceil(parseFloat(m[1])), 1100) : 600;
    writeFileSync(path.join(outDir, `f-${hash}.png`), await rasterize(svg, width));
  } catch (e) {
    failures.push({ kind: 'figure', hash, error: String(e).split('\n')[0], head: svg.slice(0, 100) });
  }
  if (i % 100 === 0) console.log(`  rendered ${i}/${total}`);
}

if (needCover) {
  const subtitle = lang === 'zh' ? 'IEEE 802 无线标准课程' : 'An IEEE 802 Standards Course';
  const edition = lang === 'zh' ? '中文版' : 'English edition';
  const waves = [[60, 0.9], [110, 0.65], [160, 0.4], [210, 0.2]].map(([r, o]) =>
    `<path d="M ${300 - r} 620 A ${r} ${r} 0 0 1 ${300 + r} 620" fill="none" stroke="#4a7ab5" stroke-width="6" opacity="${o}"/>`
  ).join('');
  const coverSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="600" height="800">' +
    '<rect width="600" height="800" fill="#12263f"/>' + waves +
    '<circle cx="300" cy="620" r="14" fill="#e8b84b"/>' +
    '<text x="300" y="200" text-anchor="middle" font-family="sans-serif" font-size="52" font-weight="bold" fill="#ffffff">Learn Wi-Fi</text>' +
    `<text x="300" y="270" text-anchor="middle" font-family="sans-serif" font-size="30" fill="#c8d6e8">${subtitle}</text>` +
    `<text x="300" y="330" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#8aa3c0">${edition} · ntutangyun</text>` +
    '</svg>';
  try {
    writeFileSync(path.join(outDir, coverName), await rasterize(coverSvg, 600));
  } catch (e) {
    failures.push({ kind: 'cover', hash: coverName, error: String(e).split('\n')[0] });
  }
}

await browser.close();
console.log(`done: ${total - failures.length + (needCover ? 1 : 0)} rendered, ${failures.length} failed`);
if (failures.length) {
  console.error(JSON.stringify(failures, null, 2));
  process.exit(1);
}
