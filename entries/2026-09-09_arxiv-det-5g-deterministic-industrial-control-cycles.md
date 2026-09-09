---
id: 2026-09-09_arxiv-det-5g-deterministic-industrial-control-cycles
date_published: 2026-09-07
date_found: 2026-09-09
type: academic-paper
technology: cellular
title_en: "Det-5G: Closing the Determinism Gap in 5G-Advanced for Industrial Closed-Loop Control"
title_zh: "Det-5G：弥合 5G-Advanced 面向工业闭环控制的确定性差距"
url: "https://arxiv.org/abs/2609.07386"
source_quality: full
topics: [5G-NR, industrial-control, determinism, bidirectional-control-cycle, adaptive-bundling, SPS, configured-grant, HARQ, 5G-Advanced]
topic_primary: 5g-nr
topics_secondary: [redcap-iot]
novelty_score: 3
---

## Summary (EN)
Adnan Aijaz (Bristol Research and Innovation Laboratory, Toshiba Europe Ltd.; arXiv v1, 7 Sep 2026; accepted for IEEE Next Generation Communications, NextGCom 2026) argues that 5G's ultra-reliable low-latency communication (uRLLC) capability, while sufficient for low packet latency and high per-packet reliability, is not sufficient on its own to make a wireless link deterministic for closed-loop industrial motion control. The paper's diagnostic is that conventional 5G scheduling treats a controller's downlink command and a device's uplink response as two independent packets, each individually subject to HARQ retransmission; when a reactive retransmission occurs unpredictably on either leg, the completion time of the full command-feedback round trip becomes non-deterministic, even though each individual packet still meets its own latency/reliability target. Industrial closed-loop control, by contrast, needs the entire bidirectional transaction to complete predictably within a cycle deadline — not just each half of it independently.

Det-5G's central design move is to make the complete downlink-command/uplink-response round trip, plus its cycle-level acknowledgement, a single atomic scheduling object rather than two independent ones. Reliability is provisioned proactively via adaptive bundled transmissions: bundle length (how many repetitions to schedule) is set before the cycle begins, driven by an algorithm that re-triggers when RSSI drops below a threshold, drifts from its moving average, or its variance exceeds a limit, selecting the minimal bundle length that meets a target reliability plus an interference margin — eliminating the reactive HARQ tail delay that fixed-repetition and dynamic-grant schemes incur. The framework supports both a reserved mode (periodically repeating allocations, lower signaling overhead, for stable links) and a cycle-by-cycle mode (fresh joint allocation each cycle, for mobile or fast-varying links). For multi-device control groups it adds group downlink (a single common transmission to all group members, with bundle length set by the algorithm to the weakest device in the group — trading some efficiency loss on strong devices for eliminating redundant per-device downlink airtime) and two multi-user uplink packing strategies: a slot-based scheme that sorts devices by SNR and packs them into available resource blocks, and a non-slot-based scheme that schedules the longest transmissions first and lets shorter ones fill residual symbol-level gaps for heterogeneous link conditions; a selective-recovery mechanism regroups only the devices that failed a transaction, rather than repeating the whole group. Notably, Det-5G introduces no new 5G-Advanced air-interface primitives — it composes existing Release-19 mechanisms (Semi-Persistent Scheduling for downlink, Configured Grant for uplink, existing HARQ and slot-/non-slot-based transmission structures per TS 38.214) into a cycle-oriented scheduling policy, positioning itself as deployable within current standards rather than requiring new Release-20+ primitives.

