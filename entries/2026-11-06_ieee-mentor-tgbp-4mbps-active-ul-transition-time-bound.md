---
id: 2026-11-06_ieee-mentor-tgbp-4mbps-active-ul-transition-time-bound
date_published: 2026-11-06
date_found: 2026-11-06
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbp: Transition time bound for the 4 Mbps active UL transmission — 25 ns proposed, ON/OFF ratio bounds extended (DCN 11-26-2273r0/r1, Huawei)"
title_zh: "IEEE 802.11 TGbp：4 Mbps 主动上行发送的转换时间上限——提议 25 ns，并将 ON/OFF 时长比范围扩展到 4 Mbps（DCN 11-26-2273r0/r1，华为）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=2273"
source_quality: full
topics: [802.11bp, TGbp, AMP, ambient power, Manchester OOK, active UL, 4 Mbps, transition time]
topic_primary: amp-iot
topics_secondary: [energy-power-save]
novelty_score: 2
---

## Summary (EN)

DCN 11-26-2273, "Transition Time Bound for the 4 Mbps Active UL Transmission", is an 8-slide deck by Jiajia Huang (Huawei). Revision 0 was uploaded on 6 November 2026 at 01:05 ET and revision 1 eight minutes later; the title slide carries the meeting date 2026-11-11. It concerns the Manchester-OOK waveform sent by an active non-AP AMP STA in the 2.4 GHz band.

The deck recalls three adopted waveform constraints from the TGbp Specification Framework Document and motion dock: PM-72, an On/Off power ratio of at least 15 dB per input bit (Motion 171, all rates); PM-73, an ON-to-OFF and OFF-to-ON transition time of at most 50 ns (Motions 172 and 192, covering 250 kbps and 1 Mbps); and PM-74, an ON/OFF duration ratio T_ON/T_OFF between 0.8 and 1.2 (Motions 173 and 193, covering 250 kbps and 1 Mbps). It notes that the optional 4 Mbps rate (0.125 microsecond chip, Manchester coding with no BCC) was adopted in the same session as PM-93 (Motion 206), and that "Whether the two constraints should also cover 4 Mbps was not discussed", so only PM-72 applies to 4 Mbps today.

The proposal is a table of chip duration against transition-time bound: 250 kbps (BCC rate 1/2 then Manchester, 4 chips per bit, 1 microsecond chip) keeps 50 ns; 1 Mbps (same coding, 0.25 microsecond chip) keeps 50 ns; 4 Mbps (Manchester only, 2 chips per bit, 0.125 microsecond chip) would get 25 ns. The stated reasoning is that with the same 50 ns bound, the shorter the chip, the larger the share taken by a transition, and the 4 Mbps chip is half the 1 Mbps chip; also that a power-ratio-only specification fixes two amplitude levels but leaves the time-domain shape open. Two straw polls close the deck: one defines transition time as the RF envelope moving between 0.9A and 0.1A (A being the steady-state ON amplitude) and asks for a 25 ns upper bound on both ON-to-OFF and OFF-to-ON transitions at 4 Mbps; the other asks for the same 0.8 to 1.2 ON/OFF duration-ratio bounds at 4 Mbps, with ON defined as envelope above 0.9A and OFF as below 0.1A.

## Summary (ZH)

DCN 11-26-2273《Transition Time Bound for the 4 Mbps Active UL Transmission》是 Jiajia Huang（华为）的 8 页演示文稿。r0 于 2026 年 11 月 6 日美东 01:05 上传，r1 在 8 分钟后上传；标题页的会议日期为 2026-11-11。文稿涉及 2.4 GHz 频段中主动式非 AP AMP STA 发送的 Manchester-OOK 波形。

文稿回顾了 TGbp 规范框架文档与动议清单中已采纳的三项波形约束：PM-72，每输入比特的 On/Off 功率比不低于 15 dB（动议 171，适用于所有速率）；PM-73，ON 到 OFF 及 OFF 到 ON 的转换时间不超过 50 ns（动议 172、192，覆盖 250 kbps 与 1 Mbps）；PM-74，ON/OFF 时长比 T_ON/T_OFF 介于 0.8 与 1.2 之间（动议 173、193，覆盖 250 kbps 与 1 Mbps）。文稿指出，可选的 4 Mbps 速率（码片 0.125 微秒，仅 Manchester 编码、无 BCC）在同一次会议中以 PM-93（动议 206）被采纳，而"这两项约束是否也应覆盖 4 Mbps 并未讨论"，因此目前 4 Mbps 只受 PM-72 约束。

