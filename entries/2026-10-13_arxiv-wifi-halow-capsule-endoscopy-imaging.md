---
id: 2026-10-13_arxiv-wifi-halow-capsule-endoscopy-imaging
date_published: 2026-10-09
date_found: 2026-10-13
technology: wifi
type: academic-paper
title_en: "A Miniaturized Wi-Fi HaLow-Based Wireless Imaging Transfer System for Capsule Endoscopy"
title_zh: "面向胶囊内窥镜的小型化 Wi-Fi HaLow 无线图像传输系统"
url: "https://arxiv.org/abs/2610.13815"
source_quality: full
topics: [802.11ah, Wi-Fi HaLow, sub-GHz, capsule endoscopy, low power, IoT]
topic_primary: energy-power-save
topics_secondary: [amp-iot]
novelty_score: 2
---

## Summary (EN)

A paper submitted to arXiv on 9 October 2026 (eess.IV; University of Pisa and University of Leeds authors, stated as submitted to IEEE) presents a Wireless Imaging Transfer (WIT) module for capsule endoscopy built on a sub-GHz IEEE 802.11ah (Wi-Fi HaLow) link. The abstract frames capsule endoscopy as constrained by size, power and through-tissue data transmission, and the paper's electromagnetic-constraints section argues that around 900 MHz tissue attenuation (stated as a few dB/cm) is lower than at higher-frequency alternatives, while multi-megabit throughput is still available.

Two parts are reported. First, a preliminary in-vivo test in a porcine model used an earlier Silex SX-NEWAH (Newracom NRC7292-based) module with a Raspberry Pi acting as the external AP, showing a stable through-body link (the internal antenna was cabled to the tip of a standard colonoscope, not housed in a capsule). Second, the integrated WIT prototype combines a NanEyeC-based imaging front end, an STM32U575 microcontroller for acquisition and packetization, and a Silex SX-SDMAH HaLow module (Morse Micro MM6108, 1-16 MHz channels, SPI to the MCU) on a stacked capsule-compatible PCB. It was exercised inside a colon phantom on a magnetically actuated oloid capsule, with the capsule-side electronics tethered to a bench supply for per-subsystem power measurement.

Measured results: iperf UDP application-layer throughput of 12-13 Mbps with the capsule transceiver as STA and a Raspberry Pi module as AP, about three times the earlier module's throughput at about 250 mW instead of about 400 mW; stable color image transmission at 320x320 pixels; RF transmission energy efficiency of 20.7 nJ/bit; and about 477 mW total active power (about 39.6 nJ/bit) with camera, digital processing, RF and illumination at 60% LED brightness. The paper notes the bandwidth would support more than 10 fps while commercial capsule systems typically run at 1-5 fps, leaving room for duty cycling.

## Summary (ZH)

一篇于 2026 年 10 月 9 日提交至 arXiv 的论文（eess.IV；作者来自比萨大学与利兹大学，文中称已投稿至 IEEE）提出了一个基于 Sub-GHz IEEE 802.11ah（Wi-Fi HaLow）链路的胶囊内窥镜无线图像传输（WIT）模块。摘要将胶囊内窥镜描述为受体积、功耗与穿过生物组织的数据传输所限；论文的电磁约束部分指出，在约 900 MHz 附近组织衰减（文中给出为每厘米数 dB）低于更高频段的方案，同时仍可获得数兆比特的吞吐。

论文报告两部分内容。其一是在猪模型中进行的初步体内测试：使用较早的 Silex SX-NEWAH（基于 Newracom NRC7292）模块，外部由树莓派充当 AP，显示出稳定的穿体链路（体内天线经同轴电缆安装于标准结肠镜端部，而非胶囊内）。其二是集成的 WIT 原型：基于 NanEyeC 的成像前端、负责采集与打包的 STM32U575 微控制器，以及 Silex SX-SDMAH HaLow 模块（Morse Micro MM6108，1-16 MHz 信道，通过 SPI 连接 MCU），堆叠在适配胶囊的 PCB 上。该原型在结肠模型中、搭载于磁驱动的 oloid 胶囊上进行测试，胶囊侧电子器件通过台式电源供电以便分项测量功耗。

