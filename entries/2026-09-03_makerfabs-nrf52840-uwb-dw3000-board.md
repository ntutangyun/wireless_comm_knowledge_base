---
id: 2026-09-03_makerfabs-nrf52840-uwb-dw3000-board
date_published: 2026-09-01
date_found: 2026-09-03
type: product
technology: uwb
title_en: "Makerfabs nRF52840 UWB DW3000: a $43.80 Bluetooth 5.0 + UWB (DW3210, channels 5/9) ranging board with Arduino examples for up to 8 anchors and 8 tags"
title_zh: "Makerfabs nRF52840 UWB DW3000：售价 43.80 美元的蓝牙 5.0 + UWB（DW3210，信道 5/9）测距开发板，附最多 8 锚点 / 8 标签的 Arduino 示例"
url: https://linuxgizmos.com/bluetooth-uwb-board-based-on-nrf52840-offers-10cm-accuracy/
source_quality: full
topics: [UWB, DW3000, DW3210, nRF52840, Bluetooth 5.0, ranging, indoor positioning, maker]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 1
---

## Summary (EN)

LinuxGizmos (1 September 2026) reports a new Makerfabs development board, the **nRF52840 UWB DW3000**, that pairs a Nordic nRF52840 (64 MHz Arm Cortex-M4F, 1 MB flash, 256 KB RAM) with a Qorvo DW3000-series ultra-wideband radio — LinuxGizmos identifies the part as the **DW3210**. Bluetooth from the MCU is 2.4 GHz Bluetooth 5.0 at 2 Mbps, 1 Mbps, 500 kbps and 125 kbps. The UWB side operates on **channels 5 and 9** (6489.6 MHz and 7987.2 MHz) at **850 kbps and 6.8 Mbps**; Makerfabs specifies a range "of more than 30 meters when operating at 850kbps and a positioning error of approximately 10cm". The board carries a 1.3-inch OLED on the underside, two USB Type-C ports (one native, one via a CH340K bridge), a 3.7 V LiPo charger with a MAX17048 fuel gauge, and 2.54 mm headers exposing nearly 40 nRF52840 signals; the stated operating range is −40 °C to +85 °C. It is priced at **$43.80**.

Software support is Arduino-based: the GitHub repository (Makerfabs/nRF52840-UWB-DW3000) provides single anchor–tag TX/RX ranging sketches, a multi-node example that coordinates up to **eight anchors and eight tags** with a master anchor handling network synchronisation, and a Python desktop utility for real-time position visualisation, supplied as a Windows executable (uwb_visualizer.exe). The repository notes that the DW3000 library itself was developed by NConcepts and that Makerfabs only maintains the repository.

## Summary (ZH)

LinuxGizmos（2026 年 9 月 1 日）报道了 Makerfabs 的一款新开发板 **nRF52840 UWB DW3000**，将 Nordic nRF52840（64 MHz Arm Cortex-M4F，1 MB 闪存，256 KB RAM）与 Qorvo DW3000 系列超宽带射频结合——LinuxGizmos 将该器件标识为 **DW3210**。MCU 侧的蓝牙为 2.4 GHz 蓝牙 5.0，支持 2 Mbps、1 Mbps、500 kbps 与 125 kbps。UWB 侧工作在**信道 5 与 9**（6489.6 MHz 与 7987.2 MHz），数据速率 **850 kbps 与 6.8 Mbps**；Makerfabs 给出的指标为"850 kbps 下测距超过 30 米，定位误差约 10 cm"。板载一块背面安装的 1.3 英寸 OLED、两个 USB Type-C 口（一个原生，一个经 CH340K 桥接）、带 MAX17048 电量计的 3.7 V 锂电充电电路，以及引出近 40 路 nRF52840 信号的 2.54 mm 排针；标称工作温度 −40 °C 至 +85 °C。售价 **43.80 美元**。

软件方面基于 Arduino：GitHub 仓库（Makerfabs/nRF52840-UWB-DW3000）提供单锚点–单标签的 TX/RX 测距示例、一个由主锚点负责网络同步、最多协调 **8 个锚点与 8 个标签** 的多节点示例，以及一个用于实时位置可视化的 Python 桌面工具（以 Windows 可执行文件 uwb_visualizer.exe 形式提供）。仓库说明 DW3000 库由 NConcepts 开发，Makerfabs 仅负责维护该仓库。

