---
id: 2026-08-03_arxiv-gtgan-leo-data-synthesis
date_published: 2026-06-28
date_found: 2026-08-03
type: academic-paper
technology: satellite
title_en: "GT-GAN synthesizes missing LEO satellite-internet measurements — robust reconstruction even with 40% of observations gone (PIMRC 2026)"
title_zh: "GT-GAN 合成缺失的 LEO 卫星互联网测量数据——即使缺失 40% 观测仍稳健重建（PIMRC 2026）"
url: "https://arxiv.org/abs/2607.24790"
source_quality: abstract_only
topics: [LEO, GAN, dataset, measurement, generative-AI]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 2
---

## Summary (EN)

Shi and Hu (submitted 28 June 2026; accepted at IEEE PIMRC 2026, Singapore, 1–4 September) address a practical bottleneck in LEO satellite-internet research: real network observation datasets arrive riddled with missing values — sensor outages, link drops, collection gaps — which cripples data augmentation and prevents the community from building representative training corpora. The paper evaluates a generative-AI framework spanning GAN and VAE model families for synthesizing complete datasets from incomplete LEO network observations.

Testing on the WetLinks satellite-internet measurement dataset under realistic block-wise (contiguous outage) and point-wise (scattered loss) missing patterns, the GT-GAN model comes out on top across both regimes. Even with 40% of input data missing, GT-GAN keeps capturing the underlying distribution and degrades the least in generalization — the robustness result that gives the paper its practical value as guidance for augmentation pipelines in satellite network measurement research.

## Summary (ZH)

Shi 与 Hu（2026 年 6 月 28 日提交；已被 2026 年 9 月 1–4 日新加坡 IEEE PIMRC 2026 接收）针对 LEO 卫星互联网研究中的一个实际瓶颈：真实网络观测数据集充满缺失值——传感器故障、链路中断、采集空档——这使数据增广举步维艰，社区难以构建有代表性的训练语料。论文评估了横跨 GAN 与 VAE 模型家族的生成式 AI 框架，用于从不完整的 LEO 网络观测合成完整数据集。

在 WetLinks 卫星互联网测量数据集上，以现实的块状缺失（连续中断）与点状缺失（零散丢失）两种模式测试，GT-GAN 模型在两种模式下均表现最佳。即使输入数据缺失 40%，GT-GAN 仍能捕捉底层分布、泛化性能退化最小——这一稳健性结果使论文对卫星网络测量研究中的数据增广流水线具有实用指导价值。

## Key technical points (EN)

- Problem: LEO measurement datasets (e.g., WetLinks) are systematically incomplete, blocking augmentation and representative dataset construction.
- Framework compares GAN and VAE families under block-wise and point-wise missing-data patterns.
- GT-GAN wins both regimes; at 40% missing input it remains the most robust at capturing the true data distribution.
- Contribution positioned as empirical guidance for generative augmentation in satellite-network measurement studies.

## Key technical points (ZH)

- 问题：LEO 测量数据集（如 WetLinks）系统性不完整，阻碍数据增广与代表性数据集构建。
- 框架在块状与点状缺失模式下对比 GAN 与 VAE 模型家族。
- GT-GAN 在两种模式下均最佳；输入缺失 40% 时仍最稳健地捕捉真实数据分布。
- 贡献定位为卫星网络测量研究中生成式增广的实证指南。

## Why it matters / what's new (EN)

Measurement scarcity is a recurring complaint across the KB's LEO thread — the Starlink queuing dissection and LEO IoT papers all lean on a handful of public datasets. This is the first KB entry to treat the *dataset completeness* problem itself as the research object, and its GT-GAN robustness numbers give satellite-network ML work a defensible augmentation recipe. Worth pairing with the KB's LEO measurement entries when judging how far synthetic data can stretch limited observations.

## Why it matters / what's new (ZH)

测量数据稀缺是本库 LEO 主线反复出现的痛点——Starlink 排队剖析、LEO IoT 等论文都依赖少数公开数据集。本条目首次把「数据集完整性」问题本身作为研究对象，其 GT-GAN 稳健性数据为卫星网络机器学习工作提供了可辩护的增广配方。在评估合成数据能把有限观测拉伸多远时，值得与本库的 LEO 测量条目对照阅读。
