---
id: 2026-08-18_arxiv-drl-6g-open-ai-ran-survey
date_published: 2026-08-14
date_found: 2026-08-18
type: academic-paper
technology: cellular
title_en: "Deep Reinforcement Learning for 6G AI-RAN: A Comprehensive Survey (O-RAN-Aware MDP Design, Use-Case Taxonomy, Trustworthy DRL and the Training-to-Deployment Lifecycle)"
title_zh: "面向 6G AI-RAN 的深度强化学习综述：O-RAN 感知的 MDP 设计、用例分类、可信 DRL 与从训练到部署的全生命周期"
url: "https://arxiv.org/abs/2608.14877"
source_quality: full
topics: [AI-RAN, O-RAN, deep-reinforcement-learning, RIC, xApp, rApp, multi-agent-RL, federated-RL, foundation-models, trustworthy-AI, sim-to-real, RLOps, survey]
topic_primary: cellular-ai
topics_secondary: [open-ran, 6g-vision]
novelty_score: 2
---

## Summary (EN)
Lu, Yan, Wang, Lin and Zeng (Michigan State University; arXiv 14 Aug 2026, ~50 pages, ~390 references) present what they describe as the **first dedicated, comprehensive survey of deep reinforcement learning (DRL) for Open AI-RAN** — filling the space between broad "AI/ML in O-RAN" surveys (Polese et al., Kirana et al., Brik et al.) and narrow ones (explainable DRL for slicing, xApp catalogues). The organising idea is to treat **O-RAN as a designed environment for DRL**: the RIC hierarchy (Non-RT RIC rApps >1 s, Near-RT RIC xApps 10 ms–1 s, dApps <10 ms), the O1/A1/E2/O2 interfaces and the SMO/O-Cloud determine what an agent can observe, which actions it can apply, and how models are lifecycle-managed — so the survey builds an **O-RAN-aware MDP design framework** (states/observations from KPMs and E2 service models, action abstractions per control loop, reward/constraint construction, temporal structure) before reviewing algorithms.

Sections cover DRL foundations (value-based, policy-gradient, model-based, offline, safe, multi-agent, federated, transfer); a **use-case taxonomy by control loop and timescale** — radio resource management, mobility management, spectrum/interference control, load balancing and traffic steering, energy efficiency, network slicing/QoS, ISAC, security, and massive MIMO; multi-agent and federated coordination (cross-xApp coordination, hierarchical loops, multi-vendor federation); **encoder architectures for variable-size RAN state** (permutation-invariant/set models, GNNs); **foundation models and agentic AI** for DRL control (LLMs as policies, reward models and world models; decision transformers over O-RAN telemetry); trustworthy DRL (robustness, safety filters, explainability, privacy) mapped to O-RAN Alliance WG2/WG3/WG11 and 3GPP/ETSI AI/ML work; and an end-to-end training-to-deployment pipeline (digital-twin sim-to-real transfer, sample efficiency, continual adaptation, latency-bounded inference, RLOps: packaging, versioning, monitoring, rollback, audit trail).

The platform/benchmark chapter is the most actionable part. It reviews Colosseum, ColO-RAN, OpenRAN Gym, ns-O-RAN, OAIC, PandORA (automated DRL xApp design), EXPLORA (explainability in an O-RAN-compliant Near-RT RIC) and AdvO-RAN (adversarial attacks on learning xApps), and argues that "the remaining gap is not the absence of platforms but the absence of shared experimental contracts": it proposes a minimum decision-centric trajectory record (s_t, a_t, r_t, s_{t+1}, control delay Δ_t, context z_t), three mandatory baseline classes (rule-based, non-DRL optimisation, documented standard DRL), multi-seed reporting with confidence intervals, full MDP/hyper-parameter disclosure, explicit O-RAN placement (xApp/rApp/dApp, KPMs, service model, measured — not assumed — inference and action-delivery latency), and robustness evaluation under distribution shift, bursts, delayed telemetry and adversarial perturbation.

## Summary (ZH)
Lu、Yan、Wang、Lin 与 Zeng（密歇根州立大学；2026 年 8 月 14 日 arXiv，约 50 页、约 390 篇参考文献）给出他们所称的**首篇专门、全面的“面向 Open AI-RAN 的深度强化学习（DRL）”综述**——填补了泛泛的“O-RAN 中的 AI/ML”综述（Polese 等、Kirana 等、Brik 等）与窄域综述（切片可解释 DRL、xApp 目录）之间的空白。核心思路是把 **O-RAN 视为为 DRL 设计的环境**：RIC 层级（Non-RT RIC rApp >1 s、Near-RT RIC xApp 10 ms–1 s、dApp <10 ms）、O1/A1/E2/O2 接口与 SMO/O-Cloud 决定了智能体能观测什么、能施加哪些动作、模型如何被生命周期管理——因此综述在回顾算法之前先构建了 **O-RAN 感知的 MDP 设计框架**（来自 KPM 与 E2 服务模型的状态/观测、按控制环划分的动作抽象、奖励/约束构造、时间结构）。

