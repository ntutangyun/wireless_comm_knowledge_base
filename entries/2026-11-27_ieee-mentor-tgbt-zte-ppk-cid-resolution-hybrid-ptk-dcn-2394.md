---
id: 2026-11-27_ieee-mentor-tgbt-zte-ppk-cid-resolution-hybrid-ptk-dcn-2394
date_published: 2026-11-26
date_found: 2026-11-27
technology: wifi
type: ieee-document
title_en: "IEEE 802.11 TGbt: ZTE comment resolution for PPK-relevant CIDs - post-quantum preshared key in the PTK derivation (DCN 11-26-2394r0)"
title_zh: "IEEE 802.11 TGbt：中兴针对 PPK 相关 CID 的评议处理——PTK 推导中的后量子预共享密钥（DCN 11-26-2394r0）"
url: "https://mentor.ieee.org/802.11/documents?is_dcn=2394&is_year=2026"
source_quality: full
topics: [802.11bt, TGbt, PPK, post-quantum, QKD, MAPC, PTK, RFC 8784, RFC 9867]
topic_primary: security-privacy
topics_secondary: [mapc-cosr]
novelty_score: 2
---

## Summary (EN)
DCN 11-26-2394r0, "TGbt Comment Resolution for PPK-Relevant CIDs", is a 15-slide deck by Jay Yang et al. (ZTE), uploaded on 26 November 2026 (18:19 ET); the .pptx was read in full. Its CID table lists three comments against clause 12.17: CID 134 ("PPK can provide additional physical-layer security; please add the PPK feature into subclause 12.17"), CID 248 (Post-Quantum Preshared Key "should be considered an important enhancement mechanism for extra robust security") and CID 534 ("Physical security (e.g., PPK) should be taken into account"). For CIDs 134 and 248 the proposed change reads "The commenter will provide a resolution for this comment"; for CID 534 it reads "As proposed in the comment."

The background slide says the 11bt group is working on asymmetric-key PQC algorithms, integrating ML-KEM into the 802.1X, OWE and PAKE procedures, and a hybrid PQC mode (DH + KEM). It cites a source on global QKD deployment and two sources arguing that symmetric keys remain secure and usable in the quantum era, and says the contribution presents post-quantum symmetric cryptographic algorithms in three parts: future use cases of QKD/PPK in MAPC, the usage of PPK in RFC 8784 and RFC 9867, and a proposed hybrid (asymmetric + symmetric) PQC mode. Three MAPC use cases are drawn, each with the MAPC APs exchanging a PPK_ID on the AP's operating channel: (1) a QKD source embedded in and collocated with each AP, with QKD keys exchanged between the two QKD sources over a quantum channel; (2) QKD integrated into one optical transport network (OTN), both APs obtaining the same QKD key from a single QKD source in that OTN; (3) QKD integrated into different OTNs, with keys exchanged between the two QKD sources embedded in them.

Two slides recap IKEv2 background. RFC 8784 mixes a statically configured PPK once at initial IKE SA setup (SK_d, SK_pi and SK_pr computed as prf+ of the PPK and the standard values), with, as the deck's recap puts it, USE_PPK and PPK_IDENTITY negotiated in IKE_AUTH; the deck notes that SK_e/SK_a of the initial IKE SA are not PPK-protected. RFC 9867 mixes PPKs in IKE_INTERMEDIATE and CREATE_CHILD_SA, so the initial IKE SA is quantum-secure from the start, the initiator may offer multiple candidate PPKs, and fresh PPKs (for example QKD-supplied) can be used without rebuilding the IKE SA.

