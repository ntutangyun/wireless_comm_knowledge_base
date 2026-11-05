---
id: 2026-11-05_ieee-mentor-802-11-wg-imt-2030-candidate-technology-proposal-digest
date_published: 2026-11-04
date_found: 2026-11-05
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 WG Mentor digest — 2026-11-05 (HPE's DCN 11-26-2239: initial assessment of IEEE 802.11 against the IMT-2030 minimum requirements, and options for a candidate-technology submission)"
title_zh: "IEEE 802.11 WG Mentor 当日摘要 — 2026-11-05（HPE 的 DCN 11-26-2239：对照 IMT-2030 最低技术性能要求评估 IEEE 802.11，以及提交候选技术的方案选项）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=2239"
source_quality: full
topics: [802.11, IMT-2030, ITU-R, 802.11bn, 802.11bq, 802.11bk, 802.11bf, 802.11ah, WIN]
topic_primary: spectrum-policy
topics_secondary: [wifi8-uhr, roaming-mobility]
novelty_score: 3
---

## Summary (EN)

DCN 11-26-2239 (r0 uploaded 4 Nov 2026 19:07 ET, r1 at 19:50 ET; group "802.11 WG") is a presentation by Xin Tang (HPE), "Proposal for IEEE 802.11 as an IMT-2030 candidate technology", dated November 2026. Its abstract says it examines whether IEEE 802.11 technologies could meet the minimum technical performance requirements for IMT-2030, that many requirements may be met by current or emerging Wi-Fi capabilities and suitable deployment architectures, and that the most significant potential gap is mobility, particularly in high-speed Rural scenarios. It is stated to be intended to support an initial IEEE 802 discussion on feasibility and next steps.

The deck first recaps the IMT-2030 usage scenarios (Immersive Communication, Hyper Reliable and Low-Latency Communication, Massive Communication, Ubiquitous Connectivity, Artificial Intelligence and Communication, Integrated Sensing and Communication), the development timeline, and the rule that a candidate radio interface technology (RIT) must fulfil the minimum requirements of at least six test environments (three under IC, one each under MC, HRLLC and ISAC) plus either UC or AIAC. It then maps the scenarios to 802.11 work (802.11bn or bx, 802.11bq, 802.11bk, 802.11ah, the AIO SG and AIML SC, 802.11bf) and walks through the minimum requirements one by one with a per-requirement assessment ("can be met", "possibly meets", "potential gap").

The deck closes with two options (standalone RIT versus part of a set of RITs, "sRIT") and a list of future work if IEEE 802 wants to proceed. The document states that the table is an initial assessment and that a complete determination needs formal self-evaluation under the ITU-R methodology.

## Summary (ZH)

DCN 11-26-2239（r0 于 2026 年 11 月 4 日 19:07 ET 上传，r1 于 19:50 ET 上传；组别 "802.11 WG"）是 HPE 的 Xin Tang 提交的演示文稿《Proposal for IEEE 802.11 as an IMT-2030 candidate technology》，日期 2026 年 11 月。其摘要称：文稿考察 IEEE 802.11 技术能否满足 IMT-2030 的最低技术性能要求；许多要求可通过现有或新兴 Wi-Fi 能力以及合适的部署架构满足，最显著的潜在差距在于移动性，尤其是高速农村场景；文稿旨在支持 IEEE 802 就可行性与后续步骤展开初步讨论。

文稿先回顾 IMT-2030 的使用场景（沉浸式通信、超可靠低时延通信、海量通信、泛在连接、人工智能与通信、通感一体化）、制定时间表，以及候选无线接口技术（RIT）须满足至少六个测试环境（IC 下三个，MC、HRLLC、ISAC 各一个）并满足 UC 或 AIAC 之一的最低要求；随后将这些场景映射到 802.11 的相关工作（802.11bn 或 bx、802.11bq、802.11bk、802.11ah、AIO SG 与 AIML SC、802.11bf），并逐项给出评估（“可满足”“可能满足”“潜在差距”）。

文稿最后给出两种方案（作为独立 RIT，或作为一组 RIT 中的一部分，即 sRIT）以及若 IEEE 802 决定推进的后续工作。文稿自述表格仅为初步评估，完整结论需按 ITU-R 方法进行正式自评估。

## Key technical points (EN)

- **DCN 11-26-2239r1 · 802.11 WG** — Proposal for IEEE 802.11 as an IMT-2030 candidate technology. Xin Tang (HPE). [document](https://mentor.ieee.org/802.11/documents?is_dcn=2239&is_year=2026)
- **Requirement-by-requirement assessment (as stated on the slides):** theoretical peak data rate 36 Gb/s DL and 18 Gb/s UL, "can be met" (802.11be maximum given as 46 Gbit/s); peak spectral efficiency 60 / 30 bit/s/Hz, "can be met" (143.75 bit/s/Hz at 320 MHz given); average spectral efficiency and 5th-percentile user spectral efficiency "can be met" or "possibly meets" for Indoor Hotspot-IC and Dense Urban-IC (the latter via a macro-cell layout of 3-sector sites using directional-antenna Wi-Fi APs), but "potential gap" for Rural-IC (the slides note that configurations A and D require a 700 MHz carrier frequency).
- **Mobility:** uplink mobility traffic channel link data rates are "can be met" for Indoor Hotspot-IC at 10 km/h, "possibility meets, needs simulation" for Dense Urban-IC at 30 km/h, and "potential gap" for Rural-IC at 120 km/h and 500 km/h. Mobility interruption time of 0 ms between TRxPs of a single base station is "possibility meets by SMD feature".
- **Latency and reliability:** user-plane latency 4 ms (IC) "can be met", 1 ms (HRLLC) "possibly meets"; control-plane latency 20 ms assessed on association plus authentication time; Indoor Factory-HRLLC reliability 1-10^-5 "possibly meets".
- **ISAC-related:** positioning accuracy 0.75 m (Indoor Factory) and 6 m (Urban Macro) "can be met", citing 802.11bk 320 MHz (<0.1 m) and 802.11az FTM up to 160 MHz (<1 m); bandwidth of at least 400 MHz "can be met by using 802.11bq 640MHz"; sensing requirements "possibly meet" with 802.11bf, with the slide noting there is no quantitative specification in the standard.
- **Option 1, standalone RIT:** advantages listed as full control and transparency inside 802.11, less IPR and logistics issues, and a straightforward evaluation; the gap is mobility for high-speed users in Rural-IC, plus the applicability to 802.11 of evaluation assumptions (transmit power, inter-site distance) historically aligned with wide-area cellular.
- **Option 2, part of an sRIT:** advantage is that macro IMT performance could be enhanced if another RIT is more capable; gaps listed are that a partner RIT is an open question ("3GPP showed little interest in working with 802.11 during IMT 2020 cycle"), governance would need to be set up, and the IMT-2030 process does not allow a fully qualified standalone RIT to be included in an sRIT.
- **Future work listed:** decide whether IEEE 802 has sufficient interest; send a liaison to ITU-R before the next WP 5D meeting (9 Feb 2027); request a speaker slot in the IMT-2030 workshop on day two of that meeting (slot request deadline 11 Jan 2027, presentation material deadline 28 Jan 2027); engage independent evaluation groups early; form an 802.11 position and a group for technical specification and self-evaluation.

## Key technical points (ZH)

- **DCN 11-26-2239r1 · 802.11 WG** — Proposal for IEEE 802.11 as an IMT-2030 candidate technology。Xin Tang（HPE）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2239&is_year=2026)
- **逐项要求评估（幻灯片原述）：** 理论峰值速率 DL 36 Gb/s、UL 18 Gb/s，“可满足”（给出 802.11be 最大 46 Gbit/s）；峰值频谱效率 60 / 30 bit/s/Hz，“可满足”（给出 320 MHz 下 143.75 bit/s/Hz）；平均频谱效率与第 5 百分位用户频谱效率在 Indoor Hotspot-IC 和 Dense Urban-IC 下为“可满足”或“可能满足”（后者采用由三扇区站点和定向天线 Wi-Fi AP 构成的宏小区布局），Rural-IC 为“潜在差距”（幻灯片注明配置 A 和 D 需要 700 MHz 载频）。
- **移动性：** 上行移动业务信道链路速率在 Indoor Hotspot-IC（10 km/h）“可满足”，Dense Urban-IC（30 km/h）“可能满足，需仿真证明”，Rural-IC（120 km/h 与 500 km/h）为“潜在差距”。单基站 TRxP 间 0 ms 移动中断时间评为“可通过 SMD 特性满足”。
- **时延与可靠性：** 用户面时延 4 ms（IC）“可满足”，1 ms（HRLLC）“可能满足”；控制面时延 20 ms 按关联加认证时间评估；Indoor Factory-HRLLC 可靠性 1-10^-5 “可能满足”。
- **ISAC 相关：** 定位精度 0.75 m（Indoor Factory）与 6 m（Urban Macro）“可满足”，引用 802.11bk 320 MHz（<0.1 m）和 802.11az FTM 最高 160 MHz（<1 m）；至少 400 MHz 带宽“可由 802.11bq 640MHz 满足”；感知要求借助 802.11bf “可能满足”，幻灯片注明标准中没有定量规范。
- **方案 1，独立 RIT：** 所列优点为 802.11 内部完全可控且透明、IPR 与流程问题较少、评估较直接；差距为 Rural-IC 中高速用户的移动性，以及传统上与广域蜂窝对齐的评估假设（发射功率、站间距）对 802.11 的适用性。
- **方案 2，作为 sRIT 的一部分：** 优点为若另一 RIT 能力更强则可提升宏覆盖性能；所列差距为合作 RIT 尚无着落（“IMT 2020 周期中 3GPP 对与 802.11 合作兴趣不大”）、需建立治理安排，且 IMT-2030 流程不允许已完全合格的独立 RIT 被纳入 sRIT。
- **所列后续工作：** 由 IEEE 802 判断是否有足够兴趣；在下次 WP 5D 会议（2027 年 2 月 9 日）前向 ITU-R 发送联络函；在该会议第二天的 IMT-2030 研讨会申请发言（申请截止 2027 年 1 月 11 日，材料提交截止 2027 年 1 月 28 日）；尽早联系独立评估组；确立 802.11 立场并成立技术规范与自评估小组。

## Why it matters / what's new (EN)

This is a discussion deck, not a motion or a draft text: it asks whether IEEE 802 wants to pursue an IMT-2030 submission and lays out the mapping, the preliminary per-requirement view, two submission routes and a timeline. All assessments are the author's initial judgements on slides; the document itself says detailed self-evaluation per ITU-R guidelines would be required.

The KB already tracks IMT-2030 from the spectrum side in 2026-09-21_fcc-6g-spectrum-auction-imt2030-standards-gap; this is the first digest here that records an 802.11 contribution on the IMT-2030 candidate question itself (scoped to this KB, not a statement about the group's history). The deck draws on several tracked work items: SMD seamless roaming (see 2026-11-04_ieee-mentor-tgbn-lb296-smd-seamless-roaming-cr-digest), 802.11bq, 802.11bk, 802.11az and 802.11bf.

## Why it matters / what's new (ZH)

这是一份讨论性文稿，而非动议或草案文本：它询问 IEEE 802 是否希望推进 IMT-2030 提交，并给出场景映射、逐项要求的初步看法、两条提交路径和时间表。所有评估均为作者在幻灯片上的初步判断；文稿自述需要依据 ITU-R 指南进行详细自评估。

本知识库此前已从频谱角度跟踪 IMT-2030（见 2026-09-21_fcc-6g-spectrum-auction-imt2030-standards-gap）；这是本库中首次记录 802.11 就 IMT-2030 候选问题本身提交的贡献（仅限本知识库范围，不代表该工作组的历史）。文稿涉及多项已跟踪的工作：SMD 无缝漫游（见 2026-11-04_ieee-mentor-tgbn-lb296-smd-seamless-roaming-cr-digest）、802.11bq、802.11bk、802.11az 与 802.11bf。
