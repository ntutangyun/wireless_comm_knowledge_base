---
id: 2026-05-25_arxiv-ble-doa-missed-detections
date_published: 2026-05-22
date_found: 2026-05-25
type: academic-paper
technology: bluetooth
title_en: "Utilizing Missed Detections in Directional Sensitivity-Based DOA Estimation"
title_zh: "在基于方向灵敏度的到达角估计中利用漏检信息"
url: "https://arxiv.org/abs/2605.23536"
source_quality: full
topics: [bt-location, BLE, direction-finding, AoA, DoA, RSSI, maximum-likelihood, particle-filter]
topic_primary: bt-location
topics_secondary: [bt-le]
novelty_score: 3
---

## Summary (EN)

This paper attacks Bluetooth Low Energy direction-of-arrival (DoA) estimation in the practical regime where sensors only report scalar RSSI from directional antennas — no coherent phase array, no CTE-style I/Q snapshots. The classic problem with RSSI-only direction finding at the edge of coverage is that weak signals simply fail the detection threshold and are dropped, starving the estimator exactly when it needs data most. The authors' insight is to treat those drops as information rather than missing data: when a directional sensor reports an empty set ∅ because received power fell below a known threshold γ, that silence is itself a constraint — the true signal-plus-pattern power at that antenna's orientation must lie below γ.

They build a unified maximum-likelihood framework over both kinds of observation. Detected measurements are modelled as a truncated normal (values above threshold, Gaussian noise σ²); missed detections contribute a (1 − p_D(x)) probability term that encodes "this antenna would have seen something above γ only with low probability given the candidate DoA." Each antenna's directional sensitivity h(x) is a Fourier series (K=7 harmonics) parameterised by the unknown DoA angle ψ and signal power α, and estimation is a grid search over ψ (0–360°, 1° steps) and α (−100…0 dBm, 0.2 dBm steps), minimising the combined negative log-likelihood across detected and non-detected sensors. A particle filter tracks the correct likelihood peak over time on moving targets.

The payoff shows up precisely in the low-SNR / high-missed-detection regime. In simulation with a 4-sensor uniform circular array, the method essentially matches a standard baseline at −70 dBm (16.2° vs 16.5° RMSE) but pulls dramatically ahead as signal weakens: 16.0° vs 31.0° at −75 dBm (48% better), and ~15–19° vs 84–108° at −80/−85 dBm (≈82% better) — i.e. the baseline collapses to near-random while the proposed estimator stays stable. Real outdoor BLE experiments (4 Yagi antennas × 3 advertising channels = 12 effective sensors, beacon at 1 m, iPhone-GPS ground truth, an elevated γ = −65 dBm forcing many missed detections) confirm the simulation: the baseline RMSE degrades badly while the missed-detection-aware estimator holds up.

## Summary (ZH)

本文针对一种实际场景下的低功耗蓝牙到达角（DoA）估计：传感器仅从定向天线上报标量 RSSI——没有相干相位阵列，也没有 CTE 式的 I/Q 采样。仅凭 RSSI 在覆盖边缘做方向查找的经典难题是：弱信号会直接低于检测门限被丢弃，恰恰在估计器最需要数据时让它「挨饿」。作者的关键洞见是把这些丢弃当作信息而非缺失数据：当某个定向传感器因接收功率低于已知门限 γ 而上报空集 ∅ 时，这份「沉默」本身就是约束——在该天线朝向上，真实的「信号×方向图」功率必定低于 γ。

他们在两类观测上构建统一的最大似然框架。检测到的测量建模为截断正态分布（高于门限的值，高斯噪声 σ²）；漏检贡献一个 (1 − p_D(x)) 概率项，编码「给定候选 DoA，该天线本应以较低概率才看到高于 γ 的信号」。每个天线的方向灵敏度 h(x) 用傅里叶级数（K=7 次谐波）表示，由未知 DoA 角 ψ 与信号功率 α 参数化；估计是在 ψ（0–360°，1° 步进）与 α（−100…0 dBm，0.2 dBm 步进）上做网格搜索，最小化检测与未检测传感器合并的负对数似然。对运动目标用粒子滤波跟踪正确的似然峰。

