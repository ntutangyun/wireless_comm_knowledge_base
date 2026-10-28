---
id: 2026-10-28_arxiv-kinetic-handover-modeling-fluid-spatiotemporal-stochastic-geometry
date_published: 2026-10-25
date_found: 2026-10-28
type: academic-paper
technology: cellular
title_en: "Kinetic Handover Modeling in Nonstationary Cellular Networks with Fluid Spatiotemporal Stochastic Geometry"
title_zh: "基于流体时空随机几何的非平稳蜂窝网络动理学切换建模"
url: "https://arxiv.org/abs/2610.34211"
source_quality: full
topics: [handover, mobility-management, stochastic-geometry, Poisson-Voronoi, nonstationary-networks, population-flux, F-STSG]
topic_primary: 5g-nr
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)
Wen-Yu Dong, Zheng Lin, Jinfeng Xu, Yuxin Zhang, Zihan Fang, Qi Bi and Sheng Chen (China Telecom Research Institute, University of Luxembourg, UBC, Fudan, CityU Hong Kong, Southampton) develop a kinetic framework for inferring directional handover traffic between neighbouring cells from aggregate population-density observations. The directional crossing rate is defined from local population density and the positive part of the boundary-normal UE velocity, which separates signed net transfer between two cells from gross bidirectional crossings.

The paper identifies two information limits: density evolution does not uniquely determine pairwise physical transport, and first-order transport alone cannot resolve counter-moving crossings. It establishes exact recovery conditions for potential transport, adds coherent and Gaussian mobility closures, and derives sharp moment-constrained bounds on directional crossing rates under bounded normal velocities without assuming a velocity distribution. The formulation recovers the classical stationary Poisson-Voronoi handover law as a special case. On 47 held-out vehicular simulation windows, the density-based reconstruction (F-STSG) gives lower net-flow errors than three baselines, and auxiliary velocity statistics improve directional estimates under matched Gaussian mobility.

## Summary (ZH)
Wen-Yu Dong、Zheng Lin、Jinfeng Xu、Yuxin Zhang、Zihan Fang、Qi Bi 与 Sheng Chen（中国电信研究院、卢森堡大学、UBC、复旦大学、香港城市大学、南安普顿大学）建立了一个动理学框架，用于从聚合的人口密度观测推断相邻小区之间有方向的切换流量。方向性跨越率由局部人口密度和边界法向 UE 速度的正部定义，从而把两小区间的有符号净转移与总的双向跨越区分开来。

论文指出两个信息极限：密度演化不能唯一确定小区对之间的物理输运；仅有一阶输运也无法分辨对向移动的跨越。论文给出势输运的精确恢复条件，加入相干与高斯移动性闭合，并在法向速度有界、且不假设速度分布的条件下，推导方向性跨越率的矩约束尖锐界。该表述把经典的平稳泊松-Voronoi 切换律作为特例恢复。在 47 个留出的车辆仿真窗口上，基于密度的重构（F-STSG）的净流量误差低于三个基线，在高斯移动性匹配时，辅助速度统计量可改进方向性估计。

## Key technical points (EN)
- Core definition: the directional crossing rate for a neighbouring cell pair uses local population density and [v_n]_+, the positive part of the boundary-normal UE velocity; signed net transfer depends on the physical first-order flux, gross crossings need extra velocity information.
- Information limit 1: density evolution constrains the divergence of the flux but does not uniquely fix pairwise transport between cells; exact recovery conditions are given for potential transport.
- Information limit 2: counter-moving users cancel in the signed flux yet still count as handovers, so first-order transport cannot give gross crossings.
- Estimators: coherent and Gaussian mobility closures give conditional directional estimates; sharp moment-constrained bounds hold under bounded normal velocities with no assumed velocity distribution.
- F-STSG reconstruction builds a minimum-energy canonical first-order transport field from successive density snapshots; the field need not equal the physical flux, and an error bound separates reconstruction error, flux ambiguity, auxiliary-statistic error and closure mismatch.
- Special case: the stationary Poisson-Voronoi handover law is recovered.
- Evaluation: controlled experiments on the information limits and sensitivity, plus 47 held-out vehicular simulation windows against three baselines; the data are simulated, not operator handover records.

## Key technical points (ZH)
- 核心定义：相邻小区对的方向性跨越率采用局部人口密度与 [v_n]_+（边界法向 UE 速度的正部）；有符号净转移取决于物理一阶通量，总跨越量则需要额外的速度信息。
- 信息极限一：密度演化约束通量的散度，但不能唯一确定小区对之间的输运；论文给出势输运的精确恢复条件。
- 信息极限二：对向移动的用户在有符号通量中相互抵消，却仍算作切换，因此一阶输运无法给出总跨越量。
- 估计器：相干与高斯移动性闭合给出条件性的方向估计；在法向速度有界、不假设速度分布时成立矩约束的尖锐界。
- F-STSG 重构由连续的密度快照构造最小能量的规范一阶输运场；该场不必等于物理通量，误差界把重构误差、通量歧义、辅助统计量误差与闭合失配区分开。
- 特例：恢复平稳泊松-Voronoi 切换律。
- 评估：针对信息极限与敏感性的受控实验，以及 47 个留出车辆仿真窗口对比三个基线；数据为仿真，不是运营商的真实切换记录。

## Why it matters / what's new (EN)
Most handover models describe individual trajectories or measurements; this one works backwards from aggregate crowd density, which is what an operator can observe in busy, time-varying situations such as commuting corridors or large events. Its main value is conceptual: stating precisely which handover quantities density data can and cannot determine. Validation is on simulated vehicular windows, so field applicability to real handover logs is not yet shown.

## Why it matters / what's new (ZH)
多数切换模型描述个体轨迹或测量；该工作则从聚合的人群密度出发反推，而这正是运营商在通勤走廊或大型活动等繁忙、时变场景中能够观测到的量。其主要价值在于概念层面：精确说明密度数据能够和不能确定哪些切换量。验证基于仿真的车辆窗口，尚未展示对真实切换日志的适用性。

## Images

None.
