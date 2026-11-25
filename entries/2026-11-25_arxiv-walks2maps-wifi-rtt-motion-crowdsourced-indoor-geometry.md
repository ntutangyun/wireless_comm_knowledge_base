---
id: 2026-11-25_arxiv-walks2maps-wifi-rtt-motion-crowdsourced-indoor-geometry
date_published: 2026-11-21
date_found: 2026-11-25
technology: wifi
type: academic-paper
title_en: "Walks2Maps: Learning Indoor Geometry from Crowdsourced Wi-Fi RTT and Motion Trajectories"
title_zh: "Walks2Maps：基于众包 Wi-Fi RTT 与运动轨迹学习室内几何结构"
url: "https://arxiv.org/abs/2611.28532"
source_quality: full
topics: [Wi-Fi RTT, 802.11mc, fine timing measurement, indoor mapping, crowdsourcing, multipath]
topic_primary: ftm-ranging
topics_secondary: [ai-for-wifi]
novelty_score: 3
---

## Summary (EN)
Walks2Maps (Enguang Fan, Binh Minh Tran, Fulin Wang, Jiaxi Li and Klara Nahrstedt, University of Illinois Urbana-Champaign; comments field: accepted to the NeurIPS 2026 PhysWorldAI Workshop) reconstructs a shared metric indoor map from smartphone Wi-Fi round-trip-time (RTT) measurements and motion traces, without a floor plan, surveyed access-point (AP) coordinates or position labels. The paper states that through IEEE 802.11mc fine timing measurement, commodity phones measure distances to nearby APs about twice per second in its recordings (about 1.75 bursts per second in the dataset), so each walk provides a motion trace plus metric observations of fixed infrastructure. The framework jointly estimates pedestrian trajectories, AP locations and per-trajectory stride scales, then recovers the pathway layout from the reconstructed paths.

Method, as described: each trajectory contains RTT bursts, each with ranges to APs and a quality weight (the fraction of successful timing frames); dead reckoning supplies displacements between consecutive bursts with unit stride in the trajectory's own frame. The unknowns are 2-D positions per burst and per AP plus, per trajectory, a heading offset and a positive stride scale. Motion and range residuals are minimized with a soft robustifier and weak Gaussian priors, using a nominal 1.9 m AP-to-phone height difference to form the slant distance. An asymmetric range loss, inspired by low-expectile regression, is set so that, before robustification, a modeled distance exceeding an observed range receives 19 times the weight of an equally sized positive residual, which favors the lower part of the range observations while tolerating large positive multipath errors. For initialization, the minimum-range burst per trajectory-AP pair is a closest-approach candidate and candidates of the same AP seed a rigid registration across trajectories; a sparse nonlinear least-squares refinement then solves all trajectories and AP positions jointly in about 7 s. Paths are rasterized on a 0.5 m grid to obtain the walked area and a corridor skeleton.

Evaluation uses one office floor with 30 RTT-capable APs: eleven routes, 2.12 km of walked path, recorded over four days, each by a person carrying two phones of the same model, giving 22 phone trajectories with 10,525 RTT bursts and 100,704 ranges. Under AP-based alignment the reported median (90th-percentile) errors are 0.87 (1.75) m for AP locations and 0.89 (1.59) m for trajectory positions; the walked-area F1 is 0.985 (precision 0.979, recall 0.992) and the hallway skeleton recovers 91% of the ground-truth corridor length (535 of 587 m), with junction precision and recall of 0.73 and 0.67 within 2 m. A causal particle filter given the surveyed AP coordinates reaches 0.86 m on the same recordings. The map expands as routes are added (36% of the walked area from the illustrated single route, 79% from four routes, 99% from all eleven); median AP error falls from 3.24 m for single routes to 0.95 m for six routes, six of eleven single routes fail (median AP error above 3 m), and none of the 90 tested subsets of three, four or six routes does.

