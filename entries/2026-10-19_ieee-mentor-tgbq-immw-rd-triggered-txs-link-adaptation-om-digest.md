---
id: 2026-10-19_ieee-mentor-tgbq-immw-rd-triggered-txs-link-adaptation-om-digest
date_published: 2026-10-15
date_found: 2026-10-19
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbq Mentor digest — 2026-10-19 (IMMW link: RD vs triggered TXOP sharing, link adaptation and operating mode straw polls)"
title_zh: "IEEE 802.11 TGbq Mentor 当日摘要 — 2026-10-19（IMMW 链路：RD 与触发式 TXOP 共享、链路自适应与工作模式的意向投票）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bq"
source_quality: full
topics: [TGbq, IMMW, mmWave, RD, TXOP sharing, link adaptation, operating mode, A-Control]
topic_primary: mmwave-bq
topics_secondary: [wifi8-uhr]
novelty_score: 2
---

## Summary (EN)

One new TGbq base document sits above the previous Mentor watermark: DCN 11-26-2025r0 "RD, Triggered TXS, LA and OM" (Chaoming Luo, OPPO, with Liuming Lu, Huixuan Zhou and Liangxiao Xin of OPPO; slide date 2026-10-16, uploaded 15 October 2026). The 11-slide deck was read in full. Its abstract says A-Control in IMMW was discussed in an earlier document (DCN 11-26-0827r1) and that this is a follow-up on features using A-Control: RD, triggered TXOP sharing, link adaptation and operating mode.

