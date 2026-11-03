---
id: 2026-11-03_ieee-mentor-tgbn-p-edca-return-to-edca-rule-and-uhr-phy-table-corrections
date_published: 2026-11-02
date_found: 2026-11-03
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest -- LB296 resolutions: P-EDCA part 2 with a unified return-to-EDCA rule (DCN 11-26-1964r1) and UHR PHY corrections (DCNs 11-26-2204, 2205, 2206, 2193r1)"
title_zh: "IEEE 802.11 TGbn Mentor 摘要 -- LB296 评议处理：P-EDCA 第二部分与统一的回退 EDCA 规则（DCN 11-26-1964r1）及 UHR PHY 更正（DCN 11-26-2204、2205、2206、2193r1）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=1964&is_year=2026"
source_quality: full
topics: [802.11bn, UHR, P-EDCA, UHR-MCS, LDPC, ELR, LB296, Mentor digest]
topic_primary: wifi8-uhr
topics_secondary: [rtwt-latency]
novelty_score: 2
---

## Summary (EN)

The 2 November 2026 upload burst before the November session included a large set of TGbn LB296 comment-resolution documents. The ones read here are:

DCN 11-26-1964r1 (Dmitry Akhmetov, Intel; listed 2026-11-02) is "LB296: CR for 37.2.2 P-EDCA -- part 2", resolving 50 CIDs against D2.0 with text based on D2.1. Rev 0 also folds in changes from 11-26/1671r7 (agreed in the 15 October telecon, per the document). Rev 1 unifies three conditions for returning to EDCA operation after an unsuccessful P-EDCA contention into a single paragraph: the PSRC threshold is reached; the STA chooses not to start another P-EDCA contention; or the conditions to start P-EDCA contention no longer hold (for example P-EDCA disabled, or the AC_VO frame discarded). It deletes the bullet list that followed the PSRC rule as redundant and adds a NOTE on P-EDCA being disabled during an ongoing contention or TXOP, and adds the Use_Protection (ERP element) condition to the P-EDCA disable rule (CID 15182). Two CID responses (16481, 17293) add a reference in 9.3.1.3 defining a DS-CTS frame as a CTS frame whose RA field is defined in 37.2.2.

DCN 11-26-2204r0 (Sigurd Schelstraete and Avner Epstein, MaxLinear; document dated 2026-10-28, listed 2026-11-02) corrects two entries in the clause 38.5 UHR-MCS tables found on review of D2.1: N_DBPS,u for MCS 20 should be N_CBPS,u x R = 15680 x 5/6 = 13066, and the 0.8 us GI data rate for MCS 15 should be 26.6 (N_DBPS,u / 13.6, rounded to one decimal).

DCNs 11-26-2205 (LDPC, CIDs 13752-13754 and 16108) and 11-26-2206 (ELR-MARK, 14 CIDs), both by Rethna Pulikkoonattu (Broadcom) with Qualcomm / Apple co-authors, are editorial: they replace "2xLDPC subfield" with "2xLDPC field" and fix the order of "field 2xLDPC" per the Style Guide / IEEE SA Manual wording rules cited in the CIDs, and remove a stray ")" from the title of 38.3.15.8 "ELR-MARK field)", and other editorial fixes (e.g., 'BSS )color', 'will have' → 'has'); both are based on P802.11bn D2.0. DCN 11-26-2193r1 (Rani Keren and Mengshi Hu, Huawei) resolves 12 CIDs on 38.3.13 timing-related parameters, mostly table-number fixes (Table 38-19 to 38-20) and one removal of a duplicated N^Tone_ELR-MARK row from Table 38-22; it rejects one comment that asked for a T_GI,UHR-LTF,ELR row to refer to T_GI,Data,ELR, on the grounds that the table lists explicit values for parameters with a single possible value.

## Summary (ZH)

11 月会议之前，2026 年 11 月 2 日出现了大批 TGbn LB296 评议处理文稿。本条阅读的文稿如下：

DCN 11-26-1964r1（Dmitry Akhmetov，Intel；Mentor 列出日期 2026-11-02）为"LB296: CR for 37.2.2 P-EDCA -- part 2"，针对 D2.0 处理 50 个 CID，文本基于 D2.1。按文稿所述，Rev 0 还合并了 11-26/1671r7 的修改（10 月 15 日电话会议已同意）。Rev 1 将 P-EDCA 竞争失败后回到 EDCA 操作的三种条件合并为一段：达到 PSRC 门限；STA 选择不再发起 P-EDCA 竞争；或启动 P-EDCA 竞争的条件不再满足（例如 P-EDCA 被禁用或 AC_VO 帧被丢弃）。它删除了 PSRC 规则后冗余的列表，增加了关于 P-EDCA 在竞争或 TXOP 进行中被禁用的 NOTE，并在 P-EDCA 禁用规则中加入 Use_Protection（ERP 元素）条件（CID 15182）。两条 CID（16481、17293）的处理在 9.3.1.3 中增加引用，将 DS-CTS 帧定义为 RA 字段由 37.2.2 定义的 CTS 帧。

DCN 11-26-2204r0（Sigurd Schelstraete、Avner Epstein，MaxLinear；文稿日期 2026-10-28，Mentor 列出日期 2026-11-02）更正了审阅 D2.1 时发现的第 38.5 条 UHR-MCS 表中的两处：MCS 20 的 N_DBPS,u 应为 N_CBPS,u x R = 15680 x 5/6 = 13066；MCS 15 在 0.8 us GI 下的数据率应为 26.6（N_DBPS,u / 13.6，保留一位小数）。

