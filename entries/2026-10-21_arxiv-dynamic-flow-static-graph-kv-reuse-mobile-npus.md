---
id: 2026-10-21_arxiv-dynamic-flow-static-graph-kv-reuse-mobile-npus
date_published: 2026-09-28
date_found: 2026-10-21
technology: edge-ai
type: academic-paper
title_en: "Dynamic Flow, Static Graph: prefix and non-prefix KV-cache reuse for on-device LLM serving on mobile NPUs"
title_zh: "Dynamic Flow, Static Graph：面向移动 NPU 端侧大模型服务的前缀与非前缀 KV 缓存复用"
url: "https://arxiv.org/abs/2609.34727"
source_quality: full
topics: [KV-cache-reuse, mobile-NPU, selective-recomputation, ExecuTorch, Hexagon]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency]
novelty_score: 4
---

## Summary (EN)

On-device LLM serving offers data sovereignty and freedom from cloud latency and cost, but time-to-first-token (TTFT) grows with prompt length and reaches several seconds beyond about 2k tokens; the paper notes mobile NPUs run 2 to 5 times slower than cloud GPUs at the same prompt length. KV caching is widely used to cut this latency, but existing designs assume cloud GPUs. Two things block porting them to mobile NPUs: NPUs need statically compiled graphs while selective recomputation is dynamic, and flash bandwidth is too low for large KV tensors (the paper cites about 200 ms to load a 1,024-token Qwen3-1.7B KV cache from flash on a Xiaomi 15 Pro). The paper (accepted at EuroSys 2027, Spring cycle) presents a compute-storage co-design for mobile prefix and non-prefix KV reuse.

It has four parts. An intra-graph mechanism maps selective KV recomputation onto static NPU graphs using fixed-size padded chunks and a validity mask. An inter-graph scheduler uses dynamic programming to choose between the recompute graph and the prefill graph and to merge chunks, minimising padding. A hierarchical KV manager spans an NPU-side buffer (on the order of 10 MB), a CPU hash-table pool (on the order of 100 MB) and a flash SQLite store with a prefix tree, chunk hashes and semantic indices, with cost-aware prefetch and eviction. A two-dimensional pipeline overlaps KV loading, RoPE rerotation and lazy persistence with NPU execution. Evaluation runs ExecuTorch on Qualcomm HTP on three phones (Meizu 21, Xiaomi 15 Pro, Honor Magic 8) with Qwen3 and Llama3.2 models, mostly INT4, on HotpotQA, LoCoMo-MC10 and SkillsBench. The authors' abstract reports TTFT cut by 40 to 60% versus no reuse and prefix caching (per-workload figures range from 32% to 81%), 1.5 to 5.4x prefill speedup over no reuse, accuracy loss of at most 4% on the Qwen3-1.7B/4B runs on HotpotQA and LoCoMo (versus about 30% quality loss for full reuse without recompute), and prefill energy on Qwen3-4B down 52 to 77%.

## Summary (ZH)

端侧大模型服务具有数据自主和免除云端延迟与成本的优势，但首 token 时延（TTFT）随提示长度增加，超过约 2k token 后可达数秒；论文指出同样提示长度下移动 NPU 比云端 GPU 慢 2 至 5 倍。KV 缓存被广泛用于降低这一延迟，但现有设计以云端 GPU 为前提。移植到移动 NPU 有两个障碍：NPU 需要静态编译的计算图，而选择性重算是动态的；闪存带宽也不足以承载大型 KV 张量（论文给出在小米 15 Pro 上从闪存加载 1,024 token 的 Qwen3-1.7B KV 缓存约需 200 ms）。该论文（EuroSys 2027 春季周期录用）提出面向移动端前缀与非前缀 KV 复用的计算-存储协同设计。

方案分四部分。图内机制用固定大小的填充分块和有效性掩码，把选择性 KV 重算映射到静态 NPU 图上。图间调度器用动态规划在重算图与预填充图之间选择并合并分块，以减少填充。分层 KV 管理器横跨 NPU 侧缓冲区（10 MB 量级）、CPU 哈希表池（100 MB 量级）和带前缀树、分块哈希与语义索引的闪存 SQLite 存储，并采用成本感知的预取与淘汰。二维流水线让 KV 加载、RoPE 重旋转和延迟持久化与 NPU 执行重叠。评估在三款手机（魅族 21、小米 15 Pro、荣耀 Magic 8）上用 ExecuTorch 的 Qualcomm HTP 后端运行 Qwen3 与 Llama3.2 模型（多为 INT4），数据集为 HotpotQA、LoCoMo-MC10 和 SkillsBench。作者摘要报告 TTFT 相比无复用和前缀缓存降低 40% 至 60%（各负载数据为 32% 至 81%），预填充相比无复用加速 1.5 至 5.4 倍，在 HotpotQA 和 LoCoMo 上的 Qwen3-1.7B/4B 运行中精度损失至多 4%（不重算的完全复用质量损失约 30%），Qwen3-4B 的预填充能耗降低 52% 至 77%。

