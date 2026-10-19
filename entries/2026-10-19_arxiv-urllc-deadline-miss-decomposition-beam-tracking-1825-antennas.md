---
id: 2026-10-19_arxiv-urllc-deadline-miss-decomposition-beam-tracking-1825-antennas
date_published: 2026-10-14
date_found: 2026-10-19
type: academic-paper
technology: cellular
title_en: "Decomposing URLLC Deadline Failures in Beam-Managed 6G Networks: Implications for Mission-Critical Wireless Systems"
title_zh: "分解波束管理 6G 网络中的 URLLC 截止时间失败：对关键任务无线系统的启示"
url: "https://arxiv.org/abs/2610.22411"
source_quality: full
topics: [URLLC, deadline-miss, beam-tracking, beam-sweeping, mmWave, hyper-massive-MIMO, EDF-scheduling, 6G, mission-critical]
topic_primary: cellular-massive-mimo
topics_secondary: [6g-vision, 5g-nr]
novelty_score: 3
---

## Summary (EN)
Webert Montlouis and Sneihil Gopal study why ultra-reliable low-latency communication (URLLC) packets miss their deadlines in millimetre-wave networks with beam management. The reported URLLC deadline miss rate is a single aggregate number, and the paper argues that it hides the proximate cause of each failure. They introduce a framework that sorts every missed URLLC packet into one of three mutually exclusive and exhaustive categories: queueing-limited (Q), transmission-limited (T) and beam-tracking-limited (B). A per-packet classifier needs only the packet's deadline, scheduling and transmission-completion timestamps and a beam-misalignment indicator.

The framework is applied in simulation to ten scenarios with base-station antenna counts from 64 to 4096, and is run alongside six schedulers from first-come-first-served to machine-learning-augmented earliest-deadline-first. The authors present the result as a three-way diagnostic that turns the aggregate miss rate into cause-specific remedies.

## Summary (ZH)
Webert Montlouis 与 Sneihil Gopal 研究在带波束管理的毫米波网络中，超可靠低时延通信（URLLC）数据包为何错过截止时间。通常报告的 URLLC 截止时间错失率只是一个汇总数字，论文认为它掩盖了每次失败的直接原因。他们提出一个框架，把每个错过截止时间的 URLLC 包归入三个互斥且穷尽的类别之一：排队受限（Q）、传输受限（T）与波束跟踪受限（B）。逐包分类器只需要数据包的截止时间、调度与传输完成时间戳，以及波束失准指示。

该框架通过仿真应用于基站天线数从 64 到 4096 的十种场景，并与从先到先服务到机器学习增强的最早截止时间优先在内的六种调度器一起运行。作者将结果呈现为一种三向诊断工具，把汇总错失率转化为针对具体原因的补救措施。

## Key technical points (EN)
- System model: a base station with a uniform planar array of M antennas manages B analog beams for U users in a cell, with the 3GPP TR 38.901 urban-microcell LoS path-loss model at 28 GHz, log-normal shadowing, Rayleigh fading and a 12 dB penalty when the tracked beam is misaligned. Default beam-sweep period T_sw is 20 ms and the tracking resolution is 1 ms.
- Traffic classes: URLLC, eMBB and mMTC with hard deadlines of 1, 4 and 10 ms; a URLLC packet is missed if completed after its deadline or never delivered.
- Decomposition: N_miss = N_Q + N_T + N_B, so the miss rate splits additively into M_Q + M_T + M_B; the classifier uses three integer counters and one Boolean check per missed packet.
- Crossover: the dominant cause shifts from Q to B once the antenna count exceeds roughly 1825.
- Sweep period: T_sw strongly affects B-misses while Q and T stay largely unchanged; reducing T_sw from 20 ms to 10 ms cuts B-misses by more than half without redesigning the scheduler.
- Overrun delay: Q-misses reach a CDF of about 0.98 by 0.8 ms, so a modest latency-budget relaxation accommodates most of them; B-misses are still unsaturated at 12 ms.
- Schedulers compared: FCFS, Round Robin, Proportional Fair, EDF, a hybrid ML-EDF and a weighted ML-EDF; the paper compares them to show that the aggregate miss rate is an inadequate measure regardless of the scheduling policy.
- Stated limitations are handled in a dedicated section of the paper; all results come from simulation.

## Key technical points (ZH)
- 系统模型：基站配备 M 个天线的均匀平面阵列，为小区内 U 个用户管理 B 个模拟波束；信道采用 28 GHz 下的 3GPP TR 38.901 城市微小区 LoS 路径损耗模型、对数正态阴影、瑞利衰落，以及被跟踪波束失准时的 12 dB 惩罚。默认波束扫描周期 T_sw 为 20 ms，跟踪分辨率为 1 ms。
- 业务类别：URLLC、eMBB 与 mMTC，硬截止时间分别为 1、4 与 10 ms；URLLC 包若在截止时间后完成或始终未送达即视为错失。
- 分解：N_miss = N_Q + N_T + N_B，因此错失率可加性地拆为 M_Q + M_T + M_B；分类器对每个错失包只用三个整数计数器和一次布尔判断。
- 交叉点：当天线数超过约 1825 时，主导原因由 Q 转为 B。
- 扫描周期：T_sw 对 B 类错失影响显著，而 Q 与 T 基本不变；将 T_sw 从 20 ms 缩短到 10 ms 可使 B 类错失减少一半以上，无需重新设计调度器。
- 超时延迟：Q 类错失在 0.8 ms 时累积分布约达 0.98，因此适度放宽时延预算即可容纳其中大部分；B 类错失在 12 ms 时仍未饱和。
- 对比的调度器：FCFS、轮询、比例公平、EDF、混合 ML-EDF 与加权 ML-EDF；论文借此说明，无论采用何种调度策略，汇总错失率都不足以作为衡量指标。
- 论文设有专门章节讨论局限；所有结果均来自仿真。

## Why it matters / what's new (EN)
The authors note that URLLC deadline misses are typically reported as a single aggregate; this paper offers a bookkeeping rule that attributes each miss to queueing, transmission or beam tracking, and reports where the dominant term changes in a simulated 28 GHz cell. The roughly 1825-antenna crossover and the sweep-period effect come from one simulator with a fixed channel model and a single misalignment penalty, so they are not shown to carry over to deployed arrays or other carrier frequencies.

## Why it matters / what's new (ZH)
作者指出，URLLC 截止时间错失通常仅以单一汇总值报告；本文给出一种记账规则，把每次错失归因于排队、传输或波束跟踪，并报告在一个仿真的 28 GHz 小区中主导项在何处改变。约 1825 天线的交叉点与扫描周期的影响来自同一个仿真器，采用固定信道模型与单一失准惩罚，因此并未证明可推广到实际部署的阵列或其他载频。
