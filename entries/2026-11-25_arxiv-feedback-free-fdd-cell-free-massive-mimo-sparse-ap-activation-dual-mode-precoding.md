---
id: 2026-11-25_arxiv-feedback-free-fdd-cell-free-massive-mimo-sparse-ap-activation-dual-mode-precoding
date_published: 2026-11-19
date_found: 2026-11-25
type: academic-paper
technology: cellular
title_en: "Feedback-Free FDD Cell-Free Massive MIMO With Sparse AP Activation and Dual-Mode Precoding"
title_zh: "基于稀疏 AP 激活与双模预编码的免反馈 FDD 无蜂窝大规模 MIMO"
url: "https://arxiv.org/abs/2611.25968"
source_quality: full
topics: [cell-free-massive-MIMO, FDD, angle-reciprocity, SLNR-precoding, semidefinite-relaxation, sparse-AP-activation, energy-efficiency]
topic_primary: cellular-massive-mimo
topics_secondary: [6g-vision]
novelty_score: 3
---

## Summary (EN)

Wei Jiang and Hans Dieter Schotten propose a way to run cell-free massive MIMO (CFmMIMO) in frequency-division duplex (FDD) mode without channel-state feedback. The correspondence (5 pages, submitted to IEEE Transactions on Vehicular Technology) combines two mechanisms. Sparse AP activation has each user be served by its strongest available AP, which collapses the downlink pilot dimension so that orthogonal training and coherent detection are affordable while idle APs' circuits are switched off. Angle-reciprocity precoding (ARP) steers each downlink beam using only uplink-estimated angles, so no CSI feedback is needed.

A load-adaptive dual-mode optimizer refines the ARP beams: closed-form signal-to-leakage-and-noise-ratio (SLNR) precoding boosts the data rate at high traffic load, and semidefinite relaxation (SDR) minimizes power to meet per-user average SINR targets at low load. The paper also gives a closed-form achievable rate that remains valid under angle-estimation error, reciprocity mismatch and multipath. Evidence is Monte Carlo simulation (500 realizations) with 64 four-antenna APs and 8 scheduled users in a 1 x 1 km area with a 2 GHz carrier and 100 MHz duplex gap.

## Summary (ZH)

Wei Jiang 与 Hans Dieter Schotten 提出一种无需信道状态反馈即可在频分双工（FDD）模式下运行无蜂窝大规模 MIMO（CFmMIMO）的方法。这篇 5 页的短文（投稿至 IEEE Transactions on Vehicular Technology）结合了两种机制。稀疏 AP 激活让每个用户由其最强的可用 AP 服务，使下行导频维度坍缩，从而正交训练与相干检测的开销可承受，同时空闲 AP 的电路被关闭。角度互易预编码（ARP）仅利用上行估计的角度来引导每个下行波束，因此无需 CSI 反馈。

负载自适应的双模优化器对 ARP 波束做进一步优化：高业务负载时采用闭式的信漏噪比（SLNR）预编码提升数据速率，低负载时采用半定松弛（SDR）最小化功率以满足每用户平均 SINR 目标。论文还给出闭式可达速率，在角度估计误差、互易性失配与多径下仍然有效。证据来自蒙特卡洛仿真（500 次实现）：1 x 1 km 区域内 64 个四天线 AP、8 个被调度用户，载频 2 GHz，双工间隔 100 MHz。

## Key technical points (EN)

- System model: Q = 64 default APs with N_t = 4 antennas each at half-wavelength spacing, K = 8 single-antenna users scheduled per resource block (12.5% of Q), 20 MHz bandwidth, coherence block of 200 symbols (K uplink pilot symbols, 192 downlink), per-AP power budget 200 mW, dominant-path channel abstraction.
- Cost of the design: four stages (strongest-AP assignment, MUSIC/ESPRIT-type single-source angle estimation, closed-form SLNR eigenproblem per active AP, SDR for the low-load mode) all depend on large-scale fading and angles, which vary on the large-scale-fading timescale; the paper counts the SLNR mode as O(K N_t^3).
- Spectral efficiency versus number of APs: at Q = 100, SLNR precoding reaches 67 bps/Hz and basic ARP 62 bps/Hz. FDD-PSP (path-selective precoding with fed-back path gains, K L = 16 downlink pilots, about 14 awake APs) reaches 70 bps/Hz, 3-6% above the proposed SLNR, but needs a feedback link and twice the pilots. The feedback-free FDD-MMSE baseline reaches 61 bps/Hz (about 10% below SLNR) and 55 bps/Hz with max-min power control; FDD-CS saturates near 33 bps/Hz.
- Energy efficiency: the proposed schemes peak near 250 Mbit/J at 15 dBm per-AP power, with 56 deactivated APs saving 16.24 W of circuit and fronthaul power; FDD-PSP peaks at 174 Mbit/J (31% lower), FDD-MMSE at 79 Mbit/J, FDD-MMSE (max-min) at 114 Mbit/J and FDD-CS below 28 Mbit/J.
- Dual-mode switching at Q = 64: the SDR problem is feasible in all realizations up to a 6 dB common SINR target, 95% at 12 dB, 67% at 18 dB and 20% at 22 dB; meeting 3 dB costs 1.2 mW average radiated power per active AP (0.6% of the budget) and delivers 8.9 bps/Hz. The switching rule is the feasibility of the SDP, and switching needs no extra signaling.
- Robustness: SLNR loses under 1% of sum SE at 2 degrees angle error (the paper quotes this as MUSIC/ESPRIT accuracy) and about 6% at 8 degrees; a deterministic reciprocity bias of 4 degrees degrades SE about like a random error of equal size (57.2 vs 57.5 bps/Hz); under Rayleigh multipath with 20 paths per link, the worst-case loss is 6.1%. Activating two APs per user (D = 2) brings no SE benefit (57.6 vs 59.1 bps/Hz) and about halves EE.
- Stated simplifications: baselines with feedback are evaluated with error-free, zero-cost feedback; results are simulation-only.

