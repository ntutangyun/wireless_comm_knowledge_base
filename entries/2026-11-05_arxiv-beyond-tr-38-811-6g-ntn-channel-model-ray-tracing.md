---
id: 2026-11-05_arxiv-beyond-tr-38-811-6g-ntn-channel-model-ray-tracing
date_published: 2026-11-02
date_found: 2026-11-05
type: academic-paper
technology: cellular
title_en: "Beyond TR 38.811 for 6G NTN Channel Models"
title_zh: "超越 TR 38.811：面向 6G NTN 的信道模型"
url: "https://arxiv.org/abs/2611.03869"
source_quality: full
topics: [NTN, TR-38.811, channel-model, ray-tracing, K-factor, clutter-loss, Doppler-spread, Ku-band, Sionna-RT]
topic_primary: ntn
topics_secondary: [6g-vision, 5g-nr]
novelty_score: 3
---

## Summary (EN)

Kuan-Po Chiu, Aaron Jacob Buck and Sumit Roy (University of Washington) examine the satellite channel model that 3GPP still uses for NTN link and network evaluation, TR 38.811 (last revised 2020), as 3GPP extends 6G NTN to S, Ku and Ka bands. The paper lists six issues with that model: parameter tables built from a few site-specific environments (several simply averaged or copied from terrestrial TR 38.901 values), a HAPS at 20 km used as a stand-in for LEO in most tables, non-reproducible methodology, no Ku-band parameters, a single common Doppler shift with no satellite-induced Doppler spread, and a generator that drops the mean angle of arrival of non-direct paths.

To re-derive the parameters, the authors run Sionna RT (with NTN-specific modifications) over randomized urban and rural scenes generated from ITU-R P.1410 building statistics (ten 2 km x 2 km scenes per scenario, 1000 outdoor UEs each, a 600 km LEO satellite propagated with SGP4, elevations 10 to 90 degrees at S 2 GHz, Ku 12 GHz and Ka 20 GHz). The source code, dataset and parameter tables are released publicly.

## Summary (ZH)

Kuan-Po Chiu、Aaron Jacob Buck 与 Sumit Roy（华盛顿大学）审视了 3GPP 目前仍用于 NTN 链路与网络评估的卫星信道模型 TR 38.811（2020 年最后修订），而 3GPP 正将 6G NTN 扩展到 S、Ku 和 Ka 频段。论文列出该模型的六个问题：参数表基于少数特定场景（部分直接取平均或照搬地面 TR 38.901 的数值）；多数表格以 20 km 的 HAPS 代替 LEO；方法不透明、难以复现；缺少 Ku 频段参数；只有统一的卫星多普勒频移，没有卫星运动引起的多普勒扩展；信道生成器丢弃了非直达径的平均到达角。

为重新推导参数，作者使用经 NTN 专门修改的 Sionna RT，在依据 ITU-R P.1410 建筑统计随机生成的城区与乡村场景上做射线追踪（每种场景 10 个 2 km x 2 km 场景，每个场景 1000 个室外 UE，600 km LEO 卫星按 SGP4 传播，仰角 10 至 90 度，S 2 GHz、Ku 12 GHz、Ka 20 GHz）。源代码、数据集和参数表均已公开。

## Key technical points (EN)

