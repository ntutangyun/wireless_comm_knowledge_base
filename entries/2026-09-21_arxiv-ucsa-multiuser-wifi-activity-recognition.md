---
id: 2026-09-21_arxiv-ucsa-multiuser-wifi-activity-recognition
date_published: 2026-09-18
date_found: 2026-09-21
type: academic-paper
technology: wifi
title_en: "WiFi based Multi-user Activity Recognition via User-Conditioned Spatial Attention"
title_zh: "基于用户条件空间注意力的 WiFi 多用户活动识别"
url: "https://arxiv.org/abs/2609.21530"
source_quality: full
topics: [WiFi-sensing, 802.11bf, CSI]
topic_primary: sensing-csi
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

This paper (Chenhan Yuan, Ruijing Liu, Cunhua Pan; National Mobile Communications Research Laboratory, Southeast University; submitted 18 Sep 2026) tackles WiFi CSI-based activity recognition when **multiple users are present in the same room at the same time**. The authors' stated problem is that concurrent users' body-reflected propagation paths superimpose in the CSI measurement, so a single CSI trace mixes signal contributions from several people at once. They argue that existing decomposition-based approaches suffer from error propagation, and that existing attention-based approaches compute one user-agnostic attention map that blends patterns from different users together rather than separating them.

The proposed model has two building blocks. The first, User-Conditioned Spatial Attention (UCSA), generates a *separate* spatial attention map per user slot: a shared base attention map is computed from the backbone features, and for each user slot a learnable user-ID embedding is projected into feature-wise linear modulation (FiLM) scale and shift parameters that modulate that base map, producing a distinct attention map per user. The second, a shareable multi-semantic spatial attention (SMSA) module the authors adopt from prior work [13], exploits the anisotropic structure of the CSI image (one axis is subcarrier frequency, the other is time) by expanding the input to 16 channels and applying depthwise 1-D convolutions along each axis at multiple kernel sizes (3/5/7/9), which the authors say captures patterns from fine-grained local gestures up to full-body movement while reducing attention-computation complexity from O((H×W)²) to O(H²+W²).

Evaluation uses the public WiMANS dataset (3×3 MIMO, 5 GHz, 20 MHz channel, 30 active subcarriers, CSI-ratio phase-difference images; three indoor environments — classroom, empty room, meeting room; five participants, nine activities, five fixed locations) with a ResNet-18 backbone. Against nine baselines spanning classical ML (a random-forest variant), shallow nets (MLP, 1-D/2-D CNN), recurrent/attention hybrids (CLSTM, ABLSTM) Transformers (THAT) and an InceptionTime-Attention variant (ITA), the full model reaches over 93% average accuracy across the three environments with up to five concurrent users, and in the meeting-room 5-user setting beats the strongest baseline (89.5%) by 3.8 points (93.30%). An ablation on the same 5-user setting shows both modules contribute: removing SMSA costs 7.6 points, removing UCSA costs 5.2 points, and removing both costs 10.1 points versus the full model.

## Summary (ZH)

本文（Chenhan Yuan、Ruijing Liu、Cunhua Pan，东南大学移动通信国家重点实验室，2026 年 9 月 18 日提交）研究的问题是：当同一房间内**同时存在多名用户**时，如何基于 WiFi CSI 进行活动识别。作者指出，多个用户的人体反射传播路径会在 CSI 测量中相互叠加，导致单条 CSI 轨迹混合了多人的信号贡献；现有基于信号分解的方法存在误差传播问题，而现有的注意力方法只计算一张与用户无关的注意力图，会把不同用户的模式混在一起，无法区分。

论文提出两个模块。第一个是用户条件空间注意力（UCSA）：先从骨干网络特征计算出一张共享的基础空间注意力图，再为每个用户槽位用一个可学习的用户 ID 嵌入向量，通过特征级线性调制（FiLM）生成缩放和偏移参数，对基础注意力图进行调制，从而为每个用户生成独立的注意力图。第二个是论文沿用已有工作 [13] 的多语义空间注意力模块（SMSA），利用 CSI 图像本身的各向异性结构（一个坐标轴是子载波频率，另一个是时间），将输入通道扩展到 16 个，并沿每个坐标轴分别用 3/5/7/9 等多种卷积核尺寸做深度可分离一维卷积，用于同时捕捉从细粒度局部手势到全身运动的多尺度模式，同时将注意力计算复杂度从 O((H×W)²) 降到 O(H²+W²)。

