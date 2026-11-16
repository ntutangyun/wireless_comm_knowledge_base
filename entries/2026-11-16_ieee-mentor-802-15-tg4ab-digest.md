---
id: 2026-11-16_ieee-mentor-802-15-tg4ab-digest
date_published: 2026-11-12
date_found: 2026-11-16
technology: uwb
type: ieee-document
title_en: "IEEE 802.15 TG4ab Mentor digest — 2026-11-16 (November plenary closing report records the motions on D05 comment resolutions; motion to adopt Apple's proposed rejections of 34 LBT comments fails 20/13/1, alternative resolutions also fail; R1-209 and R1-42 rejections carry 25/2/3)"
title_zh: "IEEE 802.15 TG4ab Mentor 当日摘要 — 2026-11-16（11 月全会闭幕报告记录 D05 意见处理动议；采纳 Apple 对 34 条 LBT 意见拟定驳回的动议以 20/13/1 未通过，替代处理亦未通过；R1-209 与 R1-42 的驳回以 25/2/3 通过）"
url: "https://mentor.ieee.org/802.15/documents?is_dcn=530&is_year=2026"
source_quality: full
topics: [TG4ab, 802.15.4ab, SA ballot recirculation, comment resolution, listen-before-talk, NBA MMS, narrowband coexistence, CCA mode, RIF RMARKER, closing report]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Between 11 and 12 November 2026 (ET) TG4ab uploaded its November-plenary closing report (DCN 15-26-0530 r0-r4), a final meeting-slide deck (491r4/r5), two Apple comment-resolution documents (15-26-0456 r1/r2 and 15-26-0524 r0), and revisions of the consolidated comments workbook (380r16), the motion sheet (277r12/r13) and the agenda workbook (450r6/r7). IG FG UWB uploaded nothing new in this window. The resolution documents carry the standard notice that they do not represent the agreed views of the 802.15 WG or TG4ab.

DCN 15-26-0530r4, "TG4ab Closing Report November 2026" (Benjamin Rolfe, chair, 12 November, 09:20 ET), is a slide deck for the 165th 802.15 session. Its comment-status slide reads 316 total comments, 277 with a non-blank resolution and 39 blank (all 39 assigned); of the 277 resolved, 70 are "Rejected", 162 "Accepted" and 45 "Revised". It records the straw polls and motions of the week as the group's own tally. Straw poll 1: whether the changes in 15-26-0448-01 (security initialization/setup, Huawei) should go into the next draft, 12 yes / 7 no. Straw poll 2: whether further effort by the authors of 15-26-0458-00 (NB channel access comments) will result in technical consensus on changes similar to those proposed, 18 yes / 22 no. Motions that carried by unanimous consent: #44 (Rogue-04, -11, -12, -15, -16, -17, -19, -20, -21, -22, -23, -25, -30, -31 in 0447-02), #45 (Rogue-18, -24 in 0462-01), #46 (R1-317 in 0460-05), #47 (Rogue-40 in 0484-00), #48 (R1-295 in 0508-00), #50 (R1-265, R1-266, R1-268, R1-204, R1-298 in 0457-02), #53 (R1-270 in 0408-02), #56 (editorial comments on the Comments and Rogue tabs of 380-15) and #57 (fifteen further Rogue comments). Motion #49 (R1-50, R1-13, R1-17 in 0417-01) is recorded as 24/14/7 "Motion fails", followed by a motion to amend its text that carried by unanimous consent; motion #54 (R1-8, R1-269) was withdrawn by the commenter. Motion #52 (R1-209 and R1-42 in 0456-02) carried 25/2/3. Motion #55, to adopt the proposed "Rejected" resolutions for a 34-comment group in 0524-00, failed 20/13/1; motion #38, to adopt the competing change-proposing resolutions for 32 of the same comments in 0458-00, failed 14/23/0. The deck lists the next conference calls (24 November, 1 December and 8 December).

