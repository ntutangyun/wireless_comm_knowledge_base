---
id: 2026-10-23_arxiv-half-slot-link-scheduling-open-gnss-multibeam-phased-array
date_published: 2026-10-22
date_found: 2026-10-23
technology: satellite
type: academic-paper
title_en: "Half-Slot Link Scheduling for Open GNSS with x-Tx y-Rx Multibeam Phased Array Antennas"
title_zh: "面向开放 GNSS 的 x 发 y 收多波束相控阵半时隙链路调度"
url: "https://arxiv.org/abs/2610.30695"
source_quality: full
topics: [GNSS, BeiDou, link-scheduling, phased-array, telemetry-telecommand, inter-satellite-link, ranging, half-slot]
topic_primary: leo-constellations
topics_secondary: [ngso-regulation]
novelty_score: 3
---

## Summary (EN)

Yan, Zhao, Li, Zheng, Wang and Zheng (arXiv 2610.30695, eess.SY, 20 pages, submitted 22 October 2026) consider GNSS constellations such as BeiDou evolving into open space infrastructure serving many spacecraft users. Existing phased-array payloads on BeiDou satellites provide one transmit and one receive beam, which becomes a bottleneck when many users share link opportunities. They propose a staged dynamic half-slot scheduling framework (SDHSS) for satellites with multiple Tx and Rx beams, treating navigation, telemetry (TM) and telecommand (TC) as separate services.

System model: time is split into superframes of slots, each with two half-slots; a half-slot carries one directed link, a satellite cannot transmit and receive in the same half-slot, and data received in a half-slot becomes usable in the next. Stage 1 uses an integer linear programme to reserve baseline contacts, guaranteeing each satellite at least 10 distinct ranging counterparts and, within every 3-slot sliding window, a contact between each anchor satellite and a ground station and between each non-anchor and an anchor. Stage 2 ranks eight service layers (two navigation, three TM, three TC) by urgency each half-slot, caps beam use per layer, and selects conflict-free actions by maximum-weight beam-copy matching.

Simulation: BeiDou with 24 MEO, 3 GEO and 3 IGSO satellites, three ground stations (Kashi, Weinan, Sanya), one day split into 288 states of 300 s, 20 slots of 3 s per 60 s superframe; ground stations have 4 Tx/4 Rx beams, satellites 1/1, 2/2 or 3/3. Against a Fair Contact Plan baseline with slot-level bidirectional contacts, at 3Tx/3Rx SDHSS delivers 94.1% of satellite TM (53.8% for FCP) and completes 90.3-94.0% of satellite TC (73.1-74.8%); across all tested beam configurations average ranging diversity stays slightly above ten and average PDOP around 1.20. User TM delivery rises from 28.0% to 90.0% and TC completion from 78.6% to 93.9% going from 1Tx/1Rx to 3Tx/3Rx. Long-range navigation users are limited by the receive-then-transmit phase requirement (0.48 to 3.17 distinct satellites). In 1Tx/1Rx cases FCP yields more ranging contacts and lower PDOP. The authors list coordination with laser backbone links and mission-specific traffic models as future work.

## Summary (ZH)

Yan、Zhao、Li、Zheng、Wang 和 Zheng（arXiv 2610.30695，eess.SY，20 页，2026 年 10 月 22 日提交）讨论北斗等 GNSS 星座演进为服务众多航天器用户的开放空间基础设施的情形。现有北斗卫星的星载相控阵载荷只有一个发射波束和一个接收波束，当许多用户共享链路机会时会成为瓶颈。他们为具备多个发射和接收波束的卫星提出了分阶段动态半时隙调度框架（SDHSS），把导航、遥测（TM）和遥控（TC）视为独立业务。

