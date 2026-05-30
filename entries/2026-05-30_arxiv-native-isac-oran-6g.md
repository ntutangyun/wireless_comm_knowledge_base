---
id: 2026-05-30_arxiv-native-isac-oran-6g
date_published: 2026-03-04
date_found: 2026-05-30
type: academic-paper
title_en: "Toward Native ISAC Support in O-RAN Architectures for 6G"
title_zh: "面向 6G 的 O-RAN 架构原生 ISAC 支持"
url: "https://arxiv.org/abs/2603.03607"
source_quality: full
topics: [ISAC, O-RAN, 6G, monostatic-sensing, E2SM, dApp, RIC, full-duplex]
topic_primary: open-ran
topics_secondary: [6g-vision]
technology: cellular
novelty_score: 4
---

## Summary (EN)
Baena, Krishnan, Vu, Zussman, and Koutsonikolas (Columbia / Tufts and collaborators) show that today's O-RAN specification has no architectural hooks for Integrated Sensing and Communication (ISAC), and propose three concrete extensions to add native monostatic sensing — where transmit and receive are co-located at the base station — to the open-RAN control loop. The gap they identify is specific: no O-RAN service model exposes physical-layer observables, no execution framework supports sub-millisecond sensing tasks, and the Open Fronthaul cannot correlate a transmitted waveform with its reflection.

Their three extensions map cleanly onto the O-RAN architecture. (1) Sensing **dApps at the O-DU** process raw IQ samples to extract delay, Doppler, and angular features close to the radio, where latency budgets are tight. (2) A new **E2SM-SENS** service model lets xApps in the Near-RT RIC subscribe to sensing telemetry at configurable periodicity, so sensing becomes a first-class, schedulable RIC data stream. (3) **Open Fronthaul metadata** enhancements associate transmitted waveforms with their received echoes, which monostatic sensing fundamentally requires. Sensing telemetry then flows up through the RIC/SMO like any other O-RAN measurement.

A prototype using beamforming and full-duplex operation demonstrated closed-loop control with median end-to-end latency suitable for near-real-time sensing, and the authors argue the design extends naturally to bistatic and cooperative multi-node sensing. The work is one of the clearest blueprints to date for making ISAC a native O-RAN capability rather than a bolt-on.

## Summary (ZH)
Baena、Krishnan、Vu、Zussman 与 Koutsonikolas（哥伦比亚大学/塔夫茨大学及合作者）指出，当前 O-RAN 规范缺乏支持通信感知一体化（ISAC）的架构钩子，并提出三项具体扩展，将原生的单基地感知（收发在基站同址）引入开放 RAN 控制环。他们识别出的缺口很具体：没有 O-RAN 服务模型暴露物理层可观测量，没有执行框架支持亚毫秒级感知任务，开放前传也无法将发射波形与其反射相关联。

三项扩展与 O-RAN 架构清晰对应：(1) **O-DU 上的感知 dApp** 在靠近射频、时延预算紧张处处理原始 IQ 样本，提取时延、多普勒与角度特征；(2) 新的 **E2SM-SENS** 服务模型让 Near-RT RIC 中的 xApp 以可配置周期订阅感知遥测，使感知成为一等、可调度的 RIC 数据流；(3) **开放前传元数据** 增强将发射波形与接收回波关联——这是单基地感知的根本需求。感知遥测随后像其他 O-RAN 测量一样上送至 RIC/SMO。

采用波束成形与全双工的原型演示了闭环控制，端到端中位时延适合近实时感知；作者认为该设计可自然扩展到双基地与协作多节点感知。该工作是迄今将 ISAC 做成 O-RAN 原生能力（而非外挂）的最清晰蓝图之一。

## Key technical points (EN)
- Identifies the O-RAN ISAC gap: no PHY-observable service model, no sub-ms sensing execution, no fronthaul waveform↔echo correlation.
- Extension 1 — Sensing dApps at O-DU: extract delay/Doppler/angle from IQ near the radio.
- Extension 2 — E2SM-SENS service model: xApps subscribe to sensing telemetry at configurable periodicity in the Near-RT RIC.
- Extension 3 — Open Fronthaul metadata to associate transmitted waveforms with received echoes (monostatic requirement).
- Prototype: beamforming + full-duplex closed-loop control, near-real-time median latency; extensible to bistatic/cooperative.

## Key technical points (ZH)
- 指出 O-RAN 的 ISAC 缺口：无 PHY 可观测服务模型、无亚毫秒感知执行、前传无波形↔回波关联。
- 扩展 1——O-DU 感知 dApp：在靠近射频处从 IQ 提取时延/多普勒/角度。
- 扩展 2——E2SM-SENS 服务模型：Near-RT RIC 中 xApp 以可配置周期订阅感知遥测。
- 扩展 3——开放前传元数据，关联发射波形与接收回波（单基地需求）。
- 原型：波束成形 + 全双工闭环控制，近实时中位时延；可扩展至双基地/协作。

## Why it matters / what's new (EN)
The KB's cellular bin is rich in O-RAN AI/agentic control (AIIM, MORPH, GENESIS, ARIADNE) but had no ISAC-in-O-RAN entry; this fills it with a precise, prototyped architecture. The E2SM-SENS service model is the transferable idea — it makes sensing a schedulable RIC stream alongside KPM, which is exactly how the KB's xApp entries treat performance telemetry. Strong bridge between the 6G-ISAC vision and the open-RAN control plane.

## Why it matters / what's new (ZH)
KB 的蜂窝分箱在 O-RAN AI/智能体控制方面已很丰富（AIIM、MORPH、GENESIS、ARIADNE），但缺少 O-RAN 内 ISAC 条目；本文以精确、已原型化的架构补上。E2SM-SENS 服务模型是可迁移的思想——它使感知像 KPM 一样成为可调度的 RIC 数据流，这正是 KB 中 xApp 条目处理性能遥测的方式。是 6G-ISAC 愿景与开放 RAN 控制面之间的有力桥梁。
