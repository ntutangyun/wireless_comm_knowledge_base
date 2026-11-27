---
id: 2026-11-27_arxiv-over-the-air-computation-power-amplifier-nonlinearity-power-control
date_published: 2026-10-21
date_found: 2026-11-27
technology: edge-ai
type: academic-paper
title_en: "Over-the-Air Computation with Power Amplifier Nonlinearity"
title_zh: "考虑功率放大器非线性的空中计算"
url: "https://arxiv.org/abs/2610.29465"
source_quality: full
topics: [over-the-air-computation, power-amplifier-nonlinearity, power-control, hardware-impairments]
topic_primary: over-the-air-computation
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

The paper (authors David Nordlund, Ayça Özçelikkale, Zheng Chen; 6 pages, 3 figures) studies over-the-air computation (AirComp), in which multiple source nodes transmit simultaneously and the signal superposition performs the data aggregation, and asks how power amplifier (PA) nonlinearity affects it. It develops an analytical framework for coherent AirComp and derives a closed-form expression for the receiver mean-squared error (MSE) under a memoryless polynomial PA model, assuming circularly symmetric complex Gaussian source data.

Link: a simulated multiple-access channel with a memoryless saturating polynomial PA model (hard clipping on input amplitude), results averaged over realisations of network, channel, data and noise. No over-the-air measurement is reported. The computation is general data aggregation (non-AI).

## Summary (ZH)

论文（作者 David Nordlund、Ayça Özçelikkale、Zheng Chen；6 页，3 幅图）研究空中计算（AirComp）——多个源节点同时发送，信号叠加完成数据聚合——并探讨功率放大器（PA）非线性对其的影响。论文建立了相干 AirComp 的分析框架，在无记忆多项式 PA 模型和圆对称复高斯源数据的假设下，推导出接收端均方误差（MSE）的闭式表达式。

所经链路：仿真的多址信道，采用无记忆饱和多项式 PA 模型（对输入幅度硬限幅），结果对网络、信道、数据和噪声的多次实现取平均。未报告空口测量。所计算的是通用数据聚合（非 AI）。

## Key technical points (EN)

- Power control optimised under the conventional linear-PA assumption can show rapidly increasing MSE as the transmit power budget increases when the PA is nonlinear.
- Incorporating PA nonlinearity into the power control design prevents this degradation and maintains low MSE over the considered power range.
- The proposed nonlinearity-aware scheme is compared with the optimal linear-PA power control from prior work, a truncated channel inversion scheme and a saturation-aware genie; the paper states it shows the same qualitative high-power behaviour as the genie, which knows the actual PA saturation and instantaneous source data.

## Key technical points (ZH)

- 当 PA 存在非线性时，按传统线性 PA 假设优化的功率控制，其 MSE 会随发射功率预算增大而迅速上升。
- 把 PA 非线性纳入功率控制设计可避免这种恶化，并在所考察的功率范围内保持较低 MSE。
- 所提出的非线性感知方案与既有工作的线性 PA 最优功率控制、截断信道求逆方案以及感知饱和的 genie 方案进行比较；论文指出其在高功率下的定性行为与 genie（已知实际 PA 饱和与瞬时源数据）相同。

## Why it matters / what's new (EN)

It brings a hardware impairment that real transmitters have into AirComp power-control design. The result is analytical and simulated for a polynomial PA model with Gaussian source data and is non-AI aggregation, so it is a modest, narrowly scoped contribution; no hardware validation is reported.

## Why it matters / what's new (ZH)

它把真实发射机存在的硬件非理想性引入 AirComp 功率控制设计。结果针对多项式 PA 模型和高斯源数据，通过分析与仿真得到，属于非 AI 聚合，因此贡献有限且范围较窄；未报告硬件验证。
