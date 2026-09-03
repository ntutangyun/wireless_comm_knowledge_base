---
id: 2026-09-03_mssa-reference-architecture-2-regenerative-ntn
date_published: 2026-09-02
date_found: 2026-09-03
type: satellite-news
technology: satellite
title_en: "Mobile Satellite Services Association releases Reference Architecture 2.0 for regenerative NTN payloads sharing 5G NR and NB-IoT on the same platform"
title_zh: "移动卫星服务协会（MSSA）发布 2.0 版参考架构，面向同平台共享 5G NR 与 NB-IoT 的再生式 NTN 载荷"
url: "https://satnews.com/2026/09/02/mobile-satellite-services-association-releases-reference-architecture-2-0-for-regenerative-ntn-payloads/"
source_quality: partial
topics: [regenerative-payload, NTN, 3GPP-Release-17, 3GPP-Release-18, NB-IoT, 5G-NR, radio-unit-sharing, reference-architecture, MSSA, standards]
topic_primary: leo-constellations
topics_secondary: [sat-iot, sat-direct-device]
novelty_score: 2
---

## Summary (EN)
SatNews reported (2 September 2026) that the Mobile Satellite Services Association (MSSA), through its Technical Committee's Reference Architecture Working Group, published Version 2.0 of its Reference Architecture for satellite non-terrestrial networks (NTN). The article quotes Serge Legris, MSSA Technical Committee Vice Chair and CTO of Terrestar Solutions: "As NTN momentum accelerates, operators and enterprises are increasingly demanding greater choice, control, and continuity of user experience across terrestrial and non-terrestrial networks. Through the MSSA Reference Architecture, we are aligning the industry to enable interoperability across the entire value chain…including regenerative payloads and 5G NR and NB-IoT". Per the coverage, the document's stated purpose is to establish design guidance for **regenerative** satellite payloads — architectures that perform onboard demodulation, routing and signal processing rather than transparently relaying (bent-pipe) signals to the ground — specifically for platforms that must deliver concurrent 5G New Radio (NR) broadband service and Narrowband IoT (NB-IoT) service from the same constellation. Three technical areas are named: (1) **Radio Unit (RU) sharing** mechanisms letting a high-bandwidth 5G NR service and a low-power NB-IoT service use the same RF front-end and beamforming hardware; (2) **onboard power and processing trade-off** frameworks for balancing power draw, thermal dissipation and compute capacity for onboard baseband processing; and (3) interface definitions intended to align satellite payload design with **3GPP Release 17 and Release 18 NTN standards**. The available coverage does not describe what specifically changed relative to a prior Reference Architecture 1.0, does not name any operator or manufacturer adopting the document, and does not link to or quote the underlying MSSA document text directly, so this entry is logged as a reported summary of the announcement rather than a primary-source read of the architecture specification.

## Summary (ZH)
SatNews 于 2026 年 9 月 2 日报道，移动卫星服务协会（MSSA）通过其技术委员会下属的参考架构工作组，发布了面向卫星非地面网络（NTN）的 2.0 版参考架构。报道引述了 MSSA 技术委员会副主席、Terrestar Solutions 首席技术官 Serge Legris 的原话："随着 NTN 势头加速，运营商与企业客户越来越要求在地面网络与非地面网络之间获得更大的选择权、控制力以及用户体验的连续性。通过 MSSA 参考架构，我们正在推动全行业对齐，以实现覆盖整个价值链的互操作性……包括再生式载荷以及 5G NR 与 NB-IoT。"据报道，该文件的既定目的是为**再生式**卫星载荷——即在星上完成解调、路由与信号处理，而非透明转发（弯管式）信号到地面的架构——建立设计指南，具体针对须由同一星座同时提供 5G 新空口（NR）宽带服务与窄带物联网（NB-IoT）服务的平台。报道点名了三个技术方向：(1) **射频单元（RU）共享**机制，使高带宽的 5G NR 服务与低功耗的 NB-IoT 服务能够共用同一射频前端与波束成形硬件；(2) **星上功率与处理权衡**框架，用于平衡星上基带处理的功耗、散热与算力；(3) 旨在使卫星载荷设计与 **3GPP Release 17 与 Release 18 NTN 标准**对齐的接口定义。现有报道未说明相对此前 1.0 版参考架构具体变化了什么，未点名任何采用该文件的运营商或制造商，也未直接链接或引述 MSSA 文件原文，因此本条目按报道性摘要记录，而非对架构规范原文的一手解读。

