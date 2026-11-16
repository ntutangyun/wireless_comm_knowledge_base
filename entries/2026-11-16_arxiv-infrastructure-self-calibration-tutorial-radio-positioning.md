---
id: 2026-11-16_arxiv-infrastructure-self-calibration-tutorial-radio-positioning
date_published: 2026-11-11
date_found: 2026-11-16
technology: uwb
type: academic-paper
title_en: "A Tutorial on Infrastructure Self-Calibration for Radio-Based Indoor Positioning"
title_zh: "无线电室内定位的基础设施自标定教程"
url: "https://arxiv.org/abs/2611.15503"
source_quality: full
topics: [UWB, anchor self-calibration, factor graph, two-way ranging, robust loss, range offset, rigidity, NLOS, indoor positioning, tutorial]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

arXiv 2611.15503 (eess.SP, submitted 11 November 2026) is a tutorial by Paul Schwarzbach (Chair of Transport Systems Information Technology, TUD Dresden University of Technology). The manuscript states it has been submitted to the IEEE for possible publication. It treats the calibration of radio-positioning infrastructure (anchors, access points, base stations or reconfigurable intelligent surfaces) from the infrastructure's own measurements as one estimation problem, which the paper says is studied under several names: self-calibration, auto-positioning, anchor self-localization, network localization and radio simultaneous localization and mapping. The index terms cover UWB, BLE, Wi-Fi fine timing measurement and 5G positioning, but the worked examples use UWB two-way ranging in two dimensions.

The tutorial formulates the problem as a single factor graph: the measurement topology sets the factors, reference information enters as priors, and other measurement models add nuisance states. It covers what ranges can identify (graph rigidity, and the motion a mobile device must contribute), and presents multidimensional scaling, batch nonlinear least squares, parametric and nonparametric recursive filters and convex relaxations as inference engines over that graph. One session of a ten-anchor UWB deployment is carried through every step; recordings from a second deployment with much non-line-of-sight (NLOS) propagation and a public partial mesh serve as contrasts. The paper states that code and result tables are released openly and that the data are published separately (GitHub repository PaulSchwarzbach/radiocal).

Three lessons are drawn from the examples. (1) On a full mesh, choose a robust loss and set its scale first, then calibrate with the engine of the positioning system, since the engines then reach similar errors; on the NLOS deployment the paper reports engine medians of 0.63-0.79 m under a Cauchy kernel against 2.9-3.9 m under a Gaussian kernel. (2) On thinned or partial meshes, test the result at surveyed check points, because the start decides which minimum a solver reaches. (3) On a line-of-sight deployment, estimate range offsets, which lower the error floor that a systematic ranging bias sets and a robust loss cannot remove; the paper's Table VI lists anchor RMSE of 0.23 m without and 0.13 m with per-device offsets on full meshes of that deployment. A decision tree leads from what a practitioner knows (topology, reference information) to an engine and the checks a calibration needs. The paper lists as open problems a range bias that varies by pair, which it says no blind calibration can identify, and the testing of identifiability in sparse and dynamic views. It also notes that its examples test neither how anchor errors reach tag position fixes nor offset calibration on a surveyed network.

## Summary (ZH)

arXiv 2611.15503（eess.SP，2026 年 11 月 11 日提交）是德累斯顿工业大学交通系统信息技术教席 Paul Schwarzbach 撰写的教程，稿件注明已提交 IEEE 以备发表。文章把“利用基础设施自身测量来标定无线电定位基础设施（锚点、接入点、基站或可重构智能表面）”视为一个统一的估计问题，并指出该问题在不同社区有多种名称：自标定、自动定位、锚点自定位、网络定位以及无线电 SLAM。关键词涵盖 UWB、BLE、Wi-Fi 精细时间测量与 5G 定位，但实例使用的是二维 UWB 双向测距。

教程将问题表述为一张因子图：测量拓扑决定因子，参考信息以先验形式进入，其他测量模型增加冗余状态。内容包括测距可辨识的内容（图刚性，以及移动设备须提供的运动），并将多维标度、批量非线性最小二乘、参数化与非参数化递归滤波、凸松弛作为该图上的推断引擎。文中以一个十锚点 UWB 部署的一次采集贯穿各步骤，并以第二个 NLOS 较多的部署和一个公开的部分网格数据作为对照。论文称代码与结果表公开发布，数据另行发布（GitHub 仓库 PaulSchwarzbach/radiocal）。

