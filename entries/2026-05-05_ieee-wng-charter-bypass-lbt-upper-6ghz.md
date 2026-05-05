---
id: 2026-05-05_ieee-wng-charter-bypass-lbt-upper-6ghz
date_published: 2026-04-30
date_found: 2026-05-05
type: ieee-document
title_en: "IEEE 802.11 WNG SC contribution: Bypassing LBT in US Upper 6 GHz (Charter Communications, May 2026 interim)"
title_zh: "IEEE 802.11 WNG SC 贡献：在美国上 6 GHz 频段绕开 LBT（Charter Communications 提交，2026 年 5 月临时会议）"
url: "https://mentor.ieee.org/802.11/dcn/26/11-26-0878-00-0wng-bypassing-lbt-in-us-upper-6ghz.docx"
source_quality: snippet_only
topics: [802.11bn, MAC-layer, regulatory]
topic_primary: spectrum-policy
topics_secondary: []
novelty_score: 3
---

## Summary (EN)

On 30 April 2026, Charter Communications (Maulik Vaidya) tabled a contribution to the IEEE 802.11 **Wireless Next Generations Standing Committee (WNG SC)** titled **"Bypassing LBT in US Upper 6 GHz"** — document 11-26/878-00-0wng. The submission targets the May 10-15 Antwerp interim and is registered against WNG, the standing committee that incubates new study groups before they become task groups. The header docx is access-gated (the IEEE Mentor server returns 418 to anonymous downloaders), so this entry captures the metadata signal pending document availability; the title alone, however, carries clear regulatory-and-MAC content.

Context for what the contribution likely proposes: in the **US Upper 6 GHz (6.425-7.125 GHz)** band the FCC's current rules require Wi-Fi clients in Standard Power / AFC mode to perform a Listen-Before-Talk (LBT) check before transmitting. LBT is conservative — it was carried over from sub-7-GHz coexistence frameworks — and on 6 GHz, where incumbent fixed-service receivers are protected by the AFC database itself, Wi-Fi proponents have argued LBT adds latency cost without proportionate interference benefit. Charter, as a major US cable MSO operating community Wi-Fi at scale, has a direct deployment incentive to surface a contribution that asks WNG to study a regime where AFC alone (without LBT) is sufficient.

## Summary (ZH)

2026 年 4 月 30 日，Charter Communications（Maulik Vaidya）向 IEEE 802.11 **Wireless Next Generations Standing Committee (WNG SC)** 提交了一份贡献，标题为 **「在美国上 6 GHz 绕开 LBT（Bypassing LBT in US Upper 6GHz）」**——文档号 11-26/878-00-0wng。提交目标是 5 月 10-15 日 Antwerp 临时会议；WNG 是 IEEE 802.11 内孵化新研究组的常委会（在升级为正式 Task Group 之前的入口）。文档本身被 IEEE Mentor 服务器对匿名下载者拒绝访问（418 状态码），所以这条目先以元数据信号入库；但仅凭标题已可定位其属于「监管 + MAC」交界处。

背景：在 **美国上 6 GHz（6.425-7.125 GHz）** 频段，FCC 现行规则要求 Wi-Fi 客户端在标准功率 / AFC 模式下传输前必须执行 Listen-Before-Talk（LBT）检测。LBT 是从 sub-7 GHz 共存框架沿用过来的保守做法；而在 6 GHz，AFC 数据库本身已在保护固定业务接收机，Wi-Fi 阵营长期主张 LBT 在此带来时延代价却没有相称的干扰收益。Charter 作为大规模运营社区 Wi-Fi 的美国主流 MSO，有直接的部署诱因把这一议题在 WNG 推上桌面，请求研究「仅靠 AFC、不再要求 LBT」的可行机制。

## Key technical points (EN)
- **Document**: IEEE 11-26/0878-00-0wng "Bypassing LBT in US Upper 6 GHz"
- **Author / submitter**: Maulik Vaidya, Charter Communications
- **Group / venue**: WNG SC (incubator for new study groups), May 2026 Antwerp interim
- **Date uploaded**: 30-Apr-2026 (rev 0; appeared in mentor portal 04-May-2026 ET)
- **Topic**: regulatory-MAC interface — proposes that AFC database protection should obviate Listen-Before-Talk in US 6.425-7.125 GHz
- **Likely audience**: WNG members deciding whether to charter a study group on 6 GHz LBT-relaxation
- **Source-quality caveat**: full docx is access-gated; metadata-only entry until the contribution is accessible.

## Key technical points (ZH)
- **文档**：IEEE 11-26/0878-00-0wng「Bypassing LBT in US Upper 6 GHz」
- **作者 / 提交人**：Maulik Vaidya，Charter Communications
- **委员会 / 场合**：WNG SC（新研究组孵化机构），2026 年 5 月 Antwerp 临时会议
- **上传日期**：2026-04-30（rev 0；2026-05-04 出现在 mentor 文档列表）
- **议题**：监管-MAC 交界面 —— 主张 AFC 数据库的保护已足以替代 6.425-7.125 GHz 的 Listen-Before-Talk 要求
- **目标受众**：WNG 成员，判断是否就「6 GHz LBT 放宽」立项研究组
- **来源质量说明**：完整 docx 受访问限制；先以元数据条目入库，待文档可访问后回补。

## Why it matters / what's new (EN)

This is the first KB entry capturing a **regulatory-MAC bridge contribution** in the WNG. Existing 6 GHz coverage in the KB is policy-side: `eu-rspg-upper-6ghz-decision` (EU RSPG 6 GHz allocation), `ofcom-better-together-6ghz-uk` (UK 6 GHz hybrid plan). A WNG SC submission to **change the MAC-layer LBT requirement on US 6 GHz** is the first sign the standards body is being asked to converge with the regulatory state on a specific country. WNG submissions are signals not decisions — most don't graduate to a study group, let alone a task group — but the choice of submitter (Charter, an MSO that operates community Wi-Fi at large scale) and the explicit US-only framing suggest a deployment-driven push rather than a research one. If the contribution gains traction in Antwerp it would set up a 2026-2027 study-group track on AFC-vs-LBT trade-offs — directly relevant to any Wi-Fi 8 deployment that wants to use the upper 6 GHz under AFC.

## Why it matters / what's new (ZH)

这是 KB 第一条捕获 WNG 中「**监管-MAC 桥接贡献**」的条目。已有的 6 GHz 覆盖都站在政策侧：`eu-rspg-upper-6ghz-decision`（欧盟 RSPG 6 GHz 分配）、`ofcom-better-together-6ghz-uk`（英国 6 GHz 混合方案）。一份明确要求「**修改美国 6 GHz 的 MAC 层 LBT 要求**」的 WNG SC 提案，是标准侧第一次被请求与某一具体国家的监管态势靠拢。WNG 提交是信号而非决议——大多数 WNG 贡献从不进入研究组、更不会成为 Task Group——但提交人选（Charter 这家以社区 Wi-Fi 大规模运营为主业的 MSO）与明确的「仅美国」边界，暗示其驱动力来自部署而非纯研究。若该贡献在 Antwerp 获得呼应，将在 2026-2027 形成一条「AFC 替代 LBT」的研究组轨道——直接关系到任何在 AFC 模式下使用上 6 GHz 的 Wi-Fi 8 部署。
