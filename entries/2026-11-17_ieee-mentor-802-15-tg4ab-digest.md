---
id: 2026-11-17_ieee-mentor-802-15-tg4ab-digest
date_published: 2026-11-16
date_found: 2026-11-17
technology: uwb
type: ieee-document
title_en: "IEEE 802.15 TG4ab Mentor digest — 2026-11-17 (November plenary minutes: session-by-session record of straw polls, discussion comments and motions #44-#57 on P802.15.4ab D05 comment resolutions)"
title_zh: "IEEE 802.15 TG4ab Mentor 当日摘要 — 2026-11-17（11 月全会会议纪要：P802.15.4ab D05 意见处理的分场次记录，含民意调查、讨论意见与动议 #44-#57）"
url: "https://mentor.ieee.org/802.15/documents?is_dcn=535&is_year=2026"
source_quality: full
topics: [TG4ab, 802.15.4ab, SA ballot recirculation, comment resolution, minutes, straw poll, listen-before-talk, NB channel access, optional deferral, security initialization]
topic_primary: uwb-ranging
topics_secondary: [uwb-security]
novelty_score: 2
---

## Summary (EN)

On 16 November 2026 (ET, 02:43) Qingrui Pan (Huawei) uploaded DCN 15-26-0535r0, "TG4ab 2026 Nov Plenary Mins", the official minutes of the IEEE 802.15 TG4ab (NG-UWB) sessions at the November 2026 plenary, held in hybrid mode. The body was downloaded and read. It is a session-by-session record (Monday 9 November PM1 through Thursday 12 November PM1, with the chair, Ben Rolfe, Blind Creek Associates, calling each session to order and more than 20 attendees at each). It reports the group's own record and is not an 802.15 Working Group decision. The closing report and motion sheet uploaded on 12 November were digested on 2026-11-16; the minutes add the discussion comments, the vote counts of the three straw polls and the session in which each item was heard.

Monday PM1 (9 November): the agenda (15-26-0450-02) passed by unanimous consent. Wenzheng Li (Calterah Semiconductor) presented 15-26-0457-00 on SA ballot comments R1-265, R1-266, R1-268, R1-295, R1-204 and R1-298; comments noted concerns about the interpretation of the block index and round index and inconsistencies between the 7-bit and 16-bit representations, and that some proposed resolutions might need "revised" rather than "accepted" dispositions because additional technical changes are required. Rojan Chitrakar (Huawei) presented 15-26-0447-02 (rogue security comments) and 15-26-0448-01 (security initialization and setup); for the latter, concerns were raised about whether the proposed additional security functionality is justified by the identified risks, the complexity and review effort, and alternatives such as documenting the rejection rationale were discussed. Straw poll on incorporating the changes in 15-26-0448-01 into the next draft: Yes 62%, No 37%, 19 votes. Motion #44 (Rogue-04, -11, -12, -15, -16, -17, -19, -20, -21, -22, -23, -25, -30, -31 in 0447-02; moved Chitrakar, seconded Billy Verso) and Motion #45 (Rogue-18 and Rogue-24 in 0462-01; moved Verso, seconded Chitrakar) carried by unanimous consent.

Tuesday AM1 (10 November): Menzo Wentink (Qualcomm Technologies) presented 15-26-0365-03 "Text changes for optional deferral"; concerns were raised that the mechanism may not provide meaningful coexistence improvement with wideband Wi-Fi operation and whether it differs substantially from the previous version. Straw poll on incorporating 0365-03 into the next draft: Yes 41%, No 59%, 27 votes. Pooria Pakrooh (Qualcomm) presented 15-26-0458-00 on NB channel access comments; in Q&A the presenter explained that the proposed duty-cycle calculation applies before each individual transmission, with a 200 ms observation window and a 7% threshold, rather than accumulating transmission durations across the whole ranging session; comments raised concerns about the clarity of the definition, applicability to different environments and use cases, and whether the supporting analysis covers the relevant scenarios. Straw poll on whether further effort by the authors of 0458-00 will result in technical consensus on similar changes: Yes 45%, No 55%, 40 votes. Taeyoung Ha (Samsung Electronics) presented 15-26-0460-04 and -05 on R1-317; Motion #46 carried by unanimous consent.

