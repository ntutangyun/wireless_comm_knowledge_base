---
id: 2026-10-28_arxiv-space-time-stacked-intelligent-metasurfaces-doppler-leo-broadcasting
date_published: 2026-10-25
date_found: 2026-10-28
technology: satellite
type: academic-paper
title_en: "Space-Time Stacked Intelligent Metasurfaces for Doppler-Resilient LEO Broadcasting"
title_zh: "面向抗多普勒 LEO 广播的空时堆叠智能超表面"
url: "https://arxiv.org/abs/2610.34479"
source_quality: full
topics: [stacked-intelligent-metasurface, Doppler, LEO, OFDM, time-modulated-metasurface, phase-only-synthesis]
topic_primary: leo-constellations
topics_secondary: [ntn]
novelty_score: 3
---

## Summary (EN)

Sheemar, Iacovelli, Solanki and Chatzinotas (SnT University of Luxembourg and NIT Warangal; arXiv 2610.34479, eess.SP, v1 25 October 2026) address LEO Doppler of about 400 kHz at 20 GHz. They argue that a standard stacked intelligent metasurface (SIM) or single-translation surface sends every beam at the feed's frequency, so with a common Doppler correction the worst terminal keeps about half the Doppler span as residual, a floor that neither transmit power nor digital processing removes. The paper asks whether a stack whose layers vary in time can give each spatial mode its own frequency shift, and whether a realistic phase-only stack can produce such a field.

The proposed Space-Time SIM uses four layers of 10x10 meta-atoms and one RF chain; each spatial mode is paired with a frequency translation matching one terminal's Doppler, and phase trajectories are synthesised over an OFDM symbol. The theory derives minimum-energy multiuser synthesis, shows that full column rank of the steering matrix permits exact decoupling of per-terminal translations, and proves that any common translation leaves a residual of half the Doppler span. A gradient-based phase-only algorithm carries a monotone-descent (stationarity) guarantee, with quantisation and control-rate laws.

Evaluation uses a 20 GHz carrier, 600 km altitude, 200 km footprint radius, 4 terminals, 1,024 subcarriers at 30 kHz spacing, a 7.68 MHz control rate (274 slots per symbol) and medians over 50 random drops against a space-only SIM with common precompensation, a single time-modulated layer and ideal digital per-terminal precompensation. The four-layer design removes the Doppler floor of a static SIM for footprint radii above about 45 km and, under the ideal phase-only model at equal radiated peak energy, comes within 0.5 dB of ideal digital precompensation for resolvable terminals; a single time-modulated layer cannot synthesise the required modes. Quantisation error scales at about 6 dB per bit, and streaming every phase state for 400 meta-atoms at 3-bit resolution would need about 9.2 Gbit/s. Stated limits: ideal unit-modulus phase-only layers without mutual coupling, line-of-sight only, static terminals, nonconvex synthesis (stationary points only), switching harmonics from held control.

## Summary (ZH)

Sheemar、Iacovelli、Solanki 和 Chatzinotas（卢森堡大学 SnT 与 NIT Warangal；arXiv 2610.34479，eess.SP，v1 于 2026 年 10 月 25 日发布）针对 20 GHz 下约 400 kHz 的 LEO 多普勒。他们指出，标准堆叠智能超表面（SIM）或单一平移表面使所有波束都带有馈源频率，因此在统一多普勒补偿下，最差终端仍残留约一半多普勒跨度，这一下限无法靠增大发射功率或数字处理消除。论文探讨层间随时间变化的堆叠能否为每个空间模式提供各自的频移，以及现实的纯相位堆叠能否产生这样的场。

所提空时 SIM 使用四层 10x10 超原子和一个射频链；每个空间模式配对一个与某终端多普勒匹配的频率平移，并在一个 OFDM 符号上综合相位轨迹。理论推导了最小能量多用户综合，证明导向矩阵列满秩时可精确解耦各终端的平移，并证明任何统一平移都会残留半个多普勒跨度。基于梯度的纯相位算法具有单调下降（驻点）保证，并给出量化与控制速率规律。

评估采用 20 GHz 载频、600 km 高度、200 km 覆盖半径、4 个终端、1,024 个 30 kHz 间隔子载波、7.68 MHz 控制速率（每符号 274 个时隙），取 50 次随机撒点的中位数，对比统一预补偿的纯空间 SIM、单层时间调制孔径以及理想数字逐终端预补偿。四层设计在覆盖半径大于约 45 km 时消除了静态 SIM 的多普勒下限；在理想纯相位模型和相同辐射峰值能量下，对可分辨终端与理想数字预补偿相差在 0.5 dB 以内；单层时间调制无法综合所需模式。量化误差约每比特 6 dB，为 400 个超原子以 3 比特精度流式传输全部相位状态约需 9.2 Gbit/s。论文局限：理想的单位模纯相位层、无互耦、仅视距、终端静止、综合问题非凸（仅达驻点）、保持式控制产生开关谐波。

## Key technical points (EN)

- **Problem**: common Doppler precompensation leaves about half the Doppler span for the worst terminal (about 400 kHz Doppler at 20 GHz).
- **Design**: four-layer, 10x10 meta-atom ST-SIM, one RF chain, per-mode frequency translation over an OFDM symbol.
- **Theory**: full-column-rank steering matrix allows exact decoupling; any common translation leaves a half-span residual.
- **Results**: Doppler floor removed above about 45 km footprint radius; within 0.5 dB of ideal digital precompensation.
- **Cost**: 3-bit control of 400 meta-atoms needs about 9.2 Gbit/s; about 6 dB per bit quantisation scaling.
- **Caveat**: ideal phase-only model, LoS only, static terminals, 4 terminals, simulation only.

## Key technical points (ZH)

- **问题**：统一多普勒预补偿使最差终端残留约一半多普勒跨度（20 GHz 下约 400 kHz）。
- **设计**：四层 10x10 超原子的 ST-SIM，单射频链，在 OFDM 符号内为每个模式分配频率平移。
- **理论**：导向矩阵列满秩可精确解耦；任何统一平移都残留半跨度。
- **结果**：覆盖半径大于约 45 km 时消除多普勒下限；与理想数字预补偿相差 0.5 dB 以内。
- **代价**：400 个超原子 3 比特控制约需 9.2 Gbit/s；量化约每比特 6 dB。
- **注意**：理想纯相位模型、仅视距、终端静止、4 个终端、仅仿真。

## Why it matters / what's new (EN)

The paper notes that the predominant NTN remedy is ephemeris-based precompensation of a common carrier; this work moves Doppler handling into the analog wave domain of a metasurface stack and quantifies the control-bandwidth cost. Evidence is numerical, under an idealised phase-only model with four terminals.

## Why it matters / what's new (ZH)

论文指出 NTN 中主流做法是基于星历对公共载波做预补偿；本文把多普勒处理移入超表面堆叠的模拟波域，并量化了控制带宽代价。证据为数值仿真，基于理想纯相位模型和四个终端。

## Images

![Space-time SIM concept for Doppler-resilient LEO broadcasting | 抗多普勒 LEO 广播的空时 SIM 概念](https://arxiv.org/html/2610.34479v1/ST_SIM_Doppler_Original.png)
