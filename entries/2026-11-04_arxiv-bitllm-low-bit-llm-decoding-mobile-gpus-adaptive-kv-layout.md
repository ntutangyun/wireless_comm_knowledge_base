---
id: 2026-11-04_arxiv-bitllm-low-bit-llm-decoding-mobile-gpus-adaptive-kv-layout
date_published: 2026-10-31
date_found: 2026-11-04
technology: edge-ai
type: academic-paper
title_en: "BitLLM: Efficient Low-Bit, Conversion-Hiding LLM Decoding on Mobile GPUs"
title_zh: "BitLLM：面向移动 GPU 的高效低比特、隐藏类型转换的 LLM 解码"
url: "https://arxiv.org/abs/2611.00547"
source_quality: full
topics: [mobile-GPU, W4A8, W8A8, KV-cache-layout, Adreno, Mali, llama.cpp, MNN-LLM, LiteRT-LM, MLC-LLM]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

The paper observes that low-bit quantisation (for example 4-bit weights with 8-bit activations) has had limited practical benefit on mobile GPUs. It attributes the gap to frequent conversions between quantised and floating-point values and to memory access patterns that degrade as the KV cache grows during autoregressive decoding. As evidence it reports that INT8 on a Snapdragon 8 Gen 3 GPU can be up to 2x slower than FP16 while INT8 on the same SoC's CPU is about 2x faster, and that per-token latency in a 10,240-token decode rises in steps from about 80 ms to over 900 ms.

BitLLM is a mobile inference engine with three mechanisms: an adaptive layout and packing strategy for the KV cache (a Layout Efficiency Proxy picks a layout per context length and the cache is split into append-only segments), quantisation-aware packing that reduces unpacking to a few bitwise operations per word, and an integer-native pipeline that defers and overlaps type conversion so the main matrix multiplications stay in the integer domain. On OnePlus 12 (Adreno 750) with Llama-3.2, Qwen3, Gemma-2 and Phi-2 models, it reports average speedups of 1.78x, 1.73x, 1.58x and 1.47x over llama.cpp, MNN-LLM, LiteRT-LM and MLC-LLM, and lower per-token energy.

## Summary (ZH)

论文观察到，低比特量化（例如 4 比特权重配 8 比特激活）在移动 GPU 上的实际收益有限，并将原因归于量化值与浮点值之间的频繁转换，以及 KV 缓存在自回归解码中增长所导致的内存访问模式恶化。作为证据，论文报告在骁龙 8 Gen 3 的 GPU 上 INT8 可比 FP16 慢达 2 倍，而同一 SoC 的 CPU 上 INT8 约快 2 倍；解码 10,240 个 token 时，单 token 延迟从约 80 ms 阶梯式升至 900 ms 以上。

BitLLM 是一个移动端推理引擎，包含三项机制：KV 缓存的自适应布局与打包策略（由布局效率代理按上下文长度选择布局，缓存被切分为只追加的分段）；量化感知打包，把解包降到每个字几次位运算；以及整数原生流水线，推迟并重叠类型转换，使主要矩阵乘保持在整数域。在 OnePlus 12（Adreno 750）上，使用 Llama-3.2、Qwen3、Gemma-2 和 Phi-2 模型，论文报告相对 llama.cpp、MNN-LLM、LiteRT-LM 与 MLC-LLM 的平均加速分别为 1.78 倍、1.73 倍、1.58 倍和 1.47 倍，并降低单 token 能耗。

## Key technical points (EN)

