---
id: 2026-09-08_arxiv-dart-fl-slo-aware-multitask-fl-edge
date_published: 2026-08-27
date_found: 2026-09-08
type: academic-paper
technology: edge-ai
title_en: "DART-FL: Burst-Aware Multitask Federated Learning under Dynamic Inference Demand at the Edge"
title_zh: "DART-FL：面向边缘设备动态推理需求的突发感知多任务联邦学习"
url: "https://arxiv.org/abs/2608.27713"
source_quality: full
topics: [federated-learning, multitask-learning, SLO, drift-plus-penalty, resource-scheduling, Alibaba-trace]
topic_primary: edge-federated-learning
topics_secondary: [compute-offloading]
novelty_score: 3
---

## Summary (EN)

Edge devices that both train and serve models concurrently face a resource tug-of-war: giving more compute to real-time inference (to meet service-level objectives, or SLOs) leaves less for training, and vice versa, and this trade-off shifts constantly as inference demand for different tasks rises and falls. DART-FL (Northeastern University; University of Georgia) is a federated learning framework that adapts both decisions jointly. At each scheduling interval it first computes, from the observed inference backlog and the device's profiled service capacity, the minimum share of compute that must go to inference to keep the SLO deadline met (a computation based on Little's Law), then hands the remaining capacity to a queue-aware scheduler — described as inspired by the Drift-Plus-Penalty technique — that distributes training effort across tasks in proportion to their own backlogs. Those per-task allocations are converted into dynamic loss weights, so tasks with a current demand burst get more training emphasis in that round, while devices train a shared backbone with task-specific heads and aggregate via standard FedAvg.

The authors evaluate on two image-classification tasks (Stanford Cars, Oxford Flowers 102) trained on a shared ResNet backbone across 100 simulated federated clients (30% selected per round) on an NVIDIA Tesla V100. Inference demand is driven both by a synthetic Poisson-arrival burst pattern and by a real Alibaba 2018 production trace (roughly 4,000 machines over 8 days) split into two demand streams mapped to the two tasks. Against a Round-Robin baseline, DART-FL improves Cars accuracy by 5.17% on average over the burst period (up to 15.9% at the most demanding rounds) on the synthetic workload, and by 5.83%-11.85% across three identified peak periods on the Alibaba-trace workload, while a more aggressive Burst-Aware-FIFO baseline achieves higher peak accuracy on the demanding task only by starving the other task's training almost entirely — a failure mode DART-FL avoids by enforcing bounded minimum training shares for every task. The paper also includes a queue-stability proof (bounded expected queue length under supportable arrival rates) and a convergence bound for the federated objective under the scheduler's dynamic weight changes.

## Summary (ZH)

同时承担训练与实时推理任务的边缘设备，面临一种资源上的拉锯：把更多算力分给实时推理（以满足服务等级目标 SLO）就意味着训练可用的算力更少，反之亦然，而这种权衡还会随着不同任务的推理需求起伏而持续变化。DART-FL（东北大学；佐治亚大学）是一个联合处理这两项决策的联邦学习框架。在每个调度周期，它首先根据观测到的推理积压量与设备自身经过画像的服务能力，计算出为满足 SLO 截止时间所需分配给推理的最小算力份额（基于利特尔法则 Little's Law 的计算），再将剩余算力交给一个队列感知的调度器——文中称其受"漂移加惩罚"（Drift-Plus-Penalty）技术启发——按各任务自身的积压情况按比例分配训练精力。这些按任务分配的份额会被转化为动态损失权重，使当前处于需求突发期的任务在该轮获得更多训练侧重；各设备训练一个共享骨干网络加任务专属头部，并通过标准 FedAvg 聚合。

作者在两个图像分类任务（Stanford Cars、Oxford Flowers 102）上进行评测，二者共享一个 ResNet 骨干网络，在 100 个模拟联邦客户端（每轮选取 30%）上于 NVIDIA Tesla V100 上训练。推理需求分别由一个合成的泊松到达突发模式，以及一份真实的 2018 年阿里巴巴生产跟踪数据（约 4000 台机器、持续 8 天）驱动，后者被拆分为两条需求流分别映射到两个任务。相较 Round-Robin 基线，DART-FL 在合成负载下于突发期内将 Cars 任务的平均准确率提升 5.17%（在需求最紧张的轮次最高提升 15.9%），在阿里巴巴跟踪负载下的三个识别出的峰值时段内提升 5.83%-11.85%；而一个更激进的 Burst-Aware-FIFO 基线虽然在高需求任务上取得更高的峰值准确率，但代价是几乎完全牺牲了另一任务的训练——DART-FL 通过为每个任务强制设定有界的最低训练份额避免了这种失效模式。论文还给出了一个队列稳定性证明（在可承受的到达速率下期望队列长度有界），以及在调度器动态权重变化下联邦目标的收敛性界。

