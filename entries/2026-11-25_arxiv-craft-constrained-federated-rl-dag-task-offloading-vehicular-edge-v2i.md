---
id: 2026-11-25_arxiv-craft-constrained-federated-rl-dag-task-offloading-vehicular-edge-v2i
date_published: 2026-10-20
date_found: 2026-11-25
technology: edge-ai
type: academic-paper
title_en: "CRAFT: Constrained Federated Reinforcement Learning for Secure Offloading in Vehicular Edge Computing (DAG tasks, V2I OFDMA links)"
title_zh: "CRAFT：车载边缘计算中面向安全卸载的约束联邦强化学习（DAG 任务，V2I OFDMA 链路）"
url: "https://arxiv.org/abs/2610.27651"
source_quality: full
topics: [task-offloading, vehicular-edge-computing, federated-reinforcement-learning, constrained-MDP, V2I, homomorphic-encryption]
topic_primary: edge-orchestration
topics_secondary: [compute-offloading, edge-federated-learning]
novelty_score: 3
---

## Summary (EN)

The paper (Faculty of Information Technology, Monash University) addresses vehicular edge computing, where tasks are offloaded to roadside edge servers. Its premise is that real vehicular workloads consist of dependent subtasks with stringent reliability needs, and that the cross-region collaborative learning used to adapt offloading policies must be robust to heterogeneous data and secure over open wireless channels. CRAFT casts directed-acyclic-graph (DAG) offloading and resource allocation as a constrained Markov decision process, with centralised-critic policy learning, Lagrangian relaxation for the long-term task-completion constraint, and two-tier federated aggregation (per edge server, then global) with proximal regularisation against non-IID drift. Federated parameter exchange is protected by CKKS homomorphic encryption and ML-DSA lattice-based signatures.

Link: simulated V2I links. Vehicles reach roadside edge servers over OFDMA with total bandwidth split equally among vehicles on the same server; channel gain is path loss times Rayleigh fading with Shannon-style rates; edge servers are connected by a wired backhaul with a fixed rate. Communication parameters (20 MHz bandwidth, 0.3 W vehicle and 2 W edge-server transmit power, 500 m coverage radius, 1 Gbps backhaul) follow 3GPP TR 36.885 and existing VEC literature.

Testbed: each vehicle and edge server runs in its own virtual machine (vehicles 4-12 cores and 4-32 GB RAM, servers 16 cores and 64 GB), with SUMO vehicle trajectories on a roughly 2 km x 2 km Melbourne CBD road network from OpenStreetMap (default 5 servers, 30 vehicles, 30-50 km/h). Three DAG workloads (autonomous-driving perception, AR navigation, in-vehicle voice assistant) run real computation kernels.

## Summary (ZH)

论文（莫纳什大学信息技术学院）研究车载边缘计算，即把任务卸载到路侧边缘服务器。其前提是：真实车载负载由具有严格可靠性要求的相互依赖的子任务构成，而用于调整卸载策略的跨区域协同学习必须对异质数据保持稳健，并在开放无线信道上保持安全。CRAFT 将有向无环图（DAG）形式的卸载与资源分配建模为约束马尔可夫决策过程，采用集中式评论家的策略学习、用拉格朗日松弛处理长期任务完成率约束，并采用带近端正则化的两级联邦聚合（先按边缘服务器、再全局）以抑制非独立同分布漂移。联邦参数交换由 CKKS 同态加密和基于格的 ML-DSA 签名保护。

所经链路：仿真的 V2I 链路。车辆通过 OFDMA 接入路侧边缘服务器，总带宽在同一服务器下的车辆间均分；信道增益为路径损耗乘以瑞利衰落，速率采用香农型公式；边缘服务器间通过固定速率的有线回传相连。通信参数（20 MHz 带宽、车辆 0.3 W 与服务器 2 W 发射功率、500 m 覆盖半径、1 Gbps 回传）依据 3GPP TR 36.885 及已有车载边缘计算文献。

测试台：每辆车和每台边缘服务器各运行于独立虚拟机（车辆 4-12 核、4-32 GB 内存，服务器 16 核、64 GB），SUMO 车辆轨迹取自 OpenStreetMap 的墨尔本 CBD 路网（约 2 km x 2 km；默认 5 台服务器、30 辆车、速度 30-50 km/h）。三种 DAG 负载（自动驾驶感知、AR 导航、车内语音助手）运行真实计算内核。

## Key technical points (EN)

- Baselines: DPTORA, Fed-MADDPG and LF-MAPPO; each experiment repeated 10 times and averaged.
- CRAFT stabilises around episode 50 with normalised latency 0.21, energy 0.52 and weighted cost 0.37, and a task completion rate of about 0.96 against a 0.95 threshold. Weighted cost falls by about 16% versus Fed-MADDPG, 20% versus DPTORA and 42% versus LF-MAPPO.
- Ablations: without the Lagrangian mechanism completion drops to 0.91; without federated aggregation it falls to 0.83 mid-training; without proximal regularisation final completion is 0.93.
- Scalability: cost falls from 0.41 to 0.34 as vehicles grow from 10 to 50, and from 0.46 to 0.34 as edge servers grow from 3 to 7.
- Security overhead per round: training takes 3264 ms with or without security; CKKS adds 72 ms, ciphertext expansion raises communication time from 6 ms to 117 ms, and ML-DSA adds about 25 ms, for a total of 208 ms or 6.4% of training time.

## Key technical points (ZH)

- 基线：DPTORA、Fed-MADDPG 和 LF-MAPPO；每个实验重复 10 次取平均。
- CRAFT 在约第 50 个回合收敛，归一化时延 0.21、能耗 0.52、加权代价 0.37，任务完成率约 0.96（阈值 0.95）。加权代价相对 Fed-MADDPG 降低约 16%，相对 DPTORA 降低约 20%，相对 LF-MAPPO 降低约 42%。
- 消融：去掉拉格朗日机制，完成率降至 0.91；去掉联邦聚合，训练中期降至 0.83；去掉近端正则化，最终完成率为 0.93。
- 可扩展性：车辆数由 10 增至 50，代价由 0.41 降至 0.34；边缘服务器数由 3 增至 7，代价由 0.46 降至 0.34。
- 每轮安全开销：有无安全机制训练均耗时 3264 ms；CKKS 增加 72 ms，密文膨胀使通信时间从 6 ms 增至 117 ms，ML-DSA 增加约 25 ms，合计 208 ms，占训练时间的 6.4%。

## Why it matters / what's new (EN)

The wireless link is explicit in the offloading decision (OFDMA bandwidth sharing, Rayleigh fading, coverage-dwell time) and in the cost of the federated exchange itself: ciphertext expansion raises per-round communication time from 6 ms to 117 ms. The channel is simulated inside a VM testbed, so the cost and completion figures are simulation outcomes rather than measurements on deployed vehicular radios.

## Why it matters / what's new (ZH)

无线链路明确出现在卸载决策中（OFDMA 带宽共享、瑞利衰落、覆盖驻留时间），也体现在联邦交换本身的代价上：密文膨胀使每轮通信时间从 6 ms 增至 117 ms。信道在虚拟机测试台内仿真，因此代价与完成率数字是仿真结果，而非已部署车载无线电上的测量。

## Images

![CRAFT system overview | CRAFT 系统总览](https://arxiv.org/html/2610.27651v1/CRAFT_System.png)
