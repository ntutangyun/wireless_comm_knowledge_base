---
id: 2026-05-18_ieee-mentor-tgbp-antwerp-digest
date_published: 2026-05-15
date_found: 2026-05-18
type: ieee-document
title_en: "IEEE 802.11 TGbp Mentor digest — Antwerp interim closing, May 14–15, 2026"
title_zh: "IEEE 802.11 TGbp Mentor 摘要——Antwerp 期中闭幕，2026-05-14 至 2026-05-15"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=0bp
source_quality: snippet_only
topics: [802.11bp, AMP-IoT, energy-harvesting, backscatter, PDT, WPT]
topic_primary: amp-iot
topics_secondary: [energy-power-save, security-privacy]
novelty_score: 2
---

## Summary (EN)

TGbp (Ambient Power IoT / 802.11bp) closed the May 2026 Antwerp interim with its agenda at revision 5 (DCN 695r5) and a closing report (DCN 1081r1). The group is in the thick of **PDT (Proposed Draft Text) build-out** across the AMP-IoT specification skeleton, with draft text now covering receive procedures, excitation fields, triggering frameworks, PPDU encoding, security, UL channel access, and Sub-1 GHz operation. The AMP security framework got its first general draft text (DCN 1060r1), and the SPDT (Specification Proposed Draft Text) contributions are now reaching revision 4–7, suggesting convergence toward a stable baseline. Key contributor pattern: Huawei leads volume across excitation fields, triggering, receive procedures, and Sub-1 GHz PDT; Qualcomm drives PPDU encoding and UL channel access; HaiLa Technologies (Kamran Nishat, Guy-Armand Kamendje, Nelson Costa) contributes across bi-static backscatter, authentication, and receiver specification; NXP (Rui Cao) owns the excitation field; OPPO (Yinan Qi, Chuanfeng He) contributes WPT design and FDMed UL access; Ericsson (Sebastian Max) drives contention-window management and 2.4 GHz coexistence; Infineon (Hui Luo) owns the AMP security PDT.

## Summary (ZH)

TGbp（环境能量供电 IoT / 802.11bp）以第 5 版议程（DCN 695r5）和闭幕报告（DCN 1081r1）结束了 2026 年 5 月 Antwerp 期中会议。该组正处于 AMP-IoT 规范骨架的 **PDT 密集构建**阶段，草案文本现已覆盖接收流程、激励场、触发框架、PPDU 编码、安全、上行信道接入及 Sub-1 GHz 操作。AMP 安全框架获得了首份通用草案文本（DCN 1060r1），各 SPDT 文稿现已达 rev 4–7，暗示正收敛至稳定基线。贡献者格局：Huawei 在激励场、触发、接收流程和 Sub-1 GHz PDT 方面领先体量；Qualcomm 主导 PPDU 编码和上行信道接入；HaiLa Technologies（Kamran Nishat、Guy-Armand Kamendje、Nelson Costa）贡献跨越双基地反向散射、认证和接收机规范；NXP（Rui Cao）负责激励场；OPPO（Yinan Qi、Chuanfeng He）贡献 WPT 设计和 FDMed 上行接入；Ericsson（Sebastian Max）推动竞争窗口管理和 2.4 GHz 共存；Infineon（Hui Luo）拥有 AMP 安全 PDT。

## Key technical points (EN)

- **DCN 11-26-1081r1 · TGbp** — tgbp-closing-report-may-interim-2026. Bo Sun (Sanechips). Chair's closing summary.
- **DCN 11-26-837r7 · TGbp** — PDT 40.3.14 AMP Receive Procedure. Lumin Liu (Huawei). Dominant PDT thread — 7 revisions this interim alone.
- **DCN 11-26-959r4 · TGbp** — PDT for Excitation Field. Rui Cao (NXP). Excitation waveform specification maturing.
- **DCN 11-26-823r4 · TGbp** — PDT AMP triggering procedure. Rojan Chitrakar (Huawei).
- **DCN 11-26-940r5 · TGbp** — PDT AMP SP Advert frame. Ian Bajaj (HaiLa Technologies). Service Period advertisement frame format.
- **DCN 11-26-732r3 · TGbp** — PDT 40.3.4 overview of the PPDU encoding process. Alice Jialing Li Chen (Qualcomm).
- **DCN 11-26-1060r1 · TGbp** — pdt-amp-security-general. Hui Luo (Infineon Technologies). **Structurally new** — first general security framework PDT for AMP.
- **DCN 11-26-802r4 · TGbp** — UL Channel Access for Non-AP AMP STA. Sanket Kalamkar (Qualcomm). Non-AP STA uplink channel access procedures.
- **DCN 11-26-817r2 · TGbp** — PDT 40.4.16 AMP receive procedure in Sub-1GHz. Panpan Li (Huawei). Sub-1GHz AMP extension.
- **DCN 11-26-909r2 · TGbp** — PDT AMP Receiver Specification. Nelson Costa (HaiLa Technologies).
- **DCN 11-26-695r5 · TGbp** — tg-bp-meeting-agenda-for-may-interim-2026. Bo Sun (Sanechips).