## Key technical points (EN)

- **Problem**: edge devices doing concurrent multitask training and inference must split compute between meeting inference SLOs and making training progress, under time-varying per-task inference demand.
- **Mechanism 1**: inference-training split computed per interval from inference backlog and profiled service capacity via a Little's-Law-derived required inference ratio, clamped to feasible bounds.
- **Mechanism 2**: remaining training capacity distributed across tasks via a queue-aware, Drift-Plus-Penalty-inspired scheduler that favors tasks with larger backlogs while penalizing abrupt allocation swings.
- **Mechanism 3**: per-task allocations mapped to dynamic loss weights for a shared-backbone, task-specific-head multitask model, aggregated via standard FedAvg.
- **Evaluation**: Stanford Cars + Oxford Flowers 102 on a shared ResNet backbone, 100 simulated clients (30% selected/round) on an NVIDIA Tesla V100; synthetic Poisson-burst and real Alibaba-2018-trace-derived (~4,000 machines, 8 days) inference workloads.
- **Headline numbers**: +5.17% average / +15.9% peak Cars accuracy vs. Round-Robin on the synthetic burst; +5.83% to +11.85% across three Alibaba-trace peak periods.
- **Fairness result**: Burst-Aware-FIFO reaches higher peak accuracy on the dominant task only by nearly starving the other task's training; DART-FL enforces bounded minimum shares to avoid this.
- **Theory**: a queue-stability proof and a federated-convergence bound under the scheduler's dynamic weight changes are included.
- **Note**: evaluated in simulation (V100 + trace-driven workload generation), not on physical edge hardware.

## Key technical points (ZH)

- **问题**：同时执行多任务训练与推理的边缘设备，需要在满足推理 SLO 与推进训练进度之间分配算力，且各任务的推理需求随时间变化。
- **机制一**：每个调度周期，基于推理积压与设备自身画像的服务能力，通过利特尔法则推导所需推理比例，并限制在可行范围内。
- **机制二**：剩余训练算力通过一个队列感知、受"漂移加惩罚"启发的调度器在各任务间分配，偏向积压更大的任务，同时惩罚分配比例的剧烈波动。
- **机制三**：按任务的分配比例被映射为动态损失权重，用于一个共享骨干、任务专属头部的多任务模型，并通过标准 FedAvg 聚合。
- **评测**：Stanford Cars + Oxford Flowers 102，共享 ResNet 骨干，100 个模拟客户端（每轮选取 30%），运行于 NVIDIA Tesla V100；推理负载分别来自合成泊松突发模式与真实的 2018 年阿里巴巴生产跟踪数据（约 4000 台机器、持续 8 天）。
- **核心数据**：合成突发负载下，相较 Round-Robin，Cars 准确率平均提升 5.17%，峰值提升 15.9%；阿里巴巴跟踪负载下三个峰值时段提升 5.83% 至 11.85%。
- **公平性结果**：Burst-Aware-FIFO 在主导任务上取得更高峰值准确率，但代价是几乎牺牲另一任务的训练；DART-FL 通过强制设定最低训练份额避免了这一情况。
- **理论部分**：包含队列稳定性证明（有界期望队列长度）及调度器动态权重变化下的联邦收敛性界。
- **说明**：评测在仿真环境中进行（V100 + 跟踪数据驱动的负载生成），并非在真实边缘硬件上运行。

## Why it matters / what's new (EN)

This is the second entry in this KB's `edge-federated-learning` bin, after `2026-08-31_arxiv-qef-gt-adamw-decentralized-wireless-fl`. Where that entry addressed a decentralized optimizer for federated learning over a wireless link, DART-FL addresses a different problem within the same bin: the resource contention between training and inference on a single device that must do both concurrently, using a real production workload trace (Alibaba 2018) rather than only synthetic arrival patterns to validate the scheduler.

## Why it matters / what's new (ZH)

这是本知识库 `edge-federated-learning` 分类下的第二个条目，此前的条目是 `2026-08-31_arxiv-qef-gt-adamw-decentralized-wireless-fl`。该条目关注的是无线链路上联邦学习的去中心化优化器，而 DART-FL 关注的是同一分类下的另一个问题：单台设备需要同时完成训练与推理时二者之间的资源争用，并使用了真实生产环境的负载跟踪数据（2018 年阿里巴巴数据）而非仅依赖合成到达模式来验证调度器。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
