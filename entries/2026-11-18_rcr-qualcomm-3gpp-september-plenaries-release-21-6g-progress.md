---
id: 2026-11-18_rcr-qualcomm-3gpp-september-plenaries-release-21-6g-progress
date_published: 2026-10-29
date_found: 2026-11-18
type: industry-news
technology: cellular
title_en: "Building the 6G Standard: Narrowing the Path to Release 21 (3GPP September Plenaries, Qualcomm Perspective)"
title_zh: "构建 6G 标准：收窄通往 Release 21 之路（3GPP 九月全会，高通视角）"
url: "https://rcrwireless.com/20261029/6g/building-the-6g-standard"
source_quality: full
topics: [3GPP, Release-21, 6G, reference-device-types, 1024-QAM, 5G-to-6G-migration, carrier-aggregation, 6G-core, NR-NTN]
topic_primary: 6g-vision
topics_secondary: [5g-nr, ntn]
novelty_score: 3
---

## Summary (EN)

A sponsored RCR Wireless article by Juan Montojo (VP, Technical Standards, Qualcomm Technologies), published 29 October 2026, reports on the 3GPP plenaries held in Madrid in September 2026, which advanced work on Release 21, the first 6G release. It is written from one vendor's perspective, and the author labels contributions that are proposals rather than adopted 3GPP decisions.

The article covers reference UE device types, uplink modulation order, 5G-to-6G migration options, 6G carrier aggregation, the 6G core, and a new 5G-Advanced satellite work item that begins with a study phase.

## Summary (ZH)

RCR Wireless 于 2026 年 10 月 29 日刊发了一篇赞助文章，作者为高通技术公司技术标准副总裁 Juan Montojo，报道 2026 年 9 月在马德里举行的 3GPP 全会如何推进第一个 6G 版本 Release 21 的工作。文章出自单一厂商视角，作者也明确区分了仅属提案、尚未被 3GPP 采纳的内容。

文章涉及参考终端设备类型、上行调制阶数、5G 向 6G 的迁移选项、6G 载波聚合、6G 核心网，以及一项以研究阶段开始的 5G-Advanced 卫星工作项目。

## Key technical points (EN)

- Reference device types: 3GPP started a framework with three initial types (massive IoT, eMBB, FWA). Each UE is associated with one type, and each type has at least four baseline characteristics: minimum transmit antennas/chains, minimum receive antennas/chains, smallest maximum downlink UE bandwidth, and smallest maximum uplink UE bandwidth. Automotive and wearable types, and traits such as higher-order modulation support and transmit-power class, may be considered at later meetings.
- Modulation: 5G supports up to 1024-QAM downlink and 256-QAM uplink. The RAN plenary agreed to raise uplink to 1024-QAM for FWA devices in Release 21; the article says one FWA device can generate traffic comparable to more than 10 smartphones. RAN1 reached no consensus on other maximum modulation-order changes. Probabilistic constellation shaping was not agreed for Release 21 because of differing evaluation results and implementation concerns.
- 5G-to-6G migration: standalone 6G with multi-RAT spectrum sharing (MRSS) is the default path. Three further options are under study (6G-anchored 6G-5G aggregation, 5G-anchored 5G-6G aggregation, and a dual stack with separate 5G and 6G cores); no consensus was reached on adding any, so the decision moves to the December plenaries.
- 6G-to-6G aggregation: carrier aggregation is the default; the study covers collocated and non-collocated deployments with ideal and non-ideal backhaul. RAN2 was tasked with non-collocated aggregation under non-ideal backhaul latency of up to 10 ms, with independent scheduling and multi-vendor interoperability as design goals.
- 6G core: SA2 is expected to reach high-level core decisions in Q4 2026. Operator contribution SP-260924 proposes evolution as the starting point, interoperable and testable essential connectivity that does not depend on AI, and new capabilities only where justified; the article notes this is a contribution, not an adopted decision.
- Satellite: a new Release 20 NR-NTN work item that begins with a study phase (5G-Advanced) will examine coexistence in the same cell or carrier with satellite systems serving existing, unmodified devices, and a path toward NTN-capable devices.
- Next step: the December plenaries in Boston are expected to revisit 5G-to-6G migration and further reference-device-type definition.

## Key technical points (ZH)

- 参考设备类型：3GPP 启动了一个框架，初始包含三种类型（海量物联网、eMBB、FWA）。每个 UE 对应一种类型，每种类型至少有四项基线特性：最少发射天线/链路数、最少接收天线/链路数、最小的最大下行 UE 带宽、最小的最大上行 UE 带宽。车载与可穿戴类型，以及高阶调制支持、发射功率等级等特性，可能在后续会议上讨论。
- 调制：5G 下行最高支持 1024-QAM，上行最高 256-QAM。RAN 全会同意在 Release 21 中将 FWA 设备的上行提升到 1024-QAM；文章称一台 FWA 设备的流量可相当于十台以上智能手机。RAN1 对其他最大调制阶数变化未达成共识。概率星座整形因各公司评估结果不一、实现顾虑而未纳入 Release 21。
- 5G 到 6G 迁移：带多制式频谱共享（MRSS）的独立 6G 是默认路径。另有三个选项在研究中（以 6G 为锚点的 6G-5G 聚合、以 5G 为锚点的 5G-6G 聚合、5G 与 6G 核心网分离的双栈），尚未就增加任何选项达成共识，决定推迟到十二月全会。
- 6G 内部聚合：载波聚合为默认；研究涵盖共站与非共站部署、理想与非理想回传。RAN2 被指派研究非理想回传时延最高 10 ms 的非共站聚合，目标包括独立调度与多厂商互通。
- 6G 核心网：SA2 预计在 2026 年第四季度形成高层核心网决策。多家运营商提交的 SP-260924 提出以演进为起点、保证不依赖 AI 的可互通可测试基本连接、仅在有充分理由时引入新能力；文章指出这只是提案，并非已采纳决定。
- 卫星：新增一个以研究阶段开始的 Release 20（5G-Advanced）NR-NTN 工作项目（WI），将研究在同一小区或载波内与服务现有未改动设备的卫星系统共存，以及面向支持 NTN 设备的演进路径。
- 后续：预计十二月在波士顿的全会将重新讨论 5G 到 6G 迁移与参考设备类型的进一步定义。

## Why it matters / what's new (EN)

No other KB entry covers the September 2026 (Madrid) plenaries. This is a single-vendor, sponsored account, so choices such as which items count as "no consensus" reflect the author's framing; the primary 3GPP meeting reports should be used to confirm details. It is useful as a dated checkpoint ahead of the December plenaries.

## Why it matters / what's new (ZH)

知识库中没有其他条目覆盖 2026 年 9 月（马德里）全会。本文为单一厂商的赞助稿，哪些事项被视为“未达成共识”体现了作者的表述方式，具体细节应以 3GPP 官方会议报告为准。作为十二月全会之前的一个带日期的检查点，它具有参考价值。

## Images

None.
