---
id: 2026-09-17_arxiv-fr3-beam-management-effort-6g
date_published: 2026-09-15
date_found: 2026-09-17
type: academic-paper
technology: cellular
title_en: "The Price of the Golden 6G Band: Evaluation of Beam Management Effort in FR3"
title_zh: "6G「黄金频段」的代价：FR3 波束管理开销评估"
url: "https://arxiv.org/abs/2609.16839"
source_quality: full
topics: [FR3, upper-midband, beam-management, 6G, antenna-array, ray-tracing, gNB-handover]
topic_primary: 6g-vision
topics_secondary: [cellular-spectrum]
novelty_score: 3
---

## Summary (EN)

This paper (Clémence Altmeyerhenzien, Ljiljana Simić, Marina Petrova; RWTH Aachen University) studies Frequency Range 3 (FR3, 7.125-24.25 GHz) — dubbed the "golden band" for 6G because it offers more favorable propagation than FR2 while providing much wider bandwidth than FR1. The authors note that reusing existing FR1 infrastructure for FR3 deployments requires gNodeBs (gNBs) to use antenna arrays and beam management, which has proven difficult at FR2, and that prior FR3 studies assumed ideal beamforming without quantifying this beam management effort. The paper states it presents "the first comprehensive evaluation of beam management effort in FR3."

The authors model a downlink cellular network of 8 gNBs over a 600m x 600m study area in Frankfurt, using ray-tracing (Wireless Insite) over an OpenStreetMap-derived urban model, at three candidate FR3 carrier frequencies (8, 15, 18 GHz), with 2.1 GHz (FR1) and 28 GHz (FR2) as baselines. gNBs use 3-sector panels with codebook-based beamforming per 3GPP specifications, with antenna array sizes and codebook beam counts scaled per band to achieve FR1-equivalent coverage. UE mobility is modeled both via a single example path and via 2,000 Monte Carlo pedestrian paths generated with the commercial VisWalk simulator.

The results show that achieving 95% coverage comparable to FR1 requires a 2x2 array at 8 GHz, 4x4 at 15 GHz, and 6x6 at 18 GHz (28 GHz cannot reach this coverage even with an 8x8 array). FR3/FR2 bands achieve about 5 dB higher SINR for the median user than FR1 due to directional-beam interference reduction, and FR3 networks deliver over 100 Mbps to more than 92% of UE locations. However, the number of valid beams satisfying a given SINR threshold, as a proportion of the full codebook, decreases as frequency increases (e.g., at a 10 dB SINR threshold, 22% of the codebook is valid at 8 GHz versus 8% at 28 GHz), indicating tighter beam alignment requirements at higher frequencies. In the mobility scenario, average gNB handover rates are comparable across bands (~0.026-0.029 handovers/m), and average beam-switch rates rise with frequency (0.04, 0.05, 0.06, 0.08 beam-switches/m at 8, 15, 18, 28 GHz respectively), with median/upper-quartile steering distances of 1 and 2-3 beams across all FR3/FR2 bands. The paper concludes that while FR3 easily outperforms FR1 mobile data rates, achieving both high and stable throughput requires beam management effort comparable to FR2 across all evaluated FR3 bands, motivating frequency-adaptive beam management strategies for spectrum-agile 6G.

## Summary (ZH)

本文（Clémence Altmeyerhenzien、Ljiljana Simić、Marina Petrova；德国亚琛工业大学 RWTH Aachen）研究频率范围三（FR3，7.125-24.25 GHz）——因其传播特性优于 FR2、带宽又远大于 FR1，被称为 6G 的"黄金频段"。作者指出，若要在 FR3 部署中复用现有 FR1 基础设施，gNodeB（gNB）需要采用天线阵列并执行波束管理，而这在 FR2 已被证明颇具挑战；此前的 FR3 研究均假设理想波束成形，未量化这一波束管理开销。论文明确指出这是"对 FR3 波束管理开销的首次全面评估"。

作者以法兰克福一处 600m x 600m 研究区域内的 8 个 gNB 组成的下行蜂窝网络为对象，基于 OpenStreetMap 城市模型使用射线追踪（Wireless Insite）建模，评估三个候选 FR3 载频（8、15、18 GHz），并以 2.1 GHz（FR1）与 28 GHz（FR2）作为基线。gNB 配备符合 3GPP 规范的基于码本的三扇区波束成形，天线阵列规模与码本波束数按频段调整，以达到与 FR1 相当的覆盖。用户移动性通过一条示例路径以及使用商用软件 VisWalk 生成的 2000 条蒙特卡洛行人路径建模。

结果显示，要达到与 FR1 相当的 95% 覆盖率，8 GHz 需要 2x2 阵列，15 GHz 需要 4x4 阵列，18 GHz 需要 6x6 阵列（而 28 GHz 即使使用 8x8 阵列也无法达到该覆盖水平）。得益于定向波束带来的空间干扰抑制，FR3/FR2 频段在中位用户上的 SINR 比 FR1 高约 5 dB，FR3 网络能为超过 92% 的用户位置提供超过 100 Mbps 的速率。然而，满足给定 SINR 门限的有效波束数占整个码本的比例随频率升高而下降（例如在 10 dB SINR 门限下，8 GHz 频段有 22% 的码本有效，而 28 GHz 仅为 8%），说明更高频段对波束对齐的要求更为严格。在移动场景中，各频段的平均 gNB 切换率相近（约 0.026-0.029 次/米），而平均波束切换率随频率升高而上升（8、15、18、28 GHz 分别为 0.04、0.05、0.06、0.08 次/米），且所有 FR3/FR2 频段的波束转向距离中位数/上四分位数均为 1 和 2-3 个波束。论文总结认为，尽管 FR3 的移动数据速率明显优于 FR1，但要同时获得高且稳定的吞吐量，在所评估的所有 FR3 频段上都需要与 FR2 相当的波束管理开销，这促使 6G 需要针对频谱敏捷场景开发面向不同频段自适应的波束管理策略。

