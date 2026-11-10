---
id: 2026-11-10_arxiv-starloc-geographic-locator-ipv6-starlink
date_published: 2026-11-05
date_found: 2026-11-10
technology: satellite
type: academic-paper
title_en: "StarLoc: A Practical Approach to Encoding Geographic Locators in IPv6 for Starlink"
title_zh: "StarLoc：面向 Starlink 的 IPv6 地理定位符编码实用方案"
url: "https://arxiv.org/abs/2611.08772"
source_quality: full
topics: [Starlink, IPv6, GeoFeed, IP-geolocation, locator-identifier-separation, H3]
topic_primary: starlink
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Singla, Abdollahi, Zhao and Pan (University of Victoria; arXiv cs.NI, submitted 5 Nov 2026) examine how IP geolocation providers place Starlink's IPv6 prefixes, which they do mainly through Starlink's self-published GeoFeed (RFC 8805 format). The authors characterize Starlink's IPv6 addressing from 925 historical GeoFeed snapshots (2024-2026), one year of PoP mappings and more than 7.9 million observed IPv6 addresses. They report that customer prefixes lack clear geographic structure, that prefix labels lie a median of 540 km from their assigned Points of Presence (PoPs), and that relabeling a single /40 can change the reported location of up to 65,536 possible /56 delegations.

To address this, the paper proposes StarLoc, a geographic Locator-Identifier separation scheme that embeds terminal location into the IPv6 address as a resolution-adaptive H3 cell Locator while preserving existing Starlink prefixes, /56 delegations and stable Endpoint Identifiers. Only cells containing at least a minimum number of terminals are revealed, operators can cap resolution in sensitive regions or withhold location entirely, and Locators follow moving users. In the evaluation (1,000 sampled land locations per PoP across eight PoPs on four continents), PoP-based positioning errors range from 275 km (Ashburn) to 2,203 km (Johannesburg), while H3 Locators give mean errors of 113, 43, 16 and 6.1 km at resolutions 2 to 5, about 141 times lower than PoP-based positioning at resolution 5. Demand-aware cell compaction keeps the Locator to 12-14 bits.

## Summary (ZH)

Singla、Abdollahi、Zhao 与 Pan（维多利亚大学；arXiv cs.NI，2026 年 11 月 5 日提交）研究 IP 地理定位服务商如何为 Starlink 的 IPv6 前缀定位，其主要依据是 Starlink 自行发布的 GeoFeed（RFC 8805 格式）。作者基于 925 份历史 GeoFeed 快照（2024-2026）、一年的 PoP 映射以及超过 790 万个观测到的 IPv6 地址，刻画了 Starlink 的 IPv6 编址：用户前缀缺乏清晰的地理结构，前缀标签与其所属入网点（PoP）的距离中位数为 540 km，对单个 /40 重新标注可能改变最多 65,536 个 /56 委派的上报位置。

为此，论文提出 StarLoc：一种地理定位符-标识符分离方案，将终端位置以分辨率自适应的 H3 单元定位符嵌入 IPv6 地址，同时保留现有 Starlink 前缀、/56 委派与稳定的端点标识符。仅公开终端数达到下限的单元，运营方可在敏感地区限制分辨率或完全不披露位置，定位符可随移动用户变化。评估（八个 PoP、横跨四大洲，每个 PoP 采样 1,000 个陆地位置）显示：基于 PoP 的定位误差从 275 km（Ashburn）到 2,203 km（Johannesburg），H3 定位符在分辨率 2 至 5 下的平均误差为 113、43、16 与 6.1 km，分辨率 5 时约比基于 PoP 的定位低 141 倍；按需求感知的单元压缩使定位符保持在 12-14 比特。

## Key technical points (EN)

- Measurement base: 925 GeoFeed snapshots (2024-2026), one year of PoP mappings, 7.9 million observed IPv6 addresses.
- Findings: no clear geographic structure in customer prefixes; median label-to-PoP distance 540 km; one /40 relabel can affect up to 65,536 /56 delegations.
- Design: H3 Locator embedded in IPv6, existing prefixes and /56 delegations preserved, stable Endpoint Identifiers, Locator follows moving users.
- Privacy control: only cells with at least a threshold number of terminals are revealed; resolution can be capped or location withheld.
- Result: mean error 113 / 43 / 16 / 6.1 km at H3 resolutions 2-5; about 141x below PoP-based at resolution 5; Locator overhead 12-14 bits.

## Key technical points (ZH)

- 测量基础：925 份 GeoFeed 快照（2024-2026）、一年 PoP 映射、790 万个观测到的 IPv6 地址。
- 发现：用户前缀缺乏清晰地理结构；标签到 PoP 距离中位数 540 km；一次 /40 重新标注最多影响 65,536 个 /56 委派。
- 设计：在 IPv6 中嵌入 H3 定位符，保留现有前缀与 /56 委派，端点标识符稳定，定位符随移动用户变化。
- 隐私控制：仅公开终端数达到阈值的单元；可限制分辨率或不披露位置。
- 结果：H3 分辨率 2-5 下平均误差 113 / 43 / 16 / 6.1 km；分辨率 5 时约比基于 PoP 低 141 倍；定位符开销 12-14 比特。

## Why it matters / what's new (EN)

The KB has Starlink measurement entries on queuing, weather, maritime and link-state forecasting, but none on how Starlink's addresses are mapped to locations. This entry adds the IP-addressing and geolocation layer, with a concrete proposal and numbers. The evaluation compares against PoP-based geolocation only; deployment would need Starlink's own adoption, which the paper does not claim.

## Why it matters / what's new (ZH)

KB 已有关于 Starlink 排队、天气、海事与链路状态预测的测量条目，但没有涉及 Starlink 地址如何映射到位置的内容。本条目补充了 IP 编址与地理定位层，并给出具体方案与数字。评估仅与基于 PoP 的定位对比；实际部署需要 Starlink 自身采纳，论文并未对此作出主张。

## Images

