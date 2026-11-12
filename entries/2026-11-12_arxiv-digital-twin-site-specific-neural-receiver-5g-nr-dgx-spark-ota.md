---
id: 2026-11-12_arxiv-digital-twin-site-specific-neural-receiver-5g-nr-dgx-spark-ota
date_published: 2026-11-10
date_found: 2026-11-12
type: academic-paper
technology: cellular
title_en: "Design and Over-the-Air Evaluation of a Digital Twin-Driven Site-Specific Neural Receiver for 5G NR on NVIDIA DGX Spark"
title_zh: "基于数字孪生的站点专用 5G NR 神经接收机：在 NVIDIA DGX Spark 上的设计与空口评估"
url: "https://arxiv.org/abs/2611.13490"
source_quality: full
topics: [5G-NR, neural-receiver, digital-twin, ray-tracing, Sionna, AI-RAN, PUSCH, USRP]
topic_primary: cellular-ai
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)

Chen, Yao, Zhuo, Sun, Pan, Ren and Wang (Southeast University) design a site-specific neural receiver for the 5G NR uplink and measure it over the air. A corridor digital twin built from a radar scan and refined manually in Blender supplies 28,671 ray-traced (Sionna RT) channel records, which train an eight-round convolutional graph neural network with pilot-aware inputs and an auxiliary channel-supervision head. The network sits in the PUSCH chain: it takes the received OFDM grid and DMRS-derived features, outputs soft bits, and feeds the existing NR transport-block decoder, so the standard uplink waveform and reference signals are unchanged.

In over-the-air tests with NI USRP B210 radios and a DGX Spark on each side (3.30948 GHz, 30 kHz subcarrier spacing, 51 PRBs, 16-QAM, SISO), the site-trained receiver has the highest mean uplink rate at all five test positions. At a non-line-of-sight corner it reaches 16.2 Mb/s, against 4.1 Mb/s for LS/LMMSE and 2.4 Mb/s for a neural receiver trained on 3GPP channel models.

## Summary (ZH)

Chen、Yao、Zhuo、Sun、Pan、Ren 与 Wang（东南大学）为 5G NR 上行设计了一个站点专用的神经接收机，并进行了空口实测。通过雷达扫描并在 Blender 中人工修整得到的走廊数字孪生，提供了 28,671 条射线追踪（Sionna RT）信道记录，用于训练一个八轮迭代、带导频感知输入和辅助信道监督头的卷积图神经网络。该网络位于 PUSCH 处理链中：输入接收到的 OFDM 资源栅格和由 DMRS 得到的特征，输出软比特，并交给现有的 NR 传输块译码器，因此标准上行波形和参考信号保持不变。

在两端各使用一台 NI USRP B210 和一台 DGX Spark 的空口测试中（3.30948 GHz、30 kHz 子载波间隔、51 个 PRB、16-QAM、SISO），站点训练的接收机在全部五个测试位置上的平均上行速率最高。在一个非视距拐角处达到 16.2 Mb/s，而 LS/LMMSE 为 4.1 Mb/s，用 3GPP 信道模型训练的神经接收机为 2.4 Mb/s。

## Key technical points (EN)

- Training data: 32,768 raw ray-traced samples; after removing 996 samples with no valid paths, 28,671 are used for training and 3,101 held out. The twin mesh has eight components with concrete, ceiling board, wood, glass and metal material assignments.
- Architecture: 8 rounds of depthwise-separable time-frequency convolutions with user aggregation and residual state updates, 56 latent features, 434,948 stored parameters; a bit head and an auxiliary channel head are both supervised at every round, and the receiver maps pilot-aided observations directly to soft bits rather than cascading a learned channel estimator with a conventional equalizer.
- Training: a three-stage schedule with auxiliary channel loss (70,000 updates) is compared with single-stage bit-loss-only training (10,000 updates) on simulated BLER; the paper reports three-stage training as effective.
- Over-the-air results: the site-trained receiver gets 23.9, 23.5, 20.6, 16.2 and 3.7 Mb/s at positions 1-5 (position 1 line-of-sight). At position 1 the baselines are 15.5 Mb/s (LS/LMMSE) and 9.5 Mb/s (3GPP-trained); at position 5 they are 3.4 and 0 Mb/s.
- Stated scope: the work applies mainly to SISO; MIMO extension and lower inference latency are listed as future work.

## Key technical points (ZH)

- 训练数据：共 32,768 条原始射线追踪样本，剔除 996 条无有效路径的样本后，28,671 条用于训练，3,101 条留作评估。数字孪生网格包含八个部件，材质分配包括混凝土、天花板、木材、玻璃和金属。
- 网络结构：8 轮深度可分离时频卷积，带用户聚合与残差状态更新，56 个潜在特征，存储参数 434,948 个；比特头和辅助信道头在每一轮都受到监督，接收机直接把导频辅助观测映射为软比特，而不是级联学习式信道估计器与传统均衡器。
- 训练：以仿真 BLER 比较了带辅助信道损失的三阶段训练（70,000 次更新）与仅用比特损失的单阶段训练（10,000 次更新），论文称三阶段训练有效。
- 空口结果：站点训练接收机在位置 1-5 分别达到 23.9、23.5、20.6、16.2 和 3.7 Mb/s（位置 1 为视距）。位置 1 处基线为 15.5 Mb/s（LS/LMMSE）和 9.5 Mb/s（3GPP 训练）；位置 5 处分别为 3.4 和 0 Mb/s。
- 适用范围：作者说明本工作主要适用于 SISO，MIMO 扩展与进一步降低推理时延列为后续工作。

## Why it matters / what's new (EN)

The paper's related work cites ray-traced site adaptation evaluated with simulated BLER and GPU timing, and measurement-based fine-tuning on captured uplink signals; here the training channels come from a ray-traced digital twin of the same corridor and the uplink rate is measured over the air in that corridor, with the receiver inside a standard NR uplink chain on a GPU plus software-defined radios. The evidence is a single-user, single-antenna indoor corridor with five positions, so it shows feasibility of the approach rather than general gains.

## Why it matters / what's new (ZH)

论文相关工作引用了以仿真 BLER 与 GPU 时延评估的射线追踪站点适配，以及基于采集上行信号的微调；本文的训练信道来自同一走廊的射线追踪数字孪生，并在该走廊中空口实测上行速率，接收机运行在 GPU 加软件无线电平台上的标准 NR 上行处理链内。证据为单用户、单天线、五个位置的室内走廊场景，因此展示的是该方法的可行性，而非普遍增益。

## Images

![Test environment | 测试环境](https://arxiv.org/html/2611.13490v1/figures/ota_environment_hd.png)

![User test positions 1-5 | 用户测试位置 1-5](https://arxiv.org/html/2611.13490v1/figures/ota_user_positions_hd.png)
