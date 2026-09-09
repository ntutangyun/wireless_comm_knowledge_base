---
id: 2026-09-09_arxiv-rsma-bistatic-isac-leo-holographic-fas
date_published: 2026-09-07
date_found: 2026-09-09
type: academic-paper
technology: satellite
title_en: "RSMA-Enabled Bistatic ISAC in LEO Networks with Holographic Apertures and Fluid-Antenna Users: Bistatic Sensing Gives 17.7-25.7 dB SNR Advantage Over Monostatic LEO Reference"
title_zh: "面向 LEO 网络的 RSMA 双基地 ISAC：全息孔径与流体天线用户——双基地感知相较单基地 LEO 基准获得 17.7-25.7 dB 信噪比增益"
url: "https://arxiv.org/abs/2609.08006"
source_quality: full
topics: [ISAC, rate-splitting-multiple-access, reconfigurable-holographic-surface, fluid-antenna-system, bistatic-sensing, LEO-satellite-PHY, ergodic-performance-analysis]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)
Khan, Sheemar and Chatzinotas (Interdisciplinary Centre for Security, Reliability and Trust, University of Luxembourg) and Adil (University of Rome Tor Vergata) develop a closed-form ergodic performance framework for a low-Earth-orbit (LEO) satellite that simultaneously communicates with fluid-antenna-system (FAS) users via rate-splitting multiple access (RSMA) and performs bistatic integrated sensing and communication (ISAC), radiated through a single amplitude-constrained reconfigurable holographic surface (RHS) rather than a fully active phased array. The paper's core technical contribution is treating the RHS's shared, amplitude-constrained excitation manifold honestly rather than substituting an idealized array-gain factor: one real-valued holographic amplitude state realizes both the RSMA common beam and stream-specific zero-forcing private beams simultaneously, so the resulting self-gain, cross-user leakage, and target-direction gain are all coupled and retained explicitly rather than assumed orthogonal. On the receive side, FAS users select their best-of-P port, and the analysis explicitly preserves the statistical coupling this induces between the private-stream numerator and the common-stream denominator at the same selected port (since RSMA's two successive-interference-cancellation stages must decode at one physical port). For sensing, the common RSMA stream illuminates a target that is picked up bistatically by the nearest of several spatially distributed terrestrial sensing-only base stations rather than looped back to the satellite, replacing one LEO-scale propagation leg with a much shorter terrestrial hop. Monte Carlo simulation validates the derived rate and sensing-SNR bounds and quantifies several tradeoffs: FAS port-selection gains over fixed-port reception shrink sharply as the propagation environment becomes more line-of-sight-dominated (3.47% at 0 dB Rician K-factor down to 0.34% at 20 dB); the RSMA power split between common (illumination) and private streams trades communication rate against sensing SNR directly, with sensing SNR rising from about -2.38 dB to 11.54 dB as the common-stream power share grows; a scalar RHS "efficiency factor" model materially misrepresents realized gain versus the full amplitude-constrained model, especially at small apertures (the shared-state realization falls to −24.54 dB at 1024 elements, against 7.18 dB for that same realization at 16,384 elements, where an unconstrained complex-weight reference reaches 14.28 dB and the scalar-efficiency proxy 8.26 dB); and the bistatic sensing architecture's SNR advantage over a favorable monostatic LEO reference grows from 17.7 dB at 400 km altitude to 25.7 dB at 1000 km altitude (20.5 dB at 550 km, for a 16384-element RHS), because the monostatic echo pays the LEO-scale path loss twice while the bistatic return traverses only a terrestrial hop.

## Summary (ZH)
Khan、Sheemar 与 Chatzinotas（卢森堡大学跨学科安全、可靠性与信任中心）及 Adil（罗马第二大学）针对低地球轨道（LEO）卫星，构建了一个闭式解析的遍历性能框架：卫星通过一个受幅度约束的可重构全息表面（RHS，而非全有源相控阵）同时辐射信号，既借助速率分裂多址（RSMA）向流体天线系统（FAS）用户提供通信服务，又执行双基地综合感知与通信（ISAC）。论文的核心技术贡献在于如实处理 RHS 共享的、受幅度约束的激励流形，而非用理想化的阵列增益因子替代：单一实值全息幅度状态同时实现 RSMA 的公共波束与逐流的迫零私有波束，因此所得到的自身增益、跨用户泄漏与目标方向增益均相互耦合，论文将其显式保留而非假设彼此正交。在接收端，FAS 用户在 P 个候选端口中选择最优端口，分析显式保留了这一选择在同一被选端口上于私有流分子与公共流分母之间引入的统计耦合（因为 RSMA 的两级串行干扰消除必须在同一物理端口上完成解码）。在感知方面，RSMA 公共流用于照射目标，目标回波由多个分布式地面纯感知基站中距离最近的一个以双基地方式接收，而非返回卫星，从而以一段短得多的地面跳段替代了一段 LEO 尺度的传播路径。蒙特卡洛仿真验证了推导出的速率与感知信噪比界，并量化了若干权衡关系：随着传播环境趋向以视距为主，FAS 端口选择相对固定端口接收的增益迅速缩小（莱斯 K 因子为 0 dB 时为 3.47%，20 dB 时降至 0.34%）；RSMA 在公共（照射）流与私有流之间的功率分配直接在通信速率与感知信噪比之间进行权衡，随着公共流功率占比增大，感知信噪比从约 -2.38 dB 升至 11.54 dB；标量式 RHS"效率因子"模型相较完整的幅度约束模型会显著误判实际增益，在小孔径下尤为明显（共享态实现方案在 1024 个单元时降至 −24.54 dB，而同一方案在 16,384 个单元时为 7.18 dB；在该孔径下，无约束复权重参考方案达 14.28 dB，标量效率近似模型为 8.26 dB）；双基地感知架构相较一个有利的单基地 LEO 基准的信噪比优势，随轨道高度从 400 公里的 17.7 dB 增长至 1000 公里的 25.7 dB（在 550 公里、16384 个 RHS 单元配置下为 20.5 dB），原因是单基地回波要承受两次 LEO 尺度的路径损耗，而双基地回波仅经过一段地面跳段。

## Key technical points (EN)
- **Architecture:** LEO satellite with a single shared amplitude-constrained multi-feed reconfigurable holographic surface (RHS), not a fully active phased array; realizes RSMA common + private beams and the sensing-illumination beam through one holographic amplitude state, with stream separation performed in the feed domain.
- **RSMA model:** deterministic angle- and ephemeris-based common/zero-forcing-private reference beams; conservative ergodic rate lower bounds derived from Rician log moments without assuming desired/interference independence.
- **FAS reception:** best-of-P port selection at the user; analysis preserves the statistical coupling between numerator (desired signal) and denominator (interference/common-stream) statistics induced by selecting one physical port for both SIC stages.
- **Sensing architecture:** bistatic -- common stream illuminates the target, echo collected by the nearest of several spatially distributed terrestrial sensing-only base stations (not looped back to the satellite); closed-form average bistatic sensing SNR under nearest-receiver association and a finite guard distance.
- **FAS gain vs. propagation regime:** P=16 port-selection gain over fixed-port falls from ~3.47% (kappa_c = 0 dB, rich scattering) to 1.07% (10 dB) to 0.34% (20 dB, near-LoS) -- FAS is most useful when meaningful local scattering exists.
- **Communication-sensing power tradeoff:** at target-steering factor tau=0.3, raising common-power split beta from 0.05 to 0.75 raises mean sensing SNR from -2.38 dB to 11.54 dB; at beta=0.35, raising tau from 0.1 to 0.5 raises sensing SNR from 3.33 dB to 11.26 dB.
- **RHS hardware realism:** scalar-efficiency RHS models miss direction-dependent effects; the shared-state realization falls to −24.54 dB at 1024 elements, against 7.18 dB for that same realization at 16,384 elements, where an unconstrained complex-weight reference reaches 14.28 dB and the scalar-efficiency proxy 8.26 dB, because the fixed feed basis and shared recording pattern couple poorly to a small aperture.
- **Bistatic vs. monostatic advantage:** for N_RHS=16384, mean sensing SNR at 550 km altitude is ~7.18 dB (bistatic) vs. ~-13.32 dB (monostatic favorable reference), a 20.5 dB gap; gap widens from 17.7 dB at 400 km to 25.7 dB at 1000 km as monostatic two-way LEO path loss grows while the bistatic terrestrial hop stays short.

## Key technical points (ZH)
- **架构：** LEO 卫星使用单个共享的、受幅度约束的多馈电可重构全息表面（RHS），而非全有源相控阵；通过一个全息幅度状态同时实现 RSMA 公共波束、私有波束与感知照射波束，流分离在馈电域完成。
- **RSMA 模型：** 基于确定性角度与星历信息的公共/迫零私有参考波束；从莱斯对数矩推导出保守的遍历速率下界，且不假设期望信号与干扰相互独立。
- **FAS 接收：** 用户在 P 个候选端口中选择最优端口；分析保留了在同一物理端口上完成两级 SIC 解码所引入的分子（期望信号）与分母（干扰/公共流）统计量之间的耦合。
- **感知架构：** 双基地方式——公共流照射目标，回波由多个分布式地面纯感知基站中最近的一个接收（而非返回卫星）；在最近接收机关联与有限保护距离条件下推导出闭式平均双基地感知信噪比。
- **FAS 增益与传播环境的关系：** P=16 时端口选择相较固定端口的增益，从莱斯 K 因子 0 dB（散射丰富）时的约 3.47% 降至 10 dB 时的 1.07%，再降至 20 dB（近视距）时的 0.34%——FAS 在存在明显本地散射时最为有效。
- **通信-感知功率权衡：** 在目标转向因子 τ=0.3 时，将公共功率占比 β 从 0.05 提高到 0.75，平均感知信噪比从 -2.38 dB 升至 11.54 dB；在 β=0.35 时，将 τ 从 0.1 提高到 0.5，感知信噪比从 3.33 dB 升至 11.26 dB。
- **RHS 硬件真实性：** 标量效率模型会忽略方向相关效应；共享态实现方案在 1024 个单元时降至 −24.54 dB，而同一方案在 16,384 个单元时为 7.18 dB；在该孔径下，无约束复权重参考方案达 14.28 dB，标量效率近似模型为 8.26 dB。原因是固定馈电基底与共享记录图样与小孔径的耦合较差。
- **双基地相较单基地的优势：** 在 N_RHS=16384 时，550 公里轨道高度下平均感知信噪比约为 7.18 dB（双基地）对比约 -13.32 dB（有利的单基地基准），差距为 20.5 dB；随轨道高度从 400 公里的 17.7 dB 增至 1000 公里的 25.7 dB，原因是单基地方案的双程 LEO 路径损耗随高度增长，而双基地方案的地面跳段始终较短。

## Why it matters / what's new (EN)
The leo-constellations bin has prior entries on ISAC, beam-hopping, and infrastructure sharing, but this is the first entry combining reconfigurable holographic surfaces and fluid-antenna-system reception in a satellite context, and the first entry to model RHS amplitude-constrained hardware realism (rather than an idealized array-gain substitution) jointly with RSMA's common/private stream coupling and FAS port-selection statistics in one closed-form analysis. The quantified result that the fully modelled shared-state RHS collapses to −24.54 dB at a modest 1024-element aperture — a collapse a scalar efficiency factor cannot express at all — is a concrete caution against reusing idealized-array analysis techniques when holographic-metasurface apertures are the actual radiating hardware being proposed for large-aperture, low-power-per-element LEO ISAC.

## Why it matters / what's new (ZH)
leo-constellations 分箱此前已收录关于 ISAC、波束跳变与基础设施共享的条目，但本条目是首个在卫星场景下将可重构全息表面与流体天线系统接收结合起来的条目，也是首个在同一闭式分析中，将 RHS 受幅度约束的硬件真实性建模（而非用理想化阵列增益因子替代）与 RSMA 公共/私有流耦合及 FAS 端口选择统计特性联合处理的条目。完整建模的共享态 RHS 在仅 1024 个单元的孔径下骤降至 −24.54 dB——这种坍缩是标量效率因子根本无法表达的——这一量化结果是对沿用理想阵列分析的具体警示：在大孔径、低单元功耗的 LEO ISAC 场景中，当实际辐射硬件是全息超表面时尤其如此。

## Images

None.
