---
id: 2026-08-13_ssrn-delay-compensated-uwb-localization
date_published: 2026-08-09
date_found: 2026-08-13
type: academic-paper
technology: uwb
title_en: "Real-Time Delay-Compensated UWB Localization for Dynamic Agents via Deep Trajectory Prediction"
title_zh: "基于深度轨迹预测的动态目标实时时延补偿 UWB 定位"
url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5786581"
source_quality: snippet_only
topics: [UWB, localization, CIR, NLoS, deep-learning, trajectory-prediction]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 2
---

## Summary (EN)
Somayeh Modaberi and Behrouz Far (University of Calgary; SSRN preprint, surfaced via the 9 Aug 2026 Wi-Fi NOW roundup) tackle a practical flaw in UWB positioning of *moving* targets: by the time a position fix is computed and delivered, the agent has moved on — processing and system latency turn an accurate measurement into a stale answer. Their framework predicts the agent's position **at the time the result actually becomes available**, not at measurement time.

The predictor is a deep sequence model fed two complementary inputs: the **Channel Impulse Response (CIR)** — whose multipath structure lets the model recognize and correct non-line-of-sight (NLoS) range bias — and **recent motion history**, which captures the agent's dynamics. The authors benchmark CNN-Transformer, pure Transformer and LSTM architectures against a constant-velocity baseline on a large public UWB dataset (~491k samples across four environments). The CNN-Transformer hybrid wins with **0.26 m mean error and 85% of fixes within 0.5 m**, with predictions aligned to the actual system delay for real-time operation.

(SSRN blocks anonymous fetches; summarized from the Wi-Fi NOW coverage, the SSRN listing snippet, and the companion University of Calgary thesis record — full-text verification pending.)

## Summary (ZH)
Somayeh Modaberi 与 Behrouz Far（卡尔加里大学；SSRN 预印本，经 2026 年 8 月 9 日 Wi-Fi NOW 综述发现）解决 UWB 定位*运动*目标的一个实际缺陷：位置解算并送达时目标已经移动——处理与系统时延把精确测量变成过时答案。其框架预测**结果实际可用时刻**的目标位置，而非测量时刻的位置。

预测器是深度序列模型，输入两类互补信息：**信道冲激响应（CIR）**——其多径结构使模型能识别并校正非视距（NLoS）测距偏差；以及**近期运动历史**——刻画目标动力学。作者在大型公开 UWB 数据集（约 49.1 万样本、4 种环境）上对比 CNN-Transformer、纯 Transformer、LSTM 与恒速基线：CNN-Transformer 混合架构最优，**平均误差 0.26 m，85% 定位结果在 0.5 m 以内**，且预测与实际系统时延对齐以保证实时性。

（SSRN 拒绝匿名抓取；本条目依据 Wi-Fi NOW 报道、SSRN 列表摘要及卡尔加里大学论文库记录撰写，全文核验待后续。）

## Key technical points (EN)
- Problem: system/processing latency makes UWB fixes stale for moving agents; solution predicts position at result-delivery time.
- Inputs: CIR (multipath signature → NLoS bias correction) + recent trajectory history (agent dynamics).
- Benchmark: CNN-Transformer vs Transformer vs LSTM vs constant-velocity; ~491k samples, 4 environments.
- Result: 0.26 m mean error, 85% within 0.5 m (CNN-Transformer), delay-aligned prediction.

## Key technical points (ZH)
- 问题：系统/处理时延使运动目标的 UWB 定位过时；方案预测结果送达时刻的位置。
- 输入：CIR（多径特征 → NLoS 偏差校正）+ 近期轨迹历史（目标动力学）。
- 对比：CNN-Transformer vs Transformer vs LSTM vs 恒速基线；约 49.1 万样本、4 种环境。
- 结果：平均误差 0.26 m，85% 在 0.5 m 内（CNN-Transformer），时延对齐预测。

## Why it matters / what's new (EN)
The KB's UWB-ranging bin tracks accuracy improvements (transformer ranging-error correction, AB-Sync TDOA clock sync) but this is the first entry to treat *latency itself* as the error source — reframing localization as short-horizon trajectory forecasting synchronized to system delay. For robot/AGV tracking (the Murata factory-tracking entry's domain) this is the difference between a position log and a control input.

## Why it matters / what's new (ZH)
KB 的 UWB 测距类目跟踪的是精度改进（Transformer 测距误差校正、AB-Sync TDOA 时钟同步），本条目首次把*时延本身*视为误差来源——将定位重构为与系统时延同步的短时轨迹预测。对机器人/AGV 跟踪（Murata 工厂跟踪条目的场景），这是"位置日志"与"控制输入"之间的差别。
