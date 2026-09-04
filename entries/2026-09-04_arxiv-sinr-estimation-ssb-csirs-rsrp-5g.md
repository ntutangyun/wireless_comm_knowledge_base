---
id: 2026-09-04_arxiv-sinr-estimation-ssb-csirs-rsrp-5g
date_published: 2026-09-03
date_found: 2026-09-04
type: academic-paper
technology: cellular
title_en: "Indirect Estimation of SINR via SSB and CSI-RS RSRP in 5G NR"
title_zh: "基于SSB与CSI-RS RSRP间接估计5G NR SINR"
url: "https://arxiv.org/abs/2609.03488"
source_quality: full
topics: [SINR-prediction, SSB, CSI-RS, RSRP, beam-based-5G, MLP, digital-twin, network-optimization]
topic_primary: 5g-nr
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

Leonardo Spampinato, Mahamadou Togola, Matteo Bernabè, Azim Akhtarshenas, Lorenzo Mario Amorosa and David López-Pérez (arXiv v1, 3 Sep 2026) address predicting downlink data-channel SINR in 5G NR using only standardized reference-signal measurements. The authors' stated motivation: "predicting UE performance is essential for proactive network control, resource management, and digital twin sandboxes," but "predicting the data channel SINR is very difficult" because it depends on local radio conditions, transmit power, and complex interference dynamics from neighboring cells — compounded in beam-based 5G systems by the fact that the beams used for synchronization differ from the beams that actually carry data.

The authors generate a 3GPP-compliant synthetic dataset with the open-source Giulia simulator: 1,500 independent simulations of 570 users uniformly distributed across 57 cells in a 19-site hexagonal layout, at 3.5 GHz carrier frequency, 100 MHz bandwidth and 273 physical resource blocks. Rather than feeding a model the raw reference-signal measurement set, they compare three feature-construction strategies as SINR-prediction inputs: an unfiltered concatenation of all measurements in fixed order (which the paper reports fails to train effectively), a "Top-K Strongest" strategy that sorts SSB and CSI-RS RSRP measurements by signal magnitude and keeps the K largest of each, and a "Top-K Active" strategy that first filters CSI-RS measurements by an activity mask — keeping only the beams actually carrying data — before selecting the strongest among those. A three-layer multilayer perceptron (258x128x1) is trained via backpropagation with Adam (learning rate 0.001, batch size 2,048, up to 500 epochs with early stopping) to predict SINR as a supervised-learning target from whichever feature set is used.

The Top-K Active configuration reaches the best test RMSE of the three strategies, roughly 0.5 dB as read from Fig. 2, against the SSB-only baseline's 2.4 dB minimum. The optimal operating point uses K_csi=16 out of 1,824 possible CSI-RS measurements (a 99.1% reduction) and K_ssb=32 out of 456 possible SSB measurements (a 93% reduction), combining to cut the full 2,280-measurement input down to 48 features while improving, not degrading, prediction accuracy. Mean absolute error is approximately 0.5 dB across most of the SINR range, with larger errors concentrated in the low-SINR regime (at or below -10 dB), against a target SINR distribution with roughly 1 dB mean and 6 dB standard deviation. The authors conclude that activity-aware beam filtering — identifying which beams actually transmit data and discarding non-contributing measurements — both improves accuracy and sharply reduces the measurement-reporting overhead needed to feed a downlink SINR predictor, which they frame as enabling proactive network optimization.

## Summary (ZH)

Leonardo Spampinato、Mahamadou Togola、Matteo Bernabè、Azim Akhtarshenas、Lorenzo Mario Amorosa 与 David López-Pérez（arXiv v1，2026年9月3日）研究了仅利用标准化参考信号测量值来预测5G NR下行数据信道SINR的问题。作者指出的动机是："预测UE性能对于主动式网络控制、资源管理以及数字孪生沙盒至关重要"，但"预测数据信道SINR非常困难"，因为它取决于本地无线条件、发射功率以及来自邻小区的复杂干扰动态——在基于波束的5G系统中，这一困难还因用于同步的波束与实际承载数据的波束不同而加剧。

作者使用开源的3GPP兼容仿真器Giulia生成了合成数据集：在由19个站点组成的六边形布局中，以3.5 GHz载频、100 MHz带宽、273个物理资源块，对均匀分布在57个小区中的570个用户进行了1500次独立仿真。作者并未直接将原始参考信号测量集输入模型，而是比较了三种特征构造策略作为SINR预测输入：按固定顺序拼接全部测量值的"未过滤"方案（论文报告该方案训练效果不佳）；"Top-K最强"方案，即按信号强度对SSB与CSI-RS RSRP测量值排序并各保留K个最大值；以及"Top-K活跃"方案，即先按活动掩码过滤CSI-RS测量值——仅保留实际承载数据的波束——再从中选取信号最强者。作者训练了一个三层多层感知机（258×128×1），通过反向传播与Adam优化器（学习率0.001，批大小2048，最多500个训练轮次并配合早停）进行训练，以监督学习方式基于所用特征集预测SINR。

