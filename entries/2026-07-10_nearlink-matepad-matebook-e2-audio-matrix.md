---
id: 2026-07-10_nearlink-matepad-matebook-e2-audio-matrix
date_published: 2026-07-05
date_found: 2026-07-10
type: industry-news
technology: nearlink
title_en: "Huawei publishes NearLink capability matrix for tablets/PCs: E1.0 peripherals everywhere, E2.0 audio only on MatePad Pro Max"
title_zh: "华为公布平板/鸿蒙电脑星闪能力清单：E1.0 外设全线覆盖，E2.0 音频仅 MatePad Pro Max"
url: "https://finance.sina.cn/stock/jdts/2026-07-05/detail-iniftwhz2152473.d.html"
source_quality: full
topics: [NearLink, SparkLink, E1.0, E2.0, NearLink-audio, HarmonyOS]
topic_primary: nearlink-sle
topics_secondary: [nearlink-slb]
novelty_score: 1
---

## Summary (EN)

Huawei published (July 5, 2026) an official compatibility matrix disclosing which MatePad tablets and HarmonyOS MateBook computers support NearLink (星闪), and — more interestingly — **which access-layer version each device implements**. The matrix splits the fleet into **E1.0** (peripheral connectivity: stylus, keyboard, mouse) and **E2.0** (adds NearLink audio). E1.0 coverage is broad: MatePad Mini (incl. reading edition), Air 12" (incl. 2025 models), 11.5" S, the Pro 11/12.2/13.2 series, Edge, plus MateBook Pro, MateBook Fold Ultimate Design and MateBook 14 HarmonyOS Edition.

**E2.0 — and with it NearLink audio — ships on exactly one device: MatePad Pro Max**, which can drive FreeBuds Pro 5 / FreeClip earbuds over NearLink at **48 kHz / 24-bit lossless with a 16 Mbps link** (versus roughly 2 Mbps ceilings for classic Bluetooth audio paths). Every other listed device is peripherals-only.

The disclosure is consumer-facing but standards-relevant: it is the first vendor document that maps the E1.0/E2.0 access-layer generations onto a real product fleet, showing how thin the E2.0 audio tier still is a year after NearLink audio's commercial debut — and it lands ten days before the July 15 full open-sourcing of the NearLink protocol stack (see 2026-06-23_nearlink-open-source-openharmony-hdc2026).

## Summary (ZH)

华为于 2026 年 7 月 5 日公布官方兼容清单，披露哪些 MatePad 平板与鸿蒙 MateBook 电脑支持星闪（NearLink），以及——更有意思的——**每台设备实现的接入层版本**。清单将产品线分为 **E1.0**（外设连接：手写笔、键盘、鼠标）与 **E2.0**（增加星闪音频）。E1.0 覆盖面广：MatePad Mini（含阅读版）、Air 12 英寸（含 2025 款）、11.5"S、Pro 11/12.2/13.2 系列、Edge，以及 MateBook Pro、MateBook Fold 非凡大师、MateBook 14 鸿蒙版。

**E2.0——以及随之而来的星闪音频——目前仅一台设备搭载：MatePad Pro Max**，可经星闪以 **48 kHz / 24-bit 无损、16 Mbps 链路**驱动 FreeBuds Pro 5 / FreeClip 耳机（经典蓝牙音频路径的上限约 2 Mbps）。其余所有列出设备均为仅外设。

这一披露面向消费者但具标准意义：它是首份将 E1.0/E2.0 接入层代际映射到真实产品阵列的厂商文档，显示星闪音频商用一年后 E2.0 层仍然很薄——且发布时点在 7 月 15 日星闪协议栈全量开源（见 2026-06-23_nearlink-open-source-openharmony-hdc2026）前十天。

## Key technical points (EN)

- **E1.0**: stylus / keyboard / mouse peripheral connectivity — implemented across ~12 MatePad/MateBook models.
- **E2.0**: adds NearLink audio — currently **MatePad Pro Max only**.
- NearLink audio: **48 kHz / 24-bit lossless, 16 Mbps** transmission to FreeBuds Pro 5 / FreeClip.
- First official device-by-device access-layer-version disclosure for the NearLink fleet.
- Timing: 10 days before the July 15 full protocol-stack open-sourcing announced at HDC 2026.

## Key technical points (ZH)

- **E1.0**：手写笔/键盘/鼠标外设连接——覆盖约 12 款 MatePad/MateBook 机型。
- **E2.0**：增加星闪音频——目前**仅 MatePad Pro Max**。
- 星闪音频：**48 kHz / 24-bit 无损、16 Mbps** 传输至 FreeBuds Pro 5 / FreeClip。
- 首份逐设备披露星闪接入层版本的官方文档。
- 时点：HDC 2026 宣布的 7 月 15 日协议栈全量开源前十天。

## Why it matters / what's new (EN)

The KB's NearLink bin tracks the ecosystem top-down (open-sourcing, car keys, chip labs); this is the first bottom-up datapoint showing actual E-version penetration in shipping devices. The E1.0/E2.0 split matters for the coexistence and audio threads: 16 Mbps lossless audio is NearLink's clearest differentiation against LE Audio, but a one-device tier means the audio ecosystem is still in the seeding stage. Watch whether the July 15 open-source drop includes E2.0 audio profiles — that would let third-party silicon enter the tier.

## Why it matters / what's new (ZH)

KB 的星闪板块此前自上而下跟踪生态（开源、车钥匙、芯片实验室）；本条是首个自下而上的数据点，展示 E 版本在在售设备中的真实渗透。E1.0/E2.0 之分对共存与音频两条线都重要：16 Mbps 无损音频是星闪对 LE Audio 最清晰的差异化，但"单设备层级"说明音频生态仍处播种期。关注 7 月 15 日开源是否包含 E2.0 音频配置文件——那将允许第三方芯片进入该层级。
