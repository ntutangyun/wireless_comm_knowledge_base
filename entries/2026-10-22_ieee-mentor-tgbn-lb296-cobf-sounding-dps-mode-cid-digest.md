---
id: 2026-10-22_ieee-mentor-tgbn-lb296-cobf-sounding-dps-mode-cid-digest
date_published: 2026-10-21
date_found: 2026-10-22
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest — 2026-10-22 (LB296 CRs: Co-BF sounding protocol text in 37.14.1/37.14.2, 41 CIDs; DPS mobile AP LC/HC mode CIDs in 37.17.2.3)"
title_zh: "IEEE 802.11 TGbn Mentor 当日摘要 — 2026-10-22（LB296 CR：37.14.1/37.14.2 的 Co-BF 探测协议文本，41 个 CID；37.17.2.3 中 DPS 移动 AP 的 LC/HC 模式 CID）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bn"
source_quality: full
topics: [TGbn, 802.11bn, LB296, Co-BF, MAPC, sounding, DPS, EMLSR, comment resolution]
topic_primary: mapc-cosr
topics_secondary: [energy-power-save, wifi8-uhr]
novelty_score: 1
---

## Summary (EN)

TGbn has two LB296 comment-resolution documents uploaded on 21 October 2026 that were read in full (both .docx). Both resolve comments on TGbn D2.0.

DCN 11-26-2004r1, "LB296 CRs for subclauses 37.14.1 and 37.14.2" (You-Wei Chen, MediaTek; co-authors Gaius Wee, Panasonic; Mahmoud Kamel, InterDigital; Okan Mutgan, Nokia), resolves 41 CIDs. By the resolutions it records, 33 are Accepted, 3 Revised and 5 Rejected. Most of the document is a single clean-up: about two dozen CIDs point out a stray ")" in "UHR Co-BF) sounding protocol" on page 320 (two occurrences; resolved under CID 13088, with later CIDs marked "same change as CID#13088"), and several others a missing space in "Informationfield" (CID 13090). The substantive items are CID 18219, where the introduction of 37.14.1 is revised to enumerate the two Co-BF sounding sequence types (UHR Co-BF sequential NDP sounding sequence and UHR Co-BF joint NDP sounding sequence) as separate bullet points; CID 18338, where the paragraph defining "UHR Co-BF beamformer/beamformee" is moved ahead of the paragraph that first uses the terms; and CID 15498, which adds a reference to 37.30 (Procedure for operating mode and parameter updates) to the beamformee definition. Four Gaius Wee comments (CIDs 15879, 15880, 15881, 15906) and CID 18395 are Rejected: the resolution text says that 11bn defines sounding only for Co-BF, that "not enabled" and "disabled" have the same meaning, that the group converged on the "UHR Co-BF" terminology, and that the maximum-MPDU-length sentence follows the style of 11be.

DCN 11-26-1768r1, "LB296 subclause 37.17.2.3.3 CIDs" (Liwen Chu, NXP; the abstract lists 17 CIDs, with 15037 and 15038 struck through, and the cover-page title names subclause 37.17.2.3.2 while the listing and filename say 37.17.2.3.3), covers the DPS (dynamic power save) mobile AP frame exchange procedure. Rev 1 updates the resolutions of CIDs 17876, 17069 and 20919. CIDs 15037 and 15038 (TXOP-holder and TWT service period transition rules) and the CID 17061 row (a capitalisation fix) are struck through in both r0 and r1, i.e. withdrawn, leaving 15 live rows. Of those, the CIDs asking for a fallback to conservative parameters while updated DPS Operation Parameters are being retrieved (19099), for PS-Poll or U-APSD trigger frames to replace the ICF (17069), for a way to keep the mobile AP in LC mode when a BSRP NTB Trigger frame carries only DUO feedback (17386, 16668), for an NPCA_Timer transition rule (15036), for clarification that a Duration/ID exceeding the TXOP limit is not allowed (17071), for a mandatory Duration setting (20695) and for skipping the RTS after an ICF exchange (16870) are Rejected, each with a stated discussion (for example, that consensus was not reached in LB291 on a "remain in LC mode" indication when DUO is also enabled). The cross-reference fix from 37.7.5 to 37.7.2 (CIDs 17132, 18884, 18274) is Revised; CID 20919 (rewording "may have the value in the Duration field" to "may set the Duration field") is Accepted. For CIDs 17133, 18885 and 17876 on the EMLSR-based switch-back to LC mode, the document gives two options (an Option 1 rejection that cites the earlier resolution of CID 4332, which replaces the EMLSR Transition Delay with the DPS Transition Delay, and an Option 2 revision); the text read does not show which option the group takes. The Option 2 text for CID 17133 adds a DPS assisting non-AP STA as TXOP holder to the switch-back rule.

