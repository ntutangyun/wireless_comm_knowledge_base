---
id: 2026-11-05_ieee-mentor-802-15-ig-fg-uwb-digest
date_published: 2026-11-04
date_found: 2026-11-05
technology: uwb
type: ieee-document
title_en: "IEEE 802.15 IG FG UWB Mentor digest — 2026-11-05 (first IG session: draft PAR/CSD, UWB-beyond-4ab directions, one-way ranging advertisement)"
title_zh: "IEEE 802.15 IG FG UWB Mentor 当日摘要 — 2026-11-05（IG 首次会议：PAR/CSD 初稿、4ab 之后的 UWB 演进方向、单向测距广播）"
url: "https://mentor.ieee.org/802.15/documents?is_dcn=463&is_year=2026"
source_quality: full
topics: [IG FG UWB, Future Generation UWB, beyond 802.15.4ab, draft PAR, draft CSD, multi-antenna UWB, ISAC, anti-interference, WRC-27 IMT 7/8 GHz, one-way ranging, mobility safety]
topic_primary: uwb-ranging
topics_secondary: [uwb-radar, uwb-security]
novelty_score: 3
---

## Summary (EN)

Seven new IG FG UWB (Future Generation UWB Interest Group) documents were uploaded between 3 and 4 November 2026 (ET) ahead of the group's first session, scheduled for Monday 9 November 2026, 16:00-18:00 Bangkok time (UTC+7), with Wenzheng Li (Calterah Semiconductor) as chair and Jiajia Huang (Huawei) as secretary. All were read from the downloaded bodies. They are IG working material. Only the draft PAR (0465) and CSD (0466) carry the notice that they do not represent the agreed views of the 802.15 WG or the IG; 0463, 0464 and 0468 carry the generic "offered as a basis for discussion and is not binding" notice.

The opening-report deck (DCN 15-26-0468r0, Wenzheng Li) states that November 2026 is the first meeting of the IG and that two Wireless Next Generation (WNG) contributions, 15-26-0015-02 (January 2026) and 15-26-0302-00 (July 2026), form the discussion basis. It proposes the IG scope as exploring UWB evolution beyond P802.15.4ab, including 4ab enhancements, emerging application needs, and operating and deployment conditions. Its objectives are to consolidate requirements, identify gaps relative to 4ab and assess the need for further standardization; to develop a draft CSD/PAR with broad agreement on core project elements; and to prepare inputs for study-group (SG) formation. The proposed agenda gives contribution 464 and contribution 463 20 minutes each, then the draft PAR/CSD review and a motion, activity-summary review, and working method. The deck also includes template WG and LMSC motions for forming a Future Generation UWB Study Group (blank mover/seconder/result fields) and a timeline targeting broad agreement on the draft CSD and PAR in January 2027, "subject to actual progress". The activity summary (DCN 0467r0, Wenzheng Li) lists the January and July WNG inputs (frequency stitching for ranging, multi-antenna schemes for ranging, narrowband data communication beyond MMS assistance; Mobility Safety requirements and an initial gap analysis), an AI-assistance topic described as "a candidate topic for further contributions", the spectrum item (potential IMT use of 7.125-8.4 GHz under the WRC-27 study, overlapping UWB channels 8 and 9), and the proposed SG recommendation.

The draft PAR (DCN 0465r0) and draft CSD (DCN 0466r0), both by Wenzheng Li and both marked as discussion drafts, propose an amendment to IEEE 802.15.4-2024 titled "Further Enhancements to Ultra Wideband (UWB) Physical Layers (PHYs) and Associated Medium Access Control (MAC) Sublayer". The PAR scope text covers enhancements to the UWB PHYs and MAC "to support ranging, sensing, and associated data communication", addressing evolving application and operational requirements including spectrum and regulatory developments; the "Areas of enhancement" list is still "TBD", as are the submission and RevCom dates, with about 40 people expected to be involved. The CSD answers the managed-objects and coexistence-assessment items with "Yes", names Mobility Safety as one application area (with a second left "TBD"), and says the specific enhancements include "improved UWB ranging, sensing and data communication reliability under high mobility scenario" with the remainder "TBD".

