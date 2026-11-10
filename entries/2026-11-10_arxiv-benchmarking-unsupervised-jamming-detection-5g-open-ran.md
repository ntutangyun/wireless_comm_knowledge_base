---
id: 2026-11-10_arxiv-benchmarking-unsupervised-jamming-detection-5g-open-ran
date_published: 2026-11-03
date_found: 2026-11-10
type: academic-paper
technology: cellular
title_en: "Benchmarking Unsupervised Jamming Detection in 5G Open RAN"
title_zh: "5G Open RAN 无监督干扰（Jamming）检测基准评测"
url: "https://arxiv.org/abs/2611.04369"
source_quality: full
topics: [jamming-detection, Open-RAN, unsupervised-anomaly-detection, KPI-telemetry, SSB-RSRP, autoencoder, VAE, LSTM, statistical-ensemble, leave-one-out]
topic_primary: cellular-security
topics_secondary: [open-ran]
novelty_score: 3
---

## Summary (EN)

Gopal, Cintron and Rouil (NIST) benchmark unsupervised RF jamming detectors that use Open RAN KPI telemetry, where labelled attack data are rarely available across deployments. The difficulty is that statistical ensembles express confidence through agreement among component detectors while autoencoders use reconstruction-error magnitude, so their outputs are not directly comparable without ground truth. The paper proposes a symmetric evaluation interface that takes only a binary detection mask and a confidence score from each detector and combines mean detection confidence with temporal interval coherence into a label-free composite score.

The authors compare their previously proposed Statistical Ensemble Method (SEM) with Vanilla, LSTM and VAE autoencoder baselines on telemetry from ten heterogeneous 5G environments with fixed and variable jamming bursts and dynamic jammer gains, under within-trace and leave-one-out cross-trace evaluation. Ground-truth labels are used only to curate nominal autoencoder training samples and to assess performance independently.

## Summary (ZH)

Gopal、Cintron 与 Rouil（NIST）对使用 Open RAN KPI 遥测的无监督射频干扰（jamming）检测器做了基准评测，因为跨部署的带标签攻击数据很少。难点在于：统计集成通过成员检测器的一致性表达置信度，而自编码器采用重构误差幅度，没有真值时两者的输出无法直接比较。论文提出对称的评估接口，只取每个检测器输出的二值检测掩码与置信度，并把平均检测置信度与时间区间一致性组合成无需标签的综合得分。

作者在十种异构 5G 环境（含固定与可变干扰脉冲、动态干扰机增益）的遥测数据上，将其此前提出的统计集成方法（SEM）与 Vanilla、LSTM、VAE 自编码器基线进行比较，评估包括同轨迹内与留一交叉轨迹两种方式。真值标签仅用于筛选自编码器的正常训练样本以及独立评估性能。

## Key technical points (EN)

- Telemetry: KPIs include SSB-RSRP statistics, the count of completed reference-signal measurements, SNR and RSSI; their response varies with jammer gain, burst duration, traffic and the number of connected UEs.
- Calibration: SEM is calibrated without labels by maximising the unsupervised composite score; autoencoder thresholds are also chosen without attack labels.
- Results: under leave-one-out evaluation SEM reaches a mean composite score of 0.906 against 0.688 for the best autoencoder per fold, and a mean F1 of 0.918 against 0.521 for the best autoencoder variant. The composite ranks SEM first in all ten environments, consistent with the F1 ranking.
- Caveat the paper reports: in both within-trace and cross-trace evaluation the composite ranks autoencoders wrongly when they flag far fewer samples than the true jamming prevalence, so composite rankings are reliable only when the detection rate matches the expected prevalence.
- Future work named by the authors: more testbeds, jammer behaviours and detector families, prevalence-aware scoring and live evaluation inside the Open RAN architecture. The work is partially funded by the US Department of Homeland Security Science and Technology Directorate.

## Key technical points (ZH)

- 遥测：KPI 包括 SSB-RSRP 统计量、已完成参考信号测量的次数、SNR 与 RSSI；其响应随干扰机增益、脉冲时长、业务量与接入终端数而变化。
- 校准：SEM 通过最大化无监督综合得分在无标签条件下校准；自编码器阈值同样不使用攻击标签。
- 结果：在留一评估下，SEM 的平均综合得分为 0.906，每折最佳自编码器为 0.688；平均 F1 为 0.918，最佳自编码器变体为 0.521。综合得分在全部十种环境中把 SEM 排第一，与 F1 排序一致。
- 论文报告的注意事项：在同轨迹与跨轨迹评估中，当自编码器标记的样本远少于真实干扰占比时，综合得分会错误排序，因此仅当检测率与预期占比相符时，综合排名才可靠。
- 作者提出的后续工作：更多测试床、干扰行为与检测器类型，考虑占比的评分，以及在 Open RAN 架构内的在线评估。部分资助来自美国国土安全部科技司。

## Why it matters / what's new (EN)

Jamming detection from existing Open RAN telemetry avoids dedicated spectrum monitors, but the authors note that label-free comparison of detectors has received relatively little attention. This paper offers a label-free comparison interface and, importantly, checks it against ground truth and documents where it fails, which is useful for anyone using composite scores to rank anomaly detectors. All ten traces come from a single 5G Open RAN testbed, not commercial networks, and only four detectors (SEM and three autoencoders) are compared.

## Why it matters / what's new (ZH)

利用现有 Open RAN 遥测检测干扰可避免专用频谱监测设备，但作者指出，无标签条件下的检测器比较研究较少。本文给出无需标签的比较接口，并且更重要的是用真值检验它并记录其失效情形，对使用综合得分为异常检测器排序的读者很有参考价值。全部十条轨迹均来自同一个 5G Open RAN 测试床而非商用网络，且仅比较了四个检测器（SEM 与三种自编码器）。

## Images

![Open RAN KPI anomaly-detection pipeline used in the benchmark | 基准评测所用的 Open RAN KPI 异常检测流程](https://arxiv.org/html/2611.04369v1/kpi_anomaly_pipeline.png)
![Leave-one-out F1 heatmap across the ten 5G environments | 十种 5G 环境下留一评估的 F1 热力图](https://arxiv.org/html/2611.04369v1/LOO_C_F1_Heatmap.png)
