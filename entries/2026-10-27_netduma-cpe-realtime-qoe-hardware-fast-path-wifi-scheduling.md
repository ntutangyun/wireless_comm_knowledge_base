---
id: 2026-10-27_netduma-cpe-realtime-qoe-hardware-fast-path-wifi-scheduling
date_published: 2026-10-09
date_found: 2026-10-27
technology: wifi
type: product
title_en: "Netduma: real-time home broadband and Wi-Fi QoE optimisation on the CPE, inside the hardware fast path"
title_zh: "Netduma：在 CPE 上、位于硬件快速路径内的实时家庭宽带与 Wi-Fi 体验优化"
url: "https://wifinowglobal.com/news-blog/netduma-real-time-home-broadband-and-wi-fi-experience-optimisation-belongs-on-the-cpe-not-in-the-cloud/"
source_quality: full
topics: [QoE, CPE, hardware acceleration, OFDMA, MU-MIMO, MLO, Wi-Fi QoS, congestion control]
topic_primary: wifi7-deployment
topics_secondary: [rtwt-latency, ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

A Wi-Fi NOW Global article by Claus Hetting dated 9 October 2026 describes the platform of Netduma, a Cambridge, UK software company that argues real-time management of a customer's home broadband and Wi-Fi experience should run on the customer premises equipment (CPE) rather than in a cloud analytics platform. The article reports the company's statements on how the on-device platform detects and controls congestion, allocates bandwidth by application requirement, and programs Wi-Fi scheduling mechanisms to match what applications and devices need.

The central point in the article is that Netduma's software operates inside the hardware-accelerated forwarding path of broadband gateways. Per the company, modern gateways move established flows from the Linux networking stack into hardware acceleration, so Linux may see only the first few packets of a session; co-founder and CTO Iain Fraser is quoted saying that integrating into the fast path lets the software keep measuring and acting on traffic for the whole session. The optimisation suite is described as three layers. First, Adaptive Congestion Control (ACC), which the company says detects queue build-up before latency rises significantly and controls bottlenecks without software installed at the bottleneck itself, so it can address both the broadband access link and upstream or downstream Wi-Fi bottlenecks. Second, application-aware bandwidth allocation driven by an application-requirements database built from published specifications and the company's own testing. Third, Wi-Fi QoS scheduling that interfaces with Wi-Fi chipsets and drivers to manage OFDMA, MU-MIMO and Multi-Link Operation, with Broadcom's Low Latency API and Qualcomm's Service-Aware Queue named as mechanisms the company has worked with.

Traffic classification feeds all three layers. The company says it combines Deep Packet Inspection with Behavioural Identification to classify thousands of applications locally, with a signature database that can be updated from the cloud every four hours and no customer traffic sent to the cloud for classification, and that it can recognise some encrypted traffic from its characteristics. The same on-device measurement underpins an Insights suite, which the company says samples thousands of times per second across latency, jitter, packet loss, throughput and more than 70 other signals, stores data locally and reports richer data when a QoE score indicates a problem, with an AI assistant offering natural-language diagnosis across about 50 root-cause categories. The article states the technology is deployed in more than 10 million homes, naming BT/EE and Telstra among its operator clients; these figures are the company's.

## Summary (ZH)

Wi-Fi NOW Global 的 Claus Hetting 于 2026 年 10 月 9 日发表文章，介绍英国剑桥软件公司 Netduma 的平台。该公司主张，对用户家庭宽带与 Wi-Fi 体验的实时管理应当运行在用户侧设备（CPE）上，而不是云端分析平台。文章转述公司说法：这一设备端平台检测并控制拥塞，按应用需求分配带宽，并对 Wi-Fi 调度机制进行编程，使之匹配应用和设备的实际需要。

文章的核心点是，Netduma 的软件运行在宽带网关的硬件加速转发路径内。据公司介绍，现代网关会把已建立的流从 Linux 网络协议栈转入硬件加速，Linux 可能只看到会话最初的几个数据包；联合创始人兼 CTO Iain Fraser 的引语称，集成到快速路径使软件能在整个会话期间持续测量并采取动作。优化套件被描述为三层。第一，自适应拥塞控制（ACC），公司称其能在时延显著上升之前检测队列积压，且无需在瓶颈处部署软件即可控制瓶颈，因此可同时处理宽带接入链路以及上下行 Wi-Fi 瓶颈。第二，由应用需求数据库驱动的应用感知带宽分配，数据库基于公开规范和公司自测。第三，与 Wi-Fi 芯片组和驱动对接、管理 OFDMA、MU-MIMO 和多链路操作（MLO）的 Wi-Fi QoS 调度，公司提到其合作过的机制包括博通的 Low Latency API 和高通的 Service-Aware Queue。

流量分类为三层提供输入。公司称其结合深度包检测与行为识别，在本地分类数千种应用，特征库可每四小时从云端更新，客户流量无需上传云端分类，并能依据流量特征识别部分加密流量。同样的设备端测量支撑 Insights 套件：公司称其每秒对时延、抖动、丢包、吞吐及 70 多种其他信号采样数千次，数据本地存储，仅在 QoE 评分显示问题时上报更丰富的数据，并由 AI 助手以自然语言给出诊断，覆盖约 50 类根因。文章称该技术已部署于 1000 万以上家庭，运营商客户包括 BT/EE 和 Telstra；这些数字均为公司自述。

## Key technical points (EN)

- Architecture: optimisation runs on the CPE inside the gateway's hardware-accelerated forwarding path, keeping visibility of established flows (per the company).
- Layer 1, ACC: detects queue build-up before latency rises significantly; controls bottlenecks without being installed at them, covering broadband access and Wi-Fi bottlenecks (company claim).
- Layer 2: application-aware bandwidth allocation from an application-requirements database (published specifications plus own testing).
- Layer 3: Wi-Fi QoS scheduling through chipset and driver interfaces for OFDMA, MU-MIMO and MLO; Broadcom Low Latency API and Qualcomm Service-Aware Queue named.
- Classification: DPI plus Behavioural Identification, thousands of applications, performed locally; signatures can be updated from the cloud every four hours.
- Insights: passive measurement via the fast path, thousands of samples per second, 70+ signals, QoE-triggered deeper diagnostics, about 50 root-cause categories, natural-language AI assistant.
- Reported scale (company): over 10 million homes; BT/EE and Telstra named.

## Key technical points (ZH)

- 架构：优化运行在 CPE 上、网关硬件加速转发路径内，对已建立的流保持可见性（公司说法）。
- 第一层 ACC：在时延显著上升前检测队列积压；无需在瓶颈处部署即可控制瓶颈，覆盖宽带接入和 Wi-Fi 瓶颈（公司主张）。
- 第二层：基于应用需求数据库（公开规范加自测）的应用感知带宽分配。
- 第三层：通过芯片组和驱动接口对 OFDMA、MU-MIMO 和 MLO 做 Wi-Fi QoS 调度；提到博通 Low Latency API 与高通 Service-Aware Queue。
- 分类：DPI 加行为识别，数千种应用，本地完成；特征库可每四小时从云端更新。
- Insights：经快速路径被动测量，每秒数千次采样，70 多种信号，QoE 触发更深诊断，约 50 类根因，自然语言 AI 助手。
- 规模（公司自述）：1000 万以上家庭；提到 BT/EE 与 Telstra。

## Why it matters / what's new (EN)

The article is a vendor-side account of how application intent can be passed to the Wi-Fi layer on operator gateways, with OFDMA, MU-MIMO and MLO named as scheduling knobs and chipset QoS APIs as the interface. All performance and deployment statements are company claims relayed by a trade publication, and no measurements are given.

## Why it matters / what's new (ZH)

文章从厂商角度说明，应用意图如何在运营商网关上传递给 Wi-Fi 层：OFDMA、MU-MIMO 和 MLO 被作为调度手段，芯片组 QoS API 作为接口。所有性能与部署数据均为公司说法，由行业媒体转述，文中未给出测量数据。
