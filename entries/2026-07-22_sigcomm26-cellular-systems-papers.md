---
id: 2026-07-22_sigcomm26-cellular-systems-papers
date_published: 2026-07-20
date_found: 2026-07-22
type: academic-paper
technology: cellular
title_en: "SIGCOMM 2026 accepted-papers digest — cellular systems: SAGE, CausalTune, dual-loop 5G uplink CC, low-altitude UAV 5G"
title_zh: "SIGCOMM 2026 录用论文摘要——蜂窝系统方向：SAGE、CausalTune、5G 上行双环拥塞控制、低空无人机 5G"
url: "https://conferences.sigcomm.org/sigcomm/2026/accepted/"
source_quality: snippet_only
topics: [SIGCOMM, congestion-control, RAN-configuration, UAV, AI-RAN]
topic_primary: cellular-ai
topics_secondary: [5g-nr]
novelty_score: 2
---

## Summary (EN)

The full ACM SIGCOMM 2026 accepted-papers list (110 papers) is now public, and four cellular-systems papers stand out beyond the already-covered RANPilot. **SAGE** (EPFL + Pavonis LLC) is "a real-time AI system for reducing latency in NextG cellular networks." **CausalTune** (University of Edinburgh + AT&T) applies causal learning to automated cellular RAN configuration tuning — notable for pairing an academic causal-inference framework with an operator's production configuration problem. **"Synchronizing with the Scheduler"** (University at Buffalo + Princeton) proposes dual-loop congestion control for the 5G uplink on commodity devices — attacking the uplink bottleneck that recent measurement studies (including this week's stadium characterization) keep flagging as cellular's weakest direction. **"Unveiling Low-Altitude 5G Performance"** (SCUT + Pengcheng Laboratory) links 5G KPIs to UAV flight parameters for the emerging low-altitude economy.

Only titles and author lists are public; camera-ready PDFs land around the conference (September 2026). Each paper is a candidate for a dedicated entry when its preprint appears.

## Summary (ZH)

ACM SIGCOMM 2026 录用论文全名单（110 篇）已公开，除已收录的 RANPilot 外有四篇蜂窝系统论文值得关注。**SAGE**（EPFL + Pavonis LLC）：面向下一代蜂窝网络降低时延的实时 AI 系统。**CausalTune**（爱丁堡大学 + AT&T）：将因果学习用于蜂窝 RAN 配置自动调优——学术因果推断框架与运营商生产配置问题的结合值得注意。**《Synchronizing with the Scheduler》**（布法罗大学 + 普林斯顿）：在商用设备上实现 5G 上行双环拥塞控制——直击近期测量研究（包括本周的体育场测量）反复指出的蜂窝最弱方向：上行。**《Unveiling Low-Altitude 5G Performance》**（华南理工 + 鹏城实验室）：将 5G KPI 与无人机飞行参数关联，服务低空经济。

目前仅公开标题与作者；正式版论文约于会议期（2026 年 9 月）发布。各篇预印本出现时均可考虑单独立条。

## Key technical points (EN)

- SAGE (EPFL/Pavonis): real-time AI latency reduction for NextG cellular.
- CausalTune (Edinburgh/AT&T): causal-learning-based automated RAN configuration tuning on operator data.
- Dual-loop 5G uplink congestion control (Buffalo/Princeton): commodity-device uplink CC synchronized with the gNB scheduler.
- Low-altitude 5G (SCUT/Pengcheng): KPI vs UAV flight-parameter characterization.
- RANPilot (PolyU/Buffalo) also accepted — already covered as 2026-07-07_arxiv-ranpilot-proactive-oran-ai-adaptation.

## Key technical points (ZH)

- SAGE（EPFL/Pavonis）：下一代蜂窝网络的实时 AI 降时延系统。
- CausalTune（爱丁堡/AT&T）：基于因果学习、在运营商数据上的 RAN 配置自动调优。
- 5G 上行双环拥塞控制（布法罗/普林斯顿）：与 gNB 调度器同步的商用设备上行 CC。
- 低空 5G（华南理工/鹏城）：5G KPI 与无人机飞行参数的关联刻画。
- RANPilot（理大/布法罗）同获录用——已收录为 2026-07-07_arxiv-ranpilot-proactive-oran-ai-adaptation。

## Why it matters / what's new (EN)

SIGCOMM acceptance is a strong signal of systems maturity, and the 2026 cellular cluster shows two clear currents: AI moving from offline optimization into real-time RAN loops (SAGE, CausalTune — with AT&T co-authorship marking operator buy-in), and the 5G uplink emerging as the community's next bottleneck target (dual-loop CC), consistent with the uplink-collapse findings in 2026-07-22_wintech-stadium-wifi-cellular-measurement. Follow-up trigger: fetch camera-ready PDFs when they post (~September 2026).

## Why it matters / what's new (ZH)

SIGCOMM 录用本身即是系统成熟度的强信号，2026 年蜂窝论文群呈现两条主线：AI 从离线优化走向实时 RAN 闭环（SAGE、CausalTune——AT&T 参与署名标志运营商入场），以及 5G 上行成为学界下一个瓶颈目标（双环 CC），与 2026-07-22_wintech-stadium-wifi-cellular-measurement 的上行崩塌发现一致。后续触发点：正式版 PDF 发布（约 2026 年 9 月）时抓取。
