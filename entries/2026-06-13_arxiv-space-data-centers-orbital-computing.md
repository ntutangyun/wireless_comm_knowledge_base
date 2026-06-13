---
id: 2026-06-13_arxiv-space-data-centers-orbital-computing
date_published: 2026-06-11
date_found: 2026-06-13
technology: satellite
type: academic-paper
title_en: "Revolutionizing Wireless Communications with Space Data Centers: Applications and Open Challenges"
title_zh: "以太空数据中心革新无线通信：应用与开放挑战"
url: "https://arxiv.org/abs/2606.13086"
source_quality: full
topics: [space-data-center, orbital-computing, ISL, laser-comms, task-oriented, in-orbit-AI, LEO]
topic_primary: sat-ai
topics_secondary: [leo-constellations]
novelty_score: 2
---

## Summary (EN)

This survey/vision paper (Minghao Sun, Zehui Chen, Jinbo Hou, Kezhi Wang, Xiaoli Chu) argues that the next phase of satellite networks is not better connectivity but in-orbit computation. **Space Data Centers (SDCs)** integrate communication, computing, storage, and control in orbit, rather than acting as relay nodes that simply forward bits to the ground. The framing is a paradigm shift "from connectivity-oriented data transmission toward task-oriented and service-centric information exchange" — the satellite network becomes a multifunctional service platform for the AI industry, not just a pipe.

The authors lay out a four-layer hierarchical SDC architecture: an **access layer** (ground terminals, EO satellites and sensing payloads that acquire data and do preliminary task classification); a **relay & transport layer** (relay satellites with inter-satellite links, dynamic routing and buffer-assisted forwarding, capable of ~400 Gbps via laser communications); an **in-orbit computing layer** (constellation- or space-station-based distributed/centralised compute plus caching and load-balancing nodes); and a **service & control layer** (ground control for task orchestration, AI-model lifecycle, resource provisioning and result dissemination). They map four representative applications onto it: AI model deployment/retraining in orbit, ground-space collaborative computing for delay-tolerant offload, Earth-observation data triage (extract events in-orbit before downlinking to cut raw volume), and in-orbit coordination/control as a low-latency constellation-management hub.

The survey identifies three core bottlenecks: the communication-capacity gap between current and required ground-space/inter-satellite links; cross-layer resource orchestration under dynamic orbital conditions; and security, multi-tenancy and access control as first-class design objectives. A simulation (Figure 4) shows an SDC-centred space control architecture achieving lower control-layer latency than a ground-station-centred approach in multi-constellation LEO networks, supporting the case that moving coordination into orbit improves responsiveness. As a vision paper it proposes a framework and research agenda rather than a single validated mechanism.

## Summary (ZH)

本综述/愿景论文（Minghao Sun、Zehui Chen、Jinbo Hou、Kezhi Wang、Xiaoli Chu）主张卫星网络的下一阶段不是更好的连接，而是在轨计算。**太空数据中心（SDC）**在轨集成通信、计算、存储与控制，而非仅作为把比特转发到地面的中继节点。其框架是一次范式转变——"从面向连接的数据传输转向面向任务、以服务为中心的信息交换"——卫星网络成为面向 AI 产业的多功能服务平台，而不只是管道。

作者提出四层分级 SDC 架构：**接入层**（地面终端、对地观测卫星与感知载荷，完成数据采集与初步任务分类）；**中继与传输层**（带星间链路、动态路由与缓冲辅助转发的中继卫星，激光通信下可达约 400 Gbps）；**在轨计算层**（基于星座或空间站的分布式/集中式计算平台，加缓存与负载均衡辅助节点）；**服务与控制层**（地面控制负责任务编排、AI 模型生命周期、资源调配与结果分发）。并映射四类代表性应用：在轨 AI 模型部署/再训练、面向时延容忍卸载的天地协同计算、对地观测数据在轨分流（下行前在轨提取事件以削减原始数据量）、作为低时延星座管理枢纽的在轨协调/控制。

综述指出三大瓶颈：当前与所需的天地/星间链路之间的通信容量差距；动态轨道条件下的跨层资源编排；以及作为一级设计目标的安全、多租户与访问控制。仿真（图 4）显示，在多星座 LEO 网络中，以 SDC 为中心的空间控制架构比以地面站为中心的方案实现更低的控制层时延，支持将协调移入轨道可提升响应性的论点。作为愿景论文，它提出框架与研究议程，而非单一已验证机制。

## Key technical points (EN)

- **Concept:** Space Data Centers integrate comms + compute + storage + control in orbit; shift from connectivity-oriented to task/service-oriented exchange.
- **4-layer architecture:** access (sensing + task classification) → relay/transport (ISL, ~400 Gbps laser, buffer-assisted) → in-orbit computing (distributed/centralised + caching) → service/control (orchestration, AI-model lifecycle).
- **Applications:** in-orbit AI model deploy/retrain; ground-space collaborative offload; EO data triage before downlink; in-orbit coordination hub.
- **Challenges:** ground-space/ISL capacity gap; dynamic cross-layer orchestration; security/multi-tenancy/access control.
- **Result:** SDC-centred control architecture lowers control-layer latency vs ground-station-centred in multi-constellation LEO (Fig 4).

## Key technical points (ZH)

- **概念：** 太空数据中心在轨集成通信+计算+存储+控制；从面向连接转向面向任务/服务的交换。
- **四层架构：** 接入（感知+任务分类）→中继/传输（星间链路、约 400 Gbps 激光、缓冲辅助）→在轨计算（分布式/集中式+缓存）→服务/控制（编排、AI 模型生命周期）。
- **应用：** 在轨 AI 模型部署/再训练；天地协同卸载；下行前对地观测数据分流；在轨协调枢纽。
- **挑战：** 天地/星间链路容量差距；动态跨层编排；安全/多租户/访问控制。
- **结果：** 多星座 LEO 中，以 SDC 为中心的控制架构相比以地面站为中心降低控制层时延（图 4）。

## Why it matters / what's new (EN)

This is the KB's first entry on orbital computing / space data centers as a communications-architecture topic, complementing the satellite-AI thread. It frames the "satellite as compute platform" trend (Starcloud/orbital-GPU announcements, EO in-orbit processing) into a layered reference architecture and a concrete research agenda. As a survey its novelty is organisational rather than mechanistic, but the 400 Gbps laser-ISL relay assumption and the in-orbit-control-latency result give the sat-ai bin a forward-looking anchor for the compute-in-orbit direction.

## Why it matters / what's new (ZH)

这是 KB 中首个将在轨计算/太空数据中心作为通信架构主题的条目，补充卫星-AI 线索。它将"卫星即计算平台"趋势（Starcloud/在轨 GPU 公告、对地观测在轨处理）归纳为分层参考架构与具体研究议程。作为综述，其新颖性在于组织性而非机制性，但 400 Gbps 激光星间中继假设与在轨控制时延结果为 sat-ai 分箱在"在轨计算"方向上提供了前瞻锚点。

## Images
![Hierarchical Space Data Center architecture | 分级太空数据中心架构](https://arxiv.org/html/2606.13086v1/x1.png)
![Control-layer latency comparison | 控制层时延对比](https://arxiv.org/html/2606.13086v1/fig/result.png)
