---
id: 2026-09-16_arxiv-ethereal-event-driven-gnn-edge-chip
date_published: 2026-09-14
date_found: 2026-09-16
type: academic-paper
technology: edge-ai
title_en: "A 25-μs/inf Event-driven Graph Neural Network Processor with Spatiotemporal Caching and Spline Convolution for Ultra-low-latency AI at the Edge"
title_zh: "面向边缘超低延迟 AI 的事件驱动图神经网络处理器：时空缓存与样条卷积，25 微秒/推理"
url: "https://arxiv.org/abs/2609.15241"
source_quality: full
topics: [edge-ai-silicon, event-driven-vision, graph-neural-network, chip]
topic_primary: edge-ai-silicon
topics_secondary: []
novelty_score: 4
---

## Summary (EN)

Researchers from TU Delft, KU Leuven, University of Zürich and University of Pennsylvania (Adrian Kneip, Martin Lefebvre, Daniel Gehrig, Victoria Catalán Pastor, Davide Scaramuzza, Marian Verhelst, Charlotte Frenkel) present ETHEREAL, a fabricated accelerator chip for event-driven graph neural networks (EV-GNNs) that process dynamic vision sensor (DVS) camera output. DVS cameras generate a sparse, asynchronous stream of per-pixel brightness-change events rather than dense frames, and EV-GNN algorithms (the paper cites the DAGr-GNN line of work) process these as a growing spatiotemporal graph — an approach that is accurate and low-latency in principle but historically hard to run efficiently on real hardware because of its irregular, per-event computation and memory-access pattern.

ETHEREAL's architecture combines a reconfigurable message-passing datapath that decomposes spline-based convolution into a three-phase sequence of multiply-accumulate operations, a specialized 3D spatiotemporal cache built around the spatial and temporal locality of nearby events (with a documented hit-rate advantage across datasets), and, in the 2D layers, a 2D-interleaved bank mapping with "spline skipping" that omits unnecessary spline indices during the spline-iterative message-passing phase. The chip was fabricated (comments in the source indicate acceptance for presentation at "IEEE ESSERC 2026") and measured: chip microphotograph and electrical characterization are reported alongside accelerator- and system-level workload evaluation, at 640×480 resolution — which the paper states is the first work to demonstrate EV-GNN processing scaling to that resolution.

## Summary (ZH)

来自代尔夫特理工大学、鲁汶大学、苏黎世大学与宾夕法尼亚大学的研究者（Adrian Kneip、Martin Lefebvre、Daniel Gehrig、Victoria Catalán Pastor、Davide Scaramuzza、Marian Verhelst、Charlotte Frenkel）提出 ETHEREAL——一款面向事件驱动图神经网络（EV-GNN）的已流片加速器芯片，用于处理动态视觉传感器（DVS）相机的输出。DVS 相机生成的是稀疏、异步的逐像素亮度变化事件流，而非稠密帧；EV-GNN 算法（论文引用了 DAGr-GNN 一系列工作）将这些事件作为一个不断增长的时空图来处理——这一思路原则上兼具高精度与低延迟，但由于其不规则的逐事件计算与内存访问模式，历史上一直难以在真实硬件上高效运行。

ETHEREAL 的架构将以下三部分结合：一个可重构的消息传递数据通路，将基于样条（spline）的卷积分解为三阶段的乘加运算序列；一个围绕相邻事件的空间与时间局部性设计的专用三维时空缓存（论文给出了其在不同数据集上的命中率优势）；以及在二维层采用的二维交织存储体映射，配合「样条跳过」（spline skipping）在样条迭代消息传递阶段略去不必要的样条索引。该芯片已完成流片并实测（源文献的备注信息显示该论文已被接收在「IEEE ESSERC 2026」会议上发表）：论文报告了芯片显微照片与电学特性表征，并给出了加速器级与系统级的负载评测，分辨率达 640×480——论文称这是首个在该分辨率下展示 EV-GNN 处理可扩展性的工作。

## Key technical points (EN)

