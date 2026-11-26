---
id: 2026-11-26_arxiv-persistent-fov-multipath-segment-routing-meo-controlled-leo-traffic-engineering
date_published: 2026-11-24
date_found: 2026-11-26
type: academic-paper
technology: satellite
title_en: "Leveraging Persistent Field-of-View and Multipath Segment Routing for Traffic Engineering in LEO Satellite Constellations"
title_zh: "利用持续视场与多路径分段路由实现 LEO 卫星星座流量工程"
url: "https://arxiv.org/abs/2611.32852"
source_quality: full
topics: [segment-routing, traffic-engineering, MEO-controller, field-of-view, virtual-topology, PDHG, Starlink, Kuiper, OneWeb]
topic_primary: leo-constellations
topics_secondary: [starlink]
novelty_score: 3
---

## Summary (EN)

Kai Wang and Chee Wei Tan propose a segment-routing framework for LEO constellations in which route computation, topology discovery and control signalling are moved off the resource-limited LEO switches and onto MEO controllers, leaving the LEO satellites as pure data-plane forwarders. The network is modelled as a sequence of static virtual-topology snapshots (about 15 seconds for Starlink, per the paper). The authors derive sufficient conditions under which user-to-satellite and LEO-to-MEO field-of-view connectivity persists across a whole snapshot, so that only the start and end times need to be checked.

On top of this, MEO control-domain partitioning is formulated as a mixed-integer linear program, and traffic is split over four minimum-hop path types by a linear program that minimises the maximum link utilisation. The linear program is solved with a distributed primal-dual hybrid gradient method that shares only AllReduce-summed constraint vectors. In simulations over Starlink, Kuiper and OneWeb Walker-delta shells with a GPS-like MEO layer, the abstract reports maximum-link-utilisation reductions of more than 13.09%, 11.84% and 12.50% respectively, against minimum-hop-count routing and traffic-oblivious load balancing.

## Summary (ZH)

Kai Wang 与 Chee Wei Tan 提出一种面向 LEO 星座的分段路由框架：将路由计算、拓扑发现与控制信令从资源受限的 LEO 交换节点卸载到 MEO 控制器，LEO 卫星仅作为数据面转发节点。网络被建模为一系列静态虚拟拓扑快照（论文给出 Starlink 约 15 秒）。作者推导了用户到卫星、LEO 到 MEO 的视场连通性在整个快照内持续成立的充分条件，因此只需检查起止时刻。

在此基础上，MEO 控制域划分被表述为混合整数线性规划，流量则通过一个以最小化最大链路利用率为目标的线性规划，在四类最小跳数路径之间分流。该线性规划采用分布式原始-对偶混合梯度法求解，仅共享经 AllReduce 求和的约束向量。在 Starlink、Kuiper 和 OneWeb 的 Walker-delta 壳层加类 GPS 的 MEO 层仿真中，摘要报告相比最小跳数路由与流量无关的负载均衡，最大链路利用率分别降低超过 13.09%、11.84% 和 12.50%。

## Key technical points (EN)

- Architecture: LEO satellites act as data-plane forwarders only; MEO controllers compute routes and handle control signalling. The virtual-topology snapshot is treated as static; the paper states it does not handle topology changes inside a snapshot.
- Field-of-view persistence (Lemmas 1 and 2): sufficient but not necessary conditions, so they tend to underestimate. With a 15 degree margin on the geocentric angle, the paper gets a persistence interval of about 123 s for user-to-LEO and about 69 s for LEO-to-MEO, and says these are close to ground truth.
- Control-domain partitioning: each LEO switch is assigned to exactly one MEO controller within its field of view; the MILP minimises the maximum migration overhead plus the maximum flow-table update overhead (message sizes of 24 bytes for synchronisation and 36 bytes for flow updates; 20 Gbps inter-satellite-link bandwidth in the flow-update term).
- Multipath segment-routing traffic engineering: each user is associated with one ascending and one descending satellite, giving four minimum-hop path types (ascending-to-ascending, ascending-to-descending, descending-to-ascending, descending-to-descending). Path construction places all horizontal hops before vertical hops, which the authors argue gives edge-disjoint paths and the lowest maximum load for sparse pairs. Each of the four paths is a minimum-hop path; the objective minimises maximum link load rather than hop count, so FROG ends with the lowest hop count and the proposed method second.
- Solver: D-PDLP, a distributed primal-dual hybrid gradient method; each domain keeps its routing variables private and only AllReduce-summed constraint vectors are exchanged. Gurobi provides an initial solution that D-PDLP refines when traffic fluctuates. The authors note first-order PDHG converges slowly.
- Setup: Walker-delta shells for Starlink S1 (53.0 degrees, 1584/72/3, 550 km), Kuiper K1 (51.9 degrees, 1156/34/3, 630 km) and OneWeb Phase 1 (87.9 degrees, 588/12/3, 1,200 km); GPS-like MEO controllers (55.0 degrees, 24/6/4, 20,200 km); city-based gravity-model traffic with Poisson-sampled demands; LEO processing rates of 20, 40 and 60 Gbps for the three constellations; baselines DisCoRoute, FROG (minimum hop count) and VLB (traffic-oblivious load balancing).
- Results: the abstract's utilisation reductions are the only exact figures given; the figure discussion is qualitative (lowest maximum load, average sojourn time and packet loss; FROG has the lowest hop count with the proposed method second; FROG loss rates reach about 10^-2 at some time steps).
- Stated limitations and future work: slow first-order convergence, no handling of topology changes within a snapshot, sufficient-only lemma conditions, simulation only; energy efficiency, latency fairness, congestion-aware rerouting and hardware or orbital validation are listed as future work.