Two technical contributions are scheduled for the session. DCN 0463r0 (Xiaolong Zhang, Calterah) discusses three possible evolutions beyond 4ab. The first is multi-antenna evolution as a new radio resource dimension (antenna/path selection, receive combining, transmit diversity, SU-/MU-MIMO, distributed MIMO across anchors, antenna capability exchange); the deck lists pros and cons itself and gives a preliminary view of diversity/selection as a baseline capability and full coherent MIMO as an optional per-session capability. The second is enhanced ISAC support (radar-friendly waveforms, Doppler estimation and compensation, multi-frame integration, support for targets and nodes at over 100 km/h). The third is anti-interference design motivated by the WRC-27 Agenda Item 1.7 consideration of 7/8 GHz for IMT, with candidate techniques of multi-antenna spatial suppression of the interference direction of arrival (named the key candidate), frequency agility, time-domain avoidance and PHY robustness. The slides cite BNetzA-supervised automotive tests and a CCC white paper as measured evidence of IMT interference into UWB channel 9.

DCN 0464r0 (Zhongxing Yu, Calterah), "Enhanced UWB One-Way Ranging Advertisement (EOWRA)", addresses 1-to-N one-way ranging where N is unbounded, targeting mobility safety. It describes limits of two-way ranging (capacity capped at N < 10 nodes, airtime contention and latency growing with N) and of downlink TDOA (synchronized-anchor infrastructure and cost, poor GDOP at distance) and presents four scenarios: post-collision hazard warning, emergency and hazardous-material vehicle alerts, mountain-curve and blind-corner collision avoidance, and zero-infrastructure battery-powered parking locks broadcasting vacancy positions. A comparison matrix against radar/camera, acoustic sirens and 1-to-1 UWB/DL-TDOA rates EOWRA as uncapped (N > 100) with zero sync and local distance solving. The contribution recommends that EOWRA be introduced in UWB technology beyond 4ab and describes the concept as a "wireless ranging speaker" that conveys both the alert and its distance and angle.

TG4ab: no new substantive document; the consolidated comments workbook was bumped to DCN 15-26-0380r14 (4 November, Chaplin) and is noted here only for the watermark.

## Summary (ZH)

2026 年 11 月 3 日至 4 日（美东时间）共新上传 7 份 IG FG UWB（Future Generation UWB 兴趣组）文档，对应该组定于 2026 年 11 月 9 日（周一）曼谷时间 16:00-18:00（UTC+7）召开的首次会议，主席为 Wenzheng Li（Calterah Semiconductor），秘书为 Jiajia Huang（Huawei）。全部文档均已下载并阅读正文。它们属于 IG 工作材料。仅 PAR 草案（0465）与 CSD 草案（0466）带有“不代表 802.15 工作组或 IG 的一致意见”的声明；0463、0464 与 0468 带有通用声明“仅作为讨论基础提供，不具约束力”（offered as a basis for discussion and is not binding）。

开场报告幻灯（DCN 15-26-0468r0，Wenzheng Li）写明 2026 年 11 月为该 IG 的首次会议，并以两份 WNG（Wireless Next Generation）贡献 15-26-0015-02（2026 年 1 月）和 15-26-0302-00（2026 年 7 月）作为讨论基础。其建议的 IG 范围为探索 P802.15.4ab 之后的 UWB 演进，包括 4ab 增强、新兴应用需求以及工作与部署条件；目标包括汇总需求、识别相对 4ab 的差距并评估进一步标准化的必要性，起草并就核心项目要素达成广泛共识的 CSD/PAR 草案，并为成立研究组（SG）准备输入。拟定议程为贡献 464 与贡献 463 各 20 分钟，随后是 PAR/CSD 草案审阅与动议、活动摘要审阅及工作方式。幻灯还含有成立 Future Generation UWB 研究组的 WG 与 LMSC 动议模板（提议人/附议人/表决结果留空），以及以 2027 年 1 月就 CSD 与 PAR 草案达成广泛共识为目标的时间线，并注明“视实际进展而定”。活动摘要（DCN 0467r0，Wenzheng Li）列出 1 月与 7 月的 WNG 输入（测距频率拼接、多天线测距方案、MMS 辅助之外的窄带数据通信；Mobility Safety 需求与初步差距分析）、被称为“供进一步贡献的候选主题”的 AI 辅助，以及频谱议题（WRC-27 研究中 7.125-8.4 GHz 可能用于 IMT，与 UWB 信道 8、9 重叠），还有拟议的 SG 建议。

PAR 草案（DCN 0465r0）与 CSD 草案（DCN 0466r0）均由 Wenzheng Li 提交并标明为讨论稿，提议制定 IEEE 802.15.4-2024 的修订案，标题为 “Further Enhancements to Ultra Wideband (UWB) Physical Layers (PHYs) and Associated Medium Access Control (MAC) Sublayer”。PAR 的范围表述为增强 UWB PHY 与 MAC 以“支持测距、感知及相关数据通信”，应对包括频谱与监管变化在内的不断演变的应用与运行需求；“增强领域”清单仍为 “TBD”，提交与 RevCom 日期同样为 TBD，预计约 40 人参与。CSD 对管理对象与共存评估两项均答“Yes”，将 Mobility Safety 列为一个应用领域（第二项仍为 “TBD”），并称具体增强包括“在高移动场景下提升 UWB 测距、感知和数据通信的可靠性”，其余为 “TBD”。

