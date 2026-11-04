---
id: 2026-11-04_arxiv-ripple-deadline-aware-cpu-gpu-sharing-unified-memory-edge-inference
date_published: 2026-10-31
date_found: 2026-11-04
technology: edge-ai
type: academic-paper
title_en: "Ripple: Deadline-Aware CPU-GPU Sharing for Embodied Inference"
title_zh: "Ripple：面向具身推理的截止期感知 CPU-GPU 共享调度"
url: "https://arxiv.org/abs/2611.01067"
source_quality: full
topics: [unified-memory, DGX-Spark, SGLang, memory-bandwidth-interference, robotics, LLM-VLM-serving, deadline-scheduling]
topic_primary: edge-orchestration
topics_secondary: [on-device-inference, edge-ai-silicon]
novelty_score: 3
---

## Summary (EN)

The paper concerns unified-memory edge devices that run LLM or VLM inference alongside time-critical CPU tasks for robotic perception and control. On DGX Spark (GB10: 20-core CPU and 48-SM GPU sharing 128 GB of LPDDR5X) the authors measure CPU tasks slowing by about 1.7-2.5x next to LLM decode, with no such effect on an H200 server with separate HBM. The platform exposes neither bandwidth counters nor direct bandwidth regulation, and reducing SM counts or CPU cores does not fix the imbalance.

Ripple is a CPU-GPU co-scheduler that works around this. It divides an inference pass into pausable layer-based units, translates each CPU job's deadline slack into a GPU-byte budget using model-derived memory volumes, and admits GPU work only within the budgets of all overlapping jobs; CPU completion times serve as the feedback signal that updates a per-job interference model online, and deadline-aware pacing plus narrowing decode to 8 or 16 SMs preserve inference progress. Implemented with SGLang engine hooks and a separate scheduler process, it is evaluated on an ASUS Ascent GX10 (DGX Spark) with Qwen3-8B, Qwen3-32B-FP8, Qwen3-VL-8B and a 30B-A3B VLM, and two robotic CPU task mixes. The paper reports it is the only evaluated approach that consistently meets a 2% CPU deadline-miss target and VLM deadlines across deadline settings (1.1x-2.0x co-run p99) while keeping best-effort LLM throughput.

## Summary (ZH)

论文关注统一内存的边缘设备：它们在运行 LLM 或 VLM 推理的同时，还要运行机器人感知与控制的时间关键型 CPU 任务。在 DGX Spark（GB10：20 核 CPU 与 48 个 SM 的 GPU 共享 128 GB LPDDR5X）上，作者测得 CPU 任务在 LLM 解码旁慢约 1.7-2.5 倍，而在使用独立 HBM 的 H200 服务器上没有这种影响。该平台既不暴露带宽计数器，也不提供直接的带宽调控，而减少 SM 数或 CPU 核数也无法消除失衡。

Ripple 是绕开这一限制的 CPU-GPU 协同调度器。它把一次推理拆成可暂停的、以层为单位的单元，利用由模型推出的内存访问量把每个 CPU 作业的截止期余量转换为 GPU 字节预算，仅在所有重叠作业的预算之内准入 GPU 工作；CPU 完成时间作为反馈信号在线更新每个作业的干扰模型，而截止期感知的节奏控制以及把解码收窄到 8 或 16 个 SM 来保持推理进度。它基于 SGLang 引擎钩子和独立的调度进程实现，在华硕 Ascent GX10（DGX Spark）上，用 Qwen3-8B、Qwen3-32B-FP8、Qwen3-VL-8B 与一个 30B-A3B VLM 以及两种机器人 CPU 任务组合做评测。论文报告，在各种截止期设置（1.1 至 2.0 倍协同运行 p99）下，它是唯一持续满足 2% CPU 截止期错失率目标和 VLM 截止期、同时保持尽力而为 LLM 吞吐的方法。

## Key technical points (EN)

- **Asymmetry exploited**: the GPU is opaque in time but its memory volume per layer is known from the model; CPU tasks are the reverse (timing observable, traffic not), so each side supplies what the other lacks.
- **Pricing**: completion time is modelled as intercept plus slope times GPU volume; each job's allowance is released linearly over its expected interference-free duration, and the global budget is the minimum across active jobs.
- **Control surface**: admission at layer boundaries (grants charged to every CPU job they overlap), one pipelined successor grant to hide scheduler round-trip latency, SM narrowing through green contexts for decode only; prefill and VLM vision units keep full width.
- **Baselines**: Sereno, SiGAMMA, SGLang pause, fixed budget caps and an unmanaged run; SiGAMMA meets the 2% target only at the most relaxed deadlines.
- **Adaptation**: when CPU load changes, one task's miss rate stays near 1% with online adaptation versus 60-67% without it; at 2x deadlines only about 5% of GPU time is not running inference (scheduling gaps and overhead combined).
- **Stated future work**: jointly choosing SM counts and admission timing, and finer boundaries for long prefill. Single platform (one DGX Spark class machine). The paper does not state a code release.

## Key technical points (ZH)

- **利用的不对称性**：GPU 在时间上不透明，但每层的内存访问量可由模型得知；CPU 任务则相反（时序可观测、流量不可见），双方各自提供对方缺少的信息。
- **定价**：完成时间建模为截距加斜率乘以 GPU 访问量；每个作业的额度在其预期无干扰时长内线性释放，全局预算取活跃作业中的最小值。
- **控制手段**：在层边界做准入（授权额度向其重叠的每个 CPU 作业计费）、一个流水线化的后继授权以隐藏调度往返延迟、仅对解码通过 green context 收窄 SM；预填充与 VLM 视觉单元保持全宽。
- **基线**：Sereno、SiGAMMA、SGLang 暂停、固定预算上限以及无管理对照；SiGAMMA 仅在最宽松的截止期下满足 2% 目标。
- **自适应**：CPU 负载变化时，某任务的错失率在线自适应下保持约 1%，不自适应则为 60-67%；在 2 倍截止期下，仅约 5% 的 GPU 时间未在运行推理（调度间隙与开销合计）。
- **论文所述后续工作**：联合选择 SM 数与准入时机，以及为长预填充设更细的边界。仅在单一平台（一台 DGX Spark 级机器）上测试。论文未说明代码发布。

## Why it matters / what's new (EN)

The paper's framing is that a device which serves LLM/VLM inference and real-time control from one memory pool needs a scheduler that cannot rely on hardware counters, and it supplies one built on per-layer byte volumes and CPU-side feedback. The relevance to the edge domain is the measured interference on a shipping unified-memory edge platform and the co-scheduling approach; the numbers are from one machine and the authors' own baselines, so they should be read as a case study, not a general result. v1 preprint.

## Why it matters / what's new (ZH)

论文的思路是：从同一内存池同时提供 LLM/VLM 推理与实时控制的设备，需要一种不依赖硬件计数器的调度器，并给出了基于逐层字节量和 CPU 侧反馈的实现。其对边缘领域的意义在于在一款在售统一内存边缘平台上的干扰实测以及协同调度方法；数据来自一台机器和作者自选的基线，应视为案例研究而非普遍结论。这是 v1 预印本。

## Images

None.
