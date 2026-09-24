---
id: 2026-09-24_arxiv-georis-geofencing-reconfigurable-intelligent-surfaces
date_published: 2026-09-17
date_found: 2026-09-24
type: academic-paper
technology: cellular
title_en: "GeoRIS: Geofencing With Reconfigurable Intelligent Surfaces"
title_zh: "GeoRIS：利用可重构智能表面实现地理围栏"
url: "https://arxiv.org/abs/2609.21077"
source_quality: full
topics: [RIS, geofencing, beam-management, "3GPP InH/UMa pathloss"]
topic_primary: 6g-vision
topics_secondary: [cellular-security]
novelty_score: 4
---

## Summary (EN)

This paper proposes GeoRIS, a reconfigurable intelligent surface (RIS) controller that can deliberately shrink or extend indoor 5G (eMBB) coverage on demand, exploiting the beam-management procedure itself rather than jamming or physical shielding. The system has two logical components — a Response Generator that decides how the RIS reflects or absorbs signals during the beam-sweeping phase, and a Coefficient Generator that maps those responses to RIS phase coefficients — and it deliberately uses different RIS behavior in the beam-sweeping phase versus the data-transmission phase. During beam sweeping, GeoRIS manipulates which beam directions appear strongest to the base station's / UE's beam-selection procedure; during data transmission, it consistently absorbs, removing the RIS-reflected path altogether. The effect is to induce the network to select beam directions that are prone to severe misalignment once data transmission actually begins, degrading the link inside a target area without any signal jamming.

Two response-generation strategies are evaluated: a Static Sequence that reflects or absorbs on a fixed pattern, and an Adaptive Sequence that uses combinatorial multi-armed bandits to learn, per beam direction, which response maximizes misalignment. Simulation used standard 3GPP path-loss models — indoor RIS-UE links via the InH LOS model, and outdoor-to-indoor BS-UE/BS-RIS links via the UMa NLOS model including wall/window penetration loss — at 30 GHz with a 16-element antenna array, 16 candidate beam directions, and up to 1,000 RIS elements in a conference room (50×50 reference grid).

In "extender" mode (the RIS simply reflects to help coverage), Extender supports eMBB in ~90% of the room (avg. -80.6 dBm). In "GeoRIS" (geofencing) mode, the same RIS's Algorithm 2 instead pushes ~90% of that same room below the 0.3 bit/s/Hz eMBB threshold (avg. -105.2 dBm) — a swing from roughly 90% coverage to roughly 90% inhibition using the identical physical hardware, purely by changing the RIS control sequence. Both GeoRIS and Extender benefit from optimized (limited-CSI) coefficients, but GeoRIS still works with random coefficients, and larger RIS arrays make both the coverage-extension and the geofencing effect more pronounced.

## Summary (ZH)

本文提出 GeoRIS，一种可重构智能表面（RIS）控制器，能够按需主动缩小或扩大室内 5G（eMBB）覆盖范围，其手段是利用波束管理流程本身，而非干扰或物理屏蔽。该系统包含两个逻辑组件——响应生成器（Response Generator），决定 RIS 在波束扫描阶段如何反射或吸收信号；以及系数生成器（Coefficient Generator），将这些响应映射为 RIS 的相位系数。系统刻意在波束扫描阶段与数据传输阶段采用不同的 RIS 行为：在波束扫描阶段，GeoRIS 操纵哪些波束方向在基站/终端的波束选择流程中显得信号最强；而在数据传输阶段，则持续吸收信号，彻底移除 RIS 反射路径。其效果是诱导网络选中那些一旦真正开始数据传输就极易发生严重波束失配的方向，从而在目标区域内使链路劣化，且全程不涉及任何信号干扰。

论文评估了两种响应生成策略：一种是按固定模式反射或吸收的"静态序列"，另一种是利用组合式多臂老虎机（combinatorial multi-armed bandits）针对每个波束方向学习"哪种响应能最大化失配"的"自适应序列"。仿真采用标准的 3GPP 路损模型——室内 RIS-UE 链路采用 InH LOS 模型，室外到室内的基站-UE / 基站-RIS 链路采用 UMa NLOS 模型（含墙壁/窗户穿透损耗），载频 30 GHz，配备 16 阵元天线阵列、16 个候选波束方向，在一间会议室（50×50 参考网格）中最多部署 1000 个 RIS 单元。

在"扩展器"模式下（RIS 单纯反射以增强覆盖），扩展器能让约 90% 的房间区域获得支持 eMBB 业务的功率（平均 -80.6 dBm）。而在"GeoRIS"（地理围栏）模式下，同一块 RIS 的算法二（Alg. 2）却能使同一房间中约 90% 的区域降至 0.3 bit/s/Hz 的 eMBB 门限以下（平均 -105.2 dBm）——仅凭改变 RIS 的控制序列，就能在完全相同的物理硬件上，实现从约 90% 覆盖到约 90% 抑制的巨大摆动。GeoRIS 与扩展器模式都能从优化过的（有限 CSI）系数中获益，但即便使用随机系数，GeoRIS 依然有效，且更大规模的 RIS 阵列会同时放大覆盖扩展效果与地理围栏效果。

