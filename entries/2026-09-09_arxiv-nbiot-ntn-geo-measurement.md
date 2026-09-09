---
id: 2026-09-09_arxiv-nbiot-ntn-geo-measurement
date_published: 2026-09-05
date_found: 2026-09-09
type: academic-paper
technology: satellite
title_en: "Exploring the Initial Performance of NB-IoT NTN over GEO: Random-Access Retransmission Consumes 56% of Connection Energy Across Skylo and Tiantong"
title_zh: "探索 GEO 场景下 NB-IoT NTN 的初期性能：Skylo 与天通实测显示随机接入重传占用连接总能耗的 56%"
url: "https://arxiv.org/abs/2609.06280"
source_quality: full
topics: [NB-IoT-NTN, GEO-satellite-IoT, end-to-end-delay-measurement, power-saving-mode, random-access-energy, MSG3-retransmission, access-class-barring, Skylo, Tiantong]
topic_primary: sat-iot
topics_secondary: []
novelty_score: 3
---

## Summary (EN)
Wang, Du, Gu, Lin, Li, Gong, Gong and Kong (University of Science and Technology of China, Southern University of Science and Technology, University of Luxembourg, Shanghai Jiao Tong University, and Bin Gu as an independent researcher) present what they describe as the first comprehensive, in-depth measurement study of commercial NB-IoT Non-Terrestrial Networks (NTN) over Geostationary Earth Orbit (GEO), using two operational satellite-IoT service providers -- Skylo (America, GEO satellite INMARSAT 4-F1) and Tiantong (China) -- with a JMD47 NB-IoT ground terminal deployed for over six months. The study measures end-to-end (E2E) delay and energy consumption across payload size (16-1024 bytes), traffic interval (2/5/10 s), and concurrency level (1-10 simultaneous terminals). Key findings: E2E delay stays near-constant for small payloads but grows linearly once packet size exceeds a Transport Block Size (TBS) threshold that differs sharply by provider (32 bytes for Skylo vs. 128 bytes for Tiantong, versus the 3GPP TS 36.523-2 spec of ~1000 bits), attributed to conservative modulation/coding, high repetition factors and large timing guards on the satellite uplink forcing payload fragmentation into serialized (non-pipelined) NPUSCH transmissions; concurrency scales super-linearly, with 10 simultaneous terminals producing tail latencies exceeding 30-35 seconds versus 8-9 seconds at concurrency 1-2, driven by RACH collisions and delayed uplink grants under the ultra-long GEO propagation delay (~500 ms one way); and energy is dominated not by data transfer (only ~5% of total connection energy) but by MSG3 random-access retransmission (56%) and NAS signaling overhead (28%), a roughly 3-5x per-connection energy penalty versus terrestrial NB-IoT. The paper also reports that Power Saving Mode (PSM) reshapes traffic into a bursty, access-driven pattern, and that a mis-set RRC inactivity timer (empirically located near 5 seconds) causes unstable connection-retention behavior when packet arrival coincides with timer expiry. Building on a derived latency/energy model (T_E2E proportional to N_RA x T_RTT + N_c x T_RTT), the authors propose three lightweight, trace-driven-simulated optimizations: an adaptive MSG3 retransmission-count scheme keyed to received MSG1 power (versus the static ECL1/ECL2 retransmission counts of 32/128: 44% vs r32 and 83% vs r128 under moderate channel, 44% vs r128 under the worst channel, at a small RACH-success-rate cost); MIDA, a TCP-congestion-control-inspired adaptive PSM T3324 timer controller (85.2% downlink delivery ratio at 1683 J, versus 99.3% DDR at 2993 J for a static 120 s timer -- a 43.8% energy saving -- and within 17% energy / 15% DDR of an oracle Pareto frontier); and a dynamic Access Class Barring (ACB) mechanism that adjusts the barring factor from measured per-second collision rate, holding collision rate near 10% at 100+ concurrent terminals versus 23-34% for static-ACB/ALOHA baselines.

