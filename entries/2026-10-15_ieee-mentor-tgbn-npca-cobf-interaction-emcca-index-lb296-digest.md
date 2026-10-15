---
id: 2026-10-15_ieee-mentor-tgbn-npca-cobf-interaction-emcca-index-lb296-digest
date_published: 2026-10-14
date_found: 2026-10-15
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest — 2026-10-15 (NPCA/Co-BF interaction in GW-repeater topology; MediaTek LB296 CR batches; EMCCA BSSID Index)"
title_zh: "IEEE 802.11 TGbn Mentor 当日摘要 — 2026-10-15（网关-中继器拓扑中的 NPCA/Co-BF 交互；联发科 LB296 CR 批次；EMCCA BSSID Index）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bn"
source_quality: full
topics: [TGbn, 802.11bn, NPCA, Co-BF, MAPC, EMCCA, LB296]
topic_primary: mapc-cosr
topics_secondary: [wifi8-uhr]
novelty_score: 2
---

## Summary (EN)

TGbn contributions uploaded on 13-14 October 2026 include the 13 documents or revisions listed below; three of them (1965r2, 1992r1, 1671r6) were already listed by title in the 2026-10-14 digest. The dominant theme is LB296 comment resolution on TGbn D2.0, with one slide deck from MaxLinear on the interaction between NPCA and Co-BF in a gateway-plus-wireless-repeater topology. Documents 11-26-2013, 2002, 2003, 2004, 2005 and 1959 were downloaded and read; the others are listed by title and author only.

## Summary (ZH)

13-14 October 2026 上传、且2026 年 10 月 13-14 日上传的 TGbn 贡献包括下列 13 份文档或修订，其中 1965r2、1992r1、1671r6 三份已在 2026-10-14 摘要中列出标题，列于下方。主题以 TGbn D2.0 的 LB296 意见处理为主，另有一份 MaxLinear 幻灯片讨论网关加无线中继器拓扑中 NPCA 与 Co-BF 的交互。文档 11-26-2013、2002、2003、2004、2005 和 1959 已下载阅读；其余仅列出标题与作者。

## Key technical points (EN)

