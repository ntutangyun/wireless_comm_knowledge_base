---
id: 2026-08-31_s-track-nearlink-classroom-audio-sound-field
date_published: 2026-07-22
date_found: 2026-08-31
type: industry-news
technology: nearlink
title_en: "NearLink in the classroom: S-TRACK's LARK 1.0 Pro wireless microphone uses the SparkLink link as both audio transport and a sensing probe for automatic room-acoustic calibration"
title_zh: "星闪进课堂：声菲特 LARK 1.0 Pro 星闪无线麦克风把星闪链路同时用作音频传输与房间声学自动校准的感知探头"
url: "https://www.isla.org.cn/dynamics/details?id=918&navigationIndex=0&url=/dynamics&type=0"
source_quality: full
topics: [NearLink, SparkLink, SLE, professional-audio, wireless-microphone, smart-education, room-acoustics, sound-field-calibration, XMOS, third-party-ecosystem]
topic_primary: nearlink-sle
topics_secondary: [nearlink-slb]
novelty_score: 2
---

## Summary (EN)

Shenzhen S-TRACK (深圳市声菲特科技技术有限公司) is a professional-audio house — DSP-centred classroom amplification, lecture capture, multimedia rooms and conference systems — and the subject of a SparkLink Alliance member profile published 22 July 2026. It is the first professional / education audio vendor to appear in this knowledge base's NearLink coverage, and the first NearLink application here in the education vertical at all.

The concrete product behind the profile is the LARK 1.0 Pro NearLink wireless microphone, announced 17 December 2025 and slated for demonstration at CES 2026. It targets teaching and lecture-capture: a teacher-worn transmitter over a NearLink link into a receiver whose master controller and DSP is an XMOS XCORE.AI processor, running four algorithms in a parallel audio pipeline — acoustic feedback elimination (anti-howling), automatic gain control, adaptive noise suppression, and room acoustic calibration.

The part that makes this more than a device-matrix increment is the third of the three uses the alliance profile describes. Beyond (1) untethering the teacher and (2) delivering low-latency, interference-resistant speech, S-TRACK uses the NearLink wireless microphones themselves as **sensing inputs** for automatic sound-field calibration: the system analyses the classroom's acoustics from what the wireless mics pick up and adapts the amplified output accordingly, removing the manual tuning pass that normally has to be done per room by an installer. That is a communication link doing double duty as an acoustic probe — the same communication-plus-sensing pattern this knowledge base has recorded for NearLink in vehicle-to-grid, arriving here in a room-acoustics form.

The alliance profile itself is a member-showcase piece and states only qualitative advantages — low latency, high reliability, strong interference resistance, high concurrency — with no measured numbers. The December 2025 product announcement likewise carries no latency, range, battery or audio-bitrate figures, and does not identify which NearLink mode or chipset the link uses (SLE is the plausible mode for a battery-worn microphone, but this is inference, not a stated fact). Neither source is independent of the vendor.

## Summary (ZH)

深圳市声菲特科技技术有限公司（S-TRACK）是一家专业音频厂商——以 DSP 为核心的教室扩声、录播、多媒体教室与会议系统方案——并于 2026 年 7 月 22 日成为星闪联盟"会员风采"报道的对象。它是本知识库星闪内容中出现的第一家专业 / 教育音频厂商，也是本库首个教育垂直领域的星闪应用。

报道背后的具体产品是 LARK 1.0 Pro 星闪无线麦克风，2025 年 12 月 17 日发布，并计划在 CES 2026 展示。产品面向教学与录播：教师佩戴的发射端经星闪链路接入接收端，接收端以 XMOS XCORE.AI 处理器担任主控与高性能 DSP，在并行音频处理流水线上运行四种算法——声反馈消除（防啸叫）、自动增益控制、自适应噪声抑制，以及房间声学校准。