On RD versus triggered TXS, the deck lists, as premises taken from adopted TGbq motions, that all service periods other than those used exclusively for the beam-establishment procedure are between exactly two peer STAs (Motion #34) and that an IMMW STA shall not perform TXOP Return after TXOP sharing within a TXOP (Motion #72); the deck also states, without citing a motion, that 11bq has SU transmission only, at 640 MHz or 320 MHz. From these it argues that only TXS mode 1 (non-AP STA transmits to AP) has a use case, that RU Allocation and PS160 need not be indicated and the need for Allocation Duration fades, that the MU-RTS TXS/CTS exchange adds more overhead than RD, and that, since either side may share its TXOP, RD is preferred for simplicity. On link adaptation, it recalls MFB in HT/VHT, HLA in HE and ELA in EHT (UHR also supports HLA and ELA) and proposes reporting SNR, a suggested MCS or a suggested Tx beam for solicited/triggered UL or upcoming DL transmissions. On operating mode, it notes that an IMMW link may change through power saving (640 to 320 MHz, 2SS to 1SS, and MCS 17, 19 and 20 possibly disabled, marked TBD), and describes two routes: a cross-link OMN frame (or a Beacon carrying an OMN element) sent over the sub-7 GHz link, which takes effect after the current TXOP and is not time-sensitive, and OMI on the IMMW link itself by reusing the (EHT) OM Control, which has less overhead and may be quicker when an IMMW service period spans multiple TXOPs.

The deck ends with straw polls: Poll 1 asks which TXOP-sharing method to use (Option 1 RD, Option 2 triggered TXS, Option 3 both, Option 4 a new method); Poll 2A asks to add to the TGbq SFD that RD is the TXOP-sharing method in an IMMW link using the RDG/More PPDU field in the CAS Control field; Poll 2B asks to add a modified triggered TXS procedure without TXS mode 2; Poll 3 asks to add link adaptation in an IMMW link by reusing HLA/ELA Control signalling with modification (suggested UL MCS and suggested DL Tx beam index, other information TBD); Poll 4 asks to add OM for IMMW links via the cross-link management-frame route, with OM using A-Control on the IMMW link left TBD. These are proposed polls in the slides; no poll result is in the document.

Other TGbq rows in the window are the September-October 2026 teleconference agenda revision (DCN 1905r5, xlsx), which was not opened.

## Summary (ZH)

高于上次 Mentor 水位线的 TGbq 新基础文档有一份：DCN 11-26-2025r0《RD, Triggered TXS, LA and OM》（OPPO 的 Chaoming Luo，与 OPPO 的 Liuming Lu、Huixuan Zhou、Liangxiao Xin；幻灯片日期 2026-10-16，2026 年 10 月 15 日上传）。该 11 页幻灯片已通读。其摘要称，IMMW 中的 A-Control 已在此前文档（DCN 11-26-0827r1）中讨论，本文是对使用 A-Control 的功能的后续：RD、触发式 TXOP 共享、链路自适应和工作模式。

关于 RD 与触发式 TXS，幻灯片把已通过的 TGbq 动议作为前提列出：除专用于波束建立流程的服务时段外，所有服务时段仅在两个对等 STA 之间（动议 #34）；IMMW STA 在 TXOP 内进行 TXOP 共享后不得执行 TXOP Return（动议 #72）；幻灯片另称 11bq 仅有 SU 传输，带宽为 640 MHz 或 320 MHz（未引动议）。据此论证：只有 TXS 模式 1（非 AP STA 向 AP 发送）存在用例，无需指示 RU 分配与 PS160，分配时长的必要性也随之减弱，MU-RTS TXS/CTS 交换比 RD 开销更大，且由于双方都可共享其 TXOP，为简单起见倾向于 RD。关于链路自适应，幻灯片回顾了 HT/VHT 的 MFB、HE 的 HLA 和 EHT 的 ELA（UHR 也支持 HLA 和 ELA），并提出针对被请求/触发的 UL 或即将进行的 DL 传输，上报 SNR、建议 MCS 或建议发送波束。关于工作模式，幻灯片指出 IMMW 链路可能因省电而改变（640 到 320 MHz、2SS 到 1SS，MCS 17、19、20 可能被禁用，标为待定），并描述两条途径：经 sub-7 GHz 链路发送跨链路 OMN 帧（或携带 OMN 元素的 Beacon），在当前 TXOP 之后生效、对时间不敏感；以及在 IMMW 链路自身上复用（EHT）OM Control 的 OMI，开销更小，当一个 IMMW 服务时段包含多个 TXOP 时可能更及时。

幻灯片以意向投票结束：投票 1 询问采用哪种 TXOP 共享方式（选项 1 RD、选项 2 触发式 TXS、选项 3 两者、选项 4 新方法）；投票 2A 提议在 TGbq SFD 中加入“RD 作为 IMMW 链路的 TXOP 共享方式，使用 CAS Control 字段中的 RDG/More PPDU 字段”；投票 2B 提议加入不使用 TXS 模式 2 的改良触发式 TXS 流程；投票 3 提议加入 IMMW 链路的链路自适应，复用并修改 HLA/ELA Control 信令（建议 UL MCS 和建议 DL 发送波束索引，其他信息待定）；投票 4 提议 IMMW 链路的 OM 经跨链路管理帧途径完成，IMMW 链路上使用 A-Control 的 OM 待定。这些是幻灯片中拟议的投票，文档内没有投票结果。

同期的其他 TGbq 条目为 2026 年 9-10 月电话会议议程的修订（DCN 1905r5，xlsx），未打开。

## Key technical points (EN)

- **DCN 11-26-2025r0 · TGbq** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2025&is_year=2026) RD, Triggered TXS, LA and OM. Chaoming Luo (OPPO) with Liuming Lu, Huixuan Zhou, Liangxiao Xin (OPPO).
- Premises: two-STA service periods (Motion #34), no TXOP Return after TXOP sharing (Motion #72); the deck also states 11bq is SU-only at 640 or 320 MHz (no motion cited).
- TXOP sharing: RD preferred over triggered TXS (only TXS mode 1 applies; MU-RTS TXS/CTS adds overhead); RD would use the RDG/More PPDU field in the CAS Control field.
- Link adaptation: reuse HLA/ELA Control with modification; information includes suggested UL MCS and suggested DL Tx beam index.
- Operating mode: cross-link OMN frame via the sub-7 GHz link, or OMI on the IMMW link (using A-Control is marked TBD in Poll 4).
- Four straw-poll sets (1, 2A/2B, 3, 4) proposed for adding text to the TGbq SFD.

## Key technical points (ZH)

- **DCN 11-26-2025r0 · TGbq** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2025&is_year=2026) RD, Triggered TXS, LA and OM。Chaoming Luo（OPPO），与 Liuming Lu、Huixuan Zhou、Liangxiao Xin（OPPO）。
- 前提：服务时段仅限两个 STA（动议 #34）、TXOP 共享后不得 TXOP Return（动议 #72）；幻灯片另称 11bq 仅 SU、640 或 320 MHz（未引动议）。
- TXOP 共享：倾向 RD 而非触发式 TXS（仅 TXS 模式 1 适用；MU-RTS TXS/CTS 增加开销）；RD 将使用 CAS Control 字段中的 RDG/More PPDU 字段。
- 链路自适应：复用并修改 HLA/ELA Control；信息包括建议 UL MCS 和建议 DL 发送波束索引。
- 工作模式：经 sub-7 GHz 链路的跨链路 OMN 帧，或 IMMW 链路上的 OMI（投票 4 中使用 A-Control 标为待定）。
- 拟议四组意向投票（1、2A/2B、3、4），用于向 TGbq SFD 加入文本。

## Why it matters / what's new (EN)

This is a presentation of proposed straw polls, not an adopted text; the document records no outcome. It continues the IMMW (integrated millimeter wave) material in the KB's earlier TGbq digests, e.g. 2026-10-14_ieee-mentor-tgbq-immw-sub7-discovery-timing-beam-establishment-digest, by turning to what happens inside an established mmWave service period: TXOP sharing, link-adaptation feedback and operating-mode changes. The deck's arguments rest on adopted motions it cites by number; the motion texts themselves were not available to this scout.

## Why it matters / what's new (ZH)

这是拟议意向投票的演示文稿，而非已通过的文本；文档未记录结果。它延续了本知识库此前 TGbq 摘要中的 IMMW（集成毫米波）内容，例如 2026-10-14_ieee-mentor-tgbq-immw-sub7-discovery-timing-beam-establishment-digest，转向已建立的毫米波服务时段内部的问题：TXOP 共享、链路自适应反馈与工作模式变更。幻灯片的论据依赖其按编号引用的已通过动议；动议原文本次抓取未能获得。
