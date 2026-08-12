---
id: 2026-08-12_arxiv-bvlos-drones-oran-5g-slicing
date_published: 2026-08-10
date_found: 2026-08-12
type: academic-paper
technology: cellular
title_en: "Enabling Beyond-Visual-Line-of-Sight Drone Operation over Open RAN 5G Networks with Slicing"
title_zh: "基于切片的 Open RAN 5G 网络实现超视距无人机运行"
url: "https://arxiv.org/abs/2608.09481"
source_quality: full
topics: [O-RAN, network-slicing, UAV, 5G-NR, FlexRIC, E2SM]
topic_primary: network-slicing
topics_secondary: [open-ran]
novelty_score: 3
---

## Summary (EN)
This paper (Pau Baguer, Esteban Municio, Gines Garcia-Aviles, Xavier Costa-Pérez — i2CAT, NEC Labs Europe, ICREA; arXiv 10 Aug 2026) gives an empirical demonstration that RAN slicing on an open-source O-RAN 5G stack can meet the strict latency budgets of Beyond-Visual-Line-of-Sight (BVLOS) drone operation: below ~40 ms for command-and-control/telemetry and ~140 ms for video, which vanilla proportional-fair 5G cannot reliably hold under congestion.

The testbed integrates three open stacks — **OpenAirInterface** (5G NR, on Ettus USRP SDRs), **FlexRIC** (near-real-time RIC), and the **PX4** autopilot — and implements slot-granularity slicing through the **E2 Service Model (E2SM)**, allocating 2/3 of resources to high-priority drone control flows and 1/3 to background traffic for hard isolation. Under competing load, slicing holds downlink control latency around ~8 ms and uplink around ~20 ms, versus highly variable latency without it. The operational payoff is measured on the flight itself: maximum trajectory positional error drops from 2.4 m (no slicing) to 1.0 m (with slicing) — a 2.4× reduction — while first-person-view video latency stabilizes near 25 ms. Occasional latency spikes persist even with slicing, which the authors note would need adaptive video codecs to fully absorb.

The contribution is the first integrated evaluation of a fully open-source O-RAN stack for BVLOS drone C2, with an E2SM slot-granularity slicing implementation in OAI and empirical evidence that slice isolation — not scheduler tuning — is what converts a congested 5G link into one that meets 3GPP UAS requirements.

## Summary (ZH)
本文（Pau Baguer、Esteban Municio、Gines Garcia-Aviles、Xavier Costa-Pérez——i2CAT、NEC 欧洲实验室、ICREA；2026 年 8 月 10 日 arXiv）以实测证明：在开源 O-RAN 5G 协议栈上做 RAN 切片，能满足超视距（BVLOS）无人机运行的严格时延预算——指挥控制/遥测须低于约 40 ms、视频须低于约 140 ms，而拥塞下普通比例公平 5G 无法可靠保证。

测试床整合三套开源栈——**OpenAirInterface**（5G NR，运行于 Ettus USRP SDR）、**FlexRIC**（近实时 RIC）与 **PX4** 自动驾驶——并通过 **E2 服务模型（E2SM）**实现时隙粒度切片，将 2/3 资源分配给高优先级无人机控制流、1/3 给背景流量以实现硬隔离。竞争负载下，切片将下行控制时延保持在约 8 ms、上行约 20 ms，而无切片时时延剧烈波动。运行收益在飞行本身上测得：最大轨迹位置误差从 2.4 m（无切片）降至 1.0 m（有切片），减少 2.4 倍；第一视角视频时延稳定在约 25 ms。即便有切片仍存在偶发时延尖峰，作者指出需自适应视频编解码才能完全吸收。

其贡献是首个针对 BVLOS 无人机 C2 的全开源 O-RAN 栈集成评测，在 OAI 中实现 E2SM 时隙粒度切片，并实证：将拥塞 5G 链路转变为满足 3GPP UAS 要求的关键是切片隔离而非调度器调参。

## Key technical points (EN)
- **Stack:** OpenAirInterface 5G NR (USRP SDR) + FlexRIC (near-RT RIC) + PX4 autopilot; two independent 5G TDD links per drone.
- **Slicing:** E2SM slot-granularity, 2/3 control : 1/3 background; hard isolation vs proportional-fair scheduling.
- **Latency:** sliced DL control ~8 ms, UL ~20 ms; FPV video ~25 ms (well under 140 ms); sub-40 ms C2 meets 3GPP UAS.
- **Flight impact:** max trajectory error 2.4 m → 1.0 m (2.4× reduction) with slicing.
- **Caveat:** residual latency spikes persist; adaptive codecs proposed as mitigation.

## Key technical points (ZH)
- **协议栈：** OpenAirInterface 5G NR（USRP SDR）+ FlexRIC（近实时 RIC）+ PX4 自动驾驶；每架无人机两条独立 5G TDD 链路。
- **切片：** E2SM 时隙粒度，2/3 控制 : 1/3 背景；相对比例公平调度实现硬隔离。
- **时延：** 切片下行控制约 8 ms、上行约 20 ms；FPV 视频约 25 ms（远低于 140 ms）；亚 40 ms C2 满足 3GPP UAS。
- **飞行影响：** 最大轨迹误差 2.4 m → 1.0 m（减少 2.4 倍）。
- **注意：** 仍有残余时延尖峰；提出自适应编解码作为缓解。

## Why it matters / what's new (EN)
The KB's open-RAN and slicing entries lean toward AI-driven control and resource-optimization theory; this is a rare end-to-end *empirical* result tying an E2SM slice directly to a physical outcome (a drone's trajectory error), on a fully open stack anyone can reproduce. It also complements the KB's growing UAV-over-cellular cluster (5G-ISAC UAV sensing, low-altitude 5G measurement) by addressing the C2/telemetry reliability leg rather than sensing or coverage. The concrete 2.4× trajectory-error reduction and the "isolation beats scheduler tuning" finding make it a useful reference point for URLLC-style slicing claims.

## Why it matters / what's new (ZH)
KB 的开放 RAN 与切片条目偏重 AI 驱动控制与资源优化理论；本文是少见的端到端*实证*结果，将 E2SM 切片直接与物理结果（无人机轨迹误差）关联，且基于任何人可复现的全开源栈。它还补充了 KB 中日益增多的 UAV-over-cellular 簇（5G-ISAC 无人机感知、低空 5G 测量），处理的是 C2/遥测可靠性一环而非感知或覆盖。2.4 倍轨迹误差降低与"隔离胜过调度器调参"的发现，使其成为 URLLC 式切片论断的有用参照。

## Images
![System architecture: UAV, 5G RAN (OAI/USRP), core network, and near-RT RIC (FlexRIC) with E2SM slicing | 系统架构：无人机、5G RAN（OAI/USRP）、核心网与近实时 RIC（FlexRIC）及 E2SM 切片](https://arxiv.org/html/2608.09481v1/final_architecture_v3.png)