真正使其超出"设备矩阵增量"的，是联盟报道所述三种用法中的第三种。除了（1）解放教师走动与（2）提供低时延、抗干扰的语音传输之外，声菲特把星闪无线麦克风本身用作**感知输入**来做声场自动校准：系统依据无线麦克风拾取的信号分析教室声学特性，并据此自适应调整扩声输出，从而免去通常需要安装商逐间房间手工调音的环节。这是一条通信链路兼作声学探头——与本知识库已记录的星闪在车网互动中的通感一体模式同源，只是在此以房间声学的形态出现。

联盟报道本身是会员展示性质，只给出定性优势——低时延、高可靠、强抗干扰、高并发——没有任何实测数字。2025 年 12 月的产品发布同样未给出时延、距离、续航或音频码率指标，也未说明链路使用哪种星闪模式或芯片（对电池供电的佩戴式麦克风而言 SLE 是合理推测，但这是推断而非陈述事实）。两个信源均非独立于厂商。

## Key technical points (EN)

- **Vendor**: Shenzhen S-TRACK (深圳市声菲特科技技术有限公司), professional audio / DSP; segments: classroom amplification, lecture capture, multimedia and conference rooms, smart campus.
- **Product**: LARK 1.0 Pro NearLink wireless microphone, announced 2025-12-17; to be demonstrated at CES 2026. No general-availability date stated.
- **Receiver silicon**: XMOS XCORE.AI as master controller and DSP, running a parallel audio pipeline.
- **Four DSP algorithms**: acoustic feedback elimination (anti-howling), automatic gain control (AGC), adaptive noise suppression (NS), room acoustic calibration (RAC).
- **Three NearLink uses described by the alliance profile**: (1) cable-free teacher mobility; (2) low-latency, interference-resistant speech transport; (3) **wireless microphones as sensing inputs** for automatic sound-field calibration, replacing per-room manual tuning.
- **Alliance-stated advantages**: low latency, high reliability, strong interference resistance, high concurrency. No numbers given.
- **Not stated anywhere in the sources**: NearLink mode (SLE vs SLB), chipset or module vendor, air-interface latency, range, concurrent-microphone count, battery life, audio sample rate / bit depth, and whether the product carries an iSLA certification.
- **Sourcing**: SparkLink Alliance member profile (id 918, 2026-07-22) plus the vendor's own December 2025 product announcement carried by Sina Finance and EEtrend. Both vendor-derived; no independent review or measurement.

## Key technical points (ZH)

- **厂商**：深圳市声菲特科技技术有限公司（S-TRACK），专业音频 / DSP；细分领域为教室扩声、录播、多媒体与会议室、智慧校园。
- **产品**：LARK 1.0 Pro 星闪无线麦克风，2025-12-17 发布；将在 CES 2026 展示。未给出正式上市日期。
- **接收端芯片**：XMOS XCORE.AI 担任主控与 DSP，运行并行音频处理流水线。
- **四种 DSP 算法**：声反馈消除（防啸叫）、自动增益控制（AGC）、自适应噪声抑制（NS）、房间声学校准（RAC）。
- **联盟报道所述三种星闪用法**：（1）无线缆的教师走动自由；（2）低时延、抗干扰的语音传输；（3）**把无线麦克风作为感知输入**做声场自动校准，替代逐间房间的人工调音。
- **联盟给出的优势表述**：低时延、高可靠、强抗干扰、高并发。无量化数据。
- **信源中完全未说明的内容**：星闪模式（SLE 还是 SLB）、芯片或模组供应商、空口时延、传输距离、并发麦克风数量、续航、音频采样率 / 位深，以及产品是否已通过 iSLA 认证。
- **信源**：星闪联盟会员风采报道（id 918，2026-07-22），加上厂商 2025 年 12 月的产品发布（新浪财经、电子创新网转载）。均源自厂商；无独立评测或实测。

## Why it matters / what's new (EN)

