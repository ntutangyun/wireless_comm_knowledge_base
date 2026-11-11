---
id: 2026-11-11_arxiv-d2d-satellite-5g-imt-cross-border-interference-saudi-wrc27
date_published: 2026-11-09
date_found: 2026-11-11
type: academic-paper
technology: satellite
title_en: "Coexistence of Direct-to-Device (D2D) Satellite Systems with 5G/6G Terrestrial Networks: Cross-Border Aggregate Interference Analysis in Saudi Arabia"
title_zh: "直连终端（D2D）卫星系统与 5G/6G 地面网络的共存：沙特阿拉伯跨境聚合干扰分析"
url: "https://arxiv.org/abs/2611.12644"
source_quality: full
topics: [direct-to-device, DC-MSS-IMT, WRC-27-agenda-item-1.13, cross-border-interference, aggregate-interference, 698-960-MHz, ITU-R, phased-array-antenna, spectrum-sharing]
topic_primary: ngso-regulation
topics_secondary: [sat-direct-device]
novelty_score: 3
---

## Summary (EN)

AlZubi, Alrabeiah, Aldubaikhy, Alqasir, Alsifaee and Alouini (KAUST, Saudi Arabia's Communications, Space and Technology Commission and Qassim University; sponsored by the Commission's Spectrum Advisory Group) assess aggregate downlink interference from two hypothetical direct-to-device satellite systems operating in Jordan and Iraq into terrestrial IMT user equipment in Saudi Arabia, in the 698-960 MHz band. The work extends a study submitted to ITU-R Working Party 4C and relates to WRC-27 Agenda Item 1.13.

Rather than a few test points at an idealised tri-border, the victim UEs are distributed along the real national borders in strips 0-40 km deep. Against the I/N protection criterion of -6 dB, the criterion is exceeded up to 88% of the time (System 3) and up to 18% (System 2), requiring up to 27 dB of additional isolation, so the authors conclude coexistence is infeasible without mitigation.

## Summary (ZH)

AlZubi、Alrabeiah、Aldubaikhy、Alqasir、Alsifaee 与 Alouini（沙特 KAUST、沙特通信、空间与技术委员会及 Qassim 大学；研究由该委员会的频谱咨询组资助）评估了分别在约旦和伊拉克提供服务的两个假想直连终端（D2D）卫星系统，在 698-960 MHz 频段对沙特境内地面 IMT 用户终端产生的聚合下行干扰。该工作扩展了向 ITU-R 4C 工作组提交的一项研究，并与 WRC-27 议题 1.13 相关。

研究不再只用理想化三国交界处的少数测试点，而是将受害终端沿真实国界分布在纵深 0-40 km 的条带中。以 -6 dB 的 I/N 保护准则衡量，System 3 最多有 88% 的时间超标，System 2 最多 18%，需要最多 27 dB 的额外隔离，作者据此认为不采取缓解措施则无法共存。

## Key technical points (EN)

- Systems: System 2 is a LEO constellation at 500 km altitude with a 35 degree minimum elevation angle, serving Jordan; System 3 is at 525 km with a 20 degree minimum elevation angle, serving Iraq. The simulation integrates SGP4 orbital propagation, antenna and propagation models and a Monte Carlo engine, following ITU-R compatibility-study practice.
- Satellite selection: the highest-elevation strategy confines harmful interference mainly to satellites serving border-proximate cells; random selection yields higher interference because low-elevation beams from distant cells place victims closer to boresight.
- Aggregation: the intra-system aggregation factor reaches about 8.5 dB while the inter-system factor stays below 3 dB, so several satellites of one dominant system drive the aggregate.
- Mitigation: a border isolation zone of one cell diameter gives only a moderate improvement under both strategies; a narrow-beam, deep-null phased-array pattern for System 3 lowers the exceedance to about 40% regardless of strategy, but neither alone reaches full compliance.
- Scope: future work covers IMT base stations as victims, realistic operating assumptions (partial load, power control), other IMT bands, and clutter/terrain propagation; the authors separately note that the two mitigations should be combined.

## Key technical points (ZH)

- 系统：System 2 为轨道高度 500 km、最小仰角 35 度的 LEO 星座，服务约旦；System 3 轨道高度 525 km、最小仰角 20 度，服务伊拉克。仿真整合 SGP4 轨道传播、天线与传播模型和蒙特卡洛引擎，遵循 ITU-R 兼容性研究的做法。
- 卫星选择：最高仰角策略把有害干扰主要限制在为靠近边境小区服务的卫星；随机选择则因远处小区的低仰角波束使受害终端更接近波束轴向而干扰更高。
- 聚合：系统内聚合因子可达约 8.5 dB，系统间因子低于 3 dB，说明主导干扰的是同一主导系统的多颗卫星。
- 缓解：相当于一个小区直径的边境隔离带在两种策略下改善有限；为 System 3 采用窄波束深零陷相控阵方向图可把超标比例降至约 40%，且与选星策略基本无关，但二者单独使用均无法完全达标。
- 范围：后续工作包括以 IMT 基站为受害对象、更贴近实际的运行假设（部分负载、功率控制）、其他 IMT 频段以及考虑杂波与地形的传播模型；作者另指出两种缓解措施应组合使用。

## Why it matters / what's new (EN)

D2D service from LEO satellites in terrestrial IMT spectrum is being studied for WRC-27, and the authors note that prior studies used one or a few tri-border test points, which may not represent the worst case along the whole border. This paper contributes a border-distributed victim model for the 698-960 MHz band with explicit mitigation comparisons, framed as input to spectrum regulatory work. It is a simulation study of hypothetical systems, with no measurements, and the exceedance figures depend on the assumed EIRP density and antenna patterns.

## Why it matters / what's new (ZH)

在地面 IMT 频谱内由 LEO 卫星提供 D2D 服务的问题正在为 WRC-27 开展研究，作者指出既有研究只在三国交界处使用一个或少数测试点，可能无法代表整条边境上的最坏情况。本文提出沿边境分布受害终端的 698-960 MHz 频段模型，并明确比较缓解措施，作为频谱监管工作的输入。这是针对假想系统的仿真研究，没有实测数据，超标比例取决于所假设的 EIRP 谱密度与天线方向图。

## Images

None.
