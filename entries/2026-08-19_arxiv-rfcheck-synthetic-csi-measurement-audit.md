---
id: 2026-08-19_arxiv-rfcheck-synthetic-csi-measurement-audit
date_published: 2026-08-10
date_found: 2026-08-19
type: academic-paper
technology: wifi
title_en: "RFCheck: Synthetic RF Sensing Data Can Fail Measurement Consistency"
title_zh: "RFCheck：合成 RF 感知数据可能违背测量一致性——面向 Wi-Fi CSI 的校准式审计"
url: "https://arxiv.org/abs/2608.09676"
source_quality: full
topics: [WiFi-sensing, CSI, synthetic-data, data-augmentation, 802.11bf, generative-AI, ISAC]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 2
---

## Summary (EN)
Zhang, Cui and Jing (Beijing University of Posts and Telecommunications) with Tony Xiao Han (Huawei Technologies) name and measure a failure mode in the now-routine practice of augmenting Wi-Fi sensing datasets with generated CSI: a synthetic sample can look right to every task-facing check — its label classifier agrees, its aggregate statistics match — while violating the *measurement* structure that a real acquisition pipeline imposes (finite bandwidth, preprocessing, receiver response). Because such samples pass the usual filters, they can create "synthetic shortcuts" that bias downstream model selection. The authors call the property being violated measurement consistency and argue it must be audited separately from task fidelity.

RFCheck is that audit. It takes held-out real samples from the *same* acquisition and preprocessing pipeline as the reference, calibrates representation-specific tests on them, and flags any synthetic sample whose normalised score exceeds the calibrated real-data range (S_m(x) > 1, with the joint score taken as the worst-link maximum across receive chains). For Wi-Fi CSI the tests examine the delay domain — precursor-like leakage appearing before the aligned dominant arrival, which a band-limited real channel cannot produce — and the local frequency domain — residual phase irregularity and local complex-continuation structure across neighbouring subcarriers. Thresholds are empirical quantiles of the real distribution, so they are hardware- and benchmark-specific by design. Beyond screening, the same tests drive a residual-repair step that nudges flagged candidates back into the calibrated range.

Experiments run primarily on Widar (Intel-style 30 occupied subcarriers, 120 real training samples per experiment) with external checks on ARIL (52 subcarriers) and WiMANS, auditing several generator families — a deliberately weak GAN, diffusion-style sources, refined sources with stronger sensing structure and an anchor-residual augmentation framework. Aggregate statistics and label-based screening miss failures that RFCheck catches; under the same label-acceptance rule, low-score and high-score synthetic candidates behave differently downstream (low-score retention improves worst-class F1 by 0.0634). A repair reference reduces the flagged ratio to 10.83 % while preserving mean task performance, and in a held-out proposal study correction followed by calibrated selection yields a class-balanced 120-sample set (40 per class) with 0 % flagged samples whose macro-F1 (0.5316 ± 0.0112) matches the real-only baseline (0.5375 ± 0.0130) under a fixed training budget. The same calibration principle is then instantiated for FMCW mmWave radar gesture data (M-Gesture) with range-leakage, range-Doppler-continuity and receive-chain temporal tests plus a trajectory constraint during repair. The authors are explicit that consistency is necessary, not sufficient, for task usefulness, that repair cannot invent sensing structure absent from the proposal pool, and that thresholds do not transfer across hardware.

## Summary (ZH)
Zhang、Cui、Jing（北京邮电大学）与 Tony Xiao Han（华为技术）为如今已成惯例的"用生成 CSI 增强 Wi-Fi 感知数据集"命名并度量了一种失效模式：合成样本可以通过所有面向任务的检查——标签分类器认同、汇总统计量匹配——却违背真实采集流水线所施加的"测量"结构（有限带宽、预处理、接收机响应）。由于此类样本能通过常规过滤，它们可能制造"合成捷径"，使下游模型选择产生偏差。作者称被违背的性质为测量一致性，并主张必须与任务保真度分开审计。

RFCheck 就是这一审计。它以来自"同一"采集与预处理流水线的留出真实样本为参照，在其上校准面向具体表示的检验，并对归一化得分超出校准后真实数据范围的合成样本打标（S_m(x) > 1，联合得分取各接收链路中最差者）。对 Wi-Fi CSI，检验考察时延域——在对齐的主径到达之前出现类前驱泄漏，这是带限真实信道不可能产生的——以及局部频域——相邻子载波间的残余相位不规则性与局部复数延拓结构。阈值是真实分布的经验分位数，因此按设计与硬件、基准相关。除筛选外，同一组检验还驱动残差修复步骤，将被打标候选拉回校准范围。

实验主要在 Widar（Intel 式 30 个占用子载波，每次实验 120 个真实训练样本）上进行，并在 ARIL（52 子载波）与 WiMANS 上外部验证，审计多类生成器——刻意弱化的 GAN、扩散式来源、具备更强感知结构的精炼来源以及锚点-残差增强框架。汇总统计与基于标签的筛选会漏掉 RFCheck 捕获的失效；在同一标签接受规则下，低分与高分合成候选的下游行为不同（保留低分候选使最差类 F1 提高 0.0634）。修复参照将打标比例降至 10.83% 且保持平均任务性能；在留出提案研究中，修正后再做校准选择得到类别均衡的 120 样本集（每类 40）且打标率 0%，在固定训练预算下其宏 F1（0.5316±0.0112）与仅真实数据基线（0.5375±0.0130）相当。随后同一校准原理被实例化到 FMCW 毫米波雷达手势数据（M-Gesture），采用距离泄漏、距离-多普勒连续性与接收链时域检验，并在修复时加入轨迹约束。作者明确指出：一致性对任务有用性是必要而非充分条件；修复无法凭空创造提案池中不存在的感知结构；阈值不能跨硬件迁移。

