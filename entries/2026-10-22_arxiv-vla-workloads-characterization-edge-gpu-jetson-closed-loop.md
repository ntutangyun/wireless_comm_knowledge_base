---
id: 2026-10-22_arxiv-vla-workloads-characterization-edge-gpu-jetson-closed-loop
date_published: 2026-10-04
date_found: 2026-10-22
technology: edge-ai
type: academic-paper
title_en: "Characterizing vision-language-action workloads for embodied AI: stage profiling, DVFS and 43,200 closed-loop episodes on an edge GPU server and two Jetson SoCs"
title_zh: "面向具身智能的视觉-语言-动作（VLA）负载表征：在边缘 GPU 服务器与两款 Jetson SoC 上的阶段剖析、DVFS 与 43,200 个闭环回合"
url: "https://arxiv.org/abs/2610.05062"
source_quality: full
topics: [vla, robotics, roofline, dvfs, jetson, batch-1-inference]
topic_primary: on-device-inference
topics_secondary: [edge-ai-silicon, edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

The paper (to appear at ASPLOS '27) characterizes four vision-language-action models (GR00T N1.6, pi0.5, OpenVLA-OFT, Cosmos-Policy; OpenVLA is profiled as an autoregressive baseline only) on an RTX 4090 edge server, a Jetson AGX Orin and a Jetson Thor. The setting is batch-1 inference under a per-control-period deadline, which the authors say falls outside the design point of LLM serving systems. Measurements combine stage-level latency, roofline analysis with NVIDIA NCU, DVFS sweeps through sysfs, and 43,200 closed-loop MuJoCo episodes on the LIBERO suites (40 tasks, 30 rollouts per task).

In single-inference profiling, action generation accounts for 65% of GR00T N1.6 latency, 75% of pi0.5 and 71% of Cosmos-Policy, while OpenVLA-OFT's MLP head takes 0.6 ms. On the RTX 4090, GR00T N1.6 and pi0.5 are memory-bound for 62% and 58% of GPU time, whereas OpenVLA-OFT and Cosmos-Policy are compute-bound for 84% and 77%; the authors attribute the split to action-tensor dimensionality. Measured closed-loop per-inference latency is 117-396 ms on the RTX 4090 (control rates of 2.5-8.5 Hz) and 304-2603 ms on AGX Orin (0.4-3.3 Hz).

DVFS and closed-loop results: on Orin, throttling the GPU to 510 MHz saves 24-32% energy at a 1.9-2.2x latency cost, while on Thor the saving is only 1-4%; lowering memory-controller frequency raises energy on both. A phase-aware frequency policy evaluated only as a transition-free upper bound would save up to 17.9% energy on Orin (pi0.5) and 18.8% latency on Thor (GR00T), but measured switching costs 3.5 ms (Orin) and 8.6 ms (Thor) per transition, which on Thor offsets most of the gain. The paper concludes that no overlap/serving configuration is Pareto-dominant across deployment SLOs.

## Summary (ZH)

论文（将发表于 ASPLOS '27）在 RTX 4090 边缘服务器、Jetson AGX Orin 与 Jetson Thor 上，对四个视觉-语言-动作模型（GR00T N1.6、pi0.5、OpenVLA-OFT、Cosmos-Policy；自回归的 OpenVLA 仅作剖析基线）进行了表征。场景是带控制周期截止期的 batch-1 推理，作者认为这超出了 LLM 服务系统的设计点。测量方法包括阶段级延迟、基于 NVIDIA NCU 的 roofline 分析、通过 sysfs 的 DVFS 扫描，以及在 LIBERO 套件（40 个任务、每任务 30 次 rollout）上的 43,200 个 MuJoCo 闭环回合。

单次推理剖析显示，动作生成占 GR00T N1.6 延迟的 65%、pi0.5 的 75%、Cosmos-Policy 的 71%，而 OpenVLA-OFT 的 MLP 头仅 0.6 ms。在 RTX 4090 上，GR00T N1.6 与 pi0.5 分别有 62% 与 58% 的 GPU 时间受内存限制，OpenVLA-OFT 与 Cosmos-Policy 分别有 84% 与 77% 受计算限制；作者将这种分化归因于动作张量的维度。闭环单次推理延迟实测：RTX 4090 为 117-396 ms（控制频率 2.5-8.5 Hz），AGX Orin 为 304-2603 ms（0.4-3.3 Hz）。

DVFS 与闭环结果：在 Orin 上，将 GPU 降频到 510 MHz 可节能 24-32%，代价是延迟增加 1.9-2.2 倍；在 Thor 上仅节能 1-4%；降低内存控制器频率在两者上都会增加能耗。仅作为“无切换开销上界”评估的阶段感知调频策略，在 Orin（pi0.5）上最多节能 17.9%，在 Thor（GR00T）上最多降低 18.8% 延迟，但实测每次切换耗时 3.5 ms（Orin）与 8.6 ms（Thor），在 Thor 上抵消了大部分收益。论文结论是：在不同部署 SLO 下，没有任何配置在帕累托意义上占优。

## Key technical points (EN)

- Platforms: RTX 4090 (24 GB, 450 W), Jetson AGX Orin (64 GB, 15-60 W), Jetson Thor (128 GB, 70-130 W); PyTorch 2.10 on all.
- torch.compile speedups: 7.96x for the pi0.5 action head and 4.42x for the GR00T action head; Cosmos-Policy DiT 0.97x.
- Closed-loop: pi0.5 degrades least under overlapped inference; on the RTX 4090 the two robust models lose 15-20 percentage points versus 31-49 for GR00T and Cosmos-Policy.
- Example SLO operating point: GR00T on Thor at 10% overlap meets an 85% success-rate threshold with 34.8 J (Long group, 86.3%).
- Stated limits: MuJoCo/LIBERO only (no real robot), NVIDIA hardware only, no scheduler implemented, energy boundaries differ across platforms so cross-platform energy shows relative trends only.

## Key technical points (ZH)

- 平台：RTX 4090（24 GB、450 W）、Jetson AGX Orin（64 GB、15-60 W）、Jetson Thor（128 GB、70-130 W）；均使用 PyTorch 2.10。
- torch.compile 加速：pi0.5 动作头 7.96 倍、GR00T 动作头 4.42 倍；Cosmos-Policy 的 DiT 为 0.97 倍。
- 闭环：重叠推理下 pi0.5 退化最小；在 RTX 4090 上两个稳健模型损失 15-20 个百分点，GR00T 与 Cosmos-Policy 损失 31-49 个百分点。
- SLO 工作点示例：Thor 上 GR00T 在 10% 重叠时满足 85% 成功率阈值，Long 组能耗 34.8 J（成功率 86.3%）。
- 论文自述限制：仅 MuJoCo/LIBERO（无真机）、仅 NVIDIA 硬件、未实现调度器、各平台能耗测量边界不同，因此跨平台能耗只反映相对趋势。

## Why it matters / what's new (EN)

This adds a measured batch-1 view of robot-policy models running on-device or on a nearby edge server, a workload class the existing on-device LLM entries do not cover. The numbers come from simulation (MuJoCo/LIBERO) on NVIDIA hardware, and the phase-aware policy is an upper bound, not an implemented scheduler.

## Why it matters / what's new (ZH)

本文补充了机器人策略模型在端侧或近端边缘服务器上运行时的 batch-1 实测视角，这类负载是现有端侧 LLM 条目未涉及的。数据来自 NVIDIA 硬件上的仿真（MuJoCo/LIBERO），阶段感知策略只是上界而非已实现的调度器。

## Images

*(No redistributable images for this entry.)*
