---
id: 2026-11-03_ieee-mentor-tgbn-dbe-doze-missed-update-and-secure-uhr-parameter-retrieval
date_published: 2026-11-02
date_found: 2026-11-03
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest -- LB296 resolutions: DBE STA that dozes through a bandwidth update (DCN 11-26-2202r0, Ofinno) and secure retrieval of UHR parameters via 11bi EPP frames (DCN 11-26-1616r1, Cisco)"
title_zh: "IEEE 802.11 TGbn Mentor 摘要 -- LB296 评议处理：DBE STA 在休眠期间错过带宽更新（DCN 11-26-2202r0，Ofinno）与经 11bi EPP 帧安全获取 UHR 参数（DCN 11-26-1616r1，Cisco）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2202&is_year=2026"
source_quality: full
topics: [802.11bn, UHR, DBE, enhanced critical update, 802.11bi, EPPKE, power save, LB296, Mentor digest]
topic_primary: wifi8-uhr
topics_secondary: [energy-power-save, security-privacy]
novelty_score: 3
---

## Summary (EN)

Two TGbn comment-resolution documents against P802.11bn Draft 2.0 / 2.1 (Letter Ballot 296) deal with a non-AP STA that has been asleep while UHR operating parameters changed.

DCN 11-26-2202r0 (Donggu Lee and co-authors, Ofinno; dated and listed 2026-11-02) resolves CID 18064 on dynamic bandwidth expansion (DBE, clause 37.27). The CID text states that behaviour is undefined for a DBE non-AP STA that stays in the doze state longer than the advance-notification window and so misses a DBE bandwidth update: it does not know the TBTT at which the update took effect, the Maximum DBE Bandwidth Switch Time Period may already have elapsed, and it may start a TXOP on the outdated DBE bandwidth that the AP cannot receive. The document notes that the existing D2.1 rule (a DBE non-AP STA should not transmit after the update TBTT until it receives an AP frame or the Maximum DBE Bandwidth Switch Time Period elapses) assumes the STA already knows the updated bandwidth. The resolution is that, because DBE does not change the BSS bandwidth, such a STA may initiate a TXOP using only the BSS bandwidth after waking until it learns the current DBE bandwidth from a frame from the AP (for example a Beacon); the document says this needs no new signalling and adds nothing to the Beacon. The resolution is marked "Revised" with one sentence of editing text added to 37.27.

DCN 11-26-1616r1 (Binita Gupta and Brian Hart, Cisco; listed 2026-10-31 for this revision) resolves CIDs 20282 and 20416 (subclauses 37.31 / 37.31.3). The comments say a deep-sleeping client may miss UHR enhanced critical updates announced in Beacon frames, and that fetching the parameters afterwards should be protected to avoid DoS, since Probe Request/Response are unprotected. The resolution text lets a non-AP MLD (should/may) retrieve the most recent UHR mode enablement status and operation parameters using the EPP Capabilities and Operation Parameters Request/Response frames defined by 802.11bi, and lets the request carry an Extended Request element in the Per-STA Profile subelements so that only the UHR-related elements are returned, which the document gives as the way to avoid retrieving all BSS parameters when only UHR parameters changed. Rev 1 is listed as "some updates to proposed text".

## Summary (ZH)

针对 P802.11bn Draft 2.0 / 2.1（Letter Ballot 296）的两份 TGbn 评议处理文稿，处理的是非 AP STA 在休眠期间 UHR 运行参数发生变化的情形。

DCN 11-26-2202r0（Donggu Lee 等，Ofinno；文稿日期及 Mentor 列出日期均为 2026-11-02）处理关于动态带宽扩展（DBE，第 37.27 条）的 CID 18064。评议指出：DBE 非 AP STA 的休眠时间超过提前通知窗口而错过 DBE 带宽更新时，其行为未定义——它不知道更新生效的 TBTT，最大 DBE 带宽切换时间段可能已经过去，它可能在已过时的 DBE 带宽上发起 TXOP，而 AP 无法接收。文稿指出 D2.1 现有规则（DBE 非 AP STA 在更新 TBTT 之后、收到 AP 帧或最大 DBE 带宽切换时间段届满之前不应发送）假定 STA 已经知道更新后的带宽。处理方案是：由于 DBE 不改变 BSS 带宽，此类 STA 醒来后可以仅使用 BSS 带宽发起 TXOP，直到从 AP 的帧（如 Beacon）获知当前 DBE 带宽；文稿称这无需新增信令，也不向 Beacon 增加任何内容。该处理标为"Revised"，在 37.27 中增加一句编辑文本。

