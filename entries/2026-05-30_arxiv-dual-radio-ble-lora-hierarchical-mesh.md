---
id: 2026-05-30_arxiv-dual-radio-ble-lora-hierarchical-mesh
date_published: 2026-04-16
date_found: 2026-05-30
type: academic-paper
title_en: "Dual-Radio BLE-LoRa Hierarchical Mesh for Infrastructure-Free Emergency Communication"
title_zh: "面向无基础设施应急通信的双射频 BLE-LoRa 分层网状网络"
url: "https://arxiv.org/abs/2604.15532"
source_quality: full
topics: [BLE, LoRa, mesh, AODV, emergency-comms, dual-radio, Coded-PHY]
topic_primary: bt-mesh
topics_secondary: [bt-le]
technology: bluetooth
novelty_score: 3
---

## Summary (EN)
Vakhnovskyi proposes a dual-radio hierarchical mesh that pairs Bluetooth Low Energy (BLE) with LoRa to deliver infrastructure-free emergency communication that balances energy, coverage, and latency. Each node carries an nRF52840 (Bluetooth 5.0 Coded PHY) and an SX1262 (sub-GHz LoRa). BLE forms dense local clusters using advertising-based AODV (Ad Hoc On-Demand Distance Vector) routing; dynamically elected cluster heads bridge inter-cluster traffic over a long-range LoRa backbone.

The design exploits the complementary strengths of the two radios: BLE gives high local throughput and low latency at short range, while LoRa provides kilometre-scale reach at low data rate for the sparse inter-cluster hops. A traffic-distribution model with a locality bias parameter β keeps 82–90% of communication on BLE (β ≥ 0.76), reserving the power-hungry LoRa backbone for traffic that genuinely must cross clusters.

Reported results: a 79% reduction in LoRa energy consumption versus a LoRa-only mesh, 10+ km network diameter, 250–562 node scalability, sub-50 ms intra-cluster latency, and a 3.0 KB RAM footprint on commodity hardware. The authors claim it is the first architecture to combine BLE advertising-based mesh routing with a multi-hop LoRa backbone on commodity parts.

## Summary (ZH)
Vakhnovskyi 提出一种双射频分层网状网络，将蓝牙低功耗（BLE）与 LoRa 配对，提供在能耗、覆盖与时延之间取得平衡的无基础设施应急通信。每个节点同时搭载 nRF52840（蓝牙 5.0 Coded PHY）与 SX1262（Sub-GHz LoRa）。BLE 用基于广播的 AODV（按需距离矢量）路由组成密集的本地簇；动态选举出的簇头通过远距 LoRa 骨干桥接簇间流量。

该设计利用两种射频的互补优势：BLE 在短距提供高本地吞吐与低时延，LoRa 则以低速率提供公里级覆盖用于稀疏的簇间跳。带局部性偏置参数 β 的流量分布模型将 82–90% 的通信保留在 BLE 上（β ≥ 0.76），把耗电的 LoRa 骨干留给确实必须跨簇的流量。

报告结果：相比纯 LoRa 网状网络，LoRa 能耗降低 79%；网络直径 10+ km；可扩展至 250–562 节点；簇内时延低于 50 ms；在商用硬件上仅占 3.0 KB RAM。作者称这是首个在商用器件上把 BLE 基于广播的网状路由与多跳 LoRa 骨干相结合的架构。

## Key technical points (EN)
- Per-node dual radio: nRF52840 BLE 5.0 Coded PHY (local) + SX1262 LoRa sub-GHz (backbone).
- BLE clusters use advertising-based AODV routing; elected cluster heads relay over multi-hop LoRa.
- Locality-bias model (β ≥ 0.76) keeps 82–90% of traffic on BLE; LoRa reserved for inter-cluster hops.
- 79% lower LoRa energy vs LoRa-only mesh; 10+ km diameter; 250–562 nodes; <50 ms intra-cluster latency; 3.0 KB RAM.
- Claimed first BLE-advertising-mesh + multi-hop-LoRa-backbone architecture on commodity hardware.

## Key technical points (ZH)
- 每节点双射频：nRF52840 BLE 5.0 Coded PHY（本地）+ SX1262 LoRa Sub-GHz（骨干）。
- BLE 簇采用基于广播的 AODV 路由；选举出的簇头通过多跳 LoRa 转发。
- 局部性偏置模型（β ≥ 0.76）将 82–90% 流量保留在 BLE；LoRa 仅用于簇间跳。
- 相比纯 LoRa 网状，LoRa 能耗降低 79%；直径 10+ km；250–562 节点；簇内时延 <50 ms；3.0 KB RAM。
- 声称为首个在商用硬件上结合 BLE 广播网状与多跳 LoRa 骨干的架构。

## Why it matters / what's new (EN)
The KB's existing BLE-mesh coverage is thin; this is a concrete, evaluated dual-radio architecture rather than a survey. The locality-bias traffic split is the transferable idea — it shows how to keep a low-power short-range mesh dominant while a long-range radio handles only the rare cross-cluster hops, a pattern relevant to any heterogeneous IoT mesh. Complements the energy-efficiency framing of `2026-05-21_arxiv-enhanced-ble-esb-hybrid`.

## Why it matters / what's new (ZH)
KB 现有的 BLE 网状覆盖较薄；本文是一个具体、经过评估的双射频架构，而非综述。局部性偏置的流量划分是可迁移的思想——展示了如何让低功耗短距网状占主导，而长距射频只处理少见的跨簇跳，这一模式适用于任何异构 IoT 网状网络。与 `2026-05-21_arxiv-enhanced-ble-esb-hybrid` 的能效论述互补。
