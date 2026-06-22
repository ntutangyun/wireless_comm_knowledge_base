import { parseHash, buildHash } from "./lib/router.js";
import { pick } from "./lib/i18n.js";
import { ProgressStore } from "./lib/progress.js";
import { renderBlocks } from "./render.js";
import { registry } from "./widgets/registry.js";

const app = document.getElementById("app");
const progress = new ProgressStore(window.localStorage);
const state = {
  lang: (new URLSearchParams(location.search).get("lang") || localStorage.getItem("kb_lang") || "en") === "zh" ? "zh" : "en",
  theme: localStorage.getItem("kb_theme") || "light",
  curriculum: null,
  standards: null,
  lessonCache: {},
};

const T = {
  back: { en: "KB", zh: "知识库" },
  title: { en: "Learn Wi-Fi", zh: "学习 Wi-Fi" },
  loading: { en: "Loading…", zh: "加载中…" },
  soon: { en: "coming soon", zh: "即将推出" },
  welcomeH: { en: "Learn Wi-Fi", zh: "学习 Wi-Fi" },
  welcomeP: { en: "A short, visual course through the IEEE 802 wireless standards. Pick a lesson on the left to begin — start with Foundations.", zh: "一门简短、可视化的 IEEE 802 无线标准课程。从左侧选择一节开始——建议从“基础”入手。" },
  prev: { en: "← Prev", zh: "← 上一节" },
  next: { en: "Next →", zh: "下一节 →" },
  done: { en: "Mark done", zh: "标记完成" },
  doneAgain: { en: "✓ Done", zh: "✓ 已完成" },
  lessons: { en: "lessons", zh: "节" },
  min: { en: "min", zh: "分钟" },
  references: { en: "References", zh: "参考文献" },
  refSections: { en: "Sections / clauses:", zh: "章节 / 条款：" },
};
const tr = k => pick(T[k], state.lang);

function applyChrome() {
  document.documentElement.setAttribute("lang", state.lang);
  document.documentElement.setAttribute("data-theme", state.theme);
  document.querySelectorAll("[data-i18n]").forEach(n => {
    const k = n.getAttribute("data-i18n");
    if (T[k]) n.textContent = tr(k);
  });
}

async function loadCurriculum() {
  if (state.curriculum) return state.curriculum;
  state.curriculum = await (await fetch("curriculum.json")).json();
  return state.curriculum;
}
async function loadLesson(id) {
  if (state.lessonCache[id]) return state.lessonCache[id];
  const data = await (await fetch(`lessons/${id}.json`)).json();
  state.lessonCache[id] = data;
  return data;
}
async function loadStandards() {
  if (state.standards) return state.standards;
  try { state.standards = await (await fetch("standards.json")).json(); }
  catch (e) { state.standards = {}; }
  return state.standards;
}

function ctx() {
  return {
    lang: state.lang, theme: state.theme,
    mountWidget(host, block) {
      const w = registry[block.widget];
      if (!w) { host.dataset.missing = block.widget; return; }
      w.mount(host, block.params || {}, { lang: state.lang, theme: state.theme, onComplete: () => {} });
    },
  };
}

