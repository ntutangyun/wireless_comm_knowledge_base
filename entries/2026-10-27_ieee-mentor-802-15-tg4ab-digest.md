---
id: 2026-10-27_ieee-mentor-802-15-tg4ab-digest
date_published: 2026-10-26
date_found: 2026-10-27
technology: uwb
type: ieee-document
title_en: "IEEE 802.15 TG4ab Mentor digest — 2026-10-27 (SA-ballot recirculation: MMS interleaving-mode figure/text fixes, RSS wording, time-interval-A tolerance and RIF RMARKER rejections)"
title_zh: "IEEE 802.15 TG4ab Mentor 当日摘要 — 2026-10-27（SA 投票再循环：MMS 交织模式图文修正、RSS 措辞、时间间隔容差与 RIF RMARKER 意见的拟否决）"
url: "https://mentor.ieee.org/802.15/documents?is_year=2026&is_group=04ab"
source_quality: full
topics: [TG4ab, 802.15.4ab, SA ballot recirculation, MMS, interleaving modes, DS-TWR, one-way ranging, RSS, RIF RMARKER]
topic_primary: uwb-ranging
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

Three new TG4ab comment-resolution documents were uploaded on 26 October 2026. All are proposals against P802.15.4ab Draft 5.0 (D05) in the SA-ballot first recirculation.

DCN 15-26-0454r0, "SA ballot R1 resolutions 17, 206, 275, 276, Rogue 36" (Riku Pirhonen, NXP; date submitted 25 October 2026), covers comments on subclause 10.39.7 (MMS ranging interleaving modes). R1-17 (Maman, missing combination of one-to-many MMS ranging and interleaving modes 2-3-5-6) is dispositioned without new text: the discussion says the exact one-to-many configuration is use-case specific and is left to the use-case developers, using the one-to-many compact frames of 10.39.11.3.9 to 10.39.11.3.12. R1-206 (Sun, unclear transmitter role in one-way ranging, 10.39.7.2.6): the word "initiator" is added so the transmitter is the initiator; the discussion states the standard specifies only the case where the one-way-ranging packet is used by the initiator. R1-275 (Rolfe): the third non-interleaved control-interval label in Figures 46 and 47 changes from mmsRcpPollNSlots to mmsRcpFinalNSlots, since the Final Message (10.39.11.3.20) was added in D05 without updating the figure labels. R1-276 (Rolfe): on page 90 line 8 "response" is replaced by "final" in the timing origin of the third-sub-round MMS packet. Rogue-36 (Billy Verso): hybrid DS-TWR (interleaving mode 4) is rewritten in 10.39.7.2.4 to use the final Compact frame, timed either from the initial poll Compact frame or, with retiming, from the received response Compact frame, and Figure 50 is corrected to mmsRcpFinalNSlots.

