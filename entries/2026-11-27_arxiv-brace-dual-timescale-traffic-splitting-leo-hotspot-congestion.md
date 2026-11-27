---
id: 2026-11-27_arxiv-brace-dual-timescale-traffic-splitting-leo-hotspot-congestion
date_published: 2026-11-25
date_found: 2026-11-27
type: academic-paper
technology: satellite
title_en: "Relieving Hotspot Congestion in Large-Scale Low Earth Orbit Satellite Networks via Distributed Dual-Timescale Traffic Splitting"
title_zh: "通过分布式双时间尺度流量拆分缓解大规模低轨卫星网络的热点拥塞"
url: "https://arxiv.org/abs/2611.34329"
source_quality: full
topics: [traffic-splitting, inter-satellite-link, congestion, load-balancing, flow-completion-time, Walker-delta, plus-grid]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Shuyang Li, Guanchen Wu, Qiang Wu, Ran Wang, Jie Hao, Chao Ren and Hongke Zhang study hotspot congestion on inter-satellite links (ISLs) in LEO networks. End-to-end congestion control changes sending rates rather than paths and acts only after feedback returns, which leaves little room for the many short flows; in-network schemes face a trade-off between reacting to queue changes and the onboard computation or signalling needed to do so. The paper formulates the distributed slow-layer traffic-splitting problem, with an objective that combines throughput, queueing delay, traffic loss and the flow completion time (FCT) of short flows.

The proposed method, BRACE (Balanced Routing with Admissible Ports and Congestion Control at Two Timescales), has a slow layer that assigns destination-aware splits once per control period with a positive weight on every admissible port, and a fast layer that reweights the split in constant time per hop using instantaneous local queues. In 144-satellite flow-level simulations, the paper reports the highest reward among the tested distributed methods in all seven hotspot conditions and 28-45% lower drop rates than the lowest-loss baseline (a tuned congestion-aware heuristic) in the three highest-load conditions; without retuning, drop rates are 26-76% lower at calibrated loads in constellations of up to 1584 satellites.

## Summary (ZH)

Shuyang Li、Guanchen Wu、Qiang Wu、Ran Wang、Jie Hao、Chao Ren 与 Hongke Zhang 研究 LEO 网络星间链路（ISL）上的热点拥塞。端到端拥塞控制改变的是发送速率而非路径，且只在反馈返回后才起作用，对大量短流几乎来不及生效；网内方案则要在响应队列变化与由此带来的星上计算或信令开销之间权衡。论文表述了分布式慢层流量拆分问题，其目标综合吞吐量、排队时延、流量丢失以及短流的流完成时间（FCT）。

所提方法 BRACE（Balanced Routing with Admissible Ports and Congestion Control at Two Timescales）的慢层每个控制周期一次分配面向目的地的拆分，并为每个可用端口保留正权重；快层则利用瞬时本地队列在每跳以常数时间对拆分重新加权。在 144 颗卫星的流级仿真中，论文报告其在全部七种热点条件下取得受测分布式方法中最高的奖励，并在三种最高负载条件下比丢包最低的基线（经调参的拥塞感知启发式）丢包率低 28-45%；不重新调参时，在最多 1584 颗卫星的星座、校准负载下丢包率低 26-76%。

## Key technical points (EN)

- Gap addressed: if the periodic split gives a port zero weight, the fast layer cannot use that port for congestion relief, whereas keeping every port available admits detours that lengthen paths. The paper therefore asks which forwarding alternatives should stay available and how fresh local queue information must be.
- Slow layer: once per control period (0.5 s in the model) each satellite sets split weights over admissible ports for each reachable nonlocal destination from local information, without a network-wide demand matrix or training; a weight floor keeps every admissible port positive.
- Fast layer: at each path-selection event the split is reweighted in constant time per hop from instantaneous local queues; paths are chosen per flowlet, hop by hop.
- Model: flow-level fluid simulation with 5 ms data steps; Walker-Delta constellation at 550 km, +Grid topology with four ISL ports per satellite, inter-plane ISLs switched off at high latitude; 30 population-weighted metropolitan hotspots; Poisson flow arrivals with Pareto flow sizes (flows under 1 Mbit counted as mice); packets, onboard processing and channel errors are not modelled. Real orbital dynamics and a stress setting (accelerated motion with random ISL failures) are both used.
- Comparison: seven baseline designs (eight configurations) plus a centralized multicommodity-flow reference outside the distributed setting, including ELB, a tuned congestion-aware heuristic (CA-tuned) and the learned MA-DRL. The centralized reference exceeds BRACE's mean reward by 0.012-0.254 across the seven hotspot conditions and has lower path stretch and lower tail FCT of mice.
- Timescale ablation: queue snapshots refreshed every 20 ms perform close to instantaneous queues, whereas refreshing every 500 ms yields lower reward than running without the fast layer.
- Scalability: constellations of 144, 256, 400, 576 and 1584 satellites (the last 72 planes of 22 satellites, following the first Starlink shell geometry, +Grid assumed). Computing all 1584 split tables on one thread of an Apple M5 Pro took a median 278 ms, about 0.18 ms per satellite.
- Mice FCT: at the compared sizes the paper reports BRACE with the lowest mean and 99th-percentile mice FCT among distributed methods, but the margin over ELB is small in the example given (173.1 ms versus 173.5 ms).

