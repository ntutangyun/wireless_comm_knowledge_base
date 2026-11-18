---
id: 2026-11-18_ieee-mentor-tgbn-cid-19601-puo-ap-status-feedback-twt-constraint-parameters-dcn-2378
date_published: 2026-11-17
date_found: 2026-11-18
technology: wifi
type: ieee-document
title_en: "IEEE 802.11bn CID 19601 resolution: PUO Status feedback from the AP via the TWT Constraint Parameters element, with a 'PUO Info' field and alignment extension (DCN 11-26-2378r0, Cisco)"
title_zh: "IEEE 802.11bn CID 19601 评论解决：AP 通过 TWT Constraint Parameters 元素反馈 PUO 状态，新增“PUO Info”字段与对齐扩展（DCN 11-26-2378r0，Cisco）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_dcn=2378"
source_quality: full
topics: [TGbn, 802.11bn, PUO, P2P TWT, TWT Constraint Parameters, comment resolution, D2.1, power save]
topic_primary: energy-power-save
topics_secondary: [rtwt-latency, wifi8-uhr]
novelty_score: 3
---

## Summary (EN)
DCN 11-26-2378r0 (Brian Hart and Binita Gupta, Cisco Systems; dated 2026-11-17) is a comment-resolution document against 802.11bn Draft 2.1 for CID 19601. The comment, as quoted in the document, says the force-accept requirement placed on the AP for a client's periodic unavailability operation (PUO) session request is "a deficient protocol design": APs cannot be scaled to honour every possible PUO request (up to 8 per client, times hundreds of clients, with arbitrary schedules such as 0.25-0.5-1-2-5 ms availability gaps), which the comment says makes PUO and P2P TWT impossible for APs to turn on. The commenter asks, assuming force-accept is kept, for a way for the AP to tell the client when the client can and cannot rely on the AP. The proposed resolution is marked "Revised", with changes aligned to the commenter's proposal.

The document's discussion section builds the case in steps. A PUO client announces a recurring unavoidable commitment (P2P Wi-Fi, Bluetooth, cellular or other) so the AP stops transmitting to it, and does not react (retries, CW increase, MCS reduction, MSDU discard) to any frame it still sends in the window; the client in turn can skip the QoS Null (PM=1 then PM=0) frames around each window. The document argues the AP-side cost is large: over a 256 microsecond interval, where 2 x SIFS + QoS Null + Ack at 24 Mbps is 92 microseconds, conventional power-save allows at most 3 PM mode changes, while PUO allows up to 400 with one agreement per STA across 400 STAs (PUO-1) and up to 3200 with eight agreements per STA (PUO-8). It then walks through four AP scheduling styles (priority+fairness-first, efficiency-first, priority+fairness+filtering-first, parallel scheduling over N = 2/4/8 candidate TXOPs) and the compute-versus-efficiency trade each makes, concluding that an AP that has enabled PUO currently has no way to report that it cannot honour a schedule other than not enabling PUO, restarting the BSS without it, or silently dishonouring the windows.

The normative text (tracked changes against D2.1) adds a "TWT Constraint Parameters element (optional)" field to the Channel Usage Response frame, and extends the TWT Constraint Parameters element with a PUO Info field (4-bit Starting Target Wake Time Alignment Extension, 3-bit PUO Status, 1 reserved bit). For PUO agreements the alignment becomes q = 16n + p in 64 microsecond units (versus q = n in 1 TU for non-PUO), and the extension also indicates a recommended wake-interval multiple. PUO Status values are 0 Normal, 1 Unspecified PUO Error, 2 PUO Insufficient Resources and 3 PUO Gaps Too Narrow. A PUO Assisting AP that is routinely not meeting its goals because of the client not following its recommendations or the AP's resource limits "should" send Insufficient Resources; one that routinely cannot deliver frames because the gaps in the client's schedules are too narrow "should" send Gaps Too Narrow; the notes recommend the client then evaluate re-enabling its own mitigations or reshaping its schedule. The document also states that, for suitable flows, PUO has markedly lower wireless overhead than DUO and remains preferred whenever possible.

## Summary (ZH)
DCN 11-26-2378r0（Brian Hart 与 Binita Gupta，Cisco Systems；日期 2026-11-17）是针对 802.11bn Draft 2.1 中 CID 19601 的评论解决文档。文中引述的评论认为，要求 AP 对客户端的周期性不可用操作（PUO）会话请求“强制接受”是“有缺陷的协议设计”：AP 无法按“每客户端最多 8 个、乘以数百个客户端、且调度可任意（例如 0.25-0.5-1-2-5 ms 的可用间隔）”的规模来支持，评论称这使 AP 无法开启 PUO 与 P2P TWT。评论者要求，若保留强制接受，则应定义 AP 如何告知客户端其何时可以依赖 AP、何时不可以。对应的解决方案标记为“Revised”，修改与评论者提议一致。

文档的讨论部分逐步展开论证。PUO 客户端告知一项无法避免的周期性占用（P2P Wi-Fi、蓝牙、蜂窝或其他），使 AP 不向其发送；若 AP 仍发送，AP 也不应据此做出反应（重传、CW 增大、MCS 降低、MSDU 丢弃）；客户端则可省去每个窗口前后的 QoS Null（PM=1 再 PM=0）帧。文档认为 AP 侧代价很大：在 256 微秒区间内（2 x SIFS + QoS Null + Ack 在 24 Mbps 下为 92 微秒），常规省电模式最多 3 次 PM 状态切换，而 PUO 在每 STA 一个协议、400 个 STA 时（PUO-1）最多 400 次，每 STA 八个协议时（PUO-8）最多 3200 次。随后文档分析了四种 AP 调度方式（优先级+公平优先、效率优先、优先级+公平+过滤优先、对 N = 2/4/8 个候选 TXOP 并行调度）各自的算力与效率取舍，并得出结论：已开启 PUO 的 AP 目前除了“不开启 PUO”、“关闭 PUO 重启 BSS”或“悄悄不遵守窗口”之外，没有办法报告自己无法满足某个调度。

