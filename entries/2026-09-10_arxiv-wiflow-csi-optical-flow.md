---
id: 2026-09-10_arxiv-wiflow-csi-optical-flow
date_published: 2026-09-02
date_found: 2026-09-10
technology: wifi
type: academic-paper
title_en: "WiFlow: Estimating Optical Flow using WiFi Channel State Information"
title_zh: "WiFlow：基于 Wi-Fi 信道状态信息的光流估计"
url: "https://arxiv.org/abs/2609.02452"
source_quality: full
topics: [CSI, sensing, optical-flow, dataset]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

Optical flow — per-pixel estimates of where and how fast objects are moving within a scene — is normally computed from camera frames, which raises privacy concerns and degrades in poor lighting. This paper asks whether the task can instead be performed using Wi-Fi Channel State Information (CSI), which changes as moving bodies perturb multipath propagation, without any camera at inference time. The authors evaluate five CSI preprocessing strategies (raw amplitude/phase, a "Quotient" normalization that divides each antenna's measurement by a reference antenna to cancel device-level phase offsets, an inverse-Fourier-transform variant, Savitzky-Golay smoothing, and PCA denoising) and find Quotient preprocessing gives the best moving-pixel and amplified error metrics, so it is used for all subsequent experiments. They then propose three CSI-to-flow model architectures built on a shared RAFT-style feature/context ResNet backbone with a convolutional-GRU refinement stage: WiFlowSimple (direct flow prediction), WiFlowRoI (a two-stage design that first predicts a moving-region mask, then predicts flow only within that region, inspired by Mask R-CNN), and WiFlowCombo (parallel flow and mask branches combined by element-wise multiplication). The three trade accuracy for compute: WiFlowSimple is fastest (23 ms inference, 22 GFLOPs, 380 MB) but produces noisier background predictions; WiFlowCombo is the most accurate on the overall and static-pixel error metrics but roughly doubles compute and memory (47 ms, 43 GFLOPs, 763 MB).

Because no existing dataset pairs CSI with ground-truth optical flow, the authors built one: an indoor room instrumented with a single-antenna USRP N2954-R transmitter broadcasting at 1 kHz and four 4-antenna Asus RT-AC86U routers (16 receive antennas total) extracting CSI via NexmonCSI firmware on an 80 MHz, channel-157 link, alongside two synchronized cameras (30 Hz side-view, 50 Hz overhead bird's-eye view). Ten subjects performed seven actions plus two control conditions (slow walking, fast walking, two-person slow walking with unequal motion ("Together"), collecting objects, kneeling, walking with a single arm rotation ("Mill"), waving, plus void and off-area controls) across 328 sequences totaling 164 minutes. Because no ground-truth optical-flow sensor exists, the authors generated "pseudo ground truth" flow labels by ensembling five state-of-the-art camera-based optical-flow methods (rpknet, ms_raft_p, sea_raft_m, memflow, dpflow) run on the camera frames, thresholding small motions to zero. The dataset is split both by time (75/3/22% train/val/test, same subjects across splits) and by subject (7/1/2 subjects, to test cross-subject generalization); results are similar across both splits, indicating the models generalize to unseen subjects. Increasing the number of receivers improves accuracy across all reported metrics up to 3 devices, with only minor gains beyond that — the paper reports this as a figure (its axes are labelled devices; antennas per device) without tabulated values, and all main experiments use all 16 antennas of the four receivers. The authors also show WiFlowCombo's accuracy is unaffected by reduced brightness and added camera noise, in contrast to a camera-based optical-flow baseline (MS-RAFT) that degrades sharply under the same conditions — illustrating the lighting-independence motivation for the CSI-based approach. The authors note the current models are trained and evaluated in a single environment and do not generalize to other rooms without retraining, and that output resolution and detail remain lower than camera-based optical flow.

## Summary (ZH)

光流——即场景中物体逐像素的运动方向与速度估计——通常依赖摄像头画面计算，但这会带来隐私顾虑，且在光照不佳时效果变差。本文探讨能否在推理阶段完全不使用摄像头，转而利用 Wi-Fi 信道状态信息（CSI）——它会随运动物体对多径传播的扰动而变化——来完成该任务。作者评估了五种 CSI 预处理策略（原始幅度/相位、将每根天线的测量值除以参考天线以抵消设备级相位偏移的"商"归一化、逆傅里叶变换变体、Savitzky-Golay 平滑，以及 PCA 去噪），发现"商"归一化在运动像素误差与放大误差指标上表现最佳，因此后续所有实验均采用该预处理方式。随后作者提出三种"CSI 到光流"模型架构，均基于共享的 RAFT 风格特征/上下文 ResNet 骨干网络与卷积 GRU 精炼阶段：WiFlowSimple（直接预测光流）、WiFlowRoI（受 Mask R-CNN 启发的两阶段设计，先预测运动区域掩码，再仅在该区域内预测光流）以及 WiFlowCombo（光流分支与掩码分支并行、通过逐元素相乘融合）。三者在精度与算力之间做出不同取舍：WiFlowSimple 最快（推理 23 毫秒，22 GFLOPs，380 MB），但背景预测噪声较大；WiFlowCombo 在总体误差与静态像素误差指标上最准确，但算力与内存开销约为前者两倍（47 毫秒，43 GFLOPs，763 MB）。

由于目前尚无将 CSI 与光流真值配对的数据集，作者自行构建了一个：在一间布置了单天线 USRP N2954-R 发射机（以 1 kHz 广播）与四台各 4 天线的华硕 RT-AC86U 路由器（共 16 根接收天线，通过 NexmonCSI 固件在 157 信道、80 MHz 带宽上提取 CSI）的室内房间中，配合两台同步摄像头（30 Hz 侧视角、50 Hz 俯视鸟瞰角）。10 名被试者完成 7 类动作加 2 类对照条件（慢走、快走、两人位置与方向不一致的慢走（“Together”）、拾取物品、跪姿、边走边做一次手臂旋转（“Mill”）、挥手，以及静止与区域外对照），共采集 328 段序列、总时长 164 分钟。由于不存在光流真值传感器，作者通过对摄像头画面运行五种最先进的基于摄像头的光流方法（rpknet、ms_raft_p、sea_raft_m、memflow、dpflow）取集成结果、并将微小运动阈值置零，生成"伪真值"光流标签。数据集分别按时间（75/3/22% 训练/验证/测试，各集合共用相同被试者）和按被试者（7/1/2 名被试者，用于检验跨被试者泛化能力）两种方式划分；两种划分下结果相近，说明模型能够泛化到未见过的被试者。接收设备数量增加至 3 台之前，各项指标均持续改善，超过 3 台后提升很小——论文以图的形式给出该结果（横轴标注为设备数；每设备天线数），未给出具体数值；主实验均使用四台接收机的全部 16 根天线。作者还表明，WiFlowCombo 的准确率在降低亮度并叠加摄像头噪声的条件下不受影响，而作为对照的基于摄像头的光流基线（MS-RAFT）在相同条件下则明显退化——这印证了采用 CSI 方案的"不依赖光照"动机。作者指出，当前模型在单一环境中训练与评估，若不重新训练则无法泛化到其他房间，且输出分辨率与细节仍低于基于摄像头的光流方法。

## Key technical points (EN)

- **Task framing**: recover dense optical flow (per-pixel motion direction/speed) from Wi-Fi CSI alone, with no camera used at inference time — a new task for CSI-based Wi-Fi sensing, distinct from prior CSI work on localization, pose estimation, or gesture recognition.
- **Preprocessing comparison**: five strategies evaluated (raw, Quotient inter-antenna normalization, inverse-Fourier, Savitzky-Golay smoothing, PCA); Quotient preprocessing selected for all downstream experiments based on best EPEM (moving-pixel error, 2.89) and EPEA (amplified error, 0.78) on the birdview+ split.
- **Three architectures**: WiFlowSimple (direct prediction, 23 ms / 22 GFLOPs / 380 MB), WiFlowRoI (mask-then-flow two-stage design, 26 ms / 22 GFLOPs / 380 MB), WiFlowCombo (parallel flow+mask branches, element-wise fusion, 47 ms / 43 GFLOPs / 763 MB; best on EPE and EPE_S — 0.17 and 0.02 on the birdview+ time split, vs 0.41 and 0.29 for WiFlowSimple — while WiFlowSimple retains the best moving-pixel error, EPE_M 2.89 vs 3.13).
- **New dataset**: 328 sequences / 164 minutes, 10 subjects, 7 actions plus 2 control conditions, collected with a single-antenna USRP N2954-R transmitter and four 4-antenna Asus RT-AC86U receivers (16 antennas total) via NexmonCSI on channel 157 at 80 MHz, with dual synchronized cameras (30 Hz side-view, 50 Hz bird's-eye) providing pseudo-ground-truth flow via an ensemble of five SOTA camera-based flow methods.
- **CSI-camera synchronization**: CSI sampled at 1000 Hz vs. camera 30-50 Hz; the videos are subsampled by keeping every fifth frame (50 Hz bird-view → 10 Hz effective, 30 Hz side-view → 6 Hz), and the "birdview+" configuration associates the latest K=100 CSI samples with each subsampled bird-view frame for maximum temporal context, versus K=10 for the sideview and birdview variants.
- **Receiver-count sensitivity**: accuracy improves across all reported metrics as receivers increase from 1 to 3 devices, with only minor gains beyond that; the paper presents this as a figure (axes: devices; antennas per device) without tabulated values.
- **Lighting robustness**: WiFlowCombo's accuracy is unaffected by simulated low-brightness/high-noise camera conditions, while the camera-based MS-RAFT baseline degrades sharply under the same conditions.
- **Cross-subject generalization**: subject-split and time-split results are comparable, indicating the models are not simply memorizing per-subject motion signatures.
- **Stated limitations**: single-room training/evaluation only (no cross-room generalization demonstrated), pseudo-ground-truth quality issues around shadow motion, degraded multi-person performance, and lower spatial resolution/detail than camera-based optical flow.

## Key technical points (ZH)

- **任务定义**：仅依靠 Wi-Fi CSI（推理阶段不使用摄像头）恢复稠密光流（逐像素运动方向/速度）——这是基于 CSI 的 Wi-Fi 感知的一项新任务，区别于此前 CSI 工作聚焦的定位、姿态估计或手势识别。
- **预处理对比**：评估了五种策略（原始、天线间"商"归一化、逆傅里叶变换、Savitzky-Golay 平滑、PCA）；根据在 birdview+ 划分上的最佳 EPEM（运动像素误差，2.89）与 EPEA（放大误差，0.78），后续所有实验均采用"商"归一化。
- **三种架构**：WiFlowSimple（直接预测，23 毫秒/22 GFLOPs/380 MB）、WiFlowRoI（先掩码后光流的两阶段设计，26 毫秒/22 GFLOPs/380 MB）、WiFlowCombo（光流与掩码分支并行、逐元素融合，47 毫秒/43 GFLOPs/763 MB；在 EPE 与 EPE_S 上最佳——birdview+ 时间划分上分别为 0.17 与 0.02，而 WiFlowSimple 为 0.41 与 0.29——但 WiFlowSimple 在运动像素误差上仍为最佳，EPE_M 2.89，优于 3.13）。
- **新数据集**：328 段序列/164 分钟，10 名被试者，7 类动作加 2 类对照条件，使用单天线 USRP N2954-R 发射机与四台各 4 天线的华硕 RT-AC86U 接收机（共 16 根天线）经 NexmonCSI 在 157 信道、80 MHz 带宽下采集，配合两台同步摄像头（30 Hz 侧视、50 Hz 俯视），通过五种最先进的基于摄像头的光流方法集成生成伪真值光流。
- **CSI 与摄像头同步**：CSI 采样率为 1000 Hz，摄像头为 30-50 Hz；视频按每五帧保留一帧的方式降采样（50 Hz 俯视→实际 10 Hz，30 Hz 侧视→实际 6 Hz），"birdview+"配置为每一帧降采样后的俯视画面关联最近的 K=100 个 CSI 样本，以获得最大时间上下文；sideview 与 birdview 变体则为 K=10。
- **接收机数量敏感性**：接收设备从 1 台增加到 3 台时各项指标均改善，超过 3 台后提升很小；论文以图的形式呈现（坐标轴为设备数；每设备天线数），未给出具体数值。
- **光照鲁棒性**：在模拟低亮度、高噪声的摄像头条件下，WiFlowCombo 的准确率不受影响，而基于摄像头的 MS-RAFT 基线在相同条件下明显退化。
- **跨被试者泛化**：按被试者划分与按时间划分的结果相近，说明模型并非单纯记忆了特定被试者的运动特征。
- **作者明确指出的局限**：仅在单一房间内训练与评估（未展示跨房间泛化能力）、伪真值在阴影运动附近存在质量问题、多人场景下性能下降，以及空间分辨率与细节仍低于基于摄像头的光流方法。

## Why it matters / what's new (EN)

This KB's `sensing-csi` bin has previously covered CSI-based respiration, pose, activity, and localization tasks. WiFlow adds a new downstream task — dense optical flow — to that list, along with a purpose-built paired CSI/video dataset (using pseudo-ground-truth from an ensemble of camera-based flow methods, since no direct optical-flow sensor exists) and a systematic comparison of CSI preprocessing choices. The authors' own novelty claim is about the dataset specifically — the abstract calls it "the first dataset for training and evaluating CSI-based optical flow estimators".

## Why it matters / what's new (ZH)

本知识库的 `sensing-csi` 分类此前已收录基于 CSI 的呼吸监测、姿态估计、活动识别与定位等任务。WiFlow 为这一列表新增了一项下游任务——稠密光流估计，并配套构建了一个专用的 CSI/视频配对数据集（由于不存在直接的光流真值传感器，采用基于摄像头的多种光流方法集成生成伪真值），同时对 CSI 预处理方式做了系统性对比。作者自述的新颖性主张仅针对数据集本身——摘要称其为“首个用于训练和评估基于 CSI 的光流估计器的数据集”。

## Images

![Overview of the WiFlow framework: from CSI to preprocessing to flow estimation | WiFlow 框架总览：从 CSI 到预处理再到光流估计](https://arxiv.org/html/2609.02452v1/architecture_highlevel_row.png)
![WiFlow's shared RAFT-style building block used across all three architectures | WiFlow 三种架构共用的 RAFT 风格基本模块](https://arxiv.org/html/2609.02452v1/basic_block.png)