示例归纳出三条经验。（1）在全网格上，先选稳健损失并设定其尺度，再用定位系统自身的引擎标定，此时各引擎误差接近；论文报告在 NLOS 部署中，Cauchy 核下各引擎中位数为 0.63-0.79 m，高斯核下为 2.9-3.9 m。（2）在被稀疏化或部分网格上，应在已测绘的检查点上检验结果，因为起点决定求解器落入哪个极小值。（3）在视距部署中应估计测距偏置，它能降低系统性测距偏差所设定、而稳健损失无法消除的误差下限；论文表 VI 给出该部署全网格上的锚点 RMSE：无偏置 0.23 m，每设备偏置 0.13 m。决策树从使用者已知的信息（拓扑、参考信息）引导到引擎与所需检验。论文列出的开放问题包括随锚点对而变化的测距偏差（称任何盲标定都无法辨识）以及稀疏与动态视图下可辨识性的检验；同时指出其示例既未检验锚点误差如何传递到标签定位，也未检验已测绘网络上的偏置标定。

## Key technical points (EN)

- **Formulation** — one factor graph for all topologies: measurement topology sets the factors, reference information enters as priors, other measurement models add nuisance states (device delays, clock offsets, orientations).
- **Identifiability** — graph rigidity test on the planned edge set can be run before any survey; mobile-device motion is what makes some topologies identifiable.
- **Engines compared** — multidimensional scaling, batch nonlinear least squares, EKF and particle/grid filters, convex relaxation; all run on the same data views under one protocol.
- **Results quoted (Table VI, aligned anchor RMSE)** — Gaussian to Cauchy loss, full meshes of the NLOS deployment: 3.94 m to 0.79 m; no offsets to per-device offsets, full meshes of the LOS deployment: 0.23 m to 0.13 m; classical start to oracle (survey) start, globally rigid random views: 4.03 m to 0.24 m.
- **Hardware context** — the examples use measured two-way-ranging data from a ten-anchor UWB deployment; the tutorial itself is not limited to UWB.
- **Open data/code** — [paper](https://arxiv.org/abs/2611.15503), [code](https://github.com/PaulSchwarzbach/radiocal).

## Key technical points (ZH)

- **问题表述** — 所有拓扑统一为一张因子图：测量拓扑决定因子，参考信息作先验，其他测量模型增加冗余状态（设备延迟、时钟偏移、朝向）。
- **可辨识性** — 对计划边集做图刚性检验，可在任何测绘之前进行；移动设备的运动使部分拓扑变得可辨识。
- **比较的引擎** — 多维标度、批量非线性最小二乘、EKF 及粒子/网格滤波、凸松弛；均在同一协议下处理相同数据视图。
- **引用结果（表 VI，对齐后锚点 RMSE）** — NLOS 部署全网格，高斯损失改 Cauchy 损失：3.94 m 降至 0.79 m；LOS 部署全网格，无偏置改每设备偏置：0.23 m 降至 0.13 m；全局刚性随机视图，经典起点改真值（测绘）起点：4.03 m 降至 0.24 m。
- **硬件背景** — 示例使用十锚点 UWB 部署的双向测距实测数据；教程本身不限于 UWB。
- **开放数据与代码** — [论文](https://arxiv.org/abs/2611.15503)，[代码](https://github.com/PaulSchwarzbach/radiocal)。

## Why it matters / what's new (EN)

Anchor survey cost and repeatability is the deployment question the paper starts from, and it follows the same author's UWB-ASC dataset descriptor (arXiv 2611.11579, already in this knowledge base) by three days; the tutorial's two UWB deployments are the measured data that dataset describes. The paper's contribution is a decision path rather than a new algorithm: when a robust loss, a surveyed check, or a range-offset state is the first thing to change. Its caveat is also explicit: Table VI RMSEs are anchor errors measured in one industrial hall (two deployments) with one chip family in 2D, not tag-position accuracy, and the manuscript is a submission, not yet a published article.

## Why it matters / what's new (ZH)

锚点测绘成本及其可重复性是论文的出发点；本文比同一作者的 UWB-ASC 数据集说明（arXiv 2611.11579，本知识库已收录）晚三天，教程中的两个 UWB 部署即该数据集所述的实测数据。论文的贡献是一条决策路径而非新算法：何时应首先更换稳健损失、增加测绘检查点或引入测距偏置状态。其局限同样明确：表 VI 的 RMSE 是在同一工业厅内的两个部署、同一系列芯片、二维条件下测得的锚点误差，而非标签定位精度；且稿件为投稿版本，尚未正式发表。

## Images

None.
