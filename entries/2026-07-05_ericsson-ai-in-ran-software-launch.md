---
id: 2026-07-05_ericsson-ai-in-ran-software-launch
date_published: 2026-06-11
date_found: 2026-07-05
type: industry-news
technology: cellular
title_en: "Ericsson launches 'AI in RAN' software: telco-grade AI models running inside baseband and radio at microsecond latency"
title_zh: "爱立信发布 'AI in RAN' 软件：电信级 AI 模型以微秒级时延运行于基带与射频单元内部"
url: "https://www.ericsson.com/en/news/2026/6/the-ran-gets-smarter-ericsson-puts-ai-where-it-matters"
source_quality: full
topics: [AI-RAN, 5G-Advanced, link-adaptation, beamforming, positioning]
topic_primary: cellular-ai
topics_secondary: [5g-nr]
novelty_score: 2
---

## Summary (EN)

Ericsson announced (June 11, 2026) the commercial launch of **AI in RAN**, a software subscription that embeds telco-grade AI models directly inside RAN infrastructure — executing in the baseband and radio components at microsecond-level inference latency on Ericsson Silicon and RAN Compute, with no additional hardware required. The first features shipped in Q2 2026, with further releases through the year, and the offering targets both existing 5G networks and future AI-native architectures.

The launch bundle names six features: an **AI-native Scheduler for Link Adaptation** (real-time optimization of transmission parameters), **AI-powered Macro Positioning** (up to 5× greater user-positioning precision), **AI-managed Beamforming** (directing radio energy at target coverage with 90–95% coverage-prediction accuracy), **AI-powered Multi-layer Coordination** (cross-layer/carrier operation coordination), plus **Performance Management Event Schema Files** and **Augmented Observability** for monitoring the AI itself. Ericsson's headline performance claims: up to 20% higher downlink throughput, up to 10% better spectral efficiency, and support for 2× more concurrent high-traffic users.

The significance is architectural: rather than hosting AI in an external controller loop (the O-RAN Near-RT RIC pattern, with its millisecond-scale E2 loop), Ericsson is productizing inference *inside* the scheduler/beamforming fast path. The announcement frames the software as the foundation Ericsson will carry into AI-native 6G.

## Summary (ZH)

爱立信于 2026 年 6 月 11 日宣布商用发布 **AI in RAN** 软件订阅服务，将电信级 AI 模型直接嵌入 RAN 基础设施——在 Ericsson Silicon 与 RAN Compute 上的基带和射频组件内以微秒级推理时延运行，无需额外硬件。首批功能已于 2026 年第二季度交付，年内将持续发布增强功能，该产品同时面向现有 5G 网络和未来的 AI 原生架构。

发布包包含六项具名功能：**AI 原生链路自适应调度器**（实时优化传输参数）、**AI 宏定位**（用户定位精度最高提升 5 倍）、**AI 管理的波束成形**（覆盖预测精度 90–95%）、**AI 多层协调**（跨层/跨载波运行协调），以及用于监控 AI 本身的**性能管理事件模式文件**和**增强可观测性**。爱立信给出的性能指标：下行吞吐最高提升 20%，频谱效率最高提升 10%，支持 2 倍并发大流量用户。

其意义在于架构层面：不同于把 AI 放在外部控制器环路（O-RAN 近实时 RIC 模式及其毫秒级 E2 环路），爱立信将推理产品化到调度器/波束成形快路径*内部*。公告将该软件定位为爱立信迈向 AI 原生 6G 的基础。

## Key technical points (EN)

- AI models execute inside baseband and radio (Ericsson Silicon + RAN Compute) at microsecond-level latency — in the scheduler fast path, not an external RIC loop.
- Six launch features: AI-native Link-Adaptation Scheduler, AI Macro Positioning, AI-managed Beamforming, AI Multi-layer Coordination, PM Event Schema Files, Augmented Observability.
- Claimed gains: up to +20% DL throughput, +10% spectral efficiency, 2× concurrent high-traffic users, 90–95% coverage-prediction accuracy, 5× positioning precision.
- Delivered as a software subscription on existing hardware; first features GA in Q2 2026.
- Positioned as the on-ramp to AI-native 6G (3GPP Release 21 era).

## Key technical points (ZH)

- AI 模型在基带与射频内部（Ericsson Silicon + RAN Compute）以微秒级时延执行——位于调度器快路径中，而非外部 RIC 环路。
- 六项首发功能：AI 原生链路自适应调度器、AI 宏定位、AI 管理波束成形、AI 多层协调、性能管理事件模式文件、增强可观测性。
- 宣称收益：下行吞吐最高 +20%，频谱效率 +10%，并发大流量用户 2 倍，覆盖预测精度 90–95%，定位精度 5 倍。
- 以软件订阅形式交付于现有硬件；首批功能 2026 年第二季度正式可用。
- 定位为迈向 AI 原生 6G（3GPP Release 21 时代）的入口。

## Why it matters / what's new (EN)

This is the clearest vendor productization yet of *in-fast-path* RAN AI — the industrial counterpart to the academic result in 2026-07-04_arxiv-realtime-ai-near-rt-ric-xapp, which demonstrated 1–25 µs compiled-in-binary inference inside an O-RAN xApp and identified the ~4 ms E2 loop as the bottleneck. Ericsson's answer to that bottleneck is to skip the external loop entirely and run models on its own silicon. Against the KB's AI-RAN thread (Nvidia AI-RAN plans, Qualcomm RAN AI, AI-RAN Alliance coverage), this entry marks the shift from roadmap to shipping software with quantified operator-facing claims.

## Why it matters / what's new (ZH)

这是迄今最明确的*快路径内* RAN AI 厂商产品化——与 2026-07-04_arxiv-realtime-ai-near-rt-ric-xapp 的学术结果形成产业对照：该论文在 O-RAN xApp 内演示了 1–25 µs 的编译内嵌推理，并指出约 4 ms 的 E2 环路是瓶颈。爱立信对该瓶颈的回答是完全绕过外部环路，在自家硅片上运行模型。相对 KB 中的 AI-RAN 线索（Nvidia AI-RAN 计划、Qualcomm RAN AI、AI-RAN 联盟报道），本条目标志着从路线图到带量化运营商指标的正式出货软件的转变。
