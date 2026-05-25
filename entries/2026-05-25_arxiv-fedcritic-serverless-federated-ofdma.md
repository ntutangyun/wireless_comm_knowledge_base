---
id: 2026-05-25_arxiv-fedcritic-serverless-federated-ofdma
date_published: 2026-05-20
date_found: 2026-05-25
type: academic-paper
technology: cellular
title_en: "FedCritic: Serverless Federated Critic Learning-based Resource Allocation for Multi-Cell OFDMA in 6G"
title_zh: "FedCritic：面向 6G 多小区 OFDMA 的无服务器联邦 Critic 学习资源分配"
url: "https://arxiv.org/abs/2605.21418"
source_quality: full
topics: [6G, cellular-ai, federated-RL, OFDMA, multi-cell, resource-allocation, PPO, gossip]
topic_primary: cellular-ai
topics_secondary: [6g-vision]
novelty_score: 3
---

## Summary (EN)

FedCritic tackles a coordination problem in ultra-dense reuse-1 6G networks: when every base station reuses the whole band, inter-cell interference tightly couples neighbouring BSs' scheduling and power decisions, yet a central coordinator that aggregates everyone's experience does not scale. The paper proposes a fully decentralised multi-agent reinforcement-learning scheme in which each BS runs a local PPO actor that decides per-subcarrier muting, UE selection, and discrete power level, plus a local critic that estimates returns. The novel twist is "serverless" federation: instead of a central server averaging policies, neighbouring critics are mixed by gossip every Kg learning rounds, so each BS only ever exchanges critic parameters (and lightweight EMA-tracked neighbour-occupancy statistics) with its one-hop neighbours.

The authors prove (Theorem 1) that periodic gossip mixing drives the critics toward consensus in mean square without any centralised training, which is what stabilises value estimates under the strong interference coupling of reuse-1. Long-term per-user QoS is enforced with Lyapunov-style virtual queues that accumulate rate shortfalls whenever a UE misses its minimum-rate target (R_min = 2.0 Mbps), feeding those deficits into the reward alongside instantaneous sum-rate and an interference-leakage penalty. The control space is deliberately mixed — discrete subcarrier scheduling/power levels {0.05, 0.15, 0.35, 0.60, 1.0} together with continuous-style advantage estimation (GAE, λ=0.95).

Evaluated on 7 base stations, 32 subcarriers, and 8 UEs per cell over 250 PPO updates, FedCritic reports higher network-wide average sum-rate and better fairness than centralised-training/decentralised-execution (CTDE) baselines, a substantially higher mean SINR (the CTDE baselines sit in a much lower-SINR regime), and a drastically reduced neighbour-collision rate. Because only critic parameters cross the air — not full policies or trajectories — the communication overhead is far lighter than server-based federated RL.

## Summary (ZH)

FedCritic 针对超密集 reuse-1 6G 网络中的协调难题：当每个基站都复用整个频段时，小区间干扰使相邻基站的调度与功率决策强耦合，而一个汇聚所有经验的中央协调器又无法扩展。论文提出一种完全去中心化的多智能体强化学习方案：每个基站运行本地 PPO actor，决定逐子载波静默、UE 选择与离散功率档位，并配一个本地 critic 估计回报。新意在于「无服务器」联邦——不靠中央服务器平均策略，而是每隔 Kg 个学习轮次通过 gossip 混合相邻 critic，使每个基站仅与一跳邻居交换 critic 参数（及以 EMA 跟踪的邻居占用统计）。

作者证明（定理 1）：周期性 gossip 混合可在无任何集中训练的情况下，使各 critic 在均方意义下趋于共识，这正是在 reuse-1 强干扰耦合下稳定价值估计的关键。长期每用户 QoS 通过 Lyapunov 式虚拟队列保证——当某 UE 未达最小速率目标（R_min = 2.0 Mbps）时累积速率亏欠，并将该亏欠连同瞬时和速率与干扰泄漏惩罚一起送入奖励。控制空间刻意混合——离散子载波调度 / 功率档位 {0.05, 0.15, 0.35, 0.60, 1.0} 配合 GAE（λ=0.95）的优势估计。

