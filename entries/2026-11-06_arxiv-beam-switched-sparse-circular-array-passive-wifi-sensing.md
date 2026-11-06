---
id: 2026-11-06_arxiv-beam-switched-sparse-circular-array-passive-wifi-sensing
date_published: 2026-11-02
date_found: 2026-11-06
technology: wifi
type: academic-paper
title_en: "A Beam-Switched Sparse Circular Array for Passive Wi-Fi Sensing"
title_zh: "用于被动 Wi-Fi 感知的波束切换稀疏圆阵"
url: "https://arxiv.org/abs/2611.02378"
source_quality: full
topics: [Wi-Fi sensing, AoA estimation, circular array, grating lobes, beam switching, 4 RF chains]
topic_primary: sensing-csi
topics_secondary: [wifi7-deployment]
novelty_score: 3
---

## Summary (EN)

The paper (arXiv:2611.02378, eess.SP; Yang Chen, Riccardo Bersan, Daniele Piazza, Stefano Savazzi and Michele D'Amico; 5 pages, 8 figures; submitted to EuCAP 2027) targets angle-of-arrival (AoA) estimation for Wi-Fi sensing over the full azimuth plane. A half-wavelength uniform linear array has a front-back mirror ambiguity. A uniform circular array (UCA) removes it, but a commercial access point has only four RF chains, and spreading four elements over a large aperture undersamples the array and produces strong grating lobes.

The authors build a generalized array manifold as the Hadamard product of a phase-delay term from element positions and a directional gain term g_m(theta) = 1 + beta cos(theta - phi_m), each element's main lobe pointing radially outward; beta = 0.8 gives a nominal front-to-back ratio of about 19.1 dB. Their analysis states that element directivity cannot remove grating lobes in a 4-element linear array, while in a 4-element UCA rear-facing elements attenuate rearward grating lobes by roughly 10 to 15 dB but leave a "tripartite" main-lobe-plus-two-sidelobe spectrum whose sidelobe margin shrinks to about 1 dB at plus or minus 15 degrees and whose pattern is severely distorted at 20 degrees, making peak picking fragile.

The proposed architecture places eight directional antennas on the same aperture, forming two 4-element UCAs with group B rotated 45 degrees relative to group A. Four SPDT switches multiplex the two groups onto the four RF chains, alternating per packet burst; the inactive group keeps its last CSI snapshot, and communication is not interrupted. The two normalized spatial spectra are fused by a geometric mean, P_syn = sqrt(P_A * P_B), so that main lobes align at the true AoA while the sidelobe peaks of one group fall into the nulls of the other; the paper argues this needs only relaxed scene coherence rather than strict phase coherence.

The simulation uses a 5.745 GHz carrier, a single line-of-sight source in AWGN, one snapshot and one carrier, matched filtering with a 0.5-degree grid, and 400 Monte Carlo trials per angle at 5-degree steps; an outlier is an estimate more than 15 degrees from the truth. The beam-switched UCA (4 RF chains, 8 elements) tracks the omnidirectional 8-element UCA closely and reaches zero outliers at about 7.5 dB SNR; the directional 8-element UCA is best. In a dynamic tracking test (target moving within plus or minus 45 degrees at a 20 Hz CSI rate, 0 dB SNR) the outlier rate falls from 42.7% for the directional 4-element UCA to 15.7% for the beam-switched array.

## Summary (ZH)

该论文（arXiv:2611.02378，eess.SP；作者 Yang Chen、Riccardo Bersan、Daniele Piazza、Stefano Savazzi、Michele D'Amico；5 页 8 图；投稿 EuCAP 2027）面向 Wi-Fi 感知的全方位角到达角（AoA）估计。半波长均匀线阵存在前后镜像模糊；均匀圆阵（UCA）可消除它，但商用接入点只有 4 条射频链，把 4 个阵元铺在较大孔径上会造成空间欠采样并产生强栅瓣。

作者构建了广义阵列流形，为阵元位置相位延迟项与方向性增益项 g_m(theta) = 1 + beta cos(theta - phi_m) 的 Hadamard 积，每个阵元主瓣指向径向向外；beta = 0.8 对应标称前后比约 19.1 dB。其分析称：4 阵元线阵中阵元方向性无法消除栅瓣；4 阵元 UCA 中朝后阵元可使后向栅瓣衰减约 10 至 15 dB，但留下"三段式"的主瓣加两旁瓣谱形，在 ±15 度附近旁瓣裕量缩至约 1 dB，在 20 度处谱形严重畸变，使峰值拾取变得脆弱。

所提架构在同一孔径上放置 8 个定向天线，组成两个 4 阵元 UCA，B 组相对 A 组旋转 45 度；4 个 SPDT 开关把两组复用到 4 条射频链，按数据包突发交替；非激活组保留其最近一次 CSI 快照，通信不中断。两个归一化空间谱以几何平均 P_syn = sqrt(P_A * P_B) 融合，使主瓣在真实 AoA 处对齐，而一组的旁瓣峰落入另一组的零陷；论文认为这只需放宽的场景相干性，而非严格的相位相干。

仿真采用 5.745 GHz 载频、AWGN 中单个视距源、单快照单载波、0.5 度网格的匹配滤波，每个角度 400 次蒙特卡洛、5 度步进；与真值相差超过 15 度记为离群。波束切换 UCA（4 条射频链、8 阵元）与全向 8 阵元 UCA 曲线接近，约 7.5 dB 信噪比时离群率降为零；定向 8 阵元 UCA 最优。在动态跟踪测试中（目标在 ±45 度内往返，CSI 速率 20 Hz，信噪比 0 dB），离群率由定向 4 阵元 UCA 的 42.7% 降至波束切换阵的 15.7%。

## Key technical points (EN)

- Problem: full-azimuth AoA from only four RF chains; ULA mirror ambiguity versus UCA grating lobes under undersampling.
- Model: manifold = phase-delay term (element positions) times directional gain g_m(theta) = 1 + beta cos(theta - phi_m), beta = 0.8, about 19.1 dB front-to-back.
- Geometry: reference 8-element UCA with 0.5 lambda spacing, radius about 0.65 lambda; a 4-element UCA on the same aperture has about 0.92 lambda spacing.
- Architecture: eight directional antennas = two 4-element UCAs rotated 45 degrees; four SPDT switches; groups alternate per packet burst; last CSI of the idle group retained.
- Fusion: geometric mean of the two normalized spectra.
- Setup: 5.745 GHz, LOS, AWGN, single snapshot, 0.5-degree grid, 400 trials per angle, outlier threshold 15 degrees.
- Results: beam-switched UCA tracks the omnidirectional 8-element UCA, zero outliers from about 7.5 dB SNR; dynamic tracking at 0 dB SNR outlier rate 42.7% (directional 4-UCA) to 15.7% (beam-switched).
- Scope: simulation only, single LOS source, parametric pattern assumed (beta = 0.8). Not modelled (reviewer's reading, not stated by the authors): multipath (LOS/AWGN chosen to isolate array behaviour), interference, mutual coupling, calibration error; each group's CSI is refreshed only on alternate bursts.

## Key technical points (ZH)

- 问题：仅用 4 条射频链实现全方位 AoA；线阵的镜像模糊与欠采样下圆阵的栅瓣。
- 模型：流形 = 阵元位置相位延迟项乘以方向性增益 g_m(theta) = 1 + beta cos(theta - phi_m)，beta = 0.8，前后比约 19.1 dB。
- 几何：参考 8 阵元 UCA，间距 0.5 波长、半径约 0.65 波长；同孔径的 4 阵元 UCA 间距约 0.92 波长。
- 架构：8 个定向天线 = 两个相互旋转 45 度的 4 阵元 UCA；4 个 SPDT 开关；两组按数据包突发交替；空闲组保留其最近 CSI。
- 融合：两个归一化谱的几何平均。
- 设置：5.745 GHz，视距，AWGN，单快照，0.5 度网格，每角度 400 次试验，离群阈值 15 度。
- 结果：波束切换 UCA 接近全向 8 阵元 UCA，约 7.5 dB 信噪比起离群率为零；0 dB 动态跟踪下离群率由 42.7%（定向 4 阵元 UCA）降至 15.7%（波束切换）。
- 范围：仅仿真，单一视距源，假设参数化方向图（beta = 0.8）。未建模（编者归纳，非作者自述）：多径（选用视距/AWGN 以隔离阵列特性）、干扰、互耦与校准误差；每组 CSI 仅在交替的突发中更新。

## Why it matters / what's new (EN)

The contribution is an antenna-side answer to a constraint the paper states directly: Wi-Fi chipsets expose four RF chains, so denser or larger arrays are not available to a sensing receiver. It adds element directivity to the array model and alternates two rotated sub-arrays per packet burst, without interrupting communication. This complements the KB's CSI-based sensing entries (the mechanical-antenna work in 2026-11-03_arxiv-model-sharing-bayesian-optimization-mechanical-wifi-antenna-control addresses a different, capacity-oriented antenna problem). All numbers are from simulation.

## Why it matters / what's new (ZH)

该工作是对论文明确指出的限制所给出的天线侧回答：Wi-Fi 芯片只提供 4 条射频链，感知接收端无法使用更密或更大的阵列。它把阵元方向性加入阵列模型，并按数据包突发交替两个旋转的子阵，同时不打断通信。这与本 KB 中基于 CSI 的感知条目形成互补（2026-11-03_arxiv-model-sharing-bayesian-optimization-mechanical-wifi-antenna-control 的机械天线工作解决的是另一个面向容量的天线问题）。所有数字均来自仿真。

## Images

![Outlier rate versus SNR for the compared arrays | 各阵列离群率随信噪比变化](https://arxiv.org/html/2611.02378v1/fig5b.png)
