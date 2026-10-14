---
id: 2026-10-14_arxiv-spacenet-multishell-leo-emulation-starlink-validation
date_published: 2026-10-02
date_found: 2026-10-14
technology: satellite
type: academic-paper
title_en: "Beyond Idealized Orbits: Realistic Network Topology and Spatio-Temporal Traffic Emulation for LEO Satellite Constellations"
title_zh: "超越理想化轨道：面向低轨卫星星座的真实网络拓扑与时空流量仿真"
url: "https://arxiv.org/abs/2610.03623"
source_quality: full
topics: [SpaceNet, Mininet, multi-shell, congestion-routing, Starlink, emulation]
topic_primary: leo-constellations
topics_secondary: [starlink]
novelty_score: 3
---

## Summary (EN)

Aryan, Smith, Houck, Chintalapati, Kedrowitsch, Reed, Tripathi and Kenyon extend the SpaceNet research testbed to emulate multi-shell LEO constellations and to compute routes with the existing global web of terrestrial terminals. The testbed is Mininet-based and SDN-supported. The paper lists three contributions: high-fidelity ground-satellite link (GSL) and inter-satellite link (ISL) modeling, scalable generation of multi-shell topologies, and a realistic implementation of congestion distribution with modular congestion-routing schemes driven by spatio-temporal traffic hotspots.

Evaluation emulates the Starlink constellation from TLE data and compares predicted RTT and throughput with real Ping and iPerf measurements between Starlink terminals, in two scenarios: inter-continental routing and regional traffic-differential routing.

## Summary (ZH)

Aryan、Smith、Houck、Chintalapati、Kedrowitsch、Reed、Tripathi 和 Kenyon 扩展了 SpaceNet 研究测试床，使其能仿真多层（multi-shell）低轨星座，并利用现有全球地面终端网络计算路由。测试床基于 Mininet 并支持 SDN。论文列出三项贡献：高保真星地链路（GSL）与星间链路（ISL）建模、可扩展的多层拓扑生成，以及由时空流量热点驱动、含模块化拥塞路由方案的拥塞分布实现。

评估用 TLE 数据仿真 Starlink 星座，并将预测的 RTT 和吞吐量与 Starlink 终端之间真实的 Ping 和 iPerf 测量对比，涵盖洲际路由和区域流量差异路由两种场景。

## Key technical points (EN)

- **Inter-continental scenario**: high-fidelity model keeps throughput prediction error around 10-12 Mbps, with nearly 90% of predicted throughput inside the measured 95% confidence interval for representative traffic zones.
- **Regional scenario**: throughput error reduced by about 92-95% relative to the low-fidelity SpaceNet, with MAE falling from over 73 Mbps to under 6 Mbps; RTT error reduced by up to 58%.
- Autocorrelation and correlation metrics indicate a stable route state with respect to throughput under high traffic load.
- The authors state that a more robust handover scheme and higher-fidelity RF and optical ISL models are required for more accurate throughput estimates.

## Key technical points (ZH)

- **洲际场景**：高保真模型的吞吐量预测误差约 10-12 Mbps，代表性流量区域内近 90% 的预测吞吐量落在实测 95% 置信区间内。
- **区域场景**：相对低保真 SpaceNet，吞吐量误差降低约 92-95%，MAE 由超过 73 Mbps 降至 6 Mbps 以下；RTT 误差最多降低 58%。
- 自相关与相关性指标表明高负载下吞吐量方面路由状态稳定。
- 作者指出，要更准确地估计吞吐量，还需要更稳健的切换方案以及更高保真的射频和光 ISL 模型。

## Why it matters / what's new (EN)

Provides an emulation approach whose predictions are checked against real Starlink Ping/iPerf data, useful for studying routing and congestion in multi-shell constellations.

## Why it matters / what's new (ZH)

提供了一种其预测结果经真实 Starlink Ping/iPerf 数据校验的仿真方法，可用于研究多层星座中的路由与拥塞。

## Images

None.
