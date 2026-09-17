---
id: 2026-09-17_arxiv-aura-agentic-ran-arbitration-oran
date_published: 2026-09-16
date_found: 2026-09-17
type: academic-paper
technology: cellular
title_en: "Taming the Agentic RAN: Stability-Guaranteed Arbitration of Autonomous AI Agents in O-RAN"
title_zh: "驯服智能体化 RAN：O-RAN 中自主 AI 智能体的稳定性保证仲裁机制"
url: "https://arxiv.org/abs/2609.18857"
source_quality: full
topics: [O-RAN, agentic-RAN, rApp, network-slicing, RIC, closed-loop-stability, OpenAirInterface]
topic_primary: open-ran
topics_secondary: [cellular-ai]
novelty_score: 4
---

## Summary (EN)

This paper (Seyed Bagher Hashemi Natanzi, Bo Tang; Worcester Polytechnic Institute) demonstrates, on a live O-RAN system, that independently deployed autonomous AI agents controlling the RAN can jointly destabilize shared radio resources even when each agent's own objective is individually correct. The authors describe two rApp-style agents: an SLA-protection agent that enlarges a latency-sensitive slice's PRB (physical resource block) quota when its measured one-way delay exceeds a target, and an energy-efficiency agent that shrinks the total allocatable resource cap when measured utilization falls below a target. Neither agent observes the other, since the O-RAN architecture provides no channel for independently deployed applications to learn of each other's objectives. The paper states this is "the first end-to-end empirical demonstration of multi-agent RAN instability on a running 5GSA O-RAN stack, using real measured one-way delay and throughput."

The authors formally model the two agents' opposing best-response maps and prove (Proposition 1) that, under a gain condition and observation delay, the uncoordinated system enters a recurring limit cycle rather than settling. They then present AURA (Arbitrated aUtonomous Resource Agents), a lightweight arbitration layer that admits an agent's proposed action only if it satisfies three checks: a feasibility invariant on the shared state, a per-variable dwell time exceeding the measured control-loop delay, and a deadband excluding negligible changes; conflicting proposals are resolved by a fixed priority order (SLA-restoring first). The paper proves (Proposition 2) that, under these conditions, the arbitrated system's admitted-action sequence terminates at a feasible operating point.

The system was implemented and evaluated on a containerized OpenAirInterface (OAI) 5G testbed with FlexRIC as the near-RT RIC, including a per-slice PRB quota enforcement mechanism the authors added to the OAI NR MAC downlink pre-processor (noting that the upstream OAI E2 slice service model only emulates control rather than actually enforcing it). Across four regimes (Static, Single-agent, Direct/unarbitrated, and AURA), the unarbitrated "Direct" regime showed a settled shared-cap amplitude of 8.4 PRBs that recurred in a second, independent load cycle (2.0 PRBs, non-zero in 3 of 5 repetitions), while AURA reduced this to 0.4 PRBs and reduced the coexisting slice's throughput-SLA violation rate from 40-55% (under Direct/Single) to 0.3%, statistically indistinguishable from the no-agent Static baseline's 0.6%. The paper explicitly reports, as a stated trade-off rather than a shortcoming it obscures, that AURA does not reduce the protected slice's own latency-violation rate (numerically the highest of the four regimes at 92.9% versus Static's 82.8%); a static control run at AURA's own settled operating point narrowed but did not close this gap, leaving a residual attributed to live-dynamics effects for future work. Measured end-to-end control-loop delay was dominated by a ~265 ms file-driven enforcement step, giving a loop delay estimate of ~7 seconds against which the arbiter's 8-second dwell time was set.

## Summary (ZH)

本文（Seyed Bagher Hashemi Natanzi、Bo Tang；伍斯特理工学院 Worcester Polytechnic Institute）在一个真实运行的 O-RAN 系统上证明：即便每个自主 AI 智能体各自的控制目标本身都是合理的，独立部署的多个智能体共同控制 RAN 时仍可能使共享无线资源失稳。作者描述了两个类 rApp 智能体：一个 SLA 保护智能体，在其实测单向时延超出目标时扩大时延敏感切片的 PRB（物理资源块）配额；另一个能效智能体，在实测利用率低于目标时缩减可分配资源总上限。由于 O-RAN 架构未提供独立部署应用之间获知彼此目标的通道，两个智能体互不感知对方的存在。论文明确指出，这是"首次在运行中的 5G SA O-RAN 系统上、使用真实测得的单向时延与吞吐量，对多智能体 RAN 失稳进行的端到端实证演示"。

