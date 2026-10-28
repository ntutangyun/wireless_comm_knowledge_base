---
id: 2026-10-28_arxiv-phantom-forgetting-batchnorm-state-edge-split-machine-unlearning
date_published: 2026-10-26
date_found: 2026-10-28
technology: edge-ai
type: academic-paper
title_en: "Phantom forgetting: BatchNorm running statistics can fake deletion in edge-server split models"
title_zh: "幻象遗忘：BatchNorm 运行统计量可在边-云拆分模型中伪造“删除”"
url: "https://arxiv.org/abs/2610.34800"
source_quality: full
topics: [split-learning, machine-unlearning, batch-normalization, edge-security, state-integrity, CIFAR-10]
topic_primary: compute-offloading
topics_secondary: [edge-federated-learning]
novelty_score: 2
---

## Summary (EN)

Split learning runs the first layers of a network on a resource-constrained edge device and offloads the rest to a server so that raw data never leaves the device. When such a system must unlearn data, for example to honour an erasure request, deletion is usually judged by forget-set accuracy. This paper asks whether Batch Normalization running statistics, which are non-learnable state held on both sides of the split, can by themselves produce a forgetting signal while every learnable weight stays fixed. It defines a state-only diagnostic that separates learnable-parameter change from BN-buffer change and localises the effect to the edge side, the server side, or both, and introduces a state-induced forgetting gap (SIFG) that discounts simultaneous retain-set degradation.

On CIFAR-10 over all ten forget classes, recalibrating BN statistics on forget data in a centralised model lowers mean forget accuracy by 61.50 percentage points with zero weight change. In a split model, edge-only, server-only and joint recalibration give mean drops of 37.27, 41.71 and 51.90 points. Server-side state gives the largest selective gap relative to retain-set degradation, while joint recalibration causes the largest overall prediction change. The authors conclude that forget accuracy alone should not be accepted as a deletion certificate without an edge-aware audit of normalisation state.

## Summary (ZH)

拆分学习把网络的前几层放在资源受限的边缘设备上，其余部分卸载到服务器，使原始数据不离开设备。当这类系统需要遗忘数据（例如响应删除请求）时，通常用遗忘集准确率来判断删除效果。本文探讨：BatchNorm 运行统计量是拆分两侧都持有的不可学习状态，能否在所有可学习权重保持不变的情况下自行产生“遗忘”信号。论文定义了仅看状态的诊断方法，将可学习参数变化与 BN 缓冲区变化分开，并把影响定位到边缘侧、服务器侧或两者；同时提出状态诱导遗忘差距（SIFG），扣除同时发生的保留集性能下降。

在 CIFAR-10 的全部十个遗忘类别上，对集中式模型在遗忘数据上重新校准 BN 统计量，可在权重零变化的情况下使平均遗忘准确率下降 61.50 个百分点。在拆分模型中，仅边缘侧、仅服务器侧和联合重新校准的平均降幅分别为 37.27、41.71 和 51.90 个百分点。相对保留集性能下降，服务器侧状态给出最大的选择性差距，而联合重新校准造成最大的整体预测变化。作者的结论是：没有对归一化状态进行边缘感知的审计，不应仅凭遗忘准确率就接受其为删除证明。

## Key technical points (EN)

- The diagnostic compares weights and BN buffers before and after an intervention, so a drop in forget accuracy can be attributed to state rather than learning.
- Placement matters: the same recalibration has different selectivity depending on whether it touches the edge-side BN layers, the server-side ones, or both.
- Scope is limited to CIFAR-10 image classification with a split CNN; no real edge device, link or large model is involved.
- The paper frames BN buffers as security-relevant state exposed to over-the-air updates, drift and checkpoint rollback on edge devices.

## Key technical points (ZH)

- 该诊断比较干预前后的权重和 BN 缓冲区，因此遗忘准确率的下降可以归因于状态而非学习。
- 位置很重要：同样的重新校准，其选择性取决于作用于边缘侧 BN 层、服务器侧 BN 层还是两者。
- 范围仅限于拆分 CNN 的 CIFAR-10 图像分类，不涉及真实边缘设备、链路或大模型。
- 论文把 BN 缓冲区视为与安全相关的状态，易受空中升级、数据漂移和检查点回滚影响。

## Why it matters / what's new (EN)

Anyone auditing data deletion in an edge-server split deployment should not treat a drop in forget accuracy as proof that the data was removed from the model, because normalisation buffers can move the metric without any weight change. The evidence is a small, single-dataset study, so it is best read as a warning about the evaluation method rather than a measured privacy risk in deployed systems.

## Why it matters / what's new (ZH)

审计边-云拆分部署中数据删除的人，不应把遗忘准确率下降当作数据已从模型中移除的证明，因为归一化缓冲区可以在权重不变的情况下改变该指标。证据来自单一数据集的小规模研究，更适合作为对评估方法的警示，而不是对已部署系统中隐私风险的实测。

## Images

*(No redistributable images for this entry.)*
