---
id: 2026-10-22_arxiv-finite-size-cv-qkd-satellite-hybrid-noise
date_published: 2026-10-20
date_found: 2026-10-22
technology: satellite
type: academic-paper
title_en: "Finite-Size CV-QKD for Satellite Quantum Communication under a Hybrid Noise Model"
title_zh: "混合噪声模型下卫星量子通信的有限码长连续变量量子密钥分发"
url: "https://arxiv.org/abs/2610.28353"
source_quality: full
topics: [CV-QKD, finite-size-key, secret-key-rate, hybrid-noise, satellite-quantum-communication, mission-dimensioning]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

Chakraborty, Nag, Chandra, Mukherjee, Koufos and Dianati (arXiv 2610.28353, submitted 20 October 2026) analyze satellite-to-ground continuous-variable quantum key distribution (CV-QKD), which is limited by finite communication windows, channel attenuation and the statistical fluctuations that come with a limited number of exchanged quantum states.

They develop a finite-size framework under a hybrid noise model that combines satellite geometry, atmospheric and propagation losses, quantum Poissonian noise together with classical additive white Gaussian noise, detector imperfections and composable finite-key security under collective attacks. The paper derives a single secret-key-rate (SKR) expression in which the finite-size correction decreases strictly with block size, which the authors say removes an ambiguity between segmented and block-level formulations in earlier treatments, and extends the accounting to the quantum bit error ratio through an explicit parameter-estimation penalty.

Numerical settings include a sea-level ground station, 800 nm atmospheric extinction with a zenith transmittance of 0.94, receiver apertures of 40-60 cm, beam waists of 10-20 cm, reconciliation efficiency 0.65-0.95, and block sizes of 10^6, 10^8 and 10^10 against an asymptotic case of 10^20, with each security term set to 10^-10. At a block size of 10^6 the finite-size SKR vanishes near 7x10^3 km, whereas the asymptotic curve stays positive beyond 3x10^4 km. At 3,500 km a 60 cm aperture gives roughly twice the rate of a 40 cm aperture. The abstract concludes that block size should be treated as a first-class design variable for satellite CV-QKD mission dimensioning. The paper has no limitations section. Collective-attack security and a lognormal fading model suited to weak-to-moderate turbulence are modelling choices; the finite-size terms are carried through their leading n^-1/2 scaling; key rates are scaled by a symbol rate R_s that is used without a stated value (the paper notes the relative comparisons between regimes are independent of it); and empirical validation is listed as future work in the Conclusion.

## Summary (ZH)

Chakraborty、Nag、Chandra、Mukherjee、Koufos 和 Dianati（arXiv 2610.28353，2026 年 10 月 20 日提交）分析星地连续变量量子密钥分发（CV-QKD），其受限于有限的通信窗口、信道衰减，以及因交换量子态数量有限而产生的统计涨落。

他们在混合噪声模型下建立有限码长框架，综合考虑卫星几何、大气与传播损耗、量子泊松噪声与经典加性高斯白噪声并存、探测器非理想性，以及集体攻击下的可组合有限码长安全性。论文推导出单一的密钥率（SKR）表达式，其有限码长修正项随分组长度严格递减，作者称这消除了以往工作中分段式与分组式表述之间的歧义，并通过显式的参数估计惩罚把该计算扩展到量子误码率。

数值设置包括海平面地面站、800 nm 大气消光与 0.94 的天顶透过率、40-60 cm 的接收口径、10-20 cm 的束腰、0.65-0.95 的协调效率，以及 10^6、10^8、10^10 的分组长度（渐近情形取 10^20），各安全项取 10^-10。分组长度为 10^6 时，有限码长 SKR 在约 7x10^3 km 处降为零，而渐近曲线在 3x10^4 km 以外仍为正。在 3,500 km 处，60 cm 口径的速率约为 40 cm 口径的两倍。摘要结论是，在卫星 CV-QKD 任务设计中应把分组长度作为一等设计变量。论文没有单独的局限性章节。仅考虑集体攻击安全性与采用适用于弱到中等湍流的对数正态衰落模型属于建模选择；有限码长项只保留主导的 n^-1/2 标度项；密钥率以符号率 R_s 缩放，但未给出其取值（论文指出各区间的相对比较与之无关）；经验验证在结论中被列为未来工作。

## Key technical points (EN)

- **Problem**: satellite CV-QKD under finite windows, attenuation and a limited number of exchanged states.
- **Model**: hybrid quantum-Poissonian plus classical AWGN noise, detector imperfections, composable finite-key security (total epsilon 4x10^-10), collective attacks.
- **Result form**: one SKR expression with a finite-size correction strictly decreasing in block size; QBER extended with a parameter-estimation penalty.
- **Numbers**: m = 10^6 gives zero SKR near 7x10^3 km versus positive beyond 3x10^4 km asymptotically; 60 cm aperture about 2x the 40 cm rate at 3,500 km.
- **Scope and assumptions**: collective attacks only and lognormal fading (modelling choices); leading n^-1/2 finite-size term; symbol rate R_s used without a stated value; empirical validation listed as future work.

## Key technical points (ZH)

- **问题**：有限窗口、衰减和有限交换态数量下的卫星 CV-QKD。
- **模型**：量子泊松噪声加经典 AWGN 的混合噪声、探测器非理想性、可组合有限码长安全性（总 epsilon 4x10^-10）、集体攻击。
- **结果形式**：单一 SKR 表达式，其有限码长修正随分组长度严格递减；QBER 以参数估计惩罚扩展。
- **数值**：m = 10^6 时 SKR 在约 7x10^3 km 处为零，渐近情形在 3x10^4 km 以外仍为正；3,500 km 处 60 cm 口径约为 40 cm 的两倍速率。
- **范围与假设**：仅集体攻击与对数正态衰落（建模选择）；有限码长项取主导的 n^-1/2 项；符号率 R_s 未给出取值；经验验证列为未来工作。

## Why it matters / what's new (EN)

The paper reframes satellite CV-QKD dimensioning around the number of signals actually exchanged rather than around channel parameters alone. It is a theoretical analysis with numerical results only. The abstract says asymptotic analysis overestimates the feasible altitude "by a factor of several"; the body text wording differs, so the figures above are taken from the reported curves.

## Why it matters / what's new (ZH)

论文把卫星 CV-QKD 的设计围绕实际交换的信号数量展开，而不仅是信道参数。这是一项仅含数值结果的理论分析。摘要称渐近分析会将可行轨道高度高估“数倍”；正文表述有所不同，因此上述数字取自所报告的曲线。

## Images

None.
