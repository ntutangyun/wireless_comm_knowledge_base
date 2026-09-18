---
id: 2026-09-18_nordic-nrf54lc10a-multiprotocol-soc
date_published: 2026-09-15
date_found: 2026-09-18
type: product
technology: bluetooth
title_en: "Nordic's nRF54LC10A: a 1.9x2.3mm multiprotocol SoC packing Bluetooth LE Channel Sounding, Thread, Zigbee and Matter in a package matching the nRF54L series' smallest footprint"
title_zh: "Nordic nRF54LC10A：1.9x2.3mm 封装内集成蓝牙 LE 信道探测、Thread、Zigbee 与 Matter，封装尺寸与 nRF54L 系列最小封装持平"
url: "https://international.electronica-azi.ro/nordic-semiconductor-continues-nrf54l-series-expansion-with-new-multiprotocol-soc-for-size-and-cost-effective-iot-devices/"
source_quality: full
topics: [BLE, channel-sounding, Thread, Zigbee, Matter, IoT, products]
topic_primary: bt-channel-sounding
topics_secondary: [bt-le, bt-location]
novelty_score: 1
---

## Summary (EN)

Nordic Semiconductor announced the nRF54LC10A on 2026-09-15, a new entry in the nRF54L multiprotocol SoC series aimed at size- and cost-constrained IoT devices. The specifications here come from Nordic's own release; the item was surfaced via an [eeworldonline brief](https://www.eeworldonline.com/soc-supports-bluetooth-le-thread-zigbee-and-matter/). The chip pairs a 128 MHz Arm Cortex-M33 core with a RISC-V coprocessor on a 22 nm low-leakage process, carrying 1 MB of non-volatile memory and 192 KB of RAM, and preliminary benchmarks of 239 CoreMark/mA and 503 CoreMark. It ships in two 1.9 x 2.3 mm chip-scale packages plus a QFN48; Nordic calls it the smallest multiprotocol SoC in the nRF54L Series, with the two chip-scale options matching the series' smallest size to date.

On the radio side it supports Bluetooth Low Energy including Bluetooth Channel Sounding, plus Thread and Zigbee (both riding IEEE 802.15.4), and Matter at the application layer, with three SPI/TWI/UART peripheral instances and an ADC rounding out the I/O. Receive current draw is 4.0 mA and transmit current is 5.8 mA at 0 dBm, with a maximum TX power of +4 dBm and sleep current between 0.5-1.6 microamps; receive sensitivity is quoted at -97 dBm for Bluetooth LE 1M and -101 dBm for 802.15.4. Security features include Arm TrustZone isolation and physical-attack protection, alongside firmware-over-the-air updates and remote observability through nRF Cloud. Nordic positions the part for asset trackers (leaning on Channel Sounding for fine ranging), Thread/Zigbee smart-home accessories, simple Matter-enabled sensors, and Thread radio-coprocessor (RCP) roles. Sampling is open now; development kits are due in Q1 2027 and production in Q2 2027.

## Summary (ZH)

