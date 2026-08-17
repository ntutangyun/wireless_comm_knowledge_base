---
id: 2026-08-17_arxiv-energy-cost-mitigating-ai-attacks-cellular
date_published: 2026-08-12
date_found: 2026-08-17
type: academic-paper
technology: cellular
title_en: "The Energetic Cost of Mitigating AI Attacks in Cellular Networks"
title_zh: "蜂窝网络中缓解 AI 攻击的能耗代价"
url: "https://arxiv.org/abs/2608.12431"
source_quality: full
topics: [adversarial-ML, data-poisoning, defense-energy-cost, O-RAN, Deep-Partition-Aggregation, energy-measurement, ML-security]
topic_primary: cellular-security
topics_secondary: [cellular-ai, open-ran]
novelty_score: 2
---

## Summary (EN)
Losada, Groshev (The Laude Technology Company, Madrid) and Luo-Chen, Segura, Alvarez-Merino, Khatib, Barco (Telecommunication Research Institute, Universidad de Málaga; arXiv 12 Aug 2026, 7 pp., submitted to IEEE Communications Magazine) measure a dimension of ML security in cellular networks that the literature has largely skipped: **what defending an O-RAN ML model actually costs in energy**. Their framing is a three-way tension — model accuracy, robustness against adversarial attacks, and energy efficiency — and their claim is that "the developed mitigation strategies are effective, but they generate a computational load which, in consequence, results in an energy cost generally overlooked, even in the current energy-awareness context."

The study focuses on **data-poisoning attacks** (training-set corruption, classified into data-level and model-level variants) and evaluates **Deep Partition Aggregation (DPA)** as the passive defense: the training set is hash-partitioned into k disjoint partitions, an independent model is trained per partition, and inference aggregates by consensus. The testbed is two identical i9-13900K/64 GB machines running Ubuntu 22.04, ResNet-32 on CIFAR-10, with per-process energy measured by **Scaphandre**. Results: with k=15 partitions DPA holds ~80 % accuracy across poisoning rates 0.05–0.40, keeping target misclassification below 1 % for poison rates ≤ 0.15 (rising to 28 % at 0.40). Two energy findings anchor the paper: (1) the **poisoning rate itself has no correlation with energy consumption** — DPA processes poisoned samples exactly like clean ones, so the attacker's intensity is energetically invisible; (2) the **defense configuration dominates the energy bill** — moving from k=15 to k=500 partitions at the same 0.05 poison rate costs more than 200 Wh extra (>10 % higher algorithm consumption), because 500 small models must be trained from scratch. Acknowledged limits: CIFAR-10 proxy rather than real O-RAN traffic data, a single defense evaluated, Near-RT RIC latency constraints noted but not analyzed, and the observation that a defense's distinctive energy signature could itself leak information to attackers.

## Summary (ZH)
Losada、Groshev（马德里 The Laude Technology Company）与 Luo-Chen、Segura、Alvarez-Merino、Khatib、Barco（马拉加大学电信研究所；2026 年 8 月 12 日 arXiv，7 页，投稿 IEEE Communications Magazine）测量了蜂窝网络 ML 安全文献中长期被忽略的一个维度：**防御 O-RAN 中的 ML 模型究竟要付出多少能耗**。其框架是三方张力——模型准确率、对抗攻击鲁棒性与能效——核心论点是"已有缓解策略是有效的，但它们产生的计算负载带来的能耗代价，即使在当下的能效意识背景中也普遍被忽视"。

研究聚焦**数据投毒攻击**（训练集污染，分数据级与模型级两类），评估**深度分区聚合（DPA）**作为被动防御：训练集经哈希分成 k 个不相交分区，每个分区独立训练一个模型，推理时按共识聚合。测试台为两台相同配置的 i9-13900K/64 GB 机器（Ubuntu 22.04），CIFAR-10 上训练 ResNet-32，用 **Scaphandre** 做进程级能耗测量。结果：k=15 时 DPA 在 0.05–0.40 投毒率下保持约 80 % 准确率，投毒率 ≤ 0.15 时目标误分类低于 1 %（0.40 时升至 28 %）。两个能耗结论构成论文支点：(1) **投毒率本身与能耗无相关性**——DPA 对投毒样本与干净样本的处理完全一致，攻击强度在能耗上不可见；(2) **防御配置主导能耗账单**——同为 0.05 投毒率，从 k=15 提高到 k=500 分区要多耗 200 Wh 以上（算法能耗增加 >10 %），因为必须从零训练 500 个小模型。作者承认的局限：用 CIFAR-10 替代真实 O-RAN 流量数据、仅评估一种防御、Near-RT RIC 时延约束仅提及未分析，以及防御独特的能耗特征本身可能向攻击者泄露信息。

