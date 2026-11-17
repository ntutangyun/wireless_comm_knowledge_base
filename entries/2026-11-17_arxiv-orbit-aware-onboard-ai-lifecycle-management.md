---
id: 2026-11-17_arxiv-orbit-aware-onboard-ai-lifecycle-management
date_published: 2026-11-13
date_found: 2026-11-17
technology: satellite
type: academic-paper
title_en: "Orbit-AWARE: From Onboard AI Deployment to Sustainable In-Orbit Intelligence"
title_zh: "Orbit-AWARE：从星上 AI 部署到可持续的在轨智能"
url: "https://arxiv.org/abs/2611.17689"
source_quality: abstract-only
topics: [onboard AI, model drift, lifecycle management, Earth observation, downlink budget, agentic orchestration]
topic_primary: sat-ai
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

Geng, Zhu, Shu, Gao, Li, Liu, Jiang, Wei and Feng (arXiv, 13 Nov 2026) address the long-term reliability of onboard AI used in time-critical satellite services. Model drift can cause critical-observation suppression or noncritical priority flooding, displacing both mission information and the evidence needed to correct the model; the paper calls this drift-induced evidence displacement.

Orbit-AWARE is a safeguard-first lifecycle management architecture with cooperative Data, Cognitive and Trust Planes for continuous monitoring, event-triggered agentic orchestration and deterministic governance. It retains a model-independent sample stream before degradation is confirmed, coordinates evidence selection and exchange for diagnosis and ground-assisted adaptation, and verifies candidate updates before control over data disposition is restored.

## Summary (ZH)

Geng、Zhu、Shu、Gao、Li、Liu、Jiang、Wei 与 Feng（arXiv，2026 年 11 月 13 日）探讨时间关键型卫星服务中星上 AI 的长期可靠性。模型漂移可能导致关键观测被抑制或非关键优先级泛滥，从而挤占任务信息和用于纠正模型的证据；论文称之为漂移引起的证据挤占。

Orbit-AWARE 是一种安全优先的生命周期管理架构，含协作的数据面、认知面与信任面，用于持续监测、事件触发的智能体编排和确定性治理。它在退化被确认之前保留与模型无关的样本流，协调证据的选取与交换以支持诊断和地面辅助适配，并在恢复对数据处置的控制之前验证候选更新。

## Key technical points (EN)

- Case study: xBD-based emergency Earth observation; under a common 10% downlink budget Orbit-AWARE delivers 14.3% more critical observations and 8.3% higher sustainable mission utility than the Rule-Based Drift Loop.
- Future directions named: task-aware reliability assessment, memory- and tool-enabled onboard agents, evidence-centric space networking.
- Based on the abstract only; full text not read.

## Key technical points (ZH)

- 案例研究：基于 xBD 的应急对地观测；在相同 10% 下行预算下，Orbit-AWARE 比基于规则的漂移环路多交付 14.3% 的关键观测，可持续任务效用高 8.3%。
- 提出的未来方向：任务感知的可靠性评估、具备记忆与工具能力的星上智能体、以证据为中心的空间组网。
- 仅依据摘要；未读全文。

## Why it matters / what's new (EN)

The downlink budget is treated as the constraint that decides which evidence reaches the ground for model correction, tying onboard AI maintenance to the satellite link. The quantified result is from an EO case study, not a communications measurement.

## Why it matters / what's new (ZH)

下行预算被视为决定哪些证据能传到地面用于模型修正的约束，从而把星上 AI 的维护与卫星链路联系起来。量化结果来自对地观测案例，并非通信实测。

## Images

None.
