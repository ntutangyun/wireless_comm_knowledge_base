---
id: 2026-11-03_arxiv-leo-constellation-satellite-iot-coverage-gaps-retransmissions
date_published: 2026-10-30
date_found: 2026-11-03
technology: satellite
type: academic-paper
title_en: "LEO Constellation Analysis for Satellite IoT: An Analysis of Coverage Gaps and Retransmissions"
title_zh: "面向卫星物联网的 LEO 星座分析：覆盖间隙与重传"
url: "https://arxiv.org/abs/2610.41440"
source_quality: abstract_only
topics: [satellite-IoT, Walker-Star, coverage-gaps, revisit-time, retransmission, ergodic-model, SGP4, Iridium-NEXT, NTN]
topic_primary: sat-iot
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Rombouts, Famaey and Sanchez-Vital (arXiv 2610.41440, cs.IT, submitted 30 October 2026) argue that for IoT over LEO constellations, snapshot statistics such as coverage probability, often computed without regard to terminal latitude, do not suffice for protocol design. Designers also need the temporal structure of coverage: the rate and duration distribution of coverage gaps, and quantities such as the probability that a retransmission succeeds after a first failure.

They develop an ergodic framework for Walker Star constellations in which these quantities reduce to spatial integrals over a two-dimensional torus, and validate it against a seven-day SGP4 simulation of the Iridium NEXT constellation.

## Summary (ZH)

Rombouts、Famaey 与 Sanchez-Vital（arXiv 2610.41440，cs.IT，2026 年 10 月 30 日提交）指出，对于基于 LEO 星座的物联网，覆盖概率等快照统计量（常未考虑终端纬度）不足以支撑协议设计。设计者还需要覆盖的时间结构：覆盖间隙的发生率与持续时间分布，以及首次传输失败后重传成功的概率等。

他们为 Walker Star 星座建立了遍历性框架，使这些量归结为二维环面上的空间积分，并以 Iridium NEXT 星座的七天 SGP4 仿真加以验证。

## Key technical points (EN)

- **Validation**: close agreement with the SGP4 simulation for coverage probability, revisit-time distribution and retransmission success probability.
- **Configuration comparison**: Walker Star configurations with similar satellite counts can yield substantially different packet-delivery probabilities with at most one retransmission, depending on the number of orbital planes.
- **Use**: the ergodic model gives long-run values that finite time-domain simulations can only approximate, offered as a tractable basis for analytical modelling of IoT over NTN. Abstract-level summary only.

## Key technical points (ZH)

- **验证**：覆盖概率、重访时间分布和重传成功概率与 SGP4 仿真吻合良好。
- **配置比较**：卫星数量相近的 Walker Star 配置，在至多一次重传下的分组送达概率可能显著不同，取决于轨道面数量。
- **用途**：遍历模型给出有限时域仿真只能近似的长期值，可作为 NTN 物联网解析建模的易处理基础。仅为摘要级概述。

## Why it matters / what's new (EN)

The paper shifts satellite-IoT coverage analysis from snapshot probabilities to gap and retransmission statistics that bear on protocol design, with an analytical route (spatial integrals evaluated efficiently) that gives the long-run values finite simulations only approximate. Validation is against one constellation (Iridium NEXT).

## Why it matters / what's new (ZH)

论文将卫星物联网覆盖分析从快照概率转向与协议设计相关的间隙与重传统计，以可高效计算的空间积分给出有限时域仿真只能近似的长期值。验证仅针对一个星座（Iridium NEXT）。

## Images

None.
