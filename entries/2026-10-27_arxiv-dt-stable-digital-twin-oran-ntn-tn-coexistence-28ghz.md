---
id: 2026-10-27_arxiv-dt-stable-digital-twin-oran-ntn-tn-coexistence-28ghz
date_published: 2026-10-23
date_found: 2026-10-27
technology: satellite
type: academic-paper
title_en: "Multi-Timescale Context-Aware Radio Resource Optimization for Harmonious NTN-TN Coexistence: A Digital Twin and Open RAN Enabled Framework"
title_zh: "面向 NTN-TN 和谐共存的多时间尺度上下文感知无线资源优化：数字孪生与开放 RAN 赋能框架"
url: "https://arxiv.org/abs/2610.32827"
source_quality: full
topics: [NTN-TN-coexistence, digital-twin, O-RAN, 28-GHz, aggregate-interference, beam-activation, user-association, channel-knowledge-map, LEO]
topic_primary: leo-constellations
topics_secondary: [ntn, ngso-regulation]
novelty_score: 3
---

## Summary (EN)

Kaya, Hassan and Kaddoum (ETS Montreal and Universite Laval; arXiv 2610.32827, cs.NI, v1 23 October 2026, submitted to IEEE) address coexistence between terrestrial networks and non-terrestrial networks in the 28 GHz band, where terrestrial downlinks can create harmful aggregate interference at LEO satellite receivers. They present DT-STABLE, an O-RAN-enabled, digital-twin-assisted framework. The twin uses site-specific information (ray tracing, a multi-antenna channel knowledge map at 5 x 5 m resolution, an OpenNTN-based satellite channel model) to estimate interference at satellites, so that management is proactive and needs fewer real-time measurements.

The paper formulates joint beam activation and user association under RF-chain limits, beam-load balancing and aggregate-satellite-interference constraints (a load-aware logarithmic utility with a penalty on interference above threshold), and proves it NP-hard by reduction from 0-1 knapsack. Algorithm 1 is a price-based dual heuristic (interference and load prices); Algorithm 2 couples it to O-RAN timescales: the non-RT RIC builds coverage and interference maps over O1/A1, and the near-RT RIC uses E2 KPM feedback to flag users whose relative prediction error exceeds 0.3 and probes only the top K_p candidate beam pairs.

Simulation: 19 terrestrial base stations (OpenCellID) and 50 to 300 users in a 4 x 4 km area near Quebec City; 20 Starlink satellites from CelesTrak TLEs (elevation 25.01 to 32.46 degrees); 28 GHz, 50 MHz bandwidth, 33 dBm per beam, satellite G/T 13 dB/K, INR threshold -6 dB; 4x4 arrays with 16 DFT beams and 4 RF chains; 150 Monte Carlo runs. At 100 users DT-STABLE reaches 89.63% INR satisfaction with 210.96 bps/Hz mean rate, against 55.32% for a 5G baseline that ignores satellite interference (mean INR -6.53 dB versus -13.07 dB), 99.99% and 133.55 for an interference-optimal operating point, and 66.99% and 257.24 for a rate-optimal one. It scores highest on a normalised ideal-point measure (0.813 versus 0.708 for the 5G baseline). Reported overhead and runtime figures are a 99.71% reduction in beam-measurement overhead versus exhaustive sweeping and up to 33.1 times lower runtime than a Gurobi exact benchmark; probing 5 beams gives a normalised rate of 0.867 versus 1.0 at 16. Stated assumptions and limits: a heuristic without global-optimality guarantee; inter-cell and intra-cell inter-beam interference neglected; Gaussian (dB-domain) DT interference-prediction error; UE positions assumed available (a robustness test shows 5-10% positioning error cuts sum rate by up to 56.5%). Evaluation is a single 4 x 4 km simulated site at 28 GHz with an urban NTN channel.

## Summary (ZH)

Kaya、Hassan 和 Kaddoum（蒙特利尔高等技术学院与拉瓦尔大学；arXiv 2610.32827，cs.NI，v1 于 2026 年 10 月 23 日发布，已投稿 IEEE）研究 28 GHz 频段地面网络与非地面网络的共存问题：地面下行传输会在 LEO 卫星接收机处产生有害的聚合干扰。作者提出 DT-STABLE，一个基于 O-RAN、由数字孪生辅助的框架。孪生利用站点相关信息（射线追踪、5 x 5 m 分辨率的多天线信道知识图、基于 OpenNTN 的卫星信道模型）估计卫星处干扰，从而实现主动管理并减少实时测量。

