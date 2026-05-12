---
id: 2026-05-12_ieee-mentor-tgbn-antwerp-digest
date_published: 2026-05-11
date_found: 2026-05-12
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest — Antwerp interim May 6–11, 2026"
title_zh: "IEEE 802.11 TGbn Mentor 摘要——Antwerp 期中会议 2026-05-06 至 2026-05-11"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=0bn
source_quality: snippet_only
topics: [802.11bn, MAPC, Co-SR, Co-BF, Co-TDMA, Co-RTWT, ELR, NPCA, MLO, seamless-roaming, L4S, P-EDCA, DRU, LB291]
topic_primary: wifi8-uhr
topics_secondary: [mapc-cosr, mlo, rtwt-latency, roaming-mobility, energy-power-save]
novelty_score: 2
---

## Summary (EN)

TGbn (Wi-Fi 8 / UHR) ran the bulk of its May 2026 Antwerp interim through a MAC ad-hoc on May 6–8 followed by the WG sessions May 10–11. The dominant activity is **LB291 comment resolution** — the comment ballot opened on Draft 1.0 and the group is now ~60-65 % through the comment population, with the goal of clearing the remaining material in time for **Draft 2.0 in July 2026** (slipped from the original May target, ratification still tracking for May 2028). The Antwerp uploads visible in Mentor span essentially every active Co- mechanism plus three structurally new items: cross-BSS CSI memory management, P2P TWT agreement modification, and "Memory Management for Cross-BSS CSI" — the latter pointing at a quiet but real cost surface for MAPC-class coordination at AP scale.

Volume on May 6–11 is unusually high — the group cycled through 11 LB291 CR clusters in parallel (Co-RTWT, Co-TDMA, Co-BF/Co-SR, NPCA, DBE, P-EDCA, DRU, ELR, MLO, roaming, MIB), most as rev N≥3 of previously-uploaded contributions. The contributor distribution is the familiar leaders: Qualcomm (channel access, Co-RTWT, seamless roaming, ELR), Huawei (Co-BF/Co-SR, ELR naming, cross-BSS CSI), LG (DRU PHY, target AP MLD selection), Cisco (DBE part 4, L4S), Samsung (downlink data forwarding, P2P TWT), Intel (CIDs across multiple sub-clauses), Mediatek (37.13.3 LB291 CRs). The L4S liaison from ARC SC to TGbn (DCN 755) is the most consequential cross-group thread of the week — it brings the IETF L4S congestion-control framework onto the TGbn radar as a downstream concern for the Wi-Fi 8 latency story.

## Summary (ZH)

TGbn（Wi-Fi 8 / UHR）2026 年 5 月 Antwerp 期中会议主体工作分两段：5 月 6-8 日的 MAC 临时组会，以及 5 月 10-11 日的 WG 会议。主导活动是 **LB291 评论解决** —— 针对 Draft 1.0 的评论投票已开启，目前已处理约 60-65% 的评论池，目标是在 **2026 年 7 月发布 Draft 2.0**（从原计划的 5 月推迟，仍按 2028 年 5 月发布全标准的节奏推进）。Antwerp 上传到 Mentor 的内容覆盖了几乎所有活跃的 Co- 机制，加上三项结构性新增议题：跨 BSS CSI 内存管理、P2P TWT 协议修改、以及「跨 BSS CSI 内存管理」—— 后者暗示在 AP 规模上 MAPC 类协调存在一个不显眼但真实的成本面。

