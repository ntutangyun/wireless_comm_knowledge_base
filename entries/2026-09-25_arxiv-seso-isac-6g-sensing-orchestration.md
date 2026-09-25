---
id: 2026-09-25_arxiv-seso-isac-6g-sensing-orchestration
date_published: 2026-09-05
date_found: 2026-09-25
type: academic-paper
technology: cellular
title_en: "SESO-ISAC: Service-Aware End-to-End Sensing Orchestration for 6G ISAC"
title_zh: "SESO-ISAC：面向 6G ISAC 的服务感知端到端感知编排框架"
url: "https://arxiv.org/abs/2609.06089"
source_quality: full
topics: [ISAC, 6G, sensing-orchestration, 3GPP-SA2, QoS, mono-static-sensing, bi-static-sensing, multi-static-sensing]
topic_primary: 6g-vision
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

This paper (LG Electronics and Korea University) targets a gap in 6G Integrated Sensing and Communication (ISAC): existing work mostly optimizes individual radio-level sensing problems (waveform design, beamforming, resource allocation) in isolation, but a real ISAC service needs a complete end-to-end pipeline — selecting which sensing entities (SenEs) perform the transmit/receive roles, how the sensing measurement path is composed (mono-static: one SenE does both Tx and Rx; bi-static: separate UE-RAN/RAN-UE/RAN-RAN/UE-UE Tx-Rx pairs; multi-static: multiple SenEs feeding a joint processing point), how the result is processed, and how it is reported/exposed to the consuming service — and that pipeline has to keep working as the sensing execution context (structural geometry, channel/environment conditions) changes during operation.

The authors propose SESO-ISAC, a five-step orchestration framework built around a 3GPP SA2-style architecture (a Sensing Service Consumer issues a request; the framework selects an end-to-end configuration considering the current execution context): (1) service-requirement characterization — express the request as a set of applicable QoS dimensions (e.g. latency/freshness for real-time monitoring vs. accuracy/resolution for detailed characterization) with their required boundaries; (2) end-to-end candidate composition — determine feasible SenE role/path combinations for the request; (3) candidate performance evaluation — estimate each candidate's latency, reliability, freshness and sensing-quality metrics under the current execution context; (4) candidate feasibility filtering — drop any candidate that violates a mandatory QoS boundary; (5) multi-dimensional configuration selection — normalize each metric to its boundary (boundary = 1, better → 0), aggregate per dimension by RMS, and select the candidate with the minimum normalized Euclidean distance. During operation the framework monitors context and re-runs from step 2 (structural change) or step 3 (performance change). Two illustrative case studies (a factory robot collision-avoidance scenario and a UAV trajectory-tracking scenario evaluated at two different time instants, using representative, not measured, candidate performance values; QoS boundaries drawn from 3GPP sensing KPIs) show that the framework picks different sensing configurations as conditions change, and that the "best" configuration is not determined by any single QoS metric alone but by overall performance across all applicable dimensions.

## Summary (ZH)

本文（LG电子与韩国高丽大学）针对 6G 集成感知与通信（ISAC）中的一个空白展开研究：现有工作大多孤立地优化单一的射频层感知问题（波形设计、波束赋形、资源分配），而一个真正可用的 ISAC 服务需要一条完整的端到端流水线——包括选定哪些感知实体（SenE）承担收发角色、感知测量路径如何构成（单站式：一个 SenE 同时承担收发；双站式：UE-RAN、RAN-UE、RAN-RAN、UE-UE 之间的独立收发对；多站式：多个 SenE 联合馈入同一处理节点）、结果如何处理，以及如何向消费该结果的业务侧上报/暴露——并且该流水线必须在运行期间感知执行上下文（结构几何关系、信道/环境条件）发生变化时持续保持有效。

作者提出了 SESO-ISAC，一个围绕类 3GPP SA2 架构构建的五步编排框架（感知服务消费者发起请求；框架结合当前执行上下文选出一套端到端配置）：（1）服务需求刻画——将请求表达为一组适用的 QoS 维度（例如实时监控关注的时延/新鲜度，或精细特征刻画关注的精度/分辨率）及其必须满足的边界；（2）端到端候选组合——为该请求确定可行的 SenE 角色/路径组合；（3）候选性能评估——在当前执行上下文下估计各候选方案的时延、可靠性、新鲜度与感知质量指标；（4）候选可行性筛选——剔除违反任一强制 QoS 边界的候选；（5）多维配置选择——将各指标按其边界归一化（边界为 1，越优越接近 0），维度内以均方根聚合，选出归一化欧氏距离最小的候选。运行期间框架持续监测上下文：结构变化时从第 2 步重做，性能变化时从第 3 步重做。两个示意性案例研究（工厂机器人避障场景，以及在两个不同时刻分别评估的无人机轨迹跟踪场景；采用代表性而非实测的候选性能数值，QoS 边界取自 3GPP 感知 KPI）表明，该框架会随条件变化选出不同的感知配置，且"最优"配置并非由单一 QoS 指标决定，而是取决于在所有适用维度上的综合表现。