## Key technical points (EN)

- Same physical RIS hardware, opposite outcomes purely via control-sequence choice: ~90% area coverage (extender mode, -80.6 dBm avg.) vs. ~90% area coverage inhibition (GeoRIS mode, -105.2 dBm avg.), against a no-RIS baseline of -93.7 dBm avg.
- Mechanism attacks the beam-sweeping/beam-selection procedure itself — manipulating which beam direction looks best during sweeping — rather than jamming or blocking the data-transmission signal directly.
- Both GeoRIS and Extender benefit from optimized (limited-CSI) coefficients, but GeoRIS still works with random coefficients — the Adaptive Sequence (combinatorial multi-armed bandit) learns effective geofencing online without needing a full offline characterization.
- Antenna array size strongly affects how close the adaptive and static strategies converge: the Kolmogorov-Smirnov distance between their outage distributions shrinks from 0.35 at 8 antenna elements to 0.025 at 32+ elements.
- Simulation grounded in standard 3GPP path-loss models (InH LOS for indoor RIS-UE, UMa NLOS with wall/window penetration for outdoor-to-indoor), at mmWave (30 GHz), with realistic penetration-loss values (60 dB wall, 10 dB window).
- Framed as a tool for the indoor-space host (e.g., classified meetings, exams), who does not control the operator's BS — not as an attack technique — though the same mechanism was studied as an adversarial RIS in the authors' prior work, and a security assessment of beam-management robustness would need to consider it.

## Key technical points (ZH)

- 同一套物理 RIS 硬件，仅凭控制序列的选择即可产生截然相反的结果：约 90% 区域获得覆盖（扩展器模式，平均 -80.6 dBm）对比约 90% 区域覆盖被抑制（GeoRIS 模式，平均 -105.2 dBm），对照无 RIS 基线平均为 -93.7 dBm。
- 该机制针对的是波束扫描/波束选择流程本身——操纵扫描阶段中哪个波束方向"看起来"信号最强——而非直接干扰或阻断数据传输信号。
- GeoRIS 与扩展器模式都能从优化过的（有限 CSI）系数中获益，但即便使用随机系数，GeoRIS 依然有效——自适应序列（组合式多臂老虎机）无需完整离线特征化即可在线学习到有效的地理围栏效果。
- 天线阵列规模强烈影响自适应策略与静态策略的收敛程度：二者中断率分布之间的 Kolmogorov-Smirnov 距离从 8 阵元时的 0.35 缩小到 32 阵元以上时的 0.025。
- 仿真基于标准 3GPP 路损模型（室内 RIS-UE 采用 InH LOS，室外到室内采用含墙壁/窗户穿透损耗的 UMa NLOS），工作于毫米波频段（30 GHz），并采用符合实际的穿透损耗取值（墙壁 60 dB、窗户 10 dB）。
- 论文将其定位为供室内空间管理方（而非运营商基站的控制方）使用的工具（例如涉密会议、考试场景）——而非攻击手段；但相同机制在作者此前的工作中曾被研究为"对抗性 RIS"，评估波束管理流程鲁棒性时也需要考虑这种操纵手法。

## Why it matters / what's new (EN)

Per `topics.json`, reconfigurable intelligent surfaces are grouped under the 6g-vision bin alongside sub-THz and ISAC research; this is the KB's first entry proposing RIS as a deliberate coverage-control / geofencing mechanism rather than as a passive coverage-extension or channel-shaping tool. It opens a new angle distinct from the KB's existing RIS-adjacent entries (which cover RIS for coverage/relay gain, ISAC and physical-layer security): using the same hardware, and the beam-management procedure itself, to bound where a service is — and is not — available.

## Why it matters / what's new (ZH)

根据 `topics.json` 的分类，可重构智能表面（RIS）与亚太赫兹、ISAC 等研究一同归入 6g-vision 分区；本条目是本知识库首篇将 RIS 用作主动覆盖控制/地理围栏机制、而非被动覆盖扩展或信道整形工具的条目。它开辟了区别于库中现有 RIS 相关条目（涵盖覆盖/中继增益、ISAC 及物理层安全等方向）的新视角：利用同一套硬件、同一套波束管理流程本身，来划定某项服务"在哪里可用、在哪里不可用"的边界。

## Images

![GeoRIS usage example: indoor host controls outdoor-BS/indoor-UE beam alignment | GeoRIS 使用示例：室内空间管理方控制室外基站与室内终端间的波束对齐](https://arxiv.org/html/2609.21077v1/system_model_geoRIS.png)
![Indoor coverage map comparison: extender mode vs. GeoRIS geofencing mode | 室内覆盖地图对比：扩展器模式与 GeoRIS 地理围栏模式](https://arxiv.org/html/2609.21077v1/figs/covmap.png)
