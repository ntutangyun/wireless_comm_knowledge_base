---
id: 2026-08-18_arxiv-batteryless-sounding-wifi8-mumimo
date_published: 2026-07-31
date_found: 2026-08-18
type: academic-paper
technology: wifi
title_en: "Data-Driven Batteryless Channel Sounding for Wi-Fi 8-Inspired Downlink MU-MIMO"
title_zh: "面向 Wi-Fi 8 下行 MU-MIMO 的数据驱动无电池信道探测间隔优化"
url: "https://arxiv.org/abs/2607.29288"
source_quality: full
topics: [802.11bn, 802.11bp, AMP, backscatter, MU-MIMO, channel-sounding, CSI-aging, Wi-Fi-8]
topic_primary: amp-iot
topics_secondary: [wifi8-uhr, energy-power-save]
novelty_score: 3
---

## Summary (EN)
Zhang et al. (City University of Hong Kong / CityU Dongguan, Chongqing University, and Ming Gan of Huawei Technologies; accepted at IEEE/CIC ICCC 2026 Workshops) study a Wi-Fi 8-style downlink MU-MIMO cell that also serves batteryless devices by *overlaying* a low-rate message on the ordinary Wi-Fi transmission. The overlay follows the "Glaze" idea (Kapetanovic et al., 2019): passive bits are Manchester-encoded into two amplitude states of the host waveform — full amplitude for a 1, an attenuation of Δ dB for a 0 — so a coherent Wi-Fi receiver still decodes the packet while an envelope-detecting, energy-harvesting tag reads the amplitude pattern. The overlay is only feasible when the passive preamble plus payload (K_c bits at rate R_b) fits inside the data portion of the host PPDU, which ties it to the MCS in use.

The paper's question is how often the AP should re-sound the channel (NDPA / NDP / beamforming-report cycle) when such an overlay is present. Sounding costs airtime (T_d ≈ 8 ms per cycle in the model), but stale CSI degrades zero-forcing precoding: the channel is modelled as a first-order Gauss–Markov process with correlation ρ = J₀(2π f_D T_s), so inter-user interference grows with the post-sounding interval T_p. The overlay adds a third term — passive throughput rises with more host packets per cycle, but the amplitude attenuation eats into Wi-Fi link margin and PER. Rather than derive a closed form, the authors run a data-driven search (Algorithm 1) over candidate T_p values across channel realisations, computing cycle-average throughput that includes sounding overhead, precoding mismatch from CSI aging, PER per MCS, and passive-embedding feasibility.

Simulations (4 AP antennas, 2-antenna / 2-stream users, 20 MHz with 242 tones, TGax Model-D fading, 0.089 m/s mobility, 1000-byte MPDUs, ~180 ms cycle of 150 packets, MCS 0–9) show two regimes. For MCS 0–3 the system is overhead-limited and the optimum T_p sits at the 180 ms upper bound; for MCS 4–9 it becomes aging-limited and the optimum shortens quickly. Adding the passive overlay reshapes the trade-off rather than adding a constant: at MCS 4 the optimum moves from 59 ms (baseline) to 53 ms (passive-enabled), the integrated link peaks near 90 Mbps of which ~10 Mbps is passive contribution, and instantaneous throughput decays to ~18 Mbps by 150 ms once precoding is outdated. The optimum estimated from 30 training realisations differs from the 20-realisation validation optimum by only 1 ms, so the empirical profile is smooth enough to drive interval selection. The stated conclusion is that fixed-period sounding is insufficient for passive-enabled MU-MIMO WLANs and the interval should adapt to MCS and overlay configuration; depending on those, "the additional passive throughput may or may not compensate for the associated Wi-Fi reliability loss."

## Summary (ZH)
Zhang 等人（香港城市大学 / 城大东莞、重庆大学，以及华为技术的甘鸣；已被 IEEE/CIC ICCC 2026 研讨会接收）研究一种 Wi-Fi 8 风格的下行 MU-MIMO 小区，它在正常 Wi-Fi 传输之上"叠加"一条低速率消息以同时服务无电池设备。叠加方式沿用 "Glaze" 思路（Kapetanovic 等，2019）：无源比特经曼彻斯特编码映射为宿主波形的两种幅度状态——比特 1 为全幅度、比特 0 衰减 Δ dB——相干 Wi-Fi 接收机仍可解码分组，而包络检波的能量采集标签读取幅度模式。叠加只有在无源前导加载荷（K_c 比特、速率 R_b）能放进宿主 PPDU 数据段时才可行，因此与所用 MCS 绑定。

