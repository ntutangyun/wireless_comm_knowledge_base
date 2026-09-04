---
id: 2026-09-04_arxiv-neuromorphic-fpga-hypoxia-edge
date_published: 2026-09-02
date_found: 2026-09-04
type: academic-paper
technology: edge-ai
title_en: "A Reconfigurable Hybrid Convolutional-Fully Connected Neuromorphic Core for Biomedical Edge Inference"
title_zh: "面向生物医学边缘推理的可重构混合卷积-全连接神经形态核心"
url: "https://arxiv.org/abs/2609.03174"
source_quality: full
topics: [spiking-neural-network, neuromorphic-hardware, FPGA, biomedical-sensing, quantization, low-power]
topic_primary: edge-ai-silicon
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

Spiking neural networks (SNNs) are attractive for biomedical wearables because of their low power profile, but the paper notes that neuromorphic accelerators supporting convolutional SNN topologies remain underexplored compared to fully-connected designs, particularly with respect to configurability and quantization support. Drexel University's contribution (Sarah Johari, Suman Kumar, Abhishek Mishra, Anush Lingamoorthy and Nagarajan Kandasamy, ECE Department) is a programmable FPGA architecture that extends the existing QUANTISENC neuromorphic platform with a hybrid spiking convolutional-plus-fully-connected (CNN-FC) topology: early layers perform spiking convolution with receptive-field connectivity and support for multi-channel kernels and stride, while deeper layers use fully connected spiking layers for classification, all on a quantized, layer-configurable hardware core with a dual-clock design (a separate clock for synaptic memory access versus neuron dynamics) and mixed-precision (8/12/16-bit) arithmetic. A PyTorch/snnTorch-based co-design flow trains the network in software and deploys the quantized parameters to the hardware without resynthesis.

The architecture is validated first on MNIST and Fashion-MNIST, then applied to a genuine biomedical edge task: classifying hypoxia severity (Normal/Moderate/Severe SpO2 bands) from red and infrared photoplethysmography (PPG) signals recorded from a shoulder-mounted sensor on 12 subjects at the UCSF Hypoxia Laboratory, with skin tone included as an explicit additional input channel.

At 16-bit precision the hardware reaches 98.0% accuracy on MNIST (1.556 W), 86.0% on Fashion-MNIST (1.746 W), and an average 88.26% accuracy across five folds on the hypoxia task at 1.455 W (727.5 microjoules per inference). Dropping to 8-bit precision on the hypoxia task cuts power to 0.771 W (a 1.89x reduction versus 16-bit) but accuracy falls to 78.62%; 12-bit sits in between at 86.24% accuracy and 1.284 W. FPGA resource utilization for the 16-bit hypoxia configuration is reported at 51.73% LUTs, 19.64% flip-flops, and 15.55% BRAM.

## Summary (ZH)

脉冲神经网络（SNN）因其低功耗特性对生物医学可穿戴设备极具吸引力，但论文指出，相较于全连接结构，支持卷积型 SNN 拓扑的神经形态加速器在可配置性与量化支持方面仍研究不足。德雷塞尔大学（Sarah Johari、Suman Kumar、Abhishek Mishra、Anush Lingamoorthy 与 Nagarajan Kandasamy，电子与计算机工程系）的贡献是一款可编程 FPGA 架构，在现有 QUANTISENC 神经形态平台基础上扩展出一种混合"脉冲卷积+全连接"（CNN-FC）拓扑：前部层执行具有感受野连接、支持多通道卷积核与步幅的脉冲卷积，深层则使用全连接脉冲层完成分类，整体运行在一个量化的、可按层配置的硬件核心上，采用双时钟设计（突触内存访问与神经元动态各用独立时钟）与混合精度（8/12/16 位）运算。基于 PyTorch/snnTorch 的软硬件协同设计流程在软件端训练网络，并将量化后的参数部署到硬件上，无需重新综合。

该架构首先在 MNIST 与 Fashion-MNIST 上完成验证，随后应用于一个真实的生物医学边缘任务：基于加州大学旧金山分校缺氧实验室（UCSF Hypoxia Laboratory）12 名受试者肩部佩戴传感器采集的红光与红外光电容积描记（PPG）信号，对缺氧严重程度（正常/中度/重度 SpO2 区间）进行分类，并将肤色作为一个显式的附加输入通道。

在 16 位精度下，该硬件在 MNIST 上达到 98.0% 准确率（功耗 1.556 W），在 Fashion-MNIST 上达到 86.0%（功耗 1.746 W），在缺氧分类任务上五折平均准确率为 88.26%（功耗 1.455 W，每次推理能耗 727.5 微焦）。将缺氧任务精度降至 8 位后，功耗降至 0.771 W（相比 16 位降低 1.89 倍），但准确率降至 78.62%；12 位精度介于两者之间，准确率 86.24%、功耗 1.284 W。16 位缺氧配置下的 FPGA 资源占用为：LUT 51.73%、触发器 19.64%、BRAM 15.55%。

## Key technical points (EN)

