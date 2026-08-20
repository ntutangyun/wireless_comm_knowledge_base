---
id: 2026-08-20_arxiv-oran-marl-v2x-sidelink-selection
date_published: 2026-08-17
date_found: 2026-08-20
type: academic-paper
technology: cellular
title_en: "An O-RAN-Assisted MARL Approach for Dynamic Sidelink and Infrastructure Selection in V2X Communications"
title_zh: "O-RAN 辅助的多智能体强化学习：V2X 通信中侧链路与基础设施的动态选择"
url: "https://arxiv.org/abs/2608.17210"
source_quality: full
topics: [V2X, sidelink, PC5, Uu, O-RAN, xApp, Near-RT-RIC, MARL, QMix, CQL, Simu5G, CTDE, mode-selection, VRU]
topic_primary: open-ran
topics_secondary: [5g-nr, cellular-ai]
novelty_score: 2
---

## Summary (EN)
Maria Katarine Santana Barbosa and Kelvin Lopes Dias (accepted, IEEE Transactions on Vehicular Technology; arXiv 17 Aug 2026) put the classic NR-V2X **mode-selection problem** — should a vehicle pair transmit over the PC5 sidelink (V2V) or through the network via Uu (V2N)? — inside a working O-RAN control loop and solve it with offline-trained multi-agent RL. The architecture follows O-RAN deployment scenario 1.2: the Non-RT RIC hosts the AI/ML model manager (>1 s timescale) while three modular xApps run on the Near-RT RIC (10–1000 ms) — a KPM Monitor (E2 metric collection), a QoS Predictor (inference), and a Sidelink Manager (control). The MARL formulation is **Conservative QMix (CQMix)**: QMix value factorization plus Conservative Q-Learning regularization so the policy can be pre-trained offline on simulation data without overestimation, then fine-tuned online every 100 inferences per agent (95/5 ε-greedy). A clustering trick assigns multiple vehicle pairs to each agent round-robin (25/50/75 agents evaluated), sidestepping the one-agent-per-pair scalability wall. State is per-link (available sidelink resources, SINR, received power, channel quality, loss, distance, DL availability); the action is binary V2V-vs-V2N; the reward is delay-shaped (+10 for ≤30 ms, steepening penalties beyond).

Evaluation runs OMNeT++/Simu5G coupled to the O-RAN Software Community Near-RT RIC (Release I) on a 1.5 km German-highway segment: 200 vehicles (vehicle-only) plus a 10-pedestrian VRU coexistence variant, 6 GHz, 50 RBs, a 720p/30fps see-through video app (~3 Mbps CBR per pair). Against single-agent CQL, an SINR-threshold heuristic (≥20 dB), and a best-CQI policy: the 50-agent MARL cuts packet loss 21% and latency 19% in vehicle-only traffic (~80% of pairs at SINR ≥25 dB vs 30% for single-agent; QoS efficiency 0.726 vs 0.316); in VRU coexistence the 75-agent configuration wins with 18% loss and 30% latency reductions. Cost is quantified honestly — fine-tuning memory grows to ~1.6 GB and 55% peak CPU at 75 agents, a linear compute-for-QoS trade.

## Summary (ZH)
Maria Katarine Santana Barbosa 与 Kelvin Lopes Dias（已被 IEEE Transactions on Vehicular Technology 录用；arXiv 2026 年 8 月 17 日）将经典的 NR-V2X **模式选择问题**——车辆对该走 PC5 侧链路（V2V）还是经 Uu 走网络（V2N）？——放入真实 O-RAN 控制环，用离线训练的多智能体强化学习求解。架构遵循 O-RAN 部署场景 1.2：Non-RT RIC 承载 AI/ML 模型管理（>1 s 时间尺度），Near-RT RIC（10–1000 ms）上运行三个模块化 xApp——KPM 监控（E2 指标采集）、QoS 预测（推理）、侧链路管理器（控制）。MARL 采用 **Conservative QMix（CQMix）**：QMix 值分解叠加保守 Q 学习正则，使策略可在仿真数据上离线预训练而不过估，随后每智能体每 100 次推理在线微调（95/5 ε-贪心）。通过聚类将多个车辆对轮询分配给每个智能体（评估 25/50/75 个智能体），绕开"一对一智能体"的可扩展性瓶颈。状态为逐链路观测（可用侧链路资源、SINR、接收功率、信道质量、丢包、距离、下行可用性）；动作为二元 V2V/V2N；奖励按时延塑形（≤30 ms 得 +10，超时惩罚递增）。

评估在 OMNeT++/Simu5G 与 O-RAN 软件社区 Near-RT RIC（Release I）耦合环境中进行，场景为 1.5 km 德国高速路段：200 辆车（纯车辆）外加 10 名行人的 VRU 共存变体，6 GHz、50 个 RB、每对约 3 Mbps CBR 的 720p/30fps 透视视频业务。对比单智能体 CQL、SINR 阈值启发式（≥20 dB）与最优 CQI 策略：50 智能体 MARL 在纯车辆场景丢包降 21%、时延降 19%（约 80% 车辆对 SINR ≥25 dB，单智能体仅 30%；QoS 效率 0.726 对 0.316）；VRU 共存场景中 75 智能体配置最优，丢包降 18%、时延降 30%。成本亦如实量化——75 智能体微调内存约 1.6 GB、CPU 峰值 55%，算力换 QoS 呈线性。