## Key technical points (ZH)

- 架构：LEO 卫星仅作数据面转发；MEO 控制器负责路由计算与控制信令。虚拟拓扑快照被视为静态，论文声明不处理快照内部的拓扑变化。
- 视场持续性（引理 1 与 2）：充分但非必要条件，因此倾向低估。在地心角留 15 度裕量时，用户到 LEO 的持续时间约 123 s，LEO 到 MEO 约 69 s，论文称其与真实值接近。
- 控制域划分：每个 LEO 交换节点分配给其视场内的唯一 MEO 控制器；MILP 最小化最大迁移开销与最大流表更新开销之和（同步消息 24 字节、流更新消息 36 字节；流更新项采用 20 Gbps 星间链路带宽）。
- 多路径分段路由流量工程：每个用户关联一颗升轨和一颗降轨卫星，形成四类最小跳数路径（升-升、升-降、降-升、降-降）。路径构造将所有水平跳置于垂直跳之前，作者认为这使路径边不相交，并在稀疏节点对下得到最低最大负载。四条路径均为最小跳数路径；优化目标是最小化最大链路负载而非跳数，因此 FROG 跳数最少、本方法次之。
- 求解器：D-PDLP，一种分布式原始-对偶混合梯度法；各域私有保存路由变量，仅交换经 AllReduce 求和的约束向量。Gurobi 提供初始解，流量波动时由 D-PDLP 细化。作者指出一阶 PDHG 收敛较慢。
- 设置：Walker-delta 壳层，Starlink S1（53.0 度，1584/72/3，550 km）、Kuiper K1（51.9 度，1156/34/3，630 km）、OneWeb Phase 1（87.9 度，588/12/3，1200 km）；类 GPS 的 MEO 控制器（55.0 度，24/6/4，20200 km）；基于城市的引力模型流量与泊松采样需求；三个星座的 LEO 处理速率分别为 20、40、60 Gbps；对比基线为 DisCoRoute、FROG（最小跳数）和 VLB（与流量无关的负载均衡）。
- 结果：除摘要中的利用率降幅外，论文未给出其他精确数值；图表讨论为定性描述（最大负载、平均驻留时间与丢包率最低；FROG 跳数最少、本方法次之；FROG 丢包率在部分时间步达到约 10^-2）。
- 声明的局限与后续工作：一阶收敛慢、不处理快照内拓扑变化、引理条件仅为充分条件、仅有仿真；能效、时延公平性、拥塞感知重路由以及硬件或在轨验证列为后续工作。

## Why it matters / what's new (EN)

The paper's stated contribution is a control split in which a higher-orbit layer owns routing and the LEO layer only forwards, backed by a closed-form check that links stay visible for a whole topology snapshot. This sits next to the KB's other LEO routing and handover entries but differs in placing the controller on a separate MEO layer and in giving a distributed solver that keeps domain-level data private. Results are simulation only, against minimum-hop and traffic-oblivious baselines.

## Why it matters / what's new (ZH)

论文声明的贡献是一种控制分离：由更高轨道层负责路由，LEO 层只做转发，并给出一个闭式检查来保证链路在整个拓扑快照内保持可见。它与知识库中其他 LEO 路由与切换条目相邻，但区别在于将控制器置于独立的 MEO 层，并提供保持域级数据私有的分布式求解器。结果仅为仿真，对比基线为最小跳数与流量无关的方法。

## Images

None.
