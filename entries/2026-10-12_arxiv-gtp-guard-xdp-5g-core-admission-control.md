---
id: 2026-10-12_arxiv-gtp-guard-xdp-5g-core-admission-control
date_published: 2026-10-01
date_found: 2026-10-12
type: academic-paper
technology: cellular
title_en: "Line-Rate GTP-U Admission Control at the Edge of a Cloud-Native 5G Core: An XDP-Based Design for Kubernetes-Hosted User Plane Functions"
title_zh: "云原生 5G 核心网边缘的线速 GTP-U 接纳控制：面向 Kubernetes 托管用户面功能的 XDP 设计"
url: "https://arxiv.org/abs/2610.02296"
source_quality: full
topics: [UPF, GTP-U, XDP, eBPF, Kubernetes, PFCP, N3-interface, DDoS-mitigation, 5G-core]
topic_primary: mec
topics_secondary: [cellular-security, 5g-nr]
novelty_score: 2
---

## Summary (EN)
Simhadri Podala Narasimha (independent researcher) addresses a tension between 5G Standalone (SA) core performance and cloud-native operations: the User Plane Function (UPF) terminates every GTP-U (GPRS Tunnelling Protocol - User plane) packet arriving over the N3 interface from the RAN, making N3 both the busiest and most exposed point of the mobile data path, but historically high-capacity UPFs have relied on kernel-bypass frameworks such as DPDK that dedicate CPU cores and take the network interface card away from the kernel entirely — a model that fits poorly with Kubernetes schedulers, container network interfaces, observability agents, and public-cloud virtual NICs, all of which assume the kernel owns the device. The paper proposes GTP-Guard, a design (not yet an evaluated implementation) built on the Linux kernel's eXpress Data Path (XDP) hook, which runs an eBPF program in the network driver's receive path before the kernel allocates a socket buffer, letting it drop illegitimate traffic earlier and more cheaply than any approach that must first enter the normal networking stack.

GTP-Guard is structured as a six-stage ordered pipeline: peer allow-listing, GTP-U header validation, Tunnel Endpoint Identifier (TEID) admission checked against session state derived from the Packet Forwarding Control Protocol (PFCP, the N4 interface between the Session Management Function and the UPF), bounded GTP extension-header parsing, inner-packet anti-spoofing with GTP-in-GTP tunnel-injection detection, and per-session policing — covering threats including off-path N3 flooding, malformed/fuzzed GTP-U, TEID scanning of stale tunnels, inner-source spoofing, GTP-in-GTP injection, and per-subscriber floods. Among the paper's four stated contributions (pipeline, stage-ordering cost model, Kubernetes deployment model, evaluation methodology), the cost model formalizes stage ordering as a cost-minimization problem: the author shows that sorting stages by the ratio of per-packet processing cost to rejection probability minimizes expected per-packet work, and proposes run-time re-ordering via eBPF tail-call program arrays so the pipeline can adapt when the traffic mix shifts under attack. The paper also describes a Kubernetes deployment model using a node-level DaemonSet with eBPF maps pinned so that state survives agent upgrades, and discusses constraints specific to public-cloud virtual NICs. The author is explicit that this paper presents only the design and a reproducible evaluation methodology stated as testable hypotheses (covering throughput, latency, CPU efficiency, and attack resilience) — no measured throughput, latency, or attack-mitigation results are reported here; the author states these will appear in a subsequent version of the paper.

## Summary (ZH)
Simhadri Podala Narasimha（独立研究者）探讨了 5G 独立组网（SA）核心网性能与云原生运维理念之间的矛盾：用户面功能（UPF）需要终结每一个经由 N3 接口、来自 RAN 的 GTP-U（GPRS 隧道协议—用户面）数据包，这使 N3 接口成为移动数据路径上最繁忙也最易暴露的环节；但以往高容量 UPF 普遍依赖 DPDK 等内核旁路（kernel-bypass）框架，这类框架会独占 CPU 核心并将网络接口卡完全从内核中剥离——而这一模式与云原生运维理念格格不入，因为 Kubernetes 调度器、容器网络接口、可观测性代理以及公有云虚拟网卡都默认由内核掌管网络设备。论文提出了 GTP-Guard，这是一套基于 Linux 内核"快速数据路径"（eXpress Data Path, XDP）钩子构建的设计方案（目前尚未给出评估结果的实现），其原理是在网络驱动的接收路径上、内核分配套接字缓冲区之前运行一个 eBPF 程序，从而能够比任何需要先进入常规网络栈的方案更早、更低成本地丢弃非法流量。

