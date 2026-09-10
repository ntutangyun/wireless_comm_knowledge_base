---
id: 2026-09-10_arxiv-leo-terrestrial-multistatic-isac-satellite-selection
date_published: 2026-09-09
date_found: 2026-09-10
type: academic-paper
technology: satellite
title_en: "Cooperative LEO-Terrestrial Multistatic ISAC: CRLB Analysis, Scaling Laws, and Satellite Selection"
title_zh: "LEO-地面协同多基地 ISAC：均方根 CRLB 随协作卫星数量呈平方根反比缩放，贪婪选择策略以约千分之一搜索开销逼近穷举搜索精度"
url: "https://arxiv.org/abs/2609.09784"
source_quality: full
topics: [ISAC, multistatic-sensing, Cramer-Rao-lower-bound, stochastic-geometry, Walker-constellation, satellite-selection, 3D-localisation]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)
Li, Meng, Alsusa and You (Department of Electrical and Electronic Engineering, University of Manchester) analyse a cooperative LEO-terrestrial multistatic integrated sensing and communication (ISAC) architecture for three-dimensional target localisation, in which multiple LEO satellites act as cooperative sensing illuminators providing additional bistatic observations to distributed terrestrial radar receivers. The paper first models the ground projections of cooperative satellites as a homogeneous Poisson point process (PPP) and derives a tractable closed-form approximation of the PPP-averaged hybrid (satellite-plus-terrestrial) Cramer-Rao lower bound (CRLB). From this, the paper derives two scaling laws: for a fixed cooperation region, the root-CRLB decreases proportionally to the inverse square root of the mean number of cooperating satellites, K-bar; for a fixed satellite density, enlarging the cooperation radius instead yields only a slower, logarithmic-diminishing-returns improvement (root-CRLB scaling as the inverse square root of the log of K-bar) -- i.e. increasing the density of nearby cooperative satellites gives a faster asymptotic localisation gain than extending the cooperation region to include more distant satellites. The analysis further shows that whether vertical (altitude) localisation accuracy keeps improving as the cooperation radius grows depends critically on the terrestrial receiver-network geometry: without terrestrial elevation-angle diversity, vertical accuracy saturates to a non-zero floor regardless of how many satellites cooperate. To move from the idealised PPP model to realistic deployments, the authors then build an Earth-curvature-aware, time-varying Walker-constellation model incorporating orbital-plane structure, Walker phasing, satellite motion and elevation-based visibility, and derive a tractable approximation of the corresponding Walker-based hybrid CRLB together with analytical bounds on the marginal CRLB reduction from adding a candidate satellite. Because the optimal-subset satellite-selection problem is combinatorial (checking all C(K_vis, M) subsets is exhaustive-search-only for real candidate counts), the paper proposes a low-complexity greedy selection procedure that, at each step, adds the candidate satellite giving the largest exact marginal trace-CRLB reduction, using a hybrid-aware criterion that accounts for both signal-to-clutter-plus-noise ratio (SCNR) reliability and geometric complementarity with the already-selected set and with the existing terrestrial sensing configuration. Monte Carlo simulation validates both CRLB approximations and shows the CRLB-oriented greedy selection achieves near-exhaustive-search localisation accuracy while requiring roughly three orders of magnitude fewer subset evaluations than exhaustive search; hybrid-aware (terrestrial-geometry-informed) selection gives a larger accuracy advantage over satellite-only selection specifically when the terrestrial receiver deployment is directionally imbalanced (asymmetric).

