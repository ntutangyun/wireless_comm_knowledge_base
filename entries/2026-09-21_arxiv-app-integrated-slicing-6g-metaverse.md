---
id: 2026-09-21_arxiv-app-integrated-slicing-6g-metaverse
date_published: 2026-07-22
date_found: 2026-09-21
type: academic-paper
technology: cellular
title_en: "Application-Integrated Slicing towards 6G: The Musical Metaverse Use Case"
title_zh: "面向 6G 的应用-网络一体化切片：音乐元宇宙用例"
url: "https://arxiv.org/abs/2609.20163"
source_quality: full
topics: [network-slicing, 6G, cloud-edge-orchestration, QoS, metaverse]
topic_primary: network-slicing
topics_secondary: [6g-vision, mec]
novelty_score: 3
---

## Summary (EN)

This paper (Al Housseini, Llorca, Ayoub, Rottondi, Turchet, Malandrino) argues that current 5G network-slicing and orchestration frameworks remain service-centric and decoupled: application placement/orchestration and network resource allocation are optimized independently, so even a slice that meets its transport-level delay bound cannot guarantee true end-to-end latency, since a substantial share of that latency comes from application-function placement and inter-function routing outside the slice's control. The authors use the "Musical Metaverse" (MM) — an immersive service combining networked music performance with metaverse environments, involving geographically distributed musicians and audiences under strict synchronization and latency constraints — as a representative case where heterogeneous user classes (performers vs. audience) sharing a single service instance expose this limitation.

The proposed "application-integrated slicing" framework unifies application and network orchestration within a common end-to-end service model, enabling differentiated KPI targets for multiple user classes within a single logical slice, using a graph-based orchestration formulation with explicit end-to-end delay constraints under a joint communication/compute resource-accounting abstraction (CNFlow). Evaluation embeds MM service graphs (2-10 musicians, 10-30 audience members) onto two benchmark substrate topologies (Abilene and GEANT) augmented with cloud/core, regional-edge, and access-edge tiers ranked by topological centrality, comparing "decoupled app-network slicing" against the integrated approach.

In the paper's stated preliminary numerical results, across both topologies and all tested session sizes, integrated orchestration reduces overall resource cost relative to decoupled orchestration, by 12-27% depending on audience size on GEANT, with an average cost reduction of approximately 14.9% and a maximum observed reduction of 27.4% (27.4% on GEANT, 23.3% on Abilene) — gains growing with larger session sizes. At the same time, integrated orchestration reduces QoS (latency) violation rates by up to 70% (at 4 musicians), with 50-70% reductions at moderate audience sizes, showing the cost and reliability gains are not a trade-off against each other. The authors attribute the gains to integrated orchestration's ability to jointly coordinate application-function placement, routing, and resource allocation across the differentiated performer- and audience-side traffic classes, which decoupled orchestration cannot do.

## Summary (ZH)

这篇论文（作者 Al Housseini、Llorca、Ayoub、Rottondi、Turchet、Malandrino）指出，当前的 5G 网络切片与编排框架仍以服务为中心且相互解耦：应用部署/编排与网络资源分配各自独立优化，因此即便某个切片满足了传输层的时延约束，也无法保证真正的端到端时延，因为相当一部分时延来自切片控制范围之外的应用功能部署与功能间路由。作者以"音乐元宇宙"（MM）——一种将网络化音乐演出与元宇宙环境相结合、涉及地理分散的音乐家与观众、并要求严格同步与时延约束的沉浸式服务——作为代表性案例，展示了在同一服务实例中共存的异构用户类别（演奏者与观众）如何暴露出这一局限。

所提出的"应用-网络一体化切片"框架在统一的端到端服务模型中整合应用与网络编排，能够在单一逻辑切片内为多个用户类别设定差异化的 KPI 目标，采用基于图的编排表述形式，在联合通信/计算资源核算抽象（CNFlow）下显式建模端到端时延约束。评估中，MM 服务图（2-10 名音乐家、10-30 名观众）被嵌入到两个基准底层拓扑（Abilene 与 GEANT）上，这些拓扑按拓扑中心性划分为云/核心、区域边缘与接入边缘三层，并将"解耦式应用-网络切片"与一体化方案进行对比。

