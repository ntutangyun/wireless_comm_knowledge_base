---
id: 2026-10-14_arxiv-diffusion-stress-test-overload-monitor-cdr-proxy
date_published: 2026-10-03
date_found: 2026-10-14
type: academic-paper
technology: cellular
title_en: "Diffusion-Based Stress Testing of Overload Monitoring for Resilient Emergency Cellular Networks Using Internet CDR Proxies"
title_zh: "基于扩散模型的应急蜂窝网络过载监测压力测试：以互联网 CDR 作为代理"
url: "https://arxiv.org/abs/2610.04526"
source_quality: full
topics: [CDR, signaling-overload, diffusion-model, threshold-calibration, operating-point-drift, emergency-network, Milan-dataset]
topic_primary: cellular-ai
topics_secondary: []
novelty_score: 3
---

## Summary (EN)
Bilal Hussain, Xiao Tang, Tan Li, Muhammad Azhar, Danista Khan and Fawad Ahmad study how a cell-level overload monitor built on coarse Call Detail Record (CDR) aggregates behaves when traffic surges differ from the stylized ones it was trained on. Motivation: disasters can overload cellular control-plane signaling within minutes, but fine-grained RRC or NGAP telemetry is privacy-sensitive and costly to collect, so Internet activity in CDR grids is used as a proxy for hidden signaling stress. The authors state the proxy is not claimed to be equivalent to RRC load, since the dataset has no overload ground truth.

Data and detector: the public Telecom Italia Milano CDR corpus (2013-2014, described by the authors as 3G/4G-era traffic), 62 days, 11:00-14:00 slots (18 per day), 9x9 cell grids (81 cells). Baseline overload is synthesized by scaling Internet activity in a fixed set of 40 cells by a constant multiplier alpha = 43.3 (about 59 sigma from normal), so matched-condition testing is easy. The main detector is a compact CNN (three conv-pool blocks with 8/16/32 filters, 256-unit dense layer, 81 sigmoid outputs) on Internet-only input; a three-channel (SMS, call, Internet) ResNet50 variant is compared as an input-architecture pair. A tabular diffusion model fitted on normal three-channel CDR aggregates generates harder, structure-preserving surge samples for a stress test (stage 2), followed by adaptation by retraining on hard synthetic samples (stage 3). The online path scores snapshots and thresholds them at a fixed 0.5; an oracle threshold tau* is chosen offline on the stress-test grids.

Findings: under the diffusion stress test the default 0.5 cutoff fails even though ROC curves remain strong. The detector still ranks overloaded cells above normal ones, but the probabilities fall below 0.5, so the F1-maximizing threshold shifts by 0.32 +/- 0.03 (operating-point drift). Across three seeds, hard-sample adaptation raises thresholded F1 from 0% (no alerts at 0.5 on any seed) to 85.67 +/- 14.37% and ROC-AUC from 0.886 +/- 0.040 to 0.99996 +/- 0.00007. The authors present the sequence as a reusable pre-deployment stress test for emergency monitors, and say it complements their companion IEEE TII paper on multi-scenario malicious-traffic detection. Stated limits: overload labels are synthetic, the data is a decade old, and there is no paired signaling trace.

## Summary (ZH)
Bilal Hussain、Xiao Tang、Tan Li、Muhammad Azhar、Danista Khan 与 Fawad Ahmad 研究了基于粗粒度话单（CDR）聚合构建的小区级过载监测器，在流量激增模式与训练时的程式化模式不同时的表现。动机：灾害可在数分钟内使蜂窝控制面信令过载，但细粒度 RRC 或 NGAP 遥测涉及隐私且采集成本高，因此用 CDR 网格中的互联网活动作为隐性信令压力的代理。作者声明并不主张该代理与 RRC 负载等价，因为数据集没有过载真值。

