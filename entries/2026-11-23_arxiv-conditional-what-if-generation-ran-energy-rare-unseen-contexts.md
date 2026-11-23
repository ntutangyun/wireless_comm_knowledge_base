---
id: 2026-11-23_arxiv-conditional-what-if-generation-ran-energy-rare-unseen-contexts
date_published: 2026-11-18
date_found: 2026-11-23
type: academic-paper
technology: cellular
title_en: "Conditional What-If Generation for Radio Access Network Energy under Rare and Unseen Contexts"
title_zh: "面向稀有与未见场景的无线接入网能耗条件式假设分析生成"
url: "https://arxiv.org/abs/2611.24208"
source_quality: full
topics: [RAN-energy, power-consumption, what-if-analysis, conditional-generation, diffusion, TimeWeaver, network-digital-twin, energy-saving]
topic_primary: cellular-ai
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)

Wardakhan, Alberi-Morel, Leguay, Feki, Sardi, Archeveque and Mihailescu (Nokia Bell Labs, Nokia Mobile Infrastructure, Inria) study conditional generation of RAN power-consumption trajectories as a tool for what-if analysis of energy-saving policies before they are deployed on a live network. They first build a context-normalized conditional generator (TimeWeaver-style temporally aligned conditioning plus configuration-dependent target normalization), then a prediction-based generative framework that splits power into a global prediction, a residual level and scale correction, and a temporal residual generator. Evaluation uses measurements from a commercial 5G RAN and a public dataset.

## Summary (ZH)

Wardakhan、Alberi-Morel、Leguay、Feki、Sardi、Archeveque 与 Mihailescu（诺基亚贝尔实验室、诺基亚移动基础设施、Inria）研究 RAN 功耗轨迹的条件式生成，用于在节能策略部署到实网之前对其做假设分析。他们先构建上下文归一化的条件生成器（TimeWeaver 风格的时间对齐条件加依赖配置的目标归一化），再提出基于预测的生成框架，把功耗分解为全局预测、残差水平与尺度校正以及时间残差生成。评估使用一个商用 5G RAN 的测量数据和一个公开数据集。

## Key technical points (EN)

- Use case: energy-saving mechanisms such as carrier shutdown, MIMO muting and antenna deactivation are typically governed by load thresholds (deactivate below rho_min, reactivate above rho_max); evaluating candidate thresholds directly on a live RAN is costly and risky, particularly for traffic conditions with little operational experience.
- Problem: historical measurements cover limited radio configurations and operating regimes. Contexts are classed as well-seen (multiple training trajectories), rarely seen (one) or unseen (none), and inference as zero-shot (no target observation) or few-shot (K > 0 observations).
- Method 1: a context-normalized conditional generator combining TimeWeaver-style aligned conditioning with context encoding and configuration-dependent normalization inspired by CENTS; it improves well-represented configurations but degrades as training exposure falls because the consumption level is harder to estimate.
- Method 2: a prediction-based framework with a global power predictor, residual level and scale correction (from hardware metadata and, in the few-shot case, target observations) and a temporal residual generator that reuses the conditional generator on standardized residuals; no retraining is needed for adaptation.
- Data: a private commercial 5G RAN dataset (42,031 samples at 15-minute resolution across 65 groups and 9 base stations, groups defined by site, radio module, product, band and number of cells) and a public ITU dataset (92,629 hourly measurements from 923 base stations).
- Results as reported: both approaches improve on state-of-the-art methods for well-represented configurations; the prediction-based approach also generalizes to rare and unseen contexts and, with a single target observation, reduces the median MAE for unseen groups by about 50% relative to zero-shot TimeWeaver (17.1 W to about 8.3–8.7 W). Hardware metadata is found to carry transferable information about residual scale, and an ablation shows residual-level correction provides most of the gain.
- Caveats: the private dataset covers only 9 base stations, and the paper evaluates generation accuracy (MAE, DTW, CRPS) rather than the outcome of energy-saving policies chosen with the tool.

## Key technical points (ZH)

- 应用场景：载波关断、MIMO 静默和天线停用等节能机制通常由负载阈值控制（低于 rho_min 时关闭，高于 rho_max 时重新开启）；直接在实网上评估候选阈值成本高、风险大，尤其是对缺乏运行经验的业务条件。
- 问题：历史测量只覆盖有限的无线配置和运行工况。场景分为见过充分（多条训练轨迹）、稀有（一条）和未见（零条）；推理分为零样本（无目标观测）和少样本（K > 0 个观测）。
- 方法一：上下文归一化的条件生成器，将 TimeWeaver 式的时间对齐条件与上下文编码及受 CENTS 启发的、依赖配置的归一化结合；对充分见过的配置有改进，但训练覆盖下降时因功耗水平更难估计而变差。
- 方法二：基于预测的框架，包含全局功耗预测器、残差水平与尺度校正（基于硬件元数据，少样本时再加入目标观测）以及在标准化残差上复用条件生成器的时间残差生成器；适应过程无需重新训练。
- 数据：一个私有的商用 5G RAN 数据集（42,031 个 15 分钟间隔样本，涵盖 65 个分组、9 个基站，分组由站点、射频模块、产品、频段和小区数定义）和一个公开的 ITU 数据集（来自 923 个基站的 92,629 条小时级测量）。
- 报告的结果：两种方法在充分见过的配置上都优于现有先进方法；基于预测的方法还能推广到稀有和未见场景，仅用一个目标观测，对未见分组，中位 MAE 相对零样本 TimeWeaver 降低约 50%（由 17.1 W 降至约 8.3–8.7 W）。硬件元数据被发现包含关于残差尺度的可迁移信息，消融实验表明残差水平校正贡献了大部分增益。
- 注意事项：私有数据集仅涵盖 9 个基站；论文评估的是生成精度（MAE、DTW、CRPS），而非用该工具选出的节能策略的实际效果。

## Why it matters / what's new (EN)

The distinguishing element is treating RAN energy what-if analysis as probabilistic trajectory generation and explicitly measuring how accuracy degrades from well-seen to rare and unseen configurations, with a few-shot correction that avoids retraining. The reported gains are relative to the cited generative baselines on two specific datasets and do not by themselves show that energy-saving policies chosen with the tool perform better in a live network.

## Why it matters / what's new (ZH)

其区别点在于：把 RAN 能耗假设分析视为概率性轨迹生成，并明确度量精度从见过充分的配置到稀有、未见配置的退化程度，同时给出无需重新训练的少样本校正。所报告的提升是相对于所引用生成式基线、在两个特定数据集上取得的，并不能单独证明用该工具选出的节能策略在实网中表现更好。

## Images

None.
