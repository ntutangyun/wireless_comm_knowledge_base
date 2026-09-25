---
id: 2026-09-25_arxiv-haps-coverage-hard-to-reach-areas
date_published: 2026-09-04
date_found: 2026-09-25
type: academic-paper
technology: cellular
title_en: "Performance Evaluation of HAPS-enabled Coverage Enhancement in Hard-to-Reach Areas"
title_zh: "高空平台站（HAPS）用于难触达区域覆盖增强的性能评估"
url: "https://arxiv.org/abs/2609.05067"
source_quality: full
topics: [HAPS, NTN, stochastic-geometry, coverage-enhancement, IMT-2030, directional-beamforming]
topic_primary: ntn
topics_secondary: [6g-vision]
novelty_score: 2
---

## Summary (EN)

This paper (KAUST / Maynooth University) uses stochastic geometry to analyze how a constellation of High Altitude Platform Stations (HAPS) — stratospheric radio stations at 20-50 km altitude, standardized as "HAPS as IMT base stations" (HIBS) — can fill coverage holes in areas where terrestrial network (TN) deployment is geographically infeasible: the Amazon rainforest, Mediterranean islands, deserts, and post-disaster zones, where terrestrial networks reach only areas near transportation lines or coastlines, leaving coverage holes the authors say existing literature typically overlooks. The authors model a hard-to-reach area where terrestrial cellular infrastructure exists only at the region's perimeter, then deploy a HAPS constellation with directional antennas over the gap, deriving closed-form downlink (DL) and uplink (UL) coverage-probability expressions as a function of a user equipment's (UE) location inside the hole, the number of HAPSs, antenna beamwidth, and HAPS altitude.

