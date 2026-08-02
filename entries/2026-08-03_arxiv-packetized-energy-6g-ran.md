---
id: 2026-08-03_arxiv-packetized-energy-6g-ran
date_published: 2026-07-30
date_found: 2026-08-03
type: academic-paper
technology: cellular
title_en: "Packetized energy management for net-zero 6G: base stations as schedulable energy packets and a Telecoms Virtual Power Plant"
title_zh: "面向净零 6G 的分组化能量管理：把基站负载调度为能量分组，构建电信虚拟电厂"
url: "https://arxiv.org/abs/2607.28111"
source_quality: full
topics: [6G, energy, net-zero, RAN-orchestration, virtual-power-plant]
topic_primary: 6g-vision
topics_secondary: [cellular-ai]
novelty_score: 2
---

## Summary (EN)

Aijaz and Lin (submitted 30 July 2026) transplant packetized energy management (PEM) — a demand-flexibility technique from power-systems research — into telecom infrastructure, arguing that a net-zero 6G RAN must become both a growing power consumer and a source of distributed energy flexibility. PEM models flexible demand as schedulable "energy packets" (power × duration × priority) that can be admitted, deferred, or reshaped according to renewable availability, grid conditions, carbon intensity, and communication priorities.

Applied to a base-station site, PEM coordinates the non-critical loads — HVAC, rectifiers, battery charging, auxiliary systems, delay-tolerant edge workloads — while fencing off mission-critical functions (RUs, DUs, synchronization, transport). Control integrates with existing RAN orchestration (SMO, RIC) via standardized APIs and telemetry, and sites aggregate into a "Telecoms Virtual Power Plant" that can participate in grid-flexibility markets.

Fleet-level evaluation (20 base stations, 24-hour horizon, net-zero DER scenario) shows 11.35% energy reduction, 13.84% carbon reduction, 16.45% operating-cost reduction, PV self-consumption up from 87.28% to 95.67%, and PV curtailment down 65.93%. Under an 8-hour grid outage with conservative DER sizing, PEM extends site runtime by 37.5% and increases served critical UE-hours by 40.58%. The authors position this as the first telecom-native PEM control framework — prior PEM literature stayed in the power-systems domain.

## Summary (ZH)

Aijaz 与 Lin（2026 年 7 月 30 日提交）将分组化能量管理（PEM）——源自电力系统研究的需求柔性技术——移植到电信基础设施，主张净零 6G RAN 必须同时扮演不断增长的电力消费者与分布式能量柔性来源两个角色。PEM 把柔性需求建模为可调度的「能量分组」（功率 × 时长 × 优先级），依据可再生能源可用性、电网状态、碳强度与通信优先级进行准入、延迟或重塑。

应用于基站站点时，PEM 协调非关键负载——空调、整流器、电池充电、辅助系统、可容忍延迟的边缘工作负载——同时把关键功能（RU、DU、同步、传输）圈护在外。控制通过标准化 API 与遥测接入现有 RAN 编排（SMO、RIC），站点进一步聚合为可参与电网柔性市场的「电信虚拟电厂」。

车队级评估（20 个基站、24 小时窗口、净零 DER 场景）：能耗降 11.35%、碳排降 13.84%、运营成本降 16.45%、光伏自消纳从 87.28% 升至 95.67%、光伏弃电降 65.93%。在 8 小时断电、保守 DER 配置下，PEM 将站点续航延长 37.5%、关键 UE 服务时长增加 40.58%。作者定位其为首个电信原生 PEM 控制框架——此前 PEM 文献停留在电力系统领域。

## Key technical points (EN)

- Energy packets = (power, duration, priority) units; admitted/deferred/reshaped by renewable availability, grid state, carbon intensity, and comms priority.
- Scope split: non-critical loads (HVAC, rectifiers, battery charging, edge workloads) are packetized; RU/DU/sync/transport are protected.
- Integration via SMO/RIC APIs and telemetry; multi-site aggregation into a Telecoms Virtual Power Plant for grid-market participation.
- Fleet results (20 BS, 24 h): −11.35% energy, −13.84% carbon, −16.45% cost, PV self-consumption 87.28→95.67%, PV curtailment −65.93%.
- Resilience: +37.5% runtime and +40.58% critical UE-hours through an 8-hour outage.

## Key technical points (ZH)

- 能量分组 =（功率、时长、优先级）单元；按可再生能源可用性、电网状态、碳强度与通信优先级准入/延迟/重塑。
- 范围切分：非关键负载（空调、整流器、电池充电、边缘工作负载）被分组化；RU/DU/同步/传输受保护。
- 通过 SMO/RIC API 与遥测集成；多站点聚合为电信虚拟电厂参与电网市场。
- 车队结果（20 基站、24 小时）：能耗 −11.35%、碳排 −13.84%、成本 −16.45%、光伏自消纳 87.28→95.67%、弃电 −65.93%。
- 韧性：8 小时断电中续航 +37.5%、关键 UE 服务时长 +40.58%。

## Why it matters / what's new (EN)

The KB's cellular energy thread has so far been RAN-internal (BeGREEN's energy-efficient O-RAN cluster, sleep-mode optimization). PEM reframes the base station as a grid actor: the flexibility isn't in the radio parameters but in the site's non-radio loads, orchestrated through the same SMO/RIC machinery the AI-RAN thread is building out. The Telecoms-VPP aggregation angle gives operators a revenue-side story for energy work (grid-flexibility markets), not just a cost-side one — a framing shift worth tracking as 6G energy KPIs firm up in 3GPP Release 21 discussions.

## Why it matters / what's new (ZH)

本库的蜂窝能耗主线此前都在 RAN 内部（BeGREEN 的高能效 O-RAN 集群、休眠优化）。PEM 把基站重构为电网参与者：柔性不在无线参数里，而在站点的非无线负载中，并通过 AI-RAN 主线正在构建的同一套 SMO/RIC 机制编排。「电信虚拟电厂」聚合视角让运营商的能耗工作有了收入侧叙事（电网柔性市场），而不只是成本侧——随着 6G 能耗 KPI 在 3GPP Release 21 讨论中逐步成形，这一框架转变值得跟踪。

## Images

![PEM-enabled base station architecture | 支持 PEM 的基站架构](https://arxiv.org/html/2607.28111v1/PEM_RAN_v3.png)
![RAN architecture for PEM integration | PEM 集成的 RAN 架构](https://arxiv.org/html/2607.28111v1/PEM_RAN_Arch_v4.png)
![Telecoms Virtual Power Plant system architecture | 电信虚拟电厂系统架构](https://arxiv.org/html/2607.28111v1/T_VPP_v4.png)
