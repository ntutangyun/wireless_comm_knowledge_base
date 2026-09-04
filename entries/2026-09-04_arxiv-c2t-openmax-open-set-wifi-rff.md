---
id: 2026-09-04_arxiv-c2t-openmax-open-set-wifi-rff
date_published: 2026-09-02
date_found: 2026-09-04
technology: wifi
type: academic-paper
title_en: "C²T-OpenMax: A Novel Open-Set WiFi RF Fingerprinting Method via Center Constrained Learning and Confidence-Guided Tail Modeling"
title_zh: "C²T-OpenMax：一种基于中心约束学习与置信度引导尾部建模的开集 WiFi 射频指纹识别方法"
url: "https://arxiv.org/abs/2609.02007"
source_quality: full
topics: [RF-fingerprint, device-authentication, open-set-recognition, CSI, 802.11]
topic_primary: security-privacy
topics_secondary: [ai-for-wifi]
novelty_score: 2
---

## Summary (EN)

Yuanyu Zhang, Junjie Yang, Ji He, Shuangrui Zhao, Lele Zheng and Yulong Shen (Xidian University) propose C²T-OpenMax, an open-set radio-frequency fingerprinting (RFF) method for WiFi device authentication from Channel State Information (CSI). Open-set RFF must both correctly classify devices seen during training and reject devices never seen before — a requirement that closed-set classifiers cannot satisfy, since real deployments routinely encounter unregistered or unknown transmitters. The paper's stated problem is specific to combining OpenMax-style open-set recognition with data augmentation: augmentation improves generalization but produces correctly-classified training samples with dispersed classification confidence, and the authors state that augmentation "may yield dispersed, low-confidence known-class representations that distort the class statistics used by OpenMax" — namely the Mean Activation Vector (MAV) and Weibull tail distributions that OpenMax fits per class to decide whether a test sample belongs to a known class or should be rejected as unknown.

