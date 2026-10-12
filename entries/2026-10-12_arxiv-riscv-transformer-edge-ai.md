---
id: 2026-10-12_arxiv-riscv-transformer-edge-ai
date_published: 2026-10-06
date_found: 2026-10-12
type: academic-paper
technology: edge-ai
title_en: "A Framework for Accelerating Transformer Inference on RISC-V for Edge AI"
title_zh: "面向边缘 AI 的 RISC-V Transformer 推理加速框架"
url: "https://arxiv.org/abs/2610.08688"
source_quality: abstract_only
topics: [RISC-V, transformer-inference, instruction-set-extensions, IoT, ASIC-FPGA]
topic_primary: edge-ai-silicon
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

Authors Ajay Kumar M, Vishnu PS, Yike Li, Shreejith Shanker, Dimitrios S. Nikolopoulos, Bo Ji, Hans Vandierendonck and Deepu John present a framework for accelerating transformer-based compact language models on resource-constrained IoT devices using RISC-V instruction-set extensions. The work covers five compact models chosen for architectural variety and edge-deployment relevance: BERT-Tiny, MobileBERT, MiniLM, Electra, and DeBERTa. The authors derive lightweight instruction-set extensions tailored to the specific, "non-obvious" computational patterns these models exercise, including a specialized instruction that accelerates batch matrix-multiplication address generation, reported to deliver a 15.39-21.74% performance improvement at modest hardware overhead (6.79% area, 2.33% power at the ASIC level for that instruction alone).

End-to-end, the framework delivers inference speedups of up to 2.19x on the Synopsys trv32p3f RISC-V core across the five evaluated models. The authors report the full design's overhead as 32.94% area at 75 MHz on an FPGA implementation, and 21.08% area overhead at 250 MHz on a TSMC 28nm ASIC implementation.

## Summary (ZH)

作者 Ajay Kumar M、Vishnu PS、Yike Li、Shreejith Shanker、Dimitrios S. Nikolopoulos、Bo Ji、Hans Vandierendonck 和 Deepu John 提出了一个框架，通过 RISC-V 指令集扩展，在资源受限的物联网设备上加速基于 Transformer 的紧凑语言模型推理。该工作覆盖五个因架构多样性和边缘部署相关性而选定的紧凑模型：BERT-Tiny、MobileBERT、MiniLM、Electra 和 DeBERTa。作者针对这些模型所表现出的特定、"非显而易见"的计算模式，设计了轻量级指令集扩展，其中一条专用指令用于加速批量矩阵乘法的地址生成，据报告可带来 15.39%～21.74% 的性能提升，而硬件开销较小（仅就该指令而言，ASIC 层面面积开销为 6.79%，功耗开销为 2.33%）。

端到端来看，该框架在 Synopsys trv32p3f RISC-V 核心上，针对五个被评估模型实现了最高 2.19 倍的推理加速。作者报告称，完整设计方案在 FPGA 实现中于 75 MHz 下的面积开销为 32.94%，在 TSMC 28 纳米 ASIC 实现中于 250 MHz 下的面积开销为 21.08%。

## Key technical points (EN)

- Target: accelerating transformer-based compact LMs (BERT-Tiny, MobileBERT, MiniLM, Electra, DeBERTa) on resource-constrained IoT devices via RISC-V ISA extensions.
- Specialized instruction for batch matrix-multiplication address generation: 15.39-21.74% performance gain at 6.79% area / 2.33% power ASIC overhead (for that instruction).
- End-to-end inference speedup: up to 2.19x on the Synopsys trv32p3f RISC-V core across the five models.
- Full-design overhead: 32.94% area at 75 MHz (FPGA); 21.08% area at 250 MHz (TSMC 28nm ASIC).

## Key technical points (ZH)

- 目标：通过 RISC-V 指令集扩展，在资源受限的物联网设备上加速基于 Transformer 的紧凑语言模型（BERT-Tiny、MobileBERT、MiniLM、Electra、DeBERTa）推理。
- 专用的批量矩阵乘法地址生成指令：带来 15.39%～21.74% 的性能提升，ASIC 层面面积开销 6.79%、功耗开销 2.33%（仅该指令）。
- 端到端推理加速：在 Synopsys trv32p3f RISC-V 核心上，针对五个模型实现最高 2.19 倍加速。
- 完整设计开销：FPGA 实现于 75 MHz 下面积开销 32.94%；TSMC 28 纳米 ASIC 实现于 250 MHz 下面积开销 21.08%。

## Why it matters / what's new (EN)

This paper targets the open RISC-V instruction set itself with custom, model-pattern-specific extensions, giving concrete area/power/speedup trade-off numbers at both FPGA and ASIC (TSMC 28nm) implementation levels.

## Why it matters / what's new (ZH)

本文针对开放的 RISC-V 指令集本身，设计了针对特定模型计算模式的定制扩展，并在 FPGA 和 ASIC（TSMC 28 纳米）两种实现层面给出了具体的面积/功耗/加速比权衡数据。
