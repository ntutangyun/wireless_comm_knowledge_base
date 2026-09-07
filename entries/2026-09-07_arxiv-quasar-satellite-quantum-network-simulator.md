---
id: 2026-09-07_arxiv-quasar-satellite-quantum-network-simulator
date_published: 2026-09-04
date_found: 2026-09-07
type: academic-paper
technology: satellite
title_en: "QUASAR: A Lightweight Event-Driven Simulator for Satellite Quantum Entanglement Distribution, 10.2x Lower Network-Layer Update Latency Than Continuous Polling at 800 Satellites"
title_zh: "QUASAR：面向卫星量子纠缠分发的轻量级事件驱动仿真器，在 800 颗卫星规模下网络层更新延迟比连续轮询低 10.2 倍"
url: "https://arxiv.org/abs/2609.04920"
source_quality: full
topics: [quantum-networking, entanglement-distribution, LEO-constellation-simulator, orbital-propagation, optical-transmittance, quantum-memory-decoherence, spatiotemporal-routing, discrete-event-simulation, SimQN]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)
Shi, Wang, Yuan, Wu and Zhao propose **QUASAR** (Quantum Satellite Architecture and Routing Simulator), a lightweight Python overlay built on SimQN's discrete-event core, aimed at evaluating entanglement distribution over LEO satellite quantum networks without the computational cost and LEO gaps (no continuous LEO orbital propagation, elevation-dependent atmospheric attenuation, or dynamic line-of-sight contact graphs) of full quantum-hardware simulators such as NetSquid and SeQUeNCe. QUASAR's spatiotemporal topology engine propagates satellites via Walker-Delta constellations or TLE datasets under SGP4 at a 100 ms simulation slot, computing slant range and elevation angle to prune edges below a 15-degree minimum-elevation threshold and distinguishing satellite-to-ground links from inter-satellite links. Edge transmittance is modeled as free-space transmittance times a fixed implementation-loss factor for inter-satellite links, with an additional cosecant-law atmospheric-attenuation term for ground links; entanglement success combines per-edge transmittance with a per-node Bell-state-measurement success probability (0.60 baseline), while temporal decoherence during memory storage follows an exponential-decay fidelity model (initial fidelity 0.99, 100 ms baseline coherence time). The paper formalizes two hardware architectures on top of this model — memoryless **Simultaneous Downlink**, requiring one satellite with simultaneous line-of-sight to both endpoints, and memory-assisted **On-Orbit Stitching**, which buffers qubits at intermediate satellites to decouple generation from swapping timing at the cost of accumulated decoherence — and introduces an **Entanglement-Distribution-Rate-Aware Spatiotemporal Routing (EASR)** heuristic, a modified Dijkstra search that prunes candidate paths below a 0.75 fidelity threshold and ranks the rest by a log-domain cost combining optical loss, swap-success probability, and storage-time penalty. Evaluated on constellations from 20 to 800 satellites (including a 60-satellite CelesTrak Starlink TLE trace used only for orbital realism, not as a proposed quantum deployment) against 32 worldwide ground stations, QUASAR's combined visibility-pruning, channel-event-filtering, and fidelity-event-filtering design delivers a 10.2x network-layer update-latency speedup (over 85% lower update latency) over continuous polling at 800 satellites, with an ablation table attributing roughly 2.3x, an added 2.0x, and a final added ~2.2x to each of the three filtering stages respectively; EASR also sustains higher aggregate entanglement-distribution rate under concurrent multi-pair traffic than two baseline routing policies (dynamic shortest path, max-probability routing) that ignore either decoherence or spatial loss individually.

