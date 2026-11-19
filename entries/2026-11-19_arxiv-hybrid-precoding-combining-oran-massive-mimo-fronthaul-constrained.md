---
id: 2026-11-19_arxiv-hybrid-precoding-combining-oran-massive-mimo-fronthaul-constrained
date_published: 2026-11-11
date_found: 2026-11-19
type: academic-paper
technology: cellular
title_en: "Hybrid Precoding and Combining for O-RAN Massive MIMO Systems"
title_zh: "面向 O-RAN 大规模 MIMO 系统的混合预编码与合并"
url: "https://arxiv.org/abs/2611.15199"
source_quality: full
topics: [O-RAN, hybrid-beamforming, massive-MIMO, fronthaul-capacity, O-RU, mmWave, sum-rate]
topic_primary: cellular-massive-mimo
topics_secondary: [open-ran]
novelty_score: 2
---

## Summary (EN)

Kimaryo, Moon and Lee propose beamforming for a downlink multiuser hybrid massive-MIMO system in which a base station is disaggregated into several O-RUs, each with a hybrid transceiver, a per-O-RU power limit and its own fronthaul link to the O-DU, and users also use hybrid architectures. They maximize sum rate under transmit-power, unit-modulus and fronthaul-capacity constraints, designing analog beamformers by gradient descent, digital precoders by a Lagrange-multiplier method, and digital combiners that make received streams parallel, without eigenvalue or singular-value decompositions.

## Summary (ZH)

Kimaryo、Moon 与 Lee 研究下行多用户混合大规模 MIMO 系统的波束赋形：基站被拆分为多个 O-RU，每个 O-RU 配有混合收发机、独立的功率约束和通往 O-DU 的专用前传链路，用户端同样采用混合架构。论文在发射功率、单位模约束和前传容量约束下最大化和速率：模拟波束赋形用梯度下降设计，数字预编码用拉格朗日乘子法设计，数字合并器使接收流相互平行，且不使用特征值或奇异值分解。

## Key technical points (EN)

- Setting: the paper argues that beamforming in O-RAN must account for fronthaul capacity, coordinated operation of multiple O-RUs (possibly multi-vendor) and per-O-RU power allocation, which conventional hybrid-beamforming designs do not address together.
- Formulation: sum-rate maximization with per-O-RU transmit-power, unit-modulus (analog) and fronthaul-link capacity constraints; precoders are quantized for the fronthaul (the evaluation uses 22 bits per level to make recovery almost lossless).
- Algorithm: analog precoders and combiners via gradient-based optimization, digital precoders via Lagrange multipliers, digital combiners designed so the received streams are parallel; the method avoids EVD and SVD and is accompanied by a complexity analysis.
- Simulation setup: 4 O-RUs, each with 24 transmit antennas, 8 RF chains and 30 dBm; 4 users with 12 receive antennas and 8 RF chains; 2 streams from each O-RU to each user; 28 GHz carrier, 100 MHz bandwidth, a millimetre-wave channel model with 4 paths; each fronthaul link 8 Gbps; users 250 m from the base station.
- Benchmarks: a non-grid-of-beams analog design with CVX digital precoding, WMMSE-OMP, SIR-MMSE, a two-stage digital precoder and a zero-forcing digital precoder (the last two reuse the proposed analog design).
- Reported results: convergence typically within five iterations; highest spectral efficiency among all schemes across 24 to 64 transmit antennas per O-RU, with the gap to the non-GoB scheme growing from 82 to 134 bps/Hz; at 24 antennas the proposed scheme reaches at least 175 bps/Hz almost deterministically and at least 200 bps/Hz about 95% of the time, whereas no benchmark meets the 200 bps/Hz level.
- Caveats visible in the text: simulation only with a generic channel model; the absolute spectral-efficiency values are large because of the aggregate multi-O-RU, multi-stream setup; the paper reports that WMMSE-OMP runs faster in wall-clock time than the proposed method, attributing this to memory-access and modular-implementation overhead.

## Key technical points (ZH)

- 背景：论文认为 O-RAN 中的波束赋形必须考虑前传容量、多个（可能来自不同厂商的）O-RU 的协同运行以及每个 O-RU 的功率分配，而传统混合波束赋形设计没有同时处理这些因素。
- 问题建模：在每 O-RU 发射功率、（模拟部分）单位模和前传链路容量约束下最大化和速率；预编码器需为前传做量化（评估中每个电平使用 22 比特以使恢复几乎无损）。
- 算法：模拟预编码与合并器用基于梯度的优化，数字预编码用拉格朗日乘子，数字合并器使接收流相互平行；该方法避免 EVD 与 SVD，并附有复杂度分析。
- 仿真设置：4 个 O-RU，每个 24 根发射天线、8 条射频链、30 dBm；4 个用户，各 12 根接收天线、8 条射频链；每个 O-RU 向每个用户发送 2 个数据流；28 GHz 载频、100 MHz 带宽、4 径毫米波信道模型；每条前传链路 8 Gbps；用户距基站 250 m。
- 对比方案：非波束码本（non-GoB）模拟设计加 CVX 数字预编码、WMMSE-OMP、SIR-MMSE、两阶段数字预编码以及迫零数字预编码（后两者复用所提模拟设计）。
- 报告的结果：通常在五次迭代内收敛；每 O-RU 发射天线从 24 增至 64 时和速率谱效率均为各方案最高，与 non-GoB 的差距从 82 增至 134 bps/Hz；24 根天线时所提方案几乎确定地达到至少 175 bps/Hz，约 95% 的时间达到至少 200 bps/Hz，而没有任何基准方案达到 200 bps/Hz。
- 文中可见的注意事项：仅为仿真且采用通用信道模型；因多 O-RU、多数据流汇总，绝对谱效率数值较大；论文报告 WMMSE-OMP 的实测运行时间低于所提方法，并将其归因于内存访问与模块化实现开销。

## Why it matters / what's new (EN)

The distinguishing element is putting per-O-RU fronthaul-capacity limits directly into the hybrid-beamforming problem for a disaggregated base station, with a decomposition-free solution. It is a simulation-based algorithm paper in a crowded area, so the quantified gains apply only to the stated mmWave setup and benchmark set.

## Why it matters / what's new (ZH)

其区别点在于，针对拆分式基站，将每 O-RU 的前传容量限制直接纳入混合波束赋形问题，并给出不依赖矩阵分解的求解方法。这是一篇基于仿真的算法论文，所在领域研究较多，因此文中量化收益仅适用于所述毫米波设置与对比方案。

## Images

None.
