---
id: 2026-10-27_arxiv-double-kv-cache-optimization-apple-silicon-block-fp4-polar-metal
date_published: 2026-10-21
date_found: 2026-10-27
technology: edge-ai
type: academic-paper
title_en: "Double KV cache optimization on Apple Silicon: block-FP4, radial quantization and fused Metal kernels"
title_zh: "Apple Silicon 上的双重 KV 缓存优化：块 FP4、径向量化与融合 Metal 内核"
url: "https://arxiv.org/abs/2610.33076"
source_quality: full
topics: [KV-cache, quantization, Apple-silicon, MLX, Metal, PolarQuant, FP4, long-context]
topic_primary: edge-model-efficiency
topics_secondary: [ai-pc, on-device-inference]
novelty_score: 2
---

## Summary (EN)

This 11-page paper measures how KV-cache compression behaves on a laptop-class Apple Silicon machine (MacBook Pro, M5 Max, 32-core GPU, 36 GB unified memory, MLX-LM 0.32.2) with one model checkpoint, mlx-community/LFM2.5-8B-A1B-OptiQ-4bit. Weight quantisation is held fixed and only KV handling changes. Five cache paths are compared: the native bf16 baseline, block-scaled E2M1 FP4, a Python reference of radial quantization with a QJL-style residual, a sequential FP4-then-Polar composition (the "double" path), and a fused Metal Polar kernel. Contexts of about 8K, 32K and 64K tokens are built from deterministic token IDs, each condition runs in a fresh process, and decode throughput is taken over a fixed 64-token window after warmup.

At 8K tokens the fused Metal Polar path reaches 46.8 tok/s at 3,456 bytes/token (3.64x compression versus bf16), 1.84x faster than the Python Polar reference (25.4 tok/s) and 13% faster than block-FP4 (41.5 tok/s at 3.62x). The bf16 baseline remains fastest at 171.4 tok/s. The sequential FP4-to-Polar path needs 4,241 bytes/token at 15.1 tok/s, worse than FP4 alone on both axes. At 32K the compressed variants fall to 1.5 to 14 tok/s (baseline 91.8 tok/s) because the attention path rebuilds the whole cache at each step, so cumulative decode work stays O(N^2). At 64K the Python Polar path completes at 0.47 tok/s and 3,072 bytes/token, while the fused Metal variant requests a 33.5 GB allocation and exceeds MLX's 22.6 GB per-buffer limit. The authors list fused attention directly on compressed KV and chunked pre-allocation as follow-up work.

## Summary (ZH)

这篇 11 页的论文测量了 KV 缓存压缩在笔记本级 Apple Silicon 机器上的表现（MacBook Pro，M5 Max，32 核 GPU，36 GB 统一内存，MLX-LM 0.32.2），使用单一模型检查点 mlx-community/LFM2.5-8B-A1B-OptiQ-4bit。权重量化保持不变，仅改变 KV 处理方式。对比五条缓存路径：原生 bf16 基线、块缩放 E2M1 FP4、带 QJL 式残差的径向量化 Python 参考实现、先 FP4 后 Polar 的串联组合（“双重”路径），以及融合 Metal Polar 内核。上下文长度约 8K、32K、64K token，由确定性 token ID 构造，每个条件在新进程中运行，解码吞吐取预热后固定 64 token 窗口。

在 8K token 时，融合 Metal Polar 路径达到 46.8 tok/s、3,456 字节/token（相对 bf16 压缩 3.64 倍），比 Python Polar 参考实现（25.4 tok/s）快 1.84 倍，比块 FP4（41.5 tok/s，压缩 3.62 倍）快 13%。bf16 基线仍最快，为 171.4 tok/s。串联 FP4 到 Polar 的路径需 4,241 字节/token、15.1 tok/s，两项指标都不如单独 FP4。在 32K 时，压缩方案降至 1.5 至 14 tok/s（基线 91.8 tok/s），原因是注意力路径每步重建整个缓存，累计解码计算量仍为 O(N^2)。在 64K 时，Python Polar 路径以 0.47 tok/s、3,072 字节/token 完成，而融合 Metal 变体请求 33.5 GB 分配，超过 MLX 22.6 GB 的单缓冲区上限。作者列出的后续工作包括直接在压缩 KV 上做融合注意力和分块预分配。

## Key technical points (EN)

- Cache bytes are persistent cache-owned storage after decode divided by effective cached tokens; compression is baseline bytes/token over the condition's bytes/token at the same nominal context.
- The paper reports one positive kernel result (fusion makes radial coding competitive at moderate context) and two negative system results (codec stacking is not additive; whole-cache reconstruction defeats compression at long context).
- Stated limits: one checkpoint, one Apple Silicon generation, one MLX stack; no perplexity, long-context retrieval or task-accuracy evaluation; single-request throughput only, with no batching or prefix-cache reuse; results should not be generalised to CUDA without a matched kernel.
- The 64K Metal row is an out-of-memory failure; no footprint or throughput is imputed for it.

## Key technical points (ZH)

- 缓存字节数为解码后缓存自身占用的持久存储除以有效缓存 token 数；压缩比为同一名义上下文下基线字节/token 与该条件字节/token 之比。
- 论文报告了一项正面的内核结果（融合使径向编码在中等上下文下具有竞争力）和两项负面的系统结果（编解码器叠加不可累加；整缓存重建使压缩在长上下文下失去优势）。
- 论文声明的局限：单一检查点、单一代 Apple Silicon、单一 MLX 软件栈；没有困惑度、长上下文检索或任务精度评估；仅为单请求吞吐，无批处理或前缀缓存复用；未经匹配内核不应推广到 CUDA。
- 64K 的 Metal 一行是内存不足失败，未对其估算占用或吞吐。

## Why it matters / what's new (EN)

For people running long-context models locally on a laptop, the useful content is the set of negative results: a compressed KV cache saves capacity but does not speed up decoding unless attention operates on the compressed form, and on this stack the uncompressed baseline wins on speed at every tested length where it fits. The study covers one model and one machine and does not measure answer quality, so the ranking may change with other models or software versions.

## Why it matters / what's new (ZH)

对在笔记本上本地运行长上下文模型的人来说，有用之处在于这些负面结果：压缩 KV 缓存能节省容量，但除非注意力直接作用于压缩形式，否则不会加快解码；在此软件栈上，未压缩基线在所有能容纳的测试长度下速度都最快。研究只覆盖一个模型和一台机器，也未测量回答质量，换用其他模型或软件版本，排序可能改变。

## Images

*(No redistributable images for this entry.)*
