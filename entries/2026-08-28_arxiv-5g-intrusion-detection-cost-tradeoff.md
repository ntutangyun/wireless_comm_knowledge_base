---
id: 2026-08-28_arxiv-5g-intrusion-detection-cost-tradeoff
date_published: 2026-08-27
date_found: 2026-08-28
type: academic-paper
technology: cellular
title_en: "Are We Shooting Flies with Cannons? Trade-off Analysis for AI-based 5G Intrusion Detection"
title_zh: "杀鸡用牛刀？面向 5G 入侵检测的 AI 模型性能—代价权衡分析"
url: "https://arxiv.org/abs/2608.26844"
source_quality: full
topics: [5G, intrusion-detection, 5G-NIDD, XGBoost, TabNet, LLM, energy-efficiency]
topic_primary: cellular-security
topics_secondary: [cellular-ai]
novelty_score: 2
---

## Summary (EN)

Federica Uccello and Simin Nadjm-Tehrani (Linköping) ask a deliberately unfashionable question and answer it with measurements: given that the industry is racing to put large models into 5G network security, is the extra complexity actually buying anything? The paper — accepted and presented at the 2026 IEEE International Symposium on Measurement in Networking and Communications — compares three families of intrusion detector on 5G network telemetry and scores each not only on detection quality but on inference time and CPU time, the latter used as a proxy for energy consumed.

The data is 5G-NIDD, a public 5G network intrusion-detection dataset: 1.2 million samples, 92 features, 39.3% benign and 60.7% malicious, reduced to 20 features by SelectKBest / ANOVA F-test and split 72 / 8 / 20 into train / validation / test with stratification. Three detectors are compared. XGBoost stands in for the classical tree-ensemble approach, with class imbalance handled through `scale_pos_weight`. TabNet stands in for tabular deep learning, with early stopping on validation. Open-Mistral-7B, run locally on CPU via llama.cpp, stands in for the general-purpose LLM-as-detector idea, evaluated both zero-shot (one sample per prompt) and few-shot (two labelled examples plus the test sample). Because LLM inference is so slow, the LLM arm is scored on a representative 300-sample subset rather than the full test split.

The detection results are lopsided. XGBoost and TabNet both reach 0.99 on balanced accuracy, accuracy, precision, recall and F1 — effectively saturated. Mistral zero-shot manages 0.67 balanced accuracy (0.65 accuracy, 0.79 precision, 0.59 recall, 0.67 F1). Few-shot prompting does what few-shot prompting often does: it pushes recall to a perfect 1.00 while collapsing balanced accuracy to 0.50 and precision to 0.61 — the model has learned to say "attack" almost always, which is not detection, and the F1 of 0.75 flatters it. Adding examples did not close the gap; it moved the failure mode.

The cost results are where the paper earns its title. Per-sample inference time is 5.30x10^-7 s for XGBoost, 1.59x10^-5 s for TabNet, 9.99 s for Mistral zero-shot and 10.56 s for Mistral few-shot — roughly seven orders of magnitude between the cheapest and the most expensive. Total CPU time tells the same story with training folded in: 943.14 s for XGBoost (941.46 train + 1.68 test), 5319.27 s for TabNet (5292.58 + 26.69), and 41,720.50 s and 44,168.18 s respectively for the two Mistral configurations, all of it at test time since no training is involved. An LLM detector that is worse at the task also costs roughly 44x XGBoost's total CPU time and 25,000x its per-sample latency.

The authors' conclusion is a model-selection argument rather than an anti-LLM one: for *tabular* intrusion detection over 5G telemetry, the task's structure is already well matched to gradient-boosted trees, and reaching for a general-purpose sequence model imports enormous cost for negative benefit. Complexity should be chosen for task suitability, not by default.

## Summary (ZH)

Linköping 大学的 Federica Uccello 与 Simin Nadjm-Tehrani 提出了一个刻意"不合时宜"的问题，并用实测来回答：既然业界正竞相把大模型塞进 5G 网络安全，这些额外的复杂度究竟换来了什么？该论文已被 2026 IEEE 网络与通信测量国际研讨会（M&N）录用并宣读，在 5G 网络遥测数据上对比了三类入侵检测器，评分维度不仅是检测质量，还包括推理时延与 CPU 时间——后者被用作能耗的代理指标。

数据集为公开的 5G 入侵检测数据集 5G-NIDD：120 万条样本、92 个特征，良性占 39.3%、恶意占 60.7%，经 SelectKBest / ANOVA F 检验降到 20 个特征，按 72 / 8 / 20 分层划分为训练 / 验证 / 测试。对比的三个检测器分别是：XGBoost 代表经典树集成方法，用 `scale_pos_weight` 处理类别不平衡；TabNet 代表面向表格数据的深度网络，按验证集早停；Open-Mistral-7B 通过 llama.cpp 在 CPU 上本地推理，代表"通用大模型直接当检测器"的思路，分别在零样本（每次提示一条样本）与少样本（两条带标签示例 + 待测样本）两种配置下评测。由于大模型推理过慢，其评测只在具有代表性的 300 条子集上进行，而非完整测试集。

