---
id: 2026-10-28_arxiv-sparta-sparse-ternary-llm-accelerator-long-context-edge-kv-traffic
date_published: 2026-10-26
date_found: 2026-10-28
technology: edge-ai
type: academic-paper
title_en: "SPARTA: a sparse ternary LLM accelerator that cuts KV-cache traffic 4.1x to 4.8x for long-context edge inference"
title_zh: "SPARTA：面向长上下文边缘推理、将 KV 缓存流量降低 4.1 至 4.8 倍的稀疏三值 LLM 加速器"
url: "https://arxiv.org/abs/2610.34824"
source_quality: full
topics: [ternary-LLM, accelerator, sparse-attention, KV-cache, ASIC, bit-serial, 28nm, long-context]
topic_primary: edge-ai-silicon
topics_secondary: [edge-model-efficiency, on-device-inference]
novelty_score: 3
---

## Summary (EN)

With 1.58-bit ternary weights shrinking model storage, long-context edge inference becomes limited by KV-cache traffic and attention. SPARTA is a proposed accelerator that combines three ideas: a phase-aware sparse dataflow that treats the compute-bound prefill and the memory-bound decode differently; a unified compute fabric that maps ternary sparse matrix products and bit-serial attention onto the same processing elements, exploiting zero-weight and zero-bit sparsity; and a two-stage adaptive attention engine that selects pages with a Top-k step to cut K-cache reads and then prunes tokens with a Top-p step to cut V-cache reads. A bitonic Top-k selector is part of the hardware.

The design is evaluated by hardware simulation: SystemVerilog synthesised in a 28 nm flow at 1 GHz (baselines are modelled at 1 GHz except TENET at 500 MHz), on six ternary LLMs from two families (BitCPM 1B/3B/8B and TernaryBonsai 1.7B/4B/8B), with perplexity on WikiText-2 and PG19 plus task scores for quality. SPARTA reduces KV traffic 4.1x to 4.8x versus full attention and 1.3x to 1.5x versus a state-of-the-art sparse-attention scheme, with task-dependent quality loss. Against an NVIDIA Jetson AGX Orin it reports 3.9x higher generation throughput and 8.3x higher end-to-end energy efficiency on average, and against an AMD Ryzen 7 9700X 5.0x and 81.7x. Versus the ASIC/FPGA designs FIGLUT, TeLLMe and MCBP it reports 1.6x to 12.0x throughput, 2.0x to 4.2x energy efficiency and 1.3x to 51.4x area efficiency.

## Summary (ZH)

1.58 比特三值权重缩小了模型存储，长上下文边缘推理于是受限于 KV 缓存流量和注意力。SPARTA 是一种提出的加速器，结合三个思路：区分计算受限的预填充与内存受限的解码的相位感知稀疏数据流；将三值稀疏矩阵乘与比特串行注意力映射到同一批处理单元、利用零权重与零比特稀疏性的统一计算结构；以及两级自适应注意力引擎，先用 Top-k 选页以减少 K 缓存读取，再用 Top-p 做 token 剪枝以减少 V 缓存读取。硬件中包含双调 Top-k 选择器。

设计通过硬件仿真评测：SystemVerilog 在 28 nm 流程下综合，频率 1 GHz（基线均按 1 GHz 建模，TENET 为 500 MHz），使用两个系列共六个三值 LLM（BitCPM 1B/3B/8B 和 TernaryBonsai 1.7B/4B/8B），以 WikiText-2 和 PG19 上的困惑度及任务得分衡量质量。SPARTA 相对完整注意力将 KV 流量降低 4.1 至 4.8 倍，相对最先进的稀疏注意力方案降低 1.3 至 1.5 倍，质量损失取决于任务。相对 NVIDIA Jetson AGX Orin，平均生成吞吐高 3.9 倍、端到端能效高 8.3 倍；相对 AMD Ryzen 7 9700X 分别为 5.0 倍和 81.7 倍。相对 ASIC/FPGA 设计 FIGLUT、TeLLMe 和 MCBP，吞吐高 1.6 至 12.0 倍，能效高 2.0 至 4.2 倍，面积效率高 1.3 至 51.4 倍。

## Key technical points (EN)

- Page-level Top-k reduces K-cache accesses and token-level Top-p further reduces V-cache traffic.
- Sharing processing elements between ternary SpMM/SpMV and bit-serial attention avoids the separate datapaths of earlier ternary accelerators.
- Results are from synthesis and simulation, not fabricated silicon; the GPU and CPU comparison points are a different class of platform, so the large energy-efficiency ratios mix architectural gains with specialisation and technology differences.
- Quality loss from KV pruning is task-dependent and not zero.

## Key technical points (ZH)

- 页级 Top-k 减少 K 缓存访问，token 级 Top-p 进一步减少 V 缓存流量。
- 让三值 SpMM/SpMV 与比特串行注意力共享处理单元，避免了早期三值加速器使用独立数据通路的做法。
- 结果来自综合与仿真，并非流片芯片；GPU 和 CPU 对比对象属于不同类别的平台，因此很大的能效比混合了架构收益与专用化、工艺差异。
- KV 剪枝带来的质量损失取决于任务，并非为零。

## Why it matters / what's new (EN)

Ternary LLMs make weights cheap enough for small devices, and this paper argues that the next limit is KV traffic at long context, which a dedicated datapath can attack. For readers following edge AI silicon, it is a design-space data point rather than a product: it is a 28 nm synthesis study with no fabricated chip, and the 8.3x to 81.7x efficiency ratios compare a specialised accelerator with general-purpose hardware.

## Why it matters / what's new (ZH)

三值 LLM 让权重足够便宜，可放入小型设备；本文认为下一个限制是长上下文下的 KV 流量，专用数据通路可以对付它。对关注边缘 AI 芯片的读者而言，它是一个设计空间数据点而非产品：这是 28 nm 综合研究，没有流片芯片，8.3 至 81.7 倍的能效比是专用加速器与通用硬件的对比。

## Images

*(No redistributable images for this entry.)*
