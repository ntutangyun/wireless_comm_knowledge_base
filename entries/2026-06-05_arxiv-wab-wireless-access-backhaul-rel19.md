---
id: 2026-06-05_arxiv-wab-wireless-access-backhaul-rel19
date_published: 2026-06-04
date_found: 2026-06-05
type: academic-paper
technology: cellular
title_en: "Toward Mobile and Converged Backhaul: The Promise of Wireless Access and Backhaul (WAB)"
title_zh: "迈向移动与融合回传：无线接入与回传（WAB）的前景"
url: "https://arxiv.org/abs/2606.06075"
source_quality: full
topics: [5G-Advanced, WAB, backhaul, IAB, Release-19, mobile-backhaul, SD-WAN]
topic_primary: 5g-nr
topics_secondary: [6g-vision, ntn]
novelty_score: 3
---

## Summary (EN)
This IEEE Communications Magazine paper introduces Wireless Access and Backhaul (WAB), a framework standardised in 3GPP Release 19 that decouples the access and backhaul segments of a mobile network and provides the backhaul over wireless links that can use 3GPP or non-3GPP technologies. The headline contrast is with Release-16 Integrated Access and Backhaul (IAB): an IAB node carries only a Distributed Unit (DU) and needs tight coordination plus a multi-hop protocol-stack extension, whereas a WAB node contains a full gNB. That full-gNB modularity lets WAB reuse standard UE mobility for handovers, be built from COTS devices and standard IP techniques, and avoid multi-hop topologies — at the cost of tunnelling the 3GPP interfaces end-to-end.

Architecturally, the access segment runs a WAB-gNB serving UEs over normal 5G radio; the backhaul segment uses a WAB Mobile Termination (WAB-MT) that establishes a wireless link to a backhaul gNB (BH-gNB) behind a backhaul 5G Core (BH-5GC). End-to-end connectivity tunnels the N2 control interface (NGAP/SCTP/IP) and the N3 user interface (GTP-U/UDP/IP) across the backhaul link. The paper lays out four application scenarios: (1) rapid on-demand coverage from vehicle/aircraft/vessel-mounted mobile nodes backhauled by terrestrial, non-3GPP or satellite links; (2) wireless mobile backhaul across multiple technologies with horizontal/vertical handovers; (3) mobile SD-WAN with first-class private 5G access for logistics/transport fleets; and (4) public 5G "access islands" riding on non-owned backhaul where new fibre is impractical.

A prototype validates feasibility on commercial hardware and open-source software: an FR2/mmWave backhaul at 27.2 GHz (COTS CPE as WAB-MT, commercial BS + 5GC) and an FR1 access segment built from an OAI SDR gNB, a COTS smartphone and Open5GS, with WireGuard VPN tunnels carrying N2/N3. The bench setup reached ~100 Mbps DL / 10 Mbps UL over Ethernet; a vehicle-mounted mobile test reached ~50 Mbps end-to-end under line-of-sight with 40 MHz FR1, degrading in NLoS. The authors flag four open challenges — radio-access "gear-shifting" under unreliable backhaul, interference/TDD-sync and Doppler management, large-scale handover optimisation for mobile nodes serving static UEs, and lightweight distributed AI for self-organisation — and position WAB's recursive "network-within-a-network" capability as a stepping stone toward 6G.

## Summary (ZH)
这篇发表于《IEEE Communications Magazine》的文章介绍了无线接入与回传（WAB）——一种在 3GPP Release 19 标准化的框架，它将移动网络的接入段与回传段解耦，并通过可使用 3GPP 或非 3GPP 技术的无线链路提供回传。其核心对比对象是 Release-16 的集成接入与回传（IAB）：IAB 节点只含分布单元（DU），需要紧耦合协调并对协议栈做多跳扩展；而 WAB 节点包含完整的 gNB。这种"完整 gNB"的模块化使 WAB 可复用标准 UE 移动性来完成切换、可由 COTS 设备与标准 IP 技术构建、并避免多跳拓扑——代价是需要端到端隧道化 3GPP 接口。

在架构上，接入段运行 WAB-gNB，以普通 5G 无线为 UE 提供服务；回传段使用 WAB 移动终端（WAB-MT），与回传 gNB（BH-gNB，其后接回传 5G 核心 BH-5GC）建立无线链路。端到端连通通过在回传链路上隧道化 N2 控制接口（NGAP/SCTP/IP）与 N3 用户接口（GTP-U/UDP/IP）实现。文章给出四类应用场景：(1) 由车载/机载/船载移动节点经地面、非 3GPP 或卫星链路回传的快速按需覆盖；(2) 跨多种技术的无线移动回传，支持水平/垂直切换；(3) 面向物流/运输车队、提供一级私有 5G 接入的移动 SD-WAN；(4) 在新建光纤不现实之处、借助非自有回传网络部署的公共 5G"接入孤岛"。

