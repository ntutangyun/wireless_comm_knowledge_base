---
id: 2026-11-12_arxiv-energy-harvesting-aware-cell-free-leo-lyapunov
date_published: 2026-11-08
date_found: 2026-11-12
technology: satellite
type: academic-paper
title_en: "Energy-Harvesting-Aware Cell-Free LEO Satellite Networks: A Lyapunov Framework for Sustainable User-Centric Beamforming and Clustering"
title_zh: "感知能量收集的无蜂窝 LEO 卫星网络：面向可持续以用户为中心波束成形与分簇的 Lyapunov 框架"
url: "https://arxiv.org/abs/2611.11283"
source_quality: full
topics: [LEO, cell-free, energy harvesting, battery, Lyapunov, hybrid beamforming, eclipse]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Wali Ullah Khan (Gachon University; arXiv, 8 Nov 2026) studies battery-aware downlink control in user-centric cell-free LEO satellite networks with solar harvesting and finite batteries. The author notes that most existing cell-free NTN frameworks assume a fixed per-satellite power budget, ignoring eclipse and battery state; the paper treats the problem as temporal, since current actions change future feasible sets.

A perturbed Lyapunov controller coordinates clustering and hybrid beamforming using measured battery states and causal harvest forecasts. The author claims battery invariance for feasible implemented actions and a utility bound that is conditional on a comparison policy. In control-layer simulations, queue-aware scheduling keeps a larger battery reserve in a stressed scenario at some cost in effective energy efficiency.

## Summary (ZH)

Wali Ullah Khan（Gachon 大学；arXiv，2026 年 11 月 8 日）研究具备太阳能收集与有限电池的、以用户为中心的无蜂窝 LEO 卫星网络中的电池感知下行控制。作者指出，多数现有无蜂窝 NTN 框架假设每颗卫星功率预算固定，忽略了日蚀与电池状态；本文将该问题视为时间维度问题，因为当前动作会改变未来的可行集。

扰动 Lyapunov 控制器利用测得的电池状态与因果收集预测来协调分簇与混合波束成形。作者声称对可行的已执行动作具有电池不变性，并给出以对比策略为条件的效用界。在控制层仿真中，队列感知调度在受压场景下保持更大的电池储备，代价是有效能效有所下降。

## Key technical points (EN)

- Setting: M LEO satellites, each with a UPA and few RF chains, serving single-antenna users through dynamic clusters; non-shadowed Rician channel.
- Control: virtual queue Z = target minus battery energy; per-slot problem trades V times the energy-efficiency ratio against a queue-weighted load; solved with quadratic transform plus sequential convex approximation, then projection onto constant-modulus hybrid beamformers.
- Guarantees (conditional): utility within (B + epsilon + D)/V of a comparison policy; battery bounds under bounded harvest-forecast error.
- Simulation: 8 satellites, 5700 s orbit, 30 s slots, 35% eclipse, 300 Wh battery, 10 Monte Carlo trials.
- Results: effective EE rises from 2.89 to 4.41 Mbit/s/W as V goes from 1 to 5000; in a three-orbit stressed run, below-floor battery updates were 0 (proposed), 86 (myopic) and 1129 (fixed 50 W) (single trial, V = 20).
- Scope limit: the long-horizon study uses a reduced-order scalar rate-power model, not the full matrix-level hybrid beamformer.

## Key technical points (ZH)

- 设定：M 颗 LEO 卫星，各配 UPA 与少量射频链，通过动态簇服务单天线用户；非阴影莱斯信道。
- 控制：虚拟队列 Z = 目标值减电池能量；逐时隙问题在 V 倍能效比与队列加权负载之间折中；采用二次变换加序贯凸近似求解，再投影到恒模混合波束成形器。
- 保证（有条件）：效用与对比策略相差在 (B + epsilon + D)/V 内；在收集预测误差有界时电池受界。
- 仿真：8 颗卫星、5700 s 轨道、30 s 时隙、35% 日蚀、300 Wh 电池、10 次蒙特卡洛。
- 结果：V 从 1 增至 5000 时有效能效由 2.89 升至 4.41 Mbit/s/W；在三轨受压运行中，低于下限的电池更新次数为 0（所提方案）、86（短视）与 1129（固定 50 W）（单次试验，V = 20）。
- 范围局限：长时程研究使用降阶标量速率-功率模型，而非完整矩阵级混合波束成形器。

## Why it matters / what's new (EN)

The KB's earlier battery-aware RSMA entry (2026-09-10, same author) handled a fixed-cluster cell-free LEO downlink; this paper adds user-centric clustering and hybrid beamforming under the explicit eclipse and battery-queue model, with Lyapunov-style guarantees. Several guarantees are conditional and the efficiency results come from a reduced-order model.

## Why it matters / what's new (ZH)

KB 此前的电池感知 RSMA 条目（2026-09-10，同一作者）针对固定簇无蜂窝 LEO 下行；本文在显式日蚀与电池队列模型下加入以用户为中心的分簇与混合波束成形，并给出 Lyapunov 型保证。部分保证有条件成立，能效结果来自降阶模型。

## Images

None.
