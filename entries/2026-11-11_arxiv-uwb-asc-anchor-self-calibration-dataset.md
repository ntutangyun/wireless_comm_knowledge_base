---
id: 2026-11-11_arxiv-uwb-asc-anchor-self-calibration-dataset
date_published: 2026-11-08
date_found: 2026-11-11
technology: uwb
type: academic-paper
title_en: "Descriptor: UWB Anchor Self-Calibration Dataset (UWB-ASC)"
title_zh: "数据集说明：UWB 锚点自标定数据集（UWB-ASC）"
url: "https://arxiv.org/abs/2611.11579"
source_quality: full
topics: [UWB, anchor self-calibration, two-way ranging, dataset, NLOS, DW1000, indoor positioning, auto-positioning]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

arXiv 2611.11579 (eess.SP, submitted 8 November 2026) is a dataset descriptor by Paul Schwarzbach (Chair of Transport Systems Information Technology, TUD Dresden University of Technology). UWB-ASC is a testing ground for anchor self-calibration, which estimates the positions of fixed nodes of an indoor positioning system from ranges among the nodes and to mobile devices instead of surveying every anchor. The paper states that the survey drives deployment cost and must be repeated when anchors move or are added. The dataset has three parts that share one format (Parquet and YAML files, with a data DOI of 10.5281/zenodo.24055896).

The first part is two measured deployments, recorded in 2025 in one industrial hall in Torgau, Germany, with Qorvo MDEK1001 modules (DW1000 chip, two-way ranging). The line-of-sight (LOS) deployment has 10 anchors ranging with a tag that a person carried on walks, tracked by a Vicon motion-capture system. The non-line-of-sight (NLOS) deployment has 12 nodes ranging among obstructions, one of which roves over surveyed markers in 20 quasi-static sessions. Both deployments also have static sessions, and a Leica TS16 total station surveyed every fixed node. The paper lists three static sessions, two LOS walks (about 3,600 epochs each) and the 20 quasi-static NLOS sessions. Field labels record the LOS, obstructed-LOS or NLOS condition of each node pair as judged by eye. The modules ran a modified, unpublished firmware, and the paper states that neither its version nor the physical-layer settings (channel, pulse repetition frequency, preamble and data rate) were recorded; the NLOS logs carry no timestamps, so epochs are ordered by frame counter alone, and the Vicon poses were stored at a session mean of 23.5 to 24.1 Hz in bursts although the system advanced at about 120 Hz.

The second part is a seeded range simulator that draws synthetic ranges on the surveyed geometry with user-set error components, from noise-free ranges to NLOS errors (hardware noise, a log-normal multipath excess that becomes more likely with distance, outliers, and optional distance-dependent dropouts), with 81 frozen draws in 5 conditions as the reference. The third part is a set of readers that convert the ranges among static nodes of two public UWB datasets, TWR-CLOUD-Bern and selfloc, into the same format without redistributing them.

Topology views, short YAML masks that never add data, select the ranges for each class of method: fully_meshed (anchor ranges, no priors), mobile_assisted (anchor ranges plus mobile-to-anchor ranges, with the surveyed priors of three anchors), slam_bipartite (mobile-to-anchor ranges only) and multi_hop (anchor mesh thinned to the three nearest neighbours of each anchor). The paper also defines the datum convention (absolute with priors; otherwise a gauge triple) and an evaluation that aligns an estimate to the survey in the horizontal plane by a rigid transform without scale. Related datasets named in the paper include TWR-CLOUD-Bern, selfloc, UTIL, MILUV, an outdoor set by Lee et al., the AAU meshed set and the HYMN dataset, which comes from the same hall.

## Summary (ZH)

arXiv 2611.11579（eess.SP，2026 年 11 月 8 日提交）是德累斯顿工业大学（TUD）交通系统信息技术教席 Paul Schwarzbach 的数据集说明论文。UWB-ASC 是锚点自标定方法的测试平台：锚点自标定利用节点之间以及节点到移动设备的测距来估计室内定位系统固定节点的位置，而不必逐个测量锚点。论文指出，测量工作是部署成本的主要来源，且在锚点移动或增加时必须重复。数据集分为三部分，共用同一格式（Parquet 与 YAML 文件，数据 DOI 为 10.5281/zenodo.24055896）。

