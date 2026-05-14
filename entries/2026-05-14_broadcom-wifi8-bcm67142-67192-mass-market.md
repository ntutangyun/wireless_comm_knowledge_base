---
id: 2026-05-14_broadcom-wifi8-bcm67142-67192-mass-market
date_found: 2026-05-14
date_published: 2026-04-30
type: product
title_en: "Broadcom pushes Wi-Fi 8 into mass-market broadband — BCM67142 / BCM67192 radios + BCM68565 10G PON gateway SoC"
title_zh: "博通把 Wi-Fi 8 推入大众市场宽带 —— BCM67142 / BCM67192 射频 + BCM68565 10G PON 网关 SoC"
url: "https://www.cnx-software.com/2026/05/13/broadcom-bcm67142-bcm67192-and-bcm68565-chips-target-low-cost-wifi-8-10-gbps-fiber-access-points/"
source_quality: full
topics: [802.11bn, products, 10G-PON, fiber-access, MLO]
topic_primary: wifi8-uhr
topics_secondary: [mlo]
novelty_score: 3
---

## Summary (EN)

On 2026-04-30 Broadcom announced a second wave of Wi-Fi 8 silicon explicitly aimed at the **cost-constrained mass market** rather than flagship residential and enterprise tiers: two dual-band Wi-Fi 8 radios (**BCM67142** and **BCM67192**) plus a new 10 Gbps PON gateway SoC (**BCM68565**). The new radios are 2.4 GHz + 5 GHz parts — notably no 6 GHz — built around 4096-QAM, 80 MHz channels on 5 GHz, OFDMA, MU-MIMO and Multi-Link Operation, and packaged for compact single-board access-point designs. The BCM67142 carries a 3 × 3 (2.4 GHz) + 4 × 4 (5 GHz) configuration for seven total spatial streams; the BCM67192 bumps the 2.4 GHz radio to 4 × 4 for eight streams while keeping everything else identical. Both expose PCIe Gen3 x2 to the host SoC and support WPA3-192 Suite B.

The BCM68565 is the system-on-chip side of the same play: a multi-core Armv8 platform with up to 10 K DMIPS, an integrated 10 Gbps WAN serializer supporting XGS-PON, GPON and Active Ethernet, plus a 10 Gbps EEE PHY and four GbE PHYs on the LAN side. It carries DDR4/LPDDR4/DDR5/LPDDR5 memory support, eMMC, multi-lane PCIe Gen3, USB 3.0, and a dedicated security processor. The intended reference design pairs one BCM68565 with one BCM67142/BCM67192 to deliver a fully integrated fiber + Wi-Fi 8 gateway at residential price points — a configuration Broadcom is sampling to early-access customers and partners now.

This is the third Broadcom Wi-Fi 8 announcement inside seven months: the BCM6718 flagship residential platform launched in October 2025, the BCM4918 APU + BCM6714 / BCM6719 unified platform arrived at CES 2026 (see `2026-05-01_broadcom-wifi8-ces2026.md`), and now the BCM67142 / BCM67192 mass-market parts. The cadence is well ahead of the IEEE 802.11bn ratification schedule (May 2028 target, see `2026-05-01_ieee-tgbn-d2-schedule.md`) and mirrors the Wi-Fi 7 cycle, where silicon shipped roughly two years before standard ratification.

## Summary (ZH)

2026-04-30，博通发布了第二波 Wi-Fi 8 硅片，目标明确是**成本敏感的大众市场**，而非旗舰家用和企业级：两款双频 Wi-Fi 8 射频（**BCM67142** 与 **BCM67192**）加一颗新的 10 Gbps PON 网关 SoC（**BCM68565**）。新射频是 2.4 GHz + 5 GHz 双频 —— 注意不带 6 GHz —— 围绕 4096-QAM、5 GHz 上 80 MHz 信道、OFDMA、MU-MIMO 和 Multi-Link Operation 构建，封装面向紧凑型单板 AP 设计。BCM67142 配置为 3 × 3（2.4 GHz）+ 4 × 4（5 GHz），共七路空间流；BCM67192 把 2.4 GHz 升到 4 × 4，共八路空间流，其余配置一致。两者都以 PCIe Gen3 x2 接到主控 SoC，并支持 WPA3-192 Suite B。

