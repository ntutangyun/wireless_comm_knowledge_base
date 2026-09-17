---
id: 2026-09-17_novelbits-hubble-satellite-cc2755p10-dual-stack-ble
date_published: 2026-09-16
date_found: 2026-09-17
technology: bluetooth
type: tutorial
title_en: "Building a Dual-Stack Bluetooth LE / Satellite Device on TI's CC2755P10 with Hubble Network"
title_zh: "基于 TI CC2755P10 与 Hubble Network 构建蓝牙 LE / 卫星双栈设备"
url: "https://novelbits.io/hubble-satellite-cc2755p10-tutorial/"
source_quality: full
topics: [bt-le, satellite-iot, wireless-mcu]
topic_primary: bt-le
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

This Novel Bits article (author Mohammad Afaneh, published Sep 16, 2026, disclosed as a sponsored/paid partnership between Texas Instruments and Hubble) is a hands-on tutorial for building a device on TI's CC2755P10 wireless MCU (Arm Cortex-M33 @ 96 MHz, with 162 KB of SRAM retained in standby per the article; the article's "up to 2 MB flash / 288 KB SRAM" comparison row is annotated as the CC2755P20 figure; integrated power amplifier delivering up to +20 dBm without an external PA) that transmits sensor telemetry over two separate networks using the same hardware and firmware: standard Bluetooth LE advertising packets on a terrestrial network, and a separate proprietary narrowband continuous-wave satellite waveform (explicitly stated by the author to *not* be a Bluetooth LE advertisement) near 2482 MHz to low-Earth-orbit satellites operated by Hubble Network. Hubble's terrestrial network relies on what the article describes as "over 100 million existing scanning gateways" that forward standard BLE advertising packets to the cloud, while the satellite path requires the CC2755P10's on-chip PA (eliminating an external PA on the bill of materials) and, as of September 2026, covers only the United States, Canada, and Mexico, with worldwide coverage described as "on Hubble's roadmap, not on the network you can reach today."

The tutorial walks through reading battery voltage and die temperature from the chip's on-chip Battery Monitor and Temperature drivers (which share a BATMON peripheral), packing them into a fixed-size payload (Hubble satellite payloads must be exactly 0, 4, 9, or 13 bytes; the example uses 4: battery percent, a big-endian millivolt reading, and a signed whole-degree-Celsius temperature), and provisioning the device with orbital parameters, device location, and current UTC time - all delivered over Bluetooth LE via a Hubble-supplied Python companion script, with the time write acting as the "ready to transmit" signal. Three satellite transmission-reliability modes are documented: NONE (1 transmission), NORMAL (8 transmissions at 20 s intervals, the production default; the send call blocks for "a little over two minutes"), and HIGH (16 transmissions at 10 s intervals), with the SDK adding one extra transmission per full retransmission interval of estimated accumulated clock drift, scaled by a configurable drift rate (default 10 ppm). A default 45-degree pass-elevation-angle filter (adjustable 30-90 degrees) governs which satellite passes are used.

The author's own power measurements (via a Joulescope JS320, on the board's 3V3 rail including peripherals) show a standby floor of 2.1 uA (corrected for meter offset) rising to 2.6 uA with the full dual-stack initialized, and a single satellite transmission burst lasting 386.4 ms, drawing a roughly 128 mA current plateau, consuming 44.9 mC of charge and about 134 mJ of energy, for a total of about 359 mC across an 8-transmission NORMAL-mode pass. End-to-end cloud delivery latency is stated as "up to 6 hours from the pass to the data being available"; the article's one worked cloud record shows a satellite packet RSSI of -126 dBm, which the author describes as far weaker than any nearby gateway would produce. The author states explicitly that the satellite network does not provide device positioning - the location shown in cloud records is the provisioned coordinate, not a network-derived fix - and that maximum satellite payload size (13 bytes) means larger datasets must be fragmented across multiple packets by the application. The article also compares the CC2755P10 against TI's CC2340R5 (Cortex-M0+ @ 48 MHz, max +8 dBm requiring an external PA, 64 KB SRAM), positioning the CC2340R5 as more cost-effective for BLE-only designs and the CC2755P10 as removing RF front-end design work when satellite reach is needed, citing shipping-container tracking, agricultural sensors, remote-infrastructure monitoring, and tank-level reporting as the target use cases - scenarios the author frames as "a few bytes a day" workloads not justifying a cellular modem and SIM.

## Summary (ZH)

