---
id: 2026-10-26_ieee-mentor-tgm-revmf-wur-txtime-signal-extension-phy-crc-cr-digest
date_published: 2026-10-23
date_found: 2026-10-26
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGm Mentor digest — 2026-10-26 (REVmf LB295 comment resolutions: WUR TXTIME with aSignalExtension, and PHY CRC field wording)"
title_zh: "IEEE 802.11 TGm Mentor 当日摘要 — 2026-10-26（REVmf LB295 意见处理：WUR TXTIME 加入 aSignalExtension，以及 PHY CRC 字段表述）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=000m"
source_quality: full
topics: [TGm, REVmf, LB295, WUR, TXTIME, aSignalExtension, CRC, HT-SIG, VHT-SIG-B]
topic_primary: energy-power-save
topics_secondary: [wifi8-uhr]
novelty_score: 2
---

## Summary (EN)

TGm (REVmf) received two comment-resolution documents from Youhan Kim (Qualcomm) on 23 October 2026, both against LB295 on P802.11REVmf D3.0 with text edits shown against D3.1. DCN 11-26-2066r1 (r0 uploaded the same day; r1 fixes the resolution text for CID 2276) covers CIDs 2276 and 2277 on the wake-up radio (WUR) PHY. DCN 11-26-2065r0 covers CID 2275 on the CRC calculation text of several PHY clauses. The REVmf October-November teleconference agenda (DCN 11-26-2019r2, Michael Montemurro, Huawei) was also revised the same day.

For CID 2276 (subclause 30.4.1), the commenter asks that aSignalExtension be part of the TXTIME calculation in Equations (30-13) and (30-17) and be subtracted when L_LENGTH is derived in Equation (30-14), noting that 11bp defined TXTIME with aSignalExtension. The document's discussion recounts why OFDM PPDUs in 2.4 GHz carry a 6 microsecond signal extension (SIFS stays 10 microseconds while OFDM PHYs have a 16 microsecond gap), and states that a WUR PPDU lacking it would make a WUR AP place its slot boundary 10 microseconds after its WUR transmission, whereas devices deferring on the L-SIG content (which look like an OFDM PPDU) place it 16 microseconds after, which the document says would give WUR APs an advantage in 2.4 GHz channel access. The resolution is REVISED: the signal extension, taking the value of aSignalExtension from Table 27-61 (HE PHY characteristics), is added to the WUR Basic PPDU TXTIME equation. For CID 2277 (subclause 30.4.2), the commenter asks that the subclause title become "WUR PHY" and Table 30-13 become "WUR PHY Characteristics" for consistency with the other PHY clauses; the document lists the matching titles in the 11a, HT, VHT, HE and EHT clauses and the resolution is ACCEPTED.

For CID 2275, the comment on VHT-SIG-B (subclause 21.3.10.3) says that "the 1s complement of Equation (21-59)" does not align with crc(D) being defined with {c0,...,c7} while the CRC bits are {c0,...,c7}. The document discusses the problem through the HT-SIG CRC (subclause 19.3.9.4.4), from which later OFDM PHY clauses copied their text, and observes that c7 is not the value of the first (LSB) bit of the field; B7, the 1s complement of c7, is. It notes that 11bp resolved the same issue differently, and chooses to write "the bits of the CRC field are denoted by c7, ..., c0", so that both x_i and c_i remain available to other text. The document says its review also found an incorrect input bit order in the HT-SIG CRC description (m0 enters first, not m33), an error in the crc(D) equation for S1G SIG-A, and inaccurate figures in the CMMG; the stated goal is to fix errors with minimal changes rather than to unify the language of the CRC sections. The resolution is REVISED, with proposed text for the HT-SIG, VHT-SIG-B, S1G SIG-A and header-CRC (clause 20.3.7) text.

## Summary (ZH)

TGm（REVmf）在 2026 年 10 月 23 日收到 Youhan Kim（高通）的两份意见处理文档，均针对 P802.11REVmf D3.0 的 LB295，文本修改相对 D3.1 给出。DCN 11-26-2066r1（r0 同日上传；r1 修正 CID 2276 的处理文本）涉及唤醒无线电（WUR）PHY 的 CID 2276 与 2277。DCN 11-26-2065r0 涉及多个 PHY 条款中 CRC 计算文本的 CID 2275。REVmf 10-11 月电话会议议程（DCN 11-26-2019r2，Michael Montemurro，华为）同日也有更新。