实验基于公开数据集 WiMANS（3×3 MIMO、5 GHz 频段、20 MHz 信道、30 个有效子载波，输入为 CSI 比值相位差图像；三个室内场景——教室、空房间、会议室；五名参与者、九种活动、五个固定位置），骨干网络为 ResNet-18。与九种基线方法（经典机器学习的随机森林变体、MLP/一维和二维 CNN 等浅层网络、CLSTM/ABLSTM 等循环注意力混合模型，以及 Transformer（THAT）与 InceptionTime-Attention 变体（ITA））相比，完整模型在三个场景、最多五名并发用户的条件下平均准确率超过 93%；在会议室五用户场景下，比最强基线（89.5%）高 3.8 个百分点，达到 93.30%。同一场景下的消融实验显示两个模块均有贡献：去掉 SMSA 掉 7.6 个百分点，去掉 UCSA 掉 5.2 个百分点，两者都去掉则掉 10.1 个百分点。

## Key technical points (EN)

- Problem framed explicitly as multi-user CSI superposition, not single-user recognition: concurrent users' reflected paths blend in one CSI trace.
- UCSA: shared base spatial attention + per-user-slot FiLM (learnable user-ID embedding → scale/shift) → distinct attention map per user.
- SMSA: 3→16 channel expansion, depthwise 1-D convolutions along the subcarrier axis and the time axis separately, kernel sizes {3,5,7,9}; attention complexity reduced from O((H×W)²) to O(H²+W²).
- Dataset: WiMANS — 3×3 MIMO, 5 GHz, 20 MHz, 30 active subcarriers, CSI-ratio phase-difference images; 3 environments, 5 users, 9 activities, 5 fixed locations.
- Backbone: pretrained ResNet-18; 50 epochs, batch size 16, Adam lr=1e-3, dropout 0.5, 224×224 input images.
- Meeting-room, 5-user accuracy: proposed 93.30% vs strongest baseline (ITA) 89.5%, vs weakest (ST-RF) 56.2%.
- Ablation (5-user meeting room): full 93.30%; −SMSA 85.69%; −UCSA 88.07%; −both 83.21%. A ground-truth-position-embedding variant reaches 94.29% but with higher variance (σ=3.19), i.e. less stable.

## Key technical points (ZH)

- 问题被明确表述为多用户 CSI 叠加问题，而非单用户识别问题：并发用户的反射路径会混合在同一条 CSI 轨迹中。
- UCSA：共享基础空间注意力 + 每个用户槽位的 FiLM 调制（可学习用户 ID 嵌入 → 缩放/偏移参数）→ 为每个用户生成独立注意力图。
- SMSA：通道数从 3 扩展到 16，沿子载波轴和时间轴分别做深度可分离一维卷积，卷积核尺寸为 {3,5,7,9}；注意力计算复杂度从 O((H×W)²) 降到 O(H²+W²)。
- 数据集：WiMANS——3×3 MIMO、5 GHz、20 MHz、30 个有效子载波，CSI 比值相位差图像；3 个场景、5 名用户、9 种活动、5 个固定位置。
- 骨干网络：预训练 ResNet-18；训练 50 轮，批大小 16，Adam 学习率 1e-3，Dropout 0.5，输入图像 224×224。
- 会议室五用户场景准确率：所提方法 93.30%，最强基线（ITA）89.5%，最弱基线（ST-RF）56.2%。
- 消融实验（会议室五用户）：完整模型 93.30%；去掉 SMSA 后 85.69%；去掉 UCSA 后 88.07%；两者都去掉 83.21%。使用真实位置嵌入的变体可达 94.29%，但方差更大（σ=3.19），稳定性较差。

## Why it matters / what's new (EN)

The KB's existing sensing-csi entries mostly cover single-user gesture/activity/health sensing or measurement-consistency auditing (e.g. 2026-08-19_arxiv-argus-csi-statgram-person-id, 2026-08-19_arxiv-rfcheck-synthetic-csi-measurement-audit). This paper's contribution is specifically to the **multi-concurrent-user** case on the public WiMANS benchmark, and its ablation isolates how much of the gain comes from per-user attention conditioning (UCSA) versus the frequency/time-axis attention restructuring (SMSA) — a level of mechanism detail (FiLM-based per-user modulation, O(H²+W²) attention) not previously represented in this KB's sensing-csi bin.

## Why it matters / what's new (ZH)

KB 现有的 sensing-csi 条目大多聚焦单用户手势/活动/健康感知，或测量一致性审计（如 2026-08-19_arxiv-argus-csi-statgram-person-id、2026-08-19_arxiv-rfcheck-synthetic-csi-measurement-audit）。本文的贡献专门针对公开 WiMANS 基准上的**多并发用户**场景，其消融实验清晰区分了增益来自按用户条件调制的注意力（UCSA）还是频率/时间轴注意力结构重设计（SMSA）——这种机制层面的细节（基于 FiLM 的按用户调制、O(H²+W²) 复杂度的注意力）此前在本知识库的 sensing-csi 主题下尚未出现。

## Images

![System architecture of the UCSA + SMSA multi-user WiFi activity recognition model | UCSA + SMSA 多用户 WiFi 活动识别模型的系统架构图](https://arxiv.org/html/2609.21530v1/overall_framework.png)
