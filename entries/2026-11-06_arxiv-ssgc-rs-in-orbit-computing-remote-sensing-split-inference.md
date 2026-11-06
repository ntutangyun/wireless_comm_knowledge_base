---
id: 2026-11-06_arxiv-ssgc-rs-in-orbit-computing-remote-sensing-split-inference
date_published: 2026-10-22
date_found: 2026-11-06
technology: edge-ai
type: academic-paper
title_en: "In-orbit computing for remote sensing: choosing between onboard inference, semantic token delivery and space-ground split inference under a limited downlink"
title_zh: "面向遥感的在轨计算：在有限下行链路下，在星上推理、语义令牌传输与星地协同拆分推理之间取舍"
url: "https://arxiv.org/abs/2610.30693"
source_quality: full
topics: [in-orbit-computing, split-inference, semantic-communication, satellite-downlink, remote-sensing]
topic_primary: compute-offloading
topics_secondary: [task-oriented-communication]
novelty_score: 3
---

## Summary (EN)

This article proposes a semantic-aware space-ground collaborative remote sensing framework (SSGC-RS) that treats the amount of processing done in orbit as a decision variable, set by the task (a fast decision, a reusable scene representation, or a full inference result) and by resources (onboard compute, energy, and how much data fits in the contact window). Link computed over: a modelled LEO-to-ground link (12 GHz Ku-band, 600 km altitude, 10 degree minimum elevation, atmospheric attenuation); the paper does not state explicitly that the results are simulated, but the constellation geometry, link parameters and energy budgets point to a modelled evaluation.

Three operating modes are described: (1) onboard task inference, where the satellite runs the full model and downlinks task outputs; (2) semantic representation delivery, where the scene is compressed into tokens (a 32x32 grid, 1,024 tokens from a 1,024-entry codebook) and decoded on the ground; (3) space-ground split inference, where the satellite runs early layers and sends intermediate features. In the land-cover case study (WHDLD, 4,940 images of 256x256 pixels, 6 classes), at 0.1 bpp sending the onboard segmentation map gives mIoU 0.60 (BPG) and 0.54 (JPEG2000), versus 0.28 and 0.18 when the compressed raw image is segmented on the ground (uncompressed upper bound 0.633). For semantic token delivery, the cited SQ-GAN scheme reaches LPIPS 0.261 at 0.078 bpp, against about 0.15 bpp for VQ-GAN, 0.21 for BPG and 0.55 for JPEG2000 at similar quality. In the split-inference scenario (12 satellites, one ground station at 0.8 TFLOPs/s, about 24 tasks per satellite), fully onboard latency falls from 23.7 s to 8.8 s as onboard compute rises from 25 to 70 GFLOPs/s, fully ground processing takes about 13.2, 12.2 and 11.4 s at 40, 60 and 80 MHz, and collaborative inference reaches 6.7 s at 80 MHz.

## Summary (ZH)

文章提出语义感知的星地协同遥感框架（SSGC-RS），把在轨处理量作为决策变量，由任务（快速决策、可复用的场景表示或完整推理结果）和资源（星上算力、能量、接触窗口内可传数据量）共同决定。所经链路：建模的 LEO 到地面链路（12 GHz Ku 频段、600 km 轨道高度、最小仰角 10 度、含大气衰减）；论文未明确说明结果为仿真，但星座几何、链路参数和能量预算表明为建模评估。

