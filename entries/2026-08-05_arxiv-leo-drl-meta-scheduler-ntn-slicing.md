---
id: 2026-08-05_arxiv-leo-drl-meta-scheduler-ntn-slicing
date_published: 2026-08-03
date_found: 2026-08-05
type: academic-paper
technology: cellular
title_en: "LEO-Aware DRL Meta-Scheduler for 5G Non-Terrestrial Network Slicing (GLOBECOM 2026)"
title_zh: "面向 5G 非地面网络切片的 LEO 感知 DRL 元调度器（GLOBECOM 2026）"
url: "https://arxiv.org/abs/2608.01668"
source_quality: full
topics: [5G, NTN, LEO, network slicing, O-RAN, DRL, scheduling]
topic_primary: ntn
topics_secondary: [network-slicing, open-ran, cellular-ai]
novelty_score: 2
---

## Summary (EN)

Vilchez, de Andrade, Hinojosa, Madeira and Astudillo (UNICAMP lineage; arXiv 2608.01668, submitted 2026-08-03, accepted at IEEE GLOBECOM 2026) propose a twin-timescale "meta-scheduler" for radio resource slicing on a LEO satellite beam, designed around O-RAN's temporal split rather than against it. A TD3 agent at the near-RT RIC runs on the slow timescale (100 ms): it observes slice-aggregated KPIs (queue backlogs, SNR statistics) *plus LEO orbital geometry* (elevation, Doppler) and outputs (a) per-slice PRB weight allocations and (b) a policy ID selecting one of six standardized 3GPP scheduling heuristics (RR, Max-CQI, PF, Max-Queue, Delay-Aware QoS, GBR-Aware QoS). The O-DU then executes conventional non-learning MAC scheduling at the 1 ms TTI under those directives.

The design argument is auditability plus tractability: instead of end-to-end learned PRB maps (combinatorial action space, opaque to operators), the agent orchestrates a library of interpretable, standardized policies, and the fast loop stays deterministic. The MDP is physics-aware — trace-driven orbital propagation at 600 km altitude with free-space path loss, Doppler and Jakes fading. An asymmetric "R3 Mission Reward" (Rate, Reliability, Resource-fairness) caps throughput reward and delay penalties to prevent reward hacking against latency-sensitive traffic.

Evaluated on a single LEO beam with 300 users across eMBB (50%), Mission-Critical (30%) and mMTC (20%) slices with burst-augmented Poisson traffic: under 40 Mbps saturation near the Shannon limit, the meta-scheduler matches the best baseline's throughput within a statistically insignificant ~1% (22.44 vs 22.68 Mbps, p > 0.05), while achieving the lowest variance in Mission-Critical RLC queuing delay (strictly bounded, no slice starvation) and tying the highest median proportional-fairness score (0.864) at the lowest IQR (0.098).

## Summary (ZH)

Vilchez、de Andrade、Hinojosa、Madeira 与 Astudillo（坎皮纳斯州立大学团队；arXiv 2608.01668，2026-08-03 提交，已被 IEEE GLOBECOM 2026 录用）提出一种面向 LEO 卫星波束无线资源切片的双时间尺度"元调度器"，其设计顺应而非违背 O-RAN 的时间尺度切分。近实时 RIC 上的 TD3 智能体运行在慢时间尺度（100 毫秒）：观测切片聚合 KPI（队列积压、SNR 统计）以及 LEO 轨道几何（仰角、多普勒），输出（a）逐切片 PRB 权重分配和（b）策略 ID——从六种标准化 3GPP 调度启发式（RR、Max-CQI、PF、Max-Queue、时延感知 QoS、GBR 感知 QoS）中选择其一。O-DU 随后在 1 毫秒 TTI 上按这些指令执行常规非学习 MAC 调度。

设计论点是可审计性加可解性：不采用端到端学习的 PRB 映射（组合动作空间、对运营商不透明），智能体编排一组可解释的标准化策略库，快环保持确定性。MDP 具备物理感知——600 公里高度轨迹驱动的轨道传播、自由空间路径损耗、多普勒与 Jakes 衰落。非对称"R3 任务奖励"（速率、可靠性、资源公平）对吞吐奖励和时延惩罚设上限，防止对时延敏感业务的奖励作弊。

