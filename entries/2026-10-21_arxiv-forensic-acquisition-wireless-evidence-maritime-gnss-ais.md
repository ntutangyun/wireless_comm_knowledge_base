---
id: 2026-10-21_arxiv-forensic-acquisition-wireless-evidence-maritime-gnss-ais
date_published: 2026-10-18
date_found: 2026-10-21
technology: satellite
type: academic-paper
title_en: "Spectrum of Liability: Forensically Sound Acquisition of Wireless Evidence for the Reconstruction of Maritime Cyber-Physical Incidents"
title_zh: "责任频谱：面向海事信息物理事故重建的无线证据取证级采集"
url: "https://arxiv.org/abs/2610.25411"
source_quality: abstract-only
topics: [GNSS-spoofing, GNSS-jamming, AIS, maritime, IQ-capture, digital-forensics, hash-chain, NMEA]
topic_primary: sat-ai
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Longo, Cantelli-Forti, Merlo and Russo (arXiv 2610.25411, submitted 18 October 2026, cs.CR) start from the observation that modern ships rely on GNSS and AIS signals, which can be spoofed or jammed. After groundings or collisions, investigators often need to determine whether radio interference affected bridge instruments, but the records usually available (voyage data recorder outputs, integrated bridge logs, screenshots, decoded messages) are downstream, lossy and easy to contest in adversarial proceedings.

The authors propose an acquisition method that captures raw multichannel radio data (IQ samples) across the relevant bands and records time-aligned metadata from receivers and onboard instruments, including decoded AIS and GNSS outputs and NMEA sentences. Investigators can then re-decode the signals later and analyze the physical layer while knowing what the ship's systems reported at the time.

Samples and metadata are stored in a single append-only container. Cryptographic hash chains, trusted-time anchors and periodic checkpoints let third parties detect modification, truncation, splicing or substitution across cases, and confirm the claimed recording window. Per the abstract, a prototype shows the integrity mechanisms add negligible storage overhead and a modest compute cost at realistic multiband capture rates; no figures are given there.

## Summary (ZH)

Longo、Cantelli-Forti、Merlo 和 Russo（arXiv 2610.25411，2026 年 10 月 18 日提交，cs.CR）的出发点是：现代船舶依赖可被欺骗或干扰的 GNSS 和 AIS 信号。发生搁浅或碰撞后，调查人员往往需要判断无线电干扰是否影响了驾驶台仪器，但通常可得的记录（航行数据记录仪输出、综合桥楼日志、截图、解码后的消息）属于下游、有损信息，容易在对抗性程序中受到质疑。

作者提出一种采集方法：在相关频段捕获原始多通道射频数据（IQ 采样），并记录来自接收机和船载仪器的时间对齐元数据，包括解码后的 AIS 与 GNSS 输出以及 NMEA 语句。调查人员事后可重新解码信号并分析物理层，同时知道当时船载系统的报告内容。

采样与元数据存放在单一的仅追加容器中。加密哈希链、可信时间锚点和周期性检查点使第三方可以检测修改、截断、拼接或跨案例替换，并确认所声称的记录时间窗。按摘要，原型显示在现实的多频段采集速率下，完整性机制存储开销可忽略、计算开销适中；摘要未给出具体数字。

## Key technical points (EN)

- **Threat setting**: GNSS and AIS spoofing or jamming affecting ship bridge instruments.
- **Capture**: raw multichannel IQ across relevant bands plus time-aligned receiver and onboard-instrument metadata (decoded AIS/GNSS, NMEA).
- **Storage**: single append-only container.
- **Integrity**: hash chains, trusted-time anchors, periodic checkpoints; detects modification, truncation, splicing, cross-case substitution; confirms recording window.
- **Evaluation**: prototype with negligible storage overhead and a modest compute cost at realistic multiband rates (abstract-level).

## Key technical points (ZH)

- **威胁场景**：GNSS 与 AIS 欺骗或干扰影响船舶驾驶台仪器。
- **采集**：相关频段的原始多通道 IQ，加上时间对齐的接收机与船载仪器元数据（解码后的 AIS/GNSS、NMEA）。
- **存储**：单一仅追加容器。
- **完整性**：哈希链、可信时间锚点、周期性检查点；可检测修改、截断、拼接、跨案例替换，并确认记录时间窗。
- **评估**：原型在现实多频段速率下存储开销可忽略、计算开销适中（摘要级）。

## Why it matters / what's new (EN)

The paper addresses how to preserve raw radio evidence of GNSS/AIS interference so it can be re-analyzed and its integrity verified by third parties. GNSS is the satellite-navigation side of the problem; AIS and the capture bands are shipborne radio. Evidence is the abstract's prototype statement only.

## Why it matters / what's new (ZH)

论文解决如何保存 GNSS/AIS 干扰的原始无线电证据，使其可被重新分析并由第三方验证完整性。GNSS 是问题中卫星导航的一侧；AIS 及采集频段属于船载无线电。证据仅为摘要中对原型的陈述。

## Images

None.
