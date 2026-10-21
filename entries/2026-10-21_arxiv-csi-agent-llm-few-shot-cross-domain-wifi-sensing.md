---
id: 2026-10-21_arxiv-csi-agent-llm-few-shot-cross-domain-wifi-sensing
date_published: 2026-09-25
date_found: 2026-10-21
technology: wifi
type: academic-paper
title_en: "CSI-Agent: LLM-Assisted Few-Shot Adaptation for Cross-Domain Wi-Fi CSI Sensing"
title_zh: "CSI-Agent：面向跨域 Wi-Fi CSI 感知的 LLM 辅助小样本适配"
url: "https://arxiv.org/abs/2609.31990"
source_quality: full
topics: [Wi-Fi sensing, CSI, LLM agent, few-shot adaptation, cross-domain, domain shift]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi, agentic-wifi]
novelty_score: 3
---

## Summary (EN)

CSI-Agent (Tianya Zhao, Chuan Liu, Xuyu Wang; Florida International University; arXiv 2609.31990, submitted 25 Sep 2026, noted as submitted to INFOCOM) targets the brittleness of Wi-Fi CSI sensing models when users, environments or devices change. The authors argue that existing solutions treat this as an offline model-design problem or apply one fixed adaptation recipe to the whole target domain, and that with scarce labels different classes can fail differently under the same shift. CSI-Agent instead casts cross-domain adaptation as a deployment-time decision problem: an LLM agent reads class-level evidence and decides, per class, whether to keep a default scorer or call a specialised action.

A preliminary study on CSI-Bench supports the framing: fixed 1-shot adaptation helps some targets and hurts others, effects differ across classes inside one domain, source-model confidence is unreliable (49.6% to 69.2% of predictions above 0.9 confidence are wrong), and raw CSI is too large to put into prompts (about 112K tokens per sample). The system therefore works on summaries, not raw CSI. It has four stages: build a toolbox of five deterministic actions (source classifier, full view, low-pass view, quarter-band view, and a support-weighted default); summarise diagnostic "cards" per class (support-side recall, rank, false activation, query activation rates, with Support Fit, Activation Fit, Risk Flags and Verdict); let an LLM planner output status, failure mode, action and reason for each class, with a deterministic verifier accepting or rejecting each proposal (rejected classes fall back to the default); and execute with bounded adjustment, adding a scaled correction (beta = 0.35) to the support-weighted default.

Evaluation uses CSI-Bench (cross-device and compositional splits), WiAR (cross-user), SignFi-50 (cross-environment) and WiMANS (cross-environment), with a main planner of Qwen3.5-9B. Under 1-shot adaptation CSI-Agent has the best target performance on all five splits, averaging target macro-F1 of 0.4890 versus 0.3233 for FewSense (+0.1657), and improves 12 of 13 target domains in the selective-action comparison.

## Summary (ZH)

CSI-Agent（Tianya Zhao、Chuan Liu、Xuyu Wang，佛罗里达国际大学；arXiv 2609.31990，2026-09-25 提交，注明已投稿 INFOCOM）针对 Wi-Fi CSI 感知模型在用户、环境或设备变化时的脆弱性。作者指出，现有方案把它当作离线模型设计问题，或对整个目标域套用同一种固定适配方法；而在标注稀缺时，同一种域偏移下不同类别可能以不同方式失效。CSI-Agent 则把跨域适配表述为部署时的决策问题：由 LLM 智能体读取类别级证据，逐类决定保留默认打分器还是调用专门动作。

在 CSI-Bench 上的初步研究支持这一表述：固定的 1-shot 适配对某些目标域有帮助、对另一些有损害；同一域内不同类别的效果不同；源模型置信度不可靠（置信度高于 0.9 的预测中有 49.6% 至 69.2% 是错误的）；原始 CSI 过大，无法放入提示（每个样本约 112K token）。因此系统处理的是摘要而非原始 CSI。系统分四个阶段：构建含五个确定性动作的工具箱（源分类器、完整视图、低通视图、四分之一频带视图，以及支持样本加权的默认打分器）；按类别汇总诊断“卡片”（支持侧召回、排名、误激活，以及查询激活率，含 Support Fit、Activation Fit、Risk Flags 和 Verdict）；由 LLM 规划器为每个类别输出状态、失效模式、动作和理由，并由确定性验证器接受或拒绝每个提议（被拒绝的类别回退到默认）；最后以有界调整执行，在支持加权默认分数上加上缩放后的修正项（β = 0.35）。