论文给出的初步数值结果显示，在两种拓扑及所有测试会话规模下，一体化编排相较解耦式编排均降低了总体资源成本——在 GEANT 上根据观众规模不同降低幅度为 12%-27%，平均成本降低约 14.9%，最大观测降幅达 27.4%（GEANT 上为 27.4%，Abilene 上为 23.3%）——且会话规模越大，收益越明显。与此同时，一体化编排将 QoS（时延）违规率最多降低 70%（音乐家数为 4 时），在中等观众规模下降幅为 50%-70%，表明成本与可靠性方面的收益并非此消彼长的权衡关系。作者将这些收益归因于一体化编排能够针对演奏者侧与观众侧差异化的流量类别，联合协调应用功能部署、路由与资源分配，而这是解耦式编排无法做到的。

## Key technical points (EN)

- Motivation: decoupled 5G app/network orchestration can satisfy transport-level delay bounds while still missing true end-to-end latency targets, because application-function placement/routing delay sits outside the slice's control.
- "Application-integrated slicing": unifies app and network orchestration in one end-to-end service model with per-user-class KPI targets within a single logical slice, via a graph-based formulation (CNFlow abstraction) with explicit delay constraints.
- Test case: Musical Metaverse (networked music performance + metaverse), with distinct performer (interactive, low-latency) and audience (bandwidth-heavy delivery) traffic classes.
- Evaluated on Abilene and GEANT topologies augmented with cloud/core-regional-edge-access-edge tiers (assigned by topological centrality), varying musicians (2-10) and audience size (10-30).
- Results: average resource-cost reduction ~14.9% (max 27.4% on GEANT, 23.3% on Abilene) vs. decoupled orchestration; QoS violation-rate reduction up to 70% (at 4 musicians; 50-70% at moderate audience sizes) — cost and reliability gains achieved simultaneously, not traded off.

## Key technical points (ZH)

- 动机：解耦式的 5G 应用/网络编排即便满足传输层时延约束，仍可能无法达成真正的端到端时延目标，因为应用功能部署/路由带来的时延不受切片控制。
- "应用-网络一体化切片"：在单一端到端服务模型中统一应用与网络编排，在同一逻辑切片内为不同用户类别设定 KPI 目标，采用基于图（CNFlow 抽象）的表述形式并显式建模时延约束。
- 测试场景：音乐元宇宙（网络化音乐演出 + 元宇宙环境），涉及演奏者（交互式、低时延）与观众（带宽密集型下发）两类差异化流量。
- 评估拓扑：Abilene 与 GEANT，按拓扑中心性划分为云/核心、区域边缘、接入边缘三层，音乐家数量 2-10 人，观众规模 10-30 人。
- 结果：相较解耦式编排，平均资源成本降低约 14.9%（GEANT 上最大降幅 27.4%，Abilene 上为 23.3%）；QoS 违规率最多降低 70%（音乐家数为 4 时；中等观众规模下为 50%-70%）——成本与可靠性收益同时实现，并非相互权衡。

## Why it matters / what's new (EN)

The KB has several network-slicing and 6G-orchestration entries, but this is the first to target the specific gap between transport-level slice QoS guarantees and true end-to-end latency caused by decoupled application/network orchestration, using a concrete immersive multi-role service (networked music performance) with quantified joint cost-and-reliability gains (not a cost/reliability trade-off) on two standard benchmark topologies.

## Why it matters / what's new (ZH)

知识库已收录多篇网络切片与 6G 编排相关条目，但本条目首次针对"传输层切片 QoS 保证"与"由应用/网络解耦编排导致的真实端到端时延"之间的具体差距进行研究，并以一个具体的沉浸式多角色服务（网络化音乐演出）为例，在两个标准基准拓扑上给出了成本与可靠性同时提升（而非相互权衡）的量化结果。

## Images
![Comparison of decoupled vs. application-integrated orchestration: overall resource cost on the GEANT topology | 解耦式与应用-网络一体化编排在 GEANT 拓扑上的总体资源成本对比](https://arxiv.org/html/2609.20163v1/x8.png)
