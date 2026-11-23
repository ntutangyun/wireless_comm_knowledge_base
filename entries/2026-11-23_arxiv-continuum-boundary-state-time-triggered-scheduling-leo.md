---
id: 2026-11-23_arxiv-continuum-boundary-state-time-triggered-scheduling-leo
date_published: 2026-11-18
date_found: 2026-11-23
type: academic-paper
technology: satellite
title_en: "Continuum: Boundary-State-Aware Deterministic Scheduling in Dynamic LEO Networks"
title_zh: "Continuum：动态 LEO 网络中感知边界状态的确定性调度"
url: "https://arxiv.org/abs/2611.24021"
source_quality: full
topics: [LEO, time-triggered, deterministic-networking, scheduling, rolling-horizon, jitter, Iridium, Starlink]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Yang, Li, You and coauthors address mission-critical services on LEO constellations that need bounded latency and predictable delivery. Time-triggered (TT) schedules are normally built for a fixed topology snapshot; when the topology changes, a packet already buffered at an intermediate satellite can be left with an infeasible remaining route, and snapshot-based schedulers discard that forwarding progress. Continuum is a boundary-state-aware rolling-horizon scheduling framework: unfinished packet instances keep their buffered node and absolute arrival time into the next snapshot, and their remaining routes and transmission slots are jointly re-optimised under the original deadline.

The framework adds urgency-based queueing, joint path-and-slot evaluation over Yen's K-shortest paths, buffered stitching (commit the longest safe prefix and defer the remainder), and a latency-refinement step that adds feasible waiting time so shorter-latency instances align with the maximum observed latency for lower jitter. It is evaluated on Iridium (6 polar planes of 11 satellites) and a 1584-satellite Starlink-like shell against several rolling-horizon and snapshot baselines.

## Summary (ZH)

Yang、Li、You 等针对需要有界时延和可预期交付的 LEO 星座关键任务业务。时间触发（TT）调度通常按固定拓扑快照构建；拓扑变化时，已缓存在中间卫星上的数据包可能剩余路由不可行，而基于快照的调度器会丢弃这部分转发进展。Continuum 是一种感知边界状态的滚动时域调度框架：未完成的数据包实例将其缓存节点和绝对到达时间带入下一快照，并在保持原截止期限的前提下联合重新优化其剩余路由与发送时隙。

框架还包含基于紧迫度的排队、基于 Yen K 最短路径的路径与时隙联合评估、缓冲拼接（提交最长的安全前缀并将余下部分推迟），以及时延精修步骤：为时延较短的实例增加可行的等待时间，使其与观察到的最大时延对齐以降低抖动。评估使用 Iridium（6 个极轨道面、每面 11 颗卫星）和 1584 颗卫星的类 Starlink 壳层，并与多种滚动时域和快照基线比较。

## Key technical points (EN)

- Model: topology split into snapshots, a link included only if viable for the whole interval; per-hop offsets, link contention, store-and-forward causality, buffer residence bounds, boundary consistency and end-to-end deadlines; the lexicographic objective first maximises schedulable flows, then minimises total latency.
- Setup: Starlink-like 1584 satellites in 72 orbits at 550 km; 10 snapshot slots of 10 s each; 200 Mbps reserved for TT flows; periods 16-512 ms and packets 64-1518 bytes; boundary-probe groups make up 18% of the main workload.
- Results reported by the authors: 98.80% schedulability on Iridium and 92.77% on Starlink, 16.83 and 11.80 points above the RH-NoStitch rolling-horizon baseline; removing boundary-state inheritance costs 16.60 points (Iridium) and 14.97 (Starlink) in the ablation; removing the alignment step raises jitter by 37.7 times (Iridium) and 10.9 times (Starlink).
- Scale: against an SMT-based scheduler, Continuum matches admitted-flow counts up to 50 flows, SMT reaches its 1000 s timeout at 60 flows while Continuum schedules 59 flows in 1.27 s; on Starlink it reaches 100% schedulability at 1K flows and 71.37% at 10K.
- Inconsistency noted in the paper: the text reports Continuum jitter of 8.91 and 4.34 microseconds while its ablation table reports 26.46 and 99.87 microseconds (the quoted ratios come from the table), and the workload sizes differ between sections, so the schedulability figures are not directly comparable across sections.
- The paper names no publication venue; it is an arXiv preprint and results are from simulation.

## Key technical points (ZH)

- 模型：拓扑划分为快照，链路仅在整个区间内可用时才计入；包含逐跳偏移、链路争用、存储转发因果性、缓冲驻留上限、边界一致性和端到端截止期限；字典序目标先最大化可调度流数量，再最小化总时延。
- 设置：1584 颗卫星、72 个轨道、高度 550 km 的类 Starlink 星座；10 个快照，每个 10 s；为 TT 流预留 200 Mbps；周期 16-512 ms，包长 64-1518 字节；边界探测流组占主要负载的 18%。
- 作者报告的结果：Iridium 上可调度率 98.80%，Starlink 上 92.77%，分别比 RH-NoStitch 滚动时域基线高 16.83 和 11.80 个百分点；消融中去掉边界状态继承使可调度率在 Iridium 与 Starlink 上分别下降 16.60 和 14.97 个百分点；去掉对齐步骤使抖动在两者上分别增大 37.7 倍和 10.9 倍。
- 规模：与基于 SMT 的调度器相比，Continuum 在 50 条流以内接纳数相当，SMT 在 60 条流时触及 1000 s 超时，而 Continuum 以 1.27 s 调度 59 条流；在 Starlink 上，1K 条流时可调度率 100%，10K 条流时 71.37%。
- 论文中的不一致：正文给出 Continuum 抖动为 8.91 与 4.34 微秒，而消融表为 26.46 与 99.87 微秒（所引倍数来自表格），且各节负载规模不同，因此各节的可调度率数字不可直接比较。
- 论文未标明发表会议或期刊，为 arXiv 预印本，结果来自仿真。

## Why it matters / what's new (EN)

The paper notes that existing LEO scheduling approaches plan against a topology known per snapshot. Continuum targets the snapshot boundary itself, the moment when in-flight, deadline-bound traffic is stranded, and reports the effect with an ablation. The figures are simulation results with internally inconsistent jitter numbers, so the headline ratios should be read with that caveat.

## Why it matters / what's new (ZH)

论文指出，现有 LEO 调度方法大多按每个快照已知的拓扑做规划。Continuum 针对快照边界本身，即处于传输途中、受截止期限约束的流量被搁浅的时刻，并通过消融实验报告其影响。这些数字来自仿真，且抖动数据内部不一致，因此主要倍数应在此前提下解读。

## Images

None.
