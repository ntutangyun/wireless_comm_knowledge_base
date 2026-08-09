---
id: 2026-08-09_makerfabs-matouch-mauwb-positioning-board
date_published: 2026-08-09
date_found: 2026-08-09
type: product
technology: uwb
title_en: "Makerfabs MaTouch ESP32-S3 MaUWB: a $60 touchscreen dev board turns UWB indoor positioning into a maker commodity"
title_zh: "Makerfabs MaTouch ESP32-S3 MaUWB：60 美元带触摸屏开发板，把 UWB 室内定位变成创客级商品"
url: "https://www.cnx-software.com/2026/08/09/matouch-esp32-s3-mauwb-board-integrates-3-95-inch-touchscreen-and-uwb-module-for-indoor-positioning-and-ranging/"
source_quality: full
topics: [UWB, indoor-positioning, ranging, DW3000, ESP32, dev-kit]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 1
---

## Summary (EN)

Makerfabs has released the MaTouch ESP32-S3 MaUWB SPI TFT Touch 3.95″ — a $59.80 development board that pairs a Qorvo DW3000-based UWB module (the Makerfabs MaUWB-DW3000) with a 3.95-inch 480×320 touchscreen and an ESP32-S3-WROOM-1 host (dual-core LX7 @ 240 MHz, 512 KB SRAM, 8 MB PSRAM). The UWB radio operates on Channel 5 (6489.6 MHz) at 850 kbps or 6.8 Mbps, and the stock firmware supports positioning networks of up to 8 anchors and 64 tags, computing tag positions by trilateration against up to three fixed anchors in real time.

The significance is not the silicon — the DW3000 is established 802.15.4z-generation hardware — but the packaging: a complete, Arduino-IDE-programmable UWB positioning node with an on-device display for under $60, with example sketches (GFX Library / LVGL positioning demos) on GitHub and a Windows configuration tool. A hobbyist can now stand up a multi-anchor real-time location system with a live map on the tag itself, no custom RF integration or host computer required.

## Summary (ZH)

Makerfabs 发布了 MaTouch ESP32-S3 MaUWB SPI TFT Touch 3.95″ 开发板，售价 59.80 美元，将基于 Qorvo DW3000 的 UWB 模块（Makerfabs MaUWB-DW3000）与 3.95 英寸 480×320 触摸屏及 ESP32-S3-WROOM-1 主控（双核 LX7 @ 240 MHz、512 KB SRAM、8 MB PSRAM）集成在一起。UWB 射频工作在信道 5（6489.6 MHz），速率 850 kbps 或 6.8 Mbps；原厂固件支持最多 8 个锚点（anchor，固定参考节点）和 64 个标签（tag，被定位节点）的定位网络，通过对最多三个固定锚点做三边测量（trilateration）实时解算标签位置。

其意义不在芯片——DW3000 属于成熟的 802.15.4z 代硬件——而在产品形态：不到 60 美元就能获得一个完整的、可用 Arduino IDE 编程、自带屏幕显示的 UWB 定位节点，GitHub 上有示例程序（GFX Library / LVGL 定位演示），并配有 Windows 配置工具。业余开发者现在无需任何射频集成或上位机，就能搭建一套多锚点实时定位系统，并在标签本体上看到实时地图。

## Key technical points (EN)

- Makerfabs MaUWB-DW3000 module (Qorvo DW3000 family), UWB Channel 5 at 6489.6 MHz, 850 kbps / 6.8 Mbps data rates.
- Positioning network scale: up to 8 anchors + 64 tags; real-time trilateration against up to 3 fixed anchors.
- Host: ESP32-S3-WROOM-1 (dual-core Tensilica LX7 @ 240 MHz, 8 MB PSRAM) — Wi-Fi/BLE available alongside UWB for backhaul or configuration.
- 3.95-inch 480×320 TFT with FT6336 capacitive touch — the positioning UI runs on the node itself.
- Arduino IDE support, GitHub example sketches (LVGL/GFX positioning demos), uwbtools.exe Windows configurator; $59.80.

## Key technical points (ZH)

- Makerfabs MaUWB-DW3000 模块（Qorvo DW3000 家族），UWB 信道 5（6489.6 MHz），速率 850 kbps / 6.8 Mbps。
- 定位网络规模：最多 8 锚点 + 64 标签；对最多 3 个固定锚点做实时三边测量。
- 主控：ESP32-S3-WROOM-1（双核 Tensilica LX7 @ 240 MHz、8 MB PSRAM）——Wi-Fi/BLE 可与 UWB 并存，用于回传或配置。
- 3.95 英寸 480×320 TFT 屏 + FT6336 电容触控——定位界面直接运行在节点本体上。
- 支持 Arduino IDE，GitHub 提供示例程序（LVGL/GFX 定位演示），配 uwbtools.exe Windows 配置工具；售价 59.80 美元。

## Why it matters / what's new (EN)

The KB's UWB thread has tracked the top of the market — 802.15.4ab-generation silicon (ST64UWB with NBA assist), automotive safety chips (Infineon AIROC TSL100), and standards work (FiRa's 4ab integration). This entry is the first datapoint from the bottom of the market: UWB positioning as a sub-$60 maker commodity with a turnkey 8-anchor/64-tag stack. Ecosystem breadth at the hobbyist tier is a leading indicator for the technology's mainstream diffusion — the same pattern Wi-Fi and BLE followed, where cheap ESP32-class dev kits preceded mass integration. It also shows the 4z-generation (DW3000) hardware base is now cheap enough to be packaged with displays and shipped as consumer-priced RTLS kits while the industry's attention moves to 4ab.

## Why it matters / what's new (ZH)

本 KB 的 UWB 主线此前跟踪的是市场顶端——802.15.4ab 代芯片（带窄带辅助的 ST64UWB）、车规安全芯片（英飞凌 AIROC TSL100）以及标准工作（FiRa 整合 4ab）。本条目是来自市场底端的第一个数据点：UWB 定位成为不到 60 美元、自带 8 锚点/64 标签成套协议栈的创客级商品。业余爱好者层级的生态广度是技术走向大众化的先行指标——Wi-Fi 与 BLE 都走过同样的路径：廉价 ESP32 级开发板先行，大规模集成随后。这也表明 4z 代（DW3000）硬件基座已足够便宜，可以配上屏幕以消费级价格出售实时定位（RTLS）套件，而产业的注意力正转向 4ab。
