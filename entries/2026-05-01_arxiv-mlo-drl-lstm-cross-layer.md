---
id: 2026-05-01_arxiv-mlo-drl-lstm-cross-layer
date_found: 2026-05-01
date_published: 2026-03-19
type: academic-paper
title_en: "Cross-Layer Traffic Allocation and Contention-Window Optimization for Wi-Fi 7 MLO: When DRL Meets LSTM"
title_zh: "Wi-Fi 7 MLO 跨层流量分配与竞争窗口优化：DRL × LSTM"
url: "https://arxiv.org/abs/2603.18602"
source_quality: full
topics: [802.11be, MLO, MAC-layer, scheduling]
novelty_score: 4
---

## Summary (EN)

Liu, Wang, Lian, Huang, Fu and Zhang (March 2026) tackle a long-standing problem in Wi-Fi 7 multi-link operation: how to **jointly** allocate traffic across links at the upper MAC (U-MAC) and tune the initial contention window (ICW) at the lower MAC (L-MAC) so that aggregate throughput is maximised under realistic, partially-observable network conditions. Existing MLO work tends to optimise these two knobs independently — this paper argues that's leaving substantial throughput on the table.

The contribution has three components. First, an **extended Bianchi-style Markov model** that captures the relationship between throughput, traffic allocation, and contention-window sizes in the multi-link regime (the textbook Bianchi model is single-link). Second, a formulation of the joint optimisation as a non-convex problem. Third, an **LSTM-augmented Soft Actor-Critic (LSTM-SAC)** algorithm that explicitly handles partial observability and the non-Markovian dynamics of real Wi-Fi networks (channel busy fractions and cross-link interference are not first-order Markov).

The empirical evaluation uses event-based simulation across "diverse network configurations." LSTM-SAC outperforms benchmarks on aggregate throughput. The result is consistent with the broader trend in agentic / DRL-for-Wi-Fi work: when state is partially observable, sequence models on top of standard RL become a meaningful win.

## Summary (ZH)

Liu、Wang、Lian、Huang、Fu 和 Zhang（2026 年 3 月）攻克 Wi-Fi 7 多链路操作（MLO）中一个长期未解的问题：如何**联合**地在上层 MAC（U-MAC）做跨链路流量分配、并在下层 MAC（L-MAC）调整初始竞争窗口（ICW），以在真实的、部分可观测网络条件下最大化总吞吐量。现有 MLO 工作通常将这两个旋钮分别优化，作者论证这种独立优化会显著留下吞吐空间。

贡献分三部分。第一，**扩展的 Bianchi 类马尔可夫模型**，刻画多链路环境下吞吐量与流量分配、竞争窗口尺寸的关系（教科书 Bianchi 模型只是单链路）。第二，将联合优化问题写成一个非凸问题。第三，**带 LSTM 的 Soft Actor-Critic（LSTM-SAC）**算法，显式处理真实 Wi-Fi 中存在的部分可观测性与非马尔可夫动态（信道忙占比与跨链干扰本就不是一阶马尔可夫）。

实验采用基于事件的仿真，跨多种网络配置评估。LSTM-SAC 在总吞吐上优于已有基线。该结果与"DRL/智能体用于 Wi-Fi"领域的更宏观趋势一致：当状态部分可观测时，把序列模型叠加到标准 RL 上是有意义的提升。

## Key technical points (EN)

- **U-MAC traffic allocation + L-MAC ICW** treated as a single joint optimisation
- **Extended Bianchi Markov model** generalised to multi-link operation
- **LSTM-SAC algorithm:** soft actor-critic with LSTM-encoded history to handle partial observability
- Event-based simulation; aggregate throughput improvement over independent-optimisation baselines
- Confirms the value of cross-layer reasoning for Wi-Fi 7 MLO scheduling

## Key technical points (ZH)

- 把 **U-MAC 流量分配与 L-MAC ICW** 当成单一联合优化问题
- **扩展 Bianchi 马尔可夫模型**推广到多链路
- **LSTM-SAC：** 在 SAC 上叠加 LSTM 编码历史，应对部分可观测
- 基于事件的仿真；总吞吐相对独立优化基线显著提升
- 印证跨层推理对 Wi-Fi 7 MLO 调度的价值

## Why it matters / what's new (EN)

- **Joint U-MAC + L-MAC framing.** Most MLO literature treats these layers separately; this paper formalises the joint optimisation problem and demonstrates a tractable algorithm for it. That framing is likely to appear in subsequent TGbn-related contributions.
- **LSTM as a Wi-Fi-specific tool.** The partial-observability argument transfers directly to other Wi-Fi RL problems — backoff tuning, MU-MIMO grouping, MAPC — and the paper effectively becomes a methodological reference for those.
- **Pairs with BLADE (`2026-05-01_arxiv-blade-adaptive-contention.md`).** Both papers operate on contention-window dynamics. BLADE is heuristic + standards-conformant; this work is RL + cross-layer. Together they sketch the design space for adaptive CW in 802.11be / 11bn.

## Why it matters / what's new (ZH)

- **U-MAC + L-MAC 联合视角。** 多数 MLO 文献把两层分开处理；本论文把联合优化问题形式化，并给出可行的算法。这一框架有可能在后续 TGbn 相关贡献中出现。
- **LSTM 作为 Wi-Fi 特定工具。** 部分可观测的论证可以直接迁移到其他 Wi-Fi RL 问题 —— 回退调节、MU-MIMO 分组、MAPC —— 因此本论文事实上成为这些方向的方法学参考。
- **与 BLADE（`2026-05-01_arxiv-blade-adaptive-contention.md`）形成搭配。** 两项工作都作用在竞争窗口动态上。BLADE 是启发式 + 完全符合标准；本工作是 RL + 跨层。两者共同勾勒出 802.11be / 11bn 自适应 CW 的设计空间。
