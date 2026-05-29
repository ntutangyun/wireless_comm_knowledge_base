---
id: 2026-05-29_arxiv-starlink-queuing-characterization
date_published: 2026-05-26
date_found: 2026-05-29
type: academic-paper
technology: satellite
title_en: "Characterizing the configuration of Starlink queuing: drop-front buffers, no per-flow fairness"
title_zh: "刻画 Starlink 的队列配置：丢队首缓冲、无逐流公平"
url: "https://arxiv.org/abs/2605.27717"
source_quality: full
topics: [Starlink, queuing, AQM, drop-front, bufferbloat, congestion-control, one-way-delay]
topic_primary: starlink
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)
Garcia, Sundberg and Brunstrom (Karlstad University) probe a normally-proprietary detail of Starlink: how its network queues are actually configured. They use a high-precision, burst-pattern-controlled traffic-generation approach to measure one-way delay (OWD) under carefully shaped load, and infer the queue-management behaviour from how delay and loss respond to the bursts.

Three findings stand out. First, Starlink does not apply per-flow fair queuing — flows are not isolated from one another in the queue. Second, the buffers use drop-front rather than the conventional drop-tail discipline: when the buffer is full, the oldest packet at the head is dropped instead of the newly arriving one at the tail. Third, that drop-front choice has a double edge — it reduces queuing delay (the freshest packets are kept, trimming latency), but it can interfere with the assumptions of loss-based congestion-control algorithms (which expect tail drops to signal congestion), potentially degrading throughput under some conditions.

The contribution is the rare empirical characterisation itself: Starlink's internal queue configuration is undisclosed, and this work reverse-engineers it from the outside via controlled measurement, showing the design leans toward latency reduction at some cost to compatibility with standard congestion control.

## Summary (ZH)
Garcia、Sundberg 与 Brunstrom（卡尔斯塔德大学）探查了 Starlink 通常保密的一个细节：其网络队列究竟如何配置。他们采用高精度、突发模式受控的流量生成方法，在精心整形的负载下测量单向时延（OWD），并据时延与丢包对突发的响应推断队列管理行为。

三点发现尤为突出。其一，Starlink 不施加逐流公平排队——队列中各流之间并不相互隔离。其二，缓冲采用"丢队首（drop-front）"而非常规的"丢队尾（drop-tail）"：缓冲满时丢弃队首最旧的分组，而非新到达的队尾分组。其三，丢队首是一把双刃剑——它降低排队时延（保留最新分组、削减延迟），但会干扰基于丢包的拥塞控制算法的假设（这类算法期望队尾丢包来指示拥塞），在某些条件下可能损害吞吐。

其贡献正是这一罕见的实测刻画：Starlink 的内部队列配置未公开，本工作通过受控测量从外部逆向还原，揭示其设计偏向降低时延，但以牺牲与标准拥塞控制的兼容性为一定代价。

## Key technical points (EN)
- Method: high-precision, burst-pattern-controlled traffic generation; one-way-delay (OWD) measurement to infer queue behaviour.
- Finding 1: no per-flow fair queuing (flows not isolated in the queue).
- Finding 2: drop-front buffers (oldest/head packet dropped when full), not drop-tail.
- Finding 3: drop-front cuts latency but breaks loss-based congestion-control assumptions → possible throughput degradation.
- Contribution: external empirical reverse-engineering of Starlink's otherwise-undisclosed queue configuration.

## Key technical points (ZH)
- 方法：高精度、突发模式受控的流量生成；以单向时延（OWD）测量推断队列行为。
- 发现 1：无逐流公平排队（队列中各流不隔离）。
- 发现 2：丢队首缓冲（满时丢最旧/队首分组），非丢队尾。
- 发现 3：丢队首降低时延，但破坏基于丢包的拥塞控制假设 → 可能损害吞吐。
- 贡献：从外部实测逆向还原 Starlink 未公开的队列配置。

## Why it matters / what's new (EN)
The KB's Starlink coverage is mostly capacity/market (subscriber counts, D2D) and one application-layer adaptation study (SafeSABR ABR over Starlink, 2026-05-26). This adds the transport-layer mechanism underneath: a concrete, measured statement of how Starlink queues — drop-front, no per-flow fairness — which directly explains why loss-based congestion control can misbehave on Starlink and informs ABR/transport designs like SafeSABR. Reverse-engineering an undisclosed AQM configuration from controlled OWD bursts is the methodological novelty.

## Why it matters / what's new (ZH)
本 KB 的 Starlink 内容多为容量/市场（用户数、D2D）以及一项应用层自适应研究（SafeSABR 在 Starlink 上的 ABR，2026-05-26）。本条目补上其下的传输层机制：对 Starlink 如何排队的具体实测结论——丢队首、无逐流公平——这直接解释了为何基于丢包的拥塞控制在 Starlink 上可能行为异常，并为 SafeSABR 等 ABR/传输设计提供依据。从受控 OWD 突发逆向还原未公开的 AQM 配置，是其方法论上的新意。
