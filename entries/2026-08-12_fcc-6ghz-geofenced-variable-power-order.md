---
id: 2026-08-12_fcc-6ghz-geofenced-variable-power-order
date_published: 2026-01-29
date_found: 2026-08-12
type: industry-news
title_en: "FCC creates Geofenced Variable Power (GVP) 6 GHz device class for higher-power indoor and outdoor Wi-Fi"
title_zh: "FCC 设立地理围栏可变功率（GVP）6 GHz 设备类别，支持更高功率的室内外 Wi-Fi"
url: "https://www.federalregister.gov/documents/2026/02/25/2026-03744/unlicensed-use-of-the-6-ghz-band-expanding-flexible-use-in-mid-band-spectrum-between-37-and-24-ghz"
source_quality: full
topics: [6-GHz, spectrum, FCC, regulation, geofencing, U-NII]
topic_primary: spectrum-policy
topics_secondary: [wifi7-deployment]
novelty_score: 2
---

## Summary (EN)
On **29 January 2026** the US FCC adopted an Order (voted at the January Open Commission Meeting; Federal Register publication 25 Feb 2026) that creates a new class of unlicensed 6 GHz device: the **Geofenced Variable Power (GVP)** access point. GVP fills the gap between the two existing 6 GHz unlicensed modes — Low Power Indoor (LPI, indoor-only, ~5 dBm/MHz PSD, no coordination) and Standard Power (higher power but AFC-coordinated and effectively fixed/outdoor-capable). A GVP device can operate **both indoors and outdoors at higher power than LPI**, without the full Automated Frequency Coordination database transaction, by instead relying on onboard geolocation plus geofencing.

The permitted operating limits are **up to 11 dBm/MHz EIRP power spectral density and 24 dBm EIRP**, in the U-NII-5 and U-NII-7 portions of the 6 GHz band (5.925–7.125 GHz). Client devices must transmit **6 dB below** the access point's authorized power. In place of AFC, each GVP access point must determine its own location and consult a **geofencing system that computes exclusion zones** around protected incumbents — licensed fixed microwave links and radio-astronomy observatories — and must refrain from operating on the specific frequencies prohibited at its location. The Commission also sought comment on further flexibilities (composite standard-power/LPI access points at additional power under certain conditions; LPI operation aboard cruise ships).

This is captured here as a deliberate **quarterly regulatory backfill** (found 2026-08-12): the order is a January 2026 policy shock that had not been recorded in this KB. Its significance is that it materially expands where and how hot unlicensed 6 GHz Wi-Fi can run in the US — enabling higher-power outdoor unlicensed operation via a lighter-weight geofencing obligation than AFC — and it sits alongside the KB's other 6 GHz regulatory entries (the FCC BEL/LPI-PSD proposals, UK/EU/South Africa/Costa Rica full-band and standard-power moves).

## Summary (ZH)
**2026 年 1 月 29 日**，美国 FCC 通过一项命令（在 1 月全体委员会会议上表决；联邦公报 2 月 25 日刊出），设立了一类新的 6 GHz 免许可设备：**地理围栏可变功率（GVP）**接入点。GVP 填补了现有两种 6 GHz 免许可模式之间的空档——低功率室内（LPI，仅室内、约 5 dBm/MHz PSD、无需协调）与标准功率（功率更高但需 AFC 协调、基本固定/可室外）。GVP 设备可**在室内外以高于 LPI 的功率运行**，无需完整的自动频率协调数据库交互，而是依靠板载地理定位加地理围栏。

允许的运行上限为 **11 dBm/MHz EIRP 功率谱密度与 24 dBm EIRP**，位于 6 GHz 频段的 U-NII-5 与 U-NII-7 部分（5.925–7.125 GHz）。客户端设备发射功率须**低于接入点授权功率 6 dB**。GVP 接入点不使用 AFC，而须确定自身位置并查询**计算排除区的地理围栏系统**——排除区围绕受保护的在用者（持照固定微波链路与射电天文台）——并在其所在位置须避免使用被禁止的特定频率。委员会还就进一步灵活性征求意见（特定条件下的复合标准功率/LPI 接入点更高功率；LPI 在邮轮上运行）。

