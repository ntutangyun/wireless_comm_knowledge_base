---
id: 2026-05-18_ieee-mentor-may-2026-post-interim-digest
date_published: 2026-05-15
date_found: 2026-05-18
type: ieee-document
title_en: "IEEE 802.11 May 2026 Antwerp interim — post-session digest"
title_zh: "IEEE 802.11 2026年5月 Antwerp 期中会议——会后摘要"
url: https://mentor.ieee.org/802.11/documents?is_year=2026
source_quality: snippet_only
topics: [802.11bn, 802.11bp, 802.11bq, 802.11bt, 802.11br, MAPC, Co-SR, Co-BF, NPCA, ELR, MLO, AMP-IoT, mmWave, PQC, light-comms, LB291, LB292, LB294]
topic_primary: wifi8-uhr
topics_secondary: [mapc-cosr, amp-iot, mmwave-bq, security-privacy, energy-power-save, agentic-wifi]
novelty_score: 2
---

## Summary (EN)

The IEEE 802.11 May 2026 interim session convened in Antwerp May 11–15, with all active task groups meeting. The session was the first full working meeting after the January 2026 plenary and represented a critical checkpoint for several draft schedules. Mentor uploads for the week peaked on May 14 (closing-plenary day), with **DCNs reaching 1097** — the highest number of the year — driven by closing reports, revised LB comment resolutions, and a handful of structurally new contributions.

Across the groups the dominant workload is **letter-ballot comment resolution**: TGbn (LB291 on Draft 1.0), TGbi (LB292), and TGm/REVmf (LB294) all advanced their comment pools significantly. TGbn is now estimated at ~70% through LB291 comments and tracking toward **Draft 2.0 in July 2026** (slipped from May, ratification still May 2028). TGbp continued its PDT (Proposed Draft Text) build-out across the AMP-IoT specification skeleton, now with draft text across receive procedures, excitation fields, triggering, and security. TGbq matured mmWave service-period and multi-radio operation contributions. TGbt advanced PQC (post-quantum cryptography) work including a PQC enterprise authentication framework, PQC rekey in the 4-way handshake, and algorithm extendibility. TGbr reached its **D0.1 baseline**. New or elevated cross-group threads include: the ARC SC → TGbn L4S liaison (IETF L4S congestion control reaching Wi-Fi 8), an 802.11 WG liaison to Wi-Fi Alliance on the PQC project, AIML TIG/SC work on AI/ML for coordinated beamforming (CBF), and UCM TIG propagation/KPI studies for power-efficient network deployment.

## Summary (ZH)

IEEE 802.11 2026 年 5 月期中会议于 5 月 11-15 日在 Antwerp 召开，所有活跃任务组均参会。本次会议是 2026 年 1 月全会后的首次完整工作会议，也是多个草案时间表的关键检查点。本周 Mentor 上传峰值出现在 5 月 14 日（闭幕日），**DCN 编号达到 1097** —— 为年内迄今最高 —— 主要由闭幕报告、修订后的 LB 评论解决方案以及少数结构性新增贡献驱动。

各组的主导工作是**函评评论解决**：TGbn（针对 Draft 1.0 的 LB291）、TGbi（LB292）和 TGm/REVmf（LB294）均大幅推进了各自的评论池。TGbn 预计已完成约 70% 的 LB291 评论，正朝 **2026 年 7 月发布 Draft 2.0** 推进（较原定 5 月滑期，最终标准通过仍定 2028 年 5 月）。TGbp 继续在 AMP-IoT 规范骨架上进行 PDT 构建，现已覆盖接收流程、激励场、触发机制及安全等条款。TGbq 成熟化了 mmWave 服务期和多射频操作文稿。TGbt 推进了 PQC 工作，包括 PQC 企业认证框架、4 次握手 PQC 密钥更新和算法可扩展性。TGbr 达成了 **D0.1 基线**。新增或升级的跨组线索包括：ARC SC 给 TGbn 的 L4S 联络函（IETF 低时延拥塞控制框架触及 Wi-Fi 8）、802.11 WG 给 Wi-Fi Alliance 关于 PQC 项目的联络函、AIML TIG/SC 关于 AI/ML 用于协调波束成形（CBF）的工作，以及 UCM TIG 关于高效部署的传播/KPI 研究。

## Key technical points (EN)

