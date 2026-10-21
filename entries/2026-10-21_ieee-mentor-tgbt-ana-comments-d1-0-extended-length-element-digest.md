---
id: 2026-10-21_ieee-mentor-tgbt-ana-comments-d1-0-extended-length-element-digest
date_published: 2026-10-20
date_found: 2026-10-21
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbt Mentor digest — 2026-10-21 (ANA-related comment resolutions on D1.0: Extended Length Element encoding, Element ID 227)"
title_zh: "IEEE 802.11 TGbt Mentor 当日摘要 — 2026-10-21（D1.0 的 ANA 相关评论处理：扩展长度元素编码、Element ID 227）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bt"
source_quality: full
topics: [TGbt, 802.11bt, D1.0, ANA, Extended Length Element, Element ID, PQC Parameter element, comment resolution]
topic_primary: security-privacy
topics_secondary: [wifi8-uhr]
novelty_score: 2
---

## Summary (EN)

TGbt has one new base document above the previous Mentor watermark: DCN 11-26-2038r0, "ANA Comments for D1.0" (document title "802.11bt – ANA related CIDs"), by Antonio de la Oliva (InterDigital Ltd, UC3M), dated and uploaded 2026-10-20 03:46 ET. The .docx was read in full. Its abstract states that it addresses comment IDs (CIDs) 138, 139, 140, 141, 172, 175, 177, 188, 199, 200, 237, 258, 259, 260, 261, 271, 370, 426, 427, 560, 561, 627, 636, 639, 640, 644, 646 and 717 — 28 CIDs in total.

The document is a comment-resolution table (CID, page, clause, comment, proposed change, resolution). By the resolutions it records, 4 CIDs are ACCEPT (199, 200, 237, 561), 4 are REJECT (172, 175, 271, 370), and the remainder (20) are REVISED (one, CID 627, is written "REVISE"). Most of the REVISED entries point the editor to changes tagged [138], [426], [561], [627] or [646] in the same document. The comments concern clause 9.4.7 (Extended Length Element encoding), clause 10.28.15, Table 9-164 (Element IDs), clause 9.4.1.9 (status codes) and the "<ANA> assignment not ready" Editor's Notes in D1.0.

The recurring subject is the new Extended Length Element encoding with Element ID 227, in which (as described in CID 172) the Element ID is followed by a 2-octet Extended Length Element ID and a 2-octet Extended Length Element Length field instead of the standard 1-octet Length field. Many comments ask to remove repeated mentions of "227" and duplicated format text from clauses 9.4.7 and 10.28.15 (CIDs 138–141, 258–261, 426, 427, 560, 561, 627, 636, 639, 640, 644, 646, 717); these are resolved by rewording or deleting text (e.g. CID 561 ACCEPT deletes the duplicated format paragraph in 10.28.15; CID 717 asks not to hard-code "magic numbers" in text).

## Summary (ZH)

TGbt 在上次 Mentor 水位线之上有一份新的基础文档：DCN 11-26-2038r0《ANA Comments for D1.0》（文档标题“802.11bt – ANA related CIDs”），作者 Antonio de la Oliva（InterDigital Ltd、UC3M），2026-10-20 03:46 ET 上传。已通读 .docx。其摘要称本文处理评论编号（CID）138、139、140、141、172、175、177、188、199、200、237、258、259、260、261、271、370、426、427、560、561、627、636、639、640、644、646、717，共 28 个 CID。

文档是一份评论处理表（CID、页码、条款、评论、建议修改、处理结果）。按其记录的处理结果：4 个 CID 为 ACCEPT（199、200、237、561），4 个为 REJECT（172、175、271、370），其余 20 个为 REVISED（其中 CID 627 写作“REVISE”）。多数 REVISED 条目指示编辑按本文中标记为 [138]、[426]、[561]、[627] 或 [646] 的修改落实。评论涉及条款 9.4.7（扩展长度元素编码）、10.28.15、表 9-164（Element ID）、9.4.1.9（状态码）以及 D1.0 中“<ANA> assignment not ready”的编辑注记。

反复出现的主题是采用 Element ID 227 的新“扩展长度元素”编码：如 CID 172 所述，Element ID 之后跟随 2 个八位组的 Extended Length Element ID 和 2 个八位组的 Extended Length Element Length 字段，而不是标准的 1 个八位组 Length 字段。多条评论要求删除 9.4.7 与 10.28.15 中对“227”的重复提及和重复的格式描述（CID 138–141、258–261、426、427、560、561、627、636、639、640、644、646、717），处理方式为改写或删除文字（例如 CID 561 为 ACCEPT，删除 10.28.15 中重复的格式段落；CID 717 要求不要在文本中硬编码“魔数”）。

## Key technical points (EN)