此条目作为有意的**季度监管回填**（2026-08-12 发现）：该命令是尚未记入本 KB 的 2026 年 1 月政策变动。其意义在于实质性拓展了美国大功率免许可 6 GHz Wi-Fi 的运行场景——通过比 AFC 更轻量的地理围栏义务实现更高功率的室外免许可运行——并与 KB 中其他 6 GHz 监管条目并列。

## Key technical points (EN)
- **New device class:** Geofenced Variable Power (GVP) 6 GHz access point — indoor **and** outdoor, higher power than LPI, no AFC transaction.
- **Power limits:** up to 11 dBm/MHz EIRP PSD and 24 dBm EIRP in U-NII-5 and U-NII-7 (5.925–7.125 GHz); client devices 6 dB below the AP.
- **Protection mechanism:** onboard geolocation + a geofencing system that computes exclusion zones around licensed microwave links and radio-astronomy sites; the AP must avoid prohibited frequencies at its location (replaces the AFC database query).
- **Status/date:** adopted 29 Jan 2026 (January Open Commission Meeting); Federal Register 25 Feb 2026. Further-flexibility items (composite SP/LPI power, cruise-ship LPI) were put out for comment.
- **Ingest note:** quarterly regulatory backfill — a January policy shock not previously in the KB.

## Key technical points (ZH)
- **新设备类别：** 地理围栏可变功率（GVP）6 GHz 接入点——室内**与**室外、功率高于 LPI、无需 AFC 交互。
- **功率上限：** U-NII-5 与 U-NII-7（5.925–7.125 GHz）最高 11 dBm/MHz EIRP PSD 与 24 dBm EIRP；客户端低于 AP 6 dB。
- **保护机制：** 板载地理定位 + 计算排除区的地理围栏系统（围绕持照微波链路与射电天文台）；AP 须在其位置避开被禁频率（替代 AFC 数据库查询）。
- **状态/日期：** 2026 年 1 月 29 日通过；联邦公报 2 月 25 日。进一步灵活性事项（复合 SP/LPI 功率、邮轮 LPI）已征求意见。
- **入库说明：** 季度监管回填——此前未入 KB 的 1 月政策变动。

## Why it matters / what's new (EN)
The KB's 6 GHz regulatory coverage so far captures the FCC's *proposed* indoor boosts (BEL in AFC, LPI PSD 5→8 dBm/MHz — `2026-05-21_fcc-6ghz-rule-changes`) and a wave of international full-band / standard-power adoptions (UK Ofcom, EU, South Africa, Costa Rica). The GVP Order is a distinct and already-*adopted* structural change: a third US unlicensed operating mode that unlocks higher-power **outdoor** unlicensed 6 GHz on a geofencing obligation rather than AFC. For Wi-Fi 6E/7/8 that is the regulatory precondition for a class of higher-power outdoor and mixed indoor/outdoor deployments (campus, venue, fixed-wireless-adjacent) that LPI cannot serve and full standard-power/AFC makes cumbersome. It also introduces geofencing (geolocation + dynamic exclusion zones) as a coordination primitive parallel to AFC — worth watching as other regulators weigh similar mid-band flexibilities.

## Why it matters / what's new (ZH)
KB 目前的 6 GHz 监管覆盖记录了 FCC *提议*的室内增强（AFC 纳入 BEL、LPI PSD 5→8 dBm/MHz——`2026-05-21_fcc-6ghz-rule-changes`）以及一波国际全频段/标准功率采纳（英国 Ofcom、欧盟、南非、哥斯达黎加）。GVP 命令是一项不同且已*通过*的结构性变化：美国第三种免许可运行模式，以地理围栏义务（而非 AFC）解锁更高功率的**室外**免许可 6 GHz。对 Wi-Fi 6E/7/8 而言，这是 LPI 无法服务、而完整标准功率/AFC 又繁琐的一类高功率室外及室内外混合部署（园区、场馆、临近固定无线）的监管前提。它还将地理围栏（地理定位 + 动态排除区）引入为与 AFC 并行的协调原语——值得关注其他监管机构是否权衡类似的中频段灵活性。
