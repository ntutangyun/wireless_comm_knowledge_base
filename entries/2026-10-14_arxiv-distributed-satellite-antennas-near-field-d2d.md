---
id: 2026-10-14_arxiv-distributed-satellite-antennas-near-field-d2d
date_published: 2026-10-07
date_found: 2026-10-14
technology: satellite
type: academic-paper
title_en: "Modeling and Performance Evaluation of Distributed Satellite Antennas: Space Is Much Closer Than One Might Think"
title_zh: "分布式卫星天线的建模与性能评估：太空比想象中近得多"
url: "https://arxiv.org/abs/2610.10876"
source_quality: full
topics: [formation-of-arrays, Fraunhofer-distance, near-field, precoding, direct-to-device, S-band]
topic_primary: sat-direct-device
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Bacci, De Gaudenzi, Luise and Sanguinetti study the formation-of-arrays (FoA) architecture, in which cooperating satellites synthesize a large aperture to serve commercial handsets directly. The aperture extent depends on the number, arrangement and spacing of satellites, with inter-satellite distances from tens of meters to hundreds of kilometers. For representative S-band geostationary and LEO configurations, the Fraunhofer distance may exceed the nadir link range at spacings on the order of a hundred meters, so users can lie in the radiative near field and spherical-wave modeling is needed.

The paper combines spherical models of the space and user segments with exact spherical-wave propagation, and compares planar models of satellite positions, array orientations and user locations against spherical geometries (orbital and Earth curvature). Effects are quantified through throughput and outage probability for multi-antenna precoding. The paper is currently submitted to IEEE Transactions on Aerospace and Electronic Systems.

## Summary (ZH)

Bacci、De Gaudenzi、Luise 和 Sanguinetti 研究阵列编队（FoA）架构：多颗协作卫星合成大孔径，直接服务商用手机。孔径大小取决于卫星数量、排布和间距，星间距离从数十米到数百公里不等。对典型的 S 频段静止轨道和低轨配置，当间距约为百米量级时，夫琅禾费距离可能超过天底链路距离，因此用户可能处于辐射近场，需要采用球面波建模。

论文将空间段与用户段的球面模型与精确球面波传播结合，并将卫星位置、阵列朝向和用户位置的平面模型与球面几何（轨道曲率和地球曲率）对比，通过多天线预编码的吞吐量和中断概率量化各类简化假设的影响。该论文目前已投稿至 IEEE Transactions on Aerospace and Electronic Systems。

## Key technical points (EN)

- **Local plane-wave approximation** inside each satellite array closely matches the spherical-wave reference, provided satellite-center-to-user distances are retained exactly and users stay in each array's far field (in hierarchical formations, for each unit).
- **Global plane-wave approximation** across the formation can cause severe losses, including full outage.
- **Formation curvature** has little impact; planar and conformal formations give nearly identical throughput.
- **Earth curvature**: neglecting it (flat-Earth user model) overestimates LEO throughput.
- **Near field**: for the considered S-band systems, nadir users enter the radiative near field at intersatellite spacings of approximately 70 m (68.8 m GEO, 67.4 m LEO at 2.2 GHz) for both the GEO formation and the LEO system.
- The authors note similar modeling considerations apply to satellite-based localization.

## Key technical points (ZH)

- **局部平面波近似**（在每个卫星阵列内）与球面波基准高度吻合，前提是保留卫星中心到用户的精确距离，且用户处于各阵列的远场（分层编队中对每个单元均需成立）。
- **全局平面波近似**（跨整个编队）可能造成严重损失，甚至完全中断。
- **编队曲率**影响很小；平面与共形编队的吞吐量几乎相同。
- **地球曲率**：忽略它（平地用户模型）会高估低轨吞吐量。
- **近场**：对所考虑的 S 频段系统，GEO 编队和 LEO 系统的天底用户在约 70 米的星间间距下（GEO 68.8 米、LEO 67.4 米，2.2 GHz）进入辐射近场。
- 作者指出类似建模考虑同样适用于基于卫星的定位。

## Why it matters / what's new (EN)

Clarifies which geometric and wavefront approximations remain safe when designing precoders for distributed satellite apertures serving handsets, with throughput and outage results as evidence.

## Why it matters / what's new (ZH)

明确了在为服务手机的分布式卫星孔径设计预编码器时，哪些几何与波前近似仍然可靠，并以吞吐量和中断结果为依据。

## Images

None.
