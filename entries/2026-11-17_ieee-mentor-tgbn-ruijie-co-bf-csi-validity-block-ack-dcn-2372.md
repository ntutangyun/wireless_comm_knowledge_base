---
id: 2026-11-17_ieee-mentor-tgbn-ruijie-co-bf-csi-validity-block-ack-dcn-2372
date_published: 2026-11-16
date_found: 2026-11-17
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn: Connections Between Co-BF Transmission Sequence and Co-BF Sounding Sequence — Block Ack-based CSI validity (DCN 11-26-2372r0, Ruijie Networks)"
title_zh: "IEEE 802.11 TGbn：Co-BF 传输序列与 Co-BF 探测序列之间的联系——基于 Block Ack 的 CSI 有效性判定（DCN 11-26-2372r0，锐捷网络）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2372&is_year=2026"
source_quality: full
topics: [802.11bn, Co-BF, MAPC, CSI, sounding, Block Ack]
topic_primary: mapc-cosr
topics_secondary: [wifi8-uhr]
novelty_score: 3
---

## Summary (EN)

DCN 11-26-2372r0 (Yongning Ke, Fachang Guo, Hui Che; Ruijie Networks; document date 2026-11-12, uploaded to Mentor 2026-11-16) is a TGbn presentation on how an AP taking part in Coordinated Beamforming (Co-BF) should decide whether the CSI it holds is still valid. Its problem statement says Co-BF has both APs design beams from the same CSI set (own-link CSI to their STAs and the cross-BSS CSI reported by the peer), and that the draft does not say when stored CSI stops describing the channel: validity is established once at sounding time, and between two sounding sequences there is "no measurement, no threshold and no defined owner for the decision".

The slides tie this to four open LB296 comments: CID 16292 (A. Hussein; expired CSI leads only to a "should"-phrased rejection with no basis for retry timing), CID 18300 (J. Zhang; neither the Retain OBSS CSI Flag nor NOTE 3 bounds when re-sounding happens), CID 15071 (R. Li; the "both CSI failed" code in 9.4.2.362.4.2.2 has no procedure in 37.15.2.1.4) and CIDs 15249/15766 (J. Choi / G. Wee; only two CSI failure cases are described). All four are shown as OPEN.

The proposal has two parts. Part 1 decides validity from the Co-BF transmission that just used the CSI: collect the Block Ack, derive a per-AP delivery ratio from its bitmap (received over transmitted MSDUs, with no new frame and no extra sounding), attribute the failure to own-link, cross-BSS or both, and re-sound. While the ratio stays high Co-BF continues; when it collapses the report is declared invalid and discarded. Part 2 makes the AP holding the stale report drive recovery: if the coordinating side failed, AP1 takes the initiating role after AP2's Ack Sequence completes, runs a Co-BF Sounding Invite/Response and a sequential or joint NDP sounding, then invites AP2 back; if the coordinated side failed, three timings are given (on Invite, on Trigger, after the cooperation).

## Summary (ZH)

DCN 11-26-2372r0（Yongning Ke、Fachang Guo、Hui Che；锐捷网络；文档日期 2026-11-12，2026-11-16 上传至 Mentor）是一份 TGbn 报告，讨论参与协调波束成形（Co-BF）的 AP 应如何判断其持有的 CSI 是否仍然有效。其问题陈述指出：Co-BF 中两个 AP 基于同一套 CSI 设计波束（自身链路到各 STA 的 CSI，以及对端上报的跨 BSS CSI），而草案未说明已存储的 CSI 何时不再描述信道：有效性仅在探测时确立一次，两次探测序列之间"没有测量、没有门限、也没有明确由谁来决定"。

幻灯片将此与四条未决的 LB296 意见联系起来：CID 16292（A. Hussein；CSI 过期只导致措辞为"should"的拒绝，没有重试时机的依据）、CID 18300（J. Zhang；Retain OBSS CSI Flag 与 NOTE 3 均未限定何时重新探测）、CID 15071（R. Li；9.4.2.362.4.2.2 中定义的"两侧 CSI 均失败"代码在 37.15.2.1.4 中没有对应流程）以及 CID 15249/15766（J. Choi / G. Wee；只描述了两种 CSI 失败情形）。四项均标为 OPEN。

