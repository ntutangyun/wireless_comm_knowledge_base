---
id: 2026-10-15_arxiv-calm-5g-conformal-risk-control-service-assurance-alarms
date_published: 2026-10-13
date_found: 2026-10-15
type: academic-paper
technology: cellular
title_en: "CALM-5G: Event-Level Conformal Risk Control for Predictive Service-Assurance Alarms"
title_zh: "CALM-5G：面向预测性服务保障告警的事件级共形风险控制"
url: "https://arxiv.org/abs/2610.17962"
source_quality: full
topics: [conformal-prediction, service-assurance, alarm, KPI-forecasting, SLO, label-shift, TS-28.105, TS-28.567, TS-23.288, OpenAirInterface]
topic_primary: cellular-ai
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)
Ömer Faruk İşcanlı and Yağmur Sabucu Sandal (submitted to IEEE Transactions on Network and Service Management) address the step that turns a KPI forecast into a service-assurance alarm. They present CALM, an assurance layer that sits above any forecasting backbone and issues alarms with distribution-free, finite-sample guarantees; CALM-5G is the instantiation for 5G management evaluated in the paper. The paper is organised around the framework (Section 2), the evaluation setup (Section 3), the results (Section 4) and conclusions (Section 5).

The framework separates an interval layer, which reports predictive uncertainty on the continuous service metric (conformalised quantile regression with online adaptive-conformal and PID variants), from an alarm layer that makes the assurance decision. The alarm layer calibrates on service-level violation events rather than on individual bins, scores violation onset directly with a classifier, selects among five calibration schemes by cross-validation inside the calibration split, and reports the alarm duty cycle alongside every miss rate. An optional hysteretic alarm state machine, tuned with Learn-then-Test, certifies miss rate and alarm budget jointly. A validity monitor moves between STABLE, DEGRADED and RECOVERING states to request recalibration, retraining or rollback, which the paper maps onto the AI/ML lifecycle procedures of 3GPP TS 28.105, TS 28.567 and TS 23.288.

Four corpora are evaluated separately and never pooled: a Telecom Italia call-detail-record dataset (200 cells, 10-minute bins), commercial 5G traces (Irish5G), an O-RAN testbed (OpenIreland), and the authors' own OpenAirInterface 5G standalone testbed with a Siemens S7-1200 servo-drive telemetry stream over MQTT. Onset targeting with cross-validated calibration reduces time-in-alarm by 56.3% to 89.7% on three corpora, with no significant change on the fourth. The realised miss rate stays within a two-standard-error tolerance on three corpora and within one standard error of it on the fourth. Under label shift, pooled batch calibration exceeds that tolerance, by 10.9 standard errors on the production corpus, and online calibration restores compliance.

## Summary (ZH)
Ömer Faruk İşcanlı 与 Yağmur Sabucu Sandal（已投稿 IEEE Transactions on Network and Service Management）研究把 KPI 预测转化为服务保障告警的这一步。他们提出 CALM，一个位于任意预测骨干模型之上的保障层，可发出带有无分布假设、有限样本保证的告警；CALM-5G 是论文评估的面向 5G 管理的实例。论文围绕框架（第 2 节）、评估设置（第 3 节）、结果（第 4 节）和结论（第 5 节）展开。

框架把区间层与告警层分开：区间层报告连续服务指标上的预测不确定性（共形化分位数回归，及在线自适应共形与 PID 变体）；告警层负责保障决策。告警层以服务级违约事件而非单个时间格为单位进行校准，用分类器直接对违约起始打分，在校准划分内通过交叉验证从五种校准方案中选择，并在每个漏报率旁报告告警占空比。可选的带迟滞告警状态机借助 Learn-then-Test 调参，联合认证漏报率与告警预算。有效性监测器在 STABLE、DEGRADED 和 RECOVERING 状态间转换，以请求重新校准、重训练或回滚，论文将其对应到 3GPP TS 28.105、TS 28.567 和 TS 23.288 的 AI/ML 生命周期流程。

