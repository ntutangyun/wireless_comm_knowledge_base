---
id: 2026-10-12_arxiv-hintkd-bandwidth-constrained-distillation
date_published: 2026-10-06
date_found: 2026-10-12
type: academic-paper
technology: edge-ai
title_en: "HintKD: Hint Knowledge Distillation for Bandwidth-Constrained Cloud-Edge Inference"
title_zh: "HintKD：面向带宽受限云-边推理的提示知识蒸馏"
url: "https://arxiv.org/abs/2610.08412"
source_quality: abstract_only
topics: [knowledge-distillation, vector-quantization, cloud-edge-inference, 6G, beam-prediction]
topic_primary: compute-offloading
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

Authors Wanling Luo, Jiayi Zhang, Bokai Xu and Ziheng Liu address the communication cost of collaborative inference between a cloud server and an edge device, where existing approaches typically transmit either raw high-dimensional features or full output-logit distributions from a teacher to a student. Their proposed framework, HintKD, instead compresses the teacher's guidance into compact discrete "hints" rather than transmitting raw features directly: a cloud-based teacher model is trained with a maximum conditional mutual information objective, and its representations are mapped through differentiable vector quantization into a compact codebook.

During inference, only a hint index (not a feature vector or a logit distribution) is transmitted to the user equipment, which uses a lightweight FiLM-based adapter to condition the student model's feature processing on the received codeword. The authors report this reduces the inference-side communication payload from O(D_t) for feature transmission, or O(C) for logit transmission, down to O(1) for discrete hint transmission. Experiments on the DeepSense 6G beam-prediction task and on MNIST show the method maintains competitive accuracy while substantially reducing the transmitted payload, which the authors frame in the context of bandwidth-constrained 6G network scenarios.

## Summary (ZH)

作者 Wanling Luo、Jiayi Zhang、Bokai Xu 和 Ziheng Liu 针对云服务器与边缘设备之间协同推理的通信成本问题展开研究：现有方法通常直接在教师与学生之间传输原始高维特征或完整的输出 logit 分布。他们提出的框架 HintKD 则将教师的指导信息压缩为紧凑的离散"提示（hint）"，而不是直接传输原始特征：云端教师模型使用最大化条件互信息目标进行训练，其表示通过可微分向量量化映射到一个紧凑的码本中。

在推理阶段，仅将一个提示索引（而非特征向量或 logit 分布）传输给用户设备，设备侧使用一个轻量级的 FiLM 式适配器，根据接收到的码字对学生模型的特征处理过程进行调节。作者报告称，该方法将推理侧通信负载从特征传输的 O(D_t)、或 logit 传输的 O(C)，降低到离散提示传输的 O(1)。在 DeepSense 6G 波束预测任务和 MNIST 上的实验表明，该方法在大幅降低传输负载的同时保持了有竞争力的精度，作者将其置于带宽受限的 6G 网络场景背景下讨论。

## Key technical points (EN)

- Problem: reduce communication payload in cloud(teacher)-edge(student) collaborative inference, where prior work sends raw features (O(D_t)) or logit distributions (O(C)).
- Mechanism: cloud teacher trained with a maximum conditional mutual information objective; its representations mapped via differentiable vector quantization to a compact codebook; only a discrete hint index is transmitted at inference.
- Edge-side: a lightweight FiLM-based adapter conditions the student's feature processing on the received hint codeword.
- Reported communication complexity reduction: O(D_t) or O(C) -> O(1) per inference.
- Evaluated on the DeepSense 6G beam-prediction task and on MNIST; framed as relevant to bandwidth-constrained 6G scenarios.

## Key technical points (ZH)

- 问题：降低云端（教师）- 边缘（学生）协同推理中的通信负载，此前方法传输原始特征（O(D_t)）或 logit 分布（O(C)）。
- 机制：云端教师模型以最大化条件互信息为目标训练；其表示通过可微分向量量化映射到紧凑码本；推理阶段仅传输一个离散提示索引。
- 边缘侧：一个轻量级 FiLM 式适配器根据接收到的提示码字，对学生模型的特征处理过程进行调节。
- 报告的通信复杂度降低：从每次推理的 O(D_t) 或 O(C) 降低到 O(1)。
- 在 DeepSense 6G 波束预测任务和 MNIST 上进行了评估；作者将其置于带宽受限 6G 场景的背景下讨论。

## Why it matters / what's new (EN)

HintKD targets the inference-time communication payload directly, replacing feature or logit transmission with an O(1) discrete hint index. Its main evaluation uses the DeepSense 6G Scenario 9 radar-aided beam-prediction dataset (4 bits per sample at inference versus 2688 bits for Feature KD and 1056 bits for Logits KD), connecting vector-quantized distillation to a radio-facing task.

## Why it matters / what's new (ZH)

HintKD 直接针对推理阶段的通信负载本身，用 O(1) 的离散提示索引取代特征或 logit 传输。其主要评估采用 DeepSense 6G Scenario 9 雷达辅助波束预测数据集（推理时每样本 4 比特，而 Feature KD 为 2688 比特、Logits KD 为 1056 比特），将向量量化蒸馏与一个面向无线侧的任务联系起来。
