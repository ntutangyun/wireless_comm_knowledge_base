---
id: 2026-09-23_arxiv-ftaloc-fiber-uwb-degraded-positioning
date_published: 2026-09-20
date_found: 2026-09-23
type: academic-paper
technology: uwb
title_en: "Fiber-Topology-Assisted Indoor Positioning Under UWB Degradation with Fixed-Lag Factor Graphs"
title_zh: "光纤拓扑辅助的 UWB 退化场景室内定位：基于固定滞后因子图优化"
url: "https://arxiv.org/abs/2609.23568"
source_quality: full
topics: [UWB, DAS, distributed-acoustic-sensing, factor-graph-optimization, indoor-positioning, sensor-fusion]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

On 20 September 2026, a team (Zhiyang Xue, Yuhan Jiang, Ziang Chen, Zhongxing Tian, Zeyu Feng, Lei Wang, Huan Huang, Dongdong Zou, Yi Cai) posted "Fiber-Topology-Assisted Indoor Positioning Under UWB Degradation with Fixed-Lag Factor Graphs" to arxiv (eess.SP). The paper addresses a specific UWB weakness: indoor positioning depends on multiple simultaneous anchor-to-tag range measurements, and when walls, equipment, or human bodies block or corrupt several of those ranging links at once, UWB alone can no longer provide enough geometric constraint for reliable 2D positioning. Rather than trying to extract more information from the degraded radio measurements (the usual robust-estimator or IMU/visual-fusion approach), the authors propose fusing in an independent, non-radio spatial reference: a calibrated fiber-optic sensing cable read out by distributed acoustic sensing (DAS), which detects footstep vibrations as one-dimensional along-fiber locations that a pre-calibrated topology map converts into 2D planar position observations. Their method, FTALoc-FGO, fuses UWB range factors, these fiber-derived position factors, motion factors, and soft room-boundary factors inside a fixed-lag factor-graph optimizer with Huber robust loss, and it explicitly weighs a single-layer (one fiber run) versus a dual-layer (two orthogonal fiber runs) topology, because a single straight fiber run constrains position strongly in only one direction (perpendicular to the fiber) and weakly along it, while two orthogonal layers combine into a much more isotropic (direction-independent) position estimate. The system was validated with a VIAVI HV3 DAS interrogator and about 150 m of sensing fiber laid out as a dual-layer orthogonal serpentine in a 6 m x 7 m room alongside three fixed UWB anchors, walking four distinct pedestrian paths and sweeping simulated UWB loss ratios from 10% to complete (100%) loss. Under complete UWB loss, FTALoc-FGO reduced causal-outage positioning RMSE (root-mean-square error, computed only during the outage window) by 32.6% for single-layer fiber topology and by 66.4% for dual-layer topology, relative to a robust UWB-only factor-graph baseline; P95 (95th-percentile) error dropped by 37.3% and 59.3% respectively. An anchor-availability ablation showed the largest relative gains from adding fiber assistance occur when only zero or one UWB anchor remains available (up to 55.8% RMSE reduction in the dual-layer case with one anchor), while with the full three-anchor geometry intact the fiber assistance adds little (0.3%-6.4%), since UWB alone is already well constrained in that regime.

## Summary (ZH)

