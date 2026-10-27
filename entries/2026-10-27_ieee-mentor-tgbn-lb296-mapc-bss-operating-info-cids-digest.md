---
id: 2026-10-27_ieee-mentor-tgbn-lb296-mapc-bss-operating-info-cids-digest
date_published: 2026-10-26
date_found: 2026-10-27
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest — 2026-10-27 (LB296 CR for the MAPC BSS Operating Info field: 32 CIDs)"
title_zh: "IEEE 802.11 TGbn Mentor 当日摘要 — 2026-10-27（LB296 针对 MAPC BSS Operating Info 字段的 32 个 CID 处理）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bn"
source_quality: full
topics: [TGbn, 802.11bn, LB296, MAPC, BSS Operating Info, MAPC Bandwidth, Disabled Subchannel Bitmap, BSS Color, Co-BF, Co-SR]
topic_primary: mapc-cosr
topics_secondary: [wifi8-uhr]
novelty_score: 2
---

## Summary (EN)

TGbn's new base document of the day is DCN 11-26-2021r0, "LB296 CR for MAPC BSS Operating Info" (listed on Mentor as 'LB296 CR for MAPC Part 2') (Mahmoud Hasabelnaby and five co-authors, Huawei), uploaded 26 October 2026 (the document's own date line reads October 6, 2026). Its abstract states that it proposes resolutions for 32 comment IDs received for TGbn LB296; 31 are filed against 9.4.2.362.3 or 37.15.1.4.5, and the resulting text changes fall in those two subclauses. The document's resolution column gives 5 Accepted, 18 Revised and 9 Rejected; for most Accepted and Revised items it carries "TGbn Editor: please incorporate the changes in 11-26/2021r0 tagged as #CID" instructions.