论文的问题是：存在这种叠加时，AP 应多久重新探测一次信道（NDPA / NDP / 波束成形反馈周期）。探测消耗空口时间（模型中每周期 T_d ≈ 8 ms），但过时的 CSI 会劣化迫零预编码：信道建模为一阶高斯–马尔可夫过程，相关系数 ρ = J₀(2π f_D T_s)，用户间干扰随探测后间隔 T_p 增长。叠加又引入第三项——每周期宿主分组越多，无源吞吐越高，但幅度衰减侵蚀 Wi-Fi 链路余量并抬高 PER。作者不推导闭式解，而是运行数据驱动搜索（算法 1），在多个信道实现上遍历候选 T_p，计算包含探测开销、CSI 老化导致的预编码失配、各 MCS 的 PER 与无源嵌入可行性的周期平均吞吐。

仿真（AP 4 天线、用户 2 天线/2 流、20 MHz 242 子载波、TGax Model-D 衰落、0.089 m/s 移动、1000 字节 MPDU、约 180 ms 周期含 150 个分组、MCS 0–9）呈现两种状态。MCS 0–3 时系统受开销限制，最优 T_p 位于 180 ms 上界；MCS 4–9 时转为受老化限制，最优值迅速缩短。加入无源叠加改变的是权衡的形态而非简单加一个常量：MCS 4 时最优点从 59 ms（基线）移至 53 ms（含无源），综合链路峰值约 90 Mbps、其中约 10 Mbps 为无源贡献，预编码过时后瞬时吞吐在 150 ms 时衰减至约 18 Mbps。由 30 个训练实现估计的最优值与 20 个验证实现的最优值仅差 1 ms，说明经验曲线足够平滑、可用于间隔选择。结论是固定周期探测不足以支撑含无源设备的 MU-MIMO WLAN，间隔应随 MCS 与叠加配置自适应；视配置而定，"额外的无源吞吐可能补偿、也可能无法补偿相应的 Wi-Fi 可靠性损失"。

## Key technical points (EN)
- Setting: Wi-Fi 8-inspired DL MU-MIMO with periodic NDPA/NDP/BFR sounding plus a Glaze-style amplitude overlay for batteryless envelope-detecting receivers.
- Overlay: Manchester-coded passive bits, a(b;Δ) = 10^(−Δ/20) for 0 and 1 for 1; feasibility T_pre^P + K_c/R_b ≤ T_data(MCS).
- CSI aging: H[n] = ρ·H[n−1] + √(1−|ρ|²)·E[n], ρ = J₀(2π f_D T_s), f_D = v·f_c/c; zero-forcing precoding on aged CSI.
- Objective: cycle-average throughput = f(sounding overhead T_d, post-sounding interval T_p, MCS/PER, passive throughput, reliability loss); solved by data-driven search over T_p across channel realisations.
- Simulation: 4 Tx antennas, 2-Rx/2-stream users, 20 MHz (242 tones), TGax Model D, 0.089 m/s, T_d ≈ 8 ms, cycle ≈ 180 ms (150 packets), MPDU 1000 B, MCS 0–9.
- Regimes: MCS 0–3 overhead-limited (optimal T_p at 180 ms bound); MCS 4–9 aging-limited (optimal T_p shrinks with MCS).
- Passive overlay shifts MCS-4 optimum from 59 ms to 53 ms; integrated ~90 Mbps incl. ~10 Mbps passive; instantaneous throughput falls to ~18 Mbps at 150 ms with outdated precoding.
- Data-driven robustness: 30-realisation training optimum within 1 ms of the 20-realisation validation optimum.
- Conclusion: fixed-period sounding is insufficient once passive overlay is enabled; MCS-adaptive sounding recommended.

