---
id: 2026-09-16_arxiv-network-slice-decomposition-contextual-bandits
date_published: 2026-09-09
date_found: 2026-09-16
type: academic-paper
technology: cellular
title_en: "Contextual Bandit-Based Decomposition of Network Slice Requirements under Cumulative Resource Budget Constraints"
title_zh: "累积资源预算约束下基于情境赌博机的网络切片需求分解方法"
url: "https://arxiv.org/abs/2609.09624"
source_quality: full
topics: [network-slicing, contextual-bandits, Gaussian-process, primal-dual-optimization, SLA]
topic_primary: network-slicing
topics_secondary: [5g-nr]
novelty_score: 4
---

## Summary (EN)

Masaki Kobayashi, Akito Suzuki, Ryoichi Kawahara, and Masahiro Kobayashi address the network slice request decomposition problem (NSR-DP): when a tenant submits an end-to-end slice request with SLA targets, an end-to-end controller must decompose it into domain-level requirements for the access network (AN), transport network (TN), and core network (CN) — each managed by its own autonomous domain-specific controller, matching real standardized 5G management architecture rather than assuming direct cross-domain resource control. Poor decomposition either gets the request rejected outright (if a domain requirement is infeasible) or silently depletes a bottleneck domain's long-term capacity, reducing future admission chances. The authors formalize two requirements a decomposition strategy must satisfy jointly: (R1) long-term cumulative resource-budget control across the planning horizon, and (R2) request-conditioned decomposition that adapts to each arriving request's specific SLA targets. The paper states that its own prior linear-contextual-bandits-with-knapsacks (linCBwK) formulation already satisfies both R1 and R2 but retains two limitations — (L1) a finite/discrete decomposition search and (L2) an assumption of linear realizability — while the Bayesian-optimization method Odin, whose CONFIG-type formulation is the closest exploration-aware prior work, satisfies neither R1 nor R2.

Their proposed method, Contextual Constrained Kernel Bandits (CCKB), pairs a primal-dual mechanism operating in a continuous (not discrete) decomposition space with contextual Gaussian Process models: one GP predicts reward as a function of decomposition and request context, and separate GPs predict resource consumption per domain resource. The primal step selects a decomposition for the current request; the dual step updates budget-penalty weights from cumulative usage so far, so dual penalties rise automatically as a resource nears its budget and discourage high-consumption decompositions going forward. A key practical innovation is a "conservative proxy" target: because many requests get rejected and many resources appear in only some request topologies, raw consumption observations are zero-dominated and bias the GP toward underestimating consumption; CCKB instead defines training targets only from successful admission rounds and only for resources actually present in that request's topology, and derives regret bounds for the resulting proxy problem (including a term quantifying the sub-optimality this proxy introduces). Evaluated in a 5G network simulator across 12 topology-bottleneck conditions (four topologies x three domain-bottleneck profiles that scale AN, TN or CN capacity to 0.2 of its maximum, 10 runs each), CCKB achieves higher mean Total Reward than the authors' own prior linCBwK method in every one of the 12 conditions, and higher than CONFIG — the non-contextual constrained-BO method on which Odin's design is based, substituted for Odin because Odin's objective and constraint model differ from this formulation — in 9 of the 12 conditions.

## Summary (ZH)

Masaki Kobayashi、Akito Suzuki、Ryoichi Kawahara 与 Masahiro Kobayashi 研究了网络切片请求分解问题（NSR-DP）：当租户提交一个带有 SLA 目标的端到端切片请求时，端到端控制器必须将其分解为接入网（AN）、传输网（TN）与核心网（CN）三个域级别的需求——每个域均由其自身自治的域控制器管理，这与真实的标准化 5G 管理架构相符，而非假设可直接跨域管理资源。分解策略不佳会导致两种后果：要么请求因某一域的需求不可行而被直接拒绝，要么悄然耗尽某个瓶颈域的长期容量，从而降低未来的接纳几率。作者形式化定义了分解策略必须同时满足的两项要求：（R1）在整个规划周期内对累积资源预算进行长期控制；（R2）分解结果需依据每一个到达请求的具体 SLA 目标进行条件化调整。论文指出，其此前提出的线性情境赌博机加背包（linCBwK）方案已同时满足 R1 与 R2，但保留了两项局限——（L1）分解方案搜索空间为有限离散集合，（L2）假设线性可实现性；而作为最接近的探索感知先前工作、采用 CONFIG 型形式化的贝叶斯优化方法 Odin，则 R1 与 R2 均不满足。

