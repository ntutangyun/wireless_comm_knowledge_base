---
id: 2026-10-13_arxiv-5g-one-way-delay-model-aggregation-channel-access
date_published: 2026-10-09
date_found: 2026-10-13
type: academic-paper
technology: cellular
title_en: "One-Way Delay Model for 5G Low Latency, High Data Rate Communications"
title_zh: "面向 5G 低时延高速率通信的单向时延模型"
url: "https://arxiv.org/abs/2610.13761"
source_quality: full
topics: [one-way-delay, queueing-delay, RLC, transport-block, HARQ, ns-3, 5G-LENA, edge-network]
topic_primary: 5g-nr
topics_secondary: [mec]
novelty_score: 3
---

## Summary (EN)
Hamid Hassani, Sonia M. Heemstra de Groot, Ignas G. Niemegeers, Kishor C. Joshi and George Exarchakos (Eindhoven University of Technology) study how to estimate one-way delay (OWD) for low-latency, high-data-rate traffic in 5G edge networks, where the wireless link is the bottleneck. They note that measuring OWD is hard because of sender/receiver clock issues, and that delay-based congestion control can underutilize cellular links.

The model approximates OWD as queueing delay (QD) plus a fixed or bounded system delay (Tsys). QD is split into aggregation delay (AD), the wait in the RLC queue until the last packet of a transport block (TB) arrives (which the UE can measure from timestamps the edge server embeds in packet payloads), and channel access time (Taccess), the time from the last packet's RLC arrival to the TB's departure, estimated from the last packet's OWD minus Tsys. Two regimes are defined: Taccess below one scheduling interval (no persistent backlog) and Taccess at or above one interval (backlog building). HARQ retransmissions are handled by using the NDI and RV fields to measure the extra delay a TB spends in the MAC retransmission buffer. The paper builds on NR RLC/MAC concepts and cites the ETSI versions of 3GPP TR 38.912 and TS 38.212 / 38.321.

Evaluation is simulation only, in ns-3 with the 5G-LENA module (NR non-standalone, InH_OfficeOpen_Los, 40 MHz, n78, numerology 0, round-robin TDMA scheduler, 10 dBm, fixed MCS 28, UDP, 60 s runs), for one UE and for two UEs with one UDP and one TCP Cubic flow. Near saturation, QD exceeds 90% of OWD in both scenarios; AD/QD peaks at about 80% (single UE) and 70% (multi-UE); Taccess/QD falls to about 20% / 30% before queueing begins and exceeds 95% under congestion; a persistent OWD-QD gap of about 2.5 ms is attributed to Tsys. The AD + Taccess curve matches measured QD across low and high loads, though no numeric error metric is given. Assumptions and scope: simulation only (testbed validation planned), ideal backhaul with edge server and UPF collocated with the base station, a single DRB, one MTU per packet, RLC UM, downlink only, fixed MCS and a single scheduler.

## Summary (ZH)
Hamid Hassani、Sonia M. Heemstra de Groot、Ignas G. Niemegeers、Kishor C. Joshi 与 George Exarchakos（埃因霍温理工大学）研究在 5G 边缘网络（无线链路为瓶颈）中如何估计低时延、高数据速率业务的单向时延（OWD）。作者指出，由于收发两端时钟问题，OWD 的测量较为困难，而基于时延的拥塞控制可能导致蜂窝链路利用不足。

该模型将 OWD 近似为排队时延（QD）加上固定或有界的系统时延（Tsys）。QD 又分为聚合时延（AD）与信道接入时间（Taccess）：AD 是数据在 RLC 队列中等待、直至某传输块（TB）的最后一个数据包到达的时间（终端可利用边缘服务器嵌入包载荷中的时间戳测得）；Taccess 是最后一个数据包到达 RLC 至该 TB 发出的时间，由最后一个包的 OWD 减去 Tsys 估计。论文定义了两种工况：Taccess 小于一个调度间隔（无持续积压）以及 Taccess 不小于一个调度间隔（积压形成）。对于 HARQ 重传，则利用 NDI 与 RV 字段测量 TB 在 MAC 重传缓冲区中的额外时延。论文基于 NR 的 RLC/MAC 概念，并引用了 3GPP TR 38.912 及 TS 38.212 / 38.321 的 ETSI 版本。

