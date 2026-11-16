---
id: 2026-11-16_ieee-mentor-win-sg-draft-par-r2-scope-latency-ai-assisted-decision-dcn-1834
date_published: 2026-11-12
date_found: 2026-11-16
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 WIN SG draft PAR, revision 2 - scope text with 25% throughput and tail-latency targets, AI-assisted decision information exchange, 1-7.250 GHz; closing report and amendment-naming slides (DCNs 11-26-1834r2, 2355r0, 1826r3)"
title_zh: "IEEE 802.11 WIN SG PAR 草案第 2 版：含 25% 吞吐与尾部时延目标、支持 AI 辅助决策的信息交换、1-7.250 GHz 范围的范围条款；闭幕报告与修正案命名幻灯片（DCN 11-26-1834r2、2355r0、1826r3）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=1834"
source_quality: full
topics: [WIN SG, WLAN Intelligent Networking, PAR, CSD, 802.11bn, UHR, AI traffic, tail latency, physical AI]
topic_primary: wifi8-uhr
topics_secondary: [wifi-for-ai, rtwt-latency, energy-power-save]
novelty_score: 4
---

## Summary (EN)

[DCN 11-26-1834r2](https://mentor.ieee.org/802.11/documents?is_dcn=1834&is_year=2026) is the WIN SG "802.11 WIN Proposed PAR" (Laurent Cariou, Intel, with 30-plus co-authors from Huawei, MediaTek, Broadcom, Qualcomm, NTT, Nokia, Lenovo, CableLabs, Cisco, ZTE, Sony, Samsung, InterDigital, Panasonic, Canon, FTH, Ofinno, MaxLinear, Charter and Sharp), dated 12 November 2026. Its revision history states that r1 incorporated feedback before the November meeting and r2 incorporated feedback received since the presentation in the first November slot. The document is a draft PAR for an amendment to IEEE Std 802.11-2024 with a placeholder project number (P802.11b<x>) and a placeholder title ("Enhancements for <WIN> WLAN").

The scope-of-project text (item 5.2.b) defines the "<WIN> capability" through the following elements: (1) at least one mode of operation that increases throughput by 25 percent, measured at the MAC data service access point, in at least one SINR level (rate-versus-range) and in the presence of over-the-air or in-device interference, relative to Ultra High Reliability MAC/PHY operation under the same conditions; (2) at least one mode of operation that reduces latency by 25 percent for the 95th and 99th percentile of the latency distribution of more than one access category, relative to Ultra High Reliability operation; (3) at least one mode of operation delivering a selected traffic stream within a bounded latency target in a specific deployment scenario; (4) at least one mode of operation that enables information exchange between two associated STAs, where the exchanged information may enable AI-assisted decision-making on at least one of the STA and its management entities; (5) a mechanism to reduce energy consumption for non-AP STAs and/or AP STAs (including mobile APs); and (6) enhancements that let a WLAN adapt its operation to emerging applications (the text gives physical AI and robotics as examples), traffic requirements or interference, including some enhancements for operation across infrastructure, mobile-AP and peer-to-peer topologies. The amendment applies to carrier frequencies between 1 GHz and 7.250 GHz and is to ensure backward compatibility and coexistence with legacy IEEE 802.11 devices in the 2.4, 5 and 6 GHz unlicensed bands. The explanatory notes define Ultra High Reliability operation by reference to P802.11bn and define a "bounded latency target" as an upper latency bound for a traffic stream between two STAs that is to be met for at least a stated percentage of frames, measured between the MAC data service access points.

Other PAR fields: the project is expected to involve about 400 people; the expected date of draft submission for initial sponsor ballot is given as March 2031 and the projected RevCom submission as November 2031; there are no similar-scope projects or joint development; stakeholders include semiconductor, PC, enterprise, consumer-electronics, home-networking, mobile, wearable and XR device makers, industrial IoT, robotics, AI systems and operators. The need statement (5.5) lists applications such as physical AI and humanoid robotics, wearables, XR, remote telesurgery, 3-D holographic telepresence, haptics, digital twin, location-based immersive entertainment and autonomous industrial operations, and describes traffic as increasingly uplink-heavy, bursty or tied to delay-sensitive feedback loops, with a need for more predictable worst-case latency and jitter in the presence of OBSS, in-BSS or non-WLAN interference, better coexistence between infrastructure and peer-to-peer traffic, and improved AP/STA power saving.

Two companion items from the same session are summarized from their own text. The WIN SG closing report ([DCN 11-26-2355r0](https://mentor.ieee.org/802.11/documents?is_dcn=2355&is_year=2026), Laurent Cariou, Intel) lists 21 presentations (the draft PAR 26/1834r1, the draft CSD 26/1806r1, naming of the amendment, six PAR contributions, use cases and requirements, miscellaneous technical items), teleconferences on 30 November and 7 December (10am-12pm ET), and the plan to approve the PAR and CSD in January with objectives and KPIs and candidate technologies still to be discussed. The naming slides ([DCN 11-26-1826r3](https://mentor.ieee.org/802.11/documents?is_dcn=1826&is_year=2026), Thomas Derham, Broadcom; the slide header is dated 2026-09-14 although r3 was uploaded on 12 November) argue that "Intelligent" is not an externally visible technical characteristic of a Wi-Fi network, compare with earlier generational amendment names (HT, VHT, HE, EHT, UHR), group the SG's themes (throughput, latency predictability, power, PQC security, adaptation to applications, AI traffic, immersive media, robotics, P2P), propose "Enhancements for XX" built on the concept of adaptivity, and list candidate names (for example Adaptive and Predictable Wireless, Adaptive Wireless Networking, Intelligent eXperience, Wireless Intelligent Networking, Wireless Predictable Latency) together with a staged straw-poll sequence on style, keyword and noun.

## Summary (ZH)

[DCN 11-26-1834r2](https://mentor.ieee.org/802.11/documents?is_dcn=1834&is_year=2026) 是 WIN SG 的"802.11 WIN 拟议 PAR"（Laurent Cariou，Intel 牵头，另有来自华为、联发科、博通、高通、NTT、诺基亚、联想、CableLabs、思科、中兴、索尼、三星、InterDigital、松下、佳能、FTH、Ofinno、MaxLinear、Charter、夏普等的 30 多位共同作者），日期为 2026 年 11 月 12 日。修订记录称：r1 吸收了 11 月会议前的反馈，r2 吸收了 11 月首个时段报告之后收到的反馈。该文档是对 IEEE Std 802.11-2024 的修正案 PAR 草案，项目编号（P802.11b<x>）和标题（"Enhancements for <WIN> WLAN"）均为占位符。

项目范围条款（5.2.b）通过以下要素定义"<WIN> 能力"：（1）至少一种运行模式，在至少一个 SINR 水平（速率-距离）下、存在空口或设备内干扰时，在 MAC 数据服务接入点处测得的吞吐量相对同等条件下的超高可靠性（UHR）MAC/PHY 运行提升 25%；（2）至少一种运行模式，对多于一个接入类别的时延分布第 95 和第 99 百分位将时延相对 UHR 运行降低 25%；（3）至少一种运行模式，在特定部署场景中把选定业务流的时延保持在有界时延目标内；（4）至少一种运行模式，使两个已关联 STA 之间能够交换信息，所交换的信息可使 STA 及其管理实体中至少一方进行 AI 辅助决策；（5）降低非 AP STA 和/或 AP STA（含移动 AP）能耗的机制；（6）使 WLAN 能够使其运行适应新兴应用（文中以物理 AI 与机器人为例）、业务需求或干扰的增强，并包括跨基础设施、移动 AP 与对等（P2P）拓扑运行的部分增强。修正案适用于 1 GHz 至 7.250 GHz 载频，并需确保与 2.4、5、6 GHz 免许可频段中传统 IEEE 802.11 设备的后向兼容与共存。说明性注释把 UHR 运行定义为参照 P802.11bn，把"有界时延目标"定义为两个 STA 之间业务流的时延上界，要求至少达到所述比例的帧、在 MAC 数据服务接入点之间测量。

其他 PAR 字段：预计约 400 人参与；初始发起人投票的草案提交日期写为 2031 年 3 月，预计提交 RevCom 为 2031 年 11 月；无相似范围项目、不联合开发；相关方包括半导体、PC、企业、消费电子、家庭网络、移动、可穿戴与 XR 设备厂商，工业物联网、机器人、AI 系统及运营商。需求说明（5.5）列出物理 AI 与人形机器人、可穿戴、XR、远程手术、3D 全息临场、触觉、数字孪生、大型场馆位置沉浸式娱乐和自主工业运行等应用，并把业务描述为上行占比越来越高、突发或带有时延敏感反馈回路，需要在 OBSS、BSS 内或非 WLAN 干扰存在时提升最坏情况时延与抖动的可预测性，改善基础设施与 P2P 业务的共存，以及改进 AP/STA 节能。

同一会期的两份配套文档按其自身内容概述。WIN SG 闭幕报告（[DCN 11-26-2355r0](https://mentor.ieee.org/802.11/documents?is_dcn=2355&is_year=2026)，Laurent Cariou，Intel）列出 21 份报告（PAR 草案 26/1834r1、CSD 草案 26/1806r1、修正案命名、6 份 PAR 相关贡献、用例与需求、其他技术项），11 月 30 日与 12 月 7 日（美东 10:00-12:00）两次电话会议，以及 1 月批准 PAR 与 CSD 的计划，目标/KPI 与候选技术仍待讨论。命名幻灯片（[DCN 11-26-1826r3](https://mentor.ieee.org/802.11/documents?is_dcn=1826&is_year=2026)，Thomas Derham，博通；幻灯片页眉日期为 2026-09-14，但 r3 于 11 月 12 日上传）主张"Intelligent"不是 Wi-Fi 网络外部可见的技术特性，对比此前各代修正案名称（HT、VHT、HE、EHT、UHR），归纳 SG 的主题（吞吐、时延可预测性、功耗、PQC 安全、对应用的适应、AI 业务、沉浸式媒体、机器人、P2P），提出基于"自适应"概念的"Enhancements for XX"命名，并列出候选名称（如 Adaptive and Predictable Wireless、Adaptive Wireless Networking、Intelligent eXperience、Wireless Intelligent Networking、Wireless Predictable Latency）及按风格、关键词、名词分步的 Straw Poll 序列。

## Key technical points (EN)

- **Throughput target (5.2.b):** at least one mode with +25% throughput at the MAC data service access point, in at least one SINR level, with OTA or in-device interference, versus UHR operation under the same conditions.
- **Latency targets (5.2.b):** at least one mode with -25% latency at the 95th and 99th percentile for more than one access category versus UHR; at least one mode delivering a selected stream within a bounded latency target in a specific deployment scenario.
- **AI-assisted decision:** at least one mode enabling information exchange between two associated STAs that may enable AI-assisted decision-making on at least one STA or its management entities.
- **Also in scope text:** energy-consumption reduction for non-AP and AP STAs (including mobile APs); adaptation to emerging applications such as physical AI and robotics; P2P/mobile-AP topology enhancements; 1-7.250 GHz; backward compatibility with legacy devices in 2.4/5/6 GHz.
- **Placeholders still open:** amendment title ("<WIN>"), project number (b<x>); the SG's closing report gives January 2027 as the target for approving the PAR and CSD (draft CSD is 11-26/1806r1).
- **Naming slides (DCN 1826r3):** candidates and a three-step straw-poll plan (style, keyword, noun); the slides' stated concern is that "intelligent" is not an externally visible characteristic of a Wi-Fi network. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1826&is_year=2026)
- **Closing report (DCN 2355r0):** 21 presentations in the session; teleconferences 30 Nov and 7 Dec. [document](https://mentor.ieee.org/802.11/documents?is_dcn=2355&is_year=2026)

## Key technical points (ZH)

- **吞吐目标（5.2.b）：** 至少一种模式在 MAC 数据服务接入点处、至少一个 SINR 水平、存在 OTA 或设备内干扰时，吞吐相对同等条件下的 UHR 运行提升 25%。
- **时延目标（5.2.b）：** 至少一种模式在多于一个接入类别上第 95/99 百分位时延相对 UHR 降低 25%；至少一种模式在特定部署场景下把选定业务流保持在有界时延目标内。
- **AI 辅助决策：** 至少一种模式使两个已关联 STA 之间可交换信息，该信息可使 STA 或其管理实体中至少一方进行 AI 辅助决策。
- **范围条款其他内容：** 降低非 AP 与 AP STA（含移动 AP）能耗；适应物理 AI 与机器人等新兴应用；P2P/移动 AP 拓扑增强；1-7.250 GHz；与 2.4/5/6 GHz 传统设备后向兼容。
- **仍为占位符：** 修正案标题（"<WIN>"）与项目编号（b<x>）；SG 闭幕报告给出 2027 年 1 月为批准 PAR 与 CSD 的目标（CSD 草案为 11-26/1806r1）。
- **命名幻灯片（DCN 1826r3）：** 候选名称及三步 Straw Poll 计划（风格、关键词、名词）；幻灯片陈述的关切是"intelligent"并非 Wi-Fi 网络外部可见的特性。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1826&is_year=2026)
- **闭幕报告（DCN 2355r0）：** 本会期 21 份报告；11 月 30 日与 12 月 7 日电话会议。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2355&is_year=2026)

## Why it matters / what's new (EN)

The KB's earlier WIN SG entries cover individual contributions and tentative PAR language (see 2026-09-16 WIN SG PAR-and-features digest and 2026-11-04 vehicular-operation PAR/CSD draft-text digest, which proposed insertions into r0 of this document). This entry records the draft PAR text as it stood after the November meeting: quantified 25% throughput and tail-latency targets measured against UHR operation, an explicit AI-assisted-decision information-exchange mode, an energy-saving item and a 1-7.250 GHz range, with the amendment name still undecided and a January 2027 approval target. It reports the document's own text only; the PAR is a draft and was not approved at this session.

## Why it matters / what's new (ZH)

本知识库此前的 WIN SG 条目涵盖单项贡献与暂定 PAR 措辞（见 2026-09-16 的 WIN SG PAR 与特性摘要，以及 2026-11-04 提出对本文档 r0 插入文字建议的车载运行 PAR/CSD 草案摘要）。本条目记录 11 月会议之后的 PAR 草案文本：以 UHR 运行为基准量化的 25% 吞吐与尾部时延目标、明确的 AI 辅助决策信息交换模式、节能条款和 1-7.250 GHz 范围；修正案名称尚未确定，目标是 2027 年 1 月批准。本条目仅转述文档自身文字；该 PAR 仍为草案，本次会议并未批准。

## Images

None.
