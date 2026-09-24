---
id: 2026-09-24_arxiv-jev-decision-models-edge-service-orchestration
date_published: 2026-09-19
date_found: 2026-09-24
type: academic-paper
technology: edge-ai
title_en: "Replacing Large Language Models with Jev Decision Models for Low-Latency Edge Service Orchestration"
title_zh: "以 Jev 决策模型替代大语言模型的低时延边缘服务编排"
url: "https://arxiv.org/abs/2609.22753"
source_quality: full
topics: [edge-orchestration, compute-offloading, LLM-serving, intent-classification]
topic_primary: edge-orchestration
topics_secondary: [compute-offloading]
novelty_score: 3
---

## Summary (EN)

A team at the University of Technology Sydney (Delong Li, Xu Wang, Haochen Gong, Rui Lang, Guangsheng Yu) targets a specific overhead in edge service orchestration: when a natural-language service request needs an LLM to interpret it before execution can even start, that interpretation eats into the request's own latency budget. They integrate Jev, an existing decision-oriented model API, into an edge orchestration path that replaces the generative LLM step, adding a shared validator, admission policy and scheduler: an "intent contract" maps every request onto just four bounded fields (service, locality, quality floor, urgency) — 108 possible tuples rather than free-form text generation. A validator checks the extracted fields are complete and in-range; a shared admission policy then predicts, for each candidate node, whether the request can finish by its deadline (using a queueing-style finish-time estimate that accounts for a node's current backlog), and a common scheduler applies identical placement rules across backends.

