---
id: 2026-10-21_arxiv-yutela-jetson-thor-edge-server-cloud-video-anomaly-170-hour-deployment
date_published: 2026-10-19
date_found: 2026-10-21
technology: edge-ai
type: academic-paper
title_en: "YUTELA: A Scalable Edge Cloud AIoT System for Multi-Site Video Anomaly Detection with Scene Specific Adaptation"
title_zh: "YUTELA：面向多站点视频异常检测、具备场景自适应的可扩展边云 AIoT 系统"
url: "https://arxiv.org/abs/2610.26468"
source_quality: full
topics: [Jetson-Thor, TensorRT, video-analytics, per-camera-retraining, edge-deployment]
topic_primary: edge-orchestration
topics_secondary: [edge-ai-silicon, on-device-inference]
novelty_score: 3
---

## Summary (EN)

YUTELA builds on the authors' earlier Ancilia framework and replaces workstation-based on-site processing with NVIDIA Jetson Thor edge devices for long-term, multi-site video anomaly detection. Each site's Jetson Thor runs preprocessing, detection (YOLO26), tracking (ByteTrack), pose estimation (AlphaPose) and anomaly inference (SPARTA) locally. A central global node does statistical analysis and scene-specific model training, and the cloud turns anomaly events into alerts and handles user requests. The pipeline was redesigned with camera batching and redistribution, shared CPU memory, fewer inter-stage copies, merged tracking and detection, parallel detection/pose/anomaly pipelines, and TensorRT acceleration. A separate anomaly model is kept per camera and retrained on the server once about one million frames with valid pose observations of pseudo-normal data are collected, with updated weights returned to the edge.

With eight streams, TensorRT raises throughput from 14.17 to 29.94 FPS at normal density; the optimised node exceeds the workstation's throughput in seven of nine workload settings, up to 2.03x at extreme density (8.48 versus 4.18 FPS), at the cost of higher latency under lighter loads. The system then ran continuously for 170 hours at four public sites on 31 existing CCTV cameras, with 101 training triggers using about 6.6% of one GPU. Alert latency by site ranged from 6.82 to 11.33 s for object anomalies and 8.71 to 15.41 s for behaviour anomalies.

## Summary (ZH)

YUTELA 建立在作者此前的 Ancilia 框架之上，用 NVIDIA Jetson Thor 边缘设备取代基于工作站的现场处理，用于长期、多站点的视频异常检测。每个站点的 Jetson Thor 在本地运行预处理、检测（YOLO26）、跟踪（ByteTrack）、姿态估计（AlphaPose）和异常推理（SPARTA）。中心全局节点负责统计分析和场景专用模型训练，云端把异常事件转为告警并处理用户请求。流水线经重新设计，包括摄像头批处理与重分配、共享 CPU 内存、减少阶段间拷贝、合并跟踪与检测、并行的检测/姿态/异常流水线，以及 TensorRT 加速。每个摄像头保持一个独立的异常模型，当收集到约一百万帧含有效姿态观测的伪正常数据后在服务器上重训，更新权重再回传边缘。

八路视频流下，TensorRT 使正常密度下的吞吐从 14.17 FPS 提升到 29.94 FPS；优化后的节点在九种负载设置中的七种超过工作站吞吐，极端密度下最高达 2.03 倍（8.48 对 4.18 FPS），代价是较轻负载下延迟更高。随后系统在四个公共站点的 31 台既有 CCTV 摄像头上连续运行 170 小时，共 101 次训练触发，占用约 6.6% 的一块 GPU。各站点告警延迟：对象异常 6.82 至 11.33 s，行为异常 8.71 至 15.41 s。

## Key technical points (EN)

- Tiers: Jetson Thor per site (inference), global workstation (statistics, training), cloud (alerts, user interface). Object-level anomalies go edge to cloud; behaviour anomalies are batched through the global node.
- Pipeline changes: camera batching decouples pipeline count from camera count; shared memory; tracking merged into detection; parallel detection/pose/anomaly stages; TensorRT.
- Retraining: per-camera model, pseudo-labelled data kept only if labelled normal, trigger at about 1M frames with valid pose observations, training on the server, weights returned to the edge.
- Benchmark (8 streams, FPS): normal 29.94 (TensorRT) vs 14.17 (no TensorRT) vs 26.60 (workstation); heavy 25.97 vs 10.97 vs 15.48; extreme 8.48 vs 4.47 vs 4.18.
- Deployment: 4 sites, 31 cameras, 170 hours; 101 retraining triggers; training intervals from 19.4 to 55.0 h per camera and training time 4.2 to 7.7 min on average.
- Stated scope limits: adaptation effect on detection accuracy is not measured (would need verified labels); pseudo-normal data could let undetected anomalies become part of normal; the capacity projection assumes sequential training jobs and excludes data-upload time and simultaneous trigger bursts; sites are not directly comparable to the earlier Ancilia measurement.

## Key technical points (ZH)

- 层次：每站点一台 Jetson Thor（推理）、全局工作站（统计、训练）、云端（告警、用户界面）。对象级异常由边缘直达云端；行为异常经全局节点批量处理。
- 流水线改动：摄像头批处理使流水线数量与摄像头数量解耦；共享内存；跟踪并入检测；检测/姿态/异常阶段并行；TensorRT。
- 重训：逐摄像头模型，伪标注数据仅保留标为正常者，约一百万帧含有效姿态观测时触发，在服务器上训练，权重回传边缘。
- 基准（8 路流，FPS）：正常密度 29.94（TensorRT）对 14.17（无 TensorRT）对 26.60（工作站）；高密度 25.97 对 10.97 对 15.48；极端密度 8.48 对 4.47 对 4.18。
- 部署：4 个站点、31 台摄像头、170 小时；101 次重训触发；每摄像头触发间隔 19.4 至 55.0 小时，平均训练时间 4.2 至 7.7 分钟。
- 论文自述范围限制：未测量自适应对检测精度的影响（需要人工核验标签）；伪正常数据可能使未检出的异常逐渐成为“正常”；容量推算假设训练任务顺序执行，且未计入数据上传时间与同时触发的突发情况；各站点与此前 Ancilia 的测量不能直接比较。

## Why it matters / what's new (EN)

The paper reports a field deployment (170 hours) with per-site load, retraining cadence and alert-latency data rather than only a lab benchmark, and shows how a Jetson Thor node compares with the earlier workstation design. Throughput and latency are the authors' own measurements on their pipeline; whether per-camera retraining improves detection accuracy is explicitly left unmeasured.

## Why it matters / what's new (ZH)

论文给出了带有各站点负载、重训节奏和告警延迟数据的现场部署结果，而不只是实验室基准，并展示了 Jetson Thor 节点与此前工作站设计的对比。吞吐与延迟为作者对自身流水线的测量；逐摄像头重训是否提升检测精度则被明确列为未测量。

## Images

*(No redistributable images for this entry.)*
