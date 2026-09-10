---
id: 2026-09-10_arxiv-ai-native-orchestration-6g-gsma-camara
date_published: 2026-09-08
date_found: 2026-09-10
type: academic-paper
technology: cellular
title_en: "AI-Native Orchestration in the 6G Continuum: Evolving Operator Platforms with Agentic AI"
title_zh: "6G 连续体中的 AI 原生编排：以智能体式 AI 演进运营商平台"
url: "https://arxiv.org/abs/2609.08441"
source_quality: full
topics: [GSMA-Operator-Platform, CAMARA, agentic-AI, network-digital-twin, URLLC, eMBB, East-Westbound-Interface, LLM, Kubernetes]
topic_primary: 6g-vision
topics_secondary: [network-slicing]
novelty_score: 3
---

## Summary (EN)
Claudia Carballo Gonzalez, Hatim Chergui, Sergio Gimenez-Anton, Mohammadreza Mosahebfard, and Juan Sebastian Camargo and Pouria Sayyad Khodashenas (i2CAT Foundation, Barcelona), Vasileios Theodorou (Intracom Telecom, Greece), and Christos Verikoukis (Industrial Systems Institute/Athena Research Center and University of Patras) present a proposal to extend the GSMA Operator Platform (OP) architecture with autonomous, LLM-driven agents for 6G cloud-edge-IoT orchestration, funded under the EU SUNRISE-6G and Spanish COALESCE-6G projects (arXiv v1, 8 Sep 2026). The paper's core claim is that today's operator-platform automation is rule-based and cannot autonomously reconcile competing Service Level Agreements (SLAs) across federated operator domains under real-time infrastructure conditions, so it proposes two additions on top of the GSMA OP: a Declarative Monitoring and Alerting System (DeMAS) and a decentralized Agent-to-Agent (A2A) negotiation protocol, both layered onto ETSI's SDG OpenOP (OOP) reference implementation.

DeMAS is an API-first abstraction that lets developers define monitoring rules and thresholds (compute, storage, network, application-level QoS) via a Rule Manager, backed by a Prometheus/Thanos monitoring stack and an alerting stack that forwards triggered alerts to partner operators; it interfaces with the CAMARA Connectivity Insights and Application Profile APIs and propagates alarms across the federation via TMF 642 over the OP's East-Westbound Interface. On top of DeMAS, per-service agents negotiate resource allocations (RAN throughput, compute capacity) using a multi-round (capped at 5 rounds) alternating-offer protocol exchanging Safe/Aggressive/Balanced proposals, scored by a utility function under two reasoning modes: Risk-Neglect (optimizes average-case utility) and Risk-Aware (targets Conditional Value at Risk, CVaR, for tail-reliability guarantees). Agents ground their reasoning in Network Digital Twins via Monte Carlo forecasting (N=100), run as Kubernetes pods with a sidecar MCP server exposing DeMAS telemetry and digital-twin views, and use a hybrid deployment split — small language models at the edge for fast negotiation rounds, and a heavier model (Gemini-3-flash-preview) hosted centrally for deeper reasoning.

The paper validates the design on a URLLC/eMBB coexistence scenario with 550 Mbps total RAN throughput and 100% edge CPU capacity shared between a V2X (URLLC) agent using CVaR at the 99.999th percentile and an eMBB agent using Risk-Neglect, against a roughly 10 ms V2X SLA bound (with a ~3 ms physical network floor). Both reasoning approaches keep V2X's 99.999th-percentile latency within the 10 ms requirement, but the Risk-Aware approach cuts eMBB's extreme tail latency from roughly 77 ms down to roughly 49 ms; on the energy side, median infrastructure energy savings rise from roughly 3.5% under Risk-Neglect to over 5.5% under the CVaR-targeted Risk-Aware approach — the paper's headline finding that the CVaR-based negotiation shifts the energy-savings distribution rightward (i.e., improves the median case) while simultaneously guaranteeing the strict tail-latency bound, rather than trading one for the other.

