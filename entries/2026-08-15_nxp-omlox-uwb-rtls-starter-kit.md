---
id: 2026-08-15_nxp-omlox-uwb-rtls-starter-kit
date_published: 2026-03-25
date_found: 2026-08-15
type: industry-news
technology: uwb
title_en: "NXP omlox Starter Kit: Trimension SR048 + MCX W72 turnkey UWB RTLS on the open omlox Core Zone V2.1 stack"
title_zh: "NXP omlox 入门套件：基于 Trimension SR048 + MCX W72、运行开放 omlox Core Zone V2.1 协议栈的一站式 UWB RTLS"
url: "https://www.rfidnews.co.uk/index.php/2026/03/25/nxp-advances-real-time-industrial-positioning-with-new-omlox-starter-kit/"
source_quality: full
topics: [UWB, RTLS, omlox, Trimension, SR048, TDoA, DL-TDoA, industrial, interoperability]
topic_primary: uwb-ranging
topics_secondary: [uwb-fi-ra]
novelty_score: 1
---

## Summary (EN)
NXP announced (25 Mar 2026; covered by RFID News, eeNews Europe 6 Apr, Embedded, EEJournal) an **omlox Starter Kit** — a turnkey, standards-based UWB real-time location system (RTLS) for factories and warehouses. The kit pairs NXP's industrial-grade **Trimension SR048** UWB SoC (rated −40 °C to +115 °C, months of battery life per tag charge) with the **MCX W72** wireless MCU inside rechargeable wearable tags and anchors built by **SynchronicIT**, whose auto-topology location engine ships as an **omlox Core Zone V2.1** software stack. **Flowcate's DeepHub** middleware sits above it, turning raw positions into workflow analytics. Supported ranging modes are TDoA, round-trip time-of-flight (RToF) and downlink TDoA (DL-TDoA).

omlox is the open interoperability standard for industrial locating (hosted by PROFIBUS & PROFINET International); its Core Zone profile defines how UWB tags, anchors and location engines from different vendors interwork, and its hub API normalises positioning data for applications. NXP's pitch, via EVP Charles Dachs, is that an open stack turns RTLS "from a complex, proprietary undertaking into a straightforward solution" — the kit is a pre-integrated reference for asset tracking, AMR positioning, worker-safety zones and indoor navigation. Availability: pre-order through SynchronicIT. NXP cited ABI Research's 21% CAGR forecast for UWB-based RTLS (2025–2030).

Ingested late (March announcement) because the KB's UWB bin had no coverage of the omlox interop layer; the item is a product/ecosystem datapoint, not a technical advance.

## Summary (ZH)
NXP 宣布（2026 年 3 月 25 日；RFID News、eeNews Europe 4 月 6 日、Embedded、EEJournal 报道）推出 **omlox 入门套件**——面向工厂与仓库、基于开放标准的一站式 UWB 实时定位系统（RTLS）。套件把 NXP 工业级 **Trimension SR048** UWB SoC（−40 °C 至 +115 °C，标签单次充电可用数月）与 **MCX W72** 无线 MCU 集成在 **SynchronicIT** 制造的可充电可穿戴标签与锚点中，其自动拓扑定位引擎以 **omlox Core Zone V2.1** 软件栈形式交付；上层是 **Flowcate DeepHub** 中间件，把原始位置转化为工作流分析。支持的测距模式为 TDoA、往返飞行时间（RToF）与下行 TDoA（DL-TDoA）。

omlox 是工业定位的开放互操作标准（由 PROFIBUS & PROFINET International 托管）；其 Core Zone 规范定义不同厂商的 UWB 标签、锚点与定位引擎如何互通，hub API 为应用统一位置数据。NXP 执行副总裁 Charles Dachs 的表述是：开放协议栈把 RTLS "从复杂的专有工程变成直接可用的方案"——套件是资产跟踪、AMR 定位、工人安全区与室内导航的预集成参考。供货：通过 SynchronicIT 预订。NXP 引用 ABI Research 对 UWB RTLS 2025–2030 年 21% 复合增长率的预测。

由于 KB 的 UWB 类目此前没有 omlox 互操作层的覆盖，本条目延后收录（3 月发布）；属于产品/生态数据点，而非技术进展。

## Key technical points (EN)
- Silicon: Trimension SR048 industrial UWB SoC (−40…+115 °C) + MCX W72 wireless MCU; SynchronicIT rechargeable tags and anchors.
- Ranging modes: TDoA, RToF, DL-TDoA (tag-side positioning, scales to many tags).
- Stack: SynchronicIT auto-topology location engine as omlox Core Zone V2.1; Flowcate DeepHub middleware/analytics on top.
- Positioning: open omlox interop standard vs proprietary RTLS; pre-order via SynchronicIT.

## Key technical points (ZH)
- 芯片：Trimension SR048 工业级 UWB SoC（−40…+115 °C）+ MCX W72 无线 MCU；SynchronicIT 可充电标签与锚点。
- 测距模式：TDoA、RToF、DL-TDoA（标签侧定位，可扩展至大量标签）。
- 协议栈：SynchronicIT 自动拓扑定位引擎作为 omlox Core Zone V2.1；上层 Flowcate DeepHub 中间件/分析。
- 定位：开放 omlox 互操作标准对比专有 RTLS；通过 SynchronicIT 预订。

## Why it matters / what's new (EN)
The KB's UWB industrial coverage so far is single-vendor (Murata factory tracking, 2026-08-05) or maker-tier (Makerfabs MaUWB, 2026-08-09). This is the first entry naming **omlox** — the interoperability layer that plays for industrial RTLS the role FiRa plays for consumer ranging — and the first showing NXP packaging its industrial SR048 (rather than the automotive NCJ29D6 in the BMW entry) into a multi-vendor reference. It is also a practical counterpart to the AGILOX/Klagenfurt anchor-calibration paper ingested the same day: SynchronicIT's "auto-topology" engine is the commercial answer to the same anchor-survey problem.

## Why it matters / what's new (ZH)
KB 的 UWB 工业覆盖此前是单厂商（Murata 工厂跟踪，2026-08-05）或创客级（Makerfabs MaUWB，2026-08-09）。本条目首次出现 **omlox**——在工业 RTLS 中扮演 FiRa 在消费级测距中角色的互操作层——也是首次显示 NXP 把工业级 SR048（而非 BMW 条目中的车规 NCJ29D6）打包为多厂商参考方案。它还是同日收录的 AGILOX/克拉根福锚点标定论文的商业对照：SynchronicIT 的"自动拓扑"引擎正是同一锚点测绘问题的产品化答案。

## Images
![NXP omlox Starter Kit | NXP omlox 入门套件](https://rfidnews.b-cdn.net/2026/03/NXP.png?width=600&quality=85&format=auto)
