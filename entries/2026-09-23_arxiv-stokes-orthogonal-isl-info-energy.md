---
id: 2026-09-23_arxiv-stokes-orthogonal-isl-info-energy
date_published: 2026-09-22
date_found: 2026-09-23
technology: satellite
type: academic-paper
title_en: "Information in Polarization, Energy from Optical Power: Stokes-Orthogonal Inter-Satellite Links"
title_zh: "偏振传信、光功率取能：斯托克斯正交星间链路"
url: "https://arxiv.org/abs/2609.25986"
source_quality: full
topics: [inter-satellite-link, SWIPT, polarization, photovoltaic-harvesting, FSO]
topic_primary: leo-constellations
novelty_score: 3
---

## Summary (EN)

Ghanbari, Dabiri, Hasna, and Qaraqe (Hamad Bin Khalifa University, Qatar University, and University of Cambridge) submitted this paper on 2026-09-22. Joint information-and-energy transfer over inter-satellite free-space optical (FSO) links is conventionally done by explicitly splitting the received optical power between a communication branch and an energy-harvesting branch, which couples the two: giving the link more reliability necessarily takes power away from harvesting, and vice versa.

The paper's proposed alternative keeps the total transmitted optical power fixed across both binary symbols and encodes information purely in the signal's polarization state (a "Stokes-orthogonal" scheme): symbol +1 and symbol -1 correspond to orthogonal polarization states of equal total power, so a polarizing beam splitter at the receiver separates the two branches, and the differential (AC) power difference between them carries the bit while their combined (DC) power — used to drive matched photovoltaic converters — provably stays exactly the same regardless of which symbol was sent (Proposition 2: the two symbols only swap which converter receives the larger versus smaller branch power, leaving the unordered power pair, and hence the harvested energy, unchanged even under a nonlinear converter response). The authors derive the maximum-likelihood detector (a zero-threshold sign test on the differential photocurrent), an average bit-error-rate expression accounting for both an exact circular-aperture coupling model and a tractable Gaussian-beam approximation under Rayleigh pointing jitter, and a closed-form BER approximation that the authors report stays within 0.43% of exact numerical evaluation across the tested pointing conditions. In a 100 km inter-satellite link scenario (1530 nm wavelength, 100 mm receive-aperture radius, 20 dB polarization extinction ratio), the scheme reaches BER around 10^-2 at transmit powers of 13, 17, and 23 dBm for pointing jitter of 6, 8, and 10 microradians per axis respectively, and — because it never trades communication reliability for harvested power the way explicit power-splitting must — achieves both higher harvested power and lower BER than an idealized lossless power-splitting benchmark at the same operating points (e.g. at 8 microrad jitter, ~2.31 mW harvested at BER 1.6x10^-5 for the proposed scheme versus ~1.81 mW at BER 1.7x10^-4 for the power-splitting benchmark).

## Summary (ZH)

Ghanbari、Dabiri、Hasna 与 Qaraqe（卡塔尔哈马德本哈利法大学、卡塔尔大学及剑桥大学）于 2026 年 9 月 22 日提交本文。星间自由空间光（FSO）链路中的联合信息与能量传输，传统上通过显式地将接收光功率在通信支路与能量采集支路之间进行分配来实现，而这种做法将两者耦合在一起：提升链路可靠性必然要以牺牲采集功率为代价，反之亦然。

本文提出的替代方案在两个二进制符号之间保持发射总光功率恒定，并纯粹通过信号的偏振状态来编码信息（"斯托克斯正交"方案）：符号 +1 与符号 −1 对应总功率相等的正交偏振态，接收端的偏振分光器（PBS）将两路分开，两路之间的差分（交流）功率差携带比特信息，而其功率之和（直流部分，用于驱动匹配的光伏转换器）在理论上可证明与所发送符号无关、完全不变（命题 2：两个符号仅仅是交换了哪一路转换器接收到较大或较小的支路功率，未排序的功率对——因而采集到的能量——即使在非线性转换器响应下也保持不变）。作者推导出最大似然检测器（对差分光电流进行零门限符号判决）、同时考虑精确圆孔径耦合模型与瑞利指向抖动下可处理的高斯光束近似的平均误码率表达式，以及一个闭式误码率近似公式，作者称其在所测试的指向条件下与精确数值结果的偏差保持在 0.43% 以内。在一个 100 公里星间链路场景中（波长 1530 纳米，接收孔径半径 100 毫米，偏振消光比 20 dB），当每轴指向抖动分别为 6、8、10 微弧度时，该方案在发射功率分别为 13、17、23 dBm 时达到约 10⁻² 的误码率；并且由于该方案从不像显式功率分割那样以牺牲通信可靠性来换取采集功率，在相同工作点下，其采集功率与误码率均优于理想无损功率分割基准（例如在 8 微弧度抖动下，所提方案在误码率 1.6×10⁻⁵ 时采集功率约 2.31 mW，而功率分割基准在误码率 1.7×10⁻⁴ 时仅采集约 1.81 mW）。

