---
id: 2026-06-17_arxiv-predictive-scheduling-deterministic-b5g
date_published: 2026-06-15
date_found: 2026-06-17
type: academic-paper
technology: cellular
title_en: "Prediction-Driven Scheduling for Deterministic Beyond-5G: Robust Configured Grant + Future-Aware Dynamic Allocation (paper pair)"
title_zh: "面向确定性 Beyond-5G 的预测驱动调度：鲁棒配置授权 + 未来感知动态分配（论文对）"
url: "https://arxiv.org/abs/2606.17653"
source_quality: abstract
topics: [5G-NR, deterministic-communications, configured-grant, scheduling, traffic-prediction, URLLC, TSN]
topic_primary: 5g-nr
topics_secondary: [cellular-ai]
novelty_score: 2
---

## Summary (EN)
Two companion papers from the UMH-Elche group (Riaz, Lucas-Estañ, Coll-Perales, Gozalvez; arXiv 2606.17653 and 2606.16471, June 2026) tackle the same problem from two angles: how to use **traffic prediction** to schedule **deterministic** (bounded-latency) wireless services in 5G/beyond-5G when traffic is variable and mixed, without letting prediction errors break the latency guarantee. Both target the deterministic-/TSN-over-5G use case where industrial flows need guaranteed bounded latency.

**Paper 1 — Predictive Configured Grant Scheduling (2606.17653).** Configured Grant (CG), a 3GPP NR feature, cuts latency by *pre-allocating* periodic uplink resources so the UE skips the scheduling-request round-trip — but CG's efficiency falls apart under variable traffic, since fixed periodic grants either waste resources or miss bursts. This paper makes CG **predictive and error-robust**: it sizes/times the pre-allocations from traffic forecasts but explicitly builds in robustness margins to absorb forecast inaccuracy, so bounded latency holds even when predictions are wrong. Reported effect: significantly higher capacity to support deterministic service levels *and* better resource utilization under variable/mixed flows.

**Paper 2 — Predictive Dynamic Scheduling for Deterministic Communications in Beyond 5G (2606.16471).** The dynamic-grant counterpart: rather than pre-allocating, the scheduler allocates resources to *incoming* requests while **avoiding the resources likely to be needed by future predicted packets** — i.e. it reserves headroom for forecast-imminent deterministic traffic instead of greedily packing the current request. This reduces the inefficiency that semi-static prediction-based schemes suffer from prediction error, and is shown effective across mixed flows with heterogeneous QoS requirements.

