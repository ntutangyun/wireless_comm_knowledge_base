---
id: 2026-11-10_arxiv-chance-constrained-ai-model-placement-ai-ran-mig
date_published: 2026-11-05
date_found: 2026-11-10
type: academic-paper
technology: cellular
title_en: "Stochastic AI Model Placement for AI-and-RAN Coexistence in 6G Networks"
title_zh: "6G 网络中 AI 与 RAN 共存的随机 AI 模型部署"
url: "https://arxiv.org/abs/2611.08739"
source_quality: full
topics: [AI-RAN, MIG, GPU-sharing, chance-constrained-optimization, MILP, model-placement, NVIDIA-Aerial, RAN-protection, multi-site]
topic_primary: cellular-ai
topics_secondary: [open-ran]
novelty_score: 3
---

## Summary (EN)

Altarazi and Abdel-Rahman consider AI-service placement across geographically distributed RAN sites whose GPUs are split into fixed, isolated multi-instance GPU (MIG) profiles, so that AI inference shares accelerated hardware with baseband processing. They propose C2AIR, a chance-constrained optimisation model that maximises the expected number of AI requests served while keeping the probability of a RAN compute shortfall within a target at every site, and that only admits an AI model on a MIG profile that covers its local demand with a prescribed probability. A service may run at several sites, and discrete profile, memory and GPU-slice limits are modelled.

Because each probabilistic requirement involves a single site's demand, it reduces to a threshold computed before solving, so C2AIR stays a mixed-integer linear program that solves in under a second for 15 sites and 40 services. It is evaluated on a four-site deployment calibrated from NVIDIA Aerial RAN capacity figures and MLPerf Inference results, and on seven larger scenarios.

## Summary (ZH)

Altarazi 与 Abdel-Rahman 研究在地理分布的 RAN 站点上部署 AI 服务的问题：站点 GPU 被划分为固定、相互隔离的多实例 GPU（MIG）配置，使 AI 推理与基带处理共享加速硬件。他们提出 C2AIR——一个机会约束优化模型，在每个站点把 RAN 算力不足的概率控制在目标之内的同时，最大化期望服务的 AI 请求数；并且只在能以规定概率覆盖本地需求的 MIG 配置上接纳 AI 模型。服务可在多个站点运行，模型中考虑了离散的配置、内存与 GPU 切片限制。

由于每个概率要求只涉及单个站点的需求，它可化为求解前计算的阈值，因此 C2AIR 仍是混合整数线性规划，在 15 个站点、40 个服务时求解时间不足一秒。评估基于以 NVIDIA Aerial RAN 容量数据与 MLPerf Inference 结果标定的四站点部署，以及七个更大的场景。

## Key technical points (EN)

- Motivation: operators that move baseband to GPUs dimension for peak RAN load, leaving capacity idle off-peak. Reserving for the mean RAN demand under-protects the RAN, while reserving for the peak wastes capacity AI could use.
- Formulation: deterministic equivalents are derived for binomial and lognormal RAN demand and for Gamma AI demand, plus a level encoding that admits any profiled, nonlinear mapping from GPU slices to RAN compute.
- RAN protection: C2AIR keeps the RAN violation probability within target at each of the four evaluated demand levels (valley to event hour) on the four-site deployment, whereas reserving for the mean RAN demand violates it in 24% to 47% of the intervals.
- AI side: the reliability condition prevents placing AI models that would be overloaded in 85% of the intervals at an event hour, and multi-site replication serves up to 2.7 times more AI requests than single-site deployment (four-site case; 1.1–1.9× in the larger scenarios).
- Cost of protection: it is negligible off-peak and 4.6% of AI throughput in the event hour of the four-site case, but in the operator scenario, whose RAN demand slightly exceeds the largest MIG instance below a full GPU, it removes all AI capacity. Coarse MIG instances and a heavy demand tail make strict protection expensive; a lognormal tail needs more slices than a binomial one with the same mean and variation.
- Limits stated by the authors: the guarantee holds only for the planning demand level (violations occur under unplanned demand growth); two-stage recourse, MIG reconfiguration and learned demand updates are left to future work.

## Key technical points (ZH)

- 动机：把基带迁移到 GPU 的运营商按 RAN 峰值负载配置资源，非高峰时容量闲置。按 RAN 平均需求预留会使 RAN 保护不足，按峰值预留则浪费了 AI 可用的容量。
- 建模：推导了二项与对数正态 RAN 需求、Gamma AI 需求的确定性等价形式，并给出可接纳任意经实测的、GPU 切片到 RAN 算力的非线性映射的层级编码。
- RAN 保护：在四站点部署中，C2AIR 使 RAN 违约概率在所评估的四个需求水平（谷值至事件时段）下都处于目标之内，而按平均需求预留则在 24% 至 47% 的时段违约。
- AI 侧：可靠性条件避免部署在事件时段 85% 的区间会过载的 AI 模型，多站点复制比单站点部署最多多服务 2.7 倍 AI 请求（四站点场景；更大场景为 1.1–1.9 倍）。
- 保护的代价：非高峰时可忽略，四站点案例事件时段为 AI 吞吐的 4.6%；但在运营商场景中，RAN 需求略超过整卡以下的最大 MIG 实例，因此 AI 容量全部让给 RAN。粗粒度 MIG 实例与重尾需求使严格保护代价高昂；均值与变异系数相同时，对数正态尾部需要的切片比二项分布更多。
- 作者自述的局限：保证仅对规划所用需求水平成立（需求计划外增长时会违约）；两阶段补偿、MIG 重配置与学习式需求更新留待后续。

## Why it matters / what's new (EN)

AI-RAN proposals depend on making idle RAN GPU capacity useful without endangering real-time radio processing. This paper contributes an explicit, probabilistic RAN guarantee with a solver that is cheap enough for orchestration timescales, in contrast with learning-based or runtime control approaches the authors cite. The evaluation is calibrated from published capacity figures and uses assumed demand distributions rather than operator traces, so its numbers describe the model's behaviour rather than a deployment.

## Why it matters / what's new (ZH)

AI-RAN 方案的前提是在不危及实时无线处理的情况下利用 RAN GPU 的闲置容量。本文给出显式的概率型 RAN 保证，且求解开销小到适合编排时间尺度，与作者所引的学习式或运行时控制方法形成对照。评估基于公开容量数据标定并使用假设的需求分布而非运营商实测轨迹，因此其数字反映模型行为而非实际部署。

## Images

None.
