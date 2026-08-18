---
id: 2026-08-18_arxiv-jammertest-2025-gnss-interference-dataset-ml
date_published: 2026-08-16
date_found: 2026-08-18
type: academic-paper
technology: satellite
title_en: "Multi-Source GNSS Interference at Jammertest Norway 2025 — Fraunhofer IIS releases a real-world jamming/spoofing/meaconing IQ dataset and benchmarks 17 time-series models: ~99 % within-area accuracy collapses to 4.6–21.9 % across sites"
title_zh: "Jammertest Norway 2025 多源 GNSS 干扰分析——Fraunhofer IIS 发布真实场景压制/欺骗/转发 IQ 数据集并对 17 种时序模型做基准：同场地约 99% 准确率跨场地骤降至 4.6–21.9%"
url: "https://arxiv.org/abs/2608.15819"
source_quality: full
topics: [GNSS, jamming, spoofing, meaconing, interference-classification, Jammertest, dataset, CRPA, domain-shift, spectral-separation-coefficient, YOLOv8, RF-DETR, ION-GNSS+]
topic_primary: sat-ai
topics_secondary: [sat-iot]
novelty_score: 2
---

## Summary (EN)
Heublein, Cortés Vidal, Feigl, Rügamer and Ott (Fraunhofer IIS, Nürnberg; submitted 16 Aug 2026, eess.SP; accepted for ION GNSS+ 2026) report on measurements taken at **Jammertest 2025**, the Norwegian government-hosted open-air GNSS jamming/spoofing exercise on Andøya, and release the resulting dataset. Recordings were made in two outdoor areas — Area 1 (community surroundings near Bleik) and Area 2 (a parking lot with surveyed reference points) — over multiple days, with two synchronized receiver front-ends: an **Innosense module** with a dual-band E1/E5 antenna (50 MHz bandwidth) and a **2×2 controlled-reception-pattern antenna (CRPA) array** (100 MHz), both sampled at 81 MHz / 8-bit on GPS L1 / Galileo E1 and E5. The scenario catalogue covers continuous-wave emitters (~0.1 MHz wide), frequency sweeps/chirps (~20 MHz), PRN-modulated noise jamming, meaconing, spoofing and **multi-emitter configurations** across single- and multi-band settings, so the data captures overlapping interferers rather than isolated ones.

The paper then benchmarks **17 time-series architectures** on the raw IQ / spectrogram data — LSTM, GRU, FCN, ResNet, ResCNN, LSTM-FCN, GRU-FCN, MLSTM-FCN, TCN, InceptionTime, XceptionTime, OmniScale, TST (transformer), XCM, gMLP and TSPerceiver among them — on two tasks: interference *classification* (waveform type) and multi-task *characterization* (bandwidth, signal strength). Within a single area, classification reaches ~99 % (Area 1) and 97–99 % (Area 2) for both front-ends; but a model trained on Area 1 and tested on Area 2 collapses to **21.86 % (Innosense) and 4.59 % (CRPA)**, a domain shift the authors attribute to environment and receiver dependence. Training jointly on both areas restores ~89–92 % characterization accuracy, with bandwidth errors of ~0.35–0.52 MHz (Innosense) versus ~2.9–3.7 MHz (CRPA) and signal-strength errors from sub-dB to several dB. Pretraining on Sionna ray-tracing simulations transfers poorly (37.8 % on real data). Convolutional and hybrid models beat pure recurrent ones for characterization.

Two further components make the work receiver- and deployment-aware: a **spectral-separation-coefficient (SSC)** framework that maps a measured interference spectrum and power to the effective carrier-to-noise-density (C/N₀) degradation a GNSS receiver would see — an impact metric independent of jammer type — and **object detectors (YOLOv8s, RF-DETR)** pretrained on the Fordatis spectrogram dataset to localize simultaneous emitters in spectrograms (RF-DETR fewer/more conservative boxes, YOLOv8s finer-grained). The dataset is available via Fraunhofer's GitLab and Zenodo (record 21332689).

