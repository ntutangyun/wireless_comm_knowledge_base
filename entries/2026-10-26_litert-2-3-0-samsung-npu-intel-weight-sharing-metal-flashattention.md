---
id: 2026-10-26_litert-2-3-0-samsung-npu-intel-weight-sharing-metal-flashattention
date_published: 2026-10-07
date_found: 2026-10-26
technology: edge-ai
type: product
title_en: "LiteRT 2.3.0: Samsung Exynos NPU support, Intel NPU weight sharing for AOT LLMs, Metal FlashAttention and fused GPU kernels"
title_zh: "LiteRT 2.3.0：支持三星 Exynos NPU、Intel NPU 上 AOT LLM 的权重共享、Metal FlashAttention 与融合 GPU 内核"
url: "https://github.com/google-ai-edge/LiteRT/releases/tag/v2.3.0"
source_quality: full
topics: [LiteRT, LiteRT-LM, NPU, Exynos-AI-LiteCore, OpenVINO, MediaTek-NeuroPilot, Metal, FlashAttention, KV-cache, on-device-LLM]
topic_primary: on-device-inference
topics_secondary: [edge-ai-silicon]
novelty_score: 2
---

## Summary (EN)

Google AI Edge published LiteRT 2.3.0 on 7 October 2026 (GitHub release v2.3.0). The release notes name changes on three fronts. On NPUs, Samsung's NPU (Exynos AI LiteCore) is now supported with LiteRT; for Intel NPU and GPU, weight sharing "roughly halves AOT-compiled LLM size"; MediaTek NPU support now covers all Android S and later versions; and vendor-specific NPU libraries on Android now ship as separate Maven packages, with minSdk raised to 24.