原型在商用硬件与开源软件上验证可行性：27.2 GHz 的 FR2/毫米波回传（COTS CPE 作 WAB-MT，商用基站 + 5GC），以及由 OAI SDR gNB、COTS 智能手机与 Open5GS 构建的 FR1 接入段，用 WireGuard VPN 隧道承载 N2/N3。台架在以太网下达 ~100 Mbps 下行/10 Mbps 上行；车载移动测试在 40 MHz FR1、视距条件下端到端达 ~50 Mbps，非视距下劣化。作者提出四个开放挑战——回传不可靠时的无线接入"换挡"、干扰/TDD 同步与多普勒管理、移动节点服务静止 UE 时的大规模切换优化、以及面向自组织的轻量分布式 AI——并将 WAB 的递归"网中网"能力定位为迈向 6G 的踏脚石。

## Key technical points (EN)
- WAB (3GPP Rel-19) decouples access and backhaul; a WAB node is a full gNB (not a DU-only IAB node), enabling COTS builds, standard UE-mobility handovers, and no multi-hop stack extension.
- Access: WAB-gNB serves UEs; backhaul: WAB-MT ↔ BH-gNB ↔ BH-5GC, tunnelling N2 (NGAP/SCTP/IP) and N3 (GTP-U/UDP/IP) end-to-end.
- Four scenarios: rapid on-demand coverage (incl. satellite backhaul), multi-technology mobile backhaul, mobile SD-WAN private 5G, and public 5G access islands on non-owned backhaul.
- Prototype: 27.2 GHz FR2 backhaul (COTS CPE) + FR1 OAI/Open5GS access; ~100/10 Mbps on bench, ~50 Mbps end-to-end vehicle-mounted LoS at 40 MHz FR1.
- Open challenges: access "gear-shifting" under fluctuating backhaul, interference/TDD-sync/Doppler, handover scale, lightweight distributed AI; framed as a path to 6G.

## Key technical points (ZH)
- WAB（3GPP Rel-19）解耦接入与回传；WAB 节点是完整 gNB（而非仅含 DU 的 IAB 节点），从而可用 COTS 构建、复用标准 UE 移动性切换、无需多跳协议栈扩展。
- 接入：WAB-gNB 服务 UE；回传：WAB-MT ↔ BH-gNB ↔ BH-5GC，端到端隧道化 N2（NGAP/SCTP/IP）与 N3（GTP-U/UDP/IP）。
- 四类场景：快速按需覆盖（含卫星回传）、跨技术移动回传、移动 SD-WAN 私有 5G、以及借非自有回传的公共 5G 接入孤岛。
- 原型：27.2 GHz FR2 回传（COTS CPE）+ FR1 的 OAI/Open5GS 接入；台架 ~100/10 Mbps，车载视距 40 MHz FR1 端到端 ~50 Mbps。
- 开放挑战：回传波动下的接入"换挡"、干扰/TDD 同步/多普勒、切换规模、轻量分布式 AI；定位为通向 6G 的路径。

## Why it matters / what's new (EN)
The KB has tracked the NTN/backhaul direction (TN-NTN backhaul potential game `2026-05-27`) and converged-architecture work, but this is the first entry on WAB specifically — a named, Rel-19-standardised feature that gives mobile/nomadic nodes a full-gNB wireless-backhaul path distinct from IAB. It is a useful standards anchor: where IAB entries describe DU-only multi-hop relays, WAB reframes the same problem as full base stations tunnelling N2/N3 over any (incl. satellite) backhaul, which connects the cellular and NTN strands of the KB. The COTS + OAI/Open5GS prototype also makes it reproducible, unlike most architecture-position pieces.

## Why it matters / what's new (ZH)
KB 已跟踪 NTN/回传方向（TN-NTN 回传势博弈 `2026-05-27`）与融合架构工作，但本条目是首个专门关于 WAB 的条目——一个有命名、在 Rel-19 标准化的特性，为移动/游牧节点提供区别于 IAB 的"完整 gNB"无线回传路径。它是有用的标准锚点：IAB 条目描述仅含 DU 的多跳中继，而 WAB 把同一问题重构为完整基站在任意（含卫星）回传上隧道化 N2/N3，从而把 KB 的蜂窝与 NTN 两条主线连接起来。其 COTS + OAI/Open5GS 原型也使工作可复现，不同于多数架构立场类文章。

## Images
![WAB protocol-stack and architecture (access + backhaul segments) | WAB 协议栈与架构（接入段 + 回传段）](https://arxiv.org/html/2606.06075v1/figures/stack_arch_wab.png)
![The four WAB application scenarios | WAB 的四类应用场景](https://arxiv.org/html/2606.06075v1/figures/scenarios_1234_v2.jpg)
