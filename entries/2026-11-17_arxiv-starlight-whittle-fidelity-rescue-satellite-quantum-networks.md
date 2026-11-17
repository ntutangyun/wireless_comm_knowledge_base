---
id: 2026-11-17_arxiv-starlight-whittle-fidelity-rescue-satellite-quantum-networks
date_published: 2026-11-13
date_found: 2026-11-17
technology: satellite
type: academic-paper
title_en: "Starlight: Whittle-Driven Fidelity Rescue for Satellite-Terrestrial Quantum Networks"
title_zh: "Starlight：面向星地量子网络的 Whittle 驱动保真度救援"
url: "https://arxiv.org/abs/2611.17865"
source_quality: abstract-plus-intro
topics: [quantum internet, entanglement routing, LEO, restless multi-armed bandit, Whittle index, satellite-terrestrial]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

Shi, Zhao and Yuan (arXiv, 13 Nov 2026) study how limited LEO satellite resources should be allocated among competing entanglement connections in a satellite-terrestrial quantum network. They argue existing scheduling is provisioning-oriented (aggregate entanglement delivery) or age-based, and does not identify which connections most urgently need satellite help as their physical states evolve. Starlight targets degrading connections before their terrestrial entanglement becomes unusable; the paper calls an unresolved long inter-domain span between two entangled terrestrial subpaths an "inter-domain bottleneck" and satellite help that bridges it a "fidelity rescue".

The design introduces Effective Age of State (EAoS), a physics-aware metric mapping heterogeneous decoherence and swapping-induced fidelity penalties onto one additive coordinate. Rescue scheduling is cast as a Restless Multi-Armed Bandit (RMAB) with a closed-form Whittle-style index approximation for top-K selection, plus a two-timescale control plane and an asynchronous dispatch-and-mask pipeline that suppresses redundant in-flight allocations.

## Summary (ZH)

Shi、Zhao 与 Yuan（arXiv，2026 年 11 月 13 日）研究星地量子网络中有限的 LEO 卫星资源应如何在相互竞争的纠缠连接间分配。作者认为现有调度要么面向供给（聚合纠缠交付量），要么基于时龄，均无法在物理状态演化时识别最迫切需要卫星协助的连接。Starlight 在地面纠缠失效之前针对正在退化的连接施救；论文将两条已纠缠的地面子路径之间尚未接通的长跨域段称为“跨域瓶颈”，将桥接它的卫星协助称为“保真度救援”。

设计引入状态有效时龄（EAoS），一种物理感知的度量，将异质的退相干与纠缠交换导致的保真度损失映射到统一的可加坐标。救援调度被建模为不安定多臂老虎机（RMAB），给出用于 top-K 选择的闭式 Whittle 型索引近似，并配有双时间尺度控制平面和异步派发-屏蔽流水线以抑制冗余的在途分配。

## Key technical points (EN)

- Simulation results reported in the abstract: up to 84.5% average satisfaction under constrained rescue capacity; sub-0.5-ms orchestration at 1,000 connections; robust to heterogeneous memory decay and stochastic atmospheric degradation.
- The paper positions itself against ILP-based satellite scheduling, time-discretised logical-graph optimisation and hybrid quantum-classical solvers, citing growing computational cost at scale and the risk of stale precomputed allocations.
- Age-of-Entanglement and Fidelity-Age metrics are named as prior age-based approaches whose scheduling states evolve mainly with elapsed time.

## Key technical points (ZH)

- 摘要报告的仿真结果：在受限救援容量下平均满意度最高达 84.5%；1,000 个连接时编排时延低于 0.5 ms；对异质存储器衰减和随机大气退化保持稳健。
- 论文将自身与基于 ILP 的卫星调度、时间离散的逻辑图优化及混合量子-经典求解器相比较，指出后者规模扩大后计算代价上升，且预计算分配有过时风险。
- 纠缠时龄（AoE）与保真度时龄（FA）被列为此前的时龄类方法，其调度状态主要随流逝时间演化。

## Why it matters / what's new (EN)

It frames LEO satellite assistance for quantum networks as an urgency-driven bandit scheduling problem instead of aggregate provisioning. Results are simulation only.

## Why it matters / what's new (ZH)

它将量子网络的 LEO 卫星协助表述为由紧迫度驱动的老虎机调度问题，而非聚合供给。结果仅来自仿真。

## Images

None.
