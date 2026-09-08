---
id: 2026-09-08_arxiv-iins-gan-uwb-signal-synthesis
date_published: 2026-09-04
date_found: 2026-09-08
type: academic-paper
technology: uwb
title_en: "A Deep Generative Model for Synthesizing Labeled Wireless Signals"
title_zh: "面向标注无线信号合成的深度生成模型"
url: "https://arxiv.org/abs/2609.05396"
source_quality: full
topics: [UWB, generative model, GAN, dataset synthesis, distance estimation, environment identification]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Li, Hu, Mazuelas, and Shen (BCAM Bilbao / IKERBASQUE / College of Semiconductors, Changsha / Tsinghua University; submitted 4 Sep 2026, cs.AI) address a data-scarcity problem in UWB wireless sensing: acquiring labeled real-world UWB signal datasets is time-consuming and labor-intensive, and traditional ray-tracing-style synthesis requires extensive hyperparameter tuning while still lacking the realism needed to train modern deep-learning models for tasks like distance estimation and LoS/NLoS environment identification.

Their method, IIns-GAN (Inter-Instance Generative Adversarial Network), combines a variational-inference latent-variable model with adversarial training. It has three modules: an IIns-VAE encoder-decoder with regularization networks that disentangles a signal into separate distance features and environment features; an inverse estimator that maps distance/environment labels back to latent features (enabling label-conditioned generation); and a PatchGAN discriminator distinguishing real from generated signals. The model supports two generation modes — synthesizing new signals directly from distance/environment labels, and translating an existing real signal into a different labeled condition.

Experiments use a public UWB dataset of 21,250 two-way-ranging (TWR) signal measurements collected with DecaWave EVB1000 devices (split 80% train / 10% auxiliary "toy model" training / 10% test). Generated-signal realism was measured by cosine similarity against real signals: 0.77 for label-based synthesis and 0.99 for signal translation, with close agreement on physical waveform features (maximum amplitude, rise time, energy, kurtosis). As a downstream test, a toy CNN trained on IIns-GAN-synthesized data alone, at 10x the size of the real training set, reached a distance-estimation MSE of 0.14 m versus 0.17 m for the same model trained on the real data, and LoS/NLoS environment-identification accuracy of 75% versus 74% (indoor/outdoor classification moved from 0.67 to 0.74). The authors state code will be released publicly in the paper's final version; no repository link is live at submission time.

## Summary (ZH)

Li、Hu、Mazuelas 与 Shen（巴斯克应用数学中心 BCAM／毕尔巴鄂、IKERBASQUE 基金会、长沙半导体学院、清华大学；2026 年 9 月 4 日提交，cs.AI）针对 UWB 无线感知中的数据稀缺问题展开研究：采集真实标注的 UWB 信号数据集耗时且人力成本高，而传统基于射线追踪等方式的信号合成方法需要大量超参数调优，且仍难以达到训练现代深度学习模型（如测距、LoS/NLoS 环境识别）所需的真实感。

其方法 IIns-GAN（跨实例生成对抗网络）将变分推断隐变量模型与对抗训练相结合，包含三个模块：带正则化网络的 IIns-VAE 编码器-解码器，用于将信号解耦为独立的距离特征与环境特征；一个逆估计器，将距离/环境标签映射回隐特征（从而实现按标签条件生成）；以及一个用于区分真实信号与生成信号的 PatchGAN 判别器。该模型支持两种生成模式——直接根据距离/环境标签合成新信号，以及将已有真实信号转换为不同标注条件下的信号。

实验使用一个公开的 UWB 数据集，包含由 DecaWave EVB1000 设备采集的 21,250 条双向测距（TWR）信号测量数据（划分为 80% 训练集、10% 辅助"toy model"训练集、10% 测试集）。生成信号的真实感以与真实信号的余弦相似度衡量：基于标签的合成为 0.77，信号转换为 0.99，在最大幅值、上升时间、能量、峰度等物理波形特征上也表现出较高一致性。在下游测试中，仅使用规模为真实训练集 10 倍的 IIns-GAN 合成数据训练的玩具 CNN，测距均方误差为 0.14 米，而使用真实数据训练的同一模型为 0.17 米；LoS/NLoS 环境识别准确率为 75%（真实数据训练为 74%），室内/室外分类则从 0.67 提升至 0.74。作者表示代码将在论文最终版本中公开发布；提交时尚无可用的代码仓库链接。

## Key technical points (EN)