The analysis distinguishes UEs near the perimeter (covered by both TNs and HAPSs) from UEs at the center of the hard-to-reach area (covered only by HAPSs, with interference dominated by other HAPSs' side lobes). Simulation results validate the analytical framework against Monte Carlo simulation (using a random footprint-association policy as a robustness check, finding under 0.02 gap from the uniform off-boresight-angle approximation) and translate the math into deployment guidelines: at a 0 dB SINR decoding threshold, achieving even 0.5 downlink coverage probability at the center of the hole needs at least 32 HAPSs when beamwidth (half 3-dB beamwidth) is wide (>20°); with narrower beams, at least 32 (5°) or 26 (2.5°) HAPSs are needed to reach 0.6. At a more permissive -10 dB threshold, reaching 0.9 downlink coverage probability needs 18 HAPSs with an 80° (wide) beamwidth, but only 8 HAPSs with a 2.5° (narrow) beamwidth — showing that beamwidth and decoding-threshold assumptions trade directly against fleet size. At N=16, coverage at the hole's center decreases as HAPS altitude increases, because path loss rises.

## Summary (ZH)

本文（沙特阿卜杜拉国王科技大学 KAUST 与爱尔兰梅努斯大学合作）采用随机几何方法，分析由高空平台站（HAPS，位于平流层 20-50 公里高度的无线电台，标准化后称为"作为 IMT 基站的 HAPS"，即 HIBS）组成的星座如何填补地面网络（TN）因地理条件无法部署区域的覆盖空洞——例如亚马逊雨林、地中海岛屿、沙漠以及灾后地区，这些地区地面网络仅能覆盖靠近交通线或海岸线的区域，由此留下的覆盖空洞据作者称通常被现有文献忽视。作者构建了一个"难触达区域"模型：该区域仅在其边缘存在地面蜂窝基础设施，随后在覆盖空洞上方部署配备定向天线的 HAPS 星座，推导出下行（DL）与上行（UL）覆盖概率的闭式表达式，作为用户设备（UE）在空洞内位置、HAPS 数量、天线波束宽度及 HAPS 高度的函数。

分析区分了靠近边缘的 UE（同时受 TN 与 HAPS 覆盖）与位于难触达区域中心的 UE（仅受 HAPS 覆盖，其干扰主要来自其他 HAPS 的旁瓣）。仿真结果通过蒙特卡洛仿真验证了解析框架（并以随机足迹关联策略作为稳健性检验，发现与均匀离轴角近似的差距小于 0.02），并将数学结果转化为部署指南：在 0 dB 的 SINR 判决门限下，要在空洞中心达到哪怕 0.5 的下行覆盖概率，波束（半功率 3 dB 波束宽度）较宽（>20°）时至少需要 32 个 HAPS；要达到 0.6，5° 波束需至少 32 个、2.5° 波束需至少 26 个 HAPS；在更宽松的 -10 dB 门限下，要达到 0.9 的下行覆盖概率，80°（宽）波束需要 18 个 HAPS，而 2.5°（窄）波束仅需 8 个——表明波束宽度与判决门限假设可直接换取 HAPS 数量的减少。在 N=16 时，随 HAPS 高度增加，路径损耗加重，空洞中心的覆盖概率随之下降。

## Key technical points (EN)

- Stochastic-geometry model of a hard-to-reach hard region bounded by a perimeter of terrestrial base stations (TBSs), with a HAPS constellation deployed above the gap using directional antennas.
- Derives closed-form DL and UL coverage-probability expressions as functions of UE location, HAPS count, beamwidth, and altitude; validates against Monte Carlo simulation.
- At τ_DL = 0 dB: ≥32 HAPSs needed for 0.5 DL coverage probability at wide beamwidth (>20°); with narrower beams, at least 32 (5°) or 26 (2.5°) HAPSs to reach 0.6.
- At τ_DL = -10 dB: 18 HAPSs (80° beamwidth) vs. 8 HAPSs (2.5° beamwidth) needed for 0.9 DL coverage probability — beamwidth/fleet-size tradeoff.
- Random footprint-association policy (each interfering HAPS aligns its beam toward a randomly chosen UE in its own footprint) deviates from the uniform off-boresight-angle approximation by less than 0.02 in coverage probability, supporting the tractability of the simpler model.
- At N=16, coverage probability at the hole's center decreases as HAPS altitude increases, because path loss rises.

## Key technical points (ZH)

- 构建了以地面基站（TBS）边缘为界的难触达区域随机几何模型，在覆盖空洞上方部署配备定向天线的 HAPS 星座。
- 推导出下行与上行覆盖概率的闭式表达式，作为 UE 位置、HAPS 数量、波束宽度与高度的函数，并与蒙特卡洛仿真进行验证。
- 在 τ_DL = 0 dB 时：波束较宽（>20°）需至少 32 个 HAPS 才能达到 0.5 的下行覆盖概率；要达到 0.6，5° 需至少 32 个、2.5° 需至少 26 个 HAPS。
- 在 τ_DL = -10 dB 时：达到 0.9 的下行覆盖概率，80°（宽）波束需要 18 个 HAPS，2.5°（窄）波束仅需 8 个——体现了波束宽度与 HAPS 数量之间的权衡关系。
- 随机足迹关联策略（每个干扰 HAPS 将波束对准其自身足迹内随机选定的 UE）相对于均匀离轴角近似的覆盖概率偏差小于 0.02，佐证了简化模型的可行性。
- 在 N=16 时，随 HAPS 高度增加，路径损耗加重，空洞中心的覆盖概率随之下降。

## Why it matters / what's new (EN)

Existing HAPS entries in this KB address beamforming, RIS-vs-relay and multi-HAPS-vs-LEO comparisons; this paper instead gives closed-form DL/UL coverage probability for bounded hard-to-reach regions ringed by terrestrial infrastructure, a scenario the authors state is typically overlooked. The concrete HAPS-count-vs-beamwidth tradeoff numbers give network planners useful guidelines for HIBS deployment over rainforests, deserts, and disaster zones.

## Why it matters / what's new (ZH)

本知识库现有的HAPS条目涉及波束成形、RIS与中继对比以及多HAPS与LEO对比；本文则针对被地面基础设施环绕的有界难触达区域（作者称该场景通常被忽视），给出闭式下行/上行覆盖概率。文中给出的 HAPS 数量与波束宽度之间的具体权衡数字，为规划者在雨林、沙漠及灾区上方部署 HIBS 提供了实用指南。

## Images

![Illustration of the HAPS-based coverage solution for a hard-to-reach desert area (paper Fig. 1) | 面向难触达沙漠区域的 HAPS 覆盖方案示意图（论文图 1）](https://arxiv.org/html/2609.05067v1/HardToReachArea.png)
![Downlink coverage probability vs. number of HAPSs, by beamwidth and SINR threshold (paper Fig. 4) | 不同波束宽度与 SINR 门限下，下行覆盖概率随 HAPS 数量的变化（论文图 4）](https://arxiv.org/html/2609.05067v1/DL_Covpro_with_DB_NH.png)
