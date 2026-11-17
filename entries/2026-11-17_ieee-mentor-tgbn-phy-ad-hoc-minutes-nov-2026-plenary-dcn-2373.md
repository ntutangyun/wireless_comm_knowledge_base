---
id: 2026-11-17_ieee-mentor-tgbn-phy-ad-hoc-minutes-nov-2026-plenary-dcn-2373
date_published: 2026-11-16
date_found: 2026-11-17
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn: PHY ad-hoc minutes for the November 2026 plenary — LB296 PHY comment resolutions, deferrals and Co-BF/UEQM discussion (DCN 11-26-2373r0, MaxLinear)"
title_zh: "IEEE 802.11 TGbn：2026 年 11 月全会 PHY ad-hoc 会议纪要——LB296 PHY 意见处理、延期项与 Co-BF/UEQM 讨论（DCN 11-26-2373r0，MaxLinear）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2373&is_year=2026"
source_quality: full
topics: [802.11bn, UHR, LB296, comment resolution, UHR-SIG, ELR, DRU, Co-BF, Co-SR, UEQM]
topic_primary: wifi8-uhr
topics_secondary: [mapc-cosr]
novelty_score: 2
---

## Summary (EN)

DCN 11-26-2373r0, uploaded 2026-11-16 by Sigurd Schelstraete (MaxLinear), contains the TGbn PHY ad-hoc minutes for four sessions held during the November 2026 plenary: Monday AM1 and PM2 (9 November), Tuesday AM2 (10 November) and Wednesday AM2 (11 November). The chair was Dongguk Lim (LGE), with co-chairs Sigurd Schelstraete (MaxLinear) and Tianyu Wu (Apple). The sessions worked through LB296 comment-resolution (CR) documents against the PHY clause 38.3, each ending in straw polls on lists of CIDs.

The minutes record straw polls with no objection on, among others, CRs for 38.3.7 (7 CIDs), ELR introduction and pre-correction (8 CIDs, with CID 17465 deferred because it includes a technical change), RU/MRU restrictions for 20 MHz (CIDs 14105 and 14106, with CIDs 19804 and 20708 deferred because the PHY does not know the DSO subband or NPCA primary channel), 38.3.21 Coordinated Beamforming (9 CIDs, CID 18392 deferred), UHR-SIG 38.3.15.9.5 (48 CIDs, one CR), timing-related parameters (12 CIDs, with CID 16111 re-discussed on 10 November so parameters are defined before use in Table 38-19), ELR-MARK symbols (14 CIDs) and LDPC (4 CIDs). A UHR-MCS parameter correction (26/2204r0) was incorporated without objection.

On 10 November the 11bn D2.0 TxRx-procedure CR (26/2221) was resolved with 50 CIDs in a straw poll and 13 CIDs deferred, after discussion on whether to keep NPCA operating-channel wording in the PHY or leave it to the MAC mapping to PHYCONFIG parameters, and on "ELR capable" versus "ELR enabled". The Co-SR PHY CR (26/2275) resolved 16 CIDs with CIDs 17317 and 18455 deferred. A CR proposing to allow UEQM for Co-BF/Co-SR (26/2261, CID 20009, Safi Hoque) drew objections in the minutes that both are new features and the change was too late and complex; no straw poll was run.

## Summary (ZH)

DCN 11-26-2373r0 由 Sigurd Schelstraete（MaxLinear）于 2026-11-16 上传，内容为 2026 年 11 月全会期间 TGbn PHY ad-hoc 四个时段的会议纪要：周一 AM1 与 PM2（11 月 9 日）、周二 AM2（11 月 10 日）、周三 AM2（11 月 11 日）。主席为 Dongguk Lim（LGE），副主席为 Sigurd Schelstraete（MaxLinear）与 Tianyu Wu（Apple）。各时段围绕 PHY 条款 38.3 的 LB296 意见处理（CR）文档展开，每份文档以针对 CID 列表的 Straw Poll 收尾。

纪要记录了多项无异议通过的 Straw Poll，包括：38.3.7 的 CR（7 个 CID）、ELR 引入与预校正（8 个 CID，CID 17465 因包含技术性改动而延期）、20 MHz 的 RU/MRU 限制（CID 14105 与 14106，CID 19804 与 20708 因 PHY 不了解 DSO 子带或 NPCA 主信道而延期）、38.3.21 协调波束成形（9 个 CID，CID 18392 延期）、UHR-SIG 38.3.15.9.5（48 个 CID，一份 CR）、时间相关参数（12 个 CID，CID 16111 于 11 月 10 日再次讨论，使参数在 Table 38-19 中先定义后使用）、ELR-MARK 符号（14 个 CID）与 LDPC（4 个 CID）。UHR-MCS 参数修正（26/2204r0）无异议并入。

