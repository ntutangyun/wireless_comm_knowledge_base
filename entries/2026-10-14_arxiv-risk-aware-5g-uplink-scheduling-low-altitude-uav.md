---
id: 2026-10-14_arxiv-risk-aware-5g-uplink-scheduling-low-altitude-uav
date_published: 2026-10-05
date_found: 2026-10-14
type: academic-paper
technology: cellular
title_en: "Who Can Safely Wait? Risk-Aware 5G Scheduling for Low-Altitude UAV Operations"
title_zh: "谁可以安全等待？面向低空无人机运行的风险感知 5G 调度"
url: "https://arxiv.org/abs/2610.07101"
source_quality: full
topics: [UAV, uplink-scheduling, operational-risk, Max-Weight, Age-of-Information, SORA, LMF, NWDAF, OpenAirInterface]
topic_primary: 5g-nr
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)
Andre Melo, Yueqi Chen, Lourenco Pereira Jr. and Igor Kadota (Aeronautics Institute of Technology, Brazil; Northwestern University) argue that 5G schedulers rank UAV uplink traffic by network metrics (CQI, buffer status reports, throughput, fairness, traffic class) and are blind to the operational consequence of delaying a given aircraft's data. Their Risk-Aware (RA) framework turns information freshness plus operational context into an aircraft-specific risk and schedules uplink on that basis. The paper is formatted for ACM MobiCom 2027.

The risk abstraction follows the principles of the SORA risk-assessment method and captures three consequences of stale information: position uncertainty consuming separation margin, population exposure inside the position-uncertainty region, and loss of coherence across recently delivered video frames. Status updates (one packet) and video frames (multi-packet) are scheduled jointly as a long-term risk minimization problem. The authors derive a universal lower bound over feasible status-delivery and frame-completion rates, design a Lyapunov function covering video staleness, transmission progress and delayed frame completion, and obtain a Max-Weight rule that balances marginal risk reduction, packet-delivery probability and service cost per slot; they establish a worst-case optimality ratio of four. The policy runs entirely at the gNB with no UE or air-interface change; operational context (aircraft position from onboard reports or the 5G Location Management Function, population exposure estimates via NWDAF and external geographic data) is assumed to evolve over seconds to minutes while weights are recomputed per slot.

A motivating experiment on an OpenAirInterface gNB emulator with six static UEs along a corridor shows Best-CQI scheduling an aircraft over a crowded area 4x less often than round-robin, with 8x longer packet waits. Evaluation uses a slot-level MATLAB 5G uplink simulator (1 ms slots, 3.5 GHz, 20 MHz, urban-macro channel, 5 dB outage threshold, 0.8 packet success probability, 15 m/s UAVs, 10 Hz status updates, 30 fps video with a 15-frame GOP) in two Sao Paulo scenarios (delivery corridors and the Interlagos Formula 1 circuit), with K in {1..32} transmission opportunities and N in {5..120} UAVs, 48 operating points, at least 900 s each. The simulator's grant shares were checked against the OAI implementation (maximum total-variation distance 0.021). RA reduces 99th-percentile per-UAV risk by up to 96% versus proportional fair, 86% versus round robin and 83% versus an AoI-minimizing policy, schedules a median 2.4x more service per SORA-critical UAV than per regular UAV, and supports up to 1.5x (vs PF) and 3x (vs RR) larger fleets within the same risk envelope; the paper reports RA attaining the lowest tail risk at all 48 operating points. Results are simulation-based and the context inputs are assumed accurate and timely.

## Summary (ZH)
André Melo、Yueqi Chen、Lourenço Pereira Jr. 与 Igor Kadota（巴西航空技术学院；西北大学）指出，5G 调度器按网络指标（CQI、缓冲区状态报告、吞吐量、公平性、业务类别）对无人机上行业务排序，而对延迟某架飞行器数据所带来的运行后果并不敏感。其风险感知（RA）框架把信息新鲜度与运行环境转化为针对具体飞行器的风险，并据此调度上行。论文按 ACM MobiCom 2027 格式撰写。

风险抽象遵循 SORA 风险评估方法的原则，涵盖陈旧信息的三类后果：位置不确定性消耗间隔余量、位置不确定区域内的人口暴露，以及近期已交付视频帧之间连贯性的丧失。状态更新（单包）与视频帧（多包）被联合建模为长期风险最小化问题。作者推导了可行状态交付速率与帧完成速率的通用下界，设计了涵盖视频陈旧度、传输进度与延迟帧完成的 Lyapunov 函数，得到在每个时隙平衡边际风险降低、包交付概率与服务代价的 Max-Weight 规则，并给出最坏情况最优比为四。该策略完全在 gNB 侧运行，无需修改终端或空口；运行环境（来自机载上报或 5G 位置管理功能 LMF 的飞行器位置、经 NWDAF 与外部地理数据得到的人口暴露估计）假定以秒至分钟的尺度变化，而权重在每个时隙重新计算。