章节涵盖 DRL 基础（值方法、策略梯度、基于模型、离线、安全、多智能体、联邦、迁移）；**按控制环与时间尺度划分的用例分类**——无线资源管理、移动性管理、频谱/干扰控制、负载均衡与流量引导、能效、网络切片/QoS、ISAC、安全、大规模 MIMO；多智能体与联邦协同（跨 xApp 协调、分层控制环、多厂商联邦）；**面向可变规模 RAN 状态的编码器架构**（置换不变/集合模型、GNN）；用于 DRL 控制的**基础模型与智能体 AI**（LLM 作为策略、奖励模型与世界模型；面向 O-RAN 遥测的决策 Transformer）；可信 DRL（鲁棒性、安全滤波、可解释性、隐私）与 O-RAN 联盟 WG2/WG3/WG11 及 3GPP/ETSI AI/ML 工作的对应；以及从训练到部署的端到端流水线（数字孪生 sim-to-real 迁移、样本效率、持续适应、时延受限推理、RLOps：打包、版本、监控、回滚、审计）。

平台/基准一章最具可操作性。它回顾了 Colosseum、ColO-RAN、OpenRAN Gym、ns-O-RAN、OAIC、PandORA（自动化 DRL xApp 设计）、EXPLORA（O-RAN 兼容 Near-RT RIC 中的可解释性）与 AdvO-RAN（针对学习型 xApp 的对抗攻击），并指出“剩下的差距不是缺平台，而是缺共享的实验契约”：提出以决策为中心的最小轨迹记录（s_t, a_t, r_t, s_{t+1}, 控制时延 Δ_t, 上下文 z_t）、三类必备基线（规则型、非 DRL 优化、有文档的标准 DRL）、多随机种子与置信区间报告、完整 MDP/超参数披露、明确的 O-RAN 位置（xApp/rApp/dApp、KPM、服务模型、实测而非假设的推理与动作下发时延），以及分布偏移、突发、遥测延迟与对抗扰动下的鲁棒性评估。

## Key technical points (EN)
- Scope claim: first survey rated High on all six axes of the authors' comparison table (RL/DRL depth, O-RAN architecture & standards, O-RAN use cases, GenAI/foundation models, trustworthy AI, platforms & deployment); prior surveys are High on at most two.
- O-RAN-aware MDP framework: observations built from KPMs/E2SM telemetry with delay and aggregation; actions constrained by service-model semantics; rewards balancing multi-objective KPIs; constraints via safety filters/action masking; temporal structure per control loop (>1 s rApp, 10 ms–1 s xApp, <10 ms dApp).
- Use-case taxonomy: RRM, mobility/handover, interference & spectrum, traffic steering/load balancing, energy saving (cell/carrier sleep), slicing & QoS enforcement, ISAC, security (anomaly/intrusion), massive-MIMO/beam control — each mapped to loop, timescale and typical algorithm family.
- Advanced paradigms: MADRL with cross-xApp coordination and non-stationarity handling; federated DRL across operators/vendors; permutation-invariant/set/GNN encoders for variable UE/cell/beam counts; LLMs as policy/reward/world model, decision transformers on telemetry.
- Trustworthy DRL: robustness to distribution shift and adversarial xApps (AdvO-RAN), safe RL and runtime verification, explainability (EXPLORA), privacy — aligned with O-RAN WG2 (Non-RT RIC/A1/R1, AI/ML workflow), WG3 (Near-RT RIC/E2), WG11 (security).
- Deployment lifecycle: sim-to-real via digital twins, continual adaptation, resource-efficient inference within RIC latency budgets, RLOps (deployment package, model version, monitoring, rollback, safety envelope, audit trail).
- Benchmark contract: decision-centric trajectories incl. control delay; ≥3 baseline classes; multi-seed + CIs; full MDP/hyper-parameter reporting; explicit O-RAN placement with measured latencies; robustness suites.
- Figures: survey organisation vs O-RAN stack (Fig. 1), O-RAN architecture (Fig. 3), DRL use-case map (Fig. 5) — hosted on arxiv HTML.

