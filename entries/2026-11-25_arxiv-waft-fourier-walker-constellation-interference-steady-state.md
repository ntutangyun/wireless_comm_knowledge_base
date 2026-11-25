---
id: 2026-11-25_arxiv-waft-fourier-walker-constellation-interference-steady-state
date_published: 2026-11-22
date_found: 2026-11-25
type: academic-paper
technology: satellite
title_en: "WAFT: A Fourier-Analytic Framework for Steady-State Performance of Walker Constellations"
title_zh: "WAFT：Walker 星座稳态性能的傅里叶分析框架"
url: "https://arxiv.org/abs/2611.29296"
source_quality: full
topics: [Walker-constellation, aggregate-interference, EPFD, Fourier-analysis, stochastic-geometry, NGSO, Starlink]
topic_primary: ngso-regulation
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Haoyang Xue, Bingkun Liu and Linling Kuang propose WAFT, a framework for the steady-state distribution of aggregate downlink interference power from Walker-delta constellations. The paper states that this steady-state distribution matters for spectrum coexistence regulation, and that existing approaches are either computationally expensive (large time-stepped simulations) or biased (stochastic-geometry models). WAFT models the constellation as a periodic impulse array on a phase torus and uses two-dimensional Fourier analysis to derive expressions for the expectation, variance and steady-state CCDF of the interference power, and to characterise how receiver performance repeats with longitude.

For a Starlink sub-constellation the authors report percentile results within about 0.09 dB of a finite-duration time-stepped simulation. They argue that stochastic-geometry models, which treat satellite positions as conditionally independent, assign significant probability to physically infeasible interference values, producing percentile errors. The paper is submitted to the IEEE (12 pages, 7 figures).

## Summary (ZH)

Haoyang Xue、Bingkun Liu、Linling Kuang 提出 WAFT，一种用于分析 Walker-delta 星座聚合下行干扰功率稳态分布的框架。论文指出该稳态分布对频谱共存监管很重要，而现有方法要么计算代价高（大规模时间步进仿真），要么存在偏差（随机几何模型）。WAFT 将星座建模为相位环面上的周期性脉冲阵列，利用二维傅里叶分析推导干扰功率的期望、方差和稳态 CCDF，并刻画接收性能随经度重复的规律。

针对一个 Starlink 子星座，作者报告其分位数结果与有限时长的时间步进仿真相差最多约 0.09 dB。他们认为，将卫星位置视为条件独立的随机几何模型会给物理上不可行的干扰值分配显著概率，从而造成分位数误差。该论文已投稿 IEEE（12 页，7 幅图）。

## Key technical points (EN)

- Model: each satellite is described by a 2-D phase coordinate (longitude of ascending node and in-plane phase); the constellation is a rigid lattice on the phase torus whose reference phase moves linearly in time. A closed-form visibility condition defines a visibility band on the torus, and the observable is rewritten as a sum over all satellites of a field, so visible satellites need not be tracked individually.
- Spectral representation (Theorem 1) separates configuration, observable form and time. For repeating-ground-track (RGT) constellations the time dependence becomes a discrete Fourier series. Closed-form longitude periods are given: the instantaneous period is 2*pi/gcd(No, F) in the nondegenerate case, and the RGT steady-state period is 2*pi*gc/(pN).
- Moments follow from the Fourier coefficients (E[Z] and Var(Z) as sums over the dual lattice); the CCDF is obtained from the characteristic function by Levy inversion.
- Setup: free-space path loss and a two-level transmit antenna pattern (24 dBi / 0 dBi switching at a 45 degree half-angle). Non-RGT example is Starlink Gen1 53 deg:1584/72/17 at 550 km, minimum elevation 10 deg, CCDFs evaluated for receivers at 0, 35 and 60 deg N; the phasing factor F = 17 is assumed because the operational value is not public. Reference simulation: 30 days at 30 s steps. Baselines: BPP, Poisson-Cox and non-homogeneous Poisson (NHPP) models.
- Results: WAFT's probability mass outside the observed support is 0.14-1.11%, versus 51.21-99.00% for the stochastic-geometry models (Table II). At 0 deg N the 0.1% and 99.9% percentile discrepancies are -0.085 dB and +0.082 dB for WAFT; across the three latitudes the stochastic-geometry models place the lower percentile 1.8-25.8 dB too low and the upper percentile 2.0-26.8 dB too high (Table III). WAFT's variance is slightly underestimated because the spectral series is truncated. RGT example: performance period 3.989 h, instantaneous longitude period 120 deg, steady-state longitude period 8 deg.
- Stated limitations: ideal circular orbits, spherical Earth, single-layer constellation; multi-shell and heterogeneous constellations, temporal correlation and EPFD compliance workflows are listed as future work.

## Key technical points (ZH)

- 模型：每颗卫星由二维相位坐标（升交点经度与轨道内相位）描述；星座是相位环面上的刚性格点，其参考相位随时间线性移动。闭式可见性条件在环面上定义可见带，并将观测量改写为对所有卫星的场求和，因此无需逐个跟踪可见卫星。
- 谱表示（定理 1）将星座配置、观测量形式与时间分离。对于重复地面轨迹（RGT）星座，时间依赖变为离散傅里叶级数。给出闭式经度周期：非退化情形下瞬时周期为 2*pi/gcd(No, F)，RGT 稳态周期为 2*pi*gc/(pN)。
- 各阶矩由傅里叶系数得到（E[Z] 与 Var(Z) 为对偶格点上的求和）；CCDF 通过特征函数的 Levy 反演获得。
- 设置：自由空间路径损耗与两级发射天线方向图（24 dBi / 0 dBi，在 45 度半角处切换）。非 RGT 示例为 Starlink Gen1 53 度:1584/72/17、550 km，最低仰角 10 度，CCDF 在北纬 0、35、60 度处计算；由于实际相位因子未公开而假设 F = 17。参考仿真为 30 天、步长 30 s。对比基线：BPP、Poisson-Cox 与非齐次泊松（NHPP）模型。
- 结果：WAFT 在观测支撑集之外的概率质量为 0.14-1.11%，随机几何模型为 51.21-99.00%（表 II）。在北纬 0 度处，WAFT 的 0.1% 与 99.9% 分位数偏差分别为 -0.085 dB 与 +0.082 dB；在三个纬度上，随机几何模型的下分位数偏低 1.8-25.8 dB、上分位数偏高 2.0-26.8 dB（表 III）。由于谱级数被截断，WAFT 的方差略有低估。RGT 示例：性能周期 3.989 h，瞬时经度周期 120 度，稳态经度周期 8 度。
- 论文声明的局限：理想圆轨道、球形地球、单层星座；多壳层与异构星座、时间相关性以及 EPFD 合规流程列为未来工作。

## Why it matters / what's new (EN)

The paper's stated motivation is regulatory: EPFD thresholds are read off steady-state CCDFs to protect GSO receivers. Its stated contributions are the WAFT framework, a spectral representation, closed-form longitude periods and validation against simulation, without a satellite-independence assumption. The authors note that existing Walker point-process formulations focus primarily on non-repeating ground-track constellations with phasing factor F = 0.

## Why it matters / what's new (ZH)

论文声明的动机来自监管：EPFD 门限是从稳态 CCDF 中读取的，用于保护 GSO 接收机。其声明的贡献包括 WAFT 框架、谱表示、闭式经度周期以及与仿真的对照验证，且无需卫星相互独立的假设。作者指出，现有 Walker 点过程模型主要针对相位因子 F = 0 的非重复地面轨迹星座。

## Images

None.
