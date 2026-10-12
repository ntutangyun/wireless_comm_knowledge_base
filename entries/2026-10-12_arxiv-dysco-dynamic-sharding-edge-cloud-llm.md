---
id: 2026-10-12_arxiv-dysco-dynamic-sharding-edge-cloud-llm
date_published: 2026-10-06
date_found: 2026-10-12
type: academic-paper
technology: edge-ai
title_en: "DySCo: Dynamic Sharding for Collaborative Edge-Cloud LLM Inference with Depth-Synchronized Batching"
title_zh: "DySCo：面向协同边缘-云端 LLM 推理的动态分片与深度同步批处理"
url: "https://arxiv.org/abs/2610.08268"
source_quality: full
topics: [edge-cloud-inference, model-sharding, LLM-serving, KV-cache, heterogeneous-batching]
topic_primary: compute-offloading
topics_secondary: [on-device-inference]
novelty_score: 4
---

## Summary (EN)

Researchers from the University of Amsterdam and TU Wien address layer-wise edge-cloud LLM inference, where a resource-constrained edge device executes a model "prefix" (the first c of L decoder layers) and passes the cut-layer hidden state to a cloud-resident "suffix" that completes the forward pass. This split lets an edge device contribute compute to a model it cannot host in full, but the authors identify two coupled inefficiencies this creates on the cloud side: edge computation and network transfer leave idle gaps between cloud invocations, and because different edge devices may choose different cut layers, requests arrive at the cloud at different "depths" and cannot be batched by conventional means.

Their system, DySCo, keeps KV caches local to each side and introduces two mechanisms. First, dyForward is a model-aware layer-range executor (implemented for Llama and Qwen) that runs any configurable contiguous range of decoder layers from a single resident model shard, avoiding the need to materialize a separate model instance for every possible cut point. Second, depth-synchronized batching (DSB) advances heterogeneous in-flight requests to their common deepest cut point and then batches the shared suffix computation across them, rather than processing each depth separately or waiting for an exact match.

Experiments across heterogeneous devices, two model families, and both local and wide-area network links measured that idle gaps between cloud invocations add up to 25 ms of extra cloud-side suffix latency per decoding step even when explicit waiting time is excluded, because idle gaps increase the latency of subsequent GPU forward calls (the authors cite GPU power/frequency-state transitions as plausible contributors). At an average concurrency of eight requests, DSB improved throughput by 275% over simple FIFO dispatch, by 48% over exact-cut-match batching, and by 79% over round-robin interleaving, while also reducing mean per-session latency. The authors keep model weights unchanged and fix each request's cut layer for the duration of generation, leaving joint cut-layer selection and scheduler adaptation to future work. The artifact is publicly released.

## Summary (ZH)

来自阿姆斯特丹大学和维也纳技术大学的研究者研究了逐层边缘-云协同 LLM 推理问题：资源受限的边缘设备执行模型的"前缀"部分（L 层解码器中的前 c 层），并将切分层的隐藏状态传给云端驻留的"后缀"部分完成前向计算。这种切分方式让边缘设备能够为自己无法完整承载的模型贡献算力，但作者指出这在云端造成了两个相互耦合的低效问题：边缘计算与网络传输会在云端调用之间产生空闲间隔；并且由于不同边缘设备可能选择不同的切分层，请求到达云端时处于不同的"深度"，无法用传统方式进行批处理。

他们提出的系统 DySCo 让 KV 缓存分别保留在边缘侧和云端侧，并引入两项机制。第一，dyForward 是一种模型感知的层范围执行器（针对 Llama 和 Qwen 实现），能够从单一驻留模型分片中运行任意可配置的连续解码层区间，从而避免为每一种可能的切分点都实例化一个独立的模型副本。第二，深度同步批处理（DSB）将多个异构的在途请求推进到它们共同的最深切分点，再对它们共享的后缀计算进行批处理，而不是逐深度单独处理或等待精确匹配。

