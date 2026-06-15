---
id: 2026-06-15_arxiv-agon-satellite-interference-detection
date_published: 2026-06-12
date_found: 2026-06-15
type: academic-paper
technology: satellite
title_en: "Agon: A Semi-Supervised Framework for Robust Satellite Interference Detection"
title_zh: "Agon：用于鲁棒卫星干扰检测的半监督框架"
url: "https://arxiv.org/abs/2606.14147"
source_quality: full
topics: [NGSO, GSO, interference-detection, semi-supervised, masked-autoencoder, NGSO-GSO-coexistence]
topic_primary: sat-ai
topics_secondary: [ngso-regulation, leo-constellations]
novelty_score: 3
---

## Summary (EN)
Yang, Yang, Chen, Qiu and Gao (Fudan University, Space Internet Research Institute; arXiv 2606.14147, submitted 12 June 2026) present **Agon**, a semi-supervised framework for real-time RF **interference detection** in satellite links as NGSO constellations multiply and NGSO–GSO / NGSO–NGSO interference becomes a millisecond-timescale, rapidly time-varying problem. Static regulatory frameworks and reconstruction-based ML detectors (which depend on brittle, unstable error thresholds) cannot keep up.

Agon uses a **two-stage hybrid paradigm**. First, **self-supervised pre-training**: a masked autoencoder (MAE) with a dual-attention-transformer (DAT) encoder learns universal signal structure from unlabeled data. Then **multi-task fine-tuning** trains a *direct binary classifier* (eliminating the unstable reconstruction-threshold approach) using: **High-Order-Statistics (HOS)-augmented attention** (second-order/covariance priors that separate interference from thermal noise even when it's buried below the noise floor), a **wavelet regularization loss** (multi-scale structural fidelity in the discrete-wavelet domain to recover transient spectral detail), plus auxiliary modulation-classification and signal-reconstruction tasks.

On the public NGSO–GSO dataset (17,281 snapshots) Agon reaches **0.9327 AUC, 0.9251 accuracy, 0.8351 F1, and a 0.0553 false-positive rate** — versus 0.1763 FPR for the TrID baseline. On an NGSO–NGSO Starlink/OneWeb dataset (7,450 samples) it hits 0.9085 AUC / 0.9055 F1 with >90% modulation-classification accuracy, staying robust across off-axis angles and interference-to-noise ratios and generalizing across C-, Ku- and Ka-bands. It outperforms VAE, CNN-AE, TrID and energy-detection baselines, most strongly under high interference density.

## Summary (ZH)
杨、杨、陈、邱与高（复旦大学空间互联网研究院；arXiv 2606.14147，2026 年 6 月 12 日提交）提出 **Agon**——一个用于卫星链路实时射频**干扰检测**的半监督框架。随着 NGSO 星座激增、NGSO–GSO 与 NGSO–NGSO 干扰成为毫秒级、快速时变的问题，静态监管框架与依赖脆弱不稳定误差阈值的基于重构的 ML 检测器都无法应对。

Agon 采用**两阶段混合范式**。首先**自监督预训练**：带双注意力 Transformer（DAT）编码器的掩码自编码器（MAE）从无标注数据中学习通用信号结构。随后**多任务微调**训练一个*直接二分类器*（摒弃不稳定的重构阈值法），使用：**高阶统计量（HOS）增强注意力**（二阶/协方差先验，即使干扰埋于热噪声之下也能将其与噪声分离）、**小波正则化损失**（离散小波域的多尺度结构保真，以恢复瞬态频谱细节），并辅以调制分类与信号重构辅助任务。

在公开 NGSO–GSO 数据集（17,281 快照）上，Agon 达到 **AUC 0.9327、准确率 0.9251、F1 0.8351、误报率 0.0553**——而 TrID 基线误报率为 0.1763。在 NGSO–NGSO Starlink/OneWeb 数据集（7,450 样本）上达到 AUC 0.9085 / F1 0.9055，调制分类准确率 >90%，在不同离轴角与干噪比下保持鲁棒，并在 C/Ku/Ka 频段间泛化。它在 VAE、CNN-AE、TrID 与能量检测基线之上全面领先，在高干扰密度下优势最显著。

## Key technical points (EN)
- **Problem**: millisecond-timescale, time-varying NGSO–GSO / NGSO–NGSO interference; static rules and threshold-based ML detectors fail.
- **Stage 1**: self-supervised MAE pre-training with a dual-attention-transformer encoder on unlabeled signals.
- **Stage 2**: multi-task fine-tuning → direct binary classifier (threshold-free), with HOS-augmented attention + wavelet regularization + aux modulation/reconstruction tasks.
- **NGSO–GSO (17,281 snaps)**: AUC 0.9327, acc 0.9251, F1 0.8351, FPR 0.0553 (vs TrID 0.1763).
- **NGSO–NGSO (7,450, Starlink/OneWeb)**: AUC 0.9085, F1 0.9055, modulation-class >90%.
- **Robustness**: generalizes across C/Ku/Ka bands, off-axis angles, INR; beats VAE/CNN-AE/TrID/energy-detection.
- **Novelty**: threshold-free detection, HOS second-order attention priors, wavelet multi-scale fidelity loss.

## Key technical points (ZH)
- **问题**：毫秒级时变 NGSO–GSO / NGSO–NGSO 干扰；静态规则与基于阈值的 ML 检测器失效。
- **阶段一**：在无标注信号上以双注意力 Transformer 编码器做自监督 MAE 预训练。
- **阶段二**：多任务微调 → 直接二分类器（免阈值），含 HOS 增强注意力 + 小波正则化 + 调制/重构辅助任务。
- **NGSO–GSO（17,281 快照）**：AUC 0.9327，准确率 0.9251，F1 0.8351，误报率 0.0553（TrID 为 0.1763）。
- **NGSO–NGSO（7,450，Starlink/OneWeb）**：AUC 0.9085，F1 0.9055，调制分类 >90%。
- **鲁棒性**：跨 C/Ku/Ka 频段、离轴角、INR 泛化；优于 VAE/CNN-AE/TrID/能量检测。
- **新颖性**：免阈值检测、HOS 二阶注意力先验、小波多尺度保真损失。

## Why it matters / what's new (EN)
NGSO–GSO coexistence and interference management are a live regulatory and engineering issue (cf. the FR3 terrestrial/NTN coexistence work, cellular entry 2026-06-13). Agon contributes the detection side: a robust, threshold-free ML interference detector that works at the millisecond timescale where regulatory masks and reconstruction-error detectors break down, validated on both NGSO–GSO and NGSO–NGSO (Starlink/OneWeb) data across three bands. The HOS-augmented attention (pulling interference out from under the noise floor via second-order statistics) is the technically distinctive piece. It pairs with today's companion paper Aidos (2026-06-15) from the same Fudan Space Internet group — Aidos schedules the beams, Agon polices the resulting interference.

## Why it matters / what's new (ZH)
NGSO–GSO 共存与干扰管理是当下的监管与工程议题（参见 FR3 地面/NTN 共存工作，蜂窝条目 2026-06-13）。Agon 贡献了检测一侧：一个鲁棒、免阈值的 ML 干扰检测器，可在监管掩码与重构误差检测器失效的毫秒时间尺度上工作，并在 NGSO–GSO 与 NGSO–NGSO（Starlink/OneWeb）数据上跨三个频段验证。HOS 增强注意力（以二阶统计将干扰从噪声底之下提取出来）是技术上最具特色的部分。它与今日同组复旦空间互联网团队的姊妹论文 Aidos（2026-06-15）相配——Aidos 调度波束，Agon 监管由此产生的干扰。
