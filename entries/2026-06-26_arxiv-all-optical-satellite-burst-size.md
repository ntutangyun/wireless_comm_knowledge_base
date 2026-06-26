---
id: 2026-06-26_arxiv-all-optical-satellite-burst-size
date_published: 2026-06-25
date_found: 2026-06-26
type: academic-paper
technology: satellite
title_en: "Maximum Achievable Burst Size in All-Optical Satellite Networks"
title_zh: "全光卫星网络中可达到的最大突发大小"
url: "https://arxiv.org/abs/2606.27050"
source_quality: abstract_only
topics: [optical-burst-switching, all-optical, inter-satellite-link, WDM, LEO, free-space-optics]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 2
---

## Summary (EN)
Roethig, Mouammar, Brasileiro, Hosseini, and Jukan (TU Braunschweig; submitted 25 Jun 2026) analyze the maximum burst size achievable in **all-optical satellite networks** using Optical Burst Switching (OBS) over WDM, across LEO constellations of differing altitude. As LEO constellations move from RF/regenerative inter-satellite links toward all-optical (free-space-optical) backbones, OBS becomes attractive because it avoids per-hop optical-electrical-optical conversion — but the burst size is bounded by the offset-time / propagation-delay budget, which on satellite links is dominated by orbital geometry rather than fiber length.

The headline result: with a **100 Gbps uplink and a WDM-based OBS network, achievable burst sizes reach up to 500 MB in high-altitude LEO constellations and 600 MB in low-altitude LEO constellations**. The altitude dependence reflects the interplay between propagation delay (longer at higher altitude) and the OBS control/offset timing the network can sustain — a constellation-design lever that ties physical-layer optics to the achievable burst-transport granularity.

This is a concrete, satellite-specific contribution that quantifies an OBS design limit as a function of LEO altitude, rather than a generic optical-networking analysis. It opens an optical-burst-switching thread in the LEO-constellation bin, distinct from the RF inter-satellite-link routing work (e.g. the 2026-06-23 Walker-Delta ISL path-selection entry).

## Summary (ZH)
Roethig、Mouammar、Brasileiro、Hosseini、Jukan（布伦瑞克工业大学，2026 年 6 月 25 日提交）分析了在不同高度 LEO 星座中，基于 WDM 的光突发交换（OBS）在**全光卫星网络**中可达到的最大突发大小。随着 LEO 星座从射频/再生式星间链路转向全光（自由空间光）骨干，OBS 因避免逐跳的光-电-光转换而具吸引力——但突发大小受偏置时间/传播时延预算限制，而在卫星链路上该预算由轨道几何而非光纤长度主导。

核心结果：在 **100 Gbps 上行与基于 WDM 的 OBS 网络下，高轨 LEO 星座可达约 500 MB 突发，低轨 LEO 星座可达约 600 MB**。高度依赖性反映传播时延（高轨更长）与网络可维持的 OBS 控制/偏置时序之间的相互作用——这是一个将物理层光学与可达突发传输粒度联系起来的星座设计杠杆。

这是一项具体的、面向卫星的贡献，将 OBS 设计极限量化为 LEO 高度的函数，而非通用光网络分析。它在 leo-constellations 分类中开启了光突发交换线索，区别于射频星间链路路由工作（如 2026-06-23 的 Walker-Delta 星间路径选择条目）。

## Key technical points (EN)
- All-optical satellite backbone via WDM Optical Burst Switching (OBS), avoiding per-hop O-E-O conversion.
- Burst size bounded by offset-time / propagation-delay budget, which on satellite links is set by orbital geometry.
- Result: 100 Gbps uplink → up to **500 MB burst (high-altitude LEO)**, **600 MB (low-altitude LEO)**.
- Altitude-dependent limit = a constellation-design lever linking PHY optics to burst-transport granularity.

## Key technical points (ZH)
- 经 WDM 光突发交换（OBS）的全光卫星骨干，避免逐跳 O-E-O 转换。
- 突发大小受偏置时间/传播时延预算限制，卫星链路上该预算由轨道几何决定。
- 结果：100 Gbps 上行 → 高轨 LEO 约 **500 MB 突发**、低轨 LEO 约 **600 MB**。
- 高度依赖的极限 = 将物理层光学与突发传输粒度联系起来的星座设计杠杆。

## Why it matters / what's new (EN)
The LEO-constellation bin has RF-ISL routing and capacity entries but no optical-burst-switching analysis; this paper adds that axis with a clean, altitude-parameterized burst-size result. As operators move to optical ISLs, the OBS burst-size limit is a practical design constraint for how the all-optical backbone aggregates and forwards traffic — worth tracking alongside the constellation routing/churn trade-offs already in the KB.

## Why it matters / what's new (ZH)
leo-constellations 分类已有射频星间路由与容量条目，但没有光突发交换分析；本文以清晰的、按高度参数化的突发大小结果补上该维度。随着运营商转向光学星间链路，OBS 突发大小极限是全光骨干如何聚合与转发流量的实际设计约束——值得与 KB 中已有的星座路由/churn 权衡一并跟踪。