On LLM performance, the notes state FlashAttention on Metal gives up to 38% faster decode, up to 2.98x faster prefill and more than 4 GB less peak RAM at 32K context; new fused QKV-RMSNorm-RoPE and SwiGLU GPU kernels give about 12% faster decode; Metal memory residency on iOS/macOS avoids swap paging; and zero-copy mmap for the program cache lowers peak RAM. The companion LiteRT-LM v0.18.0 (https://github.com/google-ai-edge/LiteRT-LM/releases/tag/v0.18.0, 6 October) adds dynamic, on-demand KV-cache growth on NPU, a multimodal EmbeddingGemma 2 (text, vision and audio embeddings) and GPU attention-mask pruning. LiteRT Torch v0.10.0 (https://github.com/google-ai-edge/litert-torch/releases/tag/v0.10.0, 20 October) adds a `--cache_lengths` flag to `export_hf` that exports several static KV-cache-length signatures into one model, Gemma 4 audio-encoder export, per-layer KV-cache dimensions (for example Gemma 4 12B), Qwen3-TTS export and Qwen3-ASR bundle packaging. All figures are the maintainers' own release-note claims; the page gives no hardware, model or baseline for them.

## Summary (ZH)

Google AI Edge 于 2026 年 10 月 7 日发布 LiteRT 2.3.0（GitHub 发布 v2.3.0）。发布说明涉及三方面变化。NPU 方面：LiteRT 现已支持三星 NPU（Exynos AI LiteCore）；在 Intel NPU 与 GPU 上，权重共享“使 AOT 编译的 LLM 体积大致减半”；MediaTek NPU 支持现已覆盖 Android S 及更高的所有版本；Android 上各厂商专用的 NPU 库改为单独的 Maven 包发布，minSdk 提高到 24。

LLM 性能方面，说明称：Metal 上的 FlashAttention 使解码最高快 38%、预填充最高快 2.98 倍，并在 32K 上下文下减少超过 4 GB 峰值内存；新增的融合 QKV-RMSNorm-RoPE 与 SwiGLU GPU 内核使解码快约 12%；iOS/macOS 上的 Metal 内存驻留避免了交换分页；程序缓存的零拷贝 mmap 降低了峰值内存。配套的 LiteRT-LM v0.18.0（https://github.com/google-ai-edge/LiteRT-LM/releases/tag/v0.18.0，10 月 6 日）增加了 NPU 上按需动态增长的 KV 缓存、多模态 EmbeddingGemma 2（文本、视觉与音频嵌入）和 GPU 注意力掩码剪枝。LiteRT Torch v0.10.0（https://github.com/google-ai-edge/litert-torch/releases/tag/v0.10.0，10 月 20 日）为 `export_hf` 新增 `--cache_lengths` 参数，可把多个静态 KV 缓存长度签名导出到同一模型，并支持 Gemma 4 音频编码器导出、逐层 KV 缓存维度（如 Gemma 4 12B）、Qwen3-TTS 导出以及 Qwen3-ASR 的打包。所有数字均为维护者自己在发布说明中的声明，页面未给出对应的硬件、模型或基线。

## Key technical points (EN)

- NPU coverage: Samsung Exynos AI LiteCore added; Intel NPU/GPU weight sharing for AOT LLMs; MediaTek NPU on Android S and later; no Qualcomm-specific change is listed.
- Packaging: vendor NPU libraries as separate Maven packages; Android minSdk 24.
- Apple-side GPU path: Metal FlashAttention (decode up to 38%, prefill up to 2.98x, more than 4 GB less peak RAM at 32K context), Metal memory residency, zero-copy mmap for the program cache.
- Fused QKV-RMSNorm-RoPE and SwiGLU kernels: about 12% faster decode.
- LiteRT-LM v0.18.0: dynamic KV-cache growth on NPU; multimodal EmbeddingGemma 2; GPU attention-mask pruning.
- LiteRT Torch v0.10.0: `--cache_lengths` flag for multi-length static KV-cache signatures in one exported model; Gemma 4 audio encoder; Qwen3-TTS export and Qwen3-ASR bundle packaging.
- Evidence level: release-note claims only; no independent benchmark and no stated test devices.

## Key technical points (ZH)

- NPU 覆盖：新增三星 Exynos AI LiteCore；Intel NPU/GPU 上 AOT LLM 的权重共享；Android S 及以上的 MediaTek NPU；未列出 Qualcomm 专项变化。
- 打包：各厂商 NPU 库改为单独 Maven 包；Android minSdk 为 24。
- Apple 侧 GPU 路径：Metal FlashAttention（解码最高 38%、预填充最高 2.98 倍、32K 上下文少用超过 4 GB 峰值内存）、Metal 内存驻留、程序缓存零拷贝 mmap。
- 融合 QKV-RMSNorm-RoPE 与 SwiGLU 内核：解码快约 12%。
- LiteRT-LM v0.18.0：NPU 上动态 KV 缓存增长；多模态 EmbeddingGemma 2；GPU 注意力掩码剪枝。
- LiteRT Torch v0.10.0：`--cache_lengths` 参数使同一导出模型包含多长度静态 KV 缓存签名；Gemma 4 音频编码器；Qwen3-TTS 导出与 Qwen3-ASR 打包。
- 证据等级：仅为发布说明声明，无独立基准，也未说明测试设备。

## Why it matters / what's new (EN)

It extends the cross-vendor NPU backend matrix recorded in the KB on 2026-08-31 with Samsung's NPU and Intel weight sharing, and adds runtime-level memory and decode changes for GPU and NPU paths. Because the speedup and memory figures come from release notes without disclosed hardware or models, they indicate what the maintainers measured, not what a given phone or PC will see.

## Why it matters / what's new (ZH)

它在知识库 2026-08-31 记录的跨厂商 NPU 后端矩阵基础上，增加了三星 NPU 与 Intel 权重共享，并补充了 GPU 与 NPU 路径上运行时层面的内存与解码改动。由于加速与内存数字来自未披露硬件和模型的发布说明，它们反映的是维护者的测量，而非某款手机或 PC 上的实际表现。

## Images

*(No redistributable images for this entry.)*
