---
id: 2026-07-03_arxiv-ai-native-6g-air-interface-3gpp
date_published: 2026-06-25
date_found: 2026-07-03
type: academic-paper
title_en: "Toward AI-Native 6G Air Interface: A 3GPP Perspective on Protocol Framework"
title_zh: "迈向 AI 原生 6G 空口：3GPP 视角下的协议框架"
url: "https://arxiv.org/abs/2606.27466"
technology: cellular
source_quality: abstract_only
topics: [6G, AI-native, 3GPP, air-interface, neural-receiver]
topic_primary: 6g-vision
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

Xingqin Lin's position paper (submitted 25 June 2026, 8 pages) tackles the question of what "AI-native" should concretely mean for the 6G air interface from a 3GPP standardization perspective. The core argument: AI-nativeness requires architectural changes beyond bolting ML algorithms onto individual functions — but standardization should *not* prescribe model architectures. Instead, 3GPP should define the protocol machinery around AI-enabled functions: how they are configured, validated, and monitored across vendors, preserving implementation freedom while guaranteeing multi-vendor interoperability.

The paper proposes a protocol framework organized around the life-cycle of AI-enabled air-interface functions — configuration, validation, monitoring — and grounds it in a concrete case study: neural receiver-assisted reference-signal adaptation, showing how a network can adapt reference-signal overhead when the receiver is a learned model rather than a conventional one. A key architectural element is the safe-reversion protocol: an explicitly standardized fallback path to conventional (non-AI) operation when a learned component underperforms or encounters out-of-distribution conditions.

This is a notable input to the 6G standardization debate because it comes from the 3GPP-protocol angle rather than the algorithm angle that dominates the AI-air-interface literature: the standard defines interfaces, life-cycle states, and reversion guarantees; vendors keep the models. It complements the KB's existing AI-native-RAN thread (protocol-framework view vs. the architecture and RAN-automation views).

## Summary (ZH)

Xingqin Lin 的立场论文（2026 年 6 月 25 日提交，8 页）从 3GPP 标准化视角回答一个问题："AI 原生"对 6G 空口具体应当意味着什么。核心论点是：真正的 AI 原生需要超越"在单个功能上叠加 ML 算法"的架构性变革——但标准化不应规定模型架构。相反，3GPP 应当定义围绕 AI 功能的协议机制：跨厂商的配置、验证与监控方式，在保证多厂商互操作的同时保留实现自由。

论文提出了一个围绕 AI 空口功能生命周期（配置、验证、监控）组织的协议框架，并以具体案例落地：神经接收机辅助的参考信号自适应——当接收端是学习模型而非常规接收机时，网络如何削减参考信号开销。框架的关键要素之一是安全回退协议：当学习组件性能不达标或遇到分布外条件时，显式标准化的回退到常规（非 AI）操作的路径。

这篇论文对 6G 标准化辩论的价值在于其切入角度：它从 3GPP 协议视角而非主导 AI 空口文献的算法视角出发——标准定义接口、生命周期状态与回退保证，模型归厂商所有。它与本知识库现有的 AI 原生 RAN 线索形成互补（协议框架视角 vs. 架构与 RAN 自动化视角）。

## Key technical points (EN)

- Thesis: AI-nativeness = architectural/protocol change, not per-function ML; standards should avoid prescribing model architectures.
- Proposed 3GPP protocol framework covers configuration, validation, and monitoring of AI-enabled air-interface functions across vendors.
- Case study: neural receiver-assisted reference-signal adaptation — adapting RS overhead to a learned receiver.
- Safe-reversion protocol: standardized fallback to conventional operation when the AI component degrades.
- Single-author work from a prominent 3GPP contributor; 8 pages, 5 figures; framed as input to 6G study-item discussions.

## Key technical points (ZH)

- 论点：AI 原生 = 架构/协议层面的变革，而非逐功能加 ML；标准应避免规定模型架构。
- 提出的 3GPP 协议框架覆盖 AI 空口功能的跨厂商配置、验证与监控。
- 案例研究：神经接收机辅助的参考信号自适应——针对学习型接收机削减 RS 开销。
- 安全回退协议：AI 组件性能退化时标准化回退到常规操作。
- 出自知名 3GPP 贡献者的单作者论文；8 页、5 图；定位为 6G 研究项目讨论的输入。

## Why it matters / what's new (EN)

The KB's AI-native 6G thread so far covers architecture-level visions (AI-native closed-loop security, agentic AI-RAN clusters, LLM-based gNB configuration). This paper adds the missing standards-protocol layer: what 3GPP would actually have to specify (life-cycle states, validation hooks, monitoring, safe reversion) for learned air-interface components to interoperate across vendors. The neural-receiver RS-adaptation case study is a concrete preview of the first AI-native feature likely to be standardized in 6G Release discussions.

## Why it matters / what's new (ZH)

本知识库的 AI 原生 6G 线索此前多为架构层愿景（AI 原生闭环安全、智能体化 AI-RAN 集群、基于 LLM 的 gNB 配置）。本文补上了缺失的标准协议层：为使学习型空口组件实现跨厂商互操作，3GPP 实际需要规定什么（生命周期状态、验证钩子、监控、安全回退）。神经接收机参考信号自适应案例是 6G 版本讨论中最可能率先标准化的 AI 原生特性的具体预览。
