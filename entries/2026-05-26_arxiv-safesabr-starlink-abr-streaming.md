---
id: 2026-05-26_arxiv-safesabr-starlink-abr-streaming
date_published: 2026-05-22
date_found: 2026-05-26
type: academic-paper
title_en: "SafeSABR: Risk-Calibrated Adaptive Bitrate Streaming over Starlink Networks"
title_zh: "SafeSABR：面向 Starlink 网络的风险校准自适应码率流媒体"
url: "https://arxiv.org/abs/2605.23560"
source_quality: abstract_only
topics: [Starlink, LEO, adaptive-bitrate, video-streaming, reinforcement-learning, QoE]
topic_primary: starlink
topics_secondary: [sat-ai, leo-constellations]
novelty_score: 3
---

## Summary (EN)
SafeSABR is an adaptive-bitrate (ABR) video-streaming controller designed for the specific pathology of Starlink LEO links: high-bitrate sessions suffer severe, session-level rebuffering because throughput fluctuates rapidly as satellites move and the terminal hands over between them. Conventional learned ABR algorithms optimize average quality and therefore look good on mean metrics while still allowing occasional catastrophic stalls — exactly the tail events that ruin the viewing experience. SafeSABR reframes the problem as a QoE-vs-severe-risk trade-off rather than a pure quality-maximization problem.

The framework is a three-stage pipeline. First, behavior-cloning pretraining bootstraps a high-quality baseline policy. Second, risk-calibrated reinforcement-learning fine-tuning pushes the policy away from "severe-tail" actions — the bitrate choices that occasionally trigger long stalls. Third, a runtime safety auditor validates each bitrate decision against a forecasted "safe-capacity lower bound," so a decision is only allowed if predicted throughput can sustain it. This couples a learned policy with an explicit safety constraint derived from LEO-aware throughput prediction.

Evaluated on real Starlink traces against online, prediction-assisted, and learned ABR baselines, SafeSABR cuts severe-stall sessions from 22.8% to 7.2% and improves worst-5% session rebuffering from 54.30 s to 22.68 s, at a cost of only 1.8% in average QoE. The headline is that it trades a small amount of mean quality for a large reduction in the worst-case experience.

## Summary (ZH)
SafeSABR 是一个自适应码率（ABR）视频流控制器，专门针对 Starlink 低轨链路的特有问题：高码率会话会出现严重的会话级重缓冲，因为卫星移动与终端在卫星间切换会导致吞吐快速波动。传统的学习型 ABR 算法优化平均质量，因此平均指标看起来不错，却仍会偶发灾难性卡顿——而正是这些尾部事件毁掉观看体验。SafeSABR 将问题重构为"QoE 与严重风险之间的权衡"，而非单纯的质量最大化。

该框架是三阶段流水线：第一，行为克隆预训练，引导出高质量的基线策略；第二，风险校准的强化学习微调，把策略推离会偶发长卡顿的"严重尾部"码率动作；第三，运行时安全审计器，将每个码率决策与预测的"安全容量下界"比对，只有当预测吞吐能够支撑时才允许该决策。这样就把学习型策略与一个由 LEO 感知吞吐预测导出的显式安全约束耦合起来。

在真实 Starlink 轨迹上、与在线式、预测辅助式和学习型 ABR 基线对比，SafeSABR 将严重卡顿会话从 22.8% 降到 7.2%，将最差 5% 会话的重缓冲从 54.30 秒改善到 22.68 秒，代价仅为平均 QoE 下降 1.8%。核心结论是：以少量平均质量的代价，换取最坏情况体验的大幅改善。

## Key technical points (EN)
- Targets **session-level severe rebuffering** on Starlink caused by satellite-mobility/handover throughput swings — a tail-risk problem mean-optimizing ABR misses.
- Three stages: **behavior-cloning pretraining** → **risk-calibrated RL fine-tuning** (suppresses severe-tail actions) → **runtime safety auditor** enforcing a **safe-capacity lower bound**.
- Evaluated on **real Starlink traces** vs online / prediction-assisted / learned ABR baselines.
- Severe-stall sessions **22.8% → 7.2%**; worst-5% rebuffering **54.30 s → 22.68 s**; only **1.8%** average-QoE cost.

## Key technical points (ZH)
- 针对 Starlink 上由卫星移动/切换吞吐波动引起的 **会话级严重重缓冲**——这是均值优化型 ABR 忽略的尾部风险问题。
- 三阶段：**行为克隆预训练** → **风险校准 RL 微调**（抑制严重尾部动作）→ **运行时安全审计器** 强制 **安全容量下界**。
- 在 **真实 Starlink 轨迹** 上与在线式/预测辅助式/学习型 ABR 基线对比。
- 严重卡顿会话 **22.8% → 7.2%**；最差 5% 重缓冲 **54.30 秒 → 22.68 秒**；平均 QoE 代价仅 **1.8%**。

## Why it matters / what's new (EN)
Most ABR research — and most LEO-streaming work — chases average QoE. SafeSABR's contribution is to make the *tail* a first-class objective: it explicitly models the severe-rebuffering risk that Starlink's handover dynamics create, and constrains a learned policy with a forecast-derived safe-capacity bound rather than trusting the policy alone. For the KB this is a distinct application angle on Starlink/LEO — an application-layer (video QoE) consequence of the link-layer mobility/handover variability that the constellation entries describe, and a concrete example of risk-sensitive RL applied to satellite connectivity.

## Why it matters / what's new (ZH)
多数 ABR 研究——以及多数 LEO 流媒体工作——追求平均 QoE。SafeSABR 的贡献是把 **尾部** 作为一等目标：显式建模 Starlink 切换动态带来的严重重缓冲风险，并用预测导出的安全容量界约束学习型策略，而非单纯信任策略本身。对 KB 而言，这是 Starlink/LEO 的一个独特应用视角——它是星座条目所描述的链路层移动/切换波动在应用层（视频 QoE）的后果，也是风险敏感 RL 应用于卫星连接的具体案例。
