---
id: 2026-06-01_arxiv-jamming-resilient-prb-reservation-oran
date_published: 2026-05-28
date_found: 2026-06-01
type: academic-paper
title_en: "Jamming-Resilient PRB Reservation for Latency-Critical O-RAN Network Slicing"
title_zh: "面向时延敏感 O-RAN 网络切片的抗干扰 PRB 预留"
url: "https://arxiv.org/abs/2605.30622"
source_quality: abstract_only
topics: [O-RAN, jamming, network-slicing, URLLC, RIC-xApp]
topic_primary: cellular-security
topics_secondary: [open-ran, network-slicing]
novelty_score: 2
---

## Summary (EN)
This paper tackles adversarial jamming in latency-critical 5G industrial downlinks. When a jammer attacks, the pool of usable physical resource blocks (PRBs) shrinks, queues build up, and URLLC latency budgets are blown — cell-edge users with lower spectral efficiency are hit hardest. The authors propose a **reserve-based resilience framework** for PRB allocation in sliced O-RAN deployments.

The core mechanism is a reserved PRB pool managed by a **near-RT RIC xApp** that blends two behaviours: proactive backlog clearing (drain queues before they overflow) and reactive reserve-capacity activation during jamming. Reserve activation is cast as a sequential decision problem and solved with a **masked Deep Q-Network**, so the control policy adapts to non-stationary jamming patterns rather than assuming a fixed adversary.

Simulations show significant reductions in URLLC latency violations and improved reserve efficiency versus reactive baselines. The work was accepted at the ML-Spec Workshop, IEEE DySPAN 2026.

## Summary (ZH)
本文针对时延敏感的 5G 工业下行中的对抗性干扰。干扰发生时，可用物理资源块（PRB）池缩小、队列堆积、URLLC 时延预算被突破——频谱效率较低的小区边缘用户受冲击最大。作者提出面向切片化 O-RAN 部署的**基于预留的弹性框架**进行 PRB 分配。

核心机制是由**近实时 RIC xApp** 管理的预留 PRB 池，融合两种行为：主动清理积压（在溢出前排空队列）与干扰期间的被动预留容量激活。预留激活被建模为序贯决策问题，用**带掩码的 Deep Q-Network** 求解，使控制策略能适应非平稳干扰模式，而非假设固定攻击者。

仿真显示，相比被动基线，URLLC 时延违例显著减少、预留效率提升。该工作被 IEEE DySPAN 2026 ML-Spec Workshop 接收。

## Key technical points (EN)
- Threat: downlink jamming shrinks usable PRBs → queue buildup → URLLC latency violations, worst at cell edge.
- Mechanism: reserved PRB pool managed by a near-RT RIC xApp; proactive backlog clearing + reactive reserve activation.
- Reserve activation = sequential decision problem solved by a masked DQN, adapting to non-stationary jamming.
- Results: fewer URLLC latency violations, better reserve efficiency vs reactive baselines. (DySPAN 2026 ML-Spec Workshop.)

## Key technical points (ZH)
- 威胁：下行干扰缩小可用 PRB → 队列堆积 → URLLC 时延违例，小区边缘最严重。
- 机制：近实时 RIC xApp 管理预留 PRB 池；主动清积压 + 被动预留激活。
- 预留激活 = 序贯决策，由带掩码 DQN 求解，适应非平稳干扰。
- 结果：相比被动基线，URLLC 时延违例更少、预留效率更高。（DySPAN 2026 ML-Spec Workshop。）

## Why it matters / what's new (EN)
Sits at the intersection of `cellular-security` (jamming resilience) and O-RAN slicing: rather than detect-and-avoid, it pre-allocates a reserve and learns when to activate it under an adaptive adversary, implemented as a deployable near-RT RIC xApp.

## Why it matters / what's new (ZH)
处于 `cellular-security`（抗干扰）与 O-RAN 切片的交叉点：不是检测规避，而是预先分配预留并在自适应攻击者下学习何时激活，以可部署的近实时 RIC xApp 形式实现。
