---
id: 2026-09-15_arxiv-through-wall-wifi-csi-adaptive-pca
date_published: 2026-09-11
date_found: 2026-09-15
technology: wifi
type: academic-paper
title_en: "Through-Wall Detection using Software-Defined Radio based on adaptive Principal Component Analysis"
title_zh: "基于自适应主成分分析的软件定义无线电穿墙探测方法"
url: "https://arxiv.org/abs/2609.12443"
source_quality: full
topics: [WiFi-sensing, CSI, PCA, SDR]
topic_primary: sensing-csi
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

This paper (Dinuli Naotunna, Wenchao Li, Sanka Piyaratna, Phil Wandel; Solinnov Pty Ltd, with Monash University) targets through-wall human-motion detection using ambient Wi-Fi signals, without any control over the transmitting access points — the receiver, a custom software-defined radio called "Bluebottle" built by Solinnov, passively extracts Channel State Information (CSI) from opportunistic Wi-Fi traffic at an effective 100 Hz sampling rate. The core problem the paper addresses is that motion-induced Doppler components in the CSI are typically masked by strong static direct-path reflections and broadband noise, and that conventional Principal Component Analysis (PCA) approaches to CSI denoising fix which components to keep regardless of scene — prior work cited by the authors ranges from the first 5-20 components to just the 2nd-3rd; this paper's own comparison baseline (used in its experiments) retains a fixed components 2-6. The paper's contribution is a spectral-domain scoring mechanism that adaptively selects which PCA components carry motion information: for each component, a Welch power spectral density estimate is used to compute a band ratio (spectral energy concentration within a ±3.5 Hz window around the second principal component's dominant peak, since that component is argued to capture the largest share of post-background-removal variance) and an equivalent SNR (ratio of in-band to out-of-band spectral level); the two are multiplied into a composite score, and the top five scoring components are kept. The selected components then go through a continuous wavelet transform (Morlet wavelet) to produce time-frequency scalograms, which are temporally aggregated into a 1D energy vector for CFAR (Constant False Alarm Rate) motion-event detection.

Experiments were run at Solinnov's Melbourne office using two commercial Wi-Fi routers and one Bluebottle receiver, across two setups: S1, in which both the SDR and Router 1 sit in the same office (no wall; no Tx-Rx distance is reported), tested under zero, two, and four direct-path-crossing conditions; and S2, a separate-office configuration where the signal must traverse a wall to a second, more distant router with more complex multipath — the only true through-wall test. A volunteer walked repeatedly through the sensing zone at varying pace and dwell time under each condition. The paper's "mean score" is not a detection-quality or accuracy metric; it is the average of the band-ratio x SNR score s_k across the five components each method selects, and because adaptive PCA selects components by ranking exactly this score, its mean cannot be lower than a fixed selection's by construction — no detection rate or accuracy figure is reported, and no mean score is given for the no-crossing control (where both methods looked qualitatively similar). Compared against fixed-component PCA (components 2-6), the adaptive method's mean score was higher on the two S1 motion conditions with reported means — 0.515 vs. 0.360 for two crossings, where the paper additionally reports fixed PCA producing several false detections that adaptive PCA did not, and 0.413 vs. 0.366 for four crossings, where fixed PCA again showed spurious ridges between genuine events and false detections that adaptive PCA's sparser scalogram did not — and higher but by a margin the authors call only "slight"/"modest" on the S2 cross-office case (0.765 vs. 0.710), since most components there already had low noise; the authors do report aPCA producing sharper, better-separated peaks in that S2 case too.

## Summary (ZH)

这篇论文（Dinuli Naotunna、Wenchao Li、Sanka Piyaratna、Phil Wandel；Solinnov Pty Ltd，与莫纳什大学合作）针对利用环境中的 Wi-Fi 信号进行穿墙人体运动探测，且不对发射端接入点施加任何控制——接收端使用 Solinnov 自研的定制软件定义无线电 "Bluebottle"，以约 100 Hz 的等效采样率从机会性截获的 Wi-Fi 流量中被动提取信道状态信息（CSI）。论文要解决的核心问题是：CSI 中由运动引起的多普勒分量通常会被强静态直射路径反射及宽带噪声所掩盖，而传统主成分分析（PCA）去噪方法通常固定保留哪些主成分，而不考虑具体场景——作者引用的已有工作所用范围各异（从第 1 至第 5~20 主成分不等，或仅取第 2、3 主成分）；本文自身实验中所用的对比基线固定保留第 2 至第 6 主成分。论文的贡献在于一种频谱域评分机制，可自适应地选择携带运动信息的 PCA 主成分：对每个主成分，利用 Welch 功率谱密度估计计算带内比（以第二主成分主峰为中心 ±3.5 Hz 窗口内的频谱能量集中度，作者认为该主成分在去除静态背景后占据了最大部分方差）和等效信噪比（带内与带外频谱电平之比）；两者相乘得到综合评分，取评分最高的五个主成分保留。所选主成分随后经过连续小波变换（Morlet 小波）生成时频尺度图，再在时间上聚合为一维能量向量，用于恒虚警率（CFAR）运动事件检测。

实验在 Solinnov 位于墨尔本的办公室进行，使用两台商用 Wi-Fi 路由器和一台 Bluebottle 接收机，涉及两种设置：S1——SDR 与 1 号路由器位于同一间办公室（无墙体阻隔，论文未报告收发距离），在零次、两次、四次直射路径穿越三种条件下测试；以及 S2——需要信号穿越一堵墙、抵达距离更远的第二台路由器、多径更复杂的跨办公室配置，这是唯一真正的穿墙测试。一名志愿者以不同步速和停留时间，在感知区域内反复走动。论文中的"平均评分"并非探测质量或准确率指标，而是各方法所选五个主成分的带内比×信噪比评分 s_k 的平均值；由于自适应 PCA 正是按该评分排序来选择主成分，其均值在构造上不可能低于固定选择方案——论文并未报告任何探测率或准确率数据，无穿越对照场景也未给出平均评分（该场景下两种方法结果在视觉上相近）。与固定成分 PCA（保留第 2 至第 6 主成分）相比，自适应方法在 S1 的两个有运动条件下平均评分更高——两次穿越场景为 0.515 对 0.360，论文另报告固定 PCA 在该场景产生了若干误报而自适应方法未出现；四次穿越场景为 0.413 对 0.366，论文同样报告固定 PCA 在真实事件之间出现虚假能量脊并产生误报，而自适应方法生成的更稀疏尺度图未出现这些问题——而在 S2 跨办公室场景（0.765 对 0.710）中，作者仅将提升描述为"轻微"/"有限"，因为该场景下大多数主成分本身噪声已经较低；不过作者也报告称该场景下自适应方法同样产生了更尖锐、分离度更好的峰值。

## Key technical points (EN)

- Bluebottle: Solinnov's custom passive SDR receiver, extracts CSI from ambient/opportunistic Wi-Fi packets (no transmitter coordination needed) at an effective 100 Hz sampling rate.
- Adaptive PCA component scoring: for each component k, score s_k = BandRatio_k x SNR_k, where BandRatio is spectral energy within +/-3.5 Hz of the 2nd principal component's dominant peak (via Welch PSD) and SNR is in-band vs. out-of-band spectral level; top-5 scoring components retained (vs. a fixed components-2-6 baseline).
- Detection pipeline: selected components -> continuous wavelet transform (Morlet) -> scalogram -> temporal energy aggregation -> CFAR thresholding for motion-event detection.
- Two test setups: S1, same office (SDR and Router 1 co-located, no wall, no Tx-Rx distance reported), with 0/2/4 direct-path-crossing conditions; S2, cross-office through a wall to a more distant router — the only true through-wall test.
- "Mean score" is the average of the band-ratio x SNR score s_k across the five components each method selects — not a detection-rate/accuracy metric, and mechanically favors aPCA since aPCA selects by ranking this exact score. Numbers (aPCA vs. cPCA): S1 two crossings 0.515 vs. 0.360 (cPCA also produced several false detections there); S1 four crossings 0.413 vs. 0.366 (cPCA again showed spurious ridges/false detections); S2 cross-office 0.765 vs. 0.710, an improvement the authors call only "slight"/"modest" since most components there were already low-noise. No mean is reported for the no-crossing control (S1), where both methods looked qualitatively similar.

## Key technical points (ZH)

- Bluebottle：Solinnov 自研的定制被动式 SDR 接收机，以约 100 Hz 等效采样率从环境中机会性截获的 Wi-Fi 数据包提取 CSI（无需与发射端协同）。
- 自适应 PCA 主成分评分：对每个主成分 k，评分 s_k = 带内比_k × 信噪比_k，其中带内比指第二主成分主峰 ±3.5 Hz 范围内的频谱能量（经 Welch 功率谱密度估计）、信噪比为带内与带外频谱电平之比；取评分最高的 5 个主成分（对比固定保留第 2-6 主成分的基线方法）。
- 探测流程：所选主成分 → 连续小波变换（Morlet）→ 尺度图 → 时间维能量聚合 → CFAR 阈值判定，用于运动事件检测。
- 两种测试设置：S1——同办公室（SDR 与 1 号路由器同室，无墙体，论文未报告收发距离），测试条件为直射路径穿越 0/2/4 次；S2——跨办公室、穿越一堵墙抵达更远的路由器——这是唯一真正的穿墙测试。
- "平均评分"是各方法所选五个主成分的带内比×信噪比评分 s_k 的平均值，并非探测率/准确率指标，且由于自适应 PCA 正是按该评分排序选择，其均值在构造上天然优于固定方案。数据（aPCA 对比 cPCA）：S1 两次穿越 0.515 对 0.360（该场景 cPCA 还产生了若干误报）；S1 四次穿越 0.413 对 0.366（cPCA 再次出现虚假能量脊/误报）；S2 跨办公室场景 0.765 对 0.710，作者仅将该提升称为"轻微"/"有限"，因为该场景下大多数主成分本身噪声已较低。无穿越对照场景（S1）未给出平均评分，该场景两种方法结果视觉上相近。

## Why it matters / what's new (EN)

This KB's sensing-csi entries have mostly covered human activity/pose recognition and respiratory monitoring using controlled or cooperative CSI sources. This paper's contribution sits earlier in the pipeline — a denoising/component-selection step for CSI extracted passively from uncontrolled, ambient Wi-Fi traffic rather than a downstream classifier. Only one of its four test conditions is actually through-wall (the S2 cross-office case); the other three (no/two/four crossings) are same-office, with no wall between SDR and router, and on the one true through-wall case the paper reports the gain as only "slight"/"modest" — the larger gains, and the only reported elimination of false detections, are on the same-office S1 tests. The comparison is against a fixed-component PCA baseline on a small, single-site dataset (one volunteer, two offices at Solinnov's Melbourne site); the reported "mean score" is not a detection-quality metric but the average of the band-ratio x SNR score across the five components each method selects — a quantity that favors adaptive selection by construction, since that score is exactly what adaptive PCA optimizes for — and no independent detection rate or accuracy figure is reported, so the improvement should be read as a qualitative, score-construction-relative comparison rather than an absolute detection-quality claim.

## Why it matters / what's new (ZH)

本知识库此前收录的 sensing-csi 类条目大多聚焦于基于受控或协作式 CSI 来源的人体活动/姿态识别与呼吸监测。这篇论文的贡献处于处理流程更靠前的环节——即针对从不受控、环境中机会性截获的 Wi-Fi 流量被动提取的 CSI 进行去噪/主成分选择，而非下游分类器本身。其四种测试条件中只有一种（S2 跨办公室场景）真正属于穿墙场景；其余三种（零/两/四次穿越）均在同一办公室内进行，SDR 与路由器之间并无墙体阻隔，而在唯一真正的穿墙场景下，论文将提升幅度报告为仅"轻微"/"有限"——更大的提升，以及论文中唯一明确报告的"消除误报"，都出现在同办公室的 S1 测试中。对比对象是一个固定主成分的 PCA 基线，测试数据规模较小且来自单一场地（一名志愿者、同一地点的两间办公室）；论文所报告的"平均评分"并非探测质量指标，而是各方法所选五个主成分的带内比×信噪比评分的平均值——由于该评分正是自适应 PCA 用来排序选择主成分的依据，这一指标在构造上天然有利于自适应方法——且论文未报告任何独立的探测率或准确率数据，因此改进幅度应被理解为一种相对于评分构造方式的定性比较，而非绝对探测质量的结论。

## Images

![Experimental floor plan showing the two Tx-Rx configurations | 实验楼层平面图：展示两种收发配置](https://arxiv.org/html/2609.12443v1/figures/floorplan2.png)
![Through-wall detection system illustration | 穿墙探测系统示意图](https://arxiv.org/html/2609.12443v1/figures/demo.png)
