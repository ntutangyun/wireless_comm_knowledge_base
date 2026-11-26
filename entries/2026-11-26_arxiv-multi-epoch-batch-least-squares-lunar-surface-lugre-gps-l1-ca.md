---
id: 2026-11-26_arxiv-multi-epoch-batch-least-squares-lunar-surface-lugre-gps-l1-ca
date_published: 2026-11-20
date_found: 2026-11-26
type: academic-paper
technology: satellite
title_en: "Multi-Epoch Batch Least-Squares Positioning on the Lunar Surface Using LuGRE GPS L1 C/A Pseudorange Measurements"
title_zh: "基于 LuGRE GPS L1 C/A 伪距的月面多历元批处理最小二乘定位"
url: "https://arxiv.org/abs/2611.28385"
source_quality: full
topics: [GNSS, lunar-PNT, LuGRE, pseudorange, batch-least-squares, space-service-volume, GPS-L1-CA]
topic_primary: sat-ai
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Seunghwan Kim (University of Illinois Urbana-Champaign), Alex Minetto and Fabio Dovis (Politecnico di Torino), Jacob Spagnolli (University of Colorado Boulder) and Dennis Akos (University of Colorado Boulder and Stanford University) analyse publicly released data from the Lunar GNSS Receiver Experiment (LuGRE), a joint NASA and Italian Space Agency payload that launched on the Firefly Blue Ghost Mission 1 lander on 15 January 2025. Onboard single-epoch position estimates on the lunar surface had kilometre-level errors, which the authors attribute to long propagation distances, few measurements and poor GNSS geometry (the paper cites 1 to 100 km range errors in a representative operation and a 67th-percentile onboard error of 130 km).

Because the receiver stayed stationary after landing, the authors accumulate GPS L1 C/A pseudorange measurements over many epochs in one batch least-squares solution with a separate clock bias per epoch. With an altitude constraint, a 1,000 km straight-line tangential altitude threshold, at least two measurements per epoch and 120 accumulated epochs, randomly selected epochs from multiple operations gave 67th- and 95th-percentile 3D errors of about 110 m and 210 m, using only single-frequency, single-constellation data. The authors describe this as, to their knowledge, the first demonstration of 100-m-level positioning from actual GNSS measurements on the lunar surface. The paper is submitted to NAVIGATION (Journal of the Institute of Navigation).

## Summary (ZH)

Seunghwan Kim（伊利诺伊大学厄巴纳-香槟分校）、Alex Minetto 与 Fabio Dovis（都灵理工大学）、Jacob Spagnolli（科罗拉多大学博尔德分校）以及 Dennis Akos（科罗拉多大学博尔德分校与斯坦福大学）分析了月球 GNSS 接收机实验（LuGRE）公开发布的数据。LuGRE 是 NASA 与意大利航天局的联合载荷，于 2025 年 1 月 15 日搭载 Firefly Blue Ghost Mission 1 着陆器发射。月面星上单历元定位误差达公里级，作者将其归因于传播距离长、测量数量少和 GNSS 几何条件差（论文引用某代表性操作中距离向误差为 1 至 100 km，星上定位误差 67 分位为 130 km）。

由于接收机着陆后保持静止，作者将多个历元的 GPS L1 C/A 伪距累积到同一批处理最小二乘解中，并为每个历元单独估计钟差。在采用高度约束、1000 km 直线切向高度门限、每历元至少两个测量、累积 120 个历元时，从多次操作中随机选取的历元给出的三维误差 67 分位与 95 分位约为 110 m 与 210 m，仅使用单频、单星座数据。作者称据其所知这是首次利用月面实际 GNSS 测量实现百米级定位。论文已投稿 NAVIGATION（美国导航学会期刊）。

## Key technical points (EN)

- Background: LuGRE acquired and tracked GPS L1/L5 and Galileo E1/E5a signals as weak as 20 dB-Hz using a nine-element high-gain antenna array (peak gain 15.5 dBic at L1) kept pointed at Earth. From the lunar surface the visible GNSS satellites are on the far side of Earth, so only main-lobe spill-over and sidelobes reach the Moon and Earth occultation further limits measurements.
- Method: pseudoranges from different epochs are combined for one common position in the lunar-centred lunar-fixed frame, with one receiver clock bias per epoch; an altitude constraint from coarse a-priori information reduces the weakly observable radial error.
- Parameters studied: number of accumulated epochs, altitude constraint, straight-line tangential altitude (SLTA) threshold of 0, 500 or 1,000 km (excluding low-SLTA signals that suffer larger group delay), and minimum measurements per epoch.
- Results from random epoch-selection tests: requiring at least two measurements per epoch reduced the 67th and 95th percentiles from 800 m and 1.9 km (at least one measurement) to 320 m and 650 m; the 1,000 km SLTA threshold gave a 67th percentile of 110 m, roughly one third of the no-threshold value; accumulating 50 to 200 epochs per group lowered the 67th percentile from 260 m to 130 m with diminishing returns. With the altitude constraint and epochs containing three pseudoranges, single operations OP77_1 and OP76_0 reached 100-m-level accuracy after several tens of seconds and about one minute of accumulation respectively.
- Stated limitations and future work: single band and single constellation only; batch weighted least squares, multi-constellation and multi-band processing and ionosphere-free combinations are left to future work; the method assumes a stationary receiver.

## Key technical points (ZH)

- 背景：LuGRE 使用九阵元高增益天线阵列（L1 峰值增益 15.5 dBic）持续指向地球，捕获并跟踪低至 20 dB-Hz 的 GPS L1/L5 与 Galileo E1/E5a 信号。从月面看，可见 GNSS 卫星位于地球背面，只有主瓣溢出和旁瓣能量到达月球，地球遮挡进一步限制测量数量。
- 方法：将不同历元的伪距合并，估计月心月固系下的同一位置，并为每个历元估计一个接收机钟差；利用粗略先验信息的高度约束可降低弱可观测的径向误差。
- 研究的参数：累积历元数、高度约束、直线切向高度（SLTA）门限 0、500 或 1000 km（剔除群时延较大的低 SLTA 信号）、每历元最少测量数。
- 随机历元选取测试结果：要求每历元至少两个测量时，67 分位与 95 分位由（至少一个测量时的）800 m 与 1.9 km 降至 320 m 与 650 m；1000 km SLTA 门限给出 110 m 的 67 分位，约为无门限情形的三分之一；每组累积 50 至 200 个历元时 67 分位由 260 m 降至 130 m，收益递减。在施加高度约束、使用含三个伪距的历元时，单次操作 OP77_1 与 OP76_0 分别在数十秒与约一分钟的累积后达到百米级精度。
- 声明的局限与后续工作：仅单频、单星座；批处理加权最小二乘、多星座与多频处理以及无电离层组合留待后续；方法假定接收机静止。

## Why it matters / what's new (EN)

The paper's stated motivation is early lunar-surface operations before dedicated lunar PNT infrastructure is fully operational, where terrestrial GNSS signals could provide an initial position estimate accurate enough to seed a navigation filter (the authors' stated motivation). It is a post-processing study of one mission's public data rather than a new receiver design, and the headline accuracy is for epochs randomly selected from multiple operations, not for the onboard solution.

## Why it matters / what's new (ZH)

论文声明的动机是专用月球 PNT 基础设施尚未全面运行前的早期月面作业：地面 GNSS 信号可提供足以初始化导航滤波器的初始位置估计。这是针对单次任务公开数据的后处理研究，而非新的接收机设计；其标称精度针对从多次操作中随机选取的历元，而非星上解。

## Images

None.
