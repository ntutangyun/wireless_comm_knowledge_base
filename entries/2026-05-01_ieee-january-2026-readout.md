---
id: 2026-05-01_ieee-january-2026-readout
date_found: 2026-05-01
date_published: 2026-01-23
type: proposal
title_en: "January 2026 IEEE 802.11 interim (Victoria): Wi-Fi 8 D1.3 approved, 802.11bq beacon split, Wi-Fi 9 WNG discussions begin"
title_zh: "2026 年 1 月 IEEE 802.11 中期会议（维多利亚）：Wi-Fi 8 D1.3 通过、802.11bq 信标问题分歧、Wi-Fi 9 WNG 启动讨论"
url: "https://ofinno.com/the-standards-readout-2/wi-fi-8-advances-mmwave-hits-a-split-wi-fi-9-begins/"
source_quality: full
topics: [802.11bn, 802.11bq, MAC-layer, scheduling]
novelty_score: 4
---

## Summary (EN)

The January 2026 IEEE 802.11 interim session in Victoria, BC produced three substantive outcomes that bridge the November 2025 plenary and the March 2026 plenary readout already in this KB (`2026-05-01_ieee-march-2026-readout.md`).

**1. 802.11bn (Wi-Fi 8) approved Draft 1.3.** The TGbn task group resolved approximately 740 LB291 (D1.0) comments and approved D1.3, with ~60% of LB291 technical comments now addressed. The major design clusters that received attention this interim were Coordinated Spatial Reuse, Distributed Resource Units, Enhanced Long Range PPDU, and multi-user MAC operations. The May 2028 ratification target survives, and Draft 2.0 was still scheduled for May 2026 at the time of the Victoria session — that target has since slipped to July 2026 (see `2026-05-01_ieee-tgbn-d2-schedule.md`).

**2. 802.11bq (Integrated mmWave) reached consensus on guard intervals (50 / 100 ns) and packet formats** but ran into a fundamental architectural split: the proposal to **prohibit** 60 GHz access points from transmitting beacon frames did not pass. Two camps remain: (a) "60 GHz as pure speed boost" tied to sub-7 GHz for discovery and timing — lower hardware complexity, lower power, faster time-to-market; vs (b) standalone 60 GHz capable of independent operation. The unresolved beacon question affects MAC scheduling design (TWT-based vs ICF/ICR-based — see `2026-05-01_ieee-march-2026-readout.md`).

**3. Wireless Next Generation (WNG) Standing Committee began Wi-Fi 9 / post-bn discussions.** A formal Study Group is expected to form by mid-2026 with task-group formation around 2027. AI/ML for channel optimization and predictive roaming surfaced as topics of interest for the next generation — slotting in next to the AI Offload Study Group that subsequently formed at the March 2026 plenary.

## Summary (ZH)

2026 年 1 月在不列颠哥伦比亚维多利亚举行的 IEEE 802.11 中期会议产生了三项实质性成果，承上启下连接 2025 年 11 月全会与本 KB 中已记录的 2026 年 3 月全会回顾（`2026-05-01_ieee-march-2026-readout.md`）。

**1. 802.11bn（Wi-Fi 8）批准 Draft 1.3。** TGbn 工作组解决了约 740 条 LB291（D1.0）评论并批准 D1.3，目前 LB291 的技术性评论已处理约 60%。本次中期会议的主要议题集群包括协同空间复用、分布式 RU、增强长距 PPDU 以及多用户 MAC 操作。2028 年 5 月批准节点仍在；维多利亚会议时 Draft 2.0 仍定在 2026 年 5 月，但此后已推迟至 7 月（详见 `2026-05-01_ieee-tgbn-d2-schedule.md`）。

