---
id: 2026-09-23_arxiv-integrated-optical-receiver-isl-tracking
date_published: 2026-09-22
date_found: 2026-09-23
technology: satellite
type: academic-paper
title_en: "Integrated Optical Receiver for Communication and Fine Tracking in Inter-Satellite Links"
title_zh: "面向星间链路的通信与精跟踪一体化光学接收机"
url: "https://arxiv.org/abs/2609.25971"
source_quality: full
topics: [inter-satellite-link, optical-receiver, fine-tracking, Fresnel-optics, angle-of-arrival]
topic_primary: leo-constellations
novelty_score: 2
---

## Summary (EN)

Ghanbari (Hamad Bin Khalifa University, Qatar), Dabiri (University of Cambridge), Alomainy (Queen Mary University of London), Abbasi (University of Glasgow), Hasna (Qatar University), and Qaraqe (Hamad Bin Khalifa University) submitted this paper on 2026-09-22. Inter-satellite optical links need both high-precision fine tracking (to keep two moving satellites' narrow optical beams aligned) and enough collected power for data communication, but conventional terminals split these two functions across separate optical branches using a beam splitter, adding component count, alignment complexity, and dividing the receiver's already-limited power budget between the two functions.

The paper proposes a single dual-function receiver plane, intentionally placed slightly out of focus, that combines a central circular lens for data collection with a surrounding annular four-segment quadrant detector for angle-of-arrival tracking, separated by narrow guard gaps. Using a scalar Fresnel wave-optics model of propagation through the defocused plane, the authors derive the optical power landing on the central lens and each tracking segment as a function of the residual pointing angle, then build a nonlinear two-dimensional calibration (rather than assuming a simple linear estimator) that inverts the four segment-power readings into an angle-of-arrival estimate, and a noise-aware worst-case angular-accuracy metric that accounts for shot and thermal noise in each tracking channel. The central-lens diameter and the amount of intentional defocus are then jointly optimized to maximize the guaranteed fine-tracking range subject to keeping at least 25% of the receiver-plane power on the data path. At a representative received power of -40 dBm, the optimized design (170 micron lens diameter, 0.45 mm defocus) delivers a 25.6% data-power fraction, 9.18 microrad on-axis tracking error, and a guaranteed fine-tracking range of 0.65 mrad within a 10-microrad accuracy requirement; the usable range widens to 1.33 mrad at -30 dBm and collapses to zero at -45 dBm, where even on-axis error already exceeds the accuracy requirement.

## Summary (ZH)

Ghanbari（卡塔尔哈马德本哈利法大学）、Dabiri（剑桥大学）、Alomainy（伦敦玛丽女王大学）、Abbasi（格拉斯哥大学）、Hasna（卡塔尔大学）与 Qaraqe（哈马德本哈利法大学）于 2026 年 9 月 22 日提交本文。星间光链路既需要高精度精跟踪（以保持两颗相对运动卫星之间狭窄光束的对准），又需要收集足够的功率用于数据通信，但传统终端通常使用分光器将这两项功能分置于不同光学支路，由此增加了器件数量、对准复杂度，并将接收机本已有限的功率预算在两项功能之间进行分割。

本文提出了一种单一的双功能接收平面，该平面被有意置于略微离焦的位置，将用于数据采集的中心圆形透镜与围绕其周围、用于到达角跟踪的环形四象限探测器相结合，两者之间以窄保护间隙隔开。作者基于标量菲涅尔波动光学模型描述光场穿过离焦平面的传播过程，推导出中心透镜及各跟踪象限接收到的光功率与剩余指向角之间的函数关系；进而构建了一种非线性二维标定方法（而非假设简单的线性估计器），将四个象限的功率读数反演为到达角估计值，并给出一种考虑各跟踪通道散粒噪声与热噪声的、噪声感知的最坏情况角精度指标。随后联合优化中心透镜直径与有意离焦量，在保证接收平面至少 25% 功率用于数据通路的约束下，最大化可保证的精跟踪范围。在代表性接收功率 -40 dBm 下，优化设计（透镜直径 170 微米，离焦量 0.45 毫米）实现了 25.6% 的数据功率占比、9.18 微弧度的轴上跟踪误差，以及在 10 微弧度精度要求下 0.65 毫弧度的可保证精跟踪范围；该可用范围在 -30 dBm 时扩大到 1.33 毫弧度，而在 -45 dBm 时降为零——此时即使轴上误差也已超出精度要求。

## Key technical points (EN)

- **Architecture**: single defocused receiver plane combining a central data lens (diameter Dc) with an annular four-segment tracking quadrant detector (Q1-Q4), separated by radial and cross-shaped guard gaps; receiver plane placed at zR = f - delta_z (delta_z > 0 is the intentional defocus).
- **Model**: scalar paraxial Fresnel diffraction propagates the tilted input wavefront through the primary lens to the defocused receiver plane; central-lens power Pc and the four segment powers are obtained by integrating the resulting irradiance over each region.
- **Tracking estimator**: differential signals Sx, Sy formed from the four segment powers are inverted via a numerically computed nonlinear 2D calibration map (not a linear approximation), preserving full 2D coupling; on-axis angular sensitivity reported at 9.72x10^2 per radian with negligible cross-coupling.
- **Joint optimization**: central-lens diameter Dc and defocus delta_z jointly optimized to maximize the worst-case guaranteed fine-tracking radius theta_10 (largest radius with RMSE under 10 microrad for all azimuths up to that radius) subject to Pc/P_plane >= 0.25 at zero residual angle.
- **Numerical results at design power -40 dBm (100 nW)**: optimum Dc* = 170 micron, delta_z* = 0.450 mm, data-power fraction 25.60%, on-axis RMSE 9.18 microrad, guaranteed tracking range theta_10 = 0.650 mrad; range grows to 1.12 mrad at -35 dBm and 1.33 mrad at -30 dBm, and collapses to zero at -45 dBm (on-axis RMSE 28.56 microrad already exceeds the 10-microrad requirement).

## Key technical points (ZH)

- **架构**：单一离焦接收平面，将中心数据透镜（直径 Dc）与周围环形四象限跟踪探测器（Q1-Q4）结合，两者之间由径向及十字形保护间隙隔开；接收平面位于 zR = f − Δz 处（Δz > 0 为有意离焦量）。
- **模型**：采用标量近轴菲涅尔衍射描述倾斜输入波前经主透镜传播至离焦接收平面的过程；对相应区域的辐照度积分即可得到中心透镜功率 Pc 及四个象限的功率。
- **跟踪估计**：由四象限功率构造出差分信号 Sx、Sy，通过数值计算的非线性二维标定映射（而非线性近似）将其反演为到达角估计，保留完整的二维耦合特性；报告的轴上角度灵敏度为每弧度 9.72×10²，交叉耦合可忽略。
- **联合优化**：联合优化中心透镜直径 Dc 与离焦量 Δz，在零残余角处满足 Pc/P_plane ≥ 0.25 的约束下，最大化最坏情况下可保证的精跟踪半径 θ₁₀（即在该半径内所有方位角下 RMSE 均不超过 10 微弧度的最大半径）。
- **设计功率 -40 dBm（100 nW）下的数值结果**：最优 Dc* = 170 微米，Δz* = 0.450 毫米，数据功率占比 25.60%，轴上 RMSE 为 9.18 微弧度，可保证跟踪范围 θ₁₀ = 0.650 毫弧度；该范围在 -35 dBm 时增至 1.12 毫弧度，在 -30 dBm 时增至 1.33 毫弧度，而在 -45 dBm 时降为零（轴上 RMSE 已达 28.56 微弧度，超出 10 微弧度要求）。

## Why it matters / what's new (EN)

This KB already covers optical inter-satellite-link relaying (the 2026-09-02 all-optical regenerative relay entry) and joint pointing-jitter channel modeling (2609.17431, ingested 2026-09-17), but this paper works one level lower, at the receiver's own optics: it gives a wave-optics-based, jointly optimized receiver-level benchmark for how to share a single defocused focal plane between the communication and fine-tracking functions of an inter-satellite optical terminal, rather than treating the tracking subsystem as a separate beam-split branch — a receiver-design detail this KB's ISL coverage has not previously captured.

## Why it matters / what's new (ZH)

知识库已收录关于星间光链路中继（2026-09-02 全光再生中继条目）以及联合指向抖动信道建模（2609.17431，于 2026-09-17 收录）的条目，而本文的工作层级更深入到接收机自身的光学设计：它给出了一个基于波动光学、联合优化的接收机级基准方案，说明如何在星间光学终端中让通信与精跟踪两项功能共享同一个离焦焦平面，而非将跟踪子系统视为独立的分光支路——这是知识库此前星间链路相关条目尚未涉及的接收机设计细节。

## Images

None.
