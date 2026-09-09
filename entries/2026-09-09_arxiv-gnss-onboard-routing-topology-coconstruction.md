---
id: 2026-09-09_arxiv-gnss-onboard-routing-topology-coconstruction
date_published: 2026-09-07
date_found: 2026-09-09
type: academic-paper
technology: satellite
title_en: "Toward Autonomous GNSS Networking: Low-Complexity Onboard Routing and Topology-Routing Co-Construction — Matches Contact Graph Routing While Cutting Computation Time ~1500x in a 24-Hour, 30-Satellite BeiDou Scenario"
title_zh: "迈向自主 GNSS 组网：低复杂度星上路由与拓扑—路由协同构建——在 24 小时、30 星北斗场景下性能与接触图路由相当，计算耗时降低约 1500 倍"
url: "https://arxiv.org/abs/2609.07056"
source_quality: full
topics: [GNSS-inter-satellite-links, onboard-routing, contact-graph-routing, topology-routing-co-construction, autonomous-orbit-determination, BeiDou, time-slotted-networking]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)
Yan, Yang, Zhao (Nanjing University) and Zheng (China Academy of Space Technology) address onboard routing for global navigation satellite system (GNSS) inter-satellite-link (ISL) networks, where satellites use rapidly steerable phased-array terminals that communicate with at most one scheduled peer per time slot -- a structural constraint that lets the authors avoid the massive end-to-end path search that conventional store-and-forward routing (exemplified by Contact Graph Routing, CGR) requires. Their method, DS-SMFP (a slot-by-slot backward forwarding computation), propagates future-delivery information backward over the slot sequence, seeded at the destination and propagated backward over the slot sequence, directly determining at each slot whether a satellite should store or forward a given packet without re-searching end-to-end paths; because topology generation (which peer talks to which satellite, in which slot) and routing computation depend on the same underlying delivery information, the paper further shows the two can be co-constructed concurrently rather than sequentially -- topology built first, then routing computed on top (the conventional FCP+CGR sequential workflow). The paper demonstrates this Topology-Routing Co-Construction on a master-satellite-oriented autonomous orbit-determination (OD) case: a scenario where link scheduling must account for end-to-end communication performance (getting OD/ranging data reliably to and from a master satellite) rather than only for ranging geometry. Evaluated on a 24-hour, 30-satellite BeiDou scenario with 3-second ISL slots (a representative BeiDou-study slot duration): DS-SMFP achieves routing performance (end-to-end delay, hop count) nearly identical to CGR, while CGR requires 2109 s of computation on the fixed FCP topology versus DS-SMFP completing in roughly 1500x less time; and the full topology-routing co-construction workflow (topology generation and routing solved jointly) completes within tens of seconds, more than 60x faster than the sequential FCP-then-CGR baseline, while the co-constructed topology improves all-to-all and master-satellite-directional traffic performance relative to the topology used for the CGR baseline, without degrading inter-satellite ranging quality.

## Summary (ZH)
Yan、Yang、Zhao（南京大学）与 Zheng（中国空间技术研究院）针对全球导航卫星系统（GNSS）星间链路（ISL）网络的星上路由问题展开研究。该类系统的卫星采用可快速电子扫描的相控阵终端，每个时隙内至多只能与一个预先调度好的对端通信——这一结构性约束使作者得以避免传统存储转发路由（以接触图路由 CGR 为代表）所需的大规模端到端路径搜索。他们提出的方法 DS-SMFP（逐时隙反向前送计算）以目的节点为种子，沿时隙序列反向传播未来投递信息，在每个时隙直接判定某颗卫星应存储还是转发某个数据包，而无需重新搜索端到端路径；由于拓扑生成（即哪个对端在哪个时隙与哪颗卫星通信）与路由计算依赖于同一份底层投递信息，论文进一步证明二者可以并发协同构建，而非按传统 FCP+CGR 工作流那样先构建拓扑、再在其上计算路由的串行方式。论文以一个面向主星的自主定轨（OD）场景演示了这种拓扑—路由协同构建机制：在该场景中，链路调度必须兼顾端到端通信性能（可靠地向主星传递和回传定轨/测距数据），而不仅仅是测距几何关系。在一个采用 3 秒星间链路时隙（北斗相关研究中具有代表性的时隙时长）的 24 小时、30 星北斗场景下评估：DS-SMFP 在端到端时延、跳数等路由性能指标上与 CGR 几乎相同，而 CGR 在固定的 FCP 拓扑上需要 2109 秒计算时间，DS-SMFP 的计算耗时约为其 1/1500；完整的拓扑—路由协同构建工作流（拓扑生成与路由联合求解）可在数十秒内完成，比先构建 FCP 拓扑再执行 CGR 的串行基线快 60 倍以上；同时，协同构建出的拓扑相较用于 CGR 基线的拓扑，在全互联及面向主星方向的流量性能上均有提升，且不会降低星间测距质量。