收益恰恰出现在低信噪比 / 高漏检的区间。在 4 传感器均匀圆阵的仿真中，本方法在 −70 dBm 时与标准基线基本持平（RMSE 16.2° vs 16.5°），但随信号变弱大幅领先：−75 dBm 时 16.0° vs 31.0°（提升 48%），−80/−85 dBm 时约 15–19° vs 84–108°（约提升 82%）——即基线退化至近乎随机，而本估计器保持稳定。真实户外 BLE 实验（4 根八木天线 × 3 个广播信道 = 12 个等效传感器、信标 1 m、iPhone-GPS 真值、抬高 γ = −65 dBm 以制造大量漏检）印证了仿真结果。

## Key technical points (EN)

- **Missed detection = constraint, not missing data:** an empty report ∅ implies true power < threshold γ, encoded as a (1 − p_D(x)) term in the likelihood.
- **Unified ML over detected + non-detected sensors:** detected = truncated normal; minimise combined negative log-likelihood by grid search over ψ (1°) and α (0.2 dBm).
- **Directional sensitivity** modelled per-antenna as a K=7 Fourier series; RSSI-only, no phase/coherent array needed.
- **Particle filter** tracks the correct likelihood peak for moving targets.
- **Simulation (4-sensor UCA, 50 MC runs):** ~equal at −70 dBm; 48% RMSE reduction at −75 dBm; ~82% at −80/−85 dBm vs baseline that collapses to >80° error.
- **Real BLE:** 4 Yagi × 3 channels = 12 sensors, beacon @1 m, γ = −65 dBm — proposed stays stable while baseline degrades.
- Authors: Zetterqvist, Gustafsson, Hendeby (Linköping University); WASP/ELLIIT funded.

## Key technical points (ZH)

- **漏检即约束，而非缺失：** 空报 ∅ 蕴含真实功率 < 门限 γ，以似然中的 (1 − p_D(x)) 项编码。
- **检测+未检测传感器上的统一 ML：** 检测=截断正态；在 ψ（1°）与 α（0.2 dBm）上网格搜索最小化合并负对数似然。
- **方向灵敏度** 按天线建模为 K=7 傅里叶级数；仅用 RSSI，无需相位 / 相干阵列。
- **粒子滤波** 为运动目标跟踪正确似然峰。
- **仿真（4 传感器圆阵、50 次蒙特卡洛）：** −70 dBm 基本持平；−75 dBm RMSE 降低 48%；−80/−85 dBm 约 82%，而基线误差崩至 >80°。
- **真实 BLE：** 4 八木 × 3 信道 = 12 传感器、信标 1 m、γ = −65 dBm——本方法稳定，基线退化。
- 作者：Zetterqvist、Gustafsson、Hendeby（林雪平大学）；WASP/ELLIIT 资助。

## Why it matters / what's new (EN)

The KB's Bluetooth location entries to date center on phase-based Channel Sounding (Core 6.0/6.3, connectionless CS via PAwR) — the high-accuracy, hardware-coordinated path. This paper occupies the opposite, cheaper corner: RSSI-only DoA with off-the-shelf directional antennas, where the contribution is statistical rather than RF. Treating non-detections as likelihood constraints is the kind of estimator-side trick that squeezes usable bearing out of links too weak for standard Dir-MUSIC/NLS, which matters for low-cost asset-tracking and long-range beacon localisation where most sensors are below threshold most of the time. It's a useful complement to the channel-sounding thread: same goal (where is the device), very different cost/accuracy operating point.

## Why it matters / what's new (ZH)

KB 现有的蓝牙定位条目集中在基于相位的信道探测（Core 6.0/6.3、经 PAwR 的无连接 CS）——即高精度、硬件协同的路线。本文占据相反、更廉价的一角：用现成定向天线、仅凭 RSSI 做 DoA，其贡献偏统计而非射频。把「未检测」当作似然约束，是一种估计器侧技巧，能从弱到标准 Dir-MUSIC/NLS 失效的链路中榨出可用方位——这对低成本资产追踪与远距信标定位很重要，因为那里多数传感器多数时间都低于门限。它与信道探测主线形成有益互补：目标相同（设备在何方向），但成本 / 精度工作点迥异。