## Key technical points (EN)

- Identifies a gap between radio-level ISAC optimization (waveform/beamforming/resource allocation) and the need for a complete end-to-end sensing pipeline: SenE role/path selection → measurement → processing → result reporting/exposure.
- Built on a 3GPP SA2-style ISAC architecture; supports mono-static, bi-static, and multi-static sensing topologies as composable path options.
- Five-step orchestration loop: service-requirement characterization, candidate composition, candidate performance evaluation (per-context latency/reliability/freshness/sensing-quality estimates), candidate feasibility filtering (drop candidates violating a mandatory QoS boundary), and multi-dimensional configuration selection (per-dimension RMS aggregation of boundary-normalized metrics, minimum normalized Euclidean distance); re-runs from step 2 or 3 as execution context drifts.
- Re-evaluation is driven by monitored changes in structural context (sensing geometry, participating SenEs) or performance context; the current configuration is kept only while it remains both feasible and preferred — in the UAV case study the framework switched even though the original configuration was still feasible.
- Two illustrative case studies (factory robot collision avoidance; UAV trajectory tracking at two time instants; using representative, not measured, candidate performance values, with QoS boundaries from 3GPP sensing KPIs) show the selected configuration changes as context changes, and that no single QoS dimension alone determines the winning configuration.

## Key technical points (ZH)

- 指出了射频层 ISAC 优化（波形/波束赋形/资源分配）与完整端到端感知流水线需求之间的空白：SenE 角色/路径选择 → 测量 → 处理 → 结果上报/暴露。
- 基于类 3GPP SA2 的 ISAC 架构构建，支持单站式、双站式与多站式感知拓扑作为可组合的路径选项。
- 五步编排循环：服务需求刻画、候选方案组合、候选性能评估（按当前上下文估计时延/可靠性/新鲜度/感知质量）、候选可行性筛选（剔除违反强制 QoS 边界的候选）、以及多维配置选择（对边界归一化指标按维度做均方根聚合，选归一化欧氏距离最小者）；随执行上下文漂移从第 2 步或第 3 步重做。
- 重评估由监测到的结构上下文（感知几何、参与 SenE）或性能上下文变化驱动；只有当当前配置仍可行且仍最优时才保留——在无人机案例研究中，原配置仍可行，但框架仍切换到了更优配置。
- 两个示意性案例研究（工厂机器人避障；两个不同时刻的无人机轨迹跟踪；采用代表性而非实测的候选性能数值，QoS 边界取自 3GPP 感知 KPI）表明所选配置会随上下文变化而改变，且没有任何单一 QoS 维度能独立决定最终胜出的配置。

## Why it matters / what's new (EN)

This is a systems/architecture contribution rather than a physical-layer one, and it complements the KB's existing ISAC/sensing coverage (mostly CSI/radio-level sensing work) with an orchestration-layer view: it treats sensing configuration as a continuously-managed resource-selection problem, rather than a one-shot waveform design choice. This positions ISAC as something a 6G core/orchestration layer must actively manage, not just something the radio does.

## Why it matters / what's new (ZH)

这是一项系统/架构层面的贡献，而非物理层贡献，为本知识库现有的 ISAC/感知相关条目（多为 CSI/射频层感知工作）补充了编排层视角：它将感知配置视为一个需要持续管理的资源选择问题，而非一次性的波形设计选择。这一视角将 ISAC 定位为 6G 核心网/编排层必须主动管理的对象，而不仅仅是无线侧的功能。

## Images

![6G ISAC architecture and sensing modes: mono-static, bi-static, and multi-static (paper Fig. 1) | 6G ISAC 架构与感知模式：单站式、双站式与多站式（论文图 1）](https://arxiv.org/html/2609.06089v1/Figure/Fig1_ISAC_System.png)
![Factory robot collision-avoidance case study result (paper Fig. 3a) | 工厂机器人避障案例研究结果（论文图 3a）](https://arxiv.org/html/2609.06089v1/Figure/case1_result.png)
