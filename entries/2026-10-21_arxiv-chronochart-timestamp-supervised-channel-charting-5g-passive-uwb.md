---
id: 2026-10-21_arxiv-chronochart-timestamp-supervised-channel-charting-5g-passive-uwb
date_published: 2026-10-18
date_found: 2026-10-21
type: academic-paper
technology: uwb
title_en: "ChronoChart: Setup-Agnostic Channel Charting for Label-Free Indoor Localization (timestamp-supervised, evaluated on 5G, distributed MIMO and passive UWB)"
title_zh: "ChronoChart：面向无标签室内定位的与场景设置无关的信道制图（时间戳监督，在 5G、分布式 MIMO 与被动 UWB 上评估）"
url: "https://arxiv.org/abs/2610.25199"
source_quality: full
topics: [UWB, channel-charting, passive-UWB, indoor-localization, label-free, CSI, self-supervised]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

On 18 October 2026, Majid Sharghi Foroushani, Jonas Pirkl, Jonathan Ott, Maximilian Stahlke, George Yammine, Tobias Feigl and Christopher Mutschler (Fraunhofer IIS, with FAU Erlangen-Nuernberg and the University of Technology Nuremberg) posted "ChronoChart: Setup-Agnostic Channel Charting for Label-Free Indoor Localization" to arxiv (eess.SP). The arXiv listing notes that it is to be published in the proceedings of the 16th International Conference on Indoor Positioning and Indoor Navigation (IPIN).

The paper starts from the observation that supervised fingerprinting is accurate but needs costly position labels and recalibration, while existing label-free channel charting (CC) methods usually depend on setup-specific distance metrics (ADP, CIRA, PDR), auxiliary sensors, or precomputed O(n^2) distance matrices, which limits scalability and transfer across radio systems. ChronoChart trains a shared encoder from CSI and timestamps only, and is evaluated on three datasets: a Fraunhofer 5G industrial dataset, the Dichasus distributed-MIMO dataset, and a passive UWB dataset.

## Summary (ZH)

2026年10月18日，Majid Sharghi Foroushani、Jonas Pirkl、Jonathan Ott、Maximilian Stahlke、George Yammine、Tobias Feigl 与 Christopher Mutschler（弗劳恩霍夫 IIS，并隶属埃尔朗根-纽伦堡大学与纽伦堡工业大学）在 arxiv（eess.SP）发布论文《ChronoChart：面向无标签室内定位的与场景设置无关的信道制图》。arXiv 页面注明该文将收录于第十六届室内定位与室内导航国际会议（IPIN）论文集。

论文的出发点是：有监督指纹定位精度高，但需要昂贵的位置标签和反复标定；而现有无标签信道制图（CC）方法通常依赖特定场景的距离度量（ADP、CIRA、PDR）、辅助传感器或预先计算的 O(n^2) 距离矩阵，限制了可扩展性以及跨无线系统的迁移。ChronoChart 仅用 CSI 和时间戳训练共享编码器，并在三个数据集上评估：Fraunhofer 5G 工业数据集、Dichasus 分布式 MIMO 数据集，以及被动 UWB 数据集。

## Key technical points (EN)

