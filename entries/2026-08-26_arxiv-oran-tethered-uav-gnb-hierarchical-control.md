---
id: 2026-08-26_arxiv-oran-tethered-uav-gnb-hierarchical-control
date_published: 2026-08-24
date_found: 2026-08-26
type: academic-paper
technology: cellular
title_en: "Place, Slice and Schedule: Hierarchical O-RAN Control of a Tethered mmWave UAV-gNB"
title_zh: "放置、切片与调度：系留毫米波无人机基站的分层 O-RAN 控制"
url: "https://arxiv.org/abs/2608.23824"
source_quality: full
topics: [O-RAN, rApp, xApp, UAV-gNB, tethered-UAV, mmWave, 28GHz, network-slicing, eMBB, URLLC, deep-reinforcement-learning, DeepSets, SAC, Sionna-RT, A1-policy, E2SM-KPM]
topic_primary: open-ran
topics_secondary: [network-slicing, cellular-ai]
novelty_score: 3
---

## Summary (EN)
Mohammadhosseini and Afghah (Clemson-affiliated Afghah group) tackle a coupled control problem for a tethered UAV base station (UAV-gNB): the slow decisions — where to place the UAV in 3D and how to split the PRB budget between eMBB and URLLC slices — reshape blockage, channel quality and the served-user set, while the fast decision — per-user PRB scheduling — must react at radio-slot pace to traffic that evolves much faster. Existing work optimizes these separately; this paper couples them through the O-RAN control hierarchy.

The architecture maps cleanly onto O-RAN timescales: a non-real-time RIC rApp (1 s scale, Double DQN) selects the 3D placement — 21 geometrically distinct tether positions (5 elevations x 5 azimuths on a 100 m cable, altitudes 64.3-100 m) — plus the eMBB/URLLC PRB split, issued as an A1 policy; a near-real-time RIC xApp (10 ms slot scale) allocates per-user PRBs within that budget, consuming per-slot KPIs over E2SM-KPM. The xApp scheduler is a permutation-equivariant DeepSets Soft Actor-Critic (D-SAC) with shared per-UE layers and global pooling, so one trained policy handles a variable user population without retraining. Training is staged in three phases (xApp under randomized policies, rApp with frozen scheduler, xApp fine-tuning). Evaluation uses Sionna RT ray-traced 28 GHz (n257) channels over a 200 m x 200 m area with 30-50 mixed eMBB/URLLC users: D-SAC improves eMBB SLA satisfaction by up to 17% and URLLC on-time delivery by up to 42% over proportional-fair/equal/max-rate and SAC-MLP baselines; the learned rApp adds up to 20% URLLC improvement over random placement; the same policy scales from 30 to 50 users, and near-RT inference costs 0.12 ms per slot (about 1% of the 10 ms budget).

## Summary (ZH)
Mohammadhosseini 与 Afghah（Afghah 团队）研究系留无人机基站（UAV-gNB）的耦合控制问题：慢决策——无人机三维放置与 eMBB/URLLC 切片间 PRB 预算划分——会重塑遮挡、信道质量与有效服务用户集合，而快决策——逐用户 PRB 调度——必须以无线电时隙节奏响应变化更快的业务。既有工作将两者分开优化；本文通过 O-RAN 控制层级将其耦合。

架构与 O-RAN 时间尺度精确对应：非实时 RIC rApp（1 秒级，Double DQN）选择三维放置——100 米系缆上 21 个几何离散位置（5 仰角 x 5 方位角，高度 64.3-100 米）——以及 eMBB/URLLC PRB 划分，以 A1 策略下发；近实时 RIC xApp（10 毫秒时隙级）在该预算内做逐用户 PRB 分配，经 E2SM-KPM 消费逐时隙 KPI。xApp 调度器是置换等变的 DeepSets Soft Actor-Critic（D-SAC），共享逐 UE 层加全局池化，因此一个已训练策略可处理可变用户规模而无需重训。训练分三阶段（随机策略下训 xApp、冻结调度器训 rApp、xApp 微调）。评估用 Sionna RT 射线追踪 28 GHz（n257）信道、200 米 x 200 米区域、30-50 个 eMBB/URLLC 混合用户：D-SAC 较比例公平/均分/最大速率及 SAC-MLP 基线将 eMBB SLA 满足率最多提升 17%、URLLC 按时交付最多提升 42%；学习型 rApp 较随机放置再带来最多 20% URLLC 提升；同一策略从 30 用户扩展到 50 用户无需重训，近实时推理每时隙仅 0.12 毫秒（约为 10 毫秒预算的 1%）。

