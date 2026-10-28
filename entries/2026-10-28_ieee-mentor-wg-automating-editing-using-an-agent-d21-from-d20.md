---
id: 2026-10-28_ieee-mentor-wg-automating-editing-using-an-agent-d21-from-d20
date_published: 2026-10-27
date_found: 2026-10-28
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 WG: \"Automating Editing Using an Agent\" - an AI coding agent produces P802.11bn D2.1 from D2.0 and 1833 approved comment resolutions (DCN 11-26-2086r0)"
title_zh: "IEEE 802.11 WG：《用智能体自动化编辑》——AI 编码智能体依据 1833 条已批准评论决议，从 P802.11bn D2.0 生成 D2.1（DCN 11-26-2086r0）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=2086"
source_quality: full
topics: [802.11bn, UHR, technical editing, AI agent, comment resolution, FrameMaker, D2.1]
topic_primary: wifi8-uhr
topics_secondary: [agentic-wifi, ai-for-wifi]
novelty_score: 4
---

## Summary (EN)

DCN 11-26-2086r0, "Automating Editing Using an Agent" (Robert Stacey, Intel, with concepts co-developed with Po-Kai Huang, Intel; uploaded 27 October 2026, group "802.11 WG"), reports an experiment in doing technical editing on the P802.11bn draft with an AI coding agent. Starting from P802.11bn/D2.0, the agent fixed some formatting issues and applied the comment resolutions approved by TGbn in motions 638 to 652 (1833 CIDs) to produce P802.11bn/D2.1. The abstract states that this replicates the work done by the technical editor, "making for an easy compare", and that the experiment "points the way toward automating technical editing".

The deck frames technical editing as very similar to a coding workflow: take a set of issues, decide how to resolve them, apply the changes, validate. The comment database plays the role of a bug tracker and the draft standard the role of a code base (FrameMaker .fm sources producing a PDF). Because FrameMaker has no command line, the pipeline exports every chapter to plain-text MIF (via an ExtendScript export_mif.jsx), snapshots the MIF set before each step so any step can be undone, lets the agent rewrite the MIF text with awk and Node scripts (every edit assertion-checked), re-imports with import_mif.jsx, then updates the book and publishes the PDF and a redline against the previous draft. The slides give the reason for MIF: it is plain text with explicit structure and a stable Unique ID per paragraph, so the agent can read and rewrite it like source code and a diff shows exactly what changed.

Two jobs are reported. First, fixing existing D2.0 issues the agent found: 145 paragraphs in Clauses 9 and 38 retagged from Word-origin formats; 292 paragraphs given the EditingInstruction format; 92 dangling cross-references in Clauses 9, 12, 37 and 38 converted to text (2273 to 2181 XRefs); 61 lettered-list items in Clause 38 retagged; equation numbering overrides cleaned; 17 element-of symbols moved to a font that renders them; and a few font/colour/table-title clean-ups. Second, producing D2.1 from approved resolutions: a 25-line converter reads comments.xlsx (8045 comments, 26 columns); CIDs of motions 638 to 652 are grouped by the Word submission that carries the resolution; the agent downloads the document from Mentor, extracts its text, interprets the resolution, edits the MIF and tags each change. 24 batch scripts covered all 15 motions: 1833 CIDs dispositioned (892 accepted, 841 revised, 100 rejected), 46 submissions read (53 Word documents), 1323 "(#CID)" change tags added in 11 chapter files, and an Edit Note written back for 1722 CIDs.

The deck is candid about quality. Text edits and tagging were judged mostly technically accurate, and "in general, the tagging was very thorough. Better than the human editor since everything was tagged." Visual work was weaker: in a bit-field figure the agent's column re-proportioning left B1 and B7 too small; in Figure 9-aa53 a "Block Ack Timeout Value" column was added in the wrong place (the agent's own explanation: it read the resolution as "add a column" rather than "insert the field in second position" and its review checked presence but not order); shrinking five inline-equation frames by 5 pt had the unintended effect of reducing whitespace before the equation. Drawn figures from Visio sources worked for text-only changes (the agent converted .vsd to .vsdx, edited the drawing XML and re-exported the EMF). The summary slide says the result was "(mostly) technically accurate but not error free", that the agent "struggles with visual formatting", "misinterprets instructions" in some cases but "improves when errors are pointed out", and envisions an agent that applies edits as they are approved, produces the revised draft and redline, validates the work and writes editing notes. A PDF of D2.1 and the redline against D2.0 are stated to be in the members area.

## Summary (ZH)