## Summary (ZH)

TGbn 有两份于 2026 年 10 月 21 日上传的 LB296 评论处理文档，均已通读（均为 .docx），均针对 TGbn D2.0 的评论。

DCN 11-26-2004r1《LB296 CRs for subclauses 37.14.1 and 37.14.2》（MediaTek 的 You-Wei Chen；共同作者 Panasonic 的 Gaius Wee、InterDigital 的 Mahmoud Kamel、Nokia 的 Okan Mutgan）处理 41 个 CID。按其记录的处理结果，33 个为 Accepted，3 个为 Revised，5 个为 Rejected。文档的大部分是一项统一的文字清理：约二十余个 CID 指出第 320 页（两处）“UHR Co-BF) sounding protocol”中多出一个“)”（在 CID 13088 下处理，后续 CID 标注“与 CID#13088 相同的修改”；两处均在第 320 页），另有若干 CID 指出“Informationfield”缺少空格（CID 13090）。实质性条目包括：CID 18219，将 37.14.1 的引言修改为以分项形式列出两类 Co-BF 探测序列（UHR Co-BF 顺序 NDP 探测序列与 UHR Co-BF 联合 NDP 探测序列）；CID 18338，将定义“UHR Co-BF beamformer/beamformee”的段落移到首次使用这些术语的段落之前；CID 15498，在 beamformee 定义中加入对 37.30（工作模式与参数更新过程）的引用。Gaius Wee 的四条评论（CID 15879、15880、15881、15906）以及 CID 18395 被 Rejected：处理文字称 11bn 仅为 Co-BF 定义探测，“not enabled”与“disabled”含义相同，工作组已就“UHR Co-BF”术语达成一致，最大 MPDU 长度一句沿用 11be 的写法。

DCN 11-26-1768r1《LB296 subclause 37.17.2.3.3 CIDs》（NXP 的 Liwen Chu；摘要列出 17 个 CID，其中 15037、15038 带删除线；封面标题写作子条款 37.17.2.3.2，而列表与文件名为 37.17.2.3.3）涉及 DPS（动态节能）移动 AP 的帧交换过程。Rev 1 更新了 CID 17876、17069、20919 的处理结果。CID 15037、15038（TXOP 持有者及 TWT 服务期的转换规则）以及 CID 17061 一行（大小写修正）在 r0 与 r1 中均带删除线，即已撤回，余下 15 行有效。其中以下 CID 被 Rejected，并各附讨论：在获取更新的 DPS Operation Parameters 期间回退到保守参数（19099）；以 PS-Poll 或 U-APSD 触发帧取代 ICF（17069）；BSRP NTB 触发帧仅承载 DUO 反馈时让移动 AP 保持 LC 模式（17386、16668，讨论称 LB291 中就 DUO 同时启用时的“保持 LC 模式”指示未能达成共识）；NPCA_Timer 转换规则（15036）；明确 Duration/ID 不得超过 TXOP 限制（17071）；强制性的 Duration 设置（20695）；ICF 交换之后跳过 RTS（16870）。将交叉引用从 37.7.5 改为 37.7.2（CID 17132、18884、18274）为 Revised；CID 20919（将“may have the value in the Duration field”改写为“may set the Duration field”）为 Accepted。对于基于 EMLSR 规则切回 LC 模式的 CID 17133、18885、17876，文档给出两个选项（选项 1 为拒绝，并引用此前 CID 4332 的处理结果，即以 DPS Transition Delay 取代 EMLSR Transition Delay；选项 2 为修订）；已读文本未显示工作组采用哪一选项。CID 17133 的选项 2 文本在切回规则中加入了作为 TXOP 持有者的 DPS 辅助非 AP STA。

## Key technical points (EN)

