---
id: 2026-10-28_arxiv-satellite-intelligence-survey-distributed-training-inference-llm-leo
date_published: 2026-10-26
date_found: 2026-10-28
technology: satellite
type: academic-paper
title_en: "Satellite Intelligence: Distributed Training, Collaborative Inference, and LLM Adaptation in LEO Constellation"
title_zh: "卫星智能：LEO 星座中的分布式训练、协同推理与大模型适配"
url: "https://arxiv.org/abs/2610.35282"
source_quality: full
topics: [satellite-intelligence, federated-learning, split-learning, collaborative-inference, LLM, LEO, survey, orbital-computing]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 2
---

## Summary (EN)

Lin, Wang, Zhang, Wang, Aouedi, Fang, Xu, Yang, Ha, Liu, Alouini and Chatzinotas (arXiv 2610.35282, cs.NI, v1 26 October 2026; no venue named) present a survey of Satellite Intelligence (SI), which they describe as the first to jointly cover distributed training, collaborative inference and LLM adaptation in LEO megaconstellations. A comparison table positions it against 13 earlier surveys along four dimensions: orbital constraints, distributed training, collaborative inference and on-orbit LLM adaptation.

The survey starts from three deployment bottlenecks (rigid onboard resources, highly dynamic topologies, intermittent energy) and derives three principles: resource-aware task decoupling, topology-resilient orchestration and energy-aware scheduling. It quotes operating constraints from the literature: onboard compute from sub-GFLOPS radiation-hardened processors to a few TFLOPS on commercial GPUs, memory from about 1 GB on CubeSats to 8 to 32 GB on GPU payloads, satellite-ground links of roughly 30 to 100 Mbps on small satellites, contact windows up to about 10 minutes and only a few passes per day, 10 to 50 W available for compute out of platform budgets rarely above 200 W, and battery capacity that can drop by up to 25% within about six months of LEO cycling.

Distributed training covers a satellite-ground architecture, federated learning (local updates, connectivity-aware coordination, eclipse-aware scheduling) and split learning (dynamic split execution, pipeline and offline orchestration, orbit-aware energy control), with an FL-versus-SL comparison. Collaborative inference compares local, multi-satellite and satellite-ground paradigms, including compression, depth-adaptive models, contact-aware partitioning and downlink compression. On-orbit LLM adaptation covers resource-efficient onboard and satellite-ground serving, orbital simulation, and agentic capabilities such as tool use. Open challenges listed are secure and reliable SI, data-compliance-aware SI and data-efficient SI. The survey tables list metrics and control variables per method; it reports no new experiments.

## Summary (ZH)

Lin、Wang、Zhang、Wang、Aouedi、Fang、Xu、Yang、Ha、Liu、Alouini 和 Chatzinotas（arXiv 2610.35282，cs.NI，v1 于 2026 年 10 月 26 日发布；未指明会议或期刊）撰写了一篇关于卫星智能（SI）的综述，称其为首个同时涵盖 LEO 巨型星座中分布式训练、协同推理与大模型适配的综述。对比表从轨道约束、分布式训练、协同推理和在轨大模型适配四个维度与 13 篇既有综述作了比较。

综述从三个部署瓶颈（星上资源受限、拓扑高度动态、能源间歇）出发，导出三项原则：资源感知的任务解耦、拓扑韧性编排和能量感知调度。文中引用文献中的运行约束：星上算力从抗辐射处理器的亚 GFLOPS 到商用 GPU 的数 TFLOPS，内存从立方星约 1 GB 到 GPU 载荷 8 至 32 GB，小卫星星地链路约 30 至 100 Mbps，接触窗口最长约 10 分钟且每天仅数次过境，平台预算很少超过 200 W 而可用于计算的仅 10 至 50 W，LEO 循环约六个月内电池容量可下降多达 25%。

分布式训练部分涵盖星地协同架构、联邦学习（本地更新、连接感知协调、日蚀感知调度）与拆分学习（动态拆分执行、流水线与离线编排、轨道感知能量控制），并比较了 FL 与 SL。协同推理部分比较本地、多星和星地三种范式，涉及压缩、深度自适应模型、接触感知划分和下行压缩。在轨大模型适配部分涵盖资源高效的星上及星地服务、轨道仿真以及工具使用等智能体能力。列出的开放挑战为安全可靠的 SI、合规感知的 SI 和数据高效的 SI。综述各表列出各方法的指标与控制变量，未报告新实验。

## Key technical points (EN)

- **Scope**: first survey to jointly cover training, inference and LLM adaptation on LEO constellations, per the authors.
- **Principles**: resource-aware task decoupling, topology-resilient orchestration, energy-aware scheduling.
- **Constraints cited**: 10 to 50 W compute power, 30 to 100 Mbps links, contact windows up to about 10 minutes, up to 25% battery fade in six months.
- **Training**: federated learning (eclipse-aware scheduling) versus split learning (orbit-aware energy control).
- **Inference**: local, multi-satellite and satellite-ground paradigms with contact-aware partitioning.
- **Caveat**: literature review only, no new measurements.

## Key technical points (ZH)

- **范围**：据作者称，首个同时涵盖 LEO 星座训练、推理与大模型适配的综述。
- **原则**：资源感知任务解耦、拓扑韧性编排、能量感知调度。
- **引用的约束**：计算功率 10 至 50 W，链路 30 至 100 Mbps，接触窗口最长约 10 分钟，六个月内电池最多衰减 25%。
- **训练**：联邦学习（日蚀感知调度）对比拆分学习（轨道感知能量控制）。
- **推理**：本地、多星和星地范式，配合接触感知划分。
- **注意**：仅为文献综述，无新测量。

## Why it matters / what's new (EN)

The survey supplies a training/inference/LLM-serving taxonomy and a consolidated list of onboard resource constraints; related orbital-computing entries: [2026-10-27_arxiv-starmind-orbital-computing-five-layer-framework-six-interfaces](2026-10-27_arxiv-starmind-orbital-computing-five-layer-framework-six-interfaces.md), [2026-10-27_arxiv-virtual-stationarity-runtime-continuous-migration-leo-orbital-edge](2026-10-27_arxiv-virtual-stationarity-runtime-continuous-migration-leo-orbital-edge.md). It is a literature synthesis and carries no new experimental results.

## Why it matters / what's new (ZH)

本综述提供训练、推理与大模型服务的分类，以及星上资源约束的汇总；相关轨道计算条目：[2026-10-27_arxiv-starmind-orbital-computing-five-layer-framework-six-interfaces](2026-10-27_arxiv-starmind-orbital-computing-five-layer-framework-six-interfaces.md)、[2026-10-27_arxiv-virtual-stationarity-runtime-continuous-migration-leo-orbital-edge](2026-10-27_arxiv-virtual-stationarity-runtime-continuous-migration-leo-orbital-edge.md)。它是文献综合，不含新的实验结果。

## Images

![Three collaborative inference frameworks | 三种协同推理框架](https://arxiv.org/html/2610.35282v1/three_inference_framework.jpg)
![Satellite-ground collaborative architecture | 星地协同架构](https://arxiv.org/html/2610.35282v1/satellite_GS_archi.jpg)
