---
id: 2026-07-07_arxiv-modular-oran-testbed-srs-massive-beams
date_published: 2026-07-06
date_found: 2026-07-07
type: academic-paper
technology: cellular
title_en: "A Modular O-RAN Testbed from SRS Open-Source O-CU/O-DU and a Massive Beams FR1/FR2/FR3 Modular O-RU"
title_zh: "基于 SRS 开源 O-CU/O-DU 与 Massive Beams FR1/FR2/FR3 模块化 O-RU 的模块化 O-RAN 测试平台"
url: "https://arxiv.org/abs/2607.05146"
source_quality: full
topics: [O-RAN, testbed, FR3, beamforming, 5G, 6G]
topic_primary: open-ran
topics_secondary: [6g-vision]
novelty_score: 2
---

## Summary (EN)

This paper (Göttsch, Font-Bach, Benzin, Osterland, Puschmann, Lutz, Keusgen, Caire — a TU Berlin / Fraunhofer HHI / SRS / Massive Beams collaboration; arXiv 2607.05146, submitted 6 Jul 2026) describes an end-to-end, fully open and O-RAN-compliant experimental platform built from three parts: a 5G core, the OCUDU open-source O-CU/O-DU from Software Radio Systems (a commercial-grade srsRAN-based stack implementing 3GPP Release 17 with the complete L1/L2/L3, up to 100 MHz bandwidth, FR1/FR2 numerologies), and the MODRAD-SC modular radio unit from Massive Beams — a Category A O-RU with 4T4R antenna ports covering FR1, FR2 and the emerging FR3 (7–24 GHz upper mid-band), with up to 200 MHz instantaneous bandwidth per carrier.

The testbed's distinguishing feature is that it runs in two functional-split configurations. In O-RAN split 7.2a, the O-DU carries RLC/MAC/high-PHY and the O-RU handles low-PHY and RF over eCPRI Open Fronthaul — the standard real-time industrial deployment mode. In split 8, raw IQ samples stream over Ethernet, turning the same hardware into an SDR for non-real-time or performance-bounded experiments — the research-friendly mode. The MODRAD-SC pipeline includes eCPRI mapping, low-PHY beamforming and FFT/IFFT, digital conditioning (CFR, DPD, AGC), and swappable analog frontends per band.

As a proof of concept the authors demonstrate FR3 hybrid beamforming at 7.2 GHz: an 8×8 near-field-enhanced RIS-style array with 2-bit phase shifters gives 800 selectable beam directions (10-bit beam ID), and over-the-air downlink with 16-QAM shows small error-vector magnitude (no exact EVM figure given). Roadmap items include 64T64R massive MIMO, Category B O-RU support, and full FR3 integration — positioning the platform for pre-6G experimentation.

## Summary (ZH)

本文（Göttsch、Font-Bach、Benzin、Osterland、Puschmann、Lutz、Keusgen、Caire——柏林工大 / Fraunhofer HHI / SRS / Massive Beams 合作；arXiv 2607.05146，2026-07-06 提交）描述了一个端到端、完全开放且符合 O-RAN 规范的实验平台，由三部分组成：5G 核心网、Software Radio Systems 的开源 O-CU/O-DU 方案 OCUDU（基于 srsRAN 的商用级协议栈，实现 3GPP Release 17 完整 L1/L2/L3，最高 100 MHz 带宽，支持 FR1/FR2 参数集），以及 Massive Beams 的模块化射频单元 MODRAD-SC——Category A O-RU，4T4R 天线端口，覆盖 FR1、FR2 及新兴的 FR3（7–24 GHz 上中频段），每载波瞬时带宽最高 200 MHz。

该测试台的特色是支持两种功能切分配置：在 O-RAN split 7.2a 模式下，O-DU 承载 RLC/MAC/高层 PHY，O-RU 通过 eCPRI Open Fronthaul 处理低层 PHY 与射频——标准的实时工业部署模式；在 split 8 模式下，原始 IQ 样本经以太网流传输，同一硬件变成 SDR，用于非实时或有限实时性实验——研究友好模式。MODRAD-SC 流水线包括 eCPRI 映射、低层 PHY 波束赋形与 FFT/IFFT、数字调理（CFR、DPD、AGC）及按频段可换的模拟前端。