## Summary (ZH)
Li、Meng、Alsusa 与 You（曼彻斯特大学电子电气工程系）针对面向三维目标定位的 LEO-地面协同多基地综合感知与通信（ISAC）架构展开分析：多颗 LEO 卫星作为协同感知照射源，为分布式地面雷达接收机提供额外的双基地观测。论文首先将协作卫星的地面投影建模为齐次泊松点过程（PPP），并推导出 PPP 平均混合（卫星+地面）克拉美-罗下界（CRLB）的可解闭式近似。在此基础上得到两条缩放规律：在协作区域固定的情况下，均方根 CRLB 随协作卫星平均数量 K-bar 呈平方根反比下降；而在卫星密度固定的情况下，扩大协作半径仅能带来较慢的、对数式边际递减的改善（均方根 CRLB 按 log(K-bar) 的平方根反比缩放）——也就是说，增加邻近协作卫星的密度比扩大协作区域以纳入更远的卫星能带来更快的渐近定位增益。分析进一步表明，垂直（高度）定位精度是否随协作半径增大持续提升，关键取决于地面接收网络的几何结构：若缺乏地面仰角多样性，无论多少卫星参与协作，垂直精度都会饱和于一个非零下限。为从理想化的 PPP 模型过渡到实际部署场景，作者进一步构建了顾及地球曲率、随时间变化的 Walker 星座模型，纳入轨道面结构、Walker 相位、卫星运动与基于仰角的可见性，并推导出相应的基于 Walker 星座的混合 CRLB 可解近似，以及增加候选卫星所带来的边际 CRLB 降低量的解析界。由于最优子集卫星选择问题属于组合优化问题（对真实候选数量而言，检验全部 C(K_vis, M) 个子集只能依靠穷举搜索），论文提出一种低复杂度贪婪选择方法：每一步添加能带来最大精确边际迹-CRLB 降低量的候选卫星，所用的混合感知准则同时考虑信杂噪比（SCNR）可靠性、与已选集合的几何互补性，以及与现有地面感知配置的几何互补性。蒙特卡洛仿真验证了两种 CRLB 近似，并表明面向 CRLB 的贪婪选择方法在所需子集评估次数比穷举搜索少约三个数量级的情况下，取得接近穷举搜索的定位精度；当地面接收机部署在方向上不均衡（非对称）时，顾及地面几何信息的选择方式相较仅依赖卫星信息的选择方式具有更大的精度优势。

## Key technical points (EN)
- **Architecture:** cooperative LEO-terrestrial multistatic ISAC -- multiple LEO satellites act as sensing illuminators, echoes collected bistatically by distributed terrestrial radar receivers, for 3-D target localisation.
- **PPP scaling law 1 (satellite count):** for a fixed cooperation region, root-CRLB scales as O(K-bar^-1/2) -- inverse-square-root improvement with the mean number of cooperating satellites.
- **PPP scaling law 2 (cooperation radius):** for fixed satellite density, enlarging the cooperation radius D_max yields only O((ln K-bar)^-1/2) improvement -- logarithmic diminishing returns; the horizontal FIM transitions from quadratic-growth to logarithmic-growth once D_max is of the same order as satellite altitude h.
- **Vertical-accuracy dependency:** sustained growth of vertical (altitude) localisation information depends critically on terrestrial-network geometry; with no terrestrial elevation diversity, the vertical FIM contribution converges to a finite value, producing a non-zero localisation floor regardless of satellite density.
- **Walker-constellation model:** Earth-curvature-aware, time-varying, incorporating orbital-plane structure, Walker phasing, satellite motion, and elevation-based visibility; used to derive a tractable Walker-based hybrid CRLB and marginal-gain bounds for candidate ordering.
- **Selection algorithm:** CRLB-oriented greedy selection (adds the satellite giving the largest exact marginal trace-CRLB reduction at each step) vs. exhaustive search (checks C(K_vis, M) subsets); greedy achieves near-exhaustive localisation accuracy while requiring roughly three orders of magnitude fewer subset evaluations than exhaustive search.
- **Terrestrial-geometry awareness:** hybrid-aware selection (accounting for the existing terrestrial FIM when choosing satellites) consistently outperforms satellite-only selection, with the advantage growing larger under asymmetric (directionally imbalanced) terrestrial receiver deployments.
- **Simulation baseline:** satellite altitude lower bound set at H = 500 km, following prior LEO deployment references cited in the paper; root-CRLB increases with altitude H because propagation loss dominates.

