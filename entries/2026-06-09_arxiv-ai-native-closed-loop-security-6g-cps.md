---
id: 2026-06-09_arxiv-ai-native-closed-loop-security-6g-cps
date_published: 2026-06-06
date_found: 2026-06-09
type: academic-paper
title_en: "AI-Native Closed-Loop Security for 6G-Enabled Cyber-Physical Systems: From Edge Detection to Network-Wide Mitigation"
title_zh: "面向 6G 赋能信息物理系统的 AI 原生闭环安全：从边缘检测到全网缓解"
url: "https://arxiv.org/abs/2606.08173"
source_quality: abstract_only
technology: cellular
topics: [6G, security, O-RAN, URLLC, federated-learning, digital-twin]
topic_primary: security-privacy
topics_secondary: [6g-vision, open-ran]
novelty_score: 2
---

## Summary (EN)
This systematic review (Hussain, Bilal, Li, Pervaiz, Tang, Du, Ahmad, Azhar, Zhang; submitted 6 Jun 2026) argues that 6G-connected cyber-physical systems — autonomous vehicles, smart grids, industrial robots, surgical equipment — collapse the window between a security breach and physical harm to milliseconds, which centralized firewalls and security-operations-center workflows cannot meet. It proposes an AI-native *closed-loop* security architecture that integrates sensing, decision, mitigation, and retraining as one continuous loop.

Mechanistically, the loop senses anomalies at the multi-access edge (minute-scale call-detail records for baseline learning plus sub-millisecond RAN / O-RAN telemetry for real-time detection), decides locally using compressed deep models to avoid backhaul bottlenecks, mitigates network-wide through SDN/NFV controllers, and continuously retrains via federated learning and digital-twin replay. A distinguishing element is the use of formal per-slice latency contracts at tail percentiles (p99) so that safety-critical slices get tail-bounded response guarantees.

The work synthesises 128 peer-reviewed studies (2017–2026) under a PRISMA protocol: it maps 6G/CPS threats to the MITRE ATT&CK framework, unifies anomaly detection across twelve datasets and multiple model families, consolidates SDN/NFV/O-RAN mitigation primitives, and names five open directions (data quality, latency optimisation, trust, standardisation, evaluation methodology).

## Summary (ZH)
本文为系统性综述（Hussain、Bilal、Li、Pervaiz、Tang、Du、Ahmad、Azhar、Zhang；2026 年 6 月 6 日提交），指出 6G 连接的信息物理系统——自动驾驶车辆、智能电网、工业机器人、手术设备——将"安全入侵→物理伤害"的窗口压缩到毫秒级，集中式防火墙与安全运营中心（SOC）流程无法应对。论文提出一种 AI 原生*闭环*安全架构，将感知、决策、缓解与再训练整合为一个连续回路。

机制上，该回路在多接入边缘进行异常感知（分钟级话单 CDR 用于基线学习，亚毫秒级 RAN / O-RAN 遥测用于实时检测），使用压缩深度模型在本地决策以避免回传瓶颈，通过 SDN/NFV 控制器实现全网缓解，并借助联邦学习与数字孪生回放持续再训练。一个突出要素是按切片定义尾分位（p99）的形式化时延契约，使安全关键切片获得尾界响应保证。

该工作依据 PRISMA 规程综合了 128 篇同行评审研究（2017–2026）：将 6G/CPS 威胁映射到 MITRE ATT&CK 框架，统一了十二个数据集与多种模型族上的异常检测，整合了 SDN/NFV/O-RAN 缓解原语，并提出五个开放方向（数据质量、时延优化、信任、标准化、评估方法）。

## Key technical points (EN)
- Closed loop: sense (edge) → decide (compressed local models) → mitigate (SDN/NFV network-wide) → retrain (federated learning + digital twin).
- Edge sensing splits time scales: minute-scale CDRs for baselines, sub-ms RAN/O-RAN telemetry for latency-critical detection.
- Per-slice tail-percentile (p99) latency contracts for safety-critical services.
- Maps 6G/CPS threats onto MITRE ATT&CK; PRISMA synthesis of 128 studies across 12 datasets.

## Key technical points (ZH)
- 闭环：感知（边缘）→ 决策（压缩本地模型）→ 缓解（SDN/NFV 全网）→ 再训练（联邦学习 + 数字孪生）。
- 边缘感知按时间尺度拆分：分钟级 CDR 做基线，亚毫秒级 RAN/O-RAN 遥测做时延关键检测。
- 为安全关键业务设定按切片的尾分位（p99）时延契约。
- 将 6G/CPS 威胁映射到 MITRE ATT&CK；对 12 个数据集上的 128 篇研究做 PRISMA 综合。

## Why it matters / what's new (EN)
Prior security work in the KB treats detection or mitigation in isolation; this entry's contribution is the explicit closed-loop integration with formal latency contracts at the slice level, framed for the millisecond breach-to-harm window of 6G cyber-physical systems. It connects the `security-privacy`, `6g-vision`, and `open-ran` bins (the mitigation primitives are O-RAN RIC-style control loops).

## Why it matters / what's new (ZH)
KB 中以往的安全工作多孤立地处理检测或缓解；本条目的贡献在于显式的闭环整合并在切片级引入形式化时延契约，针对 6G 信息物理系统毫秒级"入侵到伤害"窗口而设计。它打通了 `security-privacy`、`6g-vision` 与 `open-ran` 三个分类（其缓解原语即 O-RAN RIC 式控制回路）。
