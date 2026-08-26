---
id: 2026-08-26_arxiv-marl-ris-auction-security
date_published: 2026-08-23
date_found: 2026-08-26
type: academic-paper
technology: cellular
title_en: "MARL-Based Sequential RIS Auctions: A Physical-Layer Security Analysis"
title_zh: "基于多智能体强化学习的时序 RIS 拍卖：物理层安全分析"
url: "https://arxiv.org/abs/2608.22169"
source_quality: full
topics: [RIS, reconfigurable-intelligent-surface, physical-layer-security, auction, Markov-game, MADDPG, multi-agent-RL, eavesdropping, secrecy-rate, network-economics, 6G]
topic_primary: cellular-security
topics_secondary: [6g-vision]
novelty_score: 2
---

## Summary (EN)
A Xidian University team (Yuanyu Zhang, Yu Zhang, He, Huang, Zhao, Yulong Shen) analyzes a threat model the reconfigurable-intelligent-surface (RIS) security literature has ignored: what happens when the RIS is not owned by either communicating party but operated as a neutral, market-oriented resource — the deployment model widely proposed for 6G — and an eavesdropper can simply *buy* reflecting capacity. In their setting an independent RIS operator auctions M = 8 modular reflecting elements one per round over 8 rounds of first-price sealed-bid auctions; a legitimate receiver (Bob) and a strategic eavesdropper (Eve) compete as bidders. Eve stays passive on the radio channel — invisible to conventional physical-layer defenses — but participates in the RIS market posing as a legitimate requester, converting money into interception capability.

The sequential bidding contest is formulated as a two-player Markov (stochastic) game whose state carries the accumulated rate, normalized remaining-budget ratio, auction progress, module valuation and previous clearing price, with continuous bid-ratio actions and economic surplus (valuation minus cost) as reward. Both bidders learn via MADDPG under centralized training / decentralized execution. Simulations show the learned budget-aware strategy dominates fixed and random bidding: secrecy rate 2.70 bps/Hz versus 2.57 for the best fixed strategy, secrecy-per-unit-cost 1.03 versus 0.45, and economic surplus 10.34 versus 6.36 — approaching the ideal physical-layer upper bound while spending substantially less.

## Summary (ZH)
西安电子科技大学团队（张源煜、张宇、贺佳璐、黄志鑫、赵双睿、沈玉龙）分析了 RIS 安全文献一直忽略的威胁模型：当可重构智能表面（RIS）不属于通信任一方、而是作为中立的市场化资源运营（6G 中被广泛提议的部署模式）时，窃听者可以直接*购买*反射能力。设定中，独立 RIS 运营方将 M = 8 个模块化反射单元经 8 轮首价密封拍卖逐轮出售；合法接收方（Bob）与策略性窃听者（Eve）作为竞拍者竞争。Eve 在无线信道上保持无源——常规物理层防御无法察觉——却以合法请求者身份参与 RIS 市场，把资金转化为截获能力。

时序竞拍被建模为双人马尔可夫（随机）博弈：状态包含累计速率、归一化剩余预算比、拍卖进度、模块估值与上一轮成交价，动作为连续出价比例，奖励为经济盈余（估值减成本）。双方经集中训练/分散执行的 MADDPG 学习出价策略。仿真表明预算感知的学习策略全面优于固定与随机出价：保密速率 2.70 bps/Hz（最优固定策略 2.57）、单位成本保密收益 1.03（对比 0.45）、经济盈余 10.34（对比 6.36）——以显著更低开销逼近理想物理层上界。

## Key technical points (EN)
- Threat model: neutral third-party RIS operator sells reflecting modules by auction; the eavesdropper is radio-passive (undetectable by conventional PLS) but market-active, bidding as a legitimate requester — "market-enabled eavesdropping."
- Mechanism: sequential first-price sealed-bid auctions, one of M = 8 modules per round over Ta = 8 rounds; module control determines whose channel the reflection coherently helps.
- Game formulation: two-player stochastic (Markov) game; state = accumulated rate, normalized budget ratio, auction progress, module valuation, previous price; action = continuous bid ratio in [0,1]; reward = economic surplus.
- Learning: MADDPG with centralized training / decentralized execution; both Bob and Eve learn budget-aware sequential strategies.
- Headline numbers: secrecy rate 2.70 bps/Hz vs 2.57 (best fixed-0.7 baseline); secrecy/cost ratio 1.03 vs 0.45 (fixed-0.4); economic surplus 10.34 vs 6.36; learned policy approaches the physical-layer ideal upper bound.
- Framing: explicitly positioned for 6G market-oriented RIS deployments; no 3GPP normative citations — the contribution is the economic-adversary model, not a standards mechanism.
- Fresh v1 submitted 2026-08-23 (cs.CR primary); no prior-venue banner — passes the postprint guard.