## Key technical points (ZH)
- **架构：** LEO-地面协同多基地 ISAC——多颗 LEO 卫星作为感知照射源，回波由分布式地面雷达接收机以双基地方式接收，用于三维目标定位。
- **PPP 缩放规律一（卫星数量）：** 在协作区域固定的情况下，均方根 CRLB 按 O(K-bar^-1/2) 缩放——随协作卫星平均数量呈平方根反比改善。
- **PPP 缩放规律二（协作半径）：** 在卫星密度固定的情况下，扩大协作半径 D_max 仅带来 O((ln K-bar)^-1/2) 的改善——对数式边际递减；当 D_max 与卫星高度 h 同量级时，水平方向 FIM 由二次增长过渡为对数增长。
- **垂直精度的依赖关系：** 垂直（高度）定位信息能否持续增长关键取决于地面网络几何结构；若缺乏地面仰角多样性，垂直方向 FIM 贡献会收敛到一个有限值，无论卫星密度多高都会产生一个非零定位下限。
- **Walker 星座模型：** 顾及地球曲率、随时间变化，纳入轨道面结构、Walker 相位、卫星运动与基于仰角的可见性；用于推导基于 Walker 星座的可解混合 CRLB 近似以及用于候选排序的边际增益解析界。
- **选择算法：** 面向 CRLB 的贪婪选择（每步添加能带来最大精确边际迹-CRLB 降低量的卫星）对比穷举搜索（检验 C(K_vis, M) 个子集）；贪婪方法以比穷举搜索少约三个数量级的子集评估次数，取得接近穷举搜索的定位精度。
- **地面几何感知：** 顾及现有地面 FIM 的混合感知选择方式始终优于仅依赖卫星信息的选择方式，且在地面接收机部署方向不均衡（非对称）时优势更为显著。
- **仿真基准：** 参照论文所引用的既有 LEO 部署文献，将卫星高度下限设为 H = 500 公里；由于传播损耗占主导，均方根 CRLB 随高度 H 增大而增大。

## Why it matters / what's new (EN)
The leo-constellations bin already has ISAC entries covering bistatic sensing with holographic apertures and fluid-antenna users (2026-09-09), but this is the first entry in the bin whose source derives closed-form scaling laws for how LEO-cooperative multistatic sensing accuracy grows with satellite density versus cooperation-region size, and the first to pair that stochastic-geometry analysis with a concrete, complexity-characterised satellite-selection algorithm (greedy vs. exhaustive) validated against an Earth-curvature-aware Walker-constellation model rather than an idealised PPP alone. The quantified finding that densifying nearby satellites beats extending the cooperation region -- and that vertical localisation accuracy can hit a hard floor without adequate terrestrial elevation diversity -- gives a concrete design rule for LEO-ISAC deployment planning that a pure per-satellite SNR analysis would not surface.

## Why it matters / what's new (ZH)
leo-constellations 分箱此前已有涉及全息孔径与流体天线用户双基地感知的 ISAC 条目（2026-09-09），但本条目是首个针对 LEO 协同多基地感知精度如何随卫星密度与协作区域大小变化推导出闭式缩放规律的条目，也是首个将该随机几何分析与一个经复杂度刻画的卫星选择算法（贪婪对比穷举）相结合、并基于顾及地球曲率的 Walker 星座模型（而非单纯理想化 PPP 模型）加以验证的条目。其量化发现——加密邻近卫星优于扩大协作区域，且若缺乏充分的地面仰角多样性，垂直定位精度会遇到硬性下限——为 LEO-ISAC 部署规划提供了一条具体的设计准则，这是单纯逐卫星信噪比分析无法揭示的。

## Images

None.
