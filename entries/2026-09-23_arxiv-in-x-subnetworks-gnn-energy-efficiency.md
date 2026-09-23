---
id: 2026-09-23_arxiv-in-x-subnetworks-gnn-energy-efficiency
date_published: 2026-09-21
date_found: 2026-09-23
type: academic-paper
technology: cellular
title_en: "Learning to Maximize Energy Efficiency in 6G in-X Subnetworks"
title_zh: "6G in-X 子网络中的能效最大化学习方法"
url: "https://arxiv.org/abs/2609.24263"
source_quality: full
topics: [6G, in-X-subnetworks, GNN, power-control, energy-efficiency, 3GPP-channel-model]
topic_primary: 6g-vision
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)

Ramoni Adeogun (accepted at IEEE VTC Fall 2026) studies power control for 6G "in-X subnetworks" — short-range, low-power radio cells embedded within a physical entity such as a production module, a robot, a vehicle, a house, or even a human body, proposed as a wireless replacement for wired connections in latency- and reliability-critical applications by providing capillary, ultra-low-latency coverage. The paper's problem statement is that when many in-X subnetworks operate close together, they create severe mutual interference, while their power budgets simultaneously demand energy-efficient operation to extend device lifetime and reduce cost; existing interference-management work does not explicitly optimize energy efficiency under this interference coupling, and energy-efficiency metrics are fractional and non-convex, which conventional convex-optimization methods handle poorly.

The proposed method decomposes the network into K independent, fully-connected interference graphs (one graph per resource block, one device node per subnetwork sharing that block) and trains a 3-layer, 128-hidden-unit-per-layer graph neural network that passes messages derived from device hidden states and cross-subnetwork interference-channel information, outputting a sigmoid-normalized transmit power per device. Three optimization objectives are compared: Network-Centric Energy Efficiency (NCEE, maximizing total bits-per-Joule across all subnetworks), Subnetwork-Centric Energy Efficiency (SCEE, maximizing the average per-subnetwork efficiency for fairness), and a Multi-Objective Spectral-Energy tradeoff (MOEE) that scalarizes between spectral-efficiency and energy-efficiency objectives via a weighting parameter. Training and evaluation used a simulated 10m x 10m indoor factory scenario with ten subnetworks, a 3GPP in-factory channel model (2.1 pathloss exponent, 7 dB shadowing), 5 MHz bandwidth, 0.8 power-amplifier efficiency, 0.1 W circuit power per device and 1 W maximum transmit power, with 50,000 training samples over 200 epochs. Relative to a maximum-transmit-power baseline, the GNN-based approach achieved up to a 1341% network-level energy-efficiency gain, up to 1302% per-device energy-efficiency gain, and up to a 24.7% spectral-efficiency (sum-rate) gain, with NCEE reaching the highest network-level efficiency, SCEE improving fairness across subnetworks, and MOEE tracing an efficiency/spectral-efficiency Pareto frontier with the authors noting an attractive operating point near a 0.5 weighting between the two objectives.

## Summary (ZH)

Ramoni Adeogun（论文已被 IEEE VTC Fall 2026 接收）研究了 6G "in-X 子网络"的功率控制问题。in-X 子网络是指嵌入在生产模组、机器人、车辆、房屋乃至人体等实体内部的短距离低功率无线蜂窝，旨在为对时延与可靠性要求苛刻的应用场景提供毛细血管式的超低时延覆盖，以无线方式替代有线连接。论文指出的问题是：当大量 in-X 子网络在近距离内同时运行时，会产生严重的相互干扰；与此同时，其有限的功率预算又要求以节能方式运行，以延长设备寿命并降低成本。现有的干扰管理研究并未明确针对这种干扰耦合下的能效进行优化，而能效指标本身具有分式、非凸的特性，传统凸优化方法难以有效处理。

