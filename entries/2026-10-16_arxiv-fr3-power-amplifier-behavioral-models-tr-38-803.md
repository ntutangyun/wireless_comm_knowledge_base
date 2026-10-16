---
id: 2026-10-16_arxiv-fr3-power-amplifier-behavioral-models-tr-38-803
date_published: 2026-10-14
date_found: 2026-10-16
type: academic-paper
technology: cellular
title_en: "Comparative Analysis and Behavioral Modelling of Power Amplifiers in FR3"
title_zh: "FR3 频段功率放大器的比较分析与行为建模"
url: "https://arxiv.org/abs/2610.19889"
source_quality: full
topics: [FR3, upper-mid-band, power-amplifier, nonlinearity, GMP, behavioral-model, TR-38.803, ISAC, ambiguity-function, 7-24GHz]
topic_primary: 6g-vision
topics_secondary: [cellular-spectrum]
novelty_score: 3
---

## Summary (EN)
Cel Thys, Rodney Martinez Alonso, Ali H. Alsarraf, Zhuangzhuang Cui, Dominique Schreurs and Sofie Pollin (KU Leuven and imec) measure power amplifiers in the upper mid-band (7 to 24 GHz), designated Frequency Range 3 (FR3) in emerging 6G standardisation work. Their starting point is that the 3GPP PA model baseline, TR 38.803 Annex A, was derived from 2.1 GHz measurements and 28 GHz circuit simulations and has not been revisited for FR3. They characterise several devices under test driven into gain compression and extract memoryless polynomial and Generalized Memory Polynomial (GMP) behavioral models by least-squares regression, then compare them with the 3GPP models spanning FR1 and FR2.

The primary device is a Qorvo TGA3042 GaN PA (7 to 10.5 GHz, 4.5 W) measured at 8 GHz over 11 drive levels up to 5.2 dB of compression; a wideband Talent Microwave PA is measured at 7.225 GHz and 15 GHz with 100 MHz and 200 MHz bandwidth, using a Keysight M9484C VXG source with calibrated acquisition. The wideband PA is modelled by a 3rd- to 5th-order memoryless polynomial, while the GaN PA shows soft compression and is best modelled by an 11th-order polynomial and shows much stronger phase distortion (the wideband PA stays within 1 degree). The extracted models follow the 2.1 GHz GaN baseline of TR 38.803 up to about 4 dB beyond the 1 dB compression point. The GMP improves test NMSE at every operating point, by 1.3 to 4.6 dB. In an OFDM ISAC ambiguity-function evaluation, the compressed GaN PA raises the sidelobe floor by 35 dB. All model coefficients and measurement data are published.

## Summary (ZH)
Cel Thys、Rodney Martinez Alonso、Ali H. Alsarraf、Zhuangzhuang Cui、Dominique Schreurs 与 Sofie Pollin（鲁汶大学 KU Leuven 与 imec）测量了上中频段（7 至 24 GHz）的功率放大器，该频段在新兴的 6G 标准化工作中被称为频率范围 3（FR3）。其出发点是：3GPP 的 PA 模型基线 TR 38.803 附录 A 源自 2.1 GHz 的测量与 28 GHz 的电路仿真，尚未针对 FR3 重新审视。他们对多个被测器件进行增益压缩下的特性测量，用最小二乘回归提取无记忆多项式与广义记忆多项式（GMP）行为模型，并与覆盖 FR1 和 FR2 的 3GPP 模型对比。

主要器件为 Qorvo TGA3042 GaN PA（7 至 10.5 GHz，4.5 W），在 8 GHz 下测量 11 个驱动电平，最高达 5.2 dB 压缩；另一只 Talent Microwave 宽带 PA 在 7.225 GHz 与 15 GHz、100 MHz 与 200 MHz 带宽下测量，使用经校准采集的 Keysight M9484C VXG 信号源。宽带 PA 可用 3 至 5 阶无记忆多项式建模，而 GaN PA 呈现软压缩，最佳模型为 11 阶多项式，且相位失真明显更强（宽带 PA 保持在 1 度以内）。提取的模型在超过 1 dB 压缩点约 4 dB 以内与 TR 38.803 的 2.1 GHz GaN 基线吻合。GMP 在每个工作点都改善了测试 NMSE，改善幅度为 1.3 至 4.6 dB。在 OFDM ISAC 模糊函数评估中，被压缩的 GaN PA 使旁瓣底噪抬高 35 dB。全部模型系数与测量数据均已公开。

