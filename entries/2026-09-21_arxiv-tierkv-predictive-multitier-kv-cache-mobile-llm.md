---
id: 2026-09-21_arxiv-tierkv-predictive-multitier-kv-cache-mobile-llm
date_published: 2026-09-18
date_found: 2026-09-21
technology: edge-ai
type: academic-paper
title_en: "TierKV: Long-Context On-Device LLMs via Predictive Multi-Tier KV Caching"
title_zh: "TierKV：基于预测式多层级 KV 缓存的端侧长上下文 LLM"
url: "https://arxiv.org/abs/2609.21172"
source_quality: full
topics: [KV-cache, mobile-inference, long-context, quantization, flash-offload]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

Zhihao Shu, Md Musfiqur Rahman Sanim, Jie Hu, Kun Yuan, Minghai Qin, Gagan Agrawal and Wei Niu (University of Georgia; Peking University; Western Digital Research) submitted this paper to arXiv on 18 September 2026. It targets a specific bottleneck in mobile LLM deployment: as on-device models take on longer-context, multimodal workloads (text, image, video, audio), the Key-Value (KV) cache grows linearly with sequence length and is read at every decoding step, making it the dominant memory constraint. Existing mitigations — low-rank compression, token eviction, or flash offloading — each introduce their own cost: reconstruction overhead, irreversible token loss, or I/O stalls that can offset the memory saved.

The paper's mechanism, Predictive Multi-Tier Cache Optimization (PMCO), runs before decoding starts: it predicts future cache demand from the prefill hidden states and jointly assigns tokens to one of three tiers — exact (uncompressed), low-rank (compressed), or flash-offloaded — under an explicit device memory budget and accuracy budget. Because the tier assignment is decided up front from a closed-form solver (selecting tier boundaries and per-layer ranks), the design avoids the circular dependency of reactive eviction schemes (which must decide what to evict without knowing what will be needed later) while retaining access to the model's full context rather than discarding tokens outright. The authors evaluate TierKV across eight models spanning text (Llama-3.2 1B/3B, Qwen2.5-3B, TinyLlama-1.1B, Gemma4-E2B), vision (Qwen2-VLM-2B, SmolVLM2-1.7B) and audio (Ultravox-1B) modalities, on three real mobile SoCs: Snapdragon 8 Gen 3 (Adreno 750 GPU, OnePlus 12, 12 GB RAM), Snapdragon 8 Gen 2 (Adreno 740 GPU, OnePlus 11, 16 GB RAM) and Tensor G3 (Mali-G715 MP7 GPU, Google Pixel 8, 8 GB RAM), run at batch size 1 against FP16 llama.cpp, MLC-LLM and MNN-LLM baselines. On the OnePlus 12, headline results include a measured 275.1 tokens/s prefill throughput for Llama-3.2-1B versus 182.6 tokens/s for llama.cpp (~1.5x; the paper reports 1.5-1.6x over llama.cpp across Llama-3.2-1B and TinyLlama-1.1B), with the paper additionally citing up to 17.6x prefill throughput gains over the MNN-LLM baseline on select models; RAM-resident KV cache is reduced 12.5-34% (25% average), and the memory savings translate into up to 2.6x longer usable context under the same memory budget.

## Summary (ZH)

佐治亚大学、北京大学与西部数据研究院（Western Digital Research）的 Zhihao Shu、Md Musfiqur Rahman Sanim、Jie Hu、Kun Yuan、Minghai Qin、Gagan Agrawal 与 Wei Niu 于 2026 年 9 月 18 日向 arXiv 提交了本文，处理的是移动端 LLM 部署中的一个具体瓶颈：随着端侧模型承担越来越长的上下文、多模态（文本、图像、视频、音频）工作负载，KV 缓存随序列长度线性增长且在每个解码步都会被读取，成为主导性的内存约束。现有的缓解手段——低秩压缩、token 淘汰或闪存卸载——各自带来自身的代价：重建开销、不可逆的 token 丢失，或抵消内存收益的 I/O 阻塞。

本文提出的机制"预测式多层级缓存优化"（PMCO）在解码开始前运行：它根据预填充阶段的隐藏状态预测未来的缓存需求，并在显式的设备内存预算与精度预算约束下，将 token 联合分配到三个层级之一——精确（未压缩）、低秩（压缩）或闪存卸载。由于层级分配是由一个闭式求解器提前决定（选择层级边界与逐层秩），该设计避免了被动淘汰方案的循环依赖问题（这类方案必须在不知道未来需求的情况下决定淘汰什么），同时仍保留对模型完整上下文的访问，而非直接丢弃 token。作者在覆盖文本（Llama-3.2 1B/3B、Qwen2.5-3B、TinyLlama-1.1B、Gemma4-E2B）、视觉（Qwen2-VLM-2B、SmolVLM2-1.7B）与音频（Ultravox-1B）三种模态的八个模型上，于三款真实移动 SoC——骁龙 8 Gen 3（Adreno 750 GPU，OnePlus 12，12GB 内存）、骁龙 8 Gen 2（Adreno 740 GPU，OnePlus 11，16GB 内存）与 Tensor G3（Mali-G715 MP7 GPU，Google Pixel 8，8GB 内存）——上评测 TierKV，batch size 为 1，并与 FP16 精度的 llama.cpp、MLC-LLM 与 MNN-LLM 三个基线对比。在 OnePlus 12 上，主要结果包括：Llama-3.2-1B 实测预填充吞吐量为 275.1 tokens/s，对比 llama.cpp 的 182.6 tokens/s（约 1.5 倍；论文报告在 Llama-3.2-1B 与 TinyLlama-1.1B 上相对 llama.cpp 为 1.5–1.6 倍），论文还指出在部分模型上相对 MNN-LLM 基线的预填充吞吐量提升最高达 17.6 倍；驻留内存中的 KV 缓存降低 12.5%-34%（平均 25%），内存节省进一步转化为相同内存预算下最高 2.6 倍的可用上下文长度提升。

