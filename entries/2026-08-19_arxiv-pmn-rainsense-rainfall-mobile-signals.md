---
id: 2026-08-19_arxiv-pmn-rainsense-rainfall-mobile-signals
date_published: 2026-08-17
date_found: 2026-08-19
type: academic-paper
technology: cellular
title_en: "Rainfall Sensing via Mobile Communication Signals"
title_zh: "利用移动通信信号进行降雨感知"
url: "https://arxiv.org/abs/2608.16088"
source_quality: full
topics: [ISAC, rainfall-sensing, perceptive-mobile-network, delay-Doppler, CSI, sub-6GHz, LTE, environmental-sensing, single-antenna]
topic_primary: 6g-vision
topics_secondary: [cellular-ai, 5g-nr]
novelty_score: 3
---

## Summary (EN)
Zhongqin Wang, J. Andrew Zhang, Kai Wu and Y. Jay Guo (arXiv 17 Aug 2026, 13 pp., 13 figures) propose **PMN-RainSense**, a framework that turns existing sub-6-GHz mobile communication links into rainfall sensors using only channel state information (CSI) and a **single antenna**. The key move is to abandon rain-induced *attenuation* — which is negligible at sub-6-GHz frequencies — and instead exploit the fine-grained *dynamics* raindrops impose on the channel, read out in the **delay-Doppler domain**. Falling and wind-blown drops create small time-varying Doppler-domain fluctuations; the framework isolates these from environmental interference and hardware artefacts, then classifies/estimates rainfall from the resulting signatures.

The main engineering obstacle for a perceptive-mobile-network (PMN) deployment is that raw CSI is corrupted by automatic gain control, timing offsets, carrier-frequency offset and phase offset — impairments that normally force multi-antenna reference schemes. PMN-RainSense introduces a joint **spectral-temporal compensation** that suppresses these while preserving the rainfall-sensitive perturbations, which is what enables single-antenna operation. Physics-guided feature extraction then transforms compensated CSI into delay-Doppler representations, applying beamforming/filtering to pull rainfall signatures out of clutter (Doppler processing proves most effective under typical communication bandwidths), and two normalization strategies handle stable vs. time-varying backgrounds. Validation spans three platforms: a controlled **WiFi (5 GHz)** experiment reaching **95.48% accuracy** on three-class rainfall classification; **LTE measurements across the 0.76–2.68 GHz range (11 carrier frequencies)** giving a **0.258 mm/h mean absolute error** for rainfall-intensity estimation with a CNN on a held-out link; and an mmWave (28 GHz) observation confirming rainfall-induced Doppler broadening. The pitch is dense, continuous environmental monitoring reusing deployed cellular/WiFi infrastructure instead of sparse dedicated rain gauges and weather radar.

## Summary (ZH)
Zhongqin Wang、J. Andrew Zhang、Kai Wu 与 Y. Jay Guo（2026 年 8 月 17 日 arXiv，13 页 13 图）提出 **PMN-RainSense**，一个把既有 sub-6 GHz 移动通信链路转为降雨传感器的框架，仅用信道状态信息（CSI）与**单天线**。关键思路是放弃降雨*衰减*（在 sub-6 GHz 频段可忽略），转而利用雨滴对信道施加的细粒度*动态*，从**时延-多普勒域**读出。下落与被风吹动的雨滴产生微小的时变多普勒域波动；框架将其从环境干扰与硬件伪影中分离，再据此特征进行分类/估计。

面向感知移动网络（PMN）部署的主要工程障碍是原始 CSI 被自动增益控制、定时偏移、载波频偏与相位偏移污染——这些通常迫使采用多天线参考方案。PMN-RainSense 引入联合**谱-时补偿**，在抑制这些损伤的同时保留降雨敏感扰动，从而实现单天线运行。随后物理引导的特征提取将补偿后 CSI 变换到时延-多普勒表示，用波束成形/滤波从杂波中提取降雨特征（在典型通信带宽下多普勒处理最有效），并用两种归一化策略应对稳定与时变背景。验证覆盖三个平台：受控 **WiFi（5 GHz）** 实验，三类降雨分类**准确率 95.48%**；**跨 0.76–2.68 GHz（11 个载频）的 LTE 实测**，用 CNN 在留出链路上给出降雨强度**平均绝对误差 0.258 mm/h**；以及 mmWave（28 GHz）观测证实降雨引起的多普勒展宽。其卖点是复用已部署的蜂窝/WiFi 基础设施实现密集、连续的环境监测，替代稀疏的专用雨量计与气象雷达。

