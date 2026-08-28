---
id: 2026-08-28_arxiv-neuroprefetcher-storage-backed-edge-llm
date_published: 2026-08-23
date_found: 2026-08-28
type: academic-paper
technology: edge-ai
title_en: "NeuroPrefetcher: Storage-Aware Sparse LLM Inference via Delta Prefetching"
title_zh: "NeuroPrefetcher：面向存储的稀疏大模型推理与增量预取"
url: "https://arxiv.org/abs/2608.22643"
source_quality: full
topics: [edge-LLM, sparsity, prefetching, NVMe, Jetson, ICPP-2026, model-exceeds-memory]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency, compute-offloading]
novelty_score: 4
---

## Summary (EN)

Most work on shrinking models for the edge assumes the goal is to make the model *fit*. NeuroPrefetcher (Kennesaw State / Washington State, accepted at ACM ICPP 2026) takes the case where it never fits: the model stays permanently larger than resident memory, and storage sits on the critical path of every token.

The authors first show how badly the default path fails. Running Mistral-7B on an NVIDIA Jetson AGX Orin with a constrained memory budget, reactive OS demand paging produces **11,453 major page faults per second**, burns **77% of CPU cycles on I/O**, and leaves the GPU at **3% utilisation**. The accelerator is idle because the operating system is thrashing.

Their opening is an empirical property of autoregressive decoding: **82–85% of active MLP neurons persist from one token to the next**. If most of the sparse weights you need are already resident, the only thing that must come off storage is the *delta* — the newly activated rows. NeuroPrefetcher makes that delta explicit. After layer 0 runs densely, a single GPU-resident predictor (206.8M parameters, **2.86% of base model parameters**, 414 MB in FP16) predicts sparse activity for all 31 downstream layers in one forward pass, and a background thread issues batched NVMe reads only for incoming rows while the dense prefix executes.

The engineering underneath matters as much as the idea. Weights are reorganised offline into a neuron-centric layout — one 24.5 KiB record co-locating the gate, up and down projection rows for a single intermediate neuron — so that sorting and coalescing neuron IDs turns scattered reads into contiguous ranges. I/O runs through Linux `io_uring` with `O_DIRECT` at queue depth 256, landing in pinned staging buffers to stay cache-coherent on Jetson's unified memory, then a fused CUDA scatter kernel deinterleaves records into per-projection buffers.

Against llama.cpp on the same board, NeuroPrefetcher delivers **7.9–12.0× speedup** across the model-exceeds-memory range (1.7 tok/s vs 0.2 at 9.0 GiB; 3.7 vs 0.31 at 13.2 GiB), and the paper is candid that the advantage collapses to **1.1–1.2× once memory is large enough** for llama.cpp to stop page-faulting. Quality holds at 92–96% of dense accuracy with no per-task retraining.

## Summary (ZH)

绝大多数「为边缘瘦身模型」的工作都假定目标是让模型**装得下**。NeuroPrefetcher（肯尼索州立 / 华盛顿州立，已被 ACM ICPP 2026 接收）针对的是它永远装不下的情形：模型始终大于常驻内存，存储因而位于每一个 token 的关键路径上。

作者首先展示了默认路径失效得有多彻底。在 NVIDIA Jetson AGX Orin 上以受限内存预算运行 Mistral-7B 时，操作系统被动的缺页换入产生**每秒 11,453 次主缺页**，**77% 的 CPU 周期消耗在 I/O 上**，而 GPU 利用率只有 **3%**——加速器闲置，是因为操作系统在颠簸。

他们的切入点是自回归解码的一个实测性质：**相邻 token 之间约 82–85% 的活跃 MLP 神经元是延续的**。既然当前 token 所需的稀疏权重大多已经常驻，真正必须从存储取回的只有**增量**——新激活的那些行。NeuroPrefetcher 把这个增量显式化：第 0 层以稠密方式执行后，一个常驻 GPU 的预测器（2.068 亿参数，占基础模型参数的 **2.86%**，FP16 下 414 MB）在一次前向中预测其后全部 31 层的稀疏活跃情况；后台线程仅为新增行发起成批 NVMe 读取，与稠密前缀的执行相重叠。

底层工程与想法本身同样关键。权重被离线重排为**以神经元为中心的布局**——每条 24.5 KiB 记录把同一个中间神经元的 gate、up、down 投影行放在一起——因而对神经元 ID 排序合并后，离散读取变成了连续区间。I/O 经由 Linux `io_uring` + `O_DIRECT`、队列深度 256 下发，落入锁页暂存缓冲以在 Jetson 统一内存上保持缓存一致，再由一个融合 CUDA scatter 内核把记录解交织到各投影缓冲区。

在同一块板卡上对比 llama.cpp，NeuroPrefetcher 在「模型超出内存」区间取得 **7.9–12.0 倍**加速（9.0 GiB 时 1.7 tok/s 对 0.2；13.2 GiB 时 3.7 对 0.31）；论文也坦率指出，**一旦内存足够大**、llama.cpp 不再频繁缺页，优势即收窄至 **1.1–1.2 倍**。模型质量保持在稠密精度的 92–96%，且无需按任务重新训练。

## Key technical points (EN)