2026年9月20日，一个研究团队（Zhiyang Xue、Yuhan Jiang、Ziang Chen、Zhongxing Tian、Zeyu Feng、Lei Wang、Huan Huang、Dongdong Zou、Yi Cai）在 arxiv（eess.SP 类别）发布了论文《光纤拓扑辅助的 UWB 退化场景室内定位：基于固定滞后因子图优化》（Fiber-Topology-Assisted Indoor Positioning Under UWB Degradation with Fixed-Lag Factor Graphs）。论文针对UWB的一个具体弱点展开：室内定位依赖多个锚点到标签的同步测距，一旦墙体、设备或人体同时遮挡或破坏多条测距链路，UWB单独已无法提供足够的几何约束以实现可靠的二维定位。与常规的鲁棒估计器或IMU/视觉融合思路（即从已退化的射频测量中尽量榨取更多信息）不同，作者提出融合一种独立的、非射频的空间参考：经过标定的光纤传感电缆，通过分布式声学传感（DAS）读出——该技术将脚步振动检测为沿光纤的一维位置，再由预先标定的拓扑映射转换为二维平面位置观测。他们提出的方法 FTALoc-FGO 在一个固定滞后因子图优化器中融合了UWB测距因子、光纤衍生的位置因子、运动因子以及软性房间边界因子，并采用 Huber 鲁棒损失；论文明确对比了单层（单条光纤走线）与双层（两条正交光纤走线）拓扑的差异，因为单条直线光纤仅能在垂直于光纤的方向上提供较强约束，沿光纤方向约束很弱，而两条正交布设的光纤组合后可获得更接近各向同性（不依赖方向）的位置估计。该系统使用 VIAVI HV3 DAS 解调仪与约150米传感光纤（在6米×7米房间内布设为双层正交蛇形走线），配合三个固定UWB锚点进行验证，测试了四条不同的行人路径，并将模拟UWB丢失比例从10%扫描至完全丢失（100%）。在UWB完全丢失的情况下，相较于仅使用UWB的鲁棒因子图基线，FTALoc-FGO 将因果中断期定位RMSE（均方根误差，仅在中断窗口内计算）在单层光纤拓扑下降低了32.6%，在双层拓扑下降低了66.4%；P95（第95百分位）误差则分别降低了37.3%和59.3%。锚点可用性消融实验显示，当仅剩零个或一个UWB锚点可用时，引入光纤辅助带来的相对增益最大（双层拓扑、单锚点情形下RMSE降低最多达55.8%）；而在三个锚点几何完整的情况下，光纤辅助带来的提升很小（0.3%-6.4%），因为此时UWB本身的约束已经足够充分。

## Key technical points (EN)

- Problem: simultaneous degradation/loss of multiple UWB anchor-to-tag ranges (walls, equipment, human-body blockage, multipath) removes enough geometric constraint for reliable 2D indoor positioning.
- Fusion source: a calibrated distributed-acoustic-sensing (DAS) fiber, which converts along-fiber footstep-vibration detections into 2D planar position observations via a pre-calibrated topology map; observations are anisotropic (strong perpendicular to the fiber, weak along it).
- Method (FTALoc-FGO): fixed-lag factor graph fusing UWB range factors, fiber position factors (single- or dual-layer), motion factors, and soft boundary factors, with Huber robust loss (delta = 1.0 m) and context-dependent fiber-factor weighting.
- Dual-layer (two orthogonal fiber runs) combines Fisher information from both layers into a near-isotropic 2D estimate (anisotropy ratio ~1.09 vs 4.86-17.65 for single layers), per a controlled footstep validation (Table II).
- Hardware/test setup: VIAVI HV3 DAS interrogator, ~150 m sensing fiber in a dual-layer orthogonal serpentine over a 6 m x 7 m room, 3 fixed UWB anchors, 4 pedestrian paths, simulated UWB loss swept 10%-100% via a 5-state Markov propagation model (LOS/mild NLOS/severe NLOS/outlier/dropout).
- Headline results at complete (100%) UWB loss vs. a robust UWB-only factor-graph baseline: causal-outage RMSE reduced 32.6% (single-layer) / 66.4% (dual-layer); P95 error reduced 37.3% / 59.3%.
- Anchor-availability ablation: largest relative gains from fiber assistance occur at 0-1 remaining UWB anchors (up to 55.8% RMSE reduction, dual-layer, 1 anchor); with all 3 anchors intact, fiber assistance adds only 0.3%-6.4%.

## Key technical points (ZH)

