---
id: 2026-08-27_nict-mmwave-thz-integrated-beamforming
date_published: 2026-05-27
date_found: 2026-08-27
type: industry-news
technology: cellular
title_en: "NICT demonstrates integrated millimeter-wave / terahertz beamforming with automatic band switching for 6G"
title_zh: "NICT 实证毫米波与太赫兹一体化波束赋形通信，可按环境自动切换频段（面向 6G）"
url: "https://www.nict.go.jp/press/2026/05/27-1.html"
source_quality: full
topics: [terahertz, 300GHz, 60GHz, mmWave, beamforming, band-switching, Beyond-5G, NICT, Japan, 6G, XR, smart-factory]
topic_primary: 6g-vision
topics_secondary: [cellular-spectrum]
novelty_score: 3
---

## Summary (EN)

Japan's National Institute of Information and Communications Technology (NICT), which runs the country's Beyond 5G promotion programme, announced on 27 May 2026 what it calls the world's first demonstration of a beamforming communication system that operates the millimetre-wave and terahertz bands as one integrated system and switches between them automatically according to the radio environment.

The prototype pairs a 60 GHz millimetre-wave link with a 300 GHz terahertz link in a single architecture rather than as two separate radios. The terahertz side carries 8 GHz of bandwidth and reaches up to 7.5 Gbit/s, against 2.2 Gbit/s for the 2 GHz-bandwidth millimetre-wave side used as the conventional baseline. Both sides steer beams electronically over multiple antenna elements — ±60° for millimetre-wave and ±40° for terahertz — so the system keeps tracking a receiver whose position changes. The division of labour is the interesting part: the millimetre-wave side is used for beam control, tracking and connection maintenance, while the terahertz side is reserved for the high-capacity payload.

Switching is driven by received signal quality and link distance. At short range the system runs terahertz for maximum throughput; as the terminal moves further out, or when the terahertz link is interrupted (blockage, misalignment), the system falls back instantaneously to millimetre-wave to keep the connection alive, and can switch back when conditions allow. The demonstration was performed in an anechoic chamber and exhibited publicly at Wireless Japan x Wireless Technology Park 2026 (Tokyo Big Sight, from 27 May 2026), with a follow-up showing at the June 2026 NICT Open House. NICT names cross-reality (XR), ultra-high-definition video transport and smart-factory/industrial automation as the target 6G use cases.

## Summary (ZH)

日本情报通信研究机构（NICT）——负责日本 Beyond 5G 推进计划的国家研究机构——于 2026 年 5 月 27 日宣布，成功实证了据其称为全球首例的毫米波与太赫兹波"一体化运行"波束赋形通信系统：两个频段作为单一系统协同工作，并可根据无线环境自动切换。

该原型把 60 GHz 毫米波链路与 300 GHz 太赫兹链路整合进同一架构，而非两台独立设备。太赫兹侧带宽 8 GHz、最高速率 7.5 Gbit/s；作为对照的常规毫米波侧带宽 2 GHz、速率 2.2 Gbit/s。两侧均以多天线单元实现电子波束扫描——毫米波 ±60°、太赫兹 ±40°——因而接收端位置变化时系统仍可持续跟踪。其分工设计值得注意：毫米波侧承担波束控制、跟踪与连接维持，太赫兹侧则专注于大容量数据传输。

切换由接收信号质量与通信距离驱动。近距离时以太赫兹通信获取最高吞吐；终端移远、或太赫兹链路因遮挡/失准中断时，系统瞬时回落到毫米波以维持连接，条件恢复后可再切回。实证在电波暗室中完成，并于 2026 年 5 月 27 日起在 Wireless Japan x Wireless Technology Park 2026（东京 Big Sight）公开展出，2026 年 6 月 NICT 一般公开日再次展示。NICT 将跨现实（XR）、超高清视频传输、智慧工厂/工业自动化列为目标 6G 应用场景。

## Key technical points (EN)

- Two bands, one system: 60 GHz millimetre-wave + 300 GHz terahertz operated as an integrated beamforming architecture with automatic inter-band switching — the claimed world first.
- Terahertz side: 8 GHz bandwidth, up to 7.5 Gbit/s, ±40° electronic beam steering.
- Millimetre-wave side: 2 GHz bandwidth (conventional baseline), 2.2 Gbit/s, ±60° electronic beam steering.
- Role split: millimetre-wave handles beam control / tracking / connection maintenance; terahertz handles the high-capacity payload. The control plane therefore lives on the more robust band.
- Switching trigger: received signal quality and link distance. Short range → terahertz; longer range or terahertz interruption → instantaneous millimetre-wave fallback, with return when conditions allow. Beamforming continues to track a moving receiver across the switch.
- Evaluation environment: anechoic chamber (not a field trial); no distance figures, element counts, or array geometry disclosed in the release.
- Exhibition: Wireless Japan x Wireless Technology Park 2026, Tokyo Big Sight, from 27 May 2026; NICT Open House, June 2026.
- Target 6G use cases named by NICT: XR, UHD video transport, smart factory / industrial automation.
- Sole implementing organisation named is NICT; no co-developers, funding programme, or productisation timeline stated.
- News-freshness guard: the NICT press page carries its own 27 May 2026 datestamp (verified on the primary page, not inferred from a search summary); ingested ~3 months after publication as first coverage of Japan's national Beyond-5G programme in this KB.

