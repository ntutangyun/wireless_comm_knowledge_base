---
id: 2026-11-16_arxiv-ml-scalable-multi-ap-coordination-80211bn-hmab-fm4wifi
date_published: 2026-11-12
date_found: 2026-11-16
technology: wifi
type: academic-paper
title_en: "Machine Learning for Scalable Multi-AP Coordination in IEEE 802.11bn Networks"
title_zh: "面向 IEEE 802.11bn 网络可扩展多 AP 协调的机器学习方法"
url: "https://arxiv.org/abs/2611.16634"
source_quality: full
topics: [802.11bn, MAPC, Co-SR, multi-armed bandit, graph neural network, flow matching, openwifi, spatial reuse]
topic_primary: mapc-cosr
topics_secondary: [ai-for-wifi, wifi8-uhr]
novelty_score: 4
---

## Summary (EN)

Maksymilian Wojnar and Szymon Szott (AGH University of Krakow) address the multi-access-point coordination (MAPC) framework introduced in IEEE 802.11bn, in which neighbouring APs cooperate. They call the joint choice of which AP-station pairs transmit together, at what transmit power and MCS, the Co-SR scheduling problem, and note that 802.11bn currently specifies Co-SR for pairs of APs only; their methods are designed for any number of cooperating APs, aimed at large managed networks such as industrial, corporate and institutional deployments. The paper (submitted 12 November 2026, listed as published at MSWiM 2026) presents a stack of ML coordination methods and validates it in simulation and on hardware.

Because ns-3 does not support MAPC, the authors built an open-source Monte Carlo Co-SR simulator that computes inter-node interference and reception success probability, with the summed effective data rate as the objective. Two MILP formulations provide throughput-optimal (T-Optimal) and fairness-optimal (F-Optimal) upper bounds. The first method is a hierarchical multi-armed bandit (H-MAB): a hierarchy of bandit levels selects transmitting APs, their receiving stations and transmit power, with optional clustering for dense topologies. The second, FM4WiFi, encodes topologies and configurations as graphs with a GNN variational autoencoder, generates new configurations with a flow-matching model, and scores them with a surrogate rate predictor so that no simulator calls are needed at inference.

Results as reported: H-MAB agents learn good AP-station pairs within seconds and adapt to station mobility; the hierarchy beats a flat bandit and UCB is the best general-purpose underlying algorithm; with transmit-power selection, aggregate throughput rises about 80 percent over DCF on average in random scenarios without reducing per-station transmission opportunities, and it outperforms 802.11ax spatial reuse; clustering shortens convergence in the densest office topologies; on an openwifi testbed the agents adapt to real radio conditions (a digital twin was used for preliminary hyperparameter tuning). The GNN autoencoder reconstructs discrete attributes (MCS, transmit power) at nearly 100 percent accuracy but continuous attributes (RSS, success probability) at only 15-50 percent. FM4WiFi selects transmitters, receivers, MCS and power in a single inference step in under one second, scales beyond 30 APs where analytical and RL methods become infeasible, matches or exceeds the strongest baselines at medium-to-large scale, and in dynamic scenarios with FM4WiFi regenerating the configuration on network events or at cyclic intervals, improves effective data rate by roughly 25 percent over a static configuration. The authors present H-MAB for small and medium networks and FM4WiFi for large topologies needing sub-second decisions, and list planned work on adding RL to the FM4WiFi pipeline, scalable approximate performance bounds and surrogate-driven optimization. Code for both methods is stated to be open source.

## Summary (ZH)

Maksymilian Wojnar 与 Szymon Szott（克拉科夫 AGH 大学）研究 IEEE 802.11bn 引入的多接入点协调（MAPC）框架。他们把"选择哪些 AP-站点对同时发送、以何种发射功率与 MCS"的联合决策称为 Co-SR 调度问题，并指出 802.11bn 目前只对 AP 对规定 Co-SR；其方法面向任意数量的协作 AP，目标场景是工业、企业与机构等大型受管网络。论文（2026 年 11 月 12 日提交，标注为 MSWiM 2026）提出一组机器学习协调方法，并在仿真和硬件上验证。

由于 ns-3 不支持 MAPC，作者构建了开源的蒙特卡洛 Co-SR 仿真器，计算节点间干扰与接收成功概率，以总有效数据速率为目标。两个 MILP 模型分别给出吞吐最优（T-Optimal）与公平最优（F-Optimal）上界。第一种方法是分层多臂老虎机（H-MAB）：多层老虎机依次选择发送 AP、对应接收站点和发射功率，并可对密集拓扑做聚类。第二种方法 FM4WiFi 用 GNN 变分自编码器把拓扑与配置编码为图，用流匹配（flow matching）模型生成新配置，并用代理速率预测器打分，因此推理时无需调用仿真器。

