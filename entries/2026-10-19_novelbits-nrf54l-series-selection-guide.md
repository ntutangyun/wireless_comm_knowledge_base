---
id: 2026-10-19_novelbits-nrf54l-series-selection-guide
date_published: 2026-10-15
date_found: 2026-10-19
technology: bluetooth
type: industry-news
title_en: "The nRF54L Series Selection Guide: Which Nordic SoC Was Built for Your Product"
title_zh: "nRF54L 系列选型指南：哪款 Nordic SoC 适合你的产品"
url: "https://novelbits.io/nordic-nrf54l-series-selection-guide/"
source_quality: full
topics: [nRF54L, SoC-selection, channel-sounding, 802.15.4, Matter, wireless-MCU]
topic_primary: bt-le
topics_secondary: [bt-channel-sounding]
novelty_score: 2
---

## Summary (EN)

This Novel Bits article (author Mohammad Afaneh, published Oct 15, 2026, disclosed as sponsored by Nordic Semiconductor) is a selection guide across the nine SoCs now in Nordic's nRF54L Series, organised by product class rather than datasheet. All parts share a 22 nm low-leakage process, a common multiprotocol 2.4 GHz radio design and the nRF Connect SDK; all use a 128 MHz Cortex-M33; all but the LS05A/B add DSP/FPU extensions, a RISC-V coprocessor and TrustZone. RX sensitivity is nearly uniform (-96 dBm at 1 Mbps, -97 dBm on LC10A and LV10A).

Per the article's comparison table (from Nordic product pages and datasheets as of October 2026): nRF54LM20A/B (2 MB NVM / 512 KB RAM, up to +8 dBm in CSP, BLE + Channel Sounding + 802.15.4; the B adds the Axon NPU), nRF54L15 (1.5 MB / 256 KB), L10 (1 MB / 192 KB, +7 dBm), L05 (0.5 MB / 96 KB), LC10A (1 MB / 192 KB, +4 dBm, CSP39/29 and QFN48, BLE + CS + 802.15.4), LV10A (1.2-1.7 V supply for silver-oxide cells, BLE + CS but no 802.15.4), and LS05A/B (BLE-only, 1M/2M PHY, no Coded PHY, no Channel Sounding, 37 GPIO). Channel Sounding is on every part except the LS05A/B; Matter is listed on all 802.15.4 parts except the L05. Only the L15, L10 and L05 are rated to +105 C.

