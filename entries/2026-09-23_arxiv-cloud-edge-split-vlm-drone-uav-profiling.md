---
id: 2026-09-23_arxiv-cloud-edge-split-vlm-drone-uav-profiling
date_published: 2026-09-21
date_found: 2026-09-23
technology: edge-ai
type: academic-paper
title_en: "Cloud, Edge, or Split? Profiling Onboard and Split Vision-Language Model Deployment for Drone AI"
title_zh: "云端、边缘，还是切分？无人机 AI 场景下机载与切分式视觉语言模型部署的实测剖析"
url: "https://arxiv.org/abs/2609.25415"
source_quality: full
topics: [split-inference, VLM, UAV, computation-offloading, SmolVLM]
topic_primary: compute-offloading
topics_secondary: [on-device-inference, edge-ai-networking]
novelty_score: 3
---

## Summary (EN)

Zoha Azimi and Christian Timmerer (Christian Doppler Laboratory ATHENA, Institute of Information Technology, University of Klagenfurt, Austria) with Reza Farahani and Schahram Dustdar (Distributed Systems Group, TU Wien, Austria) submitted this paper to arXiv on 21 September 2026; it has been accepted as a full paper at iEdge 2026. The paper systematically benchmarks three deployment strategies for running Vision-Language Models (VLMs) on drones performing power-line and bridge-defect inspection: fully onboard inference, fully cloud-based inference, and split UAV-cloud inference (the drone runs the vision encoder and projection module locally, then transmits the resulting visual-embedding tensor — rather than the raw image — to a remote server that runs the language decoder). Using SmolVLM-256M as a representative lightweight VLM, the onboard/split side is measured on an NVIDIA Jetson platform (8-core ARM Cortex-A78AE CPU, Ampere GPU with 1024 CUDA cores / 32 Tensor cores), and the cloud side on an Intel Xeon Gold 5218 server with an NVIDIA RTX A6000 GPU, connected over a replayed 500-second real 4G/LTE throughput trace spanning low- (2.1 Mbps mean), moderate- (43.5 Mbps mean) and high-bandwidth (65 Mbps mean) intervals.

The measured results show no strategy dominating on every axis. Compute latency alone (excluding network transfer): fully onboard takes ~2.76s per request, fully cloud ~0.72s (a 3.8x speedup from server compute capacity), and split inference ~2.09s (onboard vision+projection ~1.41s, cloud decode ~0.68s) — 24% faster than fully onboard. Resource use: fully onboard uses ~11% CPU / 55% GPU / 31% RAM on the Jetson and allocates ~572MB GPU memory (peak 854MB); the onboard stage of split inference cuts allocated/peak GPU memory by ~59%/~45% (to ~236MB/~472MB) by dropping the language decoder from the device. Energy per request: fully onboard draws ~26J from the UAV battery; split inference's onboard stage draws only ~15J (a 42% reduction), moving the remaining ~130J of decode-stage energy to the (battery-independent) cloud server, versus ~150J for a fully cloud request. Communication: split inference uploads INT8-quantized visual tokens averaging 375.84kB versus 821.45kB of JPEG-compressed images for fully cloud inference (a 54% payload reduction), which matters most under low bandwidth, where transfer latency drops from 3.20s (fully cloud) to 1.47s (split). The paper's stated conclusion is that no deployment strategy is universally optimal — the right choice depends jointly on network bandwidth, onboard resource constraints, and input image resolution, and it derives deployment guidelines from these trade-offs rather than declaring one architecture the winner.

## Summary (ZH)

奥地利克拉根福大学信息技术研究所 Christian Doppler 实验室 ATHENA 的 Zoha Azimi、Christian Timmerer，与奥地利维也纳工业大学分布式系统组（Distributed Systems Group, TU Wien）的 Reza Farahani、Schahram Dustdar 于 2026 年 9 月 21 日向 arXiv 提交本文，论文已被 iEdge 2026 接收为正式论文（full paper）。文章系统性地对三种在无人机上运行视觉语言模型（VLM）的部署策略进行了实测对比，场景为输电线路巡检与桥梁缺陷检测：完全机载推理、完全云端推理，以及切分式无人机-云端推理（无人机本地运行视觉编码器与投影模块，随后只把生成的视觉嵌入张量——而非原始图像——上传给运行语言解码器的远程服务器）。作者以轻量级 VLM SmolVLM-256M 为代表模型，机载/切分侧在 NVIDIA Jetson 平台（8 核 ARM Cortex-A78AE CPU，Ampere GPU，1024 CUDA 核心/32 个 Tensor 核心）上测量，云端侧使用搭载 Intel Xeon Gold 5218 处理器与 NVIDIA RTX A6000 GPU 的服务器，二者之间以一段真实录制的 500 秒 4G/LTE 吞吐量轨迹重放连接，覆盖低（均值 2.1 Mbps）、中（均值 43.5 Mbps）、高（均值 65 Mbps）三档带宽区间。

