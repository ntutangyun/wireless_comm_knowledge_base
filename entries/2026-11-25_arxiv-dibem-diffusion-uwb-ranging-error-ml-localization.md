---
id: 2026-11-25_arxiv-dibem-diffusion-uwb-ranging-error-ml-localization
date_published: 2026-11-22
date_found: 2026-11-25
type: academic-paper
technology: uwb
title_en: "DIBEM: Diffusion-Based Error Mitigation for Uncertainty-Aware UWB Localization"
title_zh: "DIBEM：面向不确定性感知 UWB 定位的基于扩散模型的误差抑制"
url: "https://arxiv.org/abs/2611.29656"
source_quality: full
topics: [UWB, localization, NLoS, CIR, diffusion-model, DDIM, maximum-likelihood, uncertainty]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

The paper (Concordia University, Montreal; Kianfar, Hosseini, Mohammadi) addresses UWB ranging errors under non-line-of-sight (NLoS) and multipath propagation. Instead of predicting a deterministic range correction or restricting uncertainty to a Gaussian or fixed-mixture family, DIBEM learns the conditional distribution of each anchor-tag link's ranging error from six compact CIR statistics (energy, maximum amplitude, rise time, mean excess delay, RMS delay spread, kurtosis), using a conditional denoising diffusion model with DDIM sampling to generate link-specific error samples.

The generated samples (100 per observation, 50-step deterministic DDIM) are turned into a continuous density by kernel density estimation and placed in a maximum-likelihood position estimator that assumes the errors are conditionally independent across links. The experiments use measurements from four indoor environments (residential apartments, an industrial workshop and an office floor) with 325,319 training, 78,081 validation and 71,982 test samples, and compare least squares, LS with correction, weighted LS, a heteroscedastic-Gaussian model (HetNet) and a mixture density network (MDN).

The authors report that DIBEM+ML has the lowest or tied-lowest mean localization error in every environment, reducing mean error by 62.3%, 36.0%, 64.8% and 57.3% relative to plain least squares, and by up to 15.8% and 14.0% relative to HetNet+ML and MDN+ML. They also state the cost: about 2.15 s estimated latency per link versus 0.22 ms (MDN) and 0.32 ms (HetNet).

## Summary (ZH)

论文（加拿大蒙特利尔康考迪亚大学；Kianfar、Hosseini、Mohammadi）针对非视距（NLoS）与多径传播下的 UWB 测距误差。DIBEM 不预测确定性的距离修正，也不把不确定性限定在高斯或固定混合分布族内，而是从六个紧凑的 CIR 统计量（能量、最大幅度、上升时间、平均超额时延、RMS 时延扩展、峰度）学习每条锚点-标签链路测距误差的条件分布，使用带 DDIM 采样的条件去噪扩散模型生成链路特定的误差样本。

生成的样本（每次观测 100 个，50 步确定性 DDIM）经核密度估计转为连续密度，代入假设各链路误差条件独立的最大似然位置估计器。实验使用四种室内环境（住宅公寓、工业车间和办公楼层）的测量数据，训练、验证、测试样本分别为 325,319、78,081 和 71,982 个，对比最小二乘、带修正的 LS、加权 LS、异方差高斯模型（HetNet）与混合密度网络（MDN）。

作者报告 DIBEM+ML 在所有环境中平均定位误差最低或并列最低，相对普通最小二乘分别降低 62.3%、36.0%、64.8% 与 57.3%，相对 HetNet+ML 与 MDN+ML 最多降低 15.8% 与 14.0%。作者也说明了代价：每条链路估计时延约 2.15 s，而 MDN 为 0.22 ms、HetNet 为 0.32 ms。

## Key technical points (EN)

- Model: forward Gaussian noising of the ground-truth ranging error with a linear schedule; a denoising network conditioned on the six CIR statistics (MLP-encoded) predicts the injected noise; DDIM sampling reduces reverse steps.
- Localization: KDE-smoothed error samples per link form the likelihood; the position is the maximizer of the product of link likelihoods, solved with a bounded multi-start L-BFGS-B optimizer for all methods.
- NLoS ranging-error modeling: DIBEM has the best or tied-best MAE, RMSE and NLL in three of four environments; under LoS it is on par with HetNet and MDN in MAE/RMSE, and MDN has the lowest NLL in most environments.
- LoS caveat reported by the authors: in Environment 3, DIBEM's mean LoS NLL (6.02) is inflated by a few cases where the true error fell outside its 100 generated samples, giving near-zero KDE density.
- Localization (mean error, m): Environment 0, LS 0.77 vs DIBEM+ML 0.29; Environment 1, 0.25 vs 0.16; Environment 2, 2.10 vs 0.74; Environment 3, 0.75 vs 0.32. In Environment 2 DIBEM+ML trails HetNet+ML slightly on P90 and RMSE while cutting median error by 25.0%.
- Stated limits: iterative sampling latency, finite-sample density effects in rare cases; future work lists accelerated sampling and distillation, uncertainty-calibration analysis, and generalization to unseen environments and UWB hardware.

## Key technical points (ZH)

- 模型：对真实测距误差按线性调度做前向高斯加噪；以六个 CIR 统计量（经 MLP 编码）为条件的去噪网络预测所注入的噪声；DDIM 采样减少反向步数。
- 定位：每条链路经 KDE 平滑的误差样本构成似然；位置为各链路似然乘积的最大化点，所有方法统一用带边界的多起点 L-BFGS-B 求解。
- NLoS 测距误差建模：DIBEM 在四个环境中的三个取得最佳或并列最佳的 MAE、RMSE 与 NLL；LoS 下 MAE/RMSE 与 HetNet、MDN 相当，多数环境中 MDN 的 NLL 最低。
- 作者报告的 LoS 说明：环境 3 中 DIBEM 的 LoS 平均 NLL（6.02）被少数真实误差落在其 100 个生成样本之外、KDE 密度接近零的情况抬高。
- 定位（平均误差，m）：环境 0，LS 0.77 对 DIBEM+ML 0.29；环境 1，0.25 对 0.16；环境 2，2.10 对 0.74；环境 3，0.75 对 0.32。在环境 2 中 DIBEM+ML 的 P90 与 RMSE 略逊于 HetNet+ML，但中位误差降低 25.0%。
- 作者列出的局限：迭代采样的时延、罕见情况下的有限样本密度效应；未来工作包括加速采样与蒸馏、不确定性校准分析，以及对未见环境和 UWB 硬件的泛化。

## Why it matters / what's new (EN)

The paper's stated gap is that deterministic corrections give only a point estimate and that Gaussian or mixture-density models constrain the error distribution to a prescribed family; DIBEM is presented as learning the shape of that distribution without such a constraint and passing it into the position estimator. The authors describe the gains over HetNet and MDN as modest, and the evaluation uses one dataset split (seed 2025) without testing unseen environments.

## Why it matters / what's new (ZH)

论文指出的空白是：确定性修正只给出点估计，而高斯或混合密度模型把误差分布限定在预设分布族内；DIBEM 被描述为在不加此类约束的情况下学习该分布的形状并传入位置估计器。作者称其相对 HetNet 与 MDN 的增益较为有限；评估使用单一数据划分（种子 2025），未测试未见环境。
