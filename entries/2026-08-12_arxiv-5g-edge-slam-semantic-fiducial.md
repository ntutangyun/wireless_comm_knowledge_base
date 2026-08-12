---
id: 2026-08-12_arxiv-5g-edge-slam-semantic-fiducial
date_published: 2026-08-10
date_found: 2026-08-12
type: academic-paper
technology: cellular
title_en: "A Semantic Communication Approach to Fiducial Marker Processing in 5G-Enabled Edge SLAM"
title_zh: "面向 5G 边缘 SLAM 中基准标记处理的语义通信方法"
url: "https://arxiv.org/abs/2608.09620"
source_quality: full
topics: [MEC, semantic-communication, split-inference, 5G-NR, edge-offload, SLAM]
topic_primary: mec
topics_secondary: [cellular-ai]
novelty_score: 3
---

## Summary (EN)
This paper (Boris Radovanovic, Vukan Ninkovic, Katarina Vidojevic, Buda Bajic Papuga, Dejan Vukobratovic — University of Novi Sad and the Institute for AI Research and Development of Serbia; arXiv 10 Aug 2026) applies a **semantic-communication / split-inference** design to fiducial-marker perception for robots that offload to a 5G edge server. Rather than shipping raw camera images (bandwidth-heavy) or fully processing on-board (compute-heavy), the robot runs the first *k* blocks of a deep fiducial-marker network (DeepTag-style), then transmits a compact learned intermediate representation **z** over 5G; the edge server runs the remaining blocks and performs SLAM. The intermediate feature is "task-oriented semantic information" — it suppresses redundancy while preserving what pose estimation needs.

The pipeline is split at a variable point *k*, creating a spectrum of computation-vs-communication trade-offs: an early split sends a large payload (up to ~1024 kB of feature maps) but does little on-board compute; a late split sends almost nothing (0.06 kB of final keypoints) but does most of the work locally. The authors measure this on a real 20 MHz 5G testbed (srsRAN/Open5GS) with a fitted uplink model **RTT = 39.9 ms + 0.18 ms/kB**, ROS2/DDS middleware over UDP/IP, and a ~5.06M-parameter VGG-style encoder + regression head producing 16 normalized keypoints. Perception stays accurate (mean keypoint error 1.47 px / 0.90%; representative pose error 0.83 cm translation, 2.04° rotation, competitive with an AprilTag-2 baseline). The split-cost analysis shows a clear optimum that depends on the robot's onboard compute ratio γ: deep splits win when onboard compute is weak (γ ≤ 2), early splits win when it is strong (γ ≥ 4) — motivating adaptive partitioning under changing network/compute conditions.

## Summary (ZH)
本文（Boris Radovanovic、Vukan Ninkovic、Katarina Vidojevic、Buda Bajic Papuga、Dejan Vukobratovic——诺维萨德大学与塞尔维亚人工智能研究与发展研究所；2026 年 8 月 10 日 arXiv）将**语义通信/分割推理**设计应用于机器人向 5G 边缘服务器卸载的基准标记（fiducial marker）感知。机器人不发送原始相机图像（占带宽），也不完全在本地处理（占算力），而是运行深度基准标记网络（DeepTag 类）的前 *k* 块，再通过 5G 传输紧凑的学习中间表示 **z**；边缘服务器运行其余块并执行 SLAM。该中间特征是"面向任务的语义信息"——抑制冗余、保留位姿估计所需内容。

流水线在可变分割点 *k* 处切分，形成一系列算力与通信的权衡：早分割发送大负载（多达约 1024 kB 特征图）但本地计算少；晚分割几乎不发送（0.06 kB 最终关键点）但大部分计算在本地。作者在真实 20 MHz 5G 测试床（srsRAN/Open5GS）上测量，拟合上行模型 **RTT = 39.9 ms + 0.18 ms/kB**，采用 ROS2/DDS 中间件经 UDP/IP，以及约 506 万参数的 VGG 式编码器 + 回归头输出 16 个归一化关键点。感知保持准确（平均关键点误差 1.47 px / 0.90%；代表性位姿误差平移 0.83 cm、旋转 2.04°，与 AprilTag-2 基线相当）。分割成本分析显示存在明确最优点，取决于机器人板载算力比 γ：算力弱时（γ ≤ 2）深分割更优，算力强时（γ ≥ 4）早分割更优——推动在网络/算力变化下的自适应分割。