## Key technical points (EN)

- **Scheme**: constant-total-power "Stokes-orthogonal" modulation — symbols +1/-1 map to orthogonal polarization states of equal total power P_t (2 W in the numerical setup); a polarizing beam splitter separates horizontal/vertical branches whose differential photocurrent carries the bit and whose summed power drives matched photovoltaic converters.
- **Symbol-invariant harvesting (Proposition 2)**: for any nonlinear photovoltaic converter response g(.), the harvested power is provably identical for both symbols — they only exchange which branch (larger/smaller share) connects to which converter, leaving the unordered power pair, and hence total harvested energy, unchanged; no linearization or Jensen-inequality approximation needed.
- **Detector and BER model**: zero-threshold sign detector on the differential photocurrent is shown maximum-likelihood optimal (Proposition 1); average BER derived under both an exact circular-aperture coupling model (Marcum Q-function) and a tractable Gaussian-beam approximation with Rayleigh pointing jitter; closed-form BER approximation stays within 0.43% of exact numerical evaluation.
- **Numerical setup**: 100 km range, 1530 nm wavelength, 25 mm transmit beam radius, 100 mm receive-aperture radius, 20 dB polarization extinction ratio, 1 GHz receiver bandwidth, pointing jitter swept 2-14 microrad/axis.
- **BER vs. power**: BER ~10^-2 reached at transmit power 13 dBm (6 microrad jitter), 17 dBm (8 microrad), 23 dBm (10 microrad).
- **Harvesting-vs-BER tradeoff comparison**: at 8 microrad jitter, proposed scheme reaches ~2.31 mW harvested power at BER 1.6x10^-5, versus an idealized lossless power-splitting benchmark's ~1.81 mW at BER 1.7x10^-4 for the same operating point — the proposed scheme dominates on both axes simultaneously rather than trading one for the other.

## Key technical points (ZH)

- **方案**：恒定总功率的"斯托克斯正交"调制——符号 +1/−1 对应总功率相等（数值设置中为 2 W）的正交偏振态；偏振分光器将水平/垂直两路分开，其差分光电流携带比特信息，其功率之和用于驱动匹配的光伏转换器。
- **符号不变的能量采集（命题 2）**：对任意非线性光伏转换器响应函数 g(·)，两个符号所采集到的功率可证明完全相同——两者仅交换了哪一支路（功率较大/较小）连接到哪个转换器，未排序的功率对（进而总采集能量）保持不变；无需线性化或詹森不等式近似。
- **检测器与误码率模型**：证明对差分光电流的零门限符号判决即为最大似然最优检测器（命题 1）；在精确圆孔径耦合模型（Marcum Q 函数）与瑞利指向抖动下的可处理高斯光束近似两种情形下均推导出平均误码率；闭式误码率近似公式与精确数值结果偏差保持在 0.43% 以内。
- **数值设置**：链路距离 100 公里，波长 1530 纳米，发射光束半径 25 毫米，接收孔径半径 100 毫米，偏振消光比 20 dB，接收机带宽 1 GHz，每轴指向抖动扫描范围 2-14 微弧度。
- **误码率与功率关系**：抖动为 6/8/10 微弧度时，分别在发射功率 13/17/23 dBm 处达到约 10⁻² 的误码率。
- **采集功率与误码率权衡对比**：在 8 微弧度抖动下，所提方案在误码率 1.6×10⁻⁵ 时采集功率约 2.31 mW，而理想无损功率分割基准在相同工作点下误码率为 1.7×10⁻⁴ 时仅采集约 1.81 mW——所提方案在两个指标上同时占优，而非以一方换取另一方。

## Why it matters / what's new (EN)

This KB's inter-satellite-link coverage has so far focused on relaying, channel modeling, and (via this same run's companion entry) receiver optics for fine tracking, but none of it has addressed simultaneous wireless information-and-power transfer over an optical ISL. This paper's core mechanism — conveying information through which polarization branch is larger rather than through total intensity, so that the sum of the two branches (and hence the harvested power) never depends on the transmitted bit — is a different mechanism from conventional intensity-modulated FSO with explicit power splitting, and its 0.43%-accurate closed-form analysis gives a concrete baseline for power-neutral joint communication-and-energy-harvesting design in future optical inter-satellite terminals.

## Why it matters / what's new (ZH)

知识库中关于星间链路的条目此前主要集中在中继、信道建模，以及（通过本次同批次的另一条目）精跟踪接收机光学设计，但均未涉及光学星间链路上的同时无线信息与能量传输。本文的核心机制——通过判断哪一偏振支路功率更大来传递信息，而非依赖总光强，从而使两支路功率之和（进而采集到的能量）与所发送比特完全无关——与传统采用显式功率分割的强度调制 FSO 方案是不同的机制，其误差保持在 0.43% 以内的闭式分析为未来光学星间终端中功率中性的联合通信与能量采集设计提供了具体的基准方案。

## Images

None.
