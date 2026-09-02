---
id: 2026-09-02_arxiv-craft-prehoc-explainability-6g-ran
date_published: 2026-09-01
date_found: 2026-09-02
type: academic-paper
technology: cellular
title_en: "CRAFT: Fine-Tuning Pre-hoc Explainability in AI-native 6G RAN"
title_zh: "CRAFT：面向AI原生6G RAN的前置可解释性微调方法"
url: "https://arxiv.org/abs/2609.00590"
source_quality: abstract_only
topics: [AI-RAN, small-language-models, explainability, GRPO, LoRA, cold-start, xApp, TRACTOR, telecom-LLM]
topic_primary: cellular-ai
topics_secondary: []
novelty_score: 3
---

## Summary (EN)
Pranshav Gajjar and Vijay K Shah (arXiv v1, 1 Sep 2026) address the auditability of small language models (SLMs) that AI-native RAN architectures are expected to embed for reasoning over real-time telemetry. The current state of the art — supervised fine-tuning on curated instruction data in the style of RANSTRUCT — only produces *post hoc* rationalizations: an explanation generated after, or independently of, the decision, which leaves the actual decision process unauditable. *Pre-hoc* reasoning — a causal reasoning trace produced before the output label — is preferable and has made progress in the broader LLM-reasoning literature via reinforcement-learning methods such as Group Relative Policy Optimization (GRPO). The authors report that transplanting GRPO into the telecom setting hits a cold-start barrier: SLMs learn to output the right *format* or to predict the right *label*, but rarely both at once.

To break that barrier, the paper proposes CRAFT (Cold-start Reasoning Alignment via Fine-Tuning), a data-centric method that autonomously generates a verified dataset of (input, reasoning-trace, label) triplets, then fine-tunes SLMs on that data using low-rank adaptation (LoRA) — substantially cheaper in compute and wall-clock time than GRPO-based training. On the TRACTOR and IC xApp telecom datasets, CRAFT reaches up to 86.5% accuracy / 94.6% F1 with zero parse failures, while direct GRPO and SFT+GRPO baselines fail to exceed 28% and 53.5% F1 respectively and suffer repeated parse failures. CRAFT-initialized policies also serve as a stable starting point for subsequent GRPO fine-tuning across diverse reward functions, and CRAFT itself consumes 59% less energy than the GRPO-based baselines.

## Summary (ZH)
Pranshav Gajjar 与 Vijay K Shah（arXiv v1，2026年9月1日）关注 AI 原生 RAN 架构中预期嵌入的小语言模型（SLM）的可审计性问题——这些模型被用于对实时遥测数据进行推理。当前最先进的方法（以 RANSTRUCT 风格在人工整理的指令数据上做监督微调为代表）只能产生*事后（post hoc）*解释：解释是在决策做出之后、或与决策过程无关地生成的，导致真正的决策过程无法被审计。*前置（pre-hoc）*推理——即在输出标签之前先产生一条因果推理轨迹——是更优的方向，更广泛的 LLM 推理文献已借助群体相对策略优化（GRPO）等强化学习方法在这方面取得进展。作者发现，将 GRPO 直接移植到电信场景会遇到一个"冷启动"障碍：SLM 要么学会输出正确的*格式*，要么学会预测正确的*标签*，但很少能同时做到两者。

为突破这一障碍，论文提出 CRAFT（Cold-start Reasoning Alignment via Fine-Tuning，经微调实现的冷启动推理对齐），这是一种以数据为中心的方法，能够自主生成经过验证的（输入、推理轨迹、标签）三元组数据集，随后利用低秩自适应（LoRA）对 SLM 进行微调——相比基于 GRPO 的训练，在算力与实际耗时上都大幅降低。在 TRACTOR 与 IC xApp 两个电信数据集上，CRAFT 在零解析失败的情况下取得最高 86.5% 的准确率与 94.6% 的 F1 分数，而直接使用 GRPO 或 SFT+GRPO 的基线方法 F1 分别不超过 28% 与 53.5%，且频繁出现解析失败。以 CRAFT 初始化的策略在不同奖励函数下也能作为后续 GRPO 微调的稳定起点，且 CRAFT 本身相较基于 GRPO 的基线能耗降低 59%。

