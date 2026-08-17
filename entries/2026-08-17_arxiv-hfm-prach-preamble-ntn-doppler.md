---
id: 2026-08-17_arxiv-hfm-prach-preamble-ntn-doppler
date_published: 2026-08-14
date_found: 2026-08-17
type: academic-paper
technology: satellite
title_en: "An HFM-Inspired Random Access Preamble Design for NTN under High Doppler — hyperbolic-FM PRACH that decouples delay from Doppler and holds where Zadoff-Chu and LFM collapse"
title_zh: "面向高多普勒 NTN 的 HFM 启发式随机接入前导设计——将时延与多普勒解耦、在 Zadoff-Chu 与 LFM 失效处仍可用的双曲调频 PRACH"
url: "https://arxiv.org/abs/2608.14168"
source_quality: full
topics: [NTN, PRACH, random-access, preamble, high-Doppler, HFM, Zadoff-Chu, LFM, ambiguity-function, LEO, synchronization]
topic_primary: sat-direct-device
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)
Bibi, Rafique, Naeem and Arslan (submitted 14 Aug 2026, eess.SP) tackle the physical random access channel (PRACH) for LEO non-terrestrial networks, where orbital velocity and long slant range produce Doppler shifts of several kilohertz plus large delay uncertainty — far beyond terrestrial conditions. The 3GPP-standard preamble families both fail here. **Zadoff-Chu (ZC)** sequences suffer delay-Doppler coupling: under residual Doppler the correlation peak displaces and the self-ambiguity function grows multiple comparable peaks spaced N/γ samples apart, creating timing ambiguity and unreliable preamble identification that worsens with Doppler. **Linear frequency modulation (LFM)** has a deterministic timing bias — its ambiguity ridge is affine, so the delay estimate becomes d̂ = d₀ + ν₀/β, biased in proportion to the Doppler offset.

The paper proposes a **hyperbolic frequency modulation (HFM)-inspired preamble** that replaces the frequency-domain ZC sequence with a logarithmic phase: S[k] = exp(j(2π/β_HFM)·ln(1 + β_HFM·k/N_SEQ)), where β_HFM = (f_L − f_H)/(f_L·f_H·T_SEQ) ties the chirp rate to the allocated bandwidth. The logarithmic phase cannot be written as a linear ramp 2π(αd+γν)n, so it admits neither the LFM affine ridge nor the ZC periodic lattice — Doppler no longer deterministically shifts the delay estimate or spawns spurious delay maxima (their Theorem 1). For multi-user access, a **scaling-factor codebook** {c_m} spaces preambles so the accumulated inter-preamble phase difference exceeds 2π over the preamble duration (minimum spacing Δc = β_HFM / ln(1 + β_HFM·f_L·T_SEQ)), preventing coherent cross-correlation buildup; Proposition 3 guarantees the cross-ambiguity stays below the auto-peak across the whole delay-Doppler plane. Detection uses a conventional matched filter, so the gains are attributable to the preamble design, not receiver cleverness.

Simulations (600 km LEO, 7.5 km/s, 30 GHz Ka-band, PRACH Format A3, 834-sample preamble, Rician K = 10.224 dB, P_FA = 10⁻³, Doppler 40–500 kHz) show: at f_D = 70 kHz, HFM reaches detection probability ~0.9 about 2 dB earlier in SNR than frequency-domain-superposed LFM; at f_D = 460 kHz, FDS-LFM collapses (P_D → 0) while HFM still holds P_D ≈ 0.9 at SNR ≈ −2 dB. In the multi-user case at 100–460 kHz Doppler, ZC fails entirely and HFM shows a 20–33 dB SNR advantage over FDS-LFM, sub-sample timing RMSE where ZC/LFM exceed one sample, and far fewer Doppler hypotheses needed to search the grid.

## Summary (ZH)
Bibi、Rafique、Naeem 与 Arslan（2026 年 8 月 14 日提交，eess.SP）研究低轨非地面网络（NTN）的物理随机接入信道（PRACH）：轨道速度与长斜距带来数千赫兹的多普勒频移及很大的时延不确定性，远超地面条件。两类 3GPP 标准前导在此均失效。**Zadoff-Chu（ZC）** 序列存在时延–多普勒耦合：残余多普勒下相关峰发生位移，自模糊函数出现多个间隔 N/γ 样本、幅度相当的峰，造成随多普勒加剧的定时模糊与前导识别不可靠。**线性调频（LFM）** 存在确定性定时偏差——其模糊脊为仿射,时延估计变为 d̂ = d₀ + ν₀/β，偏差正比于多普勒偏移。

论文提出一种 **HFM（双曲调频）启发式前导**，用对数相位取代频域 ZC 序列：S[k] = exp(j(2π/β_HFM)·ln(1 + β_HFM·k/N_SEQ))，其中 β_HFM = (f_L − f_H)/(f_L·f_H·T_SEQ) 将调频率与分配带宽绑定。对数相位无法写成线性斜坡 2π(αd+γν)n，故既无 LFM 的仿射脊、也无 ZC 的周期栅格——多普勒不再确定性地移动时延估计、也不再产生伪时延峰（定理 1）。面向多用户接入，**缩放因子码本** {c_m} 使前导间在前导时长内累积相位差超过 2π（最小间隔 Δc = β_HFM / ln(1 + β_HFM·f_L·T_SEQ)），阻止相干互相关累积；命题 3 保证互模糊在整个时延–多普勒平面上都低于自相关峰。检测采用常规匹配滤波器，故增益归因于前导设计本身而非接收机技巧。

