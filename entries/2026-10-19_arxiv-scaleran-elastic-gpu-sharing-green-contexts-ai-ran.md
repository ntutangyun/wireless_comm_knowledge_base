---
id: 2026-10-19_arxiv-scaleran-elastic-gpu-sharing-green-contexts-ai-ran
date_published: 2026-10-16
date_found: 2026-10-19
type: academic-paper
technology: cellular
title_en: "ScaleRAN: A Runtime for Elastic GPU Resource Management in AI-RAN"
title_zh: "ScaleRAN：面向 AI-RAN 的弹性 GPU 资源管理运行时"
url: "https://arxiv.org/abs/2610.23072"
source_quality: full
topics: [AI-RAN, GPU-sharing, Green-Contexts, LDPC, NVIDIA-Aerial, cuPHY, O-Cloud, autoscaling, conformal-prediction, quantile-regression]
topic_primary: open-ran
topics_secondary: [cellular-ai, mec]
novelty_score: 4
---

## Summary (EN)
Arthur Hamard, Jeremie Leguay, Gopalasingham Aravinthan, Alberto Conte, Julien Lallet and Abdelkader Outtagarts (submitted to IEEE) present ScaleRAN, a node-local runtime that lets latency-critical RAN baseband processing and co-located AI workloads share one GPU. It uses NVIDIA Green Contexts to partition Streaming Multiprocessors (SMs) between the two through a ladder of pre-created GPU partitions, so allocation can change at RAN slot granularity. The paper motivates this by noting that baseband demand varies with traffic load, leaving transient spare GPU capacity that existing sharing mechanisms (coarse hardware partitioning such as MIG, or static allocation) cannot reclaim at slot timescales.

Two controllers choose the partition: a reactive one inspired by Kubernetes autoscaling and a proactive one based on quantile regression with conformal prediction. The authors also build LDPCSim, a GPU-accelerated workload generator on NVIDIA Aerial, to evaluate on a 5G NR uplink LDPC-decoding workload. They report that predictive fine-grained partitioning meets slot-level RAN deadlines while raising the GPU resources available to co-located AI workloads, and that the design suits O-RAN O-Cloud deployments.

## Summary (ZH)
Arthur Hamard、Jeremie Leguay、Gopalasingham Aravinthan、Alberto Conte、Julien Lallet 与 Abdelkader Outtagarts（已投稿 IEEE）提出 ScaleRAN，这是一个节点本地运行时，使时延敏感的 RAN 基带处理与同机部署的 AI 负载共享同一块 GPU。它利用 NVIDIA Green Contexts，通过一组预先创建的 GPU 分区阶梯，在两类负载间划分流式多处理器（SM），使分配可在 RAN 时隙粒度上变化。论文的动机是：基带需求随业务负载波动，会留下瞬时空闲的 GPU 能力，而现有共享机制（如 MIG 的粗粒度硬件划分或静态分配）无法在时隙时间尺度上回收。

分区由两种控制器选择：一种是受 Kubernetes 自动伸缩启发的反应式控制器，另一种是基于分位数回归与保形预测的前瞻式控制器。作者还基于 NVIDIA Aerial 构建了 GPU 加速的负载生成器 LDPCSim，用于评估 5G NR 上行 LDPC 译码负载。他们报告，预测式细粒度分区在满足 RAN 时隙级截止时间的同时，提高了可供同机 AI 负载使用的 GPU 资源，且该设计适合 O-RAN O-Cloud 部署。

