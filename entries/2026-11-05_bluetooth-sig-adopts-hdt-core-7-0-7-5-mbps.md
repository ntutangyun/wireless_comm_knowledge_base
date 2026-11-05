---
id: 2026-11-05_bluetooth-sig-adopts-hdt-core-7-0-7-5-mbps
date_published: 2026-11-04
date_found: 2026-11-05
type: bluetooth-spec
technology: bluetooth
title_en: "Bluetooth SIG adopts High Data Throughput (HDT) as an optional Core 7.0 feature: a new LE PHY with higher-order modulation up to 7.5 Mbps"
title_zh: "蓝牙 SIG 正式采纳高数据吞吐（HDT）作为 Core 7.0 可选特性：新增采用高阶调制的 LE 物理层，最高 7.5 Mbps"
url: "https://www.bluetooth.com/blog/bluetooth-high-data-throughput-delivers-a-higher-level-of-wireless-performance/"
source_quality: full
topics: [BLE, HDT, Core-7.0, PHY, QPSK, 16QAM, LE-Audio, lossless-audio]
topic_primary: bt-le
topics_secondary: [bt-le-audio]
novelty_score: 3
---

## Summary (EN)

In a 4 November 2026 post on its blog (author David Hollander), the Bluetooth SIG announced that it has adopted High Data Throughput (HDT), describing it as the next major stage of Bluetooth's evolution. HDT is an optional feature of the recently adopted Bluetooth Core 7.0 specification. Its core change is a new physical layer with robust modulation schemes that raises the maximum Bluetooth LE bit rate to 7.5 Mbps, which the post describes as nearly four times the LE 2M PHY. The SIG lists four improvement dimensions: faster transfer, more capacity through better spectral efficiency, better energy efficiency (the radio spends less time transmitting) and enhanced reliability.

The SIG names premium wireless audio as the first flagship application, expected in 2027: standardized lossless and high-resolution audio plus multi-channel surround and spatial audio. Other target areas listed are immersive and spatial computing, AI-enabled devices, commercial and industrial systems, and everyday devices such as wearables, smart-home products and peripherals. The post carries supporting quotes from Samsung Electronics and Nordic Semiconductor.

Same-day trade coverage (audioXpress, 4 November 2026) adds PHY-level detail: HDT keeps LE's 2.4 GHz operation and channel spacing for now (per audioXpress) and uses coherent pi/4-QPSK, 8PSK and 16QAM with forward error correction; five rates (2, 3, 4, 6 and 7.5 Mbps) share a fixed 2 Msymbol/s symbol rate, with rates up to 4 Mbps mandatory and 6 and 7.5 Mbps optional; payload aggregation, block-based transmission and selective retransmission limit resends; rate adaptation is per packet with optional link-quality feedback. Connections start on the existing GFSK PHY and can switch to HDT with fallback. HDT requires new radio hardware, so GFSK-only devices cannot gain it through software alone, and 7.5 Mbps is a PHY bit rate rather than application throughput. These PHY-level details are as reported by audioXpress; the SIG blog text itself is a higher-level overview.

## Summary (ZH)

在 2026 年 11 月 4 日的博客文章中（作者 David Hollander），蓝牙 SIG 宣布已正式采纳高数据吞吐（HDT），并称其为蓝牙演进的下一个重要阶段。HDT 是刚刚采纳的蓝牙 Core 7.0 规范中的可选特性。其核心变化是引入采用稳健调制方案的新物理层，将蓝牙 LE 的最高比特率提升到 7.5 Mbps，文章称其接近 LE 2M PHY 的四倍。SIG 列出四个改进维度：更快的传输、通过更高频谱效率带来的更大容量、更好的能效（无线电发射时间更短）以及更强的可靠性。

SIG 将高端无线音频列为首个旗舰应用，预计 2027 年出现：标准化的无损与高解析度音频，以及多声道环绕声与空间音频。文中列出的其他目标领域包括沉浸式与空间计算、AI 设备、商用与工业系统，以及可穿戴、智能家居和外设等日常设备。文章附有三星电子与 Nordic Semiconductor 的引述。