## Key technical points (ZH)

- 系统模型：默认 Q = 64 个 AP，每个 AP 有 N_t = 4 根半波长间距天线，每个资源块调度 K = 8 个单天线用户（占 Q 的 12.5%），带宽 20 MHz，相干块 200 个符号（K 个上行导频符号、192 个下行符号），单 AP 功率预算 200 mW，采用主径信道抽象。
- 设计代价：四个步骤（最强 AP 分配、MUSIC/ESPRIT 类单源角度估计、每个激活 AP 的闭式 SLNR 特征值问题、低负载模式下的 SDR）都只依赖大尺度衰落与角度，其变化处于大尺度衰落时间尺度；论文将 SLNR 模式的复杂度计为 O(K N_t^3)。
- 频谱效率与 AP 数的关系：Q = 100 时，SLNR 预编码达 67 bps/Hz，基本 ARP 达 62 bps/Hz。FDD-PSP（带反馈路径增益的路径选择性预编码，K L = 16 个下行导频，约 14 个唤醒 AP）达 70 bps/Hz，比所提 SLNR 高 3-6%，但需要反馈链路和两倍导频。免反馈的 FDD-MMSE 基线达 61 bps/Hz（比 SLNR 低约 10%），采用最大最小功率控制时为 55 bps/Hz；FDD-CS 在约 33 bps/Hz 饱和。
- 能效：所提方案在单 AP 功率 15 dBm 附近达到约 250 Mbit/J 的峰值，关闭 56 个 AP 可节省 16.24 W 的电路与前传功耗；FDD-PSP 峰值为 174 Mbit/J（低 31%），FDD-MMSE 为 79 Mbit/J，FDD-MMSE（最大最小）为 114 Mbit/J，FDD-CS 低于 28 Mbit/J。
- Q = 64 时的双模切换：SDR 问题在共同 SINR 目标至 6 dB 时对全部实现可行，12 dB 时为 95%，18 dB 时为 67%，22 dB 时为 20%；满足 3 dB 目标时每个激活 AP 平均辐射功率 1.2 mW（占预算 0.6%），提供 8.9 bps/Hz。切换规则是该 SDP 是否可行，切换不需要额外信令。
- 稳健性：角度误差 2 度（论文称其为 MUSIC/ESPRIT 的精度）时 SLNR 的和速率损失低于 1%，8 度时约 6%；4 度的确定性互易偏差造成的 SE 下降与同等大小的随机误差相当（57.2 对 57.5 bps/Hz）；在每链路 20 条路径的瑞利多径下，最坏损失为 6.1%。每用户激活两个 AP（D = 2）不带来 SE 增益（57.6 对 59.1 bps/Hz），能效约减半。
- 文中声明的简化：带反馈的基线按无误差、无代价的反馈评估；结果仅来自仿真。

## Why it matters / what's new (EN)

The paper's conclusion is that jointly using spatial sparsity and angular reciprocity makes FDD CFmMIMO practical: about 10% higher spectral efficiency and more than twice the peak energy efficiency of the feedback-free scheme it compares against (Abdallah and Mansour), with the only FDD baseline that achieves higher SE requiring a feedback channel and doubled training. It is a 5-page simulation study under a dominant-path channel abstraction, so the numbers describe the authors' model rather than measured FDD deployments.

## Why it matters / what's new (ZH)

论文的结论是：联合利用空间稀疏性与角度互易性可使 FDD CFmMIMO 实用化：相较其所比较的免反馈方案（Abdallah 与 Mansour），频谱效率约高 10%，峰值能效超过两倍，而唯一达到更高 SE 的 FDD 基线需要反馈信道和两倍的训练开销。这是一篇 5 页、基于主径信道抽象的仿真研究，因此数字反映的是作者的模型，而非实测的 FDD 部署。

## Images

None.