## Key technical points (ZH)

- **DCN 11-26-1081r1 · TGbp** —— TGbp 2026 年 5 月期中闭幕报告。Bo Sun（Sanechips）。主席闭幕总结。
- **DCN 11-26-837r7 · TGbp** —— PDT 40.3.14 AMP 接收流程。Lumin Liu（Huawei）。主导 PDT 线索——仅本次期中即达 7 次修订。
- **DCN 11-26-959r4 · TGbp** —— 激励场 PDT。Rui Cao（NXP）。激励波形规范日趋成熟。
- **DCN 11-26-823r4 · TGbp** —— AMP 触发流程 PDT。Rojan Chitrakar（Huawei）。
- **DCN 11-26-940r5 · TGbp** —— AMP SP 公告帧 PDT。Ian Bajaj（HaiLa Technologies）。服务期公告帧格式。
- **DCN 11-26-732r3 · TGbp** —— PDT 40.3.4 PPDU 编码流程概述。Alice Jialing Li Chen（Qualcomm）。
- **DCN 11-26-1060r1 · TGbp** —— AMP 安全通用 PDT。Hui Luo（Infineon Technologies）。**结构性新增**——首份 AMP 安全框架草案文本。
- **DCN 11-26-802r4 · TGbp** —— 非 AP AMP STA 上行信道接入。Sanket Kalamkar（Qualcomm）。
- **DCN 11-26-817r2 · TGbp** —— PDT 40.4.16 Sub-1GHz AMP 接收流程。Panpan Li（Huawei）。Sub-1GHz AMP 扩展。
- **DCN 11-26-909r2 · TGbp** —— AMP 接收机规范 PDT。Nelson Costa（HaiLa Technologies）。
- **DCN 11-26-695r5 · TGbp** —— TGbp 2026 年 5 月期中会议议程。Bo Sun（Sanechips）。

## Why it matters / what's new (EN)

TGbp is progressing from mechanism-islands to an integrated draft — the PDT threads now span PHY (excitation, PPDU encoding, receiver spec), MAC (triggering, channel access, SP advert), security (first general framework), and band extension (Sub-1 GHz). The AMP security PDT (1060r1) is the most significant structural addition of this interim: it signals the group is now addressing the provisioning and authentication architecture for energy-harvesting devices, which is a harder problem than the PHY/MAC primitives given the severe power budget. The bi-static backscatter work (HaiLa) continues to evolve alongside the mono-static mainstream, suggesting the final spec may support both backscatter modes. The excitation field PDT (959r4 from NXP) reaching revision 4 suggests this subclause is approaching a stable form. TGbp remains on track for a Draft 1.0 in the 2026H2–2027H1 window — the PDT density this interim supports that timeline.

## Why it matters / what's new (ZH)

TGbp 正从机制孤岛走向整合草案——PDT 线索现已覆盖 PHY（激励、PPDU 编码、接收机规范）、MAC（触发、信道接入、SP 公告）、安全（首份通用框架）以及频段扩展（Sub-1 GHz）。AMP 安全 PDT（1060r1）是本次期中最重要的结构性新增：它标志着该组开始处理能量采集设备的供网与认证架构，考虑到极端功耗预算，这个问题比 PHY/MAC 原语更难。双基地反向散射工作（HaiLa）继续与单基地主流并行演进，暗示最终规范可能同时支持两种反向散射模式。激励场 PDT（959r4，NXP）达到第 4 版修订，表明该子条款正在接近稳定形态。TGbp 仍按 2026 下半年至 2027 上半年 Draft 1.0 的时间表推进——本次期中的 PDT 密度支持这一时间线。
