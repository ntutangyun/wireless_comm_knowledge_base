---
id: 2026-09-09_arxiv-fblayout-mobile-gpu-llm-finetuning-memory-layout
date_published: 2026-07-07
date_found: 2026-09-09
type: academic-paper
technology: edge-ai
title_en: "FBLayout: Optimizing Memory Layout for Efficient LLM Finetuning on Mobile GPUs"
title_zh: "FBLayout：面向移动 GPU 上高效大模型微调的内存布局优化"
url: "https://arxiv.org/abs/2607.21624"
source_quality: full
topics: [on-device-finetuning, mobile-GPU, texture-memory, R-Tile-layout, MNN, TFLite, TVM, MobiSys-2026]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference]
novelty_score: 4
---

## Summary (EN)

FBLayout, from researchers at the University of Macau, University of Georgia, and Hong Kong University of Science and Technology, targets on-device fine-tuning of transformer models on mobile GPUs — a privacy-preserving path to personalized AI that the paper says remains inefficient because of severe memory constraints and layout transformations required by the attention mechanism during training. It identifies a specific architectural conflict: existing mobile training frameworks either use a single unified tensor layout for both forward and backward passes, which fragments memory access and hurts GPU utilization during backpropagation, or perform explicit layout conversions between passes, which adds significant transformation overhead. FBLayout resolves this with three co-designed mechanisms exploiting mobile GPUs' 2.5D texture-memory architecture: a unified "R-Tile" layout for multi-dimensional reductions that works across both forward and backward passes, tile-based index transformation that eliminates physical data movement instead of converting layouts explicitly, and activation-guided layout selection that propagates efficient layouts through the network.

The paper evaluates seven transformer models spanning text (Llama3.2-1B, Qwen2.5-1.5B, Gemma2-2B decoder-only; BERT-Large encoder-only), image (ViT-Large; Stable Diffusion v1.5), and audio (Whisper-Large) modalities, on three commercial phones with different mobile GPU architectures: a OnePlus Ace5 Pro (Snapdragon 8 Elite / Adreno 830), a OnePlus Ace10 Pro (Snapdragon 8 Gen 1 / Adreno 730), and a OnePlus Ace5 Ultra (Dimensity 9400+ / Mali Immortalis-G925). Against MNN, TFLite, and TVM baselines, FBLayout reports an overall 2.2-5.7x speedup over MNN, TFLite, and TVM across all seven models, broken out by architecture as decoder-only 3.9-4.1x / 4.3-4.9x / 5.4-5.7x, encoder-only 2.2-3.2x / 2.6-4.6x / 2.9-5.2x, and encoder-decoder 2.3-3.5x / 3.5-4.5x / 4.0-4.7x over MNN / TFLite / TVM respectively, alongside 3.5x fewer global-memory accesses, 4.2x fewer cache misses, 3.5-6.3x lower total energy consumption, and a compilation time of 6.1 seconds versus 723-4800+ seconds for the baseline frameworks. The paper was accepted at MobiSys 2026 (Cambridge, UK, 21-25 June 2026).

## Summary (ZH)

FBLayout 由澳门大学、佐治亚大学与香港科技大学的研究者提出，面向移动 GPU 上 Transformer 模型的端侧微调——论文称这是一条兼顾隐私的个性化 AI 路径，但因训练过程中注意力机制带来的严苛内存限制与布局转换开销，长期以来效率低下。论文指出了一个具体的架构性矛盾：现有的移动训练框架要么在前向与反向传播中使用同一套统一张量布局，导致反向传播时内存访问碎片化、GPU 利用率下降；要么在前向与反向之间执行显式的布局转换，从而带来显著的转换开销。FBLayout 通过三项协同设计的机制，利用移动 GPU 2.5D 纹理内存架构解决了这一矛盾：适用于前向与反向传播的统一「R-Tile」多维归约布局；以逐块索引变换取代物理数据搬移的转换方式；以及基于激活值引导、在网络中传播高效布局的选择机制。

论文在覆盖文本（Llama3.2-1B、Qwen2.5-1.5B、Gemma2-2B 均为纯解码器架构；BERT-Large 为纯编码器架构）、图像（ViT-Large；Stable Diffusion v1.5）、音频（Whisper-Large）三种模态的七个 Transformer 模型上进行评测，测试平台为三款搭载不同移动 GPU 架构的商用手机：一加 Ace5 Pro（骁龙 8 Elite / Adreno 830）、一加 Ace10 Pro（骁龙 8 Gen 1 / Adreno 730）、一加 Ace5 Ultra（天玑 9400+ / Mali Immortalis-G925）。相较 MNN、TFLite、TVM 三个基线框架，FBLayout 在全部七个模型上整体实现 2.2–5.7 倍加速；按架构细分（依次对比 MNN / TFLite / TVM）：纯解码器为 3.9–4.1 倍 / 4.3–4.9 倍 / 5.4–5.7 倍，纯编码器为 2.2–3.2 倍 / 2.6–4.6 倍 / 2.9–5.2 倍，编码器—解码器为 2.3–3.5 倍 / 3.5–4.5 倍 / 4.0–4.7 倍，同时全局内存访问减少 3.5 倍，缓存未命中减少 4.2 倍，总能耗降低 3.5–6.3 倍，编译时间仅 6.1 秒（对比基线框架的 723–4800 秒以上）。本文已被 MobiSys 2026（2026 年 6 月 21–25 日，英国剑桥）录用。

