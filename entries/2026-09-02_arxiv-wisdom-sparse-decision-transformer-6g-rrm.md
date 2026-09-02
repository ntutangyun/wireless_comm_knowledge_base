---
id: 2026-09-02_arxiv-wisdom-sparse-decision-transformer-6g-rrm
date_published: 2026-08-31
date_found: 2026-09-02
type: academic-paper
technology: cellular
title_en: "WiSDoM: Wireless Sparse Decision Transformer with Mixture-of-Experts for Multi-Task Mobile Network Optimization"
title_zh: "WiSDoM：面向多任务移动网络优化的稀疏专家混合决策Transformer"
url: "https://arxiv.org/abs/2609.00284"
source_quality: abstract_only
topics: [6G, CoMP, RRM, Decision-Transformer, Mixture-of-Experts, offline-RL, multi-cell-selection, few-shot-adaptation, QoE]
topic_primary: cellular-ai
topics_secondary: [6g-vision]
novelty_score: 3
---

## Summary (EN)
Fatih Temiz, Shavbo Salehi and Melike Erol-Kantarci (arXiv v1, 31 Aug 2026) target radio resource management (RRM) scalability under 6G's expected diversity of deployment scenarios — varying network topology, user mobility, traffic demand and radio conditions. Offline reinforcement learning (RL) is a strong decision-making tool, but a single RL policy trained across heterogeneous wireless environments tends to underperform because of conflicting optimization objectives and limited model specialization. The paper focuses this problem on coordinated multipoint (CoMP) transmission specifically: selecting the optimal serving-cell combination is itself a sequential decision problem under constantly evolving network conditions, which makes it a demanding multi-task RL testbed.

The proposed system, WiSDoM (Wireless Sparse Decision Transformer with Mixture-of-Experts), combines a Decision Transformer with a Mixture-of-Experts (MoE) architecture that dynamically activates specialized experts based on the characteristics of the task at hand. The MoE routing increases model capacity without a proportional rise in inference cost, mitigates negative transfer between dissimilar tasks, and lets individual experts specialize. WiSDoM is trained jointly across diverse network configurations spanning multiple base-station and UE densities, mobility levels and scheduler policies. Reported results show WiSDoM consistently outperforming heuristic methods, single-task models and conventional (dense) multi-task Decision Transformers, improving quality of experience (QoE) by up to 55% while activating only about one-third of the parameters of its dense counterpart at inference time. The paper also reports that WiSDoM generalizes to unseen wireless scenarios via few-shot prompting, without retraining or fine-tuning.

## Summary (ZH)
Fatih Temiz、Shavbo Salehi 与 Melike Erol-Kantarci（arXiv v1，2026年8月31日）关注在 6G 预期的多样化部署场景（网络拓扑、用户移动性、业务需求与无线条件各异）下无线资源管理（RRM）的可扩展性问题。离线强化学习（RL）是一种强有力的决策工具，但在异构无线环境中联合训练单一 RL 策略往往表现不佳，原因在于优化目标相互冲突、模型专精能力有限。论文将该问题具体聚焦于协同多点传输（CoMP）：为一次服务小区组合选择最优方案，本身就是一个在网络条件不断演变下的序贯决策问题，因而构成一个要求苛刻的多任务 RL 测试场景。

论文提出的系统 WiSDoM（Wireless Sparse Decision Transformer with Mixture-of-Experts）将决策 Transformer 与专家混合（MoE）架构相结合，可根据当前任务特征动态激活专门化的专家子网络。MoE 路由机制能够在不成比例增加推理成本的前提下提升模型容量，缓解不同任务间的负迁移，并使各专家实现专精化。WiSDoM 在涵盖多种基站/终端密度、移动性水平与调度策略的多样化网络配置上联合训练。实验结果显示，WiSDoM 相较启发式方法、单任务模型以及传统（稠密）多任务决策 Transformer 均能持续取得更优表现，服务质量体验（QoE）最高提升 55%，同时推理时仅激活其稠密对应模型约三分之一的参数。论文还报告称，WiSDoM 无需重新训练或微调，仅通过少样本提示（few-shot prompting）即可有效泛化到未见过的无线场景。

## Key technical points (EN)
- Problem: 6G's deployment diversity strains single-policy offline-RL RRM; conflicting objectives and limited specialization degrade generalization.
- Focus use case: coordinated multipoint (CoMP) serving-cell-combination selection, a sequential decision problem under evolving network conditions.
- Architecture: Decision Transformer + Mixture-of-Experts, dynamically routing to specialized experts per task characteristics.
- MoE benefit: raises model capacity without proportional inference-cost growth; mitigates negative transfer; enables expert specialization.
- Training regime: joint multi-task training across varying BS/UE densities, mobility levels, scheduler policies.
- Results: up to 55% QoE improvement over heuristics/single-task/dense multi-task DT baselines, at ~1/3 the active parameters of the dense model.
- Generalization: adapts to unseen wireless scenarios via few-shot prompting, no retraining/fine-tuning required.

## Key technical points (ZH)
- 问题：6G 的部署多样性给单一策略的离线 RL RRM 带来压力；目标冲突与模型专精不足会削弱泛化能力。
- 聚焦用例：协同多点传输（CoMP）的服务小区组合选择——一个在网络条件不断演变下的序贯决策问题。
- 架构：决策 Transformer + 专家混合（MoE），根据任务特征动态路由至专门化专家。
- MoE 优势：在不成比例增加推理成本的前提下提升模型容量；缓解负迁移；实现专家专精化。
- 训练方式：在多种基站/终端密度、移动性水平与调度策略下进行联合多任务训练。
- 结果：相较启发式方法/单任务模型/稠密多任务 DT 基线，QoE 最高提升 55%，且推理时激活参数量仅为稠密模型的约三分之一。
- 泛化能力：无需重新训练或微调，仅通过少样本提示即可适配未见过的无线场景。

## Why it matters / what's new (EN)
The KB already has an offline-RL entry for AoI-aware slicing and a foundation-model entry for wireless localization, but WiSDoM is the first entry to bring a sparse Mixture-of-Experts Decision Transformer specifically to CoMP multi-cell selection — a control problem the KB has not previously covered as a distinct RL task. The paper's practical contribution is the capacity/cost trade-off: MoE routing lets one model specialize across drastically different network configurations (density, mobility, scheduler policy) while activating only a third of the parameters a dense model would need, and the reported few-shot adaptation to unseen scenarios without retraining addresses the generalization weakness that has limited prior single-policy RRM-RL work.

## Why it matters / what's new (ZH)
知识库此前已有面向 AoI 感知切片的离线 RL 条目，以及面向无线定位的基础模型条目，但 WiSDoM 是首个将稀疏专家混合决策 Transformer 具体应用于 CoMP 多小区选择的条目——这是知识库此前尚未作为独立 RL 任务覆盖过的控制问题。论文的实际贡献在于容量与成本之间的权衡：MoE 路由使单一模型能够在密度、移动性、调度策略差异巨大的网络配置间实现专精化，同时推理时仅激活稠密模型所需参数量的三分之一；其报告的"无需重训练即可少样本适配未见场景"的泛化能力，也回应了此前单一策略 RRM-RL 研究普遍存在的泛化短板。

## Images
