#!/usr/bin/env node
// Pre-render every Mermaid diagram block of the Learn Wi-Fi lessons to SVG,
// one file per unique source, named by sha1(source). Used by build_epub.py.
// Usage: node render_diagrams.mjs [--lang zh|en]
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import puppeteer from 'puppeteer-core';

const scriptsDir = path.dirname(fileURLToPath(import.meta.url));
const learnDir = path.dirname(scriptsDir);
const lessonsDir = path.join(learnDir, 'lessons');
const outDir = path.join(learnDir, 'build', 'diagrams');
const langIdx = process.argv.indexOf('--lang');
const lang = langIdx === -1 ? 'zh' : process.argv[langIdx + 1];

const sources = new Map(); // sha1 -> mermaid source
for (const f of readdirSync(lessonsDir).filter((f) => f.endsWith('.json'))) {
  const lesson = JSON.parse(readFileSync(path.join(lessonsDir, f), 'utf8'));
  for (const b of lesson.blocks || []) {
    if (b.type !== 'diagram') continue;
    const src = b[lang] || b.en;
    sources.set(createHash('sha1').update(src, 'utf8').digest('hex'), src);
  }
}
mkdirSync(outDir, { recursive: true });
const pending = [...sources].filter(([h]) => !existsSync(path.join(outDir, h + '.svg')));
console.log(`diagrams (${lang}): ${sources.size} unique, ${pending.length} to render`);
if (!pending.length) process.exit(0);

const browser = await puppeteer.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage();
const mermaidJs = readFileSync(path.join(scriptsDir, 'node_modules', 'mermaid', 'dist', 'mermaid.min.js'), 'utf8');
await page.setContent('<!doctype html><html><body></body></html>');
await page.addScriptTag({ content: mermaidJs });
// htmlLabels:false is load-bearing: foreignObject HTML labels don't render in
// ebook readers' <img> SVG handling — force plain SVG <text> labels.
await page.evaluate(() =>
  mermaid.initialize({ startOnLoad: false, theme: 'neutral', htmlLabels: false, flowchart: { htmlLabels: false } })
);

const failures = [];
let i = 0;
for (const [hash, src] of pending) {
  i += 1;
  try {
    const svg = await page.evaluate(async (source, id) => {
      const { svg } = await mermaid.render('d' + id, source);
      return svg;
    }, src, i);
    writeFileSync(path.join(outDir, hash + '.svg'), svg, 'utf8');
  } catch (e) {
    failures.push({ hash, error: String(e).split('\n')[0], head: src.slice(0, 100) });
  }
  if (i % 50 === 0) console.log(`  rendered ${i}/${pending.length}`);
}
await browser.close();
console.log(`done: ${pending.length - failures.length} rendered, ${failures.length} failed`);
if (failures.length) {
  console.error(JSON.stringify(failures, null, 2));
  process.exit(1);
}
