---
id: 2026-09-15_arxiv-wifi-rtt-localization-production-wlan
date_published: 2026-09-12
date_found: 2026-09-15
technology: wifi
type: academic-paper
title_en: "Meter-Level Wi-Fi RTT Localization on a Production Enterprise WLAN"
title_zh: "在生产环境企业级 WLAN 上实现米级 Wi-Fi RTT 定位"
url: "https://arxiv.org/abs/2609.13795"
source_quality: full
topics: [FTM, RTT, indoor-positioning]
topic_primary: ftm-ranging
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

This paper (Enguang Fan, Binh Minh Tran, Klara Nahrstedt; University of Illinois Urbana-Champaign) is a 3-page work-in-progress (WiP) paper accepted at MobiCom '26 that asks a narrow, practical question: can Wi-Fi Fine Time Measurement (FTM) ranging deliver useful indoor positioning on a real enterprise WLAN that was deployed for coverage and capacity, not localization, and without any AP replacement, repositioning, or ranging-specific calibration? The testbed is the live IllinoisNet campus network's Aruba AP-635 access points in a 50m x 30m university office wing with drywall partitions, whiteboards, metal cabinets, and reflective surfaces. Because IllinoisNet's AP-635s support FTM but do not advertise the FTM-responder capability in their beacon frames, standard Android discovery does not identify them as ranging responders; the system works around this by explicitly supplying AP-responder information from the scan result and issuing a two-sided FTM request, without changing AP firmware or network configuration. Positioning itself uses weighted nonlinear least squares over the RTT-derived ranges, with each measurement weighted inversely by RSSI magnitude (stronger signals get more weight).

Five commodity Android phones (Google Pixel 4a, 6a, 7, 7a; Samsung Galaxy S21) were mounted on tripods at 1.25m height at 10 static, manually surveyed locations; at each location every phone collected RTT measurements from all visible IllinoisNet APs for 30 seconds, yielding 50 measurements per location. Separately, the paper's scan log — which records the controller-assigned operating channel each time an AP is observed, not ranging measurements — shows 26,054 total scan observations spread across 8 channel groups (the three standard 2.4 GHz channels plus five 80 MHz channel groups at 5 GHz); this reflects how the centralized controller distributes and reassigns AP channels across the deployment, not the volume of RTT ranging data collected. Against the ranging data, RTT-based localization achieved a median error of 1.21m and a 90th-percentile error of 2.68m, versus 3.17m median and 5.60m 90th-percentile for an RSSI-based multilateration baseline; these results are for the 10 static survey points, using AP coordinates that were manually surveyed rather than automatically estimated. The paper also characterizes systematic error sources: drywall-obstructed paths shift residuals upward (a non-line-of-sight bias), and for one whiteboard-associated direction, the per-distance interquartile range has 2.05x the median of an open line-of-sight reference and is larger at 10 of the 12 tested distances. The authors frame the main implication as: rather than redesigning AP placement for localization geometry, future gains are more likely to come from AP-aware software calibration that models these structured, per-AP residual patterns.

## Summary (ZH)

这篇论文（Enguang Fan、Binh Minh Tran、Klara Nahrstedt，伊利诺伊大学厄巴纳-香槟分校）是一篇被 MobiCom '26 接收的 3 页工作进展（WiP）论文，提出了一个具体而实际的问题：在一个为覆盖和容量而非定位而部署的真实企业级 WLAN 上，在不更换、不重新布置接入点、也不进行测距专用校准的前提下，Wi-Fi 精细时间测量（FTM）测距能否提供实用的室内定位能力？测试环境为伊利诺伊大学校园网 IllinoisNet 在使用中的 Aruba AP-635 接入点，位于一栋大学办公楼的一翼，面积 50 米 × 30 米，内有石膏板隔墙、白板、金属柜和反射面。由于 IllinoisNet 的 AP-635 虽支持 FTM，但并未在信标帧中宣告其 FTM 响应能力，标准安卓设备的扫描发现流程无法将其识别为测距响应方；该系统通过直接从扫描结果中获取接入点响应方信息、并发起双边 FTM 请求来绕过这一问题，且无需改动接入点固件或网络配置。定位本身采用对 RTT 推算距离的加权非线性最小二乘法，每次测量按 RSSI 幅值的倒数加权（信号越强权重越大）。

五部商用安卓手机（Google Pixel 4a、6a、7、7a 及三星 Galaxy S21）被固定在三脚架上（高度 1.25 米），放置于 10 个人工勘测的静态位置；在每个位置，每部手机对所有可见的 IllinoisNet 接入点采集 30 秒的 RTT 测量，每个位置获得 50 次测量。另外，论文的扫描日志——记录的是每次观测到某接入点时其由控制器分配的工作信道，而非测距测量本身——显示累计 26,054 次扫描观测，分布在 8 个信道分组上（2.4 GHz 频段的 3 个标准信道，加上 5 GHz 频段的 5 个 80 MHz 信道分组）；这反映的是集中式控制器如何在整个部署中分配与重新指派接入点信道，而非所采集的 RTT 测距数据量。在测距数据上，基于 RTT 的定位实现了 1.21 米的中位误差和 2.68 米的第 90 百分位误差，而基于 RSSI 的多点定位基线方法分别为 3.17 米和 5.60 米；这些结果均针对这 10 个静态勘测点，且所用接入点坐标是人工勘测所得，而非自动估计。论文还刻画了系统性误差来源：被石膏板遮挡的路径会使残差整体偏移（非视距偏差）；对于一个与白板相关的方向，其按距离分组的四分位距中位数约为开阔视距参照的 2.05 倍，且在 12 个测试距离中的 10 个上该四分位距更大。作者认为，与其为定位几何重新设计接入点布局，未来更可能的改进方向是一种能够刻画这些结构化、按接入点区分的残差模式的、接入点感知型软件校准方法。

