---
id: 2026-08-28_arxiv-jepa-ssl-gnss-pvt-urban-multipath
date_published: 2026-08-26
date_found: 2026-08-28
type: academic-paper
title_en: "Opportunities of Self-Supervised Learning for GNSS: Evaluation of a Deep Learning-Enhanced PVT Algorithm"
title_zh: "自监督学习用于 GNSS：深度学习增强 PVT 算法的评估"
url: "https://arxiv.org/abs/2608.25674"
technology: satellite
source_quality: full
topics: [GNSS, PVT, multipath, self-supervised-learning, JEPA, transformer, factor-graph, urban-navigation]
topic_primary: sat-ai
topics_secondary: [ngso-regulation]
novelty_score: 3
---

## Summary (EN)

Multipath is the dominant error source for GNSS positioning in dense urban canyons, and it is exactly the regime where labelled training data is hardest to obtain: reference-grade ground truth requires a survey-grade receiver and a reference trajectory, which is expensive and covers only the cities you actually drove. Thomas Barbero and Bertrand Ekambi (European Navigation Conference 2026) ask whether self-supervised pretraining on *unlabelled* GNSS observables can buy generalization to cities the model has never seen.

The architecture treats each satellite observation as a 12-dimensional token. Contextual features carry azimuth, elevation, satellite ID, constellation, GPS time and ENU velocity; multipath-indicator features carry C/N0, a range-rate consistency metric, Doppler residuals and single-differenced code residuals. A sliding window holds the 100 most recent tokens. A compact transformer — 4 encoder blocks, 2 decoder blocks, 4 heads, embedding dimension 32, feed-forward 128, roughly **100k parameters** — emits two heads per token: a **range correction** and a **log-uncertainty**. Corrections are applied to the single-differenced code observables and the exponentiated uncertainty becomes the per-observation noise model in a factor graph solved with GTSAM and a Levenberg–Marquardt optimizer; tokens the network does not process retain a fixed 500 m standard deviation. Supervision uses a heteroscedastic Laplace loss, |MP − MP̂|/σ̂ + log σ̂, with reference multipath derived by subtracting the geometric and clock components from the SD code observables.

The self-supervised stage is a **JEPA** (joint-embedding predictive architecture) variant with a domain-specific masking rule: a random continuous **azimuthal sector covering 25 % of the sky** is selected and the **low-elevation tokens (< 40°) inside it** are masked — i.e. the model is trained to predict exactly the observations most corrupted by multipath from the rest of the sky. A target branch embeds the unmasked sequence, a prediction branch embeds the masked one (a learnt MASK token replaces the multipath indicators while positional information is retained), and the loss compares embeddings on masked tokens only. Instead of the usual EMA teacher, the authors use **VICReg** regularization (invariance weight 1, variance weight 1, covariance weight 0.01) to keep embeddings from collapsing. Encoder weights are then frozen and only the decoder and prediction head are re-initialized and finetuned.

