---
id: 2026-08-12_arxiv-evoric-llm-ppo-oran-ric
date_published: 2026-08-07
date_found: 2026-08-12
type: academic-paper
technology: cellular
title_en: "EvoRIC: Reinforcement Learning Fine-Tuned LLM-empowered RAN Intelligent Control Toward Autonomous O-RAN"
title_zh: "EvoRIC：面向自主 O-RAN 的强化学习微调 LLM 赋能 RAN 智能控制"
url: "https://arxiv.org/abs/2608.06789"
source_quality: abstract_only
topics: [O-RAN, RIC, LLM, PPO, RLFT, IAB]
topic_primary: open-ran
topics_secondary: [cellular-ai]
novelty_score: 2
---

## Summary (EN)
EvoRIC (Lingyan Bao, Jemin Lee, Tony Q.S. Quek; arXiv, submitted 23 Apr 2026, revised 7 Aug 2026) is a hierarchical framework that puts a large language model inside the O-RAN control loop as a decision-making agent that improves through reinforcement learning. The core mechanism is a **reinforcement-learning fine-tuning (RLFT)** scheme in which the **LLM operates as the actor within a Proximal Policy Optimization (PPO) agent**, refining its semantic reasoning through interaction with the wireless environment so that its outputs align with measured network-performance metrics rather than generic pretraining objectives.

The framework maps onto O-RAN's two-tier RIC split: the **non-real-time RIC** hosts global model updates (the fine-tuning loop), while the **near-real-time RIC** runs local execution of the learned policy. The authors evaluate within integrated access and backhaul (IAB) networks, presenting the approach as a step toward autonomous O-RAN operation where an LLM-based controller adapts online instead of relying on hand-tuned or narrowly-trained control policies. (This entry is abstract-level: the arXiv HTML rendering was not yet available at ingest, so headline numbers and baseline comparisons are not captured here.)

## Summary (ZH)
EvoRIC（Lingyan Bao、Jemin Lee、Tony Q.S. Quek；arXiv，2026 年 4 月 23 日提交，8 月 7 日修订）是一个分层框架，将大语言模型置于 O-RAN 控制回路中，作为通过强化学习不断改进的决策智能体。核心机制是**强化学习微调（RLFT）**方案：**LLM 作为近端策略优化（PPO）智能体中的 actor**，通过与无线环境交互精炼其语义推理，使输出对齐实测网络性能指标，而非泛化的预训练目标。

该框架映射到 O-RAN 两级 RIC 划分：**非实时 RIC** 承载全局模型更新（微调回路），**近实时 RIC** 运行所学策略的本地执行。作者在集成接入与回传（IAB）网络中评测，将该方法定位为迈向自主 O-RAN 运行的一步——基于 LLM 的控制器在线自适应，而非依赖手工调参或窄训练的控制策略。（本条目为摘要级：入库时 arXiv HTML 渲染尚不可用，故未收录具体数字与基线对比。）

## Key technical points (EN)
- **Mechanism:** LLM as the actor in a PPO agent; reinforcement-learning fine-tuning (RLFT) aligns its reasoning with network-performance rewards.
- **O-RAN mapping:** non-RT RIC = global model updates; near-RT RIC = local policy execution.
- **Evaluation:** within integrated access and backhaul (IAB) networks; framed toward autonomous O-RAN.
- **Status:** submitted Apr 2026, revised Aug 2026; abstract-only ingest (HTML not yet rendered).

## Key technical points (ZH)
- **机制：** LLM 作为 PPO 智能体中的 actor；强化学习微调（RLFT）使其推理对齐网络性能奖励。
- **O-RAN 映射：** 非实时 RIC = 全局模型更新；近实时 RIC = 本地策略执行。
- **评测：** 在集成接入与回传（IAB）网络中；面向自主 O-RAN。
- **状态：** 2026 年 4 月提交、8 月修订；摘要级入库（HTML 尚未渲染）。

## Why it matters / what's new (EN)
The KB already tracks LLM-for-RAN control (e.g. LLM gNB config, agentic-RAN work); EvoRIC's specific angle is using RLFT to make the LLM itself the trainable PPO actor inside the standard non-RT/near-RT RIC split, and validating it on IAB networks. That places it in the growing "LLM-as-controller" corner of the open-RAN / cellular-AI bins. Novelty is moderate (2) at abstract level — LLM-empowered RIC control is an active area and the contribution is a particular fine-tuning formulation rather than a new architectural primitive; worth revisiting for headline numbers once the full text renders.

## Why it matters / what's new (ZH)
KB 已跟踪 LLM 用于 RAN 控制（如 LLM gNB 配置、agentic-RAN 工作）；EvoRIC 的具体切入点是用 RLFT 使 LLM 本身成为标准非实时/近实时 RIC 划分内可训练的 PPO actor，并在 IAB 网络上验证。这将其置于开放 RAN / cellular-AI bin 中日益增多的"LLM 作为控制器"一角。摘要级新颖性中等（2）——LLM 赋能 RIC 控制是活跃领域，贡献是特定微调表述而非新架构原语；待全文渲染后可回访具体数字。
