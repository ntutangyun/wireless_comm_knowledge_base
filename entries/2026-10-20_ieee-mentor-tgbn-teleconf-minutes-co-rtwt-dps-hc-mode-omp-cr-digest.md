---
id: 2026-10-20_ieee-mentor-tgbn-teleconf-minutes-co-rtwt-dps-hc-mode-omp-cr-digest
date_published: 2026-10-19
date_found: 2026-10-20
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest — 2026-10-20 (Sept-Nov teleconference minutes; LB296 CRs: Co-RTWT with Co-TDMA, DPS parameterized HC mode, OMP part 3)"
title_zh: "IEEE 802.11 TGbn Mentor 当日摘要 — 2026-10-20（9-11 月电话会议纪要；LB296 CR：Co-RTWT 与 Co-TDMA、DPS 参数化 HC 模式、OMP 第 3 部分）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bn"
source_quality: full
topics: [TGbn, 802.11bn, LB296, Co-RTWT, Co-TDMA, DPS, OMP, EMLSR, teleconference minutes]
topic_primary: wifi8-uhr
topics_secondary: [rtwt-latency, energy-power-save, mapc-cosr]
novelty_score: 2
---

## Summary (EN)

TGbn uploads dated 15–20 October 2026 include one new base document and several new or revised comment-resolution (CR) documents for Letter Ballot 296 on 11bn Draft 2.0.

DCN 11-26-2034r0, "TGbn September to November 2026 Teleconference Minutes" (Yusuke Asai, NTT; dated 2026-10-19), records the 8 October (joint) and 15 October (joint) calls; the entry for the 12 October call reads "MAC: (To be available.) PHY: (Cancelled)". At the 8 October call the minutes record the announcement that "TGbn D2.1 is expected to be available by the end of this week" and that all CRs are to use D2.1 as the basis for resolution text. Straw polls on 11-26/1793r2 (3 CIDs), 11-26/1794r2 (30 CIDs) and 11-26/1764r3 (38 CIDs) each record "Result: No objection". In the 1764 discussion, #19017 and #20751 (EMLSR padding) were deferred after commenters disagreed on whether a NOTE is needed on which padding value applies to a UHR AP MLD that uses the OMP procedure, and the chair asked the presenter to start an email thread; #20748 was deferred after a separate exchange on whether 11bn should change EMLSR operation (including single-link EMLSR). On 15 October the minutes record "No objection" for the straw polls on 11-26/1959r2 (40 CIDs), 11-26/1992r2 (31 CIDs), 11-26/1965r3 (75 CIDs), 11-26/1671r7 (P-EDCA part 1, 11 CIDs) and 11-26/1872r2 (8 CIDs); for 11-26/1893r1 (36 CIDs, subclause 37.18.1) the presentation was partial and the result line is blank. Among the deferrals, #14327 turns on whether the draft should say "NPCA mode" or "NPCA operation", and the chair asked the presenter to check with the points of contact.

DCN 11-26-2023r0, "LB296 MAC CR for Co-RTWT" (Gaius Wee, Panasonic, with Bian Tong, Erica Yang, Rithwik Premanand, Hiroyuki Motozuka and Yoshio Urabe; dated 2026-10-20), proposes resolutions for 15 CIDs on subclause 37.15.2.4 (Coordinated RTWT). For CID 14249 (both Co-RTWT and Co-TDMA agreements established) the resolution is "Revised": polling and allocation of a portion of the TXOP follow the Co-TDMA procedure, with the Co-RTWT coordinating AP acting as the Co-TDMA coordinating AP and the Co-RTWT coordinated AP as the Co-TDMA coordinated AP, plus supplementary text and a NOTE on sharing relative to existing RTWT rules. CID 14250 is "Revised" to describe a TXOP that begins before and overlaps the start of the RTWT service period, noting that in the Co-TDMA procedure polling occurs at the beginning of the TXOP. CID 14251 (allowing the coordinated AP to send low-latency traffic information unsolicited before the SP) is "Rejected", citing the MAPC Traffic Indication subclause 37.15.1.4.6 and the statement that no mechanism is currently defined for an AP to indicate LLI to a peer AP.

DCN 11-26-1835r2, "LB296 CR for DPS HC mode" (Liuming Lu, OPPO, with Chaoming Luo and Liangxiao Xin; baseline stated as P802.11bn D2.1), addresses CID 20985. It states that the draft specifies one high-capability (HC) mode for DPS, whose parameters are restricted by STA capabilities, Operation Mode and any AOM, and proposes a "Parameterized HC Mode" signalled through new subfields of the DPS Operation Parameters field, a non-AP STA transitioning to it on receiving its DPS assisting AP's ICF when the field is set to 1, and a capability bit for AP support. The revision history says rev 2 clarifies the description.

