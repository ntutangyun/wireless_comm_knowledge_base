---
id: 2026-11-06_ieee-mentor-802-15-tg4ab-digest
date_published: 2026-11-05
date_found: 2026-11-06
technology: uwb
type: ieee-document
title_en: "IEEE 802.15 TG4ab Mentor digest — 2026-11-06 (SA-ballot recirculation: SOR message control 2 fields, rogue security comments Rogue-22 reassignment, compact-frame security outside the ranging block)"
title_zh: "IEEE 802.15 TG4ab Mentor 当日摘要 — 2026-11-06（SA 投票再循环：SOR 消息控制值 2 字段、Rogue-22 归属调整、测距块外紧凑帧安全）"
url: "https://mentor.ieee.org/802.15/documents?is_dcn=460&is_year=2026"
source_quality: full
topics: [TG4ab, 802.15.4ab, SA ballot recirculation, compact frames, Start of Ranging, hyper block, replay protection]
topic_primary: uwb-ranging
topics_secondary: [uwb-security]
novelty_score: 2
---

## Summary (EN)

Four substantive TG4ab revisions were uploaded on 5 November 2026 (ET), all comment-resolution documents against P802.15.4ab D05 that carry the standard notice that they do not represent the agreed views of the 802.15 WG or TG4ab. IG FG UWB had no new uploads (latest remains DCN 15-26-0468r0, 4 November).

DCN 15-26-0460r2, "Resolution of SA ballot comments R1-317" (Taeyoung Ha, Jinho Choi, Samsung; document date 6 November), keeps the proposed disposition Revised for the question of whether MMS ranging can be set up with Start of Ranging (SOR) message control value 2. Compared with the revision covered in the 3 November digest (r0), the Message Content field of that SOR frame now also lists Management PHY Configuration and UWB Channel (both 1 octet), next to Control Phase Time Offset, NB Channel Seed, NB Full Channel Map, the allocated relative block, round and slot indices, and the Block Description List. New text in 10.39.11.3.4 states that with message control two the ranging operates in hyper block mode and the controller should send the HBS IE and ARC IE from the indicated time offset; the UWB Channel field is defined as the channel used for the RCM in hyper block mode (0 to 15 per Table 16-27, 16 to 113 extended numbering per 16.4.1.2). Missing configuration is still delivered in a Poll compact frame (message control 1 one-to-one, 7 or 8 one-to-many).

DCN 15-26-0447r2, "SA Ballot Recirc - Proposed Resolutions for rogue security comments" (Rojan Chitrakar, Lei Huang, Huawei), carries a revision history that says Rev 2 rephrases the Rogue-04 and Rogue-30 text, adds Rogue-22 (transferred from Billy Verso) and removes Rogue-32 (transferred to Verso). Rogue-22 (clause 9.3.2.4, "or reception") is now proposed as Revised rather than Rejected: the paragraph becomes a note that after transmitting or receiving a Secured Compact frame with a given block, round, slot and key combination, further secured compact frame transmission or reception in the current slot makes the outgoing or incoming procedure fail with COUNTER_ERROR (the same resolution as Rogue-21). Rogue-04 text in 6.6.2 now separates frames other than Compact frames (9.2.4 / 9.2.5) from Secured Compact frames (9.2.13), with notes in 9.2.4 and 9.2.5. Rogue-30 is reworded: if Poll compact frames carry block and round indices for block synchronization, security level 1, 2 or 3 (data authenticity) should be used, with a note that the indices are needed to unsecure the frames. Not recorded in the revision history: Rogue-23 moves from Accepted to Revised, renaming secCompactFrameSecurityEnabled to macCompactFrameSecurityEnabled throughout the draft.

DCN 15-26-0462r1, "Resolution of selected rogue comments - Group II" (Billy Verso, Skyworks; 5 November), now contains only Rogue-18 and Rogue-24 (proposed Rejected; the attributes are needed for security and not used elsewhere); the Rogue-22 section present in r0 was removed, consistent with its move to 447r2. The discussion text for these two comments was reworded.

