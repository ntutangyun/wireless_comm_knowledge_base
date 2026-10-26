---
id: 2026-10-26_ieee-mentor-tgbq-immw-clock-drift-sub7-beacon-critical-updates-digest
date_published: 2026-10-23
date_found: 2026-10-26
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbq Mentor digest — 2026-10-26 (IMMW clock-drift correction for scheduled service periods, DCN 2036r0; sub-7 GHz Beacon content and critical updates for the mmW link, DCN 1354r3)"
title_zh: "IEEE 802.11 TGbq Mentor 当日摘要 — 2026-10-26（IMMW 定时服务时段的时钟漂移校正，DCN 2036r0；sub-7 GHz Beacon 内容与毫米波链路关键更新，DCN 1354r3）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bq"
source_quality: full
topics: [TGbq, 802.11bq, IMMW, service period, TSF offset, critical update, Beacon, straw poll]
topic_primary: mmwave-bq
topics_secondary: [mlo]
novelty_score: 2
---

## Summary (EN)

TGbq uploaded two technical presentations on 23 October 2026 (the TGbq September-October teleconference agenda, DCN 11-26-1905r8, was also revised the same day). DCN 11-26-2036r0 (Qing Xia, Nokia) addresses clock drift between the mmW AP (M-AP) and mmW STA (M-STA) during scheduled service periods (SPs) on the IMMW link. DCN 11-26-1354r3 (Abhishek Patil et al., Qualcomm) is the third revision of the presentation on advertising mmW link information on the sub-7 GHz link.

DCN 2036r0 cites approved TGbq motions (it lists Motions 2, 3, 26, 29, 31, 106 and 111 in the MAC category) for the setting: beam establishment (BE) on the M-link is assisted by sub-7 GHz (S-link) signalling, the M-AP does not transmit Beacon frames, and timing for scheduled BE relies on cross-link timing information. Its problem statement is that infrequent TSF-offset updates may let clock drift accumulate between the last update and a scheduled SP, and that virtual-TBTT-based timing, derived from an advertised virtual TBTT offset and Beacon Interval in TU resolution, may not meet the tight synchronisation needed; misalignment may degrade scheduled BE and Data SPs, for example through missed receptions or delayed frame exchanges. Two solutions are proposed. One aligns M-link virtual TBTTs with S-link TBTTs, schedules SPs to begin immediately after the corresponding virtual Beacons, and has the S-STA pass updated virtual TBTT offsets, received in S-link Beacon frames, to the M-STA before the SP. The other has the S-AP send updated timing information (a current TSF offset or virtual TBTT offset between the S-link and M-link) shortly before each scheduled BE or Data SP, optionally using a supplemental SP on the S-link. The document ends with a straw poll asking whether TGbq should support clock-drift correction for an SP on the IMMW link through timing information signalled on the sub-7 GHz link before the SP. It references earlier contributions by LG Electronics (11-25/1563r2, 11-26/1298r0), Qualcomm (11-26/1646r0) and Intel (11-26/1710r1).

