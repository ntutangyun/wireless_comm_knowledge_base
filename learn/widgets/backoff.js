export function computeBackoff(cw, rng) {
  return Math.floor(rng() * (cw + 1));
}
export function nextCw(cw, cwMax) {
  return Math.min(cwMax, cw * 2 + 1);
}

export function mount(host, params, ctx) {
  const lang = ctx.lang || "en";
  const cwMin = params.cwMin ?? 15, cwMax = params.cwMax ?? 1023;
  const n = Math.max(2, params.stations ?? 2);
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  host.innerHTML = "";
  const info = document.createElement("p");
  const btn = document.createElement("button"); btn.className = "lbtn";
  btn.textContent = lang === "zh" ? "运行一轮竞争" : "Run a contention round";
  const bars = document.createElement("div");
  function round() {
    const counters = Array.from({ length: n }, () => computeBackoff(cwMin, Math.random));
    const winner = counters.indexOf(Math.min(...counters));
    bars.innerHTML = counters.map((c, i) =>
      `<div>STA ${i + 1}: backoff = <b>${c}</b>${i === winner ? (lang === "zh" ? " ← 先到，发送" : " ← reaches 0 first, transmits") : ""}</div>`).join("");
    const collisions = counters.filter(c => c === counters[winner]).length;
    info.textContent = collisions > 1
      ? (lang === "zh" ? `两站退避相同 → 冲突，CW 翻倍到 ${nextCw(cwMin, cwMax)}` : `Tie → collision; CW doubles to ${nextCw(cwMin, cwMax)}`)
      : (lang === "zh" ? "最小退避者赢得信道。" : "Lowest backoff wins the channel.");
  }
  btn.addEventListener("click", round);
  host.appendChild(info); host.appendChild(bars); host.appendChild(btn);
  if (!reduce) round();
}
