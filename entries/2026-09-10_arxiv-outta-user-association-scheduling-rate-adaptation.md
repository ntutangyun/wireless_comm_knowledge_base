---
id: 2026-09-10_arxiv-outta-user-association-scheduling-rate-adaptation
date_published: 2026-09-08
date_found: 2026-09-10
technology: wifi
type: academic-paper
title_en: "Efficient User Association and Wireless Scheduling with Shorter Time-Scale Rate Adaptation"
title_zh: "结合短时间尺度速率自适应的高效用户关联与无线调度"
url: "https://arxiv.org/abs/2609.09387"
source_quality: full
topics: [MAC-layer, scheduling, rate-adaptation, 802.11ad, online-learning]
topic_primary: ai-for-wifi
topics_secondary: [mmwave-bq]
novelty_score: 3
---

## Summary (EN)

Wireless user association and scheduling decisions (which access point serves which user, and when) are typically made at a coarser time scale — once per "frame" spanning many slots — than rate adaptation, which must react per slot as channel conditions fluctuate. This paper addresses the joint design of both, when link success probabilities are unknown and must be learned online, while guaranteeing every user a minimum long-run scheduling fraction. The authors propose OUTTA, a MaxWeight-type association-and-scheduling algorithm that combines a per-user virtual queue (tracking each user's accumulated "scheduling debt" against its fairness target) with Upper-Confidence-Bound (UCB) throughput estimates in its per-frame weight function; a time-decaying parameter shifts the algorithm's emphasis from enforcing fairness early on to maximizing throughput later. Within each scheduled frame, a separate UCB sub-algorithm handles the shorter-time-scale rate-adaptation decision independently per link.

The paper proves two theoretical guarantees: cumulative fairness violation is upper-bounded by a term that reaches zero after a number of frames independent of the frame length T, and cumulative regret (the throughput gap versus an oracle with known channel statistics) grows as O(√K log K) over K frames — the same asymptotic rate as classical UCB bandit algorithms, despite the added complexity of joint association, scheduling and fairness enforcement. Because OUTTA's per-frame scheduling step requires evaluating every feasible interference-constrained schedule (a set that can be exponential in the number of users), the authors also give a low-complexity "Pick-and-Compare" (PC) variant that draws one random feasible schedule per frame and keeps whichever of it or the previous frame's schedule has higher weight, reducing the per-frame comparison cost from evaluating the full schedule set to a single comparison, at the cost of needing more frames to reach zero fairness violation and incurring somewhat larger regret.

Both algorithms are evaluated in trace-driven simulation whose channel inputs were measured on a real 60 GHz mmWave testbed (USRP X310 with Sivers EVK06002 up/down-converters, a 3-AP/10-user classroom deployment, links measured sequentially) that collected 30 AP-user link traces of 30,000 time slots each, converting measured signal quality (post-SNR / EVM) into transmission-rate outcomes via the IEEE 802.11ad MCS table. Both OUTTA and PC-OUTTA drive cumulative fairness violation to zero after a number of frames that Remarks 1 shows is independent of the frame size T (so the required number of time slots grows linearly with T), with PC-OUTTA needing longer than OUTTA; they achieve a throughput approximation ratio of about 0.74 within the simulated horizon that increases monotonically toward 1 over time. On regret the paper is careful in the other direction: the derived upper bound grows with frame size, but the simulated impact of frame size on realised regret is marginal, and PC-OUTTA is the more frame-size-sensitive of the two. The PC variant matches OUTTA's throughput approximation ratio while cutting the per-frame scheduling cost from evaluating the full feasible-schedule set down to one comparison.

## Summary (ZH)

无线网络中"哪个接入点服务哪个用户、何时服务"的用户关联与调度决策，通常在比速率自适应更粗的时间尺度上做出——调度往往每"帧"（跨越多个时隙）才决定一次，而速率自适应则必须随信道条件的变化逐时隙响应。本文研究在链路成功概率未知、需在线学习的前提下，如何联合设计这两类决策，同时为每个用户保证一个长期最低调度比例。作者提出 OUTTA 算法，一种 MaxWeight 型关联与调度算法：在其逐帧权重函数中，结合了跟踪每个用户相对公平性目标累积"调度欠账"的虚拟队列，以及置信上界（UCB）吞吐量估计；一个随时间衰减的参数使算法的侧重点从早期强调公平性逐渐转向后期最大化吞吐量。在每个被调度的帧内部，另有一个独立的 UCB 子算法针对每条链路，分别处理更短时间尺度上的速率自适应决策。

论文给出两项理论保证：累积公平性违规量的上界，在经过一定帧数（与帧长 T 无关）后归零；累积遗憾（相对于已知信道统计量的最优策略而言的吞吐量差距）随 K 帧增长为 O(√K log K)——与经典 UCB 老虎机算法相同的渐近速率，尽管该算法额外承担了联合关联、调度与公平性保证的复杂性。由于 OUTTA 每帧的调度步骤需要遍历所有满足干扰约束的可行调度方案（其数量可能随用户数呈指数增长），作者还给出一种低复杂度的"抽取-比较"（Pick-and-Compare，PC）变体：每帧随机抽取一个可行调度方案，与上一帧的调度方案比较权重，保留权重更高者，从而将每帧的比较开销从遍历整个调度方案集合降为一次比较，代价是需要更多帧数才能使公平性违规归零，且遗憾会略高一些。

两种算法均在基于实测数据的仿真中进行评估，信道输入来自真实 60 GHz mmWave 测试床（USRP X310 搭配 Sivers EVK06002 上/下变频器，教室场景 3 AP/10 用户部署，各链路逐一依次测量），该测试床采集了 30 条 AP-用户链路的实测数据，每条 30,000 个时隙，并通过 IEEE 802.11ad 的 MCS 表，将实测信号质量（后置信噪比/误差矢量幅度）转换为传输速率结果。OUTTA 与 PC-OUTTA 均在某一帧数之后实现累积公平性违规归零，Remarks 1 证明该帧数与帧长 T 无关（因此所需时隙数随 T 线性增长），其中 PC-OUTTA 所需时间长于 OUTTA；两者在仿真时间范围内达到约 0.74 的吞吐量近似比，并随时间单调趋近于 1。在遗憾方面论文的表述恰恰相反：推导出的遗憾上界随帧长增大，但仿真中帧长对实际遗憾的影响很小，且 PC-OUTTA 对帧长更为敏感。PC 变体在吞吐量近似比上与 OUTTA 持平，同时将每帧调度开销从遍历整个可行方案集合降为一次比较。

## Key technical points (EN)

- **Problem setting**: N users, L access points, interference constraints limiting which user-AP pairs can transmit simultaneously, M available transmission rates per link, and unknown per-link success probabilities that must be learned online — with a hard requirement that user n be scheduled at least a λ_n fraction of the time on average.
- **Virtual-queue fairness mechanism (OUTTA)**: each user's virtual queue increases when it is not scheduled and decreases when it is; a decaying control parameter ε_k eventually enforces strict fairness as frames accumulate.
- **UCB weight for scheduling**: the per-frame schedule is chosen to maximize the sum, over scheduled (link, user) pairs, of the virtual-queue length plus a time-weighted UCB throughput estimate — so the algorithm favors under-served users early and high-throughput links later.
- **Proposition 1 (fairness)**: cumulative fairness violation across K frames is upper-bounded by a term of the form NT(g(N,δ,r_m) − √K)⁺ — reaching zero once K exceeds a threshold that does not depend on frame length T.
- **Proposition 2 (regret)**: cumulative regret is bounded as O(NT√K + LMNT log(KT) + T√(LMNKT log(KT))), the same √K·log K asymptotic order as classical UCB.
- **Pick-and-Compare (PC-OUTTA)**: replaces full-schedule-set evaluation with one randomly drawn feasible schedule compared against the previous frame's schedule, cutting per-frame scheduling cost from O(|S|) to O(1) at the cost of slower convergence to zero fairness violation and larger regret.
- **Trace source: real 60 GHz hardware measurements** (the algorithms themselves run in simulation, since the paper notes COTS 802.11ad routers do not expose enough rate-adaptation control): 60 GHz mmWave testbed (USRP X310 + Sivers EVK06002, 3 APs / 10 users), 30 AP-user link traces of 30,000 slots each, signal quality mapped to 9 IEEE 802.11ad MCS-based transmission rates (0.73-4.38 Gbps) via a post-SNR/EVM threshold model; the authors state they will release the dataset publicly.
- **Headline results**: both algorithms reach zero cumulative fairness violation after a frame count Remarks 1 shows to be independent of frame size T (the slot count therefore grows linearly with T); approximation ratio ρ(K) ≈ 0.74 within the simulated horizon, increasing monotonically toward 1; PC-OUTTA matches OUTTA's throughput ratio with O(1) instead of O(|S|) per-frame cost, at the price of a longer time to zero fairness violation and somewhat larger regret.
- **802.11ad framing**: the paper explicitly notes that commodity off-the-shelf 802.11ad routers "do not provide sufficient control over rate adaptation," motivating the custom software-defined testbed rather than a COTS deployment.

## Key technical points (ZH)

- **问题设定**：N 个用户、L 个接入点，存在限制哪些用户-AP 对可同时发送的干扰约束，每条链路有 M 种可选传输速率，且各链路的成功概率未知、需在线学习——同时硬性要求用户 n 平均至少获得 λ_n 比例的调度时间。
- **虚拟队列公平机制（OUTTA）**：每个用户的虚拟队列在其未被调度时增加、被调度时减少；一个随帧数衰减的控制参数 ε_k 最终会随帧数积累而强制实现严格公平。
- **用于调度的 UCB 权重**：每帧所选调度方案，使被调度的（链路，用户）对上"虚拟队列长度 + 按时间加权的 UCB 吞吐量估计"之和最大化——因此算法在早期偏向服务不足的用户，在后期偏向高吞吐量链路。
- **命题 1（公平性）**：K 帧内累积公平性违规量的上界形如 NT(g(N,δ,r_m) − √K)⁺——一旦 K 超过某个与帧长 T 无关的阈值，该值即归零。
- **命题 2（遗憾）**：累积遗憾上界为 O(NT√K + LMNT log(KT) + T√(LMNKT log(KT)))，与经典 UCB 相同的 √K·log K 渐近阶数。
- **抽取-比较（PC-OUTTA）**：以每帧随机抽取一个可行调度方案、并与上一帧调度方案比较的方式，取代对整个方案集合的遍历，将每帧调度开销从 O(|S|) 降为 O(1)，代价是公平性违规归零收敛更慢、遗憾略高。
- **数据来源：真实 60 GHz 硬件实测**（算法本身运行于仿真中，论文说明商用 802.11ad 路由器未提供足够的速率自适应控制接口）：60 GHz mmWave 测试床（USRP X310 + Sivers EVK06002，3 AP / 10 用户），采集 30 条 AP-用户链路数据、每条 30,000 个时隙，通过后置信噪比/误差矢量幅度阈值模型，将信号质量映射到基于 IEEE 802.11ad 的 9 档传输速率（0.73-4.38 Gbps）上；作者表示将公开发布该数据集。
- **主要结果**：两种算法均在某一帧数后实现累积公平性违规归零，Remarks 1 证明该帧数与帧长 T 无关（因而所需时隙数随 T 线性增长）；仿真时间范围内近似比 ρ(K) ≈ 0.74，并随时间单调趋近于 1；PC-OUTTA 以 O(1) 而非 O(|S|) 的每帧开销达到与 OUTTA 相同的吞吐量近似比，代价是公平性违规归零所需时间更长、遗憾略高。
- **802.11ad 语境**：论文明确指出，商用现成 802.11ad 路由器"未提供对速率自适应足够的控制权"，这正是作者采用自建软件定义测试床、而非商用现成部署的原因。

## Why it matters / what's new (EN)

This KB's `ai-for-wifi` bin has previously covered online-learning approaches to individual WLAN MAC parameters (e.g. contention-window selection); this paper extends the online-learning approach to a joint design spanning two decision layers at different time scales — frame-level association/scheduling and slot-level rate adaptation — with formal, frame-size-independent fairness and regret guarantees rather than only empirical evaluation. It also grounds the evaluation in real 60 GHz link traces mapped through the IEEE 802.11ad MCS table rather than purely synthetic channel models — though the algorithms themselves are run in simulation over those traces, not on the radios. The paper's running head gives the venue as IEEE/ACM Transactions on Networking.

## Why it matters / what's new (ZH)

本知识库 `ai-for-wifi` 分类此前已收录过针对单一 WLAN MAC 参数（如竞争窗口选择）的在线学习方法；本文将在线学习方法扩展到跨越两个不同时间尺度决策层——帧级别的关联/调度与时隙级别的速率自适应——的联合设计，并给出与帧长无关的、形式化的公平性与遗憾保证，而不仅仅是经验评估。评估还基于映射到 IEEE 802.11ad MCS 表的真实 60 GHz 链路实测数据，而非纯合成信道模型——但算法本身是在这些实测数据上以仿真方式运行的，并未跑在射频硬件上。论文页眉显示其发表刊物为 IEEE/ACM Transactions on Networking。

## Images

![Figure 1: an example of a feasible schedule under interference constraints | 图 1：满足干扰约束的可行调度方案示例](https://arxiv.org/html/2609.09387v1/Figures/schedule.png)
![Figure 2: the two-time-scale system model (frame-level scheduling vs. slot-level rate adaptation) | 图 2：双时间尺度系统模型（帧级调度与时隙级速率自适应）](https://arxiv.org/html/2609.09387v1/system_model.png)