## Summary (ZH)
Wang、Du、Gu、Lin、Li、Gong、Gong 与 Kong（中国科学技术大学、南方科技大学、卢森堡大学、上海交通大学，以及独立研究者 Bin Gu）针对面向地球静止轨道（GEO）的商用 NB-IoT 非地面网络（NTN），开展了据其描述为首个全面、深入的实测研究，使用两家在运营的卫星物联网服务商——Skylo（美国，GEO 卫星 INMARSAT 4-F1）与天通（中国）——并部署 JMD47 NB-IoT 地面终端持续测量超过六个月。研究测量了不同负载大小（16-1024 字节）、不同流量间隔（2/5/10 秒）与不同并发终端数（1-10 台）下的端到端（E2E）时延与能耗。主要发现包括：负载较小时 E2E 时延基本恒定，但一旦负载超过某个传输块大小（TBS）阈值便呈线性增长，且该阈值在不同运营商间差异显著（Skylo 为 32 字节，天通为 128 字节，而 3GPP TS 36.523-2 规范约为 1000 比特），原因归结为卫星上行链路保守的调制编码方式、较高的重复因子与较大的定时保护间隔，迫使负载被分片为串行（非流水线）的 NPUSCH 传输；并发情况下时延呈超线性增长，10 台终端并发时尾部时延超过 30-35 秒，而 1-2 台并发时仅为 8-9 秒，根源在于 GEO 超长传播时延（单向约 500 毫秒）下的 RACH 碰撞与上行授权延迟；能耗方面，数据传输本身仅占连接总能耗约 5%，而 MSG3 随机接入重传占 56%、NAS 信令开销占 28%，相较地面 NB-IoT 单次连接能耗高出约 3-5 倍。论文还发现节电模式（PSM）会将流量重塑为突发式、接入驱动的模式，且 RRC 不活动定时器设置不当（实测约在 5 秒附近）会在数据包到达恰好与定时器超时重合时导致连接保持行为不稳定。基于推导出的时延/能耗模型（T_E2E 正比于 N_RA × T_RTT + N_c × T_RTT），作者提出三项基于跟踪驱动仿真验证的轻量级优化方案：一种根据接收到的 MSG1 功率动态确定 MSG3 重传次数的自适应方案（相较 ECL1/ECL2 静态重传次数 32/128：中等信道下相比 r32 节能 44%、相比 r128 节能 83%，最差信道下相比 r128 节能 44%，仅小幅牺牲 RACH 成功率）；MIDA，一种借鉴 TCP 拥塞控制思想的自适应 PSM T3324 定时器控制器（在 1683 焦耳能耗下实现 85.2% 的下行投递率，相较静态 120 秒定时器在 2993 焦耳下实现 99.3% 投递率，节能 43.8%，且与理想帕累托前沿的差距仅为能耗 17%、投递率 15%）；以及一种动态接入等级限制（ACB）机制，依据实测的每秒碰撞率动态调整限制因子，在 100 台以上并发终端时将碰撞率维持在约 10%，而静态 ACB / ALOHA 基线为 23%-34%。