GTP-Guard 被组织为一个六阶段有序处理流水线：对端白名单校验、GTP-U 报头校验、针对基于分组转发控制协议（PFCP，即会话管理功能与 UPF 之间的 N4 接口）派生出的会话状态进行隧道端点标识符（TEID）接纳校验、受限的 GTP 扩展报头解析、带 GTP-in-GTP 隧道注入检测的内层包反欺骗，以及逐会话限速——所覆盖的威胁类型包括来自路径外（off-path）源的 N3 流量洪泛、畸形/模糊测试式 GTP-U 报文、针对陈旧隧道的 TEID 扫描、内层源地址欺骗、GTP-in-GTP 注入，以及针对单一用户的流量洪泛。在论文列出的四项贡献（流水线、阶段排序成本模型、Kubernetes 部署模型、评估方法）中，成本模型将阶段排序形式化为一个成本最小化问题：作者证明，按"单包处理成本与拒绝概率之比"对各阶段排序可最小化预期的单包处理工作量，并提出通过 eBPF 尾调用程序数组实现运行时重排序，使流水线能够在攻击导致流量构成发生变化时自适应调整。论文还描述了一种 Kubernetes 部署模型，采用节点级 DaemonSet 并将 eBPF 映射表固定（pinned），使状态能够在代理升级后保留，并讨论了公有云虚拟网卡特有的限制。作者明确说明，本文仅给出设计方案以及以可检验假设形式陈述的可复现评估方法（涵盖吞吐量、时延、CPU 效率与抗攻击韧性）——本文并未报告任何实测的吞吐量、时延或攻击缓解结果；作者表示相关数据将在本文后续版本中给出。

## Key technical points (EN)
- Targets the UPF's N3 (GTP-U) interface, the busiest/most exposed point on the 5G SA user-plane path, as operators move the core onto Kubernetes/public cloud where DPDK-style kernel bypass is operationally difficult.
- Six ordered XDP/eBPF stages: peer allow-listing, GTP-U header validation, PFCP-derived TEID admission, bounded extension-header parsing, GTP-in-GTP anti-spoofing, per-session policing — dropping illegitimate traffic before socket-buffer allocation.
- Formalizes stage ordering as a cost-minimization problem (sort by per-packet cost / rejection-probability ratio) with run-time re-ordering via eBPF tail-call program arrays under shifting attack traffic.
- Kubernetes deployment model: node-level DaemonSet with pinned eBPF maps that survive agent upgrades; discusses public-cloud virtual-NIC constraints.
- The paper is explicitly design-and-methodology only: no throughput, latency, CPU-efficiency, or attack-resilience measurements are reported; the author states these are deferred to a later version.

## Key technical points (ZH)
- 针对 UPF 的 N3（GTP-U）接口——5G SA 用户面路径上最繁忙、最暴露的环节——展开研究，背景是运营商正将核心网迁移至 Kubernetes/公有云，而 DPDK 式内核旁路在此环境下运维困难。
- 六个有序的 XDP/eBPF 阶段：对端白名单校验、GTP-U 报头校验、基于 PFCP 派生会话状态的 TEID 接纳校验、受限的扩展报头解析、GTP-in-GTP 反欺骗、逐会话限速——在套接字缓冲区分配之前即丢弃非法流量。
- 将阶段排序形式化为成本最小化问题（按"单包成本/拒绝概率"之比排序），并通过 eBPF 尾调用程序数组实现运行时重排序，以应对攻击导致的流量构成变化。
- Kubernetes 部署模型：采用节点级 DaemonSet，并将 eBPF 映射表固定，使状态可在代理升级后保留；并讨论了公有云虚拟网卡特有的限制。
- 论文明确说明目前仅为设计与方法论阶段：未报告任何吞吐量、时延、CPU 效率或抗攻击韧性的实测数据；作者表示相关结果将在后续版本中给出。

## Why it matters / what's new (EN)
The author argues that XDP has been used for in-kernel UPFs and GTP-U-aware receive-side scaling, but that considerably less attention has been paid to XDP as a dedicated admission-control layer placed in front of an existing UPF, regardless of how that UPF forwards traffic; GTP-Guard targets that gap. The entry is logged as a design proposal: its quantitative claims about throughput, latency, and attack resilience are explicitly unvalidated by the author's own admission and should be treated as hypotheses pending a future version.

## Why it matters / what's new (ZH)
作者指出，XDP 已被用于内核态 UPF 与 GTP-U 感知的接收端扩展，但将 XDP 作为部署在现有 UPF 前端、与其转发实现无关的专用接纳控制层，此前关注较少；GTP-Guard 正是针对这一空白。需要说明的是，本条目记录的是一份设计方案：其关于吞吐量、时延与抗攻击韧性的量化主张，作者本人已明确说明尚未经过验证，应视为待后续版本检验的假设。

## Images

None.
