---
id: 2026-10-23_arxiv-trajectory-guided-tokenization-complex-csi-wifi-sensing
date_published: 2026-10-05
date_found: 2026-10-23
technology: wifi
type: academic-paper
title_en: "Trajectory-Guided Tokenization of Complex CSI for Wi-Fi Sensing"
title_zh: "面向 Wi-Fi 感知的复数 CSI 轨迹引导分词"
url: "https://arxiv.org/abs/2610.06288"
source_quality: full
topics: [Wi-Fi sensing, CSI, tokenization, presence detection, gesture recognition, cross-domain generalization]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

Ziyi Wang and ten co-authors (affiliations TU Berlin, Huawei Heisenberg Research Center Munich, Huawei Technologies Shanghai and TU Munich) propose Trajectory-Guided Tokenization (TGT), a complex-CSI tokenizer trained jointly with the downstream sensing model (submitted 5 October 2026). The paper treats CSI tokenization as a representation-learning problem: encoding complex-valued, high-dimensional CSI time series into compact continuous tokens that support presence detection and gesture recognition and generalise across environments.

Each subcarrier's short, ordered sequence of I/Q values in a temporal patch is viewed as a trajectory in the complex plane. An orthonormal Helmert transform splits every patch, per antenna link and subcarrier, into a local centre (the complex mean) and centred-trajectory coordinates; the inverse recovers the ordered I/Q patch, so no information is lost. Routing keys for subcarrier aggregation are learned only from the centred-trajectory coordinates (standardised, passed through a shared two-layer MLP, plus a sinusoidal subcarrier-index encoding), while the values retain both the centres and the trajectories. Learnable queries then compress subcarriers into frequency slots by asymmetric cross-attention, mean pooling combines antenna links, and the slots are fused into one 256-dimensional token per temporal patch. The stated reasoning is that similar temporal variations can occur around different local centres that vary across acquisition conditions, so using uncentred trajectories to set aggregation weights could make them sensitive to centre shifts, while discarding the centres entirely could lose useful context.

Evaluation uses three datasets with four backends (TokenMLP, Transformer-3, BiGRU, 1D ResNet18) trained from scratch for 30 epochs with AdamW, against four frontends (Amp-Patch, IQ-Patch, AP-Patch, ConvPatch). The self-collected presence dataset is 157 GB of CSI from campaigns in several cities (monostatic, three antenna links, 1,024 subcarriers at 80 MHz, 200 Hz) with room-disjoint splits (143/68/93 recordings from 7/3/4 rooms). TGT with TokenMLP reaches 92.83% mean accuracy versus 86.65% for ConvPatch with the same backend; on EHUNAM presence detection TGT reaches 90.44% versus 74.23% for AP-Patch, the strongest baseline with that backend; on Widar3.0 cross-room gesture recognition (six classes, six receivers at 1 kHz) TGT with ResNet18 reaches 72.14% versus 62.20% for ConvPatch. The paper notes that ConvPatch does better than TGT with BiGRU and Transformer-3 on the self-collected set, that IQ-Patch is below Amp-Patch with Transformer-3 and ResNet18 (64.82% versus 69.95%), and that AP-Patch is lowest with all four backends. TGT has 264.2k, 67.0k and 236.1k parameters for the three datasets. An ablation (w/o Helmert, w/ Key Center, w/o V Center) is reported in Table 1; the paper states that removing the centre from the values lowers mean accuracy.

## Summary (ZH)

Ziyi Wang 及十位合作者（柏林工业大学、华为慕尼黑 Heisenberg 研究中心、华为上海、慕尼黑工业大学）提出轨迹引导分词（Trajectory-Guided Tokenization，TGT），一种与下游感知模型联合训练的复数 CSI 分词器（2026 年 10 月 5 日提交）。论文把 CSI 分词视为表示学习问题：将复数、高维的 CSI 时间序列编码为紧凑的连续 token，以支持存在检测和手势识别并跨环境泛化。

每个子载波在一个时间块内的短序列 I/Q 值被看作复平面上的一条轨迹。正交 Helmert 变换对每条天线链路、每个子载波的每个时间块，将其拆分为局部中心（复数均值）与中心化轨迹坐标；逆变换可恢复有序的 I/Q 块，因此不丢信息。用于子载波聚合的路由键只由中心化轨迹坐标学习得到（标准化后经共享的两层 MLP，再加正弦子载波索引编码），而值则同时保留中心与轨迹。随后，可学习的查询通过非对称交叉注意力把子载波压缩为频率槽，对天线链路做均值池化，并把这些槽融合为每个时间块一个 256 维 token。论文给出的理由是：相似的时间变化可能出现在随采集条件变化的不同局部中心周围，用未中心化的轨迹决定聚合权重可能使权重对中心偏移敏感，而完全去掉中心又可能丢失有用的上下文。

