---
id: 2026-11-04_arxiv-class-low-papr-rank-2-dft-s-ofdm-6g-uplink
date_published: 2026-10-31
date_found: 2026-11-04
type: academic-paper
technology: cellular
title_en: "Low-PAPR Rank-2 DFT-s-OFDM Waveform for 6G Uplink (CLASS)"
title_zh: "面向 6G 上行的低 PAPR 双层（Rank-2）DFT-s-OFDM 波形（CLASS）"
url: "https://arxiv.org/abs/2611.00862"
source_quality: full
topics: [DFT-s-OFDM, PAPR, rank-2, 6G-uplink, SLM, PTS, layer-assignment, TR-38.760]
topic_primary: 6g-vision
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)

Yewen Cao, Fen Hou (University of Macau) and Yulin Shao (University of Hong Kong) address peak-to-average power ratio (PAPR) in rank-2 DFT-s-OFDM uplink, which the paper links to the 3GPP Release 20 6G radio study (TR 38.760-1) that supports DFT-s-OFDM uplink with a maximum rank of two. A high PAPR on either spatial layer forces power-amplifier backoff, so the worst-layer PAPR is the quantity to reduce.

The paper uses a freedom specific to rank 2: at each DFT input position, a pair of constellation symbols can be assigned to the two layers in either order, which keeps the information but changes the time-domain waveforms. The proposed Cyclic Layer Assignment with Shared-basis Synthesis (CLASS) generates many assignment candidates from a small number of shared waveform bases using cyclic assignment patterns, then picks the candidate with the lowest worst-layer PAPR. The chosen index (ceil(log2 U) bits) is conveyed to the receiver, which reverses the swap after conventional frequency-domain MIMO equalization.

## Summary (ZH)

Yewen Cao、Fen Hou（澳门大学）与 Yulin Shao（香港大学）处理 Rank-2 DFT-s-OFDM 上行的峰均功率比（PAPR）问题；论文将其与 3GPP Release 20 的 6G 无线接口研究（TR 38.760-1）联系起来，该研究支持最高 2 层的 DFT-s-OFDM 上行传输。任一空间层的高 PAPR 都会迫使功放回退，因此需要降低的是两层中较差一层的 PAPR。

论文利用 Rank-2 特有的自由度：在每个 DFT 输入位置，一对星座符号可以按任一顺序分配到两层，信息不变，但时域波形不同。所提出的"循环层分配与共享基合成"（CLASS）用循环分配模式，从少量共享波形基生成大量分配候选，再选取最差层 PAPR 最低的一个。所选索引（ceil(log2 U) 比特）告知接收端，接收端在常规频域 MIMO 均衡之后撤销该交换。

## Key technical points (EN)

- Contributions as stated: an exact pairwise waveform-diversity metric (kernel-weighted distance between assignment patterns); the minimum number of differential waveform bases for a given number of candidates, so exponentially many candidates come from a logarithmic number of bases; a proof that cyclic grouping maximizes average pairwise diversity under the minimum-basis constraint when equal group sizes are feasible; and an incremental-update candidate-selection algorithm.
- The assignment only swaps DFT input symbols between layers and keeps the occupied subcarriers, so MIMO equalization is unchanged under a CP-based LTI channel.
- Simulation: M = 600 occupied subcarriers, N = 1024, independent 16-QAM, non-coherent rank 2. With six inverse DFTs CLASS explores 16 assignments and lowers the 99th-percentile worst-layer PAPR from 8.61 dB (fixed assignment) to 7.20 dB, a 1.41 dB reduction, versus 7.32 dB for dSLM and 7.56 dB for oSLM and 7.57-7.99 dB for PTS-based variants under the same synthesis budget; it is 1.26 dB below the 8.46 dB one-layer reference.
- At a budget of B = 8 inverse DFTs CLASS reaches 6.96 dB versus 7.15 dB for the best SLM variant (0.19 dB gap).
- At U = 8, cyclic grouping with the minimum r = 4 bases reduces the 99th-percentile PAPR by 1.21 dB, about the same as unstructured random assignments with r = 8 (1.17-1.21 dB), while contiguous grouping gives only 0.20 dB.

## Key technical points (ZH)

- 论文声明的贡献：精确的成对波形多样性度量（分配模式之间的核加权距离）；给定候选数量所需的最少差分波形基数，使得指数级数量的候选可由对数级数量的基合成；证明在可取等大分组时，循环分组在最少基约束下使平均成对多样性最大；以及基于增量更新的候选选择算法。
- 该分配只在两层之间交换 DFT 输入符号、占用子载波不变，因此在基于 CP 的 LTI 信道下 MIMO 均衡不变。
- 仿真：占用子载波 M = 600，N = 1024，独立 16-QAM，非相干 Rank-2。仅用 6 次逆 DFT，CLASS 探索 16 种分配，把 99 分位的最差层 PAPR 从 8.61 dB（固定分配）降到 7.20 dB，降低 1.41 dB；同等合成预算下 dSLM 为 7.32 dB、oSLM 为 7.56 dB，PTS 变体为 7.57-7.99 dB；比 8.46 dB 的单层参考低 1.26 dB。
- 在 B = 8 次逆 DFT 的预算下，CLASS 为 6.96 dB，最佳 SLM 变体为 7.15 dB（差距 0.19 dB）。
- 在 U = 8 时，采用最少 r = 4 个基的循环分组使 99 分位 PAPR 降低 1.21 dB，与 r = 8 的无结构随机分配（1.17-1.21 dB）大致相当，而连续分组仅降低 0.20 dB。

## Why it matters / what's new (EN)

The work targets one open design question in the 6G uplink study, how to get PAPR benefits from the second spatial layer without a large waveform-synthesis cost. The numbers come from link-level PAPR simulation with 16-QAM only; the paper does not report PA models, throughput or BLER impact, and the side-information index adds ceil(log2 U) bits per transmission.

## Why it matters / what's new (ZH)

这项工作面向 6G 上行研究中的一个设计问题：如何在不付出高额波形合成代价的情况下，从第二空间层获得 PAPR 收益。数据来自仅使用 16-QAM 的链路级 PAPR 仿真；论文未报告功放模型、吞吐或误块率影响，且索引这一边信息每次传输增加 ceil(log2 U) 比特。

## Images

None.