评估使用四个语料库，分别评估、从不合并：Telecom Italia 话单数据集（200 个小区，10 分钟时间格）、商用 5G 轨迹（Irish5G）、O-RAN 测试床（OpenIreland），以及作者自建的 OpenAirInterface 5G 独立组网测试床（经 MQTT 传输西门子 S7-1200 伺服驱动遥测）。采用交叉验证校准的起始点定位使其中三个语料库的告警时长缩短 56.3% 至 89.7%，第四个无显著变化。实际漏报率在三个语料库上处于两倍标准误容差之内，在第四个上处于其一倍标准误之内。在标签偏移下，合并批量校准超出该容差（在生产语料库上超出 10.9 个标准误），在线校准则恢复合规。

## Key technical points (EN)
- Unit of assurance is the violation event (a maximal run of violating bins of one entity) with a lead-time requirement, not the individual bin; the paper reports that bins within an entity are strongly autocorrelated and inflate effective sample size if treated as independent.
- Five calibration schemes: pooled batch, online, covariate-conditional, online conditional, and entity-standardised; the scheme is selected by cross-validation with folds mirroring the deployment split, because scoring schemes on the split that fits their thresholds admits every candidate by construction.
- Risk control on the regression-derived score gives duty cycles of 0.24 to 0.91; on two corpora its miss rate is indistinguishable from a random alarm with the same duty.
- Miss rate and alarm budget are certified jointly in 12 of 20 corpus-seed combinations under block dependence.
- Settings: alarm miss-rate target 0.05, interval miscoverage 0.10, five seeds, 95% bootstrap intervals.
- Testbed corpus: OpenAirInterface gNB and one UE on USRP B210 radios, 24 PRBs at 30 kHz subcarrier spacing; SLO on the 95th-percentile round-trip time of a 50 Hz echo probe exceeding 50 ms; 18 runs (6.1 hours) retained, with baseline violation rates ranging from 0.0096 to 0.0862.
- The layer observes and advises; the actuation policy that consumes its alarms is outside the paper's scope.

## Key technical points (ZH)
- 保障单位是带提前量要求的违约事件（同一实体违约时间格的最大连续段），而非单个时间格；论文指出实体内的时间格强自相关，若视为独立会虚增有效样本量。
- 五种校准方案：合并批量、在线、协变量条件、在线条件、实体标准化；方案通过折叠方式与部署划分一致的交叉验证选择，因为在拟合阈值的划分上给方案打分会使每个候选方案按构造都合格。
- 对回归派生分数做风险控制，占空比为 0.24 至 0.91；在两个语料库上，其漏报率与相同占空比的随机告警无法区分。
- 在块依赖假设下，20 个语料库-种子组合中有 12 个可联合认证漏报率与告警预算。
- 设置：告警漏报率目标 0.05，区间未覆盖率 0.10，五个种子，95% 自助法区间。
- 测试床语料：OpenAirInterface gNB 与一个 UE（USRP B210 无线电），24 个 PRB、30 kHz 子载波间隔；SLO 为 50 Hz 回声探测的 95 分位往返时间超过 50 ms；保留 18 次运行（6.1 小时），基线违约率范围为 0.0096 至 0.0862。
- 该层只观察与建议；消费其告警的执行策略不在论文范围内。

## Why it matters / what's new (EN)
The KB's closest entry is the conformal-inference RAN control entry of 2026-09-07 (2026-09-07_arxiv-cv-cci-conformal-inference-ran-control); this paper applies conformal methods one level up, to the alarms of 5G service assurance, and ties the lifecycle monitor to specific 3GPP management specifications. Its two cautions are the useful part: pooled calibration can exceed its miss-rate target under label shift, and calibration schemes cannot be ranked on the split used to fit their thresholds. The authors also report that the gain is not significant on one of the four corpora, and the results are offline analyses rather than a closed-loop deployment.

## Why it matters / what's new (ZH)
知识库中最接近的条目是 2026-09-07 的共形推断 RAN 控制条目（2026-09-07_arxiv-cv-cci-conformal-inference-ran-control）；本文把共形方法应用到更高一层，即 5G 服务保障的告警，并将生命周期监测与具体的 3GPP 管理规范对应起来。其两点提醒是有用之处：标签偏移下合并校准可能超出漏报率目标，以及校准方案不能在拟合其阈值的划分上排序。作者还指出四个语料库中有一个的收益并不显著，且结果为离线分析而非闭环部署。
