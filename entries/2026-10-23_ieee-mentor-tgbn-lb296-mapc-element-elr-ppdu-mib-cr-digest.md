---
id: 2026-10-23_ieee-mentor-tgbn-lb296-mapc-element-elr-ppdu-mib-cr-digest
date_published: 2026-10-22
date_found: 2026-10-23
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest — 2026-10-23 (LB296 comment resolutions on the MAPC element and 37.1/37.15.1 text, the ELR PPDU and its CFO pre-correction clauses, and Annex C MIB entries)"
title_zh: "IEEE 802.11 TGbn Mentor 当日摘要 — 2026-10-23（LB296 意见处理：MAPC 元素与 37.1/37.15.1 文本、ELR PPDU 及其 CFO 预校正条款、附录 C MIB 条目）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bn"
source_quality: full
topics: [TGbn, 802.11bn, UHR, MAPC, ELR, LB296, MIB]
topic_primary: mapc-cosr
topics_secondary: [wifi8-uhr]
novelty_score: 2
---

## Summary (EN)

TGbn uploaded three comment-resolution documents on LB296 (P802.11bn/D2.0, with text baselined on D2.1) between 21 and 22 October 2026. DCN 11-26-2053r0 (Ming Zhao, Huawei) resolves 20 CIDs on the MAPC element subclause 9.4.2.362.3 and on subclauses 37.1 and 37.15.1. DCN 11-26-2045r0 (Wook Bong Lee, Apple) resolves 9 CIDs on the Enhanced Long Range (ELR) PPDU text in 38.3.8 and on the pre-correction accuracy requirements in 38.3.19.3.2 and 38.3.20.2. DCN 11-26-1945r1 (Junpeng Lou, Ruijie, with co-authors including Yan Li of ZTE) resolves 11 CIDs on Annex C MIB entries around Dot11StationConfigEntry; r1 fixes two editorial issues and moves the baseline from D2.0 to D2.1.

In DCN 2053r0 most of the 9.4.2.362.3 CIDs are wording clarifications. Several comments from the same commenter ask what "the AP" refers to in the MAPC Capabilities field descriptions; the resolution rewrites those descriptions as "the AP transmitting the MAPC element". The Max Traffic Flows description is changed from "a peer AP can provide to the transmitting AP" to "the AP can provide to the recipient AP". Two CIDs asking to rename "supported bandwidth" to the BSS operating bandwidth are rejected, with the stated reason that the current MAPC mechanisms do not support DBE operation. In 37.1 the list of Multi-AP coordination schemes gains Co-CR (CID 18462), and in 37.15.1.1 "backhaul" is replaced by "via the DS" (CID 18041). A request to make CIP applicable to ICF/ICR exchanges between APs (CID 13038) is rejected; the stated reason is that ICF/ICR exchanges have stringent timing requirements and the effectiveness of CIP for them needs evaluation before adding complexity, processing and signalling overhead.

DCN 2045r0 revises 38.3.8 so that the ELR PPDU is described as providing a higher data rate than a 1 Mb/s DSSS PPDU (CID 19624) and so that the frequency-domain duplication is "over the four 52-tone RRUs in the primary 20 MHz channel" (CID 14641). Proposals to support 40/80 MHz ELR PPDUs (CID 13937) and to add eight-times time-domain duplication over one 52-tone RRU (CID 13938) are rejected; the stated reasons are that a wider bandwidth does not improve the link budget under a fixed total transmit power, and that the additional roughly 3 dB of Data-field repetition gain (about 9 dB versus about 6 dB) cannot be realised as range because ELR range is limited by packet detection, for which the L-STF/L-LTF 3 dB boost and CFO pre-correction are designed. For 38.3.20.2 the first paragraph is restructured to start with "When transmitting a UHR ELR PPDU", and a PPDU of a DL EHT SU transmission is added to the list of exceptions to CFO/symbol-clock compensation (CID 17465, 16140). The text keeps the residual-CFO target of 15 kHz at the 10% CCDF point in AWGN at -82 dBm for UL ELR PPDUs carrying an immediate response.

DCN 1945r1 accepts removal of dot11MAPCPASNActivated from the Annex C MIB (CIDs 14167, 14288; CID 14516, which asked to move it to dot11UHRStationConfigEntry, is revised to removal instead, because the object was already deleted from the D1.5 main body). The remaining CIDs are editorial: missing commas after TruthValue for dot11SecurityProfileActivated, capitalisation and "AP channel report" wording for dot11RMAPChannelReportActivated, placing "request" on the same line as "MLME-JOIN.", and adding missing closing double quotes in DESCRIPTION clauses.

## Summary (ZH)

TGbn 在 2026 年 10 月 21 日至 22 日上传了三份针对 LB296（P802.11bn/D2.0，文本基线为 D2.1）的意见处理文档。DCN 11-26-2053r0（赵明，华为）处理 20 个 CID，涉及 MAPC 元素子条款 9.4.2.362.3 以及 37.1、37.15.1 子条款。DCN 11-26-2045r0（Wook Bong Lee，苹果）处理 9 个 CID，涉及 38.3.8 中的增强长距（ELR）PPDU 文本，以及 38.3.19.3.2 和 38.3.20.2 中的预校正精度要求。DCN 11-26-1945r1（楼俊鹏，锐捷；共同作者包括中兴的 Yan Li）处理 11 个 CID，涉及 Dot11StationConfigEntry 周边的附录 C MIB 条目；r1 修正两处编辑性问题，并将基线由 D2.0 更新为 D2.1。

