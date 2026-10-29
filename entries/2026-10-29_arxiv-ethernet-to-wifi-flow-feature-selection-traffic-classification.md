---
id: 2026-10-29_arxiv-ethernet-to-wifi-flow-feature-selection-traffic-classification
date_published: 2026-10-27
date_found: 2026-10-29
technology: wifi
type: academic-paper
title_en: "From Ethernet to Wi-Fi: Flow Feature Selection and Construction for Traffic Classification"
title_zh: "从以太网到 Wi-Fi：面向流量分类的流特征选择与构造"
url: "https://arxiv.org/abs/2610.37007"
source_quality: full
topics: [traffic classification, flow features, XGBoost, ns-3, 802.11be, transfer from wired to wireless]
topic_primary: ai-for-wifi
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Flow-based traffic classifiers are usually trained on wired captures, but Wi-Fi contention and load change packet timing and feature distributions, so accuracy can drop when the same model is applied to Wi-Fi traffic. This paper (submitted 27 October 2026) proposes a five-stage procedure for choosing and constructing flow features so that a classifier trained only on Ethernet data keeps working on Wi-Fi flows.

The procedure starts from 29 candidate flow features and prunes them in stages: (1) drop the transport-protocol identifier (29 to 28); (2) drop features whose maximum absolute Pearson correlation with sending rate across four variable-rate applications is at least 0.97 (28 to 16); (3) keep features with an MI ratio of at least 0.60 and either a KS distance of at most 0.30 or an MI ratio of at least 1.00 (16 to 12); (4) remove features correlated above 0.98 with a retained one (12 to 9); (5) keep three direct statistics and construct four normalised ratio features (for example min/max packet-size ratio, packet-size range ratio, activation fraction and a minimum inter-arrival ratio), giving seven final features.

Evaluation is in a modified ns-3.40 with an IEEE 802.11be (EHT) link at 5 GHz, 160 MHz, MCS 5, one spatial stream, Best Effort access category, 60 s runs, against an uncongested 1 Gb/s Ethernet link. Eight application classes are used: VoIP, video conferencing, gaming, DASH video streaming, bulk TCP, iperf TCP, iperf UDP and bursty UDP. Six Wi-Fi scenarios (30 runs, 10,718 windows) guide feature design and a seventh (5 runs, 2,430 windows) is held out. An XGBoost classifier (400 rounds, depth 6, learning rate 0.08), tuned on Ethernet data only, is trained once and reused for every feature set. Moving from 29 to the 7 features raises accuracy on the held-out Wi-Fi scenario from 88.44% to 99.92%, and on the development scenarios from 88.48% to 98.28%, while Ethernet test accuracy stays at 99.3-99.5%. Remaining errors are mainly iperf TCP windows classified as video streaming (165 windows; recall 38.9% on the development scenarios), plus ten bulk TCP windows.

## Summary (ZH)

基于流的流量分类器通常用有线抓包数据训练，但 Wi-Fi 的信道竞争和负载会改变包时序与特征分布，因此同一模型用于 Wi-Fi 流量时准确率可能下降。本文（2026 年 10 月 27 日提交）提出一个五阶段的流特征选择与构造流程，使仅用以太网数据训练的分类器在 Wi-Fi 流上仍能保持准确。

该流程从 29 个候选流特征出发逐级裁剪：(1) 去掉传输层协议标识（29 到 28）；(2) 去掉与发送速率的最大绝对 Pearson 相关系数在四种变速率应用上不低于 0.97 的特征（28 到 16）；(3) 保留互信息比不低于 0.60，且 KS 距离不超过 0.30 或互信息比不低于 1.00 的特征（16 到 12）；(4) 去掉与已保留特征相关性高于 0.98 的冗余特征（12 到 9）；(5) 保留三个直接统计量并构造四个归一化比值特征（如最小/最大包长比、包长范围比、活跃比例、最小到达间隔比），最终得到 7 个特征。

