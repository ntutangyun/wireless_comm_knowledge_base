---
id: 2026-11-23_arxiv-beyond-rsrp-beam-selection-metrics-umi-5g-nr
date_published: 2026-11-17
date_found: 2026-11-23
type: academic-paper
technology: cellular
title_en: "Beyond RSRP: An Exploration of Alternative Metrics for Beam Management in an Urban Micro 5G NR Scenario"
title_zh: "超越 RSRP：城区微小区 5G NR 场景下波束管理替代度量的探索"
url: "https://arxiv.org/abs/2611.23552"
source_quality: full
topics: [beam-management, RSRP, RSRQ, SINR, SLNR, UMi, Sionna, codebook, 5G-NR]
topic_primary: 5g-nr
topics_secondary: [cellular-massive-mimo]
novelty_score: 2
---

## Summary (EN)

Gupta, Cousik, Upadhyaya, Jakubisin, Tripathi and Reed (Virginia Tech) compare RSRP, RSRQ and SINR-based criteria for selecting the SS-block beam in a 3GPP-style Urban Micro multi-cell downlink simulation built in NVIDIA Sionna, together with three UE-to-gNB association strategies, and benchmark them against regularized zero-forcing (RZF) precoding with full CSI. The paper reports that directional RSRQ performs worst, that sequential association beats power-optimal Hungarian assignment, and that the gap to full-CSI precoding is attributed to codebook quantization rather than to the choice of metric.

## Summary (ZH)

Gupta、Cousik、Upadhyaya、Jakubisin、Tripathi 与 Reed（弗吉尼亚理工大学）在基于 NVIDIA Sionna 的 3GPP 风格城区微小区（UMi）多小区下行仿真中，比较了基于 RSRP、RSRQ 和 SINR 的 SS 块波束选择准则以及三种 UE 到 gNB 的关联策略，并以满 CSI 的正则化迫零（RZF）预编码为基准。论文报告：方向性 RSRQ 表现最差，顺序关联优于功率最优的匈牙利分配，与满 CSI 预编码之间的差距被归因于码本量化，而非度量本身。

## Key technical points (EN)

- Scope: the Beam Measurement stage of NR beam management using SS reference signals (not CSI-RS). Beam selection is framed as implicit interference excision within an L1 signal-strength maximization problem.
- Setup: 7 cells with 3 sectors (21 gNBs, 200 m inter-site distance, 10 m gNB height), 105 UEs (5 per sector, 80% indoor), 3.5 GHz, 15 kHz subcarrier spacing, 48 active subcarriers (720 kHz), 44 dBm gNB and 23 dBm UE power, a 4x4 dual-polarized panel (32 ports, 3GPP 38.901 pattern) and a 2-D DFT codebook of 128 beams; results are averaged over 1000 Monte Carlo drops (105,000 UE observations). Interference is scaled by a scheduling probability of 0.30.
- Association strategies: sequential (first 5 UEs to the first gNB and so on), Hungarian maximizing RSRP, and Hungarian maximizing estimated SINR. Beam criteria: RSRP, SLNR (signal to intra-cell leakage plus noise) and directional RSRQ.
- Metric analysis: in a representative single drop, RSRP spans about -115 to -40 dBm while post-equalization SINR spans -20 to +30 dB; a principal component analysis of RSRP, RSSI, RSRQ and SINR shows two components covering about 97.6% of variance, with the first dominated by near-equal loadings, i.e. the metrics are largely co-linear in this symmetric topology.
- Results (mean spectral efficiency): sequential association with RSRP beam 1.23 bps/Hz; Hungarian RSRP 1.10; Hungarian SINR with RSRP beam 1.10; Hungarian SINR with SLNR beam 1.15; Hungarian SINR with directional RSRQ 0.95; RZF full CSI about 1.49 for either association.
- Reading of the results: in a symmetric interference environment beam-resolved interference avoidance selects geometrically poor beams, and preserving sector geometry helps spatial precoding more than maximizing aggregate received power. Non-uniform interference (for example directional jamming or asymmetric loading) and a learned multi-metric criterion are listed as future work.
- Caveats: simulation only on a symmetric hexagonal layout with a static drop model (no UE trajectories); the model uses a 0.30 scheduling-probability interference scaling and a narrow 720 kHz bandwidth.

## Key technical points (ZH)

- 范围：使用 SS 参考信号（而非 CSI-RS）的 NR 波束管理中的波束测量阶段。波束选择被表述为在 L1 信号强度最大化问题中隐式剔除干扰。
- 设置：7 个小区、每小区 3 扇区（共 21 个 gNB，站间距 200 m，gNB 高度 10 m），105 个 UE（每扇区 5 个，80% 位于室内），3.5 GHz，子载波间隔 15 kHz，48 个有效子载波（720 kHz），gNB 与 UE 功率分别为 44 dBm 与 23 dBm，4x4 双极化面板（32 端口，3GPP 38.901 方向图），128 个波束的二维 DFT 码本；结果取自 1000 次蒙特卡洛撒点（105,000 个 UE 观测）。干扰以 0.30 的调度概率缩放。
- 关联策略：顺序关联（前 5 个 UE 分给第一个 gNB，依此类推）、最大化 RSRP 的匈牙利分配、最大化估计 SINR 的匈牙利分配。波束准则：RSRP、SLNR（信号与小区内泄漏加噪声之比）和方向性 RSRQ。
- 度量分析：在一次代表性撒点中，RSRP 范围约为 -115 至 -40 dBm，均衡后 SINR 范围为 -20 至 +30 dB；对 RSRP、RSSI、RSRQ、SINR 做主成分分析，两个主成分约解释 97.6% 的方差，第一主成分各度量载荷近乎相等，即在该对称拓扑中这些度量高度共线。
- 结果（平均频谱效率）：顺序关联加 RSRP 波束 1.23 bps/Hz；匈牙利 RSRP 1.10；匈牙利 SINR 加 RSRP 波束 1.10；匈牙利 SINR 加 SLNR 波束 1.15；匈牙利 SINR 加方向性 RSRQ 0.95；满 CSI 的 RZF 在两种关联下均约为 1.49。
- 对结果的解读：在对称干扰环境中，按波束分辨的干扰规避会选出几何位置较差的波束，保持扇区几何对空间预编码的帮助大于最大化总接收功率。非均匀干扰（如定向干扰或不对称负载）以及学习得到的多度量准则被列为未来工作。
- 注意事项：仅为对称六边形布局和静态撒点模型的仿真（无 UE 轨迹）；模型采用 0.30 的调度概率干扰缩放和仅 720 kHz 的窄带宽。

## Why it matters / what's new (EN)

The distinguishing element is a side-by-side comparison of standard NR measurement quantities as beam-selection criteria against a full-CSI RZF ceiling, which isolates codebook quantization as the main remaining gap in this setup. It is a small-scale simulation in a symmetric topology, so conclusions about metric ranking may not carry over to asymmetric or mobile deployments.

## Why it matters / what's new (ZH)

其区别点在于：把标准 NR 测量量作为波束选择准则并排比较，并与满 CSI 的 RZF 上界对照，从而在该设置中指出码本量化是剩余差距的主要来源。这是对称拓扑下的小规模仿真，因此关于度量排序的结论未必适用于非对称或移动场景。

## Images

None.
