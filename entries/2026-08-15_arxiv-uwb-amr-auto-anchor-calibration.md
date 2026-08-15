---
id: 2026-08-15_arxiv-uwb-amr-auto-anchor-calibration
date_published: 2026-07-17
date_found: 2026-08-15
type: academic-paper
technology: uwb
title_en: "Deployment-Ready UWB Localization for Industrial Ground Robots with Automatic Anchor Calibration and Terrain-Aware Fusion"
title_zh: "面向工业地面机器人的可部署 UWB 定位：自动锚点标定与地形感知融合"
url: "https://arxiv.org/abs/2607.15807"
source_quality: full
topics: [UWB, AMR, anchor-calibration, TWR, ESKF, DWM1001, range-bias, warehouse, dataset]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 2
---

## Summary (EN)
Alexander Raab (AGILOX Services GmbH) with Giulio Delama, Roland Jung and Stephan Weiss (Control of Networked Systems group, University of Klagenfurt; arXiv 2607.15807, submitted 17 Jul 2026, cs.RO; FFG project LUMEIK-5G) address the two costs that keep UWB out of production autonomous-mobile-robot (AMR) fleets: surveying static anchors by hand, and fusing UWB with the robot's own sensors without breaking estimator consistency. The pipeline is demonstrated on a commercial AGILOX ONE logistics AMR carrying three Qorvo DWM1001-DEV tags, in a warehouse with twelve static anchors, then transferred to an autonomous forklift with two vertically spaced tags.

**Automatic anchor calibration** is a single-step robust nonlinear least-squares initialisation over a meshed two-way-ranging (TWR) session: given the robot's own pose estimates (LiDAR-based here), the known tag extrinsics and the ranges collected along a calibration drive, it solves for anchor positions *and* per tag-anchor-pair range biases — a constant term and a range-dependent term — with covariances. **Terrain-aware fusion** is a manifold error-state EKF (M-ESEKF) that constrains motion to a B-spline ground surface and fuses UWB ranges with wheel odometry; the measurement model carries anchor-position uncertainty and the two bias terms, treating weakly observable parameters Schmidt-Kalman style so the filter stays consistent with what the calibration actually delivered.

Indoors the calibration lands anchors with 18 cm mean error and the filter holds max 0.131 m translation / 4.81° heading error, with the NEES consistency metric dropping from 625 to 3.1 once biases are modelled (constant biases up to 1.19 m were observed between some pairs). Across an indoor-to-outdoor transition the mean translation error is 0.175 m (0.555 m max); with only 4 anchors and 1 tag it is 0.187 m. On the independent forklift dataset (pre-calibrated anchors, no range-dependent bias data) the adapted filter reaches 0.128 m mean error where odometry alone drifts by 13.9 m. Range updates run in under 15 µs. Limitations acknowledged: pose priors and a surface model are assumed at initialisation, NLoS/multipath are not explicitly handled, and there is no comparison against tightly-coupled external baselines. The warehouse dataset is released publicly.

## Summary (ZH)
Alexander Raab（AGILOX Services GmbH）与克拉根福大学 Control of Networked Systems 组的 Giulio Delama、Roland Jung、Stephan Weiss（arXiv 2607.15807，2026 年 7 月 17 日提交，cs.RO；FFG LUMEIK-5G 项目）针对阻碍 UWB 进入自主移动机器人（AMR）量产车队的两项成本：手工测绘静态锚点，以及在不破坏估计器一致性的前提下把 UWB 与机器人自身传感器融合。流水线在商用 AGILOX ONE 物流 AMR（3 个 Qorvo DWM1001-DEV 标签）与 12 个静态锚点的仓库中演示，并迁移到装有两个垂直分布标签的自动叉车。

**自动锚点标定**是在网状双向测距（TWR）会话上的一步式鲁棒非线性最小二乘初始化：给定机器人自身位姿估计（此处基于 LiDAR）、已知标签外参与标定行驶中采集的测距，同时求解锚点位置*和*每对标签-锚点的测距偏差——常数项与随距离变化项——及其协方差。**地形感知融合**是流形误差状态 EKF（M-ESEKF），把运动约束在 B 样条地面上，融合 UWB 测距与轮式里程计；量测模型带有锚点位置不确定性与两项偏差，对弱可观参数采用 Schmidt-Kalman 处理，使滤波器与标定实际交付的结果保持一致。

