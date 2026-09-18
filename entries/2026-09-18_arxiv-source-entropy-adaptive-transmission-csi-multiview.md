---
id: 2026-09-18_arxiv-source-entropy-adaptive-transmission-csi-multiview
date_published: 2026-09-16
date_found: 2026-09-18
technology: wifi
type: academic-paper
title_en: "Source Entropy-Guided Adaptive Transmission for Communication-Driven Multi-View Sensing"
title_zh: "源信息熵引导的通信驱动多视角感知自适应传输"
url: "https://arxiv.org/abs/2609.19457"
source_quality: full
topics: [CSI, WiFi-sensing, gesture-recognition, information-bottleneck, edge-inference, Widar3.0]
topic_primary: sensing-csi
topics_secondary: [wifi-for-ai]
novelty_score: 3
---

## Summary (EN)

This paper (Mingjie Yang, Guangming Liang, Dongzhu Liu, Lei Zhang -- University of Glasgow; Xiaonan Liu -- University of Aberdeen; Kaibin Huang -- University of Hong Kong) addresses a coupling the authors say communication-driven multi-view Wi-Fi sensing systems face: sensing data comes from Channel State Information (CSI) extracted from routine communication packets, so the communication interval sets how much source information exists, while the uplink channel condition sets how much of that information the edge server can actually receive within a latency budget. Their setup has K spatially distributed edge devices and one access point/edge server; each received packet at a device yields a CSI snapshot, and over an observation window the device accumulates a matrix of snapshots that must be delivered to the server for gesture-recognition inference.

Their first contribution is an analytical characterization of the Shannon entropy of the quantized CSI data as a function of the communication interval and quantization resolution: they model the CSI time series as a zero-mean multi-output Gaussian process (MOGP) with a separable covariance (a rational-quadratic kernel over time, times a static feature-domain covariance capturing multipath and antenna structure), derive a closed-form upper bound on the discrete entropy from this model, and show it scales as O(1/interval) in the sparse-sampling regime -- i.e., fewer packets means proportionally less information content. This entropy bound is then compared against the number of bits the channel can actually deliver within the latency requirement: if the entropy bound fits under that budget, the server can reconstruct the raw CSI and infer directly; otherwise the device must fall back to task-oriented transmission, sending a compressed representation instead of raw data.

For the task-oriented case, the paper formulates the communication-constrained multi-view inference problem as an information-bottleneck objective -- minimizing the uncertainty of the gesture label given the received representations, subject to a per-device mutual-information (i.e., rate) constraint -- and shows this can be decomposed into two independently-trainable stages instead of requiring alternating device-server optimization: Adaptive Distributed Encoding (ADE), where each device trains its own encoder (producing a Gaussian-parameterized latent that is then uniformly quantized to fit its individual bit budget) without needing to coordinate with the server during training, and Multi-View Inference (MI), where the server trains a classifier over the received encoded features from all devices in one shot. The authors call the combined method ADE-MI.

Experiments used the "Room 1" subset of the Widar3.0 multi-view CSI gesture-recognition dataset (9,000 paired CSI/gesture-label samples across 6 receivers, 6 gesture classes; the paper uses K=3 of the 6 views for its main comparisons, CSI feature dimension 121, quantization step 1/255). The MOGP-derived entropy bound tracked a normalizing-flow-based numerical entropy estimate closely (about a 6.9% relative gap at a 16 ms communication interval). Across the tested communication intervals, ADE-MI showed recognition-accuracy gains of up to ~9.3 points over a VDDIB baseline and up to ~44.2 points over PCA-based compression at the same 128-bit budget. Under time-varying (Rician-fading) channels with adaptive quantization and entropy-guided switching between raw and task-oriented transmission, the system reached 92.23% accuracy with a 3.28% outage rate, versus 58.91% accuracy and 37.50% outage for a fixed 16-bit quantizer without adaptation (with the original-data transmission mode selected in 34.21% of channel states in this test); the paper also reports that adding more sensing views improves accuracy from about 86% (1 device) to about 96% (5 devices) even as each device's individual bit budget shrinks accordingly.

## Summary (ZH)