在异构设备、两种模型系列、以及本地和广域网链路上进行的实验测得：即便排除显式等待时间，云端调用之间的空闲间隔仍会在每个解码步骤上为云端后缀延迟增加最多 25 毫秒，因为空闲间隔会增加后续 GPU 前向调用的延迟（作者认为 GPU 功耗/频率状态切换可能是原因之一）。在平均并发数为 8 的情况下，DSB 相较简单的 FIFO 调度将吞吐量提升 275%，相较精确切分匹配批处理提升 48%，相较轮询交错方式提升 79%，同时降低了平均单会话延迟。作者保持模型权重不变，并在生成过程中固定每个请求的切分层，将联合切分层选择与调度器自适应留作未来工作。该研究的代码已公开发布。

## Key technical points (EN)

- Layer-wise edge-cloud split: edge executes decoder layers [0, c), cloud executes [c, L) plus final norm, LM head and token selection; each side keeps its own local KV cache, which is not transferred on the normal per-token path.
- dyForward: a model-aware layer-range executor for Llama/Qwen that invokes only a selected contiguous decoder range from one resident shard, avoiding per-cut model duplication.
- Depth-synchronized batching (DSB): advances heterogeneous requests to their shared deepest cut point and batches the common suffix computation, instead of FIFO, exact-match, or round-robin dispatch.
- Measured idle-gap cost: up to 25 ms of additional cloud-side suffix latency per decoding step, independent of explicit wait time; idle gaps increase subsequent GPU forward-call latency, with GPU power/frequency-state transitions cited by the authors as plausible contributors.
- At concurrency 8: +275% throughput vs. FIFO, +48% vs. exact-match batching, +79% vs. round-robin interleaving, with lower mean per-session latency; evaluated across heterogeneous devices, two model families, and local/wide-area links.
- Artifact publicly released at github.com/Large-scale-Sustainable-Computing-LSC/dysco-artifact.

## Key technical points (ZH)

- 逐层边缘-云切分：边缘执行解码层 [0, c)，云端执行 [c, L) 以及最终归一化、LM head 和 token 选择；两侧各自维护本地 KV 缓存，在常规逐 token 路径中不传输。
- dyForward：面向 Llama/Qwen 的模型感知层范围执行器，仅从单一驻留分片中调用选定的连续解码层区间，避免为每个切分点重复实例化模型。
- 深度同步批处理（DSB）：将异构请求推进到共同的最深切分点，并对共享的后缀计算进行批处理，取代 FIFO、精确匹配或轮询调度。
- 测得的空闲间隔代价：即使排除显式等待时间，每个解码步骤的云端后缀延迟仍会增加最多 25 毫秒；空闲间隔会增加后续 GPU 前向调用的延迟，作者认为 GPU 功耗/频率状态切换可能是原因之一。
- 并发数为 8 时：相较 FIFO 吞吐量提升 275%，相较精确匹配批处理提升 48%，相较轮询交错提升 79%，且平均单会话延迟更低；在异构设备、两种模型系列及本地/广域网链路上均完成评估。
- 代码已在 github.com/Large-scale-Sustainable-Computing-LSC/dysco-artifact 公开发布。

## Why it matters / what's new (EN)

DySCo targets a fleet of edge devices that each choose their own cut layer dynamically, and shows this creates a cloud-side scheduling problem (idle gaps, unbatchable depths). The 275% throughput gain from batching across heterogeneous cut points is a concrete systems result rather than an accuracy/latency trade-off, and it is directly relevant to any deployment serving many edge devices against a shared cloud backend.

## Why it matters / what's new (ZH)

DySCo 针对一组各自动态选择切分层的边缘设备群体，并指出这会在云端产生调度问题（空闲间隔、深度不可批处理）。275% 的吞吐量提升是一项具体的系统性结果，而非精度与延迟之间的权衡，对于任何需要让大量边缘设备共用同一云端后端的部署场景都具有直接意义。
