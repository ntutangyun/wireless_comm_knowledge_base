---
id: 2026-11-10_arxiv-synergy-credited-distributed-jscc-cooperative-sensing-payload-reduction
date_published: 2026-10-31
date_found: 2026-11-10
technology: edge-ai
type: academic-paper
title_en: "Synergy-aware symbol allocation for distributed semantic communication: rewarding complementary features across terminals cuts uplink payload symbols by 28-33% versus an uncredited gated baseline in cooperative sensing"
title_zh: "分布式语义通信中的协同感知符号分配：奖励跨终端互补特征，使协同感知上行载荷符号相对无加分门控基线减少 28%-33%"
url: "https://arxiv.org/abs/2611.00648"
source_quality: full
topics: [semantic-communication, task-oriented-communication, joint-source-channel-coding, cooperative-perception, uplink-budget, TDL-C]
topic_primary: task-oriented-communication
topics_secondary: [compute-offloading]
novelty_score: 3
---

## Summary (EN)

Several spatially separated terminals each see only part of a scene, and the full task meaning appears only when their observations are fused at the receiver. Under a tight uplink budget, existing task-oriented joint source-channel coding (JSCC) and distributed information-bottleneck methods judge the rate-distortion trade-off per terminal, which tends to undervalue features that matter only in combination and to prune them too early. The paper proposes a synergy-credited distributed JSCC framework: a differentiable, post-equalisation matrix Renyi synergy credit rewards complementary task evidence that survives the wireless channel, and its gradients train local symbol gates. At deployment the credit branch is removed and binary symbol masks are frozen, so each terminal encodes independently with no inter-terminal signalling and no extra inference overhead. Link computed over: simulated two-terminal orthogonal uplinks, AWGN at 0 dB for the main results and 3GPP TDL-C OFDM fading (zero-shot) for robustness; no over-the-air measurement. The authors are Fan Gao, Youzheng Wang, Zhijin Qin and Xiaoming Tao (Tsinghua University).

## Summary (ZH)

多个空间分离的终端各自只能观测场景的一部分，只有在接收端融合各终端观测后才能得到完整的任务语义。在紧张的上行预算下，现有任务导向联合信源信道编码（JSCC）和分布式信息瓶颈方法按单个终端评估率失真折中，容易低估只有组合起来才有意义的特征并过早剪除。论文提出"协同加分"的分布式 JSCC 框架：可微的、均衡后矩阵 Renyi 协同度作为奖励，鼓励在无线信道后仍存活的互补任务证据，其梯度用于训练本地符号门。部署时去掉加分分支并冻结二值符号掩码，各终端独立编码，无需终端间信令，也不增加推理开销。所经链路：仿真的两终端正交上行，主要结果为 0 dB AWGN，鲁棒性测试为 3GPP TDL-C OFDM 衰落（零样本）；无空口实测。作者为 Fan Gao、Youzheng Wang、Zhijin Qin 和 Xiaoming Tao（清华大学）。

## Key technical points (EN)

- Problem: distributed semantic communication for multimodal sensing and cooperative perception, with partial views per terminal and fusion at the receiver.
- Mechanism: a post-equalisation matrix Renyi synergy credit acts as a training-time surrogate that backpropagates to local symbol gates; the credit branch is dropped at deployment and masks are frozen.
- Deployment property (as stated): each terminal encodes independently, with no inter-terminal signalling or extra inference overhead.
- Reported results: recovers the analytical symbol-selection threshold on parity sources; reduces payload symbols by 28.4% on AV-MNIST and 32.9% on PAMAP2 against an uncredited gated baseline.
- Channel result: on AV-MNIST at 40 payload symbols, tested zero-shot under 3GPP TDL-C fading with comb-pilot LMMSE estimation, the gain over the uncredited gated control rises from 3.0 points at 9 dB to 6.2 points at -6 dB.
- Venue note: the authors' comments state submission to ICC 2027 (6 pages).

## Key technical points (ZH)

- 问题：面向多模态感知与协同感知的分布式语义通信，每个终端只有局部视角，在接收端融合。
- 机制：均衡后矩阵 Renyi 协同度作为训练期代理项，梯度反传到本地符号门；部署时去除加分分支并冻结掩码。
- 部署特性（原文表述）：各终端独立编码，无终端间信令，无额外推理开销。
- 报告结果：在奇偶校验源上恢复解析的符号选择阈值；相对无加分的门控基线，AV-MNIST 载荷符号减少 28.4%，PAMAP2 减少 32.9%。
- 信道结果：在 AV-MNIST、40 个载荷符号、未重训练的 3GPP TDL-C 衰落（梳状导频 LMMSE 估计）测试下，相对无加分门控对照的精度增益由 9 dB 时 3.0 个百分点升至 -6 dB 时 6.2 个百分点。
- 投稿信息：作者备注称投稿 ICC 2027（6 页）。

## Why it matters / what's new (EN)

The contribution is in which symbols each terminal spends its uplink budget on: the cooperating-inference objective decides which symbols are worth that budget. The results are simulated on public sensing datasets and a standard fading model, so the percentages should be read as the authors' simulation figures.

## Why it matters / what's new (ZH)

论文的贡献在于"发送什么"而非"如何调制"：协同推理目标决定哪些符号值得占用上行预算。结果来自公开感知数据集和标准衰落模型的仿真，百分比应视为作者的仿真数字。

## Images

*(No redistributable images for this entry.)*
