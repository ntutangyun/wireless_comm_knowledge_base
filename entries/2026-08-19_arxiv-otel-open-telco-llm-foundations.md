---
id: 2026-08-19_arxiv-otel-open-telco-llm-foundations
date_published: 2026-08-15
date_found: 2026-08-19
type: academic-paper
technology: cellular
title_en: "OTel: Building Domain-Specialized Telecom LLM Foundations for Intelligent Networks"
title_zh: "OTel：为智能网络构建领域专用的电信大模型基座"
url: "https://arxiv.org/abs/2608.15436"
source_quality: full
topics: [telecom-LLM, RAG, embedding, reranker, instruction-tuning, 3GPP, open-source, foundation-models, AI-native-network]
topic_primary: cellular-ai
topics_secondary: [6g-vision, open-ran]
novelty_score: 2
---

## Summary (EN)
A large team led by Farbod Tavakkoli with authors including Kenneth Church, Gregory Diamos, Lina Bariah, Ali Maatouk and Imtiaz Karim (arXiv 15 Aug 2026; **accepted at the ACM AI Leadership Summit, Breakthrough Impact Highlights Track, 2026**) present **Open Telco (OTel)**, an open-source foundation for retrieval-augmented telecom AI, credited to 100+ domain experts spanning AT&T, GSMA, academia and technology partners. The motivation is a gap the authors argue the field keeps hitting: telecom has good *benchmarks* but lacks shared *training data and post-trained baselines* to make frontier LLMs reliable on 3GPP/O-RAN/GSMA material, especially for RAG where retrieval quality and abstention-under-insufficient-context matter as much as generation.

OTel ships four curated datasets totalling **326,767 high-confidence examples** distilled from ~1.1 million raw points across 3GPP specifications, GSMA documents, O-RAN materials, RFCs and academic papers: OTel-Embedding (anchor/positive/negative passage triples), OTel-Reranker (query-passage relevance pairs), OTel-LLM (context-grounded instruction tuning with abstention flags), and OTel-Safety (training abstention when context is insufficient). Alongside come **30 fully post-trained baseline models**: 10 embedding models (22M–8B params), 3 rerankers (0.6B–8B), and 17 language models (270M–32B), built on Gemma 3, Qwen 3, OLMo 3, Mistral 3 and others. Reported post-training results: **93.5% NDCG@10** embedding retrieval, **0.952 MRR@10** reranking, and **88.2%** language-model correctness. The authors note the models had been downloaded over 16 million times by May 2026 with 157+ media mentions. Everything is on Hugging Face under Apache-2.0 with model/dataset cards and Croissant 1.1 metadata. Stated limits: English-only and text-centric (excludes diagrams/structured tables), and evaluation on held-out OTel partitions rather than fully independent benchmarks, so aggregate scores can mask subdomain variation.

## Summary (ZH)
由 Farbod Tavakkoli 领衔、作者含 Kenneth Church、Gregory Diamos、Lina Bariah、Ali Maatouk 与 Imtiaz Karim 的大团队（2026 年 8 月 15 日 arXiv；**被 ACM AI Leadership Summit 2026 Breakthrough Impact Highlights Track 接收**）发布 **Open Telco（OTel）**——一个面向检索增强电信 AI 的开源基座，署名 100+ 领域专家，横跨 AT&T、GSMA、学术界与技术伙伴。动机是作者认为该领域反复撞上的缺口：电信有好的*基准*，却缺少共享的*训练数据与后训练基线*，以使前沿 LLM 在 3GPP/O-RAN/GSMA 材料上可靠——尤其在 RAG 中，检索质量与"上下文不足时的弃答"和生成同等重要。

OTel 提供四个精选数据集，共 **326,767 条高置信示例**，从 3GPP 规范、GSMA 文档、O-RAN 材料、RFC 与学术论文的约 110 万原始点提炼而来：OTel-Embedding（锚/正/负段落三元组）、OTel-Reranker（查询-段落相关性对）、OTel-LLM（带弃答标志的上下文接地指令微调）、OTel-Safety（上下文不足时训练弃答）。配套 **30 个完整后训练基线模型**：10 个嵌入模型（22M–8B）、3 个重排器（0.6B–8B）、17 个语言模型（270M–32B），基于 Gemma 3、Qwen 3、OLMo 3、Mistral 3 等。报告的后训练结果：嵌入检索 **NDCG@10 93.5%**、重排 **MRR@10 0.952**、语言模型正确率 **88.2%**。作者称截至 2026 年 5 月模型下载超 1600 万次、媒体报道 157+。全部托管于 Hugging Face、Apache-2.0，配模型/数据卡与 Croissant 1.1 元数据。局限：仅英文、以文本为中心（不含图表/结构化表格），且评估在留出的 OTel 分区而非完全独立基准，聚合分数可能掩盖子领域差异。

