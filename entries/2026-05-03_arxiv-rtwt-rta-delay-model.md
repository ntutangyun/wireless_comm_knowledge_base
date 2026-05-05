---
id: 2026-05-03_arxiv-rtwt-rta-delay-model
date_published: 2024-02-24
date_found: 2026-05-03
type: academic-paper
title_en: "Dedicated Restricted Target Wake Time for Real-Time Applications in Wi-Fi 7"
title_zh: "面向 Wi-Fi 7 实时业务的专用 R-TWT —— 时延概率模型与参数优化"
url: "https://arxiv.org/abs/2402.15900"
source_quality: full
topics: [802.11be, R-TWT, scheduling, XR]
topic_primary: rtwt-latency
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Belogaev et al. (arxiv 2402.15900, Feb 2024) target real-time application (RTA) support in Wi-Fi 7 by analytically modelling the delay distribution and packet-loss probability for traffic served inside Restricted Target Wake Time (R-TWT) service periods. The model takes traffic-arrival statistics, R-TWT service-period (SP) duration, and SP interval as inputs, and returns an end-to-end delay PDF plus loss probability that the AP's admission control / parameter-tuning loop can use to optimise R-TWT configuration for a target QoS.

The work is parameter-tuning, not protocol-extension: every quantity it controls (SP duration, SP interval, how flows are mapped to R-TWT agreements) is already defined in 802.11be. Validation is via simulation against the analytical model.

## Summary (ZH)

Belogaev 等人（arxiv 2402.15900，2024 年 2 月）针对 Wi-Fi 7 的实时业务（RTA）支持，给出在 R-TWT 服务期（SP）内服务流的时延分布与丢包概率的解析模型。模型输入包括到达过程统计、R-TWT SP 时长与 SP 间隔，输出端到端时延 PDF 与丢包概率，可供 AP 的接入控制 / 参数调优环路按 QoS 目标优化 R-TWT 配置。

工作属于参数整定而非协议扩展：所控制的每个量（SP 时长 / SP 间隔 / 流到 R-TWT 协议的映射）都是 802.11be 已有定义。验证手段为面向解析模型的仿真。

## Key technical points (EN)

- Inputs: traffic-arrival process, R-TWT SP duration, SP interval.
- Outputs: per-flow delay PDF + packet-loss probability under R-TWT.
- AP-side optimisation: pick SP duration / interval to satisfy a target QoS.
- No new IE, Action, MLME, or timing rule — purely runs inside the standard.

## Key technical points (ZH)

- 输入：到达过程、R-TWT SP 时长、SP 间隔。
- 输出：R-TWT 下的逐流时延 PDF + 丢包概率。
- AP 侧优化：选择 SP 时长 / 间隔以达到目标 QoS。
- 不引入新 IE / Action / MLME / 时序规则 —— 完全运行在标准之内。

## Why it matters / what's new (EN)

Adjacent to the existing KB entry `arxiv-mlo-drl-lstm-cross-layer` (DRL+LSTM cross-layer optimiser): both stay inside the standard MAC and tune parameters that *are* in the standard. This paper offers an analytical alternative to the deep-RL approach — useful for constrained APs that can't run a continual RL loop. From a pipeline perspective the same "internal-policy / no observable signature" classification applies.

## Why it matters / what's new (ZH)

与既有 KB 条目 `arxiv-mlo-drl-lstm-cross-layer`（DRL+LSTM 跨层优化器）相邻：两者都停留在标准 MAC 之内，调的也都是标准里已有的参数。本文给出深度 RL 之外的解析替代方案 —— 对于不能跑持续 RL 环路的受限 AP 是有用补充。从流水线视角，同样适用"内部策略 / 无可观测特征"分类。
