---
id: 2026-05-21_kddi-ericsson-ai-uplink-ropt
date_published: 2026-05-11
date_found: 2026-05-21
type: industry-news
title_en: "Ericsson and KDDI Complete AI-Driven Uplink Optimization Field Trial, Advancing Toward Autonomous Networks Level 4"
title_zh: "爱立信与 KDDI 完成 AI 驱动上行优化现场试验，迈向自治网络四级"
url: "https://www.ericsson.com/en/press-releases/2/2026/ericsson-and-kddi-succeed-in-ai-uplink-optimization-field-trial-advancing-toward-autonomous-networks-level-4"
source_quality: full
topics: [AI-RAN, rApp, uplink-optimization, autonomous-networks, KDDI, interference-management]
topic_primary: cellular-ai
topics_secondary: [5g-nr, 4g-lte]
technology: cellular
novelty_score: 3
---

## Summary (EN)
Ericsson and KDDI completed a large-scale field trial of Ericsson's AI-driven Uplink Interference Optimizer (UIO) rApp, running on the Ericsson Intelligent Automation Platform (EIAP), on KDDI's live commercial network in Japan. The trial covered approximately 1,500 5G cells and 1,300 4G cells, marking the first global live-network deployment of the UIO rApp and the first live use of EIAP in Japan.

Key results under real-world traffic: 9.6% average 4G uplink throughput improvement, 3.1% average 5G uplink throughput improvement, and 27% improvement in 5G SINR. The AI model maintained gains under a 10% higher uplink traffic load, demonstrating robustness under sustained demand. The rApp selectively optimized cells carrying the majority of network traffic, delivering uplink improvements without compromising network stability. Using an adaptation of TM Forum's ANLET methodology, the UIO rApp was assessed as enabling Level 3.86 autonomy for uplink optimization — a concrete step toward Autonomous Networks Level 4.

The trial also involved a third-party rApp from Japan-based FYRA, demonstrating multi-vendor rApp interoperability on the EIAP. The UIO rApp is now generally available globally, with additional AI-driven rApps to follow.

## Summary (ZH)
爱立信与 KDDI 在日本 KDDI 现网完成了爱立信 AI 驱动上行干扰优化器（UIO）rApp 的大规模现场试验，该 rApp 运行在爱立信智能自动化平台（EIAP）上。试验覆盖约 1,500 个 5G 小区和 1,300 个 4G 小区，是 UIO rApp 全球首次现网部署，也是 EIAP 在日本首次现网应用。

真实流量下的关键结果：4G 上行吞吐平均提升 9.6%，5G 上行吞吐平均提升 3.1%，5G SINR 提升 27%。AI 模型在上行流量高出 10% 的负载下保持了增益，证明其在持续高需求下的鲁棒性。该 rApp 选择性优化承载大部分网络流量的小区，在不损害网络稳定性的前提下实现上行改善。采用 TM Forum ANLET 方法的评估显示，UIO rApp 可为上行优化实现 3.86 级自治——向自治网络四级迈出实质性一步。

试验还涉及日本第三方 FYRA 公司的 rApp，展示了 EIAP 上多厂商 rApp 的互操作性。UIO rApp 现已全球商用，更多 AI 驱动 rApp 将陆续推出。

## Key technical points (EN)
- **AI Uplink Interference Optimizer (UIO) rApp**: AI-driven rApp on EIAP that optimizes uplink interference across multi-technology, multi-band cells
- **Live network scale**: 1,500 5G + 1,300 4G cells on KDDI commercial network
- **4G uplink +9.6%, 5G uplink +3.1%**: Average throughput gains under real traffic
- **5G SINR +27%**: Significant signal quality improvement
- **AN Level 3.86**: Assessed using TM Forum ANLET methodology — approaching Level 4 autonomy
- **Multi-vendor rApp**: Ericsson UIO + FYRA third-party rApp on same EIAP — validates multi-vendor rApp framework

## Key technical points (ZH)
- **AI 上行干扰优化器 (UIO) rApp**：运行在 EIAP 上的 AI 驱动 rApp，跨制式、跨频段优化上行干扰
- **现网规模**：KDDI 商用网络上 1,500 个 5G 小区 + 1,300 个 4G 小区
- **4G 上行 +9.6%，5G 上行 +3.1%**：真实流量下的平均吞吐增益
- **5G SINR +27%**：信号质量显著改善
- **AN Level 3.86**：采用 TM Forum ANLET 方法评估——接近 Level 4 自治
- **多厂商 rApp**：爱立信 UIO + FYRA 第三方 rApp 共存在同一 EIAP——验证多厂商 rApp 框架

## Why it matters / what's new (EN)
First live-network validation of an AI-driven rApp for uplink optimization at commercial scale (2,800 cells). The multi-vendor rApp demonstration (Ericsson + FYRA) is significant for the O-RAN rApp ecosystem — it proves that the EIAP/rApp framework supports third-party AI applications, not just Ericsson's own. The AN Level 3.86 assessment provides a concrete, quantifiable metric for autonomous network progress, moving beyond marketing claims. The fact that gains held under 10% higher traffic load addresses the common criticism that AI optimizers work in the lab but degrade under real-world demand variance.
