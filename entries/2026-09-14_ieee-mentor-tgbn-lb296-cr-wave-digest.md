---
id: 2026-09-14_ieee-mentor-tgbn-lb296-cr-wave-digest
date_published: 2026-09-13
date_found: 2026-09-14
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 Mentor digest — TGbn LB296 comment-resolution wave and a PAR-target critique of D2.0 (2026-09-11 to 2026-09-13)"
title_zh: "IEEE 802.11 Mentor 摘要 — TGbn LB296 意见处理浪潮，以及一份针对 D2.0 的 PAR 目标质疑（2026-09-11 至 2026-09-13）"
url: https://mentor.ieee.org/802.11/documents?is_year=2026
source_quality: partial
topics: [TGbn, 802.11bn, LB296, MAPC, Co-BF, Co-SR, DRU, UHR-STF, P-EDCA, OMP, seamless-roaming]
topic_primary: mapc-cosr
topics_secondary: [wifi8-uhr, roaming-mobility]
novelty_score: 2
---

## Summary (EN)

TGbn (Ultra High Reliability) uploaded about twenty new comment-resolution (CR) documents between 2026-09-11 and 2026-09-13, ahead of the IEEE 802 wireless interim session that opened 2026-09-13 in Waikoloa, Hawaii. Most are first-time (r0) resolutions against Letter Ballot 296, the D2.0 recirculation ballot this KB recorded at 77% as of 2026-09-02 (`2026-09-04_ieee-tgbn-d20-lb296-recirc-77pct`); 1671, 1678, 1809 and 1810 are revisions of earlier submissions. Until this wave the KB had only recorded that numeric snapshot and a single OMP comment-resolution instalment (`2026-09-11_ieee-mentor-multi-group-digest`, DCN 1678). The wave now spans nearly every technical area of the D2.0 draft: Multi-AP Coordination (MAPC) negotiation frames and scheme profiles, Coordinated Beamforming / Coordinated Spatial Reuse (Co-BF/Co-SR) editorial cleanup, Distributed Resource Units (DRU) PHY transmission and the UHR-STF preamble field, P-EDCA channel access, roaming — a four-part seamless-roaming editorial series plus block-acknowledgment errata for operation during a Seamless Transition (ST) — and coexistence between Dynamic Power Save (DPS) and TDLS. Standing apart from the CR work, Carlos Rios (Terabit Wireless) posted a critique deck arguing that D2.0 fails TGbn's own 25%-throughput / 25%-latency / 25%-packet-loss objectives and proposing a D3.0 with a new PHY instead. Two revised discussion papers on NAV determination for Co-BF sounding and transmission (Ruijie Networks) round out the wave, alongside the group's July-to-September teleconference minutes (NTT).

## Summary (ZH)

TGbn（超高可靠性）在 2026-09-11 至 2026-09-13 期间上传了约二十份新的意见处理（CR）文档，为 2026-09-13 在夏威夷 Waikoloa 开幕的 IEEE 802 无线临时会议做准备。其中多数是针对第 296 号信件投票（LB296，即本知识库记录截至 2026-09-02 通过率为 77% 的 D2.0 再循环投票，`2026-09-04_ieee-tgbn-d20-lb296-recirc-77pct`）的首次（r0）意见处理；1671、1678、1809、1810 则是此前提交稿的修订版。在此之前，本知识库仅记录了该投票的数值快照以及一份 OMP 意见处理提案（`2026-09-11_ieee-mentor-multi-group-digest`，DCN 1678）。此次浪潮几乎覆盖了 D2.0 草案的所有技术领域：多 AP 协调（MAPC）协商帧与方案配置文件、协调波束成形/协调空间复用（Co-BF/Co-SR）编辑性清理、分布式资源单元（DRU）PHY 传输与 UHR-STF 前导码字段、P-EDCA 信道接入、漫游（四部分的无缝漫游编辑性修正系列，以及无缝切换（Seamless Transition，ST）期间块确认操作的勘误），以及动态省电（DPS）与 TDLS 之间的共存问题。与意见处理工作性质不同的是，Carlos Rios（Terabit Wireless）提交了一份质疑性文稿，主张 D2.0 未能达成 TGbn 自身设定的吞吐量提升 25%、时延降低 25%、丢包降低 25% 的目标，并建议改以新的 PHY 起草 D3.0。两份关于 Co-BF 探测与传输 NAV 判定的修订版讨论文档（Ruijie Networks）以及该组七月至九月的电话会议纪要（NTT）共同构成本次浪潮。

