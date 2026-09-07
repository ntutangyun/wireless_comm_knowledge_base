---
id: 2026-09-07_arxiv-beam-hopping-traffic-forecaster-comparison
date_published: 2026-09-04
date_found: 2026-09-07
type: academic-paper
technology: satellite
title_en: "Is Forecasting Accuracy Enough? Beam-Hopping LEO Study Finds System Utilization and Planning Period Matter More Than Which Traffic Forecaster You Pick"
title_zh: "预测准确率就够了吗？一项波束跳变 LEO 研究发现，系统利用率与规划周期对性能的影响远大于选用哪种流量预测器"
url: "https://arxiv.org/abs/2609.04662"
source_quality: full
topics: [beam-hopping, traffic-forecasting, self-similar-traffic, FARIMA, transformer-forecasting, foundation-models, DLinear, Chronos, resource-allocation, illumination-planning]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)
Demirci, Mantelet, Martel, Frigon and Karabulut Kurt (accepted for publication in the IEEE Journal of RFID) evaluate whether raw predictive accuracy is even the right objective for traffic forecasting in beam-hopping (BH) LEO satellite networks, where a forecast drives the next illumination (beam-allocation) plan. Traffic is modeled as second-order self-similar (a mean-rate term plus scaled fractional Brownian motion with Hurst parameter H), justified by prior self-similarity findings for Ethernet, WAN, and WWW traffic and argued to fit BH beam traffic because it is highly aggregated IP traffic; the synthetic model is cross-validated against the CRAWDAD Dartmouth "fall01" Wi-Fi trace (476 802.11b access points, ~5,500 students and ~1,200 faculty, SNMP-polled at 5-minute periodicity, aggregated by the authors into 10-minute windows, over 18 Sept-18 Nov 2001). Seven forecasters are compared: two theoretically-optimal statistical predictors for (fractional) self-similar processes (the Norros forecaster and the best linear predictor on the sampling grid), a FARIMA(p,d,q) model, and four deep-learning models spanning a Transformer with ProbSparse attention (Informer), a decomposition-based linear model (DLinear, 150-3,000 parameters), and a foundation time-series model (Chronos) both zero-shot and fine-tuned (Chronos*). Evaluated in isolation via Mean Absolute Scaled Error and in context via a millisecond-slot BH simulator (three cells sharing one beam, 1,500 Pareto ON/OFF sources, largest-remainder beam apportionment) across five utilization/planning-period/self-similarity/asymmetry scenarios, the self-similarity-aware statistical forecasters dominate on purely synthetic self-similar data but the ordering nearly reverses on the raw Wi-Fi trace, where seasonality violates the stationary-increment assumption; removing the periodic component restores their advantage. The central finding is that these substantial MASE-level accuracy gaps barely propagate to system-level loss ratio and buffer backlog, which are instead governed by system utilization and planning-period length — the gap between forecasters closes entirely below 0.90 utilization, and planning period shows a non-monotonic optimum (best around 150 ms in the tested configuration) where rigid slot granularity, not the forecast, becomes the binding constraint. The authors conclude that optimizing the utilization margin and carefully tuning the planning period are likely to yield much larger system-level gains than simply deploying a more accurate forecasting model; they also note that foundation models' parameter counts and energy consumption often make them unsuitable for the size and power constraints of LEO satellite payloads, and that Informer is computationally expensive compared to the Linear and Norros forecasters.

