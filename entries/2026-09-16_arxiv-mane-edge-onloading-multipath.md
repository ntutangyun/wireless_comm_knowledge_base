---
id: 2026-09-16_arxiv-mane-edge-onloading-multipath
date_published: 2026-09-13
date_found: 2026-09-16
type: academic-paper
technology: edge-ai
title_en: "MANE: A Multi-Path Adaptive Network for Edge Onloading of Deep Neural Networks"
title_zh: "MANE：面向深度神经网络边缘上载（Edge Onloading）的多路径自适应网络"
url: "https://arxiv.org/abs/2609.14660"
source_quality: full
topics: [compute-offloading, split-computing, edge-server, knowledge-distillation]
topic_primary: compute-offloading
topics_secondary: [edge-orchestration]
novelty_score: 4
---

## Summary (EN)

Researchers from the National Technical University of Athens and Samsung AI Center Cambridge (Sokratis Nikolaidis, Stylianos I. Venieris, Leonidas Malachias, Iakovos S. Venieris) address resource contention on shared edge servers that support "onloading" — split computing where a small head network runs on the IoT device and the rest of the model runs on a nearby edge server — for many concurrent devices at once. Existing onloading methods, the paper states, are tuned for a fixed accuracy/latency point and fail once the server's load rises enough that the server-side path can no longer keep up with all connected devices within their service-level objective (SLO) latency deadline.

MANE's answer is a multi-path tail architecture: instead of one fixed server-side network, the server hosts several inference pathways of different depths (accurate / balanced / fast) branching from a shared backbone, and a scheduler dynamically routes each device's request down the path the current server load can sustain. Two training and control innovations make this practical: a Joint Head Network Distillation loss that trains a single shared on-device head model to produce intermediate features usable by all of the server's paths (so the device does not need to know or care which path will process its data), and a hysteresis-based scheduler using growth/drain counters that switches paths only after sustained (not momentary) queue growth or drain, to avoid oscillating between paths under fluctuating load. It was evaluated with a real edge server (RTX 3080 GPU, Ryzen 5 3600 CPU) and a real IoT device (Samsung Galaxy S20 FE smartphone with NPU acceleration) on Tiny ImageNet classification.

## Summary (ZH)

来自雅典国立技术大学与三星人工智能中心（剑桥）的研究者（Sokratis Nikolaidis、Stylianos I. Venieris、Leonidas Malachias、Iakovos S. Venieris）针对支持「边缘上载」（onloading，即在物联网设备上运行一个小型「头部网络」、其余部分在邻近边缘服务器上运行的切分计算方式）的共享边缘服务器，研究其在同时服务大量并发设备时出现的资源争用问题。论文指出，现有的边缘上载方法通常针对某一固定的精度/延迟工作点进行调优，一旦服务器负载升高到服务端路径无法在服务级别目标（SLO）延迟期限内满足所有已连接设备的需求时，这些方法便会失效。

MANE 给出的答案是一种多路径「尾部」架构：服务器不再只托管一个固定的服务端网络，而是从共享主干网络分支出深度各异的多条推理路径（精确 / 均衡 / 快速），由调度器根据当前服务器负载动态地将每台设备的请求路由到当下负载所能支撑的路径上。为使这一方案可行，论文提出了两项训练与控制上的创新：一是「联合头部网络蒸馏」（Joint Head Network Distillation）损失函数，用于训练出一个共享的端侧「头部」模型，使其产生的中间特征可被服务器所有路径通用（因此设备无需知晓、也无需关心其数据最终会由哪条路径处理）；二是基于滞后（hysteresis）的调度器，采用增长/排空计数器，只有在队列持续（而非瞬时）增长或排空后才切换路径，以避免在负载波动下于多条路径间反复震荡。评测使用了真实的边缘服务器（RTX 3080 GPU、Ryzen 5 3600 CPU）与真实的物联网设备（配备 NPU 加速的三星 Galaxy S20 FE 智能手机），任务为 Tiny ImageNet 分类。

## Key technical points (EN)