在 7 基站、32 子载波、每小区 8 UE、250 次 PPO 更新的设置下，FedCritic 报告了高于「集中训练 / 分散执行」（CTDE）基线的全网平均和速率与更优公平性、显著更高的平均 SINR（CTDE 基线处于明显更低的 SINR 区间），以及大幅降低的邻居碰撞率。由于空口只传 critic 参数（而非完整策略或轨迹），其通信开销远低于基于服务器的联邦 RL。

## Key technical points (EN)

- **Serverless gossip critic federation:** critics mixed with one-hop neighbours every Kg rounds via ψ_n ← Σ_{j∈N(n)∪{n}} w_nj·ψ_j; Theorem 1 proves mean-square consensus without a central server.
- **Mixed action space:** per-subcarrier muting + UE selection + discrete power {0.05…1.0}, optimised with PPO + GAE (λ=0.95).
- **Lyapunov virtual queues** enforce long-term per-UE QoS (R_min = 2.0 Mbps); deficits enter the reward with sum-rate and interference-leakage terms.
- **Baselines:** CTDE, CTDE+VQ, FedActor (actor mixing), and GREEDY/QoS heuristics — FedCritic beats all on sum-rate, fairness, SINR, and collision rate.
- **Low overhead:** only critic params + EMA occupancy stats exchanged; Kg=1 in reuse-1 regime; H×K = 128×32 samples/round per BS.
- Setup: 7 BS, 32 subcarriers, 8 UE/cell, 250 PPO updates.

## Key technical points (ZH)

- **无服务器 gossip critic 联邦：** 每 Kg 轮通过 ψ_n ← Σ_{j∈N(n)∪{n}} w_nj·ψ_j 与一跳邻居混合 critic；定理 1 证明无中央服务器下的均方共识。
- **混合动作空间：** 逐子载波静默 + UE 选择 + 离散功率 {0.05…1.0}，用 PPO + GAE（λ=0.95）优化。
- **Lyapunov 虚拟队列** 保证长期每用户 QoS（R_min = 2.0 Mbps）；亏欠连同和速率与干扰泄漏项进入奖励。
- **基线：** CTDE、CTDE+VQ、FedActor（actor 混合）、GREEDY/QoS 启发式——FedCritic 在和速率、公平性、SINR、碰撞率上全面胜出。
- **低开销：** 仅交换 critic 参数 + EMA 占用统计；reuse-1 下 Kg=1；每基站每轮 H×K = 128×32 个样本。
- 设置：7 基站、32 子载波、每小区 8 UE、250 次 PPO 更新。

## Why it matters / what's new (EN)

The KB already holds several AI-RAN entries — MORPH (multi-env RL for slice-aware PRB scheduling), ILCP (post-handover latent-context transport), and the T-Mobile/Ericsson AI-native scheduler. FedCritic adds a distinct architectural point on that axis: it removes the central coordinator entirely, federating only the *critic* by gossip rather than the policy, and pairs it with explicit Lyapunov QoS queues for mixed discrete scheduling+power control. The "federate the critic, not the actor" choice is the contribution — it keeps decentralised execution while still stabilising value learning under reuse-1 interference, and it is empirically shown to beat both centralised CTDE and actor-federation (FedActor) baselines. For a 6G RAN moving toward AI-native, distributed control, this is a concrete, low-communication-overhead coordination primitive worth tracking.

## Why it matters / what's new (ZH)

KB 已收录多条 AI-RAN 条目——MORPH（面向切片感知 PRB 调度的多环境 RL）、ILCP（切换后潜在上下文传输）以及 T-Mobile/Ericsson 的 AI 原生调度器。FedCritic 在这一轴线上补充了一个不同的架构点：它彻底去掉中央协调器，仅通过 gossip 联邦 *critic*（而非策略），并配以显式 Lyapunov QoS 队列来做离散调度+功率的混合控制。「联邦 critic 而非 actor」正是其贡献——既保持分散执行，又能在 reuse-1 干扰下稳定价值学习，且经验上同时击败集中式 CTDE 与 actor 联邦（FedActor）基线。对于走向 AI 原生、分布式控制的 6G RAN，这是一个具体、低通信开销、值得跟踪的协调原语。