- K-factor: TR 38.811 predicts a decreasing K-factor with elevation, which the ray tracing (and a stochastic-geometry baseline from the authors' companion work) contradicts. Urban S-band at 10 degrees: 31.8 dB in TR 38.811 versus 2.5 dB from ray tracing; the largest gap at 10 degrees is 29.3 dB.
- Clutter loss: ray-traced NLOS clutter loss is well below the table values, e.g. urban S-band at 30 degrees, TR 38.811 is 16.6 dB higher; Ka-band urban clutter loss in TR 38.811 exceeds the ray-tracing estimates by more than 20 dB at low elevation (the abstract states more than 15 dB). The ray-traced values agree with ITU-R P.2108-1 within 3 dB at Ku and Ka.
- Shadow fading: ray-traced LOS shadow fading stays below 1 dB, versus 4 dB (the terrestrial urban-macro value) in TR 38.811.
- Delay spread: rural delay spread is underestimated at low elevation and its elevation trend is inconsistent with ray tracing; the diffuse scattering omitted by the stochastic-geometry model adds roughly 3-45 ns (LOS) and 20-120 ns (NLOS).
- Ku band: the paper supplies Ku-band parameters missing from TR 38.811; NLOS clutter loss at Ka exceeds S-band, so S-band parameters should not be reused at Ku.
- Satellite-induced Doppler spread: RMS spread is zero in TR 38.811; ray tracing gives, for a stationary UE, peaks of 6.1 Hz (urban) and 7.8 Hz (rural) at Ka band near 50 degrees elevation, i.e. coherence times of about 26 ms and 20 ms, comparable to a 20 ms NR SRS periodicity. A HAPS at 20 m/s has a 9-13 times lower angular rate than a 600 km LEO satellite.
- Directional antennas: with a 16x16 Ka-band receive array, the unmodified TR 38.811 generator underestimates the effective K-factor by up to 50 dB at high elevation. A modified generator that adds one parameter (the mean arrival angle of non-direct paths) reproduces ray-tracing K within about 3 dB at 20-80 degrees elevation, with over/under-estimation at the extremes from the compact Laplacian approximation.
- Example effect on link margin: at 10 degrees, the TR 38.811 rural K-factor of 24.7 dB implies a 0.9 dB fading margin for 1% outage with one antenna, versus 13.6 dB at the ray-tracing K of 4.8 dB.

## Key technical points (ZH)

- K 因子：TR 38.811 预测 K 因子随仰角下降，而射线追踪（以及作者配套工作中的随机几何基线）结论相反。城区 S 频段 10 度时，TR 38.811 为 31.8 dB，射线追踪为 2.5 dB；10 度处最大差距为 29.3 dB。
- 杂波损耗：射线追踪得到的 NLOS 杂波损耗明显低于表格值，例如城区 S 频段 30 度时 TR 38.811 高出 16.6 dB；低仰角下 Ka 频段城区杂波损耗 TR 38.811 比射线追踪高出 20 dB 以上（摘要表述为 15 dB 以上）。射线追踪结果在 Ku、Ka 频段与 ITU-R P.2108-1 相差不超过 3 dB。
- 阴影衰落：射线追踪的 LOS 阴影衰落低于 1 dB，而 TR 38.811 采用地面城区宏小区的 4 dB。
- 时延扩展：乡村场景低仰角时延扩展被低估，随仰角的变化趋势与射线追踪不一致；随机几何模型忽略的漫散射使时延扩展在 LOS 下增加约 3-45 ns，NLOS 下约 20-120 ns。
- Ku 频段：论文补充了 TR 38.811 缺少的 Ku 频段参数；Ka 频段 NLOS 杂波损耗高于 S 频段，因此 S 频段参数不应直接用于 Ku。
- 卫星引起的多普勒扩展：TR 38.811 中 RMS 扩展为零；对静止 UE，射线追踪在 Ka 频段约 50 度仰角处达到峰值，城区 6.1 Hz、乡村 7.8 Hz，对应相干时间约 26 ms 和 20 ms，与 20 ms 的 NR SRS 周期相当。以 20 m/s 运动的 HAPS 角速率比 600 km LEO 卫星低 9-13 倍。
- 方向性天线：接收端采用 16x16 的 Ka 频段阵列时，未经修改的 TR 38.811 生成器在高仰角下将有效 K 因子低估最多 50 dB。增加一个参数（非直达径的平均到达角）的改进生成器，在 20-80 度仰角下可使 K 因子与射线追踪相差约 3 dB 以内，在两端因紧凑的拉普拉斯近似而存在高估/低估。
- 链路余量示例：10 度时，TR 38.811 的乡村 K 因子 24.7 dB 对应单天线 1% 中断的衰落余量仅 0.9 dB，而射线追踪的 K = 4.8 dB 对应 13.6 dB。

## Why it matters / what's new (EN)

The paper argues that the issues it finds propagate to any simulator built on TR 38.811's tables and generator, QuaDRiGa being named as an example, and that link budgets built on them may be too optimistic about fading and too pessimistic about clutter loss. It proposes an alternative LEO NTN parameter set derived from randomized ray tracing, and notes that a new NTN channel-modelling effort under IEEE SA P1944 will be based in part on these methods. Limits stated: results are for a 600 km LEO scenario with a stationary UE; UE mobility, large phased arrays, other LEO orbits and multi-satellite operation are left to future work. The parameters are simulation-derived and have not been validated against measurements in the paper.

## Why it matters / what's new (ZH)

论文指出，所发现的问题会传递到任何基于 TR 38.811 表格与生成器的仿真器（文中以 QuaDRiGa 为例），基于它们的链路预算可能对衰落过于乐观、对杂波损耗过于悲观。论文给出了一套基于随机射线追踪的替代 LEO NTN 参数，并提到 IEEE SA P1944 下新的 NTN 信道建模工作将部分基于这些方法。文中说明的局限：结果针对 600 km LEO 和静止 UE；UE 移动性、大型相控阵、其他 LEO 轨道及多星协同留待后续工作。这些参数来自仿真，论文中未与实测数据验证。

## Images

None.
