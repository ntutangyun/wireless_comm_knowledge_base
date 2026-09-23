---
id: 2026-09-23_arxiv-winerf-cone-sampling-wifi-csi-neural-field
date_published: 2026-08-24
date_found: 2026-09-23
technology: wifi
type: academic-paper
title_en: "WiNeRF: Measurement Constrained Radiance Fields for Actionable Wireless Channel Modeling"
title_zh: "WiNeRF：面向可操作无线信道建模的测量约束辐射场"
url: "https://arxiv.org/abs/2609.22132"
source_quality: full
topics: [WiFi-sensing, CSI, neural-radiance-field, beamforming, AoA, RSSI-mapping]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

This paper (Saif Ur Rahman, Rafid Umayer Murshed, Anton Dmitriev, Cagri Tanriover, Rahul C. Shah, Elahé Soltanaghai; accepted to EWSN 2026) presents WiNeRF, a neural-field framework -- in the lineage of Neural Radiance Fields (NeRF) from computer vision -- that learns a spatially continuous, complex-valued representation of a Wi-Fi wireless channel directly from sparse channel state information (CSI) collected by a commodity Wi-Fi router, without external priors such as known room geometry, camera-based visual context, or pre-estimated angle-of-arrival (AoA) information that the paper says prior neural-field wireless models (NeRF2, NeWRF) require. The paper's framing is that practical embedded Wi-Fi platforms operate with few antennas, narrow bandwidth, and sparse, noisy CSI measurements, and that rather than treating those limits as noise to be trained around, WiNeRF builds them directly into the model as inductive biases.