## Key technical points (EN)
- Two-timescale O-RAN mapping: non-RT rApp (1 s; Double DQN) jointly picks 3D tether placement + eMBB/URLLC PRB budget, delivered as an A1 policy; near-RT xApp (10 ms; D-SAC) does per-user PRB allocation within the budget via E2SM-KPM KPIs.
- Tethered geometry: fixed ground anchor, 100 m cable, 21 discrete positions (5 elevations x 5 azimuths, 64.3-100 m altitude); placement changes the blockage map, not just SNR.
- Permutation-equivariant scheduler: DeepSets SAC with shared per-UE layers + permutation-invariant pooling handles variable-cardinality UE sets — one policy serves 30-50 users without retraining, unlike fixed-input MLPs.
- Staged three-phase training: xApp under randomized rApp policies, then rApp against the frozen scheduler, then xApp fine-tuning — avoids non-stationarity of joint training.
- Geometry-aware evaluation: Sionna RT ray-traced 28 GHz n257 channels, 200 m x 200 m area, 1 m/s random-walk users; baselines PF/Equal/Max-Rate, SAC-MLP, greedy coverage, random movement.
- Headline numbers: up to +17% eMBB SLA satisfaction and +42% URLLC on-time delivery from the D-SAC scheduler; up to +20% URLLC from learned placement vs random; 0.12 ms per-slot inference (~1% of the near-RT budget).
- Fresh v1 submitted 2026-08-24; "submitted to the IEEE for possible publication" — passes the postprint guard.

## Key technical points (ZH)
- 双时间尺度 O-RAN 映射：非实时 rApp（1 秒；Double DQN）联合选择三维系留位置 + eMBB/URLLC PRB 预算，以 A1 策略下发；近实时 xApp（10 毫秒；D-SAC）经 E2SM-KPM KPI 在预算内做逐用户 PRB 分配。
- 系留几何：固定地锚、100 米系缆、21 个离散位置（5 仰角 x 5 方位角，高度 64.3-100 米）；放置改变的是遮挡图，而不仅是信噪比。
- 置换等变调度器：DeepSets SAC 共享逐 UE 层 + 置换不变池化，处理可变基数 UE 集合——一个策略覆盖 30-50 用户无需重训，区别于固定输入维度的 MLP。
- 三阶段分步训练：先在随机 rApp 策略下训 xApp，再对冻结调度器训 rApp，最后微调 xApp——避免联合训练的非平稳性。
- 几何感知评估：Sionna RT 射线追踪 28 GHz n257 信道、200 米 x 200 米区域、1 m/s 随机游走用户；基线为 PF/均分/最大速率、SAC-MLP、贪心覆盖、随机移动。
- 关键数字：D-SAC 调度器带来最高 +17% eMBB SLA 满足率与 +42% URLLC 按时交付；学习型放置较随机放置 URLLC 最高 +20%；每时隙推理 0.12 毫秒（约为近实时预算的 1%）。
- 2026-08-24 提交的新 v1；"已投稿 IEEE"——通过重印守卫。

## Why it matters / what's new (EN)
The KB's UAV-over-cellular thread (BVLOS slicing over O-RAN, 5G-ISAC UAV sensing, UAV-MEC slicing) has so far treated the UAV as either the client or the sensed object; this is the first entry where the UAV *is* the gNB and the O-RAN split itself carries the control loop. Two things are architecturally interesting. First, the placement-scheduling coupling is expressed exactly along the rApp/xApp timescale boundary — slow geometry and slice budgeting as an A1 policy, fast per-user allocation inside it — which is the O-RAN-native way to structure a two-timescale controller, and complements the KB's existing conflict-arbitration and pre-actuation-safety O-RAN entries with a concrete cross-timescale coordination design. Second, the permutation-equivariant DeepSets scheduler addresses a practical deployment irritation of learned schedulers (fixed UE-count input) with an off-the-shelf set-network trick and shows it scaling 30→50 users without retraining. Caveats: it is Sionna-RT simulation, not a testbed, and the tethered assumption (power over cable, discrete positions) sidesteps endurance and continuous-trajectory control. Watch for the IEEE version and any move onto an OAI/FlexRIC bench like the group's peers.

## Why it matters / what's new (ZH)
知识库的"无人机 x 蜂窝"线索（O-RAN 上的 BVLOS 切片、5G-ISAC 无人机感知、UAV-MEC 切片）此前都把无人机当作客户端或被感知对象；这是首个无人机*本身就是* gNB、且 O-RAN 架构本身承载控制环的条目。两点在架构上值得注意。其一，放置-调度耦合被精确表达在 rApp/xApp 时间尺度边界上——慢的几何与切片预算作为 A1 策略、快的逐用户分配在其内部执行——这是构造双时间尺度控制器的 O-RAN 原生方式，与库中已有的冲突仲裁、执行前安全认证等 O-RAN 条目形成跨时间尺度协同设计的互补。其二，置换等变 DeepSets 调度器用现成的集合网络技巧解决了学习型调度器的实际部署痛点（固定 UE 数输入），并展示 30→50 用户免重训扩展。注意：这是 Sionna-RT 仿真而非实测平台，且系留假设（缆供电、离散位置）回避了续航与连续轨迹控制。关注 IEEE 正式版及是否迁移到 OAI/FlexRIC 实测环境。

## Images
![System architecture](https://arxiv.org/html/2608.23824v1/model.png)
