---
id: 2026-11-11_ieee-mentor-802-15-tg4ab-digest
date_published: 2026-11-09
date_found: 2026-11-11
technology: uwb
type: ieee-document
title_en: "IEEE 802.15 TG4ab Mentor digest — 2026-11-11 (November plenary slides: comment-resolution status and straw polls; R1-317 revision 5 adds a Round Index field to the Start of Ranging compact frame)"
title_zh: "IEEE 802.15 TG4ab Mentor 当日摘要 — 2026-11-11（11 月全会幻灯片：意见处理进度与意向投票；R1-317 第 5 版在 Start of Ranging 紧凑帧中新增 Round Index 字段）"
url: "https://mentor.ieee.org/802.15/documents?is_dcn=491&is_year=2026"
source_quality: full
topics: [TG4ab, 802.15.4ab, SA ballot recirculation, comment resolution status, straw poll, Start of Ranging, Block Index, Round Index, NBA MMS, STS]
topic_primary: uwb-ranging
topics_secondary: [uwb-security]
novelty_score: 2
---

## Summary (EN)

On 9 November 2026 (ET) TG4ab uploaded revisions of its November plenary materials and one new comment-resolution revision. Comment-resolution documents carry the standard notice that they do not represent the agreed views of the 802.15 WG or TG4ab. The IG FG UWB uploads of the following day (10 November) are covered in the IG FG UWB digest of the same date.

DCN 15-26-0491r3, "TG Meeting Slides November 2026" (Benjamin Rolfe, Blind Creek Associates; revisions r0 to r3 uploaded 9 November, r3 at 22:06 ET), is the TG4ab deck for the November 2026 LMSC plenary, held mixed-mode from Bangkok and remotely. Task-group leadership on its slides: chair Benjamin Rolfe, vice chair Clint Chaplin, recording secretary Qingrui Pan (Huawei), working group chair Clint Powell. It restates the approved project scope, which covers additional coding, preamble and modulation schemes for improved link budget and/or reduced air-time, additional channels and operating frequencies, interference mitigation, improvements to accuracy, precision, reliability and interoperability for high-integrity ranging, tightly coupled hybrid operation with narrowband signalling to assist UWB, enhanced native discovery and connection setup, sensing capabilities for presence detection and environment mapping, and low-power low-latency streaming as well as high data-rate streaming allowing at least 50 Mb/s of throughput. Slide 37 gives the ballot-comment status from the Consolidated Comments Draft D05 workbook (DCN 15-26-0380-15): 316 comments in total, 264 with a non-blank resolution (83.54 percent) and 52 with a blank resolution (16.46 percent); of the resolved ones 64 are "Rejected" (20.25 percent), 160 "Accepted" (50.63 percent) and 40 "Revised" (12.66 percent). The deck's "TG Motions" and straw-poll slides record two polls (the slides give no date): on whether the changes proposed in 15-26-0448-01 (the security initialization/setup resolutions, Huawei) should be incorporated in the next P802.15.4ab draft, 63 percent yes and 37 percent no of 19 votes; and on whether further discussion and effort by the authors of 15-26-0458-00 would result in technical consensus to make changes to the draft similar to those it proposes, 18 yes and 22 no. The same section records three motions, each carried by unanimous consent: Motion #45 (Rogue comments in 15-26-0447-02), Motion #46 (Rogue-18 and Rogue-24 in 15-26-0462-01) and Motion #47 (R1-317 in 15-26-0460-05), each to approve the resolutions and incorporate the text changes into the latest P802.15.4ab draft. The accompanying agenda workbook (DCN 15-26-0450r4, "TG Agenda Details Nov 2026") and the motion sheet (DCN 15-26-0277r10, "P802.15.4ab Comment Resolution Motions", Benjamin Rolfe) were also revised; the motion sheet lists the motion texts for R1-317 in 15-26-0460-05, Rogue-18 and Rogue-24 in 15-26-0462-01, and the Rogue comments in 15-26-0447-02, among others; the meeting deck records the outcomes listed above.

