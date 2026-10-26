---
id: 2026-10-26_arxiv-starrtt-realtime-rtt-prediction-starlink-rt-lstm
date_published: 2026-10-23
date_found: 2026-10-26
technology: satellite
type: academic-paper
title_en: "StarRTT: Real-Time, Blind-Zone-Free RTT Prediction in Starlink LEO Networks"
title_zh: "StarRTT：Starlink LEO 网络中无盲区的实时 RTT 预测"
url: "https://arxiv.org/abs/2610.32540"
source_quality: full
topics: [Starlink, RTT-prediction, LSTM, serving-satellite-identification, handover, TLE, obstruction-map, bent-pipe]
topic_primary: starlink
topics_secondary: [leo-constellations, sat-ai]
novelty_score: 3
---

## Summary (EN)

Lee, Jeong, Park, Hwang, Han and Shin (arXiv 2610.32540, cs.IT, 15 pages, submitted 23 October 2026) address round-trip-time (RTT) swings in Starlink caused by serving-satellite changes at 15-second scheduling instants. They state that existing serving-satellite identification finishes only at the end of each scheduling cycle, leaving a blind zone of up to 14 seconds, and that the average connection to one satellite lasts about 28.5 seconds. StarRTT identifies the serving satellite every second and predicts RTT over the next 15 seconds.

Identification scores TLE-propagated candidate trajectories against the terminal's obstruction map using angular distance (alone from scheduling instant T to T+4, with directional difference added from T+5 to T+14) and picks the lowest-scoring candidate. The predictor, RT-LSTM, has a two-layer LSTM branch over a 45-second history (RTT, serving-satellite and gateway-relative features) and a second LSTM over TLE-propagated features up to the next scheduling instant; the hidden states are fused with a sigmoid gate. Gateway features use four Japanese bent-pipe gateways (Yamaguchi, Akita, Otaru, Hitachinaka).

Data: about 114.5 hours (18 to 23 March 2026) from a Starlink STANDARD 4X (Gen 3) residential terminal at Korea University, Seoul, loaded by one iPerf3 TCP downlink stream from an AWS Tokyo server; RTT is measured from the router to the PoP. The authors report identification agreement of at least 98.5% with the full-cycle result. Inside the bent-pipe coverage area, mean RTT is about 35 ms; geometry-inferred inter-satellite-link samples outside it average above 40 ms. RT-LSTM reaches a mean absolute error of 1.405 ms averaged over 15 horizons and 15 reference slots, 4.3%, 11.6% and 22.1% lower than LSTM, StarNet and ASTM; against LSTM the gain is 12.5% at the scheduling instant. Scope (editorial observation, not stated as limitations by the authors): one site, one subscription type and about five days of data; link mode is inferred from geometry rather than observed (as the paper describes); no component ablation is reported.

## Summary (ZH)

Lee、Jeong、Park、Hwang、Han 和 Shin（arXiv 2610.32540，cs.IT，15 页，2026 年 10 月 23 日提交）针对 Starlink 在每 15 秒一次的调度时刻切换服务卫星所导致的往返时延（RTT）剧烈波动。作者称，现有服务卫星识别方法要到每个调度周期结束才能完成，留下最长 14 秒的盲区；单颗卫星的平均连接时长约为 28.5 秒。StarRTT 每秒识别一次服务卫星，并预测未来 15 秒的 RTT。

识别环节用终端遮挡图对 TLE 推演出的候选轨迹打分：从调度时刻 T 到 T+4 只用角距离，T+5 到 T+14 再加入方向差，取得分最低的候选。预测器 RT-LSTM 包含一个对 45 秒历史（RTT、服务卫星与网关相对特征）的两层 LSTM 分支，以及一个对直至下一调度时刻的 TLE 推演特征的 LSTM 分支，两者隐状态经 sigmoid 门融合。网关特征采用四个日本弯管网关（山口、秋田、小樽、日立那珂凑）。

数据：2026 年 3 月 18 日至 23 日约 114.5 小时，来自首尔高丽大学的 Starlink STANDARD 4X（Gen 3）家用终端，以一条来自 AWS 东京服务器的 iPerf3 TCP 下行流加载；RTT 为路由器到 PoP 的时延。作者报告识别结果与整周期结果的一致率不低于 98.5%。在弯管覆盖区内平均 RTT 约 35 ms；区外按几何推断的星间链路样本平均高于 40 ms。RT-LSTM 在 15 个预测时域和 15 个参考时隙上的平均绝对误差为 1.405 ms，分别比 LSTM、StarNet 和 ASTM 低 4.3%、11.6% 和 22.1%；在调度时刻相对 LSTM 的改善为 12.5%。范围说明（编者观察，并非论文自述局限）：仅一个站点、一种订阅类型、约五天数据；链路模式按几何推断而非直接观测（论文所述）；未做组件消融。

## Key technical points (EN)

- **Problem**: serving-satellite identification only at the end of each 15 s cycle leaves a blind zone of up to 14 s.
- **Identification**: TLE candidates scored against the obstruction map (angular distance, plus directional difference from T+5).
- **Model**: RT-LSTM, history branch (45 s) plus future branch (TLE features), sigmoid-gated fusion.
- **Data**: about 114.5 h, one Gen 3 terminal in Seoul, iPerf3 TCP load, RTT to PoP.
- **Result**: MAE 1.405 ms; 4.3% / 11.6% / 22.1% below LSTM / StarNet / ASTM.
- **Not reported**: hidden sizes, optimiser, train/validation split, ablations.

## Key technical points (ZH)

- **问题**：服务卫星仅在每个 15 秒周期结束时识别，留下最长 14 秒盲区。
- **识别**：用遮挡图对 TLE 候选打分（角距离，T+5 起加入方向差）。
- **模型**：RT-LSTM，历史分支（45 秒）加未来分支（TLE 特征），sigmoid 门融合。
- **数据**：约 114.5 小时，首尔一台 Gen 3 终端，iPerf3 TCP 负载，测量到 PoP 的 RTT。
- **结果**：MAE 1.405 ms；比 LSTM / StarNet / ASTM 低 4.3% / 11.6% / 22.1%。
- **未报告**：隐层规模、优化器、训练/验证划分、消融实验。

## Why it matters / what's new (EN)

The paper adds a per-second serving-satellite estimate to RTT prediction on a measured Starlink trace. Results come from one terminal over roughly five days and are not independently replicated.

## Why it matters / what's new (ZH)

该论文在实测 Starlink 轨迹上为 RTT 预测加入了逐秒的服务卫星估计。结果来自单一终端约五天的数据，未经独立复现。

## Images

None.
