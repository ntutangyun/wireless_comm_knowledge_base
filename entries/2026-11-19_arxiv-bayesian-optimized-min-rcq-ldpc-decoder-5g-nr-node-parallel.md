---
id: 2026-11-19_arxiv-bayesian-optimized-min-rcq-ldpc-decoder-5g-nr-node-parallel
date_published: 2026-11-11
date_found: 2026-11-19
type: academic-paper
technology: cellular
title_en: "Optimization of Finite Alphabet Message Passing Decoding on Fully Node-Parallel Architectures for 5G LDPC Codes"
title_zh: "面向全节点并行架构的 5G LDPC 码有限字母表消息传递译码优化"
url: "https://arxiv.org/abs/2611.15694"
source_quality: full
topics: [5G-NR, LDPC, TS-38.212, finite-alphabet-message-passing, min-RCQ, Bayesian-optimization, decoder-ASIC]
topic_primary: 5g-nr
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

von Bank, Griebel, Edelmann, Wehn and Schmalen (KIT, RPTU, Creonic; funded under the Open6GHub+ project) propose a design method for the lookup tables of a min-RCQ (minimum reconstruction, computation and quantization) LDPC decoder using Bayesian optimization with frame error rate as the loss. The method needs no knowledge of the channel or modulation, handles irregular codes with puncturing and shortening, and yields one set of iteration-agnostic LUTs reusable across all iterations, which suits non-unrolled, fully node-parallel decoder hardware. It is applied to the base-graph-2 5G NR LDPC code and compared with a quantized normalized min-sum decoder in a 12 nm FinFET implementation study.

## Summary (ZH)

von Bank、Griebel、Edelmann、Wehn 与 Schmalen（KIT、RPTU、Creonic；受 Open6GHub+ 项目资助）提出一种 min-RCQ（最小重构-计算-量化）LDPC 译码器查找表的设计方法，以贝叶斯优化为工具、帧错误率为损失函数。该方法无需知道信道或调制方式，适用于带打孔和缩短的非规则码，并产生可在所有迭代中复用的、与迭代无关的一套 LUT，适合非展开的全节点并行译码器硬件。论文将其应用于基图 2（BG2）的 5G NR LDPC 码，并在 12 nm FinFET 实现研究中与量化归一化最小和（NMS）译码器比较。

## Key technical points (EN)

- Motivation: LDPC is used in 5G (TS 38.212) and WLAN; routing networks between check and variable nodes dominate complexity in node-parallel decoders, and finite-alphabet message passing reduces message width using LUTs. Information-bottleneck designs give node- and iteration-specific LUTs, which cost storage, multiplexing and control in architectures that reuse processing units across iterations.
- Method: Bayesian optimization (Gaussian-process regression with expected improvement) tunes the LUT parameters directly on the specific code, using only the transmitted bits and decoded bits; a reduced search subspace is introduced, which the paper reports shrinks the search region by 42% for the studied code.
- Setup: (1000, 500, 64) BG2 5G LDPC code over a BI-AWGN channel at Eb/N0 = 2.5 dB for optimization; channel quantizer 6 bit, high-precision space 6 bit, low-precision (exchanged message) space 4 bit; 36 optimized parameters (step size plus symmetric quantization and reconstruction LUTs for check-node degrees 4 to 8); 32 decoding iterations; baseline is a 6-bit NMS decoder with scaling 0.75.
- Error correction: min-RCQ is slightly worse than NMS below Eb/N0 of 2.25 dB and better above it.
- Implementation (12 nm FinFET, 600 MHz target, 70% utilization, post-P&R): throughput 21.6 versus 21.1 Gbit/s, area 0.232 versus 0.281 mm2, power 0.332 versus 0.528 W, energy efficiency 15.36 versus 25.02 pJ/bit (-38.6%), area efficiency 93.1 versus 75.1 Gbit/s/mm2 (+24.0%); node-to-node wires reduced 33.3% (4-bit versus 6-bit messages).
- Caveats visible in the text: a single short code and one operating point were optimized; the limited degrees of freedom of the reduced search space may cost FER performance, which the authors state is not quantified; results are for an AWGN channel and a decoder implementation study, with code released publicly.

## Key technical points (ZH)

- 动机：LDPC 用于 5G（TS 38.212）和 WLAN；在节点并行译码器中，校验节点与变量节点之间的布线网络主导复杂度，有限字母表消息传递借助 LUT 缩减消息位宽。信息瓶颈法得到按节点、按迭代而异的 LUT，在跨迭代复用处理单元的架构中会带来存储、复用器和控制逻辑开销。
- 方法：用贝叶斯优化（高斯过程回归加期望改进）直接在具体码上调节 LUT 参数，仅需发送比特与译码后比特；引入缩小的搜索子空间，论文称针对所研究的码将搜索区域缩小了 42%。
- 设置：(1000, 500, 64) BG2 5G LDPC 码，BI-AWGN 信道，优化时 Eb/N0 = 2.5 dB；信道量化器 6 比特，高精度空间 6 比特，低精度（交换消息）空间 4 比特；36 个优化参数（步长，以及校验节点度 4 至 8 的对称量化与重构 LUT）；32 次译码迭代；基线为缩放因子 0.75 的 6 比特 NMS 译码器。
- 纠错性能：Eb/N0 低于 2.25 dB 时 min-RCQ 略逊于 NMS，高于该值则更优。
- 实现（12 nm FinFET，目标 600 MHz，70% 利用率，布局布线后）：吞吐 21.6 对 21.1 Gbit/s，面积 0.232 对 0.281 mm2，功耗 0.332 对 0.528 W，能效 15.36 对 25.02 pJ/bit（-38.6%），面积效率 93.1 对 75.1 Gbit/s/mm2（+24.0%）；节点间连线减少 33.3%（4 比特对 6 比特消息）。
- 文中可见的注意事项：仅针对一个较短的码和一个工作点进行优化；缩小搜索空间后自由度受限，可能损失 FER 性能，作者表示该量化超出本文范围；结果基于 AWGN 信道和译码器实现研究，代码已公开。

## Why it matters / what's new (EN)

This is a physical-layer hardware-oriented result tied to the 5G NR channel code: a way to obtain a single reusable LUT set for min-RCQ decoding that translates into lower energy per bit in a synthesized 12 nm design. The evidence is one code and an AWGN channel, so the gain should be read as a design-study figure rather than a general decoder comparison.

## Why it matters / what's new (ZH)

这是与 5G NR 信道码相关的、偏硬件实现的物理层结果：为 min-RCQ 译码得到一套可复用的 LUT，并在综合出的 12 nm 设计中体现为更低的每比特能耗。证据仅来自一个码和 AWGN 信道，因此该收益应视为设计研究数据，而非通用的译码器对比。

## Images

None.
