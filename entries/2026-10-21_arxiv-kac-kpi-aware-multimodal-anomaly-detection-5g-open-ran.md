---
id: 2026-10-21_arxiv-kac-kpi-aware-multimodal-anomaly-detection-5g-open-ran
date_published: 2026-10-18
date_found: 2026-10-21
type: academic-paper
technology: cellular
title_en: "KPI-Aware Multimodal Anomaly Detection for 5G and Open RAN Telemetry"
title_zh: "面向 5G 与 Open RAN 遥测数据的 KPI 感知多模态异常检测"
url: "https://arxiv.org/abs/2610.25510"
source_quality: full
topics: [anomaly-detection, KPI, telemetry, Open-RAN, observability, time-series-foundation-model, Chronos-2, contrastive-learning, TelecomTS, SpotLight]
topic_primary: cellular-ai
topics_secondary: [open-ran]
novelty_score: 3
---

## Summary (EN)
Chiman Salavati (University of Connecticut) with Liang Wu, Kelly Wan, Mayank Darbari and Liangjie Hong (Nokia, Sunnyvale) present KAC, a multimodal anomaly detector for 5G and Open RAN KPI telemetry, accepted at the IEEE ICDM 2026 Applied Research Track. The paper addresses producing reliable anomaly scores from noisy, high-dimensional telemetry windows under strict false-alarm constraints, where hundreds of heterogeneous KPIs, severe class imbalance and strict alert budgets make purely numerical scores brittle.

KAC combines two views of each KPI window. The numerical branch keeps full-KPI residual and uncertainty features from a frozen forecasting time-series foundation model (Chronos-2 in all reported experiments). The textual branch encodes a compact, operator-style summary that names the salient KPIs and their operating context. The paper identifies two failure modes of residual-only detectors: context extrapolation (an anomaly already inside the forecasting context is extrapolated, giving small residuals) and operating-context erasure (a stable RSRP series is forecast well both near the tower and at the cell edge, although its absolute level matters for interpreting BLER and throughput). A KPI-level contrastive objective aligns the text and residual views, with optional uncertainty weighting, and gated fusion produces the window-level prediction. At inference time KAC works on cached residual and text features without online LLM inference.

It is evaluated on three datasets: TelecomTS (public 5G observability benchmark, 16 KPIs at 100 ms), SpotLight (public enterprise Open RAN telemetry, 452 KPI channels, more than 100M points), and ProdTrace-SA, a Nokia-internal benchmark built from real 5G RAN production packet captures with eight injected anomaly families. Against residual, end-to-end supervised, deep time-series anomaly and one-class baselines (five seeds), KAC reaches strong threshold-based detection; on TelecomTS at a fixed 2.5 percent false-positive rate it has the highest recall among the evaluated residual-based methods at comparable precision.

## Summary (ZH)
Chiman Salavati（康涅狄格大学）与 Liang Wu、Kelly Wan、Mayank Darbari、Liangjie Hong（Nokia，森尼韦尔）提出 KAC，一种面向 5G 与 Open RAN KPI 遥测数据的多模态异常检测器，已被 IEEE ICDM 2026 Applied Research Track 接收。论文关注的问题是：在严格的误报约束下，从含噪的高维遥测窗口中得到可靠的异常分数；数百个异构 KPI、严重的类别不平衡和严格的告警预算使纯数值分数显得脆弱。

KAC 对每个 KPI 窗口结合两种视图。数值分支保留来自冻结的预测型时间序列基础模型（所有报告实验均使用 Chronos-2）的全 KPI 残差与不确定性特征；文本分支编码一份紧凑的、运维风格的摘要，点明重要 KPI 及其运行背景。论文指出仅用残差的检测器有两种失效情形：上下文外推（异常已在预测上下文中，被外推而得到较小残差）和运行背景抹除（稳定的 RSRP 序列在基站附近与小区边缘都能被预测得很好，但其绝对水平对解读 BLER 和吞吐量很重要）。KPI 级对比学习目标将文本与残差两种视图对齐，并可选用不确定性加权，再经门控融合得到窗口级预测。推理时 KAC 仅使用缓存的残差与文本特征，无需在线调用 LLM。

评估使用三个数据集：TelecomTS（公开 5G 可观测性基准，16 个 KPI，100 ms 采样）、SpotLight（公开企业级 Open RAN 遥测，452 个 KPI 通道，超过 1 亿个数据点），以及 ProdTrace-SA（Nokia 内部基准，源自真实 5G RAN 生产抓包，注入八类异常）。与残差类、端到端监督类、深度时序异常类及单类基线相比（五个随机种子），KAC 取得较强的阈值式检测性能；在 TelecomTS 上，固定 2.5% 误报率时，其召回率在所评估的残差类方法中最高，精确率相当。

