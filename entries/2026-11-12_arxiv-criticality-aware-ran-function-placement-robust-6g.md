---
id: 2026-11-12_arxiv-criticality-aware-ran-function-placement-robust-6g
date_published: 2026-11-10
date_found: 2026-11-12
type: academic-paper
technology: cellular
title_en: "Criticality-Aware RAN Function Placement for Robust 6G Networks"
title_zh: "面向鲁棒 6G 网络的关键度感知 RAN 功能放置"
url: "https://arxiv.org/abs/2611.14121"
source_quality: full
topics: [RAN-disaggregation, CU-DU-placement, robustness, functional-split, O-RAN, 6G, optimization]
topic_primary: open-ran
topics_secondary: [6g-vision]
novelty_score: 3
---

## Summary (EN)

Almeida, Santos, Saad, Marchetti and Cardoso observe that splitting base stations into RAN functions (CU, DU, RU) creates new failure modes: a disruption at one cloud location can interrupt every function chain it hosts and cascade into wide outages. They propose a criticality-aware placement of CUs and DUs across cloud locations that reduces functional dependencies and caps the criticality of any single location, while keeping the cost benefit of centralising RAN functions. The placement is an optimisation model that jointly minimises functional dependency and placement cost under criticality, computing and transport constraints.

The model assumes the 3GPP Option 2 CU-DU split and the O-RAN 7.2x DU-RU split. On the 50-RU 5G-Crosshaul topology with 6,000 users and 168 hours of traffic, the authors report up to 75% more operational RUs after disruptions than existing approaches.

## Summary (ZH)

Almeida、Santos、Saad、Marchetti 与 Cardoso 指出，将基站拆分为 RAN 功能（CU、DU、RU）会带来新的故障模式：某个云节点的中断会打断其承载的所有功能链，并可能级联为大范围故障。他们提出一种关键度感知的 CU/DU 跨云节点放置方法，在降低功能依赖、限制单一节点关键度的同时，保留 RAN 功能集中化带来的成本优势。该放置问题被表述为一个优化模型，在关键度、计算和传输约束下联合最小化功能依赖和放置成本。

模型假设 CU-DU 采用 3GPP Option 2 切分，DU-RU 采用 O-RAN 7.2x 切分。在 5G-Crosshaul 的 50 个 RU 拓扑、6,000 名用户和 168 小时流量上，作者报告在中断后可用的 RU 比现有方法最多多 75%。

## Key technical points (EN)

- Setting: cloud locations (edge, regional, central) host DUs and CUs; criticality of a location is quantified by the number of RUs relying on the functions it hosts, and functional dependency by the number of cloud locations each RU depends on.
- Evaluation: a simulator on the 5G-Crosshaul topology (50 RUs, each co-located with a cloud location; 100 MHz, 32 antenna ports, 8 MIMO layers, 256-QAM), with random failures (100 seeds) and targeted attacks (disruption in descending betweenness centrality). Benchmarks are D-RAN, PlaceRAN and Reveal, using a criticality threshold of 10% of RUs for comparison with Reveal.
- Random failures: up to 12% and 18% more operational RUs than PlaceRAN and Reveal, about 10% below D-RAN on average. All RUs depend on two cloud locations under the proposal, against 52.1% (PlaceRAN) and 92% (Reveal) of RUs depending on three.
- Targeted attacks: up to 60% and 75% more operational RUs than PlaceRAN and Reveal, about 20% below D-RAN on average; 75% of cloud locations stay within 6-10% criticality.
- Cost of robustness: the gains require about 10.7% more active cloud locations; the authors note the optimal criticality threshold may vary with topology and user distribution and leave it for future work.

## Key technical points (ZH)

- 设定：云节点（边缘、区域、中心）承载 DU 和 CU；节点的关键度以依赖其所承载功能的 RU 数量衡量，功能依赖则以每个 RU 所依赖的云节点数量衡量。
- 评估：基于 5G-Crosshaul 拓扑的仿真器（50 个 RU，各与一个云节点共址；100 MHz、32 个天线端口、8 个 MIMO 层、256-QAM），包含随机故障（100 个随机种子）和针对性攻击（按介数中心性从高到低依次中断）。对比基线为 D-RAN、PlaceRAN 和 Reveal，为便于与 Reveal 比较，关键度阈值取 RU 总数的 10%。
- 随机故障：可用 RU 比 PlaceRAN 和 Reveal 最多多 12% 和 18%，平均比 D-RAN 低约 10%。本方案下所有 RU 都依赖两个云节点，而 PlaceRAN 和 Reveal 分别有 52.1% 和 92% 的 RU 依赖三个。
- 针对性攻击：可用 RU 比 PlaceRAN 和 Reveal 最多多 60% 和 75%，平均比 D-RAN 低约 20%；75% 的云节点关键度保持在 6-10%。
- 鲁棒性的代价：这些收益需要多启用约 10.7% 的云节点；作者指出最优关键度阈值可能随拓扑和用户分布而变，留待后续研究。

## Why it matters / what's new (EN)

The paper treats cloud-location criticality as an explicit constraint in CU/DU placement, instead of optimising cost or dependency alone, and shows the trade-off between robustness, centralisation and cost on one real topology. Results are from a numerical simulator on a single topology, so they indicate the direction of the trade-off rather than operational outage behaviour.

## Why it matters / what's new (ZH)

本文把云节点关键度作为 CU/DU 放置中的显式约束，而不是只优化成本或依赖，并在一个真实拓扑上展示了鲁棒性、集中化与成本之间的权衡。结果来自单一拓扑上的数值仿真，因此反映的是权衡的方向，而非实际运行中的故障表现。

## Images

None.
