---
id: 2026-08-28_arxiv-sfc-aware-sagin-datalink-orchestration
date_published: 2026-08-27
date_found: 2026-08-28
type: academic-paper
title_en: "SFC-Aware Online Aggregated Data-Link Orchestration for SDN/NFV-Enabled SAGINs"
title_zh: "面向 SDN/NFV 空天地一体化网络的 SFC 感知在线聚合数据链编排"
url: "https://arxiv.org/abs/2608.26559"
technology: satellite
source_quality: full
topics: [SAGIN, SDN, NFV, SFC, A2S, NTN, civil-aviation, Iridium]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

Civil-aviation space-air-ground integrated networks (SAGINs) have to carry two very different kinds of traffic over the same aircraft: delay-sensitive cockpit safety services (CPDLC, ADS-B/C, VoIP-Safety) and bandwidth-hungry cabin services (passenger VoIP, web, video). The bearers available to an aircraft at any moment are heterogeneous and intermittent — air-to-air (A2A) relays, air-to-ground (A2G) links such as VDL Mode 2, HFDL, ATG and 5G-ATG, and air-to-satellite (A2S) links over legacy SATCOM, SwiftBroadband-Safety and LEO broadband. Ziyang Guo and Bing Du frame the access-side problem as SFC-aware online aggregated data-link orchestration under SDN/NFV: each request must be bound to an *access anchor* (an aircraft, a satellite, or a ground gateway) plus a bearer mode, which is the entry point into a service-function-chain domain that then applies preconfigured templates.

The paper's central idea is to make time itself a schedulable resource. **TEMP** (temporal elastic mapping and parking) treats onboard storage not as passive buffering but as a scheduled deferral: a request that has no good bearer *now* can be parked, provided its realization probability over a look-ahead window of W_pred slots clears a threshold and its residence stays inside a per-request cap and a per-aircraft buffer limit. Every active request receives exactly one of four actions per slot — NOW (bind immediately), TEMP (park for a future window), REJECT (deny a new arrival) or DROP (release a parked request that can no longer be legally held). The objective is lexicographic: protect service success first, then normalized access delay, then residual TEMP risk (forced drops, residence urgency, buffer pressure).

Because the exact model is a binary lexicographic MILP that cannot be solved per 0.2 s slot, the authors propose **MRSAR** (Model-Induced Risk and Scarcity-Aware Refinement). Rather than inventing a heuristic from scratch, MRSAR *derives* its signals from the optimization model: deferred-realization risk g_r = 1 − P_temp (the first-layer objective loss from parking instead of serving), residence urgency h_r, and two scarcity multipliers that inflate the price of a contended bearer or a contended TEMP buffer. These feed a valuation-based feasible construction, followed by bounded neighborhood refinement with three move types — Rescue (upgrade a TEMP/REJECT/DROP to a feasible NOW), Rebind (swap the anchor-bearer pair), and Exchange (jointly re-assign two competing requests) — accepted by a hierarchy-weighted gain that preserves the lexicographic priority.

Evaluation uses a realistic transatlantic scenario rather than a random graph: 513 commercial aircraft from real OAG flight schedules over the North Atlantic corridor, 66 Iridium satellites from STK ephemerides, and 20 ground gateways on both coasts, with per-slot adjacency regenerated from line-of-sight and link-budget constraints, 500 slots of 0.2 s each. At unit load MRSAR reaches roughly 92 % service success against Gurobi-MILP's 93 %, while FCFS-greedy and min-delay-greedy fall to 86 % and 84 %; at 1.4× load the spread widens to 71 % / 73 % vs 58 % / 55 %. Runtime drops from 2.6–10.6 s (Gurobi) to 0.7–3.2 s (MRSAR), a 3.5–4.0× speedup, with the optimality gap under 1 % at 10–20 active requests per slot and 1.5–2 % at 40–50. The ablation is the most informative result: removing TEMP costs 5–8 percentage points of success, far more than removing any single refinement move (1–3 points), and the look-ahead benefit saturates at W_pred ≈ 8–10 slots.

## Summary (ZH)

民航空天地一体化网络（SAGIN）必须在同一架飞机上承载两类差异极大的业务：时延敏感的驾驶舱安全业务（CPDLC、ADS-B/C、安全类 VoIP）与带宽饥渴的客舱业务（旅客 VoIP、网页、视频）。飞机在任一时刻可用的承载是异构且断续的——空空（A2A）中继、空地（A2G）链路（VDL Mode 2、HFDL、ATG、5G-ATG）以及经传统卫通、SwiftBroadband-Safety 与 LEO 宽带的空星（A2S）链路。Ziyang Guo 与 Bing Du 把接入侧问题建模为 SDN/NFV 下的 SFC 感知在线聚合数据链编排：每个请求须绑定到一个*接入锚点*（飞机、卫星节点或地面关口站）加一种承载模式，该组合即进入服务功能链域的入口，域内再按预置模板处理。

