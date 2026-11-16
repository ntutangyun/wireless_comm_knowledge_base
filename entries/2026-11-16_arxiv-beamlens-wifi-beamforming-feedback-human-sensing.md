---
id: 2026-11-16_arxiv-beamlens-wifi-beamforming-feedback-human-sensing
date_published: 2026-11-12
date_found: 2026-11-16
technology: wifi
type: academic-paper
title_en: "Enabling Versatile Human Sensing through Wi-Fi Beamforming Feedback (BeamLens)"
title_zh: "基于 Wi-Fi 波束成形反馈实现通用人体感知（BeamLens）"
url: "https://arxiv.org/abs/2611.16185"
source_quality: full
topics: [Wi-Fi sensing, BFI, beamforming feedback, AoD, ToF, self-supervised learning, human activity recognition, pose estimation]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)

BeamLens (Jingzhe Zhang, Peiliang Wang, Yitong Shen, Ning Wang, Mingzhe Chen and Yili Ren; University of South Florida and University of Miami; submitted 12 November 2026) senses humans from Beamforming Feedback Information (BFI) rather than Channel State Information. The paper's stated motivation is that CSI is accessible only on a limited range of Wi-Fi chipsets, whereas BFI is standardized in Wi-Fi 5/6/7 and can be captured by a passive sniffer during the NDPA/NDP channel-sounding exchange. It notes that earlier BFI-based work was mostly task-specific and coarse.

The system has four modules. Two-view probing uses two AP-STA links to obtain complementary azimuth and elevation views. Spatial extraction preprocesses BFI (reconstructed from the compressed Givens-rotation report) into a matrix preserving phase differences and jointly estimates angle of departure (AoD) and relative time of flight (RToF) with frequency smoothing and MUSIC, producing AoD-RToF heatmaps, with background subtraction to remove static reflections. Resolution enhancement uses a sparse physical antenna array (element positions {0,1,4,6} times the spacing d, no extra hardware) and a uniform 7-element virtual array built from pairwise separations. Two-view fusion trains a shared CNN backbone with temporally aware cross-view contrastive learning (azimuth and elevation frames captured at the same time as positives, nearby frames as soft positives) plus temporal masked reconstruction on heatmap sequences; only the backbone is kept for downstream tasks.

The testbed uses two NETGEAR R7800 APs (four transmit antennas each) and two laptops with Intel AX210 cards (two receive antennas) as STAs, a third AX210 laptop in monitor mode capturing with Wireshark, 5 GHz channel 149 at 80 MHz (234 data subcarriers) and an RGB camera at 30 fps for ground truth, in three indoor environments (two labs and a corridor). The dataset has 8 participants performing 12 activities, over one million BFI reports and about 500,000 heatmap pairs (about 300,000 unlabeled, 200,000 labeled), split 7:1:2 by recording; pose and silhouette labels come from vision models (MotionBERT and SCHP), so the metrics measure agreement with those references. With a frozen backbone BeamLens reaches 90.16 percent activity-recognition accuracy, 8.64 cm mean per-joint position error in 3D pose estimation and 70.64 percent IoU for silhouettes, against 87.06 percent / 9.06 cm / 70.12 percent for a raw-BFI baseline and 86.23 percent / 9.39 cm / 69.64 percent for training from scratch; fine-tuning gives 91.06 percent / 7.84 cm / 72.07 percent. With 50 percent of the labels it reaches about 86.4 percent accuracy, roughly matching the from-scratch model with all labels. AoD error averages 7.8 degrees and RToF error 1.2 ns. Stated limitations include vision-model ground truth, a required empty-environment calibration recording before each session, degraded AoD accuracy near +/-90 degrees, an assumed dominant LoS path (NLoS accuracy drops to 86.8 percent) and a small study (8 participants, 3 environments, fixed two-link geometry).

## Summary (ZH)

BeamLens（Jingzhe Zhang、Peiliang Wang、Yitong Shen、Ning Wang、Mingzhe Chen、Yili Ren；南佛罗里达大学与迈阿密大学；2026 年 11 月 12 日提交）用波束成形反馈信息（BFI）而非信道状态信息（CSI）做人体感知。论文陈述的动机是：CSI 只在少数 Wi-Fi 芯片上可获取，而 BFI 在 Wi-Fi 5/6/7 中已标准化，可由被动嗅探器在 NDPA/NDP 信道探测过程中捕获；此前基于 BFI 的工作多为特定任务且较粗糙。

系统包含四个模块。双视角探测：用两条 AP-STA 链路获得互补的方位与俯仰视角。空间信息提取：把由压缩 Givens 旋转报告重建的 BFI 预处理为保留相位差的矩阵，经频率平滑与 MUSIC 联合估计离开角（AoD）与相对飞行时间（RToF），得到 AoD-RToF 热图，并用背景减除去除静态反射。分辨率增强：使用稀疏物理天线阵（阵元位置为间距 d 的 {0,1,4,6} 倍，无需额外硬件），并由两两间距构造均匀 7 阵元虚拟阵。双视角融合：用时间感知的跨视角对比学习（同一时刻的方位与俯仰帧为正样本，相邻帧为软正样本）加上对热图序列的时间掩码重建来训练共享 CNN 骨干，下游任务只保留该骨干。

