---
id: 2026-11-23_arxiv-computing-channel-digital-function-oriented-over-the-air-computation
date_published: 2026-09-10
date_found: 2026-11-23
technology: edge-ai
type: academic-paper
title_en: "The Computing Channel: How Modulation Programs the Airwaves (digital over-the-air computation, tutorial article)"
title_zh: "计算信道：调制如何为无线电波编程（数字式空口计算，教程性文章）"
url: "https://arxiv.org/abs/2609.11145"
source_quality: full
topics: [over-the-air-computation, digital-OAC, computational-constellation, SumComp, ChannelComp, federated-edge-learning]
topic_primary: over-the-air-computation
topics_secondary: [edge-federated-learning, task-oriented-communication]
novelty_score: 3
---

## Summary (EN)

This article from KTH reviews "digital function-oriented communication": designing finite-alphabet modulation symbols and receiver decisions together so that the superposition of simultaneous transmissions encodes a target function (a sum, a majority vote, a product) of the senders' quantized inputs, without recovering each input. It positions this against analog over-the-air computation (OAC), which maps values to continuous amplitudes and is hard to reconcile with finite-precision data, digital packetisation, coding and receiver chains.

The article is organised as follows: a two-node BPSK example showing how one induced constellation can represent two different functions by relabelling decision regions; distribution-aware constellation design; beamforming for vector computation with a multi-antenna receiver; pyramid sampling to cut the offline design cost for many nodes and many quantization levels; and SumComp, which keeps standard PAM / QPSK / rectangular-QAM grids but replaces Gray labelling with an arithmetic-preserving mapping so existing RF hardware is reused. Federated edge learning is the worked application: each device quantizes its update and sends one coordinate per symbol concurrently, and the multi-antenna server detects the aggregate constellation point.

Link: no new measurement. The article discusses an uplink over a shared multiple-access channel (Rayleigh-fading analysis, OFDM subchannels) and cites an independent real-time digital OAC prototype with multiple USRP transmitters (which it says does not by itself resolve active-user coordination or standards-compatible reliability); the pyramid-sampling result it quotes is from an ideal-channel experiment.

## Summary (ZH)

这篇来自 KTH 的文章综述"数字式面向函数的通信"：联合设计有限字母表的调制符号与接收判决，使同时发送信号的叠加直接编码目标函数（求和、多数表决、乘积等）作用于发送方量化输入的结果，而无需恢复每个输入。文章将其与模拟式空口计算（OAC）对照：后者把数值映射为连续幅度，难以与有限精度数据、数字分组、编码和接收链路相协调。

文章结构依次为：两节点 BPSK 示例，说明同一诱导星座通过重新标注判决区域即可表示两种不同函数；分布感知的星座设计；多天线接收下面向向量计算的波束赋形；用于降低多节点、多量化级离线设计成本的金字塔采样；以及 SumComp，它保留标准 PAM / QPSK / 矩形 QAM 网格，但用保持算术性质的映射取代格雷标注，从而复用现有射频硬件。联邦边缘学习是示范应用：每个设备量化其更新，并发地每符号发送一个坐标，多天线服务器检测聚合星座点。

所经链路：无新增测量。文章讨论共享多址信道上的上行（瑞利衰落分析、OFDM 子信道），并引用他人使用多个 USRP 发射机的实时数字 OAC 原型（文章指出该原型本身并未解决活跃用户协调与标准兼容可靠性问题）；所转述的金字塔采样结果来自理想信道实验。

## Key technical points (EN)

- Resource accounting (Table I): under stated assumptions (one coordinate per symbol, no compression or coding, pilots and retransmissions excluded) the digital QAM aggregation scheme uses data-bearing resource elements that do not grow with the number of devices, whereas orthogonal digital upload needs one per device per coordinate; the article states this is not a universal latency or bandwidth reduction.
- Fading: the finite-alphabet FL scheme cited moves channel compensation to the server, which estimates the aggregate channel and uses receive-antenna averaging; under independent Rayleigh fading with equal variances, accurate aggregate-channel estimation and perfect synchronisation the fading error falls roughly inversely with the number of receive antennas.
- Pyramid sampling: a more aggressive trajectory-based approximation beyond pyramid sampling cuts an eight-level example to 28 representative comparisons, at the risk of omitting relevant pairs; a cited ideal-channel five-node experiment shows up to two orders of magnitude lower MSE for majority computation, which the article attributes to coarser sampling combined with finer quantization, not to sampling alone.
- Implementation limits named: receiver dynamic range and ADC resolution, power, timing and phase alignment, active-user coordination and standards-compatible reliability.

## Key technical points (ZH)

- 资源核算（表 I）：在所述假设下（每符号一个坐标、无压缩与编码、不计导频与重传），数字 QAM 聚合方案占用的数据资源单元数不随设备数增长，而正交数字上传每设备每坐标各需一个；文章明确这并非对时延或带宽的普遍缩减。
- 衰落：所引用的有限字母表联邦学习方案把信道补偿移到服务器，由服务器估计聚合信道并利用接收天线平均；在独立瑞利衰落、方差相等、聚合信道估计准确且完美同步下，衰落误差大致与接收天线数成反比。
- 金字塔采样：在金字塔采样之上进一步按选定轨迹近似，可把八级示例缩减为 28 个代表性比较，但可能遗漏相关配对；所引用的理想信道五节点实验显示多数表决的 MSE 最多降低两个数量级，文章指出这来自较粗采样与更细量化的组合，而不是单靠采样。
- 文中点明的实现限制：接收端动态范围与 ADC 分辨率、功率/定时/相位对齐、活跃用户协调，以及与标准兼容的可靠性。

## Why it matters / what's new (EN)

The KB holds many analog or simulation-only OAC and over-the-air federated learning papers (for example 2026-10-12_arxiv-fedoag-over-the-air-federated-learning and 2026-11-19_arxiv-ofdm-tone-reservation-papr-over-the-air-computing). This article is a compact reference for the digital branch: how constellations and labelings are chosen so the channel computes a function, which pieces reuse standard modulation hardware, and which assumptions (synchronisation, dynamic range, active-user knowledge) the claimed savings depend on. It is a tutorial, not a new experiment.

## Why it matters / what's new (ZH)

KB 中已有大量模拟式或仅有仿真的 OAC 与空口联邦学习论文（例如 2026-10-12_arxiv-fedoag-over-the-air-federated-learning、2026-11-19_arxiv-ofdm-tone-reservation-papr-over-the-air-computing）。本文为数字分支提供了简明参考：如何选取星座与标注使信道计算出函数，哪些环节可复用标准调制硬件，以及所称节省依赖哪些假设（同步、动态范围、活跃用户信息）。它是教程性文章，而非新实验。
