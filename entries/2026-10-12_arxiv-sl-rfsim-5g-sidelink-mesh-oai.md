---
id: 2026-10-12_arxiv-sl-rfsim-5g-sidelink-mesh-oai
date_published: 2026-10-01
date_found: 2026-10-12
type: academic-paper
technology: cellular
title_en: "SL-RFSIM: Enabling Scalable Multi-Hop 5G NR Sidelink Mesh Networking in OpenAirInterface"
title_zh: "SL-RFSIM：在 OpenAirInterface 中实现可扩展的多跳 5G NR 侧链路 Mesh 组网"
url: "https://arxiv.org/abs/2610.01632"
source_quality: full
topics: [5G-NR-Sidelink, D2D, multi-hop-relay, mesh-networking, BATMAN-adv, OpenAirInterface, SLICES-RI, SRAP]
topic_primary: 5g-nr
topics_secondary: []
novelty_score: 3
---

## Summary (EN)
Simone Pio Candido, Jin Yan, and Jerome Harri (EURECOM) present SL-RFSIM, a component-based experimentation framework that extends OpenAirInterface (OAI) to support scalable multi-hop 5G NR Sidelink (SL) mesh networking — capability needed as 3GPP Release 18/19 extend SL with device-to-device relay and multi-hop relaying (via the new Sidelink Relay Adaptation Protocol, SRAP) for use cases like industrial automation, collaborative robotics, public safety, and tactical communications. The paper's starting problem is that OAI's legacy RF Simulator (RFSim) follows a client-server architecture where the server is the gNB and UEs are clients, and clients can connect to only one server, so it cannot model SL beyond two UEs in a mesh topology. SL-RFSIM replaces this with a broker-based publish/subscribe architecture that enables arbitrary peer-to-peer connectivity while preserving compatibility with the OAI protocol stack, and adds four components: (i) the broker-based scalable RF simulation layer itself; (ii) an experimentation framework integrating pluggable mobility, propagation, reception, and monitoring services through extensible APIs (propagation uses the public UWICORE NR-V2X link-level dataset of 6,188 BLER-vs.-SINR points); (iii) native Layer-2 mesh networking via the Linux BATMAN-adv protocol, chosen over IETF routing protocols (AODV, OLSR) because it is available out-of-the-box on any Linux kernel and operates at Layer 2 — trading SRAP fidelity for immediate availability, since OAI's SRAP-to-external-mesh-protocol APIs are currently missing; and (iv) an open-source platform supporting reproducible multi-hop SL experimentation on both local and cloud/HPC infrastructure.

The framework is validated on the SLICES-RI research infrastructure across representative scenarios: a basic two-UE link, a three-UE multi-hop relay scenario (demonstrating that traffic between two UEs with no direct link correctly routes through an intermediate node, with the two active links resolving to LOS and NLOSv, the direct UE1–UE2 links forcibly blocked (200 dB path loss), and BATMAN-adv TQ values of 7-47 out of 255 across the routing entries), a five-UE mesh-star topology (a central Sync-Ref UE plus four peripheral UEs at 150 m, with BATMAN-adv transmission-quality values ranging 1-51 across the ten observed routes, correctly reflecting the enforced centralized routing structure), and scalability tests on two SLICES-RI hardware configurations — a CPU node (Xeon Gold, 8 cores, 8 GB RAM) and a GPU node (A100, x86_64, 16 cores, 80 GB RAM) — using the full-mesh peer-to-peer topology. Up to 7 UEs the full stack (PSBCH synchronization, PSSCH data, BATMAN-adv mesh routing) remains stable; beyond 7 UEs, PSSCH and BATMAN-adv become unstable. PSBCH synchronization alone remains stable up to 15 UEs on the Xeon node and partially up to 17-19 UEs across both platforms, and the authors identify three independent bottlenecks: the single-threaded broker's synchronous ZMQ calls (beyond 15 UEs new UEs are dropped within the timeout window regardless of idle CPU/GPU capacity), per-peer 186 MB circular buffers that exhaust the 8 GB Xeon node, and TDMA multiplexing of user and BATMAN-adv control traffic beyond ~20 active bidirectional links.

