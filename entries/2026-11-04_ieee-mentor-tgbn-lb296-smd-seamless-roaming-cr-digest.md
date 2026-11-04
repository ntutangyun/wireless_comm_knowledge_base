---
id: 2026-11-04_ieee-mentor-tgbn-lb296-smd-seamless-roaming-cr-digest
date_published: 2026-11-02
date_found: 2026-11-04
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest — 2026-11-04 (LB296 seamless-roaming comment resolutions: SMD Information element, ST preparation fields, PTK modes and SMD discovery/association, 80 CIDs in DCN 2208r0 and 2209r0)"
title_zh: "IEEE 802.11 TGbn Mentor 当日摘要 — 2026-11-04（LB296 无缝漫游评议处理：SMD 信息元素、ST 准备字段、PTK 模式与 SMD 发现/关联，DCN 2208r0 与 2209r0 共 80 个 CID）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=2208"
source_quality: full
topics: [802.11bn, TGbn, LB296, seamless roaming, SMD, ST, PTK, comment resolution]
topic_primary: roaming-mobility
topics_secondary: [security-privacy, wifi8-uhr]
novelty_score: 2
---

## Summary (EN)

TGbn has two new comment-resolution documents on seamless roaming, both by Duncan Ho (Qualcomm), both dated 2 November 2026 and listed the same day: DCN 11-26-2208r0 ("LB296 CR for Seamless roaming technical comments, Part 1", 42 CIDs) and DCN 11-26-2209r0 (Part 2, 38 CIDs). They answer comments received on TGbn D2.0 in LB296. Part 1 works through the frame and element definitions in clauses 9.4.1.9, 9.4.2.323.4, 9.4.2.363 (SMD Information element), 9.4.2.364.x (ST preparation elements) and 9.6.43.x. Part 2 works through the procedural text in clause 37.16 (seamless roaming), mostly 37.16.2.1 (discovery) with 14 CIDs, plus 37.16.1.x (introduction, data path models, security modes), 37.16.3 (association to the SMD-ME) and 37.16.4.

In Part 1 the tallied resolutions are 15 Accepted, 17 Revised and 10 Rejected. Examples visible in the table: the SMD Capabilities field is renamed "SMD Capabilities And Configurations" (CID 20277, accepted, on the comment that SMD Type, PTK Mode and the maximum number of prepared target AP MLDs are configuration rather than capability); the Max Number Of Prepared Target AP MLDs field, set between 0 and 7, is clarified so that the actual maximum equals the field value plus 1 and is the same across all AP MLDs of one SMD (CID 20444); the PTK Mode field definition is reworded around "Per-SMD PTK mode" and "Per-AP MLD PTK mode" (CIDs 18050 and 20446); the ambiguous "passed up" wording in the UL/DL handling text is replaced by explicit terms (CIDs 17205, 18525, revised); and CID 18054, which asks that a BA Info Present bit set to 1 with an all-zero TID bitmap be treated as invalid, is resolved as revised. Some CIDs are marked as already addressed in draft D2.1.

In Part 2 the document records, among others: NOTE 3 is clarified so that two APs of different AP MLDs in one SMD may be on the same or different primary channels (CID 20245); all UHR APs affiliated with AP MLDs of the same SMD shall advertise the same SMD Information element (CID 20247); a non-AP STA that intends to associate with an SMD-ME shall set dot11RSNAProtectedManagementFramesActivated to true before initiating association (CIDs 16503, 17267). Rejected comments carry stated reasons: a request to define handling of security-mode mismatch between SMDs is rejected because a non-AP MLD cannot use ST between two AP MLDs of different SMDs (CID 14560); unrecognised SMD identifiers are left to STA implementation (CID 14561); a request to delete the Link Reconfiguration Operation Support requirement is rejected as failing to identify a technical issue (CID 18555); and a question on why the SMD Information element in the (Re)Association Response is checked against the one in Beacon/Probe Response is answered as a security feature against downgrade attacks, with the non-AP MLD disassociating if the check fails regardless of the association status code (CID 17581).

## Summary (ZH)

TGbn 有两份关于无缝漫游的新评议处理文档，均由 Duncan Ho（Qualcomm）提交，文稿日期及列出日期均为 2026 年 11 月 2 日：DCN 11-26-2208r0（《LB296 CR for Seamless roaming technical comments, Part 1》，42 个 CID）和 DCN 11-26-2209r0（第 2 部分，38 个 CID）。两者处理的是 LB296 中针对 TGbn D2.0 收到的评议。第 1 部分涉及第 9.4.1.9、9.4.2.323.4、9.4.2.363（SMD 信息元素）、9.4.2.364.x（ST 准备相关元素）和 9.6.43.x 条的帧与元素定义；第 2 部分涉及第 37.16 条（无缝漫游）的流程文字，其中 37.16.2.1（发现）有 14 个 CID，另有 37.16.1.x（概述、数据路径模型、安全模式）、37.16.3（与 SMD-ME 关联）和 37.16.4。

第 1 部分的处理结果统计为 15 个 Accepted、17 个 Revised、10 个 Rejected。表中可见的例子：SMD Capabilities 字段更名为"SMD Capabilities And Configurations"（CID 20277，已接受；评议指出 SMD Type、PTK Mode 及已准备目标 AP MLD 的最大数量属于配置而非能力）；取值 0 到 7 的 Max Number Of Prepared Target AP MLDs 字段被澄清为实际最大值等于字段值加 1，且同一 SMD 内所有 AP MLD 通告相同（CID 20444）；PTK Mode 字段定义改以"Per-SMD PTK 模式"和"Per-AP MLD PTK 模式"表述（CID 18050、20446）；UL/DL 处理文字中含糊的"passed up"被替换为明确用语（CID 17205、18525，Revised）；CID 18054 要求把 BA Info Present 位为 1 而 TID 位图全零的情形视为无效，处理结果为 Revised。部分 CID 标注为已在草案 D2.1 中以相同方式处理。

