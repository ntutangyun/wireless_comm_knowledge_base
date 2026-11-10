---
id: 2026-11-10_arxiv-bounded-autonomy-llm-planner-live-5g-core-testbed
date_published: 2026-11-05
date_found: 2026-11-10
type: academic-paper
technology: cellular
title_en: "Measuring Bounded Autonomy for an LLM Decomposition Planner on a Live 5G-Core Testbed"
title_zh: "在实时 5G 核心网测试床上度量 LLM 分解规划器的有界自治"
url: "https://arxiv.org/abs/2611.08707"
source_quality: full
topics: [5G-core, LLM-agent, bounded-autonomy, AMF, SMF, control-plane-decomposition, FaaS, JSON-schema-validation, autonomous-network-management]
topic_primary: cellular-ai
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)

Pandey and Küpper measure whether hard deterministic bounds around an LLM planner have a real effect, on a live 5G-core testbed. The planner decides when to decompose control-plane procedures (session establishment in the SMF, for example) into stateless handlers. Log-derived pressure indicators feed a deterministic policy and a schema-constrained LLM planner that routes session events between a baseline path and a lambda-style path. A JSON schema constrains the output, a projection-repair validator re-checks it, a deterministic fallback guarantees liveness, and every decision is persisted. The loop is observation-closed but actuation-open: it routes synthetic events and does not reconfigure the core; separate stub handler pods are actuated in one experiment.

The paper's contribution is the measurement rather than the mechanisms, which the authors describe as established.

## Summary (ZH)

Pandey 与 Küpper 在实时 5G 核心网测试床上度量：围绕 LLM 规划器的硬性确定性边界是否真正起作用。该规划器决定何时把控制面流程（如 SMF 的会话建立）分解为无状态处理器。由日志得到的压力指标输入确定性策略与受模式约束的 LLM 规划器，后者在基线路径与 lambda 风格路径之间路由会话事件。JSON 模式约束输出，投影修复校验器再次检查，确定性回退保证活性，每次决策都被持久化。该闭环对观测闭合、对执行开放：只路由合成事件而不重配置核心网；一项实验中驱动了独立的桩处理器 Pod。

论文的贡献在于度量，而作者将这些机制本身视为已有做法。

## Key technical points (EN)

- Unbounded side: with the allowed action sets stated in the prompt but not enforced, the two tested models violated intent-handler rules in 13 of 44 standard calls (0 of 24 adversarial calls). All 13 were combination breaches that the deployed flat schema cannot encode, so schema enforcement as deployed caught 0 of 13; a union schema that encodes the rule removes the class by construction (68 offline calls).
- Bounded side: with the bounds in place, all 33 decoded live plans were feasible without repair, and a matched-condition probe put the in-distribution unbounded violation rate at 1 in 20 windows.
- Case study: a corrected campaign of 63 runs and 7,150 events under live multi-SIM SMF pressure, quiescent runs that close the decompose/keep boundary, and ten decisions actuated on handler pods.
- Exploratory observation (the authors report it as a hypothesis, not a contribution): on the design set the planner matched an author-specified selection reference that a threshold policy and three a priori codings each missed; transfer to held-out scenarios was partial (5 to 6 of 10), and the planner's two-clause distillate could replace the runtime planner, which the authors read as favouring elicitation and distillation over runtime control as the LLM's role.
- Scope limits: whether decomposition is actually beneficial needs a real FaaS runtime and is left to future work; the paper addresses whether the decision can be made safely, traceably and cheaply enough to pose that question live.

## Key technical points (ZH)

- 无边界一侧：在提示中说明允许的动作集但不强制执行时，两个被测模型在 44 次标准调用中有 13 次违反意图-处理器规则（24 次对抗调用中为 0 次）。这 13 次均为已部署的扁平模式无法编码的组合违规，因此现有模式校验捕获 0/13；编码该规则的联合模式可从构造上消除这一类（68 次离线调用）。
- 有边界一侧：启用边界后，33 个解码的实时计划全部可行且无需修复；在匹配条件探测中，分布内无边界违规率为 20 个窗口中 1 次。
- 案例研究：在实时多 SIM 的 SMF 压力下进行 63 次运行、7150 个事件的修正后测试，静默运行用于确定分解/保持的边界，并有十次决策驱动了处理器 Pod。
- 探索性观察（作者将其作为假设而非贡献）：在设计集上，规划器与一份作者指定的选择参照一致，而阈值策略和三种先验编码均未做到；向留出场景的迁移为部分成立（10 个中的 5 至 6 个），规划器的两句话提炼结果可取代运行时规划器，作者据此认为 LLM 的作用应是规则萃取与蒸馏，而非运行时控制。
- 范围限制：分解是否真正有益需要真实的 FaaS 运行时，留待后续；本文回答的是这一决策能否足够安全、可追溯且低成本，从而能够在线提出该问题。

## Why it matters / what's new (EN)

LLMs are entering network-management control loops, as the authors note, and this paper offers an empirical check of a specific guardrail design on a real 5G core rather than a simulator: flat schemas miss rule violations that arise from combinations of valid fields, and a validator plus fallback keeps live plans feasible. The loop never actuates the core itself, results come from one host and one core with small scenario counts, and the benefit of decomposition is untested, so the results speak to safety of the decision layer only.

## Why it matters / what's new (ZH)

作者指出 LLM 正在进入网络管理控制闭环，本文在真实 5G 核心网而非仿真器上对一种具体的护栏设计做了实证检验：扁平模式会漏掉由有效字段组合产生的规则违规，而校验器加回退可使实时计划保持可行。该闭环并不实际驱动核心网，结果来自单一主机与单一核心网，且场景数量较少，分解的收益也未经验证，因此结果仅说明决策层的安全性。

## Images

![Ablation of the bounded planner: violation rates with and without schema, validator and fallback | 有界规划器消融：有无模式、校验器与回退时的违规率](https://arxiv.org/html/2611.08707v1/fig_ablation.png)
