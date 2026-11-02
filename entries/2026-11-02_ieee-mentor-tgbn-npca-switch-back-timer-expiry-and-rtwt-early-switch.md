---
id: 2026-11-02_ieee-mentor-tgbn-npca-switch-back-timer-expiry-and-rtwt-early-switch
date_published: 2026-10-30
date_found: 2026-11-02
technology: wifi
type: ieee-document
title_en: "IEEE 802.11bn LB296 -- two Ruijie contributions on NPCA switch-back: finishing the frame exchange at NPCA_TIMER expiry (11-26-2136r0) and switching early to a Co-RTWT link (11-26-2135r0)"
title_zh: "IEEE 802.11bn LB296 -- 锐捷两份关于 NPCA 切回的提案：NPCA_TIMER 到期时完成帧交换（11-26-2136r0）与为 Co-RTWT 服务期提前切换链路（11-26-2135r0）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2136&is_year=2026"
source_quality: full
topics: [802.11bn, NPCA, NPCA_TIMER, R-TWT, EMLSR, LB296, TGbn]
topic_primary: mapc-cosr
topics_secondary: [rtwt-latency, mlo, wifi8-uhr]
novelty_score: 2
---

## Summary (EN)

Two TGbn slide decks from Longlong Hong (Ruijie Networks), with Ke Zhong and Fachang Guo, were uploaded on 2026-10-30. Both work on the switch-back rules for Non-Primary Channel Access (NPCA) in P802.11bn D2.0 subclause 37.18.5. As the decks summarise it, NPCA lets a UHR STA move to the NPCA primary channel (NPCH) to keep transmitting when the BSS primary channel is occupied by OBSS traffic, and D2.0 defines two switch-back cases: an early switch-back on a Trigger frame whose NPCA Primary Channel Indication field is 0, and a mandatory switch-back when NPCA_TIMER expires.

DCN 11-26-2136r0 (NPCA Switch-back: Frame Exchange Completion) addresses the case where NPCA_TIMER expires while a PPDU exchange is still in progress on the NPCH. It cites three LB296 comments on 37.18.5: CID 18822 (not specified whether to abandon the exchange mid-TXOP), CID 18823 (the peer that started the TXOP is not told the STA left, so frames to it are lost) and CID 17911 (no rule preventing TXOPs that run past the expiry point, and no exemption to finish the current exchange first). The proposal: the STA does not switch back immediately but completes the current PPDU; if the PPDU needs a response frame such as an ACK it completes that exchange and then switches back, which also lets the AP learn the exchange is finished; if no response is needed it switches after the PPDU; and if it is unclear whether more PPDUs will follow, it switches back when no new PPDU arrives within a timeout interval. The deck ends with a straw poll on exactly this behaviour.

DCN 11-26-2135r0 (NPCA Early Switch-back: Cross-Link RTWT SP) covers an EMLSR MLD that is doing NPCA on link A with NPCA_TIMER not yet expired while a Restricted TWT service period of which it is a member is about to start on link B. It cites LB296 CID 15566 (37.15.2.4.4), which asks what a TXOP-holding non-AP STA, and the other STA of the same non-AP MLD on an NSTR/EMLSR/EMLMR link, should do before a Co-RTWT SP starts. The proposal is to switch to the SP link a time T before the SP start, with T = max(NPCA switch-back delay, EMLSR transition delay), and to defer transmission if the remaining time is too short to finish a pending frame exchange; the deck notes the first delay could be replaced by that of another link-state mode such as DSO or DPS. A worked timeline (T_switch = T_start - T) and a straw poll are included.

## Summary (ZH)

锐捷网络 Longlong Hong（与 Ke Zhong、Fachang Guo 合作）于 2026-10-30 上传了两份 TGbn 幻灯片，均针对 P802.11bn D2.0 第 37.18.5 条中非主信道接入（NPCA）的切回规则。按文稿的概述，NPCA 允许 UHR STA 在 BSS 主信道被 OBSS 占用时切换到 NPCA 主信道（NPCH）继续发送；D2.0 定义了两种切回情形：收到 NPCA Primary Channel Indication 字段为 0 的 Trigger 帧时可提前切回，NPCA_TIMER 到期时必须切回。

DCN 11-26-2136r0（NPCA 切回：帧交换完成）处理 NPCA_TIMER 到期时 NPCH 上仍有 PPDU 交换的情形。文稿引用 LB296 针对 37.18.5 的三条意见：CID 18822（未规定 TXOP 中途到期是否放弃当前交换）、CID 18823（发起 TXOP 的对端不知道该 STA 已离开，发往它的帧丢失）、CID 17911（没有禁止 TXOP 超出到期点，也没有允许先完成当前交换再切回的豁免）。提案：STA 不立即切回，而是完成当前 PPDU；若该 PPDU 需要响应帧（如 ACK），则完成该响应交换后再切回，AP 也由此获知交换已结束；若无需响应帧，则在 PPDU 结束后切回；若不确定后续是否还有 PPDU，则在超时间隔内未收到新 PPDU 时切回。文稿以针对该行为的 straw poll 收尾。

