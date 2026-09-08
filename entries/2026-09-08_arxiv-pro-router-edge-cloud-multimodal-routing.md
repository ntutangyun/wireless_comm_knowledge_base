---
id: 2026-09-08_arxiv-pro-router-edge-cloud-multimodal-routing
date_published: 2026-08-28
date_found: 2026-09-08
type: academic-paper
technology: edge-ai
title_en: "Pro-Router: Token-Aware Progressive Model Routing with Adaptive Edge-Cloud Collaboration for Efficient Multimodal LLM Inference"
title_zh: "Pro-Router：面向高效多模态大模型推理的令牌感知渐进式模型路由与自适应边云协同"
url: "https://arxiv.org/abs/2608.28726"
source_quality: full
topics: [model-routing, multimodal-LLM, edge-cloud-collaboration, speculative-verification, KV-cache]
topic_primary: compute-offloading
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

Deciding whether a multimodal LLM query should be handled by a small model at the edge or escalated to a large model in the cloud is normally either cheap-but-inaccurate (deciding from request-level features alone, before any generation happens) or accurate-but-wasteful (running one or more extra full model passes to inspect the response first). Pro-Router (authors from Anyscale, Mississippi State University, and the Institute of Computing Technology / Institute of AI for Industries, Chinese Academy of Sciences) proposes a two-stage alternative. A lightweight, CPU-based "Prompt Pre-Scorer" — using only TF-IDF text features, image count, and prompt length through logistic regression — screens obviously-easy requests toward the edge before generation starts. For everything else, a "Token-Aware Verifier" reads the small model's own token-level output distribution as it generates (log-probability of the emitted token, max probability in the distribution, negative entropy of the top-20 probability mass, and normalized token position), feeds this per-token sequence through a small two-layer transformer running on the edge device's CPU, and aggregates it into a single per-request decision — accept the edge answer or escalate to the cloud model — without a separate verification pass. A global scheduler then sizes the batches sent to edge and cloud tiers proportional to each tier's measured throughput.

Evaluated across 15 multimodal and text benchmarks (nine single-image VQA-style sets, two multi-image sets, four text-only sets) with three edge-side models (Qwen2.5-VL-7B, LLaVA-OneVision-7B, Pixtral-12B) escalating to a cloud model (Qwen2.5-VL-72B) on AWS g5.12 (edge, 4x A10G) and p4d (cloud, 8x A100) instances, the authors report the token-aware verifier adds only 2-3 ms of routing overhead per decision, versus 47-119 ms for GPU-based baseline routers (RouteLLM, FrugalGPT) and two seconds to nearly two minutes for baselines that require a full extra generation pass (P(True), AutoMix) — a 19x-28x speed advantage over the cheapest alternative tested. On end-to-end throughput, Pro-Router reports 1.77x-1.79x improvement over a Ray Serve baseline running the same routing policy, and reports the highest routing-accuracy metric (AUROC) of all five methods compared on every edge model tested, while sustaining 90%-96% of un-delayed throughput under a simulated 1000 ms network latency.

## Summary (ZH)

判断一条多模态大模型请求应该由端侧的小模型处理，还是升级到云端的大模型处理，通常要么是"便宜但不准"（在任何生成发生之前，仅凭请求级特征做决定），要么是"准但浪费"（先额外跑一次或多次完整模型推理来检查回答质量）。Pro-Router（作者来自 Anyscale、密西西比州立大学，以及中国科学院计算技术研究所/产业AI研究院）提出了一种两阶段的替代方案。一个轻量级、基于 CPU 的"提示预打分器"——仅使用 TF-IDF 文本特征、图片数量与提示长度，通过逻辑回归——在生成开始前就把明显简单的请求筛向端侧。对于其余请求，一个"令牌感知验证器"会在小模型生成过程中读取其自身的逐 token 输出分布（所生成 token 的对数概率、分布中的最大概率、Top-20 概率质量的负熵，以及归一化的 token 位置），将这一逐 token 序列输入一个运行在端侧设备 CPU 上的小型两层 Transformer，并将其聚合为单次请求级的决策——采纳端侧答案或升级至云端模型——无需额外的单独验证推理。一个全局调度器随后按各层实测吞吐量的比例，向端侧与云端分配批量任务。

在涵盖 15 个多模态与文本基准（9 个单图视觉问答类数据集、2 个多图数据集、4 个纯文本数据集）、三个端侧模型（Qwen2.5-VL-7B、LLaVA-OneVision-7B、Pixtral-12B）向云端模型（Qwen2.5-VL-72B）升级的评测中，端侧运行于 AWS g5.12 实例（4 张 A10G），云端运行于 p4d 实例（8 张 A100），作者报告称令牌感知验证器每次决策仅增加 2-3 毫秒的路由开销，而基于 GPU 的基线路由器（RouteLLM、FrugalGPT）为 47-119 毫秒，需要完整额外生成一次的基线（P(True)、AutoMix）则需要两秒到近两分钟——相较测试中最快的替代方案也快 19 至 28 倍。在端到端吞吐量方面，Pro-Router 相较运行相同路由策略的 Ray Serve 基线提升 1.77 至 1.79 倍，并在所有测试的端侧模型上，路由准确性指标（AUROC）均高于其余四种对比方法，同时在模拟 1000 毫秒网络延迟下仍能维持无延迟情况下 90%-96% 的吞吐量。

