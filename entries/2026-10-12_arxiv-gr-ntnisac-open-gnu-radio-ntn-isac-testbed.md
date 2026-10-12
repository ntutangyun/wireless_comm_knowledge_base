---
id: 2026-10-12_arxiv-gr-ntnisac-open-gnu-radio-ntn-isac-testbed
date_published: 2026-10-08
date_found: 2026-10-12
technology: satellite
type: academic-paper
title_en: "gr-ntnisac: An Open GNU Radio Testbed for NTN-ISAC"
title_zh: "gr-ntnisac：面向非地面网络集成感知与通信（NTN-ISAC）的开源 GNU Radio 测试平台"
url: "https://arxiv.org/abs/2610.11307"
source_quality: abstract_only
topics: [NTN, ISAC, GNU-Radio, LEO, Doppler, testbed]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

Soham Dhiren Desai presents gr-ntnisac, an open GNU Radio testbed for non-terrestrial-network integrated sensing and communication (NTN-ISAC), submitted 2026-10-08. The motivating problem: a passive receiver can sense nearby objects from the echoes of a 5G downlink signal, and when the transmitter is a LEO satellite, one transmitter can cover a wide area — but the receiving side must handle tens of kHz of Doppler shift and a direct-path delay that changes within every observation interval, and a receiver meant for this should be validated against a known-correct answer before it is tried against a real satellite. gr-ntnisac applies an emulated LEO channel to a standard 5G New Radio downlink signal, sends it through two cabled USRPs, and scores the receiver under test against the delay and Doppler values the emulator actually commanded for every signal path. The same receiver code runs unmodified in simulation, on recorded captures, and on the cabled hardware. As a first demonstration, the author measures how well the receiver cancels the direct path (the strong satellite signal that would otherwise mask weak target echoes): cancellation depth reaches 34.8 dB on the cabled hardware and 37.6 dB in a matched radio-free simulation, indicating the radios are not the limiting factor. Controlled simulation isolates two specific depth-limiting factors — the channel emulator's 8-tap fractional-delay filter and a simulated rotating-blade target placed almost at the direct path's own delay — each capping depth near 40 dB; with both removed, depth reaches 71.0 dB. A diagnostic canceller that additionally removes the per-subcarrier channel response and per-symbol phase reaches 72.7 dB on the same captures. On a conducted (cabled) capture, a payload-aided receiver variant detects a -25 dB moving target path in 76.9% of measurement dwells.

## Summary (ZH)

Soham Dhiren Desai 提出了 gr-ntnisac，一个面向非地面网络集成感知与通信（NTN-ISAC）的开源 GNU Radio 测试平台，论文提交于 2026 年 10 月 8 日。研究动机问题是：被动接收机可以利用 5G 下行信号的回波感知附近物体；当发射端是 LEO 卫星时，单一发射机即可覆盖广阔区域，但接收端必须应对数十 kHz 的多普勒偏移，以及在每个观测时间窗内都会发生变化的直达路径延迟——用于此场景的接收机应先在已知正确答案的条件下得到验证，才能在真实卫星上进行测试。gr-ntnisac 将仿真的 LEO 信道施加到标准 5G New Radio 下行信号上，经由两台有线连接的 USRP 发送，并针对仿真器为每条信号路径实际设定的延迟与多普勒值，对被测接收机进行打分。同一套接收机代码可不加修改地运行于仿真、录制的采集数据与有线硬件三种环境。作为首个演示，作者测量了接收机对直达路径（即会掩盖微弱目标回波的强卫星信号）的抵消效果：在有线硬件上抵消深度达到 34.8 dB，在无需无线电设备的匹配仿真中为 37.6 dB，表明无线电设备本身并非限制因素。受控仿真分离出两个具体的深度限制因素——信道仿真器的 8 抽头分数延迟滤波器，以及被设置在接近直达路径延迟处的仿真旋转叶片目标——二者均将深度限制在约 40 dB；两者均去除后，深度可达 71.0 dB。在相同采集数据上，一种额外去除逐子载波信道响应与逐符号相位的诊断性抵消器可达到 72.7 dB。在一次有线采集中，一种载荷辅助接收机变体在 76.9% 的测量驻留时间内检测到了一条 -25 dB 的移动目标路径。

## Key technical points (EN)

- **Problem**: LEO-satellite-transmitted 5G downlink ISAC sensing must handle tens of kHz Doppler and a direct-path delay that varies within each observation interval.
- **Testbed design**: emulated LEO channel applied to a standard 5G NR downlink, transmitted through two cabled USRPs; receiver scored against the emulator's own commanded delay/Doppler ground truth.
- **Portability**: identical receiver code runs in simulation, on recorded captures, and on cabled hardware.
- **Direct-path cancellation depth**: 34.8 dB (hardware) / 37.6 dB (matched simulation) — hardware is not the bottleneck.
- **Depth-limiting factors isolated**: the emulator's 8-tap fractional-delay filter and a near-direct-path rotating-blade target each cap depth near 40 dB; with both removed, depth reaches 71.0 dB.
- **Diagnostic canceller** (removes per-subcarrier response + per-symbol phase): 72.7 dB.
- **Weak-target detection**: a payload-aided receiver detects a -25 dB moving path in 76.9% of dwells on conducted capture.

## Key technical points (ZH)

- **问题**：LEO 卫星发送的 5G 下行 ISAC 感知必须应对数十 kHz 的多普勒偏移，以及每个观测时间窗内都会变化的直达路径延迟。
- **测试平台设计**：将仿真的 LEO 信道施加于标准 5G NR 下行信号，经两台有线 USRP 发送；依据仿真器自身设定的延迟/多普勒真值对接收机打分。
- **可移植性**：同一套接收机代码可在仿真、录制采集数据与有线硬件三种环境下运行。
- **直达路径抵消深度**：硬件上 34.8 dB／匹配仿真中 37.6 dB——硬件并非瓶颈。
- **分离出的深度限制因素**：仿真器的 8 抽头分数延迟滤波器，以及接近直达路径延迟处的旋转叶片目标，二者均将深度限制在约 40 dB；两者均去除后可达 71.0 dB。
- **诊断性抵消器**（额外去除逐子载波响应与逐符号相位）：达到 72.7 dB。
- **弱目标检测**：载荷辅助接收机在有线采集中以 76.9% 的驻留占比检测到一条 -25 dB 的移动路径。

## Why it matters / what's new (EN)

This KB's LEO-ISAC coverage so far (the 2026-09-25 SESO ISAC orchestration entry and the 2026-09-10 LEO-terrestrial multistatic ISAC satellite-selection entry) is largely simulation- or algorithm-level. gr-ntnisac is instead an open, reusable hardware-validated testbed — releasing the emulator/receiver pipeline itself as a tool rather than a one-off result — and is the first entry in this bin to report cabled-hardware direct-path-cancellation figures (dB) alongside the matched-simulation baseline needed to separate radio-hardware limits from channel-model limits.

## Why it matters / what's new (ZH)

本知识库此前的 LEO-ISAC 相关条目（2026-09-25 的 SESO ISAC 编排条目，以及 2026-09-10 的 LEO-地面多基地 ISAC 卫星选择条目）大多停留在仿真或算法层面。gr-ntnisac 则是一个开源、可复用、经硬件验证的测试平台——将仿真器/接收机流水线本身作为工具发布，而非一次性的结果——也是该主题分组中首个报告有线硬件直达路径抵消深度（dB）数值、并以匹配仿真基线区分无线电硬件限制与信道模型限制的条目。

## Images

None.
