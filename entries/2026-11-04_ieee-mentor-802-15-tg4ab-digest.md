---
id: 2026-11-04_ieee-mentor-802-15-tg4ab-digest
date_published: 2026-11-03
date_found: 2026-11-04
technology: uwb
type: ieee-document
title_en: "IEEE 802.15 TG4ab Mentor digest — 2026-11-04 (SA-ballot recirculation: rogue security comments Group II, compact-frame index PIB naming and reception rule)"
title_zh: "IEEE 802.15 TG4ab Mentor 当日摘要 — 2026-11-04（SA 投票再循环：Rogue 意见 Group II，紧凑帧索引 PIB 命名与接收规则）"
url: "https://mentor.ieee.org/802.15/documents?is_dcn=462&is_year=2026"
source_quality: full
topics: [TG4ab, 802.15.4ab, SA ballot recirculation, compact frames, security PIB, replay protection]
topic_primary: uwb-security
topics_secondary: [uwb-ranging]
novelty_score: 2
---

## Summary (EN)

One new substantive TG4ab document was uploaded on 3 November 2026 (ET): DCN 15-26-0462r0, "Resolution of selected rogue comments - Group II" (Billy Verso, Skyworks; document date 3 November). It proposes dispositions for three 'Rogue' comments from Tero Kivinen on P802.15.4ab D05 and carries the standard notice that it does not represent the agreed views of the 802.15 WG or TG4ab. IG FG UWB had no new uploads (latest remains DCN 15-26-0445r0, 18 October).

Rogue-18 and Rogue-24 (clause 9.3.2.4, page 34, and 9.5.1, page 35) argue that secCompactFrameBlockIndex, secCompactFrameRoundIndex and secCompactFrameSlotIndex are not security values and should be renamed with a "mac" prefix and moved to the ranging PIB clauses (10.32.x or 10.39.x), with a new secCompactFrameCounter added to Table 3 to hold the largest frame counter seen per key and the security processing rules updated to verify and update it. The document answers that these attributes are used only for compact-frame security, that the MAC does not itself count blocks, rounds or slots (the ranging protocol above the MAC sets them, which it describes as the security-architecture choice TG4ab made for compact frames), and that their current naming and table are appropriate. Proposed disposition: Rejected, with the detail "These parameters are needed for security and are not used elsewhere."

Rogue-22 (9.3.2.4, page 34, line 21) says reception of compact frames is not a problem, only the same device transmitting several frames in one slot, because each nonce contains the sender's extended address; it asks to remove "or reception" from the text, noting that the commenter's proposed counter-storage scheme stores one frame counter per key and so does not allow multiple receptions in one slot. The document finds no real problem in keeping the paragraph, regards it and the counter scheme as possibly complementary, and notes it may save power by avoiding a second TX or RX in the same slot. Proposed disposition: Rejected, "The group sees some merit in retaining this requirement as stated."

Housekeeping: the consolidated comments spreadsheet was bumped to DCN 380r13 (3 November, Billy Verso); documents 365r3, 417r1, 447r1 and 460r0 were covered in the previous digest.

## Summary (ZH)

2026 年 11 月 3 日（美东时间）新上传 1 份实质性 TG4ab 文档：DCN 15-26-0462r0《Resolution of selected rogue comments - Group II》（Skyworks Billy Verso；文档日期 11 月 3 日）。该文档针对 Tero Kivinen 就 P802.15.4ab D05 提出的三条 'Rogue' 意见给出拟定处理，并声明不代表 802.15 工作组或 TG4ab 的一致意见。IG FG UWB 无新上传（最新仍为 10 月 18 日的 DCN 15-26-0445r0）。

