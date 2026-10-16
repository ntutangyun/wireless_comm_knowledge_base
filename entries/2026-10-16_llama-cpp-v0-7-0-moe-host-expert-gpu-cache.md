---
id: 2026-10-16_llama-cpp-v0-7-0-moe-host-expert-gpu-cache
date_published: 2026-10-15
date_found: 2026-10-16
technology: edge-ai
type: product
title_en: "llama.cpp v0.7.0 adds a GPU LRU cache for host-memory MoE experts (up to ~2.2x decode, per release notes)"
title_zh: "llama.cpp v0.7.0 新增面向主机内存 MoE 专家的 GPU LRU 缓存（发布说明称解码最高约 2.2 倍）"
url: "https://github.com/ggml-org/llama.cpp/releases/tag/v0.7.0"
source_quality: full
topics: [llama.cpp, MoE, expert-offload, speculative-decoding, local-inference, runtime]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 2
---

## Summary (EN)

The llama.cpp v0.7.0 release (published 15 Oct 2026) adds a GPU cache for mixture-of-experts (MoE) models whose experts are kept in host memory. Experts run on the GPU from a least-recently-used cache sized with `--moe-cache-mib` (new `moe_cache_size` context parameter in `llama.h`); the release notes state up to about 2.2x faster decode when experts are offloaded, and the cache can be shared across multiple GPUs. The release notes do not describe the hardware or models behind the 2.2x figure.

Other items listed include new speculative-decoding paths (LiliCorr draft selection on top of DFlash, MTP for GLM5-Next, and a `--spec-draft-n-ubatch` option to size the draft context batch separately and save VRAM), tensor-parallel RPC (`-sm tensor`, RPC protocol v8), a refactored server chat-session API, a models manager in the web UI, a default server port change to 9931, ggml updated to v0.27.0, and support for a long list of new model architectures including multimodal and embedding models.

## Summary (ZH)

llama.cpp v0.7.0（2026 年 10 月 15 日发布）为专家保存在主机内存中的混合专家（MoE）模型新增了 GPU 缓存。专家从按 `--moe-cache-mib` 设定大小的最近最少使用（LRU）缓存中在 GPU 上运行（`llama.h` 中新增 `moe_cache_size` 上下文参数）；发布说明称，在专家被卸载时解码最高约快 2.2 倍，缓存还可在多块 GPU 间共享。发布说明未说明 2.2 倍所对应的硬件与模型。

其他条目包括：新的推测解码路径（基于 DFlash 的 LiliCorr 草稿选择、GLM5-Next 的 MTP，以及可单独设定草稿上下文批大小以节省显存的 `--spec-draft-n-ubatch` 选项）、张量并行 RPC（`-sm tensor`，RPC 协议 v8）、重构的服务器聊天会话 API、网页界面的模型管理器、服务器默认端口改为 9931、ggml 升级到 v0.27.0，以及对大量新模型架构（含多模态与嵌入模型）的支持。

## Key technical points (EN)

- MoE expert cache: experts held in host memory are served from a GPU LRU cache (`--moe-cache-mib`); release notes claim up to ~2.2x decode speedup when experts are offloaded; shareable across GPUs.
- Speculative decoding: LiliCorr drafts, MTP for GLM5-Next, separate draft-context batch sizing to save VRAM.
- Tensor-parallel RPC (`-sm tensor`, protocol v8).
- Server: refactored chat-session API, parts-based formatted output, default port 9931.
- Number caveat: the 2.2x figure comes from the project's own release notes, with no hardware stated there.

## Key technical points (ZH)

- MoE 专家缓存：主机内存中的专家通过 GPU LRU 缓存提供（`--moe-cache-mib`）；发布说明称专家被卸载时解码最高约 2.2 倍；可跨 GPU 共享。
- 推测解码：LiliCorr 草稿、GLM5-Next 的 MTP、单独设定草稿上下文批大小以节省显存。
- 张量并行 RPC（`-sm tensor`，协议 v8）。
- 服务器：重构的聊天会话 API、分段式格式化输出、默认端口 9931。
- 数字说明：2.2 倍来自项目自己的发布说明，其中未注明硬件。

## Why it matters / what's new (EN)

llama.cpp now exposes host-memory expert offload as a GPU LRU cache with a tunable size (`--moe-cache-mib`). The speedup is the project's own claim and is not independently benchmarked in this record; the release is aimed at GPU-equipped hosts generally, not specifically at phones or gateways.

## Why it matters / what's new (ZH)

llama.cpp 现在以大小可调的 GPU LRU 缓存（`--moe-cache-mib`）形式提供主机内存专家卸载功能。加速比是项目自己的说法，本条目未做独立基准测试；该版本面向一般带 GPU 的主机，并非特指手机或网关。

## Images

*(No redistributable images for this entry.)*
