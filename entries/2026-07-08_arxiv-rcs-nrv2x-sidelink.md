---
id: 2026-07-08_arxiv-rcs-nrv2x-sidelink
date_published: 2026-07-07
date_found: 2026-07-08
type: academic-paper
technology: cellular
title_en: "Repeated Contention Scheduling: reservation-free distributed resource allocation for NR-V2X sidelink toward 6G vehicular networks"
title_zh: "重复竞争调度（RCS）：面向 6G 车联网的 NR-V2X 侧链路免预约分布式资源分配"
url: "https://arxiv.org/abs/2607.06103"
source_quality: abstract_only
topics: [NR-V2X, sidelink, resource-allocation, SPS, 6G, SDR]
topic_primary: 5g-nr
topics_secondary: [6g-vision]
novelty_score: 2
---

## Summary (EN)

Rolich, Tricco, Paroli, Yildiz and Baiocchi (Sapienza University group; arxiv 2607.06103, submitted July 7, 2026; accepted at the 2026 Mediterranean Artificial Intelligence and Networking Conference, MAIN 2026) propose Repeated Contention Scheduling (RCS), a distributed resource-allocation algorithm for NR-V2X sidelink communications aimed at 6G vehicular systems. The paper positions RCS as a replacement for the two 3GPP-standardised sidelink allocation modes: Semi-Persistent Scheduling (SPS, mode 2's sensing-based long-term reservations) and dynamic scheduling.

RCS's core idea, per the abstract, is a multi-round, feedback-driven contention process: instead of vehicles reserving periodic resources long-term (the SPS pattern whose stale reservations are a known collision source under mobility and aperiodic traffic), devices contend repeatedly across rounds, with feedback from earlier rounds shaping later ones. This "eliminates long-term reservations and enables fully distributed operation". The authors report collision-reduction and timeliness improvements over the conventional schemes, validated both in simulation and on software-defined radios — SDR validation being relatively rare in the sidelink-allocation literature, where most proposals stop at system-level simulation.

Only the abstract was readable at ingest time (the arxiv HTML rendering 404s); the entry should be upgraded when the full text or the MAIN 2026 proceedings version becomes accessible. Open questions that need the full text: how many contention rounds RCS needs per selection window (the latency cost of iterating), what the feedback channel physically is (PSFCH-like signalling or implicit sensing), and how RCS coexists with legacy SPS devices in mixed deployments.

## Summary (ZH)

Rolich、Tricco、Paroli、Yildiz 和 Baiocchi（罗马第一大学团队；arxiv 2607.06103，2026 年 7 月 7 日提交；被 2026 地中海人工智能与网络会议 MAIN 2026 录用）提出重复竞争调度（RCS），一种面向 6G 车联网的 NR-V2X 侧链路分布式资源分配算法。论文将 RCS 定位为对 3GPP 标准化的两种侧链路分配模式的替代：半持久调度（SPS，模式 2 的基于感知的长期预约）和动态调度。

据摘要，RCS 的核心思想是多轮、反馈驱动的竞争过程：车辆不再长期预约周期性资源（SPS 模式下过期预约在高移动性和非周期业务场景中是已知的碰撞来源），而是跨多轮反复竞争，前轮反馈塑造后轮行为。这"消除了长期预约并实现完全分布式运行"。作者报告了相对传统方案的碰撞率下降和时效性改进，并同时用仿真和软件定义无线电（SDR）验证——SDR 级验证在侧链路分配文献中相对少见，多数提案止步于系统级仿真。

收录时仅摘要可读（arxiv HTML 渲染 404）；全文或 MAIN 2026 会议版本可获取后应升级本条目。需要全文回答的开放问题：RCS 每个选择窗口需要多少竞争轮次（迭代的时延成本）、反馈信道的物理载体是什么（类 PSFCH 信令还是隐式感知）、以及 RCS 如何与遗留 SPS 设备在混合部署中共存。

## Key technical points (EN)

- Target: NR-V2X sidelink (mode 2) resource allocation; positions against both SPS and dynamic scheduling.
- Mechanism: multi-round contention with inter-round feedback; no long-term reservations; fully distributed.
- Claimed gains: reduced collisions and improved timeliness vs conventional SPS/dynamic schemes.
- Validation: simulation plus software-defined radio experiments (implementation-level evidence, not just system simulation).
- Venue: MAIN 2026 (fresh 2026 publication, not a postprint backfill).

## Key technical points (ZH)

- 目标：NR-V2X 侧链路（模式 2）资源分配；同时对标 SPS 和动态调度。
- 机制：带轮间反馈的多轮竞争；无长期预约；完全分布式。
- 宣称收益：相对传统 SPS/动态方案降低碰撞、改善时效性。
- 验证：仿真加软件定义无线电实验（实现级证据，而非仅系统仿真）。
- 发表：MAIN 2026（2026 年新发表，非旧文回填）。

## Why it matters / what's new (EN)

The sidelink-allocation thread in this KB has so far been SPS-refinement flavoured; RCS is the first entry proposing to remove the reservation concept entirely rather than patch its sensing/collision behaviour. The repeated-contention-with-feedback shape is philosophically close to what the WiFi bins track as contention-control research (cf. the rtwt-latency lineage), applied to the cellular sidelink — a convergence worth watching as 6G V2X requirement discussions (deadline-aware scheduling, cf. 2607.04290 Agentic-V2X ingested 2026-07-07) push beyond what periodic reservations can deliver. SDR validation raises the credibility bar for a class of proposals that usually lives in simulators.

## Why it matters / what's new (ZH)

本 KB 的侧链路分配线索此前均属 SPS 改良路线；RCS 是第一个提出彻底移除预约概念（而非修补其感知/碰撞行为）的条目。这种"带反馈的重复竞争"形态在思想上与 WiFi 各桶跟踪的竞争控制研究（参见 rtwt-latency 谱系）相近，只是应用于蜂窝侧链路——随着 6G V2X 需求讨论（截止期感知调度，参见 2026-07-07 收录的 2607.04290 Agentic-V2X）超出周期性预约的能力范围，这种收敛值得关注。SDR 验证也为通常只活在仿真器里的这类提案提高了可信度门槛。
