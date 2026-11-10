---
id: 2026-11-10_arxiv-multilayer-uav-corridor-capacity-5g-nr-macro
date_published: 2026-11-06
date_found: 2026-11-10
type: academic-paper
technology: cellular
title_en: "Capacity of Multi-Layer Manhattan-Grid UAV Corridors Served by Terrestrial 5G NR Networks"
title_zh: "地面 5G NR 网络服务多层曼哈顿网格无人机走廊的容量"
url: "https://arxiv.org/abs/2611.09019"
source_quality: full
topics: [5G-NR, cellular-connected-UAV, advanced-air-mobility, UAV-corridors, 3GPP-aerial-channel, PHY-abstraction, OLLA, uplink-interference, load-coupling, antenna-tilt]
topic_primary: 5g-nr
topics_secondary: [ntn]
novelty_score: 3
---

## Summary (EN)

Masrur, Shafi, Hossen and Guvenc study the downlink and uplink capacity of a multi-layer Manhattan-grid mesh of UAV corridors, as envisaged for advanced air mobility, when it is served by a terrestrial 5G NR macro network (the paper is marked under review). The system-level model has configurable corridor spacing and numbers of layers, UAVs and base stations, uses the 3GPP aerial channel and antenna models with correlated UAV mobility, shadowing and LoS states, and maps SINR to throughput with an NR physical-layer abstraction that includes low-rate MCS entries, CSI aging and outer-loop link adaptation.

The headline results are that UAVs above 90 m see about 17 dB lower downlink SINR than ground users, that a dense macro layout with 10 degrees of downtilt leaves 17 to 29% of corridor positions without downlink service under full-buffer load regardless of corridor spacing, and that the uplink is the bottleneck: at 85% satisfaction a 20 MHz carrier supports only about 3.4 to 4.1 UAVs per square kilometre with 4 Mb/s of uplink video each.

## Summary (ZH)

Masrur、Shafi、Hossen 与 Guvenc 研究了先进空中交通设想中的多层曼哈顿网格无人机走廊，在由地面 5G NR 宏网络服务时的下行与上行容量（论文标注为审稿中）。系统级模型的走廊间距、层数、无人机数与基站数均可配置，采用 3GPP 空中信道与天线模型，并考虑相关的无人机移动、阴影与视距状态；通过包含低码率 MCS、CSI 老化与外环链路自适应的 NR 物理层抽象把 SINR 映射为吞吐量。

主要结果：90 m 以上的无人机下行 SINR 比地面用户低约 17 dB；在满缓冲负载下，10 度下倾的密集宏网络使 17% 至 29% 的走廊位置没有下行服务，且与走廊间距无关；上行是瓶颈——在 85% 满意度下，20 MHz 载波只能支持约 3.4 至 4.1 架/平方公里、每架 4 Mb/s 上行视频的无人机。

## Key technical points (EN)

- Scenario: wrap-around square area, east-west and north-south corridors with two opposite lanes each, stacked in layers (four layers at 60 to 150 m in the example), three-sector base stations at 25 m with 500 m inter-site distance and 10 degrees downtilt; UAVs are served mostly through base-station sidelobes and see line-of-sight interference from many cells.
- Down-tilt versus uptilt: the conclusion states that a 10 degree uptilt reduces downlink outage from 17% to 2.7%, at a cost to ground users.
- Carrier frequency: comparing 20 MHz carriers at 700 MHz, 3.5 GHz and 7.2 GHz on a common layout (the 700 MHz case uses a different inter-site distance and array size), UAV SINR changes by less than 0.5 dB, which the paper explains through an SNR/SIR decomposition as an interference-limited regime; the carrier matters mainly through channel aging.
- Load: with a load-coupled model, command-and-control traffic is supported up to 17 (700 MHz) to 79 (7.2 GHz) UAVs/km2 at 95% satisfaction, but with 4 Mb/s uplink video per UAV the 20 MHz carrier supports only 3.4 to 4.1 UAVs/km2 at 85%.
- Stated assumptions: omnidirectional UAV antennas, ideal channel estimation in the MCS thresholds and a finite wrap-around area; massive MIMO and dedicated aerial beams are left to future work.

## Key technical points (ZH)

- 场景：环绕式正方形区域，东西向与南北向走廊各含两条反向车道，按层堆叠（示例为 60 至 150 m 的四层）；三扇区基站高 25 m，站间距 500 m，下倾 10 度；无人机主要通过基站旁瓣获得服务，并受到来自多个小区的视距干扰。
- 下倾与上倾：结论指出 10 度上倾可使下行中断率由 17% 降至 2.7%，但会损害地面用户。
- 载波频率：在同一布局下（700 MHz 情形的站间距与阵列规模不同）比较 700 MHz、3.5 GHz 与 7.2 GHz 的 20 MHz 载波，无人机 SINR 变化不足 0.5 dB，论文通过 SNR/SIR 分解将其解释为干扰受限状态；载波频率主要通过信道老化产生影响。
- 负载：采用负载耦合模型，指挥控制业务在 95% 满意度下可支持 17（700 MHz）至 79（7.2 GHz）架/平方公里；但每架 4 Mb/s 上行视频时，20 MHz 载波在 85% 满意度下仅支持 3.4 至 4.1 架/平方公里。
- 论文自述的假设：无人机为全向天线，MCS 门限中信道估计理想，区域为有限环绕；大规模 MIMO 与专用空中波束留待后续研究。

## Why it matters / what's new (EN)

The authors frame advanced air mobility as organising UAV traffic into multi-altitude corridors; this paper puts numbers on how far a ground-oriented macro layout goes: coverage holes appear mainly because of antenna tilt and density rather than corridor layout, and the uplink limits video-class traffic well before command and control does. The study is simulation-based with omnidirectional UAV antennas, so it indicates trends and orders of magnitude rather than measured field capacity. The authors disclose that AI coding assistants were used in the simulation code and manuscript, with their own verification.

## Why it matters / what's new (ZH)

作者将先进空中交通设想为把无人机业务组织成多高度走廊；本文量化了面向地面设计的宏网络布局能走多远：覆盖空洞主要源于天线倾角与站点密度而非走廊布局，且视频类业务受上行限制的程度远早于指挥控制业务。研究基于仿真并假设无人机为全向天线，因此反映趋势与量级而非实测容量。作者披露在仿真代码与稿件中使用了 AI 编程助手并经自行核验。

## Images

![Manhattan-grid UAV corridor scenario: perspective view over three-sector base stations and side view of the stacked layers | 曼哈顿网格无人机走廊场景：三扇区基站上方的透视图与分层侧视图](https://arxiv.org/html/2611.09019v1/figs_icc/fig1_scenario_v5.png)