- 问题背景：多条UWB锚点-标签测距同时退化或丢失（墙体、设备、人体遮挡、多径）会导致几何约束不足，无法实现可靠的二维室内定位。
- 融合信源：经标定的分布式声学传感（DAS）光纤，通过预标定拓扑映射将沿光纤的脚步振动检测转换为二维平面位置观测；该观测具有各向异性（垂直光纤方向约束强，沿光纤方向约束弱）。
- 方法（FTALoc-FGO）：在固定滞后因子图中融合UWB测距因子、光纤位置因子（单层或双层）、运动因子与软性边界因子，采用 Huber 鲁棒损失（δ=1.0米）及与场景相关的光纤因子权重。
- 双层（两条正交光纤走线）将两层的费舍尔信息组合为近似各向同性的二维估计（各向异性比约1.09，而单层为4.86-17.65），由受控脚步验证实验（表II）证实。
- 硬件/测试配置：VIAVI HV3 DAS 解调仪，约150米传感光纤以双层正交蛇形布设于6米×7米房间，3个固定UWB锚点，4条行人路径，采用五状态马尔可夫传播模型（视距/轻度非视距/重度非视距/异常值/掉线）模拟UWB丢失比例从10%扫描至100%。
- 相较仅使用UWB的鲁棒因子图基线，在UWB完全（100%）丢失情况下的核心结果：因果中断期RMSE降低32.6%（单层）／66.4%（双层）；P95误差降低37.3%／59.3%。
- 锚点可用性消融实验：光纤辅助带来的相对增益在剩余0-1个UWB锚点时最大（双层、单锚点情形下RMSE最多降低55.8%）；三个锚点完整时，光纤辅助仅带来0.3%-6.4%的提升。

## Why it matters / what's new (EN)

The KB's UWB-degradation and multi-modal-fusion coverage so far has been IMU/visual/GNSS-based (e.g. the HYMN cross-technology ranging dataset and several UWB+vision/inertial robot-localization entries). This is the bin's first entry proposing distributed-acoustic-sensing (DAS) fiber — a building-infrastructure sensing modality with no radio link at all — as the fallback spatial reference when UWB anchors go dark, and the first in this KB to quantify the specific geometric reason a single fiber run is insufficient (anisotropic, direction-dependent constraint) versus why two orthogonal fiber runs are needed to restore isotropic 2D coverage. The reported result that fiber assistance helps most exactly when UWB infrastructure is most degraded (0-1 anchors) and helps least when UWB geometry is already sound (3 anchors) is a clean, testable characterization of when this kind of fusion is worth deploying.

## Why it matters / what's new (ZH)

本知识库此前关于UWB退化与多模态融合的报道均以IMU/视觉/GNSS为基础（例如 HYMN 跨技术测距数据集，以及若干融合UWB与视觉或惯性传感的机器人定位条目）。本条目是该板块首次提出以分布式声学传感（DAS）光纤——一种完全不依赖射频链路的建筑基础设施传感手段——作为UWB锚点失效时的备用空间参考，也是本知识库中首个量化说明为何单条光纤走线的约束不足（存在方向依赖的各向异性），以及为何需要两条正交光纤走线才能恢复各向同性的二维覆盖。论文报告的结果——光纤辅助恰好在UWB基础设施退化最严重（剩余0-1个锚点）时收益最大，而在UWB几何结构本就完好（3个锚点）时收益最小——为判断这类融合方案何时值得部署提供了清晰、可检验的判据。

## Images

![System architecture showing UWB anchors, DAS interrogator, and fiber layout in the test area | 系统架构图：测试区域内的UWB锚点、DAS解调仪与光纤布设](https://arxiv.org/html/2609.23568v1/system_model_latest.png)
![Three fiber topologies compared via Fisher-information error ellipses | 三种光纤拓扑的费舍尔信息误差椭圆对比](https://arxiv.org/html/2609.23568v1/typology_comparison.png)
![The nine observation cases spanning UWB and fiber availability states | 涵盖UWB与光纤可用性状态的九种观测情形](https://arxiv.org/html/2609.23568v1/9_cases.png)
