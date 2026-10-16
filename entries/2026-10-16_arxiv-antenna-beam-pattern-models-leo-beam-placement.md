---
id: 2026-10-16_arxiv-antenna-beam-pattern-models-leo-beam-placement
date_published: 2026-10-13
date_found: 2026-10-16
technology: satellite
type: academic-paper
title_en: "On the Investigation of Antenna Beam Pattern Models for Fast Beam Placement in LEO Satellite Networks"
title_zh: "LEO 卫星网络快速波束布放中天线波束方向图模型的影响研究"
url: "https://arxiv.org/abs/2610.18930"
source_quality: abstract-only
topics: [LEO, beam-placement, antenna-pattern, graph-coloring, 3GPP-TR-37.842]
topic_primary: leo-constellations
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Tam, Anh, Quan and Van Chien (arXiv 2610.18930, submitted 13 October 2026) examine how the choice of antenna beam pattern model affects beam placement in LEO networks. Rather than assuming a fixed pattern or predefined half-power beamwidth, the paper compares four gain models: Bessel J1, combined Bessel J1+J3, Gaussian, and a 3GPP TR 37.842 model.

For each pattern the half-power angle is derived and used to build a user compatibility graph; beam placement is then cast as a Minimum Clique Cover problem and solved with a graph-coloring algorithm. Results compare the models by number of active beams, load balancing, statistical channel gain-to-noise ratio (SCGNR) and SINR, and analyse how more active beams affect SINR-based spectral efficiency. The authors conclude that the pattern model affects both beam resource usage and link quality, and argue for antenna-pattern-aware beam placement.

## Summary (ZH)

Tam、Anh、Quan 和 Van Chien（arXiv 2610.18930，2026 年 10 月 13 日提交）研究天线波束方向图模型的选择如何影响 LEO 网络的波束布放。论文不假定固定方向图或预设半功率波束宽度，而是比较四种增益模型：Bessel J1、组合 Bessel J1+J3、高斯模型和 3GPP TR 37.842 模型。

针对每种方向图推导半功率角并构建用户兼容图，再将波束布放转化为最小团覆盖问题，用图着色算法求解。结果从有效波束数、负载均衡、统计信道增益噪声比（SCGNR）和 SINR 等方面比较各模型，并分析有效波束增多对基于 SINR 的频谱效率的影响。作者的结论是方向图模型同时影响波束资源占用和链路质量，主张采用感知天线方向图的波束布放。

## Key technical points (EN)

- **Models compared**: Bessel J1, Bessel J1+J3, Gaussian, 3GPP TR 37.842.
- **Method**: half-power angle per model, user compatibility graph, Minimum Clique Cover solved by graph coloring.
- **Metrics**: active beams, load balancing, SCGNR, SINR, SINR-based spectral efficiency.
- **Conclusion**: pattern model affects beam usage and link quality.

## Key technical points (ZH)

- **比较的模型**：Bessel J1、Bessel J1+J3、高斯、3GPP TR 37.842。
- **方法**：逐模型推导半功率角，构建用户兼容图，以图着色求解最小团覆盖。
- **指标**：有效波束数、负载均衡、SCGNR、SINR、基于 SINR 的频谱效率。
- **结论**：方向图模型影响波束占用和链路质量。

## Why it matters / what's new (EN)

The abstract indicates that the assumed antenna pattern changes beam-placement outcomes in LEO networks. Only the abstract was reviewed for this entry.

## Why it matters / what's new (ZH)

摘要表明所假定的天线方向图会改变 LEO 网络的波束布放结果。本条目仅依据摘要编写。

## Images

None.
