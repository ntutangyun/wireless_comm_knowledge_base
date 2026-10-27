---
id: 2026-10-27_arxiv-tdd-aligned-drain-voltage-modulation-base-station-pa
date_published: 2026-10-23
date_found: 2026-10-27
type: academic-paper
technology: cellular
title_en: "Reducing 6G Energy Consumption: TDD-Aligned Drain Voltage Modulation for Power Amplifiers"
title_zh: "降低 6G 能耗：与 TDD 周期对齐的功率放大器漏极电压调制"
url: "https://arxiv.org/abs/2610.32889"
source_quality: full
topics: [base-station-energy, power-amplifier, drain-voltage-modulation, TDD, POLITE, link-adaptation, Bayesian-optimization, 3GPP-UMa]
topic_primary: 5g-nr
topics_secondary: [6g-vision]
novelty_score: 3
---

## Summary (EN)
Meizhen Zhuo, Gunter Wolff, Stephan ten Brink and Silvio Mandelli (Nokia Bell Labs, Nokia Technology Center and the University of Stuttgart) address power-amplifier (PA) energy use at a base station operating at partial load. A PA run at a fixed drain voltage wastes supply headroom when its output is backed off. Envelope tracking recovers this by following the instantaneous signal envelope, at the cost of a fast, wideband supply path and linearisation; average power tracking follows the average transmit power and needs only a slow supply path, but in both cases the supply is driven by the transmitted signal itself. The paper proposes TDD-Aligned Drain Voltage Modulation (TDD-DVM): the drain voltage level is chosen once per TDD period from the downlink resource load and ramped during the uplink window, when no downlink signal is present, so a slow and cheap supply path suffices.

The scheme builds on the authors' earlier POLITE link adaptation, which spreads a transmission over more resources at lower per-resource power when the cell is not full, moving the PA into a region where a lower drain voltage is enough. Two thresholds on a load metric (required resources over resources available per TDD period) drive a one-step up/down hysteresis rule; they are tuned per traffic scenario with Bayesian optimisation under a constraint that the packet failure ratio is no worse than at full drain voltage.

Evaluation is a 3GPP 3D Urban Macro system-level simulation (21 cells, 500 m inter-site distance, 3.5 GHz, 20 MHz, 30 kHz subcarrier spacing, 8 transmit antennas, FTP3 traffic) with a PA model built from measured efficiency at two drain-voltage levels (80% and 100%). At equal delivered throughput, TDD-DVM with POLITE keeps the packet failure ratio of the full drain voltage while consuming up to 35% less power than full drain voltage under conventional link adaptation and up to 7% less than under POLITE. Per-slot modulation and a genie-aided per-period bound save about 9%, so TDD-DVM obtains roughly half of the idealised gain at the highest load and most of it at moderate loads.

## Summary (ZH)
Meizhen Zhuo、Gunter Wolff、Stephan ten Brink 与 Silvio Mandelli（诺基亚贝尔实验室、诺基亚技术中心、斯图加特大学）研究基站在部分负载下的功率放大器（PA）能耗。PA 在固定漏极电压下回退工作时会浪费供电裕量；包络跟踪通过跟随瞬时信号包络挽回这部分损失，但需要快速宽带供电通路和线性化；平均功率跟踪跟随平均发射功率，只需慢速供电通路，但两者的供电调制都由发射信号本身驱动。论文提出与 TDD 对齐的漏极电压调制（TDD-DVM）：根据下行资源负载，每个 TDD 周期选择一次漏极电压档位，并在没有下行信号的上行窗口内完成爬升或下降，因此只需缓慢、廉价的供电通路。

该方案建立在作者此前的 POLITE 链路自适应之上：当小区未满载时，POLITE 把一次传输摊到更多资源上、以更低的单资源功率发送，使 PA 进入较低漏极电压即可满足的区间。以负载指标（所需资源与每个 TDD 周期可用资源之比）上的两个门限驱动逐级升降的滞回规则；门限针对各流量场景用贝叶斯优化整定，约束条件是丢包比不劣于全漏极电压。

