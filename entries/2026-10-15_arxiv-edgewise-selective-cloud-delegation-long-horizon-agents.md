---
id: 2026-10-15_arxiv-edgewise-selective-cloud-delegation-long-horizon-agents
date_published: 2026-10-13
date_found: 2026-10-15
technology: edge-ai
type: academic-paper
title_en: "EdgeWise: a local small model solves long-horizon agent tasks and selectively delegates key steps to a cloud LLM"
title_zh: "EdgeWise：本地小模型处理长程智能体任务，仅把关键步骤选择性委派给云端 LLM"
url: "https://arxiv.org/abs/2610.17560"
source_quality: abstract_only
topics: [edge-cloud-collaboration, SLM, LLM-agents, delegation, reinforcement-learning, inference-cost]
topic_primary: compute-offloading
topics_secondary: [on-device-inference]
novelty_score: 3
---

## Summary (EN)

EdgeWise is an edge-cloud collaboration framework for long-horizon agent tasks. The authors observe that allocating the cloud LLM to only a small subset of key steps can achieve performance comparable to full LLM execution while significantly reducing inference cost. EdgeWise therefore deploys a small language model (SLM) on the local device as the primary solver and delegates critical steps to a cloud LLM when stronger model capacity is needed.

To make delegation autonomous without additional models at inference time, the paper introduces a step-level reinforcement-learning method that jointly optimizes task solving and delegation, with fine-grained credit assignment for individual delegation decisions. It also introduces an external judge-based delegation strategy, used to study design choices in edge-cloud collaboration: when to delegate, how delegation decisions should be made, what context should be shared, and how frequently the cloud LLM should be invoked.

Experiments show EdgeWise matches or outperforms pure-LLM execution while reducing inference cost by up to 62% on SWE-Rebench and 34% on Terminal-Bench 2.1. The authors further deploy it on a local workstation and report comparable cost savings in a practical edge-cloud setting.

## Summary (ZH)

EdgeWise 是面向长程智能体任务的边云协同框架。作者观察到，仅把云端 LLM 分配给少量关键步骤，即可达到与完整 LLM 执行相当的性能，同时显著降低推理成本。因此 EdgeWise 在本地设备上部署小语言模型（SLM）作为主要求解器，在需要更强模型能力时把关键步骤委派给云端 LLM。

为了在推理时无需额外模型即可自主委派，论文提出了一种步骤级强化学习方法，联合优化任务求解与委派，并对单个委派决策做细粒度的信用分配。论文还提出了基于外部评判器的委派策略，并用它研究边云协同的设计选择：何时委派、如何做出委派决策、应共享哪些上下文，以及云端 LLM 的调用频率。

实验表明，EdgeWise 达到或优于纯 LLM 执行，同时在 SWE-Rebench 上将推理成本最多降低 62%，在 Terminal-Bench 2.1 上降低 34%。作者还将其部署在本地工作站上，并报告在实际边云场景中有相当的成本节省。

## Key technical points (EN)

- Design: local SLM is the primary solver; critical steps are delegated to a cloud LLM.
- Learning: step-level RL jointly optimizes solving and delegation with fine-grained credit assignment; no extra model at inference.
- Design-space study (external judge): when to delegate, how to decide, what context to share, how often to call the cloud.
- Results: matches or outperforms pure-LLM execution; cost reduced up to 62% (SWE-Rebench) and 34% (Terminal-Bench 2.1).
- Also deployed on a local workstation with comparable cost savings.

## Key technical points (ZH)

- 设计：本地 SLM 为主要求解器；关键步骤委派给云端 LLM。
- 学习：步骤级强化学习联合优化求解与委派，细粒度信用分配；推理时无需额外模型。
- 设计空间研究（外部评判器）：何时委派、如何决策、共享哪些上下文、多久调用一次云端。
- 结果：达到或优于纯 LLM 执行；成本最多降低 62%（SWE-Rebench）与 34%（Terminal-Bench 2.1）。
- 另在本地工作站上部署，成本节省相当。

## Why it matters / what's new (EN)

The paper places the compute split at the level of individual agent steps rather than whole queries. The cost reductions are measured on the paper's two benchmarks and the local deployment is a workstation, so the results should not be read as phone-class measurements. This record is based on the abstract only.

## Why it matters / what's new (ZH)

论文把算力切分放在单个智能体步骤层面，而非整个查询。成本降幅在论文的两个基准上测得，本地部署使用的是工作站，因此不应视为手机级测量结果。本条目仅基于摘要。

## Images

*(No redistributable images for this entry.)*
