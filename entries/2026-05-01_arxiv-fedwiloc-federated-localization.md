---
id: 2026-05-01_arxiv-fedwiloc-federated-localization
date_found: 2026-05-01
date_published: 2025-12-22
type: academic-paper
title_en: "FedWiLoc: Federated Learning for Privacy-Preserving WiFi Indoor Localization"
title_zh: "FedWiLoc：保护隐私的 Wi-Fi 室内定位联邦学习方案"
url: "https://arxiv.org/abs/2512.18207"
source_quality: full
topics: [WiFi-sensing, security, agentic-AI]
novelty_score: 3
---

## Summary (EN)

FedWiLoc (December 2025, submitted to MobiSys '26) makes the case that production indoor-localization deployments don't need to centralise raw RSS / CSI data to train a usable model. The system trains a localization model under federated learning across multiple physical environments — each device contributes gradient updates only, never the underlying observations — and reports **median localization error of 55 cm** with **90th-percentile error of 155 cm** across a multi-site evaluation.

The technical contribution is the federation strategy. Indoor localization models are notoriously environment-specific (a model trained in lab A doesn't work in office B). FedWiLoc handles this with a federation scheme that preserves cross-environment transferability without leaking which environment any individual gradient came from.

## Summary (ZH)

FedWiLoc（2025 年 12 月，投稿 MobiSys '26）论证：生产级室内定位部署并不需要把原始 RSS / CSI 数据集中到一处才能训练可用模型。该系统在多个物理环境间用联邦学习训练定位模型 —— 每台设备只贡献梯度更新，不上传原始观测 —— 在多场景评测中报告**中位定位误差 55 cm，第 90 百分位误差 155 cm**。

技术贡献在于联邦策略。室内定位模型出了名的"环境强相关"（实验室 A 训练的模型在办公室 B 用不了）。FedWiLoc 用一种保持跨环境迁移性的联邦方案应对，同时不会泄露每条梯度来自哪个具体环境。

## Key technical points (EN)

- Federated training across multiple physical environments
- Median error 55 cm; 90th-percentile error 155 cm
- Privacy-preserving: only gradients leave the device
- MobiSys '26 submission

## Key technical points (ZH)

- 跨多个物理环境的联邦训练
- 中位误差 55 cm；第 90 百分位 155 cm
- 隐私保护：设备只外传梯度
- 投稿 MobiSys '26

## Why it matters / what's new (EN)

- **Privacy-positioning intersection is concrete now.** Combined with the FTM-security paper (`2026-05-01_arxiv-secure-wifi-ranging-az-bk.md`), the 2026 indoor-positioning research agenda has security & privacy as first-class concerns.
- **Federated localisation that actually transfers.** Most prior FL-localisation work fails when deployed across heterogeneous environments. The 55 cm number across multi-site evaluation is the first credible cross-site federated result.

## Why it matters / what's new (ZH)

- **隐私 + 定位交叉点已经具体化。** 加上 FTM 安全论文（`2026-05-01_arxiv-secure-wifi-ranging-az-bk.md`），2026 年室内定位研究议程已经把安全与隐私列为一等议题。
- **真正具备迁移性的联邦定位。** 此前大多数联邦定位工作在跨异构环境时失败。多场景评测下 55 cm 中位误差是首批可信的跨场景联邦结果。