对于 CID 2276（子条款 30.4.1），评论人要求把 aSignalExtension 纳入公式（30-13）和（30-17）的 TXTIME 计算，并在公式（30-14）推导 L_LENGTH 时将其减去，并指出 11bp 已在 TXTIME 中定义了 aSignalExtension。文档的讨论回顾了 2.4 GHz OFDM PPDU 带有 6 微秒信号扩展的原因（SIFS 保持 10 微秒，而 OFDM PHY 的间隔为 16 微秒），并称若 WUR PPDU 不含该扩展，WUR AP 会在其 WUR 发送结束后 10 微秒处放置时隙边界，而依据 L-SIG 内容进行退避的设备（它们将其视为 OFDM PPDU）则在 16 微秒后放置，文档认为这会使 WUR AP 在 2.4 GHz 信道接入中占优。处理结果为 REVISED：在 WUR Basic PPDU 的 TXTIME 公式中加入信号扩展，其取值为表 27-61（HE PHY 特性）中的 aSignalExtension。对于 CID 2277（子条款 30.4.2），评论人要求为与其他 PHY 条款一致，把子条款标题改为“WUR PHY”、表 30-13 改为“WUR PHY Characteristics”；文档列出了 11a、HT、VHT、HE 和 EHT 条款中对应的标题，处理结果为 ACCEPTED。

对于 CID 2275，针对 VHT-SIG-B（子条款 21.3.10.3）的意见指出，“公式（21-59）的 1 的补码”与 crc(D) 以 {c0,...,c7} 定义而 CRC 比特也是 {c0,...,c7} 不一致。文档通过 HT-SIG CRC（子条款 19.3.9.4.4）来讨论该问题，因为后续 OFDM PHY 条款的文本由此复制而来，并指出 c7 并不是字段首个（LSB）比特的值，真正的首比特是 c7 的 1 的补码 B7。文档提到 11bp 以不同方式解决了同一问题，而本文选择写成“CRC 字段的比特记为 c7, ..., c0”，使其他文本仍可引用 x_i 和 c_i。文档称审阅中还发现 HT-SIG CRC 描述中的输入比特顺序有误（m0 先进入，而非 m33）、S1G SIG-A 的 crc(D) 公式有误，以及 CMMG 中的图不准确；所述目标是以最小改动修正错误，而不是统一各 CRC 条款的语言。处理结果为 REVISED，并给出了 HT-SIG、VHT-SIG-B、S1G SIG-A 以及头部 CRC（条款 20.3.7）文本的建议修改。

## Key technical points (EN)

- **DCN 11-26-2066r1 · TGm** — WUR PHY Comments (LB295 CIDs 2276, 2277). Youhan Kim (Qualcomm). CID 2276: aSignalExtension added to the WUR Basic PPDU TXTIME in 30.4.1, REVISED; CID 2277: rename 30.4.2 to "WUR PHY" and Table 30-13 to "WUR PHY Characteristics", ACCEPTED. [document](https://mentor.ieee.org/802.11/documents?is_dcn=2066&is_year=2026)
- **DCN 11-26-2065r0 · TGm** — PHY CRC (LB295 CID 2275). Youhan Kim (Qualcomm). CRC field written as c7...c0 with transmission c7 first, example bit vectors given for HT-SIG and VHT-SIG-B, input bit order corrected, S1G SIG-A equation fixed; REVISED. [document](https://mentor.ieee.org/802.11/documents?is_dcn=2065&is_year=2026)
- Also uploaded 23 Oct, not detailed: REVmf October-November teleconference agenda (11-26-2019r2, Michael Montemurro, Huawei).

## Key technical points (ZH)

- **DCN 11-26-2066r1 · TGm** —— WUR PHY 意见（LB295 CID 2276、2277）。Youhan Kim（高通）。CID 2276：在 30.4.1 的 WUR Basic PPDU TXTIME 中加入 aSignalExtension，REVISED；CID 2277：把 30.4.2 改名为“WUR PHY”、表 30-13 改名为“WUR PHY Characteristics”，ACCEPTED。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2066&is_year=2026)
- **DCN 11-26-2065r0 · TGm** —— PHY CRC（LB295 CID 2275）。Youhan Kim（高通）。CRC 字段写为 c7...c0 且 c7 先发送，给出 HT-SIG 与 VHT-SIG-B 的示例比特向量，修正输入比特顺序，修正 S1G SIG-A 公式；REVISED。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2065&is_year=2026)
- 同期（10 月 23 日）上传但未详述：REVmf 10-11 月电话会议议程（11-26-2019r2，Michael Montemurro，华为）。

## Why it matters / what's new (EN)

These are maintenance-draft fixes to REVmf rather than new mechanisms. The WUR resolution is the one with a stated rationale in its discussion section (channel-access timing in 2.4 GHz), and it relates to the 11bp TXTIME definition the commenter cites. The KB's other TGm digests of this period cover security-related REVmf changesets, for example [2026-10-23_ieee-mentor-tgm-decoyauth-changeset-r1-sae-password-set-digest](2026-10-23_ieee-mentor-tgm-decoyauth-changeset-r1-sae-password-set-digest.md).

## Why it matters / what's new (ZH)

这些是对 REVmf 维护草案的修正，而非新机制。WUR 的处理结果在其讨论部分给出了理由（2.4 GHz 的信道接入时序），并与评论人引用的 11bp TXTIME 定义相关。本知识库同期的其他 TGm 摘要涉及与安全相关的 REVmf 变更集，例如 [2026-10-23_ieee-mentor-tgm-decoyauth-changeset-r1-sae-password-set-digest](2026-10-23_ieee-mentor-tgm-decoyauth-changeset-r1-sae-password-set-digest.md)。
