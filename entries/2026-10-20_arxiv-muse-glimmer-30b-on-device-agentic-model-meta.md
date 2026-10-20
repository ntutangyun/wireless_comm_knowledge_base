---
id: 2026-10-20_arxiv-muse-glimmer-30b-on-device-agentic-model-meta
date_published: 2026-10-17
date_found: 2026-10-20
technology: edge-ai
type: academic-paper
title_en: "Muse Glimmer 30B: An On-Device Agentic Model"
title_zh: "Muse Glimmer 30B：一个端侧智能体模型"
url: "https://arxiv.org/abs/2610.24628"
source_quality: full
topics: [small-language-model, agentic-model, 4-bit-quantization, speculative-decoding, consumer-GPU, open-weights]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

Muse Glimmer is a 30B-parameter dense causal language model with a perception encoder (text and image input, text output), released by the Meta Superintelligence Labs team with Apache 2.0 weights. The report states it is distilled from the team's larger Muse Spark model and designed to run locally for agentic tasks, with multi-step planning, tool use and failure recovery, on consumer hardware. The stated design constraint is a 32 GB VRAM envelope; the authors report choosing a dense architecture over mixture-of-experts after comparing scaling ladders under that limit.

On deployment, the BF16 weights occupy 55.7 GB. The team targets 24 GB and 32 GB memory devices with a language-model weight size below 20 GB, comparing post-training quantization schemes (GPTQ, AWQ, NVFP4/MXFP8 mixes, llama.cpp-style Q4_K_M, and searched mixed-precision allocations). Two variants are selected: a Q4_K_M-style profile for 24 GB and an EvoPress-searched profile (19.65 GB of weights) for 32 GB. Over 15 downstream tasks the average accuracy is 75.7% for BF16, 75.6% for the EvoPress profile and 74.8% for Q4_K_M. A lightweight DFlash block-diffusion drafter is trained for speculative decoding, and the report says the model runs at practical speeds on a single RTX 5090. The authors claim the best results in its size class on agentic benchmarks against Gemma4-31B and Qwen3.6-27B; those comparisons are their own.

## Summary (ZH)

Muse Glimmer 是一个 30B 参数的稠密因果语言模型，带感知编码器（文本与图像输入、文本输出），由 Meta Superintelligence Labs 团队以 Apache 2.0 协议发布权重。报告称其由该团队更大的 Muse Spark 模型蒸馏而来，设计用于在消费级硬件上本地运行智能体任务，包括多步规划、工具调用和故障恢复。明确的设计约束是 32 GB 显存；作者称在该限制下比较了不同的扩展曲线后，选择稠密架构而非混合专家（MoE）。

部署方面，BF16 权重占 55.7 GB。团队面向 24 GB 和 32 GB 内存的设备，把语言模型权重控制在 20 GB 以内，比较了多种训练后量化方案（GPTQ、AWQ、NVFP4/MXFP8 混合、类 llama.cpp 的 Q4_K_M，以及搜索得到的混合精度分配）。最终选出两个版本：面向 24 GB 的 Q4_K_M 风格方案，以及面向 32 GB 的 EvoPress 搜索方案（权重 19.65 GB）。在 15 项下游任务上，平均精度 BF16 为 75.7%，EvoPress 方案为 75.6%，Q4_K_M 为 74.8%。团队还训练了轻量的 DFlash 块扩散草稿模型用于推测解码，报告称模型在单张 RTX 5090 上可达到实用速度。作者声称在同尺寸级别的智能体基准上优于 Gemma4-31B 和 Qwen3.6-27B，这些比较均为作者自测。

## Key technical points (EN)

- Model: 30B dense, text and image in, text out; Apache 2.0 weights (full precision, 4-bit, and a speculative-decoding drafter).
- Memory target: 32 GB VRAM design envelope; weights below 20 GB for 24 and 32 GB devices (BF16 is 55.7 GB).
- Quantization: PTQ comparison (GPTQ, AWQ, NVFP4/MXFP8, Q4_K_M, Greedy-KL, EvoPress); chosen profiles are Q4_K_M-style and EvoPress (19.65 GB).
- Quality retention: 15-task average accuracy 75.7% (BF16), 75.6% (EvoPress), 74.8% (Q4_K_M).
- Speed: DFlash drafter (5 layers, block size 16) for speculative decoding; run on a single RTX 5090.
- Claims versus Gemma4-31B and Qwen3.6-27B are the authors' own benchmark results.

## Key technical points (ZH)

- 模型：30B 稠密，文本与图像输入、文本输出；Apache 2.0 权重（全精度、4 比特及推测解码草稿模型）。
- 内存目标：32 GB 显存设计上限；面向 24 与 32 GB 设备，权重低于 20 GB（BF16 为 55.7 GB）。
- 量化：训练后量化对比（GPTQ、AWQ、NVFP4/MXFP8、Q4_K_M、Greedy-KL、EvoPress）；选定方案为 Q4_K_M 风格和 EvoPress（19.65 GB）。
- 质量保持：15 项任务平均精度 BF16 为 75.7%、EvoPress 为 75.6%、Q4_K_M 为 74.8%。
- 速度：DFlash 草稿模型（5 层、块大小 16）用于推测解码；在单张 RTX 5090 上运行。
- 相对 Gemma4-31B 与 Qwen3.6-27B 的结论为作者自测基准结果。

## Why it matters / what's new (EN)

This is a model published explicitly for local use, with memory budgets and a quantization study that shows how a 30B model is fitted into 24 and 32 GB devices. The report targets devices with 24 or 32 GB of memory and gives no decode speeds beyond the RTX 5090 statement.

## Why it matters / what's new (ZH)

这是一个明确为本地使用而发布的模型，给出了内存预算以及一项量化研究，展示如何把 30B 模型装入 24 与 32 GB 设备。报告面向 24 或 32 GB 内存的设备，除 RTX 5090 的表述外未给出解码速度。

## Images

*(No redistributable images for this entry.)*
