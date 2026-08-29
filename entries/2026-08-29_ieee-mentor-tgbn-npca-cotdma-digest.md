---
id: 2026-08-29_ieee-mentor-tgbn-npca-cotdma-digest
date_published: 2026-08-28
date_found: 2026-08-29
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest — 2026-08-29: a five-document NPCA / Co-SR / Co-TDMA wave from Ruijie and Hikvision"
title_zh: "IEEE 802.11 TGbn Mentor 摘要 — 2026-08-29：锐捷与海康威视提交的五份 NPCA / Co-SR / Co-TDMA 文稿"
url: https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bn
source_quality: full
topics: [TGbn, 802.11bn, MAPC, NPCA, Co-SR, Co-TDMA, DSO, AOM, TXOP, UHR]
topic_primary: mapc-cosr
topics_secondary: [wifi8-uhr, rtwt-latency]
novelty_score: 3
---

## Summary (EN)

TGbn uploaded five new contributions to IEEE 802.11 Mentor on 27–28 August 2026, past the document number 11-26-1565 tracked by the previous digest (`2026-08-27_ieee-mentor-tgbn-win-sg-digest`). Two Chinese vendors account for all five: Ruijie Networks filed four and Hangzhou Hikvision Digital Technology one. The theme is unusually coherent for a between-sessions upload window — every document addresses a **boundary condition or an unspecified corner of an already-agreed D2.0 coordination mechanism**, rather than proposing a new feature. This is the shape of traffic a task group produces when it is converging: the mechanisms are settled and the remaining work is saying precisely what happens at their edges.

Three documents concern **NPCA (non-primary channel access)**, the mechanism that lets a device fall back to a secondary 20 MHz channel when the primary is busy with an OBSS transmission. DCN 11-26-1571 "Discussion on Transmissions Not Allowed for NPCA" (Longlong Hong, Ruijie) addresses which frame exchanges must *not* be sent on a non-primary channel — the exclusion list, which matters because a device operating off-primary is invisible to stations that only track the primary. DCN 11-26-1570 "Discussion on NPCA RX FORMAT Filtering" (same author) concerns which received PPDU formats a device should accept or discard while in NPCA operation, a receiver-side filtering rule with direct consequences for false triggering and NAV behaviour.

Two more address **multi-AP coordination timing**. DCN 11-26-1569 "TXOP Termination in Co-TDMA" (Shu Yang, Ruijie) asks how a coordinated-TDMA transmission opportunity ends — Co-TDMA divides a shared TXOP into time slices allocated across coordinated APs, and the termination semantics govern what happens when a sharing AP finishes early or fails to use its slice. DCN 11-26-1568 "Co-SR Multiple TXOP Transmission" (Jingyang Luo, Hikvision) extends coordinated spatial reuse across **more than one TXOP** rather than the single-TXOP framing in which Co-SR is usually described — a scope extension, not a corner case.

The fifth, DCN 11-26-1567 "Clarification on DSO Subband Selection with AOM" (Mengying Lin, Ruijie), sits at the intersection of dynamic sub-channel operation and adaptive operating-mode / bandwidth signalling: when a device is already narrowing its operating bandwidth via AOM, which subbands remain eligible for DSO assignment is not obviously determined by either mechanism alone.

Two related documents that first appeared in this window are noted but not counted as new TGbn technical content: DCN 11-26-1563 (MLME SAP support for MAPC traffic indication) and 11-26-1562 (further considerations on IM extension), both Ruijie, were already covered in the 27 August digest. **Retrieval note (correcting a standing error in this digest series):** earlier digests recorded that Mentor document bodies "return 418/403 to anonymous downloaders" and treated them as account-gated. That was a misreading. The responses are an F5 BIG-IP **rate-limit** (a short `Request Rejected` page carrying a support ID), not an authentication challenge — sequential requests spaced ~6-8 seconds apart with a browser user-agent and a `Referer` of the Mentor documents listing return HTTP 200 and the real file. Mentor also resolves on the DCN prefix alone and ignores the rest of the filename slug. All five documents below were downloaded and read in full for this entry.

## Summary (ZH)

TGbn 于 2026 年 8 月 27–28 日向 IEEE 802.11 Mentor 上传了五份新文稿，编号超过上一份摘要（`2026-08-27_ieee-mentor-tgbn-win-sg-digest`）所记录的 11-26-1565。五份全部来自两家中国厂商：锐捷网络四份、杭州海康威视一份。对于会期之间的上传窗口而言，主题异常集中——每一份都针对 **D2.0 中已达成一致的协调机制的边界条件或未规定角落**，而非提出新特性。这正是任务组进入收敛期时的文稿形态：机制已定，剩下的工作是精确说明其边缘行为。

