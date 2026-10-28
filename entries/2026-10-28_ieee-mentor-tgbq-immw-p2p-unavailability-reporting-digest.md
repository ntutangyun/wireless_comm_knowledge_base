---
id: 2026-10-28_ieee-mentor-tgbq-immw-p2p-unavailability-reporting-digest
date_published: 2026-10-27
date_found: 2026-10-28
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbq Mentor digest — 2026-10-28 (unavailability operation for P2P communications in IMMW, DCN 1409r2: one Channel Usage exchange for both peers, or a dedicated P2P broadcast TWT)"
title_zh: "IEEE 802.11 TGbq Mentor 当日摘要 — 2026-10-28（IMMW 中 P2P 通信的不可用性操作，DCN 1409r2：一次 Channel Usage 交换覆盖双方，或专用 P2P 广播 TWT）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=1409"
source_quality: full
topics: [TGbq, 802.11bq, IMMW, P2P, unavailability, TWT, Channel Usage, service period, straw poll]
topic_primary: mmwave-bq
topics_secondary: [energy-power-save]
novelty_score: 2
---

## Summary (EN)

DCN 11-26-1409r2, "Unavailability Operation for P2P Communications in IMMW" (Javier Perez-Ramirez, Ofinno, with six Ofinno co-authors; uploaded 27 October 2026; slide date 2026-09-16). It is a 10-slide deck. Earlier revisions r0 (10 July) and r1 (16 September) exist on Mentor. The deck starts from Motion #102 (two IMMW MLDs can perform P2P operation between them on the mmWave band) and from the P2P PDT, under which frame exchanges between the two MLDs on mmWave follow the IMMW service period (SP) rules. In the baseline, one non-AP STA reports its unavailability to its AP with one Channel Usage Request/Response exchange per STA (Usage Mode 3).

The problem slide names two gaps. Gap A: the peer-to-peer TWT agreement set up by a Channel Usage Request is only between the AP and the requesting STA, so there is "no framework to indicate the unavailability of the peer as well", even though every SP other than a beam establishment SP is between exactly two peer IMMW STAs. Gap B: a STA declares P2P unavailability in a Channel Usage Request and the AP MLD must accept the requested parameters unchanged, so the AP MLD "has no say" over when P2P occupies the mmWave link it also uses for its own latency-sensitive traffic.

Two options follow. Option 1: the two MLDs negotiate the P2P SP on the mmWave link via the sub-7 GHz link, and non-AP STA 1 then acts as a proxy for its peer, so one Channel Usage Request/Response exchange with the AP MLD covers the SP for both STAs; the report indicates the mmWave link, the unavailability end time and the peer covered, which non-AP MLD performs it is TBD (the SP initiator is called a natural candidate), and the stated benefit is that one report covers both STAs at once, whereas two independent reports may partially fail and leave the AP with an inconsistent view of the pair. Two variants carry the unavailability inside an on-demand SP negotiation instead: in the response frame (the responder already has a periodic P2P SP that the on-demand SP would overlap), or in the request frame by the initiator only (non-AP MLD reporting its own unavailability, or the AP MLD reporting the IMMW AP's unavailability; either side may initiate per Motion #73). Option 2: one broadcast TWT schedule dedicated to P2P, advertised by the AP MLD on the sub-7 GHz link, where membership itself is the unavailability report and member STAs are unavailable on mmWave during its service periods. Straw Poll 1 asks whether to include in the TGbq SFD that unavailability information of an IMMW STA in an on-demand SP negotiation may be included in a frame of that negotiation, that it may be of the initiator, the responder or both, and that its scope is TBD. The slides give no result for the poll.

## Summary (ZH)

DCN 11-26-1409r2《Unavailability Operation for P2P Communications in IMMW》（Ofinno 的 Javier Perez-Ramirez 及另外六位 Ofinno 共同作者；2026 年 10 月 27 日上传；幻灯片日期 2026-09-16）。这是一份 10 页幻灯片。Mentor 上另有 r0（7 月 10 日）与 r1（9 月 16 日）。文档以动议 #102（两个 IMMW MLD 之间可在毫米波频段进行 P2P 操作）和 P2P PDT 为起点，按 PDT，两个 MLD 在毫米波上的帧交换遵循 IMMW 服务时段（SP）规则。基线中，一个非 AP STA 通过每个 STA 一次 Channel Usage Request/Response 交换（Usage Mode 3）向其 AP 报告不可用。

问题页指出两个缺口。缺口 A：由 Channel Usage Request 建立的点对点 TWT 协定仅存在于 AP 与发起请求的 STA 之间，因此“没有框架同时指示对端的不可用”，而除波束建立 SP 之外的每个 SP 恰好发生在两个对等 IMMW STA 之间。缺口 B：STA 在 Channel Usage Request 中声明 P2P 不可用，AP MLD 必须原样接受所请求的参数，因此 AP MLD 对 P2P 何时占用毫米波链路“没有发言权”，而该链路同时承载 AP 自身对时延敏感的流量。

随后给出两个方案。方案 1：两个 MLD 经由 sub-7 GHz 链路协商毫米波链路上的 P2P SP，然后由非 AP STA 1 代理其对端，使与 AP MLD 的一次 Channel Usage Request/Response 交换即覆盖双方的 SP；该报告指明毫米波链路、不可用结束时间及所覆盖的对端，由哪个非 AP MLD 执行尚待确定（SP 发起方被称为自然候选），所述好处是一次报告即同时指示双方不可用，而两次独立报告可能部分失败、使 AP 对这对 STA 的认知不一致。另有两个变体，把不可用信息放进按需 SP 协商：放在响应帧中（响应方已有周期性 P2P SP，而按需 SP 将与之重叠），或仅由发起方放在请求帧中（非 AP MLD 报告自身的不可用，或 AP MLD 报告 IMMW AP 的不可用；按动议 #73 任一方均可发起）。方案 2：由 AP MLD 在 sub-7 GHz 链路上通告一个专用于 P2P 的广播 TWT 调度，成员资格本身即为不可用报告，成员 STA 在其服务时段内于毫米波上不可用。Straw Poll 1 询问是否将以下内容纳入 TGbq SFD：IMMW STA 参与按需 SP 协商时，其不可用信息可包含在该协商的帧中；该信息可属于发起方、响应方或双方；其范围待定。幻灯片未给出投票结果。

## Key technical points (EN)

- **DCN 11-26-1409r2 · TGbq** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=1409&is_year=2026) Unavailability Operation for P2P Communications in IMMW. Javier Perez-Ramirez (Ofinno) et al. 10 slides.
- Starting points: Motion #102 (IMMW P2P on mmWave), the IMMW P2P PDT (11-26/1652r0) and the IMMW SP operation PDT (11-26/1608r1); baseline is one Channel Usage Request/Response (Usage Mode 3) per STA.
- Gap A: the P2P TWT agreement from a Channel Usage Request is AP-to-requester only. Gap B: the AP MLD must accept the requested parameters unchanged.
- Option 1: P2P SP negotiated over sub-7 GHz; non-AP STA 1 proxies for its peer in one exchange (mmWave link, unavailability end time, peer covered); variants put the unavailability in the on-demand SP response or in the initiator's request.
- Option 2: a P2P-dedicated broadcast TWT schedule advertised by the AP MLD on the sub-7 GHz link; membership = unavailability report.
- Straw Poll 1 (SFD text): unavailability information may be included in a frame of the on-demand SP negotiation, may be that of initiator, responder or both; scope TBD. No outcome shown in the slides.

