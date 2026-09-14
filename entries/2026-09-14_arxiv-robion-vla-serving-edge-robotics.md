---
id: 2026-09-14_arxiv-robion-vla-serving-edge-robotics
date_published: 2026-09-10
date_found: 2026-09-14
type: academic-paper
technology: edge-ai
title_en: "Efficient Vision-Language-Action Management and Serving for Robot Factories"
title_zh: "面向机器人工厂的高效视觉-语言-动作管理与服务系统"
url: "https://arxiv.org/abs/2609.12075"
source_quality: full
topics: [vla-models, gpu-serving, slo-scheduling, robotics-inference, multi-model-colocation]
topic_primary: edge-orchestration
topics_secondary: [on-device-inference, compute-offloading]
novelty_score: 4
---

## Summary (EN)

Researchers from the Max Planck Institute for Software Systems (Dionysios Adamopoulos, Nattapol Chanpaisit, Basel Fakhri, Christina Giannoula) present Robion, a serving system for Vision-Language-Action (VLA) models — the two-stage (VLM perception + Action Diffusion Transformer) models increasingly used for robotic manipulation, where inference is latency-critical because it gates a physical safety-relevant control loop rather than a chat response. Robion targets the "robot factory" setting: many robots, running possibly-different fine-tuned VLA models, sharing a bank of high-end GPUs in a local edge server, each needing millisecond-scale Service-Level Objective (SLO) guarantees.

## Summary (ZH)

马克斯·普朗克软件系统研究所（Max Planck Institute for Software Systems）团队（Dionysios Adamopoulos、Nattapol Chanpaisit、Basel Fakhri、Christina Giannoula）提出 Robion，一个面向视觉-语言-动作（VLA）模型的服务系统——这类两阶段模型（VLM 感知 + 动作扩散 Transformer）正被越来越多地用于机器人操作任务，其推理具有严格的时延临界性，因为它把关的是一个涉及物理安全的控制回路，而非聊天式响应。Robion 针对的是「机器人工厂」场景：多台机器人（可能运行不同的微调版 VLA 模型）共享本地边缘服务器中的一组高端 GPU，且每台机器人都需要毫秒级的服务等级目标（SLO）保证。

## Key technical points (EN)

- **Serving engine, three techniques**: (1) fixed-batch intra-GPU stage disaggregation — runs the VLM and Action Diffusion Transformer (ADiT) stages as separate CUDA streams, avoiding the continuous-batching overhead that is disproportionately costly at millisecond-scale VLA latencies; (2) guarded and dynamic streaming-multiprocessor (SM) partitioning — locksteps one VLM batch with one ADiT batch per step and dynamically restricts SM allocation to the VLM stream (tuned during an initialization profiling pass) so the ADiT stage always finds compute available; (3) SLO-aware dual-stream multi-model serving — shares GPU streams across co-located models using an earliest-SLO-first policy that, at each lockstep, computes each queue's head-request remaining time and serves the tightest deadline first.
- **Management engine**: flexible, programmer-configured model placement (co-location, replication, or GPU-group partitioning by architecture) plus an adaptive traffic controller that formulates robot-to-GPU assignment as an integer program balancing per-model batching efficiency against GPU load, to avoid SLO violations under load spikes.
- **Hardware**: primary testbed 4x NVIDIA RTX 6000 Pro Blackwell (96GB each); secondary platform 4x NVIDIA H100 (80GB each); per-model SLO deadlines cited on a Jetson AGX Thor include π₀ at 156ms, Xiaomi-Robotics-0 at 117ms, SmolVLA at 50ms, GR00T N1.5 at 53ms — illustrating how tight and heterogeneous these deadlines are across different VLA model families.
- **Headline results**: 6.7x higher sustainable robot load than vLLM-Omni at 98% SLO attainment; 1.5x higher load than a monolithic (undisaggregated) baseline; at the highest robot load the monolithic baseline sustains before saturation, Robion achieves 1.4x lower p99 latency on average; on a 4-GPU server with 4 fine-tuned model variants, 8.2x and 4.4x fewer SLO misses than two named baselines (SMG, EPS); in a separate large-scale experiment (64 robots, 8 models, 4 GPUs), maintains 98% SLO attainment.

## Key technical points (ZH)