## Summary (ZH)
Heublein、Cortés Vidal、Feigl、Rügamer 与 Ott（Fraunhofer IIS，纽伦堡；2026 年 8 月 16 日提交，eess.SP；已被 ION GNSS+ 2026 接收）报告在 **Jammertest 2025**——挪威政府在安岛举办的开放场地 GNSS 压制/欺骗演练——上采集的测量，并发布数据集。记录在两个室外区域进行——区域 1（Bleik 附近社区环境）与区域 2（带测绘参考点的停车场）——历时多日，采用两套同步接收前端：带 E1/E5 双频天线的 **Innosense 模块**（50 MHz 带宽）与 **2×2 受控接收方向图天线（CRPA）阵列**（100 MHz），均以 81 MHz / 8 bit 采样 GPS L1 / Galileo E1 与 E5。场景目录涵盖连续波（约 0.1 MHz 宽）、扫频/线性调频（约 20 MHz）、PRN 调制噪声压制、转发式欺骗（meaconing）、生成式欺骗以及单/多频段下的 **多发射源组合**，因此数据刻画的是相互重叠而非孤立的干扰源。

论文随后在原始 IQ / 时频谱数据上对 **17 种时序架构** 做基准——包括 LSTM、GRU、FCN、ResNet、ResCNN、LSTM-FCN、GRU-FCN、MLSTM-FCN、TCN、InceptionTime、XceptionTime、OmniScale、TST（Transformer）、XCM、gMLP、TSPerceiver——任务有二：干扰*分类*（波形类型）与多任务*表征*（带宽、信号强度）。同一区域内，两套前端分类准确率约 99%（区域 1）与 97–99%（区域 2）；但在区域 1 训练、区域 2 测试的模型骤降至 **21.86%（Innosense）与 4.59%（CRPA）**，作者将此域偏移归因于环境与接收机依赖。两区域联合训练可恢复约 89–92% 的表征准确率，带宽误差约 0.35–0.52 MHz（Innosense）对 2.9–3.7 MHz（CRPA），信号强度误差从亚 dB 到数 dB。基于 Sionna 射线追踪仿真的预训练迁移效果差（真实数据上 37.8%）。卷积与混合模型在表征任务上优于纯循环模型。

另有两项组件使工作面向接收机与部署：**频谱分离系数（SSC）** 框架把实测干扰频谱与功率映射为 GNSS 接收机将经历的有效载噪比（C/N₀）劣化——一个与压制器类型无关的影响度量；以及在 Fordatis 时频谱数据集上预训练的 **目标检测器（YOLOv8s、RF-DETR）**，用于在时频谱中定位同时存在的多个发射源（RF-DETR 框更少更保守，YOLOv8s 更细粒度）。数据集经 Fraunhofer GitLab 与 Zenodo（记录 21332689）发布。

## Key technical points (EN)
- **Venue/data:** Jammertest 2025, Andøya (Norway); Areas 1 (Bleik community) and 2 (surveyed parking lot); multi-day, synchronized parallel recordings; dataset on Fraunhofer GitLab + Zenodo 21332689.
- **Front-ends:** Innosense module, dual-band E1/E5 antenna, 50 MHz BW; 2×2 CRPA array, 100 MHz BW; both 81 MHz / 8-bit; GPS L1, Galileo E1/E5, multi-band.
- **Scenarios:** CW (~0.1 MHz), sweep/chirp (~20 MHz), PRN noise, meaconing, spoofing, multi-emitter, single- and multi-band.
- **Models:** 17 time-series architectures (LSTM, GRU, FCN, ResNet, ResCNN, LSTM-FCN, GRU-FCN, MLSTM-FCN, TCN, InceptionTime, XceptionTime, OmniScale, TST, XCM, gMLP, TSPerceiver …); tasks = classification + multi-task characterization (bandwidth, power).
- **Results:** within-area ~99 % (Area 1), 97–99 % (Area 2); cross-area 21.86 % (Innosense) / 4.59 % (CRPA); joint training 89–92 %; BW error 0.35–0.52 MHz vs 2.9–3.7 MHz; Sionna-sim pretraining → 37.8 % on real data; conv/hybrid > recurrent.
- **Impact metric:** spectral separation coefficient (SSC) → effective C/N₀ degradation, jammer-type-agnostic.
- **Multi-source localization:** YOLOv8s / RF-DETR on spectrograms, pretrained on Fordatis.

