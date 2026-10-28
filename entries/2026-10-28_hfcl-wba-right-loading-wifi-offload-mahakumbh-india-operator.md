---
id: 2026-10-28_hfcl-wba-right-loading-wifi-offload-mahakumbh-india-operator
date_published: 2026-10-27
date_found: 2026-10-28
technology: wifi
type: industry-news
title_en: "HFCL (WBA member release): \"Mobile Data Offload - Right-Loading Half a Billion Subscribers\" - Passpoint Wi-Fi offload at MahaKumbh 2025 and across an Indian operator's 50,000+ access points"
title_zh: "HFCL（WBA 会员发布）：《移动数据分流——为五亿用户“适配加载”》——MahaKumbh 2025 与印度某运营商 5 万多个接入点上的 Passpoint Wi-Fi 分流"
url: "https://wballiance.com/hfcl-mobile-data-offload-right-loading-half-a-billion-subscribers/"
source_quality: full
topics: [Wi-Fi offload, Passpoint, Hotspot 2.0, WPA3, carrier Wi-Fi, high-density, band steering, WBA]
topic_primary: roaming-mobility
topics_secondary: [wifi7-deployment]
novelty_score: 3
---

## Summary (EN)

This is a member-release article on the Wireless Broadband Alliance site, dated 27 October 2026 and written from the vendor's (HFCL, "IO by HFCL") viewpoint, so its figures are the vendor's own and not independently verified. It argues for treating Wi-Fi offload as "right-loading": placing each subscriber's traffic on the access network that serves it best at that moment, with a switch so transparent the user never notices. Architecture claims: Passpoint/Hotspot 2.0 authentication runs against the operator's own AAA server so the move between 4G/5G and Wi-Fi happens mid-call without a captive portal or SMS one-time password; the radio layer self-manages with auto channel selection, adaptive transmit power control, load balancing, band steering and seamless roaming across thousands of access points; a network-management and analytics platform tracks quality-of-experience indicators, connection failures and anomalies per site, AP and client; the access points work with any standards-based mobile core; and Passpoint Release 3.0 and WPA3 have been back-ported to first-generation Wi-Fi 5 hardware so an operator's existing base benefits.

Reported field numbers: at the MahaKumbh Mela 2025 (Prayagraj, 45 days, a temporary city with no permanent infrastructure, 660 million pilgrims passing through) the mobile data offload and wireless backhaul carried daily active connections from about 10,000 to more than 200,000 at peak, daily data from 150 GB to over 2.7 TB, more than 250,000 simultaneous users at the busiest moments with 99.9% uptime and no critical outage, and band steering kept over 80% of connections on 5 GHz in the densest zones. The same platform is said to run daily for India's largest mobile operator, serving more than 515 million subscribers across 50,000-plus access points, reaching five to six million unique users a day and right-loading around 65% of traffic in its active zones. The article cites industry benchmarks that put Wi-Fi's cost per bit at roughly half that of LTE and an Ericsson ConsumerLab 2023 finding that subscribers with poor connectivity at high-footfall venues are up to three times more likely to switch providers within six months, and says the next frontier is indoor coverage (an indoor/outdoor Wi-Fi architecture across Wi-Fi 5, 6 and 7), with expansion to operators in the UK, US, Europe and Africa.

## Summary (ZH)

这是 Wireless Broadband Alliance 网站上的一篇会员发布文章，日期为 2026 年 10 月 27 日，站在厂商（HFCL，“IO by HFCL”）的立场撰写，因此其数字为厂商自述，未经独立验证。文章主张把 Wi-Fi 分流视作“适配加载”（right-loading）：在每一时刻把每位用户的流量放到最适合服务它的接入网络上，并让切换透明到用户无感。架构方面的说法包括：Passpoint/Hotspot 2.0 认证直接对接运营商自己的 AAA 服务器，使 4G/5G 与 Wi-Fi 之间的切换可在通话中发生，无需强制门户或短信一次性密码；无线层通过自动信道选择、自适应发射功率控制、负载均衡、频段引导与无缝漫游，在数千个接入点上自我管理；网络管理与分析平台按站点、AP 与客户端跟踪体验质量指标、连接失败与异常；接入点可对接任何基于标准的移动核心网；并已将 Passpoint Release 3.0 与 WPA3 回移植到第一代 Wi-Fi 5 硬件，使运营商的存量设备受益。