## Key technical points (EN)
- Architecture: frozen forecasting backbone yields per-KPI residual and uncertainty features; learnable KPI queries extract per-KPI text representations; a shared projector produces matched per-KPI residual representations; an uncertainty-weighted contrastive loss aligns the two; gated multimodal fusion gives the window-level anomaly prediction.
- Text summaries: for SpotLight, KPIs are ranked by a train-only random-forest importance model on aggregated residual features, with category-diversity constraints, and described with deterministic templates; TelecomTS descriptions originate from anomaly-conditioned prompts; for ProdTrace-SA a label-free selector ranks packet-derived KPI channels and an instruction-tuned LLM writes the summaries offline.
- ProdTrace-SA injects eight realism-hardened anomaly families into production traffic (DataExfiltration, SignalingFlood, PortScan, SMPPSpam, TCPAnomalies, ExactPacketReplay, SeqNumberManipulation, DuplicateBurst); train, validation and test windows are split by disjoint PCAPs.
- Evaluation protocol: thresholds chosen on validation F1 and applied unchanged to test; additional fixed-FPR alert-budget analysis; mean and standard deviation over five seeds; bootstrap confidence intervals for ProdTrace-SA because of its small positive test count.
- Baselines: Chronos-2 with logistic regression, QR-TAN, frozen MOMENT/TOTO/Mantis embeddings with a linear head, PatchTST, iTransformer, GPT4TS, ModernTCN, UniTS, DCdetector, TimesNet, MEMTO, D3R, Isolation Forest, LOF, a relative-error rule, the SpotLight JVGAN-MRPI pipeline, and zero-shot LLMs.
- Stated limitations: KAC does not dominate every metric (Mantis+linear is stronger on AUROC/AP in the imbalanced TelecomTS split, PatchTST on SpotLight); ProdTrace-SA labels come from injection rather than operator-labelled incidents; the Nokia pipeline integration is pre-production shadow mode; the text modality has not been validated on noisy, naturally authored operator notes.

## Key technical points (ZH)
- 架构：冻结的预测骨干产生逐 KPI 的残差与不确定性特征；可学习的 KPI 查询提取逐 KPI 文本表示；共享投影器生成匹配的逐 KPI 残差表示；不确定性加权的对比损失将二者对齐；门控多模态融合给出窗口级异常预测。
- 文本摘要：对 SpotLight，使用仅在训练集上训练的随机森林重要性模型对聚合残差特征为 KPI 排序（带类别多样性约束），并用确定性模板描述；TelecomTS 的描述来自以异常为条件的提示；对 ProdTrace-SA，则由无标签选择器对抓包派生的 KPI 通道排序，并由指令微调的 LLM 离线生成摘要。
- ProdTrace-SA 向生产流量注入八类经真实性强化的异常（DataExfiltration、SignalingFlood、PortScan、SMPPSpam、TCPAnomalies、ExactPacketReplay、SeqNumberManipulation、DuplicateBurst）；训练、验证与测试窗口按互不相交的 PCAP 划分。
- 评估协议：阈值在验证集上按 F1 选定并原样用于测试；另做固定误报率的告警预算分析；报告五个种子的均值与标准差；因 ProdTrace-SA 的测试正例很少，另给出自助法置信区间。
- 基线：Chronos-2 加逻辑回归、QR-TAN、冻结的 MOMENT/TOTO/Mantis 嵌入加线性头、PatchTST、iTransformer、GPT4TS、ModernTCN、UniTS、DCdetector、TimesNet、MEMTO、D3R、Isolation Forest、LOF、相对误差规则、SpotLight 的 JVGAN-MRPI 流水线，以及零样本 LLM。
- 作者声明的局限：KAC 并非在所有指标上占优（在不平衡的 TelecomTS 划分上 Mantis+linear 的 AUROC/AP 更强，在 SpotLight 上 PatchTST 更强）；ProdTrace-SA 的标签来自注入而非运维标注的真实事件；与 Nokia 流水线的集成处于预生产影子模式；文本模态尚未在含噪的、自然书写的运维记录上验证。

## Why it matters / what's new (EN)
The paper applies anomaly detection to KPI streams using two public, reproducible benchmarks (TelecomTS, SpotLight) plus a non-public Nokia benchmark. The paper's own framing of the open points is useful: the Nokia pipeline integration is shadow-mode only, and the text branch has been tested on template-, prompt- or LLM-generated summaries rather than real operator notes.

## Why it matters / what's new (ZH)
论文针对 KPI 数据流做异常检测，使用两个可复现的公开基准（TelecomTS、SpotLight）及一个不公开的 Nokia 基准。论文自身对未决事项的说明颇有价值：与 Nokia 流水线的集成仅为影子模式，文本分支所用摘要来自模板、提示或 LLM 生成，而非真实的运维记录。