DCN 11-26-2086r0《Automating Editing Using an Agent》（Intel 的 Robert Stacey；概念与方法与 Po-Kai Huang 讨论共同形成；2026 年 10 月 27 日上传，组别“802.11 WG”）报告了一项用 AI 编码智能体对 P802.11bn 草案做技术编辑的实验。智能体从 P802.11bn/D2.0 出发，修复了若干格式问题，并应用 TGbn 在动议 638 至 652 中批准的评论决议（1833 个 CID），生成 P802.11bn/D2.1。摘要称，这复现了技术编辑所做的工作，“便于直接对比”，并称实验“指明了自动化技术编辑的方向”。

幻灯片把技术编辑类比为编码流程：接收一批问题、决定如何解决、应用修改、验证结果；评论数据库相当于缺陷跟踪库，草案标准相当于代码库（FrameMaker 的 .fm 源文件生成 PDF）。由于 FrameMaker 没有命令行，流水线先通过 ExtendScript（export_mif.jsx）把每个章节导出为纯文本 MIF，每步之前保存整套 MIF 快照以便撤销，由智能体用 awk 与 Node 脚本改写 MIF 文本（每处修改都带断言检查），再用 import_mif.jsx 导回，最后更新全书并发布 PDF 以及相对上一版草案的修订标记（redline）。采用 MIF 的理由写在幻灯片中：它是结构明确的纯文本，每个段落有稳定的 Unique ID，智能体可像读写源代码一样处理，差异对比也能精确显示改动。

报告了两项工作。其一，修复智能体发现的 D2.0 既有问题：第 9、38 章中 145 个段落从 Word 来源的格式重新标记；292 个段落改用 EditingInstruction 格式；第 9、12、37、38 章中 92 个悬空交叉引用转为文本（XRef 由 2273 降至 2181）；第 38 章 61 个字母编号列表项重新标记；清理公式编号覆盖；17 个“属于”符号改用可渲染的字体；以及若干字体、颜色、表格标题的整理。其二，依据已批准的决议生成 D2.1：用 25 行转换器读取 comments.xlsx（8045 条评论、26 列）；将动议 638–652 的 CID 按承载决议的 Word 提交文档分组；智能体从 Mentor 下载文档、提取文本、理解决议、编辑 MIF 并为每处修改打标签。24 个批处理脚本覆盖全部 15 个动议：1833 个 CID 已处理（892 接受、841 修订、100 拒绝），读取 46 份提交（53 个 Word 文档），在 11 个章节文件中加入 1323 个“(#CID)”修改标签，并为 1722 个 CID 回写编辑备注。

幻灯片对质量毫不讳言。文本编辑与打标签总体“技术上基本准确”，并称“总体而言标签非常完整，优于人工编辑，因为每处修改都被标记”。视觉类工作较弱：位域图中智能体重新分配列宽后 B1 与 B7 过窄；图 9-aa53 中“Block Ack Timeout Value”列加错了位置（智能体自己的解释：它把决议理解为“加一列”而非“插入到第二位”，其复核只检查了字段是否存在而未核对顺序）；把五个行内公式框缩小 5 pt，意外减少了公式前的留白。由 Visio 源生成的绘制图在仅改文字时可行（智能体把 .vsd 转成 .vsdx、编辑图形 XML 并重新导出 EMF）。总结页称结果“（基本）技术准确但并非无错”，智能体“在视觉格式上吃力”、在个别指令上“理解有误”，但“被指出错误后会改进”，并设想：智能体在决议获批时即应用编辑、生成修订草案与 redline、验证工作并为每条决议撰写编辑备注。幻灯片称 D2.1 的 PDF 及相对 D2.0 的 redline 位于会员区。

## Key technical points (EN)

- **DCN 11-26-2086r0 · 802.11 WG** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2086&is_year=2026) Automating Editing Using an Agent. Robert Stacey (Intel), with concepts co-developed with Po-Kai Huang (Intel). 19 slides, dated 2026-10-27.
- Scope of the experiment: P802.11bn D2.0 to D2.1; TGbn motions 638-652; 1833 CIDs (892 accepted / 841 revised / 100 rejected); 46 submissions in 53 Word documents (11-26/1615r9 to 11-26/1867r0); 24 batch scripts.
- Pipeline: FrameMaker .fm to MIF (export_mif.jsx) -> snapshot -> awk/Node edits with assertion checks -> MIF back to .fm (import_mif.jsx) -> Update Book -> PDF and redline. Stated reason for MIF: plain text, explicit structure, stable per-paragraph Unique ID, diffable.
- Output bookkeeping: 1323 machine-inserted "(#CID)" tags in the Comment condition (shown in the redline, hidden in the clean draft); "Edited in Draft" = D2.1 for all 1833 CIDs and an Edit Note for 1722 of them, written directly into comments.xlsx (8045 comments, 26 columns).
- D2.0 clean-ups found by the agent: 145 + 292 paragraph retags, 92 dangling XRefs converted to text, 61 list items retagged, 17 symbol-font fixes, equation-numbering overrides removed.
- Reported weaknesses: figure edits (column order, column widths), word-wrap/whitespace, ambiguous markup interpreted as "evident intent" and flagged in the Edit Note for the editor to confirm.
- Stated direction: apply edits as they are approved, produce revised draft and redline, validate, and write editing notes per resolution.

