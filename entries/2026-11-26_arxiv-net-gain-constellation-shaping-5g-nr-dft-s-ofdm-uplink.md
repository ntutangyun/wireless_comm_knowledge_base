---
id: 2026-11-26_arxiv-net-gain-constellation-shaping-5g-nr-dft-s-ofdm-uplink
date_published: 2026-11-24
date_found: 2026-11-26
type: academic-paper
technology: cellular
title_en: "Net-Gain-Optimized Constellation Shaping for the 5G NR DFT-s-OFDM Uplink: Probabilistic, Geometric, and Joint Designs"
title_zh: "面向 5G NR DFT-s-OFDM 上行的净增益优化星座整形：概率、几何与联合设计"
url: "https://arxiv.org/abs/2611.32197"
source_quality: full
topics: [5G-NR, DFT-s-OFDM, PAPR, constellation-shaping, probabilistic-shaping, geometric-shaping, 64-QAM, uplink, NR-LDPC]
topic_primary: 5g-nr
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Günther Lindorfer and Andreas Springer (Institute for Communications Engineering and RF-Systems, Johannes Kepler University Linz) study constellation shaping on the 5G NR uplink waveform DFT-s-OFDM (submitted to WCNC 2027, per the arXiv comments). Shaping raises the achievable information rate but can also raise the peak-to-average power ratio (PAPR), which forces more power-amplifier back-off and shrinks the link budget on the power-limited uplink. The paper turns this trade-off into a design objective, the "net-gain": the sum of the communication gain (SNR reduction at a target BLER) and the PAPR gain (PAPR reduction at a target CCDF level), in dB relative to uniform 64-QAM at the same spectral efficiency of 4 bits per channel use.

The authors optimize probabilistic shaping (PS), geometric shaping (GS, a 2-D non-uniform constellation) and a joint scheme (1-D non-uniform grid plus shaped per-dimension probabilities) by gradient descent, using the bit-metric-decoding achievable information rate and a kurtosis-based PAPR surrogate as differentiable costs. The resulting constellations are validated on a full DFT-s-OFDM link-level chain with 5G NR LDPC coding over AWGN. Conventional Maxwell-Boltzmann PS yields a negative net-gain, net-gain-aware optimization removes that deficit for every method, and the 2-D GS design gives the largest net-gain.

## Summary (ZH)

Günther Lindorfer 与 Andreas Springer（林茨约翰内斯·开普勒大学通信工程与射频系统研究所）研究 5G NR 上行波形 DFT-s-OFDM 上的星座整形（据 arXiv 备注已投稿 WCNC 2027）。星座整形可提高可达信息速率，但也可能抬高峰均功率比（PAPR），迫使功率放大器增大回退，在功率受限的上行中压缩链路预算。论文把这一折中变成设计目标“净增益”：通信增益（目标 BLER 下所需 SNR 的降低）与 PAPR 增益（目标 CCDF 水平下 PAPR 的降低）之和，单位 dB，基准为相同频谱效率（每信道使用 4 比特）的均匀 64-QAM。

作者用梯度下降优化概率整形（PS）、几何整形（GS，二维非均匀星座）以及联合方案（一维非均匀网格加整形后的每维概率），以比特度量译码可达信息速率和基于峰度的 PAPR 代理作为可微代价，并在包含 5G NR LDPC 编码、AWGN 信道的完整 DFT-s-OFDM 链路级链路上验证。传统 Maxwell-Boltzmann PS 的净增益为负；考虑净增益的优化使各方法都消除了这一亏损，其中二维 GS 的净增益最大。

## Key technical points (EN)

