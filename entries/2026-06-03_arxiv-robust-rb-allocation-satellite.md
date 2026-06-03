---
id: 2026-06-03_arxiv-robust-rb-allocation-satellite
date_published: 2026-06-01
date_found: 2026-06-03
type: academic-paper
title_en: "Statistically Robust Resource Block Allocation for Satellite Communications"
title_zh: "面向卫星通信的统计稳健资源块分配"
url: "https://arxiv.org/abs/2606.02124"
source_quality: abstract_only
technology: satellite
topics: [resource-allocation, dimensioning, capacity-planning, attenuation, Monte-Carlo]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 2
---

## Summary (EN)
This paper addresses pre-deployment capacity dimensioning for satellite systems: given a satellite footprint and a target QoS, how many resource blocks (RBs) must be provisioned when signal attenuation across the footprint follows an unknown, spatially correlated pattern? The authors model attenuation as a Gaussian field with spatial covariance and derive a footprint-level RB dimensioning rule using two complementary tools: (1) Monte Carlo simulation that produces an RB budget for a chosen overload probability, and (2) concentration inequalities that give conservative analytic upper bounds on overload probability for a given RB budget.

Users are sampled randomly within the footprint with field-based attenuation values, and aggregate RB demand is estimated under the spatial-correlation assumption — yielding a principled way to size capacity rather than over-provisioning by rule of thumb. The simulation path is tight but empirical; the concentration-inequality path is looser but gives a provable guarantee, so together they bracket the required budget.

## Summary (ZH)
本文研究卫星系统的部署前容量规划：在给定卫星覆盖足迹与目标 QoS 时，当足迹内信号衰减遵循未知且空间相关的模式，需要预留多少资源块（RB）？作者将衰减建模为带空间协方差的高斯场，并用两个互补工具推导足迹级 RB 规划规则：（1）蒙特卡洛仿真，为选定的过载概率给出 RB 预算；（2）集中不等式，为给定 RB 预算给出过载概率的保守解析上界。

用户在足迹内随机采样并取基于场的衰减值，在空间相关假设下估计聚合 RB 需求——给出有原则的容量定额方法，而非经验式过度预留。仿真路径紧致但属经验；集中不等式路径较松但给出可证明保证，二者共同界定所需预算。

## Key technical points (EN)
- **Problem:** footprint-level RB dimensioning under unknown spatially-correlated attenuation.
- **Model:** attenuation as a Gaussian field with spatial covariance.
- **Two tools:** Monte Carlo (RB budget for target overload prob.) + concentration inequalities (analytic conservative bound).
- **Output:** principled capacity-sizing rule that brackets the required RB budget.
- **Novelty:** first footprint-level RB dimensioning rule addressing spatial-covariance robustness in the satellite context.

## Key technical points (ZH)
- **问题：** 未知空间相关衰减下的足迹级 RB 规划。
- **模型：** 衰减建模为带空间协方差的高斯场。
- **两个工具：** 蒙特卡洛（目标过载概率的 RB 预算）+ 集中不等式（解析保守上界）。
- **输出：** 有原则的容量定额规则，界定所需 RB 预算。
- **新意：** 卫星场景下首个针对空间协方差稳健性的足迹级 RB 规划规则。

## Why it matters / what's new (EN)
This is a planning/dimensioning contribution rather than a runtime scheduler — it answers "how much capacity to provision" before launch, complementing the KB's runtime resource-management and beam-hopping entries. The spatial-covariance-robust framing is the differentiator: most capacity rules assume independent per-user attenuation, which under-provisions when weather/terrain correlate attenuation across a footprint (cf. the same-run Starlink weather study 2026-06-03_arxiv-mapping-storm-weather-leo-starlink, which empirically shows weather-correlated degradation). Useful as a design-time tool for constellation operators.

## Why it matters / what's new (ZH)
这是规划/定额贡献而非运行时调度器——回答发射前"应预留多少容量"，与 KB 中的运行时资源管理和波束跳变条目互补。空间协方差稳健的建模是其差异点：多数容量规则假设各用户衰减独立，当天气/地形使足迹内衰减相关时会预留不足（参见同批次 Starlink 天气研究 2026-06-03_arxiv-mapping-storm-weather-leo-starlink，其实证显示天气相关的降级）。可作为星座运营商的设计期工具。
