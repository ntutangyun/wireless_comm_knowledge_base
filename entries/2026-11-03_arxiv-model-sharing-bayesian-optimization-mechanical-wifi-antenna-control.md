---
id: 2026-11-03_arxiv-model-sharing-bayesian-optimization-mechanical-wifi-antenna-control
date_published: 2026-10-30
date_found: 2026-11-03
technology: wifi
type: academic-paper
title_en: "Model Sharing Bayesian Optimization for Mechanical Wi-Fi Antenna Control in Multi-Station Environments"
title_zh: "多站点环境下面向机械式 Wi-Fi 天线控制的模型共享贝叶斯优化"
url: "https://arxiv.org/abs/2610.41469"
source_quality: full
topics: [antenna orientation, Bayesian optimization, Gaussian process, proportional fairness, uplink, CSI, PicoScenes]
topic_primary: ai-for-wifi
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Some home and office Wi-Fi access points have antennas users can turn by hand, but choosing good orientations indoors is hard for non-experts. This paper (Taya, Nishiyama, Sezaki; submitted 30 October 2026) studies automatic mechanical antenna orientation control for uplink Wi-Fi when the set of active stations changes over time, extending the authors' earlier antenna-control system. The objective is proportional fairness, i.e. maximizing the geometric mean of the active links' capacities.

The method gives each station one Gaussian process regression (GPR) model of its log-capacity as a function of antenna orientation, and reuses those models across different active-station combinations; only the models of currently active links are updated. Since the objective for an active set is the mean of its links' log-capacities, the number of surrogate models falls from up to 2^|S|-1 (one per station set) to |S|. Assuming independent link predictions, the predictive mean is the average of the link means and the standard deviation is the root-sum-square of the link standard deviations divided by |S|; the authors derive an upper-confidence-bound acquisition function ("linUCB") with an analytic gradient for L-BFGS-B and compare it with a composite UCB (cUCB), with comparable results in simulation. Per-set bookkeeping (best score, best orientation, stopping status) is kept separately, and environment changes are detected by comparing capacities with stored baselines, which triggers a reset.

The prototype is built on an ASUS NUC 13 Rugged driving two antennas, each with elevation (0-90 deg) and azimuth (60-180 deg) servo axes (four degrees of freedom), controlled by an Arduino UNO R4 WiFi; PicoScenes collects RSSI and CSI, on a 5.57 GHz / 160 MHz channel with two transmitters. Measurements were taken in a small meeting room and a classroom, with capacity measured on a 15-degree grid (3,969 configurations) to drive replay simulations. Across the measured grid the geometric-mean capacity ranges from 2,171 to 2,795 Mbit/s (a 28.7% spread between worst and best orientations). In simulations model-sharing methods reach higher capacities than state-specific BO, most visibly when both transmitters are active; in four real trials per method, in the both-transmitter segment many of state-specific BO's measured capacities lie at 2,500-2,600 Mbit/s, while model-sharing BO more frequently evaluates orientations at 2,600-2,800 Mbit/s. The paper gives no single overall percentage gain. The metric is CSI-derived channel capacity rather than higher-layer throughput, inter-station interference and MAC contention are not modelled, and mobile stations are out of scope.

## Summary (ZH)

一些家用和办公 Wi-Fi 接入点的天线可由用户手动转动，但对非专业用户而言，室内很难选出好的朝向。本文（Taya、Nishiyama、Sezaki；2026 年 10 月 30 日提交）研究在活跃站点集合随时间变化时，上行 Wi-Fi 的机械式天线朝向自动控制，扩展了作者此前的天线控制系统。目标为比例公平，即最大化各活跃链路容量的几何平均。

方法为每个站点建立一个关于天线朝向的对数容量高斯过程回归（GPR）模型，并在不同活跃站点组合之间复用；只更新当前活跃链路的模型。由于某一活跃集合的目标等于其各链路对数容量的均值，代理模型数量由最多 2^|S|-1 个（每个站点集合一个）降为 |S| 个。假设各链路预测相互独立，预测均值为链路均值之平均，标准差为各链路标准差的平方和开方再除以 |S|；作者推导了带解析梯度（供 L-BFGS-B 使用）的置信上界获取函数（"linUCB"），并与复合 UCB（cUCB）比较，仿真中两者表现相当。每个集合的最优得分、最优朝向和停止状态单独记录；通过比较容量与存储基线来检测环境变化，并触发重置。

