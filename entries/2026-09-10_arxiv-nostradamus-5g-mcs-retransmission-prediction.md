---
id: 2026-09-10_arxiv-nostradamus-5g-mcs-retransmission-prediction
date_published: 2026-09-08
date_found: 2026-09-10
type: academic-paper
technology: cellular
title_en: "NOSTRAdAMUS: Improving 5G AI-RAN MCS Selection by Predicting Retransmissions"
title_zh: "NOSTRAdAMUS：通过预测重传改进 5G AI-RAN 的 MCS 选择"
url: "https://arxiv.org/abs/2609.09324"
source_quality: full
topics: [MCS, HARQ, link-adaptation, OLLA, SALAD, X5G-testbed, AI-RAN, gradient-boosting, gNB, dApp]
topic_primary: 5g-nr
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)
Tamerlan Aghayev, Maxime Elkael, Michele Polese, Reshma Prasad, Salvatore D'Oro, Yunseong Lee, Koichiro Furueda, and Tommaso Melodia (arXiv v1, 8 Sep 2026; Institute for Intelligent Networked Systems, Northeastern University — the group behind the X5G open 5G O-RAN testbed — with two co-authors from SoftBank's Research Institute of Advanced Technology, Tokyo) present NOSTRAdAMUS, a predictive overlay for 5G NR Link Adaptation (LA) that improves Modulation and Coding Scheme (MCS) selection by forecasting retransmissions from Hybrid Automatic Repeat reQuest (HARQ) history. The paper's motivation is that today's LA algorithms are reactive: they wait for Channel Quality Indicator feedback and HARQ acknowledgments before adjusting MCS, so when channel conditions change quickly the scheduler either stays too conservative (wasting capacity) or overshoots (causing retransmissions). The paper illustrates this with a static line-of-sight user for which the standard OLLA algorithm selects an MCS below 18 in 84% of frames, while MCS 18 is chosen in under 12% of frames despite achieving a median BLER of 8.6% — inside the 10% target.

NOSTRAdAMUS is designed as a plug-and-play overlay on top of any existing LA policy rather than a replacement: for each frame it computes a feature vector of the five most recent first-transmission block-error-rate (BLER) ratios per user (retransmissions are excluded from this feature because HARQ chase combining changes their statistics), feeds it to a learned predictor that outputs the probability of a first-transmission failure in the next frame, and applies a confidence-gated MCS correction (a fixed step down if the failure probability is high, a fixed step up if it is low, and no change otherwise). The authors benchmarked six model families (Naive Bayes, k-NN, Random Forest, Extra Trees, Gradient Boosting, MLP) on identical features and selected Gradient Boosting, exported to ONNX, which reaches 82.9% overall test accuracy (94.2% precision on the 54.1% of frames flagged high-confidence) with a 5.5 microsecond 99th-percentile inference latency — compatible with per-frame scheduling.

The training data (2.4 million slot-level samples, reduced to 172,324 frame observations) came from over-the-air (OTA) traces on the X5G testbed: an OpenAirInterface gNB with the NVIDIA Aerial PHY layer, a Foxconn RPQN radio unit (2x2 MIMO, 40 MHz), and a Samsung S25 commercial UE walked indoors so that RSRP spanned -107 to -53 dBm and all MCS 0-27 values were visited. Evaluation spanned five settings without retraining between them: a single-tap flat channel (27.1% goodput gain vs. OLLA, 37.2% vs. the SALAD algorithm, even though the channel itself is static); 3GPP TDL-A/B/C channels at fixed 30 ns delay spread (5.5-21.3% goodput gain over OLLA and 5.1-20.4% over SALAD, generalizing to channel profiles never seen in training); a delay-spread sweep from 30-300 ns on TDL-A/B/C, where the reactive baselines collapse (OLLA goodput drops 78.7%, SALAD drops 65.8%) while NOSTRAdAMUS keeps a median 30.2% gain over OLLA and 17.9% over SALAD across the sweep (up to 71.5% and up to 60.9% at the extremes); 3GPP CDL-C mobility at pedestrian (1.5 m/s, urban micro) and vehicular (30 km/h, urban macro) speeds, where the overlay shrinks OLLA's sub-MCS-5 region by 75.5% (UMi, pedestrian) and 82.9% (UMa, vehicular) while raising its MCS>=20 share by 27.0% and 108.3% respectively (separately, in the TDL delay-spread sweep, OLLA's first-attempt transmissions below MCS 5 fall by 73.4% at an essentially unchanged BLER of -1.2%); and finally a live OTA deployment on the 100 MHz X5G testbed using commercial hardware, where NOSTRAdAMUS delivers a 45.2% goodput gain over OLLA and a 14.4% gain with a 27.7% BLER reduction over SALAD. Deploying offline-trained models directly OTA costs 8.9 percentage points of accuracy (12.2 points on the high-confidence subset) but the goodput and BLER-spike-reduction gains persist.