BCM68565 是这套方案的 SoC 部分：多核 Armv8 平台，最高 10K DMIPS，集成 10 Gbps WAN 串行化器支持 XGS-PON / GPON / Active Ethernet，LAN 侧带一颗 10 Gbps EEE PHY 与四颗 GbE PHY。它支持 DDR4/LPDDR4/DDR5/LPDDR5 内存、eMMC、多通道 PCIe Gen3、USB 3.0 及专用安全处理器。预期参考设计将 BCM68565 与 BCM67142/BCM67192 配对，组成一体化的光纤 + Wi-Fi 8 网关，达到家用价位 —— 博通目前向早期客户与伙伴送样。

这是博通七个月内第三次发布 Wi-Fi 8：BCM6718 旗舰家用平台 2025 年 10 月上市；BCM4918 APU + BCM6714 / BCM6719 统一平台 CES 2026 发布（见 `2026-05-01_broadcom-wifi8-ces2026.md`）；现在轮到 BCM67142 / BCM67192 主打大众市场。这一节奏明显领先 IEEE 802.11bn 的批准计划（目标 2028 年 5 月，见 `2026-05-01_ieee-tgbn-d2-schedule.md`），与 Wi-Fi 7 周期一致 —— 硅片领先标准批准约两年。

## Key technical points (EN)

- **BCM67142:** dual-band, 3 × 3 @ 2.4 GHz + 4 × 4 @ 5 GHz, 4096-QAM, 20/40 MHz on 2.4 GHz, 20/40/80/160 MHz on 5 GHz, OFDMA, MU-MIMO, MLO, PCIe Gen3 x2, WPA3-192 Suite B.
- **BCM67192:** same as BCM67142 but 4 × 4 on 2.4 GHz (8 spatial streams total).
- **No 6 GHz radio** — explicit choice for cost-down vs the flagship BCM6718 tri-band part.
- **BCM68565 SoC:** Armv8 multicore (~10 K DMIPS), 10 Gbps XGS-PON / GPON / AE WAN, 1 × 10 Gbps EEE + 4 × GbE LAN, DDR4/LPDDR4/DDR5/LPDDR5, eMMC, PCIe Gen3, USB 3.0, dedicated security MCU.
- **Reference design:** BCM68565 + BCM67142 (or BCM67192) = integrated 10 Gbps fiber + Wi-Fi 8 gateway, residential price point.
- **Cadence:** third Broadcom Wi-Fi 8 announcement in seven months (Oct 2025 → Jan 2026 → Apr 2026).
- **Availability:** sampling to early-access customers and partners.

## Key technical points (ZH)

- **BCM67142：** 双频，2.4 GHz 3 × 3 + 5 GHz 4 × 4，4096-QAM，2.4 GHz 上 20/40 MHz，5 GHz 上 20/40/80/160 MHz，OFDMA、MU-MIMO、MLO，PCIe Gen3 x2，WPA3-192 Suite B。
- **BCM67192：** 与 BCM67142 相同，但 2.4 GHz 改为 4 × 4，共 8 路空间流。
- **不带 6 GHz 射频** —— 与旗舰 BCM6718 三频部件对照的明确成本下调选择。
- **BCM68565 SoC：** Armv8 多核（~10K DMIPS），10 Gbps XGS-PON / GPON / AE WAN，LAN 侧 1 × 10 Gbps EEE + 4 × GbE，支持 DDR4/LPDDR4/DDR5/LPDDR5、eMMC、PCIe Gen3、USB 3.0、专用安全 MCU。
- **参考设计：** BCM68565 + BCM67142（或 BCM67192）= 一体化的 10 Gbps 光纤 + Wi-Fi 8 网关，家用价位。
- **节奏：** 博通七个月内第三次发布 Wi-Fi 8（2025 年 10 月 → 2026 年 1 月 → 2026 年 4 月）。
- **可获取性：** 正在向早期客户与伙伴送样。