论文的核心思想是把时间本身变成可调度资源。**TEMP**（时间弹性映射与驻留）不把机载存储视为被动缓存，而视为一次有计划的延迟：当前没有合适承载的请求可以被"停放"，前提是它在 W_pred 个时隙前瞻窗内的实现概率超过门限，且驻留时长不超过每请求上限与每机缓冲上限。每个活跃请求每时隙恰好获得四种动作之一——NOW（立即绑定）、TEMP（停放待未来窗口）、REJECT（拒绝新到达请求）、DROP（释放已无法合法保留的停放请求）。目标函数按字典序分层：先保业务成功率，再压归一化接入时延，最后控制 TEMP 残余风险（强制丢弃、驻留紧迫度、缓冲压力）。

由于精确模型是二元字典序 MILP，无法在 0.2 s 的时隙内求解，作者提出 **MRSAR**（模型诱导的风险与稀缺感知精化）。MRSAR 不是凭空设计启发式，而是从优化模型中*导出*信号：延迟实现风险 g_r = 1 − P_temp（停放而非立即服务所损失的第一层目标）、驻留紧迫度 h_r，以及两个稀缺性乘子，用以抬高被争抢的承载与被争抢的 TEMP 缓冲的"价格"。这些信号驱动基于估值的可行解构造，随后是有界邻域精化，包含三类动作——Rescue（把 TEMP/REJECT/DROP 升级为可行的 NOW）、Rebind（更换锚点-承载对）、Exchange（联合重分配两个相互竞争的请求）——由保持字典序优先级的层级加权增益决定是否接受。

评估采用真实跨大西洋场景而非随机图：北大西洋走廊上取自真实 OAG 航班时刻表的 513 架商用飞机、由 STK 星历给出的 66 颗铱星、两岸各若干共 20 个地面关口站，逐时隙依据视距与链路预算重建邻接矩阵，共 500 个时隙、每隙 0.2 s。在单位负载下 MRSAR 达到约 92% 的业务成功率，Gurobi-MILP 为 93%，而先到先服务贪心与最小时延贪心分别跌至 86% 与 84%；在 1.4 倍负载下差距拉大为 71%/73% 对 58%/55%。运行时间从 Gurobi 的 2.6–10.6 s 降到 MRSAR 的 0.7–3.2 s，加速比 3.5–4.0×；每时隙 10–20 个活跃请求时最优性差距小于 1%，40–50 个时为 1.5–2%。消融实验最具信息量：去掉 TEMP 会损失 5–8 个百分点的成功率，远高于去掉任一单项精化动作（1–3 个百分点）；前瞻窗收益在 W_pred ≈ 8–10 时隙处饱和。

## Key technical points (EN)

- Problem: SFC-aware **access-side** orchestration for civil-aviation SAGIN — bind each request to an (anchor, bearer-mode) pair across A2A / A2G / A2S links; downstream SFC processing uses preconfigured templates.
- **TEMP** (temporal elastic mapping and parking): onboard storage as a *schedulable temporal resource*. Admission requires realization probability P_temp ≥ P_temp_min over a W_pred look-ahead window (typically 5–10 slots) plus residence ≤ W_max and per-aircraft buffer occupancy ≤ M_i.
- Four per-slot request actions: **NOW / TEMP / REJECT / DROP**; REJECT applies only to new arrivals, DROP only to carried-over TEMP requests.
- Lexicographic objective: J1 service success (NOW counts +1, TEMP counts P_temp) ≫ J2 normalized access delay (each request normalized by its own delay budget D_acc) ≫ J3 TEMP risk (forced drops + residence urgency + buffer pressure).
- **MRSAR** derives its heuristic signals from the model itself: deferred-realization risk g_r = 1 − P_temp, residence urgency h_r = (w_r+1)/W_max, combined urgency ξ_r = g_r + α_h·h_r; bearer scarcity λ_now and TEMP-buffer scarcity λ_temp inflate contended resources in the NOW/TEMP valuations.
- Bounded neighborhood refinement with three move types — Rescue, Rebind, Exchange — accepted by hierarchy-weighted gain Ψ = Ω1·ΔJ1 − Ω2·ΔJ2 − ΔJ3 with Ω1 ≫ Ω2 ≫ 1.
- Simulation: 513 aircraft (real OAG North Atlantic schedules), 66 Iridium satellites (STK ephemerides), 20 gateways; 500 slots × 0.2 s, 20-slot warm-up; load factor ρ ∈ {0.6, 0.8, 1.0, 1.2, 1.4}.
- Results: success 92 % (MRSAR) vs 93 % (Gurobi-MILP) vs 86 % / 84 % (greedy baselines) at ρ = 1.0; 71 % vs 73 % vs 58 % / 55 % at ρ = 1.4. Normalized delay 0.011 (MRSAR) vs 0.019 (FCFS) at ρ = 1.4.
- Runtime 0.7–3.2 s vs Gurobi 2.6–10.6 s → **3.5–4.0× speedup**; optimality gap < 1 % at 10–20 active requests/slot, 1.5–2 % at 40–50 (vs 6.8 and >8 points for the greedy baselines).
- Ablation: removing TEMP costs **5–8 percentage points** of success — the dominant contributor; removing individual refinement moves costs 1–3 points. Look-ahead gain saturates at W_pred ≈ 8–10 slots.
- Failure decomposition: FCFS-greedy fails mostly by REJECT (early arrivals consume capacity), min-delay-greedy shows a visible DROP tail (short-delay admission does not guarantee future realization); MRSAR balances both.

