---
id: 2026-11-19_arxiv-rotation-enhanced-swn-music-gnss-doa-under-jamming
date_published: 2026-11-17
date_found: 2026-11-19
type: academic-paper
technology: satellite
title_en: "Robust DOA Estimation for GNSS-like Signals Under Jamming: A Rotation-Enhanced SWN-MUSIC Approach"
title_zh: "干扰环境下类 GNSS 信号的稳健波达方向估计：旋转增强的 SWN-MUSIC 方法"
url: "https://arxiv.org/abs/2611.22574"
source_quality: full
topics: [GNSS, DOA estimation, MUSIC, jamming, spoofing detection, antenna array, rotational diversity]
topic_primary: sat-ai
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Jiang, Cui, Liu, Zhao and Lu (Tsinghua University; arXiv 2611.22574, 17 Nov 2026, eess.SP, submitted to IEEE) study direction-of-arrival (DOA) estimation of GNSS-like signals with an antenna array in a jamming environment, a step used for spoofing detection and countermeasures. Starting from the Spatial Whitening and Normalized MUSIC (SWN-MUSIC) estimator, they note that accuracy depends strongly on the signal-of-interest (SOI) direction for a given jamming and array configuration, a behaviour they name the Direction-dependent Inaccuracy Phenomenon (DIP). They identify two geometric ill-conditions between the array manifold and the jamming subspace behind it: observability loss, where the SOI steering vector lies in the jamming subspace and is suppressed with the jammers, and manifold ambiguity, where a combination of SOI and jamming steering vectors coincides with a spurious direction so that peaks compete with the true one. Because these arise from geometry, they argue algorithmic refinement alone cannot fix them. They propose rotational diversity, treating array attitude as a controllable sensing resource: the array is rotated in-plane about its boresight through several predetermined yaw angles, SWN-MUSIC runs at each, a Cramer-Rao-bound-based reliability metric (evaluated at the estimate) filters estimates, and qualified estimates are fused. Three fusion rules are compared: minimum-metric selection, arithmetic averaging and weighted averaging, applied in the direction-vector domain. MATLAB simulations use a seven-element hexagonal array, GPS L1 C/A, 5 MHz bandwidth and sampling, 30 dB jamming-to-noise ratio per jammer with four static wideband Gaussian jammers, and -25 dB SNR, with five test satellites and 500 Monte Carlo trials; the authors report substantial accuracy gains for satellites in the previously poor directions without degrading well-conditioned ones. Results are simulation only. The paper states real jamming/spoofing experiments are avoided for legal and risk reasons.

## Summary (ZH)

Jiang、Cui、Liu、Zhao 与 Lu（清华大学；arXiv 2611.22574，2026 年 11 月 17 日，eess.SP，已提交 IEEE）研究干扰环境下用天线阵估计类 GNSS 信号波达方向（DOA），该步骤用于欺骗检测与对抗措施。他们以空间白化归一化 MUSIC（SWN-MUSIC）估计器为起点，指出在给定干扰与阵列配置下，精度强烈依赖于目标信号（SOI）方向，并将这一现象命名为方向依赖性不准确现象（DIP）。他们找出阵列流形与干扰子空间之间的两类几何病态：可观测性丧失，即 SOI 导向矢量落入干扰子空间并与干扰一同被抑制；流形模糊，即 SOI 与干扰导向矢量的组合与某一伪方向重合，使伪峰与真峰竞争。由于它们源于几何，作者认为仅靠算法改进无法解决。他们提出旋转分集，把阵列姿态视为可控的感知资源：阵列绕视轴在面内旋转到若干预定偏航角，在每个角度运行 SWN-MUSIC，用基于克拉美罗界的可靠性指标（以估计值代入计算）筛选估计，再融合合格估计。比较了三种融合规则：最小指标选择、算术平均与加权平均，均在方向矢量域进行。MATLAB 仿真采用七阵元六边形阵列、GPS L1 C/A、5 MHz 带宽与采样率、四个静态宽带高斯干扰源（每个干噪比 30 dB）、信噪比 -25 dB、五颗测试卫星与 500 次蒙特卡洛；作者报告此前方向较差的卫星精度显著提升，且不降低良态方向的性能。结果仅为仿真；论文称出于法律与风险原因未做真实干扰/欺骗实验。

## Key technical points (EN)

- **DIP mechanisms:** (1) observability loss, SOI steering vector within the jamming subspace; (2) manifold ambiguity, SOI-plus-jammer combinations aliasing to spurious directions.
- **Method:** in-plane (yaw-only) rotation about boresight, step-and-stare acquisition, quasi-static SOI direction assumed; SWN-MUSIC at each attitude; reliability metric from the CRLB evaluated at the estimate; fusion by min-metric selection, arithmetic mean or weighted mean in the direction-vector domain.
- **Setup:** seven-element hexagonal array; GPS L1 C/A; 5 MHz; four jammers at 30 dB JNR; -25 dB SNR; five satellites; 500 Monte Carlo trials.
- **Result (simulation):** large accuracy improvement for satellites in previously inaccurate directions without loss elsewhere; fusion strategy and rotation increment are also examined.
- **Limits:** no hardware or live-signal test; static jammers only.

## Key technical points (ZH)

- **DIP 机理：** (1) 可观测性丧失，SOI 导向矢量位于干扰子空间内；(2) 流形模糊，SOI 与干扰源组合混叠到伪方向。
- **方法：** 绕视轴面内（仅偏航）旋转，步进—凝视采集，假定 SOI 方向准静止；每个姿态运行 SWN-MUSIC；可靠性指标来自以估计值代入的 CRLB；在方向矢量域按最小指标选择、算术平均或加权平均融合。
- **设置：** 七阵元六边形阵列；GPS L1 C/A；5 MHz；四个干扰源干噪比 30 dB；信噪比 -25 dB；五颗卫星；500 次蒙特卡洛。
- **结果（仿真）：** 此前不准方向的卫星精度大幅提升，其他方向无损失；同时考察了融合策略与旋转增量的影响。
- **局限：** 无硬件或实采信号测试；仅静态干扰源。

## Why it matters / what's new (EN)

This extends the KB's GNSS-security thread (spoofing, jamming and PNT items filed under sat-ai by convention) with a receiver-side antenna-array method rather than a signal-level or satellite-side one. The paper's contribution is an explanation of why DOA accuracy collapses in some directions under jamming and a way to use array attitude to avoid those directions. It is a GNSS receiver study, not a communications-link study, and results are simulated.

## Why it matters / what's new (ZH)

本条目以接收端天线阵方法（而非信号级或卫星侧方法）扩展了知识库的 GNSS 安全脉络（欺骗、干扰与 PNT 条目，按惯例归入 sat-ai）。论文的贡献在于解释了干扰下 DOA 精度为何在某些方向上崩溃，并给出利用阵列姿态避开这些方向的办法。它属于 GNSS 接收机研究而非通信链路研究，结果为仿真。

## Images

None.