## Key technical points (EN)
- **Structural exploitation:** GNSS ISL networks are time-slotted, with each satellite communicating with at most one scheduled peer per slot (a representative BeiDou slot duration is 3 s) -- this single-peer-per-slot property is what lets routing avoid massive end-to-end path search.
- **DS-SMFP routing method:** propagates future-delivery (store-or-forward) information seeded at the destination and propagated backward over the slot sequence; directly determines store/forward decisions per slot rather than re-searching end-to-end paths per packet.
- **Topology-Routing Co-Construction:** because topology generation and routing computation share the same delivery-information substrate, the two stages can proceed concurrently instead of sequentially (conventional workflow: FCP topology generation, then CGR routing on top).
- **Demonstration case:** master-satellite-oriented autonomous orbit determination (OD) -- link scheduling is optimized to also serve end-to-end OD/ranging data delivery, not purely ranging geometry.
- **Evaluation scenario:** 24-hour, 30-satellite BeiDou constellation, 3-s ISL slots; computing platform and baseline comparisons against Contact Graph Routing (CGR) and the sequential FCP+CGR workflow.
- **Computational-efficiency result:** CGR requires 2109 s on a fixed FCP topology; DS-SMFP achieves comparable routing performance in ~1/1500th the computation time.
- **Co-construction speed result:** the joint topology-routing solution completes within tens of seconds, >60x faster than the sequential FCP+CGR baseline.
- **Routing-quality result:** DS-SMFP and CGR show nearly identical end-to-end delay and hop-count performance (Figs. 4-5); the co-constructed topology improves all-to-all and both master-satellite traffic directions while preserving strong inter-satellite ranging performance.

## Key technical points (ZH)
- **结构性利用：** GNSS 星间链路网络采用时隙化结构，每颗卫星在每个时隙内至多与一个预先调度好的对端通信（北斗研究中具有代表性的时隙时长为 3 秒）——正是这一"每时隙单对端"特性使路由得以避免大规模端到端路径搜索。
- **DS-SMFP 路由方法：** 以目的节点为种子，沿时隙序列反向传播未来投递（存储或转发）信息；在每个时隙直接判定存储/转发决策，而非针对每个数据包重新搜索端到端路径。
- **拓扑—路由协同构建：** 由于拓扑生成与路由计算依赖同一份投递信息基底，二者可并发进行而非串行进行（传统工作流为先生成 FCP 拓扑，再在其上执行 CGR 路由）。
- **演示场景：** 面向主星的自主定轨（OD）——链路调度在优化时不仅考虑测距几何关系，也兼顾端到端定轨/测距数据的传递性能。
- **评估场景：** 24 小时、30 星北斗星座，3 秒星间链路时隙；与接触图路由（CGR）及串行 FCP+CGR 工作流进行基线对比。
- **计算效率结果：** CGR 在固定 FCP 拓扑上需要 2109 秒计算时间；DS-SMFP 在约 1/1500 的计算时间内达到相当的路由性能。
- **协同构建速度结果：** 拓扑与路由联合求解方案可在数十秒内完成，比串行 FCP+CGR 基线快 60 倍以上。
- **路由质量结果：** DS-SMFP 与 CGR 在端到端时延与跳数性能上几乎一致（图 4-5）；协同构建出的拓扑在全互联及两个方向的主星相关流量性能上均有提升，同时保持良好的星间测距性能。

## Why it matters / what's new (EN)
This KB's leo-constellations bin has covered ISL-network topics such as beam-hopping resource allocation and constellation-scale routing, but this is the first entry to address GNSS constellations (BeiDou) specifically rather than broadband/data-relay LEO constellations, and the first entry to frame topology construction and routing computation as a jointly-solvable problem rather than a sequential pipeline. The ~1500x computation-time reduction while matching CGR's routing quality directly targets a recognized bottleneck for GNSS autonomy: onboard satellites have far less computational headroom than ground-based route planners, and a full-day (24-hour) schedule's contact-plan search space makes conventional CGR computation a non-trivial scalability concern for true onboard (rather than ground-uplinked) route generation.

## Why it matters / what's new (ZH)
本知识库 leo-constellations 分箱此前已收录波束跳变资源分配、星座级路由等星间链路网络相关条目，但本条目是首个专门针对 GNSS 星座（北斗）而非宽带/数据中继型 LEO 星座的条目，也是首个将拓扑构建与路由计算视为可联合求解问题、而非串行流水线的条目。在保持与 CGR 相当路由质量的同时将计算耗时降低约 1500 倍，直接针对 GNSS 自主性面临的一个公认瓶颈：星上卫星的计算余量远小于地面路由规划系统，而全天（24 小时）调度所对应的接触计划搜索空间，使传统 CGR 计算对于真正意义上的星上（而非地面上注）路由生成而言，成为一个不容忽视的可扩展性问题。

## Images

None.
