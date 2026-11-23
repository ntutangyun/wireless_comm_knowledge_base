---
id: 2026-11-23_ieee-mentor-tgbq-immw-sp-management-dcn-2103
date_published: 2026-11-19
date_found: 2026-11-23
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbq Mentor digest - 2026-11-19: IMMW SP Management (DCN 11-26-2103r2), availability bitmap, harmonic intervals and per-occurrence skip/shorten/shift"
title_zh: "IEEE 802.11 TGbq Mentor 摘要 - 2026-11-19：IMMW SP 管理（DCN 11-26-2103r2）——可用性位图、谐波间隔与逐次 skip/shorten/shift"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2103&is_year=2026"
source_quality: full
topics: [802.11bq, TGbq, IMMW, mmWave, service period, SFD, straw poll]
topic_primary: mmwave-bq
topics_secondary: [rtwt-latency]
novelty_score: 2
---

## Summary (EN)

DCN 11-26-2103r2, "IMMW SP Management" (Charlie Pettersson, Ericsson; slide date 2026-10-23, "November 2026"; revision r2 uploaded 19 November 2026), is a 14-slide deck for TGbq. Its background slide recalls that on the mmWave link frames are exchanged only within established service periods (SPs) (Motion 30); periodic SPs are set up via sub-7 GHz; an on-demand SP is negotiated via sub-7 GHz or in-band during an earlier SP, by either side; and that negotiating an on-demand SP has to account for the unavailability of both initiator and responder (Motion 65). Non-AP MLDs may also hold P2P agreements on the mmWave band. Source cited: 11-25-2163r38.

The deck presents two mechanisms. (1) On-demand SPs: availability is exchanged in time as a bitmap over a validity period; the initiator sends a bitmap of coming slots (1 = available), the responder picks slots that also suit it and returns their index. The example uses 16 slots of 2 ms (32 ms) in 2 octets, and the AP keeps the offered slots free until the response arrives; slot duration and how far ahead the bitmap reaches are marked TBD. (2) Periodic SP agreements, handled in units of occurrences rather than time, with two tools: 2a, prevent overlaps at setup with harmonic intervals (the AP advertises a base interval P and asks STAs to request multiples of P; agreements in different slots never overlap, and 2P and 3P in the same slot collide every 6P; the slide lists as a limitation that traffic whose period is not a multiple of P, such as 60 fps video, has to be rounded); 2b, resolve in advance with one occurrence-based indication: the AP can skip, shorten or shift an occurrence, and a non-AP STA can only indicate that it will be unavailable. The indication identifies the agreement and the occurrences (first one, how many, repeated every n) and may be sent within an SP or via sub-7 GHz. The deck states that an 8-bit offset at a 20 ms interval covers 5 s, against about 65 ms for a TSF-based start time (TGbn DUO).

Three straw polls ask whether to include the following in the 11bq SFD: (1) on-demand SP negotiation with an availability bitmap over a validity period (slot duration, time reference and frames TBD); (2) an IMMW AP may advertise a base interval that it prefers associated non-AP STAs to use as an integer-multiple for periodic SP intervals (whether it may be required for specific traffic is TBD); (3) 11bq defines an indication for periodic SP management by which a peer informs the other in advance about unavailability in selected future SPs, identified by position in the agreement. The slides show no poll results. The summary slide lists as an open issue on-demand SPs between two non-AP MLDs, where neither holds the AP's IMMW schedule.

## Summary (ZH)

DCN 11-26-2103r2《IMMW SP Management》（Ericsson 的 Charlie Pettersson；幻灯片日期 2026-10-23，标注“November 2026”；r2 于 2026 年 11 月 19 日上传）是面向 TGbq 的 14 页幻灯片。背景页回顾：毫米波链路上帧只在已建立的服务时段（SP）内交换（动议 30）；周期性 SP 经 sub-7 GHz 建立；按需 SP 可由任一方经 sub-7 GHz 或在先前 SP 内带内协商；协商按需 SP 须考虑发起方与响应方双方的不可用（动议 65）。非 AP MLD 还可能在毫米波频段持有 P2P 协定。引用来源：11-25-2163r38。

