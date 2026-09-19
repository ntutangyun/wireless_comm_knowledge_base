---
id: 2026-09-19_arxiv-ai-agent-ran-cn-converged-framework
date_published: 2026-02-27
date_found: 2026-09-19
type: academic-paper
technology: cellular
title_en: "Toward E2E Intelligence in 6G Networks: An AI Agent-Based RAN-CN Converged Intelligence Framework"
title_zh: "面向 6G 端到端智能：基于 AI 智能体的 RAN-CN 融合智能框架"
url: "https://arxiv.org/abs/2602.23623"
source_quality: full
topics: [6G, RAN, core-network, LLM-agent, ReAct, network-slicing]
topic_primary: cellular-ai
topics_secondary: [6g-vision, network-slicing, open-ran]
novelty_score: 3
---

## Summary (EN)

This paper (Han, Ko, Ko, Taleb, Chen) argues that today's 6G network-intelligence proposals are trapped by domain isolation: RAN-side and core-network (CN)-side AI models are trained and deployed independently, so a RAN decision (e.g., triggering a handover) and a CN decision (e.g., scaling capacity) can contradict each other because neither model reasons over the other domain's state. The authors propose an AI Agent-Based RAN-CN Converged Intelligence Framework built around five pieces: a Monitoring DB that aggregates real-time RAN metrics (PRB utilization, handover rates) and CN metrics (UPF delay, QoS violations); a dual-memory system (short-term for current observations, long-term for historical decisions/policies); an LLM core (the paper tests Phi-3-4B-Instruct and GPT-5-mini) that does the actual reasoning; a policy orchestrator that turns LLM output into standardized commands for the RAN Intelligent Controller (RIC) and NWDAF; and an MCP-based tool interface for database queries and control execution.

The reasoning loop follows the ReAct paradigm — the agent forms a hypothesis about network state (thought), issues a structured query or action, incorporates the result (observation), and iterates — which the authors argue lets the system adapt to unseen conditions without retraining, unlike fixed supervised models.

The evaluation uses three scenarios. First, a multi-task inference test on an 83-trace 5G production dataset from an Irish mobile operator, comparing the LLM agent against an LSTM trained specifically on the test workload ("Seen-LSTM") and an LSTM trained on a different workload ("Unseen-LSTM") for RSRP, throughput, and location prediction. Second, a generalization test where the task distribution shifts away from training data without retraining. Third, an end-to-end network-slicing simulation with Poisson-arriving users on a fat-tree core topology, comparing the LLM agent's cross-domain (RAN+CN) slicing decisions against a round-robin baseline and against domain-specific (RAN-only or CN-only) LLM variants.

Headline numbers: on RSRP the LLM agent scores 1.74 dBm MAE, comparable to the in-distribution Seen-LSTM's 1.72 dBm; on throughput the LLM agent trails the Seen-LSTM (18.93 MAE for the LLM agent vs 16.10 MAE for Seen-LSTM vs 27.82 MAE for Unseen-LSTM); on location inference it beats both LSTM baselines (0.49 mdeg MAE vs 0.87 mdeg). Under distribution shift, Unseen-LSTM's RSRP MAE (dBm) degrades to 3.39 while the LLM agent holds at 1.74 without any retraining. In the 40-user E2E slicing scenario, the cross-domain LLM agent satisfies 27.50 users on average versus 26.63 for the domain-isolated LLM variants, with the gap persisting from 10 to 80 simulated users.

## Summary (ZH)

这篇论文（Han、Ko、Ko、Taleb、Chen）指出当前 6G 网络智能方案普遍受限于"域隔离"问题：RAN 侧与核心网（CN）侧的 AI 模型各自独立训练与部署，导致 RAN 决策（如触发切换）与 CN 决策（如扩容）之间可能互相矛盾，因为两侧模型都无法感知对方域的状态。作者提出了一个基于 AI 智能体的 RAN-CN 融合智能框架，由五个组件构成：聚合 RAN 实时指标（PRB 利用率、切换率）与 CN 指标（UPF 时延、QoS 违规）的监控数据库；分为短期（当前观测）与长期（历史决策/策略）的双记忆系统；作为推理引擎的 LLM 核心（论文测试了 Phi-3-4B-Instruct 与 GPT-5-mini）；将 LLM 输出转化为面向 RAN 智能控制器（RIC）与 NWDAF 的标准化控制指令的策略编排器；以及基于 MCP 的工具接口，用于数据库查询与控制执行。

推理循环遵循 ReAct 范式——智能体对网络状态形成假设（thought）、发出结构化查询或动作（action）、纳入结果（observation）并迭代——作者认为这使系统能够在无需重新训练的情况下适应未见过的场景，区别于固定的监督式模型。

