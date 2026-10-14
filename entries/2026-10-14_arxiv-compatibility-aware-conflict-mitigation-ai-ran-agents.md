---
id: 2026-10-14_arxiv-compatibility-aware-conflict-mitigation-ai-ran-agents
date_published: 2026-10-05
date_found: 2026-10-14
type: academic-paper
technology: cellular
title_en: "Understanding Conflict and Compatibility Conditions for Agents in AI-RAN"
title_zh: "理解 AI-RAN 中智能体的冲突与兼容条件"
url: "https://arxiv.org/abs/2610.07415"
source_quality: full
topics: [AI-RAN, conflict-mitigation, xApp, Near-RT-RIC, deadband-controller, SLA-drift, ns3-oran]
topic_primary: open-ran
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)
Arshia Zolghadr, Joao F. Santos, Imtiaz Nasim, Deniz Aytemiz, Nicholas J. Kaminski and Jacek Kibilda (Virginia Tech; Idaho National Laboratory) address conflicts between independent agents (dApps, xApps, rApps) that control the same RAN parameter through open interfaces. They observe that existing mitigation methods treat any two agents controlling the same parameter as a conflict needing arbitration (prioritization-based methods apply only the highest-ranked agent's action), without checking whether the agents' objectives can be satisfied at the same time. Their example is a throughput-maximization agent and an energy-saving agent that both watch downlink throughput and control the PRB allocation: if throughput stays inside both agents' targets, both are satisfied and arbitration is unnecessary.

The paper models each agent as a sampled deadband feedback controller: for every monitored KPI k the agent has a target r and a tolerance delta, is inactive while |y - r| <= delta, and acts only outside that band. The agents controlling a parameter p are defined as compatible if, for every monitored KPI, the largest lower deadband bound does not exceed the smallest upper bound (a non-empty shared acceptable range). A pairwise-sufficiency proposition states that compatibility of any number of agents over any number of KPIs follows from pairwise tests (the authors note this is the one-dimensional case of Helly's theorem). For two agents on one KPI the condition is |r1 - r2| <= delta1 + delta2; with equal tolerances the shared range has width max(0, 2*delta - |r1 - r2|). The proposed policy lets compatible agents share control of a parameter and falls back to priority mitigation only for incompatible sets.

Evaluation uses NIST's ns3-oran extension of ns-3: a single-cell LTE FDD scenario (band 1, 2110 MHz, 3GPP TR 38.901 UMa path loss, round-robin MAC scheduler, PRB allocation selected from {6, 15, 25, 50, 75, 100}), a throughput-maximization agent and an energy-saving agent (energy saving given higher priority) both acting every 100 ms, 15 s runs, 100 seeds. SLA drift is the metric. With equal tolerances of 10 Mbps, the proposed policy keeps combined SLA drift below 0.2% for target separations up to 17 Mbps, shows about 5.8% drift between 18 and 20 Mbps (agents compatible but no discrete PRB allocation lands in the narrow shared range), and about 26% at a 25 Mbps separation where the agents are incompatible and arbitration applies. In a demand sweep (tolerance 11 Mbps, separation 7 Mbps, 10 to 150 UEs at 1 Mbps each) the policy gives about 0.2% combined drift once 50 or more UEs make the shared range [37, 52] Mbps reachable, against about 4% for priority mitigation (roughly 20 times higher); with up to 30 UEs demand stays below the shared range and all policies show high drift. The authors state compatibility decides whether a shared range exists, while available control actions and traffic demand decide whether it can be reached in practice. The scope is two agents, one KPI and one parameter in a single-cell LTE simulation.

## Summary (ZH)
Arshia Zolghadr、Joao F. Santos、Imtiaz Nasim、Deniz Aytemiz、Nicholas J. Kaminski 与 Jacek Kibilda（弗吉尼亚理工大学；爱达荷国家实验室）研究通过开放接口控制同一 RAN 参数的独立智能体（dApp、xApp、rApp）之间的冲突。他们指出，现有缓解方法把控制同一参数的任意两个智能体都视为需要仲裁的冲突（基于优先级的方法只执行最高优先级智能体的动作），而不检查它们的目标能否同时满足。文中的例子是吞吐量最大化智能体与节能智能体：二者都监测下行吞吐量并控制 PRB 分配，若吞吐量落在两者的目标范围内，则两个目标同时满足，无需仲裁。

论文把每个智能体建模为采样死区反馈控制器：对每个被监测的 KPI k，智能体有目标值 r 与容差 delta，当 |y - r| <= delta 时不动作，仅在区间之外才动作。若对每个被监测 KPI，各智能体死区下界的最大值不超过上界的最小值（存在非空的共享可接受范围），则控制同一参数 p 的智能体被定义为兼容。成对充分性命题指出，任意数量智能体在任意数量 KPI 上的兼容性可由成对检验得出（作者说明这是 Helly 定理的一维情形）。对于同一 KPI 上的两个智能体，条件为 |r1 - r2| <= delta1 + delta2；容差相等时共享范围宽度为 max(0, 2*delta - |r1 - r2|)。所提策略允许兼容的智能体共享参数控制，仅对不兼容的集合退回到优先级缓解。

评估使用 NIST 的 ns3-oran（ns-3 扩展）：单小区 LTE FDD 场景（频段 1，2110 MHz，3GPP TR 38.901 UMa 路径损耗，轮询 MAC 调度器，PRB 分配取自 {6, 15, 25, 50, 75, 100}），吞吐量最大化智能体与节能智能体（节能优先级更高）每 100 ms 动作一次，每次运行 15 s，100 个随机种子，指标为 SLA 漂移。容差均为 10 Mbps 时，所提策略在目标间隔不超过 17 Mbps 时联合 SLA 漂移低于 0.2%；间隔 18 至 20 Mbps 时约 5.8%（智能体兼容，但没有离散 PRB 配置落在变窄的共享范围内）；间隔 25 Mbps 时约 26%（智能体不兼容，需要仲裁）。在需求扫描中（容差 11 Mbps，间隔 7 Mbps，10 至 150 个终端、每个 1 Mbps），当终端数达到 50 个及以上、共享范围 [37, 52] Mbps 可达时，该策略的联合漂移约 0.2%，优先级缓解约 4%（约 20 倍）；终端数不超过 30 个时需求低于共享范围，所有策略漂移均较高。作者指出，兼容性决定共享范围是否存在，而可用控制动作与业务需求决定其在实际中能否达到。研究范围为单小区 LTE 仿真中的两个智能体、一个 KPI、一个参数。

## Key technical points (EN)
- **Problem**: agents controlling the same RAN parameter are normally all arbitrated; the paper asks when they can safely share control.
- **Agent model**: sampled deadband feedback controller with per-KPI target r and tolerance delta (inactive while |y - r| <= delta).
- **Compatibility**: non-empty intersection of deadbands on every shared KPI; pairwise tests suffice for any number of agents and KPIs; two-agent test is |r1 - r2| <= delta1 + delta2.
- **Policy**: compatible agents share the parameter; priority mitigation only for incompatible sets.
- **Setup**: ns3-oran, single-cell LTE FDD (2110 MHz), TR 38.901 UMa, throughput-maximization vs energy-saving agents, 100 ms control period, 100 seeds.
- **Results**: combined SLA drift below 0.2% up to 17 Mbps target separation; about 5.8% at 18-20 Mbps; about 26% at 25 Mbps; in the UE-count sweep, about 0.2% vs about 4% for priority mitigation once 50 or more UEs make the shared range [37, 52] Mbps reachable (with up to 30 UEs all policies show high drift).
- **Limits stated**: compatibility does not guarantee attainability (discrete PRB steps, traffic demand); scenario is two agents, one KPI, one parameter.

## Key technical points (ZH)
- **问题**：控制同一 RAN 参数的智能体通常一律仲裁；论文探讨它们何时可以安全地共享控制。
- **智能体模型**：采样死区反馈控制器，每个 KPI 有目标值 r 与容差 delta（|y - r| <= delta 时不动作）。
- **兼容性**：每个共享 KPI 上各死区交集非空；成对检验即可覆盖任意数量的智能体与 KPI；双智能体检验为 |r1 - r2| <= delta1 + delta2。
- **策略**：兼容的智能体共享参数；仅对不兼容的集合采用优先级缓解。
- **设置**：ns3-oran，单小区 LTE FDD（2110 MHz），TR 38.901 UMa，吞吐量最大化与节能智能体，100 ms 控制周期，100 个种子。
- **结果**：目标间隔不超过 17 Mbps 时联合 SLA 漂移低于 0.2%；18 至 20 Mbps 约 5.8%；25 Mbps 约 26%；终端数扫描中，终端数达到 50 个及以上、共享范围 [37, 52] Mbps 可达时约 0.2%，优先级缓解约 4%（终端数不超过 30 个时所有策略漂移均较高）。
- **作者指出的局限**：兼容并不保证可达（离散 PRB 档位、业务需求）；场景为两个智能体、一个 KPI、一个参数。

## Why it matters / what's new (EN)
Records a way to decide when O-RAN style agents (xApps, dApps, rApps) that touch the same parameter actually need arbitration, using a deadband-compatibility test that is cheap to evaluate pairwise. The evidence is simulation-only (single-cell LTE in ns3-oran, two agents), so the reported drift figures are specific to that setup.

## Why it matters / what's new (ZH)
记录了一种判断 O-RAN 类智能体（xApp、dApp、rApp）在操作同一参数时是否真正需要仲裁的方法，即可成对低成本计算的死区兼容性检验。证据仅来自仿真（ns3-oran 中的单小区 LTE、两个智能体），因此所报告的漂移数值仅适用于该设置。

## Images
None.
