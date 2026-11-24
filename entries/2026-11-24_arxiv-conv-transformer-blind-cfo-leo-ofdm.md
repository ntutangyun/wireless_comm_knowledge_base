---
id: 2026-11-24_arxiv-conv-transformer-blind-cfo-leo-ofdm
date_published: 2026-11-18
date_found: 2026-11-24
type: academic-paper
technology: satellite
title_en: "Convolution-Augmented Transformer for Robust Blind CFO Estimation in LEO Satellite Communication Systems"
title_zh: "面向 LEO 卫星通信系统的卷积增强 Transformer 鲁棒盲载波频偏估计"
url: "https://arxiv.org/abs/2611.23987"
source_quality: full
topics: [LEO, CFO, Doppler, OFDM, Transformer, deep-learning, synchronization]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

Wei, Chen, Shao, Gao and Liu (School of Information and Communication Engineering, Zhongyuan University of Technology, Zhengzhou) address carrier frequency offset (CFO) estimation for OFDM links on LEO satellites, where high orbital speed produces large Doppler shifts that break subcarrier orthogonality. They propose a data-driven estimator with three parts: multi-domain input features, a convolutional pre-denoising (CPD) front end and a Transformer encoder.

The system is a gateway sending OFDM symbols through a transparent LEO satellite (3GPP transparent payload) to a user terminal. Each time step is described by six channels: I, Q, magnitude, phase, and the real and imaginary parts of a normalised autocorrelation. The CPD module uses three parallel dilated convolutions, a fusion layer and a CBAM attention block; the Transformer uses rotary positional encoding, attention pooling and a two-layer regression head trained with a Huber loss.

## Summary (ZH)

Wei、Chen、Shao、Gao 与 Liu（郑州中原工学院信息与通信工程学院）研究 LEO 卫星 OFDM 链路的载波频偏（CFO）估计：卫星高速运动产生很大的多普勒频移，破坏子载波正交性。他们提出一种数据驱动的估计器，包含三部分：多域输入特征、卷积预去噪（CPD）前端和 Transformer 编码器。

系统为网关经透明转发的 LEO 卫星（3GPP 透明载荷）向用户终端发送 OFDM 符号。每个时间步由六个通道描述：I、Q、幅度、相位，以及归一化自相关的实部与虚部。CPD 模块使用三条并行的空洞卷积、一个融合层和一个 CBAM 注意力块；Transformer 使用旋转位置编码、注意力池化和采用 Huber 损失训练的两层回归头。

## Key technical points (EN)

- Setup: 2.6 GHz carrier, relative velocity 6000-8000 m/s (Doppler about 50-70 kHz), QPSK, signal lengths 64, 128 and 256, SNR 0-15 dB in 3 dB steps, 100,000 samples split 6:2:2, 200 epochs, metric MSE on the CFO normalised to [-0.5, 0.5].
- Input ablation: versus raw I/Q at 0 dB, the full multi-domain input cuts MSE by about 58.1% (over 53.1% at 15 dB); correlation alone gives about 23.0% at 0 dB.
- Baselines: a cyclic-prefix correlation method, a 1D-CNN and an LSTM. At length 64 and 0 dB the proposed method reduces error by more than 60% versus the LSTM; the CP method shows an error floor at high SNR; doubling the sequence length roughly halves the proposed method's error.
- Design choices: Huber loss lowers error by about 26.8% versus MSE loss at 0 dB; rotary positional encoding lowers it by about 12.8% at 0 dB and 14.7% at 15 dB versus absolute encoding. Exact MSE values appear only in figures.
- Limitations: the authors acknowledge the cost of self-attention on resource-constrained platforms and suggest sparse attention, token compression and distillation. The channel model section describes LoS/NLoS fading, but the dataset is described as AWGN; only QPSK is tested; the method is trained with supervised CFO labels. No venue is named; results are simulation.

## Key technical points (ZH)

- 设置：2.6 GHz 载频，相对速度 6000-8000 m/s（多普勒约 50-70 kHz），QPSK，信号长度 64、128 和 256，SNR 0-15 dB（步长 3 dB），10 万个样本按 6:2:2 划分，训练 200 轮，指标为归一化到 [-0.5, 0.5] 的 CFO 的 MSE。
- 输入消融：与原始 I/Q 相比，完整多域输入在 0 dB 时使 MSE 降低约 58.1%（15 dB 时超过 53.1%）；仅用相关项在 0 dB 时约降低 23.0%。
- 基线：循环前缀相关方法、一维 CNN 和 LSTM。在长度 64、0 dB 时，所提方法相对 LSTM 误差降低超过 60%；CP 方法在高 SNR 下出现误差平台；序列长度加倍使所提方法误差大致减半。
- 设计选择：在 0 dB 时 Huber 损失相比 MSE 损失误差降低约 26.8%；旋转位置编码相比绝对位置编码在 0 dB 和 15 dB 分别降低约 12.8% 和 14.7%。具体 MSE 数值仅见于图中。
- 局限：作者承认自注意力在资源受限平台上的开销，并建议稀疏注意力、令牌压缩和蒸馏。信道模型一节描述了 LoS/NLoS 衰落，但数据集被描述为 AWGN；仅测试了 QPSK；方法使用带 CFO 标签的监督训练。未标明发表场合；结果来自仿真。

## Why it matters / what's new (EN)

The authors present the CPD-augmented Transformer, the multi-domain feature construction and the simulation validation as their contributions. Gains are reported as percentages relative to baselines, and the evaluated data use an AWGN channel, so the results do not show behaviour under the fading model described in the paper.

## Why it matters / what's new (ZH)

作者将 CPD 增强的 Transformer、多域特征构造和仿真验证列为贡献。增益以相对基线的百分比给出，且评估数据采用 AWGN 信道，因此结果并未展示在论文所述衰落模型下的表现。

## Images

None.
