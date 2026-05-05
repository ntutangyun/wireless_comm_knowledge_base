---
id: 2026-05-03_arxiv-twt-deterministic-scheduling-wifi6
date_published: 2025-05-01
date_found: 2026-05-03
type: academic-paper
title_en: "Deterministic Scheduling over Wi-Fi 6 using Target Wake Time: An Experimental Approach"
title_zh: "在 Wi-Fi 6 上用 TWT 实现确定性调度 —— 实验方法"
url: "https://arxiv.org/abs/2505.00447"
source_quality: full
topics: [802.11ax, scheduling, R-TWT, XR]
topic_primary: rtwt-latency
topics_secondary: [energy-power-save]
novelty_score: 2
---

## Summary (EN)

Rajendran & Agnihotri (arxiv 2505.00447, May 2025) repurpose 802.11ax Target Wake Time — originally a power-save mechanism — as a deterministic scheduling primitive on a real Wi-Fi 6 testbed. They formulate parameter selection (TWT service-period duration, interval, broadcast vs. individual TWT) as a small optimisation problem and report consistent improvements over plain CSMA/CA on contention-heavy workloads.

The contribution is the *use* of an existing standard primitive in a new way; no new on-the-wire field is introduced. The setup is a Wi-Fi 6 testbed (not Wi-Fi 7 / R-TWT), so the work also serves as an empirical reference for what TWT-as-scheduler buys you before R-TWT's stronger guarantees become available.

## Summary (ZH)

Rajendran 与 Agnihotri（arxiv 2505.00447，2025 年 5 月）在真实 Wi-Fi 6 测试床上把 802.11ax 的 TWT —— 原本是省电机制 —— 改作确定性调度原语。他们把参数选择（TWT 服务期时长、间隔、广播 vs 个体 TWT）建模为一个小型优化问题，报告在重竞争负载下相对纯 CSMA/CA 一致地优胜。

贡献在于「以新方式使用既有标准原语」；不引入任何新的空口字段。平台为 Wi-Fi 6（不是 Wi-Fi 7 / R-TWT），因此也可作为「TWT 作调度器」的实证参考 —— 即在 R-TWT 更强保证可用之前，该用法能拿到多少。

## Key technical points (EN)

- Wi-Fi 6 testbed (not Wi-Fi 7); uses individual + broadcast TWT per 802.11ax.
- Parameter optimisation problem over SP duration / interval / mapping.
- Empirically beats CSMA/CA on contention-heavy workloads.
- No new IE / Action / MLME — pure parameter-tuning use of existing TWT.

## Key technical points (ZH)

- Wi-Fi 6 实验床（非 Wi-Fi 7）；按 802.11ax 用个体 + 广播 TWT。
- 在 SP 时长 / 间隔 / 映射上的参数优化问题。
- 实测在重竞争负载上一致地胜过 CSMA/CA。
- 不引入新 IE / Action / MLME —— 纯粹「用既有 TWT 做参数整定」。

## Why it matters / what's new (EN)

Pairs with `arxiv-rtwt-rta-delay-model` (Belogaev 2024) — the latter is analytical for R-TWT in Wi-Fi 7, this one is empirical for vanilla TWT in Wi-Fi 6. Together they bracket what's achievable today (Wi-Fi 6 measurements) vs. what's modelled for tomorrow (Wi-Fi 7 R-TWT).

## Why it matters / what's new (ZH)

与 `arxiv-rtwt-rta-delay-model`（Belogaev 2024）配对：后者是 Wi-Fi 7 R-TWT 的解析；本文是 Wi-Fi 6 朴素 TWT 的实测。二者一起划出了「今天可拿到的（Wi-Fi 6 实测）vs 明天可建模的（Wi-Fi 7 R-TWT）」边界。与若干「内部优化器商业秘密」条目同属「内部策略 / 无可观测特征」模式。