DCN 15-26-0448r1, "SA Ballot Recirc - Proposed Resolutions for Security - Initialization & Setup" (Rojan Chitrakar, Lei Huang, Huawei), answers R1-282 (Rolfe) on the lack of security for compact frames in the MMS initialization procedure with a proposal to secure compact frames used outside the ranging block structure: a 3-octet Lower Frame Counter in the Security Control field forms the lower part of the nonce, the Block Index is set to 0xffff (which then cannot be used for ranging), and two per-key counters, secOutgoingCompactLowerFrameCounter and secIncomingCompactLowerFrameCounter, handle replay checks. The r1 change recorded in the document is added discussion references: the risk is highlighted in 15-26/639r0 (Wenzheng), and earlier ballots carried similar comments (317 on D1.0, 335, 336 and 531 on D2.0, I-326, I-381).

Housekeeping: the consolidated comments workbook advanced to DCN 380r15 (5 November, Billy Verso), and the agenda details (427r12) and meeting slides (431r8) were bumped; these are folded into this note without separate summaries.

## Summary (ZH)

2026 年 11 月 5 日（美东时间）上传了 4 份实质性 TG4ab 修订文档，均为针对 P802.15.4ab D05 的意见处理文档，并声明不代表 802.15 工作组或 TG4ab 的一致意见。IG FG UWB 无新上传（最新仍为 11 月 4 日的 DCN 15-26-0468r0）。

DCN 15-26-0460r2《Resolution of SA ballot comments R1-317》（三星 Taeyoung Ha、Jinho Choi；文档日期 11 月 6 日）对“能否用 Start of Ranging（SOR）消息控制值 2 建立 MMS 测距”的问题维持拟定处理 Revised。相比 11 月 3 日摘要所涵盖的 r0，该 SOR 帧的 Message Content 字段除 Control Phase Time Offset、NB Channel Seed、NB Full Channel Map、分配的相对块/轮次/时隙索引和块描述列表外，新增 Management PHY Configuration 与 UWB Channel（各 1 个八位组）。10.39.11.3.4 新增文字：消息控制值为 2 时测距运行于超块模式，控制方应从所指示的时间偏移起发送 HBS IE 与 ARC IE；UWB Channel 字段指定超块模式下 RCM 所用信道（0 至 15 对应表 16-27，16 至 113 对应 16.4.1.2 的扩展编号）。缺失的配置仍通过 Poll 紧凑帧补充（消息控制 1 为一对一，7 或 8 为一对多）。

DCN 15-26-0447r2《SA Ballot Recirc - Proposed Resolutions for rogue security comments》（华为 Rojan Chitrakar、Lei Huang）的修订记录写明：Rev 2 重写 Rogue-04 与 Rogue-30 文字，加入由 Billy Verso 转来的 Rogue-22，并移除转给 Verso 的 Rogue-32。Rogue-22（9.3.2.4，“or reception”）的拟定处理由 Rejected 改为 Revised：该段改为说明，使用某一 block、round、slot 与密钥组合发送或接收受保护紧凑帧后，在当前时隙内再次发送或接收会使发送或接收安全流程以 COUNTER_ERROR 失败（与 Rogue-21 相同的处理）。6.6.2 中 Rogue-04 的文字现将非紧凑帧（9.2.4 / 9.2.5）与受保护紧凑帧（9.2.13）分开，并在 9.2.4、9.2.5 增加说明。Rogue-30 改写为：若 Poll 紧凑帧携带用于块同步的块索引与轮次索引，应使用安全等级 1、2 或 3（数据认证），并说明索引是解保护所必需的。修订记录未列出的变化：Rogue-23 由 Accepted 改为 Revised，在全文中将 secCompactFrameSecurityEnabled 更名为 macCompactFrameSecurityEnabled。

DCN 15-26-0462r1《Resolution of selected rogue comments - Group II》（Skyworks Billy Verso；11 月 5 日）现仅保留 Rogue-18 与 Rogue-24（拟定 Rejected，理由为这些属性为安全所需且不用于其他地方）；r0 中的 Rogue-22 部分已移除，与其转入 447r2 一致。这两条意见的讨论文字有所改写。

DCN 15-26-0448r1《SA Ballot Recirc - Proposed Resolutions for Security - Initialization & Setup》（华为 Rojan Chitrakar、Lei Huang）针对 Rolfe 的 R1-282（MMS 初始化流程中的紧凑帧缺少安全保护），提出为测距块结构之外使用的紧凑帧提供保护：Security Control 字段携带 3 个八位组的 Lower Frame Counter，作为 nonce 的低位部分；Block Index 设为 0xffff（因此不能用于测距）；并用 secOutgoingCompactLowerFrameCounter 与 secIncomingCompactLowerFrameCounter 两个每密钥计数器做重放检查。文档记录的 r1 变化是补充讨论中的引用：该风险见 15-26/639r0（Wenzheng），此前多轮投票也有类似意见（D1.0 的 317，D2.0 的 335、336、531，以及 I-326、I-381）。