- **服务引擎的三项技术**：（1）固定批次的 GPU 内阶段解耦——将 VLM 与动作扩散 Transformer（ADiT）两阶段作为独立 CUDA 流运行，避免连续批处理开销在毫秒级 VLA 时延下带来的不成比例代价；（2）受控且动态的流多处理器（SM）分区——每步将一个 VLM 批次与一个 ADiT 批次锁步配对，并动态限制分配给 VLM 流的 SM 数量（在初始化画像阶段调优），确保 ADiT 阶段始终有可用算力；（3）SLO 感知的双流多模型服务——在共置模型间共享 GPU 流，采用「最紧迫 SLO 优先」策略，在每个锁步周期计算各队列队首请求的剩余时间，优先服务截止时间最紧的请求。
- **管理引擎**：支持程序员自定义的灵活模型放置（共置、副本或按架构划分 GPU 组），并配备自适应流量控制器，将「机器人到 GPU」分配建模为整数规划问题，在各模型批处理效率与 GPU 负载之间取得平衡，以避免负载高峰期间的 SLO 违约。
- **硬件**：主测试平台为 4× NVIDIA RTX 6000 Pro Blackwell（各 96GB）；辅助平台为 4× NVIDIA H100（各 80GB）；论文在 Jetson AGX Thor 上给出的各模型 SLO 截止时间包括 π₀ 156ms、Xiaomi-Robotics-0 117ms、SmolVLA 50ms、GR00T N1.5 53ms——展示了不同 VLA 模型家族之间截止时间的紧迫性与异构程度。
- **核心结果**：在 98% SLO 达成率下，可持续承载的机器人负载比 vLLM-Omni 高 6.7 倍；比未解耦的单体基线高 1.5 倍；在单体基线达到饱和前所能承载的最高机器人负载点上，Robion 的 p99 延迟平均降低 1.4 倍；在配备 4 个微调模型变体的 4-GPU 服务器上，SLO 违约次数比两个对比基线（SMG、EPS）分别少 8.2 倍与 4.4 倍；在另一项大规模实验（64 台机器人、8 种模型、4 GPU）中，仍维持 98% 的 SLO 达成率。

## Why it matters / what's new (EN)

This KB's edge-orchestration bin has so far been populated by LLM-serving and mobile-AIGC-task orchestration papers (A-MADiff, DRLM, GreenPipe); Robion is the first *serving-orchestration* entry addressing embodied/robotics VLA workloads specifically — the 2026-09-09 ComVLA and 2026-09-11 FedMVLA entries already cover VLA compute-placement orchestration, but not GPU-serving/SLO scheduling — and here the SLO is not a user-perceived latency target but a physical control-loop deadline tied to robot safety. The GPU-stream-level disaggregation and lockstep SM partitioning are also a genuinely different mechanism from the token-level or container-level scheduling this bin has seen so far, reflecting that VLA inference's two-stage structure (perception then action generation) creates scheduling opportunities and constraints that single-stage LLM serving does not have. Measured on real multi-GPU hardware at both a research-lab scale (4 GPUs) and a separate large-scale experiment (64 robots, 8 models, 4 GPUs), it is squarely in this domain's "measurement over mechanism" sweet spot.

## Why it matters / what's new (ZH)

本知识库 edge-orchestration 分类此前收录的条目多为 LLM 服务与移动端 AIGC 任务编排相关论文（A-MADiff、DRLM、GreenPipe）；Robion 是首个专门针对具身/机器人 VLA 工作负载的**服务编排**系统——2026-09-09 收录的 ComVLA 与 2026-09-11 收录的 FedMVLA 条目虽已涉及 VLA 计算放置编排，但并未涉及 GPU 服务/SLO 调度——其 SLO 并非用户感知的时延目标，而是与机器人安全直接相关的物理控制回路截止时间。GPU 流级别的解耦与锁步式 SM 分区，也是与该分类此前所见的 token 级或容器级调度截然不同的机制，反映出 VLA 推理的两阶段结构（感知后接动作生成）带来了单阶段 LLM 服务所不具备的调度机会与约束。该系统在真实多 GPU 硬件上完成实测，既有研究室规模（4 GPU），也有另一项大规模实验（64 台机器人、8 种模型、4 GPU），正契合本领域「重视实测胜于机制宣称」的一贯取向。

## Images

*(No redistributable images for this entry — text-only extraction from the arXiv HTML rendering, no figures reproduced.)*
