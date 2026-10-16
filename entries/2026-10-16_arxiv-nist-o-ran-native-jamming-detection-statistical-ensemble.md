---
id: 2026-10-16_arxiv-nist-o-ran-native-jamming-detection-statistical-ensemble
date_published: 2026-10-14
date_found: 2026-10-16
type: academic-paper
technology: cellular
title_en: "O-RAN-Native Jamming Detection Under Network Heterogeneity"
title_zh: "异构网络下的 O-RAN 原生干扰（Jamming）检测"
url: "https://arxiv.org/abs/2610.20816"
source_quality: full
topics: [jamming-detection, O-RAN, E2-interface, xApp, rApp, Near-RT-RIC, Non-RT-RIC, A1-interface, KPI-anomaly-detection, distribution-shift, n78]
topic_primary: cellular-security
topics_secondary: [open-ran]
novelty_score: 3
---

## Summary (EN)
Sneihil Gopal, Fernando J. Cintron and Richard A. Rouil (National Institute of Standards and Technology) study RF jamming detection from the per-UE telemetry that O-RAN exposes over the E2 interface. They propose a Statistical Ensemble Method (SEM) that combines three detectors by weighted voting: an adaptive Median Absolute Deviation baseline detector, a count-based detector on the number of RSRP samples acquired per reporting interval, and an abrupt-change detector. SEM has two modes: a cold-start mode with signal-physics default parameters that needs no labeled data, and a supervised mode in which selected parameters are refined offline by grid search once labeled data accumulate.

The evaluation uses about 25 hours of data from a 5G NR testbed in band n78 under active jamming, split into eight logs that differ in UE count (1 to 3), recording length (926 to 65,075 samples) and jamming burst pattern (fixed 30 s or 60 s, or variable 10 to 30 s), with jammer gains of 45 dB and 48 dB. SEM is compared with five ML classifiers and five DL sequence models under single-environment and multi-environment leave-one-out validation. Cold-start SEM reaches a mean F1 of 0.888 (recall 0.971, precision 0.826) against 0.911 for single-environment ML; supervised SEM reaches 0.962, essentially matching multi-environment ML (0.962) and DL (0.956). On the variable-burst log, single-environment ML and DL reach recalls of 0.29 and 0.47, while cold-start SEM keeps a recall of 0.96.

## Summary (ZH)
Sneihil Gopal、Fernando J. Cintron 与 Richard A. Rouil（美国国家标准与技术研究院 NIST）研究基于 O-RAN 经 E2 接口开放的逐 UE 遥测进行射频干扰（jamming）检测。他们提出统计集成方法（SEM），通过加权投票组合三个检测器：自适应中位数绝对偏差（MAD）基线检测器、针对每个上报周期内所获取 RSRP 样本数的计数检测器，以及突变检测器。SEM 有两种模式：采用基于信号物理的默认参数、无需标注数据的冷启动模式；以及在标注数据积累后通过离线网格搜索调整部分参数的监督模式。

评估使用来自 n78 频段 5G NR 测试床、有源干扰条件下约 25 小时的数据，拆分为八份日志，其 UE 数量（1 至 3）、记录长度（926 至 65,075 个样本）与干扰突发模式（固定 30 s 或 60 s，或 10 至 30 s 可变）各不相同，干扰增益为 45 dB 与 48 dB。SEM 与五种 ML 分类器和五种 DL 序列模型在单环境与多环境留一验证下比较。冷启动 SEM 的平均 F1 为 0.888（召回 0.971、精确率 0.826），单环境 ML 为 0.911；监督 SEM 为 0.962，与多环境 ML（0.962）和 DL（0.956）基本持平。在可变突发日志上，单环境 ML 与 DL 的召回仅为 0.29 与 0.47，冷启动 SEM 仍保持 0.96 的召回。

