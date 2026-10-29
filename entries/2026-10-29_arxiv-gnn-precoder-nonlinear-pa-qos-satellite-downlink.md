---
id: 2026-10-29_arxiv-gnn-precoder-nonlinear-pa-qos-satellite-downlink
date_published: 2026-10-19
date_found: 2026-10-29
technology: satellite
type: academic-paper
title_en: "Physics-Driven Framework for QoS-Constrained Satellite System with Non-Linear PA Distortion"
title_zh: "面向含非线性功放失真且受 QoS 约束的卫星系统的物理驱动框架"
url: "https://arxiv.org/abs/2610.26153"
source_quality: full
topics: [precoding, power-amplifier-nonlinearity, Rapp-model, Bussgang, graph-neural-network, self-supervised, SINDR, admission-control, LEO-MISO]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 2
---

## Summary (EN)

Qureshi, Adam, Ha, Ntontin and Chatzinotas (arXiv 2610.26153, eess.SP, submitted 19 October 2026; accepted at IEEE GLOBECOM 2026 Workshops) minimise total power-amplifier DC consumption in a MISO satellite downlink subject to per-user SINDR (signal-to-interference-plus-distortion) targets, with each antenna feeding a nonlinear PA (modified Rapp model). A self-supervised graph neural network designs the precoder without labels from an optimiser, trained end-to-end through a differentiable PA model; its directions initialise a low-complexity power-allocation and admission-control step.

Simulation uses Starlink-like LEO geometry at 19 GHz with 100 antennas and 2 to 10 users. The method stays within 1.24% (2 users) to 7.20% (10 users) of a successive-convex-approximation baseline in DC power while running 36x to 582x faster, and a linear-PA baseline that ignores distortion serves all users in as few as 8% of instances.

## Summary (ZH)

Qureshi、Adam、Ha、Ntontin 与 Chatzinotas（arXiv 2610.26153，eess.SP，2026 年 10 月 19 日提交；已被 IEEE GLOBECOM 2026 Workshops 接收）研究在 MISO 卫星下行中，每根天线连接非线性功放（改进 Rapp 模型）的条件下，在满足各用户 SINDR（信干扰失真噪声比）目标时最小化功放总直流功耗。自监督图神经网络无需优化器标签即可设计预编码器，通过可微功放模型端到端训练；其输出方向用于初始化低复杂度的功率分配与准入控制步骤。

仿真采用类 Starlink 的 LEO 几何、19 GHz、100 根天线、2 至 10 个用户。直流功耗与逐次凸近似（SCA）基线相差 1.24%（2 用户）至 7.20%（10 用户），运行速度快 36 至 582 倍；忽略失真的线性功放基线最低仅在 8% 的实例中满足全部用户。

## Key technical points (EN)

- **PA model**: modified Rapp (S=2, q=4), Gaussian input handled with a Hermite expansion giving a Bussgang gain and structured distortion covariance; DC power per PA scales with sqrt of radiated power (class-B, max efficiency 0.785).
- **GNN**: bipartite user-antenna graph, 8 message-passing layers, width 128; polar output (direction plus sigmoid-bounded per-antenna power); Hermite coefficients precomputed in a lookup table (about 106 s, 5 MB) so gradients flow through.
- **Loss**: total DC power plus hinge penalty on rate shortfall; per-antenna cap enforced structurally.
- **Admission**: Yates-style power update with projection; highest-power user dropped if targets missed. No convergence guarantee (heuristic).
- **Ablation**: GNN only serves 95.8%, with power control 93.1%, with admission 98.7% (750 test samples).
- **Limits**: one satellite geometry and channel model; retraining outside the roughly 7 dB p_sat table range; directions fixed, only power optimised.

## Key technical points (ZH)

- **功放模型**：改进 Rapp（S=2，q=4），高斯输入用 Hermite 展开得到 Bussgang 增益与结构化失真协方差；单个功放的直流功耗与辐射功率平方根成正比（B 类，最大效率 0.785）。
- **GNN**：用户-天线二部图，8 层消息传递，宽度 128；极坐标输出（方向加 sigmoid 限幅的单天线功率）；Hermite 系数预先制成查找表（约 106 s、5 MB）使梯度可回传。
- **损失**：总直流功耗加速率缺口的铰链惩罚；单天线功率上限通过结构设计强制满足。
- **准入控制**：Yates 式功率更新并投影；未达标时丢弃功率最高的用户。启发式，无收敛保证。
- **消融**：仅 GNN 服务 95.8%，加功率控制 93.1%，加准入控制 98.7%（750 个测试样本）。
- **局限**：单一卫星几何与信道模型；超出约 7 dB 的 p_sat 表范围需重训；方向固定，仅优化功率。

## Why it matters / what's new (EN)

The authors note that earlier distortion-aware precoders target sum-rate or energy efficiency, and prior QoS-constrained power minimisation assumes a linear PA in the QoS constraint; here distortion enters the per-user SINDR constraint, solved by a label-free learned solver that is 36x–582x faster than SCA. The evidence is simulation-only on one geometry, and the heuristic admission step is not theoretically grounded.

## Why it matters / what's new (ZH)

作者指出，既有的失真感知预编码以和速率或能效为目标，而既有的 QoS 约束功耗最小化在 QoS 约束中假设线性功放；本文将失真纳入逐用户 SINDR 约束，并用无需标签的学习式求解器求解，比 SCA 快 36–582 倍。证据仅来自单一几何下的仿真，启发式准入步骤缺乏理论依据。

## Images

None.
