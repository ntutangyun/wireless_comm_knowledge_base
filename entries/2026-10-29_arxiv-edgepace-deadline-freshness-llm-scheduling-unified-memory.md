---
id: 2026-10-29_arxiv-edgepace-deadline-freshness-llm-scheduling-unified-memory
date_published: 2026-10-27
date_found: 2026-10-29
technology: edge-ai
type: academic-paper
title_en: "EdgePace: protecting sensor-pipeline deadlines from on-device LLM memory-bandwidth contention on unified-memory edge platforms"
title_zh: "EdgePace：在统一内存边缘平台上保护传感器流水线截止期限，避免端侧 LLM 的内存带宽争用"
url: "https://arxiv.org/abs/2610.37307"
source_quality: full
topics: [LLM-scheduling, unified-memory, memory-bandwidth-contention, deadline, freshness, OnePlus-13, Jetson, llama.cpp]
topic_primary: on-device-inference
topics_secondary: [edge-orchestration, edge-ai-silicon]
novelty_score: 3
---

## Summary (EN)

Edge devices increasingly run an LLM next to foreground sensor-processing tasks (camera pipelines, robot tracking) whose outputs feed the LLM and whose deadlines must still be met. On unified-memory SoCs the CPU, GPU and optional NPU share one DRAM bandwidth budget, so LLM inference can make foreground tasks miss deadlines through memory contention even when compute is idle. The paper's motivating measurement, on a Jetson Orin Nano Super, shows a memory-intensive background load raising a 33.3 ms-deadline foreground task's p95 latency from 28.8 ms to 43.9 ms and causing 72.78% deadline misses, versus 1.11% for a compute-intensive load.

EdgePace is a bandwidth-aware runtime built on llama.cpp. It inserts safe suspension points across prefill and decode, monitors foreground memory demand and stalls at low cost, and schedules inference by contention risk, deadline slack and output freshness (an LLM answer is only useful while its source observation is still current). It is evaluated on a OnePlus 13 (Snapdragon 8 Elite, 24 GB, 84.8 GB/s) and three Jetsons (Orin Nano Super, AGX Orin, Thor) with a multi-camera semantic-feedback task and a MuJoCo robotic tracking task, against unmanaged llama.cpp, MLC-LLM, TensorRT, MNN and Qualcomm's QAIRT (only combinations that ran successfully are reported).

Reported result: foreground deadline misses fall by 24.1% to 96.1% relative to unmanaged inference while 64.9% to 98.5% of LLM throughput is retained, and every measured LLM output arrived inside its freshness window. On the OnePlus 13, camera deadline misses fall by 91.3% with 90.4% of throughput retained. EdgePace had the lowest miss rate in all seven platform-model configurations of the multi-camera study.

## Summary (ZH)

边缘设备越来越多地在运行 LLM 的同时，还要运行摄像头流水线、机器人跟踪等前台传感器处理任务；这些任务的输出要喂给 LLM，且自身的截止期限仍须满足。在统一内存 SoC 上，CPU、GPU 和可选的 NPU 共享同一份 DRAM 带宽，因此即使算力空闲，LLM 推理也会通过内存争用使前台任务错过截止期限。论文在 Jetson Orin Nano Super 上的动机测量显示：内存密集型后台负载使一个截止期限为 33.3 ms 的前台任务 p95 时延从 28.8 ms 升至 43.9 ms，并造成 72.78% 的截止期限错失，而计算密集型负载仅为 1.11%。

EdgePace 是基于 llama.cpp 的带宽感知运行时：在预填充和解码阶段设置安全的挂起点，以较低开销监测前台内存需求与停顿，并按争用风险、截止期限余量和输出新鲜度（LLM 的答案只有在其源观测仍然有效时才有价值）来调度推理。评测平台为一加 13（骁龙 8 Elite，24 GB，84.8 GB/s）和三款 Jetson（Orin Nano Super、AGX Orin、Thor），任务为多摄像头语义反馈和 MuJoCo 机器人跟踪，对比未受管理的 llama.cpp、MLC-LLM、TensorRT、MNN 以及高通 QAIRT（仅报告能成功运行的组合）。

