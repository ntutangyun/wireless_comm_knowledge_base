---
id: 2026-08-13_ieee-mentor-tgbq-digest
date_published: 2026-08-13
date_found: 2026-08-13
type: ieee-document
title_en: "IEEE 802.11 TGbq Mentor digest — 2026-08-13"
title_zh: "IEEE 802.11 TGbq Mentor 当日摘要 — 2026-08-13"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bq
source_quality: full
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
TGbq's Mentor stream has been dominated by Intel/Qualcomm PHY-side considerations (e.g. 11-26-1418 IMMW-STF); this OPPO batch is the first sustained *MAC-architecture* push from a handset vendor in the group. **All four document bodies were subsequently retrieved and read (2026-08-31), and they correct the reading first recorded here.** The unifying theme is not client power saving but **management-plane offload to the sub-7 GHz anchor, plus beam-aware MAC state**:

- **11-26-1533** adds States **4d ("beam not established") and 4f ("beam established")** and matching Class 4d/4f frames on a *separate* state machine, because an IMMW STA in State 3/4 still cannot exchange MAC frames until a beam exists. Post-association only; pre-association is explicitly TBD.
- **11-26-1534** is **inter-AP multi-AP coordination (MAPC), not client power save** — there is no shadow-service-period concept in it. Because IMMW MLDs offload link management to sub-7, MAPC Discovery/Negotiation between two IMMW APs has to be carried **by their two sub-7 APs acting as proxies (cross-link)**, extending MAPC to Co-BTWT/Co-ITWT for OBSS interference mitigation. The document states that 802.11bn D1.5 negotiates MAPC **per link**, and that **no Co-BTWT/Co-ITWT is defined yet**.
- **11-26-1535** does IMMW peer-to-peer via **multi-link TDLS**: setup frames relayed through the AP on sub-7, with the mmW TDLS link managed by the sub-7 TDLS link (preferred option: one-step joint setup via a TDLS ML element).
- **11-26-1536** adds a Reconfiguration Operation Type **"link switch"** in the Per-STA Profile of the Reconfiguration ML element, and **reuses** the current link's Established Beams, Negotiated TWTs/SPs and TTLM on the target mmW link when the STA's position is unchanged. It builds on 11-26-0834 "Multi-radio operation on mmW link".

The cross-link Co-TWT direction extends the TWT coordination theme the KB tracks in TGbn into the mmWave amendment.

## Why it matters / what's new (ZH)
TGbq 的 Mentor 流此前以 Intel/Qualcomm 的 PHY 侧考量为主（如 11-26-1418 IMMW-STF）；这批 OPPO 贡献是终端厂商在该组的首次持续性 *MAC 架构*推进。**四份文档正文已于 2026-08-31 全部获取并阅读，并据此更正了此处最初的判断。** 其统一主题并非客户端功耗，而是**把管理面卸载到 7 GHz 以下锚定链路，外加波束感知的 MAC 状态**：

- **11-26-1533** 新增状态 **4d（波束未建立）与 4f（波束已建立）** 及对应的 Class 4d/4f 帧，置于一套*独立*状态机上——因为处于状态 3/4 的 IMMW STA 在波束建立前仍无法交换 MAC 帧。仅限关联后；关联前明确标注为 TBD。
- **11-26-1534** 是**AP 间多 AP 协同（MAPC），不是客户端省电**——文中并无"影子服务期"概念。由于 IMMW MLD 把链路管理卸载到 7 GHz 以下，两个 IMMW AP 之间的 MAPC 发现/协商必须**由各自的 7 GHz 以下 AP 代理承载（跨链路）**，并将 MAPC 扩展到 Co-BTWT/Co-ITWT 以缓解 OBSS 干扰。文档明确指出 802.11bn D1.5 的 MAPC 是**按链路**协商的，且**尚未定义 Co-BTWT/Co-ITWT**。
- **11-26-1535** 通过**多链路 TDLS** 实现 IMMW 点对点：建立帧经 AP 在 7 GHz 以下中继，毫米波 TDLS 链路由 7 GHz 以下 TDLS 链路管理（首选方案为经 TDLS ML 元素一步式联合建立）。
- **11-26-1536** 在 Reconfiguration ML 元素的 Per-STA Profile 中新增重配置操作类型 **"链路切换"**，并在 STA 位置不变时于目标毫米波链路上**复用**当前链路的已建立波束、已协商 TWT/SP 与 TTLM。该文基于 11-26-0834《毫米波链路上的多射频操作》。

跨链路 Co-TWT 方向把 KB 在 TGbn 中跟踪的 TWT 协调主题延伸到毫米波修正案。
