---
id: 2026-08-29_ieee-mentor-tgbp-preamble-pdt-digest
date_published: 2026-08-28
date_found: 2026-08-29
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbp Mentor digest — 2026-08-29: Qualcomm's 20 MHz DL non-AMP preamble PDT and a three-document revision sweep before the September ballot"
title_zh: "IEEE 802.11 TGbp Mentor 摘要 — 2026-08-29：高通的 20 MHz 下行非 AMP 前导码 PDT 与九月投票前的三份修订"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bp
source_quality: snippet_only
topics: [TGbp, 802.11bp, AMP, ambient-power, PDT, preamble, PPDU, D0.5]
topic_primary: amp-iot
topics_secondary: [energy-power-save]
novelty_score: 1
---

## Summary (EN)

One new TGbp document number appeared on IEEE 802.11 Mentor in the 27–28 August 2026 window, accompanied by revision bumps on three PDTs that were already tracked. The new document is **DCN 11-26-1573 "PDT 20MHz DL Non-AMP Portion Preamble Update"** (Alice Jialing Li Chen, Qualcomm, uploaded 28 August). An 802.11bp AMP PPDU is a two-part frame: a legacy-compatible portion that ordinary Wi-Fi radios can decode and defer to, followed by the low-complexity AMP portion that the ambient-power tag actually receives. This PDT proposes draft text updating the preamble of the **non-AMP portion** for the 20 MHz downlink case — the part whose job is coexistence and deferral rather than tag reception. It follows the same author's DCN 11-26-1539 "PDT Some PHY TBDs in D0.5", ingested in `2026-08-25_ieee-mentor-tgbp-wpt-digest`, and continues Qualcomm's role as the PHY clean-up contributor in this group.

The three revisions all landed on 27 August and all touch procedure text rather than adding new proposals: **DCN 11-26-1547-03** "PDT AMP Receive Procedure Update-2" and **DCN 11-26-1546-02** "PDT AMP Transmit Procedure Update-1", both Lumin Liu (Huawei), each now on their third and second published revision respectively after earlier uploads on 16 and 18 August; and **DCN 11-26-1537-01** "PDT PPDU Padding" (Steve Shellhammer, Qualcomm), a first revision of a document originally uploaded on 11 August.

Taken with the preceding fortnight — ZTE's WPT setup and energizer-control PDTs (1559/1560), Infineon's three-document AMP security set (1552/1554/1557), and Huawei's transmit/receive procedure pair — TGbp is completing a full sweep of D0.50: PHY preamble and padding, transmit and receive procedures, security, and wireless power transfer. The `802.11_Timelines` page (stamp 6 Aug 2026) still lists D0.50 as the current draft with an initial working-group letter ballot predicted for September 2026, and this revision-heavy traffic is the expected shape of a draft being tidied immediately before its first ballot. Only titles, authors, affiliations and upload times are public; the `.docx` bodies are account-gated.

## Summary (ZH)

2026 年 8 月 27–28 日窗口内，IEEE 802.11 Mentor 上出现了一份新的 TGbp 文档编号，并伴随三份已跟踪 PDT 的修订版更新。新文档为 **DCN 11-26-1573《PDT 20MHz DL Non-AMP Portion Preamble Update》**（Alice Jialing Li Chen，高通，8 月 28 日上传）。802.11bp 的 AMP PPDU 是一种两段式帧结构：前段为传统兼容部分，普通 Wi-Fi 射频可以解码并据此退避；后段为低复杂度的 AMP 部分，才是环境供能标签实际接收的内容。本 PDT 针对 20 MHz 下行场景，提出更新**非 AMP 部分**前导码的草案文本——该部分的职责是共存与退避，而非标签接收。它承接同一作者的 DCN 11-26-1539《PDT Some PHY TBDs in D0.5》（已收录于 `2026-08-25_ieee-mentor-tgbp-wpt-digest`），延续了高通在该组承担 PHY 收尾工作的角色。

三份修订均于 8 月 27 日上传，且都涉及流程文本而非新增提案：**DCN 11-26-1547-03**《PDT AMP Receive Procedure Update-2》与 **DCN 11-26-1546-02**《PDT AMP Transmit Procedure Update-1》，均来自刘鲁民（华为），在 8 月 16 日与 18 日的早期上传之后，分别进入第三版与第二版；以及 **DCN 11-26-1537-01**《PDT PPDU Padding》（Steve Shellhammer，高通），为 8 月 11 日原始上传文档的第一次修订。

结合此前两周——中兴的 WPT 建立与馈能器控制 PDT（1559/1560）、英飞凌的三份 AMP 安全文稿（1552/1554/1557）、以及华为的收发流程文稿对——TGbp 正在对 D0.50 完成一轮全面梳理：PHY 前导码与填充、发送与接收流程、安全、以及无线供能。`802.11_Timelines` 页面（日期 2026-08-06）仍将 D0.50 列为当前草案，并预测首次工作组信函投票于 2026 年 9 月进行；这种以修订为主的文稿流量，正是草案在首次投票前被集中整理时的典型形态。仅标题、作者、单位与上传时间为公开信息，`.docx` 正文受账号限制。

## Key technical points (EN)

