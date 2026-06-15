---
id: 2026-06-15_arxiv-11bn-mapc-tutorial-d14
date_published: 2026-06-11
date_found: 2026-06-15
type: academic-paper
title_en: "A Tutorial on IEEE 802.11bn Multi-AP Coordination for Wi-Fi 8: From Standardization to Performance Evaluation"
title_zh: "IEEE 802.11bn 多 AP 协调（MAPC）Wi-Fi 8 教程：从标准化到性能评估"
url: "https://arxiv.org/abs/2606.13759"
source_quality: full
topics: [802.11bn, MAPC, Co-SR, Co-BF, Co-TDMA, Co-RTWT, UHR, Wi-Fi-8]
topic_primary: mapc-cosr
topics_secondary: [rtwt-latency, wifi8-uhr, mlo]
novelty_score: 3
---

## Summary (EN)
This tutorial is the first published work to walk through the technical details of **IEEE 802.11bn Draft 1.4 (D1.4)** Multi-AP Coordination (MAPC) — the headline feature of Wi-Fi 8 / Ultra High Reliability (UHR). It blends the standardization view (architecture, signaling, frame formats) with a unified performance evaluation, written by a Universitat Pompeu Fabra / Nokia / Northeastern / MaxLinear team (Wilhelmi, Bellalta, Geraci, Galati-Giordano, Meneghello, Kijanka, Val, López-Pérez), submitted 11 June 2026.

The paper describes the common MAPC framework — **discovery, agreement management (negotiation/update/teardown), and authentication via an extended PASN protocol** — then details five mechanisms standardized in D1.4: **Coordinated Beamforming (Co-BF)** (null-steering with CSI exchange), **Coordinated Spatial Reuse (Co-SR)** (power control, no CSI), **Coordinated TDMA (Co-TDMA)** (TXOP sharing for collision-free access), **Coordinated R-TWT (Co-RTWT)** (cross-BSS schedule alignment for latency protection), and **Coordinated Channel Recommendation (Co-CR)** for P2P channel agreement. Section VI sketches future mechanisms not yet in the draft: Joint Transmission (JT), Coordinated OFDMA (Co-OFDMA), and Coordinated NPCA (Co-NPCA).

Evaluation uses **Kom8ndor**, an open-source Wi-Fi 8 simulator derived from Komondor (GPLv3). Three didactic scenarios isolate the key trade-offs rather than chase aggregate benchmarks: Co-BF in an exhibition hall (effectiveness hinges on angular separation — ~90% per-BSS gain at Δθ≈117°, but throughput collapses to 0 when STAs are collinear and the ZF precoder fails); Co-SR across two apartments (~95% channel-access-delay reduction under favorable geometry, but packet loss for the coordinated AP under high interference); and Co-TDMA across three enterprise APs (−55% delay for coordinated BSSs but +130% delay penalty for the non-coordinated neighbor, plus ICF/ICR signaling overhead before any data flows).

The recurring message is that MAPC delivers substantial gains but only under scenario-specific conditions — spatial geometry, deployment density, and traffic load all decide whether a given coordination scheme helps or hurts.

## Summary (ZH)
本教程是首篇系统讲解 **IEEE 802.11bn Draft 1.4（D1.4）** 多 AP 协调（MAPC）技术细节的工作——MAPC 是 Wi-Fi 8 / 超高可靠性（UHR）的核心特性。论文将标准化视角（架构、信令、帧格式）与统一的性能评估结合，作者来自 Universitat Pompeu Fabra / Nokia / Northeastern / MaxLinear（Wilhelmi、Bellalta、Geraci、Galati-Giordano、Meneghello、Kijanka、Val、López-Pérez），于 2026 年 6 月 11 日提交。

论文描述了 MAPC 的通用框架——**发现、协商管理（协商/更新/拆除）、以及通过扩展 PASN 协议的认证**——随后详解 D1.4 中标准化的五种机制：**协调波束成形（Co-BF）**（需交换 CSI 的零陷调向）、**协调空间复用（Co-SR）**（功率控制、无需 CSI）、**协调 TDMA（Co-TDMA）**（共享 TXOP 实现无冲突接入）、**协调 R-TWT（Co-RTWT）**（跨 BSS 调度对齐以保护时延）、以及用于 P2P 信道协商的**协调信道推荐（Co-CR）**。第六节展望了尚未进入草案的机制：联合传输（JT）、协调 OFDMA（Co-OFDMA）、协调 NPCA（Co-NPCA）。

评估使用 **Kom8ndor**——一个基于 Komondor 的开源 Wi-Fi 8 仿真器（GPLv3）。三个教学场景刻意凸显关键权衡而非追求总吞吐：展览大厅中的 Co-BF（效果取决于角度分离——Δθ≈117° 时每 BSS 增益约 90%，但当 STA 共线、ZF 预编码失效时吞吐跌至 0）；两套公寓间的 Co-SR（在有利几何下信道接入时延降低约 95%，但高干扰下协调 AP 出现丢包）；三 AP 企业场景的 Co-TDMA（协调 BSS 时延 −55%，但未协调邻居时延恶化 +130%，且数据传输前有 ICF/ICR 信令开销）。

