---
id: 2026-11-25_ieee-mentor-tgbn-p-edca-timing-check-cr-dcn-2379-roaming-crs-2208-2209-r3
date_published: 2026-11-23
date_found: 2026-11-25
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest - 2026-11-23/24: P-EDCA start-condition CR for CID 14072 (DCN 11-26-2379r0), seamless-roaming CRs revision 3 (DCN 2208r3, 2209r3) and the Nov-Jan telecon agenda (DCN 2380r2)"
title_zh: "IEEE 802.11 TGbn Mentor 摘要 - 2026-11-23/24：针对 CID 14072 的 P-EDCA 启动条件 CR（DCN 11-26-2379r0）、无缝漫游 CR 第 3 版（DCN 2208r3、2209r3）及 11 月至 1 月电话会议议程（DCN 2380r2）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2379&is_year=2026"
source_quality: full
topics: [802.11bn, TGbn, P-EDCA, LB296, comment resolution, seamless roaming, SMD, NPCA]
topic_primary: wifi8-uhr
topics_secondary: [roaming-mobility, rtwt-latency]
novelty_score: 2
---

## Summary (EN)
TGbn has three groups of uploads on 23-24 November 2026 (ET). The new document is DCN 11-26-2379r0, "LB296 CR for P-EDCA CID 14072", by Pei Zhou (TCL), dated 18 November 2026 with TGbn D2.1 as baseline (the .docx was read in full); it appears in the Mentor listing with an upload time of 23 November 22:29 ET. It resolves one LB296 comment on P-EDCA, CID 14072 (clause 37.2.2, page 293 line 19). The comment says a P-EDCA STA should, before starting a P-EDCA contention, evaluate whether there is sufficient time or availability duration (for example due to DUO or PUO) to complete the whole P-EDCA contention sequence and transmit at least one PPDU, and should not start the contention if not. The proposed resolution is "Revised": "Agree with the commenter. A timing-feasibility check condition should be added to avoid a certain failure."

The document's discussion section gives two perspectives, inherited from DCN 11-26-1964r1. Perspective 1 is that the timing feasibility check is "as straightforward and necessary as the existing conditions". Perspective 2 is that a similar principle already exists for NPCA: clause 37.18.3 requires the remaining PPDU/TXOP duration, after subtracting switching and switch-back delays, to exceed the NPCA Minimum Duration Threshold, which is expressed as 512 + NMDT x 128 microseconds (minimum 512 us, maximum 2432 us) and whose note says the minimum is chosen to cover an NPCA ICF and ICR exchange plus a typical Data and Ack/BA exchange at 6 Mb/s. The document presents this as a precedent for checking usable time before starting a channel-access procedure. The text to be adopted amends the list of conditions in 37.2.2 by adding a NOTE: when deciding whether to start a P-EDCA contention, a P-EDCA STA "can consider" whether there is sufficient time to complete the DS-CTS transmission, the ensuing contention, an applicable ICF/ICR exchange (for example RTS and CTS) and a subsequent frame exchange that includes at least one Data and Ack/BA exchange or Management frame buffered in AC_VO; the existing conditions (P-EDCA enabled, pending AC_VO traffic, QSRC[AC_VO] and PSRC thresholds, not a TXOP holder, nonzero AIFSN[AC_VO]) are unchanged in the excerpt.

The second group is revision 3 of the two seamless-roaming comment-resolution documents by Duncan Ho (Qualcomm), DCN 11-26-2208r3 (Part 1) and 11-26-2209r3 (Part 2), both uploaded 23 November 20:13 ET. Their abstracts now list 38 and 36 CIDs for TGbn D2.0 (LB296). The revision tables state: Part 1, r1 added CID 13185 (deferred from 11/26/1809), removed CID 20233 and improved instructions, r2 minor editorial edits, r3 removed CIDs 13460, 18849, 18535, 20379 and 20406; Part 2, r1 improved some instructions and revised the resolutions of CIDs 14587, 16503, 17267, 20589, 20261 and 16256, r2 minor editorials, r3 removed CID 17581. The third item is revision 2 of the Nov-Jan teleconference agenda, DCN 11-26-2380r2 (Alfred Asterjadhi, Qualcomm; uploaded 24 November 12:11 ET, "Revised version after first conf call").

