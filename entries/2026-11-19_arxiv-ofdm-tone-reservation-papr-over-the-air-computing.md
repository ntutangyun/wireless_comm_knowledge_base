---
id: 2026-11-19_arxiv-ofdm-tone-reservation-papr-over-the-air-computing
date_published: 2026-11-01
date_found: 2026-11-19
technology: edge-ai
type: academic-paper
title_en: "Joint PAPR Reduction and Over-the-Air Computing in Multi-User OFDMA Systems (reserved tones carry the sum computation, simulated)"
title_zh: "多用户 OFDMA 系统中的联合 PAPR 抑制与空中计算（预留音携带求和计算，仿真）"
url: "https://arxiv.org/abs/2611.02343"
source_quality: full
topics: [over-the-air-computation, OFDMA, PAPR, tone-reservation, fractional-programming, AirComp]
topic_primary: over-the-air-computation
novelty_score: 3
---

## Summary (EN)

The paper considers peak-to-average power ratio (PAPR) reduction for OFDM using tone reservation (TR) under an over-the-air computing constraint: the signals placed on the reserved tones must at the same time enable distributed computation of a sum at the receiver. In ordinary tone reservation the reserved tones carry only PAPR-cancelling signals; here they also carry the computation payload, so the same tones serve both purposes in a multi-user OFDMA uplink.

The problem is cast as a fractional programming problem and solved with the iterative quadratic transform (QT), which converges to a stationary point. A central step is to decompose the reserved-tone vector into two orthogonal components: one that satisfies the sum-computation constraint, and one that supplies the remaining degrees of freedom for PAPR reduction. The paper notes that the proposed design and the benchmark sacrifice the same number of degrees of freedom, but the proposed one spreads the computational payload over all reserved tones.

Link computed over: a simulated OFDM/OFDMA uplink. Data symbols are 16-QAM, channel coefficients are drawn from CN(0,1); the authors note the benchmark leaves residual multi-user interference whenever channels are not phase-aligned, which they call typical in practice, while the proposed design removes it. The computation is a general sum, not an AI workload.

## Summary (ZH)

本文研究在空中计算约束下，用预留音（tone reservation，TR）抑制 OFDM 的峰均功率比（PAPR）：放在预留音上的信号必须同时使接收端能够分布式地计算求和。普通预留音中，预留音只承载抵消 PAPR 的信号；这里它们还承载计算负载，使同一批音在多用户 OFDMA 上行中兼顾两种用途。

该问题被表述为分式规划问题，并用迭代二次变换（QT）求解，收敛到驻点。关键一步是把预留音向量分解为两个正交分量：一个满足求和计算约束，另一个提供用于 PAPR 抑制的剩余自由度。论文指出，所提设计与基准方法牺牲的自由度数相同，但所提设计把计算负载分布到全部预留音上。

所经链路：仿真的 OFDM/OFDMA 上行。数据符号为 16-QAM，信道系数服从 CN(0,1)；作者指出，只要各信道相位未对齐（作者称这是实际中的典型情形），基准方案就会残留多用户干扰，而所提设计可将其消除。所计算的是一般求和，并非 AI 负载。

## Key technical points (EN)

- Method: quadratic-transform-based fractional programming with guaranteed convergence to a stationary point; orthogonal decomposition of the reserved-tone vector into a computation-satisfying part and a PAPR-reduction part.
- Claim from analysis and simulation: PAPR reduction matches the benchmark, while computation accuracy is better, particularly with multiple users.
- Reported mechanism: distributing the computational payload over all reserved tones gives more robustness against multi-user interference and quantisation noise.
- Large PAPR degrades converter SQNR and reduces power-amplifier efficiency, which the paper cites as the motivation for PAPR reduction.
- Simulation only; the HTML text does not state numerical gains, so none are given here.

## Key technical points (ZH)

- 方法：基于二次变换的分式规划，保证收敛到驻点；把预留音向量正交分解为满足计算约束的部分与用于 PAPR 抑制的部分。
- 分析与仿真的结论：PAPR 抑制与基准持平，计算精度更优，尤其在多用户情形下。
- 文中给出的机制：把计算负载分布到全部预留音上，对多用户干扰和量化噪声更稳健。
- 大 PAPR 会降低 ADC/DAC 的信号量化噪声比并降低功放效率，论文以此作为 PAPR 抑制的动机。
- 仅为仿真；HTML 文本未给出数值增益，故此处不引用。

## Why it matters / what's new (EN)

The paper makes the standard OFDM tone-reservation PAPR technique computation-aware, using the reserved tones for both PAPR reduction and an over-the-air sum. It is general-function (non-AI) computation and simulation only.

## Why it matters / what's new (ZH)

论文让标准的 OFDM 预留音 PAPR 技术具备计算感知，预留音同时用于 PAPR 抑制与空中求和计算。属于一般函数（非 AI）计算，仅为仿真。

## Images

![Illustration of reserved-tone OFDM with over-the-air computing | 兼顾空中计算的预留音 OFDM 示意](https://arxiv.org/html/2611.02343v1/Illustration.png)