文档给出两种机制。（1）按需 SP：以位图形式在有效期内按时间交换可用性——发起方发送未来时隙位图（1 表示可用），响应方选择同样适合自身的时隙并返回其索引。示例为 16 个 2 ms 时隙（32 ms），占 2 个八位组，AP 在响应到来前保持所提供时隙空闲；时隙时长与位图可前瞻的范围标注为待定。（2）周期性 SP 协定，以“第几次出现”而非时间为单位处理，有两种手段：2a，在建立时以谐波间隔避免重叠（AP 通告基础间隔 P，要求 STA 申请 P 的整数倍；位于不同时隙的协定永不重叠，同一时隙中的 2P 与 3P 每 6P 冲突一次；幻灯片将周期不是 P 整数倍的流量（如 60 fps 视频）须取整列为局限）；2b，以一个基于出现次数的指示提前解决：AP 可 skip、shorten 或 shift 某次出现，非 AP STA 只能指示自己不可用。该指示标明协定与出现次数（第一次、共几次、每 n 次重复），可在 SP 内或经 sub-7 GHz 发送。文档称 20 ms 间隔下 8 比特偏移可覆盖 5 s，而基于 TSF 的起始时间（TGbn DUO）约为 65 ms。

三个 Straw Poll 询问是否将下列内容纳入 11bq SFD：（1）按需 SP 协商中，以有效期内的时隙位图指示可用性（时隙时长、时间基准与承载帧待定）；（2）IMMW AP 可通告基础间隔，表示其倾向于让关联的非 AP STA 申请该间隔整数倍的周期 SP（是否可对特定流量强制要求待定）；（3）11bq 定义周期 SP 管理指示，由协定一方提前告知对端在若干未来 SP 中不可用，SP 以其在协定中的位置标识。幻灯片未显示投票结果。总结页把“两个非 AP MLD 之间的按需 SP（双方均不持有 AP 的 IMMW 调度）”列为开放问题。

## Key technical points (EN)

- **DCN 11-26-2103r2 · TGbq** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2103&is_year=2026) IMMW SP Management. Charlie Pettersson (Ericsson). 14 slides.
- On-demand SP: availability bitmap over a validity period (example 16 x 2 ms slots in 2 octets); responder returns the chosen slot index; slot duration and reach TBD.
- Periodic SP, 2a: AP-advertised base interval P; agreements as multiples of P in distinct slots/phases; 2P and 3P in one slot collide every 6P.
- Periodic SP, 2b: one occurrence-based indication; AP: skip, shorten (with new duration) or shift (with offset); non-AP STA: unavailable only; carried in an SP or via sub-7 GHz.
- Stated comparison: 8-bit offset at 20 ms interval spans 5 s versus about 65 ms for a TSF-based start time.
- Straw Polls 1-3 for the 11bq SFD (outcomes not shown); references include 11-26-1084, 1666, 1672 and 11-25-2394.

## Key technical points (ZH)

- **DCN 11-26-2103r2 · TGbq** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2103&is_year=2026) IMMW SP Management。Charlie Pettersson（Ericsson）。共 14 页。
- 按需 SP：有效期内的可用性位图（示例 16 个 2 ms 时隙占 2 个八位组）；响应方返回所选时隙索引；时隙时长与前瞻范围待定。
- 周期 SP 2a：AP 通告基础间隔 P；协定取 P 的倍数并置于不同时隙/相位；同一时隙的 2P 与 3P 每 6P 冲突一次。
- 周期 SP 2b：一个基于出现次数的指示；AP 可 skip、shorten（含新时长）或 shift（含偏移）；非 AP STA 仅可指示不可用；可在 SP 内或经 sub-7 GHz 发送。
- 文档自述对比：20 ms 间隔下 8 比特偏移跨度 5 s，而基于 TSF 的起始时间约 65 ms。
- 面向 11bq SFD 的 Straw Poll 1-3（结果未显示）；参考文档含 11-26-1084、1666、1672 与 11-25-2394。

## Why it matters / what's new (EN)

The deck gathers the on-demand SP negotiation, harmonic-interval setup and per-occurrence unavailability items into one proposal with three SFD straw polls. It cites earlier TGbq documents on dynamic unavailability (1084), temporary suspension of on-demand SPs (1666) and on-demand SP negotiation (1672). The same unavailability theme appears in [2026-10-28_ieee-mentor-tgbq-immw-p2p-unavailability-reporting-digest](2026-10-28_ieee-mentor-tgbq-immw-p2p-unavailability-reporting-digest.md). Only the slides were read; outcomes of the straw polls at the November session are not visible in them.

## Why it matters / what's new (ZH)

该文档把按需 SP 协商、谐波间隔建立与逐次不可用指示合并为一份提案，并附三个 SFD Straw Poll。它引用了此前 TGbq 关于动态不可用（1084）、按需 SP 临时挂起（1666）与按需 SP 协商（1672）的文档。相同的不可用主题亦见 [2026-10-28_ieee-mentor-tgbq-immw-p2p-unavailability-reporting-digest](2026-10-28_ieee-mentor-tgbq-immw-p2p-unavailability-reporting-digest.md)。仅阅读了幻灯片；11 月会议上 Straw Poll 的结果无法从中看出。
