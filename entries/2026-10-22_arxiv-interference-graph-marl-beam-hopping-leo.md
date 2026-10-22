---
id: 2026-10-22_arxiv-interference-graph-marl-beam-hopping-leo
date_published: 2026-10-20
date_found: 2026-10-22
technology: satellite
type: academic-paper
title_en: "Interference-Graph-Aided Multi-Agent Reinforcement Learning for Beam Hopping LEO Satellite Networks"
title_zh: "干扰图辅助的多智能体强化学习用于波束跳变低轨卫星网络"
url: "https://arxiv.org/abs/2610.28248"
source_quality: full
topics: [beam-hopping, QMIX, graph-convolution, interference-management, resource-allocation, LEO]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

Yuan, Yang and Zhang (arXiv 2610.28248, submitted 20 October 2026, a letter) consider beam hopping, in which a LEO satellite switches beam coverage positions to serve non-uniform traffic. The difficulty they address is strong spatial interference coupling among beams, which makes coordinated scheduling hard.

Their approach builds an interference graph over the beams and injects it into agent-side representation learning. Edge weights combine channel-gain-profile correlation (0.4), beam-ring proximity (0.3) and sidelobe coupling (0.3), with edges kept above a threshold of 0.05; the graph is rebuilt every time step from the current channel state. Each beam agent aggregates its interference neighbors through one graph-convolution layer before estimating local Q-values, which a standard QMIX mixing network then decomposes.

The simulated system is a single satellite with 8 hopping beams serving 32 ground cells; each beam chooses among 4 hopping locations, on/off state and 4 power levels, with at most 3 beams active per slot. Trained for 20,000 episodes against Fixed, Random, Greedy, IQL, VDN and QMIX, the method reaches 1,425.6 Mbps against 1,060.3 Mbps for QMIX (34.4% higher) and a demand satisfaction rate of 98.4% against 73.2%. Mean SINR is nearly identical (13.56 dB versus 13.52 dB); the SINR standard deviation is lower (0.22 dB versus 0.36 dB). A binary-edge graph gives 1,420.0 Mbps, so the edge weighting adds only a marginal gain. The evaluation is simulation-only on one satellite; the stated future work is multi-satellite scenarios with dynamic topology and traffic prediction.

## Summary (ZH)

Yuan、Yang 和 Zhang（arXiv 2610.28248，2026 年 10 月 20 日提交，快报类论文）研究波束跳变：低轨卫星切换波束覆盖位置以服务非均匀业务。他们要解决的难点是波束之间强烈的空间干扰耦合，使协同调度变得困难。

其方法是在波束之间构建干扰图，并将其注入各智能体侧的表示学习。边权由信道增益曲线相关性（0.4）、波束环上的邻近度（0.3）和旁瓣耦合（0.3）组合而成，保留高于阈值 0.05 的边；干扰图每个时间步根据当前信道状态重建。每个波束智能体通过一层图卷积汇聚其干扰邻居的信息后估计本地 Q 值，再由标准 QMIX 混合网络分解。

仿真系统为单颗卫星、8 个跳变波束服务 32 个地面小区；每个波束在 4 个跳变位置、开/关状态和 4 个功率等级中选择，每时隙最多 3 个波束开启。在训练 20,000 回合并与 Fixed、Random、Greedy、IQL、VDN 和 QMIX 对比后，该方法吞吐量为 1,425.6 Mbps，QMIX 为 1,060.3 Mbps（高 34.4%），需求满足率为 98.4%，QMIX 为 73.2%。平均 SINR 几乎相同（13.56 dB 对 13.52 dB），SINR 标准差更低（0.22 dB 对 0.36 dB）。使用二值边的图得到 1,420.0 Mbps，说明边加权只带来边际增益。评估仅限单颗卫星的仿真；作者声明的后续工作是动态拓扑与业务预测下的多卫星场景。

## Key technical points (EN)

- **Problem**: coordinated beam-hopping scheduling under strong inter-beam interference and non-uniform traffic.
- **Graph**: nodes are beams; edge weight = 0.4 channel correlation + 0.3 proximity + 0.3 sidelobe coupling; threshold 0.05; rebuilt every step.
- **Network**: MLP encoder, one graph-convolution layer, three-layer Q-network (hidden 128), standard QMIX mixer.
- **System**: 1 satellite, 8 beams, 32 cells, 4 hop locations, 4 power levels, at most 3 active beams per slot.
- **Results**: 1,425.6 vs 1,060.3 Mbps (+34.4%) over QMIX; demand satisfaction 98.4% vs 73.2%; SINR std 0.22 vs 0.36 dB.
- **Ablation**: binary graph 1,420.0 Mbps, so weighted edges add little.

## Key technical points (ZH)

- **问题**：强波束间干扰与非均匀业务下的协同波束跳变调度。
- **图**：节点为波束；边权 = 0.4 信道相关性 + 0.3 邻近度 + 0.3 旁瓣耦合；阈值 0.05；每步重建。
- **网络**：MLP 编码器、一层图卷积、三层 Q 网络（隐层 128）、标准 QMIX 混合网络。
- **系统**：1 颗卫星、8 个波束、32 个小区、4 个跳变位置、4 个功率等级，每时隙最多 3 个波束开启。
- **结果**：相对 QMIX 吞吐量 1,425.6 对 1,060.3 Mbps（高 34.4%）；需求满足率 98.4% 对 73.2%；SINR 标准差 0.22 对 0.36 dB。
- **消融**：二值图为 1,420.0 Mbps，边加权增益很小。

## Why it matters / what's new (EN)

The letter adds an explicit, per-step interference graph to a value-decomposition MARL beam-hopping scheduler. The reported gains are over QMIX in a small single-satellite simulation; the abstract's stability claim rests on SINR spread, since mean SINR is essentially unchanged.

## Why it matters / what's new (ZH)

该快报在价值分解型多智能体强化学习波束跳变调度器中加入了显式的逐步干扰图。所报告的增益是在小规模单卫星仿真中相对 QMIX 取得的；摘要中的稳定性结论依据的是 SINR 离散程度，平均 SINR 基本不变。

## Images

None.
