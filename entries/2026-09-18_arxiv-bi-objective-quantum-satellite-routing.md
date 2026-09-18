---
id: 2026-09-18_arxiv-bi-objective-quantum-satellite-routing
date_published: 2026-09-17
date_found: 2026-09-18
technology: satellite
type: academic-paper
title_en: "A Bi-Objective Routing Framework for Hybrid Terrestrial-Satellite Quantum Networks"
title_zh: "面向混合地面-卫星量子网络的双目标路由框架"
url: "https://arxiv.org/abs/2609.19561"
source_quality: full
topics: [quantum-networking, entanglement-distribution, Pareto-routing, optical-ground-stations, Starlink-TLE]
topic_primary: leo-constellations
novelty_score: 3
---

## Summary (EN)

Khambay and Panigrahy (Binghamton University) submitted this paper on 2026-09-17. It addresses routing in hybrid terrestrial-satellite quantum networks, which distribute entanglement using two complementary infrastructures: terrestrial fiber (subject to exponential loss with distance, requiring quantum repeaters) and free-space satellite links (which avoid most propagation loss and have demonstrated entanglement distribution beyond 1,200 km, but are limited to visibility windows, weather-sensitive, and constrained by the high cost of optical ground stations). The authors' framing is that existing routing algorithms reduce the problem to a single objective — maximizing entanglement generation rate (EGR), or maximizing EGR subject to a fidelity threshold — and so cannot capture the EGR-fidelity trade-off that different quantum applications need (e.g., very-long-baseline interferometry favors higher EGR, while synchronized atomic clocks require higher-fidelity entanglement).

The paper's contribution is a bi-objective routing framework that jointly optimizes end-to-end EGR and fidelity by formulating routing as a Pareto optimization problem. The authors show the problem has a specific mathematical structure — end-to-end EGR behaves as a bottleneck (min) quantity along a path, while end-to-end fidelity behaves multiplicatively — which lets them transform it into a MAXMIN-MINSUM bicriterion shortest-path problem. This transformation allows the exact, polynomial-time computation of a minimal complete Pareto set via Martins' bicriterion routing algorithm, rather than requiring an exhaustive or heuristic search.

The authors evaluate the framework on a simulated hybrid network covering the continental United States: 1,010 terrestrial nodes (1,000 fiber end-nodes at top population centers, plus 10 strategically placed optical ground stations), with the satellite layer represented using real two-line-element (TLE) data for 3,980 Starlink satellites across four orbital inclinations (43, 53, 70, and 97 degrees), tracked over a 24-hour period at 10-second intervals. Compared against Maximum-Fidelity, Fidelity-Constrained Maximum-EGR (FC-MaxEGR), and Distance-Based routing baselines, their Pareto Routing policy sits between the EGR-maximizing and fidelity-maximizing extremes rather than sacrificing one objective outright, and adding satellite-assisted links increases both average EGR and average fidelity relative to a terrestrial-only network for every routing policy tested. For one representative medium-distance pair, shifting the routing weights from (fidelity-weight, EGR-weight) = (0.9, 0.1) to (0.5, 0.5) moved the selected path's EGR from 4.64x10^4 to 1.32x10^5 while fidelity dropped from 0.945 to 0.915, illustrating that the Pareto frontier can be computed once and then used to serve different applications' operating points without re-running the routing algorithm.

## Summary (ZH)

Khambay 与 Panigrahy（宾汉姆顿大学）于 2026 年 9 月 17 日提交本文，研究混合地面-卫星量子网络中的路由问题。此类网络通过两种互补基础设施分发纠缠态：地面光纤（随距离呈指数损耗，需要量子中继器）与自由空间卫星链路（可避免大部分传播损耗，已实现超过 1,200 公里的纠缠分发，但受限于可见窗口、易受天气影响，且光学地面站建设成本高昂）。作者指出，现有路由算法通常将问题简化为单一目标——最大化纠缠生成速率（EGR），或在满足某一保真度阈值的前提下最大化 EGR——因而无法体现不同量子应用所需的 EGR-保真度权衡（例如，超长基线干涉测量更看重高 EGR，而同步原子钟则需要更高保真度的纠缠）。

本文的贡献是一种双目标路由框架，将路由问题表述为帕累托优化问题，联合优化端到端 EGR 与保真度。作者证明该问题具有特定的数学结构——端到端 EGR 沿路径呈"瓶颈"（取最小值）性质，而端到端保真度呈乘积性质——从而可将其转化为 MAXMIN-MINSUM 双准则最短路径问题。这一转化使得可以借助 Martins 双准则路由算法，以精确的多项式时间计算出最小完备帕累托集，而无需穷举或启发式搜索。

