---
id: 2026-08-04_arxiv-metis-declarative-slice-orchestrator
date_published: 2026-07-31
date_found: 2026-08-04
type: academic-paper
technology: cellular
title_en: "METIS: A Declarative Slice Orchestrator for Application-Centric 5G/6G Networks"
title_zh: "METIS：面向应用的 5G/6G 声明式网络切片编排器"
url: "https://arxiv.org/abs/2607.29282"
source_quality: full
topics: [network-slicing, O-RAN, 5G-Advanced, Kubernetes, OpenAirInterface]
topic_primary: network-slicing
topics_secondary: [open-ran]
novelty_score: 2
---

## Summary (EN)

METIS (Divband, Yaghoubian, Nikaein — the Eurecom/OpenAirInterface orbit) rebuilds slice lifecycle management around a Kubernetes-style declarative model: Network Slice Instances become first-class declarative resources managed by cascaded reconciliation loops, replacing the network-centric data models, imperative workflows, and static slice templates of existing orchestrators (ONAP, CLiSO, NASP lineage).

The design covers the full Day-0/1/2 arc. Day-0: customers express application-centric service profiles (semantic + quality-of-experience requirements), from which METIS automatically derives 3GPP-aligned Slice Profiles by hierarchical aggregation — no static template catalogue. Day-1: a joint O-RAN + 3GPP coordination layer decides whether to share existing network functions or scale new ones under resource constraints, wiring NF interconnection via the NSI serving scope. Day-2: distributed Slice/Network/NF operators give idempotent create/modify/terminate/recover operations with NSI-level QoS holding across domains.

On a cloud-native testbed (Kubernetes 1.31.3, OpenAirInterface RAN + Open5GS core, three physical Quectel UEs over-the-air, nine zones across three regions), METIS creates an NSI in ≤22.4 s, updates in ≤5.1 s, upgrades in ≤52.2 s, deletes in ≤32.1 s, recovers from failures at four levels in <19 s, and scales to 63 NSIs across nine zones on <0.03 CPU cores. The architectural finding worth remembering: core-only slicing cannot reliably satisfy uplink SLAs — downlink can be shaped at the core before it reaches the radio, but uplink originates unregulated at the UE, so radio-side enforcement is necessary, not merely complementary.

## Summary (ZH)

METIS（Divband、Yaghoubian、Nikaein——Eurecom/OpenAirInterface 团队）以 Kubernetes 式声明式模型重构切片生命周期管理：网络切片实例（NSI）成为由级联调和环管理的一等声明式资源，取代现有编排器（ONAP、CLiSO、NASP 一系）的网络中心数据模型、命令式工作流与静态切片模板。

设计覆盖完整的 Day-0/1/2 弧线。Day-0：客户表达面向应用的服务画像（语义 + 体验质量需求），METIS 通过层级聚合自动推导 3GPP 对齐的切片画像——无需静态模板目录。Day-1：O-RAN 与 3GPP 联合协调层在资源约束下决定复用既有网络功能还是扩容新功能，并通过 NSI 服务范围连接 NF。Day-2：分布式的切片/网络/NF 操作器提供幂等的创建/修改/终止/恢复操作，跨域保持 NSI 级 QoS。

在云原生测试床上（Kubernetes 1.31.3、OpenAirInterface RAN + Open5GS 核心网、三个实体 Quectel 终端空口接入、三区域九个地理分区），METIS 创建 NSI ≤22.4 秒、更新 ≤5.1 秒、升级 ≤52.2 秒、删除 ≤32.1 秒，四个层级的故障恢复 <19 秒，并以 <0.03 CPU 核扩展到九分区 63 个 NSI。值得记住的架构发现：仅核心网切片无法可靠满足上行 SLA——下行可在到达无线侧前于核心网整形，而上行在终端侧无约束产生，因此无线侧执行是必需而非补充。

## Key technical points (EN)

- NSIs as declarative resources with cascaded reconciliation loops (Kubernetes operator pattern applied to slicing); idempotent lifecycle operations.
- Day-0 application-centric service profiles auto-derive 3GPP Slice Profiles via hierarchical aggregation — removes static template catalogues.
- Day-1 joint O-RAN + 3GPP provider coordination with share-vs-scale decisions and NSI serving-scope interconnection.
- Testbed: OAI + Open5GS on K8s 1.31.3, 3 physical UEs OTA, 9 zones / 3 regions; creation ≤22.4 s, update ≤5.1 s, upgrade ≤52.2 s, deletion ≤32.1 s, 4-level failure recovery <19 s, 63 NSIs on <0.03 cores.
- Uplink finding: core-only shaping cannot hold uplink SLAs; radio-side enforcement is structurally required.
- SLA compliance 80%+ under concurrent RAN+CN overload.

## Key technical points (ZH)

- NSI 作为声明式资源，由级联调和环管理（Kubernetes operator 模式应用于切片）；生命周期操作幂等。
- Day-0 面向应用的服务画像经层级聚合自动推导 3GPP 切片画像——去除静态模板目录。
- Day-1 O-RAN 与 3GPP 提供方联合协调，复用/扩容决策 + NSI 服务范围互连。
- 测试床：OAI + Open5GS on K8s 1.31.3，3 个实体终端空口接入，3 区域 9 分区；创建 ≤22.4 s、更新 ≤5.1 s、升级 ≤52.2 s、删除 ≤32.1 s、四级故障恢复 <19 s，<0.03 核支撑 63 个 NSI。
- 上行发现：仅核心网整形无法保持上行 SLA；无线侧执行在结构上必需。
- 并发 RAN+CN 过载下 SLA 达标率 80%+。

## Why it matters / what's new (EN)

The network-slicing bin's existing entries lean on RAN-side slice management (the 06-28 privacy-aware MARL VR slice entry) and declarative intent at the service layer; METIS is the first entry demonstrating a full Day-0/1/2 declarative orchestrator with joint RAN+core enforcement on real over-the-air hardware — and its uplink-enforcement finding is a concrete architectural constraint that intent-based slicing proposals routinely gloss over. Coming from the OAI lineage, the implementation is likely to propagate into the open-source stack the community actually runs, which gives its interface choices (application-centric profiles → auto-derived Slice Profiles) more standard-shaping weight than a typical orchestration paper.

## Why it matters / what's new (ZH)

network-slicing 主题的现有条目偏向 RAN 侧切片管理（06-28 隐私感知 MARL VR 切片条目）与服务层的声明式意图；METIS 是第一个在真实空口硬件上展示完整 Day-0/1/2 声明式编排、且 RAN+核心网联合执行的条目——其上行执行发现是基于意图的切片方案常常回避的具体架构约束。出自 OAI 一系，该实现很可能进入社区实际运行的开源栈，使其接口选择（应用画像 → 自动推导切片画像）比一般编排论文更具标准塑造力。

## Images

![METIS high-level architecture | METIS 总体架构](https://arxiv.org/html/2607.29282v1/x1.png)
![Hierarchical mapping for NSI orchestration | NSI 编排的层级映射](https://arxiv.org/html/2607.29282v1/x2.png)
