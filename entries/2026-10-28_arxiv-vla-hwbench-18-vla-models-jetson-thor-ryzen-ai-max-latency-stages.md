---
id: 2026-10-28_arxiv-vla-hwbench-18-vla-models-jetson-thor-ryzen-ai-max-latency-stages
date_published: 2026-10-26
date_found: 2026-10-28
technology: edge-ai
type: academic-paper
title_en: "VLA-HWBench: where inference time goes when 18 open VLA models run on Jetson AGX Thor and Ryzen AI Max+"
title_zh: "VLA-HWBench：18 个开源 VLA 模型在 Jetson AGX Thor 与 Ryzen AI Max+ 上的推理时间去向"
url: "https://arxiv.org/abs/2610.34717"
source_quality: full
topics: [VLA, robotics, benchmark, Jetson-Thor, Ryzen-AI-Max, kernel-fusion, flow-matching, latency-breakdown]
topic_primary: on-device-inference
topics_secondary: [edge-ai-silicon, edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

Vision-language-action (VLA) models increasingly run on edge hardware aboard robots, where inference latency constrains closed-loop control. VLA-HWBench measures 18 widely used open VLA models on two edge platforms, an NVIDIA Jetson AGX Thor (Blackwell GPU, 14 Neoverse-V3AE cores) and an AMD Ryzen AI Max+ PRO 395 (RDNA3.5 GPU, 16 Zen 5 cores), with 19 reference configurations on the Jetson. Each inference call is split into seven timed stages, from CPU preprocessing and host-to-device copy through vision encoding, prefill and action generation to postprocessing and residual overhead, and the benchmark applies available optimisations (torch.compile, TensorRT, a kernel-fusion backend, low-bit weights) to the same weights to compare gains stage by stage.

Three findings are reported. First, the action-generation strategy matters more than parameter count: it is the largest stage in 14 of 19 Jetson configurations, end-to-end latency ranges from 77 ms to 6.3 s on the Jetson (82x) and 114 ms to 17.9 s on the AMD machine (157x), and parameter count explains at most 15% of the variance. Models producing long action chunks in a few flow-matching steps keep up with a 20 Hz (50 ms) control period; token-by-token decoding does not. Second, kernel fusion with 4-bit weights helps most, running pi0.5 and GR00T N1.7 2.6x to 2.9x faster than PyTorch with torch.compile, but only for these two models and only on the Jetson. Third, after optimisation the time shifts to the stages that shrank least: CPU preprocessing grows from 12% to 39% of a GR00T N1.7 call. Memory bandwidth limits only the low-token stages such as denoising steps; software limits the rest (after optimisation, on the Jetson).

## Summary (ZH)

视觉-语言-动作（VLA）模型越来越多地运行在机器人上的边缘硬件中，推理时延制约闭环控制。VLA-HWBench 在两种边缘平台上测量 18 个广泛使用的开源 VLA 模型：NVIDIA Jetson AGX Thor（Blackwell GPU，14 个 Neoverse-V3AE 核）和 AMD Ryzen AI Max+ PRO 395（RDNA3.5 GPU，16 个 Zen 5 核），其中 Jetson 上有 19 种参考配置。每次推理调用被划分为七个计时阶段，从 CPU 预处理、主机到设备拷贝，经视觉编码、预填充、动作生成，到后处理和残余开销；基准还在相同权重上应用可用的优化（torch.compile、TensorRT、算子融合后端、低比特权重），逐阶段比较收益。

论文给出三点发现。其一，动作生成策略比参数量更重要：它在 19 种 Jetson 配置中的 14 种里是最大阶段，端到端时延在 Jetson 上从 77 ms 到 6.3 s（相差 82 倍），在 AMD 机器上从 114 ms 到 17.9 s（相差 157 倍），参数量最多只能解释 15% 的方差。用少量流匹配步骤生成长动作块的模型能跟上 20 Hz（50 ms）控制周期，逐 token 解码的模型则不能。其二，算子融合加 4 比特权重收益最大，使 pi0.5 和 GR00T N1.7 比使用 torch.compile 的 PyTorch 快 2.6 至 2.9 倍，但仅限这两个模型且仅限 Jetson。其三，优化之后时间转移到缩短最少的阶段：CPU 预处理在 GR00T N1.7 调用中的占比从 12% 升至 39%。内存带宽只限制去噪步骤等低 token 阶段，其余阶段受软件限制（优化后、在 Jetson 上）。

## Key technical points (EN)

- Control-rate yardstick: the LIBERO simulator runs its controller at 20 Hz, so a model keeps up only if latency per action chunk is under about 50 ms times the chunk length.
- The two platforms differ by 4.4x in peak 16-bit throughput, yet the paper reports that the ranking of action-generation strategies carries across both.
- The fused 4-bit backend exists only for pi0.5 and GR00T N1.7 and only on the Jetson, so its 2.6–2.9x gain is not available on the AMD platform.
- The study measures latency per stage, not task success or energy; task success on LIBERO is taken from each model's own release.

## Key technical points (ZH)

- 控制频率基准：LIBERO 仿真器的控制器运行在 20 Hz，因此只有当每个动作块的时延低于约 50 ms 乘以块长度时，模型才能跟上。
- 两个平台的 16 位峰值算力相差 4.4 倍，但论文报告动作生成策略的排序在两者上一致。
- 融合的 4 比特后端仅覆盖 pi0.5 和 GR00T N1.7 且仅限 Jetson，因此其 2.6–2.9 倍增益在 AMD 平台上不可用。
- 研究测量的是分阶段时延，而非任务成功率或能耗；LIBERO 上的任务成功率沿用各模型自身发布的结果。

## Why it matters / what's new (EN)

This gives robot and embedded-AI builders a stage-level map for choosing models and hardware: pick a model with a short action-generation loop before buying more compute, and expect CPU preprocessing and Python overhead to become the next bottleneck once kernels are fused. The measurements are on two specific dev platforms with released software, so absolute numbers will move with software versions.

## Why it matters / what's new (ZH)

这为机器人和嵌入式 AI 开发者提供了按阶段选择模型与硬件的参考：在增加算力之前，先选择动作生成循环较短的模型，并预期在算子融合之后，CPU 预处理和 Python 开销会成为下一个瓶颈。测量基于两个特定开发平台和已发布软件，绝对数值会随软件版本变化。

## Images

*(No redistributable images for this entry.)*
