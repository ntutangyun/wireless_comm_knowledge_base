---
id: 2026-05-01_arxiv-llm-6ghz-wifi-nru-coexistence
date_found: 2026-05-01
date_published: 2025-09-26
type: academic-paper
title_en: "LLM-Assisted Alpha Fairness for 6 GHz WiFi and NR-U Coexistence: An Agentic Orchestrator for Throughput, Energy, and SLA"
title_zh: "面向 6 GHz Wi-Fi 与 NR-U 共存的 LLM 辅助 Alpha 公平：兼顾吞吐、能耗与 SLA 的智能体调度器"
url: "https://arxiv.org/abs/2510.17814"
source_quality: full
topics: [802.11be, agentic-AI, scheduling]
topic_primary: spectrum-policy
topics_secondary: [agentic-wifi, ai-for-wifi]
novelty_score: 4
---

## Summary (EN)

Wang, Lu, Liu, Zhu, and Liu (September 2025) tackle one of the messiest open problems in unlicensed spectrum: how does Wi-Fi 7 (in 6 GHz) coexist *fairly* with 5G NR-U (also in 6 GHz), where both contend under listen-before-talk (LBT) rules? Their answer is an **agentic orchestrator** that splits the decision in two — an LLM generates **interpretable** policy parameters (alpha-fairness index, duty-cycle limits, per-class weights) from telemetry; a deterministic optimiser then applies safety constraints and computes the actual fair allocation, accounting for LBT losses and energy cost.

The **interpretability split** is the design contribution. Pure LLM-policy systems are hard to certify; pure deterministic systems can't adapt to operator intent. Splitting LLM (intent → parameters) from optimiser (parameters → allocation) keeps the LLM out of the safety-critical path.

Headline numbers from a dual-160 MHz simulator: one LLM configuration gets **35.3% lower total energy** at modest throughput cost; another gets **+3.5% total bits and +12.2% bits/J** vs rule-based baselines.

## Summary (ZH)

Wang、Lu、Liu、Zhu、Liu（2025 年 9 月）攻克免许可频段中最棘手的开放问题之一：在 6 GHz 频段，Wi-Fi 7 如何与 5G NR-U 在 LBT（先听后讲）规则下进行*公平*共存？答案是一个**智能体调度器**，把决策一分为二 —— LLM 从遥测中生成**可解释**的策略参数（alpha 公平指数、占空比上限、每类权重）；然后由一个确定性优化器在这些参数上施加安全约束，计算真实分配，并考虑 LBT 损失与能耗。

**可解释性切分**是本文的设计贡献。纯 LLM 策略系统难以认证；纯确定性系统又无法贴合运营商意图。把 LLM（意图→参数）与优化器（参数→分配）解耦，使 LLM 处于安全关键路径之外。

双 160 MHz 模拟器中关键数据：一种 LLM 配置在小幅吞吐损失下总能耗**降低 35.3%**；另一种配置相对基于规则的基线获得**总比特 +3.5%、bits/J +12.2%**。

## Key technical points (EN)

- **Setting:** unlicensed 6 GHz, Wi-Fi 7 vs 5G NR-U under LBT
- **Architecture split:** LLM generates interpretable policy params; deterministic optimiser does safety + allocation
- **Output policy:** alpha-fairness index, duty-cycle limits, per-class weights
- **Numbers:** −35.3% energy (configuration A) or +3.5% throughput / +12.2% bits/J (config B)
- **Reproducible** code + logs released

## Key technical points (ZH)

- **场景：** 免许可 6 GHz，Wi-Fi 7 与 5G NR-U 在 LBT 下竞争
- **架构切分：** LLM 生成可解释策略参数；确定性优化器负责安全约束 + 资源分配
- **输出策略：** alpha 公平指数、占空比上限、每类权重
- **数据：** 总能耗 −35.3%（A 配置）或 总比特 +3.5% / bits/J +12.2%（B 配置）
- **可复现** —— 代码与日志公开

## Why it matters / what's new (EN)

- **Architectural template for safety-aware agentic Wi-Fi.** The "LLM → params → optimiser" pattern is a portable design that solves the certification problem for production agentic networks.
- **6 GHz coexistence is now a hot topic.** With the 20 MHz Wi-Fi 7 IoT cert (`2026-05-01_wifi-alliance-20mhz-iot-cert.md`) and increasing Wi-Fi 7 deployment, expect more 6 GHz coexistence work — this paper sets the bar.
- **Pairs with Zheng et al.'s LLM-RL paper (`2026-05-01_arxiv-llm-rl-wireless-optimization.md`):** both put LLM upstream rather than at the policy output, but for different reasons (state representation vs interpretability).

## Why it matters / what's new (ZH)

- **安全感知智能体 Wi-Fi 的架构样板。** "LLM → 参数 → 优化器"模式是可迁移设计，解决了生产环境智能体网络的认证问题。
- **6 GHz 共存已经是热门议题。** 加上 20 MHz Wi-Fi 7 IoT 认证（`2026-05-01_wifi-alliance-20mhz-iot-cert.md`）以及 Wi-Fi 7 部署扩张，6 GHz 共存工作必然增多 —— 本论文树立了基线。
- **与 Zheng 等人的 LLM-RL 论文（`2026-05-01_arxiv-llm-rl-wireless-optimization.md`）形成搭配：** 二者都把 LLM 放在上游而非策略输出，但出于不同动机（状态表示 vs 可解释性）。
