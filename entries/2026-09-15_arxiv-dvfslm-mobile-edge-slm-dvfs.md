---
id: 2026-09-15_arxiv-dvfslm-mobile-edge-slm-dvfs
date_published: 2026-07-08
date_found: 2026-09-15
type: academic-paper
technology: edge-ai
title_en: "DVFS for Small Language Model Inference on Mobile Edge Devices"
title_zh: "面向移动边缘设备小语言模型推理的动态电压频率调节"
url: "https://arxiv.org/abs/2609.13153"
source_quality: full
topics: [on-device-inference, DVFS, energy-measurement, Jetson]
topic_primary: on-device-inference
topics_secondary: [edge-ai-silicon]
novelty_score: 4
---

## Summary (EN)

Researchers from the Department of Computer Science, City University of Hong Kong (Jiesong Chen, Lixiang Han, Jiani Cao, Zhaoxi Yue, Zhenjiang Li) present DVFSLM, a dynamic voltage and frequency scaling (DVFS) system purpose-built for small language model (SLM) inference on edge GPUs. Rather than applying general-purpose DVFS governors designed for arbitrary workloads, DVFSLM uses a workload-aware estimator that translates the specific matrix operations an upcoming token's computation will require into predicted performance-counter behaviour, and correlates that against measured power and latency across candidate frequency combinations for the GPU, CPU, and external memory controller (EMC).

The system's coordination strategy fixes CPU frequency at a profiled threshold — empirically found to be the same 0.6528 GHz for every SLM tested, on both the primary and secondary platforms — just enough to keep the GPU fed without wasting CPU power — and then runs an optimization solver, re-triggered once per 50-token decision window, over the GPU and EMC frequency space to minimize energy per generated token subject to a token-generation latency deadline (a quality-of-service, or QoS, constraint). It was evaluated on an NVIDIA Jetson AGX Orin (GPU 0.3-1.3 GHz, CPU Cortex-A78AE 0.1-2.2 GHz, EMC 0.2-3.2 GHz) as the primary platform, with a lower-end Jetson Orin NX used for secondary validation.

## Summary (ZH)

来自香港城市大学计算机科学系的研究者（Jiesong Chen、Lixiang Han、Jiani Cao、Zhaoxi Yue、Zhenjiang Li）提出 DVFSLM——一套专为边缘 GPU 上小语言模型（SLM）推理设计的动态电压频率调节（DVFS）系统。与面向任意负载设计的通用 DVFS 调频策略不同，DVFSLM 采用一种感知负载的估计器，将即将到来的 token 计算所需的具体矩阵运算，转化为对性能计数器行为的预测，并将其与 GPU、CPU 及外部内存控制器（EMC）在各候选频率组合下的实测功耗与延迟相关联。

该系统的协调策略是：将 CPU 频率固定在一个经画像确定的阈值——经实测，主测试平台（Jetson AGX Orin）与辅助平台（Jetson Orin NX）上，所有被测 SLM 的该阈值均为同一数值 0.6528 GHz——刚好足以持续为 GPU 供给数据而不浪费 CPU 功耗——随后每隔一个 50-token 的决策窗口，在 GPU 与 EMC 的频率空间上重新运行一次优化求解器，在满足 token 生成延迟服务质量（QoS）约束的前提下最小化每 token 能耗。评测平台为 NVIDIA Jetson AGX Orin（GPU 0.3-1.3 GHz、CPU Cortex-A78AE 0.1-2.2 GHz、EMC 0.2-3.2 GHz）作为主测试设备，并以低端型号 Jetson Orin NX 作为辅助验证。

## Key technical points (EN)

- **Energy improvement**: up to 12.4% lower energy per token vs. the device's latest built-in DVFS governors, and up to 8.4% lower vs. GearDVFS — a prior state-of-the-art reinforcement-learning-based mobile DVFS governor that originally optimizes only processor utilization and temperature; the authors adapt it to SLM inference for this comparison by adding a deadline-compliance term to its reward function.
- **Latency-QoS improvement**: up to 93.12% versus built-in governors and up to 69.14% versus GearDVFS. The paper frames its overall contribution as energy-efficient SLM inference (its core formulation, Eq. (1), minimizes energy subject to a latency deadline), but the largest measured QoS gains occur specifically at higher and infeasible deadline rates, where the baselines start missing deadlines while DVFSLM keeps adapting.
- **Mechanism**: a two-stage estimator (workload characterization -> performance-counter/power prediction) feeds an online optimization solver that re-sets GPU and EMC frequency once per 50-token decision window (not per inference step), via a pruned search over the candidate GPU-EMC frequency combinations (44 on the AGX Orin, 28 on Orin NX), with CPU frequency held fixed at a profiled operating point rather than jointly optimized.
- **Hardware validated on**: NVIDIA Jetson AGX Orin (primary) and Jetson Orin NX (secondary, lower-end validation) — both real embedded edge-AI boards, not simulation.
- Extensive supporting figures (25 in the HTML rendering) cover autoregressive inference behaviour, frequency traces over time, thermal behaviour, and micro-benchmarks of the estimator's prediction accuracy.

