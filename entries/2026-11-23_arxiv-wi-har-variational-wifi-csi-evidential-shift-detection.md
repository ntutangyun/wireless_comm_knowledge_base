---
id: 2026-11-23_arxiv-wi-har-variational-wifi-csi-evidential-shift-detection
date_published: 2026-11-18
date_found: 2026-11-23
technology: wifi
type: academic-paper
title_en: "From Activity Recognition to Shift Detection: Variational Wi-Fi Sensing with Evidential Uncertainty (Wi-HAR)"
title_zh: "从活动识别到偏移检测：基于变分自编码器与证据不确定性的 Wi-Fi 感知（Wi-HAR）"
url: "https://arxiv.org/abs/2611.24596"
source_quality: full
topics: [WiFi-sensing, CSI, 802.11ax, activity recognition, VAE, out-of-distribution detection, evidential deep learning]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

The paper (Cotti, Cominelli, Gringoli et al.; University of Brescia, Politecnico di Milano, US Army DEVCOM ARL, AFRL and others; arXiv 2611.24596, cs.LG, submitted 18 Nov 2026) proposes Wi-HAR, a multi-antenna architecture for device-free human activity recognition from Wi-Fi 6 (802.11ax) CSI magnitudes. Four antenna-specific Variational Auto-Encoders each map raw CSI magnitudes to a compact Gaussian latent representation (2 to 12 distribution parameters per antenna), and a delayed-fusion classifier combines their means and log-variances.

On twelve activities from a public benchmark, Wi-HAR reaches 96.6% median accuracy, against 70.8-81.5% for independently optimised single-antenna models. The ablation compares single antennas with a "fusion of best" variant (a classifier trained on the latents of independently optimised single-antenna VAEs, 93.8% median) and with Wi-HAR, where the VAEs and classifier are optimised end to end.

The second part uses the same latent backbone to flag deployment shifts. The paper compares a Softmax head with Evidential Deep Learning (EDL) and a Generative Evidential Neural Network (GEN), and builds a class-conditional score that measures how unusual a prediction's uncertainty is relative to training samples assigned to the same activity. Across eleven datasets that change receiver position, participant, recording session or room, the EDL score reaches a macro-average ROC-AUC of 0.897 (GEN 0.821, Softmax 0.662) and detects 82.5% of shifted samples at a realised 5.2% in-distribution rejection rate. Shifted samples are not used for model selection or calibration.

The authors report that detection varies substantially across receiver positions, so the same physical change does not give a uniform uncertainty response, and that the scalar score cannot say which physical factor changed. A separate analysis fits a depth-four decision tree on the latent means and log-variances, reaching 96.5% accuracy on six activities using variables from several antennas.

## Summary (ZH)

论文（Cotti、Cominelli、Gringoli 等；布雷西亚大学、米兰理工、美国陆军 DEVCOM ARL、空军研究实验室等；arXiv 2611.24596，cs.LG，2026 年 11 月 18 日提交）提出 Wi-HAR：一种基于 Wi-Fi 6（802.11ax）CSI 幅度的多天线免设备人体活动识别架构。四个按天线划分的变分自编码器（VAE）各自把原始 CSI 幅度映射为紧凑的高斯潜变量（每根天线仅 2 至 12 个分布参数），再由延迟融合分类器综合各自的均值与对数方差。

在公开基准的 12 种活动上，Wi-HAR 的中位识别准确率为 96.6%，而独立优化的单天线模型为 70.8-81.5%。消融实验还对比了“最佳单天线融合”（在独立优化的单天线 VAE 潜变量上训练分类器，中位 93.8%）与 Wi-HAR（VAE 与分类器端到端联合优化）。

第二部分利用同一潜变量骨干检测部署偏移。论文比较了 Softmax 头、证据深度学习（EDL）与生成式证据神经网络（GEN），并构造类条件分数，衡量某次预测的不确定性相对于同一活动类别训练样本的异常程度。在改变接收机位置、参与者、采集时段或房间的 11 个数据集上，EDL 分数的宏平均 ROC-AUC 为 0.897（GEN 0.821，Softmax 0.662），在实际 5.2% 的分布内拒绝率下检出 82.5% 的偏移样本；模型选择与校准均未使用偏移样本。