- **TGbn (D2.0 in July)** — ~70% through LB291. Dominant CR clusters: Co-RTWT, Co-TDMA, Co-BF/Co-SR, NPCA, DBE, P-EDCA, DRU, ELR, MLO, seamless roaming, MIB. New: Memory Management for Cross-BSS CSI (DCN 982r0), P2P TWT modification (DCN 971r0), L4S liaison from ARC SC (DCN 1078r0). Key contributors: Qualcomm, Huawei, Intel, Mediatek, Cisco, LG, Samsung, InterDigital, Broadcom, Maxlinear.
- **TGbp (AMP-IoT PDT build-out)** — Closing report DCN 1081. Major PDT threads: AMP Receive Procedure (837r7), Excitation Field (959r4), Triggering Procedure (823r4), AMP SP Advert frame (940r5), PPDU encoding process (732r3), security general (1060r1), UL channel access for non-AP AMP STA (802r4), Sub-1GHz receive procedure (817r2). Contributors: Huawei, Qualcomm, HaiLa, NXP, OPPO, Infineon, Ericsson.
- **TGbq (mmWave maturation)** — Teleconference agenda May–Jul (1092r0), closing report (1090r0). Key threads: IMMW On-Demand Operation (618r3), IMMW Service Period for Beam Establishment (888r4), Multi-radio operation on mmW link (834r1), Channel Access for IMMW STAs (612r1), GI Options follow-up (116r0 from Jan), L-STF for IMMW PHY (25r0). Contributors: Ofinno, Qualcomm, OPPO, Xiaomi, Huawei, NXP.
- **TGbt (PQC + CC52)** — Closing reports (1085r0/r1). Key threads: PQC Enterprise Authentication (95r0), PQC Rekey in 4-Way Handshake (101r0), Hpqc-pake (89r0), pqc-dot1x (88r0), CR for PQC algorithm extendibility (1064r3), CR for CID16 in CC52 (935r3). Contributors: Apple, ZTE, HPE, Huawei, Cisco, Ericsson.
- **TGbr (light comms D0.1)** — Closing reports (1083r0, 1089r0). D0.1 baseline established (1070r1). RF-to-IF channelization proposal (38r0). Contributors: FTH/pureLiFi, Fraunhofer HHI.
- **TGbi (EPPKE security)** — Closing report (1080r0). LB292 CRs: EPPKE (117r0), PGTK (104r0), EPP Epoch Start Time (50r0). Contributors: Qualcomm, Canon.
- **TGm (REVmf LB294)** — LB294 resolutions (1097r0, 787r1, 1034r1, 740r1), revised agenda (772r6), motions (580r3). Contributors: Qualcomm, Huawei, Cisco, pureLiFi.
- **802.11 WG** — Liaison to WFA on PQC project (1086r0), May session report (714r2), WG motions (715r1), Editors closing report (1072r1).
- **ARC SC** — Closing report (1076r1), L4S liaison to TGbn (1078r0).
- **UCM TIG** — Minutes (1091r0), closing report (1087r1), propagation KPIs for power-efficient deployment (1071r1), COTS channel measurement for spatial consistency (1018r1).
- **AIML TIG/SC** — AIML for WiFi / Applications to CBF (808r1). AI/ML applied to coordinated beamforming.
- **Coex SC** — Closing report (691r1), draft liaison to ETSI TC BRAN on TR 104 893 (1088r0).

## Key technical points (ZH)

