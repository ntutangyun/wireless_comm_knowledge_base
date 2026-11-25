---
id: 2026-11-25_arxiv-intelligence-founding-principle-oran-architecture-for-ai-reference-implementations
date_published: 2026-11-20
date_found: 2026-11-25
type: academic-paper
technology: cellular
title_en: "Intelligence as a Founding Principle: The O-RAN Architecture for Artificial Intelligence and Its Reference Implementations"
title_zh: "以智能为创立原则：面向人工智能的 O-RAN 架构及其参考实现"
url: "https://arxiv.org/abs/2611.28282"
source_quality: full
topics: [O-RAN, RIC, rApp, xApp, dApp, AAL, AI-RAN, O-Cloud, 6G, agentic-AI, OTIC, GPU-acceleration]
topic_primary: open-ran
topics_secondary: [cellular-ai, 6g-vision]
novelty_score: 3
---

## Summary (EN)

Chih-Lin I (China Mobile Research Institute), Hao Xu (Tongji University) and Tao Chen (VTT Technical Research Centre of Finland) trace how AI/ML is built into the O-RAN architecture, from the 2018 white paper and its hierarchical RAN Intelligent Controller (RIC) to current reference implementations and 6G proposals. The article examines open fronthaul, the RIC interfaces, cloud orchestration (O-Cloud) and Acceleration Abstraction Layer (AAL) profiles as the elements supporting control loops over several timescales, model management and hardware acceleration, and then surveys commercial deployments, O-RAN Test and Integration Centre (OTIC) testing, open-source stacks and testbeds.

It treats GPU-based AI-RAN platforms as one reference implementation of the O-RAN AAL inline High-PHY profile, using the X5G platform (OpenAirInterface upper layers on the host, High-PHY on the GPU with NVIDIA Aerial, and the O-RAN Software Community Near-RT RIC) as an example, and lists vector instruction sets and analog in-memory computing as longer-term energy-efficiency options. For 6G the authors discuss real-time control below the 10 ms Near-RT RIC boundary, resource profiles for AI agent sessions, RAN/edge-AI silicon co-design and agent session mobility across handover, and they propose a RAN Agentic Controller (RAC) and a process called Recursive Standardization. The RAC and the process are proposals in the article, not deployed systems.

## Summary (ZH)

Chih-Lin I（中国移动研究院）、Hao Xu（同济大学）与 Tao Chen（芬兰 VTT 技术研究中心）梳理了 AI/ML 如何内置于 O-RAN 架构：从 2018 年白皮书及其分层的 RAN 智能控制器（RIC），到当前的参考实现与 6G 提案。文章考察开放前传、RIC 接口、云编排（O-Cloud）以及加速抽象层（AAL）profile，认为它们共同支撑多时间尺度的控制环路、模型管理与硬件加速，随后回顾商用部署、O-RAN 测试与集成中心（OTIC）测试、开源协议栈与测试床。

文章把基于 GPU 的 AI-RAN 平台视为 O-RAN AAL 内联 High-PHY profile 的一种参考实现，并以 X5G 平台为例（主机上运行 OpenAirInterface 上层协议、GPU 上用 NVIDIA Aerial 运行 High-PHY、集成 O-RAN 软件社区的近实时 RIC）；同时将向量指令集与模拟存内计算列为更长期的能效选项。面向 6G，作者讨论 10 ms 近实时 RIC 边界以下的实时控制、AI 智能体会话的资源画像、RAN/边缘 AI 芯片协同设计以及切换时的智能体会话迁移，并提出 RAN 智能体控制器（RAC）和一种称为"递归标准化"的流程。RAC 与该流程是文章中的提案，并非已部署的系统。

## Key technical points (EN)

