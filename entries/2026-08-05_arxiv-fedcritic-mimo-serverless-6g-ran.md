---
id: 2026-08-05_arxiv-fedcritic-mimo-serverless-6g-ran
date_published: 2026-08-04
date_found: 2026-08-05
type: academic-paper
technology: cellular
title_en: "FedCritic-MIMO: Communication-Efficient Serverless Federated Critic Learning for Massive-MIMO Resource Control in Open and Disaggregated 6G RANs"
title_zh: "FedCritic-MIMO：面向开放解耦 6G RAN 大规模 MIMO 资源控制的通信高效无服务器联邦 Critic 学习"
url: "https://arxiv.org/abs/2608.03852"
source_quality: full
topics: [6G, massive MIMO, federated learning, MARL, O-RAN]
topic_primary: cellular-massive-mimo
topics_secondary: [cellular-ai, open-ran]
novelty_score: 2
---

## Summary (EN)

Farajzadeh and Erol-Kantarci (University of Ottawa; arXiv 2608.03852, submitted 2026-08-04, submitted to IEEE) extend their earlier FedCritic framework (multi-cell OFDMA scheduling/power control, in this KB as 2026-05-25_arxiv-fedcritic-serverless-federated-ofdma) to full massive-MIMO resource control: joint user scheduling, per-stream power allocation, structured beamforming and inter-cell interference management in reuse-1 massive-MIMO OFDMA, with long-term per-user QoS constraints. The setting is explicitly open/disaggregated 6G RAN: independently deployed cell controllers that cannot rely on centralized trajectory collection, unrestricted model sharing, or a parameter server.

Each base station keeps a local actor and a personalized critic head; only a predefined shared critic subnetwork is exchanged peer-to-peer over an interference-aware coordination graph. Three mechanisms control the communication cost: (1) wireless-aware event triggering — a utility score combining critic parameter drift, queue urgency (accumulated rate deficits) and incoming interference intensity fires an exchange only when it crosses an adaptive threshold; (2) adaptive layer-wise top-k sparsification with error feedback; (3) balanced interference-aware fusion using symmetric edge weights that prioritize strongly coupled neighbours while preserving a doubly stochastic mixing matrix.

On a 7-BS network (8 UEs/BS, 32 antennas, 16 subcarriers, up to 3 spatial streams, temporally correlated Rayleigh fading, 6 seeds), FedCritic-MIMO reaches the highest held-out throughput among learning methods, ~78% QoS satisfaction vs 67% for independent learning, validation reward ~56.3 vs 50.3 for periodic full exchange — while cutting critic-communication overhead by ~76%. A convergence analysis (O(T^-1/2) + O(log T / T) stationarity rate) explicitly models the communication-induced tracking error of compressed peer-to-peer critic updates.

## Summary (ZH)

渥太华大学的 Farajzadeh 与 Erol-Kantarci（arXiv 2608.03852，2026-08-04 提交，已投 IEEE）将其早期 FedCritic 框架（多小区 OFDMA 调度/功控，见本 KB 条目 2026-05-25_arxiv-fedcritic-serverless-federated-ofdma）扩展到完整的大规模 MIMO 资源控制：复用因子 1 的大规模 MIMO OFDMA 下的联合用户调度、逐流功率分配、结构化波束赋形与小区间干扰管理，并带长期逐用户 QoS 约束。场景明确设定为开放解耦 6G RAN：独立部署的小区控制器无法依赖集中式轨迹采集、无限制模型共享或参数服务器。

每个基站保留本地 actor 和个性化 critic 头；仅预定义的共享 critic 子网络在干扰感知协调图上点对点交换。三个机制控制通信开销：（1）无线感知事件触发——由 critic 参数漂移、队列紧迫度（累积速率欠账）和入射干扰强度组合成效用分数，超过自适应阈值才触发交换；（2）带误差反馈的自适应逐层 top-k 稀疏化；（3）平衡的干扰感知融合，对称边权优先强耦合邻居并保持双随机混合矩阵性质。