The method has two components layered on top of a standard closed-set classifier. First, center-constrained learning adds a center-loss term (pulling each sample's feature vector toward a per-class center) to the cross-entropy training objective, producing a hybrid loss that improves intra-class feature compactness. Second, confidence-guided tail modeling changes how the OpenMax statistics are built after training: instead of using all correctly classified training samples, the method filters to only those classified with confidence above a threshold (delta = 0.8), and computes the per-class Mean Activation Vector and fits the Weibull tail distribution (on the top 5% of mixed Euclidean-cosine distances) using only this high-confidence, screened subset. The authors frame these two mechanisms as acting on different things — center loss reshapes the feature-space geometry during training, while confidence screening refines which samples are trusted to build the post-hoc open-set statistics — and describe them as complementary rather than substitutable.

The method is evaluated on the public DeepCRF WiFi CSI dataset (measurements across nine locations over roughly one year, covering line-of-sight/non-line-of-sight, static/dynamic and indoor/outdoor conditions), following DeepCRF's own data partitioning and augmentation (channel simulation plus Gaussian noise injection). Two experimental settings are used: a cross-location generalization setting (15 known devices, 4 unknown devices, trained on two locations and tested across all nine) and an increasing-openness setting (12 known devices, with the number of unknown devices swept from 1 to 7, corresponding to openness levels of 2.02% to 12.01%).

## Summary (ZH)

西安电子科技大学的 Yuanyu Zhang、Junjie Yang、Ji He、Shuangrui Zhao、Lele Zheng 与 Yulong Shen 提出了 C²T-OpenMax，一种基于信道状态信息（CSI）的开集 WiFi 设备射频指纹（RFF）认证方法。开集 RFF 既要正确识别训练中见过的设备，又要拒识从未见过的设备——这是闭集分类器无法满足的要求，因为实际部署中经常会遇到未注册或未知的发射端。论文明确指出其问题聚焦于 OpenMax 式开集识别与数据增强结合时产生的困难：数据增强提升了泛化能力，但也会产生分类正确、但置信度分散的训练样本，作者指出，数据增强可能导致已知类别的表征变得分散、置信度降低，从而扭曲 OpenMax 所依赖的类别统计量——即 OpenMax 为每个类别拟合的均值激活向量（MAV）与 Weibull 尾部分布，而这两者正是判断测试样本属于已知类别还是应被拒识为未知类别的依据。

该方法在标准闭集分类器之上叠加两个组件。第一，中心约束学习在交叉熵训练目标中加入中心损失项（将每个样本的特征向量拉向其所属类别的中心），形成混合损失，以提升类内特征的紧凑性。第二，置信度引导的尾部建模改变了训练之后构建 OpenMax 统计量的方式：不再使用全部被正确分类的训练样本，而是仅筛选出分类置信度高于阈值（delta = 0.8）的样本，并仅用这一高置信度的筛选子集来计算每类的均值激活向量、并对欧氏-余弦混合距离的前 5% 拟合 Weibull 尾部分布。作者将这两个机制描述为作用于不同环节——中心损失在训练阶段重塑特征空间几何结构，置信度筛选则决定哪些样本可被信任用于构建训练后的开集统计量——并称二者互补而非可相互替代。

该方法在公开的 DeepCRF WiFi CSI 数据集（覆盖九个地点、约一年时间跨度的测量，涵盖视距/非视距、静态/动态、室内/室外条件）上评测，沿用了 DeepCRF 自身的数据划分与增强方式（信道仿真加高斯噪声注入）。实验设置分两种：跨地点泛化设置（15 个已知设备、4 个未知设备，训练于两个地点、在全部九个地点上测试），以及开放度递增设置（12 个已知设备，未知设备数从 1 递增到 7，对应开放度从 2.02% 到 12.01%）。

## Key technical points (EN)

- **Problem framed by the authors**: combining OpenMax-based open-set recognition with data augmentation is unreliable because augmentation-induced low-confidence-but-correct samples distort the per-class Mean Activation Vector and Weibull tail fit that OpenMax depends on.
- **Center-constrained learning**: adds a center-loss term to the cross-entropy objective (hybrid loss weighted by lambda = 0.005) to pull each class's feature vectors toward a learned per-class center, improving intra-class compactness.
- **Confidence-guided tail modeling**: after training, only correctly classified samples with confidence above delta = 0.8 are used to compute the Mean Activation Vector and fit the Weibull tail (top 5% of mixed Euclidean-cosine distances) for each class — replacing the "use all correctly classified samples" convention of standard OpenMax.
- **Dataset**: public DeepCRF WiFi CSI dataset, nine locations (P1-P9) over about one year, LOS/NLOS, static/dynamic, indoor/outdoor; DeepCRF's own partitioning and augmentation protocol reused.
- **Cross-location results (Table 1)**: C²T-OpenMax achieves the highest accuracy of all compared methods (MSP, OpenMax, CSSR, ARPL) in 7 of 8 location groups, and beats OpenMax in all 8, e.g. 95.70% at P1-P2 (+9.80 percentage points over OpenMax's 85.90%), 90.26% at P5 (+21.08 pp), 93.46% at P8 (+18.34 pp); at P4 it is beaten by CSSR (86.37%) and ARPL (84.32%), which the authors attribute to severe multipath.
- **Increasing-openness results**: at the largest tested openness (12 known / 7 unknown devices), C²T-OpenMax reaches 95.91% accuracy, 0.9905 AUROC and 0.9860 OSCR — a +12.31 percentage-point accuracy gain, +0.0887 AUROC and +0.0856 OSCR over the augmented OpenMax baseline.
- **Ablation (12-known/7-unknown setting)**: center-constrained learning alone contributes +4.65 pp accuracy; confidence-guided screening alone contributes +7.13 pp; the two combined contribute +12.31 pp (95.91% vs. an 83.60% augmented-OpenMax baseline) — the authors present this as evidence the two mechanisms are complementary.
- **Authors' stated contributions** (their wording): (1) identifying that low-confidence correctly-classified samples under augmentation destabilize OpenMax's known-class modeling; (2) introducing center-constrained learning to improve intra-class feature compactness; (3) proposing confidence-guided tail modeling that restricts MAV/Weibull construction to high-confidence samples.

## Key technical points (ZH)

- **作者界定的问题**：将 OpenMax 式开集识别与数据增强结合并不可靠，因为增强引入的"分类正确但置信度低"的样本会扭曲 OpenMax 所依赖的每类均值激活向量与 Weibull 尾部拟合。
- **中心约束学习**：在交叉熵目标中加入中心损失项（混合损失，权重 lambda = 0.005），将每个类别的特征向量拉向该类的学习中心，以提升类内紧凑性。
- **置信度引导的尾部建模**：训练完成后，仅使用分类置信度高于 delta = 0.8 且分类正确的样本来计算每类的均值激活向量、并对欧氏-余弦混合距离的前 5% 拟合 Weibull 尾部分布——取代标准 OpenMax "使用全部正确分类样本" 的做法。
- **数据集**：公开的 DeepCRF WiFi CSI 数据集，九个地点（P1-P9），时间跨度约一年，涵盖视距/非视距、静态/动态、室内/室外条件；沿用 DeepCRF 自身的数据划分与增强方案。
- **跨地点结果（表 1）**：在所测的 8 个地点组中，C²T-OpenMax 在其中 7 组取得所有对比方法（MSP、OpenMax、CSSR、ARPL）中的最高准确率，且在全部 8 组均优于 OpenMax，例如 P1-P2 组 95.70%（较 OpenMax 的 85.90% 提升 9.80 个百分点）、P5 组 90.26%（提升 21.08 个百分点）、P8 组 93.46%（提升 18.34 个百分点）；在 P4 组被 CSSR（86.37%）和 ARPL（84.32%）超过，作者将其归因于严重的多径效应。
- **开放度递增结果**：在测试的最大开放度下（12 个已知、7 个未知设备），C²T-OpenMax 达到 95.91% 准确率、0.9905 AUROC 与 0.9860 OSCR，相对经数据增强的 OpenMax 基线提升 12.31 个百分点的准确率、0.0887 的 AUROC 与 0.0856 的 OSCR。
- **消融实验（12 已知/7 未知设置）**：仅中心约束学习贡献 +4.65 个百分点准确率；仅置信度筛选贡献 +7.13 个百分点；二者结合贡献 +12.31 个百分点（95.91% 对比 83.60% 的经数据增强 OpenMax 基线）——作者以此作为二者互补的证据。
- **作者陈述的贡献**（原文表述）：（1）指出数据增强下低置信度但分类正确的样本会破坏 OpenMax 的已知类别建模；（2）引入中心约束学习以提升类内特征紧凑性；（3）提出置信度引导的尾部建模，将 MAV/Weibull 构建限制在高置信度样本上。

## Why it matters / what's new (EN)

This KB's security-privacy bin already carries a general theory of RF-fingerprint authentication (`2026-08-12_arxiv-rff-authentication-theory-framework`) and an open-set signal-identification method for overlapping 802.11 transmissions (`2026-08-12_arxiv-whitenet-overlapping-80211-signal-id`). C²T-OpenMax adds a third, complementary data point specifically on the open-set *device-authentication* task (as opposed to overlapping-signal identification or a pure theoretical framework): it targets a concrete failure mode — augmentation making standard OpenMax's known-class statistics unreliable — and reports a systematic ablation isolating the two proposed fixes' individual and combined contributions.

## Why it matters / what's new (ZH)

本知识库的 security-privacy 主题下已有一篇通用的射频指纹认证理论框架条目（`2026-08-12_arxiv-rff-authentication-theory-framework`）以及一篇面向重叠 802.11 信号识别的开集方法条目（`2026-08-12_arxiv-whitenet-overlapping-80211-signal-id`）。C²T-OpenMax 补充了第三个互补数据点，专门针对开集*设备认证*任务（区别于重叠信号识别或纯理论框架）：它针对一个具体的失效模式——数据增强使标准 OpenMax 的已知类别统计量变得不可靠——并给出了系统性消融实验，分离出所提两项改进各自及组合的贡献。

## Images

![C2T-OpenMax motivation diagram: augmentation-induced low-confidence correct samples distorting OpenMax known-class modeling | C2T-OpenMax 动机示意图：数据增强导致的低置信度正确样本扭曲 OpenMax 已知类别建模](https://arxiv.org/html/2609.02007v1/frame.png)
![C2T-OpenMax training framework: center-constrained learning plus confidence-guided tail modeling | C2T-OpenMax 训练框架：中心约束学习与置信度引导尾部建模](https://arxiv.org/html/2609.02007v1/Figures/fig1.png)