- **DCN 11-26-2004r1 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2004&is_year=2026) LB296 CRs for subclauses 37.14.1 and 37.14.2. You-Wei Chen (MediaTek) et al. 41 CIDs: 33 Accepted, 3 Revised, 5 Rejected.
- Text to be adopted in 37.14.1: the UHR Co-BF sounding protocol follows the EHT TB sounding protocol (35.7) except as specified, provides explicit feedback, and defines two sequence types (sequential NDP and joint NDP); "A UHR Co-BF beamformee is only required to support full bandwidth MU feedback."
- Rejected comments are answered with stated reasons (Co-BF-only sounding in 11bn; agreed terminology; consistency with 11be wording).
- **DCN 11-26-1768r1 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=1768&is_year=2026) LB296 subclause 37.17.2.3.3 CIDs. Liwen Chu (NXP). 17 CIDs listed (15037 and 15038 struck) on the DPS mobile AP frame exchange procedure.
- Procedure text in the document: when ICF Required is 0, the assisting non-AP STA sends an ICF to use the mobile AP's HC mode but may use LC-mode parameters without one; the ICF is a BSRP NTB Trigger frame if the DPS Padding Delay is nonzero (BSRP NTB or RTS if zero); with Mobile AP DPS Static HCM set to 1, the AP remains in HC mode until the next TBTT.
- Most live change requests on DPS transitions (NPCA_Timer, Duration protection, DUO-only BSRP, ICF-then-RTS) are Rejected with a stated discussion; the TXOP-holder and TWT SP requests (15037, 15038) are struck through.

## Key technical points (ZH)

- **DCN 11-26-2004r1 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2004&is_year=2026) LB296 CRs for subclauses 37.14.1 and 37.14.2。You-Wei Chen（MediaTek）等。41 个 CID：33 个 Accepted、3 个 Revised、5 个 Rejected。
- 37.14.1 待采纳文本：UHR Co-BF 探测协议遵循 EHT TB 探测协议（35.7），除另有规定外；提供显式反馈；定义两类序列（顺序 NDP 与联合 NDP）；“UHR Co-BF beamformee 仅需支持全带宽 MU 反馈”。
- 被 Rejected 的评论均附理由（11bn 仅为 Co-BF 定义探测；已达成一致的术语；与 11be 写法一致）。
- **DCN 11-26-1768r1 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1768&is_year=2026) LB296 subclause 37.17.2.3.3 CIDs。Liwen Chu（NXP）。列出 17 个 CID（15037、15038 已划掉），涉及 DPS 移动 AP 的帧交换过程。
- 文档中的过程文本：ICF Required 为 0 时，辅助非 AP STA 需发送 ICF 才能使用移动 AP 的 HC 模式，但可不发送 ICF 而使用 LC 模式参数；DPS Padding Delay 非零时 ICF 为 BSRP NTB 触发帧（为零时可为 BSRP NTB 或 RTS）；Mobile AP DPS Static HCM 置 1 时，AP 在下一个 TBTT 之前保持 HC 模式。
- 关于 DPS 转换（NPCA_Timer、Duration 保护、仅 DUO 的 BSRP、ICF 后的 RTS）的大多数有效修改请求均被 Rejected，并附讨论说明；TXOP 持有者与 TWT SP 的请求（15037、15038）已被划掉。

## Why it matters / what's new (EN)

Both documents are comment-resolution tables against D2.0, so their content is the resolution text and the rejection reasons rather than new proposals. Together they show where two Wi-Fi 8 mechanisms stand in LB296: the Co-BF sounding text in 37.14 (largely editorial, with the sequence-type enumeration and term ordering as the substantive edits) and the DPS mobile AP LC/HC procedure in 37.17.2.3 (several requested additions declined). Earlier TGbn LB296 digests in this KB cover other subclauses (for example 2026-10-20_ieee-mentor-tgbn-teleconf-minutes-co-rtwt-dps-hc-mode-omp-cr-digest). The adopt/reject status is that of the proposed resolutions in the documents, not of group votes.

## Why it matters / what's new (ZH)

两份文档都是针对 D2.0 的评论处理表，内容主要是处理文字与拒绝理由，而非新提案。它们共同显示了 LB296 中两项 Wi-Fi 8 机制的进展：37.14 中的 Co-BF 探测文本（以文字清理为主，实质性修改为序列类型的列举与术语顺序），以及 37.17.2.3 中 DPS 移动 AP 的 LC/HC 过程（多项新增请求被拒）。本知识库此前的 TGbn LB296 摘要覆盖其他子条款（例如 2026-10-20_ieee-mentor-tgbn-teleconf-minutes-co-rtwt-dps-hc-mode-omp-cr-digest）。采纳/拒绝状态是文档中拟议处理结果的状态，并非工作组投票结果。