报告的现场数据：在 MahaKumbh Mela 2025（Prayagraj，45 天，无永久基础设施的临时城市，6.6 亿朝圣者往来），移动数据分流与无线回传承载了每日活跃连接数从约 1 万增至峰值超过 20 万，日数据量从 150 GB 增至 2.7 TB 以上，最繁忙时同时在线超过 25 万人，正常运行时间 99.9% 且无严重中断，频段引导使最密集区域超过 80% 的连接位于 5 GHz。该平台据称每天为印度最大的移动运营商运行，服务超过 5.15 亿用户、5 万多个接入点，每日触达 500–600 万独立用户，在其活跃区域对约 65% 的流量做了适配加载。文章引用行业基准称 Wi-Fi 每比特成本约为 LTE 的一半，并引用 Ericsson ConsumerLab 2023 的发现：在人流密集场所连接差的用户，6 个月内更换运营商的可能性最高可达三倍；文章称下一个前沿是室内覆盖（跨 Wi-Fi 5、6、7 的室内外一体化 Wi-Fi 架构），并将拓展到英国、美国、欧洲与非洲的运营商。

## Key technical points (EN)

- Positioning: "right-loading" rather than "offloading" - traffic placed on the best-suited access network, handover invisible to the user.
- Authentication: Passpoint/Hotspot 2.0 against the operator's AAA, no captive portal or SMS OTP; Passpoint Release 3.0 and WPA3 back-ported to first-generation Wi-Fi 5 APs.
- Radio self-management: auto channel selection, adaptive TX power, load balancing, band steering, seamless roaming; NMS/analytics for per-site, per-AP, per-client QoE.
- MahaKumbh 2025 (vendor-reported): 10k to 200k+ daily active connections, 150 GB to 2.7 TB daily data, 250k+ concurrent users, 99.9% uptime, over 80% of connections on 5 GHz in dense zones.
- Operator deployment (vendor-reported): 515M+ subscribers, 50,000+ APs, 5-6M unique users/day, about 65% of traffic right-loaded in active zones.
- Cited context: Wi-Fi cost per bit about half of LTE (industry benchmarks); Ericsson ConsumerLab 2023 churn finding; indoor/outdoor Wi-Fi 5/6/7 architecture as the next step.

## Key technical points (ZH)

- 定位：用“适配加载”取代“分流”——流量放在最适合的接入网络上，切换对用户不可见。
- 认证：Passpoint/Hotspot 2.0 对接运营商 AAA，无强制门户或短信一次性密码；Passpoint Release 3.0 与 WPA3 回移植到第一代 Wi-Fi 5 AP。
- 无线层自管理：自动信道选择、自适应发射功率、负载均衡、频段引导、无缝漫游；NMS/分析平台提供按站点、AP、客户端的体验质量。
- MahaKumbh 2025（厂商自述）：日活跃连接 1 万增至 20 万以上，日数据量 150 GB 增至 2.7 TB，并发 25 万以上，正常运行时间 99.9%，密集区域超过 80% 连接在 5 GHz。
- 运营商部署（厂商自述）：5.15 亿以上用户、5 万多个 AP、日触达 500–600 万独立用户，活跃区域约 65% 流量被适配加载。
- 引用背景：Wi-Fi 每比特成本约为 LTE 的一半（行业基准）；Ericsson ConsumerLab 2023 的用户流失结论；室内外一体化 Wi-Fi 5/6/7 架构为下一步。

## Why it matters / what's new (EN)

Related WBA items: [2026-10-27_wba-6g-wifi-requirements-report-convergence](2026-10-27_wba-6g-wifi-requirements-report-convergence.md), [2026-10-26_wba-honda-bt-openroaming-vehicle-roadside-wifi-trial](2026-10-26_wba-honda-bt-openroaming-vehicle-roadside-wifi-trial.md). The article gives scale figures for carrier Wi-Fi offload in a very high-density setting. Because the numbers are vendor-reported and the article is promotional, they are best read as claimed operating points (peak concurrency, 5 GHz share under band steering, share of traffic carried), not as measured benchmarks.

## Why it matters / what's new (ZH)

相关 WBA 条目：[2026-10-27_wba-6g-wifi-requirements-report-convergence](2026-10-27_wba-6g-wifi-requirements-report-convergence.md)、[2026-10-26_wba-honda-bt-openroaming-vehicle-roadside-wifi-trial](2026-10-26_wba-honda-bt-openroaming-vehicle-roadside-wifi-trial.md)。文章给出了运营商 Wi-Fi 分流在极高密度场景下的规模数据。由于数字为厂商自述且文章带宣传性质，更适合视为所声称的运行点（峰值并发、频段引导下的 5 GHz 占比、承载流量占比），而非实测基准。

## Images

![HFCL article header: Mobile Data in the Modern City | HFCL 文章题图：现代城市中的移动数据](https://wballiance.com/wp-content/uploads/2026/10/Mobile-Data-in-the-Modern-City-1024x512.png)