Wednesday AM1.5 and PM1 (11 November): Xiliang Luo (Apple) presented 15-26-0484-00 (Rogue-40) and 15-26-0456-00 (comment resolutions for D05). In Q&A on 0456-00, whether a numerical value should be defined for a proposed measurement requirement was discussed; concerns were raised that choosing a value without sufficient measurement data could introduce an inappropriate requirement, and about reporting unnecessary MCS-related parameters adding MAC interface overhead; the proposal was to be revised. Pakrooh presented 15-26-0508-00 (R1-295); in Q&A the proposal changes the orientation-related fields to signed one-byte values, the two-byte resolution being considered unnecessary for practical applications. Motion #47 (Rogue-40, 0484-00) and Motion #48 (R1-295, 0508-00) carried by unanimous consent. In the PM1 session Li presented 15-26-0457-01; the question of whether the NB MMS exception is necessary for Hyper Block Mode was to be checked offline. Motion to Amend #49 (R1-50, R1-13 and R1-17 in 0417-01; moved Michael Maman, seconded Verso) is recorded as Y/N/A 24/14/7, "Motion fails".

Thursday AM2 and PM1 (12 November): Alex Krebs (Apple) presented 15-26-0524-00 (LBT comments); the recorded comments include concerns that LBT could significantly affect Wi-Fi channel access, with the presented results indicating Wi-Fi packet transmission could be severely impacted, and a question whether the approach provides balanced coexistence. Li presented 15-26-0457-02; Motion #50 (R1-265, R1-266, R1-268, R1-204, R1-298) and Motion #53 (R1-270 in 0408-02; moved Krebs, seconded Li) carried by unanimous consent. In PM1: Motion #55 (a 34-comment group in 0524-00, moved Krebs, seconded Verso) is recorded as Y/N/A 20/15/1, "Motion Fails"; Motion #52 (R1-209 and R1-42 in 0456-02; moved Luo, seconded Pakrooh) 25/2/3, passes; Motion #56 (editorial comments on the Comments and Rogue tabs of 15-26-0380-15, except R1-274; moved Verso, seconded Alex Krebs) and Motion #57 (moved Verso, seconded Clint Chaplin; Rogue-01, -02, -03, -05, -06, -07, -08, -09, -10, -13, -14, -27, -28, -29, -32) carried by unanimous consent; Motion #38 (32 comments in 0458-00; moved Pakrooh, seconded Li) 14/23/0, fails. A conference-call schedule was proposed: 06:00 PT 24 November, 14:00 PT 1 December, 22:00 PT 8 December (60 minutes each, repeating on a rotating basis). The meeting recessed at 3:09 PM.

## Summary (ZH)

2026 年 11 月 16 日（美东 02:43），Qingrui Pan（华为）上传 DCN 15-26-0535r0《TG4ab 2026 Nov Plenary Mins》，即 IEEE 802.15 TG4ab（NG-UWB）2026 年 11 月全会（混合模式）的官方会议纪要。正文已下载并阅读。纪要按场次记录（11 月 9 日周一 PM1 至 11 月 12 日周四 PM1；主席 Ben Rolfe，Blind Creek Associates；每场超过 20 人参会），是该小组自身的记录，并非 802.15 工作组的决定。11 月 12 日上传的闭幕报告与动议表已在 2026-11-16 摘要中收录；本纪要补充了讨论意见、三次民意调查的票数以及各议题所在场次。

周一 PM1（11 月 9 日）：议程（15-26-0450-02）一致同意通过。Wenzheng Li（Calterah Semiconductor）介绍 15-26-0457-00（SA 投票意见 R1-265、R1-266、R1-268、R1-295、R1-204、R1-298）；意见包括对 block index 与 round index 解释的疑虑、7 比特与 16 比特表示不一致，以及部分拟定处理可能因需要额外技术修改而应为 revised 而非 accepted。Rojan Chitrakar（华为）介绍 15-26-0447-02（rogue 安全意见）与 15-26-0448-01（安全初始化与建立）；对后者，有意见质疑所提议的新增安全功能是否有已识别风险作依据、复杂度与评审工作量，并讨论了在意见处理中记录驳回理由等替代做法。关于是否将 15-26-0448-01 的修改纳入下一版草案的民意调查：是 62%，否 37%，共 19 票。动议 #44（0447-02 中的 Rogue-04、-11、-12、-15、-16、-17、-19、-20、-21、-22、-23、-25、-30、-31；Chitrakar 提出，Billy Verso 附议）与动议 #45（0462-01 中的 Rogue-18、Rogue-24；Verso 提出，Chitrakar 附议）均以一致同意通过。

