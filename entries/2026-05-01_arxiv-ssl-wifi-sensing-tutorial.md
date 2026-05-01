---
id: 2026-05-01_arxiv-ssl-wifi-sensing-tutorial
date_found: 2026-05-01
date_published: 2025-06-15
type: academic-paper
title_en: "A Tutorial-cum-Survey on Self-Supervised Learning for Wi-Fi Sensing: Trends, Challenges, and Outlook"
title_zh: "自监督学习用于 Wi-Fi 感知的综述与教程：趋势、挑战与展望"
url: "https://arxiv.org/abs/2506.12052"
source_quality: full
topics: [WiFi-sensing, generative-AI]
novelty_score: 3
---

## Summary (EN)

A combined tutorial + survey on **self-supervised learning (SSL)** for Wi-Fi CSI sensing — the now-dominant strategy for getting useful sensing models out of the limited labeled CSI data the field actually has. The paper organises the SSL design space into contrastive, generative, and predictive families, maps which Wi-Fi sensing tasks (proximity, occupancy, activity, breathing, gesture) each family handles best, and outlines the open problems where SSL is failing to close the labeled-data gap.

The piece is positioned as a citation backbone for any subsequent Wi-Fi sensing paper that uses SSL — which by 2025 is essentially all of them. Authors highlight cross-environment generalisation, label-noise robustness, and computational cost on edge devices as the three open frontiers.

## Summary (ZH)

针对 **自监督学习（SSL）** 用于 Wi-Fi CSI 感知的综合教程 + 综述。SSL 已经成为该领域应对"有标注 CSI 数据少"的主流策略。论文把 SSL 设计空间划分为对比式、生成式、预测式三族，映射出哪些 Wi-Fi 感知任务（接近检测、占用检测、活动识别、呼吸监测、手势）由哪一族应对最佳，并梳理出 SSL 在哪些方向仍未能弥合标注数据缺口。

本文定位为后续任何使用 SSL 的 Wi-Fi 感知论文的引用骨干 —— 到 2025 年几乎所有这类工作都使用 SSL。作者把跨环境泛化、标签噪声鲁棒性、边缘设备的计算成本列为三个开放前沿。

## Key technical points (EN)

- Three SSL families surveyed: contrastive, generative, predictive
- Task-family pairing: which SSL works best for which sensing task
- Open frontiers: cross-environment generalisation, label noise, edge cost

## Key technical points (ZH)

- 综述三族 SSL：对比式、生成式、预测式
- 任务-方法配对：哪种 SSL 最适合哪类感知任务
- 开放前沿：跨环境泛化、标签噪声、边缘计算成本

## Why it matters / what's new (EN)

- **Field-defining tutorial.** Wi-Fi sensing has converged on SSL; this paper is the canonical reference for newcomers and for citation-completeness.
- **Pairs with WUKONG (`2026-05-01_arxiv-wukong-neuro-wideband-sensing.md`) and IBIS (`2026-05-01_arxiv-ibis-csi-bandwidth-constrained.md`):** both papers are SSL-flavoured CSI methods; this survey is the methodological context.

## Why it matters / what's new (ZH)

- **领域定义性教程。** Wi-Fi 感知已经收敛到 SSL；本论文是新人入门与引用完整性的标准参考。
- **与 WUKONG（`2026-05-01_arxiv-wukong-neuro-wideband-sensing.md`）和 IBIS（`2026-05-01_arxiv-ibis-csi-bandwidth-constrained.md`）形成搭配：** 二者都是 SSL 风味的 CSI 方法；本综述提供方法论背景。
