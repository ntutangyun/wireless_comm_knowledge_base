---
id: 2026-07-09_ieee-mentor-tgbn-preplenary-digest
date_published: 2026-07-09
date_found: 2026-07-09
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest — pre-Montreal-plenary wave (DCN 1122-1379 window)"
title_zh: "IEEE 802.11 TGbn Mentor 摘要——蒙特利尔全会前贡献潮（DCN 1122-1379 窗口）"
url: https://mentor.ieee.org/802.11/documents?is_year=2026
source_quality: snippet_only
topics: [802.11bn, TGbn, LB291, MAPC, NPCA, Co-RTWT, DSO, EMLSR]
topic_primary: wifi8-uhr
topics_secondary: [mapc-cosr, rtwt-latency, mlo]
novelty_score: 2
---

## Summary (EN)

TGbn posted 58 new contributions in the catch-up window since this KB's last Mentor scan (DCN watermark 1121, May 18) through July 8 — the eve of the July 12-17 Montreal plenary, with the TGbn MAC ad-hoc running July 8-10. The stream is dominated by the LB291 comment-resolution grind on D1.0 needed to reach the D2.0 recirculation ballot targeted for this plenary: multi-part CR series on Co-BF/Co-SR (Huawei, parts 6-7), NPCA (WILUS, Hikvision, Marvell/Fischer, incl. switching based on NPCA primary-channel conditions and NPCA-with-DBE), DSO (Apple, part 3), Co-RTWT (Qualcomm, part 9), P-EDCA enablement, EMCCA, DRU, Trigger-frame format (part 14), UHR EMLSR, ELR, MIB/MLME plumbing, and PPDU format/BW/MCS/NSS selection rules (NXP).

Beyond the CR grind, several brand-new mechanism proposals stand out: VESTEL's feasibility-based AP group formation and scheme filtering for MAPC (1218); a pair of DUO (downlink-uplink-offset) scheduling proposals from Yongning Ke — AP-advised window-constrained DUO scheduling (1234) and AP-centralized scheduling of DUO windows (1235); an ICR frame extension carrying MAPC traffic indication in Co-TDMA polling (1237, Yuqing Zheng); Co-RTWT negotiation enhancement with traffic-profile information (1240, Mengying Lin); MAPC notification for BSS-parameter critical updates (1249); Co-BF antenna disable for sequential sounding (1290, Intel/Strobel); and a DS-CTS scrambling-seed update (1284). MAPC security CIDs also progressed (1145, ZTE).

## Summary (ZH)

自本 KB 上次 Mentor 扫描（DCN 水位 1121，5 月 18 日）至 7 月 8 日——即 7 月 12-17 日蒙特利尔全会前夕（TGbn MAC 专题会 7 月 8-10 日进行中）——TGbn 上传了 58 份新贡献。主流是面向 D1.0 的 LB291 评论决议冲刺，目标是在本次全会达到 D2.0 再流转投票：Co-BF/Co-SR 多部曲（华为，第 6-7 部分）、NPCA（WILUS、海康威视、Marvell/Fischer，含基于 NPCA 主信道状况的切换与 NPCA+DBE）、DSO（苹果，第 3 部分）、Co-RTWT（高通，第 9 部分）、P-EDCA 使能、EMCCA、DRU、触发帧格式（第 14 部分）、UHR EMLSR、ELR、MIB/MLME 管道，以及 PPDU 格式/带宽/MCS/NSS 选择规则（NXP）。

在评论决议之外，多份全新机制提案值得注意：VESTEL 的基于可行性的 MAPC AP 组建与方案过滤（1218）；Yongning Ke 的一对 DUO（下行-上行偏移）调度提案——AP 建议的窗口约束 DUO 调度（1234）与 AP 集中式 DUO 窗口调度（1235）；在 Co-TDMA 轮询中携带 MAPC 业务指示的 ICR 帧扩展（1237，Yuqing Zheng）；带业务画像信息的 Co-RTWT 协商增强（1240，Mengying Lin）；BSS 参数关键更新的 MAPC 通知（1249）；顺序探测下的 Co-BF 天线关闭（1290，英特尔/Strobel）；DS-CTS 扰码种子更新（1284）。MAPC 安全相关 CID 亦有进展（1145，中兴）。

## Key technical points (EN)

