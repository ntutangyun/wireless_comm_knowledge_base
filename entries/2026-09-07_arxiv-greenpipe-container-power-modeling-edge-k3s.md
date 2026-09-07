---
id: 2026-09-07_arxiv-greenpipe-container-power-modeling-edge-k3s
date_published: 2026-09-04
date_found: 2026-09-07
type: academic-paper
technology: edge-ai
title_en: "GreenPipe: Power Modeling for Containerized DNN Inference on Kubernetes Edge Nodes"
title_zh: "GreenPipe：面向 Kubernetes 边缘节点容器化 DNN 推理的功耗建模"
url: "https://arxiv.org/abs/2609.04952"
source_quality: full
topics: [power-modeling, container-attribution, K3s, ARM-edge, DNN-inference, Raspberry-Pi]
topic_primary: edge-orchestration
topics_secondary: [edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

Distributed DNN inference is increasingly deployed in containerized edge-cloud environments, where individual workloads run on-device or are exposed to remote clients over the network. Accurate online power estimation on resource-constrained ARM edge nodes is a genuine gap: these boards lack hardware power counters (such as Intel's RAPL), CPU-only models fail to capture multi-resource behaviour, and node-level power meters cannot attribute consumption to individual containers when several share the same box — exactly the situation a Kubernetes-style edge deployment creates.

GreenPipe (Universitat Politècnica de Catalunya, Barcelona Supercomputing Center, University of Oslo) is an automated profiling-training-validation pipeline that addresses this with two phases. Offline, it collects multi-resource telemetry (CPU cycles/instructions/time, cache misses, page-cache hits, network bandwidth, disk I/O — gathered via PMU counters, eBPF, and cgroup metrics) alongside ground-truth power readings from an external USB power meter during a benchmark suite (micro-benchmarks, combined workloads, DeepBench kernels), then trains multi-resource regression models. Online, node power is split into an idle component (distributed by container process count) and a dynamic component, which is attributed to individual containers proportionally to their weighted resource usage, using the weights learned offline.

The system was evaluated on a Raspberry Pi 4 edge node running K3s (a lightweight Kubernetes distribution) with three vision models (MobileNetV2, EfficientNetB0, ResNetV2) across multiple precisions (float32, float16, int8) and thread counts (1-4), in both local-inference (LiteRT) and network-serving (TensorFlow Serving via gRPC) scenarios. GreenPipe's container-level power estimates land at 6.3-9.4% system-level MAPE, a 26.9% average MAPE reduction over CPU-utilization-only and CPU-stress-only baselines (which post 14.2% MAPE), with a mean absolute error of 0.22-0.49 W. The paper reports the estimator/exporter containers themselves account for under 2% of total node power, and separately notes that int8 precision is fastest and lowest-energy, while thread parallelism benefits smaller models more than larger ones (which show rising energy despite falling latency as more threads are added).

## Summary (ZH)

分布式 DNN 推理正越来越多地部署在容器化的边缘-云环境中，单个工作负载既可能在设备本地运行，也可能通过网络暴露给远程客户端。在资源受限的 ARM 边缘节点上做出准确的在线功耗估计存在真实的空白：这类板卡通常没有硬件功耗计数器（如 Intel 的 RAPL），仅基于 CPU 的模型无法捕捉多资源行为，而节点级功耗表也无法在多个容器共享同一台设备时，将功耗归因到具体某个容器——这正是 Kubernetes 式边缘部署所面临的典型场景。

GreenPipe（加泰罗尼亚理工大学、巴塞罗那超算中心、奥斯陆大学）是一套自动化的"画像-训练-验证"流水线，分两个阶段解决该问题。离线阶段，它通过 PMU 计数器、eBPF 与 cgroup 指标采集多资源遥测数据（CPU 周期/指令/时间、缓存缺失、页缓存命中、网络带宽、磁盘 I/O），并在一套基准测试（微基准、组合负载、DeepBench 内核）运行期间同步采集外接 USB 功耗表读数作为真值，训练多资源回归模型。在线阶段，节点功耗被拆分为空闲分量（按容器进程数分配）与动态分量（按离线学到的权重，依各容器的资源占用比例分配）。

该系统在运行 K3s（轻量级 Kubernetes 发行版）的树莓派 4 边缘节点上进行评测，测试了三个视觉模型（MobileNetV2、EfficientNetB0、ResNetV2），覆盖多种精度（float32、float16、int8）与线程数（1-4），并区分本地推理（LiteRT）与网络服务（通过 gRPC 的 TensorFlow Serving）两种场景。GreenPipe 的容器级功耗估计达到系统级 6.3%-9.4% 的 MAPE，相较仅用 CPU 利用率或仅用 CPU 压力测试的基线（MAPE 为 14.2%）平均降低 26.9%，平均绝对误差为 0.22-0.49 瓦。论文指出估计器/导出器容器本身仅占节点总功耗的不到 2%，并另外发现 int8 精度速度最快、能耗最低，而线程并行对较小模型的收益大于较大模型（较大模型在线程增多时延迟下降但能耗反而上升）。

## Key technical points (EN)

- **Problem**: ARM edge nodes lack RAPL-style hardware power counters; CPU-only models miss multi-resource behaviour; node-level power meters can't isolate per-container consumption in a shared containerized edge-cloud deployment.
- **Mechanism**: offline multi-resource regression (PMU/eBPF/cgroup telemetry + external USB power-meter ground truth) trains a model that, online, splits node power into idle (by process count) and dynamic (proportional to weighted per-container resource usage) components.
- **Hardware**: Raspberry Pi 4 (edge, Broadcom BCM2711, quad-core Cortex-A72) running K3s v1.30.3 / containerd / cgroup v2; Intel Core i7-8650U as the server side; a Ruideng UM25C USB meter for ground-truth power at 1 Hz.
- **Workloads**: MobileNetV2, EfficientNetB0, ResNetV2 across float32/float16/int8 and 1-4 threads, in local-inference (LiteRT) and network-serving (TensorFlow Serving/gRPC) modes.
- **Headline numbers**: 6.3-9.4% system-level MAPE (vs. 14.2% for CPU-utilization/CPU-stress baselines, a 26.9% average MAPE improvement); MAE 0.22-0.49 W; monitoring overhead under 2% of total node power.
- **Secondary findings**: int8 is fastest/lowest-energy; thread parallelism benefits smaller models more, with larger models showing rising energy despite falling latency at higher thread counts.
- **Venue**: accepted at a Euro-Par 2026 workshop (6th International Workshop on Performance and Energy Efficiency in Concurrent and Distributed Systems).

## Key technical points (ZH)

- **问题**：ARM 边缘节点缺乏 RAPL 式硬件功耗计数器；仅用 CPU 的模型无法反映多资源行为；在共享式容器化边缘-云部署中，节点级功耗表无法区分单个容器的功耗贡献。
- **机制**：离线阶段通过 PMU/eBPF/cgroup 遥测数据与外接 USB 功耗表真值训练回归模型；在线阶段将节点功耗拆分为空闲分量（按进程数分配）与动态分量（按离线学到的权重、依容器资源占用比例分配）。
- **硬件**：作为边缘端的树莓派 4（Broadcom BCM2711，四核 Cortex-A72），运行 K3s v1.30.3 / containerd / cgroup v2；服务器端为 Intel Core i7-8650U；功耗真值由 Ruideng UM25C USB 功耗表以 1Hz 采样。
- **工作负载**：MobileNetV2、EfficientNetB0、ResNetV2，覆盖 float32/float16/int8 精度与 1-4 线程数，涵盖本地推理（LiteRT）与网络服务（TensorFlow Serving/gRPC）两种场景。
- **核心数据**：系统级 MAPE 为 6.3%-9.4%（对比仅用 CPU 利用率/CPU 压力测试基线的 14.2%，平均改善 26.9%）；平均绝对误差 0.22-0.49 瓦；监控本身开销低于节点总功耗的 2%。
- **附加发现**：int8 精度速度最快、能耗最低；线程并行对较小模型收益更大，较大模型在线程数增加时延迟下降但能耗反而上升。
- **发表**：已被 Euro-Par 2026 的一个研讨会（第六届并发与分布式系统性能与能效国际研讨会）接收。

## Why it matters / what's new (EN)

This KB's `edge-orchestration` bin so far has held workload-placement policy papers (`2026-09-01_arxiv-amadiff-mobile-aigc-task-orchestration`, `2026-09-02_arxiv-drlm-llm-query-orchestration-edge`) — GreenPipe is a different kind of orchestration-layer contribution: it doesn't decide *where* AI work runs, it makes *how much power a given placement costs* observable at container granularity on hardware that has no way to measure this natively. That is a prerequisite capability for any power-aware scheduler operating on shared ARM edge nodes, which is the gap the paper explicitly targets. Its Raspberry Pi 4 / K3s testbed is a genuine Kubernetes-class edge deployment, distinct from the Jetson-class boards that dominate this KB's edge-ai-silicon and on-device-inference entries.

## Why it matters / what's new (ZH)

本知识库此前的 `edge-orchestration` 分类下主要是工作负载放置策略类论文（`2026-09-01_arxiv-amadiff-mobile-aigc-task-orchestration`、`2026-09-02_arxiv-drlm-llm-query-orchestration-edge`）——GreenPipe 提供了一种不同类型的编排层贡献：它并不决定 AI 工作负载"在哪里运行"，而是让"某种放置方案在特定容器粒度上到底消耗多少功耗"这件事在原生无法测量功耗的硬件上变得可观测。这正是任何在共享 ARM 边缘节点上运行的功耗感知调度器所必需的前提能力，也是论文明确瞄准的空白。其树莓派 4 / K3s 测试平台是真正的 Kubernetes 级边缘部署，不同于本知识库 edge-ai-silicon 与 on-device-inference 条目中常见的 Jetson 级板卡。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