这篇 Novel Bits 文章（作者 Mohammad Afaneh，发布于 2026 年 9 月 16 日，文中披露为 Texas Instruments 与 Hubble 的赞助/付费合作内容）是一篇实操教程，介绍如何基于 TI 的 CC2755P10 无线 MCU（Arm Cortex-M33 @ 96 MHz，文中称待机时保持 162 KB SRAM；文中对比表"最高 2 MB flash / 288 KB SRAM"一栏标注对应的是 CC2755P20；集成功率放大器，无需外部 PA 即可输出高达 +20 dBm）构建一款设备：使用同一套硬件与固件，通过两个独立网络发送传感器遥测数据——地面网络上的标准蓝牙 LE 广播包，以及一个独立的、专有的窄带连续波卫星波形（作者明确指出该链路"并不是"蓝牙 LE 广播），工作在 2482 MHz 附近，发往 Hubble Network 运营的低地球轨道卫星。Hubble 的地面网络依赖文章所述的"超过 1 亿个现有扫描网关"，将标准蓝牙 LE 广播包转发至云端；而卫星链路则需要用到 CC2755P10 片上集成的功放（从而在物料清单中省去外部 PA），截至 2026 年 9 月，其覆盖范围仅限美国、加拿大和墨西哥，全球覆盖被描述为"在 Hubble 的路线图上，但尚不是当前可用的网络"。

教程演示了如何从芯片片上的电池监测与温度驱动（二者共享一个 BATMON 外设）读取电池电压与芯片结温，并将其打包为固定长度的负载（Hubble 卫星负载必须恰好为 0、4、9 或 13 字节；示例使用 4 字节：电池百分比、一个大端序毫伏读数，以及一个有符号的整摄氏度温度），并通过蓝牙 LE、借助 Hubble 提供的 Python 配套脚本，为设备写入轨道参数、设备位置和当前 UTC 时间——写入时间被用作"已就绪、可发送"的信号。文中记录了三种卫星传输可靠性模式：NONE（发送 1 次）、NORMAL（间隔 20 秒发送 8 次，生产环境默认值；发送调用会阻塞"两分钟多一点"）、HIGH（间隔 10 秒发送 16 次）；SDK 会按估算的累计时钟漂移每达到一个完整重传间隔追加一次发送，漂移率可配置（默认 10 ppm）。默认的卫星过顶仰角过滤阈值为 45 度（可调范围 30-90 度），决定哪些卫星过顶窗口会被用于发送。

作者自行测得的功耗数据（使用 Joulescope JS320，测量板载 3V3 电源轨，含外围电路）显示：待机功耗基线为 2.1 微安（已修正表头偏移），完整初始化双栈后升至 2.6 微安；单次卫星发送持续 386.4 毫秒，电流平台约 128 毫安，消耗电荷约 44.9 毫库仑、能量约 134 毫焦，NORMAL 模式下 8 次发送的整个过顶窗口合计约消耗 359 毫库仑。端到端云端投递延迟被描述为"从过顶到数据可在云端查看最长可达 6 小时"；文中给出的那条示例云端记录中，卫星数据包的 RSSI 为 -126 dBm，作者称其远弱于附近地面网关所能产生的数值。作者明确指出，卫星网络本身不提供设备定位——云端记录中显示的位置是预先配置的坐标，而非网络推算出的定位；卫星单包最大负载为 13 字节，意味着更大的数据集必须由应用层拆分为多个包发送。文章还将 CC2755P10 与 TI 的 CC2340R5（Cortex-M0+ @ 48 MHz，最大 +8 dBm 且需要外部 PA，64 KB SRAM）进行对比，认为纯蓝牙 LE 方案中 CC2340R5 更具成本优势，而需要卫星覆盖时 CC2755P10 可省去射频前端设计工作，文中列举的目标应用包括集装箱追踪、农业传感器、偏远基础设施监测和油罐液位上报——作者将其归纳为"每天仅需几个字节"、不值得为其配备蜂窝模组和 SIM 卡的场景。

## Key technical points (EN)

