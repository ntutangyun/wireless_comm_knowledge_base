---
id: 2026-06-23_arxiv-lolla-ai-native-link-adaptation
date_published: 2026-06-22
date_found: 2026-06-23
technology: cellular
type: academic-paper
title_en: "LOLLA: Deep Reinforcement Learning for Closed-Loop Link Adaptation Towards a GPU-Accelerated AI-RAN"
title_zh: "LOLLA：面向GPU加速AI-RAN的闭环链路自适应深度强化学习"
url: "https://arxiv.org/abs/2606.23110"
source_quality: full
topics: [5G-NR, AI-RAN, link-adaptation, MCS, reinforcement-learning, OLLA, dApp]
topic_primary: cellular-ai
topics_secondary: [5g-nr, open-ran]
novelty_score: 3
---

## Summary (EN)

This paper (Rui Wang, Linchao Zhang, Qiang Liu, Kun Yang; submitted 22 June 2026) targets **link adaptation** in 5G NR — the per-transmission selection of modulation-and-coding scheme (MCS) to match the instantaneous channel. The conventional **Outer-Loop Link Adaptation (OLLA)** mechanism adjusts a SINR offset using only first-order, single-bit (ACK/NACK) feedback in a staircase pattern. That coarse control reacts poorly in high-mobility, fast-fading channels, leaving throughput on the table when the channel changes faster than the offset can track.

The authors propose **LOLLA**, which replaces the OLLA staircase with a **deep reinforcement learning policy trained via Proximal Policy Optimization (PPO)**. Instead of a fixed step, the learned policy emits a **continuous SINR offset conditioned on rich PHY/MAC telemetry**, dynamically reshaping the SINR-to-MCS mapping while staying 3GPP-compliant (it still selects from the standard MCS table). The key engineering result is deployment as **the first closed-loop AI-native control dApp running on a GPU-accelerated 5G NR stack**, with end-to-end control latency under **500 microseconds** — fast enough to act within the RAN's real-time loop.

Reported gains are **15%–92% throughput improvement over conventional OLLA** across Doppler frequencies up to 400 Hz, Pareto-optimal operation across reliability targets (1–15% BLER), and generalisation to unseen channel models while scaling to eight concurrent users. The contribution sits alongside existing KB AI-RAN entries (ARIADNE's Sionna-digital-twin link adaptation, GENESIS agentic RAN synthesis) but is distinguished by the **sub-millisecond on-GPU dApp deployment** rather than offline or simulation-only training.

## Summary (ZH)

本文（Rui Wang、Linchao Zhang、Qiang Liu、Kun Yang，2026年6月22日提交）研究 5G NR 的**链路自适应**——即针对每次传输选择调制编码方式（MCS）以匹配瞬时信道。传统的**外环链路自适应（OLLA）**仅用一阶、单比特（ACK/NACK）反馈以阶梯方式调整 SINR 偏移量。这种粗粒度控制在高速移动、快衰落信道下反应迟缓，当信道变化快于偏移量跟踪速度时会损失吞吐。

作者提出 **LOLLA**，用**基于近端策略优化（PPO）训练的深度强化学习策略**取代 OLLA 阶梯机制。学习到的策略不再使用固定步长，而是**根据丰富的 PHY/MAC 遥测输出连续的 SINR 偏移量**，动态重塑 SINR 到 MCS 的映射，同时保持 3GPP 合规（仍从标准 MCS 表中选择）。关键工程成果是将其部署为**首个运行在 GPU 加速 5G NR 协议栈上的闭环 AI 原生控制 dApp**，端到端控制时延低于 **500 微秒**，足以在 RAN 实时环内动作。

报告增益为：在多普勒频率高达 400 Hz 范围内**相对传统 OLLA 吞吐提升 15%–92%**；在 1–15% BLER 各可靠性目标下达到帕累托最优；并能泛化到未见信道模型、扩展到八个并发用户。该工作与 KB 现有 AI-RAN 条目（ARIADNE 的 Sionna 数字孪生链路自适应、GENESIS 智能体 RAN 合成）属同一脉络，但以**亚毫秒级 GPU 上 dApp 部署**区别于离线或纯仿真训练。

## Key technical points (EN)

- **Mechanism**: PPO-trained policy outputs a continuous SINR offset (vs OLLA's single-bit staircase), conditioned on PHY/MAC telemetry; final MCS still drawn from the 3GPP table.
- **Deployment**: first closed-loop AI-native control dApp on a GPU-accelerated 5G NR stack; control latency < 500 µs.
- **Results**: 15%–92% throughput gain over OLLA up to 400 Hz Doppler; Pareto-optimal across 1–15% BLER targets; generalises to unseen channels; scales to 8 users.
- **Positioning**: a concrete real-time on-silicon AI-RAN control loop, not offline/sim-only.

## Key technical points (ZH)

- **机制**：PPO 训练的策略输出连续 SINR 偏移量（相对 OLLA 的单比特阶梯），以 PHY/MAC 遥测为条件；最终 MCS 仍取自 3GPP 标准表。
- **部署**：首个运行于 GPU 加速 5G NR 协议栈的闭环 AI 原生控制 dApp；控制时延 < 500 µs。
- **结果**：多普勒达 400 Hz 时相对 OLLA 吞吐提升 15%–92%；在 1–15% BLER 目标下帕累托最优；可泛化到未见信道；扩展至 8 用户。
- **定位**：真实硅上实时 AI-RAN 控制环，而非离线/纯仿真。

## Why it matters / what's new (EN)

AI-RAN discussion in the KB has been dominated by architecture/vision papers and digital-twin training (ARIADNE, GENESIS, AgentxGCore). LOLLA is a rare entry that closes the loop **on real GPU-accelerated hardware within the RAN real-time budget** (<500 µs) while preserving 3GPP MCS-table compliance — a credible path for AI-native control to run in production rather than only in a twin. The dApp framing also ties it to the O-RAN near-RT/dApp control surface.

## Why it matters / what's new (ZH)

KB 中的 AI-RAN 讨论此前多为架构/愿景论文与数字孪生训练（ARIADNE、GENESIS、AgentxGCore）。LOLLA 是少见地**在真实 GPU 加速硬件上、于 RAN 实时预算（<500 µs）内闭环**、同时保持 3GPP MCS 表合规的工作——为 AI 原生控制走向生产（而非仅在孪生中）提供了可信路径。dApp 形态也将其与 O-RAN 近实时/dApp 控制面相联系。