周二 AM1（11 月 10 日）：Menzo Wentink（Qualcomm Technologies）介绍 15-26-0365-03《Text changes for optional deferral》；意见包括该机制可能无法对与宽带 Wi-Fi 共存带来实质改善，以及与上一版相比是否有重大技术变化。关于是否将 0365-03 纳入下一版草案的民意调查：是 41%，否 59%，共 27 票。Pooria Pakrooh（Qualcomm）介绍 15-26-0458-00（NB 信道接入意见）；问答中报告人说明，所提占空比计算在每次单独发送之前进行，观察窗口为 200 ms，阈值为 7%，而非在整个测距会话内累计发送时长；意见涉及定义的清晰度、对不同环境与用例的适用性，以及支撑分析是否覆盖相关场景。关于作者继续工作能否就类似修改达成技术共识的民意调查：是 45%，否 55%，共 40 票。Taeyoung Ha（Samsung Electronics）介绍 15-26-0460-04 与 -05（R1-317）；动议 #46 以一致同意通过。

周三 AM1.5 与 PM1（11 月 11 日）：Xiliang Luo（Apple）介绍 15-26-0484-00（Rogue-40）与 15-26-0456-00（D05 意见处理）。关于 0456-00，问答讨论了是否应为所提测量要求定义具体数值；有意见认为在缺乏足够测量数据时选定数值可能引入不当要求，并担心上报不必要的 MCS 相关参数会增加 MAC 接口开销；提案将修订。Pakrooh 介绍 15-26-0508-00（R1-295）；问答中说明该提案将方向相关字段改为有符号单字节，因两字节所提供的分辨率被认为对实际应用并无必要。动议 #47（Rogue-40，0484-00）与动议 #48（R1-295，0508-00）以一致同意通过。PM1 中 Li 介绍 15-26-0457-01；NB MMS 例外对 Hyper Block Mode 是否必要的问题留待会后核查。修订动议 #49（0417-01 中的 R1-50、R1-13、R1-17；Michael Maman 提出，Verso 附议）记录为 Y/N/A 24/14/7，“Motion fails”。

周四 AM2 与 PM1（11 月 12 日）：Alex Krebs（Apple）介绍 15-26-0524-00（LBT 意见）；记录的意见包括：LBT 可能显著影响 Wi-Fi 信道接入，所展示结果表明 Wi-Fi 分组发送可能受到严重影响，以及该方案是否能带来均衡共存。Li 介绍 15-26-0457-02；动议 #50（R1-265、R1-266、R1-268、R1-204、R1-298）与动议 #53（0408-02 中的 R1-270；Krebs 提出，Li 附议）以一致同意通过。PM1：动议 #55（0524-00 中 34 条意见的一组；Krebs 提出，Verso 附议）记录为 Y/N/A 20/15/1，“Motion Fails”；动议 #52（0456-02 中的 R1-209 与 R1-42；Luo 提出，Pakrooh 附议）25/2/3 通过；动议 #56（15-26-0380-15 中 Comments 与 Rogue 页签上的编辑性意见，R1-274 除外；Verso 提出，Alex Krebs 附议）与动议 #57（Verso 提出，Clint Chaplin 附议；Rogue-01、-02、-03、-05、-06、-07、-08、-09、-10、-13、-14、-27、-28、-29、-32）以一致同意通过；动议 #38（0458-00 中 32 条意见；Pakrooh 提出，Li 附议）14/23/0 未通过。纪要还提出了电话会议安排：11 月 24 日 06:00 PT、12 月 1 日 14:00 PT、12 月 8 日 22:00 PT（每次 60 分钟，之后轮换重复）。会议于 3:09 PM 休会。

## Key technical points (EN)

