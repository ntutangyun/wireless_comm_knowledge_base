---
id: 2026-10-19_arxiv-trace-codebook-encoding-distributed-edge-inference
date_published: 2026-10-15
date_found: 2026-10-19
technology: edge-ai
type: academic-paper
title_en: "TRACE: residual-activation codebook encoding cuts communication in sequence-parallel Transformer inference across edge devices"
title_zh: "TRACE：残差激活码本编码降低多边缘设备序列并行 Transformer 推理的通信开销"
url: "https://arxiv.org/abs/2610.22435"
source_quality: abstract_only
topics: [distributed-inference, vector-quantization, sequence-parallel, ViT, communication-efficient, codebook]
topic_primary: compute-offloading
topics_secondary: [edge-ai-networking, edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

Distributed Transformer inference across co-located edge devices is communication-bound: exchanging activations between sequence-parallel partitions dominates latency at commodity edge bandwidths. The paper argues that existing compression schemes keep a structural bottleneck, because the received data must still go through key/value projection before attention can proceed, which serialises computation behind communication.

TRACE places a vector quantizer at the post-attention residual of every Transformer layer and precomputes codebook-indexed key/value representations. Exchanged activations are encoded as compact codebook indices, and receivers recover keys and values by table lookup instead of recomputing them, which allows communication and computation to overlap. A hierarchical clustering gives the codebook a multi-resolution structure so the communication bitrate can be adapted at runtime without retraining, and two variants trade accuracy against efficiency. On ViT-Base (ImageNet-1K, CIFAR-100) and ViViT-B (UCF-101) the authors report up to 1.89% higher accuracy and up to 1.27x end-to-end speedup versus the state-of-the-art VQ-based distributed inference framework, and up to 22,624x less communication than uncompressed sequence-parallel inference.

## Summary (ZH)

跨同地部署的边缘设备进行分布式 Transformer 推理受限于通信：在普通边缘带宽下，序列并行分区之间交换激活值主导了时延。论文指出，现有压缩方案仍存在结构性瓶颈：接收到的数据仍须经过键/值投影才能继续计算注意力，使计算被串行在通信之后。

TRACE 在每一层 Transformer 的注意力后残差处放置向量量化器，并预先计算按码本索引的键/值表示。交换的激活值被编码为紧凑的码本索引，接收方通过查表而非重新计算来恢复键和值，从而实现通信与计算的重叠。分层聚类使码本具有多分辨率结构，可在运行时调整通信码率而无需重新训练，并提供两种在精度与效率间权衡的变体。在 ViT-Base（ImageNet-1K、CIFAR-100）和 ViViT-B（UCF-101）上，作者报告相对最先进的基于 VQ 的分布式推理框架，精度最高提升 1.89%，端到端加速最高 1.27 倍；相对未压缩的序列并行推理，通信开销最高降低 22,624 倍。

## Key technical points (EN)

- Setting: sequence-parallel Transformer inference over co-located edge devices with commodity bandwidth.
- Mechanism: vector quantizer at each layer's post-attention residual; key/value representations precomputed per codebook index; receivers use table lookup instead of K/V projection.
- Effect: removes downstream computation on received data so communication and computation can overlap.
- Hierarchical codebook allows runtime bitrate adaptation without retraining; two accuracy/efficiency variants.
- Models: ViT-Base on ImageNet-1K and CIFAR-100, ViViT-B on UCF-101 (vision models, not LLMs).
- Reported: up to +1.89% accuracy and 1.27x speedup vs the prior VQ-based framework; up to 22,624x less communication vs uncompressed.

## Key technical points (ZH)

- 场景：同地部署的边缘设备之间、普通带宽下的序列并行 Transformer 推理。
- 机制：在每层注意力后残差处放置向量量化器；按码本索引预先计算键/值表示；接收方用查表代替键/值投影。
- 效果：消除接收数据的后续计算，使通信与计算可以重叠。
- 分层码本支持运行时调整码率而无需重新训练；有两种精度/效率变体。
- 模型：ViT-Base（ImageNet-1K、CIFAR-100）、ViViT-B（UCF-101），为视觉模型而非 LLM。
- 报告结果：相对此前基于 VQ 的框架精度最高 +1.89%、加速 1.27 倍；相对未压缩方案通信最高减少 22,624 倍。

## Why it matters / what's new (EN)

The work targets the inter-device link as the bottleneck in sequence-parallel distributed inference at the edge, and attacks the dependent computation on the receive side, not only the byte count. The speedup over the prior VQ method is modest at 1.27x, the 22,624x figure is against an uncompressed baseline, and the evaluation covers vision Transformers only; this record is based on the abstract.

## Why it matters / what's new (ZH)

该工作把设备间链路视为边缘序列并行分布式推理的瓶颈，并针对接收端的依赖计算而不仅是字节数下手。相对此前 VQ 方法的加速较为有限（1.27 倍），22,624 倍是相对未压缩基线，且评估仅涉及视觉 Transformer；本条目基于摘要。

## Images

*(No redistributable images for this entry.)*