数据与检测器：公开的 Telecom Italia 米兰 CDR 数据集（2013-2014，作者称为 3G/4G 时代流量），62 天，11:00-14:00 时段（每天 18 个时隙），9x9 小区网格（81 个小区）。基线过载通过将固定的 40 个小区的互联网活动乘以常数 alpha = 43.3（约偏离正常 59 个标准差）合成，因此同条件测试很容易。主检测器是紧凑 CNN（三个卷积-池化块，滤波器 8/16/32，256 单元全连接层，81 个 sigmoid 输出），输入仅为互联网活动；并将三通道（短信、通话、互联网）ResNet50 变体作为输入-架构组合进行对比。在正常三通道 CDR 聚合上拟合的表格扩散模型用于生成更难、结构保持的激增样本以做压力测试（阶段 2），随后用难样本重训练进行适应（阶段 3）。在线路径对快照打分并按固定 0.5 阈值判决；最优阈值 tau* 则在压力测试网格上离线选取。

发现：在扩散压力测试下，默认 0.5 阈值失效，尽管 ROC 曲线依然良好。检测器仍把过载小区的概率排在正常小区之上，但概率低于 0.5，使得 F1 最优阈值偏移 0.32 +/- 0.03（工作点漂移）。在三个随机种子上，难样本适应使阈值化 F1 从 0%（任何种子在 0.5 下均无告警）升至 85.67 +/- 14.37%，ROC-AUC 从 0.886 +/- 0.040 升至 0.99996 +/- 0.00007。作者将这一流程呈现为应急监测器可复用的部署前压力测试，并称其与其关于多场景恶意流量检测的 IEEE TII 配套论文互补。作者说明的局限：过载标签为合成、数据已有十年、没有配对的信令轨迹。

## Key technical points (EN)
- **Setting**: cell-level signaling-overload monitoring from coarse CDR aggregates; Internet activity used as proxy (no equivalence to RRC load claimed).
- **Data**: Telecom Italia Milano CDR, 62 days, 9x9 grids; synthetic overload by scaling Internet counts of 40 cells by alpha = 43.3.
- **Detector**: compact CNN (8/16/32 filters), Internet-only input; ResNet50 three-channel variant compared.
- **Stress test**: tabular diffusion model fitted on normal traffic generates hard surge samples; then retraining on hard samples.
- **Result**: under the diffusion stress test the default 0.5 threshold gives F1 0% (99.94% under matched baseline surges); oracle threshold drifts by 0.32 +/- 0.03; adaptation lifts F1 to 85.67 +/- 14.37% and ROC-AUC from 0.886 to 0.99996 (3 seeds).
- **Limits stated**: synthetic labels, decade-old data, no paired signaling trace.

## Key technical points (ZH)
- **场景**：基于粗粒度 CDR 聚合的小区级信令过载监测；以互联网活动为代理（不主张与 RRC 负载等价）。
- **数据**：Telecom Italia 米兰 CDR，62 天，9x9 网格；将 40 个小区的互联网计数乘以 alpha = 43.3 合成过载。
- **检测器**：紧凑 CNN（8/16/32 滤波器），仅互联网输入；对比 ResNet50 三通道变体。
- **压力测试**：在正常流量上拟合的表格扩散模型生成难激增样本；随后用难样本重训练。
- **结果**：在扩散压力测试下，默认 0.5 阈值的 F1 为 0%（同条件基线激增下为 99.94%）；最优阈值漂移 0.32 +/- 0.03；适应后 F1 升至 85.67 +/- 14.37%，ROC-AUC 由 0.886 升至 0.99996（3 个种子）。
- **作者指出的局限**：合成标签、十年前的数据、无配对信令轨迹。

## Why it matters / what's new (EN)
Records an evaluation method showing that a fixed-threshold ML monitor can look reliable on stylized training surges yet fail under distribution shift, and that calibration drift is measurable. The work uses 2013-2014 Milan data with synthetic labels, so it demonstrates the testing procedure rather than a deployed 5G monitoring result.

## Why it matters / what's new (ZH)
记录了一种评估方法：固定阈值的机器学习监测器在程式化训练激增上看似可靠，但在分布偏移下可能失效，且校准漂移可以度量。该工作使用 2013-2014 年的米兰数据与合成标签，因此展示的是测试流程，而非已部署的 5G 监测结果。

## Images
None.
