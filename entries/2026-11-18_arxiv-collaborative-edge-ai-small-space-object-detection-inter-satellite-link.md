---
id: 2026-11-18_arxiv-collaborative-edge-ai-small-space-object-detection-inter-satellite-link
date_published: 2026-11-14
date_found: 2026-11-18
technology: edge-ai
type: academic-paper
title_en: "Collaborative edge AI for small space-object detection: image-level fusion cuts combined inter-satellite-link and inference latency by about 30% versus feature-level fusion"
title_zh: "协同边缘 AI 检测小型空间目标：图像级融合相对特征级融合将星间链路与推理的合计时延降低约 30%"
url: "https://arxiv.org/abs/2611.19394"
source_quality: full
topics: [space-object-detection, multiview-fusion, inter-satellite-link, collaborative-inference, satellite-edge-ai]
topic_primary: compute-offloading
topics_secondary: [task-oriented-communication, edge-orchestration]
novelty_score: 3
---

## Summary (EN)

This paper (University of Manitoba) studies cluster-based collaborative edge AI for detecting small space objects. A primary satellite and up to eight support satellites observe the same scene; the support views are sent over inter-satellite links (ISLs) and fused with the primary view by image-level, feature-level or attention-based fusion. The authors benchmark YOLOv9-S, YOLOv11-S and YOLOv13-S on the SODv3 synthetic dataset (155,663 Unity-generated images in 32,538 synchronised observation groups, 3840 x 2160 pixels) on an NVIDIA H100 GPU, and vary the effective ISL rate from 1% to 100% of a nominal rate. Link computed over: satellite inter-satellite links (the keywords name free-space optical communication); the link is modelled by transmission rate, not measured in orbit.

## Summary (ZH)

本文（曼尼托巴大学）研究基于星簇的协同边缘 AI 小型空间目标检测。一颗主卫星与至多八颗辅助卫星观测同一场景；辅助视图经星间链路（ISL）传送，并与主视图通过图像级、特征级或注意力融合进行融合。作者在 SODv3 合成数据集（Unity 生成，32,538 组同步观测中共 155,663 张 3840 x 2160 图像）上，于 NVIDIA H100 GPU 上对 YOLOv9-S、YOLOv11-S、YOLOv13-S 进行基准测试，并把有效 ISL 速率在标称速率的 1% 至 100% 间变化。所经链路：卫星星间链路（关键词写明自由空间光通信）；链路以传输速率建模，非在轨实测。

## Key technical points (EN)

- Resolution matters for small objects: YOLOv11-S reaches mAP50 of 69.47% at 3840 pixels, 29.16% at 1920 and 6.28% at 640, while inference time rises from 4.12 ms to 13.61 ms between 1920 and 3840.
- Image-level fusion has the lowest combined communication-plus-inference latency, on average 30.13% below feature-level and 32.80% below attention-based fusion across the evaluated ISL rates; the gap is 20.79% and 22.92% at 1%-10% of nominal capacity.
- Extra views do not always help: none of the three fusion strategies beat the single-view baseline overall; for image-level fusion, restricting to clusters of one to three views raised mAP50 from 49.57% to 53.64%.
- Latency grows sharply when the number of concurrent transmissions exceeds the receiver's reception capacity; at high ISL rates inference time dominates.

## Key technical points (ZH)

- 分辨率对小目标至关重要：YOLOv11-S 在 3840 像素下 mAP50 为 69.47%，1920 像素下为 29.16%，640 像素下为 6.28%，而推理时间从 1920 的 4.12 ms 升至 3840 的 13.61 ms。
- 图像级融合的通信加推理合计时延最低，在所评估的 ISL 速率上平均比特征级低 30.13%、比注意力融合低 32.80%；在标称容量的 1%-10% 时差距为 20.79% 与 22.92%。
- 更多视图并不总有帮助：三种融合策略总体上都未超过单视图基线；对图像级融合，限定为一至三个视图的星簇时 mAP50 从 49.57% 升至 53.64%。
- 当并发传输数超过接收端接收能力时时延急剧上升；在高 ISL 速率下推理时间成为主导。

## Why it matters / what's new (EN)

It puts a number on the communication cost of multi-satellite edge inference and shows that image-level fusion has the lowest combined latency at every evaluated ISL rate (nominal 1 Gbps per link), while feature-level and attention fusion are more accurate when all views are used (52.74%/52.45% vs 49.57% mAP50). The setting is a synthetic dataset on a ground GPU with a rate-scaled link model, and no fusion strategy beat the single-view baseline on accuracy overall, so the result is a design trade-off study.

## Why it matters / what's new (ZH)

它为多卫星边缘推理的通信代价给出了数字，并表明图像级融合在所有评估的 ISL 速率（每链路标称 1 Gbps）下合计时延最低，而使用全部视图时特征级与注意力融合精度更高（mAP50 52.74%/52.45% 对 49.57%）。实验基于合成数据集与地面 GPU、链路为速率缩放模型，且没有任何融合策略在总体精度上超过单视图基线，因此属于设计权衡研究。

## Images

![Combined communication and inference latency of three multiview fusion strategies | 三种多视图融合策略的通信与推理合计时延](https://arxiv.org/html/2611.19394v1/Total_latency.png)
