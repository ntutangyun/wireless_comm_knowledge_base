---
id: 2026-05-27_arxiv-encor-anchorless-cellular-core
date_published: 2026-05-21
date_found: 2026-05-27
type: academic-paper
title_en: "EnCoR: an end-to-end architecture that removes in-network mobility anchoring from the cellular core"
title_zh: "EnCoR：把移动性锚定移出核心网的端到端蜂窝架构"
url: "https://arxiv.org/abs/2605.22524"
source_quality: full
topics: [5G, cellular-core, mobility, IPv6, UPF, handover, edge]
topic_primary: 5g-nr
topics_secondary: [4g-lte, mec]
novelty_score: 4
---

## Summary (EN)
EnCoR (Woo, Wen, Velmurugan, Raad, Ratnasamy, Shenker, Hasan — Berkeley / Virginia Tech) revisits one of cellular's oldest architectural assumptions: that mobility must be provided as an in-network service by tunnelling all user traffic through a handful of centralized anchors (P-GWs in LTE, UPFs in 5G). That design dates to the 1990s and, the authors argue, is now actively harmful — it hairpins traffic through the core and inflates latency, it forces operators to coordinate heterogeneous systems on every upgrade, and it makes low-latency service expensive because it requires costly core build-out. Their observation is that modern applications and transport protocols (QUIC, modern TCP) are already mobility-tolerant, so the network no longer has to hide mobility from the endpoints.

EnCoR removes in-network anchoring while keeping the operator's control intact through a clean functional decomposition. The **edge user plane** lives in extended base stations (iNodeBs) that terminate user traffic directly and apply stateless NAT using split IPv6 addressing: each iNB owns a publicly routable IPv6 /64, devices keep private addresses in the lower bits, and there is no tunnel to a central anchor. A **stateful central control plane** retains the functions operators actually need to keep centralized — authentication, provisioning, charging (a Security Management Entity, subscriber database, online charging system). A **stateless edge control plane** of Handover Proxies and Charging Proxies handles ephemeral per-session state next to the RAN so signalling scales without per-flow state in the core. Critically, EnCoR preserves the 3GPP radio interface, so existing phones attach and roam unchanged.

The prototype is built on Open5GS and srsRAN with a software SME, stateless HOP message proxy, and modified iNodeBs, and is tested over the air with unmodified Google Pixel 3 handsets running real apps. Reported results: more than 90% capital-cost reduction versus a 3GPP network (a simulated ten-PoP EnCoR deployment matches a 3GPP network for about $2M), 2.6× faster handover completion under load (275 ms vs 738 ms at 64 handovers/second), and correct operation of QUIC/TCP apps (Zoom, YouTube, Spotify) without modification — with one edge case (MoQ live video) needing a single application-layer ping for IP discovery. Handover packet loss rises modestly (15–130% depending on traffic type) but is mitigable with lightweight source-forwarding.

## Summary (ZH)
EnCoR（Woo、Wen、Velmurugan、Raad、Ratnasamy、Shenker、Hasan——伯克利 / 弗吉尼亚理工）重新审视蜂窝网最古老的架构假设之一：移动性必须由网络作为内置服务提供，做法是把所有用户流量隧道汇聚到少数集中锚点（LTE 的 P-GW、5G 的 UPF）。作者指出这套源自上世纪 90 年代的设计如今已弊大于利——它把流量绕回核心网、推高时延；迫使运营商在每次升级时协调异构系统；并且因为需要昂贵的核心网扩建而使低时延业务代价高昂。他们的洞见是：现代应用与传输协议（QUIC、现代 TCP）本就容忍移动性中断，因此网络不必再向端点隐藏移动性。

EnCoR 在保留运营商控制力的前提下移除内置锚定，方法是清晰的功能解耦。**边缘用户面**置于扩展后的基站（iNodeB）内，直接终结用户流量并用拆分式 IPv6 做无状态 NAT：每个 iNB 拥有一个可公网路由的 IPv6 /64，设备在低位保留私有地址，不再有指向中心锚点的隧道。**有状态的中心控制面**保留运营商确实需要集中的功能——鉴权、开通、计费（安全管理实体、用户数据库、在线计费系统）。由切换代理（HOP）与计费代理（CP）组成的**无状态边缘控制面**在 RAN 旁处理短暂的每会话状态，使信令可扩展而无需在核心网保存每流状态。关键在于 EnCoR 保留了 3GPP 空口接口，现有手机无需改动即可接入与漫游。

