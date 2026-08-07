---
id: 2026-08-07_arxiv-ocudu-gpu-cuda-5g-phy
date_published: 2026-08-05
date_found: 2026-08-07
type: academic-paper
technology: cellular
title_en: "GPU-Resident CUDA Acceleration for OCUDU 5G PHY and O-RAN Fronthaul: Architecture and Preliminary Performance"
title_zh: "OCUDU 开源 5G 物理层与 O-RAN 前传的 GPU 常驻 CUDA 加速：架构与初步性能"
url: "https://arxiv.org/abs/2608.04338"
source_quality: full
topics: [O-RAN, 5G-NR, GPU, AI-RAN]
topic_primary: open-ran
topics_secondary: [cellular-ai, 5g-nr]
novelty_score: 3
---

## Summary (EN)

DeepSig researchers (Pennybacker, Liu, Kharchenko, O'Shea) present the first modular GPU-acceleration backend integrated *inside* OCUDU — an open-source 5G CU/DU stack — rather than replacing the L1 with an external vendor stack (the approach NVIDIA Aerial takes). The motivation is AI-RAN: machine-learned channel estimators and neural receivers need direct, host-round-trip-free access to intermediate PHY data (resource grids, softbits, channel estimates), which CPU-only pipelines and external L1 replacements both deny.

The design is a three-layer abstraction: a factory-based selection surface (acceleration modes auto/enabled/disabled without touching high-level logic), implementation-neutral resource-grid and PRACH-buffer contracts with optional device-mapping hooks, and a CUDA-specific bottom layer holding kernels, streams, and memory policy. Three memory models cover CPU-only hosts, discrete GPUs (pinned staging buffers, explicit H2D/D2H), and integrated platforms like DGX Spark (CUDA unified memory, zero-copy).

On a DGX Spark (GB10 GPU + ARM Cortex-X925/A725 host), microbenchmarks show 10.3× PUSCH speedup (40 MHz 4-layer 256-QAM), 2.7× PDSCH, 19.7× split-8 lower-PHY receive with batching and zero-copy, 91.4× O-RAN fronthaul BFP12 decompression, and 28.8× PRACH detection. A full software gNB scales to 9 reproducible 1T1R sectors (3.63 Gb/s aggregate DL) or 6 full-rate 4T4R sectors (8.4 Gb/s). Crucially, receiver sensitivity is preserved: CPU and GPU 10%-BLER thresholds match within 0.064 dB across QPSK→256-QAM.

## Summary (ZH)

DeepSig 团队（Pennybacker、Liu、Kharchenko、O'Shea）提出了首个集成在 OCUDU（开源 5G CU/DU 软件栈）**内部**的模块化 GPU 加速后端，而非像 NVIDIA Aerial 那样用外部厂商栈整体替换 L1。动机是 AI-RAN：机器学习信道估计器与神经接收机需要直接访问物理层中间数据（资源网格、软比特、信道估计）且不经主机往返——纯 CPU 流水线和外部 L1 替换方案都无法满足。

设计为三层抽象：基于工厂模式的选择层（加速模式 auto/enabled/disabled，不改上层逻辑）、与实现无关的资源网格/PRACH 缓冲契约（含可选设备映射钩子），以及封装内核、流与内存策略的 CUDA 专属底层。三种内存模型分别覆盖纯 CPU 主机、独立 GPU（锁页暂存缓冲、显式 H2D/D2H 拷贝）和 DGX Spark 等集成平台（CUDA 统一内存、零拷贝）。

在 DGX Spark（GB10 GPU + ARM Cortex-X925/A725 主机）上的微基准显示：PUSCH 加速 10.3×（40 MHz 4 层 256-QAM）、PDSCH 2.7×、split-8 低 PHY 接收 19.7×（批处理+零拷贝）、O-RAN 前传 BFP12 解压 91.4×、PRACH 检测 28.8×。整机软件 gNB 可扩展至 9 个可复现的 1T1R 扇区（下行合计 3.63 Gb/s）或 6 个全速率 4T4R 扇区（8.4 Gb/s）。关键是接收灵敏度不受损：QPSK 至 256-QAM 下 CPU/GPU 的 10% BLER 门限差在 0.064 dB 以内。

## Key technical points (EN)

- Three-layer abstraction: factory selection surface → implementation-neutral grid/buffer contracts → CUDA-isolated backend; all acceleration settings accept auto/enabled/disabled.
- Three memory modes: CPU-only, pinned/discrete (host-authoritative grids), shared/unified (managed memory on integrated GPUs).
- Fused PUSCH demodulation-through-LDPC with device-side softbit buffers; multi-lane PDSCH encoding writing directly to device grids; VkFFT-based OFDM for split-8 lower PHY.
- Headline speedups: PUSCH 10.3×, PDSCH 2.7×, low-PHY RX 19.7×, BFP12 decompression 91.4×, PRACH 28.8×; 6 full-rate 4T4R sectors on one DGX Spark.
- BLER waterfall parity: CPU vs GPU 10%-BLER thresholds within 0.064 dB — acceleration without sensitivity loss.
- AI-RAN enablement: tensor locality lets neural receivers run alongside standards-compliant kernels with no host round-trips.

## Key technical points (ZH)

- 三层抽象：工厂选择层 → 与实现无关的网格/缓冲契约 → CUDA 隔离后端；所有加速项支持 auto/enabled/disabled。
- 三种内存模式：纯 CPU、锁页/独立 GPU（主机侧网格为权威副本）、共享/统一内存（集成 GPU 上的托管内存）。
- PUSCH 解调至 LDPC 全程融合、软比特驻留设备侧；PDSCH 多通道编码直写设备网格；split-8 低 PHY 采用 VkFFT OFDM。
- 核心加速比：PUSCH 10.3×、PDSCH 2.7×、低 PHY 接收 19.7×、BFP12 解压 91.4×、PRACH 28.8×；单台 DGX Spark 支撑 6 个全速率 4T4R 扇区。
- BLER 瀑布曲线一致性：CPU 与 GPU 的 10% BLER 门限差 ≤0.064 dB——加速不损失灵敏度。
- AI-RAN 使能：张量本地性让神经接收机与标准兼容内核共存运行，无需主机往返。

## Why it matters / what's new (EN)

The KB's open-ran bin has tracked AI-RAN mostly at the announcement level (NVIDIA AI-RAN stack, Ericsson AI-in-RAN throughput claims) and at the O-RAN architecture level (energy-latency trade-offs, RIC work). This is the first entry showing *how* an open-source L1 gets GPU-resident AI-readiness architecturally — keeping one codebase, one test suite, and vendor-neutral fallback paths, in explicit contrast to external L1 replacement. The 0.064 dB sensitivity-parity result and the per-block speedup table give the community reproducible engineering baselines for AI-RAN feasibility on integrated GPU platforms.

## Why it matters / what's new (ZH)

本知识库 open-ran 主题此前对 AI-RAN 的跟踪多停留在发布层面（NVIDIA AI-RAN 栈、Ericsson AI-in-RAN 吞吐宣称）和 O-RAN 架构层面（能耗-时延权衡、RIC 工作）。本条目首次展示开源 L1 **如何**在架构上获得 GPU 常驻的 AI 就绪性——保持单一代码库、统一测试、厂商中立的回退路径，与外部 L1 整体替换形成鲜明对比。0.064 dB 灵敏度一致性结果和分模块加速表为社区提供了集成 GPU 平台上 AI-RAN 可行性的可复现工程基线。

## Images

![Software encapsulation of the CUDA backend | CUDA 后端的软件封装分层](https://arxiv.org/html/2608.04338v1/x1.png)
![CUDA-resident PHY pipeline | CUDA 常驻物理层流水线](https://arxiv.org/html/2608.04338v1/x2.png)
![PUSCH BLER sensitivity sweeps, CPU vs GPU | PUSCH BLER 灵敏度扫描（CPU 对比 GPU）](https://arxiv.org/html/2608.04338v1/x4.png)
