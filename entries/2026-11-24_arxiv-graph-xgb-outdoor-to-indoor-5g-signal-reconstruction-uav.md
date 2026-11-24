---
id: 2026-11-24_arxiv-graph-xgb-outdoor-to-indoor-5g-signal-reconstruction-uav
date_published: 2026-11-19
date_found: 2026-11-24
type: academic-paper
technology: cellular
title_en: "Graph-XGB: A Hybrid GNN Framework for Outdoor-to-Indoor 5G Signal Reconstruction via Aerial-Only UAV RF Sensing"
title_zh: "Graph-XGB：基于仅空中无人机射频感知的室外到室内 5G 信号重建混合 GNN 框架"
url: "https://arxiv.org/abs/2611.26828"
source_quality: full
topics: [in-building-coverage, outdoor-to-indoor, UAV-RF-sensing, graph-neural-network, XGBoost, RSRP, 5G-NR, coverage-prediction]
topic_primary: 5g-nr
topics_secondary: [6g-vision]
novelty_score: 3
---

## Summary (EN)

Hason Rudd, Shin, Pattrapong, Huo (University of Technology Sydney) and Wang (The Hong Kong Polytechnic University) address predicting indoor 5G signal levels from measurements that a UAV can only collect outside a building. Their Graph-XGB model uses a graph attention encoder over a floor-aware 3D graph to propagate the exterior boundary measurements to interior nodes, compresses the embeddings with PCA, and decodes each signal metric with its own XGBoost regressor. It is evaluated on a real 5G NR dataset of 613 nodes across 10 floors of one building. The paper is an accepted manuscript of a BESC 2026 chapter (Springer LNCS vol. 17175).

## Summary (ZH)

Hason Rudd、Shin、Pattrapong、Huo（悉尼科技大学）与 Wang（香港理工大学）研究如何根据无人机只能在建筑外部采集的测量值预测室内 5G 信号水平。其 Graph-XGB 模型在感知楼层的三维图上使用图注意力编码器，把外部边界测量值传播到室内节点，用 PCA 压缩嵌入，再由各自独立的 XGBoost 回归器分别解码每一项信号指标。模型在一栋建筑 10 个楼层、共 613 个节点的真实 5G NR 数据集上评估。该论文为 BESC 2026 章节（Springer LNCS 第 17175 卷）的录用稿。

## Key technical points (EN)

- Problem framing: interior 3D signal states cannot be sampled from exterior flight paths, so the task is an outdoor-to-indoor (O2I) inversion. Feature masking zeroes the RF vector of all interior nodes, so no interior RF measurement is a model input; interior observations are used only as training supervision, and evaluation is on held-out interior nodes of the same building.
- Graph construction: a Floor-Aware 3D Distance metric adds a vertical penalty (eta = 75 m, equating about 15 dB of per-floor attenuation to 75 m of horizontal travel at about 2 dB per 10 m) in a k = 8 nearest-neighbour graph, plus a "bridge edge" rule linking any interior node without an exterior neighbour to its nearest exterior node. The graph has 613 nodes and 9,668 directed edges (229 external nodes, 384 internal).
- Model: a modified SpiderGNN encoder of stacked GATv2 layers outputs 128-dimensional embeddings; PCA to 10 components retains 96.6% of variance; the result is concatenated with raw spatial features and fed to separate XGBoost regressors (max_depth 4 for RSSI/RSRP, max_depth 6 for RSRQ, SNR and CQI), averaged over 9 network initializations.
- Data: external drone RF scans plus internal TEMS walk-test measurements from one 10-floor building, with inverse-distance-weighting calibration of drifted GPS coordinates and consistency filters derived from 3GPP TS 36.133. The measurements are 5G NR, which the authors describe as a proxy for the 6G in-building coverage challenge and not as direct sub-THz evidence. Code and data are linked from a GitHub repository in the paper.
- Results on the 58-node test split (70/15/15 stratified split of the 384 internal nodes): R2 of 0.759 (RSSI) and 0.770 (RSRP), against 0.560 and 0.467 for the GraphSAGE-based SimpleGNN baseline (35.5% and 64.9% improvement) and 0.443 and 0.381 for an end-to-end SpiderGNN. RSSI RMSE is 6.43 dBm and RSRP RMSE 6.36 dBm. A variant that cascades RSRP predictions into the interference-dependent regressors gave slightly lower RSSI/RSRP R2 (0.746, 0.763).
- Limits stated by the authors: RSRQ, SNR and CQI stay at low R2 (0.268, 0.146 and 0.195 for the proposed model), described as a spatial-inference ceiling; the ranking rests on one building and one campaign, and the margin is decisive only for the path-loss targets; the results do not show transfer to a building with no interior measurements.