## Summary (ZH)
TGbn 在 2026 年 11 月 23-24 日（美东时间）有三组上传。新文档是 DCN 11-26-2379r0《LB296 CR for P-EDCA CID 14072》，作者 Pei Zhou（TCL），文稿日期为 2026 年 11 月 18 日，基线为 TGbn D2.1（已通读 .docx）；Mentor 列表显示其上传时间为 11 月 23 日 22:29 ET。该文档处理 LB296 中关于 P-EDCA 的一条意见 CID 14072（第 37.2.2 条，第 293 页第 19 行）。意见称，P-EDCA STA 在启动 P-EDCA 竞争前，应评估是否有足够的时间或可用时长（例如受 DUO、PUO 影响）完成整个 P-EDCA 竞争序列并至少发送一个 PPDU；若不足则不应启动竞争。拟议处理结果为“Revised”：“Agree with the commenter. A timing-feasibility check condition should be added to avoid a certain failure.”

文档的讨论部分给出两种观点，继承自 DCN 11-26-1964r1。观点 1：该时间可行性检查“与现有条件一样直接且必要”。观点 2：NPCA 中已有类似原则——第 37.18.3 条要求扣除切换与切回时延后，剩余的 PPDU/TXOP 时长须超过 NPCA Minimum Duration Threshold，其计算为 512 + NMDT × 128 微秒（最小 512 µs，最大 2432 µs），其注释称最小值的选取至少覆盖 NPCA 的 ICF/ICR 交互加上 6 Mb/s 下一次典型的 Data 与 Ack/BA 交换。文档将其作为“启动某信道接入流程前先检查可用时间”的先例。拟采纳的文字在第 37.2.2 条的条件列表中增加一条 NOTE：P-EDCA STA 在决定是否启动 P-EDCA 竞争时“can consider”（可以考虑）是否有足够时间完成 DS-CTS 发送、随后的竞争、适用的 ICF/ICR 交互（例如 RTS 与 CTS），以及至少包含一次 Data 与 Ack/BA 交换或 AC_VO 中缓存的管理帧的后续帧交换；摘录中的既有条件（P-EDCA 已启用、有待发 AC_VO 业务、QSRC[AC_VO] 与 PSRC 阈值、非 TXOP 持有者、AIFSN[AC_VO] 非零）保持不变。

第二组是 Duncan Ho（Qualcomm）两份无缝漫游意见处理文档的第 3 版：DCN 11-26-2208r3（第 1 部分）与 11-26-2209r3（第 2 部分），均于 11 月 23 日 20:13 ET 上传。其摘要现列出针对 TGbn D2.0（LB296）的 38 个和 36 个 CID。修订表记载：第 1 部分 r1 增加 CID 13185（自 11/26/1809 推迟而来）、删除 CID 20233 并改进指令，r2 为少量编辑性修改，r3 删除 CID 13460、18849、18535、20379、20406；第 2 部分 r1 改进部分指令并修订 CID 14587、16503、17267、20589、20261、16256 的处理结果，r2 为编辑性修改，r3 删除 CID 17581。第三项是 11 月至 1 月电话会议议程的第 2 版 DCN 11-26-2380r2（Alfred Asterjadhi，Qualcomm；11 月 24 日 12:11 ET 上传，“Revised version after first conf call”）。

## Key technical points (EN)
- **DCN 11-26-2379r0 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2379&is_year=2026) LB296 CR for P-EDCA CID 14072. Pei Zhou (TCL). Clause 37.2.2; baseline TGbn D2.1; resolution "Revised".
- **DCN 11-26-2208r3 / 2209r3 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2208&is_year=2026) / [document](https://mentor.ieee.org/802.11/documents?is_dcn=2209&is_year=2026) LB296 CR on Seamless Roaming technical comments, Parts 1 and 2. Duncan Ho (Qualcomm). Abstracts list 38 and 36 CIDs; r3 removes five CIDs from Part 1 and one from Part 2.
- **DCN 11-26-2380r2 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2380&is_year=2026) Nov-Jan TGbn teleconference agenda. Alfred Asterjadhi (Qualcomm). Overview lists telecons on 23 Nov (MAC, 19:00-21:00 ET), 30 Nov (MAC/PHY), 3, 10 and 17 Dec (Joint, 10:00-12:00 ET), 7 and 21 Dec (MAC) and 14 Dec (MAC/PHY), with 22 Dec to 8 Jan marked Holiday/Ad-hoc. The 23 Nov agenda lists prioritized CR submissions 2208 (42C), 2209 (38C), 2267 (NPCA editorial, Dongju Cha, 13C) and 2305 (Roaming Preparation Deletion, Pooya Monajemi, 12C).
- Proposed P-EDCA text in 11-26/2379r0: a NOTE saying a P-EDCA STA "can consider" whether there is time for the DS-CTS, contention, ICF/ICR exchange and at least one Data and Ack/BA exchange or Management frame in AC_VO. The excerpt also restates the DS-CTS rules: sent as a non-HT or non-HT duplicate PPDU at 6 Mb/s, RA 00:0F:AC:47:43:00, Duration field 81 us.
- NPCA precedent cited in the document: NPCA Minimum Duration Threshold = 512 + NMDT x 128 us (512 us to 2432 us), clause 37.18.3.

