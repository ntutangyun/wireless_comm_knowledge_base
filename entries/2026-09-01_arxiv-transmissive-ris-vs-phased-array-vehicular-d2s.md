---
id: 2026-09-01_arxiv-transmissive-ris-vs-phased-array-vehicular-d2s
date_published: 2026-08-29
date_found: 2026-09-01
type: academic-paper
technology: satellite
title_en: "Transmissive-RIS vs. phased arrays for vehicular direct-to-satellite terminals (SnT Luxembourg / Oulu CWC-RE): design maps show passive RIS wins on power efficiency and aperture scalability, phased arrays keep the edge on gain, tracking speed and multi-beam handover"
title_zh: "透射式 RIS 与相控阵在车载直连卫星终端上的对比（卢森堡 SnT / 奥卢大学 CWC-RE）：设计图谱显示无源 RIS 在功耗效率与孔径可扩展性上占优，相控阵在增益、跟踪速度与多波束切换上仍保持优势"
url: "https://arxiv.org/abs/2608.29424"
source_quality: full
topics: [reconfigurable-intelligent-surface, transmissive-RIS, phased-array, vehicular-terminal, direct-to-satellite, D2S, antenna-architecture, beam-tracking, link-budget]
topic_primary: sat-direct-device
topics_secondary: [leo-constellations]
novelty_score: 2
---

## Summary (EN)
Khan, Abdullah, Vazquez-Peralvo and Lagunas (SnT, University of Luxembourg) with Ullah (CWC-RE, University of Oulu), funded by Luxembourg's FNR VARRAY-5G project, publish a comparative-design article rather than a new experimental result: it sets transmissive reconfigurable intelligent surfaces (RIS) — passive and active variants — against electronically steered phased arrays (analog, hybrid and fully digital) as candidate antenna architectures for **vehicular direct-to-satellite (D2S) terminals**, i.e. a rooftop-mounted aperture that must maintain a link to a moving LEO/MEO/GEO satellite from a moving vehicle.

Rather than declaring a winner, the paper builds quantitative "design maps" from published prototypes: phased arrays reach 26-30.5 dBi gain from 64-256 elements with +/-45 to +/-53 degree scanning at watt-to-tens-of-watts power draw; passive RIS reaches 19-22 dBi from 196-256 unit cells on single-digit watts of PIN-diode bias power with wider +/-60-degree steering but no signal amplification; active RIS sits between them — 8.5 dB/element to 12.2 dBi with modest amplification, at higher power and thermal cost than passive RIS but still well below a phased array, and currently limited to small 4x4-4x8 apertures. The conclusion the authors draw is architectural fit rather than superiority: passive RIS is attractive where the terminal power budget is the binding constraint and only a single beam is needed; active RIS partially closes the link-budget gap without a full per-element RF chain; phased arrays remain the choice where high gain, fast electronic steering under vehicle mobility, and multi-beam operation (e.g. simultaneous dual-satellite connectivity for seamless handover) are required.

## Summary (ZH)
Khan、Abdullah、Vazquez-Peralvo 与 Lagunas（卢森堡大学 SnT）联合 Ullah（奥卢大学 CWC-RE），在卢森堡国家研究基金 VARRAY-5G 项目资助下，发表一篇比较性设计文章而非新的实验结果：文章将透射式可重构智能表面（RIS，含无源与有源两种变体）与电子扫描相控阵（模拟、混合、全数字三种）作为**车载直连卫星（D2S）终端**——即安装于车顶、须在车辆移动中保持与移动 LEO/MEO/GEO 卫星链路的孔径——的候选天线架构进行对比。

论文并未直接给出胜负结论，而是基于已发表原型构建定量"设计图谱"：相控阵以 64-256 阵元实现 26-30.5 dBi 增益，扫描范围 ±45 至 ±53 度，功耗在瓦级到数十瓦级；无源 RIS 以 196-256 个单元实现 19-22 dBi 增益，PIN 二极管偏置功耗仅个位数瓦，扫描范围更宽（±60 度）但无信号放大能力；有源 RIS 介于两者之间——每阵元 8.5 dB 至 12.2 dBi，具备适度放大能力，功耗与散热成本高于无源 RIS 但仍远低于相控阵，且目前受限于 4x4 至 4x8 的小孔径。作者给出的结论是架构适配而非绝对优劣：当终端功耗预算是主要约束且仅需单波束时，无源 RIS 具有吸引力；有源 RIS 可在不引入完整逐阵元射频链路的前提下部分弥补链路预算差距；而在需要高增益、车辆移动下的快速电子扫描以及多波束操作（例如同时连接两颗卫星以实现无缝切换）的场景中，相控阵仍是首选。

