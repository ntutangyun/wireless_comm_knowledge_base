---
id: 2026-11-06_arxiv-cloudy-skies-jamming-detection-iridium-leo-iot
date_published: 2026-11-05
date_found: 2026-11-06
technology: satellite
type: academic-paper
title_en: "Cloudy Skies: Early Detection of Jamming Against Iridium LEO Satellite-IoT Links"
title_zh: "Cloudy Skies：铱星低轨卫星物联网链路干扰的早期检测"
url: "https://arxiv.org/abs/2611.08118"
source_quality: full
topics: [Iridium, jamming-detection, satellite-IoT, autoencoder, anomaly-detection, physical-layer, dataset]
topic_primary: sat-iot
topics_secondary: [sat-ai, leo-constellations]
novelty_score: 3
---

## Summary (EN)

Huso, Fliescher, Sciancalepore and Oligeri (arXiv cs.CR, submitted 5 Nov 2026) ask whether jamming of Iridium LEO satellite-IoT links can be detected from the physical-layer characteristics of messages that are still decoded correctly. They collected a real-world dataset of Iridium messages under 47 jamming conditions, varying the propagation environment (low and high multipath), receiver mobility (static and mobile), jammer power and distance, and jamming signal (AWGN and deceptive replay). Capture used a LimeSDR receiver with a low-noise amplifier and GNU Radio with a modified gr-Iridium; the jammer was a second LimeSDR behind a 10 dB attenuator. The dataset is released publicly.

Three one-class autoencoder detectors are compared against two signal-quality estimators commonly used for GNSS jamming indicators, C/N0 (moment-based M2M4) and a symbol-directed SNR estimator: an image-based autoencoder on 224x224 IQ histograms (about 1.66 M parameters), an LSTM autoencoder over 16-sample windows (about 62,850 parameters) and a small dense "Raw" autoencoder on raw IQ windows (1,072 parameters). Scores are evaluated per message and over chunks of 250 to 2000 samples, with AUC as the primary metric and TPR/FPR at a P95 training-score threshold as secondary.

Detectability is governed mainly by how far the receiver noise floor rises. With 1000-sample chunks (about 40 ms, roughly four decoded messages) the autoencoders reach AUC of at least 0.84 when the noise floor rises by 9 dB or more; when it does not rise above the unjammed reference, no autoencoder exceeds AUC 0.66. C/N0 and SNR estimators often stay below AUC 0.7 and fall below chance at high jammer gains, because decoded messages still show high SNR (around 20 dB in the reported example) while jamming is present. Deceptive jamming was harder to detect than AWGN in 72 of 75 compared conditions. The authors recommend the Raw autoencoder for resource-constrained terminals.

