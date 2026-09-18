---
id: 2026-09-18_arxiv-run-oran-uplink-srs-localization
date_published: 2026-09-17
date_found: 2026-09-18
type: academic-paper
technology: cellular
title_en: "RUN-O-RAN: An O-RAN-Native Architecture Enabling Cooperative Uplink Localization"
title_zh: "RUN-O-RAN：一种支持协同上行定位的O-RAN原生架构"
url: "https://arxiv.org/abs/2609.20640"
source_quality: full
topics: [O-RAN, xApp, SRS, uplink-positioning, near-RT-RIC, ISAC, 5G-NR]
topic_primary: open-ran
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)

This paper (Viola Bernazzoli, Alberto Ceresoli, Ilario Filippini; Politecnico di Milano) addresses network-side positioning for commercial 5G devices. The authors note that GNSS is unreliable indoors and in dense urban areas, and that standardized 5G downlink positioning requires the UE to perform measurements and report them, making the service dependent on chipset support and additional UE-side processing. Uplink positioning is presented as a complementary path: commercial UEs already transmit Sounding Reference Signals (SRS) for channel sounding, and if multiple geographically distributed gNBs could observe the same uplink SRS transmission, the network could estimate UE position without any additional device-side functionality. The paper states that conventional RAN deployments do not expose the information a non-serving gNB would need to turn a received SRS into a usable cooperative ranging measurement (scheduling decisions, resource allocations, and reference sequences are known only to the serving gNB).

RUN-O-RAN addresses this by implementing an O-RAN near-RT RIC xApp that coordinates a serving gNB and neighboring ("secondary") gNBs, distributing the SRS configuration parameters a secondary anchor needs to identify and coherently process the target UE's uplink SRS — without any modification to the UE or to existing 3GPP signaling procedures. The framework integrates cooperative SRS collection, first-path time-of-arrival estimation, timing-advance tracking, clock-drift compensation between anchors, and multi-anchor trilateration into one network-side localization pipeline.

The system is validated on a real-time testbed: three OpenAirInterface (OAI) gNB instances connected to an Open5GS core, each extended with the RUN-O-RAN E2SM and connected to the O-RAN Software Community near-RT RIC over independent E2 links. To avoid the cost of tight physical inter-gNB synchronization, the authors built an emulated PHY (e-PHY) that replays previously recorded, synchronized baseband traces so each gNB instance behaves, from the xApp's perspective, as an independent anchor observing the same uplink transmission through a distinct propagation channel. Traces were generated using Sionna ray-tracing, converted to Keysight PROPSIM channel-emulator format, and originally captured from a commercial device (a Sierra Wireless module with a Qualcomm Snapdragon X60 5G modem) attached to an OAI gNB on an Ettus USRP N310 SDR (band n77, 60 MHz, 30 kHz SCS), so the traces carry real chipset oscillator and timing-adjustment behavior. Across 150,000 replayed SRS transmissions the framework achieves meter-level localization accuracy under varying propagation conditions, with the paper noting that most ranging estimates stay within a few metres as long as the UE remains attached to its master anchor, and that anchor geometry and multipath affect accuracy. The paper frames RUN-O-RAN as a general programmable infrastructure for network-side localization rather than a fixed three-anchor pipeline, and discusses extending it toward hybrid time-of-arrival/angle-of-arrival localization when fewer than three anchors can observe a given UE.

## Summary (ZH)

本文（Viola Bernazzoli、Alberto Ceresoli、Ilario Filippini；米兰理工大学）研究面向商用 5G 设备的网络侧定位问题。作者指出，GNSS 在室内及密集城市环境中可靠性不足，而标准化的 5G 下行定位需要 UE 执行测量并上报，因而依赖芯片组支持及额外的 UE 侧处理。论文提出上行定位作为补充路径：商用 UE 本身即为信道探测发送探测参考信号（SRS），若多个地理上分散的 gNB 能够观测到同一次上行 SRS 传输，网络即可在不增加设备侧功能的情况下估计 UE 位置。论文指出，传统 RAN 部署并未向非服务 gNB 暴露将接收到的 SRS 转化为可用协同测距所需的信息（调度决策、资源分配及参考序列仅服务 gNB 已知）。

RUN-O-RAN 通过实现一个 O-RAN 近实时 RIC xApp 来解决这一问题，该 xApp 协调服务 gNB 与相邻（"辅助"）gNB，向辅助锚点分发识别并相干处理目标 UE 上行 SRS 所需的 SRS 配置参数——且无需对 UE 或现有 3GPP 信令流程做任何修改。该框架将协同 SRS 采集、首径到达时间估计、时间提前量跟踪、锚点间时钟漂移补偿以及多锚点三角定位整合为一套完整的网络侧定位流程。

