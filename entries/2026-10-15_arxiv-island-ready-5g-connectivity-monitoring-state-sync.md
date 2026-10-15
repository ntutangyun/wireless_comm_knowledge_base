---
id: 2026-10-15_arxiv-island-ready-5g-connectivity-monitoring-state-sync
date_published: 2026-10-12
date_found: 2026-10-15
type: academic-paper
technology: cellular
title_en: "Island-Ready Communication Networks: Connectivity Monitoring and State Synchronization for 5G Crisis Connectivity at the Edge"
title_zh: "孤岛就绪通信网络：面向边缘 5G 危机连通的连通性监测与状态同步"
url: "https://arxiv.org/abs/2610.16284"
source_quality: full
topics: [5G-core, Open5GS, UERANSIM, Kubernetes, Raft, resilience, island-operation, failover, MongoDB, NetMob]
topic_primary: 5g-nr
topics_secondary: [mec]
novelty_score: 3
---

## Summary (EN)
Leon Janzen, Maria Koch and Matthias Hollick (TU Darmstadt; IMDEA Networks) study "island-ready" 5G deployments: networks that switch to regional island operation when a region is cut off from the global Internet, so that users can still reach services hosted at the edge. The paper is organised around two research questions: how state synchronization and connectivity monitoring of island-ready 5G cores can benefit from failure-detection and consensus protocols (RQ1), and what overhead they add to country-wide deployments (RQ2).

For RQ1 the authors add two custom network functions to the Open5GS control plane. The connectivity monitoring function (CMF) checks liveness between cores with a heartbeat protocol and triggers the transition between normal and island operation after a configurable number of failed heartbeats. The state synchronization function (SSF) replicates the state of all 5G network functions between cores, so a failover core can activate with the most recent state; the authors survey consensus and failure-detection protocols and choose Raft-based synchronization (backed by a MongoDB replica set).

For RQ2 the system model uses a generated country-wide topology for France (POBTOG; 64,752 base stations at P = 1500, close to the 63,936 real base stations cited) combined with real cellular traffic from the NetMob dataset. The experiments run on a 14-node Kubernetes cluster with Open5GS cores and UERANSIM gNBs and UEs, simulating Paris and Lyon (310 base stations, 1,871 NetMob tiles) with two messenger applications, one centrally hosted and one with servers in every region.

The results: switching latency is dominated by activating the regional island core and reconfiguring the access network rather than by the detection threshold, and synchronization traffic grows faster than linearly with the number of 5G cores.

## Summary (ZH)
Leon Janzen、Maria Koch 与 Matthias Hollick（达姆施塔特工业大学；IMDEA 网络研究所）研究"孤岛就绪"的 5G 部署：当某区域与全球互联网断开时，网络切换到区域孤岛运行，使用户仍可访问部署在边缘的服务。论文围绕两个研究问题展开：孤岛就绪 5G 核心网的状态同步与连通性监测如何借助故障检测与共识协议（RQ1），以及它们给全国范围部署带来多少开销（RQ2）。

针对 RQ1，作者在 Open5GS 控制面中加入两个自定义网络功能。连通性监测功能（CMF）通过心跳协议检查核心网之间的存活状态，并在连续心跳失败达到可配置次数后触发正常运行与孤岛运行之间的切换。状态同步功能（SSF）在核心网之间复制所有 5G 网络功能的状态，使故障切换核心网能以最新状态激活；作者调研了共识与故障检测协议，选择基于 Raft 的同步（以 MongoDB 副本集为后端）。

针对 RQ2，系统模型使用生成的法国全国拓扑（POBTOG；P = 1500 时为 64,752 个基站，接近所引用的真实基站数 63,936），并结合 NetMob 数据集中的真实蜂窝流量。实验在 14 节点 Kubernetes 集群上运行，使用 Open5GS 核心网及 UERANSIM 的 gNB 与 UE，仿真巴黎和里昂（310 个基站、1,871 个 NetMob 网格），并采用两个即时通讯应用，一个集中部署，一个在每个区域都有服务器。

结果显示：切换时延主要由激活区域孤岛核心网和重配接入网决定，而非检测阈值；同步流量随 5G 核心网数量的增长快于线性。

