---
id: 2026-10-12_arxiv-w16a16-mcu-quantization
date_published: 2026-10-02
date_found: 2026-10-12
type: academic-paper
technology: edge-ai
title_en: "16-bit Precision of Convolutional Neural Networks on Microcontroller Units for 8-bit Costs"
title_zh: "在微控制器上以 8 比特的代价实现卷积神经网络的 16 比特精度"
url: "https://arxiv.org/abs/2610.03402"
source_quality: abstract_only
topics: [quantization, microcontroller, CNN, Armv7E-M, energy-efficiency]
topic_primary: edge-model-efficiency
topics_secondary: [edge-ai-silicon]
novelty_score: 3
---

## Summary (EN)

Authors Rui Liu and Benjamin Paaßen introduce W16A16, a 16-bit weight/16-bit activation quantization scheme targeted at the Armv7E-M microcontroller architecture, implemented and evaluated for temporal convolutional networks (TCNs). The paper reports that W16A16 achieves faster inference speed and lower energy consumption, at both the layer level and the model level, compared with alternative quantization schemes on the same hardware, and that it yields roughly 10x lower quantization error than 8-bit (INT8) schemes while maintaining inference performance and power efficiency that is comparable to or better than those alternatives.

The paper's own framing is that it closes a gap between the usual choice of 8-bit quantization (cheap but lossy) and 32-bit floating point (accurate but costly): this work shows a 16-bit path can be run at a cost profile close to 8-bit on real Armv7E-M hardware. The authors provide architectural analysis and empirical evaluation across regression, classification, and energy-consumption metrics measured on actual microcontroller hardware (rather than simulation alone).

## Summary (ZH)

作者 Rui Liu 和 Benjamin Paaßen 提出了 W16A16，一种针对 Armv7E-M 微控制器架构的 16 比特权重/16 比特激活量化方案，以时间卷积网络（TCN）为例实现与评估。论文报告称，与同一硬件上的其他量化方案相比，W16A16 在层级和模型级别上均实现了更快的推理速度和更低的能耗，并且相较 8 比特（INT8）方案，量化误差降低了约 10 倍，同时推理性能和能效与其他方案相当或更优。

论文自身的定位是弥合通常在 8 比特量化（代价低但有损）与 32 位浮点（精确但代价高）之间做选择的这一空白：本工作表明，在真实的 Armv7E-M 硬件上，一条 16 比特路径可以以接近 8 比特的代价运行。作者在实际微控制器硬件（而非仅仿真）上，针对回归、分类和能耗指标提供了架构分析和实证评估。

## Key technical points (EN)

- W16A16: 16-bit weight / 16-bit activation quantization scheme for the Armv7E-M microcontroller architecture.
- Reported: ~10x lower quantization error than INT8 schemes, with comparable or better inference speed and energy consumption at both layer and model level on real MCU hardware.
- Positioning: a middle path between lossy-but-cheap INT8 and accurate-but-costly FP32, run at a cost close to INT8.
- Evaluation covers regression, classification, and energy-consumption metrics, measured on actual hardware rather than simulation.

## Key technical points (ZH)

- W16A16：面向 Armv7E-M 微控制器架构的 16 比特权重/16 比特激活量化方案。
- 报告结果：相较 INT8 方案量化误差降低约 10 倍，在层级和模型级别上的推理速度和能耗与之相当或更优，均在真实 MCU 硬件上测得。
- 定位：在"有损但廉价"的 INT8 与"精确但代价高"的 FP32 之间提供一条中间路径，运行代价接近 INT8。
- 评估涵盖回归、分类和能耗指标，均在实际硬件而非仅仿真环境中测得。

## Why it matters / what's new (EN)

The authors' summary: "16-bit resolution for the cost of 8-bit resolution" — going from 8-bit to 16-bit at a near-8-bit cost, backed by measurements on real Armv7E-M hardware rather than only simulation.

## Why it matters / what's new (ZH)

作者的概括："以 8 比特的代价获得 16 比特精度"——以接近 8 比特的代价从 8 比特升到 16 比特，并且有在真实 Armv7E-M 硬件（而非仅仿真）上的测量数据支撑。