## Summary (ZH)
Simone Pio Candido、Jin Yan 与 Jerome Harri（EURECOM）提出 SL-RFSIM，一个基于组件化设计的实验框架，对 OpenAirInterface（OAI）进行扩展以支持可扩展的多跳 5G NR 侧链路（Sidelink, SL）Mesh 组网——这一能力的需求源自 3GPP Release 18/19 对 SL 的扩展，引入设备到设备（D2D）中继与多跳中继（通过新的侧链路中继适配协议 SRAP），以服务于工业自动化、协作机器人、公共安全与战术通信等场景。论文的出发点是：OAI 现有的 RF 模拟器（RFSim）采用客户端-服务器架构，其中服务器为 gNB，UE 为客户端，客户端只能连接到单一服务器，因而在 Mesh 拓扑中无法模拟超过两个 UE 的 SL 通信。SL-RFSIM 用一种基于代理（broker）的发布/订阅架构取而代之，在保持与 OAI 协议栈兼容的同时支持任意点对点连接，并新增四个组件：（i）基于代理的可扩展 RF 模拟层本身；（ii）一个通过可扩展 API 集成可插拔移动性、传播、接收与监测服务的实验框架（传播模型采用公开的 UWICORE NR-V2X 链路级数据集，包含 6,188 个 BLER 与 SINR 对应点）；（iii）通过 Linux BATMAN-adv 协议实现的原生二层 Mesh 组网——相较 IETF 路由协议（AODV、OLSR）选择 BATMAN-adv，是因为该协议可在任何 Linux 内核上直接使用且工作于二层，以牺牲 SRAP 保真度为代价换取即时可用性，因为 OAI 目前尚缺少 SRAP 与外部 Mesh 协议之间的 API；（iv）一个开源平台，支持在本地与云/高性能计算基础设施上进行可复现的多跳 SL 实验。

该框架在 SLICES-RI 研究基础设施上通过若干代表性场景完成验证：基本的双 UE 链路场景；三 UE 多跳中继场景（验证了两个无直接链路的 UE 之间的流量能正确经由中间节点转发；两条活跃链路分别为视距（LOS）与非视距（NLOSv），UE1–UE2 直连链路被强制阻断（路径损耗 200 dB），各路由条目的 BATMAN-adv 传输质量（TQ）值在 7–47（满分 255）之间）；五 UE 星形 Mesh 拓扑（一个中心 Sync-Ref UE 加四个位于 150 米外的外围 UE，十条已观测路由上观测到的 BATMAN-adv 传输质量值在 1 至 51 之间，正确反映了被强制执行的集中式路由结构）；以及在两种 SLICES-RI 硬件配置——CPU 节点（Xeon Gold，8 核，8GB 内存）与 GPU 节点（A100，x86_64，16 核，80GB 内存）——上采用全 Mesh 点对点拓扑进行的可扩展性测试。在 UE 数量不超过 7 时，完整协议栈（PSBCH 同步、PSSCH 数据、BATMAN-adv Mesh 路由）保持稳定；超过 7 个 UE 后，PSSCH 与 BATMAN-adv 开始出现不稳定。仅 PSBCH 同步本身在 Xeon 节点上可稳定支持至 15 个 UE，在两种平台上部分可支持至 17–19 个 UE，而作者识别出三项相互独立的瓶颈：单线程代理的同步 ZMQ 调用（超过 15 个 UE 后，新 UE 会在超时窗口内被丢弃，与 CPU/GPU 是否空闲无关）；每个对端 186 MB 的环形缓冲区使 8GB 的 Xeon 节点内存吃紧；以及超过约 20 条活跃双向链路后，TDMA 调度器需在用户数据与 BATMAN-adv 控制报文之间复用 PSSCH。

