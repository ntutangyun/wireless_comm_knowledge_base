export function gradeQuiz(selected, answerKey) {
  const perItem = answerKey.map((a, i) => selected[i] === a);
  return { correct: perItem.filter(Boolean).length, total: answerKey.length, perItem };
}

export function mount(host, params, ctx) {
  const lang = ctx.lang || "en";
  const pick = b => (b && (b[lang] || b.en)) || "";
  const qs = params.questions || [];
  const selected = new Array(qs.length).fill(null);
  host.innerHTML = "";
  const form = document.createElement("form");
  qs.forEach((item, qi) => {
    const fs = document.createElement("fieldset");
    fs.innerHTML = `<legend>${pick(item.q)}</legend>`;
    item.options.forEach((opt, oi) => {
      const id = `q${qi}o${oi}`;
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="q${qi}" value="${oi}" id="${id}"> ${pick(opt)}`;
      label.querySelector("input").addEventListener("change", () => { selected[qi] = oi; });
      fs.appendChild(label); fs.appendChild(document.createElement("br"));
    });
    form.appendChild(fs);
  });
  const btn = document.createElement("button");
  btn.type = "button"; btn.className = "lbtn"; btn.textContent = lang === "zh" ? "提交" : "Check";
  const result = document.createElement("p");
  btn.addEventListener("click", () => {
    const g = gradeQuiz(selected, qs.map(q => q.answer));
    result.textContent = (lang === "zh" ? `答对 ${g.correct} / ${g.total}` : `${g.correct} / ${g.total} correct`);
    if (g.correct === g.total && ctx.onComplete) ctx.onComplete();
  });
  form.appendChild(btn); form.appendChild(result);
  host.appendChild(form);
}
