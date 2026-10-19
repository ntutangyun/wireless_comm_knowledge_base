---
id: 2026-10-19_arxiv-edgeflow-kv-cache-migration-collaborative-edge
date_published: 2026-10-15
date_found: 2026-10-19
technology: edge-ai
type: academic-paper
title_en: "EdgeFlow: hybrid KV-cache migration (transmission plus activation recomputation) for LLM inference across collaborating edge servers"
title_zh: "EdgeFlow：面向协作边缘服务器 LLM 推理的混合 KV 缓存迁移（传输加激活重计算）"
url: "https://arxiv.org/abs/2610.22172"
source_quality: abstract_only
topics: [KV-cache, collaborative-edge-computing, distributed-LLM-inference, migration, model-sharding]
topic_primary: edge-orchestration
topics_secondary: [compute-offloading, on-device-inference]
novelty_score: 3
---

## Summary (EN)

In Collaborative Edge Computing (CEC), several geo-distributed, heterogeneous edge servers jointly host small shards of an LLM together with the associated key-value (KV) cache. Edge servers can disconnect or become overloaded, so stateful KV cache has to be migrated to other servers to keep service running. The authors argue that cloud-oriented KV management, such as direct cross-GPU transmission or recomputation from input tokens, is ill-suited to bandwidth-constrained, resource-limited edge environments.

EdgeFlow is a hybrid migration scheme that combines direct KV-cache transmission with activation-based recomputation, using parallel computation and communication to shorten migration time. On top of that the paper formulates a multi-node KV migration optimisation problem and gives a 2-approximation algorithm based on an improved linear-programming relaxation and bipartite-graph techniques. Experiments on a real distributed LLM inference platform show up to 45% less migration time.

## Summary (ZH)

在协作边缘计算（CEC）中，多个地理分布、异构的边缘服务器共同承载 LLM 的小模型分片及相应的键值（KV）缓存。边缘服务器可能断连或过载，因此必须把有状态的 KV 缓存迁移到其他服务器以保持服务不中断。作者认为，面向云的 KV 管理方式（如跨 GPU 直接传输或由输入 token 重新计算）不适合带宽和资源受限的边缘环境。

EdgeFlow 是一种混合迁移方案，把 KV 缓存直接传输与基于激活值的重计算结合起来，利用计算与通信并行来缩短迁移时间。在此基础上，论文建立了多节点 KV 迁移优化问题，并基于改进的线性规划松弛和二部图技术给出 2-近似算法。在真实的分布式 LLM 推理平台上的实验显示迁移时间最多减少 45%。

## Key technical points (EN)

- Setting: LLM shards and KV cache spread across geo-distributed heterogeneous edge servers (Collaborative Edge Computing).
- Problem: server disconnect or overload forces stateful KV-cache migration under tight bandwidth.
- Mechanism: hybrid of direct KV transmission and activation-based recomputation, overlapped in time.
- Optimisation: multi-node migration formulated as a problem with a 2-approximation algorithm (improved LP relaxation plus bipartite-graph techniques).
- Evaluation: real distributed LLM inference platform; up to 45% shorter migration time.

## Key technical points (ZH)

- 场景：LLM 分片与 KV 缓存分布在地理分散的异构边缘服务器上（协作边缘计算）。
- 问题：服务器断连或过载时，需要在带宽紧张的条件下迁移有状态的 KV 缓存。
- 机制：KV 直接传输与基于激活值的重计算混合，并在时间上重叠。
- 优化：多节点迁移被建模为优化问题，给出 2-近似算法（改进的 LP 松弛加二部图技术）。
- 评估：真实的分布式 LLM 推理平台；迁移时间最多缩短 45%。

## Why it matters / what's new (EN)

This addresses a failure-handling gap in edge-hosted LLM serving: what happens to per-session state when an edge node drops out. The 45% figure is an upper bound from the authors' own testbed, and this record is based on the abstract only.

## Why it matters / what's new (ZH)

这针对边缘托管 LLM 服务中的一个故障处理缺口：边缘节点掉线时每个会话的状态如何处理。45% 为作者自有测试平台上的上限数值，本条目仅基于摘要。

## Images

*(No redistributable images for this entry.)*