室内标定锚点平均误差 18 cm，滤波器最大平移误差 0.131 m、航向 4.81°，建模偏差后 NEES 一致性指标从 625 降到 3.1（部分标签-锚点对观察到高达 1.19 m 的常数偏差）。室内到室外过渡时平均平移误差 0.175 m（最大 0.555 m）；仅 4 锚点 + 1 标签时为 0.187 m。在独立叉车数据集（预标定锚点、无随距离偏差数据）上，改造后的滤波器平均误差 0.128 m，而纯里程计漂移 13.9 m。测距更新耗时低于 15 µs。承认的局限：初始化假定位姿先验与地面模型，未显式处理 NLoS/多径，未与紧耦合外部基线对比。仓库数据集公开发布。

## Key technical points (EN)
- Hardware: AGILOX ONE AMR + 3× Qorvo DWM1001-DEV tags, 12 warehouse anchors; forklift with 2 tags; meshed TWR ranging.
- Calibration: one-shot robust NLLS from robot poses + ranges → anchor positions + constant and range-dependent per-pair biases with covariance (18 cm mean anchor error).
- Fusion: manifold ESKF on a B-spline ground surface, UWB + wheel odometry, Schmidt-Kalman treatment of anchor/bias uncertainty; NEES 625 → 3.1 indoors.
- Accuracy: 0.131 m max indoors; 0.175 m mean across indoor/outdoor transition; 0.187 m with 4 anchors + 1 tag; 0.128 m on forklift vs 13.9 m odometry drift.
- Cost: <3 µs propagation, <15 µs per range update. Public warehouse dataset (sst.aau.at/cns/datasets).

## Key technical points (ZH)
- 硬件：AGILOX ONE AMR + 3× Qorvo DWM1001-DEV 标签，仓库 12 锚点；叉车 2 标签；网状 TWR 测距。
- 标定：由机器人位姿 + 测距一次性鲁棒 NLLS → 锚点位置 + 每对常数/随距离偏差及协方差（锚点平均误差 18 cm）。
- 融合：B 样条地面上的流形 ESKF，UWB + 轮式里程计，锚点/偏差不确定性按 Schmidt-Kalman 处理；室内 NEES 625 → 3.1。
- 精度：室内最大 0.131 m；室内外过渡平均 0.175 m；4 锚点 + 1 标签 0.187 m；叉车 0.128 m 对比里程计漂移 13.9 m。
- 开销：传播 <3 µs，每次测距更新 <15 µs。公开仓库数据集（sst.aau.at/cns/datasets）。

## Why it matters / what's new (EN)
Existing uwb-ranging entries improve the estimate given a surveyed anchor set (AB-Sync clock sync, transformer/trajectory prediction). This is the first entry attacking the *deployment* cost — anchor survey and per-pair bias — as part of the estimator itself, and it comes from an AMR vendor (AGILOX) rather than a lab. The 1.19 m constant biases measured on commodity DWM1001 links, and the NEES drop once they are modelled, are a useful reality check for anyone reading vendor accuracy claims (cf. the Murata factory-tracking and NXP omlox starter-kit entries). Caught late (July cs.RO submission, outside the cs.NI daily window).

## Why it matters / what's new (ZH)
现有 uwb-ranging 条目在已测绘锚点集合的前提下改进估计（AB-Sync 时钟同步、Transformer/轨迹预测）。本条目是首个把*部署*成本——锚点测绘与逐对偏差——纳入估计器本身的工作，且来自 AMR 厂商（AGILOX）而非实验室。在商用 DWM1001 链路上测得的 1.19 m 常数偏差以及建模后 NEES 的下降，是审视厂商精度宣称的有用参照（对照 Murata 工厂跟踪与 NXP omlox 入门套件条目）。发现较晚（7 月 cs.RO 提交，不在 cs.NI 每日窗口内）。

## Images
![Indoor warehouse run: estimation error for three filter formulations | 室内仓库运行：三种滤波器形式的估计误差](https://arxiv.org/html/2607.15807v1/agilox_indoor.png)
![Outdoor run: pose estimates under varying sensor configurations | 室外运行：不同传感器配置下的位姿估计](https://arxiv.org/html/2607.15807v1/agilox_outdoor.png)
