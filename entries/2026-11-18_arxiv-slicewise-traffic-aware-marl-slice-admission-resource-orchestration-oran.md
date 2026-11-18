---
id: 2026-11-18_arxiv-slicewise-traffic-aware-marl-slice-admission-resource-orchestration-oran
date_published: 2026-11-14
date_found: 2026-11-18
type: academic-paper
technology: cellular
title_en: "SliceWise: Traffic-Aware Multi-Agent RL with Temporal Encoding for Joint Slice Admission and Resource Orchestration in O-RAN"
title_zh: "SliceWise：面向 O-RAN 切片准入与资源编排的流量感知多智能体强化学习"
url: "https://arxiv.org/abs/2611.19357"
source_quality: full
topics: [O-RAN, network-slicing, URLLC, eMBB, MARL, LSTM, D3QN, admission-control, PRB-allocation]
topic_primary: network-slicing
topics_secondary: [open-ran, cellular-ai]
novelty_score: 2
---

## Summary (EN)

Wu, Wang, Farooq (University of Michigan-Dearborn), Ghazzai and Setti (KAUST) propose SliceWise, a letter on joint admission control, user-slice association and PRB orchestration for URLLC and eMBB slices in O-RAN. The problem is a cooperative multi-agent MDP with an admission agent, an LSTM-based slice-association classifier trained offline and frozen, and one resource-orchestrator agent per slice, with the admission and orchestrator agents trained as dueling double deep Q-networks (D3QN).

## Summary (ZH)

Wu、Wang、Farooq（密歇根大学迪尔伯恩分校）与 Ghazzai、Setti（KAUST）提出 SliceWise，这是一篇关于 O-RAN 中 URLLC 与 eMBB 切片联合准入控制、用户-切片关联和 PRB 编排的快报。问题被建模为协作式多智能体 MDP：包含一个准入智能体、一个离线训练并冻结的基于 LSTM 的切片关联分类器，以及每个切片一个资源编排智能体，准入与编排智能体采用对决双深度 Q 网络（D3QN）训练。

## Key technical points (EN)

- System model: UEs served by an O-RU in reconfiguration windows, with admission and PRB partitioning at each window start; delay depends on packet size, packet count and queue carryover; SINR includes inter-cell interference; reliability requires each UE's latency bound to hold with probability at least lambda.
- Agents: the admission agent observes available bandwidth, delay-violation trends, queue statistics and SINR averages and decides how many candidate UEs to admit; orchestrators observe delay bounds, SINR, load and current allocation and choose a PRB adjustment factor for their slice.
- Setup: customized Python version of the open-source AI-RAN Simulator; serving O-RU plus two interfering O-RUs at 2.5 and 3 km, 2.5 GHz carrier; 15 UEs in 4 slices; 100-slot episodes with Markov-chain traffic from benign to highly volatile; 10,000 training episodes and 150 randomized test episodes with unseen multi-cell conditions.
- Baselines: Rand, Empirical, MARO and MAROAC.
- Results are described qualitatively in the text (no exact percentages): highest reliability and lowest delay violations, compact delay distributions, and slowest degradation as the latency threshold tightens. The Empirical baseline slightly beats it on packet drops.
- Caveats visible in the text: simulation only; frozen association classifier; small scale (15 UEs, 4 slices) with no scalability study despite the "scalable" claim; the admission action is described both as a count and as a subset selection.

## Key technical points (ZH)

- 系统模型：UE 由一个 O-RU 服务，按重配置窗口运行，在每个窗口开始时进行准入与 PRB 划分；时延取决于包大小、包数量及队列遗留；SINR 含小区间干扰；可靠性要求每个 UE 的时延上限以不低于 lambda 的概率成立。
- 智能体：准入智能体观察可用带宽、时延违约趋势、队列统计与平均 SINR，决定准入多少候选 UE；编排智能体观察时延上限、SINR、负载与当前分配，为其切片选择 PRB 调整因子。
- 设置：定制的 Python 版开源 AI-RAN Simulator；一个服务 O-RU 加两个位于 2.5 km 和 3 km 的干扰 O-RU，载频 2.5 GHz；4 个切片共 15 个 UE；100 时隙回合，马尔可夫链流量从平稳到高度波动；10,000 个训练回合，150 个含未见多小区条件的随机测试回合。
- 基线：Rand、Empirical、MARO 与 MAROAC。
- 文中仅定性描述结果（无具体百分比）：可靠性最高、时延违约最少、时延分布紧凑，时延门限收紧时性能下降最慢。Empirical 基线在丢包上略优于它。
- 文中可见的注意事项：仅为仿真；关联分类器被冻结；规模较小（15 个 UE、4 个切片），虽称“可扩展”却无可扩展性研究；准入动作既被描述为数量也被描述为子集选择。

## Why it matters / what's new (EN)

This is an incremental MARL slicing study: the temporal (LSTM) encoding of traffic and the joint admission-plus-PRB formulation are the distinguishing elements. Because the text reports no exact numbers and the evaluation is small-scale simulation, it should be read as a design proposal rather than a quantified performance result.

## Why it matters / what's new (ZH)

这是一项增量式的 MARL 切片研究，其区别点在于对流量的时序（LSTM）编码以及联合准入与 PRB 的建模。由于文中未给出具体数值且评估为小规模仿真，应将其视为设计方案而非量化的性能结果。

## Images

None.
