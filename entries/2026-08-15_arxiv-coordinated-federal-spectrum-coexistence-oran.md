---
id: 2026-08-15_arxiv-coordinated-federal-spectrum-coexistence-oran
date_published: 2026-08-07
date_found: 2026-08-15
type: academic-paper
technology: cellular
title_en: "Coordinated Spectrum Coexistence Across Heterogeneous Commercial and Federal Services (AMRA / QGAA, O-RAN rApp)"
title_zh: "跨异构商用与联邦业务的协同频谱共存：AMRA/QGAA 多业务资源分配与 O-RAN rApp 协调"
url: "https://arxiv.org/abs/2608.07789"
source_quality: full
topics: [spectrum-sharing, federal-spectrum, 3.5GHz, radar-coexistence, radionavigation, O-RAN, rApp, MINLP, Sionna-RT]
topic_primary: cellular-spectrum
topics_secondary: [open-ran, 5g-nr]
novelty_score: 3
---

## Summary (EN)
Nguyen, Testolina, Johari, Polese and Melodia (Institute for Intelligent Networked Systems, Northeastern University; arXiv 7 Aug 2026; NSF CNS-2434081 + National Spectrum Consortium OT W15QKN-21-9-5599) formulate **four-service dynamic sharing of the congested 2.7–3.7 GHz federal band cluster** — cellular (3GPP NR PRB grid), RF sensing, radionavigation and radiolocation radar — as a single centralized resource-allocation problem, in contrast to the static partitions and CBRS-style coarse-grained tiers that leave spectrum idle at cellular peak. The coordinator is envisioned as an **rApp on the O-RAN Non-RT RIC** operating on seconds-to-minutes policy timescales, with an extended coordination plane through which sensing/navigation nodes publish activity schedules and accept PRB grants.

The joint problem grants each PRB in a shared pool (centred at 3.5 GHz, 20–100 MHz wide) to at most one service, schedules PRBs from transmitters to endpoints, and allocates power, maximizing weighted cellular sum-rate subject to a sensing SINR floor (γ_sen, default 3 dB), a **CRLB-based position-error-bound (PEB) constraint for radionavigation** (ε_max, default 2.83 m — the authors claim the first framework to admit navigation as an explicit coexisting service with a positioning-QoS constraint), radar duty cycles and power budgets. It is an NP-hard MINLP (0/1-knapsack reduction). Two solvers are given: **AMRA** (alternating multi-service resource allocation: binary-LP PRB assignment → binary-LP scheduling with affine QoS surrogates → SCA power allocation; O(N_iter·N_sca·(S_c·N·T)^3.5)) and **QGAA** (QoS-aware greedy alternating allocation: reserve PRBs for QoS violators, greedy marginal-benefit assignment, intra-service scheduling, water-filling-style power repair; linear in PRBs × slots × links).

Evaluation uses the **BostonTwin** urban digital twin (tile BOS_G_5, ~11 km × 11 km) with **Sionna-RT** ray tracing, PPP deployments of 60/100 cellular Tx/Rx per km² and 30/50 per km² for each federal service, T = 10 slots of 1 ms, duty cycles (1, 0.2, 0.1, 0.1). AMRA at 50 MHz of *shared* spectrum already exceeds *dedicated* 20 MHz cellular; at 100 MHz pooled it matches or slightly beats a dedicated 100 MHz cellular allocation while simultaneously serving sensing, navigation and radar. QGAA tracks AMRA within roughly 10 % but runs in ~1 s at every density (AMRA: ~0.8 s → ~6 s → ~20 s for density factor ζ = 1/2/3). Tightening γ_sen erodes cellular sum-rate roughly linearly, while tightening ε_max produces a nonlinear "convex collapse".

## Summary (ZH)
Nguyen、Testolina、Johari、Polese 与 Melodia（美国东北大学智能网络系统研究所；2026 年 8 月 7 日 arXiv；NSF CNS-2434081 + 国家频谱联盟 OT W15QKN-21-9-5599）把**拥塞的 2.7–3.7 GHz 联邦频段簇内四类业务的动态共享**——蜂窝（3GPP NR PRB 网格）、射频感知、无线电导航、无线电定位雷达——建模为单一集中式资源分配问题，区别于在蜂窝峰值时段让频谱闲置的静态划分与 CBRS 式粗粒度分层。协调器设想为 **O-RAN 非实时 RIC 上的 rApp**，工作在秒到分钟的策略时标，并通过扩展协调面让感知/导航节点发布活动计划、接受 PRB 授权。

联合问题把共享池（中心 3.5 GHz，20–100 MHz 宽）内每个 PRB 最多授予一类业务，再从发射机向终端调度 PRB 并分配功率，目标是最大化加权蜂窝和速率，约束包括感知 SINR 下限（γ_sen，默认 3 dB）、**基于 CRLB 的无线电导航定位误差界（PEB）约束**（ε_max，默认 2.83 m——作者称这是首个把导航作为显式共存业务并施加定位 QoS 约束的框架）、雷达占空比与功率预算。该问题为 NP 难 MINLP（可归约自 0/1 背包）。给出两种求解器：**AMRA**（交替多业务资源分配：二元 LP 的 PRB 指派 → 带仿射 QoS 代理的二元 LP 调度 → SCA 功率分配；复杂度 O(N_iter·N_sca·(S_c·N·T)^3.5)）与 **QGAA**（QoS 感知贪心交替分配：先为 QoS 违约者预留 PRB、按边际收益贪心指派、业务内调度、注水式功率修复；对 PRB × 时隙 × 链路线性）。

