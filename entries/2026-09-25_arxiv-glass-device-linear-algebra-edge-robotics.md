---
id: 2026-09-25_arxiv-glass-device-linear-algebra-edge-robotics
date_published: 2026-09-23
date_found: 2026-09-25
type: academic-paper
technology: edge-ai
title_en: "GLASS: Architecture-Tuned, Composable, Device-Side Linear Algebra for Edge Robotics and Beyond"
title_zh: "GLASS：面向边缘机器人的架构自适应、可组合、设备端线性代数库"
url: "https://arxiv.org/abs/2609.28179"
source_quality: full
topics: [CUDA, linear-algebra, Jetson, robotics, GPU-kernels, architecture-tuning]
topic_primary: edge-ai-silicon
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

Brian Plancher (Dartmouth College) presents GLASS, a header-only CUDA C++ library that fills a gap the paper identifies in GPU robotics: while CPU robotics has mature reusable numerical libraries (Eigen, BLASFEO), GPU deployments are typically stuck choosing between high-level frameworks like PyTorch/JAX (which add overhead) or bespoke low-level kernels rebuilt per project. GLASS offers composable device-side linear-algebra primitives at multiple execution granularities — per-thread, per-warp, and per-CUDA-block — plus wrappers around NVIDIA's own device libraries (CUB, cuBLASDx, cuSOLVERDx), unifying general linear algebra (BLAS levels 1-3, factorizations, solves) with robotics-specific operations (spatial algebra, SO(3)/SE(3) maps, quaternions, pose errors). Its central design idea is treating "which implementation, which execution scope, and how kernels are packed together" as architecture-specific placement decisions, resolved once via offline benchmarking and then baked into the code at compile time via constexpr dispatch tables, so there's no runtime overhead from the decision itself.

The paper argues placement is critical: benchmarking across three real platforms (Jetson AGX Orin, Jetson AGX Xavier, and a desktop RTX 5090) over 396 test cells (6 kernel types x 11 problem sizes x 3 batch regimes x 2 scalar types) found that the best and worst implementation choice for a given operation differ by a median of 4.9x and up to 81x, and that 145 of 396 recommended placements change between Orin and the RTX 5090, with 162 of 396 changing between Orin and its own predecessor, the Xavier. Native GLASS kernels beat vendor libraries (cuBLAS/cuSOLVER) on small-to-medium problem sizes by up to 113.9x, and beat PyTorch/JAX on 359 of 378 tested cells by a geometric mean of 4.3-9.5x (up to 73x on individual cells) on the Orin. Integrated into two real robotics pipelines on the Orin, GLASS delivered 1.21-1.50x speedups in a sampling-based model-predictive-control loop (also exposing and fixing a pre-existing numerical bug in the process) and a 1.26x speedup plus a 92% reduction in device numerics code (355 to 29 lines) for a batched inverse-kinematics solver.

## Summary (ZH)

达特茅斯学院的 Brian Plancher 提出了 GLASS，一个仅含头文件的 CUDA C++ 库，用以填补论文所指出的 GPU 机器人领域的一项空白：CPU 端机器人计算已有成熟的可复用数值库（Eigen、BLASFEO），而 GPU 部署则通常只能在两者之间选择——要么使用 PyTorch/JAX 等高层框架（带来额外开销），要么为每个项目重复造轮子式地手写底层内核。GLASS 在多个执行粒度（单线程、单 warp、单 CUDA block）上提供可组合的设备端线性代数原语，并封装了 NVIDIA 自身的设备库（CUB、cuBLASDx、cuSOLVERDx），将通用线性代数（BLAS 一至三级运算、矩阵分解、求解）与机器人专用运算（空间代数、SO(3)/SE(3) 映射、四元数、位姿误差）统一在同一套接口之下。其核心设计思路是把"使用哪种实现、在哪个执行粒度上运行、内核如何打包组合"视为与具体硬件架构相关的放置决策，通过离线基准测试一次性确定，再以 constexpr 派发表的形式固化进编译期代码，从而使这一决策本身不产生任何运行时开销。

论文强调放置决策至关重要：在三个真实平台（Jetson AGX Orin、Jetson AGX Xavier 以及桌面级 RTX 5090）上、覆盖 396 个测试单元（6 种内核类型 × 11 种问题规模 × 3 种批量区间 × 2 种标量类型）的基准测试显示：针对同一运算，最优与最差实现选择之间的差距中位数达 4.9 倍（最高 81 倍），而在 Orin 与 RTX 5090 之间，396 个推荐放置方案中有 145 个发生变化；在 Orin 与其上一代 Xavier 之间，则有 162 个发生变化。在小到中等规模问题上，GLASS 原生内核相较厂商库（cuBLAS/cuSOLVER）最高快 113.9 倍；在 Orin 上针对 378 个测试单元中的 359 个，相较 PyTorch/JAX 几何平均快 4.3～9.5 倍（个别单元最高快 73 倍）。将 GLASS 集成进两个真实的机器人流水线后，在 Orin 上，一个基于采样的模型预测控制（MPC）回路获得 1.21～1.50 倍加速（过程中还发现并修复了一个既有的数值 bug），一个批量逆运动学求解器获得 1.26 倍加速，同时将设备端数值计算代码量减少 92%（从 355 行降至 29 行）。