## Key technical points (EN)
- **Testbeds:** Skylo (INMARSAT 4-F1 GEO satellite at 4.41 deg/178.17 deg, ground station Hong Kong, core network in the US) and Tiantong (GEO satellite at 0.25 deg/101.44 deg, ground station Xi'an, core network Beijing); JMD47 NB-IoT mainboard as ground terminal; >6 months of field data.
- **TBS fragmentation threshold:** Skylo 32 bytes, Tiantong 128 bytes (spec ~1000 bits); once exceeded, uplink transport blocks are fragmented into serialized NPUSCH transmissions, producing near-linear delay growth with payload size and rising packet loss.
- **Traffic-interval sensitivity:** short (2 s) intervals push E2E delay past 17 s under access contention; long (10 s) intervals keep delay flat; ~5 s interval sits near the RRC inactivity-timer boundary and produces unstable connection-retention behavior.
- **Concurrency:** 10 simultaneous terminals produce super-linear delay growth (tail >30-35 s) versus 8-9 s at concurrency 1-2, driven by RACH collisions and serialized scheduling under the ultra-long GEO propagation delay (~500 ms one way).
- **Energy breakdown:** data transmission ~5% of total connection energy; MSG3 random-access retransmission ~56%; NAS signaling ~28%; overall per-connection energy 3-5x higher than terrestrial NB-IoT.
- **Latency/energy model:** T_E2E = N_RA x T_RTT + N_c x T_RTT (RA-attempt count x RTT plus signaling round-trip count x RTT), used to derive the three proposed optimizations.
- **Adaptive MSG3 retransmission:** power-estimation-based N_rep formula (from MSG1 received power) versus fixed ECL0/1/2 counts (4/32/128); 6x/23x energy reduction vs. r32/r128 under good channel; 44% vs r32 and 83% vs r128 under moderate channel; 44% vs r128 under the worst channel; at 89% RACH success (vs. 96-100% for fixed schemes).
- **MIDA PSM timer controller:** TCP-congestion-control-style multiplicative/additive T3324 adjustment; 85.2% DDR at 1683 J vs. static 120 s baseline's 99.3% DDR at 2993 J (43.8% energy saving); within 17% energy / 15% DDR of an oracle Pareto frontier.
- **Dynamic ACB:** proportional-control barring-factor update from measured vs. target collision rate; holds ~10% collision rate at 100+ terminals vs. 23% (static ACB) to 34% (ALOHA) baselines; barring factor rises from 0.10 to 0.68 as terminal count grows from 20 to 100.

## Key technical points (ZH)
- **实测平台：** Skylo（GEO 卫星 INMARSAT 4-F1，位置 4.41°/178.17°，地面站位于香港，核心网位于美国）与天通（GEO 卫星位置 0.25°/101.44°，地面站位于西安，核心网位于北京）；地面终端为 JMD47 NB-IoT 主板；实测持续 6 个月以上。
- **TBS 分片阈值：** Skylo 为 32 字节，天通为 128 字节（规范约为 1000 比特）；超过该阈值后上行传输块被分片为串行 NPUSCH 传输，导致时延随负载近似线性增长，丢包率随之上升。
- **流量间隔敏感性：** 间隔较短（2 秒）时接入竞争加剧使 E2E 时延超过 17 秒；间隔较长（10 秒）时时延保持平稳；约 5 秒的间隔恰好接近 RRC 不活动定时器边界，导致连接保持行为不稳定。
- **并发性能：** 10 台终端并发时时延呈超线性增长（尾部超过 30-35 秒），而 1-2 台并发时仅为 8-9 秒，根源在于 GEO 超长传播时延（单向约 500 毫秒）下的 RACH 碰撞与串行调度。
- **能耗分解：** 数据传输仅占连接总能耗约 5%；MSG3 随机接入重传约占 56%；NAS 信令开销约占 28%；整体单次连接能耗较地面 NB-IoT 高出 3-5 倍。
- **时延/能耗模型：** T_E2E = N_RA × T_RTT + N_c × T_RTT（随机接入尝试次数 × RTT 加上信令往返次数 × RTT），用于推导三项优化方案。
- **自适应 MSG3 重传：** 基于 MSG1 接收功率估算所需重传次数 N_rep 的公式，相较固定的 ECL0/1/2 重传次数（4/32/128）：良好信道下相比 r32/r128 节能 6 倍/23 倍；中等信道下相比 r32 节能 44%、相比 r128 节能 83%；最差信道下相比 r128 节能 44%；RACH 成功率为 89%（固定方案为 96%-100%）。
- **MIDA PSM 定时器控制器：** 借鉴 TCP 拥塞控制思想的乘性/加性 T3324 调整策略；在 1683 焦耳能耗下实现 85.2% 下行投递率，对比静态 120 秒基线在 2993 焦耳下实现 99.3% 投递率（节能 43.8%）；与理想帕累托前沿的差距为能耗 17%、投递率 15%。
- **动态 ACB：** 基于实测碰撞率与目标碰撞率之差的比例控制式限制因子调整；在 100 台以上终端时将碰撞率维持在约 10%，对比静态 ACB（23%）与 ALOHA（34%）基线；限制因子随终端数从 20 增至 100 而从 0.10 升至 0.68。

## Why it matters / what's new (EN)
This KB's sat-iot bin has previously covered simulation- and model-driven NTN-IoT studies (energy-harvesting AoI, dual-layer OTA federated learning), but this is the first entry built on sustained, multi-provider field measurement of a commercial NB-IoT NTN service rather than a testbed emulation or analytical model. The headline finding -- that GEO NTN inverts the terrestrial NB-IoT energy profile, with random-access retransmission and signaling overhead (84% combined) dwarfing actual data-transfer energy (5%) -- is a concrete empirical counterpoint to 3GPP's approach of reusing terrestrial cellular IoT procedures over satellite links with only parameter-level NTN extensions (extended timers, relaxed latency constraints). The cross-provider comparison (Skylo vs. Tiantong) also reveals that real deployed TBS thresholds diverge sharply from the written specification and from each other, which the authors read as evidence that current commercial NB-IoT NTN implementations remain at an early, non-interoperable maturity stage rather than a settled reference design.

## Why it matters / what's new (ZH)
本知识库 sat-iot 分箱此前收录的多为仿真或模型驱动的 NTN-IoT 研究（如能量收集场景下的信息年龄、双层空口联邦学习），而本条目是首个基于对商用 NB-IoT NTN 服务的持续、跨运营商实地测量（而非测试床仿真或解析模型）而成的条目。其核心发现——GEO NTN 场景下的能耗结构与地面 NB-IoT 相反，随机接入重传与信令开销合计占比高达 84%，远超实际数据传输能耗（5%）——为 3GPP 目前"仅在参数层面对地面蜂窝物联网流程做 NTN 扩展（延长定时器、放宽时延约束）后直接复用于卫星链路"的思路提供了具体的实证反例。跨运营商对比（Skylo 与天通）还揭示出，实际部署中的 TBS 阈值不仅与书面规范存在显著差距，运营商之间彼此也不一致，作者据此认为当前商用 NB-IoT NTN 实现仍处于早期、互操作性尚未成熟的阶段，而非已经收敛的统一参考设计。

## Images

None.