## Summary (ZH)
Claudia Carballo Gonzalez、Hatim Chergui、Sergio Gimenez-Anton、Mohammadreza Mosahebfard 与 Juan Sebastian Camargo与 Pouria Sayyad Khodashenas（西班牙巴塞罗那 i2CAT 基金会）、Vasileios Theodorou（希腊 Intracom Telecom）以及 Christos Verikoukis（工业系统研究所/雅典娜研究中心与帕特雷大学）提出了一项在 GSMA 运营商平台（OP）架构基础上扩展自主 LLM 驱动智能体、用于 6G 云-边-物联网编排的方案，该工作获欧盟 SUNRISE-6G 项目与西班牙 COALESCE-6G 项目资助（arXiv v1，2026 年 9 月 8 日）。论文的核心论点是：当前运营商平台的自动化机制基于规则，无法在真实的、跨联邦运营商域的基础设施条件下自主协调相互竞争的服务等级协议（SLA），因此提出在 GSMA OP 之上增加两项能力：声明式监控与告警系统（DeMAS）以及去中心化的智能体间（A2A）协商协议，二者均叠加在 ETSI SDG OpenOP（OOP）参考实现之上。

DeMAS 是一个 API 优先的抽象层，通过规则管理器让开发者定义计算、存储、网络及应用级 QoS 的监控规则与阈值，其后端由 Prometheus/Thanos 监控栈与一个将触发告警转发给合作运营商的告警栈支撑；它对接 CAMARA 的 Connectivity Insights 与 Application Profile API，并通过 OP 的东西向接口以 TMF 642 标准在联邦内传播告警。在 DeMAS 之上，各服务专属的智能体通过一种最多五轮的交替出价协议（交换保守型/激进型/均衡型提案）协商资源分配（RAN 吞吐量、计算容量），并在两种推理模式下由效用函数评分：风险中性模式（优化平均情形效用）与风险感知模式（以条件风险价值 CVaR 为目标，保障尾部可靠性）。智能体通过蒙特卡洛预测（N=100）将其推理建立在网络数字孪生之上，以 Kubernetes Pod 形式运行，并配备暴露 DeMAS 遥测数据与数字孪生视图的旁车 MCP 服务器；部署采用混合方式——边缘侧部署小语言模型以支持快速协商轮次，中心侧托管更强的模型（Gemini-3-flash-preview）以支持更深层次的推理。

论文在一个 URLLC/eMBB 共存场景中验证了该设计：总 RAN 吞吐量 550 Mbps、边缘 CPU 容量 100%，由采用 CVaR（99.999 百分位）的 V2X（URLLC）智能体与采用风险中性模式的 eMBB 智能体共享，V2X 的 SLA 约束约为 10 毫秒（物理网络底线约为 3 毫秒）。两种推理方式均能将 V2X 的 99.999 百分位时延控制在 10 毫秒要求之内，但风险感知方式将 eMBB 的极端尾部时延从约 77 毫秒降至约 49 毫秒；在能耗方面，基础设施能耗节省的中位数从风险中性模式下的约 3.5% 提升至以 CVaR 为目标的风险感知模式下的超过 5.5%——论文的核心发现是：基于 CVaR 的协商会使能耗节省分布整体右移（即改善中位情形表现），同时严格保障尾部时延约束，而非在二者之间做取舍。

## Key technical points (EN)
- Extends the GSMA Operator Platform (OP) architecture, layered on ETSI SDG OpenOP, with two additions: DeMAS (declarative rule-based monitoring/alerting via Prometheus/Thanos, CAMARA Connectivity Insights/Application Profile APIs, TMF 642 alarm propagation over the East-Westbound Interface) and a decentralized A2A negotiation protocol.
- A2A protocol: 5-round-capped alternating-offer negotiation (Safe/Aggressive/Balanced proposals) scored by a utility function under two modes, Risk-Neglect (average-case) and Risk-Aware (CVaR-targeted, tail-reliability).
- Agents run as Kubernetes pods with an MCP sidecar exposing DeMAS telemetry and Network-Digital-Twin views; hybrid deployment (edge SLMs for fast rounds, centrally hosted Gemini-3-flash-preview for heavier reasoning); grounding via Monte Carlo forecasting (N=100).
- Validation scenario: URLLC (V2X)/eMBB coexistence, 550 Mbps total RAN throughput, 100% edge CPU capacity, ~10ms V2X SLA (~3ms physical floor).
- Both reasoning modes keep V2X 99.999th-percentile latency within the 10ms bound; Risk-Aware cuts eMBB extreme tail latency from ~77ms to ~49ms.
- Median infrastructure energy savings: ~3.5% (Risk-Neglect) vs. >5.5% (Risk-Aware/CVaR) — the CVaR approach improves the median energy-savings case while still guaranteeing the strict tail-latency bound.
- Validated on a single representative use case via Monte Carlo simulation grounded in a network digital twin, not a physical testbed; operates at non-real-time slice-management granularity (tau > 1 second).

