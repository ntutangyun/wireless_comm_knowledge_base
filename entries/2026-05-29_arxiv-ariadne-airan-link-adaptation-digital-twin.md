---
id: 2026-05-29_arxiv-ariadne-airan-link-adaptation-digital-twin
date_published: 2026-05-28
date_found: 2026-05-29
type: academic-paper
technology: cellular
title_en: "ARIADNE: AI-RAN-informed link adaptation learned in a Sionna digital twin"
title_zh: "ARIADNE：在 Sionna 数字孪生中学习的 AI-RAN 链路自适应"
url: "https://arxiv.org/abs/2605.29772"
source_quality: full
topics: [AI-RAN, link-adaptation, MCS, reinforcement-learning, digital-twin, Sionna, OLLA]
topic_primary: cellular-ai
topics_secondary: [open-ran, 5g-nr]
novelty_score: 3
---

## Summary (EN)
ARIADNE (Tsampazi, Neasamoni Santhi, Perrotta, Dressler, Melodia — Northeastern / TU Berlin) is an online reinforcement-learning module for RAN link adaptation that trains inside a digital twin. Link adaptation is the runtime choice of Modulation and Coding Scheme (MCS) per user: pick too aggressive an MCS and blocks fail; too conservative and spectrum is wasted. Industry today uses Outer Loop Link Adaptation (OLLA), a fixed-threshold SINR-offset controller. ARIADNE replaces that heuristic with an RL agent that learns an MCS-selection policy from experience.

The key enabler is that ARIADNE integrates directly with NVIDIA Sionna, a GPU-accelerated, ray-tracing-based link-level simulator used as a controlled digital-twin environment. The agent can therefore explore aggressive and conservative MCS strategies safely in simulation before any over-the-air deployment, and the authors report that the learned policies deviate meaningfully from OLLA — sometimes more conservative, sometimes more aggressive, depending on channel configuration — rather than simply reproducing the hand-tuned rule.

Reported results: roughly +11% spectral efficiency over the industry-standard OLLA and +20% over a state-of-the-art baseline, with the learned behaviours validated against real 5G over-the-air measurements (not only simulation). This pairs the digital-twin training loop with empirical confirmation, which is the part that distinguishes it from prior RL-for-link-adaptation work that stayed in simulation.

## Summary (ZH)
ARIADNE（Tsampazi、Neasamoni Santhi、Perrotta、Dressler、Melodia——东北大学 / 柏林工大）是一个用于 RAN 链路自适应的在线强化学习模块，在数字孪生中训练。链路自适应即按用户实时选择调制编码方案（MCS）：选得过激进则数据块失败，过保守则浪费频谱。业界现用外环链路自适应（OLLA）——一种固定阈值的 SINR 偏置控制器。ARIADNE 用一个从经验中学习 MCS 选择策略的 RL 智能体取代该启发式。

关键使能在于 ARIADNE 直接与 NVIDIA Sionna 集成——一个 GPU 加速、基于光线追踪的链路级仿真器，用作受控数字孪生环境。智能体因此可在空口部署前于仿真中安全地探索激进与保守的 MCS 策略；作者报告所学策略与 OLLA 有实质性差异——视信道配置或更保守或更激进——而非简单复刻手调规则。

报告结果：相对业界标准 OLLA 频谱效率约 +11%，相对一项最新基线约 +20%；且所学行为经真实 5G 空口测量验证（不仅仿真）。它把数字孪生训练环与实测确认结合，这正是其区别于此前停留在仿真的 RL 链路自适应工作之处。

## Key technical points (EN)
- Problem: per-user MCS selection (link adaptation); baseline = fixed-threshold OLLA.
- Mechanism: online RL agent integrated with NVIDIA Sionna (ray-tracing link-level sim) as a digital twin.
- Learned policies diverge from OLLA (more/less aggressive per channel config), not a reproduction of the heuristic.
- Results: ≈ +11% spectral efficiency vs OLLA; ≈ +20% vs a SOTA baseline.
- Validation: learned behaviours confirmed against real 5G over-the-air measurements.

## Key technical points (ZH)
- 问题：按用户的 MCS 选择（链路自适应）；基线为固定阈值 OLLA。
- 机制：在线 RL 智能体与 NVIDIA Sionna（光线追踪链路级仿真）集成，用作数字孪生。
- 所学策略偏离 OLLA（按信道或更激进/更保守），非复刻启发式。
- 结果：相对 OLLA 频谱效率约 +11%；相对 SOTA 基线约 +20%。
- 验证：所学行为经真实 5G 空口测量确认。

## Why it matters / what's new (EN)
This extends the KB's AI-RAN line — GENESIS (2026-05-27_arxiv-genesis-agentic-6g-ran-synthesis) and OpenTwin (2026-05-26_arxiv-opentwin-oran-digital-twin), both also digital-twin-centric — down to a specific, classical RAN control loop (link adaptation) where OLLA has been the unquestioned default for years. The novelty is less "use RL for MCS" (explored before) and more the Sionna-digital-twin training loop plus the over-the-air validation that the learned policy beats OLLA on real hardware. From the same Northeastern group as GENESIS, it suggests a consistent thesis: train RAN control in a high-fidelity twin, validate OTA.

## Why it matters / what's new (ZH)
本条目把本 KB 的 AI-RAN 脉络——GENESIS（2026-05-27_arxiv-genesis-agentic-6g-ran-synthesis）与 OpenTwin（2026-05-26_arxiv-opentwin-oran-digital-twin，均以数字孪生为核心）——下沉到一个具体的经典 RAN 控制环（链路自适应），而 OLLA 多年来一直是该环的默认方案。新意不在"用 RL 选 MCS"（前人已探），而在 Sionna 数字孪生训练环加上"所学策略在真实硬件上胜过 OLLA"的空口验证。它与 GENESIS 同出东北大学团队，呼应一致主张：在高保真孪生中训练 RAN 控制、再以空口验证。