## Key technical points (ZH)

- 针对的空白：若周期性拆分给某端口零权重，快层就无法用该端口缓解拥塞；而保留所有端口可用又会引入绕行、拉长路径。因此论文探讨哪些转发备选应保持可用，以及本地队列信息需要多新鲜。
- 慢层：每个控制周期（模型中为 0.5 s）一次，各卫星仅凭本地信息为每个可达的非本地目的地在可用端口上设定拆分权重，不需要全网需求矩阵，也无需训练；权重下限使每个可用端口保持为正。
- 快层：在每次路径选择事件中，利用瞬时本地队列在每跳以常数时间对拆分重新加权；路径按流片段（flowlet）逐跳选取。
- 模型：流级流体仿真，数据步长 5 ms；550 km Walker-Delta 星座，+Grid 拓扑，每颗卫星四个 ISL 端口，高纬度处关闭轨道面间 ISL；30 个按人口加权的大都市热点；泊松流到达、Pareto 流大小（小于 1 Mbit 的流记为小流）；不建模分组、星上处理与信道误差。同时采用真实轨道动力学和压力场景（加速运动加随机 ISL 故障）。
- 对比：七种基线设计（八种配置）加一个位于分布式设定之外的集中式多商品流参考，包括 ELB、经调参的拥塞感知启发式（CA-tuned）以及基于学习的 MA-DRL。在七种热点条件下，集中式参考的平均奖励比 BRACE 高 0.012-0.254，且路径拉伸更低、小流 FCT 尾部更低。
- 时间尺度消融：每 20 ms 刷新的队列快照表现接近瞬时队列，而每 500 ms 刷新的奖励低于不使用快层。
- 可扩展性：144、256、400、576 和 1584 颗卫星的星座（最后一种为 72 个轨道面、每面 22 颗，参照首个 Starlink 壳层几何，假设 +Grid）。在 Apple M5 Pro 单线程上计算全部 1584 个拆分表的中位耗时为 278 ms，约合每颗卫星 0.18 ms。
- 小流 FCT：论文报告在对比的规模下，BRACE 在分布式方法中的小流 FCT 均值与 99 分位最低，但在所给示例中相对 ELB 的差距很小（173.1 ms 对 173.5 ms）。

## Why it matters / what's new (EN)

The paper's stated contribution is the pairing of a slow, destination-aware split with a fast local queue-based reweighting through an explicit interface and a positive weight floor, using analytic rules and no learned policy or demand prediction. Its slow layer adapts the ELB load-balancing rule and adds the weight floor; the ELB baseline is the same rule without the floor. Evidence is flow-level simulation only; the centralized reference still does better on reward, path stretch and tail FCT, and the mice-FCT gain over ELB is small; in the 144-satellite runs its 99th-percentile mice FCT was higher than ELB's at real loads 500 and 1000 and stress load 1000.

## Why it matters / what's new (ZH)

论文声明的贡献，是通过显式接口和正权重下限，将缓慢的、面向目的地的拆分与快速的、基于本地队列的重新加权配对，两层均采用解析规则，不使用学习策略或需求预测。其慢层沿用 ELB 的负载均衡规则并加入权重下限；ELB 基线即为不带下限的同一规则。证据仅来自流级仿真；集中式参考在奖励、路径拉伸与尾部 FCT 上仍更优，且小流 FCT 相对 ELB 的提升很小；在 144 颗卫星的仿真中，实际负载 500、1000 与压力负载 1000 下其小流 99 分位 FCT 高于 ELB。

## Images

None.
