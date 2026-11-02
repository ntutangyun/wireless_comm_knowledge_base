---
id: 2026-11-02_ieee-mentor-tgbn-eppke-ptk-derivation-fix-and-lci-in-neighboring-ap-probe-response
date_published: 2026-10-30
date_found: 2026-11-02
technology: wifi
type: ieee-document
title_en: "IEEE 802.11bn LB296/LB291 -- EPPKE PTK-derivation fix for CID 20950 (Broadcom/Intel, 11-26-2147r0) and an LCI report in the UHR Neighboring AP Probe Response for CIDs 17243/19747 (Toyota, 11-26-2159r0)"
title_zh: "IEEE 802.11bn LB296/LB291 -- CID 20950 的 EPPKE PTK 推导修正（Broadcom/Intel，11-26-2147r0）与 UHR 邻近 AP 探测响应中加入 LCI 报告（CID 17243/19747，Toyota，11-26-2159r0）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2147&is_year=2026"
source_quality: full
topics: [802.11bn, EPPKE, PTK, SMD, LCI, seamless roaming, LB296, TGbn]
topic_primary: security-privacy
topics_secondary: [roaming-mobility, wifi8-uhr]
novelty_score: 2
---

## Summary (EN)

Two TGbn comment-resolution documents landed at the end of October and the start of November 2026.

DCN 11-26-2147r0 (Thomas Derham, Broadcom, with Po-Kai Huang, Intel; dated 2026-10-30) resolves CID 20950 on 37.16.1.3.1 of P802.11bn. The comment says D2.0 specifies no Authentication Algorithm Number for association within a seamless mobility domain (SMD), that algorithms 8 (IEEE 802.1X) and 9 (EPPKE), added by 11bi D6.0, belong to the encrypted-(Re)Association branch, and that NOTE 3 wrongly implies Open System is barred. The proposed resolution changes the note's wording from open system authentication to non-RSN (pre-RSNA) methods. The document's discussion explains that as of D2.1 Authentication Algorithm 0 is limited to the OWE AKM profile and, for PMK caching only, the SAE AKM without EPPKE, so the note's intent is to bar legacy unencrypted open access. It also repairs the EPPKE PTK derivation text in 12.16.9.3.4, which LB291 rewrote explicitly rather than as a delta against PASN: a part of the original input-key definition covering FT-base-AKM and unauthenticated cases was omitted, which matters because base AKM 25 (FT-SAE) or no base AKM can be used. The derivation uses the string "EPPKE PTK Derivation", the AP MLD and non-AP MLD addresses for MLO, and a generalised input key (XXKey). Minor fixes: DHss is derived only during the EPPKE exchange, not in ST preparation; KDF-HASH aligns with final 11bi wording ("no base AKM" for the unauthenticated case); and MIC references now cover the MIC in the second as well as the third authentication frame.

DCN 11-26-2159r0 (Jing Ma, Toyota; listed on Mentor 2026-11-01) resolves CIDs 17243 and 19747 (Minyoung Park; Pooya Monajemi), which ask that the LCI measurement report be available in the UHR Neighboring AP Probe Response frame. Per the document, D2.1 37.16.2.1 already lets Neighbor Report elements carry an LCI report subelement for a reported UHR AP when available and permitted by local policy, while the probing procedure of 37.16.2.3 returns a Basic Multi-Link element with Per-STA profiles and cannot convey location since an LCI report is not carried in a Probe Response. The resolution (Revised, agree in principle) adds one optional Measurement Report element after the Basic Multi-Link element carrying a single LCI report for the target non-colocated neighboring AP MLD, under the same availability/policy condition, handled per 11.10.9.6; the frame is an individually addressed Protected UHR Action frame so location is not exposed in broadcast. The document lists reasons (no change to Basic Multi-Link inheritance rules, one location per MLD, reuse of existing format) and two alternatives not chosen, such as per-STA-profile placement.

## Summary (ZH)

2026 年 10 月底至 11 月初有两份 TGbn 意见处理文稿上传。

DCN 11-26-2147r0（Thomas Derham，Broadcom，与 Intel 的 Po-Kai Huang 合作；2026-10-30）处理 P802.11bn 37.16.1.3.1 条的 CID 20950。该意见指出 D2.0 未规定无缝移动域（SMD）内关联所用的认证算法编号，11bi D6.0 加入的算法 8（IEEE 802.1X）与 9（EPPKE）属于加密（重）关联分支，且 NOTE 3 错误地暗示禁止 Open System。拟议处理将该注释的措辞由 open system authentication 改为非 RSN（pre-RSNA）方法。文稿讨论部分说明：自 D2.1 起，认证算法 0 仅限 OWE AKM 配置，以及仅用于 PMK 缓存的不带 EPPKE 的 SAE AKM，因此该注释的本意是禁止传统的未加密开放接入。文稿还修复了 12.16.9.3.4 中 EPPKE PTK 推导文本：LB291 将其改为显式描述而非相对 PASN 的差异描述，导致原有输入密钥定义中涵盖 FT 基础 AKM 与未认证情形的部分被遗漏，而 EPPKE 可使用基础 AKM 25（FT-SAE）或无基础 AKM，所以须补回。推导使用字符串 "EPPKE PTK Derivation"，MLO 下以 AP MLD 与非 AP MLD 地址代替 BSSID 与 SPA，并引入通用化输入密钥（XXKey）。另有小修：DHss 只在 EPPKE 交换中推导，不在 ST 准备中推导；KDF-HASH 与最终 11bi 措辞对齐（未认证情形称 "no base AKM"）；MIC 引用同时涵盖第二与第三个认证帧。

