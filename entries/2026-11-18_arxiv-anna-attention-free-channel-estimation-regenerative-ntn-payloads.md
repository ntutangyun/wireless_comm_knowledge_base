---
id: 2026-11-18_arxiv-anna-attention-free-channel-estimation-regenerative-ntn-payloads
date_published: 2026-11-15
date_found: 2026-11-18
type: academic-paper
technology: satellite
title_en: "ANNA: Attention-Free Neural Neighborhood Aggregation for Channel Estimation on Regenerative NTN Payloads"
title_zh: "ANNA：面向再生式 NTN 载荷信道估计的无注意力神经邻域聚合"
url: "https://arxiv.org/abs/2611.20271"
source_quality: full
topics: [NTN, channel-estimation, regenerative-payload, PUSCH, DM-RS, NTN-TDL, Jetson-Orin-NX, TensorRT, TR-38.821]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Camelo Botero, Slamnik-Krijestorac and Marquez-Barja (IDLab, University of Antwerp and imec; imec.icon RAPIDNESS project) target uplink channel estimation on a regenerative LEO satellite payload, where onboard processing has tight latency, power and compute limits. A terrestrial UE sends a SISO 5G NR PUSCH (OFDM with CP, no transform precoding) to a satellite at 600 km; the UE pre-compensates Doppler from ephemeris, leaving residual carrier frequency offset. They propose ANNA, a lightweight estimator built from per-RB pilot projection, convolutional neighborhood aggregation and a shared reconstruction map, and benchmark it on a 10 W Jetson Orin NX. The paper is marked as submitted to IEEE.

## Summary (ZH)

Camelo Botero、Slamnik-Krijestorac 与 Marquez-Barja（安特卫普大学 IDLab 与 imec；imec.icon RAPIDNESS 项目）针对再生式 LEO 卫星载荷上的上行信道估计，该场景的星上处理在时延、功耗与算力上受限。地面 UE 向 600 km 高度的卫星发送 SISO 5G NR PUSCH（带 CP 的 OFDM，无变换预编码）；UE 依据星历做多普勒预补偿，仍残留载波频偏。他们提出轻量估计器 ANNA，由逐 RB 导频投影、卷积邻域聚合与共享重建映射构成，并在 10 W 的 Jetson Orin NX 上做基准测试。论文标注已投稿 IEEE。

## Key technical points (EN)

- Grounding: cites 3GPP TR 38.821 and TR 38.811; NTN-TDL profiles A-D with delay spreads of 5-100 ns; 2 GHz, 51 RBs, 30 kHz subcarrier spacing, normal CP. Residual CFO is modeled as pre-compensation error (up to +/-300 Hz) plus oscillator offset (+/-100 Hz).
- Architecture: the 8 complex DM-RS LS pilot coefficients per RB are packed into a compact input and projected per RB by a width-one convolution; stacked 1D convolutions along the RB axis (reference: kernel width 5, C=32, L=2, receptive field of 9 RBs; no residuals, no attention); a single linear map expands each RB's features to its 12x14 complex patch.
- Data and baselines: two paired waveform-generated datasets from MATLAB 5G and Satellite Communications Toolboxes (UL-NTN-1 with receiver frequency correction on, UL-NTN-2 off); 7,876 train, 1,672 validation and 1,716 test samples; UE elevation 10-89 degrees, 0-120 km/h, SNR 0-20 dB. 28 configurations compared, including 6 ANNA variants, 9 HELENA variants, 9 other learned estimators and 4 classical ones.
- Results (UL-NTN-1): -19.06 dB mean NMSE against -18.91 dB for HELENA, with 81.1% fewer parameters and about 37.9x fewer FLOPs. FP16 TensorRT P99 latency is 0.372 ms (about 2.69x faster than HELENA) and met the adopted 0.5 ms target in all 100 benchmark runs; energy per sample is 1.814 mJ against 3.387 mJ for HELENA. Against the most accurate learned baseline (AttRNet, -20.19 dB, 1.515 ms P99) ANNA is 4.08x faster and uses 80.5% less module energy at a 1.14 dB accuracy penalty.
- Stated limits: link-level NMSE, latency and energy only (BER, BLER and throughput deferred); SISO only; simulated data at a single 600 km altitude with uncoded QPSK; no INT8 quantization yet; ANNA is not the most accurate learned model. The authors say models and datasets will be released as open source.

## Key technical points (ZH)

- 依据：引用 3GPP TR 38.821 与 TR 38.811；NTN-TDL 配置 A-D，时延扩展 5-100 ns；2 GHz、51 个 RB、30 kHz 子载波间隔、常规 CP。残余载波频偏建模为预补偿误差（最高 ±300 Hz）加晶振偏移（±100 Hz）。
- 架构：每个 RB 的 8 个复数 DM-RS LS 导频系数被打包为紧凑输入，由宽度为一的卷积逐 RB 投影；沿 RB 轴堆叠一维卷积（参考配置：核宽 5、C=32、L=2，感受野 9 个 RB；无残差、无注意力）；单个线性映射把每个 RB 的特征展开为其 12x14 的复数块。
- 数据与基线：用 MATLAB 5G 与 Satellite Communications 工具箱生成两个配对波形数据集（UL-NTN-1 接收端频率校正开启，UL-NTN-2 关闭）；训练、验证、测试样本分别为 7,876、1,672、1,716；UE 仰角 10-89 度、速度 0-120 km/h、SNR 0-20 dB。共比较 28 种配置，含 6 个 ANNA 变体、9 个 HELENA 变体、9 个其他学习型估计器及 4 个经典估计器。
- 结果（UL-NTN-1）：平均 NMSE 为 -19.06 dB，HELENA 为 -18.91 dB，参数量少 81.1%，FLOPs 约少 37.9 倍。FP16 TensorRT 的 P99 时延为 0.372 ms（约比 HELENA 快 2.69 倍），在 100 次基准测试中全部满足所设 0.5 ms 目标；每样本能耗 1.814 mJ，HELENA 为 3.387 mJ。相对最精确的学习型基线（AttRNet，-20.19 dB，P99 为 1.515 ms），ANNA 快 4.08 倍、模块能耗少 80.5%，精度损失 1.14 dB。
- 作者说明的局限：仅评估链路级 NMSE、时延与能耗（BER、BLER 与吞吐留待未来）；仅 SISO；仿真数据，单一 600 km 轨道高度，未编码 QPSK；尚未研究 INT8 量化；ANNA 并非精度最高的学习型模型。作者表示将开源模型与数据集。

## Why it matters / what's new (EN)

The stated contributions are the ANNA architecture, paired uplink datasets with receiver frequency correction on/off, and a 28-configuration benchmark with latency and energy measured on a 10 W Jetson Orin NX, following the authors' downlink study in which HELENA exceeded the adopted 0.5 ms P99 budget on that board. The data are simulated for one altitude and uncoded QPSK, and the accuracy comparison is NMSE-only, so the practical benefit at the BER or throughput level remains unmeasured.

## Why it matters / what's new (ZH)

论文所述贡献为 ANNA 架构、接收端频率校正开/关的配对上行数据集，以及在 10 W Jetson Orin NX 上实测时延与能耗的 28 种配置基准；此前作者的下行研究中 HELENA 在该平台上超出所设 0.5 ms P99 预算。数据为单一轨道高度、未编码 QPSK 的仿真，精度比较仅限 NMSE，因此在 BER 或吞吐层面的实际收益尚未测量。

## Images

None.
