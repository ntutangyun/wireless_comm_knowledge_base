---
id: 2026-10-12_arxiv-locattmamba-uwb-5g-indoor-localization
date_published: 2026-10-05
date_found: 2026-10-12
type: academic-paper
technology: uwb
title_en: "LocAttMamba: A Low-Complexity Mamba Framework with Attention-Based Multi-AP Fusion for Indoor Localization"
title_zh: "LocAttMamba：面向室内定位的低复杂度 Mamba 框架与基于注意力的多接入点融合方法"
url: "https://arxiv.org/abs/2610.05673"
source_quality: full
topics: [UWB, 5G, Mamba, CIR, indoor-positioning, multi-AP-fusion, uncertainty-calibration]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

On 5 October 2026, MohammadMahdi Ghadaksaz and co-authors posted "LocAttMamba: A Low-Complexity Mamba Framework with Attention-Based Multi-AP Fusion for Indoor Localization" to arxiv (cs.NI). The paper targets indoor localization for 5G and 6G networks where positioning devices run under tight computational budgets and in non-line-of-sight (NLoS) conditions. Transformer-based localizers can model dependencies across the channel impulse response (CIR) measurements collected from multiple distributed access points (APs), but their high multiply-accumulate (MAC) operation counts and long inference times make them a poor fit for constrained devices; lightweight recurrent and convolutional models trade that cost for worse accuracy. LocAttMamba processes the CIR and time-based features of each AP through its own Mamba encoder — stacked forward and reverse Mamba blocks with input-dependent state matrices and time steps, giving near-linear complexity versus a transformer's quadratic attention cost — and then fuses the resulting per-AP embeddings through a multi-head attention layer using a shared learnable query that re-weights each AP's contribution at every time step according to its importance. The framework jointly predicts the 2D user location and a per-axis uncertainty estimate, which is refined through a post-hoc per-axis temperature-scaling calibration step; the paper reports this calibration step reduces the normalized squared error of the uncertainty estimate from 34.6 to 2.15 on the test set.

The authors evaluate on two real-world datasets, one 5G and one UWB, each with 6 access points. The 5G dataset's CIR has 128 elements per AP at 100 MHz bandwidth and 3.7 GHz carrier frequency; the UWB dataset's CIR has 366 elements per AP at 499.2 MHz bandwidth and 4 GHz carrier frequency. Against seven benchmark models (SVM, Bi-LSTM, ACNN, L-SwiGLU-T, Swin-Loc, Sec5GLoc, and MambaLoc), LocAttMamba reports the lowest mean 2D positioning error on the 5G dataset (1.004 m mean / 0.874 m median), beating the second-best benchmark on mean error (Swin-Loc, 1.113 m) by 9.79%, although Sec5GLoc has a 5.61% lower median (0.825 m), while requiring the fewest MAC operations of any evaluated model and running 4.4-16x faster than the transformer-based benchmarks. On the UWB dataset the paper reports a mean 2D error of 0.599 m, ahead of the second-best benchmark (L-SwiGLU-T) by 5.82%.

## Summary (ZH)

2026年10月5日，MohammadMahdi Ghadaksaz 及其合作者在 arxiv（cs.NI 分类）发布论文《LocAttMamba：面向室内定位的低复杂度 Mamba 框架与基于注意力的多接入点融合方法》。论文面向5G与6G网络中的室内定位场景，此类场景下定位设备的计算预算有限，且常处于非视距（NLoS）条件。基于Transformer的定位方法能够建模多个分布式接入点（AP）采集的信道冲激响应（CIR）测量值之间的依赖关系，但其高乘加（MAC）运算量与较长推理时延，使其难以适配算力受限设备；而轻量级的循环或卷积模型则以精度下降为代价换取低计算成本。LocAttMamba 对每个AP的CIR与时间相关特征分别用独立的 Mamba 编码器处理——由前向与反向堆叠的 Mamba 模块组成，具有输入相关的状态矩阵与时间步长，相较Transformer的二次方注意力代价，实现了近线性复杂度；随后通过一个共享可学习查询向量的多头注意力层，将各AP的嵌入特征融合，在每个时间步根据重要性对各AP的贡献重新加权。该框架同时预测二维用户位置及按坐标轴划分的不确定性估计，并通过事后的按轴温度缩放校准步骤进行细化；论文报告该校准步骤将不确定性估计的归一化平方误差从34.6降至2.15（测试集）。

作者在两个真实采集的数据集（一个5G、一个UWB）上进行评估，均含6个接入点。5G数据集每个AP的CIR含128个元素，带宽100 MHz，载频3.7 GHz；UWB数据集每个AP的CIR含366个元素，带宽499.2 MHz，载频4 GHz。与七个基准模型（SVM、Bi-LSTM、ACNN、L-SwiGLU-T、Swin-Loc、Sec5GLoc、MambaLoc）相比，LocAttMamba 在5G数据集上取得最低的平均二维定位误差（平均1.004米／中位0.874米），平均误差较次优基准（Swin-Loc，1.113米）降低9.79%，但 Sec5GLoc 的中位误差低5.61%（0.825米），同时所需MAC运算量为所有评测模型中最少，推理速度比基于Transformer的基准快4.4-16倍。在UWB数据集上，论文报告平均二维误差为0.599米，领先次优基准（L-SwiGLU-T）5.82%。

## Key technical points (EN)