原型基于 ASUS NUC 13 Rugged，驱动两根天线，每根具有俯仰（0-90 度）和方位（60-180 度）伺服轴（共四个自由度），由 Arduino UNO R4 WiFi 控制；PicoScenes 采集 RSSI 与 CSI，信道为 5.57 GHz / 160 MHz，使用两个发射端。测量在小型会议室和教室中进行，在 15 度网格（3,969 种配置）上测得容量并用于回放仿真。整个测量网格上几何平均容量范围为 2,171 至 2,795 Mbit/s（最差与最优朝向相差 28.7%）。仿真中模型共享方法的容量高于按状态独立的 BO，在两个发射端同时活跃时最明显；在每种方法四次真实试验中，双发射端阶段，按状态独立 BO 的许多实测容量位于 2,500-2,600 Mbit/s，而模型共享 BO 更频繁地评估到 2,600-2,800 Mbit/s 的朝向。论文没有给出单一的总体提升百分比。其指标为基于 CSI 的信道容量而非高层吞吐，未建模站间干扰与 MAC 竞争，移动站点不在范围内。

## Key technical points (EN)

- One GPR model per station over log-capacity vs. orientation; models reused across active-station sets, cutting surrogate models from up to 2^|S|-1 to |S|.
- Proportional-fairness objective (mean of log-capacities); linUCB acquisition with analytic gradient, compared with cUCB.
- Baselines: fixed orientation, random search, state-specific BO.
- Hardware: two servo-driven antennas (elevation + azimuth each), PicoScenes RSSI/CSI, 5.57 GHz, 160 MHz.
- Reported: 28.7% spread in geometric-mean capacity across orientations (2,171-2,795 Mbit/s); in the both-transmitter segment of real trials, many of state-specific BO's measured capacities lie at 2,500-2,600 Mbit/s, while model-sharing BO more frequently evaluates orientations at 2,600-2,800 Mbit/s.
- The simulations also use a virtual four-link merged dataset (TX A-D) which the paper notes "does not reflect the interference between the two TXs".

## Key technical points (ZH)

- 每个站点一个关于"对数容量-朝向"的 GPR 模型；跨活跃站点集合复用，代理模型数由最多 2^|S|-1 降为 |S|。
- 比例公平目标（对数容量均值）；带解析梯度的 linUCB 获取函数，并与 cUCB 比较。
- 对比基线：固定朝向、随机搜索、按状态独立的 BO。
- 硬件：两根伺服驱动天线（各含俯仰与方位）、PicoScenes RSSI/CSI、5.57 GHz、160 MHz。
- 报告结果：不同朝向间几何平均容量相差 28.7%（2,171-2,795 Mbit/s）；真实试验的双发射端阶段，按状态独立 BO 的许多实测容量位于 2,500-2,600 Mbit/s，而模型共享 BO 更频繁地评估到 2,600-2,800 Mbit/s 的朝向。
- 仿真还使用了虚拟的四链路合并数据集（TX A-D），论文指出其不反映两个发射端之间的干扰。

## Why it matters / what's new (EN)

This extends the authors' earlier mechanical-antenna work (GLOBECOM 2026; see the 2026-09-16 KB entry) from state-specific BO to per-link model sharing as stations come and go. The evidence comes from two indoor rooms with CSI-derived capacity as the metric, as the authors note, so the reported differences are not end-to-end throughput results.

## Why it matters / what's new (ZH)

本文是作者此前机械天线工作（GLOBECOM 2026；见本知识库 2026-09-16 条目）的延伸：从按状态独立的 BO 扩展到站点来去时复用逐链路模型。证据来自两个室内房间，且指标为基于 CSI 的容量，正如作者所指出，所报告的差异并非端到端吞吐结果。