## Key technical points (EN)

- **Problem**: mobile-GPU on-device fine-tuning is memory-bandwidth-bound because existing frameworks either use one unified layout for forward/backward passes (fragmented memory access, poor GPU utilization in backprop) or convert layouts explicitly between passes (transformation overhead).
- **Three mechanisms**: (1) unified R-Tile layout for multi-dimensional reductions exploiting 2.5D texture-memory spatial locality, valid across both passes; (2) tile-based index transformation that eliminates physical data movement instead of explicit conversion; (3) activation-guided layout selection propagating efficient layouts globally.
- **Seven models / three modalities**: Llama3.2-1B, Qwen2.5-1.5B, Gemma2-2B, BERT-Large (text); ViT-Large, Stable Diffusion v1.5 (image); Whisper-Large (audio).
- **Three test phones**: OnePlus Ace5 Pro (Snapdragon 8 Elite / Adreno 830, 16GB), OnePlus Ace10 Pro (Snapdragon 8 Gen 1 / Adreno 730, 12GB), OnePlus Ace5 Ultra (Dimensity 9400+ / Mali Immortalis-G925, 16GB).
- **Speedup vs. baselines (all 7 models)**: 2.2-5.7x over MNN, TFLite, and TVM overall; by architecture, over MNN / TFLite / TVM respectively — decoder-only 3.9-4.1x / 4.3-4.9x / 5.4-5.7x, encoder-only 2.2-3.2x / 2.6-4.6x / 2.9-5.2x, encoder-decoder 2.3-3.5x / 3.5-4.5x / 4.0-4.7x.
- **Memory / energy**: 3.5x fewer global-memory accesses, 4.2x fewer cache misses vs. baselines; 3.5-6.3x lower total energy.
- **Compilation time**: 6.1 seconds vs. 723-4800+ seconds for MNN/TFLite/TVM.
- **Venue**: MobiSys 2026, Cambridge UK, 21-25 June 2026.

## Key technical points (ZH)

- **问题**：移动 GPU 端侧微调受限于内存带宽——现有框架要么在前向/反向传播中使用同一统一布局（内存访问碎片化、反向传播 GPU 利用率低），要么在前向与反向之间显式转换布局（带来转换开销）。
- **三项机制**：①利用 2.5D 纹理内存空间局部性的统一 R-Tile 多维归约布局，前向与反向均适用；②以逐块索引变换取代显式布局转换，消除物理数据搬移；③基于激活值引导、在全网络传播高效布局的选择机制。
- **七个模型/三种模态**：Llama3.2-1B、Qwen2.5-1.5B、Gemma2-2B、BERT-Large（文本）；ViT-Large、Stable Diffusion v1.5（图像）；Whisper-Large（音频）。
- **三款测试手机**：一加 Ace5 Pro（骁龙 8 Elite / Adreno 830，16GB）、一加 Ace10 Pro（骁龙 8 Gen 1 / Adreno 730，12GB）、一加 Ace5 Ultra（天玑 9400+ / Mali Immortalis-G925，16GB）。
- **相较基线的加速比（全部 7 个模型）**：整体相对 MNN、TFLite、TVM 为 2.2–5.7 倍；按架构细分（依次对比 MNN / TFLite / TVM）：纯解码器 3.9–4.1 倍 / 4.3–4.9 倍 / 5.4–5.7 倍，纯编码器 2.2–3.2 倍 / 2.6–4.6 倍 / 2.9–5.2 倍，编码器—解码器 2.3–3.5 倍 / 3.5–4.5 倍 / 4.0–4.7 倍。
- **内存/能耗**：全局内存访问减少 3.5 倍，缓存未命中减少 4.2 倍；总能耗降低 3.5–6.3 倍。
- **编译时间**：6.1 秒，对比 MNN/TFLite/TVM 的 723–4800 秒以上。
- **会议**：MobiSys 2026，英国剑桥，2026 年 6 月 21–25 日。

## Why it matters / what's new (EN)

This KB's edge-model-efficiency and on-device-inference bins have covered *inference*-side memory and compute techniques extensively; this is the first entry specifically about *on-device fine-tuning* memory-layout efficiency, complementing rather than duplicating `2026-09-07_arxiv-kvswap-disk-aware-kv-cache-on-device` (inference-time KV-cache offloading). Its interest is that the win comes from tensor layout rather than from the model or the kernel: one unified R-Tile layout serves both passes, so the forward/backward layout conflict that costs baselines 3.5x more global-memory traffic simply does not arise.

## Why it matters / what's new (ZH)

本知识库的 edge-model-efficiency 与 on-device-inference 分类此前已大量收录*推理*侧的内存与算力优化技术；本条目是首个专门针对*端侧微调*内存布局效率的条目，与 `2026-09-07_arxiv-kvswap-disk-aware-kv-cache-on-device`（推理时 KV 缓存卸载）形成互补而非重复。其看点在于性能提升来自张量布局本身，而非模型或算子内核：一套统一的 R-Tile 布局同时服务前向与反向传播，因而基线框架中那种导致全局内存访问量增加 3.5 倍的前向/反向布局冲突根本不会出现。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
