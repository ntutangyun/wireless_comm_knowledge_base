---
id: 2026-10-27_arxiv-virtual-stationarity-runtime-continuous-migration-leo-orbital-edge
date_published: 2026-10-23
date_found: 2026-10-27
technology: satellite
type: academic-paper
title_en: "Migration as a Steady-State Execution Primitive: A Runtime for Virtual Stationarity in Low-Earth Orbit"
title_zh: "迁移作为稳态执行原语：面向低地球轨道虚拟静止的运行时"
url: "https://arxiv.org/abs/2610.32720"
source_quality: full
topics: [orbital-edge-computing, live-migration, virtual-stationarity, handover, WebAssembly, state-replay, LEO, SGP4]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Kleebinder, Furutanpey and Nastic (Distributed Systems Group, TU Wien; arXiv 2610.32720, cs.DC with cs.NI, v1 23 October 2026, accepted for publication at the 16th International Conference on the Internet of Things (IoT 2026)) start from the observation that LEO satellite motion compresses line-of-sight windows to minutes, so an application that wants to stay logically close to a ground location must keep moving across passing satellites, a paradigm termed Virtual Stationarity (VS) in prior work, which the authors extend from a placement objective into a runtime model. They argue that existing live-migration mechanisms optimise one-off relocations or replication rather than the continuous handover between successive hosts that orbital motion requires, and reformulate migration as a steady-state execution model.

The paper defines latency and availability service-level objectives (availability is one minus the downtime fraction), a migration budget per handover equal to the time the source still meets the latency SLO, a steady-state migration occupancy (cumulative migration time over operating time), and a convergence bound for state replay: replay catches up only while the event rate stays below the replay rate, with migration time (t_ovh + state/C) x mu / (mu - r_sys). The proposed Virtual Stationarity Runtime separates an external orbital orchestrator (chooses host and timing) from an Execution Engine and a Migration Membrane. The membrane combines Capability Virtualization (rebinding host-dependent resources to logical capabilities on the target) and Continuous State Projection (the target replays recorded system-call results and memory mutations while the source keeps running), in a four-phase protocol (Prepare, Reconstruct, Project, Commit) with an authority fence so only one realisation produces external effects. The prototype is built into WAMR (WebAssembly Micro Runtime) with an interpreter hook and memfd-based copy-on-write snapshots.

Evaluation uses four Raspberry Pi 5 nodes on a Gigabit switch as stand-ins for commercial off-the-shelf payloads (not flight hardware), SGP4 orbital schedules and a 1,600-satellite simulation. Over 300 handovers at a 30 s trigger, p95 downtime was 5.96 ms, median migration time 4,241 ms, median CPU 0.748 core-seconds, median memory 142.5 MB, with no cumulative growth and 99.9857% runtime availability; 100 handovers replaying 176,801 events showed no sequence gaps, duplicate outputs or hash-chain mismatches; migration time varied by under 1% across 10 to 140 MB/s write loads while pre-copy failed to converge as the dirty rate approached bandwidth; and all 100 bidirectional x86-64/ARM64 trials resumed. In the orbital-feasibility table, a 14 ms latency target gives a 242 s handover interval, 1.339% migration overhead and 99.998% availability; 10 ms gives 151 s, 2.267% and 99.997%; 6 ms gives 83 s, 4.403% and 99.997%. Stated limits: single-threaded modules only, availability covers runtime interruption rather than end-to-end paths, source-revocation recovery out of scope, post-copy omitted, the 30 s trigger is more aggressive than real handovers, and orbital, energy and thermal constraints are future work.

## Summary (ZH)

Kleebinder、Furutanpey 和 Nastic（维也纳工业大学分布式系统组；arXiv 2610.32720，cs.DC 交叉 cs.NI，v1 于 2026 年 10 月 23 日发布，已被第 16 届物联网国际会议（IoT 2026）录用）从以下观察出发：LEO 卫星运动使视距窗口压缩到几分钟，因此想在逻辑上靠近某一地面位置的应用必须在过境卫星之间持续迁移，即先前工作提出的“虚拟静止”（VS）范式，作者将其从放置目标扩展为运行时模型。他们认为现有实时迁移机制优化的是一次性迁移或复制，而非轨道运动所要求的相继主机间的连续切换，因此将迁移重新表述为稳态执行模型。

