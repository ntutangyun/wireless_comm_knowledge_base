---
id: 2026-11-11_arxiv-terra-task-oriented-edge-ai-regional-fire-detection-identity-free-reporting
date_published: 2026-10-27
date_found: 2026-11-11
technology: edge-ai
type: academic-paper
title_en: "TERRA: fire sensors report a 6-bit score or 24-bit feature over an identity-free random-access uplink, regional AUPRC 0.987-0.990"
title_zh: "TERRA：火灾传感器经无身份随机接入上行发送 6 比特分数或 24 比特特征，区域 AUPRC 0.987-0.990"
url: "https://arxiv.org/abs/2610.37909"
source_quality: full
topics: [task-oriented-communication, unsourced-random-access, edge-AI, DeepSets, IoT]
topic_primary: task-oriented-communication
topics_secondary: [compute-offloading]
novelty_score: 2
---

## Summary (EN)

TERRA (Task-Oriented Edge Representation and Regional Aggregation), accepted at the 16th International Conference on the Internet of Things (IoT 2026), splits regional fire detection between sensing devices and a receiver. Each device runs local inference and sends a compact report with a region tag over a shared uplink modelled as unsourced random access (a common codebook, the receiver recovers an unordered list of messages without source identities); the receiver groups messages by region and fuses them. Link computed over: a shared IoT uplink abstracted as unsourced random access with message-recovery probabilities (missed and false recovered messages are studied); no over-the-air measurement, and the data are a distributed indoor fire-alarm dataset.

## Summary (ZH)

TERRA（任务导向边缘表示与区域聚合）已被第 16 届物联网国际会议（IoT 2026）接收，将区域火情检测在传感设备与接收端之间划分。每个设备在本地做推理，并经共享上行链路发送带区域标签的紧凑报告；该链路建模为无源随机接入（共用码本，接收端恢复无序消息列表而不知来源身份）；接收端按区域分组并融合。所经链路：抽象为无源随机接入并含消息恢复概率的共享物联网上行（研究了漏检与虚假恢复消息）；无空口实测，数据为分布式室内火灾报警数据集。

## Key technical points (EN)

- Two reporting modes: TERRA-Score sends a quantized local fire probability; TERRA-Feature sends a compact learned representation aggregated with a permutation-invariant DeepSets model.
- Evaluation uses all 15 numerical sensing modalities of the EN54 distributed indoor fire-alarm dataset, repetition-disjoint three-fold cross-validation, and an episode-level fire-scenario target.
- With nine reports and perfect message recovery: TERRA-Feature mean AUPRC 0.990 with a 24-bit task payload; TERRA-Score 0.987 with 6 bits; both reach a missed-detection rate of 1.81% at false-alarm rate at or below 1%.
- Under false-message contamination the more compact TERRA-Score is less sensitive; TERRA-Feature is slightly better under reliable recovery.
- The authors call the dataset a proof-of-concept testbed; the access layer is a model, not a radio implementation.

## Key technical points (ZH)

- 两种上报模式：TERRA-Score 发送量化的本地火情概率；TERRA-Feature 发送紧凑的学习表示，由置换不变的 DeepSets 模型聚合。
- 评估使用 EN54 分布式室内火灾报警数据集的全部 15 种数值传感模态、重复不相交的三折交叉验证，以及场景级火情目标。
- 九份报告且消息恢复完美时：TERRA-Feature 平均 AUPRC 0.990（任务载荷 24 比特）；TERRA-Score 为 0.987（仅 6 比特）；二者在虚警率不高于 1% 时漏检率均为 1.81%。
- 在虚假消息污染下，更紧凑的 TERRA-Score 更不敏感；可靠恢复时 TERRA-Feature 略优。
- 作者称该数据集为概念验证测试床；接入层是模型而非无线电实现。

## Why it matters / what's new (EN)

It quantifies how few bits a region-level decision needs when sensing is done at the device and the uplink cannot identify senders, a clean example of sending task results rather than raw data. Evidence is a single indoor dataset with an abstracted access channel.

## Why it matters / what's new (ZH)

它量化了在设备端完成感知且上行无法识别发送者时，区域级决策所需的比特数，是"发送任务结果而非原始数据"的清晰例子。证据仅为单一室内数据集与抽象的接入信道。

## Images

*(No redistributable images for this entry.)*
