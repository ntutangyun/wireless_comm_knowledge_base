---
id: 2026-11-27_arxiv-interference-free-in-symbol-pilots-high-mobility-dft-s-ofdm-uplink
date_published: 2026-11-24
date_found: 2026-11-27
type: academic-paper
technology: cellular
title_en: "Interference-Free In-Symbol Pilots for High-Mobility DFT-s-OFDM Uplink"
title_zh: "面向高速移动 DFT-s-OFDM 上行的无干扰符号内导频"
url: "https://arxiv.org/abs/2611.32442"
source_quality: full
topics: [5G-NR, DFT-s-OFDM, DMRS, pilot-design, channel-estimation, Zak-transform, PAPR, high-mobility]
topic_primary: 5g-nr
topics_secondary: [6g-vision]
novelty_score: 4
---

## Summary (EN)

Ayoub Ammar Boudjelal and Hüseyin Arslan (Istanbul Medipol University) address channel estimation for the 5G NR uplink when transform precoding (DFT-s-OFDM) is used. In NR the demodulation reference signal (DMRS) occupies whole OFDM symbols that carry no data, and more DMRS symbols are configured as the channel varies faster, which lowers spectral efficiency. The authors argue that a pilot cannot normally share a symbol with data in DFT-s-OFDM without raising the PAPR, losing data, or suffering data interference, and they seek pilots inside the data symbols that are free of data interference, cost about as many data samples as there are pilots, keep the NR DFT sizes and need no side information.

The construction uses the Zak transform (the polyphase decomposition of a sequence followed by a DFT across the polyphase components). Leaving one stride class of equally spaced pre-DFT samples empty frees one column of the Zak grid of the DFT output, whose rows are subcarrier combs. The data values on the N_p pilot subcarriers are relocated into that column by adding a constant over N_p combs; this preserves the energy, and the receiver undoes it linearly with comb sums, without decisions or side information. Since pilots raise the PAPR, only a few are used per symbol and their positions hop from symbol to symbol, so a two-dimensional (slot-wide) LMMSE estimator can resolve long delay spreads at high Doppler.

The evaluation is link-level simulation: 16 resource blocks (192 subcarriers), 30 kHz subcarrier spacing, 3.5 GHz carrier, 3GPP TDL-B (100 ns) and TDL-C (300 ns) profiles, speeds of 3 to 500 km/h, one receive antenna and uncoded 16-QAM, compared with NR DMRS type 1 (1 to 4 symbols), a pre-DFT reference signal and puncturing. The paper's conclusion lists coded, multi-antenna and multi-user evaluations, and estimation under mismatched channel statistics, as not yet studied.

## Summary (ZH)

Ayoub Ammar Boudjelal 与 Hüseyin Arslan（伊斯坦布尔梅迪波尔大学）研究 5G NR 上行在使用变换预编码（DFT-s-OFDM）时的信道估计。NR 中的解调参考信号（DMRS）占据不承载数据的整个 OFDM 符号，信道变化越快配置的 DMRS 符号越多，从而降低频谱效率。作者指出，在 DFT-s-OFDM 中导频通常无法与数据共享同一符号，否则会抬高 PAPR、损失数据或受到数据干扰，因此寻求这样的符号内导频：不受数据干扰、占用的数据样点数与导频数相当、保持 NR 的 DFT 点数且无需边信息。

构造方法使用 Zak 变换（序列的多相分解后对多相分量做 DFT）。将等间隔的一类 DFT 前样点置空，即可空出 DFT 输出 Zak 网格的一列，网格的行为子载波梳。N_p 个导频子载波上的数据值通过在 N_p 个梳上加一个常数而被搬移到该列；该操作保持能量，接收端用梳求和以线性方式还原，无需判决或边信息。由于导频会抬高 PAPR，每个符号仅用少量导频，且位置逐符号跳变，使整个时隙范围的二维 LMMSE 估计器能在高多普勒下分辨较长的时延扩展。

评估为链路级仿真：16 个资源块（192 个子载波）、30 kHz 子载波间隔、3.5 GHz 载频、3GPP TDL-B（100 ns）与 TDL-C（300 ns）信道、速度 3 至 500 km/h、单接收天线、未编码 16-QAM，对比 NR DMRS type 1（1 至 4 个符号）、DFT 前参考信号与打孔方案。论文结论指出，编码、多天线、多用户评估以及信道统计失配下的估计尚待研究。

## Key technical points (EN)

