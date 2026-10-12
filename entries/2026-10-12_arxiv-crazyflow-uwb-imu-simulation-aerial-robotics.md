---
id: 2026-10-12_arxiv-crazyflow-uwb-imu-simulation-aerial-robotics
date_published: 2026-10-06
date_found: 2026-10-12
type: academic-paper
technology: uwb
title_en: "UWB Meets Crazyflow: Simulating Degraded Feedback at Scale for Aerial Robotics"
title_zh: "UWB 遇见 Crazyflow：面向空中机器人的大规模退化反馈仿真"
url: "https://arxiv.org/abs/2610.08225"
source_quality: full
topics: [UWB, IMU, EKF, drone-simulation, JAX, differentiable-simulation, aerial-robotics]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

On 6 October 2026, Martin Schuck, Marcel P. Rath, Yufei Hua, Abhishek Goudar, SiQi Zhou, and Angela P. Schoellig posted "UWB Meets Crazyflow: Simulating Degraded Feedback at Scale for Aerial Robotics" to arxiv (cs.RO), accepted to the 1st Workshop on Robot Meets GNSS and Ranging for Seamless Autonomy at ICRA 2026. The paper extends Crazyflow, the authors' earlier JAX-based, GPU-accelerated, differentiable drone simulator (arxiv 2606.01478, first submitted 31 May 2026), by integrating a complete UWB-plus-IMU state-feedback simulation pipeline coupled with a full-state Extended Kalman Filter (EKF). Crazyflow's core design unifies physics and control into a single differentiable computation graph via JAX's XLA just-in-time compilation, which lets it train reinforcement-learning controllers in seconds and simulate thousands of drones in parallel. The new UWB+IMU extension adds realistic degraded-feedback modeling on top of that foundation: UWB ranging measurements are corrupted with Gaussian noise plus a per-anchor mean bias offset sampled once per episode (approximating hardware offsets), under a line-of-sight assumption (the paper does not model multipath or dropout); IMU accelerations and angular velocities are corrupted with additive white noise and slowly varying bias random walks. The full-state EKF tracks 19 states (position, quaternion attitude, linear velocity, angular velocity, and accelerometer/gyroscope biases), using a nonlinear IMU-driven prediction model with Jacobian-based covariance propagation and UWB range-measurement corrections via linearization.

The paper reports that adding the EKF pipeline costs roughly 20% of GPU throughput for a single-drone simulation (about 8x10^6 steps/second with the EKF versus about 1x10^7 without), with more noticeable overhead from the EKF's matrix operations on CPU. A figure-8 tracking evaluation (10 s cycle) under a geometric controller compares ground-truth feedback with high-quality (σ=0.01 m) and low-quality (σ=0.10 m) UWB+IMU configurations; lower sensor quality degrades the EKF position estimate and, correspondingly, tracking performance. The authors position the extension as enabling massively parallel controller evaluation under realistic, degraded state feedback with minimal impact on throughput, intended as a foundational tool for aerial-robotics research that needs to train and test controllers against imperfect UWB-based localization at scale.

## Summary (ZH)

2026年10月6日，Martin Schuck、Marcel P. Rath、Yufei Hua、Abhishek Goudar、SiQi Zhou 与 Angela P. Schoellig 在 arxiv（cs.RO 分类）发布论文《UWB 遇见 Crazyflow：面向空中机器人的大规模退化反馈仿真》，该论文已被 ICRA 2026 "机器人遇见 GNSS 与测距，实现无缝自主"首届研讨会接收。论文在作者此前基于 JAX 的 GPU 加速可微分无人机仿真器 Crazyflow（arxiv 2606.01478，2026年5月31日首次提交）基础上，集成了完整的 UWB+IMU 状态反馈仿真流水线，并耦合了全状态扩展卡尔曼滤波器（EKF）。Crazyflow 的核心设计借助 JAX 的 XLA 即时编译，将物理仿真与控制统一为单一可微分计算图，从而能在数秒内训练强化学习控制器，并并行仿真数千架无人机。新增的 UWB+IMU 扩展在此基础上添加了真实的退化反馈建模：UWB测距测量被叠加高斯噪声，并加入每个锚点在每个episode开始时采样一次的均值偏置（用于近似硬件偏差），模型假设为视距条件（论文未建模多径或丢包）；IMU的加速度与角速度则被叠加白噪声与缓变的偏置随机游走。全状态EKF跟踪19个状态量（位置、四元数姿态、线速度、角速度，以及加速度计/陀螺仪偏置），采用由IMU驱动的非线性预测模型，通过雅可比矩阵进行协方差传播，并通过线性化方式引入UWB测距修正。

