---
id: 2026-11-05_arxiv-mobilespec-forward-only-specialist-training-on-iphone
date_published: 2026-11-03
date_found: 2026-11-05
technology: edge-ai
type: academic-paper
title_en: "MobileSpec: Training Specialist LLMs on a Phone with Forward-Only Block-Spectral Updates"
title_zh: "MobileSpec：在手机上用仅前向的块谱坐标更新训练专用大模型"
url: "https://arxiv.org/abs/2611.04797"
source_quality: full
topics: [on-device-training, forward-only-optimization, evolution-strategies, INT4, phone-use-agent, iPhone-16-Pro, personalization]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

The paper presents MobileSpec, a system that adapts a shared on-device LLM into small per-user or per-task "specialists" using only forward passes, because backpropagation is too memory-hungry for a phone and users rarely supply labelled data. Training signals come from automatically checked task outcomes, as in reinforcement learning with verifiable rewards (RLVR). The core algorithm, FuRA-S, trains only the block-spectral coordinates of pretrained weights, meaning the singular values of their column blocks. The authors argue that rescaling these blocks independently rotates the singular vectors of each weight matrix while largely preserving its singular values, which resembles the weight changes RLVR produces and is what makes random-perturbation (forward-only) training efficient. Because the update can be rewritten as a transformation of the layer input, it also adapts INT4 models without modifying their weights.

Specialists are 1-5 MB and update 0.015-0.05% of the parameters. On the GUI-only tasks of the MobileWorld benchmark (real Android apps), a 2B phone-use agent (MAI-UI-2B) goes from 6-23% to 89-100% success on three of five trained tasks, for example 6.2% to 98.4% on RequestCarpooling and 9.4% to 100.0% on CheckEventTime, while MastodonFollow reaches 64.1% and MastodonPostPoll 68.8%. On an iPhone 16 Pro (8 GB) the system trains a per-user specialist on a GPTQ-INT4 Llama-3.1-8B-Instruct: 20 iterations over 10.4 hours reduce validation loss from 0.85 to 0.19, and the specialist answers 8 of 15 held-out queries correctly against 5 for the generalist.

## Summary (ZH)

论文提出 MobileSpec：只用前向传播，把共享的端侧大模型适配成小型的"专用模型"（按用户或按任务），因为反向传播在手机上内存开销过大，且用户很少提供标注数据。训练信号来自可自动检验的任务结果，即可验证奖励的强化学习（RLVR）。核心算法 FuRA-S 只训练预训练权重的块谱坐标，即各列块的奇异值。作者论证：对这些块独立缩放会旋转每个权重矩阵的奇异向量，同时基本保持其奇异值，这与 RLVR 产生的权重变化相似，也使基于随机扰动的前向训练变得高效。由于该更新可改写为对层输入的变换，它还能在不修改权重的前提下适配 INT4 模型。

专用模型仅 1-5 MB，更新 0.015-0.05% 的参数。在 MobileWorld 基准（真实 Android 应用）的纯 GUI 任务上，2B 手机操作智能体（MAI-UI-2B）在五项训练任务中的三项由 6-23% 提升到 89-100%，例如 RequestCarpooling 从 6.2% 到 98.4%、CheckEventTime 从 9.4% 到 100.0%，MastodonFollow 达 64.1%、MastodonPostPoll 达 68.8%。在 iPhone 16 Pro（8 GB）上，系统基于 GPTQ-INT4 的 Llama-3.1-8B-Instruct 训练单用户专用模型：10.4 小时 20 次迭代使验证损失由 0.85 降至 0.19，专用模型在 15 条留出查询中答对 8 条，通用模型为 5 条。

## Key technical points (EN)

- **Workflow**: task and fitness definition, forward-only training by evolution strategies, selection, then serving the specialist over the INT4 generalist.
- **Memory on phone**: the INT4 model is 5.5 GB against 5.3 GB available to an app, so decoder layers are streamed from flash; training uses 2.1 GB resident memory and peaks at 3.5 GB. Forward computation is 97% of training time and streaming costs 14 seconds per iteration.
- **Algorithm results**: FuRA-S is reported as competitive with full-parameter ES on RLVR benchmarks (Countdown, MATH) and better than ES over LoRA adapters and quantized ES on INT4 models.
- **Stated scope**: phone-use results use five tasks on which the base agent succeeded in under a quarter of episodes; the iPhone run covers one LaMP user and a small 15-query held-out set.

## Key technical points (ZH)

- **流程**：任务与适应度定义、基于进化策略的仅前向训练、选择，然后在 INT4 通用模型之上提供专用模型。
- **手机内存**：INT4 模型 5.5 GB，而应用可用内存 5.3 GB，因此从闪存流式加载解码层；训练常驻内存 2.1 GB，峰值 3.5 GB。前向计算占训练时间 97%，流式加载每次迭代 14 秒。
- **算法结果**：据报告 FuRA-S 在 RLVR 基准（Countdown、MATH）上与全参数 ES 相当，并优于 LoRA 适配器上的 ES 以及 INT4 模型上的量化 ES。
- **论文所述范围**：手机操作结果基于基础智能体成功率低于四分之一的五项任务；iPhone 实验仅涉及一位 LaMP 用户及 15 条规模较小的留出查询。

## Why it matters / what's new (EN)

The entry's value is a reported end-to-end on-device training result: an 8B INT4 model adapted on a phone within app memory limits, with flash streaming making the model fit. Most on-device LLM work in this KB is inference-side; here the adaptation step also runs locally, so user data and the resulting specialist stay on the device. Caveats (this entry's reading): small evaluation sets, 10.4 hours for a 20-iteration run, and results on a v1 preprint without independent replication.

## Why it matters / what's new (ZH)

本条目的价值在于一项端到端的端侧训练结果：8B 的 INT4 模型在应用内存限制内于手机上完成适配，并借助闪存流式加载才得以装下。本知识库中多数端侧大模型工作偏推理侧，而这里的适配步骤同样在本地运行，因此用户数据与所得专用模型都留在设备上。局限（本条目的解读）：评测集较小，20 次迭代耗时 10.4 小时，且为未经独立复现的 v1 预印本。

## Images

None.
