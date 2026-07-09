---
id: 2026-07-09_ieee-mentor-tgbp-preplenary-digest
date_published: 2026-07-09
date_found: 2026-07-09
type: ieee-document
title_en: "IEEE 802.11 TGbp (AMP) Mentor digest — pre-Montreal-plenary wave"
title_zh: "IEEE 802.11 TGbp（AMP）Mentor 摘要——蒙特利尔全会前贡献潮"
url: https://mentor.ieee.org/802.11/documents?is_year=2026
source_quality: snippet_only
topics: [802.11bp, AMP, backscatter, ambient-IoT, TGbp]
topic_primary: amp-iot
topics_secondary: [energy-power-save, security-privacy]
novelty_score: 2
---

## Summary (EN)

TGbp (Ambient Power / AMP, the 802.11 backscatter-IoT amendment) posted 16 new contributions in the window since May 18 through July 8. The work has clearly moved from framework debates into protocol-datatext drafting (PDT) and concrete frame/procedure definitions: PDT AMP receive procedure update (1144, Lumin Liu), AMP frame format discussion (1148, Ian Bajaj), AMP TX/RX procedure (1297, Rojan Chitrakar), AMP authentication frame format follow-up and AMP bonding follow-up (1347/1348, Guy-Armand Kamendje), an encoding example annex PDT (1251), and slot timing analysis (1269, Nelson Costa).

Two themes stand out. First, a privacy/security cluster: improvements on privacy for secure inventory (1137) and protected security-parameters indication in secure AMP communication (1154, both Hui Luo), inventory privacy considerations (1232, Solomon Trainin), and AMP permanent identifiers (1261, Chitrakar) — the group is confronting the RFID-inherited tension between tag inventorying and trackability. Second, the PHY excitation question: a joint proposal on the excitation waveform for bistatic backscatter (1355, Nelson Costa et al.) lands as the flagship PHY decision of the cycle, alongside Tx-mask consideration for frequency shift (1131) and AMP downlink location (1155). A service-period sub-group refresh (1306) rounds out the scheduling side.

## Summary (ZH)

TGbp（环境供能 / AMP，802.11 反向散射物联网修正案）在 5 月 18 日至 7 月 8 日窗口内上传了 16 份新贡献。工作明显已从框架之争进入协议正文起草（PDT）与具体帧/流程定义：AMP 接收流程 PDT 更新（1144，Lumin Liu）、AMP 帧格式讨论（1148，Ian Bajaj）、AMP 收发流程（1297，Rojan Chitrakar）、AMP 认证帧格式与 AMP 绑定跟进（1347/1348，Guy-Armand Kamendje）、编码示例附录 PDT（1251）、时隙时序分析（1269，Nelson Costa）。

两条主线突出。其一是隐私/安全集群：安全盘存的隐私改进（1137）与安全 AMP 通信中受保护的安全参数指示（1154，均为 Hui Luo）、盘存隐私考量（1232，Solomon Trainin）、AMP 永久标识符（1261，Chitrakar）——工作组正面应对继承自 RFID 的"标签盘存 vs 可追踪性"矛盾。其二是 PHY 激励问题：双基地反向散射激励波形联合提案（1355，Nelson Costa 等）是本周期的旗舰 PHY 决定，另有频移的发射掩码考量（1131）与 AMP 下行定位（1155）。服务期子组刷新（1306）补齐调度侧。

## Key technical points (EN)

- **DCN 11-26-1355 · TGbp** — Excitation Waveform for Bistatic Backscatter — Joint Proposal. Nelson Costa et al. The cycle's key PHY decision: what the energizing/excitation signal looks like for bistatic tag links.
- **DCN 11-26-1261 · TGbp** — AMP Permanent Identifiers. Rojan Chitrakar. Identifier architecture for tags — directly coupled to the trackability problem.
- **DCN 11-26-1137/1154/1232 · TGbp** — privacy cluster: secure-inventory privacy improvements, protected security-parameters indication (Hui Luo), inventory privacy considerations (Trainin).
- **DCN 11-26-1347/1348 · TGbp** — AMP Authentication Frame Format / AMP Bonding follow-ups. Guy-Armand Kamendje. Security association and device-bonding procedures for energy-harvesting tags.
- **DCN 11-26-1144/1297/1251 · TGbp** — PDT-stage receive procedure, TX/RX procedure, and encoding example annex — the amendment body is being written now.
- **DCN 11-26-1269 · TGbp** — Slot Timing Analysis (Costa); **1131** — Tx Mask for Frequency Shift (Yinan Qi); **1155** — AMP location downlink (Ben-Arie); **1306** — Service Period sub-group refresh (Qingrui Pan).

## Key technical points (ZH)

- **DCN 11-26-1355 · TGbp** — 双基地反向散射激励波形联合提案。Nelson Costa 等。本周期关键 PHY 决定：双基地标签链路的供能/激励信号形态。
- **DCN 11-26-1261 · TGbp** — AMP 永久标识符。Rojan Chitrakar。标签标识符架构——与可追踪性问题直接耦合。
- **DCN 11-26-1137/1154/1232 · TGbp** — 隐私集群：安全盘存隐私改进、受保护安全参数指示（Hui Luo）、盘存隐私考量（Trainin）。
- **DCN 11-26-1347/1348 · TGbp** — AMP 认证帧格式 / AMP 绑定跟进。Guy-Armand Kamendje。能量采集标签的安全关联与设备绑定流程。
- **DCN 11-26-1144/1297/1251 · TGbp** — PDT 阶段的接收流程、收发流程与编码示例附录——修正案正文已进入撰写期。
- **DCN 11-26-1269 · TGbp** — 时隙时序分析（Costa）；**1131** — 频移发射掩码（Yinan Qi）；**1155** — AMP 下行定位（Ben-Arie）；**1306** — 服务期子组刷新（Qingrui Pan）。

## Why it matters / what's new (EN)

Relative to the May TGbp digests (2026-05-12_ieee-mentor-tgbp-antwerp-digest, 2026-05-18_ieee-mentor-tgbp-antwerp-digest), the group has shifted from arguing frameworks to writing PDTs — receive procedures, frame formats, auth frames, encoding annexes — which is the strongest signal yet that the AMP draft skeleton is stabilizing. The bistatic excitation-waveform joint proposal (1355) and the permanent-identifier/privacy cluster are the two threads most likely to shape what commodity Wi-Fi backscatter actually looks like, and both echo debates the KB tracks in the amp-iot bin.

## Why it matters / what's new (ZH)

相对 5 月的 TGbp 摘要（2026-05-12_ieee-mentor-tgbp-antwerp-digest、2026-05-18_ieee-mentor-tgbp-antwerp-digest），工作组已从框架之争转入 PDT 撰写——接收流程、帧格式、认证帧、编码附录——这是 AMP 草案骨架趋稳的最强信号。双基地激励波形联合提案（1355）与永久标识符/隐私集群是最可能决定商用 Wi-Fi 反向散射最终形态的两条线，均与本 KB amp-iot 主题跟踪的争论相呼应。