## Key technical points (EN)
- **Publisher:** Mobile Satellite Services Association (MSSA), via its Technical Committee's Reference Architecture Working Group; document is Version 2.0.
- **Attributed commentary:** Serge Legris (MSSA Technical Committee Vice Chair; CTO, Terrestar Solutions), quoted by SatNews on aligning the industry "to enable interoperability across the entire value chain…including regenerative payloads and 5G NR and NB-IoT".
- **Scope named by the article:** regenerative (onboard demodulation/routing/processing) NTN payloads delivering concurrent 5G NR broadband and NB-IoT service from a shared constellation platform.
- **Three technical areas named:** (1) Radio Unit (RU) sharing between 5G NR and NB-IoT RF front-ends/beamforming; (2) onboard power/thermal/compute trade-off frameworks for baseband processing; (3) interface definitions aligning payload design with 3GPP Release 17/18 NTN.
- **Sourcing caveat:** no direct link to or excerpt from the MSSA Reference Architecture 2.0 document itself was located this run; no named adopting operator/manufacturer; no description of the delta versus Reference Architecture 1.0. Logged source_quality: partial pending a primary-document read.

## Key technical points (ZH)
- **发布方：** 移动卫星服务协会（MSSA），经由其技术委员会下属的参考架构工作组发布；文件版本为 2.0。
- **相关表态：** Serge Legris（MSSA 技术委员会副主席、Terrestar Solutions 首席技术官）——据 SatNews 引述，MSSA 参考架构旨在推动全行业对齐，"以实现覆盖整个价值链的互操作性……包括再生式载荷以及 5G NR 与 NB-IoT"。
- **报道所述范围：** 面向由同一星座平台同时提供 5G NR 宽带服务与 NB-IoT 服务的再生式（星上解调/路由/处理）NTN 载荷。
- **报道点名的三个技术方向：** (1) 5G NR 与 NB-IoT 之间射频前端/波束成形硬件的射频单元（RU）共享；(2) 星上基带处理的功耗/散热/算力权衡框架；(3) 使载荷设计与 3GPP Release 17/18 NTN 标准对齐的接口定义。
- **信源说明：** 本次检索未查得可直接链接或引述的 MSSA 参考架构 2.0 文件原文；未点名任何采用该文件的运营商或制造商；也未说明相对 1.0 版参考架构的具体变化。因此标记 source_quality: partial，待日后以一手文件核实。

## Why it matters / what's new (EN)
This knowledge base's LEO-constellation and satellite direct-to-device coverage has so far treated regenerative-vs-bent-pipe payload architecture mainly through vendor product announcements (e.g. MDA Space's AURORA line, referenced in the 2026-08-05 Telesat-Lightspeed entry) and individual operator constellation filings (Equatys, Elveo). This is the first entry sourced from an **industry-association standards/reference-architecture document** rather than a single vendor or operator, and the first to name RU sharing between a broadband (5G NR) and a low-power (NB-IoT) service on one payload as an explicit design problem — a combination the existing direct-to-device entries here have so far treated as separate service tracks rather than a shared-hardware engineering question. Given the thin sourcing (no primary document located), this entry should be treated as a pointer to read the actual Reference Architecture 2.0 text if MSSA publishes or licenses it.

## Why it matters / what's new (ZH)
本知识库的 LEO 星座与卫星直连终端板块此前对"再生式 vs 弯管式"载荷架构的覆盖，主要来自厂商产品发布（如 2026-08-05 Telesat-Lightspeed 条目中提及的 MDA Space AURORA 产品线）与单一运营商的星座申报（Equatys、Elveo）。本条目是首个信源来自**行业协会标准/参考架构文件**、而非单一厂商或运营商的条目，也是首个明确将"宽带（5G NR）与低功耗（NB-IoT）服务在同一载荷上共享 RU"点名为一项设计问题的条目——该板块此前的 D2D 相关条目大多将这两类服务视为彼此独立的业务轨道，而非一个共享硬件的工程问题。鉴于信源较薄弱（未查得一手文件），本条目应视为提示：待 MSSA 公开或授权该文件文本后，再做一手解读。
