---
id: 2026-07-03_espressif-esp32-e22-wifi6e-certified
date_published: 2026-06-12
date_found: 2026-07-03
type: product
title_en: "Espressif ESP32-E22 Becomes Wi-Fi CERTIFIED 6E — First Espressif Tri-Band Coprocessor, with an Open-Source Linux Driver"
title_zh: "乐鑫 ESP32-E22 通过 Wi-Fi 6E 认证——乐鑫首款三频协处理器，并提供开源 Linux 驱动"
url: "https://www.espressif.com/en/news/E22_Wi-Fi_6E_Certificate"
technology: wifi
source_quality: full
topics: [Wi-Fi-6E, 6GHz, IoT, products, Linux]
topic_primary: wifi7-deployment
topics_secondary: [spectrum-policy]
novelty_score: 2
---

## Summary (EN)

On June 12, 2026, Espressif announced that the ESP32-E22 — its first tri-band Wi-Fi 6E connectivity coprocessor — achieved Wi-Fi CERTIFIED 6E™ certification from the Wi-Fi Alliance, verifying standards compliance and interoperability with other certified devices across the 2.4 GHz, 5 GHz, and 6 GHz bands.

The ESP32-E22 departs from Espressif's traditional standalone-SoC model: it uses a Radio Co-Processor (RCP) architecture that offloads the wireless protocol stack from a host system. The chip pairs a dual-core RISC-V processor with a proprietary Wi-Fi 6E stack, delivering up to 2.4 Gbps with 160 MHz channel bandwidth, 2×2 MU-MIMO, beamforming, and link-layer scheduling, plus dual-mode Bluetooth.

The most ecosystem-significant element is the companion `esp32e22-linux-driver`, released as open source on GitHub with support for Linux kernel 5.4 and above. This positions the ESP32-E22 as a drop-in 6 GHz-capable radio for Linux-based host systems — smart-home hubs, industrial gateways, streaming/video devices, and AR/VR accessories — from a vendor whose silicon has historically served the microcontroller tier. Open-source Linux drivers for 6 GHz-capable client silicon remain rare; most Wi-Fi 6E/7 client radios ship with proprietary or partially-open drivers.

## Summary (ZH)

2026 年 6 月 12 日，乐鑫（Espressif）宣布其首款三频 Wi-Fi 6E 连接协处理器 ESP32-E22 通过 Wi-Fi 联盟的 Wi-Fi CERTIFIED 6E™ 认证，验证了其在 2.4 GHz、5 GHz 与 6 GHz 三个频段上的标准符合性及与其他认证设备的互操作性。

ESP32-E22 与乐鑫传统的独立 SoC 路线不同：它采用无线电协处理器（RCP）架构，把无线协议栈从主机系统中卸载出来。芯片集成双核 RISC-V 处理器与自研 Wi-Fi 6E 协议栈，支持 160 MHz 信道带宽下最高 2.4 Gbps 速率、2×2 MU-MIMO、波束成形与链路层调度，并提供双模蓝牙。

对生态影响最大的是配套的 `esp32e22-linux-driver`——已在 GitHub 上开源，支持 Linux 内核 5.4 及以上版本。这使 ESP32-E22 成为面向 Linux 主机系统（智能家居中枢、工业网关、流媒体/视频设备、AR/VR 配件）的即插即用 6 GHz 无线电方案，而乐鑫的芯片此前主要服务于微控制器层级。支持 6 GHz 的客户端芯片配开源 Linux 驱动目前仍属罕见——多数 Wi-Fi 6E/7 客户端方案的驱动为闭源或仅部分开源。

## Key technical points (EN)

- Wi-Fi CERTIFIED 6E™ granted June 12, 2026; tri-band operation across 2.4 / 5 / 6 GHz.
- Radio Co-Processor (RCP) architecture: the host offloads the Wi-Fi protocol stack to the E22; dual-core RISC-V runs a proprietary Wi-Fi 6E stack.
- Up to 2.4 Gbps with 160 MHz bandwidth; 2×2 MU-MIMO; beamforming; link-layer scheduling; dual-mode Bluetooth on the same chip.
- Open-source `esp32e22-linux-driver` on GitHub, supporting Linux kernel ≥ 5.4 — enables integration into arbitrary Linux host systems.
- Target applications: high-throughput streaming and wireless video, smart-home hubs and appliances, industrial automation and bridging, AR/VR accessories.

## Key technical points (ZH)

- 2026 年 6 月 12 日获得 Wi-Fi CERTIFIED 6E™ 认证；支持 2.4 / 5 / 6 GHz 三频工作。
- 无线电协处理器（RCP）架构：主机将 Wi-Fi 协议栈卸载至 E22；双核 RISC-V 运行自研 Wi-Fi 6E 协议栈。
- 160 MHz 带宽下最高 2.4 Gbps；2×2 MU-MIMO；波束成形；链路层调度；同片集成双模蓝牙。
- 开源 `esp32e22-linux-driver` 已发布于 GitHub，支持 Linux 内核 5.4 及以上——可集成至任意 Linux 主机系统。
- 目标应用：高吞吐流媒体与无线视频、智能家居中枢与家电、工业自动化与桥接、AR/VR 配件。

## Why it matters / what's new (EN)

This is Espressif's first move above the microcontroller tier into host-based, 6 GHz-capable client silicon — and it arrives with an open-source Linux driver, which is still unusual for Wi-Fi 6E client radios. For the maker/embedded-Linux ecosystem this lowers the barrier to 6 GHz client designs considerably; for the broader market it signals low-cost IoT vendors expanding into the 6 GHz band that the premium Wi-Fi 6E/7 chipset vendors have occupied. The KB has tracked the IoT tier mostly through the Wi-Fi 7 20 MHz IoT certification thread; the ESP32-E22 represents the complementary high-throughput path into the same embedded ecosystem.

## Why it matters / what's new (ZH)

这是乐鑫首次越过微控制器层级，进入基于主机架构、支持 6 GHz 的客户端芯片市场——且同步提供开源 Linux 驱动，这在 Wi-Fi 6E 客户端无线电中仍不多见。对创客/嵌入式 Linux 生态而言，它显著降低了 6 GHz 客户端设计的门槛；对整个市场而言，它标志着低成本 IoT 厂商开始进入此前由高端 Wi-Fi 6E/7 芯片厂商占据的 6 GHz 频段。本知识库此前主要通过 Wi-Fi 7 20 MHz IoT 认证这条线跟踪 IoT 层级，ESP32-E22 代表了进入同一嵌入式生态的高吞吐互补路径。
