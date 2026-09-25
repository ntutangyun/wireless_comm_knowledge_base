---
id: 2026-09-25_arxiv-ramp-mixed-precision-quant-edge-cpu
date_published: 2026-09-23
date_found: 2026-09-25
type: academic-paper
technology: edge-ai
title_en: "RAMP: Robust Adaptive Mixed-Precision Quantization for Edge CPU Vision Models"
title_zh: "RAMP：面向边缘 CPU 视觉模型的鲁棒自适应混合精度量化"
url: "https://arxiv.org/abs/2609.28262"
source_quality: full
topics: [quantization, INT8, mixed-precision, ARM64, edge-CPU]
topic_primary: edge-model-efficiency
topics_secondary: [edge-ai-silicon]
novelty_score: 3
---

## Summary (EN)

Researchers at the Barcelona Supercomputing Center (BSC) and Universitat Politècnica de Catalunya present RAMP, a systematic empirical study of how to pick a per-layer INT8/FP32 mixed-precision quantization policy for deep vision models running on edge CPUs, rather than GPUs. The paper's central observation is that most mixed-precision methods target GPUs, leaving CPU deployment under-explored, and that widely used layer-sensitivity metrics fail systematically on modern architectures whose sensitivity distributions are highly skewed. The authors compare 13 such sensitivity metrics head to head — parameter-space statistics (standard deviation, coefficient of variation, SNR/SQNR), a gradient-space Hessian-trace proxy (HAWQ-V2), and output-space distributional distances (MSE, cosine dissimilarity, KL divergence, Jensen-Shannon Divergence) — across four architecturally distinct models (ResNet-18, EfficientNet-B0, ConvNeXt-Tiny, and the transformer-based TinyViT) on two real ARM64 platforms (an Apple M1 and a Raspberry Pi 5 / Cortex-A76).

The headline finding is that JSD is the only one of the three metrics carried through to end-to-end deployment (JSD, STD, HAWQ-V2) that never causes a catastrophic accuracy collapse across all 8 model-hardware configurations tested; the popular HAWQ-V2 Hessian-based proxy fails on half of them and STD (a simple weight statistic) fails on a quarter. Rather than using a fixed sensitivity-percentile threshold to decide which layers get INT8 versus which stay at FP32 — a choice the paper shows is fragile on the highly skewed sensitivity distributions of modern architectures — RAMP applies 1-D K-Means clustering (K=5) to the JSD scores and picks a Pareto-optimal policy via a knee-point method. Across the four models the resulting policies are near-lossless (within roughly 0-1.5 accuracy points of full precision, versus 28-70 point collapses for naive uniform INT8 on three of the four architectures) while delivering a mean 1.81x inference speedup, with per-configuration examples like ConvNeXt-Tiny dropping from 41.5ms to 21.8ms on the M1 and 167.9ms to 94.6ms on the Cortex-A76. A secondary finding worth flagging on its own: excluding low-sensitivity layers from quantization because their individual speedup is negligible can backfire, since it fragments the compute graph and disables operator fusion — on Cortex-A76/ConvNeXt-Tiny this pushed latency from 94.6ms back up to 115.5ms. The paper is accepted at BMVC 2026 and ships code at github.com/davidpob99/ramp-mpq.

## Summary (ZH)

巴塞罗那超算中心（BSC）与加泰罗尼亚理工大学（UPC）的研究者提出了 RAMP，这是一项系统性的实证研究，探讨如何为运行在边缘 CPU（而非 GPU）上的深度视觉模型选择逐层 INT8/FP32 混合精度量化策略。论文的核心观察是：现有混合精度方法大多面向 GPU，CPU 部署研究不足；而且广泛使用的逐层敏感度指标在敏感度分布高度偏斜的现代架构上会系统性失效。作者在四个架构迥异的模型（ResNet-18、EfficientNet-B0、ConvNeXt-Tiny，以及基于 Transformer 的 TinyViT）与两个真实的 ARM64 平台（Apple M1 与树莓派 5 / Cortex-A76）上，对 13 种此类敏感度指标进行了正面对比——包括参数空间统计量（标准差、变异系数、SNR/SQNR）、梯度空间的 Hessian 迹近似（HAWQ-V2），以及输出空间的分布距离（MSE、余弦不相似度、KL 散度、Jensen-Shannon 散度）。

论文的核心结论是：在进入端到端部署评估的三个指标（JSD、STD、HAWQ-V2）中，JSD 是唯一在全部 8 种模型-硬件组合上从未导致精度灾难性崩溃的指标；常用的基于 Hessian 的 HAWQ-V2 在一半配置上失效，简单权重统计量 STD 在四分之一配置上失效。RAMP 没有采用固定的敏感度百分位阈值来决定哪些层用 INT8、哪些层保留 FP32（论文证明这种做法在现代架构高度偏斜的敏感度分布上十分脆弱），而是对 JSD 分数进行一维 K-Means 聚类（K=5），并通过拐点法选出帕累托最优策略。在四个模型上，所得策略几乎无损（相较全精度基线仅相差约 0～1.5 个精度点，而朴素的统一 INT8 量化在四个架构中的三个上会造成 28～70 个百分点的崩溃），同时实现平均 1.81 倍的推理加速，例如 ConvNeXt-Tiny 在 M1 上从 41.5 毫秒降至 21.8 毫秒，在 Cortex-A76 上从 167.9 毫秒降至 94.6 毫秒。另一个值得单独指出的发现是：仅仅因为某些低敏感度层的单独加速收益不明显就将其排除在量化之外，反而可能适得其反——这会造成计算图碎片化并禁用算子融合，在 Cortex-A76/ConvNeXt-Tiny 组合上，这一操作使时延从 94.6 毫秒回升到了 115.5 毫秒。论文已被 BMVC 2026 接收，代码开源于 github.com/davidpob99/ramp-mpq。

