---
id: 2026-09-24_arxiv-npu-quantized-vehicle-detection-pynq-fpga
date_published: 2026-09-21
date_found: 2026-09-24
type: academic-paper
technology: edge-ai
title_en: "NPU Accelerator: Quantized Real-Time Vehicle Detection on PYNQ-Z1 Using FINN"
title_zh: "基于 FINN 的量化实时车辆检测 NPU 加速器（PYNQ-Z1 平台）"
url: "https://arxiv.org/abs/2609.24757"
source_quality: full
topics: [edge-ai-silicon, FPGA, quantization, object-detection, YOLO]
topic_primary: edge-ai-silicon
topics_secondary: [edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

Engineers at Intigia (Daniel Gutiérrez, Antonio Cuesta, Jorge Fe, Bruno Gutierrez) with DFKI (Rashed Al Koutayni) present the design and on-board validation of a neural-processing-unit accelerator for real-time vehicle detection on the severely resource-constrained Xilinx Zynq XC7Z020 device on a PYNQ-Z1 board. The paper frames the problem as four simultaneously competing constraints — throughput (>30 FPS), energy efficiency (>7 FPS/W), latency (<50 ms) and detection accuracy (>0.55 mAP@0.5 on Pascal VOC) — and builds toward a configuration that satisfies all four at once, rather than optimizing any single metric.

The pipeline trains a lightweight YOLO-derived detector (LP-YOLO, ~0.35M parameters) in PyTorch using Brevitas for quantization-aware training (QAT), exports it via QONNX, and compiles it with FINN's dataflow compiler into a streaming FPGA accelerator (Vivado synthesis → place-and-route → bitstream), followed by physical benchmarking on the real board. A key finding is that QAT is not optional at this precision: naive post-training quantization loses ~0.17 mAP at 4-bit precision on the YOLOv3-tiny baseline, versus ~0.006 mAP loss with QAT. The final "LP-YOLO Slim" configuration — 256x256 input, w2a4 mixed-precision (2-bit weights, 4-bit activations), running at 142.86 MHz — is the only evaluated configuration that clears all four target KPIs simultaneously: 35.66 FPS throughput, 12.25 FPS/W efficiency, 45.11 ms programmable-logic latency (49.77 ms end-to-end), 2.91 W power draw, and 0.594 mAP@0.5. For comparison, the full YOLOv3-tiny (~8.66M parameters, ~34.7 Mbit of weights) was judged impractical for fully on-chip streaming; a custom reduced YOLOv3-tiny reference was implemented instead and ran at 12.35 FPS / 101.02 ms / 0.761 mAP, missing the throughput and latency KPIs.

## Summary (ZH)

来自 Intigia 的工程师（Daniel Gutiérrez、Antonio Cuesta、Jorge Fe、Bruno Gutierrez）与 DFKI 的 Rashed Al Koutayni 共同提出了一款神经处理单元加速器的设计与实机验证，用于在资源极为受限的 Xilinx Zynq XC7Z020（PYNQ-Z1 开发板）上实现实时车辆检测。论文将问题定义为四个相互竞争、需要同时满足的约束——吞吐量（>30 FPS）、能效（>7 FPS/W）、时延（<50 毫秒）以及检测精度（Pascal VOC 上 mAP@0.5 >0.55）——并致力于找到一个能同时满足这四项指标的配置，而不是只优化单一指标。

该流程使用 Brevitas 在 PyTorch 中训练一个轻量级的 YOLO 衍生检测器（LP-YOLO，约 35 万参数），进行量化感知训练（QAT），通过 QONNX 导出，再用 FINN 的数据流编译器将其编译为流式 FPGA 加速器（经 Vivado 综合、布局布线、生成比特流），最后在真实开发板上进行物理性能测试。一个关键发现是：在这一精度下 QAT 并非可有可无——在 YOLOv3-tiny 基线上，朴素的训练后量化在 4 比特精度下会损失约 0.17 mAP，而采用 QAT 后仅损失约 0.006 mAP。最终的 "LP-YOLO Slim" 配置——256×256 输入，w2a4 混合精度（2 比特权重、4 比特激活），运行频率 142.86 MHz——是所有评估配置中唯一同时满足全部四项目标 KPI 的：吞吐量 35.66 FPS、能效 12.25 FPS/W、可编程逻辑时延 45.11 毫秒（端到端 49.77 毫秒）、功耗 2.91 瓦、mAP@0.5 达到 0.594。相比之下，完整版 YOLOv3-tiny 模型（约 866 万参数、约 34.7 Mbit 权重）被判定不适合完全在片上以流式方式实现；作者转而实现了一个定制的精简版 YOLOv3-tiny 作为参照，其运行结果为 12.35 FPS、101.02 毫秒、0.761 mAP，未能达到吞吐量与时延 KPI。

## Key technical points (EN)

- Four simultaneous hard KPIs (throughput, energy efficiency, latency, accuracy) rather than a single headline number — the paper explicitly reports which configurations fail each constraint.
- QAT vs. naive post-training quantization is quantified directly (~0.006 mAP vs ~0.17 mAP loss at 4-bit), a concrete data point for anyone deciding whether QAT is worth the extra training complexity at this precision.
- Full physical toolchain reported end-to-end: PyTorch/Brevitas → QONNX → FINN dataflow compiler → Vivado bitstream → on-board PYNQ-Z1 measurement, not a simulated/estimated result.
- w2a4 (2-bit weight / 4-bit activation) mixed precision is aggressive even by edge-quantization standards; separately, LP-YOLO's ~1.4 Mbit of 4-bit weights (the w4a4, 320x320 variant) fits comfortably in on-chip BRAM.
- The full YOLOv3-tiny being judged impractical for fully on-chip streaming (its custom reduced reference still missed the throughput/latency KPIs) is itself informative — it quantifies the size ceiling for this class of low-cost FPGA board.

## Key technical points (ZH)

- 四项硬性 KPI 需要同时满足（吞吐量、能效、时延、精度），而非单一指标——论文明确报告了哪些配置未能满足每一项约束。
- 直接量化对比了 QAT 与朴素训练后量化的差异（4 比特下分别损失约 0.006 mAP 与约 0.17 mAP），为是否值得在该精度下投入额外的 QAT 训练复杂度提供了具体依据。
- 报告了完整的物理工具链：PyTorch/Brevitas → QONNX → FINN 数据流编译器 → Vivado 比特流 → PYNQ-Z1 实机测量，而非仿真或估算结果。
- w2a4（2 比特权重/4 比特激活）混合精度即使按边缘量化的标准衡量也相当激进；另外，LP-YOLO（w4a4、320×320 变体）约 1.4 Mbit 的 4 比特权重可以很好地放入片上 BRAM。
- 完整版 YOLOv3-tiny 被判定不适合完全在片上以流式方式实现（其定制的精简版参照仍未达到吞吐量/时延 KPI）这一事实本身也很有信息量——它量化了这类低成本 FPGA 开发板所能承载的模型规模上限。

## Why it matters / what's new (EN)

The KB's edge-ai-silicon bin has largely covered incumbent NPU/accelerator vendor announcements (Qualcomm, MediaTek, Jetson); this paper adds a FINN/PYNQ dataflow design point alongside the bin's existing FPGA accelerator studies (e.g., WARD, SPECTRA). It is a full, physically-validated design study on the resource-constrained Zynq XC7Z020 (PYNQ-Z1) — useful as a concrete reference point for how far aggressive (2-bit weight) quantization plus a streaming dataflow architecture can push real-time detection on genuinely tiny hardware, with all four competing constraints reported rather than a single cherry-picked metric.

## Why it matters / what's new (ZH)

知识库中 edge-ai-silicon 分类下的条目此前大多是关于现有 NPU/加速器厂商（高通、联发科、Jetson）的产品发布；这篇论文在该分类下已有的 FPGA 加速器研究（如 WARD、SPECTRA）之外，新增了一个基于 FINN/PYNQ 数据流架构的设计点。它是一项在资源受限的 Zynq XC7Z020（PYNQ-Z1）平台上完成的、经过物理验证的完整设计研究——为"激进的 2 比特权重量化配合流式数据流架构，在真正微型的硬件上能把实时检测推到什么程度"提供了一个具体的参考点，并且报告了全部四项相互竞争的约束，而非只挑选一个指标展示。