- **DCN 11-26-1573-00 · TGbp** — "PDT 20MHz DL Non-AMP Portion Preamble Update". Alice Jialing Li Chen (Qualcomm). Uploaded 28 Aug 2026. Draft text updating the legacy/non-AMP preamble of the downlink 20 MHz AMP PPDU — the coexistence-and-deferral half of the frame.
- **DCN 11-26-1547-03 · TGbp** — "PDT AMP Receive Procedure Update-2". Lumin Liu (Huawei). Revision uploaded 27 Aug 2026 (r00/r01 16 Aug, r02 18 Aug).
- **DCN 11-26-1546-02 · TGbp** — "PDT AMP Transmit Procedure Update-1". Lumin Liu (Huawei). Revision uploaded 27 Aug 2026 (r00 16 Aug, r01 18 Aug).
- **DCN 11-26-1537-01 · TGbp** — "PDT PPDU Padding". Steve Shellhammer (Qualcomm). Revision uploaded 27 Aug 2026 (r00 11 Aug).
- **Coverage picture for D0.50:** PHY preamble/padding (Qualcomm), TX/RX procedures (Huawei), security profile / data exchange / PMK generation (Infineon, 1552/1554/1557), WPT setup and energizer control (ZTE, 1559/1560).
- **Ballot context:** `802.11_Timelines` (page stamp 6 Aug 2026) lists TGbp at D0.50 with no completed ballots and an initial WG letter ballot predicted for September 2026.
- **Document-number watermark** for TGbp advances to 11-26-1573.

## Key technical points (ZH)

- **DCN 11-26-1573-00 · TGbp** —《PDT 20MHz DL Non-AMP Portion Preamble Update》。Alice Jialing Li Chen（高通）。2026-08-28 上传。针对下行 20 MHz AMP PPDU 的传统/非 AMP 前导码的草案文本更新——即该帧中负责共存与退避的一半。
- **DCN 11-26-1547-03 · TGbp** —《PDT AMP Receive Procedure Update-2》。刘鲁民（华为）。修订版于 2026-08-27 上传（r00/r01 为 8 月 16 日，r02 为 8 月 18 日）。
- **DCN 11-26-1546-02 · TGbp** —《PDT AMP Transmit Procedure Update-1》。刘鲁民（华为）。修订版于 2026-08-27 上传（r00 为 8 月 16 日，r01 为 8 月 18 日）。
- **DCN 11-26-1537-01 · TGbp** —《PDT PPDU Padding》。Steve Shellhammer（高通）。修订版于 2026-08-27 上传（r00 为 8 月 11 日）。
- **D0.50 的覆盖版图**：PHY 前导码与填充（高通）、收发流程（华为）、安全配置/数据交换/PMK 生成（英飞凌，1552/1554/1557）、WPT 建立与馈能器控制（中兴，1559/1560）。
- **投票背景**：`802.11_Timelines`（页面日期 2026-08-06）显示 TGbp 处于 D0.50，尚无已完成投票，预测首次工作组信函投票在 2026 年 9 月。
- **TGbp 文档编号水位**推进至 11-26-1573。

## Why it matters / what's new (EN)

This is a navigation entry, not a mechanism entry — the value is in the pattern rather than in any single document. The pattern is that TGbp's contribution stream has flipped from **new proposals to revisions**. Through July and the first half of August the group was opening threads: Huawei's WPT End-Time PDT (`2026-07-28_ieee-mentor-tgbp-digest`), the excitation / OFDM-sequence / triggering / RFID / group-ack cluster (`2026-08-03_ieee-mentor-tgbp-digest`), Infineon's security trilogy and ZTE's WPT control plane (`2026-08-25_ieee-mentor-tgbp-wpt-digest`). This window has one new document number against three revision bumps — the signature of a draft being closed out rather than extended, which matches the September first-ballot prediction on the Timelines page.

The one new document is worth noting for a structural reason rather than a novel-mechanism one. Nearly all TGbp text in this knowledge base so far concerns the AMP side of the frame — how a near-zero-power tag is energised, triggered, and read. DCN 11-26-1573 addresses the **non-AMP portion**: the legacy preamble whose only job is to make ordinary Wi-Fi radios recognise the transmission and defer. That is the coexistence surface between ambient-power operation and the installed base, and it is a different design problem from anything in the `amp-iot` bin to date. Whether the September ballot opens on schedule remains the group's nearest milestone, and the last public status on `802.11_Timelines` is still the 6 August stamp.

## Why it matters / what's new (ZH)

这是一条导航性条目而非机制条目——其价值在于整体态势而非任何单份文档。态势在于 TGbp 的文稿流已从**新提案转向修订**。七月至八月上半月，该组一直在开启新线程：华为的 WPT 结束时间 PDT（`2026-07-28_ieee-mentor-tgbp-digest`）、激励/OFDM 序列/触发/RFID/组确认文稿群（`2026-08-03_ieee-mentor-tgbp-digest`）、英飞凌的安全三部曲与中兴的 WPT 控制面（`2026-08-25_ieee-mentor-tgbp-wpt-digest`）。而本窗口是一份新文档编号对三份修订——这是草案在收尾而非扩展时的特征，与 Timelines 页面上九月首次投票的预测相符。

那一份新文档值得注意的原因是结构性的，而非机制新颖性。迄今本知识库中几乎所有 TGbp 文本都涉及帧的 AMP 侧——近零功耗标签如何被馈能、触发与读取。DCN 11-26-1573 针对的是**非 AMP 部分**：其唯一职责是让普通 Wi-Fi 射频识别该传输并退避的传统前导码。这是环境供能操作与既有设备基数之间的共存面，与 `amp-iot` 分类下此前任何内容都是不同的设计问题。九月投票能否如期开启仍是该组最近的里程碑，而 `802.11_Timelines` 上最后的公开状态仍停留在 8 月 6 日。
