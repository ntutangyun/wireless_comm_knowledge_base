---
id: 2026-09-15_arxiv-carbon-aware-routing-edge-cloud-llm-function-calling
date_published: 2026-09-11
date_found: 2026-09-15
type: academic-paper
technology: edge-ai
title_en: "Carbon-Aware Routing for Function Calling in Edge-Cloud LLM Systems"
title_zh: "边缘-云协同大模型系统中面向函数调用的碳感知路由"
url: "https://arxiv.org/abs/2609.13559"
source_quality: full
topics: [compute-offloading, edge-orchestration, carbon-awareness, function-calling]
topic_primary: compute-offloading
topics_secondary: [edge-orchestration]
novelty_score: 3
---

## Summary (EN)

Researchers from the School of Electrical, Computer and Biomedical Engineering at Southern Illinois University Carbondale (Aikaterini Maria Panteleaki, Varatheepan Paramanayakam, Spyros Tragoudas, Iraklis Anagnostopoulos) present a carbon-aware routing framework for LLM function-calling workloads. The paper frames extending carbon-aware, power-efficient execution principles — already explored for DNN workloads via attention-based multi-DNN management and carbon-driven power capping — to LLM function calling as an "open challenge," and separately notes that existing LLM routers dispatch queries to balance accuracy against dollar cost but ignore the underlying hardware, power, and carbon intensity of the electricity grid powering each tier.

The framework defines three execution tiers of increasing capability and carbon cost: a tiny/micro tier (1-4B parameter models on an NVIDIA Jetson Orin Nano), a small tier (7-12B parameter models on a Jetson AGX Orin), and a large cloud tier (100B+ parameter models — the paper uses GPT-OSS-120B served on NVIDIA H100 SXM GPUs via Fireworks AI). A lightweight, non-parametric k-nearest-neighbour (k-NN) predictor — it requires no training itself, though it draws on a 20%-of-queries offline calibration split of queries encoded into a combined semantic-embedding and lexical-complexity space — estimates each incoming query's expected success probability, delay, and power draw at each of the two edge tiers (Tier 1 and Tier 2). The router then multiplies each edge tier's predicted delay and power by the real-time regional grid carbon intensity (pulled from the Electricity Maps API) to compute a per-query carbon-footprint estimate, and sends the query to the lowest-carbon edge tier whose predicted success probability meets a fixed accuracy threshold (θ = 0.9), falling back to the cloud tier only when no edge tier is predicted to qualify.

## Summary (ZH)

来自南伊利诺伊大学卡本代尔分校电气、计算机与生物医学工程学院的研究者（Aikaterini Maria Panteleaki、Varatheepan Paramanayakam、Spyros Tragoudas、Iraklis Anagnostopoulos）提出了一套面向大模型函数调用负载的碳感知路由框架。论文将「把此前已在 DNN 负载上探索过的碳感知、能效优化原则（基于注意力机制的多 DNN 管理、边缘服务器碳驱动功耗限制）推广到大模型函数调用」定位为一个「尚待解决的挑战」；论文另指出，现有大模型路由器在准确率与美元成本之间做权衡分发查询，却忽略了支撑各层级的底层硬件、功耗以及为其供电的电网碳强度。

该框架定义了三个能力与碳成本递增的执行层级：微型层级（1-4B 参数模型，运行于 NVIDIA Jetson Orin Nano）、小型层级（7-12B 参数模型，运行于 Jetson AGX Orin），以及大型云端层级（100B 以上参数模型——论文采用通过 Fireworks AI、运行于 NVIDIA H100 SXM GPU 上的 GPT-OSS-120B）。一个轻量级、非参数化的 k 近邻（k-NN）预测器——其本身无需训练，但依赖一个占查询总量 20% 的离线校准子集，该子集中的查询被编码至语义嵌入与词法复杂度联合空间——用以估计每条到来查询在两个边缘层级（层级一、层级二）上的预期成功概率、延迟与功耗。路由器随后将各边缘层级的预测延迟与功耗，乘以从 Electricity Maps API 获取的所在区域电网实时碳强度，得到每条查询的碳足迹估计，并将查询发送至预计成功概率达到固定准确率阈值（θ = 0.9）的、碳成本最低的边缘层级；仅当没有任何边缘层级预计能满足该阈值时，才回退至云端层级。

## Key technical points (EN)