## Summary (ZH)
Tamerlan Aghayev、Maxime Elkael、Michele Polese、Reshma Prasad、Salvatore D'Oro、Yunseong Lee、Koichiro Furueda 与 Tommaso Melodia（arXiv v1，2026 年 9 月 8 日；美国东北大学智能网络系统研究所（Institute for Intelligent Networked Systems）——即开放式 5G O-RAN 测试床 X5G 背后的团队——其中两位合著者来自软银东京先进技术研究所）提出 NOSTRAdAMUS，一种用于 5G NR 链路自适应（LA）的预测性叠加机制，通过从混合自动重传请求（HARQ）历史中预测重传来改进调制编码方案（MCS）的选择。论文的动机在于：现有的 LA 算法是反应式的——需等待信道质量指示反馈与 HARQ 确认后才调整 MCS，当信道条件快速变化时，调度器要么过于保守（浪费容量），要么过于激进（导致重传）。论文以一个静止的视距用户为例说明该问题：标准 OLLA 算法在 84% 的帧中选择低于 MCS 18 的档位，而 MCS 18 的选中比例不足 12%——尽管其中位 BLER 仅 8.6%，处于 10% 的目标范围之内。

NOSTRAdAMUS 被设计为叠加在任意现有 LA 策略之上的即插即用模块，而非替代方案：每一帧，它为每个用户计算最近五次首传误块率（BLER）比率组成的特征向量（重传结果因 HARQ Chase 合并会改变其统计特性而被排除在特征之外），输入一个已训练的预测器，输出下一帧首传失败的概率，并应用置信度门控的 MCS 修正（失败概率高则固定下调一档，概率低则固定上调一档，否则不作调整）。作者在相同特征上对六类模型（朴素贝叶斯、k 近邻、随机森林、极端随机树、梯度提升、多层感知机）进行了基准测试，最终选择梯度提升模型并导出为 ONNX 格式，该模型在测试集上整体准确率达 82.9%（在被标记为高置信度的 54.1% 帧上精确率为 94.2%），99 百分位推理延迟为 5.5 微秒——可满足逐帧调度的需求。

训练数据（240 万个时隙级样本，精简为 172,324 个帧级观测）来自 X5G 测试床上采集的空口（OTA）实测数据：采用搭载 NVIDIA Aerial PHY 层的 OpenAirInterface gNB、Foxconn RPQN 射频单元（2x2 MIMO，40 MHz），以及一部三星 S25 商用 UE 在室内步行采集，RSRP 覆盖 -107 至 -53 dBm，且遍历了 MCS 0-27 全部取值。评估涵盖五种场景，且各场景之间未重新训练模型：单抽头平坦信道（相对 OLLA 获得 27.1% 吞吐量增益，相对 SALAD 算法获得 37.2% 增益，尽管信道本身是静态的）；固定 30 纳秒时延扩展的 3GPP TDL-A/B/C 信道（相对 OLLA 吞吐量增益 5.5%-21.3%，相对 SALAD 为 5.1%-20.4%，成功泛化到训练中从未见过的信道剖面）；TDL-A/B/C 上 30-300 纳秒的时延扩展扫描，其中反应式基线出现崩溃（OLLA 吞吐量下降 78.7%，SALAD 下降 65.8%），而 NOSTRAdAMUS 在整个扫描范围内相对 OLLA 保持 30.2% 的中位增益、相对 SALAD 保持 17.9% 的中位增益（极端情况下分别高达 71.5% 与 60.9%）；3GPP CDL-C 移动性场景下的步行（1.5 m/s，城市微蜂窝 UMi）与车载（30 km/h，城市宏蜂窝 UMa）速度，叠加机制使 OLLA 低于 MCS 5 的区间分别缩小 75.5%（UMi、步行）与 82.9%（UMa、车载），同时使 MCS>=20 的占比分别提升 27.0% 与 108.3%（另外，在 TDL 时延扩展扫描中，OLLA 低于 MCS 5 的首传比例下降 73.4%，而 BLER 几乎不变，仅 -1.2%）；最后是在 100 MHz X5G 测试床上使用商用硬件进行的实际 OTA 部署，NOSTRAdAMUS 相对 OLLA 获得 45.2% 的吞吐量增益，相对 SALAD 获得 14.4% 的吞吐量增益并伴随 27.7% 的误块率下降。将离线训练模型直接部署到 OTA 环境会损失 8.9 个百分点的准确率（高置信度子集上损失 12.2 个百分点），但吞吐量与误块率突发降低方面的增益依然保持。