- **Dual-stack chip**: TI CC2755P10 (Cortex-M33 @ 96 MHz, 162 KB SRAM retained in standby, on-chip PA to +20 dBm; the article's "up to 2 MB flash / 288 KB SRAM" row is annotated CC2755P20) transmits identical sensor telemetry over both a standard Bluetooth LE advertising terrestrial network and a separate proprietary satellite waveform near 2482 MHz - the article states plainly the satellite link "is not a Bluetooth LE advertisement."
- **Provisioning over BLE**: orbital parameters, device location, and UTC time are written to the device over Bluetooth LE via a Hubble-supplied Python script before satellite transmission is possible; the time write is the "ready to transmit" signal.
- **Fixed payload sizes**: satellite payloads must be exactly 0, 4, 9, or 13 bytes; larger data must be fragmented by the application across multiple packets.
- **Reliability modes**: NONE (1x), NORMAL (8x @ 20 s, production default; the send call blocks "a little over two minutes"), HIGH (16x @ 10 s), plus SDK-added retransmissions scaled by a configurable estimated clock-drift rate (default 10 ppm); a configurable 30-90 degree pass-elevation filter (default 45 degrees) selects usable passes.
- **Measured power** (Joulescope JS320, 3V3 rail incl. peripherals): 2.1 uA standby floor, 2.6 uA fully initialized; one satellite TX burst = 386.4 ms, ~128 mA plateau, 44.9 mC / ~134 mJ; ~359 mC for a full 8-transmission NORMAL pass.
- **Coverage and latency caveats stated by the author**: satellite coverage is US/Canada/Mexico only as of Sep 2026; end-to-end cloud delivery takes up to 6 hours; the one worked satellite record's RSSI is -126 dBm; the network does not provide positioning (location field = provisioned coordinate, not a fix).
- **Hardware comparison**: CC2340R5 (Cortex-M0+ @ 48 MHz, max +8 dBm, requires external PA, 64 KB SRAM) is positioned as the cheaper BLE-only alternative to the CC2755P10.

## Key technical points (ZH)

- **双栈芯片**：TI CC2755P10（Cortex-M33 @ 96 MHz，待机时保持 162 KB SRAM，片上集成 PA 可达 +20 dBm；文中"最高 2 MB flash / 288 KB SRAM"一栏标注为 CC2755P20）使用相同的传感器遥测数据，同时通过标准蓝牙 LE 广播地面网络与一个独立的、工作在 2482 MHz 附近的专有卫星波形发送——文章明确指出卫星链路"并不是蓝牙 LE 广播"。
- **通过蓝牙 LE 完成配网**：在可进行卫星发送之前，需通过蓝牙 LE、借助 Hubble 提供的 Python 脚本，向设备写入轨道参数、设备位置与 UTC 时间；写入时间即为"已就绪、可发送"的信号。
- **固定负载长度**：卫星负载必须恰好为 0、4、9 或 13 字节；更大的数据须由应用层拆分为多个包发送。
- **可靠性模式**：NONE（发送 1 次）、NORMAL（间隔 20 秒发送 8 次，生产环境默认；发送调用阻塞"两分钟多一点"）、HIGH（间隔 10 秒发送 16 次）；SDK 还会按可配置的估算时钟漂移率（默认 10 ppm）追加发送；可配置的过顶仰角过滤范围为 30-90 度（默认 45 度），用于筛选可用的卫星过顶窗口。
- **实测功耗**（Joulescope JS320，测量含外围电路的 3V3 电源轨）：待机基线 2.1 微安，完整初始化后 2.6 微安；单次卫星发送耗时 386.4 毫秒，电流平台约 128 毫安，消耗约 44.9 毫库仑电荷 / 约 134 毫焦能量；NORMAL 模式下 8 次发送的完整过顶窗口合计约 359 毫库仑。
- **作者说明的覆盖与延迟限制**：截至 2026 年 9 月，卫星覆盖仅限美国、加拿大、墨西哥；端到端云端投递最长可达 6 小时；文中示例卫星记录的 RSSI 为 -126 dBm；该网络不提供设备定位（云端位置字段为预配置坐标，而非网络推算定位）。
- **硬件对比**：CC2340R5（Cortex-M0+ @ 48 MHz，最大 +8 dBm，需外部 PA，64 KB SRAM）被定位为纯蓝牙 LE 场景下更具成本优势的替代芯片。

## Why it matters / what's new (EN)

The KB's existing Bluetooth-LE-hardware coverage (e.g. the Silicon Labs BG2B entry, 2026-08-14) is about Channel-Sounding-capable BLE SoCs; this article instead documents a BLE MCU whose terrestrial network path is ordinary Bluetooth LE advertising forwarded through a large third-party gateway network, paired on the same silicon with a non-Bluetooth proprietary satellite uplink for the same sensor payload. The concrete, author-measured numbers (per-transmission energy/charge, standby current, end-to-end cloud latency, coverage limits) add a quantified data point on what "adding a satellite path to a BLE device" costs in power and latency terms, and the article itself is careful to draw the line - stated directly by the author - between the BLE advertising path and the separate proprietary satellite waveform, rather than conflating the two.

## Why it matters / what's new (ZH)

知识库现有的蓝牙 LE 硬件相关条目（如 2026-08-14 收录的 Silicon Labs BG2B）关注的是支持 Channel Sounding 的 BLE SoC；而本文记录的是一款蓝牙 LE MCU，其地面网络路径为普通的蓝牙 LE 广播、经由一个规模庞大的第三方网关网络转发，同一颗芯片上还并行提供一条非蓝牙的专有卫星上行链路，用于发送相同的传感器数据。作者实测给出的具体数字（单次发送的能量/电荷消耗、待机电流、端到端云端延迟、覆盖范围限制）为"为蓝牙 LE 设备增加卫星链路"在功耗与延迟层面的成本提供了一个量化数据点；文章本身也明确区分了蓝牙 LE 广播路径与独立的专有卫星波形——这一区分由作者本人在文中直接指出，而非由本条目附加推断。

## Images

![TI LP-EM-CC2755P10 LaunchPad target board with LP-XDS110ET debug probe used in the tutorial | 教程中使用的 TI LP-EM-CC2755P10 LaunchPad 目标板及 LP-XDS110ET 调试探头](https://storage.ghost.io/c/86/70/8670d5a8-12b7-448c-b3db-a85bc1fcdea7/content/images/2026/08/board-landscape-labeled.jpg)
![SDR off-air capture confirming the transmitted payload bytes decode correctly before reaching the Hubble cloud | 通过软件定义无线电离线抓包验证发送的负载字节在到达 Hubble 云端前已正确解码](https://storage.ghost.io/c/86/70/8670d5a8-12b7-448c-b3db-a85bc1fcdea7/content/images/2026/09/sdr-offair-decode-stacked.png)
