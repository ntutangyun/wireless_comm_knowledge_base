---
id: 2026-10-19_ieee-mentor-tgbn-smd-roaming-ap-puo-txop-return-digest
date_published: 2026-10-18
date_found: 2026-10-19
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbn Mentor digest — 2026-10-19 (LB296 CRs: SMD transition vs AP PUO availability; Co-TDMA TXOP Return made conditional on capability)"
title_zh: "IEEE 802.11 TGbn Mentor 当日摘要 — 2026-10-19（LB296 CR：SMD 切换与 AP PUO 可用性；Co-TDMA TXOP Return 以能力为条件）"
url: "https://mentor.ieee.org/802.11/documents?is_year=2026&is_group=00bn"
source_quality: full
topics: [TGbn, 802.11bn, LB296, SMD, AP PUO, ST preparation, Co-TDMA, MAPC, TXOP Return]
topic_primary: roaming-mobility
topics_secondary: [mapc-cosr, wifi8-uhr]
novelty_score: 2
---

## Summary (EN)

Mentor rows uploaded 14-18 October 2026 (listing read 19 October) add one new TGbn base document above the previous watermark (DCN 11-26-2020r0) and revisions of three LB296 comment-resolution documents. DCN 2020r0 and DCN 1988r1 were read in full; DCNs 1794r3 and 1680r2 were read at header level (abstract, revision history and CID lists) and are listed from that.

DCN 11-26-2020r0 "CRs for SMD Roaming and AP PUO" (Pooya Monajemi, Jarkko Kneckt, Chitto Ghosh and Minyoung Park of Apple, Hank H. Sung of WILUS; dated 2026-10-15) proposes resolutions to CIDs 19758, 17253 and 17346 on P802.11bn D2.0, with changes based on D2.1. The three comments, as quoted in the document, ask how an SMD transition operates when the target AP is unavailable because of AP PUO operation, and where a temporary suspension of AP PUO for a prepared target AP MLD starts, how long it lasts and when AP PUO resumes. The resolution is marked "Revised" and adds rules on the availability of the target AP MLD for processing preparation requests and for receiving execution requests, UL data or DL drain termination notifications. The discussion section states that completing an SMD BSS transition requires the target AP MLD to receive signals from both the origin AP (over wired or wireless backhaul) and the non-AP MLD during and after the ST execution phase. The added text in 37.16.6 says an AP MLD in an SMD containing other AP MLDs shall be capable of preparing links when a non-AP MLD sends an ST preparation request via its current AP MLD, regardless of the AP PUO state of any affiliated AP of the target. The listed implications: AP MLDs in an SMD can always process preparation requests forwarded over the backhaul; if the non-AP STA is not an AP PUO assisting STA, the target AP must disable the feature for the duration of preparation (expected to persist if the STA then roams there); and even for an assisting STA, at least one link must keep AP PUO disabled until the STA has had an opportunity to receive information about PUO operation. The same document reproduces the ST preparation text, including that a non-AP MLD may attempt ST execution with only one prepared target at a time, that after a non-SUCCESS response it may try another prepared AP MLD, and that after REJECTED_ST_EXEC_EXCEEDED_PREP_TIMEOUT or REJECTED_ST_EXEC_TARGET_NOT_PREPARED it shall not retry the same target before a new successful preparation.

DCN 11-26-1988r1 "Urgent MAPC/Co-TDMA CID" (Samat Shabdanov and colleagues, MediaTek, with Rubayet Shafin of Samsung added as co-author in r1; dated 2026-10-xx) resolves CID 20664 on clauses 9.4.2.362.4.2.4 and 37.15.2.3.5. The comment says that "the AP shall set the TXOP Return Solicited field ... to 1" ties a per-TXOP field to a static capability, so the coordinated AP must fit a MAPC TXOP Return frame into every allocation; the commenter proposed "may set". The resolution is "Revised": it agrees in principle that returning the TXOP is sometimes unnecessary and detrimental to latency gains, and states that, as an optional feature, TXOP return cannot be split into an optional receive capability and a mandatory transmit capability. The document's discussion lists issues in the current text: an allocation shorter than the TXOP Return frame (stated as an estimated 45-56 microseconds); lost ACKs and retransmissions that can leave no time for the mandatory return frame; overhead of 11 to 55 percent for allocations of 100-500 microseconds; no flexibility to skip the return; and the receive-optional, transmit-mandatory asymmetry. The proposed text redefines the Rx TXOP Return Support field as covering both receiving (as coordinating AP) and transmitting (as coordinated AP) the MAPC TXOP Return frame, and ties TXOP Return Solicited and the coordinated AP's behaviour to that field being 1 or 0 in the MAPC element.

