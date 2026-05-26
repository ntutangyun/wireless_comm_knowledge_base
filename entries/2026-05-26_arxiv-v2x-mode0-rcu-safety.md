---
id: 2026-05-26_arxiv-v2x-mode0-rcu-safety
date_published: 2026-05-25
date_found: 2026-05-26
type: academic-paper
title_en: "Mode 0: A New 3GPP V2X Resource Allocation Category for Roadside Computing Unit-Assisted Safety Communication"
title_zh: "Mode 0：面向路侧计算单元辅助安全通信的 3GPP V2X 新型资源分配类别"
url: "https://arxiv.org/abs/2605.25431"
source_quality: abstract_only
topics: [5G-NR, V2X, sidelink, resource-allocation, road-safety]
topic_primary: 5g-nr
topics_secondary: [mec, cellular-ai]
novelty_score: 3
---

## Summary (EN)
This paper argues that the current 3GPP V2X resource-allocation taxonomy is structurally incomplete and proposes a new category, "Mode 0," built around a third network entity: the Roadside Computing Unit (RCU). Today's NR sidelink V2X defines two entity classes (base station and vehicle UE) and the familiar Mode 1 (base-station-scheduled) and Mode 2 (autonomous UE) allocation. The authors show this binary split fails at the edges: base-station scheduling (Mode 1) saturates under high-density traffic, while autonomous UE allocation (Mode 2) has no environmental awareness and cannot give early warning for occluded road users or large-scale hazards.

Mode 0 introduces the RCU — an infrastructure node owned by traffic authorities that integrates elevated sensing ("Seeing"), sidelink communication ("Speaking"), and local computation ("Thinking") — as a central coordination point. The mode is further split into sub-modes by the capability of the participating UEs: Mode 0a (passive-only UEs, the minimum baseline), Mode 0b (mixed), and Mode 0c (active-capable UEs, the optimal configuration). This lets a deployment degrade gracefully when only legacy/passive vehicles are present and reach full performance as active-capable vehicles join.

The proposal is evaluated with Multi-Agent Proximal Policy Optimization (MAPPO) over 15 simulation runs. Mode 0a reaches a Nash coordination equilibrium as a baseline; Mode 0c delivers a Pareto improvement across both traffic classes, reporting packet-delivery ratios of 0.999 (M0) and 0.998 (M1) at load ≤ 1, and is the only configuration that lifts worst-case latency to the level the authors define as meeting structural latency-safety requirements.

## Summary (ZH)
本文认为当前 3GPP V2X 的资源分配分类在结构上不完整，提出一个新类别 "Mode 0"，并围绕第三类网络实体——路侧计算单元（RCU）构建。当前 NR sidelink V2X 定义了两类实体（基站与车载 UE），以及大家熟悉的 Mode 1（基站调度）与 Mode 2（UE 自主）分配。作者指出这种二元划分在边界处失效：基站调度（Mode 1）在高密度交通下饱和，UE 自主分配（Mode 2）缺乏环境感知，无法对被遮挡的道路参与者或大范围风险给出预警。

Mode 0 引入 RCU——由交通主管部门拥有的基础设施节点，集成高位感知（"看"）、sidelink 通信（"说"）与本地计算（"想"），作为中心协调点。该模式进一步按参与 UE 的能力分为子模式：Mode 0a（仅被动 UE，最低基线）、Mode 0b（混合）、Mode 0c（具备主动能力的 UE，最优配置）。这样在仅有传统/被动车辆时可优雅降级，在具备主动能力的车辆加入后达到完整性能。

该方案用多智能体近端策略优化（MAPPO）在 15 次仿真中评估。Mode 0a 作为基线达到纳什协调均衡；Mode 0c 在两个流量类别上实现帕累托改进，报告在负载 ≤ 1 时分组投递率分别为 0.999（M0）与 0.998（M1），且是唯一将最坏情况时延提升至作者所定义"满足结构性时延安全要求"水平的配置。

## Key technical points (EN)
- Adds a third V2X entity — the **Roadside Computing Unit (RCU)** — alongside base station and vehicle UE; "Seeing / Speaking / Thinking" infrastructure owned by traffic authorities.
- **Mode 0** complements Mode 1 (gNB-scheduled, saturates at high density) and Mode 2 (autonomous UE, no environmental awareness).
- Capability-tiered sub-modes: **0a** (passive UEs / baseline) → **0b** (mixed) → **0c** (active-capable / optimal), enabling graceful degradation.
- Evaluated with **MAPPO** over 15 runs; Mode 0c is a Pareto improvement: PDR 0.999 (M0) / 0.998 (M1) at load ≤ 1, and the only config meeting the defined worst-case latency-safety bound.

## Key technical points (ZH)
- 在基站与车载 UE 之外新增第三类 V2X 实体 **路侧计算单元（RCU）**；由交通主管部门拥有的"看 / 说 / 想"基础设施。
- **Mode 0** 补足 Mode 1（gNB 调度，高密度下饱和）与 Mode 2（UE 自主，缺乏环境感知）。
- 按能力分级的子模式：**0a**（被动 UE / 基线）→ **0b**（混合）→ **0c**（具主动能力 / 最优），支持优雅降级。
- 用 **MAPPO** 在 15 次仿真中评估；Mode 0c 为帕累托改进：负载 ≤ 1 时 PDR 0.999（M0）/ 0.998（M1），且是唯一满足所定义最坏时延安全界的配置。

## Why it matters / what's new (EN)
The contribution is a conceptual reframing of the 3GPP V2X resource-allocation model rather than a point optimization: it names the gap left by Mode 1 / Mode 2 and fills it with an infrastructure-coordinated mode whose sub-tiers track UE capability. For the KB this is a fresh angle on NR sidelink V2X — most cellular-V2X work in the literature tunes Mode 2 sensing-based selection, whereas this proposes a new category and a new entity (the RCU) that blends edge sensing/compute with sidelink scheduling, sitting at the intersection of 5G NR V2X and edge computing.

## Why it matters / what's new (ZH)
其贡献是对 3GPP V2X 资源分配模型的概念性重构，而非局部优化：它指出 Mode 1 / Mode 2 留下的空白，并用一个由基础设施协调、子层级随 UE 能力变化的新模式来填补。对 KB 而言，这是 NR sidelink V2X 的新视角——文献中多数蜂窝 V2X 工作在调优 Mode 2 基于感知的资源选择，而本文提出一个新类别和新实体（RCU），将边缘感知/计算与 sidelink 调度融合，处于 5G NR V2X 与边缘计算的交叉点。
