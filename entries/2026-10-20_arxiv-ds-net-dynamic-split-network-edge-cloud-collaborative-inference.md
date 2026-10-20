---
id: 2026-10-20_arxiv-ds-net-dynamic-split-network-edge-cloud-collaborative-inference
date_published: 2026-10-09
date_found: 2026-10-20
technology: edge-ai
type: academic-paper
title_en: "DS-Net: a Dynamic Split Network that switches among multiple split points within one model for edge-cloud collaborative inference"
title_zh: "DS-Net：在单一模型内切换多个切分点的动态切分网络，面向边云协同推理"
url: "https://arxiv.org/abs/2610.23949"
source_quality: full
topics: [collaborative-inference, split-point-switching, feature-compression, Jetson, edge-cloud]
topic_primary: compute-offloading
topics_secondary: [edge-ai-networking, on-device-inference]
novelty_score: 3
---

## Summary (EN)

Collaborative inference splits a deep neural network between an edge device and a cloud server. The authors note that existing methods load a different model for each split point, so when the link or the device changes, switching takes long and the edge side stores several models. DS-Net (Dynamic Split Network) offers a dynamic switching framework in which multiple split points live inside a single model, which the paper says reduces storage, memory and switching overhead. To handle the feature-distribution shift and loss of task-relevant information that come with dynamic splitting and high-ratio compression, it adds a hierarchical compensation mechanism: local alignment calibrates the decoded feature distribution at each split point, and task-specific global compensation restores task-relevant information. A sample-adaptive selection of the global compensation is folded into split-point selection, based on sample complexity and runtime resource conditions.

Experiments use Jetson TX2 and Jetson Nano edge platforms. The authors report a 74.6% reduction in memory overhead and millisecond-level switching latency. Under a 10 Mbps bandwidth constraint on the Nano platform, DS-Net is reported to beat state-of-the-art collaborative methods by 1.2% higher accuracy on COCO, 42.5% lower latency and 1.8x throughput. The paper is a manuscript submitted to IEEE Transactions on Mobile Computing.

## Summary (ZH)

协同推理把深度神经网络切分到边缘设备和云服务器上执行。作者指出，现有方法为每个切分点加载不同的模型，因此当链路或设备变化时，切换耗时长，边缘侧还需存储多个模型。DS-Net（动态切分网络）提供一个动态切换框架，把多个切分点放进同一个模型中，论文称这样可降低存储、内存和切换开销。为应对动态切分和高比例压缩带来的特征分布偏移与任务相关信息损失，它加入分层补偿机制：局部对齐校准各切分点处解码后的特征分布，任务相关的全局补偿则恢复任务相关信息。基于样本复杂度和运行时资源状况的样本自适应全局补偿选择，被并入切分点的选择过程。

实验使用 Jetson TX2 和 Jetson Nano 边缘平台。作者报告内存开销降低 74.6%，切换延迟达到毫秒级。在 Nano 平台 10 Mbps 带宽约束下，DS-Net 相比最先进的协同方法，COCO 精度高 1.2%，延迟降低 42.5%，吞吐提升 1.8 倍。该论文是投稿至 IEEE Transactions on Mobile Computing 的稿件。

## Key technical points (EN)

- Setting: edge-cloud split inference where bandwidth or device conditions change and the split point must change with them.
- Problem: prior methods keep a separate model per split point, giving long switching times and high edge storage.
- Mechanism: multiple split points inside one model, selectable at runtime.
- Compensation: local alignment per split point plus task-specific global compensation, chosen per sample by complexity and runtime resources.
- Results (authors' own): 74.6% less memory overhead, millisecond-level switching; on Jetson Nano at 10 Mbps, +1.2% COCO accuracy, -42.5% latency, 1.8x throughput versus compared methods.
- Platforms: Jetson TX2 and Jetson Nano.

## Key technical points (ZH)

- 场景：边云切分推理，带宽或设备条件变化时切分点需随之变化。
- 问题：已有方法为每个切分点保留单独模型，切换时间长、边缘存储高。
- 机制：单一模型内含多个切分点，可在运行时选择。
- 补偿：每个切分点的局部对齐，加上任务相关的全局补偿，按样本复杂度和运行时资源逐样本选择。
- 结果（作者自测）：内存开销降低 74.6%，毫秒级切换；Jetson Nano 10 Mbps 下相对对比方法 COCO 精度 +1.2%、延迟 -42.5%、吞吐 1.8 倍。
- 平台：Jetson TX2 与 Jetson Nano。

## Why it matters / what's new (EN)

The paper targets the switching and storage cost that existing methods incur by loading a different model for each split point when the communication or device changes. The gains are the authors' own measurements against the baselines they chose, on two Jetson boards, and the paper has not yet been through peer review.

## Why it matters / what's new (ZH)

论文针对的是现有方法在通信或设备变化时为每个切分点加载不同模型所带来的切换与存储开销。这些收益是作者针对其选定基线、在两块 Jetson 板上的自测结果，且论文尚未经过同行评审。

## Images

*(No redistributable images for this entry.)*
