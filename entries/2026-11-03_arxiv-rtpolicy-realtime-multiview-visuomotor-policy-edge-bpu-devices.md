---
id: 2026-11-03_arxiv-rtpolicy-realtime-multiview-visuomotor-policy-edge-bpu-devices
date_published: 2026-10-30
date_found: 2026-11-03
technology: edge-ai
type: academic-paper
title_en: "RTPolicy: Real-Time (32.9 Hz) Multi-View Visuomotor Policy for Robotic Manipulation on Edge Devices"
title_zh: "RTPolicy：面向边缘设备的实时（32.9 Hz）多视角机器人操作视觉运动策略"
url: "https://arxiv.org/abs/2610.41625"
source_quality: full
topics: [visuomotor-policy, flow-matching, INT16, RDK-S600, Jetson-Orin-NX, TensorRT, robotics, asynchronous-inference]
topic_primary: on-device-inference
topics_secondary: [edge-model-efficiency, edge-ai-silicon]
novelty_score: 2
---

## Summary (EN)

The paper starts from the point that closed-loop robotic manipulation needs low inference latency, particularly under asynchronous inference where action chunks must be refreshed promptly, while existing visuomotor policies rely on computationally expensive visual backbones with high deployment overhead. It presents RTPolicy, a multi-view visuomotor policy built from a frozen DINOv3 ConvNeXt backbone, view-aware feature fusion and visual compression, which condenses the camera views into a compact token set (12 visual tokens in the reported configuration). A flow-matching diffusion-transformer action head, conditioned on those tokens, the robot state and flow time, produces action chunks in four integration steps.

Reported results: on the RoboTwin 2.0 single-task clean evaluation across 50 tasks, mean success rate is 52.26%, against 46.4% for the strongest leaderboard baseline pi_0. On a real bimanual platform under asynchronous streaming inference (inference at a fixed 10 Hz, execution at 30 Hz, with trajectory stitching), mean success rate is 72.0%. The paper's latency table lists end-to-end inference per platform: 23.80 ms (FP32) and 10.92 ms (FP16) on an RTX 4090; 266.3 ms (FP32) and 143.2 ms (FP16) on a Jetson Orin NX 16GB; and on the quantised BPU boards RDK S600 18.59 ms (INT8) and 30.35 ms (INT16, 32.9 Hz), and RDK S100 86.56 ms (INT8) and 149.72 ms (INT16, 6.7 Hz). Compared methods are marked as too slow to be practical on some boards, and the paper notes that success rates come from the GPU evaluation configuration rather than per-device task evaluations.

## Summary (ZH)

论文的出发点是：闭环机器人操作需要低推理延迟，尤其是在异步推理下动作块必须被及时刷新，而现有视觉运动策略依赖计算开销大的视觉骨干，部署成本高。论文提出 RTPolicy，一种多视角视觉运动策略，由冻结的 DINOv3 ConvNeXt 骨干、视角感知特征融合和视觉压缩构成，把多路相机画面压缩为紧凑的 token 集合（所报告配置下为 12 个视觉 token）。以这些 token、机器人状态和流时间为条件的流匹配扩散 Transformer 动作头，经四步积分生成动作块。

论文报告的结果：在 RoboTwin 2.0 单任务（clean）评测的 50 个任务上，平均成功率为 52.26%，而排行榜上最强基线 pi_0 为 46.4%。在真实双臂平台的异步流式推理下（固定 10 Hz 推理、30 Hz 执行，并做轨迹拼接），平均成功率为 72.0%。论文的延迟表给出各平台端到端推理时间：RTX 4090 上 FP32 为 23.80 ms、FP16 为 10.92 ms；Jetson Orin NX 16GB 上 FP32 为 266.3 ms、FP16 为 143.2 ms；量化 BPU 开发板 RDK S600 上 INT8 为 18.59 ms、INT16 为 30.35 ms（32.9 Hz），RDK S100 上 INT8 为 86.56 ms、INT16 为 149.72 ms（6.7 Hz）。对比方法在部分开发板上被标注为慢到无法实际部署；论文同时说明成功率来自 GPU 评测配置，而非各设备上的逐任务评测。

## Key technical points (EN)

- **Token budget**: visual compression reduces the conditioning to 12 tokens, versus 768 tokens for one compared three-view method and 1 token for single-view diffusion-policy baselines in the paper's table.
- **Action head**: flow-matching DiT, four integration steps from Gaussian noise to an action chunk.
- **Deployment**: GPU platforms run TensorRT engines at FP32/FP16; the BPU boards run quantised INT8 and INT16 models. The 10 Hz inference budget is met on RTX 4090, RDK S600 and RDK S100 (INT8 on the BPU boards; the S100 at INT16 runs at 6.7 Hz), and the Jetson Orin NX reaches 7 Hz.
- **Streaming**: inference at 10 Hz in parallel with 30 Hz execution; a piecewise-jerk stitching step blends each new chunk into the executing trajectory.
- **Limits stated**: the visual representation is frozen from self-supervised pretraining and the action model is task-specific, so there is no single task-conditioned generalist checkpoint.

## Key technical points (ZH)

- **token 预算**：视觉压缩把条件输入降到 12 个 token；论文表中一种三视角对比方法为 768 个 token，单视角 diffusion-policy 基线为 1 个 token。
- **动作头**：流匹配 DiT，从高斯噪声经四步积分得到动作块。
- **部署**：GPU 平台运行 TensorRT 引擎（FP32/FP16）；BPU 开发板运行量化的 INT8 与 INT16 模型。RTX 4090、RDK S600 和 RDK S100 均满足 10 Hz 推理预算（BPU 开发板为 INT8；S100 在 INT16 下为 6.7 Hz），Jetson Orin NX 达到 7 Hz。
- **流式执行**：10 Hz 推理与 30 Hz 执行并行；分段加加速度（jerk）拼接步骤把每个新动作块平滑接入正在执行的轨迹。
- **论文所述局限**：视觉表征来自自监督预训练并被冻结，动作模型针对具体任务训练，因此没有单一的任务条件通用检查点。

## Why it matters / what's new (EN)

The paper's framing is that existing visuomotor policies' visual backbones and action generation drive inference latency, and that a compact token interface lets a manipulation policy run on embedded accelerators within a closed-loop budget. The contribution is evidenced with measured latency on named boards in several precisions, which makes it a usable data point on how a vision-conditioned generative policy maps onto edge NPU/BPU silicon. It is a robotics-specific result from an author team led largely by D-Robotics, the board vendor, with Soochow University, Tongji University and CASIA co-authors, evaluated on one bimanual platform and a simulation benchmark, and it is a v1 preprint.

## Why it matters / what's new (ZH)

论文的思路是：现有视觉运动策略的视觉骨干与动作生成是推理延迟的主要来源；紧凑的 token 接口使操作策略能在嵌入式加速器上满足闭环预算。其证据是在多个精度下、于具名开发板上实测的延迟，这使它成为一个关于视觉条件生成式策略如何映射到边缘 NPU/BPU 芯片的可用数据点。这是机器人领域的特定结果，作者团队以开发板厂商 D-Robotics 为主，另有苏州大学、同济大学与中科院自动化所作者，仅在一个双臂平台和一个仿真基准上评测，且为 v1 预印本。

## Images

*(No redistributable images for this entry.)*