## Key technical points (EN)
- Replaces OAI's legacy client-server RFSim (limited to 2 UEs) with a broker-based publish/subscribe architecture enabling arbitrary peer-to-peer SL connectivity while staying compatible with the OAI protocol stack.
- Integrates pluggable mobility/propagation/reception/monitoring APIs; propagation model draws on the public UWICORE NR-V2X dataset (6,188 BLER-vs.-SINR points).
- Adds native Layer-2 mesh routing via Linux BATMAN-adv (chosen over IETF AODV/OLSR for out-of-the-box availability and Layer-2 operation), since OAI's SRAP-to-external-mesh-protocol APIs are currently missing.
- Validated on SLICES-RI across two-UE, three-UE relay, and five-UE star-mesh scenarios, correctly routing traffic through intermediate nodes with no direct link.
- Full protocol stack (PSBCH/PSSCH/BATMAN-adv) stable up to 7 UEs; PSBCH synchronization alone stable up to 15 UEs on a Xeon Gold CPU node, partially to 17-19 across CPU and A100 GPU nodes.
- Three independent bottlenecks identified: the single-threaded broker's synchronous ZMQ calls (new UEs dropped beyond 15 regardless of idle CPU/GPU capacity); per-peer 186 MB circular buffers exhausting the 8 GB Xeon node; and TDMA multiplexing of user/BATMAN-adv control traffic beyond ~20 active bidirectional links.
- Open-source platform intended to support reproducible multi-hop NR SL and future multi-hop cellular mesh research on local and cloud/HPC infrastructure.

## Key technical points (ZH)
- 用基于代理的发布/订阅架构取代 OAI 原有的客户端-服务器式 RFSim（最多支持 2 个 UE），在保持与 OAI 协议栈兼容的同时实现任意点对点 SL 连接。
- 集成可插拔的移动性/传播/接收/监测 API；传播模型基于公开的 UWICORE NR-V2X 数据集（6,188 个 BLER-SINR 对应点）。
- 通过 Linux BATMAN-adv 实现原生二层 Mesh 路由（相较 IETF 的 AODV/OLSR，因开箱即用且工作于二层而被选用），因为 OAI 目前缺少 SRAP 与外部 Mesh 协议之间的 API。
- 在 SLICES-RI 上验证了双 UE、三 UE 中继与五 UE 星形 Mesh 场景，正确将无直接链路的两个 UE 之间的流量经中间节点转发。
- 完整协议栈（PSBCH/PSSCH/BATMAN-adv）在不超过 7 个 UE 时保持稳定；仅 PSBCH 同步在 Xeon Gold CPU 节点上可稳定支持至 15 个 UE，在 CPU 与 A100 GPU 节点上部分可支持至 17–19 个。
- 识别出三项相互独立的瓶颈：单线程代理的同步 ZMQ 调用（超过 15 个 UE 后新 UE 被丢弃，与 CPU/GPU 是否空闲无关）；每个对端 186 MB 的环形缓冲区使 8GB 的 Xeon 节点内存吃紧；以及超过约 20 条活跃双向链路后 TDMA 调度器需在用户数据与 BATMAN-adv 控制报文间复用 PSSCH。
- 作为开源平台，旨在支持本地与云/高性能计算基础设施上可复现的多跳 NR SL 及未来多跳蜂窝 Mesh 网络研究。

## Why it matters / what's new (EN)
Adds to the KB's 5g-nr sidelink coverage an OAI-based tool for multi-hop sidelink mesh experiments: the paper replaces RFSim, which it says 'cannot be used for 5G NR SL beyond 2 UEs', and reports where the resulting platform's scalability breaks down (full stack stable to 7 UEs, PSBCH-only to 15).

## Why it matters / what's new (ZH)
为本知识库 5g-nr 栏目的侧链路内容补充了一个基于 OAI 的多跳侧链路 Mesh 实验工具：论文以新框架取代其所述"无法用于超过 2 个 UE 的 5G NR SL"的 RFSim，并报告了平台可扩展性的实际边界（完整协议栈稳定至 7 个 UE，仅 PSBCH 稳定至 15 个 UE）。

## Images

None.
