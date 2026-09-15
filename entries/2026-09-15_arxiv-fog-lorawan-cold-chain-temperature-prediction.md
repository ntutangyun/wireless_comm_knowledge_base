---
id: 2026-09-15_arxiv-fog-lorawan-cold-chain-temperature-prediction
date_published: 2026-09-12
date_found: 2026-09-15
type: academic-paper
technology: edge-ai
title_en: "Real-World Deployment and Performance Characterisation of Fog-Based Deep Learning for Cold-Chain Temperature Prediction over LoRaWAN"
title_zh: "基于 LoRaWAN 的雾计算深度学习冷链温度预测：真实场景部署与性能实测"
url: "https://arxiv.org/abs/2609.14036"
source_quality: full
topics: [on-device-inference, fog-computing, LoRaWAN, explainable-AI, cold-chain]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

Researchers Jeremiah Taguta, Jean Frederic Isingizwe Nturambirwe, and Clement Nthambazale Nyirenda (University of the Western Cape, Cape Town, South Africa — Department of Computer Science and the eResearch Office) report a month-long real-world deployment of a fog-computing deep-learning pipeline for cold-chain temperature prediction, run entirely on a Raspberry Pi 4B (4-core ARM Cortex-A72, 4 GB RAM) with no cloud dependency for inference. The system is deployed in an experimental/controlled apple cold room in Stellenbosch, South Africa — held at real cold-chain operating temperatures with deliberately induced temperature deviations — monitoring 54 crates of Sundowner apples in a room held near -0.5°C, using a Synetica enLink ZonePlus environmental sensor and a Netvox R718E vibration/acceleration sensor transmitting over LoRaWAN (EU868 band, via a Kerlink iFemtoCell-evo gateway, ChirpStack v4.17.0 network server, and an Eclipse MQTT broker) at a 5-minute reporting interval. The deployment ran continuously from 2026-05-25, with data analysed through 2026-06-18 (24 operational days, 5,619 prediction cycles).

The model is a stacked LSTM(64)->Dropout(0.5)->BatchNorm->GRU(50)->BatchNorm->Dense(1) network, loaded once at startup and reused for all predictions. Inference is event-driven, triggered by vibration-sensor readings, and predicts the room's temperature at the next 5-minute interval from a rolling buffer of recent environmental readings fused with the latest vibration data; predictions are then classified as "normal" or a "break" against configured thresholds. When a break is predicted, the system additionally computes a SHAP (GradientExplainer, 100-record background set) feature-attribution explanation — but only in that case, so the explainability subsystem carries zero overhead during normal operation.

## Summary (ZH)

研究者 Jeremiah Taguta、Jean Frederic Isingizwe Nturambirwe 与 Clement Nthambazale Nyirenda（南非开普敦西开普大学——计算机科学系与 eResearch Office）报告了一项为期一个月的真实场景部署：一套雾计算深度学习冷链温度预测流水线，完整运行于一台 Raspberry Pi 4B（4 核 ARM Cortex-A72，4GB 内存）之上，推理过程不依赖云端。该系统部署于南非斯泰伦博斯一个实验性/受控的苹果冷库——维持在真实冷链运行温度，并人为引入温度偏移——监测存放于约 -0.5°C 冷库中的 54 箱 Sundowner 苹果，采用 Synetica enLink ZonePlus 环境传感器与 Netvox R718E 振动/加速度传感器，通过 LoRaWAN（EU868 频段，经由 Kerlink iFemtoCell-evo 网关、ChirpStack v4.17.0 网络服务器与 Eclipse MQTT 消息代理）以 5 分钟为周期上报数据。该部署自 2026 年 5 月 25 日起连续运行，本研究分析的数据截至 6 月 18 日（共 24 个运行日，覆盖 5,619 次预测周期）。

所用模型为堆叠结构 LSTM(64) → Dropout(0.5) → 批归一化 → GRU(50) → 批归一化 → 全连接(1)，在启动时加载一次并复用于全部预测。推理为事件驱动，由振动传感器读数触发，基于近期环境读数与最新振动数据融合而成的滚动缓冲区，预测冷库在下一个 5 分钟周期的温度；随后依据设定阈值将预测结果分类为「正常」或「异常（温度突破）」。当预测为异常时，系统还会额外计算一次 SHAP（GradientExplainer，训练集抽取 100 条作为背景样本）特征归因解释——但仅在此情形下计算，因此可解释性模块在正常运行期间不产生任何额外开销。

## Key technical points (EN)

- **Accuracy**: for next-interval temperature prediction, MAE 0.1972°C (95% CI [0.1834, 0.2146]), MSE 0.3826 (95% CI [0.1519, 0.6874]), and R² 0.7683 (95% CI [0.5846, 0.8961]) — the paper attributes the comparatively higher MSE and moderate R² to the model's difficulty anticipating sharp, genuine temperature spikes in advance.
- **Energy**: approximately 0.7 Wh per prediction (amortised over 1,457 predictions in a representative 5-day measurement window), roughly 0.2 kWh/day at an average draw of ≈8 W — measured for the complete deployed system (fog node plus gateway) rather than the fog node alone.
- **Latency**: end-to-end delivery in about 555 ms, excluding the gateway-to-network-server hop; of that, roughly 283 ms is on-node processing (228 ms of which is the model inference call itself), with the remainder attributable to the network-server-to-MQTT-broker path.
- **Explainability overhead**: SHAP computation, triggered only on predicted breaks, adds approximately 195 ms and raises CPU utilization from a mean of 1.89% to 2.42% (a 28% relative increase) when it fires; during normal operation the explainability subsystem has zero per-cycle cost. SHAP attribution identified humidity, temperature lag, and their interaction as the top predictive features, with CO2, light, and acceleration contributing minimally.
- **Resource footprint**: mean memory usage of 727.41 MiB (+/-6.51), under 20% of the Pi 4's capacity; mean CPU usage of 1.95% across the full run.
- **Field resilience**: 86.31% system availability over the 24 operational days, with 79.1 hours of downtime across 5 field failures; most of these failures required manual intervention to fix, though the service resumed automatically once fixed. The paper reports the fog node continued local operation through internet-connectivity loss — a resilience property the authors state is not observable through simulation alone — but also flags a structural single point of failure: inference is triggered by the supplementary vibration sensor's readings, so if that sensor goes offline, inference halts even while the environmental sensor keeps reporting.
- **Authors' own novelty claim** (relayed as such, not independently verified by this KB): the paper states "to the best of the authors' knowledge, this study presents the first reported real-world deployment and measurement of an explainable ML... temperature-prediction pipeline" of this kind, and separately that these are "the first published deployment benchmarks for fog-based temperature prediction in FFV [fresh fruit and vegetable] cold chains."