Evaluated via a customized 5G NR scheduler combining closed-form timing/reliability analysis with Monte Carlo simulation (3.8 GHz / 40 MHz UK private-5G band, 30 kHz SCS, 106 RBs, 64-byte payloads per direction, three BLER operating conditions weighted 0.50/0.35/0.15), Det-5G met a 2x10^-5 per-cycle failure-probability target at a 4 ms deadline with a 2.15 ms average cycle time and 4.7x10^-6 measured failure probability — about 34% lower average cycle time than a fixed K=5 proactive-repetition baseline at comparable reliability, and roughly 44% less proactive-repetition resource occupancy, while dynamic grant-based scheduling with reactive HARQ hit only 5.6x10^-4 failure probability (missing the target) and exhibited 1-3 ms of retransmission-induced timing variation that Det-5G and fixed-repetition schemes both avoid entirely. In a 16-device multi-user scenario, Det-5G's non-slot-based mode achieved a 3.43 ms 99th-percentile cycle time versus 5.25 ms for dynamic scheduling and 4.75 ms for SPS/CG (28-35% reduction). Under a stringent 1 ms deadline / 10^-6 target stress test (60 kHz SCS, 2-symbol transmissions), Det-5G matched the best fixed-repetition configuration (K=7) at 0.61 ms, the largest timing margin among all tested schemes. At a representative 3 m/s device speed, the adaptive-bundling trigger fired in only about 7.5% of cycles, a 92.5% reduction in reconfiguration overhead relative to always re-computing allocations cycle-by-cycle.

## Summary (ZH)
Adnan Aijaz（东芝欧洲有限公司布里斯托研究与创新实验室；arXiv v1，2026 年 9 月 7 日；已被 IEEE 下一代通信会议 NextGCom 2026 接收）指出，5G 的超可靠低时延通信（uRLLC）能力虽然足以保证单个数据包的低时延与高可靠性，但仅凭这一点并不足以使一条无线链路对闭环工业运动控制而言具有确定性。论文的诊断是：传统 5G 调度将控制器的下行命令与设备的上行响应视为两个相互独立的数据包，各自独立地承受 HARQ 重传；只要任一环节发生不可预测的被动重传，即便每个数据包各自仍满足自身的时延/可靠性目标，完整的"命令—反馈"往返完成时间也会变得不确定。相比之下，工业闭环控制所需要的是整个双向事务在一个周期截止时间内可预测地完成——而不仅仅是其中每一半各自独立达标。

Det-5G 的核心设计思路是将完整的下行命令/上行响应往返及其周期级确认，作为单一原子调度对象来处理，而非两个独立对象。可靠性通过自适应捆绑传输主动预置：捆绑长度（需调度的重复次数）在周期开始前即确定，由一个算法驱动——当 RSSI 跌破阈值、偏离其移动平均值、或方差超出限制时重新触发——选择满足目标可靠性加干扰裕量所需的最小捆绑长度，从而消除固定重复方案与动态授权方案所固有的被动 HARQ 尾部时延。该框架同时支持预留模式（周期性重复分配，信令开销更低，适用于稳定链路）与逐周期模式（每个周期重新进行联合分配，适用于移动或快速变化的链路）。针对多设备控制组，框架还引入了组下行传输（向组内全部成员发送单次共同传输，捆绑长度由算法根据组内最弱设备确定——以牺牲强设备的部分效率换取消除逐设备冗余下行空口时间）以及两种多用户上行打包策略：一种基于时隙的方案，按信噪比对设备排序并将其打包进可用资源块；另一种非基于时隙的方案，优先调度最长的传输，让较短的传输填充剩余的符号级空隙，以适应异构链路条件；一种选择性恢复机制仅对事务失败的设备重新分组，而非重复整个组。值得注意的是，Det-5G 并未引入任何新的 5G-Advanced 空口原语——它将现有的 Release-19 机制（用于下行的半持续调度、用于上行的配置授权、以及 TS 38.214 中既有的 HARQ 与基于/非基于时隙的传输结构）组合为一套面向周期的调度策略，将自身定位为可在现行标准框架内部署，而非依赖 Release-20 及以后的新原语。

