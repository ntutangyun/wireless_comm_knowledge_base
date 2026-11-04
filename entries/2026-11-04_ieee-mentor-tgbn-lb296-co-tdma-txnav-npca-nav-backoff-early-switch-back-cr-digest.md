---
id: 2026-11-04_ieee-mentor-tgbn-lb296-co-tdma-txnav-npca-nav-backoff-early-switch-back-cr-digest
date_published: 2026-11-03
date_found: 2026-11-04
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest — 2026-11-04 (LB296 CRs: Co-TDMA TXNAV and bandwidth, NPCA per-channel NAV and backoff, STAs staying on the BSS primary channel, and extra NPCA early switch-back triggers; DCNs 1999r1, 2000r1, 2001r1, 2184r0)"
title_zh: "IEEE 802.11 TGbn Mentor 当日摘要 — 2026-11-04（LB296 评议处理：Co-TDMA 的 TXNAV 与带宽、NPCA 分信道 NAV 与退避、留在 BSS 主信道的 STA、NPCA 提前切回新增触发条件；DCN 1999r1、2000r1、2001r1、2184r0）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=1999"
source_quality: full
topics: [802.11bn, TGbn, LB296, Co-TDMA, NPCA, MAPC, TXNAV, NAV, MediumSyncDelay]
topic_primary: mapc-cosr
topics_secondary: [wifi8-uhr]
novelty_score: 2
---

## Summary (EN)

TGbn has four LB296 comment-resolution documents listed on 3 November 2026: r1 revisions of DCNs 1999, 2000 and 2001 (first uploaded 28 October) and a new DCN 2184r0, all on Co-TDMA and NPCA. Three are by Juseong Moon et al. (KNUT) and one by Yue Zhao (Huawei). The three KNUT documents argue from baseline channel-access rules (10.23.2.x, 26.2.x) that parts of the D2.0 Co-TDMA and NPCA text cannot work as written.

DCN 11-26-1999r1 ("LB296 CR for Co-TDMA NAV and bandwidth", 10 CIDs: 13879-13883, 13891-13895) clarifies TXNAV, recovery and bandwidth rules in 37.15.2.3 and addresses interference during an allocation while keeping the short Co-TDMA Duration/ID values. Its discussion states that D2.0 gives the Co-TDMA ICF and the MU-RTS TXS Trigger only enough Duration/ID for SIFS and the solicited response, so under 10.23.2.2 and 10.23.2.8 the coordinating AP's TXNAV is zero after the ICR (and the coordinated AP's after its CTS), leaving no remaining TXNAV for further exchanges or PIFS recovery; it also covers how an earlier narrow PPDU or RTS/CTS exchange can cap the bandwidth of the later MU-RTS TXS Trigger PPDU, and uplink or immediate-response transmissions by STAs that hear the coordinating AP but not the coordinated AP. The proposed text has the coordinating AP keep its internal TXNAV timer to the estimated end of the sequence irrespective of the short Duration/ID values; lets it disregard the 10.23.2.8 bandwidth limits for the PPDU carrying the allocation MU-RTS TXS Trigger (with a PIFS idle check on newly occupied 20 MHz channels); lets the coordinated AP use PIFS recovery or backoff within the allocation after a failed non-TB PPDU; and bars associated non-AP STAs from initiating transmissions to the coordinating AP until the Allocation Duration ends, except solicited responses.

DCN 11-26-2001r1 ("LB296 CR for NPCA NAV and backoff", CIDs 13885, 13886, 13897, 13898) addresses what an NPCA STA's EDCAF does when its backoff counter reaches zero but it does not transmit (for example because the recipient's NPCA switching delay has not elapsed): it invokes a new backoff for that AC, leaving CW[AC] and QSRC[AC] unchanged. For NAV, the proposals keep a basic NAV for the NPCA primary channel separately from the one for the BSS primary channel, each not used by carrier sensing while the STA is on the other channel; on switching, the BSS-primary-channel NAV is updated with the largest of NPCA_PPDU_REM_DUR, NPCA_PHY_TXOP_REM_DUR and NPCA_CFRAME_TXOP_REM_DUR when that is larger. DCN 11-26-2000r1 ("LB296 NPCA CR for STAs remaining on the BSS primary channel", CIDs 13887, 13899) addresses a STA that stays on the BSS primary channel while its AP is on the NPCA primary channel: an inter-BSS CF-End resets its basic NAV, it transmits to an AP that cannot receive, and the baseline retransmit procedures then increment retry counts and may discard frames. The proposed resolution has such a STA start a MediumSyncDelay timer at the end of the CF-End and follow the medium access recovery procedure (35.3.16.8), with the default of one TXOP initiation attempt while the timer runs; no new signaling or AP change is needed according to the document.

