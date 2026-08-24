---
id: 2026-08-24_arxiv-fluid-kinetic-interference-leo-megaconstellations
date_published: 2026-08-21
date_found: 2026-08-24
type: academic-paper
technology: satellite
title_en: "Fluid-dynamic interference modeling for LEO mega-constellations — treating the constellation as a compressible fluid shell yields closed-form time-varying outage and shows ~79° inclination beats 90° polar orbits"
title_zh: "面向 LEO 巨型星座的流体动力学干扰建模——将星座视为可压缩流体壳层，导出闭式时变中断概率，并证明约 79° 倾角优于 90° 极轨"
url: "https://arxiv.org/abs/2608.20651"
source_quality: full
topics: [LEO-mega-constellation, interference-modeling, stochastic-geometry, kinetic-field, orbital-caustics, outage-probability, Walker-constellation, inclination-optimization, 6G-NTN]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)
Dong, Jiang, Zhao, Han, Bi and Chen (arxiv cs.NI, 21 Aug 2026; accepted at IEEE Globecom 2026, SSC-2 Satellite Constellations session) propose a **kinetic interference field** framework that models a LEO mega-constellation not as a set of discrete nodes but as a **compressible fluid shell evolving under orbital kinematics**. The motivation is a structural gap in existing tools: static stochastic-geometry (SG) snapshots "fundamentally decouple the temporal correlation of interference from the underlying kinematics" (and in the paper's validation systematically underestimate aggregate interference by ~1.1 dB), while discrete simulations are kinematically exact but computationally intractable at mega-constellation scale.

The framework represents the constellation by a continuous satellite density field λ(x,t) governed by a continuity equation ∂λ/∂t + ∇·(λv) = 0, with an analytic orbital velocity field for Walker constellations whose latitudinal component vanishes as latitude approaches the inclination limit — producing **orbital caustics**: a deterministic density divergence near the inclination boundary (integrable, so interference stays physically bounded). A conservation law (Proposition 1) decomposes the temporal evolution of aggregate interference into geometric advection, traffic-gradient drift, and a boundary-flux term across the visibility horizon; the boundary flux is shown to dominate high-latitude interference surges. A stochastic-kinetic closure proves the randomly thinned Walker lattice converges weakly to an inhomogeneous PPP as the constellation densifies, and that the PPP substitution strictly overestimates interference variance — i.e. the model gives a mathematically guaranteed conservative bound on outage. Moment matching to a Gamma interference distribution then yields a **closed-form time-varying outage probability** under Nakagami-m fading, avoiding Monte Carlo entirely.

Numerically (960-satellite Walker delta at 1,000 km, 85° inclination, 28 GHz, 30 dBm, path-loss exponent 3.5, 0 dB SINR threshold, 10° minimum elevation): the kinetic mean/variance track Monte Carlo closely; interference rises monotonically with latitude and surges deterministically near the caustic; equatorial users are the most reliable (orbital rarefaction), high-latitude users the worst. The headline design finding: 90° polar orbits are **not** optimal — at 1,000 km the optimal inclination is ≈**79°**, the minimum sufficient to close the polar coverage gap; going beyond it buys diminishing coverage but severely worsens orbital compression and interference.

## Summary (ZH)
Dong、Jiang、Zhao、Han、Bi 与 Chen（arxiv cs.NI，2026 年 8 月 21 日；已被 IEEE Globecom 2026 SSC-2 卫星星座专题接收）提出**动理学干扰场**框架：不再把 LEO 巨型星座视为离散节点集合，而是视为**在轨道运动学支配下演化的可压缩流体壳层**。动机在于现有工具的结构性缺陷：静态随机几何（SG）快照"从根本上割裂了干扰的时间相关性与底层运动学"（论文验证中系统性低估聚合干扰约 1.1 dB），而离散仿真虽然运动学精确，但在巨型星座规模下计算不可行。

该框架用连续卫星密度场 λ(x,t) 表示星座，受连续性方程 ∂λ/∂t + ∇·(λv) = 0 支配；Walker 星座的解析轨道速度场中，纬向分量在纬度接近倾角极限时趋于零——产生**轨道焦散**：倾角边界附近确定性的密度发散（可积，因此干扰物理上有界）。守恒律（命题 1）将聚合干扰的时间演化分解为几何平流、业务梯度漂移和跨可见性地平线的边界通量三项；证明边界通量主导高纬度干扰激增。随机-动理学闭合证明：随机稀疏化的 Walker 格点在星座致密化时弱收敛于非齐次泊松点过程（PPP），且 PPP 替换严格高估干扰方差——即该模型给出数学上有保证的保守中断概率上界。再经 Gamma 分布矩匹配，得到 Nakagami-m 衰落下的**闭式时变中断概率**，完全无需蒙特卡洛。

数值验证（960 星 Walker delta、1,000 km、85° 倾角、28 GHz、30 dBm、路损指数 3.5、SINR 门限 0 dB、最低仰角 10°）：动理学均值/方差紧密跟踪蒙特卡洛；干扰随纬度单调上升并在焦散附近确定性激增；赤道用户最可靠（轨道稀化），高纬用户最差。核心设计结论：90° 极轨**并非**最优——1,000 km 高度下最优倾角约为 **79°**，即恰好闭合极区覆盖缺口的最小倾角；再增大倾角覆盖收益递减，却严重加剧轨道压缩与干扰。

## Key technical points (EN)
- **Continuum model:** satellite density field λ(x,t) + continuity equation; Walker velocity field v_φ = v_orb·√(1 − cos²ι/cos²φ), v_θ = v_orb·cosι/cosφ; kinematic stagnation (v_φ→0) at the inclination limit creates orbital caustics with density λ̄(φ) = N/[2π²R_s²√(sin²ι − sin²φ)] — divergent but Lebesgue-integrable (order −1/2).
- **Interference conservation law:** ∂I/∂t = geometric advection + traffic-gradient drift − boundary flux; the visibility-horizon flux term is the dominant driver of high-latitude interference surges — a deterministic hydrodynamic consequence, not statistical coincidence.
- **Stochastic-kinetic closure:** thinned Walker lattice → inhomogeneous PPP weak convergence as N grows; PPP strictly overestimates interference variance → guaranteed conservative (worst-case) outage bound.
- **Closed-form outage:** Gamma moment closure k_I(t) = μ_I²/σ_I², θ_I(t) = σ_I²/μ_I; Theorem 1 gives P_out(t) in closed form under Nakagami-m fading — no characteristic-function inversion, no Monte Carlo.
- **Validation:** static SG baseline underestimates aggregate interference by ~1.1 dB; modeling error shrinks as constellation size N grows (continuum hypothesis validated for dense networks).
- **Design finding:** at 1,000 km, optimal inclination ≈ 79° (not 90°) — the minimum inclination that closes polar coverage; beyond it, orbital compression outweighs coverage gains.
- **Setup:** 960-sat Walker delta, 1,000 km, 28 GHz Ka-band, 30 dBm, α = 3.5, γ_th = 0 dB, 10° min elevation; 6 pages / 6 figures, Globecom 2026.
- **Limitations:** Gamma closure targets dense interference-limited regimes; traffic field spatially varying but temporally static; mean-field beam gain rather than instantaneous beam pointing; exact optimal angle sensitive to payload parameters.

## Key technical points (ZH)
- **连续介质模型：** 卫星密度场 λ(x,t) + 连续性方程；Walker 速度场 v_φ = v_orb·√(1 − cos²ι/cos²φ)、v_θ = v_orb·cosι/cosφ；倾角极限处的运动学滞止（v_φ→0）产生轨道焦散，密度 λ̄(φ) = N/[2π²R_s²√(sin²ι − sin²φ)]——发散但勒贝格可积（−1/2 阶）。
- **干扰守恒律：** ∂I/∂t = 几何平流 + 业务梯度漂移 − 边界通量；跨可见性地平线的通量项主导高纬干扰激增——是确定性的流体动力学结果，而非统计巧合。
- **随机-动理学闭合：** 稀疏化 Walker 格点随 N 增大弱收敛于非齐次 PPP；PPP 严格高估干扰方差 → 有数学保证的保守（最坏情形）中断上界。
- **闭式中断概率：** Gamma 矩闭合 k_I(t) = μ_I²/σ_I²、θ_I(t) = σ_I²/μ_I；定理 1 给出 Nakagami-m 衰落下的闭式 P_out(t)——无需特征函数反演，无需蒙特卡洛。
- **验证：** 静态 SG 基线低估聚合干扰约 1.1 dB；建模误差随星座规模 N 增大而缩小（致密网络下连续介质假设成立）。
- **设计结论：** 1,000 km 高度最优倾角约 79°（而非 90°）——恰好闭合极区覆盖的最小倾角；超过后轨道压缩的代价超过覆盖收益。
- **配置：** 960 星 Walker delta、1,000 km、28 GHz Ka 波段、30 dBm、α = 3.5、γ_th = 0 dB、最低仰角 10°；6 页 / 6 图，Globecom 2026。
- **局限：** Gamma 闭合面向致密干扰受限场景；业务场空间可变但时间静态；采用平均场波束增益而非瞬时波束指向；最优倾角的精确值对载荷参数敏感。

## Why it matters / what's new (EN)
The leo-constellations bin already holds several interference/resource-management entries (robust RB allocation 06-03, Fudan beam-hopping + interference-detection pair 06-15, Cox-Boolean multi-operator sharing 08-15, demand-forecast beam hopping 08-15), but all of them sit in the standard discrete or stochastic-geometry paradigms. This paper introduces a genuinely **new method class for the bin — continuum/hydrodynamic modeling** — that keeps orbital kinematics (which static SG discards) while keeping analytical tractability (which discrete simulation lacks), and it comes with two results of direct engineering consequence: a provably conservative closed-form time-varying outage expression, and the counter-intuitive ~79°-beats-90° inclination finding, which reframes polar-orbit design as a coverage-vs-orbital-compression trade rather than a coverage problem alone. The "orbital caustics" lens also gives the KB's recurring high-latitude-performance observations (e.g. the Mapping-the-Storm Starlink telemetry study's latitude effects) a first-principles mechanism: high-latitude interference surge is deterministic orbital compression, not noise. As mega-constellation filings keep stacking (Starlink Gen2, Amazon Leo, Guowang, Qianfan, K-Starlink), a scalable analytic tool that turns constellation-wide interference into a PDE is a plausible building block for both operator design studies and NGSO regulatory analysis.

## Why it matters / what's new (ZH)
leo-constellations 条目库中已有多篇干扰/资源管理条目（06-03 稳健 RB 分配、06-15 复旦波束跳变+干扰检测组合、08-15 Cox-Boolean 多运营商共享、08-15 需求预测波束跳变），但它们都属于标准的离散或随机几何范式。本文为该条目库引入了真正**新的方法类别——连续介质/流体动力学建模**：既保留了静态随机几何所丢弃的轨道运动学，又保留了离散仿真所欠缺的解析可处理性，并带来两个具有直接工程意义的结果：可证明保守的闭式时变中断概率表达式，以及反直觉的"79° 优于 90°"倾角结论——将极轨设计从单纯的覆盖问题重构为覆盖与轨道压缩的权衡。"轨道焦散"视角还为知识库中反复出现的高纬性能观察（如 Mapping-the-Storm Starlink 遥测研究中的纬度效应）提供了第一性原理机制：高纬干扰激增是确定性的轨道压缩，而非噪声。随着巨型星座申报不断累积（Starlink Gen2、Amazon Leo、国网、千帆、K-Starlink），将全星座干扰化为偏微分方程的可扩展解析工具，有望成为运营商设计研究与 NGSO 监管分析的基础构件。