反复出现的结论是：MAPC 能带来显著收益，但仅在特定场景条件下成立——空间几何、部署密度与流量负载共同决定某种协调方案是帮还是伤。

## Key technical points (EN)
- **First technical treatment of 802.11bn D1.4** — frame-level MAPC Element structures, Discovery/Negotiation/Authentication message formats documented in appendices; authentication reuses an extended PASN.
- **Five standardized mechanisms**: Co-BF (CSI, null-steering), Co-SR (power control, no CSI), Co-TDMA (TXOP split), Co-RTWT (cross-BSS R-TWT alignment), Co-CR (P2P channel agreement).
- **Kom8ndor open-source simulator** (Komondor-derived, GPLv3) — first unified tool comparing multiple MAPC schemes under one methodology.
- **Co-BF** is geometry-bound: ~375 Mb/s per BSS (~90% gain) at high angular separation, but 0 Mb/s when STAs collinear (ZF precoder fails).
- **Co-SR**: ~95% channel-access-delay drop under favorable reuse; degrades to packet loss under high interference (~35 vs ~55 Mb/s at 5000 pkt/s).
- **Co-TDMA**: −55% delay for coordinated BSSs but +130% for the uncoordinated neighbor; equal TXOP split shown suboptimal; ICF/ICR overhead is non-trivial.
- **UHR target restated**: ≥25% improvement in throughput, 95th-percentile latency, and MPDU loss vs 802.11be (EHT).
- **Future roadmap**: JT, Co-OFDMA, Co-NPCA flagged as post-D1.4 directions.

## Key technical points (ZH)
- **首次对 802.11bn D1.4 的技术解读**——附录给出帧级 MAPC Element 结构、发现/协商/认证消息格式；认证复用扩展 PASN。
- **五种标准化机制**：Co-BF（需 CSI、零陷调向）、Co-SR（功率控制、无需 CSI）、Co-TDMA（TXOP 分配）、Co-RTWT（跨 BSS R-TWT 对齐）、Co-CR（P2P 信道协商）。
- **Kom8ndor 开源仿真器**（源自 Komondor，GPLv3）——首个在统一方法下比较多种 MAPC 方案的工具。
- **Co-BF** 受几何约束：高角度分离下每 BSS 约 375 Mb/s（增益约 90%），STA 共线时跌至 0 Mb/s（ZF 预编码失效）。
- **Co-SR**：有利复用下信道接入时延降约 95%；高干扰下退化为丢包（5000 pkt/s 时约 35 vs 55 Mb/s）。
- **Co-TDMA**：协调 BSS 时延 −55%，未协调邻居 +130%；等分 TXOP 被证明次优；ICF/ICR 开销不可忽略。
- **UHR 目标重申**：相对 802.11be（EHT），吞吐、95 分位时延、MPDU 丢失率均改善 ≥25%。
- **未来路线**：JT、Co-OFDMA、Co-NPCA 列为 D1.4 之后方向。

## Why it matters / what's new (EN)
The KB already tracks individual MAPC mechanisms and tools — the Komondor-based MAPC studies, the multi-AP coordination digests from IEEE Mentor, and the P802.11bq combinatorial-MAB optimizer (2026-06-03). This entry is the first **consolidated D1.4-level reference**: it pins down exactly which mechanisms made it into Draft 1.4, their frame formats, and a like-for-like simulation comparison under one open tool (Kom8ndor). For anyone tracking how Wi-Fi 8 coordination actually performs versus the marketing "25%" UHR targets, the scenario-dependent results (Co-BF collapsing at collinear geometry, Co-TDMA hurting the uncoordinated neighbor by +130%) are the practical reality check. It is a strong anchor entry for the `mapc-cosr` bin and a natural prior-art reference for any coordination-scheme work.

## Why it matters / what's new (ZH)
KB 已分别跟踪各类 MAPC 机制与工具——基于 Komondor 的 MAPC 研究、来自 IEEE Mentor 的多 AP 协调摘要、以及 P802.11bq 组合式 MAB 优化器（2026-06-03）。本条目是首个 **D1.4 级别的整合参考**：明确哪些机制进入了 Draft 1.4、其帧格式，并在统一开源工具（Kom8ndor）下做同口径仿真比较。对于关注 Wi-Fi 8 协调相对于"25%"UHR 宣传目标实际表现的人，场景相关结果（Co-BF 在共线几何下崩溃、Co-TDMA 使未协调邻居恶化 +130%）提供了务实的现实检验。它是 `mapc-cosr` 分箱的有力锚点条目，也是任何协调方案工作的天然先行技术参考。