## Key technical points (ZH)
- 覆盖范围声明：作者对比表六个维度（RL/DRL 深度、O-RAN 架构与标准、O-RAN 用例、生成式 AI/基础模型、可信 AI、平台与部署）全部为“高”的首篇综述；既有综述最多两项为“高”。
- O-RAN 感知 MDP 框架：观测由带时延与聚合的 KPM/E2SM 遥测构成；动作受服务模型语义约束；奖励平衡多目标 KPI；约束经安全滤波/动作掩码实现；时间结构按控制环划分（>1 s rApp、10 ms–1 s xApp、<10 ms dApp）。
- 用例分类：RRM、移动性/切换、干扰与频谱、流量引导/负载均衡、节能（小区/载波休眠）、切片与 QoS、ISAC、安全（异常/入侵）、大规模 MIMO/波束控制——各自映射到控制环、时间尺度与典型算法族。
- 进阶范式：带跨 xApp 协调与非平稳性处理的 MADRL；跨运营商/厂商的联邦 DRL；面向可变 UE/小区/波束数量的置换不变/集合/GNN 编码器；LLM 作为策略/奖励/世界模型、遥测上的决策 Transformer。
- 可信 DRL：对分布偏移与对抗性 xApp 的鲁棒性（AdvO-RAN）、安全 RL 与运行时验证、可解释性（EXPLORA）、隐私——对应 O-RAN WG2（Non-RT RIC/A1/R1、AI/ML 工作流）、WG3（Near-RT RIC/E2）、WG11（安全）。
- 部署生命周期：数字孪生 sim-to-real、持续适应、RIC 时延预算内的高效推理、RLOps（部署包、模型版本、监控、回滚、安全包络、审计）。
- 基准契约：含控制时延的决策中心轨迹；≥3 类基线；多种子 + 置信区间；完整 MDP/超参数报告；明确 O-RAN 位置与实测时延；鲁棒性测试套件。
- 图：综述结构与 O-RAN 栈对应（图 1）、O-RAN 架构（图 3）、DRL 用例图（图 5）——托管于 arxiv HTML。

## Why it matters / what's new (EN)
The KB's cellular-ai bin is dominated by point contributions — agentic orchestrators (2026-05-22_arxiv-agentic-6g-ai-ran-orchestrator), the LLM/agentic 5G-6G tutorial (2026-07-22_arxiv-llm-agentic-ai-5g6g-tutorial), WirelessOpsAgent (2026-08-15_arxiv-wirelessopsagent-action-assurance-benchmark), forensic and anomaly xApps — plus vendor AI-RAN platform news (2026-07-19_nokia-commercial-ai-ran-platform-e3-dapps). This survey is the reference map that ties those together: it is the first place a reader can find DRL methodology, the O-RAN control-loop/interface constraints, and deployment/benchmark practice in one document, and its "shared experimental contract" checklist is a concrete, citable standard for judging the many DRL-xApp papers the scout ingests. Its explicit inclusion of foundation-model-based control (LLM-as-policy/reward/world-model, decision transformers) also gives a taxonomy for the agentic-RAN entries above. As a survey it introduces no new mechanism (novelty 2), and readers should note it is a single-group synthesis without a systematic-review protocol.

## Why it matters / what's new (ZH)
知识库 cellular-ai 主题以点状贡献为主——智能体编排器（2026-05-22_arxiv-agentic-6g-ai-ran-orchestrator）、LLM/智能体 5G-6G 教程（2026-07-22_arxiv-llm-agentic-ai-5g6g-tutorial）、WirelessOpsAgent（2026-08-15_arxiv-wirelessopsagent-action-assurance-benchmark）、取证与异常检测 xApp——以及厂商 AI-RAN 平台新闻（2026-07-19_nokia-commercial-ai-ran-platform-e3-dapps）。本综述是把这些串起来的参考地图：读者第一次能在同一文档中找到 DRL 方法论、O-RAN 控制环/接口约束与部署/基准实践，其“共享实验契约”清单是评判本 scout 持续摄入的大量 DRL-xApp 论文的具体、可引用标准。它对基于基础模型的控制（LLM 作策略/奖励/世界模型、决策 Transformer）的明确纳入，也为上述智能体 RAN 条目提供了分类框架。作为综述它不引入新机制（新颖度 2），且读者应注意这是单一课题组的综合，未采用系统综述协议。

## Images
![Survey organisation mapped onto the O-RAN control stack (RIC loops and timescales) | 综述结构与 O-RAN 控制栈（RIC 控制环与时间尺度）的对应](https://arxiv.org/html/2608.14877v1/1_organization_v1.png)
![O-RAN architecture used throughout the survey: SMO, Non-RT/Near-RT RIC, O-CU/O-DU/O-RU, O-Cloud and open interfaces | 综述通篇采用的 O-RAN 架构：SMO、Non-RT/Near-RT RIC、O-CU/O-DU/O-RU、O-Cloud 与开放接口](https://arxiv.org/html/2608.14877v1/3_oran_arc.png)
![Taxonomy of DRL use cases in O-RAN by control loop and timescale | 按控制环与时间尺度划分的 O-RAN 中 DRL 用例分类](https://arxiv.org/html/2608.14877v1/5_DRL_UseCases.png)
