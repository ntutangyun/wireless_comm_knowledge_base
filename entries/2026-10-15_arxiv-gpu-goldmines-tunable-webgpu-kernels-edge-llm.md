---
id: 2026-10-15_arxiv-gpu-goldmines-tunable-webgpu-kernels-edge-llm
date_published: 2026-10-12
date_found: 2026-10-15
technology: edge-ai
type: academic-paper
title_en: "GPU Goldmines: a framework for specifying and autotuning WebGPU kernels for edge LLM inference"
title_zh: "GPU Goldmines：用于边缘 LLM 推理的 WebGPU 内核描述与自动调优框架"
url: "https://arxiv.org/abs/2610.17321"
source_quality: abstract_only
topics: [WebGPU, kernels, autotuning, LLM-inference, browser, matrix-multiplication, flash-attention]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

GPU Goldmines is a framework for specifying, executing and tuning WebGPU kernels for edge LLM inference. The authors note that WebGPU offers cross-platform portability and browser accessibility, but that these same strengths make high performance hard to achieve, since an implementation that performs well in one context may not perform well in another.

The framework is instantiated with kernels for key LLM building blocks: matrix multiplication, matrix-vector multiplication and flash attention. The authors characterize performance across diverse devices, shapes and browsers, and use the resulting database to accelerate subsequent autotuning and configuration selection.

On shapes drawn from Llama and Qwen models, the matrix multiplication kernels outperform ONNX Runtime and llama.cpp WebGPU kernels by 7.0x and 1.41x geometric mean respectively, and deliver 1.48x end-to-end improvement in the prefill stage of llama.cpp for chat workloads.

## Summary (ZH)

GPU Goldmines 是一个用于边缘 LLM 推理的 WebGPU 内核描述、执行与调优框架。作者指出，WebGPU 提供跨平台可移植性与浏览器可访问性，但这些优势也让高性能难以实现，因为在一种环境中表现良好的实现在另一种环境中未必同样好。

该框架实例化了关键 LLM 构件的内核：矩阵乘法、矩阵向量乘法与 flash attention。作者在多种设备、形状与浏览器上刻画性能，并利用得到的数据库加速后续的自动调优与配置选择。

在取自 Llama 与 Qwen 模型的形状上，其矩阵乘法内核相对 ONNX Runtime 与 llama.cpp 的 WebGPU 内核，几何平均分别快 7.0 倍与 1.41 倍，并在聊天负载下为 llama.cpp 预填充阶段带来 1.48 倍的端到端提升。

## Key technical points (EN)

- Framework to specify, execute and tune WebGPU kernels; targets portability across devices and browsers.
- Kernels: matrix multiplication, matrix-vector multiplication, flash attention.
- Performance database across devices, shapes and browsers accelerates autotuning and configuration selection.
- Results on Llama/Qwen shapes: matmul kernels 7.0x (vs ONNX Runtime) and 1.41x (vs llama.cpp WebGPU kernels) geometric mean; 1.48x end-to-end prefill improvement for chat workloads.

## Key technical points (ZH)

- 用于描述、执行与调优 WebGPU 内核的框架；目标是跨设备与浏览器的可移植性。
- 内核：矩阵乘法、矩阵向量乘法、flash attention。
- 跨设备、形状与浏览器的性能数据库加速自动调优与配置选择。
- Llama/Qwen 形状上的结果：矩阵乘法内核几何平均快 7.0 倍（对 ONNX Runtime）与 1.41 倍（对 llama.cpp WebGPU 内核）；聊天负载预填充端到端提升 1.48 倍。

## Why it matters / what's new (EN)

The work targets WebGPU-based edge LLM inference on consumer GPUs, where the paper's point is that performance depends on device, shape and browser. Speed-ups are the authors' own and relative to the baselines they chose; this record is based on the abstract only.

## Why it matters / what's new (ZH)

该工作面向消费级 GPU 上基于 WebGPU 的边缘 LLM 推理，论文的要点是性能取决于设备、形状与浏览器。加速比为作者自述且相对于其所选基线；本条目仅基于摘要。

## Images

*(No redistributable images for this entry.)*
