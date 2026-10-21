---
id: 2026-10-21_arxiv-edgeagent-multi-agent-llm-inference-unified-memory-cpu-gpu
date_published: 2026-10-02
date_found: 2026-10-21
technology: edge-ai
type: academic-paper
title_en: "EdgeAgent: orchestrating on-device LLM inference for multi-agent systems on CPU-GPU unified-memory SoCs"
title_zh: "EdgeAgent：面向 CPU-GPU 统一内存 SoC 上多智能体系统的端侧大模型推理编排"
url: "https://arxiv.org/abs/2610.03394"
source_quality: full
topics: [multi-agent-LLM, unified-memory, speculative-decoding, CPU-GPU-co-execution, Apple-M4]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency, edge-orchestration]
novelty_score: 3
---

## Summary (EN)

The paper targets privacy-preserving edge deployment of multi-agent LLM workflows, where orchestrator agents reason openly (hard to draft for speculative decoding) and worker agents emit structured output (easy to draft) while stalling on tool calls. On unified-memory architectures (UMA) the authors identify three problems: memory-bound decode causes bus contention that stalls naive CPU-GPU co-execution, speculative decoding faces large variance in drafting difficulty across agents, and tool-induced stalls leave hardware idle and defeat static batching.

EdgeAgent is a two-layer system. The UMA-aware execution layer splits every linear projection column-parallel between CPU and GPU, which write disjoint column ranges of one shared buffer, with CPU shards repacked offline into SME tiles, a "Logical Dependency Barrier" replacing concatenation, and a fast path outside MLX's generic scheduler. The agent-aware scheduling layer fixes a global draft budget (16 slots), splits it among agents by an exponential moving average of each agent's historical accepted length, and suspends stalled agents at verification boundaries while freezing their KV cache for resumption without re-prefill. Evaluation uses an Apple M4 (and an M4 Pro for ablations) with DeepSeek-R1-Distill-Llama-8B and Llama-3.1-8B-Instruct in FP16 with EAGLE-3 on LongBench, MBPP and ToolBench workloads, against GPU-only Batch-AR, Seq-SD and Batch-SD baselines. The authors report up to 1.29x from the UMA layer over Batch-SD, 1.33x on the mixed workload without stalls, and 1.77x under injected stalls (makespan 213.1 s to 120.6 s, N=4, DeepSeek).

## Summary (ZH)

论文面向保护隐私的边缘多智能体大模型工作流部署：编排者智能体开放式推理（难以为推测解码起草），工作者智能体输出结构化内容（易于起草）但会因工具调用而停顿。在统一内存架构（UMA）上，作者指出三个问题：访存受限的解码造成总线争用，使朴素的 CPU-GPU 协同执行停滞；各智能体之间的起草难度差异很大，推测解码受影响；工具调用造成的停顿让硬件空闲，使静态批处理失效。

EdgeAgent 是两层系统。UMA 感知的执行层把每个线性投影按列并行切分给 CPU 和 GPU，二者写入同一共享缓冲区中互不相交的列范围，CPU 分片离线重排为 SME 瓦片，用“逻辑依赖屏障”取代拼接，并在 MLX 通用调度器之外设置快速路径。智能体感知的调度层固定全局起草预算（16 个槽位），按各智能体历史接受长度的指数滑动平均分配，并在验证边界挂起停顿的智能体，同时冻结其 KV 缓存以便无需重新预填充即可恢复。评估使用 Apple M4（消融用 M4 Pro），模型为 FP16 的 DeepSeek-R1-Distill-Llama-8B 和 Llama-3.1-8B-Instruct，配合 EAGLE-3，负载为 LongBench、MBPP 和 ToolBench，对比仅用 GPU 的 Batch-AR、Seq-SD 和 Batch-SD 基线。作者报告 UMA 层相对 Batch-SD 最高 1.29 倍，无停顿混合负载 1.33 倍，注入停顿时 1.77 倍（N=4，DeepSeek，总完成时间从 213.1 s 降到 120.6 s）。

## Key technical points (EN)

- Problem: decode-phase bus contention on UMA, uneven drafting difficulty across agents, idle hardware during tool stalls.
- Execution layer: column-parallel CPU/GPU split of each linear projection writing disjoint ranges of one buffer; SME-tile CPU repacking; logical dependency barrier; work-stealing across P- and E-cores.
- Scheduling layer: global draft budget M=16; per-agent exponential moving average of accepted length (gamma 0.3, prior 4.0); suspend-and-yield at verification boundaries with frozen KV cache.
- Setup: Apple M4 (32 GB, 120 GB/s) and M4 Pro (64 GB, 273 GB/s); two 8B models in FP16 with EAGLE-3; baselines Batch-AR, Seq-SD, Batch-SD (GPU-only).
- Reported results: UMA layer up to 1.29x over Batch-SD; dynamic budgeting 1.05 to 1.17x further; mixed workload 1.33x; full system under injected stalls 1.77x; prefill at 1,024 tokens 304.5 tok/s, 1.31x over GPU-only.
- Scope (as evaluated): two Apple SoCs; the UMA execution layer relies on a coherent shared address space and does not carry over to discrete GPUs over PCIe, while the authors state the scheduling layer transfers unchanged; tool stalls are synthetic log-uniform pauses; γ and the prior were set by grid search on profiling data from multi-agent workloads.

## Key technical points (ZH)

- 问题：UMA 上解码阶段的总线争用、各智能体起草难度不均、工具停顿期间硬件空闲。
- 执行层：每个线性投影按列并行切分给 CPU/GPU，写入同一缓冲区的互不相交范围；CPU 分片重排为 SME 瓦片；逻辑依赖屏障；P 核与 E 核间工作窃取。
- 调度层：全局起草预算 M=16；各智能体接受长度的指数滑动平均（gamma 0.3，先验 4.0）；在验证边界挂起并让出，KV 缓存冻结。
- 设置：Apple M4（32 GB，120 GB/s）与 M4 Pro（64 GB，273 GB/s）；两个 FP16 的 8B 模型配合 EAGLE-3；基线为 Batch-AR、Seq-SD、Batch-SD（仅 GPU）。
- 报告结果：UMA 层相对 Batch-SD 最高 1.29 倍；动态预算额外 1.05 至 1.17 倍；混合负载 1.33 倍；注入停顿时完整系统 1.77 倍；1,024 token 预填充 304.5 tok/s，比仅 GPU 快 1.31 倍。
- 评估范围：两款 Apple SoC；UMA 执行层依赖一致的共享地址空间，不适用于经 PCIe 连接的独立 GPU，作者称调度层可原样迁移；工具停顿为合成的对数均匀暂停；γ 与先验通过在多智能体负载剖析数据上的网格搜索确定。

## Why it matters / what's new (EN)

The paper treats a multi-agent workflow, rather than a single request, as the unit to schedule on a unified-memory SoC, and reports tokens/s and makespan on named Apple hardware. Results come from synthetic stalls and sampled prompts on two 8B models on Apple hardware.

## Why it matters / what's new (ZH)

论文把多智能体工作流而非单个请求作为统一内存 SoC 上的调度单位，并在具名 Apple 硬件上报告了 tokens/s 与总完成时间。结果来自在 Apple 硬件上、两个 8B 模型的合成停顿与抽样提示。

## Images

*(No redistributable images for this entry.)*
