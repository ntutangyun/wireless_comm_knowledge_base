---
id: 2026-08-27_arxiv-fh-effective-capacity-mcx-shared-oran
date_published: 2026-08-26
date_found: 2026-08-27
type: academic-paper
technology: cellular
title_en: "E2-Conditioned Finite-Horizon Effective Capacity for Public-Safety MCX over Shared O-RAN"
title_zh: "面向共享 O-RAN 上公共安全 MCX 的 E2 条件化有限时域有效容量"
url: "https://arxiv.org/abs/2608.25442"
source_quality: full
topics: [O-RAN, E2, near-RT-RIC, effective-capacity, MCX, mission-critical, public-safety, statistical-QoS, admission-control, PDCP-duplication, age-of-information, dual-connectivity]
topic_primary: open-ran
topics_secondary: [network-slicing, 5g-nr]
novelty_score: 2
---

## Summary (EN)

Jingqing Wang and Wenchi Cheng (State Key Laboratory of Integrated Services Networks, Xidian University) attack a mismatch that sits at the centre of running public-safety mission-critical services (MCX) on a shared Open RAN: the metrics used to promise service are asymptotic and backward-looking, while the missions that need the promise are short and forward-looking. Conventional effective capacity — the standard statistical-QoS tool for turning a delay-violation exponent into a certifiable service rate — characterises a stationary regime, which as the authors put it "suppresses both the initial E2-observed condition and the finite selection-to-actuation transient". A commander asking whether a talkgroup will hold for the next ninety seconds is not asking a stationary question, and the RAN's answer has to account for the fact that whatever the RIC decides will take measurable time to take effect.

Their construction is a finite-horizon effective capacity (FH-EC) that keeps the risk-sensitive interpretation but conditions on the network state actually observed over E2 and charges explicitly for selection-and-actuation delay; it provably relaxes back to conventional effective capacity as the horizon grows. Because computing this online would be hopeless, capabilities are pre-computed offline with Markov-additive kernels and turned into a finite library of *confidence-calibrated profiles* — each carrying a statistically valid lower confidence bound derived via Hoeffding's inequality, with union bounds giving post-selection simultaneous validity so that a profile chosen after looking at the data still carries its certificate.

At admission the near-RT RIC solves a finite 0-1 linear program over that profile library, picking profiles that meet rate, delay, jitter and age-of-information requirements at once, respect resource limits and forbidden profile combinations, keep non-MCX utility loss under a configured threshold, and maximise FH-EC surplus net of resource cost. Their Theorem 1 states that with appropriate calibration budgets every selected profile simultaneously satisfies its capability lower bound, its per-dimension risk bounds, resource availability, non-MCX protection, and a joint mission-risk constraint Pr{mission violation} ≤ Σ ε. Evaluation is MATLAB/ns-3 over four logical E2 domains of three O-DUs each.

## Summary (ZH)

Jingqing Wang 与 Wenchi Cheng（西安电子科技大学综合业务网理论及关键技术国家重点实验室）针对"在共享 O-RAN 上承载公共安全关键任务业务（MCX）"的一处核心错配：用来承诺服务的指标是渐近且回溯的，而需要该承诺的任务却是短时且前瞻的。传统有效容量——把时延违规指数转换为可认证服务速率的统计 QoS 标准工具——刻画的是平稳态，用作者的话说，它"同时抹掉了 E2 观测到的初始条件与有限的选择到执行的暂态过程"。指挥员问"这个通话组接下来九十秒能否维持"，问的不是平稳态问题；而且 RAN 的回答必须计入"RIC 的任何决策都需要可观测时间才能生效"这一事实。

其构造是有限时域有效容量（FH-EC）：保留风险敏感的解释，但以 E2 实际观测到的网络状态为条件，并显式为"选择—执行"时延计价；可证明在时域拉长时退化回传统有效容量。由于在线计算不可行，服务能力改为离线以马尔可夫可加核预计算，转化为有限的**置信度标定画像**库——每个画像携带经 Hoeffding 不等式导出的统计有效置信下界，并通过并集界给出选择后同时有效性，使"看过数据之后再选出的画像"仍然带着它的证书。

准入时，近实时 RIC 在该画像库上求解一个有限的 0-1 线性规划：所选画像需同时满足速率、时延、抖动与信息年龄要求，遵守资源上限与禁止组合，把非 MCX 业务的效用损失压在设定阈值内，并最大化"FH-EC 盈余减资源成本"。其定理 1 表明：在适当的标定预算下，每个被选画像同时满足其能力下界、各维度风险上界、资源可用性、非 MCX 保护，以及联合任务风险约束 Pr{任务违规} ≤ Σ ε。评测在 MATLAB/ns-3 上进行，含 4 个逻辑 E2 域、每域 3 个 O-DU。

