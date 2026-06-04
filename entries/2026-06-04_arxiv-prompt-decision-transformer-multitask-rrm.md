---
id: 2026-06-04_arxiv-prompt-decision-transformer-multitask-rrm
date_published: 2026-06-03
date_found: 2026-06-04
type: academic-paper
technology: cellular
title_en: "Generalizable multi-task learning for wireless networks using Prompt Decision Transformers"
title_zh: "用提示式决策 Transformer 实现无线网络的可泛化多任务学习"
url: "https://arxiv.org/abs/2606.04328"
source_quality: abstract_only
topics: [decision-transformer, prompt-learning, RRM, CoMP, multi-cell-selection, offline-RL]
topic_primary: cellular-ai
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)

This paper applies the Prompt Decision Transformer (PromptDT) to radio resource management, recasting multi-cell selection and coordinated multipoint (CoMP) transmission as a sequence-modeling problem solved from offline trajectories plus a task-specific prompt. The motivation is the well-known brittleness of online DRL (e.g. PPO) for RRM: poor sample efficiency, weak generalization across network sizes, and costly retraining whenever the number of base stations, UEs, or the scheduler policy changes. By conditioning a decision transformer on a short prompt that encodes the target task/configuration, PromptDT generalizes across these variations without fine-tuning.

Reported results show up to 49% QoE improvement in multi-task settings versus baselines, performance that scales with model capacity, and robust few-shot adaptation to unseen network configurations without retraining. The work is accepted at IEEE MeditCom 2026.

## Summary (ZH)

本文将提示式决策 Transformer（Prompt Decision Transformer, PromptDT）应用于无线资源管理，把多小区选择与协作多点（CoMP）传输重构为"由离线轨迹 + 任务相关提示求解"的序列建模问题。其动机在于在线 DRL（如 PPO）在 RRM 上众所周知的脆弱性：样本效率低、跨网络规模泛化差，以及每当基站数、UE 数或调度策略变化时都需昂贵的重训。通过让决策 Transformer 以一段编码"目标任务/配置"的短提示为条件，PromptDT 可在这些变化间泛化而无需微调。

所报告的结果显示：在多任务设置下相对基线最多提升 49% 的 QoE，性能随模型容量提升，并能对未见网络配置进行稳健的少样本适应而无需重训。该工作被 IEEE MeditCom 2026 录用。

## Key technical points (EN)

- **PromptDT for RRM**: multi-cell selection + CoMP framed as offline sequence modeling conditioned on a task prompt.
- **Generalization target**: varying #base-stations, #UEs, scheduler policy — handled without fine-tuning.
- **Results**: up to 49% QoE gain in multi-task vs baselines; scales with model capacity; robust few-shot adaptation.
- **Authors**: Temiz, Salehi, Erol-Kantarci. Accepted at IEEE MeditCom 2026.

## Key technical points (ZH)

- **面向 RRM 的 PromptDT**：多小区选择 + CoMP 被建模为"以任务提示为条件的离线序列建模"。
- **泛化目标**：不同基站数、UE 数、调度策略——无需微调即可处理。
- **结果**：多任务下相对基线最多 +49% QoE；随模型容量提升；少样本适应稳健。
- **作者**：Temiz、Salehi、Erol-Kantarci。被 IEEE MeditCom 2026 录用。

## Why it matters / what's new (EN)

The KB's cellular-ai bin holds several DRL-for-RAN-control entries (ARIADNE link adaptation, the Double-DQN/jamming PRB-allocation pair, GENESIS). PromptDT's contribution is orthogonal: instead of training yet another task-specific DRL policy, it uses offline-RL + prompt conditioning to get one model that transfers across network configurations without retraining — the generalization/transfer angle that the existing DRL entries explicitly lack. This makes it a useful contrast point for the bin rather than a duplicate.

## Why it matters / what's new (ZH)

KB 的 cellular-ai 分箱已有多条"DRL 驱动 RAN 控制"条目（ARIADNE 链路自适应、Double-DQN/抗干扰 PRB 分配组合、GENESIS）。PromptDT 的贡献是正交的：它不再训练又一个任务专用的 DRL 策略，而是用离线 RL + 提示条件化得到"无需重训即可跨网络配置迁移"的单一模型——这正是既有 DRL 条目明确欠缺的泛化/迁移角度。因此它是该分箱有价值的对照点，而非重复。