Revisions also seen: DCN 11-26-1794r3 (Arik Klein, Huawei; CR for clause 9.4.2.362, part 1, covering CID 19314, which is a punctuation fix on a cross-reference; r3 resolves it after offline discussion with the commenter) and DCN 11-26-1680r2 (Jay Yang, ZTE; CR for MAPC security CIDs, part 1, where the document states 21 comments but lists 23 CIDs, with r2 deferring CIDs 14289 and 14168 after a comment). Other TGbn rows in the window are rev bumps of already-listed LB296 documents (DCNs 1766r3, 1671r7, 1965r3, 1992r2, 1872r2, 1959r2, 1784r2, 1769r3), TGbn Motions List Part 4 (DCN 1512r3) and the September-November teleconference agenda (DCN 1911r9); these were not opened.

## Summary (ZH)

2026 年 10 月 14 至 18 日上传的 Mentor 条目（10 月 19 日读取列表）中，高于上次水位线的 TGbn 新基础文档为 DCN 11-26-2020r0，另有三份 LB296 意见处理文档的新修订。DCN 2020r0 与 DCN 1988r1 已通读；DCN 1794r3 与 1680r2 仅读了文档头部（摘要、修订记录和 CID 列表），据此列出。

DCN 11-26-2020r0《CRs for SMD Roaming and AP PUO》（Apple 的 Pooya Monajemi、Jarkko Kneckt、Chitto Ghosh、Minyoung Park，WILUS 的 Hank H. Sung；日期 2026-10-15）针对 P802.11bn D2.0 的 CID 19758、17253、17346 提出处理方案，修改基于 D2.1。文档中引用的这三条意见询问：目标 AP 因 AP PUO 运行而不可用时 SMD 切换如何进行；以及为已准备的目标 AP MLD 临时暂停 AP PUO 时，暂停从何时开始、持续多久、何时恢复 AP PUO。处理结果标记为“Revised”，新增了关于目标 AP MLD 处理准备请求、接收执行请求、UL 数据或 DL 排空终止通知的可用性规则。讨论部分指出，完成 SMD BSS 切换要求目标 AP MLD 在 ST 执行阶段期间及之后能够同时接收来自源 AP（经有线或无线回传）和非 AP MLD 的信号。37.16.6 中新增的文本规定：包含其他 AP MLD 的 SMD 中的 AP MLD，在非 AP MLD 经其当前 AP MLD 发送 ST 准备请求时，无论目标任一附属 AP 的 AP PUO 状态如何，都应能够完成链路准备。文中列出的影响包括：SMD 内的 AP MLD 总能处理经回传转发的准备请求；若非 AP STA 不是 AP PUO 辅助 STA，目标 AP 必须在准备期间禁用该功能（若该 STA 随后漫游至此，预期该禁用持续）；即使是辅助 STA，也至少要有一条链路保持 AP PUO 禁用，直到该 STA 有机会获知 PUO 运行信息。该文档还重现了 ST 准备文本，包括非 AP MLD 一次只能对一个已准备的目标尝试 ST 执行，收到非 SUCCESS 响应后可尝试另一个已准备的 AP MLD，收到 REJECTED_ST_EXEC_EXCEEDED_PREP_TIMEOUT 或 REJECTED_ST_EXEC_TARGET_NOT_PREPARED 后，在新的成功准备之前不得重试同一目标。

DCN 11-26-1988r1《Urgent MAPC/Co-TDMA CID》（MediaTek 的 Samat Shabdanov 等，r1 增加 Samsung 的 Rubayet Shafin 为共同作者；日期 2026-10-xx）处理 9.4.2.362.4.2.4 和 37.15.2.3.5 条的 CID 20664。意见指出“the AP shall set the TXOP Return Solicited field ... to 1”把逐 TXOP 字段与静态能力绑定，使被协调 AP 必须在每次分配中容纳一帧 MAPC TXOP Return；意见人建议改为“may set”。处理结果为“Revised”：原则上同意有时归还 TXOP 并无必要且不利于时延收益，并指出作为可选特性，TXOP 归还不能拆分为可选的接收能力和强制的发送能力。文档的讨论列出现有文本的问题：分配时间短于 TXOP Return 帧（文中估计为 45-56 微秒）；ACK 丢失与重传可能使强制归还帧无时间发送；在 100-500 微秒的分配下开销占 11% 至 55%；无法选择不归还；以及接收可选、发送强制的不对称。所提文本把 Rx TXOP Return Support 字段重新定义为同时涵盖（作为协调 AP）接收和（作为被协调 AP）发送 MAPC TXOP Return 帧，并把 TXOP Return Solicited 及被协调 AP 的行为与 MAPC 元素中该字段为 1 或 0 绑定。

