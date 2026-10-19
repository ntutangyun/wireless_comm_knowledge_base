---
id: 2026-10-19_arxiv-ghostlock-blind-gps-signal-nullification
date_published: 2026-10-14
date_found: 2026-10-19
technology: satellite
type: academic-paper
title_en: "GhostLock: Learning-Assisted Blind GPS Signal Nullification Without Victim-Side Information"
title_zh: "GhostLock：无需受害端信息的学习辅助盲 GPS 信号抵消"
url: "https://arxiv.org/abs/2610.20831"
source_quality: full
topics: [GPS, GNSS-security, signal-nullification, blind-adaptive-filter, CNN, SDR, L1]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Ahmad, Ansari, Kamal, Iqbal and Aman (arXiv 2610.20831, cs.CR, submitted 14 October 2026) study GPS Signal Nullification (GSN), a physical-layer attack that suppresses authentic satellite signals by destructive interference before a victim receiver acquires them. The authors note that GSN is little studied compared with spoofing and jamming, and that existing nullification techniques typically need victim-side information (such as channel estimates or synchronization parameters) that a realistic attacker would not have. They also observe that some spoofing defences assume authentic satellite signals remain available as a trusted reference, which GSN undermines.

GhostLock works from an approximate victim location and only the signal the attacker itself receives. A Blind Adaptive Filter (BAF) reconstructs the attacker's locally received GPS waveform with a Wiener-style solution, and a two-stage 1-D CNN estimates the relative delay (integer part, then fractional part) from a window of I/Q samples, trained offline with a cancellation-aware loss on calibration-receiver data. The predicted delay is converted deterministically into a carrier-phase correction for the transmitted anti-signal. The assumed victim is passive and stationary.

The prototype uses three Ettus USRP B205mini radios (one GPS L1 transmitter at 1575.42 MHz, 2.1 MS/s; one attacker receiver; one victim receiver) with GNU Radio and GPS-SDR-SIM. In simulation with an ideal channel, average attenuation is 31.4 dB at 5 m separation with 10 ms windows, falling to about 22 dB (10 ms) and 20.7 dB (20 ms) at 25 m. In over-the-air data with the two receivers about 4 feet apart, delay-prediction MAE is 0.0036 samples (10 ms windows) and 0.0062 samples (20 ms windows); attenuation is strongest near the centre frequency and weaker at the band edges.

Caveats from the reported setup (not stated by the authors as limitations): nullification is evidenced by attenuation and PSD rather than a measured acquisition-failure rate, although the authors state that acquisition was suppressed; the real-world test is a single fixed location, a 10 s signal and a very short separation; and training needs an offline calibration phase. The paper proposes no defence and says the results motivate acquisition-stage detection and mitigation.

## Summary (ZH)

Ahmad、Ansari、Kamal、Iqbal 和 Aman（arXiv 2610.20831，cs.CR，2026 年 10 月 14 日提交）研究 GPS 信号抵消（GSN）——一种物理层攻击，通过相消干涉在受害接收机捕获之前压制真实卫星信号。作者指出，与欺骗和干扰相比，GSN 研究较少；现有抵消技术通常需要受害端信息（如信道估计或同步参数），而现实中的攻击者无法获得。此外，部分欺骗防御假定真实卫星信号仍可作为可信参考，而 GSN 会破坏这一假设。

GhostLock 仅依赖受害者的大致位置和攻击者自身接收到的信号。盲自适应滤波器（BAF）以类 Wiener 解重建攻击者本地接收的 GPS 波形；两级一维 CNN 从 I/Q 窗口估计相对时延（先整数部分，后小数部分），离线训练时使用基于校准接收机数据的抵消感知损失。预测时延被确定性地转换为发射反相信号的载波相位修正。假定受害者静止且被动。

原型使用三台 Ettus USRP B205mini（一台 GPS L1 发射机，1575.42 MHz、2.1 MS/s；一台攻击者接收机；一台受害者接收机），配合 GNU Radio 和 GPS-SDR-SIM。理想信道仿真中，间距 5 m、10 ms 窗口时平均衰减为 31.4 dB；25 m 时约为 22 dB（10 ms）和 20.7 dB（20 ms）。在两接收机相距约 4 英尺的空口数据中，时延预测 MAE 为 0.0036 采样（10 ms 窗口）和 0.0062 采样（20 ms 窗口）；中心频率附近衰减最强，频带边缘较弱。

从所报告的实验设置看到的局限（并非作者列出）：抵消效果以衰减和 PSD 为证据，而非实测的捕获失败率（尽管作者称捕获已被压制）；实测仅为单一固定位置、10 秒信号、极短间距；训练需要离线校准阶段。论文未提出防御方案，称结果为后续捕获阶段的检测与缓解提供动机。

## Key technical points (EN)

- **Threat**: GPS Signal Nullification, suppressing authentic signals before acquisition, without victim-side feedback.
- **Method**: Blind Adaptive Filter plus two-stage 1-D CNN delay estimator (integer then fractional), cancellation-aware offline loss.
- **Testbed**: 3x USRP B205mini, L1 1575.42 MHz, GNU Radio, GPS-SDR-SIM.
- **Results**: 31.4 dB attenuation at 5 m (simulation), about 22 dB at 25 m; OTA delay MAE about 0.004 sample at roughly 4 ft.
- **Caveat**: no direct acquisition-failure measurement; single-location OTA test; no defence evaluated.

## Key technical points (ZH)

- **威胁**：GPS 信号抵消，在捕获前压制真实信号，无需受害端反馈。
- **方法**：盲自适应滤波器 + 两级一维 CNN 时延估计器（整数/小数），离线抵消感知损失。
- **试验台**：3 台 USRP B205mini，L1 1575.42 MHz，GNU Radio，GPS-SDR-SIM。
- **结果**：仿真 5 m 衰减 31.4 dB，25 m 约 22 dB；空口时延 MAE 约 0.004 采样（约 4 英尺）。
- **局限**：未直接测量捕获失败；单一地点空口测试；未评估防御。

## Why it matters / what's new (EN)

The paper reports a nullification approach that does not require feedback from the victim, evaluated on SDR hardware at very short range. Because the evidence is attenuation and PSD rather than receiver acquisition outcomes, its practical reach at longer distances is not established by the paper. Filed under sat-ai by the KB's existing satellite-security convention.

## Why it matters / what's new (ZH)

论文提出了一种无需受害端反馈的抵消方法，并在 SDR 硬件上做了极短距离评估。由于证据是衰减和 PSD 而非接收机捕获结果，论文并未证明其在更远距离的实际效果。按本知识库现有的卫星安全惯例归入 sat-ai。

## Images

None.
