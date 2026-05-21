---
id: 2026-05-21_arxiv-leo-mmwave-subthz-relay
date_published: 2026-05-03
date_found: 2026-05-21
type: academic-paper
title_en: "LEO Satellite Relay Networks with mmWave and sub-THz Inter-Satellite Links"
title_zh: "基于毫米波与亚毫米波星间链路的低轨卫星中继网络"
url: "https://arxiv.org/abs/2605.02061"
source_quality: full
topics: [LEO, mmWave, sub-THz, inter-satellite-links, space-economy]
topic_primary: leo-constellations
topics_secondary: [ntn]
technology: satellite
novelty_score: 3
---

## Summary (EN)
Aliaga, Petrov, Jornet et al. analyze an alternative LEO space relay architecture where high-rate mmWave and sub-THz inter-satellite links (ISLs) form a satellite-based relay backbone for space vehicles (CubeSats, space data centers), replacing the bottlenecked ground-station relay model. Current Ku-band ground relay networks provide only minutes-per-day of contact time with a CubeSat at LEO.

The authors develop a comprehensive mathematical framework that jointly incorporates time-variant orbital dynamics and mmWave/sub-THz link characteristics, then derive key performance indicators: contact probability, channel capacity, and energy efficiency. Key finding: with only ten LEO relay satellites equipped with mmWave/sub-THz ISLs, continuous 24/7 connectivity becomes achievable — a fundamental bound on download capacity is identified and shown to improve by several orders of magnitude compared to existing ground-station networks. The results are cross-verified by computer simulation.

## Summary (ZH)
Aliaga、Petrov、Jornet 等人分析了一种替代性 LEO 空间中继架构，以高速毫米波与亚毫米波星间链路构建面向空间飞行器（立方星、空间数据中心）的卫星中继骨干网，替代瓶颈化的地面站中继模式。现有 Ku 波段地面中继网络对 LEO 立方星仅能提供每日数分钟的接触时间。

作者开发了联合纳入时变轨道动力学与毫米波/亚毫米波链路特性的综合数学框架，推导出关键性能指标：接触概率、信道容量和能效。关键发现：仅需十颗配备毫米波/亚毫米波 ISL 的 LEO 中继卫星即可实现 24/7 持续连接——识别出下载容量的基本界限，并证明其相对现有地面站网络可提升数个数量级。结果经计算机仿真交叉验证。

## Key technical points (EN)
- **mmWave/sub-THz ISL backbone**: Replaces ground-station relay with space-based relay using mmWave (30–300 GHz) and sub-THz (>100 GHz) inter-satellite links
- **Joint orbital-dynamics + link model**: Mathematical framework couples time-variant orbital mechanics with directional mmWave/sub-THz link budgets
- **Ten-satellite threshold**: Continuous 24/7 LEO connectivity becomes feasible with only 10 relay satellites
- **Orders-of-magnitude improvement**: Contact probability and capacity several orders above Ku-band ground relay baseline
- **Energy-efficiency analysis**: Includes power budget for space-vehicle terminals

## Key technical points (ZH)
- **毫米波/亚毫米波 ISL 骨干网**：以基于空间的毫米波（30–300 GHz）与亚毫米波（>100 GHz）星间链路替代地面站中继
- **轨道动力学与链路联合模型**：数学框架耦合时变轨道力学与定向毫米波/亚毫米波链路预算
- **十星阈值**：仅需 10 颗中继卫星即可实现 LEO 24/7 持续连接
- **数量级提升**：接触概率与容量相对 Ku 波段地面中继基线提升数个数量级
- **能效分析**：包含空间飞行器终端的功率预算

## Why it matters / what's new (EN)
This paper addresses a gap in the LEO constellation literature: most prior work focuses on satellite-to-ground links for consumer broadband (Starlink, Kuiper), while this targets satellite-to-satellite relay for space users (CubeSats, orbital data centers). The finding that only 10 relay satellites enable 24/7 coverage is practically significant — it makes a commercial space relay network look feasible at small scale. As the space economy expands (orbital data centers, in-space manufacturing), the demand for space-to-space connectivity grows, and mmWave/sub-THz ISLs are the enabling technology.
