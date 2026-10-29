---
id: 2026-10-29_llama-cpp-v0-8-0-lfm3-realtime-audio-ggml-hexagon-kleidiai
date_published: 2026-10-28
date_found: 2026-10-29
technology: edge-ai
type: product
title_en: "llama.cpp v0.8.0: LFM3 on-device model family, realtime audio server endpoints, and ggml 0.28 backend work (Hexagon HTP, KleidiAI SVE)"
title_zh: "llama.cpp v0.8.0：LFM3 端侧模型系列、实时音频服务端点，以及 ggml 0.28 后端更新（Hexagon HTP、KleidiAI SVE）"
url: "https://github.com/ggml-org/llama.cpp/releases/tag/v0.8.0"
source_quality: full
topics: [llama.cpp, ggml, LFM3, realtime-audio, Hexagon-HTP, KleidiAI, MoE-expert-cache, speculative-decoding]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency, edge-ai-silicon]
novelty_score: 2
---

## Summary (EN)

llama.cpp v0.8.0 was published on 2026-10-28, the release after v0.7.0 (2026-10-15, already in this KB for its host-memory MoE expert cache). The release notes headline the LiquidAI LFM3 family (LFM3-1.7B text, LFM3-VL-2B vision, LFM3-Audio-2B and LFM3-Omni-2B for ASR, TTS and voice chat from a single model) together with an experimental streaming-audio API in the multimodal library (mtmd_audio_stream) and two new server endpoints: /v1/realtime, implementing the OpenAI realtime protocol for conversation and transcription, and POST /tts for text-to-speech models.

Several runtime changes are directly about constrained hardware. Host-resident MoE experts now use a 50/50 SLRU cache instead of a plain LRU (the follow-up to the v0.7.0 expert cache), sparse-attention selection was reworked onto a fused masking op, speculative decoding gained a persistent dynamic n-gram cache and probabilistic DFlash2 drafts, and ggml was bumped to v0.28.0 with CUDA chunked graph launches, SYCL graph replay, OpenCL Q2_K/Q3_K kernels, a Hexagon HTP rework and KleidiAI SVE kernels. New architectures include DeepSeek V4.1 Flash, SenseNova U1, Muse Spark Open and several small decision/embedding models. The release notes give no benchmark numbers for the Hexagon, KleidiAI or SLRU changes, so any speed claim for them is unverified here.

## Summary (ZH)

llama.cpp v0.8.0 于 2026-10-28 发布，是继 v0.7.0（2026-10-15，其主机内存 MoE 专家缓存已收录于本知识库）之后的版本。发布说明的重点是 LiquidAI 的 LFM3 系列（LFM3-1.7B 文本、LFM3-VL-2B 视觉，以及可由单一模型完成 ASR、TTS 和语音对话的 LFM3-Audio-2B 与 LFM3-Omni-2B），同时在多模态库中新增实验性的流式音频 API（mtmd_audio_stream），并为服务端新增两个端点：实现 OpenAI 实时协议、用于对话与转写的 /v1/realtime，以及用于文本转语音模型的 POST /tts。

若干运行时改动直接面向受限硬件。主机内存中的 MoE 专家现在使用 50/50 SLRU 缓存，取代普通 LRU（承接 v0.7.0 的专家缓存）；稀疏注意力选择改为基于融合掩码算子；推测解码新增可持久化的动态 n-gram 缓存和概率式 DFlash2 草稿；ggml 升级到 v0.28.0，带来 CUDA 分块图启动、SYCL 图重放、OpenCL Q2_K/Q3_K 内核、Hexagon HTP 重构以及 KleidiAI SVE 内核。新增架构包括 DeepSeek V4.1 Flash、SenseNova U1、Muse Spark Open 以及若干小型决策/嵌入模型。发布说明未给出 Hexagon、KleidiAI 或 SLRU 改动的基准数字，因此此处无法验证其速度提升。

## Key technical points (EN)

- **Voice on a local server**: /v1/realtime (OpenAI realtime protocol) and /tts make llama-server usable as a local voice-assistant backend; LFM3-Audio/Omni (2B) put ASR, TTS and chat in one small model.
- **Memory-constrained MoE**: 50/50 SLRU replaces LRU for host-resident experts; relevant to running large MoEs on small-VRAM devices.
- **Backends**: ggml 0.28.0 with a Hexagon HTP rework (Qualcomm NPU/DSP path), KleidiAI SVE kernels (Arm servers/clients), SYCL, OpenCL and CUDA changes.
- **Speculative decoding**: persistent n-gram cache across runs, probabilistic DFlash2 drafts.
- **Not stated**: no tokens/s or memory figures in the notes; the LFM3 model quality and footprint are those of the upstream model cards, not measured here.

## Key technical points (ZH)

- **本地服务器上的语音**：/v1/realtime（OpenAI 实时协议）与 /tts 使 llama-server 可作为本地语音助手后端；LFM3-Audio/Omni（2B）把 ASR、TTS 和对话放进同一个小模型。
- **内存受限的 MoE**：主机内存中的专家改用 50/50 SLRU 取代 LRU，对在小显存设备上运行大型 MoE 有意义。
- **后端**：ggml 0.28.0，含 Hexagon HTP 重构（高通 NPU/DSP 路径）、KleidiAI SVE 内核（Arm 服务器/客户端）以及 SYCL、OpenCL、CUDA 的改动。
- **推测解码**：跨运行持久化的 n-gram 缓存，概率式 DFlash2 草稿。
- **未说明**：发布说明中没有 tokens/s 或内存数据；LFM3 的模型质量与占用以上游模型卡为准，此处未测量。

## Why it matters / what's new (EN)

llama.cpp is a widely used open-source local-inference runtime, and runtime releases are where new model families and hardware backends become usable in it. This release adds a realtime voice interface (OpenAI realtime protocol) and a TTS endpoint to the local server, and continues the Hexagon and Arm backend work. It is a point release in a fast cadence (v0.7.0 landed 13 days earlier) with no published benchmarks, so it is recorded at low novelty.

## Why it matters / what's new (ZH)

llama.cpp 是广泛使用的开源本地推理运行时，新模型系列和硬件后端通过其版本发布才可在其中使用。本次发布为本地服务器增加了实时语音接口（OpenAI realtime 协议）和 TTS 端点，并延续了 Hexagon 与 Arm 后端工作。它是高频发布节奏中的一次版本更新（v0.7.0 在 13 天前发布），且没有公开基准数据，因此新颖性评为较低。

## Images

*(No redistributable images for this entry.)*
