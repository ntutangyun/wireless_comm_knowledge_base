---
id: 2026-11-18_arxiv-site-specific-cell-shaping-agentic-framework-antenna-configuration
date_published: 2026-11-14
date_found: 2026-11-18
type: academic-paper
technology: cellular
title_en: "Site-Specific Cell Shaping: An Agentic Framework"
title_zh: "站点特定的小区整形：一种智能体框架"
url: "https://arxiv.org/abs/2611.19212"
source_quality: full
topics: [cell-shaping, antenna-downtilt, HPBW, ray-tracing, Sionna-RT, DeepMIMO, LLM-agent, outage-probability, TR-38.901]
topic_primary: cellular-ai
topics_secondary: [6g-vision]
novelty_score: 3
---

## Summary (EN)

Xu, Wang and Liu (University of Hong Kong) address cell shaping: choosing each base station's antenna downtilt and horizontal and vertical half-power beamwidths (HPBWs) to minimize downlink outage (SINR below 0 dB), where the best setting depends on site geometry. The joint search is nonconvex and combinatorial. They propose a closed loop of a Configuration Agent that proposes settings from a validated library of 1,693 antenna configurations, a ray-tracing evaluator (Sionna RT), and a Reflection Agent that diagnoses which users were rescued, lost or remain uncovered and stores experience, for up to 20 iterations.

## Summary (ZH)

Xu、Wang 与 Liu（香港大学）研究小区整形：选择各基站天线的下倾角与水平、垂直半功率波束宽度（HPBW），以最小化下行中断概率（SINR 低于 0 dB），最优设置取决于站点几何。该联合搜索是非凸组合问题。他们提出一个闭环：配置智能体从含 1,693 种天线配置的已验证库中提出设置，射线追踪评估器（Sionna RT）给出结果，反思智能体诊断哪些用户被挽救、丢失或持续未覆盖并存储经验，最多迭代 20 次。

## Key technical points (EN)

- Antenna model: TR 38.901 element pattern (8 dBi, 65°/65° HPBW); library synthesis uses a 30 dB target-pattern attenuation cap; the fixed baseline uses TR 36.873 defaults (about 12 degrees downtilt, 60 degree horizontal and 15 degree vertical HPBW). Each BS has an 8x8 vertically polarized UPA at 30 dBm total power and 10 MHz bandwidth.
- Scenarios (carrier 2 GHz (Boston) / 28 GHz (O1)): Boston (5 BSs, 600 m x 100 m corridor, Boston Twin model with Sionna RT) and DeepMIMO O1 (4 BSs, 300 m x 37 m region); 1,000 optimization and 1,000 evaluation UEs per set, averaged over 10 evaluation sets.
- Baselines: fixed 3GPP configuration, random search, coordinate search and Gaussian-process Bayesian optimization (BO).
- Boston: outage falls from 0.146 to 0.078 (46.6% relative reduction); random search reaches 0.115, coordinate search 0.118 and BO 0.079, nearly tied. Evaluation-set outage is 0.089.
- O1: outage falls from 0.283 to 0.016 (0.013 on the evaluation set), 64.4% below BO on the optimization set and 74.0% below on the evaluation set.
- Ablations (optimization/evaluation outage): Boston full 0.078/0.089, scalar feedback 0.083/0.115, without reflection 0.091/0.101; O1 full 0.016/0.013, scalar 0.110/0.091, without reflection 0.041/0.051.
- Stated caveats: in Boston the fifth-percentile SINR worsens from -2.22 to -2.99 dB, so some users do worse; Boston's margin over BO is small; only two scenarios with fixed BS locations and powers; negligible mutual coupling assumed; both agents run on GPT-5.6-Sol via the Codex SDK (results are tied to that model; reviewer note); multi-agent cooperation is future work.

## Key technical points (ZH)

- 天线模型：TR 38.901 阵元方向图（8 dBi，65°/65° 半功率波束宽度）；库合成使用 30 dB 目标方向图衰减上限；固定基线采用 TR 36.873 默认值（约 12 度下倾、60 度水平与 15 度垂直 HPBW）。每个基站为 8x8 垂直极化 UPA，总功率 30 dBm，带宽 10 MHz。
- 场景（载频 2 GHz（Boston）/28 GHz（O1））：Boston（5 个基站，600 m x 100 m 走廊，Boston Twin 模型配合 Sionna RT）与 DeepMIMO O1（4 个基站，300 m x 37 m 区域）；每组 1,000 个优化用户与 1,000 个评估用户，在 10 组评估集上取平均。
- 基线：固定 3GPP 配置、随机搜索、坐标搜索与高斯过程贝叶斯优化（BO）。
- Boston：中断概率由 0.146 降至 0.078（相对降低 46.6%）；随机搜索 0.115、坐标搜索 0.118、BO 0.079，几乎持平。评估集中断概率为 0.089。
- O1：中断概率由 0.283 降至 0.016（评估集 0.013），在优化集上比 BO 低 64.4%，评估集上低 74.0%。
- 消融（优化集/评估集中断概率）：Boston 完整 0.078/0.089、标量反馈 0.083/0.115、去掉反思 0.091/0.101；O1 完整 0.016/0.013、标量 0.110/0.091、去掉反思 0.041/0.051。
- 作者说明的注意事项：Boston 中第 5 百分位 SINR 由 -2.22 恶化到 -2.99 dB，部分用户变差；Boston 相对 BO 的优势很小；仅两个基站位置与功率固定的场景；假定互耦可忽略；两个智能体均基于 GPT-5.6-Sol 与 Codex SDK 实现（结果依赖该模型；审阅者注）；多智能体协作留待未来。

## Why it matters / what's new (EN)

The contribution is an LLM-agent loop that uses per-user spatial diagnostics, rather than a scalar outage value, to steer a discrete antenna-configuration search on ray-traced sites. The large O1 gain contrasts with a near-tie against Bayesian optimization in Boston, and the ablations suggest the spatial feedback matters more than the reflection memory alone; evidence is two simulated scenarios.

## Why it matters / what's new (ZH)

其贡献在于一个 LLM 智能体闭环：在射线追踪的站点上，用逐用户的空间诊断而非单一中断指标来引导离散的天线配置搜索。O1 场景增益很大，而 Boston 场景与贝叶斯优化几乎持平；消融结果表明空间反馈比单独的反思记忆更重要；证据仅来自两个仿真场景。

## Images

None.
