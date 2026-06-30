---
id: 2026-06-30_arxiv-ris-uav-ntn-oran-marl-6g
date_published: 2026-05-31
date_found: 2026-06-30
type: academic-paper
technology: cellular
title_en: "Multi-Agent DRL for QoS and Energy Optimization in RIS-Enabled Open-RAN Industrial 6G TN/NTN Networks"
title_zh: "面向 RIS 赋能的开放 RAN 工业级 6G 天地一体（TN/NTN）网络的多智能体深度强化学习 QoS 与能效优化"
url: "https://arxiv.org/abs/2606.28339"
source_quality: abstract_only
topics: [6G, NTN, RIS, Open-RAN, MARL, UAV, HAPS, energy-efficiency]
topic_primary: ntn
topics_secondary: [open-ran, cellular-ai, 6g-vision]
novelty_score: 2
---

## Summary (EN)
This paper targets connectivity in blockage-prone industrial 6G deployments by combining a **terrestrial / non-terrestrial (TN/NTN)** radio fabric with **reconfigurable intelligent surfaces (RIS)** mounted on UAVs. The architecture layers ground O-RAN radio units, UAV-borne RIS relays, and high-altitude platform stations (HAPS) so that when line-of-sight to a ground RU is blocked, the aerial RIS tier restores a controllable reflected path. The joint problem is QoS (data rate / latency) versus energy on a network where the reflecting geometry, UAV placement, and resource allocation all interact.

Rather than solve this with conventional centralized optimization — which the authors argue becomes computationally unwieldy as the number of reflecting elements and aerial nodes grows — they cast it as a **decentralized multi-agent reinforcement learning (MARL)** problem. Each network element (RU, UAV-RIS, HAPS) acts as an autonomous agent that learns to coordinate phase configuration, placement, and allocation without a central solver, which fits the disaggregated control model of Open-RAN.

Against state-of-the-art baselines the framework reports up to **+75% data rate, −25% latency, and −16% energy**. The contribution to the KB is the specific stacking of UAV-mounted RIS + HAPS + ground O-RAN under a single decentralized-MARL controller for an industrial TN/NTN scenario — a combination distinct from the existing energy-MARL (BeGREEN) and privacy-MARL slice-management entries, which are terrestrial-only and do not include a reflecting aerial tier.

## Summary (ZH)
本文针对易受遮挡的工业级 6G 场景，提出将**天地一体（TN/NTN）**无线架构与挂载在无人机（UAV）上的**可重构智能表面（RIS）**相结合。该架构由地面 O-RAN 射频单元、机载 RIS 中继与高空平台站（HAPS）分层组成：当到地面 RU 的视距被遮挡时，空中 RIS 层可恢复一条可控的反射路径。其联合优化在反射几何、无人机部署与资源分配相互耦合的网络上，权衡 QoS（速率/时延）与能耗。

作者认为，随着反射单元与空中节点数量增长，传统集中式优化在计算上不可行，因此将问题建模为**去中心化的多智能体强化学习（MARL）**：每个网络单元（RU、UAV-RIS、HAPS）作为自治智能体，在无中央求解器的情况下学习协调相位配置、部署与分配，契合 Open-RAN 的解耦控制理念。

相较现有最优基线，该框架报告了最高 **+75% 速率、−25% 时延、−16% 能耗**。其对知识库的新增价值在于：将 UAV-RIS + HAPS + 地面 O-RAN 这三层统一在一个去中心化 MARL 控制器下、面向工业 TN/NTN 场景——这一组合区别于库内已有的能效-MARL（BeGREEN）与隐私-MARL 切片管理条目（二者均为纯地面、且不含反射型空中层）。

## Key technical points (EN)
- Three-tier architecture: ground O-RAN RUs + UAV-mounted RIS relays + HAPS, for blockage-resilient industrial 6G.
- RIS restores a controllable reflected link when the direct ground path is obstructed.
- Joint optimization of phase configuration, aerial-node placement, and resource allocation.
- Cast as decentralized MARL — each RU / UAV-RIS / HAPS is an autonomous agent, no central solver.
- Reported gains vs SOTA: +75% data rate, −25% latency, −16% energy.
- Authors: Marwan Dhuheir, Thang X. Vu, Symeon Chatzinotas (SnT, University of Luxembourg). Submitted 2026-05-31.

## Key technical points (ZH)
- 三层架构：地面 O-RAN RU + UAV 挂载 RIS 中继 + HAPS，面向抗遮挡的工业 6G。
- 当直达地面路径被阻挡时，RIS 恢复一条可控反射链路。
- 联合优化相位配置、空中节点部署与资源分配。
- 建模为去中心化 MARL——每个 RU / UAV-RIS / HAPS 均为自治智能体，无中央求解器。
- 相对 SOTA 的增益：速率 +75%、时延 −25%、能耗 −16%。
- 作者：Marwan Dhuheir、Thang X. Vu、Symeon Chatzinotas（卢森堡大学 SnT）。提交于 2026-05-31。

## Why it matters / what's new (EN)
The KB already holds several MARL-for-RAN entries (the BeGREEN O-RAN energy cluster, 2026-06-09; the privacy-aware MARL VR-slice paper 2026-06-28), but all are terrestrial. This entry is the first to add a **reflecting aerial tier (UAV-RIS + HAPS)** under the same decentralized-learning control, making RIS a first-class actor in the TN/NTN bin rather than a passive channel element. It is also a concrete data point on how O-RAN's disaggregation maps cleanly onto a multi-agent learning formulation for aerial-assisted industrial coverage.

## Why it matters / what's new (ZH)
知识库已有若干 MARL-for-RAN 条目（2026-06-09 的 BeGREEN O-RAN 能效集群、2026-06-28 的隐私感知 MARL VR 切片论文），但均为地面网络。本条目首次在同一去中心化学习控制下加入了**反射型空中层（UAV-RIS + HAPS）**，使 RIS 在 NTN 分类中成为一等参与者，而非被动信道元素。它也是一个具体例证，说明 O-RAN 的解耦如何天然映射到面向空中辅助工业覆盖的多智能体学习建模。