## Key technical points (EN)

- Problem framing: existing RAN KPIs are retrospective and stationary; MCX missions are finite-horizon and the near-RT RIC's actions take time to actuate. FH-EC conditions on E2-observed initial state and charges for selection-to-actuation delay.
- FH-EC definition (Eq. 39): −1/(θ_s Δ_s) · log ℳ^FH(θ_s), with a service transform over the finite window; Proposition 1 shows convergence to conventional effective capacity as the horizon grows.
- Offline capability computation via Markov-additive kernels; Hoeffding lower confidence bounds produce a finite library of confidence-calibrated profiles; union bounds give post-selection simultaneous validity.
- Admission as a 0-1 LP at the near-RT RIC (Problem P1): multi-QoS (rate, delay, jitter, age-of-information), resource constraints, forbidden profile combinations, non-MCX utility protection threshold ρ_max, objective = FH-EC surplus minus resource cost.
- Theorem 1: every selected profile simultaneously satisfies capability lower bound, per-QoS risk upper bounds, resource availability, non-MCX protection, and joint mission risk Pr{mission violation} ≤ Σ ε_s^q.
- Network model: multiple O-DUs grouped into logical E2 control domains with heterogeneous measurements, control actions and actuation delays; single-connectivity (SC) and dual-path (DP, 2 PDCP duplication legs) transmission options; MCX and ordinary traffic share resources.
- Simulation (MATLAB/ns-3): 4 E2 domains x 3 O-DUs, 1 ms slots, mission horizons 0.1-5 s, QoS exponent θ 1e-3 to 1e-1, PHY BLER 1e-5, E2 observation age 1-500 ms, actuation delay 1-20 slots.
- Results: at a 1 s horizon, favourable vs degraded E2-observed initial states differ by ~0.88 Mbit/s — the initial condition is not ignorable at mission timescales. Sparse E2 exposure configurations lose an additional ~15-20% capacity at 500 ms observation age vs rich configurations.
- Multi-QoS constraints held simultaneously for up to 50 concurrent MCX users; non-MCX utility loss stayed under ρ_max with protected-user rate floors preserved at maximum MCX load.
- Connectivity finding: dual-path helps MCX supportability only under severe O-DU degradation (>50% resource loss); single-connectivity is preferred in normal operation on resource-efficiency grounds — i.e. duplication is a contingency mechanism, not a default.
- Baselines: Static-QPP (fixed reservation + priority scheduling), LT-EC (finite profiles with stationary EC), FH-SC (proposed, single-connectivity only), SNC-Delay (ORANUS-inspired delay-tail provisioning), and a full-state oracle with perfect information and zero delay.
- Postprint guard: fresh v1 submitted 2026-08-26 (cs.NI); no prior-venue banner or journal reference on the abstract page. Licence CC BY 4.0.

## Key technical points (ZH)

- 问题定位：现有 RAN KPI 是回溯且平稳的；MCX 任务是有限时域的，而近实时 RIC 的动作生效需要时间。FH-EC 以 E2 观测的初始状态为条件，并为"选择到执行"时延计价。
- FH-EC 定义（式 39）：−1/(θ_s Δ_s) · log ℳ^FH(θ_s)，服务变换定义在有限窗口上；命题 1 证明时域增长时收敛到传统有效容量。
- 以马尔可夫可加核离线计算能力；Hoeffding 置信下界产生有限的置信度标定画像库；并集界给出选择后同时有效性。
- 准入即近实时 RIC 上的 0-1 线性规划（问题 P1）：多维 QoS（速率、时延、抖动、信息年龄）、资源约束、禁止画像组合、非 MCX 效用保护阈值 ρ_max，目标为 FH-EC 盈余减资源成本。
- 定理 1：每个被选画像同时满足能力下界、各 QoS 维度风险上界、资源可用性、非 MCX 保护，以及联合任务风险 Pr{任务违规} ≤ Σ ε_s^q。
- 网络模型：多个 O-DU 归入逻辑 E2 控制域，各域测量能力、控制动作与执行时延异构；提供单连接（SC）与双路径（DP，2 条 PDCP 复制腿）两种传输选项；MCX 与普通业务共享资源。
- 仿真（MATLAB/ns-3）：4 个 E2 域 x 每域 3 个 O-DU，1 ms 时隙，任务时域 0.1-5 s，QoS 指数 θ 1e-3 至 1e-1，物理层 BLER 1e-5，E2 观测年龄 1-500 ms，执行时延 1-20 时隙。
- 结果：1 s 时域下，E2 观测到的"良好"与"劣化"初始状态相差约 0.88 Mbit/s——在任务时间尺度上初始条件不可忽略。稀疏 E2 暴露配置在 500 ms 观测年龄下比丰富配置额外损失约 15-20% 容量。
- 多维 QoS 约束在最多 50 个并发 MCX 用户下同时满足；最大 MCX 负载时非 MCX 效用损失仍低于 ρ_max，且受保护用户速率下限得以保持。
- 连接性结论：双路径仅在 O-DU 严重劣化（资源损失 >50%）时提升 MCX 承载能力；常态下出于资源效率仍优选单连接——即复制是应急机制而非默认配置。
- 基线：Static-QPP（固定预留 + 优先级调度）、LT-EC（有限画像但用平稳有效容量）、FH-SC（本文方法仅单连接）、SNC-Delay（受 ORANUS 启发的时延尾部配给），以及全状态 oracle（完美信息、零时延）。
- 重印守卫：2026-08-26 提交的新 v1（cs.NI）；摘要页无既往发表标记或期刊引用。许可 CC BY 4.0。

