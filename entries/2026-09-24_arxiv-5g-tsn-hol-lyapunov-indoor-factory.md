---
id: 2026-09-24_arxiv-5g-tsn-hol-lyapunov-indoor-factory
date_published: 2026-09-22
date_found: 2026-09-24
type: academic-paper
technology: cellular
title_en: "Overload-Robust Latency in 5G-TSN: A HoL-Enhanced Hybrid Lyapunov Approach for 3GPP Indoor Factory Environments"
title_zh: "5G-TSN 中的超载鲁棒时延：面向 3GPP 室内工厂场景的队首增强型混合 Lyapunov 调度方法"
url: "https://arxiv.org/abs/2609.26011"
source_quality: full
topics: [5G-TSN, URLLC, "3GPP TR 38.901", Indoor-Factory, Lyapunov-scheduling, eMBB, mMTC]
topic_primary: 5g-nr
topics_secondary: [redcap-iot]
novelty_score: 3
---

## Summary (EN)

This paper targets converged 5G-TSN (Time-Sensitive Networking) deployments for industrial automation, where a private 5G network must multiplex safety-critical URLLC control traffic with bandwidth-hungry eMBB video and mMTC telemetry over a single, fixed slice of spectrum. The authors identify a "threshold blindness" failure mode in conventional queue-aware schedulers: large eMBB backlogs mathematically dominate the scoring metric, causing sparse but time-critical URLLC control packets to miss their deadlines even though the 3GPP MAC scheduler is nominally responsible for turning a fading, variable-rate radio interface into a deterministic TSN bridge port.

The proposed fix, the HoL-Enhanced Hybrid Lyapunov scheduler, replaces the backlog-volume term in a Lyapunov-drift scheduling score with an exponential urgency penalty keyed to the head-of-line (HoL) packet's own waiting time relative to its delay budget (clipped to prevent numerical overflow), combined with an isolation booster that gives URLLC absolute priority once its budget is nearly exhausted. The whole mechanism collapses into a single closed-form priority score per traffic class per TTI, executable in O(|C| log|C|) time — well inside the 0.5 ms transmission-time-interval budget — without branching logic.

Evaluation used OMNeT++/INET/Simu5G with the 3GPP TR 38.901 Indoor Factory (InF-DL) path-loss model, a 150m x 100m factory floor, a single gNB, 3.8 GHz carrier with 20 MHz (51 PRBs) of fixed spectrum, and mobile AGVs each generating three traffic classes (URLLC control, eMBB video, mMTC telemetry) with realistic frame-size and inter-arrival models. Below a capacity threshold of roughly 12 AGVs, the proposed scheduler is competitive with the strongest delay-aware baselines; above it, under up to 2.5x overload, the proposed scheduler delivers 1.8x more URLLC traffic than the proportional-fair and delay-budget-aware baselines (PF, QoS-PF, DQoS) at N=30, with 4-7x shorter 99th-percentile URLLC latency, at the cost of roughly a two-thirds reduction in aggregate cell throughput (the elastic eMBB class collapses) — a deliberate trade-off that protects safety-critical traffic instead of spreading degradation evenly.

## Summary (ZH)

本文关注面向工业自动化场景的 5G-TSN（时间敏感网络）融合部署：在这类场景中，一张私有 5G 网络必须在固定的一段频谱资源上，同时承载安全攸关的 URLLC 控制流量、占用带宽较大的 eMBB 视频流量，以及 mMTC 遥测流量。作者指出传统"队列感知"调度器存在一种"阈值盲视"失效模式：庞大的 eMBB 积压在打分公式中会在数值上压过一切，导致数量稀少但时间攸关的 URLLC 控制报文错过截止时限——尽管理论上正是 3GPP MAC 调度器负责把一条时变、衰落的无线接口转换成对 TSN 而言具有确定性的桥接端口。

论文提出的解决方案——队首增强型混合 Lyapunov（HoL-Enhanced Hybrid Lyapunov）调度器——用一个指数型紧迫度惩罚项替换了 Lyapunov 漂移调度评分中原本的"队列积压量"项：该惩罚项以队首（HoL）报文自身相对其时延预算的等待时间为基础（并做截断以防止数值溢出），并叠加一个隔离增益因子，使 URLLC 在其时延预算接近耗尽时获得绝对优先权。整套机制最终归结为每个业务类别、每个 TTI 上的一个闭式优先级评分，计算复杂度为 O(|C| log|C|)——在 0.5 毫秒的传输时间间隔预算内绰绰有余，且无需分支判断逻辑。

评估在 OMNeT++/INET/Simu5G 平台上进行，采用 3GPP TR 38.901 室内工厂（InF-DL）路损模型，场景为 150 米 x 100 米的工厂车间、单个 gNB、3.8 GHz 载频、20 MHz（51 个物理资源块）固定频谱，车间内的多台移动 AGV 各自产生三类真实建模的流量（URLLC 控制、eMBB 视频、mMTC 遥测）。在容量阈值（约 12 台 AGV）以下，所提调度器与最强的时延感知类基线相比也具有竞争力；超过阈值、在最高 2.5 倍超载条件下（N=30），所提调度器相比比例公平类及考虑时延预算的基线（PF、QoS-PF、DQoS）能多承载 1.8 倍的 URLLC 流量，且 URLLC 第 99 百分位时延缩短 4-7 倍，代价是整体小区吞吐量下降约三分之二（弹性 eMBB 业务几乎被放弃）——这是一种刻意为之的权衡：优先保护安全攸关流量，而非让性能下降均匀分摊到所有业务。