本文（Mingjie Yang、Guangming Liang、Dongzhu Liu、Lei Zhang——格拉斯哥大学；Xiaonan Liu——阿伯丁大学；Kaibin Huang——香港大学）研究通信驱动的多视角 Wi-Fi 感知系统所面临的一种耦合关系：感知数据来自从日常通信数据包中提取的信道状态信息（CSI），因此通信间隔决定了源信息量的多少，而上行信道条件则决定了在时延预算内边缘服务器实际能接收到多少信息。其系统设置为 K 个空间分布的边缘设备与一个接入点/边缘服务器；设备每收到一个数据包即可得到一份 CSI 快照，在一个观测窗口内累积形成需上传至服务器以完成手势识别推断的快照矩阵。

其第一项贡献是对量化后 CSI 数据的香农熵进行解析刻画，将其表示为通信间隔与量化分辨率的函数：作者将 CSI 时间序列建模为零均值的多输出高斯过程（MOGP），其协方差采用可分离形式（时间维上的有理二次核，乘以刻画多径与天线结构的静态特征维协方差），并据此推导出离散熵的闭式上界，证明在稀疏采样情形下该上界随通信间隔呈 O(1/间隔) 衰减——即数据包越稀疏，信息量按比例越少。随后将该熵上界与信道在时延要求内实际可传输的比特数进行比较：若熵上界不超过该预算，服务器即可重构原始 CSI 并直接推断；否则设备须退回到"面向任务"的传输方式，发送压缩表示而非原始数据。

针对面向任务传输的情形，论文将受通信约束的多视角推断问题构建为信息瓶颈目标——在满足各设备互信息（即码率）约束的前提下，最小化在已接收表示条件下手势标签的不确定性——并证明该问题可分解为两个可独立训练的阶段，而无需设备与服务器之间的交替优化：自适应分布式编码（ADE），每个设备训练自己的编码器（输出高斯参数化的隐变量，再经均匀量化以适配其各自的比特预算），训练过程中无需与服务器协同；以及多视角推断（MI），服务器基于一次性接收到的各设备编码特征训练分类器。作者将该组合方法称为 ADE-MI。

实验使用 Widar3.0 多视角 CSI 手势识别数据集的 "Room 1" 子集（6 个接收机、6 类手势，共 9000 组配对的 CSI/手势标签样本；主要对比实验使用其中 K=3 个视角，CSI 特征维度为 121，量化步长为 1/255）。基于 MOGP 推导的熵上界与基于归一化流的数值熵估计结果高度吻合（在 16 毫秒通信间隔下相对差距约 6.9%）。在各测试通信间隔上，于同样的 128 比特预算下，ADE-MI 的手势识别准确率相较 VDDIB 基线最多提升约 9.3 个百分点，相较基于 PCA 的压缩方法最多提升约 44.2 个百分点。在时变（Rician 衰落）信道下，结合自适应量化与熵引导的原始/面向任务传输切换，系统达到 92.23% 的准确率与 3.28% 的中断率，而未做自适应的固定 16 比特量化方案准确率仅为 58.91%、中断率高达 37.50%（该测试中原始数据传输模式在 34.21% 的信道状态下被选中）；论文还报告，增加感知视角数可将准确率从约 86%（1 个设备）提升至约 96%（5 个设备），即便每个设备各自的比特预算因此相应缩减。

## Key technical points (EN)

- **Setup**: K spatially distributed edge devices + 1 AP/edge server (co-located, negligible AP-server latency); CSI snapshots extracted at the devices from routine downlink communication packets rather than dedicated sensing probes; the sensing data is then uploaded over an OFDMA uplink.
- **Entropy characterization**: CSI time series modeled as a zero-mean multi-output Gaussian process with separable (rational-quadratic time kernel x static feature-domain) covariance; yields a closed-form discrete-entropy upper bound that scales as O(1/communication-interval) in the sparse-sampling regime.
- **Transmission-mode decision**: if the entropy upper bound fits within the channel's bit budget (rate x latency requirement), transmit raw data for direct reconstruction; otherwise switch to task-oriented (compressed) transmission.
- **ADE-MI**: an information-bottleneck formulation of communication-constrained multi-view inference, decomposed into (1) Adaptive Distributed Encoding -- each device independently trains a Gaussian-latent encoder quantized to its own bit budget, no device-server coordination needed during training -- and (2) Multi-View Inference -- the server trains a classifier over all devices' received encoded features in one shot.
- **Dataset**: Widar3.0 "Room 1" subset, 9,000 CSI/gesture-label samples, 6 receivers / 6 gesture classes (K=3 used in main comparisons), CSI feature dimension 121.
- **Headline results**: entropy bound within ~6.9% of a normalizing-flow numerical estimate (16 ms interval); ADE-MI accuracy gains of up to ~9.3 points over VDDIB and up to ~44.2 points over PCA at the same 128-bit budget; under Rician fading with adaptive quantization + entropy-guided switching, 92.23% accuracy / 3.28% outage vs. 58.91% / 37.50% for fixed 16-bit quantization; accuracy rises from ~86% (1 device) to ~96% (5 devices) as more sensing views are added despite shrinking per-device bit budgets.

