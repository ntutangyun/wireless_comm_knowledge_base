---
id: 2026-11-11_arxiv-memory-computing-offloading-joint-optimization-energy-efficient-dnn-inference-jetson
date_published: 2026-11-08
date_found: 2026-11-11
technology: edge-ai
type: academic-paper
title_en: "Adding memory frequency to the offloading decision: joint memory, computing and uplink-bandwidth optimization cuts device energy up to 16.1% for DNN inference (Jetson-profiled, simulated link)"
title_zh: "把内存频率纳入卸载决策：联合优化内存、计算与上行带宽，DNN 推理设备能耗最多降低 16.1%（Jetson 实测剖析，链路为仿真）"
url: "https://arxiv.org/abs/2611.11106"
source_quality: full
topics: [computation-offloading, DNN-inference, DVFS, uplink-bandwidth-allocation, mobile-edge-computing]
topic_primary: compute-offloading
topics_secondary: [edge-orchestration]
novelty_score: 3
---

## Summary (EN)

For multi-device edge intelligence, the paper treats the memory frequency of mobile devices as a controllable resource alongside computing frequency, uplink bandwidth and the binary offloading decision, minimizing total device energy under a deadline. The problem is mixed-integer nonlinear; given an offloading policy it splits into a local subproblem (geometric program for memory and computing frequency) and an edge subproblem (convex uplink-bandwidth allocation), and a coordinate-descent algorithm searches the offloading policy. An earlier version appeared at IEEE GLOBECOM 2025. Link computed over: a simulated wireless uplink (path loss by distance to a central edge node, 1 W transmit power, noise power spectral density from the cited setup); the device-side inference time and power are profiled on real Jetson TX1, Orin Nano and Orin NX boards.

## Summary (ZH)

在多设备边缘智能场景中，本文把移动设备的内存频率与计算频率、上行带宽以及二值卸载决策一并作为可控资源，在时延约束下最小化设备总能耗。该问题为混合整数非线性规划；给定卸载策略后分解为本地子问题（内存与计算频率的几何规划）和边缘子问题（凸的上行带宽分配），并以坐标下降算法搜索卸载策略。论文早期版本发表于 IEEE GLOBECOM 2025。所经链路：仿真无线上行（路径损耗随与中心边缘节点距离变化，发射功率 1 W，噪声功率谱密度取自所引设置）；设备端推理时间与功耗在真实的 Jetson TX1、Orin Nano 和 Orin NX 开发板上剖析。

## Key technical points (EN)

- Motivation measurement: on Jetson TX1, raising memory frequency from 0.102 GHz to 1.6 GHz reduces DenseNet121 and ResNet152 inference time by more than raising computing frequency does; on Xavier NX a similar trend holds for VGG19 and ViT-B/16 (memory frequency 0.204 to 1.6 GHz).
- Models and devices in the evaluation: ResNet152, VGG19 and LSTM on Jetson TX1; ResNet152 and ViT-B/16 on Orin Nano; Swin-B and GNN on Orin NX, with the edge side configured as virtual machines with an RTX 4080.
- Local inference: memory and computing frequency are jointly chosen; edge inference: uplink bandwidth is allocated to minimize transmission energy.
- Headline (abstract): within at most 9.3% of the optimal policy, and up to 16.1% lower device energy than benchmarks without memory-frequency optimization.
- The offloading decision is binary per device and the evaluation is simulation with fitted device models, so no over-the-air or end-to-end system measurement is reported.

## Key technical points (ZH)

- 动机测量：在 Jetson TX1 上将内存频率由 0.102 GHz 提高到 1.6 GHz，对 DenseNet121 与 ResNet152 推理时间的降低幅度大于提高计算频率；在 Xavier NX 上，VGG19 与 ViT-B/16 呈类似趋势（内存频率 0.204 至 1.6 GHz）。
- 评估所用模型与设备：Jetson TX1 上的 ResNet152、VGG19、LSTM；Orin Nano 上的 ResNet152、ViT-B/16；Orin NX 上的 Swin-B、GNN；边缘侧配置为带 RTX 4080 的虚拟机。
- 本地推理：联合选择内存与计算频率；边缘推理：分配上行带宽以最小化传输能耗。
- 摘要结论：与最优策略差距至多 9.3%，设备能耗比不含内存频率优化的基线最多降低 16.1%。
- 每台设备的卸载决策为二值，评估为基于拟合设备模型的仿真，未报告空口或端到端系统实测。

## Why it matters / what's new (EN)

The paper notes that most existing studies model inference time from computation workload and processing capability alone; it shows on real Jetson boards that memory frequency can matter more for DNN inference time and folds it into the offloading decision. The wireless side is a standard simulated uplink, so the contribution is on the compute-resource side of the link-aware offloading problem.

## Why it matters / what's new (ZH)

论文指出，多数现有研究仅以计算量与处理能力之比建模推理时间；本文在真实 Jetson 开发板上表明内存频率对 DNN 推理时间可能更重要，并将其纳入卸载决策。无线侧为常规的仿真上行，因此贡献在于链路感知卸载问题中的计算资源一侧。

## Images

*(No redistributable images for this entry.)*