作者对两个智能体相互对立的最优响应映射进行了形式化建模，并证明（命题一）：在满足一定增益条件与观测延迟的情况下，无协调系统会进入循环出现的极限环，而非收敛稳定。随后作者提出 AURA（受仲裁的自主资源智能体，Arbitrated aUtonomous Resource Agents）——一个轻量级仲裁层，仅当智能体提出的动作同时满足三项条件时才予以放行：对共享状态的可行性不变量、超过实测控制回路延迟的逐变量驻留时间，以及排除微小变化的死区；相互冲突的提案按固定优先级（SLA 恢复优先）解决。论文证明（命题二）：在上述条件下，受仲裁系统所放行的动作序列会收敛至一个可行运行点。

该系统在一个容器化的 OpenAirInterface（OAI）5G 测试平台上实现并评估，采用 FlexRIC 作为近实时 RIC，作者还在 OAI NR MAC 下行预处理器中新增了按切片划分的 PRB 配额强制执行机制（并指出上游 OAI 的 E2 切片服务模型仅对控制进行模拟应答，并未真正执行）。在 Static（静态）、Single（单智能体）、Direct（双智能体无仲裁）与 AURA 四种模式对比中，未经仲裁的 Direct 模式下共享上限的稳定振幅为 8.4 个 PRB，且在第二个独立负载周期中仍会复现（2.0 个 PRB，5 次重复中有 3 次非零），而 AURA 将其降至 0.4 个 PRB，并将共存切片的吞吐量 SLA 违反率从 Direct/Single 模式下的 40%-55% 降至 0.3%，与无智能体的 Static 基线（0.6%）在统计上难以区分。论文明确报告（作为自陈的权衡而非刻意掩盖的缺陷）：AURA 并未降低受保护切片自身的时延违反率（数值上是四种模式中最高的，为 92.9%，而 Static 为 82.8%）；在 AURA 自身稳定运行点上进行的静态对照实验缩小了但并未消除这一差距，剩余部分归因于实时动态效应，留待未来工作。实测端到端控制回路延迟主要由约 265 毫秒的文件驱动执行步骤主导，据此估算回路延迟约为 7 秒，仲裁器的驻留时间即据此设为 8 秒。

## Key technical points (EN)

- **Demonstrated pathology**: two individually-correct rApp-style agents (SLA-protection quota grower, energy-efficiency cap shrinker) jointly drive recurring shared-state excursions on a live OAI/FlexRIC O-RAN stack — absent when either agent runs alone.
- **Formal model**: opposing best-response maps under observation delay proven (Proposition 1) to produce a bounded limit cycle rather than convergence when the composed gain exceeds 1.
- **AURA arbiter**: admits a proposed action only if it (i) satisfies a feasibility invariant on shared state, (ii) respects a per-variable dwell time exceeding measured loop delay, and (iii) exceeds a deadband; conflicts resolved by fixed priority (SLA-restoring > throughput > efficiency). Proven (Proposition 2) to terminate at a feasible point.
- **Implementation finding of independent interest**: upstream OpenAirInterface's E2 slice service model is an emulator that acknowledges control messages without acting on the MAC — the authors implemented real per-slice PRB quota enforcement in the OAI NR MAC downlink pre-processor to make the study possible at all.
- **Headline numbers**: settled shared-cap amplitude reduced from 8.4 to 0.4 PRBs (Direct vs. AURA); second-load-cycle recurrence reduced from 2.0 to 0.4 PRBs; coexisting-slice throughput-SLA violations reduced from 40-55% to 0.3% (vs. 0.6% no-agent baseline).
- **Explicitly reported trade-off**: AURA does not improve the protected slice's own latency-SLA violation rate (92.9% vs. Static's 82.8%); a static control at AURA's settled operating point narrows the gap to ~4.2 percentage points but does not close it, with the residual attributed to live-dynamics effects. The paper also cautions that slice-1 violation rates sit at 80-93% in every regime because the RF-simulated host's baseline one-way delay is itself noisy, so the absolute level should not be over-read.
- **Control-loop latency**: measured end-to-end enforcement delay ~265 ms median, giving an estimated loop delay of ~7 s against which the arbiter's dwell time (8 s) was set as an enforced experimental precondition.