- **Problem**: convolutional SNN accelerators, unlike fully-connected ones, remain underexplored for configurability and quantization support; a specific biomedical application (hypoxia detection from PPG) lacked hardware acceleration despite demonstrated software effectiveness.
- **Architecture**: extends the QUANTISENC neuromorphic platform with a hybrid spiking CNN-FC topology — convolutional layers use weight-sharing with unrolled parallel computation (Kx x Ky memory cycles per convolution), FC layers use standard all-to-all connectivity, dual-clock design (memory clock vs. spike clock), configurable 8/12/16-bit fixed-point arithmetic.
- **Co-design flow**: PyTorch/snnTorch training in software, per-layer configurability and runtime neuron-parameter tuning on hardware, without resynthesis.
- **Benchmarks**: MNIST (2 conv + 1 FC layer), Fashion-MNIST (2 conv + 2 FC layers), hypoxia classification (2 conv + 2 FC layers, 3 severity classes) from real PPG data (N=12 subjects, UCSF Hypoxia Laboratory).
- **Headline numbers**: MNIST 98.0% acc / 1.556 W (16-bit); Fashion-MNIST 86.0% acc / 1.746 W (16-bit); hypoxia 88.26% avg acc / 1.455 W / 727.5 uJ per inference (16-bit), 86.24% / 1.284 W (12-bit), 78.62% / 0.771 W (8-bit) — an 1.89x power reduction from 16-bit to 8-bit on the hypoxia task, traded against a 9.6-point accuracy drop.
- **FPGA utilization** (16-bit hypoxia config): 51.73% LUTs, 19.64% flip-flops, 15.55% BRAM.
- **Affiliation**: Electrical and Computer Engineering, Drexel University, Philadelphia; posted to arXiv (eess.SY), no conference venue stated.

## Key technical points (ZH)

- **问题**：相较于全连接结构，卷积型 SNN 加速器在可配置性与量化支持方面仍研究不足；一个具体的生物医学应用（基于 PPG 的缺氧检测）虽已在软件层面证明有效，却缺乏对应的硬件加速方案。
- **架构**：在 QUANTISENC 神经形态平台基础上扩展出混合脉冲 CNN-FC 拓扑——卷积层采用权重共享与展开式并行计算（每次卷积耗时 Kx×Ky 个内存周期），全连接层采用标准全互连方式，整体为双时钟设计（内存时钟与脉冲时钟分离），支持可配置的 8/12/16 位定点运算。
- **协同设计流程**：在软件端使用 PyTorch/snnTorch 训练，硬件端支持按层配置与运行时神经元参数调节，无需重新综合。
- **测试基准**：MNIST（2 层卷积 + 1 层全连接）、Fashion-MNIST（2 层卷积 + 2 层全连接）、缺氧分类（2 层卷积 + 2 层全连接，3 个严重程度类别），后者基于真实 PPG 数据（12 名受试者，来自 UCSF 缺氧实验室）。
- **核心数据**：16 位精度下，MNIST 准确率 98.0%/功耗 1.556 W；Fashion-MNIST 准确率 86.0%/功耗 1.746 W；缺氧任务五折平均准确率 88.26%/功耗 1.455 W/单次推理能耗 727.5 微焦；12 位精度下准确率 86.24%/功耗 1.284 W；8 位精度下准确率 78.62%/功耗 0.771 W——即缺氧任务从 16 位降至 8 位可实现 1.89 倍功耗降低，代价是准确率下降 9.6 个百分点。
- **FPGA 资源占用**（16 位缺氧配置）：LUT 51.73%、触发器 19.64%、BRAM 15.55%。
- **所属机构**：德雷塞尔大学电气与计算机工程系（美国费城）；发布于 arXiv（eess.SY 分类），未注明会议/期刊。

## Why it matters / what's new (EN)

Most of this KB's edge-ai-silicon coverage so far has been about general-purpose LLM/vision accelerators (Jetson, in-memory MTJ, analog AIMC in this same run); this entry is a different application shape — a low-power neuromorphic classifier deployed on a real biosensing pipeline rather than a benchmark model — and it is one of the few entries in this bin with measured power and energy numbers on physical FPGA hardware rather than a simulation or a vendor TOPS claim. The quantization-vs-power-vs-accuracy trade-off it reports (1.89x power reduction from 16-bit to 8-bit, at a 9.6-point accuracy cost) is a concrete, independently checkable data point for anyone weighing precision choices in a power-constrained biomedical wearable.

## Why it matters / what's new (ZH)

本 KB 目前在 edge-ai-silicon 主题下的条目大多围绕通用 LLM/视觉加速器（Jetson、存内 MTJ、以及本次同一批次中的模拟 AIMC）；而本条目呈现的是一种不同的应用形态——部署在真实生物传感流水线上的低功耗神经形态分类器，而非面向基准模型的加速器——也是该主题下少数在真实 FPGA 硬件上提供实测功耗与能耗数据、而非依赖仿真或厂商 TOPS 宣称的条目之一。其报告的"量化-功耗-准确率"权衡数据（从 16 位降至 8 位可实现 1.89 倍功耗降低，代价是准确率下降 9.6 个百分点）为任何在功耗受限的生物医学可穿戴设备中权衡精度选择的人，提供了一个具体、可独立核验的数据点。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
