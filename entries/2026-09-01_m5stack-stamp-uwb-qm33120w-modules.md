---
id: 2026-09-01_m5stack-stamp-uwb-qm33120w-modules
date_published: 2026-08-14
date_found: 2026-09-01
type: community-signal
technology: uwb
title_en: "M5Stack ships Stamp UWB modules (Qorvo QM33120W): secure-ToF UWB ranging drops into the maker ecosystem at stamp size"
title_zh: "M5Stack 推出 Stamp UWB 模组（Qorvo QM33120W）：安全测距 UWB 以“邮票尺寸”进入创客生态"
url: https://shop.m5stack.com/products/m5stamp-uwb-module-qm33120w
source_quality: full
topics: [UWB, M5Stack, QM33120W, 802.15.4z, ranging, maker]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

M5Stack released Stamp UWB and Stamp UWB F (2026-08-14): ultra-compact (11.5 × 12.0 × 2.8 mm) embedded UWB ranging modules built on Qorvo's QM33120W transceiver, sold through its mainstream maker channels. They support IEEE 802.15.4-2020 / 802.15.4z-2020 BPRF on UWB Channel 9 (7987.2 MHz center), enhanced secure Time-of-Flight with integrated AES-256, both TWR and TDoA positioning, and 850 kbps / 6.81 Mbps data rates; the castellated-hole SMT footprint is meant for direct integration into ranging products. The announcement drew unusually large community engagement for a UWB item (the launch post passed 72k views). This is a late pickup — the release is 18 days old and reached the KB via a social echo (X live search), not a UWB-scout source.

## Summary (ZH)

M5Stack 于 2026 年 8 月 14 日发布 Stamp UWB 与 Stamp UWB F：基于 Qorvo QM33120W 收发器的超小型（11.5 × 12.0 × 2.8 mm）嵌入式 UWB 测距模组，经其主流创客渠道销售。模组支持 IEEE 802.15.4-2020 / 802.15.4z-2020 BPRF（UWB 信道 9，中心频率 7987.2 MHz）、带 AES-256 的增强安全飞行时间（ToF）测距、TWR 与 TDoA 两种定位方式，数据速率 850 kbps / 6.81 Mbps；半孔贴片封装可直接焊入量产测距产品。该发布在社区获得了 UWB 话题罕见的关注度（发布帖浏览量超过 7.2 万）。本条为迟到收录——发布已 18 天，经社交回声（X 实时搜索）而非 UWB 侦察源进入知识库。

## Key technical points (EN)

- Transceiver: Qorvo QM33120W; UWB Channel 9 (7987.2 MHz center); IEEE 802.15.4-2020 and 802.15.4z-2020 BPRF compliance.
- Security: enhanced secure ToF mode with integrated AES-256 — the anti-spoofing ranging profile, not just raw ToF.
- Positioning: both two-way ranging (TWR) and time-difference-of-arrival (TDoA) supported; data rates 850 kbps / 6.81 Mbps.
- Form factor: 11.5 × 12.0 × 2.8 mm with castellated-hole SMT mounting (Stamp UWB F adds an FPC antenna variant).
- Distribution: M5Stack's regular maker/retail channels (own shop, AliExpress, distributors) — no NDA, no module-vendor sales process.

## Key technical points (ZH)

- 收发器：Qorvo QM33120W；UWB 信道 9（中心 7987.2 MHz）；符合 IEEE 802.15.4-2020 与 802.15.4z-2020 BPRF。
- 安全性：带集成 AES-256 的增强安全 ToF 模式——是抗欺骗的安全测距档，而非裸测距。
- 定位：同时支持双向测距（TWR）与到达时间差（TDoA）；速率 850 kbps / 6.81 Mbps。
- 形态：11.5 × 12.0 × 2.8 mm，半孔贴片封装（Stamp UWB F 为 FPC 天线版本）。
- 渠道：M5Stack 常规创客/零售渠道（自营商店、速卖通、分销商）——无需 NDA，也无需走模组厂商的商务流程。

## Why it matters / what's new (EN)

Secure-ranging UWB (802.15.4z BPRF + AES-256 secure ToF) has so far lived in phones, car keys and industrial RTLS behind vendor sales channels; a stamp-sized, retail-priced module from the maker ecosystem's highest-volume vendor moves it into the hands of hobbyists and small product teams the way ESP32 did for Wi-Fi. Expect a wave of open-source TWR/TDoA projects — and, for the UWB bin, a new grassroots source of interop and ranging-accuracy findings that don't come from FiRa members.

## Why it matters / what's new (ZH)

安全测距 UWB（802.15.4z BPRF + AES-256 安全 ToF）此前主要存在于手机、汽车钥匙与工业 RTLS，且藏在模组厂商的商务渠道后面；如今创客生态出货量最大的厂商推出邮票尺寸、零售价格的模组，相当于把它交到爱好者与小型产品团队手里——正如当年 ESP32 之于 Wi-Fi。可以预期一波开源 TWR/TDoA 项目，也意味着 UWB 板块将多出一个不依赖 FiRa 成员的互操作与测距精度民间信源。
