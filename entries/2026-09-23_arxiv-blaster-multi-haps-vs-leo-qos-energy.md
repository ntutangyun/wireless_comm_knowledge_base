---
id: 2026-09-23_arxiv-blaster-multi-haps-vs-leo-qos-energy
date_published: 2026-09-13
date_found: 2026-09-23
technology: satellite
type: academic-paper
title_en: "A Traffic-Aware QoS-Energy Consumption Tradeoff Study for Integrated 6G TN & NTNs"
title_zh: "面向集成 6G 地面/非地面网络的流量感知 QoS-能耗权衡研究"
url: "https://arxiv.org/abs/2609.22288"
source_quality: full
topics: [TN-NTN, HAPS, LEO, BLASTER, resource-allocation, energy-efficiency, base-station-sleep]
topic_primary: leo-constellations
topics_secondary: [ntn]
novelty_score: 3
---

## Summary (EN)

Akhtarshenas, Alam, López Pérez, and Bernabè (Universitat Politècnica de València and Nokia Standards France) submitted this paper on 2026-09-13. It extends the authors' own BLASTER resource-management framework — which jointly optimizes user association, bandwidth splitting, and power control across a terrestrial network (TN) tier and a non-terrestrial network (NTN) tier — from a single-platform setting to a comparison of one LEO satellite (600 km) against high-altitude-platform-station (HAPS) deployments of 1, 4, and 9 platforms (20 km), all sharing a fixed 40 MHz band under intra-tier frequency reuse for the multi-HAPS cases. The system model covers a 2,500 km² area with 1,776 macro base stations, urban/rural user splits, a 3GPP TR 38.901-compliant terrestrial channel and a 3GPP TR 38.811-compliant NT channel, and a normalized 24-hour diurnal traffic profile (400 to 10,000 active UEs).

The optimization maximizes a proportional-fair sum-log-throughput objective minus a weighted terrestrial power-consumption penalty, solved via block-coordinate gradient ascent with an L1-L2 relaxation of the discrete base-station on/off penalty; a two-condition sleep-mode heuristic shuts down a terrestrial base station in low-traffic hours only if it serves few enough users and all of them can hand over to active neighbors. Because HAPS sit at 20 km versus the satellite's 600 km, they deliver systematically stronger links and pull more traffic off the terrestrial tier: per-UE throughput on the non-terrestrial tier is 268% higher for 9-HAPS than 1-HAPS, and the LEO platform delivers roughly 19x lower per-UE throughput than 9-HAPS despite mostly avoiding the multi-platform's own co-channel interference penalty. Over a full day, the LEO configuration lets 26.0% of terrestrial base-station energy be shut down; a single HAPS reaches 30.3%, four HAPS 31.3%, and nine HAPS 34.1% — with the gap widening further in low-traffic and quiet-hour windows (up to 60.6% for 9-HAPS at the 05:00 traffic minimum, versus 54.7% for LEO). The paper frames this as multi-HAPS shifting the QoS-energy Pareto frontier outward relative to a single LEO platform: at LEO's own QoS level, a 9-HAPS deployment could shut down a further 19.0 percentage points of terrestrial base stations, while forcing LEO to match 9-HAPS's shutdown count degrades QoS by up to ~12% in the quietest hours.

## Summary (ZH)

Akhtarshenas、Alam、López Pérez 与 Bernabè（瓦伦西亚理工大学、诺基亚标准法国分部）于 2026 年 9 月 13 日提交本文，将其自有的 BLASTER 资源管理框架（联合优化地面网络（TN）层与非地面网络（NTN）层之间的用户关联、带宽分割与功率控制）从单一非地面平台场景扩展为对比：一颗 600 公里高度的 LEO 卫星 与 1、4、9 座高空平台站（HAPS，高度 20 公里）部署，多 HAPS 场景下共享固定 40 MHz 频段并采用层内频率复用。系统模型覆盖 2500 平方公里区域、1776 个宏基站、城乡用户划分、符合 3GPP TR 38.901 的地面信道与符合 3GPP TR 38.811 的非地面信道，以及归一化的 24 小时昼夜流量分布（活跃用户数在 400 至 10000 之间变化）。

该优化以比例公平的对数和吞吐量为目标，减去加权的地面功耗惩罚项，通过分块坐标梯度上升配合对离散基站开关惩罚的 L1-L2 松弛来求解；一种双条件休眠启发式规则仅在低流量时段、且某地面基站服务用户数足够少并可全部切换至相邻活跃基站时，才将其关闭。由于 HAPS 高度（20 公里）远低于卫星（600 公里），其链路质量显著更优，能将更多流量从地面层卸载：非地面层的人均吞吐量方面，9-HAPS 比 1-HAPS 高 268%；尽管多平台部署本身存在同频干扰惩罚，LEO 的人均吞吐量仍比 9-HAPS 低约 19 倍。以全天计，LEO 配置可关闭 26.0% 的地面基站能耗；单 HAPS 达 30.3%，4-HAPS 达 31.3%，9-HAPS 达 34.1%——在低流量及静默时段该差距进一步扩大（流量最低的 05:00 时段，9-HAPS 可达 60.6%，而 LEO 为 54.7%）。论文将此表述为：相对于单一 LEO 平台，多 HAPS 部署将 QoS-能耗帕累托前沿向外推移——在 LEO 自身的 QoS 水平下，9-HAPS 部署可再多关闭 19.0 个百分点的地面基站；反过来若强制 LEO 匹配 9-HAPS 的关闭数量，则在最安静时段其 QoS 会下降约 12%。

## Key technical points (EN)

