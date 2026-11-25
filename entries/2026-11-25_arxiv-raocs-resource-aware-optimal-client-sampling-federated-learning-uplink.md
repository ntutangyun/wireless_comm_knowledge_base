---
id: 2026-11-25_arxiv-raocs-resource-aware-optimal-client-sampling-federated-learning-uplink
date_published: 2026-11-21
date_found: 2026-11-25
technology: edge-ai
type: academic-paper
title_en: "Joint Client Scheduling and Resource Allocation for Optimal Federated Learning over Wireless Networks (RAOCS, simulated cellular uplink)"
title_zh: "无线网络联邦学习的联合客户端调度与资源分配（RAOCS，仿真蜂窝上行链路）"
url: "https://arxiv.org/abs/2611.28782"
source_quality: full
topics: [federated-learning, client-sampling, uplink-resource-blocks, water-filling, energy-constraint]
topic_primary: edge-federated-learning
topics_secondary: [edge-orchestration]
novelty_score: 3
---

## Summary (EN)

The paper (Avignon Universite, CERI/LIA; code released on GitHub) considers federated learning with partial client participation in cross-device wireless systems with limited uplink resources, heterogeneous channels, energy constraints and upload deadlines. Partial participation adds sampling variance. The authors state that existing optimal client sampling uses simplified client-count budgets, while wireless-aware scheduling does not directly optimise sampling variance. They propose resource-aware optimal client sampling (RAOCS), a variance-minimising scheduler under uplink resource-block, round-deadline, update-information and energy constraints.

System model: the server samples clients with probability p and aggregates with inverse-probability weighting (unbiased); expected resource-block usage must stay within a budget B; a selected client must upload its update within the round deadline, which fixes a minimum number of resource blocks per client from its per-block rate (Shannon-style, from path loss, shadowing and Rayleigh fading); computation and uplink energy cap each client's probability. The problem is convex and has a closed-form capped water-filling solution (Theorem 1) in which probabilities scale with update norm over the square root of the client's minimum resource-block need. A strict-budget variant, RAOCS-Greedy, ranks clients by the same score.

Link: a simulated cellular-style uplink. Clients move in a circular cell with path loss, shadowing and Rayleigh fading; the paper does not give numeric values for these parameters.

## Summary (ZH)

论文（阿维尼翁大学 CERI/LIA；代码已发布于 GitHub）研究跨设备无线系统中的部分客户端参与联邦学习，其上行资源有限、信道异质、受能量约束并有上传截止时间。部分参与会带来采样方差。作者指出，现有最优客户端采样采用简化的客户端数量预算，而感知无线的调度方法并不直接优化采样方差。他们提出资源感知最优客户端采样（RAOCS），在上行资源块、轮截止时间、更新信息和能量约束下最小化方差。

系统模型：服务器按概率 p 采样客户端，并用逆概率加权聚合（无偏）；期望的资源块使用量须不超过预算 B；被选中的客户端须在轮截止时间内上传更新，这由其每资源块速率（香农型，源自路径损耗、阴影衰落和瑞利衰落）决定每个客户端所需的最少资源块数；计算与上行能量限制各客户端的采样概率上限。该问题为凸问题，有封顶注水型闭式解（定理 1），概率与更新范数除以客户端最少资源块需求的平方根成正比。严格预算的变体 RAOCS-Greedy 按同一得分对客户端排序。

所经链路：仿真的蜂窝式上行链路。客户端在圆形小区内移动，信道含路径损耗、阴影衰落和瑞利衰落；论文未给出这些参数的具体数值。

## Key technical points (EN)

- Setup: 50 clients, Dirichlet non-IID partition (alpha 0.2), 16 local SGD steps; Fashion-MNIST with a fully connected network, CIFAR-10 with ResNet-8, CIFAR-100 with ResNet-20; (resource blocks, deadline) set to (5, 5), (5, 1.5) and (7, 4) respectively; 500 rounds for Fashion-MNIST and 800 for the others.
- Baselines: FedAvg with full participation, UCS (10% uniform), OCS (5 clients, matched to RAOCS's average participation), RA-Greedy and RAOCS-Greedy.
- Accuracy is close to OCS: 80.95% vs 80.62% (CIFAR-10), 40.10% vs 39.53% (CIFAR-100), 80.15% vs 79.51% (Fashion-MNIST).
- Upload time per round: the text reports OCS at 377 s and RAOCS at 1.5 s on CIFAR-10, and 1094 s versus 4 s on CIFAR-100. The abstract claims a reduction by more than a factor of 252 in average upload time per iteration.
- The energy caps reduce energy by 2.1% to 18.8% depending on the refresh setting and dataset.

## Key technical points (ZH)

- 设置：50 个客户端，Dirichlet 非独立同分布划分（alpha 0.2），16 步本地 SGD；Fashion-MNIST 用全连接网络，CIFAR-10 用 ResNet-8，CIFAR-100 用 ResNet-20；（资源块，截止时间）分别为 (5, 5)、(5, 1.5) 和 (7, 4)；Fashion-MNIST 500 轮，其余 800 轮。
- 基线：全员参与的 FedAvg、UCS（10% 均匀采样）、OCS（5 个客户端，与 RAOCS 平均参与数匹配）、RA-Greedy 和 RAOCS-Greedy。
- 精度与 OCS 相当：80.95% 对 80.62%（CIFAR-10）、40.10% 对 39.53%（CIFAR-100）、80.15% 对 79.51%（Fashion-MNIST）。
- 每轮上传时间：正文给出 CIFAR-10 上 OCS 为 377 s、RAOCS 为 1.5 s，CIFAR-100 上为 1094 s 对 4 s。摘要称平均每次迭代上传时间降低超过 252 倍。
- 能量上限使能耗降低 2.1% 至 18.8%，取决于刷新设置与数据集。

## Why it matters / what's new (EN)

The work puts the radio budget (resource blocks, deadline, energy) directly into the client-sampling objective instead of a client-count budget. The channel is simulated and the paper's text gives CIFAR-10 upload times of 377 s (OCS) versus 1.5 s (RAOCS), about 251x when computed from those values (CIFAR-100: 1094 s vs 4 s, about 274x; Fashion-MNIST table: 1318 s vs 5 s, about 264x), so the reduction should be read as a simulated-uplink result.

## Why it matters / what's new (ZH)

该工作把无线电预算（资源块、截止时间、能量）直接放入客户端采样目标，而不是客户端数量预算。信道为仿真，且按论文正文数值计算，CIFAR-10 上传时间为 377 s 对 1.5 s（约 251 倍），CIFAR-100 为 1094 s 对 4 s（约 274 倍），Fashion-MNIST 表中为 1318 s 对 5 s（约 264 倍），因此该降幅应视为仿真上行链路下的结果。