## Key technical points (EN)
- **Design:** split-inference / semantic communication — transmit a learned task-oriented feature z, not raw images or final keypoints, over 5G to an edge server that finishes the pipeline + SLAM.
- **Split point k:** trades payload (1024 kB early → 0.06 kB late) against onboard compute; end-to-end cost has a clear optimum vs onboard-compute ratio γ.
- **Testbed:** real 20 MHz 5G (srsRAN/Open5GS), ROS2/DDS over UDP/IP; uplink RTT = 39.9 ms + 0.18 ms/kB.
- **Accuracy:** keypoint error 1.47 px (0.90%); pose 0.83 cm / 2.04° (competitive with AprilTag-2).
- **Finding:** optimal split is compute-dependent → motivates adaptive partitioning.

## Key technical points (ZH)
- **设计：** 分割推理/语义通信——经 5G 向边缘服务器传输学习到的面向任务特征 z（而非原始图像或最终关键点），边缘完成流水线 + SLAM。
- **分割点 k：** 在负载（早 1024 kB → 晚 0.06 kB）与板载算力间权衡；端到端成本相对板载算力比 γ 有明确最优。
- **测试床：** 真实 20 MHz 5G（srsRAN/Open5GS），ROS2/DDS 经 UDP/IP；上行 RTT = 39.9 ms + 0.18 ms/kB。
- **精度：** 关键点误差 1.47 px（0.90%）；位姿 0.83 cm / 2.04°（与 AprilTag-2 相当）。
- **发现：** 最优分割依赖算力 → 推动自适应分割。

## Why it matters / what's new (EN)
The KB's MEC and cellular-AI bins hold plenty of offload-scheduling theory; this entry is a concrete, testbed-measured instance of *semantic* offload — where the thing sent over 5G is a learned task representation rather than compressed pixels — applied to a real robotics perception task (fiducial-marker pose for SLAM). The fitted RTT model and the γ-dependent optimal-split result give a reusable, quantitative template for reasoning about where to cut any DNN pipeline across a 5G link, and the AprilTag-competitive accuracy shows the semantic compression is essentially lossless for the downstream task. Complements the edge-LLM offload entries by covering a vision/robotics workload with a clean split-point cost model.

## Why it matters / what's new (ZH)
KB 的 MEC 与 cellular-AI bin 已有大量卸载调度理论；本条目是*语义*卸载的具体、测试床实测实例——经 5G 传输的是学习到的任务表示而非压缩像素——应用于真实机器人感知任务（用于 SLAM 的基准标记位姿）。拟合的 RTT 模型与依赖 γ 的最优分割结果，为推理任意 DNN 流水线在 5G 链路上的切分位置提供可复用的量化模板；与 AprilTag 相当的精度表明该语义压缩对下游任务基本无损。与边缘-LLM 卸载条目互补，覆盖了带有清晰分割点成本模型的视觉/机器人工作负载。

## Images
![System architecture: UGV robot, 5G infrastructure (disaggregated gNB), and edge server integration for split-inference SLAM | 系统架构：UGV 机器人、5G 基础设施（分解式 gNB）与边缘服务器的分割推理 SLAM 集成](https://arxiv.org/html/2608.09620v1/Figure_2_CSCN_2026.jpg)
![Split-point cost analysis: end-to-end cost minimum shifts with onboard-compute ratio γ | 分割点成本分析：端到端成本最优随板载算力比 γ 移动](https://arxiv.org/html/2608.09620v1/fig_split_cost.png)
