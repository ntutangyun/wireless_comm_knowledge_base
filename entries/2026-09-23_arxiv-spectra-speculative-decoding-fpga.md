---
id: 2026-09-23_arxiv-spectra-speculative-decoding-fpga
date_published: 2026-09-21
date_found: 2026-09-23
technology: edge-ai
type: academic-paper
title_en: "SPECTRA: Adaptive Execution of Speculative Decoding on a Runtime-Reconfigurable Tiled Architecture"
title_zh: "SPECTRA：在运行时可重构分块架构上自适应执行推测解码"
url: "https://arxiv.org/abs/2609.24847"
source_quality: full
topics: [speculative-decoding, FPGA, reconfigurable-architecture, edge-LLM-inference]
topic_primary: edge-ai-silicon
topics_secondary: [on-device-inference]
novelty_score: 4
---

## Summary (EN)

Gabriele Tombesi, William Baisi, Je Yang, Elisavet Lydia Alvanaki, Kevin Lee, Michael Lippe, Biruk Seyoum and Luca P. Carloni submitted this paper to arXiv on 21 September 2026; it has been accepted at the IEEE/ACM International Conference on Computer-Aided Design (ICCAD 2026). The paper addresses a hardware-design problem specific to speculative decoding on edge devices: a small draft model proposes several tokens, and a larger target model verifies them all in one batched pass to accelerate autoregressive generation. The catch is that verification sits in an awkward middle ground between the two access patterns edge LLM accelerators are normally built for — the memory-bound, low-arithmetic-intensity general matrix-vector (GEMV) operations of normal token-by-token decoding, and the compute-bound, high-arithmetic-intensity general matrix-matrix (GEMM) operations of prefill. Verification's actual arithmetic intensity varies continuously with the speculation length and the draft model's acceptance rate, so an accelerator tiled/tuned for either GEMV or GEMM alone loses utilization during verification.

SPECTRA's proposed fix is a runtime-reconfigurable tiled architecture: rather than fixing a tile shape and datapath at design time, each tile switches between systolic (GEMM) and vector-lane (GEMV) execution, and across tiles the system selects tile count, kernel partitioning and communication pattern, per kernel, to track the workload's actual arithmetic intensity as it shifts between decode, verify, and prefill phases within a single speculative-decoding pipeline. The authors built and measured a 20-tile FPGA prototype rather than only simulating the design. Reported results are up to 2.09× speedup from tile-level reconfiguration over the best fixed datapath, and up to a further 1.25× from system-level adaptability, on Pythia, SmolLM2 and GPT-2 workloads.

## Summary (ZH)

Gabriele Tombesi、William Baisi、Je Yang、Elisavet Lydia Alvanaki、Kevin Lee、Michael Lippe、Biruk Seyoum 与 Luca P. Carloni 于 2026 年 9 月 21 日向 arXiv 提交本文，论文已被 IEEE/ACM 计算机辅助设计国际会议（ICCAD 2026）接收。论文处理的是边缘设备上推测解码（speculative decoding）所特有的一个硬件设计问题：一个小型草稿模型（draft model）提出若干候选 token，随后由较大的目标模型（target model）通过一次批量前向传播对其全部验证，以加速自回归生成。问题在于，验证阶段恰好处于边缘 LLM 加速器通常针对的两种访存模式之间的尴尬地带——普通逐 token 解码所对应的、访存受限、算术强度较低的通用矩阵-向量运算（GEMV），与预填充阶段所对应的、计算受限、算术强度较高的通用矩阵-矩阵运算（GEMM）。验证阶段的实际算术强度会随推测长度与草稿模型的接受率连续变化，因此，仅针对 GEMV 或 GEMM 单一模式做分块/调优的加速器，在验证阶段都会出现利用率下降。

SPECTRA 提出的解决方案是一种运行时可重构的分块架构：不在设计阶段固定分块形状与数据通路，而是让每个分块在脉动阵列（systolic，用于 GEMM）与向量通道（vector-lane，用于 GEMV）执行模式之间切换，并在分块之间按每个算子（kernel）选择分块数量、算子划分方式与通信模式，以跟踪单条推测解码流水线中解码、验证、预填充三个阶段之间实际算术强度的变化。作者构建并实测了一个 20 分块的 FPGA 原型，而非仅停留在仿真层面。报告结果显示：在 Pythia、SmolLM2 与 GPT-2 工作负载上，相较最优固定数据通路，分块级重构最高带来 2.09 倍加速，系统级自适应能力在此基础上最高再带来 1.25 倍提升。