## Key technical points (EN)
- Design: CMF (heartbeat-based liveness, active and passive roles, a /state endpoint that regional applications can probe) and SSF (replicates all network-function state; Raft-based) added as custom network functions beside AMF, SMF, UPF and the rest of the Open5GS control plane.
- Transition steps: detect T_F failed heartbeats, activate the regional island core, reconfigure the regional access network (gNBs reconnect to the regional AMF and UPF). In island operation, regional UPFs take over the regional /17 UE network.
- Switching latency: a small threshold produces false switches (observed for T_F <= 3); the threshold has limited impact on total latency, and reconfiguring the access network accounts for more than half of the transition time. The authors suggest a conservative threshold.
- Synchronization overhead: mean synchronization traffic rises from 273 kB/s to 4.54 MB/s as the number of cores grows from 10 to 50; the peak rate is 9.36 MB/s for 50 cores and 1,871 subscribers.
- Topology used: 5 Raft cores, 25 active cores, 500 failover cores and 64,752 base stations in the full model; the executed cluster has eight cores and 310 base stations.
- Traffic scaling: with NetMob traffic scaled, base stations were overloaded for S >= 0.03125 (the RRC connection was the first point of failure), and the authors suggest S = 0.001 aligns the setup with the real world, noting that further experiments are needed to generalize this.
- Artifacts (Ansible playbooks, Helm charts, manifests, Docker images, Go scripts) are published for reproduction.

## Key technical points (ZH)
- 设计：在 AMF、SMF、UPF 及 Open5GS 控制面其余功能之外，增加自定义网络功能 CMF（基于心跳的存活检测，含主动与被动角色，以及可供区域应用探测的 /state 接口）和 SSF（复制全部网络功能状态；基于 Raft）。
- 切换步骤：检测到 T_F 次心跳失败、激活区域孤岛核心网、重配区域接入网（gNB 重连到区域 AMF 与 UPF）。孤岛运行时，区域 UPF 接管区域 /17 的 UE 网络。
- 切换时延：阈值过小会产生误切换（T_F <= 3 时观察到）；阈值对总时延影响有限，重配接入网占切换时间的一半以上。作者建议采用保守阈值。
- 同步开销：核心网数量从 10 增至 50 时，平均同步流量从 273 kB/s 升至 4.54 MB/s；50 个核心网、1,871 个用户时峰值为 9.36 MB/s。
- 所用拓扑：完整模型含 5 个 Raft 核心网、25 个活动核心网、500 个故障切换核心网和 64,752 个基站；实际运行的集群含 8 个核心网和 310 个基站。
- 流量缩放：缩放 NetMob 流量后，S >= 0.03125 时基站过载（RRC 连接最先失效），作者认为 S = 0.001 使该环境与现实相符，并指出需要进一步实验才能推广这一结论。
- 论文公开了 Ansible 剧本、Helm chart、清单文件、Docker 镜像和 Go 脚本以便复现。

## Why it matters / what's new (EN)
The KB's 5G entries so far concentrate on the radio side and on core-network monitoring in normal operation (for example the NetMon Kubernetes/eBPF monitoring entry of 2026-09-15); this paper looks at what a 5G core needs in order to keep serving a region when its backhaul to the rest of the network fails. The result worth noting is a scaling observation, super-linear synchronization traffic with core count, together with the finding that access-network reconfiguration, not failure detection, dominates the switch. The evaluation is an emulation on a 14-node cluster with scaled NetMob traffic; the authors note that further experiments are needed to generalize the traffic-scaling finding.

## Why it matters / what's new (ZH)
知识库迄今的 5G 条目集中于无线侧以及正常运行下的核心网监测（例如 2026-09-15 的 NetMon Kubernetes/eBPF 监测条目）；本文关注的是当某区域到网络其余部分的回传中断时，5G 核心网需要什么才能继续为该区域服务。值得关注的结果是一个规模化观察——同步流量随核心网数量超线性增长——以及主导切换时延的是接入网重配而非故障检测。评估是在 14 节点集群上使用缩放 NetMob 流量的仿真；作者指出流量缩放结论需要进一步实验才能推广。
