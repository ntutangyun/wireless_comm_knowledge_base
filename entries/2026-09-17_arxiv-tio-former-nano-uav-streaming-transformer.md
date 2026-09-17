---
id: 2026-09-17_arxiv-tio-former-nano-uav-streaming-transformer
date_published: 2026-09-15
date_found: 2026-09-17
technology: edge-ai
type: academic-paper
title_en: "TIO-Former: Ultra-Lightweight 6-Directional ToF-Inertial Odometry for Nano-UAVs via a Streaming Causal Transformer"
title_zh: "TIO-Former：面向纳米无人机的六向 ToF-惯性超轻量流式因果 Transformer 里程计"
url: "https://arxiv.org/abs/2609.17198"
source_quality: full
topics: [nano-UAV, ToF-sensing, streaming-transformer, bounded-memory-inference]
topic_primary: edge-model-efficiency
topics_secondary: [on-device-inference]
novelty_score: 4
---

## Summary (EN)

The paper (Yang Liu, Yifan He, Wenhao Zhao, Xiangyu Mo, Yang Xu, Hao Wei, Mingze Ma, Huan Li, Yifan Wu, Zipeng Dai, Xin Zhou, Fei Gao) tackles ego-motion estimation for nano-UAVs operating without GPS, under size-weight-power-and-compute (SWaP-C) constraints tight enough that visual sensors and LiDAR exceed the payload budget, optical flow degrades in low-texture scenes, and inertial-only estimation drifts. The authors' sensor choice is an ultra-lightweight (15 g total) payload of six orthogonal 8x8 Time-of-Flight (ToF) arrays plus a 200 Hz 6-axis IMU. TIO-Former's architecture has to solve three coupled problems from this sensor set: sparse-range measurement dropouts, motion-dependent (anisotropic) directional observability across the six views, and maintaining useful temporal context within a fixed compute/memory budget during continuous flight. It addresses these with (1) reliability-aware ToF encoding — deterministic reliability masks from sensor return status, causal imputation of invalid entries from valid neighbors and prior frames, and a "bilateral gated difference" that weights inter-frame range changes by reliability at both endpoints to suppress artifacts at validity transitions, trained with stochastic degradation at missing ratios of 0.1/0.3/0.5; (2) IMU-guided directional fusion — a weight-shared CNN extracts features from all six sensor grids with learnable view embeddings, a cross-view Transformer models dependencies across directions, and a three-layer 1D-CNN IMU encoder drives a cross-attention mechanism that up-weights geometrically informative directions and suppresses degenerate ones; and (3) a streaming causal Transformer with bounded memory — an uncompressed local KV cache (capacity 8) plus a compressed "Chunk-FIFO" memory (capacity 4) that pools and MLP-projects the oldest 4 evicted pairs into summary tokens, giving a total context span of 24 frames (~1.6 s at 15 Hz) while attending to only 12 retrieval tokens per step, keeping inference cost and memory footprint constant regardless of flight duration. Training also supervises multiple future horizons (4/8/16/32 steps for translation, 4/8/16 for rotation) with path-length regularization and residual smoothness terms.

The system was deployed on a Crazyflie nano-UAV with a LicheeRV Nano companion computer (SG2002 SoC: RISC-V C906 core at 850 MHz plus a CV181x TPU), evaluated on a motion-capture flight benchmark of 9,492.01 s covering 2,195.22 m of trajectory (random flights split 70:15:15, canonical geometric paths and held-out sequences reserved for testing), plus a separate multi-environment dataset of 2,362 m flown with the same sensing payload on an extended-endurance platform across offices, a pantry, a long corridor and a meeting room. Against Crazyflie's stock optical-flow-plus-single-ToF estimator and two learned inertial-only baselines (TLIO, AirIO), TIO-Former cuts position error by 54.4% versus the optical-flow baseline and by 66.4-89.1% versus the inertial baselines, reaching an absolute position ATE of 0.118+/-0.007 m, relative position error of 0.0039+/-0.0001 m and endpoint drift rate of 7.18+/-0.37%. On-device, the model (1.117M parameters, 3.958 MiB storage) runs at a P95 latency of 10.466 ms with a peak resident memory of 6.324 MiB (4.94% of the SoC's 128 MiB RAM) and 14.89% single-core CPU utilization, with zero deadline overruns across 5,000 cycles. An ablation against naive concatenation (no cross-attention) shows the directional-fusion mechanism holds relative ATE growth to 57.19% under directional view loss versus 151.84% for concatenation, and the degradation-augmented model still achieves 0.174 m ATE when 50% of pixels are missing at test time, and 0.245 m ATE at 70% missing measurements (out-of-distribution). Code is released at github.com/Ly041021/TIO-Former.