会议安排了两份技术贡献。DCN 0463r0（Calterah 的 Xiaolong Zhang）讨论 4ab 之后的三个可能演进方向。其一是把多天线演进作为新的无线资源维度（天线/路径选择、接收合并、发射分集、SU-/MU-MIMO、跨锚点分布式 MIMO、天线能力交换）；幻灯自行列出优缺点，并给出初步看法：分集/选择作为基线能力，完整相干 MIMO 作为可选的按会话能力。其二是增强 ISAC 支持（雷达友好波形、多普勒估计与补偿、多帧积分、支持时速超过 100 km/h 的目标与节点）。其三是抗干扰设计，其动因是 WRC-27 议题 1.7 对 7/8 GHz 用于 IMT 的考虑；候选技术包括多天线对干扰到达方向的空间抑制（被称为关键候选）、频率捷变、时域规避和 PHY 鲁棒性。幻灯引用 BNetzA 监督的汽车测试和 CCC 白皮书，作为 IMT 干扰 UWB 信道 9 的实测依据。

DCN 0464r0（Calterah 的 Zhongxing Yu）《Enhanced UWB One-Way Ranging Advertisement (EOWRA)》讨论接收端数量 N 不设上限的 1 对 N 单向测距，面向 mobility safety。它指出双向测距（容量上限 N < 10、空口争用与时延随 N 增长）和下行 TDOA（需要同步锚点基础设施及成本、远距离 GDOP 差）的局限，并给出四个场景：碰撞后的危险告警、应急与危化品车辆提示、山路弯道与盲区避撞、以及广播空位位置的零基础设施电池供电停车锁。与雷达/摄像头、声学警报和 1 对 1 UWB/DL-TDOA 的对比矩阵中，EOWRA 被标为接收数量无上限（N > 100）、无需同步、本地解算距离。该贡献建议在 4ab 之后的 UWB 技术中引入 EOWRA，并将这一概念称为“无线测距喇叭”，既给出告警内容，也给出告警的距离与角度。

TG4ab：无新的实质性文档；意见汇总工作簿更新至 DCN 15-26-0380r14（11 月 4 日，Chaplin），此处仅为水位记录。

## Key technical points (EN)