论文定义了时延与可用性服务等级目标（可用性为 1 减去停机比例）、每次切换的迁移预算（等于源节点仍满足时延 SLO 的剩余时间）、稳态迁移占用率（累计迁移时间占运行时间的比例），以及状态回放的收敛界：仅当事件速率低于回放速率时回放才能追上，迁移时间为 (t_ovh + 状态量/C) x mu / (mu - r_sys)。所提出的虚拟静止运行时（VSR）将外部轨道编排器（选择主机与时机）与执行引擎和迁移膜（Migration Membrane）分离。迁移膜结合能力虚拟化（将依赖主机的资源重新绑定到目标上的逻辑能力）与连续状态投影（源继续运行时，目标回放记录的系统调用结果和内存变更），采用四阶段协议（准备、重建、投影、提交），并以权限栅栏保证同一时刻只有一个实例产生外部效应。原型集成于 WAMR（WebAssembly Micro Runtime），使用解释器钩子和基于 memfd 的写时复制快照。

评估使用四台通过千兆交换机连接的 Raspberry Pi 5 作为商用现成载荷的替代（非飞行硬件），配合 SGP4 轨道计划和 1,600 颗卫星的仿真。在 30 秒触发间隔下的 300 次切换中，p95 停机 5.96 ms，迁移时间中位数 4,241 ms，CPU 中位数 0.748 核秒，内存中位数 142.5 MB，无累积增长，运行时可用性 99.9857%；100 次切换回放 176,801 个事件，未出现序列缺口、重复输出或哈希链不一致；在 10 至 140 MB/s 写负载下迁移时间变化小于 1%，而预拷贝在脏页速率接近带宽时无法收敛；100 次 x86-64/ARM64 双向试验全部成功恢复。轨道可行性表中，14 ms 时延目标对应 242 秒切换间隔、1.339% 迁移开销和 99.998% 可用性；10 ms 为 151 秒、2.267% 和 99.997%；6 ms 为 83 秒、4.403% 和 99.997%。论文给出的局限：仅支持单线程模块；可用性仅涵盖运行时中断而非端到端路径；源节点被撤销后的恢复不在范围内；未做后拷贝；30 秒触发比实际切换更激进；轨道、能耗与热约束留待未来。

## Key technical points (EN)

- **Concept**: Virtual Stationarity, applications migrate continuously across passing LEO satellites.
- **Model**: latency/availability SLOs, migration occupancy, replay convergence bound mu > r_sys.
- **Mechanism**: Migration Membrane (Capability Virtualization plus Continuous State Projection), four-phase protocol, authority fence.
- **Prototype**: WAMR with memfd copy-on-write snapshots on Raspberry Pi 5 nodes.
- **Results**: p95 downtime 5.96 ms over 300 handovers; 6 ms latency target costs 4.403% overhead.
- **Caveat**: COTS stand-ins, single-threaded modules, 30 s trigger.

## Key technical points (ZH)

- **概念**：虚拟静止，应用在过境 LEO 卫星之间持续迁移。
- **模型**：时延/可用性 SLO、迁移占用率、回放收敛界 mu > r_sys。
- **机制**：迁移膜（能力虚拟化加连续状态投影）、四阶段协议、权限栅栏。
- **原型**：基于 WAMR，在 Raspberry Pi 5 节点上使用 memfd 写时复制快照。
- **结果**：300 次切换 p95 停机 5.96 ms；6 ms 时延目标开销为 4.403%。
- **注意**：商用现成件替代、单线程模块、30 秒触发。

## Why it matters / what's new (EN)

The paper treats handover of compute state between satellites as a recurring runtime function with a feasibility model, rather than an occasional migration. Measurements are from a ground testbed with Raspberry Pi nodes and simulated orbital schedules, not on-orbit hardware.

## Why it matters / what's new (ZH)

论文将卫星间计算状态的切换视为带可行性模型的周期性运行时功能，而非偶发迁移。测量数据来自使用 Raspberry Pi 节点和仿真轨道计划的地面试验台，而非在轨硬件。

## Images

None.
