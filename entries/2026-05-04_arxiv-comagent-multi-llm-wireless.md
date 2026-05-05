---
id: 2026-05-04_arxiv-comagent-multi-llm-wireless
date_published: 2026-01-27
date_found: 2026-05-04
type: academic-paper
title_en: "ComAgent: Multi-LLM Agentic AI Empowered Intelligent Wireless Networks"
title_zh: "ComAgent：多 LLM 智能体协同赋能的无线网络优化框架"
url: "https://arxiv.org/abs/2601.19607"
source_quality: full
topics: [agentic-AI]
topic_primary: agentic-wifi
topics_secondary: []
novelty_score: 4
---

## Summary (EN)

ComAgent (Li, Xiao, Wang, Schober, Kim, Guan; arxiv 2601.19607, submitted 27 Jan 2026) proposes a closed-loop multi-LLM agentic framework for wireless network optimization that decomposes the workflow into four specialized agents — Literature, Planning, Coding, and Scoring — operating under a Perception-Planning-Action-Reflection cycle. The motivating gap is that monolithic LLMs invoked end-to-end on wireless design tasks lack domain grounding, generate non-executable formulations, and have no built-in mechanism to verify physical constraints (TX power, MIMO orthogonality, SWIPT energy budget). ComAgent instead grounds each step: the Literature Agent retrieves and filters domain knowledge through iterative search refinement, the Planning Agent uses CoT / ReAct / plan-and-solve prompting to translate that grounded knowledge into a solver-ready optimization plan, the Coding Agent emits modular executable simulation code, and the Scoring Agent runs physics-aware validation with error-handling and constraint-satisfaction branches.

The empirical result that anchors the paper is the head-to-head comparison on a benchmark of beamforming / SWIPT problems. A single-LLM baseline produces a *valid problem formulation* in 0% of trials (no plan-and-solve scaffolding), 56% with plan-and-solve, and **100% with the full ComAgent pipeline**. Code execution rate jumps from 24% (single LLM) to 88% (LLM+PS) to **100%** (ComAgent). End-to-end "solution solved" rate climbs from 24% → 56% → **72%**, and 1st-try success rate from 4% → 20% → **32%**. On a MIMO SWIPT beamforming task, the agent-generated solver matches the WMMSE expert baseline across power-budget and antenna-count sweeps, while a zero-forcing baseline trails substantially.

Compared with the existing KB entries on agentic wireless — `arxiv-wirelessbench-llm-agent` (a benchmark, not a system), `arxiv-wirelessagent-plus-plus` (Monte Carlo Tree Search workflow synthesis), `arxiv-mapc-llm-agents` (LLM-driven MAPC scheduling), `arxiv-on-device-llm-roaming` (single-agent on-device roaming), `arxiv-llm-rl-wireless-optimization` and `arxiv-llm-6ghz-wifi-nru-coexistence` — ComAgent's distinct contribution is the **execution-based verification loop**: it does not just plan, it codes the plan into runnable Python and validates the result against wireless physics constraints, which is what raises the formulation-correctness rate to 100%. This is the closest existing work to the agentic-Wi-Fi research line where you would want an AP to autonomously rewrite its own scheduler under a high-level objective.

## Summary (ZH)

ComAgent（Li、Xiao、Wang、Schober、Kim、Guan，arxiv 2601.19607，2026 年 1 月 27 日提交）提出一种闭环多 LLM 智能体框架，用于无线网络优化。框架将工作流分解为四个专用智能体——文献检索（Literature）、规划（Planning）、编码（Coding）、评分（Scoring）——并在 感知-规划-行动-反思 循环中协同。其动机是：端到端调用单一 LLM 处理无线设计任务时，缺乏领域基础、产出的优化建模无法被求解器消化、也没有机制核验物理约束（发射功率、MIMO 正交性、SWIPT 能量预算）。ComAgent 在每一步引入接地：文献智能体通过迭代检索改写不断逼近领域知识；规划智能体借助 CoT / ReAct / plan-and-solve 提示将知识翻译为可求解的优化规划；编码智能体生成模块化可执行仿真代码；评分智能体执行物理感知校验，带有错误处理和约束满足两条分支。

支撑论文的关键数据来自波束成形 / SWIPT 问题基准的对照实验。单 LLM 基线产生**合法优化建模**的概率为 0%（无 plan-and-solve 支架）、56%（加 plan-and-solve）、**100%**（完整 ComAgent）。代码执行成功率由 24%（单 LLM）→ 88%（LLM+PS）→ **100%**（ComAgent）。端到端"求解成功"率由 24% → 56% → **72%**，首次尝试成功率由 4% → 20% → **32%**。在 MIMO SWIPT 波束成形任务上，智能体生成的求解器在功率预算与天线数量两个维度的扫描中与 WMMSE 专家基线相当，零强制基线显著落后。

