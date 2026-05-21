---
id: 2026-05-21_tmobile-ericsson-ai-ran-scheduler
date_published: 2026-05-12
date_found: 2026-05-21
type: industry-news
title_en: "T-Mobile and Ericsson Achieve World-First AI-Native RAN Scheduler on Live 5G Advanced Network"
title_zh: "T-Mobile 与爱立信在现网 5G Advanced 上实现全球首个 AI 原生 RAN 调度器"
url: "https://www.ericsson.com/en/press-releases/6/2026/t-mobile-ericsson-ai-ran"
source_quality: full
topics: [5G-Advanced, AI-RAN, neural-network, scheduler, spectral-efficiency, T-Mobile]
topic_primary: cellular-ai
topics_secondary: [5g-nr]
technology: cellular
novelty_score: 3
---

## Summary (EN)
Ericsson and T-Mobile have moved an AI-native Scheduler with Link Adaptation into large-scale commercial trials on live 5G Advanced network traffic — a world first for AI-native RAN. The software uses a neural network running directly on Ericsson's TCO-optimized hardware to predict rapidly changing radio conditions in real time, improving spectral efficiency and boosting downlink data rates.

In trials with T-Mobile, the AI-native Scheduler achieved close to 10% increase in spectral efficiency and up to 15% boost in downlink throughput compared to legacy rule-based methods. Critically, these scaled live-network results match earlier limited-geography testing, demonstrating adaptability to diverse deployment environments. The scheduler enables reliable performance even in high-demand environments with poor RF conditions — smoother streaming, more responsive gaming, and uninterrupted video calls during peak usage.

This follows T-Mobile's milestone as the first US operator to deploy 5G Advanced nationwide in 2025. The AI-native Scheduler represents a shift from rule-based to neural-network-driven RAN decision-making, with the neural network running directly on the RAN compute hardware (not in a separate AI accelerator or cloud).

## Summary (ZH)
爱立信与 T-Mobile 已将 AI 原生调度器与链路自适应功能投入现网 5G Advanced 流量的规模化商业试验——这是 AI 原生 RAN 的全球首次。该软件使用直接运行在爱立信 TCO 优化硬件上的神经网络，实时预测快速变化的无线条件，提升频谱效率并增加下行数据速率。

在 T-Mobile 的试验中，AI 原生调度器相对传统基于规则的方法实现了近 10% 的频谱效率提升和高达 15% 的下行吞吐增益。关键的是，这些规模化现网结果与早期有限地理范围的测试结果吻合，证明该方案对不同部署环境的适应性。该调度器即使在高需求、差 RF 条件的环境下也能确保可靠性能——更流畅的流媒体、更灵敏的游戏体验，以及在峰值使用时 uninterrupted 的视频通话。

这延续了 T-Mobile 2025 年成为全美首个全国部署 5G Advanced 运营商的里程碑。AI 原生调度器代表了从基于规则到神经网络驱动的 RAN 决策的转变，且神经网络直接运行在 RAN 计算硬件上（非独立 AI 加速器或云端）。

## Key technical points (EN)
- **AI-native Scheduler with Link Adaptation**: Neural network predicts radio conditions in real time, replacing rule-based scheduling and MCS selection
- **On-RAN-compute inference**: NN runs directly on Ericsson TCO-optimized hardware, not an external AI accelerator — inference latency low enough for per-TTI scheduling decisions
- **Live commercial-scale trials**: Deployed on T-Mobile's 5G Advanced production network, not lab or limited testbed
- **Spectral efficiency +10%**: Close to 10% gain vs legacy rule-based scheduler
- **Downlink throughput +15%**: Up to 15% boost, matching earlier limited-geography results at scale

## Key technical points (ZH)
- **AI 原生调度器与链路自适应**：神经网络实时预测无线条件，替代基于规则的调度与 MCS 选择
- **RAN 计算硬件上推理**：NN 直接运行在爱立信 TCO 优化硬件上，非外部 AI 加速器——推理时延足够低以支持每 TTI 调度决策
- **现网规模化商业试验**：部署于 T-Mobile 5G Advanced 现网，非实验室或有限测试床
- **频谱效率 +10%**：相对传统基于规则调度器近 10% 增益
- **下行吞吐 +15%**：高达 15% 提升，规模化结果与早期有限范围测试吻合

## Why it matters / what's new (EN)
This is the first publicly announced deployment of an AI-native scheduler running on live 5G Advanced commercial traffic — moving AI-RAN from concept to production. The key architectural shift: neural-network inference running directly on RAN compute hardware, making per-TTI (1 ms) AI-driven scheduling feasible without additional accelerator hardware. The 10% spectral efficiency gain at commercial scale validates the AI-RAN thesis that ML can outperform hand-tuned rule-based schedulers in real-world conditions, not just simulations. For the cellular industry, this sets a precedent that AI-native RAN features are deployable now, not a 6G-era aspiration.
