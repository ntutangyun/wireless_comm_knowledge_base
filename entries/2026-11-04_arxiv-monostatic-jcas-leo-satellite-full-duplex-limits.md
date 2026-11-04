---
id: 2026-11-04_arxiv-monostatic-jcas-leo-satellite-full-duplex-limits
date_published: 2026-10-31
date_found: 2026-11-04
technology: satellite
type: academic-paper
title_en: "Fundamental Limits and Joint Design for Monostatic Joint Communications and Sensing in LEO Satellites"
title_zh: "LEO 卫星单站通信感知一体化的基本极限与联合设计"
url: "https://arxiv.org/abs/2611.01164"
source_quality: full
topics: [LEO, JCAS, ISAC, full-duplex, self-interference, ADC-quantization, beamforming]
topic_primary: sensing-csi
topics_secondary: [ntn, leo-constellations]
novelty_score: 3
---

## Summary (EN)

Sheemar, Iacovelli, Querol and Chatzinotas (arXiv, 31 Oct 2026) study monostatic joint communication and sensing from a LEO satellite, where one array transmits to K users and listens for echoes from Q ground targets. Because transmission and reception overlap, the system needs full-duplex operation with self-interference (SI) 80 to 100 dB stronger than the ground echo.

The paper builds on one observation: the echo returns milliseconds after transmission (for 300 km altitude and 20 MBd the delay is at least about 4x10^4 symbols), while the onboard SI coupling spans only a few symbols. They show that restricting the analog and digital cancellers to the short SI support loses nothing, and that a least-squares canceller whose support includes the target delay absorbs the coherent echo and cuts radar SINR by a closed-form factor, about 18 dB for a vessel at its zero-Doppler crossing.

Modelling the SI that no linear canceller can reconstruct as spatially white and including ADC quantisation, they derive closed forms for a radar-SINR ceiling, the minimum pre-ADC SI power under a canceller-tap budget, the budget needed for full cancellation, and the sensing weight at which the optimal design switches from communication-oriented to sensing-oriented (about 0.60 in their example, versus 0.5 for an SI-unaware design). A weighted sum of communication and sensing SINRs, each normalised by its half-duplex benchmark, is then maximised over beamformers, sensing covariance, combiners and cancellers with an alternating algorithm using closed-form updates. In simulation (Ka-band link budget per the paper) the joint design gains up to 13% in the normalised objective over a sequential design that cancels SI only at the receiver, and more than 10 dB in downlink and radar SINR with 4-bit ADCs.

## Summary (ZH)

Sheemar、Iacovelli、Querol 与 Chatzinotas（arXiv，2026 年 10 月 31 日）研究 LEO 卫星上的单站通信感知一体化：同一阵列向 K 个用户发射，同时接收 Q 个地面目标的回波。由于收发重叠，系统需要全双工，其自干扰（SI）比地面回波强 80 至 100 dB。

论文基于一个观察：回波在发射后数毫秒才返回（300 km 高度、20 MBd 时时延至少约 4x10^4 个符号），而星上 SI 耦合只跨越几个符号。他们证明把模拟与数字消除器限制在短 SI 支撑内不损失最优性；而支撑中若包含目标时延，最小二乘消除器会吸收相干回波，使雷达 SINR 按闭式因子下降，对过零多普勒的船只约为 18 dB。

将线性消除器无法重建的 SI 建模为空间白噪声并计入 ADC 量化后，他们推导了雷达 SINR 上限、在消除器抽头预算下的最小 ADC 前 SI 功率、完全消除所需的预算，以及最优设计由偏通信转向偏感知的感知权重（其示例约为 0.60，而不考虑 SI 的设计为 0.5）的闭式表达。随后用交替优化算法（各块闭式更新）最大化通信与感知 SINR 的加权和（各自按半双工基准归一化），优化变量包括波束赋形、感知协方差、合并器和消除器。仿真中（论文采用 Ka 频段链路预算），联合设计相对仅在接收端消除 SI 的顺序设计，归一化目标最多提升 13%，在 4 比特 ADC 下下行与雷达 SINR 提升超过 10 dB。

## Key technical points (EN)

- Echo delay dq >= 4x10^4 symbols vs an SI support of a few symbols (300 km, 20 MBd), four orders of magnitude apart.
- Prop. 1: canceller support restricted to the SI span is without loss of optimality; including the target delay absorbs the echo, SINR factor (1 - sinc^2(f_D T_cpi)).
- Radar SINR ceiling: with INR = 47 dB, an SI-knowledge floor of -50 dB leaves a 1.8 dB gap to half-duplex; at -30 dB the gap is 17 dB.
- ADC model SQNR = 6.02b + 1.76 - PAPR; ignoring SI overloads the ADCs.
- Algorithm: quadratic transform, regularised-inverse beamformers, MVDR-type combiners, Sylvester-type cancellers; objective non-decreasing and convergent; the fairness heuristic is not claimed optimal.

## Key technical points (ZH)

- 回波时延 dq >= 4x10^4 个符号，而 SI 支撑仅几个符号（300 km、20 MBd），相差四个数量级。
- 命题 1：消除器支撑限制在 SI 跨度内不损失最优性；包含目标时延会吸收回波，SINR 因子为 (1 - sinc^2(f_D T_cpi))。
- 雷达 SINR 上限：INR = 47 dB 时，SI 知识底限为 -50 dB 与半双工相差 1.8 dB；-30 dB 时相差 17 dB。
- ADC 模型 SQNR = 6.02b + 1.76 - PAPR；忽略 SI 会使 ADC 过载。
- 算法：二次变换、正则化求逆波束赋形、MVDR 型合并器、Sylvester 型消除器；目标函数非减且收敛；公平性启发式不声称最优。

## Why it matters / what's new (EN)

The authors position it against terrestrial full-duplex JCAS work, which treats the echo as contemporaneous with the SI, and against satellite JCAS work they describe as feasibility- or survey-level. It extends the KB's sensing coverage (e.g. the terrestrial 2026-11-02_arxiv-multistatic-isac-5g-nr-prs-deep-learning-clutter-suppression) to a spaceborne monostatic case. Results are simulation-only.

## Why it matters / what's new (ZH)

作者将其与地面全双工 JCAS 工作（把回波视为与 SI 同时到达）以及他们称之为可行性或综述层面的卫星 JCAS 工作相对照。它把 KB 中的感知类条目（如地面场景的 2026-11-02_arxiv-multistatic-isac-5g-nr-prs-deep-learning-clutter-suppression）扩展到星载单站情形。结果仅为仿真。
