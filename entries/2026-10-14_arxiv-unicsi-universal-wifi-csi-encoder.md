---
id: 2026-10-14_arxiv-unicsi-universal-wifi-csi-encoder
date_published: 2026-10-07
date_found: 2026-10-14
technology: wifi
type: academic-paper
title_en: "UniCSI: Towards a Universal Wi-Fi CSI Encoder for Ubiquitous Human Sensing"
title_zh: "UniCSI：面向泛在人体感知的通用 Wi-Fi CSI 编码器"
url: "https://arxiv.org/abs/2610.09559"
source_quality: full
topics: [WiFi-sensing, CSI, foundation model, JEPA, cross-domain]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

UniCSI (Eckhoff, Kang, Chen, Chuai; arXiv 2610.09559, first submitted 7 October 2026) targets the way Wi-Fi channel state information (CSI) differs between devices in subcarrier count, bandwidth, carrier band and MIMO layout. The paper says existing approaches deal with this by zero-padding, resampling or per-device backbones, which waste capacity, distort the signal or prevent knowledge sharing, and argues that heterogeneity should be handled in the architecture rather than removed in preprocessing.

The model uses CSI amplitude only (phase is discarded because most public datasets release amplitude and raw phase needs chipset-specific sanitisation). A physics-informed RF tokenizer processes each antenna link separately: a 1D CNN runs per subcarrier and time windows are projected into tokens, with subcarrier count only setting sequence length. A spectral aggregator then lets Q learnable queries cross-attend to the subcarrier tokens, using positions given by the centred frequency offset normalised by half the bandwidth, and outputs a fixed-size latent that feeds a pre-norm Transformer encoder with band embedding and temporal encoding. Training is either supervised multi-task (a head per dataset) or self-supervised JEPA pretraining with an EMA target encoder.

Table 1 lists 25 public datasets, 16 of which form the pretraining corpus. The full 25-dataset collection spans 14 to 2048 subcarriers, 20 to 160 MHz, the 2.4 and 5 GHz bands and MIMO setups from 1x1 to 6x3 (530.2 hours); the pretraining corpus is 425.6 hours (391,277 measurements) after holdouts. Downstream tasks are activity recognition, pose estimation, gesture recognition, localisation, user authentication and fall detection. Reported results: across eight jointly trained HAR test sets, macro-F1 of 71.6% for UniCSI versus 62.4% for a zero-padded ViT; on the unseen-environment Exposing-CSI benchmark 32.5% versus 6.7% (padded ViT), 7.3% (resampled ViT) and 1.7% (ResNet); on XRF55 33.6% versus 22.9% for the strongest baseline. On SHARP, UniCSI is at 62.6% against 65.2% for the padded ViT, which the authors describe as within seed spread. With full fine-tuning, pretrained UniCSI averages 71.58% macro-F1 versus 67.97% from scratch and 60.68% for a pretrained padded ViT; with 5 labelled samples per class, average accuracy rises from 29.6% to 47.2% with pretraining. Removing the RF tokenizer lowers average accuracy from 73.3% to 63.5%; removing spectral aggregation lowers it to 71.7%.

## Summary (ZH)

UniCSI（Eckhoff、Kang、Chen、Chuai；arXiv 2610.09559，2026 年 10 月 7 日首次提交）针对不同设备的 Wi-Fi 信道状态信息（CSI）在子载波数量、带宽、载波频段和 MIMO 布局上的差异。论文指出，现有方法通常采用补零、重采样或按设备分别建模，这些做法会浪费模型容量、扭曲信号或阻碍知识共享；作者主张应在模型架构中处理这种异构性，而不是在预处理阶段消除它。

模型只使用 CSI 幅度（舍弃相位，原因是多数公开数据集只发布幅度，而原始相位需要针对芯片的校正）。物理启发的 RF 分词器逐天线链路处理：对每个子载波运行一维 CNN，并把时间窗口投影为 token，子载波数只决定序列长度。随后谱聚合器让 Q 个可学习查询对子载波 token 做交叉注意力，位置由以半带宽归一化的中心频率偏移给出，输出固定大小的潜在表示，再送入带频段嵌入与时间编码的 pre-norm Transformer 编码器。训练方式为监督多任务（每个数据集一个头），或采用带 EMA 目标编码器的自监督 JEPA 预训练。