- **Problem**: labeled real-world UWB signal datasets are costly to acquire; traditional environment-model-based synthesis needs heavy hyperparameter tuning and lacks training-grade realism.
- **Architecture**: IIns-VAE encoder-decoder (disentangles distance feature z_d and environment feature z_e from a signal) + inverse estimator (label -> latent feature) + PatchGAN discriminator.
- **Two generation modes**: label-based synthesis (new signal from a distance/environment label) and signal-based translation (modify an existing real signal's label).
- **Dataset**: public UWB two-way-ranging (TWR) data, DecaWave EVB1000 devices, 21,250 signal instances (80/10/10 split).
- **Realism metric**: cosine similarity to real signals — 0.77 (label-based synthesis), 0.99 (translation); physical-feature alignment (max amplitude, rise time, energy, kurtosis) also reported.
- **Downstream results**: toy CNN trained on synthesized data alone at 10x the real-set size: distance-estimation MSE 0.14 m (vs. 0.17 m trained on real data); LoS/NLoS environment ID accuracy 75% (vs. 74%); indoor/outdoor classification 0.74 (vs. 0.67).
- **Code**: stated to be released in the final version; not yet public at submission.

## Key technical points (ZH)

- **问题**：真实标注 UWB 信号数据集采集成本高；传统基于环境模型的合成方法需大量超参数调优，且真实感不足以支撑模型训练。
- **架构**：IIns-VAE 编码器-解码器（将信号解耦为距离特征 z_d 与环境特征 z_e）+ 逆估计器（标签到隐特征的映射）+ PatchGAN 判别器。
- **两种生成模式**：基于标签的合成（由距离/环境标签生成新信号）与基于信号的转换（将已有真实信号改写为不同标注条件）。
- **数据集**：公开 UWB 双向测距（TWR）数据，DecaWave EVB1000 设备采集，21,250 条信号实例（80/10/10 划分）。
- **真实感指标**：与真实信号的余弦相似度——基于标签合成 0.77，转换 0.99；同时报告了最大幅值、上升时间、能量、峰度等物理特征的一致性。
- **下游结果**：仅用规模为真实数据 10 倍的合成数据训练的玩具 CNN：测距 MSE 0.14 米（真实数据训练为 0.17 米）；LoS/NLoS 环境识别准确率 75%（对比 74%）；室内/室外分类 0.74（对比 0.67）。
- **代码**：作者称将在最终版本中发布，提交时尚未公开。

## Why it matters / what's new (EN)

The KB's uwb-ranging bin already has one simulation/tooling entry (2026-08-17_arxiv-radiorange-ranging-simulator, a physics-based ray-tracing digital twin) but nothing on the generative-model side of the same problem — synthesizing labeled UWB training data rather than simulating the propagation channel from first principles. This paper is a distinct approach to the same underlying gap (UWB machine-learning models are data-starved) using a learned, data-driven generator instead of a physical channel model, and it reports a concrete, if modest, downstream benefit (a 0.03 m MSE improvement and a 1-point LoS/NLoS accuracy gain when training on 10x synthesized data; indoor/outdoor classification gains more, 0.67 to 0.74) rather than only signal-fidelity metrics. Tool/dataset-adjacent paper rather than a new sensing or ranging mechanism, hence novelty 2.

## Why it matters / what's new (ZH)

知识库 uwb-ranging 板块此前已有一篇仿真/工具类条目（2026-08-17_arxiv-radiorange-ranging-simulator，基于物理射线追踪的数字孪生），但尚无覆盖同一问题的生成式模型路线——即通过合成标注训练数据而非从第一性原理仿真传播信道来缓解数据稀缺。本文针对 UWB 机器学习模型的数据饥渴问题给出了一条不同路径（基于学习的数据驱动生成器而非物理信道模型），并报告了具体的（虽然幅度有限的）下游收益（用 10 倍规模的合成数据训练带来 0.03 米的 MSE 改善与 1 个百分点的 LoS/NLoS 准确率提升；室内/室外分类提升更大，从 0.67 到 0.74），而不仅仅是信号保真度指标。属工具/数据集类论文，而非新的感知或测距机制，故新颖度评为 2。

## Images

![Network structure of the proposed IIns-GAN, trained on empirical variational-inference objectives | 所提出 IIns-GAN 的网络结构，基于经验变分推断目标训练](https://arxiv.org/html/2609.05396v1/structure.png)
![Graphical model relating signal measurement x, latent distance/environment features z_d and z_e, and their labels | 信号测量 x 与隐变量距离/环境特征 z_d、z_e 及其标签之间的图模型](https://arxiv.org/html/2609.05396v1/graph_1.png)
