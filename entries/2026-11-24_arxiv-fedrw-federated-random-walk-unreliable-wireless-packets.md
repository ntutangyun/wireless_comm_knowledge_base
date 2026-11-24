---
id: 2026-11-24_arxiv-fedrw-federated-random-walk-unreliable-wireless-packets
date_published: 2026-09-13
date_found: 2026-11-24
technology: edge-ai
type: academic-paper
title_en: "Joint Optimization for Federated Learning and Transmission over Unreliable Wireless Networks with Heterogeneous Data (FedRW, simulated wireless links)"
title_zh: "面向异构数据与不可靠无线网络的联邦学习与传输联合优化（FedRW，仿真无线链路）"
url: "https://arxiv.org/abs/2609.14246"
source_quality: full
topics: [federated-learning, random-walk, packet-retransmission, non-IID, wireless-reliability]
topic_primary: edge-federated-learning
topics_secondary: [edge-orchestration]
novelty_score: 3
---

## Summary (EN)

The paper addresses two problems of wireless federated learning (FL) together: client drift caused by non-IID data and model updates lost to transmission errors on unreliable links. It proposes FedRW (federated random walk averaging), a variant of FedAvg in which several chains run in parallel, each walking a model along a path of clients (updating at every hop) and sending its result to the server for unweighted aggregation. Model parameters travel in packets with retransmission support, so a packet in error is retransmitted rather than the whole model being discarded.

Because the delay and reliability of each hop affect training, the authors formulate a joint problem over learning, random-walk path selection and transmission parameters (packet size and maximum number of retransmissions), minimising training loss under delay constraints. They derive an upper bound on the expected convergence of FedRW over unreliable wireless networks, and propose a distributed solution in which the server or the clients tune packet size and retransmission limit locally and pick the next hop with a resilience-aware beam search with dynamic pruning.

Link: simulated. 100 clients are placed uniformly in a circular area of 500 m radius around the server, with links between nodes drawn as a directed Bernoulli random graph (connection probability 0.5). Learning runs on MNIST, Fashion-MNIST, CIFAR-10 and CIFAR-100.

## Summary (ZH)

论文把无线联邦学习（FL）的两个问题放在一起处理：非独立同分布（non-IID）数据引起的客户端漂移，以及不可靠链路上传输错误导致的模型更新丢失。论文提出 FedRW（联邦随机游走平均），它是 FedAvg 的变体：多条链并行运行，每条链让模型沿客户端路径逐跳更新，并把结果发送给服务器做无加权聚合。模型参数以分组形式传输并支持重传，因此出错的分组会被重传，而不是整个模型被丢弃。

由于每一跳的时延和可靠性影响训练，作者建立了学习、随机游走路径选择与传输参数（分组大小和最大重传次数）的联合问题，在时延约束下最小化训练损失。论文推导了 FedRW 在不可靠无线网络上的期望收敛上界，并给出一种分布式解法：服务器或客户端在本地调整分组大小与重传上限，并用具备韧性感知的、带动态剪枝的束搜索选择下一跳。

所经链路：仿真。100 个客户端均匀分布在以服务器为圆心、半径 500 m 的圆形区域内，节点间链路按有向伯努利随机图生成（连接概率 0.5）。学习任务为 MNIST、Fashion-MNIST、CIFAR-10 与 CIFAR-100。

## Key technical points (EN)

- FedRW versus FedAvg under strong non-IID data: on MNIST the final accuracy improves by 8.72% (mixed non-IID setting) and 2.26% (Dirichlet non-IID setting) at the same cumulative communication overhead; on Fashion-MNIST by about 9%; on CIFAR-10 and CIFAR-100 by 2.49% and 4.97%, although FedRW converges more slowly than FedAvg in the early rounds there.
- Against FedProx and FedNova in the Dirichlet non-IID setting, the paper reports FedRW reaching 92.68% (MNIST) and 61.75% (CIFAR-100).
- Joint path selection and transmission-parameter optimisation, compared with baselines that use an ideal error-free channel (Ideal FedRW), random transmission parameters (RandParam) or greedy next-hop choice (Greedy-RW): on MNIST the proposed algorithm gains an average accuracy of 2.78% over Greedy-RW and 4.67% over RandParam and matches Ideal FedRW. On CIFAR-10 and CIFAR-100, RandParam trains ineffectively because random parameters make most links violate the delay constraint.
- Relaxing the constraint that limits how often a client can join chains (letting highly reliable clients take part in multiple chains) lowers final accuracy by 11.3% in the reported case.
- Intra-chain data diversity matters: fully heterogeneous chains give the best accuracy and fastest convergence, homogeneous chains degrade performance.

## Key technical points (ZH)

- 强 non-IID 数据下 FedRW 与 FedAvg 的对比：在相同累计通信开销下，MNIST 最终精度分别提升 8.72%（混合 non-IID）和 2.26%（Dirichlet non-IID）；Fashion-MNIST 约提升 9%；CIFAR-10 和 CIFAR-100 分别提升 2.49% 与 4.97%，但这两个数据集上 FedRW 在早期轮次收敛慢于 FedAvg。
- 在 Dirichlet non-IID 设置下与 FedProx、FedNova 比较，论文报告 FedRW 在 MNIST 上达到 92.68%，在 CIFAR-100 上达到 61.75%。
- 路径选择与传输参数联合优化，对比理想无差错信道的 Ideal FedRW、随机传输参数的 RandParam 和贪心选下一跳的 Greedy-RW：在 MNIST 上平均精度比 Greedy-RW 高 2.78%，比 RandParam 高 4.67%，并与 Ideal FedRW 相当。在 CIFAR-10 和 CIFAR-100 上，RandParam 训练无效，因为随机参数使多数链路违反时延约束。
- 放宽限制客户端参与多条链次数的约束（允许高可靠性客户端加入多条链），在所报告的情形下最终精度下降 11.3%。
- 链内数据多样性很重要：完全异构的链精度最高、收敛最快，同质链性能下降。

## Why it matters / what's new (EN)

The paper keeps the radio explicit inside the learning design: packet size and retransmission limits are optimisation variables alongside the choice of which client the model visits next. The results come from a simulated geometry and graph with standard image benchmarks, so they show the behaviour of the algorithm under a modelled unreliable link, not over a real radio.

## Why it matters / what's new (ZH)

论文把无线链路显式纳入学习设计：分组大小和重传上限与"模型下一步访问哪个客户端"一起成为优化变量。结果来自仿真的几何与图结构及标准图像基准，展示的是算法在建模的不可靠链路下的行为，而非真实无线电上的表现。
