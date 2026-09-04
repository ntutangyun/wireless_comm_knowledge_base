---
id: 2026-09-04_arxiv-direct-sat-device-offload-monitor
date_published: 2026-09-02
date_found: 2026-09-04
type: academic-paper
technology: satellite
title_en: "Direct Satellite-to-Device Communications: From Cooperative Task Offloading to Non-Cooperative Access Monitoring"
title_zh: "卫星直连终端通信：从协作式任务卸载到非协作式接入监测"
url: "https://arxiv.org/abs/2609.02955"
source_quality: full
topics: [direct-to-device, task-offloading, Doppler-compensation, dueling-double-deep-Q-network, deep-reinforcement-learning, Vision-Transformer, segment-anything-model, automatic-modulation-classification, spectrum-monitoring, signal-detection]
topic_primary: sat-direct-device
topics_secondary: [sat-ai]
novelty_score: 4
---

## Summary (EN)
Huang, Ni, Lv, Zhang, Zheng, Zhang, Gong and Feng (Key Laboratory of Universal Wireless Communications, Ministry of Education, Beijing University of Posts and Telecommunications), in a paper accepted by IEEE Vehicular Technology Magazine, address direct satellite-to-device (DS2D) communications from two angles that the paper treats as a single system: cooperative resource management for authorized users, and non-cooperative monitoring of unauthorized or unknown transmissions sharing the same spectrum. For the cooperative side, user equipment can be dynamically associated with either a LEO satellite or a terrestrial base station each time slot. The authors propose a lightweight channel-estimation module with adaptive Doppler compensation (LCEADC) that uses orbital ephemeris and ground-terminal location to analytically pre-compensate the expected Doppler offset, compresses the raw channel observation from 128 to 64 dimensions with a compressed-embedding mechanism that incorporates constellation geometric-perception coding, replaces standard self-attention with a lightweight linear-attention module, and refines features through a three-layer cascaded feedforward network with depthwise-separable convolutions. The resulting Doppler-compensated channel state estimate, together with node load and user task demand, feeds a dueling double deep Q-network (D3QN) agent that makes the per-slot satellite-vs-terrestrial association decision to minimize average end-to-end latency, balancing satellites' longer propagation paths and limited onboard capacity against terrestrial base stations' lower latency but greater congestion exposure.

For the non-cooperative side, the paper reframes blind detection of unknown-standard signals as multi-class semantic segmentation on time-frequency spectrograms produced by short-time Fourier transform: a frozen pre-trained Vision Transformer backbone is adapted to spectrogram images with lightweight adapter modules, an automatic prompt-generation mechanism removes the need for manual point/box inputs, and a redesigned mask decoder performs category-aware segmentation, distinguishing standards such as LTE and 5G NR directly in the time-frequency domain while also estimating center frequency, bandwidth, and duration. A separate automatic modulation classification (AMC) model (AVDSDN) combines an adaptive variational-mode-decomposition denoising stage, a dual-stream CNN/Transformer feature extractor (a CNN stream for multi-scale local spectral features with soft-thresholding denoising, and a deformable-attention Transformer stream for long-range temporal structure), and cross-stream attention fusion. On simulation, the proposed LCEADC-D3QN offloading scheme improves average end-to-end latency by up to 225% over static all-satellite, all-base-station, and random association policies; the segmentation-based detector reaches a reported average presence-detection probability of 90.5% for DS2D signals (with a 21.7% IoU gain and a false-alarm-rate reduction from 9.2% to 4.5% versus a stated Baseline 2 on LTE); and AVDSDN reaches 91.6% modulation-recognition accuracy at high SNR and a 9.4% accuracy gain over a TLDNN baseline in the -20 to 0 dB low-SNR range (70.44% vs. 61.15%), at roughly 5-6 ms end-to-end latency per signal segment with INT8 quantization, across 10 modulation classes (BPSK through 256QAM).

