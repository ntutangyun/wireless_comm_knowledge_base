---
id: 2026-11-06_arxiv-wifi-halow-capsule-endoscopy-evaluation-power-latency
date_published: 2026-10-25
date_found: 2026-11-06
technology: wifi
type: academic-paper
title_en: "Evaluating Wi-Fi HaLow for Next-Generation Capsule Endoscopy"
title_zh: "评估 Wi-Fi HaLow 在下一代胶囊内窥镜中的应用"
url: "https://arxiv.org/abs/2610.34184"
source_quality: full
topics: [802.11ah, Wi-Fi HaLow, sub-GHz, capsule endoscopy, power save, TCP_NODELAY, latency]
topic_primary: energy-power-save
topics_secondary: [wifi7-deployment]
novelty_score: 3
---

## Summary (EN)

The paper (arXiv:2610.34184, eess.SY; Ziyao Zhou, Chen Shen, Tiancheng Cao and Hen-Wei Huang, Nanyang Technological University, Singapore) evaluates Wi-Fi HaLow (IEEE 802.11ah, 860/900 MHz) as the image link of a capsule endoscope. The stated problem is that the wireless link limits image resolution and frame rate: many commercial sub-GHz capsules operate below 500 x 500 pixels and 10 FPS, and higher-frequency links such as 2.4 GHz attenuate more in tissue. HaLow is proposed for its sub-GHz propagation, PHY rates up to 433.3 Mbps and IP/Wi-Fi power-save compatibility.

The methodology uses an MM8108-EKH05-01 kit with an STM32U585 MCU, sending a 24 KB QVGA frame over TCP through a HaLow AP to a Jetson Nano, with two Power Profiler Kit II units sampling current at 100 kS/s and 3.3 V (reported power covers the HaLow module and MCU together). Four experiments follow: 40 MCS and bandwidth combinations (MCS 0 to 9, 1/2/4/8 MHz) measured for throughput, power and RSSI in an RF-shielded box, plus standby power and resume delay; a frame-rate sweep at MCS 9 and 8 MHz comparing power save, TCP_NODELAY and a 20 ms power-save timeout; a dual-mode in-water simulation of a 1 FPS field-of-view survey mode against a 30 FPS region-of-interest mode in a 40 x 30 x 25 cm tank with the AP 1 m away; and latency from QVGA to 4K uplink and command downlink, using GPIO markers and an oscilloscope.

Results: throughput spans 0.22 to 15.55 Mbps and energy per bit falls from 2399.30 to 17.38 nJ, so the fastest configuration is also the most efficient. Disconnected standby draws 1.02 mW with a 634.99 ms resume, connected standby 3.37 mW with 34.30 ms, and cold start takes 7.75 s. At 1 FPS, power falls from 101.70 mW (power save off) to 42.60 mW (power save, default timeout) to 14.00 mW (TCP_NODELAY and 20 ms timeout); listening after transmission accounts for 46.08% of frame-period energy and peak current reaches 193.26 mA. Only 14 of 40 configurations (all 4 or 8 MHz) sustain 30 FPS, drawing 460.57 down to 174.21 mW (lowest at MCS 9, 8 MHz). In the water tank throughput is 13.45 Mbps, a 13.50% drop. Over an 8 h exam, a 10% ROI scheme uses 237.25 mWh against 1393.68 mWh for continuous 30 FPS. A 24 KB QVGA frame takes 20.68 ms uplink, a 2.5 MB 4K frame 1513.77 ms, and an 8 B command 4.77 ms downlink.

## Summary (ZH)

该论文（arXiv:2610.34184，eess.SY；作者 Ziyao Zhou、Chen Shen、Tiancheng Cao、Hen-Wei Huang，新加坡南洋理工大学）评估把 Wi-Fi HaLow（IEEE 802.11ah，860/900 MHz）用作胶囊内窥镜图像链路。文中指出的问题是无线链路限制了图像分辨率与帧率：许多商用 sub-GHz 胶囊低于 500 x 500 像素和 10 FPS，而 2.4 GHz 等较高频率链路在组织中衰减更大。提出 HaLow 的理由是其 sub-GHz 传播特性、最高 433.3 Mbps 的 PHY 速率以及与 IP/Wi-Fi 省电机制的兼容性。

方法上，使用带 STM32U585 MCU 的 MM8108-EKH05-01 套件，经 HaLow AP 以 TCP 向 Jetson Nano 发送 24 KB 的 QVGA 帧，两台 Power Profiler Kit II 以 100 kS/s、3.3 V 采样电流（所报告的功耗为 HaLow 模块与 MCU 之和）。共四类实验：在射频屏蔽箱中测量 40 种 MCS 与带宽组合（MCS 0 至 9，1/2/4/8 MHz）的吞吐、功耗与 RSSI，以及待机功耗与恢复时延；在 MCS 9、8 MHz 下做帧率扫描，比较省电模式、TCP_NODELAY 与 20 ms 省电超时；在 40 x 30 x 25 cm 水箱中、AP 距离 1 m，模拟 1 FPS 视野巡检模式与 30 FPS 感兴趣区域模式的双模式场景；以及用 GPIO 标记与示波器测量从 QVGA 到 4K 的上行时延和命令下行时延。

