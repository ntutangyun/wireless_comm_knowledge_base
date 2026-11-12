---
id: 2026-11-12_ieee-mentor-tgbt-qualcomm-lb297-security-profile-ptk-derivation-cid-resolutions-dcn-2347
date_published: 2026-11-11
date_found: 2026-11-12
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbt: Security profile and PTK derivation comment resolutions — 22 LB297 CIDs (DCN 11-26-2347r0, Qualcomm)"
title_zh: "IEEE 802.11 TGbt：安全档与 PTK 推导的评论处理——22 个 LB297 CID（DCN 11-26-2347r0，高通）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2347&is_year=2026"
source_quality: full
topics: [802.11bt, PQC, Security Profile element, PQC Parameter element, PTK derivation, ML-KEM, LB297]
topic_primary: security-privacy
topics_secondary: [wifi8-uhr]
novelty_score: 2
---

## Summary (EN)

DCN 11-26-2347r0, "Security profile and PTK derivation comments" (Jouni Malinen, Qualcomm; TGbt; document date 2026-11-11, uploaded 11 November 2026), proposes resolutions to 22 LB297 comments (CIDs 146, 151, 264, 540, 556, 586, 416, 603, 137, 218, 257, 537, 161, 674, 566, 493, 318, 374, 632, 633, 307, 373) against the P802.11bt PQC draft, and lists several further CIDs under "comments that should be assigned to someone else". The document is a comment-resolution list; each entry gives the comment, the proposed change and the proposed resolution.

Grouped by outcome. Rejected: CIDs 146, 151, 264 and 540 ask for the Security Profile element to be added to the MIC derivation to avoid downgrade attacks; the stated resolution is that the MIC is derived using the PTK, the PTK is derived using the transcript, and the Security Profile element is included in the Authentication frame(s) that form the transcript, so it is already part of MIC derivation. CIDs 137, 218 and 257 and 537 ask whether an 802.1X Authentication frame may carry both the Security Profile element and the PQC Parameter element; the stated resolution is that the existing rules already indicate both are included for security profiles using PQC AKMs, and that the P802.11bt baseline is to be updated to match a P802.11bn/D2.1 change (Table 9-87 now referring to a new clause on usage of the Security Profile element). CID 674 asks that an AP shall reject non-PQC authentication when PQC is negotiated; the resolution says an AP may enable PQC and non-PQC AKMs together, so such a requirement is not acceptable, while an AP configured with PQC AKMs only will reject non-PQC attempts without draft changes. CIDs 566, 318, 632 and 633 concern the PQC Parameter element's contents and field lengths, and CID 374 the PQC Profile column of Table 9-bb18 (rejected: a security profile, not the AKM, determines the hash); for example the resolution to 633 states that group 19 (P-256) gives a 64-octet public key and ML-KEM-768 gives a 1184-octet encapsulation key and a 1088-octet ciphertext. CID 556 asks for an analysis of the number of fragments over the air; the resolution points to DCN 26/2256r1, which analyses an example EAP-TLS exchange. Revised or accepted: CID 586 (use dot11EPPIEEE8021XAuthFrameActivated rather than an RSNXE field), CIDs 416 and 603 (remove the Vendor Specific row 118 from Table 9-bb18 and signal presence of the Vendor Specific Security Profile field with security profile number 221), CID 307 (mark the PQC Profile column N/A for security profiles 1-15), CID 161 (incorporate text from 26/1870r4, CID 286, already in D1.1), and CIDs 493 and 373 (editorial alignment). The document also lists CIDs 223 and 224 as to be assigned to others: 223 asks for a hybrid-completion verification value for multi-component PQC profiles, and 224 asks for a PQC-protected PASN procedure.

## Summary (ZH)

DCN 11-26-2347r0《Security profile and PTK derivation comments》（Jouni Malinen，高通；TGbt；文档日期 2026-11-11，于 2026 年 11 月 11 日上传）针对 P802.11bt PQC 草案，提出对 22 条 LB297 评论（CID 146、151、264、540、556、586、416、603、137、218、257、537、161、674、566、493、318、374、632、633、307、373）的处理方案，并在“应分配给他人的评论”下列出若干其他 CID。文档是评论处理清单，每条给出评论、拟议修改与拟议处理。