DCN 11-26-2184r0 (Yue Zhao, Huawei; 4 CIDs) has two groups. For the MAPC scheme profile, CID 19391 is a missing-article fix ("include an IFCS") in the sentence defining the Response IFCS Needed field of the Co-SR profile (values 0 not needed, 1 suggested, 2 required, 3 reserved). For NPCA early switch-back (CIDs 15161, 18815, 20047), the discussion explains that a non-AP STA can end up on the NPCA primary channel while its AP is still on the BSS primary channel (hidden node), and extends the 37.18.5 rule beyond a Trigger frame with NPCA Primary Channel Indication equal to 0: the STA may also switch back on receiving an RTS, a beacon, a Probe Response, a FILS Discovery frame, or a PPDU whose FORMAT is other than NON_HT, UHR_TB or UHR_MU from its associated AP.

## Summary (ZH)

TGbn 有四份关于 Co-TDMA 与 NPCA 的 LB296 评议处理文档，列出日期为 2026 年 11 月 3 日：DCN 1999、2000 与 2001 的 r1 修订版（首次上传于 10 月 28 日），以及新的 DCN 2184r0。其中三份由 Juseong Moon 等（KNUT）提交，一份由 Yue Zhao（华为）提交。三份 KNUT 文档以基线信道接入规则（10.23.2.x、26.2.x）为依据，论证 D2.0 中 Co-TDMA 与 NPCA 文本的部分内容按现有文字无法运行。

DCN 11-26-1999r1（《LB296 CR for Co-TDMA NAV and bandwidth》，10 个 CID：13879-13883、13891-13895）澄清第 37.15.2.3 条中的 TXNAV、恢复与带宽规则，并在保持较短 Co-TDMA Duration/ID 取值的前提下处理分配期间的干扰。其讨论指出，D2.0 给 Co-TDMA ICF 与 MU-RTS TXS Trigger 的 Duration/ID 仅够覆盖 SIFS 与被请求的响应，因此按 10.23.2.2 与 10.23.2.8，协调 AP 在 ICR 之后（被协调 AP 在其 CTS 之后）TXNAV 为零，没有剩余 TXNAV 用于后续交换或 PIFS 恢复；文档还讨论了先前的窄带 PPDU 或 RTS/CTS 交换如何限制后续 MU-RTS TXS Trigger PPDU 的带宽，以及能听到协调 AP 却听不到被协调 AP 的 STA 的上行或即时响应所造成的干扰。建议文字让协调 AP 不论较短的 Duration/ID 取值如何，都把其内部 TXNAV 定时器保持到序列的预计结束；允许其在承载分配用 MU-RTS TXS Trigger 的 PPDU 上不受 10.23.2.8 的带宽限制（对新占用的 20 MHz 信道做 PIFS 空闲检查）；允许被协调 AP 在非 TB PPDU 失败后于分配时间内进行 PIFS 恢复或退避；并禁止关联的非 AP STA 在 Allocation Duration 结束前向协调 AP 发起传输（被请求的响应除外）。

DCN 11-26-2001r1（《LB296 CR for NPCA NAV and backoff》，CID 13885、13886、13897、13898）处理 NPCA STA 的 EDCAF 在退避计数到零却未发送时（例如接收方的 NPCA 切换延迟尚未结束）的行为：为该 AC 重新启动退避，CW[AC] 与 QSRC[AC] 保持不变。关于 NAV，提案为 NPCA 主信道与 BSS 主信道分别维护基本 NAV，STA 处于另一信道时该 NAV 不参与载波侦听；切换时，若 NPCA_PPDU_REM_DUR、NPCA_PHY_TXOP_REM_DUR、NPCA_CFRAME_TXOP_REM_DUR 三者的最大值更大，则以其更新 BSS 主信道的 NAV。DCN 11-26-2000r1（《LB296 NPCA CR for STAs remaining on the BSS primary channel》，CID 13887、13899）处理留在 BSS 主信道、而其 AP 在 NPCA 主信道的 STA：跨 BSS 的 CF-End 复位其基本 NAV，它向收不到的 AP 发送，基线重传流程随之增加重试计数并可能丢帧。建议的处理是该 STA 在 CF-End 结束时启动 MediumSyncDelay 定时器并遵循介质接入恢复流程（35.3.16.8），定时器运行期间默认最多一次 TXOP 发起；文档称无需新增信令或修改 AP。

DCN 11-26-2184r0（Yue Zhao，华为；4 个 CID）分两组。MAPC 方案配置部分，CID 19391 是对 Co-SR 配置中 Response IFCS Needed 字段定义句的缺冠词修正（"include an IFCS"；取值 0 不需要、1 建议、2 必须、3 保留）。NPCA 提前切回部分（CID 15161、18815、20047），讨论指出由于隐藏节点，非 AP STA 可能到了 NPCA 主信道而其 AP 仍在 BSS 主信道，并把第 37.18.5 条的规则从仅限"NPCA Primary Channel Indication 为 0 的 Trigger 帧"扩展为：收到来自所属 AP 的 RTS、Beacon、Probe Response、FILS Discovery 帧，或 FORMAT 不是 NON_HT、UHR_TB、UHR_MU 的 PPDU 时，也可提前切回。

## Key technical points (EN)