原型基于 Open5GS 与 srsRAN 构建，含软件化 SME、无状态 HOP 消息代理与改造的 iNodeB，并用未改装的 Google Pixel 3 真机运行真实应用做空口测试。报告结果：相对 3GPP 网络资本成本下降超 90%（仿真中十 PoP 的 EnCoR 部署以约 200 万美元即可对标 3GPP 网络）；负载下切换完成快 2.6 倍（64 次/秒时 275 ms vs 738 ms）；QUIC/TCP 应用（Zoom、YouTube、Spotify）无需修改即可正确运行——唯一边角情形（MoQ 直播视频）需一次应用层 ping 以发现 IP。切换丢包有适度上升（按流量类型 15–130%），但可用轻量源转发缓解。

## Key technical points (EN)
- Thesis: modern apps/transport are mobility-tolerant → drop in-network mobility anchoring (no P-GW/UPF tunnels).
- Edge user plane: iNodeBs terminate traffic + stateless NAT via split IPv6 (each iNB = public /64; device private in lower 64 bits).
- Stateful central control plane keeps auth / provisioning / charging centralized (SME, subscriber DB, OCS).
- Stateless edge control plane: Handover Proxies + Charging Proxies hold ephemeral session state near the RAN.
- Preserves the 3GPP radio interface → unmodified phones (tested on Pixel 3).
- Prototype: Open5GS + srsRAN; OTA tested with real apps.
- Results: >90% capex reduction (10-PoP ≈ $2M); 2.6× faster handover under load (275 ms vs 738 ms @ 64 HO/s); QUIC/TCP apps unmodified; handover loss +15–130%, mitigable.

## Key technical points (ZH)
- 论点：现代应用/传输容忍移动性 → 取消内置移动性锚定（不再有 P-GW/UPF 隧道）。
- 边缘用户面：iNodeB 直接终结流量 + 拆分式 IPv6 无状态 NAT（每 iNB 一个公网 /64；设备私有地址在低 64 位）。
- 有状态中心控制面集中保留鉴权/开通/计费（SME、用户库、OCS）。
- 无状态边缘控制面：切换代理 + 计费代理在 RAN 旁保存短暂会话状态。
- 保留 3GPP 空口 → 手机无需改动（Pixel 3 实测）。
- 原型：Open5GS + srsRAN；真实应用空口测试。
- 结果：资本成本降 >90%（十 PoP≈200 万美元）；负载下切换快 2.6 倍（64 次/秒时 275 ms vs 738 ms）；QUIC/TCP 应用无需改动；切换丢包 +15–130%，可缓解。

## Why it matters / what's new (EN)
This is a clean-slate architectural argument from a heavyweight systems group, and it cuts against the grain of the rest of this KB's cellular coverage, which mostly optimizes the existing anchored core (AI schedulers, slicing, digital twins). EnCoR instead asks whether the anchor should exist at all, and backs the claim with an over-the-air prototype on unmodified handsets plus a concrete cost model. The split-IPv6 / stateless-NAT-at-the-iNB design is the novel mechanism; the 2.6× handover and >90% capex numbers are the evidence. It is the architectural counterpart to the operations-automation work landing this week (GENESIS, 2026-05-27_arxiv-genesis-agentic-6g-ran-synthesis; OpenTwin, 2026-05-26_arxiv-opentwin-oran-digital-twin) — where those make the current core easier to run, EnCoR proposes shrinking it.

## Why it matters / what's new (ZH)
这是来自重量级系统研究团队的"白纸重设计"论证，与本 KB 其余蜂窝内容（多在优化现有锚定核心：AI 调度、切片、数字孪生）背道而驰。EnCoR 转而追问锚点是否还应存在，并以未改装手机上的空口原型加具体成本模型支撑论点。拆分式 IPv6 / iNB 处无状态 NAT 的设计是其新机制；2.6 倍切换与 >90% 资本成本数字是证据。它是本周运维自动化工作（GENESIS，2026-05-27_arxiv-genesis-agentic-6g-ran-synthesis；OpenTwin，2026-05-26_arxiv-opentwin-oran-digital-twin）的架构对照面——后者让现有核心更易运行，EnCoR 则主张把它缩小。

## Images
![EnCoR architecture: anchorless edge user plane with central control plane | EnCoR 架构：无锚定的边缘用户面与中心控制面](https://arxiv.org/html/2605.22524v1/x1.png)
![EnCoR handover and data-path handling | EnCoR 切换与数据路径处理](https://arxiv.org/html/2605.22524v1/x2.png)
