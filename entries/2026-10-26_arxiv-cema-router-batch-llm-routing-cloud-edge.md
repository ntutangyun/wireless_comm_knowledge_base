---
id: 2026-10-26_arxiv-cema-router-batch-llm-routing-cloud-edge
date_published: 2026-10-19
date_found: 2026-10-26
technology: edge-ai
type: academic-paper
title_en: "CEMA-Router: infrastructure-aware batch routing of LLM requests across heterogeneous cloud and edge nodes"
title_zh: "CEMA-Router：面向异构云边节点的、感知基础设施的 LLM 请求批量路由"
url: "https://arxiv.org/abs/2610.26171"
source_quality: full
topics: [LLM-routing, cloud-edge, memetic-algorithm, multi-objective, energy, makespan, RouterBench, batch-scheduling]
topic_primary: edge-orchestration
topics_secondary: [compute-offloading]
novelty_score: 3
---

## Summary (EN)

CEMA-Router, from Monash University (Faculty of Information Technology), addresses where to send batches of LLM requests when the available nodes differ in compute, energy efficiency, network conditions and the quality of the model deployed on them. The authors argue that LLM routers usually decide per query on model quality and token cost, while cloud-edge schedulers tend to ignore quality differences between deployed models. CEMA-Router casts batch routing as a multi-objective search that jointly minimises model-quality loss, monetary cost, energy and straggler-dominated batch completion time (equal weights of 0.25 on the four normalised terms).

The search uses a routing-specific memetic algorithm: largest-request-first, load-aware seeding, two-point crossover, and a probabilistic Lamarckian repair step (worst-gene reassignment plus 2-opt swaps) scored by an evaluator. Quality is predicted by retrieving similar historical prompts (all-MiniLM-L6-v2 embeddings with FAISS) rather than by trial inference. Settings include population 30, 20 generations, a one-second batching window and a maximum batch of 128. The system has a request manager, routing service and profiler, and runs both on a real deployment and in trace-driven simulation.

Evaluation has two stages. A controlled stage replays 36,497 RouterBench prompts over 11 LLMs mapped onto a simulated cloud-edge profile. A real deployment uses six nodes: an A100 40 GB cloud node running Qwen2.5-14B, edge nodes with two A40s (Phi-3.5-mini, Llama-3.1-8B) and two A30s (Qwen2.5-7B, Mistral-7B), and a remote V100 16 GB running SmolLM2-1.7B with measured TCP latency up to 197 ms; workloads are 300 GSM8K and 600 MMLU questions. Against the main comparator UniRoute, the weighted objective falls 86.3% on GSM8K (0.489 to 0.067) and 80.5% on MMLU (0.489 to 0.095), energy by 33.8% and 19.5%, and completion time by 27.1% and 30.1%.

## Summary (ZH)

CEMA-Router 来自莫纳什大学信息技术学院，解决的是：当可用节点在算力、能效、网络条件及所部署模型质量上各不相同时，如何为成批的 LLM 请求选择去向。作者指出，LLM 路由器通常按单条查询依据模型质量和 token 成本来决策，而云边调度器往往忽略各部署模型之间的质量差异。CEMA-Router 把批量路由建模为多目标搜索，联合最小化模型质量损失、金钱成本、能耗以及由最慢请求主导的批完成时间（四个归一化项各占 0.25 权重）。

搜索采用面向路由的模因算法：最长请求优先、感知负载的种群初始化、两点交叉，以及概率性的拉马克式修复步骤（最差基因重分配加 2-opt 交换），并由评估器打分。质量通过检索相似历史提示（all-MiniLM-L6-v2 嵌入加 FAISS）来预测，而不是做试推理。参数包括种群 30、20 代、1 秒批处理窗口、最大批 128。系统含请求管理器、路由服务和性能剖析器，既可真实部署运行，也可基于轨迹仿真。

评估分两阶段。受控阶段在模拟的云边配置上回放 36,497 条 RouterBench 提示，覆盖 11 个 LLM。真实部署有六个节点：运行 Qwen2.5-14B 的 A100 40 GB 云节点；边缘节点为两块 A40（Phi-3.5-mini、Llama-3.1-8B）和两块 A30（Qwen2.5-7B、Mistral-7B）；以及运行 SmolLM2-1.7B 的远端 V100 16 GB，实测 TCP 时延最高 197 ms；负载为 300 道 GSM8K 和 600 道 MMLU 题。相对主要对比方法 UniRoute，加权目标在 GSM8K 上下降 86.3%（0.489 降至 0.067），在 MMLU 上下降 80.5%（0.489 降至 0.095），能耗分别下降 33.8% 和 19.5%，完成时间分别下降 27.1% 和 30.1%。

## Key technical points (EN)

- Baselines: UniRoute (quality-cost router), Round Robin, Least Loaded, Cloud Only, Edge Only.
- The weighted objective is a configurable preference: CEMA-Router accepts somewhat higher raw quality loss than UniRoute in both stages (0.367 vs 0.336 on GSM8K).
- Self-hosted endpoints carry zero external API cost, so the cost term does not discriminate in the deployment results.
- Decision overhead is higher than UniRoute's and, for a 30-request MMLU batch, exceeds the one-second batching window in one table; the paper acknowledges overhead can offset savings for large batches.
- Some timing values differ between tables and the sample is small (5 batches in the controlled study, 10 runs per method in deployment).
- Stated future work: mobility, wireless variation, endpoint churn and online profile refresh; the radio link is not part of the evaluation.

## Key technical points (ZH)

- 对比基线：UniRoute（质量-成本路由器）、Round Robin、Least Loaded、仅云端、仅边缘。
- 加权目标是可配置的偏好：两个阶段中 CEMA-Router 的原始质量损失都略高于 UniRoute（GSM8K 上 0.367 对 0.336）。
- 自托管端点没有外部 API 费用，因此部署结果中成本项没有区分度。
- 决策开销高于 UniRoute；在一张表中，30 请求的 MMLU 批的决策时间超过 1 秒批处理窗口，论文承认大批量时开销可能抵消节省。
- 不同表之间部分耗时数值不一致，且样本量较小（受控研究 5 个批次，部署每种方法 10 次运行）。
- 论文列出的后续工作：移动性、无线波动、端点变动和在线剖析刷新；评估中不含无线链路。

## Why it matters / what's new (EN)

It is a worked example of compute placement across cloud and edge LLM endpoints that treats response quality, cost, energy and straggler time together rather than quality-cost alone. The testbed uses datacentre-class GPUs (A100, A40, A30, V100) as cloud and edge nodes, one of them remote, and the evaluation sets are small, so the reported reductions describe this setup and a configurable weighting rather than general cloud-edge deployments.

## Why it matters / what's new (ZH)

这是一个跨云端与边缘 LLM 端点做算力布局的具体案例，同时考虑响应质量、成本、能耗和最慢请求时间，而不只是质量-成本二元权衡。测试床以数据中心级 GPU（A100、A40、A30、V100）充当云与边缘节点（其中一个为远端节点），评估集规模也较小，因此报告的降幅描述的是此设置和可配置的权重，而非一般的云边部署。

## Images

*(No redistributable images for this entry.)*
