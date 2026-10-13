---
id: 2026-10-13_arxiv-oido-speech-recognition-5-dollar-microcontroller
date_published: 2026-10-09
date_found: 2026-10-13
technology: edge-ai
type: academic-paper
title_en: "Oído: Open-Vocabulary Speech Recognition on a $5 Microcontroller without a Neural Accelerator"
title_zh: "Oído：在无神经加速器的 5 美元微控制器上实现开放词汇语音识别"
url: "https://arxiv.org/abs/2610.13447"
source_quality: abstract_only
topics: [ESP32-S3, microcontroller, speech-recognition, Conformer-CTC, int8, PSRAM, TinyML]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

Oído, by Daniel Varela Sánchez and Guillermo Martín-Coello Juárez, is an inference engine that runs open-vocabulary English speech recognition entirely on an ESP32-S3 microcontroller, a chip with no neural accelerator. The system runs a 13M-parameter Conformer-CTC model with int8 weights and int8 activations and attention, using a memory-access schedule designed around the chip's flash and PSRAM bandwidth.

The reported word error rates on LibriSpeech test-clean / test-other are 3.70% / 8.23% for the on-device int8 model (within 0.12 points of full precision), 3.33% / 7.15% with an on-chip 1.3M-parameter language model, 2.99% / 6.67% with a transducer head, and 4.86% / 11.03% for a streaming variant. The authors report 2.3 to 2.8 times fewer errors than the vendor's own recognizer on the same chip, and fewer errors than full-precision Whisper tiny.en and Moonshine tiny run on a laptop, including in noisy and reverberant conditions; a Spanish model shows 34 to 60% fewer errors than multilingual Whisper tiny. An int4 variant fits in 8.3 MB.

The authors are explicit about limits: the on-device model is accurate but not yet real time. It runs at 1.97 times the audio duration on one core, so a 4-second command is transcribed about 8.7 seconds after it ends; streaming final text arrives 4.1 to 11.1 seconds after clips of 3.6 to 10.6 seconds. A two-core schedule produced wrong results on silicon and is disabled. Code and models are released.

## Summary (ZH)

Oído 由 Daniel Varela Sánchez 与 Guillermo Martín-Coello Juárez 提出，是一个完全在 ESP32-S3 微控制器（不带神经加速器）上运行开放词汇英语语音识别的推理引擎。系统运行一个 1300 万参数的 Conformer-CTC 模型，权重、激活与注意力均为 int8，并围绕芯片 flash 与 PSRAM 的带宽设计了内存访问调度。

在 LibriSpeech test-clean / test-other 上报告的词错误率为：设备端 int8 模型 3.70% / 8.23%（与全精度相差不超过 0.12 个百分点）；加上片上 130 万参数语言模型为 3.33% / 7.15%；使用 transducer 头为 2.99% / 6.67%；流式版本为 4.86% / 11.03%。作者报告其错误数比同一芯片上厂商自带识别器少 2.3 至 2.8 倍，也少于在笔记本上以全精度运行的 Whisper tiny.en 与 Moonshine tiny，包括在噪声和混响条件下；西班牙语模型相比多语言 Whisper tiny 错误减少 34% 至 60%。int4 变体可放入 8.3 MB。

作者明确说明了局限：设备端模型准确但尚未达到实时。单核上的运行速度为音频时长的 1.97 倍，因此一条 4 秒的命令在结束后约 8.7 秒才完成转写；流式模式下，对于 3.6 至 10.6 秒的片段，最终文本在 4.1 至 11.1 秒后出现。双核调度在硅片上产生了错误结果，已被禁用。代码与模型已开源。

## Key technical points (EN)

- Target: ESP32-S3 (about $5, no neural accelerator); 13M-parameter Conformer-CTC, int8 weights, activations and attention; memory schedule built around flash and PSRAM bandwidth.
- WER (test-clean / test-other): 3.70 / 8.23 on-device int8 (within 0.12 of full precision); 3.33 / 7.15 with 1.3M-parameter on-chip LM; 2.99 / 6.67 transducer head; 4.86 / 11.03 streaming.
- 2.3 to 2.8 times fewer errors than the vendor recognizer on the same chip; fewer errors than Whisper tiny.en and Moonshine tiny (full precision, laptop).
- Spanish model: 34 to 60% fewer errors than multilingual Whisper tiny; int4 variant fits in 8.3 MB.
- Speed: 1.97 times audio duration on one core (not real time); streaming final text 4.1 to 11.1 s after clips of 3.6 to 10.6 s.
- Two-core schedule gave wrong results on silicon and is disabled. Code and models released.

## Key technical points (ZH)

- 目标平台：ESP32-S3（约 5 美元，无神经加速器）；1300 万参数 Conformer-CTC，权重、激活与注意力均为 int8；内存调度围绕 flash 与 PSRAM 带宽设计。
- 词错误率（test-clean / test-other）：设备端 int8 为 3.70 / 8.23（与全精度相差不超过 0.12）；加 130 万参数片上语言模型为 3.33 / 7.15；transducer 头为 2.99 / 6.67；流式为 4.86 / 11.03。
- 错误数比同一芯片上的厂商识别器少 2.3 至 2.8 倍；少于 Whisper tiny.en 与 Moonshine tiny（全精度，笔记本）。
- 西班牙语模型：相比多语言 Whisper tiny 错误减少 34% 至 60%；int4 变体可放入 8.3 MB。
- 速度：单核为音频时长的 1.97 倍（非实时）；对 3.6 至 10.6 秒的片段，流式最终文本在 4.1 至 11.1 秒后出现。
- 双核调度在硅片上产生错误结果，已禁用。代码与模型已开源。

## Why it matters / what's new (EN)

The paper's stated point is that speech recognition on low-cost microcontrollers is in practice limited to keyword spotting or fixed command lists; it reports open-vocabulary recognition on such a chip, with accuracy against named baselines and latency figures showing it is not yet real time. The authors' own caveats, including the disabled two-core schedule, are part of the result. This summary is based on the arXiv abstract page only (source_quality: abstract_only); the full paper was not read.

## Why it matters / what's new (ZH)

论文指出，低成本微控制器上的语音识别实际上仅限于关键词检测或固定命令列表；本文在此类芯片上实现了开放词汇识别，给出了与具名基线的精度对比，以及表明其尚未实时的延迟数据。作者自己指出的局限（包括被禁用的双核调度）也是结果的一部分。本摘要仅基于 arXiv 摘要页（source_quality: abstract_only），未阅读全文。

## Images

*(No redistributable images for this entry — abstract page only.)*