## Key technical points (EN)
- Plug-and-play overlay on any existing 5G NR Link Adaptation policy: predicts next-frame first-transmission failure probability from the 5 most recent first-transmission BLER ratios, then applies a confidence-gated +/-1 MCS correction (or no action).
- Model selection across 6 families on identical features; Gradient Boosting selected (82.9% overall accuracy, 94.2% precision on high-confidence interventions covering 54.1% of frames), exported to ONNX with 5.5 us 99th-percentile inference latency.
- Training data: 2.4M slot-level / 172,324 frame-level OTA samples from the X5G testbed (OAI gNB + NVIDIA Aerial PHY, Foxconn RPQN RU 2x2 MIMO 40 MHz, Samsung S25 COTS UE, indoor pedestrian walk spanning RSRP -107 to -53 dBm, all MCS 0-27 visited).
- Single-tap flat channel: +27.1% goodput vs. OLLA, +37.2% vs. SALAD, despite a static channel — shows reactive loops fail to converge even without fading.
- Generalizes zero-shot to unseen 3GPP TDL-A/B/C channels (+5.5-21.3% goodput over OLLA, +5.1-20.4% over SALAD) and across a 30-300 ns delay-spread sweep where OLLA/SALAD collapse (-78.7%/-65.8%) but NOSTRAdAMUS holds a median +30.2%/+17.9% gain (up to +71.5%/+60.9%).
- 3GPP CDL-C mobility (pedestrian 1.5 m/s UMi, vehicular 30 km/h UMa): shrinks OLLA's sub-MCS-5 region by 75.5% and 82.9% respectively, and raises its MCS>=20 share by 27.0% and 108.3%. (The 73.4% sub-MCS-5 reduction reported elsewhere in the paper belongs to the TDL delay-spread experiment, not to CDL-C.)
- Live OTA deployment on the 100 MHz X5G testbed: +45.2% goodput vs. OLLA; +14.4% goodput and -27.7% BLER vs. SALAD. Offline-to-OTA deployment costs 8.9pp accuracy (12.2pp on the high-confidence subset) but goodput/BLER gains persist.
- Deployed as a dApp within the O-RAN architecture via the AutoRAN automation framework; does not replace the base LA policy, only corrects it.

## Key technical points (ZH)
- 可即插即用地叠加在任意现有 5G NR 链路自适应策略之上：依据最近五次首传误块率比率预测下一帧首传失败概率，随后施加置信度门控的 MCS 修正（上调或下调一档，或不作调整）。
- 在相同特征上对六类模型进行选型，最终选定梯度提升模型（整体准确率 82.9%，在覆盖 54.1% 帧的高置信度干预上精确率 94.2%），并导出为 ONNX 格式，99 百分位推理延迟为 5.5 微秒。
- 训练数据：来自 X5G 测试床的 240 万时隙级 / 172,324 帧级 OTA 样本（OAI gNB + NVIDIA Aerial PHY 层，Foxconn RPQN 射频单元 2x2 MIMO 40 MHz，三星 S25 商用 UE，室内步行采集，RSRP 覆盖 -107 至 -53 dBm，遍历 MCS 0-27）。
- 单抽头平坦信道：相对 OLLA 提升 27.1% 吞吐量，相对 SALAD 提升 37.2%，尽管信道本身是静态的——表明即便无衰落，反应式环路也无法稳定收敛。
- 零样本泛化至训练中未见过的 3GPP TDL-A/B/C 信道（吞吐量提升 5%-21%），以及 30-300 纳秒时延扩展扫描中，OLLA/SALAD 出现崩溃（分别下降 78.7%/65.8%），而 NOSTRAdAMUS 保持中位增益 30.2%/17.9%（极端可达 71.5%/60.9%）。
- 3GPP CDL-C 移动性场景（步行 1.5 m/s UMi、车载 30 km/h UMa）：使 OLLA 低于 MCS 5 的区间分别缩小 75.5% 与 82.9%，并使 MCS>=20 占比提升 27.0% 与 108.3%。（论文中 73.4% 的低 MCS 降幅属于 TDL 时延扩展实验，而非 CDL-C。）
- 在 100 MHz X5G 测试床上的实际 OTA 部署：相对 OLLA 吞吐量提升 45.2%；相对 SALAD 吞吐量提升 14.4%、误块率下降 27.7%。离线训练模型部署到 OTA 环境会损失 8.9 个百分点准确率（高置信度子集损失 12.2 个百分点），但吞吐量与误块率方面的增益依然保持。
- 以 dApp 形式部署在 O-RAN 架构内，通过 AutoRAN 自动化框架运行；不替代基础 LA 策略，仅对其进行修正。

## Why it matters / what's new (EN)
The KB's AI-RAN thread from this same Northeastern lineage (X5G testbed, OCUDU/E3 dApp platform, MAC-Gyver scheduling) has so far covered scheduling frameworks, dApp interface timing, and RAN control-plane orchestration. This entry adds a concrete, deployed AI-RAN dApp result at the physical/MAC-layer link-adaptation problem itself — MCS selection — validated not only in simulation but with a live over-the-air deployment on commercial hardware, and explicitly designed as a corrective overlay rather than a full policy replacement, which is a different integration pattern from most AI-RAN proposals in the bin.

## Why it matters / what's new (ZH)
知识库中来自同一东北大学团队谱系（X5G 测试床、OCUDU/E3 dApp 平台、MAC-Gyver 调度）的 AI-RAN 系列条目此前已覆盖调度框架、dApp 接口时延与 RAN 控制面编排。本条目则在物理层/MAC 层的链路自适应问题本身——即 MCS 选择——上给出了一个具体的、已部署的 AI-RAN dApp 成果，不仅在仿真中得到验证，还在商用硬件上完成了真实空口部署；且其被明确设计为对现有策略的"修正性叠加"而非完全替代，这与该栏目中大多数 AI-RAN 提案的集成方式不同。

## Images

None.