文中描述三种工作模式：（1）星上任务推理，卫星运行完整模型并下传任务输出；（2）语义表示传输，场景被压缩为令牌（32x32 网格，取自 1,024 项码本的 1,024 个令牌），地面解码；（3）星地协同拆分推理，卫星运行前几层并发送中间特征。在土地覆盖案例（WHDLD，4,940 幅 256x256 图像，6 类）中，0.1 bpp 下发送星上分割图的 mIoU 为 0.60（BPG）和 0.54（JPEG2000），而发送压缩原图并在地面分割仅为 0.28 和 0.18（未压缩上界 0.633）。语义令牌传输中，所引用的 SQ-GAN 方案在 0.078 bpp 达到 LPIPS 0.261，相近质量下 VQ-GAN 约需 0.15 bpp，BPG 约 0.21，JPEG2000 约 0.55。在拆分推理场景（12 颗卫星、一个 0.8 TFLOPs/s 地面站、每星约 24 个任务）中，全星上时延随星上算力由 25 升至 70 GFLOPs/s 从 23.7 s 降到 8.8 s，全地面处理在 40、60、80 MHz 下约为 13.2、12.2、11.4 s，协同推理在 80 MHz 下为 6.7 s。

## Key technical points (EN)

- Decision variables: onboard semantic depth and downlink payload form, set jointly by task context and resource context.
- Mode 1 trade-off: irreversible, since information discarded onboard cannot be recovered on the ground.
- Mode 3: split point jointly sets onboard computation, downlink volume and ground workload; the paper contrasts coarse-grained offloading with fine-grained resource-aware model partitioning.
- Case-study models: ResNet-50 backbone with LoG-CAN head (mIoU); SQ-GAN token codec compared against VQ-GAN, BPG and JPEG2000 (LPIPS).
- Mode 3 setup: 12 LEO satellites, bandwidth sweep 40/60/80 MHz, onboard compute sweep 25 to 70 GFLOPs/s, 20 W maximum transmit power, 200 J energy budget per scheduling period.
- Reported latency reductions of up to 54.5% (versus onboard) and 47.9% (versus ground) do not obviously match the single-point latencies above; the conditions behind the percentages are not clear from the text, so the raw latencies are the safer figures.
- Stated open challenges: trustworthy onboard semantic extraction with uncertainty estimates, dynamic joint orchestration of mode, split point, bandwidth, power and compute under changing contact windows (including partial reception), and constellation-scale model and codebook consistency.

## Key technical points (ZH)

- 决策变量：星上语义深度与下行载荷形式，由任务上下文与资源上下文共同决定。
- 模式 1 的取舍：不可逆，星上丢弃的信息在地面无法恢复。
- 模式 3：拆分点同时决定星上计算量、下行数据量和地面负载；论文对比了粗粒度卸载与细粒度、资源感知的模型划分。
- 案例模型：ResNet-50 骨干加 LoG-CAN 头（mIoU）；SQ-GAN 令牌编解码与 VQ-GAN、BPG、JPEG2000 比较（LPIPS）。
- 模式 3 设置：12 颗 LEO 卫星，带宽扫描 40/60/80 MHz，星上算力扫描 25 至 70 GFLOPs/s，最大发射功率 20 W，每个调度周期能量预算 200 J。
- 论文报告的时延降幅最高 54.5%（对比全星上）和 47.9%（对比全地面），与上述单点时延并不明显吻合，文本未说明百分比所依据的条件，因此原始时延数字更可靠。
- 论文列出的开放问题：带不确定性估计的可信星上语义提取；在接触窗口变化（含部分接收）下对模式、拆分点、带宽、功率与算力的动态联合编排；星座规模下模型与码本的一致性。

## Why it matters / what's new (EN)

The article's stated starting point is that the conventional "transmit-then-process" architecture is strained by intermittent satellite-ground connectivity, constrained downlink bandwidth and limited onboard compute. It is a framework-plus-case-study piece rather than a full systems paper: the case studies illustrate each mode separately, and no real satellite hardware or link is reported.

## Why it matters / what's new (ZH)

文章的出发点是：传统"先传后处理"架构受限于间歇的星地连接、有限的下行带宽和有限的星上算力。这是框架加案例研究类文章，而非完整的系统论文：各案例分别说明各模式，未报告真实卫星硬件或链路。

## Images

*(No redistributable images for this entry.)*
