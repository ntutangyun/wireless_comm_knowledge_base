---
id: 2026-09-10_arxiv-elastoformer-elastic-edge-vit-cnn-inference
date_published: 2025-12-04
date_found: 2026-09-10
type: academic-paper
technology: edge-ai
title_en: "Elastoformer: Enabling Dynamic Adaptivity via Elastic Model Transformation"
title_zh: "Elastoformer：通过弹性模型变换实现动态自适应能力"
url: "https://arxiv.org/abs/2609.10018"
source_quality: full
topics: [elastic-inference, dynamic-adaptivity, ViT, CNN, Jetson, edge-computing]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference]
novelty_score: 2
---

## Summary (EN)

Researchers at the University of Amsterdam (Sudaksh Kalra, Dolly Sapra) propose Elastoformer, a framework that transforms a conventional neural network into an "elastic" system able to dynamically switch between multiple modes of operation at runtime, adapting to changing computational budgets on edge devices without the overhead of maintaining and switching between separate models. The stated motivation is that edge AI systems face highly dynamic operational conditions — fluctuating latency, power and memory constraints — that a single fixed-cost model or a set of independently maintained model variants handle poorly.

Elastoformer is evaluated as architecture-agnostic, applied to both a Vision Transformer (ViT-B, 12 layers, 768 embedding dimension) and CNNs (ResNet-50, VGG-16), across ImageNet-1K, CIFAR-10 and CIFAR-100. On a Jetson Orin (8GB, Ampere GPU) and a Jetson Nano (4GB, Maxwell GPU), the paper's headline numbers — up to 85% FLOPs reduction, 50% latency reduction and 76% memory-overhead reduction — come from the ViT-B/ImageNet configuration, with the latency figure the one actually measured on Jetson (50 trials, 10 warmup, batch size 1); the FLOPs reduction is platform-independent and the memory-overhead figure refers to not storing separate model variants; the CNN experiments (ResNet-50, VGG-16) separately demonstrate up to 75% FLOPs reduction. Training of the framework's "descendant networks" used eight NVIDIA RTX 3090 GPUs (24GB each) off-device. The paper was published at SEC'25 (Tenth ACM/IEEE Symposium on Edge Computing, Arlington, VA, 3-6 Dec 2025); this entry is a disclosed backfill of that ~9-month-old publication, filed on its own SEC'25 date rather than the paper's September 2026 arXiv self-archival date.

## Summary (ZH)

阿姆斯特丹大学的研究者（Sudaksh Kalra、Dolly Sapra）提出 Elastoformer，一个将传统神经网络转化为「弹性」系统的框架，使其能够在运行时动态切换多种运行模式，从而适应边缘设备上不断变化的计算预算，而无需维护与切换多个独立模型所带来的开销。论文给出的动机是：边缘 AI 系统面临高度动态的运行条件——时延、功耗与内存约束不断波动——而单一固定开销的模型或一组独立维护的模型变体都难以很好地应对这种情况。

Elastoformer 被设计为架构无关，既应用于视觉 Transformer（ViT-B，12 层，768 维嵌入），也应用于 CNN（ResNet-50、VGG-16），并在 ImageNet-1K、CIFAR-10、CIFAR-100 上评测。在 Jetson Orin（8GB、Ampere GPU）与 Jetson Nano（4GB、Maxwell GPU）上，论文的核心数字——最高 85% 的 FLOPs 降低、50% 的时延降低、76% 的内存开销降低——来自 ViT-B/ImageNet 配置，其中只有时延一项是在 Jetson 上实测得出（50 次试验、10 次预热、批大小为 1）；FLOPs 降低与平台无关，内存开销降低指的是无需分别存储多个模型变体；CNN 实验（ResNet-50、VGG-16）则单独展示了最高 75% 的 FLOPs 降低。框架「子代网络」的训练在设备外使用了八块 NVIDIA RTX 3090 GPU（各 24GB）完成。该论文发表于 SEC'25（第十届 ACM/IEEE 边缘计算研讨会，美国弗吉尼亚州阿灵顿，2025 年 12 月 3–6 日）；本条目为对这篇约九个月前发表论文的公开回补收录，采用其 SEC'25 会议发表日期而非论文 2026 年 9 月才自行归档到 arXiv 的日期。