事务性文件：意见汇总工作簿更新至 DCN 380r15（11 月 5 日，Billy Verso），日程详情（427r12）与会议幻灯片（431r8）同步更新，本期仅在此说明，不另作摘要。

## Key technical points (EN)

- **DCN 15-26-0460r2 · TG4ab** — R1-317 (SOR message control 2, MMS configuration): Management PHY Configuration and UWB Channel fields added to the SOR Message Content; hyper block mode text in 10.39.11.3.4. Samsung (Ha, Choi). [document](https://mentor.ieee.org/802.15/documents?is_dcn=460&is_year=2026)
- **DCN 15-26-0447r2 · TG4ab** — Rogue-22 now Revised (COUNTER_ERROR note for repeated secured compact frame in a slot); Rogue-04 and Rogue-30 reworded; Rogue-23 now Revised (rename to macCompactFrameSecurityEnabled); Rogue-32 moved out. Huawei (Chitrakar, Huang). [document](https://mentor.ieee.org/802.15/documents?is_dcn=447&is_year=2026)
- **DCN 15-26-0462r1 · TG4ab** — Rogue-18 / Rogue-24 only, proposed Rejected; Rogue-22 section removed. Skyworks (Verso). [document](https://mentor.ieee.org/802.15/documents?is_dcn=462&is_year=2026)
- **DCN 15-26-0448r1 · TG4ab** — R1-282: secured compact frames outside the ranging block (3-octet Lower Frame Counter, Block Index 0xffff, two per-key counters); r1 adds discussion references. Huawei (Chitrakar, Huang). [document](https://mentor.ieee.org/802.15/documents?is_dcn=448&is_year=2026)
- **DCN 15-26-0380r15 · TG4ab** — consolidated comments workbook, revision 15 (spreadsheet). [document](https://mentor.ieee.org/802.15/documents?is_dcn=380&is_year=2026)

## Key technical points (ZH)

- **DCN 15-26-0460r2 · TG4ab** — R1-317（SOR 消息控制值 2 与 MMS 配置）：SOR Message Content 新增 Management PHY Configuration 与 UWB Channel 字段；10.39.11.3.4 增加超块模式文字。三星（Ha、Choi）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=460&is_year=2026)
- **DCN 15-26-0447r2 · TG4ab** — Rogue-22 改为 Revised（同一时隙内重复的受保护紧凑帧触发 COUNTER_ERROR 的说明）；Rogue-04、Rogue-30 改写；Rogue-23 改为 Revised（更名为 macCompactFrameSecurityEnabled）；Rogue-32 转出。华为（Chitrakar、Huang）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=447&is_year=2026)
- **DCN 15-26-0462r1 · TG4ab** — 仅保留 Rogue-18 / Rogue-24，拟定 Rejected；Rogue-22 部分移除。Skyworks（Verso）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=462&is_year=2026)
- **DCN 15-26-0448r1 · TG4ab** — R1-282：测距块外紧凑帧的保护（3 八位组 Lower Frame Counter、Block Index 0xffff、两个每密钥计数器）；r1 补充讨论引用。华为（Chitrakar、Huang）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=448&is_year=2026)
- **DCN 15-26-0380r15 · TG4ab** — 意见汇总工作簿第 15 版（电子表格）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=380&is_year=2026)

## Why it matters / what's new (EN)

The revisions show how the SA-ballot recirculation comments on compact-frame setup and replay protection are being reshuffled between contributors: a comment moves between the Huawei and Skyworks documents, its proposed disposition changes from Rejected to Revised, and the SOR message-control-2 text gains channel and PHY fields. All dispositions are proposals by individual contributors, not adopted resolutions, and may change before any motion.

## Why it matters / what's new (ZH)

这些修订反映出围绕紧凑帧建立流程与重放保护的 SA 投票再循环意见正在贡献方之间重新分配：同一条意见在华为与 Skyworks 的文档之间转移，拟定处理由 Rejected 变为 Revised，SOR 消息控制值 2 的文字新增信道与 PHY 字段。所有处理均为个别贡献方的提案而非已通过的决议，动议前可能变化。

## Images

None.