同日行业媒体 audioXpress（2026 年 11 月 4 日）补充了物理层层面的细节：HDT 目前保持 LE 的 2.4 GHz 工作频段和信道间隔（据 audioXpress），采用相干 π/4-QPSK、8PSK 与 16QAM 并结合前向纠错；五种速率（2、3、4、6、7.5 Mbps）共用固定的 2 Msymbol/s 符号率，其中不超过 4 Mbps 的速率为强制，6 与 7.5 Mbps 为可选；负载聚合、基于块的传输和选择性重传用于限制出错后的重传；速率自适应以数据包为单位，并可选链路质量反馈。连接从现有 GFSK PHY 起步，可切换到 HDT 并支持回退。HDT 需要新的射频硬件，因此仅支持 GFSK 的设备无法仅靠软件获得；7.5 Mbps 为物理层比特率而非应用层吞吐量。上述物理层细节来自 audioXpress 的报道，SIG 博客原文本身是较高层次的概述。

## Key technical points (EN)

- **Status**: HDT adopted by the Bluetooth SIG as an optional feature of Core 7.0 (SIG blog, 4 Nov 2026); the KB previously carried only the draft-spec stage.
- **Headline rate**: new PHY raises maximum LE bit rate to 7.5 Mbps, described as nearly 4x LE 2M.
- **Modulation (per audioXpress)**: coherent pi/4-QPSK, 8PSK, 16QAM with FEC; 2 Msymbol/s fixed symbol rate; rates 2/3/4/6/7.5 Mbps, up to 4 Mbps mandatory.
- **Link layer (per audioXpress)**: payload aggregation, block-based transmission, selective retransmission, per-packet rate adaptation with optional link-quality feedback; start on GFSK then switch with fallback.
- **Hardware**: new radio hardware required; not a software upgrade for existing GFSK-only silicon.
- **Caveat**: 7.5 Mbps is a PHY rate; application throughput is lower after protocol overhead.
- **First application**: standardized lossless/high-resolution, multi-channel and spatial audio, expected 2027.
- **Ecosystem (per audioXpress)**: Realtek RTL8773J shown at COMPUTEX 2026; Realtek and Rohde & Schwarz CMP180 HDT test demonstration; Ceva and Actions ATS296X family.

## Key technical points (ZH)

- **状态**：HDT 已由蓝牙 SIG 采纳，作为 Core 7.0 的可选特性（SIG 博客，2026 年 11 月 4 日）；知识库此前仅收录草案阶段。
- **标称速率**：新物理层将 LE 最高比特率提升至 7.5 Mbps，称接近 LE 2M 的 4 倍。
- **调制（据 audioXpress）**：相干 π/4-QPSK、8PSK、16QAM 加 FEC；固定 2 Msymbol/s 符号率；速率 2/3/4/6/7.5 Mbps，4 Mbps 及以下为强制。
- **链路层（据 audioXpress）**：负载聚合、基于块的传输、选择性重传、逐包速率自适应及可选链路质量反馈；先在 GFSK 上建链再切换并支持回退。
- **硬件**：需要新的射频硬件；现有仅支持 GFSK 的芯片无法通过软件升级获得。
- **注意**：7.5 Mbps 为物理层速率；应用层吞吐量在协议开销之后更低。
- **首个应用**：标准化的无损/高解析度、多声道与空间音频，预计 2027 年。
- **生态（据 audioXpress）**：Realtek RTL8773J 亮相 COMPUTEX 2026；Realtek 与罗德与施瓦茨 CMP180 的 HDT 测试演示；Ceva 与 Actions ATS296X 系列。

## Why it matters / what's new (EN)

This moves HDT from the draft stage covered in the KB's 2026-08-05 entry (public-review draft, 7.5 Mbps ladder) and the 2026-10-12 HLC codec-draft entry to an adopted Core 7.0 optional feature, with a stated 2027 target for the first standardized premium-audio application. The SIG blog is overview-level; the modulation and link-layer specifics here come from trade coverage and should be checked against the Core 7.0 specification text. Nordic's prototype-silicon throughput measurements are covered in a companion entry dated 2026-11-05.

## Why it matters / what's new (ZH)

这标志着 HDT 从知识库 2026-08-05 条目（公开评审草案、7.5 Mbps 速率阶梯）及 2026-10-12 HLC 编解码器草案条目所涵盖的草案阶段，进入已采纳的 Core 7.0 可选特性，并给出首个标准化高端音频应用预计于 2027 年出现的时间表。SIG 博客属概述层面；此处的调制与链路层细节来自行业媒体报道，应以 Core 7.0 规范文本为准核对。Nordic 原型芯片的吞吐量实测见同日（2026-11-05）的配套条目。

## Images

![Bluetooth HDT illustration from the SIG blog post | 蓝牙 SIG 博客文章中的 HDT 配图](https://www.bluetooth.com/wp-content/uploads/2026/11/800x800-HDT-AdobeStock_320893861.jpg)
