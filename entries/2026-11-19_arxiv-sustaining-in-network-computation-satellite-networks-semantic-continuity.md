---
id: 2026-11-19_arxiv-sustaining-in-network-computation-satellite-networks-semantic-continuity
date_published: 2026-11-14
date_found: 2026-11-19
technology: edge-ai
type: academic-paper
title_en: "Sustaining In-Network Computation in Satellite Networks: An Architecture for Semantic Continuity (300-node Linux prototype, wildfire assessment)"
title_zh: "在卫星网络中维持网内计算：面向语义连续性的架构（300 节点 Linux 原型，野火评估）"
url: "https://arxiv.org/abs/2611.19489"
source_quality: full
topics: [in-network-computing, satellite-networks, SRv6, rebinding, replay, wildfire-assessment]
topic_primary: edge-orchestration
topics_secondary: [compute-offloading]
novelty_score: 3
---

## Summary (EN)

The paper argues that satellite computations often outlast the paths and providers that initially served them, and presents an architecture that keeps one continuing logical computation alive while the physical execution opportunities change. It separates three things: the logical computation, the stream context, and the physical binding. Workers execute ready operations; consumers recognise which results already contribute, so partial work is kept rather than discarded.

The use case is continuous wildfire assessment. Recognition extracts candidate hotspots from multispectral image tiles, association combines detections with historical fire perimeters, and reporting produces periodic assessments. The mechanism includes network-resolved binding of logical services to providers, backup chains and recomputation over surviving links using explicit hop-by-hop Segment Routing over IPv6 (SRv6) End.X adjacency segments, replay of unfinished work from retained inputs, and source-received confirmation that releases retained inputs and cancels pending retries (the paper calls the coordination Confirmation-Coordinated Rebinding, CCR).

Link computed over: a satellite network emulated by a 300-node Linux prototype (SRv6 forwarding), not a live satellite constellation. The prototype runs a four-stage image pipeline (grayscale, downsampling, mean filter, Sobel edge detection) on 200 satellite nodes and 100 endpoints on one Linux host; wildfire assessment is the illustrative design use case, not the measured workload. It is not an AI-model-placement study.

## Summary (ZH)

本文指出，卫星上的计算往往比最初为其服务的路径与提供者存活更久，并提出一种架构：在物理执行机会不断变化时，保持同一个持续的逻辑计算。架构区分三件事：逻辑计算、流上下文与物理绑定。工作节点执行就绪的操作；消费者识别哪些结果已经产生贡献，因此部分工作得以保留而不是丢弃。

用例是持续的野火评估：识别环节从多光谱影像瓦片中提取候选热点，关联环节把检测结果与历史火线范围合并，上报环节生成周期性评估。机制包括：把逻辑服务按网络解析绑定到提供者；使用显式逐跳 IPv6 段路由（SRv6）End.X 邻接段，在存活链路上切换到备份链或重新计算链；从保留的输入重放未完成的工作；以及由源端收到的确认来释放保留的输入并取消待处理的重试（论文将此协调称为确认协调重绑定，CCR）。

所经链路：由 300 节点 Linux 原型（SRv6 转发）仿真的卫星网络，并非真实在轨星座。原型运行四级图像流水线（灰度化、降采样、均值滤波、Sobel 边缘检测），在单台 Linux 主机上模拟 200 个卫星节点与 100 个端点；野火评估为说明性设计用例，并非实测负载。这也不是 AI 模型放置研究。

## Key technical points (EN)

- Placement result over 120 images: stage-wise placement delivers 82.08% of positions within deadlines versus 76.06% for single-node placement.
- Failure result over 50 observations with 20-node isolation: CCR coordinates replanning, source replay, cross-attempt acceptance and in-band confirmation, and completes all 50 observations with verified outputs using seven replays.
- Traces separate blocked output delivery from dependencies split across providers, so the two failure causes can be told apart.
- A Work ID combines the task, observation epoch, tile coordinates and model version; each attempt has a separate Result-Set ID, and records within a set carry item identifiers plus an expected count and payload digest.
- The prototype keeps one fixed endpoint receiver across changing access satellites; relocating an orbiting completion owner is described as an architectural extension, not evaluated.

## Key technical points (ZH)

- 120 幅影像上的放置结果：分阶段放置在截止时间内送达 82.08% 的位置，单节点放置为 76.06%。
- 50 次观测、20 个节点被隔离时的故障结果：CCR 协调重新规划、源端重放、跨尝试接受与带内确认，用七次重放完成全部 50 次观测并得到经校验的输出。
- 追踪数据把输出投递受阻与依赖被拆分到不同提供者这两类原因区分开来。
- Work ID 由任务、观测历元、瓦片坐标与模型版本组成；每次尝试有独立的 Result-Set ID，集合内记录带有条目标识以及预期数量与载荷摘要。
- 原型在接入卫星变化时保持一个固定的终点接收端；迁移在轨的完成所有者被描述为架构扩展，未做评估。

## Why it matters / what's new (EN)

This paper concerns keeping a multi-stage computation correct and complete when the network under it keeps reconfiguring, which is a different failure model (partial results, replay, acceptance across attempts). Results come from an emulated network and one use case, and the paper makes an architectural argument more than a performance claim.

## Why it matters / what's new (ZH)

本文关注的是当底层网络不断重构时，如何保持多阶段计算的正确与完整，其故障模型不同（部分结果、重放、跨尝试接受）。结果来自仿真网络与单一用例，论文更偏架构论证而非性能主张。

## Images

None.
