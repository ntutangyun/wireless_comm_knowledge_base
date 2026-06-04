---
id: 2026-06-04_arxiv-cell-onoff-adaptable-qos-threshold
date_published: 2026-06-03
date_found: 2026-06-04
type: academic-paper
technology: cellular
title_en: "A practical AI-driven strategy for cell on/off switching under adaptable QoS constraints"
title_zh: "一种实用的 AI 驱动小区开关策略：在可调 QoS 约束下进行节能"
url: "https://arxiv.org/abs/2606.05019"
source_quality: abstract_only
topics: [RAN-energy-saving, cell-on-off, LSTM, QoS, OPEX, green-networks]
topic_primary: cellular-ai
topics_secondary: [open-ran]
novelty_score: 3
---

## Summary (EN)

This paper tackles RAN energy saving via cell on/off switching, but its contribution is operational practicality rather than a new optimizer. It trains a single LSTM model on real European Mobile Network Operator (MNO) traffic, then makes the energy-vs-service trade-off tunable *at inference time* by adjusting a decision threshold — so an operator can dial in different target throughput levels and outage-tolerance constraints without retraining a separate model per service tier. This directly addresses the deployment friction of prior RAN-energy ML work, which typically bakes a fixed QoS target into training.

On an unseen test week, the strategy captures 63–96% of oracle-level energy savings while largely respecting operator-defined constraints, and the authors translate the savings into CO₂ and OPEX estimates under realistic scenarios. The work is to appear at IEEE ICC 2026.

## Summary (ZH)

本文研究通过小区开关（cell on/off）实现无线接入网节能，但其贡献在于"工程可用性"而非一个新的优化器。作者用真实的欧洲移动网络运营商（MNO）流量训练单一 LSTM 模型，再通过调整一个决策阈值，使"节能 vs 服务质量"的权衡可在推理阶段在线调节——运营商无需为每个服务等级重新训练模型，即可设定不同的目标吞吐与中断容忍约束。这恰好解决了既有"RAN 节能 ML"工作的部署痛点：它们通常在训练时就固化了某个 QoS 目标。

在一个未见过的测试周上，该策略获取了 63–96% 的"理想（oracle）"节能水平，同时基本满足运营商定义的约束；作者还在真实场景下将节能折算为 CO₂ 与 OPEX 估计。该工作将发表于 IEEE ICC 2026。

## Key technical points (EN)

- **Single model, runtime-tunable QoS**: one LSTM; the energy/service trade-off is set by a decision threshold at inference, no per-tier retraining.
- **Constraints enforced**: target throughput levels + outage-tolerance, alongside the energy objective.
- **Data**: real European MNO traffic (not simulation).
- **Result**: 63–96% of oracle energy savings on an unseen week; CO₂ + OPEX estimates provided.
- **Venue**: IEEE ICC 2026.

## Key technical points (ZH)

- **单模型、运行时可调 QoS**：单个 LSTM；节能/服务权衡由推理阶段的决策阈值设定，无需按等级重训。
- **约束执行**：在节能目标之外，强制满足目标吞吐与中断容忍约束。
- **数据**：真实欧洲 MNO 流量（非仿真）。
- **结果**：未见周上达到理想节能的 63–96%；并给出 CO₂ 与 OPEX 估计。
- **发表**：IEEE ICC 2026。

## Why it matters / what's new (EN)

RAN energy saving is a crowded area, so the novelty here is not "switch cells off to save power" but the inference-time QoS-threshold knob that lets one trained model serve many operator policies — a deployability angle that maps cleanly onto an O-RAN energy-saving rApp. It complements, rather than duplicates, the same group's O-RAN entries (COSMO SMO, the BeGREEN energy-efficiency intelligence plane), and sits alongside the KB's other ML-for-RAN-control entries under cellular-ai.

## Why it matters / what's new (ZH)

RAN 节能是一个拥挤的研究方向，因此其新意不在于"关小区省电"，而在于推理阶段的 QoS 阈值旋钮——使单个已训练模型可服务多种运营商策略，这一可部署性角度天然契合 O-RAN 的节能 rApp。它与同一团队的 O-RAN 条目（COSMO SMO、BeGREEN 能效智能面）互补而非重复，并与 KB 中其他"ML 驱动 RAN 控制"条目同处 cellular-ai 分箱。
