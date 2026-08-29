---
id: 2026-08-29_arxiv-rfvm-wideband-phase-shifter-satcom
date_published: 2026-08-24
date_found: 2026-08-29
type: academic-paper
technology: satellite
title_en: "A quadrature-filter-free RF vector modulator phase shifter for S-to-Ku-band SATCOM phased arrays (UND / FAMU-FSU / UMass Lowell) — a 5-tap transversal FIR network gives full 360-degree phase control with 1.18 dB magnitude and 3.9-degree phase deviation over a 500 MHz instantaneous bandwidth"
title_zh: "面向 S 至 Ku 频段 SATCOM 相控阵、免正交全通滤波网络的射频矢量调制型移相器（北达科他大学 / FAMU-FSU / 麻省大学洛威尔）——5 抽头横向 FIR 网络实现全 360 度连续移相，500 MHz 瞬时带宽内幅度偏差 1.18 dB、相位偏差 3.9 度"
url: "https://arxiv.org/abs/2608.23376"
source_quality: full
topics: [phased-array, beamforming, phase-shifter, vector-modulator, SATCOM, FR3, wideband, user-terminal, RF-front-end, beam-squint]
topic_primary: leo-constellations
topics_secondary: [sat-direct-device]
novelty_score: 2
---

## Summary (EN)
Zhang (University of North Dakota), Yan, Muhammad, Naseem, Zolfaghary Pour, Liu, Yan, Niazi and Chen (FAMU-FSU College of Engineering) and Tang (UMass Lowell) present a reconfigurable **RF vector modulator (RFVM) phase shifter** for wideband SATCOM beamforming arrays, covering S-band through Ku-band (analysis performed around a 20 GHz effective centre with a 2-18 GHz operating span). The problem they target is a specific consequence of the NGSO build-out: user terminals and gateways for Starlink/Kuiper/OneWeb/Iridium-class systems must now cover S/C/X/Ku uplink and downlink allocations (the paper's Fig. 1 lists 1.6-1.63, 3.7-4.2, 7.25-7.75 and 11.7-12.2 GHz receive; 2.48-2.5, 5.92-6.42, 7.9-8.4 and 14-14.5 GHz transmit) plus the emerging 6G FR3 band at 7.125-24.25 GHz, while conventional phased arrays are optimized for a single band.

Among phase-shifter families, true-time-delay modules avoid beam squint but pay in insertion loss, discrete delay resolution and calibration complexity, while I/Q vector modulators offer continuous phase control but depend on a **quadrature all-pass filter (QAF) network** whose 90-degree accuracy — and therefore the phase-shifter's accuracy — degrades over wide bandwidth. The paper's contribution is to synthesize the same four-quadrant vector modulation *without* a QAF network. Starting from the target transfer function, it shows the branch-gain envelope is the Fourier projection of the desired magnitude response over the band, which naturally yields a **transversal FIR topology**: the RF input is split into 2N+1 weighted, delayed branches, each with its own gain weighting (VGA) and delay, and recombined at the output. Branch gains follow an odd-harmonic law (|g_n| = 1, 1/3, 1/5, ... for the 5-tap case), and two control factors — a signed ratio alpha and a polarity selector gamma — select among four coefficient modes that map onto the four phase quadrants (Q1 0 to +90, Q2 +90 to +180, Q3 -180 to -90, Q4 -90 to 0 degrees), routed through a dual-route (Route 1 / Route 2) reconfigurable propagation network with SPDT switches.

The analysis quantifies the classic Gibbs trade-off: with more tap pairs (N = 2, 4, 6) the synthesized passband approaches the ideal square response, shrinking in-band magnitude ripple delta_mag and phase deviation delta_ph and widening the effective bandwidth. For the 5-tap (N = 2) design at f0 = 20 GHz, sweeping alpha over 0.1-5.0 shifts phase by up to 86 degrees within a quadrant; over the full effective bandwidth (~0.8 x omega_0) the worst-case deviations are 3 dB in magnitude and 9.8 degrees in phase, but constrained to the **500 MHz instantaneous bandwidth typical of SATCOM channels** they fall to **1.18 dB and 3.9 degrees**. Full 360-degree continuous coverage is demonstrated across 2-18 GHz by quadrant switching. The work is analysis and circuit-topology synthesis only — the conclusion states that fabrication, integration into a wideband beamforming transceiver and over-the-air system-level measurement are future work.

## Summary (ZH)
Zhang（北达科他大学）、Yan、Muhammad、Naseem、Zolfaghary Pour、Liu、Yan、Niazi 与 Chen（FAMU-FSU 工程学院）以及 Tang（麻省大学洛威尔分校）提出一种面向宽带 SATCOM 波束成形阵列的可重构**射频矢量调制器（RFVM）移相器**，覆盖 S 至 Ku 频段（分析以 20 GHz 有效中心频率、2-18 GHz 工作跨度展开）。他们针对的问题正是 NGSO 大规模部署带来的直接后果：面向 Starlink/Kuiper/OneWeb/铱星一类系统的用户终端与信关站，如今必须同时覆盖 S/C/X/Ku 的上下行分配（论文图 1 列出接收 1.6-1.63、3.7-4.2、7.25-7.75、11.7-12.2 GHz；发射 2.48-2.5、5.92-6.42、7.9-8.4、14-14.5 GHz）以及 7.125-24.25 GHz 的 6G FR3 新频段，而传统相控阵通常只针对单一频段优化。

在各类移相器中，真延时（TTD）模块可避免波束偏斜，但需付出插损、离散延时分辨率与标定复杂度的代价；I/Q 矢量调制器可实现连续移相，却依赖**正交全通滤波（QAF）网络**，其 90 度精度——进而移相精度——在宽带下劣化。本文的贡献是在*不使用* QAF 网络的前提下合成同样的四象限矢量调制。作者从目标传递函数出发，证明支路增益包络即为期望幅度响应在工作频带上的傅里叶投影，由此自然导出**横向 FIR 拓扑**：射频输入被分为 2N+1 条加权延时支路，每条支路具备独立增益加权（VGA）与延时，最后在输出端重新合成。支路增益遵循奇次谐波律（5 抽头情形下 |g_n| = 1、1/3、1/5），并由两个控制因子——带符号比值 alpha 与极性选择 gamma——在四种系数模式间切换，对应四个相位象限（Q1 0 至 +90、Q2 +90 至 +180、Q3 -180 至 -90、Q4 -90 至 0 度），经由含 SPDT 开关的双路径（Route 1 / Route 2）可重构传播网络实现。

分析量化了经典的 Gibbs 折中：抽头对数 N = 2、4、6 增加时，合成通带趋近理想方波响应，带内幅度纹波 delta_mag 与相位偏差 delta_ph 减小、有效带宽变宽。对 f0 = 20 GHz 的 5 抽头（N = 2）设计，alpha 在 0.1-5.0 范围扫描可在象限内移相至多 86 度；在整个有效带宽（约 0.8 x omega_0）内最坏偏差为幅度 3 dB、相位 9.8 度，但若限定在 **SATCOM 典型的 500 MHz 瞬时带宽**内，则分别降至 **1.18 dB 与 3.9 度**。通过象限切换，可在 2-18 GHz 上实现全 360 度连续移相。该工作仅为分析与电路拓扑综合——结论明确指出流片、集成进宽带波束成形收发链路以及空口系统级测试均为后续工作。

## Key technical points (EN)
- **Motivation:** NGSO user terminals/gateways must span S/C/X/Ku up- and downlink allocations plus 6G FR3 (7.125-24.25 GHz); conventional single-band phased arrays cover only a slice of the SATCOM spectrum.
- **Prior-art gap:** switched-/loaded-line shifters give coarse resolution and narrow bandwidth; TTD avoids beam squint but costs insertion loss, discrete resolution and calibration; I/Q vector modulators are continuous and reconfigurable but hinge on a quadrature all-pass filter (QAF) whose 90-degree accuracy degrades over wide bandwidth.
- **Core idea:** synthesize four-quadrant vector modulation with no QAF network — the branch-gain envelope is derived as the Fourier projection of the target magnitude response, which yields a transversal FIR (multi-tap delay-and-weight) topology.
- **Topology:** dual-route reconfigurable network (Route 1 P_x1->P_x2, Route 2 P_y1->P_y2) through a shared set of 2N+1 weighted delay branches; centre branch (g_0, tau_0) is the reference, upper/lower branches carry symmetric +/-tau_n/2 delays split around each VGA; SPDT switches select the route.
- **Coefficient law:** |g_n| = 1/(2|n|-1) odd-harmonic envelope (1, 1/3, 1/5 for the 5-tap case); signed ratio alpha and polarity gamma = +/-1 select the four coefficient modes mapping to Q1-Q4.
- **Tap-count trade-off:** larger N (2 -> 4 -> 6) approaches an ideal square passband, reducing Gibbs ringing (delta_mag) and phase deviation (delta_ph) and widening effective bandwidth Delta_omega_eff.
- **Headline numbers (5-tap, f0 = 20 GHz, 2-18 GHz span):** up to 86 degrees intra-quadrant shift by sweeping alpha 0.1-5.0; worst case over ~0.8 x omega_0 is 3 dB magnitude / 9.8 degrees phase; within a 500 MHz instantaneous bandwidth (typical SATCOM channel) 1.18 dB / 3.9 degrees; full 360-degree coverage via quadrant switching.
- **Maturity:** analysis and topology synthesis only — no fabricated prototype, no S-parameter or OTA measurements, no insertion-loss/noise-figure/area/power budget; the paper names fabrication and system-level OTA evaluation as future work.

## Key technical points (ZH)
- **动机：** NGSO 用户终端/信关站需覆盖 S/C/X/Ku 上下行分配及 6G FR3（7.125-24.25 GHz）；传统单频段相控阵只覆盖 SATCOM 频谱的一小段。
- **现有技术缺口：** 开关线/加载线移相器分辨率粗、带宽窄；真延时可避免波束偏斜但带来插损、离散分辨率与标定代价；I/Q 矢量调制器连续可重构，却依赖正交全通滤波（QAF）网络，其 90 度精度在宽带下劣化。
- **核心思路：** 在不使用 QAF 网络的前提下合成四象限矢量调制——将支路增益包络推导为目标幅度响应的傅里叶投影，由此得到横向 FIR（多抽头延时加权）拓扑。
- **拓扑：** 双路径可重构网络（Route 1 由 P_x1 至 P_x2、Route 2 由 P_y1 至 P_y2）共享同一组 2N+1 条加权延时支路；中心支路（g_0, tau_0）为参考，上/下支路承载围绕各 VGA 对称分布的 +/-tau_n/2 延时；由 SPDT 开关选择路径。
- **系数律：** |g_n| = 1/(2|n|-1) 的奇次谐波包络（5 抽头时为 1、1/3、1/5）；带符号比值 alpha 与极性 gamma = +/-1 选择映射到 Q1-Q4 的四种系数模式。
- **抽头数折中：** N 由 2 增至 4、6 时通带趋近理想方波，Gibbs 振铃（delta_mag）与相位偏差（delta_ph）减小，有效带宽 Delta_omega_eff 变宽。
- **关键数值（5 抽头，f0 = 20 GHz，2-18 GHz 跨度）：** alpha 在 0.1-5.0 扫描时象限内可移相至多 86 度；在约 0.8 x omega_0 的有效带宽内最坏为幅度 3 dB / 相位 9.8 度；限定在 500 MHz 瞬时带宽（SATCOM 典型信道）内为 1.18 dB / 3.9 度；经象限切换实现全 360 度覆盖。
- **成熟度：** 仅为分析与拓扑综合——无流片样机、无 S 参数或空口实测，未给出插损/噪声系数/面积/功耗预算；论文将流片与系统级空口验证列为未来工作。

## Why it matters / what's new (EN)
Every satellite entry in this KB so far sits at or above the waveform layer — PRACH preamble design for NTN Doppler (08-17), the DFT-s-OFDM device-to-satellite uplink receiver (08-19), SSB-based LEO positioning bounds (08-15), beam-hopping schedulers, stochastic-geometry interference models. This is the first entry at the **RF front-end / beamformer-component layer**, and it is a useful reminder of where the practical ceiling on all of those schemes sits: a multi-band NGSO terminal that must hop between S-band D2D-adjacent allocations and Ku-band broadband is limited by whether its phase shifters hold amplitude and phase accuracy across that span, and the standard I/Q vector modulator's accuracy is capped by a quadrature network that was never wideband to begin with. Removing the QAF and re-deriving the vector modulator as a transversal FIR is a clean reframing — phase shifting becomes a filter-synthesis problem with a Fourier-series accuracy/bandwidth knob (tap count) rather than a quadrature-accuracy problem.

The honest caveat is maturity, and it is why novelty is scored 2. This is a topology-synthesis paper: the reported 1.18 dB / 3.9-degree figures come from the analytical model of a 5-tap network at a 500 MHz instantaneous bandwidth, not from a fabricated chip, and the numbers a systems reader would actually need to judge terminal impact — insertion loss per branch, VGA noise and linearity, switch loss, calibration burden across 2-18 GHz, die area and DC power for a large array — are entirely absent, with the authors deferring them to future work. The claim worth tracking is narrower than "wideband beamforming solved": it is that four-quadrant continuous phase control can be synthesized without a quadrature all-pass network, and that the residual in-band error stays small when the instantaneous bandwidth is the ~500 MHz that SATCOM channels actually use, even when the tunable span is 2-18 GHz. Whether that survives silicon is the follow-up to watch.

## Why it matters / what's new (ZH)
迄今本知识库的卫星条目都位于波形层及以上——面向 NTN 高多普勒的 PRACH 前导设计（08-17）、直连卫星上行的 DFT-s-OFDM 接收机（08-19）、基于 SSB 的 LEO 定位界（08-15）、跳波束调度器、随机几何干扰模型等。本条目是第一条落在**射频前端/波束成形器件层**的条目，也恰好提醒我们上述所有方案的现实天花板在哪里：一个既要工作在 S 频段（与 D2D 相邻的分配）又要工作在 Ku 频段宽带业务的多频段 NGSO 终端，其能力受限于移相器能否在如此跨度上保持幅度与相位精度，而标准 I/Q 矢量调制器的精度上限又受制于一个本就不宽带的正交网络。去掉 QAF、把矢量调制器重新推导为横向 FIR，是一次干净的问题重构——移相由此从"正交精度问题"变成带有傅里叶级数精度/带宽调节旋钮（抽头数）的"滤波器综合问题"。

需要如实说明的保留意见在于成熟度，这也是新颖度评 2 的原因。本文属于拓扑综合类工作：所报 1.18 dB / 3.9 度来自 5 抽头网络在 500 MHz 瞬时带宽下的解析模型，而非流片实测；系统读者真正需要用来判断终端影响的数据——每支路插损、VGA 噪声与线性度、开关损耗、2-18 GHz 全跨度的标定负担、大规模阵列的芯片面积与直流功耗——则完全缺失，作者将其推迟到后续工作。值得跟踪的论断因此比"宽带波束成形已解决"要窄得多：即四象限连续移相可以在没有正交全通网络的情况下被合成，且当瞬时带宽取 SATCOM 实际使用的约 500 MHz 时，带内残余误差保持很小——即便可调跨度达到 2-18 GHz。它能否在硅片上成立，是下一步值得关注的事。