**2. 802.11bq（集成毫米波）就保护间隔（50 / 100 ns）与包格式达成共识**，但遇到一个本质架构分歧：是否**禁止** 60 GHz AP 发送 Beacon 帧的提案未通过。两派立场是：（a）"60 GHz 仅作纯加速通道"，发现与时序依赖 sub-7 GHz —— 硬件简单、功耗低、更快上市；vs（b）支持 60 GHz 独立工作。这一未决问题影响 MAC 调度设计（基于 TWT vs 基于 ICF/ICR —— 见 `2026-05-01_ieee-march-2026-readout.md`）。

**3. WNG 常设委员会启动了 Wi-Fi 9 / 后 bn 的讨论。** 正式研究组（SG）预计 2026 年中前后成立，任务组（TG）大约在 2027 年成立。AI/ML 用于信道优化与预测性漫游成为下一代的关注主题 —— 与稍后在 2026 年 3 月全会上正式成立的 AI Offload SG 形成两条并行主线。

## Key technical points (EN)

- **TGbn:** D1.3 approved; ~740 LB291 comments resolved; ~60% of D1.0 comments addressed
- **TGbq:** GI = 50 / 100 ns; PPDU format converges; **beacon-prohibition proposal failed** — split between dependent vs. independent mmWave operation
- **WNG:** Wi-Fi 9 / post-bn discussions opened; SG mid-2026, TG 2027, completion ~2032
- **Topics flagged for Wi-Fi 9 by WNG:** AI/ML channel optimization, predictive roaming
- **Standardization timeline (consistent with `2026-05-01_ieee-tgbn-d2-schedule.md`):** May 2028 SA Ballot for TGbn; D2.0 originally May 2026 → slipped to July 2026

## Key technical points (ZH)

- **TGbn：** D1.3 通过；约 740 条 LB291 评论已解决；约 60% 的 D1.0 评论已处理
- **TGbq：** GI = 50 / 100 ns；PPDU 格式收敛；**禁止 Beacon 提案未通过** —— 60 GHz 依赖 vs 独立工作仍存争议
- **WNG：** Wi-Fi 9 / 后 bn 讨论启动；SG 2026 年中、TG 2027、完成约 2032 年
- **WNG 中关注的 Wi-Fi 9 主题：** AI/ML 信道优化、预测性漫游
- **标准化时间线（与 `2026-05-01_ieee-tgbn-d2-schedule.md` 一致）：** TGbn SA Ballot 2028 年 5 月；D2.0 原定 2026 年 5 月 → 推迟至 7 月

## Why it matters / what's new (EN)

- **Fills the timeline gap.** This entry captures the interim session that bridges the November 2025 plenary and the March 2026 plenary readout already in the KB. The TGbq beacon split, which the March 2026 plenary then carried forward as "MAC scheduling still flexible", traces directly back to this Victoria session.
- **TGbq is a two-architecture standard.** The fact that the beacon-prohibition proposal failed means the ratified 802.11bq spec will likely have to support BOTH dependent and independent 60 GHz operation, increasing implementation complexity.
- **Wi-Fi 9 timeline anchored.** SG mid-2026 → TG 2027 → completion ~2032 is now a stable industry expectation; subsequent vendor roadmap statements should be evaluated against this baseline.

## Why it matters / what's new (ZH)

- **填补了时间线空白。** 本条目记录了承前（2025 年 11 月全会）启后（已收录的 2026 年 3 月全会回顾）的中期会议。3 月全会上提到的"TGbq MAC 调度仍有弹性"实际上正是源于本次维多利亚会议关于 Beacon 的分歧。
- **TGbq 将是双架构标准。** 禁止 Beacon 的提案未通过意味着 802.11bq 最终标准可能需要同时支持 60 GHz 依赖与独立两种工作模式，实现复杂度上升。
- **Wi-Fi 9 时间线被锚定。** SG 2026 年中 → TG 2027 → 完成约 2032 年，已成为行业稳定预期；后续厂商路线图声明可以以此为基线判断。

## Images

![The Standards Readout — Ofinno series logo | The Standards Readout 系列徽标](https://ofinno.com/wp-content/uploads/2026/01/logo-tsr.jpg)
