---
id: 2026-09-11_ieee-mentor-tgbq-immw-mac-phy-digest
date_published: 2026-09-10
date_found: 2026-09-11
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 Mentor digest — TGbq IMMW PHY/MAC wave: cross-link ACK recovery, feedback-initiated early termination (2026-09-10)"
title_zh: "IEEE 802.11 Mentor 摘要 — TGbq IMMW PHY/MAC 上传浪潮：跨链 ACK 恢复、反馈发起的提前终止（2026-09-10）"
url: https://mentor.ieee.org/802.11/documents?is_year=2026
source_quality: snippet_only
topics: [TGbq, IMMW, mmWave, 802.11bq]
topic_primary: mmwave-bq
topics_secondary: [mapc-cosr]
novelty_score: 2
---

## Summary (EN)

TGbq (Integrated Millimeter Wave, IMMW) uploaded six new-DCN documents inside this run's scan window on 2026-09-10 (a seventh, DCN 1725r0 "Thoughts on TRN-based beam establishment-follow up" by Insik Jung of LG Electronics, was uploaded at 21:18 ET, after the cutoff) (one, DCN 1716, was first uploaded late on 2026-09-09 at 21:53 ET, after the prior run's scan). Two extend the field-level PHY preamble drafting this KB has tracked since 2026-09-09: proposed draft text (PDT) for the IMMW-SIG field and for the preamble's Data field. Two are discussion/overview documents on the PPDU encoding process and on the IMMW-LTF. On the MAC side, one PDT introduces a "feedback-initiated" variant of early termination for the beam-establishment procedure, a sibling of the beamformer-initiated variant this KB already recorded under the same cross-link clause 41.7.2.3 (`2026-09-10_ieee-mentor-tgbq-win-aio-digest`, DCN 1690, subclause 41.7.2.3.2). The sixth, from Nokia, proposes a cross-link acknowledgment-recovery mechanism for IMMW links — the first Nokia-authored TGbq contribution this KB has recorded, and the first ACK-recovery-specific proposal recorded for the group. Nokia has in fact been contributing to TGbq since July 2025 (DCN 11-25-1125r0) and co-authors DCN 1643 above.

## Summary (ZH)

TGbq（集成毫米波，IMMW）于 2026-09-10 在本次运行的扫描窗口内上传了六份新编号文档（第七份 DCN 1725r0「Thoughts on TRN-based beam establishment-follow up」，作者 Insik Jung（LG 电子），于 21:18 ET 上传，晚于扫描截止时点）（其中 DCN 1716 实际于 2026-09-09 深夜 21:53 ET 首次上传，晚于上一次运行的扫描时点）。其中两份延续了本知识库自 2026-09-09 起跟踪的字段级 PHY 前导码起草工作：分别针对 IMMW-SIG 字段与前导码 Data 字段的拟稿文本（PDT）。另两份是关于 PPDU 编码流程与 IMMW-LTF 的讨论/概述性文档。MAC 侧的一份 PDT 提出了波束建立流程提前终止机制的「反馈发起」变体，与本知识库此前记录的「波束成形方发起」变体同属跨链条款 41.7.2.3（`2026-09-10_ieee-mentor-tgbq-win-aio-digest`，DCN 1690，子条款 41.7.2.3.2）。第六份来自诺基亚，提出了面向 IMMW 链路的跨链确认恢复机制——这是本知识库记录的首份诺基亚署名的 TGbq 贡献，也是本知识库为该组记录的首份专门针对 ACK 恢复的提案。诺基亚实际上自 2025 年 7 月起即在 TGbq 有贡献（DCN 11-25-1125r0），并且是上述 DCN 1643 的共同作者之一。

## Key technical points (EN)

- **DCN 11-26-1642r0 · TGbq** — "PDT PHY: IMMW-SIG". Mengshi Hu (Huawei), uploaded 10-Sep-2026 08:15 ET. Proposed draft text for the IMMW-SIG field of the IMMW preamble, continuing the field-level PHY clause drafting begun by the 09-09 wave (M-STF/M-LTF/IMMW-LTF/preamble-introduction PDTs). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1642&is_year=2026)
- **DCN 11-26-1716r0 · TGbq** — "PDT PHY: Data field". Ratnesh Kumbhkar (Intel), uploaded 09-Sep-2026 21:53 ET. Proposed draft text for the Data field of the IMMW PPDU. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1716&is_year=2026)
- **DCN 11-26-1632r0 · TGbq** — "PDT Overview of the PPDU Encoding Process". Eunsung Park (LG Electronics), uploaded 10-Sep-2026 20:42 ET. An overview-level PDT walking through the IMMW PPDU's encoding process, rather than a single-clause field definition. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1632&is_year=2026)
- **DCN 11-26-1631r0 · TGbq** — "Considerations on IMMW-LTF". Eunsung Park (LG Electronics), uploaded 10-Sep-2026 20:59 ET. A discussion document raising considerations for the IMMW-LTF design, companion to the 1632 PPDU-encoding overview from the same author. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1631&is_year=2026)
- **DCN 11-26-1643r0/r1 · TGbq** — "PDT MAC: Feedback-Initiated Early Termination". Mengshi Hu (Huawei), r0 uploaded 10-Sep-2026 08:13 ET, r1 10-Sep-2026 20:31 ET. Proposed draft text for a MAC-layer mechanism terminating the beam-establishment procedure early on feedback: the beam-establishment receiver terminates the mmWave procedure via the sub-7 GHz link once it successfully receives one or more NDPs (per TGbq Motion #85). It is a sibling of the beamformer-initiated variant (`2026-09-10_ieee-mentor-tgbq-win-aio-digest`, DCN 1690, subclause 41.7.2.3.2) under the same cross-link parent clause 41.7.2.3, "Cross link indication of early termination". The PDT carries 29 named co-authors across roughly 18 companies. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1643&is_year=2026)
- **DCN 11-26-1771r0 · TGbq** — "Cross-Link Acknowledgment Recovery for IMMW Links". Salvatore Talarico (Nokia), uploaded 10-Sep-2026 15:53 ET. Proposes a recovery mechanism for acknowledgments on IMMW links carried across the cross-link (sub-7 GHz control / mmWave data) architecture this KB has tracked since the 09-09/09-10 cross-link early-termination PDTs. The first Nokia-authored TGbq contribution recorded in this KB, though Nokia has contributed to TGbq since July 2025. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1771&is_year=2026)