评估仅基于仿真：采用 ns-3 与 5G-LENA 模块（NR 非独立组网，InH_OfficeOpen_Los，40 MHz，n78，numerology 0，轮询 TDMA 调度器，10 dBm，固定 MCS 28，UDP，每次运行 60 秒），覆盖单终端以及两终端（一路 UDP、一路 TCP Cubic）场景。接近饱和时，QD 在两种场景下均占 OWD 的 90% 以上；AD/QD 峰值约为 80%（单终端）与 70%（多终端）；排队开始前 Taccess/QD 降至约 20% / 30%，拥塞时超过 95%；OWD 与 QD 之间约 2.5 ms 的持续差距归因于 Tsys。AD + Taccess 曲线在低负载与高负载下均与实测 QD 吻合，但论文未给出数值误差指标。模型假设与评估范围：仅有仿真（计划进行测试床验证）、回传理想且边缘服务器与 UPF 与基站同址、单个 DRB、每个包不超过一个 MTU、RLC UM 模式、仅下行、固定 MCS 与单一调度器。

## Key technical points (EN)
- OWD is modelled as queueing delay plus a fixed/bounded system delay Tsys; QD = aggregation delay (RLC wait for the TB-completing packet) + channel access time.
- UE-side AD measurement uses edge-server timestamps embedded in packet payloads; HARQ delay is measured via NDI/RV.
- ns-3 5G-LENA, 40 MHz n78, numerology 0, MCS 28, round-robin scheduler; single-UE and UE + TCP-Cubic cross-traffic cases.
- QD exceeds 90% of OWD near saturation; AD/QD peaks ~80% (single UE) / ~70% (multi-UE); Taccess/QD exceeds 95% under congestion.
- About 2.5 ms persistent OWD-QD gap attributed to Tsys; no numeric error metric for model fit.
- Simulation only; downlink, ideal backhaul, single DRB, RLC UM, fixed MCS assumed.

## Key technical points (ZH)
- OWD 建模为排队时延加固定/有界系统时延 Tsys；QD = 聚合时延（RLC 中等待完成 TB 的最后一个包）+ 信道接入时间。
- 终端侧 AD 测量利用边缘服务器嵌入包载荷的时间戳；HARQ 时延通过 NDI/RV 测得。
- ns-3 5G-LENA，40 MHz n78，numerology 0，MCS 28，轮询调度器；单终端及叠加 TCP Cubic 交叉流的场景。
- 接近饱和时 QD 超过 OWD 的 90%；AD/QD 峰值约 80%（单终端）/ 约 70%（多终端）；拥塞时 Taccess/QD 超过 95%。
- OWD 与 QD 之间约 2.5 ms 的持续差距归因于 Tsys；未给出模型拟合的数值误差指标。
- 仅为仿真；假设下行、理想回传、单个 DRB、RLC UM、固定 MCS。

## Why it matters / what's new (EN)
The paper decomposes 5G one-way delay into an RLC aggregation component and a channel-access component that a UE can estimate from payload timestamps, and shows in simulation how each dominates at different load levels; testbed validation is listed as future work.

## Why it matters / what's new (ZH)
论文将 5G 单向时延分解为终端可借助载荷时间戳估计的 RLC 聚合分量与信道接入分量，并通过仿真展示二者在不同负载下各自占主导的情形；测试床验证列为后续工作。

## Images
![Timeline of the delay terms for a transport block | 传输块各时延项的时间线](https://arxiv.org/html/2610.13761v1/timeline.png)
![Single UE at 160 Mbps: queueing delay vs. aggregation delay plus channel access time | 单终端 160 Mbps：排队时延与聚合时延加信道接入时间对比](https://arxiv.org/html/2610.13761v1/fig7single160.png)
