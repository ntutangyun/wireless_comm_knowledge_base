---
id: 2026-10-13_arxiv-vifinav-visual-wifi-navigation-to-devices
date_published: 2026-10-08
date_found: 2026-10-13
technology: wifi
type: academic-paper
title_en: "Visual-Wi-Fi Navigation to Signal-Emitting Devices"
title_zh: "面向发射信号设备的视觉-Wi-Fi 导航"
url: "https://arxiv.org/abs/2610.12733"
source_quality: full
topics: [Wi-Fi sensing, angle of arrival, robot navigation, embodied AI, ray tracing]
topic_primary: sensing-csi
topics_secondary: [ai-for-wifi]
novelty_score: 2
---

## Summary (EN)

A paper submitted to arXiv on 8 October 2026 (cs.RO; Wang, Xu, Shu and Zhao; comments say under review) studies visual-Wi-Fi navigation: a robot reaches a Wi-Fi-emitting device in an unmapped indoor environment using onboard visual observations and Wi-Fi packets overheard from the device, without connecting to the device or modifying infrastructure. The paper states the problem as two requirements: pose-dependent Wi-Fi observations during closed-loop policy learning, and reliable spatial cues from bearing measurements that indoor multipath corrupts on a moving robot.

The work has two parts. WiFiSpaces extends the Habitat embodied simulator with online ray-traced Wi-Fi sensing, rendering observations for a robot-mounted antenna array at continuous poses during policy rollouts (configurable carrier, bandwidth, array geometry and materials; maximum ray depth 8). ViFiNav is the navigation framework: an online source-localization algorithm uses robot motion to disambiguate and aggregate bearings from multiple viewpoints (with RANSAC) into a confidence-aware source estimate, and a learned policy (frozen ResNet-50 depth encoder, LSTM core, DD-PPO training) fuses that evolving estimate with depth. Training is two-stage: ground-truth angle-of-arrival pretraining, then fine-tuning on ray-traced Wi-Fi observations.

On HSSD test scenes (Table II of the paper), ViFiNav with fine-tuning reaches 68.57% success rate versus 53.02% without fine-tuning, 49.76% for a point-goal policy fed the same location estimate, and 17.78% for localize-then-navigate; the oracle upper bounds are 87.22% (point-goal) and 82.30% (ViFiNav with ground-truth AoA); mean localization error is 1.24 m. The policy transfers zero-shot to unseen scene datasets and was deployed on a real robot with a Wi-Fi sensor built from a commodity router re-housed as a four-antenna uniform linear array, without real-world training; trials covered line-of-sight, non-line-of-sight and a phone inside a package.

## Summary (ZH)

一篇于 2026 年 10 月 8 日提交至 arXiv 的论文（cs.RO；作者 Wang、Xu、Shu、Zhao；备注为审稿中）研究视觉-Wi-Fi 导航：在未建图的室内环境中，机器人利用车载视觉观测以及从目标设备侦听到的 Wi-Fi 数据包到达发射 Wi-Fi 的设备，无需连接该设备或改动基础设施。论文将问题归结为两项需求：闭环策略学习期间需要随位姿变化的 Wi-Fi 观测，以及在运动机器人上从被室内多径污染的方位测量中获得可靠的空间线索。

工作分为两部分。WiFiSpaces 在 Habitat 具身仿真器上扩展了在线光线追踪 Wi-Fi 感知，在策略 rollout 中按连续位姿为机载天线阵列渲染观测（载波、带宽、阵列几何与材质均可配置；最大光线深度 8）。ViFiNav 是导航框架：在线源定位算法利用机器人运动消歧并融合多视角方位（含 RANSAC），得到带置信度的源位置估计；学习得到的策略（冻结的 ResNet-50 深度编码器、LSTM 核心、DD-PPO 训练）将该不断更新的估计与深度图融合。训练分两阶段：先用真实到达角（AoA）预训练，再在光线追踪的 Wi-Fi 观测上微调。

