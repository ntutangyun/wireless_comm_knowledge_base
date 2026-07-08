---
id: 2026-07-08_arxiv-uwb-radar-phase-multichannel
date_published: 2026-06-15
date_found: 2026-07-08
type: academic-paper
technology: uwb
title_en: "Towards mm-level accurate UWB radar: passive phase-based obstacle detection via LOS-referenced multi-channel fusion (Ghent/imec)"
title_zh: "迈向毫米级 UWB 雷达：基于 LOS 参考多信道融合的无标签相位障碍物检测（根特大学/imec）"
url: "https://arxiv.org/abs/2606.16657"
source_quality: full
topics: [UWB, radar, phase-ranging, DW3000, particle-filter, tag-free]
topic_primary: uwb-radar
topics_secondary: [uwb-ranging]
novelty_score: 3
---

## Summary (EN)

De Moerloose, Shahid and De Poorter (IDLab, Ghent University-imec; arxiv 2606.16657, submitted June 15, 2026) demonstrate for the first time that phase-based UWB signal processing — the technique behind sub-wavelength precision in *tag-based* ranging — can be made to work in a fully **passive (tag-free) UWB radar** setting. Passive UWB radar has been stuck at roughly 10 cm accuracy with amplitude-based methods; phase methods stalled on three obstacles: hardware-induced phase drift between unsynchronized transceivers, phase ambiguity from wavelength periodicity, and target reflections that are weak and multipath-corrupted with no strong reference path.

The core trick is LOS-referencing: in a bistatic setup the line-of-sight peak between the two transceivers is always present, so subtracting the LOS phase from the target-reflection phase cancels oscillator offset and drift without any synchronization hardware. On top of that, a particle filter fuses three parallel pipelines — amplitude (CFAR peak detection for coarse distance), differenced phase (relative motion, ambiguous by wavelength multiples), and an SNR-based reliability score that gates unreliable phase updates — across two UWB channels (5 and 9; 6.49 / 7.99 GHz), whose spectral diversity helps resolve the phase ambiguity jointly over the measurement history.

Evaluation runs on a 4WD rover carrying two Qorvo DW3000 transceivers (18.6 cm baseline) in a metallic, multipath-rich industrial IoT lab, with 100 Hz motion capture as ground truth, over 8 trajectories (1.29-5.65 m, up to 1.7 m/s). Headline numbers: 1.69 cm median absolute error, 2.48 cm MAE, 4.76 cm P90 — a 3.6× improvement over the prior passive state of the art (~9 cm MAE), with multi-channel fusion contributing >40% error reduction vs single-channel. Notably the system keeps <2.2 cm median error at speeds beyond each channel's theoretical phase-ambiguity limit (0.59-0.72 m/s), which single-channel phase methods cannot survive.

## Summary (ZH)

De Moerloose、Shahid 和 De Poorter（根特大学-imec IDLab；arxiv 2606.16657，2026 年 6 月 15 日提交）首次证明基于相位的 UWB 信号处理——有标签测距中实现亚波长精度的核心技术——可以在完全**无标签（被动）UWB 雷达**场景中工作。被动 UWB 雷达此前用幅度方法只能达到约 10 cm 精度；相位方法卡在三个障碍上：非同步收发器间的硬件相位漂移、波长周期性带来的相位模糊、以及目标反射微弱且受多径污染、缺乏强参考路径。

核心技巧是 LOS 参考：双基地配置中两个收发器之间的视距峰值始终存在，用目标反射相位减去 LOS 相位即可在无任何同步硬件的情况下消除振荡器偏移与漂移。在此之上，粒子滤波器融合三条并行管线——幅度（CFAR 峰值检测给出粗距离）、差分相位（编码相对运动，按波长倍数模糊）、以及基于 SNR 的可靠性评分（对不可靠的相位更新进行门控）——并跨两个 UWB 信道（信道 5 和 9；6.49 / 7.99 GHz）利用频谱多样性在测量历史上联合解算相位模糊。