- Target regime: model permanently exceeds resident memory; storage is an active weight source on the critical path.
- Baseline pathology measured: 11,453 major page faults/s, 77% CPU iowait, 3% GPU utilisation under OS demand paging.
- Temporal locality: 82–85% of active MLP neurons persist token-to-token (profiled on WikiText-2 during generation).
- One-shot predictor after layer 0 — 206.8M params (2.86% of base model), predicts 31 layers × 2 projections per token; ~99% correct centroid selection.
- Neuron-centric on-disk layout: 24.5 KiB record per intermediate neuron co-locating gate/up/downᵀ rows; sorted + coalesced into contiguous NVMe ranges.
- `io_uring` + `O_DIRECT`, queue depth 256, pinned mapped staging buffers, fused CUDA deinterleave-scatter kernel.
- Hardware: Jetson AGX Orin, 32 GiB unified LPDDR5, 12-core Cortex-A78AE, 2,048 CUDA cores, Samsung 990 PRO NVMe (7.4 GB/s rated).
- Results: 7.9–12.0× over llama.cpp at 9.0–13.2 GiB CUDA-available; narrows to 1.1–1.2× at 13.9–14.8 GiB. NVMe I/O is 80–87% of per-token latency.
- Capability study: of 20 LLM inference systems tried on Jetson at a 14 GiB cap, only 4 ran at all (NeuroPrefetcher 3.22 tok/s, llama.cpp 0.34, FlexGen 0.25, Ollama 0.07); 12 failed on allocation or on assuming separate GPU/host memory tiers.
- Quality: 92–96% of dense accuracy retained (WikiText-2 perplexity, HellaSwag) at dense-prefix depth d=20. Code and measured data released.

## Key technical points (ZH)

- 目标场景：模型持续超出常驻内存，存储成为关键路径上的活跃权重来源。
- 基线病理已量化：操作系统被动换页下每秒 11,453 次主缺页、77% CPU iowait、GPU 利用率 3%。
- 时间局部性：相邻 token 间 82–85% 的活跃 MLP 神经元延续（在 WikiText-2 生成过程中剖析得到）。
- 第 0 层后的一次性预测器——2.068 亿参数（占基础模型 2.86%），每 token 预测 31 层 × 2 个投影；约 99% 的层决策选中正确聚类中心。
- 面向神经元的磁盘布局：每个中间神经元一条 24.5 KiB 记录，合并存放 gate/up/downᵀ 行；排序合并后形成连续 NVMe 读取区间。
- `io_uring` + `O_DIRECT`、队列深度 256、锁页映射暂存缓冲、融合 CUDA 解交织 scatter 内核。
- 硬件：Jetson AGX Orin，32 GiB 统一 LPDDR5，12 核 Cortex-A78AE，2048 CUDA 核心，三星 990 PRO NVMe（标称 7.4 GB/s）。
- 结果：CUDA 可用内存 9.0–13.2 GiB 区间较 llama.cpp 提速 7.9–12.0 倍；13.9–14.8 GiB 时收窄至 1.1–1.2 倍。NVMe I/O 占每 token 时延的 80–87%。
- 可运行性调查：在 14 GiB 上限的 Jetson 上尝试 20 个大模型推理系统，仅 4 个能跑起来（NeuroPrefetcher 3.22 tok/s、llama.cpp 0.34、FlexGen 0.25、Ollama 0.07）；12 个因内存分配失败或假定 GPU/主机内存分层而失败。
- 质量：稠密前缀深度 d=20 时保持稠密精度的 92–96%（WikiText-2 困惑度、HellaSwag）。代码与实测数据已公开。

## Why it matters / what's new (EN)

Two things make this more than another inference-speedup paper.

The first is the reframing. The `edge-model-efficiency` literature is built on the premise that you compress until the model fits; NeuroPrefetcher treats not-fitting as the permanent operating condition and asks what the storage tier should do about it. That is the regime an actual edge box lives in — a Jetson-class module, a set-top box, a home NAS — where memory is fixed at purchase and models keep growing. Delta prefetching turns the OS's worst behaviour (reactive paging) into an explicitly scheduled, model-aware data movement problem, and the 80–87% I/O share of per-token latency says plainly where the remaining headroom is.

The second is the capability study, which is arguably the paper's most useful public artifact: **only 4 of 20 mainstream LLM inference systems would run at all** on a Jetson at a 14 GiB cap. Six failed on allocation, six assumed separate GPU and host memory tiers that unified-memory edge hardware does not have, and four had no ARM build. That is a blunt, citable measurement of how much of the local-inference ecosystem is implicitly written for discrete-GPU desktops — a useful counterweight to the assumption that a runtime which works on a workstation will work on an edge node.

The honesty about the crossover (1.1–1.2× once memory is comfortable) is what makes the 7.9–12.0× credible; it is a technique with a clearly stated operating envelope rather than a universal claim.

## Why it matters / what's new (ZH)

有两点让这篇论文不只是又一篇推理加速工作。

其一是问题的重新框定。`edge-model-efficiency` 这条脉络的前提是「压缩到装得下为止」；NeuroPrefetcher 把「装不下」当作长期工作状态，转而追问存储层应当为此做什么。这正是真实边缘设备所处的境况——Jetson 级模组、机顶盒、家庭 NAS——内存在采购时即已固定，而模型仍在变大。增量预取把操作系统最糟糕的行为（被动换页）转化为显式调度、模型感知的数据搬运问题；而 I/O 占每 token 时延 80–87% 这一数字，也直白地指出了剩余优化空间在哪里。

其二是那份可运行性调查，可能是本文最有公共价值的产出：在 14 GiB 上限的 Jetson 上，**20 个主流大模型推理系统中只有 4 个能跑起来**。6 个因内存分配失败，6 个假定存在边缘统一内存硬件并不具备的「GPU/主机分离内存层级」，4 个没有 ARM 构建。这是一个直白且可引用的测量结果，说明本地推理生态中有多大比例是隐含地面向独显台式机编写的——对「在工作站上能跑的运行时到边缘节点也能跑」这一假设是一剂有用的解药。

论文对交叉点（内存宽裕后仅 1.1–1.2 倍）的坦诚，恰恰让 7.9–12.0 倍这一数字更可信：它是一项**明确划定了适用范围**的技术，而非普适性主张。
