---
id: 2026-09-21_arxiv-multishell-leo-load-balancing-sic
date_published: 2026-09-10
date_found: 2026-09-21
technology: satellite
type: academic-paper
title_en: "Load Balancing in Multi-Shell LEO Satellite Networks with Successive Interference Cancellation"
title_zh: "多壳层 LEO 卫星网络中结合串行干扰消除的负载均衡"
url: "https://arxiv.org/abs/2609.11033"
source_quality: full
topics: [multi-shell-LEO, stochastic-geometry, load-balancing, SIC, full-frequency-reuse]
topic_primary: leo-constellations
novelty_score: 3
---

## Summary (EN)

Kim, Park (Yonsei University), and Andrews (University of Texas at Austin, 6G@UT Research Center) submitted this paper on 2026-09-10. It addresses a problem specific to dense multi-shell LEO mega-constellations such as Starlink: satellites deployed across multiple low-altitude orbital shells can illuminate the same ground footprint on the same time-frequency resource, and altitude-dependent propagation means received-power-based association preferentially selects lower shells, concentrating traffic there. Associating users with higher shells instead relieves that concentration but exposes those users to strong interference from the dominant lower-shell serving signals under full frequency reuse.

The paper's contribution is a mathematical framework combining two complementary mechanisms: shell-dependent association biasing (which redistributes traffic toward higher shells to relieve lower-shell congestion) and receiver-side successive interference cancellation (SIC), which cancels the dominant lower-shell serving signal to mitigate the interference penalty that upper-shell association creates. Satellites on each shell are modeled as an independent spherical Poisson point process (SPPP); the paper derives shell-wise association probabilities, conditioned serving-distance distributions, and rate coverage probability under shell-dependent traffic loads, and validates the derived shell-wise association probabilities (Theorem 1) against Monte Carlo simulation (maximum squared error of 3.95x10^-5 across three shell indices, two satellite-count configurations, and both biasing conditions).

Numerically, for a 3-shell system at altitudes [360, 480, 550] km with full frequency reuse, 12 GHz carrier, and 250 MHz bandwidth, the paper finds that the grid-optimal bias vector shifts toward stronger upper-shell biasing as satellite density increases: the optimal bias is [0, 1.7, 2.4] dB at an average of 1,000 satellites per shell, rising to [0, 2, 3] dB at 2,000 satellites per shell. Comparing the full biasing+SIC architecture against a biasing-only baseline (MS-TIN, which lacks SIC) isolates the SIC contribution: the SIC-equipped architecture achieves higher rate coverage probability across rate thresholds, though the gap narrows as the rate threshold increases (a higher decoding threshold reduces the decodability of the lower-shell signal SIC would otherwise cancel). Load-balancing's rate-coverage gain is shown to be largest in traffic hotspots (as the number of candidate users grows), while the paper's stated takeaway is that increasing the satellite count within a fixed set of shells does not necessarily improve per-footprint rate coverage, since each shell provides at most one serving link; distributing a fixed satellite budget across more shells instead adds shell-wise serving opportunities and can further improve hotspot rate coverage.

## Summary (ZH)

Kim、Park（延世大学）与 Andrews（德克萨斯大学奥斯汀分校 6G@UT 研究中心）于 2026 年 9 月 10 日提交本文，研究密集多壳层 LEO 巨型星座（如 Starlink）中的一个特定问题：部署在多个低轨壳层的卫星可能在同一时频资源上照射同一地面覆盖区，而与高度相关的传播特性使得基于接收功率的关联规则更倾向于选择低壳层，从而使流量向低壳层集中；将用户关联到更高壳层虽可缓解这种集中，但在全频率复用条件下，这些用户会暴露于低壳层主导服务信号带来的强干扰之下。

本文的贡献是一个结合两种互补机制的数学框架：壳层相关的关联偏置（将流量重新分配至更高壳层以缓解低壳层拥塞）与接收端串行干扰消除（SIC，用于消除高壳层关联用户所受到的主导性低壳层服务信号干扰，从而缓解其带来的性能损失）。各壳层卫星被建模为独立的球面泊松点过程（SPPP）；论文推导了壳层关联概率、条件服务距离分布以及壳层相关流量负载下的速率覆盖概率，并通过蒙特卡洛仿真验证了其中所推导的壳层关联概率（定理 1）（在三个壳层、两种卫星数量配置及两种偏置条件下，最大均方误差为 3.95×10^-5）。

