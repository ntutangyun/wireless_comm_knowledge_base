---
id: 2026-07-03_arxiv-intent-driven-6g-orchestration
date_published: 2026-06-30
date_found: 2026-07-03
type: academic-paper
title_en: "Intent-Driven 6G Service Orchestration: Grounded Translation, Validation, and Decomposition (Ericsson)"
title_zh: "意图驱动的 6G 服务编排：接地翻译、形式化校验与分解（爱立信）"
url: "https://arxiv.org/abs/2606.28348"
technology: cellular
source_quality: full
topics: [6G, intent-based-networking, LLM, TMF, orchestration]
topic_primary: cellular-ai
topics_secondary: [network-slicing]
novelty_score: 2
---

## Summary (EN)

This Ericsson Research paper (Martins, Mokrushin, Orlic, Kumar; accepted at the AI4NextG workshop @ ICML'26) targets the gap between LLM intent-translation demos and production intent-based networking for 6G: existing work translates natural language into intent representations but skips grounding in real service catalogs, formal validation, and cross-layer decomposition. The proposed agentic workflow adds all three as separate layers around the LLM.

Layer 1 grounds translation in a semantic service catalog of TMF-compliant specifications, using a RequirementCapability ontology with dual `provides` / `requires` predicates to match requests against customer-facing service specs (CFSS) with explicit QoS envelopes. Layer 2 validates generated RDF intents against the TMF Intent Ontology using SHACL shapes, catching structural errors before feasibility checking. Layer 3 decomposes: constraint satisfaction selects minimum-cost CFSS profiles meeting all QoS requirements, then a weighted set-cover algorithm picks resource-facing profiles (network slice, edge compute, transport) covering the infrastructure requirements.

Across 930 benchmark runs on six models (GPT-4.1 and GPT-5 tiers), the workflow hits 97% success in structured "Builder" mode and ~90% on free-text scenarios, with 100% rejection of infeasible QoS requests. The headline empirical finding: injecting catalog metadata (available QoS metric names) into LLM context cut adversarial failures by 26 percentage points — a larger reliability gain than scaling model size, with mini-tier models gaining most (+40/+45 points). Constraint extraction is identified as the remaining bottleneck; structural validation and feasibility reasoning are "essentially solved" by the formal layers. A greedy set-cover heuristic matches the CP-SAT solver at 1.8× speed.

## Summary (ZH)

这篇爱立信研究院论文（Martins、Mokrushin、Orlic、Kumar；被 ICML'26 AI4NextG 研讨会接收）针对 LLM 意图翻译演示与生产级 6G 意图网络之间的鸿沟：现有工作把自然语言翻译为意图表示，却缺少三样生产必需能力——在真实服务目录中的接地、形式化校验、跨层分解。提出的智能体工作流把这三者作为独立层包裹在 LLM 周围。

第一层将翻译接地于 TMF 兼容规范的语义服务目录，用带 `provides` / `requires` 双谓词的"需求-能力"本体，把请求与带显式 QoS 包络的面向客户服务规范（CFSS）进行机器可操作的匹配。第二层用 SHACL 形状对生成的 RDF 意图做 TMF 意图本体校验，在可行性检查前捕获结构错误。第三层做分解：约束满足选出满足全部 QoS 要求的最低成本 CFSS 组合，再用加权集合覆盖算法选取覆盖基础设施需求的资源侧规范（网络切片、边缘算力、传输）。

在六个模型（GPT-4.1 与 GPT-5 各档）上的 930 次基准运行中，工作流在结构化"Builder"模式下达 97% 成功率、自由文本场景平均约 90%，对不可行 QoS 请求实现 100% 拒绝。最重要的实证发现：把目录元数据（可用 QoS 指标名）注入 LLM 上下文使对抗场景失败率下降 26 个百分点——比单纯扩大模型规模的可靠性收益更大，小模型档受益最多（+40/+45 点）。约束抽取被认定为剩余瓶颈；结构校验与可行性推理已被形式化层"基本解决"。贪心集合覆盖启发式以 1.8 倍速度达到与 CP-SAT 求解器相同的满足率。

## Key technical points (EN)

- Three formal layers around the LLM: TMF-catalog grounding (`provides`/`requires` ontology), SHACL validation against the TMF Intent Ontology, and constraint-satisfaction + weighted-set-cover decomposition into CFSS/RFSS profiles.
- 930 runs, six models (GPT-4.1 / GPT-5 nano-mini-full): Builder mode 97% CFSS / 100% RFSS success; NL constrained 90%; adversarial 87%; infeasible-request rejection 100%.
- Catalog-grounded context beats model scaling: +26 pp on adversarial prompts overall, +40/+45 pp for mini-tier models.
- GPT-5-nano matches GPT-4.1-full on adversarial prompts — smaller next-gen models viable for cost-constrained intent processing.
- Builder (structured) mode: 40% faster, 49% fewer tokens, one LLM call instead of three; greedy P3 heuristic 1.8× faster than CP-SAT at equal satisfaction.

## Key technical points (ZH)

- LLM 周围的三个形式化层：TMF 目录接地（`provides`/`requires` 本体）、基于 SHACL 的 TMF 意图本体校验、约束满足 + 加权集合覆盖的 CFSS/RFSS 分解。
- 930 次运行、六个模型（GPT-4.1 / GPT-5 各档）：Builder 模式 97% CFSS / 100% RFSS 成功率；自然语言受限场景 90%；对抗场景 87%；不可行请求拒绝率 100%。
- 目录接地上下文胜过模型扩容：对抗提示整体 +26 个百分点，小模型档 +40/+45 个百分点。
- GPT-5-nano 在对抗提示上追平 GPT-4.1-full——下一代小模型可用于成本受限的意图处理。
- Builder（结构化）模式：快 40%、省 49% token、LLM 调用从三次降为一次；贪心 P3 启发式在同等满足率下比 CP-SAT 快 1.8 倍。

## Why it matters / what's new (EN)

The KB's intent-based-networking thread (LLM gNB configuration, LLM-NWDAF, intent-driven 6G orchestration surveys) has been dominated by translation-quality results. This entry adds the production-engineering counterpoint from a tier-1 vendor: formal ontology grounding + SHACL validation + classical optimization do the heavy lifting, and grounding beats model scaling for hallucination control — a quantified design lesson (26 pp) that transfers to any telco LLM-automation stack. The 100% infeasible-rejection result is the operationally critical number for anyone letting LLMs write orchestration intents.

## Why it matters / what's new (ZH)

本知识库的意图网络线索（LLM gNB 配置、LLM-NWDAF、意图驱动 6G 编排综述）此前以翻译质量结果为主。本条目补充了一线厂商的生产工程视角：形式化本体接地 + SHACL 校验 + 经典优化承担了主要工作，且在幻觉控制上"接地胜过扩容"——一条量化的设计经验（26 个百分点），可迁移到任何电信 LLM 自动化栈。对任何让 LLM 编写编排意图的团队而言，100% 不可行请求拒绝率是最关键的运营指标。
