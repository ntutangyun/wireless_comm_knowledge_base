---
id: 2026-05-03_arxiv-multiuser-wifi-sensing-counting
date_published: 2026-04-17
date_found: 2026-05-03
type: academic-paper
title_en: "From User Recognition to Activity Counting: An Identity-Agnostic Approach to Multi-User WiFi Sensing"
title_zh: "从身份识别到活动计数 —— 面向多用户 Wi-Fi 感知的身份无关方法"
url: "https://arxiv.org/abs/2604.16572"
source_quality: full
topics: [802.11bf, WiFi-sensing, MAC-layer]
topic_primary: sensing-csi
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Bayik et al. (arxiv 2604.16572, Apr 2026) reformulate the multi-user Wi-Fi-sensing problem from "who did what" to "how many people did each thing." Instead of assigning observed activities to identified individuals — the historical framing — they treat scene composition as a counting regression problem over Channel State Information (CSI). CSI tensors are projected into a spatial representation, encoded by a pretrained convolutional backbone, and consumed by an identity-agnostic regression head that estimates per-activity occupancy.

The key empirical finding is robustness under previously-unseen users: the identity-dependent baseline's macro-F1 collapses from 80.38 to 32.61 when test users were absent from training, while the identity-agnostic counting head maintains stable error (mean absolute error 0.1081 on a 0–5 count scale). The approach reuses ordinary 802.11 CSI without requiring new on-the-wire primitives.

## Summary (ZH)

Bayik 等人（arxiv 2604.16572，2026 年 4 月）把多用户 Wi-Fi 感知问题从"谁做了什么"重新建模为"几个人各自做了什么"。传统做法是把观测到的活动归到识别出来的具体人，本文则把场景成分视作 CSI 上的计数回归问题：把 CSI 张量投影成空间表示，过预训练卷积主干网络，最后由身份无关的回归头估计"每类活动的人数"。

关键经验结论是对未见用户的鲁棒性：身份相关基线的 macro-F1 在测试用户不在训练集时从 80.38 跌到 32.61，而身份无关计数头保持稳定（0–5 计数范围上 MAE 0.1081）。方法复用普通 802.11 CSI，不引入新的空口原语。

## Key technical points (EN)

- Reformulation: per-activity user-count regression replaces per-user activity classification.
- Input: standard 802.11 CSI tensors → spatial projection → pretrained convolutional encoder.
- Reports robust generalisation to unseen users; identity-dependent baselines collapse on this split.
- Reuses existing CSI; no new IE, MLME, or frame-level mechanism.

## Key technical points (ZH)

- 重新建模：用「按活动计人数」的回归取代「按用户分活动」的分类。
- 输入：标准 802.11 CSI 张量 → 空间投影 → 预训练卷积编码器。
- 在未见用户场景下展现强泛化；身份相关基线在该划分上崩溃。
- 复用既有 CSI；不引入新 IE / MLME / 帧级机制。

## Why it matters / what's new (EN)

Extends the existing KB threads `arxiv-multiband-passive-sensing` (MilaGro multiband fusion) and `arxiv-ssl-wifi-sensing-tutorial` (self-supervised CSI). Where those works improve the *receiver-side* model on a fixed sensing target, this paper changes the *target itself* — from identification to counting — which is the right relaxation for many real deployments (offices, classrooms) where per-person identity is privacy-sensitive or operationally irrelevant.

The mechanism is purely algorithmic; the on-the-wire footprint is identical to standards-compliant CSI exchange. Implementations differentiate via the choice of encoder backbone, training data composition, and the counting-head architecture — none of which leave a fingerprint in packet captures.

## Why it matters / what's new (ZH)

延伸 KB 现有两条线索：`arxiv-multiband-passive-sensing`（MilaGro 多频段融合）与 `arxiv-ssl-wifi-sensing-tutorial`（自监督 CSI）。它们在固定感知目标下改进*接收端模型*；本文则改变*目标本身* —— 从身份识别变为人数计数。这在很多真实部署场景（办公室、教室）中是合理放宽：个人身份要么涉及隐私、要么对运营无意义。

机制完全算法化；空口足迹与标准兼容的 CSI 交换无差别。实现差异在编码器主干选型、训练数据组成、计数头结构 —— 这些都不会在抓包中留下指纹。
