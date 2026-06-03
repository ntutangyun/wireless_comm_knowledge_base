---
id: 2026-06-03_arxiv-6g-llm-tactical-vehicle-networks
date_published: 2026-05-31
date_found: 2026-06-03
type: academic-paper
title_en: "A Communication-Centric 6G-LLM Architecture for Scalable Tactical Autonomous Defense Vehicle Networks"
title_zh: "面向可扩展战术自主防务车辆网络的以通信为中心的 6G-LLM 架构"
url: "https://arxiv.org/abs/2606.01312"
source_quality: abstract_only
technology: cellular
topics: [6G, LLM, semantic-communication, V2X, edge-cloud, autonomous-vehicles]
topic_primary: 6g-vision
topics_secondary: [cellular-ai]
novelty_score: 2
---

## Summary (EN)
This paper proposes a communication-centric hierarchical architecture for coordinating fleets of tactical autonomous vehicles under contested network conditions, combining edge-assisted large language models, 6G connectivity, and semantic communication. The thesis is that conventional task-specific AI pipelines — structured feature processing plus rule-based coordination — scale poorly as fleet size grows and overhead climbs; replacing them with semantic abstraction and context-aware decision support cuts both coordination overhead and latency.

The framework layers LLM reasoning over 6G low-latency connectivity in an edge-cloud arrangement, using semantic communication so vehicles exchange meaning rather than raw structured features. Monte Carlo simulations swept fleet sizes from 5 to 30 vehicles under contested conditions. At 30 vehicles the 6G-LLM approach reported a 75.2% latency reduction (29.1 ms vs 117.5 ms), a 68.7-percentage-point gain in mission success rate (82.9% vs 14.2%), and an 88.6% reduction in communication overhead versus a 5G baseline.

## Summary (ZH)
本文提出一种以通信为中心的分层架构，用于在对抗性网络条件下协调战术自主车辆编队，融合边缘辅助大语言模型、6G 连接与语义通信。其论点是：传统任务专用 AI 流水线——结构化特征处理加规则化协调——随编队规模增长扩展性差、开销攀升；以语义抽象与上下文感知决策支持取而代之，可同时降低协调开销与时延。

该框架在边缘-云布局中将 LLM 推理叠加于 6G 低时延连接之上，采用语义通信使车辆交换"含义"而非原始结构化特征。蒙特卡洛仿真在对抗条件下扫描 5 至 30 辆车的编队规模。在 30 辆车时，6G-LLM 方法报告时延降低 75.2%（29.1 ms vs 117.5 ms）、任务成功率提升 68.7 个百分点（82.9% vs 14.2%）、通信开销相对 5G 基线降低 88.6%。

## Key technical points (EN)
- **Architecture:** hierarchical, communication-centric; edge-assisted LLMs + 6G + semantic communication.
- **Shift:** semantic abstraction / context-aware decisions replace task-specific feature pipelines and rule-based coordination.
- **Eval:** Monte Carlo, 5–30 vehicles, contested conditions.
- **Results @30 vehicles vs 5G:** −75.2% latency (29.1 vs 117.5 ms), +68.7 pp mission success (82.9% vs 14.2%), −88.6% comm overhead.

## Key technical points (ZH)
- **架构：** 分层、以通信为中心；边缘辅助 LLM + 6G + 语义通信。
- **转变：** 语义抽象/上下文感知决策取代任务专用特征流水线与规则化协调。
- **评估：** 蒙特卡洛，5–30 辆车，对抗条件。
- **结果（30 辆车 vs 5G）：** 时延 −75.2%（29.1 vs 117.5 ms）、任务成功率 +68.7 pp（82.9% vs 14.2%）、通信开销 −88.6%。

## Why it matters / what's new (EN)
This is a vertical-specific (defense/tactical) instance of the broader 6G + semantic-communication + LLM thesis that recurs in the KB's 6g-vision and cellular-ai bins. Its value is the quantified overhead/latency case for *semantic* coordination at fleet scale under contested links — the 88.6% overhead reduction at 30 vehicles is the kind of scaling argument the semantic-communication literature often asserts but rarely measures end-to-end against a 5G baseline. Treat the absolute numbers as simulation-bound; the contribution is the architecture and the scaling trend.

## Why it matters / what's new (ZH)
这是 KB 中 6g-vision 与 cellular-ai 桶反复出现的"6G + 语义通信 + LLM"论点在防务/战术垂直场景的具体实例。其价值在于给出对抗链路下编队规模*语义*协调的开销/时延量化案例——30 辆车时 88.6% 的开销降低，正是语义通信文献常断言却很少端到端对照 5G 基线测量的扩展性论据。绝对数值应视为受仿真约束；贡献在于架构与扩展趋势。
