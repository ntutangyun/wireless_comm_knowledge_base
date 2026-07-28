---
id: 2026-07-28_arxiv-location-aware-nas-timers-ntn
date_published: 2026-07-24
date_found: 2026-07-28
type: academic-paper
technology: cellular
title_en: "Location-Aware NAS Timer Optimization in NTN-TN Integrated Networks — per-UE registration timers from LEO path geometry cut latency 20% and energy 10%"
title_zh: "NTN-TN 融合网络中位置感知的 NAS 定时器优化——基于 LEO 路径几何的按 UE 注册定时器降低 20% 时延与 10% 能耗"
url: "https://arxiv.org/abs/2607.21947"
source_quality: full
topics: [NTN, LEO, 5G-core, NAS, registration]
topic_primary: ntn
topics_secondary: [5g-nr]
novelty_score: 2
---

## Summary (EN)

Cheng Liu and Peng Hu (University of Manitoba; NSERC-funded; arXiv 2607.21947, submitted Jul-24-2026) address a neglected control-plane detail of LEO satellite–terrestrial (NTN-TN) integration: Non-Access Stratum (NAS) timers that govern how long a UE and the network wait for responses during 5G registration. Network-wide fixed timer values fail in LEO because propagation delay, inter-satellite-link (ISL) hop count, and AMF queueing vary dramatically with UE location — a single fixed value is overly conservative for short-path UEs and insufficient for long-path or queue-exposed ones.

The proposal keeps the closed-form timer calculation but makes it location-specific. Path-delay modeling incorporates the slant distance to the serving satellite, the ISL hop count estimated from ground-station proximity, and feeder-link propagation. An adaptive endpoint weighting then extends the timer according to expected AMF queue exposure and path reliability — deliberately avoiding extra conservatism on lossy routes where waiting longer cannot help.

In a Python NAS-registration simulator with a 72×22 LEO constellation, 3000–5000 UEs and 0–50% loss rates, the location-aware timers cut registration latency 20–22% and UE energy 10–12% versus the prior closed-form approach (AstroTimer), and eliminate avoidable retransmissions at all hop counts (the baseline needs 2.00 attempts on 8-hop paths).

## Summary (ZH)

Cheng Liu 与 Peng Hu（曼尼托巴大学；NSERC 资助；arXiv 2607.21947，2026-07-24 提交）研究 LEO 卫星-地面（NTN-TN）融合中一个被忽视的控制面细节：管控 5G 注册过程中 UE 与网络等待响应时长的非接入层（NAS）定时器。全网固定的定时器取值在 LEO 中失效，因为传播时延、星间链路（ISL）跳数与 AMF 排队随 UE 位置剧烈变化——单一固定值对短路径 UE 过于保守，对长路径或受排队影响的 UE 又不够用。

方案保留闭式定时器计算但使其位置化：路径时延建模纳入到服务卫星的斜距、由地面站邻近度估计的 ISL 跳数以及馈电链路传播；自适应端点加权再按预期 AMF 队列暴露与路径可靠性延长定时器——刻意避免在丢包路径上无谓加长等待（等待无法弥补丢包）。

在 72×22 LEO 星座、3000–5000 UE、0–50% 丢包率的 Python NAS 注册仿真器中，位置感知定时器较此前闭式方法（AstroTimer）降低注册时延 20–22%、UE 能耗 10–12%，并在所有跳数下消除可避免的重传（基线在 8 跳路径需 2.00 次尝试）。

## Key technical points (EN)

- NAS registration timers made per-UE: slant distance + ISL hop estimate (from ground-station proximity) + feeder-link delay replace network-wide constants.
- Adaptive endpoint weighting couples AMF queue-position exposure with path reliability, so lossy paths don't get useless extra waiting.
- 72×22 LEO constellation simulation, 3000–5000 UEs, 0–50% loss: −20–22% registration latency, −10–12% UE energy vs AstroTimer; avoidable retransmissions eliminated at all hop counts.
- Closed-form and lightweight — no learning loop; deployable in existing 5G NAS procedures.

## Key technical points (ZH)

- NAS 注册定时器按 UE 定制：斜距 + ISL 跳数估计（基于地面站邻近度）+ 馈电链路时延，取代全网常量。
- 自适应端点加权将 AMF 队列位置暴露与路径可靠性耦合，避免在丢包路径上无效延长等待。
- 72×22 LEO 星座仿真、3000–5000 UE、0–50% 丢包：较 AstroTimer 注册时延 −20–22%、UE 能耗 −10–12%；所有跳数下消除可避免重传。
- 闭式且轻量——无学习环路，可部署于现有 5G NAS 流程。

## Why it matters / what's new (EN)

First NAS-layer / control-plane-timer entry in the KB's ntn bin, which so far covered access and transport topics (satellite-IAB, TN-NTN spectrum allocation, LEO beam hopping) but not the registration procedures that decide whether a UE gets onto the network at all. The complementary relationship with 2026-07-26_arxiv-llm-intent-satellite-iab (same integration trend, different layer) is notable: NTN research is moving up the stack from PHY/scheduling into core-network procedure tuning. AstroTimer emerges as the named prior art this work supersedes.

## Why it matters / what's new (ZH)

KB ntn 主题下首个 NAS 层/控制面定时器条目——该主题此前覆盖接入与传输（卫星 IAB、TN-NTN 频谱分配、LEO 波束跳变），但未涉及决定 UE 能否入网的注册流程。与 2026-07-26_arxiv-llm-intent-satellite-iab（同一融合趋势、不同层次）的互补关系值得注意：NTN 研究正沿协议栈上移，从物理层/调度进入核心网流程调优。AstroTimer 是本工作所超越的具名先前方案。

## Images
![LEO satellite NTN-TN network architecture | LEO 卫星 NTN-TN 网络架构](https://arxiv.org/html/2607.21947v1/x1.png)