规范文本（相对 D2.1 的修订标记）在 Channel Usage Response 帧中增加“TWT Constraint Parameters 元素（可选）”字段，并为 TWT Constraint Parameters 元素增加 PUO Info 字段（4 比特 Starting Target Wake Time Alignment Extension、3 比特 PUO Status、1 比特保留）。对 PUO 协议，对齐量变为 q = 16n + p（单位 64 微秒），而非 PUO 为 q = n（单位 1 TU），扩展字段同时指示推荐的唤醒间隔倍数。PUO Status 取值为 0 Normal、1 Unspecified PUO Error、2 PUO Insufficient Resources、3 PUO Gaps Too Narrow。PUO Assisting AP 若因客户端未遵循其建议或自身资源限制而经常达不到目标，“应”发送 Insufficient Resources；若因客户端调度间隔过窄而经常无法收发帧，“应”发送 Gaps Too Narrow；注释建议客户端据此评估重新启用自身缓解机制或调整调度。文档还指出，对合适的流量，PUO 的无线开销明显低于 DUO，只要可能仍优先使用 PUO。

## Key technical points (EN)
- **DCN 11-26-2378r0 · TGbn** — CID 19601 (Brian Hart, Cisco), 37.19.3 / 9.4.2.257 / 9.6.13.25; baseline 11bn D2.1; refers to 26/884 for the longer analysis. [document](https://mentor.ieee.org/802.11/documents?is_dcn=2378&is_year=2026)
- Frame/element changes: Channel Usage Response gains an optional TWT Constraint Parameters element; the element gains a PUO Info field (alignment extension 4 b, PUO Status 3 b, reserved 1 b); q = 16n + p in 64 us QUs for PUO.
- PUO Status codes: Normal / Unspecified PUO Error / PUO Insufficient Resources / PUO Gaps Too Narrow; Insufficient Resources and Gaps Too Narrow each carry a "should send ... otherwise shall not set" rule; a non-AP STA shall not transmit the element with PUO Info, and an AP shall not send it to a non-PUO STA.
- Stated scale argument: at most 3 PM transitions per 256 us without PUO vs up to 400 (PUO-1) or 3200 (PUO-8) with 400 STAs.
- The document states that a silently dishonoured PUO window reintroduces the problems PUO is meant to remove (over-retried MSDUs, lowered MCS) and, as an interop issue, tends to get the feature disabled.

## Key technical points (ZH)
- **DCN 11-26-2378r0 · TGbn** — CID 19601（Brian Hart，Cisco），涉及 37.19.3 / 9.4.2.257 / 9.6.13.25；基线为 11bn D2.1；更详尽的分析见 26/884。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2378&is_year=2026)
- 帧/元素改动：Channel Usage Response 增加可选的 TWT Constraint Parameters 元素；该元素增加 PUO Info 字段（对齐扩展 4 比特、PUO Status 3 比特、保留 1 比特）；PUO 下 q = 16n + p，单位 64 微秒 QU。
- PUO Status 取值：Normal / Unspecified PUO Error / PUO Insufficient Resources / PUO Gaps Too Narrow，其中 Insufficient Resources 与 Gaps Too Narrow 各有“应发送……否则不得设置”规则；非 AP STA 不得发送带 PUO Info 的该元素，AP 不得向非 PUO STA 发送。
- 文档给出的规模论证：无 PUO 时每 256 微秒最多 3 次 PM 切换，400 个 STA 时 PUO-1 最多 400 次、PUO-8 最多 3200 次。
- 文档指出，悄悄不遵守 PUO 窗口会重新引入 PUO 本欲消除的问题（过度重传丢弃 MSDU、MCS 降低），并作为互操作问题往往导致该功能被关闭。

## Why it matters / what's new (EN)
This is a new DCN (above the previous watermark 11-26-2373), uploaded 2026-11-17 and addressed to the D2.1 comment-resolution cycle. The KB has covered earlier AP-PUO threads in TGbn digests (for example the 2026-11-05 Co-TDMA / NPCA / AP PUO backoff digest and the 2026-10-19 SMD / AP PUO / TXOP Return digest); this document is a resolution to a separate, client-PUO comment, and its content is the AP-to-client status feedback mechanism rather than the client-side signalling. Only the document body was read; no outcome (adoption, motion or ballot result) is implied by its upload.

## Why it matters / what's new (ZH)
这是一份新的 DCN（高于此前水位线 11-26-2373），于 2026-11-17 上传，面向 D2.1 评论解决周期。本知识库此前已在 TGbn 摘要中涵盖过 AP PUO 相关线索（例如 2026-11-05 的 Co-TDMA / NPCA / AP PUO 退避摘要和 2026-10-19 的 SMD / AP PUO / TXOP Return 摘要）；本文档针对的是另一条客户端 PUO 评论，其内容是 AP 向客户端的状态反馈机制，而非客户端侧信令。仅阅读了文档正文；文档的上传并不意味着任何采纳、动议或投票结果。
