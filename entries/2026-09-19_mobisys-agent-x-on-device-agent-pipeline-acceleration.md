---
id: 2026-09-19_mobisys-agent-x-on-device-agent-pipeline-acceleration
date_published: 2026-05-11
date_found: 2026-09-19
technology: edge-ai
type: academic-paper
title_en: "Agent-X: Full Pipeline Acceleration of On-device AI Agents"
title_zh: "Agent-X：端侧 AI 智能体的全流程加速"
url: "https://arxiv.org/abs/2605.10380"
source_quality: full
topics: [on-device-agents, prefix-caching, speculative-decoding, MobiSys, TinyAgent]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

Jinha Chung, Byeongjun Shin, Jiin Kim and Minsoo Rhu (KAIST) accepted this paper for publication at MobiSys 2026 (submitted to arXiv 11 May 2026), tackling a specific gap this KB has not yet covered: on-device agentic workloads — an LLM that plans, calls tools, and generates structured output — split their latency very differently from a plain chatbot. The paper's own characterisation, measured by running TinyAgent on a Mac mini M4 Pro, finds an average task takes 35.4 seconds; across agentic tasks, prefill accounts for 21.7% and decode 68.7% of latency (the remaining 9.6% is other overhead) — a far heavier prefill share than cloud LLM serving, where decode is reported to dominate over 95% of latency. The example "Schedule a meeting with John" task takes 26.7 seconds in total. The authors attribute this to two agent-specific causes: agent prompts are stuffed with long, dynamically-assembled tool descriptions and few-shot examples that defeat prefix caching, and on-device accelerators offer roughly 11% of the memory bandwidth and 2% of the compute throughput of a server-class NVIDIA H200 GPU, making the (already inflated) prefill stage disproportionately expensive on-device.

Agent-X is a software-only, accuracy-preserving framework with two components addressing prefill and decode separately. PromptWeaver attacks the prefill side: rather than assembling the prompt to include only the currently-relevant tools (which breaks KV-cache reuse across turns because the tool subset keeps changing), it substitutes a fixed set of tool descriptions built via offline non-negative matrix factorisation clustering of the agent's tool-co-activation patterns — 8 clusters, with a greedy combination-selection algorithm choosing which cluster combinations to precompute (at a 15-cluster cache budget, 74.4% of tool-use examples are covered, using 6.26 GB) — and appends a single dynamically-chosen tool-use example (K=1) to preserve planning accuracy. This cuts uncacheable tokens from 1,711 to 519 (a 70% reduction) and yields a measured 1.97x prefill speedup (1.57x for the agent's Planner component, 4.35x for its Arbiter component). ExSpec attacks the decode side without a draft LLM at all: it builds an on-the-fly n-gram (trigram) lookup table from the few-shot examples plus the current user query, exploiting the authors' finding that 96% of an agent Planner's output tokens already overlap with tokens already present in its input prompt, and falls back to standard autoregressive generation whenever no match exists in the table rather than paying speculative decoding's usual "wasted-draft" tax. This yields a 1.73x decode speedup with draft-acceptance rates of 0.25 (Planner) and 0.26 (Arbiter), at a per-query LUT-build overhead of 83ms — described as negligible. Combined, on a TinyAgent-7B model (a fine-tuned WizardLM-2-7B) evaluated on 1,022 test examples from the TinyAgent benchmark via MLX v0.25.2 on the same Mac mini M4 Pro (64GB RAM, 16 GPU cores), Agent-X delivers a 1.61x end-to-end speedup with no measured accuracy loss (task-success accuracy moved from 0.836 to 0.841, i.e. slightly up, attributed to the single retained tool-use example). An ablation isolates each component's individual contribution: PromptWeaver alone yields 1.16x, ExSpec alone 1.43x, the combination 1.61x — a clean demonstration that the two mechanisms are complementary rather than redundant.

## Summary (ZH)

