---
id: 2026-10-12_arxiv-cotrack-cross-room-passive-wifi-tracking
date_published: 2026-09-28
date_found: 2026-10-12
technology: wifi
type: academic-paper
title_en: "Cross-Room Passive WiFi Tracking: Joint Estimation of Target Trajectory and Virtual Transmitter Location"
title_zh: "跨房间被动式 WiFi 跟踪：目标轨迹与虚拟发射机位置的联合估计"
url: "https://arxiv.org/abs/2609.34797"
source_quality: full
topics: [WiFi sensing, CSI, NLOS, bistatic sensing, passive tracking, 802.11bf]
topic_primary: sensing-csi
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

A paper submitted to arXiv on 28 September 2026 (eess.SP) presents CoTrack, a self-calibrating passive WiFi tracking scheme for cross-room, device-free human tracking that does not require knowledge of the transmitter's position. The paper targets the common whole-home-sensing problem where indoor bistatic WiFi sensing must operate across rooms, with intervening walls blocking the direct line-of-sight path between transmitter (Tx) and receiver (Rx) -- making it difficult to recover a human trajectory from channel-state-information (CSI)-derived delay, angle-of-arrival (AoA), and Doppler estimates, since Tx position is often unknown and non-line-of-sight (NLOS) propagation is inconsistent with a direct-path geometry assumption.

CoTrack's core idea is to represent the unknown Tx-side propagation path with a "virtual transmitter" location that is jointly estimated alongside the human trajectory, rather than requiring the real Tx position as a calibration input. The paper's Proposition 1 shows that an unknown physical propagation distance from the real transmitter to the person can be locally approximated as the Euclidean distance from a virtual-Tx position plus a constant offset, and that multiple virtual-Tx positions along a ray give equivalent first-order approximations near a reference location -- an ambiguity the paper resolves using motion diversity, since (as the paper states) different virtual-Tx positions, bias values, and trajectories can yield similar residuals over a short motion window. The joint optimization minimizes weighted residuals between measured and model-predicted delay/AoA/Doppler, plus a motion-regularization term penalizing unrealistic acceleration, over target position, virtual-Tx location, and bias terms simultaneously -- the paper notes the unknowns cannot be separated because delay and Doppler predictions depend jointly on both the virtual-Tx and the target position. An identifiability analysis (Fisher information / Cramer-Rao bounds, plus a stated Theorem 1 relating loss-function curvature to the spatial concentration of candidate solutions) characterizes how accuracy depends on motion extent, observation duration, and trajectory geometry, and shows a degenerate case: if the transmitter-target direction stays constant, shifting the virtual Tx along that direction with a compensating bias adjustment leaves all predictions unchanged, so trajectory-direction variation is required for identifiability.

The CoTrack algorithm has an initialization phase that generates multiple virtual-Tx starting hypotheses (from positions radiating outward from the receiver, and from positions around a coarse center derived from current delay/AoA estimates), refines each via damped Gauss-Newton optimization over an expanding measurement window, and accepts an initialization only once a confidence score -- combining the score contrast between the best and quartile candidates with the spatial concentration (RMSE spread) of low-score solutions -- clears a threshold, avoiding premature commitment to an ambiguous solution. After initialization, an online tracking phase uses a sliding window of fixed length (60 channel-propagation-interval samples in the experiments) to alternate between a trajectory update (refining target position with virtual Tx fixed) and a conservative virtual-Tx update (moving only 10% of the way toward the new optimum per step, to limit sensitivity to window-limited noise).

Experiments used Intel 5300 NICs at 5.32 GHz with the receiver in a classroom and the transmitter either in the same room (LOS) or in a kitchen separated by a wall (NLOS, about 9 m from the receiver), with ground truth and virtual-Tx validation provided by a TI 60 GHz mmWave radar, across six experiments in total, spanning LOS and cross-room NLOS settings with varying motion extents and transmitter placements. CoTrack achieved a median trajectory error of 1.14 m (80th percentile 1.42 m) and a median virtual-transmitter position discrepancy of 0.47 m (80th percentile 0.54 m) versus the radar ground truth. Simulations show the virtual-Tx CRB varies by over an order of magnitude across geometries and walking patterns (favorable cases reach sub-meter bounds in about 12 s, unfavorable ones need several tens of seconds), and that the accuracy bound inflates by about 15x as walking direction approaches the radial direction from the virtual Tx. In a separate set of 3,000 randomized-geometry trials, the confidence score separated high-confidence (median error 0.31 m, middle group 1.07 m) from low-confidence (2.85 m) cases. Reported computational cost is about 0.77 s per initialization check and 0.041 s per online measurement update on an Apple M1 processor.

