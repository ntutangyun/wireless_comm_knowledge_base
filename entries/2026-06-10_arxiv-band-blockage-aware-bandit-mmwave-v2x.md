---
id: 2026-06-10_arxiv-band-blockage-aware-bandit-mmwave-v2x
date_published: 2026-06-06
date_found: 2026-06-10
type: academic-paper
technology: cellular
title_en: "BAND: Blockage-Aware Non-stationary Dynamic Bandit for User Association in mmWave V2X Networks"
title_zh: "BAND：面向毫米波 V2X 网络用户关联的阻挡感知非平稳动态老虎机算法"
url: "https://arxiv.org/abs/2606.08118"
source_quality: full
topics: [V2X, mmWave, 5G-NR, user-association, contextual-bandit, blockage]
topic_primary: 5g-nr
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)
BAND (Weiqi Chi, Manabu Tsukada, U. Tokyo) tackles user association in dense millimeter-wave V2X deployments, where a vehicle must continually decide which of many nearby base stations to attach to while mobility and intermittent blockage make link quality swing rapidly. Conventional association relies on frequent CSI acquisition and centralized coordination, which generates heavy signaling overhead and reacts poorly to sudden blockages. BAND reframes the problem as a **non-stationary contextual bandit** solved fully online — no central coordinator and no offline training — using only the vehicle's own position and the (static) base-station locations.

Four mechanisms make the bandit blockage-aware. A **two-sided CUSUM change detector** monitors per-BS reward (rate) distributions and triggers a learner reset when a genuine distribution shift is detected, so the algorithm forgets stale statistics after a real environment change. A **proactive blockage detector** uses geometry-based Fresnel-zone prediction to suppress *transient* signal drops, preventing them from raising false CUSUM alarms. A **two-stage BS selection** step balances exploration of inactive base stations against UCB-driven exploitation of active ones (picking the highest UCB index). Finally a **dynamic BS-management** rule confines early exploration with distance-based initialization and promotes/demotes candidate base stations asymmetrically by cumulative reward drift. Every step runs locally on the vehicle with zero added air-interface signaling.

Evaluation uses a realistic urban scenario — a 550×540 m slice of Shibuya, Tokyo, with 69 densely deployed mmWave base stations, SUMO-driven traffic, and CDL channel modeling with ray tracing at 28 GHz / 4×4 arrays (3GPP TR 38.901 and TR 37.885 methodology). Against a hypercube contextual-bandit baseline (C-UCB), BAND delivers **~40% lower cumulative regret** at 200 steps and **33.1% higher network communication rate**, closing to within **4.2%** of a full-CSI maxRSRP oracle, and stays robust across 10–50% blockage rates, 50–100 MHz bandwidth, and varying transmit power.

## Summary (ZH)
BAND（Weiqi Chi、Manabu Tsukada，东京大学）研究密集毫米波 V2X 部署下的用户关联问题：车辆需在众多邻近基站中持续选择接入对象，而移动性与间歇性阻挡使链路质量剧烈波动。传统关联依赖频繁的 CSI 采集与集中式协调，信令开销大、对突发阻挡反应迟缓。BAND 将该问题重构为**非平稳上下文老虎机（contextual bandit）**，完全在线求解——无需中心协调器、无需离线训练——仅使用车辆自身位置与（静态的）基站位置。

四个机制使该老虎机具备阻挡感知能力：**双边 CUSUM 变点检测**监控各基站的奖励（速率）分布，在检测到真实分布漂移时触发学习器重置，从而在环境真正变化后遗忘过时统计；**主动阻挡检测**基于几何的菲涅尔区预测来抑制*瞬态*信号跌落，避免其引发 CUSUM 误报；**两阶段基站选择**在探索未激活基站与基于 UCB 利用已激活基站（选最高 UCB 指数）之间取得平衡；**动态基站管理**规则以基于距离的初始化约束早期探索，并按累计奖励漂移非对称地提升/降级候选基站。所有步骤均在车辆本地运行，不增加任何空口信令。