在 HSSD 测试场景上（论文表 II），微调后的 ViFiNav 成功率为 68.57%，未微调为 53.02%，输入相同位置估计的点目标策略为 49.76%，先定位后导航为 17.78%；理想上界分别为 87.22%（点目标）与 82.30%（使用真实 AoA 的 ViFiNav）；平均定位误差 1.24 m。该策略可零样本迁移到未见过的场景数据集，并在真实机器人上部署——Wi-Fi 传感器由商用路由器改装为四天线均匀线阵，无需真实世界训练；试验涵盖视距、非视距以及手机置于包裹内的场景。

## Key technical points (EN)

- **Task**: reach a Wi-Fi-emitting device in an unmapped environment from vision plus overheard packets; no association with the device, no infrastructure changes.
- **WiFiSpaces**: Habitat extension with online ray-traced Wi-Fi observations for an antenna array at continuous poses.
- **Localization**: motion-aware multi-viewpoint bearing aggregation (RANSAC) producing a confidence-aware source estimate; mean localization error 1.24 m on HSSD test scenes.
- **Policy**: frozen ResNet-50 depth encoder, LSTM (hidden 512), DD-PPO; 60M steps GT-AoA pretraining (~6 h) then 12M steps fine-tuning on ray-traced observations (~38 h) on six L40S GPUs.
- **Results (HSSD)**: SR 68.57% (ViFiNav) vs 53.02% (no fine-tuning), 49.76% (PointNav on estimate), 17.78% (Loc-then-PointNav).
- **Hardware**: commodity router re-housed as a four-antenna ULA on a mobile robot; zero-shot sim-to-real deployment.
- **Stated generality**: only the localization front end is Wi-Fi specific; the authors say UWB or BLE direction finding could replace Wi-Fi.

## Key technical points (ZH)

- **任务**：在未建图环境中，仅凭视觉与侦听到的数据包到达发射 Wi-Fi 的设备；无需与设备关联，也无需改动基础设施。
- **WiFiSpaces**：Habitat 扩展，为连续位姿下的天线阵列提供在线光线追踪 Wi-Fi 观测。
- **定位**：运动感知的多视角方位聚合（RANSAC），输出带置信度的源估计；HSSD 测试场景平均定位误差 1.24 m。
- **策略**：冻结 ResNet-50 深度编码器、LSTM（隐藏维度 512）、DD-PPO；6 张 L40S GPU 上 60M 步 GT-AoA 预训练（约 6 小时）+ 12M 步光线追踪观测微调（约 38 小时）。
- **结果（HSSD）**：成功率 68.57%（ViFiNav）对比 53.02%（未微调）、49.76%（基于估计的 PointNav）、17.78%（先定位后 PointNav）。
- **硬件**：商用路由器改装为四天线均匀线阵并装于移动机器人；零样本仿真到真实部署。
- **论文声明的通用性**：只有定位前端与 Wi-Fi 相关；作者称 UWB 或 BLE 测向可替换 Wi-Fi。

## Why it matters / what's new (EN)

The paper uses Wi-Fi packets overheard by a commodity-router antenna array as an angle-of-arrival cue for a learned robot navigation policy, trained in a ray-traced simulator. Results come from the authors' simulation benchmark plus a real-robot demonstration; the paper is under review.

## Why it matters / what's new (ZH)

论文将商用路由器天线阵列侦听到的 Wi-Fi 数据包作为到达角线索，驱动学习得到的机器人导航策略，并在光线追踪仿真器中训练。结果来自作者的仿真基准与真实机器人演示；论文处于审稿阶段。

## Images

![Visual-Wi-Fi navigation task | 视觉-Wi-Fi 导航任务示意](https://arxiv.org/html/2610.12733v1/task_thin.png)
![ViFiNav policy overview | ViFiNav 策略总览](https://arxiv.org/html/2610.12733v1/policy_overview_new.png)