- **Layout Efficiency Proxy**: weighted sum of data-access cost and unpacking cost (weights 0.5 and 0.7, calibrated offline per GPU); it selects layouts in 45.5-95.2 ms versus 1,413.6-2,747.3 s for exhaustive search, with a 1.86-3.89% mean slowdown against the oracle.
- **Segmented KV cache**: short contexts (<256 tokens) favour D-contiguous layouts, long contexts (>512) T-contiguous; about 2.25 segments on average over 10K-token runs, segmentation overhead under 1% of decoding latency.
- **Fixed-context speedups**: versus llama.cpp 1.29x (FP16), 2.47x (W8A8), 1.59x (W4A8); long context (Llama-3.2-1B, up to 10K tokens) 3.25x at W4A8 and 3.96x at W8A8 versus llama.cpp, with flat per-token latency where baselines show periodic spikes.
- **Energy**: average per-token reduction versus llama.cpp of 75.7% (W8A8) and 66.0% (W4A8).
- **Devices**: OnePlus 12 (Adreno 750, 16 GB) primary; OnePlus 11 (Adreno 740) 1.3-2.9x and Pixel 8 (Mali-G715) 1.4-3.6x at low-bit precisions. Perplexity example: Llama-3.2-1B 13.75 (FP16), 14.31 (W8A8), 15.34 (W4A8).
- **Authors' future work**: extend the layout proxy to CPU/GPU/NPU scoring and to contention-aware recalibration. The paper does not state a code release.

## Key technical points (ZH)

- **布局效率代理（LEP）**：数据访问成本与解包成本的加权和（权重 0.5 与 0.7，按 GPU 离线标定）；选择布局耗时 45.5-95.2 ms，穷举搜索需 1,413.6-2,747.3 s，相对最优平均仅慢 1.86-3.89%。
- **分段 KV 缓存**：短上下文（<256 token）倾向 D 连续布局，长上下文（>512）倾向 T 连续布局；10K token 运行中平均约 2.25 个分段，分段开销低于解码延迟的 1%。
- **固定上下文加速**：相对 llama.cpp，FP16 为 1.29 倍、W8A8 为 2.47 倍、W4A8 为 1.59 倍；长上下文（Llama-3.2-1B，最长 10K token）下相对 llama.cpp 在 W4A8 为 3.25 倍、W8A8 为 3.96 倍，单 token 延迟保持平稳，而基线出现周期性尖峰。
- **能耗**：相对 llama.cpp 平均单 token 能耗降低 W8A8 为 75.7%、W4A8 为 66.0%。
- **设备**：主平台 OnePlus 12（Adreno 750，16 GB）；OnePlus 11（Adreno 740）在低比特下加速 1.3-2.9 倍，Pixel 8（Mali-G715）为 1.4-3.6 倍。困惑度示例：Llama-3.2-1B 在 FP16、W8A8、W4A8 分别为 13.75、14.31、15.34。
- **作者的后续工作**：把布局代理扩展到 CPU/GPU/NPU 评分及争用感知的重新标定。论文未说明代码发布。

## Why it matters / what's new (EN)

The paper's argument is that on mobile GPUs the cost of low-bit LLM decoding lies in type conversion and KV-cache memory access rather than arithmetic, and that fixing the two together yields speedups over four widely used on-device engines. The numbers come from the authors' own measurements on three phones and are relative to baselines they ran themselves; no third-party reproduction is cited. Read as a data point on why INT8 can be slower than FP16 on Adreno-class GPUs and what a layout-aware engine recovers. To appear at ASPLOS '27 (arXiv v1); University of Georgia-led authors with Western Digital Research and University of Arizona co-authors.

## Why it matters / what's new (ZH)

论文的论点是：在移动 GPU 上，低比特 LLM 解码的代价在于类型转换与 KV 缓存的内存访问，而非算术本身；两者一并解决后，相对四个常用的端侧引擎获得加速。数据来自作者在三款手机上的自测，且相对于作者自行运行的基线，文中未引用第三方复现。可作为"为何在 Adreno 级 GPU 上 INT8 可能比 FP16 更慢、以及布局感知引擎能挽回多少"的一个数据点。论文将发表于 ASPLOS '27（arXiv v1）；作者以佐治亚大学为主，另有西部数据研究院与亚利桑那大学的合作者。

## Images

None.
