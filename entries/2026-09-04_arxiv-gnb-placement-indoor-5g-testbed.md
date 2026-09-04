---
id: 2026-09-04_arxiv-gnb-placement-indoor-5g-testbed
date_published: 2026-09-01
date_found: 2026-09-04
type: academic-paper
technology: cellular
title_en: "Data-Driven Case Study of gNB Placement Optimization in a Private Indoor 5G Testbed"
title_zh: "面向私有室内5G测试床的gNB选址优化：数据驱动案例研究"
url: "https://arxiv.org/abs/2609.01510"
source_quality: full
topics: [radio-planning, gNB-placement, indoor-5G, private-network, RSRP, LightGBM, srsRAN]
topic_primary: 5g-nr
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Diogo de O. Soares, Victor F. Monteiro, Fco. Rodrigo P. Cavalcanti, Vicente A. de Sousa Jr. and J. Pedro B. Lima (arXiv v1, 1 Sep 2026; accepted for the XLIV Brazilian Symposium on Telecommunications and Signal Processing, SBrT 2026) present a measurement-driven case study on where to place gNBs inside a private indoor 5G deployment. The authors' motivation: "the successful deployment of private cellular infrastructures in indoor environments depends on accurate radio planning, since signal propagation is strongly influenced by walls, partitions, furniture, and other structural obstacles," and standardized propagation models can lose accuracy when a specific building's architecture differs from the assumptions used to develop those models — motivating a data-driven, measurement-calibrated alternative for this particular scenario.

The testbed consists of an open-source srsRAN gNB running on a laptop with an Ettus Research USRP B210 radio front-end, an Open5GS 5G core on a separate desktop, and a Samsung Galaxy S25 as the UE running Cellular-Pro software to log RSRP, all operating at 3.7 GHz (5G NR band n78). The test environment is an office floor spanning roughly 35.64 x 10.00 meters with 39 wall segments manually mapped into a geometric model. Two measurement campaigns totaling 280 RSRP samples (147 and 133 points, from different gNB locations) trained a LightGBM regressor that predicts RSRP from two physically meaningful features per gNB-UE pair: Euclidean distance and the number of walls intersecting the direct propagation path. The trained model reaches a mean absolute error of 5.50 dB, mean squared error of 51.02 dB-squared, and root mean squared error of 7.02 dB on the measured data.

Using this trained propagation model, the authors run a combinatorial search over candidate gNB locations placed at 1-meter resolution across the floor plan, comparing two placement objectives: coverage maximization (maximizing the fraction of locations exceeding a -95 dBm threshold) and max-min optimization (maximizing the weakest predicted signal anywhere in the space). With a single gNB, coverage-maximization placement reaches 14.0% of the floor above -95 dBm (10th-percentile RSRP -131.7 dBm, worst case -136.1 dBm), while max-min placement covers a smaller 9.6% but with a comparable worst case (-136.1 dBm). Adding gNBs improves both objectives: at four gNBs, coverage-maximization placement reaches 37.1% coverage (10th percentile -111.5 dBm, worst case -120.7 dBm), while max-min placement reaches 26.0% coverage but with a substantially better worst-case and 10th-percentile RSRP (-113.2 dBm and -106.3 dBm respectively). The paper frames this as a fundamental, quantified trade-off: coverage-maximization placement expands the served area, while max-min placement reduces coverage holes and improves cell-edge conditions at the cost of covering less area overall, and the authors note that the methodology "is not restricted to this setting and can be readily extended to larger indoor deployments, where multiple next generation NodeBs are often required to satisfy coverage and capacity requirements."

## Summary (ZH)

Diogo de O. Soares、Victor F. Monteiro、Fco. Rodrigo P. Cavalcanti、Vicente A. de Sousa Jr. 与 J. Pedro B. Lima（arXiv v1，2026年9月1日；已被第44届巴西电信与信号处理研讨会 SBrT 2026 接受）针对私有室内5G部署中gNB选址问题，开展了一项测量驱动的案例研究。作者的动机是："私有蜂窝基础设施在室内环境中的成功部署依赖于精确的无线规划，因为信号传播受墙体、隔断、家具及其他结构性障碍物的强烈影响"，而标准化传播模型在具体建筑结构与模型开发时所假设的场景不同时，其精度可能下降——这促使作者针对该特定场景采用数据驱动、经实测校准的替代方案。

该测试床由运行在笔记本电脑上的开源 srsRAN gNB（配备 Ettus Research USRP B210 射频前端）、独立台式机上的 Open5GS 5G核心网，以及运行 Cellular-Pro 软件用于记录RSRP的三星 Galaxy S25（作为UE）组成，全部工作在3.7 GHz（5G NR n78频段）。测试环境为一处约35.64米×10.00米的办公楼层，其中39段墙体被人工标注进几何模型。两轮测量活动共采集280个RSRP样本（分别来自不同gNB位置的147个与133个测量点），用于训练一个 LightGBM 回归器，该模型基于每个gNB-UE对的两个具有物理意义的特征——欧氏距离与直射传播路径上相交的墙体数量——预测RSRP。训练所得模型在实测数据上的平均绝对误差为5.50 dB，均方误差为51.02 dB平方，均方根误差为7.02 dB。