作为概念验证，作者演示了 7.2 GHz 的 FR3 混合波束赋形：8×8 近场增强 RIS 风格阵列配 2 比特移相器，可选 800 个波束方向（10 比特波束 ID），空口下行 16-QAM 传输误差向量幅度很小（未给出确切 EVM 数值）。路线图包括 64T64R 大规模 MIMO、Category B O-RU 支持与完整 FR3 集成——将平台定位于前 6G 实验。

## Key technical points (EN)

- Three-block architecture: 5G core + SRS OCUDU (open-source O-CU/O-DU, 3GPP Rel-17, ≤100 MHz, FR1/FR2, 15/30/120 kHz SCS) + Massive Beams MODRAD-SC modular O-RU (Cat A, 4T4R, FR1/FR2/FR3, ≤200 MHz per carrier).
- Dual-split operation: O-RAN split 7.2a (real-time, eCPRI OFH) and split 8 (IQ-over-Ethernet SDR mode) on the same hardware.
- MODRAD-SC specs: 27 dBm output at 3.3–3.8 GHz in O-RU mode; SDR mode 200 MHz Tx / 400 MHz Rx with 8 GB sample RAM.
- FR3 proof of concept at 7.2 GHz: 8×8 array, 2-bit phase shifters, 800 beam directions (10-bit beam ID), OTA 16-QAM downlink with small EVM.
- Roadmap: 64T64R, CAT-B O-RU, full FR3 integration.

## Key technical points (ZH)

- 三模块架构：5G 核心网 + SRS OCUDU（开源 O-CU/O-DU，3GPP Rel-17，≤100 MHz，FR1/FR2，15/30/120 kHz 子载波间隔）+ Massive Beams MODRAD-SC 模块化 O-RU（Cat A，4T4R，FR1/FR2/FR3，每载波 ≤200 MHz）。
- 双切分运行：同一硬件支持 O-RAN split 7.2a（实时，eCPRI Open Fronthaul）与 split 8（IQ-over-Ethernet SDR 模式）。
- MODRAD-SC 规格：O-RU 模式下 3.3–3.8 GHz 输出 27 dBm；SDR 模式 200 MHz 发 / 400 MHz 收，8 GB 采样内存。
- 7.2 GHz FR3 概念验证：8×8 阵列、2 比特移相器、800 个波束方向（10 比特波束 ID），空口 16-QAM 下行 EVM 较小。
- 路线图：64T64R、CAT-B O-RU、完整 FR3 集成。

## Why it matters / what's new (EN)

The open-ran bin has covered multi-instance vRAN scaling (2026-05-25_arxiv-vran-openairinterface-multi-instance-scaling) and end-to-end O-RAN energy testing (2026-06-03_arxiv-oran-e2e-energy-efficiency-testing), but mostly on OpenAirInterface or pure-software stacks. This is the first entry documenting a *commercial-grade open-source* O-CU/O-DU (SRS OCUDU) paired with a *modular multi-band O-RU* that reaches FR3 — the band family where 6G upper-mid-band work (see 2026-07-07_ericsson-6g-ran-standardization-decisions) will land. The dual split-7.2a/split-8 design pattern is a pragmatic template for labs that need both standards-compliant operation and raw-IQ experimentation from one bench.

## Why it matters / what's new (ZH)

open-ran 分类此前覆盖过多实例 vRAN 扩展（2026-05-25_arxiv-vran-openairinterface-multi-instance-scaling）与端到端 O-RAN 能效测试（2026-06-03_arxiv-oran-e2e-energy-efficiency-testing），但大多基于 OpenAirInterface 或纯软件栈。本条目首次记录了*商用级开源* O-CU/O-DU（SRS OCUDU）与可达 FR3 的*模块化多频段 O-RU* 的组合——FR3 正是 6G 上中频段工作（参见 2026-07-07_ericsson-6g-ran-standardization-decisions）将落地的频段族。split 7.2a / split 8 双模式设计为既需要标准合规运行、又需要原始 IQ 实验的实验室提供了务实模板。

## Images

![System architecture with analog beamformer | 含模拟波束赋形器的系统架构](https://arxiv.org/html/2607.05146v1/x1.png)