作者提出的方法——情境约束核赌博机（Contextual Constrained Kernel Bandits，CCKB）——将一种在连续（而非离散）分解空间上运行的原始-对偶机制，与情境高斯过程（GP）模型相结合：一个 GP 以分解方案与请求情境为输入预测收益，另有若干独立的 GP 分别预测各域资源的消耗量。原始步骤为当前请求选择一个分解方案；对偶步骤则根据迄今为止的累积使用量更新预算惩罚权重，使得当某项资源逼近预算上限时，对偶惩罚会自动上升，从而抑制后续高消耗的分解方案。一项关键的实践创新是"保守代理"目标：由于许多请求会被拒绝，且许多资源仅出现在部分请求拓扑中，原始的消耗观测数据存在大量零值，会使 GP 偏向低估消耗量；为此，CCKB 仅从成功接纳的轮次中构建训练目标，且仅针对该请求拓扑中实际存在的资源进行建模，并为由此产生的代理问题推导了遗憾界（其中包含一项量化该代理方法所引入次优性的项）。在 5G 网络仿真器中跨 12 种拓扑-瓶颈条件（四种拓扑 × 三种域瓶颈配置，分别将 AN、TN 或 CN 的容量缩放至上限的 0.2 倍，每种条件 10 次随机种子运行）进行评估：CCKB 在全部 12 种条件下的平均总收益均高于作者此前的 linCBwK 方法；与 CONFIG（Odin 设计所基于的非情境约束贝叶斯优化方法，因 Odin 的目标与约束模型与本文形式化不同而以其替代 Odin）相比，CCKB 在 12 种条件中的 9 种取得更高的平均总收益。

## Key technical points (EN)

