---
id: 2026-06-03_arxiv-mapping-storm-weather-leo-starlink
date_published: 2026-06-01
date_found: 2026-06-03
type: academic-paper
title_en: "Mapping the Storm: Geospatial Impacts of Severe Weather on LEO Network Performance"
title_zh: "绘制风暴图：恶劣天气对 LEO 网络性能的地理空间影响"
url: "https://arxiv.org/abs/2606.01724"
source_quality: abstract_only
technology: satellite
topics: [Starlink, LEO, weather, telemetry, measurement, reliability]
topic_primary: starlink
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)
This paper presents the first continental-scale empirical study correlating LEO satellite-internet performance with fine-grained weather observations across both space and time. The authors analyze more than 870,000 terminal-hours of minute-level telemetry from 1,292 Starlink terminals across the contiguous US, joining it spatially with high-resolution weather data and running time-aligned correlation analysis of key KPIs — ping latency, drop rate, and signal quality.

The headline finding is that more than 55% of affected terminals experienced substantial degradation during severe-weather events, with outages ranging from minutes to hours. Because the analysis is geospatial and minute-resolution, it can localize *where* and *when* degradation tracks specific weather phenomena rather than reporting aggregate availability. This is the first large-scale linkage of LEO performance to granular weather data at this resolution.

## Summary (ZH)
本文给出首个大陆尺度的实证研究，在空间与时间两个维度上将 LEO 卫星互联网性能与细粒度天气观测相关联。作者分析了美国本土 1,292 个 Starlink 终端、超过 87 万终端小时的分钟级遥测数据，与高分辨率天气数据做空间联接，并对关键 KPI（ping 时延、掉线率、信号质量）做时间对齐的相关分析。

核心发现是：在恶劣天气事件期间，超过 55% 的受影响终端经历显著性能下降，中断时长从数分钟到数小时不等。由于分析是地理空间且分钟级分辨率的，它能定位性能下降在*何处、何时*与特定天气现象相吻合，而非仅报告聚合可用性。这是首个在该分辨率下将 LEO 性能与细粒度天气数据大规模关联的工作。

## Key technical points (EN)
- **Dataset:** >870,000 terminal-hours, minute-level telemetry, 1,292 Starlink terminals, contiguous US.
- **Method:** spatial join with high-resolution weather data + time-aligned KPI correlation (latency, drop rate, signal quality).
- **Finding:** >55% of affected terminals saw substantial degradation in severe weather; outages minutes-to-hours.
- **Novelty:** first continental-scale, minute-resolution geospatial weather-vs-LEO-performance study.

## Key technical points (ZH)
- **数据集：** >87 万终端小时、分钟级遥测、1,292 个 Starlink 终端、美国本土。
- **方法：** 与高分辨率天气数据空间联接 + 时间对齐的 KPI 相关（时延、掉线率、信号质量）。
- **发现：** 恶劣天气下 >55% 受影响终端显著降级；中断数分钟至数小时。
- **新意：** 首个大陆尺度、分钟分辨率的天气-LEO 性能地理空间研究。

## Why it matters / what's new (EN)
Most LEO-performance entries in the KB are capacity/architecture studies or vendor measurements of throughput; this is a reliability/availability study tying degradation to an exogenous physical driver (weather) at scale. It matters for SLA design, terminal siting, and for any direct-to-cell or critical-comms use that assumes LEO availability — the 55%-of-affected-terminals figure quantifies a weather-driven tail that aggregate uptime numbers hide. The geospatial telemetry-join methodology is reusable for other constellations as their telemetry becomes available.

## Why it matters / what's new (ZH)
KB 中多数 LEO 性能条目是容量/架构研究或厂商吞吐实测；本文是可靠性/可用性研究，将性能下降在大规模上与外生物理因素（天气）相联系。它对 SLA 设计、终端选址，以及任何假设 LEO 可用性的直连蜂窝或关键通信用途都重要——"55% 受影响终端"的数字量化了聚合在线率所掩盖的天气驱动尾部。该地理空间遥测联接方法学可在其他星座遥测可得时复用。
