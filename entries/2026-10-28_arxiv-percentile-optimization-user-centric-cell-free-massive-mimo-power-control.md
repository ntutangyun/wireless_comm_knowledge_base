---
id: 2026-10-28_arxiv-percentile-optimization-user-centric-cell-free-massive-mimo-power-control
date_published: 2026-10-25
date_found: 2026-10-28
type: academic-paper
technology: cellular
title_en: "Unifying Performance and Equity via Percentile Optimization and Cell-Free Massive MIMO"
title_zh: "通过百分位优化与无蜂窝大规模 MIMO 统一性能与公平"
url: "https://arxiv.org/abs/2610.33982"
source_quality: full
topics: [cell-free-massive-MIMO, percentile-optimization, power-control, max-min-fairness, user-centric, coherent-joint-transmission, beyond-5G]
topic_primary: cellular-massive-mimo
topics_secondary: [6g-vision]
novelty_score: 3
---

## Summary (EN)
Ahmad Khan (Ericsson Ottawa R&D), Hussein A. Ammar (Royal Military College of Canada) and Raviraj Adve (University of Toronto) formulate and solve percentile programs for user-centric cell-free massive MIMO (UC-mMIMO). They maximise the sum-least-qth-percentile (SLqP) rate by downlink power control, a utility that targets the UEs in the lowest q percentile of the rate distribution and contains max-min-rate (q approaching 0) and sum-rate (q = 100) maximisation as special cases.

The problem is non-convex, non-smooth and NP-hard, and the cyclic maximisation used in earlier percentile-optimisation work fails because coherent joint transmission introduces cross terms in the powers that destroy block-concavity. A change of variables to transmit amplitudes restores block-concavity, giving an algorithm with closed-form auxiliary updates and a concave power update, with a self-contained proof of non-decreasing convergence to a directional stationary point. Against a weighted-MMSE benchmark, percentile optimisation raises the average rate of the lowest-10th-percentile UEs by 56-72% and Jain's fairness index from below 0.92 to above 0.99. Compared with co-located massive MIMO and small cells under the same utility, UC-mMIMO gives the highest lower-percentile rates at every AP density tested, by up to 62% and 2.7 times respectively, and the advantage widens with densification.

## Summary (ZH)
Ahmad Khan（爱立信渥太华研发中心）、Hussein A. Ammar（加拿大皇家军事学院）与 Raviraj Adve（多伦多大学）为以用户为中心的无蜂窝大规模 MIMO（UC-mMIMO）建立并求解百分位规划问题。他们通过下行功率控制最大化“最低 q 百分位速率之和”（SLqP），该效用针对速率分布最低 q 百分位的 UE，并把最大最小速率（q 趋近 0）和和速率（q = 100）最大化作为特例。

该问题非凸、非光滑且为 NP 难；此前百分位优化工作使用的循环最大化在此失效，因为相干联合传输使功率之间出现交叉项，破坏了分块凹性。改用发射幅度作变量变换后分块凹性得以恢复，从而得到辅助变量闭式更新、功率为凹规划更新的算法，并给出非递减收敛到方向驻点的自洽证明。相对于加权 MMSE 基准，百分位优化使最低 10 百分位 UE 的平均速率提高 56-72%，Jain 公平指数从低于 0.92 提高到高于 0.99。在相同效用下，与共站大规模 MIMO 和小小区相比，UC-mMIMO 在所测的每个 AP 密度下都给出最高的低百分位速率，最多分别高出 62% 和 2.7 倍，且优势随密度增大而扩大。

## Key technical points (EN)
- Utility: SLqP sums the rates of the UEs in the lowest q percentile; q approaching 0 gives max-min rate, q = 100 gives sum rate, so one parameter interpolates between cell-edge priority and cell-centre priority.
- Obstacle: coherent joint transmission puts cross products of powers into the SINR, destroying the block-concavity that the earlier cyclic-maximisation percentile method needs.
- Fix: change of variables to transmit amplitudes restores block-concavity; auxiliary variables update in closed form, powers via a concave program; non-decreasing objective and convergence to a directional stationary point are proved. In single-node architectures the method reduces to the earlier algorithm.
- Gain over WMMSE benchmark: average rate of the lowest-10th-percentile UEs up 56-72%; Jain's fairness from below 0.92 to above 0.99.
- Architecture comparison under the same SLqP utility: UC-mMIMO versus co-located massive MIMO and small cells; lower-percentile rate gains up to 62% over massive MIMO and 2.7x over small cells, widening as AP density grows.
- Outage illustration: for a 40 Mbps requirement only a handful of percentile UEs in UC-mMIMO and massive MIMO are in outage versus about half in small cells; at 70 Mbps about one in ten in UC-mMIMO versus all in the other two.
- Percentile optimisation leaves isolated weak UEs but no spatially contiguous coverage holes.

## Key technical points (ZH)
- 效用：SLqP 对最低 q 百分位 UE 的速率求和；q 趋近 0 为最大最小速率，q = 100 为和速率，用一个参数在小区边缘优先与小区中心优先之间插值。
- 障碍：相干联合传输使 SINR 中出现功率交叉项，破坏了此前循环最大化百分位方法所需的分块凹性。
- 解法：对发射幅度作变量变换以恢复分块凹性；辅助变量闭式更新，功率经凹规划更新；证明目标函数非递减并收敛到方向驻点。在单节点架构下该方法退化为此前的算法。
- 相对 WMMSE 基准的增益：最低 10 百分位 UE 平均速率提高 56-72%；Jain 公平指数从低于 0.92 升至高于 0.99。
- 相同 SLqP 效用下的架构对比：UC-mMIMO 对比共站大规模 MIMO 与小小区；低百分位速率最多比大规模 MIMO 高 62%、比小小区高 2.7 倍，且随 AP 密度增大而扩大。
- 中断示例：要求 40 Mbps 时，UC-mMIMO 与大规模 MIMO 中仅少数百分位 UE 中断，而小小区约一半；要求 70 Mbps 时，UC-mMIMO 约十分之一中断，另两者全部中断。
- 百分位优化会留下个别弱 UE，但不会出现空间上连续的覆盖空洞。

## Why it matters / what's new (EN)
The paper links two fairness-oriented ideas, percentile-targeted resource allocation and an architecture that removes cell edges, and shows the benefit survives when there are no cell edges to protect. Results are simulation-based under the authors' system model, so they indicate relative rather than deployable gains.

## Why it matters / what's new (ZH)
论文把两个面向公平的思路联系起来：以百分位为目标的资源分配，以及消除小区边缘的架构，并表明在没有小区边缘需要保护时其收益依然存在。结果基于作者系统模型下的仿真，反映的是相对增益而非可部署的增益。

## Images

None.