## Key technical points (EN)
- Inputs are nine KPI channels from the testbed measurement reports: min, Q1, median, Q3, max and mean of RSRP, RSRP sample count, downlink RSSI and uplink SNR.
- The count-based detector flags a zero RSRP sample count (which the authors report does not occur in normal operation) and large step changes of the count; the abrupt-change detector uses a threshold relative to each KPI's dynamic range (default fraction 0.4) and treats sustained measurement gaps as implicit anomalies.
- Learning-based baselines use about 423 engineered features per sample (rolling statistics, lags, differences, cross-KPI and frequency-domain features); DL models take sequences of 10 feature vectors.
- Cold-start SEM trades precision for recall: the paper attributes the gap to ML's 0.984 precision mainly to a higher false-alarm rate, and argues that for jamming a missed detection costs more than a false alarm.
- Cold-start degrades on the shortest log (926 samples; F1 0.78, precision 0.69) because the 50-sample rolling window is about 5% of the recording; grid search recovers +0.195 there and +0.151 on the 18-hour low-gain log.
- Multi-environment training lifts ML F1 from 0.911 to 0.962 and DL from 0.897 to 0.956; the authors conclude that corpus coverage, not hyperparameters alone, limits generalisation, and that this holds only if the training logs resemble the deployment.
- Proposed deployment: cold-start SEM as a Near-RT RIC xApp on live E2 KPI reports; a Non-RT RIC rApp refines parameters by grid search and delivers them over A1; the rApp can also check whether a learned model has reached parity before an operator switches.

## Key technical points (ZH)
- 输入为测试床测量报告中的九个 KPI 通道：RSRP 的最小值、Q1、中位数、Q3、最大值与均值，RSRP 样本数，下行 RSSI 与上行 SNR。
- 计数检测器标记 RSRP 样本数为零（作者称正常运行中不会出现）及样本数的大幅跳变；突变检测器采用相对各 KPI 动态范围的阈值（默认比例 0.4），并将持续的测量缺失视为隐含异常。
- 基于学习的基线每个样本使用约 423 个工程特征（滚动统计、滞后、差分、跨 KPI 与频域特征）；DL 模型输入 10 个特征向量组成的序列。
- 冷启动 SEM 以精确率换召回：论文将其与 ML 0.984 精确率的差距主要归因于更高的误报率，并认为对干扰检测而言漏检的代价高于误报。
- 冷启动在最短日志（926 个样本；F1 0.78、精确率 0.69）上性能下降，因为 50 样本的滚动窗口约占记录的 5%；网格搜索在该日志上带来 +0.195 的提升，在 18 小时低增益日志上为 +0.151。
- 多环境训练将 ML 的 F1 从 0.911 提升到 0.962，DL 从 0.897 提升到 0.956；作者认为限制泛化的是语料覆盖而非仅仅超参数，且前提是训练日志与部署场景相近。
- 提出的部署方式：冷启动 SEM 作为 Near-RT RIC 上的 xApp 处理实时 E2 KPI 报告；Non-RT RIC 的 rApp 通过网格搜索细化参数并经 A1 下发，rApp 还可在运营商切换前评估学习模型是否已达到同等水平。

## Why it matters / what's new (EN)
The KB already holds O-RAN security entries on LLM-assisted triage and attack graphs; this one is an anomaly-detection result on real testbed telemetry, and its main message is about generalisation rather than a new model: learned detectors lose recall when the jamming pattern was not in training, while a label-free statistical baseline holds recall at the cost of false alarms. The authors describe it as, to their knowledge, the first comparison that isolates the detection architecture from the effect of labeled data. The data come from one 5G testbed in band n78 with manually verified labels, so how the thresholds behave on commercial networks is not addressed.

## Why it matters / what's new (ZH)
知识库已有关于 LLM 辅助研判与攻击图的 O-RAN 安全条目；本文则是基于真实测试床遥测的异常检测结果，核心结论关乎泛化而非新模型：当训练中没有出现某种干扰模式时，学习型检测器的召回下降，而无需标注的统计基线以误报为代价保持召回。作者称，据其所知，这是首个把检测架构的作用与标注数据的作用区分开的比较。数据来自 n78 频段的单一 5G 测试床并经人工核实标签，因此阈值在商用网络上的表现不在论文讨论范围内。