评估使用三个数据集、四种后端（TokenMLP、Transformer-3、BiGRU、1D ResNet18，均从头训练 30 个 epoch，AdamW），与四种前端（Amp-Patch、IQ-Patch、AP-Patch、ConvPatch）对比。自采存在检测数据集为 157 GB 的 CSI，来自多个城市的采集活动（单站式、3 条天线链路、80 MHz 下 1,024 个子载波、200 Hz），按房间划分训练/验证/测试（来自 7/3/4 个房间的 143/68/93 条记录）。TGT 搭配 TokenMLP 的平均准确率为 92.83%，相同后端下 ConvPatch 为 86.65%；在 EHUNAM 存在检测上，TGT 达 90.44%，该后端下最强基线 AP-Patch 为 74.23%；在 Widar3.0 跨房间手势识别（6 类，6 个接收机，1 kHz）上，TGT 搭配 ResNet18 达 72.14%，ConvPatch 为 62.20%。论文同时指出，在自采数据集上 ConvPatch 搭配 BiGRU 和 Transformer-3 时优于 TGT，IQ-Patch 在 Transformer-3 和 ResNet18 下低于 Amp-Patch（64.82% 对 69.95%），而 AP-Patch 在全部四种后端下最低。TGT 在三个数据集上的参数量分别为 264.2k、67.0k 和 236.1k。论文表 1 给出了消融实验（w/o Helmert、w/ Key Center、w/o V Center），并称去掉值中的中心会降低平均准确率。

## Key technical points (EN)

- Helmert decomposition of each I/Q patch into local complex mean and centred-trajectory coordinates (invertible, orthonormal, fixed).
- Asymmetric frequency routing: keys from centred trajectories only; values keep centre plus trajectory; learnable queries compress subcarriers into frequency slots; one 256-dimensional token per temporal patch.
- Self-collected presence data: 157 GB, 1,024 subcarriers at 80 MHz, 200 Hz, room-disjoint splits; EHUNAM: 241 subcarriers, 100 Hz; Widar3.0: 30 subcarriers per link, 1 kHz, six gesture classes.
- Headline results: 92.83% (self-collected, TokenMLP), 90.44% (EHUNAM, TokenMLP), 72.14% (Widar3.0, ResNet18); baselines ConvPatch 86.65%, AP-Patch 74.23%, ConvPatch 62.20% respectively.
- Baseline ranking varies by backend (ConvPatch ahead of TGT with BiGRU and Transformer-3 on the self-collected set).
- Model size 264.2k / 67.0k / 236.1k parameters.

## Key technical points (ZH)

- 对每个 I/Q 时间块做 Helmert 分解，得到局部复数均值与中心化轨迹坐标（可逆、正交、固定）。
- 非对称频率路由：键仅来自中心化轨迹；值同时保留中心与轨迹；可学习查询把子载波压缩为频率槽；每个时间块输出一个 256 维 token。
- 自采存在检测数据：157 GB，80 MHz 下 1,024 个子载波，200 Hz，按房间划分；EHUNAM：241 个子载波，100 Hz；Widar3.0：每条链路 30 个子载波，1 kHz，6 类手势。
- 主要结果：92.83%（自采，TokenMLP）、90.44%（EHUNAM，TokenMLP）、72.14%（Widar3.0，ResNet18）；对应基线分别为 ConvPatch 86.65%、AP-Patch 74.23%、ConvPatch 62.20%。
- 基线排名随后端而变（在自采数据集上，BiGRU 与 Transformer-3 下 ConvPatch 领先于 TGT）。
- 模型规模 264.2k / 67.0k / 236.1k 参数。

## Why it matters / what's new (EN)

The KB's sensing-csi bin already holds CSI-sensing frameworks and LLM-assisted adaptation papers, for example [2026-10-21_arxiv-csi-agent-llm-few-shot-cross-domain-wifi-sensing](2026-10-21_arxiv-csi-agent-llm-few-shot-cross-domain-wifi-sensing.md) and [2026-10-20_arxiv-temporal-vs-spectral-csi-reporting-wifi-isac-80211bf](2026-10-20_arxiv-temporal-vs-spectral-csi-reporting-wifi-isac-80211bf.md). This paper addresses the input-representation side: how complex CSI is tokenized before the model. Results come from the authors' own comparison with frontends under a common setup, using lightweight backends so that accuracy reflects the tokenizer; the paper does not claim state-of-the-art against published sensing systems.

## Why it matters / what's new (ZH)

知识库的 sensing-csi 分类中已有 CSI 感知框架与 LLM 辅助适配类论文，例如 [2026-10-21_arxiv-csi-agent-llm-few-shot-cross-domain-wifi-sensing](2026-10-21_arxiv-csi-agent-llm-few-shot-cross-domain-wifi-sensing.md) 和 [2026-10-20_arxiv-temporal-vs-spectral-csi-reporting-wifi-isac-80211bf](2026-10-20_arxiv-temporal-vs-spectral-csi-reporting-wifi-isac-80211bf.md)。本文关注输入表示一侧：复数 CSI 在进入模型之前如何分词。结果来自作者在统一设置下评估各前端并使用轻量后端（使准确率更直接反映分词器效果）所做的对比；论文并未声称优于已发表的感知系统。

## Images

![Overview of TGT, with Helmert decomposition, centered-trajectory keys and asymmetric frequency routing | TGT 概览：Helmert 分解、中心化轨迹键与非对称频率路由](https://arxiv.org/html/2610.06288v1/x1.png)
