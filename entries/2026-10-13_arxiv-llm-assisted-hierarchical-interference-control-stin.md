---
id: 2026-10-13_arxiv-llm-assisted-hierarchical-interference-control-stin
date_published: 2026-10-09
date_found: 2026-10-13
technology: satellite
type: academic-paper
title_en: "LLM-Assisted Hierarchical Interference Control for Satellite-Terrestrial Integrated Networks"
title_zh: "面向星地融合网络的 LLM 辅助分层干扰控制"
url: "https://arxiv.org/abs/2610.13108"
source_quality: abstract_only
topics: [LEO, interference, spectrum-sharing, LLM, satellite-terrestrial]
topic_primary: leo-constellations
topics_secondary: [sat-ai, ngso-regulation]
novelty_score: 3
---

## Summary (EN)

Cao, Yuan and Zhang (arXiv 2610.13108, a letter submitted 2026-10-09) address the time-varying aggregate interference that LEO satellites cause to terrestrial networks (TN), where conservative control degrades LEO quality of service (QoS). The proposed hierarchical framework combines geometry-based interference estimation, QoS-constrained power control, adaptive energy detection, large-language-model (LLM)-assisted candidate ranking, stay-or-switch decisions and target-band selection, with deterministic verification. The current band is retained only when both spectrum-hole and power-feasibility conditions hold, with periodic reevaluation. Over a 300-s horizon with 0.5-s sampling, the method keeps the aggregate interference-to-noise ratio (INR) from exceeding the -12.2 dB threshold and achieves a time-averaged mean LEO-link rate of 320.97 Mbps with 100% QoS satisfaction, outperforming power-only and satellite-muting baselines.

## Summary (ZH)

Cao、Yuan 与 Zhang（arXiv 2610.13108，2026 年 10 月 9 日提交的快报）针对 LEO 卫星对地面网络（TN）造成的时变聚合干扰问题展开研究，保守的控制会降低 LEO 服务质量（QoS）。所提分层框架结合了基于几何的干扰估计、QoS 约束功率控制、自适应能量检测、大语言模型（LLM）辅助的候选排序、保持或切换决策以及目标频段选择，并带有确定性验证。仅当频谱空洞与功率可行性条件同时满足时才保留当前频段，并周期性重新评估。在 300 秒时间范围、0.5 秒采样的仿真中，该方法使聚合干扰噪声比（INR）不超过 -12.2 dB 门限，并取得 320.97 Mbps 的时间平均 LEO 链路速率，QoS 满足率为 100%，优于仅功率控制和卫星静默基线。

## Key technical points (EN)

- **Problem**: time-varying aggregate LEO interference into terrestrial networks vs. LEO QoS under conservative control.
- **Components**: geometry-based interference estimation, QoS-constrained power control, adaptive energy detection, LLM-assisted candidate ranking, stay-or-switch decision, target-band selection, deterministic verification.
- **Switch rule**: current band retained only if spectrum-hole and power-feasibility conditions both hold; periodic reevaluation.
- **Result**: aggregate INR kept within the -12.2 dB threshold; mean LEO-link rate 320.97 Mbps; 100% QoS satisfaction (300 s horizon, 0.5 s sampling).
- **Baselines**: power-only control and satellite muting.

## Key technical points (ZH)

- **问题**：LEO 对地面网络的时变聚合干扰，与保守控制下的 LEO QoS 之间的矛盾。
- **组成**：基于几何的干扰估计、QoS 约束功率控制、自适应能量检测、LLM 辅助候选排序、保持或切换决策、目标频段选择、确定性验证。
- **切换规则**：仅当频谱空洞与功率可行性条件同时满足时保留当前频段；周期性重新评估。
- **结果**：聚合 INR 保持在 -12.2 dB 门限内；平均 LEO 链路速率 320.97 Mbps；QoS 满足率 100%（300 秒范围，0.5 秒采样）。
- **基线**：仅功率控制与卫星静默。

## Why it matters / what's new (EN)

This letter pairs interference estimation with LLM-assisted band selection and a deterministic check, evaluated in simulation only.

## Why it matters / what's new (ZH)

本快报将干扰估计与 LLM 辅助的频段选择及确定性校验相结合，仅在仿真中评估。

## Images

None.
