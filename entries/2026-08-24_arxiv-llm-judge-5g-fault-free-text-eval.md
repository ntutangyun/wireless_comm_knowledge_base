---
id: 2026-08-24_arxiv-llm-judge-5g-fault-free-text-eval
date_published: 2026-08-21
date_found: 2026-08-24
type: academic-paper
technology: cellular
title_en: "Free-Text Evaluation of LLMs for 5G Domain Knowledge and Fault Analysis using LLM-as-Judge"
title_zh: "基于 LLM 评审的 5G 领域知识与故障分析自由文本评测"
url: "https://arxiv.org/abs/2608.21021"
source_quality: full
topics: [LLM, LLM-as-judge, telecom-AI, fault-diagnosis, benchmark, 3GPP-specifications, O-RAN, edge-AI, evaluation-methodology]
topic_primary: cellular-ai
topics_secondary: []
novelty_score: 2
---

## Summary (EN)
Rishiraj Sengupta, Sotiris Chatzimiltis, Mohammad Shojafar and Xiatian Zhu (University of Surrey 5G/6G Innovation Centre + CVSSP; accepted at IEEE CSCN 2026) evaluate whether lightweight, edge-deployable LLMs can handle open-ended 5G diagnostics when graded by free-text generation instead of the multiple-choice formats that dominate telecom benchmarks. Three student models (Claude-Haiku-4.5, GPT-5.4-Mini, Gemini-3.1-Flash-Lite) answer 100-sample subsets of three telecom datasets — TeleQNA_ORAN_FT (3GPP/O-RAN specification recall), 5G-Faults_FT (fault-diagnosis reasoning) and TeleInter_FT (technical concept interpretation) — and each response receives binary correctness grades from three frontier judges (GPT-5.5, Gemini-3.1-Pro-Preview, Gemini-3.5-Flash), with pairwise inter-judge agreement computed as the probability of identical grades.