## Summary (ZH)

本文（Yang Liu、Yifan He、Wenhao Zhao、Xiangyu Mo、Yang Xu、Hao Wei、Mingze Ma、Huan Li、Yifan Wu、Zipeng Dai、Xin Zhou、Fei Gao）研究的是无 GPS 环境下纳米无人机的自身运动估计问题，其体积-重量-功耗-算力（SWaP-C）约束极为苛刻：视觉传感器与激光雷达超出载荷预算，光流在低纹理场景中性能下降，纯惯性估计则存在累积漂移。作者选用的传感方案是总重仅 15 克的超轻量载荷——六个正交布置的 8×8 飞行时间（ToF）阵列，外加一个 200 Hz 六轴 IMU。TIO-Former 的架构需要基于这套传感方案解决三个耦合问题：稀疏测距数据的丢失、随运动变化的（各向异性）方向可观测性差异，以及在持续飞行中于固定算力/内存预算内维持有效的时序上下文。其应对方式为：（1）可靠性感知的 ToF 编码——依据传感器返回状态构建确定性可靠性掩码，用有效邻域与历史帧对无效条目进行因果插补，并采用"双边门控差分"以两端可靠性对帧间距离变化加权，抑制有效性转换处的伪影，训练中引入 0.1/0.3/0.5 三档随机缺失率的退化增强；（2）IMU 引导的方向融合——权重共享 CNN 结合可学习视角嵌入从六路传感器网格中提取特征，跨视角 Transformer 建模各方向之间的依赖关系，三层一维 CNN 构成的 IMU 编码器驱动交叉注意力机制，动态提升几何信息丰富方向的权重、抑制退化方向；（3）具有有限内存的流式因果 Transformer——未压缩的本地 KV 缓存（容量 8）加上压缩的"Chunk-FIFO"记忆（容量 4），将最早被淘汰的 4 组键值对池化并通过 MLP 投影为摘要 token，使总上下文跨度达到 24 帧（15 Hz 下约 1.6 秒），而每步仅需关注 12 个检索 token，从而使推理成本与内存占用不随飞行时长增长。训练还对多个未来时间尺度进行监督（平移 4/8/16/32 步、旋转 4/8/16 步），并引入路径长度正则化与残差平滑项。

系统部署于配备 LicheeRV Nano 协处理器（SG2002 SoC：主频 850 MHz 的 RISC-V C906 核心加 CV181x TPU）的 Crazyflie 纳米无人机上，在动捕环境下共采集 9,492.01 秒、轨迹总长 2,195.22 米的飞行基准数据进行评测（随机飞行按 70:15:15 划分，规则几何轨迹与留出序列专用于测试）；另有一份独立的多场景数据集，以相同传感载荷搭载于长航时飞行平台，在办公室、储藏间、长走廊与会议室中共飞行 2,362 米。相较 Crazyflie 原生的光流加单点 ToF 估计器以及两个纯惯性学习基线（TLIO、AirIO），TIO-Former 相对光流基线降低位置误差 54.4%，相对惯性基线降低 66.4%-89.1%，绝对位置 ATE 为 0.118±0.007 米，相对位置误差为 0.0039±0.0001 米，终点漂移率为 7.18%±0.37%。在设备端，该模型（111.7 万参数，存储占用 3.958 MiB）以 P95 延迟 10.466 毫秒运行，峰值常驻内存 6.324 MiB（占 SoC 128 MiB 内存的 4.94%），单核 CPU 占用率 14.89%，在 5,000 个周期中零截止时限超时。与朴素拼接（无交叉注意力）方案的消融对比显示，方向融合机制在方向性视图丢失时将相对 ATE 增幅控制在 57.19%，而拼接方案则达 151.84%；经退化增强训练的模型在测试时面对 50% 像素缺失仍能达到 0.174 米的 ATE，面对 70%（分布外）缺失测量时也能达到 0.245 米的 ATE。代码已在 github.com/Ly041021/TIO-Former 开源。

## Key technical points (EN)

