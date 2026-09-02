---
id: 2026-09-02_arxiv-radiosight-predictive-mmwave-xr-beamforming
date_published: 2026-08-30
date_found: 2026-09-02
type: academic-paper
technology: cellular
title_en: "RadioSight: Predictive mmWave XR Network Optimization from Dynamic Neural Radio Fields"
title_zh: "RadioSight：基于动态神经无线电场的预测式毫米波XR网络优化"
url: "https://arxiv.org/abs/2608.29504"
source_quality: abstract_only
topics: [mmWave, 28GHz, XR, neural-radio-fields, beam-management, MU-MIMO, edge-inference, proactive-beamforming]
topic_primary: 5g-nr
topics_secondary: [cellular-massive-mimo]
novelty_score: 3
---

## Summary (EN)
Lihao Zhang, Paul Kudyba, Zhenlin An and Haijian Sun (arXiv v1, 30 Aug 2026) target a concrete failure mode of mmWave XR delivery: highly directional links deliver multi-gigabit throughput but are fragile to user mobility and blockage, and today's reactive beam management causes frequent outages once a link degrades. Prior "neural radio field" work can predict radio propagation but has stayed limited to offline channel reconstruction. RadioSight is presented as a real-time, multi-modal radio-field system that predicts RF geometry changes ahead of time and drives proactive Multi-User MIMO beamforming, rather than reacting after a link has already degraded.

The system combines backward beam-tracing with real-time semantic object synchronization, so that anticipated changes in the RF environment (moving bodies, obstacles) can be folded into the next beam decision without retraining the underlying model. RadioSight is implemented as an edge-executable pipeline running against commercial 28 GHz mmWave arrays, and determines the beams for each scheduling window during the preceding window — i.e., without an exhaustive beam sweep at decision time. Reported experiments show up to roughly a 50% reduction in beam-search error, a 2x improvement in median throughput, and improved link stability versus the reactive baseline.

## Summary (ZH)
Lihao Zhang、Paul Kudyba、Zhenlin An 与 Haijian Sun（arXiv v1，2026年8月30日）针对毫米波 XR 传输中的一个具体失效模式展开研究：高定向性链路虽能提供数千兆比特每秒的吞吐量，但对用户移动和遮挡十分脆弱，而当前的被动式（reactive）波束管理一旦链路劣化就会频繁导致中断。既有的"神经无线电场"研究虽能预测无线电传播，但仍局限于离线信道重建。论文提出的 RadioSight 是一套实时、多模态的无线电场系统，能够提前预测射频几何变化，并据此驱动前瞻式（proactive）多用户 MIMO 波束成形，而非等链路已经劣化后再作出反应。

该系统将后向波束追踪（backward beam-tracing）与实时语义对象同步相结合，使得对射频环境变化（移动体、障碍物）的预判能够被纳入下一次波束决策，而无需重新训练底层模型。RadioSight 被实现为一条可在边缘侧执行的处理流水线，运行于商用 28 GHz 毫米波阵列之上，能够在前一个调度窗口内就确定下一个调度窗口所用的波束——即决策时无需进行穷举式波束扫描。实验结果显示，相较被动式基线，波束搜索误差最多降低约 50%，中位吞吐量提升 2 倍，链路稳定性也有所改善。

## Key technical points (EN)
- Problem: mmWave XR links are throughput-strong but blockage/mobility-fragile; reactive beam management causes outages after the fact.
- Prior-work gap: neural radio fields predicted propagation but only for offline channel reconstruction, not real-time proactive control.
- Method: backward beam-tracing + real-time semantic object synchronization to anticipate RF geometry changes without full model retraining.
- Deployment target: edge-executable pipeline against commercial 28 GHz mmWave arrays (a 5G NR mmWave-band frequency).
- Timing model: beams for scheduling window N are decided during window N-1, avoiding an exhaustive beam sweep at decision time.
- Results: ~50% reduction in beam-search error, 2x median throughput, improved link stability vs. reactive baseline.
- Target application: proactive Multi-User MIMO beamforming for XR delivery.

## Key technical points (ZH)
- 问题：毫米波 XR 链路吞吐量高，但对遮挡/移动十分脆弱；被动式波束管理只能在中断发生后作出反应。
- 既有研究缺口：神经无线电场能够预测传播，但仅用于离线信道重建，无法用于实时前瞻式控制。
- 方法：后向波束追踪 + 实时语义对象同步，在无需完整重训练底层模型的前提下预判射频几何变化。
- 部署目标：面向商用 28 GHz 毫米波阵列（属于 5G NR 毫米波频段）的边缘侧可执行流水线。
- 时序模型：第 N 个调度窗口所用波束在第 N-1 个窗口内就已决定，避免决策时进行穷举式波束扫描。
- 结果：相较被动式基线，波束搜索误差最多降低约 50%，中位吞吐量提升 2 倍，链路稳定性提升。
- 目标应用：面向 XR 传输的前瞻式多用户 MIMO 波束成形。

## Why it matters / what's new (EN)
The KB's cellular-massive-mimo and 5g-nr bins already cover CSI-feedback foundation/scene models (Learnware) and PCI/network-planning tooling, but RadioSight is the first entry to close the loop on real-time proactive beam control for mmWave: rather than a better offline channel model or a smarter scheduler heuristic, it ships an edge-deployable system that predicts the *next* scheduling window's beam geometry from a running semantic model of the environment, and reports concrete throughput and beam-error numbers against commercial 28 GHz hardware rather than pure simulation. It is a useful counterpoint to the KB's mostly O-RAN-control-plane-level AI-RAN coverage: this is PHY/beam-layer intelligence running at the edge, on the timescale of individual scheduling windows.

## Why it matters / what's new (ZH)
知识库 cellular-massive-mimo 与 5g-nr 栏目已覆盖 CSI 反馈基础/场景模型（Learnware）以及 PCI/网络规划工具，但 RadioSight 是首个把毫米波实时前瞻式波束控制这一闭环真正打通的条目：它并非提供更好的离线信道模型或更聪明的调度启发式算法，而是交付了一套可在边缘部署的系统，能够依据对环境的实时语义建模，预测*下一个*调度窗口的波束几何，并在商用 28 GHz 硬件而非纯仿真环境下给出具体的吞吐量与波束误差数据。相较于知识库中偏重 O-RAN 控制面层级的 AI-RAN 覆盖，本条目补上了运行在单个调度窗口时间尺度、位于物理层/波束层的边缘智能这一块。

## Images
