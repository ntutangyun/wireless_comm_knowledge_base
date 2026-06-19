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
  lessonCache: {},
};

function applyChrome() {
  document.documentElement.setAttribute("lang", state.lang);
  document.documentElement.setAttribute("data-theme", state.theme);
  document.querySelectorAll("[data-i18n]").forEach(n => {
    const k = n.getAttribute("data-i18n");
    const dict = { back: { en: "KB", zh: "知识库" }, title: { en: "Learn Wi-Fi", zh: "学习 Wi-Fi" }, loading: { en: "Loading…", zh: "加载中…" } };
    if (dict[k]) n.textContent = pick(dict[k], state.lang);
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

function renderHome(cur) {
  app.innerHTML = "";
  const grid = document.createElement("div"); grid.className = "track-grid";
  for (const track of cur.tracks) {
    const card = document.createElement("div"); card.className = "track-card";
    const ids = (track.lessons || []).map(l => l.id);
    const locked = ids.length === 0;
    if (locked) card.classList.add("locked");
    const done = progress.completedIn(ids);
    const pct = ids.length ? Math.round((done / ids.length) * 100) : 0;
    card.innerHTML =
      `<h2>${escapeHtml(pick(track.title, state.lang))}</h2>` +
      `<div class="meta">${ids.length} ${state.lang === "zh" ? "节" : "lessons"}${locked ? (state.lang === "zh" ? " · 即将推出" : " · coming soon") : ` · ${done}/${ids.length}`}</div>` +
      `<p>${escapeHtml(pick(track.blurb, state.lang))}</p>` +
      (locked ? "" : `<div class="track-progress"><span style="width:${pct}%"></span></div>`);
    if (!locked) card.addEventListener("click", () => { location.hash = buildHash(track.id, ids[0]); });
    grid.appendChild(card);
  }
  app.appendChild(grid);
}

async function renderLesson(trackId, lessonId, cur) {
  const track = cur.tracks.find(t => t.id === trackId);
  const ids = track ? (track.lessons || []).map(l => l.id) : [];
  let lesson;
  try { lesson = await loadLesson(lessonId); }
  catch (e) { app.innerHTML = `<p class="loading">Lesson not found.</p>`; return; }
  app.innerHTML = "";
  const wrap = document.createElement("article"); wrap.className = "lesson";
  wrap.appendChild(Object.assign(document.createElement("h1"), { textContent: pick(lesson.title, state.lang) }));
  const est = document.createElement("div"); est.className = "est";
  est.textContent = (state.lang === "zh" ? "约 " : "~") + (lesson.estMinutes || 5) + (state.lang === "zh" ? " 分钟" : " min");
  wrap.appendChild(est);
  wrap.appendChild(renderBlocks(lesson.blocks, state.lang, ctx()));

  const nav = document.createElement("div"); nav.className = "lesson-nav";
  const i = ids.indexOf(lessonId);
  const prev = i > 0 ? ids[i - 1] : null;
  const next = i >= 0 && i < ids.length - 1 ? ids[i + 1] : null;
  nav.innerHTML =
    (prev ? `<a class="lbtn" href="${buildHash(trackId, prev)}">${state.lang === "zh" ? "上一节" : "Prev"}</a>` : `<span></span>`) +
    `<button class="lbtn" id="done-btn">${state.lang === "zh" ? "标记完成" : "Mark done"}</button>` +
    (next ? `<a class="lbtn" href="${buildHash(trackId, next)}">${state.lang === "zh" ? "下一节" : "Next"}</a>` : `<span></span>`);
  wrap.appendChild(nav);
  app.appendChild(wrap);
  progress.setLast(lessonId);
  document.getElementById("done-btn").addEventListener("click", () => {
    progress.markComplete(lessonId);
    if (next) location.hash = buildHash(trackId, next); else location.hash = buildHash();
  });
  window.scrollTo(0, 0);
}

function escapeHtml(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

async function route() {
  const cur = await loadCurriculum();
  const { trackId, lessonId } = parseHash(location.hash);
  if (trackId && lessonId) return renderLesson(trackId, lessonId, cur);
  renderHome(cur);
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
window.addEventListener("hashchange", route);
applyChrome();
route();
