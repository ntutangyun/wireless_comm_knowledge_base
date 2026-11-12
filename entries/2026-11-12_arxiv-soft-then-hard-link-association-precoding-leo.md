---
id: 2026-11-12_arxiv-soft-then-hard-link-association-precoding-leo
date_published: 2026-11-07
date_found: 2026-11-12
technology: satellite
type: academic-paper
title_en: "Soft-then-Hard: Joint Link Association and Precoding Optimization for LEO Satellite Networks"
title_zh: "先软后硬：LEO 卫星网络的联合链路关联与预编码优化"
url: "https://arxiv.org/abs/2611.10482"
source_quality: full
topics: [LEO, link association, precoding, Sinkhorn, optimal transport, Doppler, multi-satellite MU-MIMO]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Yun, Shin and Park (Yonsei University and Korea University; arXiv, 7 Nov 2026) study dense LEO downlinks where line-of-sight propagation compresses users into a narrow angular region and several visible satellites cause strong mutual interference. They argue that link association and precoding must be optimised jointly, and that block coordinate descent with hard association updates suffers "premature turning-off": a link switched off receives zero precoder power and can never recover.

The proposed fix relaxes the binary association into continuous weights solved by entropic optimal transport (Sinkhorn scaling), anneals the entropy term so the weights concentrate gradually while precoders improve, and applies a single hard matching at the end. The framework is then extended to a space-time channel in which Doppler differences between users add separability.

## Summary (ZH)

Yun、Shin 与 Park（延世大学与高丽大学；arXiv，2026 年 11 月 7 日）研究密集 LEO 下行链路：视距传播使用户挤在狭窄的角度区域内，多颗可见卫星之间产生强干扰。作者认为链路关联与预编码必须联合优化，而采用硬关联更新的块坐标下降会出现"过早关断"：被关闭的链路得到零预编码功率，从而无法再恢复。

所提方案将二元关联松弛为连续权重，通过熵正则最优传输（Sinkhorn 缩放）求解，并对熵项退火，使权重随预编码改善而逐步集中，最后仅执行一次硬匹配。该框架随后被扩展到时空信道，其中用户间的多普勒差异提供额外的可分离性。

## Key technical points (EN)

- Setting: visible satellites at elevation of 40 degrees or more, 16x16 UPA (M = 256) per satellite, K = 100 single-antenna users in a 30 km-radius cell over Seoul; Rician channel (kappa = 15 dB) with a dominant Doppler shift per link.
- Objective: sum spectral efficiency under per-satellite power and serving-count limits; the mixed-integer problem is NP-hard in general (per cited prior work).
- Updates: fractional-programming reformulation gives a closed-form precoder per iteration; the association update is a weighted b-matching.
- Soft-then-hard: Sinkhorn with entropy annealing (geometric decrease, rho = 1.5), then one hard b-matching; the Sinkhorn step costs O(NK) per iteration versus a greedy alternative of O(N^2 K^4 (M+K)).
- Space-time extension: L snapshots 100 microseconds apart; sum rate peaks at L = 2 to 3 because the pre-log factor shrinks as L grows.
- Simulation: Walker-Delta 3360/28/1 at 525 km, 20 GHz carrier, 400 MHz bandwidth; the L = 3 scheme shows 34.9% gain over hard matching at K_n = 2.
- Results are simulation-only.

## Key technical points (ZH)

- 设定：仰角不低于 40 度的可见卫星，每星 16x16 UPA（M = 256），首尔上空半径 30 km 小区内 K = 100 个单天线用户；莱斯信道（kappa = 15 dB），每条链路有一个主导多普勒频移。
- 目标：在每星功率与服务数量限制下最大化和速率；该混合整数问题一般为 NP 难（引自已有工作）。
- 更新：分式规划重构使每次迭代的预编码有闭式解；关联更新为加权 b-匹配。
- 先软后硬：带熵退火（几何递减，rho = 1.5）的 Sinkhorn，随后一次硬 b-匹配；Sinkhorn 每次迭代复杂度 O(NK)，贪心替代方案为 O(N^2 K^4 (M+K))。
- 时空扩展：L 个间隔 100 微秒的快拍；和速率在 L = 2 至 3 时达到峰值，因为随 L 增大前置对数因子缩小。
- 仿真：525 km 高度的 Walker-Delta 3360/28/1，20 GHz 载波、400 MHz 带宽；L = 3 方案在 K_n = 2 时比硬匹配提升 34.9%。
- 结果仅基于仿真。

## Why it matters / what's new (EN)

The paper isolates a failure mode of hard association updates in joint association/precoding ("premature turning-off") and addresses it with an annealed soft assignment. Simulation-based.

## Why it matters / what's new (ZH)

本文指出联合关联/预编码中硬关联更新的一种失效模式（"过早关断"），并以退火软分配加以解决。结果基于仿真。

## Images

None.