## Summary (ZH)
Shi、Wang、Yuan、Wu 与 Zhao 提出 **QUASAR**（Quantum Satellite Architecture and Routing Simulator），这是一个构建于 SimQN 离散事件内核之上的轻量级 Python 覆盖层，用于评估 LEO 卫星量子网络中的纠缠分发，既避免了全量子硬件仿真器（如 NetSquid、SeQUeNCe）的高计算开销，也避免了这些仿真器在 LEO 场景下的不足（缺乏连续的 LEO 轨道推演、依赖仰角的大气衰减建模、动态视线接触图）。QUASAR 的时空拓扑引擎通过 Walker-Delta 星座或基于 SGP4 的 TLE 数据集，在 100 毫秒仿真时隙下推演卫星轨道，计算斜距与仰角，按 15 度最低仰角阈值剪枝边，并区分星地链路与星间链路。星间链路的边透过率被建模为自由空间透过率乘以固定的实现损耗因子；星地链路则额外叠加一个余割定律的大气衰减项；纠缠成功概率结合逐边透过率与每节点贝尔态测量成功概率（基线 0.60）；存储期间的时间退相干遵循指数衰减的保真度模型（初始保真度 0.99，基线相干时间 100 毫秒）。论文在此模型之上形式化了两种硬件架构——无存储的**同步下行链路**（要求单颗卫星同时可视两个端点）与借助存储的**在轨拼接**（在中间卫星缓存量子比特，以退相干累积为代价，将纠缠产生与纠缠交换的时序解耦）——并引入了一种**纠缠分发速率感知时空路由（EASR）**启发式算法，即一种改进的 Dijkstra 搜索：剪除保真度低于 0.75 阈值的候选路径，并按结合光学损耗、交换成功概率与存储时间惩罚的对数域代价对其余路径排序。在 20 至 800 颗卫星规模的星座（含一条仅用于轨道真实感、并非作为量子部署方案的 60 颗卫星 CelesTrak 星链 TLE 轨迹）与 32 个全球地面站上评估，QUASAR 结合可见性剪枝、信道事件过滤与保真度事件过滤的设计，在 800 颗卫星规模下网络层更新延迟比连续轮询实现 10.2 倍加速（更新延迟降低超过 85%）；消融实验表将约 2.3 倍、追加的 2.0 倍与最终追加约 2.2 倍分别归因于这三个过滤阶段；在并发多对请求流量下，EASR 相较两种仅考虑退相干或仅考虑空间损耗其中之一的基线路由策略（动态最短路径、最大概率路由），也能维持更高的聚合纠缠分发速率。

## Key technical points (EN)
- **Architecture:** lightweight Python overlay on SimQN's discrete-event core; converts continuous orbital mechanics, optical channel variation, and quantum decoherence into discrete network-layer events.
- **Topology engine:** Walker-Delta or TLE/SGP4 orbital propagation at 100 ms slots; slant range + elevation-angle visibility computation; 15-degree minimum elevation; separate SGL/ISL edge treatment.
- **Channel model:** ISL transmittance = free-space transmittance x fixed implementation-loss factor; SGL adds a cosecant-law atmospheric-attenuation term (attenuation coefficient 0.01/km, effective atmospheric thickness 20 km).
- **Quantum penalties:** success probability = product of edge transmittances x per-node Bell-state-measurement success (0.60 baseline); fidelity decays exponentially with storage time (initial fidelity 0.99, coherence time 100 ms baseline, fidelity floor 1/4).
- **Two hardware architectures:** Simultaneous Downlink (memoryless, zero decoherence, geometrically constrained) vs. On-Orbit Stitching (memory-assisted relay, asynchronous buffering, accumulated decoherence).
- **EASR routing heuristic:** modified Dijkstra with a 0.75 fidelity-threshold prune and a log-domain edge weight combining optical loss, swap success, and storage-time cost.
- **Scale tested:** 20-800 satellites; 32 worldwide ground stations for macro-benchmarks; concurrent OD pairs 4-32; trace-driven runs on a 60-satellite Starlink TLE subset (orbital realism only).
- **Headline results:** 10.2x network-layer update-latency speedup / over 85% lower update latency vs. continuous polling at 800 satellites; ablation attributes ~2.3x to visibility pruning, a further ~2.0x to channel-event filtering, a further ~2.2x to fidelity-event filtering; EASR sustains higher aggregate entanglement-distribution rate than DSP/MPR baselines under concurrency.

