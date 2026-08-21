---
id: 2026-08-21_arxiv-ai-edge-network-intelligence-architecture
date_published: 2026-08-10
date_found: 2026-08-21
type: academic-paper
technology: cellular
title_en: "AI-EDGE: Abstractions for Network Intelligence"
title_zh: "AI-EDGE：面向网络智能的抽象架构"
url: "https://arxiv.org/abs/2608.09640"
source_quality: abstract_only
topics: [O-RAN, ETSI-MEC, 3GPP-Edge-App, network-intelligence, reference-architecture, information-waist]
topic_primary: open-ran
topics_secondary: [mec]
novelty_score: 2
---

## Summary (EN)
A cross-institution team (OSU/Purdue/UMass/MITRE, including Jim Kurose, Ness Shroff, and Elisa Bertino) proposes **AI-EDGE**, a reference architecture for bidirectional awareness-sharing between AI applications and the network they run over. The paper's central abstraction is an **"information waist"** — a narrow, standardized interface layer that lets intelligent applications expose their needs/hints to the network and lets the network expose its state/predictions to applications, positioned as the missing "intelligence plane" analogous to the internet's original narrow-waist IP layer. The authors ground the abstraction in existing infrastructure rather than a green-field design: a component-level reference design maps onto **O-RAN** cellular RAN interfaces on the wireless side and **3GPP Edge Application** / **ETSI MEC** interfaces on the edge-computing side, and they walk through representative use cases (awareness sharing, portability, prototyping, validation) from the perspective of different user roles (app developer, network operator, researcher). The paper is architectural/positional — it does not report an implementation, testbed, or numerical evaluation.

## Summary (ZH)
一支跨机构团队（俄亥俄州立大学/普渡大学/马萨诸塞大学阿默斯特分校/MITRE，成员包括 Jim Kurose、Ness Shroff 与 Elisa Bertino）提出 **AI-EDGE**，一个用于 AI 应用与其运行网络之间双向"感知共享"的参考架构。论文的核心抽象是**"信息细腰"（information waist）**——一个狭窄、标准化的接口层，使智能应用能够向网络暴露自身需求/提示，也使网络能够向应用暴露自身状态/预测，其定位类比于互联网早期 IP 层"细腰"架构中缺失的"智能平面"。作者没有采用完全从零设计的方案，而是将该抽象落地于现有基础设施：组件级参考设计在无线侧对应 **O-RAN** 蜂窝 RAN 接口，在边缘计算侧对应 **3GPP Edge Application** / **ETSI MEC** 接口，并从应用开发者、网络运营商、研究者等不同用户角色出发梳理了若干代表性用例（感知共享、可移植性、原型开发、验证）。本文属于架构/立场性论文——未报告具体实现、试验平台或数值评估结果。

## Key technical points (EN)
- Core abstraction: an "information waist" — a narrow bidirectional interface between the network's emerging intelligence plane and AI applications, modeled on the internet's original hourglass/narrow-waist IP design.
- Reference component-level design targets two concrete, standards-aligned substrates: O-RAN-based cellular wireless networking and 3GPP Edge App / ETSI MEC-based edge computing — not a clean-slate architecture.
- Functional requirements derived for network intelligence services operating in the intelligence plane (distinct from the existing control/data/management planes).
- Use cases walked through per stakeholder role: awareness sharing (apps informing networks and vice versa), portability across platforms, rapid prototyping, and validation/testing.
- Explicitly architectural: no implementation, testbed, or quantitative results reported.

## Key technical points (ZH)
- 核心抽象为"信息细腰"——网络新兴智能平面与 AI 应用之间的一个狭窄双向接口，类比互联网原始的沙漏形/细腰式 IP 设计。
- 组件级参考设计面向两个具体的、与标准对齐的基础设施：基于 O-RAN 的蜂窝无线网络与基于 3GPP Edge App / ETSI MEC 的边缘计算——而非从零设计的全新架构。
- 为运行在智能平面（区别于现有控制/数据/管理平面）中的网络智能服务推导出功能性需求。
- 按不同利益相关方角色梳理用例：感知共享（应用向网络、网络向应用互通信息）、跨平台可移植性、快速原型开发与验证测试。
- 明确定位为架构/立场性论文：未报告实现、试验平台或量化结果。

## Why it matters / what's new (EN)
The KB's O-RAN/MEC coverage so far is dominated by point solutions — specific xApps, specific slicing schemes, specific digital twins. AI-EDGE proposes a layer *underneath* all of those: a standardized interface so that any AI-native RAN or MEC application can exchange awareness with the network without a bespoke integration each time. It is the cellular-domain instance of a pattern the KB has seen argued for generically before (network-as-agent-comm-service, 2607.18138) but here grounded specifically in O-RAN and 3GPP Edge App / ETSI MEC interfaces, giving the "intelligence plane" idea a concrete substrate to attach to. No eval exists yet, so treat this as a design proposal to watch for prototype follow-ups against, not a validated result.

## Why it matters / what's new (ZH)
KB 目前对 O-RAN/MEC 的覆盖以具体点方案为主——特定的 xApp、特定的切片方案、特定的数字孪生。AI-EDGE 提出的是位于这些方案*之下*的一层：一个标准化接口，使任何 AI 原生 RAN 或 MEC 应用都能与网络交换感知信息，而无需每次都做定制集成。这是 KB 此前泛泛论述过的一种模式（网络即智能体通信服务，2607.18138）在蜂窝领域的具体化实例，但这里将其明确落地于 O-RAN 与 3GPP Edge App / ETSI MEC 接口，为"智能平面"这一构想提供了具体的基础设施依托。目前尚无评估结果，应将其视为一项待后续原型验证跟进的架构提案，而非已验证的成果。

## Images