## Key technical points (ZH)
- **场地/数据：** Jammertest 2025，挪威安岛；区域 1（Bleik 社区）与区域 2（测绘停车场）；多日同步并行记录；数据集见 Fraunhofer GitLab + Zenodo 21332689。
- **前端：** Innosense 模块、E1/E5 双频天线、50 MHz 带宽；2×2 CRPA 阵列、100 MHz 带宽；均 81 MHz / 8 bit；GPS L1、Galileo E1/E5、多频段。
- **场景：** CW（约 0.1 MHz）、扫频/调频（约 20 MHz）、PRN 噪声、转发欺骗、生成欺骗、多发射源、单/多频段。
- **模型：** 17 种时序架构（LSTM、GRU、FCN、ResNet、ResCNN、LSTM-FCN、GRU-FCN、MLSTM-FCN、TCN、InceptionTime、XceptionTime、OmniScale、TST、XCM、gMLP、TSPerceiver 等）；任务 = 分类 + 多任务表征（带宽、功率）。
- **结果：** 同区域约 99%（区域 1）、97–99%（区域 2）；跨区域 21.86%（Innosense）/ 4.59%（CRPA）；联合训练 89–92%；带宽误差 0.35–0.52 MHz 对 2.9–3.7 MHz；Sionna 仿真预训练 → 真实数据 37.8%；卷积/混合 > 循环。
- **影响度量：** 频谱分离系数（SSC）→ 有效 C/N₀ 劣化，与压制器类型无关。
- **多源定位：** 时频谱上的 YOLOv8s / RF-DETR，Fordatis 预训练。

## Why it matters / what's new (EN)
The KB's GNSS-security thread (2026-07-14 3GPP TDD-based spoofing detection, 2026-07-28 VLM-based spoofing detection, 2026-08-12 CORS networks as integrity sensors and rigid-covert swarm spoofing) has been about *detecting* spoofing with side information — timing, cameras, reference networks, swarm geometry. This entry adds the *RF-front-end* side of the problem with something the thread lacked: an **open, real-world, multi-emitter jamming + spoofing + meaconing IQ dataset from a government-run exercise**, recorded on both a consumer-grade dual-band module and a CRPA array, so classifiers can be tested against genuinely overlapping interferers rather than synthetic single-tone jammers. The headline result is a cautionary one for the AI-for-satellite bin: near-perfect within-site accuracy is essentially meaningless once the environment or the antenna changes (a 99 % → 4.6 % collapse across two areas a few kilometres apart), and simulation-only pretraining does not close that gap. The SSC-to-C/N₀ mapping is also a useful design pattern — reporting interference in terms of receiver-relevant degradation rather than waveform class — that transfers to NTN receivers facing the same L/S-band jammers. Limitations: results are per-exercise (Norwegian test scenarios), the two areas do not span urban multipath, and the object-detection component reuses a prior Fordatis dataset rather than being trained on the new recordings.

## Why it matters / what's new (ZH)
知识库的 GNSS 安全脉络（2026-07-14 基于 3GPP TDD 的欺骗检测、2026-07-28 基于视觉语言模型的欺骗检测、2026-08-12 CORS 网络作为完好性传感器与刚性隐蔽蜂群欺骗）此前聚焦于借助旁路信息——定时、摄像头、参考网络、蜂群几何——*检测*欺骗。本条目补上该脉络缺失的*射频前端*一侧：一个 **来自政府主办演练的开放、真实、多发射源压制 + 欺骗 + 转发 IQ 数据集**，同时用消费级双频模块与 CRPA 阵列录制，使分类器可在真正相互重叠的干扰源而非合成单音压制器上受检。核心结论对 AI-for-satellite 板块是一记警示：一旦环境或天线改变，同场地近乎完美的准确率几乎毫无意义（相距数公里的两区域间 99% → 4.6% 的崩塌），仅靠仿真预训练也无法弥合。SSC 到 C/N₀ 的映射也是一个有用的设计范式——以接收机相关的劣化而非波形类别来报告干扰——可迁移到面对同一 L/S 频段压制器的 NTN 接收机。局限：结果限于单次演练（挪威测试场景），两个区域未覆盖城市多径，且目标检测部分复用既有 Fordatis 数据集而非在新录音上训练。
