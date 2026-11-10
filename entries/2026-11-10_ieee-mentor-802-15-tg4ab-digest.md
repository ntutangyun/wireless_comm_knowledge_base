---
id: 2026-11-10_ieee-mentor-802-15-tg4ab-digest
date_published: 2026-11-09
date_found: 2026-11-10
technology: uwb
type: ieee-document
title_en: "IEEE 802.15 TG4ab Mentor digest — 2026-11-10 (TG4ab teleconference minutes Sep–Nov with comment-resolution motion outcomes; Rogue-40 resolution for 5800/6200 MHz O-QPSK bands; R1-317 revisions)"
title_zh: "IEEE 802.15 TG4ab Mentor 当日摘要 — 2026-11-10（TG4ab 9–11 月电话会议纪要及意见处理动议结果；Rogue-40 对 5800/6200 MHz O-QPSK 频段的处理；R1-317 修订）"
url: "https://mentor.ieee.org/802.15/documents?is_dcn=478&is_year=2026"
source_quality: full
topics: [TG4ab, 802.15.4ab, SA ballot recirculation, meeting minutes, comment resolution motions, O-QPSK, receiver interference rejection, Start of Ranging]
topic_primary: uwb-ranging
topics_secondary: [uwb-security]
novelty_score: 2
---

## Summary (EN)

Between 7 and 9 November 2026 (ET) TG4ab uploaded three substantive documents. IG FG UWB had no new uploads (latest remains DCN 15-26-0468r0, 4 November). Comment-resolution documents carry the standard notice that they do not represent the agreed views of the 802.15 WG or TG4ab.

DCN 15-26-0478r0, "TG4ab Conf Call Mins Sep to Nov 2026" (Qingrui Pan, Huawei; 7 November), is the official minutes of the TG4ab teleconferences of 29 September and 6, 13, 20 and 27 October and 3 November 2026, chaired by Ben Rolfe (Blind Creek Associates), with roughly 17 to 20 attendees per call. Each call records the legal reminders, the agenda approval and the documents presented. Motions recorded as passed by unanimous consent, each to approve the listed comment resolutions and incorporate the text changes into the latest P802.15.4ab draft: Motion 29 (R1-199, R1-26, R1-200, R1-27, R1-205, R1-304, R1-306 in 15-26-0420-00; 29 Sep); Motion 30 (R1-207, R1-218, R1-274, R1-313, R1-14, R1-283, R1-284, R1-288, R1-289 in 15-26-0426-02; 29 Sep); Motion 31 (R1-297 in 15-26-0414-00) and Motion 33 (R1-1 and R1-2 in 15-26-0380-07) on 6 Oct; Motion 35 (R1-315 in 15-26-0437-00) and Motion 32 (R1-314, R1-271, R1-316, R1-318, R1-272, R1-216, R1-217, R1-219, R1-220, R1-197, R1-196, R1-18, R1-279, R1-280, R1-202, R1-29, R1-203, R1-30, R1-285, R1-286, R1-291 and Rogue-26 in 15-26-0408-02) on 20 Oct; and on 27 Oct Motion 37 (R1-11 and R1-12 in 15-26-0440-02), Motion 39 (R1-206, R1-275, R1-276 and Rogue 36 in 15-26-0454-01), Motion 40 (R1-43 and R1-52 in 15-26-0455-01) and Motion 41 (Rogue-37, Rogue-38 and Rogue-39 in 15-26-0438-00). Motions recorded as failing: Motion 34 (R1-8 and R1-269 in 15-26-0281-12, 13 Oct; Y/N/A 6/5/3), Motion 36 (R1-35 in 15-26-0365-02, optional deferral, 27 Oct; 5/4/7) and Motion 43 (R1-50 and R1-13 in 15-26-0417-01, 3 Nov; 8/3/1, 72.7 percent).

The minutes also note discussion without a motion. On 13 Oct, document 15-26-0408-01 was to be revised as R2 by Alex Krebs for the next meeting and 15-26-0365-01 needed further revision. On 20 Oct, in the discussion of 15-26-0365-02, a question asked whether deferral would help when Wi-Fi occupies a very wide bandwidth; the presenter noted that deferral could switch bands or mitigate narrowband interference, while Alex Krebs questioned its value against wideband Wi-Fi, and a 6-bit offset field with a presence bit in the session configuration was proposed for signalling the deferred channel offset. On 3 Nov, 15-26-0447-01 drew a request to split the text into compact and non-compact frame procedures and to clarify the block/round index note; 15-26-0448-00 drew a question on whether the security risk justified the extent of the draft changes, the presenter was asked to provide the attack scenario, and discussion was deferred to the next meeting; and a question was raised on the optional one-to-many Final Compact Frame in 15-26-0417-01. The 3 November call recessed until the November face-to-face meeting.

