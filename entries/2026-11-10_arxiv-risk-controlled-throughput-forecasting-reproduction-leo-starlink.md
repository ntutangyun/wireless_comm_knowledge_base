---
id: 2026-11-10_arxiv-risk-controlled-throughput-forecasting-reproduction-leo-starlink
date_published: 2026-11-04
date_found: 2026-11-10
technology: satellite
type: academic-paper
title_en: "When Does Risk-Controlled Throughput Forecasting Actually Control Risk? A Reproduction Study on LEO Satellite Link"
title_zh: "风险受控的吞吐预测何时真正控制了风险？LEO 卫星链路上的复现研究"
url: "https://arxiv.org/abs/2611.06307"
source_quality: full
topics: [Starlink, throughput-forecasting, conformal-calibration, risk-control, reproduction-study, admission-control]
topic_primary: starlink
topics_secondary: [leo-constellations]
novelty_score: 3
---

## Summary (EN)

Sharma, Saini, Behl, R and Vijayaragavan (arXiv, submitted 4 Nov 2026; code released on GitHub) reproduce BG-CFQS, a risk-budgeted throughput forecaster that turns a point forecast of LEO satellite capacity into a conservative bound whose overestimation rate is held at a user-specified budget so admission control can act on it safely. They run it on the three Starlink traces used by its authors plus an independent fourth dataset and report four findings.

First, the risk guarantee is reproducible but conditional on the calibration split: under a random split every published quantity is recovered (risk-pass on 3 of 3 datasets), but under a contiguous temporal split, which the authors describe as what a deployed terminal faces, it holds on 1 of 3. Second, the method cannot serve a risk budget below 0.15, the low end of its candidate quantile set; on all four datasets the achieved rate is identical at budgets 0.05, 0.10 and 0.15, overshooting by 1.4x to 3.7x at the tightest. Third, static conformal calibration can only shift an operating point, not improve a ranking, confirmed on latency-spike detection where online calibration improves AUPRC by up to 51%. Fourth, group-conditional online recalibration splits into two mechanisms: the online part replicates, tracking the budget within 1% from 0.05 to 0.35 where static calibration is 16 to 21% off. The group-conditional part does not replicate: on three of four datasets, conditioning on any available covariate, including measured serving-satellite geometry, is worse than not conditioning, and the authors' attempt to predict which datasets benefit failed. The authors state that the contribution is empirical, not algorithmic.

## Summary (ZH)

Sharma、Saini、Behl、R 与 Vijayaragavan（arXiv，2026 年 11 月 4 日提交；代码已在 GitHub 发布）复现了 BG-CFQS：一种风险预算化的吞吐预测器，将 LEO 卫星容量的点预测转换为保守上界，使高估率保持在用户指定预算内，以便准入控制安全使用。作者在其原作者使用的三条 Starlink 轨迹和一个独立的第四数据集上运行该方法，报告四项发现。

第一，风险保证可复现但取决于校准划分：随机划分下所有已发表数值均可复现（3/3 数据集通过风险检验），而在连续时间划分下（作者称这是已部署终端面临的情形）仅 1/3 成立。第二，该方法无法满足低于 0.15 的风险预算（其候选分位数集的下端）；在四个数据集上，预算 0.05、0.10、0.15 的实际达成率相同，最紧预算下超出 1.4 至 3.7 倍。第三，静态共形校准只能移动工作点而不能改善排序，在时延尖峰检测上得到验证，在线校准使 AUPRC 最高提升 51%。第四，分组条件在线重校准分为两种机制：在线部分可复现，在预算 0.05 至 0.35 范围内误差在 1% 以内，而静态校准偏差为 16% 至 21%。分组条件部分无法复现：在四个数据集中的三个上，以任何可用协变量（包括实测的服务卫星几何）作条件都不如不加条件，作者预测哪些数据集会受益的尝试也失败了。作者声明其贡献是实证性的而非算法性的。

## Key technical points (EN)

- Target: BG-CFQS, risk-budgeted conformal throughput forecasting for LEO satellite capacity, reproduced on three original Starlink traces plus an independent fourth dataset.
- Split sensitivity: risk guarantee holds on 3/3 datasets under random split but 1/3 under contiguous temporal split.
- Floor: cannot serve budgets below 0.15; identical achieved rate at 0.05, 0.10, 0.15, overshooting 1.4x to 3.7x at the tightest.
- Calibration: static conformal calibration shifts operating point only; online calibration improves latency-spike AUPRC by up to 51%.
- Online recalibration tracks the budget within 1% (0.05-0.35) vs 16-21% off for static. The group-conditional part does not replicate: on three of four datasets, conditioning on any available covariate, including measured serving-satellite geometry, is worse than not conditioning, and the authors' attempt to predict which datasets benefit failed. The authors state that the contribution is empirical, not algorithmic.

## Key technical points (ZH)

- 对象：BG-CFQS，面向 LEO 卫星容量的风险预算化共形吞吐预测，在三条原始 Starlink 轨迹和一个独立第四数据集上复现。
- 划分敏感性：随机划分下 3/3 数据集满足风险保证，连续时间划分下仅 1/3。
- 下限：无法满足低于 0.15 的预算；0.05、0.10、0.15 时达成率相同，最紧预算超出 1.4 至 3.7 倍。
- 校准：静态共形校准仅移动工作点；在线校准使时延尖峰 AUPRC 最高提升 51%。
- 在线重校准在 0.05-0.35 范围内误差 1% 以内，静态偏差 16%-21%。分组条件部分无法复现：在四个数据集中的三个上，以任何可用协变量（包括实测的服务卫星几何）作条件都不如不加条件，作者预测哪些数据集会受益的尝试也失败了。作者声明其贡献是实证性的而非算法性的。

## Why it matters / what's new (EN)

The KB has Starlink forecasting entries (Gnomon link-state forecasting, 2026-09-24; StarWorld cross-layer prediction) that propose methods. This entry is a reproduction study of a published forecaster, reporting where its risk guarantee does and does not hold, which is a different kind of evidence. Findings are about one method on four datasets.

## Why it matters / what's new (ZH)

KB 已有提出方法的 Starlink 预测条目（Gnomon 链路状态预测，2026-09-24；StarWorld 跨层预测）。本条目是对已发表预测器的复现研究，报告其风险保证在何种情形下成立或不成立，属于另一类证据。结论仅针对一种方法在四个数据集上的表现。

## Images

