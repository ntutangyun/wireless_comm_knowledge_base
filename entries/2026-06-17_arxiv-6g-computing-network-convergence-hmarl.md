---
id: 2026-06-17_arxiv-6g-computing-network-convergence-hmarl
date_published: 2026-06-13
date_found: 2026-06-17
type: academic-paper
technology: cellular
title_en: "Ubiquitous 6G Computing-Network Convergence: A Hierarchical Cross-Domain Coordination Architecture with Multi-Agent RL"
title_zh: "泛在 6G 算网融合：分层跨域协同架构与多智能体强化学习机制"
url: "https://arxiv.org/abs/2606.15073"
source_quality: full
topics: [6G, computing-network-convergence, CNC, MARL, orchestration, edge-computing, resource-coordination]
topic_primary: 6g-vision
topics_secondary: [cellular-ai, mec]
novelty_score: 2
---

## Summary (EN)
Li, Zhang, Zhang and Wang (arXiv 2606.15073, submitted 13 June 2026) propose a **mobile computing-network convergence (CNC)** architecture for 6G that embeds computing resources directly into the network fabric, replacing the traditional "cloud + communication" model so that immersive-communication and integrated-sensing-and-communication (ISAC) workloads can be served where the data and radio resources already are. The contribution is a **hierarchical, cross-domain coordination architecture** plus a **hierarchical multi-agent reinforcement learning (HMARL)** mechanism that orchestrates compute and network resources jointly across terminal, RAN, and transport-network domains.

The architecture has three layers. A **Service Orchestrator** handles service registration (metadata, SLA), QoS monitoring, and a knowledge base of pre-trained models. An **E2E Orchestrator** does cross-domain coordination — perception/intent recognition (aggregating distributed compute, topology, and user intent), deployment+routing strategy formulation against the global resource view, and a retrieval-augmented decision (RAD) + DRL "intelligent driving" core. A **Domain Orchestrator** layer specializes per domain: terminal-side (lightweight on-device inference), RAN-side (radio + edge compute with mobility), and transport-side (large-scale compute and cross-region scheduling).

HMARL maps cleanly onto the hierarchy: a high-level agent (the E2E orchestrator) makes cross-domain task-allocation and service-deployment decisions, while low-level agents (domain orchestrators) choose compute nodes, plan network paths, and schedule tasks. A global reward (minimize energy, maximize task-satisfaction rate) is decomposed into local rewards. Concretely the E2E agent uses Q-learning, while domain agents use **DDQN** for discrete service deployment and **DDPG** for continuous traffic distribution. Simulation spans 10 terminal domains, 10 RAN domains and 1 transport domain serving 30 service types (request volume uniform over [N−10, N+10], service popularity Zipf with exponent 1.2). Against RAND, a popularity-greedy GRD baseline, and an offline near-optimal OPT heuristic, HMARL tracks OPT closely across loads and holds up under heavy load where GRD degrades rapidly — while remaining computationally tractable, unlike fully-centralized or fully-distributed alternatives. Reported gains are reduced total energy and higher task-satisfaction versus conventional network-slicing orchestration.

## Summary (ZH)
Li、Zhang、Zhang 与 Wang（arXiv 2606.15073，2026 年 6 月 13 日提交）提出面向 6G 的**移动算网融合（CNC）**架构，将算力直接嵌入网络结构，取代传统"云 + 通信"模型，使沉浸式通信与通感一体化（ISAC）类工作负载可在数据与无线资源所在之处获得服务。其贡献是一个**分层、跨域协同架构**，外加一个**分层多智能体强化学习（HMARL）**机制，跨终端、RAN 与传输网三类域联合编排算力与网络资源。

架构分三层。**服务编排器**负责服务注册（元数据、SLA）、QoS 监测与预训练模型知识库。**端到端编排器**负责跨域协同——感知/意图识别（聚合分布式算力、拓扑与用户意图）、基于全局资源视图的部署+路由策略制定，以及检索增强决策（RAD）+ DRL 的"智能驱动"核心。**域编排器**层按域专门化：终端侧（轻量端侧推理）、RAN 侧（无线 + 边缘算力，支持移动性）、传输侧（大规模算力与跨域调度）。