DCN 11-26-2205（LDPC，CID 13752-13754 与 16108）和 11-26-2206（ELR-MARK，14 个 CID）均由 Rethna Pulikkoonattu（Broadcom）牵头，Qualcomm / Apple 为共同作者，属编辑性修改：按 CID 中引用的 Style Guide / IEEE SA Manual 措辞规则，将"2xLDPC subfield"改为"2xLDPC field"并修正"field 2xLDPC"的语序，同时删除 38.3.15.8"ELR-MARK field)"标题中多余的")"，以及其他编辑性修正（如 'BSS )color'、'will have' → 'has'）；两者均基于 P802.11bn D2.0。DCN 11-26-2193r1（Rani Keren、Mengshi Hu，华为）处理第 38.3.13 条时序相关参数的 12 个 CID，主要是表号修正（表 38-19 改为 38-20），并删除表 38-22 中重复的 N^Tone_ELR-MARK 行；它驳回了一条要求 T_GI,UHR-LTF,ELR 行引用 T_GI,Data,ELR 的评议，理由是该表对只有单一可能取值的参数都列出明确数值。

## Key technical points (EN)

- **DCN 11-26-1964r1 · TGbn** -- LB296: CR for 37.2.2 P-EDCA -- part 2 (50 CIDs). Dmitry Akhmetov (Intel). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1964&is_year=2026)
- Unified return-to-EDCA paragraph (PSRC threshold / STA declines new contention / start conditions no longer met); NOTE on disablement during contention or TXOP; Use_Protection condition added to the disable rule.
- **DCN 11-26-2204r0 · TGbn** -- Corrections for UHR-MCS parameters (clause 38.5; MCS 20 N_DBPS,u = 13066; MCS 15 0.8 us GI rate 26.6). Sigurd Schelstraete, Avner Epstein (MaxLinear). [document](https://mentor.ieee.org/802.11/documents?is_dcn=2204&is_year=2026)
- **DCN 11-26-2205r0 · TGbn** -- CR specific to LDPC (CIDs 13752, 13753, 13754, 16108). Rethna Pulikkoonattu (Broadcom), Sameer Vermani (Qualcomm). [document](https://mentor.ieee.org/802.11/documents?is_dcn=2205&is_year=2026)
- **DCN 11-26-2206r0 · TGbn** -- CR on ELR-MARK symbols (14 CIDs). Rethna Pulikkoonattu (Broadcom), Wook Bong Lee (Apple), Lin Yang (Qualcomm). [document](https://mentor.ieee.org/802.11/documents?is_dcn=2206&is_year=2026)
- **DCN 11-26-2193r1 · TGbn** -- LB296 CRs on 38.3.13 timing-related parameters (12 CIDs). Rani Keren, Mengshi Hu (Huawei). [document](https://mentor.ieee.org/802.11/documents?is_dcn=2193&is_year=2026)

## Key technical points (ZH)

- **DCN 11-26-1964r1 · TGbn** -- LB296：37.2.2 P-EDCA 评议处理第二部分（50 个 CID）。Dmitry Akhmetov（Intel）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1964&is_year=2026)
- 合并后的回退 EDCA 段落（PSRC 门限 / STA 不再发起竞争 / 启动条件不再满足）；关于竞争或 TXOP 期间禁用的 NOTE；禁用规则中加入 Use_Protection 条件。
- **DCN 11-26-2204r0 · TGbn** -- UHR-MCS 参数更正（第 38.5 条；MCS 20 N_DBPS,u = 13066；MCS 15 在 0.8 us GI 下为 26.6）。Sigurd Schelstraete、Avner Epstein（MaxLinear）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2204&is_year=2026)
- **DCN 11-26-2205r0 · TGbn** -- LDPC 相关评议处理（CID 13752、13753、13754、16108）。Rethna Pulikkoonattu（Broadcom）、Sameer Vermani（Qualcomm）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2205&is_year=2026)
- **DCN 11-26-2206r0 · TGbn** -- ELR-MARK 符号相关评议处理（14 个 CID）。Rethna Pulikkoonattu（Broadcom）、Wook Bong Lee（Apple）、Lin Yang（Qualcomm）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2206&is_year=2026)
- **DCN 11-26-2193r1 · TGbn** -- 第 38.3.13 条时序相关参数的 LB296 评议处理（12 个 CID）。Rani Keren、Mengshi Hu（华为）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2193&is_year=2026)

## Why it matters / what's new (EN)

These are D2.0-to-D2.1/D3.0-style clean-up documents: one substantive consolidation of the P-EDCA rules and several table and wording corrections in the UHR PHY clauses. They show the amount of PHY and MAC editing in flight in the days before the November session; none of the documents says whether it has been adopted. The group's other 2 November uploads (more CR documents on UHR-SIG, MLME, MIB and Co-BF/Co-SR, plus the session agendas) were not read for this digest.

## Why it matters / what's new (ZH)

这些是 D2.0 向后续草案推进过程中的整理性文稿：一份是对 P-EDCA 规则的实质性整合，其余为 UHR PHY 条款中的表格与措辞更正。它们反映了 11 月会议前几天 PHY 与 MAC 编辑工作的体量；各文稿均未说明是否已被采纳。该小组 11 月 2 日的其他上传（更多关于 UHR-SIG、MLME、MIB 以及 Co-BF/Co-SR 的 CR 文稿和会议议程）未纳入本摘要的阅读。
