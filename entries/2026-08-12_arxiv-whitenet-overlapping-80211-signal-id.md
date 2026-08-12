---
id: 2026-08-12_arxiv-whitenet-overlapping-80211-signal-id
date_published: 2026-08-06
date_found: 2026-08-12
type: academic-paper
title_en: "WhiteNet: Robust Identification of Overlapping IEEE 802.11 Signals Across Unseen Channels"
title_zh: "WhiteNet：跨未见信道的重叠 IEEE 802.11 信号稳健识别"
url: "https://arxiv.org/abs/2608.06581"
source_quality: full
topics: [spectrum-monitoring, signal-classification, deep-learning, 802.11, security]
topic_primary: security-privacy
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)
WhiteNet (Ildi Alla, Vincent Lenders; arXiv 6 Aug 2026, routed from the cs.CR security sweep) tackles a practical spectrum-monitoring problem: a deep-learning classifier that identifies which IEEE 802.11 protocols are present in an overlapping (co-channel) capture works well when the test channel matches training, but collapses when deployed under different propagation conditions. Prior classifiers (T-PRIME, ResNet, CV-TRN) can look strong in-distribution yet fall apart on a genuinely held-out channel. WhiteNet closes most of that gap without needing any target-condition data.

The core idea is **spectral whitening**, a physics-grounded preprocessing step with no learned parameters. It exploits a scale separation: the wireless channel's frequency response |H(f)|² varies slowly (coherence bandwidth >1 MHz indoors), while the protocol-discriminative structure (OFDM subcarrier spacing, guard intervals) lives at the tens-to-hundreds-of-kHz scale. WhiteNet estimates the channel-dominated power spectral envelope by circular moving-average smoothing of the received spectrum, applies a noise floor to avoid amplifying deep fades, divides it out, and inverse-transforms back to whitened I/Q. This suppresses the slow channel envelope while preserving the fast modulation signature — derived entirely from the observation itself, no channel knowledge required. Measured spectral-envelope divergence across sessions drops 55× (3.45 dB → 0.063 dB), and a t-SNE of the network's bottleneck shows session separability falling from 88.9% to 59.4%, confirming the representation became channel-invariant.

To avoid expensive multi-transmitter field collection, the authors build a **synthetic overlap mixer** that composites realistic co-channel signals from single-protocol over-the-air captures: per-transmitter impairments (multipath, carrier frequency offset, spectral tilt) are applied before summation, and shared receiver impairments (anti-aliasing filter, phase noise, AGC with soft clipping, I/Q imbalance, DC offset) after — the receiver nonlinearity creating intermodulation products that naive linear addition misses. A U-Net encoder–decoder with a non-local attention bottleneck is trained through a five-phase curriculum (synthetic single → real single → synthetic overlap → bandwidth-scaled overlap → real overlap with progressive stochastic whitening).

On an entirely unseen session (S3), exact-match accuracy at 25% overlap rises +26.0 points (47.6% → 73.6%) and the in-distribution-to-held-out gap narrows from 40.0 to 8.0 points — at 889K parameters, giving 2.3× the held-out accuracy of T-PRIME (73.6% vs 32.2%) with **7.7× fewer parameters**. Two-phase knowledge distillation yields edge models down to 10K parameters (3.1 ms / 33.7 mJ on a Jetson), with the 604K "Edge-L" retaining 84% of teacher accuracy.

## Summary (ZH)
WhiteNet（Ildi Alla、Vincent Lenders；2026 年 8 月 6 日 arXiv，经 cs.CR 安全扫描路由）解决一个实际的频谱监测问题：识别重叠（同信道）采样中存在哪些 IEEE 802.11 协议的深度学习分类器，在测试信道与训练一致时表现良好，但部署到不同传播条件下会急剧退化。既有分类器（T-PRIME、ResNet、CV-TRN）在同分布下看似很强，在真正留出的信道上却崩溃。WhiteNet 在无需任何目标条件数据的前提下弥合了大部分差距。

核心是**谱白化（spectral whitening）**——一个无学习参数、基于物理的预处理步骤。它利用尺度分离：无线信道频响 |H(f)|² 变化缓慢（室内相干带宽 >1 MHz），而协议判别性结构（OFDM 子载波间隔、保护间隔）存在于数十至数百 kHz 尺度。WhiteNet 通过对接收谱做循环滑动平均估计信道主导的功率谱包络，施加噪声门限以避免放大深衰落，将其除去，再逆变换回白化 I/Q。这抑制了缓慢的信道包络、保留了快速的调制特征，且完全从观测自身导出，无需信道先验。跨会话谱包络散度下降 55 倍（3.45 dB → 0.063 dB），瓶颈特征的 t-SNE 显示会话可分性从 88.9% 降至 59.4%，证实表示已变得信道不变。

为避免昂贵的多发射机现场采集，作者构建了**合成重叠混合器**，从单协议空口采样合成逼真的同信道信号：先施加每发射机损伤（多径、载波频偏、谱倾斜）再求和，然后施加共享接收机损伤（抗混叠滤波、相位噪声、带软削波的 AGC、IQ 失衡、直流偏置），接收机非线性产生的互调分量是朴素线性叠加所缺失的。一个带非局部注意力瓶颈的 U-Net 编解码器通过五阶段课程训练。

