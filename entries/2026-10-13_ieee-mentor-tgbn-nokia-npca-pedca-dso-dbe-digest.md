---
id: 2026-10-13_ieee-mentor-tgbn-nokia-npca-pedca-dso-dbe-digest
date_published: 2026-10-12
date_found: 2026-10-13
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn digest -- three new Nokia-led comment-resolution documents: NPCA/P-EDCA retry counter, Co-RTWT with DBE+NPCA, and DSO with DBE puncturing updates"
title_zh: "IEEE 802.11 TGbn 摘要 —— 诺基亚牵头的三份新意见处理文档：NPCA/P-EDCA 重传计数器、DBE+NPCA 下的 Co-RTWT，以及 DSO 与 DBE 打孔更新"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026"
source_quality: full
topics: [TGbn, LB291, NPCA, P-EDCA, DSO, DBE, Co-RTWT, 802.11bn]
topic_primary: wifi8-uhr
topics_secondary: [rtwt-latency, mapc-cosr]
novelty_score: 2
---

## Summary (EN)

On 2026-10-12 three new base contributions appeared in TGbn's Mentor stream, led by Salvatore Talarico (Nokia), with Nokia co-authors plus Huawei (2010r0) and Samsung (2008r0) co-authors; all three describe themselves as resolving LB291 comments and state P802.11bn D2.1 as their baseline. Each pairs the comment text and a proposed resolution with normative text for the TGbn editor. The interactions they address are between features already in the draft: NPCA with P-EDCA and with Co-RTWT, and DSO with DBE.

DCN 11-26-2010r0 (Resolution for Interoperability Between NPCA and P-EDCA) resolves CIDs 14321, 16758, 19272, 20080 and 20082 against subclause 37.2.2. The document describes the issue as follows: P-EDCA is not allowed on the NPCA primary channel, but a P-EDCA STA that switches there runs regular EDCA, whose QSRC[AC_VO] reset (or reset after a successful transmission) triggers a reset of the P-EDCA retry counter (PSRC) under the current text, which the document says gives the STA an advantage on returning to the BSS primary channel. The proposed change keeps PSRC unchanged when QSRC[AC_VO] is set to 0 because the STA switched to the NPCA primary channel, or because EDCA backoff rules set QSRC to 0 on the NPCA primary channel.

DCN 11-26-2009r0/r1 (Resolution for CID 14345) targets subclause 37.15.2.4.4. It states that the exceptions to Co-RTWT TXOP truncation currently apply only when the NPCA primary channel lies within the BSS bandwidth, whereas with DBE and NPCA jointly enabled the NPCA primary channel can sit in the DBE-extended part, where the document says truncation would be over-protection because the two APs' operating bandwidths can remain orthogonal in frequency. The proposed text extends the existing exception rules to the DBE bandwidth; the resolution is marked "agree in principle".

DCN 11-26-2008r0 (Resolution for CIDs related to DSO) resolves CIDs 14347 and 17710 against clause 37.25. The document identifies a gap: the DSO update rules check only that the assigned DSO subband stays within the BSS or DBE bandwidth, not that it keeps at least one non-punctured 20 MHz subchannel after a Disabled Subchannel Bitmap update. The proposed text makes DSO mode remain enabled only if the subband stays within the bandwidth and the AP has not indicated all its 20 MHz subchannels as punctured; otherwise DSO is disabled for that STA.

Other TGbn uploads the same day, not detailed here, were revisions of LB296 comment-resolution documents (DCN 1767r4 and 1766r2, 1769r2 from Liwen Chu/NXP; 1854r1/r2 from Tuncer Baykas/Sony; 1993r1 from Shravan Kalyankar/Huawei; 1965r1 from Ross Jian Yu/Huawei) and a revised TGbn teleconference agenda (1911r7, Alfred Asterjadhi/Qualcomm).

## Summary (ZH)

2026 年 10 月 12 日，TGbn 的 Mentor 上传流中出现三份新的基础文档，由诺基亚 Salvatore Talarico 牵头，合作者除诺基亚外还包括华为（2010r0）与三星（2008r0）；三份文档均自称处理 LB291 意见，并注明以 P802.11bn D2.1 为基线。每份文档都给出意见原文、拟议处理结果，以及供 TGbn 编辑采纳的规范性文本。它们处理的是草案中已有特性之间的交互：NPCA 与 P-EDCA、NPCA 与 Co-RTWT，以及 DSO 与 DBE。

DCN 11-26-2010r0（NPCA 与 P-EDCA 互操作的处理方案）针对第 37.2.2 条，处理 CID 14321、16758、19272、20080 和 20082。文档将问题描述为：P-EDCA 不得在 NPCA 主信道上使用，但切换到该信道的 P-EDCA STA 会运行常规 EDCA，其 QSRC[AC_VO] 复位（或成功发送后的复位）在现行文本下会触发 P-EDCA 重传计数器（PSRC）复位，文档称这使该 STA 在返回 BSS 主信道时获得优势。拟议修改规定：当 QSRC[AC_VO] 因 STA 切换到 NPCA 主信道、或因 EDCA 退避规则在 NPCA 主信道上被置 0 时，PSRC 保持不变。