## Why it matters / what's new (EN)

Until now the public Wi-Fi 8 story has been a flagship one: Qualcomm Dragonwing NPro A8 Elite (enterprise), Broadcom BCM4918 + BCM6718 (premium residential), MediaTek Filogic 8000 (premium IoT-to-router family). The new Broadcom parts move the bar in two ways. First, by dropping the 6 GHz radio and explicitly targeting **operator-supplied mass-market gateways** — XGS-PON ARPU-sensitive markets where Wi-Fi 7 hasn't even fully landed yet — Broadcom signals that the cost curve on first-generation 802.11bn silicon is steepening fast. Second, the integration story (10 Gbps PON SoC + dual-band Wi-Fi 8 radio in one reference design) tightens the supply chain around fiber-FTTH carriers specifically, who are exactly the customers most likely to roll Wi-Fi 8 into their existing CPE refresh cycles regardless of the standard's ratification timeline. That cadence — three Wi-Fi 8 family announcements from a single vendor inside seven months — is also notable in its own right; it's faster than the equivalent BCM6710 / BCM6730 / BCM6750 spread Broadcom used during the Wi-Fi 6E → Wi-Fi 7 transition.

Relative to the existing KB entries, this complements rather than duplicates `2026-05-01_broadcom-wifi8-ces2026.md` (premium platform) and adds a concrete data point to the "Wi-Fi 8 silicon precedes standard ratification" narrative tracked in `2026-05-01_ieee-tgbn-d2-schedule.md`.

## Why it matters / what's new (ZH)

到目前为止，公开的 Wi-Fi 8 故事都偏旗舰：高通 Dragonwing NPro A8 Elite（企业级）、博通 BCM4918 + BCM6718（高端家用）、联发科 Filogic 8000（高端 IoT 到路由家族）。博通这次发布在两条线上拉低了门槛。一是去掉 6 GHz 射频、明确瞄准**运营商供给的大众网关市场** —— 在 ARPU 敏感的 XGS-PON 区域，Wi-Fi 7 甚至还没完全落地 —— 这暗示第一代 802.11bn 硅片的成本曲线下滑得相当快。二是集成度的叙事（10 Gbps PON SoC + 双频 Wi-Fi 8 射频，组成单一参考设计）把供应链拧紧到光纤 FTTH 运营商身上 —— 这正是最有可能不等标准批准、直接在 CPE 换代周期里铺 Wi-Fi 8 的客户。节奏本身也值得关注：单一厂商七个月内三次发布 Wi-Fi 8 家族，比博通 Wi-Fi 6E → Wi-Fi 7 切换期 BCM6710 / BCM6730 / BCM6750 的间隔更密。

与现有 KB 条目的关系上，这一条补充而非重复 `2026-05-01_broadcom-wifi8-ces2026.md`（高端平台），并为 `2026-05-01_ieee-tgbn-d2-schedule.md` 跟踪的"Wi-Fi 8 硅片领先标准批准"叙事增加了一个具体数据点。

## Images
![BCM67142 / BCM67192 product image | BCM67142 / BCM67192 产品图](https://www.cnx-software.com/wp-content/uploads/2026/05/Broadcom-BCM67142-BCM67192.jpg)
![BCM67142 block diagram | BCM67142 框图](https://www.cnx-software.com/wp-content/uploads/2026/05/BCM67142-block-diagram.webp)
![BCM68565 10G PON gateway SoC | BCM68565 10G PON 网关 SoC](https://www.cnx-software.com/wp-content/uploads/2026/05/Broadcom-BCM68565-10G-PON-chip.webp)
![BCM68565 + BCM67192 reference platform — integrated 10 Gbps PON + Wi-Fi 8 AP | BCM68565 + BCM67192 参考平台 —— 集成 10 Gbps PON + Wi-Fi 8 AP](https://www.cnx-software.com/wp-content/uploads/2026/05/BCM68565-BCM67182-10Gbps-PON-broadband-access-point.webp)