在完全未见的会话（S3）上，25% 重叠下精确匹配准确率提升 +26.0 个百分点（47.6% → 73.6%），同分布到留出的差距从 40.0 收窄至 8.0 个百分点——参数量 889K，留出准确率达 T-PRIME 的 2.3 倍（73.6% vs 32.2%），而**参数少 7.7 倍**。两阶段知识蒸馏得到最小 10K 参数的边缘模型（Jetson 上 3.1 ms / 33.7 mJ）。

## Key technical points (EN)
- **Problem:** channel-robust multi-label 802.11 protocol identification in overlapping captures, without target-domain data.
- **Spectral whitening:** parameter-free preprocessing that divides out the slow channel envelope (estimated by circular moving-average smoothing + noise floor) while preserving subcarrier-scale modulation; exploits channel-coherence-vs-subcarrier scale separation. Defaults (W=256, δ=−30 dB) need no tuning (broad ablation plateaus).
- **Synthetic overlap mixer:** per-TX impairments before summation + shared-RX impairments (incl. soft clipping ℛ(x)=κ·tanh(x/κ)) after; receiver nonlinearity critical (+26 pp vs naive addition).
- **Model:** U-Net encoder–decoder, non-local attention bottleneck, multi-label per-protocol sigmoid over {11ax, 11b, 11g, 11n}; 5-phase training curriculum with progressive stochastic whitening in the final real-overlap phase.
- **Results:** held-out OV25 exact-match 47.6%→73.6% (+26 pp); 2.3× T-PRIME accuracy with 7.7× fewer params (889K); envelope divergence −55×; distillation to 10K-param edge models (Jetson 3.1 ms / 33.7 mJ).

## Key technical points (ZH)
- **问题：** 无目标域数据下，重叠采样中的信道稳健多标签 802.11 协议识别。
- **谱白化：** 无参数预处理，除去缓慢信道包络（循环滑动平均 + 噪声门限估计）、保留子载波尺度调制；利用信道相干带宽与子载波尺度分离。默认 W=256、δ=−30 dB 无需调参。
- **合成重叠混合器：** 求和前每发射机损伤 + 求和后共享接收机损伤（含软削波 κ·tanh(x/κ)）；接收机非线性关键（较朴素叠加 +26 pp）。
- **模型：** U-Net 编解码器 + 非局部注意力瓶颈 + 多标签 per-协议 sigmoid（{11ax, 11b, 11g, 11n}）；五阶段课程，最终真实重叠阶段渐进随机白化。
- **结果：** 留出 OV25 精确匹配 47.6%→73.6%（+26 pp）；准确率为 T-PRIME 的 2.3 倍且参数少 7.7 倍（889K）；包络散度 −55×；蒸馏至 10K 参数边缘模型（Jetson 3.1 ms / 33.7 mJ）。

## Why it matters / what's new (EN)
The KB's security-privacy and RF-identification cluster has mostly covered *device*-level fingerprinting (CSI-RFF closed-set; `2026-08-06_arxiv-horffi-open-set-rf-fingerprint` open-set) and de-anonymisation. WhiteNet is a different point on the map: *protocol*-level overlap identification for wideband spectrum monitoring, where the hard part is channel robustness across unseen environments rather than device identity. Its contribution is methodological and unusually transferable — a parameter-free, physics-grounded whitening front-end that any I/Q classifier could adopt, plus a synthetic-overlap generation recipe that reduces dependence on costly multi-transmitter OTA campaigns, and a distillation path to 10K-parameter edge sensors. The held-out evaluation discipline (a genuinely separate session, not augmentation-based domain shift) is stronger than most prior work in this niche, which is what lifts it to novelty 3.

## Why it matters / what's new (ZH)
KB 的 security-privacy 与射频识别簇此前多覆盖*设备*级指纹（CSI-RFF 闭集；`2026-08-06_arxiv-horffi-open-set-rf-fingerprint` 开集）与去匿名。WhiteNet 处于不同位置：面向宽带频谱监测的*协议*级重叠识别，难点在于跨未见环境的信道稳健性而非设备身份。其贡献在方法论且异常可迁移——无参数、基于物理的白化前端可被任意 I/Q 分类器采用，合成重叠生成配方降低对昂贵多发射机空口采集的依赖，并给出到 10K 参数边缘传感器的蒸馏路径。其留出评测规范（真正独立的会话，而非基于增广的域偏移）强于该细分领域多数前作，故 novelty 3。

## Images
![WhiteNet concept: channel conditions reshape the spectrum and cause misclassification (a); spectral whitening removes the channel envelope while preserving protocol-discriminative features (b) | WhiteNet 概念：信道条件重塑频谱导致误分类（a）；谱白化除去信道包络并保留协议判别特征（b）](https://arxiv.org/html/2608.06581v1/x1.png)
![System overview: single-protocol OTA captures are synthetically mixed with per-transmitter impairments, then spectrally whitened before multi-label classification | 系统概览：单协议空口采样合成混合每发射机损伤，再谱白化后做多标签分类](https://arxiv.org/html/2608.06581v1/x3.png)
![Whitening effect: spectral-envelope divergence across sessions drops 3.45 dB → 0.063 dB (a); t-SNE bottleneck session separability drops 88.9% → 59.4% (b) | 白化效果：跨会话谱包络散度 3.45 dB → 0.063 dB（a）；瓶颈 t-SNE 会话可分性 88.9% → 59.4%（b）](https://arxiv.org/html/2608.06581v1/x4.png)
