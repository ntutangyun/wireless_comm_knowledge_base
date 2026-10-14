---
id: 2026-10-14_arxiv-walker-constellation-routing-table-periodicity
date_published: 2026-09-29
date_found: 2026-10-14
technology: satellite
type: academic-paper
title_en: "On the Lack of Periodicity of Walker Satellite Constellation Routing Tables"
title_zh: "Walker 卫星星座路由表的非周期性"
url: "https://arxiv.org/abs/2609.36566"
source_quality: full
topics: [Walker-constellation, routing-table, torus-flow, ergodicity, periodicity]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 4
---

## Summary (EN)

Choi and Baccelli analyze routing over a Delta Walker constellation, with fixed ground relays, as a dynamical system. In an Earth-fixed frame the satellite configuration evolves as a function of a translation (linear flow) on a torus. The paper considers any deterministic, time-invariant routing rule that depends only on the constellation geometry at a given time, and the associated routing table: for every source-destination pair, a route through satellites and relays, with angular information on the next hop at each step (needed for beamforming).

The main result is that the routing table inherits the dichotomy of the torus flow. When the ratio of Earth-spin and satellite angular speeds is rational, the routing-table process is periodic with the same period as the constellation. When it is irrational, the table is non-periodic but admits ergodic long-run averages computable as ensemble averages with respect to an explicit invariant measure. Simulations with mixed satellite-gateway greedy routing illustrate the temporal and spectral properties of the routing-table time series. The paper uses ergodic averages to compare the time-varying round-trip time between two distant cities over the constellation (greedy routing) with the constant round-trip time of terrestrial fiber. The paper is submitted to an IEEE journal.

## Summary (ZH)

Choi 和 Baccelli 将含固定地面中继的 Delta Walker 星座上的路由视为动力系统进行分析。在地固坐标系中，卫星构型的演化可表示为环面（torus）上平移（线性流）的函数。论文考虑任何仅依赖当前时刻星座几何的确定性、时不变路由规则，及其路由表：对每一对源-目的节点，给出经由卫星和中继的路由，并给出每一步下一跳的角度信息（波束成形所需）。

主要结论：路由表继承了环面流的二分性。当地球自转与卫星角速度之比为有理数时，路由表过程与星座同周期；为无理数时，路由表非周期，但存在遍历的长期平均，可按显式不变测度计算为系综平均。采用混合卫星-网关贪心路由的仿真展示了路由表时间序列的时域与频谱特性。论文利用遍历平均，比较了经星座（贪心路由）连接两座相距遥远城市时随时间变化的往返时延与地面光纤的恒定往返时延。论文已投稿至 IEEE 期刊。

## Key technical points (EN)

- **Rational ratio**: routing table periodic with the constellation's period; routes and beamforming schedules can in principle be computed once and replayed.
- **Irrational ratio**: table never repeats; any finite predictive set of routing instructions is valid only for a bounded duration.
- **Long-run statistics** can define metrics oblivious to temporal fluctuations and initial conditions.
- The authors list open questions: how often predictive data must be recomputed and broadcast to routers, the frequency of discontinuities (handovers) on a route, and extension to multi-altitude or mixed delta/star Walker constellations.
- Prior work in snapshot and virtual-node routing is described as resting on an assumed exact periodicity of the topology that is not itself examined.

## Key technical points (ZH)

- **有理比值**：路由表与星座同周期；原则上路由和波束成形调度可一次性计算并反复回放。
- **无理比值**：路由表永不重复；任何有限的预测路由指令只在有限时间内有效。
- **长期统计量**可用于定义对时间波动和初始条件不敏感的指标。
- 作者列出开放问题：预测数据需多久重新计算并广播给路由器、路由上不连续点（切换）的频率，以及扩展到多高度或混合 delta/star Walker 星座。
- 作者指出，已有快照式与虚拟节点式路由工作的离散时间机制依赖于未经检验的拓扑精确周期性假设。

## Why it matters / what's new (EN)

Gives a mathematical characterization of when precomputed LEO routing tables can repeat, and raises, as an open question, how often precomputed routing and beamforming data must be refreshed and distributed.

## Why it matters / what's new (ZH)

从数学上刻画了预先计算的低轨路由表何时可重复，并将预计算路由与波束成形数据需多久更新和分发列为开放问题。

## Images

None.