表 1 列出 25 个公开数据集，其中 16 个构成预训练语料。完整的 25 个数据集覆盖 14 至 2048 个子载波、20 至 160 MHz 带宽、2.4 与 5 GHz 频段以及 1x1 至 6x3 的 MIMO 配置（共 530.2 小时）；扣除留出集后，预训练语料为 425.6 小时（391,277 条测量）。下游任务包括活动识别、姿态估计、手势识别、定位、用户认证和跌倒检测。报告结果：在联合训练的八个 HAR 测试集上，UniCSI 的宏平均 F1 为 71.6%，补零 ViT 为 62.4%；在未见环境的 Exposing-CSI 基准上为 32.5%，对比补零 ViT 6.7%、重采样 ViT 7.3%、ResNet 1.7%；在 XRF55 上为 33.6%，最强基线为 22.9%。在 SHARP 上 UniCSI 为 62.6%，补零 ViT 为 65.2%，作者称其在随机种子波动范围内。全量微调时，预训练 UniCSI 平均宏平均 F1 为 71.58%，从零训练为 67.97%，预训练的补零 ViT 为 60.68%；每类仅 5 个标注样本时，预训练使平均准确率由 29.6% 升至 47.2%。去掉 RF 分词器使平均准确率由 73.3% 降至 63.5%，去掉谱聚合则降至 71.7%。

## Key technical points (EN)

- Heterogeneity handled in the architecture: frequency position of each subcarrier given as a fractional place in the physical spectrum (centred offset over half-bandwidth), not an array index.
- Spectral aggregator compresses variable-length subcarrier sequences into a fixed Q x P latent; JEPA pretraining with 80% contiguous block masking.
- Pretraining corpus 425.6 h / 391,277 measurements (16 of the 25 datasets, 30-250 subcarriers); the full 25-dataset collection spans 14-2048 subcarriers, 20-160 MHz, 2.4/5 GHz and 1x1 to 6x3 MIMO (530.2 h).
- Headline results: 71.6% vs 62.4% macro-F1 (eight HAR sets); 32.5% vs 6.7%/7.3%/1.7% on Exposing-CSI; mixed on SHARP and FallDar (within seed noise per authors).
- Design choice: amplitude only. Stated caveats: baselines are controlled re-implementations rather than published checkpoints; absolute carrier-frequency encoding is future work.

## Key technical points (ZH)

- 在架构层处理异构性：每个子载波的频率位置用其在物理频谱中的相对位置（以半带宽归一化的中心偏移）表示，而非数组索引。
- 谱聚合器把变长子载波序列压缩为固定的 Q x P 潜在表示；JEPA 预训练采用 80% 的连续块掩码。
- 预训练语料 425.6 小时 / 391,277 条测量（25 个数据集中的 16 个，30-250 个子载波）；完整的 25 个数据集覆盖 14-2048 个子载波、20-160 MHz、2.4/5 GHz 及 1x1 至 6x3 MIMO（530.2 小时）。
- 主要结果：八个 HAR 集宏平均 F1 为 71.6% 对 62.4%；Exposing-CSI 上为 32.5% 对 6.7%/7.3%/1.7%；SHARP 与 FallDar 上结果互有高低（作者称在种子波动范围内）。
- 设计选择：仅用幅度。论文自述的限定：基线为受控复现实现而非公开检查点；绝对载频编码留待未来工作。

## Why it matters / what's new (EN)

Within the sensing-csi bin this is a cross-device encoder paper, related to the KB's cross-domain CSI entry 2026-09-17_arxiv-cross-domain-rssi-csi-localization, which also addresses moving models between measurement setups. The paper positions itself against fixed-grid prior foundation models (resampling or index-based positional embeddings). Its evidence is a set of benchmark comparisons with re-implemented baselines, and several differences are inside seed noise, so the gains are best read as the authors' reported results.

## Why it matters / what's new (ZH)

在 sensing-csi 主题中，这是一篇跨设备编码器论文，与本库的跨域 CSI 条目 2026-09-17_arxiv-cross-domain-rssi-csi-localization 相关，后者同样涉及在不同测量设置间迁移模型。论文把自己与固定网格的既有基础模型（重采样或基于索引的位置嵌入）相对照。其证据是与复现基线的基准对比，且部分差异处于种子噪声范围内，因此应将增益视为作者报告的结果。

## Images

![UniCSI pipeline overview (Fig. 1) | UniCSI 流程总览（图 1）](https://arxiv.org/html/2610.09559v1/pipeline_overview.png)