DCN 15-26-0460r5, "Resolution of SA ballot comments R1-317" (Taeyoung Ha, Samsung; 9 November 21:22 ET), continues the Start of Ranging message-control-2 resolution covered on 6 and 10 November (r2 and r4). Its revision note for r5 reads: added a Round Index field in the Start of Ranging (SOR) and Public SOR compact frame for message control value one, and replaced the Starting Block Index field with a Block Index field. The text changes in r5 replace the "Starting Block Index" field with "Block Index" and add a "Round Index" field after it in Figure 92 (Message Content field of the Start of Ranging compact frame when Message Control is one) and in Figure 144 (the Public Start of Ranging compact frame), replace all occurrences of the "Starting Round Index" field with "Block Index" throughout the specification, and replace the "Starting Block Index Present" field with "Reserved" in the presence-bitmap figure (Figure 78, clause 10.39.11.1.3.14). The description now states that the Block Index and Round Index fields, if present, indicate the index of the first ranging block for a ranging session. A new sentence in the STS generation DRBG clause (16.2.9.2) says that the Block Index and Round Index fields described in 10.39.11.3.4 can be used to synchronize the value of V between an HRP-ARDEV that joins an on-going NBA MMS UWB one-to-many ranging session and the HRP-ARDEVs already in the session, when the ranging exchange employs the STS.

## Summary (ZH)

2026 年 11 月 9 日（美东时间），TG4ab 上传了 11 月全会材料的修订版及一份新的意见处理修订版。意见处理文档均声明不代表 802.15 工作组或 TG4ab 的一致意见。次日（11 月 10 日）IG FG UWB 的上传内容见同一日期的 IG FG UWB 摘要。

DCN 15-26-0491r3《TG Meeting Slides November 2026》（Blind Creek Associates 的 Benjamin Rolfe；r0 至 r3 于 11 月 9 日上传，r3 为 22:06 ET）是 TG4ab 在 2026 年 11 月 LMSC 全会（曼谷现场与远程混合模式）上使用的幻灯片。幻灯片列出的任务组领导为：主席 Benjamin Rolfe、副主席 Clint Chaplin、记录秘书 Qingrui Pan（华为）、工作组主席 Clint Powell。幻灯片重述了已批准的项目范围，涵盖：用于改善链路预算和/或缩短空口时间的新增编码、前导码与调制方案；新增信道与工作频率；干扰缓解；提升高完整性测距的精度、准确度、可靠性与互操作性；以窄带信令辅助 UWB 的紧耦合混合运行；增强的原生发现与连接建立；用于存在检测和环境测绘的感知能力；以及低功耗低时延流传输和至少 50 Mb/s 吞吐量的高数据率流传输。第 37 页给出来自 Consolidated Comments Draft D05 工作簿（DCN 15-26-0380-15）的投票意见状态：共 316 条意见，其中 264 条已有非空处理结果（83.54%），52 条处理结果为空（16.46%）；已处理的意见中 64 条为“Rejected”（20.25%）、160 条为“Accepted”（50.63%）、40 条为“Revised”（12.66%）。幻灯片的“TG Motions”与意向投票页记录了两次投票（幻灯片未注明日期）：一是 15-26-0448-01（安全初始化/建立的处理方案，华为）所提修改是否应纳入下一版 P802.15.4ab 草案，63% 赞成、37% 反对，共 19 票；二是 15-26-0458-00 作者的进一步讨论和努力能否就类似其所提的草案修改形成技术共识，18 票赞成、22 票反对。同一部分还记录了三项动议，均以全体一致同意通过：动议 #45（15-26-0447-02 中的 Rogue 意见）、动议 #46（15-26-0462-01 中的 Rogue-18 与 Rogue-24）以及动议 #47（15-26-0460-05 中的 R1-317），内容均为批准相应处理方案并将文字修改纳入最新的 P802.15.4ab 草案。配套的议程工作簿（DCN 15-26-0450r4《TG Agenda Details Nov 2026》）与动议表（DCN 15-26-0277r10《P802.15.4ab Comment Resolution Motions》，Benjamin Rolfe）也已修订；动议表列出了包括 15-26-0460-05 中 R1-317、15-26-0462-01 中 Rogue-18 与 Rogue-24、15-26-0447-02 中各 Rogue 意见等在内的动议文本；会议幻灯片记录了上述结果。

