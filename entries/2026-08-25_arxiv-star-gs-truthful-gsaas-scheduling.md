---
id: 2026-08-25_arxiv-star-gs-truthful-gsaas-scheduling
date_published: 2026-08-23
date_found: 2026-08-25
type: academic-paper
technology: satellite
title_en: "STAR-GS (IEEE ICNP 2026) — truthful, visibility-aware downlink scheduling for Ground Station as a Service: EDF schedulability + best-fit station assignment + critical-payment auction pricing, near-MILP revenue in polynomial time"
title_zh: "STAR-GS（IEEE ICNP 2026）——面向\"地面站即服务\"的可激励真实报价、可见性感知的下行调度：EDF 可调度性检验 + 最紧适配地面站指派 + 关键支付拍卖定价，以多项式时间逼近 MILP 收益"
url: "https://arxiv.org/abs/2608.22222"
source_quality: full
topics: [ground-station-as-a-service, GSaaS, downlink-scheduling, visibility-windows, auction-mechanism, truthful-bidding, EDF, critical-payment, mechanism-design, ground-segment]
topic_primary: leo-constellations
topics_secondary: [sat-iot]
novelty_score: 2
---

## Summary (EN)
Wang, Wang, Gu, Guo and Yu (arxiv cs.NI/cs.ET/cs.GT, 23 Aug 2026; accepted to IEEE ICNP 2026) tackle the provider-side scheduling problem of **Ground Station as a Service (GSaaS)** — the commercial model in which a provider operates geo-distributed ground stations and leases downlink capacity on demand to satellite operators. Unlike vertically integrated mega-constellations (Starlink, Kuiper) with dedicated ground segments, most LEO satellites depend on shared GSaaS infrastructure, where three complications collide: **orbital visibility windows** make each satellite reachable from each station only during short, overlapping, but predictable contact intervals; downlink tasks carry hard **deadlines** (a missed deadline yields zero revenue); and task owners are **strategic bidders** with private valuations who may misreport bids to lower their payments or improve admission odds. The joint admission / station-assignment / bandwidth-allocation revenue-maximization problem is proven NP-hard (reduction from 0-1 knapsack).

STAR-GS decomposes this into four coupled pieces with proven properties. A key structural lemma converts fractional FDMA bandwidth sharing into an equivalent **preemptive full-bandwidth schedule**, so feasibility under fixed assignments reduces to a deadline-scheduling problem testable by an **EDF (Earliest Deadline First) schedulability check** (a returned feasible EDF schedule certifies feasibility, and deletion monotonicity holds — removing tasks never breaks feasibility). A **best-fit ground-station assignment** processes tasks in descending bid order and places each on the feasible station with the smallest residual slack, preserving loose stations for restrictive tasks. **Bid-aware admission** filters bids below a reserve price and greedily admits in descending bid order subject to EDF feasibility; **critical-payment pricing** charges each winner the smallest bid at which it would still win (binary search). Together (Theorem 2) the mechanism is dominant-strategy incentive compatible (truthful bidding is optimal regardless of others), individually rational, reserve-price protected, and polynomial-time.

Evaluation uses a 24-satellite Walker LEO constellation (3 planes x 8) and 6 ground stations with Ansys-STK-generated visibility windows, a 24-hour horizon in 60-second slots, 80 Mbps per-station bandwidth, and tasks of 5-20 GB with bids 50-100 and 30-90-slot deadline slack. At 500 tasks STAR-GS earns the highest revenue — bid-agnostic EDF reaches only ~76.8% of it, highest-bid-first with naive assignment ~51.0%, satellite-centric best-visibility ~22.4%. Against a MILP optimum on 30-270-task instances, STAR-GS with critical-payment pricing achieves near-MILP revenue while the MILP's runtime blows past 32 s at 270 tasks vs STAR-GS at <4 s for 300 tasks and ~20 s at 900 tasks.

## Summary (ZH)
Wang、Wang、Gu、Guo 与 Yu（arxiv cs.NI/cs.ET/cs.GT，2026 年 8 月 23 日；已被 IEEE ICNP 2026 录用）研究**"地面站即服务"（GSaaS）**的供给侧调度问题——即由服务商运营地理分布的地面站群、按需向卫星运营商出租下行链路容量的商业模式。与拥有专用地面段的一体化巨型星座（Starlink、Kuiper）不同，大多数 LEO 卫星依赖共享的 GSaaS 基础设施，三重难点在此交汇：**轨道可见性窗口**使每颗卫星只能在短暂、相互重叠但可预测的过境区间内接入特定地面站；下行任务带有硬**截止期**（错过即零收益）；任务方是持有私有估值的**策略性竞标者**，可能虚报出价以压低支付或提高录取概率。联合的任务准入/地面站指派/带宽分配收益最大化问题被证明为 NP 难（从 0-1 背包问题归约）。

