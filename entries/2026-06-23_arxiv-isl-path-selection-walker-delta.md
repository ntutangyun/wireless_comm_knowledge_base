---
id: 2026-06-23_arxiv-isl-path-selection-walker-delta
date_published: 2026-06-22
date_found: 2026-06-23
technology: satellite
type: academic-paper
title_en: "Performance Evaluation of Selection Strategies for Inter-Satellite Paths in Walker-Delta Constellations"
title_zh: "Walker-Delta星座中星间路径选择策略的性能评估"
url: "https://arxiv.org/abs/2606.23135"
source_quality: abstract_only
topics: [LEO, inter-satellite-link, routing, Walker-Delta, constellation, path-selection]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

This paper (Marvin Felix Braun, Moritz Flüchter, Michael Menth; submitted 22 June 2026) studies **inter-satellite path selection in LEO constellations**. As a Walker-Delta constellation rotates, the path between a user terminal and a ground gateway must be **continuously reselected** — there is no single fixed route, and the choice of strategy affects both latency and the operational cost of constantly changing paths.

The authors develop and compare **three heuristic path-selection strategies** within a **Walker-Delta constellation of 1,156 satellites**, evaluating them across many user-terminal/gateway scenarios. They measure path length (both Euclidean distance and hop count), **path-change rate (churn)**, and link utilisation. The headline finding is that **path selection has a significant impact on both latency-related metrics and path churn** — i.e. strategies that minimise latency are not necessarily the ones that minimise how often the route changes, and operators face a trade-off between the two.

No single optimal strategy is claimed; the contribution is a **systematic, multi-dimensional comparison** that exposes the latency-vs-churn trade-off for large LEO meshes. The abstract carries no deployment numbers beyond the constellation size (source_quality: abstract_only). It is a useful reference point for the routing/operations side of the KB's satellite-networking coverage.

## Summary (ZH)

本文（Marvin Felix Braun、Moritz Flüchter、Michael Menth，2026年6月22日提交）研究 **LEO 星座中的星间路径选择**。当 Walker-Delta 星座旋转时，用户终端与地面网关之间的路径必须**持续重选**——不存在唯一固定路由，策略选择同时影响时延与频繁换路的运营成本。

作者在一个 **1,156 颗卫星的 Walker-Delta 星座**中设计并比较**三种启发式路径选择策略**，在大量用户终端/网关场景下评估。测量指标包括路径长度（欧氏距离与跳数）、**换路率（churn）**与链路利用率。核心发现是**路径选择对时延相关指标与换路率均有显著影响**——即最小化时延的策略未必最小化换路频率，运营商需在两者间权衡。

文中未声称单一最优策略；其贡献在于**系统性、多维度的比较**，揭示了大型 LEO 网格的时延与换路权衡。摘要除星座规模外未给出部署数字（source_quality: abstract_only）。它为 KB 卫星组网覆盖中的路由/运营一侧提供了有用参照。

## Key technical points (EN)

- **Setup**: Walker-Delta constellation, 1,156 satellites; three heuristic path-selection strategies compared.
- **Metrics**: path length (Euclidean + hop count), path-change rate (churn), link utilisation.
- **Finding**: path selection significantly affects both latency and churn; latency-optimal ≠ churn-optimal.
- **Contribution**: systematic multi-dimensional comparison, not a single new optimal algorithm.

## Key technical points (ZH)

- **设置**：Walker-Delta 星座，1,156 颗卫星；比较三种启发式路径选择策略。
- **指标**：路径长度（欧氏 + 跳数）、换路率（churn）、链路利用率。
- **发现**：路径选择显著影响时延与换路；时延最优 ≠ 换路最优。
- **贡献**：系统性多维比较，而非单一新最优算法。

## Why it matters / what's new (EN)

LEO routing studies often optimise a single metric (usually latency). By measuring **path churn alongside latency** on a large 1,156-satellite mesh, this paper makes explicit a trade-off that matters operationally — frequent rerouting costs signalling and state — and gives constellation operators a clearer view of what each heuristic actually buys.

## Why it matters / what's new (ZH)

LEO 路由研究常只优化单一指标（多为时延）。本文在 1,156 颗卫星的大型网格上**将换路率与时延一并测量**，明确了一个对运营至关重要的权衡——频繁重路由带来信令与状态开销——为星座运营商更清晰地展示了各启发式策略的实际代价。
