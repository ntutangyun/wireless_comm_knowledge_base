---
id: 2026-07-07_ericsson-6g-ran-standardization-decisions
date_published: 2026-06-12
date_found: 2026-07-07
type: industry-news
technology: cellular
title_en: "Ericsson Readout: 3GPP Locks First 6G RAN Design Decisions — CP-OFDM Waveform, CU/DU Split Option, P2P Core Connectivity, Specs by End-2028"
title_zh: "爱立信解读：3GPP 敲定首批 6G RAN 设计决策——CP-OFDM 波形、CU/DU 切分选项、点对点核心网连接、2028 年底出规范"
url: "https://www.ericsson.com/en/blog/2026/6/6g-standardization-key-milestones-and-ran-decisions"
source_quality: full
topics: [6G, 3GPP, Release-21, O-RAN, waveform]
topic_primary: 6g-vision
topics_secondary: [open-ran, cellular-spectrum]
novelty_score: 3
---

## Summary (EN)

This Ericsson RAN-standardization readout (Chen Larsson, Blasco, Emanuelsson; published 12 June 2026) documents the first concrete air-interface and architecture decisions for 6G taken in 3GPP, crystallized at the June 2026 plenary meetings in Singapore. It is the clearest public record so far of what the 6G radio will actually look like at the specification level, moving the 6G discussion from vision papers to locked engineering choices.

On the air interface: the 6G downlink will use CP-OFDM, and the uplink will support both CP-OFDM and DFT-s-OFDM — a direct continuation of the 5G NR waveform family rather than any of the post-OFDM candidates (OTFS, filtered multicarrier) long discussed in academia. Channel bandwidths will span 3 MHz to 400 MHz (vs 100 MHz max mid-band in 5G), uniform QAM stays as the baseline modulation, and channel coding largely reuses 5G's codes with minor enhancements. Reference-signal design is studying longer periodicities so base stations can shut down longer for energy saving.

On architecture: two base-station design options were approved — a single unified unit, or a higher-layer split into CU and DU as in 5G. A lower-layer split (the multi-vendor interface toward the radio unit) will be defined only schematically in 3GPP, with the details delegated to the O-RAN Alliance — whose own 6G work started February 2026 and tracks 3GPP with a 3–6 month lag. Base-station-to-core connectivity moves to a point-to-point design. The timeline: Release 20 study phases conclude by Q1–Q2 2027, Release 21 specification work runs March 2027 through late 2028, with first 6G specifications ready by early 2029 after a final review quarter.

## Summary (ZH)

这篇爱立信 RAN 标准化解读（Chen Larsson、Blasco、Emanuelsson；2026 年 6 月 12 日发布）记录了 3GPP 为 6G 做出的首批具体空口与架构决策，这些决策在 2026 年 6 月新加坡全会上定型。这是迄今关于 6G 无线接口在规范层面将是什么样子的最清晰公开记录，把 6G 讨论从愿景论文推进到已锁定的工程选择。

空口方面：6G 下行将采用 CP-OFDM，上行同时支持 CP-OFDM 与 DFT-s-OFDM——直接延续 5G NR 波形家族，而非学界长期讨论的后 OFDM 候选（OTFS、滤波多载波等）。信道带宽将覆盖 3 MHz 至 400 MHz（5G 中频段最大 100 MHz），均匀 QAM 保持为基线调制，信道编码基本复用 5G 编码并做少量增强。参考信号设计正在研究更长的周期，使基站能更长时间关断以节能。

架构方面：批准了两种基站设计选项——单一一体化单元，或与 5G 类似的 CU/DU 高层切分。低层切分（面向射频单元的多厂商接口）在 3GPP 只做示意性定义，细节委托给 O-RAN 联盟——后者自身的 6G 工作于 2026 年 2 月启动，与 3GPP 保持 3–6 个月的滞后跟进。基站与核心网的连接转向点对点设计。时间线：Release 20 研究阶段 2027 年 Q1–Q2 结束，Release 21 规范工作从 2027 年 3 月持续到 2028 年底，首批 6G 规范经最后一个季度的审校后于 2029 年初就绪。

## Key technical points (EN)

- Waveform locked: CP-OFDM downlink; CP-OFDM + DFT-s-OFDM uplink — evolutionary continuity with 5G NR, post-OFDM candidates rejected for Release 21.
- Bandwidth range 3–400 MHz (5G mid-band capped at 100 MHz); uniform QAM baseline; channel coding largely reused from 5G.
- Reference signals studying longer periodicities for deeper base-station sleep (energy saving as a first-class design input).
- Two approved BS architectures: unified unit, or CU/DU higher-layer split; lower-layer split defined schematically in 3GPP with details owned by the O-RAN Alliance.
- 6G core connectivity: point-to-point design between base stations and core network functions.
- Timeline: Rel-20 studies close Q1–Q2 2027; Rel-21 spec work Mar 2027 → late 2028; first 6G specs early 2029; O-RAN Alliance 6G work (started Feb 2026) trails 3GPP by 3–6 months.
- Decisions crystallized at the June 2026 3GPP plenaries in Singapore.

## Key technical points (ZH)

- 波形已锁定：下行 CP-OFDM；上行 CP-OFDM + DFT-s-OFDM——与 5G NR 演进式延续，后 OFDM 候选方案未进入 Release 21。
- 带宽范围 3–400 MHz（5G 中频段上限 100 MHz）；均匀 QAM 为基线；信道编码基本复用 5G。
- 参考信号研究更长周期，支持基站更深度休眠（节能成为一等设计输入）。
- 两种获批基站架构：一体化单元，或 CU/DU 高层切分；低层切分在 3GPP 仅示意性定义，细节由 O-RAN 联盟负责。
- 6G 核心网连接：基站与核心网功能间采用点对点设计。
- 时间线：Rel-20 研究 2027 年 Q1–Q2 结束；Rel-21 规范工作 2027 年 3 月至 2028 年底；首批 6G 规范 2029 年初；O-RAN 联盟 6G 工作（2026 年 2 月启动）滞后 3GPP 3–6 个月。
- 决策在 2026 年 6 月新加坡 3GPP 全会定型。

## Why it matters / what's new (EN)

The 6g-vision bin has tracked 6G *proposals* — AI-native air-interface studies (2026-07-03_arxiv-ai-native-6g-air-interface-3gpp), MWC vision keynotes (2026-05 entries) — but this is the first entry recording *ratified 3GPP design decisions* for the 6G RAN: waveform, bandwidth range, architecture split options, core connectivity model, and a committed Release 21 schedule. The waveform decision in particular retires a decade of academic post-OFDM speculation for this generation, and the explicit 3GPP→O-RAN Alliance division of labor on the lower-layer split confirms open fronthaul as an institutionalized part of 6G rather than a 5G-era add-on. Future 6G entries in this KB can now be read against these fixed points.

## Why it matters / what's new (ZH)

6g-vision 分类此前跟踪的是 6G *提案*——AI 原生空口研究（2026-07-03_arxiv-ai-native-6g-air-interface-3gpp）、MWC 愿景主旨演讲（2026-05 条目）——而本条目首次记录 6G RAN 的*已批准 3GPP 设计决策*：波形、带宽范围、架构切分选项、核心网连接模型及已承诺的 Release 21 时间表。波形决策尤其为这一代终结了学界十年的后 OFDM 推演；3GPP 与 O-RAN 联盟在低层切分上的明确分工，确认开放前传已成为 6G 的制度化组成部分而非 5G 时代的附加项。本 KB 未来的 6G 条目可以对照这些定点来解读。