## Summary (ZH)
Demirci、Mantelet、Martel、Frigon 与 Karabulut Kurt（论文已被 IEEE《射频识别期刊》接收）研究了一个更根本的问题：在波束跳变（BH）LEO 卫星网络中，原始预测准确率是否真的是流量预测的正确优化目标——此处预测结果直接驱动下一轮的波束照射（资源分配）计划。流量被建模为二阶自相似过程（一个均值速率项加上带 Hurst 参数 H 的缩放分数布朗运动），其合理性来自以太网、广域网与 WWW 流量此前已被证实的自相似性发现，并论证 BH 波束流量高度聚合的 IP 流量特性与之契合；该合成模型还与达特茅斯 CRAWDAD 数据集中的"fall01" Wi-Fi 轨迹进行了交叉验证（476 个 802.11b 接入点，约 5,500 名学生与约 1,200 名教职工，2001 年 9 月 18 日至 11 月 18 日期间，SNMP 轮询周期为 5 分钟，作者聚合为 10 分钟窗口）。论文比较了七种预测器：两种针对（分数）自相似过程的理论最优统计预测器（Norros 预测器与采样网格上的最佳线性预测器）、一个 FARIMA(p,d,q) 模型，以及四种深度学习模型——采用 ProbSparse 注意力的 Transformer（Informer）、基于分解的线性模型（DLinear，150-3,000 个参数），以及一个时间序列基础模型 Chronos（零样本与微调版 Chronos* 两种形态）。在毫秒级时隙的 BH 仿真器中（三个小区共享一个波束，1,500 个 Pareto ON/OFF 信源，最大余数法波束配额分配），跨五种利用率/规划周期/自相似性/非对称性场景，分别以平均绝对标度误差（MASE，孤立评估）与丢失率/缓冲区积压（系统层面评估）衡量：在纯合成自相似数据上，具备自相似意识的统计预测器占据优势；但在原始 Wi-Fi 轨迹上，这一排序几乎逆转，原因是季节性违反了平稳增量假设；剔除周期性分量后，统计预测器的优势得以恢复。核心发现是：这些在 MASE 层面十分显著的准确率差异，几乎不会传导到系统层面的丢失率与缓冲区积压——后者主要由系统利用率与规划周期长度决定：在利用率低于 0.90 时，预测器之间的差距完全消失；规划周期则呈现非单调的最优点（在所测试配置中约为 150 毫秒），届时是刚性的时隙粒度、而非预测本身，成为约束瓶颈。作者的结论是：相较于单纯部署更准确的预测模型，优化利用率余量并精细调优规划周期更有可能带来大得多的系统层面收益；他们还指出，基础模型的参数量与能耗往往使其难以适应 LEO 卫星载荷的尺寸与功耗约束，且 Informer 相较 Linear 与 Norros 预测器计算成本更高。

## Key technical points (EN)
- **Venue:** accepted for publication in the IEEE Journal of RFID (per the arxiv comment field on the preprint).
- **Traffic model:** second-order self-similar process, A_t = mt + sqrt(alpha*m)*Z_t, Z_t a Hurst-H fractional Brownian motion; cross-validated against the CRAWDAD Dartmouth "fall01" Wi-Fi trace (476 802.11b APs, ~5,500 students/~1,200 faculty, SNMP-polled at 5-minute periodicity and aggregated into 10-minute windows, Sept-Nov 2001).
- **Forecasters compared (7):** Norros forecaster, best linear predictor (fGn), FARIMA(p,d,q), Informer (ProbSparse-attention Transformer), DLinear (150-3,000 params), Chronos (zero-shot foundation model), Chronos* (fine-tuned).
- **BH simulator:** 1 ms slots, three cells per shared beam, 1 MiB buffer/cell, 1,500 Pareto ON/OFF sources, largest-remainder beam-weight apportionment plus round-robin interleaving.
- **MASE result:** on synthetic self-similar data (H~0.98/0.88/0.78) the statistical forecasters (Linear/Norros/FARIMA, MASE ~0.84-0.92) beat the learned models; on the raw Wi-Fi trace DLinear is best (0.9864) and Linear worst (1.1690) — order nearly reverses; deseasonalizing restores FARIMA to best (0.9665).
- **System-level result:** loss ratio and buffer backlog are dominated by utilization (rho) and planning period, not forecaster choice; forecaster gap vanishes entirely below rho=0.90; planning period has a non-monotonic optimum (~150 ms in the tested setup) where slot granularity, not forecast quality, binds.
- **Conclusion:** optimizing the utilization margin and carefully tuning the planning period are likely to yield much larger system-level gains than simply deploying a more accurate forecasting model; foundation models' parameter counts and energy consumption often make them unsuitable for the size/power constraints of LEO satellite payloads, and Informer is computationally expensive compared to the Linear and Norros forecasters.

