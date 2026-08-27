---
id: 2026-08-27_arxiv-subcarrier-aware-respiratory-csi
date_published: 2026-08-26
date_found: 2026-08-27
technology: wifi
type: academic-paper
title_en: "A Subcarrier-Aware Approach for Robust Respiratory Monitoring with Commodity Wi-Fi"
title_zh: "基于子载波感知的商用 Wi-Fi 鲁棒呼吸监测方法"
url: "https://arxiv.org/abs/2608.25612"
source_quality: full
topics: [WiFi-sensing, CSI, respiration-monitoring, Nexmon, subcarrier-selection, 802.11ac]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 2
---

## Summary (EN)

Pei Tang, Yunpeng Ge and Ivan Wang-Hei Ho (The Hong Kong Polytechnic University, per the paper's IRB approval reference) attack a habit rather than a hard problem: most commodity-Wi-Fi respiration work treats CSI subcarriers as interchangeable, averaging or stacking them before extracting a breathing rate. The paper's claim (arXiv 2608.25612, submitted 26 Aug 2026, 13 pages, 24 figures) is that this uniform treatment throws away most of the available signal, because subcarriers at different frequencies sit in different multipath conditions and therefore couple to chest motion with very different sensitivity. Some subcarriers carry a clean respiratory sinusoid; others are dominated by noise or sit near a multipath null where the breathing modulation nearly vanishes.

The framework has three stages. First it **characterises** per-subcarrier responsiveness by computing a four-dimensional feature vector for each subcarrier: standard deviation, energy in the breathing band, autocorrelation periodicity, and phase standard deviation. Second it **selects** by running unsupervised K-means with K = 3 over those feature vectors and keeping the cluster with the highest average breathing-band energy — a purely data-driven pick with no labelled training and no per-environment model. Third it **estimates** by fitting a sinusoid separately to the amplitude and to the phase of the selected subcarriers and taking whichever fit has the higher R². That last step is a small but useful piece of engineering: amplitude and phase degrade under different conditions, so choosing per-measurement by fit quality gives a form of free modality fusion.

The measurement setup is deliberately commodity. A Raspberry Pi 4B running the Nexmon CSI extractor captures 5 GHz, 80 MHz CSI across 256 subcarriers at a 50 Hz sampling rate, driven by beacon frames rather than injected traffic; a Neulog respiration belt supplies ground truth. Four volunteers produced 58 test runs — 28 of normal breathing and 30 containing deliberate breath-holds — across distances from 1 m to 20 m and five postures (seated, supine, prone, left-side and right-side lying). A public dataset contributes a further 30 tests for external validation.

On normal breathing the method reports 97% accuracy and 0.48 bpm mean absolute error, an improvement of 2.8 percentage points and 0.45 bpm over WiRe, with S-G filtering, FFT, "Diverse" and RMS as additional baselines. The more interesting result is the breath-hold case, where uniform-subcarrier methods degrade badly: accuracy is 88% (a 9-point gain) with MAE 1.6 bpm, down 1.33 bpm from baseline, and both false-detection and missed-detection rates stay under 10% at a decision threshold of η = 0.3. The authors are explicit about scope: a single stationary breathing source is assumed, the thresholds are empirically set and expected to need recalibration per environment, and interfering motion or irregular respiration is out of the tested envelope.

## Summary (ZH)

Pei Tang、Yunpeng Ge 与 Ivan Wang-Hei Ho（据论文伦理审批编号，来自香港理工大学）针对的不是一个难题，而是一个惯例：多数商用 Wi-Fi 呼吸监测工作把 CSI 子载波视为可互换的，先做平均或堆叠再提取呼吸率。论文（arXiv 2608.25612，2026 年 8 月 26 日提交，13 页、24 幅图）主张这种"一视同仁"的处理丢掉了大部分可用信号，因为不同频率的子载波处在不同的多径条件下，对胸腔运动的耦合灵敏度差异极大：有的子载波承载着干净的呼吸正弦，有的则被噪声主导，或恰好落在多径零点附近而使呼吸调制几乎消失。

方法分三步。第一步**刻画**每个子载波的响应性：为每个子载波计算四维特征向量——标准差、呼吸频带能量、自相关周期性、相位标准差。第二步**筛选**：对这些特征向量做 K=3 的无监督 K-means 聚类，保留平均呼吸频带能量最高的那一簇——完全由数据驱动，无需标注训练，也无需逐环境建模。第三步**估计**：对所选子载波的幅度与相位分别做正弦拟合，取 R² 更高者。最后这一步虽小却实用：幅度与相位在不同条件下各自劣化，按拟合质量逐次测量地择优，等于免费获得了一种模态融合。

测量平台刻意采用商用器件。运行 Nexmon CSI 提取的 Raspberry Pi 4B 在 5 GHz、80 MHz 带宽下采集 256 个子载波的 CSI，采样率 50 Hz，且由信标帧驱动而非注入流量；真值由 Neulog 呼吸带提供。4 名志愿者完成 58 组测试——28 组正常呼吸、30 组含刻意屏气——覆盖 1 m 至 20 m 的距离与五种体位（坐姿、仰卧、俯卧、左侧卧、右侧卧）。另有一个公开数据集贡献 30 组测试用于外部验证。

在正常呼吸场景下，该方法报告 97% 准确率与 0.48 bpm 的平均绝对误差，相对 WiRe 分别提升 2.8 个百分点与 0.45 bpm；对比基线还包括 S-G 滤波、FFT、"Diverse" 与 RMS。更有意思的是屏气场景——统一处理子载波的方法在此劣化严重：本方法准确率 88%（提升 9 个百分点），MAE 1.6 bpm（下降 1.33 bpm），在判决门限 η = 0.3 下误检率与漏检率均低于 10%。作者对适用范围直言不讳：假设单一静止呼吸源；门限为经验设定，预期需按环境重新标定；干扰性运动与不规则呼吸不在测试范围内。

## Key technical points (EN)

- **Core premise**: CSI subcarriers respond heterogeneously to breathing because each sits in a different multipath condition; uniform averaging/stacking dilutes the informative ones with null-adjacent and noise-dominated ones.
- **Per-subcarrier feature vector** (4-D): standard deviation, breathing-band energy, autocorrelation periodicity, phase standard deviation.
- **Selection by unsupervised clustering**: K-means with K = 3 over those features; keep the cluster with the highest mean breathing-band energy. No labels, no per-environment training.
- **Amplitude/phase fusion by fit quality**: sinusoidal fit run separately on amplitude and phase, winner chosen by R² per measurement.
- **Commodity capture chain**: Raspberry Pi 4B + Nexmon, 5 GHz / 80 MHz / 256 subcarriers, 50 Hz CSI sampled from beacon frames; Neulog respiration belt as ground truth.
- **Test envelope**: 4 volunteers, 58 runs (28 normal / 30 with breath-holds), 1–20 m, five postures (seated, supine, prone, left-side, right-side); plus 30 runs from a public dataset.
- **Results**: normal breathing 97% accuracy / 0.48 bpm MAE (+2.8 pts, −0.45 bpm vs WiRe); breath-hold 88% accuracy / 1.6 bpm MAE (+9 pts, −1.33 bpm); FDR and MDR both <10% at η = 0.3. Other baselines: S-G filter, FFT, Diverse, RMS.
- **Stated limits**: single stationary breathing source, empirically tuned thresholds needing per-site recalibration, untested under interfering motion or irregular respiration.

## Key technical points (ZH)

- **核心前提**：CSI 子载波对呼吸的响应是异质的——每个子载波处在不同的多径条件下；统一平均/堆叠会用近零点与噪声主导的子载波稀释掉真正有信息量的那些。
- **逐子载波四维特征向量**：标准差、呼吸频带能量、自相关周期性、相位标准差。
- **以无监督聚类做筛选**：对上述特征做 K=3 的 K-means，保留平均呼吸频带能量最高的一簇。无需标注，也无需逐环境训练。
- **按拟合质量做幅度/相位融合**：对幅度与相位分别做正弦拟合，按每次测量的 R² 择优。
- **商用采集链路**：Raspberry Pi 4B + Nexmon，5 GHz / 80 MHz / 256 子载波，由信标帧驱动的 50 Hz CSI 采样；真值来自 Neulog 呼吸带。
- **测试范围**：4 名志愿者、58 组（28 组正常 / 30 组含屏气）、1–20 m、五种体位（坐、仰卧、俯卧、左侧卧、右侧卧）；另加公开数据集 30 组。
- **结果**：正常呼吸 97% 准确率 / 0.48 bpm MAE（相对 WiRe +2.8 个百分点、−0.45 bpm）；屏气场景 88% 准确率 / 1.6 bpm MAE（+9 个百分点、−1.33 bpm）；η = 0.3 时误检率与漏检率均 <10%。其他基线：S-G 滤波、FFT、Diverse、RMS。
- **明示局限**：单一静止呼吸源假设；门限经验设定、需按场地重新标定；未在干扰运动或不规则呼吸下验证。

## Why it matters / what's new (EN)

The `sensing-csi` bin already holds a respiration entry — `2026-05-04_arxiv-respirfi-respiratory-wifi-csi` — so the contribution here is not "Wi-Fi can sense breathing" but a sharper statement about *which* part of the CSI carries the signal. Framing subcarrier heterogeneity as the primary error source, and then handling it with unlabelled clustering rather than a trained selector, keeps the method deployable on a Raspberry Pi with no site-specific training pass. That matters for the same reason `2026-08-19_arxiv-rfcheck-synthetic-csi-measurement-audit` matters: this bin has accumulated a lot of learned pipelines whose generalisation across environments is unverified, and a lightweight unsupervised path is a useful counterweight.

The breath-hold result is the part worth carrying forward. Respiratory *pause* detection is the clinically interesting case (sleep apnoea screening is the obvious application) and it is precisely where uniform-subcarrier processing fails, because the breathing sinusoid that the averaging relies on is absent by definition. A 9-point accuracy gain and sub-10% false/missed detection at 1–20 m across five sleeping postures is a stronger claim than the 2.8-point gain on ordinary breathing. It also connects to the deployment-side signal in `2026-08-20_comcast-xfinity-shield-wifi-motion`: consumer Wi-Fi sensing is shipping now, and per-subcarrier quality selection is the kind of processing that a residential gateway could run without a training phase. Treat the numbers with the usual caution for a four-subject study with empirically tuned thresholds.

## Why it matters / what's new (ZH)

`sensing-csi` 分类中已有一条呼吸监测条目——`2026-05-04_arxiv-respirfi-respiratory-wifi-csi`——因此本文的贡献不是"Wi-Fi 能感知呼吸"，而是更精确地指出 CSI 中**哪一部分**承载了信号。把子载波异质性认定为主要误差来源，再用无标注聚类而非训练好的选择器去处理它，使方法可以在树莓派上部署且无需针对场地的训练环节。这一点的价值与 `2026-08-19_arxiv-rfcheck-synthetic-csi-measurement-audit` 同源：该分类已积累了大量跨环境泛化能力未经验证的学习式流水线，一条轻量的无监督路径是有益的制衡。

真正值得延续关注的是屏气结果。呼吸**暂停**检测才是临床上有意义的场景（睡眠呼吸暂停筛查是显而易见的应用），而这恰恰是统一处理子载波的方法失效之处——因为平均法所依赖的呼吸正弦在此按定义就是缺失的。在 1–20 m、五种睡姿下取得 9 个百分点的准确率提升与低于 10% 的误检/漏检，比正常呼吸下 2.8 个百分点的提升是更强的论断。它也与 `2026-08-20_comcast-xfinity-shield-wifi-motion` 所反映的落地信号相衔接：消费级 Wi-Fi 感知已在出货，而"逐子载波质量筛选"正是家庭网关无需训练阶段即可运行的那类处理。对这些数字仍应保持常规谨慎——这是一项 4 名受试者、门限经验调定的研究。

## Images

![Subcarrier responses to breathing differ across the CSI band | CSI 频带内各子载波对呼吸的响应存在差异](https://arxiv.org/html/2608.25612v1/figure1.png)
![Processing pipeline: per-subcarrier features, clustering-based selection, sinusoidal estimation | 处理流程：逐子载波特征、基于聚类的筛选、正弦拟合估计](https://arxiv.org/html/2608.25612v1/figure2.png)