- **DCN 11-26-2038r0 · TGbt** [document](https://mentor.ieee.org/802.11/documents?is_dcn=2038&is_year=2026) — ANA Comments for D1.0 (802.11bt – ANA related CIDs). Antonio de la Oliva (InterDigital Ltd, UC3M). 28 CIDs; 4 ACCEPT, 4 REJECT, 20 REVISED.
- CID 172 (REJECT) challenges the encoding itself (no standard 1-octet Length field, so legacy STAs cannot skip the element; proposes Element ID Extension 255 plus fragmentation); CID 370 (REJECT) asks only to renumber Element ID 227 to 253 so it sits at the end of the table. Both resolutions carry the same text, citing 11-26-1448r1: it states the TG's view that the encoding is more efficient than the traditional element structure with fragmentation and that it is more convenient for implementers not to have to fragment and reassemble elements.
- CID 175 (REJECT) raises a possible Element ID 227 collision with AID Announcement in REVmf/D3.0; the resolution notes that AID Announcement is Element ID 228 in 802.11-REVmf/D3.0.
- CID 177 (REVISED) asks for reconciliation of the "<ANA> assignment not ready" placeholders (Element ID 227, Extended Capabilities bit, status codes, AKM suite selectors, the Extended Length Element ID); the resolution reports a complete review of the D1.0 ANA status listing Status Codes, PoW element ID, Extended Length, AKM Suite Selectors, Extended Capabilities and Security profiles as completed.
- CIDs 199 and 200 (ACCEPT) remove the "<ANA> assignment not ready" Editor's Notes because the assignments are already in the text; CID 271 (REJECT) asks to replace status-code numbers with <ANA> and is answered that the codes have already been allocated by ANA; CID 237 (ACCEPT, "already done in 1.1") reorders Table 9-164 so the new Element ID entry precedes the PoW element.
- CIDs 138–141, 258–261, 426, 427, 560, 561, 627, 636, 639, 640, 644, 646, 717 (mostly REVISED) trim repeated "227" statements and duplicated Extended Length Element format text in 9.4.7, 9.4.2.aa1/aa2 and 10.28.15; CID 627 notes the section reference in the comment is wrong and corresponds to 9.4.2.aa2.

## Key technical points (ZH)

- **DCN 11-26-2038r0 · TGbt** [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2038&is_year=2026) — ANA Comments for D1.0（802.11bt – ANA related CIDs）。Antonio de la Oliva（InterDigital Ltd、UC3M）。28 个 CID；4 个 ACCEPT、4 个 REJECT、20 个 REVISED。
- CID 172（REJECT）质疑该编码本身（没有标准 1 八位组 Length 字段，旧版 STA 无法跳过该元素，建议改用 Element ID Extension 255 加分片）；CID 370（REJECT）仅要求把 Element ID 227 改为 253 以置于表尾。两者的处理结果文字相同，均引用 11-26-1448r1：其中陈述 TG 的看法：该编码比采用分片的传统元素结构更高效，且实现方无需分片和重组元素更方便。
- CID 175（REJECT）提出 Element ID 227 可能与 REVmf/D3.0 中的 AID Announcement 冲突；处理结果指出在 802.11-REVmf/D3.0 中 AID Announcement 的 Element ID 为 228。
- CID 177（REVISED）要求核对“<ANA> assignment not ready”占位符（Element ID 227、Extended Capabilities 比特、状态码、AKM 套件选择符、Extended Length Element ID）；处理结果称已对 D1.0 的 ANA 状态做完整核查，状态码、PoW 元素 ID、Extended Length、AKM 套件选择符、Extended Capabilities 与安全 profile 均已完成。
- CID 199 与 200（ACCEPT）因 ANA 分配已写入正文而删除“<ANA> assignment not ready”编辑注记；CID 271（REJECT）要求把状态码数字换成 <ANA>，答复为这些码已由 ANA 分配；CID 237（ACCEPT，“已在 1.1 版完成”）调整表 9-164 的顺序，使新的 Element ID 条目位于 PoW 元素之前。
- CID 138–141、258–261、426、427、560、561、627、636、639、640、644、646、717（多为 REVISED）精简 9.4.7、9.4.2.aa1/aa2 与 10.28.15 中重复的“227”表述和重复的扩展长度元素格式文字；CID 627 指出评论中的条款引用有误，应对应 9.4.2.aa2。

## Why it matters / what's new (EN)

This is a comment-resolution document, not adopted text; the file records proposed resolutions only and no vote outcome. It extends the TGbt material already in the KB (for example the PQC/PAKE and "PQC for FILS shared key" digests, 2026-09-11_ieee-mentor-tgbt-pqc-pake-digest and 2026-10-16_ieee-mentor-tgm-tgbt-deprecating-cck-pqc-fils-shared-key-digest) by showing how D1.0 comments on the shared Extended Length Element encoding and code-point assignments were handled. Note that the KB holds only documents ingested since the scout started, so this digest says nothing about the earlier history of the encoding in TGbt.

## Why it matters / what's new (ZH)

这是一份评论处理文档，并非已采纳文本；文件只记录拟议处理结果，没有表决结论。它延续了本知识库已有的 TGbt 内容（例如 PQC/PAKE 与“用于 FILS 共享密钥的 PQC”摘要：2026-09-11_ieee-mentor-tgbt-pqc-pake-digest、2026-10-16_ieee-mentor-tgm-tgbt-deprecating-cck-pqc-fils-shared-key-digest），展示 D1.0 中关于共用的扩展长度元素编码与码点分配的评论是如何处理的。注意本知识库仅收录 scout 启动后摄入的文档，因此本摘要不涉及该编码在 TGbt 中的更早历史。