## Key technical points (ZH)

- **能耗提升**：相较设备原生最新 DVFS 调频策略，每 token 能耗最高降低 12.4%；相较 GearDVFS 最高降低 8.4%——GearDVFS 是一种既有的、基于强化学习的先进移动端 DVFS 调控器，原本仅优化处理器利用率与温度；作者为进行本次对比，在其奖励函数中新增了一个「满足截止时限」的项，将其适配至 SLM 推理场景。
- **延迟 QoS 提升**：相较原生调频策略最高提升 93.12%，相较 GearDVFS 最高提升 69.14%。论文将其总体贡献定位为「面向 SLM 的高能效推理」（其核心优化式 (1) 即在满足延迟时限约束下最小化能耗），但实测中最大的 QoS 提升幅度具体出现在更高、乃至不可行的截止时限速率下——此时基线方法开始无法满足时限，而 DVFSLM 仍能持续适配。
- **机制**：一个两阶段估计器（负载特征刻画 → 性能计数器/功耗预测）驱动一个在线优化求解器，每隔一个 50-token 决策窗口（而非每个推理步骤）重新设定一次 GPU 与 EMC 频率，通过对候选 GPU-EMC 频率组合（AGX Orin 上为 44 种，Orin NX 上为 28 种）进行剪枝搜索完成，CPU 频率则固定在一个经画像确定的工作点，不参与联合优化。
- **验证硬件**：NVIDIA Jetson AGX Orin（主测试平台）与 Jetson Orin NX（辅助低端验证平台）——均为真实嵌入式边缘 AI 开发板，而非仿真。
- HTML 版本中包含 25 幅配图，涵盖自回归推理行为、频率随时间变化的轨迹、热行为，以及估计器预测准确度的微基准测试。

## Why it matters / what's new (EN)

This KB now has three LLM/SLM-specific, Jetson-validated DVFS entries rather than generic DVFS coverage, and each targets a different knob: PELM (2026-09-10) adds speculative decoding and variable verification depth as extra axes on top of traditional per-processor DVFS to fight thermal throttling; TurboInfer (2026-09-11) does millisecond-level, PMU-stall-triggered GPU-only frequency scaling to eliminate idle-stall power waste; DVFSLM instead jointly optimizes GPU and EMC frequency once per decision window, driven by a workload-aware estimator that converts the upcoming token's matrix-operation scale into predicted power/latency, and reports outperforming both stock governors and a prior RL-based scheme (GearDVFS, adapted with a deadline term) on the same class of hardware. The large latency-QoS gain (up to 93.12%) alongside the more modest energy gain (up to 12.4%) is a useful nuance: the paper frames itself as an energy-efficiency contribution, but its most pronounced measured advantage is specifically at higher and infeasible deadline rates where baselines start missing deadlines.

## Why it matters / what's new (ZH)

本知识库现已收录三条面向大/小模型、均在 Jetson 平台上验证的 DVFS 条目，而非泛泛的通用 DVFS 覆盖，且三者各自针对不同的调控维度：PELM（2026-09-10）在传统的逐处理器 DVFS 之上，新增投机解码与可变验证深度两个维度以应对热节流；TurboInfer（2026-09-11）基于 PMU 停顿检测实现毫秒级、仅针对 GPU 的频率调节，以消除空闲停顿造成的功耗浪费；DVFSLM 则在每个决策窗口内联合优化 GPU 与 EMC 频率，由一个感知负载的估计器——将即将到来 token 的矩阵运算规模转化为预测功耗/延迟——驱动，并报告其在同类硬件上优于原生调频策略以及此前一种基于强化学习的方案（经作者新增时限项适配的 GearDVFS）。其延迟 QoS 提升幅度（最高 93.12%）与相对温和的能耗提升幅度（最高 12.4%）并列，是一个值得注意的细节：论文将自身定位为「高能效」贡献，但实测中最显著的优势具体体现在更高、乃至不可行的截止时限速率下——此时基线方法开始无法满足时限。

## Images

![Time-series visualization of frequency decisions when running GPT2-large (Fig. 22) | 运行 GPT2-large 时的频率决策时序可视化图（图 22）](https://arxiv.org/html/2609.13153v1/x22.png)