Results split sharply by task type: all three student models exceed 90% on fault diagnosis, land at 76-91% on technical interpretation, but stay under 60% on specification recall — the standards knowledge gap dominates. Overall accuracy: GPT-5.4-Mini 82.1% (7.5 s mean latency), Gemini-3.1-Flash-Lite 78.1% (cheapest at ~$0.09/run, 3.4-4.3 s), Claude-Haiku-4.5 71.0% (costliest at ~$0.42/run, 12.3 s peak). Inter-judge agreement holds at 0.90-0.98 across all runs, which the authors read as validating LLM-as-judge grading for telecom free text; they also document systematic judge divergences (GPT-5.5 grades one student's fault answers more strictly) that a single-judge protocol would have hidden. The study validates methodology consistency, not ground-truth correctness.

## Summary (ZH)
萨里大学 5G/6G 创新中心与 CVSSP 的 Rishiraj Sengupta、Sotiris Chatzimiltis、Mohammad Shojafar、Xiatian Zhu（IEEE CSCN 2026 录用）评测轻量级、可边缘部署的 LLM 能否胜任开放式 5G 诊断——采用自由文本生成而非主导电信基准的多选题格式。三个学生模型（Claude-Haiku-4.5、GPT-5.4-Mini、Gemini-3.1-Flash-Lite）回答三个电信数据集各 100 条样本——TeleQNA_ORAN_FT（3GPP/O-RAN 规范记忆）、5G-Faults_FT（故障诊断推理）、TeleInter_FT（技术概念解释）——每条回答由三个前沿评审模型（GPT-5.5、Gemini-3.1-Pro-Preview、Gemini-3.5-Flash）给出二元对错评分，成对评审一致率按评分一致的概率计算。

结果按任务类型明显分化：三个学生模型在故障诊断上全部超过 90%，技术解释 76-91%，但规范记忆均低于 60%——标准知识缺口占主导。总体准确率：GPT-5.4-Mini 82.1%（平均时延 7.5 s）、Gemini-3.1-Flash-Lite 78.1%（最便宜，约 $0.09/轮，3.4-4.3 s）、Claude-Haiku-4.5 71.0%（最贵，约 $0.42/轮，峰值 12.3 s）。所有轮次的评审间一致率保持在 0.90-0.98，作者据此认为 LLM 评审对电信自由文本评分是可靠的；同时记录了系统性的评审分歧（GPT-5.5 对某一学生模型的故障回答评分更严），单评审协议会掩盖这类分歧。该研究验证的是方法学一致性，而非标准答案正确性。

## Key technical points (EN)
- Shift from multiple-choice to free-text telecom evaluation: three 100-sample benchmarks (TeleQNA_ORAN_FT spec recall, 5G-Faults_FT diagnosis, TeleInter_FT interpretation).
- Three lightweight students x three frontier judges; binary grading; pairwise agreement P(a=b) computed per judge pair.
- Task-type split: fault diagnosis >=90% for all models; interpretation 76-91%; specification recall <60% for all — standards knowledge is the consistent weak spot.
- Operational efficiency measured alongside accuracy: GPT-5.4-Mini 82.1% / 7.5 s; Gemini-3.1-Flash-Lite 78.1% / ~$0.09 per run; Claude-Haiku-4.5 71.0% / ~$0.42 per run.
- Inter-judge agreement 0.90-0.98 across runs; multi-judge design surfaces systematic per-judge strictness differences a single judge would hide.
- Scope caveat: consistency validation only — no human-expert ground truth; 100 samples per benchmark is small.

## Key technical points (ZH)
- 电信评测从多选题转向自由文本：三个各 100 样本的基准（TeleQNA_ORAN_FT 规范记忆、5G-Faults_FT 故障诊断、TeleInter_FT 概念解释）。
- 三个轻量学生模型 x 三个前沿评审；二元评分；按评审对计算成对一致率 P(a=b)。
- 任务类型分化：故障诊断所有模型 >=90%；概念解释 76-91%；规范记忆全部 <60%——标准知识是一致的短板。
- 运行效率与准确率并列度量：GPT-5.4-Mini 82.1% / 7.5 s；Gemini-3.1-Flash-Lite 78.1% / 约 $0.09/轮；Claude-Haiku-4.5 71.0% / 约 $0.42/轮。
- 评审间一致率 0.90-0.98；多评审设计暴露单评审会掩盖的系统性宽严差异。
- 范围保留：仅验证一致性——无人类专家标准答案；每个基准 100 样本规模偏小。

## Why it matters / what's new (EN)
The cellular-ai bin already holds the data layer (OTel's 326k-example telecom corpora, 2026-08-19) and the agent-safety layer (WirelessOpsAgent's action-gating benchmark, 2026-08-15); this paper supplies the missing evaluation-methodology layer — how to grade telecom LLM output when answers are free text, as they are in real NOC workflows. Two findings travel well: the fault-diagnosis-versus-specification-recall split (>=90% vs <60%) quantifies exactly where small models fail — retrieving 3GPP clause knowledge, which is also the cheapest gap to close with RAG; and the 0.90+ inter-judge agreement, with documented per-judge strictness bias, gives practitioners an empirical basis for multi-judge telecom eval protocols. The edge-deployability framing (cost and latency per run reported alongside accuracy) matches the operator interest in small on-prem models rather than frontier-scale deployments.

## Why it matters / what's new (ZH)
cellular-ai 栏目已有数据层（OTel 的 32.6 万条电信语料，2026-08-19）与智能体安全层（WirelessOpsAgent 的动作门控基准，2026-08-15）；本文补上缺失的评测方法层——当答案是自由文本（真实 NOC 工作流即如此）时如何为电信 LLM 输出评分。两个可迁移的发现：故障诊断与规范记忆的分化（>=90% 对 <60%）精确量化了小模型的失败位置——3GPP 条款知识检索，而这恰是用 RAG 最容易弥补的缺口；0.90+ 的评审间一致率及记录在案的评审宽严偏差，为多评审电信评测协议提供了经验依据。边缘可部署性框架（成本与时延与准确率并列报告）契合运营商对小型本地模型而非前沿规模部署的兴趣。

## Images