11 月 10 日，11bn D2.0 收发流程 CR（26/2221）在 Straw Poll 中处理 50 个 CID，13 个 CID 延期，此前讨论了 PHY 中是否保留 NPCA 工作信道表述、还是交由 MAC 映射到 PHYCONFIG 参数，以及"ELR capable"与"ELR enabled"的用词。Co-SR PHY CR（26/2275）处理 16 个 CID，CID 17317 与 18455 延期。一份提议允许 Co-BF/Co-SR 使用 UEQM 的 CR（26/2261，CID 20009，Safi Hoque）在纪要中遭到反对意见：两者都是新特性，改动过晚且过于复杂；未进行 Straw Poll。

## Key technical points (EN)

- **Sessions covered:** four PHY ad-hoc slots, 9-11 November 2026; agendas 11-26/1917r1, r3, r5 and r9.
- **Resolved by straw poll with no objection:** 38.3.7 (7 CIDs), ELR intro/pre-correction (8), 20 MHz RU/MRU (2), 38.3.21 Co-BF (9), DRU part 2 (3 CIDs; CID 18085 deferred, then DRU part 3 CID 18085 taken up on 11 November), 38.3.16.4 (1), 38.3.12 (7), UHR-SIG 38.3.15.9.5 (48), UHR-SIG 38.3.15.9.1/2 (2), timing parameters (12 + CID 16111), ELR-MARK (14), LDPC (4), 38.3 editorial (5) and CID 15001 (1), CIDs 16464/19985 (2), CID 13996 (1), 38.3.19 (11), 38.3.15 (14). SP#4 (CID 18085, 26/2319r2) and SP#5 (CID 17465, 26/2334r0) were run on 11 November, but the minutes record no result for either.
- **Deferred items:** CIDs 17465 (SP run on 26/2334; result not recorded), 19804, 20708, 18392, 17317 and 18455, plus 13 CIDs from 26/2221 (the minutes list 13168, 13819, 13824, 14349, 14350, 15160, 18488, 18825, 18829, 18830, 19290, 19294 and 19297; 13168 also appears in the same document's resolved list).
- **Discussion points:** whether PHY text should mention NPCA/DSO terms; "ELR capable" vs "ELR enabled"; GI,LTF = GI,Data and GI,ELR-SIG wording; UEQM for Co-BF considered too late and complex.

## Key technical points (ZH)

- **涵盖的时段：** 2026 年 11 月 9-11 日四个 PHY ad-hoc 时段；议程为 11-26/1917r1、r3、r5、r9。
- **无异议 Straw Poll 通过：** 38.3.7（7 个 CID）、ELR 引入/预校正（8）、20 MHz RU/MRU（2）、38.3.21 Co-BF（9）、DRU 第 2 部分（3 个 CID；CID 18085 延期，11 月 11 日在 DRU 第 3 部分中审议）、38.3.16.4（1）、38.3.12（7）、UHR-SIG 38.3.15.9.5（48）、UHR-SIG 38.3.15.9.1/2（2）、时间参数（12 + CID 16111）、ELR-MARK（14）、LDPC（4）、38.3 编辑性（5）与 CID 15001（1）、CID 16464/19985（2）、CID 13996（1）、38.3.19（11）、38.3.15（14）。11 月 11 日对 CID 18085（26/2319r2）与 CID 17465（26/2334r0）进行了 SP#4 与 SP#5，但纪要未记录二者结果。
- **延期项：** CID 17465（后经 26/2334 进行 SP，结果未记录）、19804、20708、18392、17317 与 18455，另有 26/2221 中的 13 个 CID（纪要列出 13168、13819、13824、14349、14350、15160、18488、18825、18829、18830、19290、19294 与 19297；13168 同时也出现在同一文档的已解决列表中）。
- **讨论要点：** PHY 文本是否提及 NPCA/DSO 术语；"ELR capable"与"ELR enabled"；GI,LTF = GI,Data 与 GI,ELR-SIG 的措辞；UEQM 用于 Co-BF 被认为过晚且过于复杂。

## Why it matters / what's new (EN)

These minutes show the PHY side of LB296 resolution during the November 2026 session, complementing the session-report and closing-report entries already in the KB (2026-11-16_ieee-mentor-wg-november-2026-session-report-motions-revmf-sa-ballot), which report that TGbn resolved about 800 of the 8,045 LB296 comments across the session. The minutes record straw polls inside the ad hoc; they do not themselves state final WG adoption.

## Why it matters / what's new (ZH)

这些纪要展示了 2026 年 11 月会议期间 LB296 意见处理的 PHY 侧情况，可与知识库中已有的会议报告与闭幕报告条目（2026-11-16_ieee-mentor-wg-november-2026-session-report-motions-revmf-sa-ballot）互补，后者报告 TGbn 在本次会议中处理了 LB296 共 8,045 条意见中的约 800 条。纪要记录的是 ad-hoc 内的 Straw Poll，本身并未表明 WG 的最终采纳。
