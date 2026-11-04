---
id: 2026-11-04_arxiv-hideout-csi-location-privacy-rate-constrained-perturbation
date_published: 2026-10-21
date_found: 2026-11-04
type: academic-paper
technology: cellular
title_en: "HideOut: User Protection Against Localization with Throughput Guarantees in Mobile Networks"
title_zh: "HideOut：在保证吞吐量的前提下保护用户免受移动网络定位"
url: "https://arxiv.org/abs/2611.00088"
source_quality: full
topics: [CSI-feedback, location-privacy, adversarial-perturbation, MRT-beamforming, CSI-localization, surrogate-model, MOCSID, Sionna]
topic_primary: cellular-security
topics_secondary: [5g-nr, cellular-ai]
novelty_score: 3
---

## Summary (EN)

Navidreza Asadi, Michele Guardiani, Wolfgang Kellerer and Jafar Aco Mohammadi (accepted at AISec 2026, The Hague, Nov 15-19, 2026) study a privacy leak in cellular channel state information (CSI) feedback. A UE reports CSI so the base station can compute its downlink precoder, but a network-side localization service can feed the same report to a neural model that maps CSI to UE coordinates, so the report doubles as a location signal. The authors note that coordinate-level defences (k-anonymity, geo-indistinguishability, local differential privacy) act after a location is estimated, and that signal-level defences from Wi-Fi sensing assume only that packets stay decodable, whereas a base station's precoder depends continuously on CSI fidelity.

HideOut is a client-side mechanism in which the UE reports a perturbed CSI matrix instead of its measurement. Under maximum ratio transmission (MRT) precoding, the paper shows that a user-chosen bound on downlink spectral-efficiency (SE) loss converts into an angular constraint on the reported channel direction. HideOut runs gradient-based perturbation to raise the localization model's error and projects every update onto this rate-feasible set, so the SE budget holds by construction rather than through a penalty term. Two settings are covered: white-box (UE uses the deployed model's gradients) and black-box (the UE trains a local surrogate localizer, selected by Bayesian architecture search, from its own CSI-location pairs and relies on perturbation transferability).

## Summary (ZH)

Navidreza Asadi、Michele Guardiani、Wolfgang Kellerer 与 Jafar Aco Mohammadi（已被 AISec 2026 接收，2026 年 11 月 15-19 日，海牙）研究蜂窝信道状态信息（CSI）反馈中的隐私泄露。UE 上报 CSI 是为了让基站计算下行预编码，但网络侧的定位服务可以把同一份报告输入神经网络，直接映射为 UE 坐标，因此 CSI 报告同时成了位置信号。作者指出，坐标层面的防御（k-匿名、地理不可区分性、本地差分隐私）作用于位置已被估计之后；Wi-Fi 感知场景中的信号层防御只要求数据包仍可解码，而基站的预编码器连续依赖 CSI 的保真度。

HideOut 是一种客户端机制：UE 上报经扰动的 CSI 矩阵而不是原始测量。论文证明，在最大比传输（MRT）预编码下，用户选定的下行频谱效率（SE）损失上限可转换为对上报信道方向的角度约束。HideOut 用基于梯度的扰动抬高定位模型的误差，并把每次更新投影到满足速率可行性的集合上，因此 SE 预算由构造保证，而不是靠罚项调节。论文覆盖两种设定：白盒（UE 使用已部署模型的梯度）和黑盒（UE 用自己的 CSI-位置对训练本地替代定位器，经贝叶斯架构搜索选定，并依赖扰动的可迁移性）。

## Key technical points (EN)