## Key technical points (ZH)

- 问题：民航 SAGIN 的 SFC 感知**接入侧**编排——在 A2A/A2G/A2S 链路间为每个请求绑定（锚点，承载模式）对；下游 SFC 处理使用预置模板。
- **TEMP**（时间弹性映射与驻留）：把机载存储当作*可调度的时间资源*。准入条件为 W_pred 前瞻窗（一般 5–10 时隙）内实现概率 P_temp ≥ P_temp_min，且驻留 ≤ W_max、每机缓冲占用 ≤ M_i。
- 每时隙四种请求动作：**NOW / TEMP / REJECT / DROP**；REJECT 仅适用于新到达请求，DROP 仅适用于跨隙延续的 TEMP 请求。
- 字典序目标：J1 业务成功率（NOW 计 +1，TEMP 计 P_temp）≫ J2 归一化接入时延（各请求按自身时延预算 D_acc 归一）≫ J3 TEMP 风险（强制丢弃 + 驻留紧迫度 + 缓冲压力）。
- **MRSAR** 的启发式信号全部由模型导出：延迟实现风险 g_r = 1 − P_temp、驻留紧迫度 h_r = (w_r+1)/W_max、综合紧迫度 ξ_r = g_r + α_h·h_r；承载稀缺度 λ_now 与 TEMP 缓冲稀缺度 λ_temp 在 NOW/TEMP 估值中抬高被争抢资源的代价。
- 有界邻域精化含三类动作——Rescue、Rebind、Exchange——按层级加权增益 Ψ = Ω1·ΔJ1 − Ω2·ΔJ2 − ΔJ3（Ω1 ≫ Ω2 ≫ 1）接受。
- 仿真：513 架飞机（真实 OAG 北大西洋航班表）、66 颗铱星（STK 星历）、20 个关口站；500 时隙 × 0.2 s，前 20 隙为预热；负载因子 ρ ∈ {0.6, 0.8, 1.0, 1.2, 1.4}。
- 结果：ρ = 1.0 时成功率 92%（MRSAR）对 93%（Gurobi-MILP）对 86%/84%（贪心基线）；ρ = 1.4 时为 71% 对 73% 对 58%/55%。ρ = 1.4 时归一化时延 0.011（MRSAR）对 0.019（FCFS）。
- 运行时间 0.7–3.2 s 对 Gurobi 的 2.6–10.6 s → **3.5–4.0× 加速**；每隙 10–20 个活跃请求时最优性差距 < 1%，40–50 个时为 1.5–2%（贪心基线分别为 6.8 与 >8 个百分点）。
- 消融：去掉 TEMP 损失 **5–8 个百分点**成功率，是最主要贡献项；去掉单项精化动作损失 1–3 个百分点。前瞻收益在 W_pred ≈ 8–10 时隙饱和。
- 失败分解：FCFS 贪心主要以 REJECT 失败（早到请求先占资源），最小时延贪心有明显的 DROP 尾部（短时延准入不保证未来可实现）；MRSAR 在两者间取得平衡。

## Why it matters / what's new (EN)

