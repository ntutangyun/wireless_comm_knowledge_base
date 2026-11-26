---
id: 2026-11-26_arxiv-aeropoint-agentic-ai-uav-edge-point-cloud-inspection-uplink-payload
date_published: 2026-11-23
date_found: 2026-11-26
technology: edge-ai
type: academic-paper
title_en: "AeroPoint: Agentic AI for Intent-Driven Point Cloud Inspection in UAV-Edge Systems (0.1 / 0.5 Mbit/s uplink payload study)"
title_zh: "AeroPoint：面向无人机-边缘系统的意图驱动点云巡检智能体 AI（0.1 / 0.5 Mbit/s 上行载荷研究）"
url: "https://arxiv.org/abs/2611.31671"
source_quality: full
topics: [uav, lidar, knowledge-graph, llm-router, payload-reduction, jetson-nano]
topic_primary: compute-offloading
topics_secondary: [edge-ai-networking, task-oriented-communication]
novelty_score: 3
---

## Summary (EN)

AeroPoint (TU Wien, University of Klagenfurt, University of Helsinki, SINTEF; submitted to IEEE Internet Computing) addresses UAV LiDAR inspection, where dense point clouds strain onboard computing and wireless bandwidth. The UAV processes point clouds on board (segmentation, object identification, knowledge-graph construction, retrieval) on an NVIDIA Jetson Nano, while a ground edge server hosts an LLM router that turns an operator's natural-language inspection question into a structured retrieval request and an LLM that writes the answer from the returned graph evidence. Only the selected graph evidence crosses the radio link, instead of the point cloud.

Link: a UAV-to-ground uplink. The paper does not name the wireless technology (no 4G / 5G / Wi-Fi is stated) and evaluates transfer time at assumed uplink rates of 0.1 and 0.5 Mbit/s; the transfer times are payload divided by the stated rate (e.g. 3700 KB at 0.1 Mbit/s gives 296 s), so the rates are assumed values, not measurements.

Evaluation uses 150 scenes from the TS40K UAV LiDAR dataset (power-line inspection), with segmentation using the dataset's ground-truth labels rather than a retrained model. The edge-server routers are Qwen2.5-7B-Instruct and gemma-4-E4B-it on an Intel Xeon Gold server with two Quadro GV100 GPUs.

## Summary (ZH)

AeroPoint（TU Wien、克拉根福大学、赫尔辛基大学、SINTEF；已投稿 IEEE Internet Computing）面向无人机 LiDAR 巡检：稠密点云会给机载算力和无线带宽带来压力。无人机在 NVIDIA Jetson Nano 上本地完成点云处理（分割、目标识别、知识图谱构建、检索），地面边缘服务器上运行 LLM 路由器，把操作员的自然语言巡检问题转换为结构化检索请求，并运行 LLM 基于返回的图证据生成答案。穿越无线链路的只是选定的图证据，而不是点云。

所经链路：无人机到地面的上行链路。论文未指明无线技术（未提 4G / 5G / Wi-Fi），并在假定的 0.1 与 0.5 Mbit/s 上行速率下评估传输时间；传输时间即载荷除以所设速率（如 3700 KB 在 0.1 Mbit/s 下为 296 s），因此这些速率是假定值而非实测。

评估使用 TS40K 无人机 LiDAR 数据集（输电线巡检）中的 150 个场景，分割使用数据集的真值标签而非重新训练的模型。边缘服务器路由器为 Qwen2.5-7B-Instruct 和 gemma-4-E4B-it，运行于配备两块 Quadro GV100 GPU 的 Intel Xeon Gold 服务器。

## Key technical points (EN)

- Payload per transmission: full point cloud 3700 KB; after sampling 472 KB; after segmentation 129 KB; AeroPoint retrieval response 3.1 KB.
- Total latency at 0.1 Mbit/s: full cloud 296 s, sampled 37.76 s, segmented 11.71 s, AeroPoint 4.448 s. At 0.5 Mbit/s: 59.2 s, 7.552 s, 3.454 s and 4.2496 s respectively (full-cloud and sampled totals are transfer time only; the segmented total includes 1.39 s of UAV processing; AeroPoint includes 1.43 s of UAV processing and 2.77 s of router execution).
- At 0.5 Mbit/s, sending the segmented data is about 23% faster than AeroPoint because router execution (about 2.77 s) becomes the bottleneck.
- Onboard on Jetson Nano: segmentation dominates time and energy; power about 11-12 W during segmentation, object identification and graph generation, about 5 W during retrieval; GPU use about 48% during segmentation.
- Retrieval completeness (Qwen / Gemma) varies by intent, e.g. relational node retrieval 0.72 / 0.86 and visual node retrieval 1.00 / 0.54.
- Object heights use approximate scaling factors rather than field measurements.

## Key technical points (ZH)

- 单次传输载荷：完整点云 3700 KB；采样后 472 KB；分割后 129 KB；AeroPoint 检索响应 3.1 KB。
- 0.1 Mbit/s 下总时延：完整点云 296 s、采样 37.76 s、分割 11.71 s、AeroPoint 4.448 s。0.5 Mbit/s 下分别为 59.2 s、7.552 s、3.454 s 和 4.2496 s（完整点云与采样基线仅含传输时间；分割基线含 1.39 s 机载处理；AeroPoint 含 1.43 s 机载处理与 2.77 s 路由器执行）。
- 0.5 Mbit/s 时，发送分割后数据比 AeroPoint 快约 23%，因为路由器执行（约 2.77 s）成为瓶颈。
- Jetson Nano 机载：分割主导时间与能耗；分割、目标识别和图生成期间功耗约 11-12 W，检索期间约 5 W；分割期间 GPU 占用约 48%。
- 检索完整度（Qwen / Gemma）因意图而异，例如关系类节点检索 0.72 / 0.86，视觉类节点检索 1.00 / 0.54。
- 目标高度使用近似缩放系数，而非野外实测。

## Why it matters / what's new (EN)

It is a compute-placement example where the narrow uplink decides the split: heavy perception stays on the UAV, planning and language generation sit at the ground edge, and the link carries a few kilobytes of structured evidence. The comparison at 0.5 Mbit/s shows the split does not always win, since edge-side router execution can outweigh the transfer saving. The link technology is unnamed and the rates are assumed, and retrieval accuracy was measured with ground-truth segmentation labels, so the latency results are a payload-driven estimate rather than an over-the-air measurement.

## Why it matters / what's new (ZH)

这是一个由窄上行链路决定算力划分的例子：重感知留在无人机上，规划与语言生成放在地面边缘，链路只传送几千字节的结构化证据。0.5 Mbit/s 下的对比表明这种划分并非总是更优，因为边缘侧路由器执行时间可能超过传输节省。链路技术未命名、速率为假定值，检索精度又是在真值分割标签下测得，因此时延结果是由载荷驱动的估算，而非空口实测。