DCN 15-26-0484r0, "Resolution of Comment: Rogue-40" (Xiliang Luo, Apple; 8 November), addresses comment Rogue-40 (Billy Verso, technical, clause 13.3.5, page 234 line 29), which says that base-standard clause 13.3.5 "Receiver interference rejection" lists the O-QPSK bands individually and 4ab did not modify it to include the new 5800 MHz and 6200 MHz bands. The document proposes the disposition Accepted: introduce the base-standard heading for 13.3.5 with editorial instructions, and in the first paragraph and the Table 13-5 caption replace "and 2450 MHz bands" with "2450 MHz, 5800 MHz, and 6200 MHz bands". It includes the base-standard text from P802.15-4me as screenshots.

DCN 15-26-0460r3 and r4, "Resolution of SA ballot comments R1-317" (Taeyoung Ha, Samsung; r4 dated 9 November), continue the Start of Ranging message-control-2 resolution covered in the 6 November digest (r2). Compared with r2, r4 rewords the explanation of which Start of Ranging fields the responder uses: it now names the UWB Channel, Allocated Relative Block index, Allocated Round Index and Allocated Slot Index fields to identify the time at which the RCM is transmitted, and adds a note that the RCM is transmitted by the controller in the first slot of each hyper block (as defined in 10.32.3.5). The statement about delivering missing configuration in a Poll compact frame changes from "shall" to "should" for the one-to-one (message control 1) and one-to-many (message control 7 or 8) cases.

Housekeeping folded in without separate summaries: the agenda details for the November meeting (DCN 450r1 to r3), the TG meeting slides for November 2026 (DCN 491r0 and r1) and the P802.15.4ab-related spreadsheets; these were not read.

## Summary (ZH)

2026 年 11 月 7 日至 9 日（美东时间），TG4ab 上传了 3 份实质性文档。IG FG UWB 无新上传（最新仍为 11 月 4 日的 DCN 15-26-0468r0）。意见处理文档均声明不代表 802.15 工作组或 TG4ab 的一致意见。

DCN 15-26-0478r0《TG4ab Conf Call Mins Sep to Nov 2026》（华为 Qingrui Pan；11 月 7 日）是 TG4ab 在 2026 年 9 月 29 日及 10 月 6、13、20、27 日和 11 月 3 日电话会议的正式纪要，由主席 Ben Rolfe（Blind Creek Associates）主持，每次约 17 至 20 人参会。每次会议记录了法律声明、议程通过及所讨论文档。以全体一致通过的动议（均为批准所列意见处理并将文字修改并入最新的 P802.15.4ab 草案）包括：动议 29（15-26-0420-00 中的 R1-199、R1-26、R1-200、R1-27、R1-205、R1-304、R1-306；9 月 29 日）；动议 30（15-26-0426-02 中的 R1-207、R1-218、R1-274、R1-313、R1-14、R1-283、R1-284、R1-288、R1-289；9 月 29 日）；10 月 6 日的动议 31（15-26-0414-00 中的 R1-297）与动议 33（15-26-0380-07 中的 R1-1、R1-2）；10 月 20 日的动议 35（15-26-0437-00 中的 R1-315）与动议 32（15-26-0408-02 中的 R1-314、R1-271、R1-316、R1-318、R1-272、R1-216、R1-217、R1-219、R1-220、R1-197、R1-196、R1-18、R1-279、R1-280、R1-202、R1-29、R1-203、R1-30、R1-285、R1-286、R1-291 与 Rogue-26）；以及 10 月 27 日的动议 37（15-26-0440-02 中的 R1-11、R1-12）、动议 39（15-26-0454-01 中的 R1-206、R1-275、R1-276 与 Rogue 36）、动议 40（15-26-0455-01 中的 R1-43、R1-52）和动议 41（15-26-0438-00 中的 Rogue-37、Rogue-38、Rogue-39）。记录为未通过的动议：动议 34（15-26-0281-12 中的 R1-8、R1-269，10 月 13 日；赞成/反对/弃权 6/5/3）、动议 36（15-26-0365-02 中的 R1-35，可选推迟，10 月 27 日；5/4/7）、动议 43（15-26-0417-01 中的 R1-50、R1-13，11 月 3 日；8/3/1，72.7%）。

纪要还记录了未形成动议的讨论。10 月 13 日，15-26-0408-01 将由 Alex Krebs 修订为 R2 供下次会议继续讨论，15-26-0365-01 需进一步修订。10 月 20 日讨论 15-26-0365-02 时，有人提问当 Wi-Fi 占用很宽带宽时推迟是否有帮助；报告人称推迟可用于切换频段或缓解窄带干扰，Alex Krebs 则质疑其对宽带 Wi-Fi 的价值；对推迟信道偏移的信令，提出在会话配置中使用 6 位偏移字段加一个存在位。11 月 3 日，15-26-0447-01 被要求将文字拆分为紧凑帧与非紧凑帧流程并澄清块/轮次索引的说明；15-26-0448-00 被问及该安全风险是否足以支撑草案的大量修改，报告人被要求提供攻击场景，讨论推迟至下次会议；15-26-0417-01 中可选的一对多 Final 紧凑帧也被提出疑问。11 月 3 日的会议休会至 11 月面对面会议。