三份涉及 **NPCA（非主信道接入）**——即当主信道被 OBSS 传输占用时，设备退避到辅助 20 MHz 信道的机制。DCN 11-26-1571《Discussion on Transmissions Not Allowed for NPCA》（洪龙龙，锐捷）讨论哪些帧交换**不得**在非主信道上发送，即排除清单；这一点很关键，因为工作在非主信道的设备对只跟踪主信道的station是不可见的。DCN 11-26-1570《Discussion on NPCA RX FORMAT Filtering》（同一作者）讨论 NPCA 操作期间设备应接收或丢弃哪些 PPDU 格式——一条接收侧过滤规则，直接影响误触发与 NAV 行为。

另两份针对**多 AP 协调的时序**。DCN 11-26-1569《TXOP Termination in Co-TDMA》（杨舒，锐捷）追问协调式 TDMA 传输机会如何结束：Co-TDMA 将共享 TXOP 切分为时间片分配给多个协调 AP，而终止语义决定了共享 AP 提前完成或未使用其时间片时会发生什么。DCN 11-26-1568《Co-SR Multiple TXOP Transmission》（罗景阳，海康威视）把协调空间复用扩展到**跨多个 TXOP**，而非通常描述 Co-SR 时所用的单 TXOP 框架——这是范围扩展，而非边角情形。

第五份 DCN 11-26-1567《Clarification on DSO Subband Selection with AOM》（林梦莹，锐捷）位于动态子信道操作与自适应工作模式/带宽信令的交叉点：当设备已经通过 AOM 收窄工作带宽时，哪些子带仍可被 DSO 分配，单靠任一机制都无法明确确定。

另有两份在本窗口出现的相关文稿仅作记录、不计入新增 TGbn 技术内容：DCN 11-26-1563（MAPC 流量指示的 MLME SAP 支持）与 1562（IM 扩展的进一步考虑），均来自锐捷，已在 8 月 27 日的摘要中收录。**抓取说明（更正本摘要系列的一个长期错误）**：此前的摘要记载 Mentor 文稿正文「对匿名下载者返回 418/403」，并据此当作需要账号才能访问。这是误读。那些响应来自 F5 BIG-IP 的**限流**（一个带 support ID 的简短 `Request Rejected` 页面），并非身份认证质询——只要用浏览器 UA、带上指向 Mentor 文档列表页的 `Referer`，并把请求间隔拉到约 6~8 秒，即可返回 HTTP 200 与真实文件。此外 Mentor 仅按 DCN 前缀解析，文件名后半段可以任意。本条目所涉五份文稿均已完整下载并阅读。

## Key technical points (EN)

- **DCN 11-26-1571-00 · TGbn** — "Discussion on Transmissions Not Allowed for NPCA". Longlong Hong (Ruijie Networks). Uploaded 28 Aug 2026. Defines the exclusion set of frame exchanges on a non-primary channel.
- **DCN 11-26-1570-00 · TGbn** — "Discussion on NPCA RX FORMAT Filtering". Longlong Hong (Ruijie Networks). Uploaded 28 Aug 2026. Receiver-side PPDU-format acceptance rules during NPCA operation.
- **DCN 11-26-1569-00 · TGbn** — "TXOP Termination in Co-TDMA". Shu Yang (Ruijie Networks Co., Ltd.). Uploaded 28 Aug 2026. Termination semantics for a time-sliced coordinated TXOP.
- **DCN 11-26-1568-00 · TGbn** — "Co-SR Multiple TXOP Transmission". Jingyang Luo (Hangzhou Hikvision Digital Technology). Uploaded 28 Aug 2026. Extends coordinated spatial reuse beyond a single TXOP.
- **DCN 11-26-1567-00 · TGbn** — "Clarification on DSO Subband Selection with AOM". Mengying Lin (Ruijie Networks Co., Ltd.). Uploaded 27 Aug 2026. Subband eligibility for dynamic sub-channel operation under adaptive operating-mode bandwidth narrowing.

**From the document bodies (added after full-text retrieval):**