实测结果显示，没有任何一种策略在所有维度都占优。仅计算时延（不含网络传输）：完全机载每次请求约 2.76 秒，完全云端约 0.72 秒（得益于服务器算力，提速约 3.8 倍），切分式推理约 2.09 秒（机载视觉编码+投影约 1.41 秒，云端解码约 0.68 秒）——比完全机载快 24%。资源占用：完全机载在 Jetson 上占用约 11% CPU / 55% GPU / 31% 内存，分配约 572MB GPU 显存（峰值 854MB）；切分推理的机载阶段因去掉了语言解码器，分配/峰值 GPU 显存分别减少约 59%/45%（降至约 236MB/472MB）。单次请求能耗：完全机载消耗无人机电池约 26J；切分推理的机载阶段仅消耗约 15J（降低约 42%），把剩余约 130J 的解码能耗转移到不依赖电池的云端服务器，而完全云端单次请求消耗约 150J。通信开销：切分推理上传的是 INT8 量化视觉 token，平均 375.84kB，相比完全云端上传 JPEG 压缩图像的 821.45kB 减少约 54%，这一优势在低带宽下最为明显——传输时延从完全云端的 3.20 秒降至切分推理的 1.47 秒。论文的结论是：没有一种部署策略普遍最优——最佳选择取决于网络带宽、机载资源约束与输入图像分辨率三者的共同作用，文章据此给出部署决策指南，而非宣称某一架构全面胜出。

## Key technical points (EN)

- **Three strategies compared**: fully onboard, fully cloud, split UAV-cloud (onboard vision encoder + projection, cloud language decoder — transmitting visual embeddings, not raw images).
- **Hardware**: onboard = NVIDIA Jetson (8-core Cortex-A78AE, Ampere GPU, 1024 CUDA/32 Tensor cores); cloud = Intel Xeon Gold 5218 + RTX A6000; link = replayed real 500s 4G/LTE trace (low/moderate/high bandwidth tiers).
- **Model/data**: SmolVLM-256M; UAV power-line inspection and CODEBRIM bridge-defect datasets.
- **Latency**: onboard 2.76s, cloud 0.72s (3.8x faster), split 2.09s (24% faster than onboard) — compute time only, excluding network transfer.
- **Memory**: split inference cuts onboard GPU memory allocation/peak by ~59%/~45% vs. fully onboard.
- **Energy**: onboard 26J/request from UAV battery; split's onboard stage only 15J (-42%), shifting ~130J of decode energy to the cloud (battery-independent).
- **Communication**: split payload 375.84kB (INT8 visual tokens) vs. 821.45kB (JPEG) for fully cloud — 54% smaller; matters most at low bandwidth (1.47s vs 3.20s transfer latency).
- **Conclusion**: no strategy is universally optimal; best choice depends on network bandwidth, onboard resources, and image resolution jointly. Accepted as a full paper at iEdge 2026.

## Key technical points (ZH)

- **对比的三种策略**：完全机载、完全云端、切分式无人机-云端（机载视觉编码器+投影模块，云端语言解码器——传输视觉嵌入而非原始图像）。
- **硬件**：机载 = NVIDIA Jetson（8 核 Cortex-A78AE，Ampere GPU，1024 CUDA/32 Tensor 核心）；云端 = Intel Xeon Gold 5218 + RTX A6000；链路 = 真实录制的 500 秒 4G/LTE 轨迹重放（低/中/高三档带宽）。
- **模型/数据**：SmolVLM-256M；无人机输电线路巡检与 CODEBRIM 桥梁缺陷数据集。
- **时延**：机载 2.76 秒，云端 0.72 秒（快 3.8 倍），切分 2.09 秒（比机载快 24%）——仅计算时延，不含网络传输。
- **显存**：切分推理的机载阶段相比完全机载，分配/峰值 GPU 显存分别减少约 59%/45%。
- **能耗**：机载每请求消耗无人机电池 26J；切分的机载阶段仅 15J（降低 42%），把约 130J 的解码能耗转移到不依赖电池的云端。
- **通信**：切分负载 375.84kB（INT8 视觉 token）对比完全云端 821.45kB（JPEG）——减少约 54%；在低带宽下优势最明显（传输时延 1.47 秒 对比 3.20 秒）。
- **结论**：没有策略普遍最优；最佳选择取决于网络带宽、机载资源与图像分辨率的共同作用。论文已被 iEdge 2026 接收为正式论文。

## Why it matters / what's new (EN)

This KB already covers split/collaborative inference from several angles (e.g. compute-offloading bin entries on modality-sparsity-aware offloading and adaptive DNN partitioning). It measures all three deployment points for the same VLM on the same hardware under a replayed real LTE trace, and concludes that the split strategy's advantage depends on bandwidth, onboard resources and image resolution.

## Why it matters / what's new (ZH)

本知识库已从多个角度覆盖切分式/协同推理（例如 compute-offloading 分箱中关于模态稀疏感知卸载、自适应 DNN 切分的条目）。该论文在同一硬件上对同一 VLM 的三种部署方式进行了实测，使用重放的真实 LTE 轨迹，并得出结论：切分策略的优势取决于带宽、机载资源与图像分辨率。

## Images

![Split UAV-cloud inference architecture: onboard vision encoder/projection vs. cloud language decoder | 切分式无人机-云端推理架构：机载视觉编码器/投影模块与云端语言解码器](https://arxiv.org/html/2609.25415v1/arch2.png)
![Measured average inference time per deployment strategy (fully onboard / fully cloud / split) | 各部署策略（完全机载/完全云端/切分）的实测平均推理时间](https://arxiv.org/html/2609.25415v1/inf_time.png)
![Measured compute energy consumption per request by execution location | 各执行位置的单次请求实测计算能耗](https://arxiv.org/html/2609.25415v1/energy.png)
