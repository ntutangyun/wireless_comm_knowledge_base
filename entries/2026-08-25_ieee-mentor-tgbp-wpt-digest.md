---
id: 2026-08-25_ieee-mentor-tgbp-wpt-digest
date_published: 2026-08-24
date_found: 2026-08-25
type: ieee-document
technology: wifi
title_en: "IEEE 802.11 TGbp Mentor digest — 2026-08-25: ZTE opens the WPT control-plane thread with energizer-control and WPT-setup PDTs"
title_zh: "IEEE 802.11 TGbp Mentor 摘要 — 2026-08-25：中兴以馈能器控制与 WPT 建立信令 PDT 开启无线供能控制面线程"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bp
source_quality: snippet_only
topics: [TGbp, 802.11bp, AMP, ambient-power, WPT, PDT]
topic_primary: amp-iot
topics_secondary: [energy-power-save]
novelty_score: 1
---

## Summary (EN)
TGbp uploaded two new proposed draft text (PDT) contributions on 24 August 2026, both from Zhanjing Bao (ZTE), that together open a wireless-power-transfer (WPT) control-plane thread: DCN 11-26-1559 "PDT AMP WPT setup request and response frame" and DCN 11-26-1560 "PDT AMP energizer control." The pairing suggests normative signaling for how an AMP (ambient power) device and an energizer negotiate a power-delivery session — a setup request/response handshake plus ongoing control of the energizing waveform. This extends the WPT sub-thread that Huawei opened in late July with the WPT End-Time PDT (DCN 1502, see 2026-07-28_ieee-mentor-tgbp-digest) from a single timing parameter into session-establishment and energizer-management machinery.

A third TGbp document also surfaced on 24 August: DCN 11-26-1539 "PDT Some PHY TBDs in D0.5" (Alice Jialing Li Chen, Qualcomm). Its DCN was reserved earlier in the month but revision 0 was only uploaded now — a PHY clean-up contribution resolving open TBD placeholders in the D0.50 draft ahead of the predicted September first working-group letter ballot. Alongside the Infineon security trilogy completed last week (DCNs 1552/1554/1557) and the Huawei transmit/receive procedure updates (1546/1547), TGbp remains the only 802.11 task group producing substantive normative text during the pre-September-interim lull.

## Summary (ZH)
TGbp 于 2026 年 8 月 24 日上传了两份新的拟议草案文本（PDT）贡献，均出自 Zhanjing Bao（中兴通讯），二者共同开启了无线供能（WPT）控制面线程：DCN 11-26-1559 "PDT AMP WPT setup request and response frame"（WPT 建立请求/响应帧）与 DCN 11-26-1560 "PDT AMP energizer control"（馈能器控制）。这一配对表明其内容是 AMP（环境供能）设备与馈能器协商供能会话的规范信令——建立请求/响应握手，外加对馈能波形的持续控制。这将华为 7 月底以 WPT 结束时间 PDT（DCN 1502，见 2026-07-28_ieee-mentor-tgbp-digest）开启的 WPT 子线程，从单一时序参数扩展为会话建立与馈能器管理机制。

同日还出现了第三份 TGbp 文档：DCN 11-26-1539 "PDT Some PHY TBDs in D0.5"（Alice Jialing Li Chen，高通）。该 DCN 号本月早些时候即已预留，但第 0 版直到现在才上传——这是一份在预计 9 月首轮工作组函件投票前解决 D0.50 草案中待定（TBD）占位符的 PHY 清理贡献。加上上周补全的英飞凌安全三部曲（DCN 1552/1554/1557）与华为的收发流程更新（1546/1547），TGbp 仍是 9 月中期会议前沉寂期内唯一持续产出实质性规范文本的 802.11 任务组。

