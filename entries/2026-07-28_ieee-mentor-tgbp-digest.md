---
id: 2026-07-28_ieee-mentor-tgbp-digest
date_published: 2026-07-28
date_found: 2026-07-28
type: ieee-document
title_en: "IEEE 802.11 TGbp Mentor digest — 2026-07-28: AMP service-period and WPT end-time PDTs land ahead of the September ballot"
title_zh: "IEEE 802.11 TGbp Mentor 摘要 — 2026-07-28：AMP 服务周期与 WPT 结束时间 PDT 在 9 月表决前落地"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bp
source_quality: snippet_only
topics: [802.11bp, AMP, IoT, WPT]
topic_primary: amp-iot
topics_secondary: [energy-power-save]
novelty_score: 1
---

## Summary (EN)

TGbp (Ambient Power communication, the backscatter/energy-harvesting IoT amendment) uploaded two new Protocol Design Text (PDT) contributions in the post-Montreal tail (DCN 11-26-1502 and 11-26-1503, the latter already at r1 within a day). Both are normative-text proposals rather than discussion slides, consistent with the group racing to mature draft D0.50 toward its first working-group letter ballot, which the official 802.11 timelines page predicts for September 2026.

DCN 11-26-1502 (Panpan Li, Huawei) proposes text for a WPT (Wireless Power Transfer) End Time Indication — signalling that lets an AMP device know when the energising/power-delivery window closes, which matters because a battery-free station must budget its harvested energy against a known transmission opportunity. DCN 11-26-1503 (Ian Bajaj, HaiLa Technologies) proposes PDT for the AMP Service Period — the scheduled window structure in which AMP devices are served; HaiLa is a backscatter-silicon startup, and its participation alongside Huawei shows the AMP normative text is being shaped by both incumbents and dedicated backscatter vendors.

## Summary (ZH)

TGbp（环境供能通信，即反向散射/能量收集 IoT 修订案）在蒙特利尔全会后的尾声阶段上传了两份新的协议设计文本（PDT）贡献（DCN 11-26-1502 与 11-26-1503，后者一天内已更新至 r1）。两者均为规范性文本提案而非讨论性幻灯片，这与该工作组加速完善 D0.50 草案、冲刺官方时间线页面预测的 2026 年 9 月首次工作组信函表决的节奏一致。

DCN 11-26-1502（李攀攀，华为）提出 WPT（无线能量传输）结束时间指示的文本——让 AMP 设备知晓供能/功率传输窗口何时关闭；对于无电池站点而言，必须将收集到的能量与已知的传输机会相匹配，这一信令至关重要。DCN 11-26-1503（Ian Bajaj，HaiLa Technologies）提出 AMP 服务周期的 PDT——即服务 AMP 设备的调度窗口结构；HaiLa 是一家反向散射芯片初创公司，其与华为共同参与表明 AMP 规范文本正由行业巨头与专业反向散射厂商共同塑造。

## Key technical points (EN)

- **DCN 11-26-1502-00 · TGbp** — "PDT WPT End Time Indication". Panpan Li (Huawei). Uploaded 26-Jul-2026. Normative text signalling when the wireless-power-transfer window ends, so energy-harvesting STAs can budget harvested energy.
- **DCN 11-26-1503-01 · TGbp** — "PDT AMP Service period". Ian Bajaj (HaiLa Technologies). Uploaded 27/28-Jul-2026 (r0→r1 in one day). Normative text for the scheduled service-period structure serving AMP devices.
- Both target draft D0.50; the 802.11 timelines page (stamped 2026-07-17) predicts TGbp's first WG letter ballot in September 2026.

## Key technical points (ZH)

- **DCN 11-26-1502-00 · TGbp** — "PDT WPT End Time Indication"（WPT 结束时间指示 PDT）。李攀攀（华为）。2026-07-26 上传。规范性文本，用于指示无线能量传输窗口何时结束，使能量收集站点能够规划能量预算。
- **DCN 11-26-1503-01 · TGbp** — "PDT AMP Service period"（AMP 服务周期 PDT）。Ian Bajaj（HaiLa Technologies）。2026-07-27/28 上传（一天内 r0→r1）。定义服务 AMP 设备的调度服务周期结构的规范性文本。
- 两份文本均面向 D0.50 草案；802.11 时间线页面（2026-07-17 更新）预测 TGbp 将于 2026 年 9 月进行首次工作组信函表决。

## Why it matters / what's new (EN)

The post-Montreal Mentor stream has otherwise gone quiet, and TGbp is the only group producing substantive normative text this week — a signal that the AMP schedule (first WG ballot September 2026) is the nearest-term standards deadline in 802.11. These two PDTs extend the AMP scheduling/power-budget thread previously tracked in 2026-07-11_ieee-mentor-tgbp-digest (Huawei AMP PDT cleanup) and 2026-05-03_ieee-11bp-amp-ul-channel-access (Qualcomm UL channel access): the service-period structure and the WPT end-time indication are the remaining pieces a battery-free STA needs to know *when* it can transmit and *how much* energy it will have.

## Why it matters / what's new (ZH)

蒙特利尔全会后 Mentor 文档流总体趋于安静，本周 TGbp 是唯一产出实质性规范文本的工作组——这表明 AMP 的日程（2026 年 9 月首次工作组表决）是 802.11 中最临近的标准截止点。这两份 PDT 延续了此前在 2026-07-11_ieee-mentor-tgbp-digest（华为 AMP PDT 清理）与 2026-05-03_ieee-11bp-amp-ul-channel-access（高通上行信道接入）中跟踪的 AMP 调度/能量预算主线：服务周期结构与 WPT 结束时间指示，正是无电池站点确定"何时可发送"与"将有多少能量"所需的最后拼图。
