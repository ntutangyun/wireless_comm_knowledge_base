---
id: 2026-11-04_arxiv-6g-uplink-waveform-rank-selection-distributed-reception
date_published: 2026-11-01
date_found: 2026-11-04
type: academic-paper
technology: cellular
title_en: "6G Uplink Waveform and Rank Selection under Distributed Reception"
title_zh: "分布式接收下的 6G 上行波形与秩选择"
url: "https://arxiv.org/abs/2611.01590"
source_quality: full
topics: [CP-OFDM, DFT-s-OFDM, rank-selection, distributed-reception, LMMSE, cell-free, 6G-uplink]
topic_primary: 6g-vision
topics_secondary: [cellular-massive-mimo, 5g-nr]
novelty_score: 3
---

## Summary (EN)

Yewen Cao, Fen Hou and Yulin Shao study how to choose among four uplink modes, CP-OFDM and DFT-s-OFDM at rank 1 and at non-coherent rank 2, when several geographically separated access points (APs) forward their observations to a central unit that runs linear MMSE reception. The paper opens from the 3GPP context that NR Release 18 introduced dynamic CP-OFDM/DFT-s-OFDM switching and that the Release 20 6G radio study considers rank-2 DFT-s-OFDM.

Under common UE power constraints the authors derive waveform-switching thresholds at both ranks and a rank-selection margin, giving conditions that depend on available transmit power, DFT despreading loss and spatial multiplexing gain. They then show how per-AP port gains and correlations combine into the aggregate spatial separation that drives the choice.

## Summary (ZH)

Yewen Cao、Fen Hou 与 Yulin Shao 研究在多个地理分散的接入点（AP）把观测转发给运行线性 MMSE 接收的中心单元时，如何在四种上行模式之间选择：Rank 1 与非相干 Rank 2 下的 CP-OFDM 与 DFT-s-OFDM。论文以 3GPP 背景开篇：NR Release 18 引入了 CP-OFDM/DFT-s-OFDM 动态切换，Release 20 的 6G 无线接口研究考虑了 Rank-2 DFT-s-OFDM。

在统一的 UE 功率约束下，作者推导出两种秩下的波形切换门限以及秩选择裕量，给出取决于可用发射功率、DFT 解扩损失和空间复用增益的条件；随后说明各 AP 的端口增益与相关性如何合成聚合空间分离度，并由其驱动选择。

## Key technical points (EN)

- Result as stated: with port gains and available transmit powers fixed, improving spatial separation without reducing it on any subcarrier increases the rank-selection margin, while the effect on the preferred waveform within rank 2 depends on which subcarriers improve.
- Aggregate spatial separation is decomposed into three nonnegative contributions arising from local AP responses.
- The rank-2 waveform threshold depends on the wideband channel structure in the low- and high-SNR regimes; at low SNR the first-order dependence is on variation in port gains.
- Numerical results show that different AP deployments can favor different waveforms and ranks even with the same receive-antenna budget and comparable aggregate channel gains, including waveform switches at a fixed preferred rank.
- The model assumes synchronized APs, a single representative UE with two PA/antenna ports, and non-coherent rank-2 transmission.

## Key technical points (ZH)

- 论文给出的结论：在端口增益和可用发射功率固定时，只要不降低任何子载波上的空间分离度，提高分离度就会增大秩选择裕量；而对 Rank-2 内首选波形的影响取决于哪些子载波得到改善。
- 聚合空间分离度被分解为来自各 AP 本地响应的三个非负分量。
- Rank-2 波形门限在低、高信噪比下依赖于宽带信道结构；低信噪比时一阶依赖端口增益的变化。
- 数值结果表明，即使接收天线总数相同、聚合信道增益相近，不同的 AP 部署也可能偏好不同的波形与秩，包括在首选秩不变时发生的波形切换。
- 模型假设 AP 同步、单个具有两个功放/天线端口的代表性 UE，以及非相干 Rank-2 传输。

## Why it matters / what's new (EN)

The paper's point is that waveform and rank decisions in a distributed-reception uplink depend on how AP deployment shapes the aggregate channel, not only on per-link SNR. The results are analytical with numerical illustration under the stated model assumptions; no system-level or hardware validation is reported.

## Why it matters / what's new (ZH)

论文的要点是：分布式接收上行中的波形与秩决策取决于 AP 部署如何塑造聚合信道，而不仅仅是单链路信噪比。结果为解析推导加数值示例，基于文中假设的模型；未报告系统级或硬件验证。

## Images

None.
