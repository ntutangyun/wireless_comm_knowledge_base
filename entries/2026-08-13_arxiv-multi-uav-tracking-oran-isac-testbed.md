---
id: 2026-08-13_arxiv-multi-uav-tracking-oran-isac-testbed
date_published: 2026-08-11
date_found: 2026-08-13
type: academic-paper
technology: cellular
title_en: "Multi-UAV Tracking Evaluation Using 5G Uplink Signals on an O-RAN ISAC Simulation Testbed"
title_zh: "基于 O-RAN ISAC 仿真测试床的 5G 上行信号多无人机跟踪评估"
url: "https://arxiv.org/abs/2608.10784"
source_quality: full
topics: [ISAC, O-RAN, UAV, SRS, passive-radar, xApp]
topic_primary: open-ran
topics_secondary: [6g-vision]
novelty_score: 2
---

## Summary (EN)
Gurung and Sathananthan (arXiv 11 Aug 2026) evaluate multi-UAV tracking by repurposing **5G NR uplink Sounding Reference Signals (SRS) as passive-radar waveforms** on an O-RAN-integrated simulation testbed: OpenAirInterface (RAN) + FlexRIC (RIC) + Sionna RT (ray-traced channel), with the tracker packaged as a **RIC xApp** and a SAPIENT interface feeding a command-and-control fusion node — an architecture directly aligned with the Rel-20 drone-detection sensing baseline.

Three UAVs with distinct altitude, velocity and radar cross-sections (−8 to −20 dBsm) fly in a bistatic geometry against an 8-element planar receive array. The headline finding is diagnostic rather than triumphant: the binding constraint is **contention, not sensitivity** — two targets share one nearest detection in ~74% of coherent processing intervals, and elevation information resolves the association in only 58% of intervals. Targets are detected far more often than they are successfully *tracked*, isolating multi-target association as the bottleneck for network-based drone surveillance.

## Summary (ZH)
Gurung 与 Sathananthan（2026 年 8 月 11 日 arXiv）在 O-RAN 集成仿真测试床上，将 **5G NR 上行探测参考信号（SRS）用作无源雷达波形**评估多无人机跟踪：OpenAirInterface（RAN）+ FlexRIC（RIC）+ Sionna RT（射线追踪信道），跟踪器封装为 **RIC xApp**，经 SAPIENT 接口接入指挥控制融合节点——与 Rel-20 无人机检测感知基线的架构方向直接对齐。

三架无人机具有不同高度、速度与雷达截面（−8 至 −20 dBsm），在双站几何下对 8 阵元平面接收阵飞行。核心发现是诊断性的：约束在**竞争而非灵敏度**——约 74% 的相干处理间隔内两目标共享同一最近检测，仰角信息仅在 58% 的间隔内能解除关联歧义。目标被*检测*的频率远高于被成功*跟踪*，多目标关联被定位为基于网络的无人机监视的瓶颈。

## Key technical points (EN)
- SRS-as-passive-radar: 5G uplink sounding signals reused for sensing; bistatic geometry, 8-element planar RX array.
- O-RAN-native packaging: OAI + FlexRIC + Sionna RT; tracker as RIC xApp; SAPIENT C2 interface.
- Bottleneck: multi-target association — 74% of CPIs have two targets sharing one nearest detection; elevation resolves only 58%.
- Detection ≫ tracking success; RCS range −8 to −20 dBsm.

## Key technical points (ZH)
- SRS 作无源雷达：复用 5G 上行探测信号感知；双站几何，8 阵元平面接收阵。
- O-RAN 原生封装：OAI + FlexRIC + Sionna RT；跟踪器为 RIC xApp；SAPIENT 指控接口。
- 瓶颈：多目标关联——74% 相干处理间隔中两目标共享同一最近检测；仰角仅解决 58%。
- 检测成功率远高于跟踪；RCS 范围 −8 至 −20 dBsm。

## Why it matters / what's new (EN)
This is the KB's first end-to-end O-RAN ISAC evaluation testbed entry, and it lands the week the standards context (see today's ISAC-evolution entry) fixes drone detection as the Rel-20 monostatic baseline. Its negative result — association, not sensitivity, is the wall — is a concrete design signal for the sensing-reporting abstractions Rel-20 is defining (what a sensing function must report for tracking, not just detection, to work).

## Why it matters / what's new (ZH)
这是 KB 首个端到端 O-RAN ISAC 评估测试床条目，恰逢标准语境（见今日 ISAC 演进条目）将无人机检测定为 Rel-20 单站基线。其否定性结论——瓶颈是关联而非灵敏度——对 Rel-20 正在定义的感知上报抽象是具体的设计信号（感知功能需要上报什么才能支撑跟踪而不仅是检测）。
