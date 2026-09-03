---
id: 2026-09-03_arxiv-mzcache-on-device-llm-multitasking-memory
date_published: 2026-09-01
date_found: 2026-09-03
type: academic-paper
technology: edge-ai
title_en: "mzCache: on-device LLM memory management for multitasking phones"
title_zh: "mzCache：面向多任务手机场景的端侧 LLM 内存管理系统"
url: "https://arxiv.org/abs/2609.01338"
source_quality: full
topics: [memory-management, KV-cache-eviction, mobile-LLM, multitasking, storage-backed-offload, Android]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

On-device mobile LLM inference is usually benchmarked as if the phone were doing nothing else, but real phones run in a multitasking environment where switching apps creates memory pressure and the OS evicts LLM memory (model weights and KV cache). When a new inference request then arrives, the system has to restore that evicted state — via slow storage reads or by recomputing the KV cache from scratch — which badly hurts responsiveness. mzCache (Seoul National University and UC Berkeley) is an on-device LLM inference system built specifically to manage memory under this multitasking eviction/restoration cycle.

Its design has three parts. First, fine-grained partitioning: instead of a monolithic memory allocation, weights are split at the layer level and the KV cache into fixed-size chunks, enabling elastic (partial) eviction rather than all-or-nothing. Second, a hybrid swap strategy that spreads the KV cache across in-memory compression and storage rather than committing exclusively to one path, balancing restoration load between them. Third, a backward-out/forward-in eviction and restoration order — evicting later transformer layers first and restoring from the front — so early layers needed immediately for the next inference stay resident, letting GPU computation on those layers proceed concurrently with CPU-side restoration of the rest.

Evaluated on two commercial Android phones (Galaxy S25+ with a Qualcomm Oryon CPU and Adreno 830 GPU, and OnePlus 12 with Cortex-X4/A720 cores and Adreno 750 GPU, both 12GB LPDDR5X / UFS 4.0), mzCache achieves a 2.1–5.5× reduction in Time-to-First-Token compared to a storage-backed partial-offload baseline. Under full eviction specifically, the paper reports 2.5–3.0× speedup over standard OS paging on the Galaxy S25+ and 9.2–25.9× on the OnePlus 12. The two phones carry the same memory and storage class (12GB LPDDR5X / UFS 4.0), and the paper attributes the much larger gap on the OnePlus 12 to that device's OS paging behaviour: resident set size sometimes decreased, and on-demand page faults triggered additional evictions of already-resident pages — a cascading effect that further increases TTFT.

## Summary (ZH)

端侧手机 LLM 推理的评测通常假设手机没有在做其他事情，但真实手机运行在多任务环境中：应用切换会产生内存压力，操作系统会将 LLM 相关内存（模型权重与 KV 缓存）换出。当新的推理请求到来时，系统必须恢复这些被换出的状态——通过缓慢的存储读取，或从头重新计算 KV 缓存——这会严重损害响应速度。mzCache（首尔国立大学与加州大学伯克利分校）是一套专门针对这种"多任务换出/恢复"循环而设计的端侧 LLM 推理内存管理系统。

其设计包含三部分。其一，细粒度分区：不采用整体式内存分配，而是在层级别拆分权重，并将 KV 缓存划分为固定大小的块，从而支持弹性（部分）换出而非全有全无式换出。其二，混合换出策略：将 KV 缓存同时分布在内存内压缩与存储两条路径上，而非只依赖其中一条，从而在两者之间平衡恢复负载。其三，"后出前进"的换出与恢复顺序——优先换出较靠后的 Transformer 层，并从前面的层开始恢复——使得下一次推理立即需要的前部层能保持驻留，让针对这些层的 GPU 计算能够与其余部分的 CPU 端恢复并发进行。

在两款商用安卓手机上（搭载高通 Oryon CPU 与 Adreno 830 GPU 的 Galaxy S25+，以及搭载 Cortex-X4/A720 核心与 Adreno 750 GPU 的 OnePlus 12，均配备 12GB LPDDR5X 内存与 UFS 4.0 存储）评测，mzCache 相比"存储支持的部分卸载"基线，首 token 时延（TTFT）降低 2.1–5.5 倍。在完全换出的场景下，论文报告 Galaxy S25+ 上相比标准操作系统换页有 2.5–3.0 倍加速，OnePlus 12 上则达到 9.2–25.9 倍。两款手机的内存与存储规格相同（均为 12GB LPDDR5X / UFS 4.0），论文将 OnePlus 12 上明显更大的差距归因于该设备的操作系统换页行为：其常驻集大小（RSS）有时不升反降，按需缺页会触发对已驻留页面的额外换出，形成级联效应，进一步推高 TTFT。

