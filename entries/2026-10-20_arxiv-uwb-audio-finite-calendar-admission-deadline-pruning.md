---
id: 2026-10-20_arxiv-uwb-audio-finite-calendar-admission-deadline-pruning
date_published: 2026-10-17
date_found: 2026-10-20
type: academic-paper
technology: uwb
title_en: "Finite-Calendar Admission and Deadline-Aware Pruning for UWB Audio"
title_zh: "面向 UWB 音频的有限日历准入与截止期感知裁剪"
url: "https://arxiv.org/abs/2610.24762"
source_quality: abstract-only
topics: [UWB, audio, isochronous-transport, admission-control, deadline-scheduling, SDU, earliest-deadline-first]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

On 17 October 2026, Fengyun Zhang posted "Finite-Calendar Admission and Deadline-Aware Pruning for UWB Audio" to arxiv (primary category eess.AS, cross-listed cs.MM). The abstract frames isochronous ultra-wideband (UWB) audio transport as a problem in which a complete service data unit (SDU) must be delivered before its presentation deadline, and states that fragment reception rate and aggregate throughput do not directly characterize that objective. The paper formulates admission and online service over a periodic calendar of finite exchange opportunities, explicitly accounting for fragmented SDUs, bounded attempts, calendar alignment and timing uncertainty.

For equal-duration, freely assignable opportunities, the abstract reports an interval-demand condition that characterizes finite-job reservation feasibility, together with an earliest-deadline-first construction that realizes a feasible reservation. A separate necessary capacity bound identifies loads that cannot sustain complete-SDU delivery even with no transmission errors. For online overload control, the paper studies a deadline-aware policy that discards an SDU when its outstanding fragments exceed the remaining eligible opportunities. Across 3,456 replicated scheduling runs and 432 supplemental sensitivity runs, pruning raises eight-stream burst-loss timely completion from 45.441% to 59.399%, a paired difference of 13.958 +/- 2.080 percentage points (pointwise 95% interval). At four streams, round robin instead attains slightly higher completion, while heavy overload causes pronounced per-stream imbalance. The results come from scheduling runs rather than hardware measurements.

## Summary (ZH)

2026年10月17日，Fengyun Zhang 在 arxiv 发布论文《面向 UWB 音频的有限日历准入与截止期感知裁剪》（主分类 eess.AS，交叉列入 cs.MM）。摘要将等时（isochronous）超宽带（UWB）音频传输表述为：必须在呈现截止时间之前递交完整的服务数据单元（SDU），并指出分片接收率与聚合吞吐量并不能直接刻画这一目标。论文针对由有限交换机会构成的周期性日历，对准入与在线服务进行建模，并显式考虑分片 SDU、有限尝试次数、日历对齐以及时序不确定性。

对于等时长、可自由分配的机会，摘要报告了一个刻画有限作业预留可行性的区间需求条件，以及能够实现可行预留的最早截止期优先（EDF）构造。另有一个必要容量上界，用于识别即使无传输错误也无法维持完整 SDU 递交的负载。针对在线过载控制，论文研究了一种截止期感知策略：当某个 SDU 的剩余分片数超过其剩余可用机会数时将其丢弃。在 3,456 次重复调度运行和 432 次补充敏感性运行中，裁剪使八流突发丢失场景下的按时完成率由 45.441% 提高到 59.399%，配对差值为 13.958 +/- 2.080 个百分点（逐点 95% 区间）。在四流情形下，轮询（round robin）的完成率反而略高，而重度过载会造成各流之间明显的不均衡。上述结果来自调度仿真运行，而非硬件实测。

## Key technical points (EN)

- Problem frame (per the abstract): isochronous UWB audio must deliver a complete SDU before its presentation deadline; fragment reception rate and aggregate throughput do not directly capture this.
- Model: admission and online service over a periodic calendar of finite exchange opportunities, with fragmented SDUs, bounded attempts, calendar alignment and timing uncertainty.
- Feasibility result: for equal-duration, freely assignable opportunities, an interval-demand condition characterizes finite-job reservation feasibility; an earliest-deadline-first construction realizes a feasible reservation.
- A separate necessary capacity bound identifies loads that cannot sustain complete-SDU delivery even with no transmission errors.
- Online policy: a deadline-aware rule discards an SDU once its outstanding fragments exceed the remaining eligible opportunities.
- Evaluation: 3,456 replicated scheduling runs plus 432 supplemental sensitivity runs; eight-stream burst-loss timely completion rises from 45.441% to 59.399% (paired difference 13.958 +/- 2.080 percentage points).
- Caveats stated in the abstract: at four streams round robin attains slightly higher completion; heavy overload causes pronounced per-stream imbalance.
- A finite design enumeration and a multi-stream fragmentation envelope quantify the interaction among scheduling, payload overhead and capacity.

## Key technical points (ZH)

- 问题框架（依摘要）：等时 UWB 音频必须在呈现截止时间前递交完整 SDU；分片接收率与聚合吞吐量无法直接反映这一目标。
- 模型：针对由有限交换机会构成的周期性日历做准入与在线服务建模，涉及分片 SDU、有限尝试次数、日历对齐及时序不确定性。
- 可行性结论：对于等时长、可自由分配的机会，区间需求条件刻画有限作业预留的可行性；最早截止期优先构造可实现可行预留。
- 另有必要容量上界，用于识别即使无传输错误也无法维持完整 SDU 递交的负载。
- 在线策略：当某 SDU 的剩余分片数超过剩余可用机会数时，将其丢弃。
- 评估：3,456 次重复调度运行加 432 次补充敏感性运行；八流突发丢失场景下按时完成率由 45.441% 升至 59.399%（配对差值 13.958 +/- 2.080 个百分点）。
- 摘要中说明的限制：四流时轮询的完成率略高；重度过载造成各流之间明显不均衡。
- 有限设计枚举与多流分片包络量化了调度、载荷开销与容量之间的相互作用。

## Why it matters / what's new (EN)

The abstract states that the findings distinguish provable admission conditions from online deadline salvage, and expose the tradeoff between aggregate throughput and per-stream service in UWB audio scheduling. The paper is a scheduling analysis; the body discusses IEEE 802.15.4z/4ab and a vendor SDK as context but states that its use is not evidence of standard compliance.

## Why it matters / what's new (ZH)

摘要指出，这些结果区分了可证明的准入条件与在线截止期补救，并揭示了 UWB 音频调度中聚合吞吐量与单流服务之间的权衡。该论文属于调度分析；正文讨论了 IEEE 802.15.4z/4ab 与某厂商 SDK 作为背景，但声明其使用不构成标准符合性的证据。

## Images

None.
