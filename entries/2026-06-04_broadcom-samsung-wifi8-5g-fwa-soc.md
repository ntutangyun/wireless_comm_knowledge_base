---
id: 2026-06-04_broadcom-samsung-wifi8-5g-fwa-soc
date_published: 2026-06-01
date_found: 2026-06-04
type: industry-news
technology: wifi
title_en: "Broadcom and Samsung pair a Wi-Fi 8 SoC with a 5G modem for fixed-wireless-access gateways"
title_zh: "博通联合三星：Wi-Fi 8 SoC 搭配 5G 调制解调器，面向固定无线接入（FWA）网关"
url: "https://www.networkworld.com/article/4179519/broadcom-samsung-team-for-wireless-soc.html"
source_quality: full
topics: [802.11bn, Wi-Fi-8, products, FWA, Broadcom, Samsung]
topic_primary: wifi8-uhr
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Broadcom and Samsung announced a partnership that combines a Broadcom Wi-Fi 8 (IEEE 802.11bn) system-on-chip with a Samsung 5G modem into a unified platform aimed at the mass-market fixed-wireless-access (FWA) segment — home gateways, routers, and extenders that mobile operators ship to deliver "fiber-level" broadband over cellular backhaul. The pitch is convergence: the 5G modem (3GPP Release 17) carries the wide-area uplink while the Wi-Fi 8 radio fans the connection out across the home, with both sides integrated by a single vendor pairing rather than bolted together by the OEM.

Alongside the partnership, Broadcom detailed four new gateway/router chips. The BCM68850 is a 50G ITU-PON home-gateway SoC with an integrated neural-processing unit (NPU). The BCM6772 targets mass-market Ethernet routers with 2×2 dual-band radios; the BCM6774 steps up to 2×2 on 2.4 GHz plus 4×4 on 5 GHz for high-volume routers; and the BCM6776 is a premium tri-band part with expanded memory support. All four integrate a quad-core CPU, a Network Processing Engine, on-chip power amplifiers, and Broadcom's third-generation digital pre-distortion (DPD) for the radio front end.

The announcement leans on Wi-Fi 8's headline goals — ultra-high reliability (UHR), lower latency, and steadier throughput in dense, interference-heavy environments — as the reason the home-distribution leg of an FWA link is moving to 802.11bn even before the standard is ratified. It continues the 2026 pattern of Wi-Fi 8 silicon shipping in product roadmaps well ahead of the ~2028 ratification target.

## Summary (ZH)

博通（Broadcom）与三星（Samsung）宣布合作，将博通的 Wi-Fi 8（IEEE 802.11bn）SoC 与三星的 5G 调制解调器整合为统一平台，瞄准大众市场的固定无线接入（FWA）场景——即移动运营商用来提供"光纤级"宽带的家庭网关、路由器与扩展器，其回传走蜂窝网络。卖点在于融合：5G 调制解调器（3GPP Release 17）承担广域上行，Wi-Fi 8 射频负责将连接在家中分发，两端由单一厂商组合预先整合，而非由设备厂商自行拼装。

随合作一同发布的还有博通四款新的网关/路由器芯片。BCM68850 是带集成神经处理单元（NPU）的 50G ITU-PON 家庭网关 SoC；BCM6772 面向大众市场以太网路由器，配 2×2 双频射频；BCM6774 升级为 2.4 GHz 2×2 加 5 GHz 4×4，面向走量路由器；BCM6776 则是支持更大内存的高端三频芯片。四款均集成四核 CPU、网络处理引擎（Network Processing Engine）、片上功率放大器，以及博通第三代数字预失真（DPD）射频前端技术。

公告以 Wi-Fi 8 的核心目标——超高可靠性（UHR）、更低时延、在密集且干扰严重环境下更稳定的吞吐——作为 FWA 链路的家庭分发段在标准定案前就转向 802.11bn 的理由。这延续了 2026 年 Wi-Fi 8 芯片在产品路线图上远早于约 2028 年标准定案目标即开始出货的趋势。

## Key technical points (EN)

