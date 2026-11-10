---
id: 2026-11-10_arxiv-multi-model-over-the-air-federated-learning-beamforming-device-grouping
date_published: 2026-11-05
date_found: 2026-11-10
technology: edge-ai
type: academic-paper
title_en: "Multi-model over-the-air federated learning: training several models at once over one multi-antenna uplink via beamforming and channel-correlation device grouping"
title_zh: "多模型空中联邦学习：通过波束赋形与基于信道相关性的设备分组，在同一多天线上行链路上同时训练多个模型"
url: "https://arxiv.org/abs/2611.08783"
source_quality: full
topics: [over-the-air-computation, federated-learning, beamforming, device-grouping, multiple-access-channel, convergence-analysis]
topic_primary: over-the-air-computation
topics_secondary: [edge-federated-learning]
novelty_score: 3
---

## Summary (EN)

The paper considers uplink design for training several independent machine-learning models through wireless federated learning. In its multi-model over-the-air (M-OTA) scheme, each round devices are partitioned into groups, each group is assigned one model, and all groups aggregate over the air simultaneously over a multi-antenna multiple-access channel. A joint optimisation of transmit beamforming, receive beamforming and device grouping over T rounds maximises the convergence rates of all models. The authors analyse the per-model optimality gap, which captures noisy aggregation and inter-model interference, show that the T-round problem decomposes into per-round online problems, and propose a grouping strategy based on channel correlation plus a low-complexity iterative beamforming algorithm with closed-form updates. Link computed over: a simulated multi-antenna wireless uplink (base-station antenna array, fading multiple-access channel); no over-the-air measurement. Accepted by IEEE Transactions on Wireless Communications, 2026, per the authors' comments.

## Summary (ZH)

论文研究通过无线联邦学习同时训练多个独立机器学习模型的上行链路设计。在多模型空中计算（M-OTA）方案中，每轮将设备划分为若干组、每组分配一个模型，各组在多天线多址信道上同时进行空中聚合。通过对 T 轮的发射波束、接收波束与设备分组联合优化，最大化所有模型的收敛速率。作者分析了体现噪声聚合与模型间干扰的单模型最优性间隙，证明 T 轮问题可分解为逐轮在线问题，并提出基于信道相关性的分组策略与闭式更新的低复杂度迭代波束赋形算法。所经链路：仿真多天线无线上行（基站天线阵列、衰落多址信道），无空口实测。作者备注称论文已被 IEEE Transactions on Wireless Communications 2026 录用。

## Key technical points (EN)

- Setting: multiple models trained concurrently; per round, devices are partitioned into groups by model assignment and aggregate over the air simultaneously.
- Decision variables: transmit beamforming/power, receive beamforming and device grouping, optimised to maximise per-model convergence rates.
- Analysis: per-model optimality gap including the effects of noisy aggregation and inter-model interference; decomposition of the T-round problem into per-round online optimisation.
- Grouping: spherical k-means on device channel correlation, so devices in a group have spatially correlated channels (higher receive-beamforming gain, less inter-group interference); groups may have unequal sizes.
- Power structure: the paper shows that, when per-device channel factors are distinct, at most one device per group transmits at an intermediate power, the others at zero or full power, and devices with weak effective channels can be excluded from aggregation.
- Evaluation: MNIST, Fashion-MNIST and CIFAR-10 with benchmarks: random equal-size grouping with the same joint beamforming, spherical k-means with MMSE beamforming, noise-free sequential single-model training, and a noise-free multi-model upper bound; M-OTA converges faster than the ideal sequential baseline, substantially outperforms Skmeans-MMSE and nearly reaches the upper bound for N > 8 antennas.

## Key technical points (ZH)

- 设置：多个模型并发训练；每轮按模型分配将设备分组，各组同时进行空中聚合。
- 决策变量：发射波束/功率、接收波束与设备分组，目标是最大化各模型的收敛速率。
- 分析：包含噪声聚合与模型间干扰影响的单模型最优性间隙；将 T 轮问题分解为逐轮在线优化。
- 分组：基于设备信道相关性的球面 k-means，使组内设备信道空间相关（接收波束增益更高、组间干扰更小）；各组规模可不相等。
- 功率结构：论文证明（各设备信道因子互不相同时）组内至多一台设备处于中间功率，其余为零或满功率，有效信道较差的设备可被排除在聚合之外。
- 评估：MNIST、Fashion-MNIST、CIFAR-10，基准：同等联合波束赋形下的随机等规模分组、球面 k-means 加 MMSE 波束赋形、无噪声顺序单模型训练及无噪声多模型上界；M-OTA 收敛快于理想顺序基线、显著优于 Skmeans-MMSE，并在天线数 N>8 时接近上界。

## Why it matters / what's new (EN)

The authors note that most over-the-air federated learning work trains one model; here the multiple-access channel is shared among several models, so interference between models becomes part of the design. The evidence is simulation: about 98% / 88% / 59% test accuracy on MNIST / Fashion-MNIST / CIFAR-10 at T_eff≈30 effective rounds (i.i.d. setting, N = 8 antennas, K = 20 devices).

## Why it matters / what's new (ZH)

作者指出多数空中联邦学习工作只训练一个模型；本文让多个模型共享同一多址信道，模型间干扰因此成为设计的一部分。证据为仿真：有效通信轮数 T_eff≈30 时，MNIST / Fashion-MNIST / CIFAR-10 的测试准确率分别约为 98% / 88% / 59%（i.i.d. 设置，N = 8 根天线，K = 20 台设备）。

## Images

*(No redistributable images for this entry.)*