## Key technical points (EN)
- Problem: AI-native 6G RAN embeds SLMs for real-time telemetry reasoning; SFT-style training only yields post-hoc (unauditable) explanations.
- Goal: pre-hoc reasoning — a causal trace generated *before* the label — for auditable decision-making.
- Identified barrier: transplanting GRPO into telecom hits a cold-start problem — models learn format OR label, rarely both.
- Method: CRAFT autonomously builds a verified (input, trace, label) triplet dataset, then LoRA-fine-tunes SLMs on it — cheaper than GRPO-based RL training.
- Results: TRACTOR/IC xApp datasets — up to 86.5% accuracy / 94.6% F1, zero parse failures; GRPO/SFT+GRPO baselines cap at 28%/53.5% F1 with repeated parse failures.
- Composability: CRAFT-initialized policies remain a robust foundation for later GRPO fine-tuning across diverse reward functions.
- Efficiency: 59% less energy consumption than GRPO-based baselines.

## Key technical points (ZH)
- 问题：AI 原生 6G RAN 嵌入 SLM 进行实时遥测推理；SFT 风格训练只能产生事后（不可审计）解释。
- 目标：前置推理——在输出标签*之前*生成因果推理轨迹——以实现可审计的决策过程。
- 发现的障碍：将 GRPO 直接移植到电信场景会遇到冷启动问题——模型要么学会格式，要么学会标签，很少两者兼得。
- 方法：CRAFT 自主构建经验证的（输入、推理轨迹、标签）三元组数据集，随后用 LoRA 对 SLM 进行微调——相比基于 GRPO 的强化学习训练成本更低。
- 结果：在 TRACTOR/IC xApp 数据集上，CRAFT 在零解析失败下取得最高 86.5% 准确率/94.6% F1；GRPO/SFT+GRPO 基线 F1 分别不超过 28%/53.5%，且反复出现解析失败。
- 可组合性：以 CRAFT 初始化的策略在不同奖励函数下仍可作为后续 GRPO 微调的稳健基础。
- 能效：相较基于 GRPO 的基线，能耗降低 59%。

## Why it matters / what's new (EN)
The KB's cellular-ai bin already has an evaluation-methodology entry (LLM-as-judge for telecom benchmarks) and an anomaly-detection-vs-LLM comparison ("Are We Shooting Flies with Cannons?"), but CRAFT is the first entry to address *how the reasoning itself is trained* for auditability rather than just measuring output quality. Its concrete contribution — naming and solving a cold-start barrier that blocks GRPO-style pre-hoc reasoning training in the telecom domain, with a data-centric LoRA-based fix that is both more accurate and 59% more energy-efficient than the RL baseline — gives the bin its first entry on the training-methodology layer of "auditable AI-native RAN," distinct from the existing capability, control, and evaluation layers.

## Why it matters / what's new (ZH)
知识库 cellular-ai 栏目此前已有评估方法学条目（面向电信基准的 LLM-as-judge）以及异常检测与 LLM 的对比研究（"Are We Shooting Flies with Cannons?"），但 CRAFT 是首个关注*推理本身如何被训练*以实现可审计性、而非仅仅衡量输出质量的条目。其具体贡献在于：明确指出并解决了电信领域中阻碍 GRPO 风格前置推理训练的冷启动障碍，并提出一种以数据为中心、基于 LoRA 的解决方案，相比强化学习基线不仅准确率更高，能耗还降低 59%——这为该栏目补上了"可审计 AI 原生 RAN"中训练方法学这一层，有别于此前已有的能力层、控制层与评估层条目。

## Images