KAIST 的 Jinha Chung、Byeongjun Shin、Jiin Kim 与 Minsoo Rhu 撰写了这篇被 MobiSys 2026 接收的论文（2026 年 5 月 11 日提交至 arXiv），处理的是本知识库此前尚未覆盖的一个具体问题：端侧智能体（agentic）工作负载——即需要规划、调用工具并生成结构化输出的 LLM——其时延构成与普通聊天机器人截然不同。论文自身的刻画（在 Mac mini M4 Pro 上运行 TinyAgent 实测得出）显示：一个任务平均耗时 35.4 秒；在各类智能体任务中，预填充（prefill）占时延的 21.7%、解码（decode）占 68.7%（其余 9.6% 为其他开销）——预填充占比远高于云端 LLM 服务场景（据报道解码通常占据超过 95% 的时延）。示例任务"安排与 John 的会议"总耗时 26.7 秒。作者将其归因于两个智能体特有的原因：智能体提示词中塞满了动态拼装、篇幅冗长的工具描述与少样本示例，破坏了前缀缓存的复用；而端侧加速器的内存带宽约为服务器级 NVIDIA H200 GPU 的 11%、算力吞吐约为其 2%，使得本已被拉长的预填充阶段在端侧的代价被进一步放大。

Agent-X 是一套纯软件、精度无损的框架，其两个组件分别针对预填充与解码环节。PromptWeaver 针对预填充问题：不再按"仅纳入当前相关工具"的方式组装提示词（这种做法因工具子集在轮次间不断变化而破坏了 KV 缓存跨轮复用），而是通过对智能体工具共激活模式做离线非负矩阵分解聚类（共 8 个簇），并用一种贪心组合选择算法来决定预先计算哪些簇组合（在 15 簇缓存预算下，覆盖了 74.4% 的工具使用样例，占用 6.26GB 存储），来替换为一组固定的工具描述集合，同时附加一个动态选取的单一工具使用示例（K=1）以维持规划准确率。该方法将不可缓存 token 数从 1,711 降至 519（降低 70%），实测预填充加速 1.97 倍（智能体 Planner 组件 1.57 倍，Arbiter 组件 4.35 倍）。ExSpec 则完全不依赖草稿 LLM 来处理解码问题：它基于少样本示例与当前用户查询即时构建一张 n-gram（三元组）查找表，利用作者发现的一个现象——智能体 Planner 组件 96% 的输出 token 已经与其输入提示词中的 token 重叠——并在查找表中未命中时直接回退到标准自回归生成，从而避免了投机解码通常需要承担的"草稿浪费"代价。该方法带来 1.73 倍解码加速，草稿接受率为 0.25（Planner）与 0.26（Arbiter），单次查询的查找表构建开销仅 83 毫秒，论文称其可忽略不计。两者结合后，在 TinyAgent-7B 模型（基于 WizardLM-2-7B 微调）、TinyAgent 基准测试集 1,022 条测试样例、经由 MLX v0.25.2 在同一台 Mac mini M4 Pro（64GB 内存、16 核 GPU）上的实测中，Agent-X 实现端到端 1.61 倍加速，且未观测到精度损失（任务成功率准确度从 0.836 升至 0.841，略有提升，归因于所保留的单一工具使用示例）。消融实验分别隔离了两个组件各自的贡献：仅 PromptWeaver 为 1.16 倍，仅 ExSpec 为 1.43 倍，两者结合为 1.61 倍——清楚表明两种机制是互补而非冗余的。

## Key technical points (EN)

- **Problem characterisation**: on Mac mini M4 Pro, TinyAgent averages 35.4s/task; across agentic tasks, prefill accounts for 21.7% and decode 68.7% of latency (other 9.6%) — a much heavier prefill share than cloud LLM serving, driven by long dynamic tool-description prompts (defeating prefix caching) and on-device accelerators offering ~11% memory bandwidth / ~2% compute throughput of a server-class H200. The example "Schedule a meeting with John" task takes 26.7s in total.
- **PromptWeaver (prefill)**: replaces per-turn dynamic tool descriptions with a fixed, offline-clustered tool-description set (NMF clustering into 8 clusters; greedy combination selection precomputes combinations at a cache budget of 15 clusters, covering 74.4% of tool-use examples using 6.26 GB), plus one dynamically-chosen tool-use example (K=1) to preserve accuracy. Cuts uncacheable tokens 1,711→519 (70% reduction); measured 1.97x prefill speedup (1.57x Planner, 4.35x Arbiter).
- **ExSpec (decode)**: LLM-free speculative decoding via an on-the-fly n-gram (trigram) lookup table built from few-shot examples + query, exploiting a measured 96% token-overlap between a Planner's outputs and its inputs; falls back to standard autoregression on no-match rather than paying a wasted-draft cost. 1.73x decode speedup; acceptance rates 0.25 (Planner) / 0.26 (Arbiter); 83ms LUT-build overhead per query.
- **Combined result**: 1.61x end-to-end speedup on TinyAgent-7B (MLX v0.25.2, Mac mini M4 Pro, 64GB RAM, 16 GPU cores) across 1,022 test examples, with a slight accuracy increase (0.836→0.841), attributed to the retained example.
- **Ablation**: PromptWeaver alone 1.16x, ExSpec alone 1.43x, combined 1.61x — the two mechanisms compose roughly multiplicatively rather than overlapping in what they save.
- **Scope**: software-only (no custom silicon or kernel changes); framed by the authors as "seamlessly integrable into existing on-device AI agents."