DCN 15-26-0456r2, "Comment Resolutions for D05" (Xiliang Luo, Apple), proposes rejecting two comments. R1-209 (Gruber; clause 10.39.1, page 66) asks that the value of time interval A in NBA MMS not deviate by more than 4 UWB chips from nominal, to bound the receiver search window; the proposed resolution is "Rejected" because the group discussed this for D04 comment I-287 and little new information has become available, and it suggests that industry consortia can specify an appropriate tolerance when defining specifications that employ NBA MMS UWB ranging. R1-42 (Verso; clause 8.3.2.3, page 23) asks that only the first and last RIF RMARKER values be carried in the RangingReportDescriptor instead of an array of eight per direction; the proposed resolution is "Rejected" because ranging integrity with RIFs would use the Ranging Measurement Information IE in 802.15.4me (10.29.8.4) to report reply and round-trip times, so raw Tx/Rx RIF RMARKERs need not be reported, and the elements in Table 8-28 could be useful for other use cases.

DCN 15-26-0524r0, "P802.15.4ab sponsor ballot/D05 comment resolution -- LBT comments" (Alex Krebs, Apple, dated 12 November), proposes resolutions for 34 comments on listen-before-talk (LBT) and narrowband channel access, all with the proposed resolution "Rejected" and nearly every disposition (33 of 34) citing the CRG's earlier reply in DCN 15-26-0244r1. Examples: R1-188 and R1-212 ask to change "may use LBT" to "shall" in 10.39.4.2 (CRG answers: for R1-188, 802.15.4ab already coexists properly with other radios owing to favorable narrowband frequency-hopping (NBFH) characteristics; for R1-212, the draft already indicates via normative language that LBT is not mandatory); R1-190 asks to disallow CCA mode 4 (CRG answer: it is used successfully in billions of devices); R1-195 and R1-20 ask for energy-detect thresholds (CRG answer: parameters vary greatly across regulatory regimes, so implementers set them); R1-21 asks for mandatory LBT above a 3% duty cycle (CRG answer: 3% is not agreed to be a good compromise); R1-194 asks to limit mmsAquisitionChanNb to about four channels (CRG answer: this would restrict operation to 10 MHz of spectrum). The document's discussion section links measurements of 6 GHz Wi-Fi and narrowband coexistence in IEEE 802.11 DCN 11-26-0119-00 and quotes an 802.11bx document (11-26-1012-00) on contention delay and scheduling jitter in making its case.

Also uploaded and not digested separately: the final slide revisions (491r4/r5), consolidated comments workbook 380r16 (12 November, 03:13 ET, Chaplin), motion sheet 277r12/r13 (which, per its own notice, assists the chair; formal results are in the minutes) and agenda workbook 450r6/r7.

## Summary (ZH)

2026 年 11 月 11-12 日（美东时间），TG4ab 上传了 11 月全会闭幕报告（DCN 15-26-0530 r0-r4）、最终会议幻灯片（491r4/r5）、两份 Apple 意见处理文档（15-26-0456 r1/r2 与 15-26-0524 r0），以及汇总意见工作簿（380r16）、动议表（277r12/r13）和议程工作簿（450r6/r7）的修订版。该时段 IG FG UWB 无新上传。处理文档均声明不代表 802.15 工作组或 TG4ab 的一致意见。

