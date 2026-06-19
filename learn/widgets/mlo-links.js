// Simplified MLO model for intuition:
//   STR   = Simultaneous Transmit and Receive -> links run in parallel (sum).
//   NSTR  = Non-STR -> can't truly run both at once; modelled as one-at-a-time.
//   EMLSR = Enhanced Multi-Link Single Radio -> listens on all, one active TX.
export function activeThroughput(links, mode) {
  const on = (links || []).filter(l => l.on);
  if (!on.length) return 0;
  if (mode === "STR") return on.reduce((a, l) => a + l.rate, 0);
  return Math.max(...on.map(l => l.rate)); // NSTR / EMLSR: best single link
}

const MODES = ["STR", "NSTR", "EMLSR"];

export function mount(host, params, ctx) {
  const lang = ctx.lang || "en";
  const links = (params.links || [
    { band: "2.4 GHz", rate: 200, on: true },
    { band: "5 GHz", rate: 1200, on: true },
    { band: "6 GHz", rate: 2400, on: true }
  ]).map(l => ({ ...l }));
  let mode = params.mode || "STR";
  host.innerHTML = "";

  const modeRow = document.createElement("div");
  modeRow.style.cssText = "display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap";
  MODES.forEach(m => {
    const b = document.createElement("button"); b.className = "lbtn"; b.textContent = m;
    b.addEventListener("click", () => { mode = m; render(); });
    modeRow.appendChild(b);
  });
  const linkRows = document.createElement("div");
  const out = document.createElement("div");
  out.style.cssText = "font-size:14px;margin-top:10px";

  function render() {
    linkRows.innerHTML = "";
    links.forEach((l, i) => {
      const row = document.createElement("label");
      row.style.cssText = "display:flex;align-items:center;gap:8px;font-size:13px;padding:3px 0";
      const cb = document.createElement("input"); cb.type = "checkbox"; cb.checked = l.on;
      cb.addEventListener("change", () => { l.on = cb.checked; render(); });
      const span = document.createElement("span");
      span.textContent = `${l.band} — ${l.rate} Mb/s`;
      row.appendChild(cb); row.appendChild(span); linkRows.appendChild(row);
    });
    const total = activeThroughput(links, mode);
    const modeNote = mode === "STR"
      ? (lang === "zh" ? "（多链路真正并行 → 求和）" : "(links run in parallel → sum)")
      : (lang === "zh" ? "（同一时刻仅一条链路 → 取最优）" : "(one link at a time → best link)");
    out.innerHTML = (lang === "zh" ? `模式 <b>${mode}</b>：合计 <b>${total} Mb/s</b> ` : `Mode <b>${mode}</b>: aggregate <b>${total} Mb/s</b> `) + modeNote;
  }
  host.appendChild(modeRow); host.appendChild(linkRows); host.appendChild(out);
  render();
}
