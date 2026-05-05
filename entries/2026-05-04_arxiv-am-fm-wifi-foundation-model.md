---
id: 2026-05-04_arxiv-am-fm-wifi-foundation-model
date_published: 2026-02-04
date_found: 2026-05-04
type: academic-paper
title_en: "AM-FM — A Foundation Model for Ambient Intelligence Through WiFi (9.2M CSI samples, 20 device types, 439 days)"
title_zh: "AM-FM —— 面向 WiFi 环境智能的基础模型（920 万 CSI 样本 / 20 种设备 / 439 天）"
url: "https://arxiv.org/abs/2602.11200"
source_quality: full
topics: [WiFi-sensing, 802.11bf, agentic-AI]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 5
---

## Summary (EN)

Zhu, Hu, Jayaweera, Gao, Wang, Zhang, Wang, Wu, and Liu (arXiv 2602.11200, posted 4 February 2026) introduce **AM-FM**, claimed as the **first foundation model for ambient intelligence and sensing through WiFi**. Where prior CSI-sensing work in this KB (`arxiv-ssl-wifi-sensing-tutorial`, `arxiv-multiband-passive-sensing`, `arxiv-wukong-neuro-wideband-sensing`) has been task-specific (presence detection, breathing, activity), AM-FM is a single pre-trained backbone designed to transfer across the full WiFi-sensing task family.

The pre-training corpus is the load-bearing piece: **9.2 million unlabeled CSI samples**, collected over **439 days** across **20 commercial WiFi device types** deployed in real-world environments worldwide. That scale dwarfs prior CSI datasets — most previous CSI-deep-learning papers use thousands or tens of thousands of samples from one or two AP types in a single lab. The training objective combines three losses: contrastive learning (instance discrimination across CSI segments), masked reconstruction (BERT-style on CSI subcarriers / time), and **physics-informed objectives** that encode prior structure of the wireless channel (e.g. multipath geometry, Doppler statistics) so the model doesn't have to rediscover them from data.

Downstream evaluation runs nine tasks — presence, motion, activity, vitals, identification, etc. — and reports better data efficiency than task-specific baselines. The implicit message is that **labeled-data scarcity has been the main blocker for WiFi-sensing productisation, and a generic CSI backbone trained at internet scale solves most of it**. This is the FM-style paradigm shift that the language and vision communities went through 2018-2022, applied to WiFi.

## Summary (ZH)

Zhu、Hu、Jayaweera、Gao、Wang、Zhang、Wang、Wu、Liu（arXiv 2602.11200，2026 年 2 月 4 日提交）提出 **AM-FM**，声称为**面向 WiFi 的第一个环境智能与感知基础模型**。本 KB 中的既有 CSI 感知工作（`arxiv-ssl-wifi-sensing-tutorial`、`arxiv-multiband-passive-sensing`、`arxiv-wukong-neuro-wideband-sensing`）多为任务特定（在场检测、呼吸、动作），而 AM-FM 是一个统一的预训练主干，目标是迁移到全部 WiFi 感知任务族。

预训练语料是关键：**920 万条无标注 CSI 样本**，跨 **20 种商用 WiFi 设备类型**、**439 天**在真实部署环境采集。这一规模远超既有 CSI 数据集 —— 多数 CSI 深度学习论文只用单一实验室内一两种 AP 的数千 / 数万样本。训练目标结合三种损失：对比学习（CSI 片段间的实例判别）、掩码重建（在子载波 / 时间维做 BERT 式重建）、以及**物理先验目标**（编码无线信道的多径几何、Doppler 统计等结构），让模型不必从数据里重新发现这些。

下游评估涵盖 9 项任务（在场、运动、动作、生命体征、身份等），数据效率优于任务特定基线。其隐含信号是：**标签稀缺是 WiFi 感知产品化的最大阻碍，而一个互联网规模训练的通用 CSI 主干能解决其中绝大部分**。这正是 2018-2022 年语言与视觉社区经历的 FM 范式转换，被搬到了 WiFi 上。

## Key technical points (EN)

- 9.2M unlabeled CSI samples, 439 days, 20 commercial device types, worldwide.
- Three pre-training objectives: contrastive + masked-reconstruction + physics-informed.
- Generic CSI backbone, transferred to 9 downstream sensing tasks.
- Substantially better label-efficiency on downstream tasks vs task-specific baselines.
- Architecture choices that respect CSI structure (subcarrier dimension is meaningful, not interchangeable).

## Key technical points (ZH)

- 920 万无标注 CSI 样本，439 天，20 种商用设备，全球分布。
- 三类预训练目标：对比 + 掩码重建 + 物理先验。
- 通用 CSI 主干，迁移到 9 项下游感知任务。
- 在下游任务上的标签效率显著优于任务特定基线。
- 架构尊重 CSI 结构（子载波维有物理含义，不可任意置换）。

## Why it matters / what's new (EN)

This is the most consequential WiFi-sensing paper in the past six months tracked by this KB. Where `arxiv-ssl-wifi-sensing-tutorial` argued for self-supervised representation learning *in principle*, AM-FM operationalises it at internet scale. Three downstream consequences worth flagging: (1) the 802.11bf sensing task group's benchmarking work (`arxiv-bf-ax-coexistence-ns3`, `arxiv-multiband-passive-sensing`) now has a strong external baseline to compare against; (2) on-device sensing (the line behind `arxiv-on-device-llm-roaming` etc.) gets a much smaller fine-tune target than retraining task heads from scratch; (3) the privacy posture of pervasive CSI collection becomes a more pressing question — a foundation model trained on 9.2M global CSI samples raises the same surveillance-leakage debates that the CV/NLP community has been having about web-scale corpora.

## Why it matters / what's new (ZH)

这是本 KB 近半年所追踪的 WiFi 感知中最具分量的一篇。`arxiv-ssl-wifi-sensing-tutorial` 在理论上主张了自监督表征学习的必要性，AM-FM 把它在互联网级别落地了。三条下游影响值得标记：(1) 802.11bf 感知任务组的基准工作（`arxiv-bf-ax-coexistence-ns3`、`arxiv-multiband-passive-sensing`）现在有了一个强外部对照；(2) 端侧感知（`arxiv-on-device-llm-roaming` 等线背后的方向）的微调目标变小很多，无需从头训练任务头；(3) 全网 CSI 采集的隐私问题变得更紧迫 —— 用 920 万全球 CSI 样本训练的基础模型会引发与 CV/NLP 社区在网级语料上同样的监控泄漏争论。