在 OpenAirInterface gNB 仿真器上以六个静态终端沿走廊布置的动机实验显示，Best-CQI 调度位于人群上空的飞行器的频次比轮询低 4 倍，其包等待时间长 8 倍。评估使用时隙级 MATLAB 5G 上行仿真器（1 ms 时隙，3.5 GHz，20 MHz，城市宏小区信道，5 dB 中断门限，包成功概率 0.8，无人机速度 15 m/s，状态更新 10 Hz，视频 30 fps、GOP 为 15 帧），在圣保罗两个场景（配送走廊与 Interlagos 一级方程式赛道）中进行，K 取 {1..32} 个传输机会，N 取 {5..120} 架无人机，共 48 个工作点，每个至少 900 s。仿真器的授权份额与 OAI 实现作了对照（最大总变差距离 0.021）。RA 使每架无人机的第 99 百分位风险相对比例公平最多降低 96%，相对轮询降低 86%，相对以信息年龄（AoI）为目标的策略降低 83%；对 SORA 关键无人机提供的服务中位数是普通无人机的 2.4 倍；在相同风险包络内最多支持比 PF 大 1.5 倍、比 RR 大 3 倍的机队；论文称 RA 在全部 48 个工作点都取得最低的尾部风险。结果基于仿真，且假定环境信息输入准确及时。

## Key technical points (EN)
- **Gap**: gNB schedulers use CQI/BSR/throughput/fairness and cannot see which aircraft is costly to defer.
- **Risk proxy**: SORA-inspired; position uncertainty vs separation margin, population exposure, video-frame coherence loss.
- **Scheduler**: Max-Weight rule from a Lyapunov function over status AoI and video progress; worst-case optimality ratio of four; gNB-only, no UE or air-interface change.
- **Context sources**: aircraft position (onboard or 5G LMF), population exposure (NWDAF plus external geographic data).
- **Setup**: MATLAB slot-level simulator, 3.5 GHz / 20 MHz urban macro, 48 operating points (N up to 120 UAVs), Sao Paulo delivery and Interlagos scenarios; OAI cross-check (TV distance 0.021).
- **Results**: up to 96% (vs PF), 86% (vs RR), 83% (vs AoI policy) lower p99 per-UAV risk; median 2.4x more service to critical UAVs; fleets up to 1.5x (PF) / 3x (RR) larger within the same risk envelope.
- **Limits**: simulation-only; accurate, timely context assumed.

## Key technical points (ZH)
- **缺口**：gNB 调度器使用 CQI/BSR/吞吐量/公平性，无法看出哪架飞行器延迟代价高。
- **风险代理**：受 SORA 启发；位置不确定性与间隔余量、人口暴露、视频帧连贯性丧失。
- **调度器**：基于状态 AoI 与视频进度的 Lyapunov 函数得到的 Max-Weight 规则；最坏情况最优比为四；仅 gNB 侧，无需修改终端或空口。
- **环境信息来源**：飞行器位置（机载或 5G LMF）、人口暴露（NWDAF 加外部地理数据）。
- **设置**：MATLAB 时隙级仿真器，3.5 GHz / 20 MHz 城市宏小区，48 个工作点（最多 120 架无人机），圣保罗配送与 Interlagos 场景；OAI 对照（总变差距离 0.021）。
- **结果**：每架无人机 p99 风险相对 PF 最多降低 96%、相对 RR 86%、相对 AoI 策略 83%；对关键无人机的服务中位数高 2.4 倍；相同风险包络内机队最多大 1.5 倍（PF）/ 3 倍（RR）。
- **局限**：仅仿真；假定环境信息准确及时。

## Why it matters / what's new (EN)
Records a scheduling approach that feeds non-network context (aircraft position and ground exposure from 5G core functions) into gNB uplink scheduling for cellular-connected UAVs. The numbers come from the authors' MATLAB simulator, whose grant-share behaviour was validated against an OAI emulator, not from live network trials.

## Why it matters / what's new (ZH)
记录了一种把非网络上下文（来自 5G 核心网功能的飞行器位置与地面暴露）引入蜂窝连接无人机 gNB 上行调度的方法。数据来自作者经 OAI 仿真器验证（授权份额）的 MATLAB 仿真器，而非实网试验。

## Images
None.