The resolutions that change text include: moving the Disabled Subchannel Bitmap Present description to directly after the MAPC Bandwidth description (CID 19331); renaming the field and its presence field to "MAPC Disabled Subchannel Bitmap" and "MAPC Disabled Subchannel Bitmap Present" in figures and text (CID 20440); moving the receiver-side interpretation rule for differing MAPC bandwidths out of the Clause 9 NOTE and into 37.15.1.4.5 (CID 13444); adding an explicit requirement that both the MAPC initiating AP and the MAPC responding AP include their current BSS Operating Info when establishing an agreement (CID 16918); limiting the different-BSS-color requirement to Co-BF and Co-SR agreement establishment (CID 16579); clarifying that updated BSS operating information is carried in a MAPC negotiation request when updating an established agreement, with the MAPC Notification frame route kept (CIDs 16919, 15719); requiring a MAPC Notification frame for a MAPC-bandwidth decrease not conveyed through an agreement update at least one TBTT before the operating-bandwidth decrease takes effect (CID 20788); splitting the bandwidth-increase bullet into a "may update" sentence and a "shall not update until the increase becomes effective" sentence (CIDs 20928, 13571, 19193, 13572); a requirement that a receiving AP use the updated MAPC bandwidth and corresponding MAPC Disabled Subchannel Bitmap for subsequent MAPC operations with the transmitting AP (CID 15718); and rules on the bandwidth of PPDUs carrying frames exchanged between APs for MAPC operation (CIDs 16920, 19843). For the BSS-color-after-change comments (CIDs 18087, 19535) the document notes the requirement is already in 802.11bn/D2.1 (tag #19531) and that no further action is needed.

The rejected items give stated reasons in the document, for example that the requested update mechanisms already exist in 37.15.1.4.5 (CID 14242), that coordinated AP selection is implementation dependent (CID 14998), that a July straw poll supported not extending MAPC operation to DBE bandwidth (CIDs 15924, 20480, 20481), and that MAC address filtering prevents an STA of another AP from accepting a Co-BF PPDU addressed to a different STA even when BSS Color 2 and STA-ID match (CID 16578).

## Summary (ZH)

TGbn 当日新增的基础文档是 DCN 11-26-2021r0《LB296 CR for MAPC BSS Operating Info》（Mentor 列表标题为 'LB296 CR for MAPC Part 2'）（Mahmoud Hasabelnaby 等六位作者，华为），2026 年 10 月 26 日上传（文档自身日期标注为 2026 年 10 月 6 日）。摘要称其为 TGbn LB296 收到的 32 条意见给出处理方案；其中 31 条针对 9.4.2.362.3 或 37.15.1.4.5，相应文本修改均落在这两个子条款。文档的处理结果列显示：接受 5 条、修订 18 条、拒绝 9 条；对大多数接受和修订项附有“TGbn Editor：请纳入 11-26/2021r0 中标记为 #CID 的修改”的指示。

涉及文本修改的处理包括：将 Disabled Subchannel Bitmap Present 的描述移到 MAPC Bandwidth 描述之后（CID 19331）；在图和正文中把字段及其存在字段重命名为“MAPC Disabled Subchannel Bitmap”和“MAPC Disabled Subchannel Bitmap Present”（CID 20440）；将 MAPC 带宽不同时的接收端解释规则从第 9 条 NOTE 移到 37.15.1.4.5（CID 13444）；明确要求 MAPC 发起 AP 和响应 AP 在建立协议时都包含各自当前的 BSS Operating Info（CID 16918）；将“BSS Color 必须不同”的要求限定为 Co-BF 与 Co-SR 协议建立（CID 16579）；澄清更新已建立协议时，更新后的 BSS 运行信息放在 MAPC 协商请求中，同时保留 MAPC Notification 帧途径（CID 16919、15719）；当 MAPC 带宽下降未通过协议更新在运行带宽下降生效前至少一个 TBTT 传达时，要求使用 MAPC Notification 帧（CID 20788）；把带宽增加的条目拆成“可以更新”和“在增加生效之前不得更新”两句（CID 20928、13571、19193、13572）；要求接收更新的 AP 在后续与发送 AP 的 MAPC 操作中使用更新后的 MAPC 带宽及相应 MAPC Disabled Subchannel Bitmap（CID 15718）；以及 AP 之间 MAPC 帧所用 PPDU 带宽的规则（CID 16920、19843）。对于 BSS Color 变更后的意见（CID 18087、19535），文档指出相应要求已存在于 802.11bn/D2.1（标记 #19531），无需进一步操作。

被拒绝的条目在文档中均给出理由，例如请求的更新机制已在 37.15.1.4.5 中规定（CID 14242）、协调 AP 的选择取决于实现（CID 14998）、7 月的 straw poll 支持不把 MAPC 操作扩展到 DBE 带宽（CID 15924、20480、20481），以及即使 BSS Color 2 与 STA-ID 匹配，MAC 地址过滤也会阻止另一 AP 的 STA 接受寄往其他 STA 的 Co-BF PPDU（CID 16578）。

## Key technical points (EN)

- **DCN 11-26-2021r0 · TGbn** — LB296 CR for MAPC BSS Operating Info (32 CIDs: 5 Accepted, 18 Revised, 9 Rejected). Mahmoud Hasabelnaby et al. (Huawei). [document](https://mentor.ieee.org/802.11/documents?is_dcn=2021&is_year=2026)
- Text touched: 9.4.2.362.3 (BSS Operating Info / MAPC Common Info field descriptions) and 37.15.1.4.5 (MAPC BSS Operating Information Indication).
- Also uploaded 25-26 Oct as new revisions, each a revision of an earlier DCN, not re-summarised here: 11-26-2023r1/r2 (Panasonic, MAC CR for Co-RTWT), 11-26-2060r1/r2 (TCL, CID 13996), 11-26-1768r2/r3 (NXP, 37.17.2.3.3 CIDs), 11-26-1835r3 (OPPO, DPS HC mode), 11-26-1784r3/r4 (ZTE, Entity ID), 11-26-1809r5 (Qualcomm, seamless roaming editorial), 11-26-1706r4/r5 (Huawei, misc CIDs on ST), 11-26-1680r3 (ZTE, MAPC security CIDs part 1).

## Key technical points (ZH)

- **DCN 11-26-2021r0 · TGbn** — LB296 CR for MAPC BSS Operating Info（32 个 CID：接受 5、修订 18、拒绝 9）。Mahmoud Hasabelnaby 等（华为）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2021&is_year=2026)
- 涉及文本：9.4.2.362.3（BSS Operating Info / MAPC Common Info 字段描述）和 37.15.1.4.5（MAPC BSS 运行信息指示）。
- 10 月 25-26 日另有以下 DCN 上传了新版本（均为先前 DCN 的修订版），此处不再重复概述：11-26-2023r1/r2（松下，Co-RTWT MAC CR）、11-26-2060r1/r2（TCL，CID 13996）、11-26-1768r2/r3（NXP，37.17.2.3.3 CID）、11-26-1835r3（OPPO，DPS HC 模式）、11-26-1784r3/r4（中兴，Entity ID）、11-26-1809r5（高通，无缝漫游编辑性修改）、11-26-1706r4/r5（华为，ST 相关杂项 CID）、11-26-1680r3（中兴，MAPC 安全 CID 第一部分）。

## Why it matters / what's new (EN)

The document groups the LB296 comments on the BSS Operating Info field and its indication procedure into one resolution set, proposing wording for the update rules (agreement update versus MAPC Notification frame, bandwidth increase and decrease timing, BSS Color handling). It continues the MAPC thread in the KB, for example 2026-10-19_ieee-mentor-tgbn-smd-roaming-ap-puo-txop-return-digest and 2026-10-15_ieee-mentor-tgbn-npca-cobf-interaction-emcca-index-lb296-digest.

## Why it matters / what's new (ZH)

该文档把 LB296 中关于 BSS Operating Info 字段及其指示流程的意见汇集成一组处理方案，为更新规则（协议更新与 MAPC Notification 帧两种途径、带宽增减时机、BSS Color 处理）提出措辞。它延续了知识库中的 MAPC 线索，例如 2026-10-19_ieee-mentor-tgbn-smd-roaming-ap-puo-txop-return-digest 与 2026-10-15_ieee-mentor-tgbn-npca-cobf-interaction-emcca-index-lb296-digest。