DCN 11-26-2009r0/r1（CID 14345 的处理方案）针对第 37.15.2.4.4 条。文档指出，Co-RTWT 下免于截断 TXOP 的例外规则目前仅适用于 NPCA 主信道位于 BSS 带宽内的情形；而当 DBE 与 NPCA 同时启用时，NPCA 主信道可能位于 DBE 扩展部分，文档称此时两个 AP 的工作带宽在频域上仍可能正交，截断将造成过度保护。拟议文本将现有例外规则扩展到 DBE 带宽；处理结果标注为“原则上同意”。

DCN 11-26-2008r0（DSO 相关 CID 的处理方案）针对第 37.25 条，处理 CID 14347 与 17710。文档指出一处缺口：DSO 更新规则只检查已分配的 DSO 子带是否仍在 BSS 或 DBE 带宽内，而未要求在 Disabled Subchannel Bitmap 更新之后该子带仍至少含有一个未被打孔的 20 MHz 子信道。拟议文本规定：仅当子带仍在带宽内且 AP 未指示其全部 20 MHz 子信道被打孔时，DSO 模式才保持启用，否则对该 STA 关闭 DSO。

同日其他未在此详述的 TGbn 上传包括 LB296 意见处理文档的修订版（Liwen Chu / NXP 的 DCN 1767r4、1766r2、1769r2；Tuncer Baykas / 索尼的 1854r1/r2；Shravan Kalyankar / 华为的 1993r1；Ross Jian Yu / 华为的 1965r1）以及修订后的 TGbn 电话会议议程（1911r7，Alfred Asterjadhi / 高通）。

## Key technical points (EN)

- **DCN 11-26-2010r0 · TGbn** -- Resolution for Interoperability Between NPCA and P-EDCA (CIDs 14321, 16758, 19272, 20080, 20082; clause 37.2.2): PSRC remains unchanged when QSRC[AC_VO] is reset on the NPCA primary channel. Salvatore Talarico (Nokia) [document](https://mentor.ieee.org/802.11/documents?is_dcn=2010&is_year=2026).
- **DCN 11-26-2009r1 · TGbn** -- Resolution for CID 14345 (clause 37.15.2.4.4): Co-RTWT TXOP-truncation exception rules extended to the DBE bandwidth when DBE and NPCA are jointly enabled. Salvatore Talarico (Nokia) [document](https://mentor.ieee.org/802.11/documents?is_dcn=2009&is_year=2026).
- **DCN 11-26-2008r0 · TGbn** -- Resolution for CIDs related to DSO (CIDs 14347, 17710; clause 37.25): DSO stays enabled after a bandwidth, DBE or Disabled Subchannel Bitmap update only if the subband remains within the bandwidth and is not entirely punctured. Salvatore Talarico (Nokia) [document](https://mentor.ieee.org/802.11/documents?is_dcn=2008&is_year=2026).
- Also uploaded, revisions only: LB296 CR documents 1767r4/1766r2/1769r2 (Liwen Chu, NXP), 1854r2 (Tuncer Baykas, Sony), 1993r1 (Shravan Kalyankar, Huawei), 1965r1 (Ross Jian Yu, Huawei); teleconference agenda 1911r7 (Alfred Asterjadhi, Qualcomm).

## Key technical points (ZH)

- **DCN 11-26-2010r0 · TGbn** —— NPCA 与 P-EDCA 互操作的处理方案（CID 14321、16758、19272、20080、20082；第 37.2.2 条）：在 NPCA 主信道上 QSRC[AC_VO] 复位时，PSRC 保持不变。Salvatore Talarico（诺基亚）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2010&is_year=2026)。
- **DCN 11-26-2009r1 · TGbn** —— CID 14345 的处理方案（第 37.15.2.4.4 条）：当 DBE 与 NPCA 同时启用时，将 Co-RTWT 的 TXOP 截断例外规则扩展到 DBE 带宽。Salvatore Talarico（诺基亚）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2009&is_year=2026)。
- **DCN 11-26-2008r0 · TGbn** —— DSO 相关 CID 的处理方案（CID 14347、17710；第 37.25 条）：在带宽、DBE 或 Disabled Subchannel Bitmap 更新后，仅当子带仍在带宽内且未被全部打孔时，DSO 才保持启用。Salvatore Talarico（诺基亚）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2008&is_year=2026)。
- 同日其他上传（仅为修订版）：LB296 CR 文档 1767r4/1766r2/1769r2（Liwen Chu，NXP）、1854r2（Tuncer Baykas，索尼）、1993r1（Shravan Kalyankar，华为）、1965r1（Ross Jian Yu，华为）；电话会议议程 1911r7（Alfred Asterjadhi，高通）。

## Why it matters / what's new (EN)

These documents are narrow comment resolutions rather than new mechanisms: each reconciles two features already in the TGbn draft (NPCA with P-EDCA and Co-RTWT; DSO with DBE). The document headers cite LB291 comments and D2.1 as the baseline; the contents of the proposed normative text are the authors' proposals and have not been adopted.

## Why it matters / what's new (ZH)

这些文档属于针对性的意见处理而非新机制：每份都在协调 TGbn 草案中已有的两项特性（NPCA 与 P-EDCA、Co-RTWT；DSO 与 DBE）。文档首部引用 LB291 意见并以 D2.1 为基线；其中的规范性文本是作者的提议，尚未被采纳。

## Images

None.
