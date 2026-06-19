// MCS indices and modulation order are real (802.11be EHT runs MCS 0-13, topping
// out at 4096-QAM). The SNR thresholds and rates here are ILLUSTRATIVE — rough
// teaching values, not the standard's exact link-curve numbers.
export const MCS_TABLE = [
  { mcs: 0, mod: "BPSK", minSnr: 5, mbps: 8 },
  { mcs: 1, mod: "QPSK", minSnr: 8, mbps: 16 },
  { mcs: 2, mod: "QPSK", minSnr: 11, mbps: 24 },
  { mcs: 3, mod: "16-QAM", minSnr: 14, mbps: 33 },
  { mcs: 4, mod: "16-QAM", minSnr: 18, mbps: 49 },
  { mcs: 5, mod: "64-QAM", minSnr: 22, mbps: 65 },
  { mcs: 6, mod: "64-QAM", minSnr: 25, mbps: 73 },
  { mcs: 7, mod: "64-QAM", minSnr: 27, mbps: 81 },
  { mcs: 8, mod: "256-QAM", minSnr: 30, mbps: 98 },
  { mcs: 9, mod: "256-QAM", minSnr: 32, mbps: 108 },
  { mcs: 10, mod: "1024-QAM", minSnr: 35, mbps: 122 },
  { mcs: 11, mod: "1024-QAM", minSnr: 37, mbps: 135 },
  { mcs: 12, mod: "4096-QAM", minSnr: 40, mbps: 147 },
  { mcs: 13, mod: "4096-QAM", minSnr: 43, mbps: 160 }
];

export function mcsForSnr(snrDb, table = MCS_TABLE) {
  let best = null;
  for (const row of table) if (snrDb >= row.minSnr) best = row;
  return best;
}

export function mount(host, params, ctx) {
  const lang = ctx.lang || "en";
  const lo = params.minSnr ?? 0, hi = params.maxSnr ?? 50, start = params.start ?? 25;
  host.innerHTML = "";
  const label = document.createElement("label");
  label.style.cssText = "display:block;font-size:13px;margin-bottom:8px";
  const labelText = document.createElement("span");
  const input = document.createElement("input");
  input.type = "range"; input.min = lo; input.max = hi; input.value = start; input.step = 1;
  input.style.cssText = "width:100%;margin-top:6px";
  label.appendChild(labelText);
  label.appendChild(input);
  const out = document.createElement("div");
  out.style.cssText = "font-size:14px;margin-top:8px;line-height:1.8";
  const note = document.createElement("div");
  note.style.cssText = "color:var(--fg-3);font-size:11px;margin-top:6px";
  note.textContent = lang === "zh" ? "数值为示意，用于建立直觉，非标准精确值。" : "Values are illustrative — for intuition, not the standard's exact figures.";
  function refresh() {
    const snr = Number(input.value);
    labelText.textContent = (lang === "zh" ? "信噪比 SNR：" : "Signal quality (SNR): ") + snr + " dB";
    const r = mcsForSnr(snr);
    out.innerHTML = !r
      ? (lang === "zh" ? "<b>无法建立链路</b>（信号太弱）。" : "<b>No link</b> — signal too weak to decode.")
      : (lang === "zh"
        ? `选用 <b>MCS ${r.mcs}</b> · 调制 <b>${r.mod}</b> · 约 <b>${r.mbps} Mb/s</b>/流`
        : `Picks <b>MCS ${r.mcs}</b> · modulation <b>${r.mod}</b> · ~<b>${r.mbps} Mb/s</b> per stream`);
  }
  input.addEventListener("input", refresh);
  host.appendChild(label); host.appendChild(out); host.appendChild(note);
  refresh();
}