Recommendations: L05/L10/L15 for smart-home, building and industrial (L10 as the suggested Matter floor); LC10A for trackers and tags (1.9 x 2.3 mm CSP, sub-50 nA hibernation, but no NFC, PDM, I2S or quadrature decoder); LS05A/B for remotes, HID and beacons; LM20A/B for hubs, bridges and edge AI (the Axon NPU is quoted as up to 15x faster than the Cortex-M33 on TensorFlow Lite inference, per Nordic's benchmarks); LV10A for wearable biosensors on 1.55 V cells. Availability: L15, L10, L05 and LM20A/B (CSP98) in mass production; LC10A sampling (DK general availability expected Q1 2027), LV10A and LS05A/B early sampling; all four still experimental in nRF Connect SDK v3.4.1, with LC10A/LV10A datasheets and LS05A/B product-page figures marked preliminary. The article contains no new measurements of its own.

## Summary (ZH)

这篇 Novel Bits 文章（作者 Mohammad Afaneh，发布于 2026 年 10 月 15 日，文中披露为 Nordic Semiconductor 赞助内容）是针对 Nordic nRF54L 系列现有九款 SoC 的选型指南，按产品类别而非数据手册来组织。所有型号共享 22 nm 低漏电工艺、通用的多协议 2.4 GHz 射频设计和 nRF Connect SDK；均采用 128 MHz Cortex-M33；除 LS05A/B 外均另带 DSP/FPU 扩展、RISC-V 协处理器和 TrustZone。接收灵敏度基本一致（1 Mbps 下 -96 dBm，LC10A 与 LV10A 为 -97 dBm）。

据文中对比表（来源于 2026 年 10 月的 Nordic 产品页和数据手册）：nRF54LM20A/B（2 MB NVM / 512 KB RAM，CSP 封装最高 +8 dBm，BLE + Channel Sounding + 802.15.4；B 型增加 Axon NPU）、nRF54L15（1.5 MB / 256 KB）、L10（1 MB / 192 KB，+7 dBm）、L05（0.5 MB / 96 KB）、LC10A（1 MB / 192 KB，+4 dBm，CSP39/29 与 QFN48，BLE + CS + 802.15.4）、LV10A（1.2-1.7 V 供电，可直接用氧化银电池，BLE + CS 但无 802.15.4）、LS05A/B（仅 BLE，1M/2M PHY，无 Coded PHY，无 Channel Sounding，37 个 GPIO）。除 LS05A/B 外所有型号均支持 Channel Sounding；除 L05 外所有 802.15.4 型号列有 Matter 支持。仅 L15、L10、L05 支持 +105 C。

选型建议：智能家居、楼宇与工业选 L05/L10/L15（L10 为建议的 Matter 最低档）；追踪器与标签选 LC10A（1.9 x 2.3 mm CSP，休眠电流低于 50 nA，但无 NFC、PDM、I2S、正交解码器）；遥控器、HID 与信标选 LS05A/B；网关、桥接与边缘 AI 选 LM20A/B（据 Nordic 基准，Axon NPU 在 TensorFlow Lite 推理上最高比 Cortex-M33 快 15 倍）；使用 1.55 V 纽扣电池的可穿戴生物传感器选 LV10A。供货情况：L15、L10、L05 与 LM20A/B（CSP98 封装）已量产；LC10A 送样中（开发套件预计 2027 年第一季度全面供货），LV10A、LS05A/B 为早期送样；四者在 nRF Connect SDK v3.4.1 中仍为实验性支持，LC10A/LV10A 数据手册与 LS05A/B 产品页数据标为初步。文章本身不含新的实测数据。

## Key technical points (EN)

- **Shared base**: 22 nm process, common multiprotocol 2.4 GHz radio, one SDK; 128 MHz Cortex-M33 on all parts; LS05A/B lack DSP/FPU, RISC-V and TrustZone.
- **Channel Sounding**: on every variant except LS05A/B; LV10A has CS but no 802.15.4.
- **LS05A/B**: BLE-only, 1M/2M PHY only, no Coded PHY.
- **LV10A**: the only part running from 1.2-1.7 V.
- **LM20B**: adds the Axon NPU (vendor-quoted up to 15x faster than the M33 on TFLite inference).
- **Status**: LC10A sampling (DK general availability expected Q1 2027), LV10A and LS05A/B early sampling; all four still experimental in SDK v3.4.1; LC10A/LV10A datasheets and LS05A/B product-page figures marked preliminary.
- **Caveat**: sponsored by Nordic; specs come from vendor documentation, no independent measurements.

## Key technical points (ZH)

- **共同基础**：22 nm 工艺、通用多协议 2.4 GHz 射频、同一 SDK；所有型号均为 128 MHz Cortex-M33；LS05A/B 无 DSP/FPU、RISC-V 与 TrustZone。
- **Channel Sounding**：除 LS05A/B 外各型号均支持；LV10A 支持 CS 但无 802.15.4。
- **LS05A/B**：仅 BLE，仅 1M/2M PHY，无 Coded PHY。
- **LV10A**：唯一可在 1.2-1.7 V 供电下运行的型号。
- **LM20B**：增加 Axon NPU（厂商称在 TFLite 推理上最高比 M33 快 15 倍）。
- **状态**：LC10A 送样中（开发套件预计 2027 年第一季度全面供货），LV10A、LS05A/B 为早期送样；四者在 SDK v3.4.1 中仍为实验性支持，LC10A/LV10A 数据手册与 LS05A/B 产品页数据标为初步。
- **注意**：Nordic 赞助内容；规格来自厂商文档，无独立实测。

## Why it matters / what's new (EN)

The KB already holds individual Nordic nRF54L-family entries (LC10A, nRF54L15 Tag, Axon NPU); this guide lays the whole nine-part lineup side by side, showing which parts carry Channel Sounding, 802.15.4/Matter and Coded PHY, and what supply and temperature ranges apply. It is a vendor-sponsored synthesis, so use it as a map of the family rather than as evidence of performance.

## Why it matters / what's new (ZH)

知识库已有 Nordic nRF54L 系列的单品条目（LC10A、nRF54L15 Tag、Axon NPU）；本指南把九款型号并排对照，说明哪些型号具备 Channel Sounding、802.15.4/Matter、Coded PHY，以及供电与温度范围。这是厂商赞助的综述，宜作为系列产品地图使用，而非性能证据。