## Key technical points (EN)

- Head-to-head comparison of 13 layer-sensitivity metrics for quantization policy selection, spanning parameter-space, gradient-space, and output-space families — not just a new metric proposal but a systematic failure-mode study of the existing ones.
- Of the three metrics carried through to end-to-end deployment (JSD, STD, HAWQ-V2), JSD is the only one with zero catastrophic failures across 8 model-hardware configurations; HAWQ-V2 (Hessian-trace) fails on 4 of 8, STD on 2 of 8.
- Replaces fixed sensitivity-percentile thresholds with 1-D K-Means clustering (K=5) over JSD scores plus a knee-point Pareto selection — adaptive to the skewed sensitivity distributions of modern architectures like ConvNeXt and ViTs.
- Real on-device validation on two ARM64 platforms (Apple M1, Raspberry Pi 5/Cortex-A76), not simulation: mean 1.81x speedup with near-lossless accuracy (0-1.5 point deltas) versus 28-70 point collapses for naive uniform INT8.
- Identifies a counterintuitive failure mode: excluding negligible-speedup layers from quantization can fragment the compute graph and disable operator fusion, increasing rather than decreasing latency.

## Key technical points (ZH)

- 对 13 种用于量化策略选择的逐层敏感度指标进行正面对比，涵盖参数空间、梯度空间与输出空间三大类——不只是提出一个新指标，而是对现有指标做了系统性的失效模式研究。
- 在进入端到端部署评估的三个指标（JSD、STD、HAWQ-V2）中，JSD 是唯一在全部 8 种模型-硬件组合上零灾难性失效的指标；基于 Hessian 迹的 HAWQ-V2 在 8 种中的 4 种失效，STD 在 8 种中的 2 种失效。
- 用对 JSD 分数做一维 K-Means 聚类（K=5）加拐点法帕累托选择，取代固定敏感度百分位阈值——能够适应 ConvNeXt、ViT 等现代架构高度偏斜的敏感度分布。
- 在两个真实 ARM64 平台（Apple M1、树莓派 5/Cortex-A76）上做了真机验证而非仿真：平均 1.81 倍加速，精度几乎无损（相差 0～1.5 个百分点），而朴素统一 INT8 量化会造成 28～70 个百分点的崩溃。
- 发现一个反直觉的失效模式：仅因加速收益不明显就把某些层排除出量化范围，反而可能造成计算图碎片化、禁用算子融合，使时延不降反升。

## Why it matters / what's new (EN)

RAMP joins the KB's CPU-side quantization entries (e.g. 2026-09-01 GOE on GPU-less edge CPUs, 2026-09-16 INT8 portability across CPUs/NPUs), but addresses a different question: which layer-sensitivity metric to trust when building a post-training mixed-precision policy. The paper notes that many edge deployments rely strictly on general-purpose CPUs. Its contribution is less a new quantization technique than a rigorous demonstration that the widely used Hessian-based sensitivity proxy (HAWQ-V2) misranks critical layers on modern, skewed-sensitivity architectures, collapsing accuracy in 4 of 8 CPU configurations — a caution other edge-quantization work in this KB (e.g. the 2026-09-24 PYNQ-FPGA NPU accelerator entry) does not address, since that work uses quantization-aware training rather than post-training sensitivity-driven mixed precision. (Accuracy numbers are from the SuSy synthetic-image detection dataset, not ImageNet.)

## Why it matters / what's new (ZH)

RAMP 与知识库中已有的 CPU 侧量化条目（如 2026-09-01 的 GOE 无 GPU 边缘 CPU 压缩、2026-09-16 的 INT8 跨 CPU/NPU 可移植性研究）相邻，但回答的是另一个问题：构建训练后混合精度策略时应信任哪种逐层敏感度指标。论文指出，许多边缘部署严格依赖通用 CPU。它的贡献与其说是提出了一种新的量化技术，不如说是严谨地证明了广泛使用的基于 Hessian 的敏感度指标（HAWQ-V2）在敏感度分布偏斜的现代架构上会错误排序关键层，在 8 种 CPU 配置中有 4 种出现精度崩溃——这是知识库中其他边缘量化工作（例如 2026-09-24 的 PYNQ-FPGA NPU 加速器条目）未涉及的问题，因为那项工作采用的是量化感知训练，而非训练后基于敏感度的混合精度选择。（准确率数字来自 SuSy 合成图像检测数据集，而非 ImageNet。）
