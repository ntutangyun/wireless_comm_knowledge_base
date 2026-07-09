---
id: 2026-07-09_arxiv-evoomg-staged-madrl-legacy-mlo
date_published: 2026-07-08
date_found: 2026-07-09
type: academic-paper
title_en: "EvoOMG: Evolution-Oriented Multi-Agent Guidance for Heterogeneous Legacy-and-MLO Wi-Fi Networks"
title_zh: "EvoOMG：面向传统与 MLO 混合 Wi-Fi 网络的演进式多智能体分阶段调优框架"
url: "https://arxiv.org/abs/2607.07045"
source_quality: full
topics: [802.11be, MLO, MAC-layer, multi-agent-RL, A-MPDU, contention]
topic_primary: mlo
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

EvoOMG (arxiv 2607.07045, submitted July 8, 2026; Junjie Wu, Lingjian Zhou, Zerui Shao, Yi Zou, Tianrui Li, Yi Zhang, Ziyuan Yang) tackles a transition-period problem that most learning-based Wi-Fi optimizers ignore: real networks during the Wi-Fi 7/8 rollout are *heterogeneous by standard* — legacy single-link 802.11ax stations coexist with multi-link-capable 802.11be MLDs under the same AP. Existing multi-agent RL schemes treat all stations as one homogeneous population and map observations directly to a flat joint MAC action, which can neither express the legacy stations' single-link constraint nor the MLO stations' richer per-link action space, and which also collapses the MAC's natural temporal order (you first win contention, then decide what to aggregate) into one step.

The paper reformulates throughput optimization as a *standard-constrained, staged* multi-agent decision problem. Each station agent encodes its recent history (SNR, PER, idle-time ratio, queue backlog, previous actions) with a small Transformer plus a device descriptor distinguishing legacy from MLO stations. The per-agent policy is then factorized autoregressively into two stages that mirror the protocol: a *contention guidance* stage that outputs contention-window actions first, and an *aggregation guidance* stage that — conditioned on the contention decision — outputs A-MPDU aggregation lengths and AC-to-link scheduling. Standard-aware feasibility masks enforce that legacy agents only see single-link actions and that MLO link scheduling respects STR/NSTR (simultaneous-transmit-receive) constraints. Training is centralized-critic CTDE; execution is per-station local. Two theorems ground the design: a "staged optimal factorization" result (an optimal policy of the proposed contention-first form exists) and a performance-gap bound composing encoding and per-stage approximation errors.

In ns-3 (ns3-ai) simulations of an 802.11be AP serving mixed ax/be stations across 2.4/5/6 GHz with mobility, EvoOMG reaches 1,482.7 Mbps total goodput vs 1,148.3 Mbps for one-shot MADDPG (+29.1%) and 1,111.9 Mbps for independent DDPG (+33.3%), roughly halves AC_VO median latency vs MADDPG (~75-80 ms vs ~150-160 ms), and lifts link utilization under both STR and NSTR modes (58.5%/47.9% vs ~32-40%). Ablations show the centralized critic and the device embedding matter most (dropping them costs ~380 and ~180 Mbps respectively), while removing the feasibility masking preserves throughput but degrades fairness — i.e. the standard-awareness is what protects the legacy population.

## Summary (ZH)

EvoOMG（arxiv 2607.07045，2026 年 7 月 8 日提交；作者 Junjie Wu、Lingjian Zhou、Zerui Shao、Yi Zou、Tianrui Li、Yi Zhang、Ziyuan Yang）针对一个多数学习型 Wi-Fi 优化器忽略的过渡期问题：在 Wi-Fi 7/8 逐步部署的真实网络中，网络因标准差异而天然异构——传统单链路 802.11ax 站点与具备多链路能力的 802.11be MLD 共存于同一 AP 下。现有多智能体强化学习方案把所有站点当作同质群体，将观测直接映射为扁平的联合 MAC 动作，既无法表达传统站点的单链路约束，也无法刻画 MLO 站点更丰富的按链路动作空间，还把 MAC 天然的时序结构（先赢得竞争、再决定聚合）压缩成单步决策。

论文将吞吐优化重构为一个"标准约束的分阶段"多智能体决策问题。每个站点智能体用小型 Transformer 编码近期历史（SNR、PER、信道空闲比、队列积压、历史动作）并附带区分传统/MLO 的设备描述符。按协议顺序将策略自回归地分解为两级：先输出竞争窗口动作的"竞争引导"级，再在其条件下输出 A-MPDU 聚合长度与 AC 到链路调度的"聚合引导"级。标准感知的可行性掩码保证传统站点只见单链路动作、MLO 链路调度满足 STR/NSTR（同时收发）约束。训练采用集中式评论家的 CTDE 范式，执行时各站点仅用本地观测。两个定理支撑该设计：分阶段最优分解定理（存在满足竞争优先结构的最优策略）与由编码误差和各级近似误差组成的性能差界。

