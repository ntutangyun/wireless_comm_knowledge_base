---
id: 2026-06-15_arxiv-aidos-beam-hopping-ngso
date_published: 2026-06-12
date_found: 2026-06-15
type: academic-paper
technology: satellite
title_en: "Aidos: A Hybrid Optimization Algorithm for Beam Hopping Scheduling in NGSO Mega-Constellations"
title_zh: "Aidos：面向 NGSO 巨型星座波束跳变调度的混合优化算法"
url: "https://arxiv.org/abs/2606.14151"
source_quality: full
topics: [LEO, NGSO, beam-hopping, scheduling, PSO, Starlink, resource-allocation]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)
Zhao, Chen, Qiu and Gao (Fudan University, Institute of Space Internet; arXiv 2606.14151, submitted 12 June 2026) tackle **real-time beam-hopping time-plan (BHTP) generation** for NGSO mega-constellations like Starlink. A satellite must dynamically steer a limited set of beams across thousands of ground cells within a ~300-second visibility window, re-planning as traffic shifts. Existing methods don't keep up: round-robin ignores traffic heterogeneity, genetic algorithms need ~67.8 s per plan (far too slow for online use), and multi-agent deep RL collapses past ~200 cells.

**Aidos** is a particle-swarm-optimization core augmented with four specialized modules: **TARK** (traffic-aware random-key encoding, mapping discrete cell assignments to a continuous space the swarm can search), **STP-PMD** (Beta-distribution resampling guided by short-term traffic prediction, to accelerate convergence), **LR** (local refinement via greedy hotspot injection and time-slot swapping), and **MSP** (multi-scale Gaussian perturbation with adaptive step size to escape local optima).

On a Starlink-scale scenario (1,127 cells, 96 beams), Aidos delivers **+79.2% throughput vs the MOGA-BH genetic baseline and +247.2% vs multi-agent DRL**, with a **99.45% latency reduction** and a **9.3 s runtime (50 iterations)** — fast enough for ~13 re-plans per satellite pass. It scales to 2,693 cells with under-5-second latency, the regime where GA and MADRL fail outright. The novelty is the combination of traffic-aware encoding with a multi-objective metaheuristic plus sliding-window Beta resampling, demonstrating that online large-scale BHTP replanning is actually feasible.

## Summary (ZH)
赵、陈、邱与高（复旦大学空间互联网研究院；arXiv 2606.14151，2026 年 6 月 12 日提交）研究面向 Starlink 等 NGSO 巨型星座的**实时波束跳变时间规划（BHTP）生成**。卫星须在约 300 秒可见窗口内，将有限波束动态指向数千个地面小区，并随流量变化重新规划。现有方法跟不上：轮询忽略流量异质性，遗传算法每个规划需约 67.8 秒（在线使用太慢），多智能体深度 RL 在超过约 200 小区时崩溃。

**Aidos** 以粒子群优化为核心，外加四个专用模块：**TARK**（流量感知随机键编码，将离散小区分配映射到连续搜索空间）、**STP-PMD**（由短期流量预测引导的 Beta 分布重采样，加速收敛）、**LR**（通过贪婪热点注入与时隙交换的局部精化）、以及 **MSP**（自适应步长的多尺度高斯扰动以逃离局部最优）。

在 Starlink 规模场景（1,127 小区、96 波束）下，Aidos 相对 MOGA-BH 遗传基线吞吐 **+79.2%**、相对多智能体 DRL **+247.2%**，时延降低 **99.45%**，运行时间 **9.3 秒（50 次迭代）**——足以在每次卫星过境内重规划约 13 次。它可扩展到 2,693 小区且时延低于 5 秒，而 GA 与 MADRL 在该规模下直接失效。新颖性在于将流量感知编码与多目标元启发式相结合，并引入滑窗 Beta 重采样，证明在线大规模 BHTP 重规划确实可行。

## Key technical points (EN)
- **Problem**: online BHTP for NGSO — thousands of cells, limited beams, ~300 s visibility, frequent re-planning.
- **Core**: PSO + TARK (traffic-aware random-key continuous encoding), STP-PMD (traffic-predicted Beta resampling), LR (greedy hotspot/time-slot local refine), MSP (adaptive multi-scale perturbation).
- **Results (1,127 cells, 96 beams)**: +79.2% throughput vs MOGA-BH, +247.2% vs MADRL, −99.45% latency, 9.3 s/plan (50 iters), ~13 replans per pass.
- **Scale**: handles 2,693 cells at <5 s — GA (67.8 s) too slow, MADRL collapses >200 cells.
- **Novelty**: traffic-aware encoding + multi-objective metaheuristic + sliding-window Beta resampling for practical online replanning.

## Key technical points (ZH)
- **问题**：NGSO 在线 BHTP——数千小区、有限波束、约 300 秒可见、频繁重规划。
- **核心**：PSO + TARK（流量感知随机键连续编码）、STP-PMD（流量预测 Beta 重采样）、LR（贪婪热点/时隙局部精化）、MSP（自适应多尺度扰动）。
- **结果（1,127 小区、96 波束）**：相对 MOGA-BH 吞吐 +79.2%，相对 MADRL +247.2%，时延 −99.45%，9.3 秒/规划（50 迭代），每过境约 13 次重规划。
- **规模**：可处理 2,693 小区且 <5 秒——GA（67.8 秒）太慢，MADRL 超 200 小区崩溃。
- **新颖性**：流量感知编码 + 多目标元启发式 + 滑窗 Beta 重采样，实现实用的在线重规划。

## Why it matters / what's new (EN)
The `leo-constellations` bin tracks LEO capacity and resource-management work — recently the SCORE ground-station-placement optimizer (2026-06-13) and the Space Data Centers vision (2026-06-13). Aidos sits squarely in the on-board resource-allocation thread: it makes the case that classical metaheuristics, properly engineered with traffic-aware encoding and predictive resampling, beat both genetic algorithms (too slow) and multi-agent DRL (doesn't scale) for the specific, hard, real-time problem of beam-hopping in Starlink-scale constellations. The headline that it re-plans in ~9 s where GA needs ~68 s is the practical unlock. From the same Fudan Space Internet group as today's companion interference-detection paper (Agon, 2026-06-15).

## Why it matters / what's new (ZH)
`leo-constellations` 分箱跟踪 LEO 容量与资源管理工作——近期有 SCORE 地面站选址优化器（2026-06-13）与 Space Data Centers 愿景（2026-06-13）。Aidos 正处于星上资源分配这一主线：它论证了经过流量感知编码与预测式重采样精心设计的经典元启发式，在 Starlink 规模星座波束跳变这一具体、困难、实时的问题上，胜过遗传算法（太慢）与多智能体 DRL（无法扩展）。其相对 GA 需约 68 秒、Aidos 约 9 秒即可重规划是关键的实用突破。与今日同组的干扰检测论文（Agon，2026-06-15）同出自复旦空间互联网团队。
