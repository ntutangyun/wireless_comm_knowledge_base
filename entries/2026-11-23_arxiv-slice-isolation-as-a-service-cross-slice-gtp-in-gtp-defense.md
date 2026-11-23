---
id: 2026-11-23_arxiv-slice-isolation-as-a-service-cross-slice-gtp-in-gtp-defense
date_published: 2026-11-18
date_found: 2026-11-23
type: academic-paper
technology: cellular
title_en: "Slice Isolation-as-a-Service: An Isolation Mechanism to Proactively Defend Cross-Slice Attacks in 5G-Advanced and Beyond"
title_zh: "切片隔离即服务：面向 5G-Advanced 及以后的跨切片攻击主动防御隔离机制"
url: "https://arxiv.org/abs/2611.23826"
source_quality: full
topics: [network-slicing, UPF, GTP-in-GTP, cross-slice-attack, MINLP, Free5GC, Containerlab, URLLC, data-plane-security]
topic_primary: cellular-security
topics_secondary: [network-slicing]
novelty_score: 3
---

## Summary (EN)

AbdulGhaffar and Matrawy (Carleton University) study data-plane isolation between network slices that share user plane functions (UPFs). Tenants request one of three security tiers (low, medium, high) that fix how physical hosts and virtual network functions may be shared, and a mixed-integer nonlinear program (MINLP) places UPFs to minimize provisioning cost and end-to-end latency under those constraints. The resulting topologies are deployed on a containerized Free5GC testbed built with Nokia Containerlab and attacked with GTP-in-GTP reflection and volumetric flooding. The manuscript is marked as an author's draft soliciting feedback.

## Summary (ZH)

AbdulGhaffar 与 Matrawy（卡尔顿大学）研究共享用户面功能（UPF）的网络切片之间的数据面隔离。租户可申请低、中、高三档安全等级，分别规定物理主机与虚拟网络功能可以如何共享；混合整数非线性规划（MINLP）在这些约束下放置 UPF，以最小化部署成本和端到端时延。所得拓扑部署在基于 Nokia Containerlab 构建的容器化 Free5GC 测试床上，并遭受 GTP-in-GTP 反射攻击和流量泛洪攻击。该稿件标注为征求反馈的作者草稿。

## Key technical points (EN)

- Security tiers: low (shared physical and virtual resources, targeting consumer eMBB), medium (dedicated VNF instances on shared physical nodes, non-critical IoT) and high (dedicated VNFs on isolated physical nodes, mission-critical URLLC). Isolation is framed as an on-demand, priced capability rather than a static network-wide property.
- Optimization: the MINLP covers a multi-tier UPF chain (intermediate, central and PDU-session-anchor UPFs); the objective has cost terms for provisioning and infrastructure plus total end-to-end latency, subject to SLA delay bounds and the tier-dependent sharing constraints. Solver runs use a 0% gap with an 1800 s limit in a first phase and a relaxed 1% gap without a limit in a second.
- Testbed: a 32-core Xeon server with 10 VirtualBox VMs (one for Free5GC core, three for UPFs, four UERANSIM RAN emulators, two data networks), with multiple containerized UPFs per slice via Containerlab. Four slices (two eMBB, two URLLC) are compared across three topologies: fully shared; physical and VNF isolation for URLLC slices; VNF-only isolation for URLLC slices on a shared host.
- Reflection attack (GTP-in-GTP, from a prior ACM CCS 2025 study that tested unsliced cores): the attacker needs only the victim's TEID-IP pair and a UPF address. It succeeds on all four tested attacker–victim slice pairs in the fully shared topology and also in the VNF-only topology (the isolated UPF containers still share the host's N9 bridge), and fails only where URLLC slices had both VNF and physical isolation.
- Flooding attack (10k pps TRex traffic from one slice): latency of legitimate slices rose by 400% to 600% when infrastructure was shared; in the fully shared topology the two URLLC slices saw about 29.9% and 29.7% packet loss and VNF-only isolation gave about 29.8% and 30.6%, while full isolation gave 0% loss for the URLLC slices. TCP throughput of all three measured slices collapsed from a 15-40 Mbps baseline to 0 Mbps in the fully shared case.
- Costs: the secure allocation needs roughly 1400 MHz of CPU at 10 slices versus under 1000 MHz without isolation (about 50% more), and solving the 10-slice secure case took more than 10^4 s versus under 10^2 s for the non-secure one.
- Stated limitations: offline optimization with manual deployment, VM-based virtualization overhead in the testbed, and abstracted financial and energy metrics.