## Key technical points (ZH)

- **DCN 11-26-1642r0 · TGbq** — "IMMW-SIG PHY PDT"。Mengshi Hu（华为），2026-09-10 08:15 ET 上传。针对 IMMW 前导码中 IMMW-SIG 字段的拟稿文本，延续 09-09 那一批（M-STF/M-LTF/IMMW-LTF/前导码引言 PDT）开启的字段级 PHY 条款起草工作。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1642&is_year=2026)
- **DCN 11-26-1716r0 · TGbq** — "Data 字段 PHY PDT"。Ratnesh Kumbhkar（英特尔），2026-09-09 21:53 ET 上传。针对 IMMW PPDU 中 Data 字段的拟稿文本。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1716&is_year=2026)
- **DCN 11-26-1632r0 · TGbq** — "PPDU 编码流程概述 PDT"。Eunsung Park（LG 电子），2026-09-10 20:42 ET 上传。一份概述层面的 PDT，梳理 IMMW PPDU 的整体编码流程，而非单一条款的字段定义。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1632&is_year=2026)
- **DCN 11-26-1631r0 · TGbq** — "关于 IMMW-LTF 的考虑"。Eunsung Park（LG 电子），2026-09-10 20:59 ET 上传。就 IMMW-LTF 设计提出考虑事项的讨论文档，与同一作者的 1632 号 PPDU 编码概述文档配套。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1631&is_year=2026)
- **DCN 11-26-1643r0/r1 · TGbq** — 「反馈发起的提前终止 MAC PDT」。Mengshi Hu（华为），r0 于 2026-09-10 08:13 ET 上传，r1 于 2026-09-10 20:31 ET 上传。针对波束建立流程由反馈发起提前终止的 MAC 层机制的拟稿文本：由波束建立接收方在成功接收到一个或多个 NDP 后，通过 sub-7 GHz 链路终止毫米波流程（依据 TGbq Motion #85）。它与「波束成形方发起」变体（`2026-09-10_ieee-mentor-tgbq-win-aio-digest`，DCN 1690，子条款 41.7.2.3.2）同属跨链父条款 41.7.2.3「Cross link indication of early termination」。该 PDT 署有约 18 家公司的 29 位共同作者。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1643&is_year=2026)
- **DCN 11-26-1771r0 · TGbq** — "面向 IMMW 链路的跨链确认恢复"。Salvatore Talarico（诺基亚），2026-09-10 15:53 ET 上传。针对本知识库自 09-09/09-10 跨链提前终止 PDT 以来跟踪的跨链（sub-7 GHz 控制面 / 毫米波数据面）架构，提出一种确认帧恢复机制。这是本知识库记录的首份诺基亚署名的 TGbq 贡献；诺基亚自 2025 年 7 月起即在 TGbq 有贡献。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1771&is_year=2026)

## Why it matters / what's new (EN)

TGbq's field-level PHY preamble drafting (begun 2026-09-09 with M-STF/M-LTF/IMMW-LTF/preamble-introduction PDTs) now extends to the IMMW-SIG and Data fields, while the MAC-layer early-termination clause family — first seen as the cross-link "beamformer-initiated" variant on 2026-09-09 — gains a second, "feedback-initiated" variant. The cross-link acknowledgment-recovery proposal (DCN 1771) is the first ACK-recovery-specific contribution this KB has recorded for TGbq and is the first Nokia-authored TGbq contribution this KB has recorded, though Nokia has been contributing to TGbq since July 2025 and co-authors DCN 1643 above. Taken together, TGbq's proposed-draft-text coverage is broadening from the preamble container fields into surrounding MAC procedures (early termination, ACK recovery) that depend on the cross-link architecture between the sub-7 GHz control link and the mmWave data link.

## Why it matters / what's new (ZH)

TGbq 自 2026-09-09 起以 M-STF/M-LTF/IMMW-LTF/前导码引言 PDT 开始的字段级 PHY 前导码起草工作，现已扩展至 IMMW-SIG 与 Data 字段；而 MAC 层提前终止条款族——此前于 2026-09-09 以跨链「波束成形方发起」变体出现——又新增了第二种「反馈发起」变体。跨链确认恢复提案（DCN 1771）是本知识库为 TGbq 记录的首份专门针对 ACK 恢复的贡献，并延续了诺基亚自 2025 年 7 月以来在 TGbq 的参与。综合来看，TGbq 的拟稿文本覆盖范围正从前导码容器字段本身，扩展到依赖 sub-7 GHz 控制链路与毫米波数据链路之间跨链架构的周边 MAC 流程（提前终止、ACK 恢复）。

## Images

None.
