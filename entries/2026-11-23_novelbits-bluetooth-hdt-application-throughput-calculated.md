---
id: 2026-11-23_novelbits-bluetooth-hdt-application-throughput-calculated
date_published: 2026-11-19
date_found: 2026-11-23
type: industry-news
technology: bluetooth
title_en: "Novel Bits: Bluetooth High Data Throughput (HDT) application throughput, calculated from the Core 7.0 spec"
title_zh: "Novel Bits：依据 Core 7.0 规范计算蓝牙高数据吞吐（HDT）的实际应用层吞吐量"
url: "https://novelbits.io/bluetooth-hdt-throughput/"
source_quality: full
topics: [BLE, HDT, Core-7.0, throughput, PHY, packet-format, LE-2M]
topic_primary: bt-le
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

This Novel Bits engineering post (Mohammad Afaneh, Nov 19, 2026; sponsored by Nordic Semiconductor) works through what application throughput the Core 7.0 High Data Throughput (HDT) LE PHY delivers compared with its 7.5 Mbps headline rate. The author states that every number is calculated from the Core 7.0 specification, not measured, because no HDT hardware was available for measurement. The post covers how much throughput is achievable, when HDT is worth using over LE 2M, and what changes in firmware when a connection moves to HDT.

For one-way bulk data, each exchange is a data packet, a 150 us inter-frame gap, an acknowledgment and another 150 us gap. Every HDT packet starts with a 37 us preamble and a 32 us control header (69 us), which does not speed up with the rate, so each exchange spends 369 us on gaps and the acknowledgment regardless of rate. The post distinguishes packet format 0 (supported by every HDT device; up to 510 bytes of payload plus MIC, with 494 bytes of payload used in its tables) from the optional format 1 (payloads up to 8,175 bytes split into CRC-protected blocks), and notes a 3,357 us cap on any HDT data packet's airtime, described as chosen for coexistence.

Calculated unencrypted application throughput, with application data taken as payload minus 7 bytes of L2CAP and ATT headers: LE 2M 1.40 Mbps; format 0 with 494-byte payloads HDT2 1.60, HDT3 2.20, HDT4 2.71, HDT6 3.52 and HDT7.5 4.01 Mbps; format 1 at the largest payload fitting the cap HDT2 1.68, HDT3 2.51, HDT4 3.38, HDT6 5.10 and HDT7.5 6.38 Mbps. Streaming 1 MB takes about 5.7 s on LE 2M, 2.0 s on HDT7.5 format 0 and 1.3 s on HDT7.5 format 1. The post lists caveats: the figures assume the default 150 us spacing (the optional Frame Space Update procedure can change it) and exclude encryption, other traffic and connection setup; a device with HDT must support HDT2/3/4 with format 0, while HDT6, HDT7.5 and format 1 are separate optional features. It also cites receiver sensitivity requirements of -75 dBm at HDT2 and -62 dBm at HDT7.5.

## Summary (ZH)

这篇 Novel Bits 工程博文（Mohammad Afaneh，2026 年 11 月 19 日；由 Nordic Semiconductor 赞助）推算 Core 7.0 高数据吞吐（HDT）LE 物理层相对于 7.5 Mbps 标称速率的实际应用层吞吐量。作者说明所有数字均由 Core 7.0 规范计算得出，而非实测，因为没有可用于测量的 HDT 硬件。文章涵盖可达到的吞吐量、相对 LE 2M 何时值得使用 HDT，以及连接切换到 HDT 后固件侧的变化。

对于单向批量数据，每次交换包括数据包、150 us 帧间间隔、确认包和另一个 150 us 间隔。每个 HDT 包都以 37 us 前导码和 32 us 控制头（共 69 us）开始，这部分不随速率加快，因此无论速率如何，每次交换都有 369 us 花在间隔和确认上。文章区分了包格式 0（所有 HDT 设备均支持；载荷加 MIC 最多 510 字节，表中使用 494 字节载荷）与可选的格式 1（载荷最多 8,175 字节，拆分为带 CRC 的块），并指出任何 HDT 数据包的空口时间不得超过 3,357 us，文中称该上限出于共存考虑。

