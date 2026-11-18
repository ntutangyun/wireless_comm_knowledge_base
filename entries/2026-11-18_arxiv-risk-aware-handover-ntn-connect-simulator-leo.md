---
id: 2026-11-18_arxiv-risk-aware-handover-ntn-connect-simulator-leo
date_published: 2026-11-16
date_found: 2026-11-18
technology: satellite
type: academic-paper
title_en: "Risk-Aware Handover Management Approach for Non-Terrestrial Networks with the NTN-Connect Simulator"
title_zh: "基于 NTN-Connect 仿真器的非地面网络风险感知切换管理方法"
url: "https://arxiv.org/abs/2611.21027"
source_quality: abstract-only
topics: [LEO handover, non-terrestrial networks, value-at-risk, Hungarian algorithm, Starlink, OneWeb, power allocation]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Almekhlafi, Lesage-Landry and Kurt (arXiv, 16 Nov 2026) address the frequent handovers caused by LEO satellite motion. They formulate a risk-aware framework that minimises transmit power and maximises admitted users under per-satellite power budgets and user-rate chance constraints, with a preference term penalising short-duration associations. The mixed-integer nonlinear program is split into an inner power-allocation subproblem (chance constraint made deterministic via a closed-form value-at-risk) and an outer generalised-assignment association subproblem, solved optimally with an off-the-shelf solver, with a polynomial-complexity Hungarian relaxation plus knapsack step for the budget.

## Summary (ZH)

Almekhlafi、Lesage-Landry 与 Kurt（arXiv，2026 年 11 月 16 日）针对 LEO 卫星运动导致的频繁切换问题，提出风险感知框架：在各卫星功率预算与用户速率机会约束下，最小化发射功率并最大化接入用户数，并以偏好项惩罚短时长关联。该混合整数非线性规划被分解为内层功率分配子问题（利用风险价值 VaR 的闭式表达将机会约束确定化）与外层广义指派式关联子问题；前者结果用于后者，后者可用现成求解器求最优解，并以多项式复杂度的匈牙利算法松弛加背包算法满足各卫星功率预算。

## Key technical points (EN)

- Simulations use the authors' NTN-Connect simulator with OneWeb and Starlink constellations.
- Per the abstract, on Starlink the inter-handover interval rises from 0.37 to 1.47 min (handover rate down 75%).
- At a maximum-IHI operating point, total transmit power falls by 1.1 dBW (22%) while admission rate rises from 97.4% to 99.3%.
- Baselines: risk-aware maximum stay (RA-MST) and risk-aware maximum RSRP (RA-MRSRP). Abstract-level read only.

## Key technical points (ZH)

- 仿真使用作者的 NTN-Connect 仿真器，涵盖 OneWeb 与 Starlink 星座。
- 摘要称：在 Starlink 星座上，切换间隔由 0.37 分钟提高到 1.47 分钟（切换率降低 75%）。
- 在最大切换间隔工作点，总发射功率降低 1.1 dBW（22%），接入率由 97.4% 提高到 99.3%。
- 对比基线：风险感知最大驻留（RA-MST）与风险感知最大 RSRP（RA-MRSRP）。仅阅读摘要。

## Why it matters / what's new (EN)

A low-complexity, near-optimal handover and power-allocation scheme that explicitly accounts for rate-outage risk, evaluated on constellation geometry from two real operators. Simulation only.

## Why it matters / what's new (ZH)

一种低复杂度、近最优的切换与功率分配方案，显式考虑速率中断风险，基于两个真实运营商的星座几何进行评估。仅为仿真。

## Images

None.
