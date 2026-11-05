---
id: 2026-11-05_arxiv-fr3-6-12-ghz-industrial-channel-measurements-3gpp-inf
date_published: 2026-10-30
date_found: 2026-11-05
type: academic-paper
technology: cellular
title_en: "Wideband Channel Measurements in the Lower FR3 Band (6-12 GHz) for Industrial Environments"
title_zh: "面向工业环境的 FR3 低段（6-12 GHz）宽带信道测量"
url: "https://arxiv.org/abs/2611.00426"
source_quality: full
topics: [FR3, upper-mid-band, channel-measurement, indoor-factory, TR-38.901, path-loss, shadow-fading, delay-spread, blockage]
topic_primary: cellular-spectrum
topics_secondary: [6g-vision]
novelty_score: 3
---

## Summary (EN)

Faizan Rauf, Adam Umra, Oways Alsoloh and Aydin Sezgin (Ruhr University Bochum) report a wideband channel measurement campaign in an industrial production hall across 6-12 GHz, part of the FR3 upper mid-band (7.125-24.25 GHz) that is a 6G candidate. The motivation is that industrial FR3 measurements are scarce and the 3GPP TR 38.901 indoor-factory (InF) model, developed for omnidirectional antennas, has not been validated across FR3.

The campaign used a two-port Rohde & Schwarz ZNA vector network analyser (6-17 GHz recorded, 11001 points, 1 MHz step, ten sweeps averaged per position) with identical Schwarzbeck BBHA 9120 L horn antennas (about 32/36 degree 3-dB beamwidth), vertically polarised, both at 1.5 m and aligned boresight-to-boresight. The hall (32.73 x 23.29 m, 10 m ceiling) matches the InF sparse-clutter, low-base-station (InF-SL) sub-scenario most closely. There were 135 LOS positions (1-18 m, 1 m grid) and 30 NLOS positions (2.5-16.5 m) behind an industrial robot. Results were extracted in six 1-GHz sub-bands.

## Summary (ZH)

Faizan Rauf、Adam Umra、Oways Alsoloh 与 Aydin Sezgin（波鸿鲁尔大学）报告了在一座工业生产车间内、6-12 GHz 范围的宽带信道测量活动，该频段属于 6G 候选的 FR3 上中频段（7.125-24.25 GHz）。研究动机是工业环境的 FR3 测量稀缺，而为全向天线开发的 3GPP TR 38.901 室内工厂（InF）模型尚未在整个 FR3 范围内得到验证。

测量采用双端口 Rohde & Schwarz ZNA 矢量网络分析仪（记录 6-17 GHz，11001 点，步长 1 MHz，每个位置平均 10 次扫描），收发端均为相同的 Schwarzbeck BBHA 9120 L 喇叭天线（3 dB 波束宽度约 32/36 度），垂直极化，高度均为 1.5 m，主瓣相对对准。车间面积 32.73 x 23.29 m，层高 10 m，最接近 InF 稀疏杂波、低基站高度（InF-SL）子场景。共有 135 个 LOS 位置（1-18 m，1 m 网格）和 30 个位于工业机器人后方的 NLOS 位置（2.5-16.5 m）。结果按六个 1 GHz 子带提取。

## Key technical points (EN)

- LOS path loss: the path-loss exponent ranged from 1.87 to 2.12 and the close-in (CI) fits agreed with the 3GPP InF-LOS model to within about 2 dB, with no frequency trend.
- LOS shadow fading: 1.4-1.7 dB measured versus 4.3 dB in the model, so for 95% coverage the 3GPP model overstates the fading margin of beam-aligned links by more than 4 dB.
- NLOS: CI exponent of 3.11-3.25, between the InF-SL and InF-DL slopes of 2.55 and 3.57; shadow fading of 4.5-5.0 dB, below both 3GPP values.
- Blockage: the robot caused an excess loss that increased from 10.3 dB to 13.0 dB between 6.5 and 11.5 GHz, consistent with diffraction.
- Delay spread: mean RMS delay spread of 4.9-5.7 ns in LOS (3.2 ns in the 10-11 GHz sub-band), 90th percentile 10-19 ns; in NLOS the mean rises to 23.4-26.9 ns (90th percentile 53-60 ns), close to omnidirectional values. Both are far below the cyclic prefix of NR numerologies.
- Caveat stated by the authors: both antennas operate in the radiating near field at the shortest distances (Fraunhofer distance about 0.8 m at 6 GHz to 2.2 m at 16 GHz); all positions were retained in the fits. Only boresight-aligned directional channels were measured, and the dataset and processing code are public.

## Key technical points (ZH)

- LOS 路径损耗：路径损耗指数为 1.87 至 2.12，近距离参考（CI）拟合与 3GPP InF-LOS 模型相差约 2 dB 以内，且无频率趋势。
- LOS 阴影衰落：实测 1.4-1.7 dB，而模型为 4.3 dB；因此在 95% 覆盖要求下，3GPP 模型对波束对准链路的衰落余量高估超过 4 dB。
- NLOS：CI 指数为 3.11-3.25，介于 InF-SL 与 InF-DL 的斜率 2.55 与 3.57 之间；阴影衰落 4.5-5.0 dB，低于两者的 3GPP 取值。
- 遮挡：机器人造成的额外损耗在 6.5 至 11.5 GHz 之间由 10.3 dB 增至 13.0 dB，与绕射一致。
- 时延扩展：LOS 下平均 RMS 时延扩展为 4.9-5.7 ns（10-11 GHz 子带为 3.2 ns），90 分位为 10-19 ns；NLOS 下均值升至 23.4-26.9 ns（90 分位 53-60 ns），接近全向值。两者均远小于 NR 各参数集的循环前缀。
- 作者说明的注意事项：在最短距离处两副天线均处于辐射近场（Fraunhofer 距离 6 GHz 时约 0.8 m，16 GHz 时约 2.2 m），拟合中保留了所有位置。仅测量了主瓣对准的定向信道；数据集与处理代码已公开。

## Why it matters / what's new (EN)

The measurements indicate that the 3GPP InF model captures mean LOS path loss for beam-aligned FR3 links well but overestimates their variability, and that blockage loss behind a robot is frequency dependent across 6-12 GHz, while the model's path-loss exponents are frequency independent. Scope limits from the paper: one hall, one transmitter height (InF-SL/low-base-station), boresight-aligned horns only; MIMO measurements, other transmitter heights (InF-SH, InF-DH) and ray-tracing validation of the hall are listed as future work.

## Why it matters / what's new (ZH)

测量结果表明，3GPP InF 模型对波束对准的 FR3 链路的平均 LOS 路径损耗刻画良好，但高估了其变化幅度；同时机器人后方的遮挡损耗在 6-12 GHz 内随频率变化，而模型的路径损耗指数与频率无关。论文给出的范围限制：单一车间、单一发射高度（InF-SL/低基站）、仅主瓣对准的喇叭天线；MIMO 测量、其他发射高度（InF-SH、InF-DH）以及车间的射线追踪验证列为后续工作。

## Images

None.