Together the pair contrasts the two NR uplink-scheduling regimes — configured (pre-allocated) vs dynamic (request-driven) grants — under a common prediction-with-error-margins philosophy for deterministic traffic. Detailed simulation parameters, baselines and numeric gains are not exposed in the abstracts (2606.16471 arXiv HTML 404'd at fetch time); entry marked `source_quality: abstract`.

## Summary (ZH)
来自 UMH-Elche 团队的两篇姊妹论文（Riaz、Lucas-Estañ、Coll-Perales、Gozalvez；arXiv 2606.17653 与 2606.16471，2026 年 6 月）从两个角度处理同一问题：在 5G/Beyond-5G 中当流量可变且混合时，如何利用**流量预测**调度**确定性**（有界时延）无线业务，同时不让预测误差破坏时延保证。两篇均面向"确定性/TSN over 5G"用例——工业流需要有保证的有界时延。

**论文一——预测式配置授权调度（2606.17653）。** 配置授权（CG，3GPP NR 特性）通过*预分配*周期性上行资源、让 UE 跳过调度请求往返来降低时延——但在可变流量下 CG 效率崩坏，固定周期授权要么浪费资源、要么错过突发。本文使 CG **具预测性且对误差鲁棒**：依据流量预测确定预分配的大小/时机，但显式引入鲁棒裕量以吸收预测不准，使预测出错时仍保持有界时延。报告效果：在可变/混合流下显著提升支撑确定性服务等级的能力*并*改善资源利用率。

**论文二——面向 Beyond 5G 确定性通信的预测式动态调度（2606.16471）。** 动态授权对应版本：调度器不做预分配，而是为*到来*的请求分配资源时，**回避未来预测分组可能需要的资源**——即为预测即将到来的确定性流量预留余量，而非贪心地塞满当前请求。这降低了基于预测的半静态方案因预测误差导致的低效，并在具异构 QoS 需求的混合流上证明有效。

两篇合起来对比 NR 上行调度的两种机制——配置（预分配）与动态（请求驱动）授权——在面向确定性流量的"带误差裕量的预测"共同理念下。详细仿真参数、基线与数值增益未见于摘要（2606.16471 arXiv HTML 抓取时 404）；条目标记 `source_quality: abstract`。

## Key technical points (EN)
- **Shared theme**: traffic-prediction-driven scheduling for *deterministic* (bounded-latency) B5G traffic, robust to prediction error; industrial/TSN-over-5G use case.
- **Paper 1 (2606.17653)**: makes 3GPP **Configured Grant** predictive + error-robust — forecasts sized with explicit robustness margins so bounded latency survives wrong predictions; higher deterministic capacity + better utilization under variable/mixed flows.
- **Paper 2 (2606.16471)**: **dynamic-grant** counterpart — allocate incoming requests while *avoiding resources predicted-needed by future packets*; cuts semi-static prediction-error waste; effective across heterogeneous-QoS mixed flows.
- **Contrast captured**: configured (pre-allocated) vs dynamic (request-driven) NR uplink grants under one prediction-with-margins philosophy.
- **Group**: UMH-Elche (Riaz/Lucas-Estañ/Coll-Perales/Gozalvez) — same lab as the recent flexible-duplexing deterministic-scheduling and C-V2X entries.
- **Caveat**: numeric results/baselines not in abstracts; 16471 HTML 404 at fetch; `source_quality: abstract`.

## Key technical points (ZH)
- **共同主题**：面向*确定性*（有界时延）B5G 流量的、对预测误差鲁棒的预测驱动调度；工业/TSN over 5G 用例。
- **论文一（2606.17653）**：使 3GPP **配置授权**具预测性 + 误差鲁棒——以显式鲁棒裕量确定预测预分配，使预测出错时仍保有界时延；可变/混合流下确定性容量更高、利用率更好。
- **论文二（2606.16471）**：**动态授权**对应版——为到来请求分配时*回避未来分组预测所需资源*；削减半静态方案的预测误差浪费；在异构 QoS 混合流上有效。
- **捕捉到的对比**：配置（预分配）与动态（请求驱动）NR 上行授权，统一于"带裕量预测"理念。
- **团队**：UMH-Elche（Riaz/Lucas-Estañ/Coll-Perales/Gozalvez）——与近期柔性双工确定性调度、C-V2X 条目同一实验室。
- **注意**：摘要未含数值结果/基线；16471 抓取时 HTML 404；`source_quality: abstract`。

## Why it matters / what's new (EN)
The `5g-nr` bin tracks NR scheduling and the deterministic-/URLLC-over-5G thread, where the UMH-Elche group has been in a publishing burst (flexible-duplexing predictive scheduling, semantic C-V2X). These two papers sharpen that thread by directly confronting the weak spot of prediction-based deterministic scheduling — what happens when the forecast is wrong — and answering it for *both* NR uplink-grant regimes: keep Configured Grant's latency win but add robustness margins (paper 1), or, for dynamic grants, reserve headroom for predicted-imminent packets instead of greedily packing the present (paper 2). For anyone building TSN-style bounded-latency services over 5G, the configured-vs-dynamic framing under a shared error-robust-prediction principle is a useful design lens; the entry is abstract-level pending full-text (16471 HTML not yet rendered).

## Why it matters / what's new (ZH)
`5g-nr` 分箱跟踪 NR 调度与"确定性/URLLC over 5G"主线，UMH-Elche 团队近期在此密集发表（柔性双工预测调度、语义 C-V2X）。这两篇直面预测式确定性调度的软肋——预测出错时怎么办——并为 NR *两种*上行授权机制给出回答：保留配置授权的时延优势但加入鲁棒裕量（论文一），或在动态授权中为预测即将到来的分组预留余量而非贪心塞满当前（论文二），从而锐化该主线。对在 5G 上构建 TSN 式有界时延业务者，"配置 vs 动态"在共同的"误差鲁棒预测"原则下的对照是有用的设计视角；本条目为摘要级，待全文（16471 HTML 尚未渲染）。