通过一个定制的 5G NR 调度器（结合闭式时延/可靠性分析与蒙特卡洛仿真：3.8 GHz / 40 MHz 的英国专用 5G 频段，30 kHz 子载波间隔，106 个资源块，每方向 64 字节负载，三种误块率工况，权重分别为 0.50/0.35/0.15）进行评估，Det-5G 在 4 毫秒截止时间下达成了 2×10⁻⁵ 的单周期失败概率目标，平均周期完成时间为 2.15 毫秒，实测失败概率为 4.7×10⁻⁶——相较于可靠性相当的固定 K=5 主动重复基线，平均周期时间降低约 34%，主动重复所占资源开销降低约 44%；而采用被动 HARQ 的动态授权调度仅达到 5.6×10⁻⁴ 的失败概率（未达标），并表现出 1–3 毫秒的重传引发时延波动，而 Det-5G 与固定重复方案均完全避免了这一波动。在一个 16 设备的多用户场景中，Det-5G 的非基于时隙模式实现了 3.43 毫秒的第 99 百分位周期时间，相比动态调度的 5.25 毫秒与 SPS/CG 的 4.75 毫秒降低了 28%–35%。在更为严苛的 1 毫秒截止时间 / 10⁻⁶ 目标压力测试（60 kHz 子载波间隔，2 符号传输）下，Det-5G 与表现最佳的固定重复配置（K=7）打平，均为 0.61 毫秒，是所有测试方案中时序裕量最大的。在代表性的 3 米/秒设备移动速度下，自适应捆绑触发机制仅在约 7.5% 的周期中被激活，相较于逐周期始终重新计算分配，重配置开销降低了 92.5%。

## Key technical points (EN)
- Problem: conventional 5G scheduling treats DL command and UL response as independent HARQ-retransmitted packets, so the bidirectional control-cycle completion time is non-deterministic even when each packet meets its own latency/reliability target.
- Det-5G treats the DL command + UL response + cycle-level block ACK as one atomic scheduling object (self-contained cyclic transmission).
- Adaptive bundled transmissions set repetition count proactively before the cycle, re-triggered on RSSI threshold/drift/variance events, choosing the minimal bundle meeting target reliability + interference margin - avoids reactive HARQ tail delay.
- Two operation modes: reserved (periodic allocations, low signaling overhead) and cycle-by-cycle (fresh joint allocation, for mobility/interference variation).
- Multi-user mechanisms: group downlink (single transmission, bundle set by weakest device), slot-based (SNR-sorted RB packing) and non-slot-based (longest-first, symbol-level gap filling) uplink packing, selective recovery (only failed devices re-scheduled).
- Built entirely from existing 3GPP Release-19 mechanisms (SPS, Configured Grant, HARQ, slot-/non-slot-based transmission per TS 38.214) - no new air-interface primitives required.
- Evaluation (3.8 GHz/40 MHz UK private-5G band, 30 kHz SCS, 106 RBs, 64B payloads, Monte Carlo + closed-form analysis): 4ms-deadline/2x10^-5-target case - Det-5G 2.15ms avg cycle time / 4.7x10^-6 failure prob vs. fixed K=5's 3.25ms (Det-5G ~34% faster at comparable reliability) vs. dynamic-HARQ's 5.6x10^-4 failure prob (misses target) with 1-3ms retransmission-induced variation.
- 16-device multi-user scenario: Det-5G NSBT 3.43ms P99 cycle time vs. 5.25ms (dynamic) / 4.75ms (SPS/CG) - 28-35% reduction.
- Stringent stress test (1ms deadline, 10^-6 target, 60kHz SCS): Det-5G matches best fixed-repetition (K=7) at 0.61ms, largest timing margin of all schemes tested.
- Mobility (3 m/s): adaptive-bundling reconfiguration triggers in only ~7.5% of cycles, a 92.5% reduction vs. always recomputing per-cycle.