## Key technical points (EN)
- O-RAN scenario 1.2 split: Non-RT RIC model management; Near-RT RIC xApps for KPM monitoring, QoS prediction, sidelink mode control over E2.
- CQMix = QMix factorization + CQL conservatism → offline pre-training viable; online fine-tune every 100 inferences/agent.
- Round-robin clustering of vehicle pairs onto 25/50/75 agents (CTDE) instead of one agent per pair.
- Delay-shaped reward: +~10 for ≤30 ms latency; steeper penalties beyond.
- Testbed: OMNeT++/Simu5G + OSC Near-RT RIC Release I; 1.5 km highway, 200 vehicles (+10 VRU variant), 6 GHz, 50 RBs, ~3 Mbps see-through video per pair, 2.5 ms sampling.
- Results: vehicle-only 50-agent — loss −21%, latency −19%, 80% of pairs ≥25 dB SINR, QoS score 0.726 vs 0.316 (single-agent); VRU coexistence 75-agent — loss −18%, latency −30%, score 0.715.
- Overheads reported: 692 MB (prediction) / 1158–1578 MB (fine-tune) memory, 55.1% peak CPU at 75 agents — linear scaling trade.

## Key technical points (ZH)
- O-RAN 场景 1.2 分工：Non-RT RIC 管模型；Near-RT RIC 上 KPM 监控、QoS 预测、侧链路控制三 xApp 经 E2 闭环。
- CQMix = QMix 值分解 + CQL 保守正则 → 可离线预训练；每智能体每 100 次推理在线微调。
- 车辆对轮询聚类映射到 25/50/75 个智能体（CTDE），替代一对一智能体。
- 时延塑形奖励：≤30 ms 得约 +10；超时惩罚递增。
- 测试环境：OMNeT++/Simu5G + OSC Near-RT RIC Release I；1.5 km 高速、200 车（+10 行人变体）、6 GHz、50 RB、每对约 3 Mbps 透视视频、2.5 ms 采样。
- 结果：纯车辆 50 智能体——丢包 −21%、时延 −19%、80% 车辆对 SINR ≥25 dB、QoS 分 0.726 对 0.316；VRU 共存 75 智能体——丢包 −18%、时延 −30%、分 0.715。
- 开销如实报告：内存 692 MB（预测）/1158–1578 MB（微调），75 智能体 CPU 峰值 55.1%——线性扩展代价。

## Why it matters / what's new (EN)
The KB's V2X thread has covered sidelink MAC mechanics (RCS reservation-free contention 07-08, NR-V2X GINE relay selection 07-26, Mode 0 RCU 05-26) and its O-RAN thread has covered control-plane machinery (xApp conflict arbitration 07-28, VeraRAN pre-actuation certification 08-04, MAC-Gyver programmable scheduling 08-03) — but the two had not met: this is the first KB entry where the V2V/V2N **mode-selection decision itself is hosted as an O-RAN xApp pipeline** on the actual OSC Near-RT RIC software, rather than as an abstract RAN algorithm. Two design choices carry beyond V2X: conservative offline MARL (CQMix) as the answer to "you can't explore in a live RIC," matching the safety thread's concerns; and agent-clustering as the scalability answer for per-flow control at RIC timescales. The honest memory/CPU accounting (1.6 GB / 55% CPU at 75 agents) gives the O-RAN bin a rare concrete datapoint on what per-flow learned control actually costs on a RIC.

## Why it matters / what's new (ZH)
KB 的 V2X 线索已覆盖侧链路 MAC 机制（RCS 免预约竞争 07-08、NR-V2X GINE 中继选择 07-26、Mode 0 RCU 05-26），O-RAN 线索已覆盖控制面机制（xApp 冲突仲裁 07-28、VeraRAN 执行前认证 08-04、MAC-Gyver 可编程调度 08-03）——但两者此前未曾交汇：本条目首次将 V2V/V2N **模式选择决策本身作为 O-RAN xApp 流水线**托管在真实 OSC Near-RT RIC 软件上，而非停留为抽象 RAN 算法。两个设计选择的意义超出 V2X：保守离线 MARL（CQMix）回应了"在线 RIC 不能随意探索"的安全关切，与 AI-RAN 安全线索呼应；智能体聚类则回答了 RIC 时间尺度上逐流控制的可扩展性问题。如实的内存/CPU 核算（75 智能体 1.6 GB / 55% CPU）为 O-RAN 主题库提供了逐流学习控制在 RIC 上真实成本的罕见具体数据点。

## Images
![O-RAN-assisted MARL architecture: Non-RT/Near-RT RIC, xApps and E2 loop | O-RAN 辅助 MARL 架构：Non-RT/Near-RT RIC、xApp 与 E2 闭环](https://arxiv.org/html/2608.17210v1/proposal.png)
![Highway mobility scenario used in the Simu5G evaluation | Simu5G 评估所用高速公路移动场景](https://arxiv.org/html/2608.17210v1/sumo-ieee-tvt.png)
