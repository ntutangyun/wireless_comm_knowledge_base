---
id: 2026-10-14_mediatek-on-chip-ai-gateway-wifi-power-networkx
date_published: 2026-10-13
date_found: 2026-10-14
technology: wifi
type: industry-news
title_en: "MediaTek at Network X: on-chip AI to cut home-gateway Wi-Fi power by up to 50% in off-peak conditions"
title_zh: "联发科在 Network X：片上 AI 可在低负载时将家庭网关 Wi-Fi 功耗最多降低 50%"
url: "https://wifinowglobal.com/news-blog/mediatek-at-networkx-on-chip-ai-can-reduce-home-gateway-wi-fi-energy-consumption-by-50-without-impacting-connectivity-performance/"
source_quality: full
topics: [Wi-Fi 8, Filogic 8000, energy efficiency, home gateway, EU Ecodesign]
topic_primary: energy-power-save
topics_secondary: [ai-for-wifi, wifi8-uhr]
novelty_score: 3
---

## Summary (EN)

In a keynote at Network X in Vienna, reported by Wi-Fi NOW on 13 October 2026, MediaTek's James Chen (VP, Product and Technology Marketing) said on-chip AI can reduce Wi-Fi power on home gateways by up to half. His reference point: a typical MediaTek Wi-Fi 7 or Wi-Fi 8 gateway delivers on average about 1 Gbps while drawing just under 8 W (Wi-Fi only); at around 250 Mbps of off-peak demand the Wi-Fi power can be roughly halved, which Chen put at about 4 W per household, calling it a grid-level energy issue when multiplied across millions of homes.

According to the article, the on-device AI monitors home traffic and adjusts the Wi-Fi platform to follow daily load changes, using two levers: reducing the number of active transmit antennas, and lowering power-amplifier transmit power when traffic is light or client devices are close to the gateway. MediaTek says the software runs entirely at the edge with no cloud dependence and needs no extra NPU capacity or memory; it can run as an AI application on the CPU, avoiding higher gateway cost. The feature is part of MediaTek's Filogic 8000 Wi-Fi 8 platform, and the article notes it is not a requirement of the Wi-Fi 8 standard.

The article places this against EU Ecodesign limits on networked standby power and the European Commission's voluntary Broadband Equipment Code of Conduct, which sets maximum power targets for gateways in normal operation. Chen also argued that native AI in Wi-Fi and cellular chipsets lets operators obtain edge AI from chipset vendors rather than third-party developers. The article also cites MediaTek's AI-powered Network Doctor, which automatically detects and resolves Wi-Fi issues, from an earlier Wi-Fi NOW Tech Watch interview with Chen. The 50% figure in Chen's example is for an off-peak point (about 250 Mbps).

## Summary (ZH)

据 Wi-Fi NOW 2026 年 10 月 13 日报道，联发科产品与技术营销副总裁 James Chen 在维也纳 Network X 主题演讲中表示，片上 AI 可将家庭网关的 Wi-Fi 功耗最多降低一半。他给出的参照是：典型的联发科 Wi-Fi 7 或 Wi-Fi 8 网关平均可提供约 1 Gbps，Wi-Fi 部分功耗略低于 8 W；在约 250 Mbps 的低峰需求下，Wi-Fi 功耗可降至约一半；Chen 称每户约节省 4 W，乘以数百万户即成为电网级能耗问题。

文章称，设备端 AI 监测家庭流量并调整 Wi-Fi 平台以跟随日间负载变化，主要手段有两个：减少处于工作状态的发射天线数量，以及在流量较轻或客户端靠近网关时降低功率放大器（PA）发射功率。联发科称该软件完全在边缘运行、不依赖云端，也不需要额外的 NPU 算力或内存，可作为 AI 应用在 CPU 上运行，从而避免提高网关成本。该功能属于联发科 Filogic 8000 Wi-Fi 8 平台，文章指出它并非 Wi-Fi 8 标准的要求。

文章还将此置于欧盟生态设计对联网待机功耗的限制，以及欧盟委员会自愿性的《宽带设备行为准则》（规定网关正常工作时的最大功耗目标）的背景之下。Chen 另指出，Wi-Fi 与蜂窝芯片中的原生 AI 使运营商可从芯片厂商而非第三方开发者处获得边缘 AI。文章还援引此前 Wi-Fi NOW Tech Watch 对 Chen 的采访，提到联发科由 AI 驱动的 Network Doctor，可自动发现并解决 Wi-Fi 问题。Chen 举例中的 50% 对应低峰工作点（约 250 Mbps）。

## Key technical points (EN)

- Quoted operating point: about 1 Gbps average at just under 8 W (Wi-Fi only); roughly half that power at about 250 Mbps off-peak, about 4 W saved per household (figures from the keynote as reported).
- Mechanisms named: fewer active transmit antennas and lower PA transmit power under light load or close clients; runs on the gateway CPU with no extra NPU or memory.
- Part of Filogic 8000 (Wi-Fi 8) but, per the article, not a Wi-Fi 8 standard requirement.
- Regulatory context cited: EU Ecodesign networked-standby limits and the voluntary Broadband Equipment Code of Conduct.
- All numbers are MediaTek claims; the article reports no independent measurement.

## Key technical points (ZH)

- 引用的工作点：平均约 1 Gbps、功耗略低于 8 W（仅 Wi-Fi）；低峰约 250 Mbps 时功耗约减半，每户约节省 4 W（数据来自所报道的主题演讲）。
- 提到的机制：减少发射天线、在轻载或客户端靠近时降低 PA 发射功率；运行于网关 CPU，无需额外 NPU 或内存。
- 属于 Filogic 8000（Wi-Fi 8），但据文章并非 Wi-Fi 8 标准要求。
- 引用的监管背景：欧盟生态设计联网待机限制与自愿性《宽带设备行为准则》。
- 所有数字均为联发科的说法；文章未报道独立测量结果。

## Why it matters / what's new (EN)

This entry adds a vendor-stated, AP-side (gateway) power-saving approach driven by on-device traffic monitoring, rather than a protocol mechanism, to the energy-power-save bin. It complements the 2026-10-12 MediaTek Network X entry (2026-10-12_mediatek-filogic-8800-dso-npca-networkx), whose coverage is Filogic 8800 throughput (DSO+/NPCA+) and power claims. The 2026-10-12 entry's source (an Airoha announcement dated 6 October 2026, on Filogic 8800) gives different figures: 33% under typical workloads, and about 50% when combined with disabling unused bands.

## Why it matters / what's new (ZH)

本条目为 energy-power-save 主题补充了一种由厂商表述的、基于设备端流量监测的 AP（网关）侧节能方法，而非协议机制。它与 2026-10-12 的联发科 Network X 条目（2026-10-12_mediatek-filogic-8800-dso-npca-networkx，关注 Filogic 8800 的吞吐（DSO+/NPCA+）与功耗说法）互为补充。2026-10-12 条目的来源（Airoha 于 2026 年 10 月 6 日发布的 Filogic 8800 公告）给出的数字不同：典型负载下 33%，结合关闭未使用频段约 50%。

## Images

![James Chen, MediaTek, keynote at Network X | 联发科 James Chen 在 Network X 的主题演讲](https://wifinowevents.s3.amazonaws.com/uploads/2026/10/JamesNetworkX-1024x576.png)