## Summary (ZH)

一篇于 2026 年 9 月 28 日提交至 arXiv 的论文（eess.SP 类别）提出了 CoTrack——一种用于跨房间、设备自由（device-free）人体跟踪的自校准被动 WiFi 跟踪方案，无需事先知道发射机的位置。论文针对室内双站 WiFi 感知跨房间工作时的常见整宅感知难题：中间墙体会阻挡发射机（Tx）与接收机（Rx）之间的直接视距路径——使得从信道状态信息（CSI）推导出的时延、到达角（AoA）与多普勒估计中恢复人体轨迹变得困难，因为 Tx 位置通常未知，且非视距（NLOS）传播与直接路径几何假设不一致。

CoTrack 的核心思想是用一个"虚拟发射机"位置来表示未知的 Tx 侧传播路径，并将其与人体轨迹联合估计，而非要求将真实 Tx 位置作为校准输入。论文的命题 1 表明，从真实发射机到人体的未知物理传播距离可在局部近似为虚拟 Tx 位置的欧氏距离加一个常数偏移量，且沿同一射线上的多个虚拟 Tx 位置在参考位置附近给出等效的一阶近似——论文利用运动多样性来消解这一歧义，因为（如论文所述）在较短的运动窗口内，不同的虚拟 Tx 位置、偏差值与轨迹可能产生相似的残差。该联合优化在目标位置、虚拟 Tx 位置与偏差项上同时最小化测量值与模型预测的时延/AoA/多普勒之间的加权残差，并加入惩罚不合理加速度的运动正则化项——论文指出这些未知量无法分离，因为时延与多普勒预测同时依赖于虚拟 Tx 与目标位置。一项可辨识性分析（Fisher 信息/Cramer-Rao 界，以及论文给出的定理 1，将损失函数曲率与候选解的空间集中度相联系）刻画了精度如何依赖于运动幅度、观测时长与轨迹几何形状，并给出了一种退化情形：若发射机-目标方向保持不变，则沿该方向移动虚拟 Tx 并相应调整偏差将使所有预测保持不变，因此可辨识性要求轨迹方向发生变化。

CoTrack 算法包含一个初始化阶段，生成多个虚拟 Tx 起始假设（一组从接收机向外辐射的位置，另一组围绕由当前时延/AoA 估计得出的粗略中心的位置），通过在不断扩展的测量窗口上进行阻尼高斯-牛顿优化对每个假设进行细化，并仅在置信度分数——结合最优候选与四分位候选之间的分数对比，以及低分候选解的空间集中度（RMSE 分布）——超过阈值后才接受该初始化，从而避免过早确定一个存在歧义的解。初始化完成后，在线跟踪阶段使用固定长度的滑动窗口（实验中为 60 个信道传播间隔样本），在轨迹更新（固定虚拟 Tx，细化目标位置）与保守的虚拟 Tx 更新（每步仅向新最优解移动 10% 的距离，以限制对窗口受限噪声的敏感性）之间交替进行。

实验采用工作在 5.32 GHz 的 Intel 5300 网卡，接收机置于教室内，发射机分别置于同一房间内（视距 LOS）或隔墙的厨房内（非视距 NLOS，距接收机约 9 米），真值与虚拟 Tx 验证由 TI 60 GHz 毫米波雷达提供，共计六组实验，涵盖 LOS 与跨房间 NLOS 设置，运动幅度与发射机位置各不相同。相较雷达真值，CoTrack 取得了 1.14 米的轨迹误差中位数（第 80 百分位为 1.42 米），以及 0.47 米的虚拟发射机位置偏差中位数（第 80 百分位为 0.54 米）。仿真表明：虚拟 Tx 的 CRB 随几何形状与行走模式相差一个数量级以上（有利情形约 12 秒内达到亚米级界，不利情形需数十秒），且当行走方向趋近于相对虚拟 Tx 的径向时，精度界放大约 15 倍。另在 3,000 次随机几何试验中，置信度分数区分出高置信度（中位误差 0.31 米，中等组 1.07 米）与低置信度（2.85 米）情形。报告的计算成本在 Apple M1 处理器上约为每次初始化检查 0.77 秒，每次在线测量更新 0.041 秒。

## Key technical points (EN)