## Key technical points (EN)

- Obstacles named: static NPU graphs versus dynamic selective recompute; flash bandwidth versus large KV tensors.
- Intra-graph recompute: fixed-size padded chunks, validity mask excluding padding from top-K, final token always recomputed, scatter-gather write-back; graph sizes in multiples of 32 (prefill graph 128, selective graph 512).
- Inter-graph scheduler: dynamic program per trailing chunk; the paper's toy example cuts prefill calls from 4 to 2.
- Storage tiers: on the order of 10 MB NPU buffer, on the order of 100 MB CPU pool, flash SQLite with prefix tree, 64-bit chunk hashes and semantic indices; asynchronous prefetch, cost-aware eviction.
- Pipeline: loading, rerotation and persistence overlapped with NPU execution; shard-level parallelism cuts non-overlapped prefix loading by 4x.
- Setup: ExecuTorch on Qualcomm HTP; Hexagon V75/V79/V81 phones; Qwen3-1.7B/4B and Llama3.2-1B/3B; baselines are no reuse, prefix caching and full non-prefix reuse.
- Reported results: TTFT -32 to 56% (HotpotQA), -42 to 65% (LoCoMo), -68 to 81% (SkillsBench) versus ExecuTorch; Qwen3-4B prefill energy 24.76 J to 11.89 J, 32.61 J to 10.75 J, 18.02 J to 4.13 J across the three workloads.
- Evaluation scope: only Qualcomm Hexagon NPUs measured (applicability to MediaTek APU and Apple ANE argued in §4.3, not measured); three workloads, four models; recompute ratio fixed at 0.25.

## Key technical points (ZH)

- 指出的障碍：静态 NPU 图与动态选择性重算；闪存带宽与大型 KV 张量。
- 图内重算：固定大小填充分块，有效性掩码将填充排除出 top-K，最后一个 token 始终重算，scatter-gather 回写；图尺寸为 32 的倍数（预填充图 128，选择性图 512）。
- 图间调度器：对每个尾部分块做动态规划；论文的示意例子中预填充调用从 4 次降到 2 次。
- 存储层次：10 MB 量级的 NPU 缓冲区、100 MB 量级的 CPU 池、带前缀树、64 位分块哈希与语义索引的闪存 SQLite；异步预取，成本感知淘汰。
- 流水线：加载、重旋转与持久化与 NPU 执行重叠；分片级并行使未重叠的前缀加载减少 4 倍。
- 设置：ExecuTorch 的 Qualcomm HTP 后端；Hexagon V75/V79/V81 手机；Qwen3-1.7B/4B 与 Llama3.2-1B/3B；基线为无复用、前缀缓存和完全非前缀复用。
- 报告结果：相对 ExecuTorch，TTFT 降低 32% 至 56%（HotpotQA）、42% 至 65%（LoCoMo）、68% 至 81%（SkillsBench）；Qwen3-4B 预填充能耗在三个负载上分别从 24.76 J 降到 11.89 J、32.61 J 降到 10.75 J、18.02 J 降到 4.13 J。
- 评估范围：仅测量了 Qualcomm Hexagon NPU（§4.3 论证了对联发科 APU 与苹果 ANE 的适用性，但未测量）；三个负载、四个模型；重算比例固定为 0.25。

## Why it matters / what's new (EN)

The paper addresses a concrete mismatch between cloud-oriented KV reuse and the static-graph, low-bandwidth reality of phone NPUs, and it reports device-side latency, accuracy and energy on named phones. All numbers are the authors' own measurements on Qualcomm hardware against baselines they selected; the work is accepted at EuroSys 2027 but the camera-ready results were not independently reproduced here.

## Why it matters / what's new (ZH)

论文针对面向云端的 KV 复用与手机 NPU 静态图、低带宽现实之间的具体错配，并在具名手机上报告了端侧时延、精度和能耗。所有数据均为作者在 Qualcomm 硬件上对其选定基线的自测；该工作已被 EuroSys 2027 录用，但此处未对结果做独立复现。

## Images

*(No redistributable images for this entry.)*