## Key technical points (ZH)
- **架构：** 构建于 SimQN 离散事件内核之上的轻量级 Python 覆盖层；将连续的轨道力学、光学信道变化与量子退相干转换为离散的网络层事件。
- **拓扑引擎：** 基于 Walker-Delta 或 TLE/SGP4 的轨道推演，100 毫秒时隙；计算斜距与仰角以判定可见性；最低仰角 15 度；对星地链路与星间链路分别处理。
- **信道模型：** 星间链路透过率 = 自由空间透过率 × 固定实现损耗因子；星地链路额外叠加余割定律大气衰减项（衰减系数 0.01/公里，有效大气厚度 20 公里）。
- **量子代价：** 成功概率 = 各边透过率乘积 × 每节点贝尔态测量成功概率（基线 0.60）；保真度随存储时间指数衰减（初始保真度 0.99，基线相干时间 100 毫秒，保真度下限 1/4）。
- **两种硬件架构：** 同步下行链路（无存储、零退相干、受几何条件强约束）与在轨拼接（借助存储的中继，异步缓存，退相干随之累积）。
- **EASR 路由启发式：** 改进的 Dijkstra 搜索，以 0.75 保真度阈值剪枝，并按结合光学损耗、交换成功率与存储时间代价的对数域边权重排序。
- **测试规模：** 20-800 颗卫星；32 个全球地面站用于宏观基准测试；并发收发对 4-32；基于 60 颗卫星星链 TLE 子集的轨迹驱动运行（仅用于轨道真实感）。
- **主要结果：** 在 800 颗卫星规模下网络层更新延迟相比连续轮询实现 10.2 倍加速（更新延迟降低超过 85%）；消融实验将约 2.3 倍归因于可见性剪枝，再追加约 2.0 倍归因于信道事件过滤，再追加约 2.2 倍归因于保真度事件过滤；并发场景下 EASR 相较 DSP/MPR 基线维持更高的聚合纠缠分发速率。

## Why it matters / what's new (EN)
This KB's leo-constellations bin has one prior quantum-networking data point — quantum-safe IKE for satellite links (2026-05-29), which addressed post-quantum key exchange rather than quantum entanglement itself, and was noted at the time as sitting in a taxonomy gap with no dedicated quantum/security bin. QUASAR is the first entry addressing satellite **quantum entanglement distribution** as a networking-layer simulation problem: rather than proposing a new physical link or protocol, it proposes a reusable simulation substrate — positioned explicitly against full quantum-hardware simulators (too slow for LEO-scale dynamics) and generic network simulators (not built around orbital contact-graph churn) — that formalizes two competing satellite quantum-repeater hardware designs and lets routing heuristics be compared under a common, dynamically-varying physical model. It gives the bin its first concrete engineering answer to "how would you even evaluate a satellite quantum network at constellation scale" — a prerequisite question for any of the space-based quantum-key-distribution or entanglement-swapping proposals this KB may encounter going forward.

## Why it matters / what's new (ZH)
本知识库的 leo-constellations 分箱此前只有一个量子网络相关的数据点——面向卫星链路的抗量子 IKE 密钥交换（2026-05-29），该条目处理的是后量子密钥交换而非量子纠缠本身，当时也被指出处于一个尚无专门量子/安全分箱的分类空白地带。QUASAR 是首个把卫星**量子纠缠分发**当作网络层仿真问题来处理的条目：它没有提出新的物理链路或协议，而是提出一个可复用的仿真基座——其定位明确针对全量子硬件仿真器（面对 LEO 规模的轨道动态时过慢）与通用网络仿真器（并非围绕轨道接触图的持续变化而构建）——并在此基础上形式化了两种相互竞争的卫星量子中继硬件设计，使不同路由启发式算法能够在同一个动态变化的物理模型下进行对比。这为该分箱补上了首个具体的工程化答案，回应"究竟该如何在星座规模下评估卫星量子网络"这一前提性问题——而这正是本知识库今后可能遇到的任何天基量子密钥分发或纠缠交换提案都绕不开的基础问题。

## Images

None.