DCN 11-26-2159r0（Jing Ma，Toyota；Mentor 列出日期 2026-11-01）处理 CID 17243 与 19747（Minyoung Park；Pooya Monajemi），均要求 UHR 邻近 AP 探测响应帧可携带 LCI 测量报告。据文稿，D2.1 的 37.16.2.1 已允许邻居报告元素在可用且本地策略允许时为所报告的 UHR AP 携带 LCI 报告子元素，而 37.16.2.3 的探测流程返回含 Per-STA 配置的 Basic Multi-Link 元素，由于 LCI 报告不在 Probe Response 中携带，无法传达位置。处理结果（Revised，原则同意）是在 Basic Multi-Link 元素之后增加一个可选的 Measurement Report 元素，携带目标非同址邻近 AP MLD 的单个 LCI 报告，可用性/策略条件与 37.16.2.1 相同，按 11.10.9.6 处理；该帧为单播的受保护 UHR Action 帧，位置信息不会暴露在广播帧中。文稿列出所选方案的理由（不改变 Basic Multi-Link 的继承规则、每个 MLD 一个位置、复用现有格式）以及未被选择的两个替代方案，如放入各 Per-STA Profile 内。

## Key technical points (EN)

- **DCN 11-26-2147r0 · TGbn** -- RSNA and EPPKE PTK derivation fix CID 20950. Thomas Derham (Broadcom), Po-Kai Huang (Intel). [document](https://mentor.ieee.org/802.11/documents?is_dcn=2147&is_year=2026)
- Reword NOTE 3 in 37.16.1.3.1 to refer to non-RSN / pre-RSNA methods; reinstate omitted FT-base-AKM and unauthenticated cases in the EPPKE input key (XXKey) in 12.16.9.3.4; fix DHss, KDF-HASH and MIC (2nd and 3rd auth frame) references.
- **DCN 11-26-2159r0 · TGbn** -- LB291 CR for CID 17243 & 19747 related to seamless roaming. Jing Ma (Toyota). [document](https://mentor.ieee.org/802.11/documents?is_dcn=2159&is_year=2026)
- One optional Measurement Report element (single LCI report) after the Basic Multi-Link element in the UHR Neighboring AP Probe Response; same availability/policy condition as 37.16.2.1; carried in an individually addressed Protected UHR Action frame.

## Key technical points (ZH)

- **DCN 11-26-2147r0 · TGbn** -- RSNA 与 EPPKE PTK 推导修正（CID 20950）。Thomas Derham（Broadcom）、Po-Kai Huang（Intel）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2147&is_year=2026)
- 将 37.16.1.3.1 中 NOTE 3 改为指非 RSN / pre-RSNA 方法；在 12.16.9.3.4 的 EPPKE 输入密钥（XXKey）中补回遗漏的 FT 基础 AKM 与未认证情形；修正 DHss、KDF-HASH 及 MIC（第二、三认证帧）的引用。
- **DCN 11-26-2159r0 · TGbn** -- 与无缝漫游相关的 CID 17243 与 19747 的 LB291 意见处理。Jing Ma（Toyota）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2159&is_year=2026)
- 在 UHR 邻近 AP 探测响应的 Basic Multi-Link 元素之后增加一个可选 Measurement Report 元素（单个 LCI 报告）；可用性/策略条件同 37.16.2.1；通过单播受保护 UHR Action 帧传送。

## Why it matters / what's new (EN)

Both are editorial-technical clean-ups of the UHR seamless-mobility-domain text: one rewords the SMD security note to refer to pre-RSNA methods and restores input-key cases omitted from the EPPKE PTK derivation (aligning KDF-HASH with final 11bi wording), the other aligns the two neighbor-discovery paths so location is available either way. They extend the TGbn/SMD coverage in earlier digests without introducing a new mechanism; only the document text (not the adoption outcome) was read.

## Why it matters / what's new (ZH)

两份均为 UHR 无缝移动域文本的技术性清理：一份将 SMD 安全注释改为指 pre-RSNA 方法，并补回 EPPKE PTK 推导中遗漏的输入密钥情形（KDF-HASH 与最终 11bi 措辞对齐），另一份使两条邻居发现路径都能获得位置信息。它们延伸了此前摘要对 TGbn/SMD 的覆盖，并未引入新机制；仅阅读了文稿文本，未涉及采纳结果。
