---
id: 2026-11-12_arxiv-mira-wireless-evidence-acquisition-multimodal-inference-temporal-window
date_published: 2026-09-25
date_found: 2026-11-12
technology: edge-ai
type: academic-paper
title_en: "MIRA: scheduling sensor uplinks by evidence gain and channel quality so an edge server can infer before the temporal window closes"
title_zh: "MIRA：按证据增益与信道质量调度传感器上行，使边缘服务器在时间窗关闭前完成推理"
url: "https://arxiv.org/abs/2609.31428"
source_quality: full
topics: [task-oriented-communication, edge-inference, uplink-scheduling, multimodal-fusion, radio-resource-allocation]
topic_primary: task-oriented-communication
topics_secondary: [compute-offloading]
novelty_score: 3
---

## Summary (EN)

Politecnico di Torino, Chalmers and Aalborg authors treat multimodal uplink scheduling as sequential "wireless evidence acquisition". Several heterogeneous sensors observe one event, become ready at different times with different data sizes, and send their observations over a shared uplink to a base station co-located with an edge inference node. Only observations that arrive before a task-prescribed temporal window closes can be fused, so maximising throughput does not necessarily minimise the fused prediction error. The paper is a short letter submitted to IEEE Communications Letters.

For a linear minimum-mean-square-error (LMMSE) fusion model the authors derive a conditional evidence gain metric from the reduction in residual-error volume; it coincides with conditional mutual information when target and prediction errors are jointly Gaussian. On top of it they build MIRA, a greedy maximum information-rate allocation policy that combines each sensor's conditional evidence gain with its channel state information (spectral efficiency) and remaining data volume, and updates sensor relevance as evidence arrives. Link computed over: a simulated 5G-NR-style uplink, 6 resource blocks of 180 kHz (1.08 MHz total), 1 ms slots, independent flat Rayleigh fading, 5 dB average SNR, spectral efficiency taken from an NR SNR-to-CQI-to-efficiency mapping; no over-the-air measurement.

## Summary (ZH)

都灵理工大学、查尔姆斯理工大学与奥尔堡大学的作者把多模态上行调度视为顺序的"无线证据获取"。多个异构传感器观测同一事件，就绪时间与数据量各不相同，经共享上行链路把观测发送到与边缘推理节点同址的基站。只有在任务规定的时间窗关闭前到达的观测才能参与融合，因此最大化吞吐量未必能最小化融合预测误差。该文为投稿 IEEE Communications Letters 的短文。

针对线性最小均方误差（LMMSE）融合模型，作者由残差误差体积的缩减推导出条件证据增益指标；当目标与预测误差联合高斯时，它与条件互信息一致。在此基础上提出 MIRA，一种贪心的最大信息速率分配策略，把各传感器的条件证据增益与其信道状态信息（频谱效率）和剩余数据量结合，并随证据到达更新传感器相关性。所经链路：仿真的类 5G NR 上行，6 个 180 kHz 资源块（共 1.08 MHz）、1 ms 时隙、独立平坦瑞利衰落、平均信噪比 5 dB，频谱效率取自 NR 的 SNR-CQI-效率映射；无空口实测。

## Key technical points (EN)

- Policies compared: MIRA, MIA (relevance-only, serves the most informative sensor first) and Best-CQI (channel-only), all on the same sensor-readiness and channel realisations, averaged over 1,000 Monte Carlo runs.
- Three tasks: a synthetic 6-class classification over 10 sensors, human activity recognition from 60 smartphone accelerometer features split over 10 sensors, and NGSIM US-101 vehicle-trajectory regression with 9 one-feature sensors. Sensing quality is emulated by added noise in the HAR and trajectory tasks.
- Abstract-level results: relative to relevance-only scheduling MIRA improves classification accuracy by up to 70% and lowers regression MSE by up to 5.5%; relative to channel-only scheduling it reaches 80% target accuracy in 58% less acquisition time (about 500 ms versus 1,190 ms in the synthetic uniform-SNR case) and gains up to 95% accuracy and 9% lower MSE.
- Best-CQI receives the most data but not the best accuracy; in the synthetic uniform-SNR case MIA receives up to 18.75% less data than MIRA and 35.00% less than Best-CQI while nearly matching MIRA's accuracy.
- The paper states gains are more pronounced when relevance and channel quality are misaligned (its rank-based SNR setting, where more informative sensors get lower average SNR); the advantage is largest for short-to-moderate deadlines and policies converge as the deadline grows. The 95% headline over Best-CQI comes from the synthetic uniform-SNR case.
- Prediction-error statistics for the fusion rule are estimated offline from calibration data and assumed available at the inference node.

## Key technical points (ZH)

- 对比策略：MIRA、MIA（仅按相关性，优先服务信息量最大的传感器）与 Best-CQI（仅按信道），均在相同的传感器就绪与信道实现上比较，对 1000 次蒙特卡洛取平均。
- 三类任务：10 个传感器的合成 6 类分类；60 个智能手机加速度计特征分给 10 个传感器的人体活动识别；9 个单特征传感器的 NGSIM US-101 车辆轨迹回归。传感质量在人体活动识别与轨迹任务中通过加噪声模拟。
- 摘要级结果：相对仅按相关性的调度，MIRA 分类准确率最多提升 70%、回归 MSE 最多降低 5.5%；相对仅按信道的调度，达到 80% 目标准确率所需采集时间减少 58%（合成均匀信噪比情形约 500 ms 对 1190 ms），准确率最多提升 95%、MSE 降低 9%。
- Best-CQI 收到的数据最多但准确率并非最高；在合成均匀信噪比情形下，MIA 接收的数据比 MIRA 少最多 18.75%、比 Best-CQI 少 35.00%，而准确率与 MIRA 接近。
- 论文称当相关性与信道质量错配时（即其"按排名"信噪比设置，信息量越大的传感器平均信噪比越低）增益更明显；在短至中等截止时间下优势最大，随截止时间变长各策略趋同。相对 Best-CQI 的 95% 增益来自合成任务的均匀信噪比情形。
- 融合规则所需的预测误差统计量由校准数据离线估计，并假设推理节点已知。

## Why it matters / what's new (EN)

It makes the radio scheduler aware of what the edge model needs: which sensor's data to deliver first is decided by its marginal inference value, its channel and its remaining bits together, rather than by rate alone. Caveats: the link is simulated, the predictors are small (Naive Bayes and one-hidden-layer networks), and the time window and error statistics are assumed known.

## Why it matters / what's new (ZH)

它让无线电调度器感知边缘模型的需求：先传哪个传感器的数据，由其边际推理价值、信道与剩余比特共同决定，而不只看速率。局限：链路为仿真，预测器较小（朴素贝叶斯与单隐层网络），且时间窗与误差统计量被假设已知。

## Images

*(No redistributable images for this entry.)*
