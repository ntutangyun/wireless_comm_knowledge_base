---
id: 2026-10-29_arxiv-quantization-aware-channel-tracking-distributed-mmimo-iot
date_published: 2026-10-27
date_found: 2026-10-29
type: academic-paper
technology: cellular
title_en: "Coordinated and Uncoordinated Channel Tracking for High-Rate IoT in Distributed Massive MIMO with Low-Resolution ADCs"
title_zh: "低分辨率 ADC 分布式大规模 MIMO 中面向高速率物联网的协调与非协调信道跟踪"
url: "https://arxiv.org/abs/2610.37508"
source_quality: full
topics: [channel-tracking, distributed-massive-MIMO, low-resolution-ADC, Kalman-filter, pilot-reuse, activity-detection, IoT]
topic_primary: cellular-massive-mimo
topics_secondary: [redcap-iot]
novelty_score: 2
---

## Summary (EN)

Hediyeh Soltanizadeh (Iran University of Science and Technology) and Ardavan Rahimian (Ulster University) study dynamic channel tracking for high-rate IoT in distributed massive MIMO where each access point (AP) uses low-resolution ADCs, pilot and data activity are decoupled, pilots are reused and mobile channels evolve across access slots. They extend two known trackers to quantised reception: a quantisation-aware joint coordinated Kalman filter (Q-JCKF) for the case where the network knows who sends pilots, and a quantisation-aware distributed probabilistic data association filter (Q-DPDAF) for uncoordinated access where pilot activity is unknown.

The paper derives closed-form use-and-then-forget (UatF) spectral-efficiency expressions for both, a large-N pilot-reuse ceiling, and a cross-AP association term with a posterior-concentration bound. It also characterises computation, memory and fronthaul scaling: Kronecker structure lowers Q-JCKF covariance processing, and groupwise Q-DPDAF limits hypothesis enumeration from 2^K to 2^Kr and allows parallel AP-local processing. Simulations (30 users, 25 APs with 4 antennas each, 2-bit ADCs by default, pilot length 5, mobility up to 30 m/s) show better lower-tail spectral efficiency than a co-located array with the same antenna count, near-ideal performance at 4-bit resolution, and large runtime reductions against legacy implementations.

## Summary (ZH)

Hediyeh Soltanizadeh（伊朗科技大学）与 Ardavan Rahimian（阿尔斯特大学）研究分布式大规模 MIMO 中面向高速率物联网的动态信道跟踪：每个接入点（AP）使用低分辨率 ADC，导频与数据活动解耦，导频被复用，且移动信道在各接入时隙间演化。他们把两种已知跟踪器扩展到量化接收：网络已知谁发送导频时使用的量化感知联合协调卡尔曼滤波器（Q-JCKF），以及导频活动未知的非协调接入下使用的量化感知分布式概率数据关联滤波器（Q-DPDAF）。

论文推导了两者的闭式"先用后忘"（UatF）频谱效率表达式、大 N 导频复用上限，以及带后验集中界的跨 AP 关联项；还刻画了计算、存储与前传的扩展性：Kronecker 结构降低 Q-JCKF 的协方差处理量，分组 Q-DPDAF 把假设枚举从 2^K 降到 2^Kr 并支持 AP 本地并行处理。仿真（30 个用户、25 个各 4 天线的 AP、默认 2 比特 ADC、导频长度 5、移动速度最高 30 m/s）显示，其下尾频谱效率优于同天线数的集中式阵列，4 比特时接近理想，并且运行时间比传统实现大幅下降。

## Key technical points (EN)

- Model: distributed mMIMO uplink, AP-dependent quantisation distortion, pilot groups with reuse, slot length 100 with 5 pilot symbols and 95 data symbols, pilot activity probability 0.5.
- Q-JCKF: recursive MMSE tracking with known pilot activity, keeping inter-user error cross-covariances from pilot collisions and the quantisation distortion covariance; recovers the ideal-ADC co-located JC-KF in the limit.
- Q-DPDAF: Gaussian-mixture moment matching over pilot-activity hypotheses; groupwise processing cuts enumeration from 2^K to 2^Kr and runs per AP.
- Analysis: closed-form and mixture-aware UatF rates, pilot-reuse ceiling at large N, cross-AP association term, and a conditional loss measure for Kalman measurement information caused by quantisation.
- Findings: with 2-bit ADCs the distributed layout improves the 5th-percentile spectral efficiency (about 0.017 bit/s/Hz, whereas the centred co-located array is essentially zero); 4-bit is not practically distinguishable from ideal ADCs within bootstrap uncertainty in the tested setup; tracking is robust to mobility.
- Limits: results are simulations over 30 random layouts with 8 dB shadowing; no hardware or standard-conformant channel traces.

## Key technical points (ZH)

- 模型：分布式 mMIMO 上行，AP 相关的量化失真，带复用的导频组，时隙长 100（导频 5、数据 95 个符号），导频活动概率 0.5。
- Q-JCKF：已知导频活动时的递归 MMSE 跟踪，保留导频碰撞引入的用户间误差互协方差及量化失真协方差；在极限情形下退化为理想 ADC 的集中式 JC-KF。
- Q-DPDAF：对导频活动假设做高斯混合矩匹配；分组处理把枚举量从 2^K 降到 2^Kr，并可按 AP 并行。
- 分析：闭式及混合感知的 UatF 速率、大 N 导频复用上限、跨 AP 关联项，以及量化造成的卡尔曼测量信息条件损失度量。
- 发现：2 比特 ADC 下分布式布局改善第 5 百分位频谱效率（约 0.017 bit/s/Hz，而居中的集中式阵列几乎为零）；在所测设置中 4 比特与理想 ADC 在自助法不确定度内实际上无法区分；对移动性鲁棒。
- 局限：结果来自 30 个随机布局、8 dB 阴影的仿真，没有硬件或符合标准的信道数据。

## Why it matters / what's new (EN)

The authors note that earlier JC-KF/PDAF trackers assume ideal-ADC co-located reception, while quantisation-aware cell-free estimators do not track channels recursively; this work combines the two and finds 4-bit performance practically indistinguishable from ideal ADCs in the tested setup. The contribution is an analytical and algorithmic one for massive-IoT access in beyond-5G/6G distributed massive MIMO, validated only by simulation.

## Why it matters / what's new (ZH)

作者指出，既有 JC-KF/PDAF 跟踪器假设理想 ADC 的集中式接收，而量化感知的无蜂窝估计方法不做递归跟踪；本文将二者结合，并发现在所测设置中 4 比特与理想 ADC 实际上难以区分。其贡献在于面向 B5G/6G 分布式大规模 MIMO 中海量物联网接入的解析与算法工作，仅经仿真验证。

## Images

None.
