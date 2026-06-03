---
id: 2026-06-03_arxiv-agentxgcore-agentic-ai-mobile-core
date_published: 2026-05-29
date_found: 2026-06-03
type: academic-paper
title_en: "AgentxGCore: Agentic AI for Next-Generation Mobile Core Network"
title_zh: "AgentxGCore：面向下一代移动核心网的智能体 AI"
url: "https://arxiv.org/abs/2606.00417"
source_quality: full
technology: cellular
topics: [agentic-AI, mobile-core, 5G-core, LLM-agents, MCP, ReAct, network-automation]
topic_primary: cellular-ai
topics_secondary: [network-slicing, mec]
novelty_score: 3
---

## Summary (EN)
AgentxGCore proposes an agentic-AI-native intelligent layer that extends 3GPP core-network standards so LLM agents can perform autonomous closed-loop control of a 5G/6G core — going beyond the decision-support role most prior LLM-for-network work stops at, and crucially coordinating across both the management layer (MANO) and the control/data planes simultaneously. The architecture has three parts: an Intent Manager that stores and schedules one-shot and continuous-control intents (e.g. "maintain this SLA"); a Network Planner Agent that queries monitoring tools to assess state then uses LLM reasoning to build action plans; and a Network Executor Agent that validates feasibility and executes plans via tools brokered by an MCP (Model Context Protocol) server.

The agents use the ReAct (Reasoning + Acting) pattern to build explicit reasoning chains and invoke tools, and coordinate via Agent-to-Agent (A2A) messaging with structured schemas instead of static rules. The tool space spans Network Tools (3GPP and MANO APIs for NF orchestration / resource allocation), AI Tools (traffic prediction, load balancing), and External Tools (regional calendars, edge metrics). A key design choice is reusing existing 5G APIs through the MCP server so agents discover and sequence API calls dynamically rather than hand-coded orchestration.

Evaluation uses a Docker-containerized OpenAirInterface 5G Core with Prometheus and custom tools exposing 3GPP PCF/SMF APIs, driven by three real traffic flows (cloud gaming, live streaming, VoD) at 21/34/55/89 simulated users via gnbsim, against three intents (hold UPF downlink ~25 MB/s; cap at 3 UPF instances with dynamic user distribution; deactivate underused UPFs keeping ≥1). Across Gemini Pro 2.5 / Flash 2.5 / GPT-4.1 / GPT-4.1 Mini, the smaller Gemini Flash actually performed best — stable execution times and throughput closest to target — while larger models "overthought," producing fast but off-target actions and underusing tools.

## Summary (ZH)
AgentxGCore 提出一个智能体 AI 原生的智能层，扩展 3GPP 核心网标准，使 LLM 智能体能对 5G/6G 核心网执行自主闭环控制——超越多数既有"LLM-用于网络"工作止步的决策支持角色，并关键性地同时协调管理层（MANO）与控制/数据面。架构含三部分：意图管理器（存储并调度一次性与持续控制意图，如"维持某 SLA"）；网络规划智能体（查询监控工具评估状态，再用 LLM 推理构建动作计划）；网络执行智能体（校验可行性并经 MCP 服务器代理的工具执行计划）。

智能体采用 ReAct（推理+行动）模式构建显式推理链并调用工具，通过带结构化模式的 Agent-to-Agent（A2A）消息协调，而非静态规则。工具空间涵盖网络工具（用于 NF 编排/资源分配的 3GPP 与 MANO API）、AI 工具（流量预测、负载均衡）与外部工具（区域日历、边缘指标）。关键设计是经 MCP 服务器复用既有 5G API，使智能体动态发现并编排 API 调用，而非硬编码编排逻辑。

评估采用 Docker 容器化的 OpenAirInterface 5G 核心网，配 Prometheus 及暴露 3GPP PCF/SMF API 的自定义工具，由三类真实流量（云游戏、直播、点播）以 21/34/55/89 个 gnbsim 模拟用户驱动，针对三个意图（维持 UPF 下行约 25 MB/s；上限 3 个 UPF 实例并动态分配用户；停用低利用 UPF 且至少保留一个）。在 Gemini Pro 2.5 / Flash 2.5 / GPT-4.1 / GPT-4.1 Mini 中，较小的 Gemini Flash 反而表现最佳——执行时间稳定、吞吐最接近目标——而较大模型"过度思考"，动作快但偏离目标且工具利用不足。

## Key technical points (EN)
- **Three-agent architecture:** Intent Manager + Network Planner Agent + Network Executor Agent.
- **ReAct + A2A + MCP:** explicit reasoning chains, agent-to-agent structured messaging, MCP server brokering 3GPP/MANO tool calls; dynamic API discovery instead of hand-coded orchestration.
- **CP/DP + MANO coordination:** controls NF orchestration *and* runtime control/data-plane behaviour, not just the management layer.
- **Testbed:** containerized OAI 5G Core + Prometheus + PCF/SMF tools; gnbsim traffic (cloud gaming / live streaming / VoD), 21–89 users.
- **Finding:** Gemini Flash 2.5 (smaller) beat GPT-4.1 / Gemini Pro 2.5 — larger models overthought and deviated from throughput targets.

## Key technical points (ZH)
- **三智能体架构：** 意图管理器 + 网络规划智能体 + 网络执行智能体。
- **ReAct + A2A + MCP：** 显式推理链、智能体间结构化消息、MCP 服务器代理 3GPP/MANO 工具调用；动态 API 发现而非硬编码编排。
- **CP/DP + MANO 协调：** 同时控制 NF 编排*与*运行时控制/数据面行为，不止管理层。
- **测试床：** 容器化 OAI 5G 核心网 + Prometheus + PCF/SMF 工具；gnbsim 流量（云游戏/直播/点播），21–89 用户。
- **发现：** 较小的 Gemini Flash 2.5 优于 GPT-4.1 / Gemini Pro 2.5——大模型过度思考并偏离吞吐目标。

## Why it matters / what's new (EN)
This sits alongside the KB's growing agentic-core line (GENESIS 2605.27360 agentic 6G RAN synthesis; AgentxGCore is the *core-network* counterpart). Two things stand out: (1) it closes the loop into the actual control/data plane via 3GPP APIs rather than stopping at recommendations, and (2) the empirical result that a smaller, faster model outperforms frontier models on tool-grounded core-network tasks — "overthinking" hurts when the action space is structured API calls. The MCP-broker pattern (reusing existing 5G APIs as agent tools) is a concrete, reproducible integration recipe rather than a conceptual proposal.

## Why it matters / what's new (ZH)
本文与 KB 中日益增多的智能体核心网脉络并列（GENESIS 2605.27360 智能体 6G RAN 综合；AgentxGCore 是其*核心网*对位）。两点突出：（1）经 3GPP API 将闭环延伸到真实控制/数据面，而非止于建议；（2）实证结果表明在以工具为基础的核心网任务上，更小更快的模型优于前沿模型——当动作空间是结构化 API 调用时，"过度思考"反而有害。MCP 代理模式（将既有 5G API 复用为智能体工具）是可复现的具体集成范式，而非概念提案。