- **System model**: 2,500 km² area, 1,776 macro BSs, urban (40% UEs, 500 m ISD) + rural (60%, 1,732 m ISD) split; NT tiers compared are a single LEO satellite at 600 km vs. 1/4/9-HAPS grids at 20 km, all sharing a fixed 40 MHz band; 3GPP TR 38.901 terrestrial channel, 3GPP TR 38.811 NT channel (clutter, scintillation, indoor entry loss).
- **BLASTER extension**: jointly optimizes UE-BS association, NT-tier bandwidth fraction ε (closed-form ε* = Kₛ/K), and per-RE transmit power via block-coordinate gradient ascent with an L1-L2 relaxation of the discrete on/off base-station power term; a two-condition sleep-mode rule shuts down under-loaded terrestrial BSs during 00:00-07:00 only if all served UEs can hand over to active neighbors.
- **Throughput**: NT-tier per-UE throughput is 268% higher for 9-HAPS than 1-HAPS and 38% higher than 4-HAPS; LEO delivers roughly 19x lower per-UE throughput than 9-HAPS due to its much longer slant range and higher path loss, despite avoiding most of the multi-platform co-channel interference the HAPS grids incur.
- **Energy savings (Table III)**: 24-hour terrestrial energy reduction is 26.0% (LEO), 30.3% (1-HAPS), 31.3% (4-HAPS), 34.1% (9-HAPS); low-traffic-window savings reach 41.3%-51.0% and quiet-hour (05:00) savings reach 54.7%-60.6% across the same ordering.
- **Pareto-frontier framing**: at LEO's own QoS level, 1/4/9-HAPS deployments could additionally shut down 4.8% / 11.8% / 19.0% more terrestrial base stations; conversely forcing LEO to match 9-HAPS's shutdown count degrades average QoS by 6.9% in low-traffic hours and up to ~12% at the 05:00 minimum.
- **Funding**: Generalitat Valenciana CIDEGENT PlaGenT grant (CIDEXG/2022/17), project iTENTE, and Spanish MCIN/AEI (10.13039/501100011033) with EU NextGenerationEU support.

## Key technical points (ZH)

- **系统模型**：2500 平方公里区域，1776 个宏基站；城区（占用户 40%，站间距 500 米）与郊区（占 60%，站间距 1732 米）划分；对比的非地面层为单颗 600 公里 LEO 卫星 与 1/4/9 座 20 公里 HAPS 网格，均共享固定 40 MHz 频段；地面信道遵循 3GPP TR 38.901，非地面信道遵循 3GPP TR 38.811（含杂波、闪烁、室内穿透损耗）。
- **BLASTER 扩展**：通过分块坐标梯度上升（配合对离散基站开关功率项的 L1-L2 松弛）联合优化用户-基站关联、非地面层带宽占比 ε（闭式解 ε* = Kₛ/K）及逐资源单元发射功率；双条件休眠规则仅在 00:00-07:00 时段、且某地面基站所服务的全部用户均可切换至相邻活跃基站时，才将其关闭。
- **吞吐量**：非地面层人均吞吐量方面，9-HAPS 比 1-HAPS 高 268%，比 4-HAPS 高 38%；由于斜距更长、路径损耗更高，LEO 的人均吞吐量约为 9-HAPS 的 1/19，尽管其基本不受多平台部署自身同频干扰的影响。
- **节能效果（表 III）**：全天地面能耗降幅分别为 26.0%（LEO）、30.3%（1-HAPS）、31.3%（4-HAPS）、34.1%（9-HAPS）；低流量时段降幅达 41.3%-51.0%，静默时段（05:00）降幅达 54.7%-60.6%，排序相同。
- **帕累托前沿论述**：在 LEO 自身 QoS 水平下，1/4/9-HAPS 部署可再多关闭 4.8% / 11.8% / 19.0% 的地面基站；反之若强制 LEO 匹配 9-HAPS 的关闭数量，其平均 QoS 在低流量时段下降 6.9%，在 05:00 最低谷时段降幅可达约 12%。
- **资助来源**：瓦伦西亚自治区 CIDEGENT PlaGenT 计划（CIDEXG/2022/17）、iTENTE 项目，以及西班牙 MCIN/AEI（10.13039/501100011033）资助（获欧盟 NextGenerationEU 支持）。

## Why it matters / what's new (EN)

This KB's leo-constellations/ntn coverage has so far treated LEO satellites and HAPS largely as separate deployment types; this paper puts a single LEO satellite and multi-HAPS grids through the identical traffic-aware joint-optimization framework and channel models, producing a directly comparable, quantified QoS-energy tradeoff between them rather than a qualitative architectural discussion. The headline finding — that a satellite's much higher altitude, and the resulting weaker link budget, gives it a measurably worse energy-shutdown ceiling than even a single HAPS, let alone nine — gives this KB's NTN-architecture thread a quantified LEO-vs-HAPS comparison under one framework; the paper concludes multi-HAPS is the more energy-efficient option for this objective.

## Why it matters / what's new (ZH)

知识库此前关于 leo-constellations/ntn 的条目大多将 LEO 卫星与 HAPS 视为两类独立的部署方式分别讨论；本文则将单颗 LEO 卫星与多 HAPS 网格置于同一套流量感知联合优化框架与信道模型下进行对比，给出了两者之间可直接比较、量化的 QoS-能耗权衡结果，而非停留在架构层面的定性讨论。其核心发现——卫星更高的轨道高度及由此导致的更弱链路预算，使其在节能停机能力上明显劣于哪怕只有一座的 HAPS，更不用说九座——为知识库中持续跟踪的 NTN 架构主题提供了一个在同一框架下量化对比 LEO 与 HAPS 的数据点；论文的结论是就该节能目标而言多 HAPS 部署是更节能的方案。

## Images

None.
