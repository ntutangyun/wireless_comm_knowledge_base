---
id: 2026-11-02_arxiv-gaac-lossless-kv-cache-compression-personal-devices
date_published: 2026-10-28
date_found: 2026-11-02
technology: edge-ai
type: academic-paper
title_en: "GAAC: lossless KV compression for bandwidth-efficient LLM inference on personal devices"
title_zh: "GAAC：面向个人设备带宽高效 LLM 推理的无损 KV 压缩"
url: "https://arxiv.org/abs/2610.38210"
source_quality: full
topics: [KV-cache, lossless-compression, BF16, DGX-Spark, Apple-M4, long-context, memory-bandwidth]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference, edge-ai-silicon]
novelty_score: 3
---

## Summary (EN)

The paper starts from the observation that on personal platforms such as NVIDIA DGX Spark and Apple Silicon, LLM decoding is typically limited by memory bandwidth rather than arithmetic, and that weight-only quantisation leaves the key-value (KV) cache unchanged, so the cache grows in relative importance for long contexts. It presents Group-Adaptive Additive Codec (GAAC), a lossless KV compression and serving system that exploits redundancy in BF16 exponent fields without approximating any KV value.

GAAC encodes each exponent as an offset from a calibrated per-channel base. Exponents are grouped in eights, and each group carries a 2-bit tag selecting a 3-bit code, a 4-bit code or raw storage, while sign and mantissa stay in one unchanged byte per element. A fused attention kernel reconstructs KV tiles on the fly so the full cache is never decompressed, and block-wise compression with fixed-capacity slots supports incremental cache updates and paged serving.

Reported results: across five models, 1.405 to 1.407 times lossless BF16 KV compression, 1.09 to 1.14 times on FP8 E4M3 caches and 1.25 to 1.30 times on E5M2. On DGX Spark, decode attention at a 64K-token context is 1.19 to 1.27 times faster and end-to-end W4A16 decode steps 1.04 to 1.15 times faster; in serving, resident KV memory falls by about 26% and aggregate throughput rises 13 to 29% under comparable KV-memory budgets. On Apple M4, attention speedups are 1.02 to 1.25 times. Exponent windows calibrated once on WikiText-2 transferred to code, maths, knowledge and language-modelling tasks with at most 0.004 loss in compression ratio.

## Summary (ZH)

论文的出发点是：在 NVIDIA DGX Spark 和 Apple Silicon 等个人平台上，LLM 解码通常受内存带宽而非算力限制；仅权重量化不改变键值（KV）缓存，使其在长上下文中的相对占比上升。论文提出分组自适应加法编码器（GAAC），这是一套无损 KV 压缩与服务系统，利用 BF16 指数位的冗余，且不对任何 KV 值做近似。

GAAC 把每个指数编码为相对校准后的逐通道基值的偏移。指数按每 8 个一组，每组带 2 比特标签，选择 3 比特编码、4 比特编码或原始存储；符号位与尾数位在每个元素中保持不变，占一个字节。融合注意力内核即时重建 KV 分块，无需解压整个缓存；分块压缩与定容槽位支持增量缓存更新和分页服务。

论文报告：在五个模型上，BF16 KV 的无损压缩比为 1.405 至 1.407 倍，FP8 E4M3 缓存为 1.09 至 1.14 倍，E5M2 为 1.25 至 1.30 倍。在 DGX Spark 上，64K token 上下文的解码注意力加速 1.19 至 1.27 倍，端到端 W4A16 解码步加速 1.04 至 1.15 倍；在服务场景中，常驻 KV 内存减少约 26%，在相近 KV 内存预算下总吞吐提高 13% 至 29%。在 Apple M4 上注意力加速为 1.02 至 1.25 倍。仅在 WikiText-2 上校准一次的指数窗口可迁移到代码、数学、知识和语言建模任务，压缩比下降至多 0.004。

## Key technical points (EN)

- **Codec**: per-channel calibrated base plus offset codes for BF16 exponents; groups of eight share a 2-bit mode tag (3-bit, 4-bit or raw); sign and mantissa unchanged, so reconstruction is bit-exact.
- **Kernel**: fused attention decompresses KV tiles on the fly; prefill uses standard attention and is not accelerated.
- **Serving**: block-wise compression and fixed-capacity slots for paged, incremental cache updates.
- **Ablation**: adding a fourth 2-bit mode would improve compression by only 2.3% while raising decode latency to 2.8 times that of the 3+4+raw design.
- **Limits stated**: less gain on FP8 caches (especially E4M3); RoPE-rotated keys can drift when calibration contexts are shorter than deployment contexts; gains shrink for short contexts and models with few full-attention layers; no power or energy measurements.

## Key technical points (ZH)

- **编码器**：BF16 指数采用逐通道校准基值加偏移编码；每 8 个一组共享 2 比特模式标签（3 比特、4 比特或原始）；符号位与尾数不变，因此重建是逐比特精确的。
- **内核**：融合注意力即时解压 KV 分块；预填充使用标准注意力，未获加速。
- **服务**：分块压缩与定容槽位，支持分页、增量的缓存更新。
- **消融**：增加第四种 2 比特模式仅使压缩率提高 2.3%，却使解码时延升至 3+4+原始设计的 2.8 倍。
- **论文所述局限**：FP8 缓存（尤其 E4M3）收益较小；当校准上下文短于部署上下文时，经 RoPE 旋转的键可能发生漂移；短上下文及全注意力层较少的模型收益较小；未包含功耗或能耗测量。

## Why it matters / what's new (EN)

The paper's framing is that once weights are quantised, the KV cache is what remains to be shrunk for long-context inference on a single personal device, and that doing so without approximating values avoids the quality questions raised by lossy KV quantisation. Evidence comes from two device classes (DGX Spark and Apple M4) on selected LLMs; no phone or NPU results are given, so the relevance to phone-class edge hardware is not demonstrated here.

## Why it matters / what's new (ZH)

论文的思路是：权重量化之后，长上下文推理在单台个人设备上剩下可压缩的主要是 KV 缓存；不对数值做近似，可避免有损 KV 量化带来的质量问题。证据来自两类设备（DGX Spark 与 Apple M4）和选定的 LLM；论文未给出手机或 NPU 上的结果，因此对手机级边缘硬件的适用性在此并未得到验证。

## Images

*(No redistributable images for this entry.)*
