---
id: 2026-11-17_arxiv-all-digital-coherent-afsk-demodulator-cubesat
date_published: 2026-11-13
date_found: 2026-11-17
technology: satellite
type: academic-paper
title_en: "An All-Digital Coherent AFSK Demodulator for CubeSat Applications"
title_zh: "面向立方星的全数字相干 AFSK 解调器"
url: "https://arxiv.org/abs/2611.18509"
source_quality: abstract-plus-intro
topics: [CubeSat, AFSK, coherent detection, Kalman filter, Viterbi, Doppler, TT&C, AX.25]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Pacelli, Florindo, Antreich and de Lucena (arXiv, 13 Nov 2026) address audio frequency-shift keying (AFSK), widely used for CubeSat telecommand uplinks with the AX.25 protocol. The arXiv listing states it is a preprint of an article published in Digital Signal Processing (Elsevier) in 2025. Coherent detection is usually avoided because line-of-sight dynamics in low Earth orbit cause synchronisation impairments. The paper presents an all-digital coherent AFSK demodulator in which a Kalman filter (KF) tracks carrier phase and timing delay, and the Viterbi algorithm performs maximum-likelihood sequence detection; the detected bit statistics are fed back to the KF to estimate phase shift, Doppler shift and Doppler drift.

The authors derive original mathematical analyses of synchronisation accuracy in dynamic LEO conditions and evaluate the demodulator by computer simulation over an additive white Gaussian noise channel with real CubeSat orbits. Per the abstract, it gains 5 dB in BER terms over the conventional noncoherent AFSK demodulator.

## Summary (ZH)

Pacelli、Florindo、Antreich 与 de Lucena（arXiv，2026 年 11 月 13 日）针对音频频移键控（AFSK）展开研究，该调制配合 AX.25 协议广泛用于立方星遥控上行。arXiv 页面注明该文为已于 2025 年发表在 Digital Signal Processing（Elsevier）上的论文的预印本。由于低轨视线动态带来同步损伤，相干检测通常被回避。论文提出一种全数字相干 AFSK 解调器：卡尔曼滤波器（KF）跟踪载波相位与定时延迟，Viterbi 算法进行最大似然序列检测，检测出的比特统计量反馈给 KF，以估计相位偏移、多普勒频移与多普勒漂移。

作者推导了动态 LEO 条件下同步精度的原创数学分析，并在加性高斯白噪声信道、真实立方星轨道下通过计算机仿真评估。摘要称其相对传统非相干 AFSK 解调器获得 5 dB 的误码率增益。

## Key technical points (EN)

- Motivation stated in the paper: noncoherent AFSK detection is simple but performs poorly in BER versus coherent detection; telecommand link rate is limited to 1200 bps for most products on the market.
- KF performance is assessed with a moving root-mean-square error (MRMSE) statistic and the trace of its state error covariance matrix estimate.
- Evaluation is simulation only (AWGN channel, real CubeSat orbits); no over-the-air test is described in the abstract.

## Key technical points (ZH)

- 论文所述动机：非相干 AFSK 检测实现简单，但误码率性能逊于相干检测；市面多数产品的遥控链路速率限于 1200 bps。
- KF 性能以滑动均方根误差（MRMSE）统计量及其状态误差协方差矩阵估计的迹来评估。
- 评估仅为仿真（AWGN 信道、真实立方星轨道）；摘要中未描述空口实测。

## Why it matters / what's new (EN)

It targets the TT&C telecommand-uplink modem of CubeSats, replacing noncoherent AFSK detection with joint Kalman/Viterbi tracking under LEO Doppler dynamics. Simulation-only.

## Why it matters / what's new (ZH)

该工作面向立方星测控（TT&C）遥控上行调制解调器，用联合卡尔曼/Viterbi 跟踪取代非相干 AFSK 检测以应对 LEO 多普勒动态。仅为仿真。

## Images

None.