## Key technical points (EN)

- **Problem**: speculative decoding's verification step has arithmetic intensity that varies continuously between GEMV-like decode and GEMM-like prefill regimes, depending on speculation length and draft-model acceptance rate — a fixed-tiling edge accelerator loses utilization during verification.
- **Mechanism**: each tile switches between systolic (GEMM) and vector-lane (GEMV) execution; across tiles the system selects tile count, kernel partitioning and communication pattern, per kernel, to track the shifting arithmetic-intensity regime across decode/verify/prefill phases.
- **Evaluation**: real 20-tile FPGA prototype (not simulation-only).
- **Headline numbers**: up to 2.09× speedup from tile-level reconfiguration over the best fixed datapath; up to a further 1.25× from system-level adaptability (Pythia, SmolLM2, GPT-2 workloads).
- **Venue**: accepted at ICCAD 2026 (IEEE/ACM International Conference on Computer-Aided Design).

## Key technical points (ZH)

- **问题背景**：推测解码的验证阶段，其算术强度会随推测长度与草稿模型接受率在类 GEMV 的解码模式与类 GEMM 的预填充模式之间连续变化——固定分块设计的边缘加速器在验证阶段会出现利用率下降。
- **机制**：每个分块在脉动阵列（GEMM）与向量通道（GEMV）执行之间切换；跨分块时，系统按每个算子（kernel）选择分块数量、算子划分方式与通信模式，以跟踪解码、验证、预填充各阶段之间不断变化的算术强度。
- **评测方式**：真实的 20 分块 FPGA 原型（而非仅仿真）。
- **主要数据**：相较最优固定数据通路，分块级重构最高带来 2.09 倍加速；系统级自适应能力最高再带来 1.25 倍提升（Pythia、SmolLM2、GPT-2 工作负载）。
- **发表会议**：已被 ICCAD 2026（IEEE/ACM 计算机辅助设计国际会议）接收。

## Why it matters / what's new (EN)

This KB already covers speculative decoding from several algorithmic angles (e.g. PELM's DVFS + speculative decoding on Jetson AGX Orin/Orin Nano, 2026-09-10_arxiv-pelm-power-efficient-on-device-llm-dvfs), but SPECTRA attacks the problem from the hardware-architecture side rather than the scheduling/algorithm side: it identifies verification as a genuinely distinct, time-varying workload regime that neither a decode-optimized nor a prefill-optimized fixed accelerator design serves well, and backs the fix with a measured FPGA prototype rather than an analytical model. This is a new mechanism in this KB's edge-ai-silicon coverage — reconfigurable tiling tuned to a speculative-decoding-specific access pattern — rather than an incremental variant of existing accelerator designs.

## Why it matters / what's new (ZH)

本知识库已从多个算法角度覆盖推测解码（例如 PELM 在 Jetson AGX Orin/Orin Nano 上结合 DVFS 与推测解码，见 2026-09-10_arxiv-pelm-power-efficient-on-device-llm-dvfs），但 SPECTRA 是从硬件架构侧而非调度/算法侧切入该问题：它指出验证阶段是一种真正独立的、随时间变化的工作负载模式，无论是针对解码优化还是针对预填充优化的固定加速器设计都无法很好地服务于它，并以实测 FPGA 原型而非分析模型来支撑其方案。这为本知识库的边缘 AI 芯片报道带来了一种新机制——针对推测解码特有访存模式量身定制的可重构分块——而非现有加速器设计的渐进式变体。

## Images

![Roofline motivation: verification's arithmetic intensity falls between GEMV-like decode and GEMM-like prefill | Roofline 动机图：验证阶段的算术强度介于类 GEMV 解码与类 GEMM 预填充之间](https://arxiv.org/html/2609.24847v1/figure/roofline_motivation_draft2.png)
![SPECTRA SoC architecture overview | SPECTRA SoC 架构总览](https://arxiv.org/html/2609.24847v1/figure/archi_soc.png)