## Key technical points (EN)

- **Problem**: OS-level memory eviction under multitasking forces slow storage reads or full KV-cache recomputation on the next inference request, degrading responsiveness.
- **Mechanism 1 — fine-grained partitioning**: layer-level weight splitting + fixed-size KV-cache chunking → elastic partial eviction instead of monolithic all-or-nothing.
- **Mechanism 2 — hybrid swap**: KV cache spread across in-memory compression and storage, balancing restoration load across both paths.
- **Mechanism 3 — backward-out/forward-in ordering**: evict later layers first, restore from the front, so early layers stay available for immediate use while later-layer restoration proceeds concurrently.
- **Test devices**: Galaxy S25+ (Qualcomm Oryon, Adreno 830) and OnePlus 12 (Cortex-X4/A720, Adreno 750), both 12GB LPDDR5X / UFS 4.0 — deployed as an Android application, not a simulator.
- **Headline numbers**: 2.1–5.5× TTFT reduction vs. storage-backed partial offload; under full eviction, 2.5–3.0× vs. OS paging on Galaxy S25+ and 9.2–25.9× on OnePlus 12.

## Key technical points (ZH)

- **问题**：多任务场景下操作系统级的内存换出，会导致下一次推理请求触发缓慢的存储读取或完整的 KV 缓存重算，损害响应速度。
- **机制一——细粒度分区**：按层拆分权重 + 固定大小的 KV 缓存分块 → 支持弹性部分换出，而非整体式全有全无换出。
- **机制二——混合换出**：KV 缓存同时分布在内存内压缩与存储两条路径上，在两者间平衡恢复负载。
- **机制三——"后出前进"顺序**：优先换出较靠后的层，从前面的层开始恢复，使下一次推理立即需要的前部层保持可用，同时后部层的恢复可与前部层的 GPU 计算并发进行。
- **测试设备**：Galaxy S25+（高通 Oryon、Adreno 830）与 OnePlus 12（Cortex-X4/A720、Adreno 750），均配备 12GB LPDDR5X / UFS 4.0——以安卓应用形式部署，而非模拟器。
- **核心数据**：相比"存储支持的部分卸载"基线，TTFT 降低 2.1–5.5 倍；完全换出场景下，相比操作系统换页，Galaxy S25+ 上加速 2.5–3.0 倍，OnePlus 12 上加速 9.2–25.9 倍。

## Why it matters / what's new (EN)

Almost all on-device-LLM benchmarking implicitly assumes a foreground-only, single-task phone; mzCache is a rare piece of work that measures — and fixes — what actually happens under the multitasking conditions a real phone is in most of the time. The three mechanisms are genuinely architectural (partition granularity, swap-path balancing, restoration ordering) rather than a parameter tweak, and the evaluation on two different real flagship phones, with a large device-to-device gap in the reported speedup (2.5–3.0× vs. 9.2–25.9× under full eviction) despite matched memory and storage specifications, is itself informative: it shows the benefit of a memory-management redesign like this depends heavily on how a given device's OS handles paging, which matters for anyone trying to generalize a single benchmark result across the fragmented Android landscape.

## Why it matters / what's new (ZH)

几乎所有端侧 LLM 评测都隐含假设手机处于前台单任务状态；mzCache 是少见的、真正测量并解决了"真实手机大部分时间所处的多任务状态下会发生什么"的工作。其三项机制（分区粒度、换出路径平衡、恢复顺序）确实属于架构层面的改动，而非参数调优；同时其在两款不同真实旗舰手机上的评测——在内存与存储规格相同的前提下，完全换出场景下加速比仍在 2.5–3.0 倍与 9.2–25.9 倍之间存在明显设备间差异——本身也很有信息量：它说明此类内存管理重新设计带来的收益高度依赖具体设备操作系统的换页行为，这对试图将单一评测结果推广到碎片化的安卓生态的人而言是重要提醒。

## Images

*(No redistributable images for this entry — text-only technical summary.)*
