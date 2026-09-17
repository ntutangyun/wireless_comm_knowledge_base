---
id: 2026-09-17_arxiv-doppler-leo-navigation-gdop-geometry
date_published: 2026-09-10
date_found: 2026-09-17
technology: satellite
type: academic-paper
title_en: "Geometric Analysis of Doppler-Based Navigation with Low Earth Orbit Satellites"
title_zh: "基于低地球轨道卫星多普勒导航的几何分析"
url: "https://arxiv.org/abs/2609.11296"
source_quality: full
topics: [Doppler-positioning, GDOP, LEO-navigation, GNSS-alternative]
topic_primary: leo-constellations
topics_secondary: [ngso-regulation]
novelty_score: 3
---

## Summary (EN)

Caravaca Gallego and Gurfil (Technion - Israel Institute of Technology, Faculty of Aerospace Engineering) and Rotstein (Rafael Advanced Defense Systems / Technion Department of Computer Science) submitted this paper on 2026-09-10. The authors' motivation, stated explicitly, is "the increasing vulnerability of Global Navigation Satellite Systems" to RF interference, which has renewed interest in opportunistically using LEO broadband constellations (Starlink, OneWeb, Iridium are named as examples) for Doppler-only navigation — determining all eight navigation states (three position components, receiver clock bias, three velocity components, and clock drift) from carrier Doppler measurements alone, without pseudorange observables.

The paper's contribution is a geometric foundation for characterizing the Geometric Dilution of Precision (GDOP) in this eight-state Doppler problem, which the authors say behaves fundamentally differently from GDOP in conventional pseudorange-based navigation — in particular, they note that "volume-based satellite selection," a heuristic that works well for minimizing pseudorange GDOP, has been empirically found to perform poorly for Doppler GDOP; the paper records that prior empirical work ascribed that failure to velocity diversity but did not supply the analytical form of the Doppler Jacobian's clock-bias column. The authors derive a closed-form geometric parameterization of the Doppler measurement Jacobian in terms of elevation, azimuth, inclination, and altitude ratio, and perform a Schur complement decomposition of the eight-state information matrix to obtain an exact GDOP inflation formula governed by a "collinearity coefficient" that measures how aligned the clock-bias column is with the remaining seven-state subspace.

The paper's central theoretical result is that the same geometric coupling which makes the receiver's clock bias observable from Doppler measurements is exactly the coupling that inflates the GDOP — the two effects cannot be separated by any satellite geometry. The paper shows that satellite altitude diversity can reduce this collinearity, by placing satellites at equal elevation onto distinct sensitivity bands, but in a worked two-shell satellite configuration example, most of the achievable geometric improvement came from flying the whole constellation lower (an altitude-level effect available to any single-altitude LEO constellation), while the additional benefit specifically attributable to using multiple altitude shells was "a small fraction of that total" — i.e., both available design levers (altitude diversity, satellite heading) offer only "modest," "partial relief" from the fundamental sensitivity-decorrelation tradeoff the paper identifies.

## Summary (ZH)

Caravaca Gallego 与 Gurfil（以色列理工学院 Technion 航空航天工程学院）以及 Rotstein（Rafael 先进国防系统公司 / Technion 计算机科学系）于 2026 年 9 月 10 日提交本文。作者明确指出其研究动机是"全球导航卫星系统日益增长的（抗射频干扰）脆弱性"，这重新激发了人们对机会式利用 LEO 宽带星座（论文举例 Starlink、OneWeb、Iridium）进行纯多普勒导航的兴趣——即仅凭载波多普勒测量、无需伪距观测量，即可确定全部八个导航状态（三个位置分量、接收机钟差、三个速度分量以及钟漂）。

本文的贡献在于为这一八状态多普勒问题中的几何精度衰减因子（GDOP）刻画建立几何基础；作者指出，该 GDOP 的行为与传统基于伪距导航中的 GDOP 存在本质差异——特别是，对最小化伪距 GDOP 行之有效的"基于体积的卫星选择"启发式方法，此前已有实证发现在多普勒 GDOP 场景下表现不佳；论文指出，以往实证工作将这一失效归因于速度分集，但未给出多普勒雅可比矩阵中钟差列的解析形式。作者以仰角、方位角、倾角与高度比为变量，推导出多普勒测量雅可比矩阵的闭式几何参数化表示，并对八状态信息矩阵进行 Schur 补分解，得到一个精确的 GDOP 膨胀公式，该公式由一个"共线性系数"决定——该系数衡量钟差分量与其余七状态子空间的对齐程度。

论文的核心理论结果是：使接收机钟差可从多普勒测量中被观测到的那种几何耦合，恰恰就是使 GDOP 膨胀的那种耦合——这两种效应无法通过任何卫星几何构型分离开来。论文证明，卫星高度分集（将处于相同仰角的卫星分布到不同的灵敏度带上）可以降低这种共线性；但在一个双壳层卫星构型算例中，可实现的几何改善大部分来自于将整个星座整体飞得更低（这是任何单一高度的 LEO 星座都可利用的高度层面效应），而专门归因于使用多个高度壳层所带来的额外收益"仅占其中一小部分"——也就是说，论文所指出的这两种可用设计手段（高度分集、卫星飞行朝向）对论文所揭示的"灵敏度—去相关性"根本性权衡而言，都只能提供"有限"、"部分"的缓解。

