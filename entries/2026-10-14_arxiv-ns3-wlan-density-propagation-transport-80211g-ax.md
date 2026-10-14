---
id: 2026-10-14_arxiv-ns3-wlan-density-propagation-transport-80211g-ax
date_published: 2026-09-24
date_found: 2026-10-14
technology: wifi
type: academic-paper
title_en: "Joint Effects of Node Density, Propagation, Wi-Fi Generation, and Transport Protocol on WLAN Performance: An ns-3 Study"
title_zh: "节点密度、传播模型、Wi-Fi 代际与传输协议对 WLAN 性能的联合影响：ns-3 研究"
url: "https://arxiv.org/abs/2609.30510"
source_quality: full
topics: [802.11ax, 802.11g, ns-3, TCP, UDP, WLAN performance]
topic_primary: wifi7-deployment
topics_secondary: []
novelty_score: 1
---

## Summary (EN)

This single-author ns-3 study (Leonel Olimpio Silima; arXiv 2609.30510, submitted 24 September 2026) asks how station density, AP distance and propagation model jointly relate to reliability, throughput, delay and fairness in a single-AP uplink WLAN, how UDP and TCP differ under matched conditions, and whether configured 802.11ax outperforms configured 802.11g across all combinations. The paper states that optional 802.11ax features such as OFDMA and MU-MIMO were not isolated.

The factorial design crosses two Wi-Fi modes, three propagation models (Friis, LogDistance and a cascaded Friis-Nakagami model whose parameters are undocumented), five station counts (5, 10, 20, 30, 50), six AP distances (5 to 50 m) and three random seeds, separately for UDP and TCP. Runs are 10 s with 1024-byte payloads and IdealWifiManager rate control; load is 1 Mb/s per source for 5 stations and 2 Mb/s for 10 to 50. Of 1,080 scheduled runs, 1,073 produced valid output (536 UDP, 537 TCP); seven failed with ns-3/cppyy segmentation errors.