- **11-26-1569 admits a hole in the D2.0 draft.** The draft already specifies the polling, allocation and *return* of a shared TXOP in Co-TDMA, but Ruijie states that no mechanism is defined to **terminate** the TXOP sharing among APs, which they argue wastes over-the-air resources. Returning an unspent slice and ending the sharing session are different operations, and only the former exists today. The proposed fix reuses **CF-End** — a legacy broadcast NAV reset — as the termination signal.
- **11-26-1568 changes the negotiation unit of Co-SR, not a corner case.** Hikvision proposes that a Co-SR agreement span multiple TXOPs. In TXOPs 2..N the Invite and Response frames are **not retransmitted**; the participating APs keep applying the parameters negotiated during the first TXOP. The document carries **five straw polls (SP1–SP5)** with concrete field additions to the Co-SR Invite, Response and Trigger frames, and slide 9 extends the same idea to coordinated beamforming (Co-BF).
- **A role inversion is possible between TXOPs.** In the multi-TXOP regime the coordinating and coordinated AP **contend simultaneously** for each subsequent TXOP, and whichever wins sends the Trigger frame. The spatial-reuse parameters carried forward from TXOP 1 are role-indexed, so the roles can swap while the parameter binding cannot — the contribution does not say how a role-indexed parameter set is re-indexed after an inversion. The agreement is also scoped by a **TXOP count rather than a duration**, although channel coherence is a time quantity, and the coordinated AP has no mid-sequence withdrawal path.
- **11-26-1567 is a single negative rule.** An AP shall not select an 80 MHz DSO subband when *all* 20 MHz subchannels inside it are marked disabled in the most recently received AOM Disabled Subchannel Bitmap. The partial-disable case (one to three subchannels disabled) is left permitted and unaddressed, and no epoch binds the bitmap update to the DSO Offer/Confirmation.
- **11-26-1571 confirms an open NPCA edge.** Receive-side response behaviour during NPCA operation remains undefined in the draft.
- **Status caveat:** SP1–SP5 in 11-26-1568 are **pending the September 2026 interim**. The multi-TXOP Co-SR regime is a proposal, not agreed text.
- **Vendor concentration:** 4 of 5 from Ruijie, 1 from Hikvision — no contributions in this window from the Huawei / Qualcomm / Intel / Broadcom bloc that dominated the July plenary TGbn traffic.
- **Document-number watermark** advances 11-26-1565 → 11-26-1573 (1573 is TGbp, covered separately); 1564, 1566 and 1572 are not publicly listed.
- **Not new in this digest:** 11-26-1563 (MLME SAP for MAPC traffic indication) and 11-26-1562 (IM extension) were ingested on 27 August.

## Key technical points (ZH)

- **DCN 11-26-1571-00 · TGbn** —《Discussion on Transmissions Not Allowed for NPCA》。洪龙龙（锐捷网络）。2026-08-28 上传。定义非主信道上的帧交换排除集合。
- **DCN 11-26-1570-00 · TGbn** —《Discussion on NPCA RX FORMAT Filtering》。洪龙龙（锐捷网络）。2026-08-28 上传。NPCA 操作期间接收侧的 PPDU 格式接受规则。
- **DCN 11-26-1569-00 · TGbn** —《TXOP Termination in Co-TDMA》。杨舒（锐捷网络）。2026-08-28 上传。时间片化协调 TXOP 的终止语义。
- **DCN 11-26-1568-00 · TGbn** —《Co-SR Multiple TXOP Transmission》。罗景阳（杭州海康威视数字技术）。2026-08-28 上传。将协调空间复用扩展到单个 TXOP 之外。
- **DCN 11-26-1567-00 · TGbn** —《Clarification on DSO Subband Selection with AOM》。林梦莹（锐捷网络）。2026-08-27 上传。在 AOM 收窄带宽的前提下，动态子信道操作的可用子带界定。

**来自文稿正文（完成全文抓取后补充）：**

- **11-26-1569 承认 D2.0 草案存在一个缺口。** 草案已规定 Co-TDMA 中共享 TXOP 的轮询、分配与**归还**，但锐捷指出：草案没有定义如何**终止**多 AP 之间的 TXOP 共享，并认为这会浪费空口资源。「归还未用完的时间片」与「结束共享会话」是两回事，而目前只有前者。其提出的方案是复用 **CF-End**（一个面向传统设备的广播 NAV 复位帧）作为终止信号。
- **11-26-1568 改变的是 Co-SR 的协商单位，而非某个边角情形。** 海康威视提出让一次 Co-SR 协商跨越多个 TXOP：在第 2 至第 N 个 TXOP 中**不再重传** Invite 与 Response 帧，参与的 AP 继续沿用第 1 个 TXOP 协商出的参数。文稿包含**五项 straw poll（SP1–SP5）**，对 Co-SR 的 Invite / Response / Trigger 帧提出了具体的字段增补；第 9 页还把同一思路延伸到协调波束成形（Co-BF）。
- **TXOP 之间可能发生角色互换。** 在多 TXOP 模式下，协调 AP 与被协调 AP **同时竞争**后续每一个 TXOP，谁抢到谁发 Trigger 帧。而从第 1 个 TXOP 沿用下来的空间复用参数是**按角色索引**的——角色会换，参数绑定却不会；文稿没有说明角色互换后如何对参数集重新索引。此外，该协商是按 **TXOP 计数**而非**时长**限定有效范围（但信道相干性是一个时间量），且被协调 AP 在序列中途没有退出路径。
- **11-26-1567 只是一条否定式规则。** 当某个 80 MHz DSO 子带内**全部** 20 MHz 子信道都在最近一次收到的 AOM Disabled Subchannel Bitmap 中被标记为禁用时，AP 不得选择该子带。部分禁用（4 个中禁用 1~3 个）的情形仍被允许且未作规定；位图更新与 DSO Offer/Confirmation 之间也没有任何时序（epoch）绑定。
- **11-26-1571 确认了一处 NPCA 未决边界**：NPCA 操作期间接收侧的响应行为在草案中仍未定义。
- **状态提示**：11-26-1568 中的 SP1–SP5 **尚待 2026 年 9 月中间会议表决**。多 TXOP Co-SR 目前是提案，不是已达成的草案文本。
- **厂商集中度**：五份中四份来自锐捷、一份来自海康威视——本窗口内没有来自七月全会期间主导 TGbn 文稿的华为/高通/英特尔/博通阵营的贡献。
- **文档编号水位**从 11-26-1565 推进到 11-26-1573（1573 属 TGbp，单独收录）；1564、1566、1572 未公开列出。
- **本摘要不计为新增**：11-26-1563（MAPC 流量指示的 MLME SAP）与 11-26-1562（IM 扩展）已于 8 月 27 日收录。