## Key technical points (EN)

- Single-equation priority score: `S_HoL,c(t) = M_HoL,c(t) · R_c(t) · W_c^β · Γ_c`, where `M_HoL,c(t) = exp(γ · D_bounded,c(t) / D_budget,c)` is the HoL exponential urgency term (γ=5.0, clipped at 5x budget), `R_c(t)` is achievable rate, and `Γ_c` is an isolation booster (≈10^12 for URLLC ≤10ms budget).
- Scheduler-independent capacity threshold observed at N≈12 AGVs on the fixed 51-PRB / 20 MHz budget — beyond this point, scheduling policy (not spectrum) determines outcomes.
- Below threshold: HoL term alone cuts the URLLC deadline-miss ratio by ~50% versus the plain (non-HoL) Hybrid Lyapunov baseline.
- Overload regime (N=20-30, up to 2.5x overload): 1.8x more delivered URLLC traffic and 4-7x shorter 99th-percentile URLLC latency vs. the proportional-fair and delay-budget-aware baselines (PF, QoS-PF, DQoS) at N=30, at the cost of roughly a two-thirds reduction in aggregate cell throughput (the elastic eMBB class collapses).
- A residual URLLC latency floor persists even under light load, attributed to the uplink access path every policy shares (BSR/grant wait, blockage-induced retransmissions), not to contention or queueing — a hard limit the scheduling policy alone cannot remove.
- Evaluated with 10 runs × 300 s each (first 20 s discarded) and 95% confidence intervals, against six baselines (Max C/I, Proportional Fair, BestFit, QoS-PF, DQoS, and the prior plain Hybrid Lyapunov).

## Key technical points (ZH)

- 单一公式优先级评分：`S_HoL,c(t) = M_HoL,c(t) · R_c(t) · W_c^β · Γ_c`，其中 `M_HoL,c(t) = exp(γ · D_bounded,c(t) / D_budget,c)` 为队首指数紧迫度项（γ=5.0，按 5 倍预算截断），`R_c(t)` 为可达速率，`Γ_c` 为隔离增益因子（对 ≤10ms 预算的 URLLC 约为 10^12）。
- 在固定的 51 个 PRB / 20 MHz 频谱预算下，观察到一个与调度策略无关的容量阈值，约在 N≈12 台 AGV 处出现——超过该点后，决定结果的是调度策略而非频谱本身。
- 阈值以下：仅队首项一项即可将 URLLC 截止时限错失率相比朴素（无队首项）混合 Lyapunov 基线降低约 50%。
- 超载状态（N=20-30，最高 2.5 倍超载）：相比比例公平类及考虑时延预算的基线（PF、QoS-PF、DQoS），在 N=30 时，所提方案可多承载 1.8 倍的 URLLC 流量，第 99 百分位 URLLC 时延缩短 4-7 倍，代价是整体小区吞吐量下降约三分之二（弹性 eMBB 业务几乎被放弃）。
- 即使在轻载条件下，仍存在一个残余的 URLLC 时延下限，其成因是所有策略共用的上行接入路径（BSR/授权等待、阻塞引发的重传），而非竞争或排队——这是调度策略单独无法消除的硬性限制。
- 评估采用 10 次独立运行、每次 300 秒（丢弃前 20 秒瞬态）并给出 95% 置信区间，对比六种基线方案（Max C/I、比例公平、BestFit、QoS-PF、DQoS 以及此前的朴素混合 Lyapunov）。

## Why it matters / what's new (EN)

The KB's existing 5G-industrial coverage (e.g. Det-5G, 2026-09-09, which bundles DL-command/UL-response/cycle-ACK into one atomic scheduling object using existing Rel-19 SPS/CG/HARQ mechanisms) addresses deterministic cycle-time guarantees for a single control loop. This paper instead addresses the multi-traffic-class coexistence problem — URLLC control sharing spectrum with eMBB video and mMTC telemetry on the same cell — and specifically targets robustness under overload rather than nominal-load performance, closing a different gap in the 5G-TSN industrial-automation thread.

## Why it matters / what's new (ZH)

本知识库已有的 5G 工业场景相关条目（如 2026-09-09 的 Det-5G，其做法是利用现有 Rel-19 的 SPS/CG/HARQ 机制，把下行指令、上行响应与周期确认捆绑为一个原子调度对象）解决的是单一控制回路的确定性周期保证问题。而本文解决的是多业务类别共存问题——URLLC 控制流量与 eMBB 视频、mMTC 遥测流量在同一小区共享频谱——并且特别针对超载条件下的鲁棒性，而非标称负载下的性能，填补了 5G-TSN 工业自动化脉络中的另一处空白。