## Key technical points (ZH)

- **准确率**：下一周期温度预测的 MAE 为 0.1972°C（95% 置信区间 [0.1834, 0.2146]），MSE 为 0.3826（95% 置信区间 [0.1519, 0.6874]），R² 为 0.7683（95% 置信区间 [0.5846, 0.8961]）——论文将相对偏高的 MSE 与中等水平的 R² 归因于模型难以提前预判真实发生的剧烈温度尖峰。
- **能耗**：每次预测约 0.7 Wh（基于 5 天代表性测量窗口内 1,457 次预测的摊销值），整体日耗电约 0.2 kWh，平均功耗约 8 W——该测量针对的是完整部署系统（雾节点 + 网关），而非仅雾节点本身。
- **延迟**：端到端交付约 555 ms（不含网关到网络服务器一跳）；其中约 283 ms 为节点本地处理（其中 228 ms 为模型推理本身），其余部分主要归因于网络服务器到 MQTT 代理的传输路径。
- **可解释性开销**：SHAP 计算仅在预测为异常时触发，触发时增加约 195 ms 延迟，并将 CPU 利用率从均值 1.89% 提升至 2.42%（相对提升 28%）；正常运行期间可解释性模块不产生任何额外开销。SHAP 归因结果显示，湿度、温度滞后及二者交互作用为最重要的预测特征，而 CO2、光照与加速度贡献极小。
- **资源占用**：平均内存占用 727.41 MiB（±6.51），低于 Pi 4 容量的 20%；整个运行期间平均 CPU 利用率为 1.95%。
- **现场稳健性**：在 24 个运行日内系统可用率为 86.31%，期间共发生 5 次现场故障，累计停机 79.1 小时；其中多数故障需人工介入才能修复，修复后服务会自动恢复。论文报告该雾节点在互联网连接中断期间仍能维持本地运行——作者指出这一稳健性特征是仿真环境无法观察到的——但同时也指出了一个结构性的单点故障：推理由辅助振动传感器的读数触发，因此一旦该传感器离线，即便环境传感器仍在正常上报，推理也会随之中断。
- **作者自述创新性主张**（作为作者观点转述，本知识库未独立核实）：论文称「据作者所知，本研究是此类可解释机器学习温度预测流水线的首次真实场景部署与实测报告」，并另外指出这是「新鲜果蔬（FFV）冷链雾计算温度预测领域首个公开的部署性能基准」。

## Why it matters / what's new (EN)

This is a real-world deployment instance — as opposed to a lab/offline benchmark or simulation — of the edge-compute-placement theme this KB tracks under on-device-inference: a deep-learning model running entirely on a Raspberry Pi 4 over a live LoRaWAN sensor network, with month-long field data. The facility is an experimental/controlled cold room with deliberately induced breaks rather than an unmodified commercial cold-storage operation, and the paper itself cautions that performance under normal commercial handling (door openings, product turnover) may differ. It's still a useful counterpoint to this domain's usual mobile-LLM-centric coverage: the deployment target here is a tiny recurrent network (not an LLM), the network layer is LoRaWAN rather than Wi-Fi or cellular, and the paper's field-failure and connectivity-loss resilience data is a category of evidence (real deployment uptime/downtime, including failures that needed manual fixes and a sensor-triggered single point of failure) this KB rarely gets from academic sources.

## Why it matters / what's new (ZH)

本文为本知识库在「端侧推理」分区下持续跟踪的「边缘计算落点」主题提供了一个真实部署实例——相对于实验室/离线基准测试或仿真而言——一个深度学习模型完全运行于 Raspberry Pi 4 之上，通过实际运行的 LoRaWAN 传感器网络提供数据，且拥有长达一个月的现场数据。该场地是一个实验性/受控冷库，人为引入了温度偏移，而非未经改动的商业冷库运营现场；论文自身也提醒，在常规商业操作（频繁开门、产品装卸）条件下的表现可能有所不同。这仍是对本领域惯常「以移动端大模型为中心」的报道的有益补充：本文部署的是一个微型循环神经网络（而非大模型），网络层采用 LoRaWAN 而非 Wi-Fi 或蜂窝网络，其现场故障与连接中断下的稳健性数据（真实部署可用率/停机时间，包括需要人工修复的故障与一个由传感器触发的单点故障）是本知识库从学术来源中较少获得的一类证据。

## Images

![Cold-room sensor deployment photograph | 冷库传感器部署实景照片](https://arxiv.org/html/2609.14036v1/exp.jpg)