Rogue-18 与 Rogue-24（9.3.2.4 第 34 页、9.5.1 第 35 页）认为 secCompactFrameBlockIndex、secCompactFrameRoundIndex、secCompactFrameSlotIndex 并非安全参数，应改用 "mac" 前缀并移至测距相关 PIB 条款（10.32.x 或 10.39.x），同时在表 3 中新增 secCompactFrameCounter 保存每个密钥见过的最大帧计数器，并更新安全处理规则以校验和更新。文档回应：这些属性仅用于紧凑帧安全；MAC 本身并不对块、轮次或时隙计数，而是由 MAC 之上的测距协议设置，文档称这是 TG4ab 为紧凑帧所作的安全架构选择；现有命名与所在表格合适。拟定处理：Rejected，理由为“这些参数为安全所需，且不用于其他地方”。

Rogue-22（9.3.2.4 第 34 页第 21 行）认为紧凑帧的接收不是问题，只有同一设备在同一时隙发送多帧才有问题，因为每个 nonce 都含发送方扩展地址；要求删除“or reception”，并指出其提出的计数器存储方案每个密钥只存一个帧计数器，因此不允许同一时隙多次接收。文档认为保留该段落并无实际问题，该段与计数器方案可视为互补，并且避免同一时隙再次收发还可能省电。拟定处理：Rejected，“工作组认为保留该要求有一定价值”。

事务性文件：意见汇总表更新至 DCN 380r13（11 月 3 日，Billy Verso）；365r3、417r1、447r1、460r0 已在上一期摘要中涵盖。

## Key technical points (EN)

- **DCN 15-26-0462r0 · TG4ab** — Rogue-18 / Rogue-24 (9.3.2.4, 9.5.1): proposal to rename secCompactFrame{Block,Round,Slot}Index to mac-prefixed PIB attributes and add secCompactFrameCounter; proposed Rejected because the attributes are security-only and the ranging protocol above the MAC sets them. Skyworks (Verso). [document](https://mentor.ieee.org/802.15/documents?is_dcn=462&is_year=2026)
- **DCN 15-26-0462r0 · TG4ab** — Rogue-22 (9.3.2.4): request to drop "or reception" from the one-frame-per-slot paragraph; proposed Rejected, the group sees merit in retaining it and notes a possible power saving. [document](https://mentor.ieee.org/802.15/documents?is_dcn=462&is_year=2026)
- **DCN 15-26-0380r13 · TG4ab** — consolidated comments workbook, revision 13 (spreadsheet). [document](https://mentor.ieee.org/802.15/documents?is_dcn=380&is_year=2026)

## Key technical points (ZH)

- **DCN 15-26-0462r0 · TG4ab** — Rogue-18 / Rogue-24（9.3.2.4、9.5.1）：建议将 secCompactFrame{Block,Round,Slot}Index 改为 mac 前缀的 PIB 属性并新增 secCompactFrameCounter；拟定 Rejected，理由是这些属性仅用于安全，且由 MAC 之上的测距协议设置。Skyworks（Verso）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=462&is_year=2026)
- **DCN 15-26-0462r0 · TG4ab** — Rogue-22（9.3.2.4）：要求从“每时隙一帧”段落中删除“or reception”；拟定 Rejected，工作组认为保留有价值，并指出可能省电。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=462&is_year=2026)
- **DCN 15-26-0380r13 · TG4ab** — 意见汇总工作簿第 13 版（电子表格）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=380&is_year=2026)

## Why it matters / what's new (EN)

The document continues the compact-frame replay-protection thread seen in the previous digest (DCN 447r1): here the contributor argues for keeping the existing security-PIB placement and the one-frame-per-slot rule against the commenter's rename and removal requests. Both dispositions are proposals by one contributor, not adopted resolutions, and may change before any motion.

## Why it matters / what's new (ZH)

该文档延续上一期摘要（DCN 447r1）中的紧凑帧重放保护议题：贡献方主张保留现有安全 PIB 的归属和“每时隙一帧”规则，以回应评论者的改名与删除请求。两项处理均为单一贡献方的提案而非已通过的决议，动议前可能变化。

## Images

None.