HMARL 与该层级一一对应：高层智能体（端到端编排器）做跨域任务分配与服务部署决策，低层智能体（域编排器）选择算力节点、规划网络路径并调度任务。全局奖励（最小化能耗、最大化任务满足率）分解为局部奖励。具体而言，端到端智能体用 Q-learning，域智能体用 **DDQN**（离散服务部署）与 **DDPG**（连续流量分配）。仿真覆盖 10 个终端域、10 个 RAN 域与 1 个传输域，服务 30 种类型（请求量在 [N−10, N+10] 均匀，服务流行度 Zipf 指数 1.2）。相较 RAND、流行度贪心 GRD 与离线近优 OPT 启发式，HMARL 在各负载下紧贴 OPT，在 GRD 迅速劣化的重负载下仍保持稳健，同时计算可行——不同于全集中式或全分布式方案。报告增益为相对传统网络切片编排的总能耗下降与任务满足率提升。

## Key technical points (EN)
- **CNC vision**: embed compute into the 6G network fabric (vs cloud+comms) to serve immersive-comms / ISAC where radio + data already live.
- **3-layer architecture**: Service Orchestrator (registration/SLA/monitoring/model KB) → E2E Orchestrator (intent perception + cross-domain strategy + RAD/DRL driving) → Domain Orchestrators (terminal / RAN / transport).
- **HMARL**: high-level E2E agent = cross-domain task allocation + service deployment; low-level domain agents = node selection + path planning + scheduling; global reward decomposed to local.
- **Algorithms**: E2E uses Q-learning; domain agents use DDQN (discrete deployment) + DDPG (continuous traffic distribution).
- **Objective**: minimize total energy, maximize task-satisfaction rate.
- **Sim**: 10 terminal + 10 RAN + 1 transport domain, 30 service types, Zipf(1.2) popularity, requests ~U[N−10,N+10].
- **Baselines/results**: vs RAND / GRD(greedy) / OPT(offline heuristic) — HMARL near-OPT across loads, robust at heavy load where GRD collapses, tractable for deployment; lower energy + higher satisfaction than slicing-style orchestration.

## Key technical points (ZH)
- **CNC 愿景**：将算力嵌入 6G 网络结构（取代云+通信），在无线与数据所在之处服务沉浸式通信/通感一体化。
- **三层架构**：服务编排器（注册/SLA/监测/模型库）→ 端到端编排器（意图感知 + 跨域策略 + RAD/DRL 驱动）→ 域编排器（终端/RAN/传输）。
- **HMARL**：高层端到端智能体 = 跨域任务分配 + 服务部署；低层域智能体 = 节点选择 + 路径规划 + 调度；全局奖励分解为局部。
- **算法**：端到端用 Q-learning；域智能体用 DDQN（离散部署）+ DDPG（连续流量分配）。
- **目标**：最小化总能耗、最大化任务满足率。
- **仿真**：10 终端 + 10 RAN + 1 传输域，30 种服务，Zipf(1.2) 流行度，请求 ~U[N−10,N+10]。
- **基线/结果**：对比 RAND / GRD（贪心）/ OPT（离线启发式）——HMARL 各负载下接近 OPT，在 GRD 崩溃的重负载下稳健且部署可行；相对切片式编排能耗更低、满足率更高。

## Why it matters / what's new (EN)
The `6g-vision` bin tracks 6G architecture proposals, and this one lands squarely in the active "computing-network convergence" (算网融合) thread that several 6G whitepapers and the modular-digital-twin / agentic-core entries already in the KB are circling. Its distinctive move is structural: instead of treating compute placement as a slicing or MEC-offloading problem, it builds a three-tier orchestration hierarchy whose levels map one-to-one onto an HMARL agent hierarchy (Q-learning at the E2E level, DDQN+DDPG inside each domain), giving a concrete decomposition of the global energy-vs-satisfaction objective into per-domain learning problems. The near-OPT, heavy-load-robust result against greedy and random baselines makes it a useful reference point for how cross-domain resource coordination might actually be learned at 6G scale, complementing the more management-plane-oriented digital-twin and intent-driven entries with an RL-control angle.

## Why it matters / what's new (ZH)
`6g-vision` 分箱跟踪 6G 架构提案，本文正落在活跃的"算网融合"主线上——KB 中已有的模块化数字孪生 / 智能体核心条目都在围绕该主线。其独到之处是结构性的：它不把算力放置当作切片或 MEC 卸载问题，而是构建三层编排层级，各层与 HMARL 智能体层级一一对应（端到端层 Q-learning，各域内 DDQN+DDPG），把"能耗 vs 满足率"的全局目标具体分解为各域的学习问题。在贪心与随机基线之上取得接近 OPT、重负载稳健的结果，使其成为"跨域资源协同如何在 6G 规模下被学习"的有用参照，以强化学习控制视角补充了偏管理面的数字孪生与意图驱动条目。