DCN 2053r0 中，9.4.2.362.3 的大部分 CID 是措辞澄清。同一评论人的多条意见询问 MAPC Capabilities 字段描述中的"the AP"指代谁，处理结果将这些描述改写为"发送该 MAPC 元素的 AP"。Max Traffic Flows 的描述由"对等 AP 可向发送 AP 提供的"改为"该 AP 可向接收方 AP 提供的"。两条要求把"supported bandwidth"改为 BSS 工作带宽的 CID 被拒绝，所述理由是当前 MAPC 机制不支持 DBE 操作。在 37.1 中，多 AP 协调机制列表加入 Co-CR（CID 18462），37.15.1.1 中的"backhaul"改为"via the DS"（CID 18041）。要求让 CIP 适用于 AP 之间 ICF/ICR 交互的意见（CID 13038）被拒绝；所述理由是 ICF/ICR 交互有严格的时序要求，CIP 对其有效性需先评估，再决定是否引入额外的复杂度、处理和信令开销。

DCN 2045r0 修订 38.3.8：ELR PPDU 被描述为可获得高于 1 Mb/s DSSS PPDU 的数据速率（CID 19624），并明确频域复制是"在主 20 MHz 信道内的四个 52-tone RRU 上"进行（CID 14641）。支持 40/80 MHz ELR PPDU 的提议（CID 13937）以及增加"在一个 52-tone RRU 上做八倍时域复制"的提议（CID 13938）被拒绝；所述理由是在总发射功率固定时更大的带宽不会改善链路预算，且数据字段额外约 3 dB 的重复增益（约 9 dB 对约 6 dB）无法转化为距离，因为 ELR 的覆盖距离受限于包检测，而 L-STF/L-LTF 的 3 dB 提升与 CFO 预校正正是为此设计。在 38.3.20.2 中，第一段被重新组织为以"发送 UHR ELR PPDU 时"开头，并将 DL EHT SU 传输的 PPDU 加入 CFO/符号时钟补偿的例外列表（CID 17465、16140）。文本保留了对携带即时响应的上行 ELR PPDU 的目标：在 AWGN、接收功率 -82 dBm、10% CCDF 点处残余 CFO 不超过 15 kHz。

DCN 1945r1 接受从附录 C MIB 中删除 dot11MAPCPASNActivated（CID 14167、14288；CID 14516 原要求将其移至 dot11UHRStationConfigEntry，处理为改为删除，因为该对象已从 D1.5 正文中删除）。其余 CID 为编辑性修改：dot11SecurityProfileActivated 的 TruthValue 之后缺少逗号、dot11RMAPChannelReportActivated 的大小写与"AP channel report"措辞、将"request"与"MLME-JOIN."放在同一行，以及为 DESCRIPTION 子句补全缺失的右双引号。

## Key technical points (EN)

