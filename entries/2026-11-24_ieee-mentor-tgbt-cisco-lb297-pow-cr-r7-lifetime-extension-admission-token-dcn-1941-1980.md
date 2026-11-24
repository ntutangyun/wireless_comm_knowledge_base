---
id: 2026-11-24_ieee-mentor-tgbt-cisco-lb297-pow-cr-r7-lifetime-extension-admission-token-dcn-1941-1980
date_published: 2026-11-23
date_found: 2026-11-24
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbt Mentor digest - 2026-11-23: LB297 PoW comment resolutions revision 7 (DCN 11-26-1941r7 and presentation 1980r3), challenge-lifetime extension and PoW Admission Token"
title_zh: "IEEE 802.11 TGbt Mentor 摘要 - 2026-11-23：LB297 PoW 意见处理第 7 版（DCN 11-26-1941r7 及演示文稿 1980r3）——挑战有效期延长与 PoW 准入令牌"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=1941&is_year=2026"
source_quality: full
topics: [802.11bt, TGbt, post-quantum cryptography, proof of work, LB297, comment resolution, RSNXE, Authentication frame]
topic_primary: security-privacy
topics_secondary: [roaming-mobility]
novelty_score: 3
---

## Summary (EN)
TGbt has a new revision of the proof-of-work (PoW) comment-resolution document and its companion slides, both uploaded on 23 November 2026 (ET) by Anuj Dharap (Cisco Systems): DCN 11-26-1941r7, "LB297 CR for 11bt D1.0 PoW" (the .docx was read in full), and DCN 11-26-1980r3, "Presentation - LB297 CR for 11bt D1.0 PoW CIDs", whose first slide describes it as "Supporting proposed resolutions in 11-26/1941r7". The document lists 88 CIDs, names Anuj Dharap, Juan Carlos Zuniga, Stephen Orr and Domenico Ficara (Cisco Systems), Ming Zhao (Huawei) and Xuwen Zhao (TCL) as authors, and carries a revision history from R0 to R7. The earlier KB digest of this thread covered r1, which listed 86 CIDs.

The slides group the 88 CIDs into themes. Proposed Accepted/Revised: editorial placement (18 CIDs: procedure moved to Clause 12, matching formats kept in Clause 9), missing state-machine behaviour (7), Table 9-87 placeholder cleanup (13), skipping PoW when trust already exists (2), new capabilities (5) and field-level wording and clarification (27). Proposed Rejected: 16 CIDs (270, 309, 314, 375, 376, 378, 380, 407, 495, 513, 516, 591, 614, 680, 681, 724), with rationale in the text document. The last slide states what stays the same: the core PoW challenge/response mechanism, the AP Nonce / TSF Timestamp construction and the threshold-based trigger (dot11RSNAProofOfWorkThreshold).

The revision history records what changed from r2 to r7: r2 moves Exemption Token delivery from the Authentication response to the Association/Reassociation Response; r4 updates the CID 227 resolution to a stateful token with a single-use property; r6 removes the text asking for the PoW element to be included in FT exchanges (CID 126), adds an FT exception for CID 419 and adds further status codes for CID 230; r7 moves the token-support signalling to the RSNXE, changes the CID 343 resolution "to prevent daisy-chaining on PoW Attempts", states that value 0 for Extension is reserved, and updates the resolutions of CIDs 233, 611, 334, 155, 442, 723 and 581.

The two new capabilities the slides single out are described in the draft text of the document. CID 230 (challenge lifetime): a prover that cannot finish a PoW within the challenge's base lifetime sends an Authentication frame with transaction sequence number 1 and status code INSUFFICIENT_POW_LIFETIME, echoing the challenge; a verifier that advertised support (Extension Support/Request bit in PoW Flags) may reply, with status code POW_REQUIRED, with the echoed challenge plus an Extension Token carrying an Extended Lifetime no greater than dot11RSNAProofOfWorkMaxExtendedLifetime, or without a token to deny. The prover later returns the token unchanged with its solution, and the verifier recomputes the Token Authenticator before adding the Extended Lifetime to the effective lifetime. A prover that declines a challenge because its difficulty exceeds a locally selected limit can send POW_DIFFICULTY_LEVEL_NOT_SUPPORTED, and the verifier may answer with a lower-difficulty challenge or discard the report. CID 227 (PoW Admission Token, new subclause 12.17.6): when both peers set the PoW Admission Token Support field in the RSNXE, the verifier includes a PoW Admission Token element, carrying a 16-octet opaque Admission ID and a Validity in hours (value 0 reserved), in the encrypted body of a successful (Re)Association Response. The prover may present it in the first Authentication frame of a later attempt to be exempted from the PoW exchange. The verifier keeps state per entry (AKM and security profile, a finite failure allowance, expiry) and retires the Admission ID on first successful use. The scope is the issuing AP or AP MLD, or all AP MLDs in the SMD for an SMD-ME association. The text states that the token exempts only the PoW exchange and that all other authentication and association validation, including 12.16.8.3 (IEEE 802.1X), is still performed. The MIB object dot11RSNAPoWAdmissionTokenValidity has a default of 60 in the document.