## Key technical points (EN)

- Uses live, unmodified IllinoisNet campus WLAN infrastructure (Aruba AP-635) — no temporary AP deployment or ranging-specific hardware, unlike prior RTT localization studies the authors cite as relying on such setups.
- Discovery workaround: explicitly supplies AP-responder information from the Wi-Fi scan result and issues a two-sided FTM request, since IllinoisNet's APs do not advertise FTM-responder capability in their beacon frames (so standard Android scan-based discovery misses them, even though the AP firmware supports FTM).
- Positioning method: weighted nonlinear least squares over RTT-derived ranges, RSSI-magnitude-inverse weighting; baseline is RSSI log-distance path-loss multilateration.
- Devices: 5 Android phones (Pixel 4a/6a/7/7a, Galaxy S21); 10 tripod-mounted static, manually surveyed locations at 1.25m height, 50 RTT measurements per location; results use manually surveyed (not automatically estimated) AP coordinates.
- Separately, the scan log records 26,054 channel-observation entries (controller-assigned operating channel each time an AP was seen) across 8 channel groups (3x 2.4 GHz, 5x 80 MHz groups at 5 GHz) — this is channel-diversity/reassignment data, not the RTT measurement count.
- Headline numbers: RTT median error 1.21m / 90th-percentile 2.68m, vs. RSSI baseline 3.17m / 5.60m (static-location results only).
- Error structure: drywall obstruction produces an NLOS residual bias; for one whiteboard-associated direction, the per-distance IQR is ~2.05x the median of open-LOS paths and is larger at 10/12 distances.
- Published as a 3-page work-in-progress (WiP) paper at MobiCom '26.

## Key technical points (ZH)

- 使用现有、未经改动的 IllinoisNet 校园 WLAN 基础设施（Aruba AP-635）——不同于作者所引用的、依赖临时接入点部署或测距专用硬件的既有 RTT 定位研究。
- 发现问题的解决办法：直接从 Wi-Fi 扫描结果中获取接入点响应方信息，并发起双边 FTM 请求，因为 IllinoisNet 的接入点未在信标帧中宣告其 FTM 响应能力（尽管接入点固件本身支持 FTM，但标准安卓扫描发现流程无法识别）。
- 定位方法：对 RTT 推算距离采用加权非线性最小二乘法，权重与 RSSI 幅值成反比；基线为基于 RSSI 对数距离路径损耗模型的多点定位。
- 设备：5 部安卓手机（Pixel 4a/6a/7/7a、Galaxy S21）；10 个三脚架固定、人工勘测的静态位置，高度 1.25 米，每个位置采集 50 次 RTT 测量；结果所用接入点坐标为人工勘测所得，而非自动估计。
- 另外，扫描日志记录了 26,054 条信道观测记录（每次观测到某接入点时其由控制器分配的工作信道），覆盖 8 个信道分组（3 个 2.4 GHz、5 个 5 GHz 的 80 MHz 分组）——这是信道多样性/重新指派数据，并非 RTT 测量次数。
- 核心数据：RTT 中位误差 1.21 米、第 90 百分位误差 2.68 米，对比 RSSI 基线的 3.17 米和 5.60 米（仅为静态位置结果）。
- 误差结构：石膏板遮挡产生非视距残差偏移；对于一个与白板相关的方向，其按距离分组的四分位距中位数约为开阔视距路径的 2.05 倍，且在 12 个测试距离中的 10 个上该四分位距更大。
- 该论文以 3 页工作进展（WiP）论文形式发表于 MobiCom '26。

## Why it matters / what's new (EN)

Most FTM/RTT evaluations this KB has tracked (e.g. 2026-05-01_arxiv-mc-az-performance-comparison, 2026-05-01_arxiv-secure-wifi-ranging-az-bk) either use controlled testbeds or purpose-configured ranging routers. This paper instead measures what a real enterprise deployment already gives you for free, and finds meter-level accuracy is achievable with zero infrastructure changes — while also identifying the specific building-material and AP-discovery obstacles (drywall NLOS bias, whiteboard multipath, FTM-responder discoverability) that a deployment-ready calibration layer would need to address next.

## Why it matters / what's new (ZH)

本知识库此前跟踪的大多数 FTM/RTT 评测工作（如 2026-05-01_arxiv-mc-az-performance-comparison、2026-05-01_arxiv-secure-wifi-ranging-az-bk）大多使用受控测试平台或专门配置的测距路由器。而这篇论文测量的是一个真实企业级部署"现成"能提供的能力，发现在零基础设施改动的情况下即可达到米级精度，同时也识别出了具体的建筑材料与接入点可发现性障碍（石膏板导致的非视距偏差、白板引起的多径效应、FTM 响应方可发现性问题）——这些正是下一步可部署校准层需要解决的具体问题。

## Images

![Floor plan with AP locations and the 10 static test points | 楼层平面图：标注接入点位置与 10 个静态测试点](https://arxiv.org/html/2609.13795v1/fig/env.png)
![CDF comparing RTT vs. RSSI localization error | RTT 与 RSSI 定位误差累积分布函数对比图](https://arxiv.org/html/2609.13795v1/fig/cdf-compare.png)
