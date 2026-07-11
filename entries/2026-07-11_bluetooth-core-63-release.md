---
id: 2026-07-11_bluetooth-core-63-release
date_published: 2026-05-06
date_found: 2026-07-11
type: bluetooth-spec
technology: bluetooth
title_en: "Bluetooth Core 6.3 released: hardware-inline Channel Sounding PCT transfer, per-PHY RTT precision, HCI mask expansion, Classic/LE RF alignment"
title_zh: "蓝牙核心规范 6.3 发布：信道探测 PCT 硬件内联传输、按 PHY 的 RTT 精度声明、HCI 掩码扩容、Classic/LE 射频对齐"
url: "https://audioxpress.com/news/bluetooth-sig-releases-bluetooth-core-6-3"
source_quality: full
topics: [Bluetooth-6.3, channel-sounding, RTT, HCI, LE-Audio, BR-EDR]
topic_primary: bt-channel-sounding
topics_secondary: [bt-le, bt-le-audio]
novelty_score: 3
---

## Summary (EN)

The Bluetooth SIG released Core Specification 6.3 on May 6, 2026 (ingested now as backfill — the KB's SIG-news source was in a dry spell in May), the second drop of its bi-annual release cadence. The headline is Channel Sounding maturation: the **Inline PCT Transfer** feature moves phase-aligned tone handling directly into hardware, eliminating bulk phase-data reports over HCI — cutting processing overhead and latency for centimetre-class ranging in "find my earbuds" and secure-pairing use cases. Alongside it, **per-PHY RTT precision declarations** let a device state its round-trip-timing accuracy separately for 1M, 2M and 2M 2BT PHYs, so multi-mode systems can pick the PHY that meets a ranging or isochronous-audio synchronisation target.

Two plumbing changes round out the release: the "Running Out of Bits" **HCI command/event mask expansion** gives future features (LE Audio evolutions, HDT) addressing room without breaking legacy stacks, and **ACP / C/I limit relaxation** harmonises RF requirements between Classic (BR/EDR) and LE — simplifying dual-mode radio design for premium audio hardware. The SIG also repeated its guidance that members should market capabilities, not spec version numbers. High Data Throughput (HDT) remains the flagship still in the pipeline, confirmed for 2026 among 50+ active enhancement projects.

## Summary (ZH)

蓝牙 SIG 于 2026 年 5 月 6 日发布核心规范 6.3（现作为回填收录——KB 的 SIG 新闻源 5 月正处枯水期），是其半年节奏的第二次发布。头条是信道探测（Channel Sounding）的成熟化：**内联 PCT 传输**特性将相位对齐音调处理直接下沉到硬件，取消经 HCI 的批量相位数据上报——降低处理开销与时延，服务于"查找耳机"、LE Audio 设备安全配对等厘米级测距场景。与之配套，**按 PHY 的 RTT 精度声明**允许设备分别声明 1M、2M、2M 2BT PHY 下的往返时延精度，多模系统可据此选择满足测距或等时音频同步目标的 PHY。

两项底层改动补齐本次发布："比特告急"**HCI 命令/事件掩码扩容**为未来特性（LE Audio 演进、HDT）预留寻址空间且不破坏既有协议栈；**ACP 与 C/I 限值放宽**协调了 Classic（BR/EDR）与 LE 的射频要求——简化高端音频硬件的双模射频设计。SIG 还重申成员应营销能力而非规范版本号。高数据吞吐（HDT）仍是管线中的旗舰，确认 2026 年推出，位列 50 余个进行中的增强项目之中。

## Key technical points (EN)

- Inline PCT Transfer: phase-aligned tone processing in hardware; no bulk phase reports over HCI; lower CS latency/overhead.
- Per-PHY RTT precision declaration (1M / 2M / 2M 2BT) for mode-aware ranging and iso-audio sync.
- HCI command/event mask expansion ("Running Out of Bits") — forward headroom for LE Audio / HDT features.
- ACP and C/I limit relaxation aligns Classic and LE RF targets; simpler dual-mode chips.
- Bi-annual cadence confirmed; HDT confirmed for 2026 among 50+ enhancement projects.

## Key technical points (ZH)

- 内联 PCT 传输：相位对齐音调硬件化处理；不再经 HCI 批量上报相位；CS 时延/开销更低。
- 按 PHY 的 RTT 精度声明（1M / 2M / 2M 2BT），支持模式感知测距与等时音频同步。
- HCI 命令/事件掩码扩容（"比特告急"）——为 LE Audio / HDT 特性预留前向空间。
- ACP 与 C/I 限值放宽对齐 Classic 与 LE 射频目标；双模芯片设计更简。
- 半年发布节奏确认；HDT 确认 2026 年推出，位列 50 余个增强项目。

## Why it matters / what's new (EN)

The bt-channel-sounding bin tracks CS from the 6.0 debut through academic ranging work (e.g. 2026-05-24_arxiv-connectionless-ble-cs-pawr); 6.3 is the moment CS goes from "specified" to "hardware-optimised" — inline PCT transfer is exactly the change that lets earbud-class silicon do centimetre ranging without an HCI bottleneck. The per-PHY RTT declaration also quietly creates a new interop surface (accuracy becomes a queryable, PHY-specific capability), which ranging-dependent features like digital key and Auracast proximity will build on.

## Why it matters / what's new (ZH)

bt-channel-sounding 板块从 6.0 首发一路跟踪 CS 到学术测距工作（如 2026-05-24_arxiv-connectionless-ble-cs-pawr）；6.3 是 CS 从"已规范"走向"硬件优化"的节点——内联 PCT 传输正是让耳机级芯片摆脱 HCI 瓶颈实现厘米级测距的关键改动。按 PHY 的 RTT 声明还悄然创造了新的互操作面（精度成为可查询、按 PHY 区分的能力），数字钥匙、Auracast 邻近感知等依赖测距的特性将在其上构建。
