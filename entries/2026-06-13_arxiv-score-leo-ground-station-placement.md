---
id: 2026-06-13_arxiv-score-leo-ground-station-placement
date_published: 2026-06-10
date_found: 2026-06-13
technology: satellite
type: academic-paper
title_en: "Free-Placement Optimization of Ground Station Locations for Low-Earth Orbit Satellites"
title_zh: "低轨卫星地面站位置的自由布点优化"
url: "https://arxiv.org/abs/2606.12667"
source_quality: full
topics: [LEO, ground-station, GSaaS, downlink, placement-optimization, gradient-free, Walker-Star]
topic_primary: leo-constellations
topics_secondary: [sat-ai]
novelty_score: 3
---

## Summary (EN)

This paper from Mykel Kochenderfer's group at Stanford (Grace Ra Kim, Duncan Eddy, Vedant Srinivas, Mykel J. Kochenderfer; to appear in the Journal of Aerospace Information Systems) addresses a practical bottleneck for LEO satellite operators: where to put ground stations. Modern LEO Earth-observation satellites generate enormous data volumes — some 80+ terabytes daily — but each pass offers only a 3–10 minute visibility window, so the placement of the downlink ground network directly caps how much of that data can actually be retrieved. The authors formulate this as a continuous **free-placement** problem (choose any latitude/longitude on Earth) and contrast it with conventional **fixed-site selection** (pick from existing GSaaS provider teleports).

Their method, **SCORE (Sequential Cyclic Optimization via Refinement & Evaluation)**, is a two-phase gradient-free optimizer. Phase 1 (sequential coordinate selection) greedily adds stations one at a time, each placed to maximise total downlink given the stations already chosen, until the network reaches the target size. Phase 2 (cyclic refinement) then walks through each station, temporarily removes it, and re-optimises its location with the others fixed, repeating until a full cycle yields no improvement. Individual coordinate placements use Nelder–Mead or Powell's method, decomposing the high-dimensional, non-convex landscape into tractable sub-problems. The objective maximises total reliably-downlinked data over the mission, with quadratic penalties for ocean placement, minimum inter-station separation, and distance from existing power/fibre infrastructure (within 50 km of population centres), plus a contact-scheduling layer that enforces single-antenna, non-overlapping contact windows.

Validated on two real commercial Earth-observation constellations (Capella Space's 5 satellites, ICEYE's 34 sun-synchronous satellites) plus a synthetic Walker-Star constellation, using real teleport locations from KSAT and the World Teleport Association: SCORE needs up to **5× fewer function evaluations** than differential evolution (≈4,100 vs ≈17,400 for a 4-sat/4-station case) while delivering up to **13% better downlink**. Unconstrained free placement beats fixed-site selection by **8–15%** for the high-inclination ICEYE constellation; even when restricted to placements near existing infrastructure, SCORE retains **over 92%** of that unconstrained advantage. The optimisation landscape has many near-optimal layouts, implying that broad spatial patterns — not exact coordinates — drive performance.

## Summary (ZH)

本文来自斯坦福 Mykel Kochenderfer 团队（Grace Ra Kim、Duncan Eddy、Vedant Srinivas、Mykel J. Kochenderfer；将发表于 Journal of Aerospace Information Systems），研究 LEO 卫星运营商的实际瓶颈：地面站布点。现代 LEO 对地观测卫星产生海量数据——部分每天 80+ TB——但每次过境仅有 3–10 分钟可见窗口，因此下行地面网络的布点直接决定能取回多少数据。作者将其建模为连续的**自由布点**问题（在地球上任意经纬度选址），并与传统的**固定站点选择**（从现有 GSaaS 运营商地面站中挑选）对比。

其方法 **SCORE（顺序循环优化—精化与评估）**为两阶段无梯度优化。阶段一（顺序坐标选择）逐个贪心添加站点，每个站点在已选站点基础上最大化总下行，直至达到目标规模。阶段二（循环精化）逐个移除站点并在其余固定时重新优化其位置，直到整轮无改进为止。单点选址使用 Nelder–Mead 或 Powell 方法，将高维非凸问题分解为可处理子问题。目标函数最大化任务期内可靠下行的总数据量，对海洋选址、站间最小间隔、距现有电力/光纤基础设施（人口中心 50 km 内）的距离施加二次惩罚，并由接触调度层强制单天线、不重叠的接触窗口。