STAR-GS 将其分解为四个带有可证性质的耦合组件。一个关键结构引理将分数化的 FDMA 带宽共享转化为等价的**可抢占全带宽调度**，使固定指派下的可行性归结为可用 **EDF（最早截止期优先）可调度性检验**判定的截止期调度问题（EDF 给出可行调度即证明可行，且满足删除单调性——移除任务不破坏可行性）。**最紧适配地面站指派**按出价降序处理任务，将每个任务放到剩余松弛量最小的可行地面站，把宽松的站留给约束更紧的任务。**出价感知准入**先过滤低于保留价的出价，再按出价降序、以 EDF 可行性为约束贪心录取；**关键支付定价**向每个中标者收取其仍能中标的最小出价（二分搜索求得）。综合（定理 2）该机制满足占优策略激励相容（无论他人如何出价，真实报价最优）、个体理性、保留价保护，且多项式时间可解。

评估采用 24 星 Walker LEO 星座（3 轨道面 x 8 星）与 6 个地面站，可见性窗口由 Ansys STK 生成，规划区间 24 小时、按 60 秒时隙离散（1440 隙），每站带宽 80 Mbps，任务量 5-20 GB、单位出价 50-100、截止期松弛 30-90 隙。在 500 任务负载下 STAR-GS 收益最高——不看出价的 EDF 仅达其约 76.8%，"最高出价优先+朴素指派"约 51.0%，"卫星侧最佳可见性"约 22.4%。与 30-270 任务规模上的 MILP 最优解相比，STAR-GS 配合关键支付定价可逼近 MILP 收益，而 MILP 在 270 任务时运行时间已超 32 秒，STAR-GS 在 300 任务时 <4 秒、900 任务时约 20 秒。

