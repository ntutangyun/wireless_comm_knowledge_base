---
id: 2026-10-12_arxiv-gnss-spoofing-mobile-devices-survey
date_published: 2026-10-01
date_found: 2026-10-12
technology: satellite
type: academic-paper
title_en: "GNSS Spoofing in Mobile Devices: A Survey on Impact and Countermeasures"
title_zh: "移动设备中的 GNSS 欺骗：影响与对策综述"
url: "https://arxiv.org/abs/2610.01294"
source_quality: abstract_only
topics: [GNSS, spoofing, smartphone, countermeasures, survey]
topic_primary: sat-ai
topics_secondary: [ngso-regulation]
novelty_score: 2
---

## Summary (EN)

Argo, Nardin, Minetto and Closas survey GNSS spoofing specifically as it affects smartphones and other mobile devices, submitted 2026-10-01 (24 pages, 9 figures). The paper distinguishes jamming attacks (which prevent a position fix from being computed at all) from spoofing attacks (which cause the receiver to compute a false position), and argues that existing surveys cover general spoofing countermeasures but fail to address smartphone-specific limitations. The authors build a framework for categorizing spoofing attacks and defenses, review prior smartphone-specific vulnerability assessments, and compare detection and mitigation techniques applicable to mobile platforms.

## Summary (ZH)

Argo、Nardin、Minetto 与 Closas 针对智能手机及其他移动设备这一特定场景，对 GNSS 欺骗进行了综述，论文提交于 2026 年 10 月 1 日（共 24 页、9 幅图）。论文区分了干扰攻击（使接收机完全无法计算出定位结果）与欺骗攻击（使接收机计算出错误的定位结果），并指出现有综述虽全面探讨了通用的欺骗对策，但未针对智能手机特有的限制。作者构建了一套用于对欺骗攻击与防御手段进行分类的框架，回顾了此前针对智能手机的脆弱性评估研究，并比较了适用于移动平台的检测与缓解技术。

## Key technical points (EN)

- **Scope**: specifically smartphones/mobile devices, not dedicated GNSS receivers or fixed infrastructure.
- **Jamming vs. spoofing**: explicitly distinguished — jamming blocks a fix, spoofing falsifies it.
- **Stated gap**: existing surveys cover general spoofing countermeasures but fail to address smartphone-specific limitations.
- **Contributions**: a categorization framework for spoofing attacks/defenses; a review of prior smartphone vulnerability assessments; a comparative survey of mobile-applicable detection/mitigation techniques.
- **Length/subjects**: 24 pages, 9 figures, cs.CR / eess.SP / eess.SY cross-listed.

## Key technical points (ZH)

- **范围**：专门针对智能手机/移动设备，而非专用 GNSS 接收机或固定基础设施。
- **干扰与欺骗的区分**：明确区分——干扰使定位无法完成，欺骗使定位结果被伪造。
- **指出的空白**：现有综述虽全面探讨了通用的欺骗对策，但未针对智能手机特有的限制。
- **贡献**：提出欺骗攻击/防御的分类框架；回顾此前针对智能手机的脆弱性评估研究；对适用于移动平台的检测/缓解技术进行比较综述。
- **篇幅/学科分类**：24 页、9 幅图，交叉归类于 cs.CR / eess.SP / eess.SY。

## Why it matters / what's new (EN)

This KB already holds several GNSS-spoofing entries addressing specific detection mechanisms (TDD/3GPP-based detection, VLM-based detection, SLM driving-narrative analysis, RFF-based benchmarks, UAV-swarm covert spoofing). This is the first entry that is itself a survey consolidating the smartphone-specific sub-area — useful as a reference point for where the mobile-device countermeasure gap stated by the authors sits relative to this KB's existing detection-mechanism entries, though as a survey it introduces no new mechanism of its own.

## Why it matters / what's new (ZH)

本知识库已收录多篇 GNSS 欺骗相关条目，涉及具体的检测机制（基于 TDD/3GPP 的检测、基于 VLM 的检测、基于 SLM 的驾驶叙事分析、基于 RFF 的基准测试、无人机集群隐蔽欺骗）。本条目是首篇专门针对智能手机这一细分领域进行综述的条目——可作为参照，帮助判断作者所指出的移动设备对策空白相对于本知识库现有检测机制类条目所处的位置；但作为综述性论文，其本身并未引入新的机制。

## Images

None.