## Key technical points (EN)

- **DCN 11-26-1730r0 · TGbn** — "LB296 CR for MAPC negotiation frame part 1". Zhenpeng Shi (Huawei), uploaded 13-Sep-2026. Comment resolution against the MAPC negotiation frame definition. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1730&is_year=2026)
- **DCN 11-26-1791r0 · TGbn** — "LB296 CR for MAPC scheme profile in Clause 9". Yue Zhao (Huawei), uploaded 13-Sep-2026. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1791&is_year=2026)
- **DCN 11-26-1757r0 · TGbn** — "Urgent MAPC and Co-TDMA CIDs". Brian Hart (Cisco Systems), uploaded 11-Sep-2026. Flagged by the author as needing priority resolution. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1757&is_year=2026)
- **DCN 11-26-1702r0 · TGbn** — "LB296 CR for Co-BF and Co-SR Editorials Part 2". Jason Yuchen Guo (Huawei), uploaded 11-Sep-2026. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1702&is_year=2026)
- **DCN 11-26-1779r0 / 1782r0 · TGbn** — "LB296 PHY CR for 38.3.4 Transmission of DRU" and "...for 38.3.15.10 UHR-STF". Eunsung Park (LG Electronics), uploaded 11-Sep-2026. Comment resolutions on the DRU PHY transmission clause and the UHR-STF preamble field. [document 1779](https://mentor.ieee.org/802.11/documents?is_dcn=1779&is_year=2026) / [document 1782](https://mentor.ieee.org/802.11/documents?is_dcn=1782&is_year=2026)
- **DCN 11-26-1671r1 · TGbn** — "LB296 CR for 37.2.2. P-EDCA part 1". Dmitry Akhmetov (Intel), uploaded 12-Sep-2026 (revision). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1671&is_year=2026)
- **DCN 11-26-1783r0 · TGbn** — "LB296 CR for coexistence between DPS and TDLS". Chun Huang (ZTE), uploaded 13-Sep-2026. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1783&is_year=2026)
- **Roaming cluster — DCN 11-26-1809r0/r1 through 1812r0 · TGbn** — "LB296 CR on Seamles Roaming editorial Part 1-4". Duncan Ho (Qualcomm), uploaded 11/13-Sep-2026. Four-part editorial correction series for the seamless-roaming clause text. [document 1809](https://mentor.ieee.org/802.11/documents?is_dcn=1809&is_year=2026)
- **Roaming cluster — DCN 11-26-1729r0 · TGbn** — "LB296 Errata for BA Operation During ST". Giovanni Chisci (Qualcomm), uploaded 11-Sep-2026. "ST" here is **Seamless Transition**, the D2.0 roaming procedure, not a sounding exchange: the document resolves 18 CIDs plus editorials against block-ack behaviour around ST preparation, the ST execution request/response, context transfer during ST, and the downlink draining period — for example restoring a missing Block Ack Timeout Value field in the Extended BA Parameters Info field format. [document](https://mentor.ieee.org/802.11/documents?is_dcn=1729&is_year=2026)
- **DCN 11-26-1741r0 · TGbn** — "Thoughts on IEEE802.11bn". Carlos Rios (Terabit Wireless), uploaded 13-Sep-2026. Not a comment resolution but a critique deck, and the most substantive discussion item in the window. It argues that D2.0 "DOES NOT deliver 25% more throughput, 25% less latency and 25% less packet loss than IEEE802.11be" — the three objectives in TGbn's own project authorisation — and that D2.0 performs only "marginally better than WiFi-7", its one real gain being extended range-at-rate that is "impactful only at the lowest MCSs". The deck places 802.11bn in a generational table at the same 34.5 Gbps peak rate as 802.11be, with MAPC, DRU, LDPC2, ELR and UEQM as its headline features, and concludes that "for all practical purposes, WiFi-8 IS JUST REPACKAGED WiFi-7". Its proposal is that TGbn instead draft a D3.0 carrying a PHY that can actually reach the three targets — either by adding a 400 MHz MCS set to the Wi-Fi 7 PHY, or by incorporating "DPWiFi" (32x32 polarization-multiplexed MIMO, quoted at 92 Gbps), the author's own proposal developed across six earlier UHR-SG and TGbn submissions from 2023-2024. The author's abstract describes himself as "A WiFi Old-Timer (been hanging around since 1998!)". [document](https://mentor.ieee.org/802.11/documents?is_dcn=1741&is_year=2026)
- Also uploaded, not detailed individually: DCN 1718r0/1719r0 (Qualcomm, LB296 CRs for 9.4.2.361.3 and 38.1.1), 1723r0/1724r0 (Qualcomm, MAC-CRs for 37.2.3 and 37.7.3), 1734r0 (MediaTek, PHY CIDs on DRUs Part 1), 1499r1/1500r1 (Ruijie, revised NAV-determination discussion papers for Co-BF sounding/transmission — discussion papers, not CRs), and 1813r0 (NTT, July-September teleconference minutes). Revisions r0-r3 of the LB296 comment spreadsheet itself (DCN 1613, Huawei) were also still being uploaded through 10-Sep, so comment intake against D2.0 was ongoing into this window.

## Key technical points (ZH)

- **DCN 11-26-1730r0 · TGbn** — "MAPC 协商帧第一部分 LB296 意见处理"。Zhenpeng Shi（华为），2026-09-13 上传。针对 MAPC 协商帧定义的意见处理。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1730&is_year=2026)
- **DCN 11-26-1791r0 · TGbn** — "第 9 条款 MAPC 方案配置文件的 LB296 意见处理"。Yue Zhao（华为），2026-09-13 上传。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1791&is_year=2026)
- **DCN 11-26-1757r0 · TGbn** — "紧急 MAPC 与 Co-TDMA CID"。Brian Hart（思科），2026-09-11 上传。作者标注为需优先处理。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1757&is_year=2026)
- **DCN 11-26-1702r0 · TGbn** — "Co-BF 与 Co-SR 编辑性修正第二部分 LB296 意见处理"。Jason Yuchen Guo（华为），2026-09-11 上传。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1702&is_year=2026)
- **DCN 11-26-1779r0 / 1782r0 · TGbn** — "38.3.4 DRU 传输" 与 "38.3.15.10 UHR-STF" 的 LB296 PHY 意见处理。Eunsung Park（LG 电子），2026-09-11 上传。分别针对 DRU PHY 传输条款与 UHR-STF 前导码字段的意见处理。[文档链接1](https://mentor.ieee.org/802.11/documents?is_dcn=1779&is_year=2026) / [文档链接2](https://mentor.ieee.org/802.11/documents?is_dcn=1782&is_year=2026)
- **DCN 11-26-1671r1 · TGbn** — "37.2.2 P-EDCA 第一部分 LB296 意见处理"。Dmitry Akhmetov（英特尔），2026-09-12 上传（修订版）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1671&is_year=2026)
- **DCN 11-26-1783r0 · TGbn** — "DPS 与 TDLS 共存的 LB296 意见处理"。Chun Huang（中兴），2026-09-13 上传。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1783&is_year=2026)
- **漫游类 — DCN 11-26-1809r0/r1 至 1812r0 · TGbn** — "无缝漫游编辑性修正第 1-4 部分 LB296 意见处理"。Duncan Ho（高通），2026-09-11/13 上传。针对无缝漫游条款文本的四部分编辑性修正系列。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1809&is_year=2026)
- **漫游类 — DCN 11-26-1729r0 · TGbn** — "ST 期间 BA 操作勘误的 LB296 意见处理"。Giovanni Chisci（高通），2026-09-11 上传。此处的 "ST" 指 **Seamless Transition（无缝切换）**，即 D2.0 的漫游流程，而非探测（sounding）交互：该文档针对 ST 准备、ST 执行请求/响应、ST 期间的上下文迁移与下行排空期相关的块确认行为，处理了 18 条 CID 及若干编辑性修改——例如在扩展 BA 参数信息字段格式中补回遗漏的 Block Ack Timeout Value 字段。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1729&is_year=2026)
- **DCN 11-26-1741r0 · TGbn** — "对 IEEE802.11bn 的思考"。Carlos Rios（Terabit Wireless），2026-09-13 上传。这不是意见处理文档，而是一份质疑性文稿，也是本窗口内最具实质性的讨论文档。文稿主张 D2.0"并未相对 IEEE802.11be 带来 25% 的吞吐量提升、25% 的时延降低与 25% 的丢包降低"——这三项正是 TGbn 项目授权中设定的目标——并认为 D2.0 相对 Wi-Fi 7 仅"略有提升"，唯一实质收益是速率-覆盖范围的延伸，而"只在最低 MCS 档位上才有意义"。文稿在代际对比表中把 802.11bn 与 802.11be 并列为同样 34.5 Gbps 的峰值速率，代表性特性列为 MAPC、DRU、LDPC2、ELR 与 UEQM，并得出结论："就一切实用意义而言，WiFi-8 只是重新包装的 WiFi-7"。其建议是：TGbn 改为起草一版 D3.0，采用真正能够达成上述三项目标的新 PHY——或者在 Wi-Fi 7 PHY 基础上增加 400 MHz 的 MCS 集合，或者引入作者自 2023-2024 年间在 UHR-SG 与 TGbn 六份提案中持续推进的 "DPWiFi"（32x32 极化复用 MIMO，文中标称 92 Gbps）。作者在摘要中自称"一位 WiFi 老兵（从 1998 年就混迹于此！）"。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1741&is_year=2026)
- 另有未逐条详述的上传：DCN 1718r0/1719r0（高通，针对 9.4.2.361.3 与 38.1.1 的 LB296 意见处理）、1723r0/1724r0（高通，针对 37.2.3 与 37.7.3 的 MAC 意见处理）、1734r0（联发科，DRU 相关 PHY CID 第一部分）、1499r1/1500r1（Ruijie，关于 Co-BF 探测/传输 NAV 判定的修订版讨论文档——属讨论文档而非意见处理），以及 1813r0（NTT，七至九月电话会议纪要）。此外，LB296 意见汇总表本身（DCN 1613，华为）的 r0-r3 各版本在 9 月 10 日前仍在陆续上传，说明针对 D2.0 的意见提交在本窗口期间仍在进行。

