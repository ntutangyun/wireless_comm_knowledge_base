---
id: 2026-10-26_arxiv-uplink-access-schemes-ambient-iot-nb-iot-hybrid-scheduling-request
date_published: 2026-10-22
date_found: 2026-10-26
type: academic-paper
technology: cellular
title_en: "System-Level Evaluation of Uplink Access Schemes for Ambient IoT"
title_zh: "环境物联网上行接入方案的系统级评估"
url: "https://arxiv.org/abs/2610.30856"
source_quality: full
topics: [Ambient-IoT, A-IoT, NB-IoT, energy-harvesting, uplink-access, random-access, scheduling-request, fast-uplink-grant, ns-3, LENA-NB, Release-20]
topic_primary: redcap-iot
topics_secondary: [4g-lte]
novelty_score: 3
---

## Summary (EN)
Douglas Dziedzorm Agbeve, Henrique Duarte Moura, Andrey Belogaev and Jeroen Famaey (IDLab, University of Antwerp - imec) evaluate uplink access for 3GPP Ambient IoT (A-IoT), the class of cellular IoT devices aimed at battery-less operation through ambient energy harvesting. Release 19 specifies an air interface for passive backscatter devices; Release 20 extends the framework to active device types 2b and C, whose air interface the authors say is still unspecified. They therefore use NB-IoT as an implementable reference.

The paper extends the LENA-NB ns-3 module with solar energy harvesting, supercapacitor storage and a hysteretic brown-out mechanism, and proposes Hybrid Scheduling Request (HSR), which combines reserved request occasions with opportunistic contention on non-reserved NPRACH sub-carriers. It compares random access with early data transmission (RA), scheduling request (SR), HSR and an idealized Fast Uplink Grant (FUG) used as a performance bound. The authors describe it as the first system-level comparison of RA, SR and HSR under identical harvesting, traffic and propagation conditions.

In the simulations (1 to 200 UEs, 1 F supercapacitor, peak harvested power 1, 1.5 or 2 mW), HSR reduces mean packet delay by up to 69% and SR reduces energy per delivered bit by up to 24%, both relative to RA. At 200 UEs HSR's mean uplink delay is 2.4 to 2.7 times lower than SR and RA.

## Summary (ZH)
Douglas Dziedzorm Agbeve、Henrique Duarte Moura、Andrey Belogaev 与 Jeroen Famaey（安特卫普大学 IDLab - imec）评估了 3GPP 环境物联网（A-IoT）的上行接入；A-IoT 是旨在通过环境能量采集实现免电池运行的一类蜂窝物联网设备。Release 19 规定了面向无源反向散射设备的空口；Release 20 将框架扩展到有源设备类型 2b 和 C，作者称其空口目前仍未确定。因此作者以 NB-IoT 作为可实现的参考。

论文扩展了 LENA-NB ns-3 模块，加入太阳能采集、超级电容储能和带迟滞的断电（brown-out）机制，并提出混合调度请求（HSR）：将预留的请求机会与在非预留 NPRACH 子载波上的机会式竞争相结合。作者比较了带提前数据传输的随机接入（RA）、调度请求（SR）、HSR，以及用作性能界限的理想化快速上行授权（FUG）。作者称这是在相同采集、业务和传播条件下对 RA、SR 和 HSR 的首次系统级比较。

在仿真中（1 至 200 个 UE，1 F 超级电容，峰值采集功率 1、1.5 或 2 mW），相对于 RA，HSR 最多使平均数据包时延降低 69%，SR 最多使每比特交付能耗降低 24%。在 200 个 UE 时，HSR 的平均上行时延比 SR 和 RA 低 2.4 至 2.7 倍。

