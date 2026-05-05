---
id: 2026-05-02_arxiv-mab-llm-mlo-channel-allocation
date_published: 2025-06-05
date_found: 2026-05-02
type: academic-paper
title_en: "Intelligent Channel Allocation for IEEE 802.11be Multi-Link Operation: When MAB Meets LLM"
title_zh: "面向 IEEE 802.11be MLO 的智能信道分配 —— 多臂老虎机与 LLM 的结合"
url: "https://arxiv.org/abs/2506.04594"
source_quality: full
topics: [802.11be, MLO, scheduling, agentic-AI]
topic_primary: mlo
topics_secondary: [agentic-wifi, ai-for-wifi]
novelty_score: 2
---

## Summary (EN)

Lian et al. (JSAC 2025, arxiv 2506.04594) attack the dynamic channel-allocation problem in dense Wi-Fi 7 multi-link-operation (MLO) deployments. They formulate the joint selection of channels across multiple links per BSS as a combinatorial multi-armed bandit (MAB) and propose **BAI-MCTS** — a Best-Arm Identification algorithm wrapped in a Monte Carlo Tree Search — for online learning without any prior network statistics. They then layer an LLM on top to seed the search, calling the result **LLM-BAI-MCTS**.

The main reported numbers: BAI-MCTS converges roughly **50.44% faster** than the prior state of the art when reaching 98 % optimality, and adding the LLM raises the convergence rate by an additional **63.32 %** in dense networks.

Importantly, the contribution is purely algorithmic. No new 802.11be Information Elements, Action frames, MLME primitives, or protocol fields are introduced — the algorithm runs inside the existing MLO control plane. The novelty is the *policy*, not the wire format.

## Summary (ZH)

Lian 等人（JSAC 2025，arxiv 2506.04594）针对密集 Wi-Fi 7 多链路（MLO）部署中的动态信道分配问题，提出把"在每个 BSS 的多条链路上联合选信道"的过程建模为组合式多臂老虎机（MAB），并设计了 **BAI-MCTS** —— 在 Best-Arm Identification 算法外层包一层蒙特卡洛树搜索（MCTS），无需任何先验网络统计就能在线学习。在此基础上再叠加 LLM 做搜索初始化，得到 **LLM-BAI-MCTS**。

主要报告数据：达到 98 % 最优时，BAI-MCTS 比此前 SOTA 快约 **50.44 %**；在密集网络下加入 LLM 还可再提升 **63.32 %** 的收敛速率。

关键之处在于：本工作的贡献完全在算法 / 策略层面 —— 没有引入新的 802.11be IE、Action 帧、MLME 原语或协议字段。算法运行在既有 MLO 控制面之内，新颖点是*策略*而不是*空口格式*。

## Key technical points (EN)

- Joint per-BSS channel selection across MLO links modelled as combinatorial MAB.
- BAI-MCTS = Best-Arm Identification ⊕ Monte Carlo Tree Search; targets sample-efficient online convergence.
- LLM-BAI-MCTS uses an LLM only to warm-start / prune the tree-search; the deterministic MAB decision still owns the final pull.
- No new 802.11be on-the-wire mechanism — the algorithm sits behind the standard MLO management plane.
- ~50 % faster convergence vs. SOTA at 98 % optimality; +63 % convergence-rate boost in dense networks with the LLM.

## Key technical points (ZH)

- 把跨 MLO 链路的 per-BSS 联合信道选择建模为组合式 MAB。
- BAI-MCTS = Best-Arm Identification ⊕ 蒙特卡洛树搜索；目标是样本高效的在线收敛。
- LLM-BAI-MCTS 中 LLM 仅做树搜索的热启动 / 剪枝；最终的 pull 决策仍由确定性 MAB 给出。
- 不引入任何新的 802.11be 空口机制 —— 算法运行在标准 MLO 管理面之下。
- 收敛速度比 SOTA 快约 50%（@ 98% 最优）；密集网络下加入 LLM 再提升 ~63% 的收敛速率。

## Why it matters / what's new (EN)

This paper extends two existing KB threads. It builds on `arxiv-mlo-drl-lstm-cross-layer` (which used DRL+LSTM for joint U-MAC + L-MAC decisions) by replacing the deep-RL backbone with a sample-efficient MAB+MCTS combination — interesting if you care about cold-start convergence on real deployments where DRL training data is scarce. It also extends `arxiv-mapc-llm-agents` and `arxiv-wirelessbench-llm-agent` into the MLO channel-allocation problem specifically, joining the small but growing set of "LLM as guidance, deterministic optimizer as decider" architectures in WLAN.

What it does *not* do: change the wire format. Anyone implementing this gets the same air-traffic patterns as a standards-compliant MLO AP — the differentiation is the convergence speed of the optimizer, which is observable only through aggregate throughput / convergence-time metrics.

## Why it matters / what's new (ZH)

本文扩展了 KB 的两条线索。它在 `arxiv-mlo-drl-lstm-cross-layer`（用 DRL+LSTM 联合做 U-MAC + L-MAC 决策）的基础上，把深度 RL 主干替换为样本更高效的 MAB+MCTS 组合 —— 在 DRL 训练数据稀缺的真实部署场景下，关心冷启动收敛速度的人会感兴趣。它也把 `arxiv-mapc-llm-agents` 与 `arxiv-wirelessbench-llm-agent` 的"LLM 作引导、确定性优化器拍板"架构延伸到了具体的 MLO 信道分配问题。

它*没做*的事：不改空口格式。按本文实现的 AP，发出的空口流量与符合标准的 MLO AP 别无二致 —— 真正的差异是优化器的收敛速度，只能通过聚合吞吐与收敛时间这类指标才看得出来。