Top-K活跃配置在三种策略中取得了最低的测试均方根误差（RMSE）（从图 2 读出约为 0.5 dB），而仅用 SSB 的基线最低为 2.4 dB。最优工作点在1824个可能的CSI-RS测量值中选取K_csi=16个（缩减99.1%），在456个可能的SSB测量值中选取K_ssb=32个（缩减93%），二者结合将完整的2280维测量输入压缩至48个特征，同时预测精度不降反升。在大部分SINR范围内，平均绝对误差约为0.5 dB，较大误差集中在低SINR区间（-10 dB及以下），而目标SINR分布的均值约为1 dB、标准差约为6 dB。作者得出结论：具备活动感知能力的波束过滤——即识别哪些波束实际承载数据、剔除无贡献的测量值——既能提升预测精度，又能大幅降低为下行SINR预测器提供输入所需的测量上报开销，作者将此定位为实现主动式网络优化的手段。

## Key technical points (EN)
- Problem, quoted: "predicting UE performance is essential for proactive network control, resource management, and digital twin sandboxes," but "predicting the data channel SINR is very difficult" in beam-based 5G because sync beams differ from data beams.
- Dataset: 3GPP-compliant, Giulia open-source simulator; 1,500 simulations, 570 users, 57 cells, 19-site hexagonal layout, 3.5 GHz, 100 MHz, 273 PRBs.
- Three feature strategies compared: unfiltered concatenation (fails to train), Top-K Strongest (sort by RSRP magnitude), Top-K Active (filter CSI-RS by activity mask first, then take strongest).
- Model: 3-layer MLP (258x128x1), Adam optimizer, lr 0.001, batch 2048, up to 500 epochs with early stopping.
- Best result: Top-K Active has the lowest test RMSE of the three strategies, roughly 0.5 dB as read from Fig. 2, vs SSB-only baseline 2.4 dB minimum RMSE.
- Dimensionality reduction: K_csi=16/1824 (-99.1%), K_ssb=32/456 (-93%); combined input 2,280 -> 48 features, with accuracy improving rather than degrading.
- MAE ~0.5 dB across most of the SINR range; larger errors below -10 dB SINR; target SINR distribution ~1 dB mean, ~6 dB standard deviation.

## Key technical points (ZH)
- 问题原文引述："预测UE性能对于主动式网络控制、资源管理以及数字孪生沙盒至关重要"，但在基于波束的5G系统中"预测数据信道SINR非常困难"，因为同步波束与数据波束不同。
- 数据集：3GPP兼容，采用开源仿真器Giulia；1500次仿真，570个用户，57个小区，19站点六边形布局，3.5 GHz，100 MHz带宽，273个物理资源块。
- 比较三种特征策略：未过滤拼接（训练效果不佳）、Top-K最强（按RSRP强度排序）、Top-K活跃（先按活动掩码过滤CSI-RS，再取最强者）。
- 模型：三层MLP（258×128×1），Adam优化器，学习率0.001，批大小2048，最多500轮训练并配合早停。
- 最佳结果：Top-K活跃方案在三种策略中RMSE最低（从图 2 读出约为 0.5 dB），仅SSB基线最小RMSE为2.4 dB。
- 维度缩减：K_csi=16/1824（缩减99.1%），K_ssb=32/456（缩减93%）；合并输入从2280维压缩至48个特征，且精度不降反升。
- 在大部分SINR范围内平均绝对误差约0.5 dB；SINR低于-10 dB时误差更大；目标SINR分布均值约1 dB、标准差约6 dB。

## Why it matters / what's new (EN)
This knowledge base's 5g-nr coverage includes several ML-on-standardized-measurement entries (e.g. RSRP-based indoor radio planning, this same run) but none so far has targeted data-channel SINR prediction specifically from the SSB/CSI-RS reference-signal split that beam-based 5G systems expose, or shown that filtering measurements by which beams are actually carrying data — rather than simply by signal strength — improves accuracy while cutting reporting overhead by over 98%. It is the first entry here connecting reference-signal-based SINR prediction to the beam-activity-awareness angle specifically.

## Why it matters / what's new (ZH)
本知识库的5G NR板块已有若干基于标准化测量值的机器学习条目（例如本次同批的基于RSRP的室内无线规划条目），但此前尚无条目专门针对基于波束的5G系统所暴露的SSB/CSI-RS参考信号划分来预测数据信道SINR，也未曾展示"按哪些波束实际承载数据"（而非仅按信号强度）过滤测量值，既能提升精度、又能将上报开销削减98%以上。这是本知识库中首个专门将基于参考信号的SINR预测与波束活动感知这一角度相联系的条目。

## Images

None.
