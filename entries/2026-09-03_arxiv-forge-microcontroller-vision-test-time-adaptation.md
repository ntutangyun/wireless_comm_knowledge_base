---
id: 2026-09-03_arxiv-forge-microcontroller-vision-test-time-adaptation
date_published: 2026-09-01
date_found: 2026-09-03
type: academic-paper
technology: edge-ai
title_en: "FORGE: test-time adaptation for integer-only vision models on microcontrollers"
title_zh: "FORGE：面向微控制器纯整数视觉模型的测试时自适应方法"
url: "https://arxiv.org/abs/2609.01683"
source_quality: full
topics: [test-time-adaptation, integer-only-inference, microcontroller, batch-normalization-folding, TinyML, distribution-shift]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

Vision models deployed on microcontrollers (MCUs) are quantized to integer-only arithmetic and run in inference-only runtimes that strip out the machinery backpropagation would need — which means they cannot use the standard tool (gradient-based test-time adaptation) for coping with distribution shift the model meets in the field, such as sensor noise, blur, or lighting changes. Existing forward-only (gradient-free) test-time adaptation (TTA) methods don't actually solve this either: they either only run on server- or edge-GPU-class models rather than true microcontroller integer execution, or they depend on batch-normalization (BN) layers that integer deployment has already fused away.

FORGE (SEECS, NUST and FAST-NUCES, Islamabad; paper title: "FORGE: Forward-Only Test-Time Adaptation for Integer-Only Vision Models on Microcontrollers") is built to work on models as they actually ship: deployed, BN-folded, integer-only convolutional networks. The authors' key observation is that folding BN into the preceding convolution — a mandatory step for integer inference — destroys the very statistics that normalization-based adaptation methods rely on. FORGE restores adaptability without those statistics by re-normalizing each folded convolution's per-channel output back toward its clean training-time statistics, using only forward-pass estimates — no gradients, no BN layers required.

Validated on an ESP32-S3 MCU with a Nordic PPK2 power profiler, FORGE recovers +20.9 accuracy points on CIFAR-10-C (int8, from 50.4% baseline to 71.3%), +14.5 points on CIFAR-100-C, and +11.0 points on Tiny-ImageNet-C, at a cost of 8.3 mJ (6.8% of total inference energy) and 21.9 ms execution time on the SIMD-optimized deployed model. Against baselines that are either undeployable in this setting or weaker: TENT (gradient-based) recovers +24.9 points but cannot run on folded int8 models at all; BN-adapt (forward-only) recovers +20.6 points but needs BN layers integer deployment has removed; CoTTA (continual, gradient-based) recovers +13.9 points and is likewise undeployable; a naive scale-adaptation baseline actually loses 0.4 points.

## Summary (ZH)

部署在微控制器（MCU）上的视觉模型会被量化为纯整数运算，并运行在仅支持推理的运行时中——这类运行时会剥离反向传播所需的机制，因此无法使用应对现场分布偏移（如传感器噪声、模糊、光照变化）的标准工具（基于梯度的测试时自适应）。现有的前向式（无梯度）测试时自适应（TTA）方法也未能真正解决这一问题：它们要么只能在服务器级或边缘 GPU 级模型上运行，而非真正的微控制器整数执行环境；要么依赖批归一化（BN）层，而整数部署已将其融合消除。

FORGE（巴基斯坦伊斯兰堡 NUST 下属 SEECS 学院与 FAST-NUCES）针对模型实际出货的形态设计：已部署、已完成 BN 融合的纯整数卷积网络。作者的关键观察是：将 BN 融合进前一层卷积——这是整数推理的必要步骤——恰恰破坏了基于归一化的自适应方法所依赖的统计量。FORGE 在没有这些统计量的情况下恢复了自适应能力：它仅利用前向传播估计值，将每个已融合卷积层的逐通道输出重新归一化，使其趋近于干净训练时的统计特性——无需梯度，也无需 BN 层。

该方法在配备 Nordic PPK2 功耗分析仪的 ESP32-S3 微控制器上得到验证：在 CIFAR-10-C（int8，基线 50.4% 提升至 71.3%）上恢复 +20.9 个准确率百分点，在 CIFAR-100-C 上恢复 +14.5 个百分点，在 Tiny-ImageNet-C 上恢复 +11.0 个百分点，代价是在 SIMD 优化后的已部署模型上耗费 8.3 mJ（占总推理能耗的 6.8%）与 21.9 ms 执行时间。与基线方法相比：TENT（基于梯度）可恢复 +24.9 个百分点，但完全无法在已融合的 int8 模型上运行；BN-adapt（前向式）可恢复 +20.6 个百分点，但需要整数部署已移除的 BN 层；CoTTA（持续、基于梯度）可恢复 +13.9 个百分点，同样无法部署；一种朴素的尺度自适应基线方法实际上还损失了 0.4 个百分点。