- Setup: simulated 5G link-level protocol on the open Multi-cell Outdoor CSI Dataset (MOCSID, NVIDIA Sionna ray tracing, Lyon campus), MISO with 16 BS antennas, 256 subcarriers, 10 base stations; one cell within 100 m of a gNB is used (57,216 channel realizations, 85/5/10 train/validation/test). The UE reports the perturbed CSI uncompressed and the BS receives it error-free.
- Four positioning architectures are evaluated (including a SimpleCNN, the KUL-CNN used for the detailed black-box analysis, and an RNN). HideOut raises localization error from roughly 1-2 m to 72-85 m with downlink SE loss within a 1% budget.
- Black-box baselines (AWGN, a geometric "perpendicular" rotation, BI-FGSM): per the paper, BI-FGSM needs an efficiency-drop budget of about 19% to match HideOut at a strict 1% budget; with gamma between 1% and 5%, HideOut gives about 40 m or more error for 90% of locations. On the RNN target HideOut reaches 84.96 m at 1% versus 2.91 m for BI-FGSM.
- White-box gives a better obfuscation-efficiency trade-off than black-box, with the gap narrowing on the RNN target.
- Stated limits: only single-cell results (cross-cell generalization left to future work); localizers are trained on clean CSI and tested on protected CSI, so adversarial training, distribution-shift detection or fusion with other positioning sources could weaken it; the UE must store and run a surrogate model; HideOut is described as protection against CSI-only localization, not all cellular tracking.

## Key technical points (ZH)

- 实验设置：在开源的 Multi-cell Outdoor CSI Dataset（MOCSID，NVIDIA Sionna 射线追踪，里昂校园）上仿真 5G 链路级协议，MISO，基站 16 根天线，256 个子载波，10 个基站；使用距某 gNB 100 m 内的单个小区（57,216 个信道样本，按 85/5/10 划分训练/验证/测试）。UE 以未压缩形式上报扰动后的 CSI，基站无误接收。
- 评估四种定位网络架构（含 SimpleCNN、用于详细黑盒分析的 KUL-CNN 以及 RNN）。HideOut 在下行 SE 损失不超过 1% 的前提下，把定位误差从约 1-2 m 提高到 72-85 m。
- 黑盒基线（AWGN、几何"垂直"旋转、BI-FGSM）：论文称 BI-FGSM 需要约 19% 的效率下降预算才能匹配严格 1% 预算下的 HideOut；gamma 取 1%-5% 时，HideOut 在 90% 的位置上产生约 40 m 及以上误差。在 RNN 目标上，HideOut 在 1% 预算下达到 84.96 m，BI-FGSM 仅 2.91 m。
- 白盒的混淆-效率折中优于黑盒，但在 RNN 目标上差距缩小。
- 论文自述局限：只有单小区结果（跨小区泛化留待未来）；定位器在干净 CSI 上训练、在受保护 CSI 上测试，网络侧若做对抗训练、检测分布偏移或与其他定位源融合，效果可能下降；UE 需要存储并运行替代模型；HideOut 被定位为针对仅基于 CSI 的定位的防护，而非对所有蜂窝跟踪的完整防御。

## Why it matters / what's new (EN)

The paper frames CSI feedback as a location-privacy attack surface in 5G-Advanced/6G, where the 3GPP architecture already includes a Location Management Function and learning-based positioning is growing. Its contribution is a derivation tying an SE-loss budget to an angular constraint under MRT so that a perturbation defence has a hard throughput bound. The evidence is simulated, single-cell, ray-traced pedestrian data with MRT precoding and error-free uncompressed CSI reporting, so it demonstrates the mechanism rather than a deployed-network measurement.

## Why it matters / what's new (ZH)

论文把 CSI 反馈视为 5G-Advanced/6G 中的位置隐私攻击面：3GPP 架构已包含位置管理功能（LMF），基于学习的定位也在增长。其贡献是在 MRT 下推导出 SE 损失预算与角度约束之间的对应关系，使扰动式防御拥有硬性的吞吐界限。证据来自仿真：单小区、射线追踪的行人数据、MRT 预编码，以及无误差的未压缩 CSI 上报，因此展示的是机制本身，而不是实际网络中的测量结果。

## Images

None.