The proposal for 802.11 has two parts. First, the PPK_ID list is carried in the first two authentication frames: the initiator's Authentication frame carries the current parameters plus a PPK_ID list, and the responder's Authentication frame carries the current parameters plus the selected PPK_ID (the "current parameters" being those required by the selected PQC scheme). Second, in the hybrid mode the PPK is added to the input keying material of the PTK derivation: the existing equation PTK = HKDF-Expand(HKDF-Extract(T, EPHss || IKM), "Pairwise key expansion" || SPA || AA, Length) becomes HKDF-Extract(T, EPHss[||PPK] || IKM), i.e. the PPK is optionally concatenated after EPHss. The deck closes with two straw polls: SP1 asks whether to define one or more post-quantum symmetric cryptographic algorithms in the authentication and key establishment procedures in 11bt; SP2 asks whether to define an optional hybrid PQC algorithm (post-quantum asymmetric plus symmetric) in the MAPC security negotiation procedure, with asymmetric meaning [DH+]KEM and symmetric meaning PPK.

## Summary (ZH)
DCN 11-26-2394r0《TGbt Comment Resolution for PPK-Relevant CIDs》是 Jay Yang 等（中兴）的 15 页文稿，2026 年 11 月 26 日（美东 18:19）上传；已通读 .pptx。其 CID 表列出针对第 12.17 条的三条意见：CID 134（“PPK 可提供额外的物理层安全；请将 PPK 特性加入 12.17 子条款”）、CID 248（后量子预共享密钥“应被视为提供额外稳健安全性的重要增强机制”）和 CID 534（“应考虑物理安全（例如 PPK）”）。CID 134 与 248 的拟议修改为“The commenter will provide a resolution for this comment”；CID 534 为“As proposed in the comment.”

背景页称 11bt 小组正在研究基于非对称密钥的 PQC 算法，将 ML-KEM 集成到 802.1X、OWE 与 PAKE 流程，以及混合 PQC 模式（DH + KEM）。文稿引用一份关于全球 QKD 部署的资料和两份论证“量子时代对称密钥仍然安全可用”的资料，并称本贡献从三方面介绍后量子对称密码算法：QKD/PPK 在 MAPC 中的未来用例、RFC 8784 与 RFC 9867 中 PPK 的用法，以及所提出的混合（非对称 + 对称）PQC 模式。文稿绘出三种 MAPC 用例，均由 MAPC AP 在 AP 工作信道上交换 PPK_ID：(1) 每个 AP 内嵌并同址部署 QKD 源，两个 QKD 源之间经量子信道交换 QKD 密钥；(2) QKD 集成于同一光传送网（OTN），两个 AP 从该 OTN 中的同一个 QKD 源获得相同的 QKD 密钥；(3) QKD 集成于不同 OTN，由内嵌其中的两个 QKD 源交换密钥。

两页回顾 IKEv2 背景。RFC 8784 在初始 IKE SA 建立时一次性混入静态配置的 PPK（SK_d、SK_pi、SK_pr 由 PPK 与标准值经 prf+ 计算），文稿的回顾将 USE_PPK 与 PPK_IDENTITY 的协商置于 IKE_AUTH 中；文稿指出初始 IKE SA 的 SK_e/SK_a 不受 PPK 保护。RFC 9867 在 IKE_INTERMEDIATE 与 CREATE_CHILD_SA 中混入 PPK，使初始 IKE SA 从一开始即具备量子安全，发起方可提供多个候选 PPK，并可使用新鲜 PPK（例如由 QKD 提供）而无需重建 IKE SA。

面向 802.11 的提案分两部分。其一，PPK_ID 列表在前两个认证帧中携带：发起方的 Authentication 帧携带当前参数及 PPK_ID 列表，响应方的 Authentication 帧携带当前参数及所选 PPK_ID（“当前参数”指所选 PQC 方案所需的参数）。其二，在混合模式下 PPK 加入 PTK 推导的输入密钥材料：现有公式 PTK = HKDF-Expand(HKDF-Extract(T, EPHss || IKM), "Pairwise key expansion" || SPA || AA, Length) 变为 HKDF-Extract(T, EPHss[||PPK] || IKM)，即 PPK 可选地拼接在 EPHss 之后。文末为两项表决：SP1 询问是否在 11bt 的认证与密钥建立流程中定义一种或多种后量子对称密码算法；SP2 询问是否在 MAPC 安全协商流程中定义可选的混合 PQC 算法（后量子非对称 + 对称），其中非对称指 [DH+]KEM，对称指 PPK。