## Key technical points (EN)

- Header-only, composable CUDA C++ library spanning thread/warp/block execution scopes, unifying general BLAS operations with robotics-specific spatial-algebra primitives (SO(3)/SE(3), quaternions).
- Architecture-specific implementation/scope/packing decisions are resolved once via offline benchmarking and baked in at compile time via constexpr dispatch tables — zero runtime decision overhead.
- Placement matters: median 4.9x (max 81x) best-vs-worst gap on a given GPU; 145/396 (Orin vs RTX 5090) and 162/396 (Orin vs Xavier) recommended placements change; reusing another GPU's placements costs 4-20% geomean.
- Beats vendor libraries (cuBLAS/cuSOLVER) up to 113.9x on small problem sizes and PyTorch/JAX by 4.3-9.5x geomean (up to 73x) on 359/378 tested cells on Jetson AGX Orin.
- Real pipeline integration results, not just microbenchmarks: 1.21-1.50x speedup in sampling-based MPC (plus a numerical bug fix), and 1.26x speedup with a 92% code-size reduction for batched inverse kinematics.

## Key technical points (ZH)

- 仅含头文件、可组合的 CUDA C++ 库，覆盖线程/warp/block 三级执行粒度，将通用 BLAS 运算与机器人专用的空间代数原语（SO(3)/SE(3)、四元数）统一起来。
- 与具体硬件架构相关的实现方式/执行粒度/内核打包决策，通过离线基准测试一次性确定，并以 constexpr 派发表的形式固化在编译期——运行时不产生任何决策开销。
- 放置方案至关重要：同一 GPU 上最优与最差实现选择之间的差距中位数为 4.9 倍（最高 81 倍）；在 Orin 与 RTX 5090 之间、Orin 与 Xavier 之间，396 个推荐放置方案分别有 145 个和 162 个发生变化；将另一 GPU 的放置方案直接复用，几何平均运行时间增加 4%～20%。
- 在 Jetson AGX Orin 上，小规模问题相较厂商库（cuBLAS/cuSOLVER）最高快 113.9 倍；在 378 个测试单元中的 359 个上，相较 PyTorch/JAX 几何平均快 4.3～9.5 倍（个别单元最高快 73 倍）。
- 不仅有微基准测试，还有真实流水线集成结果：基于采样的 MPC 回路获得 1.21～1.50 倍加速（并顺带修复了一个既有数值 bug），批量逆运动学求解器获得 1.26 倍加速，同时设备端代码量减少 92%。

## Why it matters / what's new (EN)

This KB's edge-ai-silicon bin has mostly covered NPU/accelerator hardware announcements (Qualcomm, MediaTek, FPGA studies); GLASS is a software-layer contribution that quantifies something those hardware-focused entries take for granted — that a kernel tuned for one GPU generation in an edge product line is not safe to reuse on the next generation without re-tuning: reusing one GPU's tuned placements on another adds 4-20% geometric-mean runtime (95th-percentile penalty up to 2.59x) — only 4-5% between the two Jetsons but ~20% for a Jetson policy on the RTX 5090 — while best-vs-worst placement on a single GPU differs by a median 4.9x.

## Why it matters / what's new (ZH)

知识库 edge-ai-silicon 分类下此前的条目大多是关于 NPU/加速器硬件本身的发布（高通、联发科、FPGA 研究）；GLASS 则是一项软件层面的贡献，它量化了这些硬件类条目通常被默认成立的一个假设——即为某一代 GPU 调优的内核，在同一产品线换代到下一代硬件后，若不重新调优就直接复用是不安全的：将某一GPU的调优放置方案直接复用到另一GPU上，几何平均运行时间增加4%～20%（第95百分位最高2.59倍），两款Jetson之间仅4%～5%，Jetson策略搬到RTX 5090上约20%；单一GPU上最优与最差放置差距中位数为4.9倍。

## Images

![Placement heatmap showing which GLASS implementation wins across Jetson AGX Orin, Jetson AGX Xavier, and RTX 5090 | 展示 GLASS 各实现方案在 Jetson AGX Orin、Jetson AGX Xavier 与 RTX 5090 上胜出情况的放置热力图](https://arxiv.org/html/2609.28179v1/tier_heatmap_three_arch.png)
![Cross-architecture policy-transfer penalty matrix — cost of reusing one GPU's tuned placement on another | 跨架构策略迁移代价矩阵——将某一 GPU 的调优放置方案复用到另一 GPU 上的性能损失](https://arxiv.org/html/2609.28179v1/policy_transfer_native_matrix.png)
