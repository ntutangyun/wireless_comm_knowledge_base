---
id: 2026-05-01_arxiv-wirelessbench-llm-agent
date_found: 2026-05-01
date_published: 2026-03-22
type: academic-paper
title_en: "WirelessBench: A Tolerance-Aware LLM Agent Benchmark for Wireless Network Intelligence"
title_zh: "WirelessBench：面向无线网络智能的容错感知 LLM 智能体基准"
url: "https://arxiv.org/abs/2603.21251"
source_quality: full
topics: [agentic-AI, generative-AI]
topic_primary: agentic-wifi
topics_secondary: []
novelty_score: 4
---

## Summary (EN)

Tong et al. (March 2026) release WirelessBench, the first **tolerance-aware** evaluation framework for LLM agents acting as autonomous wireless-network operators. Standard ML benchmarks score by exact-match correctness — but that misses the kind of error that actually breaks production wireless: a unit confusion between dB and dBm, a signed-vs-unsigned conversion, an off-by-one in resource-block indexing. Those slip past exact match because the format is right; in deployment they are catastrophic. WirelessBench bakes *tolerance categories* into scoring so a 0.1 dB rounding error and a "30 dBm vs 30 dB" mistake count differently.

The benchmark has three cognitive tiers. **Tier 1: domain knowledge** (1,392 items) — Wi-Fi / cellular concepts, protocol semantics, RF math. **Tier 2: resource allocation under user intent** (1,000 items) — given a natural-language SLA, allocate users / RBs / power. **Tier 3: multi-step decisions during mobility** (1,000 items) — chain handoff, beam reselection, and traffic-routing decisions. Tool integration is mandatory: agents must call a 3GPP-compliant ray-tracing engine for channel-quality estimates rather than hallucinate them.

Headline numbers: direct prompting gets 68% accuracy; tool-integrated agents get 84.64%. **23% of errors are catastrophic failures** (the unit-confusion class) that exact-match scoring misses entirely. Each item ships with a chain-of-thought traceability log so failures can be diagnosed without re-running the agent.

## Summary (ZH)

Tong 等人（2026 年 3 月）发布了 WirelessBench —— 首个**容错感知**的 LLM 智能体评估框架，针对的是把 LLM 作为自主无线网络运维者的场景。标准 ML 基准按精确匹配打分 —— 但这会漏掉真正在生产环境中击穿的错误：dB 与 dBm 单位混淆、有/无符号转换、资源块索引差一。这些错误"格式正确"，能蒙骗精确匹配；但部署中是灾难性的。WirelessBench 把*容错类别*写进了评分体系，使 0.1 dB 舍入误差与"30 dBm 当成 30 dB"被区别对待。

基准分三层。**第一层：领域知识**（1,392 项）—— Wi-Fi / 蜂窝概念、协议语义、射频数学。**第二层：基于用户意图的资源分配**（1,000 项）—— 给定自然语言 SLA，分配用户 / RB / 功率。**第三层：移动场景下的多步决策**（1,000 项）—— 切换、波束重选、流量路由的链式决策。强制要求工具集成：智能体必须调用符合 3GPP 的射线追踪引擎以获得信道质量估计，而不是凭空"幻想"。

关键数据：纯提示工程 68% 准确率；工具集成智能体达到 84.64%。**23% 的错误属于灾难性失败**（单位混淆这一类）—— 这部分错误用精确匹配评分根本看不出来。每条样本都附带 CoT 可追溯日志，使得失败可在不重新跑智能体的情况下复盘。

## Key technical points (EN)

- **Three-tier benchmark:** domain knowledge (1,392) + resource allocation (1,000) + multi-step mobility decisions (1,000)
- **Tolerance-aware scoring** — distinguishes catastrophic from harmless errors; identifies the 23% of failures invisible to exact match
- **Mandatory tool integration:** 3GPP-compliant ray-tracing for channel quality estimation
- **Chain-of-Thought traceability** logs ship with each benchmark item
- **Headline numbers:** direct prompting 68% / tool-integrated 84.64%

## Key technical points (ZH)

- **三层基准：** 领域知识（1,392）+ 资源分配（1,000）+ 多步移动决策（1,000）
- **容错感知评分** —— 区分灾难性错误与无害误差；揭示了精确匹配遗漏的 23% 失败
- **强制工具集成：** 必须调用 3GPP 一致的射线追踪
- **CoT 可追溯日志**随每个样本提供
- **关键数据：** 纯提示 68%；工具集成 84.64%

## Why it matters / what's new (EN)

- **Wireless agentic benchmarking maturity step.** WirelessAgent++ (`2026-05-01_arxiv-wirelessagent-plus-plus.md`) targeted *workflow design*; WirelessBench targets the *evaluation* axis. Together they form a complete loop: search the workflow space, then score the agents against safety-aware metrics.
- **Catastrophic-error class is the key contribution.** The 23% finding will reshape how the field reports agent accuracy — peak accuracy is now meaningless if catastrophic failures aren't separately reported.
- **Anchor for future LLM-agent papers.** Subsequent agentic-Wi-Fi work will likely be expected to report WirelessBench scores or explain why not.

## Why it matters / what's new (ZH)

- **无线智能体基准化的成熟一步。** WirelessAgent++（`2026-05-01_arxiv-wirelessagent-plus-plus.md`）针对的是*工作流设计*；WirelessBench 针对的是*评估*维度。两者合起来形成完整闭环：搜索工作流空间，然后用安全感知的指标评分。
- **灾难性错误类别是关键贡献。** "23%"这一发现将重塑该领域报告智能体准确率的方式 —— 如果不单列灾难性失败，峰值准确率本身就失去意义。
- **未来 LLM 智能体论文的锚点。** 后续智能体 Wi-Fi 工作大概率会被期望报告 WirelessBench 分数，或解释为何未报告。