该系统在一个实时测试平台上得到验证：三个 OpenAirInterface（OAI）gNB 实例连接至 Open5GS 核心网，每个实例均扩展了 RUN-O-RAN E2SM，并通过独立的 E2 连接接入 O-RAN 软件社区（SC）近实时 RIC。为避免物理层多 gNB 间紧密同步带来的高成本，作者构建了一个仿真物理层（e-PHY），回放预先录制、已同步的基带迹线，使每个 gNB 实例在 xApp 看来均为独立锚点，通过各自不同的传播信道观测同一上行传输。迹线由 Sionna 射线追踪生成，转换为 Keysight PROPSIM 信道仿真器格式，原始采集自连接在 Ettus USRP N310 软件定义无线电（n77 频段，60 MHz 带宽，30 kHz 子载波间隔）上的 OAI gNB 所服务的商用设备（搭载高通骁龙 X60 5G 调制解调器的 Sierra Wireless 模块），因此迹线中包含真实的芯片组振荡器与时序调整行为特征。在 150,000 次回放的 SRS 传输中，该框架在不同传播条件下实现了米级定位精度；论文指出，只要 UE 保持附着于其主锚点，大多数测距估计误差保持在数米以内，且锚点几何与多径会影响定位精度。论文将 RUN-O-RAN 定位为一种通用的可编程网络侧定位基础设施，而非固定的三锚点定位流程，并讨论了在可观测锚点少于三个时向到达时间/到达角混合定位扩展的方向。

## Key technical points (EN)

- **Motivation**: 5G downlink positioning (LMF + reference-signal procedures) depends on UE chipset support and UE-side measurement/reporting; uplink SRS-based cooperative positioning avoids this by keeping localization entirely network-side.
- **Architecture**: an O-RAN near-RT RIC xApp coordinates a serving gNB and secondary (non-serving) gNBs, distributing SRS parameters so secondary anchors can identify and coherently process the target UE's uplink SRS.
- **Pipeline**: cooperative SRS collection -> first-path time-of-arrival estimation -> timing-advance tracking -> inter-anchor clock-drift compensation -> multi-anchor trilateration.
- **Testbed**: 3 OAI gNB instances + Open5GS core + O-RAN SC near-RT RIC over E2, with an emulated PHY (e-PHY) replaying Sionna-ray-traced, PROPSIM-emulated baseband traces originally captured from a COTS device (Sierra Wireless / Qualcomm Snapdragon X60) on an OAI gNB with a USRP N310 (band n77, 60 MHz, 30 kHz SCS).
- **Result**: across 150,000 replayed SRS transmissions, the framework achieves meter-level localization accuracy under diverse propagation conditions; accuracy is affected by anchor geometry and multipath.
- **No UE or 3GPP-protocol modification required** — the framework only reuses standard SRS transmissions already present in commercial 5G deployments.

## Key technical points (ZH)

- **动机**：5G 下行定位（LMF + 参考信号流程）依赖 UE 芯片组支持及 UE 侧测量与上报；基于上行 SRS 的协同定位将定位功能完全保留在网络侧，从而规避这一依赖。
- **架构**：O-RAN 近实时 RIC xApp 协调服务 gNB 与辅助（非服务）gNB，向辅助锚点分发 SRS 参数，使其能够识别并相干处理目标 UE 的上行 SRS。
- **流程**：协同 SRS 采集 → 首径到达时间估计 → 时间提前量跟踪 → 锚点间时钟漂移补偿 → 多锚点三角定位。
- **测试平台**：3 个 OAI gNB 实例 + Open5GS 核心网 + 通过 E2 接口接入的 O-RAN SC 近实时 RIC，并配备仿真物理层（e-PHY），回放由 Sionna 射线追踪生成、经 PROPSIM 信道仿真器处理的基带迹线，原始数据采集自连接在配备 USRP N310（n77 频段，60 MHz 带宽，30 kHz 子载波间隔）的 OAI gNB 上的商用设备（Sierra Wireless 模块，搭载高通骁龙 X60）。
- **结果**：在 150,000 次回放的 SRS 传输中，该框架在不同传播条件下实现了米级定位精度；精度受锚点几何与多径影响。
- **无需修改 UE 或 3GPP 协议**——该框架仅复用商用 5G 部署中已存在的标准 SRS 传输。

## Why it matters / what's new (EN)

The KB's existing `open-ran` entries focus mostly on RIC-based interference and traffic management; this paper applies the same near-RT RIC xApp pattern to positioning, and specifically to uplink SRS-based cooperative localization using unmodified commercial UEs and real chipset-captured traces (rather than idealized simulation), which the authors frame as a step toward network-native ISAC positioning services within the O-RAN ecosystem.

## Why it matters / what's new (ZH)

知识库现有的 `open-ran` 相关条目多聚焦于基于 RIC 的干扰管理与流量管理；本文将同一近实时 RIC xApp 模式应用于定位场景，具体是基于上行 SRS 的协同定位，且使用未经修改的商用 UE 及真实芯片组采集的迹线（而非理想化仿真），作者将其定位为 O-RAN 生态中迈向网络原生 ISAC 定位服务的一步。