- **Carbon reduction**: varies sharply by benchmark — on the harder GeoEngine benchmark the routed system cuts carbon by ≈1.39x on average vs. cloud-only; on the simpler BFCL V2 benchmark it cuts carbon by 6x on average, up to 8x for the Falcon3 family. (The paper's headline abstract/conclusion figure — "4x on average, up to 8x for simpler queries" — blends these two per-benchmark results into one number.)
- **Accuracy trade-off**: on the Berkeley Function-Calling Leaderboard V2 (BFCL V2) benchmark, the routed system achieves 89.1-95.7% success across model families, against 96.7% for cloud-only; on the GeoEngine geospatial sequential-function-calling benchmark, 55.3-59.6% routed vs. 60.9% cloud-only.
- **Latency**: the paper reports inference delay for the routed system stays "close to cloud-only levels," i.e., the accuracy and latency cost of routing away from the cloud tier is presented as small relative to the carbon saving, though the paper does not give a single headline latency-delta figure.
- **Models tested across tiers**: Qwen3 (1.7B, 8B), Gemma3 (4B, 12B), Llama3.1 (xLAM-1B, 8B), Falcon3 (3B, 7B).
- **Comparison baselines**: Cloud Only, Edge Only, and three prior LLM-routing systems (TensorOpera, HybridLLM, Less-is-More) — none of which factor in grid carbon intensity, which the paper positions as its point of novelty. Less-is-More, designed as a single-device optimization rather than a multi-tier router, is restricted to running on Tier 2 only in the comparison.
- **Success metric**: binary correctness against ground truth for function calls, with no partial credit, on an 80/20 evaluation/calibration data split.

## Key technical points (ZH)

- **碳减排**：因基准而显著不同——在难度更高的 GeoEngine 基准上，路由系统相较纯云端平均降低碳排放约 1.39 倍；在较简单的 BFCL V2 基准上，平均降低 6 倍，Falcon3 家族最高降低 8 倍。（论文摘要/结论处给出的「平均 4 倍、最高 8 倍」这一标题性数字，是将上述两个基准的结果合并表述所得。）
- **准确率权衡**：在 Berkeley Function-Calling Leaderboard V2（BFCL V2）基准上，路由系统在各模型家族间取得 89.1%-95.7% 的成功率，纯云端为 96.7%；在 GeoEngine 地理空间连续函数调用基准上，路由系统为 55.3%-59.6%，纯云端为 60.9%。
- **延迟**：论文称路由系统的推理延迟「接近纯云端水平」，即相较于将负载迁离云端所带来的准确率与延迟代价，相对于碳减排收益而言较小；但论文未给出单一的延迟差值核心数字。
- **各层级所测模型**：Qwen3（1.7B、8B）、Gemma3（4B、12B）、Llama3.1（xLAM-1B、8B）、Falcon3（3B、7B）。
- **对比基线**：纯云端、纯边缘，以及三种既有大模型路由系统（TensorOpera、HybridLLM、Less-is-More）——论文指出这些系统均未考虑电网碳强度，并以此作为本文创新点的定位。其中 Less-is-More 本质是单设备优化方案而非多层级路由器，在对比中仅被限定部署于层级二。
- **成功判定指标**：以函数调用结果与标准答案的二元正确性判定，不设部分得分，评测/校准数据划分比例为 80/20。

## Why it matters / what's new (EN)

This adds a carbon-cost axis to this KB's compute-offloading bin, which has so far mostly tracked routing policies optimized for accuracy, latency, cost, or GPU-memory constraints (e.g. this KB's EMMI and A-MADiff entries). Here the independent variable being routed on is not device capability but the carbon intensity of the electricity actually powering the device at the moment of inference, sourced from a live public grid-carbon API (Electricity Maps) rather than an assumed constant.

## Why it matters / what's new (ZH)

本文为本知识库「计算卸载」分区补充了「碳成本」这一新的路由考量维度——此前该分区主要收录围绕准确率、延迟、成本或 GPU 显存约束进行优化的路由策略（如本知识库已收录的 EMMI、A-MADiff 条目）。本文路由所依据的自变量并非设备算力本身，而是推理发生时刻、为该设备实际供电的电网碳强度，且该数据来自实时公开的电网碳数据 API（Electricity Maps），而非假设的常数。

## Images

![Carbon-aware routing framework architecture | 碳感知路由框架架构图](https://arxiv.org/html/2609.13559v1/overview.png)