## Key technical points (EN)

- **Setup**: 8-gNB downlink network over a 600m x 600m Frankfurt study area, ray-traced with Wireless Insite; candidate FR3 frequencies 8/15/18 GHz vs. FR1 (2.1 GHz) and FR2 (28 GHz) baselines; 3GPP codebook-based beamforming, per-band antenna array sized for FR1-equivalent coverage (2x2 to 8x8).
- **Mobility model**: one illustrative UE path plus 2,000 Monte Carlo pedestrian paths from the VisWalk simulator.
- **Coverage requirement**: 95% FR1-equivalent coverage needs 2x2 (8 GHz) / 4x4 (15 GHz) / 6x6 (18 GHz) arrays; 28 GHz cannot reach this coverage even at 8x8.
- **Valid-beam proportion**: decreases with frequency (e.g. 22% of codebook valid at 8 GHz vs. 8% at 28 GHz for a 10 dB SINR threshold), indicating stricter alignment requirements at higher frequencies even though the raw number of valid beams rises.
- **Mobility results**: gNB handover rates comparable across bands (~0.026-0.029/m); beam-switch rates increase with frequency (0.04-0.08/m from 8 to 28 GHz); median/upper-quartile beam steering distance of 1 and 2-3 beams is similar across FR3/FR2.
- **Headline conclusion (authors' own framing)**: the paper states it is "the first quantitative evaluation of beam management effort" across the FR3 "golden band," finding beam tracking is more relaxed at lower FR3 frequencies (wider beams) but non-adjacent beam switching occurs at a comparable rate to FR2.

## Key technical points (ZH)

- **实验设置**：以法兰克福 600m x 600m 区域内 8 个 gNB 组成的下行网络为对象，使用 Wireless Insite 进行射线追踪；候选 FR3 频率为 8/15/18 GHz，基线为 FR1（2.1 GHz）与 FR2（28 GHz）；采用符合 3GPP 规范的基于码本的波束成形，各频段天线阵列规模按达到 FR1 等效覆盖需求调整（2x2 至 8x8）。
- **移动性模型**：一条示例 UE 路径，外加使用 VisWalk 模拟器生成的 2000 条蒙特卡洛行人路径。
- **覆盖需求**：达到与 FR1 相当的 95% 覆盖率，8 GHz 需 2x2 阵列，15 GHz 需 4x4 阵列，18 GHz 需 6x6 阵列；28 GHz 即使使用 8x8 阵列也无法达到该覆盖水平。
- **有效波束占比**：随频率升高而下降（例如在 10 dB SINR 门限下，8 GHz 码本中有 22% 有效，28 GHz 仅为 8%），说明尽管有效波束绝对数量随频率上升，但更高频段对波束对齐的要求更严格。
- **移动性结果**：各频段的 gNB 切换率相近（约 0.026-0.029 次/米）；波束切换率随频率升高而上升（8 至 28 GHz 为 0.04-0.08 次/米）；FR3 与 FR2 各频段的波束转向距离中位数/上四分位数（1 和 2-3 个波束）相近。
- **核心结论（作者自陈）**：论文称这是"对 FR3 黄金频段波束管理开销的首次量化评估"，发现较低 FR3 频段的波束跟踪要求更宽松（波束更宽），但非相邻波束切换的发生率与 FR2 相当。

## Why it matters / what's new (EN)

The KB's existing FR3 coverage focuses on spectrum sharing (`2026-06-13_arxiv-fr3-terrestrial-ntn-spectrum-sharing`) and mixer-first receiver front-end trade-offs (`2026-08-29_arxiv-fr3-mixer-first-receiver-tradeoffs`); this paper instead directly measures the operational beam management overhead — handover rates, beam-switch rates, and beam steering distances — needed to actually exploit FR3's bandwidth advantage in a mobile network, using realistic urban ray-tracing rather than the idealized-beamforming assumption used in prior FR3 throughput/coverage studies the authors cite.

## Why it matters / what's new (ZH)

知识库现有的 FR3 相关条目聚焦于频谱共享（`2026-06-13_arxiv-fr3-terrestrial-ntn-spectrum-sharing`）与混频器优先接收机前端权衡（`2026-08-29_arxiv-fr3-mixer-first-receiver-tradeoffs`）；本文则直接测量在移动网络中实际利用 FR3 带宽优势所需的运行时波束管理开销——包括切换率、波束切换率与波束转向距离，采用真实城市射线追踪，而非此前 FR3 吞吐量/覆盖研究中所采用的理想波束成形假设。

## Images

![Distribution of beam steering distance per beam-switch event across FR3 and FR2 bands | 各 FR3/FR2 频段下每次波束切换的转向距离分布](https://arxiv.org/html/2609.16839v1/steering_distance_boxplot2.png)
