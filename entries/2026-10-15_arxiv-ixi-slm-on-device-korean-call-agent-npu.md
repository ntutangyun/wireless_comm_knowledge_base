---
id: 2026-10-15_arxiv-ixi-slm-on-device-korean-call-agent-npu
date_published: 2026-10-14
date_found: 2026-10-15
technology: edge-ai
type: academic-paper
title_en: "ixi-sLM: a 1.2B Korean on-device language model for AI call summary and answering, run on Qualcomm and Apple NPUs"
title_zh: "ixi-sLM：用于 AI 通话摘要与应答的 12 亿参数韩语端侧语言模型，运行于高通与苹果 NPU"
url: "https://arxiv.org/abs/2610.19382"
source_quality: abstract_only
topics: [on-device-LLM, NPU, INT4, mixed-precision, vocabulary-trimming, call-agent, production-deployment]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

ixi-sLM is a 1.2B-parameter Korean small language model brought to mobile NPUs for a production AI call agent. The authors list the constraints of shipping such a service on-device: a memory budget of about 1 GiB, in-call latency and thermal limits, static-integer NPU execution, Korean speech-to-text input that is far from sLM pretraining, and cloud-level quality expectations.

Their approach is called on-device modeling. Domain-adaptive modeling trims the vocabulary by call frequency to shrink the embedding table and LM head, which take nearly half of the model under INT4 transformer weights, and refits the tokenizer to call speech (18% fewer tokens on call traffic). Task-aware quantization calibrates on real calls and assigns per-module mixed precision by activation sensitivity.

One domain-adapted model runs two production services, AI Call Summary and AI Call Answering, at 94% of a state-of-the-art cloud LLM's task-weighted quality, with only a marginal drop in overall score after on-device modeling. The deployed model is 803 MiB (28% of FP16) and uses 23% of the CPU's per-call energy. The authors state that the same recipe deploys across Qualcomm and Apple NPUs and serves several million ixi-O subscribers in production.

## Summary (ZH)

ixi-sLM 是一个 12 亿参数的韩语小语言模型，被部署到移动端 NPU 上，用于生产环境的 AI 通话代理。作者列出了在端侧交付这类服务的约束：约 1 GiB 的内存预算、通话中的延迟与热限制、静态整数的 NPU 执行、与小模型预训练相距甚远的韩语语音转文字输入，以及对云端水准质量的期望。

其方法称为端侧建模。领域自适应建模按通话词频裁剪词表，以缩小在 INT4 Transformer 权重下占模型近一半的嵌入表与 LM 头，并针对通话语音重新适配分词器（通话文本的 token 数减少 18%）。任务感知量化在真实通话上校准，并按激活敏感度逐模块分配混合精度。

同一个领域自适应模型运行两项生产服务，AI 通话摘要与 AI 通话应答，任务加权质量为先进云端 LLM 的 94%，端侧建模后总分仅有轻微下降。部署模型为 803 MiB（FP16 的 28%），单次通话的能耗为 CPU 的 23%。作者表示同一方案可部署于高通与苹果 NPU，并在生产中服务数百万 ixi-O 用户。

## Key technical points (EN)

- Model: 1.2B Korean sLM; constraints include ~1 GiB memory, thermal limits, static-integer NPU execution.
- Vocabulary trimmed by call frequency (embedding and LM head take nearly half the model under INT4 weights); tokenizer refit gives 18% fewer tokens on call traffic.
- Task-aware quantization: calibration on real calls, per-module mixed precision by activation sensitivity.
- Quality: 94% of a state-of-the-art cloud LLM's task-weighted quality on the two production services.
- Footprint: 803 MiB (28% of FP16); 23% of the CPU's per-call energy.
- Reported to run on Qualcomm and Apple NPUs and serve several million subscribers.

## Key technical points (ZH)

- 模型：12 亿参数韩语小模型；约束包括约 1 GiB 内存、热限制、静态整数 NPU 执行。
- 按通话词频裁剪词表（INT4 权重下嵌入表与 LM 头占模型近一半）；重新适配分词器后通话文本 token 数减少 18%。
- 任务感知量化：在真实通话上校准，按激活敏感度逐模块混合精度。
- 质量：两项生产服务的任务加权质量为先进云端 LLM 的 94%。
- 体积：803 MiB（FP16 的 28%）；单次通话能耗为 CPU 的 23%。
- 据称可在高通与苹果 NPU 上运行，并服务数百万订阅用户。

## Why it matters / what's new (EN)

The paper describes an on-device language model that is reported to be in production for several million subscribers, with a stated memory, quality and energy trade-off. Quality (94% of a cloud LLM) and subscriber figures are the authors' own statements; this record is based on the abstract, so details of the evaluation protocol are not checked here.

## Why it matters / what's new (ZH)

论文描述了一个据称已在生产中服务数百万订阅用户的端侧语言模型，并给出了内存、质量与能耗的取舍。质量（云端 LLM 的 94%）与用户规模均为作者自述；本条目基于摘要，评测协议细节未在此核实。

## Images

*(No redistributable images for this entry.)*
