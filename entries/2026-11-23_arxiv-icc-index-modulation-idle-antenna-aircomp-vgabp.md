---
id: 2026-11-23_arxiv-icc-index-modulation-idle-antenna-aircomp-vgabp
date_published: 2026-09-26
date_found: 2026-11-23
technology: edge-ai
type: academic-paper
title_en: "Integrated Communication and Computing with Index Modulation (idle antennas carry AirComp, simulated mu-MIMO uplink)"
title_zh: "基于索引调制的通信与计算一体化（空闲天线承载空口计算，仿真多用户 MIMO 上行）"
url: "https://arxiv.org/abs/2609.32548"
source_quality: full
topics: [AirComp, index-modulation, ICC, VGaBP, mu-MIMO, pre-equalization]
topic_primary: over-the-air-computation
topics_secondary: [task-oriented-communication]
novelty_score: 3
---

## Summary (EN)

In spatial index modulation (IM), a transmitter conveys bits partly through which antennas are active, and the remaining antennas are normally silent. This paper proposes to use those idle antennas to carry a second, low-power stream for over-the-air computation (AirComp) in the same time and frequency resources as the data. Each user pre-equalizes its computing symbol using local channel state information so that the symbols add coherently to the target sum (a function of all users' computing symbols) at the base station, which uses a passive combiner.

At the receiver, the computing signal is weak (computing energy set to 0.1 of the data energy) and is first treated as noise. A vector-valued Gaussian belief propagation (VGaBP) detector, with one variable node per user and the discrete IM codebook as its support, recovers the data payload; the soft estimate of the data is then subtracted and the function is estimated from the residual. The effective noise covariance is approximated through a scalar Gaussian approximation because the data-dependent interference is a mixture of Gaussians.

Link: simulated uncorrelated block-Rayleigh multiuser-MIMO uplink (4 transmit antennas per user; a small case with 10 receive antennas and 3 users, and a larger one with 32 receive antennas and 15 users). The computed function is a generic sum, not an AI workload.

## Summary (ZH)

在空间索引调制（IM）中，发射机的一部分比特由"哪些天线激活"携带，其余天线通常保持静默。本文提出利用这些空闲天线，在与数据相同的时频资源上发送第二路低功率的空口计算（AirComp）信号。每个用户利用本地信道状态信息对计算符号做预均衡，使这些符号在基站处相干叠加成目标和（所有用户计算符号的函数），基站使用被动合并器。

接收端先把较弱的计算信号（计算能量设为数据能量的 0.1）视为噪声，再用向量值高斯置信传播（VGaBP）检测器恢复数据载荷（每个用户一个变量节点，取值集合为离散 IM 码本）；随后减去数据的软估计，从残差中估计函数值。由于与数据相关的干扰是高斯混合，等效噪声协方差通过标量高斯近似得到。

所经链路：仿真的非相关块瑞利多用户 MIMO 上行（每用户 4 根发射天线；小规模算例为 10 根接收天线、3 个用户，大规模算例为 32 根接收天线、15 个用户）。所计算的函数是通用求和，并非 AI 工作负载。

## Key technical points (EN)

- Accuracy: in the small case, VGaBP tracks the maximum-likelihood detector that uses the same averaged-covariance model, with a remaining gap to the exact-covariance ML bound attributed to the scalar Gaussian approximation; the gap to a communication-only reference quantifies the cost of embedding the computing stream.
- Computing accuracy: in the large case, a channel-blind transmitter given the same radiated computing power has worse NMSE than the aligned design, so the gain comes from coherent alignment rather than extra power; the aligned design stays close to a perfect-interference-cancellation bound.
- Trade-off: moving from one active data antenna with QPSK to two with BPSK (same 4 bits) improves BER but leaves fewer antennas for AirComp, which raises the chance of deep fades and lowers computing accuracy.
- All BER curves show an error floor at high SNR that also appears in the communication-only baseline, so it is attributed to the detector.

## Key technical points (ZH)

- 精度：小规模算例中，VGaBP 紧随使用同一平均协方差模型的最大似然检测器；与精确协方差 ML 界之间的剩余差距归因于标量高斯近似；与仅通信参考之间的差距量化了嵌入计算流的代价。
- 计算精度：大规模算例中，在相同发射计算功率下，信道盲发射机的 NMSE 比对齐设计更差，说明增益来自相干对齐而非额外功率；对齐设计与完美干扰消除界较为接近。
- 折中：从 1 根数据天线加 QPSK 改为 2 根数据天线加 BPSK（同为 4 比特）可改善 BER，但可用于 AirComp 的天线变少，深衰落概率升高，计算精度下降。
- 所有 BER 曲线在高信噪比处出现误码平层，且仅通信基线中同样存在，因此归因于检测器。

## Why it matters / what's new (EN)

Most AirComp entries in the KB (for example 2026-11-19_arxiv-ofdm-tone-reservation-papr-over-the-air-computing) combine the computing signal with the data link by power or subcarrier design. This one reuses the idle antennas of a spatial index-modulation transmitter, so it needs no extra bandwidth, at the cost, as the paper states, of giving up IM's RF-chain and power savings. The evidence is a short simulation study with a generic sum function and a simplified statistical model; it shows the antenna-allocation trade-off but no hardware result or AI task.

## Why it matters / what's new (ZH)

KB 中多数 AirComp 条目（例如 2026-11-19_arxiv-ofdm-tone-reservation-papr-over-the-air-computing）通过功率或子载波设计把计算信号与数据链路合并。本文复用空间索引调制发射机的空闲天线，因此无需额外带宽，但正如论文所述，代价是放弃 IM 在射频链与功耗上的节省。证据是一项简短的仿真研究，使用通用求和函数与简化的统计模型；它展示了天线分配的折中，但没有硬件结果，也没有 AI 任务。