## Summary (ZH)
TGbt 提交了 PoW（工作量证明）意见处理文档及配套幻灯片的新版本，二者均由 Cisco Systems 的 Anuj Dharap 于 2026 年 11 月 23 日（美东时间）上传：DCN 11-26-1941r7《LB297 CR for 11bt D1.0 PoW》（已通读 .docx），以及 DCN 11-26-1980r3《Presentation - LB297 CR for 11bt D1.0 PoW CIDs》，其首页称其“Supporting proposed resolutions in 11-26/1941r7”。文档列出 88 个 CID，作者包括 Cisco Systems 的 Anuj Dharap、Juan Carlos Zuniga、Stephen Orr、Domenico Ficara，Huawei 的 Ming Zhao 和 TCL 的 Xuwen Zhao，并附有 R0 至 R7 的修订记录。本知识库此前对该线程的摘要涵盖 r1，当时列出 86 个 CID。

幻灯片将 88 个 CID 按主题分组。拟 Accepted/Revised：编辑性位置调整（18 个 CID：流程文字移入第 12 条，格式保留在第 9 条）、状态机行为缺失（7 个）、Table 9-87 占位符清理（13 个）、已有信任时跳过 PoW（2 个）、新增能力（5 个）以及字段级措辞与澄清（27 个）。拟 Rejected：16 个 CID（270、309、314、375、376、378、380、407、495、513、516、591、614、680、681、724），理由见文本文档。最后一页写明保持不变的内容：核心 PoW 挑战/响应机制、AP Nonce / TSF Timestamp 的构造，以及基于阈值的触发（dot11RSNAProofOfWorkThreshold）。

修订记录列出了 r2 至 r7 的变化：r2 将 Exemption Token 的发放从 Authentication 响应移至 Association/Reassociation 响应；r4 将 CID 227 的处理改为带单次使用属性的有状态令牌；r6 删除了要求在 FT 交互中包含 PoW 元素的文字（CID 126），为 CID 419 增加 FT 例外，并为 CID 230 增加更多状态码；r7 将令牌支持信令移至 RSNXE，修改 CID 343 的处理结果以“防止 PoW 尝试的链式叠加”（daisy-chaining），规定 Extension 取值 0 为保留，并更新了 CID 233、611、334、155、442、723、581 的处理结果。

幻灯片重点提到的两项新增能力在文档草案文字中有具体描述。CID 230（挑战有效期）：证明方若无法在挑战的基础有效期内完成 PoW，则发送 Authentication 事务序号为 1、状态码为 INSUFFICIENT_POW_LIFETIME 的帧并回显该挑战；声明支持（PoW Flags 中的 Extension Support/Request 位）的验证方可用状态码 POW_REQUIRED 回复，内含回显的挑战与一个 Extension Token（其 Extended Lifetime 不超过 dot11RSNAProofOfWorkMaxExtendedLifetime），或不带令牌表示拒绝。证明方随后将令牌原样附在解答中返回，验证方重新计算 Token Authenticator 后才将 Extended Lifetime 计入有效期。若挑战难度超过本地选定的上限，证明方可发送 POW_DIFFICULTY_LEVEL_NOT_SUPPORTED，验证方可回应一个更低难度的挑战或丢弃该报告。CID 227（PoW 准入令牌，新增子条款 12.17.6）：双方均在 RSNXE 中置位 PoW Admission Token Support 字段时，验证方在成功的（重）关联响应的加密帧体中携带 PoW Admission Token 元素，内含 16 个八位组的不透明 Admission ID 与以小时计的 Validity（值 0 保留）。证明方可在之后某次认证的首个 Authentication 帧中出示它，以免除 PoW 交互。验证方按条目保存状态（AKM 与安全配置、有限的失败额度、到期时间），并在首次成功使用时注销该 Admission ID。适用范围为签发的 AP 或 AP MLD，对与 SMD-ME 的关联则为该 SMD 内所有 AP MLD。文中明确令牌仅免除 PoW 交互，包括 12.16.8.3（IEEE 802.1X）在内的其他认证与关联校验仍须执行。文档中 MIB 对象 dot11RSNAPoWAdmissionTokenValidity 的默认值为 60。

