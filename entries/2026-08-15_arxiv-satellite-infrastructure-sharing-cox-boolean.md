---
id: 2026-08-15_arxiv-satellite-infrastructure-sharing-cox-boolean
date_published: 2026-08-12
date_found: 2026-08-15
type: academic-paper
technology: satellite
title_en: "Satellite Infrastructure Sharing: orbit-structured stochastic geometry (spherical Cox-Boolean model) for connectivity of uncoordinated multi-operator LEO constellations"
title_zh: "卫星基础设施共享：面向多运营商非协同低轨星座连通性的轨道结构随机几何（球面 Cox-Boolean 模型）"
url: "https://arxiv.org/abs/2608.12265"
source_quality: full
topics: [infrastructure-sharing, stochastic-geometry, Cox-process, heterogeneous-constellations, coverage, SIR, multi-operator]
topic_primary: leo-constellations
topics_secondary: [ngso-regulation, starlink]
novelty_score: 3
---

## Summary (EN)
Chang-Sik Choi (KAIST; submitted 12 Aug 2026 to IEEE Transactions on Wireless Communications) builds a tractable analytical model for a question the industry is now asking in earnest: if several LEO operators deploy independently — different orbital planes, satellite counts, altitudes and footprints, with no orbital coordination — what does a ground user gain if those operators pool ("share") their infrastructure? The model is a **spherical Cox point process**: orbital planes are drawn as a Poisson process on a torus (intensity λ sin φ / 2π), satellites along each orbit as a Poisson process of density μ/2π, at orbital radius 6,921 km (~550 km altitude). Heterogeneity across operators enters by giving each satellite an **independent random communication range** κ ~ Uniform[c_m, c_M] (its footprint radius on Earth), and the union of all footprints becomes a **spherical Cox-Boolean model** — the coverage region.

From this the paper derives closed forms for the connection probability (typical user covered by ≥1 satellite), the connection number (how many satellites cover the user, mean scaling as λμ), the nearest-serving-satellite distance CDF, total received power, and the SIR distribution under nearest-satellite association in the interference-limited regime, and extends the framework to M altitude groups by superposition (Proposition 1). Numerically: at λ = 20 orbits with a 300 km footprint a single operator has connection probability ≈ 0.07, and combining two such operators (λ ≈ 40) roughly doubles it to ≈ 0.14; with 500 km footprints, 0.17 → 0.32. Mean connection number grows ~linearly in both λ and μ (three pooled operators: 5.1 vs 1.7 satellites; at λ = 120, μ = 30, c_M = 1,100 km the mean is 8.23 vs 2.74 single-operator). The trade-off: increasing footprint c_M **degrades SIR at every threshold** because overlapping cells multiply interference faster than useful signal, whereas adding orbital planes helps SIR only up to saturation. A calibration against a down-sampled Starlink-like constellation (3 shells, 7,500 satellites, inclinations 33°–53°) shows the Cox model's mean connection number tracks the real geometry closely for c_M ∈ [650, 900] km, slightly overestimating because isotropic orbits give more spatial diversity than Starlink's clustered inclinations.

## Summary (ZH)
Chang-Sik Choi（KAIST；2026 年 8 月 12 日提交，投稿 IEEE Transactions on Wireless Communications）为业界正在认真讨论的一个问题建立了可解析的模型：若多家低轨运营商各自独立部署——轨道面、卫星数、高度、覆盖足迹各不相同、彼此无轨道协调——地面用户能从运营商"共享"基础设施中获得什么？模型是**球面 Cox 点过程**：轨道面为环面上的泊松过程（强度 λ sin φ / 2π），每条轨道上的卫星为密度 μ/2π 的泊松过程，轨道半径 6,921 km（约 550 km 高度）。运营商异构性通过给每颗卫星赋予**独立随机通信范围** κ ~ Uniform[c_m, c_M]（地面足迹半径）引入，所有足迹的并集构成**球面 Cox-Boolean 模型**——即覆盖区域。

论文由此推导出连接概率（典型用户被至少一颗卫星覆盖）、连接数（覆盖用户的卫星数，均值按 λμ 增长）、最近服务卫星距离的 CDF、总接收功率，以及干扰受限区间下最近卫星接入的 SIR 分布的闭式表达，并通过叠加把框架扩展到 M 个高度组（命题 1）。数值上：λ = 20 条轨道、300 km 足迹时单运营商连接概率约 0.07，两家合并（λ ≈ 40）约翻倍到 0.14；500 km 足迹时由 0.17 升至 0.32。平均连接数随 λ 与 μ 近似线性增长（三家合并：5.1 颗 vs 1.7 颗；λ = 120、μ = 30、c_M = 1,100 km 时均值 8.23 vs 单运营商 2.74）。代价是：增大足迹 c_M **在所有阈值下都降低 SIR**，因为重叠小区带来的干扰增长快于有用信号；而增加轨道面对 SIR 的改善会饱和。与降采样的类 Starlink 星座（3 壳层、7,500 星、倾角 33°–53°）的校准表明，在 c_M ∈ [650, 900] km 区间 Cox 模型的平均连接数与真实几何相当接近，略有高估，原因是各向同性轨道比 Starlink 集中的倾角带来更多空间分集。

