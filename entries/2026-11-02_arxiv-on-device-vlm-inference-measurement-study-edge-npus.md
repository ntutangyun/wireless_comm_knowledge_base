---
id: 2026-11-02_arxiv-on-device-vlm-inference-measurement-study-edge-npus
date_published: 2026-10-29
date_found: 2026-11-02
technology: edge-ai
type: academic-paper
title_en: "How Far Are We From On-Device VLM Inference? A measurement study on edge NPUs"
title_zh: "端侧 VLM 推理还有多远？边缘 NPU 上的测量研究"
url: "https://arxiv.org/abs/2610.40039"
source_quality: full
topics: [VLM, edge-NPU, Hexagon, RKNPU, softmax, linear-attention, thermal-throttling, measurement-study]
topic_primary: on-device-inference
topics_secondary: [edge-ai-silicon, edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

On-device vision-language model (VLM) deployment has attracted optimisations in model architecture, inference runtime and hardware acceleration, but the paper states that cross-layer coordination of VLM execution on edge NPUs remains largely underexplored. It reports a measurement study of six VLMs (Qwen3.5-2B, Gemma4-E2B, InternVL3.5-1B, SmolVLM2-500M, NEO1.5-2B, Mono-InternVL-2B), three edge platforms (OnePlus 13T with Snapdragon SM8750 / Hexagon HTP v79, the Qualcomm QCS8550-based Rhino Pi-X1 with Hexagon v73, and the Rockchip RK3588-based Orange Pi 5 Plus with RKNPU, all 16 GB) and ten multimodal benchmarks (47,374 labelled questions from lmms-eval). The runtimes are MNN 3.6.1 for CPU/GPU baselines, GenieX 0.7.0 with ggml-hexagon for Hexagon, and RKLLM 1.3.1 for RKNPU.

The authors take a kernel-centric view and organise the study around three research questions: which kernel-level factors govern NPU efficiency in vision encoding and prefill, which determine whether CPU or NPU is faster in autoregressive decoding, and which input resolutions give large accuracy gains for modest time-to-first-token cost. At the system level they report that memory capacity is not the barrier on these devices, whereas end-to-end latency stays prohibitive and sustained computation causes thermal throttling that lowers NPU frequency.

The stated findings are that softmax, not GEMM, dominates attention cost, and even lookup-table softmax optimisations do not remove pipeline bubbles that leave NPU matrix units underused; that theoretical speedups from linear attention (Gated DeltaNet) disappear on real NPUs because of tensor-rearrangement overhead; and that no backend wins decoding everywhere, because attention-tensor-shaped parallelism shifts the CPU-NPU balance. They also identify task-specific "Sweet Resolutions" with accuracy gains at modest latency cost, and close with recommendations for hardware architects, runtime developers and model designers. The limitations section says generalisation to radically different NPU architectures needs further validation.

## Summary (ZH)

端侧视觉语言模型（VLM）部署在模型架构、推理运行时和硬件加速三个层面都有优化工作，但论文指出，边缘 NPU 上 VLM 执行的跨层协同仍然研究不足。论文报告了一项测量研究：六个 VLM（Qwen3.5-2B、Gemma4-E2B、InternVL3.5-1B、SmolVLM2-500M、NEO1.5-2B、Mono-InternVL-2B）、三个边缘平台（搭载骁龙 SM8750 / Hexagon HTP v79 的一加 13T，基于高通 QCS8550 / Hexagon v73 的 Rhino Pi-X1，以及基于 RK3588 / RKNPU 的 Orange Pi 5 Plus，内存均为 16 GB）和十个多模态基准（来自 lmms-eval 的 47,374 道标注题）。运行时方面，CPU/GPU 基线使用 MNN 3.6.1，Hexagon 使用 GenieX 0.7.0 与 ggml-hexagon，RKNPU 使用 RKLLM 1.3.1。

作者采用以内核为中心的视角，围绕三个研究问题展开：哪些内核层因素决定视觉编码与预填充阶段的 NPU 效率；哪些因素决定自回归解码时 CPU 还是 NPU 更快；哪些输入分辨率能以较小的首 token 时延代价换取较大的精度提升。在系统层面，论文报告这些设备上内存容量并非瓶颈，端到端时延仍然过高，持续计算还会引发热降频、降低 NPU 频率。

论文给出的发现包括：注意力开销中占主导的是 softmax 而不是 GEMM，即便采用查表式 softmax 优化也无法消除使 NPU 矩阵单元利用不足的流水线气泡；线性注意力（Gated DeltaNet）的理论加速在真实 NPU 上因张量重排开销而消失；没有任何一种后端在解码上全面占优，注意力张量形状决定的并行度会改变 CPU 与 NPU 的相对表现。论文还发现了与任务相关的"最佳分辨率（Sweet Resolution）"，以较小时延代价获得精度提升，并面向硬件架构师、运行时开发者和模型设计者给出建议。局限性部分指出，推广到差异很大的 NPU 架构还需进一步验证。

## Key technical points (EN)

- **Method**: kernel-level profiling plus end-to-end latency, thermal traces and accuracy assessment, on six VLMs, three NPU platforms and ten benchmarks.
- **Models cover** encoder-based and encoder-free designs, full and linear attention, and fixed, dynamic and tile-based image preprocessing.
- **Finding 1**: softmax dominates attention cost on NPUs and causes pipeline bubbles that underutilise matrix units.
- **Finding 2**: linear-attention speedups do not materialise on real NPUs because of tensor-rearrangement overhead.
- **Finding 3**: CPU-versus-NPU decoding performance depends on attention-tensor parallelism; no backend dominates.
- **Deployment guidance**: task-specific Sweet Resolutions trade modest time-to-first-token for accuracy.
- **Caveat**: results are on Hexagon and RKNPU stacks with the named runtimes; other NPU architectures are not covered.

## Key technical points (ZH)

- **方法**：内核级剖析，结合端到端时延、热曲线与精度评估，覆盖六个 VLM、三个 NPU 平台和十个基准。
- **模型覆盖**：带编码器与无编码器设计、全注意力与线性注意力，以及固定、动态和分块三种图像预处理方式。
- **发现一**：NPU 上注意力开销以 softmax 为主，并造成使矩阵单元利用不足的流水线气泡。
- **发现二**：线性注意力的加速在真实 NPU 上因张量重排开销而无法兑现。
- **发现三**：解码时 CPU 与 NPU 谁更快取决于注意力张量的并行度，没有后端全面占优。
- **部署建议**：与任务相关的最佳分辨率可用较小的首 token 时延换取精度。
- **说明**：结果基于 Hexagon 与 RKNPU 栈及所列运行时，其他 NPU 架构未涵盖。

## Why it matters / what's new (EN)

The paper's contribution is measurement rather than a new method: it tests widely held assumptions (that lookup-table softmax and linear attention help on NPUs) against real device kernels and reports where they fail. Its platform list overlaps the phone and embedded Qualcomm parts that recent on-device LLM entries in this KB use, so it can be read as the VLM-side counterpart of those runtime studies. The vendor-neutral value is the set of kernel-level explanations for why NPU TOPS figures do not translate into VLM latency.

## Why it matters / what's new (ZH)

论文的贡献在于测量而非新方法：它用真实设备内核检验了业界普遍的假设（查表式 softmax 与线性注意力对 NPU 有益），并报告这些假设在哪些情况下不成立。其平台与本知识库近期端侧 LLM 条目所用的高通手机与嵌入式芯片重合，可视为这些运行时研究在 VLM 方面的对应工作。其与厂商无关的价值在于：从内核层面解释了为何 NPU 的 TOPS 数字无法直接转化为 VLM 时延。

## Images

*(No redistributable images for this entry.)*