提案以码片时长对应转换时间上限的表格给出：250 kbps（BCC 1/2 后 Manchester，每比特 4 个码片，码片 1 微秒）保持 50 ns；1 Mbps（编码相同，码片 0.25 微秒）保持 50 ns；4 Mbps（仅 Manchester，每比特 2 个码片，码片 0.125 微秒）拟为 25 ns。文稿给出的理由是：若沿用同样的 50 ns，码片越短，转换占比越大，而 4 Mbps 的码片只有 1 Mbps 的一半；此外，仅规定功率比只固定了两个幅度电平，时域形状仍然开放。文稿以两项意向投票收尾：一项把转换时间定义为射频包络在 0.9A 与 0.1A 之间变化所需时间（A 为 ON 符号稳态包络幅度），要求 4 Mbps 下 ON 到 OFF 与 OFF 到 ON 转换均不超过 25 ns；另一项要求 4 Mbps 采用与其他速率相同的 0.8 至 1.2 的 ON/OFF 时长比范围，其中 ON 时长为包络高于 0.9A 的时间，OFF 时长为低于 0.1A 的时间。

## Key technical points (EN)

- **DCN 11-26-2273r0/r1 · TGbp** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2273&is_year=2026) Transition Time Bound for the 4 Mbps Active UL Transmission. Jiajia Huang (Huawei), uploaded 2026-11-06.
- Adopted constraints recalled: PM-72 On/Off power ratio at least 15 dB (all rates); PM-73 transition time at most 50 ns (250 kbps, 1 Mbps); PM-74 ON/OFF duration ratio 0.8 to 1.2 (250 kbps, 1 Mbps).
- 4 Mbps context: adopted as PM-93 (Motion 206); 0.125 microsecond chip; Manchester only; 2 chips per information bit.
- Proposed: ON-to-OFF and OFF-to-ON transition time at most 25 ns at 4 Mbps; ON/OFF duration ratio 0.8 to 1.2 as at the other rates; the 50 ns bound for 250 kbps and 1 Mbps unchanged.
- Definitions used: transition measured between 0.9A and 0.1A of the steady-state ON envelope amplitude A; ON duration = envelope above 0.9A; OFF duration = envelope below 0.1A.
- Two straw polls, one per constraint.

## Key technical points (ZH)

- **DCN 11-26-2273r0/r1 · TGbp** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2273&is_year=2026) 4 Mbps 主动上行发送的转换时间上限。Jiajia Huang（华为），2026-11-06 上传。
- 回顾的已采纳约束：PM-72 On/Off 功率比不低于 15 dB（所有速率）；PM-73 转换时间不超过 50 ns（250 kbps、1 Mbps）；PM-74 ON/OFF 时长比 0.8 至 1.2（250 kbps、1 Mbps）。
- 4 Mbps 背景：以 PM-93（动议 206）采纳；码片 0.125 微秒；仅 Manchester 编码；每信息比特 2 个码片。
- 提议：4 Mbps 下 ON 到 OFF 与 OFF 到 ON 转换时间均不超过 25 ns；ON/OFF 时长比与其他速率相同，为 0.8 至 1.2；250 kbps 与 1 Mbps 的 50 ns 上限不变。
- 采用的定义：转换时间按稳态 ON 包络幅度 A 的 0.9A 与 0.1A 之间计；ON 时长 = 包络高于 0.9A；OFF 时长 = 包络低于 0.1A。
- 两项意向投票，分别对应两条约束。

## Why it matters / what's new (EN)

This is a narrow gap-closing proposal: the deck's own observation is that the two time-domain constraints were adopted for 250 kbps and 1 Mbps and were not discussed for the 4 Mbps rate adopted in the same session. It adds a numerical bound that scales with the 4 Mbps chip duration. It is the first entry in this KB on TGbp active-UL waveform timing constraints; earlier TGbp coverage touched active transmitters only for UL frequency shift (2026-08-03_ieee-mentor-tgbp-digest). As a deck with straw polls, it is a proposal for group discussion, not an adopted motion.

## Why it matters / what's new (ZH)

这是一项范围很窄、补缺口性质的提案：文稿自身的观察是，两项时域约束针对 250 kbps 与 1 Mbps 采纳，而同一次会议中采纳的 4 Mbps 速率并未讨论过这些约束。它新增了一个随 4 Mbps 码片时长缩放的数值上限。这是本 KB 中首条关于 TGbp 主动上行波形时序约束的条目；此前的 TGbp 覆盖仅在上行频率偏移方面涉及主动发射机（2026-08-03_ieee-mentor-tgbp-digest）。作为带意向投票的演示文稿，它是供小组讨论的提案，而非已通过的动议。