DCN 15-26-0530r4《TG4ab Closing Report November 2026》（主席 Benjamin Rolfe，11 月 12 日 09:20 ET）为第 165 次 802.15 会议的闭幕幻灯片。其意见状态页显示：共 316 条意见，277 条已有非空处理、39 条为空（均已分配）；已处理的 277 条中 70 条为“Rejected”、162 条“Accepted”、45 条“Revised”。幻灯片按工作组自身记录列出本周的试探性投票与动议。试探性投票 1：0448-01（安全初始化/设置，华为）中的修改是否纳入下一版草案，12 赞成/7 反对。试探性投票 2：0458-00（NB 信道接入意见）作者的进一步努力能否就类似修改达成技术共识，18 是/22 否。以一致同意通过的动议：#44（0447-02 中的 Rogue-04、-11、-12、-15、-16、-17、-19、-20、-21、-22、-23、-25、-30、-31）、#45（0462-01 中的 Rogue-18、-24）、#46（0460-05 中的 R1-317）、#47（0484-00 中的 Rogue-40）、#48（0508-00 中的 R1-295）、#50（0457-02 中的 R1-265、R1-266、R1-268、R1-204、R1-298）、#53（0408-02 中的 R1-270）、#56（380-15 的 Comments 与 Rogue 页中的编辑性意见）以及 #57（另外十五条 Rogue 意见）。动议 #49（0417-01 中的 R1-50、R1-13、R1-17）记录为 24/14/7“Motion fails”，随后修改其文字的修正动议以一致同意通过；动议 #54（R1-8、R1-269）被意见提出者撤回。动议 #52（0456-02 中的 R1-209 与 R1-42）以 25/2/3 通过。动议 #55（采纳 0524-00 中对 34 条意见的拟定“Rejected”处理）以 20/13/1 未通过；动议 #38（采纳 0458-00 中针对其中 32 条意见、主张修改的竞争性处理）以 14/23/0 未通过。幻灯片还列出后续电话会议（11 月 24 日、12 月 1 日、12 月 8 日）。

DCN 15-26-0456r2《Comment Resolutions for D05》（Apple 的 Xiliang Luo）建议驳回两条意见。R1-209（Gruber；10.39.1 条，第 66 页）要求 NBA MMS 中时间间隔 A 的取值与标称值偏差不超过 4 个 UWB 码片，以限定接收机搜索窗口；拟定处理为“Rejected”，理由是 D04 意见 I-287 时工作组已讨论过，此后新信息不多，并建议由产业联盟在制定采用 NBA MMS UWB 测距的规范时给出合适的容差。R1-42（Verso；8.3.2.3 条，第 23 页）要求在 RangingReportDescriptor 中只携带首尾两个 RIF RMARKER 值，而不是每个方向八个值的数组；拟定处理为“Rejected”，理由是带 RIF 的测距完整性将使用 802.15.4me（10.29.8.4）中的 Ranging Measurement Information IE 报告回复时间与往返时间，因此无须报告原始 Tx/Rx RIF RMARKER，且表 8-28 中的元素可能对其他用例有用。

DCN 15-26-0524r0《P802.15.4ab sponsor ballot/D05 comment resolution -- LBT comments》（Apple 的 Alex Krebs，11 月 12 日）针对先听后说（LBT）与窄带信道接入的 34 条意见给出拟定处理，全部为“Rejected”，且几乎每条处理（34 条中的 33 条）均引用 CRG 在 DCN 15-26-0244r1 中的先前答复。示例：R1-188 与 R1-212 要求将 10.39.4.2 中的“may use LBT”改为“shall”（CRG 答复：对 R1-188，由于窄带跳频（NBFH）特性有利，802.15.4ab 已能与其他无线电良好共存；对 R1-212，草案已通过规范性用语表明 LBT 并非强制）；R1-190 要求禁用 CCA 模式 4（CRG 答复：该模式已在数十亿设备中成功使用）；R1-195 与 R1-20 要求给出能量检测门限（CRG 答复：各地监管差异很大，应由实现者设定）；R1-21 要求占空比超过 3% 时强制 LBT（CRG 答复：不认同 3% 是良好折中）；R1-194 要求把 mmsAquisitionChanNb 限制在约 4 个信道（CRG 答复：这会把工作频谱限制在 10 MHz）。文档的讨论部分链接了 IEEE 802.11 DCN 11-26-0119-00 中 6 GHz Wi-Fi 与窄带共存的测量，并引用 802.11bx 文档（11-26-1012-00）关于竞争时延与调度抖动的内容来支持其论点。

另有上传但未单独摘要：最终幻灯片修订版（491r4/r5）、汇总意见工作簿 380r16（11 月 12 日 03:13 ET，Chaplin）、动议表 277r12/r13（按其自身说明用于协助主席，正式结果见会议纪要）及议程工作簿 450r6/r7。

## Key technical points (EN)

