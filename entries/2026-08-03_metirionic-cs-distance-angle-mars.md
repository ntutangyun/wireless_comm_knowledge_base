---
id: 2026-08-03_metirionic-cs-distance-angle-mars
date_published: 2026-03-09
date_found: 2026-08-03
type: industry-news
technology: bluetooth
title_en: "Metirionic MARS: first public demo of simultaneous distance AND angle estimation from Bluetooth Channel Sounding, on Nordic nRF54L15 with quad-antenna arrays"
title_zh: "Metirionic MARS：全球首次公开演示由蓝牙信道探测同时估计距离与角度，基于 Nordic nRF54L15 与四天线阵列"
url: "https://markets.financialcontent.com/clarkebroadcasting.mymotherlode/article/gnwcq-2026-3-9-metirionic-debuts-industry-first-bluetooth-channel-sounding-solution-for-simultaneous-distance-and-angle-precision"
source_quality: full
topics: [Bluetooth-6.0, channel-sounding, ranging, angle-estimation, positioning]
topic_primary: bt-channel-sounding
topics_secondary: [bt-location]
novelty_score: 2
---

## Summary (EN)

Metirionic (Dresden-based ranging-stack specialist) demonstrated on 9 March 2026 the first public system extracting both high-accuracy distance and precision bearing from a single Bluetooth Channel Sounding measurement procedure. Standard Bluetooth 6.0 Channel Sounding delivers ranging only; angle determination has historically required the separate AoA/AoD direction-finding feature with its dedicated CTE (constant tone extension) hardware path. Metirionic's Advanced Ranging Stack (MARS) instead mines the channel-sounding exchange itself: it analyzes Channel Impulse Response data across a quad-antenna array to characterize indoor multipath, identifies the direct path, suppresses reflection error, and computes range and bearing simultaneously — sub-meter spatial positioning, with a claimed 2x performance gain for dual-antenna over single-antenna designs.

The demo hardware stack is notable for spanning the CS ecosystem: a Nordic nRF54L15 initiator, Synaptics Veros connectivity silicon, Ezurio dual-antenna modules (commercially available dev kits), and a Bauer door-lock platform as the first commercial transition. Partners include onceLabs, Ellisys, Minew, Raytac and Fanstel. This entry is a deliberate catch-up ingest: the KB's channel-sounding coverage (Core 6.3 hardware-inline CS, Nordic nRF54L15 Tag, connectionless CS via PAwR) had no datapoint on angle extraction from CS — the capability that pushes CS from "secure ranging" toward full local positioning without CTE antennas.

## Summary (ZH)

Metirionic（德累斯顿测距协议栈厂商）于 2026 年 3 月 9 日完成首次公开演示：从单次蓝牙信道探测（Channel Sounding）测量流程中同时提取高精度距离与方位角。标准蓝牙 6.0 信道探测只提供测距；角度测定此前需要独立的 AoA/AoD 测向特性及其专用 CTE（恒定音扩展）硬件路径。Metirionic 的高级测距协议栈（MARS）直接挖掘信道探测交换本身：跨四天线阵列分析信道冲激响应（CIR）数据以刻画室内多径、识别直射路径、抑制反射误差，同时计算距离与方位——亚米级空间定位，双天线设计相对单天线宣称 2 倍性能增益。

演示硬件栈横跨 CS 生态：Nordic nRF54L15 发起端、Synaptics Veros 连接芯片、Ezurio 双天线模组（开发套件已商用）、以及作为首个商用落地的 Bauer 门锁平台。合作方包括 onceLabs、Ellisys、Minew、Raytac、Fanstel。本条目为有意补录：本库的信道探测覆盖（Core 6.3 硬件内联 CS、Nordic nRF54L15 Tag、经 PAwR 的无连接 CS）此前没有任何「从 CS 提取角度」的数据点——而正是该能力把 CS 从「安全测距」推向无需 CTE 天线的完整本地定位。

## Key technical points (EN)

- MARS analyzes Channel Impulse Response across a quad-antenna array: direct-path identification + reflection suppression → simultaneous range and bearing from one CS procedure.
- Sub-meter positioning claimed; dual-antenna designs deliver ~2x performance over single-antenna.
- No CTE/AoA hardware needed — angle rides on the same CS exchange used for secure ranging.
- Ecosystem-wide demo stack: Nordic nRF54L15 initiator, Synaptics Veros, Ezurio dual-antenna modules, Bauer door lock; Ellisys/Minew/Raytac/Fanstel among partners.
- Ezurio dual-antenna nRF54L15 dev kits commercially available at announcement.

## Key technical points (ZH)

- MARS 跨四天线阵列分析信道冲激响应：直射路径识别 + 反射抑制 → 单次 CS 流程同时得到距离与方位。
- 宣称亚米级定位；双天线设计较单天线约 2 倍性能。
- 无需 CTE/AoA 硬件——角度信息搭载于用于安全测距的同一 CS 交换。
- 生态级演示栈：Nordic nRF54L15 发起端、Synaptics Veros、Ezurio 双天线模组、Bauer 门锁；合作方含 Ellisys/Minew/Raytac/Fanstel。
- Ezurio 双天线 nRF54L15 开发套件发布时即已商用。

## Why it matters / what's new (EN)

The KB's bt-channel-sounding thread has tracked CS efficiency (Core 6.3's hardware-inline PCT transfer), CS scale (connectionless CS over PAwR), and CS silicon (Nordic nRF54L15 Tag) — but every entry assumed CS = distance only. Angle-from-CIR changes the competitive picture against UWB two ways: it narrows UWB's 2D-positioning advantage without new antennas beyond an array, and it does so on commodity BLE silicon already shipping for ranging. Worth watching whether the technique gets standardized or stays a proprietary stack-vendor differentiator — the same fork the KB has watched play out in Wi-Fi sensing.

## Why it matters / what's new (ZH)

本库 bt-channel-sounding 主线已覆盖 CS 效率（Core 6.3 硬件内联 PCT 传输）、CS 规模（经 PAwR 的无连接 CS）与 CS 芯片（Nordic nRF54L15 Tag）——但每个条目都默认 CS 只做距离。「从 CIR 提取角度」从两个方向改变了与 UWB 的竞争格局：它在除阵列外无需新天线的前提下收窄了 UWB 的 2D 定位优势，且运行在已为测距出货的商用 BLE 芯片上。值得关注该技术是走向标准化还是保持为协议栈厂商的私有差异化——与本库在 Wi-Fi 感知领域观察到的分叉如出一辙。