The KB's satellite-scheduling thread has so far been about *spatial* allocation: STAR-GS auctions ground-station visibility windows (2026-08-25), the DVB beam-hopping work forecasts demand per beam (2026-08-15), and the multi-orbit MARL handover paper allocates power across orbital shells (2026-08-17). This entry adds the *temporal* axis explicitly — TEMP prices deferral against a computed realization probability, and the ablation shows that deferral, not the search refinement, is where nearly all the gain lives (5–8 points vs 1–3). That is a transferable finding for any intermittently-connected NTN scheduler: buying time is worth more than searching harder over the bearers you can see right now.

Two other aspects are worth noting against the existing KB. First, the *derived-heuristic* pattern: MRSAR's risk and scarcity signals are read off the lexicographic objective and the resource constraints rather than being hand-tuned, which is a cheaper and more auditable alternative to the RL/LLM orchestration approaches the KB has been accumulating (L-COIN LLM counterfactual offloading 2026-08-19, GenAI mission-aware RIS/ISAC orchestration 2026-08-27, LLM-intent satellite IAB 2026-07-26) — a 3.5–4× speedup over Gurobi with a ≤ 2 % gap, no training loop, no model to serve on orbit. Second, the aviation framing: civil-aviation SAGIN is a niche the KB has not covered, and it is the one NTN setting where cockpit-safety traffic and consumer cabin traffic contend for the same aircraft-side bearers under an actual regulatory hierarchy — which is exactly what the lexicographic objective encodes. The main caveat is that the evaluation is a 100-second simulation window with a single corridor and an Iridium-only space segment; broadband LEO constellations with far denser A2S opportunity would change the TEMP calculus substantially.

## Why it matters / what's new (ZH)

知识库的卫星调度脉络此前主要围绕*空间*分配：STAR-GS 拍卖地面站可见窗（2026-08-25）、DVB 跳波束工作按波束预测需求（2026-08-15）、多轨道 MARL 切换论文在轨道壳间分配功率（2026-08-17）。本条目显式补上*时间*维度——TEMP 用计算出的实现概率为"延迟"定价，而消融结果表明几乎全部增益来自延迟本身而非搜索精化（5–8 个百分点对 1–3 个百分点）。这对任何断续连接的 NTN 调度器都是可迁移的结论：买时间比在当前可见承载上更用力地搜索更划算。

相对现有知识库还有两点值得记录。其一是*导出式启发式*范式：MRSAR 的风险与稀缺信号直接从字典序目标与资源约束中读出，而非人工调参，相比知识库中不断累积的 RL/LLM 编排路线（L-COIN 大模型反事实卸载 2026-08-19、生成式 AI 任务感知 RIS/ISAC 编排 2026-08-27、大模型意图驱动卫星 IAB 2026-07-26），这是更廉价也更可审计的替代方案——相对 Gurobi 加速 3.5–4×、差距 ≤ 2%，无需训练循环，也无需在轨部署模型。其二是航空场景：民航 SAGIN 是知识库此前未覆盖的细分领域，也是唯一一个驾驶舱安全业务与旅客客舱业务在真实监管优先级下争抢同一机载承载的 NTN 场景——这正是字典序目标所编码的内容。主要局限在于评估仅为 100 秒仿真窗、单一航路走廊、空间段仅有铱星；若换成 A2S 机会密集得多的宽带 LEO 星座，TEMP 的收益测算会有显著变化。

## Images

![SDN/NFV-enabled civil-aviation SAGIN architecture with A2A / A2G / A2S bearers | SDN/NFV 使能的民航空天地一体化网络架构与 A2A/A2G/A2S 承载](https://arxiv.org/html/2608.26559v1/system_architecture.png)
![Service success ratio vs traffic load: MRSAR tracks the Gurobi-MILP reference while greedy baselines fall away | 业务成功率随负载变化：MRSAR 贴近 Gurobi-MILP 参考，贪心基线明显落后](https://arxiv.org/html/2608.26559v1/figures/fig_success_vs_traffic_load.png)
![Runtime and speedup vs request scale — MRSAR achieves a 3.5–4.0x speedup over Gurobi-MILP | 运行时间与加速比随请求规模变化——MRSAR 相对 Gurobi-MILP 加速 3.5–4.0 倍](https://arxiv.org/html/2608.26559v1/figures/fig_runtime_and_speedup_vs_request_scale.png)
![Ablation: removing TEMP costs 5-8 percentage points of service success, far more than any single refinement move | 消融实验：移除 TEMP 损失 5–8 个百分点成功率，远高于任一单项精化动作](https://arxiv.org/html/2608.26559v1/figures/fig_drg_ablation_success_vs_load.png)