## Key technical points (EN)

- **Problem**: mobile LLM workloads are increasingly long-context and multimodal; the KV cache grows linearly with sequence length and is accessed every decoding step, making it the dominant on-device memory bottleneck. Prior mitigations (low-rank compression, token eviction, flash offloading) each trade in a different cost (reconstruction overhead, irreversible loss, I/O stalls).
- **Mechanism (PMCO)**: predicts future cache demand from prefill hidden states before decoding starts, then jointly assigns tokens to exact / low-rank / flash-offloaded tiers under device memory and accuracy budgets via a closed-form solver — avoiding the circular dependency of reactive eviction while retaining full-context access.
- **Evaluation**: 8 models across text/vision/audio modalities, on 3 real mobile SoCs (Snapdragon 8 Gen 3 / 8 Gen 2, Tensor G3), batch size 1, vs. FP16 llama.cpp / MLC-LLM / MNN-LLM baselines.
- **Headline numbers (OnePlus 12)**: Llama-3.2-1B prefill throughput 275.1 tok/s vs. 182.6 tok/s for llama.cpp (~1.5x; the paper reports 1.5-1.6x over llama.cpp across Llama-3.2-1B and TinyLlama-1.1B); up to 17.6x vs. MNN-LLM on select models; RAM-resident KV cache reduced 12.5-34% (25% average); up to 2.6x longer usable context at the same memory budget.
- **Affiliation**: academic-industry collaboration (University of Georgia, Peking University, Western Digital Research).

## Key technical points (ZH)

- **问题背景**：移动端 LLM 工作负载正变得越来越长上下文、多模态；KV 缓存随序列长度线性增长且每个解码步都会被访问，成为端侧主导性的内存瓶颈。现有缓解手段（低秩压缩、token 淘汰、闪存卸载）各自带来不同代价（重建开销、不可逆丢失、I/O 阻塞）。
- **机制（PMCO）**：在解码开始前根据预填充隐藏状态预测未来缓存需求，随后通过闭式求解器在设备内存与精度预算约束下，将 token 联合分配到精确/低秩/闪存卸载三个层级——避免了被动淘汰方案的循环依赖问题，同时保留完整上下文访问。
- **评测设置**：覆盖文本/视觉/音频三种模态的 8 个模型，在 3 款真实移动 SoC（骁龙 8 Gen 3、8 Gen 2、Tensor G3）上，batch size 为 1，对比 FP16 精度的 llama.cpp、MLC-LLM、MNN-LLM 三个基线。
- **主要数据（OnePlus 12）**：Llama-3.2-1B 预填充吞吐量 275.1 tokens/s，对比 llama.cpp 的 182.6 tokens/s（约 1.5 倍；论文报告在 Llama-3.2-1B 与 TinyLlama-1.1B 上相对 llama.cpp 为 1.5–1.6 倍）；部分模型相对 MNN-LLM 基线最高提升 17.6 倍；驻留内存 KV 缓存降低 12.5%-34%（平均 25%）；相同内存预算下可用上下文长度最高提升 2.6 倍。
- **合作背景**：学术界与产业界联合研究（佐治亚大学、北京大学、西部数据研究院）。

## Why it matters / what's new (EN)

This KB already covers several angles of on-device KV-cache management — multitasking memory management (2026-09-03_arxiv-mzcache-on-device-llm-multitasking-memory), disk-aware caching (2026-09-07_arxiv-kvswap-disk-aware-kv-cache-on-device), and integer-only compute-in-flash with dictionary-based KV compression (2026-09-16_arxiv-llm-inference-flash-compute-in-flash, explicitly analytical/system-modeled rather than measured). TierKV adds a distinct angle to that set: a *predictive*, tier-selecting cache policy decided up front from prefill hidden states (rather than reactive eviction or a single fixed compression scheme), measured across a genuine three-way modality spread (text/vision/audio) on three different real mobile SoCs from two vendors (Qualcomm Snapdragon, Google Tensor) rather than a single device or a simulated setup.

## Why it matters / what's new (ZH)

本知识库已从多个角度覆盖端侧 KV 缓存管理问题——多任务场景下的内存管理（2026-09-03_arxiv-mzcache-on-device-llm-multitasking-memory）、磁盘感知缓存（2026-09-07_arxiv-kvswap-disk-aware-kv-cache-on-device），以及整数运算 compute-in-flash 结合字典式 KV 压缩（2026-09-16_arxiv-llm-inference-flash-compute-in-flash，该文明确为分析/系统建模而非实测）。TierKV 为这一系列增添了一个不同的角度：基于预填充隐藏状态提前决定的"预测式、分层选择"缓存策略（而非被动淘汰或单一固定压缩方案），并在两个厂商（高通骁龙、谷歌 Tensor）的三款真实移动 SoC 上，针对文本/视觉/音频三模态完成了实测，而非单一设备或模拟环境下的验证。
