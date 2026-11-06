---
id: 2026-11-06_arxiv-care-fl-constraint-aware-client-selection-federated-mllm-lora-wireless-edge
date_published: 2026-11-04
date_found: 2026-11-06
technology: edge-ai
type: academic-paper
title_en: "CARE-FL: reinforcement-learning client selection for federated multimodal-LLM LoRA fine-tuning under per-round latency and bandwidth limits"
title_zh: "CARE-FL：在每轮时延与带宽限制下，用强化学习为联邦多模态大模型 LoRA 微调选择客户端"
url: "https://arxiv.org/abs/2611.06169"
source_quality: full
topics: [federated-learning, LoRA, multimodal-LLM, client-selection, bandwidth-constraint, latency-constraint]
topic_primary: edge-federated-learning
topics_secondary: [edge-orchestration]
novelty_score: 3
---

## Summary (EN)

CARE-FL (Constraint-Aware Reinforcement Learning for Efficient Federated Fine-Tuning) selects which clients take part in each round of federated LoRA fine-tuning of a multimodal LLM, when clients differ in data volume, label distribution, modality (text-only, image-only or image-text), compute and wireless conditions. The wireless link enters the formulation directly: client latency is computation time plus uplink time, with uplink rate b_k log2(1 + 10^(SNR/10)) and upload time equal to the LoRA payload divided by that rate; the server must keep round latency (set by the slowest selected client) below a maximum and total selected bandwidth below a budget. Link computed over: an emulated wireless edge (per-round SNR and CPU frequency vary; the paper does not give per-client bandwidth distributions); no real radio.

The selector is a deep Q-learning scheme with Q-value decomposition (the network outputs K client-level values instead of one value per C(K,n) subset), a modified Double DQN trained online, and a constraint-aware epsilon-greedy step that solves an integer program over summed Q-values under the latency, bandwidth and cardinality constraints. An adaptive aggregation step ("SlowFed") retries with smaller step sizes if validation accuracy drops by more than 3%. Experiments fine-tune MiniCPM-V 2.0 (2.8B parameters, LoRA r = 8, about 5.9M trainable parameters) on CrisisMMD with 50 clients (10 per round, 50 rounds, Dirichlet alpha 0.1) on two RTX 4090 GPUs. Unconstrained, CARE-FL reaches 82.56% final mean accuracy versus 80.01% (FLASH-RL), 79.02% (FAVOR) and 77.16% (FedAvg). Under a 15 Mbps / 3000 s limit it converges to about 80%, and under 10 Mbps / 1500 s to about 79%, still highest while staying within limits where baselines repeatedly violate them.

## Summary (ZH)

CARE-FL（面向高效联邦微调的约束感知强化学习）在多模态大模型的联邦 LoRA 微调中，决定每轮由哪些客户端参与；客户端在数据量、标签分布、模态（仅文本、仅图像或图文）、算力与无线条件上各不相同。无线链路直接进入问题建模：客户端时延等于计算时间加上行时间，上行速率为 b_k log2(1 + 10^(SNR/10))，上传时间为 LoRA 载荷除以该速率；服务器须使每轮时延（由最慢的被选客户端决定）低于上限，且被选客户端总带宽低于预算。所经链路：仿真的无线边缘（每轮 SNR 与 CPU 频率变化；论文未给出各客户端带宽分布），无真实无线电。

选择器是带 Q 值分解的深度 Q 学习（网络输出 K 个客户端级数值，而非每个 C(K,n) 子集一个数值），采用在线训练的改进 Double DQN，以及在时延、带宽与数量约束下对 Q 值之和求解整数规划的约束感知 epsilon-greedy 步骤。自适应聚合（"SlowFed"）在验证精度下降超过 3% 时用更小步长重试。实验在 CrisisMMD 上微调 MiniCPM-V 2.0（2.8B 参数，LoRA r = 8，约 5.9M 可训练参数），50 个客户端（每轮 10 个、共 50 轮、Dirichlet alpha 0.1），使用两块 RTX 4090。无约束时，CARE-FL 最终平均精度 82.56%，对比 FLASH-RL 80.01%、FAVOR 79.02%、FedAvg 77.16%。在 15 Mbps / 3000 s 限制下收敛到约 80%，在 10 Mbps / 1500 s 下约 79%，仍为最高，并保持在限制之内，而基线多次越限。

## Key technical points (EN)

- Formulation: choose exactly n clients per round to minimise global loss after T rounds, subject to latency <= tau-bar and total bandwidth <= B_total.
- Latency model: computation (data volume, cycles per unit, cores, frequency) plus uplink (LoRA payload over Shannon-type rate).
- Q-value decomposition cuts network outputs from C(K,n) to K; per-client rewards come from normalised L1 divergence between client and global LoRA parameters, mapped by whether validation accuracy improved, smoothed with lambda = 0.6.
- Setup: K = 50, n = 10, T = 50, one local epoch, AdamW 2x10^-5; constraint levels moderate (15 Mbps, 3000 s), stringent (10 Mbps, 1500 s), restrictive (5 Mbps, 1000 s).
- Baselines: FedAvg random selection, FAVOR (DQN, accuracy-oriented), FLASH-RL (system-aware RL).
- SlowFed mainly adds stability; final accuracy is similar with and without it.
- Gaps: per-client bandwidth and channel distributions are unspecified, so the emulation is not reproducible from the text; results come from three runs without confidence intervals beyond figure shading.

## Key technical points (ZH)

- 问题建模：每轮恰好选 n 个客户端，使 T 轮后的全局损失最小，约束为时延 <= tau-bar、总带宽 <= B_total。
- 时延模型：计算（数据量、单位周期数、核数、频率）加上行（LoRA 载荷除以香农型速率）。
- Q 值分解将网络输出从 C(K,n) 降到 K；各客户端奖励来自客户端与全局 LoRA 参数的归一化 L1 差异，按验证精度是否提升映射，并以 lambda = 0.6 平滑。
- 设置：K = 50、n = 10、T = 50、一个本地轮次、AdamW 2x10^-5；约束档位为中等（15 Mbps、3000 s）、严格（10 Mbps、1500 s）、苛刻（5 Mbps、1000 s）。
- 基线：FedAvg 随机选择、FAVOR（DQN、精度导向）、FLASH-RL（系统感知 RL）。
- SlowFed 主要增加稳定性；有无它最终精度相近。
- 不足：各客户端带宽与信道分布未说明，仅凭文本无法复现该仿真；结果来自三次运行，除图中阴影外无置信区间。

## Why it matters / what's new (EN)

The authors state that client selection for federated MLLM fine-tuning is hard because of heterogeneous multimodal data, dynamic system conditions and evolving client utility, and claim 3 to 5 percentage points higher accuracy than the compared baselines (2.55 pp over FLASH-RL in Table II). The wireless part is emulated and the model is a fixed 2.8B MLLM on one disaster-response dataset, so the result shows the selection method working under modelled bandwidth and latency budgets, not over a measured radio.

## Why it matters / what's new (ZH)

作者指出，联邦多模态大模型微调中的客户端选择因多模态数据异构、系统条件动态变化和客户端效用演化而困难，并称精度比所比较的基线高 3 至 5 个百分点（表 II 中较 FLASH-RL 高 2.55 个百分点）。无线部分为仿真，模型为固定的 2.8B 多模态大模型、数据集仅一个灾害响应数据集，因此结果说明的是该选择方法在建模的带宽与时延预算下有效，而非在实测无线电上。

## Images

*(No redistributable images for this entry.)*
