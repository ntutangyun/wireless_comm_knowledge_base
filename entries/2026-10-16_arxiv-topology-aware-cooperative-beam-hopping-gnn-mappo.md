---
id: 2026-10-16_arxiv-topology-aware-cooperative-beam-hopping-gnn-mappo
date_published: 2026-10-08
date_found: 2026-10-16
technology: satellite
type: academic-paper
title_en: "Topology-Aware Cooperative Beam-Hopping Scheduling for Efficient Resource Allocation in LEO Satellite Systems"
title_zh: "LEO 卫星系统中面向高效资源分配的拓扑感知协作波束跳变调度"
url: "https://arxiv.org/abs/2610.11103"
source_quality: abstract-only
topics: [LEO, beam-hopping, GNN, MAPPO, multi-agent-RL, power-control]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 2
---

## Summary (EN)

Zheng, Zhang, Sheng, Wang (arXiv 2610.11103, submitted 8 October 2026, a letter) address beam-hopping (BH) resource management in multi-satellite systems, where dynamic topology and heterogeneous traffic demands make scheduling hard under partial observability.

The framework first uses a lightweight load-balancing scheme to determine serving relationships, which are used to build an association-induced satellite-user graph. A two-phase graph neural network extracts episode-level topology-aware structural identities for parameter-sharing agents, while a recurrent multi-agent proximal policy optimization (MAPPO) policy handles slot-level dynamics for joint beam scheduling and onboard power control. The abstract reports simulation gains in energy efficiency, throughput and fairness over baselines, without giving figures.

## Summary (ZH)

Zheng、Zhang、Sheng、Wang（arXiv 2610.11103，2026 年 10 月 8 日提交，快报论文）研究多卫星系统中的波束跳变（BH）资源管理，其动态拓扑和异构业务需求使得部分可观测条件下的调度十分困难。

该框架先用轻量级负载均衡方案确定服务关系，并据此构建关联诱导的卫星-用户图。两阶段图神经网络为参数共享的智能体提取回合级拓扑感知结构标识，循环式多智能体近端策略优化（MAPPO）策略处理时隙级动态，实现波束调度与星上功率控制的联合优化。摘要称仿真在能效、吞吐量和公平性上优于基线，但未给出具体数字。

## Key technical points (EN)

- **Problem**: multi-satellite beam hopping under dynamic topology, heterogeneous traffic, partial observability.
- **Step 1**: lightweight load balancing sets serving relationships and builds a satellite-user graph.
- **Step 2**: two-phase GNN gives topology-aware structural identities to parameter-sharing agents.
- **Step 3**: recurrent MAPPO handles slot-level joint beam scheduling and onboard power control.
- **Reported result**: gains in energy efficiency, throughput and fairness vs baselines (no numbers in abstract).

## Key technical points (ZH)

- **问题**：动态拓扑、异构业务、部分可观测条件下的多卫星波束跳变。
- **第一步**：轻量级负载均衡确定服务关系并构建卫星-用户图。
- **第二步**：两阶段 GNN 为参数共享智能体提供拓扑感知结构标识。
- **第三步**：循环 MAPPO 处理时隙级波束调度与星上功率联合控制。
- **报告结果**：能效、吞吐量和公平性优于基线（摘要未给出数字）。

## Why it matters / what's new (EN)

A multi-agent RL approach to joint beam-hopping scheduling and onboard power control that encodes constellation topology through a GNN. Only the abstract was reviewed for this entry.

## Why it matters / what's new (ZH)

一种多智能体强化学习方法，通过 GNN 编码星座拓扑，联合优化波束跳变调度与星上功率控制。本条目仅依据摘要编写。

## Images

None.
