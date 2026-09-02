---
id: 2026-09-02_arxiv-drlm-llm-query-orchestration-edge
date_published: 2026-08-31
date_found: 2026-09-02
type: academic-paper
technology: edge-ai
title_en: "DRLM: reinforcement-learning LLM query orchestration across a 64-node edge cluster"
title_zh: "DRLM：跨 64 节点边缘集群的强化学习 LLM 请求编排"
url: "https://arxiv.org/abs/2609.00442"
source_quality: abstract_only
topics: [LLM-orchestration, reinforcement-learning, edge-cluster, PPO, model-device-matching, quantization-selection]
topic_primary: edge-orchestration
topics_secondary: [compute-offloading, on-device-inference]
novelty_score: 4
---

## Summary (EN)

Most edge-LLM orchestration work picks one model, one device tier, one quantization level, and optimizes around that fixed choice. DRLM (Deep Reinforcement Learning-based LLM query orchestration) treats the whole configuration space — which of 8 model families, which of 5 quantization levels, which of the available edge devices — as something a policy should choose per query, because different queries genuinely need different points on the latency/accuracy/resource curve.

The system has two lightweight predictors feeding a reinforcement-learning controller: a class-conditioned quality estimator that buckets an incoming query into one of 6 semantic categories and infers how well each candidate model would answer it, and a feature-driven latency predictor that estimates inference time for each model-device pairing before committing to it. Those predictions plus live system state (queue depth, device load) feed a factorized Proximal Policy Optimization (PPO) agent that outputs the orchestration decision — the "factorized" part lets the action space (model choice × device choice × quantization level) stay tractable instead of exploding combinatorially.

The empirical grounding is the strongest part of this paper: the authors built a 223,835-measurement benchmarking dataset spanning 1,258 queries, 6 query classes, 8 model families deployed as 32 distinct instances, 5 quantization levels, and a real 64-node heterogeneous edge cluster — not a simulated one. Against three baselines and two state-of-the-art comparison methods, DRLM cuts inference latency by up to 51% and queuing delay by up to 67%, at a worst-case 8% accuracy cost, and holds up to a 61.4% latency improvement as load increases, which is the harder claim to make (many orchestration policies degrade gracefully at low load and fall apart under contention). Accepted for GLOBECOM 2026.

## Summary (ZH)

多数边缘 LLM 编排工作会先选定一个模型、一个设备档位、一个量化等级，再围绕这个固定选择做优化。DRLM（基于深度强化学习的 LLM 请求编排）把整个配置空间——8 个模型家族中选哪个、5 档量化中选哪档、可用边缘设备中选哪台——当作策略应该逐请求决定的对象，因为不同请求确实需要落在时延/精度/资源曲线上的不同位置。

系统由两个轻量预测器驱动一个强化学习控制器：一个按语义类别条件化的质量估计器，把每条请求归入 6 个语义类别之一并推断各候选模型的作答质量；一个特征驱动的时延预测器，在真正提交某个模型-设备组合之前先估算其推理时间。这些预测再加上实时系统状态（队列深度、设备负载）共同喂入一个因子化的近端策略优化（PPO）智能体，输出编排决策——"因子化"是指动作空间（模型选择 × 设备选择 × 量化等级）被拆解处理，避免组合爆炸导致不可解。

这篇论文最扎实的部分是实证基础：作者构建了一个包含 223,835 条测量记录的基准数据集，覆盖 1,258 条查询、6 个查询类别、以 32 个具体实例部署的 8 个模型家族、5 档量化等级，运行在一个真实的（而非仿真的）64 节点异构边缘集群上。相较三个基线方法与两个业界前沿方法，DRLM 将推理时延降低最多 51%，排队时延降低最多 67%，最坏情况下精度代价为 8%；在负载上升时仍能保持最多 61.4% 的时延改善——这是更难做到的主张（许多编排策略在低负载下表现优雅，一旦出现资源争用就会崩溃）。论文已被 GLOBECOM 2026 接收。

