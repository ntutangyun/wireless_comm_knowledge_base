const MIN_W = 28;
export function layoutFields(fields, totalWidth) {
  const n = fields.length;
  if (n === 0) return [];
  const total = fields.reduce((a, f) => a + (f.octets || 1), 0) || 1;
  // Guarantee every field at least MIN_W, then split the leftover width
  // proportionally by octets. This keeps the floor while summing to totalWidth
  // whenever totalWidth >= n * MIN_W.
  const extra = Math.max(0, totalWidth - n * MIN_W);
  let x = 0;
  return fields.map(f => {
    const w = MIN_W + ((f.octets || 1) / total) * extra;
    const out = { name: f.name, octets: f.octets, x, w };
    x += w;
    return out;
  });
}

export function mount(host, params, ctx) {
  const lang = ctx.lang || "en";
  const pick = b => (b && (b[lang] || b.en)) || "";
  const fields = params.fields || [];
  const W = 640, H = 56;
  const laid = layoutFields(fields, W);
  host.innerHTML = "";
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`); svg.setAttribute("width", "100%"); svg.style.maxWidth = W + "px";
  const detail = document.createElement("p"); detail.className = "fa-detail";
  detail.textContent = lang === "zh" ? "点击任一字段查看含义。" : "Click any field to see what it means.";
  laid.forEach((f, i) => {
    const g = document.createElementNS(svgNS, "g"); g.style.cursor = "pointer"; g.setAttribute("tabindex", "0");
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", f.x + 1); rect.setAttribute("y", 4); rect.setAttribute("width", Math.max(1, f.w - 2));
    rect.setAttribute("height", H - 24); rect.setAttribute("fill", "var(--bg-3)"); rect.setAttribute("stroke", "var(--border-strong)");
    const label = document.createElementNS(svgNS, "text");
    label.setAttribute("x", f.x + f.w / 2); label.setAttribute("y", 24); label.setAttribute("text-anchor", "middle");
    label.setAttribute("font-size", "9"); label.setAttribute("fill", "var(--fg)"); label.textContent = pick(f.name);
    const oct = document.createElementNS(svgNS, "text");
    oct.setAttribute("x", f.x + f.w / 2); oct.setAttribute("y", H - 4); oct.setAttribute("text-anchor", "middle");
    oct.setAttribute("font-size", "8"); oct.setAttribute("fill", "var(--fg-3)"); oct.textContent = (fields[i].octets ?? "") + (lang === "zh" ? " 字节" : " B");
    const show = () => {
      const src = fields[i];
      detail.textContent = pick(src.name) + " — " + pick(src.desc) + (src.cite ? `  [${src.cite.pdf_id} p.${(src.cite.pages || []).join(",")}]` : "");
    };
    g.addEventListener("click", show);
    g.addEventListener("keydown", e => { if (e.key === "Enter") show(); });
    g.appendChild(rect); g.appendChild(label); g.appendChild(oct); svg.appendChild(g);
  });
  host.appendChild(svg); host.appendChild(detail);
}