- Relocation: with P pre-DFT samples left empty per symbol (P ≥ N_p + 1), N_p pilot subcarriers are protected; (N_p, P) = (2,3), (4,6), (8,12) are simulated, leaving 189, 186 and 180 data symbols per 192-subcarrier DFT-s-OFDM symbol. The transmitter needs fewer additions than the DFT size (128 per symbol in the paper's overhead table).
- Slot overhead (Table II): data fraction 98.4%, 96.9% and 93.8% for N_p = 2, 4, 8, against 92.9% (1 DMRS symbol) down to 71.4% (4 DMRS symbols) for NR.
- PAPR at the 10^-3 level rises by 0.5, 0.9 and 1.0 dB (QPSK) and 0.2, 0.4 and 0.5 dB (16-QAM) for N_p = 2, 4, 8 relative to plain DFT-s-OFDM; plain DFT-s-OFDM is 3.4 dB (QPSK) and 2.5 dB (16-QAM) below OFDM. An optional peak-cancellation signal on the unused cells can bring the PAPR back to or below the plain DFT-s-OFDM level, at the cost of more data samples.
- Hopping is described as essential: without it, four pilots per symbol saturate at NMSE 9×10^-2 on TDL-C300 and 2×10^-2 on TDL-B100.
- At 500 km/h and 20 dB Es/N0 the proposed slots reach 3.33 (TDL-B100) and 3.25 (TDL-C300) bit/s/Hz effective spectral efficiency against 2.60 and 2.59 for the best NR configuration, stated as 28% and 25% more. At 3 km/h, N_p = 4 exceeds one DMRS symbol by 0.09 to 0.13 bit/s/Hz.
- Versus puncturing, the proposed slots are up to 0.07 bit/s/Hz lower at SNR ≤ 10 dB but higher from 15 dB on (at 35 dB: 3.72 and 3.66 against 3.61 and 3.46 bit/s/Hz for N_p = 4 and 8). The pre-DFT reference signal reaches 2.18 to 2.50 (TDL-B100) and 1.82 to 2.04 (TDL-C300) bit/s/Hz.

## Key technical points (ZH)

- 搬移机制：每个符号置空 P 个 DFT 前样点（P ≥ N_p + 1），保护 N_p 个导频子载波；仿真 (N_p, P) = (2,3)、(4,6)、(8,12)，在 192 子载波的 DFT-s-OFDM 符号中分别剩余 189、186、180 个数据符号。发射端所需加法次数少于 DFT 点数（论文开销表中为每符号 128 次）。
- 时隙开销（表 II）：N_p = 2、4、8 时数据占比为 98.4%、96.9%、93.8%，而 NR 为 92.9%（1 个 DMRS 符号）至 71.4%（4 个 DMRS 符号）。
- 在 10^-3 水平上，相对普通 DFT-s-OFDM，N_p = 2、4、8 时 PAPR 对 QPSK 增加 0.5、0.9、1.0 dB，对 16-QAM 增加 0.2、0.4、0.5 dB；普通 DFT-s-OFDM 比 OFDM 低 3.4 dB（QPSK）与 2.5 dB（16-QAM）。在未使用的单元上叠加可选的削峰信号，可将 PAPR 拉回或降至普通 DFT-s-OFDM 以下，代价是多占用数据样点。
- 论文称导频跳变至关重要：不跳变时，每符号四个导频在 TDL-C300 上 NMSE 饱和于 9×10^-2，在 TDL-B100 上为 2×10^-2。
- 在 500 km/h、Es/N0 = 20 dB 下，所提时隙的有效频谱效率在 TDL-B100 与 TDL-C300 上分别达 3.33 与 3.25 bit/s/Hz，最佳 NR 配置为 2.60 与 2.59，论文表述为多 28% 与 25%。在 3 km/h 时，N_p = 4 比 1 个 DMRS 符号高 0.09 至 0.13 bit/s/Hz。
- 与打孔相比，所提方案在 SNR ≤ 10 dB 时最多低 0.07 bit/s/Hz，15 dB 起更高（35 dB 时 N_p = 4 与 8 分别为 3.72 与 3.66，打孔为 3.61 与 3.46 bit/s/Hz）。DFT 前参考信号在 TDL-B100 上为 2.18 至 2.50，在 TDL-C300 上为 1.82 至 2.04 bit/s/Hz。

## Why it matters / what's new (EN)

The KB's 5G NR entries so far cover uplink constellation shaping and LDPC decoding, but none addresses reference-signal design for the DFT-s-OFDM uplink under high mobility (see 2026-11-26_arxiv-net-gain-constellation-shaping-5g-nr-dft-s-ofdm-uplink for the PAPR-oriented side of the same waveform). This paper keeps the NR transmitter chain and DFT sizes and trades DMRS symbols for in-symbol pilots. Its evidence is simulation only (uncoded 16-QAM, single antenna, channel statistics known to the estimator), and it is not a 3GPP proposal.

## Why it matters / what's new (ZH)

KB 此前的 5G NR 条目涵盖上行星座整形与 LDPC 译码，但没有涉及高速移动下 DFT-s-OFDM 上行的参考信号设计（同一波形面向 PAPR 的一侧见 2026-11-26_arxiv-net-gain-constellation-shaping-5g-nr-dft-s-ofdm-uplink）。该论文保持 NR 发射链路与 DFT 点数，用符号内导频替代部分 DMRS 符号。其证据仅来自仿真（未编码 16-QAM、单天线、估计器已知信道统计量），也并非 3GPP 提案。

## Images

None.