- **DCN 11-26-2013-00 · TGbn** — NPCA and Co-BF interaction. Avner Epstein et al. (MaxLinear) [document](https://mentor.ieee.org/802.11/documents?is_dcn=2013&is_year=2026). The deck considers a single-band wireless repeater whose AP component (fronthaul) and non-AP component (backhaul) share one primary channel, and states two implications: with different BSS Colors on the gateway and repeater, a STA of the repeater BSS may switch to the NPCA primary channel repeatedly in vain, which the deck says wastes power; and with equal BSS Colors and equal AIDs, Co-BF PPDUs would be ambiguous. It proposes Solution A (an AP may exclude BSSIDs from NPCA operation, advertised with BSS Color and BSSID in the UHR Operation IE and UHR Mode Change IE), Solution B (a Co-BF responding or coordinated AP rejects when BSS Colors are equal, with status code REJECTED_BSS_COLOR_OVERLAP) and Solution C (AID11 ambiguity avoidance for Co-BF, with status code REJECTED_BSS_COLOR_AND_AID_OVERLAP). The deck ends with a straw poll over Solutions A, B, C, A+C and none.
- **DCN 11-26-2002-00 · TGbn** — LB296 CRs for subclause 9.3.8.6.7. You-Wei Chen (MediaTek) [document](https://mentor.ieee.org/802.11/documents?is_dcn=2002&is_year=2026). Proposed resolutions to 30 CIDs; CID 13034 is revised to add an EMCCA BSSID Index field in Figure 9-69j (Co-BF Sounding Response feedback field).
- **DCN 11-26-2003-00 · TGbn** — LB296 CRs for subclause 9.3.1.22.11.2. You-Wei Chen (MediaTek) [document](https://mentor.ieee.org/802.11/documents?is_dcn=2003&is_year=2026). Proposed resolutions to 32 CIDs; CID 13267 (initiated TXOP versus current TXOP wording) is accepted, CID 13381 (extend the OBSS CSI confirm bitmap for the EMCCA set case) is rejected with the stated reason that the maximum number of sounded STAs is 4 in D2.0, and CID 13382 concerns adding an EMCCA BSSID Index field to the MAPC User Info in the Co-BF Sounding Invite frame.
- **DCN 11-26-2004-00 · TGbn** — LB296 CRs for subclauses 37.14.1 and 37.14.2. You-Wei Chen (MediaTek) [document](https://mentor.ieee.org/802.11/documents?is_dcn=2004&is_year=2026). Proposed resolutions to 41 CIDs; the first CIDs listed are editorial (extra parentheses, a missing space, spelling).
- **DCN 11-26-2005-00 · TGbn** — LB296 CRs for subclauses 37.14.4 and 37.14.5. You-Wei Chen (MediaTek) [document](https://mentor.ieee.org/802.11/documents?is_dcn=2005&is_year=2026). Proposed resolutions to 7 CIDs; for the EHT sounding NDP in the UHR Co-BF sounding sequence, the GI_TYPE, NUM_EHT_LTF and NUM_STS settings are resolved as indicated by the UHR NDP Announcement frame (9.3.1.19.7).
- **DCN 11-26-1959-01 · TGbn** — LB296: Comment Resolution for MU Operation - part 1. Hongwon Lee (LG Electronics) [document](https://mentor.ieee.org/802.11/documents?is_dcn=1959&is_year=2026). Proposed resolutions to 40 CIDs (rev 1 marks green-tagged CIDs, revises some resolution text and removes CID 14927 for further discussion); early entries concern wording in subclause 37.4.1.1, such as renaming the "Partial Bandwidth DL MU-MIMO" field to "Partial BW DL MU-MIMO Support".
- **DCN 11-26-1769-03 · TGbn** — LB296 subclause 9.3.1.8.6.1 CIDs. Liwen Chu (NXP) [document](https://mentor.ieee.org/802.11/documents?is_dcn=1769&is_year=2026). Title and author only.
- **DCN 11-26-1784-01 · TGbn** — LB296 MAC CR for Entity ID. Chun Huang (ZTE) [document](https://mentor.ieee.org/802.11/documents?is_dcn=1784&is_year=2026). Title and author only.
- **DCN 11-26-1706-03 · TGbn** — LB296 CR for Misc CIDs on ST. Guogang Huang (Huawei) [document](https://mentor.ieee.org/802.11/documents?is_dcn=1706&is_year=2026). Title and author only.
- **DCN 11-26-1704-04 · TGbn** — LB296 CR for CIDs on Data Forwarding. Guogang Huang (Huawei) [document](https://mentor.ieee.org/802.11/documents?is_dcn=1704&is_year=2026). Title and author only.
- **DCN 11-26-1965-02 · TGbn** — LB 296 editorial comments part 1. Ross Jian Yu (Huawei) [document](https://mentor.ieee.org/802.11/documents?is_dcn=1965&is_year=2026). Title and author only.
- **DCN 11-26-1992-01 · TGbn** — LB 296 editorial comments part 2. Ross Jian Yu (Huawei) [document](https://mentor.ieee.org/802.11/documents?is_dcn=1992&is_year=2026). Title and author only.
- **DCN 11-26-1671-06 · TGbn** — LB296 CR for 37.2.2. P-EDCA part 1. Dmitry Akhmetov (Intel) [document](https://mentor.ieee.org/802.11/documents?is_dcn=1671&is_year=2026). Title and author only; r6 was already listed by title in the 2026-10-14 digest (r1 appeared in the 2026-09-14 digest).

## Key technical points (ZH)

- **DCN 11-26-2013-00 · TGbn** — NPCA 与 Co-BF 的交互。Avner Epstein 等（MaxLinear）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2013&is_year=2026)。该幻灯片考虑一种单频段无线中继器：其 AP 组件（前传）与非 AP 组件（回传）共用同一主信道，并指出两点影响：网关与中继器的 BSS Color 不同时，中继器 BSS 的 STA 可能反复无效地切换到 NPCA 主信道，幻灯片称这会浪费功耗；BSS Color 相同且 AID 相同时，Co-BF PPDU 会产生歧义。幻灯片提出方案 A（AP 可将某些 BSSID 排除出 NPCA 操作，并在 UHR Operation IE 和 UHR Mode Change IE 中通告 BSS Color 与 BSSID）、方案 B（BSS Color 相同时，Co-BF 响应或被协调的 AP 以状态码 REJECTED_BSS_COLOR_OVERLAP 拒绝）和方案 C（Co-BF 的 AID11 歧义规避，状态码为 REJECTED_BSS_COLOR_AND_AID_OVERLAP）。幻灯片最后对方案 A、B、C、A+C 和都不采用进行 straw poll。
- **DCN 11-26-2002-00 · TGbn** — 子条款 9.3.8.6.7 的 LB296 CR。You-Wei Chen（MediaTek）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2002&is_year=2026)。针对 30 个 CID 提出处理方案；CID 13034 修订为在图 9-69j（Co-BF Sounding Response 反馈字段）中增加 EMCCA BSSID Index 字段。
- **DCN 11-26-2003-00 · TGbn** — 子条款 9.3.1.22.11.2 的 LB296 CR。You-Wei Chen（MediaTek）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2003&is_year=2026)。针对 32 个 CID 提出处理方案；CID 13267（initiated TXOP 与 current TXOP 措辞）被接受，CID 13381（为 EMCCA 集合情形扩展 OBSS CSI confirm 位图）被拒绝，所述理由是 D2.0 中被探测 STA 的最大数量为 4，CID 13382 涉及在 Co-BF Sounding Invite 帧的 MAPC User Info 中增加 EMCCA BSSID Index 字段。
- **DCN 11-26-2004-00 · TGbn** — 子条款 37.14.1 和 37.14.2 的 LB296 CR。You-Wei Chen（MediaTek）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2004&is_year=2026)。针对 41 个 CID 提出处理方案；列出的前几个 CID 属于编辑性问题（多余括号、缺少空格、拼写）。
- **DCN 11-26-2005-00 · TGbn** — 子条款 37.14.4 和 37.14.5 的 LB296 CR。You-Wei Chen（MediaTek）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2005&is_year=2026)。针对 7 个 CID 提出处理方案；对于 UHR Co-BF 探测序列中的 EHT 探测 NDP，GI_TYPE、NUM_EHT_LTF 和 NUM_STS 的设置被处理为由 UHR NDP Announcement 帧（9.3.1.19.7）指示。
- **DCN 11-26-1959-01 · TGbn** — LB296：MU 操作意见处理第 1 部分。Hongwon Lee（LG Electronics）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1959&is_year=2026)。针对 40 个 CID 提出处理方案（rev 1 标出绿色标记的 CID、修改部分处理意见文字，并移除 CID 14927 留待进一步讨论）；靠前的条目涉及子条款 37.4.1.1 的措辞，例如把 “Partial Bandwidth DL MU-MIMO” 字段改称 “Partial BW DL MU-MIMO Support”。
- **DCN 11-26-1769-03 · TGbn** — LB296 子条款 9.3.1.8.6.1 CID。Liwen Chu（NXP）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1769&is_year=2026)。仅有标题与作者。
- **DCN 11-26-1784-01 · TGbn** — LB296 MAC CR for Entity ID。Chun Huang（ZTE）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1784&is_year=2026)。仅有标题与作者。
- **DCN 11-26-1706-03 · TGbn** — LB296 CR for Misc CIDs on ST。Guogang Huang（Huawei）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1706&is_year=2026)。仅有标题与作者。
- **DCN 11-26-1704-04 · TGbn** — LB296 CR for CIDs on Data Forwarding。Guogang Huang（Huawei）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1704&is_year=2026)。仅有标题与作者。
- **DCN 11-26-1965-02 · TGbn** — LB 296 editorial comments part 1。Ross Jian Yu（Huawei）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1965&is_year=2026)。仅有标题与作者。
- **DCN 11-26-1992-01 · TGbn** — LB 296 editorial comments part 2。Ross Jian Yu（Huawei）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1992&is_year=2026)。仅有标题与作者。
- **DCN 11-26-1671-06 · TGbn** — LB296 CR for 37.2.2. P-EDCA part 1。Dmitry Akhmetov（Intel）[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1671&is_year=2026)。仅有标题与作者；r6 已在 2026-10-14 摘要中列出标题（r1 出现在 2026-09-14 摘要中）。

## Why it matters / what's new (EN)

The documents target LB296 comment resolution on TGbn D2.0. The MaxLinear deck (2013) is a presentation rather than a comment-resolution document; its stated aim is to resolve what it calls an inherent contradiction between NPCA and Co-BF in a gateway-repeater topology, and it closes with a straw poll. The three MediaTek documents (2002, 2003, 2005) include resolutions touching the Co-BF Sounding Response and Co-BF Sounding Invite frames and the EMCCA BSSID Index field. This digest says nothing about the group's wider proposal history.

## Why it matters / what's new (ZH)

这些文档针对 TGbn D2.0 的 LB296 意见处理。MaxLinear 的幻灯片（2013）是演示文稿而非意见处理文档；其所述目标是解决其所称的网关-中继器拓扑中 NPCA 与 Co-BF 之间的固有矛盾，并以 straw poll 结尾。三份联发科文档（2002、2003、2005）的处理方案涉及 Co-BF Sounding Response 与 Co-BF Sounding Invite 帧以及 EMCCA BSSID Index 字段。本摘要不对该小组更长的提案历史作任何判断。
