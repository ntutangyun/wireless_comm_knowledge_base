---
id: 2026-11-04_arxiv-agentic-ai-ran-orchestration-signaling-storms
date_published: 2026-11-02
date_found: 2026-11-04
type: academic-paper
technology: cellular
title_en: "From Reactive to Agentic Resilience: Multi-Timescale AI-RAN Orchestration Under Signaling Storms"
title_zh: "从被动到智能体式韧性：信令风暴下的多时间尺度 AI-RAN 编排"
url: "https://arxiv.org/abs/2611.03406"
source_quality: full
topics: [AI-RAN, Open-RAN, signaling-storm, agentic-AI, LLM, SMO, Near-RT-RIC, O-Cloud, MCP, A2A, resilience]
topic_primary: open-ran
topics_secondary: [cellular-ai, cellular-security]
novelty_score: 3
---

## Summary (EN)

Sotiris Chatzimiltis, Mahdi Boloursaz Mashhadi, Mohammad Shojafar and Rahim Tafazolli (5G/6GIC, University of Surrey) treat resilience in Open RAN and AI-RAN deployments as a lifecycle of five stages: anticipation, absorption, adaptation, recovery and evolution. They argue that existing mechanisms are stage-specific and rarely coordinated across the control hierarchy, and that agentic AI can act as an orchestration layer that turns operator intent into coordinated action while keeping slow language-model reasoning off the fast control path.

The running study is a mass-attachment signaling storm. The authors build a discrete-event Open RAN attach simulator that models retry amplification, shared-compute contention and non-instantaneous server provisioning (a storm may be benign, such as mass reconnection or a crowd event, or caused by bot-driven UEs). Their three-tier framework has an orchestrator at the service management and orchestration (SMO) layer setting a standing policy, a per-site non-real-time agent that judges storms and anticipates scheduled crowds, and a deterministic near-real-time loop that enforces every decision; no language model sits on the near-RT path.

## Summary (ZH)

Sotiris Chatzimiltis、Mahdi Boloursaz Mashhadi、Mohammad Shojafar 与 Rahim Tafazolli（萨里大学 5G/6GIC）把 Open RAN 与 AI-RAN 部署中的韧性视为包含五个阶段的生命周期：预判、吸收、适应、恢复与演进。他们认为现有机制各自针对某一阶段，很少跨控制层级协同，而智能体式 AI 可以充当编排层，把运营商意图转化为协同动作，同时让缓慢的语言模型推理远离快速控制路径。

论文以大规模接入信令风暴作为贯穿案例。作者构建了离散事件 Open RAN 接入仿真器，建模重试放大、共享算力争用和非即时的服务器供给（风暴可能是良性的，如大规模重连或人群活动，也可能由受控 UE 洪泛引起）。三层框架包括：SMO 层的编排器设定常驻策略；每站点一个非实时智能体，判断风暴并预判已排期的人流；以及确定性的近实时回路执行每项决策。近实时路径上不含语言模型。

## Key technical points (EN)

