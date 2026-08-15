---
id: 2026-08-15_arxiv-ssb-leo-positioning-nr-ntn-crlb
date_published: 2026-08-10
date_found: 2026-08-15
type: academic-paper
technology: satellite
title_en: "Achievable Accuracy and Cramér-Rao Bounds for SSB-Based LEO Positioning in NR NTN — sub-meter opportunistic positioning from 5G synchronization blocks over a Starlink-like MSS constellation"
title_zh: "基于 SSB 的 NR NTN 低轨定位可达精度与 Cramér-Rao 界——利用 5G 同步信号块在类 Starlink MSS 星座上实现亚米级机会定位"
url: "https://arxiv.org/abs/2608.10270"
source_quality: full
topics: [NR-NTN, SSB, positioning, CRLB, Doppler, pseudorange, Starlink-MSS, PNT, opportunistic-positioning]
topic_primary: sat-direct-device
topics_secondary: [starlink, leo-constellations]
novelty_score: 3
---

## Summary (EN)
Bachl, Lei and Nabeel (submitted 10 Aug 2026 to the 2026 IEEE Navigation Conference, NAVICON) ask how well a ground receiver could position itself *opportunistically* from the always-on **Synchronization Signal Blocks (SSBs)** that a 5G NR non-terrestrial-network LEO constellation must broadcast — no Positioning Reference Signals, no standards changes, no GNSS. The framing is explicitly Starlink's Mobile Satellite Service filing: a 12,000-satellite constellation in four Walker-delta shells around 326–332 km altitude, inclinations 43°–96.87°, adopting the NR NTN standard. The SSB is four OFDM symbols × 240 subcarriers at 30 kHz spacing (~143 µs, ~830 resource elements across PSS/SSS/PBCH/DMRS), and each received SSB yields a pseudorange (from delay) and a Doppler observable.

The paper derives single-SSB Cramér-Rao lower bounds for delay and carrier-frequency estimation from the SSB's full time-frequency energy distribution (Gabor/Rife-Boorstyn form: σ_ρ ≥ c/(2π W_rms √(2γ)) for pseudorange, σ_f ≥ 1/(2π σ_t √(2γ)) for Doppler): at 0 dB per-resource-element SNR the bounds are about **0.60 m pseudorange and ~101 Hz Doppler** per SSB. It then builds a multi-epoch, multi-satellite Fisher-information framework over a five-state unknown (3-D user position, receiver clock bias, clock drift), weighting each SSB by its range-dependent CRLB evaluated at the estimated SNR so estimator and bound share one noise model — an improvement over prior flat-weighted treatments. A link budget for a Starlink-based constellation puts the per-RE SNR at ~3.6 dB at zenith falling to ~0 dB at a 40° elevation mask. The estimator is a damped Gauss-Newton weighted least squares with adaptive weights.

Headline result: **~0.52 m 3-D RMS position error** with N* = 20 epochs spaced 3.2 s (a 60.8 s batch), clock-bias CRLB 1.45 ns and drift 0.01 ppb; Monte-Carlo estimator error tracks the instantaneous CRLB across constellation geometry (0.37–0.83 m). Pseudorange dominates the accuracy; Doppler is secondary. The authors caveat that systematic errors (residual atmospheric delay, ephemeris quantization) would widen deployed accuracy to decimetre-to-metre level.

## Summary (ZH)
Bachl、Lei 与 Nabeel（2026 年 8 月 10 日提交，投稿 2026 IEEE 导航会议 NAVICON）研究地面接收机能否*机会式地*利用 5G NR 非地面网络低轨星座必须持续广播的**同步信号块（SSB）**完成定位——不用定位参考信号、不改标准、不依赖 GNSS。场景明确取自 Starlink 的移动卫星服务（MSS）申报：约 12,000 颗卫星、4 个 Walker-delta 壳层、高度 326–332 km、倾角 43°–96.87°，采用 NR NTN 标准。SSB 为 4 个 OFDM 符号 × 240 个子载波、30 kHz 子载波间隔（约 143 µs，PSS/SSS/PBCH/DMRS 合计约 830 个资源元素），每次接收 SSB 可得到一个伪距（时延）与一个多普勒观测量。

论文基于 SSB 完整时频能量分布推导单 SSB 的时延与载频估计 Cramér-Rao 下界（Gabor/Rife-Boorstyn 形式：伪距 σ_ρ ≥ c/(2π W_rms √(2γ))，多普勒 σ_f ≥ 1/(2π σ_t √(2γ))）：在每资源元素 0 dB 信噪比下，单 SSB 界约为**伪距 0.60 m、多普勒约 101 Hz**。随后构建多历元、多卫星的 Fisher 信息框架，未知量为 5 维（三维位置、接收机钟差、钟漂），每个 SSB 按其在估计 SNR 下的距离相关 CRLB 加权，使估计器与下界共享同一噪声模型——较此前平权处理有所改进。类 Starlink 星座链路预算给出天顶每 RE 约 3.6 dB、40° 仰角掩码处约 0 dB 的 SNR。估计器为自适应权重的阻尼 Gauss-Newton 加权最小二乘。