## Key technical points (EN)

- **Motivation**: GNSS RF-interference vulnerability motivates opportunistic Doppler-only positioning using broadband LEO constellations (Starlink, OneWeb, Iridium cited as examples), which can determine all 8 navigation states (position x3, clock bias, velocity x3, clock drift) from carrier Doppler alone.
- **Problem identified**: Doppler GDOP behaves fundamentally differently from pseudorange GDOP; the volume-based satellite-selection heuristic that works for pseudorange GDOP empirically underperforms for Doppler GDOP, which prior empirical work attributed to velocity diversity without deriving the Jacobian's clock-bias column.
- **Method**: closed-form geometric parameterization of the Doppler Jacobian (elevation, azimuth, inclination, altitude ratio) plus a Schur complement decomposition of the 8-state information matrix, yielding an exact GDOP inflation formula governed by a collinearity coefficient.
- **Core theoretical result**: the geometric coupling that renders clock bias observable via Doppler is provably the same coupling that inflates GDOP — the two cannot be decoupled by satellite geometry alone.
- **Design implication**: altitude diversity (placing same-elevation satellites on distinct sensitivity bands) reduces collinearity, but in the worked two-shell example most of the gain came from flying the constellation lower overall, not from the altitude-diversity effect itself; satellite heading offers a weaker reduction still.
- **Stated conclusion**: both available geometric levers (altitude diversity, heading) provide only modest, partial relief — a single-altitude constellation favorable for Doppler GDOP is inherently strongly collinear because its most GDOP-favorable satellites are also the least separable from the clock-drift direction.

## Key technical points (ZH)

- **研究动机**：GNSS 抗射频干扰脆弱性激发了利用宽带 LEO 星座（论文举例 Starlink、OneWeb、Iridium）进行机会式纯多普勒定位的兴趣，该方法仅凭载波多普勒测量即可确定全部 8 个导航状态（3 个位置分量、钟差、3 个速度分量、钟漂）。
- **发现的问题**：多普勒 GDOP 的行为与伪距 GDOP 存在本质差异；对伪距 GDOP 有效的基于体积的卫星选择启发式方法，实证上在多普勒 GDOP 场景下表现不佳；以往实证工作将其归因于速度分集，但未推导雅可比矩阵的钟差列。
- **方法**：以仰角、方位角、倾角、高度比为参数，推导多普勒雅可比矩阵的闭式几何参数化表示，并对 8 状态信息矩阵进行 Schur 补分解，得到由共线性系数决定的精确 GDOP 膨胀公式。
- **核心理论结果**：使钟差可通过多普勒测量被观测到的几何耦合，被证明恰恰就是使 GDOP 膨胀的那种耦合——二者无法仅通过卫星几何构型解耦。
- **设计启示**：高度分集（将相同仰角的卫星分布到不同灵敏度带）可降低共线性，但在双壳层算例中，大部分改善来自将整个星座整体飞得更低，而非高度分集本身的效应；卫星飞行朝向带来的改善则更为有限。
- **论文结论**：两种可用的几何手段（高度分集、飞行朝向）都只能提供有限、部分的缓解——对多普勒 GDOP 有利的单一高度星座，其内在共线性天然较强，因为其 GDOP 表现最有利的卫星，恰恰也是与钟漂方向最难分离的卫星。

## Why it matters / what's new (EN)

The KB's PNT-integrity/GNSS-alternative thread (Xona Pulsar, TrustPoint/EnduroSat C-band constellation, this run's own Xona-compatibility entry) has so far covered LEO-PNT *systems* — new constellations built to broadcast dedicated navigation signals. This paper instead analyzes the *opportunistic* alternative — extracting navigation from Doppler shifts on existing broadband LEO comms satellites — and supplies a geometric explanation for why a known empirical anomaly (volume-based satellite selection failing for Doppler GDOP) occurs, which the paper positions as complementary to the prior empirical accounts of that anomaly.

## Why it matters / what's new (ZH)

知识库中 PNT 完整性/GNSS 替代方案相关的条目（Xona Pulsar、TrustPoint/EnduroSat C 频段星座，以及本次收录的 Xona 兼容性条目）此前主要涵盖专门播发导航信号的新建 LEO-PNT *系统*。本文则分析了另一种*机会式*路径——从现有宽带 LEO 通信卫星的多普勒频移中提取导航信息——并为一个已知的实证异常现象（基于体积的卫星选择方法在多普勒 GDOP 场景下失效）提供了几何层面的解释；论文将其定位为对以往实证解释的补充。

## Images

None.
