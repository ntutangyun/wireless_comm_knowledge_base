---
id: 2026-11-27_arxiv-clustered-federated-learning-non-iid-wireless-networks-deepmimo-beam-selection
date_published: 2026-10-28
date_found: 2026-11-27
technology: edge-ai
type: academic-paper
title_en: "Communication-Efficient Clustered Federated Learning in Non-IID Wireless Networks"
title_zh: "非独立同分布无线网络中的通信高效聚类联邦学习"
url: "https://arxiv.org/abs/2610.38970"
source_quality: abstract_only
topics: [federated-learning, clustered-FL, non-IID, DeepMIMO, mmWave-beam-selection, downlink-data-volume]
topic_primary: edge-federated-learning
topics_secondary: [task-oriented-communication]
novelty_score: 2
---

## Summary (EN)

The paper (authors Martin Isaksson, Rickard Cöster, Šarūnas Girdzijauskas, Seif Haridi; arXiv v1 28 October 2026, v2 3 November; 64 pages including appendices) starts from the observation that distributed learning is becoming essential for advanced 6G services and that non-IID data, which arises naturally in heterogeneous wireless environments, degrades standard federated learning (FL).

It proposes a clustered federated learning (CFL) framework that assigns clients to specialised models during training. Data-domain clustering initialises model-based clustering, so client similarities can be exploited without sharing raw data, while communication cost is reduced.

Link: simulated. Motivated by mmWave beam selection, the methods are evaluated on the DeepMIMO wireless simulation dataset and on two non-IID benchmarks (FEMNIST, Rotated CIFAR-10); the abstract does not describe a radio link model beyond the dataset, and the reported communication saving is a reduction in downlink data volume. Only the abstract was read for this entry.

## Summary (ZH)

论文（作者 Martin Isaksson、Rickard Cöster、Šarūnas Girdzijauskas、Seif Haridi；arXiv v1 于 2026 年 10 月 28 日，v2 于 11 月 3 日；含附录共 64 页）出发点是：分布式学习对先进 6G 业务日益重要，而异构无线环境中自然出现的非独立同分布数据会降低标准联邦学习（FL）的性能。

作者提出聚类联邦学习（CFL）框架，在训练过程中把客户端分配给专门化的模型。数据域聚类为基于模型的聚类提供初始化，使得无需共享原始数据即可利用客户端之间的相似性，同时降低通信开销。

所经链路：仿真。以毫米波波束选择为动机，方法在 DeepMIMO 无线仿真数据集以及两个非独立同分布基准（FEMNIST、Rotated CIFAR-10）上评估；摘要未描述数据集之外的无线链路模型，所报告的通信节省为下行数据量的减少。本条目仅阅读了摘要。

## Key technical points (EN)

- Reported results: the best configurations improve accuracy over IFCA by 4.8 percentage points on DeepMIMO and 10.6 points on FEMNIST.
- Downlink data volume on FEMNIST is reduced by 83.1% compared with IFCA.
- The authors report that different clustering strategies suit different non-IID characteristics.
- Evidence is simulated; the abstract gives no measurement over a real link.

## Key technical points (ZH)

- 报告结果：最佳配置在 DeepMIMO 上比 IFCA 准确率高 4.8 个百分点，在 FEMNIST 上高 10.6 个百分点。
- 在 FEMNIST 上，下行数据量比 IFCA 减少 83.1%。
- 作者报告不同的聚类策略适用于不同的非独立同分布特性。
- 证据为仿真；摘要未给出真实链路上的测量。

## Why it matters / what's new (EN)

It ties the FL design to a wireless task (mmWave beam selection) and reports downlink data volume saved. The link is represented only by a simulation dataset and a data-volume metric, so this is a modest incremental result judged from the abstract.

## Why it matters / what's new (ZH)

它把 FL 设计与无线任务（毫米波波束选择）相结合，并报告节省的下行数据量。链路仅以仿真数据集和数据量指标体现，因此仅依据摘要判断，这是一个有限的增量性结果。