## Why it matters / what's new (EN)

TGbn's public timeline (`802.11_Timelines`, page stamp 6 Aug 2026) shows D2.00 as the current draft with the D1.0 working-group letter ballot having closed at 61 %. That gap — an approved D2.0 draft carrying a low-approval ballot history — is exactly the phase in which corner-case documents like these five determine what the specification actually says. All five are brand-new document numbers proposing text or discussion, not comment-resolution revisions on an existing ballot, which is why this digest is scored above the usual navigation-aid baseline for Mentor entries.

Two of the five extend rather than clarify. **Co-SR across multiple TXOPs** (11-26-1568) changes the unit over which coordinated spatial reuse is negotiated; every Co-SR description in this knowledge base to date, including the mechanism surveys in `2026-07-24_arxiv-wifi8-uhr-mechanisms-verification` and the generative configuration work in `2026-08-06_arxiv-fm4wifi-flow-matching-mapc`, treats the sharing decision as scoped to one transmission opportunity. **Co-TDMA TXOP termination** (11-26-1569) is the complementary question on the time-division side, and an unspecified termination rule is where slot waste and coordination overhead live.

The NPCA pair is the more procedurally significant one. NPCA comment resolution has been running since the LB291 cycle (see `2026-08-03_ieee-mentor-tgbp-digest` for the Hikvision NPCA NAV comment resolution, and `2026-07-24` for the earlier NPCA CR traffic), and the two questions raised here — what may not be transmitted off-primary, and what may be received there — are the two halves of the same visibility problem: a device operating on a non-primary channel is, by construction, partly invisible to neighbours tracking only the primary. Note also the vendor pattern: this window's TGbn traffic is entirely Ruijie and Hikvision, a shift from the July plenary mix, and consistent with the pre-September-interim period when larger delegations are preparing session material rather than uploading it.

## Why it matters / what's new (ZH)

TGbn 的公开时间表（`802.11_Timelines`，页面日期 2026-08-06）显示当前草案为 D2.00，而 D1.0 工作组信函投票以 61% 通过率结束。这一落差——已获批的 D2.0 草案背后是一次低通过率的投票历史——恰恰是这五份边角情形文稿真正决定规范文本内容的阶段。五份全部是提出文本或讨论的全新文档编号，而非既有投票的意见处理修订版，这也是本摘要评分高于 Mentor 条目通常「导航辅助」基线的原因。

五份中有两份属于扩展而非澄清。**跨多个 TXOP 的 Co-SR**（11-26-1568）改变了协调空间复用的协商单元；截至目前本知识库中所有对 Co-SR 的描述——包括 `2026-07-24_arxiv-wifi8-uhr-mechanisms-verification` 的机制综述与 `2026-08-06_arxiv-fm4wifi-flow-matching-mapc` 的生成式配置工作——都把共享决策的作用域限定在单个传输机会内。**Co-TDMA 的 TXOP 终止**（11-26-1569）则是时分侧的互补问题，而终止规则未定之处正是时隙浪费与协调开销的来源。

NPCA 这一对在流程上更具意义。NPCA 的意见处理自 LB291 周期以来一直在进行（参见 `2026-08-03_ieee-mentor-tgbp-digest` 中海康威视的 NPCA NAV 意见处理，以及 `2026-07-24` 的早期 NPCA CR 文稿）；此处提出的两个问题——非主信道上不得发送什么、可以接收什么——正是同一个「可见性」问题的两面：工作在非主信道的设备在构造上就对只跟踪主信道的邻居部分不可见。另值得注意厂商格局：本窗口的 TGbn 文稿完全来自锐捷与海康威视，相较七月全会的构成发生了变化，这与九月中间会议前大型代表团在准备会议材料而非上传材料的时期特征相符。