## Summary (ZH)
Walks2Maps（Enguang Fan、Binh Minh Tran、Fulin Wang、Jiaxi Li、Klara Nahrstedt，伊利诺伊大学厄巴纳-香槟分校；备注栏：已被 NeurIPS 2026 PhysWorldAI Workshop 接收）利用智能手机的 Wi-Fi 往返时间（RTT）测量与运动轨迹，重建共享的度量室内地图，无需平面图、测绘的接入点（AP）坐标或位置标签。论文指出，借助 IEEE 802.11mc 精细时间测量，商用手机在其录制数据中约每秒两次测得到附近 AP 的距离（数据集中约为每秒 1.75 个突发），因此每次行走既提供运动轨迹，也提供对固定基础设施的度量观测。该框架联合估计行人轨迹、AP 位置和每条轨迹的步幅尺度，再由重建路径恢复通道布局。

方法（按论文描述）：每条轨迹包含若干 RTT 突发，每个突发含到各 AP 的测距及质量权重（成功时间测量帧所占比例）；航迹推算给出相邻突发间的位移，步幅在轨迹自身坐标系中取单位值。未知量为每个突发和每个 AP 的二维位置，以及每条轨迹的航向偏移与正的步幅尺度。运动残差与测距残差在软鲁棒函数和弱高斯先验下被最小化，斜距按名义 1.9 m 的 AP 与手机高度差计算。受低期望分位数回归启发的非对称测距损失，使“模型距离大于观测测距”的残差获得相同大小正残差 19 倍的权重，从而偏向测距观测的低端部分，同时容忍较大的正向多径误差。初始化时，每个轨迹-AP 对的最小测距突发作为最近点候选，同一 AP 的候选用于跨轨迹的刚性配准；随后以稀疏非线性最小二乘在约 7 秒内联合优化所有轨迹和 AP 位置。路径被栅格化到 0.5 m 网格以得到已行走区域和走廊骨架。

评估使用一个办公楼层和 30 个支持 RTT 的 AP：11 条路线、共 2.12 km 行走路径，历时四天，每次由一人携带两部同型号手机，共得到 22 条手机轨迹、10,525 个 RTT 突发、100,704 个测距值。按基于 AP 的对齐方式，AP 位置的中位（90 分位）误差为 0.87（1.75）m，轨迹位置为 0.89（1.59）m；已行走区域的 F1 为 0.985（精确率 0.979，召回率 0.992），走廊骨架恢复了真值走廊长度的 91%（587 m 中的 535 m），路口精确率和召回率在 2 m 内分别为 0.73 和 0.67。在相同录制数据上，已知测绘 AP 坐标的因果粒子滤波器达到 0.86 m。随着路线增加，地图覆盖逐步扩大（图中所示单条路线覆盖 36% 的已行走区域，四条路线 79%，全部 11 条 99%）；AP 中位误差由单条路线的 3.24 m 降至六条路线的 0.95 m，11 条单路线中有 6 条失败（AP 中位误差超过 3 m），而在 90 个三、四或六条路线的子集中没有一个失败。

## Key technical points (EN)
- Inputs and unknowns: RTT bursts with per-AP ranges and quality weights plus dead-reckoned displacements; unknowns are burst and AP positions, per-trajectory heading offset and stride scale. No floor plan, surveyed AP coordinates or position labels are used for reconstruction (surveyed values are reserved for evaluation).
- Asymmetric range loss: a modeled distance exceeding the observed range gets 19 times the weight of an equally sized positive residual. In the ablation (AP-based alignment), a symmetric loss raises median AP error from 0.87 m to 1.89 m and a free per-AP range offset to 2.06 m.
- Place association versus metric ranges (joint alignment, Table 1): odometry with landmark registration 2.83 m median pose error; rWiFiSLAM-style similarity closures 18.28 m; WiFi-Mark-style RSS landmarks 11.58 m; RTT-signature virtual landmarks used only as identities 9.68 m (stride scales contract to 0.33 m); adding one-sided range hinges 1.22 m; Walks2Maps with metric RTT ranges 0.83 m and walked-area F1 0.990. The paper's stated reading is that place association alone leaves metric scale unresolved when stride lengths are unknown.
- RTT versus RSS landmarks: across 1,626 ground-truth closest-approach events, RTT minima give recall 0.59, median along-track error 0.76 m and cross-phone repeatability 0.89, against 0.41, 1.56 m and 0.70 for RSS peaks at an 8 s scan interval; an RTT minimum estimates closest-approach distance to the AP with median error 0.71 m.
- Stated limitations: one floor, one AP vendor, paired recordings from one phone model, an offline 2-D solver, and a map that covers only the corridors and aisles walked. The authors say they will release the dataset and toolkit.

