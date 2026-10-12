---
id: 2026-10-12_arxiv-gcn-fpga-sparsification-approximate
date_published: 2026-10-05
date_found: 2026-10-12
type: academic-paper
technology: edge-ai
title_en: "Co-Optimizing Graph Sparsification and Approximate Computing for Energy-Efficient FPGA-Based GCN Inference"
title_zh: "面向节能 FPGA GCN 推理的图稀疏化与近似计算协同优化"
url: "https://arxiv.org/abs/2610.06138"
source_quality: abstract_only
topics: [graph-convolutional-networks, FPGA, approximate-computing, sparsification, quantization]
topic_primary: edge-ai-silicon
topics_secondary: [edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

Authors Nathaniel Kaye Mellor, Shreejith Shanker and George Floros target deployment of Graph Convolutional Networks (GCNs) on edge devices by co-designing an FPGA accelerator that combines DSpar graph sparsification, 8-bit quantization, and approximate multipliers, implemented on an AMD Kria KV260 board. Tested across three datasets (Cora, LastFM Asia, and Amazon Photo), the paper's central finding is that the effectiveness of approximate arithmetic is governed by accumulation depth: approximate multipliers are most effective when applied to the sparse aggregation operations, and graph sparsification improves their viability by reducing aggregation depth — complementary techniques.

The combined approach achieves up to 9.88x speedup while maintaining 86.6% classification accuracy on Amazon Photo, and 1.52x speedup with 77.0% accuracy on Cora, while consuming under 1 W of power. The authors frame these results as evidence that graph sparsification and approximate computing work synergistically for low-power edge GCN inference, as complementary techniques. The work is accepted at ICECS 2026.

## Summary (ZH)

作者 Nathaniel Kaye Mellor、Shreejith Shanker 和 George Floros 针对在边缘设备上部署图卷积网络（GCN）的问题，协同设计了一个 FPGA 加速器，结合了 DSpar 图稀疏化、8 比特量化和近似乘法器，并在 AMD Kria KV260 开发板上实现。在三个数据集（Cora、LastFM Asia、Amazon Photo）上的测试表明，论文的核心发现是：近似算术的有效性由累加深度决定——近似乘法器应用于稀疏聚合运算时最有效，图稀疏化通过降低聚合深度提升其可行性——二者是互补的技术。

该组合方案在 Amazon Photo 数据集上实现最高 9.88 倍加速，同时保持 86.6% 的分类精度；在 Cora 数据集上实现 1.52 倍加速，精度为 77.0%，功耗均低于 1 瓦。作者认为这些结果证明图稀疏化与近似计算在低功耗边缘 GCN 推理中是协同作用的互补技术。该工作已被 ICECS 2026 接收。

## Key technical points (EN)

- FPGA accelerator (AMD Kria KV260) co-designing DSpar graph sparsification, 8-bit quantization, and approximate multipliers for GCN inference.
- Key finding: approximate-arithmetic benefit is governed by accumulation depth — approximate multipliers are most effective on sparse aggregation operations, and sparsification improves their viability by reducing aggregation depth; the two are complementary techniques.
- Results: up to 9.88x speedup at 86.6% accuracy (Amazon Photo); 1.52x speedup at 77.0% accuracy (Cora); sub-1W power across tests.
- Accepted at ICECS 2026 (IEEE International Conference on Electronics, Circuits and Systems).

## Key technical points (ZH)

- 在 AMD Kria KV260 FPGA 上协同设计 DSpar 图稀疏化、8 比特量化与近似乘法器，用于 GCN 推理。
- 核心发现：近似算术的收益由累加深度决定——近似乘法器应用于稀疏聚合运算时最有效，稀疏化通过降低聚合深度提升其可行性；二者是互补的技术。
- 结果：Amazon Photo 上最高 9.88 倍加速，精度 86.6%；Cora 上 1.52 倍加速，精度 77.0%；测试中功耗均低于 1 瓦。
- 已被 ICECS 2026（IEEE 国际电子电路与系统会议）接收。

## Why it matters / what's new (EN)

Prior FPGA GCN accelerators focus on sparse computation and memory access; the authors note that combining graph sparsification with approximate arithmetic "remains largely unexplored." This paper's contribution is specifically the finding that sparsification and approximate arithmetic interact (one enables the other's benefit via aggregation depth) rather than simply stacking independently, with sub-1W power numbers on named FPGA hardware across three graph datasets.

## Why it matters / what's new (ZH)

此前的 FPGA GCN 加速器主要优化稀疏计算与访存；作者指出图稀疏化与近似算术的结合"仍基本未被探索"。本文的贡献恰恰在于发现稀疏化与近似算术之间存在相互作用（前者通过降低聚合深度放大后者的收益），而非简单的独立叠加，并在具名的 FPGA 硬件上、针对三个图数据集给出了低于 1 瓦的功耗数据。