检测结果一边倒。XGBoost 与 TabNet 在平衡准确率、准确率、精确率、召回率与 F1 上全部达到 0.99，基本饱和。Mistral 零样本的平衡准确率仅 0.67（准确率 0.65、精确率 0.79、召回率 0.59、F1 0.67）。少样本提示做了它常做的事：把召回率推到满分 1.00，同时把平衡准确率压到 0.50、精确率压到 0.61——模型学会了几乎逢样本必判"攻击"，这不是检测，0.75 的 F1 只是好看而已。加示例并没有缩小差距，只是换了一种失败方式。

真正兑现论文标题的是代价结果。单样本推理时延：XGBoost 5.30×10⁻⁷ 秒、TabNet 1.59×10⁻⁵ 秒、Mistral 零样本 9.99 秒、Mistral 少样本 10.56 秒——最便宜与最昂贵之间约差七个数量级。把训练算进去的总 CPU 时间讲的是同一个故事：XGBoost 943.14 秒（训练 941.46 + 测试 1.68）、TabNet 5319.27 秒（5292.58 + 26.69）、两种 Mistral 配置分别为 41,720.50 秒与 44,168.18 秒，且全部发生在测试阶段（无需训练）。一个在任务上表现更差的大模型检测器，总 CPU 时间约为 XGBoost 的 44 倍，单样本时延约为其 2.5 万倍。

作者的结论是一个模型选型论证，而非反大模型论证：对于 5G 遥测上的**表格型**入侵检测，任务结构本就与梯度提升树高度匹配，硬套一个通用序列模型只会引入巨大代价而收益为负。复杂度应当依据任务契合度来选择，而不是默认拉满。

## Key technical points (EN)

- **Venue and status**: accepted and presented at the 2026 IEEE International Symposium on Measurement in Networking and Communications (M&N); a 2026 venue, not a backfilled postprint.
- **Dataset**: 5G-NIDD, 1.2M samples / 92 features, 39.3% benign vs 60.7% malicious; SelectKBest (ANOVA F-test) to 20 features; stratified 72 / 8 / 20 train / val / test. LLM arm scored on a 300-sample representative subset.
- **Detectors**: XGBoost (`scale_pos_weight` for imbalance); TabNet (tabular DNN, early stopping); Open-Mistral-7B via llama.cpp on CPU, zero-shot and 2-example few-shot.
- **Detection scores**: XGBoost and TabNet both 0.99 across balanced accuracy / accuracy / precision / recall / F1. Mistral zero-shot 0.67 / 0.65 / 0.79 / 0.59 / 0.67. Mistral few-shot 0.50 / 0.60 / 0.61 / 1.00 / 0.75 — perfect recall bought with a collapse to near-chance balanced accuracy.
- **Per-sample inference time**: XGBoost 5.30x10^-7 s, TabNet 1.59x10^-5 s, Mistral ZS 9.99 s, Mistral FS 10.56 s. Total wall clock 75.88 s / 831.71 s / 2998.65 s / 3169.20 s.
- **Total CPU time (energy proxy)**: XGBoost 943.14 s (941.46 train, 1.68 test); TabNet 5319.27 s (5292.58 train, 26.69 test); Mistral ZS 41,720.50 s; Mistral FS 44,168.18 s.
- **Few-shot does not close the gap** — it raises recall at the expense of accuracy and adds further CPU cost, so the trade-off worsens in both dimensions simultaneously.
- **Framing**: CPU time is used explicitly as an energy-efficiency proxy, putting this in the same measurement tradition as the KB's other cost-of-security work rather than in the pure-accuracy ML literature.

## Key technical points (ZH)

- **发表状态**：已被 2026 IEEE 网络与通信测量国际研讨会（M&N）录用并宣读；属 2026 年会议，不是回填的旧版预印本。
- **数据集**：5G-NIDD，120 万样本 / 92 特征，良性 39.3% vs 恶意 60.7%；经 SelectKBest（ANOVA F 检验）降至 20 特征；分层划分 72 / 8 / 20。大模型分支在 300 条代表性子集上评测。
- **检测器**：XGBoost（用 `scale_pos_weight` 处理不平衡）；TabNet（表格深度网络，早停）；Open-Mistral-7B 经 llama.cpp 在 CPU 上推理，含零样本与 2 示例少样本两种配置。
- **检测得分**：XGBoost 与 TabNet 在平衡准确率 / 准确率 / 精确率 / 召回率 / F1 上均为 0.99。Mistral 零样本 0.67 / 0.65 / 0.79 / 0.59 / 0.67。Mistral 少样本 0.50 / 0.60 / 0.61 / 1.00 / 0.75——满分召回是以平衡准确率跌到接近随机为代价换来的。
- **单样本推理时延**：XGBoost 5.30×10⁻⁷ 秒、TabNet 1.59×10⁻⁵ 秒、Mistral 零样本 9.99 秒、Mistral 少样本 10.56 秒。总墙钟时间分别为 75.88 / 831.71 / 2998.65 / 3169.20 秒。
- **总 CPU 时间（能耗代理）**：XGBoost 943.14 秒（训练 941.46、测试 1.68）；TabNet 5319.27 秒（训练 5292.58、测试 26.69）；Mistral 零样本 41,720.50 秒；Mistral 少样本 44,168.18 秒。
- **少样本并不能弥合差距**——它以准确率为代价抬高召回，同时进一步增加 CPU 开销，两个维度上权衡同时恶化。
- **论证取向**：明确把 CPU 时间当作能效代理，使这项工作归属于"安全的代价"这一测量传统，而不是纯精度导向的机器学习文献。