- **DCN 11-26-2053r0 · TGbn** — LB296 CR for subclause 9.4.2.362.3, 37.1 and 37.15.1 (20 CIDs). Ming Zhao, Mahmoud Hasabelnaby, Zhenpeng Shi (Huawei). MAPC Capabilities fields (Co-BF/Co-SR/Co-TDMA/Co-RTWT/Co-CR Supported, AP TB PPDU Response Supported, MAPC Security Supported) are reworded relative to "the AP transmitting the MAPC element"; Max Traffic Flows is the number of flows (field value plus 1) that the AP can provide to the recipient AP, applying collectively across all MAPC schemes with an agreement; CIDs 15467 and 19327 (operating bandwidth instead of supported bandwidth) and 13038 (CIP for ICF/ICR) and 13096 are rejected; Co-CR added to the 37.1 scheme list. [document](https://mentor.ieee.org/802.11/documents?is_dcn=2053&is_year=2026)
- **DCN 11-26-2045r0 · TGbn** — LB296 CR for ELR introduction and ELR pre-correction (9 CIDs). Wook Bong Lee (Apple). 38.3.8 text: ELR PPDU applicable to 2.4/5/6 GHz for uplink and only 2.4 GHz for downlink; 20 MHz, single spatial stream, UHR-MCS 0 and 1, four-times frequency-domain duplication over the four 52-tone RRUs in the primary 20 MHz channel, 1.6 µs GI, BCC and LDPC up to a 1944-bit nominal codeword length, PPDU Type And Compression Mode = 3 in U-SIG with ELR-MARK after U-SIG. 38.3.20.2: UL ELR residual CFO not above 15 kHz at the 10% CCDF point in AWGN at -82 dBm. [document](https://mentor.ieee.org/802.11/documents?is_dcn=2045&is_year=2026)
- **DCN 11-26-1945r1 · TGbn** — LB296 CR for MIBs related to Dot11StationConfigEntry (11 CIDs). Junpeng Lou (Ruijie), Ke Zhong, Fachang Guo (affiliation not listed), Yan Li (ZTE). Annex C removal of dot11MAPCPASNActivated; editorial fixes to dot11SecurityProfileActivated, dot11RMAPChannelReportActivated, dot11SMDImplemented DESCRIPTION text; MIB object numbers 253 (dot11UHROptionImplemented), 254 (dot11SecurityProfileActivated), 255 (dot11SMDImplemented) shown with Ed-assigned positions. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1945&is_year=2026)
- Also uploaded 21-22 Oct, not detailed individually: LB296 CRs and revisions by NXP, Huawei, MediaTek and Intel (1765r3, 1766r4/r5, 1768r1, 1893r3-r5, 2002r1, 2003r1, 2004r1, 1964r0) and the TGbn September-November teleconference agenda (1911r11/r12, Qualcomm).

## Key technical points (ZH)

- **DCN 11-26-2053r0 · TGbn** —— 针对 9.4.2.362.3、37.1 和 37.15.1 子条款的 LB296 CR（20 个 CID）。赵明、Mahmoud Hasabelnaby、史振鹏（华为）。MAPC Capabilities 各字段（Co-BF/Co-SR/Co-TDMA/Co-RTWT/Co-CR Supported、AP TB PPDU Response Supported、MAPC Security Supported）的描述改为相对于"发送该 MAPC 元素的 AP"；Max Traffic Flows 表示该 AP 可向接收方 AP 提供的流数量（字段值加 1），对已建立协议的所有 MAPC 机制合计适用；CID 15467 与 19327（以工作带宽取代 supported bandwidth）、13038（CIP 用于 ICF/ICR）和 13096 被拒绝；37.1 的机制列表加入 Co-CR。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2053&is_year=2026)
- **DCN 11-26-2045r0 · TGbn** —— ELR 介绍与 ELR 预校正的 LB296 CR（9 个 CID）。Wook Bong Lee（苹果）。38.3.8 文本：ELR PPDU 上行适用于 2.4/5/6 GHz，下行仅适用于 2.4 GHz；20 MHz、单空间流、UHR-MCS 0 和 1，在主 20 MHz 信道内的四个 52-tone RRU 上做四倍频域复制，GI 为 1.6 µs，支持 BCC 和 LDPC（标称码字长度最大 1944 比特），U-SIG 中 PPDU Type And Compression Mode 取值 3，U-SIG 之后紧跟 ELR-MARK 字段。38.3.20.2：上行 ELR 在 AWGN、-82 dBm 接收功率下，10% CCDF 点处的残余 CFO 不超过 15 kHz。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2045&is_year=2026)
- **DCN 11-26-1945r1 · TGbn** —— 与 Dot11StationConfigEntry 相关的 MIB 的 LB296 CR（11 个 CID）。楼俊鹏（锐捷）、Ke Zhong、Fachang Guo（未列单位）、Yan Li（中兴）。附录 C 中删除 dot11MAPCPASNActivated；对 dot11SecurityProfileActivated、dot11RMAPChannelReportActivated、dot11SMDImplemented 的 DESCRIPTION 文本做编辑性修正；dot11UHROptionImplemented（253）、dot11SecurityProfileActivated（254）、dot11SMDImplemented（255）的对象编号由编辑指定。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1945&is_year=2026)
- 同期（10 月 21-22 日）上传但未逐条详述：NXP、华为、联发科、英特尔的 LB296 CR 及修订版（1765r3、1766r4/r5、1768r1、1893r3-r5、2002r1、2003r1、2004r1、1964r0）以及 TGbn 9-11 月电话会议议程（1911r11/r12，高通）。

## Why it matters / what's new (EN)

These three documents are comment-resolution work on LB296, so they record how the D2.x text is being clarified rather than introducing new mechanisms. The two resolutions that carry stated technical reasoning are the rejection of wider-bandwidth and time-domain-duplication ELR options (CIDs 13937, 13938) and the rejection of CIP for ICF/ICR (CID 13038); both give their reasons in the resolution text. The MAPC element wording in 2053r0 builds on the MAPC Common Info field structure that the KB's earlier TGbn digests tracked, for example [2026-05-18_ieee-mentor-tgbn-antwerp-digest](2026-05-18_ieee-mentor-tgbn-antwerp-digest.md).

## Why it matters / what's new (ZH)

这三份文档属于 LB296 的意见处理工作，记录的是 D2.x 文本如何被澄清，而不是引入新机制。其中带有明确技术理由的两项处理结果是：拒绝更宽带宽与时域复制的 ELR 选项（CID 13937、13938），以及拒绝将 CIP 用于 ICF/ICR（CID 13038）；两者的理由均写在处理结果文本中。2053r0 中 MAPC 元素的措辞建立在本知识库此前 TGbn 摘要所跟踪的 MAPC Common Info 字段结构之上，例如 [2026-05-18_ieee-mentor-tgbn-antwerp-digest](2026-05-18_ieee-mentor-tgbn-antwerp-digest.md)。