## Why it matters / what's new (EN)

Until this wave, the KB's record of LB296 (the D2.0 recirculation ballot recorded at 77% approval as of 2026-09-02) consisted only of that numeric snapshot and a single comment-resolution instalment on OMP. This three-day upload burst — timed immediately ahead of the 2026-09-13 Waikoloa interim — shows the ballot's comment resolution touching nearly every technical surface of the D2.0 draft simultaneously: MAPC negotiation frames and scheme profiles, Co-BF/Co-SR editorial text, DRU PHY transmission, the UHR-STF field, P-EDCA, seamless roaming and the Seamless Transition block-ack errata, and DPS/TDLS coexistence. The volume and breadth (contributions from Huawei, Qualcomm, LG Electronics, Intel, ZTE, Cisco and MediaTek) indicates the group is working to close out D2.0's comment backlog in the run-up to the interim rather than opening new mechanism work. The one document that cuts against that reading is DCN 1741, which reopens the project-level question of whether D2.0 meets the 25%/25%/25% throughput, latency and packet-loss objectives TGbn set for itself — a challenge aimed at the draft as a whole rather than at any individual comment, and one that proposes a further PHY generation (a 400 MHz MCS set, or polarization-multiplexed MIMO) rather than editorial repair.

## Why it matters / what's new (ZH)

在此次浪潮之前，本知识库对 LB296（截至 2026-09-02 通过率记录为 77% 的 D2.0 再循环投票）的记录仅包括该数值快照与一份关于 OMP 的意见处理提案。这次紧接在 2026-09-13 Waikoloa 临时会议之前的三天上传高峰，显示该投票的意见处理同时触及 D2.0 草案几乎所有技术层面：MAPC 协商帧与方案配置文件、Co-BF/Co-SR 编辑性文本、DRU PHY 传输、UHR-STF 字段、P-EDCA、无缝漫游及无缝切换期间的块确认勘误，以及 DPS/TDLS 共存。参与方数量与覆盖面之广（华为、高通、LG 电子、英特尔、中兴、思科、联发科）表明该组正致力于在临时会议前清理 D2.0 的意见积压，而非开启新的机制工作。唯一与这一判断相左的文档是 DCN 1741：它把问题重新拉回项目层面——D2.0 是否达成了 TGbn 为自己设定的 25%/25%/25% 吞吐量、时延与丢包目标——这一质疑针对的是整份草案而非某条具体意见，且其给出的出路是再推进一代 PHY（400 MHz MCS 集合，或极化复用 MIMO），而非编辑性修补。

## Images

None.