数值结果方面，针对高度为 [360, 480, 550] 公里、全频率复用、载频 12 GHz、带宽 250 MHz 的三壳层系统，论文发现随着卫星密度增加，网格最优偏置向更强的高壳层偏置方向移动：在每壳层平均 1,000 颗卫星时最优偏置为 [0, 1.7, 2.4] dB，在每壳层 2,000 颗卫星时升至 [0, 2, 3] dB。将完整的偏置+SIC 架构与仅偏置基线（MS-TIN，不含 SIC）对比可分离出 SIC 的贡献：配备 SIC 的架构在各速率门限下均获得更高的速率覆盖概率，但随着速率门限提高，差距会缩小（更高的解码门限降低了本可被 SIC 消除的低壳层信号的可解码性）。负载均衡带来的速率覆盖增益在流量热点场景（候选用户数增多）中最为显著；论文的结论是，在固定壳层集合内增加卫星总数并不必然提升单覆盖区的速率覆盖，因为每个壳层至多提供一条服务链路；而将固定的卫星预算分散到更多壳层，则可以增加逐壳层的服务机会，从而进一步提升热点场景下的速率覆盖。

## Key technical points (EN)

- **System model**: satellites on each of 3 shells modeled as independent SPPPs at altitudes [360, 480, 550] km, full frequency reuse, 12 GHz carrier, 250 MHz bandwidth; users associate via a shell-dependent biased received-power rule with receiver-side SIC.
- **Analytical validation**: derived shell-association probabilities (Theorem 1) match Monte Carlo simulation with a maximum squared error of 3.95x10^-5 across three shell indices, two satellite-count configurations and both biasing conditions.
- **Density-dependent optimal bias**: grid-optimal bias vector [0, 1.7, 2.4] dB at 1,000 satellites/shell, shifting to [0, 2, 3] dB at 2,000 satellites/shell — denser constellations need stronger upper-shell biasing to counter shell-1's growing received-power advantage.
- **SIC contribution (Fig. 8, vs. MS-TIN biasing-only baseline)**: SIC-equipped architecture achieves higher rate coverage probability at all tested rate thresholds; the gap to MS-TIN narrows as the rate threshold rises, since a higher decoding threshold makes the lower-shell signal SIC targets harder to decode and cancel.
- **Two stated takeaways**: (1) shell-dependent biasing redistributes traffic upward while preserving some lower-shell preference to exploit shorter propagation distance; (2) increasing the satellite count within a fixed set of shells does not necessarily improve per-footprint rate coverage (each shell caps out at one serving link per user) — a fixed satellite budget spread across more shells instead adds shell-wise serving opportunities, most valuable in traffic hotspots.
- **Funding**: Korean IITP 6G Cloud Research and Education Open Hub grant; Samsung Research Funding & Incubation Center.

## Key technical points (ZH)

- **系统模型**：三个壳层的卫星分别建模为独立的球面泊松点过程，高度为 [360, 480, 550] 公里，全频率复用，载频 12 GHz，带宽 250 MHz；用户通过壳层相关的偏置接收功率规则关联，并在接收端应用 SIC。
- **解析验证**：所推导的壳层关联概率（定理 1）与蒙特卡洛仿真吻合，在三个壳层、两种卫星数量配置及两种偏置条件下最大均方误差为 3.95×10^-5。
- **密度相关的最优偏置**：每壳层 1,000 颗卫星时网格最优偏置为 [0, 1.7, 2.4] dB，每壳层 2,000 颗卫星时升至 [0, 2, 3] dB——星座越密集，需要越强的高壳层偏置来抵消壳层 1 不断增强的接收功率优势。
- **SIC 的贡献（图 8，对比仅偏置的 MS-TIN 基线）**：配备 SIC 的架构在所有测试速率门限下均取得更高的速率覆盖概率；随速率门限升高，与 MS-TIN 的差距缩小，因为更高的解码门限使 SIC 所要消除的低壳层信号更难被解码和消除。
- **两条结论**：（1）壳层相关偏置将流量向上重新分配，同时保留部分低壳层偏好以利用更短的传播距离；（2）在固定壳层集合内增加卫星数量并不必然提升单覆盖区的速率覆盖（每个用户在每个壳层至多获得一条服务链路）——将固定卫星预算分散到更多壳层可增加逐壳层服务机会，在流量热点场景中价值最大。
- **资助来源**：韩国信息通信技术规划评估院（IITP）6G Cloud 研究教育开放中心资助；三星研究资助与孵化中心。

## Why it matters / what's new (EN)

This KB's leo-constellations bin has previously covered multi-orbit orchestration and routing papers; this paper's own framing is narrower and more specific — it isolates and jointly analyzes two distinct load-management levers (association biasing and receiver-side SIC) for the concrete architectural problem of same-footprint, same-frequency multi-shell overlap in dense constellations like Starlink, with a closed-form stochastic-geometry framework validated against simulation rather than a purely simulation-based study.

## Why it matters / what's new (ZH)

知识库现有的 leo-constellations 主题条目此前主要涉及多轨道编排与路由类论文；本文自身的定位更为聚焦具体——针对密集星座（如 Starlink）中同覆盖区、同频率多壳层重叠这一具体架构问题，分离并联合分析了两种不同的负载管理手段（关联偏置与接收端 SIC），并给出了经仿真验证的闭式随机几何分析框架，而非仅依赖纯仿真研究。

## Images

None.
