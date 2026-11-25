---
id: 2026-11-25_arxiv-rl-multiple-column-selection-branch-and-price-leo-handover
date_published: 2026-11-22
date_found: 2026-11-25
type: academic-paper
technology: satellite
title_en: "Handover Cost Optimization in LEO Satellite Networks using an RL-based Multiple-Column Selection Strategy via Branch-and-Price"
title_zh: "基于强化学习多列选择策略与分支定价的 LEO 卫星网络切换代价优化"
url: "https://arxiv.org/abs/2611.29129"
source_quality: abstract_only
topics: [LEO, handover, branch-and-price, column-generation, reinforcement-learning, Starlink-Gen1]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Mandar R. Nalavade, Gaurav S. Kasbekar and Koushik Kar formulate handover in LEO satellite networks as a combinatorial optimisation problem: each ground user is assigned to exactly one visible, capacity-limited satellite so as to minimise handover cost. They propose a reinforcement-learning approach (MCS-B&P) that speeds up branch-and-price column generation while keeping exact dynamic-programming pricing, two lightweight heuristics (HAVD for online decisions, CAP for offline planning), and a local-search repair method that adapts an existing solution to changes in demand without full re-optimisation.

According to the abstract, simulations on large constellations including Starlink Gen-1 show that MCS-B&P reaches solution quality comparable to exact branch-and-price with fewer column-generation iterations, the heuristics offer cost-latency trade-offs, and the repair method recovers most of the performance lost to demand changes at a fraction of the cost of re-optimising. This entry is based on the abstract and the first part of the HTML text (through the MCS-B&P section); the results section was not read.

## Summary (ZH)

Mandar R. Nalavade、Gaurav S. Kasbekar 与 Koushik Kar 将 LEO 卫星网络中的切换问题表述为组合优化问题：每个地面用户被分配到恰好一颗可见且容量受限的卫星，以最小化切换代价。他们提出一种强化学习方法（MCS-B&P），在保持精确动态规划定价的同时加速分支定价的列生成；两种轻量启发式（用于在线决策的 HAVD 和用于离线规划的 CAP）；以及一种局部搜索修复方法，无需完全重新优化即可使既有解适应需求变化。

据摘要，在包括 Starlink Gen-1 在内的大型星座上的仿真表明，MCS-B&P 以更少的列生成迭代达到与精确分支定价相当的解质量，启发式方法提供代价-时延折中，而修复方法以远低于重新优化的代价恢复了因需求变化而损失的大部分性能。本条目基于摘要及 HTML 正文前半部分（至 MCS-B&P 一节）；结果部分未读取。

## Key technical points (EN)

- Problem: users M, satellites N, horizon T, per-slot demand, data rates, satellite capacities and handover costs. Theorem 1 proves NP-hardness by reduction from the generalised assignment problem.
- Motivation section: simulations with Starlink TLE data, Skyfield and a link-budget model for Mumbai, Arizona, Sydney and Quebec are reported to show fluctuating visibility, short-lived SNR peaks and connections that mostly last a few tens of seconds.
- Branch-and-price: per-user trajectory reformulation; LP relaxation of the restricted master problem solved by column generation; pricing is a shortest-path problem solved by dynamic programming (O(|V|^2 T) per user); branching on fractional user-satellite-time assignments.
- MCS-B&P: at each column-generation iteration a policy selects k of n_cand candidate columns; state is a bipartite restricted-master graph, reward combines objective improvement, diversity and dual movement; actor-critic with a GIN encoder, GAT candidate decoder and PPO pre-training. A forced-optimal rule always adds each user's exact minimum-reduced-cost column, so exactness is preserved. Table I lists n_cand = 20, k = 10, alpha = 300, beta = 0.02, 30 pre-training episodes, gamma = 0.9.
- HAVD is a capacity-gated online heuristic with weighted scoring; CAP is an offline policy using service duration and minimum congestion slack per candidate satellite; the repair method uses single-flip moves and per-user trajectory re-optimisation.

## Key technical points (ZH)

- 问题：用户集 M、卫星集 N、时间范围 T、每时隙需求、数据速率、卫星容量与切换代价。定理 1 通过对广义指派问题的归约证明了 NP 难。
- 动机部分：据报告，利用 Starlink TLE 数据、Skyfield 与链路预算模型对孟买、亚利桑那、悉尼和魁北克的仿真显示可见性波动、信噪比峰值短暂，且多数连接仅持续数十秒。
- 分支定价：按用户轨迹重新表述；受限主问题的线性松弛通过列生成求解；定价为最短路问题，由动态规划求解（每用户 O(|V|^2 T)）；对分数的用户-卫星-时间分配进行分支。
- MCS-B&P：在每次列生成迭代中，策略从 n_cand 个候选列中选择 k 个；状态为二部受限主问题图，奖励结合目标改善、多样性与对偶变量移动；采用 GIN 编码器、GAT 候选解码器与 PPO 预训练的 actor-critic。强制最优规则始终加入每个用户的精确最小检验数列，因此保持精确性。表 I 列出 n_cand = 20、k = 10、alpha = 300、beta = 0.02、30 个预训练回合、gamma = 0.9。
- HAVD 为带容量门限、加权打分的在线启发式；CAP 为利用各候选卫星服务时长与最小拥塞余量的离线策略；修复方法采用单点翻转移动与逐用户轨迹重优化。

## Why it matters / what's new (EN)

In the related-work section the authors state that, to the best of their knowledge, an RL-based branch-and-price method tailored to satellite handover has not been investigated. The paper lists three principal contributions for MCS-B&P (the MDP formulation of column generation, the GIN/GAT actor-critic architecture, and integration into a full B&P solver), a separate set for HAVD and CAP (the two policies and their comparison on a Starlink Gen-1 constellation), and introduces the local-search repair method for demand perturbations.

## Why it matters / what's new (ZH)

在相关工作一节中，作者称据其所知，尚无针对卫星切换的基于强化学习的分支定价研究。论文为 MCS-B&P 列出三项主要贡献（列生成的 MDP 表述、GIN/GAT actor-critic 架构、集成到完整 B&P 求解器），另为 HAVD 与 CAP 列出贡献（两种策略及其在 Starlink Gen-1 星座上的比较），并提出面向需求扰动的局部搜索修复方法。

## Images

None.
