---
id: 2026-06-30_arxiv-subedge-subscriber-centric-mec-6g
date_published: 2026-06-29
date_found: 2026-06-30
type: academic-paper
technology: cellular
title_en: "SubEdge: A Subscriber-Centric Edge Computing Subsystem in 6G Networks for AI"
title_zh: "SubEdge：面向 AI 的 6G 网络以用户为中心的边缘计算子系统"
url: "https://arxiv.org/abs/2606.30554"
source_quality: abstract_only
topics: [6G, MEC, edge-AI, mobility, container-migration, network-slicing]
topic_primary: mec
topics_secondary: [6g-vision, cellular-ai]
novelty_score: 2
---

## Summary (EN)
SubEdge proposes provisioning edge compute and communication on a **per-subscriber** basis in 6G, rather than the usual per-cell or per-application granularity. The core abstraction is a "computing context" — a data structure that binds a subscriber to their inference workload, its container, and the network path serving it. When a subscriber moves and switches cells, SubEdge migrates **both** the inference container **and** the traffic routing in a single coordinated operation, so the compute follows the user and the data plane is re-stitched without an application-visible break.

The system is motivated by latency-sensitive on-network AI inference (real-time AI workloads at the edge), where naive cell handover would either strand the inference state on the old edge node or force a cold restart on the new one. By treating the subscriber as the unit of provisioning and migration, SubEdge keeps the inference container "warm" and co-located with the user across mobility events.

Experimental validation reports latency dropping from **22.9 ms to 12.2 ms across mobility events** with **zero packet loss**, **99.92% frame delivery** for real-time inference, and **1,560 migration operations** completed at **100% success** across batches of up to **50 simultaneous subscribers**. This is the first subscriber-granularity MEC migration entry in the KB; existing MEC/edge entries operate at coarser (per-service / per-slice) granularity.

## Summary (ZH)
SubEdge 提出在 6G 中以**每用户（per-subscriber）**为粒度来提供边缘计算与通信资源，而非通常的每小区或每应用粒度。其核心抽象是"计算上下文（computing context）"——一种将用户与其推理负载、容器及承载它的网络路径绑定在一起的数据结构。当用户移动并切换小区时，SubEdge 在一次协调操作中**同时**迁移推理容器**与**流量路由，使算力随用户移动、数据面无应用可见中断地重新拼接。

该系统面向时延敏感的在网 AI 推理（边缘实时 AI 负载）：朴素的小区切换要么把推理状态滞留在旧边缘节点，要么在新节点冷启动。通过把用户作为提供与迁移的单元，SubEdge 在移动过程中使推理容器保持"热态"并与用户同址。

实验验证显示：移动事件中时延从 **22.9 ms 降至 12.2 ms**、**零丢包**、实时推理**帧交付率 99.92%**，并在至多 **50 个并发用户**的批次中以 **100% 成功率**完成 **1,560 次迁移**。这是知识库中首个以用户为粒度的 MEC 迁移条目；现有 MEC/边缘条目均为更粗（每服务/每切片）粒度。

## Key technical points (EN)
- "Computing context" abstraction binds subscriber ↔ inference workload ↔ container ↔ serving path.
- Joint, coordinated migration of inference container + traffic routing on cell switch.
- Targets real-time on-network AI inference where cold restarts are unacceptable.
- Results: 22.9 → 12.2 ms latency across mobility, zero packet loss, 99.92% frame delivery.
- Scale: 1,560 migrations at 100% success, batches up to 50 simultaneous subscribers.
- Authors: Abdirazak Ali Asir Rage, Riccardo Pozza, Rahim Tafazolli (5GIC/6GIC, University of Surrey). Submitted 2026-06-29.

## Key technical points (ZH)
- "计算上下文"抽象绑定 用户 ↔ 推理负载 ↔ 容器 ↔ 承载路径。
- 小区切换时对推理容器 + 流量路由进行联合、协调迁移。
- 面向冷启动不可接受的在网实时 AI 推理。
- 结果：移动中时延 22.9 → 12.2 ms、零丢包、帧交付率 99.92%。
- 规模：1,560 次迁移 100% 成功，批次至多 50 个并发用户。
- 作者：Abdirazak Ali Asir Rage、Riccardo Pozza、Rahim Tafazolli（萨里大学 5GIC/6GIC）。提交于 2026-06-29。

## Why it matters / what's new (EN)
Most MEC research migrates at service or slice granularity; SubEdge pushes the unit of provisioning down to the individual subscriber and shows a concrete, measured mechanism (container + routing in one move) that holds inference state warm across handover. For the KB's `mec` bin this is a finer-grained mobility primitive than anything currently catalogued, and a clean example of the "AI workload as a first-class network tenant" framing that the 6G-vision entries describe abstractly.

## Why it matters / what's new (ZH)
多数 MEC 研究以服务或切片粒度迁移；SubEdge 将提供单元下推至单个用户，并给出一个具体且经实测的机制（容器 + 路由一次迁移），在切换过程中保持推理状态热态。对知识库的 `mec` 分类而言，这是比现有条目更细粒度的移动性原语，也是 6G 愿景条目所抽象描述的"AI 负载作为一等网络租户"理念的清晰实例。
