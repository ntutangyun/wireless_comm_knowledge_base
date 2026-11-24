---
id: 2026-11-24_arxiv-spatial-clustering-resource-allocation-critical-services-massive-mimo
date_published: 2026-11-20
date_found: 2026-11-24
type: academic-paper
technology: cellular
title_en: "A Spatial Clustering and Resource Allocation Approach for Critical Services in Massive MIMO-Enabled Cellular Networks"
title_zh: "面向大规模 MIMO 蜂窝网络中关键业务的空间聚类与资源分配方法"
url: "https://arxiv.org/abs/2611.27832"
source_quality: full
topics: [massive-MIMO, user-clustering, pilot-contamination, critical-services, resource-allocation, NP-hardness, linear-programming, modulation-allocation]
topic_primary: cellular-massive-mimo
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Al Hajj Sleiman, Hussein, Angilella, Assaad (Universite Paris-Saclay, CNRS, CentraleSupelec, Laboratoire des signaux et systemes; the first three authors are listed as formerly affiliated there) and Sari (Nanjing University of Posts and Telecommunications) study QoS guarantees for critical real-time services that share a massive MIMO cell with non-real-time traffic. Users are grouped by the direction of their channel vectors through a downlink probing step, channel estimates and uplink SINR are derived for the groups, and frequency and discrete modulation formats are then allocated to groups. The paper states it is accepted for publication in IEEE Transactions on Communications.

## Summary (ZH)

Al Hajj Sleiman、Hussein、Angilella、Assaad（巴黎-萨克雷大学、法国国家科学研究中心、CentraleSupelec、信号与系统实验室；前三位作者标注为曾任职于此）与 Sari（南京邮电大学）研究在同一大规模 MIMO 小区中，与非实时业务共存的关键实时业务的 QoS 保障。通过下行探测步骤按信道向量方向对用户分组，推导各组的信道估计和上行 SINR，再把频率和离散调制格式分配给各组。论文声明已被 IEEE Transactions on Communications 录用。

## Key technical points (EN)

- Motivation stated in the paper: TDD channel estimation relies on uplink training with a limited coherence interval and low-latency constraints, so pilot reuse and pilot contamination are inevitable; exploiting channel structure by grouping users is proposed as the mitigation.
- Clustering: a downlink probing strategy groups active users whose channels lie in the same direction; in the evaluation a DFT-matrix beam-domain clustering with a threshold parameter is used, with a uniform linear array at the base station and single-antenna users.
- Optimization: a mixed-integer problem assigns frequency resources and discrete modulation schemes to the groups, maximizing sum-rate with fairness weights while meeting the rate requirement and the SINR threshold of the chosen modulation for critical-service users. The authors prove the general problem NP-hard, identify a special case solvable in polynomial time by linear programming, and propose a suboptimal solution by linear relaxation with rounding.
- Simulation: Monte Carlo averages over 5000 realizations (50 cell geometries x 100 channel draws), a correlated Rayleigh one-ring channel model, three modulation formats, and users who start critical-service traffic with a given probability. Single-cell and a 3-BS multi-cell setting are evaluated.
- Findings reported: as the critical-traffic probability grows, total sum-rate falls and non-critical traffic is displaced while the critical sum-rate grows almost linearly; the rounded solution tracks the optimal MILP closely. Grouped scheduling outperforms the no-grouping massive MIMO baseline when the clustering threshold is tuned, and sum-rate is concave in that threshold, collapsing beyond a point because users fail to find a unique dominant group and are dropped. In the multi-cell baseline configuration the peak sum-rate is approximately 340 bps/Hz.
- Scope: latency and reliability of critical services are translated into deterministic minimum-rate and SINR constraints, so the evaluation reports sum-rate and the probability of feasibility rather than packet-level latency; results are simulation-only.

## Key technical points (ZH)

- 论文声明的动机：TDD 信道估计依赖上行训练，而相干间隔有限且受低时延约束，因此导频复用和导频污染不可避免；论文提出通过对用户分组、利用信道结构来缓解。
- 聚类：下行探测策略把信道位于同一方向的活跃用户分为一组；评估中使用带阈值参数的 DFT 矩阵波束域聚类，基站使用均匀线阵，用户为单天线。
- 优化：混合整数问题把频率资源和离散调制方案分配给各组，在满足关键业务用户的速率要求和所选调制的 SINR 门限的同时，以带公平权重的和速率最大化为目标。作者证明一般问题为 NP-hard，指出一个可由线性规划在多项式时间内求解的特例，并通过线性松弛加取整提出次优解。
- 仿真：对 5000 次实现（50 种小区几何 x 100 次信道抽样）做蒙特卡洛平均，采用相关瑞利单环信道模型、三种调制格式，用户以给定概率发起关键业务流量。评估了单小区和 3 个 BS 的多小区场景。
- 报告的发现：随着关键业务流量概率增大，总和速率下降，非关键业务被挤出，而关键业务和速率近似线性增长；取整后的解与最优 MILP 解十分接近。聚类阈值调好后，分组调度优于无分组的大规模 MIMO 基线，和速率随该阈值呈凹形变化，超过某一点后因用户找不到唯一的主导组而被丢弃，导致和速率骤降。在多小区基线配置中，和速率峰值约为 340 bps/Hz。
- 范围：关键业务的时延与可靠性被转化为确定性的最低速率和 SINR 约束，因此评估报告的是和速率与可行概率，而非包级时延；结果仅来自仿真。

## Why it matters / what's new (EN)

The distinguishing element the authors claim is tying physical-layer spatial clustering, with analytical SINR expressions under pilot contamination, directly to a joint frequency and discrete-modulation allocation for critical services. It is a theory-and-simulation result with no testbed or standards-level traffic model, so it adds an analysis point to the massive MIMO coexistence literature rather than a deployment datum.

## Why it matters / what's new (ZH)

作者声称的区别点在于，把物理层空间聚类（含导频污染下的解析 SINR 表达式）直接与面向关键业务的频率和离散调制联合分配联系起来。这是一项理论加仿真的结果，没有测试床或标准层面的流量模型，因此它为大规模 MIMO 共存研究增加的是一个分析数据点，而非部署数据。

## Images

None.
