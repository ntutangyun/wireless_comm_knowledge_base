---
id: 2026-11-11_arxiv-wireless-ai-networks-co-adapting-communication-resources-distributed-intelligence
date_published: 2026-11-09
date_found: 2026-11-11
technology: edge-ai
type: academic-paper
title_en: "Wireless AI Networks: an AI-executable resource budget linking uplink capacity to federated-update size and transmit power to model-weight error sensitivity"
title_zh: "无线 AI 网络：以“AI 可执行资源预算”把上行容量与联邦更新大小、发射功率与模型权重误差敏感度联系起来"
url: "https://arxiv.org/abs/2611.11774"
source_quality: full
topics: [wireless-federated-learning, distributed-AI, resource-aware-AI, power-allocation, co-adaptation]
topic_primary: edge-federated-learning
topics_secondary: [edge-ai-networking]
novelty_score: 3
---

## Summary (EN)

This article (UESTC with KTH, Southwest Jiaotong Univ. and Technical Univ. of Sofia) proposes "Wireless AI Networks" as a design perspective in which wireless conditions determine which AI configurations are feasible (an "AI-executable resource budget": admissible update sizes, model partitions, device participation) and the task-level value of information guides which configuration is chosen and how radio resources are allocated. Link computed over: a simulated uplink (per-round Gaussian-distributed SNR with a Shannon-rate payload budget for federated learning; Rayleigh flat fading with coherent BPSK for model-weight transmission); no over-the-air measurement.

## Summary (ZH)

本文（电子科技大学，合作者来自 KTH、西南交通大学和索非亚技术大学）提出"无线 AI 网络"这一设计视角：无线条件决定哪些 AI 配置可行（"AI 可执行资源预算"：可容许的更新大小、模型切分、设备参与），而任务层面的信息价值指导选择哪种配置以及如何分配无线资源。所经链路：仿真上行链路（联邦学习中每轮服从高斯分布的信噪比并由香农速率给出载荷预算；模型权重传输采用瑞利平坦衰落与相干 BPSK），无空口实测。

## Key technical points (EN)

- Two directions of adaptation: wireless-to-AI (update selection, model partitioning and device participation follow network resources) and AI-to-wireless (the importance and error sensitivity of AI information guide power allocation, scheduling and reliability protection); a feedback loop couples them.
- Experiment 1: ten clients train a lightweight CNN on CIFAR-10 (non-IID Dirichlet partition) for 100 communication rounds, seven clients admitted per round, each client's uplink SNR resampled every round; the per-client payload budget comes from the instantaneous Shannon rate and counts FP32 update values only.
- The proposed channel-adaptive unbiased partial-update scheme (CAUP-FL) picks coordinates by update magnitude and corrects by inverse-probability weighting; the paper reports it beats a random-selection baseline that uses an identical payload, attributing the gain to selection plus statistical correction (it is compared with five partial-update baselines and dense FedAvg).
- Experiment 2: quantized CNN parameters are sent over Rayleigh flat-fading channel uses with BPSK; sensitivity-aware power allocation reduces accuracy degradation versus other allocation strategies under the same average transmit power.
- Numeric tables were not recoverable from the HTML rendering used here, so no accuracy figures are quoted.

## Key technical points (ZH)

- 两个适应方向：无线到 AI（更新选择、模型切分与设备参与随网络资源变化）与 AI 到无线（AI 信息的重要性和误差敏感度指导功率分配、调度和可靠性保护），并以反馈环耦合二者。
- 实验一：十个客户端在 CIFAR-10（非 IID 狄利克雷划分）上训练轻量 CNN，共 100 轮通信，每轮接纳七个客户端，各客户端上行信噪比每轮重新采样；每客户端载荷预算由瞬时香农速率得到，仅计 FP32 更新值。
- 所提信道自适应无偏部分更新方案（CAUP-FL）按更新幅值选取坐标并以逆概率加权校正；论文报告其在相同载荷下优于随机选择基线，并将增益归因于选择加统计校正（另与五种部分更新基线及稠密 FedAvg 对比）。
- 实验二：量化后的 CNN 参数经瑞利平坦衰落信道以 BPSK 传输；在相同平均发射功率下，敏感度感知功率分配比其他分配策略降低精度损失。
- 所用 HTML 渲染中数值表格无法还原，故不引用具体精度数字。

## Why it matters / what's new (EN)

It gives a vocabulary and a small-scale illustration for treating link capacity as a constraint on which federated or split-inference configurations are even admissible, rather than only compressing payloads. It is a perspective article with two simulated CIFAR-10 case studies, so it is evidence of a design direction, not of deployed gains.

## Why it matters / what's new (ZH)

它提供了一套术语和小规模示例，把链路容量视为决定哪些联邦学习或切分推理配置可行的约束，而不只是压缩载荷。这是一篇带有两个 CIFAR-10 仿真案例的观点性文章，证明的是设计方向而非实际部署收益。

## Images

*(No redistributable images for this entry.)*
