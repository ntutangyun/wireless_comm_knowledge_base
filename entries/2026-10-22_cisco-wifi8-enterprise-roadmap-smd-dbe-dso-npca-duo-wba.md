---
id: 2026-10-22_cisco-wifi8-enterprise-roadmap-smd-dbe-dso-npca-duo-wba
date_published: 2026-10-20
date_found: 2026-10-22
technology: wifi
type: industry-news
title_en: "Wi-Fi 8: The next evolution in enterprise connectivity (Cisco authors, published on the WBA site)"
title_zh: "Wi-Fi 8：企业连接的下一次演进（Cisco 作者，发布于 WBA 网站）"
url: "https://wballiance.com/wi-fi-8-the-next-evolution-in-enterprise-connectivity/"
source_quality: full
topics: [802.11bn, Wi-Fi 8, SMD, DBE, MAPC, DSO, NPCA, DUO, enterprise Wi-Fi]
topic_primary: wifi8-uhr
topics_secondary: [roaming-mobility, mapc-cosr]
novelty_score: 2
---

## Summary (EN)

This is a blog post on the Wireless Broadband Alliance site dated 20 October 2026, with Anand Gurumurthy, Brian Hart and Binita Gupta as listed authors. It speaks in Cisco's voice ("At Cisco, we are playing a significant role in shaping this next generation of Wi-Fi"), and its figure is hosted on blogs.cisco.com.

The post opens with a Wi-Fi generation timeline (the prose runs from 802.11b at 11 Mbps to Wi-Fi 7 multi-gigabit speeds; the accompanying figure runs from Wi-Fi 4 to Wi-Fi 7) and argues that Wi-Fi 8 "will be different": "Speed is no longer the focus; it's about being smarter." It then describes the enterprise problem as networks that are fast but not able to prioritise what matters, listing dense device counts competing for airtime, mission-critical traffic sharing bandwidth with background updates, single video calls dominating a conference room, IoT and signage devices, and seamless roaming expectations.

The core of the post is a feature walk-through of Wi-Fi 8 (802.11bn): Seamless Mobility Domain (SMD) for imperceptible roaming across APs; Dynamic Bandwidth Expansion (DBE) to scale channel width with real-time need; coordinated APs (multi-AP coordination) so that APs "work together collaboratively" instead of contending; Dynamic Sub-band Operation (DSO) to carve channels so low-capability IoT devices do not degrade other traffic; Non-Primary Channel Access (NPCA) to transmit on secondary channels while the primary is occupied; and Dynamic Unavailability Operation (DUO), which lets a device tell the AP when and for how long it cannot receive Wi-Fi because of in-device coexistence, so the AP can reschedule traffic. The post says Cisco's contributions to 802.11bn include advancing SMD, DBE and MAPC and shaping DSO and NPCA, says Cisco is championing certification of these features through the Wi-Fi Alliance, and mentions post-quantum cryptography work within 802.11bt.

It closes with scenarios (healthcare carts, a corporate campus, warehouses and logistics) and a timeline view: Wi-Fi 7 "remains the right choice for enterprise deployments today", 802.11bn ratification is "expected around 2028", certified Wi-Fi 8 products "may arrive a few months before the final standard is formally approved", and enterprise-ready Wi-Fi 8 products are "3-5 years away from mainstream deployment".

## Summary (ZH)

这是 2026 年 10 月 20 日发布在无线宽带联盟（WBA）网站上的一篇博文，署名作者为 Anand Gurumurthy、Brian Hart 和 Binita Gupta。文章以 Cisco 的口吻写成（“At Cisco, we are playing a significant role in shaping this next generation of Wi-Fi”），配图托管在 blogs.cisco.com。

文章先给出 Wi-Fi 世代演进时间线（正文从 11 Mbps 的 802.11b 讲到 Wi-Fi 7 的多吉比特速率；配图则从 Wi-Fi 4 到 Wi-Fi 7），并论述 Wi-Fi 8“将有所不同”：“速度不再是重点，关键在于更智能。”随后把企业面临的问题描述为网络很快但无法有效区分优先级，列举了大量设备争用空口时间、关键业务与后台更新共享带宽、单个视频会议占满会议室、IoT 与数字标牌设备，以及对无缝漫游的期待。

