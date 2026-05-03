---
id: 2026-05-04_arxiv-statefi-fsm-device-fingerprinting
date_published: 2025-07-03
date_found: 2026-05-04
type: academic-paper
title_en: "StateFi — Effectively Identifying Wi-Fi Devices through State Transitions (94-98% accuracy under MAC randomisation)"
title_zh: "StateFi —— 通过状态转移有效识别 Wi-Fi 设备（MAC 随机化下 94–98% 准确率）"
url: "https://arxiv.org/abs/2507.02478"
source_quality: full
topics: [security, MAC-layer]
novelty_score: 4
---

## Summary (EN)

Mishra and Cunche (arXiv 2507.02478, posted 3 July 2025; v2 14 January 2026) propose **StateFi**, a device-fingerprinting framework that identifies WiFi devices through **management-frame state-transition behaviour** modelled as a finite-state machine (FSM). The motivation is that MAC-address randomisation has rolled out on every modern OS, defeating the most basic identifier, but **WiFi management frames still leak structured behavioural patterns** — the order in which probe-requests, association requests, EAPOL frames, and various supplicant-specific extensions are issued, plus the timing between them, varies in stable, vendor-specific ways.

The technical move is to treat each device as an FSM with state-transition probabilities and per-state dwell times, both estimated from passive observation of the device's session. That FSM is compressed into a fixed-length feature vector (capturing both structural transitions and temporal dynamics) and fed to a classifier. The result is a fingerprint that survives MAC randomisation, channel hopping, and SSID changes — because none of those rotate at FSM granularity.

Reported numbers: **94-97% accuracy for in-network fingerprinting**, up to 97% for re-identification under randomisation, **98% discrimination** in the strongest setup, beating the strongest prior signature-based fingerprinter by **17 percentage points**. The 17-pp jump matters — prior fingerprinting work plateaued in the 80%s, where the false-alarm rate at scale is too high to be deployable. StateFi crosses into actually-useful territory.

## Summary (ZH)

Mishra 与 Cunche（arXiv 2507.02478，2025 年 7 月 3 日 v1；2026 年 1 月 14 日 v2）提出 **StateFi**：将 WiFi 设备的**管理帧状态转移行为**建模为有限状态机（FSM）的设备指纹框架。动机是：MAC 地址随机化已在所有现代操作系统上推出，把最基础的标识符废掉了；但 **WiFi 管理帧仍然泄漏结构化的行为模式** —— probe-request、association request、EAPOL、各厂商私有扩展之间的发出顺序与时序差异，是稳定且厂商特定的。

技术做法：将每台设备视作一个 FSM，状态转移概率与每态停留时间通过被动监听其会话估计。该 FSM 被压缩为定长特征向量（同时捕获结构转移与时序动态），交给分类器。结果是一种能跨 MAC 随机化、跨信道跳变、跨 SSID 切换的指纹 —— 这三类轮换都不在 FSM 粒度上动。

报告数据：**网内指纹 94–97% 准确率**，随机化下重识别最高 97%，最强配置下判别 98%，比此前最强基于签名的指纹方法**高 17 个百分点**。这 17 pp 的跃迁很关键 —— 既有指纹工作长期停留在 80% 区间，规模化后误报率过高无法部署；StateFi 跨入了真正可用的区间。

## Key technical points (EN)

- FSM model: states = supplicant phases, transitions = mgmt-frame deltas.
- Features: transition probabilities + per-state dwell times.
- Survives MAC randomisation, channel hopping, SSID change.
- 94-97% in-network fingerprinting, ~97% under MAC randomisation, 98% discrimination.
- +17 pp over strongest prior signature-based work.
- Passive only — no probe injection, no privileged AP access.

## Key technical points (ZH)

- FSM 建模：状态 = supplicant 阶段，转移 = 管理帧增量。
- 特征：转移概率 + 每态停留时间。
- 跨 MAC 随机化、跨信道跳变、跨 SSID 切换均稳定。
- 网内指纹 94–97%，随机化下约 97%，最高 98% 判别。
- 比此前最强基于签名的指纹方法高 17 个百分点。
- 仅需被动监听，无须主动探测、无需 AP 特权。

## Why it matters / what's new (EN)

This is a load-bearing result for the privacy posture of WiFi. MAC randomisation was the headline industry response to passive tracking concerns through 2020-2025; StateFi shows that **the management-frame FSM is a wider side channel than randomisation closes**, and that the side channel is now exploitable at deploy-grade accuracy. Pairs with `arxiv-csi-rff-microsignals-fingerprinting` (analog hardware fingerprint via CSI) — same conclusion from a different layer of the stack: identifiers below MAC are still everywhere. From a standards posture this puts pressure on TGbi (the 802.11 privacy task group; see `ieee-mentor-may-2026-pre-interim-digest` and `ieee-march-2026-readout`) to address frame-sequence leakage explicitly, not just identifier rotation.

## Why it matters / what's new (ZH)

这是 WiFi 隐私态势中很硬的一击。2020–2025 年间业界对被动追踪的标志性回应是 MAC 随机化；StateFi 证明**管理帧 FSM 是一个比随机化所能封堵更宽的旁路**，且现在已可在部署级别精度上利用。与 `arxiv-csi-rff-microsignals-fingerprinting`（CSI 中的模拟硬件指纹）相互印证 —— 不同协议层得到同一结论：MAC 之下的标识到处都是。从标准视角，这给 TGbi（802.11 隐私任务组；参 `ieee-mentor-may-2026-pre-interim-digest`、`ieee-march-2026-readout`）施压，要求其显式处理帧序列泄漏问题，而非仅做标识符轮换。
