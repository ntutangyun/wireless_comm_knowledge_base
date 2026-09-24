---
id: 2026-09-24_arxiv-cross-architecture-distillation-edge-flood-segmentation
date_published: 2026-09-17
date_found: 2026-09-24
type: academic-paper
technology: edge-ai
title_en: "Cross-Architecture Foundation-Model Distillation for Edge Flood Segmentation"
title_zh: "面向边缘洪水分割的跨架构基础模型蒸馏"
url: "https://arxiv.org/abs/2609.20441"
source_quality: full
topics: [edge-model-efficiency, knowledge-distillation, geospatial-foundation-model, quantization, on-board-inference]
topic_primary: edge-model-efficiency
topics_secondary: [edge-ai-silicon]
novelty_score: 4
---

## Summary (EN)

Fabian Schmalstieg, Karsten Müller and Wojciech Samek of the Fraunhofer Heinrich Hertz Institute (Berlin) distill Prithvi-EO-2.0, a 300-million-parameter geospatial foundation model fine-tuned on the 252 manually labeled Sen1Floods11 scenes, into a 0.7-million-parameter EfficientViT-B0 student — a roughly 430x parameter reduction — for edge deployment close to the sensor (tested on a Jetson Xavier NX; on-board targets not evaluated) rather than in a data center. The key design idea is to use the frozen fine-tuned teacher as a pseudo-labeler on additional *unlabeled* Sentinel-2 tiles pulled around real flood events from the Global Disaster Alert and Coordination System (GDACS), letting the student's effective training set grow past the fixed 252-scene manual-annotation budget without any new human labeling. The paper separates two questions cleanly: at a matched 252-scene budget, is teacher-supervised training a viable substitute for training directly on the human labels (yes — it's competitive, and improves out-of-distribution STURM-Flood performance in all five tested configurations (four surviving Holm correction), with a geometry-matched control showing the acquisition geometry, not just the label source, explains part of the gain); and does scaling the teacher-supervised pool to 2,500 scenes narrow the student-teacher gap (yes on STURM-Flood, where the student matches the teacher's mIoU; less so on WorldFloods-v2, where the student remains below the teacher).

After activation replacement (ReLU6) and quantization-aware training, the deployed student compiles to a 1.5 MB INT8 TensorRT engine that runs on a Jetson Xavier NX at 5.57 ms of GPU compute per 512x512 image with roughly 14 MB of runtime device memory (plus ~0.4 ms of host-device transfer) — aimed at the memory-constrained hardware relief organizations use (ruggedized laptops, embedded GPUs, FPGAs), for which a 300M FP32 ViT is, per the authors, a poor fit; only the Jetson Xavier NX was actually tested. The authors are explicit that a fixed modified-NDWI spectral threshold is competitive on the two clean external benchmarks, so they present those external results as evidence of generalization rather than proof that the learned model beats a simple spectral rule.

## Summary (ZH)

弗劳恩霍夫海因里希·赫兹研究所（柏林）的 Fabian Schmalstieg、Karsten Müller 和 Wojciech Samek 将 Prithvi-EO-2.0——一个在 252 个人工标注的 Sen1Floods11 场景上微调过的 3 亿参数地理空间基础模型——蒸馏为一个 70 万参数的 EfficientViT-B0 学生模型，参数量减少约 430 倍，目标是在贴近传感器的边缘侧部署（已在 Jetson Xavier NX 上测试；未评估机载目标平台），而非数据中心。其关键设计思路是：将已微调、参数冻结的教师模型用作伪标注器，为从全球灾害预警与协调系统（GDACS）围绕真实洪水事件抓取的额外*未标注* Sentinel-2 影像块生成标签，从而让学生模型的有效训练集在不增加任何人工标注的情况下，突破 252 个场景的固定标注预算。论文清晰地区分了两个问题：在同样 252 个场景的预算下，教师监督训练能否替代直接在人工标签上训练（可以——效果相当，且在全部五个测试配置中均提升了分布外的 STURM-Flood 性能（其中四个经 Holm 校正仍显著），一个几何匹配的对照实验表明，采集几何本身、而不仅仅是标签来源，也解释了部分增益）；以及把教师监督训练池扩展到 2500 个场景是否能缩小师生差距（在 STURM-Flood 上可以，学生的 mIoU 追平了教师；但在 WorldFloods-v2 上效果较弱，学生仍低于教师）。

经过激活函数替换（ReLU6）和量化感知训练后，部署版学生模型被编译为一个 1.5MB 的 INT8 TensorRT 引擎，在 Jetson Xavier NX 上处理一张 512×512 图像仅需 5.57 毫秒的 GPU 计算时间，运行时设备内存约 14MB（另加约 0.4 毫秒的主机-设备传输开销）——面向救灾组织实际使用的内存受限硬件（加固型笔记本、嵌入式 GPU、FPGA）；作者指出，FP32 精度的 3 亿参数 ViT 模型并不适合这类硬件；实际测试仅在 Jetson Xavier NX 上进行。作者也明确指出，一个固定的改进型归一化差异水体指数（MNDWI）光谱阈值在两个干净的外部基准上同样具有竞争力，因此他们将这些外部结果作为泛化能力的证据，而非"学习模型优于简单光谱规则"的证明。

## Key technical points (EN)

- Teacher-as-pseudo-labeler pattern: a frozen fine-tuned 300M-parameter foundation model generates labels for unlabeled satellite tiles, decoupling training-set growth from the fixed manual-annotation budget (252 Sen1Floods11 scenes).
- ~430x parameter compression (300M → 0.7M) with a full physical deployment path: ReLU6 activation swap → quantization-aware training → INT8 TensorRT engine.
- Measured, not estimated, edge numbers: 1.5 MB engine, 5.57 ms GPU compute/image, ~14 MB runtime memory, 0.4 ms host-device transfer, on a real Jetson Xavier NX.
- Careful methodological honesty: a geometry-matched control isolates how much of the "teacher supervision helps" effect is actually acquisition-geometry overlap rather than label quality, and a spectral-threshold (MNDWI) baseline is used to contextualize external-benchmark gains rather than oversell them.
- Two flood benchmarks used for out-of-distribution testing (STURM-Flood, WorldFloods-v2) show the student closes the gap on one but not the other — an honest limits-of-scaling result rather than a uniform win.

## Key technical points (ZH)

- "教师作为伪标注器"模式：一个冻结的、已微调的 3 亿参数基础模型为未标注卫星影像块生成标签，使训练集规模的增长与固定的人工标注预算（252 个 Sen1Floods11 场景）脱钩。
- 约 430 倍的参数压缩（3 亿 → 70 万），并配有完整的物理部署路径：ReLU6 激活函数替换 → 量化感知训练 → INT8 TensorRT 引擎。
- 边缘端数字均为实测而非估算：1.5MB 引擎体积、每张图像 5.57 毫秒 GPU 计算时间、约 14MB 运行时内存、0.4 毫秒主机-设备传输，均在真实的 Jetson Xavier NX 上测得。
- 方法论上的严谨态度：一个几何匹配的对照实验用于分离"教师监督有帮助"这一效果中，究竟有多少来自采集几何的重叠、而非标签质量本身；同时用一个光谱阈值（MNDWI）基线来对外部基准上的增益做背景化解读，而非夸大其效果。
- 使用两个洪水基准（STURM-Flood、WorldFloods-v2）做分布外测试，结果显示学生模型在其中一个上追平了教师、但在另一个上未能追平——这是一个诚实呈现扩展方法局限性的结果，而非"全面获胜"的结论。

## Why it matters / what's new (EN)

This is a clean, rigorously-controlled example of the "distill a geospatial/Earth-observation foundation model for on-board deployment" pattern (the paper cites ESA's Phi-sat missions as an example of on-board EO inference). It is a strong addition to the edge-model-efficiency bin because it reports the full chain — teacher fine-tuning, pseudo-label generation and scaling, ViT-to-EfficientViT (hybrid conv/linear-attention) distillation, quantization, and real embedded-GPU measurement — with explicit, disclosed limits on where the approach does and doesn't close the gap to the teacher, rather than a single flattering benchmark number.

## Why it matters / what's new (ZH)

这是"为机载部署而蒸馏地理空间/对地观测基础模型"这一模式的一个干净、方法严谨的范例（论文引用了欧空局 Phi-sat 系列任务作为机载对地观测推理的例子）。它对 edge-model-efficiency 分类是一个有力的补充，因为它报告了完整的链条——教师模型微调、伪标签生成与规模扩展、ViT 到 EfficientViT（混合卷积/线性注意力）蒸馏、量化，以及真实嵌入式 GPU 上的实测——并明确、如实地披露了该方法在哪些方面能够、哪些方面不能完全追平教师模型，而不是只展示一个好看的基准数字。
