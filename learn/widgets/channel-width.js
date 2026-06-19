export const WIDTHS = [20, 40, 80, 160, 320];

export function subchannels(widthMhz) {
  return Math.round(widthMhz / 20);
}

export function effectiveWidth(widthMhz, puncturedIdx = []) {
  const n = subchannels(widthMhz);
  const punct = new Set((puncturedIdx || []).filter(i => i >= 0 && i < n));
  return (n - punct.size) * 20;
}

export function mount(host, params, ctx) {
  const lang = ctx.lang || "en";
  const allowPuncture = params.puncturing !== false;
  let width = params.width ?? 160;
  let punctured = new Set();
  host.innerHTML = "";

  const controls = document.createElement("div");
  controls.style.cssText = "display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px";
  WIDTHS.forEach(w => {
    const b = document.createElement("button");
    b.className = "lbtn"; b.textContent = w + " MHz";
    b.addEventListener("click", () => { width = w; punctured = new Set(); render(); });
    controls.appendChild(b);
  });

  const bar = document.createElement("div");
  bar.style.cssText = "display:flex;gap:2px;height:42px;margin-bottom:8px";
  const out = document.createElement("div");
  out.style.cssText = "font-size:13px";
  const hint = document.createElement("div");
  hint.style.cssText = "color:var(--fg-3);font-size:11px;margin-top:4px";
  if (allowPuncture) hint.textContent = lang === "zh" ? "点击某个 20 MHz 子信道可将其“打孔”（例如避开干扰）。" : "Click a 20 MHz sub-channel to puncture it (e.g. to dodge interference).";

  function render() {
    const n = subchannels(width);
    bar.innerHTML = "";
    for (let i = 0; i < n; i++) {
      const seg = document.createElement("div");
      const isP = punctured.has(i);
      seg.style.cssText = `flex:1;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:10px;` +
        (isP ? "background:var(--bg-3);color:var(--fg-3);border:1px dashed var(--border-strong)" : "background:var(--accent);color:var(--accent-fg);cursor:pointer");
      seg.textContent = isP ? "✕" : "20";
      if (allowPuncture) seg.addEventListener("click", () => {
        if (punctured.has(i)) punctured.delete(i); else punctured.add(i);
        render();
      });
      bar.appendChild(seg);
    }
    const eff = effectiveWidth(width, [...punctured]);
    out.innerHTML = lang === "zh"
      ? `信道：<b>${width} MHz</b>（${n} × 20 MHz）→ 有效带宽 <b>${eff} MHz</b>`
      : `Channel: <b>${width} MHz</b> (${n} × 20 MHz) → usable <b>${eff} MHz</b>`;
  }
  host.appendChild(controls); host.appendChild(bar); host.appendChild(out);
  if (allowPuncture) host.appendChild(hint);
  render();
}
