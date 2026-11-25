---
id: 2026-11-25_arxiv-uwb-radar-har-representations-fusion-dw3000
date_published: 2026-11-23
date_found: 2026-11-25
type: academic-paper
technology: uwb
title_en: "One UWB Radar, Many Views: Comparing and Fusing Signal Representations for Human Activity Recognition"
title_zh: "一部 UWB 雷达，多种视图：用于人体活动识别的信号表示比较与融合"
url: "https://arxiv.org/abs/2611.30033"
source_quality: full
topics: [UWB, IR-UWB, 802.15.4z, human-activity-recognition, range-Doppler, micro-Doppler, DW3000, sensing]
topic_primary: uwb-radar
topics_secondary: [uwb-ranging]
novelty_score: 3
---

## Summary (EN)

The paper (Ghent University–imec IDLab; submitted to IEEE Access, 12 pages) compares three ways of turning IEEE 802.15.4z impulse-radio UWB channel impulse responses (CIRs) into classifier input for human activity recognition (HAR): the range-time map (RTM), range-Doppler map (RDM) and time-Doppler map (TDM). The authors state that earlier comparisons apply one fixed processing setting to all representations, so they tune each representation independently over five processing and deployment factors (clutter removal, FFT window, slow-time sampling rate, Doppler bandwidth, carrier frequency) and evaluate under two shifts: unseen furniture layouts (leave-one-bed-position-out, LOBPO) and an unseen room (leave-one-room-out, LORO).

Data come from a ceiling-mounted, pseudo-monostatic pair of DW3000 transceivers on Qorvo QM33120WDK1 kits (nodes 30 cm apart, CIRs sampled at 150 Hz), recorded from 44 participants aged 21-86 in two bedrooms with 12 furniture configurations in total and eight activity classes. The authors release the dataset (Room 1 was published with their earlier work; Room 2 and channel 9 recordings are new). A single compact CNN (under 200k parameters) is used for every representation, and a fusion network gives each representation its own branch.

Across more than 1,000 cross-validated models the authors report that processing choices shift macro-F1 by up to 26 points, four times the gap between representations. After tuning, the RDM leads for unseen layouts (85.1% macro-F1) and the TDM for the unseen room (72.7%); fusing all three maps reaches 89.1% and 80.0%. Lower slow-time sampling rates and narrower Doppler bands cut latency by 38-51% with at most a 1.5-point macro-F1 loss. They conclude that the best representation is a deployment decision rather than a fixed property.

## Summary (ZH)

论文（根特大学-imec IDLab，已投稿 IEEE Access，12 页）比较了把 IEEE 802.15.4z 脉冲无线电 UWB 信道冲激响应（CIR）转换为人体活动识别（HAR）分类器输入的三种方式：距离-时间图（RTM）、距离-多普勒图（RDM）和时间-多普勒图（TDM）。作者指出以往比较对所有表示使用同一套固定处理设置，因此他们针对五个处理与部署因素（杂波去除、FFT 窗、慢时间采样率、多普勒带宽、载波频率）对每种表示独立调参，并在两类偏移下评估：未见过的家具布局（留一床位置，LOBPO）与未见过的房间（留一房间，LORO）。

数据来自吊顶安装、伪单站配置的一对 DW3000 收发器（Qorvo QM33120WDK1 开发套件，节点相距 30 cm，CIR 采样率 150 Hz），在两间卧室中共 12 种家具配置下采集 44 名 21-86 岁参与者的数据，共八类活动。作者公开了数据集（房间 1 随其早期工作发布；房间 2 与信道 9 的录制为新增）。所有表示使用同一个紧凑 CNN（参数量低于 20 万），融合网络则为每种表示设置独立分支。

在超过 1000 个交叉验证模型中，作者报告处理选择可使宏 F1 变化最多 26 个百分点，是各表示之间差距的四倍。调参后，RDM 在未见布局下领先（宏 F1 85.1%），TDM 在未见房间下领先（72.7%）；三者融合分别达到 89.1% 与 80.0%。降低慢时间采样率并收窄多普勒带宽可使时延降低 38-51%，宏 F1 至多下降 1.5 个百分点。作者的结论是：最佳表示是一项部署决策，而不是固定属性。

## Key technical points (EN)