- **Hardware**: edge server with an NVIDIA RTX 3080 GPU (10GB) and AMD Ryzen 5 3600 CPU; IoT device is a real Samsung Galaxy S20 FE smartphone with NPU acceleration — not a simulated device or server.
- **Headline result**: MANE maintains over 80% SLO satisfaction rate at conditions "where state-of-the-art onloading methods fail completely," while preserving accuracy 6 percentage points higher than on-device-only alternatives, across up to 40 concurrent devices.
- **Throughput**: the fast path delivers up to 2.11x acceleration for ResNet152 and 2.43x for ConvNeXt Small over the *pretrained backbone* (batch size 128). The shared head's intermediate feature map ([12x28x28]) cuts transmission cost by ~16x relative to the raw input and up to ~42.7x relative to the naive split point of ResNet152's fast path, while the head adds only 5ms of on-device latency (versus 25ms for the MobileNetV2 device-only fallback).
- **Multi-path tail architecture**: several inference pathways of different depths (accurate/balanced/fast) branch from a shared pretrained backbone on the server; which path a given request takes is a runtime scheduling decision, not fixed at deployment.
- **Joint Head Network Distillation loss**: a weighted combination of per-path knowledge-distillation losses trains one shared on-device head so its intermediate representation is simultaneously useful to every server-side path, rather than needing a different head per path.
- **Hysteresis-based scheduler**: uses growth and drain counters rather than an instantaneous load threshold — the system switches to a faster (less accurate) path only after sustained queue growth exceeds a threshold, and returns to a more accurate path only after sustained draining, which is what prevents rapid oscillation under bursty load.
- **Evaluation setup**: Tiny ImageNet (200-class) classification, latency budgets of 100-200ms, AMQP used as the device-server messaging protocol.

## Key technical points (ZH)

- **硬件**：边缘服务器配备 NVIDIA RTX 3080 GPU（10GB）与 AMD Ryzen 5 3600 CPU；物联网设备为真实的、配备 NPU 加速的三星 Galaxy S20 FE 智能手机——而非仿真设备或仿真服务器。
- **核心结果**：在「现有先进边缘上载方法完全失效」的条件下，MANE 仍能维持超过 80% 的 SLO 满足率，同时相较纯端侧方案精度高出 6 个百分点，且在多达 40 台并发设备下保持这一表现。
- **吞吐量**：快速路径相较*预训练主干网络*，对 ResNet152 最高提速 2.11 倍、对 ConvNeXt Small 最高提速 2.43 倍（batch size 128）。共享头部模型输出的中间特征图（[12x28x28]）相较原始输入将传输开销降低约 16 倍，相较 ResNet152 快速路径的朴素切分点最高降低约 42.7 倍；共享端侧头部模型仅增加 5 毫秒端侧延迟（而纯端侧回退模型 MobileNetV2 需 25 毫秒）。
- **多路径尾部架构**：服务器从共享的预训练主干网络分支出深度各异的多条推理路径（精确/均衡/快速）；某一请求走哪条路径，是运行时的调度决策，而非部署时固定不变。
- **联合头部网络蒸馏损失**：由各路径知识蒸馏损失加权组合而成，用于训练出一个共享的端侧头部模型，使其中间表示能同时服务于服务端的所有路径，而无需为每条路径单独训练一个头部。
- **基于滞后的调度器**：采用增长与排空计数器，而非瞬时负载阈值——系统仅在队列持续（而非瞬时）增长超过阈值后才切换到更快（精度更低）的路径，也仅在持续排空后才切回精度更高的路径，这正是避免在突发负载下频繁震荡的关键。
- **评测设置**：Tiny ImageNet（200 类）分类任务，延迟预算 100-200 毫秒，设备与服务器之间使用 AMQP 作为消息传输协议。

## Why it matters / what's new (EN)

This KB's compute-offloading bin has mostly covered split/collaborative inference under a single fixed accuracy-latency operating point (speculative decoding variants, token-aware routing). MANE's contribution is orthogonal: it treats the number of concurrently-served devices, and the resulting server-side queueing, as the variable that determines which accuracy/latency point is even achievable at a given moment, and solves the resulting scheduling problem with a shared-head-model design so the device side stays agnostic to which server path handles it. The real edge-server-plus-real-smartphone evaluation (rather than a purely simulated multi-device setup) and the explicit multi-tenant framing (up to 40 concurrent devices) are what distinguish it from this bin's existing single-device-pair entries.

## Why it matters / what's new (ZH)

本知识库「计算与推理卸载」分类此前收录的条目，大多是在单一固定的精度-延迟工作点下讨论切分/协同推理（如各类投机解码变体、token 级路由）。MANE 的贡献方向与此正交：它把「当前并发服务的设备数量」及由此产生的服务端排队情况，视为决定某一时刻究竟能达到何种精度/延迟工作点的变量，并通过「共享头部模型」的设计解决由此产生的调度问题——使设备侧无需关心其数据最终由服务端哪条路径处理。采用真实边缘服务器与真实智能手机进行评测（而非纯仿真的多设备环境），以及明确的多租户场景设定（多达 40 台并发设备），是其区别于该分类现有「单设备-单服务器」条目之处。

## Images

![Multi-path adaptive architecture for edge onloading | 面向边缘上载的多路径自适应架构](https://arxiv.org/html/2609.14660v1/syst_arch_v2.png)
