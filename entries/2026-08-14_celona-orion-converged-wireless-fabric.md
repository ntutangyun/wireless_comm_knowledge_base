---
id: 2026-08-14_celona-orion-converged-wireless-fabric
date_published: 2026-08-13
date_found: 2026-08-14
type: industry-news
title_en: "Celona Orion: AI-driven converged fabric for private 5G, Wi-Fi 7, public cellular and satellite"
title_zh: "Celona Orion：面向专网 5G、Wi-Fi 7、公网蜂窝与卫星的 AI 驱动融合无线平台"
url: "https://wifinowglobal.com/news/celona-says-new-ai-driven-orion-platform-ushers-in-convergence-of-private-5g-wi-fi-cellular-satellite/"
source_quality: full
topics: [agentic-AI, WiFi-7, private-5G, enterprise, convergence]
topic_primary: agentic-wifi
topics_secondary: [wifi7-deployment, roaming-mobility]
novelty_score: 2
---

## Summary (EN)
Celona — until now a private-5G-native enterprise vendor with about 225 enterprise customers — announced Orion (13 Aug 2026, reported by Wi-Fi NOW's Claus Hetting), a unified "wireless fabric" that folds private 5G, Wi-Fi 7, public cellular, and Starlink satellite connectivity into a single converged enterprise networking solution. Wi-Fi 7 access points are included in the subscription at no extra cost, positioning Wi-Fi as a first-class citizen alongside Celona's original private-cellular offering rather than as a competing silo. The hardware remains physically separate (distinct base stations and APs, for propagation reasons); the convergence happens in the management and client layers.

Two mechanisms stand out. First, the management layer — "Orchestrator AI" with "Celona Brain" — is described as "the agentic OS for converged wireless": AI agents that collaborate with the enterprise's own LLM platforms, with the stated goal of shifting wireless teams from hands-on operators to infrastructure orchestrators. Second, on the client side, Celona released **AerConnect**, an open-source wireless agent that handles device-level multi-network connectivity (choosing/steering between Wi-Fi, private 5G, public cellular, satellite). CEO Rajeev Shah emphasises AerConnect is 100% open source and explicitly not tied to Celona infrastructure.

The announcement is a signal of where enterprise wireless is converging: the differentiation is moving out of the radio and into (a) an agentic, LLM-integrated network-operations layer and (b) a client-side connection-steering agent that treats Wi-Fi and cellular as interchangeable underlays.

## Summary (ZH)
Celona——此前以企业专网 5G 为主业、拥有约 225 家企业客户——于 2026 年 8 月 13 日发布 Orion 平台（Wi-Fi NOW 的 Claus Hetting 报道）：一个把专网 5G、Wi-Fi 7、公网蜂窝和 Starlink 卫星连接整合为单一"无线织物（wireless fabric）"的融合企业组网方案。Wi-Fi 7 AP（无线接入点）以订阅内免费形式提供，使 Wi-Fi 与 Celona 原有的专网蜂窝业务并列为一等公民，而非相互竞争的孤岛。硬件层面仍保持分离（基站与 AP 各自独立，出于传播特性差异）；融合发生在管理层与终端侧。

两个机制值得注意。其一，管理层"Orchestrator AI"+"Celona Brain"被称为"融合无线的智能体操作系统（agentic OS）"：AI 智能体可与企业自有的 LLM 平台协作，目标是让无线运维团队从"操作者"转变为"基础设施编排者"。其二，终端侧发布了 **AerConnect**——一个开源的无线智能体，负责设备级多网络连接（在 Wi-Fi、专网 5G、公网蜂窝、卫星之间选择与切换）。CEO Rajeev Shah 强调 AerConnect 完全开源，且不绑定 Celona 基础设施。

该发布标志着企业无线的融合方向：差异化正从射频层转移到（a）与 LLM 集成的智能体化网络运维层，以及（b）把 Wi-Fi 与蜂窝视为可互换底层的终端侧连接调度智能体。

## Key technical points (EN)
- Orion converges four access technologies under one platform: private 5G (deterministic campus coverage), Wi-Fi 7 (high-bandwidth applications, subscription-bundled APs), public cellular (guest/remote), and Starlink satellite (remote sites).
- Hardware stays separate per technology; convergence is at the management plane ("Orchestrator AI" / "Celona Brain") and the client ("AerConnect").
- The management layer is framed as an "agentic OS": AI agents that interoperate with enterprise LLM platforms for network operations.
- AerConnect is an open-source client-side wireless agent for multi-network steering, usable without Celona infrastructure.
- Celona claims this is the first single-vendor convergence of all four access types; it serves ~225 enterprise customers today.

## Key technical points (ZH)
- Orion 在一个平台下融合四种接入技术：专网 5G（园区确定性覆盖）、Wi-Fi 7（大带宽应用，AP 含在订阅内）、公网蜂窝（访客/远程）、Starlink 卫星（偏远站点）。
- 各技术硬件保持独立；融合发生在管理面（"Orchestrator AI" / "Celona Brain"）与终端侧（"AerConnect"）。
- 管理层被定位为"智能体操作系统"：AI 智能体与企业 LLM 平台协作完成网络运维。
- AerConnect 是开源的终端侧无线智能体，负责多网络选择与切换，不绑定 Celona 基础设施。
- Celona 称这是首个单厂商四接入融合方案；目前拥有约 225 家企业客户。

## Why it matters / what's new (EN)
The KB already tracks enterprise-management convergence (HPE Aruba Central + Mist) and agentic network operations (Cisco AgenticOps, the agentic-wifi bin), but this is the first entry where a vendor (a) bundles Wi-Fi 7 as a no-extra-cost component of a private-5G-led subscription, (b) adds satellite as a fourth managed access leg, and (c) ships an *open-source client-side* steering agent. AerConnect is the notable piece for the Wi-Fi community: client-side multi-access steering has historically been OS-proprietary (Windows/Android OEM logic) or standards-driven (ANDSF, 3GPP ATSSS); an open-source, infrastructure-agnostic agent is a new point in that design space and worth watching for how it interacts with Wi-Fi roaming (802.11r/k/v) and MLO device behaviour.

## Why it matters / what's new (ZH)
KB 已收录企业管理面融合（HPE Aruba Central + Mist）与智能体化网络运维（Cisco AgenticOps 及 agentic-wifi 主题），但本条目是首个同时具备以下三点的厂商动作：（a）把 Wi-Fi 7 作为专网 5G 订阅的免费组件捆绑；（b）把卫星纳入第四条受管接入路径；（c）发布*开源终端侧*调度智能体。对 Wi-Fi 社区而言，AerConnect 是最值得关注的部分：终端侧多接入调度历来要么是操作系统私有逻辑（Windows/Android OEM），要么由标准驱动（ANDSF、3GPP ATSSS）；一个开源、不绑定基础设施的智能体是该设计空间中的新点位，值得关注其与 Wi-Fi 漫游（802.11r/k/v）及 MLO 终端行为的交互。

## Images
![Celona Orion converged wireless fabric overview | Celona Orion 融合无线平台概览](https://wifinowevents.s3.amazonaws.com/uploads/2026/08/CelonaHero-1-1024x409.png)
![Orion platform architecture screenshot | Orion 平台架构截图](https://wifinowevents.s3.amazonaws.com/uploads/2026/08/Screenshot-2026-08-13-at-11.01.27-1024x852.png)
