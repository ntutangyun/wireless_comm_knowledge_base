---
id: 2026-11-03_arxiv-wearer-induced-nlos-chest-worn-uwb-tags-on-device-detection
date_published: 2026-10-30
date_found: 2026-11-03
technology: uwb
type: academic-paper
title_en: "On-device Detection of Wearer-induced NLOS on Chest-worn UWB Tags: Machine Learning, Link Indicators, or Both?"
title_zh: "胸戴式 UWB 标签上佩戴者引起的 NLOS 的端侧检测：机器学习、链路指示量，还是二者结合？"
url: "https://arxiv.org/abs/2610.41799"
source_quality: abstract_only
topics: [UWB, NLOS detection, wearer-induced NLOS, on-device ML, link indicators, ranging error, energy efficiency, dataset]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

On 30 October 2026, Markus Gallacher, Vu Anh Minh Le, Matteo Trobinger, Davide Vecchia, Carlo Alberto Boano and Gian Pietro Picco posted this paper to arxiv (cs.LG); the comments field says it is submitted to ACM Transactions on Sensor Networks, so it is not yet peer-reviewed. It addresses non-line-of-sight (NLOS) caused by the body of the person wearing a UWB tag (wearer-induced NLOS, WNLOS), which the abstract says yields significant ranging errors yet remains understudied.

The authors argue that WNLOS detection must run on the tag itself, where classification accuracy has to be balanced against tight runtime and energy limits that machine-learning classifiers often struggle to meet. They note that UWB radio link indicators (LI) offer a faster, lightweight alternative that has rarely been explored. The paper studies existing on-device ML and LI classifiers applied to WNLOS and proposes novel hybrid classifiers that combine the two. The focus is chest-worn tags, and 21 classifiers are analysed on a dataset of 1.5 million samples spanning channels, PHY settings, environments, subjects and orientations.

Per the abstract, all classifiers achieve good classification accuracy, but relative performance, including ranging errors caused by misclassification, depends heavily on channel and PHY configuration. Runtime and energy efficiency vary dramatically: some techniques offer marginal accuracy gains while consuming up to 39.6 times more energy. The authors therefore also introduce a recommender tool that identifies optimal classifiers under user-defined constraints, released publicly together with the dataset.

## Summary (ZH)

2026年10月30日，Markus Gallacher、Vu Anh Minh Le、Matteo Trobinger、Davide Vecchia、Carlo Alberto Boano 与 Gian Pietro Picco 在 arxiv（cs.LG）发布本文；备注栏称已投稿 ACM Transactions on Sensor Networks，尚未经同行评审。论文关注佩戴 UWB 标签者的身体造成的非视距（NLOS）（佩戴者引起的 NLOS，WNLOS）；摘要称其会带来显著测距误差，但研究仍不充分。

作者认为 WNLOS 检测必须在标签端完成，需要在分类精度与严苛的运行时间和能耗限制之间取得平衡，而机器学习分类器往往难以满足这些限制；他们指出，UWB 射频链路指示量（LI）是更快速、轻量的替代方案，但很少被探索。论文研究了应用于 WNLOS 的现有端侧 ML 与 LI 分类器，并提出结合两者的新型混合分类器。研究聚焦胸戴式标签，在涵盖信道、PHY 设置、环境、受试者和朝向的 150 万样本数据集上分析了 21 种分类器。

据摘要，所有分类器都达到了良好的分类精度，但相对性能（包括误分类造成的测距误差）在很大程度上取决于信道与 PHY 配置。运行时间和能效差异巨大：部分技术仅带来有限的精度提升，能耗却高达 39.6 倍。因此作者还提出一个推荐工具，可在用户给定约束下选出最优分类器，并与数据集一并公开发布。

## Key technical points (EN)

- Problem: body-induced NLOS on worn tags (WNLOS) degrades UWB ranging; detection has to run on the tag within runtime and energy budgets.
- Approaches compared: existing on-device ML classifiers, existing link-indicator (LI) classifiers, and new hybrids combining both.
- Scale: 21 classifiers; 1.5 million samples across channels, PHY settings, environments, subjects and orientations; chest-worn tags only.
- Findings stated in the abstract: all achieve good accuracy; relative performance and misclassification-induced ranging error depend heavily on channel and PHY configuration; energy differs by up to 39.6x for marginal accuracy gains.
- Artefact: a recommender tool to pick classifiers under user-defined constraints, released publicly with the dataset.
- Status: submitted to ACM Transactions on Sensor Networks (per arxiv comments); abstract-level reading only for hardware platform and per-classifier figures.

## Key technical points (ZH)

- 问题：佩戴标签时人体引起的 NLOS（WNLOS）会降低 UWB 测距精度；检测需在标签端、在运行时间和能耗预算内完成。
- 对比的方法：现有端侧 ML 分类器、现有链路指示量（LI）分类器，以及结合两者的新型混合分类器。
- 规模：21 种分类器；150 万样本，覆盖信道、PHY 设置、环境、受试者和朝向；仅限胸戴式标签。
- 摘要所述发现：均达到良好精度；相对性能及误分类引起的测距误差在很大程度上取决于信道与 PHY 配置；为换取有限的精度提升，能耗最多相差 39.6 倍。
- 成果：可在用户给定约束下选择分类器的推荐工具，与数据集一并公开发布。
- 状态：已投稿 ACM Transactions on Sensor Networks（据 arxiv 备注）；硬件平台与各分类器具体数字仅依据摘要，未读全文。

## Why it matters / what's new (EN)

For worn UWB tags, the abstract notes that the wearer's body inevitably causes NLOS (WNLOS), which it calls understudied; the paper frames classifier choice as a trade-off among accuracy, runtime and energy rather than accuracy alone. The reported spread (up to 39.6x energy for marginal accuracy gains) and the public dataset and recommender are the practically useful parts. The summary rests on the arxiv abstract and metadata; the full text was not read, and the paper is a preprint under review.

## Why it matters / what's new (ZH)

摘要指出，佩戴 UWB 标签时人体必然造成 NLOS（WNLOS），且研究不足；论文把分类器选择视为精度、运行时间与能耗之间的权衡，而不只是精度问题。其报告的差异（为换取有限精度提升，能耗最多高 39.6 倍）以及公开的数据集和推荐工具是最具实用价值的部分。本摘要依据 arxiv 摘要与元数据，未阅读全文；该论文为审稿中的预印本。

## Images

None.
