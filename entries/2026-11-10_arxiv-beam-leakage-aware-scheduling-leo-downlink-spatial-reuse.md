---
id: 2026-11-10_arxiv-beam-leakage-aware-scheduling-leo-downlink-spatial-reuse
date_published: 2026-11-04
date_found: 2026-11-10
technology: satellite
type: academic-paper
title_en: "Intra-Cell Spatial Reuse in LEO Downlinks: Beam-Leakage-Aware Satellite Scheduling"
title_zh: "LEO 下行链路的小区内空间复用：感知波束泄漏的卫星调度"
url: "https://arxiv.org/abs/2611.06726"
source_quality: full
topics: [LEO, spatial-reuse, beam-leakage, satellite-scheduling, branch-and-bound, Ku-band]
topic_primary: leo-constellations
topics_secondary: [starlink]
novelty_score: 3
---

## Summary (EN)

Jia, Guo, Sun, Geerdes, Poletti, Dong, Smith and Rangan (arXiv, submitted 4 Nov 2026) study serving several terminals in the same cell through concurrent beams from different LEO satellites, where interference between overlapping beams limits spatial reuse. The paper proposes beam-leakage-aware satellite scheduling for Ku-band downlinks: with matched transmit and receive beamforming it formulates a fixed-cardinality sum-rate maximization that accounts for satellite-dependent received powers and pairwise receive-array leakage, and solves it with a branch-and-bound algorithm (BL-BnB) using an admissible upper bound and greedy-plus-swap initialization, giving globally optimal schedules for the reference-point model.

Evaluation uses a 24-hour ephemeris-derived Starlink visibility trace (720 snapshots at 2-minute spacing, Gen-1/Gen-2 satellites, 25 degree elevation mask, 11.7 GHz, 250 MHz bandwidth) with a 30x30 transmit array calibrated to public SpaceX filings and ITU-R P.618 losses. Total capacity grows with beam count but sublinearly. BL-BnB improves mean per-beam capacity over nearest-satellite selection by 27.2% with eight beams and 9.8% with 49 beams, mainly helping weaker links. Against vectorized exhaustive search for choosing 8 of 28 candidates, mean solver runtime falls from 529.48 ms to 1.98 ms (initialization and search only), though worst-case complexity remains exponential. The authors note the rates are a snapshot-level benchmark and that handover and other unmodeled overhead would reduce net throughput.

## Summary (ZH)

Jia、Guo、Sun、Geerdes、Poletti、Dong、Smith 与 Rangan（arXiv，2026 年 11 月 4 日提交）研究通过来自不同 LEO 卫星的并发波束在同一小区内服务多个终端，其中重叠波束间的干扰限制了空间复用。论文针对 Ku 频段下行提出感知波束泄漏的卫星调度：在发射与接收匹配波束赋形下，建立考虑各卫星接收功率与成对接收阵列泄漏的定基数和速率最大化问题，并用分支定界算法（BL-BnB）求解，该算法采用可容许上界与贪心加交换初始化，对参考点模型给出全局最优调度。

评估使用由星历导出的 24 小时 Starlink 可见性轨迹（720 个快照、间隔 2 分钟、Gen-1/Gen-2 卫星、25 度仰角门限、11.7 GHz、250 MHz 带宽），30x30 发射阵列依据公开的 SpaceX 申报文件校准，并采用 ITU-R P.618 损耗。总容量随波束数增加但低于线性增长。与最近卫星选择相比，BL-BnB 在 8 个波束时将每波束平均容量提高 27.2%，49 个波束时提高 9.8%，主要改善较弱链路。在 28 个候选中选 8 个时，相对向量化穷举搜索，平均求解时间（仅计初始化与搜索）由 529.48 ms 降至 1.98 ms，但最坏情况复杂度仍为指数级。作者指出这些速率是快照级基准，切换及其他未建模开销会降低实际吞吐。

## Key technical points (EN)

- Problem: concurrent beams from several LEO satellites to terminals in one cell; satellite choice by link strength or angular separation alone can be suboptimal.
- Formulation: fixed-cardinality sum-rate maximization with satellite-dependent received power and pairwise receive-array leakage.
- Algorithm: BL-BnB, branch-and-bound with admissible upper bound and greedy-plus-swap initialization; globally optimal for the reference-point model.
- Setup: 24 h Starlink-visibility trace, 11.7 GHz, 250 MHz, 30x30 transmit array calibrated to public SpaceX filings, ITU-R P.618 losses.
- Results: +27.2% mean per-beam capacity at 8 beams, +9.8% at 49 beams vs nearest-satellite; against vectorized exhaustive search for 8 of 28, mean solver runtime (initialization and search only) falls from 529.48 ms to 1.98 ms.

## Key technical points (ZH)

- 问题：多颗 LEO 卫星向同一小区内终端发射并发波束；仅按链路强度或角度间隔选星可能次优。
- 建模：考虑各卫星接收功率与成对接收阵列泄漏的定基数和速率最大化。
- 算法：BL-BnB，带可容许上界与贪心加交换初始化的分支定界；对参考点模型全局最优。
- 设置：24 小时 Starlink 可见性轨迹、11.7 GHz、250 MHz、依据公开 SpaceX 申报文件校准的 30x30 发射阵列、ITU-R P.618 损耗。
- 结果：相对最近卫星选择，8 波束时每波束平均容量 +27.2%，49 波束时 +9.8%；在 28 个候选中选 8 个时，相对向量化穷举搜索，平均求解时间（仅计初始化与搜索）由 529.48 ms 降至 1.98 ms。

## Why it matters / what's new (EN)

Existing KB scheduling entries cover multi-shell load balancing, beam hopping and RSMA orchestration; this one adds receiver-side array leakage as an explicit term in selecting which satellites serve a cell concurrently, benchmarked on a Starlink visibility trace. Results are snapshot-level and exclude handover overhead.

## Why it matters / what's new (ZH)

KB 现有调度条目涉及多层壳负载均衡、波束跳变与 RSMA 协调；本条目将接收端阵列泄漏作为选择哪些卫星并发服务同一小区的显式项，并在 Starlink 可见性轨迹上做基准评估。结果为快照级，不含切换开销。

## Images