评测使用 CSI-Bench（跨设备与组合划分）、WiAR（跨用户）、SignFi-50（跨环境）和 WiMANS（跨环境），主规划器为 Qwen3.5-9B。在 1-shot 适配下，CSI-Agent 在全部五个划分上取得最佳目标域表现，平均目标域 macro-F1 为 0.4890，FewSense 为 0.3233（+0.1657），并在选择性动作对比中改善了 13 个目标域中的 12 个。

## Key technical points (EN)

- Problem: closed-set classification with k labelled support samples per class plus an unlabelled query set; choose a predictor maximising target macro-F1 using only support labels and unlabelled query statistics.
- Five deterministic actions; the views use shifted prototypes and a ridge classifier weighted by support reliability.
- LLM output is verified by a deterministic verifier before execution; accepted actions only adjust (not replace) the support-weighted default.
- Ablations at 1-shot: removing the LLM costs 2.93 points on average; removing query statistics costs 3.25 (WiMANS drops 12.55); removing the verifier hurts WiAR and SignFi; removing bounded execution hurts CSI-Bench Compositional and WiMANS.
- Planner robustness: Qwen3.5-9B, Llama-3.1-8B, GPT-5.4-mini and Claude Haiku 4.5 give similar 1-shot averages (48.57% to 48.90%).
- Overhead: 20.59 to 91.02 s per domain; the paper's counterfactual sample-level LLM design would be 8.8x to 547x slower and use 3.3x to 661.9x more input tokens.
- Stated caveats: it does not always match the best fixed action per domain (selection uses no query labels); decision-trace rationales are auditable references, not faithful causal explanations; results cover four public datasets and five splits.

## Key technical points (ZH)

- 问题：每类 k 个带标注支持样本加一个无标注查询集的封闭集分类；仅使用支持样本标签和无标注查询统计，选择使目标域 macro-F1 最大的预测器。
- 五个确定性动作；各视图使用平移原型和按支持可靠度加权的岭分类器。
- LLM 输出在执行前由确定性验证器核验；被接受的动作仅对支持加权默认分数做调整（而非替换）。
- 1-shot 消融：去掉 LLM 平均损失 2.93 点；去掉查询统计损失 3.25 点（WiMANS 下降 12.55）；去掉验证器对 WiAR 和 SignFi 不利；去掉有界执行对 CSI-Bench Compositional 和 WiMANS 不利。
- 规划器鲁棒性：Qwen3.5-9B、Llama-3.1-8B、GPT-5.4-mini 和 Claude Haiku 4.5 的 1-shot 平均值相近（48.57% 至 48.90%）。
- 开销：每个域 20.59 至 91.02 秒；论文设想的逐样本 LLM 设计会慢 8.8 倍至 547 倍，输入 token 多 3.3 倍至 661.9 倍。
- 论文自述的局限：不一定总能匹配各域最佳固定动作（选择不使用查询标签）；决策轨迹中的理由是可审计参考而非忠实的因果解释；结果覆盖四个公开数据集和五个划分。

## Why it matters / what's new (EN)

The KB's CSI-sensing entries so far are mostly about acquisition and encoders (for example 2026-10-19_arxiv-vespercsi-edge-wifi-csi-acquisition-framework and 2026-10-14_arxiv-unicsi-universal-wifi-csi-encoder). This paper addresses a different step, deployment-time adaptation under domain shift, and uses an LLM only as a class-level planner behind a verifier rather than on raw samples. Numbers are the authors' own results on public datasets, with the arXiv listing noting the paper is submitted to INFOCOM.

## Why it matters / what's new (ZH)

本知识库已有的 CSI 感知条目多涉及采集与编码器（例如 2026-10-19_arxiv-vespercsi-edge-wifi-csi-acquisition-framework 和 2026-10-14_arxiv-unicsi-universal-wifi-csi-encoder）。本文关注的是另一个环节——域偏移下的部署时适配，并且只在验证器之后把 LLM 用作类别级规划器，而不是处理原始样本。数字为作者在公开数据集上的结果，arXiv 页面注明该文已投稿 INFOCOM。

## Images

![CSI-Agent framework overview | CSI-Agent 框架总览](https://arxiv.org/html/2609.31990v1/overview.png)
