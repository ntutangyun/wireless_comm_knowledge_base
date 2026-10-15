---
id: 2026-10-15_arxiv-bier-dc-stateless-multicast-space-data-centers
date_published: 2026-10-14
date_found: 2026-10-15
technology: satellite
type: academic-paper
title_en: "BIER-DC: Stateless Multicast for In-Orbit Space Data Centers in LEO Constellations"
title_zh: "BIER-DC：面向低轨星座在轨太空数据中心的无状态组播"
url: "https://arxiv.org/abs/2610.19462"
source_quality: full
topics: [space-data-center, multicast, BIER, inter-satellite-link, LEO]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

Abdollahi, Yang, Malekinasab and Pan (University of Victoria) study one-to-many communication for Space Data Centers (SDCs), which organize collaborating satellites into logical compute and storage clusters. The paper states that relying on terrestrial cloud regions can expose satellite data to high delivery latency and loss of timeliness because satellite-to-ground visibility is intermittent and access to ground infrastructure is limited. The paper is accepted by IEEE ICNP 2026.

The work proceeds in three steps. First, it evaluates how satellite clustering with different sizes affects satellite visibility and gateway outage; the setup uses TLE-based analysis of OneWeb and Starlink shells. Second, it proposes BIER-DC, a stateless one-to-many protocol for satellite-based SDCs. BIER-DC decouples inter-SDC forwarding from intra-SDC delivery and encodes compact cluster-level forwarding information in packet headers, using destination-SDC and ingress-border identifiers rather than identifiers for individual satellites, VMs or adjacencies. Third, it compares BIER-DC with BIER, BIER-TE and Yeti using analysis and NetSatBench-based Earth-observation image-transfer emulations. The reported result is that BIER-DC significantly reduces packet-header length and byte-hop overhead, improving effective goodput and scalability. The authors list dynamic failure recovery, traffic-aware destination grouping and re-evaluation of forwarding assignments over updated topology snapshots as future work.

## Summary (ZH)

Abdollahi、Yang、Malekinasab 和 Pan（维多利亚大学）研究太空数据中心（SDC）的一对多通信；SDC 将协作卫星组织为逻辑上的计算与存储集群。论文指出，由于星地可见性间歇、地面基础设施接入受限，依赖地面云区域可能使卫星数据面临较高的交付时延并丧失时效性。该论文已被 IEEE ICNP 2026 接收。

工作分三步展开。第一，评估不同规模的卫星集群对卫星可见性和网关中断的影响；实验设置使用 OneWeb 与 Starlink 轨道壳层的基于 TLE 的分析。第二，提出 BIER-DC，一种面向卫星 SDC 的无状态一对多协议。BIER-DC 将 SDC 之间的转发与 SDC 内部的投递解耦，并在报文头中编码紧凑的集群级转发信息，使用目的 SDC 与入口边界标识，而非单个卫星、虚拟机或邻接关系的标识。第三，通过分析和基于 NetSatBench 的对地观测图像传输仿真，将 BIER-DC 与 BIER、BIER-TE 和 Yeti 比较。报告的结果是：BIER-DC 显著降低报文头长度和字节-跳数开销，提升有效吞吐和可扩展性。作者将动态故障恢复、流量感知的目的地分组，以及基于更新拓扑快照重新评估转发分配列为后续工作。

## Key technical points (EN)

- **Cluster-level addressing**: forwarding is encoded at the SDC level through destination-SDC and ingress-border identifiers.
- **Decoupled forwarding**: inter-SDC forwarding is separated from intra-SDC delivery.
- **Baselines**: BIER, BIER-TE and Yeti.
- **Reported effect**: significantly shorter packet headers and lower byte-hop overhead, improving effective goodput and scalability as multicast scope and service density increase.
- **Use cases named in the paper**: replication, fleet-wide management updates and distributed learning.

## Key technical points (ZH)

- **集群级寻址**：通过目的 SDC 与入口边界标识，在 SDC 层面编码转发信息。
- **转发解耦**：SDC 间转发与 SDC 内投递相分离。
- **对比基线**：BIER、BIER-TE 和 Yeti。
- **报告的效果**：报文头显著缩短、字节-跳数开销降低；随着组播范围和业务密度增加，有效吞吐和可扩展性提升。
- **论文提到的用例**：复制、全星队管理更新和分布式学习。

## Why it matters / what's new (EN)

Proposes a multicast header design for in-orbit satellite clusters in which forwarding information is encoded at the cluster level rather than per satellite, VM or adjacency, and reports it against three existing multicast schemes.

## Why it matters / what's new (ZH)

提出一种面向在轨卫星集群的组播报文头设计，在集群层面而非逐卫星编码转发信息，并与三种现有组播方案对比报告结果。

## Images

None.