## Why it matters / what's new (EN)

This KB already holds the empirical half of this story: a field measurement at a 105,815-attendee stadium showing prioritised MCPTT holding near-100% success where an over-the-top MCX app collapsed to about 60%, with a cliff-edge jitter failure boundary. That entry established that priority treatment is what separates a working mission-critical service from a broken one under load. What it could not answer is how a network should *decide*, at admission time, whether it can actually keep that promise for a specific incident of a specific length — and this paper is a direct attempt at that decision procedure, which makes the two entries a natural measurement/mechanism pair.

Two things here are worth carrying forward independently of the specific numbers. The first is E2 conditioning: the paper treats *how much the RIC can see* as a first-order capacity variable and prices it, finding that a sparse E2 measurement exposure costs an extra 15-20% of certifiable capacity once observation age reaches half a second. That reframes E2 service-model richness from an interface-completeness question into a quantified service-assurance question, which is a more persuasive argument for E2SM coverage than the usual functional one. The second is the certified-profile-library pattern: pre-computing capabilities offline and shipping them as certificates that survive post-hoc selection is the same architectural move — pull the expensive reasoning out of the control loop, leave a verifiable artefact behind — that shows up in this KB's pre-actuation certification and verifiable-intent work on AI-driven RAN control. Seen together, "certify offline, select online, carry the bound with you" is becoming a recognisable design pattern in the O-RAN assurance literature rather than a one-off trick.

The honest limitations: this is a simulation study with no testbed, no real E2 traces and no RIC implementation, from a group with a large body of effective-capacity work whose analytical machinery is well-established and reused here; the headline 0.88 Mbit/s state gap is a modest number whose significance depends entirely on the assumed traffic model; and the whole framework inherits effective capacity's dependence on a QoS exponent θ that operators do not naturally possess for real incidents. Watch for whether the profile-library idea is picked up against real E2SM-KPM traces, and for O-RAN WG discussions on exposing certified capability rather than raw counters.

## Why it matters / what's new (ZH)

本库已有这个故事的实证一半：一场 105,815 人体育场的外场实测显示，在高负载下优先级化的 MCPTT 成功率接近 100%，而 OTT 类 MCX 应用跌至约 60%，并呈现悬崖式抖动失效边界。那个条目确立了"优先级处置"是关键任务业务在负载下可用与否的分水岭。但它无法回答的是：网络应如何在准入时**判定**自己能否为某个特定时长的具体事件兑现该承诺——本文正是对该判定过程的直接尝试，两个条目因而构成天然的"实测/机制"配对。

有两点值得脱离具体数字单独记取。其一是 E2 条件化：论文把"RIC 能看到多少"当作一阶容量变量并为之定价，发现观测年龄达到半秒时，稀疏的 E2 测量暴露会额外损失 15-20% 的可认证容量。这把 E2 服务模型的丰富度从"接口完备性"问题重构为可量化的"服务保障"问题，比通常的功能性论证更有说服力。其二是认证画像库模式：离线预计算能力、以"能经受事后选择"的证书形式交付——这与本库中 AI 驱动 RAN 控制的预执行认证与可验证意图工作是同一种架构手法：把昂贵推理移出控制环，留下可验证的产物。合观之下，"离线认证、在线选择、随身携带界"正在成为 O-RAN 保障文献中一种可辨识的设计模式，而非一次性技巧。

需要坦诚的局限：这是纯仿真研究，无测试床、无真实 E2 轨迹、无 RIC 实现；作者群在有效容量方向著述丰厚，其分析机器已相当成熟并在此复用；标志性的 0.88 Mbit/s 状态差本身数值不大，其意义完全取决于所设业务模型；整个框架还继承了有效容量对 QoS 指数 θ 的依赖，而运营商对真实事件并不天然拥有该参数。关注该画像库思路是否会在真实 E2SM-KPM 轨迹上被采用，以及 O-RAN 工作组关于"暴露已认证能力而非原始计数器"的讨论。

## Images