评估采用真实城市场景——东京涩谷 550×540 m 区域、69 个密集部署的毫米波基站、SUMO 驱动的交通流，以及 28 GHz / 4×4 阵列下带射线追踪的 CDL 信道建模（遵循 3GPP TR 38.901 与 TR 37.885 方法）。相比超立方上下文老虎机基线（C-UCB），BAND 在 200 步时累计遗憾降低**约 40%**、网络通信速率提升 **33.1%**，逼近全 CSI 的 maxRSRP 理想上界至 **4.2%** 以内，并在 10–50% 阻挡率、50–100 MHz 带宽与不同发射功率下保持稳健。

## Key technical points (EN)
- **Formulation**: user association as a **non-stationary contextual bandit**, solved online and distributedly (per-vehicle, local position + BS locations only, zero extra signaling).
- **CUSUM change detection**: two-sided cumulative-sum test on per-BS reward distributions triggers learner resets on genuine shifts.
- **Proactive blockage detection**: Fresnel-zone geometric prediction suppresses transient blockage drops so they don't false-trigger CUSUM.
- **Two-stage selection + dynamic BS management**: explore-inactive / exploit-active (UCB), distance-based init, asymmetric promote/demote of candidate BSs by reward drift.
- **Setup**: Shibuya 550×540 m, 69 mmWave BS, 28 GHz, 4×4, SUMO + CDL ray tracing; 3GPP TR 38.901 / TR 37.885.
- **Results**: ~**40%** regret reduction and **33.1%** rate gain vs C-UCB; **4.2%** gap to full-CSI oracle; robust across blockage 10–50%, BW 50–100 MHz, varied Tx power.

## Key technical points (ZH)
- **建模**：将用户关联建为**非平稳上下文老虎机**，在线、分布式求解（每车本地，仅用自身位置+基站位置，零额外信令）。
- **CUSUM 变点检测**：对各基站奖励分布做双边累计和检验，真实漂移时触发学习器重置。
- **主动阻挡检测**：菲涅尔区几何预测抑制瞬态阻挡跌落，避免误触发 CUSUM。
- **两阶段选择 + 动态基站管理**：探索未激活/利用已激活（UCB），基于距离的初始化，按奖励漂移非对称提升/降级候选基站。
- **场景**：涩谷 550×540 m、69 个毫米波基站、28 GHz、4×4、SUMO + CDL 射线追踪；3GPP TR 38.901 / TR 37.885。
- **结果**：相比 C-UCB 遗憾降低约 **40%**、速率提升 **33.1%**；距全 CSI 理想上界 **4.2%**；在阻挡 10–50%、带宽 50–100 MHz、不同发射功率下稳健。

## Why it matters / what's new (EN)
This is the KB's first mmWave-V2X mobility/user-association entry and complements the existing V2X resource-allocation work (`2026-05-26_arxiv-v2x-mode0-rcu-safety`) and the day's companion C-V2X scalability paper (`2026-06-10_arxiv-semantic-task-oriented-v2x-scalability`) on a different axis — *which base station to attach to* under blockage, rather than *what/how to transmit*. The novel piece is combining non-stationary bandit change-detection (CUSUM) with a *physics-informed* proactive blockage predictor (Fresnel-zone geometry) so transient blockages don't corrupt the online learner — a fully distributed, signaling-free association policy that nearly matches a full-CSI oracle.

## Why it matters / what's new (ZH)
这是 KB 中首个毫米波 V2X 移动性/用户关联条目，与现有的 V2X 资源分配工作（`2026-05-26_arxiv-v2x-mode0-rcu-safety`）及当日配套的 C-V2X 可扩展性论文（`2026-06-10_arxiv-semantic-task-oriented-v2x-scalability`）在不同维度互补——处理阻挡下*接入哪个基站*，而非*发送什么/如何发送*。其新意在于将非平稳老虎机的变点检测（CUSUM）与*物理启发*的主动阻挡预测（菲涅尔区几何）结合，使瞬态阻挡不会污染在线学习器——一种完全分布式、零信令、且性能逼近全 CSI 理想上界的关联策略。

## Images
![BAND system framework — distributed per-vehicle bandit with CUSUM change detection and Fresnel-zone blockage prediction | BAND 系统框架——分布式车端老虎机，含 CUSUM 变点检测与菲涅尔区阻挡预测](https://arxiv.org/html/2606.08118v1/x1.png)
![Cumulative regret vs learning steps — BAND vs C-UCB baseline and oracles | 累计遗憾随学习步数变化——BAND 对比 C-UCB 基线与理想上界](https://arxiv.org/html/2606.08118v1/x2.png)
