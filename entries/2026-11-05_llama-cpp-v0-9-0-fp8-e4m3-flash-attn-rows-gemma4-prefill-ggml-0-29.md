---
id: 2026-11-05_llama-cpp-v0-9-0-fp8-e4m3-flash-attn-rows-gemma4-prefill-ggml-0-29
date_published: 2026-11-04
date_found: 2026-11-05
technology: edge-ai
type: product
title_en: "llama.cpp v0.9.0: OCP FP8 E4M3 type, flash_attn_ext_rows for multi-sequence KV, Gemma 4 E2B/E4B prefill gains, and ggml 0.29"
title_zh: "llama.cpp v0.9.0：OCP FP8 E4M3 类型、面向多序列 KV 的 flash_attn_ext_rows、Gemma 4 E2B/E4B 预填充优化与 ggml 0.29"
url: "https://github.com/ggml-org/llama.cpp/releases/tag/v0.9.0"
source_quality: full
topics: [llama.cpp, ggml, FP8-E4M3, flash-attention, Gemma-4, Hexagon, local-inference, TTS]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 2
---

## Summary (EN)

llama.cpp v0.9.0 was published on 4 November 2026. The release notes list an OCP FP8 E4M3 tensor type (saturating mode, with conversion helpers and a new file type, `LLAMA_FTYPE_MOSTLY_F8_E4M3`), a new `flash_attn_ext_rows` op that makes the unified KV cache efficient for multi-sequence inference while restoring non-unified-KV prefill performance, and a batched tensor copy API implemented for Metal and CUDA. Four new architectures are added (Clover, Limite, Metis-1.6 and Mistral Large 4), and the Gemma 4 E2B and E4B models receive graph optimisations described in the notes as "massive prefill gains".

Audio support expands with Chatterbox TTS, Nemotron 3.5 Transcribe (offline transcription in 40 languages) and predefined Pocket TTS voices. The bundled ggml is updated to v0.29.0, which adds the FP8 E4M3 type, the flash-attention-rows op, initial multi-node tensor parallelism through a multi-process communicator interface, and backend work across CPU (new SVE kernels), CUDA, SYCL, Metal, Vulkan, OpenCL and Hexagon. The notes also point out that llama.cpp is again a featured repository in GitHub's Octoverse report.

## Summary (ZH)

llama.cpp v0.9.0 于 2026 年 11 月 4 日发布。发布说明列出：OCP FP8 E4M3 张量类型（饱和模式，含转换辅助函数与新文件类型 `LLAMA_FTYPE_MOSTLY_F8_E4M3`）；新增 `flash_attn_ext_rows` 算子，使统一 KV 缓存在多序列推理中更高效，并恢复非统一 KV 的预填充性能；以及在 Metal 与 CUDA 上实现的批量张量拷贝 API。新增四种架构（Clover、Limite、Metis-1.6、Mistral Large 4），Gemma 4 E2B 与 E4B 模型获得发布说明所称的"大幅预填充提升"的计算图优化。

音频支持扩展：Chatterbox TTS、Nemotron 3.5 Transcribe（40 种语言离线转写）以及 Pocket TTS 预设音色。内置 ggml 更新至 v0.29.0，新增 FP8 E4M3 类型、flash-attention-rows 算子、通过多进程通信接口提供的初步多节点张量并行，以及覆盖 CPU（新 SVE 内核）、CUDA、SYCL、Metal、Vulkan、OpenCL 和 Hexagon 的后端优化。说明还提到 llama.cpp 连续第三年入选 GitHub Octoverse 报告的重点仓库。

## Key technical points (EN)

- **Quantisation**: FP8 E4M3 is a new tensor type and file type; the notes give no accuracy or speed figures for it.
- **Gemma 4 E2B/E4B**: prefill gains are asserted in the notes without numbers or named hardware, so they are unquantified here.
- **API changes**: `LLAMA_FTYPE_MOSTLY_F8_E4M3`, predefined-voice and Chatterbox audio APIs in mtmd.h, a Qwen3-VL video prompt template, and `/props` reporting of TTS voices in the server.
- **Other core changes**: LFM3 NVFP4 GGUFs and tensor split, speculative-decoding checkpoint handling, model-loading staging-buffer reuse, and KV-cache fixes.

## Key technical points (ZH)

- **量化**：FP8 E4M3 是新的张量与文件类型；说明中未给出其精度或速度数据。
- **Gemma 4 E2B/E4B**：说明中声称预填充有提升，但未给出数字或具体硬件，故此处无法量化。
- **API 变更**：`LLAMA_FTYPE_MOSTLY_F8_E4M3`、mtmd.h 中的预设音色与 Chatterbox 音频 API、Qwen3-VL 视频提示模板，以及服务端 `/props` 报告 TTS 音色。
- **其他核心变更**：LFM3 的 NVFP4 GGUF 与张量切分、推测解码检查点处理、模型加载暂存缓冲区复用，以及 KV 缓存修复。

## Why it matters / what's new (EN)

llama.cpp is the main local-inference runtime, and its releases are where new quantisation types and hardware backends reach end users. This one adds a standards-based FP8 type and keeps extending the Hexagon (Qualcomm NPU) and Arm SVE paths relevant to phones and edge boxes. It follows v0.8.0 (28 October) in this KB. It is a routine-cadence release with no published benchmarks in the notes, so the entry records capabilities, not measured gains.

## Why it matters / what's new (ZH)

llama.cpp 是主要的本地推理运行时，新的量化类型与硬件后端通过其版本发布到达终端用户。本版加入基于标准的 FP8 类型，并继续扩展与手机和边缘设备相关的 Hexagon（高通 NPU）与 Arm SVE 路径。它承接本知识库中的 v0.8.0（10 月 28 日）。这是常规节奏的版本，说明中没有公布基准测试，因此本条目只记录能力，而非实测收益。

## Images

None.