DCN 11-26-1616r1（Binita Gupta、Brian Hart，Cisco；该修订版 Mentor 列出日期 2026-10-31）处理 CID 20282 与 20416（第 37.31 / 37.31.3 条）。评议指出：深度休眠的客户端可能错过 Beacon 中公告的 UHR 增强关键更新，之后获取参数应受保护以避免 DoS，因为 Probe Request/Response 不受保护。处理文本允许非 AP MLD（should/may）使用 802.11bi 定义的 EPP Capabilities and Operation Parameters Request/Response 帧获取最新的 UHR 模式启用状态与运行参数，并允许请求在 Per-STA Profile 子元素中携带 Extended Request 元素，仅返回 UHR 相关元素；文稿将此作为仅 UHR 参数变化时避免取回全部 BSS 参数的做法。Rev 1 的说明是"对建议文本做了一些更新"。

## Key technical points (EN)

- **DCN 11-26-2202r0 · TGbn** -- LB296 CR for CID 18064 on DBE. Donggu Lee, Serhat Erkucuk, Jeongki Kim, Javier Perez-Ramirez, Malcolm Smith, Youngwan So (Ofinno). [document](https://mentor.ieee.org/802.11/documents?is_dcn=2202&is_year=2026)
- Edit to 37.27: a DBE non-AP STA may initiate a TXOP using only the BSS bandwidth after moving from doze to awake if it dozed for longer than the advance notification duration indicated by its DBE AP.
- Stated rationale: BSS bandwidth is unchanged by DBE and always within the DBE AP's operating bandwidth; the AP can receive it whatever the DBE bandwidth change.
- **DCN 11-26-1616r1 · TGbn** -- LB296 CR for Secure Retrieval of UHR Parameters. Binita Gupta, Brian Hart (Cisco). [document](https://mentor.ieee.org/802.11/documents?is_dcn=1616&is_year=2026)
- CIDs 20282 / 20416; baseline D2.1; edits to 37.31.3 plus a new subclause 37.31.4 (Retrieval of UHR operation parameters post enhanced critical updates); the EPP exchange is a 'should'/'may' option, with a shall-retrieve rule when the change count skips by more than one.
- Mechanism: 802.11bi EPP Capabilities and Operation Parameters Request/Response frames, with an Extended Request element in Per-STA Profile subelements for a partial (UHR-only) profile.

## Key technical points (ZH)

- **DCN 11-26-2202r0 · TGbn** -- 针对 DBE 的 CID 18064 的 LB296 评议处理。Donggu Lee、Serhat Erkucuk、Jeongki Kim、Javier Perez-Ramirez、Malcolm Smith、Youngwan So（Ofinno）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2202&is_year=2026)
- 对 37.27 的修改：DBE 非 AP STA 若休眠时长超过其 DBE AP 指示的提前通知时长，则从休眠转入唤醒后可仅使用 BSS 带宽发起 TXOP。
- 所述理由：DBE 不改变 BSS 带宽，且 BSS 带宽始终在 DBE AP 的运行带宽之内，无论 DBE 带宽如何变化 AP 都能接收。
- **DCN 11-26-1616r1 · TGbn** -- 安全获取 UHR 参数的 LB296 评议处理。Binita Gupta、Brian Hart（Cisco）。[文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1616&is_year=2026)
- CID 20282 / 20416；基线 D2.1；修改 37.31.3，并新增 37.31.4（增强关键更新后 UHR 运行参数的获取）；EPP 交换为 should/may 选项，变更计数跳增超过 1 时须获取参数。
- 机制：802.11bi 的 EPP Capabilities and Operation Parameters Request/Response 帧，并通过 Per-STA Profile 子元素中的 Extended Request 元素请求部分（仅 UHR）配置。

## Why it matters / what's new (EN)

Both are comment resolutions that would be moved into the TGbn draft, not new proposals, and they are the draft-level follow-through on mechanisms already in D2.x: DBE (see the earlier TGbn digests in this KB) and the UHR enhanced critical update procedure. The common theme is the STA-wakes-up case: one resolution picks which bandwidth a returning STA may use, the other reuses an 802.11bi protected frame exchange for catch-up. This is a reading of the two documents' text only; adoption status is not stated in them.

## Why it matters / what's new (ZH)

两份均为将并入 TGbn 草案的评议处理文稿，而非新提案，是对 D2.x 中既有机制——DBE（见本知识库此前的 TGbn 摘要）与 UHR 增强关键更新流程——的草案级落实。共同点是 STA 唤醒场景：一份规定重新醒来的 STA 可使用哪一带宽，另一份复用 802.11bi 的受保护帧交换来补取参数。以上仅依据两份文稿文本；文稿本身未说明采纳状态。
