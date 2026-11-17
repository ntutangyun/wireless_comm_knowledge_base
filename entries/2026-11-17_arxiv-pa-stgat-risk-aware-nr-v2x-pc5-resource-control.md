---
id: 2026-11-17_arxiv-pa-stgat-risk-aware-nr-v2x-pc5-resource-control
date_published: 2026-11-12
date_found: 2026-11-17
type: academic-paper
technology: cellular
title_en: "Physical-Risk-Aware Decentralized Agents for Constrained Vehicle Communications"
title_zh: "面向受约束车联网通信的物理风险感知去中心化智能体"
url: "https://arxiv.org/abs/2611.17456"
source_quality: full
topics: [NR-V2X, PC5, sidelink, resource-selection, graph-attention, constrained-RL, time-to-collision, Mode-2]
topic_primary: 5g-nr
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

Peng, Zheng, Liu and Zhang (CUHK and University of Macau) study decentralized resource control for NR-V2X, where each vehicle autonomously selects its PC5 sidelink resource and transmit power from local observations while the Uu link provides vehicle-to-network connectivity. They propose PA-STGAT, a physical-risk-aware spatio-temporal graph-attention actor trained as a constrained reinforcement-learning problem. Each vehicle builds a short history of one-hop ego graphs covering communication, interference and time-to-collision (TTC) risk relations; centralized critics are used only in training.

The evaluation is a system-level simulation of an urban intersection with one roadside gNB. The authors state it abstracts the PHY procedures of a particular 3GPP profile and is not a protocol-calibrated performance estimate.

## Summary (ZH)

Peng、Zheng、Liu 与 Zhang（香港中文大学与澳门大学）研究 NR-V2X 中的去中心化资源控制：每辆车基于本地观测自主选择 PC5 侧行链路资源与发射功率，Uu 链路提供车到网络连接。他们提出 PA-STGAT，一种物理风险感知的时空图注意力执行器，按约束强化学习问题训练。每辆车构建一小段单跳自我图（ego graph）历史，涵盖通信、干扰与碰撞时间（TTC）风险三类关系；集中式评论器仅在训练中使用。

评估为带一个路侧 gNB 的城市路口系统级仿真。作者明确指出，该仿真对特定 3GPP 配置的物理层过程做了抽象，并非经过协议校准的性能估计。

## Key technical points (EN)

- Design: a shared actor selects the PC5 resource-power pair; transmitter-specific credits map network-level delivery failures to individual vehicles (their average recovers the network metrics); augmented-Lagrangian prices adapt to constraint violations; a dual-priced, differentiable same-resource conflict term on the current graph turns the packet-delivery-ratio price into a coordination signal, weighted higher on short-TTC links. At deployment each vehicle runs only its local actor plus a one-hop repair filter.
- Setup: 8 vehicles, 14 PC5 resources, 3 exogenous Uu grants, one V2V packet per vehicle every 10 ms, 100 epochs per episode, speeds 8-16 m/s, communication and interference ranges 120 and 180 m, 2400-bit packets with 10 ms delay budget, 3 dB decoding threshold, Rayleigh fading plus 3 dB shadowing; 2000 training episodes, five seeds, compared with environment-matched MADQN, GNN+MATD3 and Graph+MAPPO.
- Results as the authors describe them: PA-STGAT shows higher raw-policy reliability than the graph-based baselines; under filtered execution all four methods meet the nominal empirical feasibility criteria in 5/5 seeds, while no raw policy does. Against GNN+MATD3 it needs fewer resource repairs but has lower utility and lower mean delivery reliability, and under filtering the baselines show higher mean PDR.
- Ablation: removing the graph-conflict pricing makes all five checkpoints select a single resource, and raw PDR falls to zero. Removing transmitter credit, the risk relation or temporal recurrence gives no statistically resolved difference in the nominal raw-policy comparison.
- Zero-shot vehicle-count test (14 PC5 resources fixed, eight-vehicle checkpoints): PA-STGAT PDR falls from 0.9246 at 8 vehicles to 0.8808 at 16, with feasible seeds 3/5, 5/5, 4/5, 0/5 and 0/5 at 8, 10, 12, 14 and 16 vehicles.

## Key technical points (ZH)

- 设计：共享执行器选择 PC5 资源-功率组合；发射端专属信用把网络级投递失败映射到各车辆（其平均值可还原网络指标）；增广拉格朗日价格随约束违反情况自适应；在当前图上引入可微的同资源冲突项，其权重随包投递率（PDR）对偶价格调整，并对短 TTC 链路赋予更高权重，把价格信号转化为协调信号。部署时每辆车只运行本地执行器和单跳修复过滤器。
- 设置：8 辆车、14 个 PC5 资源、3 个外生 Uu 授权，每辆车每 10 ms 发送一个 V2V 包，每回合 100 个时段，车速 8-16 m/s，通信与干扰范围分别为 120 m 和 180 m，数据包 2400 比特、时延预算 10 ms、解码门限 3 dB，含瑞利衰落与 3 dB 阴影；训练 2000 回合、五个种子，对比环境匹配的 MADQN、GNN+MATD3 与 Graph+MAPPO。
- 结果（按作者表述）：PA-STGAT 的原始策略可靠性高于基于图的基线；经过滤执行后，四种方法在 5/5 个种子上满足名义经验可行性标准，而没有任何原始策略满足。相对 GNN+MATD3，它所需的资源修复更少，但效用与平均投递可靠性更低；过滤执行时基线的平均 PDR 更高。
- 消融：去掉图冲突定价后，五个检查点全部选择同一资源，原始 PDR 降为零。去掉发射端信用、风险关系或时间递归，在名义原始策略对比中没有统计上可分辨的差异。
- 零样本车辆数测试（固定 14 个 PC5 资源，使用 8 车检查点）：PA-STGAT 的 PDR 由 8 辆车时的 0.9246 降至 16 辆车时的 0.8808；8、10、12、14、16 辆车时可行种子数分别为 3/5、5/5、4/5、0/5、0/5。

## Why it matters / what's new (EN)

The contribution is the coupling of the delivery-failure price to the graph topology so that a network-level reliability violation produces a per-transmitter, risk-weighted signal for discrete PC5 resource choices. The authors themselves note mixed filtered-execution trade-offs, feasibility that depends on the held-out sample near the threshold, and degradation at higher density, so it is a simulation study of a mechanism rather than a validated NR-V2X result.

## Why it matters / what's new (ZH)

其贡献在于把投递失败的价格与图拓扑耦合起来，使网络级的可靠性违约转化为面向每个发射端、按风险加权的信号，用于离散的 PC5 资源选择。作者本人也指出过滤执行下存在折中、接近门限时可行性依赖留出样本，且在更高车辆密度下性能下降，因此这是对一种机制的仿真研究，而非经过验证的 NR-V2X 结果。