## Key technical points (ZH)
- **DCN 11-26-2379r0 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2379&is_year=2026) LB296 CR for P-EDCA CID 14072。Pei Zhou（TCL）。第 37.2.2 条；基线 TGbn D2.1；处理结果“Revised”。
- **DCN 11-26-2208r3 / 2209r3 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2208&is_year=2026) / [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2209&is_year=2026) LB296 无缝漫游技术评议处理，第 1、2 部分。Duncan Ho（Qualcomm）。摘要列出 38 个和 36 个 CID；r3 从第 1 部分删除 5 个 CID、从第 2 部分删除 1 个。
- **DCN 11-26-2380r2 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2380&is_year=2026) 11 月至 1 月 TGbn 电话会议议程。Alfred Asterjadhi（Qualcomm）。总览列出：11 月 23 日（MAC，19:00-21:00 ET）、11 月 30 日（MAC/PHY）、12 月 3、10、17 日（Joint，10:00-12:00 ET）、12 月 7、21 日（MAC）、12 月 14 日（MAC/PHY），12 月 22 日至 1 月 8 日标为假期/Ad-hoc。11 月 23 日议程列出的优先 CR 提交：2208（42C）、2209（38C）、2267（NPCA 编辑性修改，Dongju Cha，13C）、2305（Roaming Preparation Deletion，Pooya Monajemi，12C）。
- 11-26/2379r0 中的 P-EDCA 拟议文字：一条 NOTE，称 P-EDCA STA“can consider”是否有足够时间完成 DS-CTS、竞争、ICF/ICR 交互，以及至少一次 Data 与 Ack/BA 交换或 AC_VO 中的管理帧。摘录还重述了 DS-CTS 规则：以 non-HT 或 non-HT duplicate PPDU 在 6 Mb/s 下发送，RA 为 00:0F:AC:47:43:00，Duration 字段为 81 µs。
- 文档引用的 NPCA 先例：NPCA Minimum Duration Threshold = 512 + NMDT × 128 µs（512 µs 至 2432 µs），第 37.18.3 条。

## Why it matters / what's new (EN)
The seamless-roaming CRs were first covered at r0 in 2026-11-04_ieee-mentor-tgbn-lb296-smd-seamless-roaming-cr-digest (42 and 38 CIDs); this entry records the r3 abstract counts and the per-revision changes the documents list, so the CID totals in the two entries differ because CIDs were added and removed across revisions. The P-EDCA item is a new DCN (not previously ingested here) that resolves a single CID rather than introducing a new mechanism. Its text uses the informative wording "can consider", whereas the original comment says "should". Whether any of these documents was adopted is not known from the uploads; the agenda lists the roaming CRs among the prioritized submissions for the 23 November call.

## Why it matters / what's new (ZH)
无缝漫游 CR 在 2026-11-04_ieee-mentor-tgbn-lb296-smd-seamless-roaming-cr-digest 中以 r0 首次收录（42 个与 38 个 CID）；本条记录 r3 摘要中的 CID 数量及文档列出的各版本变化，因此两条之间的 CID 总数不同，是因为各版本中有 CID 被增加与删除。P-EDCA 一项是知识库此前未收录的新 DCN，仅处理单个 CID，并非新机制；其文字采用说明性措辞“can consider”，而原意见写的是“should”。这些文档是否被采纳无法从上传内容得知；议程将漫游 CR 列入 11 月 23 日电话会议的优先提交项。
