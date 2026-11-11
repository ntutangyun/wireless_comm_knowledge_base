---
id: 2026-11-11_arxiv-leo-coexistence-fcc-throughput-protection-satellite-selection
date_published: 2026-11-07
date_found: 2026-11-11
technology: satellite
type: academic-paper
title_en: "Coexistence of LEO Satellite Systems under FCC Throughput-Based Protection Constraints"
title_zh: "FCC 吞吐量保护准则下的 LEO 卫星系统共存"
url: "https://arxiv.org/abs/2611.10462"
source_quality: full
topics: [LEO, coexistence, spectrum sharing, FCC, satellite selection, Ka-band, NGSO]
topic_primary: ngso-regulation
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Min, Hong, Lee and Roberts (arXiv, submitted 7 Nov 2026) study two LEO systems sharing a band: a primary system with regulatory precedence and a secondary system that must not cause excessive interference to the primary's ground users. The FCC's processing-round framework gives priority to earlier-round systems, and in late 2024 the FCC adopted throughput-based protection criteria (FCC 24-117): a short-term criterion limiting the increase in primary-link unavailability to 0.4% and a long-term criterion limiting average primary-link throughput degradation to 3%.

The paper proposes a secondary-system satellite selection mechanism that, at each handover, associates secondary satellites with clusters of ground cells to maximize secondary-user throughput while meeting both criteria. It enforces them through a cumulative assessment combining past primary-link performance with predicted performance over the coming handover interval. Simulations show up to 31% (31.3% in the conclusion) higher secondary-user throughput than prior work that imposes INR constraints, even when those constraints are tuned to satisfy the FCC limits. Future work: multiple secondary constellations and unknown primary satellite associations.

## Summary (ZH)

Min、Hong、Lee 与 Roberts（arXiv，2026 年 11 月 7 日提交）研究两个共享频段的 LEO 系统：具有监管优先权的主系统，以及不得对主系统地面用户造成过度干扰的次系统。FCC 的受理轮次框架使较早轮次的系统享有优先权，并于 2024 年底采纳基于吞吐量的保护准则（FCC 24-117）：短期准则将主链路不可用性的增加限制在 0.4%，长期准则将主链路平均吞吐量下降限制在 3%。

论文提出一种次系统卫星选择机制，在每次切换时将次系统卫星与地面小区簇关联，在满足两项准则的同时最大化次系统用户吞吐量；通过结合主链路历史性能与未来切换间隔内预测性能的累积评估来强制执行。仿真显示，相比施加 INR 约束的既有工作（即使其约束已调至满足 FCC 限制），次系统用户吞吐量最高提高 31%（结论中为 31.3%）。后续工作：多个次系统星座以及未知的主系统卫星关联。

## Key technical points (EN)

- Setting: primary and secondary LEO systems sharing the same band (Ka-band systems of SpaceX, Amazon, OneWeb cited as context).
- FCC criteria (FCC 24-117): short-term, primary-link unavailability increase limited to 0.4%; long-term, average throughput degradation limited to 3%.
- Mechanism: at each handover, secondary satellite-to-cluster association chosen to maximize secondary throughput subject to both criteria, via cumulative assessment of past plus predicted primary-link performance.
- Result: up to 31% (31.3%) higher secondary-user throughput than an INR-constrained benchmark tuned to the same FCC limits.
- Assumes known primary satellite associations; multi-secondary coexistence left to future work.

## Key technical points (ZH)

- 设定：主、次两个 LEO 系统共享同一频段（以 SpaceX、Amazon、OneWeb 的 Ka 频段系统为背景）。
- FCC 准则（FCC 24-117）：短期，主链路不可用性增加限于 0.4%；长期，平均吞吐量下降限于 3%。
- 机制：每次切换时，在两项准则约束下选择次系统卫星与小区簇的关联以最大化次系统吞吐量，采用主链路历史与预测性能的累积评估。
- 结果：相比按相同 FCC 限制调参的 INR 约束基准，次系统用户吞吐量最高提高 31%（31.3%）。
- 假设主系统卫星关联已知；多次系统共存留待后续工作。

## Why it matters / what's new (EN)

KB entries on NGSO regulation cover FCC licensing, spectrum-band unlocks and ITU filings; this paper is a technical response to the FCC's throughput-based inter-round protection criteria, showing the criteria can be enforced directly in satellite selection rather than via an INR proxy. Results are simulation-based.

## Why it matters / what's new (ZH)

KB 中关于 NGSO 监管的条目涉及 FCC 许可、频段释放与 ITU 申报；本文是对 FCC 基于吞吐量的跨轮次保护准则的技术回应，表明这些准则可直接用于卫星选择而无需借助 INR 代理。结果基于仿真。

## Images

None.
