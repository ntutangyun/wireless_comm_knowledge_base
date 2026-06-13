---
id: 2026-06-13_arxiv-modular-multidomain-digital-twin-6g
date_published: 2026-06-11
date_found: 2026-06-13
technology: cellular
type: academic-paper
title_en: "Modular Multi-Domain Digital Twin Architecture: Sustainable Intent-Driven 6G Management"
title_zh: "模块化多域数字孪生架构：可持续的意图驱动 6G 管理"
url: "https://arxiv.org/abs/2606.13069"
source_quality: full
topics: [6G, digital-twin, network-digital-twin, O-RAN, intent-driven, green-networking, energy-efficiency]
topic_primary: 6g-vision
topics_secondary: [open-ran, cellular-ai]
novelty_score: 2
---

## Summary (EN)

This paper (Buzcu, Pakula, Keskin, Finarelli, Rizzo, Zeydan, Baranda, Alcazar-Fernandez, Velazquez-Martinez, Contreras, Kedar, Dvir, Kryszkiewicz — a multi-institution European group) tackles a structural problem in 6G management: future networks span heterogeneous domains (RAN, transport, core, edge-cloud), and building a single monolithic end-to-end digital twin to manage them is computationally prohibitive. Instead of one giant simulator, the authors propose a **modular multi-domain digital-twin architecture** in which a DT Orchestrator dynamically composes domain-specific twin modules on demand in response to "what-if" queries — identifying the relevant simulators, invoking them with the right parameters, and consolidating their outputs, rather than maintaining a continuous full-network simulation.

The architecture is built from named components: a **DT Orchestrator** (entry point, with a DT Resolver and DT Instantiator), a **DT Manager** (central coordination — Data Adaptor, ML/RL Sandbox, DT Executor), a **DT Repository** holding versioned virtual models across domains, a **DT Registry** governing lifecycle/versioning, and a **Data Continuum** that synchronises physical-infrastructure state with the virtual models. The design lets Network Digital Twins deliver what-if analysis, AI-assisted optimisation, and risk-free validation before control actions touch the live network.

The paper grounds the architecture in a green-networking use case that couples a RAN DT module (5G base-station topology, stochastic-mobility traffic dynamics, power-consumption modelling) with an energy simulator that runs a two-stage greedy solar-allocation heuristic: stage 1 scores candidate base stations by utility under critical system states, stage 2 temporally dispatches solar energy to the highest-demand nodes. The DT Manager passes RAN states into the energy simulator and consolidates the recommendations.

Evaluated on real-world data — 105 base stations in Poznań, Poland (locations from a BTS database, grid data from ENTSO-E, solar generation from renewables.ninja, peak PV 0.608 kW/panel) — coordinated optimisation achieves a **28.5% reduction in daily grid energy consumption with 32 solar panels** (the diminishing-returns threshold), identifying 17 base stations as both coverage-active and high-priority solar candidates. A North Africa scenario hits its diminishing-returns threshold earlier, at 28 panels.

## Summary (ZH)

本文（Buzcu、Pakula、Keskin、Finarelli、Rizzo、Zeydan、Baranda 等多机构欧洲团队）针对 6G 管理的一个结构性问题：未来网络横跨异构域（RAN、传输、核心、边缘云），为统一管理而构建单一的端到端整体数字孪生在算力上不可行。作者提出**模块化多域数字孪生架构**：由 DT Orchestrator 根据"假设分析"查询按需动态组合各域专用孪生模块——识别相关模拟器、以正确参数调用、汇总其输出，而非维持一个连续的全网仿真。

架构由具名组件构成：**DT Orchestrator**（入口，含 DT Resolver 与 DT Instantiator）、**DT Manager**（中央协调——Data Adaptor、ML/RL 沙箱、DT Executor）、跨域保存版本化虚拟模型的 **DT Repository**、管理生命周期/版本的 **DT Registry**，以及将物理基础设施状态与虚拟模型同步的 **Data Continuum**。该设计使网络数字孪生能在控制动作触及实网前提供假设分析、AI 辅助优化与无风险验证。

论文以绿色组网用例落地架构：将 RAN DT 模块（5G 基站拓扑、随机移动性流量动态、功耗建模）与运行两阶段贪心太阳能分配启发式的能耗模拟器耦合——阶段一按关键系统状态下的效用为候选基站打分，阶段二按时序将太阳能调度给最高需求节点。DT Manager 将 RAN 状态传入能耗模拟器并汇总建议。

