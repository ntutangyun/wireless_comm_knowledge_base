---
id: 2026-08-12_arxiv-cors-network-gnss-integrity-monitoring
date_published: 2026-08-09
date_found: 2026-08-12
type: academic-paper
technology: satellite
title_en: "Treating Statewide CORS Networks as Spatially Distributed Sensors for GNSS Integrity Monitoring under Unintentional and Deliberate Threats"
title_zh: "将全州 CORS 网络视作空间分布式传感器以监测非故意与蓄意威胁下的 GNSS 完好性"
url: "https://arxiv.org/abs/2608.08831"
source_quality: full
topics: [GNSS, integrity-monitoring, spoofing, jamming, CORS, TEC, security]
topic_primary: sat-ai
topics_secondary: [ngso-regulation]
novelty_score: 3
---

## Summary (EN)
This paper (Minhaj Uddin Ahmad, Sagar Dasgupta, Muhammad Sami Irfan, Mizanur Rahman, Thejesh N. Bandi — University of Alabama; Mashrur Chowdhury — Clemson; arXiv 9 Aug 2026, routed from the cs.CR security sweep) reframes a statewide network of Continuously Operating Reference Stations (CORS) — the fixed GNSS receivers that transportation agencies already run for precise positioning — as **one spatially distributed sensor** for detecting GNSS interference and spoofing. The premise: geophysical quantities like ionospheric total electron content evolve as spatially coherent fields across a state, so a localized jammer or spoofer breaks that coherence at one site while its neighbors keep agreeing — an anomaly invisible to single-receiver monitors and differenced away by short-baseline methods.

The **Network Consistency Framework (NCF)** models the network as a k-nearest-neighbor graph (k=6) and scores each station with four spatial-consistency metrics — neighborhood residual, spatial gradient, leave-one-out prediction residual, and graph (Dirichlet-energy) smoothness — computed on spatially interpolable "Class A" observables (day-over-day vertical TEC change ΔV̂TEC, and the rate-of-TEC index ROTI), corroborated by site-specific "Class B" signals (C/N₀, code multipath, positioning scatter). The metrics fold into a **Network Consistency Index (NCI)**. On the Alabama DOT network (50 stations, 4-constellation RINEX, 5–6 July 2026, 2,880 epochs/station/day), the framework cleanly flags two stations against a statewide NCI median of 0.76: **AL84** (ΔV̂TEC anomaly −2.1 TECU vs a +1 TECU neighborhood, z=5.8, NCI 4.1, corroborated by a ~14 TECU differential-code-bias jump the next day) and **ALMJ** (ROTI 0.29 vs 0.09 TECU/min network median, |z|=15, NCI 10.6). It needs no extra hardware and no historical baseline — it exploits observations DOTs already collect, and localizes anomalies rather than merely rejecting them.

## Summary (ZH)
本文（Minhaj Uddin Ahmad、Sagar Dasgupta、Muhammad Sami Irfan、Mizanur Rahman、Thejesh N. Bandi——阿拉巴马大学；Mashrur Chowdhury——克莱姆森大学；2026 年 8 月 9 日 arXiv，经 cs.CR 安全扫描路由）将全州连续运行参考站（CORS）网络——交通部门为精密定位已在运行的固定 GNSS 接收机——重构为**一个空间分布式传感器**，用于检测 GNSS 干扰与欺骗。前提是：电离层总电子含量等地球物理量在全州范围内以空间相干场演化，故局部干扰或欺骗源会在单站打破该相干性、而邻站彼此仍一致——这一异常对单接收机监测器不可见、且会被短基线方法差分抵消。

**网络一致性框架（NCF）**将网络建模为 k 近邻图（k=6），以四个空间一致性度量为每个站打分——邻域残差、空间梯度、留一预测残差、图（Dirichlet 能量）平滑度——在可空间插值的"A 类"可观测量（日间垂直 TEC 变化 ΔV̂TEC、TEC 变化率指数 ROTI）上计算，并由站点特定的"B 类"信号（C/N₀、码多径、定位散布）佐证。这些度量汇入**网络一致性指数（NCI）**。在阿拉巴马 DOT 网络（50 站、四星座 RINEX、2026 年 7 月 5–6 日、每站每日 2880 历元）上，框架相对全州 NCI 中位数 0.76 清晰标记两站：**AL84**（ΔV̂TEC 异常 −2.1 TECU 对邻域 +1 TECU，z=5.8，NCI 4.1，次日约 14 TECU 差分码偏跳变佐证）与 **ALMJ**（ROTI 0.29 对网络中位 0.09 TECU/min，|z|=15，NCI 10.6）。无需额外硬件、无需历史基线——利用 DOT 已采集的观测，并定位异常而非仅剔除。

