---
id: 2026-08-04_arxiv-leo-los-skyline-proactive-handover
date_published: 2026-07-31
date_found: 2026-08-04
type: academic-paper
technology: satellite
title_en: "Learning the LoS Skyline from LEO Satellite Observations for Proactive Handover"
title_zh: "从 LEO 卫星观测学习视距天际线以实现主动切换"
url: "https://arxiv.org/abs/2608.00125"
source_quality: abstract_only
topics: [LEO, handover, machine-learning, LoS, terminal]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 2
---

## Summary (EN)

A Fraunhofer FOKUS group (Corici, Zaboub, Eichhorn, Buhr; IEEE PIMRC 2026 workshop, submitted 2026-07-31) tackles a practical LEO terminal problem: links to fast-moving satellites die abruptly when the satellite passes behind a building or terrain, and reactive handover then costs an outage. Existing proactive approaches need 3D building maps, sky cameras, or extra sensors — infrastructure a consumer terminal doesn't have.

The paper's move is map-free skyline learning: the terminal reconstructs its own local line-of-sight "skyline" — the obstruction boundary across azimuth and elevation — purely from its history of passive satellite signal observations, treating obstruction as a binary classification problem over sky directions. Two estimators are compared: a Gaussian Process classifier and an MLP with circular azimuth encoding plus Monte-Carlo-dropout uncertainty quantification. The learned obstruction surface is then fused with published satellite ephemeris data by an "EphemerisWindow" algorithm that forecasts when the currently-serving satellite's trajectory will cross into the obstructed region — predicting link termination before it happens and triggering handover preparation in advance.

Both estimators beat empirical baselines, enabling proactive handover with no environmental sensing hardware at all — the constellation's own signals are the survey instrument.

## Summary (ZH)

弗劳恩霍夫 FOKUS 团队（Corici、Zaboub、Eichhorn、Buhr；IEEE PIMRC 2026 研讨会，2026-07-31 提交）处理一个实际的 LEO 终端问题：快速移动的卫星一旦被建筑或地形遮挡，链路会突然中断，被动式切换随之付出断连代价。现有主动方案需要 3D 建筑地图、天空相机或额外传感器——消费级终端并不具备。

论文的做法是免地图的天际线学习：终端仅凭其被动卫星信号观测历史，重建自身局部视距"天际线"——方位角与仰角上的遮挡边界——将遮挡判断建模为对天空方向的二元分类。比较了两种估计器：高斯过程分类器，以及带圆形方位角编码与蒙特卡洛 Dropout 不确定性量化的 MLP。学得的遮挡面再通过 "EphemerisWindow" 算法与公开的卫星星历融合，预测当前服务卫星轨迹何时进入遮挡区——在链路中断前预测终止并提前触发切换准备。

两种估计器均优于经验基线，实现完全无需环境感知硬件的主动切换——星座自身的信号就是测绘仪器。

## Key technical points (EN)

- Obstruction detection as binary classification over (azimuth, elevation); skyline learned solely from passive satellite signal observations at the terminal.
- Two estimators: Gaussian Process classifier vs MLP with circular azimuth encoding + MC-dropout uncertainty.
- EphemerisWindow algorithm fuses the learned obstruction surface with satellite trajectories to forecast link-termination events ahead of time.
- No 3D maps, sky cameras, or extra sensors required; both estimators outperform empirical baselines.
- Venue: IEEE PIMRC 2026 workshop.

## Key technical points (ZH)

- 将遮挡检测建模为（方位角、仰角）上的二元分类；天际线仅由终端的被动卫星信号观测学习。
- 两种估计器：高斯过程分类器 vs 带圆形方位编码 + MC-dropout 不确定性的 MLP。
- EphemerisWindow 算法将学得的遮挡面与卫星轨迹融合，提前预报链路终止事件。
- 无需 3D 地图、天空相机或额外传感器；两估计器均优于经验基线。
- 发表：IEEE PIMRC 2026 研讨会。

## Why it matters / what's new (EN)

The leo-constellations bin's handover thread has so far been network-side (2026-08-03's NTN NAS-timer entry; earlier LEO path-selection work); this is the first terminal-side, self-surveying approach in the KB — the terminal turns constellation motion into a free sky-survey and converts reactive outages into scheduled handovers. The idea generalises naturally to any dense-constellation service (including D2D smartphones, where sky cameras are a non-starter), which links it to the sat-direct-device thread. Abstract-level ingest; the PIMRC camera-ready may add quantitative outage-reduction numbers worth a source_quality upgrade later.

## Why it matters / what's new (ZH)

leo-constellations 主题的切换线索此前偏网络侧（2026-08-03 的 NTN NAS 定时器条目；更早的 LEO 路径选择工作）；本条是 KB 中首个终端侧自测绘方案——终端把星座运动变成免费的天空测绘，将被动断连转化为有计划的切换。该思路可自然推广到任何密集星座业务（包括不可能装天空相机的 D2D 智能手机），从而与 sat-direct-device 线索相连。当前为摘要级收录；PIMRC 正式版若给出断连降低的量化数据，可在后续运行升级 source_quality。
