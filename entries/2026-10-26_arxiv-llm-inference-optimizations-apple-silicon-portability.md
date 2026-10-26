---
id: 2026-10-26_arxiv-llm-inference-optimizations-apple-silicon-portability
date_published: 2026-10-22
date_found: 2026-10-26
technology: edge-ai
type: academic-paper
title_en: "Evaluating the applicability of LLM inference optimizations on Apple Silicon: KV-cache pruning, speculative decoding, ported GPU kernels and quantization"
title_zh: "LLM 推理优化在 Apple Silicon 上的适用性评估：KV 缓存剪枝、推测解码、移植的 GPU 内核与量化"
url: "https://arxiv.org/abs/2610.31479"
source_quality: full
topics: [Apple-Silicon, Metal, MLX, llama.cpp, KV-cache-pruning, speculative-decoding, quantization, single-request-decode, local-LLM]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

The authors (MacPaw AI & Research, Kyiv, with Lviv Polytechnic and the Institute of Mathematics of NAS of Ukraine) ask which LLM inference optimizations, nearly all designed and validated on server-class NVIDIA GPUs under batched serving, keep their benefit on Apple Silicon, where single-request decoding in unified memory is the common local-inference regime. They state that none of the methods they study reports a measurement on Apple hardware in its original publication. The arXiv comments field lists acceptance at two NeurIPS 2026 workshops, On-Device Intelligence and SLMs for Agentic Systems.

Four optimization families are tested under a common batch-one decode workload on four Apple machines (M2 Pro, M3 Ultra, M4 Pro, and M2 for the kernel study), with matched RTX 4090 controls where configurations can be aligned: KV-cache management (persistent prefix reuse and post-prefill pruning through KVPress, including SnapKV, KNorm, StreamingLLM, TOVA, ExpectedAttention and FastKVzip), speculative decoding (classic, n-gram, cascade n-gram, EAGLE-3, DFlash, DDTree), Metal/MLX ports of CUDA mechanisms (Marlin W4A16 GEMM, FlashInfer split-KV attention, MoE gather), and quantization (GGUF/llama.cpp, MLX affine and DWQ, RTN, QuaRot with RTN or GPTQ). Pruning experiments use Qwen3-4B-Instruct-2507 and LFM2.5-2.6B in bfloat16 at 512 and 4,096 token contexts.

Reported results: pruning reaches 1.26 to 1.75x end-to-end speedup at 128 to 256 generated tokens on Apple (ExpectedAttention at a 4,096-token context: 1.75x, 1.61x and 1.72x on M2 Pro, M3 Ultra and M4 Pro) versus 0.45 to 1.01x on the RTX 4090; FastKVzip stays below baseline everywhere. The hybrid LFM2.5-2.6B gains at most 1.25x. Persistent prefix reuse cuts conversation wall time by 33%, 42% and 57% at turns 3, 5 and 9. No evaluated speculative-decoding method gave a net speedup on Apple. Ported kernel components give up to 1.20x decode throughput (MoE gather +3 to 12%; FlashInfer +20% on M4 Pro but -3% on M2), and QuaRot does not pay off without low-precision activation kernels. The authors conclude that a reported speedup is a joint function of technique, runtime, hardware contract and workload regime. Output-quality effects of pruning are explicitly out of scope.

## Summary (ZH)

作者来自乌克兰 MacPaw AI & Research，并有利沃夫理工大学和乌克兰国家科学院数学研究所的合作者。论文关注一个问题：几乎所有 LLM 推理优化都是在服务器级 NVIDIA GPU 的批量服务场景下设计和验证的，它们在 Apple Silicon（统一内存、单请求解码是常见的本地推理形态）上还能保留多少收益。作者指出，所研究的方法在其原始论文中都没有 Apple 硬件上的测量。arXiv 备注栏显示该文被 NeurIPS 2026 的两个工作坊（On-Device Intelligence 与 SLMs for Agentic Systems）接收。

论文在统一的 batch-one 解码负载下，用四台 Apple 机器（M2 Pro、M3 Ultra、M4 Pro，内核研究还用到 M2）测试四类优化，并在可对齐配置时以 RTX 4090 作匹配对照：KV 缓存管理（持久前缀复用，以及通过 KVPress 做的预填充后剪枝，含 SnapKV、KNorm、StreamingLLM、TOVA、ExpectedAttention、FastKVzip）、推测解码（经典、n-gram、级联 n-gram、EAGLE-3、DFlash、DDTree）、CUDA 机制向 Metal/MLX 的移植（Marlin W4A16 GEMM、FlashInfer split-KV 注意力、MoE gather）以及量化（GGUF/llama.cpp、MLX affine 与 DWQ、RTN、QuaRot 搭配 RTN 或 GPTQ）。剪枝实验使用 bfloat16 的 Qwen3-4B-Instruct-2507 和 LFM2.5-2.6B，上下文为 512 与 4,096 token。

