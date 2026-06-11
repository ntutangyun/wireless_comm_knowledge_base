---
id: 2026-06-11_arxiv-wifi6-dynamic-ru-tsn
date_published: 2026-06-10
date_found: 2026-06-11
type: academic-paper
title_en: "Exploratory Analysis of Wi-Fi 6 Dynamic Resource Unit Sharing in Small-Scale Network Scenarios"
title_zh: "面向 TSN 融合的 Wi-Fi 6 动态 RU 共享探索性分析"
url: "https://arxiv.org/abs/2606.11934"
source_quality: full
topics: [802.11ax, OFDMA, TSN, QoS, scheduling]
topic_primary: rtwt-latency
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Mada, Baron, Martino and Sofia (arXiv 2606.11934, submitted 10 June 2026) study dynamic Resource Unit (RU) allocation for Wi-Fi 6 (802.11ax) networks integrated with Time-Sensitive Networking (TSN), targeting industrial hybrid wired/wireless deployments where deterministic latency must survive the Ethernet-to-WLAN hop. The premise: static RU assignment is rigid under bursty heterogeneous traffic, leaving channel capacity idle while latency-critical flows queue.

The design has two parts. First, a QoS mapping table aligns TSN traffic classes with Wi-Fi 6 EDCA access categories via VLAN Priority Code Points (PCP) — e.g. Emergency (PCP 7) → AC_VO — so Time-Aware Shaping (TAS) priorities on the Ethernet segment carry through to the wireless segment. Second, a flow-aware dynamic RU allocation algorithm: the AP periodically reads per-flow statistics (via ns-3 FlowMonitor in the prototype), filters inactive flows, and assigns active flows to RUs round-robin, marking each RU exclusive (single flow) or shared (multiple flows) as contention evolves.

Evaluation uses the ns-3 DetNetWiFi framework on small topologies (2 STAs plus 1–2 Ethernet devices; five traffic classes from 50 kbps to 1 Mbps). Under high load, TAS-aligned scheduling holds latency at ~1.9 ms vs 2.3 ms for plain EDCA and jitter at ~0.9 ms vs 1.4 ms. In the dynamic-allocation stress test, 16 competing flows across 8 shared RUs all stay served with no starvation, with latency rising to 4.16 ms at peak contention. The authors are explicit that the results are exploratory and the scenarios intentionally constrained.

## Summary (ZH)

Mada、Baron、Martino 与 Sofia（arXiv 2606.11934，2026 年 6 月 10 日提交）研究面向时间敏感网络（TSN）融合的 Wi-Fi 6（802.11ax）动态资源单元（RU）分配，目标是工业有线/无线混合部署场景——确定性时延要求必须跨越以太网到 WLAN 的链路段。出发点是：静态 RU 分配在突发异构流量下过于僵化，时延敏感流排队的同时信道容量却被闲置。

方案分两部分。其一，QoS 映射表通过 VLAN 优先级码点（PCP）将 TSN 流量类别对齐到 Wi-Fi 6 EDCA 接入类别（如 Emergency（PCP 7）→ AC_VO），使以太网段的时间感知整形（TAS）优先级延续到无线段。其二，流感知的动态 RU 分配算法：AP 周期性读取每流统计（原型中用 ns-3 FlowMonitor），过滤不活跃流，将活跃流轮询分配到各 RU，并随竞争情况把 RU 标记为独占（单流）或共享（多流）。

评估基于 ns-3 DetNetWiFi 框架的小规模拓扑（2 个 STA 加 1–2 个以太网设备；5 个流量类别，速率 50 kbps 到 1 Mbps）。高负载下，TAS 对齐调度将时延保持在约 1.9 ms（纯 EDCA 为 2.3 ms），抖动约 0.9 ms（EDCA 为 1.4 ms）。动态分配压力测试中，16 条竞争流共享 8 个 RU 全部得到服务、无饿死，峰值竞争时时延升至 4.16 ms。作者明确说明结果属探索性质，场景刻意受限。

## Key technical points (EN)