## Key technical points (EN)

- **MCU**: Nordic nRF52840 — 64 MHz Cortex-M4 with FPU, 1 MB flash, 256 KB RAM; Bluetooth 5.0 at 2 Mbps / 1 Mbps / 500 kbps / 125 kbps.
- **UWB radio**: DW3000 series, identified as the DW3210 by LinuxGizmos; channels 5 (6489.6 MHz) and 9 (7987.2 MHz); 850 kbps and 6.8 Mbps.
- **Stated performance**: >30 m range at 850 kbps; ~10 cm positioning error.
- **I/O and power**: 1.3-inch OLED; two USB-C (native + CH340K); 3.7 V LiPo charging with MAX17048 fuel gauge; ~40 GPIO/peripheral signals on 2.54 mm headers; −40 °C to +85 °C.
- **Software**: Arduino DW3000 library (by NConcepts); single anchor–tag and multi-node (up to 8 anchors + 8 tags, master-anchor synchronisation) examples; Python positioning visualiser, supplied as a Windows executable (uwb_visualizer.exe).
- **Price**: $43.80 (Makerfabs store).

## Key technical points (ZH)

- **MCU**：Nordic nRF52840——64 MHz 带 FPU 的 Cortex-M4，1 MB 闪存，256 KB RAM；蓝牙 5.0，速率 2 Mbps / 1 Mbps / 500 kbps / 125 kbps。
- **UWB 射频**：DW3000 系列，LinuxGizmos 标识为 DW3210；信道 5（6489.6 MHz）与 9（7987.2 MHz）；850 kbps 与 6.8 Mbps。
- **标称性能**：850 kbps 下测距 >30 m；定位误差约 10 cm。
- **接口与供电**：1.3 英寸 OLED；两个 USB-C（原生 + CH340K）；带 MAX17048 电量计的 3.7 V 锂电充电；2.54 mm 排针引出约 40 路 GPIO/外设信号；−40 °C 至 +85 °C。
- **软件**：Arduino DW3000 库（NConcepts 开发）；单锚点–单标签与多节点（最多 8 锚点 + 8 标签，主锚点同步）示例；Python 定位可视化工具，以 Windows 可执行文件 uwb_visualizer.exe 形式提供。
- **价格**：43.80 美元（Makerfabs 商店）。

## Why it matters / what's new (EN)

This knowledge base already records two maker-grade UWB boards from the same month: Makerfabs' MaTouch ESP32-S3 MaUWB board (9 August 2026) and M5Stack's Stamp UWB modules on the Qorvo QM33120W (14 August 2026). The new board differs from those in one concrete respect the source states: the host MCU is a Bluetooth 5.0 nRF52840 rather than an ESP32-S3, so Bluetooth LE and DW3000 UWB ranging sit on one $43.80 board with Arduino examples. Its specifications (channels 5/9, 850 kbps / 6.8 Mbps, ~10 cm error, >30 m range) match the DW3000-class figures already recorded for Makerfabs' earlier boards, so this is an incremental addition to the low-cost UWB ranging catalogue rather than a new capability.

## Why it matters / what's new (ZH)

本知识库已记录同月的两款创客级 UWB 开发板：Makerfabs 的 MaTouch ESP32-S3 MaUWB 板（2026 年 8 月 9 日）与 M5Stack 基于 Qorvo QM33120W 的 Stamp UWB 模组（2026 年 8 月 14 日）。新板与它们的具体差异只有来源明确指出的一点：主控为蓝牙 5.0 的 nRF52840 而非 ESP32-S3，因此低功耗蓝牙与 DW3000 UWB 测距集成在一块 43.80 美元、附 Arduino 示例的板子上。其指标（信道 5/9、850 kbps / 6.8 Mbps、约 10 cm 误差、>30 m 测距）与本知识库此前为 Makerfabs 早期板卡记录的 DW3000 级别数据一致，因此这是低成本 UWB 测距产品目录的增量补充，而非新能力。

## Images

None.