DCN 15-26-0484r0《Resolution of Comment: Rogue-40》（Apple Xiliang Luo；11 月 8 日）处理意见 Rogue-40（Billy Verso，技术类，13.3.5 条，第 234 页第 29 行）：基础标准 13.3.5“Receiver interference rejection”逐一列出各 O-QPSK 频段，而 4ab 未修改该条以纳入新的 5800 MHz 与 6200 MHz 频段。文档建议处理为 Accepted：引入基础标准 13.3.5 的标题并添加编辑指令，在第一段及表 13-5 标题中将“and 2450 MHz bands”替换为“2450 MHz, 5800 MHz, and 6200 MHz bands”。文档以截图形式附有 P802.15-4me 基础标准文字。

DCN 15-26-0460r3 与 r4《Resolution of SA ballot comments R1-317》（三星 Taeyoung Ha；r4 日期 11 月 9 日）延续 11 月 6 日摘要（r2）中所述的 Start of Ranging 消息控制值 2 的处理。相比 r2，r4 改写了对响应方使用哪些 Start of Ranging 字段的说明：现明确用 UWB Channel、Allocated Relative Block index、Allocated Round Index 与 Allocated Slot Index 字段确定 RCM 的发送时间，并增加说明：RCM 由控制方在每个超块的第一个时隙发送（见 10.32.3.5）。关于通过 Poll 紧凑帧补充缺失配置的表述，对一对一（消息控制 1）与一对多（消息控制 7 或 8）两种情形均由“shall”改为“should”。

事务性文件已并入但未单独摘要：11 月会议议程详情（DCN 450r1 至 r3）、2026 年 11 月 TG 会议幻灯片（DCN 491r0、r1）及相关电子表格；这些文件未阅读。

## Key technical points (EN)

- **DCN 15-26-0478r0 · TG4ab** — official minutes of the 29 Sep to 3 Nov teleconferences: motions 29, 30, 31, 32, 33, 35, 37, 39, 40, 41 passed by unanimous consent; motions 34 (6/5/3), 36 (5/4/7) and 43 (8/3/1) failed. Huawei (Pan). [document](https://mentor.ieee.org/802.15/documents?is_dcn=478&is_year=2026)
- **DCN 15-26-0484r0 · TG4ab** — Rogue-40 (13.3.5 receiver interference rejection): proposed Accepted, add the 5800 MHz and 6200 MHz bands to the 2450 MHz wording. Apple (Luo). [document](https://mentor.ieee.org/802.15/documents?is_dcn=484&is_year=2026)
- **DCN 15-26-0460r4 · TG4ab** — R1-317: Start of Ranging message control 2; responder uses UWB Channel and allocated block/round/slot indices to find the RCM; RCM sent in the first slot of each hyper block; "shall" changed to "should" for Poll compact frame message control. Samsung (Ha). [document](https://mentor.ieee.org/802.15/documents?is_dcn=460&is_year=2026)

## Key technical points (ZH)

- **DCN 15-26-0478r0 · TG4ab** — 9 月 29 日至 11 月 3 日电话会议正式纪要：动议 29、30、31、32、33、35、37、39、40、41 全体一致通过；动议 34（6/5/3）、36（5/4/7）、43（8/3/1）未通过。华为（Pan）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=478&is_year=2026)
- **DCN 15-26-0484r0 · TG4ab** — Rogue-40（13.3.5 接收机干扰抑制）：建议 Accepted，在 2450 MHz 表述中加入 5800 MHz 与 6200 MHz 频段。Apple（Luo）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=484&is_year=2026)
- **DCN 15-26-0460r4 · TG4ab** — R1-317：Start of Ranging 消息控制值 2；响应方用 UWB Channel 及分配的块/轮次/时隙索引确定 RCM 时间；RCM 在每个超块第一个时隙发送；Poll 紧凑帧消息控制的“shall”改为“should”。三星（Ha）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=460&is_year=2026)

## Why it matters / what's new (EN)

The minutes record the outcomes of the TG4ab comment-resolution motions for the September to November teleconferences, including three motions that failed and the open discussion items carried to the November meeting. The resolution documents remain proposals by individual contributors, and the new revisions show the draft text still being adjusted (a missed band list in clause 13.3.5, and normative wording in the R1-317 resolution).

## Why it matters / what's new (ZH)

纪要记录了 9 月至 11 月电话会议期间 TG4ab 意见处理动议的记录结果，包括三项未通过的动议及留待 11 月会议的未决讨论事项。各处理文档仍为个别贡献方的提案，新修订表明草案文字仍在调整（13.3.5 条遗漏的频段列表，以及 R1-317 处理中的规范性措辞）。

## Images

None.