DCN 15-26-0460r5《Resolution of SA ballot comments R1-317》（三星 Taeyoung Ha；11 月 9 日 21:22 ET）延续 11 月 6 日与 10 日摘要（r2、r4）中的 Start of Ranging 消息控制值 2 的处理。r5 的修订说明为：在消息控制值为 1 的 Start of Ranging（SOR）与 Public SOR 紧凑帧中增加 Round Index 字段，并将 Starting Block Index 字段替换为 Block Index 字段。r5 的文字修改包括：在图 92（消息控制为 1 时 Start of Ranging 紧凑帧的 Message Content 字段）和图 144（Public Start of Ranging 紧凑帧）中将“Starting Block Index”字段替换为“Block Index”，并在其后新增“Round Index”字段；在整个规范中将所有“Starting Round Index”字段替换为“Block Index”；在存在位图（图 78，10.39.11.1.3.14 条）中将“Starting Block Index Present”字段替换为“Reserved”。字段说明现为：Block Index 与 Round Index 字段（若存在）指示一次测距会话中第一个测距块的索引。STS 生成 DRBG 条款（16.2.9.2）新增一句：在测距交换使用 STS 时，10.39.11.3.4 中所述的 Block Index 与 Round Index 字段可用于使加入正在进行的 NBA MMS UWB 一对多测距会话的 HRP-ARDEV 与会话中已有的 HRP-ARDEV 之间的 V 值同步。

## Key technical points (EN)

- **DCN 15-26-0491r3 · TG4ab** — November plenary deck: comment status 316 total, 264 resolved (64 Rejected, 160 Accepted, 40 Revised), 52 blank; straw polls recorded at 63 percent yes of 19 votes for incorporating 15-26-0448-01 and 18 yes / 22 no on whether work on 15-26-0458-00 would reach consensus. Rolfe (Blind Creek Associates). [document](https://mentor.ieee.org/802.15/documents?is_dcn=491&is_year=2026)
- **DCN 15-26-0460r5 · TG4ab** — R1-317 revision 5: Start of Ranging and Public Start of Ranging compact frames (message control 1) get a Block Index plus a Round Index field in place of Starting Block Index; the same indices can synchronize the STS DRBG value V for a device joining an on-going NBA MMS one-to-many session. Samsung (Ha). [document](https://mentor.ieee.org/802.15/documents?is_dcn=460&is_year=2026)
- **DCN 15-26-0277r10 / 0450r4 · TG4ab** — motion sheet and agenda workbook revisions (chair); motion sheet lists R1-317 (15-26-0460-05); the meeting deck records it as carried by unanimous consent. [document](https://mentor.ieee.org/802.15/documents?is_dcn=277&is_year=2026)

## Key technical points (ZH)

- **DCN 15-26-0491r3 · TG4ab** — 11 月全会幻灯片：意见状态共 316 条，已处理 264 条（Rejected 64、Accepted 160、Revised 40），空白 52 条；意向投票记录为：纳入 15-26-0448-01 的修改 19 票中 63% 赞成；15-26-0458-00 的后续工作能否达成共识为 18 赞成 / 22 反对。Rolfe（Blind Creek Associates）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=491&is_year=2026)
- **DCN 15-26-0460r5 · TG4ab** — R1-317 第 5 版：Start of Ranging 与 Public Start of Ranging 紧凑帧（消息控制 1）以 Block Index 加 Round Index 字段取代 Starting Block Index；这两个索引还可用于使加入正在进行的 NBA MMS 一对多会话的设备同步 STS DRBG 的 V 值。三星（Ha）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=460&is_year=2026)
- **DCN 15-26-0277r10 / 0450r4 · TG4ab** — 动议表与议程工作簿修订（主席）；动议表列出 R1-317（15-26-0460-05）；会议幻灯片记录其已获全体一致同意通过。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=277&is_year=2026)

## Why it matters / what's new (EN)

The deck gives a snapshot of where the SA-ballot recirculation comment resolution stood during the November plenary, and the recorded straw polls on two proposals (15-26-0448-01 on security initialization/setup and 15-26-0458-00) show the group's split at the time of the polls. R1-317 r5 reworks the Start of Ranging compact-frame format (a Block Index and Round Index pair in place of Starting Block Index), and the deck records the motion to incorporate this resolution into the latest draft as carried by unanimous consent. The straw polls are indicative only.

## Why it matters / what's new (ZH)

幻灯片提供了 SA 投票重新征求意见阶段意见处理在 11 月全会期间的进度快照；所记录的两次意向投票（关于安全初始化/建立的 15-26-0448-01 与 15-26-0458-00）显示了投票时组内的意见分布。R1-317 第 5 版调整了 Start of Ranging 紧凑帧格式（以 Block Index 与 Round Index 一对字段取代 Starting Block Index），幻灯片记录将该处理方案纳入最新草案的动议已获全体一致同意通过。意向投票仅具参考性。

## Images

None.