作者在覆盖美国本土的混合网络仿真环境中评估该框架：1,010 个地面节点（1,000 个位于人口中心的光纤终端节点，加 10 个战略布局的光学地面站），卫星层采用真实的双行根数（TLE）数据，涵盖分布在四个轨道倾角（43°、53°、70°、97°）上的 3,980 颗 Starlink 卫星，以 10 秒为间隔跟踪 24 小时。与最大保真度（Maximum-Fidelity）、保真度约束下最大 EGR（FC-MaxEGR）以及基于距离（Distance-Based）三种基线路由策略相比，其帕累托路由策略介于 EGR 最大化与保真度最大化两个极端之间，而非彻底牺牲某一目标；且在所测试的每种路由策略下，加入卫星辅助链路都能同时提升平均 EGR 与平均保真度（相对于纯地面网络）。以一对代表性的中距离节点为例，将路由权重从（保真度权重，EGR 权重）=（0.9，0.1）调整为（0.5，0.5）后，所选路径的 EGR 从 4.64×10^4 提升至 1.32×10^5，而保真度从 0.945 降至 0.915，说明帕累托前沿可一次性计算完成，随后用于满足不同应用的运行点需求，而无需重新运行路由算法。

## Key technical points (EN)

- **Problem structure**: end-to-end EGR is a bottleneck (MAXMIN) quantity along a path; end-to-end fidelity is multiplicative (MINSUM after log transform) — this structural insight enables exact polynomial-time Pareto-set computation via Martins' bicriterion algorithm, instead of heuristic single-objective search.
- **Simulated network**: 1,010 US terrestrial nodes (1,000 fiber end-nodes + 10 optical ground stations); satellite layer = real TLE data for 3,980 Starlink satellites across 4 inclinations (43/53/70/97 deg); fiber elementary-link length capped at 110 km with repeaters inserted beyond that; satellite visibility requires elevation angle above 20 deg.
- **Baselines compared**: Maximum-Fidelity, Fidelity-Constrained Maximum-EGR (FC-MaxEGR, fidelity threshold 0.5 by default), Distance-Based (terrestrial vs. satellite-assisted routing chosen by a distance threshold).
- **Headline result**: adding satellite-assisted links increases both average EGR and average fidelity over a terrestrial-only network, for every routing policy tested — not just for the authors' own Pareto Routing.
- **Weight-tunable example**: for a medium-distance pair, moving (fidelity-weight, EGR-weight) from (0.9, 0.1) to (0.5, 0.5) shifts EGR from 4.64x10^4 to 1.32x10^5 while fidelity drops from 0.945 to 0.915.
- **Practical implication (paper's framing)**: because the Pareto frontier can be computed once per network snapshot, a network controller can defer the final path-selection decision to the application's specific EGR/fidelity requirement without rerunning routing.

## Key technical points (ZH)

- **问题结构**：端到端 EGR 沿路径呈瓶颈（MAXMIN）性质，端到端保真度呈乘积性质（取对数后为 MINSUM）——这一结构性认识使得可借助 Martins 双准则算法以精确多项式时间计算帕累托集，而非依赖启发式单目标搜索。
- **仿真网络**：覆盖美国的 1,010 个地面节点（1,000 个光纤终端节点 + 10 个光学地面站）；卫星层采用真实 TLE 数据，涵盖 4 个轨道倾角（43°/53°/70°/97°）上的 3,980 颗 Starlink 卫星；光纤基本链路长度上限 110 公里，超出则插入中继器；卫星可见性要求仰角大于 20°。
- **对比基线**：最大保真度（Maximum-Fidelity）、保真度约束下最大 EGR（FC-MaxEGR，默认保真度阈值 0.5）、基于距离（Distance-Based，按距离阈值选择地面或卫星辅助路由）。
- **核心结果**：在所测试的每种路由策略下，加入卫星辅助链路都能同时提升平均 EGR 与平均保真度（相对纯地面网络）——不仅限于作者提出的帕累托路由策略。
- **权重可调示例**：对某中距离节点对，将（保真度权重，EGR 权重）从（0.9，0.1）调整为（0.5，0.5）后，EGR 从 4.64×10^4 提升至 1.32×10^5，保真度从 0.945 降至 0.915。
- **实际意义（论文自陈）**：由于帕累托前沿可针对每个网络快照一次性计算完成，网络控制器可将最终路径选择决策延后至应用的具体 EGR/保真度需求确定时再做出，而无需重新运行路由算法。

## Why it matters / what's new (EN)

This is the KB's first entry on quantum-network routing over satellite-assisted infrastructure — prior satellite-topic-bin entries have covered classical-communications routing (e.g., the 2026-09-09 GNSS onboard routing paper) but not quantum entanglement distribution. The paper's own contribution is methodological: showing that the EGR/fidelity bi-objective routing problem in hybrid terrestrial-satellite quantum networks has a mathematical structure that permits exact polynomial-time Pareto-frontier computation, rather than requiring single-objective simplification or heuristic search, and validating this using a real Starlink TLE-based satellite layer rather than an abstracted orbital model.

## Why it matters / what's new (ZH)

这是知识库中首条关于卫星辅助基础设施上量子网络路由的条目——此前的卫星主题条目主要涉及经典通信路由（如 2026-09-09 GNSS 星载路由论文），尚未涉及量子纠缠分发。本文自身的贡献在于方法论层面：证明混合地面-卫星量子网络中的 EGR/保真度双目标路由问题具有特定数学结构，可实现精确的多项式时间帕累托前沿计算，而无需简化为单目标或依赖启发式搜索；并且采用真实的 Starlink TLE 卫星层数据进行验证，而非采用抽象化的轨道模型。

## Images

None.
