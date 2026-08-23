---
id: 2026-08-23_ieee-mentor-tgbp-security-profile-digest
date_published: 2026-08-21
date_found: 2026-08-23
type: ieee-document
technology: wifi
title_en: "IEEE 802.11 TGbp Mentor digest — 2026-08-23: Infineon completes the AMP security PDT trilogy with a security-profile document"
title_zh: "IEEE 802.11 TGbp Mentor 摘要 — 2026-08-23：英飞凌以安全配置文件文档补全 AMP 安全 PDT 三部曲"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bp
source_quality: snippet_only
topics: [TGbp, 802.11bp, AMP, ambient-power, PDT, security, TGbt]
topic_primary: amp-iot
topics_secondary: [security-privacy]
novelty_score: 1
---

## Summary (EN)
TGbp's AMP security thread, opened on 20 August with Infineon's paired PMK-generation and data-exchange PDTs (see 2026-08-21_ieee-mentor-tgbp-amp-security-digest), gained its third document in as many days: DCN 11-26-1557 "pdt-amp-security-profile," uploaded 21 August 2026 by the same author, Hui Luo (Infineon Technologies). A "security profile" document typically defines the overall architecture envelope — which cipher/key mechanisms an AMP device class must, should, or may support — meaning Infineon has now placed on the table the three canonical pieces of a security architecture: how keys are derived (1552), how protected data flows (1554), and which combinations of the two a conformant device implements (1557).

Two further new documents past the previous watermark (11-26-1554) are TGbt administrivia: DCN 1556 "Proposed TGbt procedure for comment resolution" (Mark Hamilton, Ruckus/CommScope) and DCN 1558 "TGbt Agenda August 24 2026 Telecon" (Stephen Orr, Cisco) — process documents for the post-quantum task group's upcoming comment-resolution phase, noted here for completeness but not digested further.

## Summary (ZH)
TGbp 的 AMP 安全线程于 8 月 20 日由英飞凌成对的 PMK 生成与数据交换 PDT 开启（见 2026-08-21_ieee-mentor-tgbp-amp-security-digest），三天内迎来第三份文档：DCN 11-26-1557 "pdt-amp-security-profile"，由同一作者 Hui Luo（英飞凌）于 2026 年 8 月 21 日上传。"安全配置文件"（security profile）文档通常定义总体架构框架——某一 AMP 设备类别必须、应当或可以支持哪些密码/密钥机制——这意味着英飞凌已把安全架构的三个经典组成部分全部摆上桌面：密钥如何派生（1552）、受保护数据如何流动（1554）、以及合规设备实现两者的哪些组合（1557）。

上一水位（11-26-1554）之后的另外两份新文档均为 TGbt 行政事务：DCN 1556 "TGbt 意见处理流程提案"（Mark Hamilton，Ruckus/CommScope）与 DCN 1558 "TGbt 2026 年 8 月 24 日电话会议议程"（Stephen Orr，思科）——后量子任务组即将进入意见处理阶段的流程文档，此处仅为完整性记录，不做进一步展开。

## Key technical points (EN)
- **DCN 11-26-1557-00 · TGbp** — "pdt-amp-security-profile." Hui Luo (Infineon Technologies). Uploaded 21 Aug 2026. Third AMP security PDT in three days; profiles typically bind the PMK-generation (1552) and protected data-exchange (1554) mechanisms into conformance classes for power-constrained AMP devices.
- **DCN 11-26-1556-00 · TGbt** — "Proposed TGbt procedure for comment resolution." Mark Hamilton (Ruckus). Uploaded 21 Aug 2026. Process proposal ahead of TGbt's first WG letter ballot comment cycle (D1.00; initial WG LB predicted July 2026 per the Timelines page, still pending).
- **DCN 11-26-1558-00 · TGbt** — "TGbt Agenda August 24 2026 Telecon." Stephen Orr (Cisco). Administrative.
- Document bodies are gated (Mentor per-doc downloads return 418/403 anonymously); only title/author/affiliation metadata are public.

## Key technical points (ZH)
- **DCN 11-26-1557-00 · TGbp** — "pdt-amp-security-profile"。Hui Luo（英飞凌）。2026 年 8 月 21 日上传。三天内第三份 AMP 安全 PDT；配置文件通常将 PMK 生成（1552）与受保护数据交换（1554）机制绑定为面向功耗受限 AMP 设备的合规类别。
- **DCN 11-26-1556-00 · TGbt** — "TGbt 意见处理流程提案"。Mark Hamilton（Ruckus）。2026 年 8 月 21 日上传。TGbt 首轮工作组函件投票意见周期前的流程提案（D1.00；Timelines 页面预测首轮 WG LB 为 2026 年 7 月，尚未启动）。
- **DCN 11-26-1558-00 · TGbt** — "TGbt 2026 年 8 月 24 日电话会议议程"。Stephen Orr（思科）。行政性文档。
- 文档正文受限（Mentor 单文档下载对匿名访问返回 418/403）；仅标题/作者/机构元数据公开。

## Why it matters / what's new (EN)
The 2026-08-21 digest flagged that TGbp was starting to scope its own lightweight security architecture; 1557 confirms this is a deliberate, structured push rather than a pair of one-off contributions — key derivation, protected exchange, and now the conformance profile arrived as a coherent trilogy from a single vendor (Infineon) in the run-up to TGbp's predicted first WG letter ballot (September 2026, D0.50 per the Timelines page). How much security an energy-harvesting backscatter device can afford is one of the genuinely open architectural questions in 802.11bp, and the profile document is where that trade-off will be made legible. The TGbt procedural documents, meanwhile, signal the post-quantum group is gearing up for its own first ballot's comment-resolution machinery.

## Why it matters / what's new (ZH)
2026-08-21 的摘要指出 TGbp 开始界定自己的轻量级安全架构；1557 证实这是一次有意、成体系的推进，而非两份孤立贡献——密钥派生、受保护交换、再加上合规配置文件，由同一厂商（英飞凌）在 TGbp 预计首轮工作组函件投票（2026 年 9 月，Timelines 页面 D0.50 状态）前夕以连贯三部曲的形式提交。能量采集反向散射设备"负担得起多少安全"是 802.11bp 中真正开放的架构问题之一，而配置文件文档正是这一权衡将被明确呈现的地方。与此同时，TGbt 的流程文档表明后量子任务组正在为其首轮投票的意见处理机制做准备。
