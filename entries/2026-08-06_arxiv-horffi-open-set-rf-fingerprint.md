---
id: 2026-08-06_arxiv-horffi-open-set-rf-fingerprint
date_published: 2026-08-05
date_found: 2026-08-06
type: academic-paper
title_en: "HoRFFI: High-Openness RF Fingerprint Identification with a Similarity-Enhanced Variational Information Bottleneck"
title_zh: "HoRFFI：基于相似度增强变分信息瓶颈的高开放度射频指纹识别"
url: "https://arxiv.org/abs/2608.04881"
source_quality: abstract_only
topics: [RF-fingerprint, device-authentication, machine-learning, security, 802.11]
topic_primary: security-privacy
topics_secondary: [ai-for-wifi]
novelty_score: 2
---

## Summary (EN)
HoRFFI (Zeng, Shen, Zhang, Shen, Tan, Song; arXiv 5 Aug 2026, submitted to IEEE INFOCOM 2026; routed from the cs.CR security sweep) addresses **open-set RF Fingerprint Identification (RFFI)** — physical-layer device authentication from hardware-imperfection signatures in the transmitted signal. The practical problem it targets is "openness": a deployed authenticator must not only recognise enrolled devices but also **reject unknown devices it was never trained on**, and it must do so with only limited labelled training data. Closed-set RFFI models that assume every test device was seen during training fail badly in this regime.

The method's core is a **Similarity-Enhanced Variational Information Bottleneck (SVIB)** supervision mechanism. The variational information bottleneck compresses the learned representation to retain only device-discriminative information while discarding nuisance variation; the similarity-enhancement term shapes that representation so that novel/unknown classes are better separated, improving transferability to devices and conditions outside the training set. This is what lets the system perform unknown-device rejection with limited labels.

Evaluated on public **LoRa and Wi-Fi** RFFI datasets, HoRFFI reports gains over baselines in novel-class accuracy and AUC (the open-set discrimination metrics). The paper is a submission (not yet an acceptance) and the abstract does not name specific device models or give absolute accuracy numbers beyond the relative improvement claims.

## Summary (ZH)
HoRFFI（Zeng、Shen、Zhang、Shen、Tan、Song；2026 年 8 月 5 日提交 arXiv，投稿 IEEE INFOCOM 2026；经 cs.CR 安全扫描路由）研究**开放集射频指纹识别（RFFI）**——利用发射信号中硬件缺陷特征进行物理层设备认证。它针对的实际问题是"开放度"：部署中的认证器不仅要识别已注册设备，还必须**拒绝从未训练过的未知设备**，且只能使用有限的标注训练数据。假设每个测试设备在训练时都见过的闭集 RFFI 模型在此场景下表现很差。

方法核心是**相似度增强变分信息瓶颈（SVIB）**监督机制。变分信息瓶颈压缩所学表示，仅保留设备判别性信息、丢弃无关变化；相似度增强项塑造该表示，使新颖/未知类别更易分离，从而提升对训练集之外设备与条件的迁移性。这正是系统能以有限标注实现未知设备拒识的原因。

在公开的 **LoRa 与 Wi-Fi** RFFI 数据集上评测，HoRFFI 在新颖类准确率与 AUC（开放集判别指标）上较基线取得提升。该论文为投稿（尚未接收），摘要除相对提升论断外未给出具体设备型号或绝对准确率数字。

## Key technical points (EN)
- **Task:** open-set RFFI — authenticate enrolled devices *and* reject unknown/unseen ones, with limited labelled data.
- **SVIB:** variational information bottleneck (discard nuisance, keep device-discriminative features) + a similarity-enhancement term that improves novel-class separation and transferability.
- **Datasets:** public LoRa and Wi-Fi RFFI datasets; metrics are novel-class accuracy and AUC.
- **Status:** submitted to IEEE INFOCOM 2026 (not yet accepted); abstract-level detail only.

## Key technical points (ZH)
- **任务：** 开放集 RFFI——认证已注册设备*并*拒绝未知/未见设备，且标注数据有限。
- **SVIB：** 变分信息瓶颈（丢弃无关信息、保留设备判别特征）+ 提升新颖类分离与迁移性的相似度增强项。
- **数据集：** 公开 LoRa 与 Wi-Fi RFFI 数据集；指标为新颖类准确率与 AUC。
- **状态：** 投稿 IEEE INFOCOM 2026（尚未接收）；仅摘要级细节。

## Why it matters / what's new (EN)
The KB already has a CSI-based RF-fingerprinting entry (CSI-RFF, ~99% with 20 measurements) that operates in the closed-set, high-signal regime. HoRFFI is a different point on the design space: it is **open-set / high-openness** — the harder, more deployable problem of rejecting devices you never enrolled — and it is a general RFFI representation-learning method validated on both Wi-Fi and LoRa rather than a Wi-Fi-CSI-specific technique. Its novelty is moderate (variational-information-bottleneck RFFI has prior art; the similarity-enhancement + openness framing is the new increment), hence novelty 2. Relevant as the defender-side counterpart to the growing set of Wi-Fi identification/de-anonymisation work in the security-privacy bin.

## Why it matters / what's new (ZH)
KB 中已有一条基于 CSI 的射频指纹条目（CSI-RFF，20 次测量约 99%），其工作于闭集、高信噪比场景。HoRFFI 处于设计空间的不同位置：它是**开放集/高开放度**的——即拒绝从未注册设备这一更难、更贴近部署的问题——且是一种在 Wi-Fi 与 LoRa 上均验证的通用 RFFI 表示学习方法，而非专用于 Wi-Fi CSI 的技术。其新颖性为中等（变分信息瓶颈 RFFI 已有前作；相似度增强 + 开放度框架是新增量），故 novelty 2。作为 security-privacy bin 中日益增多的 Wi-Fi 识别/去匿名工作的防御方对应物，具有相关性。
