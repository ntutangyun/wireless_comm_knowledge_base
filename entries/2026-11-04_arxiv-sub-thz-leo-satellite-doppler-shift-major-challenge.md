---
id: 2026-11-04_arxiv-sub-thz-leo-satellite-doppler-shift-major-challenge
date_published: 2026-10-31
date_found: 2026-11-04
technology: satellite
type: academic-paper
title_en: "Sub Terahertz LEO Satellite Communication: Is Doppler Shift a Major Challenge?"
title_zh: "亚太赫兹 LEO 卫星通信：多普勒频移是主要挑战吗？"
url: "https://arxiv.org/abs/2611.01264"
source_quality: full
topics: [LEO, sub-THz, OFDM, Doppler-shift, ICI, phase-compensation, 220-GHz]
topic_primary: leo-constellations
topics_secondary: [ntn]
novelty_score: 3
---

## Summary (EN)

Kang, Ramezani, Sung and Petrov (arXiv, 31 Oct 2026) ask whether Doppler shift is a critical design problem for OFDM downlinks from LEO satellites at sub-terahertz carriers. They build an evaluation framework that jointly counts Doppler-induced impairments (inter-carrier interference, desired-signal power loss, per-symbol phase-offset accumulation) and non-Doppler ones (inter-symbol interference when the cyclic prefix is shorter than the channel, Rician multipath, free-space and extra path loss).

Three engineering approaches are compared: no Doppler or phase compensation; a single frequency estimate at the minimum-elevation point of the pass with no phase compensation; and the same single estimate plus per-symbol linear phase pre-compensation. The setup is 220 GHz, 5 GHz bandwidth, 600 km altitude, 27 dBm transmit power, 46.8 dBi satellite and 63.6 dBi ground antenna gains, BPSK, elevation 25 to 90 degrees, Rician K = 17 dB, and a pass of about 315 s.

The authors conclude that ignoring Doppler substantially compromises performance, but that most of the damage is removed with low-complexity measures: a moderate subcarrier count (N = 64 or 128 keeps SINR above 5 dB over all elevations in their sweep; N of 256 or more degrades sharply at low elevation) and one Doppler estimate per pass with phase pre-compensation. Their stated headline is that a single estimate over the 5-minute pass may suffice. Stated assumptions include perfect beam alignment, perfect symbol timing and a perfect initial estimate, no weather loss, a single satellite and user, and uncoded BPSK.

## Summary (ZH)

Kang、Ramezani、Sung 与 Petrov（arXiv，2026 年 10 月 31 日）研究在亚太赫兹载频下，多普勒频移是否是 LEO 卫星 OFDM 下行链路的关键设计难题。他们构建的评估框架同时计入多普勒引起的损伤（载波间干扰、有用信号功率损失、逐符号相位偏移累积）和非多普勒损伤（循环前缀短于信道时的符号间干扰、莱斯多径、自由空间及附加路径损耗）。

比较了三种工程方案：无多普勒/相位补偿；在过顶最低仰角处做一次频率估计、无相位补偿；以及同样的一次估计加逐符号线性相位预补偿。设置为 220 GHz、5 GHz 带宽、600 km 轨道高度、27 dBm 发射功率、卫星天线 46.8 dBi、地面天线 63.6 dBi、BPSK、仰角 25 至 90 度、莱斯 K = 17 dB、过顶约 315 s。

作者结论是：忽略多普勒会显著损害性能，但低复杂度措施即可消除大部分影响——适中的子载波数（在其扫描中 N = 64 或 128 可使全部仰角下 SINR 高于 5 dB；N 不小于 256 时低仰角性能急剧下降），以及每次过顶一次多普勒估计加相位预补偿。作者给出的核心结论是在 5 分钟过顶内一次估计可能就已足够。文中声明的假设包括波束完美对准、符号定时完美、初始估计完美、无天气损耗、单卫星单用户以及未编码 BPSK。

## Key technical points (EN)

- Doppler f_d = (f_c/c)·v_r; largest near minimum elevation, zero at zenith; worst case is an overhead pass (about 7.56 km/s at 600 km).
- ICI and desired-power loss scale roughly as (1/3)(pi N f_d / B)^2; larger N raises Doppler ICI and phase error but lowers multipath interference.
- Config 1 (no compensation) throughput collapses within a few symbols; Config 2's stable period is about 10 ms, implying re-estimation every few tens of ms; Config 3 with N = 64 holds high performance across the pass.
- Simulations use BPSK; QPSK appears only as an illustrative example of phase-offset tolerance (Fig. 2b).

## Key technical points (ZH)

- 多普勒 f_d = (f_c/c)·v_r；最低仰角附近最大，天顶为零；最坏情形为正上方过顶（600 km 高度约 7.56 km/s）。
- ICI 与有用功率损失约按 (1/3)(pi N f_d / B)^2 变化；N 增大使多普勒 ICI 与相位误差上升，但降低多径干扰。
- 配置 1（无补偿）吞吐在数个符号内崩溃；配置 2 的稳定期约 10 ms，意味着每数十毫秒需重新估计；配置 3 在 N = 64 时全程保持高性能。
- 仿真使用 BPSK；QPSK 仅作为相位偏移容限的示意例子出现（图 2b）。

## Why it matters / what's new (EN)

The paper treats sub-THz LEO links as a Doppler-budget question and answers it with a deliberately simple compensation recipe, adding to the KB's LEO physical-layer coverage (e.g. 2026-11-03_arxiv-downlink-mu-mimo-leo-direct-to-device for sub-6 GHz direct-to-device). Its conclusions rest on the idealised assumptions listed above and are model-based only.

## Why it matters / what's new (ZH)

该论文把亚太赫兹 LEO 链路视为多普勒预算问题，并用刻意简单的补偿方案作答，补充了 KB 中的 LEO 物理层条目（例如面向 6 GHz 以下直连终端的 2026-11-03_arxiv-downlink-mu-mimo-leo-direct-to-device）。其结论建立在上述理想化假设之上，且仅为基于模型的结果。

## Images

![Satellite-to-ground-user geometry (Fig. 1) | 卫星到地面用户几何示意（图 1）](https://arxiv.org/html/2611.01264v1/figures/Earth_and_groundUser_v5.png)