## Key technical points (ZH)
- 在 ETSI SDG OpenOP 之上扩展 GSMA 运营商平台（OP）架构，新增两项能力：DeMAS（基于声明式规则的监控/告警，依托 Prometheus/Thanos、CAMARA Connectivity Insights/Application Profile API，并通过东西向接口以 TMF 642 传播告警）以及去中心化的 A2A 协商协议。
- A2A 协议：最多五轮的交替出价协商（保守型/激进型/均衡型提案），由效用函数在两种模式下评分——风险中性（平均情形）与风险感知（以 CVaR 为目标，保障尾部可靠性）。
- 智能体以 Kubernetes Pod 形式运行，配备暴露 DeMAS 遥测数据与网络数字孪生视图的 MCP 旁车；采用混合部署（边缘小语言模型支持快速协商轮次，中心托管 Gemini-3-flash-preview 支持更深层次推理）；通过蒙特卡洛预测（N=100）夯实推理依据。
- 验证场景：URLLC（V2X）/eMBB 共存，总 RAN 吞吐量 550 Mbps，边缘 CPU 容量 100%，V2X SLA 约 10 毫秒（物理底线约 3 毫秒）。
- 两种推理模式均能将 V2X 的 99.999 百分位时延控制在 10 毫秒约束之内；风险感知模式将 eMBB 的极端尾部时延从约 77 毫秒降至约 49 毫秒。
- 基础设施能耗节省中位数：风险中性模式约 3.5%，风险感知（CVaR）模式超过 5.5%——CVaR 方式在严格保障尾部时延约束的同时，改善了能耗节省的中位情形表现。
- 验证基于单一代表性用例，通过依托网络数字孪生的蒙特卡洛仿真完成，而非物理测试床；运行在非实时的切片管理粒度上（τ > 1 秒）。

## Why it matters / what's new (EN)
The KB's 6G-vision and network-slicing bins have covered agentic AI-RAN control loops (Z2-ACT, VeraRAN, xTRUCE) mostly at the RAN/O-RAN intelligent-controller layer. This entry works one layer up, at the GSMA Operator Platform / inter-operator federation layer, grounding agent negotiation directly in named GSMA Open Gateway, CAMARA, TMF, and ETSI SDG OpenOP interfaces rather than 3GPP RAN interfaces — and it is the first entry in either bin to report a risk-aware (CVaR) negotiation strategy that improves both a hard tail-latency SLA and median energy savings simultaneously, rather than trading one against the other.

## Why it matters / what's new (ZH)
知识库 6g-vision 与 network-slicing 栏目此前对智能体式 AI-RAN 控制闭环（Z2-ACT、VeraRAN、xTRUCE）的覆盖大多集中在 RAN/O-RAN 智能控制器层面。本条目则更上一层，聚焦于 GSMA 运营商平台/跨运营商联邦层面,将智能体协商直接建立在具名的 GSMA Open Gateway、CAMARA、TMF 及 ETSI SDG OpenOP 接口之上，而非 3GPP RAN 接口——同时也是这两个栏目中首个报告"风险感知（CVaR）协商策略可同时改善硬性尾部时延 SLA 与能耗节省中位数表现,而非二者互相取舍"这一发现的条目。

## Images
![The enhanced Operator Platform architecture integrating DeMAS and the agentic intelligence layer with the Federation Manager | 集成 DeMAS 与智能体智能层、并与联邦管理器对接的增强型运营商平台架构](https://arxiv.org/html/2609.08441v1/Enhanced_OOP_architecture.drawio.png)
