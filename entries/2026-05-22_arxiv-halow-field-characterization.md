---
id: 2026-05-22_arxiv-halow-field-characterization
date_published: 2026-05-17
date_found: 2026-05-22
type: academic-paper
title_en: "Wi-Fi HaLow (IEEE 802.11ah) for Long-Range Monitoring Links: Point-to-Point NLoS/LoS and LoS Mesh Field Characterization"
title_zh: "Wi-Fi HaLow (IEEE 802.11ah) 长距离监测链路：点对点NLoS/LoS与LoS Mesh现场表征"
url: "https://arxiv.org/abs/2605.17349"
source_quality: abstract_only
topics: [802.11ah, HaLow, IoT, long-range]
topic_primary: amp-iot
topics_secondary: [energy-power-save]
novelty_score: 2
---

## Summary (EN)
This short paper from KAUST reports a practical field characterization of Wi-Fi HaLow (IEEE 802.11ah) for long-range monitoring applications. Using commodity HaLow dongle-class nodes operating in the sub-1 GHz band, the authors measure application-layer goodput and monitoring-centric update latency across three deployment-driven regimes: point-to-point Non-Line-of-Sight (NLoS), point-to-point Line-of-Sight (LoS) over several hundred meters, and LoS mesh networking with fixed relay nodes.

Key empirical results: (a) a clear bandwidth–range tradeoff with an NLoS coverage boundary around 120 m; (b) gradual throughput decay under LoS conditions up to 814 m in single-hop, delivering 0.15 Mbps at the farthest point; (c) kilometer-class range extension using fixed relays — 901 m with two relays and 1110 m with three relays. The workload is a representative monitoring payload (approximately 30-second video file), making the measurements directly relevant to practical IoT monitoring deployments.

## Summary (ZH)
这篇来自KAUST的短文报告了Wi-Fi HaLow (IEEE 802.11ah) 在长距离监测应用中的实际现场表征。作者使用商用HaLow dongle级节点（sub-1 GHz频段），在三种部署驱动的场景下测量应用层吞吐量和监测更新延迟：点对点非视距（NLoS）、点对点视距（LoS，数百米距离）、以及带固定中继节点的LoS mesh组网。

关键实证结果：(a) 明确的带宽-距离权衡，NLoS覆盖边界约120米；(b) LoS条件下单跳最远814米时吞吐量逐渐衰减，最远点达0.15 Mbps；(c) 使用固定中继实现公里级距离扩展——2个中继达901米，3个中继达1110米。测试负载为代表性监测数据（约30秒视频文件），使测量结果与实用IoT监测部署直接相关。

## Key technical points (EN)
- **Three deployment regimes tested**: NLoS point-to-point, LoS point-to-point (hundreds of meters), LoS mesh with fixed relays
- **Commodity hardware**: Dongle-class HaLow nodes (not lab-grade equipment), making results representative of real deployments
- **NLoS boundary**: ~120 m coverage under non-line-of-sight conditions
- **Single-hop LoS range**: Up to 814 m with 0.15 Mbps at the farthest point — sufficient for intermittent sensor log uploads
- **Mesh extension**: 901 m (2 relays) and 1110 m (3 relays) under LoS, demonstrating kilometer-class coverage
- **Workload**: ~30-second video file transfer as a representative "heavy" monitoring payload

## Key technical points (ZH)
- **三种部署场景测试**：NLoS点对点、LoS点对点（数百米）、带固定中继的LoS mesh
- **商用硬件**：dongle级HaLow节点（非实验室设备），结果代表真实部署性能
- **NLoS边界**：非视距条件下覆盖约120米
- **单跳LoS距离**：最远814米，最远点0.15 Mbps——足以满足间歇性传感器日志上传
- **Mesh扩展**：LoS条件下2个中继达901米，3个中继达1110米，实现公里级覆盖
- **测试负载**：约30秒视频文件传输作为代表性"重型"监测数据

## Why it matters / what's new (EN)
While not introducing a new protocol mechanism, this paper provides rare public field data on commodity HaLow performance in realistic outdoor/indoor edge conditions. Most existing HaLow performance data comes from simulations or controlled lab environments. The concrete range numbers (120 m NLoS, 814 m LoS single-hop, 1110 m 3-relay mesh) give system designers practical deployment planning benchmarks. The finding that simple fixed-relay mesh can push HaLow past 1 km is notable for agricultural monitoring, campus-scale IoT, and infrastructure monitoring use cases. The paper confirms HaLow's viability as a sub-1 GHz alternative to LoRa/LoRaWAN for monitoring applications that need higher throughput for occasional video or image uploads.

## Why it matters / what's new (ZH)
虽然未引入新的协议机制，但本文提供了罕见的商用HaLow在真实室内外边缘条件下的公开现场数据。现有HaLow性能数据多来自仿真或受控实验室环境。具体的距离数据（NLoS 120米、LoS单跳814米、3中继mesh 1110米）为系统设计者提供了实用的部署规划基准。简单固定中继mesh可将HaLow推至1公里以上这一发现，对农业监测、园区级物联网和基础设施监测等场景具有参考意义。论文确认了HaLow作为sub-1 GHz频段LoRa/LoRaWAN替代方案的可行性，适用于需要更高吞吐量进行偶尔视频或图像上传的监测应用。
