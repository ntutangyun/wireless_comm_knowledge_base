export function packRUs(plan, totalTones) {
  const T = totalTones || 1;
  return (plan || []).map((ru, i) => ({
    tones: ru.tones,
    frac: ru.tones / T,
    label: ru.user || { en: "User " + (i + 1), zh: "用户 " + (i + 1) },
  }));
}

export function mount(host, params, ctx) {
  const lang = ctx.lang || "en";
  const pick = b => (b && (b[lang] || b.en)) || "";
  const total = params.totalTones ?? 242;
  const rus = packRUs(params.rus || [], total);
  const colors = ["#6c5ce7", "#00946d", "#b48a00", "#b40000", "#0066cc"];
  host.innerHTML = "";
  const title = document.createElement("p");
  title.textContent = lang === "zh"
    ? "一个信道，按资源单元（RU）切分给多个用户同时发送（OFDMA）："
    : "One channel sliced into Resource Units (RUs) — multiple users transmit at once (OFDMA):";
  const bar = document.createElement("div");
  bar.style.cssText = "display:flex;height:46px;border:1px solid var(--border-strong);border-radius:4px;overflow:hidden";
  rus.forEach((ru, i) => {
    const seg = document.createElement("div");
    seg.style.cssText = `width:${(ru.frac * 100).toFixed(2)}%;background:${colors[i % colors.length]};color:#fff;` +
      "display:flex;align-items:center;justify-content:center;font-size:11px;text-align:center";
    seg.textContent = `${pick(ru.label)} (${ru.tones}t)`;
    bar.appendChild(seg);
  });
  host.appendChild(title); host.appendChild(bar);
}
