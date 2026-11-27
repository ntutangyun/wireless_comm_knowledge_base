---
id: 2026-11-27_arxiv-occupancy-domain-over-the-air-computation-silence-sum-non-coherent
date_published: 2026-09-10
date_found: 2026-11-27
technology: edge-ai
type: academic-paper
title_en: "Occupancy-Domain Over-the-Air Computation (sum carried by the silence of shared resources)"
title_zh: "占用域空中计算（由共享资源的静默承载求和）"
url: "https://arxiv.org/abs/2609.11289"
source_quality: abstract_only
topics: [over-the-air-computation, non-coherent-aggregation, occupancy-domain-computation, maximum-likelihood-estimation]
topic_primary: over-the-air-computation
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

The paper (author Seyed Mohammad Azimi-Abarghouyi) starts from the problem that coherent over-the-air computation (AirComp) needs channel state information, phase alignment and power control, while non-coherent energy methods remain affected by fading. It introduces occupancy-domain computation (ODC), whose observable is neither a received amplitude nor an energy: the sum is carried by the silence of the shared resources. With exponential Bernoulli activation, individual silence probabilities multiply, and the server recovers the sum from the idle fraction using binary activity decisions alone, so that, once an activation is detected, the amplitude that produced it does not enter the estimate.

The author characterises the maximum-likelihood estimator, the optimal load and a scale-integrated Fisher-information bound for non-adaptive operation over unknown dynamic ranges. A second scheme, balanced occupancy computation (BOC), has each device form a data-dependent quota of random burst placements, removing the random placement-count fluctuation of Bernoulli activation.

Link: a simulated wireless multiple-access channel with M shared resource elements; the paper analyses unknown-scale operation, finite-frame deviations and heterogeneous detection misses, and simulations compare ODC/BOC with affine non-coherent energy aggregation and REED. No over-the-air measurement is stated in the abstract, which is the only part read for this entry. The computation is general data aggregation (non-AI).

## Summary (ZH)

论文（作者 Seyed Mohammad Azimi-Abarghouyi）出发点是：相干空中计算（AirComp）需要信道状态信息、相位对齐和功率控制，而非相干能量方法仍受衰落影响。论文提出占用域计算（ODC），其观测量既不是接收幅度也不是能量：求和由共享资源的静默承载。采用指数型伯努利激活时，各自的静默概率相乘，服务器仅凭二值活动判决即可由空闲比例恢复求和，因此一旦检测到激活，产生该激活的幅度便不进入估计。

作者刻画了最大似然估计器、最优负载，以及在未知动态范围下非自适应运行的尺度积分 Fisher 信息界。第二种方案平衡占用计算（BOC）让每个设备形成依赖数据的随机突发放置配额，消除伯努利激活的随机放置数波动。

所经链路：仿真的无线多址信道，含 M 个共享资源单元；论文分析了未知尺度运行、有限帧偏差和异构检测漏检，并通过仿真将 ODC/BOC 与仿射非相干能量聚合和 REED 比较。摘要未说明空口测量，而本条目仅阅读了摘要。所计算的是通用数据聚合（非 AI）。

## Key technical points (EN)

- Under ideal detection, the leading-order asymptotic root-mean-square error of BOC is no larger than that of Bernoulli ODC at any load, and approaches 1/sqrt(2M) when the number of devices is small relative to the number of resource elements M.
- The estimate uses binary activity decisions only; once a burst is detected, its received amplitude does not enter the estimate.
- Reported evidence is theory plus simulation; the abstract does not give numerical gains over the baselines.

## Key technical points (ZH)

- 在理想检测下，BOC 的主阶渐近均方根误差在任何负载下都不大于伯努利 ODC，并且当设备数相对资源单元数 M 较少时趋近 1/sqrt(2M)。
- 估计仅使用二值活动判决；一旦检测到突发，其接收幅度不进入估计。
- 报告的证据为理论加仿真；摘要未给出相对基线的数值增益。

## Why it matters / what's new (EN)

It proposes a different observable for AirComp, the idle fraction of shared resources, which the author contrasts with the CSI, phase-alignment and power-control needs of coherent AirComp and the fading sensitivity of non-coherent energy methods. This is general (non-AI) aggregation judged from the abstract; its practicality over real radios is not shown.

## Why it matters / what's new (ZH)

它为 AirComp 提出了另一种观测量——共享资源的空闲比例，作者将其与相干 AirComp 对 CSI、相位对齐和功率控制的需求以及非相干能量方法对衰落的敏感性相对照。依据摘要判断，这属于通用（非 AI）聚合；其在真实无线电上的实用性尚未显示。