作者指出，检测效果在不同接收机位置之间差异显著，即同一种物理变化不会产生一致的不确定性响应，且该标量分数无法指出究竟是哪一种物理因素发生了变化。另有一项独立分析在潜变量均值与对数方差上拟合深度为 4 的决策树，在 6 种活动上达到 96.5% 准确率，且使用了来自多根天线的变量。

## Key technical points (EN)

- Architecture: four antenna-specific VAEs on raw Wi-Fi 6 CSI magnitudes; fused classifier uses latent means and log-variances; 2 to 12 latent parameters per antenna.
- Recognition: 96.6% median accuracy on twelve activities; single-antenna models 70.8-81.5%; fusion of independently optimised models 93.8%; the best single-antenna model has a median below 85%, and some single-antenna runs fall to about 60%.
- Shift score: class-conditional two-sided uncertainty score; EDL macro-average ROC-AUC 0.897 over eleven shift scenarios, highest AUC in nine of eleven; 82.5% of shifted samples detected at a 5.2% in-distribution rejection rate.
- A paired Bayesian bootstrap with a region of practical equivalence gives a mean EDL advantage over GEN of 0.0757 AUC (95% credible interval 0.058-0.093); EDL and GEN are practically equivalent in some individual scenarios and GEN is clearly better in one.
- Stated limitation: the score does not identify which physical factor caused the shift.

## Key technical points (ZH)

- 架构：对原始 Wi-Fi 6 CSI 幅度使用四个按天线划分的 VAE；融合分类器使用潜变量均值与对数方差；每根天线 2 至 12 个潜参数。
- 识别：12 种活动中位准确率 96.6%；单天线模型 70.8-81.5%；独立优化模型融合为 93.8%；最佳单天线模型中位准确率低于 85%，部分单天线运行跌至约 60%。
- 偏移分数：类条件双侧不确定性分数；EDL 在 11 个偏移场景上的宏平均 ROC-AUC 为 0.897，其中 9 个场景 AUC 最高；在 5.2% 分布内拒绝率下检出 82.5% 的偏移样本。
- 配对贝叶斯自助法（含实际等价区域）给出 EDL 相对 GEN 的平均优势为 0.0757 AUC（95% 可信区间 0.058-0.093）；个别场景下两者实际等价，另有一个场景 GEN 明显更优。
- 文中自述的局限：该分数无法识别偏移由哪种物理因素引起。

## Why it matters / what's new (EN)

This paper pairs recognition with an explicit deployment-shift signal evaluated over eleven position, participant, session and room changes. Other CSI-based HAR work in the KB includes [2026-09-23_arxiv-graw-zero-knowledge-wifi-har-adversarial-attack](2026-09-23_arxiv-graw-zero-knowledge-wifi-har-adversarial-attack.md) (an adversarial attack on HAR classifiers); cross-domain robustness in Wi-Fi RF fingerprinting is covered in [2026-11-19_arxiv-gsdf-capc-null-subcarrier-rffi-80211ag-cross-domain](2026-11-19_arxiv-gsdf-capc-null-subcarrier-rffi-80211ag-cross-domain.md). The evaluation uses an existing public Wi-Fi 6 CSI benchmark rather than a new dataset, and the authors release their code.

## Why it matters / what's new (ZH)

本文把识别与显式的部署偏移信号结合，并在 11 种位置、参与者、时段与房间变化上进行评估。KB 中其他基于 CSI 的 HAR 工作包括 [2026-09-23_arxiv-graw-zero-knowledge-wifi-har-adversarial-attack](2026-09-23_arxiv-graw-zero-knowledge-wifi-har-adversarial-attack.md)（针对 HAR 分类器的对抗攻击）；Wi-Fi 射频指纹识别的跨域鲁棒性见 [2026-11-19_arxiv-gsdf-capc-null-subcarrier-rffi-80211ag-cross-domain](2026-11-19_arxiv-gsdf-capc-null-subcarrier-rffi-80211ag-cross-domain.md)。评估基于现有公开 Wi-Fi 6 CSI 基准而非新数据集，作者公开了代码。

## Images

![Room layout of the CSI collection setup | CSI 采集环境的房间布局](https://arxiv.org/html/2611.24596v1/room-layout.png)
![Wi-HAR confusion matrix | Wi-HAR 混淆矩阵](https://arxiv.org/html/2611.24596v1/wi_har_confusion_matrix.png)