function escapeHtml(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

// ---- references section, built from each lesson's verified cites + covers ----
function clauseLabel(c) { return (c.split(":")[1] || c).replace(/^Annex_/, "Annex "); }
function cmpClause(a, b) {
  const ax = a.startsWith("Annex"), bx = b.startsWith("Annex");
  if (ax !== bx) return ax ? 1 : -1;
  if (ax) return a.localeCompare(b);
  const A = a.split("."), B = b.split(".");
  for (let i = 0; i < Math.max(A.length, B.length); i++) {
    const d = (parseInt(A[i], 10) || 0) - (parseInt(B[i], 10) || 0);
    if (d) return d;
  }
  return 0;
}
function fmtPages(pages) {
  if (!pages || !pages.length) return "";
  const s = [...new Set(pages)].sort((a, b) => a - b);
  const ranges = []; let lo = s[0], hi = s[0];
  for (let i = 1; i < s.length; i++) { if (s[i] === hi + 1) hi = s[i]; else { ranges.push([lo, hi]); lo = hi = s[i]; } }
  ranges.push([lo, hi]);
  const parts = ranges.map(([a, b]) => a === b ? `${a}` : `${a}–${b}`);
  const plural = s.length > 1;
  return (plural ? "pp. " : "p. ") + parts.join(", ");
}
function buildReferences(lesson) {
  const cites = lesson.cites || [], covers = lesson.covers || [];
  if (!cites.length && !covers.length) return null;
  const byPdf = {};
  const grp = pid => (byPdf[pid] = byPdf[pid] || { clauses: [], cites: [] });
  covers.forEach(c => grp(c.split(":")[0]).clauses.push(clauseLabel(c)));
  cites.forEach(ct => grp(ct.pdf_id).cites.push(ct));
  const sec = document.createElement("section");
  sec.className = "refs";
  sec.appendChild(Object.assign(document.createElement("h2"), { textContent: tr("references") }));
  for (const pid of Object.keys(byPdf)) {
    const g = byPdf[pid];
    const std = document.createElement("div");
    std.className = "ref-std";
    const title = (state.standards && state.standards[pid]) || pid;
    let html = `<div class="ref-title">${escapeHtml(title)}</div>`;
    const uniq = [...new Set(g.clauses)].sort(cmpClause);
    if (uniq.length) html += `<div class="ref-clauses"><span class="ref-k">${escapeHtml(tr("refSections"))}</span> ${escapeHtml(uniq.join(", "))}</div>`;
    std.innerHTML = html;
    if (g.cites.length) {
      const ul = document.createElement("ul");
      ul.className = "ref-cites";
      g.cites.forEach(ct => {
        const li = document.createElement("li");
        const pg = fmtPages(ct.pages);
        li.innerHTML = (pg ? `<span class="ref-pg">${escapeHtml(pg)}</span> ` : "") + escapeHtml(ct.note || "");
        ul.appendChild(li);
      });
      std.appendChild(ul);
    }
    sec.appendChild(std);
  }
  return sec;
}

// ---- the persistent whole-curriculum sidebar ----
function renderSidebar(cur, activeLessonId) {
  const nav = document.createElement("nav");
  nav.className = "curriculum";
  for (const track of cur.tracks) {
    const ids = (track.lessons || []).map(l => l.id);
    const locked = ids.length === 0;
    const block = document.createElement("div");
    block.className = "trk" + (locked ? " locked" : "");
    const done = progress.completedIn(ids);
    block.innerHTML = `<div class="trk-name">${escapeHtml(pick(track.title, state.lang))}` +
      (locked ? `<span class="trk-tag">${tr("soon")}</span>` : `<span class="trk-tag">${done}/${ids.length}</span>`) + `</div>`;
    (track.lessons || []).forEach((les, i) => {
      const a = document.createElement("a");
      const isActive = les.id === activeLessonId;
      a.className = "lsn" + (isActive ? " active" : "") + (progress.isComplete(les.id) ? " done" : "");
      a.href = buildHash(track.id, les.id);
      a.innerHTML = `<span class="lsn-n">${i + 1}</span><span class="lsn-t">${escapeHtml(pick(les.title, state.lang))}</span>`;
      block.appendChild(a);
    });
    nav.appendChild(block);
  }
  return nav;
}

function renderShell(cur, activeLessonId, contentNode) {
  app.innerHTML = "";
  const layout = document.createElement("div");
  layout.className = "layout";
  layout.appendChild(renderSidebar(cur, activeLessonId));
  const content = document.createElement("div");
  content.className = "content";
  content.appendChild(contentNode);
  layout.appendChild(content);
  app.appendChild(layout);
}

function welcomeNode() {
  const w = document.createElement("div");
  w.className = "welcome";
  w.innerHTML = `<h1>${escapeHtml(tr("welcomeH"))}</h1><p>${escapeHtml(tr("welcomeP"))}</p>`;
  return w;
}

async function renderLessonContent(trackId, lessonId, cur) {
  const track = cur.tracks.find(t => t.id === trackId);
  const ids = track ? (track.lessons || []).map(l => l.id) : [];
  let lesson;
  try { lesson = await loadLesson(lessonId); }
  catch (e) { const p = document.createElement("p"); p.className = "loading"; p.textContent = "Lesson not found."; return p; }

  const wrap = document.createElement("article");
  wrap.className = "lesson";
  wrap.appendChild(Object.assign(document.createElement("h1"), { textContent: pick(lesson.title, state.lang) }));
  const est = document.createElement("div"); est.className = "est";
  est.textContent = (state.lang === "zh" ? "约 " : "~") + (lesson.estMinutes || 5) + " " + tr("min");
  wrap.appendChild(est);
  wrap.appendChild(renderBlocks(lesson.blocks, state.lang, ctx()));

  const refs = buildReferences(lesson);
  if (refs) wrap.appendChild(refs);

  const nav = document.createElement("div"); nav.className = "lesson-nav";
  const i = ids.indexOf(lessonId);
  const prev = i > 0 ? ids[i - 1] : null;
  const next = i >= 0 && i < ids.length - 1 ? ids[i + 1] : null;
  const doneLabel = progress.isComplete(lessonId) ? tr("doneAgain") : tr("done");
  nav.innerHTML =
    (prev ? `<a class="lbtn" href="${buildHash(trackId, prev)}">${tr("prev")}</a>` : `<span></span>`) +
    `<button class="lbtn" id="done-btn">${doneLabel}</button>` +
    (next ? `<a class="lbtn" href="${buildHash(trackId, next)}">${tr("next")}</a>` : `<span></span>`);
  wrap.appendChild(nav);
  progress.setLast(lessonId);
  // defer listener until in DOM
  setTimeout(() => {
    const b = document.getElementById("done-btn");
    if (b) b.addEventListener("click", () => {
      progress.markComplete(lessonId);
      if (next) location.hash = buildHash(trackId, next); else route();
    });
  }, 0);
  return wrap;
}

async function route() {
  const cur = await loadCurriculum();
  await loadStandards();
  const { trackId, lessonId } = parseHash(location.hash);
  if (trackId && lessonId) {
    const content = await renderLessonContent(trackId, lessonId, cur);
    renderShell(cur, lessonId, content);
  } else {
    renderShell(cur, null, welcomeNode());
  }
  window.scrollTo(0, 0);
}

document.getElementById("lang-btn").addEventListener("click", () => {
  state.lang = state.lang === "zh" ? "en" : "zh";
  localStorage.setItem("kb_lang", state.lang);
  applyChrome(); route();
});
document.getElementById("theme-btn").addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("kb_theme", state.theme);
  applyChrome();
});
// ---- mobile curriculum drawer ----
function setNav(open) {
  document.body.classList.toggle("nav-open", open);
  const mb = document.getElementById("menu-btn");
  if (mb) mb.setAttribute("aria-expanded", open ? "true" : "false");
}
const menuBtn = document.getElementById("menu-btn");
if (menuBtn) menuBtn.addEventListener("click", () => setNav(!document.body.classList.contains("nav-open")));
const scrim = document.getElementById("lscrim");
if (scrim) scrim.addEventListener("click", () => setNav(false));
document.addEventListener("keydown", e => { if (e.key === "Escape") setNav(false); });

window.addEventListener("hashchange", () => { setNav(false); route(); });
applyChrome();
route();
