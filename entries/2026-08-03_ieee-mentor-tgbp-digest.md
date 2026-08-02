---
id: 2026-08-03_ieee-mentor-tgbp-digest
date_published: 2026-08-03
date_found: 2026-08-03
type: ieee-document
title_en: "IEEE 802.11 TGbp Mentor digest — 2026-08-03: AMP normative-text wave continues ahead of September ballot"
title_zh: "IEEE 802.11 TGbp Mentor 摘要 — 2026-08-03：AMP 规范文本浪潮在九月投票前持续推进"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bp
source_quality: snippet_only
topics: [802.11bp, AMP, ambient-power, backscatter]
topic_primary: amp-iot
topics_secondary: [energy-power-save]
novelty_score: 1
---

## Summary (EN)

TGbp (Ambient Power / AMP IoT) uploaded six substantive proposed-draft-text (PDT) contributions in the July 29–31 window, continuing the normative-text wave first seen in the 28 July digest and confirming that the task group is racing to assemble D0.x text ahead of its predicted September 2026 first WG letter ballot. The contributors span the AMP ecosystem: Huawei (triggering procedure, RFID frame), HaiLa Technologies (excitation frame format, group ack frame format), Qualcomm (recommended OFDM sequences), and OPPO (UL frequency shift for actively transmitting non-AP AMP STAs).

Elsewhere the Mentor tail was quiet: TGbn posted one substantive LB291 comment-resolution document (Hikvision, Co-SR/Co-BF hidden-node issue) plus its September meeting agenda, and the AI Offload SG posted its September agenda — the usual between-sessions administrivia before the September interim.

## Summary (ZH)

TGbp（环境能量供电 / AMP IoT）在 7 月 29–31 日窗口上传了六份实质性拟稿文本（PDT）贡献，延续了 7 月 28 日摘要中首次出现的规范文本浪潮，确认该任务组正加紧组装 D0.x 文本，以赶上预计 2026 年 9 月的首次工作组信函投票。贡献方覆盖 AMP 生态：华为（触发流程、RFID 帧）、HaiLa Technologies（激励帧格式、组确认帧格式）、高通（推荐 OFDM 序列）、OPPO（主动发射非 AP AMP STA 的上行频移）。

Mentor 其余部分安静：TGbn 上传一份实质性 LB291 意见处理文档（海康威视，Co-SR/Co-BF 隐藏节点问题）及其九月会议议程，AI Offload SG 上传九月议程——九月中期会议前的常规会务节奏。

## Key technical points (EN)

- **DCN 11-26-1508-01 · TGbp** — PDT AMP Excitation frame format. Ian Bajaj (HaiLa Technologies).
- **DCN 11-26-1509-00 · TGbp** — PDT Recommended OFDM Sequences. Steve Shellhammer (Qualcomm).
- **DCN 11-26-1519-00 · TGbp** — PDT AMP Triggering Procedure. Rojan Chitrakar (Huawei).
- **DCN 11-26-1520-00 · TGbp** — AMP RFID frame. Rojan Chitrakar (Huawei).
- **DCN 11-26-1521-01 · TGbp** — PDT AMP Group Ack frame format. Ian Bajaj (HaiLa Technologies).
- **DCN 11-26-1522-00 · TGbp** — PDT UL Frequency Shift for Active Tx non-AP AMP STA. Yinan Qi (OPPO).
- **DCN 11-26-1504-00 · TGbn** — LB291 CR for CID 6471, Co-SR/Co-BF hidden-node issue. Jingyang Luo (Hikvision).
- Admin: 1510 (TGbn September agenda, Qualcomm), 1516 (AI Offload SG September agenda, Qualcomm).

## Key technical points (ZH)

- **DCN 11-26-1508-01 · TGbp** — PDT AMP 激励帧格式。Ian Bajaj（HaiLa Technologies）。
- **DCN 11-26-1509-00 · TGbp** — PDT 推荐 OFDM 序列。Steve Shellhammer（Qualcomm）。
- **DCN 11-26-1519-00 · TGbp** — PDT AMP 触发流程。Rojan Chitrakar（华为）。
- **DCN 11-26-1520-00 · TGbp** — AMP RFID 帧。Rojan Chitrakar（华为）。
- **DCN 11-26-1521-01 · TGbp** — PDT AMP 组确认帧格式。Ian Bajaj（HaiLa Technologies）。
- **DCN 11-26-1522-00 · TGbp** — PDT 主动发射非 AP AMP STA 的上行频移。Yinan Qi（OPPO）。
- **DCN 11-26-1504-00 · TGbn** — LB291 CID 6471 意见处理，Co-SR/Co-BF 隐藏节点问题。Jingyang Luo（海康威视）。
- 会务：1510（TGbn 九月议程，高通）、1516（AI Offload SG 九月议程，高通）。

## Why it matters / what's new (EN)

TGbp is currently the only 802.11 task group producing a steady normative-text stream, and this batch fills in the AMP MAC's core moving parts: how an AMP device is energized (excitation frame), how it is polled (triggering procedure), how legacy RFID interoperation is framed (RFID frame), how multiple AMP responses are acknowledged efficiently (group ack), and how active transmitters manage frequency offset (UL frequency shift). Together with the 28 July WPT End Time Indication and Service Period PDTs, the D0.5→ballot trajectory for a September first letter ballot looks on track. The Hikvision Co-SR/Co-BF hidden-node CR is worth watching in the mapc-cosr thread as LB291 resolution grinds on.

## Why it matters / what's new (ZH)

TGbp 是当前唯一持续产出规范文本的 802.11 任务组，本批贡献补齐了 AMP MAC 的核心组件：AMP 设备如何被供能（激励帧）、如何被轮询（触发流程）、如何与传统 RFID 互操作（RFID 帧）、多个 AMP 响应如何高效确认（组确认）、以及主动发射端如何管理频偏（上行频移）。结合 7 月 28 日的 WPT 结束时间指示与服务周期 PDT，面向九月首次信函投票的 D0.5→投票轨迹看来正常。海康威视的 Co-SR/Co-BF 隐藏节点 CR 值得在 mapc-cosr 主线中随 LB291 处理进展持续关注。