测量结果：以胶囊端收发器为 STA、树莓派模块为 AP，iperf UDP 应用层吞吐为 12-13 Mbps，约为早期模块的 3 倍，而功耗约 250 mW（早期约 400 mW）；320x320 像素彩色图像稳定传输；射频发射能效 20.7 nJ/bit；在摄像头、数字处理、射频与 60% LED 亮度照明全部计入时，总有功功耗约 477 mW（约 39.6 nJ/bit）。论文指出该带宽可支持 10 fps 以上，而商用胶囊系统通常运行在 1-5 fps，为占空比降耗留有空间。

## Key technical points (EN)

- **Link**: IEEE 802.11ah (Wi-Fi HaLow), ~900 MHz; capsule side is the STA, external Raspberry Pi-based module is the AP.
- **Hardware**: NanEyeC imaging front end, STM32U575 MCU, Silex SX-SDMAH (Morse Micro MM6108) over SPI, flexible sub-GHz antenna, stacked PCB.
- **In-vivo feasibility**: porcine model with the earlier SX-NEWAH (NRC7292) module; the paper states this as the first in-vivo demonstration of Wi-Fi HaLow through tissue for capsule endoscopy (authors' claim).
- **Throughput**: 12-13 Mbps application-layer (iperf UDP); about 3x the earlier module.
- **Energy**: 20.7 nJ/bit for RF transmission; about 477 mW and 39.6 nJ/bit for the complete active chain at 60% LED brightness; MCU plus HaLow core about 43 mA at 3.3 V.
- **Imaging**: 320x320 color frames, no visible packet-induced artifacts; compared qualitatively with a wired Olympus colonovideoscope.

## Key technical points (ZH)

- **链路**：IEEE 802.11ah（Wi-Fi HaLow），约 900 MHz；胶囊端为 STA，外部基于树莓派的模块为 AP。
- **硬件**：NanEyeC 成像前端、STM32U575 MCU、经 SPI 连接的 Silex SX-SDMAH（Morse Micro MM6108）、柔性 Sub-GHz 天线、堆叠式 PCB。
- **体内可行性**：在猪模型中使用较早的 SX-NEWAH（NRC7292）模块；论文称这是胶囊内窥镜场景下首次通过组织的 Wi-Fi HaLow 体内演示（作者自述）。
- **吞吐**：应用层 12-13 Mbps（iperf UDP）；约为早期模块的 3 倍。
- **能耗**：射频发射 20.7 nJ/bit；在 60% LED 亮度下完整有功链路约 477 mW、39.6 nJ/bit；MCU 加 HaLow 核心在 3.3 V 下约 43 mA。
- **成像**：320x320 彩色帧，未见丢包引起的明显伪影；与有线 Olympus 结肠镜做了定性对比。

## Why it matters / what's new (EN)

The paper reports a measured 802.11ah link for an ingestible imaging capsule, with a per-subsystem power breakdown. The paper's own conclusion is that HaLow offers a promising trade-off among throughput, robustness and energy for this application; results are bench and phantom measurements with a tethered supply plus a separate preliminary porcine test, not a clinical trial.

## Why it matters / what's new (ZH)

论文给出了 802.11ah 在可吞服成像胶囊中的实测链路，并附分项功耗拆解。论文自身的结论是 HaLow 在吞吐、鲁棒性与能耗之间提供了具有前景的折中；其结果为台架与模型（phantom）测量（使用有线供电），外加单独的初步猪模型测试，并非临床试验。

## Images

![Wireless Imaging Transfer (WIT) system overview | 无线图像传输（WIT）系统概览](https://arxiv.org/html/2610.13815v1/figures/WIT_System.png)