Data comes from 24 hours of driving around Toulouse with a u-blox F9R under test against a Septentrio AsterX Sbi3Pro+ reference — 1.35 M tokens of light-urban/highway (Circuit #1) and 600 k tokens of deep urban with tree shadowing (Circuit #2) — plus 130 k tokens from the open-source PPC and UrbanNav datasets (Tokyo, Hong Kong) used as a *heavy out-of-distribution* test. Averaging the 50th and 95th percentile 3D error, the baseline PVT scores 4.98 m in-distribution, 9.16 m slight-OOD and 28.76 m heavy-OOD. Purely supervised training brings this to 2.85 / 7.28 / 21.26 m; JEPA pretraining plus finetuning gives **2.64 / 7.72 / 18.96 m** — i.e. SSL wins by **3.3 m (15.5 %)** on heavy OOD and slightly in-distribution, but *loses* by 0.44 m on the slight-OOD circuit. Against the unaided baseline the heavy-OOD improvement is 34 %.

The paper's most interesting result is the diagnosis of *why*. Correlating the predicted corrections against input features shows the supervised-only model correlates **0.96** with the SD code residuals, versus **0.91** for the SSL model: the supervised model has converged to a near-identity shortcut, mapping residuals straight to corrections. That shortcut works when the initial PVT is accurate, and it also encourages the model to shrink its uncertainty predictions to reduce the loss — leaving the uncertainty head poorly grounded. The SSL model's uncertainty correlates meaningfully with multiple features instead, and its weighted-residual distribution has visibly lighter tails under harsh conditions. Attention maps corroborate: encoder layers 1–2 attend to high-elevation tokens, layers 3–4 to low-elevation (high-multipath) tokens, and the final decoder layer attends within the current token's own azimuthal sector, enforcing spatially coherent corrections.

## Summary (ZH)

多径是密集城市峡谷中 GNSS 定位的主导误差源，而这恰恰是标注训练数据最难获取的场景：参考级真值需要测量级接收机与参考轨迹，成本高昂且只覆盖实际跑过的城市。Thomas Barbero 与 Bertrand Ekambi（欧洲导航会议 ENC 2026）提出的问题是：在*无标注*GNSS 观测量上做自监督预训练，能否换来对未见城市的泛化能力。

架构把每个卫星观测视为一个 12 维 token。上下文特征包含方位角、仰角、卫星 ID、星座、GPS 时间与 ENU 速度；多径指示特征包含 C/N0、伪距率一致性度量、多普勒残差与单差码残差。滑动窗保留最近 100 个 token。一个紧凑的 Transformer——4 个编码块、2 个解码块、4 个注意力头、嵌入维度 32、前馈维度 128、约 **10 万参数**——对每个 token 输出两个头：**距离改正**与**对数不确定度**。改正施加于单差码观测量，不确定度取指数后作为因子图中该观测的噪声模型，由 GTSAM 配合 Levenberg–Marquardt 优化器求解；未经网络处理的 token 保留 500 m 的固定标准差。监督训练采用异方差 Laplace 损失 |MP − MP̂|/σ̂ + log σ̂，参考多径由单差码观测量减去几何分量与钟差分量得到。

自监督阶段是 **JEPA**（联合嵌入预测架构）的一个变体，采用领域定制的掩码规则：随机选取一个覆盖**天空 25% 的连续方位扇区**，并掩蔽其中的**低仰角 token（< 40°）**——即训练模型用天空其余部分预测受多径污染最严重的那些观测。目标分支嵌入未掩码序列，预测分支嵌入掩码序列（可学习的 MASK token 替换多径指示特征，位置信息保留），损失仅比较被掩码 token 上的嵌入。作者未使用常见的 EMA 教师，而采用 **VICReg** 正则（不变性权重 1、方差权重 1、协方差权重 0.01）防止嵌入坍缩。随后冻结编码器权重，仅重新初始化并微调解码器与预测头。

数据来自图卢兹周边 24 小时驾驶，被测设备为 u-blox F9R，参考为 Septentrio AsterX Sbi3Pro+——轻度城市/高速场景（Circuit #1）135 万 token、带树冠遮挡的深度城市场景（Circuit #2）60 万 token——外加开源 PPC 与 UrbanNav 数据集（东京、香港）13 万 token 作为*重度分布外*测试。以 3D 误差的 50 与 95 百分位均值衡量，基线 PVT 在分布内为 4.98 m、轻度分布外 9.16 m、重度分布外 28.76 m。纯监督训练把它降到 2.85 / 7.28 / 21.26 m；JEPA 预训练加微调给出 **2.64 / 7.72 / 18.96 m**——即自监督在重度分布外领先 **3.3 m（15.5%）**、分布内略有优势，但在轻度分布外*落后* 0.44 m。相对未增强基线，重度分布外的改善为 34%。

论文最有意思的结果是对*原因*的诊断。将预测改正与输入特征做相关分析发现：纯监督模型与单差码残差的相关系数为 **0.96**，自监督模型为 **0.91**——监督模型收敛到了近似恒等的捷径，直接把残差映射为改正。这个捷径在初始 PVT 精确时有效，同时还诱使模型压低不确定度预测以降低损失，导致不确定度头缺乏依据。自监督模型的不确定度则与多个特征都有实质相关，其加权残差分布在恶劣条件下的尾部明显更轻。注意力图给出佐证：编码器第 1–2 层关注高仰角 token，第 3–4 层关注低仰角（强多径）token，解码器末层关注当前 token 所在方位扇区，从而促成空间上一致的改正。

## Key technical points (EN)

- **Token design:** 12-D per-observation vector — contextual (azimuth, elevation, satellite ID, constellation, GPS time, ENU velocity) + multipath indicators (C/N0, range-rate consistency, Doppler residuals, single-differenced code residuals). Sliding window of 100 most recent tokens.
- **Network:** transformer with 4 encoder + 2 decoder blocks, 4 heads, d_model 32, FFN 128, 2-layer MLP head (hidden 64) — **~100k parameters**. Positional embeddings from contextual features with sin/cos encoding for azimuth/elevation continuity.
- **Dual heads:** range correction + log-uncertainty. Corrections applied to SD code observables; exp(log σ̂) becomes the per-factor noise model in a **GTSAM factor graph** solved with Levenberg–Marquardt. Unprocessed tokens keep a fixed 500 m σ.
- **Supervised loss:** heteroscedastic Laplace, ℒ = |MP − MP̂| / exp(log σ̂) + log σ̂.
- **JEPA masking rule (domain-specific):** random continuous azimuthal sector covering 25 % of the sky; mask low-elevation tokens (< 40°) inside it — the model must predict the most multipath-affected observations from the rest of the sky.
- **VICReg instead of EMA:** invariance (weight 1), variance (weight 1), covariance (weight 0.01). Encoder frozen after pretraining; decoder + head reinitialized for finetuning.
- **Data:** 24 h driving in Toulouse — Circuit #1 light urban + highway (1.35 M tokens), Circuit #2 deep urban with tree shadowing (600 k tokens); u-blox F9R under test vs Septentrio AsterX Sbi3Pro+ reference. Open-source PPC + UrbanNav (Tokyo, Hong Kong): 130 k tokens. GPS, Galileo, BeiDou, GLONASS, main frequency only.
- **Results** (avg of 50th/95th-percentile 3D error) — baseline / supervised-only (SPVO) / SSL+finetune: **ID 4.98 / 2.85 / 2.64 m**; **slight OOD 9.16 / 7.28 / 7.72 m**; **heavy OOD 28.76 / 21.26 / 18.96 m**. SSL beats supervised-only by 3.3 m (15.5 %) on heavy OOD but loses 0.44 m on slight OOD.
- **Shortcut diagnosis:** supervised-only correlates **0.96** with SD code residuals (near-identity mapping) vs **0.91** for SSL. The shortcut also collapses the uncertainty head; SSL's uncertainty correlates with multiple features and yields lighter residual tails.
- **Data-diversity ablation (500 k-parameter scale):** diversifying *pretraining* data gains 0.41 m on slight OOD (8.59 vs 9.00 m); diversifying *finetuning* data gains 1.35 m on heavy OOD (18.67 vs 20.06 m).
- **Attention structure:** encoder layers 1–2 → high elevation; layers 3–4 → low elevation (intense multipath); final decoder layer → the current token's own azimuthal sector, enforcing spatial coherence.

## Key technical points (ZH)

- **Token 设计：** 每个观测 12 维向量——上下文（方位角、仰角、卫星 ID、星座、GPS 时间、ENU 速度）+ 多径指示（C/N0、伪距率一致性、多普勒残差、单差码残差）。滑动窗保留最近 100 个 token。
- **网络：** Transformer，4 编码块 + 2 解码块、4 头、d_model 32、前馈 128、2 层 MLP 头（隐层 64）——**约 10 万参数**。位置嵌入由上下文特征生成，方位/仰角采用 sin/cos 编码保持连续性。
- **双输出头：** 距离改正 + 对数不确定度。改正施加于单差码观测量；exp(log σ̂) 作为 **GTSAM 因子图**中该因子的噪声模型，由 Levenberg–Marquardt 求解。未处理 token 保留固定 500 m 标准差。
- **监督损失：** 异方差 Laplace，ℒ = |MP − MP̂| / exp(log σ̂) + log σ̂。
- **JEPA 掩码规则（领域定制）：** 随机选取覆盖天空 25% 的连续方位扇区，掩蔽其中低仰角（< 40°）token——模型须用天空其余部分预测受多径影响最重的观测。
- **用 VICReg 替代 EMA：** 不变性（权重 1）、方差（权重 1）、协方差（权重 0.01）。预训练后冻结编码器；解码器与预测头重新初始化后微调。
- **数据：** 图卢兹 24 小时驾驶——Circuit #1 轻度城市 + 高速（135 万 token）、Circuit #2 带树冠遮挡的深度城市（60 万 token）；被测 u-blox F9R，参考 Septentrio AsterX Sbi3Pro+。开源 PPC + UrbanNav（东京、香港）13 万 token。GPS、Galileo、北斗、GLONASS，仅主频点。
- **结果**（3D 误差 50/95 百分位均值）——基线 / 纯监督（SPVO）/ 自监督+微调：**分布内 4.98 / 2.85 / 2.64 m**；**轻度分布外 9.16 / 7.28 / 7.72 m**；**重度分布外 28.76 / 21.26 / 18.96 m**。自监督在重度分布外领先 3.3 m（15.5%），在轻度分布外落后 0.44 m。
- **捷径诊断：** 纯监督模型与单差码残差相关 **0.96**（近似恒等映射），自监督为 **0.91**。该捷径同时压塌了不确定度头；自监督的不确定度与多个特征相关，残差尾部更轻。
- **数据多样性消融（50 万参数规模）：** 提升*预训练*数据多样性在轻度分布外增益 0.41 m（8.59 对 9.00 m）；提升*微调*数据多样性在重度分布外增益 1.35 m（18.67 对 20.06 m）。
- **注意力结构：** 编码器第 1–2 层 → 高仰角；第 3–4 层 → 低仰角（强多径）；解码器末层 → 当前 token 所在方位扇区，促成空间一致性。

## Why it matters / what's new (EN)

The KB's sat-ai bin has mostly held large orchestration and inference models — LLM counterfactual offloading (2026-08-19), GenAI mission-aware RIS/ISAC orchestration (2026-08-27), LLM-intent satellite IAB (2026-07-26), the Jammertest interference-classification dataset (2026-08-18). This is the opposite end of the scale: a ~100k-parameter transformer that has to run inside a consumer GNSS receiver's PVT loop, where the learned output is not a decision but a *measurement correction and its variance*, consumed by a classical factor-graph estimator. That hybrid — learned observation model, classical estimator — is a pattern worth noting, because it keeps the safety-relevant part of the pipeline auditable.

The result that will travel furthest is the **shortcut diagnosis**, and it is directly relevant to how the KB reads other supervised-correction papers. A supervised model trained to predict multipath from code residuals learns to copy the residual (correlation 0.96) rather than to model the environment, and because the heteroscedastic loss rewards small σ̂ whenever the copy is good, it also learns to under-report its own uncertainty. That is a silent integrity failure: the estimator receives confident corrections that are only valid while the initial PVT is already good. Self-supervised pretraining with a *physically motivated* mask — hide the low-elevation tokens in one sky sector, predict them from the rest — breaks the shortcut and grounds the uncertainty head, which is why the gain shows up almost entirely out of distribution (15.5 % on Tokyo/Hong Kong data the model never trained on) rather than in-distribution. The ablation reinforces the split cleanly: pretraining diversity helps near-domain generalization, finetuning diversity helps far-domain.

This pairs directly with the quiet-STEVE entry filed the same day (2026-08-28): both are about GNSS error sources that a receiver's default uniform weighting model handles badly, and both argue that per-observation uncertainty needs to be *earned* rather than assumed. Caveats: it is a short conference paper; the improvements are reported as an average of 50th and 95th percentiles rather than as a full CDF; the heavy-OOD set is only 130 k tokens; and slight-OOD performance actually regresses, so the SSL benefit is specifically a far-transfer effect, not a uniform improvement.

## Why it matters / what's new (ZH)

知识库的 sat-ai 分类此前主要收录大型编排与推理模型——大模型反事实卸载（2026-08-19）、生成式 AI 任务感知 RIS/ISAC 编排（2026-08-27）、大模型意图驱动卫星 IAB（2026-07-26）、Jammertest 干扰分类数据集（2026-08-18）。本文处在规模谱系的另一端：一个约 10 万参数的 Transformer，必须运行在消费级 GNSS 接收机的 PVT 环路内，其学习输出不是决策，而是*观测改正及其方差*，供经典因子图估计器消费。这种"学习得到观测模型 + 经典估计器"的混合范式值得记录，因为它让流程中与安全相关的部分保持可审计。

传播价值最大的结果是**捷径诊断**，它直接关系到知识库如何解读其他监督式改正类论文。一个被训练成"从码残差预测多径"的监督模型，学到的是复制残差（相关 0.96）而非建模环境；又因为异方差损失在复制效果好时奖励更小的 σ̂，它同时学会低报自身不确定度。这是一种静默的完好性失效：估计器收到的是"自信的"改正，而这些改正仅在初始 PVT 本就良好时有效。带*物理动机*掩码的自监督预训练——遮住某个天空扇区中的低仰角 token，用其余部分预测它们——打破了这条捷径并让不确定度头有了依据，这也解释了为何增益几乎全部出现在分布外（在模型从未训练过的东京/香港数据上提升 15.5%）而非分布内。消融结果干净地印证了这一划分：预训练多样性帮助近域泛化，微调多样性帮助远域泛化。

本条目与同日归档的宁静期 STEVE 条目（2026-08-28）直接呼应：二者都指向接收机默认统一加权模型难以处理的 GNSS 误差源，也都主张逐观测的不确定度应当被*挣得*而非假定。局限：这是一篇短会议论文；改进以 50 与 95 百分位的均值报告而非完整 CDF；重度分布外测试集仅 13 万 token；且轻度分布外性能实际有所退化，故自监督的收益具体是一种远域迁移效应，而非一致性改善。

## Images

![Deep-learning-enhanced PVT training pipeline: JEPA self-supervised pretraining feeding the supervised range-correction and uncertainty heads | 深度学习增强 PVT 的训练流程：JEPA 自监督预训练接入监督式距离改正与不确定度输出头](https://arxiv.org/html/2608.25674v1/figures/image1_DNN_TRAINING_a.png)
![Correlation of predicted corrections and uncertainties with input features — the supervised-only model collapses onto the code-residual shortcut (0.96) | 预测改正与不确定度同输入特征的相关性——纯监督模型坍缩到码残差捷径（0.96）](https://arxiv.org/html/2608.25674v1/figures/image2_correlation.png)
![Encoder attention over the relative sky plot: early layers attend to high elevation, later layers to the low-elevation multipath region | 编码器在相对天空图上的注意力：浅层关注高仰角，深层关注低仰角强多径区域](https://arxiv.org/html/2608.25674v1/figures/image3_encoder.png)
