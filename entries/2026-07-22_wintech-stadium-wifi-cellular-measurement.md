---
id: 2026-07-22_wintech-stadium-wifi-cellular-measurement
date_published: 2026-07-17
date_found: 2026-07-22
type: academic-paper
title_en: "App-Based Performance Characterization of Cellular and Wi-Fi Networks in Dense Stadium Deployments"
title_zh: "体育场高密度部署下蜂窝与 Wi-Fi 网络的应用级性能测量：Wi-Fi 6E 显著胜出"
url: "https://arxiv.org/abs/2607.16008"
source_quality: full
topics: [WiFi-6E, 6GHz, high-density, measurement, band-steering]
topic_primary: wifi7-deployment
topics_secondary: [spectrum-policy, rtwt-latency]
novelty_score: 2
---

## Summary (EN)

A measurement study from Monisha Ghosh's group (Notre Dame/UChicago lineage; submitted to ACM WiNTECH 2026 on July 17) characterizes real-world network performance inside **Notre Dame Stadium during sold-out 77,622-spectator football games**, where an enterprise Wi-Fi 6E deployment (~900 outdoor Standard-Power APs on seating railings plus ~400 LPI APs in concourses; 20 MHz channels on 5 GHz, 80 MHz on 6 GHz) operates alongside high-density neutral-host 4G/5G DAS infrastructure (up to 129 unique cell IDs per operator). Six commercial Samsung phones ran QualiPoc-automated application tests — web browsing, WhatsApp messaging/image sends, Instagram uploads, Ookla speed tests — yielding 1.35M QualiPoc and 1.89M SigCap samples across game days and baselines.

The headline result is a stark Wi-Fi win under load. Game-day web browsing on Wi-Fi 6 GHz showed a **3.9% page-load failure rate and 573 ms median TTFB**, versus 25% failure (T-Mobile), 24.7% failure with a catastrophic 5,983 ms P90 TTFB (Verizon), and 36.6% failure (AT&T, driven by a 70% median block-error rate on narrow low-band channels). Application latency under crowd load expanded only 2.1× over baseline on Wi-Fi versus 10.6–11.7× on Verizon/AT&T; cellular image-upload failures hit 44–46% while Wi-Fi 6 GHz stayed near zero. Cellular downlink modulation collapsed under load (AT&T MCS 13.5→6.0; Verizon 12.3→4.9), with uplink worse still — while the dense Wi-Fi deployment held 53–60.8 Mbps median downlink and 52.8 Mbps uplink through congestion.

Wi-Fi-specific observations include strong client preference for 6 GHz Standard-Power APs (median RSSI −52 dBm during games), band-steering that effectively emptied 5 GHz during peak load, a ~50% throughput-measurement artifact from Wi-Fi scanning overhead (empirically corrected 1.89×/2.10×), and a 2026 re-deployment no longer constrained by strict preferred-scanning-channel assignments — evidence of operational adaptation to co-channel interference in shared 6 GHz spectrum. The authors conclude that densified, localized Wi-Fi is "essential to absorb severe stadium traffic spikes," with T-Mobile's 5G SA architecture degrading more gracefully than the NSA EN-DC configurations of AT&T/Verizon.

## Summary (ZH)

来自 Monisha Ghosh 团队（圣母大学/芝加哥大学一脉；7 月 17 日投稿 ACM WiNTECH 2026）的测量研究，刻画了**圣母大学体育场 77,622 名满场观众橄榄球赛期间**的真实网络性能：企业级 Wi-Fi 6E 部署（约 900 个安装于座席栏杆的室外标准功率 AP + 约 400 个通廊 LPI AP；5 GHz 用 20 MHz 信道、6 GHz 用 80 MHz）与高密度中立主机 4G/5G DAS（每运营商最多 129 个小区 ID）并行运行。六部三星商用手机通过 QualiPoc 自动化执行应用级测试——网页浏览、WhatsApp 消息/图片、Instagram 上传、Ookla 测速——共采集 135 万 QualiPoc 与 189 万 SigCap 样本。

核心结论是负载下 Wi-Fi 全面胜出。比赛日 Wi-Fi 6 GHz 网页浏览**失败率仅 3.9%、TTFB 中位数 573 ms**，对比 T-Mobile 25% 失败、Verizon 24.7% 失败且 P90 TTFB 高达 5,983 ms、AT&T 36.6% 失败（低频窄信道 70% 中位块错误率所致）。人群负载下应用时延 Wi-Fi 仅扩大 2.1 倍，而 Verizon/AT&T 达 10.6–11.7 倍；蜂窝图片上传失败率 44–46%，Wi-Fi 6 GHz 近乎为零。蜂窝下行调制在负载下崩塌（AT&T MCS 13.5→6.0；Verizon 12.3→4.9），上行更差——而密集 Wi-Fi 部署在拥塞中仍保持下行中位数 53–60.8 Mbps、上行 52.8 Mbps。