- Setup: 64-QAM, target SE 4 bpcu, DFT precoder size 96 (8 PRB), subcarrier grid 256, PAPR oversampling factor 8, 5G NR LDPC base graph 1. PS and joint shaping use probabilistic amplitude shaping with a constant-composition distribution matcher (block length 384) at FEC rate 5/6; GS and the uniform reference use rate 2/3. BLER target 10^-2, PAPR read at CCDF 10^-3.
- Standard NR UL-SCH/PUSCH processing would destroy the shaped amplitude bits, so the authors keep the NR LDPC code (base graph, lifting, parity structure) but omit the rate-matching bit interleaver and the PUSCH scrambler.
- Net-gain results relative to uniform 64-QAM (Table II of the paper): Maxwell-Boltzmann PS +0.98 dB communication gain and -1.26 dB PAPR gain, net -0.28 dB; ATSC 3.0 64-NUC +0.40 / -0.26, net +0.14 dB; optimized PS +0.49 / -0.46, net +0.03 dB; optimized joint +0.79 / -0.69, net +0.10 dB; optimized GS +0.28 / +0.18, net +0.46 dB.
- GS is the only scheme that lowers PAPR below the uniform reference while still giving a communication gain. The authors state it needs no distribution matcher (so no rate loss) and only a soft demapper matched to the constellation, and that it also lowers PAPR at 16- and 256-QAM.
- Limits stated by the authors: AWGN channel only; no realistic power-amplifier model; fading channels and PA validation are listed as future work. Standard-conformant PUSCH processing is modified as described above.

## Key technical points (ZH)

- 设置：64-QAM，目标频谱效率 4 bpcu，DFT 预编码长度 96（8 PRB），子载波网格 256，PAPR 过采样因子 8，5G NR LDPC 基图 1。PS 与联合整形采用概率幅度整形与恒定组成分布匹配器（块长 384），FEC 码率 5/6；GS 与均匀基准采用码率 2/3。BLER 目标 10^-2，PAPR 在 CCDF 10^-3 处读取。
- 标准 NR UL-SCH/PUSCH 处理会破坏整形后的幅度比特，因此作者保留 NR LDPC 码（基图、提升、校验结构），但省略速率匹配比特交织器与 PUSCH 加扰。
- 相对均匀 64-QAM 的净增益（论文表 II）：Maxwell-Boltzmann PS 通信增益 +0.98 dB、PAPR 增益 -1.26 dB，净 -0.28 dB；ATSC 3.0 64-NUC +0.40 / -0.26，净 +0.14 dB；优化 PS +0.49 / -0.46，净 +0.03 dB；优化联合方案 +0.79 / -0.69，净 +0.10 dB；优化 GS +0.28 / +0.18，净 +0.46 dB。
- GS 是唯一在带来通信增益的同时使 PAPR 低于均匀基准的方案。作者指出它无需分布匹配器（因而无速率损失），只需与星座匹配的软解映射器，且在 16-QAM 与 256-QAM 下同样降低 PAPR。
- 作者说明的局限：仅 AWGN 信道；无真实功放模型；衰落信道与功放验证列为未来工作。如上所述，对符合标准的 PUSCH 处理做了修改。

## Why it matters / what's new (EN)

The paper's contribution, as the authors frame it, is to treat the PAPR cost of constellation shaping as part of the objective for the NR uplink rather than characterizing it after the fact for fixed constellations (as in prior work they cite). The KB already holds 6G uplink waveform and low-PAPR DFT-s-OFDM work (for example 2026-11-04_arxiv-class-low-papr-rank-2-dft-s-ofdm-6g-uplink); this entry adds a modulation-side view on the same uplink waveform. Evidence is simulation over AWGN with a surrogate PAPR metric, and the shaped schemes require changes to NR bit processing.

## Why it matters / what's new (ZH)

按作者的表述，论文的贡献是把星座整形的 PAPR 代价纳入 NR 上行的设计目标，而非像其引用的已有工作那样仅对固定星座事后表征。KB 已有 6G 上行波形与低 PAPR DFT-s-OFDM 的工作（如 2026-11-04_arxiv-class-low-papr-rank-2-dft-s-ofdm-6g-uplink）；本条目从调制侧补充同一上行波形的视角。证据来自 AWGN 仿真和 PAPR 代理指标，且整形方案需要改动 NR 比特处理流程。

## Images

None.