- **DCN 15-26-0530r4 · TG4ab** — closing report: 316 comments, 277 resolved (70 Rejected / 162 Accepted / 45 Revised), 39 blank and assigned; motions #44-#48, #50, #53, #56, #57 carried by unanimous consent; #52 carried 25/2/3; #49 24/14/7 fails then amended text carries; #55 (adopt proposed rejections) fails 20/13/1; #38 (competing resolutions) fails 14/23/0. Chair (Rolfe). [document](https://mentor.ieee.org/802.15/documents?is_dcn=530&is_year=2026)
- **DCN 15-26-0456r2 · TG4ab** — R1-209 (tolerance of NBA MMS interval A) and R1-42 (RIF RMARKER reporting in Table 8-28) both proposed "Rejected". Apple (Luo). [document](https://mentor.ieee.org/802.15/documents?is_dcn=456&is_year=2026)
- **DCN 15-26-0524r0 · TG4ab** — 34 LBT / narrowband channel-access comments (e.g. R1-188, R1-190, R1-195, R1-21, R1-194) with proposed resolution "Rejected", citing 15-26-0244r1. Apple (Krebs). [document](https://mentor.ieee.org/802.15/documents?is_dcn=524&is_year=2026)
- **DCN 15-26-0380r16 / 0277r12-r13 / 0450r6-r7 / 0491r4-r5** — consolidated comments, motion sheet, agenda and slide revisions. [document](https://mentor.ieee.org/802.15/documents?is_dcn=380&is_year=2026)

## Key technical points (ZH)

- **DCN 15-26-0530r4 · TG4ab** — 闭幕报告：共 316 条意见，277 条已处理（70 Rejected / 162 Accepted / 45 Revised），39 条为空且已分配；动议 #44-#48、#50、#53、#56、#57 以一致同意通过；#52 以 25/2/3 通过；#49 为 24/14/7 未通过，随后修改后的文字通过；#55（采纳拟定驳回）以 20/13/1 未通过；#38（竞争性处理）以 14/23/0 未通过。主席（Rolfe）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=530&is_year=2026)
- **DCN 15-26-0456r2 · TG4ab** — R1-209（NBA MMS 时间间隔 A 的容差）与 R1-42（表 8-28 中 RIF RMARKER 的报告）均拟定“Rejected”。Apple（Luo）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=456&is_year=2026)
- **DCN 15-26-0524r0 · TG4ab** — 34 条 LBT/窄带信道接入意见（如 R1-188、R1-190、R1-195、R1-21、R1-194），拟定处理“Rejected”，引用 15-26-0244r1。Apple（Krebs）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=524&is_year=2026)
- **DCN 15-26-0380r16 / 0277r12-r13 / 0450r6-r7 / 0491r4-r5** — 汇总意见、动议表、议程与幻灯片修订。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=380&is_year=2026)

## Why it matters / what's new (EN)

The closing report records how the week's motions came out against the earlier resolution drafts the digests have covered (for example R1-317, R1-295, R1-265/266/268/204/298 and the Rogue comments), and it gives the group's own tally on the narrowband-channel-access question: neither competing resolution set for the LBT/CCA comments was approved (Apple's proposed rejections 20/13/1, the 0458-00 change-proposing resolutions 14/23/0) and the poll on further effort by the 0458-00 authors was 18 yes / 22 no. The Apple documents give the resolution text the group was voting on, including the stated reasons for not mandating LBT or fixing CCA thresholds in the amendment. These are task-group records of a ballot-resolution process on draft D05; the recorded outcomes are the group's, not a ratified standard.

## Why it matters / what's new (ZH)

闭幕报告记录了本周动议相对于此前摘要所涉处理草案（如 R1-317、R1-295、R1-265/266/268/204/298 及 Rogue 意见）的结果，并给出工作组对窄带信道接入问题的自身计票：针对 LBT/CCA 意见的两套相互竞争的处理均未获批准（Apple 拟定的驳回为 20/13/1，0458-00 主张修改的处理为 14/23/0），关于 0458-00 作者进一步努力的投票为 18 是/22 否。Apple 的文档给出了工作组投票时所依据的处理文字，包括不在修正案中强制 LBT 或固定 CCA 门限的理由。这些是工作组针对 D05 草案的投票意见处理记录，所记结果属于工作组，并非已批准的标准。

## Images

None.