5 月 6-11 日的体量异常高 —— 该组并行推进了 11 个 LB291 CR 集群（Co-RTWT、Co-TDMA、Co-BF/Co-SR、NPCA、DBE、P-EDCA、DRU、ELR、MLO、漫游、MIB），多数为已上传文稿的第 N≥3 修订。贡献者分布仍是熟悉的头部公司：Qualcomm（信道接入、Co-RTWT、无缝漫游、ELR）、Huawei（Co-BF/Co-SR、ELR 命名、跨 BSS CSI）、LG（DRU PHY、目标 AP MLD 选择）、Cisco（DBE part 4、L4S）、Samsung（下行数据转发、P2P TWT）、Intel（多个子条款的 CID）、Mediatek（37.13.3 LB291 CR）。ARC SC 给 TGbn 的 L4S 联络函（DCN 755）是本周最具影响的跨组线索 —— 它把 IETF L4S 拥塞控制框架带到了 TGbn 视野中，作为 Wi-Fi 8 时延叙事的下游关注点。

## Key technical points (EN)

- **DCN 11-26-1023r0 · TGbn** — lb291-cr-phy-service-interface-misc. Bo Sun (Sanechips). PHY service interface clean-up cluster.
- **DCN 11-26-1003r0 · TGbn** — *(none — was TGbt; ignore)*.
- **DCN 11-26-991/990/989/988/987 · TGbn** — LB291 CR for CIDs in subclause 38.3.14.4 (Parts I-IV) + 38.3.2.3 part III. Bo Gong (Huawei). PHY-layer CR sweep.
- **DCN 11-26-983 · TGbn** — CR for Naming ELR Rates. Junghoon Suh (Huawei).
- **DCN 11-26-982 · TGbn** — Memory Management for Cross-BSS CSI. Junghoon Suh (Huawei). **Structurally new** — addresses storage/aging of CSI shared across coordinated APs.
- **DCN 11-26-971 · TGbn** — CR to Modify the existing P2P TWT agreement. Taeyoung Ha (Samsung). **Structurally new** — P2P TWT semantics in the UHR draft.
- **DCN 11-26-970 · TGbn** — LB291 CR for MIB part 2. Yan Li (ZTE).
- **DCN 11-26-272r4 · TGbn** — LB291 CR for Co-RTWT Part 6. Giovanni Chisci (Qualcomm). Co-RTWT thread alive across the week.
- **DCN 11-26-351r1 · TGbn** — LB291 CR for Co-TDMA CIDs Part 6. Sanket Kalamkar (Qualcomm).
- **DCN 11-26-289r2 · TGbn** — LB291 CR for Multiple Co-BF/Co-SR transmissions. Mahmoud Hasabelnaby (Huawei).
- **DCN 11-26-285r3 · TGbn** — Co-BF Terminology. Mahmoud Kamel (InterDigital).
- **DCN 11-26-349r3 · TGbn** — LB291-CR-MAC-NPCA-BSSMEDSTATE. Matthew Fischer (Broadcom).
- **DCN 11-26-342r3 · TGbn** — LB291 CR for P-EDCA. Ning Gao (Lenovo).
- **DCN 11-26-280r2 · TGbn** — LB291-MAC-CR for Misc_ELR. Alfred Asterjadhi (Qualcomm).
- **DCN 11-26-378r13 / 379r4 · TGbn** — LB291 CR for Seamless roaming Parts 3-4. Duncan Ho (Qualcomm). Roaming thread heavily revised.
- **DCN 11-26-427r1 · TGbn** — LB291 CR for L4S CIDs. Binita Gupta (Cisco). Companion to the ARC-SC liaison.
- **DCN 11-26-16r17 · TGbn** — LB291 CR for DBE CIDs part 4. Binita Gupta (Cisco). 17th revision — a long-running thread.

## Key technical points (ZH)

