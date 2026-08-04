---
id: 2026-08-04_arxiv-oran-energy-latency-ai-placement
date_published: 2026-08-03
date_found: 2026-08-04
type: academic-paper
technology: cellular
title_en: "Energy-Latency Trade-offs in O-RAN with Distributed Baseband Processing and AI Inference"
title_zh: "O-RAN 分布式基带处理与 AI 推理的能耗-时延权衡"
url: "https://arxiv.org/abs/2608.02082"
source_quality: abstract_only
topics: [O-RAN, functional-split, energy-efficiency, AI-inference]
topic_primary: open-ran
topics_secondary: [cellular-ai, mec]
novelty_score: 2
---

## Summary (EN)

A joint modeling study (Tariq, Raj, Pandey, Dzaferagic, Popovski, Kilper — an Aalborg/Trinity-College-Dublin flavoured author set, submitted 2026-08-03) that treats a question operators now face concretely: where, across an O-RAN deployment's access, metro, and long-haul segments, should baseband processing functions and AI/ML inference workloads be placed when both energy and latency matter?

The authors build an end-to-end energy-consumption model that folds in latency modeling and — unusually for this literature — the energy cost of AI/ML inference itself, rather than treating inference as free-riding on RAN compute. On top of the model they formulate an optimization that selects the placement of baseband functions (across O-RAN's flexible functional splits) and inference tasks jointly, subject to network load, server frequency, and energy-budget constraints.

The headline qualitative result: QoS requirements and network load *jointly* determine optimal placement — there is no static split/placement that is simultaneously energy-optimal and latency-safe across load regimes, so centralisation-vs-distribution must be re-decided as load shifts. The paper positions itself as design guidance for O-RAN deployments expected to host AI-driven services (AI-RAN) whose inference workloads compete with baseband processing for the same distributed compute.

## Summary (ZH)

一项联合建模研究（Tariq、Raj、Pandey、Dzaferagic、Popovski、Kilper——奥尔堡/都柏林圣三一背景的作者组合，2026-08-03 提交），处理运营商当下的具体问题：在 O-RAN 部署的接入、城域与长途段之间，当能耗与时延都重要时，基带处理功能与 AI/ML 推理负载应放在哪里？

作者建立了端到端能耗模型，纳入时延建模，并且——在这类文献中少见地——纳入 AI/ML 推理本身的能耗，而非把推理当作搭 RAN 算力便车的免费项。在模型之上构建优化问题，联合选择基带功能（跨 O-RAN 灵活功能切分）与推理任务的放置，约束条件包括网络负载、服务器频率与能耗预算。

核心定性结论：QoS 需求与网络负载*共同*决定最优放置——不存在在所有负载状态下同时能耗最优且时延安全的静态切分/放置方案，集中化与分布化必须随负载迁移重新决策。论文将自身定位为承载 AI 驱动业务（AI-RAN）的 O-RAN 部署的设计指南，这类推理负载与基带处理竞争同一套分布式算力。

## Key technical points (EN)

- End-to-end energy model spanning access / metro / long-haul segments, with latency modeling and explicit AI-inference energy cost included.
- Joint optimization: placement of baseband functions (functional splits) + AI inference tasks under network-load, server-frequency, and energy-budget constraints.
- Finding: no static placement is optimal across load regimes — QoS and load jointly move the optimum between centralised and distributed configurations.
- Framing target: AI-RAN deployments where inference workloads and baseband processing share distributed compute.

## Key technical points (ZH)

- 覆盖接入/城域/长途段的端到端能耗模型，含时延建模与显式的 AI 推理能耗。
- 联合优化：在网络负载、服务器频率与能耗预算约束下放置基带功能（功能切分）与 AI 推理任务。
- 结论：不存在跨负载状态的静态最优放置——QoS 与负载共同使最优点在集中式与分布式配置间移动。
- 目标场景：推理负载与基带处理共享分布式算力的 AI-RAN 部署。

## Why it matters / what's new (EN)

The open-ran bin has entries on programmable MAC scheduling (MAC-Gyver), forensic triage (C-RE-ACT), and fleet energy management (2026-08-03_arxiv-packetized-energy-6g-ran, which manages BS energy as a virtual power plant); this entry fills the placement dimension — where compute goes, not how much energy the fleet trades. Counting AI-inference energy as a first-class term is the differentiating move as AI-RAN marketing routinely assumes inference is absorbed for free. Abstract-level ingest only (no HTML rendering available); a later run can upgrade source_quality if the camera-ready lands with numbers worth capturing.

## Why it matters / what's new (ZH)

open-ran 主题已有可编程 MAC 调度（MAC-Gyver）、取证分诊（C-RE-ACT）与集群能量管理条目（2026-08-03_arxiv-packetized-energy-6g-ran，将基站能量作为虚拟电厂管理）；本条目补上放置维度——算力放在哪里，而非集群交易多少能量。将 AI 推理能耗作为一等项计入是其差异化之处，因为 AI-RAN 的宣传通常默认推理开销可被免费吸收。本条目仅为摘要级收录（无 HTML 渲染）；若正式版发表并带有值得记录的数据，后续运行可升级 source_quality。
