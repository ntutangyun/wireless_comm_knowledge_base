---
id: 2026-05-01_arxiv-hmab-co-sr
date_found: 2026-05-01
date_published: 2025-01-07
type: academic-paper
title_en: "IEEE 802.11bn Multi-AP Coordinated Spatial Reuse with Hierarchical Multi-Armed Bandits"
title_zh: "基于分层多臂老虎机的 IEEE 802.11bn 多 AP 协同空间复用"
url: "https://arxiv.org/abs/2501.03680"
source_quality: full
topics: [802.11bn, MAPC, MAC-layer, scheduling]
novelty_score: 4
---

## Summary (EN)

A Hierarchical Multi-Armed Bandit (HMAB) framework for the Co-SR group-selection problem in 802.11bn. The hierarchy comes from splitting the problem into "which set of APs are allowed to overlap?" (high-level arm) and "given that set, how do we power-allocate?" (low-level arm). HMAB's online-learning structure handles the non-stationarity that plagues fixed-environment Co-SR optimisation: when a STA moves, the bandit re-allocates exploration without a full retrain.

This paper, the ML-Co-SR paper (`2026-05-01_arxiv-ml-co-sr-scheduling.md`), and the Nunez implementation (`2026-05-01_arxiv-wifi8-latency-co-sr.md`) are now the three primary published Co-SR-for-TGbn papers — and HMAB's contribution is specifically the online-learning angle with formal regret guarantees.

## Summary (ZH)

针对 802.11bn 中协同空间复用（Co-SR）分组选择问题的分层多臂老虎机（HMAB）框架。分层来自把问题拆成"哪一组 AP 可以同时复用？"（高层臂）和"给定该组，如何分配功率？"（低层臂）。HMAB 的在线学习结构应对了 Co-SR 优化在固定环境上的非平稳性 —— 当 STA 移动时，老虎机会重新调整探索，而无需整模型重训。

本论文连同 ML-Co-SR 论文（`2026-05-01_arxiv-ml-co-sr-scheduling.md`）以及 Nunez 实现（`2026-05-01_arxiv-wifi8-latency-co-sr.md`）现在是 TGbn Co-SR 主要的三篇公开论文 —— HMAB 的具体贡献是在线学习视角加上形式化遗憾界。

## Key technical points (EN)

- Two-tier bandit: AP-set selection (high) + power allocation (low)
- Online learning, no full retrain on topology change
- Formal regret guarantees
- Comparable to other ML Co-SR approaches; different design tradeoffs

## Key technical points (ZH)

- 两层老虎机：AP 组选择（高层）+ 功率分配（低层）
- 在线学习，拓扑变化时无需整模型重训
- 形式化遗憾界
- 与其他 ML Co-SR 方法可比较；设计折中不同

## Why it matters / what's new (EN)

- **Online-learning baseline for Co-SR.** Until now Co-SR ML work was offline-trained; HMAB introduces principled online adaptation.
- **Theoretical anchor.** Regret-bound results give the field a way to compare Co-SR algorithms beyond just simulation-throughput.

## Why it matters / what's new (ZH)

- **Co-SR 的在线学习基线。** 此前 Co-SR ML 工作多为离线训练；HMAB 引入了原理化的在线自适应。
- **理论锚点。** 遗憾界结果给该领域提供了一种"超越纯仿真吞吐"的算法对比方式。