## Key technical points (ZH)
- 场景：Wi-Fi 8 风格 DL MU-MIMO，周期性 NDPA/NDP/BFR 探测，叠加面向无电池包络检波接收机的 Glaze 式幅度调制。
- 叠加：曼彻斯特编码无源比特，a(b;Δ) = 10^(−Δ/20)（比特 0）/ 1（比特 1）；可行性条件 T_pre^P + K_c/R_b ≤ T_data(MCS)。
- CSI 老化：H[n] = ρ·H[n−1] + √(1−|ρ|²)·E[n]，ρ = J₀(2π f_D T_s)，f_D = v·f_c/c；在老化 CSI 上做迫零预编码。
- 目标：周期平均吞吐 = f(探测开销 T_d、探测后间隔 T_p、MCS/PER、无源吞吐、可靠性损失)；在多信道实现上对 T_p 做数据驱动搜索。
- 仿真：4 发射天线、用户 2 收/2 流、20 MHz（242 子载波）、TGax Model D、0.089 m/s、T_d ≈ 8 ms、周期 ≈ 180 ms（150 分组）、MPDU 1000 B、MCS 0–9。
- 两种状态：MCS 0–3 受开销限制（最优 T_p 在 180 ms 上界）；MCS 4–9 受老化限制（最优 T_p 随 MCS 缩短）。
- 无源叠加使 MCS 4 最优点由 59 ms 移至 53 ms；综合约 90 Mbps 含约 10 Mbps 无源；预编码过时后 150 ms 时瞬时吞吐降至约 18 Mbps。
- 数据驱动稳健性：30 个训练实现的最优值与 20 个验证实现最优值相差仅 1 ms。
- 结论：启用无源叠加后固定周期探测不再充分，建议 MCS 自适应探测。

## Why it matters / what's new (EN)
The amp-iot bin has so far followed the 802.11bp standards stream (AMP PDT waves in the Mentor digests, 2026-05-03_ieee-11bp-amp-ul-channel-access) and radio-architecture work such as the parameterised hybrid ambient-IoT radio (2026-05-19_arxiv-janus-hybrid-ambient-iot-radio); the wifi8-uhr bin holds the UHR mechanism reviews and MU-MIMO/UORA studies. This paper is the first entry to couple the two: it asks what happens to a Wi-Fi 8 MU-MIMO sounding schedule when the same downlink PPDUs double as a batteryless data channel, and shows the answer is not additive — the overlay moves the optimal sounding interval and can either pay for or fail to pay for the reliability it costs, depending on MCS. The presence of a Huawei 802.11bp/bn contributor among the authors, the TGax-based simulation proxy, and the explicit MCS-adaptive-sounding recommendation make it a useful pointer for how AP-side scheduling might need to change once AMP-class devices share the cell. It is a 6-page workshop paper with simulation-only evidence and a single mobility value, so the numbers are indicative rather than final.

## Why it matters / what's new (ZH)
amp-iot 分区此前跟踪的是 802.11bp 标准流（Mentor 摘要中的 AMP PDT 浪潮、2026-05-03_ieee-11bp-amp-ul-channel-access）与参数化混合环境 IoT 无线电等射频架构工作（2026-05-19_arxiv-janus-hybrid-ambient-iot-radio）；wifi8-uhr 分区则收录 UHR 机制综述与 MU-MIMO/UORA 研究。本文是首个把两者耦合起来的条目：当同一批下行 PPDU 同时充当无电池数据信道时，Wi-Fi 8 MU-MIMO 的探测调度会如何变化——答案并非简单叠加，叠加会移动最优探测间隔，且视 MCS 而定，可能抵消、也可能抵不上其付出的可靠性代价。作者中包含华为 802.11bp/bn 贡献者、采用 TGax 仿真代理、并明确建议 MCS 自适应探测，使其成为观察"AMP 类设备共享小区后 AP 侧调度需要如何改变"的有用线索。它是一篇 6 页研讨会论文，仅有仿真证据且只用了单一移动速度，数值应视为指示性而非定论。

## Images
![MCS 4: instantaneous and cycle-average throughput versus post-sounding interval T_p | MCS 4：瞬时与周期平均吞吐随探测后间隔 T_p 的变化](https://arxiv.org/html/2607.29288v1/pictures/mcs4.png)
![Data-driven validation: training vs validation channel realisations | 数据驱动验证：训练与验证信道实现对比](https://arxiv.org/html/2607.29288v1/pictures/data_driven.png)
![Maximum average throughput and optimal sounding interval versus MCS | 最大平均吞吐与最优探测间隔随 MCS 的变化](https://arxiv.org/html/2607.29288v1/pictures/mcs.png)