在真实数据上评估——波兰波兹南 105 个基站（位置来自 BTS 数据库、电网数据来自 ENTSO-E、太阳能发电来自 renewables.ninja、单板峰值 0.608 kW）——协同优化以 32 块太阳能板（收益递减阈值）实现**日电网能耗下降 28.5%**，识别出 17 个既覆盖活跃又是高优先太阳能候选的基站。北非场景的收益递减阈值更早，为 28 块板。

## Key technical points (EN)

- **Core idea:** query-driven modular DT composition via a DT Orchestrator — avoid one monolithic end-to-end twin; instantiate domain-specific modules on demand.
- **Components:** DT Orchestrator (Resolver + Instantiator), DT Manager (Data Adaptor / ML-RL Sandbox / DT Executor), DT Repository (versioned models), DT Registry (lifecycle), Data Continuum (physical↔virtual sync).
- **Use case:** RAN DT module + energy simulator; two-stage greedy solar-allocation heuristic (utility scoring → temporal dispatch).
- **Data:** 105 BS Poznań (BTS DB locations, ENTSO-E grid, renewables.ninja PV, 0.608 kW/panel peak); 25 active BS in the Algorithm-25 scenario.
- **Result:** 28.5% daily grid-consumption reduction at 32 panels; 17 BS dual-flagged (coverage + solar); North Africa threshold at 28 panels.

## Key technical points (ZH)

- **核心思想：** 经 DT Orchestrator 的查询驱动模块化孪生组合——避免单一端到端整体孪生；按需实例化各域模块。
- **组件：** DT Orchestrator（Resolver + Instantiator）、DT Manager（Data Adaptor / ML-RL 沙箱 / DT Executor）、DT Repository（版本化模型）、DT Registry（生命周期）、Data Continuum（物理↔虚拟同步）。
- **用例：** RAN DT 模块 + 能耗模拟器；两阶段贪心太阳能分配启发式（效用打分→时序调度）。
- **数据：** 波兹南 105 基站（BTS 数据库位置、ENTSO-E 电网、renewables.ninja 光伏、单板峰值 0.608 kW）；Algorithm-25 场景 25 个活跃基站。
- **结果：** 32 块板时日电网能耗降 28.5%；17 个基站双标记（覆盖 + 太阳能）；北非阈值 28 块板。

## Why it matters / what's new (EN)

The KB already holds O-RAN digital-twin work (OpenTwin, 2605.24662) and a cluster of cellular energy-optimisation entries (COSMO 2606.05012, AI cell on/off 2606.05019/2606.05755, BeGREEN). This paper's contribution sits one level up: rather than a single-domain twin or a point energy-saver, it proposes the **orchestration layer** that composes per-domain twins on demand and uses the green-networking case only as a concrete instantiation. The modular query-driven composition (avoiding the monolithic-twin scalability wall) is the novel architectural claim; the 28.5% solar-coordination number is the supporting evidence. Relevant to the intent-driven-management thread of 6g-vision and the AI-assisted-optimisation side of cellular-ai.

## Why it matters / what's new (ZH)

KB 已有 O-RAN 数字孪生工作（OpenTwin 2605.24662）与一组蜂窝能效优化条目（COSMO 2606.05012、AI 小区开关 2606.05019/2606.05755、BeGREEN）。本文贡献高一层级：不是单域孪生或单点节能器，而是提出按需组合各域孪生的**编排层**，并仅以绿色组网用例作为具体实例化。模块化查询驱动组合（规避整体孪生的可扩展性瓶颈）是其新颖的架构主张；28.5% 太阳能协同数字是支撑证据。与 6g-vision 的意图驱动管理线索及 cellular-ai 的 AI 辅助优化面相关。

## Images
![Modular multi-domain orchestration architecture | 模块化多域编排架构](https://arxiv.org/html/2606.13069v1/x1.png)
![RAN DT + energy simulator interaction | RAN 数字孪生与能耗模拟器交互](https://arxiv.org/html/2606.13069v1/x3.png)
![Energy savings vs solar panel count | 能耗节省与太阳能板数量关系](https://arxiv.org/html/2606.13069v1/figures/peak_shaving_chart.png)