文章核心是对 Wi-Fi 8（802.11bn）特性的逐项介绍：无缝移动域（SMD），实现跨 AP 的无感漫游；动态带宽扩展（DBE），按实时需求伸缩信道带宽；协调 AP（多 AP 协调），使 AP“协同工作”而非相互争用；动态子频带操作（DSO），切分信道，避免低能力 IoT 设备拖累其他流量；非主信道接入（NPCA），在主信道被占用时于次信道发送；以及动态不可用操作（DUO），设备可告知 AP 因设备内共存而在何时、持续多久无法接收 Wi-Fi，AP 据此重新调度流量。文章称 Cisco 对 802.11bn 的贡献包括推进 SMD、DBE 和 MAPC，以及塑造 DSO 和 NPCA，并称 Cisco 正在推动这些特性通过 Wi-Fi 联盟认证，并提到其在 802.11bt 中的后量子密码工作。

文章最后给出医疗推车、企业园区、仓储物流等场景和时间线判断：Wi-Fi 7“仍是当下企业部署的正确选择”，802.11bn 批准“预计在 2028 年前后”，经认证的 Wi-Fi 8 产品“可能比标准正式批准早几个月出现”，企业级 Wi-Fi 8 产品“距离主流部署还有 3-5 年”。

## Key technical points (EN)

- Source: WBA-hosted blog post, 2026-10-20; authors Anand Gurumurthy, Brian Hart, Binita Gupta; written in Cisco's voice. WBA lists it as a Member Release posted 2026-10-21 with a 20 October byline.
- Features covered: SMD, DBE, coordinated APs/MAPC, DSO, NPCA, DUO (in-device coexistence: the device tells the AP when and for how long it is unavailable).
- Cisco's stated 802.11bn contributions: advancing SMD, DBE and MAPC, and shaping DSO and NPCA; also PQC work in 802.11bt and championing Wi-Fi Alliance certification of these features.
- Stated timeline: 802.11bn ratification expected around 2028; certified products possibly a few months earlier; mainstream enterprise deployment 3-5 years away; Wi-Fi 7 recommended for deployment now.
- The post is qualitative and gives no measured numbers.

## Key technical points (ZH)

- 来源：WBA 网站上的博文，2026-10-20；作者 Anand Gurumurthy、Brian Hart、Binita Gupta；以 Cisco 口吻撰写。WBA 将其列为 2026-10-21 发布的 Member Release，署名日期为 10 月 20 日。
- 涉及特性：SMD、DBE、协调 AP/MAPC、DSO、NPCA、DUO（设备内共存：设备告知 AP 其何时、持续多久不可用）。
- Cisco 自述的 802.11bn 贡献：推进 SMD、DBE、MAPC，塑造 DSO、NPCA；此外还有 802.11bt 中的 PQC 工作，以及推动这些特性通过 Wi-Fi 联盟认证。
- 所述时间线：802.11bn 预计 2028 年前后批准；认证产品可能提前数月；企业主流部署还需 3-5 年；建议当下部署 Wi-Fi 7。
- 文章为定性叙述，没有给出实测数据。

## Why it matters / what's new (EN)

The KB already holds the 802.11bn feature set through standards documents and papers (for example the Mentor digests on MAPC, DSO and NPCA); this post adds an enterprise-vendor statement of which of those features it considers most relevant and how it frames deployment timing. It is a vendor viewpoint and quantifies nothing. Cisco's earlier Wi-Fi 7 coverage is in 2026-05-04_cisco-wifi7-breakout-year-2026.

## Why it matters / what's new (ZH)

知识库已通过标准文档和论文（例如 MAPC、DSO、NPCA 的 Mentor 摘要）覆盖 802.11bn 的特性集；本文补充了一家企业设备厂商对这些特性相关性的表述及其对部署时间的判断。这是厂商观点，没有量化数据。Cisco 此前的 Wi-Fi 7 报道见 2026-05-04_cisco-wifi7-breakout-year-2026。
