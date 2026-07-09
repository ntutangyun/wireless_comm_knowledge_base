---
id: 2026-07-09_ieee-mentor-tgbt-preplenary-digest
date_published: 2026-07-09
date_found: 2026-07-09
type: ieee-document
title_en: "IEEE 802.11 TGbt (post-quantum security) Mentor digest — pre-Montreal-plenary wave"
title_zh: "IEEE 802.11 TGbt（后量子安全）Mentor 摘要——蒙特利尔全会前贡献潮"
url: https://mentor.ieee.org/802.11/documents?is_year=2026
source_quality: snippet_only
topics: [802.11bt, PQC, PAKE, PASN, security, TGbt]
topic_primary: security-privacy
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

TGbt (the 802.11 crypto-agility / post-quantum security amendment) posted 14 new contributions between May 18 and July 8, working comment resolution on D0.2. The central technical thread is the PQC PAKE framework (1209, rev 2, Jay Yang/ZTE) with its two-part CR series for PAKE-relevant CIDs (1202/1203) — defining how password-authenticated key establishment survives the migration to post-quantum primitives. The freshest additions (July 8, on the eve of the plenary) extend PQC into the *pre-association* phase: signaling-for-PQC-preassociation (1375) and a CR for PASN pre-association signaling for PQC 802.1X (1376, both Jiawei Wu) — i.e., how a STA and AP agree on post-quantum authentication before association, through PASN.

A second thread hardens the draft's denial-of-service posture: presentation and CR for strengthening proof-of-work (PoW) mechanisms (981/984, Anuj Dharap, Cisco, for D0.2 CIDs 67-71). Dan Harkins (HPE) contributed a cluster of structural cleanups — "field-not-element" (1163, at rev 4), fragmentation presentation (1210), misc-cleanup (1199) — and Cisco's Anirban Karmakar pushed "large elements" handling (1264) with proposed texts (1265), addressing the practical problem that PQC certificates and keys overflow classic 802.11 element size limits.

## Summary (ZH)

TGbt（802.11 密码敏捷/后量子安全修正案）在 5 月 18 日至 7 月 8 日间上传了 14 份新贡献，围绕 D0.2 开展评论决议。核心技术线是 PQC PAKE 框架（1209，rev 2，Jay Yang/中兴）及其两部曲 PAKE 相关 CID 决议（1202/1203）——定义口令认证密钥建立如何在向后量子原语迁移中存续。最新增量（7 月 8 日、全会前夕）把 PQC 延伸到关联前阶段：PQC 关联前信令（1375）与 PASN 承载 PQC 802.1X 关联前信令的 CR（1376，均为 Jiawei Wu）——即 STA 与 AP 如何通过 PASN 在关联之前协商后量子认证。

第二条线加固草案的抗拒绝服务能力：强化工作量证明（PoW）机制的报告与 CR（981/984，Anuj Dharap，思科，针对 D0.2 CID 67-71）。Dan Harkins（HPE）贡献了一组结构性清理——"field-not-element"（1163，已至 rev 4）、分片报告（1210）、杂项清理（1199）；思科 Anirban Karmakar 推进"大元素"处理（1264）及其文本提案（1265），解决 PQC 证书与密钥超出经典 802.11 元素长度限制的现实问题。

## Key technical points (EN)

- **DCN 11-26-1209 · TGbt** — PQC PAKE framework (rev 2). Jay Yang (ZTE). The amendment's core key-establishment architecture under post-quantum assumptions; companion CRs 1202/1203.
- **DCN 11-26-1375/1376 · TGbt** — Signaling for PQC pre-association / CR for PASN pre-association signaling for PQC 802.1X. Jiawei Wu. Extends PQC negotiation to before association via PASN — new scope for the draft.
- **DCN 11-26-981/984 · TGbt** — Strengthening PoW mechanisms (presentation + CR, D0.2 CIDs 67-71). Anuj Dharap (Cisco). Anti-DoS hardening of the authentication flow.
- **DCN 11-26-1264/1265 · TGbt** — Large elements + proposed texts. Anirban Karmakar (Cisco). Carrying oversized PQC payloads (certs/keys) in 802.11 element structures.
- **DCN 11-26-1163/1199/1210 · TGbt** — field-not-element, misc-cleanup, fragmentation. Dan Harkins (HPE). Structural/encoding cleanups for the D0.x text.

## Key technical points (ZH)

- **DCN 11-26-1209 · TGbt** — PQC PAKE 框架（rev 2）。Jay Yang（中兴）。后量子假设下修正案的核心密钥建立架构；配套 CR 1202/1203。
- **DCN 11-26-1375/1376 · TGbt** — PQC 关联前信令 / PASN 承载 PQC 802.1X 关联前信令 CR。Jiawei Wu。经 PASN 把 PQC 协商前移到关联之前——草案范围的新扩展。
- **DCN 11-26-981/984 · TGbt** — 强化 PoW 机制（报告 + CR，D0.2 CID 67-71）。Anuj Dharap（思科）。认证流程的抗 DoS 加固。
- **DCN 11-26-1264/1265 · TGbt** — 大元素及文本提案。Anirban Karmakar（思科）。在 802.11 元素结构中承载超长 PQC 载荷（证书/密钥）。
- **DCN 11-26-1163/1199/1210 · TGbt** — field-not-element、杂项清理、分片。Dan Harkins（HPE）。D0.x 文本的结构/编码清理。

## Why it matters / what's new (EN)

Since the May digest (2026-05-12_ieee-mentor-tgbt-antwerp-digest), TGbt's scope has concretely expanded from "PQC inside the association handshake" to *pre-association* PQC via PASN (1375/1376) — relevant to every pre-association service (ranging, FTM, provisioning) the KB tracks. The large-elements work (1264/1265) is the unglamorous but decisive enabler: without a way to carry kilobyte-scale PQC material in management frames, none of the framework matters. PoW strengthening signals the group expects the heavier PQC handshakes to become a DoS amplification surface.

## Why it matters / what's new (ZH)

自 5 月摘要（2026-05-12_ieee-mentor-tgbt-antwerp-digest）以来，TGbt 的范围从"关联握手内的 PQC"实质性扩展到经 PASN 的关联前 PQC（1375/1376）——这与本 KB 跟踪的所有关联前服务（测距、FTM、配网）相关。大元素工作（1264/1265）是低调却决定性的使能项：若无法在管理帧中承载 KB 级 PQC 材料，任何框架都无从谈起。PoW 强化表明工作组预期更重的 PQC 握手会成为 DoS 放大面。
