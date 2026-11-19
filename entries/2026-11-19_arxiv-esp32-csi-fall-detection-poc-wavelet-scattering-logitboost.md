---
id: 2026-11-19_arxiv-esp32-csi-fall-detection-poc-wavelet-scattering-logitboost
date_published: 2026-11-11
date_found: 2026-11-19
technology: wifi
type: academic-paper
title_en: "A Proof-of-Concept Study of Wi-Fi Channel State Information-Based Fall Detection Using ESP32 Devices"
title_zh: "基于 ESP32 设备的 Wi-Fi 信道状态信息跌倒检测概念验证研究"
url: "https://arxiv.org/abs/2611.15532"
source_quality: full
topics: [Wi-Fi sensing, CSI, ESP32, fall detection, wavelet scattering]
topic_primary: sensing-csi
topics_secondary: []
novelty_score: 2
---

## Summary (EN)
This small proof-of-concept study (Amritha S.S., Rahman, Saleem, Sankar, Panachakel; submitted 11 Nov 2026) detects falls contactlessly from Wi-Fi CSI collected with two ESP32 boards, one transmitter and one receiver about 3.5 m apart, in a spacious, sparsely furnished indoor room. A custom Python utility built on Espressif's CSI functionality logged raw CSI at the receiver; each simulated fall or walking sample was performed by a single participant (the study involved a small number of young participants), with movements in different directions or styles, with five-second activity windows.

The pipeline computes per-subcarrier amplitude from the real and imaginary parts, denoises with a second-level discrete wavelet transform (Symlet-10), applies per-record z-score normalisation and fixed-length segmentation, extracts wavelet-scattering features, and selects a classifier with MATLAB's automated workflow, which chose a LogitBoost ensemble (minimum leaf size 4, learning rate 0.022052). The evaluation set is 29 instances (16 falls, 13 walks). Reported results: accuracy 93.10%, precision 100%, recall 87.50%, F1 93.33%, with a confusion matrix of 14 of 16 falls detected and all 13 walks correct.

## Summary (ZH)
这项小规模概念验证研究（Amritha S.S.、Rahman、Saleem、Sankar、Panachakel，2026 年 11 月 11 日提交）利用两块 ESP32 开发板（一发一收，相距约 3.5 m）在宽敞、陈设较少的室内房间中采集 Wi-Fi CSI，实现非接触式跌倒检测。基于 Espressif CSI 功能的自定义 Python 工具在接收端记录原始 CSI；每个模拟跌倒或行走样本由一名参与者完成（研究共涉及少量年轻参与者），动作方向或方式各异，活动窗口为五秒。

处理流程为：由实部与虚部计算逐子载波幅度，采用二级离散小波变换（Symlet-10）去噪，逐记录 z-score 归一化并按固定长度分段，提取小波散射特征，再用 MATLAB 自动分类器选择流程，选出 LogitBoost 集成（最小叶节点 4，学习率 0.022052）。评估集共 29 个样本（16 次跌倒、13 次行走）。报告结果：准确率 93.10%，精确率 100%，召回率 87.50%，F1 为 93.33%；混淆矩阵显示 16 次跌倒中检出 14 次，13 次行走全部判对。

## Key technical points (EN)
- Hardware: two ESP32 boards, 3.5 m apart; CSI amplitude traces.
- Features: wavelet-scattering coefficients after Symlet-10 DWT denoising and z-score normalisation.
- Classifier: LogitBoost ensemble selected by MATLAB automated classifier selection.
- Stated limitations: only 29 instances and two activity classes; one controlled room and a small, young participant pool; two of 16 falls missed; zero false positives come from only 13 walks; the authors call for larger, subject-independent, multi-environment tests.

## Key technical points (ZH)
- 硬件：两块 ESP32，相距 3.5 m；使用 CSI 幅度曲线。
- 特征：Symlet-10 小波去噪与 z-score 归一化后的小波散射系数。
- 分类器：由 MATLAB 自动分类器选择得到的 LogitBoost 集成。
- 文中所述局限：仅 29 个样本、两类活动；单一受控房间、参与者少且年轻；16 次跌倒漏检 2 次；零误报仅基于 13 次行走；作者呼吁开展更大规模、与受试者无关、多环境的测试。

## Why it matters / what's new (EN)
A low-cost-hardware data point for CSI-based fall detection, complementing the KB's earlier fall-detection entry (2026-05-12_arxiv-wifi-fall-detection-physics-transformer) and the ESP32 CSI tracker (2026-10-16_arxiv-ghostline-six-node-esp32-csi-motion-tracker). The sample size is very small, so the reported metrics are indicative only.

## Why it matters / what's new (ZH)
为基于 CSI 的跌倒检测提供了一个低成本硬件数据点，与知识库此前的跌倒检测条目（2026-05-12_arxiv-wifi-fall-detection-physics-transformer）及 ESP32 CSI 追踪条目（2026-10-16_arxiv-ghostline-six-node-esp32-csi-motion-tracker）相呼应。样本量极小，所报指标仅供参考。

## Images

None.
