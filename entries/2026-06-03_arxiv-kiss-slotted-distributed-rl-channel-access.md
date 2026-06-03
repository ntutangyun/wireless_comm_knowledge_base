---
id: 2026-06-03_arxiv-kiss-slotted-distributed-rl-channel-access
date_published: 2026-05-29
date_found: 2026-06-03
type: academic-paper
title_en: "KISS: Keeping it Simple and Slotted when Learning to Communicate over Wireless"
title_zh: "KISS：在无线信道上学习通信时保持简单与时隙化"
url: "https://arxiv.org/abs/2606.00266"
source_quality: full
topics: [random-access, slotted-ALOHA, reinforcement-learning, MAC-layer, distributed-MAC]
topic_primary: ai-for-wifi
topics_secondary: []
novelty_score: 1
---

## Summary (EN)
KISS ("Keeping It Simple and Slotted") asks a foundational question: can fully distributed deep reinforcement-learning agents learn efficient *and fair* channel-access strategies with no centralization, no coordination, no explicit signaling, and no knowledge of network parameters such as the number of contending nodes? The authors come from the AGH Kraków group that contributes to IEEE 802.11 / ns-3 random-access research, but this paper deliberately steps back from 802.11 specifics to study the underlying slotted random-access problem.

Each node runs an independent Double Deep Q-Network (DDQN) with a one-layer transformer classifier and a Bayesian neural network for inference. The only observations are per-slot channel outcomes (idle / success / collision); the action space is just transmit (TX) or carrier-sense (CS). The reward rewards successful transmissions and penalizes collisions and excessive waiting. With no pre-training, no shared parameters, and no signaling, each agent must infer how aggressively to transmit purely from the slot-outcome history.

On a JAX-based slotted-channel simulator (no attenuation, no hidden terminals; 5–40 nodes, saturated and non-saturated, static and dynamic), KISS recovers near-optimal p-persistent behavior: it approaches the theoretical slotted-ALOHA throughput limit of 1/e ≈ 0.368 (~0.4 normalized throughput), learns to approximate the optimal per-node transmission probability 1/N without ever being told N, maintains high Jain's fairness across network sizes, adapts quickly to topology changes, and outperforms EB-ALOHA, ALOHA-Q, and DLMA baselines especially in non-saturated traffic.

## Summary (ZH)
KISS（"保持简单与时隙化"）提出一个基础问题：完全分布式的深度强化学习智能体能否在无中心化、无协调、无显式信令、且不知网络参数（如竞争节点数）的条件下，学到高效*且公平*的信道接入策略？作者来自参与 IEEE 802.11 / ns-3 随机接入研究的 AGH 克拉科夫团队，但本文有意从 802.11 细节退一步，研究底层的时隙化随机接入问题。

每个节点运行独立的双深度 Q 网络（DDQN），配单层 transformer 分类器与贝叶斯神经网络做推断。唯一观测是每时隙的信道结果（空闲/成功/冲突）；动作空间仅为发送（TX）或载波侦听（CS）。奖励函数鼓励成功发送、惩罚冲突与过度等待。在无预训练、无共享参数、无信令的条件下，每个智能体须仅凭时隙结果历史推断发送的激进程度。

在基于 JAX 的时隙信道仿真器上（无衰落、无隐藏终端；5–40 节点，饱和与非饱和、静态与动态），KISS 恢复出近最优的 p-持续行为：逼近时隙 ALOHA 的理论吞吐上限 1/e ≈ 0.368（归一化吞吐约 0.4），在不被告知 N 的情况下学会逼近最优每节点发送概率 1/N，在各网络规模下保持高 Jain 公平性，对拓扑变化快速自适应，并在非饱和流量下优于 EB-ALOHA、ALOHA-Q、DLMA 等基线。

## Key technical points (EN)
- **Fully distributed DDQN**, one agent per node, no parameter sharing, no coordination, no signaling.
- **Minimal observation/action:** per-slot outcome (idle/success/collision) in, TX-or-CS out.
- **Architecture:** one-layer transformer classifier + Bayesian neural network.
- **Result:** recovers slotted-ALOHA 1/e throughput limit and the optimal 1/N transmission probability *without knowing N*; high fairness; robust to dynamic topologies; beats EB-ALOHA / ALOHA-Q / DLMA in non-saturated regimes.
- **Scope caveat:** abstract slotted channel (no attenuation, no hidden terminals) — foundational random-access theory, not an 802.11-specific MAC.

## Key technical points (ZH)
- **完全分布式 DDQN**，每节点一个智能体，无参数共享、无协调、无信令。
- **极简观测/动作：** 输入每时隙结果（空闲/成功/冲突），输出 TX 或 CS。
- **架构：** 单层 transformer 分类器 + 贝叶斯神经网络。
- **结果：** 在*不知 N* 的情况下恢复时隙 ALOHA 的 1/e 吞吐上限与最优 1/N 发送概率；公平性高；对动态拓扑鲁棒；非饱和场景优于 EB-ALOHA / ALOHA-Q / DLMA。
- **范围说明：** 抽象时隙信道（无衰落、无隐藏终端）——属基础随机接入理论，非 802.11 专用 MAC。

## Why it matters / what's new (EN)
This is an adjacency read for the `ai-for-wifi` bin rather than a direct 802.11 contribution: it shows that minimal-assumption distributed deep RL can *rediscover* classical p-persistent ALOHA behavior, which sets a clean lower-bound baseline for any learned-MAC claim that targets real 802.11 CSMA/CA. The novelty is methodological (no pre-training / no signaling / no N knowledge), not a new wireless mechanism — the agents converge to behavior that contention-window theory already predicts. Useful as a reference point when evaluating the more applied learned-channel-access entries in the KB, but it does not introduce a new on-the-wire mechanism.

## Why it matters / what's new (ZH)
本文是 `ai-for-wifi` 桶的邻接读物，而非直接的 802.11 贡献：它表明最小假设的分布式深度 RL 能*重新发现*经典 p-持续 ALOHA 行为，为任何面向真实 802.11 CSMA/CA 的"学习型 MAC"主张提供了干净的下界基线。其新意在方法层面（无预训练/无信令/不知 N），而非新的无线机制——智能体收敛到竞争窗口理论早已预测的行为。可作为评估 KB 中更应用化的学习型信道接入条目的参照点，但并未引入可保护的在网（on-the-wire）机制。