- Problem: NSR-DP decomposes an end-to-end 5G network slice request (SLA targets R, g) into domain-level requirements for AN/TN/CN, each managed by an autonomous domain-specific controller (matching real standardized architecture, not assuming direct cross-domain resource control).
- Two jointly-required properties: (R1) long-term cumulative resource-budget control over the planning horizon; (R2) request-conditioned decomposition adapting to each request's specific SLA targets. The authors' prior linCBwK method satisfies both R1 and R2 but retains limitations (L1) finite/discrete decomposition search and (L2) linear realizability; Odin's CONFIG-type Bayesian-optimization formulation satisfies neither R1 nor R2.
- CCKB method: primal-dual optimization in continuous decomposition space + contextual Gaussian Processes — one GP for reward f(s,x), separate GPs for per-resource consumption c_{d,j}(s,x); dual step raises budget-penalty weights as cumulative usage approaches capacity.
- "Conservative proxy" target formulation: trains only on successful-admission rounds and only over resources present in that request's topology, correcting the zero-dominated-observation bias that would otherwise make GPs underestimate consumption; comes with derived regret bounds including a proxy-suboptimality term and high-probability cumulative constraint-violation guarantees.
- Decision loop per round t: observe request s_t -> GP posteriors predict reward/consumption for candidate decompositions -> primal-dual selection under current dual penalties -> observe admission outcome Y_t and consumption U_t -> update dual penalties if constraints are approached.
- Evaluation: 12 topology-bottleneck conditions in a 5G network simulator (four topologies x AN/TN/CN bottleneck profiles at 0.2 capacity, 10 seeds each); CCKB beats linCBwK on mean Total Reward in all 12 conditions and CONFIG (Odin's design basis, used in place of Odin) in 9 of 12. A separate heterogeneous-request experiment sweeps the eMBB mixing ratio over six topology-bottleneck conditions.

## Key technical points (ZH)

- 问题定义：NSR-DP 将一个带 SLA 目标（R，g）的端到端 5G 网络切片请求，分解为 AN/TN/CN 三个域级别的需求，每个域均由其自治的域控制器管理（对应真实标准化架构，而非假设可直接跨域管理资源）。
- 两项需同时满足的要求：（R1）在整个规划周期内对累积资源预算进行长期控制；（R2）分解结果需根据每个请求的具体 SLA 目标进行条件化调整。作者此前的 linCBwK 方法同时满足 R1 与 R2，但保留了（L1）有限离散分解搜索与（L2）线性可实现性两项局限；Odin 的 CONFIG 型贝叶斯优化形式化则 R1 与 R2 均不满足。
- CCKB 方法：在连续分解空间中进行原始-对偶优化，并结合情境高斯过程——一个 GP 预测收益 f(s,x)，另有独立 GP 分别预测各域资源消耗 c_{d,j}(s,x)；对偶步骤会随累积使用量逼近容量上限而提高预算惩罚权重。
- "保守代理"目标构造：仅基于成功接纳的轮次进行训练，且仅针对该请求拓扑中实际存在的资源建模，纠正了原本会使 GP 低估消耗量的零值主导观测偏差；并为此推导了遗憾界（含量化代理方法次优性的项）以及高概率的累积约束违反保证。
- 每轮 t 的决策流程：观察到达请求 s_t → 通过 GP 后验预测候选分解方案的收益/消耗 → 在当前对偶惩罚下进行原始-对偶选择 → 观察接纳结果 Y_t 与消耗量 U_t → 若接近约束则更新对偶惩罚。
- 评估：在 5G 网络仿真器中跨 12 种拓扑-瓶颈条件（四种拓扑 × AN/TN/CN 三种瓶颈配置、容量缩放至 0.2 倍，每种条件 10 个随机种子）进行评估；CCKB 在全部 12 种条件下的平均总收益均高于 linCBwK，在 12 种条件中的 9 种高于 CONFIG（Odin 设计所基于的方法，用以替代 Odin）。另有一组异构请求实验，在六种拓扑-瓶颈条件下扫描 eMBB 混合比例。

## Why it matters / what's new (EN)

The KB already covers network-slicing resource-allocation work from several angles (e.g. 2026-08-24 ORCHRA stateful cross-slice migration, 2026-09-03 TriSLA preventive closed-loop slicing, 2026-08-18 xCode offline MARL slicing), but this is the first entry addressing the upstream decomposition step — translating a single end-to-end SLA request into domain-level sub-requests before any of those downstream allocation mechanisms act — and the first to combine primal-dual budget control with contextual kernel bandits over a continuous decomposition space. The authors position this as preserving the two requirements their earlier linCBwK formulation already met (R1 long-horizon budget control, R2 request-conditioned decomposition) while relaxing its finite/discrete search and linear-realizability limitations — requirements the closest exploration-aware alternative, Odin's CONFIG-type Bayesian optimization, does not meet at all.

## Why it matters / what's new (ZH)

本知识库此前已从多个角度收录网络切片资源分配相关工作（如 2026-08-24 的 ORCHRA 有状态跨切片迁移、2026-09-03 的 TriSLA 预防性闭环切片、2026-08-18 的 xCode 离线多智能体强化学习切片），但本条目是首个针对上游分解环节的条目——即在下游任何分配机制介入之前，将单一端到端 SLA 请求转化为域级别子需求；同时也是首个将原始-对偶预算控制与连续分解空间上的情境核赌博机相结合的条目。作者将其定位为：在保留此前 linCBwK 方案已满足的两项要求（R1 长周期预算控制、R2 按请求条件化分解）的同时，放宽其有限离散搜索与线性可实现性两项局限；而最接近的探索感知替代方案——Odin 的 CONFIG 型贝叶斯优化——则完全不满足这两项要求。

## Images

![Network slicing management architecture: a 5G network's access, transport, and core domains, each with a domain-specific controller under a hierarchical end-to-end controller | 网络切片管理架构：5G 网络的接入、传输与核心域，各自由域控制器管理，并置于分层的端到端控制器之下](https://arxiv.org/html/2609.09624v1/network_slicing_and_architecture.png)
![Network slice provisioning procedure: request decomposition, per-domain feasibility check, and end-to-end admission outcome | 网络切片供给流程：请求分解、各域可行性检查与端到端接纳结果](https://arxiv.org/html/2609.09624v1/procedure.png)