## Key technical points (EN)
- Motivation given by the authors: with sparse, short reports from harvested-energy devices, control-plane signalling can dominate energy use, and the four-step contention-based RA adds per-packet overhead; insufficient harvested energy triggers brown-out that interrupts both communication and application execution.
- Open standardization points cited: for types 2b and C, agreements allow either contention-based access carrying data or a preamble-only request on shared resources, and whether a device may retain its temporary identifier to avoid repeated random access is undecided.
- Schemes: RA with EDT (baseline); SR on reserved NPRACH sub-carriers (round-robin, recurrence grows with the number of UEs); HSR adds energy-aware opportunistic preambles on non-reserved sub-carriers before the reserved occasion; Idealized FUG learns every arrival instantly at no signalling cost.
- Energy model: diurnal sin^2 solar profile, single-branch supercapacitor circuit with series and leakage resistance, brown-out below 2.4 V and recovery at 2.6 V, per-state radio power from Quectel BG96 measurements.
- Setup: 1.25 km cell radius, 49-byte payloads from a two-state Markov source, 80 ms NPRACH period, six of twelve CE-0 sub-carriers reserved for SR/HSR, ten seeds per point.
- Results: HSR mean delay grows from 222 ms (20 UEs) to 595 ms (200 UEs) versus SR 1.43 s and RA 1.60 s at 200 UEs; idealized FUG delay rises from 50 ms to 212 ms; beyond about 180 UEs idealized FUG becomes less energy-efficient than SR.
- The module, scenario and analysis scripts are stated to be public on GitHub; funded by the AMBIENT-6G project (SNS JU, Horizon Europe grant 101192113).

## Key technical points (ZH)
- 作者给出的动机：采集能量设备的上报稀疏而简短，控制面信令可能主导能耗，四步竞争式 RA 带来每包开销；采集能量不足会触发断电，同时中断通信与应用执行。
- 文中提到的尚未确定的标准化点：对类型 2b 和 C，现有共识允许携带数据的竞争式接入或在共享资源上仅发送前导码的请求，设备能否保留临时标识以避免重复随机接入尚未决定。
- 方案：带 EDT 的 RA（基线）；在预留 NPRACH 子载波上的 SR（轮询，复现周期随 UE 数增长）；HSR 在预留机会之前于非预留子载波上增加考虑能量的机会式前导码；理想化 FUG 即时、零信令开销地获知每次到达。
- 能量模型：日变化 sin^2 太阳能曲线、含串联与漏电电阻的单支路超级电容电路、低于 2.4 V 断电并在 2.6 V 恢复、各状态射频功耗取自 Quectel BG96 测量。
- 设置：小区半径 1.25 km，两状态马尔可夫源产生 49 字节负载，NPRACH 周期 80 ms，12 个 CE-0 子载波中 6 个预留给 SR/HSR，每个数据点 10 个随机种子。
- 结果：HSR 平均时延从 222 ms（20 个 UE）增至 595 ms（200 个 UE），而 200 个 UE 时 SR 为 1.43 s、RA 为 1.60 s；理想化 FUG 时延从 50 ms 升至 212 ms；约 180 个 UE 之后理想化 FUG 的能效低于 SR。
- 作者称模块、场景和分析脚本已在 GitHub 公开；工作由 AMBIENT-6G 项目（SNS JU，Horizon Europe 资助号 101192113）资助。

## Why it matters / what's new (EN)
The paper evaluates access and context-retention choices that the authors describe as still open in 3GPP's Release 20 A-IoT work, using deployed NB-IoT as a stand-in because the active-device air interface is unspecified. The results are simulation-based with a single link-adaptation and coverage setting (all UEs in CE-0 with the same MCS), so they indicate trade-offs rather than a final A-IoT design. The authors conclude that the preferred scheme depends on network density, latency requirements and available harvested energy.

## Why it matters / what's new (ZH)
论文评估的接入和上下文保持选择，作者称在 3GPP Release 20 的 A-IoT 工作中仍未定论；由于有源设备空口尚未确定，作者以已部署的 NB-IoT 作为替代。结果基于仿真，且采用单一的链路自适应和覆盖设置（所有 UE 位于 CE-0 且 MCS 相同），因此反映的是权衡关系而非最终的 A-IoT 设计。作者的结论是：较优方案取决于网络密度、时延要求和可用的采集能量。

## Images

None.
