---
id: 2026-05-01_arxiv-ml-co-sr-scheduling
date_found: 2026-05-01
date_published: 2025-05-12
type: academic-paper
title_en: "Coordinated Spatial Reuse Scheduling With Machine Learning"
title_zh: "基于机器学习的协同空间复用调度"
url: "https://arxiv.org/abs/2505.07278"
source_quality: full
topics: [802.11bn, MAPC, MAC-layer, scheduling]
topic_primary: mapc-cosr
topics_secondary: [ai-for-wifi]
novelty_score: 4
---

## Summary (EN)

A machine-learning approach to the Coordinated Spatial Reuse (Co-SR) scheduling problem in 802.11bn: given multiple APs that can transmit simultaneously on the same channel, learn the joint power-and-grouping policy that maximises aggregate throughput while keeping per-AP SINR above a tolerance threshold. The novelty is treating Co-SR as a *learning* problem rather than a deterministic optimisation — the trained policy can adapt to topology changes at runtime instead of needing a fresh constraint solve every reconfiguration.

The training architecture is event-based simulation against TGbn-aligned MAC behaviour. The policy is trained offline, then deployed online with a tight inference budget so it fits inside the per-TXOP scheduling window.

Pairs naturally with the Hierarchical Multi-Armed Bandit Co-SR paper (`2026-05-01_arxiv-hmab-co-sr.md`) and Nunez et al.'s implementation (`2026-05-01_arxiv-wifi8-latency-co-sr.md`) — three different ML angles on the same Co-SR design problem.

## Summary (ZH)

针对 802.11bn 中协同空间复用（Co-SR）调度问题的机器学习方法：给定多 AP 可在同信道上并发传输，学习联合的"功率 + 分组"策略，使总吞吐最大化，同时保持每个 AP 的 SINR 高于容忍阈值。新颖之处在于把 Co-SR 当作*学习*问题而不是确定性优化 —— 训练好的策略可以在拓扑变化时即时适应，而不必每次重配置都重新解一次约束。

训练架构是基于事件的仿真，对照 TGbn 一致的 MAC 行为。策略离线训练，在线部署时推理预算紧凑，可在每个 TXOP 调度窗口内完成。

与基于分层多臂老虎机的 Co-SR 论文（`2026-05-01_arxiv-hmab-co-sr.md`）以及 Nunez 等人的实现（`2026-05-01_arxiv-wifi8-latency-co-sr.md`）形成天然配套 —— 同一 Co-SR 设计问题的三个不同 ML 角度。

## Key technical points (EN)

- ML approach to Co-SR group selection + power assignment
- Trained against TGbn-aligned event-based simulator
- Tight inference budget for per-TXOP deployment
- Adaptive to topology changes at runtime

## Key technical points (ZH)

- 用 ML 解决 Co-SR 的分组选择 + 功率分配
- 在与 TGbn 一致的事件级仿真上训练
- 推理预算紧凑，可在每 TXOP 部署
- 对运行时拓扑变化具有自适应能力

## Why it matters / what's new (EN)

- **Methodological pluralism on Co-SR.** The fact that three different ML approaches to Co-SR have appeared by mid-2025 (HMAB, plain DL, MAB-with-shaping) signals the design space is open.
- **Runtime adaptation is the differentiator.** Static optimisation breaks the moment a STA roams; ML-policy approaches don't.

## Why it matters / what's new (ZH)

- **Co-SR 上的方法论多样性。** 到 2025 年中已经出现三种 ML 角度的 Co-SR 论文（HMAB、普通 DL、带塑形的 MAB），表明设计空间仍开放。
- **运行时自适应是差异化点。** 静态优化在 STA 漫游瞬间失效；ML 策略类方法不会。
