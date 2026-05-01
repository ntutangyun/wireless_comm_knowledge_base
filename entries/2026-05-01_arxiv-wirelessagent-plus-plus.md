---
id: 2026-05-01_arxiv-wirelessagent-plus-plus
date_found: 2026-05-01
type: academic-paper
title_en: "WirelessAgent++: Automated Agentic Workflow Design and Benchmarking for Wireless Networks"
title_zh: "WirelessAgent++：面向无线网络的自动化智能体工作流设计与基准测试"
url: "https://arxiv.org/abs/2603.00501"
source_quality: full
topics: [agentic-AI, generative-AI]
novelty_score: 4
---

## Summary (EN)

Tong, Li, Liu, Guo, and Zhang (February 2026) attack a problem that has so far been hidden in plain sight: when LLM agents are applied to wireless-network tasks, the agentic *workflow* — which tools to call, in what order, with what reasoning steps — is hand-crafted and rarely portable. WirelessAgent++ replaces the hand-crafting with an automated **program-search** procedure. Each workflow is treated as a piece of executable code composed of modular operators (retrieval, reasoning, tool use, evaluation), and the design problem becomes "search the space of programs that solve this wireless task."

The search engine is a domain-adapted **Monte Carlo Tree Search (MCTS)** — domain-adapted because the cost function and operator set are wireless-aware (e.g. handling KPI thresholds, tool calls into network controllers). Alongside the framework, the authors release **WirelessBench**, a three-component benchmark suite covering wireless-communication homework problems (reasoning), network slicing (decision-making), and mobile-service assurance (tool use).

Headline numbers: 78.37% / 90.95% / 97.07% scores on the three benchmark axes, with **search cost below $5 per task** — placing the framework firmly in the "cheap to run, easy to redeploy" category. The improvements over baselines are sizeable: up to 31% better than prompt-engineering baselines, 11.1% better than general-purpose program-optimisers. The code is open-sourced.

## Summary (ZH)

Tong、Li、Liu、Guo、Zhang（2026 年 2 月）面对一个此前在显眼处被忽视的问题：当 LLM 智能体被用于无线任务时，智能体*工作流* —— 调用哪些工具、按什么顺序、配什么推理步骤 —— 通常都是手工搭建且很难迁移。WirelessAgent++ 用自动化的**程序搜索**替代手工搭建：把每个工作流视为由模块化算子（检索、推理、工具调用、评估）组成的可执行代码，于是设计问题变成"在能解决该无线任务的程序空间中搜索"。

搜索引擎是一个领域自适应的**蒙特卡洛树搜索（MCTS）**—— 之所以"领域自适应"，是因为代价函数与算子集都对无线任务作了定制（例如处理 KPI 阈值、对网络控制器的工具调用）。框架之外，作者还发布了 **WirelessBench**，一个三模块的基准测试套件：无线通信作业题（推理）、网络切片（决策）、移动业务保障（工具使用）。

关键数据：三项基准上分别达到 78.37% / 90.95% / 97.07%，**单任务搜索成本 < 5 美元** —— 把框架定位在"便宜跑得起、易于重部署"区间。相对基线提升显著：相对提示工程基线最高 +31%，相对通用程序优化器 +11.1%。代码开源。

## Key technical points (EN)

- Agentic workflow expressed as **executable code** of modular operators
- Domain-adapted **MCTS** as the workflow-search engine
- **WirelessBench** released: communication homework (reasoning), network slicing (decision), service assurance (tool use)
- Headline scores: 78.37 / 90.95 / 97.07 % across the three axes
- Search cost < $5 / task; up to +31% over prompting baselines, +11.1% over general program optimisers
- Open-sourced code

## Key technical points (ZH)

- 智能体工作流表示为由模块化算子组成的**可执行代码**
- 领域自适应 **MCTS** 作为工作流搜索引擎
- 发布了 **WirelessBench**：通信作业题（推理）、网络切片（决策）、业务保障（工具调用）
- 三轴关键得分：78.37 / 90.95 / 97.07%
- 单任务搜索成本 < 5 美元；相对提示工程基线最高 +31%，相对通用程序优化器 +11.1%
- 代码开源

## Why it matters / what's new (EN)

- **Pushes wireless agentic AI past the prompt-engineering era.** Today most "agent for wireless" papers ship a hand-crafted prompt + tool stack. WirelessAgent++ shows that the workflow itself can be searched, and that the search converges quickly and cheaply enough to be redeployed per-task.
- **WirelessBench could become a citation backbone.** A common benchmark with three orthogonal axes (reasoning / decision / tools) is exactly what the field has been missing. Subsequent wireless-agent papers will likely report numbers on this suite.
- **Adjacent to MAPC-LLM (`2026-05-01_arxiv-mapc-llm-agents.md`):** that paper hand-crafts AP-as-LLM-agent workflows. WirelessAgent++ provides a way to *evolve* such workflows automatically — a natural follow-up direction for any agentic Wi-Fi work.

## Why it matters / what's new (ZH)

- **把无线智能体 AI 推过了"提示工程时代"。** 如今"为无线场景做智能体"的论文大多依赖手工搭建的提示 + 工具栈。WirelessAgent++ 证明工作流本身可以被搜索，并且搜索收敛得足够快、足够便宜，可逐任务重部署。
- **WirelessBench 有望成为引用骨干。** "三轴 / 三类任务"基准正是该领域长期缺失的东西，后续无线智能体论文很可能会在此套件上报告结果。
- **与 MAPC-LLM（`2026-05-01_arxiv-mapc-llm-agents.md`）相邻：** 该论文手工搭建了 AP-as-LLM-agent 的工作流。WirelessAgent++ 提供了让这类工作流*自动演化*的方法 —— 是任何智能体 Wi-Fi 工作的自然后续方向。