评估在一台搭载两个 Qorvo DW3000 收发器（基线 18.6 cm）的四驱小车上进行，环境为金属多径丰富的工业物联网实验室，以 100 Hz 动捕为真值，覆盖 8 条轨迹（1.29-5.65 m，最高 1.7 m/s）。核心数据：中位绝对误差 1.69 cm、MAE 2.48 cm、P90 误差 4.76 cm——相对被动雷达此前最好水平（约 9 cm MAE）提升 3.6 倍，多信道融合贡献了相对单信道超过 40% 的误差下降。尤其值得注意的是，系统在超过单信道理论相位模糊速度上限（0.59-0.72 m/s）的 1.7 m/s 下仍保持中位误差低于 2.2 cm，这是单信道相位方法无法企及的。

## Key technical points (EN)

- First passive (tag-free) phase-based UWB radar: LOS-peak phase referencing cancels oscillator offset/drift in unsynchronized bistatic configurations.
- Three-pipeline particle filter: amplitude (CFAR, coarse), differenced phase (fine, ambiguous), SNR reliability gating — fused across channels 5 & 9 for spectral-diversity ambiguity resolution.
- Commodity hardware: 2× Qorvo DW3000 on a mobile rover, 18.6 cm baseline; MOCAP ground truth.
- Accuracy: 1.69 cm MedAE / 2.48 cm MAE / 4.76 cm P90 — 3.6× better than prior passive art; >40% gain from multi-channel fusion.
- Speed robustness: stable at 1.7 m/s, beyond both channels' individual phase-ambiguity limits; robust to single-channel Fresnel-zone degradation.

## Key technical points (ZH)

- 首个被动（无标签）相位 UWB 雷达：LOS 峰值相位参考在非同步双基地配置中消除振荡器偏移/漂移。
- 三管线粒子滤波：幅度（CFAR，粗距离）、差分相位（精细、有模糊）、SNR 可靠性门控——跨信道 5 和 9 融合，用频谱多样性解相位模糊。
- 商用硬件：移动小车上 2× Qorvo DW3000，基线 18.6 cm；动捕真值。
- 精度：中位误差 1.69 cm / MAE 2.48 cm / P90 4.76 cm——较此前被动方案提升 3.6 倍；多信道融合贡献 >40% 增益。
- 速度鲁棒性：1.7 m/s 下稳定，超过两信道各自的相位模糊上限；对单信道菲涅尔区退化鲁棒。

## Why it matters / what's new (EN)

The uwb-radar bin has tracked amplitude-based sensing and tag-based phase ranging as separate threads; this paper fuses them — bringing tag-grade (cm-to-mm) precision to tag-free obstacle detection on commodity DW3000 silicon with zero synchronization hardware. That matters for the robotics/AGV use cases the 802.15.4ab-era chipsets (cf. the ST64UWB family entry) are being positioned for: mm-to-cm passive ranging from the same transceivers that already do secure keyless-entry ranging makes UWB a dual-use sensor without extra BOM. The LOS-referenced drift-cancellation idea is also conceptually portable to any bistatic ranging radio with a stable direct path.

## Why it matters / what's new (ZH)

uwb-radar 桶此前把幅度感知与有标签相位测距作为两条独立线索跟踪；本文将二者融合——在商用 DW3000 芯片上、零同步硬件的条件下，把有标签级别（厘米到毫米）的精度带入无标签障碍物检测。这对 802.15.4ab 时代芯片组（参见 ST64UWB 家族条目）瞄准的机器人/AGV 场景意义重大：同一批已经承担安全无钥匙进入测距的收发器可同时做毫米-厘米级被动测距，使 UWB 成为不增加 BOM 的双用途传感器。LOS 参考漂移消除的思路在概念上也可移植到任何存在稳定直达路径的双基地测距无线电。

## Images

![Processing pipeline: amplitude, phase and reliability pipelines feeding the particle filter | 处理管线：幅度、相位与可靠性三管线汇入粒子滤波器](https://arxiv.org/html/2606.16657v1/images/system_overview.png)
![Evaluation: phase drift cancellation and multi-channel fusion results | 评估：相位漂移消除与多信道融合结果](https://arxiv.org/html/2606.16657v1/x1.png)
