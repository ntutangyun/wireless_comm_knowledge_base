---
id: 2026-11-25_arxiv-orbit-aware-cox-service-region-dense-leo
date_published: 2026-11-22
date_found: 2026-11-25
type: academic-paper
technology: satellite
title_en: "From Footprints to Service Regions: Modeling and Analysis of Dense LEO Satellite Networks Using an Orbit-Aware Cox Point Process"
title_zh: "从覆盖足迹到服务区域：基于轨道感知 Cox 点过程的稠密 LEO 卫星网络建模与分析"
url: "https://arxiv.org/abs/2611.29119"
source_quality: full
topics: [LEO, Cox-point-process, service-region, Voronoi, stochastic-geometry, Walker-constellation, user-rate]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Chang-Sik Choi (arXiv cs.IT; comments field: accepted to IEEE Transactions on Wireless Communications) models the service region of each satellite in a dense LEO network, where the service region is the area a satellite actually serves rather than the area in which it is visible. The model intersects a satellite's footprint (a spherical cap) with its nearest-satellite spherical Voronoi cell, using an orbit-aware Cox point process in which orbital planes are drawn from a Poisson process and satellites are then placed on each orbit.

Using Palm calculus, the paper derives exact expressions for the mean service-region area and perimeter and a coverage-load relationship. The abstract states that once coverage saturates, mean area and load decrease inversely with the satellite population, whereas adding satellites along existing orbits keeps a positive limiting perimeter. The geometry is linked to an approximate noise-limited user rate; the paper reports that in the tested densification paths most of the rate increase comes from reduced satellite load rather than from better serving links.

## Summary (ZH)

Chang-Sik Choi（arXiv cs.IT；备注栏：已被 IEEE Transactions on Wireless Communications 接收）对稠密 LEO 网络中每颗卫星的服务区域建模，其中服务区域指卫星实际服务的面积，而非其可见面积。该模型将卫星的覆盖足迹（球冠）与其最近卫星关联的球面 Voronoi 单元求交，采用轨道感知 Cox 点过程：轨道面由泊松过程抽取，随后在每条轨道上布放卫星。

论文利用 Palm 演算推导出平均服务区域面积与周长的精确表达式以及覆盖-负载关系。摘要指出，覆盖饱和后，平均面积与负载随卫星总数成反比下降，而沿现有轨道增加卫星则保持一个正的极限周长。该几何关系与近似的噪声受限用户速率相联系；论文报告，在所测试的加密路径中，速率提升主要来自卫星负载下降，而非服务链路改善。

## Key technical points (EN)

- Model: satellites on a common spherical shell; planes drawn with mean lambda planes, mu satellites per orbit on average (expected total lambda*mu). Footprint is a spherical cap of angular radius gamma_f set from elevation and SNR limits. Users form a Poisson process of density lambda_u and connect to the nearest accessible satellite; satellite load is Poisson with mean lambda_u times service-region area.
- Theorem 1 gives the mean normalised area as an integral over the product of an inter-orbit and an intra-orbit void probability. Numerically (gamma_f = 10 deg, lambda in [10, 120], mu in [4, 40]) the area falls as either lambda or mu rises.
- Corollary 1 gives the coverage-load identity alpha = 2*P_cov / (lambda*mu*(1 - cos gamma_f)), with P_cov = 1 - inter-orbit void probability.
- Theorem 2 splits the normalised perimeter into the retained footprint rim, intra-orbit Voronoi edges and inter-orbit Voronoi edges; the paper gives a positive limit as mu grows (approximately 2/(pi*lambda*sin gamma_f) for large lambda) and states the normalised perimeter is at most 1.
- Rate analysis: R* = W/(1 + N*) x C*, with bandwidth shared among 1 + N* users and C* the fading-averaged spectral efficiency at the serving distance; Theorem 3 is an approximation that treats service-region area as Gamma-distributed and independent of link spectral efficiency.
- Validation: grid refinement changes the normalised perimeter by under 0.03%, the area integral matches the coverage-load identity within 0.004%, and Monte Carlo agrees with the analytical surfaces. The Walker comparison uses 53-degree single-inclination and five-component multi-inclination constellations with latitude-matched Cox parameters; the abstract reports that mean area and perimeter are reproduced over broad latitude ranges, with larger differences near component maximum latitudes. For sampled 53-degree single-inclination configurations with at least 720 satellites, the paper reports area errors of about 3.2% or less and perimeter errors below 4.4% in the 25-30 degree latitude bin.

## Key technical points (ZH)

- 模型：卫星位于同一球壳；轨道面平均数为 lambda，每条轨道平均 mu 颗卫星（期望总数 lambda*mu）。覆盖足迹为球冠，其角半径 gamma_f 由仰角与信噪比限制确定。用户构成密度为 lambda_u 的泊松过程，连接到最近的可接入卫星；卫星负载服从均值为 lambda_u 乘以服务区域面积的泊松分布。
- 定理 1 将归一化平均面积表示为轨道间与轨道内空洞概率乘积的积分。数值上（gamma_f = 10 度，lambda 取 [10, 120]，mu 取 [4, 40]），面积随 lambda 或 mu 增大而减小。
- 推论 1 给出覆盖-负载恒等式 alpha = 2*P_cov / (lambda*mu*(1 - cos gamma_f))，其中 P_cov = 1 - 轨道间空洞概率。
- 定理 2 将归一化周长分为保留的足迹边缘、轨道内 Voronoi 边和轨道间 Voronoi 边；论文给出 mu 增大时的正极限（lambda 较大时约为 2/(pi*lambda*sin gamma_f)），并指出归一化周长不超过 1。
- 速率分析：R* = W/(1 + N*) x C*，带宽由 1 + N* 个用户共享，C* 为服务距离处经衰落平均的频谱效率；定理 3 为近似结果，假设服务区域面积服从 Gamma 分布且与链路频谱效率独立。
- 验证：网格细化使归一化周长变化小于 0.03%，面积积分与覆盖-负载恒等式吻合在 0.004% 以内，蒙特卡洛与解析曲面一致。Walker 对比采用 53 度单倾角与五分量多倾角星座，并按纬度匹配 Cox 参数；摘要报告在较宽纬度范围内再现了平均面积与周长，在各分量最大纬度附近差异较大。论文报告，对卫星总数不少于 720 的 53 度单倾角配置，在 25-30 度纬度区间内面积误差约 3.2% 以内、周长误差低于 4.4%。

## Why it matters / what's new (EN)

The abstract's stated conclusion is that service-region geometry, and therefore load and user rate, depends on how satellites are distributed across orbital planes and not only on their total number. The paper presents the orbit-aware Cox process as the model that makes this dependence analytically tractable.

## Why it matters / what's new (ZH)

摘要声明的结论是：服务区域几何形状，进而负载与用户速率，取决于卫星在各轨道面间的分布方式，而不仅是其总数。论文将轨道感知 Cox 过程作为使这种依赖关系可解析处理的模型。

## Images

None.
