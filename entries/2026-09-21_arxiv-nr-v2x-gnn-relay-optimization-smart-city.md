---
id: 2026-09-21_arxiv-nr-v2x-gnn-relay-optimization-smart-city
date_published: 2026-07-29
date_found: 2026-09-21
type: academic-paper
technology: cellular
title_en: "AI-Driven Real-Time Relay Optimisation in Smart Urban NR-V2X Networks via Learning-to-Optimise Graph Neural Networks"
title_zh: "面向智慧城市 NR-V2X 网络的 AI 驱动实时中继优化：基于学习优化的图神经网络方法"
url: "https://arxiv.org/abs/2609.20271"
source_quality: full
topics: [NR-V2X, GNN, relay-selection, MILP, learning-to-optimise, connected-vehicles]
topic_primary: 5g-nr
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

This paper (Amati, Mangiatordi, Pallotti, Angelini — carried out under the Spectrum Sharing project between Italy's Ministry of Enterprises and Made in Italy (MIMIT) and Fondazione Ugo Bordoni) targets multi-hop relay selection for NR-V2X in dense urban deployments where Road-Side Unit (RSU) density is limited and propagation is degraded by non-line-of-sight conditions and fast topology change. Multi-hop relaying through neighbouring Connected and Automated Vehicles (CAVs) can extend infrastructure reach, but choosing which vehicles relay for whom under realistic radio, capacity, and routing constraints is a combinatorial problem normally solved via Mixed-Integer Linear Programming (MILP) — optimal but too slow for real-time use as graphs grow.

The proposed framework models the vehicular network as a graph (CAVs and RSUs as nodes, radio-link characteristics as edge features), uses an offline MILP oracle to generate optimal relay-activation labels for a simulated urban dataset, and trains an edge-aware Graph Isomorphism Network with Edge Features (GINE) to reproduce those decisions as a binary edge-classification task (active/inactive relay link), framed by the authors as a "context-aware" Learning-to-Optimise (L2O) reformulation of the combinatorial problem. At inference time the trained GNN replaces the MILP solve entirely.

At the nominal decision threshold (tau=0.5), the GNN reproduces MILP relay-activation decisions on the validation set with 0.9560 accuracy, 0.9512 precision, 0.9661 recall, and 0.9586 F1, with the F1-score staying stable across a threshold range of 0.45-0.60. Inference completes in a single forward pass (a few milliseconds), versus MILP's super-linearly growing runtime — the paper reports up to a 100x execution-time speed-up. At the system level, in a 1 km^2 urban area with 2-4 RSUs, multi-hop relaying via the GNN recovers roughly an 8-11% gain in the number of CAVs successfully connected to infrastructure at sparse RSU density (2 RSUs) compared to single-hop baselines, and around 8-11.3% under moderate load (rho~=0.5), shrinking to 6-8% at 4 RSUs and to 5-7% under high load (rho>=0.7). Across all tested scenarios the GNN recovers more than 95% of the connectivity the MILP oracle would achieve, while running in real time.

## Summary (ZH)

这篇论文（作者 Amati、Mangiatordi、Pallotti、Angelini，研究在意大利企业与"意大利制造"部（MIMIT）与乌戈·博尔多尼基金会（Fondazione Ugo Bordoni）之间的"频谱共享"项目框架下开展）针对城市密集部署场景下 NR-V2X 的多跳中继选择问题：路侧单元（RSU）部署密度有限，且非视距传播与快速拓扑变化进一步削弱了连接可靠性。通过邻近的网联自动驾驶车辆（CAV）进行多跳中继可以扩展基础设施覆盖范围，但在真实的无线、容量与路由约束下决定"谁为谁中继"是一个组合优化问题，通常通过混合整数线性规划（MILP）求解——虽然最优，但随着图规模增长速度过慢，难以满足实时性要求。

该框架将车联网建模为图（CAV 与 RSU 为节点，无线链路特性作为边特征），利用离线 MILP 预言机为仿真城市数据集生成最优中继激活标签，并训练一个具备边特征感知能力的图同构网络（GINE），将该问题重新表述为二分类边分类任务（中继链路激活/未激活），作者将其称为对该组合优化问题的"情境感知"学习优化（L2O）重构。在推理阶段，训练好的 GNN 完全取代 MILP 求解过程。

在标称判定阈值（tau=0.5）下，GNN 在验证集上复现 MILP 中继激活决策的准确率为 0.9560，精确率为 0.9512，召回率为 0.9661，F1 值为 0.9586，且 F1 值在 0.45-0.60 的阈值区间内保持稳定。推理仅需单次前向传播（数毫秒），而 MILP 的运行时间随图规模呈超线性增长——论文报告最高可实现 100 倍的执行时间加速。在系统层面，在 1 平方公里的城市区域内、RSU 数量为 2-4 个的情况下，相较于单跳基线，基于 GNN 的多跳中继在 RSU 稀疏（2 个）时可将成功接入基础设施的 CAV 数量提升约 8-11%，在中等负载（rho≈0.5）下约为 8-11.3%；RSU 增至 4 个时降至 6-8%，高负载（rho>=0.7）时降至 5-7%。在所有测试场景中，GNN 均能在实时运行的同时，恢复 MILP 预言机所能达到连通性的 95% 以上。

## Key technical points (EN)

- Problem: real-time multi-hop relay selection for NR-V2X CAVs under sparse RSU deployment and urban non-line-of-sight propagation.
- Method: offline MILP oracle generates supervision labels; an edge-aware GINE (Graph Isomorphism Network with Edge Features) learns to reproduce relay-activation decisions as edge-level binary classification — a "context-aware" Learning-to-Optimise reformulation.
- Link-level accuracy on the validation set at tau=0.5: 0.9560 accuracy / 0.9512 precision / 0.9661 recall / 0.9586 F1, stable across the 0.45-0.60 threshold range.
- Runtime: single GNN forward pass (few ms) vs. MILP's super-linear growth — up to 100x speed-up.
- System-level connectivity gain from multi-hop relaying: roughly 8-11% at sparse RSU density (2 RSUs) and around 8-11.3% under moderate load (rho~=0.5), narrowing to 6-8% at higher RSU density (4 RSUs) and to 5-7% under high RSU load (rho>=0.7).
- Overall: GNN recovers >95% of MILP-oracle connectivity while enabling real-time control.
- Carried out under Italy's MIMIT-Fondazione Ugo Bordoni Spectrum Sharing project.

## Key technical points (ZH)

- 问题：在 RSU 部署稀疏、城市非视距传播条件下，为 NR-V2X 网联自动驾驶车辆实现实时多跳中继选择。
- 方法：离线 MILP 预言机生成监督标签；具备边特征感知能力的 GINE（图同构网络）学习复现中继激活决策，将其表述为边级二分类任务——一种"情境感知"的学习优化（L2O）重构。
- 链路级性能（验证集，tau=0.5）：准确率 0.9560、精确率 0.9512、召回率 0.9661、F1 值 0.9586，在 0.45-0.60 阈值区间内保持稳定。
- 运行时间：GNN 单次前向传播仅需数毫秒，而 MILP 运行时间随规模超线性增长——最高可实现 100 倍加速。
- 系统层面连通性提升：RSU 稀疏（2 个）时约为 8-11%，中等负载（rho≈0.5）下约为 8-11.3%；RSU 密度更高（4 个）时降至 6-8%，RSU 高负载（rho>=0.7）时降至 5-7%。
- 总体而言，GNN 在实现实时控制的同时，可恢复 MILP 预言机 95% 以上的连通性。
- 该研究在意大利 MIMIT 与乌戈·博尔多尼基金会的"频谱共享"项目框架下完成。

## Why it matters / what's new (EN)

The KB already has NR-V2X entries on simulation fidelity (`2026-09-18_arxiv-ns3learn-5g-sidelink-simulation-fidelity`) and on urban mmWave attack modelling, but this is the first entry addressing real-time multi-hop relay selection itself via a GNN-based L2O approach validated against a MILP oracle, with an explicit runtime-vs-optimality trade-off characterization (up to 100x speed-up at >95% of optimal connectivity) rather than a pure simulation-methodology or security study.

## Why it matters / what's new (ZH)

知识库已收录关于仿真保真度的 NR-V2X 条目（`2026-09-18_arxiv-ns3learn-5g-sidelink-simulation-fidelity`）以及城市毫米波攻击建模相关条目，但本知识库中首次出现针对实时多跳中继选择本身、提出基于 GNN 的学习优化方法并以 MILP 预言机为基准进行验证的条目，其明确刻画了运行时间与最优性之间的权衡（最高 100 倍加速、连通性达到最优解的 95% 以上），区别于此前纯仿真方法学或安全性研究的条目。

## Images
![Context-aware GINE-based Learning-to-Optimise pipeline for NR-V2X relay selection | 面向 NR-V2X 中继选择的情境感知 GINE 学习优化流程图](https://arxiv.org/html/2609.20271v1/context-aware-GINE-L2O-pipeline.png)
