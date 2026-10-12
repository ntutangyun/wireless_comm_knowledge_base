---
id: 2026-10-12_arxiv-voice-agent-speculative-tool-execution
date_published: 2026-10-06
date_found: 2026-10-12
type: academic-paper
technology: edge-ai
title_en: "Hiding Tool Latency in On-Device Cascaded Voice Agent through Speculative Execution"
title_zh: "通过推测执行隐藏设备端级联式语音智能体的工具调用延迟"
url: "https://arxiv.org/abs/2610.07641"
source_quality: abstract_only
topics: [voice-agent, speculative-execution, tool-calling, ASR, on-device]
topic_primary: home-ai-assistant
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

Authors Kyudan Jung, Hyunsin Park, Yoonhyung Lee, Jinhwan Park, Jinhyeok Yang, KiHyun Nam, Jaegul Choo and Jinkyu Lee address response-latency in cascaded on-device voice assistants, where a tool call (e.g. adding calendar events or searching the web) traditionally only begins after the full utterance is transcribed, the LLM decides to call the tool, and the tool executes — a strictly sequential chain. Their system predicts tool requests from partial automatic-speech-recognition (ASR) hypotheses — i.e., while the user is still speaking — and begins executing the predicted tool call speculatively, before the utterance finishes.

A dedicated Predictor module anticipates likely tool calls during speech recognition, triggers speculative execution, and caches the result so it can be injected into the language model's prompt once the full utterance is available. To handle cases where the user corrects themselves mid-utterance, the system applies rule-based validation of the speculative prediction, and it preserves the underlying LLM's ability to issue a direct (non-speculative) tool call as a fallback when the prediction is wrong or absent, which upper-bounds worst-case latency by the serial baseline. Evaluated on a fully implemented Android voice assistant, the approach reduced median time-to-first-audio from 5.79 seconds to 4.60 seconds and reduced the standard deviation of response time from 3.49 to 2.81 seconds, i.e., both faster and more predictable responses.

## Summary (ZH)

作者 Kyudan Jung、Hyunsin Park、Yoonhyung Lee、Jinhwan Park、Jinhyeok Yang、KiHyun Nam、Jaegul Choo 和 Jinkyu Lee 研究了设备端级联式语音助手中的响应延迟问题：传统流程中，工具调用（例如添加日历事件或网络搜索）只会在整句转写完成、LLM 决定调用该工具、随后工具实际执行之后才开始——是一条严格串行的链路。他们的系统能够根据自动语音识别（ASR）的部分识别结果——即用户仍在说话的过程中——预测用户将发出的工具请求，并在整句话说完之前就开始推测性地执行该预测的工具调用。

一个专门的 Predictor 模块在语音识别过程中预判可能的工具调用，触发推测执行，并将结果缓存起来，待整句转写完成后再注入语言模型的提示中。为处理用户在说话中途自我更正的情况，系统对推测预测结果进行基于规则的校验，并保留底层 LLM 在预测错误或缺失时直接发起（非推测性）工具调用作为回退机制的能力，从而保证最坏情况下延迟不超过串行基线。在一个完整实现的 Android 语音助手上的评估显示，该方法将首个音频输出时间（time-to-first-audio）中位数从 5.79 秒降低到 4.60 秒，响应时间的标准差从 3.49 秒降低到 2.81 秒，即响应更快且更可预测。

## Key technical points (EN)

- Problem: cascaded on-device voice agents traditionally only start tool execution after full-utterance transcription + LLM tool-call decision, a sequential latency chain.
- Mechanism: a Predictor module anticipates tool calls from partial ASR hypotheses mid-utterance and triggers speculative execution, caching results for later prompt injection.
- Safeguards: rule-based validation handles user self-correction mid-utterance; the LLM retains a direct, non-speculative tool-call path as fallback, which upper-bounds worst-case latency by the serial baseline.
- Evaluation: fully implemented Android voice assistant; median time-to-first-audio 5.79s -> 4.60s; standard deviation 3.49 -> 2.81 (faster and more predictable).

## Key technical points (ZH)

- 问题：设备端级联式语音智能体传统上只在整句转写完成并由 LLM 做出工具调用决策后才开始执行工具，形成一条串行延迟链路。
- 机制：Predictor 模块在说话过程中根据 ASR 部分识别结果预判工具调用，触发推测执行，并缓存结果供后续注入提示中使用。
- 保障机制：基于规则的校验处理用户说话中途的自我更正；LLM 保留直接、非推测性的工具调用路径作为回退，从而保证最坏情况下延迟不超过串行基线。
- 评估：在一个完整实现的 Android 语音助手上进行；首个音频输出时间（time-to-first-audio）中位数由 5.79 秒降至 4.60 秒，标准差由 3.49 降至 2.81（更快且更可预测）。

## Why it matters / what's new (EN)

This paper optimizes the internal latency structure of an on-device cascaded voice pipeline, using speculative tool execution driven by partial ASR, with live measurements on an Android assistant.

## Why it matters / what's new (ZH)

本文优化设备端级联语音流水线的内部延迟结构，利用基于部分 ASR 结果的推测式工具执行，并在 Android 助手上进行了实测。
