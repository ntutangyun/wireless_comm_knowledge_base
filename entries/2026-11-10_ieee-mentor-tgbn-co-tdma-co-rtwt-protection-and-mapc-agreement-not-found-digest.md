---
id: 2026-11-10_ieee-mentor-tgbn-co-tdma-co-rtwt-protection-and-mapc-agreement-not-found-digest
date_published: 2026-11-09
date_found: 2026-11-10
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn: Co-TDMA transmission under Co-RTWT protection and an Agreement Not Found result for MAPC update requests (DCN 11-26-2320r0 and 2323r0, Ruijie Networks)"
title_zh: "IEEE 802.11 TGbn：Co-RTWT 保护下的 Co-TDMA 发送，以及 MAPC 更新请求的“协议未找到”结果（DCN 11-26-2320r0 与 2323r0，锐捷网络）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=2320"
source_quality: full
topics: [802.11bn, TGbn, MAPC, Co-TDMA, Co-RTWT, R-TWT, agreement teardown]
topic_primary: mapc-cosr
topics_secondary: [rtwt-latency]
novelty_score: 2
---

## Summary (EN)

Ruijie Networks uploaded two TGbn contributions against IEEE P802.11bn D2.1 on 9 November 2026, both as straw-poll or proposed-text decks.

DCN 11-26-2320r0, "Co-TDMA Transmission under Co-RTWT Protection" (Mengying Lin, Ke Zhong, Fachang Guo; 6 slides). The problem statement is that the Co-RTWT TXOP and backoff rules in 37.15.2.4.4 apply to a Co-RTWT coordinated AP as TXOP holder, whereas such an AP may also act as a Co-TDMA coordinated AP during an allocated time inside a TXOP won by a Co-TDMA coordinating AP, and the draft does not say how Co-RTWT protection applies there; the AP may then start a frame exchange that cannot finish before an active coordinated RTWT SP it must protect begins. The proposed text requires the Co-TDMA coordinated AP to apply the protection requirement for an active coordinated RTWT SP and, before starting any PPDU in the allocated time, to check that the frame exchange can complete before the SP start, and not to initiate it otherwise.

DCN 11-26-2323r0, "MAPC Agreement Updates after a Missed Teardown Request" (Yuqing Zheng, Ke Zhong, Fachang Guo; 8 slides). Under the current procedure the AP sending a teardown request (MAPC Operation Type 2) tears the agreement down locally after an Ack or after exceeding the maximum retries, while the peer tears down on receipt. If the peer misses every attempt it may still consider the agreement established; a later update request (Operation Type 1) then draws existing response values (3 accept, 4 reject, 5 alternate) that do not tell it the agreement is absent. The proposal adds an Agreement Not Found value to the MAPC Operation Type field in the MAPC Request Control field, carried in the MAPC Scheme Request field for the corresponding update request; an AP that gets a valid update request for an agreement it cannot find returns it, and the requesting AP then tears down its local agreement. The deck ends with a straw poll on defining this result and requiring the teardown.

## Summary (ZH)

锐捷网络于 2026 年 11 月 9 日上传两份针对 IEEE P802.11bn D2.1 的 TGbn 贡献，均为含提案文本或表决草案的文稿。

DCN 11-26-2320r0《Co-TDMA Transmission under Co-RTWT Protection》（Mengying Lin、Ke Zhong、Fachang Guo；6 页）。问题陈述：37.15.2.4.4 中 Co-RTWT 的 TXOP 与退避规则适用于作为 TXOP 持有者的 Co-RTWT 协调 AP；但该 AP 也可能在 Co-TDMA 协调 AP 赢得的 TXOP 内，于分配时段中充当 Co-TDMA 被协调 AP，而草案未说明此时 Co-RTWT 保护如何适用；该 AP 可能因此发起一次无法在其须保护的活动协调 RTWT SP 开始前完成的帧交换。拟议文本要求 Co-TDMA 被协调 AP 适用活动协调 RTWT SP 的保护要求，并在分配时段内发送任何 PPDU 之前检查帧交换能否在 SP 开始前完成，否则不得发起。

DCN 11-26-2323r0《MAPC Agreement Updates after a Missed Teardown Request》（Yuqing Zheng、Ke Zhong、Fachang Guo；8 页）。按现行流程，发送拆除请求（MAPC Operation Type 2）的 AP 在收到 Ack 或超过最大重传次数后本地拆除协议，对端则在成功收到请求时拆除。若对端漏收所有尝试，仍可能认为协议存在；其后发出的更新请求（Operation Type 1）得到的现有响应值（3 接受、4 拒绝、5 备选）并不能告知协议已不存在。提案在 MAPC Request Control 字段的 MAPC Operation Type 字段中新增“Agreement Not Found”取值，并在对应更新请求的 MAPC Scheme Request 字段中携带；AP 收到有效更新请求而找不到对应协议时返回该结果，请求方 AP 随即拆除本地协议。文稿末尾以一次表决询问是否定义该结果并要求拆除。

## Key technical points (EN)

- DCN 2320r0: Co-RTWT protection (37.15.2.4.4) is extended to a Co-RTWT coordinated AP transmitting as a Co-TDMA coordinated AP during an allocated time.
- DCN 2320r0 rule: before any PPDU in the allocated time, check the frame exchange completes before the active coordinated RTWT SP start; if not, do not initiate it.
- DCN 2323r0 scenario: teardown request missed on all retries leaves AP B with a stale agreement while AP A has torn it down locally.
- DCN 2323r0 existing MAPC Operation Types: 1 update, 2 teardown; response values 3 accept, 4 reject, 5 alternate.
- DCN 2323r0 proposal: new Agreement Not Found result for update requests; the requesting AP tears down its local agreement on receiving it; ends with a straw poll.

## Key technical points (ZH)

- DCN 2320r0：将 Co-RTWT 保护（37.15.2.4.4）延伸到在分配时段内作为 Co-TDMA 被协调 AP 发送的 Co-RTWT 协调 AP。
- DCN 2320r0 规则：分配时段内发送任何 PPDU 前，检查帧交换能否在活动协调 RTWT SP 开始前完成；否则不得发起。
- DCN 2323r0 场景：拆除请求在全部重传中被漏收，导致 AP B 保留过期协议而 AP A 已本地拆除。
- DCN 2323r0 现有 MAPC Operation Type：1 为更新，2 为拆除；响应值 3 接受、4 拒绝、5 备选。
- DCN 2323r0 提案：为更新请求新增 Agreement Not Found 结果；请求方 AP 收到后拆除本地协议；文稿以表决结尾。

## Why it matters / what's new (EN)

Both documents are narrow proposals that fill gaps in D2.1: one closes an unspecified interaction between two existing MAPC modes (Co-TDMA and Co-RTWT), the other closes a state-consistency gap in MAPC agreement teardown/update. Both are individual contributions against D2.1 uploaded ahead of the November 2026 session; the documents do not state whether either was adopted. Related TGbn entries in this KB cover Co-TDMA/NPCA CRs (2026-11-04) and LB296 CR waves.

## Why it matters / what's new (ZH)

这两份文稿都是针对 D2.1 的细小补缺提案：一份补全两种现有 MAPC 模式（Co-TDMA 与 Co-RTWT）之间未规定的交互，另一份补全 MAPC 协议拆除/更新中的状态一致性缺口。两份均为针对 D2.1 的个人贡献，于 2026 年 11 月会议前上传；文稿未说明是否被采纳。本知识库中相关的 TGbn 条目涵盖 Co-TDMA/NPCA 意见处理（2026-11-04）及 LB296 CR 批次。

## Images

None.
