---
id: 2026-06-11_arxiv-llm-nwdaf-ai-native-6g
date_published: 2026-06-10
date_found: 2026-06-11
type: academic-paper
technology: cellular
title_en: "LLM-Enabled NWDAF: A Step Toward AI-Native 6G Network Intelligence"
title_zh: "LLM 赋能的 NWDAF：迈向 AI 原生 6G 网络智能"
url: "https://arxiv.org/abs/2606.11877"
source_quality: full
topics: [NWDAF, 5G-core, LLM, intent-based-networking, Free5GC]
topic_primary: cellular-ai
topics_secondary: [6g-vision]
novelty_score: 2
---

## Summary (EN)

Daniel, Alhussein, Li, Liang and Damiani (arXiv 2606.11877, submitted 10 June 2026) present an open-source Network Data Analytics Function (NWDAF) for the Free5GC 5G core, fronted by an LLM intent interface — positioning it as a concrete step from procedural network management toward declarative, AI-native 6G operations. The gap they target: NWDAF is the standardised hook for zero-touch automation, but open implementations are scarce and operator-facing interfaces are raw APIs.

The implementation enhances Free5GC's AMF and SMF with RESTful event-subscription APIs so the NWDAF receives real-time registration, session and handover notifications; collected metrics are exposed via Prometheus, and a prediction module forecasts handover target cells. The LLM layer is a RAG pipeline: operator queries are embedded, cosine-matched against a validated intent repository, classified into seven operational categories (AMF/SMF subscribe-unsubscribe, active-UE query, UE location report, registration-state analysis), then routed either to PromQL queries or JSON REST calls, with the LLM summarising results in natural language.

Evaluation over 700 test prompts shows the embedding-retrieval approach beating direct LLM classification: text-embedding-ada-002 hits 98.43% intent accuracy vs 89.5% for GPT-4o (and 55.1% for GPT-4o-mini) — retrieval from a validated repository avoids generative hallucination. Handover prediction reaches ~80% accuracy (gradient boosting best at 80.65%). A two-week run with four virtual gNodeBs and four UEs shows ~10 ms subscription acknowledgment, ~109 ms notification processing, and negligible NWDAF footprint (0.06% CPU, 27 MB). Code and mobility datasets are released publicly.

## Summary (ZH)

Daniel、Alhussein、Li、Liang 与 Damiani（arXiv 2606.11877，2026 年 6 月 10 日提交）发布了基于 Free5GC 5G 核心网的开源 NWDAF（网络数据分析功能）实现，并在其上叠加 LLM 意图接口——定位为从过程式网络管理走向声明式、AI 原生 6G 运维的具体一步。其针对的缺口是：NWDAF 是零接触自动化的标准化挂钩，但开源实现稀缺，且面向运维人员的接口只有原始 API。

实现上，作者为 Free5GC 的 AMF 与 SMF 增加了 RESTful 事件订阅 API，使 NWDAF 实时接收注册、会话与切换通知；指标经 Prometheus 暴露，并带有预测 UE 切换目标小区的模块。LLM 层是一条 RAG 流水线：运维查询先做向量化，与经过验证的意图库做余弦匹配，归入七个操作类别（AMF/SMF 订阅与退订、活跃 UE 查询、UE 位置报告、注册状态分析），再路由到 PromQL 查询或 JSON REST 调用，最后由 LLM 生成自然语言摘要。

在 700 条测试提示上，嵌入检索方式优于 LLM 直接分类：text-embedding-ada-002 意图准确率 98.43%，GPT-4o 为 89.5%（GPT-4o-mini 仅 55.1%）——从验证过的意图库检索避免了生成式幻觉。切换预测准确率约 80%（梯度提升最高 80.65%）。在 4 个虚拟 gNodeB、4 个 UE 上连续运行两周：订阅确认约 10 ms，通知处理约 109 ms，NWDAF 资源占用可忽略（CPU 0.06%、内存 27 MB）。代码与移动性数据集已公开。

## Key technical points (EN)

- First open-source NWDAF with real AMF/SMF event subscriptions (prior open work was conceptual or toy-dataset based); Free5GC NFs extended with RESTful subscription APIs.
- RAG-style intent interface: embed → cosine-match against validated intent repository → 7 categories → PromQL/REST routing → LLM summarisation.
- Embedding retrieval beats direct LLM classification: 98.43% (ada-002) vs 89.5% (GPT-4o) over 700 prompts — the validated-repository design is the accuracy lever.
- Handover-cell prediction from collected mobility data: ~80% accuracy across four classic ML models.
- Lightweight: ~10 ms subscription ack, ~109 ms notification processing, 0.06% CPU / 27 MB over a two-week 4-gNB/4-UE deployment; code + datasets public.

## Key technical points (ZH)

- 首个带真实 AMF/SMF 事件订阅的开源 NWDAF（此前开源工作多为概念框架或玩具数据集）；为 Free5GC 网络功能扩展了 RESTful 订阅 API。
- RAG 式意图接口：向量化 → 与验证意图库余弦匹配 → 七类操作 → PromQL/REST 路由 → LLM 摘要。
- 嵌入检索优于 LLM 直接分类：700 条提示上 98.43%（ada-002）对 89.5%（GPT-4o）——验证库设计是准确率关键。
- 基于采集的移动性数据预测切换目标小区：四种经典 ML 模型约 80% 准确率。
- 轻量：订阅确认约 10 ms、通知处理约 109 ms、CPU 0.06% / 内存 27 MB（4 gNB / 4 UE 两周部署）；代码与数据集公开。

## Why it matters / what's new (EN)

The KB's agentic-core thread so far has AgentxGCore (2026-06-03_arxiv-agentxgcore-agentic-ai-mobile-core, MCP+ReAct+A2A agents over the core) and DAST for O-RAN cross-interface anomaly detection (2026-06-05_arxiv-dast-vlm-llm-oran-cross-interface-anomaly). This entry adds the standardised-analytics anchor: instead of agent frameworks wrapping the core, it instruments the 3GPP-defined NWDAF itself and shows that a retrieval-first (not generation-first) LLM interface is the more reliable intent front-end — a finding directly reusable by the intent-based O-RAN and agentic-core work already on file. The open-source release also lowers the barrier for reproducible NWDAF research, which the authors note has been a chronic gap.

## Why it matters / what's new (ZH)

KB 中智能体核心网方向已有 AgentxGCore（2026-06-03_arxiv-agentxgcore-agentic-ai-mobile-core，MCP+ReAct+A2A 智能体包裹核心网）与面向 O-RAN 跨接口异常检测的 DAST（2026-06-05_arxiv-dast-vlm-llm-oran-cross-interface-anomaly）。本条目补上了标准化分析的锚点：不是用智能体框架包裹核心网，而是直接为 3GPP 定义的 NWDAF 做工程化实现，并证明检索优先（而非生成优先）的 LLM 接口是更可靠的意图前端——这一结论可直接被已收录的意图驱动 O-RAN 与智能体核心网工作复用。开源发布也降低了可复现 NWDAF 研究的门槛——作者指出这一直是个长期缺口。

## Images

![5G architecture with LLM-powered NWDAF | 带 LLM 赋能 NWDAF 的 5G 架构](https://arxiv.org/html/2606.11877v1/x1.png)
![LLM-enhanced NWDAF system architecture | LLM 增强的 NWDAF 系统架构](https://arxiv.org/html/2606.11877v1/x2.png)
![Natural-language query processing pipeline | 自然语言查询处理流水线](https://arxiv.org/html/2606.11877v1/x4.png)