报告的结果：在生成 128 至 256 个 token 时，剪枝在 Apple 上取得 1.26 至 1.75 倍端到端加速（4,096 token 上下文下 ExpectedAttention 在 M2 Pro、M3 Ultra、M4 Pro 上分别为 1.75、1.61、1.72 倍），而在 RTX 4090 上为 0.45 至 1.01 倍；FastKVzip 在所有设备上都低于基线。混合架构 LFM2.5-2.6B 最多 1.25 倍。持久前缀复用使多轮对话在第 3、5、9 轮的墙钟时间分别下降 33%、42%、57%。所评估的推测解码方法在 Apple 上均无净加速。移植的内核组件最多带来 1.20 倍解码吞吐（MoE gather +3% 至 12%；FlashInfer 在 M4 Pro 上 +20%、在 M2 上 -3%），QuaRot 在缺少低精度激活内核时不划算。作者的结论是：已报告的加速比是技术、运行时、硬件约定和负载形态的共同函数。剪枝对输出质量的影响明确不在范围内。

## Key technical points (EN)

- Scope: single-request (batch-one) decode in unified memory, the regime of local desktop and laptop inference, not batched serving.
- Hardware: four Apple machines across three GPU generations plus a matched RTX 4090 control where configurations align; medians of three runs after one warm-up.
- KV cache: persistent cache footprint depends on attention architecture (Qwen3-4B 144 MiB at 1,024 tokens and 4,608 MiB at 32,768; hybrid Granite-4.0-H-Micro and LFM2.5-2.6B grow 8 and 16 KiB per token) rather than parameter count alone.
- Pruning peak memory on M4 Pro: 20.4 to 25.6% savings for Qwen at a 4,096 context, but peak memory rises by up to 155.5% at a 512 context because of transient scoring and compaction allocations.
- Kernels: public Metal lacks asynchronous copy, and batch-one decode makes several serving-oriented mechanisms inapplicable; Marlin is effective at batch above 1 and negligible at M=1.
- Quantization: MLX native affine/DWQ is reported as the best combined trade-off; gains vary by machine.
- Limits stated or evident: pruning output quality not evaluated; LFM2.5-8B-A1B excluded (KVPress lacks its architecture and it exceeds M2 Pro memory); ratios compare techniques, not absolute throughput.

## Key technical points (ZH)

- 范围：统一内存中的单请求（batch-one）解码，即本地台式机与笔记本推理的形态，而非批量服务。
- 硬件：跨三代 GPU 的四台 Apple 机器，并在配置可对齐时用 RTX 4090 作匹配对照；每项取一次预热后三次测量的中位数。
- KV 缓存：常驻缓存规模取决于注意力架构而不只是参数量（Qwen3-4B 在 1,024 token 时为 144 MiB、32,768 token 时为 4,608 MiB；混合架构 Granite-4.0-H-Micro 与 LFM2.5-2.6B 每 token 分别增长 8 与 16 KiB）。
- M4 Pro 上剪枝的峰值内存：4,096 上下文下 Qwen 节省 20.4% 至 25.6%，但 512 上下文下因临时打分与压缩分配，峰值内存最多反而增加 155.5%。
- 内核：公开的 Metal 缺少异步拷贝，batch-one 解码使若干面向服务的机制不适用；Marlin 在 batch 大于 1 时有效，在 M=1 时可忽略。
- 量化：MLX 原生 affine/DWQ 被报告为综合折中最好；收益因机器而异。
- 论文自述或显见的局限：未评估剪枝对输出质量的影响；LFM2.5-8B-A1B 被排除（KVPress 不支持其架构且超出 M2 Pro 内存）；比值比较的是技术而非绝对吞吐。

## Why it matters / what's new (EN)

The paper supplies measured, device-level evidence on a question local-inference users face when adopting server-derived techniques: several widely reported gains (speculative decoding in particular) do not transfer to batch-one decode on Apple GPUs, while some pruning methods gain more there than on a desktop GPU. The numbers come from four machines, two model families and one decode regime, so they characterise that setup rather than all Apple devices or longer-context serving.

## Why it matters / what's new (ZH)

对采用服务器端技术做本地推理的用户来说，本文给出了设备级的实测证据：若干被广泛报告的收益（尤其是推测解码）无法迁移到 Apple GPU 上的 batch-one 解码，而部分剪枝方法在 Apple 上的收益反而高于桌面 GPU。数字来自四台机器、两类模型和一种解码形态，因此刻画的是该设置，而不代表所有 Apple 设备或更长上下文的服务场景。

## Images

*(No redistributable images for this entry.)*
