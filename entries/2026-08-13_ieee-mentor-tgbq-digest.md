---
id: 2026-08-13_ieee-mentor-tgbq-digest
date_published: 2026-08-13
date_found: 2026-08-13
type: ieee-document
title_en: "IEEE 802.11 TGbq Mentor digest — 2026-08-13"
title_zh: "IEEE 802.11 TGbq Mentor 当日摘要 — 2026-08-13"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bq
source_quality: snippet_only
topics: [TGbq, IMMW, mmWave, MLO, TWT, P2P]
topic_primary: mmwave-bq
topics_secondary: [mlo, energy-power-save]
novelty_score: 2
---

## Summary (EN)
TGbq (Integrated Millimeter Wave, IMMW) received a four-contribution cluster from OPPO (Chaoming Luo) uploaded 10 Aug 2026 — the group's largest single-day batch in this KB's tracking and a clear signal that mmWave-MLO architecture debates are heating up ahead of the September interim (WG letter ballot predicted Mar 2027).

## Summary (ZH)
TGbq（集成毫米波，IMMW）于 2026 年 8 月 10 日收到 OPPO（Chaoming Luo）一次性上传的四份贡献——为本 KB 跟踪以来该组最大单日批次，表明 9 月中期会议前（WG 函件投票预计 2027 年 3 月）毫米波-MLO 架构议题正在升温。

## Key technical points (EN)
- **DCN 11-26-1536-00 · TGbq** — "Link Switch for Single mmW Radio MLD". OPPO (Chaoming Luo). How a multi-link device with only one mmWave radio switches the radio between links.
- **DCN 11-26-1535-00 · TGbq** — "P2P Operation". OPPO (Chaoming Luo). Peer-to-peer operation over the integrated mmWave band.
- **DCN 11-26-1534-00 · TGbq** — "Cross Link Co-TWT". OPPO (Chaoming Luo). Coordinating Target Wake Time schedules across the sub-7 GHz anchor link and the mmWave link.
- **DCN 11-26-1533-00 · TGbq** — "immw state transition". OPPO (Chaoming Luo). State machine for IMMW radio activation/deactivation transitions.

## Key technical points (ZH)
- **DCN 11-26-1536-00 · TGbq** — "单毫米波射频 MLD 的链路切换"。OPPO（Chaoming Luo）。仅有一个毫米波射频的多链路设备如何在链路间切换射频。
- **DCN 11-26-1535-00 · TGbq** — "P2P 操作"。OPPO（Chaoming Luo）。集成毫米波频段上的点对点操作。
- **DCN 11-26-1534-00 · TGbq** — "跨链路 Co-TWT"。OPPO（Chaoming Luo）。在 7 GHz 以下锚定链路与毫米波链路间协调 TWT 唤醒调度。
- **DCN 11-26-1533-00 · TGbq** — "IMMW 状态转换"。OPPO（Chaoming Luo）。IMMW 射频激活/去激活的状态机。

## Why it matters / what's new (EN)
TGbq's Mentor stream has been dominated by Intel/Qualcomm PHY-side considerations (e.g. 11-26-1418 IMMW-STF); this OPPO batch is the first sustained *MAC-architecture* push from a handset vendor in the group — single-radio link switching, cross-link TWT coordination and an explicit IMMW state machine are all client-power-centric mechanisms, framing mmWave as an on-demand auxiliary link woken from the sub-7 GHz anchor. The cross-link Co-TWT direction extends the TWT coordination theme the KB tracks in TGbn into the mmWave amendment. Titles/authors only (per-doc bodies are account-gated).

## Why it matters / what's new (ZH)
TGbq 的 Mentor 流此前以 Intel/Qualcomm 的 PHY 侧考量为主（如 11-26-1418 IMMW-STF）；这批 OPPO 贡献是终端厂商在该组的首次持续性 *MAC 架构*推进——单射频链路切换、跨链路 TWT 协调与显式 IMMW 状态机均为以客户端功耗为中心的机制，将毫米波定位为由 7 GHz 以下锚定链路按需唤醒的辅助链路。跨链路 Co-TWT 方向把 KB 在 TGbn 中跟踪的 TWT 协调主题延伸到毫米波修正案。仅含标题/作者（文档正文需账号访问）。
