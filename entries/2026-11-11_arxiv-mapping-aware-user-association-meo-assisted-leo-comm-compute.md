---
id: 2026-11-11_arxiv-mapping-aware-user-association-meo-assisted-leo-comm-compute
date_published: 2026-11-08
date_found: 2026-11-11
technology: satellite
type: academic-paper
title_en: "Multi-Granularity Communication-Computing Resource Mapping for User Association in MEO-Assisted LEO Networks"
title_zh: "MEO 辅助 LEO 网络中面向用户关联的多粒度通信-计算资源映射"
url: "https://arxiv.org/abs/2611.11208"
source_quality: full
topics: [LEO, MEO, user association, satellite edge computing, communication-computing, MILP, primal-dual]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Jing, Jiang, Wang, Sun and Zhan (arXiv, submitted 8 Nov 2026) treat LEO networks as spaceborne communication-computing infrastructure, where user association must account for the radio link and also CPU, GPU, NPU, memory, cache, storage, energy, queue and thermal state. In the studied architecture, MEO regional state aggregators collect and relay time-stamped telemetry, a network operation control center (NOCC) keeps the global logical resource view and makes final association decisions, and LEO satellites provide access and onboard execution.

The authors develop a multi-granularity representation and service-primitive-driven mapping that converts a service-level request into a target-LEO-dependent quantized resource vector; an integer formulation, an exact MILP reference and a capacity-aware primal-dual algorithm share the same mapped objective. Experiments use real-world service bandwidth traces, a 1584-satellite LEO shell, multiple traffic seeds, controlled load and mapping error, delayed telemetry and temporal sessions. Versus static mapping, realized utility improves by 10.64% and end-to-end outage falls by 5.70 percentage points; target quantization cuts signaling by 19.84% with negligible utility loss. Future work: flight telemetry, physical control links, replicated NOCCs, inter-LEO migration.

## Summary (ZH)

Jing、Jiang、Wang、Sun 与 Zhan（arXiv，2026 年 11 月 8 日提交）将 LEO 网络视为天基通信-计算基础设施，其用户关联除无线链路外还须考虑 CPU、GPU、NPU、内存、缓存、存储、能量、队列与热状态。所研究架构中，MEO 区域状态聚合器收集并转发带时间戳的遥测，网络运行控制中心（NOCC）维护全局逻辑资源视图并作出最终关联决策，LEO 卫星提供接入与星上执行。

作者提出多粒度表示与服务原语驱动的映射，将服务级请求转换为依赖目标 LEO 的量化资源向量；整数规划模型、精确 MILP 参考解与容量感知原对偶算法共用同一映射目标。实验使用真实业务带宽轨迹、1584 颗卫星的 LEO 壳层、多个流量种子、受控的负载与映射误差、延迟遥测及时间会话。相比静态映射，实现效用提升 10.64%，端到端中断降低 5.70 个百分点；目标量化使信令减少 19.84% 且效用损失可忽略。后续工作：飞行遥测、物理控制链路、NOCC 复制、LEO 间迁移。

## Key technical points (EN)

- Architecture: MEO regional state aggregators relay telemetry; NOCC holds the global logical resource view and decides association; LEO satellites provide access and onboard execution.
- Idea: map a service request to a target-LEO-dependent quantized resource vector (CPU/GPU/NPU, memory, cache, storage, energy, queue, thermal) via multi-granularity representation.
- Solvers: integer formulation, exact MILP reference, capacity-aware primal-dual algorithm on the same objective.
- Setup: real service bandwidth traces, 1584-satellite LEO shell, delayed telemetry, temporal sessions.
- Results vs static mapping: utility +10.64%, outage -5.70 percentage points; quantization cuts signaling 19.84%.

## Key technical points (ZH)

- 架构：MEO 区域状态聚合器转发遥测；NOCC 持有全局逻辑资源视图并决定关联；LEO 卫星提供接入与星上执行。
- 思路：通过多粒度表示，将服务请求映射为依赖目标 LEO 的量化资源向量（CPU/GPU/NPU、内存、缓存、存储、能量、队列、热状态）。
- 求解：整数规划模型、精确 MILP 参考解、同一目标下的容量感知原对偶算法。
- 设置：真实业务带宽轨迹、1584 颗卫星 LEO 壳层、延迟遥测、时间会话。
- 相对静态映射的结果：效用 +10.64%，中断 -5.70 个百分点；量化使信令减少 19.84%。

## Why it matters / what's new (EN)

Earlier KB entries on onboard AI and orbital compute concern placement and workload scheduling; this one makes satellite selection itself depend on both radio and onboard computing state, with a MEO aggregation tier. Evidence is simulation-based on trace-driven load.

## Why it matters / what's new (ZH)

KB 先前关于星上 AI 与轨道计算的条目侧重部署与负载调度；本条目使卫星选择本身同时取决于无线与星上计算状态，并引入 MEO 聚合层。证据为基于业务轨迹的仿真。

## Images

None.