- **DCN 11-26-1023r0 · TGbn** —— LB291 PHY 服务接口杂项 CR。Bo Sun（Sanechips）。
- **DCN 11-26-991/990/989/988/987 · TGbn** —— 38.3.14.4 各部分（I-IV）+ 38.3.2.3 part III 的 LB291 CR。Bo Gong（Huawei）。PHY 层 CR 集中清理。
- **DCN 11-26-983 · TGbn** —— ELR 速率命名 CR。Junghoon Suh（Huawei）。
- **DCN 11-26-982 · TGbn** —— 跨 BSS CSI 的内存管理。Junghoon Suh（Huawei）。**结构性新增**——处理协调 AP 之间共享 CSI 的存储与老化。
- **DCN 11-26-971 · TGbn** —— 修改现有 P2P TWT 协议的 CR。Taeyoung Ha（三星）。**结构性新增**——UHR 草案中的 P2P TWT 语义。
- **DCN 11-26-970 · TGbn** —— LB291 MIB CR part 2。Yan Li（ZTE）。
- **DCN 11-26-272r4 · TGbn** —— Co-RTWT Part 6 LB291 CR。Giovanni Chisci（Qualcomm）。Co-RTWT 线索本周持续活跃。
- **DCN 11-26-351r1 · TGbn** —— Co-TDMA CIDs Part 6。Sanket Kalamkar（Qualcomm）。
- **DCN 11-26-289r2 · TGbn** —— 多次 Co-BF/Co-SR 传输 LB291 CR。Mahmoud Hasabelnaby（Huawei）。
- **DCN 11-26-285r3 · TGbn** —— Co-BF 术语。Mahmoud Kamel（InterDigital）。
- **DCN 11-26-349r3 · TGbn** —— LB291-CR-MAC-NPCA-BSSMEDSTATE。Matthew Fischer（Broadcom）。
- **DCN 11-26-342r3 · TGbn** —— P-EDCA LB291 CR。Ning Gao（Lenovo）。
- **DCN 11-26-280r2 · TGbn** —— Misc_ELR LB291 MAC CR。Alfred Asterjadhi（Qualcomm）。
- **DCN 11-26-378r13 / 379r4 · TGbn** —— 无缝漫游 LB291 CR Part 3-4。Duncan Ho（Qualcomm）。漫游线索本周大改。
- **DCN 11-26-427r1 · TGbn** —— L4S CIDs LB291 CR。Binita Gupta（Cisco）。配合 ARC-SC 联络函。
- **DCN 11-26-16r17 · TGbn** —— DBE CIDs part 4 LB291 CR。Binita Gupta（Cisco）。第 17 修订 —— 长跑线索。

## Why it matters / what's new (EN)

This week confirms TGbn is on the revised D2.0-in-July timeline rather than slipping further: 11 parallel CR clusters with multi-revision iterations is the expected pace. The two structurally new items — **Memory Management for Cross-BSS CSI** and the **P2P TWT modification** — are the contributions worth tracking for a possible dedicated entry on next run: the cross-BSS CSI memory question is the first time the storage cost of MAPC-class coordination has shown up as its own CR thread, and the L4S liaison (ARC SC → TGbn, DCN 755) opens a new IETF-track interaction surface for the Wi-Fi 8 latency story. The L4S thread also connects directly to the standing `2026-05-03_nsdi-law-802-11-low-latency-link-layer` work — academic-side WiFi-LLL designs and IETF L4S converging on TGbn is a structural sign.

## Why it matters / what's new (ZH)

本周确认 TGbn 仍在 D2.0-on-July 修订时间表上推进，没有进一步滑期：11 个并行 CR 集群多次修订是预期节奏。两项结构性新增 —— **跨 BSS CSI 内存管理** 与 **P2P TWT 修改** —— 是值得在下次运行中考虑独立深度条目的贡献：跨 BSS CSI 内存问题是 MAPC 级协调的存储成本首次作为独立 CR 线索浮出，而 L4S 联络函（ARC SC → TGbn，DCN 755）则为 Wi-Fi 8 时延叙事打开了与 IETF 轨道的新交互面。L4S 线索也直接联通到既有的 `2026-05-03_nsdi-law-802-11-low-latency-link-layer` 工作 —— 学界的 WiFi-LLL 设计与 IETF L4S 在 TGbn 上汇合，是结构性信号。