结果：吞吐范围 0.22 至 15.55 Mbps，每比特能耗从 2399.30 降至 17.38 nJ，即最快的配置也最节能。断开连接的待机功耗 1.02 mW、恢复 634.99 ms；保持连接的待机功耗 3.37 mW、恢复 34.30 ms；冷启动 7.75 s。1 FPS 下功耗由 101.70 mW（关闭省电）降至 42.60 mW（省电、默认超时），再降至 14.00 mW（TCP_NODELAY 加 20 ms 超时）；发送后监听占帧周期能耗的 46.08%，峰值电流达 193.26 mA。40 种配置中仅 14 种（均为 4 或 8 MHz）可维持 30 FPS，功耗 460.57 至 174.21 mW（MCS 9、8 MHz 最低）。水箱中吞吐为 13.45 Mbps，下降 13.50%。在 8 小时检查中，10% ROI 方案耗能 237.25 mWh，持续 30 FPS 为 1393.68 mWh。24 KB QVGA 帧上行 20.68 ms，2.5 MB 的 4K 帧 1513.77 ms，8 字节命令下行 4.77 ms。

## Key technical points (EN)

- Hardware: MM8108-EKH05-01 HaLow kit with STM32U585 MCU; Jetson Nano receiver; power measured on module plus MCU.
- Link sweep: 40 MCS/bandwidth combinations; 0.22 to 15.55 Mbps; 2399.30 to 17.38 nJ/bit.
- Standby: 1.02 mW disconnected (634.99 ms resume), 3.37 mW connected (34.30 ms resume), 7.75 s cold start.
- Power at 1 FPS: 101.70 mW (power save off), 42.60 mW (power save, default timeout), 14.00 mW (TCP_NODELAY plus 20 ms timeout).
- Dual mode: default rate control picked MCS 9 at 8 MHz in both modes; 1 FPS at 13.59 mW; 30 FPS sustained by 14 of 40 configurations (all 4 or 8 MHz), at 460.57 down to 174.21 mW (lowest at MCS 9, 8 MHz); 13.45 Mbps in water (13.50% lower).
- 8 h exam energy: 237.25 mWh with a 10% ROI scheme vs 1393.68 mWh at continuous 30 FPS.
- Latency: 20.68 ms for a 24 KB QVGA frame, 1513.77 ms for a 2.5 MB 4K frame, 4.77 ms for an 8 B downlink command.
- Stated limitations: evaluation kit and water tank, not living tissue (animal experiments are future work); transient current peaks up to 193.26 mA; the power-optimized setting tops out below 80 FPS.

## Key technical points (ZH)

- 硬件：带 STM32U585 MCU 的 MM8108-EKH05-01 HaLow 套件；Jetson Nano 接收端；功耗按模块加 MCU 测量。
- 链路扫描：40 种 MCS/带宽组合；0.22 至 15.55 Mbps；每比特 2399.30 至 17.38 nJ。
- 待机：断开 1.02 mW（恢复 634.99 ms），保持连接 3.37 mW（恢复 34.30 ms），冷启动 7.75 s。
- 1 FPS 功耗：101.70 mW（关闭省电）、42.60 mW（省电、默认超时）、14.00 mW（TCP_NODELAY 加 20 ms 超时）。
- 双模式：默认速率控制在两种模式下均选 MCS 9、8 MHz；1 FPS 为 13.59 mW；40 种配置中 14 种（均为 4 或 8 MHz）可维持 30 FPS，功耗 460.57 至 174.21 mW（MCS 9、8 MHz 最低）；水中 13.45 Mbps（下降 13.50%）。
- 8 小时检查能耗：10% ROI 方案 237.25 mWh，对比持续 30 FPS 的 1393.68 mWh。
- 时延：24 KB QVGA 帧 20.68 ms，2.5 MB 4K 帧 1513.77 ms，8 字节下行命令 4.77 ms。
- 作者列出的局限：使用评估套件与水箱而非活体组织（动物实验为后续工作）；瞬态电流峰值最高 193.26 mA；功耗优化配置的帧率上限低于 80 FPS。

## Why it matters / what's new (EN)

This is a measurement-style study of HaLow on commodity evaluation hardware, built around power-save behaviour: the reported drop from 101.70 to 14.00 mW at 1 FPS comes from power-save settings and TCP_NODELAY rather than from a new radio design. The KB already holds a different capsule-endoscopy HaLow paper from another group, a miniaturized imaging transfer system (2026-10-13_arxiv-wifi-halow-capsule-endoscopy-imaging); the two cover the same application with different methods and are best read together. The HaLow market-size entry (2026-10-23_wifi-now-abi-research-wifi-halow-297-million-sam-2031) gives the deployment-side context.

## Why it matters / what's new (ZH)

这是一项基于通用评估硬件的 HaLow 测量研究，围绕省电行为展开：文中报告的 1 FPS 功耗由 101.70 mW 降至 14.00 mW，来自省电设置与 TCP_NODELAY，而非新的射频设计。本 KB 已收录另一个团队的胶囊内窥镜 HaLow 论文，即一个小型化图像传输系统（2026-10-13_arxiv-wifi-halow-capsule-endoscopy-imaging）；两者面向同一应用、方法不同，宜对照阅读。HaLow 市场规模条目（2026-10-23_wifi-now-abi-research-wifi-halow-297-million-sam-2031）提供部署侧背景。

## Images

![One-frame energy breakdown | 单帧能耗分解](https://arxiv.org/html/2610.34184v1/figures/fig3_frame_energy.png)
