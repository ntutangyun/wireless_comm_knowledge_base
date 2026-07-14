---
id: 2026-07-14_arxiv-3gpp-6g-ran-architecture-overview
date_published: 2026-07-12
date_found: 2026-07-14
type: academic-paper
title_en: "The Emerging 3GPP 6G RAN Architecture: An Overview"
title_zh: "正在成形的 3GPP 6G RAN 架构综述"
url: "https://arxiv.org/abs/2607.10543"
technology: cellular
source_quality: abstract_only
topics: [6G, RAN, 3GPP, CU-DU-split, service-based-architecture]
topic_primary: 6g-vision
topics_secondary: [open-ran, cellular-ai]
novelty_score: 2
---

## Summary (EN)
This short overview (7 pages, 4 figures) by Xingqin Lin lays out the RAN architecture that 3GPP is converging on for 6G, framed as an evolution of the 5G design rather than a clean-slate redesign. The central message is continuity: the modular base-station decomposition that 5G introduced — a Central Unit (CU) and Distributed Unit (DU) split, with the Radio Unit (RU) now recognized as a distinct logical component — is preserved into 6G to protect multi-vendor interoperability. The paper walks through where 6G refines that split rather than replacing it.

On the interface question that has dominated 6G RAN debates, the overview reports that the working consensus favors **point-to-point signaling over a service-based interface (SBI) for connectivity services** — i.e. 6G does not wholesale adopt the service-based architecture that the 5G core uses, keeping the latency-sensitive connectivity plane on classic point-to-point interfaces. Service-based approaches remain on the table for non-connectivity functions.

The author flags the still-open research areas: the RAN–core interface for non-connectivity services, data-collection frameworks (the plumbing that AI functions depend on), and how AI is integrated natively into the 6G RAN. The value of the piece is as an early, citable map of the architectural boundary decisions being taken in 3GPP as 6G standardization gets underway.

## Summary (ZH)
本文是 Xingqin Lin 撰写的简短综述（7 页、4 图），勾勒出 3GPP 正在为 6G 汇聚的 RAN 架构，并将其定位为 5G 设计的演进而非推倒重来。核心信息是"延续"：5G 引入的模块化基站分解——中央单元（CU）与分布单元（DU）分离，且射频单元（RU）现被确立为独立逻辑组件——在 6G 中得以保留，以维护多厂商互操作性。文章逐一说明 6G 在何处细化而非替换该分割。

在主导 6G RAN 争论的接口问题上，综述指出当前共识倾向于**连接性服务采用点到点信令而非服务化接口（SBI）**——即 6G 不会整体采纳 5G 核心网所用的服务化架构，将时延敏感的连接面保留在经典点到点接口上；服务化方式仍可用于非连接性功能。

作者标注了仍然开放的研究方向：面向非连接性服务的 RAN–核心网接口、数据采集框架（AI 功能所依赖的底层管道），以及 AI 如何原生融入 6G RAN。本文的价值在于为 6G 标准化启动之际、3GPP 正在做出的架构边界决策提供一份早期、可引用的地图。

## Key technical points (EN)
- CU/DU split and the RU-as-logical-component model carried over from 5G into 6G for vendor interoperability.
- Working consensus: point-to-point signaling preferred over SBI for **connectivity** services (SBA not adopted wholesale on the connectivity plane).
- Open areas: RAN–core interface for non-connectivity services; data-collection frameworks; native AI integration.
- Framing is evolution-of-5G, not clean-slate — boundary refinement rather than paradigm change.

## Key technical points (ZH)
- CU/DU 分割与"RU 作为逻辑组件"模型从 5G 延续至 6G，以保障厂商互操作性。
- 当前共识：**连接性**服务偏好点到点信令而非 SBI（连接面不整体采纳 SBA）。
- 开放方向：面向非连接性服务的 RAN–核心网接口、数据采集框架、原生 AI 集成。
- 定位为 5G 演进而非白纸重设——边界细化而非范式变革。

## Why it matters / what's new (EN)
The KB's `6g-vision` bin so far holds AI-native and autogenic-management position papers (e.g. `2026-07-11_arxiv-autogenic-6g-network-management`); this entry adds the concrete architectural-baseline view — the CU/DU/RU and interface decisions that those AI-native features will have to plug into. The point-to-point-vs-SBI call is the single most consequential early decision for anyone modeling 6G RAN control-plane latency or planning O-RAN alignment, and this is an early, author-attributable statement of where 3GPP is landing.

## Why it matters / what's new (ZH)
KB 的 `6g-vision` 分箱此前收录的多为 AI 原生与自生管理立场论文（如 `2026-07-11_arxiv-autogenic-6g-network-management`）；本条目补上了具体的架构基线视角——即那些 AI 原生特性必须对接的 CU/DU/RU 与接口决策。点到点 vs SBI 之争是对任何建模 6G RAN 控制面时延或规划 O-RAN 对齐者最具后果的早期决策，而本文是 3GPP 落点的早期、可署名陈述。