- **TGbn（7 月 D2.0）**——LB291 完成约 70%。主导 CR 集群：Co-RTWT、Co-TDMA、Co-BF/Co-SR、NPCA、DBE、P-EDCA、DRU、ELR、MLO、无缝漫游、MIB。新增：跨 BSS CSI 内存管理（DCN 982r0）、P2P TWT 修改（DCN 971r0）、来自 ARC SC 的 L4S 联络函（DCN 1078r0）。主要贡献者：Qualcomm、Huawei、Intel、Mediatek、Cisco、LG、Samsung、InterDigital、Broadcom、Maxlinear。
- **TGbp（AMP-IoT PDT 构建）**——闭幕报告 DCN 1081。主要 PDT 线索：AMP 接收流程（837r7）、激励场（959r4）、触发流程（823r4）、AMP SP 公告帧（940r5）、PPDU 编码流程（732r3）、安全概述（1060r1）、非 AP AMP STA 上行信道接入（802r4）、Sub-1GHz 接收流程（817r2）。贡献者：Huawei、Qualcomm、HaiLa、NXP、OPPO、Infineon、Ericsson。
- **TGbq（mmWave 成熟化）**——5-7 月电话会议议程（1092r0）、闭幕报告（1090r0）。主要线索：IMMW 按需运行（618r3）、IMMW 波束建立服务期（888r4）、mmW 链路上的多射频操作（834r1）、IMMW STA 信道接入（612r1）、GI 选项后续（116r0）、IMMW PHY L-STF（25r0）。贡献者：Ofinno、Qualcomm、OPPO、Xiaomi、Huawei、NXP。
- **TGbt（PQC + CC52）**——闭幕报告（1085r0/r1）。主要线索：PQC 企业认证（95r0）、4 次握手中 PQC 密钥更新（101r0）、Hpqc-pake（89r0）、pqc-dot1x（88r0）、PQC 算法可扩展性 CR（1064r3）、CC52 CID16 CR（935r3）。贡献者：Apple、ZTE、HPE、Huawei、Cisco、Ericsson。
- **TGbr（光通信 D0.1）**——闭幕报告（1083r0、1089r0）。D0.1 基线确立（1070r1）。RF-to-IF 信道化方案（38r0）。贡献者：FTH/pureLiFi、Fraunhofer HHI。
- **TGbi（EPPKE 安全）**——闭幕报告（1080r0）。LB292 CR：EPPKE（117r0）、PGTK（104r0）、EPP 纪元开始时间（50r0）。贡献者：Qualcomm、Canon。
- **TGm（REVmf LB294）**——LB294 解决方案（1097r0、787r1、1034r1、740r1）、修订议程（772r6）、动议（580r3）。贡献者：Qualcomm、Huawei、Cisco、pureLiFi。
- **802.11 WG**——给 WFA 关于 PQC 项目的联络函（1086r0）、5 月会议报告（714r2）、WG 动议（715r1）、编辑闭幕报告（1072r1）。
- **ARC SC**——闭幕报告（1076r1）、给 TGbn 的 L4S 联络函（1078r0）。
- **UCM TIG**——会议纪要（1091r0）、闭幕报告（1087r1）、高效部署传播 KPI（1071r1）、空间一致性 COTS 信道测量（1018r1）。
- **AIML TIG/SC**——AI/ML 用于 WiFi / CBF 应用（808r1）。AI/ML 应用于协调波束成形。
- **Coex SC**——闭幕报告（691r1）、致 ETSI TC BRAN 关于 TR 104 893 的联络函草案（1088r0）。

## Why it matters / what's new (EN)

This was the first full-session checkpoint since the January plenary, and the volume confirms the 802.11 working group is running hot on all three major drafts (bn, bp, bq) plus the REVmf maintenance update. Three structural developments stand out: (1) the **L4S/ARC liaison to TGbn** signals IETF low-latency congestion-control reaching 802.11bn — a topic the existing KB entry `2026-05-03_nsdi-law-802-11-low-latency-link-layer` already tracks from the academic side; (2) the **WFA liaison on PQC** (DCN 1086) is the first formal 802.11 ↔ Wi-Fi Alliance coordination on post-quantum cryptography, marking an industry-wide readiness signal; (3) the **AIML TIG/SC CBF work** (808r1) brings AI/ML into the coordinated beamforming conversation, which is a new intersection of the `agentic-wifi` and `mapc-cosr` topics. TGbr reaching D0.1 and TGbt's PQC enterprise authentication framework are also milestone-worthy. The July 2026 D2.0 target for TGbn remains the single most consequential schedule item — if it holds, the D2.0 → D3.0 → ratification path through May 2028 is credible.

## Why it matters / what's new (ZH)

这是 1 月全会后的首次完整会议检查点，体量证实 802.11 工作组在三个主要草案（bn、bp、bq）加 REVmf 维护修订上全速推进。三项结构性发展值得关注：(1) **L4S/ARC 给 TGbn 的联络函** 标志着 IETF 低时延拥塞控制触及 802.11bn —— 既有 KB 条目 `2026-05-03_nsdi-law-802-11-low-latency-link-layer` 已从学术侧跟踪此话题；(2) **给 WFA 关于 PQC 的联络函**（DCN 1086）是 802.11 ↔ Wi-Fi Alliance 在后量子密码学上的首次正式协调，标志着全行业就绪信号；(3) **AIML TIG/SC 的 CBF 工作**（808r1）将 AI/ML 带入协调波束成形讨论，是 `agentic-wifi` 与 `mapc-cosr` 话题的新交叉点。TGbr 达成 D0.1 以及 TGbt 的 PQC 企业认证框架同样具有里程碑意义。TGbn 的 2026 年 7 月 D2.0 目标仍是影响最重大的单项时间表 —— 如能守住，D2.0 → D3.0 → 2028 年 5 月标准通过的路径就是可信的。