## Why it matters / what's new (EN)

The cellular half of this KB has accumulated a strong pro-AI prior over the past months — `2026-08-24_arxiv-llm-judge-5g-fault-free-text-eval` (LLM-as-judge for 5G fault analysis), `2026-08-24_arxiv-ai-native-6g-traffic-ai-grid`, `2026-08-26_arxiv-two-sided-ai-models-6g-nr-testbed`, `2026-08-24_arxiv-z2act-verifiable-agentic-intent-oran` and a long tail of xApp/rApp learning entries. Almost all of them measure what a model *can* do. This is the first cellular entry that measures what a model *costs to be worse*, and it does so on a security task where the classical baseline is already saturated.

That makes it a useful counterweight rather than a contradiction. The KB's LLM-for-telecom entries mostly target tasks with genuinely unstructured inputs — free-text fault tickets, natural-language intents, specification recall — where a sequence model has something to contribute. This paper marks the boundary of that regime: once the input is a fixed-width feature vector of network telemetry, the structure that makes an LLM valuable is absent, and the seven-order-of-magnitude latency penalty buys a 32-point drop in balanced accuracy. Read alongside `2026-08-24_arxiv-llm-judge-5g-fault-free-text-eval`, which found that lightweight models hit 90%+ on fault diagnosis while failing at 3GPP/O-RAN specification recall, a consistent picture emerges: model capacity should be spent where the task is linguistic, not where it is tabular.

It also lands a data point the KB was missing in the energy dimension. `2026-08-17_arxiv-energy-cost-mitigating-ai-attacks-cellular` (the energetic cost of mitigating AI attacks in cellular networks) and the O-RAN energy-aware placement entries treat energy as a deployment constraint; this paper shows the *detection stack itself* can be the dominant energy term if the model is chosen badly. For an operator running inline detection on 5G telemetry at line rate, the 10-second-per-sample figure is not a tuning problem — it rules the design out entirely.

## Why it matters / what's new (ZH)

本知识库的蜂窝部分在过去几个月里积累了明显的"挺 AI"先验——`2026-08-24_arxiv-llm-judge-5g-fault-free-text-eval`（用大模型做 5G 故障分析评判）、`2026-08-24_arxiv-ai-native-6g-traffic-ai-grid`、`2026-08-26_arxiv-two-sided-ai-models-6g-nr-testbed`、`2026-08-24_arxiv-z2act-verifiable-agentic-intent-oran`，以及一长串 xApp/rApp 学习类条目。它们几乎都在测量模型**能做什么**。这是第一条测量"模型为了做得更差而付出多少代价"的蜂窝条目，而且落在一个经典基线已经饱和的安全任务上。

因此它是有益的平衡砝码，而非反驳。知识库中面向电信的大模型条目大多针对真正非结构化的输入——自由文本故障工单、自然语言意图、规范条文检索——这些场景里序列模型确有贡献。这篇论文标出了该体制的边界：一旦输入变成定长的网络遥测特征向量，让大模型变得有价值的那种结构就不存在了，七个数量级的时延代价换来的是平衡准确率下降 32 个百分点。与 `2026-08-24_arxiv-llm-judge-5g-fault-free-text-eval`（发现轻量模型在故障诊断上可达 90%+，但在 3GPP / O-RAN 规范召回上失败）对照阅读，一幅一致的图景浮现：模型容量应当花在任务是语言性的地方，而不是任务是表格型的地方。

它同时补上了知识库在能耗维度上缺失的一个数据点。`2026-08-17_arxiv-energy-cost-mitigating-ai-attacks-cellular`（在蜂窝网络中缓解 AI 攻击的能量代价），以及若干 O-RAN 能耗感知摆放条目，都把能耗视为部署约束；而这篇论文表明，如果模型选错，**检测栈本身**就可能成为能耗的主导项。对于要在 5G 遥测上以线速做在线检测的运营商而言，每样本 10 秒不是一个调优问题——它直接把该设计排除在外。

## Images

![Trade-off between balanced accuracy, per-sample inference latency (log scale) and total CPU time (bubble size) | 平衡准确率、单样本推理时延（对数轴）与总 CPU 时间（气泡大小）之间的权衡](https://arxiv.org/html/2608.26844v1/balanced_accuracy_latency_cpu_bubble.png)
