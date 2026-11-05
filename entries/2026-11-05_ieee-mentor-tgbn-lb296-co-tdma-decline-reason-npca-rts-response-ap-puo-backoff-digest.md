---
id: 2026-11-05_ieee-mentor-tgbn-lb296-co-tdma-decline-reason-npca-rts-response-ap-puo-backoff-digest
date_published: 2026-11-04
date_found: 2026-11-05
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest — 2026-11-05 (LB296 CRs: Co-TDMA Decline Reason field, NPCA STA response to RTS, EDCA backoff after AP PUO unavailability; DCN 2236r0, 1910r1, 1998r1)"
title_zh: "IEEE 802.11 TGbn Mentor 当日摘要 — 2026-11-05（LB296 评议处理：Co-TDMA 拒绝原因字段、NPCA STA 对 RTS 的响应、AP PUO 不可用期结束后的 EDCA 退避；DCN 2236r0、1910r1、1998r1）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=2236"
source_quality: full
topics: [802.11bn, TGbn, LB296, Co-TDMA, MAPC, NPCA, AP PUO, EDCA, comment resolution]
topic_primary: mapc-cosr
topics_secondary: [wifi8-uhr, energy-power-save]
novelty_score: 2
---

## Summary (EN)

Three TGbn comment-resolution documents for Letter Ballot 296 (TGbn D2.0; 2236r0 is written against D2.1, while 1910r1 and 1998r1 are written against D2.0) were uploaded on 3-4 November 2026. DCN 11-26-2236r0 (Serhat Erkucuk, Ofinno) resolves CID 16063 on Co-TDMA feedback. DCN 11-26-1910r1 (Juseong Moon and Ronny Yongho Kim, KNUT) resolves CIDs 13884 and 13896 on how an NPCA STA treats an RTS frame. DCN 11-26-1998r1 (same authors) resolves CIDs 13888 and 13900 on channel access when an AP PUO unavailability period ends.

Each document follows the same layout: the comment, a discussion of the draft behaviour the comment points at, and editing instructions for the TGbn editor. 2236r0 adds a 4-bit Co-TDMA Decline Reason field to the Co-TDMA feedback; 1910r1 extends item 18) of 37.18.4 to ICFs that carry no NPCA Primary Channel Indication field; 1998r1 adds a paragraph to 37.19.4 requiring a new EDCA backoff.

## Summary (ZH)

3-4 日 2026 年 11 月上传了三份针对 Letter Ballot 296（TGbn D2.0；2236r0 基于 D2.1 撰写，1910r1 与 1998r1 基于 D2.0 撰写）的评议处理文档。DCN 11-26-2236r0（Serhat Erkucuk，Ofinno）处理 CID 16063，涉及 Co-TDMA 反馈；DCN 11-26-1910r1（Juseong Moon 与 Ronny Yongho Kim，KNUT）处理 CID 13884 与 13896，涉及 NPCA STA 如何对待 RTS 帧；DCN 11-26-1998r1（同一作者）处理 CID 13888 与 13900，涉及 AP PUO 不可用期结束时的信道接入。

三份文档结构一致：评议原文、对草案相关行为的讨论、给 TGbn 编辑的修改指令。2236r0 在 Co-TDMA 反馈中新增 4 比特 Co-TDMA Decline Reason 字段；1910r1 将 37.18.4 的第 18) 项扩展到不携带 NPCA Primary Channel Indication 字段的 ICF；1998r1 在 37.19.4 增加一段，要求重新进行 EDCA 退避。

## Key technical points (EN)

- **DCN 11-26-2236r0 · TGbn** — LB296 CR for CID 16063 on Co-TDMA. Serhat Erkucuk (Ofinno), with Jeongki Kim and Leonardo Lanante. [document](https://mentor.ieee.org/802.11/documents?is_dcn=2236&is_year=2026). The Co-TDMA feedback in a Multi-STA BlockAck (Feedback Type 3) carries only the 1-bit TXOP Sharing Solicited field, with 31 reserved bits. The document defines a 4-bit Co-TDMA Decline Reason field (B1-B4, 27 reserved bits remain), meaningful only when TXOP Sharing Solicited is 0: 0 DECLINED_REASON_UNSPECIFIED, 1 DECLINED_NO_TRAFFIC, 2 DECLINED_INSUFFICIENT_DURATION (the Max TXOP Allocation Under Consideration value is not sufficient), 3 DECLINED_TEMPORARILY_UNAVAILABLE, 4-15 reserved. Stated rationale: Co-BF and Co-SR feedback already return 4-bit status codes. Changes are to 9.3.1.8.6.5 and 37.15.2.3.3; a NOTE says the coordinating AP can use the reason to decide whether to poll the same AP again in the same or a later TXOP. The document states the Feedback field length and the ICR exchange are unchanged.
- **DCN 11-26-1910r1 · TGbn** — RTS frame response rules for NPCA operation. Juseong Moon, Ronny Yongho Kim (KNUT). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1910&is_year=2026). Item 18) of 37.18.4 says an NPCA STA on the NPCA primary channel should not respond to an ICF whose NPCA Primary Channel Indication is 0; the document notes an RTS frame (an ICF in UHR) has no Special User Info field, so the rule does not apply and the baseline requires a CTS response, which the RTS transmitter listening on the BSS primary channel cannot receive. Proposed text adds "and should not respond to an ICF that does not include the NPCA Primary Channel field (e.g., RTS)".
- **DCN 11-26-1998r1 · TGbn** — LB296 CR for AP PUO channel access. Juseong Moon, Ronny Yongho Kim (KNUT). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1998&is_year=2026). The document states that STAs deferring AP-addressed traffic during AP unavailability can hold zero backoff counters and all transmit in the same slot when the AP becomes available. Proposed paragraph for 37.19.4: an APPUO Assisting non-AP STA with a frame for that AP at an EDCAF whose backoff counter is 0 shall invoke the backoff procedure of 10.23.2.2, with CW[AC] and QSRC[AC] unchanged, before initiating a TXOP.