## Key technical points (ZH)

- 双频段单系统：60 GHz 毫米波 + 300 GHz 太赫兹以一体化波束赋形架构运行并自动跨频段切换——即其宣称的全球首次。
- 太赫兹侧：带宽 8 GHz，最高 7.5 Gbit/s，电子波束扫描 ±40°。
- 毫米波侧：带宽 2 GHz（常规对照），2.2 Gbit/s，电子波束扫描 ±60°。
- 角色分工：毫米波负责波束控制/跟踪/连接维持，太赫兹负责大容量数据。即把"控制面"放在更稳健的频段上。
- 切换触发：接收信号质量与通信距离。近距离→太赫兹；远距离或太赫兹中断→瞬时回落毫米波，条件恢复后可切回；切换过程中波束赋形持续跟踪移动接收端。
- 评测环境：电波暗室（非外场试验）；发布稿未给出传输距离、天线单元数或阵列几何。
- 展出：2026 年 5 月 27 日起 Wireless Japan x Wireless Technology Park 2026（东京 Big Sight）；2026 年 6 月 NICT 一般公开日。
- NICT 列出的目标 6G 场景：XR、超高清视频传输、智慧工厂/工业自动化。
- 发布主体仅 NICT，未提及共同开发方、资助计划或产品化时间表。
- 新闻新鲜度守卫：NICT 官方页面自带 2026-05-27 日期戳（在一手页面核验，非来自搜索摘要推断）；发布约 3 个月后收录，为本库首次覆盖日本国家 Beyond 5G 计划。

## Why it matters / what's new (EN)

The 6g-vision bin is full of sub-THz *link* records — point-to-point demonstrations that report a peak rate at a fixed geometry and say nothing about what happens when the link breaks. NICT's contribution is the opposite emphasis: the raw 7.5 Gbit/s number is unremarkable next to headline THz records, but the system answers the question those records dodge, which is how a terahertz link survives contact with a moving terminal and an obstructed path. Making millimetre-wave the *control* band for a terahertz *data* band is a concrete architectural proposal for the multi-band 6G problem, and it maps naturally onto the anchor/booster and fast-fallback patterns 3GPP already uses for FR1/FR2 carrier aggregation and dual connectivity — the open question being whether such a switch belongs in the standardised mobility machinery or below it as a link-layer behaviour invisible to the network.

This is also the first entry from Japan's national Beyond 5G programme in this knowledge base — a coverage gap this scan set out to close. NICT sits alongside India's Bharat 6G programme and Korea's ETRI as national research layers whose results reach the 3GPP/ITU process through contributions rather than vendor product launches, and whose terahertz work has historically run ahead of commercial roadmaps. Read against the same day's Bharat 6G spectrum roadmap entry (which schedules 252-275 GHz and neighbouring sub-THz bands for long-term study), NICT's 300 GHz system is a working prototype in a band that most national roadmaps still list as a study item.

Caveats worth holding onto: this is an anechoic-chamber demonstration, so the mobility and blockage story is staged rather than measured in the field; the release discloses no link distances, array element counts, or switching latency figures; and there is no stated path from prototype to standardisation or product. Watch for a distance-resolved outdoor trial and for whether NICT brings the dual-band switching architecture into ITU-R IMT-2030 or 3GPP Release 21 discussions.

## Why it matters / what's new (ZH)

6g-vision 栏目里已有不少亚太赫兹**链路**纪录——固定几何下点对点测得的峰值速率，却对"链路断了怎么办"避而不谈。NICT 的重点恰好相反：7.5 Gbit/s 的绝对数值在太赫兹纪录中并不突出，但该系统回答了那些纪录回避的问题——太赫兹链路在终端移动、路径被遮挡时如何存活。把毫米波用作太赫兹**数据面**的**控制面**，是对多频段 6G 问题的一个具体架构提案，且天然对应 3GPP 在 FR1/FR2 载波聚合与双连接中已有的锚点/增强载波与快速回落模式——悬而未决的是：这种切换应进入标准化的移动性机制，还是留在其下、作为网络不可见的链路层行为。

这也是本知识库首个来自日本国家 Beyond 5G 计划的条目——正是本次扫描要填补的覆盖缺口。NICT 与印度 Bharat 6G、韩国 ETRI 同属国家研究层：其成果通过标准提案而非厂商产品发布进入 3GPP/ITU 流程，且太赫兹工作历来领先商用路线图。与同日的 Bharat 6G 频谱路线图条目对读（后者把 252-275 GHz 等亚太赫兹频段列为长期研究项），NICT 的 300 GHz 系统已是多数国家路线图仍视为"研究项"的频段上的可用原型。

需要保留的保留意见：这是电波暗室演示，移动性与遮挡场景属于摆拍而非外场实测；发布稿未披露链路距离、阵列单元数或切换时延；也未给出从原型到标准化或产品的路径。关注是否会有距离分辨的外场试验，以及 NICT 是否把双频段切换架构带入 ITU-R IMT-2030 或 3GPP Release 21 的讨论。

## Images
