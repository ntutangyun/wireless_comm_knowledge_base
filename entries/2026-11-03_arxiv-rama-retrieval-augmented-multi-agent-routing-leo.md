---
id: 2026-11-03_arxiv-rama-retrieval-augmented-multi-agent-routing-leo
date_published: 2026-10-30
date_found: 2026-11-03
technology: satellite
type: academic-paper
title_en: "RAMA: Retrieval-Augmented Multi-Agent Routing with Episodic Memory for LEO Satellite Networks"
title_zh: "RAMA：面向 LEO 卫星网络、带情景记忆的检索增强多智能体路由"
url: "https://arxiv.org/abs/2610.42068"
source_quality: abstract_only
topics: [LEO, routing, multi-agent-DRL, episodic-memory, retrieval-augmented, Transformer, Approximate-Information-State, Starlink-shell-1]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Li and Hu (arXiv 2610.42068, cs.NI, submitted 30 October 2026) address routing in LEO networks, where topology, traffic and link conditions change quickly. They note that existing deep-reinforcement-learning routing methods typically rely on current observations and information encoded in network weights, which limits reuse of successful past experience.

RAMA is a retrieval-augmented multi-agent DRL framework with Approximate Information State (AIS). Each satellite combines its local observation, recent routing history, neighbour state and entries retrieved from a per-satellite episodic memory, integrated by a Transformer-based decision network trained with AIS-based auxiliary objectives.

## Summary (ZH)

Li 与 Hu（arXiv 2610.42068，cs.NI，2026 年 10 月 30 日提交）研究 LEO 网络路由问题，其拓扑、流量和链路条件变化迅速。作者指出，现有深度强化学习路由方法通常依赖当前观测及编码在网络权重中的信息，难以利用过往成功经验。

RAMA 是带近似信息状态（AIS）的检索增强多智能体 DRL 框架。每颗卫星将本地观测、近期路由历史、邻居状态以及从每星情景记忆中检索到的条目结合，由基于 Transformer 的决策网络整合，并以 AIS 辅助目标训练。

## Key technical points (EN)

- **Small constellation test**: with frozen weights in a 140-satellite Kepler constellation, mean end-to-end latency falls 13.4% and 99th-percentile latency 66.7% versus DDQN, which the authors describe as the state-of-the-art routing method, mainly by avoiding long detours.
- **Online updating**: RAMA stays stable while DDQN degrades.
- **Starlink shell 1** (1,584 satellites): the mean-latency reduction grows to 93.2%, and online updating lowers RAMA's mean latency by a further 25.5%.
- Results are from simulation as reported in the abstract. Abstract-level summary only.

## Key technical points (ZH)

- **小规模星座测试**：在 140 颗卫星的开普勒星座中冻结权重时，相对作者称为最先进的 DDQN 路由方法，平均端到端时延降低 13.4%，99 分位时延降低 66.7%，主要得益于避免长绕行。
- **在线更新**：RAMA 保持稳定，而 DDQN 性能下降。
- **Starlink 第 1 层**（1,584 颗卫星）：平均时延降幅扩大至 93.2%，在线更新使 RAMA 平均时延再降低 25.5%。
- 结果为摘要所述的仿真结果。仅为摘要级概述。

## Why it matters / what's new (EN)

The paper adds an explicit per-satellite memory of past routing experience to learned LEO routing, rather than relying only on current state and weights. The reported gains are against the DDQN baseline in simulation; per the full text, an idealised Dijkstra shortest-path benchmark with full global topology still keeps the best value on almost every aggregate, and RAMA's gap to it grows on Starlink shell 1.

## Why it matters / what's new (ZH)

论文在学习型 LEO 路由中引入每颗卫星显式的历史路由经验记忆，而不只依赖当前状态与权重。所报告的收益是仿真中相对 DDQN 基线得到的；据全文，掌握完整全局拓扑的理想化 Dijkstra 最短路径基准在几乎所有汇总指标上仍最优，且在 Starlink 第 1 层上 RAMA 与其差距扩大。

## Images

None.
