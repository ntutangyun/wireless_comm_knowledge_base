---
id: 2026-11-23_arxiv-sdisn-software-defined-internet-integration-satellite-networks
date_published: 2026-11-19
date_found: 2026-11-23
type: academic-paper
technology: satellite
title_en: "Software-Defined Internet Integration of Satellite Networks (SDISN)"
title_zh: "卫星网络的软件定义互联网集成（SDISN）"
url: "https://arxiv.org/abs/2611.25837"
source_quality: full
topics: [LEO, inter-satellite-links, IP-routing, SDN, encapsulation, gateways, traffic-engineering]
topic_primary: leo-constellations
topics_secondary: [starlink]
novelty_score: 3
---

## Summary (EN)

Menth, Flüchter and Haala propose SDISN, an architecture for carrying IP traffic from user terminals (UTs) or Internet nodes across a satellite network with inter-satellite links (ISLs). UTs and gateways (GWs) attach through serving satellites (SrvSats), and because satellites move quickly, the SrvSat of a UT or GW changes every few minutes (the paper gives 3-12 minutes), which continually changes reachability.

The design encapsulates traffic at GWs and SrvSats with satellite-network forwarding information, and a controller continuously updates that information as SrvSats and topology change. The stated design goals are low complexity on satellites, strong traffic-engineering ability, and keeping UTs out of the routing system for security and compatibility reasons. UTs can get a dynamic IP address from a nearby GW or point of presence (PoP), or a static address from a fixed home GW, in which case roaming causes triangle routing via the home GW. The paper proposes extensions for UTs with increased security requirements (traffic kept inside the constellation, away from untrusted terrestrial infrastructure), for reducing latency, and for traffic engineering with alternate GWs and SrvSats.

## Summary (ZH)

Menth、Flüchter 与 Haala 提出 SDISN，一种让用户终端（UT）或互联网节点的 IP 流量穿越带星间链路（ISL）的卫星网络的架构。UT 与网关（GW）经服务卫星（SrvSat）接入；由于卫星高速运动，UT 或 GW 的 SrvSat 每隔数分钟更换（论文给出 3-12 分钟），可达性持续变化。

设计在 GW 与 SrvSat 处用卫星网络转发信息对流量做封装，并由控制器随 SrvSat 与拓扑变化持续更新这些信息。论文给出的设计目标是：卫星侧复杂度低、流量工程能力强，并出于安全与兼容性考虑让 UT 不参与路由系统。UT 可从附近 GW 或接入点（PoP）获得动态 IP 地址，或从固定的归属 GW 获得静态地址，后一种情况下漫游会经归属 GW 产生三角路由。论文还提出了针对高安全需求 UT（流量保持在星座内、避开不可信的地面基础设施）、降低时延以及借助备选 GW 与 SrvSat 做流量工程的扩展。

## Key technical points (EN)

- Addressing: a PoP's prefix is subdivided among home GWs (HGWs), and UTs take addresses from their HGW's block; options for UT addresses are static public, dynamic public, or private with carrier-grade NAT.
- State placement: SrvSats keep only a default entry toward a default gateway; encapsulation entries on HGWs change roughly every 1.5-6 minutes and SrvSat default entries every 3-12 minutes, mostly precomputed and applied just in time. A network controller, a flow controller per HGW and a resource controller split the control tasks.
- Traffic cases: Internet-to-UT goes via the HGW, UT-to-Internet via the SrvSat's default gateway, and UT-to-UT is split into four cases by whether the peers share a SrvSat, default gateway, HGW or PoP.
- Increased security requirements (ISR): ISR UTs get a special prefix, and their traffic is relayed inside the constellation and leaves through a secure gateway with a trusted terrestrial path; the authors acknowledge this is costly and adds triangle routing for Internet-to-UT traffic.
- Latency reduction: egress gateways chosen per satellite, prefix and time to minimise satellite-to-gateway plus gateway-to-prefix delay, installed per receiver prefix, per user-selected prefix, or on demand (with drawbacks the paper lists, including initial-packet delay, reordering, signalling load and a table-exhaustion risk); for Internet-originated traffic, a relay gateway near the UT can shorten the path.
- Open challenges noted: UT handover between SrvSats, ISLs that are unstable (inter-orbit ISLs that in some constellations are torn down near the poles and re-established, a change every 45-60 minutes) and inter-shell ISLs.
- Source note: the paper is an architecture proposal with no quantitative evaluation section, so no performance figures are reported.

## Key technical points (ZH)

- 编址：PoP 的前缀被细分给各归属 GW（HGW），UT 从其 HGW 的地址块取址；UT 地址可选静态公网、动态公网，或带运营商级 NAT 的私网地址。
- 状态放置：SrvSat 只保留指向默认网关的默认表项；HGW 上的封装表项约每 1.5-6 分钟变化，SrvSat 的默认表项每 3-12 分钟变化，大多可预先计算并按时生效。由网络控制器、每个 HGW 一个的流控制器和资源控制器分担控制任务。
- 流量场景：互联网到 UT 经 HGW，UT 到互联网经 SrvSat 的默认网关，UT 到 UT 按对端是否共享 SrvSat、默认网关、HGW 或 PoP 分为四种情况。
- 增强安全需求（ISR）：ISR 的 UT 获得特殊前缀，其流量在星座内中继，并经具有可信地面路径的安全网关离开；作者承认这种做法代价高，并会给互联网到 UT 的流量带来三角路由。
- 时延降低：按卫星、前缀和时间选择出口网关，使卫星到网关加网关到前缀的时延最小，可按接收方前缀、用户选定前缀或按需安装（论文列出其缺点，包括首包延迟、乱序、信令负载和表项耗尽风险）；对互联网发起的流量，UT 附近的中继网关可缩短路径。
- 论文提到的开放挑战：UT 在 SrvSat 间的切换、不稳定的 ISL（某些星座中跨轨道 ISL 在接近两极时断开并随后重建，每 45-60 分钟变化一次）以及跨壳层 ISL。
- 来源说明：论文为架构方案，没有定量评估部分，因此不报告性能数字。

## Why it matters / what's new (EN)

The paper addresses the boundary between the constellation and the Internet: how encapsulation, addressing and a controller can hide SrvSat changes from UTs and keep satellite state minimal. The related-work section also summarises what is inferred about Starlink (tunnelling via an assigned PoP, a globally synchronised 15-second reconfiguration schedule), labelled by the authors as inferred from measurements and public filings rather than operator-confirmed.

## Why it matters / what's new (ZH)

本文关注星座与互联网之间的边界：如何通过封装、编址和控制器向 UT 屏蔽 SrvSat 的变化，并让卫星侧状态保持最少。相关工作部分还概述了对 Starlink 的推断（经分配的 PoP 隧道传输、全球同步的 15 秒重配置周期），作者注明这些来自测量与公开文件推断，而非运营商确认。

## Images

None.
