---
id: 2026-11-05_nordic-channel-sounding-comes-to-iphone-ios-27-ipt
date_published: 2026-11-02
date_found: 2026-11-05
type: industry-news
technology: bluetooth
title_en: "Nordic: Bluetooth Channel Sounding now works on iPhone (iOS 27, iPhone 17 and later) as well as Android, with Inline PCT Transfer required for iPhone accessories"
title_zh: "Nordic：蓝牙信道探测现已支持 iPhone（iOS 27，iPhone 17 及更新机型）与 Android，iPhone 配件需支持内联 PCT 传输（IPT）"
url: "https://devzone.nordicsemi.com/nordic/nordic-blog/b/blog/posts/bluetooth-channel-sounding-comes-to-iphone-distance-measurement-for-both-ecosystems"
source_quality: full
topics: [BLE, channel-sounding, iOS-27, IPT, Android, nRF54L, ranging]
topic_primary: bt-channel-sounding
topics_secondary: [bt-location]
novelty_score: 3
---

## Summary (EN)

A Nordic DevZone blog post by Robin M. Saltnes (dated 2 November 2026) states that Bluetooth Channel Sounding works with both Android and iOS. iOS 27, publicly released on 14 September 2026, supports it on iPhone 17 and later except the iPhone 17e (which Apple's spec sheet lists as Bluetooth 5.3); Android has supported it on select phones since Android 16 QPR2 (public release 2 December 2025). Accessories that work with iPhone also need Inline PCT Transfer (IPT), which the post describes as sending the phase correction term in the same exchange as the Channel Sounding event, saving energy and reducing latency; the post notes not all Bluetooth SoC vendors can support it on existing hardware. Nordic's nRF54L Series supports Channel Sounding on every device except the nRF54LS05A and nRF54LS05B, and IPT on every Channel-Sounding-capable nRF54L SoC. The post claims Nordic is the first chip vendor to publicly support Channel Sounding on both Android and iOS (vendor claim, not independently verified here).

The post's sections cover why distance matters (UWB needing dedicated chipsets in both the phone and the accessory, with limited ecosystem support and low standardization; RSSI ranging unreliable and spoofable), what Channel Sounding is (an optional Core 6.0 feature that measures phase shifts across many frequencies and cross-checks with round-trip timing), why phone support was the missing piece, iOS 27 support, an Android-versus-iOS comparison table, nRF54L readiness, use cases, and a teaser for a follow-up post on IPT. Market-reach numbers given: iOS holds over 50% of the North American smartphone market, the average iPhone replacement cycle is about 4 years, and the post estimates Channel-Sounding-compatible iPhones will cover more than 30% of that market by early 2030. The comparison table lists Bluetooth 6.0 or later for Android and Bluetooth 6.3 or later for iOS, a version the body text does not mention.

## Summary (ZH)

Nordic DevZone 博客文章（作者 Robin M. Saltnes，日期 2026 年 11 月 2 日）指出，蓝牙信道探测（Channel Sounding）已同时支持 Android 与 iOS。2026 年 9 月 14 日公开发布的 iOS 27 在 iPhone 17 及更新机型上支持该功能（iPhone 17e 除外，其在 Apple 规格页上标注为蓝牙 5.3）；Android 自 Android 16 QPR2（2025 年 12 月 2 日公开发布）起在部分机型上支持。与 iPhone 配合的配件还需要支持内联 PCT 传输（IPT）：文章称其在与信道探测事件相同的交互中发送相位校正项，可节能并降低时延，同时指出并非所有蓝牙 SoC 厂商都能在现有硬件上支持。Nordic nRF54L 系列中除 nRF54LS05A 与 nRF54LS05B 外均支持信道探测，所有具备信道探测能力的 nRF54L SoC 均支持 IPT。文章称 Nordic 是首家公开支持 Android 与 iOS 双平台信道探测的芯片厂商（厂商自述，此处未独立核实）。

文章章节包括：为何距离感知重要（UWB 需要手机和配件两端都配备专用芯片，生态支持有限、标准化程度低；RSSI 测距不可靠且易被伪造）、什么是信道探测（Core 6.0 的可选特性，通过测量多个频点的相移并与往返时延交叉校验）、为何手机支持是缺失的一环、iOS 27 支持情况、Android 与 iOS 对照表、nRF54L 的就绪情况、应用场景，以及预告关于 IPT 的后续文章。文中给出的市场数据：iOS 在北美智能手机市场份额超过 50%，iPhone 平均换机周期约 4 年，并估计到 2030 年初兼容信道探测的 iPhone 将覆盖该市场的 30% 以上。对照表中 Android 要求蓝牙 6.0 或更高，iOS 要求蓝牙 6.3 或更高，而正文未提及该版本。

## Key technical points (EN)

- **iOS**: iOS 27 (public release 14 Sep 2026), iPhone 17 and later excluding iPhone 17e (listed as Bluetooth 5.3).
- **Android**: since Android 16 QPR2 (2 Dec 2025), select phones only; table lists Bluetooth 6.0 or later.
- **IPT**: Inline PCT Transfer sends the phase correction term within the same exchange as the CS event; required for iPhone accessories; not supportable on all vendors' existing hardware.
- **Nordic silicon**: nRF54L Series CS on all but nRF54LS05A/B; IPT on all CS-capable nRF54L SoCs.
- **Mechanism recap**: phase shifts across many frequencies cross-checked with round-trip timing (anti-spoofing argument vs RSSI).
- **Market estimate (vendor)**: over 30% of North American smartphones CS-compatible by early 2030.
- **Inconsistency noted**: table says iOS needs Bluetooth 6.3 or later; body text silent.

## Key technical points (ZH)

- **iOS**：iOS 27（2026 年 9 月 14 日公开发布），iPhone 17 及更新机型，不含 iPhone 17e（标注为蓝牙 5.3）。
- **Android**：自 Android 16 QPR2（2025 年 12 月 2 日）起，仅部分机型；表中要求蓝牙 6.0 或更高。
- **IPT**：内联 PCT 传输在与 CS 事件相同的交互中发送相位校正项；iPhone 配件必需；并非所有厂商的现有硬件都能支持。
- **Nordic 芯片**：除 nRF54LS05A/B 外的 nRF54L 系列支持 CS；所有具备 CS 能力的 nRF54L SoC 支持 IPT。
- **机制回顾**：多频点相移与往返时延交叉校验（相对 RSSI 的防欺骗论据）。
- **市场估计（厂商）**：到 2030 年初，北美超过 30% 的智能手机兼容 CS。
- **文中不一致处**：表格称 iOS 需蓝牙 6.3 或更高，正文未提。

## Why it matters / what's new (EN)

The KB's earlier Channel Sounding entries cover the Core 6.x spec, chips (nRF54L15 Tag, BG2B, NXP) and an AppleInsider piece on Siri-remote Precision Finding; this adds the vendor-reported phone-side picture: which iPhones and Android versions support Channel Sounding, and the extra IPT requirement for iPhone accessories. The iOS 27 support details and the 6.3 requirement come from a single chip-vendor blog post and its table; no Apple documentation was checked here.

## Why it matters / what's new (ZH)

知识库此前的信道探测条目涵盖 Core 6.x 规范、芯片（nRF54L15 Tag、BG2B、NXP）以及 AppleInsider 关于 Siri 遥控器精确查找的报道；本条补充了厂商给出的手机侧情况：哪些 iPhone 与 Android 版本支持信道探测，以及 iPhone 配件额外需要的 IPT 要求。iOS 27 的支持细节与 6.3 要求均来自一家芯片厂商的单篇博客及其表格，此处未核对 Apple 官方文档。