DCN 11-26-2135r0（NPCA 提前切回：跨链路 RTWT SP）讨论 EMLSR MLD 在链路 A 上进行 NPCA 且 NPCA_TIMER 尚未到期，而其作为成员的 Restricted TWT 服务期即将在链路 B 上开始的情形。文稿引用 LB296 的 CID 15566（37.15.2.4.4），该意见询问在 Co-RTWT SP 开始前，作为 TXOP 持有者的非 AP STA，以及同一非 AP MLD 中处于 NSTR/EMLSR/EMLMR 链路上的另一 STA 应如何行为。提案：在 SP 开始前 T 时刻切换到 SP 所在链路，T = max(NPCA 切回时延, EMLSR 转换时延)；若剩余时间不足以完成待处理的帧交换，则推迟发送；文稿指出前一项时延也可替换为 DSO、DPS 等其他链路状态模式的对应时延。文稿含一个示例时间线（T_switch = T_start - T）和 straw poll。

## Key technical points (EN)

- **DCN 11-26-2136r0 · TGbn** -- NPCA Switch-back: Frame Exchange Completion. Longlong Hong (Ruijie Networks), uploaded 2026-10-30. [document](https://mentor.ieee.org/802.11/documents?is_dcn=2136&is_year=2026)
- Targets D2.0 37.18.5 and LB296 CIDs 18822, 18823, 17911: at NPCA_TIMER expiry mid-exchange, complete the current PPDU (plus the response frame if required), then switch back; if further PPDUs are uncertain, switch back after a no-new-PPDU timeout.
- **DCN 11-26-2135r0 · TGbn** -- NPCA Early Switch-back: Cross-Link RTWT SP. Longlong Hong (Ruijie Networks), uploaded 2026-10-30. [document](https://mentor.ieee.org/802.11/documents?is_dcn=2135&is_year=2026)
- Targets LB296 CID 15566 (37.15.2.4.4): an EMLSR MLD with an unexpired NPCA_TIMER switches to the Co-RTWT SP link T = max(NPCA switch-back delay, EMLSR transition delay) before the SP starts; defer transmission if the pending exchange cannot finish.
- Both decks end in a straw poll and cite 11-26/1613r4 (the LB296 comment set) and P802.11bn/D2.0.

## Key technical points (ZH)

- **DCN 11-26-2136r0 · TGbn** -- NPCA 切回：帧交换完成。Longlong Hong（锐捷网络），2026-10-30 上传。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2136&is_year=2026)
- 针对 D2.0 37.18.5 及 LB296 的 CID 18822、18823、17911：NPCA_TIMER 在交换中途到期时，先完成当前 PPDU（必要时含响应帧）再切回；若后续 PPDU 不确定，则在无新 PPDU 超时后切回。
- **DCN 11-26-2135r0 · TGbn** -- NPCA 提前切回：跨链路 RTWT SP。Longlong Hong（锐捷网络），2026-10-30 上传。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2135&is_year=2026)
- 针对 LB296 的 CID 15566（37.15.2.4.4）：NPCA_TIMER 未到期的 EMLSR MLD 在 Co-RTWT SP 开始前 T = max(NPCA 切回时延, EMLSR 转换时延) 切换到 SP 所在链路；若待处理交换无法完成则推迟发送。
- 两份文稿均以 straw poll 结尾，并引用 11-26/1613r4（LB296 意见集）与 P802.11bn/D2.0。

## Why it matters / what's new (EN)

These are comment-resolution style contributions: they fill gaps that LB296 commenters flagged in 37.18.5 and 37.15.2.4.4, where D2.0 states the switch-back triggers but, per the decks, not what a STA does with an exchange in flight or with a Co-RTWT SP pending on another link. They extend the NPCA and switch-back coverage in earlier digests (2026-10-12_ieee-mentor-tgbn-lb296-npca-mapc-digest, which covers the NPCA_TIMER negotiation, and 2026-10-22_ieee-mentor-tgbn-lb296-cobf-sounding-dps-mode-cid-digest). Both carry straw polls, so outcomes would appear in the session record rather than in these slides. Only the slides were read; no motion or adoption is implied.

## Why it matters / what's new (ZH)

这两份属于意见处理类文稿：填补 LB296 评论者在 37.18.5 与 37.15.2.4.4 中指出的空白——按文稿所述，D2.0 规定了切回触发条件，但未规定 STA 如何处理进行中的交换，或另一链路上 Co-RTWT SP 即将开始时的行为。它们延伸了此前摘要对 NPCA 与切回的覆盖（2026-10-12_ieee-mentor-tgbn-lb296-npca-mapc-digest 涉及 NPCA_TIMER 协商；2026-10-22_ieee-mentor-tgbn-lb296-cobf-sounding-dps-mode-cid-digest）。两份均带有 straw poll，结果将体现在会议记录中而非这些幻灯片。仅阅读了幻灯片；不代表已有动议或采纳。