## Key technical points (EN)
- Four datasets, 326,767 curated examples from ~1.1M raw points (3GPP, GSMA, O-RAN, RFCs, papers): OTel-Embedding, OTel-Reranker, OTel-LLM (abstention flags), OTel-Safety.
- 30 post-trained baselines: 10 embeddings (22M–8B), 3 rerankers (0.6B–8B), 17 LMs (270M–32B); bases include Gemma 3, Qwen 3, OLMo 3, Mistral 3.
- Results: 93.5% NDCG@10 (retrieval), 0.952 MRR@10 (reranking), 88.2% LM correctness.
- RAG-first framing: abstention-under-insufficient-context is a first-class training target (OTel-Safety).
- Distribution: Hugging Face, Apache-2.0, model/dataset cards + Croissant 1.1; >16M downloads by May 2026.
- Limits: English-only, text-centric (no diagrams/tables), evaluation on held-out OTel partitions (not fully independent), aggregate scores hide subdomain variance.

## Key technical points (ZH)
- 四数据集，326,767 条精选示例，源自约 110 万原始点（3GPP、GSMA、O-RAN、RFC、论文）：OTel-Embedding、OTel-Reranker、OTel-LLM（弃答标志）、OTel-Safety。
- 30 个后训练基线：10 嵌入（22M–8B）、3 重排（0.6B–8B）、17 语言模型（270M–32B）；基座含 Gemma 3、Qwen 3、OLMo 3、Mistral 3。
- 结果：检索 NDCG@10 93.5%、重排 MRR@10 0.952、语言模型正确率 88.2%。
- RAG 优先：上下文不足时弃答作为一等训练目标（OTel-Safety）。
- 分发：Hugging Face、Apache-2.0、模型/数据卡 + Croissant 1.1；截至 2026 年 5 月下载超 1600 万。
- 局限：仅英文、文本为中心（无图表）、评估用留出 OTel 分区（非完全独立）、聚合分数掩盖子领域差异。

## Why it matters / what's new (EN)
The KB has repeatedly logged telecom-LLM and agentic-network work (2026-07-22_arxiv-llm-agentic-ai-5g6g-tutorial, 2026-06-03_arxiv-agentxgcore-agentic-ai-mobile-core, 2026-07-07 RANPilot), but those consume LLMs; OTel is about the missing *supply side* — shared, license-clean training corpora and 30 ready post-trained baselines specifically for telecom RAG, contributed by an AT&T/GSMA-anchored consortium. What is new versus prior TeleQnA-style benchmarks is that OTel targets the full retrieve→rerank→generate→abstain pipeline with datasets for each stage and treats "know when to say I don't know" (OTel-Safety) as a trainable behavior — the failure mode that most undermines LLMs answering from 3GPP text. It is an ecosystem/resource contribution rather than a new algorithm, and the honest caveat (English/text-only, held-out-partition evaluation, aggregate metrics) means the reported numbers are a starting reference, not an independent-benchmark verdict; the Apache-2.0 release nonetheless lowers the barrier for anyone building network-management copilots or spec-QA assistants.

## Why it matters / what's new (ZH)
知识库多次记录电信 LLM 与智能体网络工作（2026-07-22 LLM/智能体 5G6G 教程、2026-06-03 AgentXGCore、2026-07-07 RANPilot），但那些是*消费* LLM；OTel 关注缺失的*供给侧*——共享、许可清晰的训练语料与 30 个即用后训练基线，专为电信 RAG，由以 AT&T/GSMA 为核心的联盟贡献。相对以往 TeleQnA 式基准的新意在于：OTel 面向完整的 检索→重排→生成→弃答 流水线，为各阶段提供数据集，并把"知道何时说不知道"（OTel-Safety）当作可训练行为——这正是 LLM 基于 3GPP 文本作答时最致命的失败模式。它是生态/资源贡献而非新算法，诚实的限定（仅英文/文本、留出分区评估、聚合指标）意味着所报数字是起点参考而非独立基准结论；但 Apache-2.0 发布仍显著降低了构建网络管理副驾或规范问答助手的门槛。
