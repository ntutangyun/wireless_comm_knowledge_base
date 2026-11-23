---
id: 2026-11-23_arxiv-omnis-plus-semantic-ran-slicing-dynamic-split-neural-networks
date_published: 2026-11-18
date_found: 2026-11-23
technology: edge-ai
type: academic-paper
title_en: "OMNIS+: Semantic RAN Slicing and Quantization for Dynamic Split Neural Networks (multi-cell 3.5 GHz uplink, simulated)"
title_zh: "OMNIS+：面向动态拆分神经网络的语义 RAN 切片与量化（多小区 3.5 GHz 上行，仿真）"
url: "https://arxiv.org/abs/2611.23977"
source_quality: full
topics: [split-DNN, RAN-slicing, box-quantization, task-offloading, contextual-bandit, Lyapunov, multi-cell]
topic_primary: compute-offloading
topics_secondary: [edge-orchestration, task-oriented-communication]
novelty_score: 3
---

## Summary (EN)

OMNIS+ is a journal extension of an INFOCOM 2026 paper on radio access network (RAN) slicing for edge computing in which the offloaded workload is a dynamic split neural network rather than a fixed-cost task. Mobile devices (MDs) run the head of a split Mask R-CNN (ResNet-50 backbone, COCO instance segmentation) that includes a neural encoder, and send a compressed, quantized feature tensor over the uplink to an edge server (ES) that runs the tail. Six branches are available ({standard, "box"} quantization x compression levels 3, 6 and 12), so each branch is a different point on the payload-versus-compute curve.

The paper proposes a "box" quantization scheme that is designed to keep accuracy when transmitted bits are corrupted, across several compression rates. Two coupled problems are then posed. Each MD picks a branch and a serving cell (from a top-3 set ranked by forecast uplink SINR and broadcast edge queue length) to maximise inference accuracy under delay, energy and queue-stability constraints, solved as a causal contextual multi-armed bandit under Lyapunov backlog control. Each ES allocates bandwidth, GPU frequency and modulation-and-coding scheme to maximise the minimum accuracy among its associated MDs, solved by block coordinate descent.

Link: simulated multi-cell cellular uplink (NVIDIA Sionna, 3GPP TR 38.901 UMi at 3.5 GHz, 7 cells, 200 m inter-site distance, MCS 0-28, 10% BLER target, 650 kHz bandwidth pool per cell). Mask R-CNN accuracy for each branch is measured on the dataset; the radio is simulated, not measured over the air.

## Summary (ZH)

OMNIS+ 是一篇 INFOCOM 2026 论文的期刊扩展版，研究面向边缘计算的无线接入网（RAN）切片，其中被卸载的负载是动态拆分神经网络，而不是固定开销的任务。移动终端（MD）运行拆分 Mask R-CNN（ResNet-50 主干，COCO 实例分割）的头部（含神经编码器），把压缩并量化后的特征张量经上行发送给边缘服务器（ES），由 ES 运行尾部。共有六个分支（{标准、"box"} 量化 x 压缩等级 3、6、12），每个分支对应载荷与算力曲线上的不同位置。

文中提出 "box" 量化方案，目标是在传输比特出错时跨多种压缩率保持精度。随后提出两个耦合问题：每个 MD 在延迟、能耗与队列稳定性约束下，选择分支与服务小区（从按预测上行 SINR 与广播的边缘队列长度排序的前 3 个小区中选）以最大化推理精度，采用 Lyapunov 积压控制下的因果上下文多臂赌博机求解；每个 ES 分配带宽、GPU 频率与调制编码方案，以最大化其关联 MD 中的最低精度，采用块坐标下降求解。

所经链路：仿真的多小区蜂窝上行（NVIDIA Sionna，3GPP TR 38.901 UMi，3.5 GHz，7 个小区，站间距 200 m，MCS 0-28，BLER 目标 10%，每小区 650 kHz 带宽池）。各分支的 Mask R-CNN 精度在数据集上实测，无线部分为仿真而非空口实测。

## Key technical points (EN)

- Setup: M up to 25 MDs, 1 s slots, Poisson arrivals (0.07 tasks/slot), per-task delay budgets drawn from 1.6-2.5 s and energy budgets from 0.11-0.26 J; the teacher Mask R-CNN has 41.80% mAP. Online control chooses among 18 arms (6 branches x top-3 cells).
- Reported result: at 25 MDs, OMNIS+ reduces QoS violation probability by 1.75x relative to the greedy accuracy-first baseline (GDO) and gives a better accuracy-violation trade-off than the baseline set (OMNIS, GDO, DQN / PPO / MAPPO); relative to OMNIS, per-slot reward improves about 22% and accuracy by up to 42.5% over a 0-10 dB SNR sweep.
- Control cost: the distributed version takes 13.3 ms per 1 s slot on a workstation, versus 20.6 ms for a centralised variant that gains only about 1% reward.
- Entropy-coded quantization is excluded online because of its sensitivity to bit errors; code is released by the authors.

## Key technical points (ZH)

- 设置：最多 25 个 MD，时隙 1 s，泊松到达（0.07 任务/时隙），每任务延迟预算取自 1.6-2.5 s、能耗预算取自 0.11-0.26 J；教师 Mask R-CNN 的 mAP 为 41.80%。在线控制从 18 个动作（6 个分支 x 前 3 个小区）中选择。
- 报告结果：在 25 个 MD 时，OMNIS+ 相对贪心精度优先基线（GDO）把 QoS 违约概率降低 1.75 倍，并在精度-违约折中上优于基线集合（OMNIS、GDO、DQN / PPO / MAPPO）；相对 OMNIS，每时隙回报提升约 22%，在 0-10 dB 信噪比扫描上精度最多提升 42.5%。
- 控制开销：分布式版本在工作站上每 1 s 时隙耗时 13.3 ms，而集中式变体耗时 20.6 ms，回报仅多约 1%。
- 因对比特错误过于敏感，在线阶段不使用熵编码量化；作者公开了代码。

## Why it matters / what's new (EN)

Existing offloading entries in this domain mostly decide where to cut a model for one link (for example 2026-09-09_arxiv-comvla-channel-adaptive-split-inference-robotics) or schedule one radio resource (2026-11-19_arxiv-sgpe-sr-radio-gpu-scheduling-progressive-edge-inference). This paper puts the cut point, the quantization and the cell association inside the RAN slicing decision, so the network allocates bandwidth, GPU frequency and MCS knowing that the payload and the compute are both adjustable. The evidence is simulation-only on the radio side, and the headline "1.75x" is relative to the greedy accuracy-first baseline (GDO) at 25 MDs.

## Why it matters / what's new (ZH)

本领域已有的卸载条目多数针对单条链路决定模型切分点（例如 2026-09-09_arxiv-comvla-channel-adaptive-split-inference-robotics），或调度单一无线资源（2026-11-19_arxiv-sgpe-sr-radio-gpu-scheduling-progressive-edge-inference）。本文把切分点、量化与小区关联纳入 RAN 切片决策，使网络在分配带宽、GPU 频率与 MCS 时，知道载荷与算力都是可调的。无线侧证据仅来自仿真，所谓 "1.75 倍" 是在 25 个 MD 时相对贪心精度优先基线（GDO）而言。

## Images

![Split-DNN offloading system model across multi-cell RAN and edge servers | 多小区 RAN 与边缘服务器之间的拆分 DNN 卸载系统模型](https://arxiv.org/html/2611.23977v1/figures/sys_model.png)
