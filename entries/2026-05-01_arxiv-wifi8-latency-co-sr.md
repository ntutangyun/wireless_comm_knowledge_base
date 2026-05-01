---
id: 2026-05-01_arxiv-wifi8-latency-co-sr
date_found: 2026-05-01
date_published: 2025-07-24
type: academic-paper
title_en: "Improving Wi-Fi 8 Latency with Coordinated Spatial Reuse"
title_zh: "通过协同空间复用改善 Wi-Fi 8 时延"
url: "https://arxiv.org/abs/2507.18480"
source_quality: full
topics: [802.11bn, MAPC, MAC-layer, scheduling, XR]
novelty_score: 4
---

## Summary (EN)

Nunez, Wilhelmi, Galati-Giordano, Geraci and Bellalta (July 2025) implement and simulate **Coordinated Spatial Reuse (Co-SR)** as proposed for 802.11bn, evaluating it in a four-AP dense-deployment scenario with cloud gaming / XR-style traffic. The headline result is a remarkable **31%–95% delay reduction** versus the uncoordinated DCF baseline, depending on traffic and topology mix.

Co-SR is a different MAPC primitive from Co-TDMA (`2026-05-01_arxiv-co-tdma-802-11bn.md`): rather than time-slot coordination, it has neighbouring APs transmit simultaneously on the same channel with carefully managed transmit-power adjustments so they don't kill each other. The Geraci group has been the leading academic shop on Co-SR for several years and this paper is the first published implementation aligned with the TGbn-track design.

The paper functions as the empirical companion to `2026-05-01_arxiv-throughput-coord-spatial-reuse-bn.md` (analytical) and is a useful baseline for any subsequent C-SR work.

## Summary (ZH)

Nunez、Wilhelmi、Galati-Giordano、Geraci 和 Bellalta（2025 年 7 月）针对 802.11bn 提出的**协同空间复用（Co-SR）**给出实现并做系统级仿真，评估场景是四 AP 密集部署 + 云游戏 / XR 风格流量。关键结果是惊人的**时延降低 31%–95%**（相对未协调的 DCF 基线，取决于流量与拓扑组合）。

Co-SR 与 Co-TDMA（`2026-05-01_arxiv-co-tdma-802-11bn.md`）是不同的 MAPC 原语：它不是按时隙协调，而是让邻居 AP 同时在相同信道传输，但通过精细的发送功率调节使彼此不互相"打死"。Geraci 团队在 Co-SR 方向上深耕多年；本论文是首个与 TGbn 路线对齐的公开实现。

本论文是 `2026-05-01_arxiv-throughput-coord-spatial-reuse-bn.md`（分析型）的实证配套，可作为后续 C-SR 工作的基线。

## Key technical points (EN)

- **Co-SR** = Coordinated Spatial Reuse via simultaneous neighbouring transmissions with managed power
- Four-AP dense deployment, cloud-gaming / XR traffic
- **31%–95% delay reduction** over DCF baseline (range depends on conditions)
- TGbn-track aligned design
- Companion to throughput-analysis work (Continuous-Time Markov Chains)

## Key technical points (ZH)

- **Co-SR** = 通过功率管理的同信道并发传输实现的协同空间复用
- 四 AP 密集部署、云游戏 / XR 流量
- 相对 DCF 基线**时延降低 31%–95%**（依条件而定）
- 与 TGbn 路线对齐的设计
- 与吞吐分析工作（连续时间马尔可夫链）形成配套

## Why it matters / what's new (EN)

- **Strongest published Co-SR latency number to date.** A 31–95% reduction puts Co-SR firmly in the "must-have feature for XR" conversation.
- **Pairs with Co-TDMA.** With Lee et al.'s Co-TDMA paper, TGbn now has comparable evaluations of two MAPC alternatives — useful for the comment-resolution debate.
- **Practical for implementers:** the simulation is reproducible and the parameter sweeps give a recipe for tuning Co-SR in real deployments.

## Why it matters / what's new (ZH)

- **迄今为止 Co-SR 公开发表的最强时延数据。** 31–95% 的降幅使 Co-SR 牢牢站在"XR 必备特性"的讨论中心。
- **与 Co-TDMA 形成搭配。** 加上 Lee 等人的 Co-TDMA 论文，TGbn 现在有了两种 MAPC 备选的可比评估 —— 对评论裁定辩论很有用。
- **对实现方有实操价值：** 仿真可复现，参数扫描给出在真实部署中调优 Co-SR 的"食谱"。