DCN 15-26-0455r0, "SA ballot R1 resolutions 43 and 52" (Sven Zeisberg, Zigpos), proposes "Accepted" for R1-43 and R1-52, both wording comments that "minimize"/"minimizing" could imply a guarantee. R1-43 is replaced by "reduce" on page 71 line 2 (the document notes the comment's subclause field was wrong and the line is in 10.39.3.3, the coordination function in MMS initialization and setup); R1-52 changes "minimizing" to "reducing" on page 221 line 8 (10.46.1, RSS overview). The document itself describes both as more editorial than technical.

DCN 15-26-0456r0, "Comment Resolutions for D05" (Xiliang Luo, Apple), proposes "Rejected" for two comments. R1-209 (Gruber, 10.39.1) asked for time interval A to be held within plus or minus 4 UWB chips of nominal to bound the receiver search window; the resolution text says the group discussed this for D04 comment I-287, that the NB radio path alone can show about 100 ns group delay with part-to-part variation exceeding that budget, that no reliable test tool is available, and that it would be revisited once measurement mechanisms, test setups and data exist. R1-42 (Verso, 8.3.2.3) asked to carry only the first and last RIF RMARKER values in the RangingReportDescriptor (Table 8-28); the resolution text says ranging integrity with RIFs would use the Ranging Measurement Information IE of 802.15.4me (10.29.8.4), that the raw Tx/Rx RIF RMARKERs need not be reported, and that Table 8-28 elements could be useful for potential use cases, so no change.

Also uploaded on 26 October 2026: DCN 15-26-0427r10 (agenda details Sept-Nov 2026, 17:11 ET). IG FG UWB had no new uploads; its latest remains DCN 15-26-0445r0 (November plenary agenda, 18 October).

## Summary (ZH)

2026 年 10 月 26 日新上传 3 份 TG4ab 意见处理文档，均为 SA 投票第一次再循环中针对 P802.15.4ab Draft 5.0（D05）的提案。

DCN 15-26-0454r0《SA ballot R1 resolutions 17, 206, 275, 276, Rogue 36》（NXP Riku Pirhonen，提交日期 2026 年 10 月 25 日）涉及 10.39.7 条（MMS 测距交织模式）的意见。R1-17（Maman，缺少一对多 MMS 测距与交织模式 2-3-5-6 的组合）不新增文本：讨论称具体的一对多配置取决于用例，交由用例开发方定义，可使用 10.39.11.3.9 至 10.39.11.3.12 的一对多紧凑帧。R1-206（Sun，10.39.7.2.6 单向测距中发送方角色不清）：加入“initiator”一词以明确发送方为发起方；讨论称标准仅规定单向测距包由发起方使用的情形。R1-275（Rolfe）：图 46、47 中第三个非交织控制间隔的标签由 mmsRcpPollNSlots 改为 mmsRcpFinalNSlots，原因是 D05 新增了 Final Message（10.39.11.3.20）而未更新图中标签。R1-276（Rolfe）：第 90 页第 8 行把第三子轮 MMS 包起始时间参考中的“response”改为“final”。Rogue-36（Billy Verso）：10.39.7.2.4 中的混合 DS-TWR（交织模式 4）改写为使用 final 紧凑帧，其时间可相对初始 poll 紧凑帧，或在重定时情形下相对收到的 response 紧凑帧，图 50 改用 mmsRcpFinalNSlots。

DCN 15-26-0455r0《SA ballot R1 resolutions 43 and 52》（Zigpos Sven Zeisberg）对 R1-43、R1-52 提议“Accepted”，两条均为“minimize/minimizing 可能暗示保证”的措辞意见。R1-43 在第 71 页第 2 行改为“reduce”（文档指出该意见的条款字段有误，实际位于 MMS 初始化与设置中的 10.39.3.3 协调功能）；R1-52 在第 221 页第 8 行（10.46.1 RSS 概述）把“minimizing”改为“reducing”。文档自称两者更偏编辑性而非技术性。

DCN 15-26-0456r0《Comment Resolutions for D05》（苹果 Xiliang Luo）对两条意见提议“Rejected”。R1-209（Gruber，10.39.1）要求时间间隔 A 与标称值偏差不超过 ±4 个 UWB chip，以限定接收机搜索窗口；处理文本称该议题已在 D04 意见 I-287 中讨论，仅 NB 射频通路的群时延即可达约 100 ns 且存在器件间差异，超出该预算，目前也无可靠的测试工具，待测量机制、测试环境与数据具备后再行复议。R1-42（Verso，8.3.2.3）要求在 RangingReportDescriptor（表 8-28）中仅携带首尾 RIF RMARKER 值；处理文本称带 RIF 的测距完整性将使用 802.15.4me（10.29.8.4）的 Ranging Measurement Information IE，无需上报原始 Tx/Rx RIF RMARKER，表 8-28 的元素对潜在用例可能有用，故不修改。

10 月 26 日另有上传：DCN 15-26-0427r10（9-11 月议程细节，17:11 ET）。IG FG UWB 无新上传，最新仍为 10 月 18 日的 DCN 15-26-0445r0（11 月全会议程）。

## Key technical points (EN)

- **DCN 15-26-0454r0 · TG4ab** — SA ballot R1 resolutions 17, 206, 275, 276, Rogue 36. Riku Pirhonen (NXP). Subclause 10.39.7: figure 46/47 labels to mmsRcpFinalNSlots, final compact frame in third sub-round and in hybrid DS-TWR (mode 4), "initiator" added to one-way ranging. [document](https://mentor.ieee.org/802.15/documents?is_dcn=454&is_year=2026)
- **DCN 15-26-0455r0 · TG4ab** — SA ballot R1 resolutions 43 and 52. Sven Zeisberg (Zigpos). "minimize" to "reduce" on pages 71 and 221; both proposed Accepted. [document](https://mentor.ieee.org/802.15/documents?is_dcn=455&is_year=2026)
- **DCN 15-26-0456r0 · TG4ab** — Comment Resolutions for D05 (R1-209, R1-42). Xiliang Luo (Apple). Both proposed Rejected: plus or minus 4 chip tolerance on interval A (about 100 ns NB group delay cited), RIF RMARKER reporting kept as is. [document](https://mentor.ieee.org/802.15/documents?is_dcn=456&is_year=2026)

## Key technical points (ZH)

- **DCN 15-26-0454r0 · TG4ab** — SA ballot R1 resolutions 17, 206, 275, 276, Rogue 36。Riku Pirhonen（NXP）。10.39.7 条：图 46/47 标签改为 mmsRcpFinalNSlots，第三子轮与混合 DS-TWR（模式 4）使用 final 紧凑帧，单向测距加入“initiator”。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=454&is_year=2026)
- **DCN 15-26-0455r0 · TG4ab** — SA ballot R1 resolutions 43 and 52。Sven Zeisberg（Zigpos）。第 71、221 页“minimize”改为“reduce”；均拟 Accepted。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=455&is_year=2026)
- **DCN 15-26-0456r0 · TG4ab** — Comment Resolutions for D05（R1-209、R1-42）。Xiliang Luo（苹果）。两条均拟 Rejected：时间间隔 A 的 ±4 chip 容差（文中引述 NB 通路约 100 ns 群时延）、RIF RMARKER 上报保持不变。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=456&is_year=2026)

## Why it matters / what's new (EN)

These are three further D05 comment-resolution proposals from NXP, Zigpos and Apple, continuing the stream digested on 2026-10-26. They are proposals by the named contributors; each document states it does not represent the agreed views of the IEEE 802.15 WG or the TG4ab task group.

## Why it matters / what's new (ZH)

这是来自 NXP、Zigpos 与苹果的三份 D05 意见处理提案，延续 2026-10-26 已摘要的文档流。以上均为所列贡献方的提案；各文档声明其不代表 IEEE 802.15 工作组或 TG4ab 任务组的一致意见。