- Near-RT loop: runs at a 10 ms-1 s control cadence, solves a drift-plus-penalty objective for the commanded capacity with guardrails (operator capacity floor, no scale-down while the queue is draining), applies admission filtering through an xApp over E2 and requests servers from the SMO, which activates them on the O-Cloud over O2. The non-RT agent runs every few seconds and can call MCP tools (episode logs, arrival-rate forecast, calendar of planned events); a per-site agent can receive directives over the A2A protocol.
- Analytical result (Theorem 1): under the fluid-queue model with unit capacity increments every tau_prov seconds, the minimum anticipation horizon to absorb a step surge without backlog is T_min = max(c_req - c_ev, 0) * tau_prov, with c_req = ceil(lambda_s / mu_eff).
- Test scenario: a botnet ramp followed by a scheduled public event; the calendar returns only free text ("England v Brazil, Wembley, not sold out") so the agent must infer turnout itself (83,664 attendees, warranting a 13-server reserve; about 279 UEs/s, roughly 60% of full-pool capacity of about 459 UEs/s).
- Non-RT agent LLM comparison over five seeds (overall resilience): GPT-5.4-Mini with reasoning on 89.9 +/- 1.1% (23.2 s and $0.0123 per assessment), Qwen3.7-Plus 87.5%, Gemini-3.1-Flash-Lite 87.4% (3.2 s, $0.0018), GPT-5.4-Mini reasoning off 87.1%, Claude Haiku 4.5 76.7%, GPT-4o-Mini 71.6%.
- The abstract states the agentic controller approaches the resilience of a fully provisioned server pool at a quarter of its capacity by reading a scheduled event from a calendar and provisioning ahead of it, which no reactive weight setting recovers once the surge arrives; free-text operator intents ground into per-site control directives.
- Detection of malicious traffic is assumed given (an imperfect detector with a false-positive fraction is modelled) and is out of scope.

## Key technical points (ZH)

- 近实时回路：控制周期 10 ms-1 s，在护栏（运营商容量下限、队列排空期间不缩容）约束下求解 drift-plus-penalty 目标得到指令容量，经 E2 上的 xApp 做准入过滤，并向 SMO 申请服务器，由 SMO 通过 O2 在 O-Cloud 上激活。非实时智能体每隔数秒运行，可调用 MCP 工具（回合日志、到达率预测、已排期事件日历）；站点智能体可通过 A2A 协议接收指令。
- 解析结果（定理 1）：在流体队列模型下，容量以每 tau_prov 秒一个单位递增时，吸收阶跃型激增而不产生积压所需的最小提前量为 T_min = max(c_req - c_ev, 0) * tau_prov，其中 c_req = ceil(lambda_s / mu_eff)。
- 测试场景：先是僵尸网络流量爬升，随后是已排期的大型公共活动；日历只返回自由文本（"England v Brazil, Wembley, not sold out"），智能体需自行推断到场人数（83,664 人，对应 13 台服务器的预留；约 279 UE/s，约为满池容量约 459 UE/s 的 60%）。
- 五个随机种子下对非实时智能体 LLM 的比较（总体韧性）：开启推理的 GPT-5.4-Mini 为 89.9 +/- 1.1%（每次评估 23.2 s、0.0123 美元），Qwen3.7-Plus 87.5%，Gemini-3.1-Flash-Lite 87.4%（3.2 s、0.0018 美元），关闭推理的 GPT-5.4-Mini 87.1%，Claude Haiku 4.5 76.7%，GPT-4o-Mini 71.6%。
- 摘要称：智能体控制器通过读取日历中的已排期事件并提前供给，只用四分之一容量就接近完全配置服务器池的韧性；一旦激增到来，任何被动权重设置都无法达到这一效果；自由文本的运营商意图可落地为各站点的控制指令。
- 恶意流量检测被视为已给定（建模了存在误报比例的不完美检测器），不在讨论范围内。

## Why it matters / what's new (EN)

The paper's framing is that AI-RAN makes service continuity depend on control loops at many timescales and that an LLM agent is useful where anticipation is needed (reading a calendar) while a deterministic loop keeps the latency-critical path. The evidence is a discrete-event simulation with a single scheduled-event scenario and a handful of commercial LLMs; per-assessment latency of 3-23 s and the simulated provisioning delay bound what the approach can do, and no live RAN is tested.

## Why it matters / what's new (ZH)

论文的出发点是：AI-RAN 使业务连续性依赖于多个时间尺度上的控制回路；LLM 智能体适用于需要预判的环节（如读取日历），而确定性回路承担对时延敏感的路径。证据来自单一已排期事件场景的离散事件仿真和少数商用 LLM；每次评估 3-23 秒的时延以及仿真设定的供给延迟限定了该方法的能力，且未在真实 RAN 上测试。

## Images

None.
