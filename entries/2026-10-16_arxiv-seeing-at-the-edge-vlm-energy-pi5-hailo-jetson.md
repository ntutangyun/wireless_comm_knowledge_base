---
id: 2026-10-16_arxiv-seeing-at-the-edge-vlm-energy-pi5-hailo-jetson
date_published: 2026-10-14
date_found: 2026-10-16
technology: edge-ai
type: academic-paper
title_en: "Seeing at the Edge: energy per request and per token for a 2B vision-language model on a Raspberry Pi 5 with Hailo-10H NPU and a Jetson Orin Nano Super"
title_zh: "Seeing at the Edge：2B 视觉语言模型在带 Hailo-10H NPU 的树莓派 5 与 Jetson Orin Nano Super 上的单请求与单 token 能耗"
url: "https://arxiv.org/abs/2610.20136"
source_quality: abstract_only
topics: [energy-measurement, VLM, Raspberry-Pi-5, Hailo-10H, Jetson-Orin-Nano, thermal-throttling]
topic_primary: on-device-inference
topics_secondary: [edge-ai-silicon, edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

The paper characterises total-system energy, latency and thermal behaviour of Qwen2-VL-2B-Instruct and its text-only counterpart on two edge platforms: a Raspberry Pi 5 with a Hailo-10H NPU, and a Jetson Orin Nano Super, each with CPU and accelerator backends. The authors split each request's energy into a fixed part and a part that scales with output length. Because each accelerator uses different quantization and serving software, the study compares complete deployment stacks rather than the chips alone.

Reported findings: (1) offloading to the NPU makes the Pi considerably more energy-efficient for VLM inference, cutting energy per generated token by roughly two-thirds, freeing the host CPU and avoiding the thermal throttling seen with the CPU backend under sustained load; (2) adding an image raises both fixed and per-token energy, but at typical response lengths generating the text costs much more than processing the image; (3) the Jetson GPU has the lower fixed per-request cost and suits short responses, while the Pi NPU has the lower cost per output token and suits longer ones, with the two energy curves crossing at about 40 output tokens.

## Summary (ZH)

论文在两个边缘平台上表征了 Qwen2-VL-2B-Instruct 及其纯文本版本的整机能耗、时延与热行为：带 Hailo-10H NPU 的树莓派 5，以及 Jetson Orin Nano Super，并分别测试 CPU 与加速器后端。作者把每个请求的能耗拆分为固定部分和随输出长度增长的部分。由于各加速器使用不同的量化与服务软件，该研究比较的是完整部署栈，而不仅是芯片本身。

报告的结论：（1）卸载到 NPU 使树莓派运行 VLM 的能效显著提高，每生成 token 的能耗降低约三分之二，同时释放主机 CPU，并避免 CPU 后端在持续负载下出现的热降频；（2）加入图像会同时提高固定能耗和每 token 能耗，但在典型回复长度下，生成文本的开销远大于处理图像；（3）Jetson GPU 的单请求固定开销更低，适合短回复，而树莓派 NPU 的单输出 token 开销更低，适合较长回复，两条能耗曲线在约 40 个输出 token 处交叉。

## Key technical points (EN)

- Platforms: Raspberry Pi 5 + Hailo-10H NPU; Jetson Orin Nano Super; CPU and accelerator backends on each.
- Models: Qwen2-VL-2B-Instruct and the text-only counterpart.
- Method: total-system energy, latency and thermals; energy decomposed into fixed per-request and per-output-token terms.
- Scope caveat from the authors: full stacks (quantization plus serving software) are compared, not silicon alone.
- Pi NPU: about two-thirds less energy per generated token than its CPU backend, no thermal throttling in sustained load.
- Crossover: Jetson cheaper for short responses, Pi NPU cheaper beyond about 40 output tokens.

## Key technical points (ZH)

- 平台：树莓派 5 + Hailo-10H NPU；Jetson Orin Nano Super；各自的 CPU 与加速器后端。
- 模型：Qwen2-VL-2B-Instruct 及其纯文本版本。
- 方法：整机能耗、时延与热行为；能耗分解为单请求固定项与每输出 token 项。
- 作者给出的范围说明：比较的是完整软件栈（量化加服务软件），而非单纯硅片。
- 树莓派 NPU：每生成 token 能耗比其 CPU 后端低约三分之二，持续负载下无热降频。
- 交叉点：短回复 Jetson 更省，超过约 40 个输出 token 后树莓派 NPU 更省。

## Why it matters / what's new (EN)

The authors note that little is known about how much energy VLMs draw on single-board computers with NPU or GPU accelerators, or where that energy goes; this is a measured, stack-level comparison on two such boards, including the point where the preferred platform flips. The numbers are for one 2B model and these two boards, and this record is based on the abstract only.

## Why it matters / what's new (ZH)

作者指出，目前对视觉语言模型在带 NPU 或 GPU 加速器的单板计算机上耗电多少、电能去向如何知之甚少；这项工作在两块此类板卡上给出了实测的、栈级别的对比，并指出了优选平台发生翻转的位置。结论仅针对一个 2B 模型和这两块板卡，本条目仅基于摘要。

## Images

*(No redistributable images for this entry.)*