利用训练好的传播模型，作者以1米分辨率在楼层平面图上对候选gNB位置进行组合搜索，比较两种选址目标：覆盖最大化（最大化超过-95 dBm门限的位置占比）与最大-最小优化（最大化空间中预测信号最弱处的信号强度）。在单个gNB的情形下，覆盖最大化选址使楼层中14.0%的区域超过-95 dBm（第10百分位RSRP为-131.7 dBm，最差情况为-136.1 dBm），而最大-最小选址覆盖率较小、为9.6%，但最差情况相近（-136.1 dBm）。增加gNB数量可改善两种目标下的表现：在4个gNB时，覆盖最大化选址覆盖率达到37.1%（第10百分位-111.5 dBm，最差情况-120.7 dBm），而最大-最小选址覆盖率为26.0%，但其最差情况与第10百分位RSRP明显更优（分别为-113.2 dBm与-106.3 dBm）。论文将此呈现为一种基本的、经量化的权衡：覆盖最大化选址扩大了服务区域，而最大-最小选址以牺牲整体覆盖面积为代价、减少了覆盖空洞并改善了小区边缘条件；作者指出该方法并不局限于这一小规模场景，可直接推广至需要多个 gNB 的更大规模室内部署。

## Key technical points (EN)
- Motivation, quoted: standardized propagation models "may be limited when applied to specific deployment scenarios whose architectural characteristics differ from the assumptions considered during model development."
- Testbed: srsRAN gNB (laptop) + USRP B210, Open5GS core, Samsung Galaxy S25 UE with Cellular-Pro RSRP logging, 3.7 GHz / NR band n78.
- Environment: ~35.64 x 10.00 m office floor, 39 manually-mapped wall segments; two measurement campaigns, 280 RSRP samples total (147 + 133).
- Propagation model: LightGBM regressor on two features (Euclidean distance, wall-intersection count); MAE 5.50 dB, MSE 51.02 dB^2, RMSE 7.02 dB.
- Placement search: 1-meter-resolution combinatorial search over candidate gNB sites; two objectives compared, coverage-maximization (>-95 dBm threshold) vs max-min.
- Results at 1 gNB: coverage-max 14.0% coverage (10th pct -131.7 dBm, worst -136.1 dBm) vs max-min 9.6% coverage (worst -136.1 dBm). At 4 gNBs: coverage-max 37.1% coverage (10th pct -111.5 dBm, worst -120.7 dBm) vs max-min 26.0% coverage (10th pct -106.3 dBm, worst -113.2 dBm).

## Key technical points (ZH)
- 动机原文引述：标准化传播模型"在应用于具体部署场景、其建筑特征与模型开发时所采用假设不同时，精度可能受限"。
- 测试床：笔记本上运行的 srsRAN gNB + USRP B210、Open5GS核心网、搭载 Cellular-Pro RSRP记录软件的三星 Galaxy S25 UE，工作于3.7 GHz / NR n78频段。
- 环境：约35.64米×10.00米办公楼层，人工标注39段墙体；两轮测量活动，共280个RSRP样本（147+133）。
- 传播模型：基于两个特征（欧氏距离、相交墙体数）的 LightGBM 回归器；平均绝对误差5.50 dB，均方误差51.02 dB平方，均方根误差7.02 dB。
- 选址搜索：以1米分辨率对候选gNB位置进行组合搜索；比较覆盖最大化（超过-95 dBm门限）与最大-最小两种目标。
- 结果（1个gNB）：覆盖最大化覆盖率14.0%（第10百分位-131.7 dBm，最差-136.1 dBm），最大-最小覆盖率9.6%（最差-136.1 dBm）；结果（4个gNB）：覆盖最大化覆盖率37.1%（第10百分位-111.5 dBm，最差-120.7 dBm），最大-最小覆盖率26.0%（第10百分位-106.3 dBm，最差-113.2 dBm）。

## Why it matters / what's new (EN)
This knowledge base's 5g-nr coverage spans scheduling, sidelink, beamforming and AI-native PHY topics, but has not previously had an entry on the basic radio-planning question of where to physically place gNBs in an indoor private-network deployment. This paper is the first entry here to address gNB siting as a measurement-calibrated, data-driven optimization problem, and to quantify the concrete trade-off between maximizing served area versus minimizing coverage holes using a real srsRAN/Open5GS testbed rather than a purely simulated environment.

## Why it matters / what's new (ZH)
本知识库的5G NR板块已涵盖调度、侧链路、波束赋形与AI原生物理层等主题，但此前尚无条目涉及室内私有网络部署中"gNB应实际放置于何处"这一基础性无线规划问题。本文是本知识库中首个将gNB选址作为经测量校准的数据驱动优化问题来处理的条目，并基于真实的 srsRAN/Open5GS 测试床（而非纯仿真环境）量化了"最大化服务面积"与"最小化覆盖空洞"之间的具体权衡。

## Images

None.