## Key technical points (ZH)

- **验证的失稳现象**：两个各自目标均合理的类 rApp 智能体（扩大 SLA 保护配额的智能体、缩减能效上限的智能体）在真实运行的 OAI/FlexRIC O-RAN 系统上共同导致共享状态反复波动——而任一智能体单独运行时并不出现该现象。
- **形式化模型**：证明（命题一）在观测延迟下相互对立的最优响应映射，当复合增益大于 1 时会产生有界极限环而非收敛。
- **AURA 仲裁器**：仅当提议动作同时满足以下条件才予放行：（一）满足共享状态可行性不变量；（二）逐变量驻留时间超过实测回路延迟；（三）超过死区阈值；冲突提案按固定优先级（SLA 恢复 > 吞吐量 > 能效）解决。证明（命题二）该机制收敛至可行运行点。
- **附带的实现发现**：上游 OpenAirInterface 的 E2 切片服务模型仅对控制消息进行模拟应答、并未真正作用于 MAC 层——作者不得不在 OAI NR MAC 下行预处理器中实现真实的按切片 PRB 配额强制执行机制，该研究才得以进行。
- **核心数据**：共享上限的稳定振幅从 8.4 个 PRB（Direct）降至 0.4 个 PRB（AURA）；第二负载周期的复现幅度从 2.0 降至 0.4 个 PRB；共存切片的吞吐量 SLA 违反率从 40%-55% 降至 0.3%（无智能体基线为 0.6%）。
- **明确报告的权衡**：AURA 并未改善受保护切片自身的时延 SLA 违反率（92.9% 对比 Static 的 82.8%）；在 AURA 稳定运行点上的静态对照将差距缩小至约 4.2 个百分点但未能消除，剩余差距归因于实时动态效应。论文同时提醒，由于射频仿真主机的基线单向时延本身带有噪声，切片 1 的违反率在所有模式下都处于 80%-93% 区间，其绝对水平不应被过度解读。
- **控制回路时延**：实测端到端执行时延中位数约 265 毫秒，据此估算回路时延约 7 秒，仲裁器驻留时间（8 秒）即据此设定，并作为实验的强制前提条件。

## Why it matters / what's new (EN)

The KB's existing 2026-09-16 agentic-RAN cluster (`2026-09-16_arxiv-ai-native-open-ran-roadmap-agents`, `2026-09-16_arxiv-decentralized-intelligence-trustworthy-6g`, `2026-09-16_arxiv-layer2-trigger-aiml-lifecycle-6g`) covers roadmaps and architectural surveys for AI-native/agentic Open RAN. This paper instead demonstrates a concrete failure mode — two individually-correct agents destabilizing each other on a live stack, which the paper presents as the first end-to-end empirical demonstration of its kind — and supplies both a formal convergence proof and a working arbitration-layer implementation with measured before/after numbers, rather than a proposed architecture or vision.

## Why it matters / what's new (ZH)

知识库现有的 2026-09-16 智能体化 RAN 相关条目（`2026-09-16_arxiv-ai-native-open-ran-roadmap-agents`、`2026-09-16_arxiv-decentralized-intelligence-trustworthy-6g`、`2026-09-16_arxiv-layer2-trigger-aiml-lifecycle-6g`）主要是关于 AI 原生 / 智能体化开放 RAN 的路线图与架构综述。本文则展示了一种具体故障模式——两个各自目标均合理的智能体在真实系统上相互导致失稳（论文自称这是首次此类端到端实证演示）——并给出了形式化收敛性证明与一个真实实现的仲裁层，附带前后对比的实测数据，而非仅仅是一个提议中的架构或愿景。

## Images

![AURA architecture: autonomous AI agents submit proposals to a central arbiter enforcing feasibility, dwell-time, and deadband checks before actions reach the OAI gNB's MAC scheduler | AURA 架构：自主 AI 智能体向中央仲裁器提交提议，仲裁器在动作到达 OAI gNB MAC 调度器之前执行可行性、驻留时间与死区检查](https://arxiv.org/html/2609.18857v1/Images/Diagram.jpg)
