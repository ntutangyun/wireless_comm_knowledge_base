---
id: 2026-11-16_arxiv-asymptotic-sinr-linear-detectors-uplink-massive-ntn-mimo
date_published: 2026-11-12
date_found: 2026-11-16
technology: satellite
type: academic-paper
title_en: "Asymptotic SINR Analysis of Linear Detectors in Uplink Massive NTN MIMO Transmissions"
title_zh: "上行大规模 NTN MIMO 传输中线性检测器的渐近 SINR 分析"
url: "https://arxiv.org/abs/2611.16851"
source_quality: full
topics: [NTN, massive MIMO, random matrix theory, semi-blind channel estimation, MMSE, MRC, LEO uplink]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Zhang, Kammoun and Alouini (KAUST; arXiv eess.SP, 12 Nov 2026) use random matrix theory to derive deterministic-equivalent SINR expressions for MRC and MMSE detection in a TDD uplink with many receive antennas and a fixed number of users, when the channel is estimated imperfectly. They compare a training-based least-squares estimator with a semi-blind estimator that projects the training estimate onto the leading eigenvectors of the data-phase sample covariance. They contrast their deterministic-channel treatment with the usual RMT approach based on spatial-correlation statistics.

For the semi-blind case the detector depends on the same data and noise it is applied to, so cross terms cannot be dropped; the authors handle it with a modified SINR definition and contour-integral/residue calculus. The numerical study uses an uplink LEO satellite with a uniform circular array. The paper is a preprint with no venue stated.

## Summary (ZH)

Zhang、Kammoun 与 Alouini（KAUST；arXiv eess.SP，2026 年 11 月 12 日）在 TDD 上行、接收天线数很大而用户数固定、信道估计不完美的条件下，用随机矩阵理论推导 MRC 与 MMSE 检测的确定性等价 SINR 表达式。作者比较了基于训练的最小二乘估计与半盲估计（将训练估计投影到数据段样本协方差的主特征向量上）。其确定性信道处理方式不同于常见的基于空间相关统计的 RMT 方法。

在半盲情形下，检测器依赖于其所作用的同一批数据与噪声，交叉项不能忽略；作者采用修改后的 SINR 定义以及围道积分/留数方法处理。数值研究采用带均匀圆阵的上行 LEO 卫星场景。该文为预印本，未注明发表场所。

## Key technical points (EN)

- Asymptotic regime: user count K fixed while antennas M, block length N and pilot length L grow proportionally; spike eigenvalues must exceed the detection threshold; data symbols are bounded i.i.d. with equal power (finite constellations such as QPSK/QAM).
- Theorems 1-2: deterministic equivalents for training-based MRC and MMSE, with a penalty term reflecting estimation error. Theorems 3-4: the semi-blind counterparts.
- Simulation: uplink LEO satellite at 1,000 km, UCA, bandwidth 25 MHz, antenna gains 17 and 3 dBi, K = 3 users with QPSK, 1,000 Monte Carlo trials per point; default ratios alpha = beta = 1/4; block length from 2^6 to 2^13. Carrier frequency 5 GHz; Rician factor 5 (following the paper's reference [22]).
- Findings: asymptotic NMSE falls as N grows; MMSE beats MRC and semi-blind beats training-based; semi-blind MMSE gives the highest SINR across SNR and across 2 to 10 users.
- Pilot efficiency: at N = 1,024, K = 3, SNR = 10 dB the semi-blind method reaches the same target SINR with less than half the pilots of the training-based scheme.
- Doppler: with residual satellite Doppler of 5, -5 and 10 Hz and terminal Doppler up to 20 Hz, semi-blind receivers still outperform training-based ones (tested empirically only; the analysis assumes block fading).

## Key technical points (ZH)

- 渐近区域：用户数 K 固定，天线数 M、块长 N 与导频长度 L 按比例增长；尖峰特征值须超过检测门限；数据符号为有界、独立同分布且功率相等（如 QPSK/QAM 等有限星座）。
- 定理 1-2：基于训练的 MRC 与 MMSE 的确定性等价式，含反映估计误差的惩罚项；定理 3-4：对应的半盲情形。
- 仿真：1,000 km 高度上行 LEO 卫星，均匀圆阵，带宽 25 MHz，天线增益 17 与 3 dBi，K = 3 个 QPSK 用户，每点 1,000 次蒙特卡洛；默认比例 alpha = beta = 1/4；块长 2^6 至 2^13。载波频率 5 GHz；莱斯因子 5（沿用论文参考文献 [22]）。
- 结论：渐近 NMSE 随 N 增大而下降；MMSE 优于 MRC，半盲优于基于训练；半盲 MMSE 在各 SNR 及 2 至 10 个用户下 SINR 最高。
- 导频效率：N = 1,024、K = 3、SNR = 10 dB 时，半盲方法以不足训练方案一半的导频达到同一目标 SINR。
- 多普勒：卫星残余多普勒 5、-5、10 Hz 且终端多普勒至 20 Hz 时，半盲接收机仍优于基于训练的接收机（仅经验验证；分析假设块衰落）。

## Why it matters / what's new (EN)

The paper gives closed-form asymptotic SINR for semi-blind versus training-based estimation in an NTN uplink setting, quantifying the pilot saving. The theory assumes block fading and Doppler is only examined by simulation.

## Why it matters / what's new (ZH)

本文给出 NTN 上行场景中半盲与基于训练估计的闭式渐近 SINR，并量化了导频节省。理论假设块衰落，多普勒仅通过仿真考察。

## Images

None.
