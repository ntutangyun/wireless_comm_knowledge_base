---
id: 2026-11-17_arxiv-measurement-calibrated-synthetic-pretraining-uav-csi-predictors-oai
date_published: 2026-11-12
date_found: 2026-11-17
type: academic-paper
technology: cellular
title_en: "Measurement-Calibrated Synthetic Pretraining for Rapid Adaptation of UAV Channel Predictors"
title_zh: "面向无人机信道预测器快速适配的实测校准合成数据预训练"
url: "https://arxiv.org/abs/2611.16646"
source_quality: full
topics: [UAV, CSI, channel-prediction, synthetic-data, pretraining, OpenAirInterface, transfer-learning]
topic_primary: cellular-ai
topics_secondary: [6g-vision]
novelty_score: 3
---

## Summary (EN)

Zhou, Jiang, Wang and Schotten (DFKI and RPTU Kaiserslautern-Landau) ask how quickly a UAV channel-state-information (CSI) predictor can be commissioned when only a short measured calibration segment is available. They pretrain on a synthetic CSI source whose statistics are matched to real flight measurements, then fine-tune on measured source-flight data before adapting to a target flight. The measurements come from the authors' earlier UAV-to-ground campaign built on the open-source OpenAirInterface ecosystem. The accepted version was presented at IEEE VTC2026-Fall (Boston).

Evaluation uses chronological held-out flight splits, a 574-dimensional band-stitched magnitude CSI vector per 10 ms step, and a "latest channel estimate" persistence baseline. The paper reports that synthetic-to-real (S2R) fine-tuning reaches useful prediction with far fewer measured windows than training from scratch, and that the advantage shrinks as measured data grows.

## Summary (ZH)

Zhou、Jiang、Wang 与 Schotten（DFKI 与 RPTU 凯泽斯劳滕-兰道）研究：当只有一小段实测校准数据时，无人机信道状态信息（CSI）预测器能多快投入使用。他们先在统计特性与真实飞行测量相匹配的合成 CSI 上预训练，再用实测的源飞行数据微调，最后适配目标飞行。测量数据来自作者此前基于开源 OpenAirInterface 生态构建的无人机对地测量。该论文录用版本已在 IEEE VTC2026-Fall（波士顿）上宣读。

评估采用按时间顺序划分的留出飞行数据，每 10 ms 一个 574 维的频段拼接幅度 CSI 向量，并以“最新信道估计”持续性（persistence）预测作为基线。论文报告称，合成到实测（S2R）微调所需的实测窗口数远少于从零训练，且随着实测数据增多优势缩小。

## Key technical points (EN)

- Synthetic source: a controllable statistical generator (mission-level power envelope, smooth frequency profile, low-frequency temporal-shape field, phase random walk modelling LO drift and residual Doppler), with parameters fitted to measured statistics. On the calibration flights it matches mean power (46.723 dB) and power standard deviation (4.554 dB) exactly by construction; lag-1 power correlation is 0.979 versus 0.958 measured, and phase-increment spread 1.800 versus 1.803 rad.
- Data setup: three same-height source missions (15 m/s phases 1-2 and a 20 m/s long route), a disjoint 10 m/s target flight for testing, chronological 60/20/20 split with a boundary gap, 3 seeds. Calibration budgets run from 50 to 5000 training windows (about 0.8% to 82% of the measured pool of roughly 6071-6147 windows). The main model is a slot-conditioned Transformer (11.4 M parameters).
- Break-even versus persistence at the 50 ms-ahead horizon (horizon 5): S2R beats persistence with 50 measured windows (about 0.5 s, 0.8% of the pool); real-only training needs 600 windows (about 6 s, 10%). The paper notes this is horizon-dependent: for the shortest horizons persistence is strongest and neither strategy crosses it at the smallest budgets.
- Gain over real-only averaged across six settings: 3.02 dB at 50 windows and 3.24 dB at 100, falling to 1.22, 0.95, 0.72 and 0.35 dB at 300, 600, 1000 and 2000 windows. Synthetic-only (no measured data) does not consistently beat persistence.
- Predictor families at 50 ms-ahead: average S2R gain over real-only is 1.07 dB for GRU, 0.85 dB for LSTM and 0.58 dB for the Transformer.
- Target-prefix adaptation: a GRU source prior adapted with one prediction-layer update epoch on a short target-flight prefix; with only 50-300 measured source windows, S2R lowers target-suffix NMSE by about 1.7-3.3 dB across the tested prefix durations, while with a full measured source budget the two priors nearly coincide.
- Scope stated by the authors: magnitude-only prediction under related flight conditions at fixed height; phase is used only to calibrate synthetic disturbance statistics.

## Key technical points (ZH)

- 合成数据源：可控的统计生成器（任务级功率包络、平滑频率轮廓、低频时间形状场，以及刻画本振漂移与残余多普勒的相位随机游走），参数由实测统计量拟合。在校准飞行数据上，平均功率（46.723 dB）与功率标准差（4.554 dB）按构造完全一致；功率一阶自相关为 0.979（实测 0.958），相位增量离散度为 1.800 rad（实测 1.803 rad）。
- 数据设置：三次同高度源任务（15 m/s 的第 1-2 阶段与一条 20 m/s 长航线），用一次互不重叠的 10 m/s 目标飞行做测试；按时间顺序 60/20/20 划分并设边界间隔，3 个随机种子。校准预算为 50 至 5000 个训练窗口（约占实测数据池的 0.8% 至 82%，实测池约 6071-6147 个窗口）。主模型为带时隙条件的 Transformer（1140 万参数）。
- 50 ms 预测时域（horizon 5）相对持续性基线的盈亏平衡点：S2R 仅需 50 个实测窗口（约 0.5 s、占数据池 0.8%）即可超过持续性预测，而仅用实测数据从零训练需要 600 个窗口（约 6 s、10%）。论文指出这一效果与预测时域有关：最短时域上持续性预测最强，最小预算下两种策略都无法超越它。
- 六种设置平均，S2R 相对仅实测训练的增益：50 个窗口时 3.02 dB，100 个窗口时 3.24 dB，在 300、600、1000、2000 个窗口时降至 1.22、0.95、0.72、0.35 dB。仅用合成数据（不使用实测数据）无法稳定超越持续性预测。
- 50 ms 预测时域下不同预测器：S2R 相对仅实测训练的平均增益，GRU 为 1.07 dB，LSTM 为 0.85 dB，Transformer 为 0.58 dB。
- 目标飞行前缀适配：GRU 源先验仅在目标飞行的一小段前缀上做一轮预测层更新；当实测源窗口只有 50-300 个时，S2R 使目标后段的 NMSE 在所测前缀时长上降低约 1.7-3.3 dB，而源数据充足时两种先验几乎一致。
- 作者声明的范围：仅做幅度预测，针对固定高度的相关飞行条件；相位仅用于校准合成扰动的统计量。

## Why it matters / what's new (EN)

The paper frames synthetic data as a way to shrink the measured-data and update budget needed before a CSI predictor beats a no-training reference, rather than as a replacement for measurements. It is a companion to the same group's open OAI UAV measurement testbed already in this knowledge base. The data come from one site's flight family and a magnitude-only target, so the reported budgets are case-study figures.

## Why it matters / what's new (ZH)

论文把合成数据定位为缩减 CSI 预测器超越“免训练”参考基线所需的实测数据与更新预算的手段，而不是实测数据的替代品。它与本知识库中已有的同一团队基于 OAI 的开源无人机测量测试床相互呼应。数据仅来自单一场地的一组飞行且目标为仅幅度预测，因此文中的预算数字属于案例研究结果。