在 7 基站网络（每基站 8 UE、32 天线、16 子载波、最多 3 空间流、时间相关瑞利衰落、6 随机种子）上，FedCritic-MIMO 在学习方法中取得最高保留集吞吐，QoS 满足率约 78%（独立学习为 67%），验证奖励约 56.3（周期性全量交换为 50.3），同时将 critic 通信开销削减约 76%。收敛性分析（O(T^-1/2) + O(log T / T) 平稳率）显式建模了压缩点对点 critic 更新引入的跟踪误差。

## Key technical points (EN)

- Serverless federation: no parameter server, no centralized trainer — only a shared critic subnetwork exchanged P2P over an interference-aware coordination graph (radius-2 in eval).
- Wireless-aware event triggering ties *when to communicate* to radio state: critic innovation + queue urgency + interference intensity vs an adaptive threshold.
- Adaptive layer-wise top-k sparsification with error feedback: ~76% reduction in critic-communication overhead vs periodic full exchange.
- Interference-aware fusion weights are symmetric and doubly stochastic — consensus guarantees survive compression (Theorem 1: O(T^-1/2) + O(log T / T)).
- Held-out results: highest throughput among learning baselines, ~78% QoS satisfaction (vs 67% independent), reward 56.3 vs 50.3 next-best, lower interference cost per delivered bit.
- Extends FedCritic (OFDMA) with multiuser MIMO scheduling, per-stream power, structured beamforming, dynamic inter-cell interference — the enlarged state-action space is what motivates selective rather than periodic critic exchange.

## Key technical points (ZH)

- 无服务器联邦：无参数服务器、无集中训练器——仅共享 critic 子网络在干扰感知协调图上点对点交换（评估中半径 2）。
- 无线感知事件触发将"何时通信"与无线状态绑定：critic 参数创新 + 队列紧迫度 + 干扰强度对比自适应阈值。
- 带误差反馈的自适应逐层 top-k 稀疏化：critic 通信开销相比周期性全量交换削减约 76%。
- 干扰感知融合权重对称且双随机——共识保证在压缩下仍成立（定理 1：O(T^-1/2) + O(log T / T)）。
- 保留集结果：学习基线中最高吞吐，QoS 满足率约 78%（独立学习 67%），奖励 56.3 对次优 50.3，单位交付比特干扰代价更低。
- 相比 FedCritic（OFDMA）新增多用户 MIMO 调度、逐流功率、结构化波束赋形、动态小区间干扰——状态-动作空间的扩大正是从周期交换转向选择性交换的动因。

## Why it matters / what's new (EN)

Direct follow-up to 2026-05-25_arxiv-fedcritic-serverless-federated-ofdma: the Ottawa group is building out a serverless-federated-MARL line for disaggregated RAN control, and this instalment moves it from OFDMA scheduling to the massive-MIMO beamforming/power/scheduling stack. The novel increment is the *wireless-aware* event trigger — communication decisions driven by queue deficits and interference coupling rather than pure parameter drift — plus consensus guarantees under compressed P2P exchange. Fits the KB's growing distributed-training-for-RAN thread (FedCritic, 2026-08-05 FedCritic-MIMO, and the AI-RAN control entries under open-ran). Incremental rather than category-opening, hence novelty 2.

## Why it matters / what's new (ZH)

本文是 2026-05-25_arxiv-fedcritic-serverless-federated-ofdma 的直接后续：渥太华团队正在为解耦 RAN 控制构建无服务器联邦 MARL 路线，本篇将其从 OFDMA 调度推进到大规模 MIMO 波束赋形/功率/调度全栈。增量创新在于"无线感知"事件触发——通信决策由队列欠账和干扰耦合驱动，而非单纯参数漂移——以及压缩点对点交换下的共识保证。契合 KB 中不断增长的 RAN 分布式训练线索（FedCritic、本条目、以及 open-ran 主题下的 AI-RAN 控制条目）。属于渐进式而非开辟新类别的工作，故新颖度评 2。

## Images

![Validation reward: FedCritic-MIMO vs periodic full exchange and independent learning | 验证奖励：FedCritic-MIMO 对比周期性全量交换与独立学习](https://arxiv.org/html/2608.03852v1/x1.png)
![Critic-communication overhead comparison (~76% reduction) | Critic 通信开销对比（约削减 76%）](https://arxiv.org/html/2608.03852v1/x5.png)
