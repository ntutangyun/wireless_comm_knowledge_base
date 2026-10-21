---
id: 2026-10-21_arxiv-nr-pdsch-energy-efficiency-eesm-link-abstraction
date_published: 2026-10-04
date_found: 2026-10-21
type: academic-paper
technology: cellular
title_en: "Energy Efficiency Optimization for 5G NR PDSCH: A Cross-Layer Link Abstraction Framework"
title_zh: "5G NR PDSCH 能效优化：跨层链路抽象框架"
url: "https://arxiv.org/abs/2610.05390"
source_quality: full
topics: [5G-NR, PDSCH, energy-efficiency, EESM, MCS, BLER, link-abstraction, waterfilling, TDL-C, TS-38.214]
topic_primary: 5g-nr
topics_secondary: []
novelty_score: 3
---

## Summary (EN)
Jaebum Park (UC San Diego), Chan-Byoung Chae (Yonsei University) and Robert W. Heath Jr. (UC San Diego) optimize the energy efficiency (EE) of the 3GPP NR physical downlink shared channel (PDSCH). The paper's point of departure is that EE studies for cellular links often assume Shannon-capacity transmission, whereas the PDSCH delivers a transport block whose size is fixed by the modulation and coding scheme (MCS), the rank and the resource allocation chosen by the scheduler, and which must meet a target block error rate (BLER).

With the standard transport block size as the throughput and the target BLER as the constraint, the fractional EE objective reduces to transmit-power minimization for a fixed MCS and rank. The authors use exponential effective SNR mapping (EESM) to turn the BLER constraint into a convex per-subcarrier power constraint, derive a closed-form waterfilling-like power allocation (the water level set by the EESM threshold) and an EE-maximizing MCS selection rule. A single calibration parameter per MCS, fitted offline over 3GPP tapped-delay-line C (TDL-C) channels, lets EESM predict BLER without per-realization link-level simulation.

Results come from a 3GPP NR PDSCH link-level simulator (LDPC base graph 1 with layered offset min-sum, at most 10 iterations; OFDM; MMSE detection; perfect receive-side channel knowledge). A Shannon-capacity baseline overestimates the EE of equal-power transmission by 1.5 to 1.7 times at high SNR within the transmit power budget. In an analytic illustration (2x2, frequency-flat channel, continuous-rate expressions, RF-only power model), single-stream transmission is more power-efficient up to a traffic demand of 4.93 bps/Hz.

## Summary (ZH)
Jaebum Park（加州大学圣迭戈分校）、Chan-Byoung Chae（延世大学）与 Robert W. Heath Jr.（加州大学圣迭戈分校）优化 3GPP NR 物理下行共享信道（PDSCH）的能效（EE）。论文的出发点是：蜂窝链路的能效研究常假设香农容量传输，而 PDSCH 传送的传输块大小由调制编码方案（MCS）、秩以及调度器选定的资源分配决定，并且必须满足目标误块率（BLER）。

以标准传输块大小作为吞吐量、以目标 BLER 作为约束，对固定的 MCS 与秩，分式能效目标退化为发射功率最小化。作者使用指数有效信噪比映射（EESM）把 BLER 约束转化为逐子载波的凸功率约束，推导出闭式的类注水功率分配（水位由 EESM 门限决定）以及使能效最大的 MCS 选择规则。每个 MCS 只需一个在 3GPP TDL-C（抽头延迟线 C）信道上离线拟合的校准参数，EESM 即可在无需逐信道实现做链路级仿真的情况下预测 BLER。

结果来自 3GPP NR PDSCH 链路级仿真器（LDPC 基图 1，分层偏移 min-sum，至多 10 次迭代；OFDM；MMSE 检测；接收端信道完全已知）。在发射功率预算内的高信噪比下，香农容量基线对等功率传输能效的高估为 1.5 至 1.7 倍。在一个解析示例中（2x2、频率平坦信道、连续速率表达式、仅射频功耗模型），业务需求不超过 4.93 bps/Hz 时单流传输更省功率。