- **Problem**: cross-room/NLOS WiFi tracking without knowing Tx position -- delay/AoA/Doppler depend on both target and (unknown) Tx geometry.
- **Core idea**: represent unknown Tx-side propagation with a jointly-estimated "virtual transmitter" location (Proposition 1: local Euclidean-distance-plus-offset approximation).
- **Identifiability**: Fisher information/Cramer-Rao analysis + Theorem 1 (loss curvature <-> solution spatial concentration); degenerate case along a fixed Tx-target direction requires motion-direction variation to resolve.
- **Algorithm**: multi-start initialization (radiating + coarse-center hypotheses) with damped Gauss-Newton refinement and a confidence-score gate (score contrast + RMSE spread); online phase: 60-sample sliding window, alternating trajectory update (virtual-Tx fixed) and conservative (10%-step) virtual-Tx update.
- **Testbed**: Intel 5300 NICs, 5.32 GHz; 3-antenna receiver, single-antenna Tx; TI 60 GHz radar ground truth; six experiments in total, spanning LOS and cross-room NLOS (~9 m, wall-separated).
- **Headline accuracy**: median trajectory error 1.14 m (80th pct 1.42 m); median virtual-Tx discrepancy 0.47 m (80th pct 0.54 m).
- **Simulation (3,000 trials)**: CRB varies over 10x with geometry/walking pattern (favorable: sub-meter bound in ~12 s; unfavorable: tens of seconds); accuracy bound inflates ~15x as walking direction approaches the radial direction from the virtual Tx; confidence score separates 0.31 m (high-confidence, middle group 1.07 m) vs. 2.85 m (low-confidence) median error.
- **Compute**: ~0.77 s/initialization check, 0.041 s/online update on Apple M1.

## Key technical points (ZH)

- **问题**：在不知道 Tx 位置的情况下进行跨房间/NLOS WiFi 跟踪——时延/AoA/多普勒同时依赖目标位置与（未知的）Tx 几何关系。
- **核心思想**：用联合估计得到的"虚拟发射机"位置表示未知的 Tx 侧传播路径（命题 1：局部欧氏距离加偏移量近似）。
- **可辨识性**：Fisher 信息/Cramer-Rao 分析 + 定理 1（损失曲率与解的空间集中度相关）；沿固定 Tx-目标方向的退化情形需要运动方向变化才能解决。
- **算法**：多起点初始化（辐射状假设 + 粗略中心假设），结合阻尼高斯-牛顿细化与置信度分数门控（分数对比 + RMSE 分布）；在线阶段：60 样本滑动窗口，在轨迹更新（固定虚拟 Tx）与保守（每步 10%）虚拟 Tx 更新之间交替。
- **测试平台**：Intel 5300 网卡，5.32 GHz；3 天线接收机，单天线发射机；TI 60 GHz 雷达作为真值；共计六组实验，涵盖 LOS 与隔墙约 9 米的跨房间 NLOS。
- **核心精度**：轨迹误差中位数 1.14 米（第 80 百分位 1.42 米）；虚拟 Tx 偏差中位数 0.47 米（第 80 百分位 0.54 米）。
- **仿真（3,000 次试验）**：CRB 随几何形状/行走模式相差超过 10 倍（有利情形约 12 秒内达到亚米级界；不利情形需数十秒）；当行走方向趋近相对虚拟 Tx 的径向时，精度界放大约 15 倍；置信度分数区分高置信度（中位误差 0.31 米，中等组 1.07 米）与低置信度（2.85 米）情形。
- **计算成本**：Apple M1 上约每次初始化检查 0.77 秒，每次在线更新 0.041 秒。

## Why it matters / what's new (EN)

The KB's sensing-csi bin already includes several passive WiFi tracking and localization entries, but this is the KB's first entry addressing the specific cross-room/NLOS case where the transmitter position itself is unknown and must be estimated jointly with the human trajectory, rather than assumed as a calibration input -- directly relevant to whole-home Wi-Fi sensing deployments spanning multiple rooms off a single AP.

## Why it matters / what's new (ZH)

知识库的 Wi-Fi 感知与 CSI 分类已收录多条被动 WiFi 跟踪与定位条目，但这是知识库首条专门针对发射机位置本身未知、必须与人体轨迹联合估计（而非作为校准输入预先假定）的跨房间/NLOS 场景的条目——这与单个 AP 覆盖多房间的整宅 Wi-Fi 感知部署直接相关。

## Images

None.
