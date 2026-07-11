---
id: 2026-07-11_arxiv-phaul-ppo-sub6-iab-forwarding
date_published: 2026-07-08
date_found: 2026-07-11
type: academic-paper
technology: cellular
title_en: "PHaul: a PPO-based forwarding agent for Sub6-enhanced Integrated Access and Backhaul networks"
title_zh: "PHaul：面向 Sub6 增强型集成接入回传（IAB）网络的 PPO 转发智能体"
url: "https://arxiv.org/abs/2607.07584"
source_quality: full
topics: [IAB, 5G, mmWave, Sub6, DRL, PPO, digital-twin, traffic-engineering]
topic_primary: 5g-nr
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

PHaul (Pueyo, Camps-Mur, Catalan-Cid — i2CAT, EU SNS JU project NANCY) tackles the backhaul bottleneck in 5G Integrated Access and Backhaul (IAB) deployments by augmenting mm-wave backhaul with Sub6 links and learning how to route flows across the resulting heterogeneous mesh. The system splits the problem in two: an offline stage pre-computes up to K candidate paths per flow with three heuristics (ShortestPath, LastHop, LeastCommon), and an online PPO agent — operating against a digital twin of the backhaul — iteratively assigns one flow per step to a path, optimising operator-defined traffic-engineering criteria (throughput efficiency, Jain fairness, or weighted blends).

Against heuristic baselines, PHaul reports up to 36% throughput and 20% fairness improvement across randomly grown IAB topologies (3 donors, 20-60 nodes; mm-wave 30 GHz/800 MHz at 800-1000 Mbps per link; Sub6 6 GHz/80 MHz at 200-300 Mbps), with execution consistently under 10 seconds — fast enough for periodic re-optimisation under dynamic traffic. The per-flow iterative action-space design collapses the combinatorial (2K)^|F| allocation problem to 2K·|F|, and the agent generalises to link failures and unseen topologies. Code is open-sourced (github.com/Fundacio-i2CAT/phaul).

## Summary (ZH)

PHaul（Pueyo、Camps-Mur、Catalan-Cid——i2CAT，欧盟 SNS JU NANCY 项目）针对 5G 集成接入回传（IAB）部署中的回传瓶颈：以 Sub6 链路增强毫米波回传，并学习如何在由此形成的异构网状网中路由流量。系统分两级：离线阶段用三种启发式（最短路径、末跳、最少共享链路）为每条流预计算至多 K 条候选路径；在线阶段由 PPO 智能体基于回传网络的数字孪生逐步为每条流分配路径，优化运营商定义的流量工程目标（吞吐效率、Jain 公平性或加权组合）。

相较启发式基线，PHaul 在随机生成的 IAB 拓扑上（3 个宿主节点、20-60 节点；毫米波 30 GHz/800 MHz 每链路 800-1000 Mbps；Sub6 6 GHz/80 MHz 每链路 200-300 Mbps）报告最高 36% 吞吐与 20% 公平性提升，执行时间稳定在 10 秒以内——足以支撑动态流量下的周期性重优化。逐流迭代动作空间设计将组合式 (2K)^|F| 分配问题压缩为 2K·|F|，且智能体可泛化到链路故障与未见拓扑。代码已开源（github.com/Fundacio-i2CAT/phaul）。

## Key technical points (EN)

- Two-stage design: offline K-path pre-computation (LeastCommon heuristic wins — minimises shared links) + online PPO per-flow allocation against a digital twin.
- Action-space reduction from (2K_max)^|F| to 2K_max·|F| via iterative single-flow assignment.
- Up to +36% throughput efficiency, +20% Jain fairness vs heuristics; <10 s execution on realistic topologies.
- Sub6 (6 GHz, 80 MHz) as robustness/capacity complement to LoS-fragile mm-wave (30 GHz, 800 MHz) backhaul.
- Generalises to link failures and unseen topologies; open-source with Gym/stable-baselines3.

## Key technical points (ZH)

- 两级设计：离线 K 路径预计算（最少共享链路启发式最优）+ 在线 PPO 基于数字孪生的逐流分配。
- 通过迭代单流分配将动作空间从 (2K_max)^|F| 降至 2K_max·|F|。
- 相较启发式最高 +36% 吞吐效率、+20% Jain 公平性；真实规模拓扑上执行 <10 秒。
- Sub6（6 GHz、80 MHz）作为对视距敏感的毫米波（30 GHz、800 MHz）回传的鲁棒性/容量补充。
- 可泛化至链路故障与未见拓扑；基于 Gym/stable-baselines3 开源。

## Why it matters / what's new (EN)

The KB's 5g-nr bin has IAB-adjacent coverage but nothing on heterogeneous Sub6+mm-wave backhaul routing. PHaul's claim to be first to combine the two bands under an ML allocation agent — with a digital-twin loop that keeps decision latency deployable (<10 s) — makes it the reference point for the "backhaul as a learned resource" thread, complementing 2026-07-10_arxiv-stemgnn-cbf-backhaul-delay (which predicts under backhaul delay rather than routing around it).

## Why it matters / what's new (ZH)

KB 的 5g-nr 板块已有 IAB 相关内容，但尚无异构 Sub6+毫米波回传路由。PHaul 宣称首个以 ML 分配智能体结合两个频段——数字孪生环路将决策时延保持在可部署水平（<10 秒）——使其成为"回传作为可学习资源"这一线索的参考点，与 2026-07-10_arxiv-stemgnn-cbf-backhaul-delay（在回传时延下做预测而非绕行路由）形成互补。

## Images

![PHaul network model: donor/IAB nodes with Sub6 and mm-wave backhaul | PHaul 网络模型：宿主/IAB 节点与 Sub6、毫米波回传](https://arxiv.org/html/2607.07584v1/x1.png)
![PHaul agent design: offline path computation + online PPO allocation | PHaul 智能体设计：离线路径计算 + 在线 PPO 分配](https://arxiv.org/html/2607.07584v1/x2.png)
