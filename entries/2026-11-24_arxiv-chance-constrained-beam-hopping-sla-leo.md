---
id: 2026-11-24_arxiv-chance-constrained-beam-hopping-sla-leo
date_published: 2026-11-19
date_found: 2026-11-24
type: academic-paper
technology: satellite
title_en: "Chance-Constrained Joint Beam Hopping Scheduling and Bandwidth Allocation for LEO Satellites"
title_zh: "面向 LEO 卫星的机会约束波束跳变调度与带宽联合分配"
url: "https://arxiv.org/abs/2611.26270"
source_quality: full
topics: [LEO, beam-hopping, SLA, chance-constraint, second-order-cone, bandwidth-allocation, multibeam]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Ben Yahia, Frigon, Sansò, Martel, Mantelet, Lesage-Landry and Karabulut Kurt (Poly-Grames Research Centre, Polytechnique Montréal, and MDA) address the reliability of service level agreements (SLAs) in multibeam satellite systems that use beam hopping, where only a subset of beams is active in each time slot. They note that most beam-hopping methods assume predicted channel conditions are accurate and do not limit the probability of an SLA violation when spectral efficiency is uncertain.

The paper proposes an SLA-aware, chance-constrained model that jointly schedules beams and allocates bandwidth, maximising expected delivered traffic while requiring each cell's demand to be met with a target reliability. Realised spectral efficiency is modelled as a prediction plus zero-mean Gaussian error, which turns each chance constraint into a deterministic second-order cone constraint. The paper presents no custom algorithm; all problems are solved with Gurobi.

## Summary (ZH)

Ben Yahia、Frigon、Sansò、Martel、Mantelet、Lesage-Landry 与 Karabulut Kurt（蒙特利尔理工学院 Poly-Grames 研究中心与 MDA）研究采用波束跳变（每个时隙只激活部分波束）的多波束卫星系统中服务等级协议（SLA）的可靠性。他们指出，多数波束跳变方法假定预测的信道条件是准确的，并未在频谱效率不确定时限制 SLA 被违反的概率。

论文提出一种感知 SLA 的机会约束模型，联合调度波束并分配带宽，在要求每个小区的需求以目标可靠度得到满足的前提下，最大化期望交付流量。实际频谱效率被建模为预测值加零均值高斯误差，从而将每条机会约束转化为确定性的二阶锥约束。论文未提出专门的算法，所有问题均使用 Gurobi 求解。

## Key technical points (EN)

- Model: downlink of a regenerative NGSO multibeam system with N cells, each with a fixed beam association, over T slots with at most K_max active beams per slot; total transmit power is shared equally among the maximum number of active beams (P0 = Ptot/K_max), and bandwidth fractions are capped per beam and sum to at most 1 per slot. The authors leave joint power and bandwidth optimisation (nonlinear) to future work.
- Formulation: a deterministic baseline assumes known spectral efficiency; the chance-constrained version requires each cell's demand to be met with probability at least 1 - epsilon_i, using a reliability margin from the inverse normal CDF.
- Setup (Table I): 48 cells, 64 slots of 2 ms (128 ms cycle), 500 MHz total bandwidth, 1000 W total power, K_max = 32, per-beam bandwidth cap 0.6, epsilon = 0.05 (95% target), uncertainty level 40%, shadowed-Rician predicted spectral efficiency; Monte Carlo evaluation against the deterministic model and an OCDR-based beam-hopping method that the authors adapted to include bandwidth allocation.
- Results in the reference scenario: average SLA violation probability 0.308 (deterministic baseline), 0.150 (OCDR-BH) and 0.048 (proposed, target 0.05); unmet-demand ratio 6.57%, 2.46% and 0.37%; Jain fairness 0.8832 for the baseline, with the other two described as close to 1. In the traffic-load and uncertainty sweeps the proposed method stays close to the 95% target while the baseline and OCDR-BH degrade.
- Limitations stated or implied: Gaussian unbiased prediction error with error proportional to the predicted value is a modelling choice; beam-to-cell association is fixed; power split is equal; results are simulation only, and some are shown only graphically.

## Key technical points (ZH)

- 模型：再生式 NGSO 多波束系统的下行链路，含 N 个小区（各有固定的波束对应关系）、T 个时隙，每个时隙最多 K_max 个激活波束；总发射功率按最大激活波束数平均分配（P0 = Ptot/K_max），带宽比例对每个波束设上限且每时隙总和不超过 1。作者将（非线性的）功率与带宽联合优化留作未来工作。
- 建模：确定性基线假设频谱效率已知；机会约束版本要求每个小区的需求以不低于 1 - epsilon_i 的概率得到满足，并利用标准正态分布逆函数得到可靠性裕量。
- 设置（表 I）：48 个小区，64 个时隙、每时隙 2 ms（周期 128 ms），总带宽 500 MHz，总功率 1000 W，K_max = 32，单波束带宽上限 0.6，epsilon = 0.05（目标可靠度 95%），不确定性水平 40%，预测频谱效率采用阴影莱斯信道；通过蒙特卡洛仿真与确定性模型以及作者改造为包含带宽分配的、基于 OCDR 的波束跳变方法比较。
- 参考场景结果：平均 SLA 违约概率为 0.308（确定性基线）、0.150（OCDR-BH）和 0.048（所提方法，目标 0.05）；未满足需求比例分别为 6.57%、2.46% 和 0.37%；基线的 Jain 公平性指数为 0.8832，另两者被描述为接近 1。在流量负载与不确定性扫描中，所提方法保持接近 95% 目标，而基线与 OCDR-BH 的可靠度下降。
- 论文明示或隐含的局限：高斯无偏预测误差以及误差与预测值成比例是建模选择；波束与小区的对应关系固定；功率平均分配；结果仅来自仿真，且部分仅以图形给出。

## Why it matters / what's new (EN)

The paper's stated contributions are a deterministic beam-hopping baseline, an SLA-aware chance-constrained extension, a second-order cone reformulation under Gaussian prediction error, and Monte Carlo comparisons against the baseline and OCDR-BH. The authors report that the proposed method's violation rate (0.048) is close to, but not exactly at, the 0.05 target, and that the OCDR-BH comparison uses their own adaptation of the original method.

## Why it matters / what's new (ZH)

论文声明的贡献包括确定性波束跳变基线、感知 SLA 的机会约束扩展、高斯预测误差下的二阶锥重构，以及与基线和 OCDR-BH 的蒙特卡洛比较。作者报告所提方法的违约率（0.048）接近但并不恰好等于 0.05 的目标，且与 OCDR-BH 的比较采用的是作者自己对原方法的改造版本。

## Images

None.