- **Measured performance**: 25.6 μs end-to-end latency and 1.7 μJ energy per event, measured on the DAGr-GNN workload mapped to DSEC (640x480); the paper states a 10-to-1000x improvement over prior designs. The chip reaches up to 250 MHz at a target 0.95V with 63.2 mW total power; across layer-wise bit-precision configurations the per-event latency/energy spans 17.8-36.5 μs and 1.1-2.3 μJ at 0.95V.
- **Fabricated and measured, not simulated**: implemented in TSMC 28nm; the paper reports a chip microphotograph and measured electrical performance alongside the workload results, rather than post-synthesis or RTL-simulation estimates.
- **Architecture**: a reconfigurable message-passing datapath handles both the linear and spline-based multiply-accumulate phases of graph convolution on shared processing elements; a 3D spatiotemporal cache exploits the fact that new events tend to fall near recent events in both space and time (storing only the most-recent timestamp per (x,y) maximises hit rate; hit rates up to 58% give a 2.4x reduction in read external-memory accesses); in the 2D layers a 2D-interleaved 16-bank memory mapping plus skipping of unnecessary spline indices during the spline-iterative message-passing phase (and clock-gating of unused banks/cores) improves latency per inference by up to 3.8x over a neighbour-serial spline convolution.
- **Scale claim**: the paper states this is the first EV-GNN accelerator demonstrated to scale to 640×480 resolution, the resolution class used by practical DVS cameras rather than small research sensors.
- **Author affiliation split**: Kneip/Lefebvre/Frenkel — TU Delft (Kneip also KU Leuven); Gehrig — University of Zürich and University of Pennsylvania; Catalán Pastor/Scaramuzza — University of Zürich; Verhelst — KU Leuven.

## Key technical points (ZH)

- **实测性能**：在 DAGr-GNN 负载、DSEC（640x480）映射下实测得到端到端延迟 25.6 微秒、每事件能耗 1.7 微焦；论文称相较既有设计提升 10 至 1000 倍。芯片在目标电压 0.95V 下最高达 250 MHz，总功耗 63.2 mW；在不同的逐层位宽配置下，0.95V 时每事件延迟/能耗范围为 17.8-36.5 微秒 / 1.1-2.3 微焦。
- **已流片实测，而非仿真**：芯片以 TSMC 28nm 工艺实现；论文给出了芯片显微照片与实测电学特性，并配合负载评测结果，而非综合后估计或 RTL 仿真数值。
- **架构**：一个可重构的消息传递数据通路，在共享的处理单元上同时处理图卷积中「线性」与「基于样条」两个阶段的乘加运算；一个三维时空缓存，利用新事件在空间与时间上倾向于靠近近期事件这一特性（每个 (x,y) 位置仅保存最近时间戳可使命中率最大化，命中率最高达 58%，对应片外存储读访问减少 2.4 倍）；二维层则采用 16 体交织的二维内存映射，并在样条迭代消息传递阶段跳过不必要的样条索引（并对未使用的存储体/MP 核做时钟门控），相较邀居串行的样条卷积将单次推理延迟最多改善 3.8 倍。
- **规模声明**：论文称这是首个被证明可扩展至 640×480 分辨率的 EV-GNN 加速器——该分辨率对应实用型 DVS 相机，而非小型研究用传感器。
- **作者所属机构划分**：Kneip、Lefebvre、Frenkel —— 代尔夫特理工大学（Kneip 同时属鲁汶大学）；Gehrig —— 苏黎世大学与宾夕法尼亚大学；Catalán Pastor、Scaramuzza —— 苏黎世大学；Verhelst —— 鲁汶大学。

## Why it matters / what's new (EN)

This is a fabricated, measured chip result rather than a simulated or synthesized-only design — the domain's stated calibration bias toward independent measurement over projected numbers applies directly here, and it sits alongside this run's other edge-ai-silicon pick (the BrainScaleS-2 temperature-characterization paper) as a second genuinely hardware-grounded entry in the same run. It also broadens this KB's edge-ai-silicon coverage beyond the LLM/CNN accelerators that have dominated the bin so far, into event-driven vision + graph-neural-network processing — a workload class with a different data pattern (sparse, asynchronous, irregular) than the dense-tensor accelerators this bin usually covers.

## Why it matters / what's new (ZH)

这是一项已流片、经实测的芯片成果，而非仿真或仅完成综合的设计——该领域一贯强调的「独立实测优先于预测数字」的评分取向在此直接适用；本条目与本轮同时收录的另一条边缘 AI 芯片条目（BrainScaleS-2 温度特性表征论文）一道，构成本轮两条真正基于硬件的条目。同时，本条目也将本知识库「边缘 AI 芯片与 NPU」分类此前以大模型/CNN 加速器为主的覆盖面，拓展到了事件驱动视觉与图神经网络处理这一类负载——其数据模式（稀疏、异步、不规则）不同于该分类通常覆盖的稠密张量加速器。

## Images

![Chip microphotograph and measured electrical performance, plus accelerator- and system-level workload evaluation | 芯片显微照片与实测电学性能，及加速器级与系统级负载评测](https://arxiv.org/html/2609.15241v1/Figs/Chip_micro_setup_V2.png)