报告的结果：H-MAB 智能体在数秒内学到较好的 AP-站点配对并适应站点移动；分层结构优于单层老虎机，UCB 是最佳通用底层算法；加入发射功率选择后，随机场景下聚合吞吐相对 DCF 平均提升约 80%，且不减少各站点的传输机会，并优于 802.11ax 空间复用；聚类缩短了最密集办公拓扑中的收敛时间；在 openwifi 测试床上智能体能适应真实无线条件（数字孪生用于初步超参数调优）。GNN 自编码器对离散属性（MCS、发射功率）的重建准确率接近 100%，对连续属性（RSS、成功概率）仅 15-50%。FM4WiFi 一次推理即可在 1 秒内联合选出发送端、接收端、MCS 与功率，可扩展到 30 个以上 AP（此规模下解析与强化学习方法已不可行），在中大规模下达到或超过最强基线，在动态场景中，由 FM4WiFi 在网络事件触发或按周期重新生成配置，有效数据速率相对静态配置提升约 25%。作者把 H-MAB 定位于中小规模网络，把 FM4WiFi 定位于需要亚秒级决策的大规模拓扑，并计划为 FM4WiFi 流水线加入强化学习、研究可扩展的近似性能上界以及由代理模型直接驱动的优化。两种方法的代码据称均已开源。

## Key technical points (EN)

- **Problem:** Co-SR scheduling = joint selection of transmitting AP-STA pairs, transmit power and MCS; 802.11bn specifies Co-SR for AP pairs only, the paper targets any number of APs.
- **H-MAB:** hierarchical bandit over APs, stations and power; UCB best; optional clustering; about +80% throughput over DCF in random scenarios (with power selection) and better than 802.11ax spatial reuse.
- **FM4WiFi:** GNN VAE + flow matching + surrogate rate predictor; one-shot, sub-second configuration generation; beyond 30 APs; in dynamic scenarios, regenerating on network events or cyclically, about +25% effective data rate over a static configuration.
- **Bounds and tooling:** T-Optimal / F-Optimal MILP upper bounds; open-source Monte Carlo Co-SR simulator (ns-3 lacks MAPC support); openwifi hardware testbed with a digital twin for hyperparameter tuning.
- **Limits the paper states or shows:** GNN reconstructs continuous attributes at only 15-50%; no online adaptation in FM4WiFi yet; testbed results are described briefly.

## Key technical points (ZH)

- **问题：** Co-SR 调度 = 联合选择发送的 AP-STA 对、发射功率与 MCS；802.11bn 仅对 AP 对规定 Co-SR，本文面向任意数量 AP。
- **H-MAB：** 针对 AP、站点与功率的分层老虎机；UCB 最佳；可选聚类；随机场景下（含功率选择）相对 DCF 吞吐约提升 80%，且优于 802.11ax 空间复用。
- **FM4WiFi：** GNN VAE + 流匹配 + 代理速率预测器；一次性、亚秒级生成配置；可扩展到 30 个以上 AP；动态场景中相对静态重生成配置有效数据速率约提升 25%。
- **上界与工具：** T-Optimal / F-Optimal MILP 上界；开源蒙特卡洛 Co-SR 仿真器（ns-3 不支持 MAPC）；openwifi 硬件测试床及用于超参数调优的数字孪生。
- **论文陈述或显示的局限：** GNN 对连续属性的重建仅 15-50%；FM4WiFi 尚无在线自适应；测试床结果描述较简略。

## Why it matters / what's new (EN)

The mapc-cosr bin already holds a bandit/surrogate Co-SR scheduler paper ([2026-10-28_arxiv-sample-and-score-surrogate-guided-co-sr-80211bn](2026-10-28_arxiv-sample-and-score-surrogate-guided-co-sr-80211bn)); this paper adds a two-tier approach (online bandits plus a one-shot generative pipeline), explicit MILP optimality bounds, a scale claim beyond 30 APs with sub-second decisions, and an openwifi hardware check. The performance numbers are the authors' simulation results; the hardware evaluation is reported only briefly.

## Why it matters / what's new (ZH)

mapc-cosr 主题下已有一篇基于老虎机/代理模型的 Co-SR 调度论文（[2026-10-28_arxiv-sample-and-score-surrogate-guided-co-sr-80211bn](2026-10-28_arxiv-sample-and-score-surrogate-guided-co-sr-80211bn)）；本文补充了两层方案（在线老虎机加一次性生成式流水线）、明确的 MILP 最优性上界、30 个以上 AP 且亚秒级决策的规模声明，以及 openwifi 硬件验证。性能数字为作者的仿真结果；硬件评估仅作简要报告。

## Images

None.