## Key technical points (ZH)

- **DCN 11-26-1409r2 · TGbq** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1409&is_year=2026) Unavailability Operation for P2P Communications in IMMW。Javier Perez-Ramirez（Ofinno）等。共 10 页。
- 起点：动议 #102（毫米波上的 IMMW P2P）、IMMW P2P PDT（11-26/1652r0）和 IMMW SP 操作 PDT（11-26/1608r1）；基线为每个 STA 一次 Channel Usage Request/Response（Usage Mode 3）。
- 缺口 A：Channel Usage Request 产生的 P2P TWT 协定仅限 AP 与请求方之间。缺口 B：AP MLD 必须原样接受所请求的参数。
- 方案 1：经 sub-7 GHz 协商 P2P SP；非 AP STA 1 在一次交换中代理其对端（毫米波链路、不可用结束时间、所覆盖的对端）；变体把不可用信息放入按需 SP 的响应或发起方的请求。
- 方案 2：由 AP MLD 在 sub-7 GHz 链路上通告专用于 P2P 的广播 TWT 调度；成员资格 = 不可用报告。
- Straw Poll 1（SFD 文本）：不可用信息可包含在按需 SP 协商的帧中，可属于发起方、响应方或双方；范围待定。幻灯片未显示结果。

## Why it matters / what's new (EN)

This is TGbq's IMMW P2P work reaching the mechanics of reporting unavailability, as opposed to the on-demand SP negotiation and cross-link acknowledgment items covered in [2026-10-21_ieee-mentor-tgbq-immw-odsp-negotiation-cross-link-ack-recovery-digest](2026-10-21_ieee-mentor-tgbq-immw-odsp-negotiation-cross-link-ack-recovery-digest.md) and the clock-drift/sub-7 beacon items in [2026-10-26_ieee-mentor-tgbq-immw-clock-drift-sub7-beacon-critical-updates-digest](2026-10-26_ieee-mentor-tgbq-immw-clock-drift-sub7-beacon-critical-updates-digest.md). The document itself frames the open choice: a per-pair proxy report (consistent view for the AP, but the reporting MLD is undecided) versus a standing broadcast-TWT membership (no per-SP signalling, but a shared schedule). The slide date (2026-09-16) predates the October upload, so this r2 is a revision of earlier material, and nothing here indicates the group's position.

## Why it matters / what's new (ZH)

这是 TGbq 的 IMMW P2P 工作推进到“如何报告不可用”的机制层面，相关内容见按需 SP 协商与跨链路确认恢复（见 [2026-10-21_ieee-mentor-tgbq-immw-odsp-negotiation-cross-link-ack-recovery-digest](2026-10-21_ieee-mentor-tgbq-immw-odsp-negotiation-cross-link-ack-recovery-digest.md)）以及时钟漂移与 sub-7 信标事项（见 [2026-10-26_ieee-mentor-tgbq-immw-clock-drift-sub7-beacon-critical-updates-digest](2026-10-26_ieee-mentor-tgbq-immw-clock-drift-sub7-beacon-critical-updates-digest.md)）。文档本身把待选项摆明：每对 STA 的代理报告（AP 视角一致，但由哪个 MLD 报告未定）与常驻的广播 TWT 成员资格（无需逐 SP 信令，但需共享调度）。幻灯片日期（2026-09-16）早于 10 月上传，说明 r2 是对早先材料的修订；本文未显示小组的立场。
