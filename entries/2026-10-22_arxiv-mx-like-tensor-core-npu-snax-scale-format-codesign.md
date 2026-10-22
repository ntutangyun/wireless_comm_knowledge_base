---
id: 2026-10-22_arxiv-mx-like-tensor-core-npu-snax-scale-format-codesign
date_published: 2026-10-19
date_found: 2026-10-22
technology: edge-ai
type: academic-paper
title_en: "MX-Like Tensor Core for LLM Inference with NPU Integration via Hardware-Software Co-Design Exploration"
title_zh: "面向 LLM 推理的类 MX 张量核：通过软硬件协同设计探索实现 NPU 集成"
url: "https://arxiv.org/abs/2610.26083"
source_quality: full
topics: [mx-format, nvfp4, block-scaled-quantization, npu, snax, hw-sw-codesign]
topic_primary: edge-ai-silicon
topics_secondary: [edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

This KU Leuven paper (accepted to ASP-DAC '27) explores the design space of block-scaled quantization formats for NPU-based edge LLM inference. OCP Microscaling (MX) and NVFP4 are treated as two points in a space spanned by the shared-scale format, the weight format and the activation format. The authors characterise the full family of 8-bit scale formats (UE8M0 through UE0M8) together with asymmetric weight-activation precision, build a parameterised Chisel MAC datapath template for fair hardware cost comparison, and integrate an automated co-design flow into the open-source SNAX NPU platform. They do not use a per-tensor scale.

Accuracy is measured as relative perplexity change averaged over four models on WikiText-2 and C4. At 6-bit weights and activations all scale formats fall in a 1.0-1.4% range; at 4-bit/4-bit, UE8M0 averages 45.0% degradation while UE5M3 and UE4M4 roughly halve it. Relative to the NVFP4-like UE4M3 scale, UE5M3 recovers up to 25.3% of the perplexity degradation. Hardware results come from TSMC 28 nm synthesis at 400 MHz (a 4x16 PE array, 204.8 GOPS): a recommended FP4 configuration (E2M3 x E2M1 with UE5M3) uses 0.646 mm2 and 51.6 mW versus 0.708 mm2 and 64.5 mW for a symmetric FP8 baseline, and UE5M3 costs only +0.06% area and +0.49% power over UE4M3. Of 126 configurations, 60 beat the FP8 baseline on both area and power.

The paper has no limitations section. The authors report that the benefit is concentrated in the FP4 regime and absent at 6-bit. Setup facts to read the numbers against: results come from a single 28 nm node with a fixed block size of 16, and accuracy is measured as perplexity only. The 20% accuracy budget is described as "guided by comparisons with smaller unquantized models of the same families", and the authors state the conclusions "hold for any accuracy threshold in 15–25% and any power budget in 56–64 mW".

## Summary (ZH)

这篇来自 KU Leuven 的论文（标注为 ASP-DAC '27）探索面向基于 NPU 的边缘 LLM 推理的块缩放量化格式设计空间。OCP Microscaling（MX）与 NVFP4 被视为由共享缩放格式、权重格式和激活格式张成的空间中的两个点。作者表征了完整的 8 位缩放格式族（UE8M0 到 UE0M8）及非对称权重-激活精度，构建了参数化的 Chisel MAC 数据通路模板以公平比较硬件开销，并把自动化协同设计流程集成进开源 SNAX NPU 平台。论文不使用逐张量缩放。

精度以相对困惑度变化衡量，在 WikiText-2 与 C4 上对四个模型取平均。权重与激活均为 6 位时，所有缩放格式都落在 1.0-1.4% 范围内；4 位/4 位时，UE8M0 平均退化 45.0%，UE5M3 与 UE4M4 约减半。相对于类 NVFP4 的 UE4M3 缩放格式，UE5M3 最多挽回 25.3% 的困惑度退化。硬件结果来自 TSMC 28 nm、400 MHz 综合（4x16 PE 阵列、204.8 GOPS）：推荐的 FP4 配置（E2M3 x E2M1，UE5M3）面积 0.646 mm2、功耗 51.6 mW，对称 FP8 基线为 0.708 mm2 与 64.5 mW；UE5M3 相对 UE4M3 仅增加 0.06% 面积与 0.49% 功耗。126 个配置中有 60 个在面积与功耗上都优于 FP8 基线。

论文没有单独的局限性章节。作者指出收益集中在 FP4 区间，6 位时不存在。阅读数字时应了解的设置事实：结果来自单一 28 nm 工艺和固定的块大小 16；精度仅用困惑度衡量。20% 的精度预算“参考了同系列较小的未量化模型的对比”，作者称结论“对 15–25% 的任意精度阈值和 56–64 mW 的任意功耗预算均成立”。

## Key technical points (EN)

- Scale formats: only UE8M0 to UE4M4 plus UE4M3 are practical; fewer than 4 exponent bits degrade accuracy severely. Element formats: MXINT8, FP8, FP6, FP4, with asymmetric weight/activation pairs.
- Accuracy at A6W4: UE5M3 reduces degradation from 18.4% to 9.9% and UE4M4 from 17.9% to 8.8%; at A8W4 UE5M3 reaches 6.1% while UE4M4 (16.0%) and UE4M3 (19.2%) degrade.
- Power is estimated (Synopsys PrimeTime PX from gate-level switching activity over 2048 MAC operations) on a 32x1024 tile from one Qwen2.5-3B layer; the accumulator is the largest area share (39-66%).
- Fractional-scale overhead above A6W6 is up to +22% system power and +17% area with no accuracy gain.
- Under the paper's thresholds (20% mean perplexity change, 60 mW, 0.7 mm2) symmetric MXFP4 fails at 45.0% and the NVFP4-like UE4M3 fails at 22.9%.

## Key technical points (ZH)

- 缩放格式：仅 UE8M0 到 UE4M4 加 UE4M3 实用；指数位少于 4 位会严重损伤精度。元素格式：MXINT8、FP8、FP6、FP4，并探索非对称权重/激活组合。
- A6W4 精度：UE5M3 将退化从 18.4% 降到 9.9%，UE4M4 从 17.9% 降到 8.8%；A8W4 时 UE5M3 为 6.1%，而 UE4M4（16.0%）与 UE4M3（19.2%）退化。
- 功耗为估算值（Synopsys PrimeTime PX，基于 2048 次 MAC 运算的门级开关活动），针对 Qwen2.5-3B 某一层的 32x1024 分块；累加器是面积占比最大的部分（39-66%）。
- 超过 A6W6 的小数缩放开销最多为系统功耗 +22%、面积 +17%，且无精度收益。
- 按论文阈值（平均困惑度变化 20%、60 mW、0.7 mm2），对称 MXFP4 以 45.0% 不达标，类 NVFP4 的 UE4M3 以 22.9% 不达标。

## Why it matters / what's new (EN)

The entry records a design-space result (accepted to ASP-DAC '27) on which block-scale format makes 4-bit LLM inference acceptable on a small NPU, with synthesis numbers that are checkable against the paper. They are post-synthesis estimates at a single 28 nm node on four models, not silicon measurements, and perplexity is the only accuracy metric.

## Why it matters / what's new (ZH)

本条目记录了一项设计空间结果（已被 ASP-DAC '27 接收）：在小型 NPU 上，哪种块缩放格式能使 4 位 LLM 推理的精度可接受，并附有可对照论文核查的综合数字。这些是单一 28 nm 工艺、四个模型上的综合后估计，而非流片实测，且精度只用困惑度衡量。

## Images

*(No redistributable images for this entry.)*