## Key technical points (ZH)

- **DCN 11-26-2236r0 · TGbn** — LB296 CR for CID 16063 on Co-TDMA。Serhat Erkucuk（Ofinno），合作者 Jeongki Kim、Leonardo Lanante。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2236&is_year=2026)。Multi-STA BlockAck 中的 Co-TDMA 反馈（Feedback Type 3）仅含 1 比特 TXOP Sharing Solicited 字段，其余 31 比特保留。文档定义 4 比特 Co-TDMA Decline Reason 字段（B1-B4，剩余 27 比特保留），仅在 TXOP Sharing Solicited 为 0 时有意义：0 DECLINED_REASON_UNSPECIFIED，1 DECLINED_NO_TRAFFIC，2 DECLINED_INSUFFICIENT_DURATION（Max TXOP Allocation Under Consideration 的值不足），3 DECLINED_TEMPORARILY_UNAVAILABLE，4-15 保留。文档给出的理由：Co-BF 与 Co-SR 反馈已返回 4 比特状态码。修改涉及 9.3.1.8.6.5 与 37.15.2.3.3；一条 NOTE 说明协调 AP 可据此决定是否在同一 TXOP 或后续 TXOP 再次轮询该 AP。文档称 Feedback 字段长度与 ICR 交互不变。
- **DCN 11-26-1910r1 · TGbn** — RTS frame response rules for NPCA operation。Juseong Moon、Ronny Yongho Kim（KNUT）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1910&is_year=2026)。37.18.4 第 18) 项规定 NPCA 主信道上的 NPCA STA 不应响应 NPCA Primary Channel Indication 为 0 的 ICF；文档指出 RTS 帧（UHR 中的一种 ICF）没有 Special User Info 字段，该规则不适用，基线要求回复 CTS，而在 BSS 主信道上监听的 RTS 发送方无法收到该 CTS。拟议文本增加“且不应响应不含 NPCA Primary Channel 字段的 ICF（例如 RTS）”。
- **DCN 11-26-1998r1 · TGbn** — LB296 CR for AP PUO channel access。Juseong Moon、Ronny Yongho Kim（KNUT）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1998&is_year=2026)。文档指出，在 AP 不可用期间推迟发往 AP 流量的 STA 可能退避计数器为 0，AP 恢复可用时全部在同一时隙发送。37.19.4 的拟议新增段落：对于有发往该 AP 的帧且对应 EDCAF 退避计数器为 0 的 APPUO 协助非 AP STA，须先按 10.23.2.2 启动退避过程（CW[AC] 与 QSRC[AC] 不变），再发起 TXOP。

## Why it matters / what's new (EN)

All three are comment resolutions against D2.0 in LB296, not new proposals; the first extends the Co-TDMA polling response, the other two close gaps the authors identify in NPCA and AP PUO text. They follow the Co-TDMA, NPCA and AP PUO threads already digested in 2026-11-04_ieee-mentor-tgbn-lb296-co-tdma-txnav-npca-nav-backoff-early-switch-back-cr-digest and the earlier TGbn LB296 digests.

Contributors in this set are Ofinno (2236) and KNUT (1910, 1998). The documents themselves mark the resolutions as "Revised / agree in principle"; adoption depends on TGbn motions not visible in the listing.

## Why it matters / what's new (ZH)

三份文档均为 LB296 中针对 D2.0 的评议处理，而非新提案；第一份扩展 Co-TDMA 轮询响应，另外两份填补作者所指出的 NPCA 与 AP PUO 文本缺口。它们延续了 2026-11-04_ieee-mentor-tgbn-lb296-co-tdma-txnav-npca-nav-backoff-early-switch-back-cr-digest 及此前 TGbn LB296 摘要中已涉及的 Co-TDMA、NPCA、AP PUO 议题。

本组贡献方为 Ofinno（2236）与 KNUT（1910、1998）。文档自身将处理结果标注为“Revised / agree in principle”；是否采纳取决于列表中不可见的 TGbn 动议。