## Key technical points (EN)
- Workload focus: LDPC decoding is treated as the dominant GPU cost of the 5G uplink pipeline (PUSCH in cuPHY), with a 0.5 ms slot deadline at numerology mu=1. Code blocks in a slot are independent kernels, so decoding latency falls as more SMs are allocated until the decoder's critical path dominates.
- Mechanism: an 11-profile Green Context ladder assigns 4, 8, ..., 44 SMs to the RAN, the rest to AI; MPS provides concurrent execution inside the partitions. Because CUDA kernels are non-preemptive, a profile change takes effect only between kernel launches.
- Architecture: split-process design with a RAN worker, an AI worker, an autoscaler and a coordinator, linked by POSIX shared memory (per-slot telemetry to the autoscaler; requested profile index back to the workers). An existing PyTorch workload is integrated by wrapping each inference in a ProfileManager context.
- Optimisation target: minimise the SMs given to the RAN subject to Pr(decoding latency <= deadline) >= 1 - epsilon.
- Proactive controller: LightGBM quantile regression predicts P90/P95/P99 decoding latency from workload descriptors (PRBs, UEs, MCS, code blocks); conformal calibration, using the first 500 slots, restores target coverage in a reliability diagram.
- Evaluation platform: NVIDIA DGX Spark with 48 SMs, cuPHY uplink LDPC, early termination disabled and 35 maximum iterations as a conservative low-SNR setting. AI workloads include CNNs (ResNet, YOLOv4) and LLMs.
- Reported comparison: with the conformal P99 predictor, a Kubernetes-style proactive variant and the direct-selection Proactive policy reach nearly identical deadline success (99.95% versus 99.96%), while Proactive reduces mean SM regret by 45%, from 8.69 to 4.80. Higher prediction quantiles approach 100% deadline success at the cost of more over-provisioning.
- Interference analysis: neither end-to-end inference latency nor SM footprint alone predicts AI-RAN interference; it depends on SM footprint together with kernel duration relative to the control timescale.

## Key technical points (ZH)
- 负载聚焦：LDPC 译码被视为 5G 上行流水线（cuPHY 中的 PUSCH）GPU 开销的主要部分，在 mu=1 的参数集下时隙截止时间为 0.5 ms。时隙内的码块是相互独立的 kernel，因此译码时延随 SM 增加而下降，直至译码器关键路径起主导作用。
- 机制：由 11 档 Green Context 阶梯为 RAN 分配 4、8、...、44 个 SM，其余给 AI；MPS 提供分区内的并发执行。由于 CUDA kernel 不可抢占，分区切换只在 kernel 启动之间生效。
- 架构：分进程设计，包含 RAN 工作进程、AI 工作进程、自动伸缩器与协调器，通过 POSIX 共享内存连接（逐时隙遥测送往自动伸缩器，请求的分区索引回传给工作进程）。已有的 PyTorch 负载只需把每次推理包在 ProfileManager 上下文中即可接入。
- 优化目标：在 Pr(译码时延 <= 截止时间) >= 1 - epsilon 的约束下，最小化分给 RAN 的 SM 数。
- 前瞻式控制器：LightGBM 分位数回归依据负载描述（PRB、UE、MCS、码块）预测 P90/P95/P99 译码时延；使用前 500 个时隙做保形校准，使可靠性图中的覆盖率回到目标值。
- 评估平台：配备 48 个 SM 的 NVIDIA DGX Spark，cuPHY 上行 LDPC，关闭提前终止并设最大 35 次迭代以模拟保守的低信噪比场景。AI 负载包括 CNN（ResNet、YOLOv4）与 LLM。
- 报告的对比：采用保形 P99 预测器时，Kubernetes 式前瞻变体与直接选择的 Proactive 策略的截止时间成功率几乎相同（99.95% 对 99.96%），而 Proactive 将平均 SM 遗憾值降低 45%，由 8.69 降至 4.80。更高的预测分位数使截止时间成功率接近 100%，代价是更多的超配。
- 干扰分析：单看端到端推理时延或 SM 占用都无法预测 AI-RAN 干扰；它取决于 SM 占用以及 kernel 时长相对于控制时间尺度的关系。

## Why it matters / what's new (EN)
The authors position this against AI-RAN studies that isolate RAN and AI with MIG hardware partitions, including an RL-based MIG orchestrator; this paper works at the SM level inside a single node and reports how a prediction-based controller compares with an autoscaler-style one on the same workload. The evaluation uses an LDPC-only RAN workload (a simulator, not a full PHY pipeline) and a single co-located AI workload at a time on one DGX Spark, so the extension to more than one co-located workload, which the authors discuss, is not measured here.

## Why it matters / what's new (ZH)
作者将本文与以 MIG 硬件分区隔离 RAN 与 AI 的 AI-RAN 研究（包括基于强化学习的 MIG 编排器）相对照；本文则深入单节点内的 SM 级别，并报告基于预测的控制器与自动伸缩式控制器在同一负载上的对比。评估仅使用只含 LDPC 的 RAN 负载（模拟器，而非完整 PHY 流水线），且在一块 DGX Spark 上每次只与一个 AI 负载同机，因此作者所述扩展到多个同机负载的情形在此并未测量。
