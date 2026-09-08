---
id: 2026-09-08_google-gemma-4-qat-mobile-under-1gb
date_published: 2026-06-05
date_found: 2026-09-08
type: product
technology: edge-ai
title_en: "Gemma 4 QAT models: quantization-aware training brings the E2B text model under 1GB for mobile"
title_zh: "Gemma 4 QAT 模型：量化感知训练将 E2B 纯文本模型压缩至移动端 1GB 以下"
url: "https://blog.google/innovation-and-ai/technology/developers-tools/quantization-aware-training-gemma-4/"
source_quality: full
topics: [Gemma-4, QAT, quantization-aware-training, on-device-LLM, LiteRT-LM, mobile-deployment]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

Google published Gemma 4 QAT models — quantization-aware training (QAT) applied across the Gemma 4 family: the article says its Q4_0 QAT recipe covers "all the models", names E2B and E4B as the edge models that receive a mobile-specialised quantization schema, and names a 12B model and a 26B mixture-of-experts model as the rest of the family. The article's stated distinction from standard post-training quantization (PTQ) is that "QAT integrates the quantization process directly into training," which it says yields "even higher overall quality compared to standard PTQ baselines" — a comparison the article makes but does not quantify with a specific accuracy delta in the material read for this entry.

The concrete figure given is for the smallest model: "the Gemma 4 E2B text-only model (without Per-Layer Embeddings) requires less than 1 GB of memory." For mobile deployment specifically, the article describes a custom quantization schema using static activations, channel-wise quantization, targeted 2-bit quantization, and embedding/KV-cache optimization. The models are stated as available on Hugging Face in Q4_0 and mobile-specific formats, compatible with multiple inference frameworks (llama.cpp, vLLM, Ollama, LM Studio among those named), and pitched for running "locally on everyday edge devices and consumer GPUs."

## Summary (ZH)

Google 发布了 Gemma 4 QAT 模型——将量化感知训练（QAT）应用于 Gemma 4 全系列：文章称其 Q4_0 的 QAT 方案覆盖「所有模型」，点名 E2B 与 E4B 为采用移动端专用量化方案的端侧模型，并提及 12B 模型与 26B 混合专家（MoE）模型作为系列的其余成员。文章给出的与标准训练后量化（PTQ）的区别在于：「QAT 将量化过程直接融入训练本身」，并称这样做「相较标准 PTQ 基线能获得更高的整体质量」——文章提出了这一对比，但在本条目所读取的材料中并未给出具体的精度差值数字。

文章给出的具体数字是关于最小模型的：「Gemma 4 E2B 纯文本模型（不含逐层嵌入 Per-Layer Embeddings）所需内存低于 1GB」。针对移动端部署，文章描述了一套定制量化方案，包括静态激活值量化、按通道量化、目标 2-bit 量化，以及嵌入层/KV 缓存优化。文中称这些模型已在 Hugging Face 上以 Q4_0 及移动专用格式发布，兼容多种推理框架（文中点名的包括 llama.cpp、vLLM、Ollama、LM Studio），并将其定位为可「在日常边缘设备与消费级 GPU 上本地运行」。

## Key technical points (EN)

- **What**: QAT applied across the Gemma 4 family ("all the models" per the article); E2B and E4B are the edge models with the mobile-specialised schema; a 12B model and a 26B MoE model are named as family members.
- **QAT vs. PTQ**: the article states QAT is integrated into training itself rather than applied after, and claims higher quality than standard PTQ baselines — stated as the article's own claim, no specific accuracy-delta number given in the material read.
- **Headline memory figure**: Gemma 4 E2B text-only (without Per-Layer Embeddings) requires less than 1 GB of memory.
- **Mobile-specific quantization schema**: static activations, channel-wise quantization, targeted 2-bit quantization, embedding and KV-cache optimization.
- **Availability**: Hugging Face, in Q4_0 and mobile-specific formats; stated compatibility with llama.cpp, vLLM, Ollama, LM Studio, and other named frameworks.
- **Deployment framing**: pitched for running locally on "everyday edge devices and consumer GPUs."
- **Not given in the material read**: tokens/s or latency figures on any named device, or the accuracy-delta number behind the QAT-vs-PTQ quality claim.

## Key technical points (ZH)

- **内容**：QAT 应用于 Gemma 4 全系列（文章称覆盖「所有模型」）；E2B 与 E4B 为采用移动端专用量化方案的端侧模型；12B 模型与 26B MoE 模型作为系列成员被提及。
- **QAT 与 PTQ 的区别**：文章称 QAT 将量化过程融入训练本身，而非训练后再量化，并称相较标准 PTQ 基线质量更高——此为文章自身表述，本条目所读材料中未给出具体的精度差值数字。
- **核心内存数字**：Gemma 4 E2B 纯文本模型（不含逐层嵌入）所需内存低于 1GB。
- **移动端专用量化方案**：静态激活值量化、按通道量化、目标 2-bit 量化，以及嵌入层/KV 缓存优化。
- **可获取渠道**：Hugging Face，提供 Q4_0 及移动专用格式；文中称兼容 llama.cpp、vLLM、Ollama、LM Studio 等框架。
- **部署定位**：面向「日常边缘设备与消费级 GPU」上的本地运行。
- **本条目所读材料未给出的信息**：任何指定设备上的 tokens/s 或延迟数字，以及 QAT 相较 PTQ 质量提升说法背后的具体精度差值。

## Why it matters / what's new (EN)

This KB's existing Gemma coverage is at the 3n generation (`2026-08-31_litert-cross-vendor-npu-backend-matrix`, Gemma 3n E2B on a Dimensity 9500 via LiteRT/NeuroPilot). This entry covers a different model generation (Gemma 4) and a different axis of the deployment story — the training-time quantization method itself, rather than the runtime/NPU-backend integration that the earlier entry covered. The sub-1GB E2B figure is a concrete, quotable memory number of the kind this domain otherwise struggles to get from flagship on-device announcements (Microsoft's Aion and Apple's AFM 3, both already in this KB, disclosed no comparable footprint figure at launch); it is a first-party number, not independently verified, and no tokens/s or latency figure accompanies it in the material read.

## Why it matters / what's new (ZH)

本知识库此前对 Gemma 的收录停留在 3n 这一代（`2026-08-31_litert-cross-vendor-npu-backend-matrix`，即 Gemma 3n E2B 通过 LiteRT/NeuroPilot 在 Dimensity 9500 上运行）。本条目覆盖的是不同的模型代际（Gemma 4）以及部署叙事的不同维度——训练阶段的量化方法本身，而非此前条目所涉及的运行时/NPU 后端适配。低于 1GB 的 E2B 内存数字是一个具体、可引用的内存数字，而本领域的旗舰端侧发布往往缺乏这类数字（本知识库已收录的微软 Aion 与苹果 AFM 3 发布时均未披露可比的内存占用数字）；不过这仍是厂商自报数字，并未经独立验证，本条目所读材料中也未附带任何 tokens/s 或延迟数字。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