## Key technical points (ZH)

- **系统设置**：K 个空间分布的边缘设备 + 1 个接入点/边缘服务器（二者共址，AP-服务器时延可忽略）；CSI 快照由各设备从日常的下行通信数据包中提取，而非专用感知探测帧；感知数据随后经 OFDMA 上行链路上传至服务器。
- **熵刻画**：将 CSI 时间序列建模为协方差可分离（时间维有理二次核 × 静态特征维协方差）的零均值多输出高斯过程；据此推导出闭式离散熵上界，在稀疏采样情形下随通信间隔呈 O(1/间隔) 衰减。
- **传输模式判定**：若熵上界不超过信道比特预算（码率 × 时延要求），则传输原始数据以供直接重构；否则切换为面向任务的压缩传输。
- **ADE-MI**：将受通信约束的多视角推断问题构建为信息瓶颈目标，分解为（1）自适应分布式编码——各设备独立训练高斯隐变量编码器并按自身比特预算量化，训练期间无需与服务器协同；与（2）多视角推断——服务器基于一次性接收的各设备编码特征训练分类器。
- **数据集**：Widar3.0 数据集 "Room 1" 子集，9000 组 CSI/手势标签样本，6 个接收机/6 类手势（主要对比实验采用其中 K=3 个视角），CSI 特征维度 121。
- **主要结果**：熵上界与基于归一化流的数值估计相差约 6.9%（16 毫秒间隔）；在同样的 128 比特预算下，ADE-MI 准确率相较 VDDIB 最多提升约 9.3 个百分点、相较 PCA 最多提升约 44.2 个百分点；Rician 衰落信道下结合自适应量化与熵引导切换，准确率 92.23%、中断率 3.28%，而固定 16 比特量化方案仅为 58.91%/37.50%；随着感知视角数增加（即便各设备比特预算相应缩减），准确率从约 86%（1 个设备）升至约 96%（5 个设备）。

## Why it matters / what's new (EN)

The KB's `sensing-csi` bin already covers CSI-based gesture recognition on the Widar3.0 dataset, but this paper's contribution sits at the communication-inference boundary rather than the sensing model itself: it derives an analytical (MOGP-based) bound on how much information a given communication interval can even produce, and uses that bound to decide, online, whether to transmit raw CSI or a task-oriented compressed representation -- avoiding the alternating device-server optimization that prior information-bottleneck-based split-inference approaches (e.g., the VDDIB baseline it compares against) typically require. This is why it is filed with `wifi-for-ai` as a secondary topic alongside its `sensing-csi` primary.

## Why it matters / what's new (ZH)

知识库 `sensing-csi` 分类下已有基于 Widar3.0 数据集的 CSI 手势识别相关条目，但本文的贡献落在通信与推断的交界处，而非感知模型本身：论文基于多输出高斯过程推导出一个解析上界，刻画给定通信间隔本身能产生多少信息量，并据此在线决定应传输原始 CSI 还是面向任务的压缩表示——从而避免了以往基于信息瓶颈的切分推断方法（如其对比的 VDDIB 基线）通常需要的设备-服务器交替优化。这也是本条目在以 `sensing-csi` 为主要主题的同时，将 `wifi-for-ai` 列为次要主题的原因。

## Images

![System overview: multi-view CSI sensing devices, adaptive transmission decision, and edge inference | 系统概览：多视角 CSI 感知设备、自适应传输决策与边缘推断](https://arxiv.org/html/2609.19457v1/illustration.png)