仿真（600 km 低轨、7.5 km/s、30 GHz Ka 频段、PRACH Format A3、834 样本前导、莱斯 K = 10.224 dB、P_FA = 10⁻³、多普勒 40–500 kHz）表明：f_D = 70 kHz 时，HFM 达到检测概率约 0.9 的 SNR 比频域叠加 LFM 早约 2 dB；f_D = 460 kHz 时，FDS-LFM 崩溃（P_D → 0），而 HFM 在 SNR ≈ −2 dB 仍保持 P_D ≈ 0.9。多用户、100–460 kHz 多普勒下 ZC 完全失效，HFM 较 FDS-LFM 有 20–33 dB 的 SNR 优势，定时 RMSE 达亚样本级（ZC/LFM 超过一个样本），且搜索栅格所需的多普勒假设数大幅减少。

## Key technical points (EN)
- **Problem:** LEO NTN PRACH under multi-kHz Doppler + large delay uncertainty; ZC self-AF forms an N/γ-spaced ambiguity lattice, LFM has a deterministic delay bias d̂ = d₀ + ν₀/β.
- **Waveform:** HFM-inspired preamble S[k] = exp(j(2π/β_HFM)·ln(1 + β_HFM·k/N_SEQ)); logarithmic phase ⇒ no affine ridge, no periodic lattice (Theorem 1).
- **Multi-user:** scaling-factor codebook, min spacing Δc = β_HFM / ln(1 + β_HFM·f_L·T_SEQ) so inter-preamble phase difference > 2π; Proposition 3 bounds cross-AF below auto-peak.
- **Receiver:** conventional matched filter (no UE-side Doppler pre-compensation) — gains attributable to the preamble.
- **Sim:** 600 km / 7.5 km/s / 30 GHz / Format A3 / 834 samples / Rician K=10.224 dB / P_FA=10⁻³ / Doppler 40–500 kHz.
- **Results:** ~2 dB SNR gain at 70 kHz; at 460 kHz FDS-LFM → P_D 0 while HFM holds P_D≈0.9 at SNR≈−2 dB; multi-user 20–33 dB gain over FDS-LFM; sub-sample timing RMSE; fewer Doppler hypotheses.

## Key technical points (ZH)
- **问题：** 多千赫兹多普勒 + 大时延不确定下的低轨 NTN PRACH；ZC 自模糊形成间隔 N/γ 的模糊栅格，LFM 有确定性时延偏差 d̂ = d₀ + ν₀/β。
- **波形：** HFM 启发式前导 S[k] = exp(j(2π/β_HFM)·ln(1 + β_HFM·k/N_SEQ))；对数相位 ⇒ 无仿射脊、无周期栅格（定理 1）。
- **多用户：** 缩放因子码本，最小间隔 Δc = β_HFM / ln(1 + β_HFM·f_L·T_SEQ) 使前导间相位差 > 2π；命题 3 将互模糊限于自相关峰之下。
- **接收机：** 常规匹配滤波器（无终端侧多普勒预补偿）——增益归因于前导本身。
- **仿真：** 600 km / 7.5 km/s / 30 GHz / Format A3 / 834 样本 / 莱斯 K=10.224 dB / P_FA=10⁻³ / 多普勒 40–500 kHz。
- **结果：** 70 kHz 处约 2 dB SNR 增益；460 kHz 处 FDS-LFM → P_D 0 而 HFM 在 SNR≈−2 dB 保持 P_D≈0.9；多用户较 FDS-LFM 增益 20–33 dB；亚样本定时 RMSE；多普勒假设数更少。

## Why it matters / what's new (EN)
NTN direct-to-device work in the KB has concentrated on the standards/spectrum layer (2026-05-30 5G NR NTN survey, 2026-05-22 D2C-vs-NTN analysis) and on positioning (2026-08-15 SSB-based LEO positioning); the *initial access* problem — how a handset even gets a random-access preamble detected through multi-kHz Doppler without pre-compensation — has had no dedicated entry. This is the first PRACH-waveform entry in the satellite bin, and its contribution is a clean analytical result (a preamble whose ambiguity function structurally refuses the delay-Doppler coupling that breaks both ZC and LFM) plus a matched-filter-detectable codebook, meaning the robustness comes from waveform design rather than heavier receivers or GNSS-aided pre-compensation. The high-Doppler regime it targets (460 kHz, where the incumbent LFM baseline drops to zero detection) is exactly the uncompensated-terminal case that matters for low-complexity IoT and emergency direct-to-cell devices that cannot afford precise Doppler estimation before access. Open questions: the gains are simulation-only under a narrowband Rician model, and integration with 3GPP NR-NTN PRACH formats and the multi-antenna receiver case remain to be shown.

## Why it matters / what's new (ZH)
知识库中的 NTN 手机直连工作集中在标准/频谱层（2026-05-30 5G NR NTN 综述、2026-05-22 D2C 与 NTN 对比）与定位（2026-08-15 基于 SSB 的低轨定位）；而*初始接入*问题——手机如何在无预补偿下于多千赫兹多普勒中被检测到随机接入前导——尚无专门条目。本条目是卫星板块首个 PRACH 波形条目，其贡献是一个清晰的解析结果（一种其模糊函数在结构上拒绝 ZC 与 LFM 都会被击垮的时延–多普勒耦合的前导）加上可用匹配滤波器检测的码本，意味着鲁棒性来自波形设计而非更重的接收机或 GNSS 辅助预补偿。它针对的高多普勒区间（460 kHz，现有 LFM 基线检测降为零）正是低复杂度 IoT 与无法在接入前精确估计多普勒的应急直连蜂窝设备所面对的无补偿终端情形。开放问题：增益仅为窄带莱斯模型下的仿真结果，与 3GPP NR-NTN PRACH 格式的集成及多天线接收机情形仍待验证。