## Key technical points (EN)
- Principle: rain attenuation is negligible at sub-6 GHz; instead sense raindrop-induced Doppler-domain dynamics in delay-Doppler-transformed CSI.
- Single-antenna enabler: joint spectral-temporal CSI compensation removes AGC / timing / CFO / phase-offset artefacts while keeping rainfall perturbations.
- Feature extraction: delay-Doppler representation + beamforming/filtering; Doppler processing most effective at typical comms bandwidths; baseline-normalized vs Doppler-shape normalization for stable/time-varying backgrounds.
- WiFi 5 GHz controlled test: 95.48% accuracy, three-class rainfall classification.
- LTE 0.76–2.68 GHz, 11 carrier frequencies: 0.258 mm/h MAE rainfall-intensity estimation (CNN, held-out link).
- mmWave 28 GHz: observable rainfall-induced Doppler broadening.
- Goal: dense, continuous rainfall monitoring reusing mobile/WiFi infrastructure vs sparse rain gauges / weather radar.

## Key technical points (ZH)
- 原理：sub-6 GHz 降雨衰减可忽略；转而在时延-多普勒变换的 CSI 中感知雨滴引起的多普勒域动态。
- 单天线关键：联合谱-时 CSI 补偿去除 AGC/定时/CFO/相偏伪影，同时保留降雨扰动。
- 特征提取：时延-多普勒表示 + 波束成形/滤波；典型通信带宽下多普勒处理最有效；基线归一化 vs 多普勒形状归一化应对稳定/时变背景。
- WiFi 5 GHz 受控测试：三类降雨分类准确率 95.48%。
- LTE 0.76–2.68 GHz、11 载频：降雨强度估计 MAE 0.258 mm/h（CNN，留出链路）。
- mmWave 28 GHz：可观测降雨引起的多普勒展宽。
- 目标：复用移动/WiFi 基础设施实现密集连续降雨监测，替代稀疏雨量计/气象雷达。

## Why it matters / what's new (EN)
The KB's ISAC/sensing thread has been dominated by target detection and radar-style tasks (e.g. 2026-08-11 O-RAN ISAC UAV tracking, the recurring 3GPP-ISAC survey family), with environmental/weather sensing largely the domain of dedicated commercial microwave links that rely on attenuation. PMN-RainSense is a different angle: it says sub-6-GHz cellular/WiFi links already carry a rainfall signal in their Doppler dynamics, recoverable from single-antenna CSI once the hardware impairments are compensated — a result validated not only on WiFi but on real LTE across 11 carrier frequencies with sub-0.3 mm/h error. That makes it a candidate building block for 6G "sensing as a service" over deployed mobile infrastructure. The obvious caveats: the compensation and normalization are tuned to specific hardware/backgrounds, the LTE evaluation is a held-out-link generalization rather than a wide-area rollout, and ground-truth granularity limits how far the mm/h accuracy claim extends.

## Why it matters / what's new (ZH)
知识库的 ISAC/感知线索长期以目标检测与雷达式任务为主（如 2026-08-11 O-RAN ISAC 无人机跟踪、反复出现的 3GPP-ISAC 综述家族），而环境/气象感知多由依赖衰减的专用商用微波链路承担。PMN-RainSense 提供了不同角度：sub-6 GHz 蜂窝/WiFi 链路的多普勒动态中本就携带降雨信号，在补偿硬件损伤后可从单天线 CSI 中恢复——该结果不仅在 WiFi 上、更在跨 11 载频的真实 LTE 上验证，误差低于 0.3 mm/h。这使其成为在既有移动基础设施上实现 6G"感知即服务"的候选构件。显见的局限：补偿与归一化针对特定硬件/背景调参、LTE 评估是留出链路泛化而非广域铺开，且真值粒度限制了 mm/h 精度主张的外推。
