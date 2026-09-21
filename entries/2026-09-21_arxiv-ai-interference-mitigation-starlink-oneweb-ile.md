---
id: 2026-09-21_arxiv-ai-interference-mitigation-starlink-oneweb-ile
date_published: 2026-09-14
date_found: 2026-09-21
technology: satellite
type: academic-paper
title_en: "AI-based Interference Mitigation for Power-domain Spectrum Sharing among LEO Satellites"
title_zh: "面向 LEO 卫星功率域频谱共享的基于 AI 的干扰抑制方法"
url: "https://arxiv.org/abs/2609.15594"
source_quality: full
topics: [PD-NOMA, in-line-events, Starlink, OneWeb, power-control, SIC, Ku-band]
topic_primary: leo-constellations
topics_secondary: [ngso-regulation]
novelty_score: 3
---

## Summary (EN)

Zhang, Evans, and Xiao (University of Surrey) submitted this paper on 2026-09-14. It addresses co-channel interference between different LEO broadband operators sharing the Ku-band downlink: when two operators' satellites reuse the same frequency, their co-frequency beams normally stay spatially separated, but during In-Line-Events (ILEs) the beams become spatially close and fall within a user terminal's main antenna lobe, causing interference. The paper frames this as increasingly urgent given cited figures of roughly 25,000 LEO satellites on orbit in 2025, rising to an expected 60,000 by 2030.

The proposed approach applies power-domain non-orthogonal multiple access (PD-NOMA) across operators rather than within a single operator's system: one operator's satellite raises its transmit power to create a sufficient received-power gap between the desired and interfering signals at the terminal, enabling either conventional successive interference cancellation (SIC) or an AI-assisted network (IM-Net) to separate the two waveforms. IM-Net is a cascaded architecture combining an eight-layer Transformer-based initial separation network (P-Net) with three processing blocks, each containing two waveform-specific demodulation-and-modulation networks (DAM-Nets, one tailored to OFDM and one to SC-TDM waveform structures) plus a P-Net, that jointly demodulate the mixed signal rather than processing each waveform independently as SIC does. The evaluation models -- rather than captures -- Starlink's published SC-TDM downlink waveform structure and OneWeb's published OFDM downlink waveform structure, drawing on prior signal-structure characterization studies of both systems.

Using OneWeb's publicly documented downlink SNR range of 4-7 dB and increasing the interfering satellite's transmit power by 9 dB to create a workable power gap, the paper reports that the symbol-error-rate of the desired signal decreases after either SIC or the AI network is applied as the interference-link SNR is swept from 16 dB down to 9 dB, with the AI network outperforming SIC across all tested conditions and achieving complete recovery of the desired waveform once the interference-link SNR exceeds 14 dB. For the resulting SINR at the terminal receiving the boosted-power link, SIC only exceeds the no-power-change baseline once interference SNR is above 13 dB, while the AI network exceeds that baseline starting at 11-12 dB. At the terminal on the other link (interference SNR 5 to -1 dB, desired SNR 12-14 dB), the AI network is described as worth applying once interference SNR exceeds 0 dB, though that terminal's spectral efficiency remains capped at 2 bits/s/Hz by its QPSK modulation regardless of interference mitigation.

## Summary (ZH)

Zhang、Evans 与 Xiao（萨里大学）于 2026 年 9 月 14 日提交本文，研究共享 Ku 波段下行链路的不同 LEO 宽带运营商之间的同频干扰问题：当两家运营商的卫星复用同一频率时，其同频波束通常在空间上保持分离，但在"同线事件"（In-Line-Event, ILE）期间，两波束会在空间上相互靠近并落入用户终端天线主瓣内，从而产生干扰。论文援引数据指出这一问题日益紧迫：2025 年在轨 LEO 卫星约 25,000 颗，预计到 2030 年将增至 60,000 颗。

论文提出的方法是跨运营商（而非单一运营商系统内部）应用功率域非正交多址（PD-NOMA）：一方运营商的卫星提高发射功率，在终端处的期望信号与干扰信号之间制造出足够的接收功率差，从而使传统串行干扰消除（SIC）或一种 AI 辅助网络（IM-Net）能够分离两路波形。IM-Net 是一种级联架构，由一个基于八层 Transformer 的初始分离网络（P-Net）与三个处理模块组成，每个模块包含两类针对特定波形的解调-调制网络（DAM-Net，分别针对 OFDM 与 SC-TDM 两种波形结构）以及一个 P-Net，对混合信号进行联合解调，而非像 SIC 那样对各波形独立处理。评估中所用的信号并非实际捕获信号，而是依据先前对 Starlink 与 OneWeb 下行信号结构的公开表征研究，分别建模了 Starlink 已公开的 SC-TDM 下行波形结构与 OneWeb 已公开的 OFDM 下行波形结构。

论文采用 OneWeb 公开文件中记载的 4–7 dB 下行 SNR 范围，并将造成干扰一方卫星的发射功率提高 9 dB 以形成可用的功率差，结果显示：当干扰链路 SNR 从 16 dB 降至 9 dB 时，无论采用 SIC 还是 AI 网络，期望信号的误符号率均有所下降，且 AI 网络在所有测试条件下均优于 SIC，并在干扰链路 SNR 超过 14 dB 时可实现期望波形的完全恢复。对于接收功率被提升一方链路的终端 SINR，SIC 仅在干扰 SNR 超过 13 dB 时才能超过未改变功率的基线，而 AI 网络在干扰 SNR 达到 11–12 dB 时即可超过该基线。在另一条链路的终端处（干扰 SNR 为 5 至 −1 dB，期望信号 SNR 为 12–14 dB），论文指出当干扰 SNR 超过 0 dB 时值得采用 AI 网络，尽管无论是否采取干扰抑制，该终端因采用 QPSK 调制，其频谱效率始终被限制在 2 bit/s/Hz。