DCN 11-26-1775r2, "LB296: CR for OMP – part 3" (Gaurang Naik, Qualcomm), resolves 9 CIDs (13177, 19732, 15777, 16807, 20496, 19733, 20494, 20497, 20499); rev 2 changes "OMP request" to "UHR OMP request" for CID 20497. DCN 11-26-2024r0, "LB296 MAC CR for normative references" (Gaius Wee, Panasonic), resolves CID 15573 by correcting the titles of IETF RFC 9330, 9331 and 9332 in clause 2 to the titles listed on rfc-editor.org.

Other TGbn uploads in the same period: 11-26-1836r1 (LB296 CR of EBSR, MediaTek), 11-26-1893r1 (CIDs of 37.18.1 Part-I, Huawei), 11-26-1783r2 (coexistence between DPS and TDLS, ZTE), 11-26-1765r1 (37.17.2.2 CIDs, NXP) and the agenda 11-26-1911r10.

## Summary (ZH)

2026 年 10 月 15–20 日的 TGbn 上传包括一份新的基础文档，以及若干针对 11bn Draft 2.0 第 296 轮信函投票（LB296）的新增或修订意见处理（CR）文档。

DCN 11-26-2034r0《TGbn September to November 2026 Teleconference Minutes》（Yusuke Asai，NTT；日期 2026-10-19）记录了 10 月 8 日（联合）与 10 月 15 日（联合）两次电话会议；10 月 12 日会议条目为“MAC: (To be available.) PHY: (Cancelled)”。10 月 8 日纪要记载公告：“TGbn D2.1 预计本周末前可用”，且所有 CR 须以 D2.1 为基础撰写解决文本。针对 11-26/1793r2（3 个 CID）、11-26/1794r2（30 个 CID）、11-26/1764r3（38 个 CID）的意向投票均记为“Result: No objection”。在 1764 的讨论中，#19017 与 #20751（EMLSR 填充）被推迟：与会者对于使用 OMP 流程的 UHR AP MLD 应采用哪个填充值、是否需要加 NOTE 意见不一，主席请报告人发起邮件讨论；#20748 则在另一段关于 11bn 是否应修改 EMLSR 操作（包括单链路 EMLSR）的讨论后被推迟。10 月 15 日纪要对 11-26/1959r2（40 个 CID）、11-26/1992r2（31 个 CID）、11-26/1965r3（75 个 CID）、11-26/1671r7（P-EDCA 第 1 部分，11 个 CID）、11-26/1872r2（8 个 CID）的投票均记为“No objection”；11-26/1893r1（36 个 CID，子条款 37.18.1）仅部分宣讲，结果栏为空。被推迟的条目中，#14327 涉及草案应写“NPCA mode”还是“NPCA operation”，主席请报告人与相关联络人核对。

DCN 11-26-2023r0《LB296 MAC CR for Co-RTWT》（Panasonic 的 Gaius Wee，与 Bian Tong、Erica Yang、Rithwik Premanand、Hiroyuki Motozuka、Yoshio Urabe；日期 2026-10-20）为子条款 37.15.2.4（协调 RTWT）的 15 个 CID 提出解决方案。CID 14249（同时建立 Co-RTWT 与 Co-TDMA 协议）的解决为“Revised”：TXOP 部分的轮询与分配遵循 Co-TDMA 流程，Co-RTWT 协调 AP 即 Co-TDMA 协调 AP，Co-RTWT 被协调 AP 即 Co-TDMA 被协调 AP，并补充文本及一条关于相对现有 RTWT 规则的共享行为的 NOTE。CID 14250 为“Revised”，描述 TXOP 在 RTWT 服务时段开始之前开始并与其重叠的情形，并指出 Co-TDMA 流程中轮询发生在 TXOP 开始处。CID 14251（允许被协调 AP 在 SP 之前以非请求方式发送低时延流量信息）为“Rejected”，理由是 MAPC 流量指示子条款 37.15.1.4.6 已涉及，且目前没有定义 AP 向对端 AP 指示 LLI 的机制。

DCN 11-26-1835r2《LB296 CR for DPS HC mode》（OPPO 的 Liuming Lu，与 Chaoming Luo、Liangxiao Xin；基线为 P802.11bn D2.1）处理 CID 20985。文档指出草案中 DPS 只规定了一种高能力（HC）模式，其参数受 STA 能力、工作模式及可能的 AOM 限制；提出“参数化 HC 模式”，通过 DPS Operation Parameters 字段的新子字段指示，当该字段置 1 时非 AP STA 在收到其 DPS 辅助 AP 的 ICF 后转入该模式，并用一个能力位指示 AP 是否支持。修订历史称 rev 2 澄清了描述。