## Key technical points (EN)

- **Problem**: integer-only, BN-folded MCU vision models cannot use gradient-based TTA (no backprop machinery) or BN-statistics-based forward TTA (BN layers already fused away).
- **Key insight**: BN folding into the preceding convolution destroys the normalization statistics that forward-only TTA methods normally exploit.
- **Mechanism**: per-channel re-normalization of each folded convolution's output toward clean training-time statistics, estimated purely from forward passes.
- **Hardware**: ESP32-S3 MCU, power measured with a Nordic PPK2 profiler.
- **Cost**: 8.3 mJ per adaptation (6.8% of total inference energy), 21.9 ms execution time, on the SIMD-optimized deployed model.
- **Accuracy recovery**: +20.9 pts CIFAR-10-C (50.4%→71.3%), +14.5 pts CIFAR-100-C, +11.0 pts Tiny-ImageNet-C.
- **Baseline comparison**: TENT (+24.9 pts, gradient-based, undeployable on folded int8), BN-adapt (+20.6 pts, needs BN layers, undeployable), CoTTA (+13.9 pts, gradient-based, undeployable), naive scale-adapt (−0.4 pts).
- **Scope of validation**: ESP32-S3 only; other MCU platforms (e.g. STM32H747 used by prior work TinyTTA) are referenced but not evaluated here.

## Key technical points (ZH)

- **问题**：纯整数、已完成 BN 融合的 MCU 视觉模型既无法使用基于梯度的 TTA（缺少反向传播机制），也无法使用依赖 BN 统计量的前向式 TTA（BN 层已被融合消除）。
- **关键洞察**：将 BN 融合进前一层卷积会破坏前向式 TTA 方法通常依赖的归一化统计量。
- **机制**：仅利用前向传播估计值，对每个已融合卷积层的输出做逐通道重新归一化，使其趋近干净训练时的统计特性。
- **硬件**：ESP32-S3 微控制器，功耗使用 Nordic PPK2 分析仪测量。
- **开销**：单次自适应耗费 8.3 mJ（占总推理能耗 6.8%），在 SIMD 优化后的已部署模型上执行时间 21.9 ms。
- **准确率恢复**：CIFAR-10-C +20.9 个百分点（50.4%→71.3%），CIFAR-100-C +14.5 个百分点，Tiny-ImageNet-C +11.0 个百分点。
- **基线对比**：TENT（+24.9 个百分点，基于梯度，无法在已融合 int8 模型上运行）、BN-adapt（+20.6 个百分点，需要已被移除的 BN 层）、CoTTA（+13.9 个百分点，基于梯度，同样无法部署）、朴素尺度自适应基线（−0.4 个百分点）。
- **验证范围**：仅在 ESP32-S3 上验证；此前工作 TinyTTA 使用的 STM32H747 等其他 MCU 平台仅作引用，未在本文中实测。

## Why it matters / what's new (EN)

Most TTA literature is written against server- or GPU-class assumptions and simply doesn't run on the hardware a shipped MCU vision product actually uses; FORGE's contribution is narrow but real — it identifies the exact reason (BN folding destroys the statistics forward TTA needs) that the existing forward-only methods fail on deployed integer models, and fixes it with a mechanism cheap enough to run on an ESP32-S3 at millijoule cost. The reported accuracy recovery trails the undeployable gradient-based ceiling (TENT's +24.9 pts) by only a few points while being the only method in the comparison that actually runs on the target hardware — a measured energy/latency number on real MCU silicon rather than a simulated or GPU-class proxy result.

## Why it matters / what's new (ZH)

多数 TTA 文献建立在服务器或 GPU 级别的假设之上，根本无法运行在实际出货的 MCU 视觉产品所使用的硬件上；FORGE 的贡献范围虽窄但扎实——它准确指出了现有前向式方法在已部署整数模型上失效的具体原因（BN 融合破坏了前向式 TTA 所需的统计量），并以一种在 ESP32-S3 上仅需毫焦耳级开销即可运行的机制加以解决。其报告的准确率恢复幅度，相比无法实际部署的基于梯度方法上限（TENT 的 +24.9 个百分点）仅落后几个百分点，却是对比方法中唯一真正能在目标硬件上运行的方案——这是在真实 MCU 芯片上实测得到的能耗/时延数据，而非模拟或 GPU 级代理结果。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