## Key technical points (EN)
- **DCN 11-26-2394r0 · TGbt** — [document](https://mentor.ieee.org/802.11/documents?is_dcn=2394&is_year=2026) Comment Resolution for PPK-Relevant CIDs. Jay Yang et al. (ZTE). CIDs 134, 248 and 534, all against clause 12.17.
- PPK_ID exchange: carried in the first two authentication frames (initiator sends a PPK_ID list, responder returns the selected PPK_ID).
- Hybrid PTK derivation: PPK optionally concatenated after EPHss in the HKDF-Extract input, alongside the existing IKM.
- MAPC use cases: QKD source collocated with each AP; QKD inside one OTN; QKD in different OTNs; PPK_ID always exchanged on the AP's operating channel.
- Straw polls SP1 (post-quantum symmetric algorithms in 11bt authentication and key establishment) and SP2 (optional hybrid algorithm in MAPC security negotiation).

## Key technical points (ZH)
- **DCN 11-26-2394r0 · TGbt** — [文档链接](https://mentor.ieee.org/802.11/documents?is_dcn=2394&is_year=2026) Comment Resolution for PPK-Relevant CIDs。Jay Yang 等（中兴）。CID 134、248、534，均针对第 12.17 条。
- PPK_ID 交换：在前两个认证帧中携带（发起方发送 PPK_ID 列表，响应方返回所选 PPK_ID）。
- 混合 PTK 推导：PPK 可选地拼接在 HKDF-Extract 输入中 EPHss 之后，与现有 IKM 并存。
- MAPC 用例：QKD 源与每个 AP 同址；QKD 位于同一 OTN 内；QKD 位于不同 OTN；PPK_ID 始终在 AP 工作信道上交换。
- 表决 SP1（11bt 认证与密钥建立中的后量子对称算法）与 SP2（MAPC 安全协商中的可选混合算法）。

## Why it matters / what's new (EN)
The deck turns three PPK-related comments on clause 12.17 into a concrete proposal (frame carriage of the PPK_ID and a PTK-derivation change) with straw polls. The same PPK/RFC 8784/RFC 9867 theme was recorded earlier as a WIN SG contribution in 2026-10-28_ieee-mentor-win-sg-ppk-qkd-use-cases-security-scope-digest; this one is a TGbt comment-resolution document and its reference list includes a "security enhancement in MAPC for WIN" document (26/1676). Other TGbt post-quantum items in this KB are 2026-10-12_ieee-mentor-tgm-tgbt-decoyauth-pqc-digest and 2026-11-06_ieee-mentor-tgbt-pqc-eap-tls-fragmentation-authentication-mmpdu. Only the slide deck was read; the straw-poll outcome is not in it.

## Why it matters / what's new (ZH)
该文稿把针对第 12.17 条的三条 PPK 相关意见落实为具体提案（PPK_ID 的帧内携带及 PTK 推导修改）并附表决。同一 PPK/RFC 8784/RFC 9867 主题此前已作为 WIN SG 贡献记录于 2026-10-28_ieee-mentor-win-sg-ppk-qkd-use-cases-security-scope-digest；本文档则是 TGbt 的评议处理文档，其参考文献包含一份“security enhancement in MAPC for WIN”文档（26/1676）。本知识库中 TGbt 的其他后量子相关条目有 2026-10-12_ieee-mentor-tgm-tgbt-decoyauth-pqc-digest 与 2026-11-06_ieee-mentor-tgbt-pqc-eap-tls-fragmentation-authentication-mmpdu。仅阅读了演示文稿；表决结果不在其中。