方案分两部分。第一部分根据刚使用该 CSI 的 Co-BF 传输来判定有效性：收集 Block Ack，从其位图得到每个 AP 的送达比（收到的 MSDU 数与发送的 MSDU 数之比，不增加新帧，也不额外探测），将失败归因于自身链路、跨 BSS 链路或两者，然后重新探测。比值保持较高时 Co-BF 继续；比值骤降时该报告被判为无效并丢弃。第二部分由持有过期报告的 AP 驱动恢复：若协调方失败，则 AP1 在 AP2 的 Ack Sequence 完成后担任发起方，执行 Co-BF Sounding Invite/Response 以及顺序或联合 NDP 探测，再邀请 AP2 回到新的传输序列；若被协调方失败，则给出三种时机（在 Invite 时、在 Trigger 时、协作结束后）。

## Key technical points (EN)

- **Method steps:** observe (collect the Block Ack), measure (per-AP delivery ratio from the bitmap), attribute (own-link, cross-BSS or both), recover (re-sound on the failing side, then re-enter Co-BF).
- **Coordinated-side recovery timings:** on Invite (AP2 signals in its Co-BF Response that sounding is needed, then initiates it); on Trigger (AP2 sits out the triggered round and invites a sounding once AP1 has its Block Ack); after the cooperation (AP2 sounds alone, or takes the TXOP and retransmits what failed).
- **Claimed consequences (slide 6):** validity becomes measurable, attribution explicit, recovery a procedure, and the four comments close together with a single text change.
- **Straw poll proposed:** whether a Co-BF AP should determine CSI validity from the Block Ack feedback of the Co-BF transmission itself, and whether the AP whose CSI is found invalid should initiate the new Co-BF sounding sequence.
- **References:** IEEE 802.11bn Draft 2.1 and 11-26-1613-04-00bn (LB296 comments on D2.0).

## Key technical points (ZH)

- **方法步骤：** 观测（收集 Block Ack）、度量（由位图得到每 AP 送达比）、归因（自身链路、跨 BSS 或两者）、恢复（在失败侧重新探测，然后重新进入 Co-BF）。
- **被协调方失败时的恢复时机：** 在 Invite 时（AP2 在其 Co-BF Response 中指示需要探测，然后自行发起）；在 Trigger 时（AP2 不参加被触发的这一轮，待 AP1 收到 Block Ack 后邀请探测）；协作结束后（AP2 单独探测，或取得 TXOP 重传失败的数据）。
- **文档所称的结果（第 6 页）：** 有效性变得可测量、归因变得明确、恢复成为一套流程，且四条意见可通过一处文本修改一并解决。
- **拟议的 Straw Poll：** Co-BF AP 是否应根据 Co-BF 传输自身的 Block Ack 反馈判定所持 CSI 的有效性，以及 CSI 被判无效的 AP 是否应发起新的 Co-BF 探测序列。
- **参考文献：** IEEE 802.11bn Draft 2.1 与 11-26-1613-04-00bn（对 D2.0 的 LB296 意见）。

## Why it matters / what's new (EN)

This is a Co-BF text proposal aimed at specific open LB296 comments, in the same multi-AP coordination (MAPC) area as earlier TGbn digests in this KB (for example the Co-TDMA / Co-RTWT and MAPC digest of 2026-11-10). Per the document's own slides, the mechanism reuses Block Ack bitmaps already on the air rather than adding a new frame. The document is a presentation with a proposed straw poll; the KB has no record of the outcome.

## Why it matters / what's new (ZH)

这是一份针对具体未决 LB296 意见的 Co-BF 文本提案，与本知识库此前的 TGbn 摘要（例如 2026-11-10 的 Co-TDMA / Co-RTWT 与 MAPC 摘要）同属多 AP 协调（MAPC）领域。依据文档自身幻灯片，该机制复用空口已有的 Block Ack 位图，而不是增加新帧。该文档为带拟议 Straw Poll 的报告；本知识库没有其结果的记录。