同期所见的修订：DCN 11-26-1794r3（Huawei 的 Arik Klein；条款 9.4.2.362 的 CR 第 1 部分，涉及 CID 19314，为交叉引用的标点修正；r3 在与意见人线下讨论后处理该 CID）和 DCN 11-26-1680r2（ZTE 的 Jay Yang；MAPC 安全 CID 的 CR 第 1 部分，文档称处理 21 条意见，但列出 23 个 CID，r2 根据一条意见推迟 CID 14289 和 14168）。该时段其他 TGbn 条目为已列出 LB296 文档的修订（DCN 1766r3、1671r7、1965r3、1992r2、1872r2、1959r2、1784r2、1769r3）、TGbn Motions List Part 4（DCN 1512r3）和 9-11 月电话会议议程（DCN 1911r9），均未打开。

## Key technical points (EN)

- **DCN 11-26-2020r0 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2020&is_year=2026) CRs for SMD Roaming and AP PUO. Monajemi, Kneckt, Ghosh, Park (Apple); Sung (WILUS). CIDs 19758, 17253, 17346; target AP MLD availability rules during ST preparation and execution; AP PUO disabled on the target for the preparation period unless the STA is an assisting STA, and at least one link kept PUO-disabled for assisting STAs.
- **DCN 11-26-1988r1 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=1988&is_year=2026) Urgent MAPC/Co-TDMA CID. Shabdanov et al. (MediaTek), Shafin (Samsung). CID 20664; Rx TXOP Return Support redefined to cover receive and transmit of the MAPC TXOP Return frame; TXOP Return Solicited tied to it.
- **DCN 11-26-1794r3 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=1794&is_year=2026) LB296 CR for clause 9.4.2.362 part 1. Arik Klein (Huawei). CID 19314 (cross-reference punctuation), resolved in r3.
- **DCN 11-26-1680r2 · TGbn** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=1680&is_year=2026) LB296 CR for MAPC security CIDs part 1. Jay Yang (ZTE). The document states 21 comments but lists 23 CIDs; CIDs 14289 and 14168 deferred in r2.

## Key technical points (ZH)

- **DCN 11-26-2020r0 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2020&is_year=2026) 针对 SMD 漫游与 AP PUO 的 CR。Monajemi、Kneckt、Ghosh、Park（Apple）；Sung（WILUS）。CID 19758、17253、17346；ST 准备与执行期间目标 AP MLD 的可用性规则；除非 STA 为辅助 STA，目标 AP 在准备期间禁用 AP PUO，对辅助 STA 至少保持一条链路禁用 PUO。
- **DCN 11-26-1988r1 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1988&is_year=2026) Urgent MAPC/Co-TDMA CID。Shabdanov 等（MediaTek），Shafin（Samsung）。CID 20664；Rx TXOP Return Support 重新定义为涵盖 MAPC TXOP Return 帧的接收与发送；TXOP Return Solicited 与之绑定。
- **DCN 11-26-1794r3 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1794&is_year=2026) 条款 9.4.2.362 的 LB296 CR 第 1 部分。Arik Klein（Huawei）。CID 19314（交叉引用标点），在 r3 处理。
- **DCN 11-26-1680r2 · TGbn** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1680&is_year=2026) MAPC 安全 CID 的 LB296 CR 第 1 部分。Jay Yang（ZTE）。文档称处理 21 条意见，但列出 23 个 CID；r2 推迟 CID 14289 与 14168。

## Why it matters / what's new (EN)

All four documents are LB296 comment resolutions on P802.11bn D2.0/D2.1, so they show text being edited rather than new proposals. DCN 2020 addresses the interaction between the seamless-transition procedure and AP PUO; DCN 1988 changes an existing MAPC Co-TDMA rule (previously discussed in the KB's TGbn digests, e.g. 2026-10-12_ieee-mentor-tgbn-lb296-npca-mapc-digest, which covered the earlier urgent TXOP-return fix as DCN 1988r0). Neither document states a measured result; the TXOP Return overhead figures in DCN 1988 are the author's own estimates.

## Why it matters / what's new (ZH)

这四份文档均为针对 P802.11bn D2.0/D2.1 的 LB296 意见处理，反映的是文本修改而非新提案。DCN 2020 处理无缝切换流程与 AP PUO 的交互；DCN 1988 修改的是已有的 MAPC Co-TDMA 规则（本知识库此前的 TGbn 摘要已涉及，例如 2026-10-12_ieee-mentor-tgbn-lb296-npca-mapc-digest 曾以 DCN 1988r0 覆盖更早的 TXOP 归还紧急修订）。两份文档均未给出实测结果；DCN 1988 中 TXOP Return 开销数字为作者自己的估算。
