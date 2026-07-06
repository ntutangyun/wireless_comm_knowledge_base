---
id: 2026-07-06_nordic-nrf54l15-tag-channel-sounding
date_published: 2026-06-23
date_found: 2026-07-06
type: product
technology: bluetooth
title_en: "Nordic nRF54L15 Tag: $30 coin-cell prototyping platform with Bluetooth 6.0 Channel Sounding, Matter, Aliro and edge-AI sensing"
title_zh: "Nordic nRF54L15 Tag：30 美元纽扣电池原型平台，支持蓝牙 6.0 信道探测、Matter、Aliro 与边缘 AI 感知"
url: "https://www.cnx-software.com/2026/06/23/nordic-nrf54l15-tag-prototyping-platform-supports-bluetooth-channel-sounding-matter-edge-ai/"
source_quality: full
topics: [BLE, channel-sounding, Matter, Aliro, Find-My, products]
topic_primary: bt-channel-sounding
topics_secondary: [bt-le, bt-location]
novelty_score: 1
---

## Summary (EN)

Nordic Semiconductor has released the nRF54L15 Tag, a 33 mm circular, CR2032 coin-cell-powered prototyping platform built around the nRF54L15 SoC (128 MHz Arm Cortex-M33 plus a RISC-V coprocessor for software-defined peripherals, 256 KB SRAM, 1.5 MB NVM). Its headline radio capability is Bluetooth LE 6.0 Channel Sounding — phase-based, secure fine ranging — alongside Thread/Zigbee (IEEE 802.15.4-2020), Matter, Amazon Sidewalk, NFC, and a proprietary 2.4 GHz mode that adds a new 4 Mbps rate. It also supports Aliro, the CSA's cross-vendor smart-lock/access-control standard, which pairs naturally with Channel Sounding's secure-proximity use case.

The board carries a sensor set aimed at edge-AI prototyping: a 6-axis IMU for sensor fusion and gesture recognition, a low-power accelerometer for motion-triggered wake-up, and an environmental sensor (temperature, humidity, pressure, CO₂). Two on-board chip antennas support the ranging modes, and GPIO footprints allow expansion. At $30 through Farnell, Rutronik and Braemac, the platform targets asset trackers compatible with both Apple Find My and Google Find Hub, smart wearables, and access-control prototypes.

The significance is accessibility: Channel Sounding development previously required full development kits and custom RF layouts; a coin-cell tag form factor at this price puts secure BLE ranging prototyping — including door-unlock (Aliro) and finder-network scenarios — within reach of small teams, and its battery envelope forces realistic low-power ranging duty cycles from day one.

## Summary (ZH)

Nordic Semiconductor 发布了 nRF54L15 Tag：直径 33 毫米、由 CR2032 纽扣电池供电的原型平台，基于 nRF54L15 SoC（128 MHz Arm Cortex-M33 加一个用于软件定义外设的 RISC-V 协处理器，256 KB SRAM，1.5 MB 非易失存储）。其核心射频能力是蓝牙 LE 6.0 信道探测（Channel Sounding，基于相位的安全精细测距），同时支持 Thread/Zigbee（IEEE 802.15.4-2020）、Matter、Amazon Sidewalk、NFC，以及新增 4 Mbps 速率的 2.4 GHz 私有模式。平台还支持 Aliro——CSA 的跨厂商智能门锁/门禁标准，与信道探测的安全接近检测场景天然契合。

板载传感器面向边缘 AI 原型开发：6 轴 IMU 用于传感器融合与手势识别、低功耗加速度计用于运动唤醒、环境传感器（温湿度、气压、CO₂）。两个板载芯片天线支撑测距模式，GPIO 焊盘可扩展。售价 30 美元（Farnell、Rutronik、Braemac 渠道），目标场景包括兼容 Apple Find My 和 Google Find Hub 的资产追踪器、智能穿戴和门禁原型。

其意义在于可及性：此前信道探测开发需要完整开发套件和定制射频布局；纽扣电池 Tag 形态加上这一价位，让小团队也能开展安全 BLE 测距原型开发（包括 Aliro 门锁解锁和查找网络场景），且电池约束从一开始就迫使开发者面对真实的低功耗测距占空比。

## Key technical points (EN)

- nRF54L15 SoC: 128 MHz Cortex-M33 + RISC-V coprocessor ("software-defined peripherals"), 256 KB SRAM, 1.5 MB NVM.
- Radios: Bluetooth LE 6.0 with Channel Sounding, Thread/Zigbee (802.15.4-2020), Matter, Amazon Sidewalk, NFC, proprietary 2.4 GHz with a new 4 Mbps mode; two chip antennas.
- Aliro (CSA smart-lock/access standard) support — combined with Channel Sounding this covers the secure door-unlock proximity use case.
- Sensors: 6-axis IMU (edge AI / sensor fusion), low-power wake-up accelerometer, environmental sensor (T/RH/pressure/CO₂).
- 33 mm circular board, CR2032 powered, RGB LED, GPIO expansion footprints; $30 via Farnell/Rutronik/Braemac.
- Target ecosystems: Apple Find My and Google Find Hub asset trackers, wearables, gesture recognition, environmental monitoring.

## Key technical points (ZH)

- nRF54L15 SoC：128 MHz Cortex-M33 + RISC-V 协处理器（"软件定义外设"），256 KB SRAM，1.5 MB 非易失存储。
- 射频：蓝牙 LE 6.0 信道探测、Thread/Zigbee（802.15.4-2020）、Matter、Amazon Sidewalk、NFC、新增 4 Mbps 速率的 2.4 GHz 私有模式；双芯片天线。
- 支持 Aliro（CSA 智能门锁/门禁标准）——与信道探测结合覆盖安全开锁的接近检测场景。
- 传感器：6 轴 IMU（边缘 AI/传感器融合）、低功耗唤醒加速度计、环境传感器（温湿度/气压/CO₂）。
- 33 毫米圆形板、CR2032 供电、RGB LED、GPIO 扩展焊盘；售价 30 美元（Farnell/Rutronik/Braemac）。
- 目标生态：Apple Find My 与 Google Find Hub 资产追踪器、穿戴设备、手势识别、环境监测。

## Why it matters / what's new (EN)

The bt-channel-sounding bin so far tracks the spec trajectory (2026-05-24_bluetooth-core-6-3-spec-release's inline PCT transfer), research (2026-05-24_arxiv-connectionless-ble-cs-pawr), and silicon (2026-05-30_nordic-nrf54lm20b-npu-ble-soc). This entry adds the hardware-accessibility milestone: the first coin-cell, tag-form-factor, sub-$50 prototyping platform with Channel Sounding plus the Aliro access-control standard in one package. It signals Nordic pushing secure fine ranging from evaluation-kit territory toward deployable tracker/lock form factors — a prerequisite for the Find My / Find Hub-scale tracker refresh cycle that Channel Sounding-based anti-stalking and precision finding will need.

## Why it matters / what's new (ZH)

bt-channel-sounding 桶目前覆盖规范演进（2026-05-24_bluetooth-core-6-3-spec-release 的硬件内联 PCT 传输）、研究（2026-05-24_arxiv-connectionless-ble-cs-pawr）和芯片（2026-05-30_nordic-nrf54lm20b-npu-ble-soc）。本条目补充了硬件可及性里程碑：首个纽扣电池、标签形态、低于 50 美元且同时集成信道探测与 Aliro 门禁标准的原型平台。这标志着 Nordic 正把安全精细测距从评估套件阶段推向可部署的追踪器/门锁形态——这是基于信道探测的防跟踪与精确查找进入 Find My / Find Hub 级追踪器换代周期的前提。