Two things are new here. The first is a vertical: every NearLink audio entry in this knowledge base so far is consumer — Huawei's FreeBuds and FreeClip families on the E2.0 audio profile, and Edifier's Comfo Clip Q2 as the first third-party brand in the certification database. Professional and installed audio is a different market with different constraints (a lecture hall needs range, multi-microphone concurrency, and integration with an installed DSP chain, not lossless stereo into earbuds), and this is its first appearance. It also refines the "first third-party NearLink audio" framing recorded in the August 2026 Edifier entry: that claim is sound for the consumer, certification-database track, but a third-party **professional** audio product using NearLink was announced roughly six months earlier, in December 2025. The two are not the same milestone, and neither supersedes the other — but the KB should stop treating consumer TWS as the only third-party audio track.

The second, and the reason this is worth an entry rather than a line in a device matrix, is the sensing use. Using the wireless microphone link's own pickup as the probe for automatic room-acoustic calibration turns a communication radio into part of the acoustic measurement loop. It is a low-tech instance of the pattern NearLink's roadmap keeps promising under "communication-sensing fusion" (通感一体) — the same framing behind the vehicle-to-grid ISAC pilot already in this knowledge base and behind the HiSilicon parts that combine short-range comms with radar sensing — and it is notable precisely because it needs no new radio capability: it is the audio payload, not an RF measurement, that does the sensing. Auto-calibration is also the operationally valuable half. Per-room manual tuning by an installer is the recurring cost that keeps installed classroom audio expensive to deploy at campus scale, so removing it is the argument that would actually sell a fleet.

The caveats are large and should travel with the entry. Both sources are vendor-derived, the alliance piece is a member showcase with no measurements, and the December product announcement omits every number that would let anyone judge the link — latency, range, concurrency, battery, audio format — and does not even say which NearLink mode is in use. The follow-ups worth watching are a S-TRACK entry appearing in the iSLA product-certification database, any published latency or concurrency figure for a multi-microphone classroom deployment, and whether a second professional-audio brand adopts NearLink, which would mark installed audio as a real ecosystem segment rather than one member's showcase.

## Why it matters / what's new (ZH)

这里有两点是新的。第一是垂直领域：本知识库此前所有星闪音频条目都是消费级——华为 FreeBuds、FreeClip 系列的 E2.0 音频规格，以及漫步者 Comfo Clip Q2 作为认证数据库中的首个第三方品牌。专业与工程安装音频是另一个市场，约束也不同（阶梯教室需要的是覆盖距离、多麦克风并发以及与既有 DSP 链路的集成，而非送进耳机的无损立体声），本条目是它的首次出现。这也修正了 2026 年 8 月漫步者条目中"首个第三方星闪音频"的表述：就消费级、认证数据库这条线而言该表述成立，但一款使用星闪的第三方**专业**音频产品早约六个月、即 2025 年 12 月就已发布。二者并非同一里程碑，也互不取代——但本库不应再把消费级 TWS 当作第三方音频的唯一路径。

第二点，也是它值得独立成条而非仅在设备矩阵中占一行的原因，是感知用法。把无线麦克风链路自身的拾音作为房间声学自动校准的探头，等于让一条通信无线电成为声学测量环路的一部分。这是星闪路线图长期承诺的"通感一体"的一个低技术含量实例——与本知识库已收录的车网互动 ISAC 试点、以及海思把短距通信与雷达感知合一的器件同属一个框架——其值得注意之处恰在于它不需要任何新的射频能力：完成感知的是音频载荷本身，而不是射频测量。自动校准也是其中运营价值更高的一半：安装商逐间房间手工调音是使工程教室音频难以在校园规模铺开的重复成本，去掉它才是真正能卖出整批系统的论据。

需要随条目一同流传的保留意见很大。两个信源均源自厂商，联盟稿件是会员展示且无任何实测，12 月的产品发布省略了所有能据以判断链路优劣的数字——时延、距离、并发、续航、音频格式——甚至没有说明使用的是哪种星闪模式。值得跟踪的后续是：声菲特是否出现在 iSLA 产品认证数据库中；是否公布多麦克风教室部署的时延或并发数据；以及是否有第二家专业音频品牌采用星闪——那才能把工程安装音频确立为一个真实的生态细分，而非一家会员的展示案例。

## Images

None.
