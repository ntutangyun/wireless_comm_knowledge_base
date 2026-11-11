---
id: 2026-11-11_arxiv-3gpp-isac-multi-uav-tracking-search-region-sensing-service
date_published: 2026-11-07
date_found: 2026-11-11
type: academic-paper
technology: cellular
title_en: "From Radio Measurements to Sensing Services: A 3GPP Perspective on Multi-UAV Tracking with Networked ISAC"
title_zh: "从无线电测量到感知服务：基于 3GPP 视角的网络化 ISAC 多无人机跟踪"
url: "https://arxiv.org/abs/2611.10355"
source_quality: full
topics: [ISAC, 3GPP-Release-20, TS-22.137, TS-23.137, UAV-tracking, positioning-reference-signal, receiver-search-region, track-continuity, sensing-function]
topic_primary: 6g-vision
topics_secondary: [5g-nr]
novelty_score: 3
---

## Summary (EN)

Xingqin Lin examines tracking of noncooperative UAVs with networked integrated sensing and communication (ISAC) from a 3GPP viewpoint. The article connects the sensing-service requirements of TS 22.137 and the Stage 2 architecture of TS 23.137 (whose Release 20 scope is aerial-object detection and tracking using gNBs) to three information interfaces: the receiver's search region, measurement time and uncertainty, and the validity of delivered track states.

A five-UAV case study compares receiver search rules on the same received signals: three monostatic sites forming a 500 m triangle use positioning reference signals (about 32 MHz of PRS bandwidth at 4 GHz, 47.2 dBm transmit power) and report to a central extended-Kalman-filter tracker. It runs thirty episodes in each of a 3GPP urban scenario and a ray-traced OpenStreetMap-derived San Francisco scene. Against the original fixed-radius guard, a dynamic search region raises post-startup matched coverage at the 1 m tolerance from about 61 to 72 percent (3GPP urban) and from about 59 to 75 percent (San Francisco).

## Summary (ZH)

Xingqin Lin 从 3GPP 视角研究网络化通感一体化（ISAC）对非合作无人机的跟踪。文章把 TS 22.137 的感知服务需求与 TS 23.137 的 Stage 2 架构（其 Release 20 范围为利用 gNB 对空中目标进行检测与跟踪）联系到三个信息接口：接收端搜索区域、测量时间与不确定度，以及所交付航迹状态的有效性。

五架无人机的案例研究在相同接收信号上比较不同的接收端搜索规则：三个单站（收发共址）站点构成边长 500 m 的三角形，使用定位参考信号（4 GHz 上约 32 MHz PRS 带宽，发射功率 47.2 dBm），并向采用扩展卡尔曼滤波的中心跟踪器上报测量。研究在 3GPP 城区场景和基于 OpenStreetMap 的旧金山射线追踪场景中各运行 30 个回合。与原有固定半径门限相比，动态搜索区域在 1 m 容差下将启动后的匹配覆盖率从约 61% 提高到 72%（3GPP 城区），从约 59% 提高到 75%（旧金山）。

## Key technical points (EN)

- Architecture mapping: the application corresponds to the Application Function, the receiver to a gNB acting as a Sensing Entity, and the Sensing Function coordinates sensing and generates results; AFs outside the trusted domain reach the Sensing Function through the Network Exposure Function. Multisite result generation is left to implementation.
- Matching is one-to-one against the simulated UAV positions, and coverage, extra (unmatched) confirmed outputs and complete scenes (all five matched, zero extras) are reported separately. Only about one in five post-startup scans is a complete scene at 1 m under the dynamic policy, and the broader search also raises the number of unmatched confirmed outputs (the San Francisco interval includes zero).
- Control experiment: in six scenarios, a static search region reaches the same coverage, extra-output and complete-scan measures as the dynamic one, so an evolving boundary is not needed for the gains in those cases.
- Continuity: for UAVs acquired before the final scan, the average later matched fraction is about 85 percent with the dynamic policy versus about 74 percent (3GPP urban) and 70 percent (San Francisco) with the original guards; under the dynamic policy, 16 of 150 UAVs (3GPP) and ten (San Francisco) were never matched at 1 m by 6 s.
- Stated limits: short, separated, straight-line six-second flights, exact site positions, orientations and clocks, sensing isolated from communication interference, and approximated report uncertainty.

## Key technical points (ZH)

- 架构映射：应用对应应用功能（AF），接收端对应充当感知实体的 gNB，感知功能（SenF）负责协调感知并生成结果；受信域之外的 AF 通过网络开放功能访问 SenF。多站结果的生成方式留给实现。
- 与仿真的无人机位置做一对一匹配，并分别报告覆盖率、额外（未匹配）的已确认输出和完整场景（五架全部匹配且无额外输出）。在动态策略下，启动后每五次扫描只有约一次为完整场景（1 m 容差），且更宽的搜索也增加了未匹配的已确认输出数（旧金山场景的置信区间包含零）。
- 对照实验：在六个场景中，静态搜索区域取得与动态搜索区域相同的覆盖、额外输出与完整扫描指标，因此在这些情形中，增益并不需要随时间演化的边界。
- 连续性：对最后一次扫描之前已捕获的无人机，动态策略下后续匹配比例平均约 85%，原有门限下 3GPP 场景约 74%、旧金山场景约 70%；动态策略下，到 6 秒时，3GPP 场景 150 架中有 16 架、旧金山场景有 10 架从未达到 1 m 匹配。
- 论文声明的局限：飞行为短时、间隔较大的六秒直线飞行，站点位置、朝向与时钟为精确值，感知与通信干扰相互隔离，测量不确定度为近似值。

## Why it matters / what's new (EN)

3GPP has put ISAC in Release 20, and the service specifications describe what a sensing service must deliver (area, continuity, accuracy, latency, refresh rate) without fixing how receivers, fusion and applications behave in between. This single-author article argues that receiver search design belongs alongside waveform design, localization and association in the sensing chain, and quantifies the effect of the search region in simulation; measurement context and timeliness are discussed but held idealised in the case study. The evidence is simulated with idealised synchronisation and short flights, so the numbers show direction rather than field performance.

## Why it matters / what's new (ZH)

3GPP 已将 ISAC 纳入 Release 20，服务规范规定了感知服务需要交付的内容（区域、连续性、精度、时延、刷新率），但并未规定接收端、融合与应用之间的具体行为。这篇单作者文章指出，规范留给实现的这些选择，尤其是接收端的搜索区域以及保留何种测量上下文，对跟踪覆盖的影响不亚于波形或定位精度，并通过仿真对此做了量化。证据来自同步理想化、飞行时间较短的仿真，因此数值体现趋势而非外场性能。

## Images

None.