## Key technical points (ZH)

- 问题设定：室内三维信号状态无法从外部飞行路径直接采样，因此该任务是室外到室内（O2I）反演。特征掩码将所有室内节点的射频向量置零，因此模型输入中没有任何室内射频测量；室内观测只作为训练监督，评估针对同一建筑中留出的室内节点。
- 图构建：感知楼层的三维距离度量在 k = 8 的近邻图中加入垂直惩罚（eta = 75 m，即将每层约 15 dB 的衰减等价于水平方向约每 10 m 2 dB 时的 75 m 行进距离），并加入“桥边”规则，把没有外部邻居的室内节点连接到最近的外部节点。图含 613 个节点、9,668 条有向边（229 个外部节点、384 个内部节点）。
- 模型：改进的 SpiderGNN 编码器由堆叠的 GATv2 层组成，输出 128 维嵌入；PCA 压缩到 10 个分量，保留 96.6% 的方差；结果与原始空间特征拼接后输入各自独立的 XGBoost 回归器（RSSI/RSRP 的 max_depth 为 4，RSRQ、SNR 和 CQI 为 6），并对 9 次网络初始化取平均。
- 数据：来自一栋 10 层建筑的外部无人机射频扫描与内部 TEMS 步行测试测量，对漂移的 GPS 坐标做逆距离加权校准，并采用源自 3GPP TS 36.133 的一致性过滤。测量为 5G NR，作者将其描述为 6G 室内覆盖挑战的替代代理，而非直接的亚太赫兹证据。论文给出了代码与数据的 GitHub 仓库链接。
- 58 个节点测试集上的结果（对 384 个室内节点做 70/15/15 分层划分）：R2 为 0.759（RSSI）和 0.770（RSRP），基于 GraphSAGE 的 SimpleGNN 基线为 0.560 和 0.467（提升 35.5% 和 64.9%），端到端 SpiderGNN 为 0.443 和 0.381。RSSI 的 RMSE 为 6.43 dBm，RSRP 的 RMSE 为 6.36 dBm。把 RSRP 预测级联到干扰相关回归器的变体，其 RSSI/RSRP 的 R2 略低（0.746、0.763）。
- 作者自述的局限：所提模型的 RSRQ、SNR 和 CQI 的 R2 仍较低（分别为 0.268、0.146 和 0.195），被描述为空间推断的上限；排名基于单栋建筑和单次测量，只有路径损耗类目标的优势较为明确；结果并未展示向没有室内测量的建筑迁移的能力。

## Why it matters / what's new (EN)

The distinguishing element is reconstructing interior 5G NR metrics purely from exterior drone measurements, with the ablation indicating that the value lies in the graph embedding while XGBoost heads fit the targets better than neural heads. The evidence comes from one 10-floor building and a 58-node test split, so the numbers are indicative for path-loss metrics and weak for the interference-related ones.

## Why it matters / what's new (ZH)

其区别点在于仅依靠外部无人机测量来重建室内 5G NR 指标，消融结果表明价值在于图嵌入，而 XGBoost 回归头对目标的拟合优于神经网络回归头。证据来自一栋 10 层建筑和 58 个节点的测试集，因此这些数字对路径损耗类指标具有参考意义，对干扰相关指标则说服力较弱。

## Images

None.
