---
id: 2026-11-18_arxiv-early-uav-detection-5g-nr-leo-downlinks-passive-isac
date_published: 2026-11-16
date_found: 2026-11-18
type: academic-paper
technology: satellite
title_en: "Early UAV Detection Using 5G NR LEO Downlinks for Passive ISAC"
title_zh: "利用 5G NR LEO 下行链路进行无源 ISAC 的无人机早期探测"
url: "https://arxiv.org/abs/2611.20859"
source_quality: full
topics: [passive-ISAC, 5G-NR-NTN, LEO, UAV-detection, Doppler-rate, keystone, TR-38.821, n256]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

Hamad, Zorba, Khattab (Qatar University), Saeedi (University of Doha for Science and Technology) and Yanikomeroglu (Carleton University) study passive sensing of UAVs using a 5G NR LEO satellite downlink as the illuminator. Weak echoes need motion-compensated accumulation, but exhaustively searching Doppler-rate hypotheses delays alerts. They propose a receiver combining selective Doppler-rate search, early UAV alerts and continued delay-Doppler estimation, in classical, statistical and neural configurations that share one correlation score for detection. The evaluation is simulation-only; code is at github.com/mombash/5g-leo-isac.

## Summary (ZH)

Hamad、Zorba、Khattab（卡塔尔大学）、Saeedi（多哈科技大学）与 Yanikomeroglu（卡尔顿大学）研究以 5G NR LEO 卫星下行链路作为照射源对无人机进行无源探测。微弱回波需要运动补偿累积，但穷举多普勒变化率假设会推迟告警。他们提出一种接收机，结合选择性多普勒变化率搜索、早期无人机告警与持续的时延-多普勒估计，提供经典、统计和神经网络三种配置，检测均使用同一相关得分。评估完全基于仿真；代码位于 github.com/mombash/5g-leo-isac。

## Key technical points (EN)

- Signal: 5G NR downlink on band n256, 2.19 GHz carrier, 20 MHz channel (18.36 MHz occupied), 30 kHz subcarrier spacing, 51 resource blocks, fully loaded QPSK data; satellite at 600 km using the S-band LEO setting from 3GPP TR 38.821. The paper lists standardized 5G pilots for detection as future work.
- Receiver: an upward array captures the direct reference and one of four side arrays (12x12 elements, tilted 20 degrees) the surveillance signal; least-squares removal of direct-signal leakage in 20 ms blocks; FFT-based correlation with keystone-style motion compensation. 27 candidate Doppler rates (-52 to +52 Hz/s in 4 Hz/s steps); checks at 0.6, 0.8 and 1 s, and a conditional final search that runs the remaining 12 rates only when the score exceeds the threshold.
- Scene: UAVs at 5-8 km horizontal distance, 25/50/100 m height, 45-80 m/s, point scatterer with assumed 0.10 m2 RCS; line-of-sight, beams assumed acquired. Test set of 512 four-second flights; 3,000 no-UAV recordings for false alerts; nineteen 5G waveforms.
- Results: neural, statistical and adaptive-classical configurations all reach 92.9% correct final detections, equal to exhaustive search. Observed false alerts are 0.10-0.13% (0.20% for exhaustive). The neural configuration cuts mean time to first correct alert by 36.5% versus exhaustive search and 21.9% versus the closest literature baseline; the neural and statistical gains over the adaptive classical configuration are not statistically significant in this session.
- Stated limits: line-of-sight only, assumed leakage suppression and reference alignment, no buildings or ground reflections, no real-world measurements, results conditional on the fixed waveform library, and beam scanning and acquisition cost left to future work.

## Key technical points (ZH)

- 信号：n256 频段 5G NR 下行，载频 2.19 GHz，20 MHz 信道（占用 18.36 MHz），30 kHz 子载波间隔，51 个资源块，满载 QPSK 数据；卫星高度 600 km，采用 3GPP TR 38.821 的 S 频段 LEO 设置。论文将用于检测的标准化 5G 导频列为未来工作。
- 接收机：朝上阵列获取直达参考信号，四个侧向阵列之一（12x12 阵元，倾斜 20 度）获取监视信号；以 20 ms 为块用最小二乘去除直达信号泄漏；基于 FFT 的相关配合键控（keystone）式运动补偿。27 个候选多普勒变化率（-52 至 +52 Hz/s，步长 4 Hz/s）；在 0.6、0.8 与 1 s 时检查，仅当得分超过门限时才对其余 12 个变化率执行条件性最终搜索。
- 场景：无人机位于水平距离 5-8 km，高度 25/50/100 m，速度 45-80 m/s，视为点散射体，假定 RCS 为 0.10 m2；视距传播，波束假定已捕获。测试集为 512 条四秒飞行；3,000 段无无人机记录用于虚警测试；共十九种 5G 波形。
- 结果：神经、统计与自适应经典三种配置的最终正确检测率均为 92.9%，与穷举搜索相同。观测虚警率为 0.10-0.13%（穷举为 0.20%）。神经配置相对穷举搜索将首次正确告警的平均时间缩短 36.5%，相对最接近的文献基线缩短 21.9%；神经与统计配置相对自适应经典配置的增益在本次评估中不具统计显著性。
- 作者说明的局限：仅视距传播，假定泄漏可被抑制且参考已对齐，未建模建筑与地面反射，无实测，结果取决于固定的波形库，波束扫描与捕获开销留待未来工作。

## Why it matters / what's new (EN)

Uses a 5G NR LEO downlink as the illuminator for passive UAV detection and targets alert latency; all configurations match exhaustive search at 92.9% final detection, versus 93.1% for dual-scale search. The contribution is therefore faster alerting under idealized line-of-sight simulation; the waveform follows TS 38.211/38.101-5 and the illumination power follows the S-band 600 km setting of TR 38.821; array design and RCS are author-selected.

## Why it matters / what's new (ZH)

以 5G NR LEO 下行信号作为照射源进行无源无人机检测，并以告警时延为目标；所有配置的最终检测率均与穷举搜索相同，为 92.9%，双尺度搜索为 93.1%。因此贡献体现为理想化视距仿真下更快的告警；波形依据 TS 38.211/38.101-5，照射功率依据 TR 38.821 的 S 频段 600 km 设置；阵列设计与 RCS 由作者自定。

## Images

None.
