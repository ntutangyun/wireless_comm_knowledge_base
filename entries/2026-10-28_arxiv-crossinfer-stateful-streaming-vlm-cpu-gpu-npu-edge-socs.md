---
id: 2026-10-28_arxiv-crossinfer-stateful-streaming-vlm-cpu-gpu-npu-edge-socs
date_published: 2026-10-26
date_found: 2026-10-28
technology: edge-ai
type: academic-paper
title_en: "CrossInfer: running streaming vision-language inference concurrently across the CPU, GPU and NPU of edge SoCs"
title_zh: "CrossInfer：在边缘 SoC 的 CPU、GPU 与 NPU 上并发运行流式视觉语言推理"
url: "https://arxiv.org/abs/2610.35309"
source_quality: full
topics: [vision-language-model, streaming, heterogeneous-accelerators, KV-cache, RK3588, QCS6490, M4-Max, NPU]
topic_primary: on-device-inference
topics_secondary: [edge-ai-silicon, edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

Edge SoCs combine CPUs, GPUs and NPUs, but vision-language model runtimes usually keep generation on one engine and leave the rest idle. This paper observes that streaming video gives a parallelism opportunity (new frames arrive while earlier queries are still being answered) and builds CrossInfer, a runtime that separates a stream's versioned context from each engine's private KV state, so that any engine can continue a stream by reusing, importing or reconstructing that state. Two execution modes follow: Stateful Streaming Generation ingests new frames on one engine while another answers, and Concurrent Sequence Generation serves different ready requests in parallel. A state-aware dispatcher sends each request to the engine expected to finish it first. Each answer reads a fixed, published version of its history and is stated to match its serial reference output.

The prototype is evaluated on an Apple M4 Max, a Rockchip RK3588 and a Qualcomm QCS6490 board, with Qwen2.5-VL-3B-Instruct as the primary model and LLaVA-OneVision-0.5B for the main RK3588 experiments, plus FastVLM and Qwen3.5 variants. On two RK3588 video streams CrossInfer delivers 19.6% more throughput than the best single engine with context reuse and 27.2% more than parallel engines without shared state. Cross-engine KV import cuts first-token latency by 4.6x versus prefix recomputation, Stateful Streaming Generation reaches up to 2.48x the throughput of serial execution, and state-aware dispatch cuts query completion time by up to 72.7%. The paper also reports that engines contend when co-running (for example, co-running slows RK3588 CPU and Mali GPU decoding by 26% and 11%), which is why no fixed placement wins across SoCs.

## Summary (ZH)

边缘 SoC 集成了 CPU、GPU 和 NPU，但视觉语言模型运行时通常把生成放在单一引擎上，其余引擎闲置。本文观察到流式视频提供了并行机会（新帧到达时，先前的查询仍在回答），据此构建了 CrossInfer 运行时：它把每个流的带版本上下文与各引擎私有的 KV 状态分开，使任一引擎都可以通过复用、导入或重建该状态来接续同一个流。由此产生两种执行模式：有状态流式生成（一个引擎摄取新帧，另一个引擎回答），以及并发序列生成（并行服务不同的就绪请求）。状态感知调度器把每个请求派往预计最先完成它的引擎。每个回答读取固定且已发布的历史版本，论文声明其输出与串行参考一致。

原型在 Apple M4 Max、Rockchip RK3588 和 Qualcomm QCS6490 开发板上评测，以 Qwen2.5-VL-3B-Instruct 为主要模型，RK3588 主要实验使用 LLaVA-OneVision-0.5B，另有 FastVLM 与 Qwen3.5 变体。在两路 RK3588 视频流上，CrossInfer 的吞吐比带上下文复用的最佳单引擎高 19.6%，比没有共享状态的并行引擎高 27.2%。跨引擎 KV 导入相对前缀重算将首 token 时延降低 4.6 倍，有状态流式生成的吞吐最高达串行执行的 2.48 倍，状态感知调度使查询完成时间最多缩短 72.7%。论文还报告了引擎并发运行时的相互争用（例如并发使 RK3588 CPU 与 Mali GPU 的解码分别变慢 26% 和 11%），这也是没有哪种固定放置方式能在各 SoC 上通吃的原因。

## Key technical points (EN)

- The core data-structure choice is a versioned stream context shared by all engines plus per-engine KV state that can be reused, imported across engines, or rebuilt, instead of backend-local state that locks a stream to one engine.
- Per-stage VLM latency differs sharply by SoC: for example, on RK3588 generating 32 tokens takes 568 to 903 ms across engines, against 70 ms for CLIP ViT-B/32 image encoding on the NPU, and M4 Max and RK3588 favour opposite prefill/generation placements.
- Reported single-request results on M4 Max include first token in 227 ms versus 244 ms for MLX and 255 ms for llama.cpp, and 23.6% less energy than llama.cpp for a Qwen2.5-VL-3B request (appendix).
- Evaluated platforms are developer boards and an Apple M4 Max in a Mac Studio; no phone SoC is covered, and contention results will depend on each SoC's memory system.

## Key technical points (ZH)

- 核心数据结构选择：所有引擎共享带版本的流上下文，各引擎持有可复用、可跨引擎导入或可重建的 KV 状态，而不是把流锁定在某个后端的本地状态。
- 各 SoC 上 VLM 分阶段时延差异很大：例如在 RK3588 上生成 32 个 token，不同引擎耗时 568 至 903 ms，而 NPU 上 CLIP ViT-B/32 图像编码仅需 70 ms；M4 Max 与 RK3588 偏好相反的预填充/生成放置。
- 论文报告的 M4 Max 单请求结果包括首 token 227 ms（MLX 为 244 ms，llama.cpp 为 255 ms），且 Qwen2.5-VL-3B 请求的能耗比 llama.cpp 低 23.6%（附录）。
- 评测平台是开发板和 Mac Studio 中的 Apple M4 Max，未涵盖手机 SoC；争用结果会取决于各 SoC 的内存系统。

## Why it matters / what's new (EN)

The paper motivates the work with robots and wearable assistants, noting that GPU-only runtimes leave other engines idle (e.g. the ANE under MLX). This work quantifies how much streaming throughput and first-token latency can be recovered by sharing state across engines on three real SoCs, and shows that the best engine for each stage differs per chip, which argues against hand-tuned fixed placements. The gains (tens of percent in throughput on RK3588) are modest compared with the largest headline numbers, and validation is limited to the paper's three platforms.

## Why it matters / what's new (ZH)

论文以机器人和可穿戴助手为动机，指出仅用 GPU 的运行时会让其他引擎闲置（例如 MLX 下的 ANE）。本文在三种真实 SoC 上量化了跨引擎共享状态可以挽回多少流式吞吐和首 token 时延，并表明各阶段的最佳引擎随芯片而异，这不利于手工固定放置。与最大的标题数字相比，其收益（RK3588 上吞吐提升数十个百分点）较为温和，且验证仅限于论文中的三个平台。

## Images

*(No redistributable images for this entry.)*