## Key technical points (ZH)

- **DCN 11-26-2086r0 · 802.11 WG** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2086&is_year=2026) Automating Editing Using an Agent。Robert Stacey（Intel；概念与方法与 Po-Kai Huang 讨论共同形成）。共 19 页，日期 2026-10-27。
- 实验范围：P802.11bn D2.0 到 D2.1；TGbn 动议 638–652；1833 个 CID（892 接受 / 841 修订 / 100 拒绝）；46 份提交共 53 个 Word 文档（11-26/1615r9 至 11-26/1867r0）；24 个批处理脚本。
- 流水线：FrameMaker .fm 导出为 MIF（export_mif.jsx）→ 快照 → awk/Node 带断言检查的编辑 → MIF 导回 .fm（import_mif.jsx）→ 更新全书 → 生成 PDF 与 redline。采用 MIF 的所述理由：纯文本、结构明确、每段落有稳定 Unique ID、可做差异对比。
- 产出记录：在 Comment 条件中加入 1323 个机器插入的“(#CID)”标签（redline 中可见，干净稿中隐藏）；全部 1833 个 CID 的“Edited in Draft”标为 D2.1，其中 1722 个附有编辑备注，直接写入 comments.xlsx（8045 条评论、26 列）。
- 智能体发现的 D2.0 整理项：145 + 292 个段落重新标记、92 个悬空交叉引用转文本、61 个列表项重新标记、17 处符号字体修复、移除公式编号覆盖。
- 报告的弱点：图形编辑（列顺序、列宽）、换行与留白、对含糊标记按“明显意图”处理并在编辑备注中标注请编辑确认。
- 所述方向：决议一经批准即应用编辑，生成修订草案与 redline，验证并为每条决议写编辑备注。

## Why it matters / what's new (EN)

The deck applies an AI agent to the standards-editing workflow itself. Unlike TGbn comment-resolution contributions (the inputs to this process), it concerns the downstream step from approved CIDs to a published draft, and it reports concrete counts, failure modes and a tooling recipe (MIF as the agent-friendly representation of a binary desktop-publishing format). It is an example of an agent applied to the standards process rather than to a network. Related: [2026-10-22_ieee-mentor-tgbn-lb296-cobf-sounding-dps-mode-cid-digest](2026-10-22_ieee-mentor-tgbn-lb296-cobf-sounding-dps-mode-cid-digest.md), [2026-10-23_ieee-mentor-tgbn-lb296-mapc-element-elr-ppdu-mib-cr-digest](2026-10-23_ieee-mentor-tgbn-lb296-mapc-element-elr-ppdu-mib-cr-digest.md) (examples of the LB296 resolutions that a later D2.x editing pass will have to absorb).

## Why it matters / what's new (ZH)

这份演示把 AI 智能体应用于标准编辑工作流本身。与 TGbn 评论决议类贡献（它们是这一流程的输入）不同，这份演示针对的是从已批准 CID 到发布草案的下游环节，并给出具体数量、失败模式和工具链做法（用 MIF 作为面向智能体的、对二进制排版格式的纯文本表示）。它是智能体应用于标准制定流程而非网络本身的一个例子。相关：[2026-10-22_ieee-mentor-tgbn-lb296-cobf-sounding-dps-mode-cid-digest](2026-10-22_ieee-mentor-tgbn-lb296-cobf-sounding-dps-mode-cid-digest.md)、[2026-10-23_ieee-mentor-tgbn-lb296-mapc-element-elr-ppdu-mib-cr-digest](2026-10-23_ieee-mentor-tgbn-lb296-mapc-element-elr-ppdu-mib-cr-digest.md)（LB296 决议示例，后续 D2.x 编辑需要吸收这类决议）。