- TSN-to-Wi-Fi QoS bridge: TSN traffic classes → VLAN PCP → EDCA access categories, so Ethernet TAS priorities survive the wireless hop.
- Flow-aware dynamic RU allocation: periodic per-flow statistics drive round-robin assignment of active flows to RUs, each RU marked exclusive or shared as load shifts.
- ns-3 DetNetWiFi evaluation: high load shows TAS-aligned scheduling at ~1.9 ms latency / 0.9 ms jitter vs 2.3 ms / 1.4 ms for plain EDCA.
- Stress test: 16 flows over 8 shared RUs, no starvation, 4.16 ms worst-case latency at peak contention.
- Explicitly exploratory: small-scale scenarios (2 STAs), simulation only, simple round-robin core — a baseline for TSN/Wi-Fi convergence work rather than a finished scheduler.

## Key technical points (ZH)

- TSN 到 Wi-Fi 的 QoS 桥接：TSN 流量类别 → VLAN PCP → EDCA 接入类别，使以太网 TAS 优先级跨越无线段仍然有效。
- 流感知动态 RU 分配：周期性每流统计驱动活跃流到 RU 的轮询指派，RU 随负载在独占/共享间切换。
- ns-3 DetNetWiFi 评估：高负载下 TAS 对齐调度时延约 1.9 ms、抖动 0.9 ms，纯 EDCA 为 2.3 ms / 1.4 ms。
- 压力测试：16 条流共享 8 个 RU，无饿死，峰值竞争最坏时延 4.16 ms。
- 明确的探索性质：小规模场景（2 个 STA）、纯仿真、核心为简单轮询——是 TSN/Wi-Fi 融合方向的基线工作而非成品调度器。

## Why it matters / what's new (EN)

This is the first TSN-convergence entry in the deterministic-latency bin: existing entries cover TWT-based deterministic scheduling on Wi-Fi 6 (2026-05-03_arxiv-twt-deterministic-scheduling-wifi6), R-TWT delay modelling (2026-05-03_arxiv-rtwt-rta-delay-model) and a latency-bounded link layer (2026-05-03_nsdi-law-802-11-low-latency-link-layer), but none bridge wired TSN class semantics into OFDMA RU allocation. The mechanism itself is modest (round-robin with exclusive/shared RU marking), yet the TSN→PCP→EDCA mapping plus the DetNetWiFi ns-3 framework give the industrial-WLAN thread a concrete, reproducible starting point — relevant context for 802.11bn's reliability-first positioning.

## Why it matters / what's new (ZH)

这是确定性时延主题中首个 TSN 融合条目：现有条目覆盖了基于 TWT 的 Wi-Fi 6 确定性调度（2026-05-03_arxiv-twt-deterministic-scheduling-wifi6）、R-TWT 时延建模（2026-05-03_arxiv-rtwt-rta-delay-model）与时延有界链路层（2026-05-03_nsdi-law-802-11-low-latency-link-layer），但都未将有线 TSN 类别语义桥接到 OFDMA RU 分配。机制本身并不复杂（轮询加独占/共享 RU 标记），但 TSN→PCP→EDCA 映射加上 DetNetWiFi ns-3 框架，为工业 WLAN 方向提供了具体且可复现的起点——这也与 802.11bn 以可靠性为先的定位相呼应。

## Images

![TSN-to-Wi-Fi 6 QoS priority mapping and remapping | TSN 到 Wi-Fi 6 的 QoS 优先级映射与重映射](https://arxiv.org/html/2606.11934v1/images/Mapping_Remapping.png)
![Dynamic RU allocation across the TSN Wi-Fi 6 / 5G interconnection | 跨 TSN Wi-Fi 6 / 5G 互联的动态 RU 分配](https://arxiv.org/html/2606.11934v1/images/DRA_Latest.png)
![Scenario 1 latency / jitter / throughput results | 场景 1 时延 / 抖动 / 吞吐结果](https://arxiv.org/html/2606.11934v1/images/Scenario2-Graph.png)
