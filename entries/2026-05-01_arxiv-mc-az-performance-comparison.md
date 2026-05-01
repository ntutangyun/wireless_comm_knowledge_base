---
id: 2026-05-01_arxiv-mc-az-performance-comparison
date_found: 2026-05-01
date_published: 2025-11-22
type: academic-paper
title_en: "Performance Comparison of 802.11mc and 802.11az Wi-Fi Positioning"
title_zh: "802.11mc 与 802.11az Wi-Fi 定位性能对比"
url: "https://arxiv.org/abs/2511.17935"
source_quality: full
topics: [802.11az, PHY-layer]
novelty_score: 3
---

## Summary (EN)

A direct head-to-head measurement comparison of IEEE 802.11mc (the original FTM amendment, ratified 2016) and IEEE 802.11az (next-generation positioning, ratified 2023) under controlled conditions and under realistic congested-RF conditions. The headline number is uncomfortable for the new standard: in congested environments, **802.11az packet failure rates are 50%, 37%, 55%, 50% and 65% at 2 m, 4 m, 6 m, 8 m and 10 m** respectively — i.e. roughly half of FTM exchanges fail in the field.

The takeaway: 802.11az's analytical advantages (improved frame format, better security baseline) don't automatically translate to deployment-ready positioning if the failure mode under congestion isn't engineered around. This pairs with the FTM survey (`2026-05-01_arxiv-ftm-survey-2025.md`) and Antonijević et al.'s security paper (`2026-05-01_arxiv-secure-wifi-ranging-az-bk.md`) to make the same point: 802.11az on commercial hardware in 2025 is not yet ready for high-stakes use without significant engineering.

## Summary (ZH)

对 IEEE 802.11mc（最初的 FTM 修订，2016 批准）与 IEEE 802.11az（下一代定位，2023 批准）在受控条件与真实拥塞射频条件下的直接对比测量。结果对新标准而言比较尴尬：拥塞条件下 802.11az 在 2 m / 4 m / 6 m / 8 m / 10 m 距离上**包失败率分别为 50%、37%、55%、50%、65%** —— 现场约一半的 FTM 交互会失败。

结论是：802.11az 的分析优势（更好的帧格式、更好的安全基线）并不会自动等价于"可部署的定位"，如果不针对拥塞下的失败模式做工程设计的话。本论文与 FTM 综述（`2026-05-01_arxiv-ftm-survey-2025.md`）以及 Antonijević 等人的安全论文（`2026-05-01_arxiv-secure-wifi-ranging-az-bk.md`）共同传达同一个信号：2025 年商用硬件上的 802.11az 尚不适合高风险用途，除非配以大量工程优化。

## Key technical points (EN)

- Direct mc vs az measurement comparison
- Congested-RF failure rates: 37%–65% across 2–10 m
- Field-measurement methodology, not just simulation

## Key technical points (ZH)

- mc 与 az 的直接实测对比
- 拥塞射频下失败率：2–10 m 范围 37%–65%
- 实测方法，非纯仿真

## Why it matters / what's new (EN)

- **Challenges the "newer is better" narrative for 802.11az.** Real failure rates push back against the assumption that az is a drop-in upgrade for mc.
- **Sets up engineering work.** The hardware / firmware fixes needed to bring az failure rates down to mc levels are an immediate deployment-engineering agenda.

## Why it matters / what's new (ZH)

- **挑战了"802.11az 越新越好"的叙事。** 真实失败率推翻了"az 可以平替 mc"的假设。
- **奠定了工程议程。** 把 az 的失败率降到 mc 水平所需的硬件 / 固件修整工作，已是落地工程上的当务之急。