在 ns-3（ns3-ai）对 802.11be AP 服务 ax/be 混合站点（2.4/5/6 GHz、含移动性）的仿真中，EvoOMG 总有效吞吐达 1,482.7 Mbps，对比单步 MADDPG 的 1,148.3 Mbps（+29.1%）和独立 DDPG 的 1,111.9 Mbps（+33.3%）；AC_VO 中位时延约为 MADDPG 的一半（约 75-80 ms 对 150-160 ms）；STR 与 NSTR 模式下链路利用率均显著提升（58.5%/47.9% 对约 32-40%）。消融实验显示集中式评论家与设备嵌入最关键（分别损失约 380 和 180 Mbps），而去掉可行性掩码虽保吞吐但损公平性——正是标准感知机制在保护传统站点群体。

## Key technical points (EN)

- Problem framing: "standard-induced heterogeneity" — legacy 802.11ax single-link stations and 802.11be MLO stations coexist and cannot share a flat action space in multi-agent RL.
- Autoregressive two-stage policy per agent: contention-window guidance first, then aggregation/link-scheduling guidance conditioned on it — mirroring the MAC's contention-before-transmission order.
- Standard-aware feasibility masking: legacy agents' MLO actions masked out; MLO scheduling constrained by STR/NSTR feasibility; per-AC and per-link bounds respected.
- Transformer history encoder (16-dim, 2 heads, 5-epoch window) + device-type embedding; CTDE with a centralized critic over joint histories; optional federated aggregation across domains.
- Theorems: staged optimal factorization exists (Thm 2); performance gap bounded by composed encoding/stage errors (Thm 3).
- ns-3 results: 1,482.7 Mbps total goodput (+29.1% vs MADDPG, +78.1% vs conservative baseline); AC_VO median latency roughly halved; NSTR throughput 1,414.4 vs 1,094.8 Mbps (+29.2%).
- Ablations: centralized critic (-376 Mbps if removed) and device embedding (-181 Mbps) are the load-bearing pieces; masking mainly protects fairness for legacy stations.

## Key technical points (ZH)

- 问题定义："标准导致的异构性"——传统 802.11ax 单链路站点与 802.11be MLO 站点共存，多智能体 RL 无法用扁平动作空间统一表达。
- 每个智能体的自回归两级策略：先给出竞争窗口引导，再在其条件下给出聚合/链路调度引导——对应 MAC "先竞争后传输"的时序。
- 标准感知可行性掩码：传统站点的 MLO 动作被屏蔽；MLO 调度受 STR/NSTR 可行性约束；遵守每 AC、每链路的配置边界。
- Transformer 历史编码器（16 维、2 头、5 轮窗口）+ 设备类型嵌入；基于联合历史的集中式评论家 CTDE；可选跨域联邦聚合。
- 理论支撑：分阶段最优分解定理（定理 2）；由编码/分级误差组成的性能差界（定理 3）。
- ns-3 结果：总有效吞吐 1,482.7 Mbps（较 MADDPG +29.1%，较保守基线 +78.1%）；AC_VO 中位时延约减半；NSTR 吞吐 1,414.4 对 1,094.8 Mbps（+29.2%）。
- 消融：集中式评论家（移除损失约 376 Mbps）与设备嵌入（损失约 181 Mbps）最关键；掩码主要保护传统站点的公平性。

## Why it matters / what's new (EN)

The KB already holds learning-based MAC optimizers (2026-05-01_arxiv-blade-adaptive-contention on contention windows; MLO scheduling entries under the mlo bin), but those treat the station population as protocol-homogeneous. EvoOMG is the first entry to *formalize the legacy-vs-MLO coexistence itself* as the learning problem — the staged, standard-masked policy factorization (contention first, aggregation second, with STR/NSTR-aware masks) is the mechanism-level novelty, and its ablation showing that device-type awareness is worth ~180 Mbps quantifies how much the transition-period heterogeneity actually costs. Practically relevant for any mixed-fleet enterprise WLAN during the multi-year Wi-Fi 7/8 migration window.

## Why it matters / what's new (ZH)

本 KB 已收录学习型 MAC 优化工作（如 2026-05-01_arxiv-blade-adaptive-contention 的竞争窗口自适应、mlo 主题下的多链路调度条目），但它们都假设站点群体协议同质。EvoOMG 是首个把"传统与 MLO 共存"本身形式化为学习问题的条目——分阶段、按标准掩码的策略分解（先竞争、后聚合，带 STR/NSTR 感知掩码）是机制层面的创新点；其消融实验量化了设备类型感知的价值（约 180 Mbps），即过渡期异构性的真实代价。对处于多年期 Wi-Fi 7/8 迁移窗口的混合设备企业 WLAN 具有直接现实意义。

## Images

![EvoOMG framework architecture | EvoOMG 框架总体架构](https://arxiv.org/html/2607.07045v1/frameworkv4.png)
![Total system reward convergence | 系统总奖励收敛曲线](https://arxiv.org/html/2607.07045v1/x1.png)
![STR/NSTR system throughput comparison | STR/NSTR 系统吞吐对比](https://arxiv.org/html/2607.07045v1/x14.png)
![Ablation study results | 消融实验结果](https://arxiv.org/html/2607.07045v1/x15.png)
