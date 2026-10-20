---
id: 2026-10-20_arxiv-first-order-lora-training-phone-npus-snapdragon
date_published: 2026-10-17
date_found: 2026-10-20
technology: edge-ai
type: academic-paper
title_en: "First-Order LoRA Training with Phone NPUs: running the frozen-weight products of on-device fine-tuning on the Hexagon NPU"
title_zh: "基于手机 NPU 的一阶 LoRA 训练：把端侧微调中的冻结权重乘法放到 Hexagon NPU 上执行"
url: "https://arxiv.org/abs/2610.24816"
source_quality: full
topics: [on-device-fine-tuning, LoRA, mobile-NPU, Snapdragon, Hexagon, personalization, thermal-pacing]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency, edge-ai-silicon]
novelty_score: 4
---

## Summary (EN)

On-device fine-tuning lets an LLM learn from a user's private data without uploading it. Low-rank adaptation (LoRA) shrinks the set of trainable parameters, but every first-order training step still multiplies by the frozen base weights in the forward pass, in activation recomputation and in the input-gradient computation. A phone NPU already holds those weights for inference, but its inference interface does not compute input gradients. The authors present a system that runs all three frozen-weight products on the NPU while keeping the training graph, the adapters and the optimizer on the CPU. The input-gradient kernels reuse the resident weight tiles and the forward dequantizer, so no transposed weight copy is needed and forward and backward use the same effective weights. Precision is chosen by gradient sensitivity, with a per-row range guard for FP16 outputs. The runtime fuses the remaining CPU operators, overlaps NPU execution with adapter computation, and provides resumable execution and thermal pacing so training can run as a background job.

Evaluation uses two phones, a OnePlus 13T (Snapdragon 8 Elite, Hexagon V79) and a OnePlus 15 (Snapdragon 8 Elite Gen 5, Hexagon V81), both with 16 GB, and Qwen and Llama-family models of roughly 0.8B to 4B parameters. On one 3,431-token batch on the older phone, the step time falls from 361.0 s (baseline CPU trainer) to 251.4 s with CPU operator fusion and to 62.4 s with the NPU path, a further 4.03x and 5.79x overall. A nightly-update workload of 222 optimizer steps completes in about 7.8 to 8.6 active hours on the two phones. On the public LaMP-2 benchmark the phone-trained adapters land within 1.01 percentage points of GPU-trained adapters and gain 21 to 29 points over the base models. Energy above idle per token is 32.2% of the optimized CPU trainer's on the same batch, measured on the newer phone.

## Summary (ZH)

端侧微调可以让 LLM 在不上传用户私有数据的前提下学习。低秩适配（LoRA）缩小了可训练参数规模，但每个一阶训练步在前向、激活重计算和输入梯度计算中仍要乘以冻结的基座权重。手机 NPU 在推理时已经驻留了这些权重，但其推理接口不支持计算输入梯度。作者提出一个系统，把这三类冻结权重乘法全部放到 NPU 上，而训练计算图、适配器和优化器仍留在 CPU 上。输入梯度内核复用驻留的权重分块和前向反量化器，因此无需转置的权重副本，前向与反向使用相同的有效权重。精度按梯度敏感度选取，并对 FP16 输出加逐行范围保护。运行时融合其余 CPU 算子，让 NPU 执行与适配器计算重叠，并提供可恢复执行和温控节流，使训练可作为后台任务运行。

评测使用两款 16 GB 手机：一加 13T（骁龙 8 Elite，Hexagon V79）和一加 15（骁龙 8 Elite Gen 5，Hexagon V81），模型为约 0.8B 至 4B 参数的 Qwen 与 Llama 系列。在较旧手机上处理一个 3,431 token 批次时，单步耗时从基线 CPU 训练器的 361.0 秒降至 CPU 算子融合后的 251.4 秒，再降至 NPU 路径的 62.4 秒，后一步提升 4.03 倍，相对基线共 5.79 倍。包含 222 个优化步的夜间更新任务在两款手机上约需 7.8 至 8.6 个有效小时完成。在公开的 LaMP-2 基准上，手机训练的适配器与 GPU 训练的适配器相差不超过 1.01 个百分点，比基座模型高 21 至 29 个百分点。在较新手机上测得，同一批次下每 token 高于空闲的能耗为优化后 CPU 训练器的 32.2%。

## Key technical points (EN)

- Problem: first-order LoRA training still needs frozen-weight matrix products in forward, recomputation and input-gradient steps; the phone NPU's inference interface does not provide input gradients.
- Mechanism: all three frozen-weight products run on the NPU; training graph, adapters and optimizer stay on the CPU; input-gradient kernels reuse resident weight tiles and the forward dequantizer.
- Numerics: precision chosen by gradient sensitivity; per-row range guard for FP16 outputs; kernel error reported below the 1e-6 NMSE target.
- Runtime: fused CPU operators, NPU/adapter overlap, resumable execution and thermal pacing for background training.
- Results: 361.0 s to 62.4 s per step on a 3,431-token batch (older phone); 222-step nightly update in about 7.8 to 8.6 h; LaMP-2 accuracy within 1.01 points of GPU-trained adapters.
- Platforms: Snapdragon 8 Elite (Hexagon V79) and 8 Elite Gen 5 (Hexagon V81), 16 GB phones.

## Key technical points (ZH)

- 问题：一阶 LoRA 训练在前向、重计算和输入梯度步骤中仍需冻结权重矩阵乘法；手机 NPU 的推理接口不提供输入梯度。
- 机制：三类冻结权重乘法全部在 NPU 上运行；训练图、适配器和优化器留在 CPU；输入梯度内核复用驻留权重分块与前向反量化器。
- 数值：按梯度敏感度选精度；对 FP16 输出做逐行范围保护；内核误差低于 1e-6 的 NMSE 目标。
- 运行时：融合 CPU 算子、NPU 与适配器计算重叠、可恢复执行与温控节流，支持后台训练。
- 结果：在较旧手机上 3,431 token 批次单步由 361.0 秒降至 62.4 秒；222 步夜间更新约 7.8 至 8.6 小时；LaMP-2 精度与 GPU 训练适配器相差在 1.01 个百分点以内。
- 平台：骁龙 8 Elite（Hexagon V79）和 8 Elite Gen 5（Hexagon V81），16 GB 手机。

## Why it matters / what's new (EN)

The paper notes that the phone NPU's software stack exposes only inference, and that the prior DSP/NPU trainers it cites handled only networks far smaller than billion-parameter LLMs; it reports first-order LoRA training of 2B–4B LLMs with the frozen path on the NPU, with measured step time, energy and adapter quality on two phone generations. All numbers are the authors' own measurements on their two test phones and small models, and a full nightly update takes hours rather than minutes.

## Why it matters / what's new (ZH)

论文指出手机 NPU 的软件栈仅开放推理接口，且其引用的既有 DSP/NPU 训练工作仅针对远小于十亿参数级 LLM 的网络；本文在 NPU 上执行冻结权重路径，对 2B–4B LLM 进行一阶 LoRA 训练，并在两代手机上报告了单步耗时、能耗和适配器质量。所有数字均为作者在其两部测试手机和小模型上的自测结果，且一次完整的夜间更新需要数小时而非数分钟。

## Images

*(No redistributable images for this entry.)*
