---
id: 2026-09-03_heliumos-carrier-wifi-offload-platform
date_published: 2026-09-01
date_found: 2026-09-03
type: product
technology: wifi
title_en: "HeliumOS: a carrier-grade Wi-Fi offload platform with real-time session steering"
title_zh: "HeliumOS：面向运营商的 Wi-Fi 分流平台与实时会话调度"
url: "https://wifinowglobal.com/news-blog/redefining-indoor-mobile-helium-launches-next-generation-quality-assured-wi-fi-offload-solution-with-heliumos/"
source_quality: full
topics: [Wi-Fi-offload, carrier-Wi-Fi, session-steering, MVNO]
topic_primary: roaming-mobility
topics_secondary: [wifi7-deployment]
novelty_score: 1
---

## Summary (EN)
Helium launched HeliumOS on September 1, 2026, describing it as "an operating system for the business of connectivity" that lets carriers, MVNOs and venue owners turn an existing Wi-Fi footprint into a managed indoor-coverage layer for mobile subscribers. Michelle Donegan's Light Reading report of 2 September 2026, "Helium seeks new heights for Wi-Fi offload model" (https://www.lightreading.com/wifi/helium-seeks-new-heights-for-wi-fi-offload-model), says the platform has five selectable components but names only four of them: analytics, a Wi-Fi toolkit for building offload into mobile applications, a Wi-Fi offload experience manager (branded "Wi-Fi Offload Experience", WOX, in Helium's own announcement), and a BSS/OSS platform for MVNO enablement. The centerpiece, per the company, is WOX's real-time session control — deciding, on a per-session basis and using live quality metrics, whether a phone should be kept on cellular, moved onto Wi-Fi, or pulled back off Wi-Fi when quality degrades. A companion component, HeliumAI, is described as providing agentic-AI-based visibility into service analytics, including QoS metrics.

Per the same Light Reading article, Helium's underlying network comprises roughly 141,000 Wi-Fi access points, with about 40,000 actively carrying traffic, and between 1.5 and 3 million users depending on the time of day, deployed across venues such as airports, shopping centers and casinos; named carrier relationships include AT&T and Telefónica Mexico (the latter cited at roughly 1,000 access points). Helium's own account (Sept 1) instead frames scale in terms of "tens of thousands of access points" across the US, Mexico and Brazil serving "millions of users daily," and cites operation at scale during large public events (Mardi Gras, the Super Bowl). Light Reading reports that the first customer for HeliumOS is Affinity Ventures — Andrew Yang's investment firm, which acquired Helium Mobile in June and owns the MVNOs Noble Mobile and Helium Mobile.

## Summary (ZH)
Helium 于 2026 年 9 月 1 日发布了 HeliumOS，将其描述为"一套服务于连接业务的操作系统"，可让运营商、虚拟运营商（MVNO）及场所业主把现有 Wi-Fi 覆盖转化为面向移动用户的托管室内覆盖层。据 Michelle Donegan 在 Light Reading 2026 年 9 月 2 日的报道《Helium seeks new heights for Wi-Fi offload model》（https://www.lightreading.com/wifi/helium-seeks-new-heights-for-wi-fi-offload-model），该平台包含五个可选组件，但报道仅点名了其中四个：分析工具、用于在移动应用中构建分流能力的 Wi-Fi 工具包、Wi-Fi 分流体验管理器（Helium 自身发布中称之为"Wi-Fi Offload Experience"，WOX），以及面向 MVNO 赋能的 BSS/OSS 平台。据公司介绍，其核心是 WOX 的实时会话控制——基于实时质量指标、按会话逐一决定：该手机应保持在蜂窝网络上、切换到 Wi-Fi，还是在 Wi-Fi 质量下降时切回蜂窝网络。配套组件 HeliumAI 被描述为提供基于智能体 AI 的服务分析可视化能力，包括 QoS 指标。

据同一篇 Light Reading 报道，Helium 底层网络约有 14.1 万个 Wi-Fi 接入点，其中约 4 万个正在实际承载流量，用户数视一天中的时段在 150 万至 300 万之间，部署场所包括机场、购物中心和赌场；报道点名的运营商合作方包括 AT&T 与墨西哥电信（Telefónica Mexico，后者约有 1000 个接入点）。而 Helium 自身的介绍（9 月 1 日）则以"数万个接入点"（覆盖美国、墨西哥、巴西，每日服务"数百万用户"）来描述规模，并援引其在大型公共活动（如狂欢节、超级碗）中的规模化运行经验。Light Reading 报道称，HeliumOS 的首个客户是 Affinity Ventures——杨安泽（Andrew Yang）旗下的投资机构，其于 6 月收购了 Helium Mobile，并拥有 Noble Mobile 与 Helium Mobile 两家 MVNO。

