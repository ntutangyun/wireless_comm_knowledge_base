---
id: 2026-07-11_ieee-mentor-tgbt-digest
date_published: 2026-07-11
date_found: 2026-07-11
type: ieee-document
title_en: "IEEE 802.11 TGbt Mentor digest — 2026-07-11: Huawei PQC CRs (PASN signaling for OWE, 802.1X privacy, PoW enhancement)"
title_zh: "IEEE 802.11 TGbt Mentor 摘要——2026-07-11：华为 PQC 评论决议（OWE 的 PASN 信令、802.1X 隐私、PoW 增强）"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bt
source_quality: snippet_only
topics: [TGbt, post-quantum, PQC, PASN, OWE, 802.1X]
topic_primary: security-privacy
topics_secondary: []
novelty_score: 1
---

## Summary (EN)

TGbt (post-quantum cryptography) uploaded 3 new contributions on July 10, all from Huawei, all comment resolutions refining the PQC amendment's draft text. Theme: closing signaling-level gaps in how PQC-capable devices negotiate — PASN signaling for unassociated PQC-OWE peers, privacy-protected authentication when PQC runs over 802.1X, and an enhancement to the proof-of-work (PoW) anti-DoS mechanism.

## Summary (ZH)

TGbt（后量子密码）于 7 月 10 日上传 3 份新贡献，均来自华为，均为完善 PQC 修订案草案文本的评论决议。主题：弥合 PQC 能力设备协商中的信令层缺口——未关联 PQC-OWE 对端的 PASN 信令、PQC 走 802.1X 时的隐私保护认证、以及工作量证明（PoW）抗 DoS 机制的增强。

## Key technical points (EN)

- **DCN 11-26-1407-00 · TGbt** — CR for PASN-Signaling for PQC OWE unassociated. Jiawei Wu (Huawei). How an unassociated STA signals PQC-OWE capability/parameters via PASN.
- **DCN 11-26-1406-00 · TGbt** — CR for Privacy Protected Authentication with PQC 802.1X. Ming Zhao (Huawei).
- **DCN 11-26-1402-00/01 · TGbt** — CR for PoW Enhancement. Ming Zhao (Huawei). r1 same-day revision.

## Key technical points (ZH)

- **DCN 11-26-1407-00 · TGbt** — 未关联状态下 PQC OWE 的 PASN 信令 CR。Jiawei Wu（华为）。未关联 STA 如何经 PASN 信令传递 PQC-OWE 能力/参数。
- **DCN 11-26-1406-00 · TGbt** — PQC 802.1X 隐私保护认证 CR。Ming Zhao（华为）。
- **DCN 11-26-1402-00/01 · TGbt** — PoW 增强 CR。Ming Zhao（华为）。r1 为当日修订。

## Why it matters / what's new (EN)

Huawei continues to dominate TGbt's pre-plenary CR stream (see 2026-07-10_ieee-mentor-tgbt-plenary-eve-digest). The PASN-for-unassociated-OWE item is the notable one: it extends PQC negotiation to the pre-association phase, meaning quantum-safe opportunistic encryption parameters get exchanged before a STA ever joins the BSS — a signaling surface the base OWE spec (RFC 8110) never had.

## Why it matters / what's new (ZH)

华为继续主导 TGbt 全会前的 CR 流（见 2026-07-10_ieee-mentor-tgbt-plenary-eve-digest）。未关联 OWE 的 PASN 信令是其中的关键项：它将 PQC 协商扩展到关联前阶段，即 STA 在加入 BSS 之前就交换量子安全的机会加密参数——这是基础 OWE 规范（RFC 8110）从未有过的信令面。