## Key technical points (EN)
- Failure mode: synthetic CSI that passes label/aggregate-statistic checks but violates pipeline-imposed measurement structure → "synthetic shortcuts" and biased model selection.
- Audit: calibrate representation-specific tests on held-out real data from the same pipeline; flag when normalised score S_m(x) > 1; joint score = worst-link max across receive chains.
- Wi-Fi CSI tests: delay-domain precursor leakage before the dominant arrival; local frequency-domain phase irregularity / complex-continuation structure.
- Data: Widar (30 subcarriers, 120 real training samples per run), ARIL (52), WiMANS; generators: weak GAN, diffusion-style, refined, anchor-residual augmentation.
- Results: repair reference cuts flagged ratio to 10.83 % with mean task performance preserved; low-score retention +0.0634 worst-class F1 vs high-score under identical label rule; held-out study yields 0 % flagged balanced set with macro-F1 0.5316 ± 0.0112 vs real-only 0.5375 ± 0.0130.
- Extension: FMCW mmWave gesture (M-Gesture) with range-leakage / range-Doppler continuity / temporal residual tests and trajectory-constrained repair.
- Limits: thresholds are hardware- and benchmark-specific; consistency is necessary not sufficient; repair cannot add missing sensing structure.

## Key technical points (ZH)
- 失效模式：合成 CSI 通过标签/汇总统计检查，却违背流水线施加的测量结构 → "合成捷径"与有偏模型选择。
- 审计：在同一流水线的留出真实数据上校准面向表示的检验；归一化得分 S_m(x) > 1 即打标；联合得分取各接收链路最差值。
- Wi-Fi CSI 检验：时延域主径之前的前驱泄漏；局部频域相位不规则性/复数延拓结构。
- 数据：Widar（30 子载波，每轮 120 个真实训练样本）、ARIL（52）、WiMANS；生成器：弱 GAN、扩散式、精炼式、锚点-残差增强。
- 结果：修复参照将打标比例降至 10.83% 且平均任务性能不变；同一标签规则下低分保留比高分保留最差类 F1 高 0.0634；留出研究得到 0% 打标的均衡集，宏 F1 0.5316±0.0112 vs 仅真实 0.5375±0.0130。
- 扩展：FMCW 毫米波手势（M-Gesture），距离泄漏/距离-多普勒连续性/时域残差检验与轨迹约束修复。
- 局限：阈值与硬件、基准相关；一致性必要而不充分；修复无法补足缺失的感知结构。

## Why it matters / what's new (EN)
This is the natural companion to 2026-07-04_arxiv-csi-simulation-agc-calibration, which showed that AWGN-style synthetic CSI ignores the multiplicative AGC distortion of real receivers. RFCheck generalises the lesson: whatever the generator (GAN, diffusion, anchor-residual), synthetic CSI must be audited against the *measurement* physics of the pipeline that produced the real data, and the paper supplies a concrete, calibrated procedure plus a repair step for doing so. With Huawei's Tony Xiao Han — long associated with the 802.11bf sensing effort — among the authors, and with the same principle demonstrated on FMCW radar, it also signals that measurement-aware data governance is being taken up on the standards-adjacent side of WLAN sensing, not only in academia. Novelty 2: the diagnostic framing is new and useful; the absolute task-level gains are small.

## Why it matters / what's new (ZH)
本文是 2026-07-04_arxiv-csi-simulation-agc-calibration 的自然姊妹篇——后者揭示 AWGN 式合成 CSI 忽略了真实接收机 AGC 的乘性失真。RFCheck 把这一教训一般化：无论生成器为何（GAN、扩散、锚点-残差），合成 CSI 都必须对照产生真实数据的流水线的"测量"物理进行审计，论文为此给出具体、可校准的流程外加修复步骤。作者中包括长期参与 802.11bf 感知工作的华为 Tony Xiao Han，且同一原理在 FMCW 雷达上得到验证，这也表明"测量感知的数据治理"正在 WLAN 感知的标准相邻侧被采纳，而非仅限学术界。新颖度 2：诊断框架新且有用；任务级绝对收益较小。

## Images
![RFCheck overview: calibrated measurement audit of synthetic RF sensing data | RFCheck 概览：对合成 RF 感知数据的校准式测量审计](https://arxiv.org/html/2608.09676v1/Fig1_RFCheck.png)
![Cross-modality diagnostic: CSI delay/frequency-domain and FMCW tests | 跨模态诊断：CSI 时延/频域检验与 FMCW 检验](https://arxiv.org/html/2608.09676v1/Fig3_cross_modality_diagnostic.png)
![Qualitative repair of FMCW range-Doppler samples | FMCW 距离-多普勒样本的定性修复](https://arxiv.org/html/2608.09676v1/Fig7_fmcw_qualitative_repair.png)
