---
id: 2026-07-10_ieee-mentor-tgbt-plenary-eve-digest
date_published: 2026-07-10
date_found: 2026-07-10
type: ieee-document
title_en: "IEEE 802.11 TGbt Mentor digest — plenary-eve Huawei PQC trio: pre-association privacy, frame aggregation, PQC-OWE opt-out"
title_zh: "IEEE 802.11 TGbt Mentor 摘要——全会前夕华为 PQC 三连：关联前隐私、认证帧聚合、PQC-OWE 关闭信令"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bt
source_quality: snippet_only
topics: [802.11bt, PQC, OWE, 802.1X, security, TGbt]
topic_primary: security-privacy
topics_secondary: []
novelty_score: 2
---

## Summary (EN)

On July 9 — the eve of the Montreal plenary (July 12-17) and the final day of the TGbn MAC ad-hoc window — TGbt uploaded three new contributions, all from Huawei authors, extending the post-quantum amendment's authentication architecture. DCN 1388 (Ming Zhao) proposes **Privacy Protected Authentication with PQC 802.1X** — folding the enhanced-privacy machinery into the post-quantum 802.1X/EAP flow. DCN 1393 (Michael Montemurro) proposes **Authentication frame aggregation** — a transport answer to PQC's oversized handshake payloads, complementing the "large elements" thread (DCN 1264/1265) from the pre-plenary wave. DCN 1398 (Jiawei Wu) proposes **signaling to disable PQC OWE for association** — an explicit opt-out/negotiation knob so an AP or STA can fall back from post-quantum Opportunistic Wireless Encryption when it isn't wanted or supported.

Together with the July 8 pre-association PASN signaling pair (DCN 1375/1376, covered in 2026-07-09_ieee-mentor-tgbt-preplenary-digest), Huawei enters Montreal with an end-to-end PQC story: pre-association negotiation, privacy-protected 802.1X, aggregated transport for big payloads, and a controlled fallback path. TGbt's initial WG letter ballot is predicted for July 2026, so these are the last mechanism proposals that can shape D1.0.

## Summary (ZH)

7 月 9 日——蒙特利尔全会（7 月 12-17 日）前夕、TGbn MAC 特设会议窗口最后一天——TGbt 上传了三份新贡献，均出自华为作者，扩展后量子修正案的认证架构。DCN 1388（Ming Zhao）提出 **PQC 802.1X 隐私保护认证**——将增强隐私机制并入后量子 802.1X/EAP 流程。DCN 1393（Michael Montemurro）提出**认证帧聚合**——针对 PQC 超大握手载荷的传输层方案，与全会前贡献潮中的"大元素"线（DCN 1264/1265）互补。DCN 1398（Jiawei Wu）提出**关闭关联用 PQC OWE 的信令**——显式的退出/协商开关，使 AP 或 STA 在不需要或不支持时可从后量子机会性无线加密回退。

连同 7 月 8 日的关联前 PASN 信令双件（DCN 1375/1376，见 2026-07-09_ieee-mentor-tgbt-preplenary-digest），华为带着端到端的 PQC 叙事进入蒙特利尔：关联前协商、隐私保护 802.1X、大载荷聚合传输、受控回退路径。TGbt 首轮工作组信函投票预计 2026 年 7 月启动，这批是还能影响 D1.0 的最后一波机制提案。

## Key technical points (EN)

- **DCN 11-26-1388 · TGbt** — Privacy Protected Authentication with PQC 802.1X. Ming Zhao (Huawei). Merges 11bi-style privacy protection into the PQC 802.1X/EAP authentication flow.
- **DCN 11-26-1393 · TGbt** — Authentication frame aggregation. Michael Montemurro (Huawei). Aggregating authentication frames to carry kilobyte-scale PQC material; complements large-elements (1264/1265).
- **DCN 11-26-1398 · TGbt** — Signaling to disable PQC OWE for association. Jiawei Wu (Huawei). Negotiated opt-out from post-quantum OWE — capability/fallback signaling visible on the air interface.
- All three uploaded July 9, 2026 (ET) — the last mechanism window before the predicted July initial WG ballot.

## Key technical points (ZH)

- **DCN 11-26-1388 · TGbt** — PQC 802.1X 隐私保护认证。Ming Zhao（华为）。将 11bi 式隐私保护并入 PQC 802.1X/EAP 认证流程。
- **DCN 11-26-1393 · TGbt** — 认证帧聚合。Michael Montemurro（华为）。以帧聚合承载 KB 级 PQC 材料；与大元素线（1264/1265）互补。
- **DCN 11-26-1398 · TGbt** — 关闭关联用 PQC OWE 的信令。Jiawei Wu（华为）。经协商退出后量子 OWE——空口可见的能力/回退信令。
- 三份均于 2026 年 7 月 9 日（美东）上传——预计 7 月首轮工作组投票前的最后机制窗口。

## Why it matters / what's new (EN)

Versus the 2026-07-09 TGbt digest, the new axis is **who**: a coordinated single-vendor (Huawei) trio landing hours before the plenary, covering privacy, transport and fallback — the three loose ends the D0.x comment cycle exposed. The PQC-OWE disable signaling (1398) is particularly consequential: fallback/downgrade knobs in security handshakes historically become attack surface (WPA3 transition-mode downgrade attacks), so how TGbt frames this negotiation will draw security-research attention the moment D1.0 ballots.

## Why it matters / what's new (ZH)

相对 2026-07-09 的 TGbt 摘要，新变化在于**主体**：单一厂商（华为）协调的三连在全会前数小时落地，覆盖隐私、传输与回退——正是 D0.x 评论周期暴露的三个未决点。PQC-OWE 关闭信令（1398）影响尤深：安全握手中的回退/降级开关在历史上屡成攻击面（WPA3 过渡模式降级攻击），TGbt 如何设计这一协商，将在 D1.0 投票之时即引来安全研究界的审视。