The paper lists its own limits: the jammer is static, constant and non-adaptive (reactive jamming, overshadowing and spoofing are out of scope); only correctly decoded bursts were logged; jammer distance was not extended further for legal reasons (to 100 cm in the high-multipath static distance sweep, 180 cm in low multipath); and thresholds transfer poorly between environments (the Raw autoencoder's per-message FPR rose from 0.04 to 0.38 moving from high-multipath static to low-multipath static).

## Summary (ZH)

Huso、Fliescher、Sciancalepore 与 Oligeri（arXiv cs.CR，2026 年 11 月 5 日提交）研究能否利用仍被正确解码的消息的物理层特征来检测对铱星低轨卫星物联网链路的干扰。作者采集了 47 种干扰条件下的真实铱星消息数据集，变量包括传播环境（低/高多径）、接收机移动性（静止/移动）、干扰功率与距离以及干扰信号类型（AWGN 与欺骗式重放）。采集使用带低噪放的 LimeSDR 接收机与改造过的 gr-Iridium（GNU Radio），干扰源为串接 10 dB 衰减器的另一台 LimeSDR。数据集已公开。

论文将三种单类自编码器检测器与 GNSS 中常用的两种干扰指标（基于矩的 M2M4 C/N0 估计与符号导向 SNR 估计）进行比较：基于 224x224 IQ 直方图图像的自编码器（约 166 万参数）、基于 16 采样窗口的 LSTM 自编码器（约 62,850 参数）以及作用于原始 IQ 窗口的小型全连接“Raw”自编码器（1,072 参数）。评估分单条消息与 250 至 2000 采样的数据块两种粒度，主指标为 AUC，辅以 P95 训练得分阈值下的 TPR/FPR。

可检测性主要取决于接收机底噪抬升幅度。使用 1000 采样块（约 40 ms，约四条解码消息）时，底噪抬升 9 dB 及以上时自编码器 AUC 不低于 0.84；底噪未超出无干扰基准时，没有任何自编码器的 AUC 超过 0.66。C/N0 与 SNR 估计的 AUC 常低于 0.7，在干扰增益较高时甚至低于随机水平，原因是干扰存在时被解码的消息仍保持较高 SNR（文中示例约 20 dB）。在 75 组可比条件中，欺骗式干扰有 72 组比 AWGN 更难检测。作者推荐资源受限终端使用 Raw 自编码器。

论文自述的局限包括：干扰源为静态、恒定、非自适应（反应式干扰、覆盖与欺骗不在范围内）；只记录了被正确解码的突发；出于法律考虑未进一步扩大干扰距离（高多径静态距离实验至 100 cm，低多径至 180 cm）；阈值在不同环境间迁移性差（Raw 自编码器单消息 FPR 从高多径静态场景的 0.04 升至低多径静态场景的 0.38）。

## Key technical points (EN)

- Dataset: Iridium messages under 47 jamming conditions (two multipath environments, static/mobile receiver, several jammer powers and distances, AWGN and deceptive replay), publicly released.
- Detectors: image-based AE (about 1.66 M parameters), LSTM-AE (about 62,850), Raw AE (1,072), all one-class; baselines are C/N0 (M2M4) and symbol-directed SNR.
- With 1000-sample chunks (about 40 ms): AUC of at least 0.84 once the noise floor rises by 9 dB or more; at most 0.66 when it does not rise.
- Baselines fail because decoded messages keep high SNR (around 20 dB) under jamming; within 3 dB SNR classes the autoencoders still separate jammed from clean chunks.
- Raw AE median AUC rises from about 0.68 per message to about 0.80 at 1000 samples; deceptive jamming harder than AWGN in 72 of 75 conditions.
- Thresholds do not transfer across environments; only static non-adaptive jamming was tested.

## Key technical points (ZH)

- 数据集：47 种干扰条件下的铱星消息（两种多径环境、静止/移动接收机、多种干扰功率与距离、AWGN 与欺骗式重放），已公开发布。
- 检测器：图像自编码器（约 166 万参数）、LSTM-AE（约 62,850）、Raw AE（1,072），均为单类模型；基线为 C/N0（M2M4）与符号导向 SNR。
- 使用 1000 采样块（约 40 ms）：底噪抬升 9 dB 及以上时 AUC 不低于 0.84；未抬升时不超过 0.66。
- 基线失效的原因是干扰下被解码的消息仍保持高 SNR（约 20 dB）；在 3 dB SNR 分档内，自编码器仍能区分干扰块与正常块。
- Raw AE 中位 AUC 由单消息约 0.68 升至 1000 采样约 0.80；75 组条件中有 72 组欺骗式干扰比 AWGN 更难检测。
- 阈值无法跨环境迁移；实验仅覆盖静态、非自适应干扰。

## Why it matters / what's new (EN)

The KB's satellite-security coverage so far has focused on LEO attacks at the network and scheduling layers (see 2026-09-16_arxiv-hydra-leo-link-flooding-botnet-thresholds and 2026-09-19_arxiv-janus-dos-beam-hopping-leo) and on GNSS authentication (2026-09-16_arxiv-galileo-sas-authenticated-timing); physical-layer Iridium data appear in the IriSig-Spoof RF-fingerprinting benchmark (2026-08-20_arxiv-irisig-spoof-satellite-rff-benchmark). This paper adds jamming detection on the same deployed LEO IoT system, from correctly decoded messages, with its own public dataset. Its main practical message is that GNSS-style signal-quality indicators are a poor jamming alarm for Iridium-like links, since messages that still decode look healthy, so detection has to use finer physical-layer information.

## Why it matters / what's new (ZH)

KB 此前的卫星安全内容主要集中在网络层与调度层的低轨攻击（见 2026-09-16_arxiv-hydra-leo-link-flooding-botnet-thresholds 与 2026-09-19_arxiv-janus-dos-beam-hopping-leo）以及 GNSS 认证（2026-09-16_arxiv-galileo-sas-authenticated-timing）；铱星物理层数据已见于 IriSig-Spoof 射频指纹基准（2026-08-20_arxiv-irisig-spoof-satellite-rff-benchmark）。本文在同一已部署低轨物联网系统上，基于仍被正确解码的消息研究干扰检测，并公开其数据集。其主要实践结论是：GNSS 式的信号质量指标并不适合作为类铱星链路的干扰告警，因为仍能解码的消息看起来“健康”，检测必须利用更细粒度的物理层信息。

## Images

![Iridium receiver setup used for data collection | 数据采集所用的铱星接收机装置](https://arxiv.org/html/2611.08118v1/images/RX.jpg)
![Jammer hardware used in the experiments | 实验所用的干扰源硬件](https://arxiv.org/html/2611.08118v1/images/Jammer.jpg)