## Key technical points (EN)

- **Problem**: edge-vs-cloud routing for multimodal LLM inference is normally either request-level (cheap, inaccurate) or response-level (accurate, requires extra generation passes).
- **Mechanism 1**: CPU-based Prompt Pre-Scorer (TF-IDF text features + image count + prompt length -> logistic regression) filters obviously-easy requests before generation.
- **Mechanism 2**: Token-Aware Verifier reads the edge model's own per-token output-distribution signals (log-prob, max-prob, top-20 negative entropy, position) through a small two-layer transformer on the edge CPU, producing one per-request decision — ship the edge answer or escalate — with no separate verification pass required.
- **Mechanism 3**: a global scheduler sizes edge/cloud batch dispatch proportional to each tier's measured throughput.
- **Evaluation**: 15 benchmarks (9 single-image, 2 multi-image, 4 text-only); edge models Qwen2.5-VL-7B / LLaVA-OneVision-7B / Pixtral-12B escalating to cloud model Qwen2.5-VL-72B; edge on AWS g5.12 (4x A10G), cloud on p4d (8x A100).
- **Baselines**: RouteLLM, FrugalGPT, P(True), AutoMix.
- **Headline numbers**: 2-3 ms routing overhead vs. 47-119 ms (GPU-based baselines) and 2s-~2min (full-generation-pass baselines) — 19x-28x faster than the cheapest alternative tested; 1.77x-1.79x end-to-end throughput vs. a Ray Serve baseline running the same policy; highest AUROC of all five compared methods on every edge model tested; 90%-96% of un-delayed throughput retained under a simulated 1000 ms network latency; scales to 4 edge + 3 cloud devices at 5.8x-6.9x single-cloud throughput.
- **Code**: stated as available on GitHub (link not independently verified in this entry).

## Key technical points (ZH)

- **问题**：多模态大模型推理的端云路由通常要么是请求级（便宜但不准），要么是响应级（准确但需要额外的生成推理）。
- **机制一**：基于 CPU 的提示预打分器（TF-IDF 文本特征 + 图片数量 + 提示长度 → 逻辑回归），在生成前筛出明显简单的请求。
- **机制二**：令牌感知验证器读取端侧模型自身逐 token 的输出分布信号（对数概率、最大概率、Top-20 负熵、位置），输入一个运行在端侧 CPU 上的小型两层 Transformer，输出单次请求级的决策——采纳端侧答案或升级——无需额外的单独验证推理。
- **机制三**：全局调度器按各层实测吞吐量的比例，向端侧/云端分配批量任务。
- **评测**：15 个基准（9 个单图、2 个多图、4 个纯文本）；端侧模型 Qwen2.5-VL-7B / LLaVA-OneVision-7B / Pixtral-12B，升级至云端模型 Qwen2.5-VL-72B；端侧运行于 AWS g5.12（4×A10G），云端运行于 p4d（8×A100）。
- **对比基线**：RouteLLM、FrugalGPT、P(True)、AutoMix。
- **核心数据**：路由开销 2-3 毫秒，对比 GPU 基线的 47-119 毫秒与需完整生成的基线的 2 秒至近 2 分钟——相较测试中最快的替代方案快 19 至 28 倍；端到端吞吐量相较运行相同策略的 Ray Serve 基线提升 1.77 至 1.79 倍；在所有测试端侧模型上 AUROC 均高于其余四种对比方法；在模拟 1000 毫秒网络延迟下仍维持无延迟吞吐量的 90%-96%；扩展至 4 端侧 + 3 云端设备时达到单云吞吐量的 5.8 至 6.9 倍。
- **代码**：文中称已在 GitHub 开源（本条目未独立验证该链接）。

## Why it matters / what's new (EN)

This KB's `compute-offloading` bin already covers several edge-cloud partitioning mechanisms with different design axes (`2026-09-01_arxiv-multi-spin-wireless-speculative-inference` on uplink/downlink mode selection for speculative decoding; `2026-09-02_arxiv-prosthesis-5g-mec-edge-offloading` on a real-world 5G-MEC deployment; `2026-09-03_arxiv-acespec-edge-cloud-speculative-decoding-wan`, also speculative-decoding-based). Pro-Router's distinguishing mechanism is deriving the escalation signal from the edge model's own token-level generation statistics rather than from a separate verifier model or a communication-protocol design — it reuses information the small model produces anyway. The routing-speed and throughput figures are the authors' own reported numbers against named baselines, not independently benchmarked by a third party.

## Why it matters / what's new (ZH)

本知识库 `compute-offloading` 分类已收录多个采用不同设计维度的端云划分机制（`2026-09-01_arxiv-multi-spin-wireless-speculative-inference` 关注投机解码的上下行模式选择；`2026-09-02_arxiv-prosthesis-5g-mec-edge-offloading` 关注真实世界的 5G-MEC 部署；`2026-09-03_arxiv-acespec-edge-cloud-speculative-decoding-wan` 同样基于投机解码）。Pro-Router 的区别性机制在于：升级信号来自端侧模型自身生成过程中产生的逐 token 统计量，而非依赖单独的验证模型或通信协议设计——它复用了小模型本就会产生的信息。文中的路由速度与吞吐量数字均为作者相对于所列基线的自报结果，并未经第三方独立基准测试。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
