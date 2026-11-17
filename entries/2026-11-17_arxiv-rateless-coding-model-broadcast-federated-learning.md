---
id: 2026-11-17_arxiv-rateless-coding-model-broadcast-federated-learning
date_published: 2026-11-11
date_found: 2026-11-17
type: academic-paper
technology: edge-ai
title_en: "Rateless Coding for Efficient Model Broadcast in Federated Learning"
title_zh: "联邦学习中面向高效模型广播的无速率编码"
url: "https://arxiv.org/abs/2611.15499"
source_quality: full
topics: [federated learning, model broadcast, rateless coding, Raptor codes, joint source-channel coding, downlink]
topic_primary: edge-federated-learning
novelty_score: 2
---

## Summary (EN)

Most work on wireless federated learning (FL) targets uplink aggregation; this paper addresses the downlink, where the server must broadcast a large global model to clients over unreliable, heterogeneous channels. The authors propose a joint source-channel coding scheme built on rateless (Raptor-type) codes. They derive an FL convergence analysis under noisy downlink conditions to guide the rateless code and quantization design, and exploit the fact that FL iterations give the client a useful prior: the client's own local model serves as conditional prior information to help decode the broadcast, reducing transmission cost.

Evidence is simulation only: ResNet-18 on CIFAR-10 with IID and non-IID (about 70% of a client's samples from one primary class) partitions, with K=3 clients, R=10 rounds, quantization level Q=14 and at most 2 retransmissions. The authors report that the scheme substantially improves downlink broadcast efficiency while keeping comparable training accuracy; the reported figures are given in the last section.

## Summary (ZH)

无线联邦学习（FL）的研究多关注上行聚合；本文处理下行，即服务器需要经由不可靠且异构的信道向客户端广播大型全局模型。作者提出基于无速率（Raptor 类）码的联合信源信道编码方案。他们推导了噪声下行条件下的 FL 收敛性分析，用以指导无速率码与量化设计，并利用 FL 迭代给客户端带来的先验：把客户端本地模型作为条件先验信息辅助广播解码，从而降低传输开销。

证据仅为仿真：在 CIFAR-10 上训练 ResNet-18，含独立同分布与非独立同分布（客户端约 70% 样本来自一个主类别）划分，K=3 个客户端、R=10 轮、量化级别 Q=14、最多 2 次重传。作者称该方案显著提升下行广播效率，同时保持相当的训练精度；具体数字见最后一节。

## Key technical points (EN)

- Link: simulated noisy wireless broadcast downlink with heterogeneous client channels; no over-the-air measurement.
- Rateless joint source-channel coding with convergence-informed quantization (bitplane-based, Q=14).
- Client local models act as conditional prior (side information) in decoding.
- Small-scale evaluation: 3 clients (bandwidth also compared at K=5, 7), 10 rounds, ResNet-18/CIFAR-10.

## Key technical points (ZH)

- 链路：仿真的带噪无线广播下行，客户端信道异构；无空口实测。
- 无速率联合信源信道编码，量化设计由收敛性分析指导（基于比特平面，Q=14）。
- 客户端本地模型在解码中充当条件先验（边信息）。
- 小规模评估：3 个客户端（带宽另比较了 K=5、7）、10 轮、ResNet-18/CIFAR-10。

## Why it matters / what's new (EN)

The downlink model broadcast is the less-studied half of wireless FL, and the paper ties the code design to FL convergence rather than treating the broadcast as plain data delivery. Modest novelty: simulated link and small scale; at K=3 the paper reports 67.4 total channel uses per weight over 10 rounds versus 100.5 for a Raptor baseline without the conditional prior and 225-250 for LDPC-with-retransmission baselines, at comparable accuracy.

## Why it matters / what's new (ZH)

下行模型广播是无线 FL 中研究较少的一半，论文将编码设计与 FL 收敛性挂钩，而非把广播当作普通数据传输。新颖度有限：链路为仿真、规模小；论文报告 K=3 时 10 轮总计每权重 67.4 次信道使用，而不含条件先验的 Raptor 基线为 100.5，带重传的 LDPC 类基线为 225-250，训练精度相当。
