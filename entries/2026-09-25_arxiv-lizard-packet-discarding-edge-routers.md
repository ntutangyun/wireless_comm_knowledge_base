---
id: 2026-09-25_arxiv-lizard-packet-discarding-edge-routers
date_published: 2026-09-22
date_found: 2026-09-25
type: academic-paper
technology: edge-ai
title_en: "Lizard: Bandwidth-Adaptive Real-Time Video Analytics through Content-Aware Packet Discarding at Last-Mile Edge Routers"
title_zh: "Lizard：通过末端边缘路由器上的内容感知丢包实现带宽自适应实时视频分析"
url: "https://arxiv.org/abs/2609.25817"
source_quality: full
topics: [video-analytics, edge-router, eBPF, bandwidth-adaptation, OpenWRT, packet-scheduling]
topic_primary: edge-ai-networking
novelty_score: 3
---

## Summary (EN)

Researchers from UCLA, Renmin University of China, UC Berkeley, Nanjing University, and Princeton observe that real-time video analytics running over the "last mile" — home gateways, wireless access points, mobile edge gateways — routinely suffers when available bandwidth suddenly drops: the paper measures that available-bandwidth reductions exceeding 50% happen 2.68% of the time on broadband access links and 4.35% on home wireless networks in a residential video-streaming trace. Existing fixes fall on two sides of the same gap: network-level techniques drop packets without regard to what's in them, and application-level adaptation reacts too slowly once queuing delay has already built up, together costing up to 30% detection accuracy in the paper's measurements. Lizard's answer is to make the edge router itself content-aware rather than content-blind, without requiring it to decode video.

The system has three parts. On the client, frames are split into independently-decodable N x N blocks (N=4 works best) with a custom RTP header extension carrying each block's position and a "cumulative size ratio" so a partial frame is still useful downstream. On the server side, an analytics-driven prioritization step computes each block's "relative accuracy impact" — how much detection accuracy would be lost if that specific block were dropped — and feeds block priorities back to the client via RTCP. At the router itself, a three-phase (INIT to PRE to PD) state machine monitors packet enqueue/dequeue rates in 100ms windows, and once it detects a bandwidth squeeze, computes a drop threshold from how far dequeue rate has fallen below enqueue rate and discards only the lowest-priority blocks — implemented via eBPF so it runs on ordinary Linux-based routers, explicitly including OpenWRT. Tested via Mininet emulation against real Oboe (video-streaming bandwidth) and Ghent (LTE/4G) bandwidth traces, and real surveillance/driving video datasets with YOLOX object detection, Lizard cuts 99.9th-percentile frame delay by 53.2% (301ms to 152ms on Oboe vs GCC-only+EAAR) and improves detection accuracy by up to 30% versus GCC-only, CoDel and EAAR baselines, at a measured per-packet discard overhead of just 0.27 microseconds.

## Summary (ZH)

来自加州大学洛杉矶分校、中国人民大学、加州大学伯克利分校、南京大学与普林斯顿大学的研究者观察到：在"最后一公里"——家庭网关、无线接入点、移动边缘网关——上运行的实时视频分析，经常在可用带宽（ABW）骤降时遭受严重影响；论文测得，在一份居民区视频流数据轨迹中，可用带宽下降超过 50% 的情况在宽带接入链路上发生频率为 2.68%，在家庭无线网络上为 4.35%。现有的解决方案分处同一缺口的两端：网络层技术不区分内容一律丢包，应用层自适应则在排队延迟已经累积之后才做出反应、响应过慢，论文的测量显示，二者合计最多会造成 30% 的检测精度损失。Lizard 的应对方式是让边缘路由器本身具备内容感知能力而非对内容一无所知，同时又不需要路由器解码视频。

该系统由三部分组成。在客户端，每一帧被切分为可独立解码的 N×N 个块（N=4 效果最佳），并通过自定义的 RTP 头部扩展字段携带每个块的位置信息与"累计大小比例"，使得即使只收到部分帧也仍然有用。在服务端，一个由分析任务驱动的优先级计算模块，会为每个块计算"相对精度影响"——即若丢弃该特定块会造成多大的检测精度损失——并通过 RTCP 将块优先级反馈给客户端。在路由器本身，一个三阶段（INIT→PRE→PD）状态机以 100 毫秒为窗口监控数据包的入队/出队速率，一旦检测到带宽紧张，便根据出队速率相对入队速率的下降幅度计算丢弃阈值，仅丢弃优先级最低的块——该机制通过 eBPF 实现，可运行在普通的基于 Linux 的路由器上，论文明确提到包括 OpenWRT。研究者通过 Mininet 仿真、结合真实的Oboe（视频流带宽）与Ghent（LTE/4G）带宽数据轨迹，以及真实的监控/驾驶视频数据集与 YOLOX 目标检测算法进行测试，结果显示：相较GCC-only、CoDel与EAAR等基线方案，Lizard 将第 99.9 百分位帧时延降低 53.2%（在Oboe轨迹下相较GCC-only+EAAR从301毫秒降至152毫秒），检测精度最高提升 30%，而实测每包丢弃开销仅为 0.27 微秒。

