---
id: 2026-08-17_arxiv-marl-multi-orbit-handover-power
date_published: 2026-08-14
date_found: 2026-08-17
type: academic-paper
technology: satellite
title_en: "Multi-Agent RL for Joint Handover Management and Power Allocation in Multi-Orbit Satellite Networks — MAPPO+TarMAC that offloads users across LEO/MEO/GEO layers to cut handovers 4x"
title_zh: "多轨卫星网络中联合切换管理与功率分配的多智能体强化学习——用 MAPPO+TarMAC 在 LEO/MEO/GEO 层间卸载用户，将切换减少 4 倍"
url: "https://arxiv.org/abs/2608.14335"
source_quality: full
topics: [multi-orbit, LEO-MEO-GEO, handover-management, power-allocation, MARL, MAPPO, TarMAC, user-association, MINLP, 6G-NTN]
topic_primary: sat-ai
topics_secondary: [leo-constellations, sat-direct-device]
novelty_score: 2
---

## Summary (EN)
Afif, Balakrishnan, Martins, Almekhlafi, Lesage-Landry and Karabulut Kurt (submitted 14 Aug 2026, eess.SP) address a control problem specific to future 6G non-terrestrial networks that combine LEO, MEO and GEO satellites: the complementary orbital layers must be coordinated through *joint* user association, power allocation and handover management, all under fast LEO dynamics. They formulate this as a mixed-integer nonlinear program (MINLP) coupling discrete association decisions with continuous power allocation through bilinear constraints, then decompose it: a multi-agent reinforcement-learning policy selects the satellite-beam associations, while a convex power-allocation subproblem is solved exactly at each time slot and defines the MARL reward. The key modeling move is that layer-dependent handover penalties (intra-layer α₁ < adjacent-layer α₂ < LEO-to-GEO α₃) enter both the optimization objective and the learning reward, and each user-agent's state encodes the orbital layer of its k candidate satellites (LEO=0, MEO=0.5, GEO=1) so the policy learns associations that account for how expensive a given handover will be.

The association policy is trained with multi-agent proximal policy optimization (MAPPO) plus the targeted multi-agent communication (TarMAC) mechanism, letting agents coordinate. Evaluation uses a realistic multi-constellation scenario built from real two-line-element (TLE) data over Nairobi, Kenya: 30 ground users, an initial 20 LEO satellites with 10 more added per checkpoint across a 50-minute episode to expose the policy to realistic handover opportunities. Results: the learned policy reaches 92% of a greedy SNR-maximizing scheme's rate (7.55 Mbps) while triggering more than four times fewer handovers (6.2 per slot), and beats a conservative stay heuristic by ~14% in rate. Most interesting is the comparison against an LEO-only learned policy of identical architecture: the multi-orbit policy attains slightly higher rate with fewer handovers by offloading ~5% of users to higher layers (1% MEO, 4% GEO) — an emergent multi-orbit behavior that drives its favorable rate/handover trade-off, i.e. the agents learn to park stability-sensitive users on the slower-moving MEO/GEO layers to avoid the churn of LEO handovers.

## Summary (ZH)
Afif、Balakrishnan、Martins、Almekhlafi、Lesage-Landry 与 Karabulut Kurt（2026 年 8 月 14 日提交，eess.SP）针对未来融合 LEO、MEO 与 GEO 的 6G 非地面网络的一个特有控制问题：互补的轨道层必须通过*联合*用户关联、功率分配与切换管理来协调，且要应对快速的 LEO 动态。他们将其建模为混合整数非线性规划（MINLP），用双线性约束把离散关联决策与连续功率分配耦合起来，随后进行分解：由多智能体强化学习策略选择卫星–波束关联，而每个时隙精确求解一个凸功率分配子问题并以其定义 MARL 奖励。关键建模在于：与层相关的切换代价（层内 α₁ < 相邻层 α₂ < LEO 到 GEO α₃）同时进入优化目标与学习奖励，且每个用户智能体的状态编码其 k 个候选卫星的轨道层（LEO=0、MEO=0.5、GEO=1），使策略学到能权衡切换代价的关联。

关联策略用多智能体近端策略优化（MAPPO）加定向多智能体通信（TarMAC）机制训练，使智能体得以协同。评估采用基于肯尼亚内罗毕上空真实两行根数（TLE）构建的多星座场景：30 个地面用户，初始 20 颗 LEO 卫星，在 50 分钟回合内每检查点新增 10 颗，以暴露真实切换机会。结果：所学策略达到贪婪 SNR 最大化方案速率（7.55 Mbps）的 92%，同时切换次数减少 4 倍以上（每时隙 6.2 次），并较保守的"保持"启发式速率高约 14%。最有意思的是与相同架构的仅 LEO 学习策略对比：多轨策略以更少切换获得略高速率，方法是将约 5% 用户卸载到更高层（1% MEO、4% GEO）——这一涌现的多轨行为驱动了其有利的速率/切换权衡，即智能体学会把对稳定性敏感的用户安置到移动较慢的 MEO/GEO 层以避免 LEO 切换的频繁抖动。