论文报告，加入EKF流水线后，单架无人机仿真的GPU吞吐量下降约20%（含EKF约为每秒8x10^6步，不含EKF约为每秒1x10^7步），而EKF的矩阵运算在CPU上带来的开销更为明显。在几何控制器下的"8字"轨迹跟踪评估（周期 10 秒）中，对比了真值反馈与高质量（σ=0.01 米）、低质量（σ=0.10 米）两种 UWB+IMU 配置；传感器质量降低会使 EKF 位置估计变差，跟踪性能也随之下降。作者将该扩展定位为一种能够以极小的吞吐量代价，在真实、退化的状态反馈条件下实现大规模并行控制器评估的工具，旨在为需要大规模训练与测试基于UWB定位（且定位本身不完美）的控制器的空中机器人研究提供基础性工具。

## Key technical points (EN)

- Base simulator: Crazyflow (arxiv 2606.01478, first submitted 31 May 2026) — JAX/XLA-based, GPU-accelerated, differentiable drone simulator unifying physics and controller into one computation graph.
- New contribution: a UWB+IMU state-feedback simulation pipeline plus a full-state (19-state) EKF, built as a modular extension to the existing simulator.
- UWB degradation model: Gaussian ranging noise + a per-anchor mean bias offset sampled once per episode; line-of-sight only (no multipath or dropout modeled).
- IMU degradation model: additive white noise plus slowly varying bias random walks on accelerations and angular velocities.
- EKF: 19 tracked states (position, quaternion attitude, linear velocity, angular velocity, accel/gyro biases); nonlinear IMU-driven prediction with Jacobian covariance propagation; linearized UWB range corrections.
- Performance cost: ~8x10^6 steps/s with EKF vs ~1x10^7 without on GPU (~20% throughput reduction); CPU overhead from EKF matrix operations is more pronounced.
- Evaluation: a figure-8 tracking test (10 s cycle) compares ground-truth feedback against high/low-quality (σ=0.01/0.10 m) UWB+IMU configurations; lower sensor quality degrades the EKF position estimate and tracking performance correspondingly.
- Venue: accepted to the 1st Workshop on Robot Meets GNSS and Ranging for Seamless Autonomy @ ICRA 2026. Project page: https://learnsyslab.github.io/crazyflow/.

## Key technical points (ZH)

- 基础仿真器：Crazyflow（arxiv 2606.01478，2026年5月31日首次提交）——基于JAX/XLA的GPU加速可微分无人机仿真器，将物理与控制器统一为单一计算图。
- 新贡献：作为现有仿真器的模块化扩展，新增UWB+IMU状态反馈仿真流水线，并配套全状态（19状态）EKF。
- UWB退化模型：测距高斯噪声叠加每个锚点在每个episode开始时采样一次的均值偏置；仅建模视距场景（未建模多径或丢包）。
- IMU退化模型：加速度与角速度叠加白噪声及缓变偏置随机游走。
- EKF：跟踪19个状态量（位置、四元数姿态、线速度、角速度、加速度计/陀螺仪偏置）；采用IMU驱动的非线性预测模型，通过雅可比矩阵进行协方差传播；UWB测距修正采用线性化方式引入。
- 性能代价：GPU上含EKF约每秒8x10^6步，不含EKF约每秒1x10^7步（吞吐量下降约20%）；EKF矩阵运算在CPU上带来的开销更明显。
- 评估：针对真值反馈与高/低质量（σ=0.01/0.10 米）UWB+IMU 配置进行的"8字"轨迹跟踪测试（周期10秒）；传感器质量降低会使EKF位置估计变差，跟踪性能随之下降。
- 发表场合：已被ICRA 2026"机器人遇见GNSS与测距，实现无缝自主"首届研讨会接收。项目页面：https://learnsyslab.github.io/crazyflow/。

## Why it matters / what's new (EN)

The authors motivate the extension by noting that evaluating controllers under imperfect, noisy state feedback such as realistic UWB pipelines across thousands of parallel rollouts remains a scaling bottleneck for existing simulators; the extension adds a configurable UWB+IMU noise/bias model and a 19-state EKF to a JAX-native, GPU-parallel, differentiable drone simulator while keeping the pipeline differentiable.

## Why it matters / what's new (ZH)

作者的动机是：在数千次并行仿真中、于不完美且含噪声的状态反馈（如真实 UWB 流水线）下评估控制器，仍是现有仿真器的扩展瓶颈；该扩展在基于 JAX、GPU 并行、可微分的无人机仿真器中加入可配置的 UWB+IMU 噪声/偏置模型与 19 状态 EKF，且整个流水线保持可微分。

## Images

![Crazyflow system block diagram: JAX/XLA unifying physics, sensing, estimation, and control into one differentiable graph | Crazyflow系统架构图：基于JAX/XLA，将物理、传感、估计与控制统一为单一可微分计算图](https://arxiv.org/html/2610.08225v1/uwb_crazyflow_blockdiagram_compressed.png)