## Key technical points (EN)

- **Setting**: heterogeneous edge-LLM serving — 8 model families (32 deployed instances), 5 quantization levels, real 64-node edge cluster; 6 query semantic classes.
- **Architecture**: class-conditioned quality estimator (query → semantic class → predicted model performance) + feature-driven latency predictor (model-device config → estimated inference time), feeding a factorized PPO agent for state-aware orchestration.
- **Benchmark dataset**: 223,835 measurements across 1,258 queries — released as part of the contribution, enabling data-driven orchestration rather than hand-tuned heuristics.
- **Results**: up to 51% inference-latency reduction, up to 67% queuing-delay reduction, ≤8% accuracy loss, up to 61.4% latency improvement under increasing workload, vs. three baselines and two SOTA methods.
- **Venue**: accepted, IEEE GLOBECOM 2026 (per the arxiv Comments field).
- **Read on abstract only** — the arxiv HTML rendering was not separately fetched for this entry; treat internal architecture details (PPO reward shaping, predictor training data) as abstract-level until a full read.

## Key technical points (ZH)

- **场景**：异构边缘 LLM 服务——8 个模型家族（32 个部署实例）、5 档量化等级、真实的 64 节点边缘集群；6 个查询语义类别。
- **架构**：语义类别条件化质量估计器（请求 → 语义类别 → 预测模型表现）+ 特征驱动时延预测器（模型-设备组合 → 估算推理时间），共同输入一个因子化 PPO 智能体做状态感知编排。
- **基准数据集**：223,835 条测量记录，覆盖 1,258 条查询——作为贡献的一部分发布，支撑数据驱动的编排而非手工调参的启发式方法。
- **结果**：推理时延最多降低 51%，排队时延最多降低 67%，精度代价最坏 8%，负载上升时时延改善最多保持 61.4%，对比三个基线与两个业界前沿方法。
- **发表**：已被 IEEE GLOBECOM 2026 接收（据 arxiv Comments 字段）。
- **仅读摘要**——本条目未单独抓取 arxiv HTML 全文渲染版，PPO 奖励设计、预测器训练数据等内部细节暂按摘要级信息对待，待全文阅读后更新。

## Why it matters / what's new (EN)

This is the second entry in the `edge-orchestration` bin, seeded on 2026-09-01 by `2026-09-01_arxiv-amadiff-mobile-aigc-task-orchestration`. Where A-MADiff frames orchestration as a Dec-POMDP over GPU-memory-as-binding-constraint for diffusion AIGC tasks, DRLM frames it as an RL-controlled routing problem across model family × quantization × device for LLM query serving — a different workload class (discriminative/generative-text serving vs. AIGC task placement) landing in the same bin, which is exactly the kind of complementary coverage the bin needs. The measurement scale (223K data points on a real 64-node cluster, not simulated) is the strongest thing about this paper and fits this domain's recurring calibration finding: independent, real-deployment measurement outranks yet another proposed mechanism with only relative numbers.

## Why it matters / what's new (ZH)

这是 `edge-orchestration`（边缘编排）分箱的第二条条目，该分箱由 2026-09-01 的 `2026-09-01_arxiv-amadiff-mobile-aigc-task-orchestration` 首次填入。A-MADiff 把编排问题建模为以 GPU 显存为约束的 Dec-POMDP，面向扩散式 AIGC 任务放置；DRLM 则把编排问题建模为一个由强化学习控制、跨模型家族 × 量化等级 × 设备的路由问题，面向 LLM 请求服务——是落在同一分箱下、但负载类型不同（判别/生成式文本服务 vs. AIGC 任务放置）的互补覆盖，正是这个分箱需要的。这篇论文最扎实之处在于测量规模（真实 64 节点集群上的 22.3 万条数据点，而非仿真），也印证了本领域反复出现的校准结论：独立的真实部署测量，胜过又一个只有相对数字支撑的新机制提案。

## Images

*(No redistributable images for this entry — abstract-only read; figures not extracted.)*
