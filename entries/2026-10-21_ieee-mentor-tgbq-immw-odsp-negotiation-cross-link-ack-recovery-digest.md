---
id: 2026-10-21_ieee-mentor-tgbq-immw-odsp-negotiation-cross-link-ack-recovery-digest
date_published: 2026-10-20
date_found: 2026-10-21
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbq Mentor digest — 2026-10-21 (IMMW on-demand service period negotiation, DCN 1660r1; cross-link acknowledgment recovery, DCN 1771r1)"
title_zh: "IEEE 802.11 TGbq Mentor 当日摘要 — 2026-10-21（IMMW 按需服务时段协商，DCN 1660r1；跨链确认恢复，DCN 1771r1）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bq"
source_quality: full
topics: [TGbq, 802.11bq, IMMW, ODSP, on-demand service period, cross-link BA, TID-to-link mapping, straw poll]
topic_primary: mmwave-bq
topics_secondary: [mlo]
novelty_score: 2
---

## Summary (EN)

Two TGbq decks were uploaded as new revisions on 2026-10-19/20; both were read in full. DCN 11-26-1660r1 "Further Details on ODSP Negotiation" (Dongju Cha et al., LG Electronics; slide date 2026-09-11; uploaded 2026-10-20 00:32 ET) is a revision of a deck listed by title only (as r0) in 2026-09-14_ieee-mentor-tgbq-immw-phy-baseline-wave-digest, and DCN 11-26-1771r1 "Cross-Link Acknowledgment Recovery for IMMW Links" (Salvatore Talarico et al., Nokia; slide date 2026-09-10; uploaded 2026-10-19 18:26 ET) is a revision of a deck listed in 2026-09-11_ieee-mentor-tgbq-immw-mac-phy-digest as r0. The differences between the revisions were not diffed.

DCN 1660r1 starts from the passed motion (cited as [M15]) to set up an on-demand service period (ODSP) for frame exchanges on the mmWave link via the sub-7 GHz link. It compares two negotiation methods. Control-frame exchange: pro, fast negotiation to handle urgent traffic; con, the responder may not be able to respond within SIFS (or SIFS plus padding). Management-frame exchange: pro, the response can follow after sufficient processing time; con, slow or unclosed negotiation depending on the responder's channel status. For control frames the deck suggests the responder may confirm later, optionally with a Response Delay after which the initiator may solicit the scheduling confirmation. For management frames it suggests behavioural rules: a requester that gets no response before the indicated Start Time treats it as a reject and does not wake for the exchange, and a responder that cannot respond before the Start Time does not transmit (or discards) the response. It prefers an upper-bound Start Time in the request, with the responder returning a specific time point.

DCN 1771r1 recalls Motions 12 and 13 (every MLD with an IMMW STA has an affiliated STA on an enabled sub-7.25 GHz link; operations such as TTLM or ML Reconfiguration must not leave only IMMW STAs or only mmWave links) and the downlink-only IMMW option in which uplink transmissions, including ACKs, may be sent on the sub-7 GHz link. Its problem statement cites roughly 1-2% outage probability in common indoor deployments for 42-71 GHz, and describes that an outage during an A-MPDU or at Block Ack transmission triggers retransmission of the whole A-MPDU, and that no motion or text requires a TID mapped to an IMMW link to be mapped to at least one sub-7 GHz link. It proposes (1) mandating that mapping, and (2) extending cross-link acknowledgment so a non-AP MLD can send acknowledgment information for an IMMW link in a BA on a sub-7 GHz link (illustrated with Acked Link ID, TID, SSN and a bitmap), so the AP retransmits only the missing MPDUs.

## Summary (ZH)