DCN 11-26-1775r2《LB296: CR for OMP – part 3》（Qualcomm 的 Gaurang Naik）处理 9 个 CID（13177、19732、15777、16807、20496、19733、20494、20497、20499）；rev 2 将 CID 20497 中的“OMP request”改为“UHR OMP request”。DCN 11-26-2024r0《LB296 MAC CR for normative references》（Panasonic 的 Gaius Wee）处理 CID 15573，将第 2 条中 IETF RFC 9330、9331、9332 的标题更正为 rfc-editor.org 所列标题。

同期其他 TGbn 上传：11-26-1836r1（EBSR 的 LB296 CR，MediaTek）、11-26-1893r1（37.18.1 第一部分 CID，Huawei）、11-26-1783r2（DPS 与 TDLS 共存，ZTE）、11-26-1765r1（37.17.2.2 CID，NXP）以及议程 11-26-1911r10。

## Key technical points (EN)

- **DCN 11-26-2034r0 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2034&is_year=2026) TGbn September to November 2026 Teleconference Minutes. Yusuke Asai (NTT). Records the 8 and 15 October calls; D2.1 announced as expected by end of that week; straw polls on 1793r2, 1794r2, 1764r3, 1959r2, 1992r2, 1965r3, 1671r7, 1872r2 recorded as "No objection"; 1893r1 partially presented.
- **DCN 11-26-2023r0 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2023&is_year=2026) LB296 MAC CR for Co-RTWT. Gaius Wee (Panasonic) et al. 15 CIDs on 37.15.2.4; Co-TDMA procedure governs TXOP polling/allocation inside a Co-RTWT SP; CID 14251 rejected.
- **DCN 11-26-1835r2 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=1835&is_year=2026) LB296 CR for DPS HC mode. Liuming Lu (OPPO). CID 20985; Parameterized HC Mode plus a capability bit.
- **DCN 11-26-1775r2 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=1775&is_year=2026) LB296: CR for OMP – part 3. Gaurang Naik (Qualcomm). 9 CIDs; rev 2 renames to "UHR OMP request" for CID 20497.
- **DCN 11-26-2024r0 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2024&is_year=2026) LB296 MAC CR for normative references. Gaius Wee (Panasonic). CID 15573; RFC 9330/9331/9332 titles corrected.

## Key technical points (ZH)

- **DCN 11-26-2034r0 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2034&is_year=2026) TGbn September to November 2026 Teleconference Minutes。Yusuke Asai（NTT）。记录 10 月 8 日与 15 日会议；公告 D2.1 预计当周末前可用；对 1793r2、1794r2、1764r3、1959r2、1992r2、1965r3、1671r7、1872r2 的投票记为“No objection”；1893r1 部分宣讲。
- **DCN 11-26-2023r0 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2023&is_year=2026) LB296 MAC CR for Co-RTWT。Gaius Wee（Panasonic）等。针对 37.15.2.4 的 15 个 CID；Co-RTWT SP 内的 TXOP 轮询/分配遵循 Co-TDMA 流程；CID 14251 被拒绝。
- **DCN 11-26-1835r2 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1835&is_year=2026) LB296 CR for DPS HC mode。Liuming Lu（OPPO）。CID 20985；参数化 HC 模式及一个能力位。
- **DCN 11-26-1775r2 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1775&is_year=2026) LB296: CR for OMP – part 3。Gaurang Naik（Qualcomm）。9 个 CID；rev 2 针对 CID 20497 改为“UHR OMP request”。
- **DCN 11-26-2024r0 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2024&is_year=2026) LB296 MAC CR for normative references。Gaius Wee（Panasonic）。CID 15573；更正 RFC 9330/9331/9332 标题。

## Why it matters / what's new (EN)

These are comment-resolution documents and minutes during the LB296 process; the resolutions are proposals to be moved, not adopted text, and the minutes record straw-poll outcomes only as "No objection" or leave them blank. The minutes provide a dated record that D2.1 was expected in the week of the 8 October call.

## Why it matters / what's new (ZH)

这些是 LB296 过程中的意见处理文档与会议纪要；其中的解决方案是待动议的提案而非已通过文本，纪要对意向投票结果仅记为“No objection”或留空。纪要提供了“D2.1 预计在 10 月 8 日会议所在周可用”的带日期记录。
