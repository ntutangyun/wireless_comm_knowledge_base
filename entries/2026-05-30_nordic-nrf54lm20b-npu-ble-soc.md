---
id: 2026-05-30_nordic-nrf54lm20b-npu-ble-soc
date_published: 2026-01-07
date_found: 2026-05-30
type: product
title_en: "Nordic nRF54LM20B: Bluetooth LE SoC with 128 MHz Axon NPU for On-Device Edge AI"
title_zh: "Nordic nRF54LM20B：集成 128 MHz Axon NPU 的蓝牙 LE SoC，面向端侧边缘 AI"
url: "https://www.cnx-software.com/2026/01/07/nordic-semi-nrf54lm20b-wireless-soc-integrates-128-mhz-axon-npu-for-edge-ai-workloads/"
source_quality: full
topics: [BLE, Nordic, nRF54L, edge-AI, NPU, channel-sounding, IoT]
topic_primary: bt-le
topics_secondary: [bt-channel-sounding]
technology: bluetooth
novelty_score: 3
---

## Summary (EN)
Nordic Semiconductor's nRF54LM20B is a Bluetooth LE system-on-chip that integrates a dedicated 128 MHz Axon Neural Processing Unit (NPU) for on-device edge-AI workloads such as sound classification and keyword spotting. Nordic claims the NPU delivers up to 7× faster performance and up to 8× higher energy efficiency versus competing wireless solutions, and runs inference roughly 15× faster than the on-chip Cortex-M33 alone — keeping always-on classification within a coin-cell power budget without a cloud round-trip.

Beyond the NPU, the SoC pairs a 128 MHz Arm Cortex-M33 with a 128 MHz RISC-V (FLPR) coprocessor, 2 MB NVM, and 512 KB RAM. Its ultra-low-power 2.4 GHz radio supports Bluetooth LE, Bluetooth Channel Sounding (the Bluetooth 6.x secure fine-ranging feature), Matter-over-Thread, Zigbee, and proprietary modes up to 4 Mbps, with −96 dBm BLE (1 Mbps) and −101 dBm 802.15.4 RX sensitivity. I/O is generous: up to 66 GPIOs (CSP98), high-speed USB, high-speed SPI/UART, an 8-channel 14-bit/2 MS/s ADC, PDM/TDM/PWM/QDEC, and NFC. Packages are a 6×6 mm QFN52 (35 GPIO) or 3.9×3.7 mm CSP98 (66 GPIO).

Nordic ships the part through the nRF Connect SDK plus ultra-compact Neuton edge-AI models (typically under 5 KB) and a "Nordic Edge AI Lab" tool for generating custom anomaly-detection, gesture/activity-recognition, and biometric models without cloud connectivity. The nRF54LM20B was sampling to selected customers at announcement (Jan 2026) with general availability scheduled for Q2 2026.

## Summary (ZH)
Nordic Semiconductor 的 nRF54LM20B 是一款蓝牙 LE 片上系统，集成了专用的 128 MHz Axon 神经处理单元（NPU），用于声音分类、关键词唤醒等端侧边缘 AI 任务。Nordic 称该 NPU 相比竞品无线方案性能最高快 7 倍、能效最高高 8 倍，推理速度约为仅用片上 Cortex-M33 的 15 倍——在纽扣电池功耗预算内实现常开分类，无需云端往返。

除 NPU 外，该 SoC 搭配 128 MHz Arm Cortex-M33 与 128 MHz RISC-V（FLPR）协处理器、2 MB NVM 与 512 KB RAM。其超低功耗 2.4 GHz 射频支持蓝牙 LE、蓝牙信道探测（Bluetooth 6.x 的安全精测距特性）、Matter-over-Thread、Zigbee 及最高 4 Mbps 的私有模式，BLE（1 Mbps）接收灵敏度 −96 dBm，802.15.4 为 −101 dBm。I/O 丰富：最多 66 个 GPIO（CSP98）、高速 USB、高速 SPI/UART、8 通道 14 位/2 MS/s ADC、PDM/TDM/PWM/QDEC 以及 NFC。封装为 6×6 mm QFN52（35 GPIO）或 3.9×3.7 mm CSP98（66 GPIO）。

Nordic 通过 nRF Connect SDK 提供该器件，并配套超紧凑的 Neuton 边缘 AI 模型（通常小于 5 KB）以及用于生成自定义异常检测、手势/活动识别与生物特征模型的 "Nordic Edge AI Lab" 工具，全程无需云连接。nRF54LM20B 在发布时（2026 年 1 月）向部分客户送样，量产计划在 2026 年第二季度。

## Key technical points (EN)
- Dedicated 128 MHz Axon NPU: up to 7× faster / 8× more energy-efficient vs competing wireless solutions; ~15× faster than the Cortex-M33 for inference.
- 128 MHz Cortex-M33 + 128 MHz RISC-V FLPR coprocessor; 2 MB NVM; 512 KB RAM.
- 2.4 GHz radio: Bluetooth LE + Channel Sounding, Matter/Thread, Zigbee, proprietary up to 4 Mbps; RX −96 dBm BLE / −101 dBm 802.15.4.
- Up to 66 GPIO, high-speed USB, 8ch 14-bit 2 MS/s ADC, NFC; QFN52 or CSP98 packages.
- Neuton models <5 KB + Nordic Edge AI Lab for cloud-free model generation; sampling Jan 2026, GA Q2 2026.

## Key technical points (ZH)
- 专用 128 MHz Axon NPU：相比竞品最高快 7 倍/能效高 8 倍；推理约为 Cortex-M33 的 15 倍。
- 128 MHz Cortex-M33 + 128 MHz RISC-V FLPR 协处理器；2 MB NVM；512 KB RAM。
- 2.4 GHz 射频：蓝牙 LE + 信道探测、Matter/Thread、Zigbee、最高 4 Mbps 私有模式；接收 −96 dBm BLE / −101 dBm 802.15.4。
- 最多 66 GPIO、高速 USB、8 通道 14 位 2 MS/s ADC、NFC；QFN52 或 CSP98 封装。
- Neuton 模型 <5 KB + Nordic Edge AI Lab 实现无云模型生成；2026 年 1 月送样，Q2 2026 量产。

## Why it matters / what's new (EN)
This is the clearest 2026 signal that BLE silicon is absorbing dedicated NPU blocks — pushing always-on inference (keyword spotting, anomaly detection) onto the connectivity SoC itself rather than a separate AI chip. For the KB it anchors the bt-le bin in the edge-AI direction and ties to Channel Sounding (the part supports it natively), bridging the location and AI threads. It is the Bluetooth-side counterpart to the broader "AI on the radio SoC" trend the WiFi entries track.

## Why it matters / what's new (ZH)
这是 2026 年最清晰的信号之一：BLE 芯片正在吸纳专用 NPU 模块——把常开推理（关键词唤醒、异常检测）下沉到连接 SoC 本身，而非独立 AI 芯片。对 KB 而言，它把 bt-le 分箱锚定到边缘 AI 方向，并与信道探测（该器件原生支持）相连，打通定位与 AI 两条线索。它是 WiFi 条目所追踪的 "射频 SoC 上的 AI" 大趋势在蓝牙侧的对应。