系统模型：时间划分为由时隙组成的超帧，每个时隙含两个半时隙；一个半时隙承载一条有向链路，卫星不能在同一半时隙内同时收发，半时隙内接收的数据在下一个半时隙才可用。第一阶段用整数线性规划预留基线接触，保证每颗卫星至少有 10 个不同的测距对象，并保证在每个 3 时隙滑动窗口内，每颗锚星至少与地面站接触一次、每颗非锚星至少与锚星接触一次。第二阶段每个半时隙按紧迫度对八个业务层（两个导航、三个 TM、三个 TC）排序，限制每层波束使用，并通过最大权重波束副本匹配选出无冲突动作。

仿真：北斗（24 颗 MEO、3 颗 GEO、3 颗 IGSO）、三个地面站（喀什、渭南、三亚）、一天划分为 288 个 300 s 状态，每个 60 s 超帧含 20 个 3 s 时隙；地面站 4 发 4 收波束，卫星为 1/1、2/2 或 3/3。与采用时隙级双向接触的公平接触计划（FCP）基线相比，在 3Tx/3Rx 下 SDHSS 的卫星 TM 送达率为 94.1%（FCP 为 53.8%），卫星 TC 完成率为 90.3-94.0%（FCP 为 73.1-74.8%）；在所有测试的波束配置下，平均测距对象数略高于 10，平均 PDOP 约 1.20。从 1Tx/1Rx 到 3Tx/3Rx，用户 TM 送达率从 28.0% 升至 90.0%，TC 完成率从 78.6% 升至 93.9%。远距离导航用户受先收后发相位要求限制（不同卫星数 0.48 至 3.17）。在 1Tx/1Rx 情形下 FCP 的测距接触更多、PDOP 更低。作者将与激光骨干链路的协同和特定任务流量模型列为未来工作。

## Key technical points (EN)

- **Problem**: single Tx/Rx beam per satellite limits link sharing for open-GNSS spacecraft users.
- **Time structure**: superframe of slots, two half-slots per slot; no simultaneous Tx and Rx in a half-slot.
- **Stage 1**: ILP baseline reservation; at least 10 ranging counterparts per satellite; anchor–ground / non-anchor–anchor contact within every 3 slots.
- **Stage 2**: eight service layers ranked by urgency; per-layer beam caps; maximum-weight beam-copy matching.
- **Setup**: BeiDou 24 MEO + 3 GEO + 3 IGSO; 3 ground stations; 288 states of 300 s; satellite beams 1/1, 2/2, 3/3.
- **Result (3Tx/3Rx)**: satellite TM 94.1% vs 53.8% FCP; TC 90.3-94.0% vs 73.1-74.8%. Average PDOP about 1.20 in all tested configurations.
- **Caveat**: FCP gives more ranging contacts and lower PDOP at 1Tx/1Rx.

## Key technical points (ZH)

- **问题**：每颗卫星仅一个收/发波束，限制了开放 GNSS 航天器用户的链路共享。
- **时间结构**：由时隙组成超帧，每时隙两个半时隙；同一半时隙内不能同时收发。
- **第一阶段**：ILP 基线预留；每颗卫星至少 10 个测距对象；每 3 个时隙内锚星–地面站、非锚星–锚星至少接触一次。
- **第二阶段**：八个业务层按紧迫度排序；每层波束上限；最大权重波束副本匹配。
- **设置**：北斗 24 MEO + 3 GEO + 3 IGSO；3 个地面站；288 个 300 s 状态；卫星波束 1/1、2/2、3/3。
- **结果（3Tx/3Rx）**：卫星 TM 94.1%（FCP 53.8%）；TC 90.3-94.0%（FCP 73.1-74.8%）。所有测试配置下平均 PDOP 约 1.20。
- **注意**：1Tx/1Rx 下 FCP 的测距接触更多、PDOP 更低。

## Why it matters / what's new (EN)

The paper treats a navigation constellation as a shared relay and ranging network and gives a concrete scheduling method with BeiDou-scale simulation numbers, including a case where the baseline performs better. It is simulation-only.

## Why it matters / what's new (ZH)

本文把导航星座视为共享的中继与测距网络，给出具体调度方法和北斗规模的仿真数据，其中也包含基线表现更好的情形。研究仅限于仿真。

## Images

None.