论文将波束激活与用户关联联合建模，约束包括射频链数量、波束负载均衡与卫星聚合干扰（带负载感知的对数效用，对超过门限的干扰加罚项），并通过 0-1 背包问题归约证明其为 NP 难。算法 1 为基于价格的对偶启发式（干扰价格与负载价格）；算法 2 将其与 O-RAN 时间尺度结合：非实时 RIC 通过 O1/A1 构建覆盖与干扰图，近实时 RIC 利用 E2 KPM 反馈标记相对预测误差超过 0.3 的用户，仅探测前 K_p 个候选波束对。

仿真：魁北克市附近 4 x 4 km 区域内 19 个地面基站（OpenCellID）和 50 至 300 个用户；20 颗 Starlink 卫星（CelesTrak TLE，仰角 25.01 至 32.46 度）；28 GHz、50 MHz 带宽、每波束 33 dBm、卫星 G/T 13 dB/K、INR 门限 -6 dB；4x4 阵列、16 个 DFT 波束、4 条射频链；150 次蒙特卡洛。100 个用户时，DT-STABLE 的 INR 满足率为 89.63%、平均速率 210.96 bps/Hz；忽略卫星干扰的 5G 基线为 55.32%（平均 INR -6.53 dB 对 -13.07 dB）；干扰最优点为 99.99% 和 133.55；速率最优点为 66.99% 和 257.24。其归一化理想点得分最高（0.813，5G 基线 0.708）。报告的开销与运行时间：相比穷举扫描波束测量开销降低 99.71%，运行时间最多比 Gurobi 精确求解低 33.1 倍；探测 5 个波束的归一化速率为 0.867（16 个为 1.0）。论文给出的假设与局限：启发式算法无全局最优保证；忽略小区间及小区内波束间干扰；数字孪生干扰预测误差按（dB 域）高斯建模；假设可获得 UE 位置（稳健性测试显示 5-10% 定位误差使总速率最多下降 56.5%）。评估为 28 GHz、城区 NTN 信道下单一 4 x 4 km 仿真站点。

## Key technical points (EN)

- **Problem**: protect LEO satellite receivers from aggregate 28 GHz terrestrial downlink interference.
- **Formulation**: joint beam activation and user association; NP-hard (0-1 knapsack reduction).
- **O-RAN mapping**: non-RT RIC builds maps (O1/A1); near-RT RIC detects mismatch via E2 KPM and probes top K_p pairs.
- **Results (100 users)**: 89.63% INR satisfaction, 210.96 bps/Hz; 5G baseline 55.32%.
- **Overhead**: 99.71% less beam-measurement overhead; up to 33.1x faster than Gurobi.
- **Scope limits**: single 4 x 4 km site, 28 GHz, urban NTN channel, known UE positions.

## Key technical points (ZH)

- **问题**：保护 LEO 卫星接收机免受 28 GHz 地面下行聚合干扰。
- **建模**：波束激活与用户关联联合优化；NP 难（0-1 背包归约）。
- **O-RAN 映射**：非实时 RIC 构建图（O1/A1）；近实时 RIC 经 E2 KPM 检测失配并探测前 K_p 个波束对。
- **结果（100 用户）**：INR 满足率 89.63%、210.96 bps/Hz；5G 基线 55.32%。
- **开销**：波束测量开销减少 99.71%；比 Gurobi 最多快 33.1 倍。
- **范围局限**：单一 4 x 4 km 站点、28 GHz、城区 NTN 信道、用户位置已知。

## Why it matters / what's new (EN)

The paper gives an O-RAN-aligned, digital-twin-based way to trade terrestrial rate against satellite protection in the 28 GHz band, with quantified operating points. All numbers are from the authors' simulation at one site.

## Why it matters / what's new (ZH)

论文给出了与 O-RAN 对齐、基于数字孪生的方法，在 28 GHz 频段权衡地面速率与卫星保护，并提供量化工作点。所有数字来自作者在单一站点的仿真。

## Images

None.
