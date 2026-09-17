---
id: 2026-09-17_arxiv-crdt-satellite-swarm-distributed-computing
date_published: 2026-09-16
date_found: 2026-09-17
technology: satellite
type: academic-paper
title_en: "A Distributed Computing Framework for Satellite Swarms"
title_zh: "面向卫星集群的分布式计算框架"
url: "https://arxiv.org/abs/2609.18839"
source_quality: full
topics: [distributed-space-systems, CRDT, satellite-swarms, SSA]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Fielding and Suana (CNES), Demazure and Queinnec (Toulouse INP - IRIT), and Silvestre (ENAC/ISAE-SUPAERO/ONERA, Universite de Toulouse) submitted this paper on 2026-09-16. The authors' motivation is that conventional ground-centric command and control does not scale to satellite constellations of tens or hundreds of spacecraft, and existing Distributed Space Systems (DSS) research is largely mission-specific rather than offering a reusable, generalized framework for operating a "satellite swarm" as a single entity. The paper proposes a conceptual distributed computing framework spanning three layers — distributed state, command and control, and scientific mission — and then implements and validates only the first layer, distributed state, as an initial step.

The distributed-state layer is built on Conflict-free Replicated Data Types (CRDTs), specifically a Last-Write-Wins (LWW) Register-based key-value store, chosen because it gives strong eventual consistency without requiring coordination between satellites. The authors validate this design in a Space Situational Awareness (SSA) catalog-dissemination scenario: an update to a tracked object's data needs to reach every satellite in a simulated 66-satellite constellation, emulated using the GoNetEm network emulator with an inter-satellite link (ISL) topology. Three dissemination variants are compared for a single catalog update: direct ground uplink to every satellite (the baseline, matching how current constellations work); CRDT-plus-flooding, where one satellite receives the update from the ground and floods it across ISLs to its neighbors; and CRDT-plus-tree-traversal, where the update propagates along a constructed spanning tree.

For a single update, direct uplink required 66 ground-station (GS) messages and zero ISL messages. CRDT-plus-flooding required 1 GS message plus 177 ISL messages (178 total) — flooding is known to send 2E-N+1 messages, where E is the number of ISL edges and N the number of satellites. CRDT-plus-tree-traversal required 1 GS message plus 65 ISL messages (66 total), matching the direct-uplink message count exactly while requiring only a single ground contact instead of 66. Under a concurrent-update scenario (multiple updates issued from the ground in quick succession), the measured ISL message growth was sub-linear — the paper reports the total (excluding tree-construction cost) rising from 66 messages for a single update to 366 for 20 concurrent updates — because satellites discard superseded LWW-Register versions as newer updates arrive, rather than propagating every version to completion.

## Summary (ZH)

Fielding 与 Suana（法国国家空间研究中心 CNES）、Demazure 与 Queinnec（图卢兹国立理工学院 - IRIT）、以及 Silvestre（图卢兹大学 ENAC/ISAE-SUPAERO/ONERA 联合体）于 2026 年 9 月 16 日提交本文。作者的出发点是：传统的以地面为中心的指挥控制方式无法扩展到由数十乃至数百颗卫星组成的星座，而现有的分布式空间系统（DSS）研究大多针对特定任务，缺乏一个可复用、通用化的框架，来将"卫星集群"作为单一实体进行运行与操作。论文提出一个涵盖三个层次——分布式状态、指挥控制、科学任务——的概念性分布式计算框架，并在本文中首先实现并验证了第一层，即分布式状态层。

分布式状态层基于无冲突复制数据类型（CRDT）构建，具体采用"最后写入优先"（LWW）寄存器式键值存储，其优势在于无需卫星间协调即可实现强最终一致性。作者在一个空间态势感知（SSA）目录分发场景中验证该设计：一次对被跟踪目标数据的更新需要传播到一个由 GoNetEm 网络仿真器模拟的、具备星间链路（ISL）拓扑的 66 颗卫星星座中的每一颗卫星。针对单次目录更新，论文比较了三种分发方案：直接地面上注到每颗卫星（基线方案，对应现有星座的运行方式）；CRDT + 泛洪，即由一颗卫星从地面接收更新后通过 ISL 向邻居泛洪转发；以及 CRDT + 生成树遍历，即更新沿构建好的生成树进行传播。