论文报告：相对未受管理的推理，前台截止期限错失减少 24.1% 至 96.1%，同时保留 64.9% 至 98.5% 的 LLM 吞吐，且所有测得的 LLM 输出都在新鲜度窗口内到达。在一加 13 上，摄像头截止期限错失下降 91.3%，吞吐保留 90.4%。在多摄像头实验的全部七种平台-模型配置中，EdgePace 的错失率均最低。

## Key technical points (EN)

- **Problem framing**: the contention is memory bandwidth, not compute; LLM decode is bandwidth-bound and shares DRAM with sensor pipelines on Jetson and phone SoCs.
- **Mechanism**: safe pause/resume points inside prefill and decode, low-cost monitoring of foreground memory demand and stalls, and a scheduler weighing contention risk, deadline slack and output freshness.
- **Platforms and models**: OnePlus 13 (NPU used for all phone runs) with Qwen2.5-1.5B and Qwen3-VL-2B-Q8; Orin Nano Super with Qwen2.5-1.5B; AGX Orin and Thor with Qwen3-8B and Qwen3-VL-8B.
- **Baseline caveats**: MLC-LLM failed on VLMs and on the phone NPU, MNN did not run on Jetson, TensorRT ran out of memory on Orin Nano Super; comparisons are within a platform-model pair because foreground loads differ per platform.
- **Scope limit**: the case studies use short outputs (at most 16 tokens, 246-token contexts), so conclusions for long generation are not covered.

## Key technical points (ZH)

- **问题界定**：争用的是内存带宽而非算力；LLM 解码受带宽限制，并与传感器流水线在 Jetson 和手机 SoC 上共享 DRAM。
- **机制**：在预填充与解码内部设置安全的暂停/恢复点，低开销监测前台内存需求与停顿，调度器综合权衡争用风险、截止期限余量和输出新鲜度。
- **平台与模型**：一加 13（手机端所有运行均使用 NPU），模型为 Qwen2.5-1.5B 与 Qwen3-VL-2B-Q8；Orin Nano Super 使用 Qwen2.5-1.5B；AGX Orin 与 Thor 使用 Qwen3-8B 与 Qwen3-VL-8B。
- **基线说明**：MLC-LLM 在 VLM 和手机 NPU 上失败，MNN 无法在 Jetson 上运行，TensorRT 在 Orin Nano Super 上内存不足；由于各平台前台负载不同，对比仅在同一平台-模型组合内进行。
- **范围限制**：案例研究输出很短（最多 16 个 token，上下文 246 个 token），因此长文本生成场景的结论未被覆盖。

## Why it matters / what's new (EN)

The paper's own contrast is with SERENO, which yields bandwidth through speculative decoding with independent foreground apps; this paper instead treats the LLM as one tenant on a shared memory system and quantifies the damage it does to co-resident real-time work, which the authors describe as common in edge applications where sensor tasks feed the LLM. The contribution is a scheduling and measurement result on real hardware (a phone plus three Jetsons), not a new kernel or model. Related: 2026-10-28_arxiv-crossinfer-stateful-streaming-vlm-cpu-gpu-npu-edge-socs (placing work across engines of the same SoC).

## Why it matters / what's new (ZH)

论文自身的对比对象是 SERENO（通过推测解码为独立前台应用让出带宽）；本文则把 LLM 视为共享内存系统上的一个租户，量化了它对同机实时任务造成的损害，作者称这在传感器任务为 LLM 提供输入的边缘应用中很常见。其贡献是在真实硬件（一部手机加三款 Jetson）上的调度与测量结果，而非新的算子或模型。相关条目：2026-10-28_arxiv-crossinfer-stateful-streaming-vlm-cpu-gpu-npu-edge-socs（同一 SoC 内各引擎之间的任务放置）。

## Images

*(No redistributable images for this entry.)*