## Key technical points (EN)
- **Idea:** treat a statewide CORS network as one distributed sensor; a local spoofer/jammer breaks the spatial coherence its neighbors preserve.
- **NCF:** k-NN graph (k=6) + four spatial-consistency metrics (neighborhood residual, spatial gradient, LOO prediction residual, graph smoothness) → Network Consistency Index (NCI).
- **Observables:** Class A (interpolable): ΔV̂TEC, ROTI; Class B (corroborating): C/N₀, code multipath, SPP scatter.
- **Data:** Alabama DOT, 50 stations, GPS+GLONASS+Galileo+BeiDou, 5–6 Jul 2026, 2,880 epochs/station/day.
- **Findings:** AL84 (NCI 4.1, ΔV̂TEC z=5.8 + 14 TECU DCB jump) and ALMJ (NCI 10.6, ROTI |z|=15) flagged vs median 0.76; no extra hardware, no historical baseline, localizes anomalies.

## Key technical points (ZH)
- **思路：** 将全州 CORS 网络视作一个分布式传感器；局部欺骗/干扰源打破邻站保持的空间相干性。
- **NCF：** k 近邻图（k=6）+ 四个空间一致性度量（邻域残差、空间梯度、留一预测残差、图平滑度）→ 网络一致性指数（NCI）。
- **可观测量：** A 类（可插值）：ΔV̂TEC、ROTI；B 类（佐证）：C/N₀、码多径、单点定位散布。
- **数据：** 阿拉巴马 DOT，50 站，GPS+GLONASS+Galileo+BeiDou，2026 年 7 月 5–6 日，每站每日 2880 历元。
- **发现：** AL84（NCI 4.1，ΔV̂TEC z=5.8 + 14 TECU 差分码偏跳变）与 ALMJ（NCI 10.6，ROTI |z|=15）相对中位 0.76 被标记；无额外硬件、无历史基线、可定位异常。

## Why it matters / what's new (EN)
GNSS integrity is usually monitored per-receiver or via short baselines that difference atmospheric effects away; this paper's contribution is the opposite move — use the *spatial* atmospheric field itself, across tens-of-kilometers CORS spacing, as the consistency reference, turning existing infrastructure into a regional integrity observatory at zero hardware cost. Together with the swarm-spoofing entry (`2026-08-12_arxiv-rigid-covert-gnss-spoofing-uav-swarms`), it establishes a GNSS/PNT-security thread in the satellite bin: one paper on attacking positioning, one on detecting the attack at network scale. Its graph-based spatial-anomaly detection is directly reusable for any dense reference-station deployment. Novelty 3 for a validated, deployable framework on real four-constellation data.

## Why it matters / what's new (ZH)
GNSS 完好性通常按接收机监测，或经短基线将大气效应差分抵消；本文的贡献是相反的动作——将*空间*大气场本身（跨数十公里 CORS 间距）用作一致性参照，把既有基础设施变为零硬件成本的区域完好性观测台。与集群欺骗条目（`2026-08-12_arxiv-rigid-covert-gnss-spoofing-uav-swarms`）一起，在卫星 bin 中确立了 GNSS/PNT 安全线索：一篇讲攻击定位、一篇讲在网络尺度检测攻击。其基于图的空间异常检测可直接复用于任意密集参考站部署。基于真实四星座数据的可部署框架，novelty 3。

## Images
![Statewide Network Consistency Index map (6 vs 5 July 2026) over ΔV̂TEC and ROTI, with AL84 and ALMJ flagged | 全州网络一致性指数图（2026 年 7 月 6 日对 5 日），基于 ΔV̂TEC 与 ROTI，标记 AL84 与 ALMJ](https://arxiv.org/html/2608.08831v1/figures/network_consistency_index_map.png)
