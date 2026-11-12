---
id: 2026-11-12_ieee-mentor-tgbq-ofinno-beam-validity-aware-sp-scheduling-immw-dcn-2238
date_published: 2026-11-11
date_found: 2026-11-12
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbq: Beam Validity-Aware SP Scheduling for IMMW (DCN 11-26-2238r1, Ofinno)"
title_zh: "IEEE 802.11 TGbq：面向 IMMW 的波束有效性感知 SP 调度（DCN 11-26-2238r1，Ofinno）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2238&is_year=2026"
source_quality: full
topics: [802.11bq, IMMW, mmWave, beam establishment, beam tracking, service period, beam validity]
topic_primary: mmwave-bq
topics_secondary: [energy-power-save]
novelty_score: 3
---

## Summary (EN)

DCN 11-26-2238r1, "Beam Validity-Aware SP Scheduling for IMMW" (Hyoungjin Kwon, Ofinno, with five co-authors; TGbq; 9 slides; r1 uploaded 11 November 2026, title-slide date 2026-11-12), addresses how an IMMW service period (SP) is started. The introduction recalls two TGbq agreements it builds on: nothing is transmitted on the mmWave link outside a negotiated SP (motion #62), and the SP is negotiated over sub-7 GHz ahead of its start (motions #15 and #73). Its stated problem is that nothing in the SP negotiation says whether the beam found by beam establishment (BE) will still be usable when the SP runs; between SPs nothing is transmitted on the mmWave link, so there is no new evidence, and the first evidence is an ICF/ICR timeout inside the next SP, after which recovery goes over sub-7 GHz, which may be busy.

The proposal sets a beam validity (BV) duration during BE. A BV timer starts at a reference time known to both STAs (for example the BE feedback), and each successful reception (for example an ICR or BA) resets it, so no extra signaling is needed. At SP scheduling the AP (or the requesting STA) compares the scheduled SP start (Tstart) with the expiry time (Tref plus BV duration): if Tstart does not exceed the expiry, a data SP starting with ICF/ICR is scheduled; otherwise a beam-training SP (for example a BESP whose NDP and TRN modules are pre-configured in the SP request/response) is scheduled and data follows in a later SP. The deck states that value range, unit and reset rules are TBD and notes the value is "close to the beam coherence time". The final slide is a straw poll on adding to the TGbq SFD that an IMMW STA may indicate a BV duration during BE, that it is the time from a reference time during which the beam pair is expected to remain usable without further training, and that it may be used when an SP is negotiated; other details are left TBD.

## Summary (ZH)

DCN 11-26-2238r1《Beam Validity-Aware SP Scheduling for IMMW》（Hyoungjin Kwon，Ofinno，另有五位共同作者；TGbq；共 9 页；r1 于 2026 年 11 月 11 日上传，标题页日期 2026-11-12）讨论 IMMW 服务周期（SP）如何开始。引言回顾其所依据的两项 TGbq 既有共识：在已协商的 SP 之外不在毫米波链路上发送任何内容（motion #62），以及 SP 在开始前经 sub-7 GHz 协商（motion #15 与 #73）。文稿所述问题是：SP 协商中没有任何信息说明波束建立（BE）所得波束在 SP 运行时是否仍可用；SP 之间毫米波链路上没有任何传输，因此没有新的证据，首个证据是下一个 SP 内的 ICF/ICR 超时，其后的恢复要经由可能繁忙的 sub-7 GHz 进行。

提案在 BE 期间设定波束有效性（BV）时长。BV 计时器从双方 STA 都已知的参考时刻（例如 BE 反馈）开始，每次成功接收（例如 ICR 或 BA）即将其复位，因此无需额外信令。在调度 SP 时，AP（或发起请求的 STA）将预定的 SP 起始时刻（Tstart）与到期时刻（Tref 加 BV 时长）比较：若 Tstart 未超过到期时刻，则调度以 ICF/ICR 开始的数据 SP；否则调度波束训练 SP（例如 NDP 与 TRN 模块在 SP 请求/响应中预先配置的 BESP），数据在之后的 SP 中传输。文稿说明取值范围、单位与复位规则待定，并指出该值“接近波束相干时间”。末页为 straw poll：建议在 TGbq SFD 中加入——IMMW STA 可在 BE 期间指示 BV 时长；BV 时长是从某一参考时刻起、所得波束对预期无需再训练即可保持可用的时间；该时长可用于 SP 协商；其余细节待定。

## Key technical points (EN)

- Builds on TGbq agreements: no mmWave transmission outside a negotiated SP (M#62); SP negotiated over sub-7 GHz ahead of start (M#15, M#73).
- Problem as stated: SP negotiation carries no beam-validity information; first evidence of a stale beam is an ICF/ICR timeout inside the SP, with recovery over sub-7 GHz.
- BV duration set during BE; BV timer anchored at a reference time (for example BE feedback); reset by any successful exchange (ICR, BA) without extra signaling.
- AP rule: Tstart at or before expiry gives a data SP (ICF/ICR); Tstart after expiry gives a beam-training SP (BT or BE), decided before the SP starts.
- Value range, unit and reset rules TBD; stated to be close to the beam coherence time.
- Straw poll proposes an SFD entry: an IMMW STA may indicate a BV duration during BE and it may be used in SP negotiation.

## Key technical points (ZH)

- 所依据的 TGbq 共识：在已协商 SP 之外不在毫米波链路上发送（M#62）；SP 在开始前经 sub-7 GHz 协商（M#15、M#73）。
- 所述问题：SP 协商不含波束有效性信息；波束失效的首个证据是 SP 内的 ICF/ICR 超时，其后经 sub-7 GHz 恢复。
- BV 时长在 BE 期间设定；BV 计时器锚定于参考时刻（例如 BE 反馈）；任何成功交互（ICR、BA）即复位，无需额外信令。
- AP 规则：Tstart 不晚于到期时刻则为数据 SP（ICF/ICR）；晚于到期时刻则为波束训练 SP（BT 或 BE），在 SP 开始前即作决定。
- 取值范围、单位与复位规则待定；文稿称其接近波束相干时间。
- Straw poll 提议的 SFD 条目：IMMW STA 可在 BE 期间指示 BV 时长，且可用于 SP 协商。

## Why it matters / what's new (EN)

The KB's TGbq IMMW coverage before this week consisted mainly of group digests (for example 2026-10-14_ieee-mentor-tgbq-immw-sub7-discovery-timing-beam-establishment-digest); this deck is a single-mechanism proposal on the interaction between SP negotiation and beam maintenance. It cites related TGbq inputs on beam-establishment result time limits (26/1046), beam link management (26/1589), transmission failure handling (26/1374), beam tracking (26/1721, 26/2098, 26/2223), max idle period (26/1639) and periodic SP setup (26/2272), and states how its timer differs: it restarts on every exchange and is checked at an SP start chosen by the AP. The proposal is at straw-poll stage and its parameters are explicitly undefined.

## Why it matters / what's new (ZH)

KB 此前对 TGbq IMMW 的覆盖主要是小组摘要（例如 2026-10-14_ieee-mentor-tgbq-immw-sub7-discovery-timing-beam-establishment-digest）；本文稿是关于 SP 协商与波束维护相互作用的单一机制提案。文稿引用了相关的 TGbq 输入，涉及波束建立结果的时间限制（26/1046）、波束链路管理（26/1589）、传输失败处理（26/1374）、波束跟踪（26/1721、26/2098、26/2223）、最大空闲时长（26/1639）与周期性 SP 建立（26/2272），并说明自身计时器的不同之处：每次交互即重启，并在由 AP 选择的 SP 起始时刻进行检查。该提案处于 straw poll 阶段，其参数明确尚未定义。

## Images

None.
