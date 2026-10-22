---
id: 2026-10-22_arxiv-fedhnp-split-computing-head-network-personalization-federated
date_published: 2026-10-20
date_found: 2026-10-22
technology: edge-ai
type: academic-paper
title_en: "Unsupervised head network personalization for split computing via federated learning and knowledge distillation"
title_zh: "基于联邦学习与知识蒸馏的拆分计算无监督头网络个性化"
url: "https://arxiv.org/abs/2610.27952"
source_quality: full
topics: [split-computing, federated-learning, knowledge-distillation, head-network, personalization]
topic_primary: compute-offloading
topics_secondary: [edge-federated-learning, edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

The paper (FedHNP) addresses split computing, where a neural network is partitioned into a head network on the mobile device and a tail network on a server. Because devices have limited bandwidth and compute, the head is often replaced by a smaller network, but training that replacement needs labeled data that is scarce and privacy-sensitive on-device. FedHNP trains the replacement head in two stages: federated rounds in which each selected client distils a frozen teacher's intermediate outputs into a student using small, non-IID, unlabeled local data, followed by per-client personalization by fine-tuning on local data. Each client ends up with its own tail network on the server.

The evaluation uses ResNet-18 on CIFAR-10 and CIFAR-100, with an extreme non-IID split (2 of 10 classes, or 10 of 100 classes, per client) and 10 clients selected per round over 20 or 100 rounds. The replacement head has 5,080 parameters versus 38,848 for the original layers at the same split point, and produces a (12, 9, 9) bottleneck tensor versus a (3, 32, 32) raw input. Analytic per-inference traffic is 1.0 KB (8-bit) versus 3.1 KB for cloud offloading and 8.2-16.4 KB for splitting the original model; the authors report a 24% overall computation reduction.

Accuracy is reported as within 3-5 percentage points of the original model, with personalization adding more than 30 points over the federated stage alone. The authors state one assumption (Sec. IV-C): stable communication links, with the student parameters and intermediate representations transmitted losslessly. As setup facts of this entry's reading, costs are analytic FLOP and byte counts with no on-device latency or energy measurement, and only two CIFAR datasets and one architecture were tested.

## Summary (ZH)

论文（FedHNP）针对拆分计算：神经网络被划分为位于移动设备的头网络和位于服务器的尾网络。由于设备带宽和算力有限，头网络常被替换为更小的网络，但训练该替换网络需要带标签数据，而这类数据在设备端稀少且涉及隐私。FedHNP 分两阶段训练替换头网络：先进行联邦轮次，每个被选客户端利用少量非独立同分布、无标签的本地数据，把冻结教师网络的中间输出蒸馏到学生网络；再对每个客户端用本地数据微调以实现个性化。每个客户端在服务器上拥有自己的尾网络。

评估使用 ResNet-18 在 CIFAR-10 与 CIFAR-100 上进行，采用极端非独立同分布划分（每个客户端 10 类中的 2 类，或 100 类中的 10 类），每轮选 10 个客户端，共 20 或 100 轮。替换头网络有 5,080 个参数，而同一切分点处的原网络层有 38,848 个参数；输出瓶颈张量为 (12, 9, 9)，原始输入为 (3, 32, 32)。按解析计算，每次推理的传输量为 1.0 KB（8 位），云端卸载为 3.1 KB，拆分原模型为 8.2-16.4 KB；作者报告总体计算量减少 24%。

精度方面，作者报告与原模型相差 3-5 个百分点，个性化比仅联邦阶段提升超过 30 个百分点。作者明确声明的假设是链路稳定（第 IV-C 节），学生模型参数与中间表示无损传输。按本条目的阅读，设置事实为：开销为解析的 FLOP 与字节数，没有设备端延迟或能耗测量；仅测试了两个 CIFAR 数据集和一种网络结构。

## Key technical points (EN)

- Stage 1: FedAvg-style rounds with head-network distillation (squared error between teacher and student intermediate outputs), unweighted mean over C=10 clients.
- Stage 2: per-client fine-tuning (10 epochs on CIFAR-10, 20 on CIFAR-100); the server keeps a separate tail network per client.
- Baselines: centralized HND (pooled data, violates privacy), individual HND (each client alone), and the original model.
- Reported traffic reduction is 95% in the abstract; Table IV figures give about 94% against a layer-2 split at 8-bit and about 68% against cloud offloading.
- Scope and assumptions: the authors state only the stable, lossless-link assumption (Sec. IV-C). Entry observations: stage-1 accuracy alone is the weakest of the compared methods; the approach depends on a suitable pre-trained teacher; only extreme non-IID splits were tested.

## Key technical points (ZH)

- 阶段一：采用 FedAvg 式轮次与头网络蒸馏（教师与学生中间输出的平方误差），对 C=10 个客户端取无加权平均。
- 阶段二：每个客户端单独微调（CIFAR-10 为 10 个 epoch，CIFAR-100 为 20 个）；服务器为每个客户端保留独立的尾网络。
- 基线：集中式 HND（汇集数据，违反隐私）、个体 HND（各客户端单独训练）以及原模型。
- 摘要给出的流量降低为 95%；表 IV 的数字相对 8 位的第 2 层拆分约为 94%，相对云端卸载约为 68%。
- 范围与假设：作者明确声明的只有链路稳定、无损传输的假设（第 IV-C 节）。条目观察：仅联邦阶段时精度是各方法中最弱的；依赖合适的预训练教师；只测试了极端非独立同分布划分。

## Why it matters / what's new (EN)

The entry adds a training-side answer to a recurring split-computing problem: how to obtain a small on-device head without centralizing user data. The evidence is analytic cost accounting on CIFAR with ResNet-18, so the 24% and traffic figures are model-level estimates rather than device measurements.

## Why it matters / what's new (ZH)

本条目补充了拆分计算中反复出现的问题的训练侧解法：如何在不集中用户数据的前提下得到端侧小型头网络。证据为 CIFAR 与 ResNet-18 上的解析成本核算，因此 24% 与流量数字是模型层面的估算，而非设备实测。

## Images

*(No redistributable images for this entry.)*
