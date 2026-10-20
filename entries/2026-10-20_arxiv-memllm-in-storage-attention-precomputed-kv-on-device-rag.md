---
id: 2026-10-20_arxiv-memllm-in-storage-attention-precomputed-kv-on-device-rag
date_published: 2026-10-15
date_found: 2026-10-20
technology: edge-ai
type: academic-paper
title_en: "MemLLM: End-to-end In-Storage Acceleration of On-device Retrieval-Augmented Generation using Precomputed KV Caches"
title_zh: "MemLLM：利用预计算 KV 缓存实现端侧检索增强生成的端到端存储内加速"
url: "https://arxiv.org/abs/2610.22579"
source_quality: full
topics: [in-storage-processing, RAG, KV-cache, SSD, on-device-LLM, prefill]
topic_primary: edge-ai-silicon
topics_secondary: [on-device-inference, edge-model-efficiency]
novelty_score: 3
---

## Summary (EN)

Retrieval-augmented generation (RAG) on edge devices allows personalized LLM inference while keeping data private. The authors say RAG's length asymmetry makes the prefill phase the dominant bottleneck. Precomputing KV caches offline eases prefill on servers, but the multi-gigabyte caches then hit an I/O wall over the narrow interconnect of an on-device system. MemLLM is an end-to-end in-storage processing (ISP) architecture that executes the complete attention pipeline over precomputed KV caches inside the SSD. It uses per-channel accelerators to exploit the aggregate NAND channel bandwidth, a fused recomputation-query kernel with hardware filter logic to halve NAND read volume and avoid write-back, and a global SRAM-based stateful reduction engine for a DRAM-less dataflow that bounds PCIe egress to an O(1) footprint. A software stack provides asynchronous zero-copy transfers to the host and transparent execution within ML frameworks. Across eight RAG datasets and six on-device LLMs, MemLLM reports an average end-to-end speedup of 4.06x over the GPU baseline. The paper is listed as to be published at IEEE/ACM MICRO 2026.

## Summary (ZH)

边缘设备上的检索增强生成（RAG）可以在保护数据隐私的同时实现个性化 LLM 推理。作者指出，RAG 的长度不对称使预填充（prefill）阶段成为主要瓶颈。离线预计算 KV 缓存可缓解服务器上的预填充开销，但数 GB 的缓存在端侧系统狭窄的互连上会撞上 I/O 墙。MemLLM 是一种端到端的存储内处理（ISP）架构，在 SSD 内部执行基于预计算 KV 缓存的完整注意力流水线。它用逐通道加速器利用 NAND 通道的聚合带宽，用带硬件过滤逻辑的融合重计算-查询内核把 NAND 读取量减半并避免回写，并用基于 SRAM 的全局有状态归约引擎实现无 DRAM 数据流，把 PCIe 出口流量限制在 O(1)。软件栈支持向主机的异步零拷贝传输，并可在 ML 框架中透明执行。在八个 RAG 数据集和六个端侧 LLM 上，MemLLM 报告相对 GPU 基线平均端到端加速 4.06 倍。该论文标注将发表于 IEEE/ACM MICRO 2026。

## Key technical points (EN)

- Problem: precomputed multi-GB KV caches create an I/O wall over the on-device interconnect for RAG prefill.
- Architecture: attention pipeline over precomputed KV caches executed inside the SSD (ISP), with per-channel accelerators.
- Sparse updates: fused recomputation-query kernel plus hardware filter logic to halve NAND read volume and remove write-back.
- Dataflow: SRAM-based stateful reduction engine, DRAM-less, PCIe egress bounded to O(1).
- Evaluation: eight RAG datasets, six on-device LLMs; 4.06x average end-to-end speedup over a GPU baseline.
- Venue: to be published at IEEE/ACM MICRO 2026.

## Key technical points (ZH)

- 问题：预计算的数 GB KV 缓存在端侧互连上为 RAG 预填充造成 I/O 墙。
- 架构：在 SSD 内部执行基于预计算 KV 缓存的注意力流水线（ISP），配逐通道加速器。
- 稀疏更新：融合重计算-查询内核加硬件过滤逻辑，使 NAND 读取量减半并消除回写。
- 数据流：基于 SRAM 的有状态归约引擎，无 DRAM，PCIe 出口流量限制为 O(1)。
- 评测：八个 RAG 数据集、六个端侧 LLM；相对 GPU 基线平均端到端加速 4.06 倍。
- 发表：将发表于 IEEE/ACM MICRO 2026。

## Why it matters / what's new (EN)

It executes the attention pipeline over precomputed KV caches inside the SSD to remove the on-device I/O wall; the paper reports that KV-cache compression methods (quantization, SnapKV, KVZip) are orthogonal to and composable with it. The 4.06x figure comes from the authors' simulation-based evaluation (a cycle-accurate SSD simulator plus Jetson Orin GPU profiling) of a proposed design.

## Why it matters / what's new (ZH)

它在 SSD 内部执行基于预计算 KV 缓存的注意力流水线，以消除端侧 I/O 墙；论文称 KV 缓存压缩方法（量化、SnapKV、KVZip）与其正交且可组合。4.06 倍的数字来自作者基于仿真（周期精确 SSD 模拟器加 Jetson Orin GPU 实测）对所提设计的评估。

## Images

*(No redistributable images for this entry.)*
