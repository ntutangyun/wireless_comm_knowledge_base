---
id: 2026-11-02_arxiv-language-models-orchestrate-edge-cloud-continuum-survey
date_published: 2026-10-29
date_found: 2026-11-02
technology: edge-ai
type: academic-paper
title_en: "Can we rely on language models to orchestrate services across the edge-cloud continuum?"
title_zh: "能否依赖语言模型编排边缘-云连续体中的服务？"
url: "https://arxiv.org/abs/2610.40477"
source_quality: full
topics: [service-orchestration, edge-cloud-continuum, LLM-agents, survey, closed-loop-remediation, assurance]
topic_primary: edge-orchestration
topics_secondary: [compute-offloading]
novelty_score: 2
---

## Summary (EN)

The survey looks at orchestration across the edge-cloud continuum, where decisions about where workloads run, how resources are allocated and how services adapt are coupled, and where language models (LMs) are increasingly used to turn intents and operational evidence into scheduling, configuration, diagnosis and remediation decisions. Its stated starting point is that useful model output does not by itself establish dependable orchestration; reliability also depends on where the LM enters the decision process, what authority it has, how actions are constrained and what system-level evidence supports the claimed effect.

It reviews 39 primary studies, using the LM-enabled service-orchestration decision as the unit of analysis, and builds a five-dimensional framework (named SPACE in the paper): System Context, Problem and Decision, LM Agency, Control and Assurance, and Evidence and Maturity. Three research questions cover which orchestration decisions LMs support, how LMs are integrated (roles and authority, operational assurance), and what evaluation evidence exists. The paper contrasts itself with earlier surveys organised by continuum paradigm, network or AIOps task, LM application or operational agent.

Findings as stated: designs are predominantly hybrid, with LMs supporting interpretation, candidate generation and mitigation planning while downstream components usually keep feasibility enforcement, authorisation and privileged execution. Bounded closed-loop remediation is emerging, but continuum-specific constraints are unevenly represented in decision formulations and production-scale evidence across heterogeneous edge-cloud environments is limited. Evaluations range from artifact validity and decision quality to executed interventions and verified recovery, which support different strengths of claim.

## Summary (ZH)

这篇综述关注边缘-云连续体中的编排：工作负载在哪里运行、如何分配资源、服务如何自适应，这些决策相互耦合；语言模型（LM）越来越多地被用于把意图和运行证据转化为调度、配置、诊断和修复决策。论文的出发点是：有用的模型输出本身并不能保证编排可靠；可靠性还取决于 LM 在决策流程中的介入位置、被授予的权限、动作受到何种约束，以及何种系统级证据支撑所声称的效果。

论文系统性地回顾了 39 项原始研究，以"LM 参与的服务编排决策"为分析单位，构建了五维框架（论文称为 SPACE）：系统上下文、问题与决策、LM 能动性、控制与保障、证据与成熟度。三个研究问题分别涉及 LM 支持哪些编排决策、LM 如何集成（角色与权限、运行保障），以及现有哪些评估证据。论文将自身与此前按连续体范式、网络或 AIOps 任务、LM 应用或运维智能体组织的综述加以区分。

论文所述的发现：设计以混合型为主，LM 负责解释、生成候选方案和规划缓解措施，而下游组件通常保留可行性校验、授权和特权执行。有边界的闭环修复正在出现，但连续体特有的约束在决策建模中体现得不均衡，跨异构边缘-云环境的生产规模证据有限。评估从产物有效性、决策质量，到已执行的干预和经核实的恢复，不同层级支持强度不同的结论。

## Key technical points (EN)

- **Scope**: 39 primary studies on LM-enabled service orchestration across the edge-cloud continuum.
- **Unit of analysis**: the orchestration decision, linked to managed state, LM participation, downstream control and evaluated outcome.
- **Framework**: five dimensions - System Context, Problem and Decision, LM Agency, Control and Assurance, Evidence and Maturity.
- **Pattern found**: hybrid designs; LMs interpret and propose, other components enforce feasibility and execute.
- **Gap stated**: production-scale evidence of closed-loop control across heterogeneous edge-cloud environments is limited.
- **Type**: literature review; no new system or measurements.

## Key technical points (ZH)

- **范围**：39 项关于边缘-云连续体中 LM 参与服务编排的原始研究。
- **分析单位**：编排决策，关联被管理状态、LM 参与方式、下游控制与评估结果。
- **框架**：五个维度——系统上下文、问题与决策、LM 能动性、控制与保障、证据与成熟度。
- **发现的模式**：混合型设计；LM 负责解释与提议，其他组件负责可行性校验与执行。
- **论文指出的缺口**：跨异构边缘-云环境的闭环控制缺乏生产规模证据。
- **类型**：文献综述；无新系统或测量。

## Why it matters / what's new (EN)

This is a map of a fast-growing sub-area rather than a technical result: it shows where LM authority is limited in the surveyed systems and how the evidence offered differs in strength. It concerns using LMs to run edge-cloud infrastructure, which is the orchestration side of this domain rather than inference placement itself. Network-side AI/ML for 5G/6G and MEC platform architecture belong to the cellular coverage and are not the subject here.

## Why it matters / what's new (ZH)

这是对一个快速增长的子领域的梳理，而非技术性结果：它展示了在所综述的系统中 LM 的权限受到何种限制，以及所提供证据的强度差异。其关注点是用 LM 运行边缘-云基础设施，属于本领域的编排侧，而非推理放置本身。5G/6G 网络侧 AI/ML 与 MEC 平台架构属于蜂窝方向的内容，不在本文范围。

## Images

*(No redistributable images for this entry.)*