- **DCN 15-26-0535r0 · TG4ab** — plenary minutes (Pan, Huawei, 16 Nov 02:43 ET): sessions Mon 9 Nov PM1 to Thu 12 Nov PM1, >20 attendees each. [document](https://mentor.ieee.org/802.15/documents?is_dcn=535&is_year=2026)
- Straw polls recorded: 15-26-0448-01 (security initialization and setup) Yes 62% / No 37% (19 votes); 15-26-0365-03 (optional deferral) Yes 41% / No 59% (27 votes); 15-26-0458-00 (further effort toward consensus on NB channel access changes) Yes 45% / No 55% (40 votes).
- 15-26-0458-00 Q&A: the proposed duty-cycle check applies before each transmission with a 200 ms observation window and a 7% threshold, not accumulated across the ranging session.
- 15-26-0508-00 (R1-295): orientation-related fields changed to signed one-byte values; Motion #48 carried by unanimous consent.
- Motions carried by unanimous consent: #44, #45, #46, #47, #48, #50, #53, #56, #57. Motion to Amend #49 fails 24/14/7; #52 passes 25/2/3; #55 fails 20/15/1; #38 fails 14/23/0.
- The recorded #55 count (20/15/1) differs from the 20/13/1 reported in the closing report digested on 2026-11-16; this entry reports each document's own figure.
- Proposed conference calls: 24 Nov 06:00 PT, 1 Dec 14:00 PT, 8 Dec 22:00 PT (60 min each, rotating).

## Key technical points (ZH)

- **DCN 15-26-0535r0 · TG4ab** — 全会纪要（Pan，华为，11 月 16 日 02:43 ET）：11 月 9 日周一 PM1 至 11 月 12 日周四 PM1 各场次，每场超过 20 人。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=535&is_year=2026)
- 记录的民意调查：15-26-0448-01（安全初始化与建立）是 62% / 否 37%（19 票）；15-26-0365-03（可选 deferral）是 41% / 否 59%（27 票）；15-26-0458-00（继续努力能否就 NB 信道接入修改达成共识）是 45% / 否 55%（40 票）。
- 15-26-0458-00 问答：所提占空比检查在每次发送前进行，观察窗口 200 ms，阈值 7%，而非在测距会话内累计。
- 15-26-0508-00（R1-295）：方向相关字段改为有符号单字节；动议 #48 以一致同意通过。
- 以一致同意通过的动议：#44、#45、#46、#47、#48、#50、#53、#56、#57。修订动议 #49 以 24/14/7 未通过；#52 以 25/2/3 通过；#55 以 20/15/1 未通过；#38 以 14/23/0 未通过。
- 纪要中 #55 的票数（20/15/1）与 2026-11-16 摘要所述闭幕报告中的 20/13/1 不一致；本条目按各文档自身数字如实记录。
- 拟定电话会议：11 月 24 日 06:00 PT、12 月 1 日 14:00 PT、12 月 8 日 22:00 PT（各 60 分钟，轮换）。

## Why it matters / what's new (EN)

The minutes give a narrative record of how the November plenary items were discussed: which proposals drew concerns (security initialization additions, optional deferral, the NB channel-access duty-cycle rules, LBT) and the straw-poll splits behind them. Two of the three straw polls recorded here show a No majority: on incorporating 0365-03 as presented (41/59) and on whether further effort on 0458-00 would reach consensus (45/55), while the security initialization poll shows a 62% Yes. This says nothing about the group's earlier history on these topics. See the 2026-11-16 digest for the closing report and motion sheet, and the 2026-10-26 and 2026-10-28 digests for the earlier revisions of 0365 and 0458.

## Why it matters / what's new (ZH)

本纪要以叙述形式记录了 11 月全会各议题的讨论情况：哪些提案引发了疑虑（安全初始化新增功能、可选 deferral、NB 信道接入占空比规则、LBT）及其背后的民意调查分布。三次民意调查中有两次为反对多数：是否按现状纳入 0365-03（41/59），以及 0458-00 继续工作能否达成共识（45/55），而安全初始化一项为 62% 赞成。这并不说明该小组在这些议题上的既往历史。闭幕报告与动议表见 2026-11-16 摘要，0365 与 0458 的早期版本见 2026-10-26 与 2026-10-28 摘要。