## Key technical points (EN)
- Five selectable components per Light Reading (2 Sep 2026), of which the article names four: analytics, a Wi-Fi toolkit for building offload into mobile applications, a Wi-Fi offload experience manager (WOX), and a BSS/OSS platform for MVNO enablement. A fifth is referenced but not named in any reached source.
- WOX performs real-time, per-session cellular-vs-Wi-Fi steering driven by live quality metrics — Light Reading quotes company CEO Mario Di Dio framing it as "Now the carrier can decide at any given time, where should I keep them? Should I keep them on the cellular network, bring them onto Wi-Fi, kick them off the Wi-Fi because the quality is not good?"
- HeliumAI adds agentic-AI-based service analytics visibility, including QoS metrics, as a companion capability.
- Network scale (Light Reading, 2 Sep 2026): ~141,000 Wi-Fi APs, ~40,000 carrying live traffic, 1.5-3M users depending on time of day; AT&T and Telefónica Mexico (~1,000 APs) named as carrier partners.
- Network scale (company account, Sept 1): "tens of thousands" of APs across the US, Mexico and Brazil, "millions of users daily," operated at scale during Mardi Gras and the Super Bowl.
- First HeliumOS customer, per Light Reading: Affinity Ventures (parent of MVNOs Noble Mobile and Helium Mobile).
- Neither source-article specifies the underlying offload protocol stack (e.g. Hotspot 2.0 / ANDSF / ePDG-style mechanisms) — WOX is described at the product/business-logic level, not the protocol level.

## Key technical points (ZH)
- 据 Light Reading（2026 年 9 月 2 日）报道，平台含五个可选组件，报道点名了其中四个：分析工具、用于在移动应用中构建分流能力的 Wi-Fi 工具包、Wi-Fi 分流体验管理器（WOX）、面向 MVNO 赋能的 BSS/OSS 平台；第五个组件被提及但未被任何已获取来源点名。
- WOX 基于实时质量指标，按会话逐一执行蜂窝网络与 Wi-Fi 之间的实时调度——Light Reading 援引公司 CEO Mario Di Dio 的原话："现在运营商可以随时决定：该把用户放在哪里？是让他们留在蜂窝网络上、把他们切到 Wi-Fi，还是因为 Wi-Fi 质量不好而把他们踢下 Wi-Fi？"
- 配套组件 HeliumAI 提供基于智能体 AI 的服务分析可视化能力，包括 QoS 指标。
- 网络规模（Light Reading，2026 年 9 月 2 日）：约 14.1 万个 Wi-Fi 接入点，约 4 万个实际承载流量，用户数视时段在 150 万至 300 万之间；点名的运营商合作方为 AT&T 与墨西哥电信（约 1000 个接入点）。
- 网络规模（公司自述，9 月 1 日）：覆盖美国、墨西哥、巴西的"数万个"接入点，每日服务"数百万用户"，并援引在狂欢节、超级碗等大型活动中的规模化运行经验。
- 据 Light Reading 报道，HeliumOS 的首个客户为 Affinity Ventures（旗下拥有 Noble Mobile 与 Helium Mobile 两家 MVNO 的投资机构）。
- 两篇来源报道均未说明底层分流所依赖的具体协议栈（如 Hotspot 2.0 / ANDSF / ePDG 类机制）——WOX 是在产品与业务逻辑层面被描述的，而非协议层面。

## Why it matters / what's new (EN)
This knowledge base's roaming-and-mobility coverage has so far been standards-track (Fast BSS-Transition, MLO-roam, MLME roaming context). HeliumOS is a deployment-side data point at the opposite end of the same problem: a commercial platform whose entire value proposition is making the cellular-vs-Wi-Fi steering decision well, at carrier scale, using live quality signals rather than static policy. It extends the existing carrier-offload thread here (2026-06-27's Helium/Charter/ambient-power roundup) with the first named-carrier, named-AP-count data point for this specific operator, and ties the deployment story to the standards-side roaming-and-mobility topic rather than only to Wi-Fi 7 deployment.

## Why it matters / what's new (ZH)
本知识库的漫游与移动性主题此前主要覆盖标准侧工作（快速 BSS 切换、MLO 漫游、面向漫游上下文的 MLME 扩展）。HeliumOS 则是同一问题在部署侧的对应数据点：这是一个整体价值主张就是"在运营商规模上、基于实时质量信号（而非静态策略）做好蜂窝网络与 Wi-Fi 之间调度决策"的商业平台。它延续了本知识库中已有的运营商分流线索（2026-06-27 的 Helium/Charter/环境能量摘要条目），首次为这一具体运营商提供了点名的运营商合作方与接入点数量数据，并把这条部署侧叙事与标准侧的漫游与移动性主题（而不仅是 Wi-Fi 7 部署生态）联系起来。

## Images

None.
