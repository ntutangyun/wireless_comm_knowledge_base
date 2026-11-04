---
id: 2026-11-04_nordic-nrf71-series-wifi6-ble-thread-edge-ai-npu-soc
date_published: 2026-11-03
date_found: 2026-11-04
technology: wifi
type: product
title_en: "Nordic nRF71 Series: battery-powered Wi-Fi 6/6E, Bluetooth LE and Thread SoCs with an Axon NPU, up to 20x lower standby power than nRF70"
title_zh: "Nordic nRF71 系列：面向电池供电设备的 Wi-Fi 6/6E + 蓝牙 LE + Thread SoC，内置 Axon NPU，待机功耗比 nRF70 最多低 20 倍"
url: "https://www.nordicsemi.com/Nordic-news/2026/11/Nordic-brings-edge-AI-to-battery-powered-WiFi-devices-20-times-lower-standby-power-with-nRF71-Series"
source_quality: full
topics: [Wi-Fi 6, Wi-Fi 6E, low power, edge AI, NPU, Bluetooth LE, Thread, Matter, IoT]
topic_primary: energy-power-save
topics_secondary: [amp-iot]
novelty_score: 3
---

## Summary (EN)

On 3 November 2026 (Oslo) Nordic Semiconductor announced the nRF71 Series, ultra-low-power SoCs that put Wi-Fi, Bluetooth LE, Thread and edge AI on one chip. The first parts are the nRF7120 (dual-band Wi-Fi 6) and the nRF7120E (tri-band Wi-Fi 6E). Nordic's headline claim is standby power up to 20 times lower than its current-generation nRF70 Series Wi-Fi products; the page gives no absolute standby current or power figures.

The chip has two independent radios: a Wi-Fi radio and the 2.4 GHz multiprotocol radio from Nordic's nRF54 Series, both able to receive at the same time, so a device can keep its Wi-Fi cloud connection while listening for Bluetooth LE or Thread traffic. The integrated Axon Neural Processing Unit (listed for the nRF7120E) runs machine-learning models 10x to 17x faster than the 256 MHz Arm Cortex-M33 processor alone; the stated example workloads are keyword spotting, anomaly detection and image classification, and no TOPS figure is given. On-chip resources are 4 MB non-volatile memory and 1 MB of user-accessible RAM.

Software is built on Nordic's existing Bluetooth LE software and tools, with Neuton software for ultra-small models trained on the developer's own data (suited to running on the processor alone) and over-the-air model updates through nRF Cloud. Target products listed are battery-powered smart home hubs, Matter bridges and Thread border routers, and Matter-enabled smart locks, security panels, wearables and industrial sensors. The parts are sampling now with selected customers, and a Nordic-branded nRF7120 module is shown at Electronica (Hall C6, booth 159). EVP Kjetil Holstad is quoted: "Edge AI will be part of every connected device."

## Summary (ZH)

2026 年 11 月 3 日（奥斯陆），Nordic Semiconductor 发布 nRF71 系列，将 Wi-Fi、蓝牙 LE、Thread 与边缘 AI 集成在同一颗超低功耗 SoC 上。首批型号为 nRF7120（双频 Wi-Fi 6）和 nRF7120E（三频 Wi-Fi 6E）。Nordic 的核心宣称是待机功耗比其当前一代 nRF70 系列 Wi-Fi 产品最多低 20 倍；页面未给出绝对待机电流或功耗数值。

芯片有两个独立无线电：一个 Wi-Fi 无线电，以及来自 Nordic nRF54 系列的 2.4 GHz 多协议无线电，二者可同时接收，因此设备在保持 Wi-Fi 云连接的同时还能监听蓝牙 LE 或 Thread 流量。集成的 Axon 神经处理单元（NPU，页面标注于 nRF7120E）运行机器学习模型的速度是单独使用 256 MHz Arm Cortex-M33 处理器的 10 至 17 倍；列举的示例负载为关键词唤醒、异常检测和图像分类，未给出 TOPS 数值。片上资源为 4 MB 非易失存储和 1 MB 用户可用 RAM。

软件基于 Nordic 现有的蓝牙 LE 软件与工具，配合 Neuton 软件（用开发者自己的数据训练超小模型，适合仅在处理器上运行），并通过 nRF Cloud 做模型空中升级。列出的目标产品包括电池供电的智能家居中枢、Matter 桥接器和 Thread 边界路由器，以及支持 Matter 的智能门锁、安防面板、可穿戴设备和工业传感器。芯片目前向选定客户送样，Nordic 品牌的 nRF7120 模块在 Electronica（C6 厅 159 号展位）展出。EVP Kjetil Holstad 的引言为："Edge AI will be part of every connected device."

## Key technical points (EN)

- Parts: nRF7120 (dual-band Wi-Fi 6) and nRF7120E (tri-band Wi-Fi 6E); Wi-Fi + Bluetooth LE + Thread + edge AI on one SoC.
- Standby power: up to 20x lower than the nRF70 Series; no absolute figure on the page.
- Two independent radios (Wi-Fi, and the nRF54-Series 2.4 GHz multiprotocol radio), both able to receive simultaneously.
- Axon NPU: models run 10x-17x faster than the 256 MHz Cortex-M33 alone; examples keyword spotting, anomaly detection, image classification.
- Memory: 4 MB non-volatile, 1 MB user-accessible RAM.
- Software: existing Bluetooth LE software/tools, Neuton ultra-small models, OTA model updates via nRF Cloud.
- Availability: sampling to selected customers; Nordic-branded nRF7120 module at Electronica.

## Key technical points (ZH)

- 型号：nRF7120（双频 Wi-Fi 6）与 nRF7120E（三频 Wi-Fi 6E）；Wi-Fi + 蓝牙 LE + Thread + 边缘 AI 集成于一颗 SoC。
- 待机功耗：比 nRF70 系列最多低 20 倍；页面无绝对数值。
- 两个独立无线电（Wi-Fi，以及 nRF54 系列的 2.4 GHz 多协议无线电），可同时接收。
- Axon NPU：模型运行速度为单独 256 MHz Cortex-M33 的 10-17 倍；示例为关键词唤醒、异常检测、图像分类。
- 存储：4 MB 非易失存储，1 MB 用户可用 RAM。
- 软件：沿用蓝牙 LE 软件与工具，Neuton 超小模型，经 nRF Cloud 做模型 OTA。
- 供货：向选定客户送样；Nordic 品牌 nRF7120 模块在 Electronica 展出。

## Why it matters / what's new (EN)

This adds a Wi-Fi 6/6E low-power IoT part with an on-chip NPU to the KB's power-save coverage; the standby claim is relative to Nordic's own nRF70 line and the page offers no absolute number to compare with other IoT Wi-Fi parts. It is a company announcement; sampling status means no independent measurements exist yet. The Bluetooth-LE-plus-NPU side of Nordic's roadmap appears in [2026-05-30_nordic-nrf54lm20b-npu-ble-soc](2026-05-30_nordic-nrf54lm20b-npu-ble-soc.md).

## Why it matters / what's new (ZH)

该条目为知识库的节能覆盖增加了一款带片上 NPU 的 Wi-Fi 6/6E 低功耗 IoT 芯片；其待机功耗宣称是相对于 Nordic 自家 nRF70 系列的，页面没有绝对数值可与其他 IoT Wi-Fi 芯片比较。这是公司发布信息；目前处于送样阶段，尚无独立实测。Nordic 路线图中蓝牙 LE 加 NPU 的一侧见 [2026-05-30_nordic-nrf54lm20b-npu-ble-soc](2026-05-30_nordic-nrf54lm20b-npu-ble-soc.md)。