Reported findings: TCP packet delivery ratios (FlowMonitor) are 0.9894 to 0.9978 while UDP's range from 0.2978 to 0.7311, yet throughput distributions overlap. The highest mean aggregate throughput in the body of the paper is 26.5189 Mb/s for TCP under 802.11ax with Friis (25.8845 Mb/s for UDP in the same setting); under 802.11ax Friis-Nakagami UDP (21.0900 Mb/s) exceeds TCP (17.9799 Mb/s). In the LogDistance cases TCP's delivery ratio is near 0.996 but throughput is only 8.19 Mb/s (802.11ax) and 10.68 Mb/s (802.11g), with Jain fairness around 0.30. The author concludes that reliability, capacity, delay and fairness must be considered together. The arXiv listing abstract (but not the PDF's abstract) gives different figures (TCP 2.619 Mb/s vs UDP 25.854 Mb/s, TCP PDR 0.994–0.997); this entry relays the PDF values.

## Summary (ZH)

这项单作者 ns-3 研究（Leonel Olimpio Silima；arXiv 2609.30510，2026 年 9 月 24 日提交）探讨：在单 AP 上行 WLAN 中，站点密度、AP 距离与传播模型如何共同影响可靠性、吞吐、时延与公平性；UDP 与 TCP 在同等条件下有何差异；以及配置的 802.11ax 是否在所有组合下都优于配置的 802.11g。论文说明，OFDMA、MU-MIMO 等 802.11ax 可选特性未被单独隔离。

实验采用因子设计：2 种 Wi-Fi 模式、3 种传播模型（Friis、LogDistance 以及参数未说明的 Friis-Nakagami 级联模型）、5 种站点数（5、10、20、30、50）、6 种 AP 距离（5 至 50 米）和 3 个随机种子，UDP 与 TCP 分别进行。每次运行 10 秒，载荷 1024 字节，使用 IdealWifiManager 速率控制；5 个站点时每源 1 Mb/s，10 至 50 个站点时每源 2 Mb/s。1,080 次计划运行中有 1,073 次产生有效输出（UDP 536 次，TCP 537 次），7 次因 ns-3/cppyy 段错误失败。

报告结果：TCP 的分组投递率（FlowMonitor）为 0.9894 至 0.9978，UDP 为 0.2978 至 0.7311，但两者吞吐分布大幅重叠。正文中最高的平均聚合吞吐为 802.11ax + Friis 下 TCP 的 26.5189 Mb/s（同一设置下 UDP 为 25.8845 Mb/s）；在 802.11ax Friis-Nakagami 下 UDP（21.0900 Mb/s）高于 TCP（17.9799 Mb/s）。在 LogDistance 情形下，TCP 投递率约 0.996，但吞吐仅 8.19 Mb/s（802.11ax）和 10.68 Mb/s（802.11g），Jain 公平性约 0.30。作者结论是应综合考虑可靠性、容量、时延与公平性。arXiv 列表页摘要（而非 PDF 中的摘要）给出的数字不同（TCP 2.619 Mb/s 对 UDP 25.854 Mb/s，TCP 投递率 0.994–0.997）；本条目转述 PDF 中的数值。

## Key technical points (EN)

- Setup: ns-3, one AP, static STAs, uplink, 802.11g vs 802.11ax, Friis / LogDistance / Friis-Nakagami, 5-50 stations, 5-50 m, 3 seeds; 1,073 of 1,080 runs valid.
- TCP PDR 0.989-0.998 vs UDP 0.298-0.731, but throughput overlaps; no universal TCP-versus-UDP throughput ranking.
- LogDistance cases: high TCP PDR with low throughput (8.19 / 10.68 Mb/s) and fairness near 0.30.
- Stated limitations: one AP, no mobility or interference, three seeds, undocumented simulation parameters (frequency, channel, Tx power, LogDistance exponent, Nakagami parameters, TCP variant), FlowMonitor measures IP flows not application goodput, run-level raw CSVs and the ns-3 simulation source not released (a GitHub repository holds orchestration/analysis scripts and processed summaries).

## Key technical points (ZH)

- 设置：ns-3，单 AP，静止站点，上行，802.11g 对 802.11ax，Friis / LogDistance / Friis-Nakagami，5-50 个站点，5-50 米，3 个种子；1,080 次中 1,073 次有效。
- TCP 投递率 0.989-0.998，UDP 为 0.298-0.731，但吞吐重叠；不存在 TCP 与 UDP 吞吐的普适排序。
- LogDistance 情形：TCP 投递率高但吞吐低（8.19 / 10.68 Mb/s），公平性约 0.30。
- 论文自述局限：单 AP、无移动与干扰、仅 3 个种子、缺少仿真参数（频率、信道、发射功率、LogDistance 指数、Nakagami 参数、TCP 版本）、FlowMonitor 度量的是 IP 流而非应用层有效吞吐、未公开逐次运行的原始 CSV 与 ns-3 仿真源码（GitHub 仓库提供编排/分析脚本与处理后的汇总）。

## Why it matters / what's new (EN)

This is a small simulation study with an explicit list of limitations, relevant mainly as a caution that delivery ratio, throughput and fairness can point in different directions and that headline numbers depend on unreported propagation parameters. It does not isolate any Wi-Fi 7 or Wi-Fi 8 feature (it compares 802.11g with 802.11ax), so its link to the wifi7-deployment bin is as a general WLAN-performance baseline study. The listing-abstract-versus-PDF numeric mismatch noted above is worth bearing in mind when citing it.

## Why it matters / what's new (ZH)

这是一项规模较小、并明确列出局限的仿真研究，主要价值在于提醒投递率、吞吐与公平性可能给出不同结论，且其头条数字依赖未披露的传播参数。它并未隔离任何 Wi-Fi 7 或 Wi-Fi 8 特性（比较的是 802.11g 与 802.11ax），因此归入 wifi7-deployment 主题只是作为一般 WLAN 性能基线研究。引用时应注意上文所述 arXiv 列表页摘要与 PDF 数值不一致的问题。

## Images

![Throughput distribution, UDP vs TCP (Fig. 1) | UDP 与 TCP 的吞吐分布（图 1）](https://arxiv.org/html/2609.30510v1/figures/boxplot_throughput_udp_tcp.png)
