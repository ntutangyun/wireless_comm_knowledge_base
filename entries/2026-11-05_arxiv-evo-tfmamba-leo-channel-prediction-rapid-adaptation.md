---
id: 2026-11-05_arxiv-evo-tfmamba-leo-channel-prediction-rapid-adaptation
date_published: 2026-11-03
date_found: 2026-11-05
technology: satellite
type: academic-paper
title_en: "Toward Generalized LEO Channel Prediction: A Rapid Adaptation Time-Frequency Mamba Framework"
title_zh: "面向通用化 LEO 信道预测：快速自适应时频 Mamba 框架"
url: "https://arxiv.org/abs/2611.04224"
source_quality: full
topics: [LEO, channel-prediction, CSI, Mamba, meta-learning, channel-aging, TR-38.821]
topic_primary: leo-constellations
topics_secondary: [sat-ai, ntn]
novelty_score: 3
---

## Summary (EN)

Geng, Zhao, Jiang, Wang, Liu and Wei (Beijing University of Posts and Telecommunications, with the State Key Laboratory of Satellite Network, the Shanghai Key Laboratory of Satellite Network and Shanghai Satellite Network Research Institute; arXiv eess.SP, 3 Nov 2026) address downlink CSI prediction for LEO satellites. They say fast satellite motion and long propagation delay cause channel aging, and that existing deep-learning predictors generalise poorly across geographic environments.

Their framework, Evo-TFMamba, has a time-domain path (two selective Mamba blocks, hidden dimension 64, state dimension 16) and a frequency-domain path (rFFT, a learned per-bin spectral attention that rescales the Fourier coefficients, then inverse rFFT). A gate computed from an auxiliary vector (distance, Doppler, rain attenuation and directional cosines) convexly combines the two paths, a single-layer Transformer refines the result, and a linear decoder outputs the next four CSI steps from a 16-step history. For new environments, a MAML-style procedure fine-tunes from pretrained weights using MSE, a spectral-consistency term and a regulariser that keeps parameters near the initialisation.

Evaluation uses a simulated LEO downlink based on 3GPP TR 38.821 (12 GHz, 600 km, 7.5 km/s, 53 degree inclination, 16 antennas, 10 users, 0.5 ms slots, Rician factor 10 dB urban / 4 dB jungle). The named baseline is T-LSTM. Limitations (this entry's reading, not stated by the authors): results come from a simulator rather than measured channels and that a single urban-to-rainforest transfer is tested; parameter count, FLOPs and inference latency are not reported.

## Summary (ZH)

Geng、Zhao、Jiang、Wang、Liu 与 Wei（北京邮电大学，及卫星网络全国重点实验室、上海市卫星网络重点实验室、上海卫星网络研究院有限公司；arXiv eess.SP，2026 年 11 月 3 日）研究 LEO 卫星的下行 CSI 预测。作者指出，卫星高速运动与长传播时延会造成信道老化，而现有深度学习预测方法在不同地理环境之间泛化较差。

所提 Evo-TFMamba 框架包含时域支路（两个选择性 Mamba 块，隐藏维度 64，状态维度 16）和频域支路（rFFT、对每个频点学习的谱注意力对傅里叶系数重新加权，再做逆 rFFT）。由辅助向量（距离、多普勒、雨衰和方向余弦）计算的门控对两条支路做凸组合，经单层 Transformer 细化后，由线性解码器根据 16 步历史输出未来 4 步 CSI。面对新环境时，采用 MAML 风格的流程，以 MSE、谱一致性项和约束参数靠近初始值的正则项从预训练权重微调。

评估使用基于 3GPP TR 38.821 的仿真 LEO 下行链路（12 GHz、600 km、7.5 km/s、53 度倾角，16 天线、10 用户、0.5 ms 时隙，城区/丛林 Rician 因子分别为 10 dB/4 dB）。论文命名的基线为 T-LSTM。局限（本条目的解读，并非作者所述）：结果来自仿真而非实测信道，且仅测试了一次城区到雨林的迁移；未报告参数量、FLOPs 与推理时延。

## Key technical points (EN)

- Two-path predictor: selective-Mamba time encoder plus spectral-attention frequency branch, fused by a gate driven by distance, Doppler, rain attenuation and directional cosines.
- Prediction horizon: 4 future CSI steps from 16 past steps at 0.5 ms slot spacing.
- Reported gains (figures in the paper): NMSE 2.47 dB lower than T-LSTM at 60 km/h and about 28% lower averaged over SNRs; gated fusion about 4 dB better than fixed 0.5/0.5 fusion at 30 dB SNR.
- Few-shot adaptation from urban to rainforest at 10, 50 and 100 km/h: with 20 support samples, 5 adaptation steps nearly match full retraining; about 100 support samples match it with 5 steps.
- Code is stated to be public on GitHub; training ran on a single RTX 3080.

## Key technical points (ZH)

- 双支路预测器：选择性 Mamba 时域编码器加谱注意力频域支路，由距离、多普勒、雨衰和方向余弦驱动的门控融合。
- 预测范围：以 0.5 ms 时隙间隔，由过去 16 步预测未来 4 步 CSI。
- 论文报告的增益（以图给出）：60 km/h 时 NMSE 比 T-LSTM 低 2.47 dB，跨 SNR 平均约低 28%；30 dB SNR 下门控融合比固定 0.5/0.5 融合约好 4 dB。
- 城区到雨林、10/50/100 km/h 的少样本自适应：20 个支撑样本、5 步自适应即可接近完全重训；约 100 个支撑样本时 5 步即可持平。
- 论文称代码已在 GitHub 公开；训练在单块 RTX 3080 上完成。

## Why it matters / what's new (EN)

LEO channel aging is a basic obstacle to using predicted CSI for precoding and scheduling. This paper pairs a state-space (Mamba) predictor with a few-shot adaptation step so one pretrained model can be moved between environments. The KB's earlier LEO entries on position-assisted beam management (2026-10-12_arxiv-imu-predictive-beam-management-leo-d2d) and joint delay-Doppler channel modelling (2026-11-04_arxiv-joint-delay-doppler-multipath-leo-channels) address related problems, but neither covers learned CSI prediction with cross-environment adaptation. Its evidence is simulation-only.

## Why it matters / what's new (ZH)

LEO 信道老化是在预编码与调度中使用预测 CSI 的基本障碍。本文将状态空间（Mamba）预测器与少样本自适应步骤结合，使同一预训练模型可迁移到不同环境。KB 先前的 LEO 条目（位置辅助波束管理 2026-10-12_arxiv-imu-predictive-beam-management-leo-d2d，以及联合时延-多普勒信道建模 2026-11-04_arxiv-joint-delay-doppler-multipath-leo-channels）处理的是相关问题，但均未涉及带跨环境自适应的学习式 CSI 预测。其证据仅来自仿真。