## Key technical points (EN)
- Problem formulation: maximize EE for a PDSCH link with the standard transport block size (as in TS 38.214) as throughput and a target BLER constraint; for fixed MCS and rank, throughput is constant, so the objective becomes power minimization.
- EESM turns the BLER constraint into a convex per-subcarrier power constraint; the closed-form allocation is waterfilling-like with the water level set by the EESM threshold (Theorem 1 applies to the SISO link).
- One calibration parameter per MCS, fitted offline on TDL-C channels (100 ns delay spread), places the EESM-predicted BLER points on the AWGN reference curve of each of the four evaluated MCS indices; the thresholds at the target BLER are 2.9, 9.1, 18.0 and 25.6 dB.
- Per-MCS EE is zero while BLER exceeds the target and jumps to its peak once effective SNR reaches the threshold, then decays as transmit power grows; the EE-maximizing MCS therefore depends on operating SNR and traces the upper envelope of the four curves.
- Simulation parameters include 3.5 GHz carrier, 30 kHz subcarrier spacing, 3276 subcarriers, 33 dBm transmit-power budget and 7 dB noise figure; the calibrated parameter is specific to the simulated LDPC receiver.
- Rank comparison: in an analytic illustration (2x2, frequency-flat channel, continuous-rate expressions, RF-only power model), single-stream transmission is more power-efficient up to a traffic demand of 4.93 bps/Hz.
- Stated assumptions and future work: perfect CSI, single user, full PRB allocation; channel estimation errors and interference are expected to raise the power needed to meet the EESM threshold; multi-user, imperfect-CSI settings and comparison with MIESM-based link adaptation are left for future work.

## Key technical points (ZH)
- 问题表述：以标准传输块大小（见 TS 38.214）为吞吐量、目标 BLER 为约束，最大化 PDSCH 链路的能效；对固定 MCS 与秩，吞吐量为常数，目标因此转化为功率最小化。
- EESM 把 BLER 约束转化为逐子载波的凸功率约束；闭式分配为类注水形式，水位由 EESM 门限决定（定理 1 适用于 SISO 链路）。
- 每个 MCS 一个在 TDL-C 信道（时延扩展 100 ns）上离线拟合的校准参数，使 EESM 预测的 BLER 点落在四个被评估 MCS 索引各自的 AWGN 参考曲线上；目标 BLER 处的门限分别为 2.9、9.1、18.0 和 25.6 dB。
- 各 MCS 的能效在 BLER 超过目标时为零，一旦有效信噪比达到门限即跳变至峰值，随后随发射功率增大而下降；因此使能效最大的 MCS 取决于工作信噪比，并描出四条曲线的上包络。
- 仿真参数包括 3.5 GHz 载频、30 kHz 子载波间隔、3276 个子载波、33 dBm 发射功率预算与 7 dB 噪声系数；所校准的参数特定于被仿真的 LDPC 接收机。
- 秩比较：在一个解析示例中（2x2、频率平坦信道、连续速率表达式、仅射频功耗模型），业务需求不超过 4.93 bps/Hz 时单流传输更省功率。
- 作者声明的假设与后续工作：信道状态信息理想、单用户、全 PRB 分配；预计信道估计误差和干扰会提高满足 EESM 门限所需的功率；多用户、非理想 CSI 场景以及与基于 MIESM 的链路自适应的比较留待后续。

## Why it matters / what's new (EN)
This is a link-level analytical treatment of PDSCH energy efficiency that keeps the discrete MCS, transport-block size and BLER target of the NR PDSCH rather than a continuous Shannon rate. The reported gap (1.5 to 1.7 times at 33 to 37 dB) comes from a SISO TDL-C simulation under the authors' stated assumptions of perfect CSI, a single user and full PRB allocation, with calibration specific to the simulated LDPC receiver.

## Why it matters / what's new (ZH)
本文是对 PDSCH 能效的链路级解析处理，保留了 NR PDSCH 的离散 MCS、传输块大小与 BLER 目标，而不是连续的香农速率。所报告的差距（33 至 37 dB 时 1.5 至 1.7 倍）来自 SISO TDL-C 仿真，基于作者声明的理想 CSI、单用户与全 PRB 分配假设，且校准特定于所仿真的 LDPC 接收机。
