---
id: 2026-07-08_arxiv-harq-dvp-model-5g
date_published: 2026-07-07
date_found: 2026-07-08
type: academic-paper
technology: cellular
title_en: "Delay violation probability modeling for 5G HARQ: a DTMC framework capturing decoding, feedback and control-signaling delays"
title_zh: "5G HARQ 时延违约概率建模：涵盖译码、反馈与控制信令时延的离散时间马尔可夫链框架"
url: "https://arxiv.org/abs/2607.06169"
source_quality: full
topics: [5G, HARQ, URLLC, delay-analysis, queueing-theory, ns-3]
topic_primary: 5g-nr
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Seo, Moothedath, Mehrnia, Petreska, Kloiber and Gross (KTH/DLR lineage; arxiv 2607.06169, submitted July 7, 2026; 12 pages) present a delay-violation-probability (DVP) model for slot-based 5G systems with HARQ that deliberately includes the delay components most prior models discard. Their criticism of the existing literature is specific: DVP models for HARQ typically assume instantaneous decoding and feedback, ignore the slots periodically blocked by control signaling, reduce the transmitter to a single-process FIFO abstraction, and ignore the parallel HARQ processes that allow out-of-order completion in real 3GPP systems.

The model is built on a discrete-time Markov chain whose state (q, m, k_ξ) tracks queue length, HARQ attempt index, and the phase within the control-signaling period. Waiting-delay distributions come from a recursive algorithm that accounts for packets ahead in the queue and per-attempt error probabilities; the service-delay bound incorporates a realistic HARQ round-trip time of 1 + τ_d + τ_f slots (decoding and feedback each ~0.5 ms typical) and the periodic unavailability of one slot in every ξ for control transmissions. The output is an upper bound on the probability that end-to-end delay exceeds a target.

Validation against ns-3 5G-LENA over >10^6 packet transmissions (delay targets 2-10 ms, arrival rates 1/10-1/3 per slot, SNR 10-20 dB, control periodicity ξ ∈ {80, 320}) shows the bound "remains closely aligned with empirical DVP" and is very tight exactly where it matters — under stringent 2 ms targets. The analysis exposes three operating regimes: reliability-limited (SNR gains cut DVP), a transition zone, and a delay-limited floor where timing structure dominates and further SNR improvement is nearly useless. Control-signaling blockage matters most at tight deadlines: at d=2 ms, sparser blocking (ξ=320 vs 80) noticeably improves DVP.

## Summary (ZH)

Seo、Moothedath、Mehrnia、Petreska、Kloiber 和 Gross（KTH/DLR 谱系；arxiv 2607.06169，2026 年 7 月 7 日提交；12 页）提出一个针对时隙制 5G HARQ 系统的时延违约概率（DVP）模型，刻意纳入了多数已有模型丢弃的时延成分。他们对现有文献的批评很具体：HARQ 的 DVP 模型通常假设瞬时译码与反馈、忽略被控制信令周期性占用的时隙、把发射机简化为单进程 FIFO 抽象、并忽略真实 3GPP 系统中允许乱序完成的并行 HARQ 进程。

模型基于离散时间马尔可夫链，状态 (q, m, k_ξ) 跟踪队列长度、HARQ 尝试序号和控制信令周期内的相位。等待时延分布由递归算法给出，考虑了队列中前方分组和每次尝试的错误概率；服务时延界纳入现实的 HARQ 往返时间 1 + τ_d + τ_f 个时隙（译码与反馈各约 0.5 ms 典型值）以及每 ξ 个时隙中一个被控制传输占用的周期性不可用。输出是端到端时延超过目标的概率上界。

以 ns-3 5G-LENA 验证超过 10^6 次分组传输（时延目标 2-10 ms、到达率每时隙 1/10-1/3、SNR 10-20 dB、控制周期 ξ ∈ {80, 320}），结果显示该上界"与经验 DVP 紧密吻合"，且恰恰在最关键处——2 ms 严格目标下——最为紧致。分析揭示三个工作区间：可靠性受限区（提升 SNR 可降低 DVP）、过渡区、以及时延受限底板区（时序结构主导，继续提升 SNR 几乎无用）。控制信令占用在紧截止期下影响最大：d=2 ms 时，更稀疏的占用（ξ=320 对比 80）显著改善 DVP。

## Key technical points (EN)

- DTMC state (queue length, HARQ attempt, control-period phase); recursive waiting-delay algorithm; Markov service-delay bound.
- Explicitly modeled: decoding delay τ_d, feedback delay τ_f (RTT = 1 + τ_d + τ_f slots), periodic control-signaling slot blockage (1-in-ξ), parallel HARQ processes.
- Validated vs ns-3 5G-LENA, >10^6 packets; tight upper bound at d=2 ms; slightly conservative at relaxed d=8 ms.
- Three-regime finding: reliability-limited → transition → delay-limited floor where SNR no longer helps.
- Control-periodicity sensitivity is largest at stringent deadlines (ξ=320 vs 80 visibly improves DVP at 2 ms).

## Key technical points (ZH)

- DTMC 状态（队列长度、HARQ 尝试序号、控制周期相位）；递归等待时延算法；马尔可夫服务时延界。
- 显式建模：译码时延 τ_d、反馈时延 τ_f（RTT = 1 + τ_d + τ_f 时隙）、周期性控制信令时隙占用（每 ξ 中占 1）、并行 HARQ 进程。
- ns-3 5G-LENA 验证，超过 10^6 分组；d=2 ms 时上界紧致；d=8 ms 宽松目标下略保守。
- 三区间发现：可靠性受限 → 过渡 → 时延受限底板（SNR 不再有用）。
- 控制周期敏感度在严格截止期下最大（2 ms 时 ξ=320 对比 80 明显改善 DVP）。

## Why it matters / what's new (EN)

URLLC dimensioning tools live or die on whether their delay models match slot-level reality; this paper quantifies exactly which discarded components (feedback delay, control blockage, HARQ parallelism) break the simplified models at millisecond deadlines — and shows a regime where the industry's default lever (more SNR / better MCS) stops paying. For the KB this is the first analytical-DVP entry in the 5g-nr bin, complementing the measurement-side latency entries (e.g. the 5G MEC power-line latency study ingested 2026-07-07) with a model that network planners could actually run at design time. The three-regime map is a reusable mental model for any deterministic-latency discussion, including the 5G-TSN thread.

## Why it matters / what's new (ZH)

URLLC 规划工具的成败取决于其时延模型是否符合时隙级现实；本文精确量化了哪些被丢弃的成分（反馈时延、控制占用、HARQ 并行性）会在毫秒级截止期下破坏简化模型——并揭示了一个业界默认手段（提高 SNR/更好 MCS）不再奏效的区间。对 KB 而言，这是 5g-nr 桶中第一条解析式 DVP 条目，与测量侧时延条目（如 2026-07-07 收录的 5G MEC 电力线时延研究）互补，提供了网络规划者在设计期就能运行的模型。三区间图景也是任何确定性时延讨论（包括 5G-TSN 线索）可复用的思维模型。