评估采用 **BostonTwin** 城市数字孪生（BOS_G_5 瓦片，约 11 km × 11 km）与 **Sionna-RT** 射线追踪，PPP 部署密度为蜂窝 60/100 Tx/Rx 每 km²、各联邦业务 30/50 每 km²，T = 10 个 1 ms 时隙，占空比 (1, 0.2, 0.1, 0.1)。AMRA 在 50 MHz *共享*频谱下已超过 *专用* 20 MHz 蜂窝；在 100 MHz 池化下与专用 100 MHz 蜂窝持平或略优，同时还服务感知、导航与雷达。QGAA 与 AMRA 差距约 10 % 以内，但在任何密度下约 1 s 完成（AMRA 在密度因子 ζ = 1/2/3 下约 0.8 s → 6 s → 20 s）。收紧 γ_sen 使蜂窝和速率近似线性下降，收紧 ε_max 则出现非线性"凸塌陷"。

## Key technical points (EN)
- Services: cellular (2–4 GHz), RF sensing (3.1–3.7 GHz), radionavigation and radiolocation (2.7–5.65 GHz); shared pool centred at 3.5 GHz; NR PRB granularity, proportional-fair-style cellular weights.
- Decision variables: PRB grant x_i^(n)(t) ∈ {0,1}, link scheduling a_{i,k,u}^(n)(t) ∈ {0,1}, power p_{i,k}^(n)(t); inter-service exclusivity Σ_i x_i^(n)(t) ≤ 1; sensing SINR ≥ γ_sen; time-averaged CRLB PEB ≤ ε_max; per-service duty cycles.
- AMRA: three-stage alternating decomposition (assignment / scheduling / SCA power), converges in a few outer iterations; QGAA: four-step greedy per slot with QoS reservation and power repair, O(|N|·T·Σ_i|S_i||U_i|).
- Coordinator sits in the O-RAN Non-RT RIC as an rApp (policy timescale) — the authors position QGAA's linear cost as compatible with xApp-speed reaction; CBRS cited as the limited-dynamics predecessor.
- BostonTwin + Sionna-RT site-specific evaluation; CVX/Mosek/Gurobi for AMRA sub-problems; sharing yields strictly more cellular capacity than a narrower exclusive allocation while meeting all federal QoS floors.

## Key technical points (ZH)
- 业务：蜂窝（2–4 GHz）、射频感知（3.1–3.7 GHz）、无线电导航与定位（2.7–5.65 GHz）；共享池中心 3.5 GHz；NR PRB 粒度，比例公平式蜂窝权重。
- 决策变量：PRB 授权 x_i^(n)(t) ∈ {0,1}、链路调度 a_{i,k,u}^(n)(t) ∈ {0,1}、功率 p_{i,k}^(n)(t)；业务间互斥 Σ_i x_i^(n)(t) ≤ 1；感知 SINR ≥ γ_sen；时间平均 CRLB PEB ≤ ε_max；各业务占空比。
- AMRA：三阶段交替分解（指派 / 调度 / SCA 功率），少数外层迭代即收敛；QGAA：每时隙四步贪心，含 QoS 预留与功率修复，O(|N|·T·Σ_i|S_i||U_i|)。
- 协调器以 rApp 形式驻留 O-RAN 非实时 RIC（策略时标）——作者认为 QGAA 的线性开销可兼容 xApp 级反应速度；CBRS 被引为动态性有限的前身。
- BostonTwin + Sionna-RT 场址级评估；AMRA 子问题用 CVX/Mosek/Gurobi；在满足全部联邦 QoS 下限的同时，共享严格优于更窄的独占分配。

## Why it matters / what's new (EN)
The KB's spectrum-sharing thread so far covers terrestrial/NTN FR3 coexistence (2026-06-13) and the FCC upper C-band auction rules (2026-08-05); this is the first entry with an **explicit multi-service optimization for the US 2.7–3.7 GHz federal cluster** that treats radionavigation positioning accuracy (CRLB PEB) as a hard coexistence constraint alongside radar and sensing — exactly the band family now under NTIA repurposing study (see the 2026-08-15 NTIA 4.4 GHz entry). Placing the coordinator in the O-RAN Non-RT RIC ties dynamic federal sharing to the O-RAN control plane rather than to a CBRS-style external SAS, and the QGAA heuristic gives a runtime-feasible path. Limits: simulation-only (BostonTwin/Sionna-RT), homogeneous PPP deployments, and no learning-based or distributed variant yet — flagged by the authors as future work.

## Why it matters / what's new (ZH)
知识库的频谱共享线索此前有地面/NTN FR3 共存（2026-06-13）与 FCC 上 C 波段拍卖规则（2026-08-05）；本条是首个针对**美国 2.7–3.7 GHz 联邦频段簇的显式多业务优化**，把无线电导航定位精度（CRLB PEB）与雷达、感知一起作为硬共存约束——正是 NTIA 当前重新规划研究的频段家族（参见 2026-08-15 NTIA 4.4 GHz 条目）。把协调器放进 O-RAN 非实时 RIC，使动态联邦共享绑定于 O-RAN 控制面而非 CBRS 式外部 SAS，QGAA 启发式给出运行时可行路径。局限：仅仿真（BostonTwin/Sionna-RT）、同质 PPP 部署，尚无学习型或分布式变体——作者列为后续工作。

## Images
![Multi-service coexistence architecture with the O-RAN Non-RT RIC rApp coordinator | 以 O-RAN 非实时 RIC rApp 为协调器的多业务共存架构](https://arxiv.org/html/2608.07789v1/system_model_updated.png)
![BostonTwin deployment region with cellular, sensing, navigation and radar nodes | 含蜂窝、感知、导航与雷达节点的 BostonTwin 部署区域](https://arxiv.org/html/2608.07789v1/system_diagram_multiservice.png)
