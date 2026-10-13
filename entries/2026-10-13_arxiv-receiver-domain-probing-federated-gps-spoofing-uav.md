---
id: 2026-10-13_arxiv-receiver-domain-probing-federated-gps-spoofing-uav
date_published: 2026-10-07
date_found: 2026-10-13
technology: satellite
type: academic-paper
title_en: "Receiver-Domain Behavioral Probing for Backdoor-Resilient Federated GPS Spoofing Detection in UAV Networks"
title_zh: "面向无人机网络的抗后门联邦 GPS 欺骗检测：接收机域行为探测"
url: "https://arxiv.org/abs/2610.10360"
source_quality: abstract_only
topics: [GNSS, GPS-spoofing, federated-learning, UAV, backdoor]
topic_primary: sat-ai
topics_secondary: [ngso-regulation]
novelty_score: 2
---

## Summary (EN)

Jedrzejczak, Walther, Gill and Hasan (arXiv 2610.10360, submitted 2026-10-07, cs.CR with eess.SP) consider federated learning in which a UAV fleet trains a shared GPS spoofing detector without raw receiver data leaving any aircraft. Several recent UAV federated-learning designs weight each client by the validation accuracy it reports about itself; the authors show this self-report is exploitable: two compromised clients out of ten that poison part of their data, scale their updates and inflate their reported accuracy raise backdoor lift to +0.3036, higher than the same attack achieves without lying. They propose receiver-domain behavioral probing, where the coordinator evaluates every submitted model on counterfactual spoofed samples built by driving each discriminative GPS feature to a benign value, and weights clients by what their models do rather than what they report. With independent and identically distributed clients this reduces attacker-induced lift to -0.0265, statistically indistinguishable from an honest fleet, while flagging the compromised aircraft. Unlike Byzantine-robust aggregation it needs only an honest majority rather than an exact attacker count: when the true count exceeds the configured value, Multi-Krum degrades from +0.0061 to +0.2837 while the proposed method stays near baseline. Evaluation uses one public single-receiver dataset partitioned into simulated clients, and the authors report that the mechanism fails under strong client heterogeneity.

## Summary (ZH)

Jedrzejczak、Walther、Gill 与 Hasan（arXiv 2610.10360，2026 年 10 月 7 日提交，cs.CR 并含 eess.SP）研究联邦学习场景：无人机机群在原始接收机数据不离开各机的前提下训练共享的 GPS 欺骗检测器。近期若干无人机联邦学习设计按客户端自报的验证准确率加权；作者证明这种自报可被利用：十个客户端中两个被攻陷的客户端对部分数据投毒、放大更新并虚报准确率，可使后门提升（backdoor lift）达到 +0.3036，高于同一攻击不虚报时的结果。作者提出接收机域行为探测：协调方在反事实欺骗样本（将每个判别性 GPS 特征调至良性值而构造）上评估每个提交的模型，按模型的实际行为而非其自报加权。在独立同分布客户端下，攻击引起的提升降至 -0.0265，与诚实机群在统计上无差异，同时可标记被攻陷的飞机。与拜占庭鲁棒聚合不同，该方法只需诚实多数而无需精确的攻击者数量：当真实攻击者数超过配置值时，Multi-Krum 由 +0.0061 退化至 +0.2837，而所提方法保持在基线附近。评估使用一个公开的单接收机数据集并划分为模拟客户端，作者也报告了该机制在强客户端异质性下失效。

## Key technical points (EN)

- **Threat**: self-reported validation accuracy used as a client weight can be inflated by compromised clients (2 of 10), raising backdoor lift to +0.3036.
- **Defense**: coordinator evaluates each submitted model on counterfactual spoofed samples (each discriminative GPS feature set to a benign value) and weights clients by behavior.
- **IID result**: attacker-induced lift reduced to -0.0265, statistically indistinguishable from an honest fleet; compromised aircraft flagged.
- **Versus Byzantine-robust aggregation**: needs an honest majority, not an exact attacker count; Multi-Krum degrades from +0.0061 to +0.2837 when the true count exceeds the configured value.
- **Limits**: one public single-receiver dataset split into simulated clients; fails under strong client heterogeneity.

## Key technical points (ZH)

- **威胁**：以自报验证准确率作为客户端权重可被被攻陷客户端（10 个中的 2 个）虚报，使后门提升达到 +0.3036。
- **防御**：协调方在反事实欺骗样本（将每个判别性 GPS 特征设为良性值）上评估各提交模型，按行为加权。
- **独立同分布结果**：攻击引起的提升降至 -0.0265，与诚实机群在统计上无差异；被攻陷飞机被标记。
- **对比拜占庭鲁棒聚合**：需要诚实多数而非精确攻击者数量；当真实数量超过配置值时 Multi-Krum 由 +0.0061 退化至 +0.2837。
- **局限**：使用一个公开的单接收机数据集划分为模拟客户端；在强客户端异质性下失效。

## Why it matters / what's new (EN)

This paper concerns training the spoofing detector (federated learning across a UAV fleet), not the spoofing attack or the receiver signal processing.

## Why it matters / what's new (ZH)

本文关注欺骗检测器的训练（无人机机群间的联邦学习），而非欺骗攻击本身或接收机信号处理。

## Images

None.
