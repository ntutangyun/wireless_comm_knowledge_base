---
id: 2026-06-03_arxiv-gnn-online-beamforming-haps-ntn
date_published: 2026-05-29
date_found: 2026-06-03
type: academic-paper
title_en: "GNN-based Online Beamforming Design for HAPS-Assisted NTN"
title_zh: "面向 HAPS 辅助 NTN 的基于 GNN 的在线波束成形设计"
url: "https://arxiv.org/abs/2606.00244"
source_quality: abstract_only
technology: cellular
topics: [NTN, HAPS, beamforming, GNN, energy-efficiency, cell-edge]
topic_primary: ntn
topics_secondary: [cellular-massive-mimo, cellular-ai]
novelty_score: 2
---

## Summary (EN)
This paper (IEEE VTC2026-Fall) addresses cell-edge users in terrestrial cellular networks who suffer from path loss, shadowing, and inter-cell interference. The proposal integrates a high-altitude platform station (HAPS) as a line-of-sight relay for cell-edge users, and jointly optimizes beamforming at both the terrestrial base stations and the HAPS. The objective is energy-efficiency (EE) maximization, formulated as a non-convex problem.

To solve it online, the authors build a graph-neural-network (GNN) framework that captures the network topology directly, letting the learned solver generalize across configurations without re-solving the non-convex program from scratch each time. Numerical results show improved network performance, in particular a higher 5th-percentile EE — i.e. the cell-edge users that motivated the work are the ones that benefit most. It is a hybrid terrestrial-HAPS system that engages 3GPP NTN concepts but focuses on HAPS integration rather than strict 3GPP NTN standardization.

## Summary (ZH)
本文（IEEE VTC2026-Fall）针对地面蜂窝网络中受路径损耗、阴影与小区间干扰困扰的小区边缘用户。方案引入高空平台站（HAPS）作为小区边缘用户的视距中继，并对地面基站与 HAPS 的波束成形进行联合优化。目标为能效（EE）最大化，建模为非凸问题。

为在线求解，作者构建直接捕捉网络拓扑的图神经网络（GNN）框架，使学到的求解器能跨配置泛化，而无需每次从头重解非凸问题。数值结果显示网络性能提升，尤其是第 5 百分位能效更高——即促成本研究的小区边缘用户受益最大。该系统为地面-HAPS 混合架构，涉及 3GPP NTN 概念，但聚焦 HAPS 集成而非严格的 3GPP NTN 标准化。

## Key technical points (EN)
- **Setup:** HAPS as LoS relay for cell-edge users; joint BS + HAPS beamforming.
- **Objective:** energy-efficiency maximization (non-convex).
- **Method:** GNN-based online optimization capturing network topology; generalizes across configs without re-solving from scratch.
- **Result:** improved 5th-percentile EE — cell-edge users benefit most.
- **Scope:** hybrid terrestrial-HAPS (NTN concepts, HAPS-integration focus).

## Key technical points (ZH)
- **设置：** HAPS 作为小区边缘用户的视距中继；BS + HAPS 联合波束成形。
- **目标：** 能效最大化（非凸）。
- **方法：** 基于 GNN 的在线优化，捕捉网络拓扑；跨配置泛化、无需从头重解。
- **结果：** 第 5 百分位能效提升——小区边缘用户受益最大。
- **范围：** 地面-HAPS 混合（NTN 概念，聚焦 HAPS 集成）。

## Why it matters / what's new (EN)
HAPS-assisted NTN is the lighter-weight, lower-latency cousin of satellite NTN, and the KB's `ntn` bin is mostly satellite-leaning; this adds a terrestrial-augmentation angle where the aerial node is a relay for *existing* cell-edge users rather than primary coverage. The GNN-as-online-solver pattern (topology-aware, generalizing across configurations) is the same family as the GNN/RL beamforming work appearing in the cellular-massive-mimo and cellular-ai bins, applied here to the joint terrestrial+aerial beamforming problem.

## Why it matters / what's new (ZH)
HAPS 辅助 NTN 是卫星 NTN 的更轻量、更低时延的近亲，而 KB 的 `ntn` 桶多偏卫星；本文增加了地面增强视角——空中节点是*既有*小区边缘用户的中继，而非主覆盖。GNN 作为在线求解器的范式（拓扑感知、跨配置泛化）与出现在 cellular-massive-mimo 和 cellular-ai 桶中的 GNN/RL 波束成形工作同族，此处应用于地面+空中联合波束成形问题。
