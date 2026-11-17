---
id: 2026-11-17_arxiv-disc-client-self-participation-ota-federated-learning
date_published: 2026-11-02
date_found: 2026-11-17
type: academic-paper
technology: edge-ai
title_en: "DisC: Incentive Design for Green, Robust, and Fair Client Self-Participation in OTA Federated Learning"
title_zh: "DisC：面向 OTA 联邦学习中绿色、稳健、公平的客户端自主参与的激励设计"
url: "https://arxiv.org/abs/2611.03024"
source_quality: abstract_only
topics: [over-the-air federated learning, AirComp, client selection, game theory, potential game, fairness]
topic_primary: over-the-air-computation
topics_secondary: [edge-federated-learning]
novelty_score: 2
---

## Summary (EN)

Over-the-air federated learning (OTA-FL) gains communication efficiency by letting client transmissions superpose on a wireless multiple-access channel, so the channel itself performs the aggregation. The authors note that client heterogeneity, fading, energy limits and participation imbalance can hurt both fairness and aggregation accuracy, and that existing Pareto-oriented fair OTA-FL schemes can still show large aggregation distortion when highly weighted clients have poor channels.

DisC is a game-theoretic, distributed client-selection framework. Each client picks its participation level by maximising a utility that combines Pareto fairness importance, learning relevance, OTA distortion, energy consumption and delay. The paper shows the game admits a Nash equilibrium and is an exact potential game, so stable equilibria correspond to locally optimal OTA-FL operating points. This page was written from the arXiv abstract only; no numerical results are reported in the abstract and the link is modelled (fading multiple-access channel), not measured.

## Summary (ZH)

空中联邦学习（OTA-FL）让客户端的发送在无线多址信道上叠加，由信道本身完成聚合，从而提高通信效率。作者指出，客户端异构、衰落、能量限制和参与不均衡会损害公平性与聚合精度，且已有的面向帕累托的公平 OTA-FL 方案在高权重客户端信道较差时仍可能出现较大的聚合失真。

DisC 是基于博弈论的分布式客户端选择框架。每个客户端通过最大化一个效用来选择参与程度，该效用综合了帕累托公平重要性、学习相关性、OTA 失真、能耗和时延。论文证明该博弈存在纳什均衡且为精确势博弈，稳定均衡对应局部最优的 OTA-FL 工作点。本条目仅依据 arXiv 摘要撰写；摘要未给出数值结果，且链路为建模的衰落多址信道，非实测。

## Key technical points (EN)

- Link: modelled fading wireless multiple-access channel with waveform superposition (AirComp); not measured.
- Distributed, incentive-compatible client self-selection instead of centralised selection.
- Utility terms: fairness, learning relevance, OTA distortion, energy, delay.
- Theory: Nash equilibrium exists; exact potential game.

## Key technical points (ZH)

- 链路：建模的衰落无线多址信道，波形叠加（AirComp）；非实测。
- 分布式、激励相容的客户端自主选择，取代集中式选择。
- 效用项：公平性、学习相关性、OTA 失真、能耗、时延。
- 理论：存在纳什均衡；为精确势博弈。

## Why it matters / what's new (EN)

It adds a decentralised, channel-aware participation rule to over-the-air FL, where the aggregation itself happens in the channel. Incremental and theoretical (abstract-only reading, no stated numerical gain).

## Why it matters / what's new (ZH)

它为空中联邦学习（聚合发生在信道中）增加了分散式、信道感知的参与规则。属增量式理论工作（仅读摘要，未给出数值增益）。