2026-10-19/20 有两份 TGbq 幻灯片以新修订版上传，均已通读。DCN 11-26-1660r1《Further Details on ODSP Negotiation》（LG Electronics 的 Dongju Cha 等；幻灯片日期 2026-09-11；2026-10-20 00:32 ET 上传）是 2026-09-14_ieee-mentor-tgbq-immw-phy-baseline-wave-digest 中仅以标题列出的 r0 的修订版；DCN 11-26-1771r1《Cross-Link Acknowledgment Recovery for IMMW Links》（Nokia 的 Salvatore Talarico 等；幻灯片日期 2026-09-10；2026-10-19 18:26 ET 上传）是 2026-09-11_ieee-mentor-tgbq-immw-mac-phy-digest 中以 r0 列出的幻灯片的修订版。两个修订版之间的差异未做比对。

DCN 1660r1 以已通过的动议（文中标为 [M15]）为起点：通过 sub-7 GHz 链路建立按需服务时段（ODSP），用于毫米波链路上的帧交换。幻灯片比较两种协商方式。控制帧交换：优点是协商快，可处理紧急业务；缺点是响应方可能无法在 SIFS（或 SIFS 加填充）内响应。管理帧交换：优点是请求帧之后可有足够处理时间再发响应；缺点是协商慢或无法闭合，取决于响应方信道状态。对控制帧，幻灯片建议响应方可稍后确认，并可选地带 Response Delay，发起方在其后可请求调度确认。对管理帧，建议制定行为规则：请求方在请求帧所指示的 Start Time 之前未收到响应则视为拒绝，不进入唤醒状态；响应方若无法在 Start Time 之前发出响应则不发送（或丢弃）。幻灯片倾向于在请求中使用上界型 Start Time，由响应方返回具体时间点。

DCN 1771r1 回顾动议 12 和 13（含 IMMW STA 的每个 MLD 必须有另一个工作在已启用 sub-7.25 GHz 链路的附属 STA；TTLM 或 ML 重配置等操作不得留下仅有 IMMW STA 或仅有毫米波链路的情形），以及仅下行的 IMMW 选项（上行传输包括 ACK 可在 sub-7 GHz 链路上发送）。问题陈述称 42-71 GHz 在常见室内部署中约有 1-2% 的中断概率；A-MPDU 进行中或发送 Block Ack 时发生中断，会触发整个 A-MPDU 重传；且目前没有动议或文本要求映射到 IMMW 链路的 TID 同时映射到至少一条 sub-7 GHz 链路。幻灯片提出：(1) 强制该映射；(2) 扩展跨链确认，使非 AP MLD 可在 sub-7 GHz 链路的 BA 中携带 IMMW 链路的确认信息（以 Acked Link ID、TID、SSN 与位图示意），从而 AP 只重传缺失的 MPDU。

## Key technical points (EN)