## Key technical points (ZH)
- 问题：传统 5G 调度将下行命令与上行响应视为各自独立、分别进行 HARQ 重传的数据包，因此即便每个数据包各自都满足自身的时延/可靠性目标，双向控制周期的完成时间仍不确定。
- Det-5G 将下行命令 + 上行响应 + 周期级块确认视为单一原子调度对象（自包含周期性传输）。
- 自适应捆绑传输在周期开始前主动设定重复次数，在 RSSI 跌破阈值/偏移/方差超限时重新触发，选择满足目标可靠性加干扰裕量所需的最小捆绑长度——避免了被动 HARQ 的尾部时延。
- 两种运行模式：预留模式（周期性分配，信令开销低）与逐周期模式（每周期重新联合分配，适应移动性/干扰变化）。
- 多用户机制：组下行传输（单次传输，捆绑长度由最弱设备确定）、基于时隙（按信噪比排序打包资源块）与非基于时隙（最长优先、符号级空隙填充）两种上行打包策略、选择性恢复（仅对失败设备重新调度）。
- 完全基于现有 3GPP Release-19 机制构建（半持续调度、配置授权、HARQ、TS 38.214 中基于/非基于时隙的传输结构）——无需任何新的空口原语。
- 评估（3.8 GHz/40 MHz 英国专用 5G 频段，30 kHz 子载波间隔，106 个资源块，64 字节负载，蒙特卡洛加闭式分析）：在 4 毫秒截止时间/2×10⁻⁵ 目标下，Det-5G 平均周期时间 2.15 毫秒、失败概率 4.7×10⁻⁶，相比固定 K=5 方案的 3.25 毫秒（可靠性相当时快约 34%），相比采用被动 HARQ 的动态调度（失败概率仅 5.6×10⁻⁴，未达标，且存在 1–3 毫秒的重传引发波动）。
- 16 设备多用户场景：Det-5G 非基于时隙模式的第 99 百分位周期时间为 3.43 毫秒，相比动态调度的 5.25 毫秒与 SPS/CG 的 4.75 毫秒降低 28%–35%。
- 严苛压力测试（1 毫秒截止时间，10⁻⁶ 目标，60 kHz 子载波间隔）：Det-5G 与表现最佳的固定重复配置（K=7）打平，均为 0.61 毫秒，是所有测试方案中时序裕量最大的。
- 移动场景（3 米/秒）：自适应捆绑重配置仅在约 7.5% 的周期中被触发，相比逐周期始终重新计算，开销降低 92.5%。

## Why it matters / what's new (EN)
The KB's determinism-over-cellular thread so far (the 2026-08-17 5G-TSN bridge-scaling paper) has addressed how many TSN endpoints a shared 5G bearer can carry under a fixed scheduling policy. This is the first entry to attack determinism at the scheduling-policy level itself, by re-defining the atomic unit the 5G scheduler reasons about — from independent per-direction packets to the coupled command-feedback transaction industrial control actually cares about. Because it composes only existing Release-19 mechanisms rather than proposing new standard primitives, it is also a rare "deployable now" entry in a bin otherwise dominated by AI-RAN and O-RAN control-plane research that assumes a not-yet-standardized control loop.

## Why it matters / what's new (ZH)
知识库中此前关于蜂窝网络确定性的相关内容（2026-08-17 的 5G-TSN 桥接扩展性论文）主要探讨在固定调度策略下，一条共享的 5G 承载能够支持多少个 TSN 端点。本条目是首个在调度策略本身层面攻克确定性问题的条目——它重新定义了 5G 调度器所处理的原子单元，将其从各方向独立的数据包，转变为工业控制真正关心的、耦合在一起的"命令—反馈"事务。由于该方案仅组合现有的 Release-19 机制、而非提出新的标准原语，它在这个通常由假设尚未标准化控制回路的 AI-RAN/O-RAN 控制面研究主导的栏目中，也是一个难得的"当下即可部署"的条目。

## Images
![NR numerology and slot-based/non-slot-based transmission opportunities used by Det-5G | Det-5G 所使用的 NR 参数集与基于/非基于时隙传输机会](https://arxiv.org/html/2609.07386v1/Slot_concepts.png)
![Det-5G single-user self-contained cyclic transmission structure | Det-5G 单用户自包含周期性传输结构](https://arxiv.org/html/2609.07386v1/SU_SC_Txn1.png)
