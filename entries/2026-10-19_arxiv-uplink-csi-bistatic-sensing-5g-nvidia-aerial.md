---
id: 2026-10-19_arxiv-uplink-csi-bistatic-sensing-5g-nvidia-aerial
date_published: 2026-10-14
date_found: 2026-10-19
type: academic-paper
technology: cellular
title_en: "Evolution Toward Sensing-Enabled RAN: Practical Bistatic Sensing via Uplink"
title_zh: "迈向感知使能的 RAN：基于上行链路的实用双站感知"
url: "https://arxiv.org/abs/2610.20923"
source_quality: full
topics: [ISAC, bistatic-sensing, uplink-CSI, DMRS, SRS, UE-positioning, NVIDIA-Aerial, dApp, FR1, passive-localization]
topic_primary: 6g-vision
topics_secondary: [5g-nr, open-ran]
novelty_score: 3
---

## Summary (EN)
Kenan Turbic, Khanh-Toan Pham and Slawomir Stanczak (accepted for presentation at IEEE ISAC 2026) describe uplink channel state information (CSI) as an opportunistic basis for sensing in cellular networks with minimal change to the infrastructure. The idea is to keep the channel estimates the gNB already computes from uplink pilots (DMRS, and SRS) and process them for sensing instead of discarding them. They present a signal-processing procedure that combines 5G UE positioning with multi-antenna array processing to localise passive targets.

The approach is checked in simulation (3.75 GHz, 4-element array, a single passive target at 15 m and -30 degrees) and in preliminary measurements on a real-time testbed built on the NVIDIA Aerial open-source gNB with a Foxconn radio unit and a Quectel RM500Q-GL modem, where a person walks toward the radio unit. The reported result is that uplink CSI-based detection, localisation and tracking of moving targets over local areas is feasible.

## Summary (ZH)
Kenan Turbic、Khanh-Toan Pham 与 Slawomir Stanczak（已被 IEEE ISAC 2026 接收宣讲）将上行信道状态信息（CSI）视为在蜂窝网络中以最小基础设施改动实现感知的机会性基础。其思路是保留 gNB 本来就会根据上行导频（DMRS 与 SRS）计算出的信道估计，并将其用于感知而非丢弃。他们提出一套将 5G UE 定位与多天线阵列处理相结合的信号处理流程，用于定位无源目标。

该方法在仿真（3.75 GHz、4 阵元阵列、15 m 与 -30 度处的单个无源目标）和实时测试平台的初步测量中得到验证；平台基于 NVIDIA Aerial 开源 gNB，配 Foxconn 射频单元与 Quectel RM500Q-GL 模组，一名行人朝射频单元行走。报告结论是：基于上行 CSI 的运动目标检测、定位与跟踪在局部区域内是可行的。

## Key technical points (EN)
- Limitation addressed: path delays in the uplink CSI are relative to the receiver's synchronisation reference (the line-of-sight path), so absolute bistatic range, and hence target position, cannot be obtained from CSI alone. Moving-target presence detection still works without that knowledge.
- Absolute LoS delay sources: a known UE position (a reference UE or fixed CPE), timing advance (the paper notes its PRACH-based accuracy is on the order of tens of metres), or 5G SRS-based UE positioning, which the authors prefer for finer time resolution.
- Geometry: a given echo delay places the target on an ellipse with the UE and gNB at the foci; the gNB array's angle-of-arrival (AoA) estimate on the echo, with the LoS AoA setting the ellipse orientation, gives the intersection and thus the position and the velocity direction (the ellipse normal).
- Processing chain: two branches. One estimates LoS delay and AoA for synchronisation, impairment compensation and LoS suppression (null-subspace projection); the other does clutter removal and Fourier steps to form a range-Doppler-angle map for detection and localisation.
- Simulation: 4096 subcarriers at 30 kHz spacing, LoS SNR 20 dB, target echo 12 dB weaker; after LoS suppression only the target peak remains, at the true position.
- Experiment: 3.75 GHz, 3276 active subcarriers at 30 kHz (100 MHz), 4-element ULA made with a 3D-printed alignment structure, UE at 2 m in broadside, a subject walking from 6 m to 3 m at -32 degrees; CSI over an 8-frame CPI of 32 DMRS estimates every 2.5 ms, processed in a real-time dApp with LoS-based over-the-air synchronisation. Detected positions stayed typically within 0.5 to 1 m of the walker; the authors note tracking was not applied.
- The testbed does not yet implement 5G positioning, so the experiment assumes the LoS delay from the known UE location.

## Key technical points (ZH)
- 所解决的限制：上行 CSI 中的路径时延是相对于接收机同步基准（视距路径）的，因此仅凭 CSI 无法得到绝对双站距离，也就无法得到目标位置。即使没有这一信息，运动目标存在性检测仍然可行。
- 绝对 LoS 时延来源：已知 UE 位置（参考 UE 或固定 CPE）、定时提前量（论文指出其基于 PRACH 的精度约为数十米），或 5G 基于 SRS 的 UE 定位，作者倾向后者，因其时间分辨率更细。
- 几何关系：给定回波时延，目标位于以 UE 与 gNB 为焦点的椭圆上；gNB 阵列对回波的到达角（AoA）估计配合决定椭圆朝向的 LoS AoA，即可求得交点，从而得到位置，速度方向则为椭圆法线方向。
- 处理链：两个分支。一支估计 LoS 时延与 AoA，用于同步、损伤补偿与 LoS 抑制（零空间投影）；另一支进行杂波去除与傅里叶变换，形成距离-多普勒-角度图以用于检测与定位。
- 仿真：4096 个子载波、30 kHz 间隔，LoS 信噪比 20 dB，目标回波低 12 dB；LoS 抑制后仅剩目标峰值，位于真实位置。
- 实验：3.75 GHz，3276 个有效子载波、30 kHz（100 MHz），采用 3D 打印对准结构的 4 阵元 ULA，UE 位于正前方 2 m，受试者以 -32 度方向从 6 m 走向 3 m；在包含 8 帧的 CPI 内采用每 2.5 ms 一次、共 32 个 DMRS 估计，在实时 dApp 中处理，并使用基于 LoS 的空口同步。检测位置通常在行人实际位置 0.5 至 1 m 以内；作者指出未使用跟踪算法。
- 测试平台尚未实现 5G 定位，因此实验按已知 UE 位置假设 LoS 时延。

## Why it matters / what's new (EN)
The authors note that most reported 5G bistatic sensing studies are simulation-based and real-time standard-compliant demonstrations remain scarce; this item is a small hardware demonstration that uses only pilots a 5G uplink already carries, on an open-source gNB with a commercial radio unit and modem. The evidence is thin: one walker, one indoor scene, a 4-element array, a known UE position in place of 5G positioning, and no tracker, so accuracy beyond the reported 0.5 to 1 m scatter is not established.

## Why it matters / what's new (ZH)
作者指出，已报道的 5G 双站感知研究多基于仿真，实时且符合标准的演示仍很少；本条目是一个小型硬件演示，只使用 5G 上行本就携带的导频，运行在开源 gNB 加商用射频单元与模组之上。证据较为单薄：一名行人、一个室内场景、4 阵元阵列、以已知 UE 位置代替 5G 定位且无跟踪器，因此除所报告的 0.5 至 1 m 离散度外，精度并未确立。