该方法将网络分解为 K 个独立的、全连接的干扰图（每个资源块对应一个图，共享该资源块的每个子网络对应图中一个设备节点），并训练一个 3 层、每层 128 个隐藏单元的图神经网络：该网络基于设备隐藏状态与跨子网络干扰信道信息传递消息，最终输出经 sigmoid 归一化的每设备发射功率。论文比较了三种优化目标：网络中心能效（NCEE，最大化所有子网络的总比特每焦耳能效）、子网络中心能效（SCEE，最大化各子网络的平均能效以实现公平性），以及多目标频谱-能效权衡（MOEE，通过权重参数在频谱效率与能效目标之间进行标量化折中）。训练与评估基于一个 10 米 × 10 米的室内工厂仿真场景，其中包含十个子网络，采用 3GPP 室内工厂信道模型（路径损耗指数 2.1，阴影衰落 7dB）、5MHz 带宽、0.8 的功放效率、每设备 0.1W 电路功耗与 1W 最大发射功率，训练样本 50,000 个，训练 200 个周期。相较于最大发射功率基线，该基于 GNN 的方法实现了最高 1341% 的网络级能效提升、最高 1302% 的单设备能效提升，以及最高 24.7% 的频谱效率（总速率）提升；其中 NCEE 在网络级能效上表现最佳，SCEE 提升了各子网络间的公平性，MOEE 则描绘出能效与频谱效率之间的帕累托前沿，作者指出在两目标权重约为 0.5 处存在一个较具吸引力的运行点。

## Key technical points (EN)

- Domain: 6G "in-X subnetworks" — short-range, low-power embedded radio cells (inside a production module, robot, vehicle, house, or body), proposed to replace wired links for latency-/reliability-critical applications.
- Problem: severe inter-subnetwork interference at high density, combined with tight power budgets, that existing interference-management approaches do not jointly optimize for energy efficiency (a fractional, non-convex objective).
- Method: per-resource-block interference-graph decomposition + a 3-layer/128-hidden-unit GNN performing message passing over device states and cross-subnetwork interference channels, outputting sigmoid-normalized transmit power.
- Three compared objectives: NCEE (network-total efficiency), SCEE (per-subnetwork fairness), MOEE (scalarized spectral-efficiency/energy-efficiency tradeoff).
- Setup: 10m x 10m indoor factory, 10 subnetworks, 3GPP in-factory channel model, 5 MHz bandwidth, 1 W max Tx power; 50,000 training samples, 200 epochs.
- Results vs. maximum-power baseline: up to 1341% network-level EE gain, up to 1302% per-device EE gain, up to 24.7% sum-rate gain; MOEE traces an EE/SE Pareto frontier with a favorable point near a 0.5 weighting.

## Key technical points (ZH)

- 研究对象：6G "in-X 子网络"——嵌入生产模组、机器人、车辆、房屋或人体内部的短距离低功率无线蜂窝，旨在替代有线连接以满足时延与可靠性关键型应用需求。
- 问题：高密度部署下子网络间存在严重相互干扰，叠加严格的功率预算限制，而现有干扰管理方法并未针对这种干扰耦合下的能效（一种分式、非凸目标）进行联合优化。
- 方法：按资源块分解干扰图，并训练一个 3 层、每层 128 个隐藏单元的 GNN，基于设备状态与跨子网络干扰信道信息传递消息，输出经 sigmoid 归一化的发射功率。
- 比较的三种优化目标：NCEE（网络总能效）、SCEE（子网络间公平性）、MOEE（频谱效率与能效的标量化权衡）。
- 仿真设置：10 米 × 10 米室内工厂场景，10 个子网络，3GPP 室内工厂信道模型，5MHz 带宽，最大发射功率 1W；训练样本 50,000 个，训练 200 个周期。
- 相较最大功率基线的结果：网络级能效最高提升 1341%，单设备能效最高提升 1302%，总速率最高提升 24.7%；MOEE 描绘出能效/频谱效率帕累托前沿，权重约 0.5 处为较优运行点。

## Why it matters / what's new (EN)

This is the first entry in this KB addressing in-X subnetworks, a distinct 6G research paradigm (ultra-short-range, in-object radio cells) separate from the KB's existing massive-MIMO, network-slicing, and open-RAN threads; it introduces both the concept and a concrete GNN-based, 3GPP-channel-model-grounded energy-efficiency solution with quantified gains, giving this bin a first citable example to build on.

## Why it matters / what's new (ZH)

本条目是本知识库中首次涉及 in-X 子网络这一独特的 6G 研究范式（超短距离、嵌入式无线蜂窝），有别于知识库现有的大规模 MIMO、网络切片与开放 RAN 相关内容；论文既引入了这一概念，也提出了一套基于 GNN、以 3GPP 信道模型为基础并给出量化增益的具体能效优化方案，为该主题分类提供了首个可引用的示例。
