---
id: 2026-11-27_arxiv-decentralized-clustered-federated-learning-cellular-traffic-forecasting-leo
date_published: 2026-11-25
date_found: 2026-11-27
type: academic-paper
technology: satellite
title_en: "Decentralized Clustered Federated Learning for Cellular Traffic Forecasting over LEO Constellations"
title_zh: "面向 LEO 星座上蜂窝流量预测的去中心化聚类联邦学习"
url: "https://arxiv.org/abs/2611.34049"
source_quality: full
topics: [federated-learning, decentralized-learning, inter-satellite-gossip, traffic-forecasting, LEO, orbital-edge-compute]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Jonas Kirch, Tiago Koketsu Rodrigues and Yuichi Kawamoto start from the premise that LEO constellations may act as orbital edge-compute nodes in 6G non-terrestrial networks, supporting forecasting and control for ground cellular infrastructure. Training such models is hard because ground-cell traffic is heterogeneous, ground-station links are intermittent, and orbital motion keeps changing which cell each satellite observes. The paper extends Decentralized Federated Clustering (DFCA, the authors' earlier algorithm) to the LEO setting: satellites cooperate only through k-nearest inter-satellite gossip with no ground-side aggregator, and zero-shot head selection lets each satellite specialise to the latent traffic regime of the cell currently beneath it.

On cellular internet-traffic forecasting with the Telecom Italia Milan+Trentino dataset, averaged over K=20 post-training orbital snapshots, the extension reduces forecasting RMSE by 15.3% (and MAE by 19.7%) over a decentralized FedAvg baseline of equivalent capacity, with cluster recovery accuracy of 85.3%.

## Summary (ZH)

Jonas Kirch、Tiago Koketsu Rodrigues 与 Yuichi Kawamoto 的出发点是：LEO 星座可在 6G 非地面网络中充当轨道边缘计算节点，为地面蜂窝基础设施提供预测与控制。训练此类模型的困难在于地面小区流量异质、与地面站的链路时断时续，以及轨道运动不断改变每颗卫星所观测的小区。论文将作者先前提出的去中心化联邦聚类（DFCA）扩展到 LEO 场景：卫星仅通过 k 近邻星间 gossip 协作，没有地面侧聚合器，并通过零样本头选择让每颗卫星适应其下方当前小区的潜在流量模式。

在 Telecom Italia Milan+Trentino 数据集的蜂窝上网流量预测上，对 K=20 个训练后轨道快照取平均，该扩展相比同等容量的去中心化 FedAvg 基线，预测 RMSE 降低 15.3%（MAE 降低 19.7%），聚类恢复准确率为 85.3%。

## Key technical points (EN)

- Setting: satellites communicate only over inter-satellite links; no ground station participates in training. The k-nearest-neighbour gossip graph is rebuilt at regular intervals from current orbital positions, so it is sparse and time-varying.
- Data model: at each epoch each satellite draws samples from the single ground cell currently assigned to it by its orbital trajectory; cells fall into latent regimes (urban/rural partition in the experiments) that the satellites cannot observe and must recover from data.
- Model: each satellite keeps several candidate cluster heads, each a two-layer LSTM with hidden dimension 64. Each epoch it selects the head with the lowest variance-normalised MSE on its current data (equivalent to raw-MSE selection within one step), runs local SGD on that head only, and merges same-head neighbour weights by a sequential running average (no buffering).
- Experiments: a proof of concept on rotated MNIST (clusters recovered essentially perfectly, test accuracy 9.5 points above decentralized FedAvg) and the Milan+Trentino traffic task, split into voice and internet. On traffic, the gain is stated as consistent across snapshots, and the 15% residual cluster mismatch is attributed to boundary cells between the urban and rural profiles.
- Limits visible in the paper: only two regimes/heads are discussed for the traffic task, the evaluation is a simulation on a terrestrial dataset mapped onto satellite footprints, and no on-board hardware, link-budget or communication-cost measurement is reported.

## Key technical points (ZH)

- 场景：卫星仅通过星间链路通信，训练不涉及地面站。k 近邻 gossip 图根据当前轨道位置定期重建，因此稀疏且随时间变化。
- 数据模型：每个训练轮次中，每颗卫星从其轨道轨迹当前分配的单个地面小区取样；小区属于潜在的模式（实验中为城区/乡村划分），卫星无法直接观测，必须从数据中恢复。
- 模型：每颗卫星保存若干候选聚类头，每个头是隐藏维度 64 的两层 LSTM。每轮它选择在当前数据上方差归一化 MSE 最低的头（在单步内等价于原始 MSE 选择），仅对该头做本地 SGD，并以顺序滑动平均（无需缓存）合并同头邻居的权重。
- 实验：先在旋转 MNIST 上做概念验证（聚类几乎完全恢复，测试准确率比去中心化 FedAvg 高 9.5 个百分点），再在拆分为语音与上网的 Milan+Trentino 流量任务上评估。流量任务上的增益被称为在各快照间一致，约 15% 的残余聚类误差被归因于城区与乡村特征之间的边界小区。
- 论文中可见的局限：流量任务只讨论了两个模式/头，评估是将地面数据集映射到卫星覆盖区的仿真，未报告星上硬件、链路预算或通信开销的测量。

## Why it matters / what's new (EN)

The paper's stated gap is that existing satellite federated-learning work optimises a single global model, while a transiting satellite sees a continuously shifting, regionally heterogeneous data distribution. It adds clustered, server-free specialisation over a time-varying ISL graph. The results are simulation-only on a terrestrial traffic dataset, with a baseline of equal capacity but no communication-cost analysis.

## Why it matters / what's new (ZH)

论文声明的空白是：现有卫星联邦学习工作优化的是单一全局模型，而飞越中的卫星所见的数据分布持续变化且区域异质。它在随时间变化的 ISL 图上增加了无服务器的聚类式专门化。结果仅为基于地面流量数据集的仿真，基线容量相同，但没有通信开销分析。

## Images

None.