## Key technical points (EN)
- **Model:** spherical Cox point process (Poisson orbits, Poisson satellites per orbit) + per-satellite random footprint radius κ ~ U[c_m, c_M] → spherical Cox-Boolean coverage model; r_s = 6,921 km; typical user at the pole.
- **Closed forms:** connection probability (Thm 1), connection number (Thm 3, mean ∝ λμ), association distance CDF (Thm 4), total received power (Thm 5), SIR CCDF under nearest association; multi-altitude superposition (Prop 1).
- **Sharing gains:** connection probability ≈ 2× when two equal operators pool (0.07 → 0.14 at 300 km footprint; 0.17 → 0.32 at 500 km); mean connection number 1.7 → 5.1 for three operators.
- **Trade-off:** larger footprints degrade SIR across all thresholds (overlap-driven interference); more orbital planes improve SIR only to saturation.
- **Validation:** Cox model calibrated to a 3-shell 7,500-satellite Starlink-like constellation; close match on mean connection number for c_M 650–900 km, slight overestimate due to isotropy.
- **Limitation:** isotropic orbits (fits uncoordinated operators, not planned constellations); full-scale validation open.

## Key technical points (ZH)
- **模型：** 球面 Cox 点过程（泊松轨道、每轨泊松卫星）+ 每星随机足迹半径 κ ~ U[c_m, c_M] → 球面 Cox-Boolean 覆盖模型；r_s = 6,921 km；典型用户位于极点。
- **闭式结果：** 连接概率（定理 1）、连接数（定理 3，均值 ∝ λμ）、接入距离 CDF（定理 4）、总接收功率（定理 5）、最近接入下的 SIR CCDF；多高度叠加（命题 1）。
- **共享增益：** 两家同规模运营商合并连接概率约翻倍（300 km 足迹 0.07 → 0.14；500 km 0.17 → 0.32）；三家合并平均连接数 1.7 → 5.1。
- **代价：** 足迹增大使所有阈值下 SIR 下降（重叠驱动的干扰）；增加轨道面对 SIR 的改善会饱和。
- **验证：** 以 3 壳层 7,500 星类 Starlink 星座校准；c_M 650–900 km 区间平均连接数吻合良好，因各向同性略高估。
- **局限：** 各向同性轨道假设（适合非协同运营商，不适合规划星座）；全尺度验证待做。

## Why it matters / what's new (EN)
The KB's stochastic-geometry satellite entries so far model a single constellation (2026-08-08_arxiv-aoi-ntn-energy-harvesting-probe uses spherical geometry for AoI; the June robust-RB and beam-hopping papers assume one operator). This is the first entry that models **several uncoordinated operators as a superposition and asks what pooling buys** — a question that has moved from academic to commercial in the last month: Equatys is explicitly a neutral-host, multi-tenant "Space TowerCo" (2026-08-14_space42-equatys-d2d-satellite-procurement), Amazon Leo will host Apple's satellite features after the Globalstar deal (2026-07-22), and multi-operator spectrum sharing is the substance of the FCC's EPFD-replacement and Part 100 orders. The paper's two design messages are directly usable: pooled operators roughly multiply connection probability/number in proportion to their combined orbital density, but **wider footprints are the wrong lever** — they trade SIR for coverage — so shared constellations should add planes/satellites rather than enlarge beams. The Cox-vs-Starlink calibration also gives a reusable rule of thumb for when the isotropic model is trustworthy.

## Why it matters / what's new (ZH)
知识库现有卫星随机几何条目均针对单一星座（2026-08-08 AoI-NTN 能量采集用球面几何；6 月的鲁棒 RB 分配与波束跳变论文均假设单运营商）。本条目首次把**多个非协同运营商建模为叠加并追问"合并能带来什么"**——这一问题在过去一个月已从学术走向商业：Equatys 明确是中立主机、多租户的"太空铁塔公司"（2026-08-14），Amazon Leo 将在 Globalstar 交易后承载 Apple 卫星功能（2026-07-22），而多运营商频谱共享正是 FCC 替代 EPFD 与 Part 100 命令的实质。论文的两条设计结论可直接使用：合并运营商大致按合计轨道密度成比例提升连接概率/连接数，但**扩大足迹是错误的杠杆**——用 SIR 换覆盖——因此共享星座应增加轨道面/卫星而非放大波束。Cox 与 Starlink 的校准也给出了各向同性模型何时可信的可复用经验规则。
