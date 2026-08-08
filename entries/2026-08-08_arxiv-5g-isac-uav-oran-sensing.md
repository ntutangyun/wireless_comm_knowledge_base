---
id: 2026-08-08_arxiv-5g-isac-uav-oran-sensing
date_published: 2026-08-06
date_found: 2026-08-08
type: academic-paper
technology: cellular
title_en: "5G ISAC-Based UAV Detection and 3-D Tracking Using O-RAN"
title_zh: "基于 5G 通感一体（ISAC）与 O-RAN 的无人机检测与三维跟踪"
url: "https://arxiv.org/abs/2608.05826"
source_quality: abstract_only
topics: [5G-NR, O-RAN, ISAC, sensing, xApp, UAV]
topic_primary: 5g-nr
topics_secondary: [open-ran, cellular-ai]
novelty_score: 3
---

## Summary (EN)

Gurung, Sathananthan, and Pokhrel (submitted 6 Aug 2026) build an integrated sensing-and-communication (ISAC) system for detecting and 3-D-tracking drones on top of an unmodified 5G NR / O-RAN stack — no new sensing waveform and no NR standards change. The core trick is to **repurpose the NR Uplink Sounding Reference Signal (SRS) as a passive radar waveform**: the gNB already receives SRS from uplink users, and the same signal, reflected off a UAV, is processed as a bistatic radar return. Sensing therefore rides on infrastructure that is already deployed and standards-compliant.

The testbed is fully open-source: OpenAirInterface for the 5G stack, FlexRIC as the RAN controller, and Sionna RT for ray-traced propagation. Detection runs at the PHY layer inside the gNB; results are exported through a **custom E2 service model to an xApp** running an Extended Kalman Filter that fuses detections into a smoothed 3-D track. Elevation ambiguity — the classic weakness of a single linear receive array — is resolved two ways: a planar receive array, and a second transmitter that adds range diversity.

Headline numbers: the tracker converges to **1.8 m RMSE in altitude** even when deliberately seeded with wrong initial values, and — the key coexistence result — **detection coverage is preserved under a concurrent 10 Mbps uplink communications load**, showing the sensing function does not starve the communication function it borrows from.

## Summary (ZH)

Gurung、Sathananthan 与 Pokhrel（2026 年 8 月 6 日提交）在未经修改的 5G NR / O-RAN 协议栈之上构建了一套通感一体（ISAC）系统，用于无人机的检测与三维跟踪——无需新的感知波形，也不改动 NR 标准。核心手法是**把 NR 上行探测参考信号（SRS）复用为无源雷达波形**：gNB 本就接收上行用户的 SRS，同一信号经无人机反射后即可作为双基地雷达回波处理。因此感知功能搭载在已部署且符合标准的基础设施上。

测试平台全部开源：OpenAirInterface 提供 5G 协议栈，FlexRIC 作为 RAN 控制器，Sionna RT 做射线追踪传播仿真。检测在 gNB 内部的 PHY 层进行；结果通过**自定义 E2 服务模型送往一个 xApp**，由扩展卡尔曼滤波器（EKF）将检测融合成平滑的三维航迹。俯仰角模糊——单一线性接收阵列的经典弱点——用两种方式解决：平面接收阵列，以及增加距离分集的第二个发射源。

关键指标：即便故意用错误初值启动，跟踪器的**高度估计 RMSE 收敛到 1.8 米**；而最关键的共存结果是——**在并发 10 Mbps 上行通信负载下检测覆盖仍得以保持**，表明感知功能不会掠夺其所借用的通信功能。

## Key technical points (EN)

- **SRS-as-passive-radar** — the existing NR uplink SRS is reused as the sensing waveform; no dedicated ISAC waveform, no NR standards modification.
- **O-RAN-native pipeline** — PHY detection in the gNB → custom E2 service model → EKF tracking xApp; the disaggregated architecture is the integration surface.
- **Open-source testbed** — OpenAirInterface (5G) + FlexRIC (RIC) + Sionna RT (ray tracing).
- **Elevation disambiguation** — planar receive array + a second transmitter for range diversity resolve single-array elevation ambiguity.
- **Results** — 1.8 m altitude RMSE from wrong initial values; detection coverage preserved under concurrent 10 Mbps uplink load (sensing/comm coexistence).

## Key technical points (ZH)

- **SRS 复用为无源雷达** —— 复用现有 NR 上行 SRS 作为感知波形；无需专用 ISAC 波形，不改动 NR 标准。
- **O-RAN 原生流水线** —— gNB 内 PHY 检测 → 自定义 E2 服务模型 → EKF 跟踪 xApp；解耦架构即集成面。
- **开源测试平台** —— OpenAirInterface（5G）+ FlexRIC（RIC）+ Sionna RT（射线追踪）。
- **俯仰角消歧** —— 平面接收阵列 + 提供距离分集的第二发射源，解决单阵列俯仰角模糊。
- **结果** —— 从错误初值起收敛到 1.8 米高度 RMSE；并发 10 Mbps 上行负载下检测覆盖不降（感知/通信共存）。

## Why it matters / what's new (EN)

ISAC is a headline 6G theme, but most proposals assume a new waveform or a dedicated sensing band. This work is notable for extracting a working drone-tracking radar from signals a commercial 5G network *already transmits*, and for wiring the whole thing through the O-RAN E2/xApp control plane rather than a bespoke sensing box. That makes it a concrete, reproducible datapoint for "sensing as a RAN application" — the sensing logic lives in an xApp, portable across any O-RAN-compliant RIC, and the coexistence measurement (sensing survives a real uplink load) is exactly the evidence the ISAC-over-deployed-5G story usually lacks. It complements the KB's existing O-RAN xApp entries by showing the E2 service model carrying radar detections, not just RAN telemetry.

## Why it matters / what's new (ZH)

ISAC 是 6G 的旗舰主题，但多数方案假设需要新波形或专用感知频段。这项工作的亮点在于：从商用 5G 网络*本已发射*的信号中提取出可用的无人机跟踪雷达，并把整套流程接入 O-RAN 的 E2/xApp 控制面，而非专用感知盒子。这为"把感知作为一种 RAN 应用"提供了具体、可复现的数据点——感知逻辑驻留在 xApp 中，可在任何符合 O-RAN 的 RIC 上移植；而共存测量（感知在真实上行负载下仍存活）正是"在已部署 5G 上做 ISAC"叙事通常缺失的证据。它与 KB 现有的 O-RAN xApp 条目互补，展示 E2 服务模型承载的是雷达检测，而不仅是 RAN 遥测。
