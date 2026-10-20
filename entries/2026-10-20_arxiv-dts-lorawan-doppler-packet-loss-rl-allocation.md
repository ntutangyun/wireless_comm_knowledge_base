---
id: 2026-10-20_arxiv-dts-lorawan-doppler-packet-loss-rl-allocation
date_published: 2026-10-16
date_found: 2026-10-20
technology: satellite
type: academic-paper
title_en: "Packet Loss Analysis Under Doppler Effects and Reinforcement-Learning-Based Resource Allocation for Direct-to-Satellite LoRaWAN"
title_zh: "直连卫星 LoRaWAN 的多普勒影响下丢包分析与基于强化学习的资源分配"
url: "https://arxiv.org/abs/2610.23682"
source_quality: abstract-only
topics: [LoRaWAN, direct-to-satellite, IoT, Doppler, packet-loss-ratio, DQN, PPO, resource-allocation]
topic_primary: sat-iot
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

Maleki, Bedeer and Barton (arXiv 2610.23682, submitted 16 October 2026) study resource allocation in direct-to-satellite (DtS) IoT networks built on LoRaWAN. The abstract states that packet collisions and Doppler impairments caused by satellite motion can greatly increase the packet loss ratio (PLR) in large-scale DtS-IoT networks.

The authors first develop an analytical PLR model that accounts simultaneously for Doppler impairments and packet collisions in the temporal and frequency domains. This PLR is then used as the reward function for two reinforcement-learning schemes, deep Q-network (DQN) and proximal policy optimization (PPO), to optimize resource allocation.

Per the abstract, simulations validate the analytical PLR model against Monte Carlo simulations and show significant improvements over random resource allocation. At a target PLR of 3x10^-2, random allocation supports only 100 end devices (EDs), whereas PPO and DQN support approximately 650 and 690 EDs, described as nearly a seven-fold increase. For 800 EDs, PPO and DQN increase the total number of transmitted packets by 106.7% and 88.0% respectively relative to random allocation.

The abstract does not give the channel and constellation parameters or the exact allocation variables.

## Summary (ZH)

Maleki、Bedeer 和 Barton（arXiv 2610.23682，2026 年 10 月 16 日提交）研究基于 LoRaWAN 的直连卫星（DtS）物联网网络中的资源分配。摘要指出，卫星运动引起的数据包碰撞和多普勒损伤会显著提高大规模 DtS-IoT 网络的丢包率（PLR）。

作者首先建立同时考虑时域和频域中多普勒损伤与数据包碰撞的 PLR 解析模型；随后将该 PLR 作为两种强化学习方案（深度 Q 网络 DQN 与近端策略优化 PPO）的奖励函数，用于优化资源分配。

按摘要，仿真将解析 PLR 模型与蒙特卡洛仿真进行了验证，并显示相对随机资源分配有显著提升。在目标 PLR 为 3x10^-2 时，随机分配仅支持 100 个终端设备（ED），而 PPO 和 DQN 分别支持约 650 和 690 个，称接近七倍提升。对于 800 个 ED，相对随机分配，PPO 和 DQN 使总发送数据包数分别增加 106.7% 和 88.0%。

摘要未给出信道与星座参数及具体分配变量。

## Key technical points (EN)

- **Setting**: direct-to-satellite IoT over LoRaWAN; collisions plus Doppler drive packet loss at scale.
- **Model**: analytical PLR covering Doppler impairments and collisions in time and frequency domains.
- **Method**: PLR as reward for DQN and PPO resource allocation.
- **Validation**: analytical model checked against Monte Carlo simulation.
- **Results (abstract)**: at PLR 3x10^-2, about 650 (PPO) / 690 (DQN) EDs vs 100 for random allocation; at 800 EDs, packets sent +106.7% (PPO) / +88.0% (DQN).

## Key technical points (ZH)

- **场景**：基于 LoRaWAN 的直连卫星物联网；大规模下碰撞与多普勒导致丢包。
- **模型**：覆盖时频域多普勒损伤与碰撞的 PLR 解析模型。
- **方法**：以 PLR 作为 DQN 与 PPO 资源分配的奖励。
- **验证**：解析模型与蒙特卡洛仿真对照。
- **结果（摘要）**：PLR 为 3x10^-2 时，PPO/DQN 约支持 650/690 个 ED，随机分配为 100 个；800 个 ED 时发包数 +106.7%（PPO）/ +88.0%（DQN）。

## Why it matters / what's new (EN)

The paper pairs an analytical Doppler-and-collision PLR model with RL-based allocation for LoRaWAN DtS-IoT. All reported gains are simulation results quoted from the abstract.

## Why it matters / what's new (ZH)

论文将多普勒与碰撞的 PLR 解析模型与基于 RL 的 LoRaWAN DtS-IoT 资源分配结合。所有增益均为摘要引用的仿真结果。

## Images

None.
