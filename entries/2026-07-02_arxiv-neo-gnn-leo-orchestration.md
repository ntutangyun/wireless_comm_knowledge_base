---
id: 2026-07-02_arxiv-neo-gnn-leo-orchestration
date_published: 2026-06-30
date_found: 2026-07-02
type: academic-paper
technology: satellite
title_en: "NEO-GNN: LEO Satellite Network Orchestration with Heterogeneous Graph Neural Networks"
title_zh: "NEO-GNN：基于异构图神经网络的 LEO 卫星网络实时编排"
url: "https://arxiv.org/abs/2606.31950"
source_quality: full
topics: [LEO, GNN, network-orchestration, Starlink]
topic_primary: sat-ai
topics_secondary: [leo-constellations, starlink]
novelty_score: 3
---

## Summary (EN)

NEO-GNN (Jayarajan, Matson, Sundaresan; submitted June 30, 2026) tackles real-time orchestration of LEO satellite constellations — deciding, every reconfiguration cycle, which satellite serves which ground cells and which gateway each satellite backhauls through. The two competing objectives are complete ground-cell coverage and balanced traffic/utilization. Traditional answers fail at opposite ends: local heuristics (nearest-satellite assignment) create severe load imbalance, while centralized optimization of the NP-hard multidimensional assignment takes 64+ seconds on a modest network — too slow for satellite mobility measured in seconds.

The framework models the satellite–ground network as a dynamic *heterogeneous* spatiotemporal graph with three node types — mobile satellites (decision-makers), static ground cells (demand sources), and static gateways (backhaul endpoints) — connected by visibility edges (line-of-sight ground-satellite links at ≥25° elevation) plus inter-satellite logical edges used for message passing only (the evaluation is bent-pipe). Satellites update 64-dimensional embeddings through type-specific aggregation (separate learnable weights for cell, gateway, and satellite neighbors), and after L message-passing rounds, MLP heads output sigmoid probabilities for serving each visible cell and a softmax choice over visible gateways. Crucially, training is *unsupervised*: instead of labeling optimal assignments, the loss directly encodes the constraints — coverage (ReLU penalty if a cell has no serving satellite), capacity (penalty if satellite load exceeds 3 Gbps or gateway load its cap), and unique-assignment terms that push decisions toward discreteness.

Evaluated on the Starlink Phase-I topology (1,584 satellites, 72 planes, 550 km, 53°; ~120 active over the continental US) with 4,569 H3 hexagonal cells at 20 Mbps each and 54 gateways at real Starlink sites, NEO-GNN matches the Gurobi optimizer's coverage and demand satisfaction (100%/100% at baseline) with **620 ms inference vs 64+ s** — a ~100× speedup that fits inside 20-second reconfiguration cycles. Against heuristics at 1.2× demand it holds >99% coverage and >95% satisfaction across 0.6–2.0× demand scaling with 2–3× more balanced per-satellite load; a homogeneous GNN plateaus near 90% coverage and supervised ML below 85%. Under 40% satellite failures it sustains >90% coverage and >80% satisfaction (baselines degrade below 60%), and it absorbs 25% constellation growth without retraining.

## Summary (ZH)

NEO-GNN（Jayarajan、Matson、Sundaresan；2026 年 6 月 30 日提交）解决 LEO 卫星星座的实时编排问题——在每个重配置周期内决定哪颗卫星服务哪些地面小区、每颗卫星经由哪个关口站回传。两个相互竞争的目标是：地面小区的完全覆盖与流量/资源利用的均衡。传统方法在两个极端各自失效：局部启发式（最近卫星分配）造成严重负载不均，而对这个 NP 难多维分配问题做集中式优化，在中等规模网络上就需要 64 秒以上——远跟不上以秒计的卫星移动性。

该框架将星地网络建模为动态*异构*时空图，含三类节点——移动卫星（决策者）、静态地面小区（需求源）、静态关口站（回传端点）——由可见性边（仰角 ≥25° 的视距星地链路）连接，星间逻辑边仅用于消息传递（评估采用弯管转发模式）。卫星节点通过类型特定的聚合更新 64 维嵌入（对小区、关口站、卫星邻居使用不同的可学习权重），经 L 轮消息传递后，MLP 输出头给出服务各可见小区的 sigmoid 概率和对可见关口站的 softmax 选择。关键在于训练是*无监督*的：不需要标注最优分配，损失函数直接编码约束——覆盖项（小区无服务卫星时的 ReLU 惩罚）、容量项（卫星负载超 3 Gbps 或关口站超限时惩罚）、唯一分配项（推动决策离散化）。

