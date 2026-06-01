---
id: 2026-06-01_arxiv-uav-connectivity-cellular-vs-starlink
date_published: 2026-05-26
date_found: 2026-06-01
type: academic-paper
title_en: "A Vertical Look at UAV Connectivity in the Wild: Cellular vs. Starlink, 3D Characterization, and Performance Prediction"
title_zh: "野外环境下无人机连接的垂直视角：蜂窝 vs. Starlink、三维刻画与性能预测"
url: "https://arxiv.org/abs/2605.27755"
source_quality: abstract_only
topics: [Starlink, UAV, LEO, measurement, cellular-comparison]
topic_primary: starlink
topics_secondary: [sat-direct-device]
novelty_score: 2
---

## Summary (EN)
This is a real-world measurement study comparing terrestrial cellular against Starlink for UAVs flying at varying altitudes — a regime where most prior characterisations are simulation-based or ground-bound. The authors ran 10+ flight tests, accumulating 4.5+ hours and 18,000+ samples across three measurement layers: physical signal metrics, multi-cell network topology, and end-to-end application performance.

Headline findings favour Starlink on the wire: 95% of round-trip times below 50 ms (vs cellular's 80% under 150 ms) and 95% of downloads exceeding 25 Mbps (vs only 5 Mbps for cellular). On the cellular side, climbing to 330 m+ improved signal by 15–20 dB through line-of-sight propagation — but that very line-of-sight visibility to many cells **tripled-to-quadrupled the handover rate**, and handovers were asymmetric: 53.5% improved RTT, yet worst-case degradation was double the best-case improvement. So altitude helps the link budget but hurts mobility management.

The paper releases the first open-source dataset with simultaneous, co-located cellular + Starlink measurements for low-altitude drone operations.

## Summary (ZH)
这是一项真实环境测量研究，针对不同高度飞行的无人机比较地面蜂窝与 Starlink——而以往多数刻画基于仿真或限于地面。作者进行了 10+ 次飞行测试，累计 4.5+ 小时、18,000+ 样本，跨三个测量层：物理信号指标、多小区网络拓扑与端到端应用性能。

核心结论在链路层面偏向 Starlink：95% 的往返时延低于 50 ms（蜂窝为 80% 低于 150 ms），95% 的下载超过 25 Mbps（蜂窝仅 5 Mbps）。蜂窝方面，爬升至 330 m 以上经视距传播使信号改善 15–20 dB——但正是这种对众多小区的视距可见性使**切换率增至 3–4 倍**，且切换具有不对称性：53.5% 改善了 RTT，但最坏情况的劣化是最优改善的两倍。即高度有利于链路预算，却损害移动性管理。

论文发布了首个面向低空无人机、蜂窝与 Starlink 同时同址测量的开源数据集。

## Key technical points (EN)
- Real-world: 10+ flights, 4.5+ hours, 18,000+ samples; three layers (PHY signal, multi-cell topology, end-to-end app).
- Starlink: 95% RTT < 50 ms, 95% download > 25 Mbps. Cellular: 80% RTT < 150 ms, downloads ~5 Mbps.
- Cellular at 330 m+: +15–20 dB signal (LoS) but 3–4× handover rate; handovers asymmetric (53.5% improve RTT, worst-case degradation 2× best-case gain).
- First open-source dataset of simultaneous co-located cellular + Starlink for low-altitude drones.

## Key technical points (ZH)
- 真实环境：10+ 次飞行、4.5+ 小时、18,000+ 样本；三层（PHY 信号、多小区拓扑、端到端应用）。
- Starlink：95% RTT < 50 ms，95% 下载 > 25 Mbps。蜂窝：80% RTT < 150 ms，下载约 5 Mbps。
- 蜂窝在 330 m 以上：信号 +15–20 dB（视距）但切换率 3–4 倍；切换不对称（53.5% 改善 RTT，最坏劣化为最优收益的 2 倍）。
- 首个面向低空无人机的蜂窝 + Starlink 同时同址开源数据集。

## Why it matters / what's new (EN)
Adds an aerial, in-the-wild measurement point to the Starlink characterisation literature and quantifies a non-obvious altitude/mobility trade-off for cellular UAV links. The open co-located dataset is a reusable artifact for both the satellite and cellular communities.

## Why it matters / what's new (ZH)
为 Starlink 刻画文献增加了一个空中、真实环境的测量点，并量化了蜂窝无人机链路中一个不直观的高度/移动性权衡。开源的同址数据集对卫星与蜂窝两个社区都是可复用的资产。
