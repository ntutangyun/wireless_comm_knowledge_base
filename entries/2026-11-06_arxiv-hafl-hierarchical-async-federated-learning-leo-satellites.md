---
id: 2026-11-06_arxiv-hafl-hierarchical-async-federated-learning-leo-satellites
date_published: 2026-10-31
date_found: 2026-11-06
technology: edge-ai
type: academic-paper
title_en: "HAFL: LEO satellites act as edge servers, clients and relays in hierarchical asynchronous federated learning over ground-satellite and inter-satellite links"
title_zh: "HAFL：LEO 卫星同时充当边缘服务器、客户端与中继的分层异步联邦学习，经星地链路与星间链路协同训练"
url: "https://arxiv.org/abs/2611.01025"
source_quality: full
topics: [federated-learning, LEO-satellite, space-air-ground-integrated-network, asynchronous-aggregation, Gauss-Seidel, latency-optimisation]
topic_primary: edge-federated-learning
topics_secondary: [edge-orchestration]
novelty_score: 3
---

## Summary (EN)

HAFL is a LEO-satellite-assisted hierarchical asynchronous federated learning framework that lets resource-limited terrestrial clients collaborate through ground-satellite links (GSLs). Satellites take three roles: edge servers that aggregate and broadcast submodels, clients that train on data offloaded from the ground (a non-sensitive fraction of each client's data), and relays that route models over inter-satellite links (ISLs). Link computed over: a simulated satellite link (Starlink-like 550 km shell, 72 planes x 22 satellites, 53 degree inclination, built in MATLAB; ISL free-space path loss with exponent 2.0, urban GSL with exponent 3.5 and Rayleigh fading, Shannon-type rates). No real satellite or live-link measurement.

Instead of the conventional Jacobian-type synchronous update (cloud aggregation, as in hierarchical FedAvg), the global step is Gauss-Seidel-type: satellite i passes its submodel sequentially to satellite i+1. Each cluster is assigned a submodel by the cloud. The authors state convergence rates of O(1/sqrt(t)) for convex and O(1/t) for strongly convex objectives and show that expected gradient norm vanishes for nonconvex smooth objectives (proofs omitted in the paper for space). A block-coordinate-descent procedure (LP feasibility plus bisection on latency) chooses offloading ratios, CPU frequencies, bandwidth and submodel partition sizes to minimise global round latency. On FashionMNIST with a Crammer-Singer SVM and ResNet-18, HAFL converges faster than the HFedAvg baseline in early rounds with similar final accuracy; in the paper's Table II it reaches 70% and 80% targets in fewer global rounds in all settings, and with less per-client traffic in all but one (the 3-cell non-i.i.d. 70% target, where it used more: 448.5 MB versus 234.0 MB).

## Summary (ZH)

HAFL 是 LEO 卫星辅助的分层异步联邦学习框架，使资源受限的地面客户端能通过星地链路（GSL）协同训练。卫星承担三种角色：聚合并广播子模型的边缘服务器、基于地面卸载数据（每个客户端的非敏感数据比例）训练的客户端，以及经星间链路（ISL）转发模型的中继。所经链路：仿真卫星链路（类 Starlink 550 km 轨道壳层，72 个轨道面 x 每面 22 颗卫星，倾角 53 度，MATLAB 构建；ISL 自由空间路径损耗指数 2.0，城市 GSL 指数 3.5 并含瑞利衰落，香农型速率），无真实卫星或实际链路测量。

全局更新不采用传统的 Jacobian 型同步更新（云端聚合，如分层 FedAvg），而是 Gauss-Seidel 型：卫星 i 把子模型依次传给卫星 i+1；云端为每个簇分配一个子模型。作者给出凸目标 O(1/sqrt(t))、强凸目标 O(1/t) 的收敛速率，并证明非凸光滑目标下期望梯度范数趋于零（论文因篇幅省略证明）。块坐标下降（LP 可行性加对时延的二分）用于选取卸载比例、CPU 频率、带宽和子模型划分，以最小化全局轮时延。在 FashionMNIST 上用 Crammer-Singer SVM 与 ResNet-18 实验，HAFL 早期轮次收敛快于 HFedAvg，最终精度相近；论文表 II 中各设置下达到 70% 与 80% 目标所需全局轮数均更少，每客户端流量除一例外也更少（例外为 3 簇 non-i.i.d. 的 70% 目标，HAFL 为 448.5 MB，对比 234.0 MB）。

## Key technical points (EN)

- Architecture: clients offload a non-sensitive data fraction to their cluster's satellite; clients run H local SGD steps; the satellite averages submodels weighted by dataset size and broadcasts, repeated E times; the global update is passed satellite to satellite (Gauss-Seidel).
- Handover: satellites reserve a transmission window at the end of each slot to pass model and data to a neighbour; topology is a fixed snapshot per slot (slot length T = 360 s in the parameter table).
- Optimisation: minimise T_glob = E x max over clusters of cluster latency, subject to offloading bounds, CPU frequency bounds, bandwidth budgets, energy limits and partition sizes summing to the full model.
- Setup: FashionMNIST (i.i.d. and Dirichlet(2.0) non-i.i.d.); SVM and ResNet-18 (about 11.7M parameters); baseline HFedAvg; satellite CPU 1 GHz, client CPU 3x10^8 Hz as listed; 10 W / 0.3 W transmit power; 10 MHz bandwidth.
- Results (Table II, rounds / per-client MB): fully i.i.d., 5 cells, 70% target: 1 / 58.5 versus 5 / 234.0 for HFedAvg.
- Not stated in the extracted text: client count and numeric ISL/GSL rates; latency reduction from optimised offloading is shown only graphically.

## Key technical points (ZH)

- 架构：客户端把非敏感数据比例卸载到所属簇的卫星；客户端执行 H 步本地 SGD；卫星按数据量加权平均子模型并广播，重复 E 次；全局更新在卫星间依次传递（Gauss-Seidel）。
- 切换：卫星在每个时隙末预留传输窗口，把模型与数据交给相邻卫星；拓扑按时隙取固定快照（参数表中时隙长度 T = 360 s）。
- 优化：在卸载比例范围、CPU 频率范围、带宽预算、能量限制以及子模型划分之和等于完整模型的约束下，最小化 T_glob = E x 各簇时延的最大值。
- 设置：FashionMNIST（i.i.d. 与 Dirichlet(2.0) non-i.i.d.）；SVM 与 ResNet-18（约 11.7M 参数）；基线 HFedAvg；卫星 CPU 1 GHz，客户端 CPU 按表为 3x10^8 Hz；发射功率 10 W / 0.3 W；带宽 10 MHz。
- 结果（表 II，轮数 / 每客户端 MB）：完全 i.i.d.、5 簇、70% 目标：1 / 58.5，对比 HFedAvg 的 5 / 234.0。
- 提取文本中未给出：客户端数量与具体 ISL/GSL 速率；优化卸载带来的时延降低仅以图呈现。

## Why it matters / what's new (EN)

The paper's framing is 6G AI services running over decentralised, resource-constrained edge infrastructure, with LEO satellites supplying aggregation, training and routing together so that remote-area clients can still train. All results are simulated; the abstract's claim of "much less global rounds and communication cost" holds in most but not all tabulated settings, and the paper does not report an overall percentage reduction.

## Why it matters / what's new (ZH)

论文的设定是 6G AI 服务运行在分散、资源受限的边缘基础设施上，由 LEO 卫星同时提供聚合、训练与路由，使偏远地区客户端也能参与训练。所有结果均为仿真；摘要所称"全局轮数和通信开销大幅减少"在多数而非全部表格设置下成立，论文未给出总体百分比降幅。

## Images

*(No redistributable images for this entry.)*