评估设置了三个场景。第一，在爱尔兰某运营商的 83 条 5G 生产数据集上进行多任务推理测试，将 LLM 智能体与专门针对测试负载训练的 LSTM（"Seen-LSTM"）以及针对不同负载训练的 LSTM（"Unseen-LSTM"）在 RSRP、吞吐量与位置预测上进行对比。第二，测试任务分布偏移但不重新训练时的泛化能力。第三，在采用泊松到达用户模型与胖树核心网拓扑的端到端网络切片仿真中，将 LLM 智能体的跨域（RAN+CN）切片决策与轮询基线以及仅限单一域（仅 RAN 或仅 CN）的 LLM 变体进行对比。

关键数字：RSRP 预测上 LLM 智能体的 MAE 为 1.74 dBm，接近同分布 Seen-LSTM 的 1.72 dBm；吞吐量预测上 LLM 智能体不及 Seen-LSTM（LLM 智能体 MAE 为 18.93，Seen-LSTM 为 16.10，Unseen-LSTM 为 27.82）；位置推断上优于两种 LSTM 基线（0.49 mdeg 对 0.87 mdeg）。在分布偏移场景下，Unseen-LSTM 的 RSRP MAE（dBm）退化至 3.39，而 LLM 智能体在不重新训练的情况下仍保持 1.74。在 40 用户的端到端切片场景中，跨域 LLM 智能体平均满足 27.50 个用户的 SLA，优于域隔离 LLM 变体的 26.63，且这一差距在 10 到 80 用户规模上持续存在。

## Key technical points (EN)

- Five-part architecture: Monitoring DB, dual-memory (short/long-term), LLM reasoning core (Phi-3-4B-Instruct / GPT-5-mini), policy orchestrator to RIC/NWDAF, MCP-based tool interface.
- Reasoning loop is ReAct (thought → action → observation → iterate), targeting adaptation to unseen scenarios without retraining.
- Evaluated on an 83-trace real 5G production dataset from an Irish operator, not purely synthetic traces.
- The LLM agent roughly matches the in-distribution LSTM on RSRP, trails it on throughput, beats it on location, and beats the out-of-distribution LSTM throughout; in E2E slicing it beats round-robin and domain-specific LLM variants.
- Explicitly positioned against 3GPP TR 22.850 (AI/ML consistency alignment) and TR 23.700-84 (cross-domain collaboration) as the standardization context it targets.

## Key technical points (ZH)

- 五部分架构：监控数据库、双记忆系统（短/长期）、LLM 推理核心（Phi-3-4B-Instruct / GPT-5-mini）、面向 RIC/NWDAF 的策略编排器、基于 MCP 的工具接口。
- 推理循环采用 ReAct 范式（thought → action → observation → 迭代），目标是在无需重新训练的情况下适应未见过的场景。
- 在爱尔兰某运营商的 83 条真实 5G 生产数据集上评估，而非纯合成轨迹。
- LLM 智能体在 RSRP 上与同分布 LSTM 大致持平，在吞吐量上不及同分布 LSTM，在位置推断上优于同分布 LSTM，并在所有任务上优于分布外（Unseen）LSTM；在端到端切片场景中优于轮询基线与单域 LLM 变体。
- 明确将 3GPP TR 22.850（AI/ML 一致性对齐）与 TR 23.700-84（跨域协同）作为其对标的标准化背景。

## Why it matters / what's new (EN)

The KB already carries several agentic/LLM-for-RAN or LLM-for-core papers (e.g. `2026-06-03_arxiv-agentxgcore-agentic-ai-mobile-core`, `2026-06-11_arxiv-llm-nwdaf-ai-native-6g`, `2026-05-27_arxiv-genesis-agentic-6g-ran-synthesis`), so this is a crowded topic. What differentiates this entry is the explicit RAN+CN converged reasoning claim backed by a head-to-head ablation against domain-isolated LLM variants on the same E2E slicing task — most prior entries in this bin evaluate a single domain (RAN-only or CN-only) rather than demonstrating the cross-domain gap directly.

## Why it matters / what's new (ZH)

知识库中已收录多篇智能体/LLM 用于 RAN 或核心网的论文（如 `2026-06-03_arxiv-agentxgcore-agentic-ai-mobile-core`、`2026-06-11_arxiv-llm-nwdaf-ai-native-6g`、`2026-05-27_arxiv-genesis-agentic-6g-ran-synthesis`），此领域已较为拥挤。本条目的差异化之处在于其明确提出 RAN+CN 融合推理主张，并在同一端到端切片任务上与域隔离的 LLM 变体做了直接消融对比——此前收录的多数条目仅评估单一域（仅 RAN 或仅 CN），并未直接展示跨域带来的差距。
