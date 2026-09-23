---
id: 2026-09-23_atmosic-atm53-ble63-channel-sounding-soc
date_published: 2026-09-17
date_found: 2026-09-23
type: product
technology: bluetooth
title_en: "Atmosic ATM53: an ultra-low-power Bluetooth 6.3 SoC with in-line PCT Channel Sounding for asset tracking"
title_zh: "Atmosic ATM53：集成内联相位校正项（PCT）信道探测的超低功耗蓝牙 6.3 SoC，面向资产追踪场景"
url: "https://www.01net.it/atmosic-unveils-atm53-series-a-new-era-in-physical-ai-driven-asset-tracking/"
source_quality: full
topics: [Bluetooth-6.3, channel-sounding, PCT, asset-tracking, IoT, products]
topic_primary: bt-channel-sounding
topics_secondary: [bt-le, bt-location]
novelty_score: 2
---

## Summary (EN)

Atmosic Technologies announced its ATM53-series Bluetooth SoC on 2026-09-17 (Business Wire release, reprinted by 01net.it). The ATM53 implements Bluetooth 6.3 with **in-line PCT (Phase Correction Term) Channel Sounding**, described as aligned with the latest iOS and Android Channel Sounding stacks, aimed at high-accuracy distance measurement for consumer trackers and enterprise asset-management tags. The chip pairs an Arm Cortex-M33F core with 512 KB ROM, 256 KB RAM, up to 2 MB of non-volatile memory, and 48 GPIOs. Atmosic ships it alongside a **footprint-compatible ATM52** — a Bluetooth 5.4 variant without Channel Sounding — so OEMs can cover multiple product tiers (a Channel Sounding-capable premium SKU and a cheaper BLE-only SKU) from a single PCB layout. Sampling is available now in QFN and BGA packages, with production targeted for Q4 2026.

Atmosic's pitch is that in-line PCT hardware acceleration lets the ATM53 deliver Channel Sounding-grade ranging without giving up the company's ultra-low-power positioning — no specific battery-life figure is disclosed; the CEO's stated claim is that the part "delivers high-accuracy channel sounding without sacrificing energy efficiency."

## Summary (ZH)

Atmosic Technologies 于 2026-09-17 发布 ATM53 系列蓝牙 SoC（Business Wire 新闻稿，01net.it 转载）。ATM53 支持蓝牙 6.3，集成**内联 PCT（相位校正项，Phase Correction Term）信道探测（Channel Sounding）**，据称与最新的 iOS、Android 信道探测协议栈对齐，面向消费级追踪器与企业资产管理标签的高精度测距需求。芯片搭载 Arm Cortex-M33F 内核，配备 512 KB ROM、256 KB RAM、最多 2 MB 非易失存储与 48 个 GPIO。Atmosic 同时推出**引脚兼容的 ATM52**——一款不含信道探测功能的蓝牙 5.4 版本，使 OEM 厂商可用同一 PCB 设计覆盖高低两档产品线（支持信道探测的高端型号与更便宜的纯 BLE 型号）。目前已开放 QFN 与 BGA 封装采样，量产计划于 2026 年第四季度启动。

Atmosic 的定位是：借助内联 PCT 硬件加速，ATM53 可提供信道探测级别的测距精度，同时不牺牲公司一贯主打的超低功耗特性——公告未给出具体电池续航数字；其 CEO 的表述是该芯片"在不牺牲能效的前提下实现高精度信道探测"。

## Key technical points (EN)

- Announced 2026-09-17. Bluetooth 6.3 with in-line PCT Channel Sounding, described as aligned with current iOS/Android Channel Sounding implementations.
- Core: Arm Cortex-M33F; 512 KB ROM, 256 KB RAM, up to 2 MB non-volatile memory; 48 GPIOs.
- Sibling part: ATM52, footprint-compatible Bluetooth 5.4 SoC without Channel Sounding — same PCB, two product tiers.
- Packages: QFN and BGA. Sampling now; production targeted Q4 2026.
- Positioning: high-accuracy distance measurement (asset tags, enterprise tracking) without giving up Atmosic's ultra-low-power architecture; no specific battery-life number disclosed.

## Key technical points (ZH)

- 发布时间：2026-09-17。支持蓝牙 6.3 及内联 PCT 信道探测，据称与当前 iOS/Android 的信道探测实现保持一致。
- 内核：Arm Cortex-M33F；512 KB ROM、256 KB RAM、最多 2 MB 非易失存储；48 个 GPIO。
- 同系列型号：ATM52，引脚兼容的蓝牙 5.4 SoC，不含信道探测功能——同一 PCB 覆盖高低两档产品线。
- 封装：QFN 与 BGA。现已开放采样；量产计划 2026 年第四季度。
- 定位：面向资产标签、企业追踪场景的高精度测距，同时保留 Atmosic 的超低功耗架构；公告未披露具体电池续航数字。

## Why it matters / what's new (EN)

This KB's `bt-channel-sounding` bin already tracks Channel Sounding silicon from Nordic (nRF54L15 Tag, 2026-07-06; nRF54LC10A, 2026-09-18) and Silicon Labs (BG2B, 2026-08-14). The Atmosic ATM53 adds a third vendor, and its angle is a tiered, PCB-compatible family (ATM52/ATM53) built on Atmosic's ultra-low-power positioning, rather than Nordic's multiprotocol (Thread/Zigbee/Matter) framing.

## Why it matters / what's new (ZH)

本知识库的 `bt-channel-sounding` 主题此前已记录 Nordic（2026-07-06 的 nRF54L15 Tag、2026-09-18 的 nRF54LC10A）与 Silicon Labs（2026-08-14 的 BG2B）的信道探测芯片。Atmosic ATM53 是该主题下的第三家厂商，其差异化打法是围绕自身超低功耗定位推出引脚兼容的高低两档产品族（ATM52/ATM53），而非 Nordic 的 Thread/Zigbee/Matter 多协议整合思路。

## Images

None.
