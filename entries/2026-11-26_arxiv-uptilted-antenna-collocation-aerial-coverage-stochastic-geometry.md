---
id: 2026-11-26_arxiv-uptilted-antenna-collocation-aerial-coverage-stochastic-geometry
date_published: 2026-11-21
date_found: 2026-11-26
type: academic-paper
technology: cellular
title_en: "Merits of Collocating Uptilted Antennas on Terrestrial Base Stations for Aerial Coverage"
title_zh: "在地面基站上并置上倾天线以改善空中覆盖的收益"
url: "https://arxiv.org/abs/2611.28887"
source_quality: full
topics: [UAV-UE, aerial-coverage, uptilted-antenna, downtilt, ground-reflection, stochastic-geometry, coverage-probability, cellular-connected-UAV]
topic_primary: 5g-nr
topics_secondary: [4g-lte]
novelty_score: 3
---

## Summary (EN)

Nesrine Cherif and Qurrat-Ul-Ain Nadeem (New York University Abu Dhabi) examine how cellular networks built for ground users can serve UAV user equipment (UAV-UE). Conventional base stations use downtilted antennas (dt-BSs) that reach aerial users only through weak sidelobes and expose them to ground-reflection (GR) interference and sidelobe interference from non-serving cells. The authors propose a hybrid architecture that adds uptilted antenna arrays on a fraction of existing dt-BS towers (ut-BSs) that serve UAV-UE exclusively, so ground users are affected little.

Using stochastic geometry with realistic antenna radiation patterns and probabilistic LoS/NLoS links, they derive the UAV-UE coverage probability including interference from dt-BSs, non-serving ut-BSs and the GR of the dt-BS mainlobe. They then formulate an optimization over ut-BS overlay percentage, UAV altitude and ut-BS transmit power that maximizes UAV-UE coverage subject to a bound on ground-user degradation, and report that a small ut-BS density gives significant coverage gains.

## Summary (ZH)

Nesrine Cherif 与 Qurrat-Ul-Ain Nadeem（阿布扎比纽约大学）研究面向地面用户建设的蜂窝网络如何服务无人机用户设备（UAV-UE）。传统基站采用下倾天线（dt-BS），只能通过较弱的旁瓣覆盖空中用户，并使其受到地面反射（GR）干扰及非服务小区的旁瓣干扰。作者提出混合架构：在一部分现有 dt-BS 塔上加装上倾天线阵列（ut-BS），专门服务 UAV-UE，对地面用户影响较小。

论文采用随机几何，结合真实天线辐射图与概率 LoS/NLoS 链路，推导 UAV-UE 覆盖概率，计入来自 dt-BS、非服务 ut-BS 的干扰以及 dt-BS 主瓣的 GR 干扰；进而构造以 ut-BS 覆盖比例、无人机高度与 ut-BS 发射功率为变量的优化问题，在地面用户性能下降受限的条件下最大化 UAV-UE 覆盖概率，并报告较小的 ut-BS 密度即可带来显著覆盖增益。

## Key technical points (EN)

- Motivation cited from 3GPP TR 36.777: sidelobe gain of downtilted antennas is limited at higher elevations and aerial users typically see high interference. The paper compares against prior designs that convert a subset of dt-BSs into uptilted BSs (rather than adding antennas) and against reliance on dt-BS sidelobes.
- Interference model includes GR of the dt-BS mainlobe, which the authors say prior work often neglects; the analytical coverage expression is checked against Monte-Carlo simulation (good agreement reported in the paper's Fig. 4).
- Simulation parameters (Table VIII): carrier 2 GHz, dt-BS density 10 per km^2 and ut-BS density 2 per km^2 in the baseline, dt-BS and ut-BS transmit power 20 W and 10 W, 16-element ut array, single-antenna UAV-UE, SIR threshold β = −5 dB.
- Reported findings: collocating directional uptilted arrays on 20% of dt-BSs outperforms converting 20% of dt-BSs to uptilted BSs and outperforms relying on dt-BS sidelobes; GR interference is notable at low altitude and diminishes beyond 500 m.
- Under a constraint of at most 5% loss in ground-user coverage, the authors identify an operating point of about 20% overlay, UAV altitude about 500 m and ut-BS power 36 dBm as near-optimal; at 500 m the UAV-UE coverage is maximized around a ground-user degradation allowance of about 13%.

## Key technical points (ZH)

- 动机引用 3GPP TR 36.777：下倾天线在较高仰角的旁瓣增益有限，空中用户通常面临较高干扰。论文对比了将部分 dt-BS 改为上倾基站（而非加装天线）的已有设计，以及依赖 dt-BS 旁瓣的方案。
- 干扰模型包含 dt-BS 主瓣的 GR，作者称已有工作常忽略这一项；解析覆盖概率表达式与蒙特卡洛仿真吻合（论文图 4）。
- 仿真参数（表 VIII）：载频 2 GHz，基线中 dt-BS 密度 10/km^2、ut-BS 密度 2/km^2，dt-BS 与 ut-BS 发射功率分别为 20 W 与 10 W，ut 阵列 16 阵元，UAV-UE 单天线，SIR 门限 β = −5 dB。
- 报告的结论：在 20% 的 dt-BS 上并置定向上倾阵列，优于把 20% 的 dt-BS 改为上倾基站，也优于依赖 dt-BS 旁瓣；GR 干扰在低空明显，在 500 m 以上减弱。
- 在地面用户覆盖损失不超过 5% 的约束下，作者给出约 20% 覆盖比例、无人机高度约 500 m、ut-BS 功率 36 dBm 的近最优工作点；在 500 m 高度，当允许地面用户性能下降约 13% 时 UAV-UE 覆盖最大。

## Why it matters / what's new (EN)

The paper offers an analytical, stochastic-geometry treatment of an add-on antenna approach for aerial users, which an operator could in principle deploy on existing towers; the authors describe it as providing insights for operators considering such collocation. It complements the KB's UAV-in-cellular entries (for example 2026-11-10_arxiv-multilayer-uav-corridor-capacity-5g-nr-macro) with a different lever, antenna tilt overlay, rather than corridor planning. Results are analytical and simulated with idealized PPP deployments; no field measurements are reported.

## Why it matters / what's new (ZH)

论文对面向空中用户的“加装天线”方案给出了解析型随机几何分析，运营商原则上可在现有塔上部署；作者称其可为考虑此类并置的运营商提供参考。它以天线倾角叠加这一不同手段，补充了 KB 中蜂窝网无人机相关条目（如 2026-11-10_arxiv-multilayer-uav-corridor-capacity-5g-nr-macro 的走廊规划）。结果来自解析与仿真，采用理想化的泊松点过程部署，未报告实测。

## Images

None.