## Key technical points (EN)
- **Scope:** comparative design/tutorial article, not new prototype data — synthesizes published measurements into quantitative design maps rather than proposing a new architecture.
- **Architectures compared:** passive transmissive RIS, active transmissive RIS, and phased arrays (analog / hybrid / fully digital variants).
- **Phased array prototypes surveyed:** 26-30.5 dBi gain, 64-256 elements, +/-45 to +/-53 degree scan range, 50-303 K noise temperature, power draw from 1.8V/5.7A up to 15V rails (not all cases reported).
- **Passive RIS prototypes surveyed:** 19-22 dBi gain, 196-256 unit cells, 4.3-8.7 W (PIN diode bias), +/-60 degree scan range, 16.7-22 dB sidelobe levels.
- **Active RIS prototypes surveyed:** 8.5 dB/element to 12.2 dBi, 0.66 W to an estimated tens of watts, +/-10 to +/-30 degree effective scan, small 4x4-4x8 apertures.
- **Vehicular constraint context:** commercial rooftop terminal footprints of ~40-60 cm x 30-40 cm, 4-8 cm profile height, bounding what any of the three architectures can physically fit.
- **Design-map figures:** ordinal (not absolute) plots of (a) relative received-power improvement vs. power consumption, (b) beam-steering range vs. power consumption, (c) aperture scalability vs. hardware complexity, positioning all three architectures in one comparative space.
- **Conclusion framing:** passive RIS for low-power, single-beam, large-aperture coverage shaping; active RIS as an intermediate link-budget bridge; phased arrays for high gain, fast tracking and multi-beam dual-connectivity/handover.

## Key technical points (ZH)
- **范围：** 比较性设计/教程类文章，非新原型实测数据——将已发表测量结果整合为定量设计图谱，而非提出新架构。
- **对比架构：** 无源透射式 RIS、有源透射式 RIS，以及相控阵（模拟/混合/全数字三种变体）。
- **调研的相控阵原型：** 增益 26-30.5 dBi，64-256 阵元，扫描范围 ±45 至 ±53 度，噪声温度 50-303 K，功耗自 1.8V/5.7A 至 15V 电源轨（部分案例未报告）。
- **调研的无源 RIS 原型：** 增益 19-22 dBi，196-256 个单元，PIN 二极管偏置功耗 4.3-8.7 W，扫描范围 ±60 度，旁瓣电平 16.7-22 dB。
- **调研的有源 RIS 原型：** 每阵元 8.5 dB 至 12.2 dBi，功耗 0.66 W 至预估数十瓦，有效扫描范围 ±10 至 ±30 度，孔径较小（4x4 至 4x8）。
- **车载约束背景：** 商用车顶终端外形约 40-60 cm x 30-40 cm，厚度 4-8 cm，限定了三种架构在物理上的可行空间。
- **设计图谱：** 以序数（非绝对数值）方式绘制 (a) 相对接收功率提升与功耗的关系、(b) 波束扫描范围与功耗的关系、(c) 孔径可扩展性与硬件复杂度的关系，将三种架构定位在同一比较空间中。
- **结论框架：** 无源 RIS 适合低功耗、单波束、大孔径覆盖整形场景；有源 RIS 作为链路预算的中间过渡方案；相控阵适合需要高增益、车辆移动下快速跟踪、多波束双连接/切换的场景。

## Why it matters / what's new (EN)
The KB's RIS-and-satellite entries so far have been about RIS *inside the network* — RIS-assisted LEO ISAC radio orchestration (08-27) — not RIS as the antenna at the user terminal. This is the first entry to frame RIS as a direct competitor to phased arrays at the vehicular D2S terminal itself, and its honest framing (a design map, not a winner) is more useful to the KB's D2D/D2S thread than a single-technology proposal would be: it gives a concrete power/gain/steering-range budget against which any future D2S terminal claim — whether RIS-based or phased-array-based — can be checked. The paper is explicitly not a source of new performance numbers; its value is the tabulated survey of prototype-level tradeoffs and the framing of "operating regime" rather than "which technology wins" as the right question for terminal designers.

## Why it matters / what's new (ZH)
知识库此前的 RIS 与卫星相关条目关注的是*网络内部*的 RIS——例如 RIS 辅助的 LEO ISAC 无线电编排（08-27）——而非用户终端本身的 RIS 天线。本条目是第一篇将 RIS 直接定位为车载 D2S 终端天线架构、与相控阵正面竞争的条目，其诚实的表述方式（给出设计图谱而非宣布赢家）对知识库的 D2D/D2S 脉络而言比单一技术方案的论文更有价值：它给出了一套具体的功耗/增益/扫描范围预算，未来任何 D2S 终端方案的宣称——无论基于 RIS 还是相控阵——都可据此核对。该论文明确不提供新的实测性能数据；其价值在于对原型级权衡的系统性整理，以及将"适用场景"而非"哪种技术更优"确立为终端设计者应该提出的问题。