在 Starlink 一期拓扑（1,584 颗卫星、72 个轨道面、550 km、53° 倾角；美国大陆上空约 120 颗活跃）上评估，配 4,569 个 H3 六边形小区（每小区 20 Mbps）与 54 个真实 Starlink 关口站位置：NEO-GNN 在覆盖率与需求满足率上追平 Gurobi 优化器（基线场景 100%/100%），推理仅需 **620 毫秒（对比 64+ 秒）**——约 100 倍加速，可放进 20 秒重配置周期。在 1.2 倍需求下启发式覆盖率骤降，而 NEO-GNN 在 0.6–2.0 倍需求范围内保持 >99% 覆盖、>95% 满足率，单星负载均衡度提升 2–3 倍；同构 GNN 覆盖率停滞在约 90%，监督式 ML 低于 85%。40% 卫星失效时仍维持 >90% 覆盖、>80% 满足率（基线降至 60% 以下），且无需重训即可适应星座规模增长 25%。

## Key technical points (EN)

- Heterogeneous spatiotemporal graph: satellite / ground-cell / gateway node types with role-aware, type-specific message passing — homogeneous GNN ablation plateaus ~90% coverage.
- Unsupervised constraint-based training: coverage (ReLU), capacity (3 Gbps/satellite), and unique-assignment losses replace labeled optimal solutions; trained on 4,320 snapshots (24 h at 20 s intervals), continuous-then-random two-phase schedule.
- 620 ms inference vs 64+ s Gurobi on a ~4,750-node network — ~100× speedup, fitting 20-second reconfiguration cycles.
- Starlink Phase-I scale eval: 1,584 satellites, 4,569 H3 cells, 54 real gateway sites; 100% coverage and demand satisfaction at baseline, >99%/95% across 0.6–2.0× demand.
- Resilience: >90% coverage under 40% random satellite failures; generalizes to 25% constellation growth without retraining.

## Key technical points (ZH)

- 异构时空图：卫星 / 地面小区 / 关口站三类节点，角色感知的类型特定消息传递——同构 GNN 消融实验覆盖率停滞在约 90%。
- 无监督约束式训练：覆盖（ReLU）、容量（单星 3 Gbps）、唯一分配三类损失取代最优解标注；在 4,320 个快照（24 小时、20 秒间隔）上先连续后随机两阶段训练。
- 约 4,750 节点网络上推理 620 毫秒（Gurobi 需 64+ 秒）——约 100 倍加速，可嵌入 20 秒重配置周期。
- Starlink 一期规模评估：1,584 颗卫星、4,569 个 H3 小区、54 个真实关口站；基线场景覆盖率与需求满足率均 100%，0.6–2.0 倍需求下保持 >99%/95%。
- 韧性：40% 卫星随机失效下覆盖率 >90%；星座规模增长 25% 无需重训。

## Why it matters / what's new (EN)

The sat-ai bin already holds prediction (2026-06-30_arxiv-leostp-diffusion-traffic-prediction-leo), interference detection (2026-06-15_arxiv-agon-satellite-interference-detection), beam hopping (2026-06-15_arxiv-aidos-beam-hopping-ngso), and ground-station placement (2026-06-13_arxiv-score-leo-ground-station-placement) — but no entry on the core *assignment/orchestration* control loop. NEO-GNN fills that gap and is the first KB entry to demonstrate that heterogeneous (role-typed) graph learning is what makes GNN orchestration competitive with exact optimization: the homogeneous ablation caps at ~90% coverage while the typed model matches Gurobi at 1/100th the latency. The unsupervised constraint-encoded loss is also a notable pattern — it sidesteps the label-generation bottleneck that limits supervised approaches at constellation scale, and the graph-conditioned inference generalizes across constellation growth and failures, which matters operationally for constellations that add satellites monthly.

## Why it matters / what's new (ZH)

sat-ai 主题域已有流量预测（2026-06-30_arxiv-leostp-diffusion-traffic-prediction-leo）、干扰检测（2026-06-15_arxiv-agon-satellite-interference-detection）、跳波束（2026-06-15_arxiv-aidos-beam-hopping-ngso）与地面站选址（2026-06-13_arxiv-score-leo-ground-station-placement）等条目——但尚无关于核心*分配/编排*控制环的条目。NEO-GNN 填补了这一空白，并且是 KB 中首个证明异构（角色类型化）图学习是 GNN 编排能与精确优化竞争之关键的条目：同构消融版覆盖率上限约 90%，而类型化模型以百分之一的时延追平 Gurobi。无监督的约束编码损失也是值得注意的模式——它绕开了星座规模下监督方法的标注生成瓶颈，且图条件化推理可泛化到星座扩容与失效场景，这对每月都在加星的星座具有实际运维意义。

## Images

![NEO-GNN heterogeneous satellite-ground graph model | NEO-GNN 异构星地图模型](https://arxiv.org/html/2606.31950v1/x1.png)
![GNN forward pass architecture | GNN 前向传播架构](https://arxiv.org/html/2606.31950v1/x4.png)
![Runtime vs network size, log scale | 运行时间随网络规模变化（对数坐标）](https://arxiv.org/html/2606.31950v1/x6.png)
![Coverage and demand satisfaction vs demand level | 覆盖率与需求满足率随需求水平变化](https://arxiv.org/html/2606.31950v1/x7.png)
