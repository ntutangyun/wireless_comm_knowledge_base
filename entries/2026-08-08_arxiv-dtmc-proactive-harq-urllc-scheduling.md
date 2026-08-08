---
id: 2026-08-08_arxiv-dtmc-proactive-harq-urllc-scheduling
date_published: 2026-08-06
date_found: 2026-08-08
type: academic-paper
technology: cellular
title_en: "DTMC-Based Schedulability Analysis for Periodic URLLC Flows with Proactive HARQ"
title_zh: "面向周期性 URLLC 流、采用主动式 HARQ 的可调度性分析（基于离散时间马尔可夫链）"
url: "https://arxiv.org/abs/2608.05639"
source_quality: abstract_only
topics: [5G-NR, URLLC, HARQ, scheduling, schedulability]
topic_primary: 5g-nr
topics_secondary: [cellular-ai]
novelty_score: 2
---

## Summary (EN)

Yi and co-authors (submitted 6 Aug 2026) address a practical gap in 5G URLLC scheduling: how to guarantee that periodic, mission-critical flows meet their reliability and latency targets when HARQ feedback arrives late. They build a **discrete-time Markov chain (DTMC)** model whose state space is deliberately expanded to capture cross-slot timing effects — in particular the HARQ round-trip time — so that schedulability can be assessed accurately rather than approximated away. Proactive HARQ (sending redundancy ahead of the ACK/NACK, with an early-termination option when the transmission succeeds) is modeled directly, including its early-termination behavior.

On top of the analysis they add an **offset-based scheduler tuned by a two-stage genetic algorithm**, which places each periodic flow's transmission offsets to maximize the number of flows that can be jointly guaranteed. In simulation the combined method achieves higher schedulability than reactive HARQ, K-repetition, and non-guaranteed proactive HARQ, at acceptable computational overhead.

## Summary (ZH)

Yi 等（2026 年 8 月 6 日提交）针对 5G URLLC 调度中的一个实际难题：当 HARQ 反馈到达较晚时，如何保证周期性、关键任务流满足其可靠性与时延目标。他们构建了一个**离散时间马尔可夫链（DTMC）**模型，刻意扩展状态空间以捕捉跨时隙的定时效应——尤其是 HARQ 往返时间——从而精确评估可调度性，而非近似略去。主动式 HARQ（在 ACK/NACK 之前提前发送冗余，并在传输成功时可提前终止）被直接建模，包含其提前终止行为。

在分析之上，他们加入一个**由两阶段遗传算法调优的基于偏移的调度器**，为每条周期流放置发送偏移，以最大化可被联合保证的流数。仿真中，该组合方法在可接受的计算开销下，取得高于被动式 HARQ、K 重复与无保证主动式 HARQ 的可调度性。

## Key technical points (EN)

- **Timing-aware DTMC** — state space expanded to model HARQ RTT and other cross-slot timing, enabling accurate schedulability analysis under delayed feedback.
- **Proactive HARQ with early termination** — the redundancy-ahead-of-feedback scheme and its success-triggered early stop are modeled explicitly.
- **Offset-based scheduling** — a two-stage genetic algorithm assigns per-flow transmission offsets to maximize jointly-guaranteed periodic flows.
- **Result** — higher schedulability than reactive HARQ, K-repetition, and non-guaranteed proactive HARQ, with acceptable overhead.

## Key technical points (ZH)

- **定时感知 DTMC** —— 扩展状态空间以建模 HARQ RTT 与其他跨时隙定时，在反馈延迟下实现精确可调度性分析。
- **带提前终止的主动式 HARQ** —— 显式建模"反馈前发冗余"方案及其成功触发的提前停止。
- **基于偏移的调度** —— 两阶段遗传算法分配各流发送偏移，最大化可联合保证的周期流数量。
- **结果** —— 在可接受开销下，可调度性高于被动式 HARQ、K 重复与无保证主动式 HARQ。

## Why it matters / what's new (EN)

URLLC schedulability under HARQ has usually been analyzed with worst-case bounds that treat delayed feedback pessimistically, or with reliability schemes (K-repetition) that waste airtime. Modeling the HARQ round-trip inside the Markov state is the contribution here: it lets the scheduler reason about the *actual* timing coupling between retransmissions and periodic deadlines, so proactive HARQ's early-termination savings can be credited rather than ignored. For the KB's 5G-NR bin this is a scheduling-analysis datapoint rather than a new air-interface feature — useful as the analytical backbone behind deterministic-latency claims for periodic industrial/TSN-over-5G traffic.

## Why it matters / what's new (ZH)

HARQ 下的 URLLC 可调度性通常用最坏情况界来分析（对延迟反馈过于悲观），或用可靠性方案（K 重复）浪费空口。将 HARQ 往返建入马尔可夫状态是本文的贡献：它让调度器能对重传与周期截止期之间*真实*的定时耦合进行推理，从而把主动式 HARQ 的提前终止收益计入而非忽略。对 KB 的 5g-nr 分箱而言，这是一个调度分析数据点，而非新的空口特性——可作为"周期性工业/5G 承载 TSN 流的确定性时延"主张背后的分析支撑。
