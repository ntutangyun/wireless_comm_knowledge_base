---
id: 2026-10-15_arxiv-heterovdiff-video-diffusion-mobile-npu-gpu
date_published: 2026-10-12
date_found: 2026-10-15
technology: edge-ai
type: academic-paper
title_en: "HeteroVDiff: pipelining video diffusion across a mobile NPU and GPU with shared weights"
title_zh: "HeteroVDiff：以共享权重在手机 NPU 与 GPU 之间流水化视频扩散模型"
url: "https://arxiv.org/abs/2610.16244"
source_quality: abstract_only
topics: [video-diffusion, mobile-NPU, GPU, INT8, heterogeneous-inference, Galaxy-S25]
topic_primary: on-device-inference
topics_secondary: [edge-ai-silicon]
novelty_score: 3
---

## Summary (EN)

HeteroVDiff targets on-device video generation on phones, where several clips are often requested at a time, so the authors treat it as a throughput problem before a latency problem. Mobile SoCs carry a GPU and an NPU on shared DRAM, yet the authors state that existing on-device video diffusion systems run the denoiser on one engine while the other sits idle or only decodes the finished latent. They also state that heterogeneous designs built for mobile LLMs do not carry over, because those synchronise the two engines at every operator and partition weight tensors between them instead of sharing one stored copy.

The paper first measures the platform limits that decide what can run on this class of SoC: how large one buffer may be, whether both runtimes can map the same buffer, and how much activation memory the NPU toolchain lets one graph hold. Guided by these, the base weights are stored once in INT8 in the layout the NPU reads natively, and the GPU consumes the same bytes directly as integer dot-product operands. The denoising trajectory is flattened into its full sequence of block executions and cut once at a block boundary, with the GPU running the prefix and the NPU the suffix. The cut is placed from measured rather than modelled rates, including the decoder that only the NPU can run, and measured while both engines run together because each engine's speed changes when the other is active.

HeteroVDiff serves a multi-expert video diffusion model with 48% less weight memory than giving each engine its own copy. Generating videos back to back on a Galaxy S25 with decoding inside the pipeline, it sustains 1.35x the stream throughput of NPU-only execution, and on VBench-2.0 it matches FP32 in the total score over all 18 dimensions.

## Summary (ZH)

HeteroVDiff 面向手机上的端侧视频生成。应用常一次请求多段视频，因此作者把它首先视为吞吐问题，其次才是延迟问题。手机 SoC 的 GPU 与 NPU 共享 DRAM，但作者指出现有端侧视频扩散系统只在一个引擎上运行去噪器，另一个引擎空闲或只在最后解码潜变量。作者还指出，为手机 LLM 设计的异构方案不能直接沿用，因为它们在每个算子处同步两个引擎，并把权重张量在两者之间划分，而不是共享一份存储。

论文首先测量了决定这类 SoC 上能运行什么的平台限制：单个缓冲区的最大尺寸、两个运行时能否映射同一缓冲区，以及 NPU 工具链允许一个图占用多少激活内存。据此，基础权重以 NPU 原生读取的布局只存储一份 INT8，GPU 直接把同样的字节作为整数点积操作数使用。去噪轨迹被展平为完整的块执行序列，并在一个块边界处切一刀，GPU 运行前缀，NPU 运行后缀。切点依据实测速率而非模型估计确定（包括只有 NPU 能运行的解码器），并在两个引擎同时运行时测量，因为一个引擎的速度会随另一个引擎的活动而变化。

HeteroVDiff 服务多专家视频扩散模型时，权重内存比各引擎各持一份少 48%。在 Galaxy S25 上连续生成视频（解码在流水线内），其流式吞吐为仅用 NPU 执行的 1.35 倍，在 VBench-2.0 上 18 个维度的总分与 FP32 持平。

## Key technical points (EN)

- Problem: on-device video diffusion leaves one of the GPU or NPU idle; LLM-style heterogeneous designs synchronise per operator and partition weights.
- Platform measurements first: maximum buffer size, shared buffer mapping across runtimes, NPU-toolchain activation memory per graph.
- Weights stored once in INT8 in the NPU-native layout; the GPU reads the same bytes as integer dot-product operands.
- Denoising trajectory cut once at a block boundary: GPU runs the prefix, NPU the suffix; cut chosen from measured co-running rates.
- Results: 48% less weight memory than per-engine copies; 1.35x stream throughput of NPU-only on Galaxy S25; matches FP32 total score on VBench-2.0 (18 dimensions).

## Key technical points (ZH)

- 问题：端侧视频扩散会让 GPU 或 NPU 之一闲置；LLM 式异构方案按算子同步并划分权重。
- 先测平台：最大缓冲区尺寸、跨运行时共享缓冲区映射、NPU 工具链每图激活内存。
- 权重以 NPU 原生布局只存一份 INT8；GPU 把同样的字节作为整数点积操作数读取。
- 去噪轨迹在块边界切一刀：GPU 运行前缀，NPU 运行后缀；切点按两引擎同时运行的实测速率选取。
- 结果：权重内存比各引擎各持一份少 48%；在 Galaxy S25 上流式吞吐为仅 NPU 的 1.35 倍；VBench-2.0 总分（18 个维度）与 FP32 持平。

## Why it matters / what's new (EN)

The record shows a measured GPU+NPU split on a named handset (Galaxy S25) for a generative-video workload, with the cut point and weight layout derived from measured platform limits. The numbers are the authors' own and this record is based on the abstract only.

## Why it matters / what's new (ZH)

该条目展示了在具体手机（Galaxy S25）上针对生成式视频负载的实测 GPU+NPU 切分，切点与权重布局由实测平台限制推出。数据为作者自述，本条目仅基于摘要。

## Images

*(No redistributable images for this entry.)*