按处理结果归类。拒绝：CID 146、151、264 与 540 要求把 Security Profile 元素加入 MIC 推导以避免降级攻击；所述处理是：MIC 由 PTK 推导，PTK 由传输记录（transcript）推导，而 Security Profile 元素包含在构成 transcript 的 Authentication 帧中，因此已属于 MIC 推导的一部分。CID 137、218、257 与 537 询问 802.1X Authentication 帧能否同时携带 Security Profile 元素与 PQC Parameter 元素；所述处理是：现有规则已表明使用 PQC AKM 的安全档会同时包含两者，并且 P802.11bt 基线需与 P802.11bn/D2.1 的修改（表 9-87 改为引用关于 Security Profile 元素用法的新条款）保持一致。CID 674 要求在协商 PQC 时 AP 必须拒绝非 PQC 认证；处理意见称 AP 可同时启用 PQC 与非 PQC AKM，因此不能做此要求，而仅配置 PQC AKM 的 AP 会拒绝非 PQC 尝试，草案无需修改。CID 566、318、632 与 633 涉及 PQC Parameter 元素的内容与字段长度，CID 374 涉及表 9-bb18 的 PQC Profile 列（拒绝：哈希由安全档而非 AKM 决定）；例如对 633 的处理称，group 19（P-256）对应 64 字节公钥，ML-KEM-768 对应 1184 字节封装密钥与 1088 字节密文。CID 556 要求分析空口分片数量；处理指向 DCN 26/2256r1，其分析了一个 EAP-TLS 交互示例。修改或接受：CID 586（改用 dot11EPPIEEE8021XAuthFrameActivated 而非 RSNXE 字段）、CID 416 与 603（从表 9-bb18 删除 118 号 Vendor Specific 行，并以安全档号 221 指示 Vendor Specific Security Profile 字段存在）、CID 307（对安全档 1-15 的 PQC Profile 列标注 N/A）、CID 161（纳入 26/1870r4 中 CID 286 的文本，已并入 D1.1）、CID 493 与 373（编辑性对齐）。文档还将 CID 223 与 224 列为待分配：223 要求为多组件 PQC 安全档增加混合完成性校验值，224 要求提供受 PQC 保护的 PASN 流程。

## Key technical points (EN)

- 22 LB297 CIDs resolved in one document; mix of REJECTED, REVISED and ACCEPT outcomes.
- Downgrade-binding CIDs (146, 151, 264, 540): rejected, since the Security Profile element is in the Authentication-frame transcript used to derive the PTK, which keys the MIC.
- CID 674: no requirement for an AP to reject non-PQC attempts merely because a PQC AKM is enabled; a PQC-only configuration already rejects them.
- Field-size example (CID 633): P-256 public key 64 octets; ML-KEM-768 encapsulation key 1184 octets, ciphertext 1088 octets.
- CIDs 416/603: Vendor Specific profile signalling moved to security profile number 221, removing row 118 of Table 9-bb18.
- CID 307: PQC Profile column set to N/A for security profile numbers 1-15.
- CID 556: fragment-count analysis referenced to DCN 26/2256r1 (EAP-TLS example).
- CIDs 223 (hybrid completion verification) and 224 (PQC PASN) listed as to be assigned to others.

## Key technical points (ZH)

- 单一文档处理 22 条 LB297 CID；结果含拒绝、修改与接受。
- 降级绑定类 CID（146、151、264、540）：拒绝，因 Security Profile 元素位于用于推导 PTK 的 Authentication 帧 transcript 中，而 PTK 为 MIC 提供密钥。
- CID 674：不要求 AP 仅因启用了 PQC AKM 就拒绝非 PQC 尝试；仅 PQC 配置本身已会拒绝。
- 字段长度示例（CID 633）：P-256 公钥 64 字节；ML-KEM-768 封装密钥 1184 字节、密文 1088 字节。
- CID 416/603：Vendor Specific 档的指示改用安全档号 221，并删除表 9-bb18 的 118 号行。
- CID 307：对安全档号 1-15 的 PQC Profile 列标注 N/A。
- CID 556：分片数量分析引用 DCN 26/2256r1（EAP-TLS 示例）。
- CID 223（混合完成性校验）与 224（PQC PASN）列为待分配。

## Why it matters / what's new (EN)

The KB follows P802.11bt PQC comment resolution through earlier entries, for example 2026-10-12_ieee-mentor-tgm-tgbt-decoyauth-pqc-digest and 2026-10-16_ieee-mentor-tgm-tgbt-deprecating-cck-pqc-fils-shared-key-digest. This document records the resolutions in one place for the Security Profile and PQC Parameter elements, including concrete reasoning for why the draft's transcript-based key derivation was considered sufficient against the downgrade comments, and the numeric field sizes. These are proposed resolutions, not adopted text; resolution status in the group is not stated in the document.

## Why it matters / what's new (ZH)

KB 通过此前条目跟踪 P802.11bt PQC 的评论处理，例如 2026-10-12_ieee-mentor-tgm-tgbt-decoyauth-pqc-digest 与 2026-10-16_ieee-mentor-tgm-tgbt-deprecating-cck-pqc-fils-shared-key-digest。本文档将 Security Profile 与 PQC Parameter 元素相关的处理集中记录，包括为何认为草案基于 transcript 的密钥推导足以应对降级类评论的具体理由，以及字段长度的具体数值。这些是拟议处理而非已采纳文本；文档未说明其在小组内的处理状态。

## Images

None.