- Signal chain: each 802.15.4z packet's preamble yields one CIR; a per-packet phase offset (carrier frequency offset and clock drift between unsynchronized transmitter and receiver) is removed by referencing every range bin to the line-of-sight path's phase; windows of 2 s with a 0.2 s stride are converted to RTM (real and imaginary parts kept), RDM (slow-time FFT per range bin, magnitude) or TDM (short-CPI spectrogram averaged over range; CPI 224 pulses, stride 7 pulses).
- Clutter removal: mean subtraction is selected for RTM, Doppler-median subtraction for RDM, tail (empty-room reference) subtraction for TDM; RTM gains 26 macro-F1 points over no removal, and MTI significantly lowers TDM performance.
- Window and carrier: a rectangular FFT window beats Hann for RDM; channel 5 (6.5 GHz) beat channel 9 (8.0 GHz) in all nine representation-fold pairs on Room 2 (mean gains 1.9 RDM, 4.7 RTM, 11.3 TDM points).
- Sampling and bandwidth: the slow-time rate can drop to 75 Hz (RTM, TDM) or 100 Hz (RDM) without significant loss, and the retained Doppler band can be cropped to 30 Hz (radial velocity below 0.69 m/s on channel 5) with no measurable loss.
- Generalization: under layout shift RDM 85.1 vs TDM 80.0 vs RTM 79.1; under room shift TDM 72.7, RDM 68.6, RTM 58.1 (two folds, descriptive). RDM+TDM fusion reaches 88.5 / 78.7; adding RTM gives little; a matched-capacity three-branch RDM model scores below the best single representation.
- Cost (Xeon Silver 4108, one thread, batch 1): accuracy-focused RTM 7.40 ms, Doppler-median RDM 14.86 ms, TDM 7.65 ms (8.4-fold preprocessing saving from reusing overlapping CPIs), full fusion 31.24 ms; the authors state all configurations meet the 200 ms prediction interval.
- Stated limits: two rooms with the same ceiling mounting, one estimator per clutter-removal family, one compact CNN, latency measured on a server CPU rather than embedded hardware.

## Key technical points (ZH)

- 信号链：每个 802.15.4z 数据包的前导码产生一个 CIR；通过把每个距离门相位参照到直达径相位，消除每包相位偏移（收发端不同步造成的载波频偏与时钟漂移）；2 s 窗口、0.2 s 步长转换为 RTM（保留实部和虚部）、RDM（每距离门做慢时间 FFT，取幅度）或 TDM（短 CPI 谱图并对距离平均；CPI 224 个脉冲，步长 7 个脉冲）。
- 杂波去除：RTM 选用均值相减，RDM 选用多普勒中值相减，TDM 选用尾部（空房间参考）相减；RTM 相比不去除杂波提升 26 个宏 F1 点，MTI 显著降低 TDM 性能。
- 窗函数与载波：RDM 上矩形 FFT 窗优于 Hann；在房间 2 中信道 5（6.5 GHz）在全部九个表示-折组合中优于信道 9（8.0 GHz）（平均提升 RDM 1.9、RTM 4.7、TDM 11.3 点）。
- 采样与带宽：慢时间速率可降至 75 Hz（RTM、TDM）或 100 Hz（RDM）而无显著损失，保留的多普勒带宽可裁剪到 30 Hz（信道 5 上径向速度低于 0.69 m/s）而无可测的精度损失。
- 泛化：布局偏移下 RDM 85.1、TDM 80.0、RTM 79.1；房间偏移下 TDM 72.7、RDM 68.6、RTM 58.1（仅两折，描述性报告）。RDM+TDM 融合达到 88.5 / 78.7；加入 RTM 增益很小；容量匹配的三分支 RDM 模型低于最佳单一表示。
- 开销（Xeon Silver 4108，单线程，批大小 1）：精度优先配置下 RTM 7.40 ms、多普勒中值 RDM 14.86 ms、TDM 7.65 ms（复用重叠 CPI 使预处理缩短 8.4 倍）、完整融合 31.24 ms；作者说明所有配置都满足 200 ms 的预测间隔。
- 作者列出的局限：仅两个房间且吊顶安装方式相同、每类杂波去除只比较一种估计器、仅用一种紧凑 CNN、时延在服务器 CPU 而非嵌入式硬件上测得。

## Why it matters / what's new (EN)

The authors present it as a study of the input representation rather than of model architecture, using commercial 802.15.4z hardware instead of dedicated sensing radars, and they position the 44-participant, two-room dataset as larger than the datasets in their related-work comparison table (at most 30 subjects). Their stated practical guidance is that RDM suits deployments with labelled data from the target room, TDM those without, and fusion those that can afford about twice the RDM latency.

## Why it matters / what's new (ZH)

作者将其定位为对输入表示（而非模型架构）的研究，使用商用 802.15.4z 硬件而非专用感知雷达，并称其 44 名参与者、两个房间的数据集大于其相关工作对比表中的数据集（至多 30 名受试者）。他们给出的实用建议是：目标房间有标注数据时选 RDM，没有时选 TDM，能承受约两倍 RDM 时延的部署选融合。

## Images

![Signal model and representation pipeline: ceiling-mounted UWB transmitter/receiver, CIR stacking into RTM, RDM and TDM, CNN classification | 信号模型与表示流水线：吊顶 UWB 收发器、CIR 堆叠为 RTM、RDM 与 TDM，再由 CNN 分类](https://arxiv.org/html/2611.30033v1/System_model_and_preprocessing.png)
![Per-activity F1 of individual and fused representations under layout and room shift | 布局与房间偏移下单一与融合表示的各活动 F1](https://arxiv.org/html/2611.30033v1/fusion_per_activity_heatmap.png)
