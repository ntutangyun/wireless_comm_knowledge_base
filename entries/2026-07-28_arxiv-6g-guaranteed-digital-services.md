---
id: 2026-07-28_arxiv-6g-guaranteed-digital-services
date_published: 2026-07-27
date_found: 2026-07-28
type: academic-paper
technology: cellular
title_en: "6G: From Connectivity Infrastructure to Guaranteed Digital Services — Soldani et al. on operator sovereignty, outcome pricing, and a governed network-MCP agent plane"
title_zh: "6G：从连接基础设施到有保障的数字服务——Soldani 等论运营商主权、成果计价与受治理的网络 MCP 智能体平面"
url: "https://arxiv.org/abs/2607.24185"
source_quality: abstract_only
topics: [6G, network-architecture, agentic-AI, SLA]
topic_primary: 6g-vision
topics_secondary: [cellular-ai]
novelty_score: 2
---

## Summary (EN)

David Soldani (a long-time 6G architecture figure) and co-authors submitted a position/architecture paper to IEEE Access (manuscript Access-2026-37371, arXiv Jul-27-2026) arguing that 6G must pivot from selling connectivity infrastructure to selling *guaranteed digital services*. Their diagnosis: five generations of vendor-led architecture have left operators dependent on platforms they cannot fully modify or audit — including the AI functions now being embedded throughout the network.

The paper operationalises the pivot through four contributions. The *Control Compact* is a taxonomy that allocates architectural sovereignty — which layers an operator must own outright versus can outsource — according to strategic value. The *Guarantee Economy* is an outcome-priced commercial model that converts that operator control into enforceable service-level objectives (business guarantees priced per outcome rather than per megabyte). A *Network MCP Platform* demonstrates how autonomous AI agents integrate with the network through a governed tool plane with auditable hooks — notably importing the Model Context Protocol pattern from the LLM-agent ecosystem into network operations. A standardization roadmap maps the proposals onto AI scope, radio access, core network, and spectrum work.

## Summary (ZH)

David Soldani（长期活跃的 6G 架构专家）与合著者向 IEEE Access 提交了一篇立场/架构论文（稿件号 Access-2026-37371，arXiv 2026-07-27），主张 6G 必须从"销售连接基础设施"转向"销售有保障的数字服务"。其诊断是：五代由设备商主导的架构使运营商依赖于自身无法完全修改或审计的平台——包括如今嵌入网络各处的 AI 功能。

论文通过四项贡献将这一转向落地。*控制契约（Control Compact）*是一个按战略价值分配架构主权的分类法——哪些层运营商必须完全自持、哪些可以外包。*保障经济（Guarantee Economy)*是一种按成果计价的商业模式，将运营商控制力转化为可执行的服务级目标（按成果而非按流量计费的业务保障）。*网络 MCP 平台*展示自治 AI 智能体如何通过带可审计钩子的受治理工具平面接入网络——显著地将 LLM 智能体生态的 Model Context Protocol 模式引入网络运营。最后给出覆盖 AI 范围、无线接入、核心网与频谱的标准化路线图。

## Key technical points (EN)

- Control Compact: sovereignty taxonomy deciding which architectural layers operators must own vs. can outsource, allocated by strategic value.
- Guarantee Economy: outcome-priced model turning operator control into enforceable SLOs — "customer outcomes before peak rates; business guarantees before megabytes."
- Network MCP Platform: autonomous agents integrate through a governed tool plane with auditable hooks — an MCP-style (LLM tool-calling) integration surface for network operations.
- Standardization roadmap spanning AI scope, RAN, core, and spectrum; venue: IEEE Access submission, fresh Jul-2026.

## Key technical points (ZH)

- 控制契约：按战略价值划分的主权分类法，界定运营商必须自持与可外包的架构层。
- 保障经济：按成果计价的模式，将运营商控制力转化为可执行的 SLO——"客户成果优先于峰值速率，业务保障优先于流量"。
- 网络 MCP 平台：自治智能体经由带可审计钩子的受治理工具平面接入网络——将 LLM 工具调用生态的 MCP 模式移植到网络运营。
- 标准化路线图覆盖 AI 范围、RAN、核心网与频谱；投稿 IEEE Access，2026 年 7 月新作。

## Why it matters / what's new (EN)

The KB's 6G-architecture thread (intent-driven 6G, AI-native air interface, SOVA agent-communications) has been dominated by *technical* AI-native proposals; this is the first entry to frame 6G around operator sovereignty and outcome-priced guarantees as the architectural design driver. The Network MCP Platform is also the first appearance in the KB of the MCP (Model Context Protocol) pattern applied to network control — a concrete bridge between the agentic-AI tooling world and 3GPP-style architecture, complementing 2026-07-24's network-as-agent-communication-service position (SOVA).

## Why it matters / what's new (ZH)

KB 中的 6G 架构主线（意图驱动 6G、AI 原生空口、SOVA 智能体通信）此前以*技术性* AI 原生提案为主；本条目首次以运营商主权与按成果计价的保障作为架构设计驱动力来架构 6G。网络 MCP 平台也是 KB 中首次出现将 MCP（Model Context Protocol）模式应用于网络控制——在智能体 AI 工具生态与 3GPP 式架构之间架起具体桥梁，与 2026-07-24 的"网络即智能体通信服务"立场（SOVA）互为补充。
