---
id: 2026-07-07_arxiv-5g-mec-powerline-latency-cost
date_published: 2026-07-04
date_found: 2026-07-07
type: academic-paper
technology: cellular
title_en: "Real-World 5G MEC vs Cloud for Power-Line Monitoring: 7% Latency Gain, and Neither Meets the 8 ms Smart-Grid Bar"
title_zh: "输电线监测的 5G MEC 与云端实测对比：MEC 仅快 7%，且两者都达不到智能电网 8 ms 要求"
url: "https://arxiv.org/abs/2607.03993"
source_quality: full
topics: [MEC, 5G, IoT, smart-grid, edge-computing]
topic_primary: mec
topics_secondary: [redcap-iot]
novelty_score: 2
---

## Summary (EN)

This measurement study (Sharma, Akselsen, Andersen, Bongo, Munch-Ellingsen — UiT Tromsø / Telenor Research; AINA 2026, arXiv 2607.03993, submitted 4 Jul 2026) delivers rare *real-world numbers* for the perennial MEC-vs-cloud question, using an operational Norwegian deployment: power-transmission-line monitoring where sensors report conductor temperature, current, wind speed and sag, and a small feedforward network (256/128/64 neurons) predicts line temperature from eight features. Clients on a 5G connection (Teltonika RUTX50 modem) POST sensor tuples to a containerized FastAPI inference server deployed either at a Telenor MEC facility (Fornebu) or in Azure regions (Norway East, Norway West, Sweden Central), measured over 24-hour campaigns from four locations spanning dense-urban Oslo to edge-of-coverage Kårvik.

The headline: from the best location, MEC P99 round-trip latency is 44.62 ms vs 47.69 ms for the nearest cloud region — only a ~7% advantage, though MEC is markedly more stable (coefficient of variation 0.021). Distance still matters at the region scale (Sweden Central: 78.49 ms), and coverage dominates everything: at Kårvik, all destinations collapse to ~660 ms with high volatility because the access network, not the compute placement, is the bottleneck. Cost analysis complicates the edge story further — the annual per-container cost differs by up to 45% between regions, and capacity tests show the single-container setup degrading at 1,024 requests/s and failing at 8,192 requests/s.

The sober conclusion: even the best measured case (44.62 ms) misses the ~8 ms latency the authors cite for stringent smart-grid protection functions by a factor of five. MEC as deployed today buys stability more than speed, and for critical-infrastructure control loops neither MEC nor cloud placement closes the gap — the constraint lives in the access and transport network.

## Summary (ZH)

这项测量研究（UiT 特罗姆瑟大学 / Telenor Research；AINA 2026，arXiv 2607.03993，2026-07-04 提交）为老生常谈的"MEC 还是云"问题提供了罕见的*真实世界数据*，场景是挪威在运行的输电线监测部署：传感器上报导线温度、电流、风速与弧垂，一个小型前馈网络（256/128/64 神经元）由八个特征预测线温。客户端经 5G 连接（Teltonika RUTX50 调制解调器）将传感器数据 POST 到容器化 FastAPI 推理服务器，服务器部署在 Telenor MEC 设施（Fornebu）或 Azure 区域（挪威东、挪威西、瑞典中部），从奥斯陆密集市区到覆盖边缘 Kårvik 共四个地点进行 24 小时测量。

核心结果：最佳地点测得 MEC 的 P99 往返时延 44.62 ms，最近云区域 47.69 ms——仅约 7% 优势，但 MEC 明显更稳定（变异系数 0.021）。区域尺度上距离仍然重要（瑞典中部 78.49 ms），而覆盖决定一切：在 Kårvik，所有目的地都退化到约 660 ms 且波动大，因为瓶颈在接入网而非算力位置。成本分析进一步复杂化边缘叙事——各区域每容器年成本差达 45%；容量测试显示单容器在 1,024 请求/秒时性能退化、8,192 请求/秒时开始失败。

冷静的结论：即使最佳测量值（44.62 ms）也比作者引用的智能电网严苛保护功能约 8 ms 的时延要求差五倍。当前形态的 MEC 买到的是稳定性而非速度；对关键基础设施控制环，MEC 或云的算力摆放都无法弥合差距——约束在接入与传输网络。

## Key technical points (EN)

- Real deployment measurement (not simulation): Telenor 5G + MEC (Fornebu) vs Azure Norway East / Norway West / Sweden Central, 24-hour campaigns, four locations, P99 + coefficient-of-variation metrics.
- MEC P99 44.62 ms vs 47.69 ms nearest cloud (≈7% gain), but far lower volatility (CV 0.021).
- Coverage dominates placement: edge-of-coverage site sees ~660 ms to *every* destination with 0.2 CV.
- Cost asymmetry: annual per-container cost varies +14% (Norway East) to +45% (Norway West) vs Sweden Central (4,292 NOK ≈ $390).
- Capacity ceiling: 1 s average latency at 1,024 req/s; request failures at 8,192 req/s per container.
- Gap to requirement: best case 44.62 ms vs ~8 ms smart-grid protection target — placement alone cannot close it.

## Key technical points (ZH)

- 真实部署测量（非仿真）：Telenor 5G + MEC（Fornebu）对比 Azure 挪威东/挪威西/瑞典中部，24 小时测量、四个地点，P99 + 变异系数指标。
- MEC P99 44.62 ms 对最近云区域 47.69 ms（约 7% 增益），但波动性低得多（CV 0.021）。
- 覆盖比算力位置更关键：覆盖边缘站点到*所有*目的地都约 660 ms，CV 0.2。
- 成本不对称：每容器年成本相对瑞典中部（4,292 挪威克朗 ≈ 390 美元）高 14%（挪威东）至 45%（挪威西）。
- 容量上限：单容器 1,024 请求/秒时平均时延达 1 秒；8,192 请求/秒时开始失败。
- 与需求的差距：最佳 44.62 ms 对智能电网保护约 8 ms 目标——仅靠算力摆放无法弥合。

## Why it matters / what's new (EN)

The mec bin so far holds one architecture proposal (2026-06-30_arxiv-subedge-subscriber-centric-mec-6g); this is its first *measurement* entry, and it lands a useful corrective to MEC marketing: on a live national operator's infrastructure the edge's latency advantage over a nearby cloud region is single-digit percent, its real benefit is jitter reduction, and access-network coverage — not compute placement — is the binding constraint for critical-infrastructure IoT. The 44.62-vs-8 ms gap gives the KB a concrete anchor for why URLLC-class use cases keep pointing at radio/transport innovations (see the 5G-TSN and RedCap threads) rather than edge compute alone.

## Why it matters / what's new (ZH)

mec 分类此前只有一个架构提案（2026-06-30_arxiv-subedge-subscriber-centric-mec-6g）；本条目是该分类第一个*实测*条目，并对 MEC 宣传给出有用的纠偏：在国家级运营商的在网基础设施上，边缘相对邻近云区域的时延优势只有个位数百分比，真正收益是抖动降低，而接入网覆盖——不是算力摆放——才是关键基础设施 IoT 的约束所在。44.62 对 8 ms 的差距为 KB 提供了具体锚点，说明为何 URLLC 级用例持续指向无线/传输侧创新（参见 5G-TSN 与 RedCap 相关条目）而非仅靠边缘计算。

## Images

![Experimental setup: sensor, 5G access, MEC and cloud paths | 实验设置：传感器、5G 接入、MEC 与云路径](https://arxiv.org/html/2607.03993v1/x1.png)
![MEC vs cloud latency comparison | MEC 与云时延对比](https://arxiv.org/html/2607.03993v1/x7.png)
