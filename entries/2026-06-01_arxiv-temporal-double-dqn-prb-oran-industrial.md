---
id: 2026-06-01_arxiv-temporal-double-dqn-prb-oran-industrial
date_published: 2026-05-28
date_found: 2026-06-01
type: academic-paper
title_en: "Temporally Encoded Double DQN for Proactive PRB Allocation in O-RAN Enabled Industrial Networks"
title_zh: "面向 O-RAN 工业网络主动 PRB 分配的时序编码 Double DQN"
url: "https://arxiv.org/abs/2605.30630"
source_quality: abstract_only
topics: [O-RAN, reinforcement-learning, scheduling, industrial-5G]
topic_primary: cellular-ai
topics_secondary: [open-ran, network-slicing]
novelty_score: 2
---

## Summary (EN)
Industrial 5G traffic is temporally correlated and process-driven: machines on a line generate bursty, concurrent flows whose demand is non-stationary. Static or reactive O-RAN schedulers handle this poorly, leading to under-utilisation and latency-reliability violations. This paper proposes a scheduler that **anticipates** demand rather than reacting to it.

The mechanism pairs an **LSTM encoder with a Double Deep Q-Network**: the LSTM captures sequential dependencies in network-performance metrics so the DQN can make proactive physical-resource-block (PRB) allocation decisions. To train and evaluate without a live factory, the authors drive the system with a continuous-time Markov chain that synthesises realistic industrial traffic — machine concurrency and burstiness included.

Results show the LSTM–Double-DQN scheduler improves slice satisfaction and buffer stability under moderate and heavy loads, with gains widening as the temporal observation window grows — i.e. the further ahead the model can see the correlated process, the more proactive allocation pays off.

## Summary (ZH)
工业 5G 流量具有时间相关性且由生产流程驱动：产线上的机器产生突发、并发的流，其需求是非平稳的。静态或被动式 O-RAN 调度器对此应对不佳，导致利用率低下与时延-可靠性违例。本文提出一种**预判**需求而非被动响应的调度器。

机制将 **LSTM 编码器与 Double Deep Q-Network 结合**：LSTM 捕捉网络性能指标中的时序依赖，使 DQN 能做出主动的物理资源块（PRB）分配决策。为在无真实工厂的条件下训练与评测，作者用连续时间马尔可夫链合成贴近实际的工业流量（含机器并发与突发性）。

结果表明，LSTM–Double-DQN 调度器在中、重负载下提升切片满意度与缓冲稳定性，且随时序观测窗口增大收益扩大——即模型对相关流程看得越远，主动分配越划算。

## Key technical points (EN)
- Target: non-stationary, process-driven industrial 5G traffic where static/reactive O-RAN schedulers fail.
- Mechanism: LSTM encoder (sequential dependency) + Double DQN → proactive PRB allocation.
- Traffic model: continuous-time Markov chain with machine concurrency + burstiness for training/eval.
- Results: improved slice satisfaction and buffer stability under moderate/heavy load; gains grow with longer observation window.

## Key technical points (ZH)
- 目标：非平稳、流程驱动的工业 5G 流量，静态/被动 O-RAN 调度器失效。
- 机制：LSTM 编码器（时序依赖）+ Double DQN → 主动 PRB 分配。
- 流量模型：含机器并发与突发性的连续时间马尔可夫链，用于训练/评测。
- 结果：中/重负载下切片满意度与缓冲稳定性提升；观测窗口越长收益越大。

## Why it matters / what's new (EN)
Adds a temporal-prediction angle to the RL-scheduling line in `cellular-ai`: the contribution is encoding the correlated structure of industrial traffic (via LSTM) so the agent allocates ahead of demand, rather than the more common reactive RL schedulers.

## Why it matters / what's new (ZH)
为 `cellular-ai` 中的 RL 调度方向增加时序预测视角：贡献在于（经 LSTM）编码工业流量的相关结构，使智能体先于需求分配，而非更常见的被动式 RL 调度器。