## Key technical points (EN)

- Content-aware, in-network packet discarding at last-mile edge routers (home gateways, APs, mobile edge gateways) — router prioritizes without decoding video, using block-position metadata carried in a custom RTP header extension.
- Analytics-driven "relative accuracy impact" (RAI) scoring computed server-side quantifies, per video block, how much detection accuracy would be lost if it were dropped; fed back to the client via RTCP.
- Router-side implementation is eBPF-based on ordinary Linux routers, explicitly including OpenWRT — a three-phase (INIT/PRE/PD) state machine detects bandwidth squeezes from enqueue/dequeue rate divergence over 100ms windows.
- Evaluated against real Oboe (video-streaming bandwidth) and Ghent (LTE/4G) bandwidth traces plus real surveillance and driving (nuScenes) video with YOLOX detection, not synthetic bandwidth traces alone.
- 53.2% reduction in 99.9th-percentile frame delay (at the 99.9th percentile, 301->152 ms on Oboe vs GCC-only+EAAR), up to 30% detection accuracy improvement, and a measured 0.27-microsecond per-packet discard overhead versus a 33ms frame interval at 30fps.

## Key technical points (ZH)

- 在末端边缘路由器（家庭网关、AP、移动边缘网关）上实现内容感知的网内丢包机制——路由器无需解码视频，仅依靠自定义 RTP 头部扩展中携带的块位置元数据即可完成优先级判断。
- 服务端计算的、由分析任务驱动的"相对精度影响"（RAI）评分，量化了每个视频块若被丢弃会造成多大的检测精度损失，并通过 RTCP 反馈给客户端。
- 路由器端基于 eBPF 实现，可运行在普通的基于 Linux 的路由器上，论文明确提及包括 OpenWRT——一个三阶段（INIT/PRE/PD）状态机以 100 毫秒窗口通过入队/出队速率的差异来检测带宽紧张。
- 使用真实的Oboe（视频流带宽）与Ghent（LTE/4G）带宽数据轨迹，以及真实的监控与驾驶（nuScenes）视频数据配合 YOLOX 检测算法评估，而非仅使用合成带宽轨迹。
- 第 99.9 百分位帧时延降低 53.2%（在第99.9百分位上，Oboe轨迹下相较GCC-only+EAAR从301毫秒降至152毫秒），检测精度最高提升 30%，实测每包丢弃开销仅 0.27 微秒（相较 30fps 下 33 毫秒的帧间隔可忽略不计）。

## Why it matters / what's new (EN)

This KB's edge-ai-networking bin exists specifically for the case where an AI workload's demands motivate a change to the network/router side rather than the reverse, and Lizard is a clean example: the "what to drop" decision is driven entirely by the downstream analytics model's accuracy sensitivity, not by generic network QoS classes. It is also directly relevant to the WiFi side of this KB, since its target deployment explicitly includes OpenWRT-class home routers and wireless access points as the last-mile bottleneck point.

## Why it matters / what's new (ZH)

知识库 edge-ai-networking 分类正是为了收录"AI 工作负载的需求驱动网络/路由器侧发生改变"（而非相反方向）这一类场景而设立的，Lizard 是一个清晰的例子：丢包决策完全由下游分析模型的精度敏感度驱动，而非通用的网络 QoS 分类。这项工作也与知识库的 WiFi 分类直接相关，因为其目标部署场景明确包含 OpenWRT 类家庭路由器与无线接入点作为最后一公里的瓶颈节点。

## Images

![Lizard system architecture: block-aware client encoding, server-side accuracy-impact scoring, and router-side adaptive discarding | Lizard 系统架构：客户端块级编码、服务端精度影响评分与路由器端自适应丢包](https://arxiv.org/html/2609.25817v1/Design-Lizard-overview.png)
![Motivation: how a sudden available-bandwidth drop at a last-mile router causes queuing delay to build up | 问题动机：末端路由器上可用带宽骤降如何导致排队延迟累积](https://arxiv.org/html/2609.25817v1/Motivation-Background.png)