## Key technical points (ZH)
- 威胁模型：中立第三方 RIS 运营方按拍卖出售反射模块；窃听者在无线电上无源（常规物理层安全手段无法检测）但在市场上活跃、以合法请求者身份出价——"市场使能的窃听"。
- 机制：时序首价密封拍卖，M = 8 个模块在 Ta = 8 轮中逐轮成交；模块控制权决定反射相干增强谁的信道。
- 博弈建模：双人随机（马尔可夫）博弈；状态 = 累计速率、归一化预算比、拍卖进度、模块估值、上轮价格；动作 = [0,1] 连续出价比例；奖励 = 经济盈余。
- 学习：集中训练/分散执行的 MADDPG；Bob 与 Eve 均学习预算感知的时序策略。
- 关键数字：保密速率 2.70 bps/Hz 对 2.57（最优固定 0.7 基线）；保密/成本比 1.03 对 0.45（固定 0.4）；经济盈余 10.34 对 6.36；学习策略逼近物理层理想上界。
- 定位：明确面向 6G 市场化 RIS 部署；无 3GPP 规范性引用——贡献在经济对手模型而非标准机制。
- 2026-08-23 提交的新 v1（cs.CR 主分类）；无既往发表标记——通过重印守卫。

## Why it matters / what's new (EN)
The KB has deliberately held a high bar against the crowded RIS-optimization space (multiple RIS surveys and beamforming papers dropped), but this paper is not another beamforming variant: it is the first entry to treat the *economic layer* of infrastructure-as-a-service wireless as an attack surface. If RIS is deployed the way the 6G literature proposes — neutral operators renting reflection capacity — then physical-layer secrecy stops being a purely radio problem: an adversary who never transmits can degrade secrecy by outbidding the legitimate user, and defenses must include auction design and budget strategy, not just precoding. That reframing pairs naturally with the KB's fresh market-mechanism entries (STAR-GS truthful ground-station auctions, 08-25) and extends the cellular-security bin beyond attack/defense mechanics into resource-market adversaries. The quantitative story — learned sequential bidding more than doubles secrecy-per-cost versus fixed strategies — is a simulation result with stylized valuations, and the lack of any standards mechanism keeps this at novelty 2; but the question it opens (should wireless-infrastructure marketplaces screen or price-discriminate bidders whose utility is interception?) is one mechanism-design and security communities will both inherit as RIS-as-a-service proposals mature.

## Why it matters / what's new (ZH)
知识库对拥挤的 RIS 优化领域一直保持高门槛（多篇 RIS 综述与波束赋形论文被拒收），但本文不是又一个波束赋形变体：它是首个把"基础设施即服务"无线的*经济层*当作攻击面的条目。如果 RIS 按 6G 文献提议的方式部署——中立运营方出租反射能力——那么物理层保密就不再是纯无线电问题：从不发射的对手可以通过竞价压过合法用户来削弱保密性，防御必须包含拍卖设计与预算策略，而不只是预编码。这一重构与库中新收的市场机制条目（STAR-GS 诚实地面站拍卖，08-25）自然呼应，并把 cellular-security 栏目从攻防机制扩展到资源市场对手。定量结论——学习型时序出价使单位成本保密收益较固定策略翻倍以上——是基于风格化估值的仿真结果，且缺少标准机制，故定为新颖度 2；但它提出的问题（无线基础设施市场是否应甄别或差别定价"效用即截获"的竞拍者？）将随 RIS 即服务提案的成熟被机制设计与安全两个社区共同继承。

## Images
![Network and auction model](https://arxiv.org/html/2608.22169v1/fig1.png)