## Summary (ZH)
北京邮电大学"泛网无线通信"教育部重点实验室的 Huang、Ni、Lv、Zhang、Zheng、Zhang、Gong 与 Feng，在一篇已被 IEEE《车载技术杂志》（Vehicular Technology Magazine）接收的论文中，从两个角度处理卫星直连终端（DS2D）通信，并将其视为同一个系统的两个方面：面向授权用户的协作式资源管理，以及面向同频段未授权或未知发射的非协作式监测。在协作侧，用户设备在每个时隙可动态关联至 LEO 卫星或地面基站。作者提出一个具备自适应多普勒补偿的轻量级信道估计模块（LCEADC），利用轨道星历与地面终端位置信息，解析式地预补偿预期多普勒频偏；通过一种融合星座几何感知编码的压缩嵌入机制，将原始信道观测从 128 维压缩到 64 维；用轻量级线性注意力模块替代标准自注意力；并通过带深度可分离卷积的三层级联前馈网络细化特征。得到的多普勒补偿信道状态估计，连同节点负载与用户任务需求，一并输入到一个对偶双深度 Q 网络（D3QN）智能体，由其在每个时隙做出卫星/地面基站的关联决策，以最小化平均端到端时延，在卫星传播路径更长、星上容量有限，与地面基站时延更低但更易拥塞之间做权衡。

在非协作侧，论文把对未知制式信号的盲检测，重新表述为在短时傅里叶变换（STFT）生成的时频谱图上做多类语义分割：冻结一个预训练的视觉 Transformer（ViT）骨干网络，通过轻量适配器模块将其适配到谱图图像；引入自动提示生成机制，免去人工点/框输入；并重新设计掩码解码器以实现类别感知的分割，可直接在时频域区分 LTE、5G NR 等制式，同时估计中心频率、带宽与持续时间。另有一个独立的自动调制识别（AMC）模型（AVDSDN），结合自适应变分模态分解去噪、CNN/Transformer 双流特征提取（CNN 流提取多尺度局部谱特征并做软阈值去噪，可变形注意力 Transformer 流建模长程时序结构），以及跨流注意力融合。仿真结果显示：所提出的 LCEADC-D3QN 卸载方案相对全卫星、全基站、随机关联等静态策略，平均端到端时延最高改善 225%；基于分割的检测器对 DS2D 信号的平均存在检测概率报告为 90.5%（相对所述 Baseline 2，在 LTE 上 IoU 提升 21.7%，虚警率从 9.2% 降至 4.5%）；AVDSDN 在高信噪比下调制识别准确率达 91.6%，在 -20 至 0 dB 低信噪比区间相对 TLDNN 基线取得 9.4% 的准确率增益（70.44% 对 61.15%），在 INT8 量化下单信号段端到端时延约为 5-6 毫秒，覆盖 BPSK 至 256QAM 共 10 种调制类型。

## Key technical points (EN)
- **Affiliation:** all eight authors, Key Laboratory of Universal Wireless Communications (Ministry of Education), Beijing University of Posts and Telecommunications; accepted by IEEE Vehicular Technology Magazine (DOI 10.1109/MVT.2026.3720837).
- **Cooperative task-offloading system:** per-slot binary association (LEO satellite vs. terrestrial BS) via a dueling double deep Q-network (D3QN); state = Doppler-compensated CSI + node load + user task demand; objective = minimize average end-to-end latency.
- **LCEADC channel-estimation module:** analytic Doppler pre-compensation from orbital ephemeris + ground-terminal location; 128→64-dim compressed embedding with constellation geometric-perception coding; lightweight linear attention (replacing self-attention); 3-layer cascaded feedforward network with depthwise-separable convolutions.
- **Non-cooperative signal detection (SAM-based):** STFT spectrograms reframed as multi-class semantic segmentation; frozen pretrained ViT backbone + lightweight adapters; automatic prompt generation (no manual point/box input); redesigned mask decoder distinguishes standards (e.g. LTE, 5G NR) and estimates center frequency, bandwidth, duration.
- **Automatic modulation classification (AVDSDN):** adaptive VMD denoising → dual-stream CNN (multi-scale local spectral features, soft-thresholding) + deformable-attention Transformer (long-range temporal) → cross-stream attention fusion; 10 modulation classes (BPSK, QPSK, 8PSK, 16PSK, 4PAM, 8PAM, 32/64/128/256QAM), SNR range -20 to 20 dB.
- **Headline results:** offloading — up to 225% average latency reduction vs. static all-satellite/all-BS/random association; detection — 90.5% average presence-detection probability on DS2D signals (LTE: +21.7% IoU, +13.9% F1, false-alarm 9.2%→4.5% vs. Baseline 2); AMC — 91.6% accuracy at high SNR, 70.44% at low SNR (-20 to 0 dB) vs. TLDNN's 61.15% (+9.4pp), ~5-6 ms end-to-end latency per segment with INT8 quantization.