DCN 1354r3 states that TGbn has introduced rules to reduce the footprint of UHR and later generations in a Beacon frame, and that broadcast on the mmW band would have to be duplicated on every AP sector, so an IMMW AP MLD advertises mmW link information on its sub-7 GHz links. The design in the document has an affiliated sub-7 GHz AP leave the IMMW Operation and IMMW Capabilities elements out of its Beacon, announce the collocated mmW AP through the Reduced Neighbor Report (RNR) and Basic Multi-Link element, carry the complete profile in ML probe responses and (Re)Association Responses, reuse BTM/Neighbor Report with the operating class and channel identifying the mmW band, and convey changes through the existing critical-update mechanism. Compared with the revision recorded in [2026-10-14_ieee-mentor-tgbq-immw-sub7-discovery-timing-beam-establishment-digest](2026-10-14_ieee-mentor-tgbq-immw-sub7-discovery-timing-beam-establishment-digest.md) (r2), r3 adds a fourth straw poll (SP #4) on critical updates: the Critical Update Type field in the TIM element's Partial Virtual Bitmap is set to 2 for a critical update of the affiliated IMMW AP, the update follows the procedures of subclause 37.31 of the TGbn D2.1 draft, and a TBD field indicates that all updates since the last counter change are for IMMW APs. The other three straw polls cover Beacon/probe/association content (SP #1), the capabilities element in the non-AP STA's request frames (SP #2), and RNR/NR identification of the mmW band (SP #3).

## Summary (ZH)

TGbq 于 2026 年 10 月 23 日上传了两份技术演示（TGbq 9-10 月电话会议议程 DCN 11-26-1905r8 同日也有更新）。DCN 11-26-2036r0（Qing Xia，诺基亚）讨论 IMMW 链路上定时服务时段（SP）期间毫米波 AP（M-AP）与毫米波 STA（M-STA）之间的时钟漂移。DCN 11-26-1354r3（Abhishek Patil 等，高通）是关于在 sub-7 GHz 链路上通告毫米波链路信息的演示的第三版。

DCN 2036r0 引用已通过的 TGbq 动议（在 MAC 类别中列出动议 2、3、26、29、31、106 和 111）说明背景：M-link 上的波束建立（BE）由 sub-7 GHz（S-link）信令辅助，M-AP 不发送 Beacon 帧，定时 BE 依赖跨链路的时间信息。其问题陈述是：TSF 偏移更新不频繁时，时钟漂移可能在上次更新与定时 SP 之间累积；由通告的虚拟 TBTT 偏移和以 TU 为分辨率的 Beacon Interval 推导的虚拟 TBTT 定时，可能无法满足所需的严格同步；失步可能降低定时 BE 与数据 SP 的可靠性，例如造成接收丢失或帧交换延迟。文档提出两种方案：一是将 M-link 虚拟 TBTT 与 S-link TBTT 对齐，使 SP 紧跟对应的虚拟 Beacon 之后开始，并由 S-STA 在 SP 前将经 S-link Beacon 收到的更新虚拟 TBTT 偏移交给 M-STA；二是 S-AP 在每个定时 BE 或数据 SP 之前不久发送更新的时间信息（S-link 与 M-link 之间当前的 TSF 偏移或虚拟 TBTT 偏移），可选地在 S-link 上安排一个补充 SP。文档末尾是一项摸底投票：TGbq 是否应支持通过 SP 开始前在 sub-7 GHz 链路上发送的时间信息，对 IMMW 链路上的 SP 进行时钟漂移校正。文档引用了 LG 电子（11-25/1563r2、11-26/1298r0）、高通（11-26/1646r0）和英特尔（11-26/1710r1）的早期贡献。

DCN 1354r3 指出，TGbn 已引入规则以减小 UHR 及后续代在 Beacon 帧中的占用，而毫米波频段上的广播需要在 AP 的每个扇区上重复发送，因此 IMMW AP MLD 在其 sub-7 GHz 链路上通告毫米波链路信息。文档中的设计是：从属的 sub-7 GHz AP 在其 Beacon 中不包含 IMMW Operation 和 IMMW Capabilities 元素，通过 Reduced Neighbor Report（RNR）和 Basic Multi-Link 元素通告同址的毫米波 AP，在 ML 探测响应和（重）关联响应中携带完整配置，复用 BTM/邻居报告并以工作类别与信道标识毫米波频段，并通过现有关键更新机制传达变化。与 [2026-10-14_ieee-mentor-tgbq-immw-sub7-discovery-timing-beam-establishment-digest](2026-10-14_ieee-mentor-tgbq-immw-sub7-discovery-timing-beam-establishment-digest.md) 记录的 r2 相比，r3 新增第四个关于关键更新的摸底投票（SP #4）：对从属 IMMW AP 的关键更新，TIM 元素 Partial Virtual Bitmap 中的 Critical Update Type 字段置为 2，更新遵循 TGbn D2.1 草案 37.31 子条款的流程，并用一个待定（TBD）字段表示自上次计数器变化以来的所有更新均针对 IMMW AP。其余三项摸底投票涉及 Beacon/探测/关联内容（SP #1）、非 AP STA 请求帧中的能力元素（SP #2），以及通过 RNR/NR 识别毫米波频段（SP #3）。

## Key technical points (EN)

- **DCN 11-26-2036r0 · TGbq** — Clock Drift Correction for Scheduled SPs on IMMW Link. Qing Xia (Nokia). Two options: TBTT-aligned scheduling (M-link virtual TBTTs aligned with S-link TBTTs, SPs start right after the virtual Beacons) and pre-SP TSF/virtual-TBTT offset signalling on the S-link (optionally with a supplemental S-link SP); straw poll on supporting clock-drift correction for BE and/or Data SPs. [document](https://mentor.ieee.org/802.11/documents?is_dcn=2036&is_year=2026)
- **DCN 11-26-1354r3 · TGbq** — IMMW: Sub7 based discovery of mmW link. Abhishek Patil et al. (Qualcomm). Revision adds the critical-update straw poll (SP #4): Critical Update Type value 2 in the sub-7 GHz AP's TIM element, procedures of 37.31 (TGbn D2.1), and a TBD indicator for updates that apply only to the IMMW link; SP #1 to #3 cover Beacon/probe/association content, the capabilities element in non-AP request frames, and RNR/NR identification of the mmW band (BSS Information field gets a new 1-bit IMMW AP indicator; TBTT Information field size 17 octets with TBD additions). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1354&is_year=2026)
- Also uploaded 23-24 Oct, not detailed: TGbq September-October teleconference agenda (11-26-1905r8, Edward Au, Huawei).

## Key technical points (ZH)

- **DCN 11-26-2036r0 · TGbq** —— IMMW 链路上定时 SP 的时钟漂移校正。Qing Xia（诺基亚）。两种方案：TBTT 对齐调度（M-link 虚拟 TBTT 与 S-link TBTT 对齐，SP 紧跟虚拟 Beacon 之后开始）以及在 S-link 上于 SP 前发送 TSF/虚拟 TBTT 偏移（可选补充 S-link SP）；并有一项关于是否支持对 BE 和/或数据 SP 进行时钟漂移校正的摸底投票。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2036&is_year=2026)
- **DCN 11-26-1354r3 · TGbq** —— IMMW：基于 sub-7 GHz 的毫米波链路发现。Abhishek Patil 等（高通）。本版新增关键更新摸底投票（SP #4）：sub-7 GHz AP 的 TIM 元素中 Critical Update Type 取值 2、遵循 TGbn D2.1 的 37.31 流程，以及一个表示更新仅适用于 IMMW 链路的待定指示位；SP #1 至 #3 涉及 Beacon/探测/关联内容、非 AP 请求帧中的能力元素，以及通过 RNR/NR 识别毫米波频段（BSS Information 字段新增 1 比特 IMMW AP 指示；TBTT Information 字段为 17 字节，其扩展待定）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1354&is_year=2026)
- 同期（10 月 23-24 日）上传但未详述：TGbq 9-10 月电话会议议程（11-26-1905r8，Edward Au，华为）。

## Why it matters / what's new (EN)

Both documents are TGbq contributions in the form of straw-poll proposals rather than draft text. 2036r0 attacks a timing question for scheduled beam establishment that the KB's earlier TGbq digests touched through cross-link timing references (see the 10-14 digest linked above); 1354r3 adds a straw poll on critical updates to the sub-7 GHz discovery proposal, with several fields still marked TBD in the document.

## Why it matters / what's new (ZH)

两份文档都是 TGbq 的摸底投票形式的提案，而非草案文本。2036r0 处理的是定时波束建立的时间问题，本知识库此前的 TGbq 摘要通过跨链路时间参考有所涉及（见上文链接的 10-14 摘要）；1354r3 为 sub-7 GHz 发现提案新增了关于关键更新的摸底投票，文档中仍有若干字段标注为待定。