## Key technical points (EN)
- FR3 framing: the paper cites the 7.125-8.4 GHz and 14.8-15.35 GHz windows within 7 to 24 GHz as already under study, including for ISAC.
- Measurement data are public: the 11 GaN PA drive levels, three wideband-PA operating points, a GaAs LNA, and four additional captures at 15 GHz/100 MHz with swept input power, each as complex baseband input and output IQ sequences, time-aligned in MATLAB by cross-correlation.
- Memoryless order K is swept from 1 to 6 (nonlinear orders 3 to 13); GMP follows the structure of the 3GPP GMP models. Quality is scored by NMSE on held-out data.
- For the GaN PA, NMSE improves from -29.4 dB at 3rd order to -39.4 dB at 11th order; the paper describes its compression as soft, so driving it at an efficient operating point means going beyond 1 dB of compression.
- For the wideband PA at 15 GHz, the 3rd-order test NMSE rises from -31.8 to -28.1 dB when the bandwidth goes from 100 MHz to 200 MHz.
- A memory polynomial without cross terms already captures most of the GMP gain with fewer coefficients; memoryless and GMP models predict the same sidelobe floor, while GMP additionally shows close-in sidelobes from linear, equalisable memory.
- The authors conclude that the memoryless coefficients they tabulate suffice to predict the ISAC sidelobe floor and can be used in link- and system-level simulation.

## Key technical points (ZH)
- FR3 背景：论文引述 7 至 24 GHz 内的 7.125-8.4 GHz 与 14.8-15.35 GHz 窗口已在研究之中，包括用于 ISAC。
- 测量数据公开：11 个 GaN PA 驱动电平、宽带 PA 的三个工作点、一只 GaAs LNA，以及 15 GHz/100 MHz 下输入功率扫描的四组额外采集，均为复基带输入与输出 IQ 序列，并在 MATLAB 中通过互相关时间对齐。
- 无记忆阶数 K 从 1 扫至 6（非线性阶数 3 至 13）；GMP 采用 3GPP GMP 模型的结构。模型质量以留出数据上的 NMSE 衡量。
- 对 GaN PA，NMSE 由 3 阶时的 -29.4 dB 改善到 11 阶时的 -39.4 dB；论文称其压缩为软压缩，因此要在高效率工作点驱动，就需超过 1 dB 压缩。
- 对 15 GHz 的宽带 PA，带宽由 100 MHz 增至 200 MHz 时，3 阶测试 NMSE 由 -31.8 dB 升至 -28.1 dB。
- 不含交叉项的记忆多项式已能以更少的系数获得 GMP 的大部分增益；无记忆模型与 GMP 预测的旁瓣底噪相同，而 GMP 还能体现线性、可均衡记忆效应所致的近端旁瓣。
- 作者结论是：其列出的无记忆系数足以预测 ISAC 旁瓣底噪，可用于链路级与系统级仿真。

## Why it matters / what's new (EN)
Most FR3 material in the KB is spectrum, propagation or MIMO-system oriented; this paper supplies hardware-side input to the same band, namely PA nonlinearity fitted to measured devices rather than to the soft limiter or generic cubic polynomial the authors say earlier PA-impaired ISAC studies used. The authors claim, to their knowledge, that these are the first publicly released FR3 PA measurements. The sample is small (a GaN device at 8 GHz and one wideband PA at two frequencies), so the transferability of the coefficients to other FR3 PAs is not established by the paper.

## Why it matters / what's new (ZH)
知识库中的 FR3 内容多偏向频谱、传播或 MIMO 系统；本文为同一频段补充了硬件侧输入，即用实测器件拟合的 PA 非线性，而非作者所称此前含 PA 损伤的 ISAC 研究所用的软限幅器或通用三次多项式。作者称，据其所知这是首批公开发布的 FR3 PA 测量数据。样本规模较小（8 GHz 的一只 GaN 器件与两个频点的一只宽带 PA），因此系数能否推广到其他 FR3 功放，论文并未证明。