## Key technical points (ZH)
- **发表载体：** 已被 IEEE《射频识别期刊》接收（依据预印本 arxiv 评论字段）。
- **流量模型：** 二阶自相似过程 A_t = mt + sqrt(alpha*m)*Z_t，Z_t 为 Hurst 参数 H 的分数布朗运动；与达特茅斯 CRAWDAD "fall01" Wi-Fi 轨迹交叉验证（476 个 802.11b 接入点，约 5,500 名学生/约 1,200 名教职工，SNMP 轮询周期为 5 分钟、作者聚合为 10 分钟窗口，2001 年 9-11 月）。
- **对比的七种预测器：** Norros 预测器、最佳线性预测器（分数高斯噪声）、FARIMA(p,d,q)、Informer（ProbSparse 注意力 Transformer）、DLinear（150-3,000 参数）、Chronos（零样本基础模型）、Chronos*（微调版）。
- **BH 仿真器：** 1 毫秒时隙，三个小区共享一个波束，每小区 1 MiB 缓冲区，1,500 个 Pareto ON/OFF 信源，最大余数法波束权重分配加轮询交织。
- **MASE 结果：** 在合成自相似数据（H~0.98/0.88/0.78）上，统计类预测器（线性/Norros/FARIMA，MASE 约 0.84-0.92）优于学习型模型；在原始 Wi-Fi 轨迹上 DLinear 表现最佳（0.9864），线性预测器最差（1.1690）——排序几乎逆转；去季节化后 FARIMA 恢复为最佳（0.9665）。
- **系统层面结果：** 丢失率与缓冲区积压主要由利用率（rho）与规划周期决定，而非预测器选择；利用率低于 0.90 时预测器间差距完全消失；规划周期呈非单调最优（所测配置中约 150 毫秒），此时是时隙粒度、而非预测质量成为约束瓶颈。
- **结论：** 相较于单纯部署更准确的预测模型，优化利用率余量并精细调优规划周期更有可能带来大得多的系统层面收益；基础模型的参数量与能耗往往使其难以适应 LEO 卫星载荷的尺寸/功耗约束，且 Informer 相较 Linear 与 Norros 预测器计算成本更高。

## Why it matters / what's new (EN)
This KB's leo-constellations bin already tracks beam-hopping demand forecasting (2026-08-15, DVB-S2X beam-hopping demand forecasting, Norros vs. FARIMA) and beam-hopping resource allocation as a recurring sub-axis. This paper adds a distinct, counter-intuitive data point to that thread rather than another forecaster proposal: it argues, with a matched isolated-accuracy-vs-system-level evaluation on the same BH pipeline, that the accuracy differences the field has been optimizing for barely matter once the system is looked at end-to-end — utilization headroom and planning-period choice dominate instead. It is also the first entry in this bin to validate a satellite beam-traffic model against a real terrestrial Wi-Fi trace (rather than only simulated or satellite-native data) and to explicitly test forecaster robustness against real-world seasonality, a factor synthetic self-similar traffic studies do not by themselves expose.

## Why it matters / what's new (ZH)
本知识库的 leo-constellations 分箱已追踪波束跳变需求预测（2026-08-15，DVB-S2X 波束跳变需求预测，Norros 对比 FARIMA）以及波束跳变资源分配这一持续出现的子方向。本文并未再提出一个新的预测器，而是为这条线索补上了一个不同寻常的反直觉数据点：通过在同一套 BH 流水线上对"孤立准确率"与"系统层面表现"进行匹配评估，论文论证了该领域此前一直在优化的准确率差异，一旦放到端到端系统中审视便几乎无关紧要——真正起主导作用的是利用率余量与规划周期的选择。这也是该分箱中首个将卫星波束流量模型与真实地面 Wi-Fi 轨迹（而非仅限仿真或卫星原生数据）进行交叉验证、并明确检验预测器在真实季节性因素下鲁棒性的条目——而合成自相似流量研究本身并不会暴露这一因素。

## Images

None.
