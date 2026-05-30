---
id: 2026-05-30_arxiv-5g-nr-ntn-survey-roadmap
date_published: 2026-01-08
date_found: 2026-05-30
type: academic-paper
title_en: "5G NR Non-Terrestrial Networks: From Early Results to the Road Ahead"
title_zh: "5G NR 非地面网络（NTN）：从早期结果到未来路线"
url: "https://arxiv.org/abs/2601.04882"
source_quality: full
topics: [NTN, 5G-NR, 3GPP, Rel-19, Rel-20, LEO, direct-to-device, ns-3]
topic_primary: sat-direct-device
topics_secondary: [leo-constellations]
technology: satellite
novelty_score: 3
---

## Summary (EN)
Figaro, Rossato, Giordani, Traspadini, Zorzi (University of Padova) and co-authors from Toyota/industry present a survey and forward roadmap of 3GPP 5G NR Non-Terrestrial Networks (NTN), tracing the standard from Release 18 through Release 20. Rather than a pure literature review, the paper anchors its analysis in ns-3 simulations validated against 3GPP calibration data, so the architectural claims come with quantitative backing across satellite configurations.

The survey walks the NTN evolution: Rel-17 established the baseline NR-NTN and NB-IoT/eMTC-NTN; Rel-18 refined coverage and mobility; Rel-19 (frozen end-2025) adds regenerative payloads (a full gNB on the satellite), store-and-forward operation for delay-tolerant IoT, and RedCap-over-NTN; and Rel-20 points toward deeper terrestrial/non-terrestrial integration and 6G. It synthesizes early real-world deployment findings against the simulated performance and lays out the open challenges — Doppler and propagation-delay handling, inter-satellite handovers, regenerative-payload complexity, and spectrum coexistence.

For the KB this is a strong anchor entry on the standards-and-architecture side of satellite-direct-to-device: it provides the 3GPP frame of reference that the KB's empirical Starlink-measurement and direct-to-device entries plug into, and it makes the case that NTN can supplement terrestrial infrastructure for underserved regions and emergency operations rather than replace it.

## Summary (ZH)
Figaro、Rossato、Giordani、Traspadini、Zorzi（帕多瓦大学）与来自丰田/业界的合作者，对 3GPP 5G NR 非地面网络（NTN）做了综述与前瞻路线梳理，追踪该标准从 Release 18 到 Release 20 的演进。本文并非纯文献综述，而是以经 3GPP 校准数据验证的 ns-3 仿真为支撑，使其架构论断在不同卫星配置下都有定量依据。

综述梳理了 NTN 的演进：Rel-17 确立 NR-NTN 与 NB-IoT/eMTC-NTN 基线；Rel-18 改进覆盖与移动性；Rel-19（2025 年底冻结）引入再生载荷（卫星上运行完整 gNB）、面向时延容忍 IoT 的存储转发（store-and-forward）以及 RedCap-over-NTN；Rel-20 则指向更深的地面/非地面融合与 6G。文章将早期真实部署结果与仿真性能相互印证，并列出开放挑战——多普勒与传播时延处理、星间切换、再生载荷复杂度、频谱共存。

对本知识库而言，这是卫星直连终端在标准与架构侧的有力锚点条目：它提供了 KB 中星链实测与直连终端经验性条目所依托的 3GPP 参照框架，并论证 NTN 可作为地面基础设施的补充（服务欠覆盖地区与应急），而非取代。

## Key technical points (EN)
- Survey + roadmap of 3GPP NR-NTN across Rel-18 → Rel-20, backed by ns-3 simulations validated to 3GPP calibration data.
- Rel-19 (frozen end-2025): regenerative payload (gNB on satellite), store-and-forward delay-tolerant IoT, RedCap-over-NTN.
- Covers early deployment results, satellite architectures, and integration of emerging tech.
- Open challenges: Doppler / propagation delay, inter-satellite handover, regenerative-payload complexity, spectrum coexistence.
- Positioning: NTN as a supplement to terrestrial coverage for remote/emergency use, not a replacement.

## Key technical points (ZH)
- 对 3GPP NR-NTN 从 Rel-18 到 Rel-20 的综述 + 路线，以经 3GPP 校准验证的 ns-3 仿真为支撑。
- Rel-19（2025 年底冻结）：再生载荷（卫星上 gNB）、存储转发时延容忍 IoT、RedCap-over-NTN。
- 涵盖早期部署结果、卫星架构与新兴技术融合。
- 开放挑战：多普勒/传播时延、星间切换、再生载荷复杂度、频谱共存。
- 定位：NTN 作为地面覆盖在偏远/应急场景的补充，而非替代。

## Why it matters / what's new (EN)
The KB's satellite entries skew empirical (Starlink crowdsourced measurements, queuing characterization, SafeSABR) and commercial (AST, Amazon Leo); this supplies the 3GPP standards spine they hang on, current through the Rel-19 freeze. The ns-3-validated-to-3GPP methodology distinguishes it from marketing-grade NTN overviews. It is the natural companion to `2026-02-23` (elevation-aware SUL for D2D) on the standards side.

## Why it matters / what's new (ZH)
KB 的卫星条目偏经验（星链众包实测、排队特性、SafeSABR）与商业（AST、Amazon Leo）；本文补上它们所依附的 3GPP 标准主干，且更新至 Rel-19 冻结。其"ns-3 仿真对齐 3GPP 校准"的方法使其区别于营销级 NTN 概述。它是 `2026-02-23`（面向 D2D 的仰角感知补充上行）在标准侧的天然搭档。