计算得到的未加密应用层吞吐量（应用数据取载荷减去 L2CAP 与 ATT 共 7 字节头）：LE 2M 为 1.40 Mbps；格式 0、494 字节载荷下 HDT2 1.60、HDT3 2.20、HDT4 2.71、HDT6 3.52、HDT7.5 4.01 Mbps；格式 1、在上限内取最大载荷时 HDT2 1.68、HDT3 2.51、HDT4 3.38、HDT6 5.10、HDT7.5 6.38 Mbps。传输 1 MB 在 LE 2M 上约需 5.7 s，HDT7.5 格式 0 约 2.0 s，HDT7.5 格式 1 约 1.3 s。文章列出了前提：数字基于默认 150 us 间隔（可选的帧间隔更新过程可改变它），不含加密、其他流量和连接建立；支持 HDT 的设备必须支持格式 0 下的 HDT2/3/4，而 HDT6、HDT7.5 和格式 1 是各自独立的可选特性。文章还引用了接收灵敏度要求：HDT2 为 -75 dBm，HDT7.5 为 -62 dBm。

## Key technical points (EN)

- **Rates**: HDT2, HDT3, HDT4, HDT6, HDT7.5, using the same 2 MHz channels and symbol rate as LE 2M, with more bits per symbol above HDT2.
- **Fixed overhead**: 69 us preamble plus control header per packet (the acknowledgment is the same 69 us); two 150 us gaps; 369 us per exchange.
- **Formats**: format 0 mandatory (single coded stream, 32-bit CRC, up to 510 bytes payload plus MIC); format 1 optional (up to 8,175 bytes, per-block CRC, PHY Intervals of 128/256/384/512 symbols).
- **Airtime cap**: 3,357 us for any data-bearing HDT packet (largest unencrypted format 1 payload about 2,979 bytes at HDT7.5 and 789 bytes at HDT2).
- **Calculated throughput**: LE 2M 1.40 Mbps; HDT7.5 4.01 Mbps (format 0) and 6.38 Mbps (format 1). Formula: 8 x (payload - 7) / (airtime + 369), with 344 in place of 369 for LE 2M.
- **Link considerations**: sensitivity requirement -75 dBm (HDT2) versus -62 dBm (HDT7.5); a control header that cannot be read ends the connection event.
- **Stated limits**: calculated, not measured; default spacing; excludes encryption, other traffic and setup; HDT6, HDT7.5, format 1 and Frame Space Update are optional.

## Key technical points (ZH)

- **速率**：HDT2、HDT3、HDT4、HDT6、HDT7.5，信道宽度 2 MHz 和符号率与 LE 2M 相同，HDT2 以上每符号承载更多比特。
- **固定开销**：每包 69 us 前导码加控制头（确认包同为 69 us）；两个 150 us 间隔；每次交换 369 us。
- **格式**：格式 0 为必选（单一编码流，32 位 CRC，载荷加 MIC 最多 510 字节）；格式 1 为可选（最多 8,175 字节，分块 CRC，PHY 间隔为 128/256/384/512 符号）。
- **空口时间上限**：任何携带数据的 HDT 包不超过 3,357 us（未加密格式 1 最大载荷在 HDT7.5 下约 2,979 字节，HDT2 下 789 字节）。
- **计算吞吐量**：LE 2M 为 1.40 Mbps；HDT7.5 为 4.01 Mbps（格式 0）和 6.38 Mbps（格式 1）。公式：8 x (载荷 - 7) / (空口时间 + 369)，LE 2M 以 344 取代 369。
- **链路方面**：灵敏度要求 HDT2 为 -75 dBm、HDT7.5 为 -62 dBm；控制头无法读取时会结束连接事件。
- **作者声明的局限**：为计算值而非实测；默认间隔；不含加密、其他流量和建立过程；HDT6、HDT7.5、格式 1 和帧间隔更新均为可选。

## Why it matters / what's new (EN)

The KB already holds the SIG adoption of HDT in Core 7.0 and Nordic's silicon demonstration. This post adds a spec-derived estimate of how much of the headline rate an application can use, and shows why the fixed per-exchange overhead keeps format 0 near 4 Mbps at HDT7.5. The figures are model results from a Nordic-sponsored blog, not hardware measurements, so real throughput will depend on the options a controller supports and on link conditions.

## Why it matters / what's new (ZH)

知识库已收录 SIG 在 Core 7.0 中采纳 HDT 以及 Nordic 的芯片演示。本文补充了依据规范推算的、应用层可利用标称速率比例的估计，并说明固定的每次交换开销为何使格式 0 在 HDT7.5 下仅接近 4 Mbps。这些数字来自一家由 Nordic 赞助的博客的模型计算，而非硬件测量，实际吞吐量取决于控制器支持的可选特性和链路条件。

## Images

No figures are embedded; see the source page (https://novelbits.io/bluetooth-hdt-throughput/) for its diagrams and tables.
