---
id: 2026-07-22_fcc-unlicensed-direct-to-satellite-nprm
date_published: 2026-07-15
date_found: 2026-07-22
type: industry-news
title_en: "FCC drafts NPRM to let Wi-Fi, Bluetooth and other Part 15 unlicensed devices talk directly to satellites"
title_zh: "FCC 起草 NPRM：拟允许 Wi-Fi、蓝牙等 Part 15 免许可设备直接与卫星通信"
url: "https://www.satellitetoday.com/connectivity/2026/07/15/fcc-to-consider-allowing-wi-fi-bluetooth-devices-for-d2d-service/"
source_quality: full
topics: [FCC, spectrum, direct-to-device, Part-15, regulation]
topic_primary: spectrum-policy
topics_secondary: [amp-iot]
novelty_score: 2
---

## Summary (EN)

The FCC has circulated a draft Notice of Proposed Rulemaking (NPRM), scheduled for a vote at the Commission's **August 6, 2026 open meeting**, that would explore letting **unlicensed Part 15 devices — Wi-Fi, Bluetooth, IoT sensors, and similar equipment — communicate directly with FCC-authorized satellites**. The proposal targets three legacy unlicensed bands: **902–928 MHz, 2400–2483.5 MHz, and 5725–5850 MHz** — more than 225 MHz in total spanning the 900 MHz ISM, 2.4 GHz Wi-Fi/Bluetooth, and upper 5 GHz Wi-Fi/UNII-3 ranges.

The draft would examine both uplink and downlink device-to-satellite communication, and even whether Part 15 equipment could operate aboard authorized spacecraft. Crucially, it would add mobile-satellite service Earth-to-space allocations to these bands while **retaining the existing Part 15 power ceiling (generally 36 dBm / 4 W EIRP)** — meaning any satellite service would have to close the link against ordinary unlicensed-device power budgets. Commentators (including Wi-Fi NOW's July 20 roundup) note the obvious physics challenge: standard Wi-Fi endpoints lack the EIRP and antenna gain to reach LEO reliably, so early implementations would more plausibly involve satellite-terminal-class equipment operating under Part 15 rules, or narrowband IoT-style uplinks.

For the Wi-Fi ecosystem the significance is regulatory rather than immediate: for the first time the FCC is formally contemplating satellite services as co-users *inside* the unlicensed bands Wi-Fi depends on, raising both an opportunity (ubiquitous fallback connectivity for unlicensed devices) and a coexistence question (satellite downlinks sharing 2.4/5.7 GHz with terrestrial WLAN).

## Summary (ZH)

FCC 已分发一份 NPRM（拟议规则制定通知）草案，定于**2026 年 8 月 6 日**委员会公开会议表决，探讨允许 **Part 15 免许可设备——Wi-Fi、蓝牙、IoT 传感器等——直接与获得 FCC 授权的卫星通信**。提案针对三个传统免许可频段：**902–928 MHz、2400–2483.5 MHz、5725–5850 MHz**，合计超过 225 MHz，横跨 900 MHz ISM、2.4 GHz Wi-Fi/蓝牙与 5 GHz 上段 Wi-Fi/UNII-3。

草案将审视设备-卫星的上行与下行通信，甚至 Part 15 设备能否在授权航天器上运行。关键是：草案在为这些频段增加移动卫星业务地对空分配的同时，**保留现行 Part 15 功率上限（一般为 36 dBm / 4 W EIRP）**——任何卫星业务都必须在普通免许可设备的功率预算内闭合链路。评论（包括 Wi-Fi NOW 7 月 20 日综述）指出明显的物理挑战：标准 Wi-Fi 终端缺乏可靠到达 LEO 的 EIRP 与天线增益，早期实现更可能是按 Part 15 规则运行的卫星终端级设备或窄带 IoT 式上行。

对 Wi-Fi 生态而言，其意义在监管层面而非短期落地：FCC 首次正式考虑让卫星业务作为共用方进入 Wi-Fi 赖以生存的免许可频段——既是机遇（免许可设备获得无处不在的兜底连接），也是共存问题（卫星下行与地面 WLAN 共享 2.4/5.7 GHz）。

## Key technical points (EN)

- Draft NPRM scheduled for FCC vote August 6, 2026; announced by Chairman Brendan Carr mid-July.
- Bands: 902–928 MHz, 2400–2483.5 MHz, 5725–5850 MHz (>225 MHz total).
- Scope: Part 15 device ↔ satellite uplink and downlink; Part 15 equipment aboard spacecraft.
- Adds MSS Earth-to-space allocations while keeping the Part 15 power ceiling (~36 dBm / 4 W EIRP).
- Link-budget reality: ordinary Wi-Fi/Bluetooth devices cannot reach LEO at Part 15 power; tracking-antenna terminals or narrowband IoT uplinks are the plausible first users.
- Coexistence question: satellite services operating inside the 2.4 GHz and upper-5 GHz Wi-Fi bands.

## Key technical points (ZH)

- NPRM 草案定于 2026 年 8 月 6 日 FCC 表决；主席 Brendan Carr 于 7 月中旬宣布。
- 频段：902–928 MHz、2400–2483.5 MHz、5725–5850 MHz（合计 >225 MHz）。
- 范围：Part 15 设备与卫星的上/下行通信；Part 15 设备在航天器上的使用。
- 增加 MSS 地对空分配，同时保留 Part 15 功率上限（约 36 dBm / 4 W EIRP）。
- 链路预算现实：普通 Wi-Fi/蓝牙设备无法以 Part 15 功率到达 LEO；带跟踪天线的终端或窄带 IoT 上行更可能率先落地。
- 共存问题：卫星业务将进入 2.4 GHz 与 5 GHz 上段 Wi-Fi 频段。

## Why it matters / what's new (EN)

This is the first time the KB records a regulator proposing satellite services *inside* the core unlicensed Wi-Fi bands — a different construct from NTN direct-to-device over licensed cellular spectrum (covered on the satellite side of this KB) and from the 6 GHz AFC frameworks (2026-07-22_uk-ofcom-full-band-6ghz-adoption, 2026-07-10_south-africa-standard-power-6ghz-afc). If adopted, unlicensed-band protocols may eventually need satellite-aware coexistence behaviour (e.g. detecting or protecting satellite downlinks in 2.4/5.7 GHz), and "Wi-Fi device with occasional satellite fallback" becomes a legal device category in the US. Watch the August 6 vote and the NPRM comment cycle.

## Why it matters / what's new (ZH)

这是本 KB 首次记录监管机构提议将卫星业务引入核心免许可 Wi-Fi 频段——不同于基于许可蜂窝频谱的 NTN 直连设备（本 KB 卫星侧已覆盖），也不同于 6 GHz AFC 框架（2026-07-22_uk-ofcom-full-band-6ghz-adoption、2026-07-10_south-africa-standard-power-6ghz-afc）。若获通过，免许可频段协议未来可能需要具备卫星感知的共存行为（如检测或保护 2.4/5.7 GHz 中的卫星下行），"具备卫星兜底能力的 Wi-Fi 设备"将成为美国的合法设备类别。关注 8 月 6 日表决与 NPRM 意见征集周期。