- **Sensing**: 15 g total payload — six orthogonal 8x8 ToF arrays + 200 Hz 6-axis IMU, chosen specifically to fit nano-UAV SWaP-C limits where cameras/LiDAR exceed payload budget.
- **Reliability-aware ToF encoding**: deterministic reliability masks, causal imputation, and a bilateral gated difference to suppress artifacts from measurement dropouts and validity transitions.
- **IMU-guided directional fusion**: weight-shared CNN + cross-view Transformer + IMU-driven cross-attention that up-weights geometrically informative directions per current motion.
- **Bounded-memory streaming Transformer**: local KV cache (capacity 8) + compressed Chunk-FIFO memory (capacity 4), 24-frame (~1.6 s) context with only 12 retrieval tokens attended per step — inference cost and memory stay constant regardless of flight duration.
- **On-device numbers (LicheeRV Nano, SG2002 RISC-V+TPU)**: 1.117M params / 3.958 MiB storage, P95 latency 10.466 ms, peak resident memory 6.324 MiB (4.94% of 128 MiB RAM), 14.89% single-core CPU, 0/5,000 deadline overruns.
- **Accuracy**: 54.4% lower position error vs. Crazyflie's optical-flow estimator, 66.4-89.1% lower vs. learned inertial baselines (TLIO, AirIO); ATE 0.118+/-0.007 m on the 2,195 m motion-capture flight benchmark; a separate 2,362 m multi-environment dataset covers offices, a pantry, a corridor and a meeting room (per-scene ATE 0.091-0.158 m).

## Key technical points (ZH)

- **传感方案**：15 克总载荷——六个正交 8×8 ToF 阵列 + 200 Hz 六轴 IMU，专为纳米无人机 SWaP-C 约束设计，规避摄像头/激光雷达超出载荷预算的问题。
- **可靠性感知 ToF 编码**：确定性可靠性掩码、因果插补，以及双边门控差分，用以抑制测距丢失与有效性转换带来的伪影。
- **IMU 引导的方向融合**：权重共享 CNN + 跨视角 Transformer + IMU 驱动的交叉注意力，根据当前运动状态动态提升几何信息丰富方向的权重。
- **有限内存流式 Transformer**：本地 KV 缓存（容量 8）+ 压缩 Chunk-FIFO 记忆（容量 4），实现 24 帧（约 1.6 秒）的上下文跨度，每步仅需关注 12 个检索 token——推理成本与内存占用不随飞行时长增长。
- **设备端数据（LicheeRV Nano，SG2002 RISC-V+TPU）**：111.7 万参数 / 3.958 MiB 存储，P95 延迟 10.466 毫秒，峰值常驻内存 6.324 MiB（占 128 MiB 内存的 4.94%），单核 CPU 占用 14.89%，5,000 个周期中零截止时限超时。
- **精度**：相对 Crazyflie 光流估计器降低位置误差 54.4%，相对学习型纯惯性基线（TLIO、AirIO）降低 66.4%-89.1%；在 2,195 米动捕飞行基准上 ATE 为 0.118±0.007 米；另一份 2,362 米的多场景数据集覆盖办公室、储藏间、走廊与会议室（各场景 ATE 0.091-0.158 米）。

## Why it matters / what's new (EN)

The KB's edge-model-efficiency entries to date are dominated by LLM/vision-model quantization and pruning on phone- or board-class hardware; TIO-Former is a different shape of the same problem — a purpose-built streaming Transformer whose memory footprint is architecturally bounded (fixed KV-cache + Chunk-FIFO summarization) rather than merely compressed, deployed on a RISC-V+TPU companion SoC with a 128 MiB RAM budget, and measured on a real-flight benchmark spanning nearly 2.2 km rather than a static dataset. It is a concrete data point for how far the "bounded-memory-regardless-of-duration" design pattern can be pushed on genuinely constrained edge silicon.

## Why it matters / what's new (ZH)

知识库目前的边缘模型效率类条目大多集中于手机或开发板级硬件上的 LLM/视觉模型量化与剪枝；TIO-Former 呈现的是同一问题的另一种形态——一个专门设计的流式 Transformer，其内存占用在架构层面就被限定（固定 KV 缓存 + Chunk-FIFO 摘要化），而非仅靠压缩实现，部署于 128 MiB 内存预算的 RISC-V+TPU 协处理 SoC 上，并在跨度近 2.2 公里的真实飞行基准上完成评测，而非仅依赖静态数据集。这为"无论运行时长如何、内存占用保持有限"这一设计范式在真正受限的边缘芯片上能做到何种程度，提供了一个具体的数据点。

## Images

![Directional attention weights conditioned on motion kinematics | 依运动状态条件化的方向注意力权重](https://arxiv.org/html/2609.17198v1/directional_attention.png)