对于单次更新，直接上注方案需要 66 条地面站（GS）消息、0 条 ISL 消息；CRDT + 泛洪方案需要 1 条 GS 消息加 177 条 ISL 消息（共 178 条）——众所周知，泛洪会产生 2E-N+1 条消息，其中 E 为 ISL 边数，N 为卫星数量；CRDT + 生成树遍历方案需要 1 条 GS 消息加 65 条 ISL 消息（共 66 条），消息总数恰好与直接上注方案相同，但地面联系次数仅需 1 次而非 66 次。在并发更新场景下（地面在短时间内连续下发多次更新），实测的 ISL 消息增长呈次线性——论文报告（不计生成树构建开销）消息总量从单次更新的 66 条增长到 20 次并发更新时的 366 条——原因在于卫星会在收到更新的新版本时丢弃已被取代的旧版 LWW 寄存器值，而非将每个版本都完整传播下去。

## Key technical points (EN)

- **Framework scope**: conceptual three-layer distributed computing framework for satellite swarms (distributed state / command-and-control / scientific mission); this paper implements and validates only the distributed-state layer.
- **Mechanism**: CRDT-based Last-Write-Wins Register key-value store providing strong eventual consistency without inter-satellite coordination; described as "self-healing" since the latest update always overrides stale ones.
- **Testbed**: 66-satellite constellation emulated with GoNetEm over an ISL topology, evaluated via an SSA catalog-dissemination use case.
- **Single-update message counts**: Direct Uplink 66 GS / 0 ISL (66 total); CRDT+Flooding 1 GS / 177 ISL (178 total); CRDT+Tree Traversal 1 GS / 65 ISL (66 total, same as direct uplink but only 1 ground contact instead of 66).
- **Concurrent-update behavior**: sub-linear ISL message growth (66 to 366 messages for 1 to 20 concurrent updates) as nodes discard outdated CRDT versions rather than propagating every intermediate one.
- **Stated significance**: demonstrates CRDT-based distributed state as a "viable... foundation for satellite swarm applications," reducing both the number and duration of required ground contacts relative to direct uplink.

## Key technical points (ZH)

- **框架范围**：面向卫星集群的概念性三层分布式计算框架（分布式状态 / 指挥控制 / 科学任务）；本文仅实现并验证了分布式状态这一层。
- **机制**：基于 CRDT 的"最后写入优先"寄存器键值存储，无需卫星间协调即可提供强最终一致性；论文将其描述为"自愈"的，因为最新更新总会覆盖过时数据。
- **测试平台**：使用 GoNetEm 在具备 ISL 拓扑的 66 颗卫星星座上进行仿真，通过 SSA 目录分发用例进行评估。
- **单次更新消息数**：直接上注方案为 66 条 GS / 0 条 ISL（共 66 条）；CRDT + 泛洪为 1 条 GS / 177 条 ISL（共 178 条）；CRDT + 生成树遍历为 1 条 GS / 65 条 ISL（共 66 条，总数与直接上注相同，但地面联系次数从 66 次降为 1 次）。
- **并发更新表现**：ISL 消息量呈次线性增长（从单次更新的 66 条增长到 20 次并发更新时的 366 条），原因是节点会丢弃过时的 CRDT 版本，而非传播每一个中间版本。
- **论文自陈意义**：证明基于 CRDT 的分布式状态是"可行的……卫星集群应用基础"，相较直接上注方案，能同时减少所需地面联系的次数与耗时。

## Why it matters / what's new (EN)

This entry approaches distributed computing *for* satellite constellations from a different angle than prior entries about onboard AI/inference (e.g. `2026-09-14` Loft Orbital/Marlan/Mistral AI), in-orbit distributed/federated learning (e.g. `2026-08-26` SatDL, `2026-08-17` dual-layer over-the-air federated learning) or onboard autonomous routing (e.g. `2026-09-09` GNSS onboard routing). Rather than adding intelligence at a single satellite, the contribution here is a consistency mechanism (CRDT) that lets state updates propagate correctly across an entire swarm with only one ground contact instead of one per satellite, framed by the authors as a foundational building block for operating tens-to-hundreds-of-satellite constellations "as a single entity" rather than as individually-commanded spacecraft.

## Why it matters / what's new (ZH)

本条目从不同于此前条目的角度切入卫星星座的*分布式计算*议题：此前条目关注的是星上 AI/推理能力（如 2026-09-14 Loft Orbital/Marlan/Mistral AI 条目）、在轨分布式/联邦学习（如 2026-08-26 SatDL 条目、2026-08-17 双层空中联邦学习条目）或星上自主路由（如 2026-09-09 GNSS 星上路由条目）。本文的贡献不是在单颗卫星上增加智能，而是提供一种一致性机制（CRDT），使状态更新能够正确传播到整个卫星集群，且仅需一次地面联系，而非为每颗卫星单独联系一次；作者将其定位为将数十至数百颗卫星组成的星座作为"单一实体"运行（而非逐一指挥的独立航天器）的基础构件。

## Images

None.