The system is evaluated two ways. First, a modeled-execution study runs 216 synthetic English requests through live API calls against Jev and a DeepSeek deployment configured for concise JSON output, feeding the measured decision latencies into a four-edge-node-plus-cloud simulation; Jev cuts median decision latency by 15.9-26.5% (p95 by 9.1-36.7%), at a small accuracy cost (DeepSeek gets all four intent fields exactly right 215-216/216 times vs Jev's 212-214/216, mostly on ambiguous urgency or out-of-scope requests). Second, a real two-node OCR service (Tesseract, IIIT5K dataset images) compares Jev, DeepSeek, a self-hosted Qwen2.5-7B, and a rule-based interpreter across eight load/pattern conditions: Jev matches or beats DeepSeek's correct, on-time completion count in all eight, and both clearly outperform the self-hosted open model (58.3% and 57.6% vs 36.5% for Qwen) and the rule-based baseline (31.9%). Across these eight conditions, Jev's per-completion API cost is 69.0-70.6% lower than DeepSeek's. Without caching, Jev's median end-to-end latency is 11.1-25.3% lower than DeepSeek's on jointly-successful requests; with response caching on repeated text, the gap between systems becomes negligible.

## Summary (ZH)

悉尼科技大学的团队（Delong Li、Xu Wang、Haochen Gong、Rui Lang、Guangsheng Yu）瞄准了边缘服务编排中的一个具体开销：当一条自然语言服务请求需要先经过大语言模型解读才能开始执行时，这个解读过程本身就会占用请求的时延预算。他们将现有的决策型模型 API Jev 集成到边缘编排路径中，以替代生成式 LLM 这一步，并加入了共享的验证器、准入策略与调度器：一个"意图契约"把每条请求映射到仅四个有界字段（服务、地域、质量下限、紧急度）——对应 108 种可能的组合，而非自由文本生成。验证器检查提取出的字段是否完整且取值合法；随后一个共享的准入策略会为每个候选节点预测该请求能否在截止时间前完成（基于一种考虑节点当前排队积压的完成时间估计），最后由统一的调度器在各后端上应用相同的放置规则。

系统从两方面评估。其一是"建模执行"研究：将 216 条合成的英文请求分别通过 Jev 和配置为输出简洁 JSON 的 DeepSeek 部署进行真实 API 调用，把测得的决策时延输入到一个四边缘节点加云端的仿真中；Jev 使决策时延中位数降低 15.9%-26.5%（p95 降低 9.1%-36.7%），但准确率略有下降（DeepSeek 完全正确提取四个意图字段的比例为 215-216/216，Jev 为 212-214/216，误差多出现在紧急度模糊或超出范围的请求上）。其二是一个真实的双节点 OCR 服务（基于 Tesseract，使用 IIIT5K 数据集图像），在八种负载/请求模式条件下比较 Jev、DeepSeek、自托管的 Qwen2.5-7B 和基于规则的解释器：Jev 在全部八种条件下都能匹配或超过 DeepSeek 的正确且按时完成数量，二者都明显优于自托管开源模型（58.3% 和 57.6% 对比 Qwen 的 36.5%）以及基于规则的基线（31.9%）。在这八种条件下，Jev 单次完成的 API 成本比 DeepSeek 低 69.0%-70.6%。在不启用缓存的情况下，对于双方都成功完成的请求，Jev 的端到端时延中位数比 DeepSeek 低 11.1%-25.3%；而在对重复文本启用响应缓存后，两套系统之间的差距变得可以忽略。

## Key technical points (EN)

- "Intent contract": every request is forced into 4 bounded fields (service/locality/quality floor/urgency) = 108 possible tuples, replacing free-form LLM generation with a small classification problem.
- Admission policy uses a queueing-style predicted finish-time formula per candidate node/deadline, rather than a heuristic scheduler.
- Real two-backend-plus-baseline comparison (Jev vs cloud LLM DeepSeek vs self-hosted Qwen2.5-7B vs rules) on a live two-node OCR service, not just simulation.
- API cost reduction (69.0-70.6% per correct completion, OCR study) is the more dramatic number than the latency reduction (11-26%); Jev sharply lowers per-request API fees, though it does not eliminate them.
- Caching erases most of the latency advantage on repeated-text requests — the gain is concentrated in the "first time seeing this request" case.

## Key technical points (ZH)

- "意图契约"：强制把每条请求映射到 4 个有界字段（服务/地域/质量下限/紧急度），对应 108 种组合，把自由文本的 LLM 生成问题转化为一个小型分类问题。
- 准入策略针对每个候选节点/截止时间使用类似排队论的完成时间预测公式，而非启发式调度器。
- 在真实的双节点 OCR 服务上进行了 Jev、云端 LLM（DeepSeek）、自托管 Qwen2.5-7B、规则解释器四者的真实对比，而不仅仅是仿真。
- API 成本降低（OCR 研究中每次正确完成降低 69.0%-70.6%）比时延降低（11%-26%）更为显著；Jev 大幅降低了按请求计费的费用，但并未完全消除这一费用。
- 缓存机制会消除重复文本请求上的大部分时延优势——收益主要集中在"首次遇到该请求"的场景。

## Why it matters / what's new (EN)

This is a direct empirical test of a common assumption in agentic/LLM-driven edge orchestration (the "agentic-wifi" and edge-orchestration bins already touch this space): that natural-language request interpretation requires a full generative LLM call. Jev shows that for a narrow, bounded intent space, a much cheaper decision model reproduces most of an LLM's service-completion quality at a fraction of the latency and API cost — a concrete data point for anyone designing the "front door" of an edge-AI service mesh, and a useful counterweight to assuming bigger/more general models are always the right interpretation layer.

## Why it matters / what's new (ZH)

这项工作是对"智能体化/LLM 驱动的边缘编排"（与知识库中已有的 agentic-wifi、edge-orchestration 相关条目相邻）中一个常见假设的直接实证检验：即自然语言请求的解读必须依赖完整的生成式 LLM 调用。Jev 表明，对于范围有限、边界清晰的意图空间，一个成本低得多的决策模型就能以远低的时延和 API 成本，复现 LLM 大部分的服务完成质量——这为任何设计边缘 AI 服务网格"前门"环节的人提供了一个具体的数据参考，也是对"更大更通用的模型总是更合适的解读层"这一假设的有益反证。
