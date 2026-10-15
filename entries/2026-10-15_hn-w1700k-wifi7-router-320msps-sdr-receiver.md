---
id: 2026-10-15_hn-w1700k-wifi7-router-320msps-sdr-receiver
date_published: 2026-10-12
date_found: 2026-10-15
type: community-signal
technology: wifi
title_en: "Open-source project turns a Gemtek W1700K Wi-Fi 7 router into a 320 Msps software-defined radio receiver"
title_zh: "开源项目将 Gemtek W1700K Wi-Fi 7 路由器改造为 320 Msps 软件定义无线电接收机"
url: "https://news.ycombinator.com/item?id=50055593"
source_quality: full
topics: [MT7996, software-defined radio, Wi-Fi 7 router, custom radio firmware, IQ capture, spectrum analysis, Airoha AN7581]
topic_primary: wifi7-deployment
topics_secondary: [spectrum-policy]
novelty_score: 2
---

## Summary (EN)

A Hacker News thread (423 points, 124 comments, posted 2026-10-12) points to the open-source `w1700k-sdr` project (github.com/h0m3us3r/w1700k-sdr), which turns a Gemtek W1700K Wi-Fi 7 router into a wideband software-defined receiver. According to the project README, the router's MediaTek MT7996 radio captures raw 14-bit complex IQ at up to 320 Msps, and the Airoha AN7581 SoC streams the samples over a 10 GbE port to a Linux host that shows a live spectrum and waterfall in a browser, with the receiver controls alongside.

The README states that the MT7996 runs only the project's own firmware (a ROM patch plus WM and WA images built from the repository, containing no MediaTek code). That firmware brings the radio up from a cold power-on, with initialisation and calibration decoded register by register from a trace of MediaTek's own firmware, and takes commands (LO, sample rate, capture, stream, gain, filter) from the host. Several HN commenters discuss related hardware, for example one commenter's expectation that the same chipset on a Banana Pi R4 board would work, and an earlier ESP32 Wi-Fi-radio SDR project by the same developer.

## Summary (ZH)

一条 Hacker News 帖子（423 分、124 条评论，发布于 2026-10-12）介绍了开源项目 `w1700k-sdr`（github.com/h0m3us3r/w1700k-sdr），该项目把 Gemtek W1700K Wi-Fi 7 路由器改造成宽带软件定义无线电接收机。根据项目 README，路由器内的联发科 MT7996 射频以最高 320 Msps 采集 14 位复数 IQ 原始数据，由 Airoha AN7581 SoC 经 10 GbE 端口把样本流送至 Linux 主机，主机在浏览器中显示实时频谱和瀑布图，并提供接收机控制。

README 称 MT7996 仅运行项目自带固件（由仓库构建的 ROM 补丁以及 WM、WA 镜像，不含联发科代码）。该固件可在冷启动后自行完成射频初始化，初始化与校准过程是对照联发科自家固件的运行轨迹逐寄存器解码得到的，并接收主机下发的命令（本振、采样率、采集、串流、增益、滤波）。多位 HN 评论者讨论了相关硬件，例如有评论者认为同一芯片组在 Banana Pi R4 开发板上应可使用，以及同一开发者此前基于 ESP32 Wi-Fi 射频的 SDR 项目。

## Key technical points (EN)

- Hardware per the README: Gemtek W1700K (HW 1.x) or W1700K2 (HW 2.1); MediaTek MT7996 radio (MT7976 for 2.4 GHz, two MT7977 for 5 and 6 GHz); Airoha AN7581 SoC.
- Sample rates of 40, 80, 160 or 320 Msps of 14-bit complex IQ on every band; analog filter 20-320 MHz; LO tunable to any frequency the band synthesizer locks at (no channel grid; synthesizer step 2.98 Hz at 2.4 GHz, 11.9-14.3 Hz elsewhere), retuned mid-stream in about 1 ms.
- Transport: the radio DMAs into a 1 GiB ring in SoC DRAM and the kernel sends each 8 KiB slice as one UDP datagram over 10 GbE; at 320 Msps half the slices are packed to 28 bits per sample pair to fit the link (README example shows 9.75 Gbit/s). A 10 GbE NIC on the host is required.
- Host software: a stream service, a 262,144-point FFT at 100 frames/s with a browser UI, and a recorder; the code is MIT licensed, except the Linux driver and kernel patches (GPL-2.0-only), U-Boot patches (GPL-2.0+) and files derived from MediaTek's mt76 driver (BSD-3-Clause-Clear).
- The README says the custom firmware is receive-only (transmit calibrations are not run, MAC transmit path disabled) and that installation replaces the stock operating system (the NAND is backed up first and can be restored).

## Key technical points (ZH)

- README 所述硬件：Gemtek W1700K（HW 1.x）或 W1700K2（HW 2.1）；联发科 MT7996 射频（2.4 GHz 为 MT7976，5 GHz 与 6 GHz 为两颗 MT7977）；Airoha AN7581 SoC。
- 各频段均支持 40、80、160 或 320 Msps 的 14 位复数 IQ 采样率；模拟滤波器 20-320 MHz；本振可调至频段合成器能锁定的任意频率（无信道栅格；合成器步进 2.4 GHz 为 2.98 Hz，其他频段 11.9-14.3 Hz），可在串流中约 1 ms 完成重调。
- 传输：射频经 DMA 写入 SoC 内存中 1 GiB 环形缓冲区，内核将每个 8 KiB 切片作为一个 UDP 数据报经 10 GbE 发出；320 Msps 时一半切片被压缩为每对样本 28 位以适配链路（README 示例为 9.75 Gbit/s）；主机需配备 10 GbE 网卡。
- 主机软件：串流服务、每秒 100 帧的 262,144 点 FFT 及浏览器界面、录制工具；代码主体采用 MIT 许可，Linux 驱动与内核补丁为 GPL-2.0-only，U-Boot 补丁为 GPL-2.0+，源自联发科 mt76 驱动的文件为 BSD-3-Clause-Clear。
- README 称该自定义固件仅接收（不运行发射校准，MAC 发射通路被禁用），且安装会替换原厂操作系统（会先备份 NAND，可恢复）。

## Why it matters / what's new (EN)

This is a community-reported hobbyist/research tool, not a vendor product. What the thread documents is that the MT7996 Wi-Fi 7 radio, normally driven by MediaTek firmware, can be run from independently built firmware as a wideband receive-only IQ source, and that the project publishes a register reference for the MT7996 and AN7581. No performance figures beyond the README's own screenshots (SNR was asked about in the thread) are independently verified here. Commenters note that the same MT7996 chipset is on the Banana Pi R4 board, which is why other boards came up; the README supports only the W1700K and W1700K2, so support for other boards is a commenter's expectation, not a project claim.

## Why it matters / what's new (ZH)

这是社区发布的业余/研究工具，并非厂商产品。帖子记录的内容是：通常由联发科固件驱动的 MT7996 Wi-Fi 7 射频，可以由独立构建的固件作为宽带仅接收 IQ 源运行，且该项目公开了 MT7996 与 AN7581 的寄存器参考。除 README 自带的截图外，此处未对性能数据做独立核实（帖子中有人询问信噪比）。评论者指出 Banana Pi R4 开发板采用同一 MT7996 芯片组，因此提到了其他板卡；README 仅支持 W1700K 与 W1700K2，其他板卡可用只是评论者的推测，并非项目声明。

## Images

None.