在单 LEO 波束、300 用户、eMBB（50%）/关键任务（30%）/mMTC（20%）三切片、突发增强泊松流量下评估：40 Mbps 接近香农极限的饱和负载时，元调度器吞吐与最佳基线差距约 1% 且统计不显著（22.44 对 22.68 Mbps，p > 0.05），同时取得关键任务 RLC 排队时延的最低方差（严格有界、无切片饿死），并以最低 IQR（0.098）并列最高中位比例公平分数（0.864）。

## Key technical points (EN)

- Twin-timescale split mapped onto O-RAN: TD3 at near-RT RIC (100 ms) sets slice PRB weights + selects a standardized scheduling policy; O-DU runs deterministic per-TTI (1 ms) MAC scheduling.
- Policy-selection paradigm: the action space is a library of six 3GPP-standard heuristics, keeping decisions operator-auditable — no opaque end-to-end PRB mapping.
- LEO physics in the state: elevation and Doppler from trace-driven 600 km orbital propagation, Jakes fading, free-space path loss.
- Asymmetric R3 Mission Reward with capped throughput/delay terms prevents reward hacking and protects Mission-Critical traffic.
- Under saturation: throughput within ~1% of best baseline (statistically insignificant), lowest Mission-Critical delay variance, no starvation; PF score 0.864 median at lowest IQR.
- Each 15 s episode spans 150 meta-steps / 15,000 TTIs; baselines include Static/Queue/Load/SNR-adaptive weight+policy combinations.

## Key technical points (ZH)

- 双时间尺度对应 O-RAN 架构：近实时 RIC 上的 TD3（100 毫秒）设定切片 PRB 权重并选择标准化调度策略；O-DU 在每 TTI（1 毫秒）执行确定性 MAC 调度。
- 策略选择范式：动作空间是六种 3GPP 标准启发式的策略库，决策对运营商可审计——不做不透明的端到端 PRB 映射。
- 状态中包含 LEO 物理量：600 公里轨迹驱动轨道传播给出的仰角与多普勒、Jakes 衰落、自由空间路径损耗。
- 非对称 R3 任务奖励对吞吐/时延项设上限，防止奖励作弊并保护关键任务业务。
- 饱和负载下：吞吐与最佳基线差约 1%（统计不显著），关键任务时延方差最低、无饿死；比例公平中位分 0.864 且 IQR 最低。
- 每个 15 秒回合包含 150 个元步 / 15,000 个 TTI；基线覆盖静态/队列/负载/SNR 自适应的权重+策略组合。

## Why it matters / what's new (EN)

The KB's ntn bin has climbed the stack from PHY/backhaul (2026-05-27_arxiv-tn-ntn-backhaul-potential-game, 2026-06-30_arxiv-ris-uav-ntn-oran-marl-6g) to core-network procedures (2026-07-28_arxiv-location-aware-nas-timers-ntn); this is the first entry putting *MAC-layer slice scheduling on the LEO beam itself* under O-RAN's near-RT/DU timescale contract. The policy-selection-from-standardized-heuristics idea echoes the auditability thread running through the AI-RAN safety entries (VeraRAN pre-actuation certification, xApp conflict arbitration) — regulators and operators keep pushing learned control into wrapper/selector roles rather than end-to-end actuation. Novelty 2: solid architecture and honest statistics, but simulation-only and single-beam.

## Why it matters / what's new (ZH)

KB 的 ntn 主题已从物理层/回传（2026-05-27_arxiv-tn-ntn-backhaul-potential-game、2026-06-30_arxiv-ris-uav-ntn-oran-marl-6g）爬升到核心网过程（2026-07-28_arxiv-location-aware-nas-timers-ntn）；本条目是首个在 O-RAN 近实时/DU 时间尺度契约下、将 MAC 层切片调度放到 LEO 波束上的条目。"从标准化启发式库中选择策略"的思路呼应了 AI-RAN 安全条目（VeraRAN 执行前认证、xApp 冲突仲裁）中的可审计性线索——监管方和运营商持续将学习控制推向包装器/选择器角色而非端到端执行。新颖度 2：架构扎实、统计诚实，但仅为仿真且单波束。

## Images

![DRL-based LEO NTN RAN meta-scheduler architecture | 基于 DRL 的 LEO NTN RAN 元调度器架构](https://arxiv.org/html/2608.01668v1/figures/DRL_framework.png)
![LEO system model with geographic user distribution and 3D satellite pass | LEO 系统模型：地理用户分布与三维卫星过境可视化](https://arxiv.org/html/2608.01668v1/figures/fig-satnet-campinas.png)