Three design components implement this. First, in place of NeRF's infinitesimally thin sampling rays (which implicitly assume arbitrarily fine angular resolution), WiNeRF samples along volumetric cones whose angular width is set from the receive antenna array's actual observability -- for a uniform linear array, this is anisotropic: narrow in azimuth (fine spatial resolution) but wide in elevation (matching the array's inherent elevation ambiguity), discretized into Gaussian-weighted conical frustums for differentiable learning. Second, because CSI aggregates multipath contributions at very different physical scales (walls at coarse scale, furniture edges at fine scale), a single-resolution MLP tends to oversmooth; WiNeRF instead uses a multi-resolution hash-grid scene representation (in the style of Instant-NGP) so coarse and fine spatial detail can both be captured with a compact model. Third, rather than regressing the CSI's absolute phase -- which is dominated by per-packet carrier- and sampling-frequency-offset artifacts specific to the measuring hardware, not by propagation -- WiNeRF trains against a relative-phase loss computed between reference antenna-element pairs, preserving the spatial phase differences that encode AoA and relative time-of-flight while discarding the unreliable device-specific component.

WiNeRF was evaluated on an ASUS RT-AX86U commodity router (4 receive antennas, 50 OFDM subcarriers, 20 MHz bandwidth, 5 GHz band) using Nexmon CSI extraction and the WiROS collection framework, with ground-truth pose from an Intel RealSense D435i depth camera doing SLAM, across three indoor testbeds (a small meditation room, a mid-size office, and a larger conference room with non-line-of-sight regions) -- about 30,000 synchronized CSI-pose samples in total, evaluated with 5-fold cross-validation. Against the NeRF2 and NeWRF baselines (plus VAE and DC-GAN channel-synthesis baselines), WiNeRF reports a median prediction SNR of 5.3 dB, a 3.0-6.7 dB (roughly 3x) improvement, while requiring far sparser measurement density than NeRF2 (which the paper says needs about 178 measurements/ft^3) and, unlike NeWRF, no pre-estimated AoA priors. On downstream tasks run directly on WiNeRF's predicted CSI without any task-specific retraining, the paper reports 11.4 dB median beamforming gain (within 0.6 dB / about 5% of the oracle upper bound using true CSI), 13.0 degree median line-of-sight AoA error via the MUSIC algorithm, and 1.8-2.3 dB median RSSI-coverage-mapping error.

## Summary (ZH)

本文（Saif Ur Rahman、Rafid Umayer Murshed、Anton Dmitriev、Cagri Tanriover、Rahul C. Shah、Elahé Soltanaghai；已被 EWSN 2026 接收）提出了 WiNeRF，一种源自计算机视觉神经辐射场（NeRF）谱系的神经场框架，可直接从商用 Wi-Fi 路由器采集的稀疏信道状态信息（CSI）中，学习出一个空间连续、复数值的 Wi-Fi 无线信道表示，而无需依赖论文所称此前神经场无线信道模型（NeRF2、NeWRF）所需的外部先验，例如已知的房间几何结构、基于摄像头的视觉上下文，或预先估计的到达角（AoA）信息。论文的出发点是：实际部署的嵌入式 Wi-Fi 平台受限于少量天线、有限带宽以及稀疏且带噪的 CSI 测量数据，与其将这些限制当作需要被训练"克服"的噪声，不如将其直接构建为模型的归纳偏置。

该框架通过三项设计实现这一思路。其一，用体积锥体采样取代 NeRF 中无限细的采样射线（后者隐含地假设了任意精细的角度分辨率）；锥体的角度宽度由接收天线阵列真实的可观测性决定——对于均匀线阵而言，这种宽度是各向异性的：方位角方向较窄（空间分辨率高），俯仰角方向较宽（与阵列固有的俯仰模糊性相匹配），并离散为若干个高斯加权的锥台以实现可微分学习。其二，由于 CSI 聚合了跨越不同物理尺度的多径分量（墙体对应粗尺度、家具边缘对应细尺度），单一分辨率的 MLP 容易产生过度平滑；WiNeRF 转而采用类似 Instant-NGP 风格的多分辨率哈希网格场景表示，使一个紧凑模型能同时捕捉粗粒度与细粒度的空间细节。其三，WiNeRF 并不直接回归 CSI 的绝对相位——绝对相位主要由每个数据包特有的载波频偏与采样频偏等硬件相关伪影主导，而非由传播过程决定——而是基于参考天线单元对之间计算的相对相位损失进行训练，从而保留编码 AoA 与相对飞行时间的空间相位差异，同时舍弃不可靠的设备相关分量。

WiNeRF 的评测平台为一台商用 ASUS RT-AX86U 路由器（4 根接收天线、50 个 OFDM 子载波、20 MHz 带宽、5 GHz 频段），使用 Nexmon 进行 CSI 提取、WiROS 框架进行数据采集，并以 Intel RealSense D435i 深度相机的 SLAM 定位作为姿态真值，覆盖三个室内测试场景（小型冥想室、中型办公室，以及包含非视距区域的较大会议室），共采集约 3 万组同步的 CSI-姿态样本，并采用五折交叉验证进行评测。与 NeRF2、NeWRF 两个基线（以及 VAE、DC-GAN 两个信道合成基线）相比，WiNeRF 的预测 SNR 中位数为 5.3 dB，相较基线提升 3.0–6.7 dB（约 3 倍），同时所需的测量密度远低于 NeRF2（论文称后者需约 178 次测量/立方英尺），且与 NeWRF 不同，无需预先估计的 AoA 先验。在直接基于 WiNeRF 预测 CSI、且未针对具体任务再训练的下游任务上，论文报告：波束成形增益中位数为 11.4 dB（与使用真实 CSI 的 oracle 上界相比差距仅 0.6 dB，约 5%）；基于 MUSIC 算法的视距 AoA 误差中位数为 13.0 度；RSSI 覆盖地图误差中位数为 1.8–2.3 dB。

## Key technical points (EN)

- **Cone-based sampling**: replaces NeRF's infinitesimal rays with volumetric cones whose angular width is set from the receive array's actual angular resolution (anisotropic for a ULA: narrow azimuth, wide elevation), discretized into Gaussian-weighted frustums.
- **Multi-resolution hash-grid scene representation** (Instant-NGP style) to capture multipath contributions at both coarse (walls) and fine (furniture) spatial scales without oversmoothing.
- **Relative-phase training loss** between reference antenna pairs, removing per-packet CFO/SFO device artifacts from commodity CSI while preserving the AoA/ToF-carrying spatial phase differences.
- **Hardware/testbed**: ASUS RT-AX86U (4 Rx antennas, 50 subcarriers, 20 MHz, 5 GHz), Nexmon CSI + WiROS, RealSense D435i SLAM ground truth; 3 indoor environments (meditation room, office, conference room with NLoS), ~30k samples, 5-fold CV; 2.73M learnable parameters, trained on dual RTX A6000 GPUs in 15-30 min/fold.
- **Headline numbers**: 5.3 dB median prediction SNR (+3.0-6.7 dB / ~3x vs. NeRF2/NeWRF); 11.4 dB median beamforming gain (~0.6 dB / 5% from the oracle); 13.0 degree median LoS AoA error (MUSIC); 1.8-2.3 dB median RSSI coverage-mapping error.
- **No task-specific retraining**: predicted complex CSI feeds directly into standard signal-processing pipelines (beamforming via equal-gain combining, AoA via MUSIC, RSSI coverage querying).
- **Lower data requirement than NeRF2** (which the paper cites as needing ~178 measurements/ft^3) and no AoA-prior dependency unlike NeWRF.

## Key technical points (ZH)

- **锥体采样**：以体积锥体取代 NeRF 的无限细采样射线，锥体角宽度由接收阵列真实的角度分辨率决定（对均匀线阵呈各向异性：方位角窄、俯仰角宽），并离散为高斯加权的锥台。
- **多分辨率哈希网格场景表示**（Instant-NGP 风格），可同时捕捉粗尺度（墙体）与细尺度（家具）多径分量，避免过度平滑。
- **相对相位训练损失**：基于参考天线对计算，剔除商用 CSI 中每包特有的载波/采样频偏硬件伪影，同时保留承载 AoA 与飞行时间信息的空间相位差。
- **硬件/测试平台**：ASUS RT-AX86U（4 接收天线、50 子载波、20 MHz、5 GHz），Nexmon CSI + WiROS 采集，RealSense D435i SLAM 提供姿态真值；3 个室内场景（冥想室、办公室、含非视距区域的会议室），约 3 万样本，五折交叉验证；273 万可学习参数，双 RTX A6000 GPU 训练，每折 15–30 分钟。
- **核心数据**：预测 SNR 中位数 5.3 dB（相较 NeRF2/NeWRF 提升 3.0–6.7 dB，约 3 倍）；波束成形增益中位数 11.4 dB（与 oracle 上界差距约 0.6 dB / 5%）；基于 MUSIC 的视距 AoA 误差中位数 13.0 度；RSSI 覆盖地图误差中位数 1.8–2.3 dB。
- **无需针对下游任务再训练**：预测得到的复数 CSI 可直接输入标准信号处理流程（等增益合并波束成形、MUSIC AoA 估计、RSSI 覆盖查询）。
- **数据需求低于 NeRF2**（论文称后者需约 178 次测量/立方英尺），且不像 NeWRF 那样依赖预先估计的 AoA 先验。

## Why it matters / what's new (EN)

The KB already carries two prior entries in this neural-field-for-Wi-Fi-channel-modeling line: 2026-08-19_arxiv-dorf-doppler-radiance-fields-wifi-sensing (Doppler radiance fields for gesture sensing) and 2026-08-20_arxiv-glocfm-geometry-aware-wifi-localization (a geometry-aware localization foundation model). WiNeRF is a different point in that design space: rather than targeting a specific downstream sensing task, it models the channel itself as a reusable, complex-valued, task-agnostic representation, explicitly designed around commodity hardware's antenna/bandwidth/measurement-density limits rather than external priors -- and validates that the resulting CSI works directly with classical beamforming and AoA pipelines with no additional training. The relative-phase loss is also a concrete, reusable answer to a problem (commodity-CSI phase unreliability from CFO/SFO) that affects most CSI-based sensing and modeling work in this KB's `sensing-csi` bin.

## Why it matters / what's new (ZH)

知识库中此前已有两条与"面向 Wi-Fi 信道建模的神经场"相关的条目：2026-08-19_arxiv-dorf-doppler-radiance-fields-wifi-sensing（用于手势感知的多普勒辐射场）与 2026-08-20_arxiv-glocfm-geometry-aware-wifi-localization（融合场景几何的定位基础模型）。WiNeRF 在这一技术脉络中处于不同的位置：它并不针对某个具体的下游感知任务，而是将信道本身建模为一个可复用、复数值、与任务无关的表示，其设计明确围绕商用硬件在天线数量/带宽/测量密度上的实际限制展开，而非依赖外部先验，并且验证了所得 CSI 可无需额外训练即直接用于经典波束成形与 AoA 处理流程。其相对相位损失，也为本知识库 `sensing-csi` 分类下多数基于 CSI 的感知与建模工作普遍面临的问题（商用 CSI 因载波/采样频偏导致的相位不可靠）提供了一个具体、可复用的解法。

## Images

![WiNeRF cone-sampling architecture vs. ray-based NeRF baselines | WiNeRF 锥体采样架构与基于射线的 NeRF 基线对比](https://arxiv.org/html/2609.22132v1/figures/sensys_results/Fig1_4.png)
![RSSI coverage-mapping heatmaps produced from WiNeRF's predicted CSI | 基于 WiNeRF 预测 CSI 生成的 RSSI 覆盖热力图](https://arxiv.org/html/2609.22132v1/figures/sensys_results/Figure_RSSI_Heatmap_edit_2.png)
![Conference-room testbed with non-line-of-sight regions | 含非视距区域的会议室测试场景](https://arxiv.org/html/2609.22132v1/figures/sensys_results/conference_room.png)