## Key technical points (EN)
- **DCN 11-26-1560-00 · TGbp** — "PDT AMP energizer control." Zhanjing Bao (ZTE). Uploaded 24 Aug 2026. Normative text for controlling the energizer — the entity radiating the power-delivery waveform to ambient-power devices.
- **DCN 11-26-1559-00 · TGbp** — "PDT AMP WPT setup request and response frame." Zhanjing Bao (ZTE). Uploaded 24 Aug 2026. Defines a request/response frame exchange for establishing a wireless-power-transfer session; complements Huawei's WPT End-Time PDT (DCN 1502, July).
- **DCN 11-26-1539-00 · TGbp** — "PDT Some PHY TBDs in D0.5." Alice Jialing Li Chen (Qualcomm). Uploaded 24 Aug 2026 (DCN reserved earlier, first upload now). PHY TBD resolution in draft D0.50 ahead of the predicted September first WG letter ballot.
- Also seen: DCN 11-26-1556-01 · TGbt — revision 1 of Mark Hamilton's (Ruckus) proposed comment-resolution procedure, an editorial rev of the process document digested 2026-08-23.
- Document bodies are gated (Mentor per-doc downloads return 418/403 anonymously); only title/author/affiliation metadata are public.

## Key technical points (ZH)
- **DCN 11-26-1560-00 · TGbp** — "PDT AMP energizer control"。Zhanjing Bao（中兴）。2026 年 8 月 24 日上传。关于控制馈能器（向环境供能设备辐射供能波形的实体）的规范文本。
- **DCN 11-26-1559-00 · TGbp** — "PDT AMP WPT setup request and response frame"。Zhanjing Bao（中兴）。2026 年 8 月 24 日上传。定义建立无线供能会话的请求/响应帧交换；与华为 7 月的 WPT 结束时间 PDT（DCN 1502）互补。
- **DCN 11-26-1539-00 · TGbp** — "PDT Some PHY TBDs in D0.5"。Alice Jialing Li Chen（高通）。2026 年 8 月 24 日上传（DCN 号早前预留，现为首次上传）。在预计 9 月首轮工作组函件投票前解决 D0.50 草案中的 PHY 待定项。
- 另见：DCN 11-26-1556-01 · TGbt——Mark Hamilton（Ruckus）意见处理流程提案的第 1 版，为 2026-08-23 已摘要的流程文档的编辑性修订。
- 文档正文受限（Mentor 单文档下载对匿名访问返回 418/403）；仅标题/作者/机构元数据公开。

## Why it matters / what's new (EN)
The WPT control plane is the newest normative front in 802.11bp. Until now the amp-iot thread in this KB has tracked backscatter data transfer (transmit/receive procedures, channel access, triggering) and the security architecture (Infineon's trilogy); explicit energizer control and WPT session setup signaling — who powers whom, when, and under what negotiated terms — is a distinct third pillar, and ZTE's pairing of a setup handshake with an energizer-control PDT stakes it out as first-mover normative text. With Qualcomm simultaneously clearing PHY TBDs in D0.50, the contribution pattern reads as a coordinated final push to make the draft ballot-ready for the September interim — the nearest hard milestone on the 802.11 calendar (first WG letter ballot predicted September 2026 per the official Timelines page, still stamped 2026-08-06).

## Why it matters / what's new (ZH)
WPT 控制面是 802.11bp 最新的规范化战线。此前本知识库的 amp-iot 线程跟踪的是反向散射数据传输（收发流程、信道接入、触发）与安全架构（英飞凌三部曲）；显式的馈能器控制与 WPT 会话建立信令——谁为谁供能、何时供能、以何种协商条件供能——是独立的第三支柱，中兴以建立握手与馈能器控制 PDT 的配对率先提交了这一方向的规范文本。与此同时高通清理 D0.50 中的 PHY 待定项，整体贡献模式呈现为面向 9 月中期会议使草案具备投票条件的协同冲刺——这是 802.11 日程上最近的硬性里程碑（官方 Timelines 页面预测 2026 年 9 月首轮工作组函件投票，页面时间戳仍为 2026-08-06）。