测试床使用两个 NETGEAR R7800 AP（各 4 根发射天线）、两台搭载 Intel AX210（2 根接收天线）的笔记本作为 STA，第三台 AX210 笔记本以监听模式经 Wireshark 抓包，工作在 5 GHz 149 信道、80 MHz（234 个数据子载波），以 30 fps RGB 摄像头提供真值，覆盖三个室内环境（两个实验室与一条走廊）。数据集含 8 名参与者的 12 种活动，超过 100 万条 BFI 报告、约 50 万对热图（约 30 万无标签、20 万有标签），按录制以 7:1:2 划分；姿态与轮廓标签来自视觉模型（MotionBERT 与 SCHP），因此指标衡量的是与这些参考的一致程度。冻结骨干时，BeamLens 的动作识别准确率为 90.16%，3D 姿态平均关节位置误差 8.64 cm，轮廓 IoU 为 70.64%；原始 BFI 基线为 87.06% / 9.06 cm / 70.12%，从头训练为 86.23% / 9.39 cm / 69.64%；微调后为 91.06% / 7.84 cm / 72.07%。仅用 50% 标签时准确率约 86.4%，与使用全部标签从头训练的模型大致相当。AoD 平均误差 7.8°，RToF 平均误差 1.2 ns。文中提到的局限包括：真值来自视觉模型、每次采集前需要空环境标定录制、接近 ±90° 时 AoD 精度下降、假设视距路径占主导（NLoS 准确率降至 86.8%），以及研究规模较小（8 名参与者、3 个环境、固定的双链路几何）。

## Key technical points (EN)

- **Signal source:** standardized BFI (Wi-Fi 5/6/7) captured passively from the channel-sounding feedback, instead of CSI.
- **Spatial extraction:** joint AoD + RToF estimation via MUSIC on BFI, AoD-RToF heatmaps, background subtraction; two AP-STA links give azimuth and elevation views.
- **Resolution:** sparse physical array {0,1,4,6}d turned into a uniform 7-element virtual array.
- **Learning:** cross-view contrastive learning with temporal soft positives + temporal masked reconstruction; one frozen backbone serves activity recognition, 3D pose and silhouette estimation.
- **Results (frozen backbone):** 90.16% accuracy, 8.64 cm MPJPE, 70.64% IoU (raw-BFI baseline 87.06% / 9.06 cm / 70.12%); AoD error 7.8 degrees, RToF error 1.2 ns.
- **Setup and limits:** NETGEAR R7800 APs, Intel AX210 STAs, 5 GHz/80 MHz; 8 participants, 12 activities, 3 environments; vision-derived ground truth; empty-room calibration needed; NLoS accuracy 86.8%.

## Key technical points (ZH)

- **信号来源：** 标准化的 BFI（Wi-Fi 5/6/7），从信道探测反馈中被动捕获，而非 CSI。
- **空间信息提取：** 对 BFI 用 MUSIC 联合估计 AoD 与 RToF，生成 AoD-RToF 热图并做背景减除；两条 AP-STA 链路提供方位与俯仰视角。
- **分辨率：** 稀疏物理阵 {0,1,4,6}d 转换为均匀 7 阵元虚拟阵。
- **学习方法：** 带时间软正样本的跨视角对比学习 + 时间掩码重建；同一冻结骨干服务于动作识别、3D 姿态与轮廓估计。
- **结果（冻结骨干）：** 准确率 90.16%，MPJPE 8.64 cm，IoU 70.64%（原始 BFI 基线 87.06% / 9.06 cm / 70.12%）；AoD 误差 7.8°，RToF 误差 1.2 ns。
- **设置与局限：** NETGEAR R7800 AP、Intel AX210 STA、5 GHz/80 MHz；8 名参与者、12 种活动、3 个环境；真值来自视觉模型；需空环境标定；NLoS 准确率 86.8%。

## Why it matters / what's new (EN)

The sensing-csi bin already includes a BFI-based home-health agent that fuses BFI with mmWave and thermal data ([2026-09-18_arxiv-supersensedoctor-multimodal-wifi-bfi-health-agent](2026-09-18_arxiv-supersensedoctor-multimodal-wifi-bfi-health-agent)); BeamLens instead builds the full sensing pipeline on BFI alone, adding angle/time-of-flight extraction, a virtual array and a self-supervised backbone reused across three tasks. The accuracy figures are measured against vision-model references in a small three-environment study.

## Why it matters / what's new (ZH)

sensing-csi 主题下已有一篇把 BFI 与毫米波、热成像融合的 BFI 家庭健康智能体（[2026-09-18_arxiv-supersensedoctor-multimodal-wifi-bfi-health-agent](2026-09-18_arxiv-supersensedoctor-multimodal-wifi-bfi-health-agent)）；BeamLens 则仅依靠 BFI 构建完整感知流水线，加入角度/飞行时间提取、虚拟阵列以及跨三个任务复用的自监督骨干。其精度数字是在小规模三环境研究中相对视觉模型参考测得。

## Images

![BeamLens system overview | BeamLens 系统总览](https://arxiv.org/html/2611.16185v1/SysOverview6.png)
![Two-view sensing with AP-STA links | 基于两条 AP-STA 链路的双视角感知](https://arxiv.org/html/2611.16185v1/two_view3.png)