第一部分是两个实测部署，2025 年录制于德国 Torgau 的同一工业厅，使用 Qorvo MDEK1001 模块（DW1000 芯片，双向测距）。视距（LOS）部署有 10 个锚点，与由人手持行走的标签测距，标签由 Vicon 动捕系统跟踪。非视距（NLOS）部署有 12 个节点在障碍物之间测距，其中一个在 20 个准静态会话中依次置于已测量的标记点上。两个部署都含静态会话，且全站仪（Leica TS16）测量了每个固定节点。论文列出了 3 个静态会话、2 次 LOS 行走（各约 3,600 个测距历元）和 20 个 NLOS 准静态会话。现场标签记录了每对节点目测判定的 LOS、遮挡视距（OLOS）或 NLOS 状态。模块运行的是经修改且未公开的固件，论文称其版本及物理层设置（信道、脉冲重复频率、前导码和数据率）均未记录；NLOS 日志没有时间戳，仅靠帧计数器排序历元；Vicon 系统帧率约 120 Hz，但位姿以突发方式按会话平均 23.5 至 24.1 Hz 存储。

第二部分是带种子的测距模拟器，在已测量的几何布局上生成合成测距，误差成分由用户设定，从无噪声测距到 NLOS 误差（硬件噪声、随距离更易出现的对数正态多径附加量、离群值以及可选的随距离增大的丢失），并以 5 种条件下的 81 个冻结样本作为基准。第三部分是读取器，将两个公开 UWB 数据集 TWR-CLOUD-Bern 与 selfloc 中静态节点间的测距转换为同一格式，无需再分发这些数据。

拓扑视图是一种不新增数据的简短 YAML 掩码，为各类方法选取测距：fully_meshed（锚点间测距，无先验）、mobile_assisted（锚点间测距加移动节点到锚点的测距，并带三个锚点的测量先验）、slam_bipartite（仅移动节点到锚点的测距）和 multi_hop（将锚点网格稀疏化为每个锚点的三个最近邻）。论文还规定了基准（datum）约定（有先验时为绝对基准，否则使用规范三元组）以及在水平面内用无尺度刚体变换将估计结果对齐到测量结果的评估方式。论文列出的相关数据集包括 TWR-CLOUD-Bern、selfloc、UTIL、MILUV、Lee 等人的室外数据集、AAU meshed 数据集，以及来自同一工业厅的 HYMN 数据集。

## Key technical points (EN)

- **Scope**: anchor self-calibration testbed on UWB two-way ranging, with LOS (10 anchors, walking tag, Vicon truth) and NLOS (12 nodes, 20 quasi-static marker sessions) deployments in one industrial hall; every fixed node surveyed with a total station.
- **Hardware**: Qorvo MDEK1001 (DW1000), modified unpublished firmware; PHY settings (channel, PRF, preamble, data rate) not recorded.
- **Simulator**: seeded range-error model with noise, log-normal multipath, outliers and dropouts; 81 frozen draws in 5 conditions.
- **Topology views**: fully_meshed, mobile_assisted, slam_bipartite, multi_hop select ranges and priors from one session.
- **Interoperability**: readers convert TWR-CLOUD-Bern and selfloc ranges into the same format; data on Zenodo (10.5281/zenodo.24055896).

## Key technical points (ZH)

- **范围**：基于 UWB 双向测距的锚点自标定测试平台，同一工业厅内包含 LOS 部署（10 个锚点、行走标签、Vicon 真值）与 NLOS 部署（12 个节点、20 个准静态标记点会话）；所有固定节点均经全站仪测量。
- **硬件**：Qorvo MDEK1001（DW1000），经修改且未公开的固件；物理层设置（信道、PRF、前导码、数据率）未记录。
- **模拟器**：带种子的测距误差模型，含噪声、对数正态多径、离群值与丢失；5 种条件下 81 个冻结样本。
- **拓扑视图**：fully_meshed、mobile_assisted、slam_bipartite、multi_hop 从同一会话中选取测距与先验。
- **互操作**：读取器将 TWR-CLOUD-Bern 与 selfloc 的测距转换为同一格式；数据发布于 Zenodo（10.5281/zenodo.24055896）。

## Why it matters / what's new (EN)

The paper states that open UWB datasets are few and mostly from office environments, and that industrial environments are severely underrepresented in the recent IPIN literature it reviewed; UWB-ASC adds an industrial-hall set with surveyed truth for every fixed node and a controlled-error simulator on the same format. The HYMN dataset (Ammad et al., with Schwarzbach as a co-author; already in this knowledge base) comes from the same hall. Constraints stated in the paper: one building and one floor, near-planar layouts, unrecorded PHY settings and sparse motion-capture truth in time.

## Why it matters / what's new (ZH)

论文指出，开放的 UWB 数据集很少且多来自办公环境，在其综述的近期 IPIN 文献中工业环境严重缺乏代表性；UWB-ASC 补充了一个工业厅数据集，每个固定节点都有测量真值，并提供同一格式的可控误差模拟器。HYMN 数据集（Ammad 等，Schwarzbach 为合著者；本知识库已收录）来自同一工业厅。论文中说明的约束：仅一栋建筑、一层楼，布局近似平面，物理层设置未记录，且动捕真值在时间上稀疏。

## Images

None.