第 2 部分记录的内容包括：澄清 NOTE 3，同一 SMD 内属于不同 AP MLD 的两个 AP 可使用相同或不同的主信道（CID 20245）；同一 SMD 的 AP MLD 所属全部 UHR AP 应通告相同的 SMD 信息元素（CID 20247）；打算与 SMD-ME 关联的非 AP STA 应在发起关联前把 dot11RSNAProtectedManagementFramesActivated 设为 true（CID 16503、17267）。被拒绝的评议附有理由：要求定义 SMD 间安全模式不一致时处理方式的评议被拒绝，因为非 AP MLD 无法在不同 SMD 的两个 AP MLD 之间使用 ST（CID 14560）；无法识别的 SMD 标识符交由 STA 实现自行判断（CID 14561）；删除 Link Reconfiguration Operation Support 要求的评议因"未指出技术问题"被拒绝（CID 18555）；关于为何要将（重）关联响应中的 SMD 信息元素与 Beacon/Probe Response 中的比对，回复称这是防止降级攻击的安全特性，检查失败时非 AP MLD 无论关联状态码如何都会解除关联（CID 17581）。

## Key technical points (EN)

- **DCN 11-26-2208r0 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2208&is_year=2026) LB296 CR for Seamless roaming technical comments (Part 1), 42 CIDs. Duncan Ho (Qualcomm). Clauses 9.4.1.9, 9.4.2.323.4, 9.4.2.363, 9.4.2.364.2-5, 9.6.43.x.
- **DCN 11-26-2209r0 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2209&is_year=2026) LB296 CR for Seamless roaming technical comments (Part 2), 38 CIDs. Duncan Ho (Qualcomm). Clause 37.16 (37.16.1.x, 37.16.2.1, 37.16.3, 37.16.4).
- Part 1 examples: SMD Capabilities field renamed "SMD Capabilities And Configurations" (20277); prepared-target-AP-MLD maximum = field value + 1 (field 0 to 7), identical across the SMD (20444); PTK Mode field defined as 0 = Per-SMD PTK mode, 1 = Per-AP MLD PTK mode (18050, 20446); "passed up" replaced by explicit forwarding terms for UL and DL (17205, 18525).
- Part 2 examples: same SMD Information element on all UHR APs of an SMD (20247); protected-management-frames flag set before association to an SMD-ME (16503, 17267); same-or-different primary channel note (20245).
- Rejections with stated reasons: no ST across different SMDs makes security-mode mismatch moot (14560); unknown SMD identifiers left to implementation (14561); SMD Information element check against Beacon/Probe Response described as a downgrade-attack protection, disassociate on failure (17581).

## Key technical points (ZH)

- **DCN 11-26-2208r0 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2208&is_year=2026) LB296 无缝漫游技术评议处理（第 1 部分），42 个 CID。Duncan Ho（Qualcomm）。涉及第 9.4.1.9、9.4.2.323.4、9.4.2.363、9.4.2.364.2-5、9.6.43.x 条。
- **DCN 11-26-2209r0 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2209&is_year=2026) LB296 无缝漫游技术评议处理（第 2 部分），38 个 CID。Duncan Ho（Qualcomm）。涉及第 37.16 条（37.16.1.x、37.16.2.1、37.16.3、37.16.4）。
- 第 1 部分例子：SMD Capabilities 字段更名为"SMD Capabilities And Configurations"（20277）；已准备目标 AP MLD 的最大数量 = 字段值 + 1（字段取值 0 到 7），整个 SMD 内一致（20444）；PTK Mode 字段定义为 0 = Per-SMD PTK 模式、1 = Per-AP MLD PTK 模式（18050、20446）；UL 与 DL 中的"passed up"改为明确的转发用语（17205、18525）。
- 第 2 部分例子：同一 SMD 的全部 UHR AP 通告相同的 SMD 信息元素（20247）；与 SMD-ME 关联前先置位受保护管理帧标志（16503、17267）；相同或不同主信道的注记（20245）。
- 附理由的拒绝：不同 SMD 间不能做 ST，故安全模式不一致无意义（14560）；未知 SMD 标识符交由实现决定（14561）；将 SMD 信息元素与 Beacon/Probe Response 比对称为防降级攻击措施，失败则解除关联（17581）。

## Why it matters / what's new (EN)

These two documents propose resolutions for 80 LB296 CIDs on the seamless-roaming (SMD, ST) text in TGbn D2.0, and so show which definitions and procedures are being tightened before the next draft. They continue the roaming thread in [2026-10-19_ieee-mentor-tgbn-smd-roaming-ap-puo-txop-return-digest](2026-10-19_ieee-mentor-tgbn-smd-roaming-ap-puo-txop-return-digest.md). All resolutions are proposals until the group votes on the documents; the tallies above are counted from the status column of the tables.

## Why it matters / what's new (ZH)

这两份文档为 TGbn D2.0 中无缝漫游（SMD、ST）文本的 80 个 LB296 CID 提出处理意见，显示了下一版草案前哪些定义与流程正在被收紧。它们延续了 [2026-10-19_ieee-mentor-tgbn-smd-roaming-ap-puo-txop-return-digest](2026-10-19_ieee-mentor-tgbn-smd-roaming-ap-puo-txop-return-digest.md) 中的漫游主线。所有处理意见在群组对文档投票之前都只是提案；上述数量按表中处理状态列统计。
