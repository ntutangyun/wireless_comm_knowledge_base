---
id: 2026-09-08_arxiv-s2-moe-speculative-decoding-jetson-edge
date_published: 2026-08-15
date_found: 2026-09-08
type: academic-paper
technology: edge-ai
title_en: "S2-MoE: Enabling Efficient Self-Speculative Decoding for Mixture-of-Experts on Edge Devices"
title_zh: "S2-MoE：面向边缘设备的高效混合专家自投机解码"
url: "https://arxiv.org/abs/2608.15018"
source_quality: full
topics: [mixture-of-experts, speculative-decoding, llama.cpp, KV-cache, Jetson, expert-routing]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

Speculative decoding (a cheap draft model proposes several tokens, a larger target model verifies them in one pass) and mixture-of-experts (MoE) models (only a subset of a model's parameters activate per token) each independently help edge-device inference, but combining them naively backfires: speculative decoding assumes parameter reuse across consecutive tokens, and MoE breaks that assumption because different draft tokens can activate entirely different experts, so a rejected draft token still triggers costly expert-parameter loads for nothing. S2-MoE (Peking University) targets this specific interaction with three components. A "routing-aware adaptive speculative expansion" step computes a per-candidate-token utility score (expected benefit over predicted verification cost, the cost estimated by predicting which target-model experts a draft token's routing would actually invoke) and only expands the speculation window when that utility clears a threshold, rather than using a fixed window size or confidence alone. A "reuse-aware expert gating" step aggregates confidence-weighted expert preferences across the current token batch, flags a bounded set of globally-preferred experts, and nudges the model's routing logits toward those experts when candidates are close, improving expert-parameter locality without changing the model's top-k routing structure. A third mechanism gives the draft and target models a shared, rollback-capable KV cache so draft-side prediction errors don't cascade into later speculative steps.

Implemented as an extension to llama.cpp and evaluated on four MoE models (DeepSeek-V2-Lite 15.3B, OLMoE-1B-7B, Qwen3-30B-A3B, GPT-OSS-120B) across a range of tasks (multi-turn dialogue, RAG, summarization, translation, QA, math reasoning, code generation, and long-context benchmarks), S2-MoE is measured on real NVIDIA Jetson Orin hardware (NX 16GB, AGX Orin 32GB and 64GB) with expert parameters offloaded to SSD under memory pressure, plus an RTX 4090 with CPU offloading. Reported speedups over standard autoregressive decoding range from 1.3x to 5.3x depending on model/device/task, averaging about 2.0x, against baselines that include expert-sparsity and layer-sparsity self-speculative methods, EAGLE-3, and a prior MoE-aware cascade approach. Quality preservation is reported via near-1.0 perplexity ratios (1.012-1.013) and greater than 89% top-1 token agreement with the unmodified model across the tested models.

## Summary (ZH)

投机解码（用一个廉价的草稿模型提出若干候选 token，再由更大的目标模型一次性验证）与混合专家（MoE，每个 token 仅激活模型参数的一个子集）各自都能独立帮助边缘设备推理，但二者简单叠加会适得其反：投机解码假设相邻 token 之间存在参数复用，而 MoE 恰恰打破了这一假设——不同的草稿 token 可能激活完全不同的专家，导致一个被拒绝的草稿 token 仍会白白触发一次昂贵的专家参数加载。S2-MoE（北京大学）针对这一具体矛盾提出了三个组件。"路由感知的自适应投机扩展"步骤为每个候选 token 计算一个效用分数（预期收益相对于预测验证代价，代价通过预测草稿 token 的路由会实际调用目标模型的哪些专家来估计），只有效用超过阈值时才扩展投机窗口，而非使用固定窗口大小或仅凭置信度决定。"复用感知专家门控"步骤在当前 token 批次中按置信度加权聚合专家偏好，标记出一组数量有界的"全局偏好专家"，并在候选专家接近时将模型的路由 logits 向这些专家微调，从而提升专家参数的局部性，同时不改变模型原有的 top-k 路由结构。第三个机制让草稿模型与目标模型共享一个可回滚的 KV 缓存，防止草稿侧的预测误差级联传播到后续投机步骤。

该方案作为 llama.cpp 的扩展实现，在四个 MoE 模型（DeepSeek-V2-Lite 15.3B、OLMoE-1B-7B、Qwen3-30B-A3B、GPT-OSS-120B）与一系列任务（多轮对话、检索增强生成、摘要、翻译、问答、数学推理、代码生成及长上下文基准）上评测，S2-MoE 在真实的 NVIDIA Jetson Orin 硬件（NX 16GB、AGX Orin 32GB 与 64GB）上测量，内存压力下将专家参数卸载至 SSD，另在 RTX 4090（配合 CPU 卸载）上评测。相较标准自回归解码，报告的加速比在 1.3 至 5.3 倍之间，视模型/设备/任务而定，平均约 2.0 倍，对比基线包括专家稀疏与层稀疏自投机方法、EAGLE-3，以及一种此前的 MoE 感知级联方法。质量保持方面，报告的困惑度比值接近 1.0（1.012-1.013），且在测试模型上与未修改模型的 Top-1 token 一致率超过 89%。

## Key technical points (EN)