Wi-Fi 侧观察包括：客户端强烈偏好 6 GHz 标准功率 AP（赛时 RSSI 中位数 −52 dBm）；频段引导在峰值负载下几乎清空 5 GHz；Wi-Fi 扫描开销造成约 50% 的吞吐测量伪差（经验校正系数 1.89×/2.10×）；2026 年重新部署不再受严格 PSC 信道指派约束——表明运营方在共享 6 GHz 频谱中对同频干扰的适应性调整。作者结论：密集化、本地化的 Wi-Fi 部署"对吸收体育场级流量尖峰不可或缺"；T-Mobile 的 5G SA 架构比 AT&T/Verizon 的 NSA EN-DC 退化更平缓。

## Key technical points (EN)

- Venue: Notre Dame Stadium, 77,622 spectators; ~900 outdoor Wi-Fi 6E SP APs (railing-mounted) + ~400 LPI concourse APs; 20 MHz @ 5 GHz, 80 MHz @ 6 GHz; neutral-host DAS with up to 129 cell IDs/operator.
- Method: 6 Samsung phones, QualiPoc automation + SigCap passive capture; 1.35M + 1.89M samples; app-level metrics (browsing TTFB/failures, WhatsApp, Instagram uploads).
- Wi-Fi 6 GHz vs cellular browsing: 3.9% vs 24.7–36.6% failure; 573 ms median TTFB vs 5,983 ms P90 (Verizon); AT&T low-band 70% median BLER.
- Latency expansion under load: 2.1× (Wi-Fi) vs 10.6–11.7× (cellular); image-upload failures ~0% vs 44–46%.
- Throughput under congestion: Wi-Fi 53–60.8 Mbps DL / 52.8 Mbps UL median, comparable to best 5G SA DL and far ahead on UL (<20 Mbps cellular).
- Wi-Fi scanning overhead inflates active-test error ~50%; correction factors 1.89× DL / 2.10× UL — a methodological caution for all phone-based Wi-Fi measurement.
- Band steering emptied 5 GHz under peak load; clients preferred 6 GHz SP APs (−52 dBm median RSSI); 2026 redeployment dropped strict PSC channel assignments.

## Key technical points (ZH)

- 场地：圣母大学体育场，77,622 名观众；约 900 个室外 Wi-Fi 6E 标准功率 AP（栏杆安装）+ 约 400 个通廊 LPI AP；5 GHz 20 MHz、6 GHz 80 MHz；中立主机 DAS 每运营商最多 129 个小区。
- 方法：6 部三星手机，QualiPoc 自动化 + SigCap 被动采集；135 万 + 189 万样本；应用级指标（浏览 TTFB/失败率、WhatsApp、Instagram 上传）。
- Wi-Fi 6 GHz 对比蜂窝浏览：失败率 3.9% 对 24.7–36.6%；TTFB 中位数 573 ms 对 Verizon P90 5,983 ms；AT&T 低频段中位 BLER 达 70%。
- 负载下时延扩大：Wi-Fi 2.1 倍，蜂窝 10.6–11.7 倍；图片上传失败率约 0% 对 44–46%。
- 拥塞吞吐：Wi-Fi 下行中位 53–60.8 Mbps / 上行 52.8 Mbps，下行与最佳 5G SA 相当、上行远超蜂窝（<20 Mbps）。
- Wi-Fi 扫描开销使主动测试低估约 50%；校正系数下行 1.89×/上行 2.10×——对所有基于手机的 Wi-Fi 测量方法论的警示。
- 频段引导在峰值负载下清空 5 GHz；客户端偏好 6 GHz SP AP（RSSI 中位 −52 dBm）；2026 年重新部署放弃严格 PSC 信道指派。

## Why it matters / what's new (EN)

This is the KB's first quantitative, app-level head-to-head of Wi-Fi 6E versus multi-operator 5G in an ultra-high-density venue, and it lands squarely in the stadium-Wi-Fi thread built by 2026-07-05_ampthink-hyper-directional-stadium-wifi and 2026-07-17_cambium-directional-wifi7-high-density-ap: those entries described the *design* trend (directional, densified, 6 GHz standard-power); this paper supplies the *evidence* that such deployments outperform even dense cellular DAS under real crowd load, especially on uplink — the direction stadium social-media traffic actually stresses. The scanning-overhead correction (≈2× on uplink) is an important methodological caveat for any phone-based Wi-Fi measurement, and the observed PSC-constraint relaxation is a rare public datapoint on operational 6 GHz co-channel management.

## Why it matters / what's new (ZH)

这是本 KB 首个在超高密度场馆中对 Wi-Fi 6E 与多运营商 5G 进行应用级定量对比的条目，与 2026-07-05_ampthink-hyper-directional-stadium-wifi、2026-07-17_cambium-directional-wifi7-high-density-ap 构建的体育场 Wi-Fi 主线正面衔接：前两者描述了*设计*趋势（定向、密集化、6 GHz 标准功率），本文则提供了*证据*——此类部署在真实人群负载下优于密集蜂窝 DAS，尤其在上行方向（正是体育场社交媒体流量的压力方向）。扫描开销校正（上行约 2 倍）是对所有基于手机的 Wi-Fi 测量的重要方法论警示；PSC 约束放宽的观察则是 6 GHz 同频运营管理的罕见公开数据点。