- **DCN 15-26-0468r0 · IG FG UWB** — opening report and meeting slides: first IG meeting 9 Nov 2026; proposed scope "UWB evolution beyond 4ab"; draft CSD/PAR target of broad agreement in January 2027; template WG/LMSC study-group formation motions. Calterah (Li). [document](https://mentor.ieee.org/802.15/documents?is_dcn=468&is_year=2026)
- **DCN 15-26-0467r0 · IG FG UWB** — activity summary: WNG inputs 15-26-0015-02 and 15-26-0302-00; candidate directions (frequency stitching, multi-antenna ranging, NB data beyond MMS assistance, AI assistance, Mobility Safety, IMT overlap with CH8/CH9). Calterah (Li). [document](https://mentor.ieee.org/802.15/documents?is_dcn=467&is_year=2026)
- **DCN 15-26-0465r0 / 15-26-0466r0 · IG FG UWB** — initial draft PAR and CSD for an 802.15.4-2024 amendment on further UWB PHY/MAC enhancements for "ranging, sensing, and associated data communication"; enhancement list still TBD. Calterah (Li). [PAR](https://mentor.ieee.org/802.15/documents?is_dcn=465&is_year=2026), [CSD](https://mentor.ieee.org/802.15/documents?is_dcn=466&is_year=2026)
- **DCN 15-26-0463r0 · IG FG UWB** — UWB evolution directions beyond 4ab: multi-antenna resource dimension and MIMO, enhanced ISAC with Doppler support, anti-interference including spatial nulling toward the interferer's DoA (WRC-27 AI 1.7 context). Calterah (Zhang). [document](https://mentor.ieee.org/802.15/documents?is_dcn=463&is_year=2026)
- **DCN 15-26-0464r0 · IG FG UWB** — EOWRA: unbounded 1-to-N one-way ranging advertisement for mobility safety; four scenarios and a comparison matrix; recommends inclusion beyond 4ab. Calterah (Yu). [document](https://mentor.ieee.org/802.15/documents?is_dcn=464&is_year=2026)
- **DCN 15-26-0445r1 · IG FG UWB** — agenda workbook revision for the November plenary session (listed; the agenda content was taken from the slide deck above). [document](https://mentor.ieee.org/802.15/documents?is_dcn=445&is_year=2026)
- **DCN 15-26-0380r14 · TG4ab** — consolidated comments workbook, revision 14 (spreadsheet). [document](https://mentor.ieee.org/802.15/documents?is_dcn=380&is_year=2026)

## Key technical points (ZH)

- **DCN 15-26-0468r0 · IG FG UWB** — 开场报告与会议幻灯：IG 首次会议为 2026 年 11 月 9 日；拟定范围为“4ab 之后的 UWB 演进”；CSD/PAR 草案目标为 2027 年 1 月达成广泛共识；含成立研究组的 WG/LMSC 动议模板。Calterah（Li）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=468&is_year=2026)
- **DCN 15-26-0467r0 · IG FG UWB** — 活动摘要：WNG 输入 15-26-0015-02 与 15-26-0302-00；候选方向（频率拼接、多天线测距、MMS 辅助之外的窄带数据、AI 辅助、Mobility Safety、与 CH8/CH9 重叠的 IMT）。Calterah（Li）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=467&is_year=2026)
- **DCN 15-26-0465r0 / 15-26-0466r0 · IG FG UWB** — 针对 802.15.4-2024 修订案的 PAR 与 CSD 初稿，面向“测距、感知及相关数据通信”的 UWB PHY/MAC 进一步增强；增强清单仍为 TBD。Calterah（Li）。[PAR](https://mentor.ieee.org/802.15/documents?is_dcn=465&is_year=2026)、[CSD](https://mentor.ieee.org/802.15/documents?is_dcn=466&is_year=2026)
- **DCN 15-26-0463r0 · IG FG UWB** — 4ab 之后的 UWB 演进方向：多天线资源维度与 MIMO、含多普勒支持的增强 ISAC、包括朝干扰 DoA 方向形成空间零陷的抗干扰设计（WRC-27 议题 1.7 背景）。Calterah（Zhang）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=463&is_year=2026)
- **DCN 15-26-0464r0 · IG FG UWB** — EOWRA：面向 mobility safety、接收端数量不设上限的 1 对 N 单向测距广播；四个场景与对比矩阵；建议在 4ab 之后引入。Calterah（Yu）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=464&is_year=2026)
- **DCN 15-26-0445r1 · IG FG UWB** — 11 月全会期间的议程工作簿修订版（已列出；议程内容取自上述幻灯）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=445&is_year=2026)
- **DCN 15-26-0380r14 · TG4ab** — 意见汇总工作簿第 14 版（电子表格）。[文档链接](https://mentor.ieee.org/802.15/documents?is_dcn=380&is_year=2026)

## Why it matters / what's new (EN)

This is the first substantive IG FG UWB content (scope, PAR/CSD, technical contributions) in this KB; earlier digests recorded only the agenda 0445r0: the group's own slides state that November 2026 is its first meeting, and they set out a scope, a draft PAR and CSD with open TBD fields, and a January 2027 target for broad agreement on both. The technical contributions are single-company discussion inputs from Calterah, and the motions are blank templates, so nothing here is an adopted position of the IG or the working group. The documents give a view of the topics being brought forward for UWB work beyond 802.15.4ab (multi-antenna ranging, ISAC and Doppler support, interference resilience against potential IMT use of 7.125-8.4 GHz, and scalable one-way ranging); the session outcome, including whether any motion is moved, will only be visible in later uploads.

## Why it matters / what's new (ZH)

这是本 KB 中首批实质性的 IG FG UWB 内容（范围、PAR/CSD、技术贡献）；此前的摘要仅记录过议程 0445r0：该组自己的幻灯写明 2026 年 11 月是其首次会议，并给出范围、含待定（TBD）字段的 PAR 与 CSD 草案，以及 2027 年 1 月就两者达成广泛共识的目标。技术贡献均为 Calterah 一家公司的讨论性输入，动议也只是空白模板，因此这里没有任何内容属于 IG 或工作组已采纳的立场。这些文档展示了 802.15.4ab 之后的 UWB 工作正被提出的议题（多天线测距、ISAC 与多普勒支持、应对 7.125-8.4 GHz 可能用于 IMT 的干扰鲁棒性，以及可扩展的单向测距）；会议结果（包括是否提出动议）要在后续上传的文档中才能看到。

## Images

None.
