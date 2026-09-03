---
id: 2026-09-03_arxiv-wifi-into-3gpp-slicing-tngf
date_published: 2026-09-02
date_found: 2026-09-03
type: academic-paper
technology: cellular
title_en: "Integrating Wi-Fi into 3GPP 5G Network Slicing"
title_zh: "将Wi-Fi集成进3GPP 5G网络切片"
url: "https://arxiv.org/abs/2609.02625"
source_quality: full
topics: [network-slicing, non-3GPP-access, TNGF, Wi-Fi, multi-RAT, free5GC, airtime-fairness, QoS]
topic_primary: network-slicing
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Nelson Ion de Oliveira, Marília Costa Muniz, William M. C. do Nascimento, João Pedro Brasil, Victor Farias Monteiro, Sérgio Barros, Maykon Silva, Augusto Venâncio Neto and Vicente A. de Sousa Jr. (arXiv v1, 2 Sep 2026; paper title: "Integrating Wi-Fi into 3GPP 5G Network Slicing: An Experimental Prototype Study") present an end-to-end prototyping study extending 3GPP network slicing to Wi-Fi access. The paper's framing is that 3GPP standards "comprehensively define slicing architectures over cellular access networks," but the integration of Non-3GPP technologies — Wi-Fi in particular, which the authors note carries the majority of indoor data traffic — into a single, unified slice instance "remains an active area of investigation, particularly regarding empirical validation." Their contribution is a functional testbed that closes that empirical gap, rather than a new architectural proposal from scratch.

The implementation adapts the Trusted Non-3GPP Gateway Function (TNGF) — the standardized 3GPP interworking function for trusted non-3GPP access — to bring Wi-Fi transmission resources under slice management. Security is handled through IPsec tunnels between UE and core, established via EAP-5G authentication. Each network slice is mapped to a dedicated Wi-Fi transmission queue, identified by its Single Network Slice Selection Assistance Information (S-NSSAI) SST/SD tuple. Two mechanisms enforce differentiation within the shared Wi-Fi medium: an Airtime Fairness (ATF) scheme that allocates transmission opportunities according to the 5G QoS Identifier (5QI) attached to each slice's traffic, and a Hierarchical Token Bucket (HTB) queuing discipline for per-slice bandwidth rate limiting.

The testbed combines an open-source 5G Core (free5GC), an OpenWrt-based Wi-Fi access point (802.11n, 56 Mbps max link rate) as the explicit Non-3GPP access, and standard notebooks as UEs with WPA2/WPA3-Enterprise support. Six scenarios probe bandwidth allocation and traffic-steering behavior: best-effort scenarios (1 and 6) show high throughput variability from resource contention; uniform-QoS scenarios (2-3, 20-40 Mbps caps) show "greater stability in bandwidth distribution"; and differentiated-5QI scenarios (4-5, with ATF weights reversed between users) demonstrate clear prioritization between users sharing the same AP. The authors conclude that dynamic resource management and QoS-differentiation policies function effectively over a shared Wi-Fi medium once it is brought under 3GPP-style slice control, giving what they describe as "a concrete proof of concept for unified 3GPP and Non-3GPP service delivery."

## Summary (ZH)

Nelson Ion de Oliveira、Marília Costa Muniz、William M. C. do Nascimento、João Pedro Brasil、Victor Farias Monteiro、Sérgio Barros、Maykon Silva、Augusto Venâncio Neto 与 Vicente A. de Sousa Jr.（arXiv v1，2026年9月2日）发表了一项端到端原型研究，将3GPP网络切片扩展至Wi-Fi接入。论文的立论是：3GPP标准"已就蜂窝接入网络的切片架构做了全面定义"，但将非3GPP技术——尤其是承载了室内数据流量主要部分的Wi-Fi——纳入统一的切片实例，"仍是一个活跃的研究领域，尤其是在实证验证方面"。作者的贡献是构建了一个功能性测试平台来填补这一实证空白，而非从零提出全新架构方案。

该实现改造了受信任非3GPP网关功能（TNGF）——3GPP标准化的受信任非3GPP接入互通功能——使Wi-Fi传输资源被纳入切片管理。安全性通过UE与核心网之间的IPsec隧道实现，经由EAP-5G认证建立。每个网络切片被映射到一个专用的Wi-Fi传输队列，由其单一网络切片选择辅助信息（S-NSSAI）的SST/SD元组标识。共享Wi-Fi介质内的差异化由两种机制实现：一是空口时间公平性（ATF）方案，根据每个切片流量所附带的5G QoS标识符（5QI）分配传输机会；二是分层令牌桶（HTB）排队机制，用于按切片限制带宽速率。