评估在修改后的 ns-3.40 中进行：Wi-Fi 链路为 IEEE 802.11be（EHT），5 GHz、160 MHz、MCS 5、单空间流、Best Effort 接入类别，每次运行 60 秒，对照为无拥塞的 1 Gb/s 以太网。共八类应用：VoIP、视频会议、游戏、DASH 视频流、批量 TCP、iperf TCP、iperf UDP 和突发 UDP。六个 Wi-Fi 场景（30 次运行、10,718 个窗口）用于特征设计，第七个场景（5 次运行、2,430 个窗口）留作测试。XGBoost 分类器（400 轮、深度 6、学习率 0.08）仅在以太网数据上调参，并对所有特征集复用同一设置。从 29 个特征降至 7 个特征后，留出 Wi-Fi 场景的准确率由 88.44% 升至 99.92%，开发场景由 88.48% 升至 98.28%，以太网测试准确率保持在 99.3%-99.5%。剩余错误主要是被误判为视频流的 iperf TCP 窗口（165 个；开发场景召回率 38.9%），另有 10 个批量 TCP 窗口。

## Key technical points (EN)

- Problem: wired-trained flow classifiers lose accuracy on Wi-Fi because contention and load shift packet timing and feature distributions.
- Five stages: remove transport identifier; remove rate-dependent features (|r| >= 0.97); keep features with an MI ratio of at least 0.60 and either a KS distance of at most 0.30 or an MI ratio of at least 1.00; remove redundancy (|r| > 0.98); construct normalised ratio features. 29 -> 28 -> 16 -> 12 -> 9 -> 7 features.
- Setup: modified ns-3.40, 802.11be EHT 5 GHz / 160 MHz / MCS 5 / 1 SS / Best Effort; 8 application classes; XGBoost trained on Ethernet only; TreeSHAP used for explanation.
- Results: held-out Wi-Fi scenario 88.44 +/- 0.27% -> 99.92 +/- 0.18%; development scenarios 88.48% -> 98.28%; Ethernet 99.28% -> 99.46%.
- Stated limitations: a single simulated DASH client and specific traffic generators; threshold stability established only within the tested ranges; real-network validation is future work. (The Wi-Fi PHY/MAC model is privately maintained.)

## Key technical points (ZH)

- 问题：有线数据训练的流分类器在 Wi-Fi 上会掉准确率，原因是信道竞争与负载改变了包时序和特征分布。
- 五个阶段：去除传输层标识；去除与速率相关的特征（|r| >= 0.97）；保留互信息比不低于 0.60，且 KS 距离不超过 0.30 或互信息比不低于 1.00 的特征；去除冗余（|r| > 0.98）；构造归一化比值特征。特征数 29 -> 28 -> 16 -> 12 -> 9 -> 7。
- 设置：修改后的 ns-3.40，802.11be EHT，5 GHz / 160 MHz / MCS 5 / 单空间流 / Best Effort；8 类应用；XGBoost 仅用以太网数据训练；使用 TreeSHAP 解释。
- 结果：留出 Wi-Fi 场景 88.44 +/- 0.27% -> 99.92 +/- 0.18%；开发场景 88.48% -> 98.28%；以太网 99.28% -> 99.46%。
- 论文自述的局限：仅一个模拟 DASH 客户端和特定流量生成器；阈值稳定性只在测试范围内成立；真实网络验证留作后续工作。（Wi-Fi PHY/MAC 模型为私有维护。）

## Why it matters / what's new (EN)

The KB's ai-for-wifi bin is dominated by AI used for Wi-Fi control and sensing; this is a small, practical entry on the data side: how to make a classifier built from wired captures usable on Wi-Fi flows by feature design rather than by retraining on wireless data. The result is simulation-only and uses one access category and one PHY configuration, so it shows the feature-pruning idea works under those conditions rather than establishing general portability.

## Why it matters / what's new (ZH)

知识库的 ai-for-wifi 主题以 AI 用于 Wi-Fi 控制与感知为主；本文是数据侧的一个小而实用的条目：通过特征设计而非用无线数据重新训练，让基于有线抓包训练的分类器可用于 Wi-Fi 流。结果仅来自仿真，且只涉及一种接入类别和一种 PHY 配置，因此只说明该特征裁剪思路在这些条件下有效，并不证明具有普遍可迁移性。