- **DCN 11-26-1660r1 · TGbq** [document](https://mentor.ieee.org/802.11/documents?is_dcn=1660&is_year=2026) — Further Details on ODSP Negotiation. Dongju Cha et al. (LG Electronics).
- Negotiation may be on an IMMW link or a sub-7 GHz link; Start Time may be a specific time point (e.g. partial TSF), an upper bound (preferred in the deck) or omitted (implicitly the time negotiation completes, accounting for the recipient's mmW switch delay; the deck says this may apply only to the control-frame case).
- The deck notes that what matters is whether the recipient can respond within SIFS (+ padding); IMMW STAs could indicate this so the requester can choose control or management frames.
- Three straw polls for the 11bq SFD: SP1 request frame indicates an upper-bound Start Time, negotiation on IMMW or sub-7 GHz link (details TBD); SP2 the response frame on the sub-7 GHz link includes the time it needs for preparing the response; SP3 an IMMW STA indicates, via sub-7 GHz signalling, information for choosing the frame type (control or management) for ODSP negotiation (signalling TBD).
- **DCN 11-26-1771r1 · TGbq** [document](https://mentor.ieee.org/802.11/documents?is_dcn=1771&is_year=2026) — Cross-Link Acknowledgment Recovery for IMMW Links. Salvatore Talarico et al. (Nokia).
- Example in the deck: a Cross-Link BA with Acked Link ID = IMMW Link 4, TID = 5, SSN = 100 and a bitmap; an all-ones bitmap means no retransmission.
- Straw Poll 1: the 11bq draft shall support TID-to-link mapping such that any TID mapped to an IMMW link is also mapped to at least one sub-7 GHz link. Straw Poll 2: an MLD STA may optionally provide acknowledgment information on a sub-7 GHz link for MPDUs received on an IMMW link (TBD: solicited via BAR or unsolicited via BA; conditions).

## Key technical points (ZH)

- **DCN 11-26-1660r1 · TGbq** [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1660&is_year=2026) — Further Details on ODSP Negotiation。Dongju Cha 等（LG Electronics）。
- 协商可在 IMMW 链路或 sub-7 GHz 链路上进行；Start Time 可为具体时间点（如 partial TSF）、上界（幻灯片倾向）或不携带（隐含为协商完成的时刻，并考虑接收方的毫米波切换时延；幻灯片称可能仅适用于控制帧情形）。
- 幻灯片指出关键在于接收方能否在 SIFS（+ 填充）内响应；IMMW STA 可对此作出指示，使请求方选择控制帧或管理帧。
- 面向 11bq SFD 的三项意向投票：SP1 请求帧指示上界型 Start Time，协商可在 IMMW 或 sub-7 GHz 链路上进行（细节待定）；SP2 在 sub-7 GHz 链路上发送的响应帧包含其准备响应所需的时间；SP3 IMMW STA 通过 sub-7 GHz 信令指示用于选择 ODSP 协商所用帧类型（控制帧或管理帧）的信息（信令方式待定）。
- **DCN 11-26-1771r1 · TGbq** [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1771&is_year=2026) — Cross-Link Acknowledgment Recovery for IMMW Links。Salvatore Talarico 等（Nokia）。
- 幻灯片示例：跨链 BA，Acked Link ID = IMMW Link 4，TID = 5，SSN = 100，并带位图；位图全 1 表示无需重传。
- 意向投票 1：11bq 草案应支持 TID 到链路的映射，使映射到 IMMW 链路的任何 TID 也映射到至少一条 sub-7 GHz 链路。意向投票 2：MLD STA 可选地在 sub-7 GHz 链路上为在 IMMW 链路上接收的 MPDU 提供确认信息（待定：通过 BAR 的请求式还是通过 BA 的主动式；适用条件）。

## Why it matters / what's new (EN)

Both documents are straw-poll proposals, not adopted text; no vote outcome is recorded in the files. They continue the IMMW material in the KB's earlier TGbq digests (2026-10-14_ieee-mentor-tgbq-immw-sub7-discovery-timing-beam-establishment-digest and 2026-10-19_ieee-mentor-tgbq-immw-rd-triggered-txs-link-adaptation-om-digest) with two further pieces of the sub-7 GHz-assisted operation: how a service period is requested and confirmed, and how acknowledgments survive an outage on the mmWave link. The 1771 deck was previously listed only by title in the 2026-09-11 digest, and the 1660 deck only by title (as r0) in the 2026-09-14 digest; this entry records the content of both revisions.

## Why it matters / what's new (ZH)

两份文档均为意向投票提案，并非已采纳文本；文件中未记录表决结果。它们延续本知识库此前 TGbq 摘要（2026-10-14_ieee-mentor-tgbq-immw-sub7-discovery-timing-beam-establishment-digest 与 2026-10-19_ieee-mentor-tgbq-immw-rd-triggered-txs-link-adaptation-om-digest）中的 IMMW 内容，补充 sub-7 GHz 辅助运行的两个方面：如何请求并确认服务时段，以及毫米波链路中断时确认信息如何保留。1771 幻灯片此前在 2026-09-11 摘要中仅以标题列出，1660 幻灯片（r0）此前在 2026-09-14 摘要中仅以标题列出；本条目记录这两个修订版的内容。