## Key technical points (EN)

- **Mechanism**: transforms a conventional network into an elastic one that switches operating modes at runtime in response to changing compute budgets, avoiding the cost of maintaining separate model variants.
- **Architecture-agnostic**: validated on both a Vision Transformer (ViT-B) and CNNs (ResNet-50, VGG-16).
- **Datasets**: ImageNet-1K, CIFAR-10, CIFAR-100.
- **Edge hardware**: Jetson Orin (8GB, Ampere GPU) and Jetson Nano (4GB, Maxwell GPU) for the headline inference results; 8x RTX 3090 (24GB) used off-device for training the descendant networks.
- **Results**: up to 85% FLOPs reduction (platform-independent) / 50% latency reduction (measured on Jetson) / 76% memory-overhead reduction (from not storing separate model variants), all for ViT-B/ImageNet; up to 75% FLOPs reduction for the CNN variants.
- **Venue/dating**: SEC'25 (Tenth ACM/IEEE Symposium on Edge Computing), 3-6 Dec 2025, Arlington VA — this entry uses that date, not the paper's Sept 2026 arXiv posting date.

## Key technical points (ZH)

- **机制**：将传统网络转化为可在运行时根据计算预算变化而切换运行模式的弹性网络，避免维护多个独立模型变体的开销。
- **架构无关**：在视觉 Transformer（ViT-B）与 CNN（ResNet-50、VGG-16）上均得到验证。
- **数据集**：ImageNet-1K、CIFAR-10、CIFAR-100。
- **边缘硬件**：Jetson Orin（8GB、Ampere GPU）与 Jetson Nano（4GB、Maxwell GPU）用于核心推理结果；训练「子代网络」在设备外使用 8 块 RTX 3090（各 24GB）。
- **结果**：ViT-B/ImageNet 在 Jetson 上最高 85% FLOPs 降低、50% 时延降低、76% 内存开销降低；CNN 变体最高 75% FLOPs 降低。
- **发表/日期认定**：SEC'25（第十届 ACM/IEEE 边缘计算研讨会），2025 年 12 月 3–6 日，美国阿灵顿——本条目采用该日期，而非论文 2026 年 9 月才登陆 arXiv 的日期。

## Why it matters / what's new (EN)

This KB's edge-model-efficiency bin already holds several quantisation/pruning-focused entries; Elastoformer's angle — a single network that reconfigures its own operating mode at runtime rather than a fixed compressed model or a set of separately maintained variants — is a distinct mechanism from those, and it is validated on the same Jetson Orin/Nano tier this KB already uses as a comparison substrate for several other entries (e.g. the 2026-09-04 LeanStream and 2026-08-29 Jetson-characterisation entries), making cross-entry comparison easier. As with the 2026-09-07 Para-Pipe entry, this is a case where the paper's own venue date (Dec 2025) rather than its arXiv self-archival date (Sept 2026) is the right date_published. The rule this KB applies is narrower than it may look: the venue date replaces the arXiv date only when the venue has already taken place AND its exact date is stated in the record. Where a paper is merely "accepted to" a venue, or the venue date is not on the arXiv record, the entry keeps its arXiv date and names the venue in the text instead — which is why three sibling entries in this same run (PELM, the QoMEX QoE paper and the WoWMoM serving-cluster paper) are filed on their arXiv dates with the venue disclosed in-line rather than on invented conference dates.

## Why it matters / what's new (ZH)

本知识库的 edge-model-efficiency 分类已收录多条聚焦量化/剪枝的条目；Elastoformer 的切入角度——让单一网络在运行时自行重构运行模式，而非依赖固定压缩模型或一组独立维护的变体——是与之不同的机制，并且它在本知识库已用作多条其他条目对比基准的同一档 Jetson Orin/Nano 硬件上得到验证（例如 2026-09-04 收录的 LeanStream 与 2026-08-29 收录的 Jetson 代际特性条目），便于跨条目比较。与 2026-09-07 收录的 Para-Pipe 条目类似，本例中论文自身的会议发表日期（2025 年 12 月）而非其 arXiv 自行归档日期（2026 年 9 月）才是恰当的 date_published——这正是自那一发现以来本知识库持续采用的「核对 Comments/期刊引用字段」做法。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
