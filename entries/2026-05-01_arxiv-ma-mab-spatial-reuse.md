---
id: 2026-05-01_arxiv-ma-mab-spatial-reuse
date_found: 2026-05-01
date_published: 2024-12-04
type: academic-paper
title_en: "Coordinated Multi-Armed Bandits for Improved Spatial Reuse in Wi-Fi"
title_zh: "面向 Wi-Fi 空间复用改进的协同多臂老虎机"
url: "https://arxiv.org/abs/2412.03076"
source_quality: full
topics: [802.11bn, MAPC, MAC-layer, scheduling]
novelty_score: 4
---

## Summary (EN)

Wilhelmi, Bellalta, Szott, Kosek-Szott, and Barrachina-Muñoz (December 2024, revised March 2025) bring a **Multi-Agent Multi-Armed Bandit (MA-MAB)** framework to the Spatial Reuse (SR) problem in Wi-Fi 8. Multiple Co-SR-capable APs run as concurrent decision-making agents, each tuning two SR parameters — Packet Detect (PD) threshold adjustment and transmit power control — while a coordinator-style reward-sharing scheme drives them toward a globally good outcome instead of greedy individual optima.

The numbers are unusually compelling, especially on fairness. Compared to standard Wi-Fi, MA-MAB Co-SR delivers **+15% mean throughput**, **+210% minimum throughput** (i.e. the worst-served BSS gets 3.1× more bandwidth), and **maximum access delay below 3 ms**. The minimum-throughput number is the headline — fairness in dense Wi-Fi has historically been the achilles heel that all-AP-optimum schemes traded off, and MA-MAB shows that's no longer the only choice.

The work is the conceptual predecessor of the HMAB Co-SR paper (`2026-05-01_arxiv-hmab-co-sr.md`) and is part of the same Bellalta-group line that produced Nunez et al.'s Co-SR latency implementation (`2026-05-01_arxiv-wifi8-latency-co-sr.md`).

## Summary (ZH)

Wilhelmi、Bellalta、Szott、Kosek-Szott、Barrachina-Muñoz（2024 年 12 月初版，2025 年 3 月修订）把**多智能体多臂老虎机（MA-MAB）**框架应用到 Wi-Fi 8 的空间复用（SR）问题。多个支持 Co-SR 的 AP 作为并发决策智能体，各自调节两个 SR 参数 —— 包检测（PD）门限调整与发送功率控制 —— 同时通过协调式奖励共享机制把所有 AP 推向全局优解，而不是各自的贪心局部最优。

数据相当亮眼，尤其在公平性上。相对标准 Wi-Fi，MA-MAB Co-SR 给出 **+15% 平均吞吐**、**+210% 最低吞吐**（即被服务最差的 BSS 获得了 3.1 倍带宽）、**最大接入时延 < 3 ms**。最低吞吐的数字是头条 —— 密集 Wi-Fi 中的公平性历来是"全 AP 最优"方案需要折中的阿喀琉斯之踵，本文证明这种折中并非唯一选择。

本论文是 HMAB Co-SR 论文（`2026-05-01_arxiv-hmab-co-sr.md`）的概念性前身，与 Nunez 等人 Co-SR 时延实现（`2026-05-01_arxiv-wifi8-latency-co-sr.md`）属同一 Bellalta 团队脉络。

## Key technical points (EN)

- **MA-MAB framework** for distributed concurrent SR decision-making
- Tunes two SR parameters: PD threshold + transmit power
- Reward-sharing mechanism for coordinated rather than greedy optimisation
- Headline numbers: **+15% mean throughput, +210% minimum throughput, <3 ms max delay**
- Validated on Komondor Wi-Fi simulator
- Predecessor to HMAB Co-SR (`2026-05-01_arxiv-hmab-co-sr.md`)

## Key technical points (ZH)

- **MA-MAB 框架**用于分布式并发 SR 决策
- 调节两个 SR 参数：PD 门限 + 发送功率
- 协调式奖励共享机制，避免贪心局部最优
- 关键数字：**平均吞吐 +15%、最低吞吐 +210%、最大时延 < 3 ms**
- 在 Komondor Wi-Fi 仿真器上验证
- HMAB Co-SR（`2026-05-01_arxiv-hmab-co-sr.md`）的前身

## Why it matters / what's new (EN)

- **The minimum-throughput +210% is the actual story.** Most Co-SR work brags about mean throughput; this paper proves the long-tail BSS — the one users actually feel — can be brought up dramatically without sacrificing the average.
- **Bridges the published Co-SR ML lineage.** Now the chronology is: MA-MAB (Dec 2024) → HMAB Co-SR (Jan 2025) → Nunez Co-SR latency impl (Jul 2025) → ML-Co-SR (May 2025). All Bellalta-group papers, all converging.

## Why it matters / what's new (ZH)

- **最低吞吐 +210% 才是真正的看点。** 多数 Co-SR 工作只夸自己平均吞吐有多高；本论文证明长尾 BSS —— 用户真正感知的那一部分 —— 可以在不牺牲均值的情况下显著提升。
- **接续了 Co-SR ML 公开发表脉络。** 时间线现在是：MA-MAB（2024 年 12 月）→ HMAB Co-SR（2025 年 1 月）→ Nunez Co-SR 时延实现（2025 年 7 月）→ ML-Co-SR（2025 年 5 月）。同一 Bellalta 团队，方向收敛。