测试平台结合了开源5G核心网（free5GC）、基于OpenWrt的Wi-Fi接入点（802.11n，最高链路速率56 Mbps）作为明确的非3GPP接入，以及支持WPA2/WPA3企业级认证的标准笔记本电脑作为UE。六个场景探究了带宽分配与流量调度行为：尽力而为场景（1和6）因资源争用而呈现高吞吐量波动；统一QoS场景（2-3，限速20-40 Mbps）呈现"更稳定的带宽分布"；差异化5QI场景（4-5，两用户间ATF权重反转）则清晰展示了共享同一接入点的用户间的优先级差异。作者得出结论：一旦将共享Wi-Fi介质纳入3GPP式的切片控制，动态资源管理与QoS差异化策略即可有效运作，这为他们所称的"统一3GPP与非3GPP服务交付的具体概念验证"提供了支撑。

## Key technical points (EN)
- Gap addressed: 3GPP slicing is well-defined over cellular RAN, but empirical validation of unified slicing that also spans Non-3GPP (Wi-Fi) access is scarce.
- Mechanism: adapts the standardized Trusted Non-3GPP Gateway Function (TNGF) to manage Wi-Fi transmission resources under slice control.
- Security: IPsec tunnels between UE and core via EAP-5G authentication.
- Per-slice Wi-Fi differentiation: dedicated transmission queue per S-NSSAI (SST/SD); Airtime Fairness (ATF) weighted by 5QI; Hierarchical Token Bucket (HTB) for bandwidth rate limiting.
- Testbed: free5GC (5G Core) + OpenWrt Wi-Fi AP (802.11n, 56 Mbps) as explicit Non-3GPP access + notebook UEs (WPA2/WPA3-Enterprise).
- Six scenarios: best-effort (high contention variability), uniform-QoS caps (more stable distribution), differentiated-5QI with reversed ATF weights (clear inter-user prioritization).

## Key technical points (ZH)
- 待解决的问题：3GPP切片在蜂窝RAN上已有良好定义，但同时涵盖非3GPP（Wi-Fi）接入的统一切片的实证验证仍然稀缺。
- 机制：改造标准化的受信任非3GPP网关功能（TNGF），使其在切片控制下管理Wi-Fi传输资源。
- 安全性：UE与核心网之间通过EAP-5G认证建立IPsec隧道。
- 按切片区分Wi-Fi资源：每个S-NSSAI（SST/SD）对应专用传输队列；空口时间公平性（ATF）按5QI加权；分层令牌桶（HTB）实现带宽限速。
- 测试平台：free5GC（5G核心网）+ 基于OpenWrt的Wi-Fi接入点（802.11n，56 Mbps）作为明确的非3GPP接入 + 支持WPA2/WPA3企业级认证的笔记本电脑作为UE。
- 六个场景：尽力而为（争用导致高波动）、统一QoS限速（更稳定的分布）、差异化5QI且ATF权重反转（用户间清晰的优先级区分）。

## Why it matters / what's new (EN)
This knowledge base's network-slicing coverage spans orchestration, admission, migration and (in today's companion entry) SLA assurance — all within the cellular access domain. This paper approaches the topic from the opposite direction: instead of managing slices *across* RAN/TN/5GC, it extends slice-level QoS differentiation *into* a Non-3GPP access technology (Wi-Fi) that today largely sits outside 3GPP's SLA guarantees despite carrying most indoor traffic. By adapting the standardized TNGF interworking function rather than proposing a bespoke gateway, and by validating the result on a real free5GC + OpenWrt testbed across six bandwidth/QoS scenarios, it supplies the empirical multi-RAT slicing evidence the authors say has been missing — the first entry here on extending 3GPP slice semantics to a non-cellular RAT.

## Why it matters / what's new (ZH)
本知识库的网络切片部分此前已覆盖编排、准入、迁移，以及（今日同批条目中的）SLA 保障——但均局限于蜂窝接入域内部。本文从相反方向切入这一主题：它不是在RAN/TN/5GC*之间*管理切片，而是将切片级QoS差异化*延伸进*一种非3GPP接入技术（Wi-Fi）——尽管Wi-Fi承载了室内的大部分流量，但目前基本处于3GPP SLA保障范围之外。通过改造标准化的TNGF互通功能而非另起炉灶设计专用网关，并在真实的free5GC + OpenWrt测试平台上、跨六种带宽/QoS场景验证结果，本文提供了作者所称此前一直缺失的多接入技术（multi-RAT）切片实证证据——是本知识库中首个"将3GPP切片语义扩展至非蜂窝无线接入技术"的条目。

## Images