## Key technical points (ZH)
- 输入与未知量：带有各 AP 测距与质量权重的 RTT 突发，以及航迹推算位移；未知量为突发与 AP 位置、每条轨迹的航向偏移与步幅尺度。重建过程不使用平面图、测绘的 AP 坐标或位置标签（测绘值仅用于评估）。
- 非对称测距损失：模型距离大于观测测距的残差权重为同样大小正残差的 19 倍。消融实验（基于 AP 的对齐）中，对称损失使 AP 中位误差从 0.87 m 升至 1.89 m，加入每个 AP 的自由测距偏移则升至 2.06 m。
- 地点关联与度量测距（联合对齐，表 1）：航迹推算加地标配准的中位位姿误差 2.83 m；rWiFiSLAM 式相似性闭环 18.28 m；WiFi-Mark 式 RSS 地标 11.58 m；仅把 RTT 签名虚拟地标当作身份使用 9.68 m（步幅尺度收缩到 0.33 m）；加入单侧测距铰链约束 1.22 m；使用度量 RTT 测距的 Walks2Maps 为 0.83 m，已行走区域 F1 为 0.990。论文的结论是：当步幅未知时，仅靠地点关联无法确定度量尺度。
- RTT 与 RSS 地标：在 1,626 个真值最近点事件中，RTT 极小值的召回率为 0.59、沿轨迹中位误差 0.76 m、跨手机重复性 0.89；8 秒扫描间隔下 RSS 峰值分别为 0.41、1.56 m 和 0.70；RTT 极小值估计到 AP 最近距离的中位误差为 0.71 m。
- 论文所述局限：仅一个楼层、一家 AP 厂商、一种手机型号的成对录制数据，求解器为离线二维，地图仅覆盖走过的走廊和通道。作者称将发布数据集与工具包。

## Why it matters / what's new (EN)
For the KB's FTM / RTT positioning bin this adds a mapping-side use of 802.11mc RTT on commodity phones rather than a positioning-accuracy benchmark. The paper compares itself with crowdsourced pathway mapping work it cites (crowdsourced pathway mapping such as Walkie-Markie, plus RTT-based loop closure in rWiFiSLAM, among others) and states the difference as a joint reconstruction of paths, AP locations and pathway structure from independently referenced trajectories with stride scales estimated from the data. It is a workshop paper with a single-floor evaluation, which the authors themselves list as a limitation.

## Why it matters / what's new (ZH)
对知识库的 FTM / RTT 定位主题而言，本条补充的是 802.11mc RTT 在商用手机上用于建图的用法，而非定位精度基准测试。论文将自身与其引用的相关工作（众包通道建图如 Walkie-Markie，以及基于 RTT 闭环的 rWiFiSLAM 等）相比较，并将区别表述为：在独立参考系的轨迹上，以数据估计步幅尺度，联合重建路径、AP 位置与通道结构。该文为研讨会论文，仅在单一楼层评估，作者也将此列为局限。

## Images
![Walks2Maps overview: dead-reckoned trajectories, joint estimate and recovered pathways | Walks2Maps 概览：航迹推算轨迹、联合估计结果与恢复的通道](https://arxiv.org/html/2611.28532v1/fig1_teaser.png)
![RTT signatures as virtual landmarks and landmark detection by RTT minima versus RSS peaks | 作为虚拟地标的 RTT 签名，以及 RTT 极小值与 RSS 峰值的地标检测对比](https://arxiv.org/html/2611.28532v1/fig3_landmarks.png)