相对 KB 中已有的 agentic 无线条目——`arxiv-wirelessbench-llm-agent`（基准而非系统）、`arxiv-wirelessagent-plus-plus`（基于 MCTS 的工作流合成）、`arxiv-mapc-llm-agents`（LLM 驱动的 MAPC 调度）、`arxiv-on-device-llm-roaming`（端侧单智能体漫游）、`arxiv-llm-rl-wireless-optimization`、`arxiv-llm-6ghz-wifi-nru-coexistence`——ComAgent 的独特贡献是 **基于执行的校验循环**：它不仅规划，还将规划编码为可运行的 Python 代码，并对照无线物理约束校验结果，正是这一步把建模正确率拉到 100%。这是与"AP 在高层目标下自主改写调度器"这一 agentic Wi-Fi 路线最贴近的现有工作。

## Key technical points (EN)

- Four-agent decomposition: Literature (retrieval + filtering) → Planning (CoT/ReAct/plan-and-solve) → Coding (executable simulation) → Scoring (physics-aware validation).
- Closed-loop Perception-Planning-Action-Reflection cycle replaces single-shot LLM prompting.
- Physics-aware validation includes TX-power feasibility, MIMO constraint checks, SWIPT energy budget — beyond syntax-level correctness.
- Self-correction: when the Scoring Agent fails a constraint, the failure feedback re-enters the Planning Agent for iterative refinement.
- Headline metrics: 100% problem formulation rate, 100% code execution rate, 72% solution-solved rate, 32% 1st-try success rate (vs single-LLM baselines of 0% / 24% / 24% / 4%).
- MIMO SWIPT beamforming: agent-generated solver matches WMMSE across power-sweep and antenna-count sweeps.
- Average attempt count drops from 2.88 (single LLM) to 2.12 (ComAgent), indicating not just higher accuracy but faster convergence.

## Key technical points (ZH)

- 四智能体分解：文献（检索 + 过滤） → 规划（CoT / ReAct / plan-and-solve） → 编码（可执行仿真） → 评分（物理感知校验）。
- 闭环 感知-规划-行动-反思 循环取代了 LLM 的"一次提示"模式。
- 物理感知校验包括发射功率可行性、MIMO 约束、SWIPT 能量预算——超越语法层面的正确性。
- 自校正：当评分智能体未通过约束时，失败反馈回流到规划智能体进行迭代精化。
- 关键指标：建模正确率 100%、代码执行成功率 100%、端到端求解率 72%、首次尝试成功率 32%（对照单 LLM 基线 0% / 24% / 24% / 4%）。
- MIMO SWIPT 波束成形：智能体生成的求解器在功率扫描与天线数量扫描中与 WMMSE 持平。
- 平均尝试次数由 2.88（单 LLM）降至 2.12（ComAgent），说明不仅更准、且收敛更快。

## Why it matters / what's new (EN)

The KB already documents a half-dozen agentic-wireless papers, but most stop at *intent-to-plan* (let an LLM choose configuration knobs); they don't test whether the resulting plan is physically feasible. ComAgent is the first KB-tracked work that closes the loop with an execution-based verifier. That distinction matters for the path toward an agentic Wi-Fi AP: an AP that lets an LLM rewrite its scheduler must be able to reject infeasible plans before applying them on-air. The 100% formulation rate (vs 0% for the single-LLM baseline) is the concrete evidence that the verification loop, not the LLM choice, is what unlocks usable autonomy. Compared to `arxiv-wirelessagent-plus-plus`'s MCTS-based workflow synthesis, ComAgent leans more on physics-grounded scoring; compared to `arxiv-mapc-llm-agents`, it's a general optimization framework rather than a MAPC-specific scheduler. Both axes are worth tracking as the field consolidates.

## Why it matters / what's new (ZH)

KB 已记录数篇 agentic 无线相关论文，但多数停留在"意图到规划"（让 LLM 选择配置旋钮）；它们并不验证产出的规划是否物理可行。ComAgent 是 KB 中首篇用基于执行的验证器闭环的工作。这一区别对"agentic Wi-Fi AP"的演进至关重要：让 LLM 重写调度器的 AP 必须能在空口下发前拒绝不可行的规划。100% 的建模正确率（对比单 LLM 基线的 0%）正是关键证据——使可用自主性落地的是这条验证回路，而非 LLM 模型本身。相对 `arxiv-wirelessagent-plus-plus` 的 MCTS 工作流合成，ComAgent 更依赖物理感知打分；相对 `arxiv-mapc-llm-agents`，它是通用优化框架而非 MAPC 专用调度器。这两条路线都值得在领域整合期持续跟踪。

## Images
![ComAgent four-agent framework overview | ComAgent 四智能体框架总览](https://arxiv.org/html/2601.19607v1/x1.png)
![Average sum-rate vs transmit power: ComAgent matches WMMSE expert baseline | 平均和速率随发射功率变化：ComAgent 与 WMMSE 专家基线持平](https://arxiv.org/html/2601.19607v1/x4.png)