在两个真实商业对地观测星座（Capella Space 5 星、ICEYE 34 颗太阳同步星）加合成 Walker-Star 星座上验证，使用 KSAT 与世界地面站协会的真实地面站位置：SCORE 比差分进化少用至多 **5 倍函数评估**（4 星/4 站约 4,100 对约 17,400），同时下行性能高出至多 **13%**。对高倾角 ICEYE 星座，无约束自由布点比固定站点选择高 **8–15%**；即便限制在现有基础设施附近，SCORE 仍保留该无约束优势的 **92% 以上**。优化景观存在多个近优布局，意味着驱动性能的是整体空间格局而非精确坐标。

## Key technical points (EN)

- **Problem:** free-placement (continuous lat/lon) ground-station siting to maximise LEO downlink, vs fixed-site GSaaS selection; passes are only 3–10 min, sats generate 80+ TB/day.
- **Method:** SCORE — two-phase gradient-free; Phase 1 sequential greedy add, Phase 2 cyclic remove-and-reoptimise; Nelder–Mead/Powell per coordinate.
- **Constraints:** quadratic penalties for ocean placement, min separation, infra-proximity (≤50 km); single-antenna non-overlapping contact scheduling.
- **Efficiency:** up to 5× fewer evaluations than differential evolution (~4,100 vs ~17,400), linear vs super-linear growth.
- **Quality:** up to 13% better downlink than DE; 8–15% over fixed-site for ICEYE; 92%+ of gain retained under infrastructure constraints.
- **Insight:** many near-optimal configurations — spatial pattern, not exact coordinates, drives throughput.

## Key technical points (ZH)

- **问题：** 自由布点（连续经纬度）地面站选址以最大化 LEO 下行，对比固定站点 GSaaS 选择；过境仅 3–10 分钟，卫星日产 80+ TB。
- **方法：** SCORE——两阶段无梯度；阶段一顺序贪心添加，阶段二循环移除并重优化；每坐标用 Nelder–Mead/Powell。
- **约束：** 对海洋选址、最小间隔、基础设施邻近（≤50 km）施加二次惩罚；单天线不重叠接触调度。
- **效率：** 比差分进化少用至多 5 倍评估（约 4,100 对约 17,400），线性 vs 超线性增长。
- **质量：** 下行比 DE 高至多 13%；ICEYE 比固定站点高 8–15%；约束下仍保留 92%+ 增益。
- **洞见：** 存在多个近优布局——驱动吞吐的是空间格局而非精确坐标。

## Why it matters / what's new (EN)

This is the KB's first ground-station-network optimisation entry — a distinct sub-problem from the constellation-side handover/RB-allocation papers already in the leo-constellations bin. As LEO EO constellations scale (ICEYE, Capella, and the Starlink/Kuiper data-relay ambitions), the downlink bottleneck shifts to the ground segment, and a gradient-free method that beats differential evolution at 5× lower cost is directly useful for GSaaS planning. The 92%-retention-under-infrastructure-constraints result is the operationally important finding: free-placement gains survive the realism penalty of needing power and fibre.

## Why it matters / what's new (ZH)

这是 KB 中首个地面站网络优化条目——与 leo-constellations 分箱中已有的星座侧切换/RB 分配论文是不同的子问题。随着 LEO 对地观测星座扩张（ICEYE、Capella，以及 Starlink/Kuiper 的数据中继野心），下行瓶颈转向地面段，而以 5 倍更低成本胜过差分进化的无梯度方法对 GSaaS 规划直接有用。约束下保留 92% 增益的结果是运营上重要的发现：自由布点的收益在需要电力与光纤的现实惩罚下仍然存续。

## Images
![SCORE vs differential evolution: computation and performance | SCORE 与差分进化：计算量与性能](https://arxiv.org/html/2606.12667v1/x4.png)
![Full constellation performance — Capella and ICEYE | 全星座性能——Capella 与 ICEYE](https://arxiv.org/html/2606.12667v1/x6.png)
![High-performing ground station layout | 高性能地面站布局](https://arxiv.org/html/2606.12667v1/x7.png)
