---
id: 2026-07-24_arxiv-tn-ntn-qlearning-spectrum
date_published: 2026-07-20
date_found: 2026-07-24
type: academic-paper
technology: cellular
title_en: "Self-Directed Spectrum Allocation Framework for Integrated TN-NTN 6G Networks"
title_zh: "面向天地一体化 TN-NTN 6G 网络的自主频谱分配框架（Q-learning）"
url: "https://arxiv.org/abs/2607.17561"
source_quality: abstract_only
topics: [6G, NTN, spectrum-sharing, Q-learning]
topic_primary: ntn
topics_secondary: [cellular-ai]
novelty_score: 1
---

## Summary (EN)

A compact conference paper (arxiv 2607.17561, submitted 2026-07-20, accepted at IEEE ICUFN 2026; Vaskar Chakma and Wooyeol Choi, Chosun University) applying tabular Q-learning to dynamic channel assignment in integrated terrestrial/non-terrestrial 6G networks. Agents observe network load, interference conditions, and temporal traffic dynamics in an MDP formulation, with a multi-objective reward balancing throughput, fairness, and interference, and epsilon-greedy exploration.

Simulations report an average reward of 37.5, 28.5 Mbps throughput, a 0.75 Jain fairness index, and 26.3% interference reduction versus random allocation. The contribution is incremental — tabular Q-learning for spectrum assignment is well-trodden — but the TN-NTN integrated setting (spectrum shared across terrestrial cells and satellite beams) is the angle that earns it a place in the NTN bin as a baseline datapoint.

## Summary (ZH)

一篇简短会议论文（arxiv 2607.17561，2026-07-20 提交，IEEE ICUFN 2026 录用；朝鲜大学 Vaskar Chakma、Wooyeol Choi），将表格式 Q-learning 应用于天地一体化 6G 网络的动态信道分配。智能体在 MDP 框架中观察网络负载、干扰状况与时变业务动态，采用兼顾吞吐、公平与干扰的多目标奖励和 epsilon-贪婪探索。

仿真结果：平均奖励 37.5、吞吐 28.5 Mbps、Jain 公平指数 0.75、相对随机分配干扰降低 26.3%。贡献属增量性质 —— 表格式 Q-learning 做频谱分配并不新鲜 —— 但天地一体化场景（地面小区与卫星波束共享频谱）使其作为 NTN 主题的基线数据点仍有记录价值。

## Key technical points (EN)

- MDP formulation: state = load + interference + temporal traffic; action = channel assignment; multi-objective reward (throughput / fairness / interference).
- Tabular Q-learning with epsilon-greedy; no deep function approximation.
- Results vs random allocation: reward 37.5, 28.5 Mbps, Jain 0.75, −26.3% interference.
- Setting: spectrum shared across terrestrial cells and NTN (satellite) beams in one allocation loop.

## Key technical points (ZH)

- MDP 建模：状态 = 负载 + 干扰 + 时变业务；动作 = 信道分配；多目标奖励（吞吐/公平/干扰）。
- 表格式 Q-learning + epsilon-贪婪；无深度函数近似。
- 相对随机分配：奖励 37.5、28.5 Mbps、Jain 0.75、干扰 −26.3%。
- 场景：地面小区与 NTN（卫星）波束在同一分配环路中共享频谱。

## Why it matters / what's new (EN)

The NTN bin's existing entries are architecture- and link-level (LEO ISL path selection 2026-06-23, LEO beam hopping); this adds a spectrum-management datapoint for the integrated TN-NTN case — the problem 3GPP Rel-19/20 NTN work items and the ITU 6G framework both flag. Value is as a baseline: any serious TN-NTN spectrum-sharing proposal should beat tabular Q-learning at 26% interference reduction.

## Why it matters / what's new (ZH)

NTN 主题现有条目集中在架构与链路层（2026-06-23 LEO 星间链路路径选择、LEO 跳波束）；本条目补充了天地一体化频谱管理数据点 —— 这是 3GPP Rel-19/20 NTN 工作项与 ITU 6G 框架共同关注的问题。其价值在于基线：任何严肃的 TN-NTN 频谱共享方案都应超越表格式 Q-learning 的 26% 干扰降低。
