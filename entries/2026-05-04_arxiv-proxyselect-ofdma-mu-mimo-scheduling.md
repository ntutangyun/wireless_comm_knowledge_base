---
id: 2026-05-04_arxiv-proxyselect-ofdma-mu-mimo-scheduling
date_published: 2025-10-17
date_found: 2026-05-04
type: academic-paper
title_en: "ProxySelect — Frequency Selectivity-Aware Joint OFDMA + MU-MIMO Scheduling for 802.11ax (Globecom 2025)"
title_zh: "ProxySelect —— 频选感知的 802.11ax OFDMA + MU-MIMO 联合调度（Globecom 2025）"
url: "https://arxiv.org/abs/2510.15452"
source_quality: full
topics: [802.11ax, MAC-layer, scheduling]
topic_primary: mapc-cosr
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

Zhang, Palaiologos, Bluemm, and Caire (arXiv 2510.15452, posted 17 October 2025; accepted at IEEE Globecom 2025, Taipei) tackle the **joint OFDMA + MU-MIMO user-selection problem in 802.11ax**, where the AP must simultaneously decide (a) which subset of STAs to schedule, (b) how to split them across OFDMA resource units, and (c) which subsets within each RU can be co-served by MU-MIMO. The fully-joint problem is combinatorial and grows quickly with the number of associated STAs; existing solvers either approximate by decoupling the OFDMA and MU-MIMO decisions or fall back to greedy heuristics that lose performance under frequency-selective channels.

The contribution is a **proxy-rate function** that approximates the achievable rate of zero-forcing beamforming over a candidate group **without** doing the full matrix inversion — using only individual channel strengths and pairwise correlations. With that proxy, the joint problem becomes an integer linear program over manageable candidate groups, which is then made tractable by a sampling-based candidate-group generator that bounds the ILP size.

Validation uses realistic ray-tracing channel models and shows ProxySelect tracks near-optimal joint scheduling at substantially lower compute than the baselines. The headline lesson is methodological: **frequency selectivity is the hard part of joint OFDMA/MU-MIMO scheduling, and you can capture most of it with a cheap correlation-based proxy** instead of doing per-RU beamformer construction in the inner loop.

## Summary (ZH)

Zhang、Palaiologos、Bluemm、Caire（arXiv 2510.15452，2025 年 10 月 17 日提交；已被 IEEE Globecom 2025 台北接收）面对 **802.11ax 中 OFDMA + MU-MIMO 的用户选择联合问题**：AP 需同时决定 (a) 调度哪些 STA、(b) 将它们如何切分到各 OFDMA 资源单元 (RU)、(c) 在每个 RU 内哪些子集可由 MU-MIMO 共服。完全联合问题是组合的，且随 STA 数量快速增长；既有解法要么解耦 OFDMA 与 MU-MIMO 决策，要么退回贪心启发式 —— 在频选信道下都掉性能。

贡献是一个**代理速率函数**：仅用个体信道强度和成对相关，便能近似一组候选用户的零陷波束形成（ZF-BF）可达速率，而**不需要**做完整矩阵求逆。基于该代理，联合问题变为一个 ILP，并由基于采样的候选组生成器把 ILP 规模控制在可解范围内。

验证基于真实光线追踪信道模型，证明 ProxySelect 在远低于基线计算成本下达到接近最优的联合调度性能。关键方法论结论：**频选是联合 OFDMA / MU-MIMO 调度的难点，但可用一个便宜的基于相关的代理捕获其大部分效应** —— 不必在内层循环里构造每个 RU 的波束形成器。

## Key technical points (EN)

- Joint problem: who to schedule × OFDMA RU split × MU-MIMO co-serving group.
- Proxy rate: approximates ZF-BF rate from |h| and pairwise correlations only.
- ILP formulation made tractable by sampled candidate-group generation.
- Ray-tracing channel validation, near-optimal joint performance at low complexity.
- Stays inside the standard 802.11ax scheduler interface (no PHY/MAC change).

## Key technical points (ZH)

- 联合问题：调度集合 × OFDMA RU 切分 × MU-MIMO 共服组。
- 代理速率：仅由 |h| 与成对相关近似 ZF-BF 可达速率。
- ILP 形式 + 采样候选组生成 → 规模可控。
- 光线追踪信道验证：以低复杂度逼近最优联合调度性能。
- 完全运行在标准 802.11ax 调度接口内，无需 PHY / MAC 改动。

## Why it matters / what's new (EN)

This sits in the same MAC-scheduling neighbourhood as `arxiv-ml-co-sr-scheduling`, `arxiv-mab-llm-mlo-channel-allocation`, and `arxiv-blade-adaptive-contention` — all are AP-side scheduling improvements that don't change the standard. ProxySelect's distinguishing feature is methodological: it shows that **the inner-loop bottleneck of joint OFDMA/MU-MIMO is the per-group beamformer rate computation**, and that the bottleneck has a cheap analytical proxy. That makes joint scheduling viable on real APs with bounded compute budgets — most enterprise APs simply can't run the literal optimisation. The result also says something about the 802.11bn / Wi-Fi 8 era: as RU counts grow and 4096-QAM puts more pressure on accurate rate prediction, having a well-behaved low-complexity proxy will matter even more.

## Why it matters / what's new (ZH)

本文与 `arxiv-ml-co-sr-scheduling`、`arxiv-mab-llm-mlo-channel-allocation`、`arxiv-blade-adaptive-contention` 同属一个 MAC 调度的邻域 —— 都是 AP 侧不改变标准的调度优化。ProxySelect 的独特贡献偏方法论：证明**联合 OFDMA / MU-MIMO 内层循环的瓶颈是逐组波束形成器速率计算**，且该瓶颈有一个便宜的解析代理可用。这使得真实 AP（计算预算受限）也能跑联合调度 —— 多数企业级 AP 根本跑不了字面意义上的优化。该结论对 802.11bn / Wi-Fi 8 时代更有意义：随着 RU 数增加、4096-QAM 对速率预测精度施压，行为良好的低复杂度代理只会更重要。
