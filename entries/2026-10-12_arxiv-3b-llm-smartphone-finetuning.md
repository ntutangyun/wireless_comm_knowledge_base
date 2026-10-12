---
id: 2026-10-12_arxiv-3b-llm-smartphone-finetuning
date_published: 2026-10-05
date_found: 2026-10-12
type: academic-paper
technology: edge-ai
title_en: "Fine-Tuning a 3B-Parameter LLM on a Smartphone: Characterizing Sustained Training"
title_zh: "在智能手机上微调一个 30 亿参数的 LLM：持续训练特征刻画"
url: "https://arxiv.org/abs/2610.06325"
source_quality: full
topics: [on-device-training, LoRA, quantization, mobile-GPU, thermal-throttling, personalization]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

Researchers at Saarland University present what they describe as the first systematic characterization of a complete, sustained fine-tuning run of a multi-billion-parameter LLM on a mobile device, rather than individual training steps measured in isolation (the scope of prior work). Their motivation is personalization without the user's history ever leaving the phone: deployed on-device models are trained once on public data and shipped identically to every user, so adapting to a user's own writing style currently relies only on what prompt retrieval can place in context at request time.

They fine-tune a 3B-parameter model at 4-bit precision on an iPhone 17 Pro, using LoRA (so only a small adapter is trained while the frozen base model stays in place), quantization, and gradient checkpointing to fit training inside phone memory. Measurements span GPU-kernel-level per-step timing, memory, sustained thermal behavior across a complete run, and total energy, and are complemented by an audit of the quantized backward pass across ten other on-device runtimes and an evaluation of the resulting adapters on a personalization benchmark.

The headline results: an iPhone 17 Pro can fine-tune the 3B model to personalize for a typical user within a single battery charge, and the resulting adapters improve personalization as much as adapters trained on a server. However, sustained training throttles the phone to roughly half its initial throughput, and none of the pausing or burst schedules the authors tested recovers it. Nearly all of each training step is spent inside the frozen base model, mostly in the backward pass — which nine of the ten other runtimes they audited do not accelerate at all. They found that Apple's MLX framework had a backward-pass kernel for this operation that was never dispatched and was, independently, incorrect; their fix, now merged upstream, trains an adapter 1.47x faster on a third less energy. The authors conclude on-device fine-tuning of billion-parameter LLMs is feasible on current phones, but that making it efficient will require runtimes and operating systems to treat training as a first-class workload rather than an afterthought of inference-oriented engineering.

## Summary (ZH)

萨尔兰大学的研究者展示了他们所称的首次对移动设备上多亿参数 LLM 进行完整、持续微调训练过程的系统性刻画，而非像此前工作那样只孤立测量单个训练步骤。他们的动机是在用户历史数据不离开手机的前提下实现个性化：目前部署在设备端的模型只在公开数据上训练一次，并以相同权重发给每位用户，因此对用户自身写作风格的适配目前只能依赖提示检索在请求时放入上下文的内容。

他们在 iPhone 17 Pro 上以 4 比特精度对一个 30 亿参数模型进行微调，使用 LoRA（只训练一个小型适配器，冻结的基础模型保持不变）、量化和梯度检查点技术，使训练能够容纳在手机内存中。测量范围涵盖 GPU 内核级的单步耗时、内存占用、完整运行过程中的持续热行为以及总能耗，并辅以对另外十种设备端运行时中量化反向传播实现的审查，以及对所得适配器在个性化基准上的评估。

主要结果是：iPhone 17 Pro 能够在一次电池充电周期内，为典型用户完成该 30 亿参数模型的个性化微调，所得适配器带来的个性化提升程度与服务器端训练的适配器相当。然而，持续训练会使手机降频至初始吞吐量的约一半，作者测试的各种暂停或突发调度方案均未能恢复该吞吐量。每个训练步骤几乎全部耗时都花在冻结的基础模型上，其中大部分在反向传播——他们审查的另外十个运行时中有九个完全没有对该操作做加速。他们发现 Apple 的 MLX 框架中存在一个针对该操作的反向传播内核，但从未被实际调用，且该内核本身也存在错误；他们提交并已合并进上游的修复，使适配器训练速度提升 1.47 倍，同时能耗降低三分之一。作者的结论是：在当前手机上对十亿参数级 LLM 进行设备端微调是可行的，但要让其高效运行，需要运行时和操作系统将训练视为一等工作负载，而不是面向推理工程的附带产物。

## Key technical points (EN)

- First systematic characterization (the authors' claim) of a complete sustained fine-tuning run — not just isolated training steps — of a multi-billion-parameter LLM on a phone.
- Setup: 3B-parameter model, 4-bit precision, LoRA adapter training, quantization, and gradient checkpointing, on an iPhone 17 Pro (GPU with matrix units).
- An adapter personalizing to a typical user's history completes within one battery charge (Fig. 1: a 405-record adapter took ~2.55 h with the unrepaired kernel and ~1.74 h with the repaired kernel, unplugged from 85% charge); resulting adapters match server-trained adapters' personalization gains.
- Sustained training throttles phone throughput to about half its initial rate within minutes; no tested pause/burst scheduling recovers it.
- Nearly all per-step time is spent in the frozen base model's backward pass; 9 of 10 audited on-device runtimes provide no acceleration for this operation.
- Found and fixed an undispatched, incorrect backward-pass kernel in Apple's MLX; the fix (merged upstream) gives 1.47x faster adapter training at one-third less energy.

## Key technical points (ZH)

- 作者称这是首次对手机上多亿参数 LLM 完整、持续微调训练过程的系统性刻画，而非仅测量孤立的训练步骤。
- 实验设置：30 亿参数模型，4 比特精度，LoRA 适配器训练，配合量化与梯度检查点，运行于 iPhone 17 Pro（含矩阵运算单元的 GPU）。
- 针对典型用户历史的个性化适配器训练可在一次电池充电周期内完成（图 1：405 条记录的适配器在未修复内核下约 2.55 小时，修复后约 1.74 小时，均从 85% 电量开始、未接电源）；所得适配器的个性化提升效果与服务器端训练的适配器相当。
- 持续训练会在数分钟内将手机吞吐量降频至初始速率的约一半；作者测试的各种暂停/突发调度方案均无法恢复该吞吐量。
- 每个训练步骤几乎所有耗时都花在冻结基础模型的反向传播上；被审查的十个设备端运行时中有九个对该操作完全没有加速。
- 发现并修复了 Apple MLX 框架中一个从未被调用、且本身存在错误的反向传播内核；该修复（已合并进上游）使适配器训练速度提升 1.47 倍，能耗降低三分之一。

## Why it matters / what's new (EN)

This paper's contribution is explicitly about sustained on-device training, a much less measured regime than inference-time behavior. The concrete, reproducible finding that a shipped-framework kernel (MLX) was both undispatched and incorrect — and that fixing it yields a real 1.47x speed and one-third energy improvement — is the kind of runtime-level detail that is independently checkable and has immediate relevance to anyone building on-device personalization or federated/local fine-tuning pipelines.

## Why it matters / what's new (ZH)

本文的贡献明确聚焦于持续性的设备端训练，相较推理期行为，这是一个此前测量得少得多的场景。其中具体且可复现的发现——即某个已发布框架（MLX）中的一个内核从未被调用、且本身存在错误，修复后带来 1.47 倍的真实速度提升和三分之一的能耗降低——属于可独立验证的运行时级细节，对任何构建设备端个性化或联邦/本地微调流程的人都有直接意义。
