---
id: 2026-05-03_arxiv-cross-tech-ranging-robot-nav
date_published: 2026-04-28
date_found: 2026-05-03
type: academic-paper
title_en: "Bridging the Indoor-Outdoor Gap: Cross-Technology Ranging for Seamless Robot Navigation (HYMN dataset)"
title_zh: "弥合室内外鸿沟 —— 面向机器人无缝导航的跨技术测距（HYMN 数据集）"
url: "https://arxiv.org/abs/2604.25541"
source_quality: full
topics: [802.11az, FTM]
novelty_score: 2
---

## Summary (EN)

Schwarzbach (arxiv 2604.25541, Apr 2026) addresses the indoor-outdoor positioning handoff problem for mobile robots by jointly characterising four ranging technologies — GNSS, UWB, Wi-Fi FTM, and BLE — against millimetre-scale ground truth in an industrial setting. The paper's contribution is the **HYMN dataset**: time-synchronised raw measurements across all four modalities, plus per-zone availability and ranging-residual statistics that quantify how each technology degrades at building boundaries.

The work is purely a data characterisation / fusion study; it leverages each technology's existing standard (Wi-Fi FTM as defined in 802.11mc / az, etc.) without proposing modifications to packet structures or frame formats.

## Summary (ZH)

Schwarzbach（arxiv 2604.25541，2026 年 4 月）针对移动机器人的室内外定位切换问题，把四种测距技术 —— GNSS、UWB、Wi-Fi FTM、BLE —— 与毫米级真值在工业场景下做联合特性分析。本文贡献是 **HYMN 数据集**：四种模态的时间同步原始测量 + 按区域的可用性 / 测距残差统计，量化各技术在建筑物边界处的退化模式。

工作是纯粹的数据特性化 / 融合研究；复用每种技术的现有标准（Wi-Fi FTM 按 802.11mc / az 定义等），不提出对包结构 / 帧格式的修改。

## Key technical points (EN)

- HYMN dataset: time-synchronised GNSS + UWB + Wi-Fi FTM + BLE in an industrial site.
- Per-zone availability + ranging residuals at indoor / outdoor / boundary.
- All four technologies degrade at building boundaries — but in complementary ways.
- No new IE / Action / MLME on the Wi-Fi side.

## Key technical points (ZH)

- HYMN 数据集：工业场地中时间同步的 GNSS + UWB + Wi-Fi FTM + BLE。
- 室内 / 室外 / 边界三类区域的可用性 + 测距残差统计。
- 四种技术都在边界处退化 —— 但退化方式互补。
- Wi-Fi 端不引入新 IE / Action / MLME。

## Why it matters / what's new (EN)

Pairs with the existing KB entries `arxiv-ftm-survey-2025` (Indoor positioning survey) and `arxiv-mc-az-performance-comparison`. Where those describe how Wi-Fi FTM performs in isolation, this paper benchmarks it against the other ranging modalities with shared ground truth. Useful as a calibration reference for any "Wi-Fi FTM is good enough" claims in real deployments.

## Why it matters / what's new (ZH)

与既有 KB 条目 `arxiv-ftm-survey-2025`（室内定位综述）与 `arxiv-mc-az-performance-comparison` 配对。它们描述 Wi-Fi FTM 单独使用时的表现，本文则在共享真值下与其他测距模态对照。可作为「Wi-Fi FTM 足够好」一类论断在真实部署中的标定参考。