核心结果：N* = 20 个历元、间隔 3.2 s（60.8 s 批次）下 **3-D RMS 定位误差约 0.52 m**，钟差 CRLB 1.45 ns、钟漂 0.01 ppb；蒙特卡洛估计误差在不同星座几何下紧贴瞬时 CRLB（0.37–0.83 m）。伪距主导精度，多普勒次之。作者指出系统误差（大气残差、星历量化）会使实际部署精度放宽到分米至米级。

## Key technical points (EN)
- **Signal:** NR SSB — 4 OFDM symbols × 240 subcarriers, 30 kHz SCS, ~143 µs, ~830 REs; observables = pseudorange (delay) + Doppler (carrier frequency).
- **Constellation:** Starlink MSS-filing-like, 12,000 sats, four Walker-delta shells at 326–332 km, inclinations 43°–96.87°; per-RE SNR ~3.6 dB at zenith → ~0 dB at 40° elevation.
- **Single-SSB CRLB @ 0 dB/RE:** ~0.60 m pseudorange, ~101 Hz Doppler (energy-weighted RMS bandwidth / time-spread form).
- **Multi-epoch/multi-sat FIM:** 5-state (3-D position, clock bias, drift); each SSB weighted by its SNR-dependent CRLB; damped Gauss-Newton WLS estimator.
- **Results:** 0.52 m 3-D RMS at N* = 20 epochs × 3.2 s; clock bias 1.45 ns, drift 0.01 ppb; estimator tracks CRLB (0.37–0.83 m across geometry); pseudorange dominates.
- **Caveats:** bias-free noise assumed; atmospheric/ephemeris systematics push practical accuracy to dm–m.

## Key technical points (ZH)
- **信号：** NR SSB——4 OFDM 符号 × 240 子载波、30 kHz、约 143 µs、约 830 RE；观测量 = 伪距（时延）+ 多普勒（载频）。
- **星座：** 类 Starlink MSS 申报，12,000 星、4 个 Walker-delta 壳层、326–332 km、倾角 43°–96.87°；每 RE SNR 天顶约 3.6 dB → 40° 仰角约 0 dB。
- **单 SSB CRLB @ 0 dB/RE：** 伪距约 0.60 m、多普勒约 101 Hz（能量加权 RMS 带宽/时宽形式）。
- **多历元/多星 FIM：** 5 维状态（三维位置、钟差、钟漂）；每个 SSB 按 SNR 相关 CRLB 加权；阻尼 Gauss-Newton 加权最小二乘。
- **结果：** N* = 20 历元 × 3.2 s 下 3-D RMS 0.52 m；钟差 1.45 ns、钟漂 0.01 ppb；估计器紧贴 CRLB（几何变化下 0.37–0.83 m）；伪距主导。
- **限制：** 假设无偏噪声；大气/星历系统误差使实际精度放宽至分米–米级。

## Why it matters / what's new (EN)
Existing satellite-positioning entries in the KB are GNSS-centric (2026-08-12_arxiv-cors-network-gnss-integrity-monitoring, 2026-08-12_arxiv-rigid-covert-gnss-spoofing-uav-swarms) and the NTN entries treat positioning only in passing (2026-05-30_arxiv-5g-nr-ntn-survey-roadmap). This is the first entry that treats a **standards-compliant NR-NTN direct-to-device broadcast as a positioning signal in its own right** — and it does so with the concrete Starlink MSS constellation geometry that the direct-to-cell thread has been tracking, tying the D2D bin to PNT. The practical claim — sub-meter from one minute of SSB observations without PRS — matters because it implies any NR-NTN-capable handset could obtain a GNSS-independent, spoof-resistant position fix from signals it already decodes to camp on the network, which is exactly the "opportunistic LEO PNT" argument previously made only for proprietary Starlink downlinks. Open questions the paper flags: real atmospheric/ephemeris systematics, and whether the receiver-side weighting can be run cheaply on a UE.

## Why it matters / what's new (ZH)
知识库现有卫星定位条目以 GNSS 为中心（2026-08-12 CORS 网络 GNSS 完好性监测、2026-08-12 无人机集群隐蔽欺骗），NTN 条目仅顺带提及定位（2026-05-30 NR NTN 综述路线图）。本条目首次把**符合标准的 NR-NTN 手机直连广播信号本身作为定位信号**来处理——并且采用直连线索一直跟踪的 Starlink MSS 星座几何，把 D2D 板块与 PNT 联系起来。其实用意义在于：不用 PRS、仅一分钟 SSB 观测即可亚米级，意味着任何具备 NR-NTN 能力的手机都能凭借驻留网络时本就要解码的信号获得不依赖 GNSS、抗欺骗的定位——这正是此前只针对 Starlink 私有下行提出的"机会式低轨 PNT"论点。论文指出的开放问题：真实大气/星历系统误差，以及接收端加权能否在终端上低成本运行。