- **Problem**: naive speculative decoding + MoE combination fails because rejected draft tokens still trigger costly expert-parameter loads, since consecutive tokens can route to entirely different experts.
- **Mechanism 1**: routing-aware adaptive speculative expansion — per-token utility score (predicted benefit / predicted verification cost, cost estimated from predicted target-model expert routing) gates window expansion.
- **Mechanism 2**: reuse-aware expert gating — confidence-weighted cross-token expert-preference aggregation nudges routing toward a bounded set of globally-preferred experts, improving parameter locality without changing top-k routing.
- **Mechanism 3**: shared, rollback-capable KV cache between draft and target models, confining draft-side errors to individual speculative steps.
- **Implementation**: extension to llama.cpp; training-free; routing scores come from the gating module at inference, with lightweight offline profiling as an alternative.
- **Hardware**: real NVIDIA Jetson Orin NX (16GB), AGX Orin (32GB, 64GB) with SSD-offloaded experts under memory pressure; RTX 4090 with CPU offloading.
- **Models**: DeepSeek-V2-Lite (15.3B), OLMoE-1B-7B, Qwen3-30B-A3B, GPT-OSS-120B (116.8B).
- **Baselines**: autoregressive decoding, expert-sparsity and layer-sparsity self-speculative methods, EAGLE-3, a prior MoE-aware cascade method.
- **Headline numbers**: 1.3x-5.3x speedup over autoregressive decoding on the Jetson Orin devices and 1.2x-2.9x on the RTX 4090 (model/task-dependent), ~2.0x average; perplexity ratio 1.012-1.013; >89% top-1 token agreement with the unmodified model; acceptance-rate improvement of 35.0% (DeepSeek-V2-Lite) and 79.0% (OLMoE) on GSM8K attributed to the context-aligned shared KV cache.
- **Authors**: Haochen Huang, Shengxuan Qiu, Meng Li (Peking University — Institute for Artificial Intelligence, School of Integrated Circuits, School of Electronics Engineering and Computer Science).

## Key technical points (ZH)

- **问题**：投机解码与 MoE 简单叠加会失效，因为相邻 token 可能路由到完全不同的专家，导致被拒绝的草稿 token 仍会白白触发昂贵的专家参数加载。
- **机制一**：路由感知的自适应投机扩展——按预测收益/预测验证代价（代价由预测目标模型的专家路由估算）计算的逐 token 效用分数，决定是否扩展投机窗口。
- **机制二**：复用感知专家门控——按置信度加权聚合跨 token 的专家偏好，将路由向一组数量有界的"全局偏好专家"微调，在不改变原有 top-k 路由结构的前提下提升参数局部性。
- **机制三**：草稿模型与目标模型共享一个可回滚的 KV 缓存，将草稿侧的误差限制在单个投机步骤内，防止级联传播。
- **实现**：作为 llama.cpp 的扩展；训练无关；路由分数可直接取自推理时的门控模块，也可通过轻量离线画像获得。
- **硬件**：真实的 NVIDIA Jetson Orin NX（16GB）、AGX Orin（32GB、64GB），内存压力下专家参数卸载至 SSD；以及配合 CPU 卸载的 RTX 4090。
- **模型**：DeepSeek-V2-Lite（15.3B）、OLMoE-1B-7B、Qwen3-30B-A3B、GPT-OSS-120B（116.8B）。
- **对比基线**：自回归解码、专家稀疏与层稀疏自投机方法、EAGLE-3、一种此前的 MoE 感知级联方法。
- **核心数据**：相较自回归解码在 Jetson Orin 上加速 1.3 至 5.3 倍、在 RTX 4090 上加速 1.2 至 2.9 倍（视模型/任务而定），平均约 2.0 倍；困惑度比值 1.012-1.013；与未修改模型的 Top-1 token 一致率超过 89%；上下文对齐的共享 KV 缓存在 GSM8K 上带来的接受率提升分别为 35.0%（DeepSeek-V2-Lite）与 79.0%（OLMoE）。
- **作者**：Haochen Huang、Shengxuan Qiu、Meng Li（通讯作者）（北京大学人工智能研究院、集成电路学院、电子学与计算机科学学院）。

## Why it matters / what's new (EN)

This KB's `on-device-inference` bin already covers MoE-adjacent work from different angles (e.g. `2026-08-28_arxiv-neuroprefetcher-storage-backed-edge-llm` on storage-backed sparse inference, `2026-09-03_arxiv-mzcache-on-device-llm-multitasking-memory` on multitasking memory management), but S2-MoE is the first entry to specifically address the interaction failure between speculative decoding and MoE routing rather than either technique alone, and reports the widest hardware sweep for this specific mechanism seen in this KB to date — three Jetson Orin memory tiers plus a discrete-GPU comparison point, all on real silicon rather than simulation.

## Why it matters / what's new (ZH)

本知识库 `on-device-inference` 分类此前已从不同角度收录过与 MoE 相关的工作（例如关注存储支持稀疏推理的 `2026-08-28_arxiv-neuroprefetcher-storage-backed-edge-llm`，以及关注多任务内存管理的 `2026-09-03_arxiv-mzcache-on-device-llm-multitasking-memory`），但 S2-MoE 是本知识库中首个专门针对投机解码与 MoE 路由之间交互失效问题（而非孤立处理二者之一）的条目，且在本知识库中对该具体机制的硬件覆盖范围最广——涵盖三个 Jetson Orin 内存档位外加一个独立 GPU 对照点，且均在真实硬件而非仿真环境上完成。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