## Key technical points (ZH)
- **单位：** 全部八位作者均来自北京邮电大学"泛网无线通信"教育部重点实验室；论文已被 IEEE《车载技术杂志》接收（DOI 10.1109/MVT.2026.3720837）。
- **协作式任务卸载系统：** 每时隙的二元关联决策（LEO 卫星 vs. 地面基站），由对偶双深度 Q 网络（D3QN）实现；状态 = 多普勒补偿后的 CSI + 节点负载 + 用户任务需求；目标为最小化平均端到端时延。
- **LCEADC 信道估计模块：** 基于轨道星历与地面终端位置的解析式多普勒预补偿；融合星座几何感知编码的 128→64 维压缩嵌入；以轻量级线性注意力替代自注意力；带深度可分离卷积的三层级联前馈网络。
- **非协作式信号检测（基于 SAM）：** 将 STFT 时频谱图上的检测重新表述为多类语义分割；冻结的预训练 ViT 骨干网络 + 轻量适配器；自动提示生成（无需人工点/框输入）；重新设计的掩码解码器可区分 LTE、5G NR 等制式，并估计中心频率、带宽与持续时间。
- **自动调制识别（AVDSDN）：** 自适应 VMD 去噪 → CNN 双流（多尺度局部谱特征，软阈值去噪）+ 可变形注意力 Transformer 流（长程时序建模）→ 跨流注意力融合；覆盖 10 种调制类型（BPSK、QPSK、8PSK、16PSK、4PAM、8PAM、32/64/128/256QAM），信噪比范围 -20 至 20 dB。
- **主要结果：** 卸载方案相对静态的全卫星/全基站/随机关联策略，平均时延最高改善 225%；检测方案对 DS2D 信号的平均存在检测概率为 90.5%（LTE 上相对 Baseline 2：IoU +21.7%、F1 +13.9%、虚警率 9.2%→4.5%）；AMC 方案高信噪比下准确率 91.6%，低信噪比（-20 至 0 dB）下为 70.44%，相对 TLDNN 基线的 61.15% 提升 9.4 个百分点，INT8 量化下单信号段端到端时延约 5-6 毫秒。

## Why it matters / what's new (EN)
This knowledge base's sat-direct-device thread has so far tracked physical-layer link design for the cooperative link itself — Doppler-aware random-access preamble design (2026-08-17 HFM-inspired PRACH), aggressive NOMA/DFT-s-OFDM uplink waveforms (2026-08-19), semi-blind NTN channel estimation (2026-08-27), and DSSS-based signal authentication for LEO satellites (2026-08-31) — but has not yet covered spectrum-monitoring or unauthorized-signal detection as a DS2D concern, nor treated resource allocation (which network a device should use) and RF-environment awareness (what else is transmitting nearby) as parts of one system. This is the first entry here to combine both: a D3QN-based cooperative offloading decision that itself depends on a Doppler-compensated channel-estimation pipeline, alongside a separate, foundation-model-based (frozen ViT + Segment-Anything-style decoder) non-cooperative detection and modulation-classification pipeline for the same DS2D spectrum. It gives the sat-direct-device bin its first data point on applying vision-foundation-model adaptation techniques (frozen backbone + lightweight adapters + automatic prompting) to satellite spectrum sensing, a technique family already tracked elsewhere in this knowledge base for other domains but not previously for direct-to-device satellite signal monitoring.

## Why it matters / what's new (ZH)
本知识库的 sat-direct-device 线索此前主要追踪协作链路自身的物理层设计——受多普勒感知启发的随机接入前导设计（2026-08-17 HFM 启发式 PRACH）、激进 NOMA/DFT-s-OFDM 上行波形（2026-08-19）、NTN 半盲信道估计（2026-08-27），以及面向 LEO 卫星的 DSSS 信号鉴权（2026-08-31）——但尚未把频谱监测或未授权信号检测纳入 DS2D 的关注范围，也未曾把"设备该接入哪个网络"的资源分配问题与"周边还有什么在发射"的射频环境感知问题作为同一系统的两部分处理。本知识库中首个将二者结合的条目：一个依赖多普勒补偿信道估计流水线的 D3QN 协作式卸载决策，与一个基于基础模型（冻结 ViT + 类 Segment-Anything 解码器）的独立非协作检测与调制识别流水线，共同作用于同一段 DS2D 频谱。这为 sat-direct-device 板块补上了首个数据点：将视觉基础模型的适配技术（冻结骨干网络 + 轻量适配器 + 自动提示）应用于卫星频谱感知——该技术路线此前已在本知识库其他领域被追踪，但尚未用于卫星直连终端的信号监测场景。

## Images

None.