## Key technical points (EN)

- **Interference scenario**: co-frequency beams from different LEO operators sharing Ku-band downlink; interference arises chiefly during In-Line-Events, when beams from different operators become spatially close (illustrated with a frequency-reuse-factor-3, FR3, beam layout); the paper notes that for terminals with omnidirectional antennas interference occurs regardless of ILE.
- **Mechanism**: cross-operator PD-NOMA — the interfering satellite raises transmit power by a fixed amount (9 dB in the experiments) to create a received-power gap, enabling either SIC or the paper's AI network (IM-Net) at the terminal.
- **IM-Net architecture**: 8-layer Transformer initial P-Net (time-domain waveform separation) + 3 cascaded processing blocks, each with a 4-layer-Transformer OFDM-oriented DAM-Net(A) (resampling, FFT, Transformer symbol detection) and an SC-TDM-oriented DAM-Net(B) (Transformer symbol detection + slicing) plus a P-Net, trained on interference-free waveforms as labels.
- **Evaluated systems**: waveform structures modeled on Starlink's published SC-TDM Ku-band downlink and OneWeb's (written "EutelsatOneweb" in the paper) published OFDM Ku-band downlink (drawing on Humphreys et al. 2023 and Komodromos & Humphreys 2026 signal-structure studies), not live captured signals; OneWeb's documented SNR range is 4-7 dB (QPSK downlink).
- **Results**: AI network beats SIC across all tested interference-SNR conditions (16 dB down to 9 dB); complete desired-waveform recovery above 14 dB interference SNR; AI exceeds the no-power-change SINR baseline from 11-12 dB interference SNR (vs. 13 dB for SIC); second terminal's spectral efficiency capped at 2 bits/s/Hz by QPSK regardless of mitigation scheme used.
- **Operational note**: the paper states real-time cooperation between operators is not required, but sharing of beam coverage plans is needed for the power-boost coordination to work.

## Key technical points (ZH)

- **干扰场景**：不同 LEO 运营商共享 Ku 波段下行链路的同频波束；干扰主要产生于"同线事件"（ILE）期间，不同运营商波束在空间上相互靠近（以频率复用因子为 3（FR3）的波束布局示意）；论文同时指出，对于采用全向天线的终端，无论是否处于 ILE 都会产生干扰。
- **机制**：跨运营商 PD-NOMA——造成干扰一方的卫星将发射功率提高固定幅度（实验中为 9 dB）以制造接收功率差，从而使终端可采用 SIC 或论文提出的 AI 网络（IM-Net）。
- **IM-Net 架构**：8 层 Transformer 初始 P-Net（时域波形分离）+ 3 个级联处理模块，每模块包含面向 OFDM 的 4 层 Transformer DAM-Net(A)（重采样、FFT、Transformer 符号检测）与面向 SC-TDM 的 DAM-Net(B)（Transformer 符号检测+切片），以及一个 P-Net，以无干扰波形作为训练标签。
- **评估对象**：所建模的波形结构基于 Starlink 已公开的 SC-TDM Ku 波段下行波形与 OneWeb（论文中写作"EutelsatOneweb"）已公开的 OFDM Ku 波段下行波形（参考 Humphreys 等 2023 年及 Komodromos 与 Humphreys 2026 年的信号结构研究），而非实际捕获信号；OneWeb 文件记载的 SNR 范围为 4–7 dB（QPSK 下行）。
- **结果**：在所有测试的干扰 SNR 条件下（16 dB 降至 9 dB），AI 网络均优于 SIC；干扰 SNR 超过 14 dB 时可实现期望波形的完全恢复；AI 网络在干扰 SNR 达到 11–12 dB 时即可超过未改变功率的 SINR 基线（SIC 需达到 13 dB）；第二个终端因采用 QPSK 调制，无论采用何种抑制方案，其频谱效率均被限制在 2 bit/s/Hz。
- **运营说明**：论文指出该方案不需要运营商间实时协作，但需要共享波束覆盖计划以配合功率提升的协调。

## Why it matters / what's new (EN)

The KB's prior Starlink/OneWeb interference entry (`2026-06-15_arxiv-agon-satellite-interference-detection`) covers detecting NGSO-NGSO interference; this is the first entry on mitigating inter-operator co-channel interference in a shared Ku-band downlink, framed as a spectrum-sharing rather than a single-operator capacity problem. The paper's own contribution is applying PD-NOMA across rather than within operators, and showing that a jointly-trained AI receiver can achieve a given interference-mitigation target at a smaller required power gap than conventional SIC, evaluated against waveform structures modeled on both systems' publicly documented signal designs.

## Why it matters / what's new (ZH)

知识库此前已有涉及 Starlink/OneWeb 干扰的条目（`2026-06-15_arxiv-agon-satellite-interference-detection`），其内容是 NGSO 与 NGSO 之间干扰的检测；本条目则是首条讨论在共享 Ku 波段下行链路中抑制运营商间同频干扰的条目，将其定位为频谱共享问题而非单一运营商的容量问题。本文自身的贡献在于将 PD-NOMA 应用于运营商之间而非运营商内部，并表明联合训练的 AI 接收机可以在比传统 SIC 更小的所需功率差下达到给定的干扰抑制目标，评估所用的波形结构基于两个系统公开记载的信号设计建模而成。

## Images

None.
