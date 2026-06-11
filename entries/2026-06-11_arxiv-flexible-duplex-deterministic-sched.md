---
id: 2026-06-11_arxiv-flexible-duplex-deterministic-sched
date_published: 2026-06-09
date_found: 2026-06-11
type: academic-paper
technology: cellular
title_en: "Predictive and Spatially Aware Scheduling in Flexible Duplexing for Deterministic Communications"
title_zh: "面向确定性通信的灵活双工预测式空间感知调度"
url: "https://arxiv.org/abs/2606.11398"
source_quality: abstract_only
topics: [flexible-duplex, deterministic, scheduling, URLLC, V2X]
topic_primary: 5g-nr
topics_secondary: [6g-vision]
novelty_score: 2
---

## Summary (EN)

Riaz, Coll-Perales, Lucas-Estañ, Gozalvez and Sepulcre (UMH Elche group; arXiv 2606.11398, submitted 9 June 2026, IEEE VTC venue) tackle deterministic service levels for time-sensitive closed-loop applications in next-generation cellular networks using flexible duplexing (FD) — simultaneous uplink and downlink transmissions over orthogonal resources within the same band.

FD's price is cross-link interference between simultaneous UL and DL transmissions. The paper's scheduler counters it with two levers: traffic forecasting (predicting upcoming transmissions so UL/DL resource splits are arranged ahead of demand) and spatial awareness/diversity (placing simultaneous opposite-direction transmissions so that interfering links are spatially separated). The authors report over 40% improvement in transmission completion rates versus baseline FD scheduling.

The arxiv HTML rendering is unavailable (404), so this entry is abstract-level only; a later run can backfill evaluation details (simulator, scenario scale, latency distributions) once the full text is accessible.

## Summary (ZH)

Riaz、Coll-Perales、Lucas-Estañ、Gozalvez 与 Sepulcre（UMH Elche 团队；arXiv 2606.11398，2026 年 6 月 9 日提交，IEEE VTC 会议）研究下一代蜂窝网络中时间敏感闭环应用的确定性服务保障，采用灵活双工（FD）——在同一频段内以正交资源同时进行上行与下行传输。

灵活双工的代价是同时收发带来的交叉链路干扰。论文调度器用两个手段对抗：流量预测（预判即将到来的传输，提前安排上下行资源划分）与空间感知/分集（将同时反向传输在空间上错开，使干扰链路彼此分离）。作者报告传输完成率较基线 FD 调度提升超过 40%。

该论文的 arXiv HTML 渲染不可用（404），本条目仅基于摘要；后续运行可在全文可获取后回填评估细节（仿真器、场景规模、时延分布等）。

## Key technical points (EN)

- Flexible duplexing: simultaneous UL + DL on orthogonal resources in the same band — a determinism enabler for closed-loop industrial/vehicular traffic.
- Predictive scheduling: traffic forecasting arranges UL/DL splits before demand arrives, protecting deadline-bound transmissions.
- Spatial awareness: opposite-direction simultaneous transmissions are placed for spatial separation to suppress cross-link interference.
- Headline: >40% improvement in transmission completion rate vs baseline FD scheduling.
- UMH Elche group (same lab as the C-V2X semantic-communications work) — VTC venue, vehicular/deterministic focus.

## Key technical points (ZH)

- 灵活双工：同一频段正交资源上同时上行+下行——闭环工业/车载流量确定性的使能手段。
- 预测式调度：流量预测在需求到来前安排上下行划分，保护有截止期约束的传输。
- 空间感知：将同时的反向传输在空间上错开布置，抑制交叉链路干扰。
- 核心数字：传输完成率较基线 FD 调度提升超过 40%。
- UMH Elche 团队（与 C-V2X 语义通信工作同一实验室）——VTC 会议，车载/确定性方向。

## Why it matters / what's new (EN)

First flexible-duplexing entry in the KB. It complements the deterministic-communications thread arriving from two directions: the C-V2X semantic/task-oriented scalability work from the same group (2026-06-10_arxiv-semantic-task-oriented-v2x-scalability) and the 6G spectrum-aggregation position paper's interest in flexible spectrum use (2026-06-09_arxiv-spectrum-aggregation-6g-ca-vs-dc). Duplex-direction flexibility plus predictive scheduling is one of the candidate Rel-20/21 determinism tools, and this gives the bin its first concrete scheduling result (>40% completion-rate gain), albeit abstract-only for now.

## Why it matters / what's new (ZH)

KB 中首个灵活双工条目。它从两个方向补充确定性通信主线：同一团队的 C-V2X 语义/任务导向可扩展性工作（2026-06-10_arxiv-semantic-task-oriented-v2x-scalability），以及 6G 频谱聚合立场文件中对灵活频谱使用的关注（2026-06-09_arxiv-spectrum-aggregation-6g-ca-vs-dc）。双工方向灵活性加预测式调度是 Rel-20/21 确定性候选工具之一，本文为该方向提供了首个具体调度结果（完成率提升超 40%），目前仅摘要级信息。