## Key technical points (EN)
- **DCN 11-26-1941r7 · TGbt** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=1941&is_year=2026) LB297 CR for 11bt D1.0 PoW. Anuj Dharap et al. (Cisco Systems). 88 CIDs; revision history R0 to R7; uploaded 23 November 2026.
- **DCN 11-26-1980r3 · TGbt** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=1980&is_year=2026) Presentation - LB297 CR for 11bt D1.0 PoW CIDs. Anuj Dharap et al. (Cisco Systems). Seven themes; 16 proposed Rejected CIDs; slide 15 lists what stays the same.
- CID 343 resolution in the text: on successful verification of the PoW solution, the verifier processes the authentication attempt per 12.16.8.3 as if the PoW element had not been required. CID 571: an invalid solution (failed AP Nonce recomputation, stale TSF Timestamp or unmet hash condition) is answered with an Authentication frame with transaction sequence number 2 and status code POW_SOLUTION_INVALID.
- CID 162 resolution: POW_REQUIRED is non-terminal; prover computation and retry limits are left to local policy, with no mandatory MIB retry limit introduced.
- CID 419: a verifier shall not respond with POW_REQUIRED to an Authentication frame with algorithm number 2 (Fast BSS Transition) or to an FT Request frame; such attempts still count toward the counter of open, unfinished PQC protocol instances. A verifier also shall not send POW_REQUIRED if the frame carries a PMKID matching an active PMKSA or a valid PoW Admission Token.
- Table 9-87 resolutions are described on the slides as replacing the undefined "<PQC algorithm(s)>" placeholder with explicit AKM-qualified rows, with FT initial mobility domain association covered and FT Authentication (algorithm 2) and FT Request frames excluded from PoW.

## Key technical points (ZH)
- **DCN 11-26-1941r7 · TGbt** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1941&is_year=2026) LB297 CR for 11bt D1.0 PoW。Anuj Dharap 等（Cisco Systems）。88 个 CID；修订记录 R0 至 R7；2026 年 11 月 23 日上传。
- **DCN 11-26-1980r3 · TGbt** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=1980&is_year=2026) Presentation - LB297 CR for 11bt D1.0 PoW CIDs。Anuj Dharap 等（Cisco Systems）。七个主题；16 个拟 Rejected 的 CID；第 15 页列出保持不变的内容。
- 文中 CID 343 的处理：PoW 解答校验成功后，验证方按 12.16.8.3 继续处理该认证尝试，如同未要求过 PoW 元素。CID 571：无效解答（AP Nonce 重算失败、TSF Timestamp 过期或哈希条件不满足）以事务序号为 2、状态码为 POW_SOLUTION_INVALID 的 Authentication 帧回复。
- CID 162 的处理：POW_REQUIRED 为非终结状态；证明方的计算量与重试上限留给本地策略，不引入强制的 MIB 重试上限。
- CID 419：验证方不得对认证算法号为 2（Fast BSS Transition）的 Authentication 帧或 FT Request 帧回复 POW_REQUIRED；这类尝试仍计入未完成 PQC 协议实例的计数器。若帧中携带与有效 PMKSA 匹配的 PMKID 或有效的 PoW 准入令牌，验证方同样不得发送 POW_REQUIRED。
- 幻灯片将 Table 9-87 的处理描述为：用明确的、带 AKM 限定的行取代未定义的“<PQC algorithm(s)>”占位符，覆盖 FT 初始移动域关联，并将 FT Authentication（算法 2）与 FT Request 帧排除在 PoW 之外。

## Why it matters / what's new (EN)
This is a later revision of a thread already in the KB: the 2026-10-22 digest (2026-10-22_ieee-mentor-tgbt-lb297-pow-cids-digest) covers DCN 1941r1, and 2026-10-12_ieee-mentor-tgm-tgbt-decoyauth-pqc-digest mentions the 1941/1980 uploads. What r7 and the 1980r3 slides add, per the documents, is the packaged themes and CID counts (88 CIDs, 16 proposed rejections), the lifetime-extension and difficulty-report exchanges with their new status codes, and the Admission Token as a stateful, single-use, RSNXE-advertised exemption, including the member-feedback changes recorded in r5 to r7. These are proposed resolutions in a comment-resolution document, not adopted text.

## Why it matters / what's new (ZH)
这是知识库中已有线程的后续修订：2026-10-22 的摘要（2026-10-22_ieee-mentor-tgbt-lb297-pow-cids-digest）涵盖 DCN 1941r1，2026-10-12_ieee-mentor-tgm-tgbt-decoyauth-pqc-digest 也提到了 1941/1980 的上传。据文档所述，r7 与 1980r3 幻灯片新增的内容包括：按主题归纳的 CID 数量（88 个 CID、16 个拟拒绝）、带新状态码的有效期延长与难度报告交互，以及作为有状态、单次使用、通过 RSNXE 声明的免除机制的准入令牌，并记录了 r5 至 r7 中根据成员反馈所做的修改。这些均为意见处理文档中的拟议处理结果，并非已通过的文本。