## Key technical points (EN)
- Threat model: data-poisoning of training pipelines feeding O-RAN ML models; taxonomy splits data-level poisoning (traditional ML / DL training data) from model-level compromise (model files, distributed updates).
- Defense under test: Deep Partition Aggregation — hash-assign samples to k partitions, train k independent models, aggregate by consensus; passive (no attack detection required).
- Measurement stack: two identical i9-13900K / 64 GB DDR4 / NVMe hosts, Ubuntu 22.04.5; Scaphandre per-process power telemetry (µW granularity); ResNet-32 on CIFAR-10 (50k train / 10k test).
- Mitigation performance (k=15): ~80 % accuracy for all poison rates 0.05–0.40; target misclassification <1 % up to rate 0.15, 28 % at rate 0.40.
- Energy result 1: poisoning rate is energy-invariant — no correlation between attack intensity and consumption, since the defense's work is data-volume-driven, not attack-driven.
- Energy result 2: partition count is the energy lever — k=500 vs k=15 at the same poison rate adds >200 Wh (>10 % of algorithm consumption) from training 500 models from scratch.
- Open issues flagged: DPA vs Near-RT RIC latency budgets unanalyzed; only two k values tested (hardware availability); energy-signature side channel of defenses left theoretical.

## Key technical points (ZH)
- 威胁模型：对馈入 O-RAN ML 模型的训练管线做数据投毒；分类上区分数据级投毒（传统 ML / 深度学习训练数据）与模型级破坏（模型文件、分布式更新）。
- 被测防御：深度分区聚合（DPA）——哈希将样本分入 k 个分区，训练 k 个独立模型，共识聚合；属被动防御（无需检测攻击）。
- 测量栈：两台相同的 i9-13900K / 64 GB DDR4 / NVMe 主机，Ubuntu 22.04.5；Scaphandre 进程级功耗遥测（微瓦级）；CIFAR-10（5 万训练 / 1 万测试）上的 ResNet-32。
- 缓解性能（k=15）：0.05–0.40 全部投毒率下约 80 % 准确率；投毒率 ≤ 0.15 时目标误分类 <1 %，0.40 时为 28 %。
- 能耗结论一：投毒率与能耗无关——攻击强度与消耗无相关性，因为防御的工作量由数据量驱动而非攻击驱动。
- 能耗结论二：分区数才是能耗杠杆——相同投毒率下 k=500 比 k=15 多耗 200 Wh 以上（算法能耗 >10 %），源于需从零训练 500 个模型。
- 遗留问题：DPA 与 Near-RT RIC 时延预算的关系未分析；仅测试两个 k 值（受硬件限制）；防御能耗特征作为侧信道的风险停留在理论层面。

## Why it matters / what's new (EN)
The KB's cellular threads have covered AI-RAN capability (world-model control, RANPilot), AI-agent safety (VeraRAN, WirelessOpsAgent, GRV guard rails), RAN energy (O-RAN energy-latency placement, packetized energy management) and ML attacks (STORM-RJ, AmbSentry) — but never the **intersection of defense and energy**: this is the first entry to price an adversarial-ML mitigation in watt-hours. The two findings are usefully asymmetric for operators: attackers cannot inflate your energy bill by poisoning harder, but *your own* robustness configuration (partition count) can — so the accuracy/robustness/energy triad is a design-time budget decision, not a runtime one. The main caveat is ecological validity: CIFAR-10 on desktop CPUs is a proxy, not O-RAN traffic on RIC hardware, and only DPA is measured — treat the numbers as shape, not calibration. Watch for follow-ups that repeat the methodology on RAN datasets and for energy-aware clauses in O-RAN WG11 security work.

## Why it matters / what's new (ZH)
知识库的蜂窝线索已覆盖 AI-RAN 能力（世界模型控制、RANPilot）、AI 智能体安全（VeraRAN、WirelessOpsAgent、GRV 护栏）、RAN 能耗（O-RAN 能耗-时延布局、分组化能量管理）与 ML 攻击（STORM-RJ、AmbSentry）——但从未触及**防御与能耗的交叉点**：这是第一条把对抗性 ML 缓解措施按瓦时计价的条目。两个结论对运营商呈有用的不对称性：攻击者无法通过加大投毒来抬高你的能耗账单，但*你自己*的鲁棒性配置（分区数）可以——因此准确率/鲁棒性/能耗三角是设计期的预算决策而非运行期决策。主要保留意见是生态效度：桌面 CPU 上的 CIFAR-10 只是替代品，并非 RIC 硬件上的 O-RAN 流量，且仅测了 DPA——数字应当作趋势而非标定。后续关注在 RAN 数据集上重复该方法的工作，以及 O-RAN WG11 安全工作中出现能耗感知条款的迹象。

## Images
![DPA mitigation performance at k=15 across poisoning rates | k=15 时 DPA 在各投毒率下的缓解性能](https://arxiv.org/html/2608.12431v1/Figures/DPA_15_Test.png)
![Energy consumption vs poisoning rate — no correlation | 能耗与投毒率——无相关性](https://arxiv.org/html/2608.12431v1/Figures/Poison_rate_energy.png)
![Energy cost of partition configuration k=15 vs k=500 | 分区配置 k=15 与 k=500 的能耗对比](https://arxiv.org/html/2608.12431v1/Figures/DPA_Partitions_Energy.png)