- **DCN 11-26-1218 · TGbn** — Feasibility-Based AP Group Formation and Scheme Filtering for MAPC. VESTEL. New mechanism: prune infeasible coordination schemes before MAPC group formation.
- **DCN 11-26-1234/1235 · TGbn** — AP-Advised Window-Constrained DUO Scheduling / AP-Centralized Scheduling of DUO Windows. Yongning Ke. Two-flavor proposal (distributed-advice vs centralized) for scheduling downlink/uplink offset windows.
- **DCN 11-26-1237 · TGbn** — ICR Frame Extension for MAPC Traffic Indication in Co-TDMA Polling. Yuqing Zheng. Extends the initial-control-response exchange to carry per-BSS traffic demand into Co-TDMA slot allocation.
- **DCN 11-26-1240 · TGbn** — Co-RTWT Negotiation Enhancement with Traffic Profile Information. Mengying Lin. Adds traffic-profile signalling to cross-BSS R-TWT membership negotiation.
- **DCN 11-26-1249 · TGbn** — MAPC Notification for BSS Parameter Critical Update. Yuqing Zheng. Propagates critical BSS updates through the MAPC coordination set.
- **DCN 11-26-1290 · TGbn** — Co-BF Antenna Disable for Sequential Sounding. Rainer Strobel (Intel). Reduces sequential-sounding overhead by disabling antennas per sounding round.
- **DCN 11-26-1284 · TGbn** — DS-CTS Scrambling Seed Update. Wook Bong Lee. PHY-level tweak to distributed-CTS scrambling.
- LB291 CR series (selection): Co-BF/Co-SR MISC parts 6-7 (Huawei/Guo), DSO part 3 (Apple/Mehrnoush), Co-RTWT part 9 (Qualcomm/Chisci), NPCA switching on primary-channel conditions (Hikvision/Pan) and NPCA-with-DBE (Cheng), P-EDCA enablement part 2 (Huawei/Shi), EMCCA remaining CIDs (Klein), Trigger Frame Format part 14 (Qualcomm), UHR EMLSR + ST misc (Seok, MediaTek), PPDU/BW/MCS/NSS selection rules (NXP/Chu), ELR CID 10444 (Broadcom/Pulikkoonattu), Bounded ESS resolutions (Rison), 37.1 comment resolution (Qualcomm/Cherian).

## Key technical points (ZH)

- **DCN 11-26-1218 · TGbn** — 基于可行性的 MAPC AP 组建与方案过滤。VESTEL。新机制：在 MAPC 组建前先剔除不可行的协调方案。
- **DCN 11-26-1234/1235 · TGbn** — AP 建议的窗口约束 DUO 调度 / AP 集中式 DUO 窗口调度。Yongning Ke。下行/上行偏移窗口调度的两种形态（分布式建议 vs 集中式）。
- **DCN 11-26-1237 · TGbn** — Co-TDMA 轮询中携带 MAPC 业务指示的 ICR 帧扩展。Yuqing Zheng。扩展初始控制响应交互，把各 BSS 业务需求带入 Co-TDMA 时隙分配。
- **DCN 11-26-1240 · TGbn** — 带业务画像信息的 Co-RTWT 协商增强。Mengying Lin。在跨 BSS R-TWT 成员协商中加入业务画像信令。
- **DCN 11-26-1249 · TGbn** — BSS 参数关键更新的 MAPC 通知。Yuqing Zheng。在 MAPC 协调集内传播关键 BSS 更新。
- **DCN 11-26-1290 · TGbn** — 顺序探测下的 Co-BF 天线关闭。Rainer Strobel（英特尔）。按探测轮次关闭天线以降低顺序探测开销。
- **DCN 11-26-1284 · TGbn** — DS-CTS 扰码种子更新。Wook Bong Lee。分布式 CTS 扰码的 PHY 层微调。
- LB291 评论决议系列（节选）：Co-BF/Co-SR MISC 第 6-7 部分（华为/Guo）、DSO 第 3 部分（苹果/Mehrnoush）、Co-RTWT 第 9 部分（高通/Chisci）、基于主信道状况的 NPCA 切换（海康/Pan）与 NPCA+DBE（Cheng）、P-EDCA 使能第 2 部分（华为/Shi）、EMCCA 遗留 CID（Klein）、触发帧格式第 14 部分（高通）、UHR EMLSR 与 ST 杂项（Seok，联发科）、PPDU/带宽/MCS/NSS 选择规则（NXP/Chu）、ELR CID 10444（博通/Pulikkoonattu）、Bounded ESS 决议（Rison）、37.1 评论决议（高通/Cherian）。

## Why it matters / what's new (EN)

This is the final contribution wave before the D2.0 recirculation decision at the Montreal plenary (July 12-17) — the density of multi-part CR series (Co-SR part 7, Co-RTWT part 9, Trigger-frame part 14) shows the D1.0 comment backlog is in its endgame, consistent with the ~75% resolution figure reported publicly. The genuinely new mechanisms cluster in MAPC scheduling: feasibility-filtered group formation (1218), DUO window scheduling (1234/1235), and traffic-aware Co-TDMA/Co-RTWT signalling (1237/1240) — evidence that after a year of framework CRs, the group is now arguing about *how much traffic knowledge coordination frames should carry*. Note: this digest covers a 7-week catch-up window rather than a single day, because the Mentor source had not been scanned since May 18.

## Why it matters / what's new (ZH)

这是蒙特利尔全会（7 月 12-17 日）D2.0 再流转决定前的最后一波贡献——多部曲评论决议系列的密度（Co-SR 第 7 部、Co-RTWT 第 9 部、触发帧第 14 部）表明 D1.0 评论积压已进入收官阶段，与公开报道的约 75% 决议率一致。真正的新机制集中在 MAPC 调度：可行性过滤的组建（1218）、DUO 窗口调度（1234/1235）、业务感知的 Co-TDMA/Co-RTWT 信令（1237/1240）——说明在一年的框架性评论决议之后，工作组现在争论的是"协调帧应携带多少业务信息"。注：因 Mentor 源自 5 月 18 日后未再扫描，本摘要覆盖 7 周补扫窗口而非单日。