- **DCN 11-26-1999r1 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=1999&is_year=2026) LB296 CR for Co-TDMA NAV and bandwidth (CIDs 13879-13883, 13891-13895). Juseong Moon et al. (KNUT). Clause 37.15.2.3.
- **DCN 11-26-2001r1 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2001&is_year=2026) LB296 CR for NPCA NAV and backoff (CIDs 13885, 13886, 13897, 13898). Juseong Moon et al. (KNUT). Clause 37.18.4.
- **DCN 11-26-2000r1 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2000&is_year=2026) LB296 NPCA CR for STAs remaining on the BSS primary channel (CIDs 13887, 13899). Juseong Moon et al. (KNUT). Clause 37.18.1, with MediumSyncDelay reuse (35.3.16.8).
- **DCN 11-26-2184r0 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2184&is_year=2026) CR for MAPC scheme profile (Clause 9) and NPCA early switch-back (Clause 37) (CIDs 19391, 15161, 18815, 20047). Yue Zhao (Huawei). Clauses 9.4.2.362.4.2.3 and 37.18.5.
- Co-TDMA: short Duration/ID in ICF and MU-RTS TXS Trigger leaves zero TXNAV after the response; proposed: coordinating AP's internal TXNAV kept to the sequence end, independent of the short Duration/ID values; bandwidth of the allocation Trigger can be capped by an earlier narrow exchange.
- NPCA: separate basic NAV per channel; EDCAF re-invokes backoff when backoff reaches zero without transmitting; MediumSyncDelay timer after an inter-BSS CF-End for STAs left on the BSS primary channel.
- NPCA early switch-back extended to RTS, beacon, Probe Response, FILS Discovery and non-NON_HT/UHR_TB/UHR_MU PPDUs from the associated AP.

## Key technical points (ZH)

- **DCN 11-26-1999r1 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1999&is_year=2026) LB296 Co-TDMA NAV 与带宽评议处理（CID 13879-13883、13891-13895）。Juseong Moon 等（KNUT）。第 37.15.2.3 条。
- **DCN 11-26-2001r1 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2001&is_year=2026) LB296 NPCA NAV 与退避评议处理（CID 13885、13886、13897、13898）。Juseong Moon 等（KNUT）。第 37.18.4 条。
- **DCN 11-26-2000r1 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2000&is_year=2026) LB296 留在 BSS 主信道的 STA 的 NPCA 评议处理（CID 13887、13899）。Juseong Moon 等（KNUT）。第 37.18.1 条，复用 MediumSyncDelay（35.3.16.8）。
- **DCN 11-26-2184r0 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2184&is_year=2026) MAPC 方案配置（第 9 条）与 NPCA 提前切回（第 37 条）评议处理（CID 19391、15161、18815、20047）。Yue Zhao（华为）。第 9.4.2.362.4.2.3 与 37.18.5 条。
- Co-TDMA：ICF 与 MU-RTS TXS Trigger 中较短的 Duration/ID 使响应之后 TXNAV 为零；提案：协调 AP 的内部 TXNAV 保持到序列结束，不受较短 Duration/ID 取值影响；分配 Trigger 的带宽可能被先前的窄带交换限制。
- NPCA：每个信道各自维护基本 NAV；退避计数到零但未发送时 EDCAF 重新退避；对留在 BSS 主信道的 STA，在跨 BSS CF-End 后启动 MediumSyncDelay 定时器。
- NPCA 提前切回扩展到来自所属 AP 的 RTS、Beacon、Probe Response、FILS Discovery 及非 NON_HT/UHR_TB/UHR_MU 格式的 PPDU。

## Why it matters / what's new (EN)

The four documents are comment resolutions against D2.0 text; three of them argue from the baseline rules (10.23.2.x, 26.2.x) that an element of the Co-TDMA or NPCA procedure cannot work as written; DCN 2184 adds an editorial fix and new early switch-back triggers. The proposals are text changes, not simulations. They sit alongside earlier TGbn NPCA and MAPC digests such as [2026-11-02_ieee-mentor-tgbn-npca-switch-back-timer-expiry-and-rtwt-early-switch](2026-11-02_ieee-mentor-tgbn-npca-switch-back-timer-expiry-and-rtwt-early-switch.md) and [2026-10-12_ieee-mentor-tgbn-lb296-npca-mapc-digest](2026-10-12_ieee-mentor-tgbn-lb296-npca-mapc-digest.md). Resolutions are proposals until adopted.

## Why it matters / what's new (ZH)

这四份文档都是针对 D2.0 文本的评议处理；其中三份以基线规则（10.23.2.x、26.2.x）为依据，论证 Co-TDMA 或 NPCA 流程的某一环节按现有文字无法运行；DCN 2184 则提供一处编辑性修正并新增提前切回触发条件。提案是文本修改，而非仿真。它们与此前的 TGbn NPCA 与 MAPC 摘要并列，如 [2026-11-02_ieee-mentor-tgbn-npca-switch-back-timer-expiry-and-rtwt-early-switch](2026-11-02_ieee-mentor-tgbn-npca-switch-back-timer-expiry-and-rtwt-early-switch.md) 和 [2026-10-12_ieee-mentor-tgbn-lb296-npca-mapc-digest](2026-10-12_ieee-mentor-tgbn-lb296-npca-mapc-digest.md)。处理意见在被采纳之前仅为提案。