## Key technical points (ZH)

- 安全等级：低（物理与虚拟资源均共享，面向消费级 eMBB）、中（专用 VNF 实例但共享物理节点，面向非关键物联网）、高（专用 VNF 且运行于隔离物理节点，面向关键任务 URLLC）。隔离被视为可按需提供、可计价的能力，而非全网静态属性。
- 优化：MINLP 覆盖多层 UPF 链（中间 UPF、中心 UPF、PDU 会话锚点 UPF）；目标函数包含部署成本、基础设施成本以及总端到端时延，约束为 SLA 时延上界和与等级相关的共享限制。求解分两阶段：第一阶段 0% 间隙、1800 s 时限，第二阶段放宽到 1% 间隙且不设时限。
- 测试床：32 核 Xeon 服务器上运行 10 台 VirtualBox 虚拟机（1 台 Free5GC 核心网、3 台 UPF、4 台 UERANSIM RAN 仿真、2 台数据网络），每个切片通过 Containerlab 运行多个容器化 UPF。四个切片（两个 eMBB、两个 URLLC）在三种拓扑下对比：完全共享；URLLC 切片物理与 VNF 均隔离；URLLC 切片仅 VNF 隔离但共享主机。
- 反射攻击（GTP-in-GTP，来自此前 ACM CCS 2025 的研究，该研究只测试了未切片的核心网）：攻击者只需知道受害 UE 的 TEID-IP 对和一个 UPF 地址。该攻击在完全共享拓扑中全部四组被测攻击–受害切片组合上均成功，在仅 VNF 隔离的拓扑中同样成功（隔离的 UPF 容器仍共用主机的 N9 网桥），只有在 URLLC 切片同时具备 VNF 隔离和物理隔离时才失败。
- 泛洪攻击（来自一个切片的 10k pps TRex 流量）：基础设施共享时，合法切片时延上升 400% 至 600%；完全共享拓扑中两个 URLLC 切片丢包率约为 29.9% 和 29.7%，仅 VNF 隔离时约为 29.8% 和 30.6%，而完全隔离时 URLLC 切片丢包为 0%。完全共享情形下三个被测切片的 TCP 吞吐从 15-40 Mbps 的基线降至 0 Mbps。
- 代价：10 个切片时，安全分配约需 1400 MHz CPU，而无隔离时不足 1000 MHz（约多 50%）；10 个切片的安全分配求解超过 10^4 s，而非安全分配不足 10^2 s。
- 文中承认的局限：离线优化加手动部署、测试床基于虚拟机带来的虚拟化开销，以及对财务和能耗指标做了抽象。

## Why it matters / what's new (EN)

The distinguishing element is evaluating a recently published GTP-in-GTP reflection attack across slice-isolation depths rather than on an unsliced core, and showing in that setup that container-level isolation on a shared host did not stop it. The evidence comes from a VM-emulated Free5GC/UERANSIM testbed with an author's-draft manuscript, so the numbers describe that environment and are not production measurements.

## Why it matters / what's new (ZH)

其区别点在于：在不同切片隔离深度下评估一种新近发表的 GTP-in-GTP 反射攻击，而非只针对未切片核心网，并在该设置中显示共享主机上的容器级隔离无法阻止此攻击。证据来自基于虚拟机仿真的 Free5GC/UERANSIM 测试床，且稿件为作者草稿，因此数字只反映该环境，并非生产环境测量。

## Images

None.
