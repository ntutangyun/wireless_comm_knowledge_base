---
id: 2026-11-02_arxiv-multistatic-isac-5g-nr-prs-deep-learning-clutter-suppression
date_published: 2026-10-29
date_found: 2026-11-02
type: academic-paper
technology: cellular
title_en: "Multistatic ISAC with Deep Learning-Based Clutter Suppression for 5G and Beyond"
title_zh: "面向 5G 及未来系统的多站 ISAC 深度学习杂波抑制"
url: "https://arxiv.org/abs/2610.40586"
source_quality: full
topics: [ISAC, multistatic-sensing, 5G-NR-PRS, clutter-suppression, deep-learning, localization, velocity-estimation]
topic_primary: 6g-vision
topics_secondary: [5g-nr, cellular-ai]
novelty_score: 2
---

## Summary (EN)

Yalin E. Sagduyu, Tugba Erpek and Sastry Kompella (Nexcepta) look at passive multistatic sensing that reuses 5G NR positioning reference signals (PRS) from a base station as a signal of opportunity, observed by distributed receivers. Their motivation is that dense and dynamic clutter produces delayed, Doppler-shifted echoes that overlap the target in bistatic range-Doppler space, degrading localization and velocity estimation.

The setup is one NR illuminator and three receivers (numerology 0, 15 kHz SCS, 2.5 GHz, 76 RB PRS with comb-2 allocation per TS 38.211, 128 slow-time observations), cross-ambiguity-function processing and nonlinear multilateration, with clutter drawn as random scatterers with varying RCS and Doppler spread. Nine conventional suppression baselines (plus a reference-subtraction benchmark, CUR, that uses a clutter-only reference) give only partial gains. Two deep networks, a residual U-Net (DLCS-1, 1.9M parameters) and an anisotropic-convolution, attention-gated network (DLCS-2, 12.4M), enhance the target response directly. In a strong-clutter single-sample example DLCS-1 reaches 4.5 m position error and 0.45 m/s speed error, against about 159 m and 9.5 m/s for the strongest conventional baseline (RMHP) and 115 m and 22 m/s with no suppression. Over the test sets, the success rate normalized to the CUR reference (position error below 10 m) under the hardest clutter condition reaches about 63% (DLCS-1) and 67% (DLCS-2) against about 26% for the best conventional method.

## Summary (ZH)

Yalin E. Sagduyu、Tugba Erpek 与 Sastry Kompella（Nexcepta）研究以基站发出的 5G NR 定位参考信号（PRS）作为机会信号、由分布式接收机观测的被动多站感知。其动机是：密集且动态的杂波会产生延迟并带多普勒偏移的回波，与目标在双基地距离-多普勒域重叠，从而恶化定位与速度估计。

实验设置为一个 NR 照射源与三个接收机（numerology 0、15 kHz SCS、2.5 GHz、按 TS 38.211 生成的 76 RB PRS、梳状间隔 2、128 个慢时间观测），采用互模糊函数处理与非线性多边定位，杂波以随机散射体（RCS 与多普勒展宽各异）建模。九种传统抑制基线（另有使用纯杂波参考的参考减法基准 CUR）仅带来部分改善。两种深度网络——残差 U-Net（DLCS-1，190 万参数）与各向异性卷积加注意力门控网络（DLCS-2，1240 万参数）——直接增强目标响应。在强杂波的单样本示例中，DLCS-1 的位置误差为 4.5 m、速度误差为 0.45 m/s，而最强的传统基线（RMHP）约为 159 m 与 9.5 m/s，不做抑制则为 115 m 与 22 m/s。在测试集上，最强杂波条件下相对 CUR 参考方法归一化的成功率（位置误差低于 10 m）约为 63%（DLCS-1）与 67%（DLCS-2），最佳传统方法约 26%。

## Key technical points (EN)

- Signal model: direct path estimated and removed, CAF per receiver, bistatic range from transmitter-target-receiver path length, nonlinear multilateration for position and velocity.
- Clutter controls: number of scatterers (20 or 40), strength factor and Doppler spread (10 or 30 Hz); training randomises clutter density, strength and spread.
- Learned suppressors act on the clutter-contaminated range-Doppler observation to enhance the target response; DLCS-2 adds directional convolutions and attention-gated feature fusion and improves on DLCS-1 in every tested setting, by about 0.1-7 points of success rate.
- Success rate rises for both learned suppressors with larger training sets (500 to 5000 samples), and conventional methods degrade sharply under high Doppler spread (30 Hz) where clutter overlaps the target Doppler.
- Evaluation is entirely simulated with a synthetic scatterer model; no over-the-air measurement is reported.

## Key technical points (ZH)

- 信号模型：估计并去除直达径，每个接收机做 CAF，由发射机-目标-接收机路径长度得到双基地距离，再用非线性多边定位求位置与速度。
- 杂波参数：散射体数量（20 或 40）、强度因子与多普勒展宽（10 或 30 Hz）；训练时随机化杂波密度、强度与展宽。
- 学习型抑制器作用于被杂波污染的距离-多普勒观测以增强目标响应；DLCS-2 加入方向卷积与注意力门控特征融合，所有测试设置下成功率均高于 DLCS-1（约 0.1-7 个百分点）。
- 训练集增大（500 到 5000 样本）时两种深度学习抑制器的成功率均上升，高多普勒展宽（30 Hz）下杂波与目标多普勒重叠，传统方法明显退化。
- 评估全部为仿真，采用合成散射体模型，未报告空口实测。

## Why it matters / what's new (EN)

The paper frames cellular ISAC around reusing existing 5G NR PRS for persistent low-cost sensing, and shows through simulation that conventional clutter suppression loses robustness when clutter and target Doppler overlap. Whether learned suppressors trained on synthetic clutter transfer to real environments is not addressed.

## Why it matters / what's new (ZH)

论文把蜂窝 ISAC 定位为复用现有 5G NR PRS 实现持续的低成本感知，并通过仿真表明当杂波与目标多普勒重叠时传统杂波抑制会失去鲁棒性。在合成杂波上训练的学习型抑制器能否迁移到真实环境，文中并未讨论。

## Images

None.