Nordic Semiconductor 于 2026-09-15 发布 nRF54LC10A，是面向体积与成本敏感型物联网设备的 nRF54L 多协议 SoC 系列新成员。本条目的各项规格取自 Nordic 自身的发布稿；该条目由 [eeworldonline 简讯](https://www.eeworldonline.com/soc-supports-bluetooth-le-thread-zigbee-and-matter/) 发现。该芯片采用 22 纳米低漏电工艺，搭载 128 MHz Arm Cortex-M33 内核与一个 RISC-V 协处理器，配备 1 MB 非易失存储和 192 KB RAM，初步跑分为 239 CoreMark/mA 与 503 CoreMark。提供两款 1.9 x 2.3 毫米芯片级封装，以及一款 QFN48 封装；Nordic 称其为 nRF54L 系列中最小的多协议 SoC，两款芯片级封装的尺寸与该系列迄今最小封装持平。

射频方面支持蓝牙低功耗（含蓝牙信道探测 Channel Sounding）、基于 IEEE 802.15.4 的 Thread 与 Zigbee，以及应用层的 Matter，另配三组 SPI/TWI/UART 外设接口和一个 ADC。接收电流为 4.0 mA，0 dBm 下发送电流 5.8 mA，最大发射功率 +4 dBm，休眠电流为 0.5-1.6 微安；接收灵敏度方面，蓝牙 LE 1M 为 -97 dBm，802.15.4 为 -101 dBm。安全特性包括 Arm TrustZone 隔离与物理攻击防护，并支持固件空中升级（FOTA）以及通过 nRF Cloud 实现远程可观测性。Nordic 将该芯片定位于资产追踪器（依托信道探测实现精细测距）、Thread/Zigbee 智能家居配件、功能简单的 Matter 传感器，以及 Thread 无线协处理器（RCP）角色。目前已开放采样，开发套件预计 2027 年第一季度推出，量产预计 2027 年第二季度。

## Key technical points (EN)

- CPU: 128 MHz Arm Cortex-M33 + RISC-V coprocessor, 22 nm low-leakage process; 1 MB NVM, 192 KB RAM; preliminary 239 CoreMark/mA, 503 CoreMark.
- Package: two 1.9 x 2.3 mm chip-scale packages plus a QFN48. Nordic calls it the smallest multiprotocol SoC in the nRF54L Series; the two CSP options match the series' smallest size to date.
- Radios: Bluetooth LE with Channel Sounding, Thread/Zigbee (IEEE 802.15.4), Matter at application layer.
- Power: 4.0 mA RX, 5.8 mA TX @ 0 dBm (max TX power +4 dBm), 0.5-1.6 uA sleep; sensitivity -97 dBm (BLE 1M) / -101 dBm (802.15.4).
- Security: Arm TrustZone isolation, physical-attack protection, FOTA, nRF Cloud remote observability.
- Targets: asset trackers (Channel Sounding ranging), Thread/Zigbee accessories, Matter sensors, Thread RCP.
- Timeline: sampling now, dev kits Q1 2027, production Q2 2027.

## Key technical points (ZH)

- CPU：128 MHz Arm Cortex-M33 + RISC-V 协处理器，22 纳米低漏电工艺；1 MB 非易失存储，192 KB RAM；初步跑分 239 CoreMark/mA、503 CoreMark。
- 封装：两款 1.9 x 2.3 毫米芯片级封装，另有 QFN48 封装。Nordic 称其为 nRF54L 系列中最小的多协议 SoC；两款芯片级封装尺寸与该系列迄今最小封装持平。
- 射频：蓝牙 LE 含信道探测（Channel Sounding）、基于 IEEE 802.15.4 的 Thread/Zigbee、应用层 Matter。
- 功耗：接收 4.0 mA，0 dBm 下发送 5.8 mA（最大发射功率 +4 dBm），休眠 0.5-1.6 微安；灵敏度 -97 dBm（BLE 1M）/ -101 dBm（802.15.4）。
- 安全：Arm TrustZone 隔离、物理攻击防护、FOTA、通过 nRF Cloud 远程可观测。
- 目标场景：资产追踪器（信道探测测距）、Thread/Zigbee 配件、Matter 传感器、Thread 无线协处理器（RCP）。
- 时间线：现已开放采样，开发套件 2027 年 Q1，量产 2027 年 Q2。

## Why it matters / what's new (EN)

The bt-channel-sounding bin already tracks Nordic's Channel-Sounding silicon at two other points on the cost/size curve: the $30 coin-cell nRF54L15 Tag prototyping platform (2026-07-06) and the NPU-equipped nRF54LM20B (2026-05-30). The nRF54LC10A adds a third point aimed squarely at high-volume, cost- and board-space-constrained trackers and accessories rather than prototyping or on-device ML — a package matching the series' smallest footprint, paired with Thread/Zigbee/Matter in the same die so a single part can cover Channel-Sounding ranging and mainstream smart-home radios. It signals Nordic pushing secure BLE ranging further down-market, from evaluation kits and premium trackers toward the commodity accessory tier.

## Why it matters / what's new (ZH)

bt-channel-sounding 主题目前已记录了 Nordic 在成本/尺寸曲线上另外两个位置的信道探测芯片：30 美元纽扣电池原型平台 nRF54L15 Tag（2026-07-06）与搭载 NPU 的 nRF54LM20B（2026-05-30）。nRF54LC10A 补上了第三个位置，直接面向对成本和板载空间敏感的大批量追踪器与配件市场，而非原型开发或端侧机器学习——其封装尺寸与该系列迄今最小封装持平，并在同一颗芯片上集成 Thread/Zigbee/Matter，使单一芯片即可同时覆盖信道探测测距与主流智能家居无线协议。这标志着 Nordic 正把安全蓝牙测距进一步下沉，从评估套件和高端追踪器推向大众化配件市场。

## Images

None.
