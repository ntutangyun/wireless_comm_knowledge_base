---
id: 2026-11-24_arxiv-federated-3d-gaussian-splatting-wireless-edge-5g-traces
date_published: 2026-09-26
date_found: 2026-11-24
technology: edge-ai
type: academic-paper
title_en: "Federated 3D Gaussian Splatting for Large-Scale Scene Reconstruction at Wireless Edge (link rates from 5G measurement datasets)"
title_zh: "无线边缘的大规模场景重建联邦 3D 高斯泼溅（链路速率取自 5G 实测数据集）"
url: "https://arxiv.org/abs/2609.32177"
source_quality: full
topics: [federated-learning, 3D-Gaussian-splatting, model-pruning, latency-modeling, 5G-traces]
topic_primary: edge-federated-learning
topics_secondary: [compute-offloading]
novelty_score: 3
---

## Summary (EN)

The paper trains 3D Gaussian splatting (3D-GS) models of large scenes with federated learning across edge devices that have limited communication, computation and GPU memory, and whose raw images and camera parameters are private. It proposes a framework with two mechanisms. On the device, a model-lightweighting mechanism scores the importance of each Gaussian point and prunes points using an importance-to-latency ratio criterion under GPU-memory and computation/communication latency constraints. On the server, a model-recovery mechanism restores structural consistency across the pruned local 3D-GS models, without access to private camera parameters, so they can be aggregated into a global model.

The latency model has a computation part (profiled GPU parameters) and a transmission part. Link: simulated rates taken from real 5G measurement datasets: the downlink rate comes from a commercial 5G dataset, and each device samples one of two uplink environments (mobile/driving or static) from a second 5G measurement dataset. Training itself is simulated on a single NVIDIA A100, with the edge-device computation characteristics profiled on an RTX 3090. Part of the work was presented at IEEE WCNC Workshops (Kuala Lumpur, April 2026).

## Summary (ZH)

论文在通信、计算与 GPU 显存受限、且原始图像与相机参数需保密的边缘设备上，用联邦学习训练大场景的 3D 高斯泼溅（3D-GS）模型。框架含两个机制：设备端的模型轻量化机制为每个高斯点打重要性分，并在 GPU 显存及计算/通信时延约束下，按"重要性-时延比"准则裁剪高斯点；服务器端的模型恢复机制在不接触私有相机参数的情况下，恢复各裁剪后本地 3D-GS 模型之间的结构一致性，使其可聚合为全局模型。

时延模型包含计算部分（经剖析的 GPU 参数）和传输部分。所经链路：仿真速率，取自真实 5G 实测数据集：下行速率来自一个商用 5G 数据集，每个设备从第二个 5G 实测数据集中随机选取两种上行环境之一（移动/驾驶或静止）。训练本身在单块 NVIDIA A100 上仿真，边缘设备的计算特性在 RTX 3090 上剖析得到。部分工作曾在 IEEE WCNC Workshops（吉隆坡，2026 年 4 月）发表。

## Key technical points (EN)

- Datasets: Building (1,940 images) and Rubble (1,678 images) scenes from Mill19, captured by drone cameras, and the Polytech scene (999 images) from UrbanScene3D; images are assigned unevenly to devices to create heterogeneous data.
- Total latency for one device after 30,000 training epochs (Building / Rubble): centralized 3D-GS 9.27 h / 7.71 h; Fed3D-GS 1.83 h / 1.69 h; proposed 1.51 h / 1.39 h. Peak GPU memory in the Building scene is 5.69 GB for the proposed method versus 5.93 GB for Fed3D-GS.
- Versus Fed3D-GS reconstruction quality (Building / Rubble): PSNR 17.91 vs 17.21 and 20.74 vs 19.18; SSIM 0.554 vs 0.567 (Building, slightly lower) and 0.628 vs 0.552; LPIPS 0.363 vs 0.375 and 0.438 vs 0.429.
- Convergence versus latency: the proposed method converges fastest among the compared designs; a lightweighting-only variant without the recovery mechanism lets the global model grow across rounds, which raises downlink communication latency.
- The paper also analyses how sending the exchanged parameters at low precision affects reconstruction quality (FP16 costs 0.72 dB PSNR versus FP32 on Building; INT8 degrades it substantially) and how server computation resources affect total latency.

## Key technical points (ZH)

- 数据集：来自 Mill19 的 Building（1,940 张）与 Rubble（1,678 张）场景（无人机拍摄），以及来自 UrbanScene3D 的 Polytech 场景（999 张）；图像不均匀地分配给各设备，形成异构数据。
- 单设备训练 30,000 个 epoch 后的总时延（Building / Rubble）：集中式 3D-GS 9.27 h / 7.71 h；Fed3D-GS 1.83 h / 1.69 h；本文方法 1.51 h / 1.39 h。Building 场景峰值 GPU 显存：本文方法 5.69 GB，Fed3D-GS 为 5.93 GB。
- 与 Fed3D-GS 的重建质量对比（Building / Rubble）：PSNR 17.91 对 17.21、20.74 对 19.18；SSIM 0.554 对 0.567（Building，略低）、0.628 对 0.552；LPIPS 0.363 对 0.375、0.438 对 0.429。
- 收敛对时延：本文方法在所比较的设计中收敛最快；不含恢复机制的仅轻量化变体会使全局模型随轮次增大，从而增加下行通信时延。
- 论文还分析了以低精度传输交换参数对重建质量的影响（Building 场景中 FP16 相对 FP32 的 PSNR 下降 0.72 dB，INT8 则明显劣化），以及服务器计算资源对总时延的影响。

## Why it matters / what's new (EN)

The communication side is treated through latency: pruning decisions are made against a model that adds uplink and downlink transfer time to GPU computation time, using rates sampled from 5G measurements instead of a synthetic channel. The training and the devices are simulated, so the hours reported are model-based latencies, not measurements on deployed edge hardware.

## Why it matters / what's new (ZH)

通信一侧通过时延来处理：裁剪决策基于把上下行传输时间与 GPU 计算时间相加的模型，速率取自 5G 实测数据而非合成信道。训练与设备均为仿真，因此文中的小时数是基于模型的时延，而非在已部署边缘硬件上的测量。

## Images

![Pipeline of federated 3D-GS learning at the wireless edge | 无线边缘联邦 3D-GS 学习流程](https://arxiv.org/html/2609.32177v1/pipeline_v5.png)
