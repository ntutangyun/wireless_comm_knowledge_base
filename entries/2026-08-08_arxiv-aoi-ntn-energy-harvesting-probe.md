---
id: 2026-08-08_arxiv-aoi-ntn-energy-harvesting-probe
date_published: 2026-08-03
date_found: 2026-08-08
type: academic-paper
technology: satellite
title_en: "Age of Information in Non-Terrestrial Networks with Energy Harvesting"
title_zh: "具备能量收集的非地面网络（NTN）中的信息年龄（AoI）分析"
url: "https://arxiv.org/abs/2608.02485"
source_quality: abstract_only
topics: [LEO, NTN, AoI, energy-harvesting, sat-IoT, stochastic-geometry]
topic_primary: sat-iot
topics_secondary: [leo-constellations, sat-ai]
novelty_score: 2
---

## Summary (EN)

Zhao, Pappas, Jin, and Yang (submitted 3 Aug 2026) analyze the freshness of status updates — Age of Information (AoI) — for energy-harvesting IoT sources reporting through a LEO satellite constellation, where two intermittent processes collide: the source's harvested-energy buffer fills and drains, while satellite visibility switches on and off with orbital motion. Blindly transmitting is wasteful because much of the harvested energy is spent while no satellite is overhead.

Their proposed mechanism is a **probe-before-transmission strategy**: the source spends one energy unit to sense whether a satellite is currently reachable, and only transmits the status update if the probe succeeds. This deliberately couples the energy-buffer dynamics to the connectivity cycle so that energy is not burned during off periods. The analysis combines **spherical stochastic geometry** (to model satellite visibility as a function of orbital/constellation geometry) with **semi-Markov analysis** (to model the joint energy/connectivity state), and adds a lower-complexity approximation that replaces instantaneous connectivity with long-term on-state probabilities when energy constraints are weak or connectivity is highly intermittent.

The headline finding is that probing substantially reduces AoI relative to blind transmission, and the gain is largest exactly where it matters most — under **sparse satellite deployment** or **strict decoding requirements**, i.e. when connectivity windows are rare and precious.

## Summary (ZH)

Zhao、Pappas、Jin 与 Yang（2026 年 8 月 3 日提交）分析了通过 LEO 卫星星座上报的能量收集型 IoT 源的状态更新新鲜度——信息年龄（AoI）。此处两个间歇过程相互交织：源的收集能量缓冲区充放电，而卫星可见性随轨道运动开关切换。盲目发送是浪费的，因为大量收集到的能量都花在没有卫星过顶的时段。

他们提出的机制是**先探测再发送策略**：源花费一个能量单位去感知当前是否有可达卫星，只有探测成功时才发送状态更新。这有意地把能量缓冲区动态与连通周期耦合起来，从而避免在"关闭"时段烧掉能量。分析结合**球面随机几何**（把卫星可见性建模为轨道/星座几何的函数）与**半马尔可夫分析**（建模能量/连通的联合状态），并给出一个低复杂度近似：当能量约束较弱或连通高度间歇时，用长期"开启"概率替代瞬时连通状态。

核心结论是：相较盲发，探测显著降低 AoI，而且增益恰在最要紧处最大——在**卫星部署稀疏**或**译码要求严格**时，即连通窗口稀少而宝贵之际。

## Key technical points (EN)

- **Coupled intermittency** — jointly models the harvested-energy buffer and orbital on/off satellite visibility, which prior AoI work usually treats separately.
- **Probe-before-transmit** — spend one energy unit to sense satellite reachability; transmit only on a successful probe, avoiding energy waste during connectivity gaps.
- **Analytical toolkit** — spherical stochastic geometry for visibility + semi-Markov chain for the joint energy/connectivity state; plus a long-term-probability approximation for tractability.
- **Result** — probing substantially cuts AoI vs blind transmission, with the largest gains under sparse constellations or strict decoding requirements.

## Key technical points (ZH)

- **耦合的间歇性** —— 联合建模收集能量缓冲区与轨道开/关卫星可见性，而既往 AoI 工作通常分开处理。
- **先探测再发送** —— 花一个能量单位感知卫星可达性；仅在探测成功时发送，避免连通间隙的能量浪费。
- **分析工具** —— 用球面随机几何刻画可见性 + 半马尔可夫链刻画能量/连通联合状态；并给出长期概率近似以便求解。
- **结果** —— 探测相较盲发显著降低 AoI，在稀疏星座或严格译码要求下增益最大。

## Why it matters / what's new (EN)

Direct-to-device and satellite-IoT deployments assume tiny, energy-harvesting endpoints that must report through a constellation whose coverage blinks with orbital motion — exactly the regime this paper models. Most AoI analyses assume either always-on connectivity or a fixed energy source; coupling the two intermittencies and showing that a cheap one-unit probe beats blind transmission is a concrete, quantified design rule for the sat-IoT bin. It complements the KB's LEO scheduling/routing entries by working at the energy-and-timeliness layer of the individual sensor rather than the network-routing layer, and gives constellation designers a lever (probe cost vs update freshness) that sharpens under exactly the sparse-coverage conditions early constellations face.

## Why it matters / what's new (ZH)

直连设备与卫星 IoT 部署假设终端是极小的能量收集节点，必须通过覆盖随轨道运动闪烁的星座上报——正是本文所建模的场景。多数 AoI 分析要么假设常在连通，要么假设固定能源；把两种间歇耦合起来、并证明廉价的一单位探测优于盲发，为 sat-iot 分箱给出了具体、量化的设计准则。它在单个传感器的"能量—时效"层面工作，而非网络路由层面，与 KB 的 LEO 调度/路由条目互补，并给星座设计者一个杠杆（探测代价对更新新鲜度），而该杠杆恰在早期星座面临的稀疏覆盖条件下更为锋利。