## Key technical points (EN)
- **Problem:** GSaaS provider must jointly decide task admission, single-primary-station assignment (matching contact-reservation practice), and per-slot bandwidth allocation; payment accrues only for tasks fully downlinked before deadline; revenue maximization proven NP-hard (0-1 knapsack reduction).
- **Model:** task (i,k) = arrival A, deadline D, demand tau, private unit value v, unit bid; feasible service window = task lifetime intersected with satellite-station visibility windows; FDMA sharing of per-station bandwidth B_j (80 Mbps default); spectral efficiency eta_ij per link.
- **Lemma 1 (structural):** any fractional bandwidth allocation is equivalent to a preemptive full-bandwidth schedule — reduces feasibility to deadline scheduling.
- **Algorithm 1 (EDF_Check):** per slot, serve the serviceable unfinished task with earliest deadline at full bandwidth; returned schedule certifies feasibility (Lemma 2); deletion-monotone (Lemma 3).
- **Algorithm 2 (best-fit assignment):** descending-bid processing; among stations passing the tentative EDF check, pick the one with smallest residual slack (tightest fit) to keep flexible capacity for restrictive tasks.
- **Algorithm 3 (admission + pricing):** reserve-price filter rho; greedy descending-bid admission under EDF feasibility; critical payment = smallest winning bid found by binary search; monotone winner rule (Lemma 4) + threshold payment (Lemma 5) yield dominant-strategy incentive compatibility, individual rationality, reserve-price protection, polynomial runtime (Theorem 2).
- **Evaluation:** 24-sat Walker (3x8) + 6 stations, STK visibility, 24 h / 60 s slots, 300-task default (5-20 GB, bids 50-100, slack 30-90 slots); baselines TSN-MILP, CR-Throughput (greedy volume), EDF, HBF-NA, SC-BV.
- **Results:** at 500 tasks EDF ~76.8% / HBF-NA ~51.0% / SC-BV ~22.4% of STAR-GS revenue; near-MILP revenue at 30-270 tasks; runtime <4 s @300 tasks, ~20 s @900 vs MILP 32+ s @270; acceptance ratio comparable to EDF but with higher-value task mix; robustness holds under heterogeneous station capacities and bursty arrivals (70% of tasks in 3 peaks); critical-payment revenue + owner utility = gross completed value (efficiency accounting).
- **Future work (authors'):** online arrivals, time-varying channels, dynamic station capacity, adaptive reserve pricing, multi-station task splitting.

## Key technical points (ZH)
- **问题：** GSaaS 服务商须联合决定任务准入、单一主站指派（贴合过境预约的工程实践）与逐时隙带宽分配；仅当任务在截止期前完整下传才产生收入；收益最大化被证明 NP 难（0-1 背包归约）。
- **模型：** 任务 (i,k) = 到达 A、截止期 D、数据量 tau、私有单位估值 v、单位出价；可行服务窗口 = 任务生存期与星-站可见性窗口之交；各站带宽 B_j（默认 80 Mbps）按 FDMA 共享；每链路谱效率 eta_ij。
- **引理 1（结构性）：** 任意分数化带宽分配等价于一个可抢占的全带宽调度——将可行性归结为截止期调度。
- **算法 1（EDF_Check）：** 每时隙对可服务的未完成任务中截止期最早者全带宽服务；返回的调度即可行性证书（引理 2）；满足删除单调性（引理 3）。
- **算法 2（最紧适配指派）：** 按出价降序处理；在通过试探性 EDF 检验的站中选剩余松弛量最小者（最紧适配），为受限任务保留弹性容量。
- **算法 3（准入+定价）：** 保留价 rho 过滤；EDF 可行性约束下按出价降序贪心准入；关键支付 = 二分搜索求得的最小中标出价；单调中标规则（引理 4）+ 门限支付（引理 5）给出占优策略激励相容、个体理性、保留价保护与多项式运行时间（定理 2）。
- **评估：** 24 星 Walker（3x8）+ 6 站、STK 可见性、24 小时/60 秒时隙、默认 300 任务（5-20 GB、出价 50-100、松弛 30-90 隙）；基线为 TSN-MILP、CR-Throughput（贪心吞吐）、EDF、HBF-NA、SC-BV。
- **结果：** 500 任务时 EDF 约 76.8%、HBF-NA 约 51.0%、SC-BV 约 22.4%（相对 STAR-GS 收益）；30-270 任务规模逼近 MILP 收益；运行时间 300 任务 <4 秒、900 任务约 20 秒，MILP 在 270 任务已超 32 秒；录取率与 EDF 相当但任务价值构成更高；在异构站容量与突发到达（70% 任务集中于 3 个峰）下稳健；关键支付收入 + 任务方效用 = 完成任务总价值（效率核算成立）。
- **未来方向（作者自述）：** 在线到达、时变信道、动态站容量、自适应保留价、多站任务拆分。

## Why it matters / what's new (EN)
This is the KB's first entry at the **market-mechanism layer of the shared ground segment** — the leo-constellations bin already covers ground-station *placement* (SCoRe, 06-13) and ground-station networks as *PNT infrastructure* (ground-to-space GNSS coordination, 08-20), but nothing on how a commercial GSaaS operator should sell contested downlink capacity. The framing matches where the industry actually is: AWS Ground Station, KSAT, Leaf Space and Azure Orbital-style offerings serve the long tail of smallsat/EO/IoT operators who cannot afford dedicated ground segments, and contention for short overlapping passes is the defining scarcity. The technical core is a clean marriage of two mature toolboxes — real-time-systems schedulability (EDF with a provable full-bandwidth-equivalence lemma) and single-parameter auction theory (monotone allocation + critical payments) — such that economic truthfulness and physical schedulability are guaranteed *simultaneously*, which neither greedy revenue heuristics nor bid-agnostic schedulers deliver (the ~2x revenue gap over highest-bid-first-naive shows assignment quality, not bidding, is where naive mechanisms lose). Novelty is scored 2 rather than 3 because the setting is simulation-only at modest scale (24 satellites, 6 stations) and the mechanism components are individually standard; the contribution is the certified composition. It also gives the bin a second game-theoretic entry after the L-COIN offloading paper (08-19), suggesting mechanism design is arriving in LEO operations research along multiple fronts.

## Why it matters / what's new (ZH)
这是知识库在**共享地面段的市场机制层面**的第一条条目——leo-constellations 条目库已覆盖地面站*选址*（SCoRe，06-13）与作为 *PNT 基础设施*的地面站网络（星地 GNSS 协同，08-20），但此前没有任何条目讨论商业 GSaaS 运营商应如何出售受争抢的下行容量。这一问题设定切中行业现状：AWS Ground Station、KSAT、Leaf Space、Azure Orbital 类服务承接了无力自建专用地面段的小卫星/对地观测/物联网运营商长尾，短暂且相互重叠的过境窗口的争用正是核心稀缺性所在。技术内核是两套成熟工具箱的干净结合——实时系统可调度性分析（EDF 加可证的全带宽等价引理）与单参数拍卖理论（单调分配 + 关键支付）——使经济上的真实报价激励与物理上的可调度性得以*同时*保证，这是贪心收益启发式或不看出价的调度器都无法做到的（相对"最高出价优先+朴素指派"约 2 倍的收益差表明，朴素机制输在指派质量而非竞价环节）。新颖度评 2 而非 3，因为其验证仅为中等规模仿真（24 星、6 站）且各机制组件本身均为标准工具；贡献在于带证明的组合。本条目也使该条目库在 L-COIN 卸载论文（08-19）之后拥有第二条博弈论条目，显示机制设计正沿多条战线进入 LEO 运营研究。
