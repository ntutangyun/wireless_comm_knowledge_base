---
id: 2026-09-07_arxiv-kvswap-disk-aware-kv-cache-on-device
date_published: 2025-11-14
date_found: 2026-09-07
type: academic-paper
technology: edge-ai
title_en: "KVSwap: Disk-aware KV Cache Offloading for Long-Context On-device Inference"
title_zh: "KVSwap：面向长上下文端侧推理的磁盘感知 KV 缓存卸载"
url: "https://arxiv.org/abs/2511.11907"
source_quality: full
topics: [KV-cache, long-context, disk-offloading, MobiSys, Jetson, unified-memory]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

On-device language models are increasingly used for tasks that need long context — meeting summarization, video summarization, document analysis — but long-context inference hits a hard memory wall: the KV (key-value) cache grows linearly with context length and batch size, and mobile/embedded devices don't have the DRAM headroom that GPU-cluster serving assumes. Existing KV-cache offloading schemes were built for datacenter GPUs, where the pattern is "GPU memory to CPU memory" over a fast PCIe link. That doesn't transfer to embedded and mobile systems, where CPU and GPU (or NPU) typically share unified memory and the only overflow destination is non-volatile secondary storage (disk/flash) with much more limited I/O bandwidth (KVSwap's own testbed reports 1.8 GB/s for NVMe and 250 MB/s for eMMC).

KVSwap (University of Leeds) is a software framework purpose-built for that constraint. It stores the full KV cache on disk rather than trying to keep everything resident, and relies on the observation that only a small, dynamically-changing subset of cached entries is actually needed for the next generation step. A compact in-memory metadata structure predicts which entries will be needed and triggers preloading; computation is overlapped with the resulting disk access; and read patterns are shaped to match the specific storage device's own I/O characteristics (sequential vs. random access costs differ substantially between NVMe and eMMC).

Evaluated on an NVIDIA Jetson AGX Orin (12-core Cortex-A78 CPU, Ampere GPU with 2048 CUDA cores, 64 GB unified RAM) with both NVMe (1.8 GB/s) and eMMC (250 MB/s) storage, against vLLM and four KV-cache-management baselines (InfiniGen, FlexGen, ShadowKV, Loki), KVSwap delivers up to 1.8x (NVMe) and 4.1x (eMMC) throughput improvement at 32K context length — the gap widening on the slower storage medium is itself informative about where the bottleneck sits. At batch size 16 on NVMe, KVSwap reaches 46.79 tokens/second versus vLLM's 23.21. KVSwap is evaluated down to a memory budget of 1/34 of the full KV cache; against vLLM it reduces KV-cache memory by 15.9x-39.7x while still giving 1.1x higher throughput, and keeps accuracy loss to 5.6% or less (as low as -2.6% on the RULER long-context benchmark for the NVMe variant). The paper is accepted at ACM MobiSys 2026 (Cambridge, UK, June 2026); the version read for this entry is the arXiv preprint (submitted 2025-11-14, revised 2025-12-11).

## Summary (ZH)

端侧语言模型正被越来越多地用于需要长上下文的任务——会议摘要、视频摘要、文档分析——但长上下文推理会遇到一个硬性的内存瓶颈：KV（键值）缓存随上下文长度与批大小线性增长，而移动/嵌入式设备并不具备 GPU 集群服务场景所假设的那种 DRAM 余量。现有的 KV 缓存卸载方案是为数据中心 GPU 设计的，其模式是通过高速 PCIe 链路在"GPU 显存到 CPU 内存"之间转移。这一模式无法直接迁移到嵌入式与移动系统上，因为这类系统的 CPU 与 GPU（或 NPU）通常共享统一内存，唯一的溢出去处是 I/O 带宽有限得多的非易失性二级存储（磁盘/闪存）（KVSwap 自身的测试平台测得 NVMe 为 1.8GB/s，eMMC 为 250MB/s）。

KVSwap（利兹大学）是一套针对该约束专门设计的软件框架。它将完整的 KV 缓存存放在磁盘上，而非试图让全部内容常驻内存，并依据一个观察：在任意时刻，实际用于下一步生成的缓存条目只是一个动态变化的小子集。一个紧凑的内存中元数据结构预测哪些条目即将被需要并触发预加载；计算过程与由此产生的磁盘访问相互重叠；读取模式经过设计以匹配具体存储设备自身的 I/O 特性（顺序访问与随机访问的代价在 NVMe 与 eMMC 之间存在显著差异）。

该方案在 NVIDIA Jetson AGX Orin（12 核 Cortex-A78 CPU，Ampere GPU，2048 个 CUDA 核心，64GB 统一内存）上评测，分别测试 NVMe（1.8GB/s）与 eMMC（250MB/s）两种存储，并与 vLLM 及四个 KV 缓存管理基线（InfiniGen、FlexGen、ShadowKV、Loki）对比：在 32K 上下文长度下，KVSwap 分别带来最高 1.8 倍（NVMe）与 4.1 倍（eMMC）的吞吐量提升——在较慢存储介质上差距进一步拉大，这本身就说明了瓶颈所在。在 NVMe、批大小为 16 时，KVSwap 达到 46.79 tokens/秒，而 vLLM 为 23.21。KVSwap 的评测覆盖到低至完整 KV 缓存 1/34 的内存预算；相较 vLLM，其 KV 缓存内存降幅为 15.9-39.7 倍，同时吞吐量仍提升 1.1 倍，并将精度损失控制在 5.6% 以内（NVMe 变体在 RULER 长上下文基准上的精度损失低至 -2.6%）。该论文已被 ACM MobiSys 2026（英国剑桥，2026 年 6 月）录用；本条目所读取的版本为 arXiv 预印本（提交于 2025-11-14，修订于 2025-12-11）。

## Key technical points (EN)

- **Problem**: long-context on-device LLM inference hits a KV-cache memory wall; datacenter-style GPU-to-CPU-memory offloading doesn't apply to embedded/mobile systems, where CPU/GPU share unified memory and the only overflow target is bandwidth-limited disk/flash.
- **Mechanism**: full KV cache stored on disk; compact in-memory metadata predicts the small, dynamically-changing subset of entries needed next and triggers preloading; computation overlaps with disk access; read patterns are shaped to the specific storage device's own I/O characteristics (NVMe vs. eMMC).
- **Hardware**: NVIDIA Jetson AGX Orin (12-core Cortex-A78, Ampere GPU/2048 CUDA cores, 64 GB unified RAM), NVMe (1.8 GB/s) and eMMC (250 MB/s) storage.
- **Baselines**: vLLM, InfiniGen, FlexGen, ShadowKV, Loki.
- **Headline numbers**: 1.8x (NVMe) / 4.1x (eMMC) throughput at 32K context; 46.79 vs. 23.21 tokens/s (vLLM) at batch 16 on NVMe; evaluated down to a memory budget of 1/34 of the full KV cache, with 15.9x-39.7x memory reduction vs. vLLM while still giving 1.1x higher throughput; accuracy loss <=5.6% (as low as -2.6% on RULER for the NVMe variant).
- **Venue**: accepted at ACM MobiSys 2026 (Cambridge, UK, June 2026) — confirmed via the conference's accepted-papers listing.
- **Authors**: Huawei Zhang, Chunwei Xia, Zheng Wang (University of Leeds).

## Key technical points (ZH)

- **问题**：端侧长上下文 LLM 推理遭遇 KV 缓存内存瓶颈；数据中心式的 GPU 到 CPU 内存卸载模式不适用于嵌入式/移动系统——这类系统 CPU/GPU 共享统一内存，唯一的溢出去处是带宽受限的磁盘/闪存。
- **机制**：将完整 KV 缓存存放于磁盘；紧凑的内存中元数据预测下一步所需的动态变化小子集并触发预加载；计算过程与磁盘访问相互重叠；读取模式针对具体存储设备（NVMe 与 eMMC）的 I/O 特性进行适配。
- **硬件**：NVIDIA Jetson AGX Orin（12 核 Cortex-A78，Ampere GPU/2048 CUDA 核心，64GB 统一内存），NVMe（1.8GB/s）与 eMMC（250MB/s）存储。
- **对比基线**：vLLM、InfiniGen、FlexGen、ShadowKV、Loki。
- **核心数据**：在 32K 上下文下，吞吐量提升 1.8 倍（NVMe）/4.1 倍（eMMC）；批大小 16、NVMe 存储下达到 46.79 tokens/秒，vLLM 为 23.21；评测覆盖到低至完整 KV 缓存 1/34 的内存预算，相较 vLLM 内存降幅 15.9-39.7 倍，同时吞吐量仍提升 1.1 倍；精度损失不超过 5.6%（NVMe 变体在 RULER 基准上低至 -2.6%）。
- **发表**：已被 ACM MobiSys 2026（英国剑桥，2026 年 6 月）录用——已通过该会议的录用论文列表确认。
- **作者**：Huawei Zhang、Chunwei Xia、Zheng Wang（利兹大学）。

## Why it matters / what's new (EN)

This KB already tracks storage-backed on-device LLM systems from the memory/eviction angle (`2026-08-28_arxiv-neuroprefetcher-storage-backed-edge-llm`, `2026-09-03_arxiv-mzcache-on-device-llm-multitasking-memory`, `2026-09-04_arxiv-leanstream-on-device-llm-streaming`), but KVSwap targets the long-context KV-cache problem specifically, rather than weight streaming or cross-app memory contention, and is the first entry to explicitly benchmark the NVMe-vs-eMMC storage-medium distinction (a real hardware variable across different device tiers) rather than treating "disk" as one undifferentiated tier. It also closes a specific open item in this scout's own source coverage: `mobile-systems-venues` had been contacted for the first time on 2026-09-04 and surfaced a list of MobiSys 2026 titles without dates or links; this run went directly to the conference's own accepted-papers page, confirmed KVSwap's June 2026 acceptance, and located its arXiv preprint independently.

## Why it matters / what's new (ZH)

本知识库此前已从内存/换出角度收录过存储支持的端侧 LLM 系统（`2026-08-28_arxiv-neuroprefetcher-storage-backed-edge-llm`、`2026-09-03_arxiv-mzcache-on-device-llm-multitasking-memory`、`2026-09-04_arxiv-leanstream-on-device-llm-streaming`），但 KVSwap 专门针对长上下文 KV 缓存问题，而非权重流式加载或跨应用内存争用，也是本知识库首个明确对比 NVMe 与 eMMC 两种存储介质差异（不同设备档位间的真实硬件变量）的条目，而非笼统地将"磁盘"视为单一层级处理。本条目同时补上了本采集流程自身此前留下的一个空缺：`mobile-systems-venues` 这一信息源于 2026-09-04 首次被联系，当时只得到一份不含日期或链接的 MobiSys 2026 论文标题清单；本次直接访问了该会议自身的录用论文页面，确认了 KVSwap 于 2026 年 6 月被录用的信息，并独立定位到其 arXiv 预印本。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