## Key technical points (EN)
- **Problem:** joint user association + power allocation + handover management across LEO/MEO/GEO under fast LEO dynamics; MINLP with bilinear coupling.
- **Decomposition:** MARL policy for discrete beam associations; convex power-allocation subproblem solved exactly per slot, defining the reward.
- **Reward/state:** layer-dependent handover penalties α₁(intra) < α₂(adjacent) < α₃(LEO-GEO) in objective + reward; per-agent state encodes candidate layer (LEO=0, MEO=0.5, GEO=1).
- **Algorithm:** MAPPO + TarMAC targeted communication.
- **Scenario:** real TLE over Nairobi; 30 users; 20 LEO + 10/checkpoint; 50-min episode.
- **Results:** 92% of greedy-SNR rate (7.55 Mbps) at >4× fewer handovers (6.2/slot); +~14% over stay heuristic; vs LEO-only, higher rate + fewer handovers via ~5% offload to higher layers (1% MEO, 4% GEO).

## Key technical points (ZH)
- **问题：** 快速 LEO 动态下跨 LEO/MEO/GEO 的联合用户关联 + 功率分配 + 切换管理；带双线性耦合的 MINLP。
- **分解：** MARL 策略负责离散波束关联；每时隙精确求解凸功率分配子问题并定义奖励。
- **奖励/状态：** 与层相关的切换代价 α₁(层内) < α₂(相邻) < α₃(LEO-GEO) 进入目标与奖励；每智能体状态编码候选层（LEO=0、MEO=0.5、GEO=1）。
- **算法：** MAPPO + TarMAC 定向通信。
- **场景：** 内罗毕上空真实 TLE；30 用户；20 LEO + 每检查点 10 颗；50 分钟回合。
- **结果：** 达贪婪 SNR 速率（7.55 Mbps）的 92%，切换减少 >4 倍（6.2/时隙）；较"保持"启发式 +约 14%；对比仅 LEO，通过约 5% 卸载到更高层（1% MEO、4% GEO）获得更高速率 + 更少切换。

## Why it matters / what's new (EN)
The KB's sat-ai control-loop thread already spans prediction, interference, beam-hopping, placement and orchestration (2026-07-02 NEO-GNN orchestration, 2026-07-07 BRIDGE beam-hopping, 2026-08-04 LoS-skyline handover), but every one treats a single LEO layer. This is the first entry where the learned policy's decision variable is *which orbital layer* to camp a user on, and the interesting result is emergent: given a shared reward that prices LEO-to-GEO handovers highest, MAPPO agents discover on their own that offloading a small fraction of users to MEO/GEO buys a large reduction in handover churn at almost no rate cost — a multi-orbit strategy that a single-layer policy structurally cannot express. That matters for the multi-orbit operators the KB has been tracking (Telesat GEO+LEO, the SES/O3b MEO layer, and future integrated 6G NTN), where handover signaling overhead — not raw capacity — is often the binding constraint. Caveats: simulation-only on a single Nairobi scenario, a modest 30-user scale, and the reported rate (7.55 Mbps greedy reference) reflects the specific link budget rather than a deployment claim.

## Why it matters / what's new (ZH)
知识库的 sat-ai 控制环线索已涵盖预测、干扰、波束跳变、放置与编排（2026-07-02 NEO-GNN 编排、2026-07-07 BRIDGE 波束跳变、2026-08-04 视距天际线切换），但每一项都只处理单一 LEO 层。本条目首次将所学策略的决策变量设为*把用户驻留在哪个轨道层*，且其有趣结果是涌现的：在把 LEO 到 GEO 切换定价最高的共享奖励下，MAPPO 智能体自行发现将一小部分用户卸载到 MEO/GEO 能以几乎无速率代价换取切换抖动的大幅下降——这是单层策略在结构上无法表达的多轨策略。这对知识库一直跟踪的多轨运营商（Telesat GEO+LEO、SES/O3b 的 MEO 层，以及未来一体化 6G NTN）很重要，因为约束往往是切换信令开销而非原始容量。限制：仅在单一内罗毕场景下仿真、30 用户的适中规模，且所报速率（贪婪参考 7.55 Mbps）反映特定链路预算而非部署承诺。