- Supervision signal: CSI plus timestamps only; no position labels, no setup-specific distance metric, no auxiliary sensor and no O(n^2) distance matrix (the paper's Table I marks ChronoChart "no" on all of these columns).
- Three jointly optimised losses, weighted with NashMTL: (1) a timestamp-based triplet loss in which temporally close samples are positives and samples outside a time window T are negatives (T = 2.5 s Dichasus, 1.0 s 5G, 1.9 s passive UWB); (2) a temporal-proximity loss pulling embedding distances toward values proportional to the time gap; (3) a joint-embedding loss enforcing consistency between unmasked and 90%-masked inputs.
- Encoders: an MLP with layer norm for Dichasus (cross-correlation inputs); a CNN with InstanceNorm2D and layer norm for the 5G and passive-UWB data. Each dataset reuses its baseline's encoder, so only the training objective differs.
- Passive UWB data: about 40 minutes of training data, two test sets (P1, P2), a 14-link UWB mesh, three human subjects, office-like environment; mean speed 0.703 m/s. The page does not give UWB hardware, frequency or anchor-layout details.
- Protocol: Adam, lr 1e-3, batch 512, 200 epochs, 15 seeds with the median reported; errors computed after optimal affine alignment (MAE, DRMS, CEP, R95), chart quality via continuity, trustworthiness and Kruskal stress.
- Reported MAE: passive UWB 0.164 m (P1) and 0.195 m (P2) versus 0.273 m and 0.236 m for the PDR-based Siamese baseline; 5G 0.692 m versus 1.331 m (CIRA-based Siamese); Dichasus 0.264 m versus 0.330 m (geodesic-loss method), described by the authors as marginally better.
- Ablation (Table IV, Euclidean error, UPGrad weighting): on 5G, triplet-only 2.18 m falls to 0.84 m with both auxiliary losses (best at λ2=0.5, λ3=1.0); on Dichasus from 1.23 m to 0.38 m.
- Stated limitation: the timestamp assumption may be violated under long stationary periods, irregular sampling or highly non-uniform motion; temporal proximity is only a weak proxy for spatial proximity. No code or data release for ChronoChart is linked.

## Key technical points (ZH)

- 监督信号：仅 CSI 与时间戳；无位置标签、无特定场景距离度量、无辅助传感器、无 O(n^2) 距离矩阵（论文表 I 在这些列上均将 ChronoChart 标为"否"）。
- 三个联合优化的损失（用 NashMTL 加权）：(1) 基于时间戳的三元组损失，时间相近样本为正样本，时间窗 T 之外样本为负样本（Dichasus 2.5 s、5G 1.0 s、被动 UWB 1.9 s）；(2) 时间邻近损失，使嵌入距离趋向与时间间隔成比例；(3) 联合嵌入损失，约束未遮蔽输入与 90% 遮蔽输入的嵌入一致。
- 编码器：Dichasus 使用带层归一化的 MLP（输入为互相关）；5G 与被动 UWB 使用带 InstanceNorm2D 与层归一化的 CNN。各数据集沿用其基线的编码器，因此仅训练目标不同。
- 被动 UWB 数据：约 40 分钟训练数据、两个测试集（P1、P2）、14 条链路的 UWB 网状网络、3 名受试者、类办公室环境；平均速度 0.703 m/s。该页面未给出 UWB 硬件、频率或锚点布局细节。
- 评估协议：Adam，学习率 1e-3，批大小 512，200 轮，15 个随机种子取中位数；误差在最优仿射对齐后计算（MAE、DRMS、CEP、R95），图质量用连续性、可信度与 Kruskal 应力衡量。
- 报告的 MAE：被动 UWB 为 0.164 m（P1）与 0.195 m（P2），对比基于 PDR 的 Siamese 基线 0.273 m 与 0.236 m；5G 为 0.692 m，对比 1.331 m（基于 CIRA 的 Siamese）；Dichasus 为 0.264 m，对比 0.330 m（测地线损失方法），作者称仅略有改善。
- 消融（表 IV，欧氏误差，UPGrad 加权）：5G 上仅三元组损失为 2.18 m，加入两个辅助损失后降至 0.84 m（最佳为 λ2=0.5、λ3=1.0）；Dichasus 由 1.23 m 降至 0.38 m。
- 作者声明的局限：在长时间静止、非均匀采样或高度不均匀运动下，时间戳假设可能被破坏；时间邻近只是空间邻近的弱代理。未提供 ChronoChart 的代码或数据链接。

## Why it matters / what's new (EN)

For the UWB bin this is a passive-UWB sensing result rather than a ranging-standard one: the UWB data are link-level measurements from a 14-link mesh observing people, and UWB is one of three radio systems the same training recipe is applied to. The paper's stated contribution is a training objective that does not depend on setup-specific distance metrics, with passive-UWB MAE of 0.164 m and 0.195 m (Table III) against 0.273 m and 0.236 m for the PDR-based baseline. The comparison is against the authors' chosen baselines on their own datasets and has not been independently reproduced. It sits next to the KB's other multi-technology positioning entries (for example the HYMN benchmark) as an example of one learning method spanning UWB, 5G and MIMO data.

## Why it matters / what's new (ZH)

对 UWB 板块而言，这是一项被动 UWB 感知结果而非测距标准结果：UWB 数据是由 14 条链路的网状网络观测人员得到的链路级测量，UWB 是同一训练方案所应用的三种无线系统之一。论文声明的贡献是一个不依赖特定场景距离度量的训练目标；被动 UWB 的 MAE 为 0.164 m 与 0.195 m（表 III），对比基于 PDR 的基线 0.273 m 与 0.236 m。对比对象是作者选定的基线和他们自己的数据集，尚未经独立复现。本条目与知识库中其他多技术定位条目（例如 HYMN 基准）并列，示例了同一学习方法跨越 UWB、5G 与 MIMO 数据。

## Images

None.