- Problem: low-complexity indoor localization for 5G/6G devices under NLoS, where transformer-based multi-AP fusion is accurate but computationally expensive, and lightweight RNN/CNN models trade accuracy for speed.
- Architecture: per-AP Mamba encoder (stacked forward/reverse Mamba blocks, near-linear complexity) processes CIR + time features independently, then a multi-head attention layer with a shared learnable query fuses per-AP embeddings, weighting each AP's importance at every time step.
- Joint output: 2D location prediction plus a per-axis uncertainty estimate, refined via post-hoc per-axis temperature scaling (reduces normalized squared error of the uncertainty estimate from 34.6 to 2.15 on the test set).
- Datasets: 5G (6 APs, 128-element CIR, 100 MHz bandwidth, 3.7 GHz carrier) and UWB (6 APs, 366-element CIR, 499.2 MHz bandwidth, 4 GHz carrier), both real-world collections.
- Benchmarks compared: SVM, Bi-LSTM, ACNN, L-SwiGLU-T, Swin-Loc, Sec5GLoc, MambaLoc.
- 5G results: LocAttMamba 1.004 m mean / 0.874 m median 2D error, beating second-best Swin-Loc (1.113 m mean) by 9.79% on mean error (Sec5GLoc has the lower median, 0.825 m); fewest MACs of all evaluated models; 4.4-16x faster inference than transformer-based benchmarks.
- UWB results: 0.599 m mean 2D error, 5.82% improvement over the second-best benchmark (L-SwiGLU-T) on that dataset.
- Both datasets come from a publicly available Fraunhofer IIS fingerprinting dataset (ref. [31]); the paper gives no code repository.

## Key technical points (ZH)

- 问题背景：面向5G/6G设备、NLoS条件下的低复杂度室内定位——基于Transformer的多AP融合方法精度高但计算代价大，轻量级RNN/CNN模型则以精度换取速度。
- 架构：每个AP独立使用Mamba编码器（前向/反向堆叠的Mamba模块，近线性复杂度）处理CIR与时间特征，再通过带共享可学习查询向量的多头注意力层融合各AP嵌入，在每个时间步按重要性加权。
- 联合输出：二维位置预测及按坐标轴划分的不确定性估计，经事后按轴温度缩放校准细化（测试集上将不确定性估计的归一化平方误差从34.6降至2.15）。
- 数据集：5G（6个AP，128元素CIR，100 MHz带宽，3.7 GHz载频）与UWB（6个AP，366元素CIR，499.2 MHz带宽，4 GHz载频），均为真实采集数据。
- 对比基准：SVM、Bi-LSTM、ACNN、L-SwiGLU-T、Swin-Loc、Sec5GLoc、MambaLoc。
- 5G结果：LocAttMamba 平均二维误差1.004米／中位0.874米，平均误差较次优基准Swin-Loc（1.113米）降低9.79%（Sec5GLoc 中位误差更低，为0.825米）；所需MAC运算量为所有评测模型中最少；推理速度比基于Transformer的基准快4.4-16倍。
- UWB结果：平均二维误差0.599米，较该数据集上次优基准（L-SwiGLU-T）提升5.82%。
- 两个数据集均来自 Fraunhofer IIS 公开的指纹定位数据集（文献[31]）；论文未提供代码仓库。

## Why it matters / what's new (EN)

The KB's UWB bin already has one entry benchmarking classical and deep-learning estimators on a fused UWB+BLE+Wi-Fi-FTM dataset (2026-09-23_arxiv-hymn-benchmark-uwb-ble-wifi-positioning), where a classical Bayesian grid filter matched a ResNet on median accuracy. LocAttMamba is a different kind of cross-technology entry: rather than comparing estimators on one fused dataset, it applies the same low-complexity Mamba-plus-attention architecture separately to a 5G CIR dataset and a UWB CIR dataset, reporting that the identical architecture beats the same set of seven benchmarks on mean error on both (second-best: Swin-Loc on 5G, L-SwiGLU-T on UWB), while using the fewest MAC operations of any model compared. The UWB results come from a Fraunhofer IIS fingerprinting dataset (6 APs, 499.2 MHz bandwidth, 4 GHz carrier, 366-element CIR); the paper reports 0.599 m mean error at 0.953 M multiply-accumulates per sample, the fewest of the models compared.

## Why it matters / what's new (ZH)

本知识库UWB板块已有一条在融合UWB+BLE+Wi-Fi-FTM数据集上对比经典与深度学习估计器的条目（2026-09-23_arxiv-hymn-benchmark-uwb-ble-wifi-positioning），其中经典贝叶斯网格滤波器在中位精度上与ResNet相当。LocAttMamba 则是另一类跨技术条目：它并非在单一融合数据集上比较不同估计器，而是将同一套低复杂度Mamba加注意力架构分别应用于5G CIR数据集与UWB CIR数据集，报告该同一架构在两个数据集上的平均误差均优于同一组七个基准（次优分别为5G上的Swin-Loc与UWB上的L-SwiGLU-T），同时所需MAC运算量为所有对比模型中最少。UWB结果来自 Fraunhofer IIS 指纹数据集（6个AP，499.2 MHz带宽，4 GHz载频，366元素CIR）；论文报告平均误差0.599米、每样本0.953 M次乘加运算，为所对比模型中最少。

## Images

![Test-set trajectory with color-coded prediction error | 测试集轨迹图，颜色标注预测误差大小](https://arxiv.org/html/2610.05673v1/test_trajectory_error.png)