## Key technical points (ZH)

- **问题刻画**：在 Mac mini M4 Pro 上，TinyAgent 平均每任务耗时 35.4 秒；在各类智能体任务中，预填充占时延的 21.7%、解码占 68.7%（其余 9.6%）——预填充占比远高于云端 LLM 服务场景，原因在于动态拼装的长篇工具描述提示词破坏了前缀缓存复用，且端侧加速器的内存带宽/算力吞吐仅为服务器级 H200 的约 11%/2%。示例任务"安排与 John 的会议"总耗时 26.7 秒。
- **PromptWeaver（预填充）**：以固定的、离线聚类得到的工具描述集合取代逐轮动态组装的工具描述（NMF 聚类为 8 个簇；贪心组合选择算法在 15 簇缓存预算下预先计算组合，覆盖 74.4% 的工具使用样例，占用 6.26GB 存储），并附加一个动态选取的工具使用示例（K=1）以维持准确率。不可缓存 token 数从 1,711 降至 519（降低 70%）；实测预填充加速 1.97 倍（Planner 1.57 倍，Arbiter 4.35 倍）。
- **ExSpec（解码）**：完全不依赖草稿 LLM 的投机解码，基于少样本示例与当前查询即时构建 n-gram（三元组）查找表，利用实测所得的 Planner 输出与其输入之间 96% 的 token 重叠率；未命中时直接回退标准自回归生成，避免草稿浪费代价。解码加速 1.73 倍；接受率为 0.25（Planner）/0.26（Arbiter）；单次查询查找表构建开销 83 毫秒。
- **综合结果**：在 TinyAgent-7B（MLX v0.25.2，Mac mini M4 Pro，64GB 内存，16 核 GPU）上、1,022 条测试样例中实现端到端 1.61 倍加速，精度略有提升（0.836→0.841），作者将其归因于所保留的示例。
- **消融实验**：仅 PromptWeaver 为 1.16 倍，仅 ExSpec 为 1.43 倍，两者结合为 1.61 倍——两种机制的收益大致呈乘积关系而非相互重叠。
- **适用范围**：纯软件方案（无需定制芯片或内核改动），作者将其定位为"可无缝集成到现有端侧 AI 智能体中"。

## Why it matters / what's new (EN)

This KB's on-device-inference entries have so far covered chatbot-style LLM decoding (speculative decoding, DVFS, KV-cache management) but nothing specific to agentic workloads, where tool-calling prompts and structured planning shift the bottleneck toward prefill in a way plain chat inference does not exhibit. The paper is measurement-grade — real Mac mini M4 Pro hardware, a named 7B model, an ablation isolating each mechanism's individual contribution — fitting this domain's standing preference for independently reproducible numbers over vendor claims.

## Why it matters / what's new (ZH)

本知识库此前的 on-device-inference 条目覆盖的多是聊天式 LLM 解码问题（投机解码、DVFS、KV 缓存管理），尚未涉及智能体类工作负载——其工具调用提示词与结构化规划会将瓶颈推向预填充环节，这与纯聊天推理的表现不同。该论文属于实测级别的工作——真实的 Mac mini M4 Pro 硬件、明确命名的 7B 模型、逐机制隔离贡献的消融实验——符合本领域一贯倾向于采信可独立复现数字而非厂商宣称的立场。

## Images

![Agent-X system architecture: PromptWeaver prefill path and ExSpec decode path around an on-device agent pipeline | Agent-X 系统架构：围绕端侧智能体流水线的 PromptWeaver 预填充路径与 ExSpec 解码路径](https://arxiv.org/html/2605.10380v1/agent_overview.png)
![End-to-end latency speedup results across ablation configurations | 各消融配置下的端到端时延加速结果](https://arxiv.org/html/2605.10380v1/eval_end_to_end_speedup.png)