- Architectural framing: the Non-RT RIC hosts rApps for fleet-wide analytics, model training and policy generation; the Near-RT RIC hosts xApps for faster inference and radio control (10 ms to 1 s loops); standardized interfaces connect model onboarding and policy guidance to actuation at disaggregated radio nodes, while cloud and hardware-acceleration abstractions decouple virtualized baseband software from silicon. Fig. 1 contrasts the legacy RAN, the O-RAN baseline and a proposed 6G open and agentic RAN.
- Reference implementations and testbeds named in the article include X5G, Colosseum (hardware-in-the-loop), the OSC RIC stack (which the article says moved under Linux Foundation Networking in 2026), OpenAirInterface with the xran library for Option 7.2x, srsRAN, the Duranta/OCUDU projects (the article says the OCUDU Ecosystem Foundation was launched in 2026), FlexRIC and NexRAN. It reports that the Singapore University of Technology and Design and the Japan OTIC obtained consistent Open Fronthaul conformance results on the same O-RU model at both sites.
- Operator economics and shared compute: the article cites hardware consolidation, modular procurement and controller-driven energy savings as early adopter goals, with DISH and Vodafone as deployment examples, and discusses shared-server trials in which baseband, AI-for-RAN control and co-hosted AI workloads need scheduling that preserves radio deadlines.
- dApps and the 10 ms boundary: standardized third-party hosting currently reaches the Near-RT RIC; the O-RAN next Generation Research Group (nGRG) has studied dApps and the E3 interface for in-node applications. The article poses as a design question what the scheduler does when an application delivers its result after the slot deadline.
- Agent sessions: successive edge-model calls share task history, each uses uplink for input, accelerator time and downlink for output; the article suggests keeping task history and a compatible KV cache at the edge, and notes that handover can change which site serves the next call while the task is still running.
- Proposals: a RAN Agentic Controller with a local shell on each participating host plus a shared exposure gateway for external agents (rAgents, xAgents, dAgents), and Recursive Standardization in which federated open labs compare independent implementations to inform candidate 6G requirements and standards review guides the next round (workflow "RIRDRT-RS", Fig. 9).

## Key technical points (ZH)

- 架构框架：非实时 RIC 承载用于全网分析、模型训练与策略生成的 rApp；近实时 RIC 承载用于更快推理与无线控制的 xApp（10 ms 至 1 s 环路）；标准化接口将模型引入与策略指导连接到解耦无线节点上的执行，而云与硬件加速抽象使虚拟化基带软件与芯片解耦。图 1 对比了传统 RAN、O-RAN 基线与所提的 6G 开放智能体化 RAN。
- 文中提到的参考实现与测试床包括 X5G、Colosseum（硬件在环）、OSC RIC 协议栈（文章称其于 2026 年转入 Linux Foundation Networking）、带 xran 库的 OpenAirInterface（Option 7.2x）、srsRAN、Duranta/OCUDU 项目（文章称 OCUDU 生态基金会于 2026 年成立）、FlexRIC 与 NexRAN。文章报告新加坡科技设计大学与日本 OTIC 在同一型号 O-RU 上获得了一致的开放前传一致性测试结果。
- 运营商经济性与共享算力：文章将硬件整合、模块化采购和控制器驱动的节能列为早期采用者的目标，并以 DISH 和沃达丰为部署例子，同时讨论共享服务器试验：基带、AI 赋能 RAN 控制与同址 AI 业务需要在保证无线时限的前提下调度。
- dApp 与 10 ms 边界：标准化第三方托管目前只到达近实时 RIC；O-RAN 下一代研究组（nGRG）研究了 dApp 与面向节点内应用的 E3 接口。文章把"应用在时隙截止后才给出结果时调度器如何处理"作为一个具体设计问题提出。
- 智能体会话：连续的边缘模型调用共享任务历史，每次调用占用上行传输输入、加速器时间与下行返回输出；文章建议在边缘保留任务历史与兼容的 KV 缓存，并指出切换会改变下一次调用由哪个站点服务，而任务仍在进行。
- 提案：RAN 智能体控制器（每个参与主机上有本地 shell，加上面向外部智能体 rAgent、xAgent、dAgent 的共享开放网关），以及递归标准化：联邦开放实验室对比独立实现以支持候选 6G 需求，标准评审再指导下一轮（工作流"RIRDRT-RS"，图 9）。

## Why it matters / what's new (EN)

This is an overview article by authors from an operator research institute, a university and a national research centre; it consolidates the O-RAN AI/ML architecture, deployment and testbed landscape in one place and states its own 6G proposals (RAC, Recursive Standardization). It contains no new measurements; the proposals are not evaluated in the article.

## Why it matters / what's new (ZH)

这是一篇由运营商研究院、大学与国家研究中心作者合写的综述性文章，把 O-RAN 的 AI/ML 架构、部署与测试床格局集中呈现，并提出自己的 6G 方案（RAC、递归标准化）。文章不含新的测量数据，所提方案在文中也未经评估。

## Images

None.