评估采用 3GPP 3D 城区宏小区系统级仿真（21 个小区、站间距 500 m、3.5 GHz、20 MHz、30 kHz 子载波间隔、8 发射天线、FTP3 流量），PA 模型基于两个漏极电压档位（80% 与 100%）的实测效率。在相同送达吞吐量下，配合 POLITE 的 TDD-DVM 保持全漏极电压的丢包比，同时相对常规链路自适应下的全漏极电压最多省电 35%，相对 POLITE 下的全漏极电压最多省电 7%。逐时隙调制与“先知”按周期上界约省电 9%，因此 TDD-DVM 在最高负载下获得约一半的理想增益，在中等负载下获得其中的大部分。

## Key technical points (EN)
- Drain voltage is updated once per TDD period and ramped inside the uplink window; the scheme is not autonomous and relies on signalling from the distributed unit to align ramping with TDD periods.
- Load metric: backlog divided by smoothed per-UE spectral efficiency gives required resources, normalised by the downlink resources available per TDD period; two thresholds with hysteresis move the level one step up or down.
- POLITE link adaptation lowers per-resource transmit power at partial load (minimum ratio 0.5), which lets the lower drain-voltage level support the output power more often.
- Thresholds are tuned by Gaussian-process Bayesian optimisation (50 iterations) per traffic scenario and fitted by a regression curve against traffic, with the constraint that the packet failure ratio does not exceed that of full drain voltage.
- Reference schemes: fixed drain voltage (80% or 100%), per-slot drain voltage modulation, and a genie-aided per-period selection used as an upper bound.
- Simulation set-up: TDD pattern of 8 downlink and 2 uplink slots of 0.5 ms, 5 FTP3 users per cell, 0.4 Mbit packets with a 4 s timeout, 64-QAM maximum, 49 dBm maximum transmit power.
- Fixed 80% drain voltage consumes least but cannot serve loads above about 2.8 Mbps per UE in the study.
- The authors state that the evaluation is system-level simulation with a measured two-level PA characteristic; no over-the-air hardware prototype of the scheme is reported.

## Key technical points (ZH)
- 漏极电压每个 TDD 周期更新一次，并在上行窗口内爬升或下降；该方案不能自主运行，需要分布式单元（DU）的信令来使调整与 TDD 周期对齐。
- 负载指标：积压数据除以平滑后的单 UE 频谱效率得到所需资源，再按每个 TDD 周期可用的下行资源归一化；两个带滞回的门限使档位逐级上调或下调。
- POLITE 链路自适应在部分负载下降低单资源发射功率（最小比例 0.5），使较低漏极电压档位更常能支撑输出功率。
- 门限针对各流量场景用高斯过程贝叶斯优化（50 次迭代）整定，并以回归曲线拟合其随流量的变化，约束条件是丢包比不超过全漏极电压情形。
- 对照方案：固定漏极电压（80% 或 100%）、逐时隙漏极电压调制，以及作为上界的“先知”按周期选择。
- 仿真设置：TDD 图样为 8 个下行和 2 个上行时隙（每时隙 0.5 ms），每小区 5 个 FTP3 用户，数据包 0.4 Mbit、超时 4 s，最高 64-QAM，最大发射功率 49 dBm。
- 固定 80% 漏极电压耗电最少，但在该研究中无法承载高于约每 UE 2.8 Mbps 的负载。
- 作者说明评估为系统级仿真，PA 特性来自两档实测；论文未报告该方案的空口硬件原型。

## Why it matters / what's new (EN)
The paper moves PA supply adaptation from the signal timescale to the TDD-period timescale and couples it with a transmit-power-spreading link adaptation, so the energy saving comes from the combination rather than from the supply scheme alone. The reported gains (up to 7% over POLITE at equal throughput, roughly half of the idealised gain at the highest load and most of it at moderate loads) are simulation results on a two-level PA model, and the author-stated cost is the need for DU signalling to align the ramps.

## Why it matters / what's new (ZH)
论文把 PA 供电自适应从信号时间尺度转移到 TDD 周期时间尺度，并与发射功率摊开式链路自适应结合，因此节能来自两者的组合而非单独的供电方案。所报告的增益（相同吞吐量下相对 POLITE 最多 7%，在最高负载下约为理想增益的一半，在中等负载下为其大部分）是基于两档 PA 模型的仿真结果，作者指出的代价是需要 DU 信令来对齐爬升。

## Images

None.
