---
id: 2026-10-28_arxiv-martingale-rb-partitioning-bounds-urllc-embb-slicing
date_published: 2026-10-27
date_found: 2026-10-28
type: academic-paper
technology: cellular
title_en: "Martingale-Based Resource Partitioning Bounds for URLLC and eMBB Network Slicing in 5G"
title_zh: "基于鞅的 5G URLLC 与 eMBB 网络切片资源划分界"
url: "https://arxiv.org/abs/2610.36602"
source_quality: full
topics: [network-slicing, URLLC, eMBB, martingale, Doob-inequality, effective-capacity, resource-block-allocation, statistical-QoS]
topic_primary: network-slicing
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)
Hanbing Li and Yantong Wang (Shandong Normal University) propose a martingale-based resource-block (RB) allocation framework for URLLC and eMBB slices sharing one 5G carrier. They build exponential martingales from the moment generating functions (MGFs) of the arrival and service processes and apply Doob's maximal inequality to obtain explicit non-asymptotic upper bounds on the URLLC delay-violation probability and the eMBB backlog-violation probability.

From the resulting stability conditions they derive a low-complexity bisection algorithm for the martingale parameters, followed by a deterministic search for the minimum RBs each slice needs. At a violation target of 10^-6 per slice the framework needs 44 RBs in total, within a 50-RB carrier, while a conventional effective-capacity baseline needs 64 RBs and becomes infeasible below a 10^-5 target. That is a 31.2% reduction in RB consumption. The analytical bounds upper-bound Monte Carlo results, which themselves cannot resolve 10^-6 events with finite samples.

## Summary (ZH)
Hanbing Li 与 Yantong Wang（山东师范大学）提出一种基于鞅的资源块（RB）分配框架，用于共享同一 5G 载波的 URLLC 与 eMBB 切片。他们利用到达过程和服务过程的矩母函数（MGF）构造指数鞅，并应用 Doob 极大不等式，得到 URLLC 时延违约概率与 eMBB 积压违约概率的显式非渐近上界。

由所得稳定性条件，作者推导出求解鞅参数的低复杂度二分算法，再用确定性搜索求出各切片所需的最少 RB 数。在每个切片 10^-6 的违约目标下，该框架共需 44 个 RB，处于 50 RB 载波容量之内；而传统有效容量基线需要 64 个 RB，并在目标低于 10^-5 时不可行。RB 消耗因此降低 31.2%。解析界对蒙特卡洛结果形成上界，而蒙特卡洛在有限样本下无法分辨 10^-6 量级的事件。

## Key technical points (EN)
- System model: N RBs of bandwidth delta-f; N_u RBs to the URLLC slice and N_e to eMBB with N_u + N_e <= N; slow-slot scheduling with duration T_s and block fading (channel constant within a slot, independent across slots).
- Traffic: URLLC packets arrive through a two-state ON-OFF process (rate lambda_u packets/s in ON) and are converted to bits; eMBB traffic is a data volume in bits.
- Method: exponential (super)martingales from arrival/service MGFs plus Doob's maximal inequality give explicit bounds on the delay-violation probability (URLLC) and backlog-violation probability (eMBB), avoiding the union bounds that make some MGF-based stochastic-network-calculus bounds loose.
- Algorithm: bisection to find the optimal martingale parameter subject to the stability condition, then a linear/deterministic search over RB counts for the minimum feasible allocation.
- Result at 10^-6 for each slice: 44 RBs total (versus 64 for the effective-capacity baseline), a 31.2% reduction; for the eMBB target the proposed method crosses the threshold at 24 eMBB RBs while the baseline stays above the target line at that allocation.
- The baseline exceeds the 50-RB capacity once the target is tighter than 10^-5, making the system infeasible there.
- Evaluation is numerical (analytical bounds against Monte Carlo); no testbed or standard-compliant system-level simulator is reported.

## Key technical points (ZH)
- 系统模型：N 个带宽为 delta-f 的 RB；分给 URLLC 切片 N_u 个、eMBB 切片 N_e 个，N_u + N_e <= N；慢时隙调度，时隙长度 T_s，块衰落（时隙内信道恒定，时隙间独立）。
- 业务：URLLC 数据包按两状态 ON-OFF 过程到达（ON 状态速率 lambda_u 包/秒）并折算为比特；eMBB 业务为比特数据量。
- 方法：由到达/服务 MGF 构造指数（上）鞅，再用 Doob 极大不等式，得到时延违约概率（URLLC）与积压违约概率（eMBB）的显式界，避免部分基于 MGF 的随机网络演算界因使用并集界而偏松。
- 算法：在稳定性条件下用二分法求最优鞅参数，再对 RB 数做线性/确定性搜索，得到最小可行分配。
- 每个切片 10^-6 目标下的结果：共 44 个 RB（有效容量基线为 64 个），降低 31.2%；对 eMBB 目标，所提方法在 24 个 eMBB RB 时越过门限，基线在该分配下仍高于目标线。
- 目标严于 10^-5 时基线超过 50 RB 容量，系统不可行。
- 评估为数值方式（解析界对比蒙特卡洛），未报告测试床或符合标准的系统级仿真器。

## Why it matters / what's new (EN)
The paper addresses a practical question in slice dimensioning: how many radio resource blocks are needed to hold a 10^-6 violation probability for both a low-latency and a throughput slice, when simulation cannot observe such rare events and effective-capacity analysis over-provisions. The finite-time, non-asymptotic bounds make the sizing explicit. The figures come from a stylised single-carrier model with ON-OFF arrivals and block fading, so the 31.2% saving is relative to the chosen effective-capacity baseline and scenario, not a deployment measurement.

## Why it matters / what's new (ZH)
论文回答了切片资源规划中的一个实际问题：当仿真无法观测如此罕见的事件、而有效容量分析又会过度配置时，要让低时延切片和高吞吐切片都满足 10^-6 的违约概率，究竟需要多少无线资源块。有限时间的非渐近界使资源规模可被显式计算。数字来自带 ON-OFF 到达和块衰落的简化单载波模型，因此 31.2% 的节省是相对于所选有效容量基线和场景而言，并非部署实测。

## Images

None.
