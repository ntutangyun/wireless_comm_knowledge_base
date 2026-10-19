---
id: 2026-10-19_arxiv-sim-leo-broadcasting-one-shot-beam-tracking
date_published: 2026-10-04
date_found: 2026-10-19
technology: satellite
type: academic-paper
title_en: "One-Shot Beam Tracking for Stacked Intelligent Metasurfaces-Assisted LEO Broadcasting"
title_zh: "面向堆叠智能超表面辅助 LEO 广播的单步波束跟踪"
url: "https://arxiv.org/abs/2610.05520"
source_quality: full
topics: [stacked-intelligent-metasurface, SIM, beam-tracking, LEO, Gauss-Newton, orbital-prediction, 44-GHz]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

Sheemar, Iacovelli, Solanki, Khan and Chatzinotas (SnT, University of Luxembourg; arXiv 2610.05520, submitted 4 October 2026) present a letter on beam tracking for a LEO satellite that broadcasts a common symbol to K single-antenna terminals through a stacked intelligent metasurface (SIM): a single RF feed illuminating an L-layer SIM with N meta-atoms per layer, over a line-of-sight channel. Because orbital motion is predictable, the method propagates it through the LoS geometry to forecast how the user SNR profile will vary over the next interval, and an analytical multilayer Jacobian relates that variation to the LN SIM phase coefficients.

Tracking is posed as preserving the normalised SNR profile and solved with one regularised Gauss-Newton correction (one Jacobian evaluation and one KxK linear solve), avoiding iterative re-optimisation. A tracking-error bound separates the regularisation residual from the second-order Taylor remainder. Under a circular Keplerian orbit model, satellite position follows an exact second-order recurrence (the simulated ground-truth orbit includes J2 perturbation, so results include model mismatch); Doppler and delay are assumed already compensated, so only spatial tracking is addressed.

Simulation settings: 1000 km altitude, 53 degree inclination, 44 GHz carrier, 50 MHz bandwidth, 30 dBW transmit power, 600 km coverage diameter, K = 9 terminals, 1 s tracking interval, 6-bit phase resolution, averaged over 50 realisations. At t = 60 s the tracker reaches about 2.4 bit/s/Hz for (L, N) = (2, 100) and 3.7 bit/s/Hz for (4, 225) versus about 2.55 and 4.0 for full re-optimisation (projected gradient ascent), i.e. roughly 94% and 92% of the re-optimised rate. At N = 225, runtime is about 0.7 ms (L = 2) and 1.4 ms (L = 4) versus about 230 ms and 370 ms, roughly 350x and 260x faster. A fixed SIM loses alignment rapidly, though no rate is given.

Limits evident from the setup: LoS only, single satellite, one broadcast symbol; the error bound applies to unconstrained continuous phases, not to clipping or quantisation; runtimes were measured in MATLAB R2024b on an Intel Core i7-12700; the baselines are a fixed SIM and full re-optimisation.

## Summary (ZH)

Sheemar、Iacovelli、Solanki、Khan 和 Chatzinotas（卢森堡大学 SnT；arXiv 2610.05520，2026 年 10 月 4 日提交）的快报研究 LEO 卫星通过堆叠智能超表面（SIM）向 K 个单天线终端广播同一符号的波束跟踪：单个射频馈源照射 L 层、每层 N 个超原子的 SIM，信道为视距。由于轨道运动可预测，该方法将其经 LoS 几何传播，预测下一时间间隔内用户 SNR 分布的变化，并用解析的多层雅可比矩阵把该变化与 LN 个 SIM 相位系数联系起来。

跟踪被表述为保持归一化 SNR 分布，仅用一次正则化 Gauss-Newton 修正（一次雅可比计算和一次 KxK 线性求解）求解，避免迭代重优化。跟踪误差界把正则化残差与二阶泰勒余项分开。在圆形开普勒轨道模型下，卫星位置遵循精确的二阶递推（仿真真值轨道含 J2 摄动，结果包含模型失配）；多普勒和时延假定已补偿，因此仅处理空间跟踪。

仿真设置：高度 1000 km，倾角 53 度，载波 44 GHz，带宽 50 MHz，发射功率 30 dBW，覆盖直径 600 km，K = 9 个终端，跟踪间隔 1 s，6 比特相位分辨率，50 次实现平均。t = 60 s 时，所提跟踪器在 (L, N) = (2, 100) 下约 2.4 bit/s/Hz、(4, 225) 下约 3.7 bit/s/Hz，而完全重优化（投影梯度上升）约为 2.55 和 4.0，即重优化速率的约 94% 和 92%。N = 225 时运行时间约 0.7 ms（L = 2）和 1.4 ms（L = 4），而重优化约 230 ms 和 370 ms，快约 350 倍和 260 倍。固定 SIM 会迅速失去对准，但文中未给出速率。

从设置可见的局限：仅视距、单卫星、单个广播符号；误差界仅适用于无约束连续相位，不涵盖截断与量化；运行时间在 Intel Core i7-12700 上用 MATLAB R2024b 测得；基线为固定 SIM 与完全重优化。

## Key technical points (EN)

- **Model**: single-feed L-layer SIM, N atoms per layer, K = 9 terminals, LoS, 44 GHz LEO at 1000 km.
- **Method**: orbit-propagated SNR-profile forecast plus a single regularised Gauss-Newton step with analytic multilayer Jacobian.
- **Guarantee**: tracking-error bound separating regularisation residual from second-order Taylor remainder.
- **Results**: about 92-94% of re-optimised rate at roughly 260-350x lower runtime (0.7-1.4 ms vs 230-370 ms).
- **Limits**: LoS-only, single satellite, ideal-phase theory, MATLAB single-CPU timing.

## Key technical points (ZH)

- **模型**：单馈源 L 层 SIM，每层 N 个原子，K = 9 终端，视距，1000 km 高度 44 GHz LEO。
- **方法**：轨道传播的 SNR 分布预测 + 带解析多层雅可比的单步正则化 Gauss-Newton。
- **保证**：把正则化残差与二阶泰勒余项分开的跟踪误差界。
- **结果**：达到重优化速率的约 92-94%，运行时间低约 260-350 倍（0.7-1.4 ms 对 230-370 ms）。
- **局限**：仅视距、单卫星、理想相位理论、MATLAB 单 CPU 计时。

## Why it matters / what's new (EN)

The letter replaces iterative SIM phase re-optimisation with a predictive one-step update for a moving LEO satellite, trading roughly 6-8% of rate for a large runtime reduction in its simulations. All evidence is simulated under LoS assumptions.

## Why it matters / what's new (ZH)

该快报用预测式单步更新取代移动 LEO 卫星上的迭代 SIM 相位重优化，在其仿真中以约 6-8% 的速率损失换取大幅运行时间缩减。所有证据均为视距假设下的仿真。

## Images

None.