- **Wi-Fi 8 + 5G in one platform**: Broadcom 802.11bn SoC paired with a Samsung 3GPP Rel-17 5G modem, integrated by the two vendors for FWA gateways rather than left to OEM integration.
- **Four new Broadcom parts**: BCM68850 (50G ITU-PON gateway SoC with on-chip NPU); BCM6772 (2×2 dual-band, mass-market Ethernet routers); BCM6774 (2×2 @ 2.4 GHz + 4×4 @ 5 GHz, high-volume); BCM6776 (premium tri-band, expanded memory).
- **Common SoC building blocks**: quad-core CPU, Network Processing Engine, on-chip power amplifiers, third-generation digital pre-distortion (DPD).
- **Target**: mass-market FWA — operator-shipped home gateways, routers, and extenders delivering "fiber-level" broadband.
- **Standards posture**: positioned on Wi-Fi 8 UHR / low-latency / dense-environment goals; ships ahead of the ~2028 802.11bn ratification target.

## Key technical points (ZH)

- **Wi-Fi 8 与 5G 同台**：博通 802.11bn SoC 搭配三星 3GPP Rel-17 5G 调制解调器，由两家厂商为 FWA 网关预先整合，而非交由设备厂商拼装。
- **博通四款新品**：BCM68850（带片上 NPU 的 50G ITU-PON 网关 SoC）；BCM6772（2×2 双频，大众市场以太网路由器）；BCM6774（2.4 GHz 2×2 + 5 GHz 4×4，走量）；BCM6776（高端三频，更大内存）。
- **通用 SoC 模块**：四核 CPU、网络处理引擎、片上功率放大器、第三代数字预失真（DPD）。
- **目标市场**：大众市场 FWA——运营商出货的家庭网关、路由器与扩展器，提供"光纤级"宽带。
- **标准节奏**：以 Wi-Fi 8 的 UHR / 低时延 / 密集环境目标为卖点；早于约 2028 年 802.11bn 定案即出货。

## Why it matters / what's new (EN)

This is a distinct entry from the existing 2026 Broadcom Wi-Fi 8 items in the KB — `2026-05-01_broadcom-wifi8-ces2026` (BCM4918/6714/6719 at CES) and `2026-05-14_broadcom-wifi8-bcm67142-67192-mass-market`. The new BCM68850/6772/6774/6776 part numbers and, more importantly, the Broadcom-Samsung pairing of a Wi-Fi 8 SoC with a 5G modem for FWA are new. The novel angle is the explicit Wi-Fi-8-as-the-home-distribution-leg-of-an-FWA-link framing: 802.11bn UHR is being positioned as the reason the LAN side of operator FWA gateways moves to Wi-Fi 8, with the cellular uplink and the Wi-Fi fan-out integrated as a single vendor-paired platform. It also adds another data point to the 2026 trend (cf. `2026-05-30_tplink-wifi8-archer8-roadmap`, `2026-05-27_networkworld-wifi8-edge-ai-platform`) of Wi-Fi 8 silicon shipping well ahead of ratification.

## Why it matters / what's new (ZH)

本条目与 KB 中已有的 2026 年博通 Wi-Fi 8 条目相区分——`2026-05-01_broadcom-wifi8-ces2026`（CES 上的 BCM4918/6714/6719）与 `2026-05-14_broadcom-wifi8-bcm67142-67192-mass-market`。新的 BCM68850/6772/6774/6776 型号，尤其是博通与三星将 Wi-Fi 8 SoC 与 5G 调制解调器配对面向 FWA 的做法，均为新内容。新意在于明确地将 Wi-Fi 8 定位为 FWA 链路的"家庭分发段"：802.11bn 的 UHR 被作为运营商 FWA 网关 LAN 侧转向 Wi-Fi 8 的理由，蜂窝上行与 Wi-Fi 分发由单一厂商组合整合为一个平台。它也为 2026 年 Wi-Fi 8 芯片远早于标准定案即出货的趋势（参见 `2026-05-30_tplink-wifi8-archer8-roadmap`、`2026-05-27_networkworld-wifi8-edge-ai-platform`）再添一例。
