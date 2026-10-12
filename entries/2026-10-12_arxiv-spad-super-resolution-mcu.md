---
id: 2026-10-12_arxiv-spad-super-resolution-mcu
date_published: 2026-10-06
date_found: 2026-10-12
type: academic-paper
technology: edge-ai
title_en: "On-Device Super-Resolution Imaging for a Low-Cost SPAD Array on a 640-KB-SRAM Microcontroller"
title_zh: "面向低成本 SPAD 阵列的设备端超分辨率成像：在 640 KB SRAM 微控制器上的实现"
url: "https://arxiv.org/abs/2610.09098"
source_quality: abstract_only
topics: [super-resolution, SPAD, microcontroller, INT8-quantization, time-of-flight]
topic_primary: edge-ai-silicon
topics_secondary: [on-device-inference]
novelty_score: 4
---

## Summary (EN)

Zang, Gyongy and Davies (University of Edinburgh) present a deep-learning framework for the consumer-grade VL53L9CX single-photon avalanche diode (SPAD) array time-of-flight sensor, enhancing the low-resolution depth and intensity imagery it produces. The system performs 4x spatial super-resolution, reconstructing 216x168 depth and intensity images simultaneously from an initial 54x42 raw measurement, using separate reconstruction branches for intensity and for high-resolution depth. The authors evaluate several efficient super-resolution network architectures (SAFM, SPAN, and RLFN) to select a design suited to extreme resource constraints.

After architecture selection, the chosen network is converted to ONNX format, INT8-quantized, and compiled to C code for deployment on an STM32H563ZI microcontroller — a bare-metal target with 640 KB of SRAM and no operating system or GPU. The authors state this is the first demonstration of a compact deep-learning super-resolution model running on a low-cost bare-metal microcontroller for a consumer-grade, low-resolution SPAD sensor.

## Summary (ZH)

Zang、Gyongy 与 Davies（爱丁堡大学）针对消费级 VL53L9CX 单光子雪崩二极管（SPAD）阵列飞行时间（ToF）传感器提出了一个深度学习框架，用于增强其产生的低分辨率深度与强度图像。该系统执行 4 倍空间超分辨率，从初始的 54×42 原始测量数据同时重建出 216×168 的深度图和强度图，分别使用独立的重建分支处理强度与高分辨率深度。作者评估了多种高效超分辨率网络架构（SAFM、SPAN、RLFN），以选出适合在极度资源受限条件下运行的设计。

完成架构选型后，所选网络被转换为 ONNX 格式，进行 INT8 量化，并编译为 C 代码，部署在 STM32H563ZI 微控制器上——这是一个裸机目标平台，配备 640 KB SRAM，没有操作系统也没有 GPU。作者称这是首次在面向消费级低分辨率 SPAD 传感器的低成本裸机微控制器上，展示一个紧凑的深度学习超分辨率模型的运行。

## Key technical points (EN)

- Task: 4x spatial super-resolution reconstructing 216x168 depth + intensity images from 54x42 raw SPAD measurements, via separate intensity and depth reconstruction branches.
- Evaluated efficient SR network architectures: SAFM, SPAN, RLFN, to find one compact enough for the target hardware.
- Deployment pipeline: ONNX conversion -> INT8 quantization -> generated C code -> STM32H563ZI microcontroller (640 KB SRAM, bare-metal, no OS/GPU).
- The authors' own claim: first demonstration of a compact DL super-resolution model on a low-cost bare-metal MCU for a consumer-grade low-resolution SPAD sensor.

## Key technical points (ZH)

- 任务：4 倍空间超分辨率，从 54×42 的原始 SPAD 测量数据重建出 216×168 的深度与强度图像，使用独立的强度与深度重建分支。
- 评估了多种高效超分辨率网络架构：SAFM、SPAN、RLFN，以找出足够紧凑、适合目标硬件的设计。
- 部署流程：ONNX 转换 → INT8 量化 → 生成 C 代码 → 部署于 STM32H563ZI 微控制器（640 KB SRAM，裸机运行，无操作系统/GPU）。
- 作者自身的主张：这是首次在面向消费级低分辨率 SPAD 传感器的低成本裸机微控制器上展示紧凑型深度学习超分辨率模型的运行。

## Why it matters / what's new (EN)

This entry targets a plain microcontroller (no dedicated AI accelerator, 640 KB SRAM) for SPAD time-of-flight sensing. It is a concrete example of a quantized vision model being made to fit an extremely constrained bare-metal target, with concrete deployment detail (INT8, 640 KB SRAM, named MCU part).

## Why it matters / what's new (ZH)

本条目的目标是一个普通微控制器（没有专用 AI 加速器，640 KB SRAM），用于 SPAD 飞行时间传感。这是一个将量化视觉模型适配到极度受限裸机目标的具体案例，并给出具体部署细节（INT8、640 KB SRAM、具体 MCU 型号）。
